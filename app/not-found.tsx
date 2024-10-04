import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-2xl text-gray-600 mb-8">Oops! Page not found</p>
        <p className="text-gray-500 mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <Link href="/" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
          Go Home
        </Link>
      </div>
    </div>
  )
}