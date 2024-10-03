'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { ChevronDown } from 'lucide-react'
import { useRouter } from 'next/navigation'

export function Header() {
  const [isResourcesOpen, setIsResourcesOpen] = useState(false)
  const router = useRouter()

  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image 
            src="/constructiv AI square 50 logo.svg"
            alt="Constructiv AI Logo"
            width={50}
            height={50}
            className="mr-2"
          />
          <span className="text-2xl font-bold">Constructiv AI</span>
        </Link>
        <ul className="flex space-x-4">
          <li><Link href="/ai-tools">AI Tools</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/resources/blog">Blog</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
        <div className="flex space-x-2">
          <Link href="/signin" className="bg-secondary text-white rounded-md px-4 py-2 hover:bg-opacity-90">Log In</Link>
          <Link href="/signup" className="bg-primary text-white rounded-md px-4 py-2 hover:bg-opacity-90">Sign Up</Link>
        </div>
      </nav>
    </header>
  )
}