import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { rateLimit } from './lib/utils/rate-limit';

const limiter = rateLimit({
  interval: 60 * 1000, // 1 minute
  uniqueTokenPerInterval: 500,
});

export async function middleware(request: NextRequest) {
  // Skip middleware for non-admin routes
  if (!request.nextUrl.pathname.startsWith('/admin')) {
    return NextResponse.next();
  }

  // Allow access to login page
  if (request.nextUrl.pathname === '/admin/login') {
    try {
      await limiter.check(request, 10); // 10 requests per minute
      return NextResponse.next();
    } catch {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
    }
  }

  // Check for session cookie on protected routes
  const session = request.cookies.get('__session');
  if (!session?.value) {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/admin/:path*',
  ],
};