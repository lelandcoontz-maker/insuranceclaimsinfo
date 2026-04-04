import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Not Found',
}

export default function NotFound() {
  return (
    <>
      <section className="bg-[#1F3964] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Page Not Found</h1>
          <p className="text-lg text-gray-300">
            The page you are looking for does not exist or has been moved.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700 mb-10">
            We could not find what you were looking for. Here are some helpful links to get you back
            on track:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto">
            <Link
              href="/"
              className="block rounded-lg border border-gray-200 p-6 hover:border-[#1F3964] hover:shadow-md transition-all"
            >
              <h2 className="text-xl font-semibold text-[#1F3964] mb-2">Home</h2>
              <p className="text-gray-600 text-sm">
                Return to the homepage
              </p>
            </Link>

            <Link
              href="/resources"
              className="block rounded-lg border border-gray-200 p-6 hover:border-[#1F3964] hover:shadow-md transition-all"
            >
              <h2 className="text-xl font-semibold text-[#1F3964] mb-2">Resources</h2>
              <p className="text-gray-600 text-sm">
                Browse claim guides and articles
              </p>
            </Link>

            <Link
              href="/inventory"
              className="block rounded-lg border border-gray-200 p-6 hover:border-[#1F3964] hover:shadow-md transition-all"
            >
              <h2 className="text-xl font-semibold text-[#1F3964] mb-2">Inventory Tool</h2>
              <p className="text-gray-600 text-sm">
                Build your personal property inventory
              </p>
            </Link>

            <Link
              href="/contact"
              className="block rounded-lg border border-gray-200 p-6 hover:border-[#1F3964] hover:shadow-md transition-all"
            >
              <h2 className="text-xl font-semibold text-[#1F3964] mb-2">Contact</h2>
              <p className="text-gray-600 text-sm">
                Get in touch for claim help
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
