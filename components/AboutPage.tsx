'use client'

import React, { useState, useEffect } from 'react'
import HeroSection from '@/components/HeroSection'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Settings, Zap, Users, BarChart, Shield, Star, Heart, Lightbulb, Sliders, UserCheck, Gift, RefreshCw } from "lucide-react"
import { motion } from 'framer-motion'
import { Section } from '@/app/layout'

// Define interfaces for our data structures
interface Section {
  id: string;
  title: string;
  content: React.ReactNode | Array<{ icon?: React.ElementType; title: string; description: string }>;
  image?: string;
  imageAlt?: string;
  highlight?: React.ReactNode;
  values?: Array<{ icon: React.ElementType; title: string; description: string }>;
}

interface Advantage {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface Service {
  title: string;
  description: string;
}

interface Value {
  icon: React.ElementType;
  title: string;
  description: string;
}

// Define animation variants for container elements
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

// Define animation variants for individual items
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100
    }
  }
}

export default function AboutPage() {
  // State to keep track of the active section
  const [activeSection, setActiveSection] = useState<string>('story');

  // Define our advantages
  const advantages: Advantage[] = [
    { icon: Clock, title: "Time-Saving Magic", description: "Save up to 10 hours per week on tedious tasks. That's time you can use to perfect intricate details, meet with clients, or tackle challenging design problems." },
    { icon: Settings, title: "Customizable to Your World", description: "Every builder has unique needs. Our tools adapt to your specific requirements, whether it's local building codes, client quirks, or your secret sauce for success." },
    { icon: Zap, title: "Immediate Impact", description: "Start using our intuitive tools immediately. No time wasted on complicated new systems - just instant productivity gains." },
    { icon: Users, title: "Team Collaboration", description: "Enhance communication and coordination among your team members, subcontractors, and clients with our collaborative features." },
    { icon: BarChart, title: "Data-Driven Insights", description: "Make informed decisions with real-time analytics and reporting on project progress, resource allocation, and financial performance." },
    { icon: Shield, title: "Enhanced Safety", description: "Improve on-site safety with AI-powered risk assessment tools and automated safety checklist generation." }
  ];

  // Define our services
  const services: Service[] = [
    { title: "Project Management", description: "Streamline your project workflow from planning to completion." },
    { title: "Resource Allocation", description: "Optimize your team and equipment usage for maximum efficiency." },
    { title: "Financial Forecasting", description: "Predict project costs and profitability with AI-powered accuracy." },
    { title: "Document Management", description: "Organize and access all your project documents in one secure place." },
    { title: "Client Communication", description: "Keep your clients informed and happy with automated updates and easy collaboration tools." }
  ];

  // Define our values
  const values: Value[] = [
    { icon: Star, title: "EMPOWER EXCELLENCE", description: "We enhance, not replace, builder expertise with cutting-edge AI tools." },
    { icon: Heart, title: "INTEGRITY", description: "We build trust through transparency and ethical actions." },
    { icon: Lightbulb, title: "INNOVATION", description: "We push boundaries to solve construction challenges with simple, effective solutions." },
    { icon: Sliders, title: "ADAPTABILITY", description: "We tailor our tools to fit seamlessly into each business's unique workflow." },
    { icon: UserCheck, title: "CUSTOMER-CENTRIC", description: "We prioritize our customers' growth, saving them time and enhancing project quality." },
    { icon: Gift, title: "LAGNIAPPE", description: "We go the extra mile, offering that little something extra in every interaction." },
    { icon: RefreshCw, title: "SUSTAINABLE PARTNERSHIP", description: "We grow alongside our customers, continuously improving to meet evolving needs." }
  ];

  // Define our sections
  const sections: Section[] = [
    {
      id: 'story',
      title: 'Our Story',
      content: (
        <>
          <p className="text-base sm:text-lg text-muted-foreground mb-6">
            At Constructiv AI, we've walked in your work boots. Our team brings diverse experience from across the construction industry - from material supply to on-site project management.
          </p>
          <p className="text-base sm:text-lg text-muted-foreground">
            We've felt the strain of endless paperwork and the frustration of inefficient processes. That's why we created Constructiv AI: to give builders like you the power of a larger team without the overhead.
          </p>
        </>
      ),
      image: "/herographic2.png",
      imageAlt: "Constructiv AI team at a construction site"
    },
    {
      id: 'advantages',
      title: 'Our Advantages',
      content: advantages.map(advantage => ({
        icon: advantage.icon,
        title: advantage.title,
        description: advantage.description
      }))
    },
    {
      id: 'services',
      title: 'Our Services',
      content: services.map(service => ({
        title: service.title,
        description: service.description
      }))
    },
    {
      id: 'values',
      title: 'Our Values',
      content: "At Constructiv AI, our values are the foundation of everything we do. They guide our decisions, shape our culture, and drive our commitment to excellence.",
      values: values.map(value => ({
        icon: value.icon,
        title: value.title,
        description: value.description
      }))
    }
  ];

  // Effect to smooth scroll to the active section
  useEffect(() => {
    const element = document.getElementById(activeSection);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [activeSection]);

  return (
    <main className="flex-grow bg-background text-foreground">
      <HeroSection
        title="Your 24/7 Assistant:"
        highlightedText="AI Tools That Work While You Build"
        description="Constructiv AI isn't just software—it's your round-the-clock partner in profitability. Our AI-powered tools handle time-consuming tasks, allowing you to focus on what you do best: delivering exceptional projects and growing your business."
        primaryCTA={{ text: "Schedule Your Demo", href: "#join" }}
        secondaryCTA={{ text: "Explore Our Story", href: "#story" }}
        imageSrc="/heroclock.svg"
        imageAlt="AI-powered construction management visualization"
      />

      <nav className="bg-muted py-4 sticky top-0 z-10 overflow-x-auto">
        <div className="container mx-auto px-container-padding max-w-container-max">
          <ul className="flex justify-start sm:justify-center space-x-4 min-w-max">
            {sections.map((section) => (
              <li key={section.id}>
                <Button 
                  variant={activeSection === section.id ? "default" : "ghost"}
                  onClick={() => setActiveSection(section.id)}
                  className="whitespace-nowrap"
                >
                  {section.title}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {sections.map((section, index) => (
        <Section 
          key={section.id} 
          background={index % 2 === 0 ? 'primary-50' : 'white'}
        >
          <div id={section.id} className="flex flex-col lg:flex-row items-start justify-between gap-12">
            <div className="lg:w-1/2">
              <h3 className="text-sm font-semibold text-primary mb-4 uppercase tracking-wide">{section.id}</h3>
              <h2 className="text-4xl sm:text-5xl font-bold text-azure-800 mb-6">{section.title}</h2>
              <div className="h-1 w-20 bg-primary mb-8"></div>
              {typeof section.content === 'object' && !React.isValidElement(section.content) && Array.isArray(section.content) ? (
                section.id === 'advantages' ? (
                  <motion.div 
                    className="grid sm:grid-cols-2 gap-6 sm:gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {(section.content as Array<{ icon: React.ElementType; title: string; description: string }>).map((advantage, idx) => (
                      <motion.div 
                        key={idx}
                        variants={itemVariants}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Card className="flex flex-col h-full bg-card text-card-foreground">
                          <CardContent className="p-4">
                            <div className="flex items-center mb-2">
                              {advantage.icon && <advantage.icon className="h-6 w-6 text-primary mr-2" />}
                              <h3 className="font-semibold">{advantage.title}</h3>
                            </div>
                            <p className="prose-45 text-sm text-muted-foreground">{advantage.description}</p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </motion.div>
                ) : section.id === 'services' ? (
                  <ul className="space-y-4">
                    {(section.content as Array<{ title: string; description: string }>).map((service, idx) => (
                      <li key={idx} className="bg-card p-4 rounded-lg shadow-md">
                        <h3 className="font-semibold mb-2 text-azure-500">{service.title}</h3>
                        <p className="prose-45 text-sm text-muted-foreground">{service.description}</p>
                      </li>
                    ))}
                  </ul>
                ) : null
              ) : (
                <div className="text-muted-foreground">{section.content}</div>
              )}
            </div>
            <div className="lg:w-1/2">
              {section.image && (
                <img src={section.image} alt={section.imageAlt} className="rounded-lg shadow-xl w-full h-auto" />
              )}
              {section.highlight && section.highlight}
              {section.values && (
                <div className="grid gap-6 md:grid-cols-2">
                  {section.values.map((value, idx) => (
                    <div key={idx} className="flex gap-3">
                      <span className="flex-shrink-0 w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                        <value.icon className="w-5 h-5 text-accent-foreground" />
                      </span>
                      <div>
                        <h3 className="font-medium mb-1 text-azure-500">{value.title}</h3>
                        <p className="prose-45 text-sm text-muted-foreground">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </Section>
      ))}

      <Section background="primary-50" className="text-accent-foreground">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Constructiv AI: Building Smarter, Together.</h2>
        </div>
      </Section>
    </main>
  )
}
