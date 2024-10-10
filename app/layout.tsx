// Import necessary dependencies and components
import { Inter } from 'next/font/google'
import './globals.css'
import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ReactNode } from 'react'

// Initialize the Inter font with Latin subset
const inter = Inter({ subsets: ['latin'] })

// Define metadata for the application
export const metadata: Metadata = {
  title: 'Constructiv AI',
  description: 'AI-powered tools for the construction industry',
  // ... other metadata
}

// Define props for the Section component
interface SectionProps {
  children: ReactNode
  className?: string
  maxWidth?: 'default' | 'narrow'
}

// Section component for consistent layout structure
const Section: React.FC<SectionProps> = ({ children, className = '', maxWidth = 'default' }) => (
  <section className={`py-12 md:py-16 lg:py-20 ${className}`}>
    <div className={`mx-auto px-4 ${maxWidth === 'narrow' ? 'max-w-[1100px]' : 'max-w-[1200px]'}`}>
      {children}
    </div>
  </section>
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