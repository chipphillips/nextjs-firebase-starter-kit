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
    <div className="container py-16">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-accent-900 uppercase rounded-full bg-accent-400">
            Industry Challenges
          </p>
        </div>
        <h2 className="text-3xl font-display font-semibold uppercase text-secondary-800 mb-6 sm:text-4xl md:mx-auto">
          Is Paperwork Eating Your Profits and Stealing Your Time?
        </h2>
        <p className="text-base text-primary-700 md:text-lg mb-8">
          You didn't get into building to sit behind a desk. But with constant paperwork, order tracking, and client updates, it feels like that's all you do. Constructiv AI changes that. Our tools streamline project management, saving you up to 10 hours a week.
        </p>
        <p className="text-base text-primary-700 md:text-lg italic">
          Imagine what you could do with that extra time—perfecting the details on site, closing the next big deal, or simply getting home on time.
        </p>
      </div>
      <div className="max-w-3xl mx-auto mb-10 text-center">
        <p className="text-lg text-primary-700 font-semibold">
          Many construction businesses face challenges that slow down their projects and negatively impact their profitability. Here are some common pain points:
        </p>
      </div>
      <motion.div 
        className="grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {painPoints.map((point, index) => (
          <motion.div 
            key={index} 
            className="duration-300 transform bg-white border-l-4 border-primary-400 shadow-md rounded-r"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.03, 
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              transition: { duration: 0.2 }
            }}
          >
            <div className="h-full p-6 border border-l-0 rounded-r flex items-start">
              <div className="flex-shrink-0 mr-6">
                <motion.div
                  whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
                >
                  <point.icon className="w-16 h-16 text-primary-500" />
                </motion.div>
              </div>
              <div>
                <h6 className="mb-2 font-semibold leading-5 text-primary-900">{point.title}</h6>
                <p className="text-sm text-primary-700">
                  {point.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <div className="text-center">
        <motion.a
          href="/"
          className="btn btn-primary"
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
