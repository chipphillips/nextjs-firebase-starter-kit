'use client';

// Import necessary dependencies for React and Firebase functionality
import { useState } from 'react';
import Link from 'next/link';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '@/lib/config/firebase-client';
import { BlogPost } from '@/types/blog-post';

// Define the structure of a blog post
interface AdminPageProps {
  initialPosts: BlogPost[];
}

// Main component for the admin page to manage blog posts
const AdminPageClient = ({ initialPosts }: AdminPageProps) => {
  // Use state to manage the list of posts, allowing for real-time updates
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts);

  // Function to handle the deletion of a post
  const handleDelete = async (id: string) => {
    // Confirm with the user before deleting to prevent accidental deletions
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        // Remove the post from Firebase
        await deleteDoc(doc(db, 'posts', id));
        // Update the local state to reflect the deletion
        setPosts(posts.filter(post => post.id !== id));
      } catch (error) {
        console.error('Error deleting post:', error);
      }
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
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-indigo-600 truncate">
                    {post.title}
                  </p>
                  <div className="ml-2 flex-shrink-0 flex">
                    <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {new Date(post.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="mt-2 sm:flex sm:justify-between">
                  <div className="sm:flex">
                    <p className="flex items-center text-sm text-gray-500">
                      {post.slug}
                    </p>
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                    <Link href={`/admin/edit-post/${post.id}`} className="text-indigo-600 hover:text-indigo-900 mr-4">
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(post.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminPageClient;
