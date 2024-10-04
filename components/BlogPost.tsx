import { getPostBySlug } from '@/lib/dao/blog-post-dao';

export default async function BlogPost({ slug }: { slug: string }) {
  const post = await getPostBySlug(slug)

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  )
}