import { getPostBySlug } from '@/lib/dao/blog-post-dao';
import { BlogPost } from '@/types/blog-post';
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import BlogPostForm from '@/components/BlogPostForm';
import { Timestamp } from 'firebase-admin/firestore';

// Helper function to serialize the blog post data
function serializePost(post: any): BlogPost | null {
  if (!post) return null;
  
  return {
    id: post.id || '',
    title: post.title || '',
    content: post.content || '',
    slug: post.slug || '',
    date: post.date instanceof Timestamp ? 
          post.date.toDate().toISOString() : 
          (typeof post.date === 'string' ? post.date : new Date().toISOString()),
    author: post.author || '',
    status: post.status || 'draft',
    excerpt: post.excerpt || '',
    coverImage: post.coverImage || '',
    tags: Array.isArray(post.tags) ? post.tags : [],
    readingTime: post.readingTime || 0,
    seoTitle: post.seoTitle || post.title || '',
    seoDescription: post.seoDescription || post.excerpt || '',
    lastModified: post.lastModified instanceof Timestamp ? 
                  post.lastModified.toDate().toISOString() : 
                  (typeof post.lastModified === 'string' ? post.lastModified : new Date().toISOString()),
    categories: Array.isArray(post.categories) ? post.categories : [],
    metaKeywords: Array.isArray(post.metaKeywords) ? post.metaKeywords : [],
  };
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const rawPost = await getPostBySlug(params.slug);
  
  if (!rawPost) {
    return {}
  }
  
  const post = serializePost(rawPost);
  
  if (!post) {
    return {}
  }
  
  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
    keywords: post.metaKeywords.join(', '),
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt,
      images: post.coverImage ? [{ url: post.coverImage }] : [],
    },
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const rawPost = await getPostBySlug(params.slug);

  if (!rawPost) {
    notFound();
  }

  // Serialize the post data before passing it to the client component
  const serializedPost = serializePost(rawPost);

  if (!serializedPost) {
    notFound();
  }

  return <BlogPostForm post={serializedPost} />;
}
