import { initializeFirebaseAdmin } from '@/lib/firebase-admin';
import { getFirestore } from 'firebase-admin/firestore';
import AdminPageClient from '@/components/AdminPageClient';

export default async function AdminPage() {
  initializeFirebaseAdmin();
  const db = getFirestore();
  const postsSnapshot = await db.collection('posts').get();
  const posts = postsSnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));

  return <AdminPageClient initialPosts={posts.map(post => ({
    id: post.id,
    title: '',
    slug: '',
    date: new Date().toISOString(),
  }))} />;
}