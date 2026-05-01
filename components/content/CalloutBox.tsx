const VARIANTS = {
  tip: {
    bg: 'bg-sky-50 border-sky-200',
    icon: '💡',
    heading: 'text-sky-900',
    text: 'text-sky-800',
  },
  warning: {
    bg: 'bg-amber-50 border-amber-200',
    icon: '⚠️',
    heading: 'text-amber-900',
    text: 'text-amber-800',
  },
  legal: {
    bg: 'bg-gray-50 border-gray-200',
    icon: '⚖️',
    heading: 'text-gray-900',
    text: 'text-gray-700',
  },
  important: {
    bg: 'bg-red-50 border-red-200',
    icon: '🚨',
    heading: 'text-red-900',
    text: 'text-red-800',
  },
  info: {
    bg: 'bg-blue-50 border-blue-200',
    icon: 'ℹ️',
    heading: 'text-blue-900',
    text: 'text-blue-800',
  },
} as const

interface CalloutBoxProps {
  variant: keyof typeof VARIANTS
  title?: string
  children: React.ReactNode
}

export function CalloutBox({ variant, title, children }: CalloutBoxProps) {
  const v = VARIANTS[variant]
  return (
    <div className={`rounded-lg border p-4 my-6 ${v.bg}`}>
      <div className="flex gap-3">
        <span className="text-lg flex-shrink-0">{v.icon}</span>
        <div>
          {title && <p className={`font-semibold text-sm mb-1 ${v.heading}`}>{title}</p>}
          <div className={`text-sm leading-relaxed ${v.text}`}>{children}</div>
        </div>
      </div>
    </div>
  )
}
