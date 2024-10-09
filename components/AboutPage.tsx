'use client'

import { useState } from 'react'
import HeroSection from '@/components/HeroSection'
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
      <HeroSection
        title="Your 24/7 Assistant:,"
        highlightedText="AI Tools That Work While You Build "
        description="Constructiv AI isn't just software—it's your round-the-clock partner in profitability. Our AI-powered tools handle time-consuming tasks, allowing you to focus on what you do best: delivering exceptional projects and growing your business."
        primaryCTA={{ text: "Schedule Your Demo", href: "#join" }}
        secondaryCTA={{ text: "Explore Our Story", href: "#story" }}
        imageSrc="/images/ai-construction-hero.jpg"
        imageAlt="AI-powered construction management visualization"
      />

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

      <section id="story" className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container px-4 sm:px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Our Story: From Hard Hats to AI Innovators</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <div className="md:w-1/2">
              <p className="text-lg sm:text-xl mb-6 leading-relaxed">
                At Constructiv AI, we've walked in your work boots. Our team brings diverse experience from across the construction industry - from material supply to on-site project management.
              </p>
              <p className="text-lg sm:text-xl mb-6 leading-relaxed">
                We've felt the strain of endless paperwork and the frustration of inefficient processes. That's why we created Constructiv AI: to give builders like you the power of a larger team without the overhead.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src="/images/team-at-construction-site.jpg" alt="Constructiv AI team at a construction site" className="rounded-lg shadow-xl w-full h-auto" />
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

      <section id="join" className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container px-4 sm:px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Join the Construction Revolution</h2>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-lg sm:text-xl mb-8">
              Ready to build smarter, faster, and better? Let's construct the future together. Here's how you can get started:
            </p>
            <ol className="text-left list-decimal list-inside text-base sm:text-lg mb-12 space-y-4">
              <li><strong>Schedule a Demo:</strong> See our AI-powered tools in action</li>
              <li><strong>Start Your Free Trial:</strong> Experience the Constructiv AI advantage risk-free</li>
              <li><strong>Transform Your Business:</strong> Watch your efficiency soar and your reputation grow</li>
            </ol>
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 transition-colors duration-300">
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