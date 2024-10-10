'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react'

// This component represents the footer of the website
export const Footer = () => {
  // State for managing the email input and subscription status
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  
  // Get the current year for the copyright notice
  const currentYear = new Date().getFullYear()

  // Function to handle newsletter subscription
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement newsletter signup logic
    setSubscribed(true)
    setEmail('')
  }

  // Function to scroll the page to the top smoothly
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-BrightNavyBlue-900 !bg-BrightNavyBlue-900 text-white py-8 flex-shrink-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Company information section */}
          <div className="space-y-2">
            <Link href="/" className="flex items-center">
              <Image src="/placeholder.svg?height=40&width=40" alt="Constructiv AI Logo" width={40} height={40} />
              <span className="text-xl font-bold ml-2">Constructiv AI</span>
            </Link>
            <p className="text-sm text-secondary-light">Innovating construction with AI</p>
            <p className="text-sm">123 Tech Lane, Innovation City, 12345</p>
            <p className="text-sm">info@constructivai.com</p>
            <p className="text-sm">+1 (555) 123-4567</p>
          </div>
          {/* Quick links section */}
          <div>
            <h3 className="text-base font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1">
              {['Home', 'About', 'Services', 'Contact', 'Blog'].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === 'Blog' ? '/resources/blog' : `/${item.toLowerCase()}`} 
                    className="text-sm text-secondary-light hover:text-white transition duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Social media links section */}
          <div>
            <h3 className="text-base font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, label: 'Facebook' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Instagram, label: 'Instagram' },
                { icon: Linkedin, label: 'LinkedIn' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="text-muted-foreground hover:text-white transition duration-300"
                  aria-label={`Follow us on ${label}`}
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
          {/* Newsletter subscription section */}
          <div>
            <h3 className="text-base font-semibold mb-2">Newsletter</h3>
            {subscribed ? (
              <p className="text-accent-green text-sm">Thank you for subscribing!</p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-2">
                <input
                  id="email-input"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-3 py-1 text-sm bg-secondary text-foreground rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <button
                  type="submit"
                  className="w-full px-3 py-1 text-sm bg-primary text-primary-foreground rounded hover:bg-primary-dark transition duration-300"
                >
                  Subscribe
                </button>
              </form>
            )}
            <p className="mt-1 text-xs text-muted-foreground">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>
        </div>
        {/* Copyright and additional links section */}
        <div className="mt-6 pt-6 border-t border-muted">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-muted-foreground">&copy; {currentYear} Constructiv AI. All rights reserved.</p>
            <div className="flex flex-wrap gap-4 text-xs text-muted-foreground mt-2 md:mt-0">
              {/* ... Footer links ... */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}