import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'What Happens If My Insurance Company Goes Out of Business?',
  description:
    'How CIGA (California Insurance Guarantee Association) protects policyholders when an insurer becomes insolvent, what is covered, what is not, and how to check if your carrier is admitted.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance companies can fail. They can become insolvent — unable to pay their claims. In
        California, when an admitted insurer goes under, the California Insurance Guarantee
        Association (CIGA) steps in to pay covered claims. But the protections have limits, the
        process takes time, and not every policyholder qualifies. This article explains exactly what
        happens and what you need to know.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Is CIGA?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        CIGA — the California Insurance Guarantee Association — is a statutory entity created under
        California Insurance Code Sections 1063 through 1063.14. It is not an insurance company. It
        is a safety net funded by assessments on all admitted insurers doing business in California.
        When an admitted insurer is declared insolvent by a court and placed into liquidation, CIGA
        assumes responsibility for paying covered claims up to statutory limits.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What CIGA Covers
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        CIGA covers &quot;covered claims&quot; — claims that arose under policies issued by the
        insolvent insurer before the insolvency date. For homeowner claims, the key limits are:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>$500,000 maximum</strong> per claim for dwelling and property damage claims
          (Insurance Code Section 1063.1(c)(1))
        </li>
        <li>
          <strong>$500,000 maximum</strong> for loss of use / additional living expenses claims
        </li>
        <li>
          <strong>$300,000 net worth cap:</strong> You are not eligible for CIGA benefits if your
          net worth exceeds $300,000 at the time of the insolvency — excluding your home&apos;s
          equity and retirement accounts (Insurance Code Section 1063.2(b))
        </li>
      </ul>

      <CalloutBox variant="warning" title="The Net Worth Limitation">
        <p>
          The $300,000 net worth cap is often misunderstood. It excludes the equity in your primary
          residence and the value of qualified retirement accounts. But other assets — investment
          accounts, rental properties, business interests, non-retirement savings — count toward the
          cap. If your net worth (excluding home equity and retirement accounts) exceeds $300,000,
          CIGA will not pay your claim. You would need to pursue the insolvent insurer&apos;s estate
          directly — a process that typically yields pennies on the dollar.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to File With CIGA
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When an insurer is declared insolvent, CIGA will send notice to affected policyholders. The
        process works like this:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          A California court issues a conservation or liquidation order against the insurer
        </li>
        <li>
          CIGA identifies pending claims from the insolvent insurer&apos;s records
        </li>
        <li>
          CIGA contacts claimants and requests documentation (proof of loss, estimates, receipts)
        </li>
        <li>
          CIGA assigns an adjuster to evaluate each covered claim
        </li>
        <li>
          CIGA pays covered claims up to the statutory limits
        </li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you have an open claim when your insurer becomes insolvent, gather all your documentation
        immediately: your policy, your dec page, all correspondence with the insurer, all estimates,
        all invoices, photographs, and any other claim-related records. Do not wait for CIGA to
        contact you. Be proactive. Call CIGA directly at (323) 782-0044 or visit their website.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Timeline
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        CIGA operates under the same regulatory deadlines as any insurer — it must acknowledge claims
        within 15 days and accept or deny within 40 days once it has all needed information (Cal.
        Code Regs., tit. 10, Section 2695.7). In practice, the transition period creates delays.
        There is typically a gap between when the insurer stops paying claims and when CIGA is fully
        operational on the file. This gap can last weeks to months.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        During this period, you may need to pay for emergency repairs, temporary housing, or other
        urgent expenses out of pocket. Keep all receipts. CIGA will reimburse covered expenses up to
        policy limits (subject to the $500,000 cap).
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What CIGA Does NOT Cover
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Several categories of insurance are outside CIGA&apos;s scope:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Surplus lines (non-admitted) insurers:</strong> If your policy was issued by a
          surplus lines carrier — one not licensed in California but authorized to write specific
          risks — CIGA does not apply. There is no equivalent safety net for surplus lines in
          California.
        </li>
        <li>
          <strong>Self-insured entities:</strong> Employers or organizations that self-insure their
          risks are not covered.
        </li>
        <li>
          <strong>Claims exceeding $500,000:</strong> Anything above the cap is an unsecured claim
          against the insolvent estate.
        </li>
        <li>
          <strong>Policyholders with net worth above $300,000:</strong> As described above.
        </li>
        <li>
          <strong>Certain policy benefits:</strong> Punitive damages, penalties, and some
          extra-contractual damages are not covered claims.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Check If Your Carrier Is Admitted
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The distinction between admitted and non-admitted (surplus lines) insurers determines whether
        CIGA protects you. Here is how to check:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Visit the California Department of Insurance website (insurance.ca.gov)
        </li>
        <li>
          Use the &quot;Company Profile Search&quot; tool
        </li>
        <li>
          Enter your insurer&apos;s name
        </li>
        <li>
          Look for &quot;License Status: Active&quot; and &quot;License Type: Admitted&quot;
        </li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your insurer is listed as &quot;Non-Admitted&quot; or &quot;Surplus Lines,&quot; CIGA does
        not cover you. This is common for homes in high-risk wildfire areas that cannot obtain
        coverage from admitted carriers and must go to the surplus lines market.
      </p>

      <CalloutBox variant="tip" title="Check Your Insurer's Financial Health">
        <p>
          Before an insurer fails, there are usually warning signs. Check your insurer&apos;s AM Best
          rating annually. A rating below B+ should concern you. Also monitor industry news — if your
          carrier is involved in a large catastrophe, is subject to regulatory action, or has been
          downgraded, consider finding a new carrier before the worst happens.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The California FAIR Plan Is Different
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The{' '}
        <Link href="/resources/california-fair-plan" className="text-blue-700 underline hover:text-blue-900">
          California FAIR Plan
        </Link>{' '}
        is an insurer of last resort for properties that cannot obtain coverage in the standard
        market. It is not the same as CIGA. The FAIR Plan is backed by all admitted insurers in
        California and is itself admitted — so if the FAIR Plan became insolvent (unlikely given its
        structure), CIGA would apply. But CIGA coverage limits would still cap your recovery at
        $500,000.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What You Can Do Now
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Protecting yourself from insurer insolvency is straightforward:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Confirm your insurer is admitted in California</li>
        <li>Check their AM Best rating and financial stability</li>
        <li>Understand that CIGA caps at $500,000 — if your home costs more to rebuild, you have exposure</li>
        <li>Keep copies of your policy, dec page, and all endorsements outside your home</li>
        <li>If you must use a surplus lines insurer, understand you have no CIGA safety net</li>
        <li>Consider whether your net worth might disqualify you from CIGA benefits</li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        For more on how{' '}
        <Link href="/resources/what-is-homeowners-insurance" className="text-blue-700 underline hover:text-blue-900">
          homeowners insurance
        </Link>{' '}
        works and the different types of coverage available, review our introductory guides.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        Your insurer&apos;s financial stability is part of your coverage. A policy from a company
        that cannot pay claims is not insurance — it is a piece of paper. Pay attention to who is
        backing your policy, not just what the policy says.
      </p>

      <hr className="my-8 border-gray-300" />
      <p className="text-sm text-gray-500 italic">
        This article is for informational purposes only and does not constitute legal advice. Insurance
        policies and applicable law vary by state and by policy form. Consult with a licensed
        professional regarding your specific situation.
      </p>
    </>
  )
}
