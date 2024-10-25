import { adminDb, initializeFirebaseAdmin } from '@/lib/config/firebase-admin';
import AdminPageClient from '@/components/AdminPageClient';
import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';
import { BlogPost } from '@/types/blog-post';

export default async function AdminPage() {
  // Check authentication
  const session = await getServerSession();
  if (!session?.user) {
    redirect('/admin/login');
  }

  // Initialize Firebase Admin
  initializeFirebaseAdmin();

  try {
    const postsSnapshot = await adminDb.collection('posts').get();
    const posts = postsSnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        title: data.title || '',
        slug: data.slug || '',
        content: data.content || '',
        author: data.author || '',
        coverImage: data.coverImage || '',
        date: data.date ? new Date(data.date) : new Date(),
        excerpt: data.excerpt || '',
        category: data.category || '',
        createdAt: data.createdAt ? new Date(data.createdAt) : new Date(),
        status: data.status || 'draft',
        tags: data.tags || []
      } as BlogPost;
    });

    return <AdminPageClient initialPosts={posts} />;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return <div>Error loading admin dashboard</div>;
  }
}  // Add closing brace for AdminPage function
