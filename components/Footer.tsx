'use client'

import Link from 'next/link'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@/lib/config/firebase-client'
import { useState, useEffect } from 'react'

export default function Footer() {
  const [user, loading] = useAuthState(auth)
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    const checkAdminStatus = async () => {
      if (user) {
        try {
          const idToken = await user.getIdToken()
          const response = await fetch('/api/auth/verify-admin', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ uid: user.uid }),
          })
          
          const data = await response.json()
          setIsAdmin(data.status === 'success')
        } catch (error) {
          console.error('Error checking admin status:', error)
          setIsAdmin(false)
        }
      } else {
        setIsAdmin(false)
      }
    }

    checkAdminStatus()
  }, [user])

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
          <div className="px-5 py-2">
            <Link href="/about" className="text-base text-gray-300 hover:text-white">
              About
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/contact" className="text-base text-gray-300 hover:text-white">
              Contact
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/privacy" className="text-base text-gray-300 hover:text-white">
              Privacy Policy
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/terms" className="text-base text-gray-300 hover:text-white">
              Terms of Service
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link 
              href={isAdmin ? "/admin" : "/admin/login"} 
              className="text-base text-gray-300 hover:text-white"
            >
              {loading ? "Loading..." : "Admin"}
            </Link>
          </div>
        </nav>
        <p className="mt-8 text-center text-base text-gray-400">
          © {new Date().getFullYear()} Constructiv AI. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
