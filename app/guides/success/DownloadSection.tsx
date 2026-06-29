'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { trackEvent } from '@/lib/analytics'

export function DownloadSection() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')

  const [loading, setLoading] = useState(true)
  const [productName, setProductName] = useState('')
  const [downloadUrl, setDownloadUrl] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    if (!sessionId) {
      setError('No purchase session found.')
      setLoading(false)
      return
    }

    fetch(`/api/download?session_id=${sessionId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(data.error)
        } else {
          setProductName(data.productName)
          setDownloadUrl(data.downloadUrl)
        }
        setLoading(false)
      })
      .catch(() => {
        setError('Unable to load download. Please contact us.')
        setLoading(false)
      })
  }, [sessionId])

  if (loading) {
    return (
      <div className="bg-white border border-gray-200 rounded-xl p-8 mb-8">
        <p className="text-gray-500">Loading your download...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-8 mb-8">
        <p className="text-amber-800 mb-2">{error}</p>
        <p className="text-sm text-amber-600">
          If you completed your purchase, please{' '}
          <a href="/contact" className="underline">
            contact us
          </a>{' '}
          and we&apos;ll send your guide manually.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-white border-2 border-[#C9A84C] rounded-xl p-8 mb-8">
      <p className="font-bold text-[#1F3964] text-lg mb-2">{productName}</p>
      <a
        href={downloadUrl}
        download
        onClick={() => trackEvent('pdf_download', { product_name: productName, source: 'stripe-success' })}
        className="inline-block bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-8 py-3 rounded-lg transition-colors"
      >
        Download Your Guide (PDF)
      </a>
      <p className="text-xs text-gray-400 mt-3">
        Bookmark this page — your download link will remain active.
      </p>
    </div>
  )
}
