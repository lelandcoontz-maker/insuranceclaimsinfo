import Link from 'next/link'

// ── Resource cards shown on the homepage ─────────────────────────────────────
const RESOURCES = [
  {
    icon: '📜',
    title: 'CA Rules & Regulations',
    desc: 'Insurance Code 790 and Fair Claims Regulations — timelines, rights, and requirements your insurer must follow.',
    href: '/regulations',
    tag: 'Essential',
  },
  {
    icon: '❓',
    title: 'Frequently Asked Questions',
    desc: '30+ answers to the most common insurance claim questions — from depreciation to examinations under oath.',
    href: '/faq',
    tag: 'FAQ',
  },
  {
    icon: '📋',
    title: 'Understanding Your Policy',
    desc: 'HO3 vs named peril, commercial vs residential, co-insurance, endorsements, and how to read your entire policy.',
    href: '/resources/policy-interpretation',
    tag: 'Policy',
  },
  {
    icon: '🗂',
    title: 'The Claims Process',
    desc: 'Step-by-step guide from filing to settlement. Timelines, documentation, and what to expect.',
    href: '/resources/claims-process',
    tag: 'Process',
  },
  {
    icon: '📐',
    title: 'Xactimate Estimates',
    desc: 'Why Xactimate estimates are often low, controversial line items, and how to dispute underpayment.',
    href: '/resources/xactimate',
    tag: 'Estimates',
  },
  {
    icon: '🦠',
    title: 'Mold Losses',
    desc: 'Ensuing loss doctrine, mold limits, and why the insurer\'s mold argument may be wrong.',
    href: '/resources/mold-losses',
    tag: 'Mold',
  },
  {
    icon: '🔥',
    title: 'Types of Claims',
    desc: 'Fire, water, vandalism, vehicle impact, sewage, flood, smoke — guides for every type of loss.',
    href: '/types-of-claims',
    tag: 'Claim Types',
  },
  {
    icon: '🚨',
    title: 'Bad Faith Practices',
    desc: 'Unreasonable delays, lowball offers, misrepresentation — California has strong bad faith remedies.',
    href: '/resources/bad-faith',
    tag: 'Bad Faith',
  },
  {
    icon: '🔨',
    title: 'Insurance Appraisal',
    desc: 'When you and the insurer disagree on value, appraisal is your right. How the ADR process works.',
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
    desc: 'If your claim is large or your insurer is giving you trouble, a licensed Public Adjuster can represent you and maximize your recovery.',
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
            Don't Leave Money<br className="hidden sm:block" /> on the Table
          </h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto mb-10 leading-relaxed">
            Free tools, plain-English guides, and licensed professional help for California
            homeowners navigating insurance claims after fire, vandalism, theft, smoke damage,
            or other disaster.
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
            Leland Coontz III · CA Public Adjuster License #2B53445 · Public Adjusting throughout California · Insurance Appraisal Services Nationwide
          </p>
        </div>
      </section>

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

      {/* ── How It Works ──────────────────────────────────────────────────── */}
      <section className="py-16 px-4">
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
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
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
                <div className="text-[#C9A84C] text-sm font-bold uppercase tracking-wider mb-3">
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
                  <p className="text-blue-200 text-sm mb-4 font-medium">Coming Soon:</p>
                  <ul className="space-y-3 text-sm">
                    {[
                      '📸 Photo swipe — swipe yes/no on item photos',
                      '🏠 Address lookup — auto-detect your floor plan',
                      '🤖 AI Interview — guided room-by-room conversation',
                      '💬 Voice mode — talk through what you remember',
                      '📱 Mobile app — document your claim on the go',
                    ].map(item => (
                      <li key={item} className="text-blue-200 flex items-start gap-2">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-blue-300 text-xs mt-6 leading-relaxed">
                    The goal: an AI that interviews you like a conversation —
                    "What's your morning routine? What do you see first when you
                    wake up?" — and slowly builds your complete inventory.
                  </p>
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
                  <span className="text-2xl flex-shrink-0" aria-hidden="true">{res.icon}</span>
                  <div>
                    <span className="text-xs font-semibold text-[#2E74B5] uppercase tracking-wider">
                      {res.tag}
                    </span>
                    <h3 className="font-bold text-[#1F3964] group-hover:text-[#2E74B5] transition-colors">
                      {res.title}
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{res.desc}</p>
                <p className="text-[#2E74B5] text-sm font-medium mt-4 group-hover:underline" aria-hidden="true">
                  Read guide →
                </p>
              </Link>
            ))}
          </div>
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
              <div className="text-5xl mb-4">⚖️</div>
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
