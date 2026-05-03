'use client'

import { useState, useCallback, useMemo } from 'react'
import Link from 'next/link'
import { quizQuestions, QUIZ_CATEGORIES } from '@/lib/content/quiz-data'
import type { QuizQuestion } from '@/lib/content/quiz-data'

export default function QuizClient() {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const handleAnswer = useCallback((questionId: number, answer: string) => {
    if (submitted) return
    setAnswers(prev => ({ ...prev, [questionId]: answer }))
  }, [submitted])

  const handleSubmit = useCallback(() => {
    setSubmitted(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const handleReset = useCallback(() => {
    setAnswers({})
    setSubmitted(false)
    setActiveCategory(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const score = useMemo(() => {
    if (!submitted) return { correct: 0, total: 0, percentage: 0 }
    let correct = 0
    quizQuestions.forEach(q => {
      if (answers[q.id] === q.correctAnswer) correct++
    })
    return {
      correct,
      total: quizQuestions.length,
      percentage: Math.round((correct / quizQuestions.length) * 100),
    }
  }, [submitted, answers])

  const categoryScores = useMemo(() => {
    if (!submitted) return {}
    const scores: Record<string, { correct: number; total: number }> = {}
    quizQuestions.forEach(q => {
      if (!scores[q.category]) scores[q.category] = { correct: 0, total: 0 }
      scores[q.category].total++
      if (answers[q.id] === q.correctAnswer) scores[q.category].correct++
    })
    return scores
  }, [submitted, answers])

  const questionsByCategory = useMemo(() => {
    const grouped: Record<string, QuizQuestion[]> = {}
    quizQuestions.forEach(q => {
      if (!grouped[q.category]) grouped[q.category] = []
      grouped[q.category].push(q)
    })
    return grouped
  }, [])

  const filteredQuestions = activeCategory
    ? quizQuestions.filter(q => q.category === activeCategory)
    : quizQuestions

  const answeredCount = Object.keys(answers).length

  return (
    <div>
      {submitted && (
        <div className="bg-[#1F3964] text-white rounded-xl p-8 mb-10 shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Your Results</h2>
          <div className="flex items-center gap-8 mb-6">
            <div className="text-6xl font-bold">{score.percentage}%</div>
            <div>
              <p className="text-xl">{score.correct} of {score.total} correct</p>
              <p className="text-white/70 mt-1">
                {score.percentage >= 90 ? 'Outstanding — expert-level knowledge.' :
                 score.percentage >= 75 ? 'Strong performance — solid professional knowledge.' :
                 score.percentage >= 60 ? 'Good foundation — review the areas below for improvement.' :
                 'Consider reviewing the linked articles for each missed question.'}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {QUIZ_CATEGORIES.map(cat => {
              const s = categoryScores[cat]
              if (!s) return null
              const pct = Math.round((s.correct / s.total) * 100)
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
                  className={`text-left p-3 rounded-lg transition-colors ${
                    activeCategory === cat
                      ? 'bg-white text-[#1F3964]'
                      : 'bg-white/10 hover:bg-white/20'
                  }`}
                >
                  <div className="text-sm font-medium truncate">{cat}</div>
                  <div className={`text-lg font-bold ${
                    activeCategory === cat ? 'text-[#1F3964]' : ''
                  }`}>
                    {s.correct}/{s.total}
                    <span className={`text-sm font-normal ml-2 ${
                      pct >= 75
                        ? activeCategory === cat ? 'text-green-700' : 'text-green-300'
                        : activeCategory === cat ? 'text-red-700' : 'text-red-300'
                    }`}>
                      ({pct}%)
                    </span>
                  </div>
                </button>
              )
            })}
          </div>
          <div className="mt-6 flex gap-4">
            <button
              onClick={handleReset}
              className="bg-white text-[#1F3964] px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Retake Quiz
            </button>
            <Link
              href="/quiz/answer-key"
              className="bg-[#C9A84C] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#b8973b] transition-colors"
            >
              View Full Answer Key
            </Link>
          </div>
        </div>
      )}

      {!submitted && (
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-lg font-semibold text-[#1F3964]">
                {answeredCount} of {quizQuestions.length} questions answered
              </p>
              <div className="w-64 bg-gray-200 rounded-full h-2.5 mt-2">
                <div
                  className="bg-[#2E74B5] h-2.5 rounded-full transition-all duration-300"
                  style={{ width: `${(answeredCount / quizQuestions.length) * 100}%` }}
                />
              </div>
            </div>
            <button
              onClick={handleSubmit}
              disabled={answeredCount === 0}
              className={`px-8 py-3 rounded-lg font-bold text-white transition-colors ${
                answeredCount === 0
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-[#1F3964] hover:bg-[#162d50]'
              }`}
            >
              Submit Quiz
            </button>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                !activeCategory ? 'bg-[#1F3964] text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              All ({quizQuestions.length})
            </button>
            {QUIZ_CATEGORIES.map(cat => {
              const catQuestions = questionsByCategory[cat] || []
              const catAnswered = catQuestions.filter(q => answers[q.id]).length
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    activeCategory === cat ? 'bg-[#1F3964] text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {cat.replace(' & ', '/').replace('Regulatory Deadlines/Requirements', 'Regulatory')} ({catAnswered}/{catQuestions.length})
                </button>
              )
            })}
          </div>
        </div>
      )}

      {activeCategory && (
        <p className="text-sm text-gray-500 mb-4">
          Showing: <strong>{activeCategory}</strong>
          <button
            onClick={() => setActiveCategory(null)}
            className="ml-2 text-[#2E74B5] underline"
          >
            Show all
          </button>
        </p>
      )}

      <div className="space-y-8">
        {filteredQuestions.map((q, idx) => {
          const isCorrect = submitted && answers[q.id] === q.correctAnswer
          const isWrong = submitted && answers[q.id] && answers[q.id] !== q.correctAnswer
          const isUnanswered = submitted && !answers[q.id]

          return (
            <div
              key={q.id}
              id={`q${q.id}`}
              className={`border rounded-xl p-6 transition-colors ${
                isCorrect ? 'border-green-300 bg-green-50' :
                isWrong ? 'border-red-300 bg-red-50' :
                isUnanswered ? 'border-yellow-300 bg-yellow-50' :
                answers[q.id] ? 'border-blue-200 bg-blue-50/30' :
                'border-gray-200 bg-white'
              }`}
            >
              <div className="flex items-start gap-3 mb-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#1F3964] text-white flex items-center justify-center font-bold text-sm">
                  {q.id}
                </span>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-[#2E74B5] uppercase tracking-wide">
                      {q.category}
                    </span>
                    {q.californiaSpecific && (
                      <span className="inline-block bg-amber-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded leading-none" title="This question reflects California-specific law or regulation">
                        CA
                      </span>
                    )}
                  </div>
                  <p className="text-gray-900 font-medium mt-1 text-lg leading-relaxed">
                    {q.question}
                  </p>
                </div>
              </div>

              <div className="space-y-2 ml-13">
                {q.options.map(opt => {
                  const isSelected = answers[q.id] === opt.label
                  const isCorrectOption = submitted && opt.label === q.correctAnswer
                  const isWrongSelection = submitted && isSelected && opt.label !== q.correctAnswer

                  return (
                    <label
                      key={opt.label}
                      className={`flex items-start gap-3 p-3 rounded-lg cursor-pointer transition-colors border ${
                        isCorrectOption ? 'border-green-400 bg-green-100' :
                        isWrongSelection ? 'border-red-400 bg-red-100' :
                        isSelected && !submitted ? 'border-[#2E74B5] bg-blue-50' :
                        'border-transparent hover:bg-gray-50'
                      } ${submitted ? 'cursor-default' : ''}`}
                    >
                      <input
                        type="radio"
                        name={`q${q.id}`}
                        value={opt.label}
                        checked={isSelected}
                        onChange={() => handleAnswer(q.id, opt.label)}
                        disabled={submitted}
                        className="mt-1 h-4 w-4 text-[#2E74B5] accent-[#2E74B5]"
                      />
                      <span className={`text-gray-800 ${isCorrectOption ? 'font-semibold' : ''}`}>
                        <strong className="mr-1">{opt.label}.</strong>
                        {opt.text}
                      </span>
                      {isCorrectOption && submitted && (
                        <span className="ml-auto text-green-600 font-bold text-sm flex-shrink-0">Correct</span>
                      )}
                      {isWrongSelection && (
                        <span className="ml-auto text-red-600 font-bold text-sm flex-shrink-0">Incorrect</span>
                      )}
                    </label>
                  )
                })}
              </div>

              {submitted && (
                <div className="mt-4 ml-13 p-4 bg-white/80 rounded-lg border border-gray-200">
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
                      Read more: {q.articleTitle}
                    </Link>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {!submitted && filteredQuestions.length > 10 && (
        <div className="mt-10 text-center">
          <button
            onClick={handleSubmit}
            disabled={answeredCount === 0}
            className={`px-10 py-4 rounded-lg font-bold text-lg text-white transition-colors ${
              answeredCount === 0
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-[#1F3964] hover:bg-[#162d50]'
            }`}
          >
            Submit Quiz ({answeredCount}/{quizQuestions.length} answered)
          </button>
        </div>
      )}

      {submitted && (
        <div className="mt-10 text-center space-x-4">
          <button
            onClick={handleReset}
            className="px-8 py-3 rounded-lg font-bold bg-[#1F3964] text-white hover:bg-[#162d50] transition-colors"
          >
            Retake Quiz
          </button>
          <Link
            href="/quiz/answer-key"
            className="px-8 py-3 rounded-lg font-bold bg-[#C9A84C] text-white hover:bg-[#b8973b] transition-colors inline-block"
          >
            View Full Answer Key
          </Link>
        </div>
      )}
    </div>
  )
}
