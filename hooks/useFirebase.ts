'use client';

import { useState, useEffect } from 'react';
import { User, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth, db } from '@/lib/config/firebase-client';
import { doc, getDoc, setDoc } from 'firebase/firestore';

export function useFirebase() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const createPost = async (postData: any) => {
    if (!user) return null;
    try {
      const postRef = doc(db, 'posts', postData.slug);
      await setDoc(postRef, {
        ...postData,
        authorId: user.uid,
        createdAt: new Date().toISOString(),
      });
      return postData;
    } catch (error) {
      console.error('Error creating post:', error);
      return null;
    }
  };

  return { user, loading, createPost };
}
