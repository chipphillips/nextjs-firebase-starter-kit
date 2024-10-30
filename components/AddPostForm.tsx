'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { ImageUpload } from '@/components/ImageUpload';
import { PreviewModal } from './PreviewModal';

// Dynamic import of rich text editor
const RichTextEditor = dynamic(() => import('@/components/RichTextEditor'), { ssr: false });

export default function AddPostForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    excerpt: '',
    slug: '',
    author: '',
    status: 'draft',
    coverImage: '',
  });
  const [images, setImages] = useState<string[]>([]);
  const [isDraft, setIsDraft] = useState(true);
  const [showPreview, setShowPreview] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          date: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create post');
      }

      router.push('/admin');
      router.refresh();
    } catch (error) {
      console.error('Error creating post:', error);
      alert('Failed to create post. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleImageUpload = (url: string) => {
    setFormData(prev => ({
      ...prev,
      coverImage: url
    }));
  };

  const handlePreview = () => {
    setShowPreview(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
        <div className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-primary-900">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="mt-1 block w-full rounded-md border-primary-200 shadow-sm focus:border-primary-500 focus:ring-primary-500 text-primary-900 bg-white"
              required
            />
          </div>

          <div>
            <label htmlFor="slug" className="block text-sm font-medium text-primary-900">
              Slug
            </label>
            <input
              type="text"
              id="slug"
              value={formData.slug}
              onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
              className="mt-1 block w-full rounded-md border-primary-200 shadow-sm focus:border-primary-500 focus:ring-primary-500 text-primary-900 bg-white"
              required
            />
          </div>

          <div>
            <label htmlFor="excerpt" className="block text-sm font-medium text-primary-900">
              Excerpt
            </label>
            <textarea
              id="excerpt"
              value={formData.excerpt}
              onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
              className="mt-1 block w-full rounded-md border-primary-200 shadow-sm focus:border-primary-500 focus:ring-primary-500 text-primary-900 bg-white"
              rows={3}
            />
          </div>

          <div>
            <label htmlFor="content" className="block text-sm font-medium text-primary-900">
              Content
            </label>
            <textarea
              id="content"
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              className="mt-1 block w-full rounded-md border-primary-200 shadow-sm focus:border-primary-500 focus:ring-primary-500 text-primary-900 bg-white"
              rows={10}
              required
            />
          </div>

          <div>
            <label htmlFor="author" className="block text-sm font-medium text-primary-900">
              Author
            </label>
            <input
              type="text"
              id="author"
              value={formData.author}
              onChange={(e) => setFormData({ ...formData, author: e.target.value })}
              className="mt-1 block w-full rounded-md border-primary-200 shadow-sm focus:border-primary-500 focus:ring-primary-500 text-primary-900 bg-white"
              required
            />
          </div>

          <div>
            <label htmlFor="status" className="block text-sm font-medium text-primary-900">
              Status
            </label>
            <select
              id="status"
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              className="mt-1 block w-full rounded-md border-primary-200 shadow-sm focus:border-primary-500 focus:ring-primary-500 text-primary-900 bg-white"
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-primary-900">
              Cover Image
            </label>
            <ImageUpload onUploadComplete={handleImageUpload} />
            {formData.coverImage && (
              <div className="mt-2">
                <img
                  src={formData.coverImage}
                  alt="Cover preview"
                  className="max-w-xs rounded-lg shadow-sm"
                />
              </div>
            )}
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={handlePreview}
              className="inline-flex justify-center rounded-md border border-primary-200 bg-white py-2 px-4 text-sm font-medium text-primary-700 shadow-sm hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              Preview
            </button>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={`inline-flex justify-center rounded-md border border-transparent bg-primary-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Creating...' : 'Create Post'}
            </button>
          </div>
        </div>
      </form>

      <PreviewModal
        isOpen={showPreview}
        onClose={() => setShowPreview(false)}
        post={formData}
      />
    </>
  );
} 