'use client'

import { useState } from 'react'

const US_STATES = [
  'Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware',
  'Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky',
  'Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi',
  'Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico',
  'New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania',
  'Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont',
  'Virginia','Washington','West Virginia','Wisconsin','Wyoming',
]

const CLAIM_TYPES = [
  'Fire / Wildfire','Water / Flood','Smoke / Soot','Wind / Storm','Earthquake',
  'Theft / Vandalism','Mold','Vehicle Impact','Other',
]

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    state: '', claimType: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  function update(field: string, value: string) {
    setForm(f => ({ ...f, [field]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.firstName || !form.email) {
      setError('Please fill in your name and email.')
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
          wantsReview: true,
          source: 'contact-form',
          state: form.state,
          claimType: form.claimType,
          message: `${form.lastName ? 'Last: ' + form.lastName + ' | ' : ''}Phone: ${form.phone || 'not provided'} | ${form.message}`,
          timestamp: new Date().toISOString(),
        }),
      })
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please try again or email us directly.')
    }
  }

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="max-w-md text-center">
          <div className="text-5xl mb-4">✅</div>
          <h1 className="text-2xl font-bold text-[#1F3964] mb-3">We'll Be in Touch Soon</h1>
          <p className="text-gray-600 leading-relaxed">
            Thank you, {form.firstName}. We've received your request and will review your information
            and reach out within 1 business day.
          </p>
          {form.state && form.state !== 'California' && (
            <div className="mt-6 bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-800">
              <strong>Note:</strong> You indicated your claim is in {form.state}.
              We'll connect you with a trusted Public Adjuster in your state.
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Header */}
      <div className="bg-[#1F3964] text-white py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-3">Free Claim Review</h1>
          <p className="text-blue-200 max-w-xl leading-relaxed">
            Tell us about your claim and we'll reach out within 1 business day.
            No obligation. No fee unless we recover more for you.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Sidebar info */}
          <div className="space-y-5">
            {[
              { icon: '📍', title: 'California Claims', desc: 'Licensed PA in California (Lic. #2B53445). I handle claims directly.' },
              { icon: '🌎', title: 'Other States', desc: "I have a nationwide referral network. I'll connect you with a vetted Public Adjuster in your state." },
              { icon: '💼', title: 'No Fee Promise', desc: "Most PA work is contingency — if we don't recover more, you owe nothing." },
              { icon: '⏱', title: 'Response Time', desc: 'I respond to every inquiry within 1 business day, usually same day.' },
            ].map(item => (
              <div key={item.title} className="flex gap-3">
                <span className="text-xl flex-shrink-0">{item.icon}</span>
                <div>
                  <p className="font-semibold text-[#1F3964] text-sm">{item.title}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={form.firstName}
                  onChange={e => update('firstName', e.target.value)}
                  className="w-full border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F3964]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input
                  type="text"
                  value={form.lastName}
                  onChange={e => update('lastName', e.target.value)}
                  className="w-full border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F3964]"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={e => update('email', e.target.value)}
                  className="w-full border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F3964]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={e => update('phone', e.target.value)}
                  className="w-full border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F3964]"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">State (claim location)</label>
                <select
                  value={form.state}
                  onChange={e => update('state', e.target.value)}
                  className="w-full border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F3964] bg-white"
                >
                  <option value="">Select state...</option>
                  {US_STATES.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Type of Claim</label>
                <select
                  value={form.claimType}
                  onChange={e => update('claimType', e.target.value)}
                  className="w-full border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F3964] bg-white"
                >
                  <option value="">Select type...</option>
                  {CLAIM_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tell us about your situation</label>
              <textarea
                value={form.message}
                onChange={e => update('message', e.target.value)}
                rows={4}
                placeholder="When did the loss occur? Has a claim been filed? Is the insurer disputing part of the claim? Any other details..."
                className="w-full border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F3964] resize-y"
              />
            </div>

            {error && (
              <p className="text-red-600 text-sm bg-red-50 rounded px-3 py-2">{error}</p>
            )}

            <button
              type="submit"
              className="w-full bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold py-3 rounded-lg transition-colors"
            >
              Submit — Request Free Claim Review
            </button>

            <p className="text-xs text-gray-400 text-center leading-relaxed">
              Your information is never sold or shared with third parties.
              By submitting, you consent to being contacted about your insurance claim.
            </p>
          </form>
        </div>
      </div>
    </>
  )
}
