'use client'

import { useState } from 'react'

interface LeadCaptureFormProps {
  claimType: string
  heading?: string
  description?: string
}

export function LeadCaptureForm({ claimType, heading, description }: LeadCaptureFormProps) {
  const [form, setForm] = useState({ firstName: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.firstName || !form.email) {
      setError('Please provide your name and email.')
      return
    }
    setError('')
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: form.firstName,
          email: form.email,
          source: `other-claims-${claimType}`,
          claimType,
          message: `Phone: ${form.phone || 'not provided'} | ${form.message}`,
          timestamp: new Date().toISOString(),
        }),
      })
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please try again.')
    }
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
        <div className="text-3xl mb-2">✅</div>
        <p className="font-bold text-green-900 mb-1">Thank You, {form.firstName}!</p>
        <p className="text-green-800 text-sm">We&apos;ll review your information and reach out within 1 business day.</p>
      </div>
    )
  }

  return (
    <div className="bg-[#EFF4FB] border border-blue-100 rounded-xl p-6">
      <h3 className="font-bold text-[#1F3964] text-lg mb-1">
        {heading || 'Get Help With Your Claim'}
      </h3>
      <p className="text-gray-600 text-sm mb-4">
        {description || 'Tell us about your situation and we\'ll reach out within 1 business day. No obligation.'}
      </p>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <input
            type="text"
            placeholder="First Name *"
            value={form.firstName}
            onChange={e => setForm(f => ({ ...f, firstName: e.target.value }))}
            className="w-full border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F3964]"
          />
          <input
            type="email"
            placeholder="Email *"
            value={form.email}
            onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
            className="w-full border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F3964]"
          />
        </div>
        <input
          type="tel"
          placeholder="Phone (optional)"
          value={form.phone}
          onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
          className="w-full border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F3964]"
        />
        <textarea
          placeholder="Briefly describe your situation..."
          value={form.message}
          onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
          rows={3}
          className="w-full border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F3964] resize-y"
        />
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <button
          type="submit"
          className="w-full bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold py-3 rounded-lg transition-colors"
        >
          Request Free Consultation
        </button>
        <p className="text-xs text-gray-400 text-center">
          Your information is never sold or shared. By submitting, you consent to being contacted about your claim.
        </p>
      </form>
    </div>
  )
}
