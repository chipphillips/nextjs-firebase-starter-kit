"use client"

import React from 'react'
import { motion } from "framer-motion"
import { Lightbulb, Wrench, Zap, TrendingUp } from 'lucide-react'

// Define the structure for each step in the AI implementation process
interface StepInfo {
  title: string
  description: string
  icon: React.ReactNode
}

// Array of steps detailing the AI implementation process
const steps: StepInfo[] = [
  {
    title: "Assess",
    description: "We analyze your unique business needs and challenges.",
    icon: <Lightbulb className="h-10 w-10 text-accent-500" />
  },
  {
    title: "Customize",
    description: "AI tools are tailored to fit seamlessly into your workflow.",
    icon: <Wrench className="h-10 w-10 text-accent-500" />
  },
  {
    title: "Implement",
    description: "Seamless integration of AI solutions into your operations.",
    icon: <Zap className="h-10 w-10 text-accent-500" />
  },
  {
    title: "Optimize",
    description: "Continuous improvement and updates to maximize efficiency.",
    icon: <TrendingUp className="h-10 w-10 text-accent-500" />
  }
]

// Animation variants for the container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

// Animation variants for individual items
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

// Main component for the Constructiv AI Guide
export default function ConstructivAIGuide() {
  return (
    <section className="section-padding">
      <div className="section-content">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
          <motion.div 
            className="grid grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="card hover:shadow-xl transition duration-300 p-6"
                variants={itemVariants}
              >
                <span className="inline-block rounded-lg bg-accent-50 p-3 mb-5">
                  {step.icon}
                </span>

                <h3 className="text-xl font-semibold text-primary-900 mb-3">
                  {step.title}
                </h3>

                <p className="text-sm text-primary-700">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <div className="mx-auto max-w-lg text-center lg:mx-0 lg:text-right">
            <h2 className="text-3xl font-bold sm:text-4xl text-secondary-800 mb-4">
              How Constructiv AI Works for Your Business
            </h2>

            <p className="mt-4 text-primary-700 max-w-prose-75 lg:ml-auto">
              Our AI-powered solutions are designed to streamline your construction processes, 
              increase efficiency, and drive innovation in your projects. Experience a tailored 
              approach that adapts to your unique business needs.
            </p>

            <motion.a
              href="#"
              className="btn btn-primary mt-8 inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your AI Journey
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}
