"use client"

import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
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
    title: "Personalized Assessment",
    description: "We dive deep into your business, mapping out your unique processes and challenges. This tailored approach ensures our AI solutions target your specific pain points, setting the stage for transformative improvements.",
    icon: <Lightbulb className="w-6 h-6" />
  },
  {
    title: "Onboard and Customization",
    description: "Welcome to your AI revolution! We fine-tune our tools to fit your workflow like a glove. Your local codes, client quirks, and secret sauce? We bake them all into a custom AI toolkit that speaks your language.",
    icon: <Wrench className="w-6 h-6" />
  },
  {
    title: "Seamless Implementation",
    description: "No downtime, no headaches. Our AI integrates into your operations smoother than a freshly poured slab. You'll be leveraging cutting-edge tech from day one, with tools so intuitive they feel like they've always been part of your crew.",
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: "AI Assistant",
    description: "Meet your new tireless team member. Our AI assistant guides you through tasks, offers hands-free navigation, and learns your business inside out. It's like having a seasoned pro by your side 24/7, but one that never needs coffee breaks.",
    icon: <Bot className="w-6 h-6" />
  },
  {
    title: "Continuous Optimization",
    description: "We're in this for the long haul. As your business evolves, so does our AI. We provide ongoing support, automatic updates, and performance analysis to keep you at the cutting edge. Your AI toolkit grows smarter by the day, consistently driving efficiency and uncovering new opportunities for growth.",
    icon: <TrendingUp className="w-6 h-6" />
  }
]

// Animation variants for the container of steps
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

// Animation variants for individual step items
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
export const ConstructivAIGuide: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null)
  const { theme } = useTheme()
  const isDarkMode = theme === 'dark'

  const getProgressValue = () => {
    if (activeStep === null) return 0
    return ((activeStep + 1) / steps.length) * 100
  }

  return (
    <Card className={`w-full max-w-4xl mx-auto ${isDarkMode ? 'bg-gray-800 text-white' : ''}`}>
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-center text-primary">How Constructiv AI Works</CardTitle>
        <CardDescription className="text-center text-lg">Your Step-by-Step Guide to AI Implementation</CardDescription>
      </CardHeader>
      <CardContent>
        <Progress value={getProgressValue()} className="mb-6" />
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onMouseEnter={() => setActiveStep(index)}
              onMouseLeave={() => setActiveStep(null)}
            >
              <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl font-bold mb-4 shadow-md">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </CardContent>
    </Card>
  )
}

export default ConstructivAIGuide