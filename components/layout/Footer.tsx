import Link from 'next/link'
import { FOOTER_RESOURCE_LINKS } from '@/lib/content/navigation'

export function Footer() {
  return (
    <footer className="bg-[#162847] text-white mt-16" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <h3 className="font-bold text-lg mb-3">InsuranceClaimsInfo.com</h3>
            <p className="text-blue-100 text-sm leading-relaxed">
              Free educational resources and professional Public Adjuster services
              for California insurance claimants.
            </p>
            <p className="text-blue-100 text-xs mt-4">
              Leland Coontz III<br />
              CA Public Adjuster License #2B53445
            </p>
          </div>

          {/* Resources */}
          <nav aria-label="Free resources">
            <h4 className="font-semibold text-sm uppercase tracking-wider text-blue-100 mb-3">
              Free Resources
            </h4>
            <ul className="space-y-1.5">
              {FOOTER_RESOURCE_LINKS.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-blue-100 hover:text-white text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#162847] focus:ring-white rounded">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Tools & Contact */}
          <div>
            <nav aria-label="Tools and help">
              <h4 className="font-semibold text-sm uppercase tracking-wider text-blue-100 mb-3">
                Tools & Help
              </h4>
              <ul className="space-y-1.5 mb-6">
                <li>
                  <Link href="/inventory" className="text-blue-100 hover:text-white text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#162847] focus:ring-white rounded">
                    Personal Property Inventory Tool
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-blue-100 hover:text-white text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#162847] focus:ring-white rounded">
                    Free Claim Review
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-blue-100 hover:text-white text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#162847] focus:ring-white rounded">
                    About Your Public Adjuster
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="bg-[#1F3964] rounded-lg p-4 text-sm">
              <p className="font-semibold text-[#C9A84C] mb-1">Get Professional Help</p>
              <p className="text-blue-100 text-xs leading-relaxed">
                Handling a claim in California or another state?
                Contact us for a free consultation or referral.
              </p>
              <Link
                href="/contact"
                className="mt-3 block text-center bg-[#C9A84C] hover:bg-[#A8872E] text-white text-xs font-semibold py-2 px-4 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#1F3964] focus:ring-[#C9A84C]"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 space-y-3">
          <p className="text-blue-200 text-xs leading-relaxed">
            <strong>Disclaimer:</strong> This website provides general educational information
            about insurance claims, written from the perspective of a California Licensed Public
            Adjuster. It does not constitute legal advice and does not create an attorney-client
            relationship. Public Adjusters are not attorneys and, under California law, cannot
            provide legal advice. Insurance laws, regulations, and case law vary by state and
            change over time; case summaries and statutory citations on this site may be
            paraphrased for clarity and should not be relied on without independent verification.
            <strong> Only a licensed attorney</strong> can advise you on the legal merits of
            your specific claim, including questions of coverage, bad faith, statutes of
            limitation, and policy interpretation.
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <p className="text-blue-200 text-xs">
              &copy; {new Date().getFullYear()} InsuranceClaimsInfo.com
            </p>
            <nav aria-label="Legal">
              <div className="flex gap-4">
                <Link href="/privacy" className="text-blue-200 hover:text-white text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#162847] focus:ring-white rounded">Privacy</Link>
                <Link href="/terms" className="text-blue-200 hover:text-white text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#162847] focus:ring-white rounded">Terms</Link>
                <Link href="/accessibility" className="text-blue-200 hover:text-white text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#162847] focus:ring-white rounded">Accessibility</Link>
                <Link href="/contact" className="text-blue-200 hover:text-white text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#162847] focus:ring-white rounded">Contact</Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
