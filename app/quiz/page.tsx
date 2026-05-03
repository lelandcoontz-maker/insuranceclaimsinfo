import type { Metadata } from 'next'
import Link from 'next/link'
import QuizClient from '@/components/quiz/QuizClient'
import { LegalDisclaimer } from '@/components/content/LegalDisclaimer'

export const metadata: Metadata = {
  title: 'Property Claims Knowledge Assessment — 100-Question Quiz | InsuranceClaimsInfo.com',
  description: 'Test your knowledge of property insurance claims handling, California regulations, construction scoping, coverage analysis, legal doctrines, and professional standards with this 100-question assessment.',
  keywords: ['property claims quiz', 'claims adjuster test', 'California insurance regulations', 'property claims knowledge assessment', 'insurance knowledge test', 'Public Adjuster exam prep'],
}

export default function QuizPage() {
  return (
    <>
      <div className="bg-[#1F3964] text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">📝</span>
            <h1 className="text-3xl md:text-4xl font-bold">
              Property Claims Knowledge Assessment
            </h1>
          </div>
          <p className="text-lg text-white/80 max-w-3xl leading-relaxed">
            100 questions covering regulations, claims procedures, coverage analysis,
            construction and scoping, legal doctrines, specialized claims, estimating, and professional
            standards. Designed for adjusters, claims professionals, attorneys, and Public Adjusters.
          </p>
          <p className="text-sm text-white/60 mt-2 max-w-3xl leading-relaxed">
            Many questions reflect California-specific regulations, statutes, and case law.
            Questions with a California focus are marked with a <span className="inline-block bg-amber-500/80 text-white text-xs font-bold px-1.5 py-0.5 rounded">CA</span> badge.
            General property claims principles apply broadly, but regulatory deadlines, legal doctrines,
            and statutory references may differ in other states.
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            <div className="bg-white/10 rounded-lg px-4 py-2">
              <span className="text-white/60 text-sm">Questions</span>
              <p className="font-bold">100</p>
            </div>
            <div className="bg-white/10 rounded-lg px-4 py-2">
              <span className="text-white/60 text-sm">Categories</span>
              <p className="font-bold">8</p>
            </div>
            <div className="bg-white/10 rounded-lg px-4 py-2">
              <span className="text-white/60 text-sm">Format</span>
              <p className="font-bold">Multiple Choice</p>
            </div>
            <div className="bg-white/10 rounded-lg px-4 py-2">
              <span className="text-white/60 text-sm">Answer Key</span>
              <p className="font-bold">
                <Link href="/quiz/answer-key" className="underline hover:text-[#C9A84C]">
                  View Separately
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-10">
          <h2 className="font-bold text-amber-900 mb-2">Before You Begin</h2>
          <ul className="text-amber-800 space-y-1 text-sm">
            <li>Select one answer per question. You can change answers before submitting.</li>
            <li>Filter by category using the buttons above the questions to focus on specific topics.</li>
            <li>You do not need to answer every question — unanswered questions are scored as incorrect.</li>
            <li>After submitting, you will see your score with per-category breakdowns and explanations for every question.</li>
            <li>A separate <Link href="/quiz/answer-key" className="text-[#2E74B5] underline">answer key</Link> with full explanations and article links is available at any time.</li>
          </ul>
        </div>

        <QuizClient />

        <div className="mt-16">
          <LegalDisclaimer />
        </div>
      </div>
    </>
  )
}
