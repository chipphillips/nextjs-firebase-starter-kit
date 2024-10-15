"use client"

import React from 'react'
import { motion } from "framer-motion"
import { Lightbulb, Wrench, Zap, Bot, TrendingUp } from 'lucide-react'

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
    description: "We analyze your unique business needs",
    icon: <Lightbulb className="w-8 h-8" />
  },
  {
    title: "Customize",
    description: "AI tools tailored to your workflow",
    icon: <Wrench className="w-8 h-8" />
  },
  {
    title: "Implement",
    description: "Seamless integration into your operations",
    icon: <Zap className="w-8 h-8" />
  },
  {
    title: "Assist",
    description: "AI guidance for your daily tasks",
    icon: <Bot className="w-8 h-8" />
  },
  {
    title: "Optimize",
    description: "Continuous improvement and updates",
    icon: <TrendingUp className="w-8 h-8" />
  }
]

// Animation variants for the container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
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
      stiffness: 100,
      damping: 10
    }
  }
}

// Main component for the Constructiv AI Guide
export const ConstructivAIGuide: React.FC = () => {
  return (
    <>
      <motion.h2 
        className="font-display text-3xl font-bold leading-tight tracking-tight text-primary-900 sm:text-4xl sm:text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        How Constructiv AI Works{' '}
        <span className="inline-block text-azure-500">
          for Your Business
        </span>
      </motion.h2>
      <motion.div 
        className="grid gap-12 row-gap-8 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {steps.map((step, index) => (
          <motion.div key={index} className="flex" variants={itemVariants}>
            <div className="mr-4">
              <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-azure-100">
                {React.cloneElement(step.icon as React.ReactElement, { className: "text-azure-500" })}
              </div>
            </div>
            <div>
              <h6 className="mb-2 font-semibold leading-5 text-primary-900">{step.title}</h6>
              <p className="prose-45 text-sm text-primary-700">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </>
  )
}

export default ConstructivAIGuide
