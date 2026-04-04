import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'CDI Notices, Bulletins & Guides — Official California Department of Insurance Documents',
  description:
    'Download official California Department of Insurance notices, bulletins, and guides relevant to property insurance claims. Labor depreciation guidance, smoke damage standards, claim-related document requirements, and more.',
}

const ANNUAL_GUIDES = [
  {
    title: 'Guide for Adjusting Property Claims in California After a Major Disaster',
    year: '2026',
    file: '/cdi-notices/2026-guide-adjusting-property-claims.pdf',
    description:
      'Comprehensive guide issued annually by CDI to all licensed adjusters and insurers. Covers fair claims handling requirements, timelines, documentation, and importantly states that labor is not subject to depreciation. This is the key CDI authority on labor depreciation.',
    highlight: 'Key authority: labor is not subject to depreciation',
  },
  {
    title: 'Annual Notice — Significant California Laws Pertaining to Residential Property Insurance',
    year: '2025',
    file: '/cdi-notices/2025-annual-significant-ca-laws.pdf',
    description:
      'Required annual notice that insurers must provide to policyholders after a declared state of emergency. Summarizes key California laws affecting residential property claims including replacement cost rights, ALE minimums, and policyholder protections.',
    highlight: null,
  },
  {
    title: 'Annual Notice — Significant California Laws',
    year: '2024',
    file: '/cdi-notices/2024-annual-significant-ca-laws.pdf',
    description:
      'Prior year version of the annual significant laws notice. Useful for claims arising from 2024 events.',
    highlight: null,
  },
]

const CLAIM_DOCUMENTS = [
  {
    title: 'Notice Regarding Duty to Provide Claim-Related Documents',
    year: 'August 2025',
    file: '/cdi-notices/2025-claim-related-documents-notice.pdf',
    description:
      'CDI order requiring insurers to fully comply with California law regarding disclosure of claim-related documents. Insurers must provide all estimates, reports, findings, and calculations — whether preliminary or final — that relate to the loss and evaluation of damages. Issued after reports that adjusters were creating estimates but refusing to share them with policyholders.',
    highlight: null,
  },
  {
    title: 'Notice Regarding Duty to Provide Claim-Related Documents (Original)',
    year: 'Prior version',
    file: '/cdi-notices/claim-related-documents-notice-original.pdf',
    description:
      'Earlier CDI notice establishing the insurer\'s duty to provide claim-related documents upon request. This notice has been reissued multiple times because insurers continue to resist providing documents.',
    highlight: null,
  },
]

const SMOKE_DAMAGE = [
  {
    title: 'Bulletin 2025-7: Insurance Coverage for Smoke Damage Claims',
    year: '2025',
    file: '/cdi-notices/bulletin-2025-7-smoke-damage-claims.pdf',
    description:
      'CDI bulletin requiring insurers to fully and fairly investigate smoke damage claims. Establishes that insurers cannot summarily deny smoke claims, must contract and pay for testing when warranted, and that this applies to all insurers including the California FAIR Plan.',
    highlight: null,
  },
  {
    title: 'Smoke Claims and Remediation Task Force Report',
    year: 'March 2026',
    file: '/cdi-notices/smoke-claims-task-force-report.pdf',
    description:
      'Report from CDI\'s Smoke Claims and Remediation Task Force developing standards for inspection, testing, remediation, and restoration of smoke-damaged residential properties. Addresses the role of industrial hygienists and environmental consultants.',
    highlight: null,
  },
]

