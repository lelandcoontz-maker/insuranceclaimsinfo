import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'California Insurance Claim Resources',
  description: 'Free guides on California insurance law, policy interpretation, claim negotiation, bad faith, appraisal, Xactimate estimates, mold claims, and more.',
}

const CATEGORIES = [
  {
    label: 'California Law & Your Rights',
    color: 'bg-blue-50 border-blue-200',
    headingColor: 'text-blue-900',
    articles: [
      {
        icon: '⚖️',
        title: 'Fair Claims Settlement Practices Act (10 CCR 2695)',
        desc: 'The California regulation that governs every step of your claim. Deadlines, required disclosures, and prohibited practices.',
        href: '/resources/california-fair-claims',
        tag: 'Essential Reading',
        tagColor: 'bg-red-100 text-red-700',
      },
      {
        icon: '🚨',
        title: 'Bad Faith Insurance Practices',
        desc: 'What constitutes bad faith in California, your remedies, and how to document violations for leverage or litigation.',
        href: '/resources/bad-faith',
        tag: 'California',
        tagColor: 'bg-blue-100 text-blue-700',
      },
      {
        icon: '📁',
        title: 'Filing a CDI Complaint',
        desc: 'How to file a complaint with the California Department of Insurance. When to do it, what it accomplishes, and how to write one that gets results.',
        href: '/resources/cdi-complaint',
        tag: 'California',
        tagColor: 'bg-blue-100 text-blue-700',
      },
      {
        icon: '🎯',
        title: 'Games Insurance Companies Play',
        desc: '15 common insurer tactics on property claims — how to identify them and how to defeat them.',
        href: '/insurer-tactics',
        tag: 'Must Read',
        tagColor: 'bg-red-100 text-red-700',
      },
    ],
  },
  {
    label: 'Understanding Your Policy',
    color: 'bg-amber-50 border-amber-200',
    headingColor: 'text-amber-900',
    articles: [
      {
        icon: '📋',
        title: 'Policy Interpretation Guide',
        desc: 'Coverages A, B, C, D explained. HO3 vs named peril, commercial vs residential, co-insurance, endorsements, and how to read your entire policy.',
        href: '/resources/policy-interpretation',
        tag: 'Fundamentals',
        tagColor: 'bg-amber-100 text-amber-700',
      },
      {
        icon: '📄',
        title: 'How to Read Your Declarations Page',
        desc: 'Your dec page walkthrough: coverages, limits, deductibles, and hidden coverages like debris removal and extended replacement cost.',
        href: '/resources/declarations-page',
        tag: 'Start Here',
        tagColor: 'bg-red-100 text-red-700',
      },
      {
        icon: '🔍',
        title: 'Exclusions: What\'s Not Covered',
        desc: 'Earth movement, flood, ordinance & law, mold, wear & tear — how to identify exclusions and when they may not apply.',
        href: '/resources/exclusions',
        tag: 'Policy',
        tagColor: 'bg-amber-100 text-amber-700',
      },
      {
        icon: '💲',
        title: 'ACV vs. RCV: Actual vs. Replacement Cost',
        desc: 'The most important distinction in a contents claim. How depreciation is calculated and how to get full replacement cost.',
        href: '/resources/acv-rcv',
        tag: 'Contents',
        tagColor: 'bg-amber-100 text-amber-700',
      },
    ],
  },
  {
    label: 'The Claims Process',
    color: 'bg-green-50 border-green-200',
    headingColor: 'text-green-900',
    articles: [
      {
        icon: '🗂',
        title: 'Step-by-Step Claims Guide',
        desc: 'From first notice of loss to final settlement. What happens at each stage, who does what, and how to protect yourself.',
        href: '/resources/claims-process',
        tag: 'Process',
        tagColor: 'bg-green-100 text-green-700',
      },
      {
        icon: '📝',
        title: 'Proof of Loss',
        desc: 'What a sworn proof of loss is, when it\'s required, deadlines, and how to complete one correctly.',
        href: '/resources/proof-of-loss',
        tag: 'Process',
        tagColor: 'bg-green-100 text-green-700',
      },
      {
        icon: '📂',
        title: 'Duties After Loss',
        desc: 'Your obligations after a loss — reporting, exhibiting damages, proof of loss — and how failure to comply can affect your claim.',
        href: '/resources/duties-after-loss',
        tag: 'Process',
        tagColor: 'bg-green-100 text-green-700',
      },
      {
        icon: '❓',
        title: 'Coverage Disputes',
        desc: 'The most fundamental question: is your loss covered at all? How to fight a denial and establish coverage.',
        href: '/resources/coverage-disputes',
        tag: 'Disputes',
        tagColor: 'bg-green-100 text-green-700',
      },
      {
        icon: '📏',
        title: 'Scope of Loss Disputes',
        desc: 'When the insurer misses damage — how to document, dispute, and fight for full repairs.',
        href: '/resources/scope-of-loss',
        tag: 'Disputes',
        tagColor: 'bg-green-100 text-green-700',
      },
      {
        icon: '🔨',
        title: 'Insurance Appraisal in California',
        desc: 'The standard fire policy, the arbitration code, key case law (Kacha, Sharma, Devonwood, Lee), and how to protect your rights in appraisal.',
        href: '/resources/appraisal',
        tag: 'California',
        tagColor: 'bg-green-100 text-green-700',
      },
    ],
  },
  {
    label: 'Contents & Personal Property',
    color: 'bg-purple-50 border-purple-200',
    headingColor: 'text-purple-900',
    articles: [
      {
        icon: '🛋',
        title: 'Documenting Personal Property',
        desc: 'How to create a defensible contents inventory. Room-by-room methodology, cleaning vs total loss, pack-out and storage.',
        href: '/resources/contents-claims',
        tag: 'Contents',
        tagColor: 'bg-purple-100 text-purple-700',
      },
      {
        icon: '🏨',
        title: 'Additional Living Expenses (ALE) & Fair Rental Value',
        desc: 'What ALE and FRV cover, how to document expenses, what insurers try to limit, and how to fight termination.',
        href: '/resources/ale-frv',
        tag: 'ALE / FRV',
        tagColor: 'bg-purple-100 text-purple-700',
      },
      {
        icon: '💻',
        title: 'Electronics & Specialty Items',
        desc: 'TVs, computers, jewelry, art, instruments — how these are valued differently and when you need a specialist.',
        href: '/resources/specialty-items',
        tag: 'Contents',
        tagColor: 'bg-purple-100 text-purple-700',
      },
    ],
  },
  {
    label: 'Negotiation & Estimates',
    color: 'bg-orange-50 border-orange-200',
    headingColor: 'text-orange-900',
    articles: [
      {
        icon: '♟',
        title: 'Claim Negotiation Tactics',
        desc: 'The chess game with your adjuster. Responding to lowball offers, reservation of rights letters, and delay tactics.',
        href: '/resources/negotiation',
        tag: 'Strategy',
        tagColor: 'bg-orange-100 text-orange-700',
      },
      {
        icon: '📐',
        title: 'Xactimate Estimates: What You Need to Know',
        desc: 'How to read a scope of loss, identify missing line items, understand labor and material rates, and dispute underpayment.',
        href: '/resources/xactimate',
        tag: 'Estimates',
        tagColor: 'bg-orange-100 text-orange-700',
      },
      {
        icon: '🧑‍💼',
        title: 'Working With a Public Adjuster',
        desc: 'What a PA does, how fees work, when to hire one, and how the process works alongside your insurer.',
        href: '/resources/public-adjuster',
        tag: 'Professional Help',
        tagColor: 'bg-orange-100 text-orange-700',
      },
    ],
  },
  {
    label: 'Specialized Topics',
    color: 'bg-teal-50 border-teal-200',
    headingColor: 'text-teal-900',
    articles: [
      {
        icon: '🦠',
        title: 'Mold Losses',
        desc: 'Is mold covered? Ensuing loss doctrine, mold limits, and why the insurance company\'s mold argument may be wrong.',
        href: '/resources/mold-losses',
        tag: 'Mold',
        tagColor: 'bg-teal-100 text-teal-700',
      },
      {
        icon: '🔥',
        title: 'Common Types of Claims',
        desc: 'Fire, water, vandalism, vehicle impact, sewage, flood, smoke — how each type of claim has unique considerations.',
        href: '/types-of-claims',
        tag: 'Claim Types',
        tagColor: 'bg-teal-100 text-teal-700',
      },
    ],
  },
]

