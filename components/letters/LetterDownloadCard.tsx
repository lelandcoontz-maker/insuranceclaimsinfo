'use client'

import { useState, useId } from 'react'

interface Props {
  id: string
  title: string
  regulation: string
  description: string
  letterContent: string
}

export function LetterDownloadCard({ id, title, regulation, description, letterContent }: Props) {
  const [showPreview, setShowPreview] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [wantsReview, setWantsReview] = useState(false)
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const uid = useId()
  const modalTitleId = `${uid}-modal-title`
  const previewId = `${uid}-preview`

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
          source: `letter-template-${id}`,
          wantsReview,
          message: `Downloaded template letter: ${title}`,
          timestamp: new Date().toISOString(),
        }),
      })
    } catch {
      // Don't block the download if API fails
    }

    // Generate and download the letter as a text file
    const blob = new Blob([letterContent], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `${id}.txt`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)

    setSubmitting(false)
    setShowForm(false)
  }

  return (
    <div id={id} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
      {/* Card header */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-bold text-[#1F3964] text-base leading-snug">{title}</h3>
          <span className="shrink-0 text-xs font-mono bg-blue-50 text-[#1F3964] px-2 py-1 rounded">
            {regulation}
          </span>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">{description}</p>
        <div className="flex gap-2">
          <button
            onClick={() => setShowPreview(p => !p)}
            aria-expanded={showPreview}
            aria-controls={previewId}
            className="text-sm font-medium text-[#2E74B5] hover:text-[#1F3964] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2E74B5] rounded"
          >
            {showPreview ? 'Hide Preview' : 'Preview Letter'}
          </button>
          <span className="text-gray-300" aria-hidden="true">|</span>
          <button
            onClick={() => setShowForm(true)}
            className="text-sm font-semibold text-[#C9A84C] hover:text-[#A8872E] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C9A84C] rounded"
          >
            Download Template
          </button>
        </div>
      </div>

      {/* Preview */}
      {showPreview && (
        <div id={previewId} className="border-t border-gray-100 bg-gray-50 p-5" role="region" aria-label={`Preview of ${title}`}>
          <pre className="whitespace-pre-wrap text-xs text-gray-700 font-mono leading-relaxed max-h-96 overflow-y-auto">
            {letterContent}
          </pre>
        </div>
      )}

      {/* Email capture form */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setShowForm(false)} onKeyDown={e => { if (e.key === 'Escape') setShowForm(false) }}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full" role="dialog" aria-modal="true" aria-labelledby={modalTitleId} onClick={e => e.stopPropagation()}>
            <div className="bg-[#1F3964] rounded-t-2xl px-6 py-5 text-white">
              <div className="flex justify-between items-start">
                <div>
                  <h2 id={modalTitleId} className="text-lg font-bold mb-1">Download Template Letter</h2>
                  <p className="text-blue-100 text-sm leading-relaxed">{title}</p>
                </div>
                <button
                  onClick={() => setShowForm(false)}
                  className="text-blue-300 hover:text-white text-xl leading-none mt-0.5 focus:outline-none focus:ring-2 focus:ring-white rounded"
                  aria-label="Close dialog"
                >
                  &times;
                </button>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label htmlFor={`${uid}-firstName`} className="block text-sm font-medium text-gray-700 mb-1">
                  First Name <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <input
                  id={`${uid}-firstName`}
                  type="text"
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
                  placeholder="e.g. John"
                  autoFocus
                  aria-required="true"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F3964]"
                />
              </div>
              <div>
                <label htmlFor={`${uid}-email`} className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <input
                  id={`${uid}-email`}
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
                  <strong>Yes</strong> &mdash; I&apos;d also like a free claim review from a
                  licensed California Public Adjuster (no obligation).
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
                {submitting ? 'Preparing...' : 'Download Template Letter'}
              </button>
              <p className="text-xs text-gray-400 text-center leading-relaxed">
                No spam &mdash; ever. Your information is used only to deliver your template
                and, if requested, to contact you about your claim.
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
