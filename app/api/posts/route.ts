import { NextResponse } from 'next/server';
import { createPost } from '@/lib/dao/blog-post-dao';
import { BlogPost } from '@/types/blog-post';

export async function POST(request: Request) {
  try {
    const newPost: Omit<BlogPost, 'id'> = await request.json();
    const postId = await createPost(newPost);
    return NextResponse.json({ id: postId }, { status: 201 });
  } catch (error) {
    console.error('Error creating post:', error);
    return NextResponse.json({ error: 'Error creating post' }, { status: 500 });
  }
}