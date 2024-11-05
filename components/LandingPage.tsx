'use client'

// Import necessary dependencies and components
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Zap, Clock } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import HeroSection from '@/components/HeroSection'
import ConstructivAIGuide from './ConstructivAIGuide'
import ProblemStatement from './ProblemStatement'
import FeaturesSection from './FeaturesSection'
import Big3Features from './Big3Features'
import { Section } from '@/app/layout'

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
      <HeroSection
        title={{
          before: "Helping Builders",
          highlighted: "Save Time",
          after: "with the Power of AI Magic",
        }}
        description="Save time, reduce costs, and streamline operations with AI tools designed specifically for construction professionals. Join our waitlist or schedule a free consultation today."
        primaryCTA={{ text: "Join the Constructiv AI Beta Waitlist", href: "#waitlist" }}
        secondaryCTA={{ text: "Free AI Readiness Report", href: "#report" }}
        imageSrc="/keyboard.png"
        imageAlt="AI-powered construction site management"
      />

      <Section>
        <ProblemStatement />
      </Section>

      <Section background="primary-50">
        <ConstructivAIGuide />
      </Section>

      <Section>
        <Big3Features />
      </Section>

      <Section background="primary-50">
        <FeaturesSection />
      </Section>

      <Section>
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
            <h2 className="text-3xl font-display font-semibold uppercase text-secondary-800 mb-3">Unlock Your Construction Business's AI Potential</h2>
            <p className="prose-45 text-primary-700 mb-6">
              In today's fast-paced construction industry, AI isn't just an option—it's a game-changer. Our comprehensive AI Readiness Report is your roadmap to increased efficiency and profitability. Here's what you'll discover:
            </p>
            <ul className="list-disc list-inside text-primary-700 mb-6 space-y-2">
              <li>Eye-opening insights on time-saving opportunities</li>
              <li>Strategies to optimize your resources and boost your bottom line</li>
              <li>25 practical AI prompts to transform your daily operations</li>
              <li>A customized action plan to integrate AI into your workflow</li>
            </ul>
            <p className="text-primary-700 mb-8">
              Plus, you'll be first in line when we launch our innovative AI tools. Don't miss this opportunity to revolutionize your business!
            </p>
            <Button 
              variant="default" 
              size="lg"
              className="px-6 text-base font-semibold text-white bg-primary-600 hover:bg-primary-700 shadow-md hover:shadow-lg transition-all duration-300"
            >
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
      </Section>

      <Section className="bg-gradient-to-br from-primary-200 to-primary-700 text-white">
        <div className="text-center">
          <h2 className="text-3xl font-display font-semibold uppercase mb-3">Ready to Transform Your Construction Business?</h2>
          <p className="max-w-2xl mx-auto text-lg mb-8 text-primary-100">
            Join our beta program today and be at the forefront of AI-driven construction innovation. Don't miss this opportunity to revolutionize your workflow and boost productivity.
          </p>
          <Button 
            variant="secondary"
            size="lg"
            className="px-6 text-base font-semibold bg-white text-primary-900 hover:bg-primary-100 shadow-md hover:shadow-lg transition-all duration-300"
          >
            Join Beta Waitlist
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </Section>
    </div>
  )
}

export default LandingPage
