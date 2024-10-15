import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import HeroSection from './HeroSection'  // Import the HeroSection component

const AIToolsOverview = () => {
  const heroProps = {
    title: "AI-Powered Tools for",
    highlightedText: "Modern Builders",
    description: "Supercharge your construction business with intelligent, customizable AI tools designed to streamline your workflow and boost efficiency.",
    primaryCTA: { text: "Explore Tools", href: "#tools" },
    secondaryCTA: { text: "Join Beta", href: "#beta" },
    imageSrc: "/jobsite3dai.png",
    imageAlt: "AI-powered construction tools visualization"
  }

  const tools = [
    {
      name: 'Project Documentation Manager',
      description: 'Organize, tag, and retrieve your project files with AI-powered efficiency.',
      features: [
        'Automatic document tagging',
        'Intuitive version control',
        'Real-time collaboration',
      ],
      learnMoreLink: '/tools/documentation-manager',
    },
    {
      name: 'Cost Estimator',
      description: 'Create accurate estimates with AI that considers real-time prices and predicts scenarios.',
      features: [
        'Up-to-the-minute material and labor costs',
        '"What-if" analysis for budgeting',
        'Real-time budget tracking',
      ],
      learnMoreLink: '/tools/cost-estimator',
    },
    {
      name: 'Schedule Optimizer',
      description: 'Meet deadlines efficiently with AI that optimizes tasks, resources, and potential issues.',
      features: [
        'Smart task sequencing',
        'Efficient resource allocation',
        'Real-time schedule adjustments',
      ],
      learnMoreLink: '/tools/schedule-optimizer',
    },
    {
      name: 'Safety Checklist Generator',
      description: 'Generate custom safety checklists adapted to your project needs and latest regulations.',
      features: [
        'Project-specific checklists',
        'Automatic regulatory updates',
        'Incident tracking for improved safety',
      ],
      learnMoreLink: '/tools/safety-checklist',
    },
  ]

  return (
    <>
      {/* Use the HeroSection component */}
      <HeroSection {...heroProps} />

      {/* AI Tools Overview Section */}
      <section id="tools" className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="container">
          <h2 className="text-4xl font-extrabold text-primary-900 mb-8 text-center">
            AI-Powered Tools for Modern Builders
          </h2>
          <p className="text-xl text-primary-600 mb-12 text-center max-w-3xl mx-auto">
            Streamline your workflow and boost efficiency with our intelligent, customizable AI tools.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tools.map((tool) => (
              <div key={tool.name} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-primary-800 mb-3">{tool.name}</h3>
                  <p className="prose-45 text-primary-600 mb-4">{tool.description}</p>
                  <ul className="space-y-2 mb-6">
                    {tool.features.map((feature) => (
                      <li key={feature} className="flex items-center text-primary-700">
                        <svg className="h-5 w-5 text-eucalyptus-500 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href={tool.learnMoreLink} className="text-azure-600 hover:text-azure-800 font-medium inline-flex items-center">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* TEST Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container">
          <h2 className="text-4xl font-extrabold text-primary-900 text-center">
            TEST
          </h2>
        </div>
      </section>

      {/* Beta Sign-up Section */}
      <section id="beta" className="bg-primary-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="container">
          <h3 className="text-3xl font-bold text-center mb-6">Join the Beta, Shape the Future</h3>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto text-center">
            Be at the forefront of construction innovation. Sign up for our exclusive beta program and help us prioritize the tools that will make the biggest impact on your work.
          </p>
          <div className="text-center">
            <Button asChild className="btn-primary bg-dandelion-500 hover:bg-dandelion-600 text-primary-900">
              <Link href="/beta-signup">
                Join the Beta Waitlist
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

export default AIToolsOverview
