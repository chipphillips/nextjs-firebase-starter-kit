// This component represents the main blog page of the Constructiv AI website
// It displays a list of blog posts, allows searching, and shows recent posts
'use client'

import React, { useMemo, useState } from 'react'
import { db } from '@/lib/config/firebase-client';
import { collection, query, orderBy, limit } from 'firebase/firestore'
import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Input } from './ui/input'
import { Search } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { BlogPost } from '@/types/blog-post'
import { DB_COLLECTIONS } from '@/lib/dao/db-collections'

// Define the props expected by the Blog component
type BlogProps = {
  posts: BlogPost[]
  recentPosts: BlogPost[]
}

const Blog = ({ posts, recentPosts }: BlogProps) => {
  // State for managing the search query and all posts
  const [searchQuery, setSearchQuery] = useState('')
  const [allPosts, setAllPosts] = useState<BlogPost[]>(posts)

  // Memoized query for fetching recent posts from Firestore
  // This query is created once and reused unless its dependencies change
  const recentPostsQuery = useMemo(() => {
    return query(collection(db, DB_COLLECTIONS.POSTS), orderBy('createdAt', 'desc'), limit(5));
  }, []);

  // Filter posts based on the search query
  const filteredPosts = allPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (post.excerpt && post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Hero section with search functionality */}
      <section className="bg-muted py-16 flex-shrink-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">Constructiv AI Blog</h1>
          <p className="text-xl text-muted-foreground mb-8">Empowering builders with AI-powered insights and tools</p>
          <form className="flex items-center space-x-2" onSubmit={(e) => e.preventDefault()}>
            <Input 
              placeholder="Search articles..." 
              className="flex-grow" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button type="submit" size="icon"><Search className="h-4 w-4" /></Button>
          </form>
        </div>
      </section>

      {/* Main content area */}
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Latest posts section */}
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-bold mb-8">Latest Posts</h2>
            <div className="space-y-8">
              {filteredPosts.length > 0 ? (
                <div className="grid gap-8">
                  {/* Map through filtered posts and render each as a card */}
                  {filteredPosts.map((post) => (
                    <Card key={post.id} className="overflow-hidden">
                      <div className="md:flex">
                        {post.coverImage && (
                          <div className="md:w-1/3 aspect-w-16 aspect-h-9 md:aspect-h-full">
                            <Image
                              src={post.coverImage}
                              alt={`Cover image for ${post.title}`}
                              layout="fill"
                              objectFit="cover"
                            />
                          </div>
                        )}
                        <div className="p-6 md:w-2/3 flex flex-col justify-between">
                          <div>
                            <CardTitle className="text-2xl mb-2">
                              <Link href={`/resources/blog/${post.id}`} className="hover:text-primary transition-colors">
                                {post.title}
                              </Link>
                            </CardTitle>
                            <CardDescription className="mb-4">Posted on {post.date.toDateString()} by {post.author.name}</CardDescription>
                            <div className="text-muted-foreground">
                              <p>{post.excerpt}</p>
                            </div>
                          </div>
                          <div className="mt-4">
                            <Button variant="outline" asChild>
                              <Link href={`/resources/blog/${post.id}`}>Read More</Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                <p className="text-center text-muted-foreground">No posts found.</p>
              )}
              {/* Load More Posts button */}
              {filteredPosts.length > 0 && (
                <div className="mt-8 flex justify-center">
                  <Button variant="outline">Load More Posts</Button>
                </div>
              )}
            </div>
          </div>
          {/* Sidebar with recent posts */}
          <aside className="lg:w-1/3">
            <h3 className="text-2xl font-bold mb-4">Recent Posts</h3>
            <div className="space-y-4">
              {/* Map through recent posts and render each as a card */}
              {recentPosts.map((post) => (
                <Card key={post.id}>
                  <CardHeader>
                    <CardTitle>
                      <Link href={`/resources/blog/${post.id}`} className="hover:text-primary transition-colors">
                        {post.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </aside>
        </div>
      </main>

      {/* Call-to-action section */}
      <section className="bg-muted py-16 flex-shrink-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Construction Business?</h2>
          <p className="text-xl text-muted-foreground mb-8">Join thousands of builders who are already working smarter with Constructiv AI</p>
          <Button size="lg">Get Started Today</Button>
        </div>
      </section>
    </div>
  )
}

export default Blog