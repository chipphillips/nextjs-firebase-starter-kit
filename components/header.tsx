'use client'

// Import necessary dependencies and components
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'

// Header component for the website navigation
export function Header() {
  // State to manage the mobile menu open/close
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-background-light shadow-custom py-4">
      <nav className="container mx-auto px-container-padding max-w-container-max">
        <div className="flex items-center justify-between">
          {/* Logo and company name */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/constructiv AI square 50 logo.svg"
              alt="Constructiv AI Logo"
              width={50}
              height={50}
              className="mr-2"
            />
            <span className="text-2xl font-bold text-text-primary">Constructiv AI</span>
          </Link>

          {/* Desktop Navigation - hidden on mobile, visible on medium screens and up */}
          <ul className="hidden md:flex space-x-6">
            {/* Navigation links */}
            <li><Link href="/ai-tools" className="text-secondary hover:text-secondary-dark">AI Tools</Link></li>
            <li><Link href="/services" className="text-secondary hover:text-secondary-dark">Services</Link></li>
            <li><Link href="/about" className="text-secondary hover:text-secondary-dark">About</Link></li>
            <li><Link href="/resources/blog" className="text-secondary hover:text-secondary-dark">Blog</Link></li>
            <li><Link href="/contact" className="text-secondary hover:text-secondary-dark">Contact</Link></li>
          </ul>

          {/* Login and Sign Up buttons - hidden on mobile, visible on medium screens and up */}
          <div className="hidden md:flex space-x-4">
            <Link href="/signin" className="btn-secondary">Log In</Link>
            <Link href="/signup" className="btn-primary">Sign Up</Link>
          </div>

          {/* Mobile menu button - visible on mobile, hidden on medium screens and up */}
          <button
            className="md:hidden text-text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {/* Toggle between menu and close icons based on menu state */}
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation - visible when menu is open */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 animate-fade-in-down">
            <ul className="flex flex-col space-y-2">
              {/* Mobile navigation links */}
              <li><Link href="/ai-tools" className="block text-secondary hover:text-secondary-dark">AI Tools</Link></li>
              <li><Link href="/services" className="block text-secondary hover:text-secondary-dark">Services</Link></li>
              <li><Link href="/about" className="block text-secondary hover:text-secondary-dark">About</Link></li>
              <li><Link href="/resources/blog" className="block text-secondary hover:text-secondary-dark">Blog</Link></li>
              <li><Link href="/contact" className="block text-secondary hover:text-secondary-dark">Contact</Link></li>
            </ul>
            {/* Mobile login and sign up buttons */}
            <div className="mt-4 space-y-2">
              <Link href="/signin" className="btn-secondary block w-full text-center">Log In</Link>
              <Link href="/signup" className="btn-primary block w-full text-center">Sign Up</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}