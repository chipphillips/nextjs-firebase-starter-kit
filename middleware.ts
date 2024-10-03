import { NextRequest, NextResponse } from 'next/server';
import { getAdminAuth } from '@/lib/config/firebase-admin';

// Allow access to the admin login page
export async function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === '/admin/login') {
    return NextResponse.next();
  }

  // Only apply this middleware to other /admin routes
  if (req.nextUrl.pathname.startsWith('/admin')) {
    const token = req.cookies.get('admin_token')?.value;

    if (!token) {
      return NextResponse.redirect(new URL('/admin/login', req.url));
    }

    try {
      const adminAuth = getAdminAuth();
      const decodedToken = await adminAuth.verifyIdToken(token);
      if (!decodedToken.admin) {
        throw new Error('User is not an admin');
      }
      return NextResponse.next();
    } catch (error) {
      console.error('Admin authentication error:', error);
      return NextResponse.redirect(new URL('/admin/login', req.url));
    }
  }

  // For non-admin routes, just proceed to the next middleware or to the final handler
  return NextResponse.next();
}

// Optional: Configure matcher for better performance
export const config = {
  matcher: ['/admin/:path*'],
};