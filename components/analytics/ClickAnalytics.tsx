'use client'

import { useEffect } from 'react'
import { trackEvent } from '@/lib/analytics'

export function ClickAnalytics() {
  useEffect(() => {
    function handler(e: MouseEvent) {
      const target = e.target as Element | null
      if (!target || typeof target.closest !== 'function') return
      const anchor = target.closest('a') as HTMLAnchorElement | null
      if (!anchor) return

      const rawHref = anchor.getAttribute('href') || ''
      if (!rawHref) return

      if (rawHref.startsWith('tel:')) {
        trackEvent('tel_click', { phone: rawHref.slice(4) })
        return
      }

      if (rawHref.startsWith('mailto:')) {
        const dest = rawHref.slice(7).split('?')[0]
        trackEvent('mailto_click', { email: dest })
        return
      }
    }

    document.addEventListener('click', handler, { capture: true })
    return () => document.removeEventListener('click', handler, { capture: true })
  }, [])

  return null
}
