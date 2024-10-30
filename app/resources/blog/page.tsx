import { BlogPost } from '@/types/blog-post'
import { getAllPublishedPosts, getRecentPosts } from '@/lib/dao/blog-post-dao';
import Blog from '@/components/Blog';
import { Timestamp } from 'firebase-admin/firestore';

// Helper function to safely serialize blog post data
function serializePost(post: any): BlogPost {
  return {
    id: post.id || '',
    title: post.title || '',
    content: post.content || '',
    slug: post.slug || '',
    date: post.date instanceof Timestamp ? post.date.toDate().toISOString() : 
          (typeof post.date === 'string' ? post.date : new Date().toISOString()),
    author: post.author || '',
    status: post.status || 'draft',
    excerpt: post.excerpt || '',
    coverImage: post.coverImage || '',
    tags: Array.isArray(post.tags) ? post.tags : [],
    readingTime: post.readingTime || 0,
    seoTitle: post.seoTitle || '',
    seoDescription: post.seoDescription || '',
    lastModified: post.lastModified instanceof Timestamp ? 
                  post.lastModified.toDate().toISOString() : 
                  (typeof post.lastModified === 'string' ? post.lastModified : new Date().toISOString()),
    categories: Array.isArray(post.categories) ? post.categories : [],
    metaKeywords: Array.isArray(post.metaKeywords) ? post.metaKeywords : [],
  };
}

export const revalidate = 3600 // Revalidate every hour

export default async function BlogPage() {
  try {
    // Fetch the posts
    const [rawPosts, rawRecentPosts] = await Promise.all([
      getAllPublishedPosts(),
      getRecentPosts(5)
    ]);

    // Serialize the posts to ensure they're plain objects
    const posts = rawPosts.map(serializePost);
    const recentPosts = rawRecentPosts.map(serializePost);

    return (
      <div className="blog-page">
        <main>
          <Blog
            posts={posts}
            recentPosts={recentPosts}
          />
        </main>
      </div>
    );
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold">Unable to load blog posts</h2>
        <p>Please try again later</p>
      </div>
    );
  }
}
