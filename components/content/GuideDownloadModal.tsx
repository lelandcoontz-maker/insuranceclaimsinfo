'use client'

import { useState, useRef, useEffect } from 'react'

interface Props {
  guideName: string
  guideFile: string
  onClose: () => void
}

export function GuideDownloadModal({ guideName, guideFile, onClose }: Props) {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [wantsReview, setWantsReview] = useState(false)
  const [error, setError] = useState('')
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

    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: firstName.trim(),
          email: email.trim(),
          source: `free-guide-${guideFile}`,
          wantsReview,
          message: `Downloaded free guide: ${guideName}`,
          timestamp: new Date().toISOString(),
        }),
      })
    } catch {
      // Don't block the download if the lead API fails
    }

    // Trigger download
    const link = document.createElement('a')
    link.href = `/guides/free/${guideFile}`
    link.download = guideFile
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    setSubmitting(false)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={onClose} onKeyDown={e => { if (e.key === 'Escape') onClose() }}>
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full" role="dialog" aria-modal="true" aria-labelledby="guide-modal-title" onClick={e => e.stopPropagation()}>

        {/* Header */}
        <div className="bg-[#1F3964] rounded-t-2xl px-6 py-5 text-white">
          <div className="flex justify-between items-start">
            <div>
              <h2 id="guide-modal-title" className="text-xl font-bold mb-1">Get Your Free Guide</h2>
              <p className="text-blue-100 text-sm leading-relaxed">
                {guideName}
              </p>
            </div>
            <button onClick={onClose} className="text-blue-300 hover:text-white text-xl leading-none mt-0.5 focus:outline-none focus:ring-2 focus:ring-white rounded" aria-label="Close dialog">&times;</button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label htmlFor="guide-firstName" className="block text-sm font-medium text-gray-700 mb-1">
              First Name <span className="text-red-500" aria-hidden="true">*</span>
            </label>
            <input
              id="guide-firstName"
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
            <label htmlFor="guide-email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address <span className="text-red-500" aria-hidden="true">*</span>
            </label>
            <input
              id="guide-email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@example.com"
              aria-required="true"
              className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F3964]"
            />
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
              California Public Adjuster (no obligation).
            </span>
          </label>

          {error && (
            <p className="text-red-600 text-sm bg-red-50 rounded px-3 py-2" role="alert">{error}</p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-[#C9A84C] hover:bg-[#A8872E] disabled:opacity-60 text-white font-semibold py-3 rounded-lg transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C9A84C]"
          >
            {submitting ? 'Preparing download...' : 'Download Free Guide (PDF)'}
          </button>

          <p className="text-xs text-gray-400 text-center leading-relaxed">
            No spam &mdash; ever. Your information is used only to deliver your guide
            and, if requested, to contact you about your claim.
          </p>
        </form>
      </div>
    </div>
  )
}
