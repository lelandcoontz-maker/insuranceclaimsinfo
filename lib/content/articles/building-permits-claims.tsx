import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Building Permits and Insurance Claims: What the Insurer Owes and When',
  description:
    'Building permit fees are part of the cost to repair or rebuild your home after a covered loss. Learn when insurers must pay for permits, how to calculate the cost, and what to do when they refuse.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        When your home is damaged by a covered peril and needs to be repaired or rebuilt, a building
        permit is almost always required. And building permits cost money &mdash; sometimes a lot of
        money. Those permit fees are a legitimate part of the cost to restore your property, and your
        insurance company generally owes for them. But insurers frequently refuse to pay permit fees,
        or delay payment by claiming you have to &ldquo;incur&rdquo; the cost first. This article
        explains what building permits are, why they matter to your claim, and how to make sure you
        get paid for them.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why Building Permits Matter in Insurance Claims
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A building permit is a government authorization required before construction, renovation, or
        major repair work can begin. Permits exist to ensure that work complies with local building
        codes, fire safety standards, structural requirements, and zoning regulations. In most
        jurisdictions, any repair involving structural work, electrical, plumbing, HVAC, roofing, or
        changes to the building footprint requires a permit.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When your insurance company writes an estimate to repair or rebuild your home, the cost of
        building permits is part of the cost of the repair. Just like you cannot rebuild a house
        without lumber or labor, you cannot rebuild a house without a permit. The permit fee is not
        optional &mdash; it is a legally required cost that must be paid before construction can
        begin.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        When Are Permits Required for Insurance Repairs?
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Not every repair requires a permit, but many do. Generally, permits are required for:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Structural repairs or modifications (framing, load-bearing walls, foundation work)</li>
        <li>Roof replacement or major roof repairs</li>
        <li>Electrical work beyond minor fixture replacements</li>
        <li>Plumbing repairs involving supply lines, drains, or water heaters</li>
        <li>HVAC system replacement or major repair</li>
        <li>Window or door replacements that change the opening size</li>
        <li>Any addition or change to the building footprint</li>
        <li>Demolition work</li>
        <li>
          Fire damage repairs (most jurisdictions require permits for any fire-damaged structure
          repair)
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        For minor cosmetic work &mdash; painting, replacing flooring in kind, patching small areas
        of drywall &mdash; permits are typically not required. But for any claim involving
        significant structural, mechanical, electrical, or plumbing work, you should assume a permit
        will be needed.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Insurer Owes for Permit Fees &mdash; Even If They Have Not Been Incurred
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the most important point in this article: <strong>building permit fees are part of
        the cost to repair or replace your home, and the insurer owes for them whether or not you
        have actually pulled the permit yet.</strong>
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance companies frequently push back on permit fees by saying something like,
        &ldquo;We&rsquo;ll pay for the permit once you pull it and show us the receipt.&rdquo; In
        fairness, this position is not entirely unreasonable &mdash; the insurer wants to know the
        exact dollar amount, and seeing the receipt is one way to confirm it. But when the insurer
        refuses to pay <em>anything</em> for permits until you show a receipt, that crosses the line
        from reasonable to unfair.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Think about it this way: your policy promises to pay the cost to repair or replace your
        damaged property. The cost to repair a house includes the permit. If you tell the insurer,
        &ldquo;I need $3,500 for the building permit,&rdquo; and the insurer says, &ldquo;We
        won&rsquo;t pay you a dollar until you go spend $3,500 of your own money first,&rdquo; that
        is circular and unfair. You need the money to pull the permit. You cannot pull the permit
        without the money. The insurer is the one who owes the money.
      </p>

      <CalloutBox variant="important" title="Permits Are Not a &ldquo;Must Be Incurred&rdquo; Item">
        <p>
          There are certain costs under a property insurance policy that genuinely must be incurred
          before the insurer is obligated to pay. Building permits are <strong>not</strong> one of
          them. Costs that typically must be incurred first include:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>
            <strong>Temporary housing (Additional Living Expenses / ALE):</strong> You must actually
            incur living expenses above your normal costs before the insurer reimburses them
          </li>
          <li>
            <strong>Building code upgrades (
            <Link href="/resources/ordinance-law" className="text-[#2E74B5] hover:underline">
              Ordinance or Law coverage
            </Link>):</strong> Code upgrade costs generally must be incurred &mdash; meaning the
            upgrades must actually be performed &mdash; before payment is owed
          </li>
          <li>
            <strong>Replacement cost holdback (recoverable depreciation):</strong> Under most{' '}
            <Link href="/resources/loss-settlement-provisions" className="text-[#2E74B5] hover:underline">
              loss settlement provisions
            </Link>, the insurer pays actual cash value first and releases the depreciation holdback
            after repairs are completed
          </li>
        </ul>
        <p className="mt-2">
          Building permits are fundamentally different. The permit fee is a known, determinable cost
          that is part of the repair estimate &mdash; no different from the cost of lumber,
          drywall, or roofing materials. Your policy does not require you to purchase lumber out of
          pocket and submit a receipt before the insurer pays for it, and permits should be treated
          the same way.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What If the Policyholder Does Not Plan to Rebuild?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some homeowners, after suffering a major loss, decide they do not want to repair or rebuild.
        They may want to sell the property as-is, move to a different area, or simply walk away. This
        is their right &mdash; and it does not eliminate the insurer&rsquo;s obligation to pay the
        full cost of repairs, including building permits.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The measure of the loss is the cost to repair or replace the damaged property. That cost
        includes permit fees, regardless of whether the homeowner actually intends to pull the
        permit. If a homeowner has a damaged house and just wants to walk away from it, they deserve
        to be paid the full amount &mdash; including the building permits they are never going to
        pull.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under California Insurance Code &sect;2051.5, for total losses, an insurer cannot limit or
        deny payment of the replacement cost (including building code upgrade costs) on the basis
        that the insured has decided to rebuild at a new location or purchase a built home elsewhere.
        If the insurer cannot condition payment on where you rebuild, it certainly should not be able
        to condition payment on whether you have incurred a specific line item within the repair
        estimate.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Calculate Building Permit Fees
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurer has a duty and good-faith obligation under California law to calculate what the
        permit fees probably are and pay that amount. Under California Insurance Code &sect;790.03(h)(5),
        it is an unfair claims practice to fail to attempt in good faith to effectuate prompt, fair,
        and equitable settlements of claims in which liability has become reasonably clear. When
        permit fees are a known component of the cost to repair, the insurer should not pay zero
        simply because the exact receipt is not yet available.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        At minimum, the insurer should pay the lower end of a reasonable estimate of the permit fee.
        Ideally, the insurer should pay the full correct amount if it can be determined or reasonably
        estimated. What the insurer should never do is pay nothing at all.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        There are several ways to calculate or estimate building permit fees:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        1. Consult the City or County Fee Schedule
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most cities and counties publish their building permit fee schedules on their websites.
        These schedules typically calculate fees based on the total valuation of the construction
        project. You can look up the fee schedule for your jurisdiction, plug in the estimated cost
        of repair, and calculate the permit fee directly. This is publicly available information
        that anyone &mdash; including the insurer &mdash; can access.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        2. Consult with a Contractor, Architect, or Structural Engineer
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A licensed{' '}
        <Link href="/resources/choosing-your-contractor" className="text-[#2E74B5] hover:underline">
          contractor
        </Link>, architect, or structural engineer who works in your area will know what permits
        are required for your type of repair and what the fees typically run. They can provide a
        written estimate of the expected permit costs, which you can submit to your insurer as
        documentation supporting your claim.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        3. Calculate Based on Publicly Available Information
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many jurisdictions use a standard formula to calculate permit fees. A common approach is to
        base the fee on the total project valuation using a table published by the International
        Code Council (ICC) or a locally adopted variation. The formula typically produces a base fee
        plus an additional amount per thousand dollars of valuation above a threshold. Plan check
        fees are commonly calculated as a percentage (often 65% to 100%) of the building permit fee.
        Additional fees for mechanical, electrical, and plumbing permits are assessed separately.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Between the published fee schedule, contractor input, and publicly available formulas, the
        insurer has every tool it needs to calculate a reasonable estimate of permit costs &mdash;
        and no excuse for paying zero.
      </p>

      <CalloutBox variant="tip" title="Permit Fees in Xactimate Estimates">
        <p>
          <Link href="/resources/xactimate" className="text-[#2E74B5] hover:underline">
            Xactimate
          </Link>, the industry-standard estimating software used by most insurance companies,
          has a built-in parameter for permit fees. In the estimate parameters under
          &ldquo;Additional Charges,&rdquo; the estimator can add permit fees as either a flat
          dollar amount or a calculated percentage of the estimate total. When reviewing your
          insurer&rsquo;s estimate, check whether permit fees have been included. If the permit
          line shows $0 or is missing entirely, that is a cost the insurer has omitted from their{' '}
          <Link href="/resources/scope-of-loss" className="text-[#2E74B5] hover:underline">
            scope of loss
          </Link>.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Who Pulls the Building Permit?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        In most insurance repair situations, the contractor pulls the building permit. This is
        standard practice &mdash; the contractor is the one performing the work, and most
        jurisdictions require the permit to be obtained by the party responsible for the
        construction. The contractor applies for the permit, pays the fee (or the homeowner
        provides the funds), and the permit is posted at the job site during construction.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Homeowners can also pull permits themselves, particularly if they are acting as
        owner-builders. However, acting as an owner-builder carries significant responsibilities
        under California law, including liability for workers&rsquo; compensation and compliance
        with contractor licensing requirements.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Regardless of who actually pulls the permit, the cost of the permit is part of the cost to
        repair the property &mdash; and the insurer owes for it. The question of who physically
        walks into the building department and pays the fee does not change the insurer&rsquo;s
        obligation to include that cost in the claim payment.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Permit Costs Affect Your Total Claim Value
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Permit fees can add a meaningful amount to the total claim value. On a moderate repair
        project of $100,000 to $200,000, permit fees (including plan check fees, mechanical,
        electrical, and plumbing permits, and other related fees) can easily run $3,000 to $8,000
        or more. On a total loss rebuild, permit fees can exceed $15,000 to $25,000 depending on
        the jurisdiction and the scope of construction.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        These costs are separate from the construction costs and should be itemized separately in
        the estimate. They should also be separate from any{' '}
        <Link href="/resources/code-upgrade-coverage" className="text-[#2E74B5] hover:underline">
          code upgrade costs
        </Link>{' '}
        covered under your Ordinance or Law coverage. The permit itself is not a code upgrade &mdash;
        it is the cost of obtaining government authorization to perform the repair work. Code
        upgrades are the additional construction costs required to bring the property into compliance
        with current building codes. These are two different things and should not be conflated.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Happens When Unpermitted Work Is Discovered During a Claim
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Sometimes, during the claims process, an inspection or contractor walkthrough reveals that
        previous work on the property was done without permits. This can include unpermitted room
        additions, bathroom or kitchen remodels, electrical upgrades, converted garages, or
        enclosed patios. Discovering unpermitted work during a claim creates several complications:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>The insurer may question whether unpermitted work contributed to the damage.</strong>{' '}
          If unpermitted electrical work caused a fire, for example, the insurer may argue that the
          damage resulted from the homeowner&rsquo;s own negligence. This argument is not always
          valid &mdash; coverage depends on the cause of loss and the specific policy language &mdash;
          but it can create a dispute.
        </li>
        <li>
          <strong>The building department may require unpermitted work to be brought up to code.</strong>{' '}
          When you pull a permit for current repairs, the building inspector may identify existing
          unpermitted work and require that it be corrected as a condition of approving the new
          permit. The cost of correcting previously unpermitted work is a potential{' '}
          <Link href="/resources/ordinance-law" className="text-[#2E74B5] hover:underline">
            Ordinance or Law
          </Link>{' '}
          issue &mdash; if the correction is required by law or ordinance as part of the current
          repair, it may be covered under that provision.
        </li>
        <li>
          <strong>The insurer may dispute the value of unpermitted improvements.</strong> An
          unpermitted addition or remodel may not carry the same replacement cost value as a
          permitted one. The insurer may argue that because the work was never inspected or approved,
          it does not meet code and should be valued differently.
        </li>
      </ul>

      <CalloutBox variant="warning" title="Unpermitted Work Does Not Void Your Coverage">
        <p>
          Discovering unpermitted work on your property does not mean your insurance claim is denied.
          Your policy covers the dwelling as it existed at the time of the loss. Unpermitted work
          may create complications, but the existence of unpermitted improvements is not a policy
          exclusion. If the insurer tries to deny your entire claim because of unpermitted work,
          that is likely an overreach &mdash; especially if the unpermitted work had nothing to do
          with the cause of loss.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Insurer&rsquo;s Good-Faith Obligation
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under California&rsquo;s Fair Claims Settlement Practices Regulations (10 CCR
        &sect;2695.7(d)), every insurer must &ldquo;conduct and diligently pursue a thorough, fair
        and objective investigation.&rdquo; Under 10 CCR &sect;2695.7(g), insurers cannot make
        unreasonably low settlement offers. And under California Insurance Code &sect;790.03(h)(5),
        failing to attempt in good faith to effectuate prompt, fair, and equitable settlements is an
        unfair claims practice.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When it comes to building permit fees, these obligations mean the insurer has a duty to:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Determine what permits are required for the scope of repair
        </li>
        <li>
          Calculate or reasonably estimate the cost of those permits using publicly available
          fee schedules, contractor input, or other reliable methods
        </li>
        <li>
          Include permit fees as a line item in the repair estimate
        </li>
        <li>
          Pay the estimated permit fee as part of the claim settlement &mdash; not withhold it
          pending a receipt
        </li>
        <li>
          If the actual permit fee turns out to be higher than the estimate, pay the difference as
          a supplement
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        An insurer that pays zero for permit fees when the scope of repair clearly requires a permit
        is not making a good-faith settlement offer. The cost of a building permit is knowable,
        calculable, and part of the cost to repair the property. Refusing to pay it is no different
        from refusing to pay for any other documented line item in the repair estimate.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What to Do When the Insurer Refuses to Pay for Permits
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your insurer is refusing to pay permit fees or is conditioning payment on you incurring
        the cost first, here is what you can do:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Document the permit requirement.</strong> Identify which permits are required for
          your repair scope. Your contractor can help with this. Get the city or county fee schedule
          and calculate the expected cost.
        </li>
        <li>
          <strong>Submit the calculated permit cost in writing.</strong> Send the insurer a written
          request that includes the fee schedule, the calculation, and the total permit cost. Make
          it clear that this is a known cost of the repair.
        </li>
        <li>
          <strong>Point out that permits are not a &ldquo;must incur&rdquo; item.</strong> Your
          policy requires the insurer to pay the cost to repair or replace your property. The
          permit is part of that cost. Unlike recoverable depreciation, ALE, or code upgrade costs,
          there is no policy provision requiring you to incur permit fees before payment.
        </li>
        <li>
          <strong>Cite the insurer&rsquo;s obligation.</strong> Reference the insurer&rsquo;s duty
          under 10 CCR &sect;2695.7 to conduct a thorough and fair investigation and to make
          reasonable settlement offers. An offer that excludes a known, calculable cost component is
          not a fair offer.
        </li>
        <li>
          <strong>Request a written explanation.</strong> Ask the insurer to explain, in writing,
          the specific policy provision that allows them to withhold payment for permit fees. If they
          cannot point to a provision &mdash; and they almost certainly cannot &mdash; their position
          has no basis.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Permits vs. Code Upgrades: An Important Distinction
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        It is important not to confuse building permit fees with{' '}
        <Link href="/resources/code-upgrade-coverage" className="text-[#2E74B5] hover:underline">
          building code upgrade costs
        </Link>. These are related but separate concepts:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Building permit fees</strong> are the government fees you pay to obtain
          authorization to perform construction work. They are an administrative cost &mdash; the
          price of the permit itself, plan check fees, inspection fees, and similar charges.
        </li>
        <li>
          <strong>Building code upgrade costs</strong> are the additional construction costs
          required when current building codes are more stringent than the codes in effect when your
          home was originally built. These are covered under your{' '}
          <Link href="/resources/ordinance-law" className="text-[#2E74B5] hover:underline">
            Ordinance or Law
          </Link>{' '}
          coverage and typically must be incurred before the insurer pays for them.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The permit fee is part of the base cost to repair your home &mdash; it belongs in the
        dwelling estimate alongside materials and labor. Code upgrade costs are additional costs
        above and beyond the base repair, covered under a separate coverage with its own limit. Do
        not let the insurer lump permit fees into your Ordinance or Law coverage or deduct them
        from that limit. They are a dwelling cost, not a code upgrade cost.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Summary: What You Need to Know
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Building permit fees are part of the cost to repair or rebuild your home and are owed by
          the insurer
        </li>
        <li>
          Permit fees do not have to be &ldquo;incurred&rdquo; before the insurer pays &mdash; they
          are not the same as ALE, code upgrades, or recoverable depreciation
        </li>
        <li>
          The insurer has a good-faith obligation to calculate and pay permit fees based on publicly
          available information, contractor estimates, or published fee schedules
        </li>
        <li>
          If the insurer refuses to pay anything for permits, that is not a fair settlement offer
        </li>
        <li>
          Permit fees belong in the dwelling estimate, not in your Ordinance or Law coverage
        </li>
        <li>
          Unpermitted work discovered during a claim does not void your coverage, but it may create
          complications
        </li>
        <li>
          If the actual permit cost exceeds the estimate, the difference should be paid as a
          supplement
        </li>
      </ul>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Is Your Insurer Refusing to Pay for Building Permits?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          If your insurance company is withholding permit fees or telling you that you must incur the
          cost first, a Public Adjuster can help you calculate the correct amount and hold the insurer
          to their obligations under your policy and California law.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Request a Free Claim Review &rarr;
        </Link>
      </div>

      <CalloutBox variant="legal" title="Important Notice">
        <p>
          This article is provided for general educational purposes only and does not constitute
          legal advice.
        </p>
      </CalloutBox>
    </>
  )
}
