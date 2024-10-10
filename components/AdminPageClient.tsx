'use client';

// Import necessary dependencies for React and Firebase functionality
import { useState } from 'react';
import Link from 'next/link';
import { deleteDoc, doc } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';

// Define the structure of a blog post
interface Post {
  id: string;
  title: string;
  slug: string;
  date: string;
}

// Main component for the admin page to manage blog posts
const AdminPageClient = ({ initialPosts }: { initialPosts: Post[] }) => {
  // Use state to manage the list of posts, allowing for real-time updates
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  // Function to handle the deletion of a post
  const handleDelete = async (id: string) => {
    // Confirm with the user before deleting to prevent accidental deletions
    if (window.confirm('Are you sure you want to delete this post?')) {
      const db = getFirestore();
      // Remove the post from Firebase
      await deleteDoc(doc(db, 'posts', id));
      // Update the local state to reflect the deletion
      setPosts(posts.filter(post => post.id !== id));
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      {/* Header section with title and 'Add New Post' button */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Blog Posts</h1>
        <Link href="/admin/add-post" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
          Add New Post
        </Link>
      </div>
      {/* List of blog posts */}
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