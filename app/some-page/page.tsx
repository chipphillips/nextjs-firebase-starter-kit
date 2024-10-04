import { Metadata } from 'next';
import { BlogPost } from '@/components/BlogPost';

export const metadata: Metadata = {
  title: 'Some Page | Constructiv AI',
  description: 'Explore AI-powered solutions for the construction industry',
};

export default async function SomePage() {
  return (
    <main>
      <h1>Welcome to Some Page</h1>
      {/* Assuming we have a specific blog post ID */}
      <BlogPost id="1" />
    </main>
  );
}