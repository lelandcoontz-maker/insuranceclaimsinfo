'use client'

import { useState, useRef, useEffect } from 'react'
import { HoneypotField } from '@/components/forms/HoneypotField'

interface Props {
  checkedCount: number
  estimatedTotal: number
  onSubmit: (firstName: string, email: string, wantsReview: boolean, website: string) => void
  onClose: () => void
}

export function LeadGateModal({ checkedCount, estimatedTotal, onSubmit, onClose }: Props) {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail]         = useState('')
  const [wantsReview, setWantsReview] = useState(false)
  const [error, setError]         = useState('')
  const [submitting, setSubmitting] = useState(false)
  const firstRef = useRef<HTMLInputElement>(null)

  useEffect(() => { firstRef.current?.focus() }, [])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const website = (e.currentTarget.elements.namedItem('website') as HTMLInputElement)?.value ?? ''
    if (!firstName.trim()) { setError('Please enter your first name.'); return }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.')
      return
    }
    setError('')
    setSubmitting(true)
    await onSubmit(firstName.trim(), email.trim(), wantsReview, website)
    setSubmitting(false)
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Escape') {
      onClose()
      return
    }
    if (e.key === 'Tab') {
      const modal = e.currentTarget as HTMLElement
      const focusable = modal.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
      if (focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full" role="dialog" aria-modal="true" aria-labelledby="leadgate-modal-title" onClick={e => e.stopPropagation()} onKeyDown={handleKeyDown}>

        {/* Header */}
        <div className="bg-[#1F3964] rounded-t-2xl px-6 py-5 text-white">
          <div className="flex justify-between items-start">
            <div>
              <h2 id="leadgate-modal-title" className="text-xl font-bold mb-1">Almost There!</h2>
              <p className="text-blue-100 text-sm">
                Your inventory is ready to download.
              </p>
            </div>
            <button onClick={onClose} className="text-blue-300 hover:text-white text-xl leading-none mt-0.5 focus:outline-none focus:ring-2 focus:ring-white rounded" aria-label="Close dialog">&times;</button>
          </div>
          {checkedCount > 0 && (
            <div className="mt-4 bg-white/10 rounded-lg px-4 py-3 flex gap-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-[#C9A84C]">{checkedCount}</p>
                <p className="text-xs text-blue-100">items checked</p>
              </div>
              {estimatedTotal > 0 && (
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-300">
                    ${estimatedTotal.toLocaleString()}
                  </p>
                  <p className="text-xs text-blue-100">estimated value</p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label htmlFor="leadgate-firstName" className="block text-sm font-medium text-gray-700 mb-1">
              First Name <span className="text-red-500" aria-hidden="true">*</span>
            </label>
            <input
              id="leadgate-firstName"
              ref={firstRef}
              type="text"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              placeholder="e.g. John"
              aria-required="true"
              className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F3964]"
            />
          </div>

          <div>
            <label htmlFor="leadgate-email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address <span className="text-red-500" aria-hidden="true">*</span>
            </label>
            <input
              id="leadgate-email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@example.com"
              aria-required="true"
              className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F3964]"
            />
            <p className="text-xs text-gray-500 mt-1">
              We&apos;ll email a link so you can return to your inventory anytime.
            </p>
          </div>

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={wantsReview}
              onChange={e => setWantsReview(e.target.checked)}
              className="mt-0.5 w-4 h-4 accent-[#1F3964]"
            />
            <span className="text-sm text-gray-700">
              <strong>Yes</strong> &mdash; I&apos;d like a free claim review from a licensed
              California Public Adjuster (no obligation, no fee unless we recover more for you).
            </span>
          </label>

          {error && (
            <p className="text-red-600 text-sm bg-red-50 rounded px-3 py-2" role="alert">{error}</p>
          )}

          <HoneypotField id="leadgate-website" />

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-[#C9A84C] hover:bg-[#A8872E] disabled:opacity-60 text-white font-semibold py-3 rounded-lg transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C9A84C]"
          >
            {submitting ? 'Preparing...' : 'Download My Inventory (Excel)'}
          </button>

          <p className="text-xs text-gray-500 text-center leading-relaxed">
            No spam &mdash; ever. Your information is used only to deliver your inventory
            and, if requested, to contact you about your claim.
          </p>
        </form>
      </div>
    </div>
  )
}
