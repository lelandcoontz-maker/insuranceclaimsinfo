import type { Metadata } from 'next'
import Link from 'next/link'
import { Suspense } from 'react'
import { DownloadSection } from './DownloadSection'

export const metadata: Metadata = {
  title: 'Purchase Complete — InsuranceClaimsInfo',
  description: 'Thank you for your purchase. Download your guide below.',
  alternates: { canonical: '/guides/success' },
}

export default function SuccessPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20 text-center">
      <div className="text-5xl mb-4">&#10003;</div>
      <h1 className="text-3xl font-bold text-[#1F3964] mb-3">Thank You for Your Purchase!</h1>
      <p className="text-gray-600 leading-relaxed mb-8">
        Your payment was successful. Download your guide below.
      </p>

      <Suspense fallback={<div className="bg-white border border-gray-200 rounded-xl p-8 mb-8"><p className="text-gray-500">Loading your download...</p></div>}>
        <DownloadSection />
      </Suspense>

      <div className="bg-[#EFF4FB] border border-blue-100 rounded-xl p-6 mb-8 text-left">
        <h3 className="font-bold text-[#1F3964] mb-2">What&apos;s Next?</h3>
        <ul className="text-sm text-gray-600 space-y-2">
          <li>&#8226; Save the PDF to your computer — you can access it anytime</li>
          <li>&#8226; Print it or read it on any device</li>
          <li>&#8226; If you need help with your specific claim,{' '}
            <Link href="/contact" className="text-[#2E74B5] underline">request a free review</Link>
          </li>
        </ul>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link href="/guides" className="btn-primary">
          Browse More Guides
        </Link>
        <Link href="/resources" className="border border-[#1F3964] text-[#1F3964] font-semibold px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors text-center">
          Free Resources
        </Link>
      </div>
    </div>
  )
}
