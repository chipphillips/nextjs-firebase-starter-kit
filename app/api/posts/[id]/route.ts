import { adminDb } from '@/lib/config/firebase-admin';
import { NextRequest, NextResponse } from 'next/server';

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await adminDb.collection('posts').doc(params.id).delete();
    return NextResponse.json({ status: 'success' });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete post' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const data = await request.json();
    const postRef = adminDb.collection('posts').doc(params.id);
    
    let readingTime = data.readingTime;
    if (data.content) {
      const wordCount = data.content.split(/\s+/).length;
      readingTime = Math.ceil(wordCount / 200);
    }

    await postRef.update({
      ...data,
      updatedAt: new Date(),
      lastModified: new Date(),
      readingTime: readingTime,
      seoTitle: data.seoTitle || data.title,
      seoDescription: data.seoDescription || data.excerpt
    });

    return NextResponse.json({ status: 'success' });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update post' },
      { status: 500 }
    );
  }
} 