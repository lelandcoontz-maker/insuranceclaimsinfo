'use client'

import { useState } from 'react'

interface AccordionSectionProps {
  id?: string
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
}

export function AccordionSection({ id, title, children, defaultOpen = false }: AccordionSectionProps) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div id={id} className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-[#1F3964] text-sm pr-4">{title}</span>
        <svg
          className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="px-5 pb-5 pt-2 text-sm text-gray-700 leading-relaxed border-t border-gray-100">
          {children}
        </div>
      )}
    </div>
  )
}
