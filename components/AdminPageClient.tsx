'use client';

import { useState } from 'react';
import Link from 'next/link';
import { deleteDoc, doc } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';

interface Post {
  id: string;
  title: string;
  slug: string;
  date: string;
}

const AdminPageClient = ({ initialPosts }: { initialPosts: Post[] }) => {
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      const db = getFirestore();
      await deleteDoc(doc(db, 'posts', id));
      setPosts(posts.filter(post => post.id !== id));
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Blog Posts</h1>
        <Link href="/admin/add-post" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
          Add New Post
        </Link>
      </div>
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {posts.map((post) => (
            <li key={post.id}>
              {/* Post item content will go here */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminPageClient;