'use client';

import React, { useState } from 'react';
import { auth, firestore } from '@/lib/firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { Button } from './ui/button';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/useToast'; // Ensure this hook is created

const FirebaseTest: React.FC = () => {
  const { user } = useAuth();
  const [docId, setDocId] = useState<string | null>(null);
  const { showToast } = useToast();

  const signIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error('Error signing in with Google', error);
      showToast('Error signing in. Please try again.');
    }
  };

  const addDocument = async () => {
    if (!user) {
      console.error('User not signed in');
      return;
    }

    try {
      const docRef = await addDoc(collection(firestore, 'test-collection'), {
        userId: user.uid,
        timestamp: new Date(),
        message: 'Test document'
      });
      setDocId(docRef.id);
      console.log('Document written with ID: ', docRef.id);
    } catch (error) {
      console.error('Error adding document: ', error);
      showToast('Error adding document. Please try again.');
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-text-primary">Firebase Test</h2>
      {!user ? (
        <Button onClick={signIn} className="btn-primary">Sign In with Google</Button>
      ) : (
        <div>
          <p className="text-text-secondary">Signed in as: {user.displayName}</p>
          <Button onClick={addDocument} className="btn-secondary">Add Test Document</Button>
        </div>
      )}
      {docId && <p className="text-text-secondary">Document added with ID: {docId}</p>}
    </div>
  );
};

export default FirebaseTest;