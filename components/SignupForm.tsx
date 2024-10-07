import React, { useState } from 'react';
import { auth } from '@/lib/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignupForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const signUp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // Handle successful sign-up (e.g., redirect to dashboard)
      console.log('User signed up:', userCredential.user);
    } catch (error) {
      console.error('Error signing up:', error);
      setError('Failed to sign up. Please try again.');
    }
  };

  return (
    <form onSubmit={signUp} className="space-y-4">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
        className="w-full p-2 border rounded"
      />
      {error && <p className="text-red-500">{error}</p>}
      <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
        Sign Up
      </button>
    </form>
  );
};

export default SignupForm;