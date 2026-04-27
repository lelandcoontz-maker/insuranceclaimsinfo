'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const STORAGE_KEY = 'icii-notice-dismissed-v1'

export function SiteNotice() {
  const [dismissed, setDismissed] = useState(true)

  useEffect(() => {
    try {
      setDismissed(localStorage.getItem(STORAGE_KEY) === '1')
    } catch {
      setDismissed(false)
    }
  }, [])

  const close = () => {
    try { localStorage.setItem(STORAGE_KEY, '1') } catch {}
    setDismissed(true)
  }

  if (dismissed) return null

  return (
    <div className="bg-amber-50 border-b border-amber-200 text-amber-900 text-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-start gap-3">
        <span className="text-base flex-shrink-0" aria-hidden>⚠️</span>
        <p className="flex-1 leading-relaxed">
          <strong>Notice:</strong> This website recently went live and is still being
          edited for accuracy. Content is provided for general information only —{' '}
          <strong>nothing on this site is legal advice</strong>. Use at your own risk and
          consult a licensed professional about your specific situation.{' '}
          <Link href="/contact" className="underline font-medium hover:text-amber-950">
            Contact us with questions or comments
          </Link>
          .
        </p>
        <button
          type="button"
          onClick={close}
          aria-label="Dismiss notice"
          className="flex-shrink-0 text-amber-800 hover:text-amber-950 text-lg leading-none px-1"
        >
          ✕
        </button>
      </div>
    </div>
  )
}
