import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import "./globals.css";
import { AuthProvider } from '@/lib/context/FirebaseAuthContext';

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Constructiv AI",
  description: "AI-powered tools for the construction industry",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
