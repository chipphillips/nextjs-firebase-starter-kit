'use client'

import { HeaderComponent } from '@/components/header'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Clock, Settings, Zap, Users, BarChart, Shield } from "lucide-react"

export default function AboutPage() {
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
    <main className="flex-grow">
      <HeaderComponent />
      <section className="bg-gradient-to-b from-primary to-primary/80 text-primary-foreground py-12 sm:py-16 md:py-20">
        <div className="container px-4 sm:px-6 max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
            Building the Future of Construction, One Project at a Time
          </h1>
          <p className="text-lg sm:text-xl text-center max-w-3xl mx-auto mt-4">
            Empowering builders with AI-driven solutions for smarter, faster, and more efficient construction management.
          </p>
        </div>
      </section>

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

      <section id="story" className="py-12 sm:py-16 md:py-20">
        <div className="container px-4 sm:px-6 max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">Our Story: From Hard Hats to AI Innovators</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="md:w-1/2">
              <p className="text-base sm:text-lg mb-4">
                At Constructiv AI, we've walked in your work boots. Our team brings diverse experience from across the construction industry - from material supply to on-site project management.
              </p>
              <p className="text-base sm:text-lg mb-4">
                We've felt the strain of endless paperwork and the frustration of inefficient processes. That's why we created Constructiv AI: to give builders like you the power of a larger team without the overhead.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src="/placeholder.svg?height=300&width=400" alt="Construction site with workers" className="rounded-lg shadow-lg w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      <section id="mission" className="py-20 bg-background">
        <div className="container px-4 sm:px-6 max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
            <div className="lg:w-1/2">
              <h3 className="text-sm font-semibold text-primary mb-4 uppercase tracking-wide">Mission</h3>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">Our mission.</h2>
              <div className="h-1 w-20 bg-primary mb-8"></div>
              <p className="text-base sm:text-lg text-muted-foreground mb-6">
                We believe skilled builders are irreplaceable. Craftsmanship is at the heart of construction, and this philosophy is foundational to how we design our tools.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground">
                Our mission is to enhance your capabilities, allowing you to focus on what truly matters: building dreams and growing your business.
              </p>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-primary">Empower builders</span> by making
                <span className="bg-primary/10 px-2"> the construction industry</span>
                <span className="text-primary"> more efficient.</span>
              </h2>
            </div>
          </div>
        </div>
      </section>

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

      <section id="join" className="py-12 sm:py-16 md:py-20">
        <div className="container px-4 sm:px-6 max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">Join the Construction Revolution</h2>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-base sm:text-lg mb-6">
              Ready to build smarter, faster, and better? Let's construct the future together. Here's how you can get started:
            </p>
            <ol className="text-left list-decimal list-inside text-sm sm:text-base mb-8">
              <li className="mb-2"><strong>Schedule a Demo:</strong> See our AI-powered tools in action</li>
              <li className="mb-2"><strong>Start Your Free Trial:</strong> Experience the Constructiv AI advantage risk-free</li>
              <li className="mb-2"><strong>Transform Your Business:</strong> Watch your efficiency soar and your reputation grow</li>
            </ol>
            <p className="text-base sm:text-lg mb-8">
              Don't let the competition get ahead. Discover your AI potential today and start building the future of your construction business!
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Schedule Your Demo
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-8 sm:py-12">
        <div className="container px-4 sm:px-6 max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Constructiv AI: Building Smarter, Together.</h2>
        </div>
      </section>
    </main>
  )
}