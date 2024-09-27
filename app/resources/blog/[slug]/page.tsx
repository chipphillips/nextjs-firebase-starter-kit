import { MDXRemote } from 'next-mdx-remote/rsc'
import { Metadata } from 'next'
import { BlogPost } from '@/components/BlogPost'
import { getPostBySlug, getAllPublishedPosts } from '@/lib/dao/blog-post-dao'
import { notFound } from 'next/navigation'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      url: `https://constructiv.ai/blog/${post.slug}`,
      images: [{ url: post.coverImage, width: 800, height: 600, alt: post.title }],
    },
  }
}

export async function generateStaticParams() {
  const posts = await getAllPublishedPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const estimatedReadTime = Math.ceil(post.content.split(/\s+/).length / 200)

  return (
    <BlogPost
      title={post.title}
      date={post.date.toDate().toISOString()}
      author={post.author}
      coverImage={post.coverImage}
      excerpt={post.excerpt}
      estimatedReadTime={estimatedReadTime}
      content={
        <MDXRemote
          source={post.content}
          components={{
            h1: (props) => <h1 className="text-4xl font-bold mb-4" {...props} />,
            h2: (props) => <h2 className="text-3xl font-semibold mb-3" {...props} />,
            p: (props) => <p className="mb-4" {...props} />,
            // Add more custom components as needed
          }}
        />
      }
    />
  )
}