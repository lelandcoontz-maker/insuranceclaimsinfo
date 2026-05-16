import type { Metadata } from 'next'
import Link from 'next/link'
import { quizQuestions, QUIZ_CATEGORIES } from '@/lib/content/quiz-data'
import { LegalDisclaimer } from '@/components/content/LegalDisclaimer'

export const metadata: Metadata = {
  title: 'Answer Key — Property Claims Knowledge Assessment | InsuranceClaimsInfo.com',
  description: 'Complete answer key with detailed explanations for the 100-question Property Claims Knowledge Assessment. Includes references to California regulations, case law, and claims procedures.',
  keywords: ['property claims quiz answers', 'claims adjuster test answers', 'California insurance exam', 'property claims knowledge test key'],
  alternates: { canonical: '/quiz/answer-key' },
}

export default function AnswerKeyPage() {
  const questionsByCategory: Record<string, typeof quizQuestions> = {}
  quizQuestions.forEach(q => {
    if (!questionsByCategory[q.category]) questionsByCategory[q.category] = []
    questionsByCategory[q.category].push(q)
  })

  return (
    <>
      <div className="bg-[#1F3964] text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">🔑</span>
            <h1 className="text-3xl md:text-4xl font-bold">
              Answer Key
            </h1>
          </div>
          <p className="text-lg text-white/80 max-w-3xl leading-relaxed">
            Complete answer key for the 100-question Property Claims Knowledge Assessment.
            Each answer includes an explanation and a link to the relevant article for further reading.
          </p>
          <div className="mt-4">
            <Link
              href="/quiz"
              className="inline-block bg-[#C9A84C] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#b8973b] transition-colors"
            >
              Take the Quiz
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <nav className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-10">
          <h2 className="font-bold text-[#1F3964] mb-3">Jump to Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {QUIZ_CATEGORIES.map((cat, idx) => {
              const catQuestions = questionsByCategory[cat] || []
              return (
                <a
                  key={cat}
                  href={`#cat-${idx}`}
                  className="text-[#2E74B5] hover:text-[#1F3964] text-sm underline"
                >
                  {cat} ({catQuestions.length} questions)
                </a>
              )
            })}
          </div>
        </nav>

        {QUIZ_CATEGORIES.map((cat, catIdx) => {
          const questions = questionsByCategory[cat] || []
          return (
            <div key={cat} id={`cat-${catIdx}`} className="mb-16">
              <h2 className="text-2xl font-bold text-[#1F3964] mb-6 pb-3 border-b-2 border-[#C9A84C]">
                {cat}
              </h2>

              <div className="space-y-8">
                {questions.map(q => (
                  <div key={q.id} className="border border-gray-200 rounded-xl p-6 bg-white">
                    <div className="flex items-start gap-3 mb-4">
                      <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#1F3964] text-white flex items-center justify-center font-bold text-sm">
                        {q.id}
                      </span>
                      <div className="flex-1">
                        {q.californiaSpecific && (
                          <span className="inline-block bg-amber-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded leading-none mb-1 mr-1" title="California-specific">
                            CA
                          </span>
                        )}
                        <p className="text-gray-900 font-medium text-lg leading-relaxed">
                          {q.question}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2 ml-13 mb-4">
                      {q.options.map(opt => {
                        const isCorrect = opt.label === q.correctAnswer
                        return (
                          <div
                            key={opt.label}
                            className={`flex items-start gap-3 p-3 rounded-lg border ${
                              isCorrect
                                ? 'border-green-400 bg-green-50'
                                : 'border-transparent'
                            }`}
                          >
                            <span className={`font-bold ${isCorrect ? 'text-green-700' : 'text-gray-500'}`}>
                              {opt.label}.
                            </span>
                            <span className={isCorrect ? 'font-semibold text-green-900' : 'text-gray-700'}>
                              {opt.text}
                            </span>
                            {isCorrect && (
                              <span className="ml-auto text-green-600 font-bold text-sm flex-shrink-0">
                                Correct
                              </span>
                            )}
                          </div>
                        )
                      })}
                    </div>

                    <div className="ml-13 p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <p className="text-sm font-semibold text-[#1F3964] mb-1">Explanation</p>
                      <p className="text-sm text-gray-700 leading-relaxed">{q.explanation}</p>
                      {q.counterpoint && (
                        <div className="mt-3 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                          <p className="text-sm font-semibold text-amber-900 mb-1">Counterpoint</p>
                          <p className="text-sm text-amber-800 leading-relaxed italic">{q.counterpoint}</p>
                        </div>
                      )}
                      {q.articleSlug && (
                        <Link
                          href={`/resources/${q.articleSlug}`}
                          className="text-sm text-[#2E74B5] underline mt-2 inline-block hover:text-[#1F3964]"
                        >
                          Read the full article: {q.articleTitle}
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })}

        <div className="text-center mt-12">
          <Link
            href="/quiz"
            className="inline-block bg-[#1F3964] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#162d50] transition-colors"
          >
            Take the Quiz
          </Link>
        </div>

        <div className="mt-16">
          <LegalDisclaimer />
        </div>
      </div>
    </>
  )
}
