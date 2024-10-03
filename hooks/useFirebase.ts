'use client';

import { useEffect, useState } from 'react';
import { auth as firebaseAuth, db } from '@/lib/config/firebase-client';
import { Firestore } from 'firebase/firestore';
import { Auth } from 'firebase/auth';

export const useFirebase = () => {
  const [auth, setAuth] = useState<Auth | null>(null);
  const [firestore, setFirestore] = useState<Firestore | null>(null);
  
  useEffect(() => {
    // Initialize auth and firestore
    setAuth(firebaseAuth);
    setFirestore(db);
  }, []);

  return { auth, firestore };
};