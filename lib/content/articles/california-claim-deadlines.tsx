import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'California Insurance Claim Deadlines and Timeframes',
  description:
    'Every deadline your California insurance company must meet — from acknowledging your claim to paying it. Know the rules so you can hold them accountable.',
  summary:
    'California sets specific deadlines your insurer must meet: acknowledge a claim within 15 days, decide within 40 days of receiving proof of loss, and pay promptly once accepted. Knowing the timeline lets you hold the carrier accountable for delay.',
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
        California has among the most detailed claim handling regulations in the nation. The
        Fair Claims Settlement Practices Regulations (Title 10, California Code of Regulations,
        Section 2695) establish specific deadlines that insurance companies must follow. Knowing
        these deadlines gives you the power to hold your carrier accountable.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">The Key Deadlines</h2>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>15 days</strong> &mdash; The carrier must acknowledge receipt of your claim
          and begin investigation
        </li>
        <li>
          <strong>40 days</strong> &mdash; After receiving a proof of claim, the carrier must
          accept or deny the claim (or inform you of the need for additional time and the
          reasons why)
        </li>
        <li>
          <strong>30 days</strong> &mdash; After reaching agreement on the amount, the carrier
          must issue payment
        </li>
        <li>
          <strong>30 days</strong> &mdash; The carrier must provide written status updates at
          least every 30 days while the claim is open
        </li>
        <li>
          <strong>15 days</strong> &mdash; The carrier must respond to communications from the
          insured that reasonably suggest a response is expected
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Statute of Limitations</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California is unusual in several ways when it comes to the statute of limitations on
        insurance claims. The standard policy requires suit to be filed within one year of the
        loss. However, in California the statute of limitations is tolled (paused) during the
        period the insurance company is investigating. This means the clock is paused while
        the carrier is actively handling your claim.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The carrier is required to inform an insured who is not represented by an attorney of
        their applicable statute of limitations. This is an additional protection unique to
        California that many adjusters forget about. For more on this topic, see our guide on{' '}
        <Link href="/resources/equitable-tolling" className="text-blue-700 underline hover:text-blue-900">
          equitable tolling
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">What Happens When They Miss Deadlines</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Violating the Fair Claims Settlement Practices Regulations can result in:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Department of Insurance complaints and potential fines</li>
        <li>Evidence of bad faith if litigation follows</li>
        <li>Potential penalty damages in a bad faith lawsuit</li>
      </ul>

      <CalloutBox variant="tip" title="Track Every Deadline">
        <p>
          Start a spreadsheet or log from day one. Record when you filed the claim, when the
          carrier acknowledged it, when proof of claim was submitted, and when every
          communication occurred. If a deadline passes without action, send a written reminder
          citing the specific regulation. This paper trail is invaluable if the claim goes to
          litigation.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        After a Declared Disaster: Extended Deadlines and Special Protections
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When the Governor proclaims a state of emergency, a separate set of California Insurance
        Code provisions activates that <strong>supersedes standard policy timeframes</strong>. These
        laws were designed to protect policyholders after catastrophic events like wildfires,
        earthquakes, and floods. The California Department of Insurance issued a formal notice
        reminding all carriers and adjusters that these protections are mandatory &mdash; because
        out-of-state adjusters routinely misrepresent them.
      </p>

      <CalloutBox variant="warning" title="Out-of-State Adjusters Get This Wrong">
        <p>
          After major disasters, carriers bring in hundreds of adjusters from other states who are
          unfamiliar with California law. The CDI has documented cases where adjusters told
          policyholders they had only 6 months to collect replacement cost &mdash; when the law
          guarantees at least 24 months after a declared disaster. If an adjuster tells you something
          about a deadline, verify it against the code sections below.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Replacement Cost Collection &mdash; Insurance Code &sect;2051.5(b)(1)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under normal (non-disaster) circumstances, no policy may impose a replacement cost
        collection deadline of less than <strong>12 months</strong> from the date the first ACV
        payment is made. After a declared state of emergency, that minimum increases to{' '}
        <strong>36 months</strong>, and the insurer must grant additional six-month extensions
        for good cause where the insured, acting in good faith and with reasonable diligence,
        encounters delays in approval or reconstruction beyond their control. The insurer may
        also voluntarily allow more time.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The 36-month figure is recent. As originally enacted, &sect;2051.5(b)(1) set the
        post-emergency minimum at 24 months. Assembly Bill 1800 (Levine, 2018) extended it to
        36 months, effective January 1, 2019, in response to the 2017&ndash;2018 wildfires that
        demonstrated 24 months was not enough time for displaced homeowners to permit, contract,
        and rebuild. Older articles, policy forms, and even some adjusters still reference the
        obsolete 24-month figure &mdash; do not rely on it.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        &ldquo;Declared state of emergency&rdquo; is defined by cross-reference to California
        Government Code &sect;8558 &mdash; it means a state of emergency proclaimed by the
        Governor under the California Emergency Services Act. Major California wildfires,
        earthquakes, and floods typically trigger such a proclamation; routine residential
        claims (a burst pipe, an isolated kitchen fire that does not trigger an emergency
        declaration) do not, and remain subject to the 12-month minimum.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is one of the most commonly misrepresented deadlines after a disaster. If you are
        told you have less than <strong>36 months</strong> to collect your full replacement cost
        after a declared disaster, the adjuster is wrong.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Additional Living Expenses (ALE) &mdash; Insurance Code &sect;2060
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        After a declared state of emergency, ALE coverage must extend for at least{' '}
        <strong>24 months</strong> from the inception of the loss, regardless of the shorter
        period stated in the policy. The insurer must grant up to 12 additional months
        &mdash; for a total of <strong>36 months</strong> &mdash; where the insured encounters
        delays in reconstruction beyond their control. The extended time does not increase the
        ALE dollar limit; it extends the period over which you can use the coverage that was
        already in place at the time of the loss. For more detail on maximizing this coverage,
        see our guide on{' '}
        <Link href="/resources/loss-of-use-maximizing" className="text-blue-700 underline hover:text-blue-900">
          maximizing your ALE claim
        </Link>.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Right to Rebuild at a New Location &mdash; Insurance Code &sect;2051.5(c)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        After a total loss, California law gives you three options for using your replacement cost
        coverage:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Rebuild at the current location</strong></li>
        <li><strong>Rebuild on a different lot</strong></li>
        <li><strong>Purchase an already-built home at a new location</strong></li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        No policy issued in California may limit or deny replacement cost payment because the insured
        chooses to rebuild or buy elsewhere. The measure of indemnity is based on the cost to replace
        the insured property &mdash; not the cost at the new location. If your policy includes
        &ldquo;extended&rdquo; or &ldquo;guaranteed&rdquo; replacement cost, that extended coverage
        applies even if you relocate.
      </p>

      <CalloutBox variant="important" title="This Is Law, Not a Policy Option">
        <p>
          Some adjusters treat the right to relocate as something the carrier can approve or deny.
          It is not. Insurance Code &sect;2051.5(c) is a statutory right. If an adjuster tells you
          that you must rebuild on the same lot to collect your full replacement cost, they are
          misrepresenting California law.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Changing Adjusters &mdash; Insurance Code &sect;2071
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the carrier assigns a third or subsequent adjuster to your claim within a six-month
        period, they must provide you with a <strong>written status report</strong>. That report
        must include a summary of all decisions and actions substantially related to the claim
        &mdash; including amounts of loss to structures and contents, any design or construction
        professionals retained, the amount of coverage, and all items in dispute. This prevents
        your claim from being shuffled between adjusters without accountability.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Appraisal Cannot Be Compelled After a Disaster &mdash; Insurance Code &sect;2071
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        In the event of a government-declared disaster, <strong>appraisal may be requested by either
        side but cannot be compelled</strong>. This is a critical protection. Outside of a declared
        disaster, most standard fire policies allow either party to demand appraisal. After a
        disaster, neither side can force the other into it. This matters because insurers sometimes
        use appraisal to cap damages before all damage is discovered. For more on the appraisal
        process, see our{' '}
        <Link href="/resources/appraisal" className="text-blue-700 underline hover:text-blue-900">
          complete guide to insurance appraisal in California
        </Link>.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Right to a Copy of Your Policy &mdash; Insurance Code &sect;2084
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        After a covered loss, the insurer must provide a complete, current copy of your policy
        within <strong>30 calendar days</strong> of your request, free of charge. This sounds
        obvious, but after a total loss &mdash; where your copy burned with the house &mdash; it
        matters. You cannot effectively dispute a claim without reading the contract.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Cancellation and Non-Renewal Protections After a Loss
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California law also restricts what carriers can do with your policy after a major loss:
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        No Cancellation During Rebuilding &mdash; Insurance Code &sect;675.1(a)(2)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurer <strong>cannot cancel your coverage while the primary structure is being
        rebuilt</strong>, except for the limited reasons specified in Insurance Code &sect;676
        (such as fraud or material misrepresentation). The carrier cannot use the fact that your
        home is in damaged condition as the sole basis for cancellation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is distinct from a separate &mdash; and often confused &mdash; protection in the
        same statute. <strong>Insurance Code &sect;675.1(b)</strong> prohibits an insurer from
        cancelling or non-renewing a residential property policy for one year after a declared
        state of emergency, based solely on the fact that the property is located within or
        adjacent to the perimeter of the declared wildfire. The two provisions overlap in
        spirit but apply differently: &sect;675.1(a)(2) is keyed to <em>your specific total
        loss and rebuild</em>, while &sect;675.1(b) is a <em>geographic moratorium</em> that
        protects every policyholder in an affected zip code regardless of whether they had a
        claim.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Adjustment of Limits on Renewal &mdash; Insurance Code &sect;675.1(a)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your home has not been fully rebuilt by the time your policy comes up for renewal, the
        insurer must consult with you about what limits and coverages are needed during
        reconstruction, adjust the policy accordingly, and adjust the premium to reflect the
        change. This prevents carriers from either dropping you or charging full premiums for a
        structure that no longer exists.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Mandatory Renewal After a Declared Disaster &mdash; Insurance Code &sect;675.1(a)(3)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your total loss was caused by a declared disaster and was not due to your own
        negligence, the insurer must offer to renew your policy for <strong>at least the next
        two annual renewal periods, but no less than 24 months of coverage from the date of
        the loss</strong>. This prevents the practice of non-renewing disaster victims
        immediately after paying their claims. For more on the broader market context, see
        our article on the{' '}
        <Link href="/resources/california-insurance-crisis" className="text-blue-700 underline hover:text-blue-900">
          California insurance crisis
        </Link>.
      </p>

      <CalloutBox variant="legal" title="Summary: Disaster-Specific Deadlines at a Glance">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Replacement cost collection:</strong> 36 months minimum after declared disaster (IC &sect;2051.5(b)(1), as amended by AB 1800 effective 2019), with 6-month good-cause extensions</li>
          <li><strong>ALE coverage period:</strong> 24 months minimum after declared disaster, extendable up to 36 months for good cause (IC &sect;2060)</li>
          <li><strong>Rebuild at new location:</strong> Statutory right after total loss (IC &sect;2051.5(c))</li>
          <li><strong>Appraisal:</strong> Cannot be compelled after government-declared disaster (IC &sect;2071)</li>
          <li><strong>Policy copy:</strong> Within 30 days of request (IC &sect;2084)</li>
          <li><strong>Adjuster change status report:</strong> Required when third adjuster assigned within 6 months (IC &sect;2071)</li>
          <li><strong>Cancellation during rebuild:</strong> Prohibited except for fraud (IC &sect;675.1(a)(2))</li>
          <li><strong>Post-disaster renewal:</strong> At least two annual renewal periods, no less than 24 months of coverage from date of loss (IC &sect;675.1(a)(3))</li>
          <li><strong>Wildfire-zip moratorium:</strong> One-year prohibition on non-renewal for zip codes within/adjacent to declared wildfire perimeter (IC &sect;675.1(b))</li>
        </ul>
      </CalloutBox>

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
