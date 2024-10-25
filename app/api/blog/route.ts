import { NextResponse } from 'next/server';
import { getAllPublishedPosts } from '@/lib/dao/blog-post-dao';
import { initializeFirebaseAdmin } from '@/lib/config/firebase-admin';

export async function GET() {
  try {
    // Initialize Firebase Admin before any operations
    initializeFirebaseAdmin();
    
    const blogPosts = await getAllPublishedPosts();
    return NextResponse.json(blogPosts);
  } catch (error) {
    console.error('Error in blog API route:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
