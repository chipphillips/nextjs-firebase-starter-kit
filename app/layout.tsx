import type { Metadata } from 'next';
import "./globals.css";
import ClientLayout from './ClientLayout';
import { Footer } from '@/components/Footer';

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
      <ClientLayout>
        {children}
        <Footer />
      </ClientLayout>
    </html>
  );
}
