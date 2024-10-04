import ErrorBoundary from '@/components/ErrorBoundary';
import Image from 'next/image';
import Link from 'next/link';

const LandingPage = () => {
  return (
    <ErrorBoundary fallback={<div>There was an error loading the landing page. Please refresh the page.</div>}>
      <div className="flex flex-col bg-background-light">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-secondary to-secondary-dark text-white py-20 md:py-32">
          {/* ... (keep the existing content) */}
        </section>

        {/* Features Overview */}
        <section className="py-20 bg-background-light">
          {/* ... (keep the existing content) */}
        </section>

        {/* Testimonials */}
        <section className="bg-secondary-light py-16">
          {/* ... (keep the existing content) */}
        </section>

        {/* How It Works */}
        <section className="py-16 bg-background-light">
          {/* ... (keep the existing content) */}
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-secondary to-secondary-dark text-white py-16">
          {/* ... (keep the existing content) */}
        </section>
      </div>
    </ErrorBoundary>
  )
}

export default LandingPage;