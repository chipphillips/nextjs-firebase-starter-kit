import { NextResponse } from 'next/server';
import { adminDb } from '@/lib/config/firebase-admin';

export async function GET() {
  try {
    // adminDb is already initialized in the firebase-admin config
    const snapshot = await adminDb.collection('posts').get();
    const posts = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    
    return NextResponse.json({ posts });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}
