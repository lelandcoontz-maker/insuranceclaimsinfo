import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Builder&rsquo;s Risk Insurance: Coverage for Buildings Under Construction',
  description:
    'Builder&rsquo;s risk insurance covers buildings during construction, renovation, or remodeling. Learn what it covers, what it excludes, how claims work, and why the transition to permanent coverage is critical.',
  summary:
    'Builder\'s risk insurance covers a building during construction, renovation, or remodeling. Know what it excludes, how claims work, and especially the critical moment when it must transition to a permanent property policy, because a gap there can leave you uncovered.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Builder&rsquo;s risk insurance &mdash; sometimes called course of construction insurance &mdash;
        is a specialized property policy that covers buildings while they are being constructed,
        renovated, or remodeled. Unlike a standard homeowner&rsquo;s or commercial property policy,
        which protects a completed structure, builder&rsquo;s risk covers the building as it is being
        built. That means covering raw materials, partially completed structures, and everything in
        between.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you are building a new home, renovating an existing property, or managing a commercial
        construction project, builder&rsquo;s risk insurance is not optional &mdash; it is essential.
        A fire, a storm, theft of materials, or vandalism on an unprotected job site can wipe out
        months of work and hundreds of thousands of dollars in investment. Without builder&rsquo;s
        risk coverage, that loss comes entirely out of your pocket.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Who Buys Builder&rsquo;s Risk Insurance
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Builder&rsquo;s risk policies are purchased by property owners, general contractors,
        developers, or any combination of the three. The question of <em>who</em> buys the policy
        matters because it determines who the named insured is, who can file a claim, and who
        controls the claim proceeds.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Property owners</strong> typically purchase builder&rsquo;s risk when they are
          hiring a general contractor to build or renovate. The owner has the insurable interest
          in the completed structure and wants to protect that investment.
        </li>
        <li>
          <strong>General contractors</strong> often carry builder&rsquo;s risk as part of their
          standard coverage, especially on spec builds or when the construction contract requires
          the contractor to provide it.
        </li>
        <li>
          <strong>Developers</strong> building multiple units or large-scale projects typically
          carry builder&rsquo;s risk on the entire development, sometimes with coverage that
          adjusts as individual units are completed and sold.
        </li>
        <li>
          <strong>Lenders and mortgage companies</strong> may require builder&rsquo;s risk as a
          condition of a construction loan, and in some cases purchase it directly to protect
          their security interest in the project.
        </li>
        <li>
          <strong>Material suppliers</strong> who have a financial interest in materials being
          delivered to a construction site can also purchase builder&rsquo;s risk coverage.
          Materials stored on-site, off-site, or in transit are at risk of theft, fire,
          vandalism, and weather damage. A material supplier with unpaid invoices has a clear
          insurable interest and can be named as an insured on the policy.
        </li>
      </ul>

      <CalloutBox variant="warning" title="Verify Coverage Before Construction Begins">
        <p>
          If you are a property owner hiring a contractor, do not assume the contractor has
          builder&rsquo;s risk coverage. Many general liability policies carried by contractors
          do <em>not</em> cover damage to the structure under construction &mdash; they cover
          third-party bodily injury and property damage caused by the contractor&rsquo;s operations.
          Verify that a builder&rsquo;s risk policy is in place before the first shovel hits the
          ground, and confirm that you are listed as a named insured or loss payee.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Builder&rsquo;s Risk Insurance Covers
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Builder&rsquo;s risk policies cover the structure under construction and related property.
        The specific coverage varies by policy, but a typical builder&rsquo;s risk policy covers:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>The structure itself:</strong> The building under construction, including all
          permanently installed materials &mdash; framing, roofing, plumbing, electrical, HVAC,
          drywall, flooring, and fixtures
        </li>
        <li>
          <strong>Building materials on-site:</strong> Lumber, steel, concrete, roofing materials,
          appliances, and other materials stored at the construction site awaiting installation
        </li>
        <li>
          <strong>Materials in transit:</strong> Many policies cover building materials while they
          are being transported to the job site, typically with a sublimit
        </li>
        <li>
          <strong>Temporary structures:</strong> Scaffolding, concrete forms, temporary fencing,
          construction trailers, and other temporary structures necessary for the project
        </li>
        <li>
          <strong>Foundations and underground work:</strong> Footings, foundations, underground
          piping, and site preparation work that has been completed
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Soft Costs Coverage
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some builder&rsquo;s risk policies include soft costs coverage, either built into the base
        policy or available as an endorsement. Soft costs are the indirect expenses that increase
        when a construction project is delayed due to a covered loss. These can include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Extended general conditions:</strong> The ongoing costs of maintaining the
          construction site during the delay &mdash; supervision, portable toilets, temporary
          utilities, site security, and equipment rental
        </li>
        <li>
          <strong>Additional financing costs:</strong> Interest on construction loans that continues
          to accrue during the delay period, plus any loan extension fees
        </li>
        <li>
          <strong>Delay penalties:</strong> Contractual penalties or liquidated damages owed to
          the property owner or tenants because the project was not completed on time
        </li>
        <li>
          <strong>Permit renewal fees:</strong> Building permits that expire during the delay and
          must be renewed, along with any re-inspection fees
        </li>
        <li>
          <strong>Professional fees:</strong> Architect, engineering, and design fees required to
          re-evaluate or modify plans after the loss
        </li>
        <li>
          <strong>Lost rental income:</strong> Revenue the owner expected to receive from the
          completed building during the period of delay
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Soft costs are frequently the most undervalued and under-documented portion of a
        builder&rsquo;s risk claim. Carriers routinely challenge soft costs because the
        documentation requirements are significant, and many policyholders do not realize these
        costs are covered until after the loss has occurred. For a deeper discussion, see our
        article on{' '}
        <Link href="/resources/soft-costs-claims" className="text-[#2E74B5] underline">
          soft costs claims
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Builder&rsquo;s Risk Does Not Cover
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Builder&rsquo;s risk policies contain significant exclusions. Understanding these exclusions
        before a loss occurs is critical, because many policyholders discover gaps in coverage only
        when they file a claim.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Employee tools and equipment:</strong> Tools, equipment, and personal property
          belonging to workers on the job site are typically excluded. Contractors need separate
          inland marine or tools and equipment coverage.
        </li>
        <li>
          <strong>Faulty workmanship and design errors:</strong> The cost to redo defective work
          is not covered. However, <em>resulting damage</em> from faulty workmanship may be
          covered. For example, if a plumber installs a pipe incorrectly and the pipe bursts,
          the cost to redo the plumbing is excluded, but the water damage to the surrounding
          structure may be covered.
        </li>
        <li>
          <strong>Earth movement and earthquake:</strong> Most builder&rsquo;s risk policies
          exclude earthquake, landslide, mudflow, and earth movement &mdash; a significant
          concern during construction in California, where seismic activity is constant and
          partially completed structures are especially vulnerable.
        </li>
        <li>
          <strong>Flood:</strong> Standard builder&rsquo;s risk policies exclude flood damage.
          Flood coverage must be purchased separately, typically through the National Flood
          Insurance Program or a private flood insurer.
        </li>
        <li>
          <strong>Landscaping:</strong> Some policies exclude landscaping, trees, shrubs, and
          plants. Others provide limited coverage with a sublimit.
        </li>
        <li>
          <strong>Normal settling, shrinkage, and expansion:</strong> Cracking or movement that
          occurs as part of the normal curing and settling process is not a covered loss.
        </li>
        <li>
          <strong>Wear and tear and gradual deterioration:</strong> Materials that deteriorate
          because they were left exposed on site for too long may not be covered if the
          deterioration is considered gradual rather than the result of a sudden event.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Reporting Form vs. Completed Value Form
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Builder&rsquo;s risk policies use one of two methods to track the insured value as
        construction progresses:
      </p>
      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Completed Value Form
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under a completed value form, the policy is written for the full anticipated value of
        the completed project from day one. The premium is calculated on the total completed
        value, and the full limit is available at any point during construction. This is the
        simpler approach &mdash; you pay for the full coverage up front, and there is no risk
        of being underinsured at any stage.
      </p>
      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Reporting Form
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under a reporting form, the policyholder reports the current value of the project at
        regular intervals &mdash; typically monthly or quarterly. The premium adjusts based on
        these reports, so the policyholder pays less at the beginning of the project when only
        the foundation has been poured and more toward the end when the building is nearly
        complete.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The risk with a reporting form is that if the policyholder fails to file timely reports
        or underreports the value, the carrier may limit recovery to the last reported value.
        If a fire destroys a building that is 80 percent complete but the last report only
        showed 50 percent completion, the policyholder may face a significant shortfall.
      </p>

      <CalloutBox variant="tip" title="Keep Reporting Current">
        <p>
          If your builder&rsquo;s risk policy uses a reporting form, file your value reports
          on time and make sure they accurately reflect the current state of construction. An
          outdated or inaccurate report can cost you hundreds of thousands of dollars if a loss
          occurs between reporting periods. Work with your contractor to reconcile completed
          work against the construction schedule before each reporting deadline.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Perils Covered: Open-Peril vs. Named-Peril
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most builder&rsquo;s risk policies are written on an open-peril basis &mdash; also called
        &ldquo;all risk&rdquo; &mdash; meaning they cover any direct physical loss unless it is
        specifically excluded. This is the broadest form of coverage and is standard for most
        commercial and residential construction projects.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some lower-cost policies are written on a named-peril basis, meaning they only cover
        losses caused by perils specifically listed in the policy &mdash; typically fire,
        lightning, windstorm, hail, explosion, vandalism, and a few others. Named-peril policies
        are significantly narrower and leave the policyholder unprotected against any cause of
        loss not specifically listed.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        On an open-peril policy, the burden of proof shifts in the policyholder&rsquo;s favor:
        the policyholder must prove that a loss occurred, and the insurer must prove that an
        exclusion applies. On a named-peril policy, the policyholder must prove both that a loss
        occurred <em>and</em> that it was caused by one of the listed perils. For any significant
        construction project, an open-peril policy is worth the additional premium.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Who Is the Insured
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The named insured on a builder&rsquo;s risk policy typically includes the property owner
        and the general contractor. Both parties have an insurable interest in the project &mdash;
        the owner has invested in the property and the contractor has invested labor, materials,
        and profit expectation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Subcontractors present a more complicated question. Some policies automatically extend
        coverage to subcontractors working on the project, while others do not. If a subcontractor
        installs $50,000 worth of cabinetry and a fire destroys it before the project is complete,
        the question of whether the builder&rsquo;s risk policy covers that subcontractor&rsquo;s
        loss &mdash; or whether the subcontractor must look to their own coverage &mdash; depends
        entirely on the policy language.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Construction contracts should address this directly. If the owner&rsquo;s builder&rsquo;s
        risk policy does not cover subcontractors, the general contractor should require each
        subcontractor to carry their own coverage, or the general contractor should ensure their
        policy extends to subcontractors&rsquo; work and materials.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Common Claim Scenarios
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Fire on a Job Site
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Construction sites are high fire risks. Open flames from welding and cutting, improperly
        stored flammable materials, temporary electrical wiring, and hot work near combustible
        framing all contribute to the risk. A fire on a partially completed building can destroy
        months of work in minutes. The builder&rsquo;s risk claim will cover the cost to rebuild
        the damaged structure, replace destroyed materials, and &mdash; if soft costs coverage is
        included &mdash; compensate for the project delay.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Weather Damage During Construction
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A building under construction is uniquely vulnerable to weather. Before the building
        envelope is complete &mdash; before the roof is on, windows are installed, and exterior
        cladding is in place &mdash; rain, wind, and hail can cause extensive damage to exposed
        framing, insulation, drywall, and electrical work. A single rainstorm can saturate
        unprotected framing and create conditions for mold growth, requiring demolition and
        replacement of affected materials.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Carriers sometimes argue that weather damage to an open structure is not covered because
        the building was &ldquo;not properly protected.&rdquo; This argument is usually weak &mdash;
        a building under construction is, by definition, not yet enclosed, and the builder&rsquo;s
        risk policy exists precisely to cover losses during this vulnerable period. However, if the
        contractor failed to take reasonable protective measures &mdash; such as tarping exposed
        framing when rain was forecast &mdash; the carrier may have a stronger argument for a
        coverage defense.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Theft of Building Materials
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Theft is one of the most common losses on construction sites. Copper wire, copper pipe,
        appliances, HVAC equipment, lumber, and power tools are frequent targets. Construction
        sites are particularly vulnerable because they are often unoccupied at night and on
        weekends, may lack permanent security measures, and contain high-value materials that
        are easily removed and resold.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Builder&rsquo;s risk policies typically cover theft, but some policies require that
        reasonable security measures be in place &mdash; fencing, locked enclosures for valuable
        materials, or surveillance cameras. Document the security measures at your job site and
        keep records of all materials delivered. Without delivery receipts and installation records,
        proving what was stolen becomes significantly more difficult.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Vandalism on Construction Sites
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Vandalism ranges from graffiti on exposed concrete to deliberate destruction of installed
        work &mdash; smashed fixtures, cut wiring, broken windows, and damaged plumbing. Like
        theft, vandalism is more likely on sites that are unoccupied after hours and lack
        adequate security. Builder&rsquo;s risk policies generally cover vandalism as a
        named peril or under the open-peril coverage.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Storm Damage to Unfinished Structures
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        High winds can topple framed walls, tear off partially installed roofing, and scatter
        building materials across the site. Hail can damage roofing materials, exterior finishes,
        and windows. A storm that would cause minor damage to a completed building can cause
        catastrophic damage to a structure that is still under construction, because the
        structural elements are not yet fully connected and braced.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Transition to Permanent Coverage
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Builder&rsquo;s risk policies are temporary. They are designed to cover the construction
        period and expire on a specific date or when the project is completed &mdash; whichever
        comes first. When the project is finished, the builder&rsquo;s risk policy terminates,
        and the owner must have a permanent property insurance policy in place.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The timing of this transition is critical. If the builder&rsquo;s risk policy expires
        or terminates before the permanent homeowner&rsquo;s or commercial property policy
        takes effect, there is a coverage gap. Any loss that occurs during that gap is
        uninsured. This happens more often than it should &mdash; construction projects run
        behind schedule, certificates of occupancy are delayed, and the permanent policy is
        not bound because the building is not yet considered &ldquo;complete&rdquo; by the
        permanent insurer.
      </p>

      <CalloutBox variant="warning" title="Mind the Coverage Gap">
        <p>
          Do not let your builder&rsquo;s risk policy expire before your permanent coverage
          is in place. If construction is running behind schedule, request an extension from
          your builder&rsquo;s risk carrier. Most policies allow extensions for an additional
          premium. A few days or weeks without coverage can be the difference between a fully
          insured loss and a financial disaster.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        Builder&rsquo;s risk policies also typically define what &ldquo;completion&rdquo; means.
        Some policies terminate when the building receives a certificate of occupancy. Others
        terminate when the building is occupied, when it is put to its intended use, or when
        the owner accepts the building from the contractor. If you move into the building or
        begin using it before the permanent policy is in place, the builder&rsquo;s risk
        policy may have already terminated automatically &mdash; even if the expiration date
        has not yet passed.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Renovation and Remodeling Endorsements
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Builder&rsquo;s risk is not just for new construction. When you are renovating or
        remodeling an existing building, a builder&rsquo;s risk policy &mdash; or a renovation
        endorsement to an existing policy &mdash; covers the new work being performed. The
        existing homeowner&rsquo;s or commercial property policy continues to cover the
        existing structure.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Coordinating between these two policies is important and often mishandled. Consider a
        scenario: you are renovating your kitchen, and a fire starts in the new electrical
        work and spreads to the rest of the house. The builder&rsquo;s risk policy covers the
        new kitchen work. The homeowner&rsquo;s policy covers the existing structure. But which
        policy covers the fire damage to the existing house caused by the new work? The answer
        depends on the specific policy language, and disputes between the two insurers can
        delay your claim significantly.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Before starting any renovation, notify your homeowner&rsquo;s insurance carrier. Many
        homeowner&rsquo;s policies contain exclusions or limitations that apply during
        renovation &mdash; for example, some policies void coverage if the home is
        &ldquo;under construction&rdquo; or &ldquo;vacant&rdquo; for more than a specified
        period. Failing to notify your carrier can jeopardize coverage under both policies.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        California-Specific Considerations
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Contractor Licensing Requirements
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        California Business and Professions Code &sect;7031 requires that anyone performing
        construction work valued at $500 or more must hold a valid license from the
        Contractors State License Board (CSLB). This requirement is directly relevant to
        builder&rsquo;s risk claims because an unlicensed contractor cannot legally enforce
        a construction contract in California, and the involvement of an unlicensed contractor
        can create complications in the claims process &mdash; particularly when determining
        the value of completed work and the cost to complete the project.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When filing a builder&rsquo;s risk claim, carriers will often verify that the general
        contractor and subcontractors are properly licensed. If unlicensed work is discovered,
        the carrier may use it as grounds to dispute the value of the loss or challenge the
        reasonableness of repair costs. Always verify your contractor&rsquo;s license status
        through the CSLB before construction begins.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Building Permit Requirements
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        California requires building permits for virtually all construction, renovation, and
        remodeling work beyond minor cosmetic changes. After a builder&rsquo;s risk loss, the
        repair work will require new permits, and the cost of those permits is part of the
        covered loss. Additionally, if the original construction was not properly permitted,
        the carrier may argue that the unpermitted work was not insurable or that it must be
        brought to current code as part of the repair &mdash; which can significantly increase
        the cost and complexity of the claim. For more on permit costs in claims, see our
        article on{' '}
        <Link href="/resources/building-permits-claims" className="text-[#2E74B5] underline">
          building permits and insurance claims
        </Link>.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Seismic Considerations During Construction
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        California is earthquake country, and buildings under construction are especially
        vulnerable to seismic events. A partially framed building without its full structural
        bracing, shear walls, and connections is far more susceptible to earthquake damage than
        a completed structure. Standard builder&rsquo;s risk policies exclude earthquake, and
        earthquake coverage must be added by endorsement if available, or purchased through a
        separate policy.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This exclusion is particularly significant in California, where the risk of a damaging
        earthquake during a multi-year construction project is not hypothetical. If your
        construction project is in a seismically active area &mdash; which is most of
        California &mdash; discuss earthquake coverage with your insurance broker before
        construction begins.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Faulty Workmanship Exclusion and Resulting Damage
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The faulty workmanship exclusion is one of the most litigated provisions in builder&rsquo;s
        risk policies. The exclusion bars coverage for the cost of correcting defective work
        itself, but most policies contain an exception for &ldquo;resulting damage&rdquo; &mdash;
        meaning damage that results from the defective work, as opposed to the defective work
        itself.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For example, if a roofing subcontractor installs flashing incorrectly and rain enters the
        building, the cost to remove and reinstall the flashing is excluded as faulty workmanship.
        But the water damage to the framing, insulation, drywall, and electrical work below the
        flashing may be covered as resulting damage. The line between the excluded defect and the
        covered resulting damage is not always clear, and carriers frequently try to characterize
        as much of the damage as possible as part of the excluded defect rather than resulting
        damage.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under California&rsquo;s efficient proximate cause doctrine, if the defective workmanship
        sets in motion a chain of events that leads to a covered peril &mdash; such as water
        intrusion &mdash; the resulting damage should be covered. For a deeper discussion of how
        this doctrine applies to property claims, see our article on{' '}
        <Link href="/resources/construction-defect-claims" className="text-[#2E74B5] underline">
          construction defects and insurance claims
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How a Public Adjuster Helps on Builder&rsquo;s Risk Claims
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Builder&rsquo;s risk claims are among the most complex property insurance claims. They
        involve specialized valuation issues, multiple parties with competing interests, and
        policy language that differs significantly from standard property policies. A licensed
        Public Adjuster provides critical expertise in several areas:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Valuation of partially completed work:</strong> Determining the value of a
          partially completed building requires an understanding of construction costs, progress
          billing, and the distinction between work in place and materials on site. The
          carrier&rsquo;s adjuster may undervalue the loss by failing to account for labor
          already invested in installed work, or by depreciating materials that were new and
          unused at the time of the loss.
        </li>
        <li>
          <strong>Soft costs documentation and recovery:</strong> Soft costs are frequently
          overlooked or underpaid. A Public Adjuster identifies all recoverable soft costs,
          assembles the supporting documentation &mdash; loan agreements, construction schedules,
          contractor overhead records, and penalty provisions &mdash; and presents them in a
          format the carrier cannot easily dismiss.
        </li>
        <li>
          <strong>Coordination with contractors and bonding companies:</strong> Builder&rsquo;s
          risk claims often involve the general contractor&rsquo;s surety bond, subcontractor
          disputes, and questions about whether the contractor or the owner bears responsibility
          for specific aspects of the loss. A Public Adjuster navigates these relationships and
          ensures the policyholder&rsquo;s interests are protected.
        </li>
        <li>
          <strong>Scope of loss documentation:</strong> Accurately scoping the damage on a
          construction site requires distinguishing between work that was damaged by the covered
          peril and work that was simply incomplete. Carriers frequently attempt to exclude
          incomplete work from the claim, even when it must be redone because the covered loss
          rendered it inaccessible or structurally compromised.
        </li>
        <li>
          <strong>Resulting damage analysis:</strong> When the carrier invokes the faulty
          workmanship exclusion, a Public Adjuster documents the chain of causation to
          demonstrate that the resulting damage is covered, and quantifies the covered damage
          separately from the excluded defect.
        </li>
        <li>
          <strong>Delay and business interruption calculations:</strong> A construction delay
          caused by a covered loss affects project financing, contractual obligations, and
          revenue projections. A Public Adjuster works with the policyholder&rsquo;s accountant
          and construction manager to build a defensible delay claim.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Protecting Your Construction Investment
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Whether you are building a custom home, renovating an investment property, or managing a
        large commercial project, builder&rsquo;s risk insurance is a critical part of your risk
        management strategy. The following steps will help ensure you are properly covered:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Purchase builder&rsquo;s risk coverage before construction begins.</strong> Do
          not rely on the contractor&rsquo;s coverage unless you have verified the policy,
          confirmed you are a named insured, and reviewed the coverage limits and exclusions.
        </li>
        <li>
          <strong>Insure for the full completed value.</strong> If using a completed value form,
          make sure the limit reflects the total cost of the finished project, including materials
          and labor. If using a reporting form, file accurate and timely reports.
        </li>
        <li>
          <strong>Include soft costs coverage.</strong> Soft costs can easily add 10 to 20 percent
          to a major loss. Without soft costs coverage, you absorb those costs yourself.
        </li>
        <li>
          <strong>Evaluate earthquake and flood exposure.</strong> If your project is in a
          seismically active or flood-prone area, discuss supplemental coverage with your broker.
        </li>
        <li>
          <strong>Document everything.</strong> Maintain detailed records of construction progress,
          material deliveries, installed work, and job site conditions. Photograph the site
          regularly. These records are your evidence if a loss occurs.
        </li>
        <li>
          <strong>Plan the transition to permanent coverage.</strong> Coordinate with your insurance
          broker to ensure the permanent property policy is bound before the builder&rsquo;s risk
          policy expires. Request extensions if the project runs behind schedule.
        </li>
        <li>
          <strong>Notify your homeowner&rsquo;s carrier during renovations.</strong> If you are
          renovating an existing structure, make sure your homeowner&rsquo;s insurer knows about
          the project to avoid a coverage defense when you need the policy most.
        </li>
      </ol>

      <blockquote className="border-l-4 border-[#C9A84C] pl-4 italic text-gray-600 mb-6">
        Builder&rsquo;s risk insurance exists for one reason: buildings under construction are
        uniquely vulnerable to loss, and the financial consequences of an uninsured construction
        loss can be devastating. The policy is temporary, the coverage is specialized, and the
        claims are complex. Get it right before the first nail is driven.
      </blockquote>

      <CalloutBox variant="info" title="Need Help With a Builder&rsquo;s Risk Claim?">
        <p>
          If you have suffered a loss on a construction project and need help navigating the
          builder&rsquo;s risk claims process, a licensed Public Adjuster can advocate on your
          behalf. We handle the documentation, valuation, negotiation, and carrier
          correspondence so you can focus on getting your project back on track.
        </p>
      </CalloutBox>
    </>
  )
}
