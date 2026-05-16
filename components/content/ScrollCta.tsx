'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export function ScrollCta() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    function handleScroll() {
      if (dismissed) return
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = window.scrollY / scrollHeight
      setVisible(scrolled > 0.5)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [dismissed])

  if (dismissed || !visible) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#1F3964] text-white shadow-lg transform transition-transform duration-300"
      role="complementary"
      aria-label="Get help with your claim"
    >
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <p className="text-sm">
          <span className="font-semibold">Need help with your claim?</span>
          <span className="hidden sm:inline"> Free consultation — no obligation, no upfront cost.</span>
        </p>
        <div className="flex items-center gap-2 flex-shrink-0">
          <Link
            href="/contact"
            className="bg-[#C9A84C] hover:bg-[#A8872E] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            Free Review
          </Link>
          <button
            onClick={() => setDismissed(true)}
            className="text-blue-300 hover:text-white p-1 transition-colors"
            aria-label="Dismiss banner"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
