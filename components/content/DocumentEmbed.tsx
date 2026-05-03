interface DocumentEmbedProps {
  title: string
  source: string
  date?: string
  type?: 'bulletin' | 'notice' | 'opinion' | 'guide' | 'publication'
  sourceUrl?: string
  children: React.ReactNode
}

const TYPE_LABELS: Record<string, string> = {
  bulletin: 'Bulletin',
  notice: 'Notice',
  opinion: "Commissioner's Opinion",
  guide: 'Consumer Guide',
  publication: 'Publication',
}

export function DocumentEmbed({ title, source, date, type = 'publication', sourceUrl, children }: DocumentEmbedProps) {
  const label = TYPE_LABELS[type] || 'Publication'
  return (
    <div className="my-8 rounded-lg border border-gray-300 overflow-hidden">
      <div className="bg-gray-100 border-b border-gray-300 px-5 py-3">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
          {source} &mdash; {label}
          {date && <span> &mdash; {date}</span>}
        </p>
        <p className="text-base font-bold text-[#1F3964]">{title}</p>
      </div>
      <div className="px-5 py-4 bg-gray-50 text-sm text-gray-700 leading-relaxed space-y-3">
        {children}
      </div>
      {sourceUrl && (
        <div className="bg-gray-100 border-t border-gray-300 px-5 py-2">
          <a
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#2E74B5] underline"
          >
            View original document at {source}
          </a>
        </div>
      )}
    </div>
  )
}
