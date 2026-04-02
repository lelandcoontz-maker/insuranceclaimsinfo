import type { Metadata } from 'next'
import Link from 'next/link'
import { PRODUCTS } from '@/lib/products'
import { GuideCard } from './GuideCard'

export const metadata: Metadata = {
  title: 'Paid Guides & Toolkits — InsuranceClaimsInfo',
  description:
    'In-depth PDF guides for California insurance claims: appraisal handbooks, Xactimate dispute guides, wildfire recovery, bad faith documentation kits, and contents claim workbooks.',
}

export default function GuidesPage() {
  return (
    <>
      {/* Header */}
      <div className="bg-[#1F3964] text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block bg-[#C9A84C] text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
            PROFESSIONAL RESOURCES
          </span>
          <h1 className="text-3xl font-bold mb-3">Insurance Claim Guides &amp; Toolkits</h1>
          <p className="text-blue-200 max-w-2xl leading-relaxed">
            In-depth, actionable PDF guides written by a licensed California Public Adjuster.
            Templates, checklists, sample letters, and step-by-step strategies you can use
            immediately on your claim.
          </p>
        </div>
      </div>

      {/* Free vs Paid distinction */}
      <div className="max-w-6xl mx-auto px-4 pt-10 pb-2">
        <div className="bg-[#EFF4FB] border border-blue-100 rounded-xl p-6 flex flex-col sm:flex-row gap-6">
          <div className="flex-1">
            <h3 className="font-bold text-[#1F3964] mb-1">Free Resources</h3>
            <p className="text-gray-600 text-sm">
              Our{' '}
              <Link href="/resources" className="text-[#2E74B5] underline">resource articles</Link>,{' '}
              <Link href="/faq" className="text-[#2E74B5] underline">FAQ</Link>, and{' '}
              <Link href="/inventory" className="text-[#2E74B5] underline">inventory tool</Link>{' '}
              are always free. No paywall, no registration.
            </p>
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-[#1F3964] mb-1">Paid Guides</h3>
            <p className="text-gray-600 text-sm">
              These go deeper — full-length PDF handbooks with templates, sample letters,
              checklists, and annotated examples you can apply directly to your claim.
            </p>
          </div>
        </div>
      </div>

      {/* Product grid */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map(product => (
            <GuideCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-3xl mx-auto px-4 pb-10">
        <h2 className="text-2xl font-bold text-[#1F3964] mb-6">Frequently Asked Questions</h2>

        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-gray-900 mb-1">How do I receive my guide?</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              After purchase, you&apos;ll be redirected to a download page where you can
              immediately download your PDF. You&apos;ll also receive a download link via email.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1">Can I get a refund?</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Yes. If a guide doesn&apos;t meet your expectations, contact us within 30 days
              for a full refund. No questions asked.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1">Are these California-specific?</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Most guides focus on California law, regulations, and case law. The Xactimate
              and contents claim guides contain material applicable in all states, though
              California-specific examples are used throughout.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1">
              I&apos;d rather have professional help than a guide. Can you help?
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Absolutely.{' '}
              <Link href="/contact" className="text-[#2E74B5] underline">
                Request a free claim review
              </Link>{' '}
              and we&apos;ll evaluate your situation at no cost.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-[#1F3964] text-white py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">Not Sure Which Guide You Need?</h2>
          <p className="text-blue-200 mb-6">
            Tell us about your claim and we&apos;ll point you to the right resource —
            or handle it for you directly.
          </p>
          <Link href="/contact" className="btn-gold">
            Request a Free Claim Review →
          </Link>
        </div>
      </div>
    </>
  )
}