export default function ResourcesPage() {
  return (
    <>
      {/* Header */}
      <div className="bg-[#1F3964] text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-3">California Insurance Claim Resources</h1>
          <p className="text-blue-200 max-w-2xl leading-relaxed">
            Plain-English guides written for California policyholders. No jargon, no paywalls.
            Everything you need to understand your policy, navigate the claims process,
            and fight for what you&#39;re owed.
          </p>
        </div>
      </div>

      {/* Quick links to top-level pages */}
      <div className="max-w-6xl mx-auto px-4 pt-10 pb-2">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/regulations" className="bg-[#1F3964] text-white rounded-xl p-5 hover:bg-[#162847] transition-colors">
            <span className="text-2xl mb-2 block">📜</span>
            <h3 className="font-bold mb-1">CA Rules & Regulations</h3>
            <p className="text-blue-200 text-sm">Insurance Code 790 and Fair Claims Regulations — your rights under California law.</p>
          </Link>
          <Link href="/faq" className="bg-[#C9A84C] text-white rounded-xl p-5 hover:bg-[#A8872E] transition-colors">
            <span className="text-2xl mb-2 block">❓</span>
            <h3 className="font-bold mb-1">Frequently Asked Questions</h3>
            <p className="text-amber-100 text-sm">30+ answers to the most common insurance claim questions.</p>
          </Link>
          <Link href="/types-of-claims" className="bg-[#2E74B5] text-white rounded-xl p-5 hover:bg-[#1F3964] transition-colors">
            <span className="text-2xl mb-2 block">🔥</span>
            <h3 className="font-bold mb-1">Types of Claims</h3>
            <p className="text-blue-100 text-sm">Fire, water, mold, vandalism, flood, smoke — guides for each type of loss.</p>
          </Link>
        </div>
      </div>

      {/* Resource grid */}
      <div className="max-w-6xl mx-auto px-4 py-10 space-y-12">
        {CATEGORIES.map(cat => (
          <section key={cat.label}>
            <h2 className={`text-xl font-bold mb-5 ${cat.headingColor}`}>{cat.label}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {cat.articles.map(article => (
                <Link
                  key={article.href}
                  href={article.href}
                  className={`block rounded-xl border p-5 hover:shadow-md transition-shadow ${cat.color}`}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-2xl flex-shrink-0">{article.icon}</span>
                    <div>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${article.tagColor}`}>
                        {article.tag}
                      </span>
                      <h3 className="font-bold text-gray-900 mt-1 leading-tight">{article.title}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{article.desc}</p>
                  <p className="text-[#2E74B5] text-sm font-medium mt-3">Read guide →</p>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-[#1F3964] text-white py-12 px-4 mt-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">Need Help With Your Specific Claim?</h2>
          <p className="text-blue-200 mb-6">
            Every claim is different. If your insurer is giving you trouble, a licensed Public Adjuster
            can review your file, identify what&#39;s being underpaid, and represent you in negotiations.
          </p>
          <Link href="/contact" className="btn-gold">
            Request a Free Claim Review →
          </Link>
        </div>
      </div>
    </>
  )
}
