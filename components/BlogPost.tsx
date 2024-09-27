import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CalendarIcon, Clock, Twitter, Linkedin, Facebook, Share2 } from 'lucide-react'

type BlogPostProps = {
  title: string
  date: string
  author: string
  coverImage: string
  excerpt: string
  content: React.ReactNode
  estimatedReadTime: number
}

export const BlogPost: React.FC<BlogPostProps> = ({ 
  title, 
  date, 
  author, 
  coverImage, 
  excerpt, 
  content,
  estimatedReadTime 
}) => {
  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="w-full bg-[#e8f2fc] p-8">
        <div className="max-w-8xl mx-auto">
          <div className="lg:flex lg:items-center lg:gap-8">
            <div className="lg:w-1/2 mb-6 lg:mb-0">
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden bg-[#1d81dc]">
                <Image
                  src={coverImage}
                  alt={`Cover image for ${title}`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <header>
                <div className="text-pink-600 font-semibold mb-2">AI AND WEB DEVELOPMENT</div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
                <p className="text-gray-600 mb-4">{excerpt}</p>
                <div className="flex items-center mb-4">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Author's avatar"
                    width={40}
                    height={40}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <div className="font-semibold">{author}</div>
                    <div className="text-sm text-gray-600">Head of AI Research</div>
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-600 mb-6">
                  <CalendarIcon className="w-4 h-4 mr-2" />
                  <time>{date}</time>
                  <span className="mx-2">•</span>
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{estimatedReadTime} min read</span>
                </div>
                <div className="flex space-x-4">
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors">
                    <Twitter className="w-5 h-5 text-blue-400" />
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors">
                    <Linkedin className="w-5 h-5 text-blue-700" />
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors">
                    <Facebook className="w-5 h-5 text-blue-600" />
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors">
                    <Share2 className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </header>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <article>
          <div className="prose prose-lg max-w-none mb-12">
            {content}
          </div>
        </article>
      </div>
    </div>
  )
}