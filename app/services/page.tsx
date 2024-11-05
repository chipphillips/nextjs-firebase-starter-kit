import React from 'react';
import Image from 'next/image';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { HardHat, Building, Building2, Mic, Laptop, Cog } from "lucide-react";
import HeroSection from '@/components/HeroSection';
import { Section } from '@/app/layout';

const saasPlans = [
  {
    name: "Basic Tier",
    description: "Ideal for individual professionals and small contractors looking to streamline operations without the need for advanced features.",
    features: [
      "Access to core AI tools (e.g., Project Documentation Manager, Cost Estimator)",
      "Basic analytics dashboard for simple project tracking",
      "Email-based support"
    ],
    pricing: {
      monthly: "$149 per user per month",
      annual: "$129 per user per month (10% discount)"
    },
    cta: "Select Plan"
  },
  {
    name: "Pro Tier",
    description: "Ideal for small to midsize construction firms that need more advanced tools and customization to handle multiple projects efficiently.",
    features: [
      "Full access to all available AI tools, including advanced features",
      "Priority support and access to premium templates",
      "Advanced analytics for deeper project insights"
    ],
    pricing: {
      monthly: "$249 per user per month",
      annual: "$219 per user per month (12% discount)"
    },
    cta: "Select Plan"
  },
  {
    name: "Enterprise Tier",
    description: "Ideal for midsize to large firms that require customized solutions and high-touch support for complex projects.",
    features: [
      "Full access to AI tools, with option for bespoke tool development",
      "Dedicated account manager with 24/7 support",
      "Comprehensive, customizable analytics dashboards",
      "On-site or virtual training for teams"
    ],
    pricing: {
      custom: "Custom pricing based on business size and tool requirements"
    },
    cta: "Contact Sales"
  }
];

const consultingPackages = [
  {
    name: "Basic Consulting Package",
    description: "For small firms new to AI, looking to explore its potential with minimal disruption.",
    duration: "2-4 weeks",
    price: "Starting at $5,000",
    features: [
      "Initial 30-minute strategy session",
      "AI Readiness Assessment",
      "One follow-up meeting",
      "Email and video proposal review"
    ],
    cta: "Learn More",
    href: "/services/basic"
  },
  {
    name: "Standard Consulting Package",
    description: "For small to midsize firms ready to integrate AI across multiple departments.",
    duration: "4-6 weeks",
    price: "Starting at $15,000",
    features: [
      "Comprehensive AI Readiness Assessment",
      "On-site or virtual AI implementation workshops",
      "Custom AI Implementation Plan",
      "Monthly virtual follow-up sessions"
    ],
    cta: "Learn More",
    href: "/services/standard"
  },
  {
    name: "Pro Consulting Package",
    description: "For midsize to large firms with complex needs that require custom AI tool development and high-touch support.",
    duration: "8-12 weeks",
    price: "Starting at $50,000",
    features: [
      "In-depth AI Readiness and Process Analysis",
      "Custom AI tools development",
      "On-site team training and workshops",
      "Continuous support with bi-weekly virtual check-ins and monthly on-site visits"
    ],
    cta: "Learn More",
    href: "/services/pro-consulting"
  }
];

export default function Services() {
  return (
    <main className="flex-grow bg-background text-foreground">
      <HeroSection
        title={{
          before: "Transforming Construction with",
          highlighted: "AI-Powered Services"
        }}
        description="Discover our range of innovative services designed to optimize your construction projects and boost efficiency."
        primaryCTA={{ text: "Explore Services", href: "#services" }}
        secondaryCTA={{ text: "Contact Us", href: "/contact" }}
        imageSrc="/ghostover2.png"
        imageAlt="AI-powered construction services"
      />

      <Section className="bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="leading-tight text-3xl font-display font-bold uppercase text-azure-800 mb-3">Our SaaS Products</h2>
            <p className="leading-normal prose prose-lg text-primary-700 mb-6">Empower your construction business with our cutting-edge AI-driven SaaS solutions.</p>
            <Image
              src="/cartoonplaceholder.png"
              alt="SaaS Products Illustration"
              width={500}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2">
            <div className="grid md:grid-cols-2 gap-4">
              {saasPlans.map((plan, index) => (
                <Card key={index} className="flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-primary-900 mb-2">{plan.name}</CardTitle>
                    <CardDescription className="prose text-primary-700">{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="list-disc list-inside space-y-1 prose text-primary-700">
                      {plan.features.slice(0, 2).map((feature, fIndex) => (
                        <li key={fIndex}>{feature}</li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">{plan.cta}</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="leading-tight text-3xl font-display font-bold uppercase text-azure-800 mb-3">Consulting Services</h2>
            <p className="leading-normal prose prose-lg text-primary-700 mb-6">Accelerate your AI adoption with our comprehensive consulting packages.</p>
            <Image
              src="/team-collaboration.png"
              alt="Consulting Services Illustration"
              width={500}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2">
            <div className="grid md:grid-cols-2 gap-4">
              {consultingPackages.map((pkg, index) => (
                <Card key={index} className="flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-primary-900 mb-2">{pkg.name}</CardTitle>
                    <CardDescription className="prose text-primary-700">{pkg.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="prose text-primary-700"><strong>Duration:</strong> {pkg.duration}</p>
                    <p className="prose text-primary-700"><strong>Price:</strong> {pkg.price}</p>
                  </CardContent>
                  <CardFooter>
                    <Link href={pkg.href} passHref>
                      <Button className="w-full">{pkg.cta}</Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-muted">
        <h2 className="leading-tight text-3xl font-display font-bold uppercase text-azure-800 mb-6 text-center">Frequently Asked Questions</h2>
        <div className="space-y-8">
          <div>
            <h3 className="leading-tight text-3xl font-display font-bold capitalize text-azure-500 mb-3">Can I upgrade my plan at any time?</h3>
            <p className="prose text-primary-700">Yes, you can upgrade or downgrade your subscription at any time, and the changes will take effect in the next billing cycle.</p>
          </div>
          <div>
            <h3 className="leading-tight text-3xl font-display font-bold capitalize text-azure-500 mb-3">Do you offer a free trial?</h3>
            <p className="prose text-primary-700">Yes! All new users receive a 14-day free trial to explore our platform and experience the benefits firsthand.</p>
          </div>
          <div>
            <h3 className="leading-tight text-3xl font-display font-bold capitalize text-azure-500 mb-3">How do I manage my billing or subscription?</h3>
            <p className="prose text-primary-700">All billing and subscription management can be handled through your user dashboard. For Enterprise clients, dedicated support is available.</p>
          </div>
        </div>
      </Section>

      <Section className="bg-primary text-primary-foreground">
        <div className="text-center">
          <h2 className="leading-tight text-3xl font-display font-bold uppercase text-white mb-3">Need help choosing the right plan?</h2>
          <p className="leading-normal prose prose-lg text-primary-100 mb-8">Contact our sales team, and we'll help you find the perfect fit for your business.</p>
          <Button variant="secondary" size="lg">Contact Sales</Button>
        </div>
      </Section>
    </main>
  )
}
