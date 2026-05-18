import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'What Is "Bad Faith" and How Do I Know If My Insurer Is Doing It?',
  description:
    'A plain-language primer on insurance bad faith in California: what it means, how to recognize it, key case law, available damages, and when to call a lawyer.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        You paid your premiums. You filed a claim. And now your insurer is stalling, lowballing, or
        denying without explanation. Something feels wrong — but is it just frustrating, or is it
        actually illegal? In California, when an insurer handles your claim unreasonably, it is
        called &quot;bad faith.&quot; Bad faith is not just unfair. It is a legal wrong that exposes
        the insurer to damages far beyond your original claim.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Bad Faith Means
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Every insurance policy in California carries an implied covenant of good faith and fair
        dealing. This is not in the written policy — it exists by operation of law. It means your
        insurer must: investigate your claim fairly, evaluate it honestly, and pay what is owed
        without unreasonable delay. When an insurer violates this duty — when it acts unreasonably
        in handling your claim — that violation is called &quot;bad faith.&quot;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The legal standard is reasonableness. The insurer does not have to agree with you. It does
        not have to pay every dollar you claim. But its conduct must be reasonable — based on a fair
        investigation, an honest evaluation of the evidence, and a good-faith effort to pay what is
        owed.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Genuine Dispute Doctrine
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The &quot;genuine dispute&quot; doctrine protects insurers who are wrong but reasonable. If
        there is a legitimate disagreement about coverage, causation, or the amount of loss —
        supported by evidence on both sides — the insurer is not acting in bad faith simply because
        it took a position that ultimately proved incorrect. The question is not &quot;was the
        insurer right?&quot; but &quot;was the insurer&apos;s position reasonable given what it knew
        or should have known?&quot;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        But the genuine dispute doctrine has limits. It does not protect an insurer that manufactured
        the dispute — by conducting a biased investigation, ignoring evidence, or relying on an
        expert whose opinion was not based on the actual facts. As the court stated in{' '}
        <em>Wilson v. 21st Century Ins. Co.</em> (2007) 42 Cal.4th 713, the genuine dispute doctrine
        does not insulate an insurer from bad faith liability when the insurer fails to conduct a
        thorough investigation.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Common Bad Faith Behaviors
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Bad faith takes many forms. Here are the patterns that most frequently arise in California
        homeowner claims:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Unreasonable delay:</strong> Failing to acknowledge claims within 15 days, failing
          to accept or deny within 40 days, dragging out the process for months or years without
          legitimate reason
        </li>
        <li>
          <strong>Lowballing without basis:</strong> Offering substantially less than the claim is
          worth without a reasonable explanation grounded in the facts and the policy
        </li>
        <li>
          <strong>Denying without investigation:</strong> Issuing a denial before completing a fair,
          thorough, and objective investigation of the claim
        </li>
        <li>
          <strong>Moving the goalposts:</strong> First requesting one set of documents, then another,
          then another — each time finding a new reason to delay payment
        </li>
        <li>
          <strong>Misrepresenting the policy:</strong> Telling you something is excluded when it is
          not, or interpreting ambiguous language against you rather than in your favor (which
          violates California&apos;s rules of policy interpretation)
        </li>
        <li>
          Failing to inform you of coverages: Not telling you about available benefits — such as ALE, code upgrade coverage, or debris removal — that apply to your loss (Cal. Code Regs., tit. 10, Section 2695.4(a))
        </li>
        <li>
          <strong>Ignoring evidence:</strong> Disregarding your expert reports, contractor estimates,
          or documentation without a reasonable counter-position
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Key California Case Law
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Several landmark California cases define the bad faith landscape:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong><em>Gruenberg v. Aetna Ins. Co.</em> (1973) 9 Cal.3d 566:</strong> Established
          that the implied covenant of good faith and fair dealing applies to insurance contracts and
          that breach gives rise to tort damages, not just contract damages.
        </li>
        <li>
          <strong><em>Egan v. Mutual of Omaha Ins. Co.</em> (1979) 24 Cal.3d 809:</strong> Confirmed
          that punitive damages are available for bad faith and that insurers occupy a quasi-fiduciary
          position relative to their insureds.
        </li>
        <li>
          <strong><em>Moradi-Shalal v. Fireman&apos;s Fund Ins. Cos.</em> (1988) 46 Cal.3d 287:</strong>{' '}
          Eliminated the private right of action under Insurance Code Section 790.03 (unfair
          practices act) but left intact the common law bad faith tort action.
        </li>
        <li>
          <strong><em>Wilson v. 21st Century Ins. Co.</em> (2007) 42 Cal.4th 713:</strong> Clarified
          that the genuine dispute doctrine requires a genuine, not manufactured, dispute — and that
          failure to investigate can defeat the defense.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Damages Are Available
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Bad faith is a tort — an actionable wrong — not just a breach of contract. This distinction
        matters because tort damages are broader than contract damages. In a bad faith case, you can
        recover:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Policy benefits:</strong> The full amount owed under the policy (the claim itself)
        </li>
        <li>
          <strong>Consequential damages:</strong> Financial harm caused by the insurer&apos;s
          unreasonable conduct — inability to rebuild, lost business, additional housing costs
        </li>
        <li>
          <strong>Emotional distress:</strong> Anxiety, stress, depression, and other mental
          suffering caused by the insurer&apos;s bad faith conduct
        </li>
        <li>
          <strong>Punitive damages:</strong> Available when the insurer&apos;s conduct is malicious,
          oppressive, or fraudulent (Civil Code Section 3294). These can be a multiple of actual
          damages and are meant to punish particularly egregious conduct.
        </li>
        <li>
          <strong>Brandt fees:</strong> Attorney fees incurred to recover the policy benefits that
          should have been paid in the first place (<em>Brandt v. Superior Court</em> (1985) 37
          Cal.3d 813)
        </li>
      </ul>

      <CalloutBox variant="important" title="Brandt Fees Are Separate From Litigation Costs">
        <p>
          Brandt fees are the attorney fees you incurred to obtain the insurance benefits you were
          owed. They are recoverable as damages in a bad faith case. This means the insurer pays not
          just your claim but also what it cost you to force them to pay your claim. This is a
          significant incentive for attorneys to take bad faith cases.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Know If Your Insurer Is Acting in Bad Faith
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Ask yourself these questions:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>Has the insurer provided a clear, written explanation for its position citing specific policy language?</li>
        <li>Did the insurer conduct a fair investigation — or did it start from a conclusion and work backward?</li>
        <li>Is the insurer responding to your communications within regulatory timeframes?</li>
        <li>Has the insurer paid the undisputed portion of the claim while disputing the rest?</li>
        <li>Is the insurer&apos;s position supported by evidence — or just assertion?</li>
        <li>Has the insurer moved the goalposts — changing its reason for denial or delay?</li>
        <li>Has the insurer told you about all available coverages that apply to your loss?</li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you are answering &quot;no&quot; to multiple questions, the insurer&apos;s conduct may
        cross the line. Document everything and consult an attorney.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When to Call a Lawyer
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Call an insurance bad faith attorney when:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>The insurer has denied coverage without a reasonable basis</li>
        <li>The insurer is unreasonably delaying payment for months</li>
        <li>The gap between your evidence and their offer is enormous and unexplained</li>
        <li>You have been referred to the Special Investigations Unit (SIU)</li>
        <li>The insurer is demanding an Examination Under Oath (EUO)</li>
        <li>You believe the insurer is misrepresenting your policy</li>
        <li>The conduct pattern matches the bad faith indicators above</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most insurance bad faith attorneys work on contingency — they do not get paid unless you win.
        An initial consultation is usually free. For help deciding if you need an attorney, see our
        guide on{' '}
        <Link href="/resources/when-to-hire-attorney" className="text-blue-700 underline hover:text-blue-900">
          when to hire an attorney
        </Link>. For more on your insurer&apos;s legal obligations, see our{' '}
        <Link href="/resources/insurer-obligations-cheat-sheet" className="text-blue-700 underline hover:text-blue-900">
          insurer obligations cheat sheet
        </Link>.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        Bad faith is a serious legal claim with serious consequences for the insurer. It exists
        because the legislature and the courts recognized that insurance companies have enormous
        power over their policyholders — and that power must have checks. When your insurer acts
        unreasonably, the law gives you teeth. Use them.
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
