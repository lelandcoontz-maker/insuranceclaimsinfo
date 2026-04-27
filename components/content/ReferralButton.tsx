'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

type ReferralOption = {
  label: string
  href: string
  description?: string
}

type Props = {
  label?: string
  options: ReferralOption[]
}

export function ReferralButton({ label = 'Request a Referral', options }: Props) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!open) return
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div ref={ref} className="relative inline-block">
      <button
        type="button"
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
        aria-haspopup="true"
        className="inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
      >
        {label}
        <span aria-hidden className={`transition-transform ${open ? 'rotate-180' : ''}`}>▾</span>
      </button>

      {open && (
        <div
          role="menu"
          className="absolute left-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-20 py-2"
        >
          {options.map(opt => (
            <Link
              key={opt.href}
              href={opt.href}
              role="menuitem"
              className="block px-4 py-3 hover:bg-[#EFF4FB] border-b border-gray-100 last:border-0"
              onClick={() => setOpen(false)}
            >
              <div className="font-semibold text-[#1F3964] text-sm">{opt.label}</div>
              {opt.description && (
                <div className="text-xs text-gray-600 mt-1 leading-snug">{opt.description}</div>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
