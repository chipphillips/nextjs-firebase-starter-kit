import { BlogPost } from '@/types/blog-post'
import { getAllPublishedPosts, getRecentPosts } from '@/lib/dao/blog-post-dao';
import Blog from '@/components/Blog';

export const revalidate = 3600 // Revalidate every hour

export default async function BlogPage() {
  try {
    const [allPosts, recentPosts] = await Promise.all([
      getAllPublishedPosts(),
      getRecentPosts(5)
    ]);

    return (
      <div className="blog-page">
        <main>
          <Blog
            posts={allPosts}
            recentPosts={recentPosts}
          />
        </main>
      </div>
    );
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    // Return a simple error state or error boundary component
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold">Unable to load blog posts</h2>
        <p>Please try again later</p>
      </div>
    );
  }
}
