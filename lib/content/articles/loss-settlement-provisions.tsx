import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: "Loss Settlement Provisions: How Your Payout Is Calculated",
  description:
    "The loss settlement clause controls how you get paid. How ACV, RCV, holdback, and rebuilding requirements work in a California homeowner policy.",
  summary:
    'The loss settlement clause controls how you get paid, defining ACV, RCV, the depreciation holdback, and any rebuilding requirement. Read it closely, because it determines whether and when you receive full replacement cost.',
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
        The loss settlement provision is arguably the most important clause in your homeowner
        insurance policy — and one of the least understood. It controls how your payout is
        calculated, when you get paid, how much is withheld, and what you have to do to collect the
        full amount. Misunderstanding this provision costs policyholders thousands, sometimes
        hundreds of thousands, of dollars.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What the Loss Settlement Provision Does
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your loss settlement provision answers four fundamental questions:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>What standard is used to value the loss?</strong> (Replacement cost vs. actual cash value)</li>
        <li><strong>When do you get paid?</strong> (Immediately, or after repairs/replacement?)</li>
        <li><strong>How much is withheld?</strong> (The &ldquo;holdback&rdquo; or depreciation)</li>
        <li><strong>What must you do to collect the full amount?</strong> (Repair, rebuild, or replace?)</li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Replacement Cost vs. Actual Cash Value Policies
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most modern homeowner policies are <strong>replacement cost</strong> policies — meaning
        the insurer agrees to pay the cost to repair or replace damaged property with materials of
        &ldquo;like kind and quality&rdquo; without deduction for depreciation (up to your policy
        limits). This is far more favorable than an actual cash value (ACV) policy, which pays only
        the depreciated value.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        However, even under a replacement cost policy, you typically do not receive the full
        replacement cost upfront. This is where the holdback comes in.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Two-Step Payment Process (Holdback)
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under a standard replacement cost policy, payment happens in two steps:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Step 1: ACV Payment (Initial)</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurer first pays the <strong>actual cash value</strong> of the loss — the replacement
        cost minus depreciation. For example, if your 15-year-old roof costs $30,000 to replace
        and the insurer depreciates it by $12,000, your initial ACV payment is $18,000 (minus
        your deductible).
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Step 2: Holdback Payment (After Repair)</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Once you actually repair or replace the damaged property, the insurer pays the
        <strong> holdback</strong> — the depreciation amount that was withheld. In the example
        above, after you actually replace the roof, you submit the contractor&apos;s invoice and the
        insurer pays the remaining $12,000 (the &ldquo;recoverable depreciation&rdquo;).
      </p>

      <CalloutBox variant="warning" title="You Must Actually Repair to Collect the Holdback">
        <p>
          If you take the ACV payment and do not repair, you forfeit the holdback. This is
          one of the most costly mistakes policyholders make — especially on contents claims where
          they do not realize they need to actually purchase replacement items to collect the
          full amount. See our guide on{' '}
          <Link href="/resources/acv-rcv" className="underline font-semibold">ACV vs. RCV</Link>.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Dwelling Settlement
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        For dwelling damage, the loss settlement provision typically states that the insurer will
        pay the lesser of:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>The replacement cost of that part of the building damaged, with like kind and quality materials</li>
        <li>The amount actually and necessarily spent to repair or replace the damaged building</li>
        <li>The policy limit (Coverage A amount)</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>&ldquo;Like kind and quality&rdquo;</strong> is a critical phrase. It means the
        insurer must pay to restore your property to its pre-loss condition using comparable
        materials — not the cheapest available option. If your home had hardwood floors, the insurer
        cannot pay for laminate and call it &ldquo;like kind.&rdquo; If your cabinets were
        custom, they cannot substitute stock cabinets.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Personal Property Settlement
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Contents claims follow the same two-step process but with some important differences:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>You must document each item.</strong> Unlike dwelling damage where a contractor
          can scope the work, you need a room-by-room inventory of every personal property item
          that was damaged or destroyed. Our free{' '}
          <Link href="/inventory" className="text-[#2E74B5] hover:underline">inventory tool</Link>{' '}
          can help.
        </li>
        <li>
          <strong>Replacement means &ldquo;comparable item new today.&rdquo;</strong> The insurer
          pays what it costs to buy a comparable replacement item at today&apos;s prices — not what
          you originally paid.
        </li>
        <li>
          <strong>You must actually replace to collect the holdback.</strong> For each item, you
          receive ACV initially. When you buy the replacement, you submit the receipt and receive
          the depreciation holdback.
        </li>
        <li>
          <strong>Special limits apply to certain categories.</strong> Your policy likely has
          sublimits for jewelry, firearms, silverware, computers, and other categories. Check your{' '}
          <Link href="/resources/declarations-page" className="text-[#2E74B5] hover:underline">declarations page</Link>.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Depreciation Is Calculated
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under California Insurance Code § 2051 and 10 CCR § 2695.9(f), depreciation must be based
        on the <strong>actual physical condition</strong> of the property, not just its age. Key
        principles:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Physical condition, not age alone.</strong> A well-maintained 20-year-old roof may
          have less depreciation than a poorly-maintained 10-year-old roof. The insurer must assess
          actual condition.
        </li>
        <li>
          <strong>Depreciation must be itemized and justified.</strong> The insurer cannot simply
          apply a blanket percentage. Each component should have depreciation calculated based on
          its condition and expected useful life.
        </li>
        <li>
          <strong>Labor generally should not be depreciated.</strong> A growing body of case law
          holds that labor does not physically deteriorate and therefore should not be subject to
          depreciation. See our guide on{' '}
          <Link href="/resources/labor-depreciation-debate" className="text-[#2E74B5] hover:underline">labor depreciation</Link>.
        </li>
      </ul>

      <CalloutBox variant="tip" title="Key California Cases and Statute">
        <ul className="list-disc pl-4 space-y-1">
          <li>
            <strong>Cal. Ins. Code &sect; 2051(b)</strong> &mdash; the controlling
            authority: ACV is replacement cost less a fair and reasonable deduction for
            physical depreciation (statutory, applies to total and partial losses).
          </li>
          <li>
            <em>Doan v. State Farm General Ins. Co.</em> (2011) 195 Cal.App.4th 1082 &mdash;
            two layers. The binding appellate holding is procedural: a policyholder may
            challenge the insurer&rsquo;s depreciation methodology in court through
            declaratory relief, rather than being forced into appraisal, because an
            appraiser has no authority to decide whether the insurer&rsquo;s method of
            calculating depreciation breaches the contract or violates &sect; 2051. The
            substantive condition-not-age rule the case is best known for came from the
            2016 trial-court ruling on remand &mdash; the correct standard, but not
            statewide-binding precedent.
          </li>
          <li>
            <em>Jefferson Ins. Co. v. Superior Court</em> (1970) 3 Cal.3d 398 &mdash;
            appraisers decide the amount of loss as a question of fact, but an appraisal
            award must be vacated if based on a misinterpretation of &ldquo;actual cash
            value&rdquo; (a question of law). The historical <em>Jefferson</em> definition
            of ACV as fair market value has been superseded by &sect; 2051(b), but
            <em> Jefferson</em>&rsquo;s line between appraisers&rsquo; fact-finding
            authority and the court&rsquo;s legal-interpretation authority remains
            controlling.
          </li>
          <li>
            <em>Cheeks v. California FAIR Plan Ass&rsquo;n</em> (1998) 61 Cal.App.4th 423
            &mdash; historical only. Applied a fair-market-value / broad-evidence approach
            that the Legislature subsequently <strong>superseded</strong> by codifying ACV
            in &sect; 2051(b).
          </li>
        </ul>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Rebuilding at a Different Location
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        What if you do not want to rebuild on the same lot? Most California replacement cost
        policies allow you to rebuild at a different location, but the payment is limited to what
        it would have cost to rebuild at the <em>original</em> location. If the new location is
        cheaper, you get the cheaper amount. If it is more expensive, you get only what the
        original rebuild would have cost.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The land value is always excluded — your policy insures the structure, not the dirt.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Extended Replacement Cost
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many California policies include an extended replacement cost endorsement (sometimes
        called &ldquo;enhanced&rdquo; or &ldquo;guaranteed&rdquo; replacement cost) that pays an
        additional 25–50% above your dwelling limit if the actual rebuild cost exceeds your limit.
        This endorsement typically requires that you actually rebuild to access the extended amount.
        Check your{' '}
        <Link href="/resources/declarations-page" className="text-[#2E74B5] hover:underline">dec page</Link>{' '}
        for this endorsement — it can be worth hundreds of thousands of dollars on a total loss.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        &ldquo;Completed&rdquo; vs. &ldquo;Incurred&rdquo;: The Policy Language That Changes Everything
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        To collect the holdback, your policy requires that repairs be either <strong>completed</strong>{' '}
        or <strong>incurred</strong> &mdash; and the difference between those two words is significant.
        This is an area where insurance adjusters themselves commonly misunderstand or misapply the
        policy language.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Policies That Require &ldquo;Completion&rdquo;
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some policies state that the holdback is payable only after repairs are <em>completed</em>.
        Under this language, the insurer can require proof that the work has actually been finished.
        In theory, the insurance company has the right to come inspect the completed repairs in
        person. In practice, most carriers simply request photographs and a certificate of
        completion from the contractor, or a final invoice marked &ldquo;paid.&rdquo; Once you
        submit this documentation, the insurer releases the holdback.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Policies That Require &ldquo;Incurring&rdquo;
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Other policies use the word <em>incurred</em> rather than <em>completed</em>. This is a
        lower threshold. To &ldquo;incur&rdquo; an expense generally means to become obligated to
        pay it &mdash; which can happen before the work is finished. Signing a contract with a
        contractor creates a legal obligation to pay for the work described in that contract. At
        that point, the expense has been <em>incurred</em>, even if the contractor has not yet
        started.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The distinction matters enormously. Under an &ldquo;incurred&rdquo; policy, a policyholder
        who signs a repair contract should be able to collect the holdback immediately &mdash; they
        do not have to wait until every nail is driven and every wall is painted. This gives the
        policyholder access to the holdback funds earlier, which can be critical for funding the
        repairs themselves.
      </p>

      <CalloutBox variant="legal" title="City Correction Notices as &ldquo;Incurring&rdquo;">
        <p>
          There is case law supporting the position that a city correction notice &mdash; a notice
          from the building department requiring specific work to bring a property into code
          compliance &mdash; can constitute &ldquo;incurring&rdquo; the expense of a code upgrade.
          When the city issues a correction notice, the property owner is legally obligated to
          perform the specified work. That obligation arguably satisfies the &ldquo;incurred&rdquo;
          threshold even before a contractor is hired. This can be particularly valuable for{' '}
          <Link href="/resources/code-upgrade-coverage" className="text-[#2E74B5] underline">
            ordinance and law (code upgrade) coverage
          </Link>
          , where the holdback may be substantial and the policyholder needs the funds to pay for
          expensive code-required improvements.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Read Your Policy Carefully
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Check whether your policy uses the word &ldquo;completed,&rdquo; &ldquo;incurred,&rdquo;
        or some other formulation. If the policy says &ldquo;incurred,&rdquo; do not let the
        adjuster tell you that you must complete repairs before collecting the holdback &mdash;
        that is a misreading of the policy. A signed contract or a city-issued correction notice
        may be sufficient. If the adjuster insists on completion under a policy that only requires
        incurring, put your objection in writing and cite the specific policy language.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Time Limits for Collecting Replacement Cost
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most policies impose a time limit to complete or incur repairs and collect the holdback
        &mdash; typically 180 days to 2 years after the loss or after the ACV payment, depending
        on the policy language. Under California Insurance Code &sect; 2051.5(b)(1)(A), the
        statutory minimum is 12 months from the date the ACV payment is made &mdash; not from the date of
        loss. This distinction matters because there can be months or even years between the date
        of loss and the date the insurer actually issues the ACV payment. After a declared
        state of emergency, &sect; 2051.5(b)(1)(B) extends the minimum to 36 months, with
        additional six-month good-cause extensions. If you are approaching a deadline and
        have not completed or incurred repairs, notify the insurer in writing and request an
        extension before the deadline passes.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Common Insurer Tactics on Loss Settlement
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Aggressive depreciation.</strong> Over-depreciating items to minimize the initial
          ACV payment, knowing that many policyholders never collect the holdback.
        </li>
        <li>
          <strong>Substituting inferior materials.</strong> Using lower-grade materials in the
          estimate instead of &ldquo;like kind and quality&rdquo; &mdash; builder-grade when the home had
          custom finishes. This goes beyond simple cost-cutting. Insurers may specify vinyl plank
          where the home had real hardwood, stock cabinets where the kitchen had custom millwork,
          three-tab shingles where the roof had architectural, or basic tile where the bathroom had
          natural stone. Each substitution violates the &ldquo;like kind and quality&rdquo; standard
          required under most homeowner policies and under California Insurance Code &sect; 2051(b).
          The test is not whether the substitute &ldquo;functions&rdquo; the same way &mdash; it is
          whether it matches in kind, quality, and character. If the insurer&rsquo;s estimate
          specifies a materially different product than what was in the home, dispute each item
          individually and demand the estimate reflect the actual materials that need to be replaced.
        </li>
        <li>
          <strong>Refusing to pay until the entire project is complete.</strong> Some insurers
          withhold holdback until all repairs are finished, even though you may need funds to
          progress. Under California law, the insurer must pay undisputed amounts promptly.
        </li>
        <li>
          <strong>Denying the holdback on contents without receipts.</strong> Some insurers require
          original purchase receipts for replacement items. In practice, a credit card statement,
          online order confirmation, or other reasonable proof should suffice.
        </li>
      </ul>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Not Sure How Your Policy Pays?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          A Public Adjuster can review your loss settlement provision, ensure your claim is
          properly valued, and make sure you collect every dollar — including the holdback.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Request a Free Claim Review →
        </Link>
      </div>

      <CalloutBox variant="legal" title="Important Notice">
        <p>
          This article is provided for general educational purposes only and does not constitute
          legal advice. Insurance policies, regulations, and case law can vary significantly based
          on individual circumstances. Consult a licensed attorney for advice about your specific
          situation. If you need a referral to an attorney experienced in insurance coverage disputes,
          a licensed Public Adjuster may be able to assist.
        </p>
      </CalloutBox>
      <p className="text-sm text-gray-500 mt-4 italic">
        Written by Leland Coontz III, Licensed Public Adjuster, CA License #2B53445.
      </p>
    </>
  )
}
