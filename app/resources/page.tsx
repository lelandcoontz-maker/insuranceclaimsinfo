import type { Metadata } from 'next'
import Link from 'next/link'
import { CATEGORIES } from '@/lib/content/categories'
import { ResourcesClient } from '@/components/resources/ResourcesClient'
import { SearchBar } from '@/components/search/SearchBar'

export const metadata: Metadata = {
  title: 'California Insurance Claim Resources',
  description:
    'Free guides on California insurance law, policy interpretation, claim negotiation, bad faith, appraisal, Xactimate estimates, mold claims, and more.',
}

export default function ResourcesPage() {
  return (
    <>
      {/* Header */}
      <div className="bg-[#1F3964] text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-3">
            California Insurance Claim Resources
          </h1>
          <p className="text-blue-200 max-w-2xl leading-relaxed mb-6">
            Plain-English guides written for California policyholders. No jargon,
            no paywalls. Everything you need to understand your policy, navigate
            the claims process, and fight for what you&apos;re owed.
          </p>
          <SearchBar />
          <p className="text-blue-300 text-xs mt-2">
            Searching across 230+ articles. Results appear as you type.
          </p>
        </div>
      </div>

      {/* Quick links */}
      <div className="max-w-6xl mx-auto px-4 pt-10 pb-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            href="/regulations"
            className="bg-[#1F3964] text-white rounded-xl p-5 hover:bg-[#162847] transition-colors"
          >
            <span className="text-2xl mb-2 block">📜</span>
            <h3 className="font-bold mb-1">CA Rules & Regulations</h3>
            <p className="text-blue-200 text-sm">
              Insurance Code 790 and Fair Claims Regulations.
            </p>
          </Link>
          <Link
            href="/stories"
            className="bg-red-700 text-white rounded-xl p-5 hover:bg-red-800 transition-colors"
          >
            <span className="text-2xl mb-2 block">📖</span>
            <h3 className="font-bold mb-1">Real Claims Stories</h3>
            <p className="text-red-200 text-sm">
              35 true stories from both sides of the insurance desk.
            </p>
          </Link>
          <Link
            href="/faq"
            className="bg-[#C9A84C] text-white rounded-xl p-5 hover:bg-[#A8872E] transition-colors"
          >
            <span className="text-2xl mb-2 block">❓</span>
            <h3 className="font-bold mb-1">Frequently Asked Questions</h3>
            <p className="text-amber-100 text-sm">
              30+ answers to common insurance claim questions.
            </p>
          </Link>
          <Link
            href="/types-of-claims"
            className="bg-[#2E74B5] text-white rounded-xl p-5 hover:bg-[#1F3964] transition-colors"
          >
            <span className="text-2xl mb-2 block">🔥</span>
            <h3 className="font-bold mb-1">Types of Claims</h3>
            <p className="text-blue-100 text-sm">
              Fire, water, mold, vandalism, flood, smoke — by type.
            </p>
          </Link>
        </div>
      </div>

      {/* Interactive search, filters, sidebar, and article grid */}
      <ResourcesClient categories={CATEGORIES} />

      {/* CTA */}
      <div className="bg-[#1F3964] text-white py-12 px-4 mt-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">
            Need Help With Your Specific Claim?
          </h2>
          <p className="text-blue-200 mb-6">
            Every claim is different. If your insurer is giving you trouble, a
            licensed Public Adjuster can review your file, identify what&apos;s being
            underpaid, and represent you in negotiations.
          </p>
          <Link href="/contact" className="btn-gold">
            Request a Free Claim Review →
          </Link>
        </div>
      </div>
    </>
  )
}
