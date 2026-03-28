'use client'

import { useState, useRef, useEffect } from 'react'

interface Props {
  checkedCount: number
  estimatedTotal: number
  onSubmit: (firstName: string, email: string, wantsReview: boolean) => void
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

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!firstName.trim()) { setError('Please enter your first name.'); return }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.')
      return
    }
    setError('')
    setSubmitting(true)
    await onSubmit(firstName.trim(), email.trim(), wantsReview)
    setSubmitting(false)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full">

        {/* Header */}
        <div className="bg-[#1F3964] rounded-t-2xl px-6 py-5 text-white">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-xl font-bold mb-1">Almost There!</h2>
              <p className="text-blue-200 text-sm">
                Your inventory is ready to download.
              </p>
            </div>
            <button onClick={onClose} className="text-blue-300 hover:text-white text-xl leading-none mt-0.5">×</button>
          </div>
          {checkedCount > 0 && (
            <div className="mt-4 bg-white/10 rounded-lg px-4 py-3 flex gap-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-[#C9A84C]">{checkedCount}</p>
                <p className="text-xs text-blue-200">items checked</p>
              </div>
              {estimatedTotal > 0 && (
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-300">
                    ${estimatedTotal.toLocaleString()}
                  </p>
                  <p className="text-xs text-blue-200">estimated value</p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              ref={firstRef}
              type="text"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              placeholder="e.g. John"
              className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F3964]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F3964]"
            />
            <p className="text-xs text-gray-400 mt-1">
              We'll email a link so you can return to your inventory anytime.
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
              <strong>Yes</strong> — I'd like a free claim review from a licensed
              California Public Adjuster (no obligation, no fee unless we recover more for you).
            </span>
          </label>

          {error && (
            <p className="text-red-600 text-sm bg-red-50 rounded px-3 py-2">{error}</p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-[#C9A84C] hover:bg-[#A8872E] disabled:opacity-60 text-white font-semibold py-3 rounded-lg transition-colors text-sm"
          >
            {submitting ? 'Preparing...' : '📥 Download My Inventory (Excel)'}
          </button>

          <p className="text-xs text-gray-400 text-center leading-relaxed">
            No spam — ever. Your information is used only to deliver your inventory
            and, if requested, to contact you about your claim.
          </p>
        </form>
      </div>
    </div>
  )
}
