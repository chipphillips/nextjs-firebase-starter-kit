import { NextResponse } from 'next/server';
import { getBlogPosts } from '@/lib/dao/blog-post-dao';

export async function GET() {
  try {
    const blogPosts = await getBlogPosts();
    return NextResponse.json(blogPosts);
  } catch (error) {
    console.error('Error in blog API route:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}