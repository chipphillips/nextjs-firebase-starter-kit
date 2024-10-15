// Import necessary dependencies and components
import { Inter } from 'next/font/google'
import './globals.css'
import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ReactNode } from 'react'

// Initialize the Inter font with Latin subset
const inter = Inter({ subsets: ['latin'] })

// Define props for the Section component
interface SectionProps {
  children: ReactNode
  className?: string
  maxWidth?: 'default' | 'narrow'
  background?: 'white' | 'primary-50' | 'gradient'
}

// Section component for consistent layout structure
export const Section: React.FC<SectionProps> = ({ children, className = '', maxWidth = 'default', background = 'white' }) => (
  <div className={`py-16 ${
    background === 'white' 
      ? 'bg-background' 
      : background === 'primary-50' 
        ? 'bg-primary-50' 
        : ''
  } ${className}`}>
    <div className={`py-12 my-9 mx-auto px-4 sm:px-6 lg:px-8 ${maxWidth === 'narrow' ? 'max-w-3xl' : 'max-w-7xl'}`}>
      {children}
    </div>
  </div>
)

// Define props for the RootLayout component
export interface LayoutProps {
  children: React.ReactNode
}

// RootLayout component: The main layout structure for the entire application
export default function RootLayout({
  children,
}: LayoutProps) {
  return (
    <html lang="en" className={inter.className}>
      <body className="flex flex-col min-h-screen">
        <Header />
        {/* Main content area */}
        <main className="flex-grow bg-background">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
