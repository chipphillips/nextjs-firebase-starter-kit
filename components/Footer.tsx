"use client";

import { Separator } from "@/components/ui/separator"
import { Facebook, Instagram, Linkedin, Mail, Twitter, ArrowUp, Lock } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="bg-[#0A2C4A] text-[#E6F0FD] w-full relative">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-[#69A9F7]">About Constructiv AI</h3>
            <p className="text-[#E6F0FD]">Empowering builders with intuitive, AI-powered tools to work smarter, not harder.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 text-[#69A9F7]">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link className="hover:text-[#69A9F7] transition-colors" href="/">Home</Link></li>
              <li><Link className="hover:text-[#69A9F7] transition-colors" href="/blog">Blog</Link></li>
              <li><Link className="hover:text-[#69A9F7] transition-colors" href="/about">About Us</Link></li>
              <li><Link className="hover:text-[#69A9F7] transition-colors" href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 text-[#69A9F7]">Legal</h3>
            <ul className="space-y-2">
              <li><Link className="hover:text-[#69A9F7] transition-colors" href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link className="hover:text-[#69A9F7] transition-colors" href="/terms-of-service">Terms of Service</Link></li>
              <li><Link className="hover:text-[#69A9F7] transition-colors" href="/cookie-policy">Cookie Policy</Link></li>
              <li><Link className="hover:text-[#69A9F7] transition-colors" href="/accessibility">Accessibility</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 text-[#69A9F7]">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <Link href="#" className="text-[#E6F0FD] hover:text-[#69A9F7] transition-colors">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-[#E6F0FD] hover:text-[#69A9F7] transition-colors">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-[#E6F0FD] hover:text-[#69A9F7] transition-colors">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-[#E6F0FD] hover:text-[#69A9F7] transition-colors">
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5" />
              <a href="mailto:info@constructivai.com" className="hover:text-[#69A9F7] transition-colors">info@constructivai.com</a>
            </div>
            <p className="mt-2 text-xs text-[#E6F0FD]">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="text-sm text-[#E6F0FD]">
            <p>&copy; {currentYear} Constructiv AI. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-[#E6F0FD] md:justify-end">
            <Link href="/privacy-policy" className="hover:text-[#69A9F7] transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-[#69A9F7] transition-colors">Terms of Service</Link>
            <Link href="/cookie-policy" className="hover:text-[#69A9F7] transition-colors">Cookie Policy</Link>
            <Link href="/accessibility" className="hover:text-[#69A9F7] transition-colors">Accessibility</Link>
            <Link href="/admin/login" className="hover:text-[#69A9F7] transition-colors flex items-center">
              <Lock className="h-4 w-4 mr-1" />
              Admin
            </Link>
          </div>
        </div>
      </div>
      <button
        onClick={scrollToTop}
        className="absolute bottom-4 right-4 p-2 bg-[#69A9F7] text-[#E6F0FD] rounded-full hover:bg-[#2274EA] transition duration-300"
        aria-label="Back to top"
      >
        <ArrowUp size={24} />
      </button>
    </footer>
  )
}