import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Disaster Preparedness and Pre-Loss Mitigation: An Insurance Perspective',
  description:
    'How to prepare for a disaster before it happens — pre-loss documentation, mitigation expenses your policy may cover, California-specific requirements, and insurance preparedness strategies that protect your claim.',
  summary:
    'Prepare before disaster strikes: document your home and belongings, know your coverage, and understand which mitigation expenses your policy may reimburse. Good pre-loss preparation makes a future claim faster and stronger.',
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
        Most insurance guidance focuses on what to do <em>after</em> a loss. That makes sense
        &mdash; after all, the claim process begins when something goes wrong. But the decisions
        you make <em>before</em> a disaster can determine whether your claim succeeds or fails,
        whether you recover fully or face a devastating shortfall, and whether you can even prove
        what you lost. Disaster preparedness is not just about physical safety &mdash; it is
        about protecting your ability to recover financially through your insurance policy.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This article covers four areas that every property owner should address before a loss
        occurs: mitigation efforts that your policy may actually reimburse, pre-loss documentation
        that will be critical to your claim, California-specific preparedness requirements, and
        insurance preparedness &mdash; making sure your policy is adequate before you need it.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Mitigation Efforts That Your Policy May Cover
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some policies will actually reimburse you for efforts to protect your property from
        imminent damage. Most policyholders assume that insurance only pays after something is
        already damaged &mdash; that is not always true. Understanding these provisions before a
        disaster strikes means you can act quickly, spend money on protective measures with
        confidence, and submit those costs as part of your claim.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Flood Insurance (NFIP): Property Removal and Preservation
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The National Flood Insurance Program specifically covers &ldquo;property removal&rdquo;
        and &ldquo;preservation of property&rdquo; expenses. These are costs you incur to
        protect your property from an imminent flood &mdash; not after the damage has occurred,
        but before the water reaches your home. Covered activities include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Sandbagging</strong> &mdash; purchasing sandbags and materials, and the labor
          to place them around your property
        </li>
        <li>
          <strong>Moving contents to higher ground</strong> &mdash; the cost of physically
          relocating furniture, electronics, and personal property to upper floors or off-site
        </li>
        <li>
          <strong>Emergency pumping</strong> &mdash; renting or hiring pumps to divert rising
          water away from the structure
        </li>
        <li>
          <strong>Temporary barriers</strong> &mdash; purchasing and installing temporary flood
          barriers or water-diversion materials
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The NFIP will reimburse up to $1,000 for these preservation-of-property efforts under
        the standard policy. Additional reimbursement may be available under the Increased Cost
        of Compliance (ICC) provision, which can provide up to $30,000 toward bringing a
        flood-damaged building into compliance with local floodplain management ordinances. The
        ICC provision is separate from the building and contents coverage limits.
      </p>

      <CalloutBox variant="tip" title="NFIP Preservation Expenses Are a Real, Claimable Cost">
        <p>
          Most NFIP policyholders have no idea these reimbursements exist. If a flood warning is
          issued for your area, document every dollar you spend protecting your property &mdash;
          receipts, photographs of the work being done, and a log of the time spent. Even if the
          flood ultimately does not damage your home, these expenses may still be reimbursable if
          the threat was genuine and imminent. Do not wait until after the flood to learn about
          this coverage.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Standard Homeowner Policies: Reasonable Repairs and the Duty to Mitigate
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most HO-3 homeowner policies include a provision for &ldquo;reasonable repairs&rdquo;
        to protect property from further damage. This provision is most commonly understood as a
        post-loss obligation &mdash; after a tree falls on your roof, you have a duty to tarp the
        opening to prevent rain damage. But the principle extends further than many policyholders
        realize.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The standard ISO HO-3 policy language requires the insured to &ldquo;protect the property
        from further damage&rdquo; and states that the insurer will pay the &ldquo;reasonable cost
        incurred by you for necessary measures taken solely to protect covered property that is
        damaged by a Peril Insured Against from further damage.&rdquo; While this language is
        typically triggered <em>after</em> a loss has begun, some policies and some circumstances
        may support coverage for pre-loss protective measures when damage is genuinely imminent
        &mdash; for example, boarding up windows when a severe storm is approaching.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a detailed discussion of the duty to mitigate and how emergency repairs are handled
        in the claims process, see{' '}
        <Link href="/resources/temporary-emergency-repairs" className="text-[#2E74B5] underline">
          Temporary and Emergency Repairs: The Duty to Mitigate and the Duty to Preserve Evidence
        </Link>.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Preservation of Property: The Additional Coverage Most People Overlook
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The ISO HO-3 form includes an often-overlooked &ldquo;Additional Coverage&rdquo; for
        preservation of property. This coverage applies to property that you remove from the
        premises to protect it from a covered peril. If you move your furniture to a storage
        unit because a wildfire is approaching, or relocate valuables because of an imminent
        flood, this additional coverage may apply to those items while they are away from the
        insured location.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This additional coverage typically provides protection for up to 30 days at the
        temporary location and is in addition to your regular policy limits. But you must
        document what you moved, when, and why &mdash; photographs, receipts for moving or
        storage expenses, and a written record of the circumstances are essential.
      </p>

      <CalloutBox variant="warning" title="Know the Trigger">
        <p>
          Coverage for pre-loss protective measures depends on the specific policy language and
          the circumstances. Not every policy covers these expenses, and not every situation
          qualifies. The key factors are whether the threat was genuine and imminent, whether the
          measures taken were reasonable, and whether the peril you were protecting against is a
          covered peril under the policy. Review your policy&rsquo;s conditions and additional
          coverages sections before a disaster forces you to make these decisions under pressure.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Pre-Loss Documentation: The Foundation of Every Successful Claim
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        After a total loss, the single most common regret policyholders express is: &ldquo;I
        wish I had documented what I owned.&rdquo; The policyholders who recover the most are
        almost always those who documented their property before the loss.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Create a Home Inventory Before You Need It
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A pre-loss home inventory is the single most valuable piece of documentation you can
        create. A thorough video walkthrough of your entire home, narrated as you go, can be
        completed in under an hour. Open every drawer, cabinet, and closet. Record brand names
        and model numbers on electronics and appliances. Flip furniture over to capture
        manufacturer labels. The goal is to create a record that proves you owned these items
        and demonstrates their condition.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For high-value items, go further:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Record serial numbers for electronics, power tools, musical instruments, and sporting
          equipment
        </li>
        <li>
          Save purchase receipts, credit card statements, or online order confirmations
        </li>
        <li>
          Photograph appraisal documents for jewelry, art, antiques, and collectibles
        </li>
        <li>
          Keep warranty cards and product registration confirmations
        </li>
        <li>
          Note the approximate purchase date and original cost for expensive items
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a guide to building your contents inventory, see{' '}
        <Link href="/resources/contents-inventory-guide" className="text-[#2E74B5] underline">
          Contents Inventory Guide
        </Link>{' '}
        and{' '}
        <Link href="/resources/contents-claims" className="text-[#2E74B5] underline">
          Personal Property and Contents Claims
        </Link>.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Store Documentation Off-Site
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Documentation that is destroyed alongside the property it describes is useless. Every
        piece of pre-loss documentation must be stored somewhere other than the insured property
        &mdash; cloud storage (Google Drive, iCloud, Dropbox), a safe deposit box for original
        appraisals and certifications, a USB drive at a family member&rsquo;s home, or even
        emailed to your own account as a timestamped backup. The point is redundancy: if your
        home is destroyed, your records survive.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Photograph Your Home&rsquo;s Condition Annually
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Beyond the contents inventory, photograph the condition of the structure itself at least
        once a year. Exterior shots of the roof, siding, foundation, driveway, fencing, and
        landscaping. Interior shots of flooring, walls, ceilings, and any recent improvements.
        These photographs serve two critical purposes:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          They prove the pre-loss condition of the property, which is essential when the insurer
          argues that damage was pre-existing or the result of wear and tear rather than the
          claimed peril
        </li>
        <li>
          They document improvements and upgrades that increase the replacement cost of the
          structure, supporting your position if coverage limits are disputed
        </li>
      </ol>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Keep Receipts for Improvements and Upgrades
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Every improvement you make to your home &mdash; a kitchen remodel, a new roof, upgraded
        electrical, hardwood flooring &mdash; increases the replacement cost of the structure.
        Contractor invoices, building permits, and before-and-after photographs of renovation
        projects should all be stored off-site. After a total loss, these records document the
        quality and scope of finishes the insurer must match, and they support your position
        that coverage limits need to reflect the actual cost to rebuild.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        California-Specific Preparedness
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California faces a unique combination of natural hazards &mdash; wildfire, earthquake,
        flood, and mudslide &mdash; each with its own insurance implications. Several
        California-specific laws and requirements directly affect both your physical preparedness
        and your insurance coverage.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Wildfire: Defensible Space Requirements (PRC &sect; 4291)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        California Public Resources Code &sect; 4291 requires property owners in State
        Responsibility Areas (SRA) and Very High Fire Hazard Severity Zones to maintain
        defensible space around their structures. The law mandates two zones of clearance
        extending up to 100 feet from the building:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Zone 1 (0&ndash;30 feet):</strong> The &ldquo;lean, clean, and green&rdquo;
          zone. Remove all dead vegetation, dry leaves, and combustible materials. Keep
          vegetation low and well-irrigated. Create horizontal and vertical spacing between
          plants and trees. Remove tree branches within 10 feet of a chimney or stovepipe
          outlet.
        </li>
        <li>
          <strong>Zone 2 (30&ndash;100 feet):</strong> The &ldquo;reduce fuel&rdquo; zone.
          Create spacing between trees and shrubs so that fire cannot spread easily from plant
          to plant. Remove dead wood and debris. Maintain grass at a maximum height of 4 inches.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Compliance with PRC &sect; 4291 is not optional &mdash; violations can result in fines.
        From an insurance perspective, some insurers in high-fire-risk areas require evidence of
        defensible space compliance as a condition of coverage or renewal.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a complete guide to wildfire claims, see{' '}
        <Link href="/resources/wildfire-guide" className="text-[#2E74B5] underline">
          California Wildfire Claims: A Complete Guide
        </Link>.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Earthquake Preparedness and Insurance
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Water heater strapping is required by California law for all new installations, and
        sellers must disclose whether a home has been retrofitted with foundation bolting and
        cripple wall bracing. Beyond legal compliance, earthquake preparedness has direct
        insurance implications:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Earthquake insurance is separate from your homeowner policy.</strong> Standard
          HO-3 policies exclude earthquake damage. If you do not have a separate earthquake
          policy &mdash; either through the California Earthquake Authority (CEA) or a private
          insurer &mdash; you have no earthquake coverage at all.
        </li>
        <li>
          <strong>CEA policies offer premium discounts for retrofitting.</strong> The California
          Earthquake Authority provides premium reductions for homes that have been seismically
          retrofitted, including foundation bolting, cripple wall bracing, and soft-story
          retrofits.
        </li>
        <li>
          <strong>Bolt and brace your foundation.</strong> Homes built before 1980 often sit on
          unbolted foundations or have unbraced cripple walls. Retrofitting these elements
          typically costs $3,000 to $7,000 and dramatically reduces the risk of the house
          sliding off its foundation in a seismic event.
        </li>
        <li>
          <strong>Secure water heaters, bookcases, and heavy objects.</strong> Beyond the legal
          requirement for water heaters, securing heavy furniture and appliances reduces both
          personal injury risk and property damage in an earthquake.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        For more on earthquake coverage, see{' '}
        <Link href="/resources/earthquake-insurance" className="text-[#2E74B5] underline">
          Earthquake Insurance in California
        </Link>.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Flood Zone Awareness
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Understanding your FEMA flood zone designation is a critical preparedness step. FEMA
        flood maps designate Special Flood Hazard Areas (SFHAs) &mdash; zones A and V &mdash;
        which carry a 1% or greater annual chance of flooding. Properties in these zones with
        federally backed mortgages are required to carry flood insurance. But flooding does not
        respect map boundaries: according to FEMA, more than 20% of all NFIP claims come from
        properties <em>outside</em> mapped high-risk zones.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Standard homeowner policies do <strong>not</strong> cover flood damage. If your home
        floods and you do not have a separate flood policy, you will receive nothing from your
        homeowner insurer. This is one of the most common and most devastating coverage gaps
        in residential insurance.
      </p>

      <CalloutBox variant="warning" title="Flood Insurance Has a 30-Day Waiting Period">
        <p>
          NFIP flood policies have a 30-day waiting period before coverage takes effect. You
          cannot purchase flood insurance when a storm is approaching and expect it to cover
          the resulting flood. This makes flood insurance a preparedness decision, not a reactive
          one. If you live anywhere near a flood-prone area &mdash; including areas outside
          mapped flood zones &mdash; purchase flood insurance now.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Insurance Preparedness: Making Sure Your Policy Is Ready Before the Loss
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Physical preparedness and documentation are essential, but they are not enough. You also
        need to make sure your insurance policy is adequate, current, and understood <em>before</em>{' '}
        a loss occurs. Too many policyholders discover the gaps in their coverage only after a
        disaster, when it is too late to fix them.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Review Your Policy Annually
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        At a minimum, review your policy once a year. Read the declarations page carefully and
        confirm that the following are adequate:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Dwelling coverage limit (Coverage A):</strong> Does this reflect the actual
          cost to rebuild your home at today&rsquo;s construction prices? Not the market value,
          not the purchase price, but the actual cost to rebuild from the ground up with
          equivalent materials and finishes.
        </li>
        <li>
          <strong>Personal property coverage (Coverage C):</strong> Is the percentage of
          Coverage A adequate for your actual contents? The standard 50&ndash;75% may not be
          enough for households with extensive furnishings, collections, or high-value items.
        </li>
        <li>
          <strong>Additional Living Expenses (Coverage D):</strong> What is the limit, and how
          long does it last? If you are displaced for 18 months while your home is rebuilt, will
          this coverage sustain you?
        </li>
        <li>
          <strong>Deductibles:</strong> Can you afford the deductible if a loss occurs? Some
          policies have separate, higher deductibles for specific perils like wind or earthquake.
          Know what they are.
        </li>
        <li>
          <strong>Endorsements and exclusions:</strong> What endorsements have been added or
          removed? Has the insurer added any exclusions at renewal that were not in the prior
          policy?
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Understand What You Are Covered For Before the Loss
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The worst time to read your insurance policy for the first time is after a loss. Before
        a disaster, you should understand the answers to these basic questions:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          What perils are covered? Is the policy an &ldquo;open peril&rdquo; (all-risk) policy
          or a &ldquo;named peril&rdquo; policy?
        </li>
        <li>
          Is flood covered? (Almost certainly not under a standard homeowner policy.)
        </li>
        <li>
          Is earthquake covered? (Almost certainly not without a separate policy.)
        </li>
        <li>
          Is the policy replacement cost or actual cash value for the dwelling? For contents?
        </li>
        <li>
          Does the policy include ordinance or law coverage for code upgrades during rebuilding?
        </li>
        <li>
          Are there sublimits for specific types of property &mdash; jewelry, electronics, fine
          art, firearms, business equipment?
        </li>
      </ol>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Keep Coverage Limits Current with Construction Cost Inflation
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Construction costs have risen dramatically in recent years. If your dwelling coverage
        limit has not kept pace, you may be significantly underinsured. This is not a theoretical
        concern &mdash; it is the most common reason policyholders face a gap between their
        insurance proceeds and the actual cost to rebuild.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some policies include an &ldquo;inflation guard&rdquo; endorsement that automatically
        increases the coverage limit annually, but these increases often lag behind actual
        construction costs &mdash; especially in California and especially after a regional
        disaster when labor and materials are scarce. If you have a &ldquo;guaranteed replacement
        cost&rdquo; or &ldquo;extended replacement cost&rdquo; endorsement, understand what it
        actually guarantees &mdash; many have caps at 125% or 150% of the stated dwelling limit
        that may still leave you short. For a detailed discussion, see{' '}
        <Link href="/resources/underinsured-after-wildfire" className="text-[#2E74B5] underline">
          Underinsured After a Wildfire
        </Link>{' '}
        and{' '}
        <Link href="/resources/coinsurance-penalty" className="text-[#2E74B5] underline">
          Coinsurance Penalties
        </Link>.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Schedule High-Value Items
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Standard homeowner policies impose sublimits on certain categories of personal property
        &mdash; jewelry is typically limited to $1,500, silverware to $2,500, firearms to
        $2,500, and business property to $2,500, regardless of your overall contents limit.
        If you own items that exceed these sublimits, you need to schedule them on your policy
        through a personal articles floater or inland marine endorsement. Scheduled items are
        covered for their appraised value, typically without a deductible, and the coverage is
        broader than what the base policy provides.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Get appraisals for jewelry, art, antiques, and collectibles, and update them every few
        years. Store copies of the appraisals off-site with your other pre-loss documentation.
        For more on sublimits and scheduling, see{' '}
        <Link href="/resources/specialty-items" className="text-[#2E74B5] underline">
          Specialty Items and Scheduling
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Putting It All Together
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Disaster preparedness from an insurance perspective comes down to three principles:
        know what you have, know what you are covered for, and be able to prove both. The
        policyholders who recover the most after a disaster are not the ones who hire the best
        adjuster or the best lawyer &mdash; they are the ones who documented what they owned,
        understood their coverage, and made sure their policy was adequate before the loss
        occurred.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The most common pre-loss failures that damage claims are predictable and preventable:
        never reading the policy, trusting the insurer&rsquo;s automated valuation tool to set
        the correct coverage limit, failing to schedule high-value items that exceed sublimits,
        keeping all documentation inside the insured home, and not carrying separate flood or
        earthquake coverage. Each of these problems is easy to fix today and nearly impossible
        to fix after the loss.
      </p>

      <blockquote className="border-l-4 border-[#C9A84C] pl-4 italic text-gray-600 mb-6">
        The time to prepare for a disaster is not when the evacuation order is issued or the
        storm warning is broadcast. It is today &mdash; when you have the time, the access, and
        the ability to make decisions that will protect your financial recovery if the worst
        happens.
      </blockquote>

      <CalloutBox variant="info" title="Preparedness Is a Claims Strategy">
        <p>
          Everything described in this article is also a claims strategy. A video walkthrough
          uploaded to cloud storage takes less than an hour. An annual policy review takes less
          than that. These steps cost almost nothing, but they can mean the difference between a
          successful recovery and a financial catastrophe on top of a physical one. The best
          time to prepare was a year ago. The second-best time is today.
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
