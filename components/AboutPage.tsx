'use client'

import React, { useState, useEffect, useRef } from 'react'
import HeroSection from '@/components/HeroSection'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Settings, Zap, Users, BarChart, Shield, Star, Heart, Lightbulb, Sliders, UserCheck, Gift, RefreshCw, TrendingUp, Compass, HardHat, ChevronRight } from "lucide-react"
import { motion, useInView } from 'framer-motion'
import { Section } from '@/app/layout'
import Image from 'next/image'
import AdvantagesSection from '@/components/AdvantagesSection'
import { AnimatePresence } from 'framer-motion'

// Define interfaces for our data structures
interface Section {
  id: string;
  title: string;
  subtitle: string;
  content: React.ReactNode | Array<{ icon?: React.ElementType; title: string; description: string }>;
  image?: string;
  imageAlt?: string;
  highlight?: React.ReactNode;
  values?: Array<{ icon: React.ElementType; title: string; description: string }>;
}

interface Advantage {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface Value {
  icon: React.ElementType;
  title: string;
  description: string;
}

// Define animation variants for container elements
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

// Define animation variants for individual items
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

const ValuesSection: React.FC<{ values: Value[] }> = ({ values }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {values.map((value, idx) => (
          <motion.div 
            key={idx} 
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <Card 
              className="mb-4 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => toggleExpand(idx)}
            >
              <CardContent className="p-4">
                <div className="flex items-center">
                  <span className="inline-block rounded-lg bg-accent-50 p-3 mr-4">
                    <value.icon className="h-10 w-10 text-accent-500" />
                  </span>
                  <h3 className="font-bold text-sm sm:text-base md:text-lg text-primary-900 leading-tight">
                    {value.title}
                  </h3>
                </div>
                <AnimatePresence>
                  {expandedIndex === idx && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4"
                    >
                      <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default function AboutPage() {
  const [activeSection, setActiveSection] = useState<string>('story');
  const [isImageEnlarged, setIsImageEnlarged] = useState(false);
  const imageRef = useRef(null);
  const isImageInView = useInView(imageRef, { once: true, amount: 0.5 });

  // Define our values
  const values: Value[] = [
    { icon: Star, title: "EMPOWER EXCELLENCE", description: "We enhance, not replace, builder expertise with cutting-edge AI tools." },
    { icon: Heart, title: "INTEGRITY", description: "We build trust through transparency and ethical actions." },
    { icon: Lightbulb, title: "INNOVATION", description: "We push boundaries to solve construction challenges with simple, effective solutions." },
    { icon: Sliders, title: "ADAPTABILITY", description: "We tailor our tools to fit seamlessly into each business's unique workflow." },
    { icon: UserCheck, title: "CUSTOMER-CENTRIC", description: "We prioritize our customers' growth, saving them time and enhancing project quality." },
    { icon: Gift, title: "LAGNIAPPE", description: "We go the extra mile, offering that little something extra in every interaction." },
    { icon: RefreshCw, title: "SUSTAINABLE PARTNERSHIP", description: "We grow alongside our customers, continuously improving to meet evolving needs." }
  ];

  // Define our sections
  const sections: Section[] = [
    {
      id: 'story',
      title: 'Our Story',
      subtitle: 'The journey of Constructiv AI',
      content: (
        <>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
            My journey with Constructiv AI began when I recognized that small to midsize home builders and construction companies were being left behind in the digital revolution. Working as a supplier of lumber and building materials, I had the unique opportunity to collaborate with builders of all sizes. This experience allowed me to see firsthand the daily challenges they faced—managing projects, wrestling with paperwork, and striving to exceed client expectations.
          </p>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
            I noticed that while larger firms leveraged extensive staffs and advanced tools to streamline operations, smaller teams were often overwhelmed by administrative tasks that pulled them away from their craft. Time and money were common hurdles, and despite their dedication, these builders struggled to find ways to save time and increase profits. I also saw how successful builders provided exceptional customer experiences through great communication, understanding client goals, educating on products, providing clear updates, and delivering projects on successful timelines.
          </p>
          <div className="relative w-full aspect-video mb-6">
            <Image
              src="/herographic2.png"
              alt="Constructiv AI team at a construction site"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-xl"
            />
          </div>
          <p className='text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed'>
            Each builder had unique systems and processes—there was no one-size-fits-all solution. This realization sparked an idea: What if I could create a customizable platform that serves as a central hub, providing the necessary context to power AI tools tailored to each builder's specifics? This thought led to the creation of Constructiv AI.
          </p>
          <p className='text-base sm:text-lg text-muted-foreground leading-relaxed'>
            I'm passionate about helping builders balance their work and personal lives. I believe that skilled builders are irreplaceable, and they deserve more time to enjoy the fruits of their labor. With Constructiv AI, my goal is to eliminate those late nights spent catching up on paperwork, so you can focus on growing your business and spending time with your family.
          </p>
        </>
      ),
      image: "/herographic2.png",
      imageAlt: "Constructiv AI team at a construction site"
    },
    {
      id: 'mission',
      title: 'Our Mission',
      subtitle: 'Empowering construction businesses with AI',
      content: (
        <>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
              Our mission at Constructiv AI is to empower small to midsize construction businesses with powerful, customizable AI tools designed around your unique workflows. We're committed to streamlining your operations, automating routine tasks, and boosting efficiency—saving you up to 10 hours a week. This means more time to focus on what truly matters: craftsmanship, client relationships, and enjoying the fruits of your labor.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              We understand that there's no single button to make administrative tasks disappear overnight. However, we're taking the first step in that direction by providing a central hub that powers AI tools based on your specifics. Our goal is to remove the obstacles that often separate blue-collar builders from larger opportunities, helping you grow your business without sacrificing personal time. We believe that skilled builders like you are irreplaceable, and our AI tools are designed to support you, not replace you.
            </p>
        </>
      )
    },
    {
      id: 'vision',
      title: 'Our Vision',
      subtitle: 'The future of AI in construction',
      content: (
        <>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
              We envision a future where small to midsize construction businesses harness the power of AI to elevate craftsmanship, efficiency, and work-life balance. Imagine operating with the agility of a startup and the resources of industry giants—making informed decisions, avoiding costly mistakes, and having more time for family and personal pursuits.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Our vision is to standardize the use of AI in construction in a way that enhances the irreplaceable human touch that defines true quality. We aim to create a world where technology empowers you to focus on the creative and strategic aspects of your work, without late nights spent catching up on administrative tasks. Our goal is to be your trusted partner in this journey, providing AI solutions that complement and elevate your skills, ushering in a new era of innovation and excellence in construction.
            </p>
        </>
      )
    },
    {
      id: 'advantages',
      title: 'Our Advantages',
      subtitle: 'What sets us apart',
      content: <AdvantagesSection />
    },
    {
      id: 'values',
      title: 'Our Values',
      subtitle: 'What drives us forward',
      content: (
        <>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
            At Constructiv AI, our values are the foundation of everything we do. They guide our decisions, shape our culture, and drive our commitment to excellence.
          </p>
          <ValuesSection values={values} />
        </>
      )
    }
  ];

  // Add this new function to render the content based on its type
  const renderContent = (content: React.ReactNode | Array<{ icon?: React.ElementType; title: string; description: string }>) => {
    if (React.isValidElement(content)) {
      return content;
    } else if (Array.isArray(content)) {
      return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {content.map((item, index) => (
            <Card key={index} className="flex flex-col h-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center mb-4">
                  {item.icon && <item.icon className="h-8 w-8 text-primary-500 mr-3" />}
                  <h3 className="font-display text-xl font-bold text-azure-800">{item.title}</h3>
                </div>
                <p className="text-base text-muted-foreground flex-grow">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      );
    } else if (typeof content === 'string') {
      return <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">{content}</p>;
    }
    return null;
  };

  // Effect to smooth scroll to the active section
  useEffect(() => {
    const element = document.getElementById(activeSection);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [activeSection]);

  return (
    <main className="flex-grow bg-background text-foreground">
      <HeroSection
        title={{
          before: "Your 24/7 Assistant:",
          highlighted: "AI Tools",
          after: "That Work While You Build"
        }}
        description="Constructiv AI isn't just software—it's your round-the-clock partner in profitability. Our AI-powered tools handle time-consuming tasks, allowing you to focus on what you do best: delivering exceptional projects and growing your business."
        primaryCTA={{ text: "Schedule Your Demo", href: "#join" }}
        secondaryCTA={{ text: "Explore Our Story", href: "#story" }}
        imageSrc="/heroclock.svg"
        imageAlt="AI-powered construction management visualization"
      />

      <nav className="bg-muted py-4 sticky top-0 z-10 overflow-x-auto">
        <div className="container mx-auto px-container-padding max-w-container-max">
          <ul className="flex justify-start sm:justify-center space-x-4 min-w-max">
            {sections.map((section) => (
              <li key={section.id}>
                <Button 
                  variant={activeSection === section.id ? "default" : "ghost"}
                  onClick={() => setActiveSection(section.id)}
                  className="whitespace-nowrap"
                >
                  {section.title}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {sections.map((section, index) => (
        <Section 
          key={section.id} 
          background={index % 2 === 0 ? 'primary-50' : 'white'}
        >
          {section.id === 'advantages' ? (
            // Render AdvantagesSection without additional wrapping
            <div id={section.id}>
              {renderContent(section.content)}
            </div>
          ) : (
            // Render other sections with the existing layout
            <div id={section.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4 flex flex-col">
                <h3 className="text-sm font-semibold text-primary mb-2 uppercase tracking-wide">{section.id}</h3>
                <h2 className="text-3xl sm:text-4xl font-bold text-azure-800 mb-4">{section.title}</h2>
                <p className="text-lg text-muted-foreground mb-6">{section.subtitle}</p>
                <div className="h-1 w-20 bg-primary mb-6"></div>
              </div>
              <div className="lg:col-span-8">
                <div className="text-muted-foreground space-y-6 max-w-prose">
                  {renderContent(section.content)}
                </div>
                {section.highlight && section.highlight}
                {section.values && (
                  <div className="grid gap-8 md:grid-cols-2 mt-8">
                    {section.values.map((value, idx) => (
                      <div key={idx} className="flex gap-4">
                        <span className="flex-shrink-0 w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                          <value.icon className="w-6 h-6 text-accent-foreground" />
                        </span>
                        <div>
                          <h3 className="font-medium text-lg mb-2 text-azure-500">{value.title}</h3>
                          <p className="text-base text-muted-foreground leading-relaxed">{value.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </Section>
      ))}

      <Section background="primary-50" className="text-accent-foreground">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Communicate Faster, Document Better, and Build Smarter.</h2>
        </div>
      </Section>

      {isImageEnlarged && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setIsImageEnlarged(false)}
        >
          <div className="relative w-11/12 h-11/12">
            <Image
              src="/herographic2.png"
              alt="Constructiv AI team at a construction site"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      )}
    </main>
  )
}
