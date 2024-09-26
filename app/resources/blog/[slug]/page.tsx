export default function BlogPost({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1>Blog Post: {params.slug}</h1>
      <p>This is a placeholder for the blog post content.</p>
    </div>
  )
}