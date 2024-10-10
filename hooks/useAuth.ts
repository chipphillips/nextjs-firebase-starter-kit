import { useState, useEffect } from 'react';
import { User, Auth, onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/lib/config/firebase-client';

// Custom hook to manage authentication state
export function useAuth() {
  // State to store the current user (null if not authenticated)
  const [user, setUser] = useState<User | null>(null);
  // State to track if the authentication check is still in progress
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set up a listener for authentication state changes
    const unsubscribe = onAuthStateChanged(auth as Auth, (currentUser: User | null) => {
      // Update the user state with the current user (or null if signed out)
      setUser(currentUser);
      // Authentication check is complete, so set loading to false
      setLoading(false);
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // Return the user and loading state for use in components
  return { user, loading };
}