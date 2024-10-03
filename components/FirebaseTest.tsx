'use client';

import React, { useState } from 'react';
import { auth, db } from '@/lib/firebase';
import { signInWithPopup, GoogleAuthProvider, User } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { Button } from './ui/button';

const FirebaseTest: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [docId, setDocId] = useState<string | null>(null);

  const signIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      console.log('Signed in successfully:', result.user);
    } catch (error) {
      console.error('Error signing in with Google', error);
    }
  };

  const addDocument = async () => {
    if (!user) {
      console.error('User not signed in');
      return;
    }

    try {
      const docRef = await addDoc(collection(db, 'test-collection'), {
        userId: user.uid,
        timestamp: new Date(),
        message: 'Test document'
      });
      setDocId(docRef.id);
      console.log('Document written with ID: ', docRef.id);
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Firebase Test</h2>
      {!user ? (
        <Button onClick={signIn}>Sign In with Google</Button>
      ) : (
        <div>
          <p>Signed in as: {user.displayName}</p>
          <Button onClick={addDocument}>Add Test Document</Button>
        </div>
      )}
      {docId && <p>Document added with ID: {docId}</p>}
    </div>
  );
};

export default FirebaseTest;