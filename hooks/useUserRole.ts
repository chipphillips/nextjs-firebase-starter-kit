// Import necessary hooks and functions from React and Firebase
import { useState, useEffect } from 'react';
import { doc, getDoc, setDoc, Firestore } from 'firebase/firestore';
import { db } from '@/lib/config/firebase-client';
import { useAuth } from './useAuth';
import { DB_COLLECTIONS } from '@/lib/dao/db-collections';

// Define the possible user roles in our application
type UserRole = 'admin' | 'betaUser' | 'user';

// Custom hook to manage and fetch the user's role
export function useUserRole() {
  // Use the useAuth hook to get the current user and authentication loading state
  const { user, loading: authLoading } = useAuth();
  // State to store the user's role
  const [role, setRole] = useState<UserRole | null>(null);
  // State to track if we're still loading the role
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Don't do anything if we're still checking authentication
    if (authLoading) return;

    // Function to fetch or create the user's role
    async function fetchUserRole() {
      if (user && db) {
        try {
          // Create a reference to the user's document in Firestore
          const userDocRef = doc(db, DB_COLLECTIONS.USERS, user.uid);
          // Try to get the user's document
          const userDoc = await getDoc(userDocRef);
          
          if (userDoc.exists()) {
            // If the document exists, set the role from the data
            const data = userDoc.data();
            setRole(data.role as UserRole);
          } else {
            // If the document doesn't exist, create it with a default 'user' role
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
        // If there's no user, set the role to null
        setRole(null);
      }
      // We're done loading, so set loading to false
      setLoading(false);
    }

    // Call the function to fetch the user's role
    fetchUserRole();
  }, [user, authLoading]); // Re-run this effect if the user or authLoading changes

  // Return the user's role and the loading state
  return { role, loading };
}