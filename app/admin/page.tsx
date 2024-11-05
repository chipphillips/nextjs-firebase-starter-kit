import { Metadata } from 'next';
import { cookies } from 'next/headers';
import { adminAuth, adminDb } from '@/lib/config/firebase-admin';
import { redirect } from 'next/navigation';
import AdminPageClient from '@/components/AdminPageClient';
import { BlogPost } from '@/types/blog-post';

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: 'Admin dashboard for Constructiv AI',
};

// Helper function to calculate reading time
function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

export default async function AdminPage() {
  const sessionCookie = cookies().get('__session');

  if (!sessionCookie) {
    redirect('/admin/login');
  }

  try {
    const decodedClaims = await adminAuth.verifySessionCookie(sessionCookie.value, true);

    if (!decodedClaims.admin) {
      redirect('/admin/login');
    }

    // Fetch posts from Firestore and serialize the data
    const postsSnapshot = await adminDb.collection('posts').get();
    const posts = postsSnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        title: data.title || '',
        content: data.content || '',
        slug: data.slug || '',
        date: data.date?.toDate?.() || new Date(),
        author: data.author || '',
        status: data.status || 'draft',
        excerpt: data.excerpt || '',
        coverImage: data.coverImage || '',
        categories: Array.isArray(data.categories) ? data.categories : [],
        tags: Array.isArray(data.tags) ? data.tags : [],
        readingTime: data.readingTime || calculateReadingTime(data.content || ''),
        seoTitle: data.seoTitle || '',
        seoDescription: data.seoDescription || '',
        lastModified: data.lastModified?.toDate?.() || new Date(),
        metaKeywords: Array.isArray(data.metaKeywords) ? data.metaKeywords : [],
      } as BlogPost;
    });

    // Serialize dates to strings
    const serializedPosts: BlogPost[] = posts.map(post => ({
      ...post,
      date: post.date.toString(),
      lastModified: post.lastModified?.toString() || post.date.toString(),
    }));

    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
        <AdminPageClient initialPosts={serializedPosts} />
      </div>
    );
  } catch (error) {
    console.error('Error verifying admin session:', error);
    redirect('/admin/login');
  }
}
