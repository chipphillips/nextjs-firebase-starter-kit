/**
 * NB: This file is for server-side Firebase Admin SDK configuration
 * It should not be used in the client-side code
 */

import "server-only";
import { initializeApp, cert, ServiceAccount, getApps } from "firebase-admin/app";
import { getFirestore, Firestore } from "firebase-admin/firestore";
import { getAuth, UserRecord } from "firebase-admin/auth";
import { getStorage } from "firebase-admin/storage";
import { getDatabase } from "firebase-admin/database";
import { cache } from 'react';
import { sendEmail } from './email-sender';
import { Role } from '@/types';

// Firebase Admin SDK configuration
const serviceAccount = {
  type: "service_account",
  project_id: process.env.FIREBASE_ADMIN_PROJECT_ID,
  private_key_id: process.env.FIREBASE_ADMIN_PRIVATE_KEY_ID,
  private_key: process.env.FIREBASE_ADMIN_PRIVATE_KEY,
  client_email: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
  client_id: process.env.FIREBASE_ADMIN_CLIENT_ID,
  auth_uri: process.env.FIREBASE_ADMIN_AUTH_URI,
  token_uri: process.env.FIREBASE_ADMIN_TOKEN_URI,
  auth_provider_x509_cert_url: process.env.FIREBASE_ADMIN_AUTH_CERT_URL,
  client_x509_cert_url: process.env.FIREBASE_ADMIN_CLIENT_CERT_URL,
} as ServiceAccount;

// Initialize the Firebase Admin SDK
const appName = "VAKS-APP-ADMIN";

export const app = getApps().find((it) => it.name === appName) || initializeApp(
  {
    credential: cert(serviceAccount),
    databaseURL: process.env.FIREBASE_ADMIN_DATABASE_URL,
    projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  },
  appName
);

export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const database = getDatabase(app);
export const storage = getStorage(app);

// User management functions
const getByEmail = cache(async (email: string): Promise<UserRecord> => {
  return await auth.getUserByEmail(email);
});

const getByPhoneNumber = cache(async (phoneNumber: string): Promise<UserRecord> => {
  return await auth.getUserByPhoneNumber(phoneNumber);
});

const getByUid = cache(async (uid: string): Promise<UserRecord> => {
  return await auth.getUser(uid);
});

type UserInput = {
  email: string;
  phoneNumber?: string;
  password: string;
  role: Role;
  displayName: string;
};

const create = cache(async (data: UserInput): Promise<UserRecord> => {
  const user = await auth.createUser({
    email: data.email,
    phoneNumber: data.phoneNumber || "",
    password: data.password,
    displayName: data.displayName,
    emailVerified: false,
    disabled: false,
  });

  await auth.setCustomUserClaims(user.uid, { role: data.role });
  await generateEmailVerificationLink(data.email, data.displayName);

  return user;
});

type UserUpdateInput = {
  email: string;
  phoneNumber: string;
  displayName: string;
  photoURL: string;
  emailVerified: boolean;
  disabled: boolean;
};

const update = cache(async (uid: string, data: UserUpdateInput): Promise<UserRecord> => {
  return await auth.updateUser(uid, data);
});

const deleteById = cache(async (uid: string): Promise<void> => {
  await auth.deleteUser(uid);
});

const getAll = cache(async (size: number): Promise<UserRecord[]> => {
  const listUsers = await auth.listUsers(size);
  return listUsers.users;
});

const generateEmailVerificationLink = async (email: string, name?: string): Promise<string> => {
  const username = name || (await getByEmail(email)).displayName || email;
  const link = await auth.generateEmailVerificationLink(email);
  await sendEmail({ email, username, link }, "VERIFY_EMAIL");
  return "Email verification link sent to user's email.";
};

const generatePasswordResetLink = async (email: string): Promise<string> => {
  try {
    const user = await getByEmail(email);
    const name = user.displayName || user.email || '';
    const link = await auth.generatePasswordResetLink(email);
    await sendEmail({ email, name, link }, "RESET_PASSWORD");
    return "Password reset link sent to user's email.";
  } catch (e) {
    throw new Error("No user found with this email address. Please check the email address and try again.");
  }
};

const generateSignInWithEmailLink = async (email: string): Promise<string> => {
  return await auth.generateSignInWithEmailLink(email, {
    url: process.env.FIREBASE_AUTH_REDIRECT_URL as string,
    handleCodeInApp: true
  });
};

const requiredVerifyEmail = async (email: string): Promise<void> => {
  const user = await getByEmail(email);
  if (!user.emailVerified) {
    await generateEmailVerificationLink(email);
    throw new Error("Please verify your email before signing in! Check your email for a verification link.");
  }
};

export const authUserApi = {
  getByEmail,
  getByPhoneNumber,
  getByUid,
  create,
  update,
  deleteById,
  getAll,
  generateEmailVerificationLink,
  generatePasswordResetLink,
  generateSignInWithEmailLink,
  requiredVerifyEmail
} as const;

export function getFirestoreInstance(): Firestore {
  return firestore;
}