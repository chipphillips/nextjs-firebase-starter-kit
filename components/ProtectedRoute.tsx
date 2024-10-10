'use client';

// Import necessary hooks and components
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../lib/context/FirebaseAuthContext';

// ProtectedRoute component: Ensures that only authenticated users can access certain pages
export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  // Get user and loading state from the authentication context
  const { user, loading } = useAuth();
  // Initialize the router for navigation
  const router = useRouter();

  // Effect hook to redirect unauthenticated users to the signin page
  useEffect(() => {
    // Check if the authentication process is complete and the user is not logged in
    if (!loading && !user) {
      // Redirect to the signin page if the user is not authenticated
      router.push('/signin');
    }
  }, [user, loading, router]); // Dependencies for the effect

  // Show a loading indicator while the authentication state is being determined
  if (loading) {
    return <div>Loading...</div>;
  }

  // Render the protected content only if the user is authenticated
  // If not authenticated, render nothing (null)
  return user ? <>{children}</> : null;
}