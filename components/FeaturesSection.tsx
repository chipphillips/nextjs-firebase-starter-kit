// Import necessary components and icons
import React from 'react'
import { DollarSign, Hammer, TrendingUp, Brain } from 'lucide-react'
import { motion } from 'framer-motion'

// Define an array of features, each with an icon, title, and description
const features = [
  {
    icon: <DollarSign className="h-10 w-10 text-azure-500" />,
    title: "Instant ROI",
    description: "Start saving time and cutting costs from day one."
  },
  {
    icon: <Hammer className="h-10 w-10 text-azure-500" />,
    title: "Built for Builders",
    description: "Tools designed to solve real construction challenges, not generic software."
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-azure-500" />,
    title: "Grow Without the Growing Pains",
    description: "Take on more projects without ballooning your overhead."
  },
  {
    icon: <Brain className="h-10 w-10 text-azure-500" />,
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
    <section className="section-padding">
      <div className="section-content">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
          <div className="mx-auto max-w-lg text-center lg:mx-0 lg:text-left">
            <h2 className="text-3xl font-bold sm:text-4xl text-secondary-800 mb-4">
              Reclaim Your Time and Boost Your Bottom Line with AI
            </h2>

            <p className="mt-4 text-primary-700 max-w-prose-75">
              Constructiv AI empowers builders with cutting-edge tools that streamline operations, enhance productivity, and drive growth. Experience the future of construction management today.
            </p>

            <motion.a
              href="#"
              className="btn btn-primary mt-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
            </motion.a>
          </div>

          <motion.div 
            className="grid grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="card hover:shadow-xl transition duration-300 p-6"
                variants={itemVariants}
              >
                <span className="inline-block rounded-lg bg-azure-50 p-3 mb-5">
                  {feature.icon}
                </span>

                <h3 className="text-xl font-semibold text-primary-900 mb-3">
                  {feature.title}
                </h3>

                <p className="text-sm text-primary-700">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
