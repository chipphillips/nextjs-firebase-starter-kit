import { useState, useEffect } from 'react';
import { doc, getDoc, setDoc, Firestore } from 'firebase/firestore';
import { db } from '@/lib/config/firebase-client';
import { useAuth } from './useAuth';
import { DB_COLLECTIONS } from '@/lib/dao/db-collections';

type UserRole = 'admin' | 'betaUser' | 'user';

export function useUserRole() {
  const { user, loading: authLoading } = useAuth();
  const [role, setRole] = useState<UserRole | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (authLoading) return;

    async function fetchUserRole() {
      if (user && db) {
        try {
          const userDocRef = doc(db, DB_COLLECTIONS.USERS, user.uid);
          const userDoc = await getDoc(userDocRef);
          if (userDoc.exists()) {
            const data = userDoc.data();
            setRole(data.role as UserRole);
          } else {
            // If user document doesn't exist, create it with default role 'user'
            await setDoc(userDocRef, {
              email: user.email,
              role: 'user',
              createdAt: new Date(),
            });
            setRole('user');
          }
        } catch (error) {
          console.error('Error fetching user role:', error);
        }
      } else {
        setRole(null);
      }
      setLoading(false);
    }

    fetchUserRole();
  }, [user, authLoading]);

  return { role, loading };
}