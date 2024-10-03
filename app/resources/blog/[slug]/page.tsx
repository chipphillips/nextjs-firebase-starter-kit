import { getPostBySlug } from '@/lib/dao/blog-post-dao';
import { BlogPost } from '@/types/blog-post';
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import BlogPostForm from '@/components/BlogPostForm';

// This function generates metadata for the blog post page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  // Fetch the blog post data using the slug from the URL parameters
  const post = await getPostBySlug(params.slug);
  
  if (!post) {
    return {}
  }
  
  // The function will continue to return the title and description as metadata if a post is found
  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }
      return <BlogPostForm post={post as BlogPost} />
}