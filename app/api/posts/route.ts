import { NextResponse } from 'next/server';
import { adminAuth, adminDb } from '@/lib/config/firebase-admin';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  try {
    const sessionCookie = cookies().get('__session');

    if (!sessionCookie) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const decodedClaims = await adminAuth.verifySessionCookie(sessionCookie.value);
    
    if (!decodedClaims.admin) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    const data = await request.json();
    
    // Calculate reading time (rough estimate: 200 words per minute)
    const wordCount = data.content.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200);

    // Add the post to Firestore with enhanced fields
    const docRef = await adminDb.collection('posts').add({
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
      lastModified: new Date(),
      tags: data.tags || [],
      readingTime: readingTime,
      seoTitle: data.seoTitle || data.title,
      seoDescription: data.seoDescription || data.excerpt,
      categories: data.categories || [],
      metaKeywords: data.metaKeywords || [],
      status: data.status || 'draft'
    });

    return NextResponse.json({ 
      status: 'success', 
      id: docRef.id 
    });
  } catch (error) {
    console.error('Error creating post:', error);
    return NextResponse.json({ 
      error: 'Failed to create post' 
    }, { status: 500 });
  }
}