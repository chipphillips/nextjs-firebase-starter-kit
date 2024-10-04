import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Implement your middleware logic here without using Firebase Admin
  // For example, you can check for a session cookie or a token in the request headers
  
  // If you need to use Firebase Admin, consider moving that logic to an API route
  // and calling it from the client-side or server-side components

  return NextResponse.next();
}