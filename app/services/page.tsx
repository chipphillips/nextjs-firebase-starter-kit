import Link from "next/link"
import { HeaderComponent } from '@/components/Header';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { HardHat, Building, Building2, Mic, Laptop, Cog } from "lucide-react"

export default function ServicesPage() {
  const consultingPackages = [
    {
      title: "Basic Consulting Package",
      icon: <HardHat className="h-12 w-12 text-primary" />,
      description: "Perfect for small contractors looking to streamline operations and boost efficiency with AI-powered tools.",
      link: "/services/basic-consulting"
    },
    {
      title: "Pro Consulting Package",
      icon: <Building className="h-12 w-12 text-primary" />,
      description: "Leverage AI to automate workflows, optimize costs, and scale your construction projects effortlessly.",
      link: "/services/pro-consulting"
    },
    {
      title: "Enterprise Consulting Package",
      icon: <Building2 className="h-12 w-12 text-primary" />,
      description: "Comprehensive AI solutions for large-scale operations, multi-site projects, and complex construction challenges.",
      link: "/services/enterprise-consulting"
    }
  ]

  const additionalServices = [
    {
      title: "Speaking Engagements",
      icon: <Mic className="h-12 w-12 text-primary" />,
      description: "Book our industry experts to speak at your next event. We cover topics from AI adoption to future trends in construction.",
      link: "/services/speaking-engagements"
    },
    {
      title: "Webinars",
      icon: <Laptop className="h-12 w-12 text-primary" />,
      description: "Join our interactive webinars to learn how AI can revolutionize your business. Stay ahead of industry trends with our expert insights.",
      link: "/services/webinars"
    },
    {
      title: "Other Services",
      icon: <Cog className="h-12 w-12 text-primary" />,
      description: "Looking for something custom? We offer tailored AI consulting solutions, training sessions, and more.",
      link: "/services/custom-solutions"
    }
  ]

  return (
    <>
      <HeaderComponent />
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-primary to-primary/80 text-primary-foreground py-12 sm:py-16 md:py-20">
          <div className="container px-4 sm:px-6 max-w-6xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
              Our Services
            </h1>
            <p className="text-lg sm:text-xl text-center max-w-3xl mx-auto mt-4">
              Discover how Constructiv AI can transform your construction business with our range of AI-powered services and expert consulting.
            </p>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-20">
          <div className="container px-4 sm:px-6 max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">Our Consulting Packages</h2>
            <p className="text-lg text-center max-w-3xl mx-auto mb-12">
              Whether you're a small contractor or managing multiple projects across regions, our AI-powered consulting packages help you streamline operations, boost efficiency, and reduce costs.
            </p>
            <div className="grid gap-8 md:grid-cols-3">
              {consultingPackages.map((pkg, index) => (
                <Card key={index} className="flex flex-col">
                  <CardHeader>
                    <div className="flex justify-center mb-4">{pkg.icon}</div>
                    <CardTitle className="text-xl font-bold text-center">{pkg.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">{pkg.description}</CardDescription>
                  </CardContent>
                  <CardFooter className="flex justify-center mt-auto">
                    <Button asChild>
                      <Link href={pkg.link}>Learn More</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-muted py-12 sm:py-16 md:py-20">
          <div className="container px-4 sm:px-6 max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">Additional Services</h2>
            <p className="text-lg text-center max-w-3xl mx-auto mb-12">
              Beyond consulting, we offer a range of services to educate, inspire, and drive the adoption of AI in construction. Learn more about our speaking engagements, webinars, and custom services.
            </p>
            <div className="grid gap-8 md:grid-cols-3">
              {additionalServices.map((service, index) => (
                <Card key={index} className="flex flex-col">
                  <CardHeader>
                    <div className="flex justify-center mb-4">{service.icon}</div>
                    <CardTitle className="text-xl font-bold text-center">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">{service.description}</CardDescription>
                  </CardContent>
                  <CardFooter className="flex justify-center mt-auto">
                    <Button asChild>
                      <Link href={service.link}>Learn More</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-20">
          <div className="container px-4 sm:px-6 max-w-6xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Transform Your Construction Business?</h2>
            <p className="text-lg mb-8">Discover how our AI-powered solutions and expert consulting can boost your efficiency and profitability.</p>
            <Button size="lg" asChild>
              <Link href="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </section>
      </main>
    </>
  )
}