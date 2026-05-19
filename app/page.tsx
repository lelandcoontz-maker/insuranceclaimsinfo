import Link from 'next/link'
import Image from 'next/image'
import { LegalDisclaimer } from '@/components/content/LegalDisclaimer'
import {
  ScrollText, HelpCircle, FileText, FolderOpen, Ruler,
  Microscope, Flame, ShieldAlert, Scale,
  XCircle, ClipboardList, Building2,
  Briefcase,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

// ── Start Here paths shown on homepage ──────────────────────────────────────
const START_PATHS: { Icon: LucideIcon; title: string; desc: string; href: string; color: string }[] = [
  {
    Icon: Flame,
    title: 'I Had a Fire or Disaster',
    desc: 'Emergency steps, documentation, ALE, and rebuilding decisions.',
    href: '/start-here/fire-claim',
    color: 'bg-red-50 border-red-200 hover:border-red-400',
  },
  {
    Icon: XCircle,
    title: 'Denied or Underpaid',
    desc: 'Negotiation, appraisal, bad faith, and CDI complaints.',
    href: '/start-here/denied-claim',
    color: 'bg-orange-50 border-orange-200 hover:border-orange-400',
  },
  {
    Icon: ClipboardList,
    title: 'Filing My First Claim',
    desc: 'What to say, what to document, and what to expect.',
    href: '/start-here/first-claim',
    color: 'bg-blue-50 border-blue-200 hover:border-blue-400',
  },
  {
    Icon: Building2,
    title: 'Commercial Property Claim',
    desc: 'Business interruption, coinsurance, and CP forms.',
    href: '/start-here/commercial-claim',
    color: 'bg-sky-50 border-sky-200 hover:border-sky-400',
  },
  {
    Icon: Briefcase,
    title: 'I Am a Professional',
    desc: 'Attorneys, PAs, and contractors — deep-dive references, case law, and tactical resources.',
    href: '/start-here/professional',
    color: 'bg-slate-50 border-slate-200 hover:border-slate-400',
  },
]

// ── Resource cards shown on the homepage ─────────────────────────────────────
const RESOURCES: { icon: LucideIcon; title: string; desc: string; href: string; tag: string }[] = [
  {
    icon: ScrollText,
    title: 'CA Rules & Regulations',
    desc: 'Insurance Code 790 and Fair Claims Regulations — timelines, rights, and requirements your insurer must follow.',
    href: '/regulations',
    tag: 'Essential',
  },
  {
    icon: HelpCircle,
    title: 'Frequently Asked Questions',
    desc: '30+ answers to the most common insurance claim questions — from depreciation to examinations under oath.',
    href: '/faq',
    tag: 'FAQ',
  },
  {
    icon: FileText,
    title: 'Understanding Your Policy',
    desc: 'HO3 vs named peril, commercial vs residential, co-insurance, endorsements, and how to read your entire policy.',
    href: '/resources/policy-interpretation',
    tag: 'Policy',
  },
  {
    icon: FolderOpen,
    title: 'The Claims Process',
    desc: 'Step-by-step guide from filing to settlement. Timelines, documentation, and what to expect.',
    href: '/resources/claims-process',
    tag: 'Process',
  },
  {
    icon: Ruler,
    title: 'Xactimate Estimates',
    desc: 'How insurance company Xactimate estimates can understate repair costs, what to look for, and how to dispute underpayment.',
    href: '/resources/xactimate',
    tag: 'Estimates',
  },
  {
    icon: Microscope,
    title: 'Mold Losses',
    desc: 'Ensuing loss doctrine, mold limits, and why the insurer\'s mold argument may be wrong.',
    href: '/resources/mold-losses',
    tag: 'Mold',
  },
  {
    icon: Flame,
    title: 'Types of Claims',
    desc: 'Fire, water, vandalism, vehicle impact, sewage, flood, smoke — guides for every type of loss.',
    href: '/types-of-claims',
    tag: 'Claim Types',
  },
  {
    icon: ShieldAlert,
    title: 'Bad Faith Practices',
    desc: 'Unreasonable delays, lowball offers, misrepresentation — California has strong bad faith remedies.',
    href: '/resources/bad-faith',
    tag: 'Bad Faith',
  },
  {
    icon: Scale,
    title: 'Insurance Appraisal',
    desc: 'When you and the insurer disagree on the amount of loss, most policies provide an appraisal process. How it works and when to invoke it.',
    href: '/resources/appraisal',
    tag: 'Appraisal',
  },
]

// ── How It Works steps ───────────────────────────────────────────────────────
const STEPS = [
  {
    num: '1',
    title: 'Use the Free Tools',
    desc: 'Start with our personal property inventory tool — check off what you owned and download your list as a formatted Excel file.',
  },
  {
    num: '2',
    title: 'Read the Guides',
    desc: 'Our California-specific resources explain your rights, the claims process, and how to handle common insurer tactics.',
  },
  {
    num: '3',
    title: 'Get Professional Help',
    desc: 'If your claim is large or your insurer is giving you trouble, a licensed Public Adjuster can represent you and fight for the full value of your claim.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="bg-[#1F3964] text-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block bg-[#C9A84C] text-white text-xs font-bold px-3 py-1 rounded-full mb-6 tracking-wider uppercase">
            California Insurance Claim Help
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
            Everything Your Insurance Company<br className="hidden sm:block" />
            <span className="text-[#C9A84C]">Hopes You Never Learn</span>
          </h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto mb-10 leading-relaxed">
            Free tools, plain-English guides, and licensed professional help for California
            homeowners and business owners navigating insurance claims after fire, vandalism,
            theft, smoke damage, or other disaster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/inventory" className="btn-gold text-base px-8 py-4">
              Build My Personal Property (Contents) Inventory — Free
            </Link>
            <Link href="/contact" className="btn-secondary border-white text-white hover:bg-white/10 text-base px-8 py-4">
              Talk to a Public Adjuster
            </Link>
          </div>
          <p className="text-blue-300 text-sm mt-6">
            Leland Coontz III · CA Public Adjuster License #2B53445 · Public Adjusting throughout California · Appraisal Services Available in California and Select Other States
          </p>
        </div>
      </section>

      {/* ── Disclaimer ────────────────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-4 pt-4 text-center">
        <p className="text-xs text-gray-500 italic">
          This website provides insurance claims education and information, not legal advice.
        </p>
      </div>

      {/* ── Trust bar ─────────────────────────────────────────────────────── */}
      <section className="bg-[#EFF4FB] border-y border-blue-100 py-5 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-x-10 gap-y-2 text-sm text-[#1F3964] font-medium">
          <span>✓ California Licensed Public Adjuster</span>
          <span>✓ No Recovery, No Fee</span>
          <span>✓ 3,750+ Personal Property Item Inventory Checklist — Free</span>
          <span>✓ Nationwide Referral Network</span>
          <span>✓ Fire · Flood · Wind · Smoke Damage</span>
        </div>
      </section>

      {/* ── What's Your Situation? ────────────────────────────────────────── */}
      <section className="py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-heading text-center">What&apos;s Your Situation?</h2>
          <p className="text-center text-gray-500 mb-8 max-w-xl mx-auto">
            Over 500 articles on the site. Start with the path that fits your situation.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {START_PATHS.map(path => (
              <Link
                key={path.href}
                href={path.href}
                className={`block rounded-xl border-2 p-5 transition-all ${path.color}`}
              >
                <path.Icon className="w-6 h-6 text-gray-700 mb-3" aria-hidden="true" />
                <h3 className="font-bold text-gray-900 mb-1">{path.title}</h3>
                <p className="text-gray-600 text-sm">{path.desc}</p>
              </Link>
            ))}
          </div>
          <p className="text-center mt-6">
            <Link href="/start-here" className="text-[#2E74B5] text-sm font-medium hover:underline">
              See all guided paths →
            </Link>
          </p>
        </div>
      </section>

      {/* ── How It Works ──────────────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-stone-50 border-y border-stone-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-heading text-center">How It Works</h2>
          <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
            Whether you're filing your own claim or considering professional help,
            start here.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STEPS.map(step => (
              <div key={step.num} className="text-center">
                <div className="w-12 h-12 rounded-full bg-[#1F3964] text-white text-xl font-bold flex items-center justify-center mx-auto mb-4">
                  {step.num}
                </div>
                <h3 className="font-bold text-lg text-[#1F3964] mb-2">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Inventory Tool CTA ────────────────────────────────────────────── */}
      <section className="bg-[#EFF4FB] py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl border border-blue-100 shadow-sm overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-8 md:p-12">
                <div className="text-gold-text text-sm font-bold uppercase tracking-wider mb-3">
                  Free Tool
                </div>
                <h2 className="text-3xl font-bold text-[#1F3964] mb-4">
                  Personal Property Inventory
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  3,750+ items organized by room. Check off what you owned, add
                  quantities and values, and download a formatted Excel spreadsheet
                  for your insurance claim — completely free.
                </p>
                <ul className="space-y-2 mb-8 text-sm text-gray-700">
                  {[
                    'Bathroom, kitchen, bedroom, garage and more',
                    'Collectibles, antiques, clothing, electronics',
                    'Small items most people forget (adds up fast)',
                    'Exports to Excel with 3 worksheets',
                    'Includes California policyholder tips',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-green-600 mt-0.5 flex-shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/inventory" className="btn-primary">
                  Start My Inventory →
                </Link>
              </div>
              <div className="md:w-1/2 bg-[#1F3964] p-8 md:p-12 flex items-center">
                <div className="text-white">
                  <p className="text-blue-200 text-sm mb-4 font-medium">Why It Works:</p>
                  <ul className="space-y-3 text-sm">
                    {[
                      'Most people forget 60–80% of what they own after a loss',
                      'Insurance companies know this — and pay accordingly',
                      'A structured checklist catches items you\'d never think of',
                      'The formatted Excel output gives your adjuster no excuse to ignore items',
                      'Completely free — no account, no credit card, no strings',
                    ].map(item => (
                      <li key={item} className="text-blue-200 flex items-start gap-3">
                        <span className="text-blue-300 flex-shrink-0 mt-0.5" aria-hidden="true">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Resource Cards ────────────────────────────────────────────────── */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-heading text-center">Free California Claim Resources</h2>
          <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
            Plain-English guides written specifically for California policyholders.
            No jargon, no paywalls.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {RESOURCES.map(res => (
              <Link key={res.href} href={res.href} aria-label={`Read ${res.title}`} className="card group">
                <div className="flex items-start gap-3 mb-3">
                  <res.icon className="w-6 h-6 text-[#2E74B5] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <span className="text-xs font-semibold text-[#2E74B5] uppercase tracking-wider">
                      {res.tag}
                    </span>
                    <h3 className="font-bold text-[#1F3964] group-hover:text-[#2E74B5] transition-colors">
                      {res.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">{res.desc}</p>
                <p className="text-[#2E74B5] text-sm font-medium mt-4 group-hover:underline" aria-hidden="true">
                  Read guide →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── For Attorneys ─────────────────────────────────────────────────── */}
      <section className="bg-slate-800 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-8">
          <Briefcase className="w-10 h-10 text-[#C9A84C] flex-shrink-0 hidden sm:block" aria-hidden="true" />
          <div className="flex-1">
            <p className="text-[#C9A84C] text-xs font-bold uppercase tracking-wider mb-2">
              For Attorneys
            </p>
            <h2 className="text-2xl font-bold mb-3">
              Need Technical Support on a Property Claim?
            </h2>
            <p className="text-slate-300 leading-relaxed">
              I work alongside insurance coverage attorneys, bad faith litigators, and plaintiff&apos;s
              counsel — handling damage documentation, Xactimate estimates, policy analysis, and
              appraisal so you can focus on the legal strategy.
            </p>
          </div>
          <Link href="/about#attorneys" className="btn-gold whitespace-nowrap flex-shrink-0">
            Attorney Services →
          </Link>
        </div>
      </section>

      {/* ── About / PA pitch ──────────────────────────────────────────────── */}
      <section className="bg-[#1F3964] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-2/3">
            <div className="text-[#C9A84C] text-sm font-bold uppercase tracking-wider mb-3">
              About Your Public Adjuster
            </div>
            <h2 className="text-3xl font-bold mb-4">
              When the Insurer Has Their Adjuster, You Should Have Yours
            </h2>
            <p className="text-blue-200 leading-relaxed mb-6">
              I'm Leland Coontz III, a licensed California Public Adjuster (Lic. #2B53445).
              Insurance companies have teams of adjusters, lawyers, and software working to minimize
              and delay what they pay. A Public Adjuster works exclusively for you — reading your policy,
              documenting your loss, and negotiating on your behalf.
            </p>
            <p className="text-blue-200 leading-relaxed mb-8">
              Most Public Adjusters work on contingency — no recovery, no fee. If I can't improve your
              settlement, you owe nothing. I also have a nationwide referral network for claims outside
              California or outside my preferred case types.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-gold">
                Free Claim Consultation
              </Link>
              <Link href="/about" className="btn-secondary border-white text-white hover:bg-white/10">
                Learn More About Me
              </Link>
            </div>
          </div>
          <div className="md:w-1/3 text-center">
            <div className="bg-white/10 rounded-2xl p-8 border border-white/20">
              <Image
                src="/images/leland-coontz-headshot.png"
                alt="Leland Coontz III, California Licensed Public Adjuster"
                width={120}
                height={120}
                className="rounded-full mx-auto mb-4 border-2 border-white/30 object-cover"
              />
              <p className="font-bold text-lg mb-1">Leland Coontz III</p>
              <p className="text-blue-300 text-sm mb-3">Licensed Public Adjuster</p>
              <p className="text-[#C9A84C] font-mono text-sm">CA Lic. #2B53445</p>
              <hr className="border-white/20 my-4" />
              <p className="text-blue-200 text-xs">
                California · All 50 States via Referral Network
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────────────────── */}
      <section className="py-14 px-4 text-center bg-[#EFF4FB]">
        <h2 className="text-3xl font-bold text-[#1F3964] mb-4">
          Start Documenting Your Claim Today
        </h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          The free inventory tool takes 30–60 minutes and can add thousands of dollars
          to your claim. Use it now, even if you haven't filed yet.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/inventory" className="btn-primary text-base px-10 py-4">
            Open Inventory Tool — Free
          </Link>
          <Link href="/resources" className="btn-secondary text-base px-10 py-4">
            Browse All Resources
          </Link>
        </div>
      </section>
    </>
  )
}
