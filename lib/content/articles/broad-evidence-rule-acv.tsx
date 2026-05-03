import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'The Broad Evidence Rule: Why ACV Is Not Simply Replacement Cost Minus Depreciation',
  description:
    'California courts require insurers to consider all relevant evidence when determining actual cash value &mdash; not just a depreciation formula. Learn how the broad evidence rule works, the case law behind it, and how to use it to fight underpayment.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Ask an insurance adjuster how they calculate actual cash value, and the answer is almost
        always the same: replacement cost minus depreciation. That formula is so deeply embedded
        in insurance industry practice that most adjusters treat it as a definition &mdash; as if
        it were the only way ACV can be determined. It is not. In California and a growing number
        of other states, courts have adopted the <strong>broad evidence rule</strong>, which holds
        that ACV must be determined by considering <em>all</em> relevant evidence of value &mdash;
        not just a mechanical depreciation calculation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This distinction matters enormously. When insurers default to a simple depreciation
        formula, they systematically undervalue property that is well-maintained, has remaining
        useful life far beyond what their schedules assume, or sits in a market where replacement
        costs have risen dramatically. The broad evidence rule exists to prevent exactly that kind
        of systematic underpayment.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Three Competing Methods for Determining ACV
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Historically, three methods have competed for dominance in defining actual cash value.
        Understanding all three is essential to understanding why the broad evidence rule exists
        and what it replaced.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        1. Replacement Cost Minus Depreciation
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the method insurers overwhelmingly prefer and almost universally use. Take the
        current cost to replace the damaged property with materials of like kind and quality,
        then subtract depreciation based on age, condition, and expected useful life. If a
        composition roof costs $30,000 to replace and the insurer assigns 50 percent depreciation,
        the ACV is $15,000.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The appeal of this method is its simplicity. It produces a single number that can be
        calculated in a spreadsheet or generated automatically by estimating software like
        Xactimate. The problem is that simplicity comes at the expense of accuracy. A
        straight-line depreciation formula treats every component as if it deteriorates at a
        fixed, predictable rate &mdash; and that assumption is often wrong.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        2. Fair Market Value
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Fair market value is the price a willing buyer would pay a willing seller in an
        arm&apos;s-length transaction, with both parties having reasonable knowledge of the
        relevant facts. This method works well for fungible items with active resale markets
        &mdash; cars, for example &mdash; but poorly for installed building components. There is
        no active market for a used 15-year-old roof still attached to a house. You cannot
        look up the &ldquo;Blue Book value&rdquo; of kitchen cabinets or interior paint.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some older court decisions defined ACV as equivalent to fair market value. That approach
        created problems in both directions. For building components, fair market value is
        often artificially low or essentially unmeasurable. For real property in hot markets,
        fair market value might exceed replacement cost &mdash; a result insurers find equally
        unacceptable.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        3. The Broad Evidence Rule
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The broad evidence rule rejects the idea that ACV must be determined by any single
        formula. Instead, it holds that the trier of fact should consider <strong>every
        relevant factor</strong> that bears on the value of the property at the time of loss.
        Those factors include, but are not limited to:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Replacement cost new</li>
        <li>Age and expected useful life of the property</li>
        <li>
          <strong>Actual physical condition</strong> at the time of loss (not just age-based
          assumptions)
        </li>
        <li>Depreciation &mdash; but based on observed condition, not arbitrary schedules</li>
        <li>Fair market value, where measurable</li>
        <li>Remaining useful life and functional utility</li>
        <li>Maintenance history</li>
        <li>Location and local market conditions</li>
        <li>Obsolescence (functional or economic)</li>
        <li>Any other evidence relevant to value</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The broad evidence rule does not prohibit insurers from using replacement cost minus
        depreciation as a <em>starting point</em>. What it prohibits is treating that formula
        as the <em>only</em> evidence of value &mdash; especially when other evidence points
        to a different result.
      </p>

      <CalloutBox variant="important" title="ACV Is Not a Formula &mdash; It Is a Finding of Fact">
        <p>
          Under the broad evidence rule, actual cash value is not a mathematical formula. It is
          a factual determination that must account for all relevant evidence. An insurer who
          reflexively applies &ldquo;replacement cost minus depreciation&rdquo; without
          considering other evidence is not following the law &mdash; they are applying an
          administrative shortcut that California courts have rejected.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        California&apos;s Adoption of the Broad Evidence Rule
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California has firmly adopted the broad evidence rule through both case law and statute.
        Understanding the legal foundation is critical for policyholders who need to challenge an
        insurer&apos;s depreciation-only valuation.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        California Insurance Code &sect; 2051
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        California Insurance Code &sect; 2051 defines the measure of recovery for property
        insurance as &ldquo;the amount which it would cost the insured to repair, rebuild, or
        replace the thing lost or injured less a fair and reasonable deduction for physical
        depreciation based upon its condition at the time of the injury or the policy
        limit.&rdquo; Two phrases in that statute are critical:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>&ldquo;Fair and reasonable&rdquo;</strong> &mdash; The deduction for
          depreciation is not whatever number produces the lowest payment. It must be fair
          and reasonable, which inherently requires evaluating the specific facts.
        </li>
        <li>
          <strong>&ldquo;Based upon its condition at the time of the injury&rdquo;</strong>
          &mdash; Depreciation must be based on the property&apos;s actual physical condition,
          not on abstract age-based formulas or industry depreciation schedules. A
          20-year-old roof that was well-maintained and in excellent condition should not be
          depreciated the same way as a 20-year-old roof that was neglected.
        </li>
      </ol>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Key California Case Law
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Several important California decisions have shaped the broad evidence rule as it applies
        to insurance claims:
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Jefferson Insurance Co. v. Superior Court (1970) 3 Cal.3d 398:</strong> This
        California Supreme Court decision is the foundational case for the broad evidence rule in
        California insurance law. The court held that the proper method for determining actual
        cash value is the broad evidence rule, which permits the trier of fact to consider every
        fact and circumstance that would logically tend to the formation of a correct estimate of
        the loss. The court explicitly rejected the rigid application of any single formula,
        holding that no one method of valuation should be used to the exclusion of all others.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Cheeks v. California Fair Plan Association (1992) 7 Cal.App.4th 1370:</strong> The
        court reaffirmed that ACV is not synonymous with fair market value and that the insurer
        must consider all relevant evidence of value. In this case, the court found that limiting
        ACV to fair market value in a depressed real estate market would deny the policyholder
        the indemnity the policy was designed to provide. The broad evidence rule prevents
        insurers from cherry-picking whichever valuation method produces the lowest number.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Rosen v. State Farm General Insurance Co. (2003) 30 Cal.4th 1070:</strong> While
        primarily addressing the statute of limitations for replacement cost benefits, this
        Supreme Court decision reinforced the two-step payment structure and the distinction
        between ACV and replacement cost. The court confirmed that ACV under California law
        requires consideration of the property&apos;s condition, not just mechanical depreciation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Georgouses v. NTC/Virginia, Inc. (1993) 15 Cal.App.4th 456:</strong> This case
        held that when an insurance policy does not define ACV, the broad evidence rule governs
        its determination. The court noted that the cost of replacement less depreciation is
        merely one factor to consider, not the sole measure.
      </p>

      <CalloutBox variant="legal" title="The Broad Evidence Rule Is Not Optional">
        <p>
          The broad evidence rule is not an alternative methodology that policyholders can elect.
          It is the <em>law</em> in California. When an insurer calculates ACV using only
          replacement cost minus depreciation and refuses to consider other relevant evidence,
          they are not following a different legitimate methodology &mdash; they are failing to
          comply with California law as established by the Supreme Court in{' '}
          <em>Jefferson Insurance Co. v. Superior Court</em>.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why the Broad Evidence Rule Usually Produces a Higher ACV
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        In most real-world claim scenarios, the broad evidence rule produces an ACV that is
        equal to or higher than the result of simple depreciation. This is not because the rule
        is biased toward policyholders &mdash; it is because mechanical depreciation formulas
        are biased against them. Here are the most common situations where the difference is
        significant.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Well-Maintained Property with Remaining Useful Life
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Consider a composition shingle roof with a manufacturer&apos;s rated lifespan of 30
        years. The roof is 20 years old. Using straight-line depreciation, an insurer would
        assign approximately 67 percent depreciation, meaning the roof has consumed two-thirds
        of its useful life and is &ldquo;worth&rdquo; only one-third of replacement cost.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        But what if the roof was professionally maintained, had no leaks, showed minimal
        granule loss, and a roofing contractor inspected it six months before the loss and
        estimated it had 15 to 20 years of remaining useful life? Under straight-line
        depreciation, the insurer would pay roughly $10,000 on a $30,000 replacement. Under
        the broad evidence rule, the actual condition of the roof &mdash; which demonstrates
        far less physical deterioration than the age formula assumes &mdash; must be
        considered. The ACV could reasonably be $20,000 or more.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Appreciating Real Estate Markets
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        In California&apos;s real estate market, the value of improved property often
        <em> appreciates</em> over time, even as the insurer&apos;s depreciation formula says
        the components are losing value. A kitchen remodeled 15 years ago may actually be worth
        more than its original cost in today&apos;s market &mdash; both because of inflation
        and because of the general increase in property values. A depreciation-only approach
        ignores this reality entirely.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The broad evidence rule allows consideration of what the improvement actually
        contributes to the property&apos;s value, not just what a depreciation spreadsheet
        says it should be worth.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Components That Outlast Their &ldquo;Expected&rdquo; Life
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many building components last far longer than the industry depreciation schedules
        assume. Copper plumbing, hardwood flooring, clay tile roofing, and masonry walls
        routinely outlive their schedule-based &ldquo;useful life&rdquo; by decades. Under
        straight-line depreciation, these items would be assigned 100 percent depreciation
        and valued at zero &mdash; an absurd result for a fully functional component that
        may serve the building for another 50 years.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The broad evidence rule prevents this absurdity. If a copper pipe still functions
        perfectly after 40 years, its actual cash value is not zero simply because a
        depreciation table says copper pipe has a 30-year life. The component&apos;s actual
        condition and remaining utility must be considered.
      </p>

      <CalloutBox variant="tip" title="Document Condition Before Repairs">
        <p>
          If your property was well-maintained before the loss, the condition evidence is your
          strongest tool under the broad evidence rule. Photograph everything before repairs
          begin. Gather maintenance records, prior inspection reports, contractor invoices
          for past maintenance, and any documentation showing the property was in good condition.
          This evidence directly contradicts the insurer&apos;s age-based depreciation formula.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Insurers Systematically Ignore the Broad Evidence Rule
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Despite the clear legal mandate in California, insurance companies routinely ignore the
        broad evidence rule. This is not accidental &mdash; it is built into their systems and
        processes. Understanding how they do it is the first step in fighting back.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Xactimate&apos;s Built-In Depreciation Defaults
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurance industry&apos;s standard estimating software, Xactimate, includes default
        depreciation percentages for virtually every building component and material. When an
        adjuster enters a line item and inputs the age of the component, Xactimate automatically
        calculates depreciation using its built-in tables. The adjuster does not need to inspect
        the item, evaluate its condition, or consider any evidence beyond age. The software does
        the math, the estimate is generated, and the payment is issued.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This process is efficient for the insurer but legally deficient under California law.
        Xactimate&apos;s depreciation tables are generic industry averages &mdash; they do not
        reflect the actual condition of any specific item on any specific property. Using them
        as the sole basis for depreciation violates the broad evidence rule because the insurer
        has not considered all relevant evidence. They have considered one data point &mdash; age
        &mdash; and nothing else.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Blanket Depreciation Rates
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Even worse than using Xactimate&apos;s per-item defaults is the practice of applying a
        single blanket depreciation rate to an entire estimate. Some adjusters assign 30 or 40
        percent depreciation to every line item regardless of what it is, how old it is, or what
        condition it was in. Framing lumber, installed 20 years ago but still structurally sound,
        receives the same depreciation percentage as exterior paint that was applied two years
        ago. This approach makes no attempt to evaluate individual components and violates the
        statutory requirement that depreciation be based on &ldquo;condition at the time of the
        injury.&rdquo;
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Refusing to Consider Condition Evidence
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Perhaps the most egregious violation occurs when a policyholder provides condition
        evidence &mdash; maintenance records, inspection reports, photographs, contractor
        assessments &mdash; and the insurer simply ignores it. The adjuster plugs the age into
        Xactimate, generates a depreciation number, and issues the payment without addressing
        any of the evidence the policyholder submitted. When challenged, the insurer responds
        with some variation of &ldquo;our depreciation is consistent with industry standards.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        &ldquo;Industry standards&rdquo; are not the legal standard. The legal standard in
        California is the broad evidence rule, which requires consideration of all relevant
        evidence &mdash; including the condition evidence the insurer chose to ignore.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Relationship with Labor Depreciation
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The broad evidence rule intersects with another critical California rule: the prohibition
        on depreciating labor. Under California Code of Regulations, title 10, &sect; 2695.9(f)(1),
        insurers may not depreciate the cost of labor when calculating ACV on a residential
        property claim. Labor costs represent the work performed to install materials &mdash;
        labor does not physically deteriorate over time, so it cannot be subject to physical
        depreciation under Insurance Code &sect; 2051.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When an insurer calculates ACV by applying a blanket depreciation rate to the entire
        replacement cost &mdash; including labor &mdash; they violate both the labor depreciation
        prohibition and the broad evidence rule simultaneously. The labor component should be
        paid at full replacement cost, and the materials component should be depreciated based on
        actual condition, not just age. For more detail, see our articles on{' '}
        <Link href="/resources/labor-depreciation" className="text-[#2E74B5] underline">
          labor depreciation
        </Link>{' '}
        and{' '}
        <Link href="/resources/excessive-depreciation" className="text-[#2E74B5] underline">
          excessive depreciation
        </Link>.
      </p>

      <CalloutBox variant="warning" title="Watch for Hidden Labor Depreciation">
        <p>
          Many insurers depreciate labor indirectly by applying depreciation to the entire line
          item (materials + labor combined) rather than separating the two. Review your
          estimate carefully. If the insurer has applied depreciation to line items that are
          mostly or entirely labor &mdash; such as demolition, cleanup, or installation
          labor &mdash; they are violating California law.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Broad Evidence Rule in Appraisal and Litigation
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The broad evidence rule is not just a claim-handling requirement. It also governs how ACV
        is determined in appraisal proceedings and litigation. If a claim goes to appraisal under
        the policy&apos;s appraisal clause, the appraisers and umpire must determine ACV using
        the broad evidence rule &mdash; not simply by applying Xactimate depreciation tables. The
        same is true in court: a jury or judge must consider all relevant evidence of value.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is significant because it means the broad evidence rule provides a substantive legal
        argument at every stage of a dispute. Whether you are negotiating with an adjuster, going
        through appraisal, filing a complaint with the California Department of Insurance, or
        litigating the claim, the insurer&apos;s obligation to consider all relevant evidence
        remains the same.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Practical Guide: How to Argue for the Broad Evidence Rule
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Knowing the law is useful. Knowing how to apply it is what gets results. Here is a
        step-by-step approach for invoking the broad evidence rule in a claim dispute.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 1: Identify the Depreciation Applied
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Request a complete copy of the insurer&apos;s estimate, including depreciation details.
        You need to see the depreciation percentage and dollar amount applied to each line item.
        In Xactimate, this is typically shown on a separate depreciation summary page. If the
        insurer provides only a net payment amount without depreciation details, demand the
        full estimate &mdash; you are entitled to it under California Fair Claims Settlement
        Practices Regulations, 10 CCR &sect; 2695.7(d).
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 2: Gather Condition Evidence
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Compile every piece of evidence that speaks to the actual condition and value of the
        damaged property before the loss:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Photographs:</strong> Pre-loss photos (from real estate listings, prior
          inspections, personal records) and post-loss/pre-repair photos showing the condition
          of undamaged areas
        </li>
        <li>
          <strong>Maintenance records:</strong> Invoices from contractors, receipts for
          materials, evidence of regular upkeep
        </li>
        <li>
          <strong>Inspection reports:</strong> Home inspection reports from purchase,
          refinancing inspections, or insurance inspections
        </li>
        <li>
          <strong>Expert opinions:</strong> A contractor or building inspector who can attest
          to the pre-loss condition and remaining useful life
        </li>
        <li>
          <strong>Market data:</strong> Comparable sales data, appraisals, or other evidence
          of property value that reflects the contribution of the damaged components
        </li>
        <li>
          <strong>Manufacturer warranties:</strong> If components were still under warranty
          at the time of loss, that is strong evidence they had not exhausted their useful
          life
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 3: Challenge the Depreciation in Writing
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Send a written dispute to the insurer that specifically invokes the broad evidence rule.
        Your letter should:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Identify the specific line items where you dispute the depreciation
        </li>
        <li>
          State that California law requires ACV to be determined under the broad evidence rule
          as established in <em>Jefferson Insurance Co. v. Superior Court</em> (1970) 3 Cal.3d
          398
        </li>
        <li>
          Cite California Insurance Code &sect; 2051 and its requirement that depreciation be
          &ldquo;fair and reasonable&rdquo; and &ldquo;based upon its condition at the time of
          the injury&rdquo;
        </li>
        <li>
          Present the condition evidence you have gathered and explain why it demonstrates that
          the insurer&apos;s depreciation is excessive
        </li>
        <li>
          Demand that the insurer explain, in writing, what evidence of condition they
          considered in reaching their depreciation figures
        </li>
        <li>
          Request a revised ACV determination that accounts for all relevant evidence
        </li>
      </ol>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 4: Demand Their Methodology
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Ask the insurer to explain in writing exactly how they determined depreciation for each
        component. Did the adjuster personally inspect the item? What condition did they observe?
        What useful life did they assign, and on what basis? Or did they simply input the age
        into Xactimate and accept the default? If the insurer cannot demonstrate that they
        considered evidence beyond age, their depreciation determination does not comply with the
        broad evidence rule.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 5: Escalate if Necessary
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the insurer refuses to adjust their depreciation after you have presented condition
        evidence and cited the applicable law, you have several options:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>File a complaint with the California Department of Insurance (CDI).</strong>
          {' '}The Fair Claims Settlement Practices Regulations require insurers to consider all
          relevant evidence. An insurer who refuses to do so is in violation. See our guide on{' '}
          <Link href="/resources/cdi-complaint" className="text-[#2E74B5] underline">
            filing a CDI complaint
          </Link>.
        </li>
        <li>
          <strong>Invoke the appraisal clause.</strong> If your policy includes an appraisal
          clause, you can demand appraisal to resolve the ACV dispute. The appraiser or umpire
          should apply the broad evidence rule in reaching their determination.
        </li>
        <li>
          <strong>Consult with a public adjuster or attorney.</strong> A public adjuster can
          prepare a competing estimate and depreciation analysis. An attorney can pursue a bad
          faith claim if the insurer&apos;s refusal to consider condition evidence is
          unreasonable.
        </li>
      </ul>

      <CalloutBox variant="tip" title="Put It in Writing Every Time">
        <p>
          When you challenge depreciation, always do it in writing &mdash; email is fine. A
          phone call where the adjuster promises to &ldquo;look into it&rdquo; creates no
          record and no accountability. A written demand that cites the broad evidence rule
          and attaches condition evidence creates a paper trail that matters in a CDI complaint,
          appraisal, or lawsuit. For guidance on writing effective dispute letters, see our
          article on{' '}
          <Link href="/resources/claim-negotiation-letters" className="text-[#2E74B5] underline">
            claim negotiation letters
          </Link>.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Real-World Examples
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Example 1: The 20-Year-Old Roof in Excellent Condition
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A homeowner in Southern California has a 30-year composition shingle roof that is 20
        years old. A wildfire damages the roof beyond repair. Replacement cost is $35,000.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Insurer&apos;s calculation (depreciation only):</strong> 20 years / 30 years
          = 67% depreciation. ACV = $35,000 - $23,450 = $11,550.
        </li>
        <li>
          <strong>Broad evidence rule analysis:</strong> The homeowner produces a pre-loss
          inspection report showing the roof was in &ldquo;good to excellent&rdquo; condition
          with 15+ years of remaining life. The shingles showed minimal granule loss, no
          curling, and no evidence of leaks. Maintenance records show the roof was inspected
          and maintained annually. Under the broad evidence rule, the actual condition evidence
          supports depreciation of no more than 25-30%. ACV = $24,500 to $26,250.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The difference: approximately $13,000 to $15,000 &mdash; entirely because one method
        considers only age while the other considers actual condition.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Example 2: Long-Life Components at &ldquo;Zero Value&rdquo;
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A home built in 1960 suffers fire damage. The copper plumbing &mdash; original to the
        house &mdash; needs to be replaced. Current replacement cost for the plumbing is
        $18,000. The insurer&apos;s depreciation schedule assigns a 40-year useful life to
        copper pipe, so at 65 years old, the plumbing is depreciated at 100%. The insurer pays
        $0 in ACV for the plumbing.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under the broad evidence rule, the copper plumbing was fully functional with no leaks,
        no corrosion, and no history of repairs. Copper plumbing in California routinely lasts
        70 to 100 years or more. The plumbing had decades of remaining useful life. Assigning
        it zero value because it exceeded an arbitrary depreciation schedule ignores the actual
        physical condition and remaining utility of the component. A broad evidence analysis
        would support an ACV of $9,000 to $14,000.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Example 3: Rising Construction Costs
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A homeowner&apos;s kitchen was remodeled 10 years ago at a cost of $40,000. A pipe
        burst destroys the kitchen. Current replacement cost for an equivalent remodel is
        $65,000. The insurer depreciates by 10 years and offers an ACV of $32,500 (50%
        depreciation on $65,000).
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under the broad evidence rule, the kitchen was in excellent condition with modern
        finishes that remain current. The homeowner&apos;s real estate agent confirms the
        kitchen adds approximately $55,000 to the home&apos;s market value. Comparable homes
        with similar kitchens sell at a premium. The broad evidence rule would require
        consideration of this market data, which supports an ACV significantly higher than
        $32,500.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Common Insurer Objections and How to Counter Them
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        &ldquo;Our depreciation follows industry standards.&rdquo;
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Industry standards for calculating depreciation are not the legal standard in California.
        California law requires the broad evidence rule, which obligates the insurer to consider
        all relevant evidence &mdash; not just plug numbers into a software formula. The fact
        that other insurers use the same shortcut does not make it legal.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        &ldquo;Depreciation is based on the expected useful life of the component.&rdquo;
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Expected useful life is <em>one</em> factor, not the only factor. Under Insurance Code
        &sect; 2051, depreciation must be based on the property&apos;s &ldquo;condition at the
        time of the injury.&rdquo; If the actual condition demonstrates that the component has
        outlasted or outperformed its expected useful life, the depreciation must account for
        that reality.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        &ldquo;We already considered the condition.&rdquo;
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Ask the insurer to identify, in writing, what condition evidence they reviewed and how
        it influenced their depreciation determination. If they cannot produce a documented
        analysis &mdash; and they almost never can &mdash; then they did not actually consider
        condition. They applied a formula.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        &ldquo;You have a replacement cost policy, so depreciation does not matter.&rdquo;
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Depreciation matters even under a replacement cost policy because the initial payment
        &mdash; the ACV payment &mdash; is what the policyholder receives upfront to begin
        repairs. An artificially low ACV payment means the policyholder may not have enough
        funds to start the work, which in turn delays or prevents collection of the holdback.
        For more on how this works, see our article on{' '}
        <Link href="/resources/loss-settlement-provisions" className="text-[#2E74B5] underline">
          loss settlement provisions
        </Link>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Moreover, many ACV-only policies exist &mdash; particularly for older homes, rental
        properties, and contents. For those policyholders, the ACV payment is the{' '}
        <em>only</em> payment. Getting the ACV right is everything. For the differences between
        ACV and RCV policies, see our{' '}
        <Link href="/resources/acv-rcv" className="text-[#2E74B5] underline">
          ACV vs. RCV guide
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Broad Evidence Rule and California Regulations
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Beyond the case law, several California regulations reinforce the broad evidence rule
        and impose specific requirements on how insurers must handle depreciation:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>10 CCR &sect; 2695.9(f)(1):</strong> Prohibits the depreciation of labor
          costs on residential property claims. This regulation implements one specific aspect
          of the broad evidence rule &mdash; recognizing that labor is a cost component that
          does not physically depreciate.
        </li>
        <li>
          <strong>10 CCR &sect; 2695.9(b):</strong> Requires that the insurer&apos;s claims
          settlement be based on facts, obtained through diligent investigation. An ACV
          determination based solely on age-based depreciation without investigating the
          property&apos;s actual condition fails this requirement.
        </li>
        <li>
          <strong>10 CCR &sect; 2695.7(d):</strong> Requires that the insurer provide a
          written explanation of the basis for the claim determination. If the basis is nothing
          more than Xactimate depreciation defaults, the insurer should be required to say so
          &mdash; and that admission itself supports a challenge under the broad evidence rule.
        </li>
        <li>
          <strong>Insurance Code &sect; 790.03(h):</strong> Defines unfair claims settlement
          practices, including failing to adopt reasonable standards for the prompt investigation
          and processing of claims. An insurer that systematically ignores condition evidence
          and applies formula-based depreciation may be violating this statute.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Broad Evidence Rule in Other States
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California is not alone in adopting the broad evidence rule. The majority of states that
        have addressed the issue have adopted some version of it. The broad evidence rule
        originated in <em>McAnarney v. Newark Fire Insurance Co.</em> (1928), a New York Court
        of Appeals case, and has since been adopted in various forms across the country.
        However, the specific application varies by state, and some states still permit or
        default to the replacement-cost-minus-depreciation formula when the policy defines ACV
        that way.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you are dealing with a claim outside California, check whether your state has adopted
        the broad evidence rule. Even in states that have not formally adopted it, the underlying
        principle &mdash; that ACV should reflect all relevant evidence of value &mdash; is a
        powerful argument in negotiations and appraisal.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Key Takeaways
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          ACV in California is determined under the broad evidence rule, not by the formula
          &ldquo;replacement cost minus depreciation.&rdquo;
        </li>
        <li>
          The broad evidence rule requires consideration of <strong>all</strong> relevant
          evidence of value, including actual condition, remaining useful life, maintenance
          history, market value, and any other relevant factors.
        </li>
        <li>
          Insurers systematically ignore the broad evidence rule by defaulting to Xactimate
          depreciation schedules that consider only age.
        </li>
        <li>
          The broad evidence rule typically produces a higher ACV than simple depreciation,
          especially for well-maintained property, long-life components, and items in
          appreciating markets.
        </li>
        <li>
          California Insurance Code &sect; 2051 requires depreciation to be &ldquo;fair and
          reasonable&rdquo; and based on &ldquo;condition at the time of the injury&rdquo;
          &mdash; not abstract age-based formulas.
        </li>
        <li>
          When disputing depreciation, cite the broad evidence rule (
          <em>Jefferson Insurance Co. v. Superior Court</em>), gather condition evidence, and
          demand that the insurer explain what evidence they actually considered.
        </li>
        <li>
          Labor costs cannot be depreciated under California law &mdash; a rule that insurers
          frequently violate.
        </li>
        <li>
          The broad evidence rule applies at every stage: claim negotiation, appraisal, CDI
          complaints, and litigation.
        </li>
      </ul>

      <CalloutBox variant="info" title="Related Articles">
        <p>
          For more on depreciation and valuation issues, see these related guides:
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>
            <Link href="/resources/acv-rcv" className="text-[#2E74B5] underline">
              ACV vs. RCV: Actual Cash Value vs. Replacement Cost Value
            </Link>
          </li>
          <li>
            <Link href="/resources/excessive-depreciation" className="text-[#2E74B5] underline">
              Excessive Depreciation: How Insurance Companies Shortchange Your Claim
            </Link>
          </li>
          <li>
            <Link href="/resources/loss-settlement-provisions" className="text-[#2E74B5] underline">
              Loss Settlement Provisions: How Your Insurance Payout Is Calculated
            </Link>
          </li>
          <li>
            <Link href="/resources/labor-depreciation" className="text-[#2E74B5] underline">
              Labor Depreciation: Why Your Insurer Cannot Depreciate Labor Costs
            </Link>
          </li>
        </ul>
      </CalloutBox>
    </>
  )
}
