'use client'

// Import necessary dependencies and components
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Zap, Clock } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import ConstructivAIGuide from './ConstructivAIGuide'

// Define an array of features for the landing page
// Each feature has an icon, title, and description
const features = [
  {
    icon: CheckCircle,
    title: "AI-Powered Planning",
    description: "Optimize project schedules and resource allocation with our advanced AI algorithms."
  },
  {
    icon: Zap,
    title: "Real-time Analytics",
    description: "Get instant insights into project performance and make data-driven decisions."
  },
  {
    icon: Clock,
    title: "Time Tracking",
    description: "Accurately track time spent on tasks and improve overall project efficiency."
  },
]

// Define animation variants for container elements
// These will be used with Framer Motion for smooth animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1 // Adds a staggered effect to child animations
    }
  }
}

// Define animation variants for individual items
// These create a spring-like animation effect for each item
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

// Main LandingPage component
const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with gradient background and angled shape */}
      <section className="relative bg-gradient-to-b from-[#101c2e] to-[#1c3a5e] text-white overflow-hidden">
        <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20 relative z-10 max-w-[1200px]">
          <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_450px] items-center">
            <div className="flex flex-col justify-center space-y-6">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl xl:text-5xl/tight">
                Helping Builders <span className="text-[#b1ddf6]">Save Time</span> with the Power of AI Magic
              </h1>
              <p className="max-w-[500px] text-gray-300 text-lg md:text-xl">
              Save time, reduce costs, and streamline operations with AI tools designed specifically for construction professionals. Join our waitlist or schedule a free consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-blue-500 text-white hover:bg-blue-600 text-base py-4 px-6">
                Join the Constructiv AI Beta Waitlist
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="bg-white text-[#101c2e] border-white hover:bg-gray-100 text-base py-4 px-6">
                  Free AI Readiness Report
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-sm lg:max-w-none aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/construction-site.png"
                  alt="AI-powered construction site management"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
                {/* Overlay gradient for better text visibility */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#101c2e]/50 to-[#101c2e]/0" />
              </div>
            </div>
          </div>
        </div>
        {/* Smoother angled shape at the bottom of the hero section */}
        <div className="absolute bottom-0 left-0 right-0 h-16">
          <svg className="absolute bottom-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="#edf1f8" />
          </svg>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-[1250px]">
          <div className="text-left max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              Is Paperwork Eating Your Profits and Stealing Your Time?
            </h2>
            <p className="text-lg text-gray-600">
            You didn't get into building to sit behind a desk. But with constant paperwork, order tracking, and client updates, it feels like that's all you do. Constructiv AI changes that. Our tools streamline project management, saving you up to 10 hours a week. Imagine what you could do with that extra time—perfecting the details on site, closing the next big deal, or simply getting home on time.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-[#edf1f8] py-16">
        <div className="container mx-auto px-4 max-w-[1250px]">
          <ConstructivAIGuide />
        </div>
      </section>

      {/* Features Section with animated cards */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-[1250px]">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Key Features</h2>
          <motion.div 
            className="grid gap-8 md:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="flex flex-col items-center space-y-4 bg-white rounded-xl p-6 shadow-md transition-all duration-200 hover:shadow-lg"
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <feature.icon className="h-12 w-12 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-800 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center text-base">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* AI Readiness Report Section with animated content */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <motion.div 
            className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="md:w-1/2"
              variants={itemVariants}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Unlock Your Construction Business's AI Potential</h2>
              <p className="text-gray-600 mb-6">
                In today's fast-paced construction industry, AI isn't just an option—it's a game-changer. Our comprehensive AI Readiness Report is your roadmap to increased efficiency and profitability. Here's what you'll discover:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Eye-opening insights on time-saving opportunities</li>
                <li>Strategies to optimize your resources and boost your bottom line</li>
                <li>25 practical AI prompts to transform your daily operations</li>
                <li>A customized action plan to integrate AI into your workflow</li>
              </ul>
              <p className="text-gray-600 mb-8">
                Plus, you'll be first in line when we launch our innovative AI tools. Don't miss this opportunity to revolutionize your business!
              </p>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white text-base py-4 px-6">
                GET MY FREE AI REPORT
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
            <motion.div 
              className="md:w-1/2"
              variants={itemVariants}
            >
              <Image
                src="/images/ai-report-mockup.jpg"
                alt="AI Readiness Report Mockup"
                width={500}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call-to-Action (CTA) Section */}
      <section className="bg-gradient-to-br from-[#101c2e] to-[#1c3a5e] text-white py-16">
        <div className="container mx-auto px-4 text-center max-w-[1250px]">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Construction Business?</h2>
          <p className="max-w-2xl mx-auto text-lg mb-8">
            Join our beta program today and be at the forefront of AI-driven construction innovation. Don't miss this opportunity to revolutionize your workflow and boost productivity.
          </p>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white text-base py-4 px-6">
            Join Beta Waitlist
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  )
}

export default LandingPage