function DocumentCard({
  title,
  year,
  file,
  description,
  highlight,
}: {
  title: string
  year: string
  file: string
  description: string
  highlight: string | null
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow flex flex-col">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-start gap-3">
          <span className="text-2xl flex-shrink-0 mt-0.5">📄</span>
          <h3 className="font-bold text-[#1F3964] leading-tight">{title}</h3>
        </div>
        <span className="flex-shrink-0 text-xs font-semibold bg-blue-100 text-blue-800 px-2.5 py-1 rounded-full whitespace-nowrap">
          {year}
        </span>
      </div>
      <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">{description}</p>
      {highlight && (
        <p className="text-xs font-semibold text-[#C9A84C] bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 mb-4">
          {highlight}
        </p>
      )}
      <a
        href={file}
        download
        className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-[#2E74B5] hover:bg-[#1F3964] rounded-lg px-4 py-2.5 transition-colors self-start"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
        Download PDF
      </a>
    </div>
  )
}

export default function CdiNoticesPage() {
  return (
    <>
      {/* Header banner */}
      <div className="bg-[#1F3964] text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#C9A84C] text-xs font-bold uppercase tracking-wider mb-2">
            Official Documents
          </p>
          <h1 className="text-3xl font-bold mb-3">
            CDI Notices, Bulletins &amp; Guides
          </h1>
          <p className="text-blue-200 max-w-2xl leading-relaxed">
            Official California Department of Insurance documents that every policyholder and claims
            professional should know. Download the originals — know your rights.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-14">
        {/* ───────── Section 1: Annual Guides & Laws ───────── */}
        <section>
          <h2 className="text-2xl font-bold text-[#1F3964] mb-2">Annual Guides &amp; Laws</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Each year, the California Department of Insurance publishes guides and notices that
            summarize the laws governing property insurance claims. These are essential reading for
            anyone handling or navigating a claim.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {ANNUAL_GUIDES.map((doc) => (
              <DocumentCard key={doc.file} {...doc} />
            ))}
          </div>
        </section>

        {/* ───────── Section 2: Claim-Related Documents ───────── */}
        <section>
          <h2 className="text-2xl font-bold text-[#1F3964] mb-2">Claim-Related Documents</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            CDI has repeatedly had to remind insurers of their duty to share claim-related documents
            with policyholders. These notices make clear that you have the right to every estimate,
            report, and calculation related to your loss.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {CLAIM_DOCUMENTS.map((doc) => (
              <DocumentCard key={doc.file} {...doc} />
            ))}
          </div>
        </section>

        {/* ───────── Section 3: Smoke Damage ───────── */}
        <section>
          <h2 className="text-2xl font-bold text-[#1F3964] mb-2">Smoke Damage</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Smoke damage claims have been heavily disputed by insurers, particularly after the 2025
            wildfire season. CDI has issued specific guidance requiring full and fair investigation of
            these claims.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {SMOKE_DAMAGE.map((doc) => (
              <DocumentCard key={doc.file} {...doc} />
            ))}
          </div>
        </section>

        {/* ───────── Source Notice ───────── */}
        <section className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <div className="flex gap-3">
            <span className="text-xl flex-shrink-0">🏛️</span>
            <div>
              <p className="font-semibold text-[#1F3964] mb-1">Official Source</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                These are official California Department of Insurance documents provided here for
                convenience. For the most current versions, visit the{' '}
                <a
                  href="https://www.insurance.ca.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2E74B5] underline font-medium"
                >
                  California Department of Insurance website
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        {/* ───────── CTA ───────── */}
        <section className="bg-[#EFF4FB] rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-[#1F3964] mb-3">
            Need Help Understanding These Documents?
          </h2>
          <p className="text-gray-600 mb-6 max-w-lg mx-auto">
            These CDI notices establish your rights, but applying them to your specific claim takes
            experience. A licensed Public Adjuster can review your file and use these authorities to
            hold your insurer accountable.
          </p>
          <Link href="/contact" className="btn-gold">
            Request a Free Claim Review &rarr;
          </Link>
        </section>

        {/* ───────── Legal Disclaimer ───────── */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <div className="flex gap-3">
            <span className="text-lg flex-shrink-0">⚖️</span>
            <div>
              <p className="font-semibold text-sm text-gray-900 mb-1">Legal Disclaimer</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                These documents are provided for informational purposes only and do not constitute
                legal advice. Laws and regulations change over time — always verify you are referencing
                the most current version. For advice specific to your situation, consult with a
                licensed Public Adjuster or attorney.{' '}
                <Link href="/contact" className="text-[#2E74B5] underline">
                  Contact us
                </Link>{' '}
                for a free consultation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
