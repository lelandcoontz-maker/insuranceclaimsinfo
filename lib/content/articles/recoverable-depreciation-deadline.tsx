import Link from 'next/link'
import { QABlock } from '@/components/content/QABlock'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title:
    'Recoverable Depreciation Deadlines: The Trap That Costs Policyholders Thousands',
  description:
    'How the recoverable depreciation deadline works under California Insurance Code Section 2051.5, why carriers benefit when policyholders miss it, and how to protect yourself from losing the holdback. Covers the funding gap trap, clock triggers, extensions, completion requirements, contents vs. dwelling, and equitable defenses.',
  summary:
    'Under California Insurance Code 2051.5, depreciation held back from your payment is recoverable only if you complete repairs within the deadline. Missing it forfeits the holdback, so track the clock, request extensions when needed, and document completion.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational commentary on California recoverable-depreciation rules by
          a Licensed California Public Adjuster. It is not legal advice. The deadline framework
          is statutory (Cal. Ins. Code &sect; 2051.5(b)(1)), and equitable defenses to a missed
          deadline are highly fact-specific. For legal questions, consult a licensed California
          attorney.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        If you have a replacement cost policy, your insurance company pays your property damage claim
        in two stages. The first payment is at actual cash value (ACV) &mdash; the cost to replace
        or repair your damaged property minus depreciation. The second payment, the recoverable
        depreciation or &quot;holdback,&quot; is released after you complete the repairs and submit
        proof of what you spent. The holdback is your money. It was calculated as part of the cost of
        your loss. But your policy imposes a deadline to claim it, and if you miss that deadline, the
        carrier keeps the money permanently.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This two-payment structure creates one of the most consequential traps in property insurance.
        The carrier withholds a substantial portion of your claim &mdash; often 20 to 40 percent of
        the total &mdash; while simultaneously imposing a deadline by which you must complete repairs
        and prove what you spent. If you cannot afford to begin repairs without the withheld money,
        if the carrier&apos;s own delays consume the deadline window, or if you simply do not
        understand that the deadline exists, you lose thousands of dollars. In large claims, you can
        lose tens of thousands.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This article explains how the two-payment structure works, what California law requires, how
        carriers exploit the funding gap, what triggers the clock, how to request extensions, what
        constitutes &quot;completion,&quot; the differences between dwelling and contents depreciation,
        and what equitable arguments exist when the carrier&apos;s own conduct caused you to miss the
        deadline. Understanding this process is essential to protecting your claim.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How the Two-Payment Structure Works
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Replacement cost coverage means your policy will pay to repair or replace damaged property
        with materials of like kind and quality at current prices, without deduction for depreciation.
        But the policy does not pay that full amount immediately. Instead, the claim proceeds in two
        stages:
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Stage One: The ACV Payment.</strong> The carrier inspects the damage, writes an
        estimate, calculates the replacement cost, and then subtracts depreciation to arrive at the
        actual cash value. The ACV payment is issued first. This is the money you receive before you
        begin repairs. See our detailed explanation of{' '}
        <Link href="/resources/acv-rcv" className="text-[#2E74B5] underline">
          ACV vs. RCV
        </Link>{' '}
        for more on how this calculation works.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Stage Two: The Recoverable Depreciation Payment.</strong> After you complete repairs
        or replacement, you submit documentation &mdash; typically paid invoices, contractor receipts,
        and photographs of the completed work &mdash; showing what you actually spent. The carrier then
        releases the depreciation holdback, up to the amount of the depreciation that was originally
        withheld. If you spent more than the original estimate, this may also trigger a{' '}
        <Link href="/resources/supplemental-claims" className="text-[#2E74B5] underline">
          supplemental claim
        </Link>{' '}
        for the additional costs.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The holdback is not a bonus or an optional extra. It is part of the replacement cost of your
        loss that the carrier calculated and agreed to. The two-payment structure exists because the
        policy conditions payment of the full replacement cost on the policyholder actually completing
        repairs. In theory, this ensures the insurance money is used for its intended purpose. In
        practice, it creates a funding problem that many policyholders cannot overcome.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        California Insurance Code Section 2051.5: The Statutory Framework
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California Insurance Code &sect;2051.5 is the statute that governs recoverable depreciation
        deadlines for residential property claims in California. It establishes minimum timeframes
        that override any shorter deadline in your policy, and it provides extended protections for
        losses related to declared states of emergency.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The 12-Month Minimum (Non-Emergency)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Section 2051.5(b)(1) provides that, for a non-emergency residential property claim, no time
        limit of less than 12 months from the date that the first payment toward the actual cash
        value is made shall be placed upon an insured in order to collect the full replacement cost
        of the loss, subject to the policy limit. This is a floor, not a ceiling. If your policy
        provides a longer period &mdash; some policies allow 18 or 24 months &mdash; the longer
        policy period controls. But if your policy says 180 days or 6 months, the statute overrides
        that shorter period in California. You get at least 12 months. The statute also requires
        additional 6-month extensions &ldquo;for good cause.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Note the trigger carefully: &quot;the date of the first payment toward the actual cash
        value.&quot; The clock does not start on the date of loss. It does not start when you
        report the claim. It starts when the carrier actually issues the first ACV payment. This
        distinction matters enormously and is discussed in detail below.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The 36-Month Extended Period for Declared Emergencies
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Section 2051.5(b)(1) also provides that, in the event of a loss relating to a
        &ldquo;state of emergency&rdquo; as defined in Government Code &sect;8558, no time limit
        of less than 36 months from the date that the first payment toward the actual cash value
        is made shall be placed upon the insured to collect the full replacement cost of the loss,
        subject to the policy limit. This extended period reflects the reality that major
        disasters &mdash; wildfires, earthquakes, floods &mdash; create circumstances where
        repairs take far longer than normal. Contractor shortages, permitting backlogs, material
        supply chain disruptions, and the sheer volume of damaged properties in the affected area
        all contribute to extended timelines.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The 36-month period is also a minimum. The same subsection requires additional 6-month
        extensions for good cause, which the statute contemplates for situations where
        circumstances beyond the policyholder&apos;s control prevent timely completion. If you
        are in a declared disaster area and the construction timeline stretches beyond 36 months
        due to permitting delays, contractor availability, or supply chain issues, you should be
        requesting an extension well before the deadline arrives. (Separately, &sect;2051.5(c)(1),
        as amended by AB 1800, confirms an insured&rsquo;s right to collect full replacement cost
        whether rebuilding at the current location, rebuilding at a new location, or purchasing
        an already built home at a new location.)
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        What the Statute Does Not Address
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Section 2051.5 sets minimum deadlines but leaves several questions unresolved. It does not
        define precisely what constitutes &quot;completion&quot; of repairs. It does not specify what
        documentation the carrier can require. It does not address what happens when the claim itself
        is still in dispute when the deadline arrives. These gaps create ambiguity that carriers can
        exploit and that policyholders must navigate carefully.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Funding Gap Trap
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The two-payment structure creates a structural problem that disproportionately impacts
        policyholders with limited financial reserves. Consider a typical scenario:
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A homeowner suffers fire damage. The carrier&apos;s estimate puts the replacement cost of
        repairs at $150,000. After depreciation, the ACV payment is $105,000. The holdback is $45,000.
        The homeowner&apos;s contractor bids the work at $165,000 &mdash; more than the carrier&apos;s
        estimate, which is common because carrier estimates frequently understate actual repair costs.
        The homeowner now faces a gap: they have $105,000 in hand to fund repairs that will cost
        $165,000. The $45,000 holdback the carrier is withholding would close most of that gap, but
        the carrier will not release it until repairs are complete.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The homeowner cannot begin repairs without additional funding. They may not have $60,000 in
        savings. They may not qualify for a construction loan. Their mortgage company may be holding a
        portion of the insurance proceeds in escrow (a separate problem described in our article on{' '}
        <Link href="/resources/mortgage-company-holds" className="text-[#2E74B5] underline">
          mortgage company holds
        </Link>
        ). The result: the homeowner cannot afford to start, the deadline clock is ticking, and if
        they do not complete repairs in time, they lose the $45,000 holdback permanently.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the funding gap trap. The carrier withholds money the policyholder needs to fund the
        repairs, then imposes a deadline to complete those repairs. The policyholder is caught between
        insufficient funds to begin and a ticking clock to finish. The larger the depreciation
        holdback, the wider the gap and the harder it is to close.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Policyholders with older homes are hit hardest. A 25-year-old roof on a house with
        25-year-old HVAC, 25-year-old plumbing fixtures, and 20-year-old flooring will generate
        enormous depreciation deductions. The carrier may withhold 30 to 40 percent of the total claim
        as depreciation. That leaves the homeowner with barely enough to cover materials, let alone
        labor. The{' '}
        <Link href="/resources/depreciation-schedules-useful-life" className="text-[#2E74B5] underline">
          depreciation schedules
        </Link>{' '}
        carriers use to calculate these deductions are often aggressive, further widening the gap.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Carriers Exploit the Funding Gap
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The funding gap does not exist in isolation. It operates within a claims process that the
        carrier controls, and the way the carrier handles that process can make the gap worse. Here
        are the mechanisms:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Slow-Walking the Initial ACV Payment
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Every day the carrier takes before issuing the initial ACV payment is a day the policyholder
        cannot begin repairs. Under{' '}
        <Link href="/resources/california-fair-claims" className="text-[#2E74B5] underline">
          California&apos;s Fair Claims Settlement Practices Regulations
        </Link>
        , the carrier must accept or deny a claim within 40 days of receiving proof of claim. But
        &quot;accepting&quot; the claim and actually issuing payment are different things. The carrier
        may accept the claim in principle but delay payment while it writes the estimate, reviews
        documentation, or processes internal approvals. In practice, it is not uncommon for the first
        ACV payment to arrive 60 to 90 days after the loss. On a large claim with scope disputes, it
        can be months.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        While the statute starts the depreciation clock from the date of the first ACV payment &mdash;
        not the date of loss &mdash; the practical effect of a delayed first payment is still harmful.
        It compresses the overall timeline. The policyholder may have already spent weeks or months
        displaced, anxious, and waiting before the clock even starts.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Underpaying the Initial ACV
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the carrier issues an ACV payment based on an estimate that significantly understates the
        scope of the loss, the funding gap becomes even wider. The policyholder receives less money,
        making it harder to begin repairs. And because the ACV payment triggers the depreciation clock,
        the policyholder is now in the worst possible position: less money in hand, a ticking deadline,
        and a scope dispute to resolve before repairs can even be designed.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Underpayment of the initial ACV is not a rare occurrence. It is the norm in many claims. Our
        article on{' '}
        <Link href="/resources/first-offer-lowball" className="text-[#2E74B5] underline">
          lowball first offers
        </Link>{' '}
        documents how and why this happens. When the initial ACV is too low, the policyholder must
        fight to get the scope corrected through supplements &mdash; a process that takes additional
        weeks or months, all while the depreciation clock runs.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Refusing or Delaying Supplements
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Supplements are requests to increase the claim amount when the original estimate missed items,
        underscoped the damage, or failed to account for code-required upgrades. Supplements are
        routine on any claim of significant size. But every supplement that is disputed, delayed, or
        denied reduces the money available to fund repairs and extends the timeline. If the carrier
        takes 30 days to respond to each supplement, and there are three rounds of supplements (which
        is common on a large loss), that alone consumes three months of the depreciation window.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Not Clearly Communicating the Deadline
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Perhaps the most consequential problem is that many policyholders do not know the deadline
        exists until it is too late. The carrier may mention it in the body of a long letter, buried
        in standard language the policyholder does not read carefully. The carrier may reference it
        only by pointing to a policy section without explaining what it means in practical terms. Some
        policyholders learn about the depreciation deadline only after it has already expired &mdash;
        when they submit their completion documents and the carrier denies the holdback claim because
        the window closed weeks or months earlier.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        California&apos;s Fair Claims Settlement Practices Regulations require carriers to provide
        a reasonable explanation of the basis for claim payments and to inform policyholders of their
        coverage and obligations. A carrier that buries the depreciation deadline in boilerplate
        language without ensuring the policyholder actually understands the deadline and its
        consequences is, at minimum, failing to meet the spirit of these regulations.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When the Clock Starts: What &quot;First Actual Cash Value Payment&quot; Means
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California Insurance Code &sect;2051.5 starts the clock from &quot;the date of the first
        actual cash value payment on the claim.&quot; This language seems straightforward, but disputes
        arise about what constitutes the &quot;first&quot; payment:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Emergency or advance payments.</strong> If the carrier issues an emergency payment
          or an advance to cover immediate needs &mdash; temporary repairs, debris removal, or
          emergency lodging &mdash; does that constitute the &quot;first actual cash value
          payment&quot;? Many policyholders argue it does not, because these payments are not based on
          a comprehensive ACV calculation of the loss. They are stop-gap measures, not the formal ACV
          settlement. The carrier, on the other hand, may argue that any payment on the claim starts
          the clock.
        </li>
        <li>
          <strong>Partial payments on undisputed amounts.</strong> If the carrier issues a partial
          payment on the undisputed portion of the claim while the disputed portion remains unresolved,
          that partial payment is an ACV payment and likely starts the clock. This is important because
          the carrier may issue a small undisputed payment early in the process while the bulk of the
          claim remains in dispute for months.
        </li>
        <li>
          <strong>Payments to the mortgage company.</strong> If the check is made payable to the
          mortgage company and the mortgage company holds the funds in escrow, the policyholder may
          argue the clock should not start until the funds are actually released to the policyholder
          and available for repairs. A payment you cannot access is not functionally a payment at all.
        </li>
        <li>
          <strong>Contents vs. dwelling payments.</strong> A claim may involve separate ACV payments
          for dwelling damage and personal property (contents). Do these run on separate clocks? The
          statute refers to the first ACV payment &quot;on the claim.&quot; If dwelling and contents
          are treated as parts of the same claim, the first payment on either one could arguably start
          the clock for both. Policyholders should consider requesting that the carrier specify
          separate deadlines for dwelling and contents depreciation if they are handled on different
          timelines.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        These ambiguities matter because a single day can be the difference between recovering the
        holdback and losing it permanently. If you are unsure when your clock started, request a
        written confirmation from the carrier specifying the exact date they consider the first ACV
        payment and the resulting deadline. If the carrier refuses to provide this, you should document
        your request and the refusal.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Extensions: Declared Emergency Provisions and Policy-Based Options
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Declared State of Emergency
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        As discussed above, Section 2051.5(b)(1) extends the minimum deadline to 36 months for
        losses related to a Governor-declared state of emergency. This provision exists because the
        legislature recognized that catastrophic events create systemic delays that no individual
        policyholder can overcome: entire communities need contractors simultaneously, building
        departments are overwhelmed with permit applications, material supply chains are strained,
        and the scope of rebuilding is often far more complex than ordinary repairs.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Even with the 36-month extension, some policyholders in major disasters cannot complete
        rebuilding within that window. After the 2017 and 2018 California wildfires, many homeowners
        were still in the permitting or construction phase well beyond 36 months. The statute provides
        for further extension &quot;for good cause,&quot; and California Department of Insurance
        bulletins have historically encouraged carriers to grant extensions liberally in disaster
        situations. But &quot;encouraged&quot; is not &quot;required,&quot; and some carriers treat
        extension requests as opportunities for further negotiation rather than as the straightforward
        administrative process they should be.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Policy Provisions
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some policies provide longer depreciation recovery periods than the statutory minimum. A
        policy that allows 24 months to recover depreciation gives you more time than the 12-month
        statutory floor. Review your policy&apos;s loss settlement provisions carefully. The relevant
        language typically appears in the Conditions section under &quot;Loss Settlement,&quot;
        &quot;Loss Payment,&quot; or &quot;How We Pay Losses.&quot; If your policy language is unclear
        about the timeframe, that ambiguity should be construed in your favor under the doctrine of{' '}
        <Link href="/resources/contra-proferentem" className="text-[#2E74B5] underline">
          contra proferentem
        </Link>{' '}
        &mdash; the carrier wrote the policy, and any ambiguity is interpreted against the drafter.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Requesting Extensions in Writing
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Whether you are in a declared disaster or a non-emergency claim, you should request an
        extension in writing as soon as you recognize the deadline may be a problem. Do not wait until
        the last week. The request should be sent well in advance &mdash; ideally 60 to 90 days before
        the deadline &mdash; and should include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          The specific deadline date you are requesting to extend
        </li>
        <li>
          The reasons repairs are not yet complete, with specifics (permitting delays, material lead
          times, contractor scheduling, scope disputes with the carrier, etc.)
        </li>
        <li>
          Documentation showing that the delays were not caused by your inaction &mdash; a timeline
          of the claim, showing your prompt cooperation at each stage
        </li>
        <li>
          A proposed new deadline that is realistic given the remaining work
        </li>
        <li>
          A request for the carrier&apos;s written response
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Send this request by certified mail or email with delivery confirmation. Keep a copy. If the
        carrier does not respond, follow up in writing and note the lack of response. If the carrier
        denies the extension, request the specific basis for the denial in writing. A carrier that
        refuses to extend a deadline when its own delays contributed to the policyholder&apos;s
        inability to complete repairs is creating a record that supports equitable defenses and
        potential bad faith claims.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The &quot;Completion&quot; Requirement: What Must You Prove?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The policy typically requires that you &quot;actually repair or replace the damaged
        property&quot; before recovering depreciation. This raises several practical questions:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Must Repairs Be 100% Complete?
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most policies and California law do not require that the entire project be finished before you
        can submit for any recoverable depreciation. You can &mdash; and should &mdash; submit for
        recoverable depreciation on completed portions of the work as they are finished. If the roof
        is done but the interior is still underway, submit the roofing invoices and recover the
        depreciation on the roof. If the kitchen cabinets are installed but the bathroom is still being
        tiled, submit for the kitchen.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Recovering depreciation in stages is one of the most important strategies for protecting
        yourself against the deadline trap. Even if the overall project extends beyond the deadline,
        depreciation recovered on completed portions before the deadline expires is money in your
        pocket.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        What If the Claim Is Still in Dispute?
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is one of the most difficult situations. The carrier and the policyholder disagree on the
        scope or cost of repairs. The dispute has been ongoing for months. The policyholder cannot
        complete repairs because the carrier has not agreed to pay for the full scope of work. The
        deadline approaches. The carrier argues the policyholder forfeited the holdback because repairs
        are not complete. The policyholder argues they could not complete repairs because the carrier
        would not agree to the correct scope.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is precisely the situation where equitable arguments become critical. A carrier cannot
        create the conditions that prevent a policyholder from meeting a deadline and then enforce
        that deadline to avoid payment. If the claim is in active dispute, particularly if the dispute
        is about scope items that prevent construction from proceeding, the policyholder should
        document the dispute timeline meticulously, request an extension citing the pending dispute,
        and preserve all equitable defenses (discussed below).
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        One practical approach: begin repairs on the undisputed portions of the scope while continuing
        to dispute the remaining items. This accomplishes two things &mdash; it generates invoices you
        can submit for depreciation recovery on completed work, and it demonstrates your good-faith
        intent to complete repairs. It also neutralizes any carrier argument that you were simply
        sitting on the claim.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        What Counts as Proof of Completion?
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The carrier will typically require documentation showing that repairs were completed and paid
        for. Common documentation includes:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Paid invoices</strong> from contractors, showing the work performed and the amount
          paid
        </li>
        <li>
          <strong>Receipts</strong> for materials purchased, if you purchased materials separately
          from the contractor&apos;s invoice
        </li>
        <li>
          <strong>Photographs</strong> of completed repairs, showing the finished condition
        </li>
        <li>
          <strong>Contractor statements</strong> confirming that the work is complete and paid in
          full
        </li>
        <li>
          <strong>Permits and final inspections</strong> from the building department, if applicable
        </li>
        <li>
          <strong>Cancelled checks or bank statements</strong> showing payment to the contractor
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some carriers are more demanding than others about documentation. If the carrier asks for
        documentation you believe is unreasonable or beyond what the policy requires, respond in
        writing and provide what you can while noting your objection to the excess requirements. Do
        not let unreasonable documentation demands prevent you from submitting your claim before the
        deadline. Submit what you have, note what you are disputing, and preserve the record.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Recoverable Depreciation: Contents vs. Dwelling
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Recoverable depreciation on your dwelling (Coverage A) and your personal property or contents
        (Coverage C) involves fundamentally different processes, different documentation requirements,
        and often dramatically different depreciation amounts. Understanding the distinction is
        critical.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Dwelling Depreciation
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Dwelling depreciation is applied to the building components that need repair or replacement:
        the roof, flooring, drywall, electrical, plumbing, cabinetry, countertops, appliances, HVAC,
        and so on. Each component is assigned a{' '}
        <Link href="/resources/depreciation-schedules-useful-life" className="text-[#2E74B5] underline">
          useful life and depreciation rate
        </Link>{' '}
        based on the carrier&apos;s internal schedules. Older homes generate higher depreciation
        because more components are closer to or beyond their assigned useful lives.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        To recover dwelling depreciation, you must complete the repairs and submit invoices showing
        what you actually paid. The carrier then compares your actual costs to their estimate. If your
        costs meet or exceed the carrier&apos;s replacement cost estimate, you recover the full
        holdback. If your costs are less (perhaps because you found a less expensive way to accomplish
        the same repair), you may recover only the depreciation up to your actual cost.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Contents Depreciation
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Contents depreciation is applied item by item to your personal property: furniture,
        electronics, clothing, kitchenware, tools, decorations, and everything else you own. The
        depreciation rates on contents can be extreme &mdash; electronics may be depreciated at 10 to
        20 percent per year, clothing at 20 to 25 percent per year, and furniture at 5 to 10 percent
        per year. A five-year-old laptop that cost $1,500 new may have an ACV of $300 after 80 percent
        depreciation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        To recover contents depreciation, you must replace the items and submit proof of purchase.
        This can be extraordinarily burdensome on a large loss. A homeowner who lost everything in a
        fire may have 500 or more items on their{' '}
        <Link href="/resources/contents-claims" className="text-[#2E74B5] underline">
          contents inventory
        </Link>
        . Replacing all of them within the depreciation deadline &mdash; especially while displaced,
        possibly living in temporary housing with limited storage &mdash; is a logistical and financial
        challenge.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The funding gap is often worse for contents than for dwelling. The ACV payment on a heavily
        depreciated contents inventory may be a fraction of the replacement cost. A policyholder who
        needs $80,000 to replace their personal property but receives only $45,000 at ACV cannot
        afford to buy everything. They buy what they can, submit those receipts, recover the
        depreciation on those items, and still have hundreds of items they could not afford to replace
        before the deadline.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The same strategies apply: replace items in stages, submit receipts as you go, and recover
        depreciation on purchased items before the deadline. Prioritize the highest-value items where
        the depreciation holdback is largest &mdash; furniture, appliances, and electronics typically
        have the largest individual depreciation amounts.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Protect Yourself: A Practical Checklist
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The recoverable depreciation deadline is manageable if you understand it and plan for it from
        the beginning of your claim. Here are the steps to protect yourself:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Identify the deadline immediately.</strong> As soon as you receive your first ACV
          payment, determine when the depreciation recovery period expires. Calculate the date based
          on the statute (12 months for non-emergency, 36 months for declared emergencies) and compare
          it to your policy&apos;s stated period. Use whichever is longer. Put the deadline on your
          calendar with reminders at 6 months, 90 days, 60 days, and 30 days before expiration.
        </li>
        <li>
          <strong>Confirm the start date in writing.</strong> Ask the carrier to confirm in writing
          what date they consider the first ACV payment and what they consider the resulting deadline.
          This eliminates ambiguity and prevents the carrier from later claiming the clock started
          earlier than you believed.
        </li>
        <li>
          <strong>Start repairs as soon as financially possible.</strong> Even if the full scope is in
          dispute, begin work on the undisputed portions. Every completed repair generates invoices you
          can submit for depreciation recovery.
        </li>
        <li>
          <strong>Submit depreciation recovery requests in stages.</strong> Do not wait until the
          entire project is done. Submit paid invoices for completed work as each phase finishes. This
          locks in the depreciation recovery on completed portions regardless of what happens with the
          remaining work.
        </li>
        <li>
          <strong>Track every carrier-caused delay.</strong> Maintain a detailed timeline of the claim
          process, noting each action you took and each response (or non-response) from the carrier.
          This becomes your evidence if you need to argue that the carrier&apos;s delays caused you to
          miss the deadline.
        </li>
        <li>
          <strong>Request extensions early.</strong> Do not wait until the deadline is imminent. If
          you see the deadline approaching with significant work remaining, request an extension 60 to
          90 days before expiration.
        </li>
        <li>
          <strong>Document everything in writing.</strong> Phone conversations are easily denied. Send
          every extension request, status update, and dispute by email or certified mail. Keep copies
          of everything.
        </li>
        <li>
          <strong>Understand what triggers the clock.</strong> Know whether advance payments, partial
          payments, or payments to the mortgage company start your deadline. If there is any ambiguity,
          address it in writing with the carrier.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When the Deadline Becomes Unconscionable: Equitable Defenses
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        There are situations where strict enforcement of the depreciation deadline would be
        fundamentally unfair &mdash; where the carrier&apos;s own conduct caused or contributed to the
        policyholder missing the deadline. In these situations, several equitable doctrines provide
        potential defenses:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Equitable Estoppel
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the carrier&apos;s conduct caused the policyholder to miss the deadline, the carrier may be
        estopped from enforcing it. Equitable estoppel applies when one party makes a representation
        or engages in conduct that the other party reasonably relies upon, and enforcement of the
        deadline would be unjust as a result. Examples include: the carrier&apos;s adjuster verbally
        told the policyholder they had &quot;plenty of time&quot;; the carrier delayed the scope
        determination so long that repairs could not be completed; or the carrier&apos;s preferred
        vendor spent months on failed repair attempts that consumed the deadline window.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Waiver
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the carrier continued to process the claim, accepted completion documents, or otherwise
        acted as though the deadline had not passed, the carrier may have waived its right to enforce
        the deadline. Waiver occurs when a party voluntarily relinquishes a known right through
        conduct inconsistent with enforcing that right. See our article on{' '}
        <Link href="/resources/estoppel-waiver-insurance" className="text-[#2E74B5] underline">
          estoppel and waiver
        </Link>{' '}
        for a broader discussion of these doctrines.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Prejudice Requirement
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under California law, an insurer generally cannot enforce a policy condition against a
        policyholder unless the insurer can demonstrate actual prejudice from the policyholder&apos;s
        failure to comply. If the policyholder completed repairs one month after the deadline expired
        and submitted all documentation, what prejudice did the carrier suffer? The carrier&apos;s
        exposure is the same whether it pays the holdback on day 365 or day 395. The cost of the
        repairs is the same. The documentation is the same. The only difference is that the carrier
        gets to keep money it owes by enforcing a technicality.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The prejudice requirement is a powerful defense, but it is not universally applied to every
        policy condition. Whether it applies to the depreciation recovery deadline specifically depends
        on how the court characterizes the deadline &mdash; as a condition precedent (which may not
        require prejudice) or as a condition subsequent (which typically does). This is an area where
        legal counsel is valuable.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Bad Faith
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When the carrier&apos;s own delays caused the policyholder to miss the deadline, and the
        carrier then enforces the deadline to avoid paying the holdback, the carrier&apos;s conduct
        may constitute{' '}
        <Link href="/resources/bad-faith" className="text-[#2E74B5] underline">
          bad faith
        </Link>
        . The analysis is straightforward: the carrier has a financial incentive to delay (every day of
        delay moves the policyholder closer to forfeiture), the carrier controls the pace of the claims
        process, and the carrier benefits financially when the deadline expires. If the carrier&apos;s
        delays were unreasonable and contributed to the forfeiture, that is a pattern consistent with
        bad faith.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Bad faith damages in California can include the amount of the holdback itself, consequential
        damages, emotional distress, and in egregious cases, punitive damages. The threat of bad faith
        liability is often the most effective tool for persuading a carrier to grant an extension or to
        pay the holdback despite a missed deadline.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Relationship Between Depreciation Holdback and Carrier Delay Tactics
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The depreciation holdback does not exist in a vacuum. It is one of several{' '}
        <Link href="/resources/time-pressure-negotiation-weapon" className="text-[#2E74B5] underline">
          time-based pressure points
        </Link>{' '}
        that carriers use, consciously or structurally, to reduce claim payments. The others include
        the Additional Living Expense (ALE) time limit, the statute of limitations, and simple claim
        fatigue. Each of these pressures pushes the policyholder toward accepting less than they are
        owed, and they compound when they overlap.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Consider a displaced homeowner whose ALE is running out while the depreciation deadline
        approaches and the scope of repairs is still in dispute. This policyholder faces three
        simultaneous pressures: they need to get back into their home before ALE expires, they need to
        complete repairs before the depreciation deadline passes, and they need to resolve the scope
        dispute to know what the repairs should actually include. Each pressure pushes them toward
        compromise &mdash; accepting a lower scope, using cheaper materials, cutting corners on
        construction quality &mdash; just to meet the deadlines. Our article on{' '}
        <Link href="/resources/construction-timeline-disputes-ale" className="text-[#2E74B5] underline">
          construction timeline disputes and ALE
        </Link>{' '}
        explores this dynamic in detail.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The carrier, by contrast, faces none of these pressures. The carrier&apos;s costs do not
        increase with time (indeed, they may decrease if the policyholder forfeits the holdback or
        accepts a lower settlement out of exhaustion). The carrier has no personal stake in the
        outcome. The carrier&apos;s adjuster will move on to the next file. This asymmetry of pressure
        is the most fundamental structural advantage the carrier holds, and the depreciation deadline
        is one of its most effective expressions.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The only effective counterweight to this asymmetry is preparation, documentation, and
        professional representation. A policyholder who understands the deadline, tracks the carrier&apos;s
        delays, submits depreciation recovery requests in stages, and engages a{' '}
        <Link href="/resources/public-adjuster" className="text-[#2E74B5] underline">
          licensed Public Adjuster
        </Link>{' '}
        or attorney early in the process is far less likely to lose the holdback than one who navigates
        the process alone.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Replacement Cost Policy Variations
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Not all replacement cost policies work the same way, and the depreciation recovery process can
        vary depending on your specific coverage type:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Standard Replacement Cost.</strong> Pays to replace damaged property with materials
          of like kind and quality. Subject to depreciation holdback and recovery deadlines as
          described throughout this article.
        </li>
        <li>
          <strong>
            <Link href="/resources/replacement-cost-vs-guaranteed" className="text-[#2E74B5] underline">
              Guaranteed or Extended Replacement Cost
            </Link>
            .
          </strong>{' '}
          Pays above the policy limit if necessary to rebuild. Still subject to the two-payment
          structure and depreciation recovery deadlines, but the additional coverage above the base
          limit can help close the funding gap. The holdback on a guaranteed replacement cost policy
          can be substantial because the total replacement cost &mdash; and therefore the depreciation
          calculation &mdash; may be higher.
        </li>
        <li>
          <strong>Functional Replacement Cost.</strong> Pays to replace with functionally equivalent
          but not necessarily identical materials. Depreciation applies, but the base replacement cost
          may be lower because the carrier is not paying for like-kind-and-quality replacement. See
          our article on{' '}
          <Link href="/resources/functional-replacement-cost" className="text-[#2E74B5] underline">
            functional replacement cost
          </Link>{' '}
          for more detail.
        </li>
        <li>
          <strong>ACV-Only Policies.</strong> If your policy pays on an actual cash value basis only,
          there is no recoverable depreciation. The depreciated amount is all you receive. There is no
          holdback and no deadline because there is nothing to recover. This is the worst-case
          scenario for policyholders with older property.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Common Carrier Arguments and How to Counter Them
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a carrier denies a recoverable depreciation claim based on the deadline, they typically
        rely on one of several arguments. Here is how to address each:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        &quot;The Policy Is Clear and the Deadline Has Passed&quot;
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Counter: The policy deadline may be superseded by the statutory minimum under Section 2051.5.
        If the policy says 180 days but the statute requires 12 months, the statute controls. Even if
        the statutory period has also expired, equitable defenses (estoppel, waiver, prejudice) may
        prevent enforcement if the carrier&apos;s conduct contributed to the missed deadline.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        &quot;You Had Ample Time to Complete Repairs&quot;
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Counter: Respond with your documented timeline showing how the carrier&apos;s process consumed
        the available time. Detail the days spent waiting for the initial inspection, the weeks spent
        on scope disputes, the months spent waiting for supplement responses, and the delays caused by
        the carrier&apos;s vendors. Show that the &quot;ample time&quot; was consumed by the
        carrier&apos;s process, not the policyholder&apos;s inaction.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        &quot;You Could Have Started Repairs Earlier&quot;
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Counter: You could not start repairs until (a) the scope was agreed upon, (b) permits were
        obtained, (c) materials were available, and (d) sufficient funds were in hand. If the ACV
        payment was too low to fund the repairs and the carrier refused to increase it, the carrier
        created the conditions that prevented early commencement. You are not required to fund repairs
        out of pocket when the carrier is withholding money that should have been included in the ACV
        payment.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        &quot;We Did Not Receive Your Extension Request&quot;
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Counter: This is why every communication should be documented. Certified mail provides proof
        of delivery. Emails provide a timestamp. If the carrier claims they never received your
        extension request, your documentation proves otherwise.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Special Considerations
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Claims in Appraisal or Litigation
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your claim is in appraisal or litigation, the depreciation deadline creates additional
        complexity. The amount owed may not be determined until the appraisal panel issues its award
        or the court enters judgment. Can you &quot;complete repairs&quot; when the scope of repairs
        is the subject of the dispute? This is a strong argument for tolling or extending the
        deadline during the pendency of the dispute.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Owner-Performed Repairs
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you perform some repairs yourself rather than hiring a contractor, you may face additional
        challenges in documenting &quot;completion.&quot; You will not have contractor invoices for
        labor. You should keep detailed records of materials purchased (receipts), time spent
        (a daily log with photographs), and the completed result. Some carriers resist paying
        recoverable depreciation on owner-performed labor; your documentation is your defense.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Deciding Not to Rebuild
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you decide not to repair or rebuild, you generally cannot recover the depreciation holdback.
        The policy conditions the second payment on actually completing repairs. However, some
        policies and some California provisions allow you to rebuild at a different location, which
        may satisfy the repair requirement. See our article on{' '}
        <Link href="/resources/deciding-not-to-rebuild" className="text-[#2E74B5] underline">
          deciding not to rebuild
        </Link>{' '}
        for more on this topic.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Bottom Line
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The recoverable depreciation deadline is one of the most consequential deadlines in your
        insurance claim. It determines whether you receive the full replacement cost of your loss or
        only the depreciated actual cash value. The structural dynamics of the two-payment system &mdash;
        carrier withholding funds that the policyholder needs to complete repairs, while imposing a
        deadline to complete those repairs &mdash; create a trap that catches policyholders who are
        unaware, underfunded, or overwhelmed by the claims process.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The defenses against this trap are preparation, documentation, and knowledge. Know your
        deadline. Confirm it in writing. Start repairs as early as possible. Submit depreciation
        recovery requests in stages. Track carrier-caused delays. Request extensions before the
        deadline arrives. And if the carrier&apos;s own conduct caused you to miss the deadline,
        understand that equitable doctrines exist to prevent the carrier from profiting from its own
        delays.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is educational information based on California law and common claim scenarios. It is not
        legal advice. Recoverable depreciation deadlines vary by policy and may be modified by
        statute, regulation, or CDI bulletin depending on the nature of the loss. For guidance on your
        specific claim, consult a licensed{' '}
        <Link href="/resources/public-adjuster" className="text-[#2E74B5] underline">
          Public Adjuster
        </Link>{' '}
        or an attorney experienced in insurance coverage disputes.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Frequently Asked Questions
      </h2>
      <QABlock pairs={[
        {
          question: 'How does the two-payment replacement-cost structure work?',
          answer: 'Replacement cost policies pay in two stages. Stage One: the carrier issues an actual cash value (ACV) payment — replacement cost minus depreciation — before repairs begin. Stage Two: after you complete the repairs and submit documentation (paid invoices, contractor receipts, photographs), the carrier releases the depreciation holdback up to the original depreciation amount. The holdback is not a bonus or optional extra — it is part of the replacement cost the carrier calculated and agreed to. The structure exists because the policy conditions full payment on the policyholder actually completing repairs.',
        },
        {
          question: 'What deadline does California impose for recovering depreciation?',
          answer: 'California Insurance Code §2051.5(b)(1) sets the minimum at no fewer than 12 months from the date that the first payment toward the actual cash value is made for residential property claims. For losses related to a Governor-declared state of emergency (wildfires, earthquakes, floods), the same subsection extends the minimum to 36 months, with additional 6-month extensions "for good cause." These statutory minimums override any shorter deadline in your policy — but if your policy provides a longer period (some allow 18 or 24 months for non-emergency claims), the longer policy period controls.',
        },
        {
          question: 'When exactly does the depreciation clock start?',
          answer: 'Section 2051.5 starts the clock from "the date of the first actual cash value payment on the claim" — not the date of loss, not the date the claim was reported. Disputes arise over what counts as the "first" payment: emergency or advance payments (arguably not the formal ACV settlement), partial payments on undisputed amounts (likely start the clock), payments to the mortgage company held in escrow (policyholder may argue the clock should not start until funds are released and available for repairs), and whether dwelling and contents run on separate clocks. If there\'s any ambiguity, request written confirmation from the carrier of the exact date they consider the first ACV payment and the resulting deadline.',
        },
        {
          question: 'What is the "funding gap trap"?',
          answer: "The carrier withholds depreciation that the policyholder needs to fund repairs, then imposes a deadline to complete those repairs. A homeowner whose ACV payment is $105,000 on a $150,000 estimate (with the contractor bidding the actual work at $165,000) cannot begin repairs without the withheld $45,000 holdback the carrier won't release until repairs are done. The policyholder is caught between insufficient funds to begin and a ticking clock to finish. Older homes are hit hardest — 25-year-old roofs, HVAC, plumbing, and flooring generate enormous depreciation deductions, sometimes 30–40% of the total claim.",
        },
        {
          question: 'Do I have to wait until repairs are 100% complete to submit?',
          answer: 'No. Most policies and California law do not require the entire project to be finished before you can submit for any recoverable depreciation. You can — and should — submit for depreciation on completed portions as they finish. Roof done? Submit the roofing invoices and recover that depreciation. Kitchen cabinets installed but bathroom still being tiled? Submit for the kitchen. Recovering depreciation in stages is one of the most important strategies for protecting yourself against the deadline trap. Even if the overall project extends beyond the deadline, depreciation already recovered on completed portions is money in your pocket.',
        },
        {
          question: "What if the carrier's own delays caused me to miss the deadline?",
          answer: 'Several equitable doctrines may prevent enforcement. Equitable estoppel — if the carrier\'s conduct (verbal assurances of "plenty of time," prolonged scope determinations, failed repair attempts by preferred vendors) caused the missed deadline, the carrier may be estopped from enforcing it. Waiver — if the carrier continued to process the claim or accepted completion documents after the deadline, it may have waived enforcement. The prejudice requirement — under California law, an insurer generally cannot enforce a policy condition unless it can show actual prejudice from the policyholder\'s non-compliance. And bad faith — when carrier-caused delays produce the forfeiture, the carrier\'s conduct may itself be a bad faith breach. The threat of bad faith liability is often the most effective tool for persuading a carrier to grant an extension or pay despite a missed deadline.',
        },
        {
          question: 'How is contents depreciation different from dwelling depreciation?',
          answer: 'Contents depreciation can be extreme — electronics depreciated at 10–20% per year, clothing at 20–25%, furniture at 5–10%. A five-year-old laptop that cost $1,500 may have an ACV of $300. The funding gap is often worse for contents than dwelling: the ACV on a heavily depreciated contents inventory may be a fraction of the replacement cost. A homeowner needing $80,000 to replace personal property but receiving only $45,000 ACV cannot buy everything before the deadline. The strategy is the same as for dwelling — replace in stages, submit receipts as you go, recover depreciation on purchased items before the deadline expires, and prioritize the highest-depreciation items (furniture, appliances, electronics) where the holdback is largest.',
        },
      ]} />

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
