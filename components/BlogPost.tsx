import React from 'react';
import { BlogPost as BlogPostType } from '../types/blog-post';
import { getPostBySlug } from '../lib/dao/blog-post-dao';

interface BlogPostProps {
  slug: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ slug }) => {
  const [post, setPost] = React.useState<BlogPostType | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchPost = async () => {
      try {
        const fetchedPost = await getPostBySlug(slug);
        if (fetchedPost) {
          setPost(fetchedPost);
        } else {
          setError('Post not found');
        }
      } catch (err) {
        setError('Error fetching post');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!post) return <div>Post not found</div>;

  return (
    <article className="prose lg:prose-xl">
      <h1>{post.title}</h1>
      <div>
        <img src={post.author.avatar} alt={post.author.name} className="w-12 h-12 rounded-full" />
        <p>By {post.author.name}, {post.author.title}</p>
        <p>Published on {post.date.toLocaleDateString()}</p>
      </div>
      {post.coverImage && <img src={post.coverImage} alt={post.title} className="w-full h-auto" />}
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
      <p>Category: {post.category}</p>
    </article>
  );
};

export default BlogPost;