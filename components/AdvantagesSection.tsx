"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Settings, Zap, TrendingUp, Compass, HardHat, Users, Heart } from 'lucide-react'

// Define the structure for each advantage
interface AdvantageInfo {
  title: string
  description: string
  icon: React.ReactNode
}

// Array of advantages
const advantages: AdvantageInfo[] = [
  {
    title: "Customized AI Support",
    description: "Our AI tools adapt to you, learning your unique systems and processes to provide personalized support.",
    icon: <Settings className="h-10 w-10 text-accent-500" />
  },
  {
    title: "Instant Impact",
    description: "Start saving up to 10 hours a week from day one, allowing you to focus on what you do best.",
    icon: <Zap className="h-10 w-10 text-accent-500" />
  },
  {
    title: "Scale Smart",
    description: "Compete with the big players without the big overhead—it's like having an entire team at your fingertips.",
    icon: <TrendingUp className="h-10 w-10 text-accent-500" />
  },
  {
    title: "Future-Proof Your Business",
    description: "Stay ahead of the curve with AI that evolves alongside your business and the industry.",
    icon: <Compass className="h-10 w-10 text-accent-500" />
  },
  {
    title: "Industry Expertise",
    description: "With our deep understanding of construction, we provide tools that address the real-world challenges you face every day.",
    icon: <HardHat className="h-10 w-10 text-accent-500" />
  },
  {
    title: "No Extra Staff Needed",
    description: "Our AI works tirelessly behind the scenes, transforming your operations without the need for additional staff or complex training.",
    icon: <Users className="h-10 w-10 text-accent-500" />
  },
  {
    title: "Enhance Work-Life Balance",
    description: "By automating time-consuming tasks, we help you reclaim personal time and reduce late nights spent on paperwork.",
    icon: <Heart className="h-10 w-10 text-accent-500" />
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
      stiffness: 100,
      damping: 10
    }
  }
}

// Main component for the Advantages section
const AdvantagesSection: React.FC = () => {
  return (
    <section className="text-primary-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-lg text-center">
          <motion.h2 
            className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our <span className="text-accent-500">Advantages</span>
          </motion.h2>

          <motion.p 
            className="mt-4 text-primary-700 max-w-prose-75"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Discover how Constructiv AI sets itself apart in the construction industry. Our unique advantages empower you to transform your business and stay ahead of the competition.
          </motion.p>
        </div>

        <motion.div 
          className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {advantages.map((advantage, index) => (
            <motion.div 
              key={index}
              className="card hover:shadow-xl transition duration-300 flex flex-col h-full"
              variants={itemVariants}
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-start mb-4">
                  <span className="inline-block rounded-lg bg-accent-50 p-3 mr-4">
                    {advantage.icon}
                  </span>
                  <h3 className="text-xl font-semibold text-primary-900">{advantage.title}</h3>
                </div>
                <p className="text-sm text-primary-700 flex-grow">
                  {advantage.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <motion.a
            href="#"
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.a>
        </div>
      </div>
    </section>
  )
}

export default AdvantagesSection
