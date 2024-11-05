import React from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

interface HeroSectionProps {
  title: {
    before?: string;
    highlighted: string;
    after?: string;
  }
  description: string
  primaryCTA: { text: string; href: string }
  secondaryCTA: { text: string; href: string }
  imageSrc: string
  imageAlt: string
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  primaryCTA,
  secondaryCTA,
  imageSrc,
  imageAlt
}: HeroSectionProps) => {
  return (
    <section className="relative mt-16 min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-950 dark:to-primary-900 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content Section */}
          <div className="flex flex-col space-y-6 max-w-xl mx-auto md:mx-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary-950 dark:text-primary-50 text-center md:text-left leading-[1.1]">
              {title.before && <>{title.before}{' '}</>}
              <span className="relative">
                <span className="text-[#2563eb] dark:text-[#60a5fa]">
                  {title.highlighted}
                </span>
              </span>
              {title.after && <>{' '}{title.after}</>}
            </h1>
            
            <p className="text-lg sm:text-xl text-primary-800/90 dark:text-primary-200 leading-relaxed text-center md:text-left">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                size="lg"
                className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                asChild
              >
                <Link href={primaryCTA.href}>
                  {primaryCTA.text}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb]/5 dark:text-primary-200 dark:hover:bg-primary-800/50 font-semibold px-8 py-6 rounded-lg transition-colors duration-300 w-full sm:w-auto"
                asChild
              >
                <Link href={secondaryCTA.href}>
                  {secondaryCTA.text}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="pt-6 mt-2 border-t border-primary-200/30 dark:border-primary-800/30 text-center md:text-left">
              <p className="text-sm text-primary-600 dark:text-primary-400">
                Trusted by construction companies worldwide
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative block md:block px-4 md:px-0">
            <div className="relative w-full h-48 sm:h-64 md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
                priority
                quality={90}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
        <svg 
          className="absolute bottom-0 w-full h-full" 
          viewBox="0 0 100 100" 
          preserveAspectRatio="none"
          fill="var(--background)"
        >
          <path d="M0 100 C 30 0 70 0 100 100 Z" />
        </svg>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-6 rounded-full bg-[#2563eb] opacity-75" />
      </div>
    </section>
  )
}

export default HeroSection
