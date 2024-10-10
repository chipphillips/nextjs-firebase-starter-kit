// Import necessary dependencies for React and Firebase authentication
import React, { useState } from 'react';
import { auth } from '@/lib/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

// Define the SignupForm component
const SignupForm: React.FC = () => {
  // State variables to store user input and potential errors
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  // Function to handle the sign-up process
  const signUp = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission behavior
    try {
      // Attempt to create a new user account with Firebase
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // If successful, we could redirect the user or update the UI
      console.log('User signed up:', userCredential.user);
      // TODO: Implement post-signup actions (e.g., redirect to dashboard)
    } catch (error) {
      // If an error occurs during sign-up, log it and update the error state
      console.error('Error signing up:', error);
      setError('Failed to sign up. Please try again.');
    }
  };

  // Render the sign-up form
  return (
    <form onSubmit={signUp} className="space-y-4">
      {/* Email input field */}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
        className="w-full p-2 border rounded"
      />
      {/* Password input field */}
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
        className="w-full p-2 border rounded"
      />
      {/* Display error message if there's an error */}
      {error && <p className="text-red-500">{error}</p>}
      {/* Submit button for the form */}
      <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
        Sign Up
      </button>
    </form>
  );
};

// Export the SignupForm component for use in other parts of the application
export default SignupForm;