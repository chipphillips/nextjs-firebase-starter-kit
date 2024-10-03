import React from 'react'
import TeamMember from '@/components/TeamMember'
import Link from 'next/link'  // Add this import

export const metadata = {
  title: 'About Constructiv AI',
  description: 'Learn about our mission to revolutionize the construction industry with AI-powered solutions.',
}

export default function About() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-primary">About Constructiv AI</h1>
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-secondary">Our Mission</h2>
        <p className="text-lg text-foreground">We're committed to revolutionizing the construction industry through AI...</p>
      </section>
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
        {/* Add team member components */}
      </section>
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
        {/* Add unique selling points */}
      </section>
      <Link href="/ai-tools/beta-signup" className="bg-primary text-white rounded-md px-6 py-3 hover:bg-opacity-90">
        Join Our Beta Waitlist
      </Link>
    </main>
  )
}
