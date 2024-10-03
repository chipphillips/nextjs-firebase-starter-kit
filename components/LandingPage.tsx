import Image from 'next/image'
import Link from 'next/link'

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-secondary-light-gray">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-blue to-blue-700 text-white py-24 md:py-32">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-display leading-tight">
            Helping Builders Save Time with the <span className="text-secondary-yellow">Power of AI Magic</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            From Blueprint to Build, Enhance Every Step with AI-Driven Solutions Designed for Construction Success
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row">
            <Link href="/signup" className="inline-block bg-white text-primary-blue px-6 py-3 rounded-lg font-semibold hover:bg-blue-very-light transition duration-300 text-center">
              Get Started
            </Link>
            <Link href="/ai-tools/beta-signup" className="inline-block bg-transparent border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-blue transition duration-300 text-center">
              Free AI Readiness Report
            </Link>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-display text-dark">Our AI-Powered Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {['Project Planning', 'Resource Optimization', 'Risk Assessment'].map((feature, index) => (
              <div key={index} className="bg-white p-4 shadow rounded">
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold">{feature}</h3>
                <p className="mt-2 text-sm md:text-base">Leverage AI to streamline your construction processes and boost efficiency.</p>
                <Link href="/ai-tools" className="text-primary-blue hover:underline font-medium">Learn more →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-secondary-light-gray py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-display text-dark">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: 'John Doe', role: 'Project Manager', quote: 'Constructiv AI has revolutionized how we approach project planning.' },
              { name: 'Jane Smith', role: 'Site Supervisor', quote: 'The AI tools have significantly reduced our on-site risks and improved safety.' }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-dark">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-display text-dark">How It Works</h2>
          <div className="flex flex-col md:flex-row justify-between items-center">
            {['Sign Up', 'Take AI Readiness Survey', 'Get Personalized Solutions', 'Implement & Save Time'].map((step, index) => (
              <div key={index} className="flex flex-col items-center mb-8 md:mb-0">
                <div className="bg-primary-blue text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                  {index + 1}
                </div>
                <p className="text-center font-medium text-dark">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary-blue to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">Ready to Transform Your Construction Process?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">Join our beta program and experience the future of AI in construction.</p>
          <Link href="/ai-tools/beta-signup" className="inline-block bg-white text-primary-blue px-8 py-3 rounded-lg font-semibold hover:bg-blue-very-light transition duration-300">
            Join Beta Waitlist
          </Link>
        </div>
      </section>
    </div>
  )
}

export default LandingPage