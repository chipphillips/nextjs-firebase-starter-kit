"use client"

import React from 'react'
import { useTheme } from "next-themes"
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
    icon: <Lightbulb className="w-12 h-12" />
  },
  {
    title: "Customize",
    description: "AI tools tailored to your workflow",
    icon: <Wrench className="w-12 h-12" />
  },
  {
    title: "Implement",
    description: "Seamless integration into your operations",
    icon: <Zap className="w-12 h-12" />
  },
  {
    title: "Assist",
    description: "AI guidance for your daily tasks",
    icon: <Bot className="w-12 h-12" />
  },
  {
    title: "Optimize",
    description: "Continuous improvement and updates",
    icon: <TrendingUp className="w-12 h-12" />
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
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
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
  const { theme } = useTheme()
  const isDarkMode = theme === 'dark'

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-16">
      <motion.h2 
        className="text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        How Constructiv AI Works
      </motion.h2>
      
      <motion.div
        className="flex flex-col items-center space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="flex items-center w-full max-w-3xl bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className={`w-32 h-32 flex-shrink-0 flex items-center justify-center text-white
              ${isDarkMode ? 'bg-blue-600' : 'bg-blue-500'}
              `}
            >
              {step.icon}
            </div>
            <div className="p-6 flex-grow">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">{step.title}</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default ConstructivAIGuide
