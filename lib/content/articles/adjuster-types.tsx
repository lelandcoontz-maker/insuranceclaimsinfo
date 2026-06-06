import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Types of Insurance Adjusters: Who You\'re Really Dealing With',
  description:
    'Staff adjusters, independent adjusters, desk adjusters, field adjusters, Public Adjusters — learn who each one works for and how it affects your claim.',
  summary:
    'Staff, independent, desk, field, and Public Adjusters all play different roles, and all but the Public Adjuster work for the insurer. Knowing who you are dealing with, and who pays them, tells you whose interests they serve.',
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
        Not all adjusters are the same. Understanding who the adjuster works for and what
        motivates them is critical to navigating your claim effectively.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Staff Adjusters</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Staff adjusters are employees of the insurance company. They receive a salary, benefits,
        and job security from the carrier. Their loyalty is to their employer. Many staff
        adjusters are honest professionals, but adjusters who consistently write generous
        estimates do not last long at insurance companies.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Independent Adjusters (IAs)</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Independent adjusters work for IA firms that contract with insurance companies. They are
        not direct employees of the carrier, but the carrier is their client. During catastrophes
        (hurricanes, wildfires, large storms), carriers bring in hundreds of independent adjusters
        to handle the surge of claims.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        IA compensation models vary widely. Historically, catastrophe adjusters were routinely
        paid a percentage of the claims they closed &mdash; typically 2&ndash;6% depending on
        claim size &mdash; which created strong volume incentives: the more claims an adjuster
        closed per day, the more they earned, regardless of accuracy. That percentage-based
        model was the industry standard for CAT deployments through at least the 2010s and
        persists at some firms today. Non-catastrophe IAs are more commonly paid hourly, on
        timesheets, on day rates, or sometimes on salary through long-term carrier contracts.
        Per-claim and per-inspection flat fees are also common for limited-scope assignments.
        Whatever the model, volume-based compensation can create pressure to close claims
        quickly &mdash; especially in a catastrophe deployment where thousands of claims are
        competing for attention. For a detailed breakdown of how each model works and what it
        means for your claim, see our guide on{' '}
        <Link href="/resources/adjuster-compensation" className="text-blue-700 underline hover:text-blue-900">
          how insurance adjusters get paid
        </Link>
        .
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In California, adjusters must be individually licensed under the Insurance Code and are
        required to include their license number (or their supervising adjuster&apos;s license
        number) on all written communications &mdash; see 10 CCR &sect; 2695.4(a).
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Desk vs. Field &mdash; A Setting, Not a Separate Type</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        &ldquo;Desk adjuster&rdquo; and &ldquo;field adjuster&rdquo; are not a separate class of
        adjuster the way staff and independent are. They describe <em>where</em> the adjuster
        works from on a particular claim. A staff adjuster can be a desk adjuster, and so can an
        independent adjuster. The distinction that matters is not the label &mdash; it is whether
        the person assigned to your claim has actually seen the property.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Desk (remote) handling</strong> means the adjuster reviews photos, estimates, and
        documentation from an office and never visits the property. The obvious limitation is
        that they cannot see damage that is not in the photos, cannot smell smoke or mold, cannot
        probe soft drywall, and cannot open up concealed spaces. Remote adjusting has grown
        sharply since 2020 and tends to correlate with more disputes, scope gaps, and
        supplemental claims.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Field handling</strong> means a licensed adjuster physically inspects the property
        &mdash; which may be a staff adjuster, an independent adjuster, or occasionally a
        vendor-inspector working under the adjuster&apos;s supervision. A competent field
        inspection is almost always more accurate than a desk review, because it lets the
        adjuster observe damage that photos miss. If your claim is being handled entirely from a
        desk and the loss is significant, consider asking the carrier to send a field adjuster.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Public Adjusters (Licensed &ldquo;PIA&rdquo; in California)
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A{' '}
        <Link href="/resources/public-adjuster" className="text-blue-700 underline hover:text-blue-900">
          Public Adjuster
        </Link>{' '}
        is the only type of adjuster who works exclusively for the policyholder. In California,
        the formal license is called a <strong>Public Insurance Adjuster</strong> (PIA), issued
        and regulated by the California Department of Insurance under Insurance Code &sect; 15000
        et seq. A PIA is required to be bonded, is required to use a written contract that
        complies with CDI rules, and is{' '}
        <strong>legally prohibited from simultaneously representing insurance companies on the
        same claim</strong>. PIAs document damage, prepare estimates, interpret coverage,
        negotiate with the carrier, and handle the claims process on the policyholder&apos;s
        behalf.
      </p>

      <CalloutBox variant="tip" title="Who Works for Whom">
        <p>
          Staff adjusters and independent adjusters work for the insurance company. Desk adjusters
          work for the insurance company. The only adjuster who works for YOU is a Public Adjuster.
          Understanding this distinction is the first step to protecting yourself.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">SIU Investigators</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Special Investigation Unit (SIU) investigators are not adjusters in the traditional
        sense. Every California admitted insurer is required by statute and regulation to
        maintain an SIU that investigates claims the carrier suspects may involve fraud or
        material misrepresentation (see Ins. Code &sect; 1875.20 et seq. and 10 CCR &sect; 2698
        et seq.). Many SIU personnel come from law-enforcement or prosecutor backgrounds and
        approach interviews accordingly.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your claim is referred to SIU, take it seriously &mdash; but do not panic. A
        significant portion of SIU referrals are routine, triggered by automated rules such as
        dollar thresholds, claim timing, prior-loss history, or geographic pattern, rather than
        any actual evidence of fraud on your specific claim. That said, SIU contact should never
        be treated casually. Before giving a recorded statement, sitting for an{' '}
        <Link href="/resources/examination-under-oath" className="text-blue-700 underline hover:text-blue-900">
          Examination Under Oath (EUO)
        </Link>
        , or producing broad document demands, seriously consider consulting an attorney. Only
        an attorney can provide legal advice about how to respond to an SIU investigation; a Public Adjuster
        can help you organize your claim file and coordinate the claim side of the response, but
        the legal strategy of an SIU matter belongs with counsel.
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
