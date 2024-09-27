'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { ChevronDown } from 'lucide-react'

export function HeaderComponent() {
  const [isResourcesOpen, setIsResourcesOpen] = useState(false)
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/constructiv AI square 50 logo.svg"
                alt="Constructiv AI Logo"
                width={50}
                height={50}
                priority
              />
              <span className="ml-2 text-black font-bold text-xl" style={{ fontFamily: 'Avenir, sans-serif' }}>
                Constructiv AI
              </span>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8 items-center">
            <Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link>
            <Link href="/services" className="text-gray-600 hover:text-gray-900">Services</Link>
            <div className="relative group">
              <button 
                className="text-gray-600 hover:text-gray-900 flex items-center"
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
              >
                Resources
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isResourcesOpen && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <Link href="/resources" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">All Resources</Link>
                    <Link href="/resources/blog" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Blog</Link>
                  </div>
                </div>
              )}
            </div>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
          </nav>
          
          <div className="flex items-center">
            <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
              Log In / Sign Up
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}