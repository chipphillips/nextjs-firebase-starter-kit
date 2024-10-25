// Import necessary dependencies and components
import { Inter, Oswald } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ReactNode } from 'react'

// Initialize the Inter font with Latin subset
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

// Initialize the Oswald font with Latin subset
const oswald = Oswald({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-oswald',
})

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

// RootLayout component: The main layout structure for the entire application
export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable} font-sans`}>
      <body className="flex flex-col min-h-screen bg-white">
        <Header />
        <main className="flex-grow bg-white">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
