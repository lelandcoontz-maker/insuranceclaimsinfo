'use client'

import { useState } from 'react'
import type { Product } from '@/lib/products'

export function GuideCard({ product }: { product: Product }) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleBuy() {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId: product.id }),
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        setError(data.error || 'Something went wrong.')
        setLoading(false)
      }
    } catch {
      setError('Unable to start checkout. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col hover:shadow-md transition-shadow">
      <div className="flex items-start gap-3 mb-3">
        <span className="text-3xl flex-shrink-0">{product.icon}</span>
        <div>
          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${product.tagColor}`}>
            {product.tag}
          </span>
          <h3 className="font-bold text-gray-900 mt-1 leading-tight">{product.name}</h3>
        </div>
      </div>

      <p className="text-sm text-gray-600 leading-relaxed mb-4">{product.description}</p>

      <ul className="text-xs text-gray-500 space-y-1.5 mb-5 flex-1">
        {product.features.map((f, i) => (
          <li key={i} className="flex gap-2">
            <span className="text-green-500 flex-shrink-0">&#10003;</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-2xl font-bold text-[#1F3964]">{product.priceDisplay}</span>
          <span className="text-xs text-gray-400">PDF instant download</span>
        </div>

        {error && <p className="text-red-600 text-xs mb-2">{error}</p>}

        <button
          onClick={handleBuy}
          disabled={loading}
          className="w-full bg-[#C9A84C] hover:bg-[#A8872E] disabled:bg-gray-300 text-white font-semibold py-3 rounded-lg transition-colors text-sm"
        >
          {loading ? 'Redirecting to checkout...' : `Buy Now — ${product.priceDisplay}`}
        </button>

        <p className="text-xs text-gray-400 text-center mt-2">
          Secure checkout via Stripe. 30-day money-back guarantee.
        </p>
      </div>
    </div>
  )
}
