// Import necessary React and UI components
import React from 'react';
import { AlertTriangle, FileText, MessageSquare, Briefcase, Clock, ShieldAlert, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

// Define an array of common pain points in the construction industry
const painPoints = [
  {
    title: "Administrative Overload",
    description: "Excessive time spent on managing project documentation, quotes, and schedules, pulling you away from actual building.",
    icon: FileText
  },
  {
    title: "Communication Breakdowns",
    description: "Miscommunication with subcontractors and clients leading to costly delays and misunderstandings.",
    icon: MessageSquare
  },
  {
    title: "Resource Management",
    description: "Difficulty managing multiple projects simultaneously with limited staff and resources.",
    icon: Briefcase
  },
  {
    title: "Project Delays",
    description: "Unforeseen scheduling conflicts, resource shortages, or inefficient task management causing setbacks.",
    icon: Clock
  },
  {
    title: "Risk Management",
    description: "Overwhelming challenges with site safety, compliance, and liability issues.",
    icon: ShieldAlert
  },
  {
    title: "Profitability Pressure",
    description: "Inefficiencies and delays negatively impacting project profitability and overall business success.",
    icon: DollarSign
  }
];

// Define animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

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
};

// ProblemStatement component: Displays common challenges faced by construction businesses
export const ProblemStatement = () => {
  return (
    <div className="container py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="break-normal flex flex-col items-center justify-center text-center mb-12">
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-accent-900 uppercase rounded-full bg-accent-400">
            Industry Challenges
          </p>
          <h2 className="text-xl font-display font-semibold uppercase text-secondary-800 mb-6 sm:text-4xl">
            Is Paperwork Eating Your Profits<br />and Stealing Your Time?
          </h2>
          <p className="leading-normal prose prose-lg text-primary-700 mx-auto mb-6">
            You didn't get into building to sit behind a desk. But with constant paperwork, order tracking, and client updates, it feels like that's all you do. Constructiv AI changes that. Our tools streamline project management, saving you up to 10 hours a week.
          </p>
          <blockquote className="prose prose-45 text-primary-700 mx-auto italic border-l-4 border-primary-400 pl-4 py-2 bg-primary-50">
            Imagine what you could do with that extra time—perfecting the details on site, closing the next big deal, or simply getting home on time.
          </blockquote>
        </div>
        <div className="text-center mb-12">
          <p className="leading-snug prose prose-lg text-primary-700 font-semibold mx-auto my-6">
            Many construction businesses face challenges that slow down their projects and negatively impact their profitability. Here are some common pain points:
          </p>
        </div>
      </div>
      <motion.div 
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {painPoints.map((point, index) => (
          <motion.div 
            key={index} 
            className="bg-white border-l-4 border-primary-400 shadow-md rounded-lg overflow-hidden"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.03, 
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              transition: { duration: 0.2 }
            }}
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
                <motion.div
                  className="mr-4"
                  whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
                >
                  <point.icon className="w-10 h-10 text-primary-500" />
                </motion.div>
                <h3 className="text-xl font-semibold text-primary-900">{point.title}</h3>
              </div>
              <p className="leading-normal prose text-balance text-primary-700">
                {point.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <div className="text-center mt-12">
        <motion.a
          href="/"
          className="inline-block px-8 py-3 text-lg font-semibold text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn How We Can Help
        </motion.a>
      </div>
    </div>
  );
};

export default ProblemStatement;
