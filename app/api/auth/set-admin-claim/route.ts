import { adminAuth } from '@/lib/config/firebase-admin';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { uid } = await request.json();
    
    // Set admin custom claim
    await adminAuth.setCustomUserClaims(uid, { admin: true });
    
    return NextResponse.json({ status: 'success' });
  } catch (error) {
    console.error('Error setting admin claim:', error);
    return NextResponse.json({ error: 'Failed to set admin claim' }, { status: 500 });
  }
} 