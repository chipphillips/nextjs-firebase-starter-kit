"use client";

import { AuthProvider } from '@/lib/context/FirebaseAuthContext';

export default function AuthWrapper({ children }: { children: React.ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}