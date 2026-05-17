'use client'

import { useState } from 'react'

interface Props {
  variant?: 'inline' | 'card'
  source?: string
}

export function NewsletterSignup({ variant = 'card', source = 'article' }: Props) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.')
      return
    }
    setError('')
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          source: `newsletter-${source}`,
          claimType: 'newsletter',
          firstName: '',
          message: 'Newsletter signup',
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
      <div className={variant === 'card' ? 'bg-green-50 border border-green-200 rounded-lg p-4 text-center' : ''}>
        <p className="text-green-800 text-sm font-medium">
          You&apos;re in. We&apos;ll send updates when new guides are published.
        </p>
      </div>
    )
  }

  if (variant === 'inline') {
    return (
      <form onSubmit={handleSubmit} className="flex gap-2 items-center my-4">
        <label htmlFor={`newsletter-${source}`} className="sr-only">Email for updates</label>
        <input
          id={`newsletter-${source}`}
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F3964]"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-[#1F3964] text-white text-sm font-medium rounded-lg hover:bg-[#162d52] transition-colors"
        >
          Notify Me
        </button>
        {error && <p className="text-red-600 text-xs">{error}</p>}
      </form>
    )
  }

  return (
    <div className="border border-gray-200 rounded-lg p-5 my-8 bg-[#FAFBFD]">
      <p className="text-sm font-semibold text-[#1F3964] mb-1">
        Get notified when we publish new guides
      </p>
      <p className="text-xs text-gray-500 mb-3">
        No spam. Only new articles and important updates for California policyholders.
      </p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <label htmlFor={`newsletter-card-${source}`} className="sr-only">Email for updates</label>
        <input
          id={`newsletter-card-${source}`}
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F3964]"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-[#1F3964] text-white text-sm font-medium rounded-lg hover:bg-[#162d52] transition-colors whitespace-nowrap"
        >
          Sign Up
        </button>
      </form>
      {error && <p className="text-red-600 text-xs mt-1">{error}</p>}
      <p className="text-xs text-gray-400 mt-2">Unsubscribe anytime. Your email is never shared.</p>
    </div>
  )
}
