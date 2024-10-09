"use client"

import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import { Lightbulb, Wrench, Zap, Bot, TrendingUp } from 'lucide-react'

interface StepInfo {
  title: string
  whatWeDo: string
  whyItMatters: string
  extraInfo: {
    type: 'Pro Tip' | 'Case Study' | 'Data Point' | 'User Testimonial' | 'Industry Insight'
    content: string
  }
  icon: React.ReactNode
}

const steps: StepInfo[] = [
  {
    title: "Personalized Assessment: Building Your AI Blueprint",
    whatWeDo: "We start by analyzing your current processes, identifying areas where AI can make the biggest impact.",
    whyItMatters: "This isn't a one-size-fits-all solution. By understanding your unique challenges, we ensure that AI addresses your specific pain points.",
    extraInfo: {
      type: "Pro Tip",
      content: "Before diving into any new technology, always conduct a thorough audit of your current processes. This baseline will help you measure the true impact of your improvements."
    },
    icon: <Lightbulb className="w-6 h-6" />
  },
  {
    title: "Customization: Tailoring AI to Your Needs",
    whatWeDo: "We adapt our AI tools to align with your workflows, local regulations, and client needs.",
    whyItMatters: "This customization ensures that you're not just adopting new technology – you're enhancing your existing expertise with AI.",
    extraInfo: {
      type: "Case Study",
      content: "When Smith & Sons Construction implemented customized AI tools, they saw a 30% reduction in administrative tasks within the first month."
    },
    icon: <Wrench className="w-6 h-6" />
  },
  {
    title: "Seamless Implementation: Because Time is Money",
    whatWeDo: "Our AI integrates into your operations with minimal disruption, requiring no downtime or extensive training.",
    whyItMatters: "You can start benefiting from AI immediately, without losing precious time on complex setups.",
    extraInfo: {
      type: "Data Point",
      content: "According to a McKinsey report, construction companies can boost productivity by as much as 50% through real-time analysis and on-site optimization."
    },
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: "AI Assistant: Your New Team Member",
    whatWeDo: "We provide an AI assistant that guides you through tasks, offers hands-free navigation, and learns from your business.",
    whyItMatters: "This isn't just a tool; it's like having a tireless expert on your team, available 24/7.",
    extraInfo: {
      type: "User Testimonial",
      content: "\"The AI assistant felt like having a seasoned project manager by my side at all times. It's saved me countless hours on decision-making and task management.\" - Jane Doe, Owner of Doe Construction"
    },
    icon: <Bot className="w-6 h-6" />
  },
  {
    title: "Continuous Optimization: Always Improving",
    whatWeDo: "Our AI continuously analyzes performance data, refining processes and uncovering new opportunities for growth.",
    whyItMatters: "Your AI toolkit evolves with your business, ensuring you're always at the cutting edge.",
    extraInfo: {
      type: "Industry Insight",
      content: "The construction industry is projected to grow by $4.5 trillion globally between 2020 and 2030. AI-driven optimization will be crucial for businesses looking to capture a slice of this growth."
    },
    icon: <TrendingUp className="w-6 h-6" />
  }
]

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

export const ConstructivAIGuide: React.FC = () => {
  const [activeStep, setActiveStep] = useState<string | undefined>(undefined)
  const { theme } = useTheme()
  const isDarkMode = theme === 'dark'

  const getProgressValue = () => {
    if (!activeStep) return 0
    const stepIndex = parseInt(activeStep.split('-')[1])
    return (stepIndex / steps.length) * 100
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
          className="flex flex-col md:flex-row justify-center items-stretch space-y-8 md:space-y-0 md:space-x-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center max-w-xs"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl font-bold mb-4 shadow-md">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.whatWeDo}</p>
            </motion.div>
          ))}
        </motion.div>
        <Accordion 
          type="single" 
          collapsible 
          className="w-full mt-8"
          onValueChange={setActiveStep}
        >
          {steps.map((step, index) => (
            <AccordionItem value={`step-${index + 1}`} key={index}>
              <AccordionTrigger className="text-xl font-semibold">
                <div className="flex items-center">
                  {step.icon}
                  <span className="ml-2">Step {index + 1}: {step.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <div>
                      <h4 className="font-bold text-primary">What We Do:</h4>
                      <p>{step.whatWeDo}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">Why It Matters:</h4>
                      <p>{step.whyItMatters}</p>
                    </div>
                    <div>
                      <Badge variant="secondary" className="mb-2">{step.extraInfo.type}</Badge>
                      <p className="italic">{step.extraInfo.content}</p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  )
}

export default ConstructivAIGuide