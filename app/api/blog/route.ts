import { NextResponse } from 'next/server';
import { getAllPublishedPosts } from '@/lib/dao/blog-post-dao';

export async function GET() {
  try {
    const posts = await getAllPublishedPosts();
    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json({ error: 'Failed to fetch blog posts' }, { status: 500 });
  }
}