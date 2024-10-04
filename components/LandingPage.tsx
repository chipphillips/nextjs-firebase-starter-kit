'use client'

import React from 'react'
import ErrorBoundary from '@/components/ErrorBoundary';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Zap, Clock } from 'lucide-react'

// Define the feature type
type Feature = {
  icon: React.ElementType;
  title: string;
  description: string;
};

// Define the features array
const features: Feature[] = [
  {
    icon: CheckCircle,
    title: "AI-Powered Planning",
    description: "Optimize project schedules and resource allocation with our advanced AI algorithms."
  },
  {
    icon: Zap,
    title: "Real-time Analytics",
    description: "Get instant insights into project performance and make data-driven decisions."
  },
  {
    icon: Clock,
    title: "Time Tracking",
    description: "Accurately track time spent on tasks and improve overall project efficiency."
  },
  // Add more features as needed
];

// Define the step type
type Step = {
  title: string;
  description: string;
};

// Define the steps array
const steps: Step[] = [
  {
    title: "Sign Up",
    description: "Create your account and set up your project profile."
  },
  {
    title: "Input Project Details",
    description: "Enter your project specifications and requirements."
  },
  {
    title: "Get AI Recommendations",
    description: "Receive AI-generated insights and optimization suggestions."
  },
  // Add more steps as needed
];

const LandingPage: React.FC = () => {
  return (
    <ErrorBoundary fallback={<div>There was an error loading the landing page. Please refresh the page.</div>}>
      <div className="flex flex-col">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-secondary to-secondary-dark text-white py-20 md:py-32">
          {/* ... (keep the existing content) */}
        </section>

        <div className="min-h-screen">
          {/* Features Overview */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Features Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="bg-white p-6 rounded-lg shadow-lg border border-primary/10 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-primary/5"
                  >
                    <feature.icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="py-16 bg-muted">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
              <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
                {steps.map((step, index) => (
                  <div key={index} className="flex flex-col items-center text-center max-w-xs">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-bold mb-4">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-br from-secondary to-secondary-dark py-16">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Ready to Get Started?</h2>
              <p className="text-xl mb-8 text-gray-800">Join Constructiv AI today and revolutionize your construction projects.</p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link 
                  href="/waitlist" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-all duration-300 hover:scale-105"
                >
                  Join Waitlist
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  href="/demo" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50 transition-all duration-300 hover:scale-105"
                >
                  Request a Demo
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </ErrorBoundary>
  )
}

export default LandingPage;