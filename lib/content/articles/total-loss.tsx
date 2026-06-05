import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Total Loss Insurance Claims — When Your Home Is a Complete Loss',
  description:
    'A comprehensive guide to total loss insurance claims in California — every coverage that activates, rebuilding vs. cashing out, contents claims, common problems, and California-specific protections.',
  summary:
    'A total loss activates every coverage: dwelling (often at policy limits), contents, ALE, and code upgrades. Decide between rebuilding and cashing out, knowing California protections like extended replacement cost and the right to rebuild elsewhere. Claim each coverage fully.',
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
        A total loss means your home is destroyed or damaged beyond repair. For most California
        homeowners, this happens after a wildfire — but a total loss can result from any covered
        peril: fire, explosion, a fallen tree, or catastrophic water damage. Whatever the cause,
        total losses are the most complex and highest-value claims you will ever file. Every coverage
        in your policy comes into play simultaneously, the dollar amounts are enormous, and the
        insurer has every financial incentive to limit what it pays on each one.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        After more than 20 years in the insurance industry — first as a company adjuster, then as a
        licensed Public Adjuster in California — the policyholders who recover the most are the ones who understand every
        coverage available to them — and fight for every dollar on every one. This guide walks you
        through how total loss claims work, what you are entitled to, and where insurers try to
        shortchange you.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Qualifies as a Total Loss?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A total loss can mean different things depending on the circumstances:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>The structure is completely destroyed.</strong> This is the most obvious scenario —
          a wildfire, explosion, or structural collapse leaves nothing standing. The home is gone.
        </li>
        <li>
          <strong>Repair cost exceeds or approaches the replacement cost.</strong> Even if the
          structure is still partially standing, if the cost to repair it equals or exceeds the cost
          to tear it down and rebuild, it is effectively a total loss. Insurers sometimes call this
          a &ldquo;constructive total loss.&rdquo;
        </li>
        <li>
          <strong>Government authority orders demolition.</strong> If the building is condemned due to
          structural instability, code violations, or contamination, the government may order it
          demolished — making it a total loss regardless of the physical damage.
        </li>
      </ul>
      <CalloutBox variant="info" title="The Post-2020 Total-Loss Valuation Framework">
        <p>
          California&apos;s actual cash value framework changed materially in 2020. Before
          AB 188 (Stats. 2019, ch. 59), effective January 1, 2020, Cal. Ins. Code
          &sect; 2051 treated total losses differently from partial losses: under former
          &sect; 2051(b)(1), an ACV total-loss recovery was capped at the fair market value
          of the structure or the policy limit, whichever was less; under former
          &sect; 2051(b)(2), partial losses were calculated as replacement cost less
          depreciation. The judicial decision in <em>California FAIR Plan Ass&apos;n v.
          Garnes</em> (2017) 11 Cal.App.5th 1276 clarified that &ldquo;total loss&rdquo;
          under &sect; 2051 means physical, not economic loss &mdash; setting the stage
          for the legislative fix.
        </p>
        <p className="mt-2">
          AB 188 (2019) eliminated the (b)(1)/(b)(2) bifurcation. Current Cal. Ins. Code
          &sect; 2051(b) applies the same replacement-cost-less-depreciation formula to
          &ldquo;either a total or partial loss to the structure or its contents,&rdquo;
          subject to the policy limit. The practical consequence is significant for total
          losses on ACV policies: insureds whose homes were extensively damaged but not
          completely destroyed are no longer limited to fair market value as a ceiling on
          recovery. For replacement-cost policies, the &sect; 2051.5 framework governs;
          for ACV policies, &sect; 2051(b) does. California&apos;s separate regulatory
          prohibition on labor depreciation, 10 CCR &sect; 2695.9(f)(1), applies on top
          of either framework.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        The distinction between a total loss and a partial loss matters for many coverage provisions.
        In a partial loss, you are repairing and restoring. In a total loss, you are starting from
        scratch — and that activates coverages that may not come into play otherwise, including
        extended replacement cost, full Ordinance or Law coverage, and the complete contents claim.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        All Coverages Activate at Once
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        In a total loss, virtually every section of your homeowners policy is triggered
        simultaneously. This is what makes total loss claims so complex — and so valuable. Here is
        how each coverage applies:
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Coverage A — Dwelling
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The full policy limit on your dwelling coverage typically applies. This is the cost to
        rebuild your home to the same size, quality, and features as what was destroyed. If you carry
        extended replacement cost — and you should — that endorsement adds an additional 25 to 50
        percent above the Coverage A limit to account for the reality that rebuilding after a
        disaster almost always costs more than what was estimated when the policy was written.
        Post-disaster labor shortages, material price spikes, and permitting delays all drive costs
        upward.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Coverage B — Other Structures
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Every detached structure on your property is covered under Coverage B — typically set at 10
        percent of your Coverage A limit. This includes fences, sheds, detached garages, pools,
        spas, retaining walls, driveways, walkways, gazebos, and any other structure not physically
        attached to the dwelling. This coverage is frequently overlooked or undervalued. On a
        property with significant hardscaping, fencing, a pool, and detached structures, the
        Coverage B claim alone can be tens of thousands of dollars.
      </p>

      <CalloutBox variant="tip" title="Do Not Overlook Other Structures">
        <p>
          Walk your entire property — mentally or physically — and list every man-made structure
          that is not attached to the house. Retaining walls, garden walls, pavers, built-in
          barbecues, pergolas, play structures, mailboxes, light posts, and irrigation systems all
          fall under Coverage B. Insurers rarely volunteer to pay for items you do not claim.
        </p>
      </CalloutBox>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Coverage C — Contents / Personal Property
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        In a total loss, you have lost everything you owned. Every piece of furniture, every
        appliance, every article of clothing, every book, every tool in the garage — all of it. The
        contents claim is typically the most time-consuming part of a total loss. Your insurer will
        pay actual cash value (ACV) upfront — the depreciated value of each item — and then pay the
        replacement cost value (RCV) holdback after you actually replace the items. Building a
        thorough, room-by-room inventory is critical to maximizing this coverage. Our{' '}
        <Link href="/inventory" className="text-blue-700 underline hover:text-blue-900">
          free inventory tool
        </Link>{' '}
        can help you get started.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Coverage D — Additional Living Expenses (ALE) / Fair Rental Value (FRV)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A total loss means full displacement. You cannot live in your home while it is rebuilt — and
        rebuilding a total loss typically takes 18 months to three years or longer. Coverage D pays
        for temporary housing, increased meal costs, storage fees, laundry, transportation, pet
        boarding, and every other additional expense you incur because you cannot live in your home.
        California law (Cal. Ins. Code &sect; 2060(b)(1)) requires a minimum 24-month ALE
        period for declared-disaster losses on replacement cost policies, with additional
        extensions available where the insured, acting in good faith and with reasonable
        diligence, encounters delays beyond their control.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Debris Removal
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Debris removal costs in a total loss can be enormous — $50,000 to $200,000 or more for
        wildfire total losses, depending on the size of the structure, the presence of hazardous
        materials (asbestos, lead paint, contaminated soil), and access conditions. Most policies
        provide debris removal as an additional coverage beyond the dwelling limit, often 5 percent
        of Coverage A. Debris removal applies not just to the dwelling but also to other structures,
        trees, and personal property on the premises. For a detailed breakdown, see our guide to{' '}
        <Link href="/resources/debris-removal" className="text-blue-700 underline hover:text-blue-900">
          debris removal coverage
        </Link>.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Ordinance or Law Coverage
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you carry Ordinance or Law coverage — and for a total loss, this coverage is invaluable —
        it pays for the increased cost of rebuilding to current building codes and standards. Building
        codes change over time, and a home built 20 or 30 years ago may not comply with current
        seismic, energy efficiency, fire resistance, or accessibility requirements. Bringing the
        rebuild into code compliance can add 25 to 50 percent to the construction cost. For a
        complete explanation, see our guide to{' '}
        <Link href="/resources/ordinance-law" className="text-blue-700 underline hover:text-blue-900">
          Ordinance or Law coverage
        </Link>.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Trees, Shrubs, and Plants
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your policy provides separate coverage for trees, shrubs, and other plants — typically up to
        $500 per item, with a total cap of 5 percent of Coverage A. In a total loss, especially from
        wildfire, mature trees and established landscaping are often completely destroyed. While the
        per-item and aggregate caps limit this coverage, it is still real money that should be
        claimed.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Rebuilding vs. Cashing Out
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        After a total loss, you face a fundamental decision: do you rebuild, or do you take the money
        and move on? California law gives you options, but each has different financial implications.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Rebuilding at the Same Location
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        You have the right to rebuild your home at the original location. If you rebuild, you are
        entitled to the full replacement cost — the actual cost to rebuild to the same size, quality,
        and features. This is where extended replacement cost kicks in if actual costs exceed the
        policy limit.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Rebuilding at a Different Location
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        California Insurance Code section 2051.5 gives you the right to rebuild at a different
        location. The critical point: the measure of damages is what it would have cost to rebuild at
        the original location. If you rebuild in a less expensive area, you may pocket the
        difference. If you rebuild in a more expensive area, you bear the additional cost. The
        insurer pays based on the original location either way.
      </p>

      <CalloutBox variant="legal" title="California Insurance Code 2051.5">
        <p>
          Under IC 2051.5, the insured may collect the full replacement cost of the dwelling
          regardless of whether they rebuild at the same location, at a different location, or
          purchase an existing home elsewhere. The measure of indemnity is the cost to rebuild the
          lost structure at the original site. This is a powerful protection that gives you
          flexibility without financial penalty.
        </p>
      </CalloutBox>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Choosing Not to Rebuild
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        You are not required to rebuild. However, if you choose not to rebuild or purchase a
        replacement home, you will only receive actual cash value (ACV) — the depreciated value of
        your home — not the full replacement cost. The difference between ACV and RCV on a total loss
        can be substantial, sometimes hundreds of thousands of dollars. This is a financial decision
        that deserves careful analysis.
      </p>

      <CalloutBox variant="tip" title="Tax Implications — Consult a CPA or Tax Attorney">
        <p>
          Total loss insurance proceeds can have significant tax implications depending on
          basis in the property, whether the insured rebuilds, and the amount of proceeds
          received. Federal involuntary-conversion treatment under IRC Section 1033 may be
          available in some circumstances, but whether and how it applies to a specific
          claim is a question for a CPA or tax attorney &mdash; not for this article and
          not for the insurer&apos;s claims adjuster. Consult tax counsel before making
          decisions about rebuilding, replacement property, or cashing out.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Contents Claim in a Total Loss
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        In a total loss, you have lost everything. The contents inventory is massive — most
        households contain thousands of individual items — and building a complete, defensible
        inventory is the single most time-consuming task in the entire claim.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The most effective approach is a room-by-room methodology. Go through every room in your
        mind, starting at the front door and working systematically. For each room, think about the
        floor (rugs, mats), walls (art, mirrors, shelves), ceiling (light fixtures, fans), furniture,
        electronics, and every item stored in closets, cabinets, and drawers. Our{' '}
        <Link href="/inventory" className="text-blue-700 underline hover:text-blue-900">
          personal property inventory tool
        </Link>{' '}
        provides a structured framework with over 3,750 items organized by room.
      </p>

      <CalloutBox variant="important" title="Categories People Commonly Forget">
        <p>
          Do not stop at the obvious items. Total loss inventories routinely miss entire categories
          of property. Make sure you account for: holiday and seasonal decorations (Christmas,
          Halloween, Fourth of July), garage and workshop tools, pantry food and spices, cleaning
          supplies and household chemicals, medications and first-aid supplies, books and magazines,
          children&rsquo;s toys and school supplies, pet supplies and equipment, sporting goods,
          luggage and travel accessories, linens stored in closets, items in the attic or
          crawlspace, items kept in storage units or at other locations, and items lent to friends
          or family.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Common Problems in Total Loss Claims
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Total loss claims are high-value claims, and high-value claims attract aggressive cost
        containment from insurers. These are the problems I see most frequently:
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Underestimating Replacement Cost
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurer&rsquo;s initial estimate of what it costs to rebuild your home is almost always
        too low. They use estimating software with pre-loaded costs that may not reflect current
        market conditions — especially after a disaster when labor and materials are in high demand.
        Getting your own independent estimate from a licensed contractor is essential.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Pressuring Early Settlement
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurers want to close claims quickly. They may present what appears to be a generous
        lump-sum offer early in the process, before you fully understand the scope of your loss. Do
        not accept an early offer without having it independently evaluated. Once you accept a
        settlement and sign a release, you typically cannot reopen the claim.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Extended Replacement Cost Disputes
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you carry extended replacement cost coverage, the insurer may resist paying it — arguing
        that you could rebuild for less, that your contractor&rsquo;s estimate is inflated, or that
        you have not met conditions for the additional coverage. Know what your policy requires and
        document your actual rebuilding costs meticulously.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Debris Removal Disputes
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Debris removal is often one of the largest single line items in a total loss claim, and
        insurers frequently dispute the cost. They may argue that the removal should cost less, that
        certain hazardous material abatement is unnecessary, or that the additional 5 percent
        provision does not apply. See our{' '}
        <Link href="/resources/debris-removal" className="text-blue-700 underline hover:text-blue-900">
          debris removal guide
        </Link>{' '}
        for detailed strategies.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        ALE Disputes
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurers try to rush you back into your home or limit the duration of ALE payments. They may
        argue that you should have rebuilt faster, that your temporary housing costs are excessive, or
        that certain expenses are not &ldquo;additional.&rdquo; In a total loss, you are displaced
        for years — and the insurer owes you ALE for the entire reasonable period of displacement.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Contents Depreciation Disputes
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurers apply depreciation to determine the ACV of your contents. When you have lost
        thousands of items, even small differences in depreciation rates add up to large dollar
        amounts. Insurers may apply excessive depreciation, depreciate items that should not be
        depreciated (labor costs, for example), or refuse to pay the RCV holdback after you replace
        items.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Land Value Deductions
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some insurers attempt to deduct the land value from the dwelling coverage — arguing that the
        Coverage A limit includes the land. This is wrong. Coverage A insures the structure, not the
        land. The land still exists after a total loss. Any attempt to reduce your dwelling recovery
        by the value of the land should be challenged immediately.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Building Code Upgrade Denials
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you have Ordinance or Law coverage, the insurer may deny or minimize code upgrade costs —
        arguing that certain upgrades are not required by code, that the costs are inflated, or that
        the coverage does not apply. Code upgrade claims require detailed documentation from your
        contractor and often a code analysis showing exactly which current codes differ from the
        codes in effect when the home was originally built.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        California-Specific Protections for Total Losses
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California provides some of the strongest policyholder protections in the country. If you
        have suffered a total loss in California, know these rights:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>IC 2051.5 — Replacement cost at another location.</strong> You may collect the
          full replacement cost of your dwelling regardless of whether you rebuild at the original
          site or a different location. The measure of damages is the cost to rebuild at the
          original location.
        </li>
        <li>
          <strong>24-month minimum ALE for declared disasters.</strong> For losses arising from a
          state-declared or federally-declared disaster, insurers must provide a minimum of 24
          months of ALE coverage on replacement cost policies. Extensions are available when
          rebuilding delays are caused by factors beyond your control.
        </li>
        <li>
          <strong>Right to choose your own contractor.</strong> You are not required to use the
          insurer&rsquo;s preferred contractor, vendor, or repair network. You have the right to
          hire your own licensed contractor to rebuild your home.
        </li>
        <li>
          <strong>CDI annual notice requirements.</strong> After declared disasters, the California
          Department of Insurance requires insurers to send annual notices to policyholders
          reminding them of their rights — including deadlines to collect replacement cost
          benefits. For official CDI documents and notices, see our{' '}
          <Link href="/cdi-notices" className="text-blue-700 underline hover:text-blue-900">
            CDI notices page
          </Link>.
        </li>
        <li>
          <strong>Insurance Code &sect;675.1(a)(2)&ndash;(a)(3) &mdash; Insurer must renew your
          policy during rebuild.</strong> After a total loss from a declared disaster (where the
          loss was not due to your negligence), the insurer must renew your homeowners policy
          for at least the next two annual renewal periods, but no less than 24 months of
          coverage from the date of the loss (&sect;675.1(a)(3)). They cannot cancel the policy
          between renewal periods while you are rebuilding, except for fraud or misrepresentation
          (&sect;675.1(a)(2)). At renewal, the insurer must consult with you and adjust coverage
          to reflect the changed risk exposure during reconstruction.
        </li>
        <li>
          <strong>Insurance Code &sect;2051.5(b)(1) (as amended by AB 1800, effective 2019)
          &mdash; Minimum rebuild period.</strong> For declared state-of-emergency losses, you
          have a minimum <strong>36-month</strong> period to repair, rebuild, or replace your
          home (commencing from the first ACV payment), with mandatory additional 6-month
          extensions for good cause where the insured, acting in good faith and with reasonable
          diligence, encounters delays beyond their control. For non-catastrophic losses, the
          minimum is 12 months. You may also rebuild or replace at a different location after a
          total loss.
        </li>
        <li>
          <strong>SB 1855 — Underinsurance disclosure.</strong> Insurers must include a disclosure
          on your declarations page stating that home rebuilding costs may differ from your policy
          limits. &ldquo;Extended Replacement Cost&rdquo; has been renamed &ldquo;Limited Replacement
          Cost&rdquo; in disclosures to better communicate the risk of underinsurance.
        </li>
        <li>
          <strong>Fair Claims Regulations still apply.</strong> Even in a total loss — even after a
          declared disaster — the insurer must comply with California&rsquo;s Fair Claims
          Settlement Practices Regulations. That means timely acknowledgment, timely investigation,
          prompt payment, and all other obligations set forth in 10 CCR 2695.
        </li>
      </ul>

      <CalloutBox variant="legal" title="Timelines Still Apply">
        <p>
          A total loss does not excuse the insurer from following the law. Under California&rsquo;s
          Fair Claims regulations, the insurer must acknowledge your claim within 15 days, begin
          investigation within 15 days, and accept or deny each element of the claim within 40 days
          of receiving proof of loss. These timelines apply to every coverage — dwelling, contents,
          ALE, debris removal, and Ordinance or Law — individually.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Professional Help
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Total losses are the claims that most justify professional help. The stakes are too high,
        the coverages too numerous, and the insurer&rsquo;s incentive to underpay too strong for most
        homeowners to navigate alone. A total loss claim involves simultaneous negotiations on
        dwelling replacement cost, other structures, the entire contents inventory, ALE for a
        multi-year displacement, debris removal, Ordinance or Law, trees and landscaping, and
        extended replacement cost — all at once, all with separate disputes, all with separate
        documentation requirements.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A licensed{' '}
        <Link href="/resources/public-adjuster" className="text-blue-700 underline hover:text-blue-900">
          Public Adjuster
        </Link>{' '}
        handles all of these coverages simultaneously on your behalf. We prepare the estimates,
        build the inventory, document the ALE expenses, negotiate every line item, and make sure
        nothing falls through the cracks. If you are dealing with a total loss, the cost of a PA is
        a fraction of the additional recovery you will receive compared to handling the claim on your
        own.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you have questions about a total loss claim or need help navigating the process,{' '}
        <Link href="/contact" className="text-blue-700 underline hover:text-blue-900">
          contact us
        </Link>{' '}
        for a free consultation. We have handled hundreds of total loss claims across California and
        we are happy to discuss your specific situation.
      </p>

      <CalloutBox variant="legal" title="Important Notice">
        <p>
          This article is provided for general educational purposes only and does not constitute
          legal advice. Insurance policies, regulations, and case law can vary significantly based
          on individual circumstances. Consult a licensed attorney for advice about your specific
          situation. If you need a referral to an attorney experienced in insurance coverage disputes,
          a licensed Public Adjuster may be able to assist.
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
