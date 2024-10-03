'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CalendarIcon, Clock, Twitter, Linkedin, Facebook, Share2, ArrowUp, Mail, List } from 'lucide-react'
import { BlogPost } from '@/types/blog-post'

export default function BlogPostForm({ post }: { post: BlogPost }) {
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [email, setEmail] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const estimateReadingTime = (content: string) => {
    const wordsPerMinute = 200
    const wordCount = content.split(/\s+/).length
    return Math.ceil(wordCount / wordsPerMinute)
  }

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Submitted email:', email)
    setEmail('')
    alert('Thank you for subscribing to our newsletter!')
  }

  const readingTime = estimateReadingTime(post.content)

  return (
    <div className="bg-white">
      <div className="w-full bg-[#e8f2fc] py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:gap-8">
            <div className="lg:w-1/2 mb-6 lg:mb-0">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-[#1d81dc]">
                <Image
                  src={post.coverImage || "/placeholder.svg?height=400&width=400"}
                  alt={`Cover image for ${post.title}`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <header>
                <div className="text-pink-600 font-semibold mb-2">{post.category}</div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  {post.title}
                </h1>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center mb-4">
                  <Image
                    src={post.author.avatar || "/placeholder.svg?height=40&width=40"}
                    alt={`${post.author.name}'s avatar`}
                    width={40}
                    height={40}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <div className="font-semibold">{post.author.name}</div>
                    <div className="text-sm text-gray-600">{post.author.title}</div>
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-600 mb-6">
                  <CalendarIcon className="w-4 h-4 mr-2" />
                  <time>{new Date(post.date).toLocaleDateString()}</time>
                  <span className="mx-2">•</span>
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{readingTime} min read</span>
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

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <article>
          <div className="bg-white rounded-lg shadow-sm border p-4 mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Key Takeaways</h2>
            <ul className="space-y-1">
              {['AI will revolutionize code generation', 'Automated testing will become more sophisticated', 'Personalized user experiences will be easier to implement'].map((takeaway, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700 text-sm">{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:flex lg:gap-8">
            <div className="lg:w-2/3">
              <div className="prose prose-lg max-w-none mb-12">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>
            </div>

            <div className="lg:w-1/3">
              <div className="sticky top-4">
                <div className="bg-white rounded-lg shadow-sm border p-4 mb-8">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <List className="w-5 h-5 mr-2" />
                    Table of Contents
                  </h2>
                  <nav>
                    <ul className="space-y-2">
                      <li>
                        <button onClick={() => scrollToSection('impact-of-ai')} className="text-blue-600 hover:underline text-sm">The Impact of AI on Web Development</button>
                      </li>
                      <li>
                        <button onClick={() => scrollToSection('future-trends')} className="text-blue-600 hover:underline text-sm">Future Trends</button>
                      </li>
                      <li>
                        <button onClick={() => scrollToSection('conclusion')} className="text-blue-600 hover:underline text-sm">Conclusion</button>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>

          {/* About the Author */}
          <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">About the Author</h2>
            <div className="flex items-center mb-4">
              <Image
                src="/placeholder.svg?height=100&width=100"
                alt="John Doe"
                width={100}
                height={100}
                className="rounded-full mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold">John Doe</h3>
                <p className="text-gray-600">AI and Web Development Expert</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              John Doe is a seasoned web developer with over 10 years of experience in the industry. 
              He specializes in AI-driven web solutions and is passionate about exploring the 
              intersection of artificial intelligence and web development.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                <Linkedin className="w-4 h-4 mr-2" />
                Connect on LinkedIn
              </Link>
              <Link href="/contact" className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors">
                <Mail className="w-4 h-4 mr-2" />
                Contact Author
              </Link>
            </div>
          </div>

          {/* Related Posts */}
          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "The Rise of AI-Powered Design Tools", date: "August 28, 2023", image: "/placeholder.svg?height=200&width=300" },
                { title: "Machine Learning in Frontend Development", date: "September 5, 2023", image: "/placeholder.svg?height=200&width=300" },
                { title: "Ethical Considerations in AI Web Development", date: "September 10, 2023", image: "/placeholder.svg?height=200&width=300" }
              ].map((post, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border overflow-hidden">
                  <Image src={post.image} alt={post.title} width={300} height={200} className="w-full h-40 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{post.title}</h3>
                    <time className="text-sm text-gray-500">{post.date}</time>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </article>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  )
}