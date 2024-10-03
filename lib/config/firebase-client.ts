import { getApps, initializeApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase App
export function initializeFirebaseApp() {
  return initializeApp(firebaseConfig);
}

// Get Firebase Auth instance
export function getFirebaseAuth(): Auth {
  const app = initializeFirebaseApp();
  return getAuth(app);
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

// Export the getAuth function
export const auth = getAuth(app);
// Export Firestore instance
export const db = getFirestore(app);

// Export Storage instance
export const storage = getStorage(app);

// Remove redundant export of getFirebaseAuth
// The getFirebaseAuth function is already defined and exported above