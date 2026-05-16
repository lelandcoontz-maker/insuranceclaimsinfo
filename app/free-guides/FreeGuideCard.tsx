'use client'

import { useState } from 'react'
import { GuideDownloadModal } from '@/components/content/GuideDownloadModal'
import {
  Dices, Scale, Ruler, Flame, ClipboardCheck, TrendingDown, Armchair, BookOpen, Gavel,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const ICON_MAP: Record<string, LucideIcon> = {
  dices: Dices,
  gavel: Gavel,
  ruler: Ruler,
  flame: Flame,
  scale: Scale,
  'clipboard-check': ClipboardCheck,
  'trending-down': TrendingDown,
  armchair: Armchair,
  'book-open': BookOpen,
}

export interface FreeGuide {
  id: string
  name: string
  description: string
  iconName: string
  tag: string
  tagColor: string
  fileName: string
  pages: number
  features: string[]
}

export function FreeGuideCard({ guide }: { guide: FreeGuide }) {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col hover:shadow-md transition-shadow">
        <div className="flex items-start gap-3 mb-3">
          {(() => { const Icon = ICON_MAP[guide.iconName]; return Icon ? <Icon className="w-7 h-7 text-[#2E74B5] flex-shrink-0 mt-0.5" aria-hidden="true" /> : null })()}
          <div>
            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${guide.tagColor}`}>
              {guide.tag}
            </span>
            <h3 className="font-bold text-gray-900 mt-1 leading-tight">{guide.name}</h3>
          </div>
        </div>

        <p className="text-sm text-gray-600 leading-relaxed mb-4">{guide.description}</p>

        <ul className="text-xs text-gray-500 space-y-1.5 mb-5 flex-1">
          {guide.features.map((f, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-green-500 flex-shrink-0">&#10003;</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto">
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-2xl font-bold text-green-600">FREE</span>
            <span className="text-xs text-gray-400">{guide.pages}-page PDF download</span>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="w-full bg-[#1F3964] hover:bg-[#162847] text-white font-semibold py-3 rounded-lg transition-colors text-sm"
          >
            Download Free Guide
          </button>
        </div>
      </div>

      {showModal && (
        <GuideDownloadModal
          guideName={guide.name}
          guideFile={guide.fileName}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  )
}
