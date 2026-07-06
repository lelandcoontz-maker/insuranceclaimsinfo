'use client'

import { useState } from 'react'
import { CheckCircle2, BadgeCheck, Banknote, CalendarDays, Lock, MapPin, Globe, Briefcase, Clock, Navigation } from 'lucide-react'
import { trackEvent } from '@/lib/analytics'
import { HoneypotField } from '@/components/forms/HoneypotField'

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
    state: '', propertyAddress: '', claimType: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  function update(field: string, value: string) {
    setForm(f => ({ ...f, [field]: value }))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const website = (e.currentTarget.elements.namedItem('website') as HTMLInputElement)?.value ?? ''
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
          lastName: form.lastName,
          email: form.email,
          phone: form.phone,
          wantsReview: true,
          source: 'contact-form',
          state: form.state,
          propertyAddress: form.propertyAddress,
          claimType: form.claimType,
          message: form.message,
          website,
          timestamp: new Date().toISOString(),
        }),
      })
      trackEvent('generate_lead', {
        source: 'contact-form',
        claim_state: form.state || 'unspecified',
        claim_type: form.claimType || 'unspecified',
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
          <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-[#1F3964] mb-3">We'll Be in Touch Soon</h1>
          <p className="text-gray-600 leading-relaxed">
            Thank you, {form.firstName}. We've received your request and will review your information
            and reach out as soon as possible.
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
            Tell us about your claim and we'll reach out as soon as we can.
            No obligation. No fee unless we recover more for you.
          </p>
        </div>
      </div>

      {/* Trust badges */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-600">
            <span className="flex items-center gap-1.5"><BadgeCheck className="w-4 h-4 text-green-600" aria-hidden="true" /> CA License #2B53445</span>
            <span className="flex items-center gap-1.5"><Banknote className="w-4 h-4 text-green-600" aria-hidden="true" /> No Recovery, No Fee</span>
            <span className="flex items-center gap-1.5"><CalendarDays className="w-4 h-4 text-green-600" aria-hidden="true" /> 20+ Years Experience</span>
            <span className="flex items-center gap-1.5"><Lock className="w-4 h-4 text-green-600" aria-hidden="true" /> Your Data Protected</span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Sidebar info */}
          <div className="space-y-5">
            {[
              { Icon: MapPin, title: 'California Claims', desc: 'Licensed PA in California (Lic. #2B53445). I handle claims directly.' },
              { Icon: Globe, title: 'Other States', desc: "I have a nationwide referral network. I'll connect you with a vetted Public Adjuster in your state." },
              { Icon: Briefcase, title: 'No Fee Promise', desc: "Most PA work is contingency — if we don't recover more, you owe nothing." },
              { Icon: Clock, title: 'Response Time', desc: 'I try to respond to every inquiry within 1–2 business days, often sooner.' },
            ].map(item => (
              <div key={item.title} className="flex gap-3">
                <item.Icon className="w-5 h-5 text-[#2E74B5] flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-[#1F3964] text-sm">{item.title}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
              <p className="text-xs text-blue-800 leading-relaxed">
                <strong>Why hire a Public Adjuster?</strong> Insurance companies have
                trained adjusters working for them. A Public Adjuster is the only type of
                adjuster licensed to represent you. Results vary by claim, but having an
                experienced advocate who speaks the carrier&apos;s language often makes a
                significant difference in the outcome.
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  First Name <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <input
                  id="contact-firstName"
                  type="text"
                  value={form.firstName}
                  onChange={e => update('firstName', e.target.value)}
                  aria-required="true"
                  className="w-full border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F3964]"
                />
              </div>
              <div>
                <label htmlFor="contact-lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input
                  id="contact-lastName"
                  type="text"
                  value={form.lastName}
                  onChange={e => update('lastName', e.target.value)}
                  className="w-full border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F3964]"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={form.email}
                  onChange={e => update('email', e.target.value)}
                  aria-required="true"
                  className="w-full border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F3964]"
                />
              </div>
              <div>
                <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  id="contact-phone"
                  type="tel"
                  value={form.phone}
                  onChange={e => update('phone', e.target.value)}
                  className="w-full border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F3964]"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-state" className="block text-sm font-medium text-gray-700 mb-1">State (claim location)</label>
                <select
                  id="contact-state"
                  value={form.state}
                  onChange={e => update('state', e.target.value)}
                  className="w-full border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F3964] bg-white"
                >
                  <option value="">Select state...</option>
                  {US_STATES.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="contact-claimType" className="block text-sm font-medium text-gray-700 mb-1">Type of Claim</label>
                <select
                  id="contact-claimType"
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
              <label htmlFor="contact-address" className="block text-sm font-medium text-gray-700 mb-1">Property Address (loss location)</label>
              <input
                id="contact-address"
                type="text"
                value={form.propertyAddress}
                onChange={e => update('propertyAddress', e.target.value)}
                placeholder="123 Main St, City, CA 90210"
                className="w-full border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F3964]"
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-1">Tell us about your situation</label>
              <textarea
                id="contact-message"
                value={form.message}
                onChange={e => update('message', e.target.value)}
                rows={4}
                placeholder="When did the loss occur? Has a claim been filed? Is the insurer disputing part of the claim? Any other details..."
                className="w-full border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F3964] resize-y"
              />
            </div>

            {error && (
              <p className="text-red-600 text-sm bg-red-50 rounded px-3 py-2" role="alert">{error}</p>
            )}

            <HoneypotField id="contact-website" />

            <button
              type="submit"
              className="w-full bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold py-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C9A84C]"
            >
              Get My Free Claim Review
            </button>

            <p className="text-xs text-gray-500 text-center leading-relaxed">
              By submitting, you consent to being contacted about your insurance claim. Your information
              may be shared with licensed professionals who can assist with your claim. For details,
              see our <a href="/privacy" className="underline hover:text-gray-600">Privacy Policy</a>.
            </p>
          </form>
        </div>

        {/* Service Area */}
        <div className="mt-12 border-t pt-10">
          <div className="flex items-center gap-2 mb-4">
            <Navigation className="w-5 h-5 text-[#2E74B5]" aria-hidden="true" />
            <h2 className="text-xl font-bold text-[#1F3964]">Service Area</h2>
          </div>
          <p className="text-sm text-gray-600 mb-4 leading-relaxed max-w-2xl">
            I serve policyholders throughout Los Angeles County and Orange County. As a Public
            Adjuster, I come to you, whether that means inspecting damage at your property, meeting
            with your insurance company's adjuster, or attending an appraisal hearing on your behalf.
          </p>
          <div className="rounded-lg overflow-hidden border shadow-sm">
            <iframe
              title="Service area: Los Angeles County and Orange County, California"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d424400!2d-118.1!3d33.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            {['Los Angeles County', 'Orange County'].map(area => (
              <span key={area} className="inline-flex items-center gap-1.5 bg-blue-50 text-[#1F3964] text-xs font-medium px-3 py-1.5 rounded-full">
                <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
