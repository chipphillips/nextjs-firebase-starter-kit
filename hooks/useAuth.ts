import { useState, useEffect } from 'react';
import { User, Auth, onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/lib/config/firebase-client';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth as Auth, (currentUser: User | null) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { user, loading };
}