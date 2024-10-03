import Image from 'next/image'
import Link from 'next/link'

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-secondary-light-gray">
      {/* Hero Section */}
      <section className="bg-primary-blue text-white py-32 min-h-[600px] flex items-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-display">
            Helping Builders Save Time with the Power of AI Magic
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            From Blueprint to Build, Enhance Every Step with AI-Driven Solutions Designed for Construction Success
          </p>
          <div className="space-x-4">
            <Link href="/signup" className="bg-white text-primary-blue px-6 py-3 rounded-lg font-semibold hover:bg-blue-very-light transition duration-300">
              Get Started
            </Link>
            <Link href="/ai-tools/beta-signup" className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-blue transition duration-300">
              Free AI Readiness Report
            </Link>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center font-display">Our AI-Powered Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Project Planning', 'Resource Optimization', 'Risk Assessment'].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 font-display">{feature}</h3>
                <p className="text-gray-600 mb-4">Leverage AI to streamline your construction processes and boost efficiency.</p>
                <Link href="/ai-tools" className="text-primary-blue hover:underline">Learn more</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: 'John Doe', role: 'Project Manager', quote: 'Constructiv AI has revolutionized how we approach project planning.' },
              { name: 'Jane Smith', role: 'Site Supervisor', quote: 'The AI tools have significantly reduced our on-site risks and improved safety.' }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
          <div className="flex flex-col md:flex-row justify-between items-center">
            {['Sign Up', 'Take AI Readiness Survey', 'Get Personalized Solutions', 'Implement & Save Time'].map((step, index) => (
              <div key={index} className="flex flex-col items-center mb-8 md:mb-0">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  {index + 1}
                </div>
                <p className="text-center">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 font-display">Ready to Transform Your Construction Process?</h2>
          <p className="text-xl mb-8">Join our beta program and experience the future of AI in construction.</p>
          <Link href="/ai-tools/beta-signup" className="bg-white text-primary-blue px-8 py-3 rounded-lg font-semibold hover:bg-blue-very-light transition duration-300">
            Join Beta Waitlist
          </Link>
        </div>
      </section>
    </div>
  )
}

export default LandingPage