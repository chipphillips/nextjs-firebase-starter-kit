'use client';

import { useEffect, useState } from 'react';
import { getApps, initializeApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  // ... other config options
};

export const useFirebase = () => {
  const [auth, setAuth] = useState<Auth | null>(null);
  const [firestore, setFirestore] = useState<Firestore | null>(null);
  
  useEffect(() => {
    if (typeof window !== 'undefined' && !getApps().length) {
      const app = initializeApp(firebaseConfig);
      setAuth(getAuth(app));
      setFirestore(getFirestore(app));
    }
  }, []);

  return { auth, firestore };
};