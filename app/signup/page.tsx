'use client';

import { useState } from 'react';

export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Sign Up for Constructiv AI</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        {/* Add form fields */}
        <button type="submit" className="w-full bg-primary text-white rounded-md px-4 py-2 hover:bg-opacity-90">
          Create Account
        </button>
      </form>
    </main>
  );
}