import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title:
    'Reverse Mortgages and Insurance Claims: The Three-Way Trap That Can Cost You Your Home',
  description:
    'When a HECM reverse mortgage borrower suffers a property loss, the insurance claim becomes a three-way conflict between the homeowner, the insurer, and the reverse mortgage servicer. Learn how HECM insurance requirements work, what triggers a due-and-payable event, and how to protect yourself from foreclosure after a disaster.',
  summary:
    'After a loss, a HECM reverse mortgage creates a three-way conflict among homeowner, insurer, and servicer over the proceeds, and a loss can trigger a due-and-payable event risking foreclosure. Understand the HECM rules to protect your home and your claim money.',
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
        If you have a reverse mortgage and your home suffers a fire, flood, windstorm, or any
        other insured loss, you are about to enter one of the most complicated and dangerous
        situations in all of property insurance. The insurance claim that would already be
        stressful for any homeowner becomes exponentially harder when a Home Equity Conversion
        Mortgage (HECM) is involved &mdash; because the reverse mortgage servicer has its own set
        of requirements, its own timeline, and its own interests, and those interests do not
        always align with yours.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most homeowners with{' '}
        <Link href="/resources/mortgage-company-holds" className="text-[#2E74B5] hover:underline">
          forward mortgages
        </Link>{' '}
        already struggle when their lender&rsquo;s name appears on the insurance check. But the
        reverse mortgage version of this problem is worse &mdash; significantly worse &mdash;
        because the HECM program layers on federal regulatory requirements that can turn a
        property loss into a foreclosure trigger. This article explains how it works, what can go
        wrong, and what a HECM borrower should do to protect themselves.
      </p>

      {/* ────────────────── WHAT IS A HECM ────────────────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Understanding the HECM: Why Reverse Mortgages Are Different
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A Home Equity Conversion Mortgage (HECM) is a federally insured reverse mortgage program
        administered by the U.S. Department of Housing and Urban Development (HUD) through the
        Federal Housing Administration (FHA). It allows homeowners aged 62 and older to convert
        their home equity into cash &mdash; either as a lump sum, a line of credit, or monthly
        payments &mdash; without making monthly mortgage payments. Instead of paying the lender
        each month, the loan balance grows over time and is repaid when the borrower dies, sells
        the home, or permanently moves out.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        HECMs account for the overwhelming majority of reverse mortgages in the United States.
        Because the FHA insures the lender against loss, the program comes with extensive federal
        regulations &mdash; codified primarily in 24 CFR Part 206 &mdash; that govern everything
        from property maintenance to insurance requirements to occupancy rules. These federal
        requirements create obligations that do not exist in a conventional forward mortgage, and
        they give the reverse mortgage servicer powers that a conventional lender does not have.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In a forward mortgage, you owe the lender money and you are paying it down every month.
        The dynamic is straightforward: the lender wants to protect its collateral, and the
        borrower wants to protect the home. Their interests are largely aligned when a loss
        occurs &mdash; both want the property repaired.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In a reverse mortgage, the dynamic is fundamentally different. The loan balance is
        <em> growing</em>, not shrinking. The borrower is not making payments. The lender&rsquo;s
        exposure increases every month. And the FHA is standing behind the lender, which means
        HUD has its own interest in the outcome. When a property loss occurs, three parties are
        now involved &mdash; the homeowner, the insurance company, and the HECM servicer (acting
        under HUD&rsquo;s regulations) &mdash; and each one has a different priority.
      </p>

      <CalloutBox variant="important" title="The Three-Way Dynamic">
        <p>
          In a forward mortgage claim, there are two parties with largely aligned interests: you
          want the house fixed, and the lender wants the house fixed. In a reverse mortgage claim,
          there are three parties with <strong>divergent</strong> interests: you want the house
          fixed so you can live in it; the insurer wants to minimize payment; and the HECM servicer
          may decide that calling the loan due is more advantageous than releasing funds for
          repairs. Understanding this dynamic is the first step toward protecting yourself.
        </p>
      </CalloutBox>

      {/* ────────────────── INSURANCE REQUIREMENTS ────────────────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        HECM Insurance Requirements: What HUD Demands
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        HUD imposes specific insurance requirements on every HECM property. These requirements
        are not optional. Failure to maintain compliant insurance coverage is itself a default
        event that can trigger the loan being called due and payable. The key requirements are
        found in 24 CFR &sect; 206.205 and the HUD Handbook 4000.1 (the &ldquo;Single Family
        Housing Policy Handbook&rdquo;).
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Hazard Insurance Minimums
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The HECM borrower must maintain hazard insurance (homeowner&rsquo;s insurance) on the
        property at all times. The coverage amount must be at least equal to the lesser of:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>100% of the insurable value of the improvements (the dwelling)</li>
        <li>The maximum amount of insurance available under the NFIP (for flood) or the applicable hazard insurance program</li>
        <li>The outstanding HECM loan balance, in some servicer interpretations</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        In practice, this means the dwelling coverage must be sufficient to restore the property.
        A policy with a dwelling limit far below the replacement cost of the home will not
        satisfy the HECM requirement &mdash; and the servicer can and will{' '}
        <Link href="/resources/force-placed-insurance" className="text-[#2E74B5] hover:underline">
          force-place insurance
        </Link>{' '}
        at the borrower&rsquo;s expense if the coverage lapses or is inadequate.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Flood Insurance Requirements
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the HECM property is located in a Special Flood Hazard Area (SFHA) as designated by
        FEMA, the borrower must maintain flood insurance through the National Flood Insurance
        Program (NFIP) or an equivalent private flood policy. This is a federal requirement under
        the National Flood Insurance Act and the Flood Disaster Protection Act, and it applies to
        all federally related mortgage loans &mdash; including HECMs. The required coverage amount
        is the lesser of the outstanding loan balance or the maximum available under the NFIP
        (currently $250,000 for residential dwellings).
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For HECM borrowers, the flood insurance requirement is particularly important because the
        loan balance increases over time. A flood policy purchased at the time the HECM was
        originated may become inadequate as the loan balance grows. The servicer is supposed to
        monitor this, but borrowers should not rely on the servicer to catch the gap.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Loss Payee Clause
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Like any mortgage, the HECM requires the insurance policy to name the reverse mortgage
        lender (or its servicer) as the loss payee or mortgagee. This means the HECM servicer&rsquo;s
        name will appear on any insurance check for dwelling damage. The insurance company issues
        a joint check payable to both the homeowner and the HECM servicer, and the homeowner
        cannot cash that check without the servicer&rsquo;s endorsement.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the same mechanism that applies in{' '}
        <Link href="/resources/mortgage-company-holds" className="text-[#2E74B5] hover:underline">
          forward mortgage insurance claims
        </Link>
        , but the consequences are different. With a forward mortgage, the lender&rsquo;s interest
        is capped at the outstanding loan balance &mdash; and in many cases, the homeowner has
        significant equity above that balance. With a reverse mortgage, the loan balance may be
        close to or even exceeding the property&rsquo;s value, which means the servicer may argue
        that <em>all</em> of the insurance proceeds belong to the lender&rsquo;s interest.
      </p>

      <CalloutBox variant="warning" title="Force-Placed Insurance on HECM Properties">
        <p>
          If your hazard insurance or flood insurance lapses &mdash; even briefly &mdash; the HECM
          servicer is required to{' '}
          <Link href="/resources/force-placed-insurance" className="text-[#2E74B5] hover:underline">
            force-place insurance
          </Link>{' '}
          on the property and add the cost to your loan balance. Force-placed insurance is
          notoriously expensive (often three to five times the cost of a standard policy) and
          provides minimal coverage &mdash; typically protecting only the lender&rsquo;s interest,
          not the homeowner&rsquo;s. Every dollar of force-placed premium added to a reverse
          mortgage balance compounds the problem, because it increases the loan balance and
          reduces the homeowner&rsquo;s remaining equity. Maintaining your own insurance without
          any lapse is critical.
        </p>
      </CalloutBox>

      {/* ────────────────── WHEN A LOSS OCCURS ────────────────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When a Loss Occurs: The HECM Insurance Claim Process
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a HECM property suffers an insured loss, the process begins the same way as any
        other property claim: you report the loss to your insurance company, the insurer assigns
        an adjuster, and the adjuster inspects the property and prepares an estimate. But the
        similarities end there.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Insurance Check Has the Servicer&rsquo;s Name on It
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Because the HECM servicer is named as the mortgagee on the policy, the insurance company
        will issue the dwelling damage check payable to both you and the servicer. You must
        endorse the check and send it to the servicer&rsquo;s loss draft department &mdash; the
        same process described in our{' '}
        <Link href="/resources/mortgage-company-holds" className="text-[#2E74B5] hover:underline">
          mortgage company holds article
        </Link>
        . The servicer deposits the funds into an escrow account and controls the release.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        However, here is where the reverse mortgage dynamic diverges sharply. In a forward
        mortgage scenario, the lender&rsquo;s primary concern is protecting collateral. The
        lender wants the house rebuilt because the rebuilt house secures the loan. In a reverse
        mortgage scenario, the servicer faces a different calculation: the loan balance may have
        grown so large relative to the property value that rebuilding may not be in the
        <em> lender&rsquo;s</em> financial interest. If the cost to rebuild exceeds the remaining
        equity, the servicer may prefer to call the loan due, apply the insurance proceeds to the
        loan balance, and close out the HECM rather than fund a rebuild.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Servicer&rsquo;s Conflict of Interest
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the core problem, and it needs to be stated plainly: the HECM servicer&rsquo;s
        financial interests and the homeowner&rsquo;s interests are not aligned after a major
        property loss. The homeowner wants the insurance proceeds used to repair or rebuild the
        home so they can continue living in it. The servicer &mdash; particularly when the loan
        balance is high relative to the property value &mdash; may prefer to use the insurance
        proceeds to pay down the loan balance rather than fund repairs.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under HUD regulations, the servicer is supposed to allow the borrower to use insurance
        proceeds for repairs. HUD Handbook 4000.1, Section III.A.2(j) provides that the servicer
        must release insurance proceeds for repair of the property, provided the borrower is using
        the funds for that purpose and the property will be restored to at least its pre-loss
        condition. But &ldquo;supposed to&rdquo; and &ldquo;actually does&rdquo; are two different
        things. HECM servicers routinely impose conditions, delays, and obstacles that make it
        highly difficult for elderly borrowers to access their own insurance money for
        repairs.
      </p>

      <CalloutBox variant="important" title="The Servicer Is Not Your Advocate">
        <p>
          The HECM servicer is not a neutral party. It is a creditor with a financial interest in
          the insurance proceeds. When the servicer tells you that it is &ldquo;holding the funds
          to protect you,&rdquo; understand that it is holding the funds to protect <em>itself</em>.
          Every decision the servicer makes about fund release, inspections, repair timelines, and
          occupancy requirements is filtered through the lens of the servicer&rsquo;s own financial
          interest and HUD&rsquo;s regulatory framework &mdash; not through what is best for you.
        </p>
      </CalloutBox>

      {/* ────────────────── 60% RULE ────────────────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The 60% Rule: When Property Damage Triggers a Due-and-Payable Event
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is one of the most dangerous provisions in the entire HECM regulatory framework, and
        most reverse mortgage borrowers have never heard of it.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under HUD&rsquo;s HECM regulations and servicing requirements, if the property sustains
        damage that exceeds a certain threshold of the property&rsquo;s appraised value, the
        servicer may declare the HECM &ldquo;due and payable.&rdquo; The commonly referenced
        threshold is damage that reduces the property&rsquo;s value by more than approximately
        60%. When a property is damaged beyond this threshold and the insurance proceeds plus the
        borrower&rsquo;s own funds are insufficient to restore the property to its pre-loss
        condition, the servicer can petition HUD for approval to call the loan.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        &ldquo;Due and payable&rdquo; means exactly what it sounds like: the entire outstanding
        loan balance must be repaid immediately. For a HECM borrower who has been drawing on
        their reverse mortgage for years, the outstanding balance can be substantial &mdash;
        hundreds of thousands of dollars. If the borrower cannot repay, the servicer initiates
        foreclosure.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Think about what this means in practice: an elderly homeowner loses their home in a fire.
        The insurance company pays out. The HECM servicer takes the insurance proceeds, applies
        them to the loan balance, and then demands payment of the remaining balance. The
        homeowner &mdash; who is 75 or 80 years old, displaced from their home, and has no
        income other than Social Security &mdash; now faces foreclosure on a property they no
        longer even live in. The insurance money that was supposed to rebuild their home has been
        absorbed by the reverse mortgage debt.
      </p>

      <CalloutBox variant="warning" title="The Due-and-Payable Cascade">
        <p>
          A major property loss can trigger a devastating chain reaction for HECM borrowers:
          (1) the property is damaged beyond the threshold; (2) the servicer declares the loan due
          and payable; (3) the insurance proceeds are applied to the loan balance rather than used
          for repairs; (4) the remaining balance is demanded from the borrower; (5) the borrower
          cannot pay; (6) the servicer initiates foreclosure. This entire cascade can unfold while
          the homeowner is displaced, living in temporary housing, and trying to figure out how to
          rebuild their life. The most important thing a HECM borrower can do after a major loss
          is engage a{' '}
          <Link href="/contact" className="text-[#2E74B5] hover:underline">
            licensed Public Adjuster
          </Link>{' '}
          and an attorney immediately &mdash; before the servicer makes any decisions about the
          insurance proceeds.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Challenging the 60% Threshold Determination
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The servicer&rsquo;s determination that the property has been damaged beyond the threshold
        is not automatically correct, and it should not go unchallenged. The threshold
        determination depends on two variables: (1) the appraised value of the property before
        the loss, and (2) the extent of the damage. Both of these are subject to dispute.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The pre-loss appraised value may be based on an outdated appraisal from when the HECM was
        originated, which could have been years ago. In many California markets, property values
        have appreciated significantly since the HECM was issued. If the current pre-loss value
        is substantially higher than the original appraisal, the damage percentage relative to
        value drops accordingly. A property that was appraised at $400,000 when the HECM was
        originated in 2015 may be worth $800,000 today. Damage of $350,000 would exceed 60% of
        the original appraisal but would be well under 60% of the current value.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The extent of damage is also disputable. Insurance companies routinely underestimate
        repair costs in their initial estimates. If the servicer is relying on the insurer&rsquo;s
        initial estimate to determine that damage exceeds the threshold, that estimate may be
        dramatically understated. Getting an independent assessment of the actual repair cost
        &mdash; through a Public Adjuster or a qualified contractor &mdash; can change the
        calculation entirely. Also note that the relevant question is whether the
        property <em>can</em> be restored, not whether the insurer&rsquo;s initial estimate is
        sufficient to restore it. If the insurance settlement can be negotiated upward (as it
        almost always can), the funds may well be sufficient to fully repair the property, which
        undermines the basis for a due-and-payable declaration.
      </p>

      {/* ────────────────── OCCUPANCY REQUIREMENT ────────────────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Occupancy Requirement: HECM&rsquo;s Principal Residence Rule
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Every HECM borrower must certify that the mortgaged property is their principal residence.
        This is a fundamental requirement of the HECM program, codified at 24 CFR &sect; 206.211.
        The borrower must continue to occupy the property as their principal residence for the
        life of the loan. If the borrower ceases to occupy the property as their principal
        residence for more than 12 consecutive months, the HECM may be called due and payable.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This creates an obvious problem when a property loss forces the borrower out of their
        home. A fire or major water loss can render a home uninhabitable for months &mdash;
        sometimes more than a year for a full rebuild. During that time, the HECM borrower is
        living elsewhere, not occupying the property as their principal residence. If the
        displacement exceeds 12 months, the servicer has grounds to declare the loan due and
        payable based on the occupancy violation alone &mdash; even if the property damage itself
        did not trigger the 60% threshold.
      </p>

      <CalloutBox variant="important" title="The Occupancy Clock Is Ticking">
        <p>
          The moment a HECM borrower is displaced from their home due to a property loss, a
          12-month clock starts running. If the borrower does not return to the property within
          12 months, the servicer may declare the loan due and payable based on the occupancy
          requirement &mdash; regardless of whether the property loss triggered the 60% damage
          threshold. This makes repair timelines important for HECM borrowers. Every
          month of delay in the insurance claim process is a month closer to an occupancy
          violation. For more on how the{' '}
          <Link href="/resources/where-you-reside-exclusion" className="text-[#2E74B5] hover:underline">
            &ldquo;where you reside&rdquo; requirement
          </Link>{' '}
          operates in insurance policies, see our detailed article on that topic.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        HUD&rsquo;s Disaster-Related Extensions
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        HUD has acknowledged that the 12-month occupancy requirement creates hardship in disaster
        situations. Through Mortgagee Letters (MLs) issued after major declared disasters, HUD
        has historically provided extensions and forbearance for HECM borrowers displaced by
        disasters. For example, after Hurricane Katrina and subsequent major disaster declarations,
        HUD issued guidance allowing servicers to delay due-and-payable proceedings for borrowers
        who were displaced due to the disaster and were making good-faith efforts to return to
        the property.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        However, these extensions are not automatic. They depend on HUD issuing a Mortgagee
        Letter for the specific disaster event, and they depend on the borrower communicating with
        the servicer and documenting their intent to return. A HECM borrower who is displaced by
        a loss and does not communicate with the servicer &mdash; or who allows the servicer to
        conclude that the displacement is permanent &mdash; is at serious risk of a
        due-and-payable declaration.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        After the January 2025 California wildfires, HUD issued guidance recognizing the
        extraordinary circumstances facing HECM borrowers in the affected areas. Borrowers
        displaced by the fires should contact their servicer immediately, document their intent to
        return, and request any available forbearance or extension of the occupancy timeline.
        Retain copies of all correspondence.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Double Bind: Insurance Delays and Occupancy Violations
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        HECM borrowers face a cruel double bind after a property loss. The insurance company may
        take months to properly adjust the claim. The HECM servicer may hold the insurance
        proceeds and release them slowly, further delaying repairs. Contractors may be booked out
        for months, especially after a regional disaster. Permitting delays add more time. And
        through all of this, the 12-month occupancy clock is ticking.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The borrower cannot return to the property because it is uninhabitable. They cannot get
        it repaired quickly because the servicer is holding the insurance money. And the longer
        the displacement lasts, the closer they get to an occupancy violation that could trigger
        foreclosure. The system is not designed to protect the borrower &mdash; it is designed
        to protect HUD and the lender.
      </p>

      {/* ────────────────── SERVICER FUND RELEASE ────────────────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Getting Insurance Proceeds Released from the HECM Servicer
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The process for getting insurance proceeds released from a HECM servicer is similar in
        structure to the{' '}
        <Link href="/resources/mortgage-company-holds" className="text-[#2E74B5] hover:underline">
          forward mortgage loss draft process
        </Link>{' '}
        but typically more onerous. The servicer will deposit the insurance check into an escrow
        account and release funds in stages as repairs progress. However, HECM servicers tend to
        impose additional requirements that go beyond what a forward mortgage servicer would
        demand.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Common Servicer Requirements
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Detailed repair estimates:</strong> The servicer will require the insurance
          company&rsquo;s Xactimate estimate (which they will call the &ldquo;adjuster&rsquo;s
          report&rdquo;) before releasing any funds.
        </li>
        <li>
          <strong>Licensed contractor requirement:</strong> Many HECM servicers require that all
          repairs be performed by a licensed, bonded, and insured contractor. They may refuse to
          release funds for owner-performed repairs.
        </li>
        <li>
          <strong>Written repair contract:</strong> The servicer typically requires a copy of the
          signed contract between the homeowner and the contractor before the first draw.
        </li>
        <li>
          <strong>Staged inspections:</strong> The servicer will order third-party inspections at
          each stage of the repair to verify that work is progressing before releasing the next
          draw.
        </li>
        <li>
          <strong>Lien waivers:</strong> The servicer may require lien waivers from the contractor
          and subcontractors at each draw stage.
        </li>
        <li>
          <strong>Completion deadline:</strong> Some servicers impose deadlines for completion of
          repairs, often tied to the 12-month occupancy clock.
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Why HECM Fund Releases Are Slower
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        HECM servicers tend to be more restrictive about fund releases than forward mortgage
        servicers for several reasons. First, HUD&rsquo;s regulatory framework holds the servicer
        accountable for the condition of the property. If the servicer releases funds and the
        repairs are not completed, the servicer may face consequences from HUD. Second, the
        servicer knows that if the HECM ultimately becomes due and payable, the property is the
        primary source of repayment &mdash; so the servicer has an even stronger incentive than a
        forward mortgage lender to control how the insurance proceeds are spent. Third, many HECM
        borrowers are elderly, may not have the ability to oversee construction projects, and may
        not have family members who can help. The servicer may use this as justification for
        additional oversight &mdash; oversight that, in practice, translates to delays.
      </p>

      <CalloutBox variant="tip" title="Document Everything and Push Back">
        <p>
          Every communication with the HECM servicer should be in writing. Every draw request
          should include all required documentation the first time. Every delay should be followed
          up with a written demand for release, citing the applicable HUD Handbook provisions
          requiring the servicer to release insurance proceeds for repairs. If the servicer is
          unreasonably withholding funds, file a complaint with HUD&rsquo;s National Servicing
          Center and with the Consumer Financial Protection Bureau (CFPB). The servicer answers
          to HUD &mdash; and HUD complaints get attention.
        </p>
      </CalloutBox>

      {/* ────────────────── SERVICER INSPECTIONS ────────────────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Servicer Inspections During Repairs
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        HECM servicers are required under HUD guidelines to conduct property inspections to verify
        the condition and occupancy of the property. After a loss, the frequency and intensity of
        these inspections increases. The servicer will typically order inspections:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Immediately after learning of the loss, to assess the damage</li>
        <li>Before releasing each draw from the insurance escrow</li>
        <li>At various stages of construction to verify progress</li>
        <li>Upon claimed completion of repairs, to confirm the property is habitable</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        These inspections are conducted by third-party inspection companies hired by the
        servicer. They are typically drive-by inspections &mdash; an inspector drives to the
        property, takes photographs, and files a report. They are not the same as a building
        inspection or a code compliance inspection. They are cursory assessments designed to
        confirm that work is happening and the property is not being neglected.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The cost of these inspections is typically borne by the borrower, either directly or by
        being added to the HECM loan balance. In California, AB 493 (Civil Code Section 2954.85)
        now restricts fees on insurance proceeds held in loss draft accounts &mdash; any fee that
        reduces the effective interest below 2% is prohibited. HECM borrowers should push back on
        inspection fees that are being deducted from insurance proceeds or added to the loan
        balance without clear contractual authorization.
      </p>

      {/* ────────────────── FORECLOSURE RISK ────────────────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Foreclosure Risk: When a Disaster Triggers HECM Default
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A property loss can trigger HECM default through multiple pathways, and each one can
        independently lead to foreclosure:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Pathway 1: Property Damage Exceeding the Threshold
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the damage exceeds the threshold discussed above and the property cannot be restored
        to its pre-loss condition using insurance proceeds and the borrower&rsquo;s own funds, the
        servicer may petition HUD for a due-and-payable determination. HUD will evaluate whether
        the property can be restored and, if not, may approve calling the loan.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Pathway 2: Occupancy Violation
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the borrower is displaced for more than 12 consecutive months and has not returned to
        the property, the servicer may declare the loan due and payable based on the occupancy
        requirement. The borrower&rsquo;s intent to return is relevant but may not be sufficient
        if the displacement is prolonged.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Pathway 3: Insurance Lapse
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the borrower&rsquo;s insurance lapses &mdash; which can happen if the policy is
        cancelled after a major loss, if the insurer non-renews, or if the borrower fails to
        secure replacement coverage &mdash; the insurance lapse itself is a default event. The
        servicer will{' '}
        <Link href="/resources/force-placed-insurance" className="text-[#2E74B5] hover:underline">
          force-place insurance
        </Link>{' '}
        and add the cost to the loan balance, further eroding equity.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Pathway 4: Property Tax Default
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        HECM borrowers are required to keep property taxes current. After a disaster, a displaced
        elderly borrower who is struggling to manage their affairs may miss property tax payments.
        Tax delinquency is an independent HECM default event. Even if the insurance claim is
        being handled properly, a property tax default can trigger due-and-payable proceedings.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Pathway 5: Failure to Maintain the Property
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        HECM borrowers are required to maintain the property in habitable condition. After a
        loss, if the damaged property is left unsecured or deteriorates further due to lack of
        emergency repairs, the servicer can cite the maintenance requirement as a basis for
        default. This creates yet another urgency:
        performing{' '}
        <Link href="/resources/temporary-emergency-repairs" className="text-[#2E74B5] hover:underline">
          temporary emergency repairs
        </Link>{' '}
        is not just an insurance requirement &mdash; it is a HECM servicing requirement as well.
      </p>

      <CalloutBox variant="warning" title="Multiple Default Triggers Can Compound">
        <p>
          A single property loss event can simultaneously trigger multiple HECM default pathways.
          The property damage may exceed the threshold. The displacement may violate the occupancy
          requirement. The insurer may non-renew the policy, causing an insurance lapse. Property
          taxes may be missed. The property may deteriorate from lack of maintenance. Each of these
          is an independent basis for calling the loan due and payable. The HECM borrower must
          address <strong>all</strong> of them simultaneously, which requires a coordinated
          strategy involving a Public Adjuster (for the insurance claim), an attorney (for the HECM
          servicing issues), and family members or a trusted advisor (for financial management
          during displacement).
        </p>
      </CalloutBox>

      {/* ────────────────── FORWARD vs REVERSE ────────────────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Forward Mortgage vs. Reverse Mortgage: Why the Claim Dynamics Are So Different
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Understanding the differences between forward and reverse mortgage claim dynamics is
        essential for anyone advising a HECM borrower. The following comparison highlights why
        reverse mortgage claims require a fundamentally different approach.
      </p>

      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border border-gray-300 text-sm text-gray-700">
          <thead>
            <tr className="bg-[#1F3964] text-white">
              <th className="border border-gray-300 px-4 py-2 text-left">Factor</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Forward Mortgage</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Reverse Mortgage (HECM)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-semibold">Loan balance over time</td>
              <td className="border border-gray-300 px-4 py-2">Decreasing (monthly payments reduce principal)</td>
              <td className="border border-gray-300 px-4 py-2">Increasing (no payments; interest accrues)</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-2 font-semibold">Homeowner equity</td>
              <td className="border border-gray-300 px-4 py-2">Typically growing</td>
              <td className="border border-gray-300 px-4 py-2">Typically shrinking</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-semibold">Lender&rsquo;s interest in rebuild</td>
              <td className="border border-gray-300 px-4 py-2">Strong &mdash; rebuilding protects collateral worth more than the debt</td>
              <td className="border border-gray-300 px-4 py-2">Weaker &mdash; if the debt exceeds the value, the servicer may prefer loan payoff</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-2 font-semibold">Occupancy requirement</td>
              <td className="border border-gray-300 px-4 py-2">None in most forward mortgages after closing</td>
              <td className="border border-gray-300 px-4 py-2">Continuous &mdash; 12-month displacement triggers due-and-payable</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-semibold">Due-and-payable trigger</td>
              <td className="border border-gray-300 px-4 py-2">Only for payment default, typically</td>
              <td className="border border-gray-300 px-4 py-2">Multiple triggers: occupancy, insurance lapse, property damage threshold, tax default, maintenance</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-2 font-semibold">Federal regulatory overlay</td>
              <td className="border border-gray-300 px-4 py-2">Varies (Fannie Mae, Freddie Mac guidelines)</td>
              <td className="border border-gray-300 px-4 py-2">Extensive &mdash; HUD/FHA regulations (24 CFR Part 206) govern every aspect</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-semibold">Borrower&rsquo;s typical age and resources</td>
              <td className="border border-gray-300 px-4 py-2">Working-age adults with income</td>
              <td className="border border-gray-300 px-4 py-2">Elderly (62+), often on fixed income, may have cognitive or physical limitations</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-2 font-semibold">Excess proceeds above loan balance</td>
              <td className="border border-gray-300 px-4 py-2">Common &mdash; homeowner equity often large</td>
              <td className="border border-gray-300 px-4 py-2">Less common &mdash; loan balance may approach or exceed property value</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">
        The upshot: a forward mortgage claim is about getting the lender to release money so you
        can rebuild. A reverse mortgage claim is about preventing the lender from using the
        insurance proceeds to pay off the loan and foreclose on your home.
      </p>

      {/* ────────────────── HUD PROTECTIONS ────────────────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        HUD Protections for HECM Borrowers After a Loss
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Despite the risks described above, HUD&rsquo;s regulatory framework does include some
        protections for HECM borrowers who suffer property losses. Understanding and invoking
        these protections is critical.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Right to Use Proceeds for Repairs
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        HUD Handbook 4000.1 provides that insurance proceeds on HECM properties should be used
        to repair the property, provided the repairs will restore the property to at least its
        pre-loss condition. The servicer is not supposed to simply apply insurance proceeds to the
        loan balance when the property can be repaired. If your servicer is attempting to divert
        insurance proceeds to the loan balance rather than releasing them for repairs, cite this
        HUD Handbook provision and put your objection in writing.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        HUD&rsquo;s Pre-Approval Requirement for Due-and-Payable
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A HECM servicer cannot simply declare the loan due and payable on its own. Under 24 CFR
        &sect; 206.125, the servicer must request approval from HUD before calling the loan.
        This means there is a process &mdash; and a window of time &mdash; during which the
        borrower can present their case to HUD. If the borrower can demonstrate that the property
        can be restored using insurance proceeds and that the borrower intends to return, HUD may
        deny the servicer&rsquo;s request.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Non-Borrowing Spouse Protections
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        HUD&rsquo;s regulations include protections for &ldquo;eligible non-borrowing
        spouses&rdquo; &mdash; spouses who are not named on the HECM but who live in the property.
        Under Mortgagee Letter 2015-15 and subsequent guidance, if the borrower dies or enters a
        permanent care facility, an eligible non-borrowing spouse may be able to remain in the
        home without the loan being called due and payable, subject to certain conditions. This
        protection may also apply in disaster displacement situations, though the application is
        less clear and should be explored with an attorney.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The HECM &ldquo;Non-Recourse&rdquo; Feature
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        One important protection that HECM borrowers often do not understand: the HECM is a
        <strong> non-recourse loan</strong>. This means that the borrower (or their estate) will
        never owe more than the home is worth at the time the loan is repaid. If the loan balance
        has grown to $500,000 but the property is only worth $300,000 (or is a total loss with
        only the land value remaining), the borrower&rsquo;s maximum liability is the property
        value &mdash; not the full loan balance. The FHA insurance covers the difference.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is important in a total loss scenario. If the home is destroyed and the
        insurance proceeds are not sufficient to both repay the HECM and rebuild, the borrower
        cannot be pursued for the deficiency. The servicer can take the property (or the insurance
        proceeds up to the property&rsquo;s value), but the borrower does not owe anything beyond
        that. This protection applies under 12 USC &sect; 1715z-20(j), which prohibits HECMs
        from imposing personal liability on the borrower beyond the property value.
      </p>

      <CalloutBox variant="info" title="Non-Recourse Does Not Mean No Consequences">
        <p>
          While the non-recourse feature protects HECM borrowers from personal liability beyond the
          property value, losing the home is still devastating. The borrower loses their residence,
          their remaining equity (if any), and the stability of housing that the reverse mortgage
          was supposed to provide. The non-recourse protection is a floor &mdash; it prevents
          financial ruin beyond the loss of the home &mdash; but it does not make the borrower
          whole. The goal should always be to get the insurance proceeds released for repairs and
          get the borrower back into the home, not to rely on the non-recourse provision as a
          backstop.
        </p>
      </CalloutBox>

      {/* ────────────────── PRACTICAL STEPS ────────────────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Practical Steps for HECM Borrowers Who Suffer a Property Loss
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you have a reverse mortgage and your home has been damaged or destroyed, the following
        steps should be taken immediately. Time is not on your side &mdash; the occupancy clock
        is running, the servicer is evaluating its options, and the insurance company is not
        going to move faster than it has to.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 1: Report the Loss to Your Insurance Company and Your HECM Servicer Simultaneously
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Do not wait to contact the HECM servicer. Report the loss to both the insurance company
        and the servicer on the same day if possible. When you contact the servicer, state clearly
        that you intend to repair the property and return to it. Ask for the servicer&rsquo;s loss
        draft department and get their specific procedures for handling insurance proceeds. Get
        everything in writing.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 2: Engage a Licensed Public Adjuster Immediately
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A HECM borrower facing a major property claim cannot afford to handle the insurance
        company alone. The stakes are too high. An underpaid claim can be the difference between
        having enough money to rebuild (and keep the home) and not having enough (which triggers
        the due-and-payable cascade). A licensed{' '}
        <Link href="/contact" className="text-[#2E74B5] hover:underline">
          Public Adjuster
        </Link>{' '}
        works exclusively for the policyholder, documents the full scope of the loss, and
        negotiates the insurance settlement to its maximum value. For a HECM borrower, maximizing
        the insurance recovery is not just about money &mdash; it is about keeping the home.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 3: Engage an Attorney Who Understands Both HECM Servicing and Insurance Law
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The intersection of HECM servicing regulations and insurance claim law is specialized. An
        attorney experienced in elder law, reverse mortgage servicing, or insurance coverage
        disputes can help navigate the competing demands of the insurer and the HECM servicer. If
        the servicer attempts to apply insurance proceeds to the loan balance rather than
        releasing them for repairs, an attorney can intervene, cite the applicable HUD
        regulations, and if necessary, escalate to HUD directly.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 4: Document Your Intent to Return
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        From the first day of displacement, document your intent to return to the property.
        Send a written statement to the HECM servicer stating that you consider the property your
        principal residence, that you are displaced due to the loss, and that you intend to return
        as soon as repairs are completed. Repeat this communication every 30 to 60 days. Keep
        copies of everything. This documentation is your defense against an occupancy-based
        due-and-payable determination.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 5: Perform Emergency Repairs Immediately
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Secure the property and prevent further damage. Board up broken windows, tarp the roof,
        extract standing water, turn off utilities if necessary. Document everything with
        photographs and video. This serves multiple purposes: it satisfies your duty to mitigate
        under the insurance policy, it satisfies the HECM maintenance requirement, and it prevents
        the servicer from citing property deterioration as a basis for default. Keep all receipts
        for emergency repairs &mdash; these costs are reimbursable under most insurance policies.
        For more on this, see our article on{' '}
        <Link href="/resources/temporary-emergency-repairs" className="text-[#2E74B5] hover:underline">
          temporary emergency repairs
        </Link>
        .
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 6: Keep Property Taxes and Insurance Current
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Do not let property taxes or insurance coverage lapse during the claim process. Both are
        independent HECM default triggers. If you are having difficulty maintaining payments during
        displacement, contact your county assessor about disaster-related property tax relief
        (California Revenue and Taxation Code Section 170 provides for reassessment of damaged
        property) and contact your insurance agent about maintaining coverage during the repair
        period. If the insurer non-renews you, obtain replacement coverage before the current
        policy expires &mdash; even if the replacement is the{' '}
        <Link href="/resources/california-fair-plan" className="text-[#2E74B5] hover:underline">
          California FAIR Plan
        </Link>{' '}
        as a last resort.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 7: Push for Fast-Track Fund Release
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Every day that the HECM servicer holds your insurance proceeds is a day closer to the
        occupancy deadline. Submit draw requests proactively. Include all required documentation
        in the initial submission. Follow up in writing if the servicer does not respond within
        their stated timeline. Cite HUD Handbook 4000.1&rsquo;s requirement that insurance
        proceeds be used for repairs. If the servicer is unreasonably slow, file a complaint with
        HUD&rsquo;s National Servicing Center (NSC) and the CFPB simultaneously.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 8: Request a HUD Extension if Displacement Will Exceed 12 Months
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If it becomes apparent that repairs will take longer than 12 months &mdash; which is
        common in major losses, especially after regional disasters &mdash; contact the HECM
        servicer in writing and request an extension of the occupancy deadline. Explain the
        circumstances: the loss was not your fault, the insurance claim is being processed, and
        you are actively working toward returning to the property. Ask the servicer to request a
        forbearance or extension from HUD. If the disaster is a federally declared disaster, check
        whether HUD has issued a Mortgagee Letter providing occupancy extensions for affected
        borrowers.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 9: Understand Your Options If the Home Cannot Be Rebuilt
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the home is a total loss and the insurance proceeds are not sufficient to rebuild,
        the HECM will likely be called due and payable. In this situation, the borrower has
        several options:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Sell the property:</strong> Even a destroyed home sits on land that has value.
          If the land value plus any remaining insurance proceeds exceeds the loan balance, the
          borrower keeps the difference. If the loan balance exceeds the property value, the
          non-recourse provision protects the borrower from personal liability for the deficiency.
        </li>
        <li>
          <strong>Deed in lieu of foreclosure:</strong> The borrower can voluntarily deed the
          property to the servicer, avoiding the cost and stress of formal foreclosure proceedings.
          The non-recourse protection still applies &mdash; the borrower owes nothing beyond the
          property.
        </li>
        <li>
          <strong>Allow foreclosure:</strong> If the borrower has no remaining equity and the
          property cannot be rebuilt, allowing the foreclosure to proceed may be the least stressful
          option. The non-recourse provision means the borrower will not face a deficiency judgment.
          However, foreclosure can have credit implications and should be discussed with an
          attorney.
        </li>
      </ul>

      <CalloutBox variant="tip" title="The Land Has Value">
        <p>
          Even in a total loss, do not assume the HECM will consume everything. The land beneath a
          destroyed home may have significant value, particularly in California&rsquo;s high-cost
          markets. A lot in a fire-affected area of Los Angeles, Malibu, or the Bay Area can be
          worth hundreds of thousands of dollars or more. If the land value plus insurance proceeds
          exceeds the HECM loan balance, the borrower has equity &mdash; and that equity belongs
          to the borrower, not the servicer. Have the land independently appraised before agreeing
          to any disposition.
        </p>
      </CalloutBox>

      {/* ────────────────── SPECIAL CONSIDERATIONS ────────────────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Special Considerations for HECM Claims
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The ALE / Loss of Use Issue
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Additional Living Expense (ALE) or loss of use coverage (Loss of Use) payments should
        <strong> not</strong> have the HECM servicer&rsquo;s name on them. ALE covers the
        policyholder&rsquo;s increased living expenses during displacement &mdash; hotel bills,
        rental costs, meals, and other necessities. The HECM servicer has no interest in the
        policyholder&rsquo;s living expenses. If your insurer puts the servicer&rsquo;s name on
        an ALE check, demand immediate reissuance with only your name. This money is your
        lifeline during displacement and should not be caught up in the servicer&rsquo;s loss
        draft process.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Personal Property Is Yours
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Similarly, personal property payments (personal property) should not include the HECM servicer
        as a payee. The servicer&rsquo;s mortgage interest is in the dwelling &mdash; the
        structure &mdash; not in your furniture, clothing, electronics, or personal belongings.
        If the insurer issues a personal property check with the servicer&rsquo;s name on it,
        this is an error that must be corrected. Contact the insurer and request reissuance.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Underinsurance Is Especially Dangerous with a HECM
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Being{' '}
        <Link href="/resources/underinsured-after-wildfire" className="text-[#2E74B5] hover:underline">
          underinsured
        </Link>{' '}
        is a problem for any homeowner, but for a HECM borrower it can be fatal to homeownership.
        If the insurance coverage is insufficient to fully rebuild the home, the gap must be
        funded from somewhere. A forward mortgage borrower might take out a construction loan or
        use savings. A HECM borrower &mdash; who is elderly, on a fixed income, and has already
        converted their equity to cash &mdash; typically has no way to fund the gap. The insurance
        shortfall becomes the difference between keeping the home and losing it to a
        due-and-payable call.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is why maximizing the insurance recovery is so critical for HECM borrowers. Every
        dollar of insurance underpayment increases the risk that the property cannot be restored
        and the loan will be called. A{' '}
        <Link href="/contact" className="text-[#2E74B5] hover:underline">
          licensed Public Adjuster
        </Link>{' '}
        who understands this dynamic can document the full scope of the loss &mdash; including{' '}
        <Link href="/resources/code-upgrade-coverage" className="text-[#2E74B5] hover:underline">
          code upgrade costs
        </Link>
        ,{' '}
        <Link href="/resources/debris-removal" className="text-[#2E74B5] hover:underline">
          debris removal
        </Link>
        ,{' '}
        <Link href="/resources/overhead-and-profit" className="text-[#2E74B5] hover:underline">
          overhead and profit
        </Link>
        , and all{' '}
        <Link href="/resources/commonly-missed-items" className="text-[#2E74B5] hover:underline">
          commonly missed items
        </Link>{' '}
        &mdash; to ensure the insurance settlement is sufficient to fund the full rebuild.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Role of HECM Counseling Agencies
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        HUD requires all HECM borrowers to undergo counseling before obtaining the loan, and
        HUD-approved counseling agencies continue to be available after the loan closes. These
        agencies can provide guidance on HECM servicing issues, help communicate with the
        servicer, and assist borrowers who are facing due-and-payable proceedings. After a
        property loss, contacting a HUD-approved HECM counseling agency can provide an additional
        layer of support. The HUD Housing Counseling Hotline is 800-569-4287.
      </p>

      {/* ────────────────── APPLICABLE LAW ────────────────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Applicable Law and Key Regulatory Authority
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>24 CFR Part 206</strong> &mdash; HUD regulations governing the HECM program,
          including property maintenance, insurance, occupancy, and due-and-payable requirements
        </li>
        <li>
          <strong>24 CFR &sect; 206.205</strong> &mdash; Property charges (insurance and taxes)
          that HECM borrowers must maintain
        </li>
        <li>
          <strong>24 CFR &sect; 206.211</strong> &mdash; Principal residence requirement for HECM
          borrowers
        </li>
        <li>
          <strong>24 CFR &sect; 206.125</strong> &mdash; Conditions for calling a HECM due and
          payable; HUD pre-approval requirement
        </li>
        <li>
          <strong>12 USC &sect; 1715z-20(j)</strong> &mdash; Non-recourse provision prohibiting
          personal liability beyond the property value
        </li>
        <li>
          <strong>HUD Handbook 4000.1</strong> (Single Family Housing Policy Handbook) &mdash;
          Detailed guidance on HECM servicing, including insurance proceeds and property repair
        </li>
        <li>
          <strong>Mortgagee Letter 2015-15</strong> &mdash; Protections for eligible non-borrowing
          spouses
        </li>
        <li>
          <strong>California Insurance Code Section 2071</strong> &mdash; Standard fire policy
          mortgage clause (why checks are jointly payable)
        </li>
        <li>
          <strong>California Civil Code Section 2954.85</strong> (AB 493, 2025) &mdash; 2% minimum
          interest on insurance proceeds held in loss draft accounts; fee restrictions
        </li>
        <li>
          <strong>California Civil Code Section 2924.7</strong> &mdash; 30-day release requirement
          upon written demand with documentation
        </li>
        <li>
          <strong><em>Schoolcraft v. Ross</em></strong>, 81 Cal. App. 3d 75 (1978) &mdash; Lender
          must release proceeds in good faith when security is not impaired
        </li>
        <li>
          <strong>National Flood Insurance Act / Flood Disaster Protection Act</strong> &mdash;
          Mandatory flood insurance for properties in SFHAs with federally related mortgages
        </li>
      </ul>

      {/* ────────────────── CROSS REFERENCES ────────────────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Related Articles
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <Link href="/resources/mortgage-company-holds" className="text-[#2E74B5] hover:underline">
            Mortgage Company Holds on Insurance Proceeds
          </Link>{' '}
          &mdash; How the loss draft process works for forward mortgages, including fund release
          strategies, California interest-on-proceeds law, and what to do when the lender holds
          more than it is owed
        </li>
        <li>
          <Link href="/resources/where-you-reside-exclusion" className="text-[#2E74B5] hover:underline">
            The &ldquo;Where You Reside&rdquo; Exclusion
          </Link>{' '}
          &mdash; How the residency definition in your homeowner policy can eliminate coverage,
          and why this is especially relevant for elderly homeowners displaced from their homes
        </li>
        <li>
          <Link href="/resources/force-placed-insurance" className="text-[#2E74B5] hover:underline">
            Force-Placed Insurance
          </Link>{' '}
          &mdash; What happens when the lender places its own insurance on your property, the cost
          implications, and how to avoid it
        </li>
        <li>
          <Link href="/resources/temporary-emergency-repairs" className="text-[#2E74B5] hover:underline">
            Temporary Emergency Repairs
          </Link>{' '}
          &mdash; Your duty to mitigate after a loss and how emergency repairs protect both your
          insurance claim and your HECM obligations
        </li>
        <li>
          <Link href="/resources/underinsured-after-wildfire" className="text-[#2E74B5] hover:underline">
            Underinsured After a Wildfire
          </Link>{' '}
          &mdash; Why coverage gaps are especially dangerous for HECM borrowers
        </li>
      </ul>

      {/* ────────────────── CONCLUSION ────────────────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Conclusion
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A reverse mortgage is marketed as a financial tool that lets seniors age in place &mdash;
        converting home equity to cash while continuing to live in the home they have owned for
        decades. That promise works as long as everything goes smoothly. When a property loss
        occurs, the promise breaks down, and the HECM regulatory framework reveals itself to be
        a system designed primarily to protect HUD and the lender, not the elderly borrower.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The three-way dynamic between the homeowner, the insurer, and the HECM servicer creates
        a situation where the borrower is fighting on two fronts simultaneously: fighting the
        insurance company for a fair settlement and fighting the HECM servicer for access to the
        money needed to rebuild. The occupancy clock adds urgency that does not exist in a
        forward mortgage claim. The due-and-payable triggers add foreclosure risk that does not
        exist in a forward mortgage claim. And the typical HECM borrower &mdash; elderly, on a
        fixed income, often without family nearby &mdash; is the person least equipped to navigate
        this complexity alone.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you are a HECM borrower who has suffered a property loss, do not try to handle this
        alone. The insurance company will not volunteer to pay you fairly. The HECM servicer will
        not prioritize your interests over its own. HUD will not intervene unless you make it
        intervene. You need a licensed Public Adjuster to maximize the insurance recovery, an
        attorney to protect your rights against the HECM servicer, and a plan that addresses
        every potential default trigger simultaneously.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The home is more than collateral. It is where you live. Protecting it requires
        understanding the system you are in &mdash; and having people on your side who know how
        to fight within it.
      </p>

      <hr className="my-8 border-gray-300" />

      <CalloutBox variant="legal" title="Disclaimer">
        <p>
          This article is for general educational purposes only and does not constitute legal
          advice. HECM regulations, HUD guidance, and applicable state laws change frequently. The
          regulatory provisions discussed in this article reflect the law as of the date of
          publication, but outcomes in any individual case will depend on the specific loan
          documents, the HECM servicer&rsquo;s practices, the insurance policy language, and the
          applicable federal and state law. Always consult with a licensed attorney experienced in
          reverse mortgage servicing and insurance coverage disputes regarding your specific
          situation.
        </p>
        <p className="mt-2">
          <strong>Author:</strong> Leland Coontz III, Licensed Public Adjuster, CA License #2B53445
        </p>
      </CalloutBox>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Reverse Mortgage Borrower With a Property Claim?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          If you have a HECM reverse mortgage and your home has been damaged or destroyed, the
          stakes are higher than a typical insurance claim. A licensed Public Adjuster can maximize
          your insurance recovery, coordinate with the HECM servicer&rsquo;s loss draft
          department, and help protect you from the due-and-payable cascade that threatens your
          home.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Request a Free Claim Review &rarr;
        </Link>
      </div>
    </>
  )
}
