interface RegulationCardProps {
  section: string
  title: string
  requirement: string
  whyItMatters: string
}

export function RegulationCard({ section, title, requirement, whyItMatters }: RegulationCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-sm transition-shadow">
      <div className="flex items-start gap-3 mb-3">
        <span className="bg-[#1F3964] text-white text-xs font-mono px-2.5 py-1 rounded flex-shrink-0">
          {section}
        </span>
        <h3 className="font-bold text-[#1F3964] text-sm leading-tight">{title}</h3>
      </div>
      <p className="text-sm text-gray-700 leading-relaxed mb-3">{requirement}</p>
      <div className="bg-amber-50 border border-amber-100 rounded-lg px-3 py-2">
        <p className="text-xs text-amber-800 leading-relaxed">
          <strong className="text-amber-900">Why this matters:</strong> {whyItMatters}
        </p>
      </div>
    </div>
  )
}
