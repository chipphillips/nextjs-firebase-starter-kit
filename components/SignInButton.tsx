import React from 'react';
import { useAuth } from '../lib/context/FirebaseAuthContext';

export const SignInButton: React.FC = () => {
  const { signInWithGoogle } = useAuth();

  return (
    <button onClick={signInWithGoogle}>
      Sign in with Google
    </button>
  );
};