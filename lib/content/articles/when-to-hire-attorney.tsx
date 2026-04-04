import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'When to Hire an Insurance Claim Attorney',
  description:
    'Not every claim needs a lawyer — but some absolutely do. Learn when legal help is essential, how to find the right attorney, and how attorney fees work.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Not every insurance claim needs an attorney. Many disputes can be resolved through
        negotiation, supplementation, or the{' '}
        <Link href="/resources/appraisal" className="text-blue-700 underline hover:text-blue-900">
          appraisal process
        </Link>. But some situations absolutely
        require legal help. Knowing the difference can save you time, money, and a lot of
        frustration.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">When You Need an Attorney</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>The carrier denied your claim entirely</strong> and you believe it should
          be covered
        </li>
        <li>
          <strong>The carrier is acting in bad faith</strong> &mdash; unreasonable delays,
          lowball offers with no basis, refusing to communicate
        </li>
        <li>
          <strong>The carrier requested an Examination Under Oath (EUO)</strong> &mdash; you
          should have legal representation for this
        </li>
        <li>
          <strong>The statute of limitations is approaching</strong> and the claim isn&apos;t resolved
        </li>
        <li>
          <strong>The claim involves serious bodily injury</strong> or liability issues
        </li>
        <li>
          <strong>The dollar amount is large</strong> and the carrier refuses to negotiate
          reasonably
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Attorney vs. Public Adjuster</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Public adjusters and attorneys serve different but complementary roles. A{' '}
        <Link href="/resources/public-adjuster" className="text-blue-700 underline hover:text-blue-900">
          public adjuster
        </Link>{' '}
        handles the claim process itself &mdash; documenting damage, preparing estimates,
        negotiating with the carrier. An attorney handles the legal dimension &mdash; coverage
        disputes, bad faith claims, and litigation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many claims are best served by a PA first. If the PA can&apos;t resolve the dispute,
        an attorney steps in. Some situations need both from the start. A good PA will tell
        you when it&apos;s time to bring in an attorney.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Understanding Bad Faith vs. Breach of Contract</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        People throw around the term &quot;bad faith&quot; loosely, but it has a specific legal
        meaning. Most cases where the insured wins against the carrier are actually breach of
        contract cases &mdash; the carrier simply didn&apos;t pay what the policy required. Bad
        faith is a separate, harder claim that requires showing the carrier acted unreasonably
        and without proper cause.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Having an appraisal award that is significantly higher than the carrier&apos;s last
        offer can strengthen both claims &mdash; it proves the carrier was underpaying and
        provides a clear damage amount.
      </p>

      <CalloutBox variant="tip" title="How Attorney Fees Work">
        <p>
          Most insurance claim attorneys work on contingency &mdash; they only get paid if you
          recover money. Typical contingency fees range from 33% to 40%. Some attorneys will
          reduce their fee if a public adjuster is already involved and has done significant
          work on the claim. Always discuss fees upfront and get the agreement in writing.
        </p>
      </CalloutBox>

    </>
  )
}
