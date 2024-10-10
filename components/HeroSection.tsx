'use client'

// Import necessary components and icons
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'

// Define the structure for Call-to-Action (CTA) props
interface CTAProps {
  text: string
  href: string
}

// Define the structure for the main HeroSection component props
interface HeroProps {
  title: string
  highlightedText: string
  description: string
  primaryCTA?: CTAProps
  secondaryCTA?: CTAProps
  imageSrc: string
  imageAlt: string
}

// HeroSection component: Displays a prominent area at the top of the page
// It includes a title, description, CTAs, and a featured image
export default function HeroSection({
  title,
  highlightedText,
  description,
  primaryCTA,
  secondaryCTA,
  imageSrc,
  imageAlt
}: HeroProps) {
  return (
    // Main container for the hero section with a dark blue background
    <section className="relative w-full py-12 md:py-24 lg:py-32 bg-[#101c2e]">
      <div className="container px-4 md:px-6">
        {/* Grid layout for responsive design */}
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          {/* Left column: Text content and CTAs */}
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              {/* Main title with highlighted text */}
              <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
                {title} <span className="text-[#b1ddf6]">{highlightedText}</span>
              </h1>
              {/* Description text */}
              <p className="max-w-[600px] text-gray-300 md:text-xl">
                {description}
              </p>
            </div>
            {/* CTA buttons container */}
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              {/* Primary CTA button */}
              {primaryCTA && (
                <Button asChild className="bg-blue-500 text-white hover:bg-blue-600">
                  <Link href={primaryCTA.href}>
                    {primaryCTA.text}
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              )}
              {/* Secondary CTA button */}
              {secondaryCTA && (
                <Button asChild variant="outline" className="bg-white text-[#101c2e] border-white hover:bg-gray-100">
                  <Link href={secondaryCTA.href}>
                    {secondaryCTA.text}
                    <FileText className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              )}
            </div>
          </div>
          {/* Right column: Featured image */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-sm lg:max-w-none aspect-video rounded-xl overflow-hidden shadow-2xl">
              {/* Featured image with fallback to placeholder */}
              <Image
                src={imageSrc || '/images/placeholder.jpg'} // Provide a default placeholder
                alt={imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover rounded-xl"
              />
              {/* Overlay gradient for better text visibility */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#101c2e]/50 to-[#101c2e]/0" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}