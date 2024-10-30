import { Metadata } from 'next';
import AddPostForm from '@/components/AddPostForm';
import { cookies } from 'next/headers';
import { adminAuth } from '@/lib/config/firebase-admin';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Add New Post',
  description: 'Create a new blog post',
};

export default async function AddPostPage() {
  const sessionCookie = cookies().get('__session');

  if (!sessionCookie) {
    redirect('/admin/login');
  }

  try {
    const decodedClaims = await adminAuth.verifySessionCookie(
      sessionCookie.value,
      true
    );

    if (!decodedClaims.admin) {
      redirect('/admin/login');
    }

    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-6">Add New Post</h1>
        <AddPostForm />
      </div>
    );
  } catch (error) {
    console.error('Error verifying admin session:', error);
    redirect('/admin/login');
  }
}
