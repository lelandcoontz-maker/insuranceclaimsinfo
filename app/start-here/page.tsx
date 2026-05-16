import type { Metadata } from 'next'
import Link from 'next/link'
import { Flame, XCircle, ClipboardList, BookOpen, Building2 } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Start Here — Choose Your Path',
  description: 'New to insurance claims? Choose your situation and we\'ll guide you through the articles that matter most.',
  alternates: { canonical: '/start-here' },
}

const paths: { Icon: LucideIcon; title: string; desc: string; href: string; color: string; iconBg: string }[] = [
  {
    Icon: Flame,
    title: 'I Just Had a Fire or Wildfire',
    desc: 'Emergency steps, what to document, dealing with adjusters, ALE, contents claims, and rebuilding decisions.',
    href: '/start-here/fire-claim',
    color: 'bg-red-50 border-red-200 hover:border-red-400',
    iconBg: 'bg-red-100',
  },
  {
    Icon: XCircle,
    title: 'My Claim Was Denied or Underpaid',
    desc: 'How to fight back: negotiation, appraisal, bad faith, hiring a PA or attorney, and CDI complaints.',
    href: '/start-here/denied-claim',
    color: 'bg-orange-50 border-orange-200 hover:border-orange-400',
    iconBg: 'bg-orange-100',
  },
  {
    Icon: ClipboardList,
    title: 'I\'m Filing My First Claim',
    desc: 'Step-by-step through the process: what to say, what to document, what to expect, and what not to do.',
    href: '/start-here/first-claim',
    color: 'bg-blue-50 border-blue-200 hover:border-blue-400',
    iconBg: 'bg-blue-100',
  },
  {
    Icon: BookOpen,
    title: 'I Want to Understand My Policy',
    desc: 'Read your policy like a professional: coverages, exclusions, conditions, endorsements, and hidden traps.',
    href: '/start-here/understand-policy',
    color: 'bg-amber-50 border-amber-200 hover:border-amber-400',
    iconBg: 'bg-amber-100',
  },
  {
    Icon: Building2,
    title: 'I Have a Commercial Property Claim',
    desc: 'Business interruption, extra expense, coinsurance, CP forms, lease requirements, and commercial-specific issues.',
    href: '/start-here/commercial-claim',
    color: 'bg-sky-50 border-sky-200 hover:border-sky-400',
    iconBg: 'bg-sky-100',
  },
]

export default function StartHerePage() {
  return (
    <>
      <div className="bg-[#1F3964] text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-3">Start Here</h1>
          <p className="text-blue-200 max-w-2xl leading-relaxed">
            With over 500 articles on the site, it can be hard to know where to begin.
            Choose the path that best describes your situation and we&apos;ll walk you through
            the most important articles in the right order.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-4">
          {paths.map(path => (
            <Link
              key={path.href}
              href={path.href}
              className={`block rounded-xl border-2 p-6 transition-all ${path.color}`}
            >
              <div className="flex items-start gap-4">
                <div className={`${path.iconBg} rounded-lg p-3 flex-shrink-0`}>
                  <path.Icon className="w-7 h-7 text-gray-700" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-1">{path.title}</h2>
                  <p className="text-gray-600">{path.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-4">Not sure which path fits? Browse everything:</p>
          <Link href="/resources" className="btn-gold">
            Browse All 500+ Articles →
          </Link>
        </div>
      </div>
    </>
  )
}
