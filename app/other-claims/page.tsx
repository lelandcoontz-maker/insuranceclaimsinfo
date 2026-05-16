import type { Metadata } from 'next'
import Link from 'next/link'
import { BarChart3, Monitor, ShieldOff, Package, Car, Stethoscope, HardHat, Building } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Other Types of Insurance Claims',
  description:
    'Beyond property claims: business interruption, cyber theft, cargo, auto damage, personal injury, workers\' compensation, and medical claims. Learn which claims a Public Adjuster handles and which require other professionals.',
  alternates: { canonical: '/other-claims' },
}

const CLAIM_TYPES: { slug: string; Icon: LucideIcon; title: string; desc: string; badge: string; badgeColor: string; cardColor: string }[] = [
  {
    slug: 'business-interruption',
    Icon: BarChart3,
    title: 'Business Interruption',
    desc: 'Loss of business income from covered events like fire, theft, or vandalism. Calculated using a unique insurance industry formula.',
    badge: 'We Handle This',
    badgeColor: 'bg-green-100 text-green-800 border-green-300',
    cardColor: 'bg-white border-gray-200',
  },
  {
    slug: 'cyber-theft',
    Icon: Monitor,
    title: 'Cyber Theft (Business)',
    desc: 'Business losses from cyber attacks, data breaches, and electronic theft.',
    badge: 'We Handle This',
    badgeColor: 'bg-green-100 text-green-800 border-green-300',
    cardColor: 'bg-white border-gray-200',
  },
  {
    slug: 'employee-theft',
    Icon: ShieldOff,
    title: 'Employee Theft',
    desc: 'Losses from employee dishonesty, embezzlement, and internal theft covered under fidelity bonds or commercial policies.',
    badge: 'We Handle This',
    badgeColor: 'bg-green-100 text-green-800 border-green-300',
    cardColor: 'bg-white border-gray-200',
  },
  {
    slug: 'cargo',
    Icon: Package,
    title: 'Cargo Claims',
    desc: 'Damage or loss to goods in transit. Inland marine claims are governed by California law; ocean and air cargo may fall under federal maritime law or international treaties.',
    badge: 'We Handle This',
    badgeColor: 'bg-green-100 text-green-800 border-green-300',
    cardColor: 'bg-white border-gray-200',
  },
  {
    slug: 'auto-damage',
    Icon: Car,
    title: 'Auto Physical Damage',
    desc: 'Damage to vehicles from accidents, theft, vandalism, or weather. Physical damage only \u2014 not bodily injury.',
    badge: 'We Handle This',
    badgeColor: 'bg-green-100 text-green-800 border-green-300',
    cardColor: 'bg-white border-gray-200',
  },
  {
    slug: 'personal-injury',
    Icon: Stethoscope,
    title: 'Personal Injury',
    desc: 'Bodily injury from accidents, medical malpractice, or negligence. Requires an attorney \u2014 we can connect you.',
    badge: 'Attorney Referral',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
    cardColor: 'bg-white border-gray-200',
  },
  {
    slug: 'workers-comp',
    Icon: HardHat,
    title: 'Workers\u2019 Compensation',
    desc: 'Workplace injuries and occupational illness. Requires specialized legal representation.',
    badge: 'Attorney Referral',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
    cardColor: 'bg-white border-gray-200',
  },
  {
    slug: 'medical',
    Icon: Building,
    title: 'Medical Claims',
    desc: 'Health insurance disputes, denied procedures, and medical billing issues.',
    badge: 'Specialist Referral',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
    cardColor: 'bg-white border-gray-200',
  },
]

export default function OtherClaimsPage() {
  return (
    <>
      {/* Header */}
      <div className="bg-[#1F3964] text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/resources" className="text-blue-300 hover:text-white text-sm mb-3 inline-block">
            &larr; Back to Resources
          </Link>
          <h1 className="text-3xl font-bold mb-3">Other Types of Insurance Claims</h1>
          <p className="text-blue-200 max-w-2xl leading-relaxed">
            This site primarily focuses on California property insurance claims &mdash; residential
            and commercial. However, there are many other types of insurance claims that may also
            require professional help. Below are additional claim types that we either handle
            directly as a licensed Public Adjuster or refer to trusted specialists.
          </p>
        </div>
      </div>

      {/* Claim Type Cards */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {CLAIM_TYPES.map(ct => (
            <Link
              key={ct.slug}
              href={`/other-claims/${ct.slug}`}
              aria-label={`Learn more about ${ct.title}`}
              className={`block rounded-xl border p-6 hover:shadow-md transition-shadow ${ct.cardColor}`}
            >
              <div className="flex items-start gap-4">
                <ct.Icon className="w-7 h-7 text-gray-700 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h2 className="font-bold text-gray-900 text-lg">{ct.title}</h2>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${ct.badgeColor}`}>
                      {ct.badge}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{ct.desc}</p>
                  <p className="text-[#2E74B5] text-sm font-medium mt-3" aria-hidden="true">Learn more &rarr;</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#EFF4FB] py-12 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#1F3964] mb-3">Not Sure Where Your Claim Fits?</h2>
          <p className="text-gray-600 mb-6">
            Every claim is different. Contact us for a free consultation and we&apos;ll help you
            understand your options &mdash; or connect you with the right professional.
          </p>
          <Link href="/contact" className="btn-gold">
            Request a Free Consultation &rarr;
          </Link>
        </div>
      </div>
    </>
  )
}
