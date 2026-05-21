import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Vehicle Impact Insurance Claims: When a Car Hits Your Building',
  description:
    'How to handle an insurance claim when a vehicle strikes your home or commercial building — first-party vs. third-party strategies, scope disputes, engineering assessments, code upgrades, loss of use, and subrogation.',
  summary:
    'When a vehicle strikes your building, you can claim against your own policy (first-party) or the driver\'s (third-party). Watch scope disputes, code upgrades, loss of use, and subrogation, and choose the strategy that gets you paid fastest and fullest.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational in nature and reflects the author&rsquo;s interpretation of
          insurance policy provisions and California law as a Licensed Public Adjuster. It is not
          legal advice. Every vehicle impact claim involves unique facts, policy language, and
          circumstances. If you are dealing with a vehicle impact claim, consult with a licensed
          professional for advice about your specific situation.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        A car crashes through your block wall, takes out a support column, and comes to rest
        inside your living room. Or a delivery truck backs into the corner of your commercial
        building, cracking the foundation and shifting the framing for twenty feet in every
        direction. Vehicle impact claims are among the most structurally complex property losses
        an adjuster can encounter &mdash; and among the most commonly underpaid.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The reason is straightforward: the visible damage at the point of impact is only part of
        the story. The forces transmitted through a building when a multi-ton vehicle strikes it
        at speed travel through structural members, foundations, and connections in ways that are
        not visible to the naked eye. A claim that looks like a $15,000 wall repair on the
        surface may involve $100,000 or more in structural damage once an engineer gets involved.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Vehicle Impact as a Covered Peril
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under the standard HO-3 homeowner policy &mdash; an &ldquo;open perils&rdquo; policy on
        the dwelling &mdash; vehicle impact is a covered cause of loss. The HO-3 covers all
        risks of direct physical loss to the dwelling unless specifically excluded, and vehicle
        impact is not an excluded peril. It is also specifically listed as a named peril under the
        HO-3&rsquo;s Coverage C (personal property), which uses a named-perils basis.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Commercial property policies &mdash; whether written on ISO&rsquo;s CP 10 30 (Causes of
        Loss &mdash; Special Form) or similar broad-form language &mdash; likewise cover vehicle
        impact. The Special Form covers all risks of direct physical loss unless excluded, and
        vehicle impact does not fall under any standard exclusion. Even the more restrictive Basic
        and Broad forms list &ldquo;vehicles&rdquo; as a named covered cause of loss.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Coverage is generally not an issue on vehicle impact claims. The dispute is almost always
        about <strong>scope</strong> &mdash; how much damage the vehicle actually caused &mdash;
        and <strong>valuation</strong> &mdash; what it costs to properly repair that damage.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        First-Party vs. Third-Party: Choosing Your Strategy
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a vehicle strikes your property, you typically have two paths to recovery. For a
        detailed comparison of both approaches, see our{' '}
        <Link href="/resources/third-party-vs-first-party" className="text-blue-700 underline hover:text-blue-900">
          third-party vs. first-party claims guide
        </Link>. Here is how each applies specifically to vehicle impact losses:
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        First-Party Claim (Your Own Insurance)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Filing with your own homeowner or commercial property carrier is usually the faster and
        more reliable path. Your carrier has a contractual obligation to investigate and pay the
        claim promptly under California&rsquo;s{' '}
        <Link href="/resources/california-fair-claims" className="text-blue-700 underline hover:text-blue-900">
          Fair Claims Settlement Practices Regulations
        </Link>. You do not have to prove fault &mdash; only that a vehicle struck your building and
        caused damage. The downside is that you pay your deductible and the claim goes on your
        loss history.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        However, your carrier will pursue{' '}
        <Link href="/resources/subrogation" className="text-blue-700 underline hover:text-blue-900">
          subrogation
        </Link>{' '}
        against the at-fault driver (or the driver&rsquo;s auto liability insurer) after paying
        your claim. If subrogation is successful, you recover your deductible. This makes the
        first-party path particularly attractive: you get paid quickly, your property gets
        repaired, and you eventually get the deductible back.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Third-Party Claim (The Driver&rsquo;s Insurance)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        You can file a claim directly against the at-fault driver&rsquo;s auto liability policy.
        The advantage is that there is no deductible, no impact on your own loss history, and the
        driver&rsquo;s carrier pays for the damage their insured caused. The disadvantage is that
        you are a third-party claimant &mdash; you have no contractual relationship with that
        carrier, no regulatory protections under the Fair Claims Regulations (which apply to
        first-party claims), and the carrier owes its duties to its own insured, not to you.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Third-party claims also face practical obstacles. The driver may be uninsured. The
        driver&rsquo;s policy limits may be insufficient to cover the full damage. The liability
        carrier may dispute the scope of damage or argue that some of the damage was pre-existing.
        And the process can take significantly longer than a first-party claim because the
        liability carrier has less urgency to resolve the claim.
      </p>

      <CalloutBox variant="tip" title="Consider Filing Both">
        <p>
          In many vehicle impact cases, the best strategy is to file a first-party claim with your
          own carrier to get the repairs moving, then let your carrier subrogate against the
          driver&rsquo;s liability insurer. You can also pursue a third-party claim directly for
          damages your own policy does not cover &mdash; such as loss of rental income on a
          property that does not have loss-of-rents coverage, or damage that exceeds your own
          policy limits.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Scope Disputes: Damage Extends Far Beyond the Point of Impact
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is where the real fight happens on vehicle impact claims. The carrier&rsquo;s
        adjuster shows up, looks at the hole in the wall, writes an estimate to patch the hole
        and repaint, and moves on. But the structural damage from a vehicle impact is almost
        never limited to the point of contact.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a vehicle &mdash; weighing anywhere from 3,000 to 80,000 pounds &mdash; strikes a
        building at speed, the kinetic energy is transferred through the structure in ways that
        produce damage well beyond what is visible. Common secondary damage includes:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Foundation damage:</strong> Cracking, shifting, or displacement of the
          foundation at and around the point of impact, and sometimes on the opposite side of the
          building from the reactive forces.
        </li>
        <li>
          <strong>Framing displacement:</strong> Wall studs, headers, top plates, and bottom
          plates can be shifted, split, or bowed for 10, 20, or 30 feet from the impact point.
        </li>
        <li>
          <strong>Roof structure damage:</strong> The forces transmitted upward through wall
          framing can displace rafters, ridge boards, and roof sheathing &mdash; even when the
          vehicle never touched the roof.
        </li>
        <li>
          <strong>Drywall cracking throughout the structure:</strong> Stress cracks in drywall on
          walls and ceilings far from the impact zone indicate structural movement.
        </li>
        <li>
          <strong>Window and door misalignment:</strong> Doors that no longer close properly and
          windows that are suddenly difficult to operate indicate the building has shifted.
        </li>
        <li>
          <strong>Plumbing and electrical displacement:</strong> Pipes and wiring routed through
          walls and under floors can be stressed, kinked, or broken by structural movement.
        </li>
        <li>
          <strong>Flooring damage:</strong> Slab cracks, tile cracks, and separation at flooring
          transitions indicate foundation or subfloor movement.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The carrier&rsquo;s field adjuster is trained to document what is visible. But vehicle
        impact damage requires investigation of what is <em>not</em> visible. The damage behind
        the walls, under the floors, and in the attic is often far more extensive and far more
        expensive than the visible damage at the impact point. For more on how to ensure the full
        scope of loss is captured, see our{' '}
        <Link href="/resources/scoping-the-loss" className="text-blue-700 underline hover:text-blue-900">
          scope of loss guide
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Engineering Assessments: Why They Matter
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A licensed structural engineer is essential on any vehicle impact claim involving
        significant force. The engineer&rsquo;s role is to determine the full extent of
        structural damage, identify all components that must be repaired or replaced to restore
        structural integrity, and specify the repair methodology required to meet current building
        code.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance carriers frequently hire their own engineers on vehicle impact claims &mdash;
        and those engineers frequently minimize the scope of structural damage. This is not
        always intentional bias, but the carrier&rsquo;s engineer is typically given a narrow
        scope of work (&ldquo;evaluate the damaged wall&rdquo;) rather than a comprehensive one
        (&ldquo;evaluate the entire structure for impact-related damage&rdquo;). The result is a
        report that addresses only the obvious damage and misses the secondary effects.
      </p>

      <CalloutBox variant="important" title="Get Your Own Engineer">
        <p>
          On any vehicle impact claim where the damage involves structural components, retain your
          own licensed structural engineer. Do not rely solely on the carrier&rsquo;s engineer.
          The cost of an independent engineering assessment &mdash; typically $2,000 to $5,000
          &mdash; is a fraction of the structural damage that a thorough assessment will reveal.
          The engineer&rsquo;s report becomes the foundation of your scope argument.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        Your engineer should conduct destructive testing where necessary &mdash; opening walls,
        exposing framing, and examining the foundation &mdash; to document the full extent of
        damage. A visual-only inspection is insufficient on a vehicle impact claim. The forces
        involved are too significant and the concealed damage too likely. For strategies on
        challenging a carrier&rsquo;s engineering report, see our article on{' '}
        <Link href="/resources/engineering-reports-vs-coverage" className="text-blue-700 underline hover:text-blue-900">
          engineering reports and coverage
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Loss of Use and Business Interruption
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Vehicle impact frequently renders a building uninhabitable or unusable. A car that crashes
        through a living room wall creates an immediate safety hazard. A truck that damages a
        commercial storefront may shut down the business entirely until structural repairs are
        complete. These consequential losses are often as significant as the physical damage
        itself.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        On residential claims, Coverage D (Loss of Use / Additional Living Expenses) covers the
        reasonable cost to maintain your normal standard of living while the home is being
        repaired. This includes temporary housing, restaurant meals (above your normal food
        costs), storage, and other reasonable expenses. Carriers routinely underestimate the
        duration of loss of use on vehicle impact claims because they underestimate the scope
        of repairs &mdash; particularly when structural work is involved.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        On commercial claims, Business Interruption (BI) coverage compensates for lost income
        during the period of restoration. Business Personal Property coverage addresses damaged
        inventory, fixtures, and equipment. If the vehicle impact triggers a code upgrade that
        extends the repair timeline, the period of restoration &mdash; and therefore the BI
        payout &mdash; extends accordingly. The carrier does not get to calculate BI based on
        a cosmetic repair timeline when the actual repair requires structural engineering and
        code compliance.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Subrogation Angle
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Vehicle impact claims are among the strongest subrogation cases in property insurance.
        There is almost always an identifiable at-fault party &mdash; the driver &mdash; and
        that driver almost always has auto liability insurance. Your carrier pays your claim,
        then pursues the driver&rsquo;s auto insurer for reimbursement. When subrogation
        succeeds, you recover your deductible.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The key to successful{' '}
        <Link href="/resources/subrogation" className="text-blue-700 underline hover:text-blue-900">
          subrogation
        </Link>{' '}
        on a vehicle impact claim is documentation. Make sure the police report is filed. Get the
        driver&rsquo;s insurance information at the scene if possible. Photograph the vehicle in
        contact with (or adjacent to) the building before it is removed. Preserve any security
        camera footage. This evidence establishes liability and makes the subrogation case
        straightforward.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Be aware that if the driver is uninsured or underinsured, subrogation recovery may be
        limited or impossible. In that case, your first-party claim may be the only meaningful
        path to recovery, and you will absorb the deductible. Some homeowner policies offer
        deductible waiver provisions when the damage is caused by an identified third party
        &mdash; check your policy and endorsements.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Common Carrier Tactics on Vehicle Impact Claims
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Carriers use predictable strategies to minimize payouts on vehicle impact claims. Knowing
        these tactics helps you prepare:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Minimizing scope to the visible damage:</strong> The carrier writes an estimate
          covering only the wall, floor, or structural element that was directly struck. Secondary
          and concealed damage is ignored unless you force the issue with an engineering report
          and destructive testing.
        </li>
        <li>
          <strong>Refusing to include code upgrades:</strong> When structural repairs trigger
          building code requirements &mdash; such as updated seismic bracing, electrical panel
          upgrades, or Title 24 energy compliance &mdash; the carrier may refuse to include those
          costs, arguing they are &ldquo;betterment.&rdquo; They are not betterment. They are
          legally required code upgrades triggered by the insured repair. For more on this, see
          our{' '}
          <Link href="/resources/code-upgrade-coverage" className="text-blue-700 underline hover:text-blue-900">
            code upgrade coverage article
          </Link>.
        </li>
        <li>
          <strong>Using &ldquo;cosmetic only&rdquo; language:</strong> The carrier characterizes
          damage as cosmetic when it is structural, limiting the repair methodology to patching
          and painting when replacement is warranted.
        </li>
        <li>
          <strong>Limiting loss of use duration:</strong> The carrier estimates loss of use based
          on a simple repair timeline rather than the actual time required for engineering,
          permitting, structural repair, and inspection.
        </li>
        <li>
          <strong>Delaying the engineering assessment:</strong> The carrier slow-walks the
          engineering inspection, extending the claim timeline and leaving the policyholder in
          limbo.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        California Building Code Implications
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When structural repairs from a vehicle impact are significant enough to require a building
        permit, the local building department will require compliance with current California
        Building Code (CBC) standards. This is not optional &mdash; the building department will
        not sign off on repairs that do not meet current code, regardless of what the insurance
        carrier is willing to pay for.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Common code upgrades triggered by vehicle impact structural repairs include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Seismic bracing and hold-down requirements:</strong> Current CBC seismic
          provisions often require significantly more bracing than what was installed when the
          building was originally constructed.
        </li>
        <li>
          <strong>Electrical panel and wiring upgrades:</strong> If the repair involves opening
          walls or affecting the electrical system, the building department may require the
          electrical work to meet current NEC standards.
        </li>
        <li>
          <strong>Title 24 energy compliance:</strong> California&rsquo;s energy code requires
          upgraded insulation, windows, and HVAC systems when substantial repairs are made. A
          vehicle impact that requires wall reconstruction can trigger Title 24 compliance for the
          affected areas.
        </li>
        <li>
          <strong>ADA compliance on commercial properties:</strong> Structural repairs to
          commercial buildings may trigger Americans with Disabilities Act (ADA) accessibility
          requirements, including path-of-travel upgrades.
        </li>
        <li>
          <strong>Fire separation and fire-rated assembly requirements:</strong> If the vehicle
          impact breaches a fire-rated wall or assembly, the repair must restore that fire rating
          to current code standards.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        These code-required upgrades are real costs that the contractor must include in the repair
        or the building department will not approve the work. If your policy includes{' '}
        <Link href="/resources/code-upgrade-coverage" className="text-blue-700 underline hover:text-blue-900">
          Law and Ordinance coverage
        </Link>, these costs should be covered. If your policy does not include L&amp;O coverage
        &mdash; or if the L&amp;O limit is insufficient &mdash; you may be left paying the
        difference between the carrier&rsquo;s estimate (based on pre-code-upgrade repairs) and
        the actual cost of code-compliant construction.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Steps to Protect Your Claim After a Vehicle Impact
      </h2>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Call the police:</strong> A police report documenting the vehicle, the driver,
          and the circumstances is essential for both your insurance claim and subrogation.
        </li>
        <li>
          <strong>Document everything before anything is moved:</strong> Photograph and video the
          vehicle in contact with the building, all visible damage, debris patterns, and the
          surrounding area. Preserve security camera footage immediately.
        </li>
        <li>
          <strong>Get the driver&rsquo;s insurance information:</strong> Name, policy number,
          carrier, and contact information. If the driver flees, the police report becomes even
          more critical.
        </li>
        <li>
          <strong>Make emergency repairs only:</strong> Secure the building to prevent further
          damage or injury, but do not begin permanent repairs until the carrier has inspected and
          you have a full scope of loss. Document all emergency work with photos and receipts.
        </li>
        <li>
          <strong>File your first-party claim immediately:</strong> Do not wait to see how the
          third-party claim develops. Get your own carrier involved from day one.
        </li>
        <li>
          <strong>Retain a structural engineer:</strong> Before the carrier&rsquo;s adjuster
          writes the estimate, have an independent structural engineer evaluate the full extent
          of damage.
        </li>
        <li>
          <strong>Review your policy for L&amp;O coverage:</strong> Determine whether you have
          Law and Ordinance coverage and what the limit is. If structural repairs trigger code
          upgrades, you will need this coverage.
        </li>
      </ol>

      <CalloutBox variant="legal" title="Disclaimer">
        <p>
          This article is provided for general educational purposes only and does not constitute
          legal advice. Insurance policies, building codes, and claim circumstances vary
          significantly. Consult a licensed professional for advice about your specific situation.
        </p>
      </CalloutBox>
    </>
  )
}
