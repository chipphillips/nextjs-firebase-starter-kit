"use client";

import { Inter } from 'next/font/google';
import AuthWrapper from './AuthWrapper';

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter",
});

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body className={inter.className}>
      <AuthWrapper>
        {children}
      </AuthWrapper>
    </body>
  );
}