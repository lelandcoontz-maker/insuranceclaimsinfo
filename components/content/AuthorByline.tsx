import Link from 'next/link'

/**
 * Compact author identity block displayed at the foot of every article,
 * below the content and above the bottom CTA. A quiet E-E-A-T authority
 * signal — not a sales pitch.
 */
export function AuthorByline() {
  return (
    <aside
      aria-label="About the author"
      className="max-w-3xl mx-auto mt-12 mb-4 border-t border-gray-200 pt-6"
    >
      <p className="text-sm text-gray-700">
        <span className="font-semibold text-[#1F3964]">Written by Leland Coontz III</span>
        <br />
        California Licensed Public Adjuster &middot; Lic. #2B53445
        <br />
        Over 20 years of insurance claims handling experience.{' '}
        <Link href="/about" className="text-[#2E74B5] underline hover:text-[#1F3964]">
          More about Leland
        </Link>
        .
      </p>
    </aside>
  )
}
