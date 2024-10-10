'use client';

// Import necessary dependencies for React, Firebase, and custom UI components
import React, { useState } from 'react';
import { auth, firestore } from '@/lib/firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { Button } from './ui/button';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/useToast'; // Custom hook for displaying toast notifications

// Define the FirebaseTest component
const FirebaseTest: React.FC = () => {
  // Use the custom useAuth hook to access user information
  const { user } = useAuth();
  // State to store the ID of the newly added document
  const [docId, setDocId] = useState<string | null>(null);
  // Use the custom useToast hook for displaying notifications
  const { showToast } = useToast();

  // Function to handle Google Sign-In
  const signIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      // Attempt to sign in with Google
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error('Error signing in with Google', error);
      // Display an error message to the user if sign-in fails
      showToast('Error signing in. Please try again.');
    }
  };

  // Function to add a test document to Firestore
  const addDocument = async () => {
    // Check if the user is signed in before adding a document
    if (!user) {
      console.error('User not signed in');
      return;
    }

    try {
      // Add a new document to the 'test-collection' in Firestore
      const docRef = await addDoc(collection(firestore, 'test-collection'), {
        userId: user.uid,
        timestamp: new Date(),
        message: 'Test document'
      });
      // Store the new document's ID in state
      setDocId(docRef.id);
      console.log('Document written with ID: ', docRef.id);
    } catch (error) {
      console.error('Error adding document: ', error);
      // Display an error message if document addition fails
      showToast('Error adding document. Please try again.');
    }
  };

  // Render the component
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-text-primary">Firebase Test</h2>
      {!user ? (
        // If user is not signed in, show the Sign In button
        <Button onClick={signIn} className="btn-primary">Sign In with Google</Button>
      ) : (
        // If user is signed in, show user info and Add Document button
        <div>
          <p className="text-text-secondary">Signed in as: {user.displayName}</p>
          <Button onClick={addDocument} className="btn-secondary">Add Test Document</Button>
        </div>
      )}
      {/* Display the ID of the newly added document, if available */}
      {docId && <p className="text-text-secondary">Document added with ID: {docId}</p>}
    </div>
  );
};

export default FirebaseTest;