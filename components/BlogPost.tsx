// Import the function to fetch a blog post by its slug
import { getPostBySlug } from '@/lib/dao/blog-post-dao';
import Link from 'next/link';
import Image from 'next/image';
import type { BlogPost } from '@/types/blog-post';

interface BlogPostProps {
  slug: string;
}

// Define the BlogPost component as an async function
// It takes a 'slug' prop to identify which post to display
export default async function BlogPost({ slug }: BlogPostProps) {
  // Fetch the blog post data using the provided slug
  const post = await getPostBySlug(slug)

  // If no post is found, display a simple "Post not found" message
  // This helps handle cases where an invalid or non-existent slug is provided
  if (!post) {
    return <div>Post not found</div>
  }

  // If a post is found, render its content
  // We use the <article> tag to semantically wrap the blog post content
  return (
    <article className="prose prose-lg max-w-none">
      <h1>{post.title}</h1>
      <div className="metadata">
        <time>{new Date(post.date).toLocaleDateString()}</time>
        <span className="author">By {post.author}</span>
        <span className="status">{post.status}</span>
      </div>
      {post.coverImage && (
        <Image
          src={post.coverImage}
          alt={post.title}
          width={800}
          height={400}
          className="featured-image"
        />
      )}
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
      <div className="tags">
        {post.tags.map(tag => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
    </article>
  )
}
