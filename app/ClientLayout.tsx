"use client";

import { Inter } from 'next/font/google';
import AuthWrapper from './AuthWrapper';
import { useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { initializeApp, FirebaseApp, getApps } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

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
  useEffect(() => {
    if (!getApps().length) {
      initializeFirebaseApp();
    }
  }, []);

  return (
    <body className={inter.className}>
      <AuthWrapper>
        {children}
      </AuthWrapper>
    </body>
  );
}

function initializeFirebaseApp(): FirebaseApp {
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Firebase Analytics if in browser environment
  if (typeof window !== 'undefined') {
    getAnalytics(app);
  }

  return app;
}

// Export the initializeFirebaseApp function
export { initializeFirebaseApp };
