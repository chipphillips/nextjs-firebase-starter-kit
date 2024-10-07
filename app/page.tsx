'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Clock, Settings, Zap, Users, BarChart, Shield } from "lucide-react"
import LandingPage from '@/components/LandingPage'

export default function Home() {
  const [activeSection, setActiveSection] = useState('story')

  const advantages = [
    { icon: <Clock className="h-8 w-8 text-primary" />, title: "Time-Saving Magic", description: "Save up to 10 hours per week on tedious tasks. That's time you can use to perfect intricate details, meet with clients, or tackle challenging design problems." },
    { icon: <Settings className="h-8 w-8 text-primary" />, title: "Customizable to Your World", description: "Every builder has unique needs. Our tools adapt to your specific requirements, whether it's local building codes, client quirks, or your secret sauce for success." },
    { icon: <Zap className="h-8 w-8 text-primary" />, title: "Immediate Impact", description: "Start using our intuitive tools immediately. No time wasted on complicated new systems - just instant productivity gains." },
    { icon: <Users className="h-8 w-8 text-primary" />, title: "Team Collaboration", description: "Enhance communication and coordination among your team members, subcontractors, and clients with our collaborative features." },
    { icon: <BarChart className="h-8 w-8 text-primary" />, title: "Data-Driven Insights", description: "Make informed decisions with real-time analytics and reporting on project progress, resource allocation, and financial performance." },
    { icon: <Shield className="h-8 w-8 text-primary" />, title: "Enhanced Safety", description: "Improve on-site safety with AI-powered risk assessment tools and automated safety checklist generation." }
  ]

  const services = [
    { title: "Project Management", description: "Streamline your project workflow from planning to completion." },
    { title: "Resource Allocation", description: "Optimize your team and equipment usage for maximum efficiency." },
    { title: "Financial Forecasting", description: "Predict project costs and profitability with AI-powered accuracy." },
    { title: "Document Management", description: "Organize and access all your project documents in one secure place." },
    { title: "Client Communication", description: "Keep your clients informed and happy with automated updates and easy collaboration tools." }
  ]

  return (
    <div className="bg-background">
      <LandingPage />
      
      <main className="flex-grow">
        <nav className="bg-muted py-4 sticky top-0 z-10 overflow-x-auto">
          <div className="container px-4 sm:px-6 max-w-6xl mx-auto">
            <ul className="flex justify-start sm:justify-center space-x-4 min-w-max">
              {['story', 'mission', 'advantages', 'services', 'join'].map((section) => (
                <li key={section}>
                  <Button 
                    variant={activeSection === section ? "default" : "ghost"}
                    onClick={() => {
                      setActiveSection(section)
                      document.getElementById(section)?.scrollIntoView({behavior: 'smooth'})
                    }}
                    className="whitespace-nowrap"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <section id="advantages" className="py-12 sm:py-16 md:py-20">
          <div className="container px-4 sm:px-6 max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">The Constructiv AI Advantage</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {advantages.map((advantage, index) => (
                <Card key={index} className="flex flex-col h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-center text-lg sm:text-xl">
                      {advantage.icon}
                      <span className="ml-2">{advantage.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-sm sm:text-base">{advantage.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="bg-muted py-12 sm:py-16 md:py-20">
          <div className="container px-4 sm:px-6 max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">Our Services</h2>
            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
              {services.map((service, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-base sm:text-lg">{service.title}</AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base">{service.description}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="bg-primary text-primary-foreground py-8 sm:py-12">
          <div className="container px-4 sm:px-6 max-w-6xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Constructiv AI: Building Smarter, Together.</h2>
          </div>
        </section>
      </main>
    </div>
  )
}