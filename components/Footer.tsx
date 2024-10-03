'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react'

export const Footer = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const currentYear = new Date().getFullYear()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement newsletter signup logic
    setSubscribed(true)
    setEmail('')
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-white relative" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/placeholder.svg?height=40&width=40" alt="Constructiv AI Logo" width={40} height={40} />
              <span className="text-2xl font-bold">Constructiv AI</span>
            </Link>
            <p className="text-sm text-gray-400">Innovating construction with AI</p>
            <p className="text-sm">123 Tech Lane, Innovation City, 12345</p>
            <p className="text-sm">info@constructivai.com</p>
            <p className="text-sm">+1 (555) 123-4567</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Contact', 'Blog'].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === 'Blog' ? '/resources/blog' : `/${item.toLowerCase()}`} 
                    className="text-gray-400 hover:text-white transition duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
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
                  className="text-gray-400 hover:text-white transition duration-300"
                  aria-label={`Follow us on ${label}`}
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            {subscribed ? (
              <p className="text-green-400">Thank you for subscribing!</p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-2">
                <label htmlFor="email-input" className="sr-only">Email address</label>
                <input
                  id="email-input"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
                >
                  Subscribe
                </button>
              </form>
            )}
            <p className="mt-2 text-xs text-gray-400">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-sm text-gray-400">
              <p>&copy; {currentYear} Constructiv AI. All rights reserved.</p>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-gray-400 md:justify-end">
              <Link href="/privacy-policy" className="hover:text-white transition duration-300">Privacy Policy</Link>
              <Link href="/terms-of-service" className="hover:text-white transition duration-300">Terms of Service</Link>
              <Link href="/cookie-policy" className="hover:text-white transition duration-300">Cookie Policy</Link>
              <Link href="/accessibility" className="hover:text-white transition duration-300">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={scrollToTop}
        className="absolute bottom-4 right-4 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300"
        aria-label="Back to top"
      >
        <ArrowUp size={24} />
      </button>
    </footer>
  )
}