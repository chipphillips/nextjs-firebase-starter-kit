import React from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface HeroSectionProps {
  title: string
  highlightedText: string
  description: string
  primaryCTA: { text: string; href: string }
  secondaryCTA: { text: string; href: string }
  imageSrc: string
  imageAlt: string
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  highlightedText,
  description,
  primaryCTA,
  secondaryCTA,
  imageSrc,
  imageAlt
}) => {
  return (
    <section className="relative bg-gradient-to-br from-azure-800 to-primary-600 text-white overflow-hidden">
      <div className="container py-12 md:py-16 lg:py-20 relative z-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-6 max-w-xl">
            <h1 className="hero-header">
              {title} <span className="text-dandelion-400">{highlightedText}</span>
            </h1>
            <p className="prose-45 text-primary-100 text-lg md:text-xl">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary w-full sm:w-auto">
                {primaryCTA.text}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="bg-white text-primary-900 border-white hover:bg-primary-100 text-base py-4 px-6 w-full sm:w-auto">
                {secondaryCTA.text}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-lg aspect-[16/9] rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <Image
                src={imageSrc}
                alt={imageAlt}
                layout="fill"
                objectFit="cover"
                className="rounded-lg filter brightness-110 contrast-110 saturate-120"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/30 to-primary-900/0 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16">
        <svg className="absolute bottom-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
          <path d="M0 100 C 20 0 50 0 100 100 Z" fill="var(--primary-900)" />
        </svg>
      </div>
    </section>
  )
}

export default HeroSection
