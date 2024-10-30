'use client';

interface PreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  post: {
    title: string;
    content: string;
    excerpt: string;
    author: string;
    coverImage?: string;
  };
}

export function PreviewModal({ isOpen, onClose, post }: PreviewModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Preview Post</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              Close
            </button>
          </div>
          
          {post.coverImage && (
            <img
              src={post.coverImage}
              alt="Cover"
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
          )}
          
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          
          <div className="text-gray-600 mb-4">
            By {post.author}
          </div>
          
          <div className="prose max-w-none mb-6">
            {post.excerpt && (
              <div className="text-lg text-gray-600 italic mb-6">
                {post.excerpt}
              </div>
            )}
            
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </div>
      </div>
    </div>
  );
} 