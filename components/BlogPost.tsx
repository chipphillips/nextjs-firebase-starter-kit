import Image from 'next/image';
import { Suspense } from 'react';
import LoadingSpinner from './LoadingSpinner';
import { fetchWithRetryJSON } from '@/utils/apiUtils';

// Define the BlogPost type
type BlogPost = {
  id: string;
  title: string;
  content: string;
  publishDate: string;
  author: string;
  coverImage: string;
  authorAvatar: string;
};

async function getBlogPost(id: string): Promise<BlogPost> {
  try {
    return await fetchWithRetryJSON<BlogPost>(`https://api.example.com/posts/${id}`, {
      retries: 3,
      retryDelay: 1000,
    });
  } catch (error) {
    console.error('Failed to fetch blog post after retries:', error);
    throw error; // Re-throw the error to be handled by the error boundary
  }
}

function BlogPostContent({ post }: { post: BlogPost }) {
  return (
    <article className="max-w-3xl mx-auto py-8 flex flex-col min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="aspect-w-16 aspect-h-9 mb-6 overflow-hidden rounded-lg">
        <Image
          src={post.coverImage}
          alt={post.title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex-grow">
        <h1 className="text-3xl font-bold mb-4 text-text-primary">{post.title}</h1>
        <div className="flex items-center mb-4 space-x-4">
          <Image
            src={post.authorAvatar}
            alt={post.author}
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-text-secondary">{post.author}</span>
          <span className="text-muted-foreground">{new Date(post.publishDate).toLocaleDateString()}</span>
        </div>
        <div className="prose max-w-none text-text-primary">
          {/* Use a rich text renderer here for the post content */}
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </div>
    </article>
  );
}

export async function BlogPost({ id }: { id: string }) {
  const post = await getBlogPost(id);

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <BlogPostContent post={post} />
    </Suspense>
  );
}