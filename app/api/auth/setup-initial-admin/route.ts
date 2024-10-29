import { adminAuth } from '@/lib/config/firebase-admin';
import { NextResponse } from 'next/server';

// IMPORTANT: Remove or secure this endpoint after initial setup
export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    
    // Get user by email
    const user = await adminAuth.getUserByEmail(email);
    
    // Set admin claim
    await adminAuth.setCustomUserClaims(user.uid, { admin: true });
    
    return NextResponse.json({ 
      status: 'success', 
      message: 'Admin privileges granted successfully' 
    });
  } catch (error) {
    console.error('Error setting up admin:', error);
    return NextResponse.json({ 
      status: 'error', 
      message: 'Failed to set up admin user' 
    }, { status: 500 });
  }
} 