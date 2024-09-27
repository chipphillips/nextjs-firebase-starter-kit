import Link from "next/link"
import { HeaderComponent } from '@/components/Header';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, BarChart, Clock, DollarSign, Shield, CheckCircle } from "lucide-react"

export default function ProConsultingPage() {
  const features = [
    {
      icon: <BarChart className="h-8 w-8 text-primary" />,
      title: "AI-Driven Project Management",
      description: "Optimize resource allocation, track progress, and predict potential delays with our advanced AI algorithms."
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Automated Workflow Optimization",
      description: "Streamline your processes and reduce manual tasks with AI-powered workflow automation tailored to your business."
    },
    {
      icon: <DollarSign className="h-8 w-8 text-primary" />,
      title: "Intelligent Cost Estimation",
      description: "Improve bidding accuracy and project profitability with our AI-enhanced cost estimation tools."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Risk Management & Compliance",
      description: "Stay ahead of potential issues and ensure regulatory compliance with our AI-driven risk assessment system."
    }
  ]

  const benefits = [
    "Increase project delivery speed by up to 20%",
    "Reduce operational costs by 15-25%",
    "Improve bid accuracy by 30%",
    "Enhance safety compliance and reduce incidents by 40%"
  ]

  return (
    <>
      <HeaderComponent />
      <main className="flex-grow">
        <nav className="bg-muted py-4">
          <div className="container px-4 sm:px-6 max-w-6xl mx-auto">
            <Link href="/services" className="text-sm font-medium flex items-center">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Services
            </Link>
          </div>
        </nav>

        <section className="bg-gradient-to-b from-primary to-primary/80 text-primary-foreground py-12 sm:py-16 md:py-20">
          <div className="container px-4 sm:px-6 max-w-6xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Pro Consulting Package</h1>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto mt-4">
              Maximize efficiency with our AI-driven consulting tailored to mid-size construction firms.
            </p>
            <Button size="lg" className="mt-8" asChild>
              <Link href="/contact">Contact Us to Get Started</Link>
            </Button>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-20">
          <div className="container px-4 sm:px-6 max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">Key Features</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {features.map((feature, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      {feature.icon}
                      <span className="ml-2">{feature.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-muted py-12 sm:py-16 md:py-20">
          <div className="container px-4 sm:px-6 max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">Benefits for Your Business</h2>
            <div className="max-w-3xl mx-auto">
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                    <span className="text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-20">
          <div className="container px-4 sm:px-6 max-w-6xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Optimize Your Construction Projects?</h2>
            <p className="text-lg mb-8">Take your construction management to the next level with our AI-powered Pro Consulting Package.</p>
            <Button size="lg" asChild>
              <Link href="/contact">Get Started with Pro Consulting</Link>
            </Button>
          </div>
        </section>
      </main>
    </>
  )
}