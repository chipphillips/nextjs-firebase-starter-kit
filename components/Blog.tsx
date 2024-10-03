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

type BlogProps = {
  posts: BlogPost[]
  recentPosts: BlogPost[]
}

const Blog = ({ posts, recentPosts }: BlogProps) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [allPosts, setAllPosts] = useState<BlogPost[]>(posts)

  const recentPostsQuery = useMemo(() => {
    return query(collection(db, DB_COLLECTIONS.POSTS), orderBy('createdAt', 'desc'), limit(5));
  }, []);

  const filteredPosts = allPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (post.excerpt && post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  return (
    <div className="min-h-screen bg-background flex flex-col">
    
      <section className="bg-muted py-16 w-full">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Constructiv AI Blog</h1>
          <p className="text-xl text-muted-foreground mb-8">Empowering builders with AI-powered insights and tools</p>
          <form className="max-w-md mx-auto flex items-center space-x-2" onSubmit={(e) => e.preventDefault()}>
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

      <main className="flex-grow max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-bold mb-8">Latest Posts</h2>
            {filteredPosts.length > 0 ? (
              <div className="grid gap-8">
                {filteredPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden">
                    <div className="md:flex">
                      {post.coverImage && (
                        <Image
                          src={post.coverImage}
                          alt={`Cover image for ${post.title}`}
                          width={350}
                          height={250}
                          className="w-full md:w-auto object-cover"
                        />
                      )}
                      <div className="p-6 flex flex-col justify-between">
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
            {filteredPosts.length > 0 && (
              <div className="mt-8 flex justify-center">
                <Button variant="outline">Load More Posts</Button>
              </div>
            )}
          </div>
          <aside className="lg:w-1/3">
            <h3 className="text-2xl font-bold mb-4">Recent Posts</h3>
            <div className="space-y-4">
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

      <section className="bg-muted py-16 w-full">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Construction Business?</h2>
          <p className="text-xl text-muted-foreground mb-8">Join thousands of builders who are already working smarter with Constructiv AI</p>
          <Button size="lg">Get Started Today</Button>
        </div>
      </section>
    </div>
  )
}

export default Blog