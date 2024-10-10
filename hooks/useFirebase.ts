'use client';

import { useEffect, useState } from 'react';
import { getApps, initializeApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';

// Firebase configuration object
// These environment variables should be set in your project's .env.local file
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  // ... other config options
};

// Custom hook to initialize and provide Firebase services
export const useFirebase = () => {
  // State to hold Firebase Auth and Firestore instances
  const [auth, setAuth] = useState<Auth | null>(null);
  const [firestore, setFirestore] = useState<Firestore | null>(null);
  
  useEffect(() => {
    // Check if we're in a browser environment and Firebase hasn't been initialized yet
    if (typeof window !== 'undefined' && !getApps().length) {
      // Initialize Firebase app
      const app = initializeApp(firebaseConfig);
      
      // Get Auth and Firestore instances and update state
      setAuth(getAuth(app));
      setFirestore(getFirestore(app));
    }
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // Return the Firebase services for use in components
  return { auth, firestore };
};