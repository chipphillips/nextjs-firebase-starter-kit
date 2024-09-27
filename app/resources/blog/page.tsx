import { getAllPublishedPosts } from '@/lib/dao/blog-post-dao'
import Blog from '@/components/Blog'

export default async function BlogPage() {
  const posts = await getAllPublishedPosts()
  const recentPosts = posts.slice(0, 5)

  return <Blog initialPosts={posts} recentPosts={recentPosts} />
}