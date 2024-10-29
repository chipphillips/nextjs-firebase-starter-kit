"use client"
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/lib/config/firebase-client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    
    try {
      console.log('Attempting sign in for:', email);
      // Sign in with Firebase
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      
      console.log('Sign in successful, refreshing token...');
      // Force refresh the token to get updated claims
      await userCredential.user.getIdToken(true)
      
      console.log('Verifying admin status...');
      // Verify admin status
      const response = await fetch('/api/auth/verify-admin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ uid: userCredential.user.uid }),
      })

      const data = await response.json()
      console.log('Admin verification response:', data);

      if (data.status === 'success') {
        console.log('Admin verified, creating session...');
        // Get the ID token with updated claims
        const idToken = await userCredential.user.getIdToken(true)
        
        // Create session cookie
        const sessionResponse = await fetch('/api/admin/auth', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ idToken }),
        })

        const sessionData = await sessionResponse.json()
        console.log('Session creation response:', sessionData);

        if (sessionData.status === 'success') {
          console.log('Login successful, redirecting...');
          router.push('/admin')
        } else {
          throw new Error(sessionData.error || 'Failed to create session')
        }
      } else {
        setError(data.message || 'Unauthorized access - You do not have admin privileges')
      }
    } catch (error: any) {
      console.error('Login error:', {
        code: error.code,
        message: error.message,
        fullError: error
      })
      
      const errorMessages: { [key: string]: string } = {
        // Authentication errors
        'auth/wrong-password': 'Incorrect password',
        'auth/user-not-found': 'No account found with this email',
        'auth/invalid-email': 'Invalid email address',
        'auth/too-many-requests': 'Too many failed attempts. Please try again later',
        'auth/user-disabled': 'This account has been disabled',
        'auth/operation-not-allowed': 'Email/password sign-in is not enabled',
        'auth/network-request-failed': 'Network error - please check your connection',
        
        // Admin-specific errors
        'auth/insufficient-permission': 'You do not have admin privileges',
        'auth/invalid-claims': 'Invalid admin credentials',
        'auth/session-cookie-expired': 'Your session has expired. Please login again',
        'auth/session-cookie-revoked': 'Your session has been revoked. Please login again',
        
        // Custom error codes from your API
        'admin-verification-failed': 'Failed to verify admin status',
        'session-creation-failed': 'Failed to create admin session'
      };

      const errorMessage = errorMessages[error.code as keyof typeof errorMessages] || 
        `Authentication error: ${error.message || 'Unknown error occurred'}`;
      
      setError(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
              isLoading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isLoading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  )
}
