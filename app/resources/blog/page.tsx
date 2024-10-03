import { BlogPost } from '@/types/blog-post'
import { getAllPublishedPosts, getRecentPosts } from '@/lib/dao/blog-post-dao';
import Blog from '../../../components/Blog';

export default async function BlogPage() {
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
}