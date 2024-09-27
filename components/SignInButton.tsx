import React from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../lib/context/FirebaseAuthContext';

export const SignInButton: React.FC = () => {
  const { signInWithGoogle } = useAuth();
  const router = useRouter();

  const handleSignInClick = () => {
    router.push('/signin');
  };

  return (
    <button onClick={handleSignInClick}>
      Sign In
    </button>
  );
};