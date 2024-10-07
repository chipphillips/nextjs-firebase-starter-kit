import React from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { HardHat, Building, Building2, Mic, Laptop, Cog } from "lucide-react";
import HeroSection from '@/components/HeroSection';

export default function Services() {
  return (
    <main>
      <HeroSection
        title="Transforming Construction with"
        highlightedText="AI-Powered Services"
        description="Discover our range of innovative services designed to optimize your construction projects and boost efficiency."
        primaryCTA={{ text: "Explore Services", href: "#services" }}
        secondaryCTA={{ text: "Contact Us", href: "/contact" }}
        imageSrc="/images/construction-services.png"
        imageAlt="AI-powered construction services"
      />
      {/* ... rest of the component ... */}
    </main>
  )
}