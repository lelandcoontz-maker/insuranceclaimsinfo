import type { Metadata } from 'next'
import Link from 'next/link'
import { User, Clock, Briefcase, Scale, Flame, XCircle, ClipboardList, BookOpen, Building2 } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Start Here — Choose Your Path | InsuranceClaimsInfo.com',
  description: 'Over 500 articles on California insurance claims. Tell us who you are and we\'ll point you to the articles that matter most.',
  alternates: { canonical: '/start-here' },
}

const audiences: { Icon: LucideIcon; title: string; subtitle: string; desc: string; href: string; color: string; iconColor: string }[] = [
  {
    Icon: User,
    title: 'I\'m New to This',
    subtitle: 'Homeowner or renter — haven\'t filed a claim yet',
    desc: 'Start with the basics: how policies work, what your rights are, and what to expect if you ever need to file.',
    href: '/start-here/newcomer',
    color: 'border-emerald-200 hover:border-emerald-400 bg-emerald-50',
    iconColor: 'text-emerald-600',
  },
  {
    Icon: Clock,
    title: 'I\'m in the Middle of a Claim',
    subtitle: 'Filed a claim — need help getting paid fairly',
    desc: 'Tactical guidance for the fight you\'re in right now: documentation, negotiation, dealing with adjusters, and knowing when to escalate.',
    href: '/start-here/mid-claim',
    color: 'border-blue-200 hover:border-blue-400 bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    Icon: Briefcase,
    title: 'I\'m a Claims Professional',
    subtitle: 'Public adjuster, contractor, or restoration company',
    desc: 'Estimating references, scoping standards, appraisal practice, and the technical details that win disputes.',
    href: '/start-here/professional',
    color: 'border-purple-200 hover:border-purple-400 bg-purple-50',
    iconColor: 'text-purple-600',
  },
  {
    Icon: Scale,
    title: 'I\'m an Attorney',
    subtitle: 'Representing a policyholder in a coverage dispute',
    desc: 'Case law, bad faith doctrine, CACI instructions, statutory remedies, and coverage analysis for litigation.',
    href: '/start-here/attorney',
    color: 'border-amber-200 hover:border-amber-400 bg-amber-50',
    iconColor: 'text-amber-600',
  },
]

const situations: { Icon: LucideIcon; title: string; href: string }[] = [
  { Icon: Flame, title: 'Fire or wildfire', href: '/start-here/fire-claim' },
  { Icon: XCircle, title: 'Denied or underpaid', href: '/start-here/denied-claim' },
  { Icon: ClipboardList, title: 'Filing my first claim', href: '/start-here/first-claim' },
  { Icon: BookOpen, title: 'Understanding my policy', href: '/start-here/understand-policy' },
  { Icon: Building2, title: 'Commercial property', href: '/start-here/commercial-claim' },
]

export default function StartHerePage() {
  return (
    <>
      <div className="bg-[#1F3964] text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-3">Start Here</h1>
          <p className="text-blue-200 max-w-2xl leading-relaxed">
            This site has over 500 articles on California property insurance claims.
            One question will get you to the right ones.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Who are you?</h2>

        <div className="grid gap-4 sm:grid-cols-2">
          {audiences.map(a => (
            <Link
              key={a.href}
              href={a.href}
              className={`block rounded-xl border-2 p-5 transition-all ${a.color}`}
            >
              <div className="flex items-start gap-3">
                <a.Icon className={`w-6 h-6 flex-shrink-0 mt-0.5 ${a.iconColor}`} aria-hidden="true" />
                <div>
                  <h3 className="font-bold text-gray-900">{a.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">{a.subtitle}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{a.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Or choose by situation</h2>
          <div className="flex flex-wrap gap-3">
            {situations.map(s => (
              <Link
                key={s.href}
                href={s.href}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-gray-200 hover:border-[#1F3964] hover:shadow-sm transition-all text-sm font-medium text-gray-700 hover:text-[#1F3964]"
              >
                <s.Icon className="w-4 h-4" aria-hidden="true" />
                {s.title}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center space-y-2">
          <p className="text-gray-500 text-sm">
            <Link href="/resources/how-to-use-this-site" className="text-[#1F3964] font-medium hover:underline">
              How this site is organized
            </Link>
            {' · '}
            <Link href="/resources" className="text-[#1F3964] font-medium hover:underline">
              Browse all 500+ articles
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
