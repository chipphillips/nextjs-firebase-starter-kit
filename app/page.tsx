'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import LandingPage from '@/components/LandingPage'

// This is the main component for the home page of our application
export default function Home() {
  // State to keep track of which section is currently active
  // Initially set to 'story', but not currently used in this component
  const [activeSection, setActiveSection] = useState('story')

  return (
    // The main container for our landing page
    // We use the 'bg-background' class to set a consistent background color
    <div className="bg-background">
      {/* Render the LandingPage component, which contains all the content for our home page */}
      <LandingPage />
    </div>
  )
}