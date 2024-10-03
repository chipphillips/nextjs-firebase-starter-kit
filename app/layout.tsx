import type { Metadata } from 'next';
import "./globals.css";
import ClientLayout from './ClientLayout';
import { Footer } from '@/components/Footer';
import '@/app/globals.css';
import { Inter, Oswald } from 'next/font/google';
import { Header } from '@/components/Header';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const oswald = Oswald({ subsets: ['latin'], variable: '--font-oswald' });

export const metadata: Metadata = {
  title: {
    default: "Constructiv AI",
    template: "%s | Constructiv AI"
  },
  description: "AI-powered tools for the construction industry",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <body className="flex flex-col min-h-screen bg-background text-foreground font-sans">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
