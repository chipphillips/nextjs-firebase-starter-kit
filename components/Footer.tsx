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
    <footer className="bg-secondary-dark text-white py-8 flex-shrink-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  className="text-gray-400 hover:text-white transition duration-300"
                  aria-label={`Follow us on ${label}`}
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-base font-semibold mb-2">Newsletter</h3>
            {subscribed ? (
              <p className="text-green-400 text-sm">Thank you for subscribing!</p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-2">
                <input
                  id="email-input"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-3 py-1 text-sm bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
                <button
                  type="submit"
                  className="w-full px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
                >
                  Subscribe
                </button>
              </form>
            )}
            <p className="mt-1 text-xs text-gray-400">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-gray-400">&copy; {currentYear} Constructiv AI. All rights reserved.</p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-400 mt-2 md:mt-0">
              {/* ... Footer links ... */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}