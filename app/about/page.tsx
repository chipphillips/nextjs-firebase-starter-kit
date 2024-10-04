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
      <h1 className="text-3xl font-bold mb-6 text-primary">About Constructiv AI</h1>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3 text-secondary">Our Mission</h2>
        <p className="text-lg text-foreground">
          At Constructiv AI, we're committed to revolutionizing the construction industry through AI-powered solutions. 
          Our goal is to empower builders, project managers, and construction professionals with cutting-edge tools 
          that streamline processes, optimize resources, and mitigate risks.
        </p>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Our Team</h2>
        <p className="text-lg mb-4">
          Our diverse team of AI experts, construction industry veterans, and innovative problem-solvers 
          work together to create solutions that address real-world challenges in the construction sector.
        </p>
        {/* Add team member components here when available */}
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Why Choose Us</h2>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>Tailored AI solutions for the construction industry</li>
          <li>Proven track record of increasing efficiency and reducing costs</li>
          <li>Continuous innovation and adaptation to industry needs</li>
          <li>Dedicated support and training for seamless integration</li>
        </ul>
      </section>
      <Link href="/ai-tools/beta-signup" className="bg-primary text-white rounded-md px-6 py-3 inline-block hover:bg-opacity-90 transition duration-300">
        Join Our Beta Waitlist
      </Link>
    </main>
  )
}
