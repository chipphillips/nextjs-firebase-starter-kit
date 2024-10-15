// Import necessary components and icons
import React from 'react'
import Image from 'next/image'
import { DollarSign, Hammer, TrendingUp, Brain } from 'lucide-react'
import { motion } from 'framer-motion'

// Define an array of features, each with an icon, title, and description
// This allows for easy addition or modification of features in the future
const features = [
  {
    icon: <DollarSign className="h-8 w-8 text-azure-500" />,
    title: "Instant ROI",
    description: "Start saving time and cutting costs from day one."
  },
  {
    icon: <Hammer className="h-8 w-8 text-azure-500" />,
    title: "Built for Builders",
    description: "Tools designed to solve real construction challenges, not generic software."
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-azure-500" />,
    title: "Grow Without the Growing Pains",
    description: "Take on more projects without ballooning your overhead."
  },
  {
    icon: <Brain className="h-8 w-8 text-azure-500" />,
    title: "Enhance Your Expertise",
    description: "Focus on craftsmanship while AI handles the time-consuming details."
  }
]

// Main component for the Features section
export default function FeaturesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

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

  return (
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
        <div className="lg:col-span-1">
          <h2 className="leading-tight text-3xl font-display font-bold uppercase text-secondary-800 mb-2.5">
            Reclaim Your Time and Boost Your Bottom Line with AI
          </h2>
          <p className="leading-normal prose prose-lg text-primary-700 mb-8">
            Constructiv AI empowers builders with cutting-edge tools that streamline operations, enhance productivity, and drive growth. Experience the future of construction management today.
          </p>
        </div>

        <motion.div 
          className="lg:col-span-2 grid sm:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="flex gap-x-4"
              variants={itemVariants}
            >
              <div className="flex-shrink-0 mt-1">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary-900 mb-2">
                  {feature.title}
                </h3>
                <p className="prose text-primary-700">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
