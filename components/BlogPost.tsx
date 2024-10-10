// Import the function to fetch a blog post by its slug
import { getPostBySlug } from '@/lib/dao/blog-post-dao';

// Define the BlogPost component as an async function
// It takes a 'slug' prop to identify which post to display
export default async function BlogPost({ slug }: { slug: string }) {
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
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  )
}