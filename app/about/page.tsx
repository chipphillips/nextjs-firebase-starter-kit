import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Constructiv AI',
  description: 'Learn about our mission to revolutionize the construction industry with AI-powered solutions.',
}

import AboutPage from '@/components/AboutPage'

export default function About() {
  return <AboutPage />
}
