import Link from 'next/link'

const RESOURCE_LINKS = [
  { href: '/resources/california-fair-claims', label: 'CA Fair Claims Act (10 CCR 2695)' },
  { href: '/resources/policy-interpretation', label: 'Understanding Your Policy' },
  { href: '/resources/claims-process', label: 'The Claims Process' },
  { href: '/resources/contents-claims', label: 'Personal Property Claims' },
  { href: '/resources/ale-frv', label: 'Additional Living Expenses' },
  { href: '/resources/appraisal', label: 'Insurance Appraisal' },
  { href: '/resources/negotiation', label: 'Claim Negotiation Tactics' },
  { href: '/resources/bad-faith', label: 'Bad Faith Insurance' },
]

export function Footer() {
  return (
    <footer className="bg-[#162847] text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <h3 className="font-bold text-lg mb-3">InsuranceClaimsInfo.com</h3>
            <p className="text-blue-200 text-sm leading-relaxed">
              Free educational resources and professional public adjuster services
              for California insurance claimants.
            </p>
            <p className="text-blue-300 text-xs mt-4">
              Leland Coontz III<br />
              CA Public Adjuster License #2B53445
            </p>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-blue-300 mb-3">
              Free Resources
            </h4>
            <ul className="space-y-1.5">
              {RESOURCE_LINKS.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-blue-200 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools & Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-blue-300 mb-3">
              Tools & Help
            </h4>
            <ul className="space-y-1.5 mb-6">
              <li>
                <Link href="/inventory" className="text-blue-200 hover:text-white text-sm transition-colors">
                  Personal Property Inventory Tool
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-200 hover:text-white text-sm transition-colors">
                  Free Claim Review
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-blue-200 hover:text-white text-sm transition-colors">
                  About Your Public Adjuster
                </Link>
              </li>
            </ul>
            <div className="bg-[#1F3964] rounded-lg p-4 text-sm">
              <p className="font-semibold text-[#C9A84C] mb-1">Get Professional Help</p>
              <p className="text-blue-200 text-xs leading-relaxed">
                Handling a claim in California or another state?
                Contact us for a free consultation or referral.
              </p>
              <Link
                href="/contact"
                className="mt-3 block text-center bg-[#C9A84C] hover:bg-[#A8872E] text-white text-xs font-semibold py-2 px-4 rounded transition-colors"
              >
                Contact Us →
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-blue-400 text-xs">
            © {new Date().getFullYear()} InsuranceClaimsInfo.com — For educational purposes only.
            Not legal advice. Consult a licensed professional for your specific situation.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-blue-400 hover:text-white text-xs transition-colors">Privacy</Link>
            <Link href="/terms" className="text-blue-400 hover:text-white text-xs transition-colors">Terms</Link>
            <Link href="/contact" className="text-blue-400 hover:text-white text-xs transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
