'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

// Header component for the website navigation
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 transition-all duration-300 ease-in-out ${
      isScrolled ? 'h-46 shadow-sm' : 'h-48'
    }`}>
      <div className="container mx-auto h-full px-4 lg:px-8">
        <div className="flex items-center justify-between h-full">
          {/* Logo and Brand Name */}
          <Link href="/" className="flex items-center space-x-4 group">
            <div className="relative w-[50px] h-[50px] transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/constructiv AI square 50 logo.svg"
                alt="Constructiv AI Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="hidden sm:block text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-950 to-primary-800">
              Constructiv AI
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-8">
              {['About', 'Tools', 'Services'].map((item) => (
                <Link 
                  key={item}
                  href={`/${item.toLowerCase()}`} 
                  className="text-base font-semibold text-primary-700 hover:text-primary-900 transition-colors duration-200"
                >
                  {item}
                </Link>
              ))}
              <DropdownNavLink 
                title="Resources" 
                links={[{ href: '/resources/blog', label: 'Blog' }]} 
              />
            </div>
            <Link href="/signin">
              <Button 
                variant="default" 
                size="default"
                className="px-6 text-base font-semibold text-white bg-primary-600 hover:bg-primary-700 shadow-md hover:shadow-lg transition-all duration-300"
              >
                Login / Sign Up
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-800/50 transition-colors duration-200"
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <span className={`absolute block h-0.5 w-6 bg-foreground transform transition duration-300 ease-in-out ${
                isMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-2'
              }`} />
              <span className={`absolute block h-0.5 w-6 bg-foreground transform transition duration-300 ease-in-out ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`} />
              <span className={`absolute block h-0.5 w-6 bg-foreground transform transition duration-300 ease-in-out ${
                isMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-2'
              }`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden absolute left-0 right-0 bg-background/98 backdrop-blur-md border-b border-primary-200/20 shadow-lg transition-all duration-300 ease-in-out ${
            isMenuOpen 
              ? 'max-h-96 opacity-100 translate-y-0' 
              : 'max-h-0 opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <div className="container mx-auto px-4 py-4 space-y-2">
            <MobileNavLink href="/about">About</MobileNavLink>
            <MobileNavLink href="/ai-tools">Tools</MobileNavLink>
            <MobileNavLink href="/services">Services</MobileNavLink>
            <MobileNavLink href="/resources">Resources</MobileNavLink>
            <div className="pt-2">
              <Link href="/signin" className="block">
                <Button variant="default" size="default" className="w-full">
                  Login / Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

// Desktop Dropdown Navigation Link Component
function DropdownNavLink({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div className="relative group">
      <Link 
        href="/resources"
        className="text-base font-semibold text-primary-700 hover:text-primary-900 transition-colors duration-200"
      >
        {title}
      </Link>
      <div className="absolute left-0 mt-2 w-48 bg-background border border-primary-200/20 shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
        {links.map((link) => (
          <Link 
            key={link.href} 
            href={link.href} 
            className="block px-4 py-3 text-base font-medium text-primary-700 hover:text-primary-900 hover:bg-primary-50 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  )
}

// Mobile Navigation Link Component
function MobileNavLink({ href, children, className = '' }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <Link
      href={href}
      className={`block px-2 py-3 text-base font-medium text-foreground hover:text-primary transition-colors ${className}`}
    >
      {children}
    </Link>
  )
}
