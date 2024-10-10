import React from 'react';
import { useRouter } from 'next/router'; // Fixed import for router
import { useAuth } from '../lib/context/FirebaseAuthContext';

// SignInButton component: Renders a button for user authentication
export const SignInButton: React.FC = () => {
  // Get the signInWithGoogle function from the auth context
  const { signInWithGoogle } = useAuth();
  // Initialize the router for navigation
  const router = useRouter();

  // Function to handle the sign-in button click
  const handleSignInClick = () => {
    // Redirect the user to the signin page when clicked
    router.push('/signin');
  };

  // Render a button that triggers the handleSignInClick function when clicked
  return (
    <button onClick={handleSignInClick}>
      Sign In
    </button>
  );
};