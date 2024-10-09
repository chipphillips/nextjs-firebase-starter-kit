'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import LandingPage from '@/components/LandingPage'

export default function Home() {
  const [activeSection, setActiveSection] = useState('story')

  return (
    <div className="bg-background">
      <LandingPage />
    </div>
  )
}