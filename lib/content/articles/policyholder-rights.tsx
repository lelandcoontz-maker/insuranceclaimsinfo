import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Your Rights as a California Policyholder',
  description:
    'California law gives property insurance policyholders specific, enforceable rights — from claim handling deadlines to bad faith remedies. Here is what you are entitled to.',
  summary:
    'California property policyholders have enforceable rights, including timely claim handling, regular communication, a fair investigation, written reasons for any denial, and remedies for bad faith. Insurers must follow the Fair Claims Settlement Practices Regulations, and violations can create liability.',
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
        California has some of the strongest policyholder protections in the country. Your
        insurance company has specific obligations under the policy contract, under the
        California Insurance Code, and under the Fair Claims Settlement Practices Regulations
        (10 CCR &sect; 2695). When the carrier violates those obligations, you have remedies.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This article covers the rights that matter most when you are in the middle of a
        claim. Most policyholders do not know they have them. That is by design — insurance
        companies benefit when you do not push back.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Your Right to Timely Claim Handling
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under the Fair Claims Settlement Practices Regulations, the insurance company must
        meet these deadlines from the moment you file your claim:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li><strong>15 days</strong> — Acknowledge receipt of your claim in writing.</li>
        <li><strong>15 days</strong> — Begin investigating your claim.</li>
        <li><strong>40 days</strong> — Accept or deny your claim after receiving your proof of claim.</li>
        <li><strong>30 days</strong> — Pay undisputed amounts once you reach agreement.</li>
        <li><strong>Every 30 days</strong> — Provide a written status update if the claim remains open.</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        These deadlines are mandatory. If your insurer misses them, document the date and
        the violation. Every missed deadline is evidence you can use in a{' '}
        <Link href="/resources/file-cdi-complaint-guide" className="text-[#1F3964] underline font-medium">
          CDI complaint
        </Link>{' '}
        or a{' '}
        <Link href="/resources/bad-faith" className="text-[#1F3964] underline font-medium">
          bad faith
        </Link>{' '}
        action.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Your Right to a Written Explanation of Any Denial
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the insurance company denies any part of your claim — or pays less than you
        claimed — they must provide a written explanation citing the specific policy
        provision, statute, or factual basis for the denial (10 CCR &sect; 2695.7(b)(1)).
        A verbal &ldquo;no&rdquo; over the phone is not sufficient. If the adjuster tells
        you something is not covered but will not put it in writing, that itself is a
        regulatory violation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When you receive a denial letter, check whether it actually cites a policy provision.
        Many denial letters use vague language like &ldquo;this type of loss is not covered
        under your policy.&rdquo; That is not a compliant denial. The regulation requires the
        insurer to point to the specific exclusion, limitation, or condition they are relying
        upon.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Your Right to Choose Your Own Contractor
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurance company cannot force you to use their preferred vendor or managed repair
        program. Under 10 CCR &sect; 2695.9(b), the carrier cannot require that the insured have
        the property repaired by a specific individual or entity. The insurer cannot reduce your
        payment because you chose a different contractor. They owe you the reasonable cost of
        repair, regardless of who performs the work.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your adjuster says something like &ldquo;we&apos;ll only pay what our vendor would
        charge,&rdquo; that is not how California law works. They owe you the reasonable and
        necessary cost to restore your property — and if local contractors charge more than
        the insurer&apos;s network vendor, the insurer must pay the reasonable local rate.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Your Right to Know How Your Payment Was Calculated
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under 10 CCR &sect; 2695.9, when the insurer makes a payment, they must provide
        documentation showing how the amount was determined. For structural damage, this means
        an itemized estimate showing exactly what was scoped, what was priced, and how
        depreciation was applied. For personal property, this means a line-by-line inventory
        showing each item, its replacement cost, and the depreciation taken.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        You are entitled to see the numbers. If the insurer sends you a check without an
        explanation of how they arrived at the amount, request the full estimate or
        settlement breakdown in writing.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Your Right to Dispute the Amount
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurance company&apos;s estimate is their opening position. It is not the final
        word. You have the right to:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>Submit your own estimate, contractor bids, or repair invoices.</li>
        <li>Challenge specific line items, pricing, or scope in the insurer&apos;s estimate.</li>
        <li>Request a re-inspection if you believe damage was missed.</li>
        <li>
          Invoke the{' '}
          <Link href="/resources/appraisal" className="text-[#1F3964] underline font-medium">
            appraisal clause
          </Link>{' '}
          in your policy to resolve a dollar dispute through a neutral process.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Accepting a partial payment does not waive your right to dispute the remainder. Under
        California law, you can cash a check marked &ldquo;final payment&rdquo; and still
        pursue the unpaid balance — the insurer cannot use a check endorsement to extinguish
        your claim for additional amounts owed.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Your Right to Representation
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        You have the absolute right to hire a{' '}
        <Link href="/resources/public-adjuster" className="text-[#1F3964] underline font-medium">
          Public Adjuster
        </Link>{' '}
        or an{' '}
        <Link href="/resources/when-to-hire-attorney" className="text-[#1F3964] underline font-medium">
          attorney
        </Link>{' '}
        to represent you in your claim at any time. The insurance company:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>Cannot retaliate against you for hiring a representative.</li>
        <li>Cannot refuse to work with your authorized representative.</li>
        <li>Must direct all claim communications through your representative once you designate one.</li>
        <li>Cannot use the fact that you hired a PA or attorney as a reason to delay or deny your claim.</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Your Right to Recover the Full Replacement Cost
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you have a replacement cost policy, the insurer typically pays actual cash value
        (replacement cost minus depreciation) upfront, then pays the withheld depreciation
        after repairs are completed. This is the standard two-step process.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your rights in this process:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>You have a reasonable time to complete repairs and recover the depreciation holdback.</li>
        <li>The insurer cannot set an artificially short deadline for you to complete work.</li>
        <li>Depreciation must be calculated reasonably — not by applying arbitrary percentages.</li>
        <li>Labor cannot be depreciated (it does not lose value over time).</li>
        <li>
          Items that do not depreciate (concrete, copper pipe, etc.) should not have
          depreciation applied. See{' '}
          <Link href="/resources/acv-rcv" className="text-[#1F3964] underline font-medium">
            ACV vs. RCV
          </Link>.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Your Right to Additional Living Expenses
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If a covered loss makes your home uninhabitable, the insurer must pay your additional
        living expenses (ALE) for as long as it reasonably takes to repair or replace your
        home. In California after a declared state of emergency, there is a minimum 24-month
        ALE period regardless of what your policy says, with up to 12 additional months
        available for good cause (California Insurance Code &sect; 2060(b)(1)).
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        ALE means the difference between your normal living costs and your actual costs while
        displaced. You do not need to live in the cheapest available housing. You are entitled
        to maintain a comparable standard of living. See{' '}
        <Link href="/resources/ale-frv" className="text-[#1F3964] underline font-medium">
          Additional Living Expenses &amp; Fair Rental Value
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Your Right to Fair Claims Handling
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California Insurance Code &sect; 790.03 and the implementing regulations (10 CCR
        &sect; 2695) define specific practices that constitute unfair claims handling. The
        insurer may not:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>Misrepresent policy provisions to you.</li>
        <li>Fail to acknowledge and act promptly on your claim.</li>
        <li>Deny a claim without conducting a reasonable investigation.</li>
        <li>Offer substantially less than the reasonable value and force you to litigate.</li>
        <li>Delay payment of undisputed amounts to influence settlement of disputed amounts.</li>
        <li>Require you to submit to unreasonable examinations or documentation demands.</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        For the full regulatory framework, see{' '}
        <Link href="/resources/california-fair-claims" className="text-[#1F3964] underline font-medium">
          California Fair Claims Regulations
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Prejudice Requirement &mdash; Your Safety Net
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California law provides an important protection: the insurer generally cannot deny
        a claim for a technical policy violation (late notice, late proof of loss, missed
        deadline) unless they can prove the violation actually <strong>prejudiced</strong>
        them &mdash; meaning it caused a real, material disadvantage in investigating or
        paying the claim.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The burden of proving prejudice is on the <strong>insurer</strong>, not the
        insured. If they cannot show actual harm from the non-compliance, they cannot use
        it to deny the claim. See our detailed article on{' '}
        <Link href="/resources/duties-after-loss" className="text-[#1F3964] underline font-medium">
          duties after loss
        </Link>{' '}
        for more on how this works.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Your Right to Sue for Bad Faith
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the insurance company unreasonably delays, underpays, or denies your claim, you
        may have a cause of action for insurance bad faith. In California, bad faith is a
        tort — meaning damages go beyond the policy limits and can include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>The full amount owed under the policy.</li>
        <li>Emotional distress damages.</li>
        <li>Economic damages caused by the delay (loss of property, forced sale, etc.).</li>
        <li>Attorney fees (Brandt fees).</li>
        <li>Punitive damages in cases of outrageous conduct.</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Bad faith is not just a disagreement about value. It requires the insurer to have
        acted unreasonably and without proper cause. But the bar is lower than most people
        think — and lower than insurance companies want you to believe. See{' '}
        <Link href="/resources/bad-faith" className="text-[#1F3964] underline font-medium">
          Bad Faith Insurance Practices
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What to Do When the Insurer Violates These Rules
      </h2>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Document every violation in writing.</strong> Send an email to the
          adjuster: &ldquo;It has been [X] days since I submitted [documentation]. Under
          10 CCR &sect; 2695.7(b), you were required to accept or deny my claim within 40
          days. Please respond immediately.&rdquo;
        </li>
        <li>
          <strong>Keep a timeline.</strong> Note every date the insured submits documents,
          every date the insurer responds (or fails to respond), and every deadline they
          miss. This becomes the evidence.
        </li>
        <li>
          <strong>Cite the specific regulation.</strong> When calling out a violation, cite
          the section number. This tells the adjuster the insured knows the rules and
          creates a written record that is hard to explain away later.
        </li>
        <li>
          <strong>File a CDI complaint.</strong> The California Department of Insurance
          investigates complaints about Fair Claims violations. A CDI complaint does not
          get the insured paid directly, but it creates regulatory pressure and a
          government record of the violation. See our guide on{' '}
          <Link href="/resources/file-cdi-complaint-guide" className="text-[#1F3964] underline font-medium">
            filing a CDI complaint
          </Link>.
        </li>
        <li>
          <strong>Get professional help.</strong> If violations are piling up and the
          insurer is not responding, a{' '}
          <Link href="/resources/public-adjuster" className="text-[#1F3964] underline font-medium">
            Public Adjuster
          </Link>{' '}
          can take over negotiations, or an attorney can evaluate whether the pattern
          rises to{' '}
          <Link href="/resources/bad-faith" className="text-[#1F3964] underline font-medium">
            bad faith
          </Link>.
        </li>
      </ol>

      <CalloutBox variant="warning" title="Violations Add Up">
        <p>
          A single missed deadline might be an oversight. A pattern of missed deadlines,
          ignored communications, unexplained denials, and lowball offers is not an
          oversight &mdash; it is a claims-handling strategy. Document everything. Each
          violation is a separate regulatory infraction that strengthens the insured&apos;s
          position if the dispute reaches appraisal, CDI complaint, or litigation.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Quick Reference: If Nothing Else, Remember These
      </h2>
      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-5 mb-6">
        <ul className="space-y-2 text-gray-700">
          <li><strong>15 days</strong> &mdash; the insurer must acknowledge the claim and
            respond to communications</li>
          <li><strong>40 days</strong> &mdash; the insurer must accept or deny after
            receiving proof of claim</li>
          <li><strong>30 days</strong> &mdash; the insurer must pay undisputed amounts</li>
          <li><strong>The insured chooses the contractor</strong> &mdash; not the carrier</li>
          <li><strong>No labor depreciation</strong> &mdash; in California, labor does not
            depreciate</li>
          <li><strong>No release required for payment</strong> &mdash; the carrier cannot
            hold money hostage to extract a release</li>
          <li><strong>Everything in writing</strong> &mdash; denials, limitations, and
            delays must be documented</li>
          <li><strong>Undisputed = pay now</strong> &mdash; the carrier cannot withhold
            agreed amounts while fighting over disputed ones</li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Related Reading
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a pocket-reference version of these deadlines and obligations with the exact
        regulation citations, see{' '}
        <Link href="/resources/insurer-obligations-cheat-sheet" className="text-[#1F3964] underline font-medium">
          What Your Insurance Company Is Required to Do &mdash; The Cheat Sheet
        </Link>. For the affirmative disclosure obligations the insurer must proactively
        tell the insured (and routinely fails to), see{' '}
        <Link href="/resources/insurer-disclosure-obligations" className="text-[#1F3964] underline font-medium">
          What Your Insurance Company Is Required to Tell You
        </Link>.
      </p>

      <CalloutBox variant="tip" title="Use These Rights — Don&apos;t Just Know Them">
        <p className="mb-2">
          Insurance companies count on the fact that most policyholders do not know their
          rights. When you demonstrate knowledge — by citing regulations, requesting written
          denials, holding the carrier to deadlines, and documenting every communication —
          the dynamic changes.
        </p>
        <p>
          You do not need to be aggressive. You need to be informed, organized, and
          persistent. Claims move faster and settlements increase when the carrier knows
          they are dealing with someone who understands the rules.
        </p>
      </CalloutBox>
      <hr className="my-8 border-gray-300" />
      <p className="text-sm text-gray-500 italic">
        This article is for informational purposes only and does not constitute legal advice.
        Insurance policies and applicable law vary by state and by policy form. Consult with a
        licensed professional regarding your specific situation.
      </p>
      <p className="text-sm text-gray-500 mt-4 italic">
        Written by Leland Coontz III, Licensed Public Adjuster, CA License #2B53445.
      </p>
    </>
  )
}
