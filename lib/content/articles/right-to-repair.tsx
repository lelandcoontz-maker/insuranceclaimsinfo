import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Right to Repair Clauses: Your Rights When the Carrier Sends Their Contractor',
  description:
    'Insurance companies increasingly use \'right to repair\' clauses to control repairs. Learn your rights, how to manage the carrier\'s contractor, and when to push back.',
  summary:
    'A \'right to repair\' clause lets the insurer elect to repair rather than pay, sending its own contractor. You can manage that contractor, hold the carrier responsible for a complete repair, and push back when the work or scope falls short.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational commentary by a Licensed California Public
          Adjuster. It is not legal advice. For legal questions about your specific
          situation, consult a licensed California attorney.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        &quot;Right to Repair&quot; clauses are becoming more common in insurance policies. These
        provisions give the insurance company the option to repair your property directly using
        their own chosen contractor, instead of paying you the cash value of the loss.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        On the surface, this might sound convenient &mdash; the insurance company handles
        everything. In practice, it gives the carrier enormous control over the quality, scope,
        and cost of repairs to your home.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">How Right to Repair Works</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a carrier invokes their right to repair, they select and pay a contractor
        directly to perform the repairs. The homeowner does not receive a check &mdash;
        the money goes straight to the carrier&apos;s chosen contractor.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The problem is that this contractor works for the insurance company, not for you.
        Their incentive is to keep the insurance company happy &mdash; which means keeping
        costs down, not maximizing the quality of your repairs.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Managing the Carrier&apos;s Contractor</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the insurance company sends their contractor, treat them exactly the way consumer
        protection agencies recommend you treat any contractor working on your home. In
        California, the Contractors State License Board has extensive guidance on homeowner
        rights:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Verify the contractor&apos;s license.</strong> Call the CSLB at (800) 321-2752
          or check their website. Licensed contractors must post a $25,000 bond.
        </li>
        <li>
          <strong>Ask for references.</strong> Visit homes where they have done work and
          review the quality.
        </li>
        <li>
          <strong>Get a written contract</strong> that states the work, the price, completion
          timeline, and materials to be used.
        </li>
        <li>
          <strong>Do not allow excessive down payments.</strong> In California, contractors
          can only collect $1,000 or 10% of the total cost, whichever is less.
        </li>
        <li>
          <strong>Schedule payments based on completed work.</strong> Do not let payments
          get ahead of the work actually done.
        </li>
        <li>
          <strong>Document everything</strong> with photos before, during, and after repairs.
        </li>
      </ol>

      <CalloutBox variant="tip" title="Your Right to Choose">
        <p>
          In most states, even if the policy has a right-to-repair clause, you have legal
          protections. If the carrier&apos;s contractor does substandard work, you have
          recourse. And if you cancel the carrier&apos;s contractor, make sure you have a
          legitimate reason and consult with an attorney first &mdash; cancelling without
          cause could put you in breach of your policy.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Common Problems with Carrier Contractors</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Substandard work quality</strong> &mdash; preferred vendors are often
          selected for price, not quality
        </li>
        <li>
          <strong>Skipping scope items</strong> &mdash; doing only what the carrier authorized,
          not what the home actually needs
        </li>
        <li>
          <strong>Using cheaper materials</strong> &mdash; substituting lower-grade materials
          for what was originally in the home
        </li>
        <li>
          <strong>Rushing the timeline</strong> &mdash; completing work quickly at the expense
          of thoroughness
        </li>
        <li>
          <strong>Not pulling permits</strong> &mdash; skipping required building permits to
          save time and cost
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Protecting Yourself</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Even if you accept the carrier&apos;s contractor, you have every right to monitor
        the work, demand quality, and raise concerns. Keep a detailed log of the work being
        done, take daily photos, and do not sign off on completed work until you are
        satisfied it meets professional standards.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you encounter problems with the carrier&apos;s contractor, document everything in
        writing and notify both the contractor and the insurance company. If the issues are not
        resolved, consult with a{' '}
        <Link href="/resources/public-adjuster" className="text-blue-700 underline hover:text-blue-900">
          Public Adjuster
        </Link>{' '}
        or attorney about your options.
      </p>

      <hr className="my-8 border-gray-300" />
      <p className="text-sm text-gray-500 italic">
        This article is for informational purposes only and does not constitute legal advice. Insurance
        policies and applicable law vary by state and by policy form. Consult with a licensed
        professional regarding your specific situation.
      </p>
      <p className="text-sm text-gray-500 mt-4 italic">
        Written by Leland Coontz III, Licensed Public Adjuster, CA License #2B53445.
      </p>
    </>
  )
}
