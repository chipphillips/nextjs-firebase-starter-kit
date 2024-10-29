import { adminAuth } from '@/lib/config/firebase-admin';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { uid } = await request.json();
    
    if (!uid) {
      console.error('Verify admin error: No UID provided');
      return NextResponse.json({ 
        status: 'error', 
        message: 'No UID provided' 
      }, { status: 400 });
    }

    console.log('Fetching user claims for UID:', uid);
    // Get the user's custom claims
    const user = await adminAuth.getUser(uid);
    console.log('User claims:', user.customClaims);
    
    if (user.customClaims?.admin) {
      console.log('Admin verification successful for UID:', uid);
      return NextResponse.json({ status: 'success' });
    } else {
      console.error('Admin verification failed: No admin claim found for UID:', uid);
      return NextResponse.json(
        { 
          status: 'error', 
          message: 'Unauthorized access - You do not have admin privileges',
          details: 'No admin claim found'
        }, 
        { status: 403 }
      );
    }
  } catch (error: any) {
    console.error('Error verifying admin status:', {
      error: error.message,
      code: error.code,
      stack: error.stack
    });
    return NextResponse.json(
      { 
        status: 'error', 
        message: 'Failed to verify admin status',
        details: error.message
      }, 
      { status: 500 }
    );
  }
}
