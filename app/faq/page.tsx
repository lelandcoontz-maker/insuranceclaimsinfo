import type { Metadata } from 'next'
import Link from 'next/link'
import { FAQ_CATEGORIES } from '@/lib/content/faq-data'
import { AccordionSection } from '@/components/content/AccordionSection'
import { LegalDisclaimer } from '@/components/content/LegalDisclaimer'

/* ── SEO Metadata ───────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'Frequently Asked Questions — California Insurance Claims',
  description:
    'Get answers to common insurance claim questions: your rights, depreciation, contractors, living expenses, mold, examinations under oath, and more. Written by a CA Licensed Public Adjuster.',
  keywords: [
    'insurance claim FAQ',
    'California insurance questions',
    'Public Adjuster FAQ',
    'insurance depreciation',
    'examination under oath',
    'insurance claim denial',
    'insurance claim rights California',
    'mold insurance claim',
    'additional living expenses',
  ],
}

/* ── JSON-LD Structured Data ────────────────────────────────────────────────── */

function FaqJsonLd() {
  const allQuestions = FAQ_CATEGORIES.flatMap((cat) =>
    cat.questions.map((q) => ({
      '@type': 'Question' as const,
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer' as const,
        // For structured data we provide a plain-text summary derived from the question.
        // Google will use the first ~300 characters of the answer text.
        text: `For detailed guidance on this question, visit InsuranceClaimsInfo.com/faq. This answer is provided by a California Licensed Public Adjuster and covers California insurance law and regulations including the Fair Claims Settlement Practices Act (10 CCR 2695) and Insurance Code Section 790.03. Consult a Public Adjuster or attorney for advice specific to your claim.`,
      },
    }))
  )

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allQuestions,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

/* ── Page Component ─────────────────────────────────────────────────────────── */

export default function FaqPage() {
  return (
    <>
      <FaqJsonLd />

      {/* ── Navy Header ──────────────────────────────────────────────────── */}
      <section className="bg-[#1F3964] text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-[#C9A84C] text-white text-xs font-bold px-3 py-1 rounded-full mb-5 tracking-wider uppercase">
            Knowledge Base
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">
            Frequently Asked Questions
          </h1>
          <p className="text-blue-200 max-w-2xl leading-relaxed">
            Real questions from real policyholders — answered in plain English by a
            California Licensed Public Adjuster. If you don't see your question below,{' '}
            <Link href="/contact" className="text-[#C9A84C] underline hover:text-white transition-colors">
              contact us
            </Link>{' '}
            for a free consultation.
          </p>
        </div>
      </section>

      {/* ── Main Content: Sidebar + FAQ Sections ─────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* ── Sticky Sidebar (desktop) ─────────────────────────────────── */}
          <aside className="lg:w-64 flex-shrink-0">
            <nav className="lg:sticky lg:top-8">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                Categories
              </p>
              <ul className="space-y-1">
                {FAQ_CATEGORIES.map((cat) => (
                  <li key={cat.id}>
                    <a
                      href={`#${cat.id}`}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-[#1F3964] hover:bg-[#EFF4FB] transition-colors font-medium"
                    >
                      <span className="text-base flex-shrink-0">{cat.icon}</span>
                      {cat.title}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Sidebar CTA */}
              <div className="mt-6 bg-[#EFF4FB] rounded-xl p-4 border border-blue-100 hidden lg:block">
                <p className="text-sm font-bold text-[#1F3964] mb-1">
                  Need personal help?
                </p>
                <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                  Every claim is different. Get a free, no-obligation review from a
                  licensed Public Adjuster.
                </p>
                <Link
                  href="/contact"
                  className="block text-center text-sm font-semibold text-white bg-[#1F3964] hover:bg-[#162847] rounded-lg px-4 py-2 transition-colors"
                >
                  Free Consultation
                </Link>
              </div>
            </nav>
          </aside>

          {/* ── FAQ Sections ─────────────────────────────────────────────── */}
          <div className="flex-1 min-w-0 space-y-14">

            {/* ── Page-Level Disclaimer ──────────────────────────────────── */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex gap-3">
                <span className="text-lg flex-shrink-0">&#x2139;&#xFE0F;</span>
                <p className="text-sm text-blue-800 leading-relaxed">
                  <strong>Educational Information Only:</strong> The answers below are intended
                  as general educational information about insurance claims in California. They
                  do not constitute legal advice, and every claim involves unique facts and
                  policy language. For guidance specific to your situation, consult a licensed
                  attorney or a{' '}
                  <Link href="/contact" className="text-[#2E74B5] underline">
                    California Licensed Public Adjuster
                  </Link>.
                </p>
              </div>
            </div>

            {FAQ_CATEGORIES.map((cat) => (
              <section key={cat.id} id={cat.id} className="scroll-mt-8">
                {/* Category heading */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl">{cat.icon}</span>
                  <h2 className="text-xl font-bold text-[#1F3964]">{cat.title}</h2>
                </div>

                {/* Accordion questions */}
                <div className="space-y-3">
                  {cat.questions.map((q) => (
                    <AccordionSection key={q.id} id={q.id} title={q.question}>
                      <div className="space-y-4">{q.answer}</div>
                    </AccordionSection>
                  ))}
                </div>
              </section>
            ))}

            {/* ── Legal Disclaimer ────────────────────────────────────────── */}
            <LegalDisclaimer />
          </div>
        </div>
      </div>

      {/* ── Bottom CTA ───────────────────────────────────────────────────── */}
      <section className="bg-[#1F3964] text-white py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">
            Don't see your question? Contact us for free.
          </h2>
          <p className="text-blue-200 mb-6 max-w-xl mx-auto leading-relaxed">
            Every claim is unique. A California Licensed Public Adjuster can review
            your specific situation, answer your questions, and help you understand
            your options — at no cost and no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-gold text-base px-8 py-4">
              Request a Free Claim Review
            </Link>
            <Link href="/inventory" className="btn-secondary border-white text-white hover:bg-white/10 text-base px-8 py-4">
              Try the Free Inventory Tool
            </Link>
          </div>
          <p className="text-blue-300 text-sm mt-6">
            Leland Coontz III · CA Public Adjuster License #2B53445
          </p>
        </div>
      </section>
    </>
  )
}
