import React from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { HardHat, Building, Building2, Mic, Laptop, Cog } from "lucide-react";
import HeroSection from '@/components/HeroSection';

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
        title="Transforming Construction with"
        highlightedText="AI-Powered Services"
        description="Discover our range of innovative services designed to optimize your construction projects and boost efficiency."
        primaryCTA={{ text: "Explore Services", href: "#services" }}
        secondaryCTA={{ text: "Contact Us", href: "/contact" }}
        imageSrc="/images/construction-services.png"
        imageAlt="AI-powered construction services"
      />

      <section id="saas-products" className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container px-4 sm:px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-primary">Our SaaS Products</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {saasPlans.map((plan, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex}>{feature}</li>
                    ))}
                  </ul>
                  <div className="mt-4">
                    <p><strong>Pricing:</strong></p>
                    {plan.pricing.monthly && <p>{plan.pricing.monthly} (monthly)</p>}
                    {plan.pricing.annual && <p>{plan.pricing.annual} (annual)</p>}
                    {plan.pricing.custom && <p>{plan.pricing.custom}</p>}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">{plan.cta}</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="consulting-services" className="py-20 bg-background">
        <div className="container px-4 sm:px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-primary">Consulting Services</h2>
          <p className="text-center mb-8 text-lg">Accelerate your AI adoption with our comprehensive consulting packages.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {consultingPackages.map((pkg, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <CardTitle>{pkg.name}</CardTitle>
                  <CardDescription>{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p><strong>Duration:</strong> {pkg.duration}</p>
                  <p><strong>Price:</strong> {pkg.price}</p>
                  <ul className="list-disc list-inside space-y-2 mt-4">
                    {pkg.features.map((feature, fIndex) => (
                      <li key={fIndex}>{feature}</li>
                    ))}
                  </ul>
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
      </section>

      <section id="faqs" className="py-20 bg-muted">
        <div className="container px-4 sm:px-6 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-primary">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Can I upgrade my plan at any time?</h3>
              <p>Yes, you can upgrade or downgrade your subscription at any time, and the changes will take effect in the next billing cycle.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Do you offer a free trial?</h3>
              <p>Yes! All new users receive a 14-day free trial to explore our platform and experience the benefits firsthand.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">How do I manage my billing or subscription?</h3>
              <p>All billing and subscription management can be handled through your user dashboard. For Enterprise clients, dedicated support is available.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-12">
        <div className="container px-4 sm:px-6 max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Need help choosing the right plan?</h2>
          <p className="mb-8">Contact our sales team, and we'll help you find the perfect fit for your business.</p>
          <Button variant="secondary" size="lg">Contact Sales</Button>
        </div>
      </section>
    </main>
  )
}
