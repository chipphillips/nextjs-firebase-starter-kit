'use client'

import { BlogPost } from '@/types/blog-post'
import { Card, CardTitle, CardDescription } from '@/components/ui/card'
import Link from 'next/link'
import Image from 'next/image'

interface PostCardProps {
  post: BlogPost
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="md:flex">
        {post.coverImage && (
          <div className="md:w-1/3">
            <Image
              src={post.coverImage}
              alt={`Cover image for ${post.title}`}
              width={300}
              height={200}
              className="object-cover w-full h-full"
            />
          </div>
        )}
        <div className="p-6 md:w-2/3">
          <CardTitle className="text-2xl mb-2">
            <Link href={`/resources/blog/${post.slug}`}>
              {post.title}
            </Link>
          </CardTitle>
          <CardDescription className="mb-4">
            Posted on {new Date(post.date).toLocaleDateString()} by {post.author}
          </CardDescription>
          <div className="text-muted-foreground">
            <p>{post.excerpt}</p>
          </div>
        </div>
      </div>
    </Card>
  )
} 