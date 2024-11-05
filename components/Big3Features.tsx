'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, MessageSquare, LayoutPanelTop, ArrowRight } from 'lucide-react'

interface Big3FeaturesProps {
  className?: string
}

const Big3Features: React.FC<Big3FeaturesProps> = ({ className }) => {
  const pillars = [
    {
      icon: <FileText className="w-10 h-10 text-azure-600" />,
      title: "Document Better",
      description: "AI-powered document analysis and management throughout your project lifecycle.",
      stages: ["Pre-construction planning", "On-site documentation", "Post-project archiving"],
      color: "from-azure-400 to-azure-600",
      iconColor: "text-azure-600",
    },
    {
      icon: <MessageSquare className="w-10 h-10 text-eucalyptus-800" />,
      title: "Communicate Faster",
      description: "Streamlined, AI-assisted communication from project inception to completion.",
      stages: ["Team collaboration", "Client updates", "Subcontractor coordination"],
      color: "from-eucalyptus-500 to-eucalyptus-700",
      iconColor: "text-eucalyptus-800",
    },
    {
      icon: <LayoutPanelTop className="w-10 h-10 text-secondary-800" />,
      title: "Build Smarter",
      description: "Intelligent insights and optimization for every phase of construction.",
      stages: ["Resource allocation", "Real-time adaptations", "Continuous improvement"],
      color: "from-secondary-500 to-secondary-700",
      iconColor: "text-secondary-800",
    },
  ]

  return (
    <div className="relative bg-background">
      <div className="section-padding relative z-10">
        <div className="section-content">
          <div className="mb-20 text-center">
            <h2 className="text-4xl font-bold text-primary-900 mb-6 whitespace-nowrap">Constructiv AI: Your Intelligent Building Companion</h2>
            <p className="text-xl text-primary-700 max-w-2xl mx-auto">Empowering home builders with AI-driven assistance from pre-construction to project completion, and beyond</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <Card key={index} className="flex flex-col h-full bg-white shadow-xl hover:shadow-2xl transition-all duration-300 overflow-visible relative group backdrop-blur-sm bg-opacity-90 mt-16">
                <div className={`h-2 bg-gradient-to-r ${pillar.color} w-full`}></div>
                <div className={`absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full bg-white shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${pillar.iconColor} z-10 p-4`}>
                  {pillar.icon}
                </div>
                <CardHeader className="pt-14 pb-4">
                  <CardTitle className="text-2xl font-bold text-primary-900 text-center">{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between p-6">
                  <p className="text-primary-700 mb-8 text-center">{pillar.description}</p>
                  <ul className="space-y-4 flex flex-col items-start w-full pl-4">
                    {pillar.stages.map((stage, i) => (
                      <li key={i} className="flex items-center text-sm text-primary-700 w-full">
                        <ArrowRight className={`mr-3 w-5 h-5 ${pillar.iconColor} flex-shrink-0`} />
                        <span>{stage}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Big3Features