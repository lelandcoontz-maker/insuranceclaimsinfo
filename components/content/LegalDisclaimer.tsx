export function LegalDisclaimer({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <p className="text-xs text-gray-400 leading-relaxed">
        <strong>Disclaimer:</strong> This website provides general educational information about insurance claims.
        It does not constitute legal advice. For legal advice specific to your situation, consult a licensed attorney.
      </p>
    )
  }

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 my-6">
      <div className="flex gap-3">
        <span className="text-lg flex-shrink-0">⚖️</span>
        <div>
          <p className="font-semibold text-sm text-gray-900 mb-1">Legal Disclaimer</p>
          <p className="text-sm text-gray-600 leading-relaxed">
            The information on this website is for general educational purposes only and does not constitute
            legal advice. Insurance laws and regulations vary by state and change over time. For legal advice
            specific to your situation, consult a licensed attorney. For professional claims assistance,{' '}
            <a href="/contact" className="text-[#2E74B5] underline">contact us</a> for a free consultation.
          </p>
        </div>
      </div>
    </div>
  )
}
