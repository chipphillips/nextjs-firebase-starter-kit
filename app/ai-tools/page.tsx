import Link from "next/link";

export default function AITools() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">AI Tools for Construction</h1>
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Available Tools</h2>
        {/* Add available tool components */}
      </section>
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
        {/* Add upcoming tool teasers */}
      </section>
      <Link href="/ai-tools/beta-signup" className="bg-primary text-white rounded-md px-6 py-3 hover:bg-opacity-90">
        Join Beta Waitlist
      </Link>
    </main>
  )
}