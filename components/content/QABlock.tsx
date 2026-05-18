import type { ReactNode } from 'react'
import { JsonLd } from '@/components/seo/JsonLd'

export interface QAPair {
  question: string
  answer: string
  displayAnswer?: ReactNode
}

interface Props {
  pairs: QAPair[]
}

export function QABlock({ pairs }: Props) {
  return (
    <>
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: pairs.map(p => ({
          '@type': 'Question',
          name: p.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: p.answer,
          },
        })),
      }} />
      <div className="my-8 space-y-4">
        {pairs.map((pair, i) => (
          <details key={i} className="group border border-gray-200 rounded-lg">
            <summary className="flex items-center justify-between px-4 py-3 cursor-pointer text-sm font-semibold text-[#1F3964] hover:bg-gray-50 rounded-lg">
              <span>{pair.question}</span>
              <svg
                className="w-4 h-4 flex-shrink-0 text-gray-400 group-open:rotate-180 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-4 pb-3 text-sm text-gray-700 leading-relaxed">
              {pair.displayAnswer ?? pair.answer}
            </div>
          </details>
        ))}
      </div>
    </>
  )
}
