import { adminAuth } from '@/lib/config/firebase-admin';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  try {
    const { idToken } = await request.json();
    
    if (!idToken) {
      console.error('Admin auth error: No token provided');
      return NextResponse.json({ error: 'No token provided' }, { status: 400 });
    }

    console.log('Attempting to verify ID token...');
    // Verify the token and check admin claim
    const decodedToken = await adminAuth.verifyIdToken(idToken);
    console.log('Decoded token:', { uid: decodedToken.uid, claims: decodedToken });
    
    if (!decodedToken.admin) {
      console.error('Admin auth error: User does not have admin claim', {
        uid: decodedToken.uid,
        claims: decodedToken
      });
      return NextResponse.json({ error: 'Unauthorized - Not an admin' }, { status: 403 });
    }

    // Create session cookie
    const expiresIn = 60 * 60 * 24 * 5 * 1000; // 5 days
    console.log('Creating session cookie...');
    const sessionCookie = await adminAuth.createSessionCookie(idToken, { expiresIn });

    // Set cookie
    cookies().set('__session', sessionCookie, {
      maxAge: expiresIn,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      path: '/',
    });

    console.log('Session cookie created successfully');
    return NextResponse.json({ status: 'success' });
  } catch (error: any) {
    console.error('Error in admin auth:', {
      error: error.message,
      code: error.code,
      stack: error.stack
    });
    return NextResponse.json({ 
      error: 'Unauthorized',
      details: error.message 
    }, { status: 401 });
  }
}
