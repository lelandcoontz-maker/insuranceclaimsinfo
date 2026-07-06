'use client'

import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import type { CtaVariant } from './ArticleLayout'
import { HoneypotField } from '@/components/forms/HoneypotField'

// Map a CTA variant to a claim type so the lead arrives pre-categorized.
const VARIANT_CLAIM_TYPE: Partial<Record<CtaVariant, string>> = {
  wildfire: 'Fire / Wildfire',
  damage: 'Property Damage',
  appraisal: 'Appraisal Dispute',
}

interface InlineLeadFormProps {
  ctaVariant: CtaVariant
  buttonLabel: string
}

export function InlineLeadForm({ ctaVariant, buttonLabel }: InlineLeadFormProps) {
  const [form, setForm] = useState({ firstName: '', email: '', phone: '' })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  function update(field: keyof typeof form, value: string) {
    setForm(f => ({ ...f, [field]: value }))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const website = (e.currentTarget.elements.namedItem('website') as HTMLInputElement)?.value ?? ''
    if (!form.firstName || !form.email) {
      setError('Please enter your name and email.')
      return
    }
    setError('')
    setSubmitting(true)
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: form.firstName,
          email: form.email,
          phone: form.phone,
          wantsReview: true,
          source: `article-cta-${ctaVariant}`,
          claimType: VARIANT_CLAIM_TYPE[ctaVariant] ?? '',
          website,
          timestamp: new Date().toISOString(),
        }),
      })
      if (!res.ok) throw new Error('Request failed')
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please try again or use the contact page.')
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="max-w-md mx-auto text-center" role="status">
        <CheckCircle2 className="w-10 h-10 text-green-500 mx-auto mb-3" aria-hidden="true" />
        <p className="text-[#1F3964] font-semibold mb-1">Thank you, {form.firstName}.</p>
        <p className="text-gray-600 text-sm leading-relaxed">
          We&apos;ve received your request and will reach out as soon as possible &mdash;
          usually within 1&ndash;2 business days.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto text-left">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label htmlFor="inline-firstName" className="sr-only">First name</label>
          <input
            id="inline-firstName"
            type="text"
            value={form.firstName}
            onChange={e => update('firstName', e.target.value)}
            placeholder="First name *"
            aria-required="true"
            className="w-full border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F3964]"
          />
        </div>
        <div>
          <label htmlFor="inline-email" className="sr-only">Email address</label>
          <input
            id="inline-email"
            type="email"
            value={form.email}
            onChange={e => update('email', e.target.value)}
            placeholder="Email address *"
            aria-required="true"
            className="w-full border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F3964]"
          />
        </div>
      </div>
      <div className="mt-3">
        <label htmlFor="inline-phone" className="sr-only">Phone (optional)</label>
        <input
          id="inline-phone"
          type="tel"
          value={form.phone}
          onChange={e => update('phone', e.target.value)}
          placeholder="Phone (optional)"
          className="w-full border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F3964]"
        />
      </div>

      {error && (
        <p className="text-red-600 text-sm bg-red-50 rounded px-3 py-2 mt-3" role="alert">{error}</p>
      )}

      <HoneypotField id={`inline-website-${ctaVariant}`} />

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-[#C9A84C] hover:bg-[#A8872E] disabled:opacity-60 text-white font-semibold py-3 rounded-lg transition-colors mt-3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C9A84C]"
      >
        {submitting ? 'Sending…' : buttonLabel}
      </button>

      <p className="text-xs text-gray-500 text-center leading-relaxed mt-3">
        No obligation. No fee unless we recover more for you. By submitting, you consent to
        being contacted about your claim. See our{' '}
        <a href="/privacy" className="underline hover:text-gray-600">Privacy Policy</a>.
      </p>
    </form>
  )
}
