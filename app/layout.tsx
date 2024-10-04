import { Inter } from 'next/font/google'
import './globals.css'
import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Constructiv AI',
  description: 'AI-powered tools for the construction industry',
  // ... other metadata
}

interface SectionProps {
  children: ReactNode
  className?: string
  maxWidth?: 'default' | 'narrow'
}

const Section: React.FC<SectionProps> = ({ children, className = '', maxWidth = 'default' }) => (
  <section className={`py-12 md:py-16 lg:py-20 ${className}`}>
    <div className={`mx-auto px-4 ${maxWidth === 'narrow' ? 'max-w-[1100px]' : 'max-w-[1200px]'}`}>
      {children}
    </div>
  </section>
)

export interface LayoutProps {
  children: React.ReactNode
}

export default function RootLayout({
  children,
}: LayoutProps) {
  return (
    <html lang="en" className={inter.className}>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow bg-background">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}