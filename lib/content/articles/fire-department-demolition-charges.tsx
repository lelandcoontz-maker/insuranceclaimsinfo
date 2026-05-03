import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Fire Department Charges and Government-Ordered Demolition: Who Pays After a Loss?',
  description:
    'Fire response billing, red-tag demolition orders, and how California property insurance handles government-imposed charges after a covered loss. Coverage A, ordinance or law, debris removal, and the timing problems that catch policyholders off guard.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="Educational Information Only">
        <p>
          This article is for educational purposes only and does not constitute legal or insurance
          advice. Every policy is different, and coverage determinations depend on your specific
          policy language, the facts of your loss, and applicable California law. For guidance on
          your particular situation, consult a licensed Public Adjuster or an attorney experienced
          in insurance coverage.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        After a fire, explosion, or other major loss, two categories of government-imposed costs
        frequently catch policyholders off guard: fire department response charges and
        government-ordered demolition. Both can cost thousands &mdash; sometimes tens of thousands
        &mdash; of dollars, and both raise difficult coverage questions under a standard homeowner
        policy. This article breaks down how these charges arise, where coverage may exist, and
        what you need to do to protect your claim.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        I. Fire Department Response Charges
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most people assume that when the fire department shows up, the cost is covered by their
        taxes. In many California jurisdictions, that assumption is correct. But in a growing number
        of areas &mdash; particularly unincorporated county areas, fire protection districts, and
        jurisdictions that rely on mutual aid agreements &mdash; fire response generates a separate
        bill to the property owner or their insurer.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        A. How Fire Response Billing Works
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Fire response billing typically arises in one of several scenarios:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Unincorporated areas served by fire protection districts:</strong> Properties
          outside city limits are often served by county fire departments or independent fire
          protection districts that fund operations through property tax assessments, benefit
          assessments, or fees. Some of these districts bill property owners or their insurers for
          the actual cost of fire response, particularly for major incidents requiring multiple
          engines, ladder trucks, or extended operations.
        </li>
        <li>
          <strong>Mutual aid responses:</strong> When a fire department outside your jurisdiction
          responds under a mutual aid agreement, the responding agency may bill for its costs. This
          is particularly common in wildfire situations where CAL FIRE or neighboring departments
          respond to fires that cross jurisdictional boundaries.
        </li>
        <li>
          <strong>Hazmat response:</strong> If the fire involves hazardous materials &mdash;
          chemicals, fuel, asbestos disturbance, or other regulated substances &mdash; the fire
          department&rsquo;s hazmat team response is often billed separately, regardless of
          jurisdiction. California Health &amp; Safety Code &sect;25354 authorizes cost recovery
          for hazardous substance emergency responses.
        </li>
        <li>
          <strong>Contract fire service areas:</strong> Some communities contract with neighboring
          cities or county fire departments for fire protection. The terms of these contracts
          sometimes include direct billing to property owners for certain types of responses.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Typical fire response charges range from $500 for a minor incident to $5,000 or more for
        a multi-engine, multi-hour response. Wildfire responses involving air support, bulldozers,
        hand crews, and extended operations can generate charges of $50,000 or more. These bills
        often arrive weeks or months after the loss, well after the initial claim has been filed.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        B. Is Fire Response a Covered Expense?
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The standard HO-3 homeowner policy does not explicitly address fire department response
        charges. There is no line item for &ldquo;fire department fees&rdquo; in the policy.
        Coverage depends on how the charge is characterized and where it fits within the policy
        structure. There are two primary arguments for coverage:
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Argument 1: Mitigation Expense Under Duties After Loss
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Every property insurance policy imposes a{' '}
        <Link href="/resources/duties-after-loss" className="text-blue-700 underline hover:text-blue-900">
          duty after loss
        </Link>{' '}
        requiring the policyholder to take reasonable steps to protect the property from further
        damage. The fire department&rsquo;s response is, in effect, the most fundamental mitigation
        measure possible &mdash; extinguishing the fire to prevent total destruction. The cost of
        that mitigation effort is arguably a reasonable expense incurred to comply with the
        policyholder&rsquo;s duty to protect the property. Some carriers accept this argument,
        particularly when the fire was contained before becoming a total loss.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Argument 2: Part of the Loss Itself
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        An alternative argument is that fire department response charges are simply part of the
        overall cost of the fire loss. The fire caused the need for the response. The response
        was involuntary &mdash; the property owner did not choose to call multiple engines and
        a ladder truck. The charge is a direct consequence of the covered peril. Under this theory,
        fire response charges are covered the same way any other direct cost of the loss is covered.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        The Carrier&rsquo;s Counterargument
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Carriers sometimes deny fire response charges on the theory that they do not constitute
        &ldquo;direct physical loss to property.&rdquo; The fire department bill is a charge for
        services, not damage to the insured structure. This argument has some facial appeal, but
        it ignores the reality that the services were necessitated by and directly caused by the
        covered loss. The charge would not exist but for the fire.
      </p>

      <CalloutBox variant="tip" title="Submit Fire Response Bills with Your Claim">
        <p>
          Do not assume fire department charges are not covered. Submit every fire response bill to
          your insurer as part of the claim. Include the bill with a cover letter explaining that
          the charge was a direct consequence of the covered fire loss and was incurred to mitigate
          further damage to the insured property. If the carrier denies the charge, request the
          denial in writing with the specific policy language they are relying on.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        II. Government-Ordered Demolition After a Loss
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        After a fire, flood, earthquake, or other major loss, a building inspector from the local
        jurisdiction will typically inspect the damaged structure. If the inspector determines that
        the building is unsafe for occupancy or poses a danger to the public, the building will be
        &ldquo;red-tagged&rdquo; (posted with a notice prohibiting entry) or &ldquo;yellow-tagged&rdquo;
        (posted with a notice restricting use). In severe cases, the jurisdiction may issue a formal
        order to demolish the structure.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        A. California Authority to Order Demolition
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        California law gives local jurisdictions broad authority to order the repair or demolition
        of unsafe buildings. The primary statutory framework is found in California Health &amp;
        Safety Code &sect;17920 et seq., which defines &ldquo;substandard buildings&rdquo; and
        authorizes local enforcement agencies to order abatement, repair, or demolition. Key
        provisions include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Health &amp; Safety Code &sect;17920.3:</strong> Defines the conditions that
          render a building &ldquo;substandard,&rdquo; including structural hazards, inadequate
          sanitation, fire hazards, and conditions that endanger the life, health, or safety of
          the public or occupants.
        </li>
        <li>
          <strong>Health &amp; Safety Code &sect;17980:</strong> Authorizes the enforcement agency
          to issue notices to repair or demolish substandard buildings and to institute court
          proceedings if the owner does not comply.
        </li>
        <li>
          <strong>Government Code &sect;25845 (counties) and &sect;38773 (cities):</strong> Provide
          additional authority for local governments to order the removal or demolition of dangerous
          buildings and to recover the cost from the property owner if the owner fails to comply.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        In post-disaster situations, demolition orders are often issued on an emergency basis
        under the jurisdiction&rsquo;s emergency powers, without the full notice-and-hearing
        process that would normally apply. After the 2018 Camp Fire in Paradise, the 2025
        Palisades and Eaton fires, and other large-scale disasters, jurisdictions issued thousands
        of demolition orders on an emergency basis.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        B. Coverage A vs. Ordinance or Law Coverage
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Government-ordered demolition raises one of the most important coverage distinctions in
        property insurance: the line between Coverage A (dwelling damage) and{' '}
        <Link href="/resources/ordinance-law" className="text-blue-700 underline hover:text-blue-900">
          Ordinance or Law coverage
        </Link>. Understanding this distinction can mean the difference between full recovery and
        a significant coverage gap.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Demolition of the damaged portion &mdash; Coverage A:</strong> The cost to
          demolish the portion of the building that was actually damaged by the covered loss is
          part of the direct physical loss. It is covered under Coverage A (dwelling coverage)
          as part of the cost of repairing or replacing the damaged structure. Tearing down
          fire-damaged walls, removing collapsed framing, hauling away burned materials &mdash;
          these are all direct loss costs.
        </li>
        <li>
          <strong>Demolition of the undamaged portion &mdash; Ordinance or Law:</strong> When a
          government order requires demolition of the undamaged portion of the building because
          the structure cannot be partially repaired to current code, the cost of demolishing that
          undamaged portion is covered under Ordinance or Law coverage. This is the classic trigger
          for L&amp;O Coverage B (Demolition Cost), as described in our{' '}
          <Link href="/resources/code-upgrade-coverage" className="text-blue-700 underline hover:text-blue-900">
            code upgrade coverage article
          </Link>.
        </li>
      </ul>

      <CalloutBox variant="important" title="The 50% Rule">
        <p>
          Many jurisdictions have local ordinances providing that if a building is damaged beyond
          50% of its value, the entire structure must be brought into compliance with current
          building codes &mdash; which often means complete demolition and rebuild rather than
          repair. This 50% threshold is the most common trigger for Ordinance or Law coverage.
          The key question is how &ldquo;50% of value&rdquo; is determined: replacement cost,
          market value, or assessed value. The methodology matters enormously for whether the
          threshold is met.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        C. The Increased Cost of Construction Component
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a government demolition order results in a complete teardown and rebuild, Ordinance
        or Law coverage provides three critical components. L&amp;O Coverage A covers the loss
        in value of the undamaged portion that must be demolished. L&amp;O Coverage B covers the
        cost of demolishing the undamaged portion. And L&amp;O Coverage C &mdash; the Increased
        Cost of Construction &mdash; covers the additional cost of rebuilding to current codes
        rather than the codes in effect when the home was originally built. As explained in our{' '}
        <Link href="/resources/code-upgrade-coverage" className="text-blue-700 underline hover:text-blue-900">
          code upgrade coverage guide
        </Link>, this can include Title 24 energy compliance, seismic upgrades, fire-hardening
        requirements, electrical and plumbing modernization, and accessibility improvements.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        III. Debris Removal: The Coverage That Runs Out First
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The standard HO-3 policy provides{' '}
        <Link href="/resources/debris-removal" className="text-blue-700 underline hover:text-blue-900">
          debris removal coverage
        </Link>{' '}
        as an additional coverage, typically capped at 5% of the Coverage A dwelling limit. On a
        $500,000 Coverage A policy, that is $25,000 for debris removal. For a minor loss, this is
        usually adequate. For a government-ordered demolition, it is almost never enough.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Consider the actual costs involved in demolishing and removing a fire-damaged home:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Demolition labor and equipment:</strong> Excavators, loaders, haul trucks,
          operators, and laborers. A typical residential demolition runs $15,000 to $45,000
          depending on the size and complexity of the structure.
        </li>
        <li>
          <strong>Hauling and disposal:</strong> Debris must be hauled to an approved disposal
          facility. Transportation costs and dump fees can add $10,000 to $30,000 or more,
          particularly if the debris must go to a specialty disposal facility due to
          contamination.
        </li>
        <li>
          <strong>Asbestos and hazardous materials abatement:</strong> If the building contains
          asbestos (common in homes built before 1980), lead-based paint, or other regulated
          materials, those materials must be removed by licensed abatement contractors before
          demolition can begin. Asbestos abatement alone can cost $10,000 to $50,000 or more,
          depending on the extent of asbestos-containing materials. This is discussed further
          in our{' '}
          <Link href="/resources/asbestos-lead-claims" className="text-blue-700 underline hover:text-blue-900">
            asbestos and lead claims article
          </Link>.
        </li>
        <li>
          <strong>Soil testing and remediation:</strong> After a fire, the soil beneath and around
          the structure may be contaminated with lead, arsenic, heavy metals, and other byproducts
          of combustion. California Department of Toxic Substances Control (DTSC) may require
          soil testing and remediation before reconstruction can begin. These costs can be
          substantial.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        When these costs are added together, a government-ordered demolition of a single-family
        home can easily exceed $50,000 to $100,000 &mdash; far beyond the typical 5% debris
        removal limit. The excess must come from somewhere: Coverage A, Ordinance or Law coverage,
        or out of the policyholder&rsquo;s pocket. Proper allocation across these coverages is
        critical.
      </p>

      <CalloutBox variant="warning" title="Asbestos and AQMD Rule 1403">
        <p>
          In Southern California, the South Coast Air Quality Management District (AQMD) Rule 1403
          requires a thorough asbestos survey before any demolition of a structure built before
          1980. The survey itself costs $1,500 to $5,000, and if asbestos is found, abatement must
          be completed by a certified contractor before demolition can proceed. Violating Rule 1403
          can result in fines of $1,000 to $75,000 per day. These costs are part of the demolition
          expense and should be included in the claim. Do not let the carrier exclude asbestos
          abatement costs on the theory that asbestos is a &ldquo;pre-existing condition&rdquo;
          &mdash; the abatement is required solely because of the demolition, which is required
          solely because of the covered loss.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        IV. The Timing Problem: The City Wants It Down Now
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        One of the most stressful aspects of government-ordered demolition is the timing conflict
        between the government&rsquo;s public safety concerns and the insurance carrier&rsquo;s
        investigation process. The city or county wants the dangerous structure demolished
        immediately. The carrier wants to complete its investigation &mdash; inspect the property,
        take measurements, review the scope of damage, evaluate coverage &mdash; before authorizing
        demolition.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This creates a dilemma for the policyholder:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>If you wait for the carrier:</strong> The city may demolish the building itself
          and send you the bill, which can be significantly higher than if you had hired your own
          contractor. The city may also impose daily fines for non-compliance with the demolition
          order.
        </li>
        <li>
          <strong>If you proceed without carrier authorization:</strong> The carrier may argue that
          you destroyed evidence, prevented their investigation, or acted without authorization,
          potentially jeopardizing your claim.
        </li>
      </ul>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        A. How to Navigate the Timing Conflict
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The key is documentation and communication. Take these steps immediately when you receive
        a demolition order:
      </p>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Notify the carrier immediately:</strong> Send written notice (email with
          delivery confirmation) to your carrier the same day you receive the demolition order.
          Include a copy of the order, the deadline for compliance, and a request for the
          carrier&rsquo;s inspector to examine the property before demolition begins. Make clear
          that you are providing the carrier every reasonable opportunity to inspect but that
          you are under a government order with a compliance deadline.
        </li>
        <li>
          <strong>Document everything before demolition:</strong> Take comprehensive photographs
          and video of the entire structure, inside and out. Document every room, every wall,
          every damaged and undamaged area. Hire a licensed contractor or engineer to inspect and
          document the condition of the structure. This documentation replaces the physical
          evidence that will be destroyed during demolition.
        </li>
        <li>
          <strong>Get the government order in writing:</strong> Obtain the actual written demolition
          order, not just a verbal directive. Get the code section cited in the order. Photograph
          the red tag or yellow tag posted on the building. If the order was issued verbally in
          the field, follow up with the building department to obtain written confirmation.
        </li>
        <li>
          <strong>Engage in{' '}
          <Link href="/resources/temporary-emergency-repairs" className="text-blue-700 underline hover:text-blue-900">
            temporary emergency measures
          </Link>{' '}
          if possible:</strong> In some cases, temporary shoring, bracing, or barricading can
          satisfy the immediate public safety concern without requiring full demolition, buying
          time for the carrier&rsquo;s investigation. Discuss this option with the building
          inspector.
        </li>
        <li>
          <strong>Get competitive bids for demolition:</strong> Even under time pressure, obtain
          at least two or three bids for the demolition work. This demonstrates that you acted
          reasonably and obtained fair pricing. If the city is threatening to demolish and bill
          you, city-contracted demolition is almost always more expensive than a private
          contractor.
        </li>
      </ol>

      <CalloutBox variant="tip" title="California Regulations Require Prompt Investigation">
        <p>
          Under California Code of Regulations, Title 10, &sect;2695.7(b), the carrier must
          accept or deny a claim within 40 calendar days after receiving proof of claim. When a
          government demolition order imposes a shorter deadline, you have a strong argument that
          the carrier must expedite its investigation to accommodate the government timeline. If
          the carrier fails to inspect before the demolition deadline, that is the carrier&rsquo;s
          problem, not yours &mdash; as long as you provided reasonable notice and documentation.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        V. Practical Steps: Protecting Your Claim
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Whether you are dealing with fire department charges, government-ordered demolition, or
        both, the following practical steps will help protect your claim:
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        1. Include Demolition Costs in Your Claim from Day One
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Do not treat demolition as an afterthought. If the structure has been red-tagged or is
        clearly going to require demolition, include estimated demolition costs in your initial
        claim submission. This puts the carrier on notice and starts the coverage evaluation
        process early.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        2. Separate Costs by Coverage Category
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Work with your contractor to break down demolition and removal costs into the appropriate
        coverage categories: damaged-portion demolition (Coverage A), undamaged-portion demolition
        (Ordinance or Law), debris hauling and disposal (debris removal additional coverage), and
        hazmat abatement (allocated based on which materials are in the damaged vs. undamaged
        portions). Proper allocation maximizes your total recovery across all available coverages.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        3. Preserve All Government Documents
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Every document from a government agency becomes evidence in your claim: the red tag, the
        demolition order, the code sections cited, correspondence from the building department,
        hazmat abatement requirements from the AQMD or Cal/OSHA, soil testing orders from the
        DTSC. These documents prove that the costs were legally required &mdash; not voluntary
        &mdash; which is the threshold for coverage under most policy provisions.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        4. Do Not Forget the Salvage
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Before demolition, identify and remove any salvageable materials or personal property.
        Document the salvage process with photographs. Some materials (copper piping, hardwood
        framing, architectural features) have salvage value that the carrier may credit against
        the loss. More importantly, personal property that could be recovered should be removed
        before it is destroyed with the structure.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        5. Consider Hiring a Public Adjuster
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Government-ordered demolition claims involve complex coverage allocation across multiple
        policy sections. A licensed{' '}
        <Link href="/resources/public-adjuster" className="text-blue-700 underline hover:text-blue-900">
          Public Adjuster
        </Link>{' '}
        can help you navigate the interplay between Coverage A, Ordinance or Law, debris removal,
        and any applicable endorsements. The cost allocation decisions made early in the claim
        can affect your total recovery by tens of thousands of dollars.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        VI. Common Carrier Tactics in Demolition Claims
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Be prepared for the following carrier responses to demolition-related costs:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Allocating all demolition to debris removal:</strong> The carrier may try to
          allocate all demolition and removal costs to the debris removal additional coverage
          (typically limited to 5% of Coverage A), rather than properly splitting costs between
          Coverage A (damaged portion) and Ordinance or Law (undamaged portion). This
          dramatically underpays the claim.
        </li>
        <li>
          <strong>Denying the undamaged-portion demolition:</strong> Some carriers deny that any
          portion of the structure was undamaged and therefore deny Ordinance or Law coverage
          entirely. In a major fire, this may be legitimate &mdash; the entire structure may
          indeed be damaged. But in partial losses where a demolition order requires the entire
          structure to come down, some undamaged portion existed and L&amp;O should apply.
        </li>
        <li>
          <strong>Claiming you should have waited:</strong> The carrier may argue that you
          should have waited for their inspection before proceeding with demolition, even though
          you were under a government order. This is why documentation and written notice are so
          critical &mdash; if you gave the carrier reasonable opportunity to inspect and they
          failed to do so, the carrier cannot benefit from its own delay.
        </li>
        <li>
          <strong>Excluding asbestos abatement as &ldquo;pollution&rdquo;:</strong> Some carriers
          attempt to deny asbestos abatement costs under the pollution exclusion. This argument
          is weak when the abatement is required solely as a precondition to demolishing a
          structure that was damaged by a covered peril. The asbestos did not cause the loss
          &mdash; it is a regulatory cost of addressing the loss.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        VII. After a Declared Disaster
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When the governor declares a state of emergency after a wildfire or other disaster,
        government-ordered demolition takes on a different character. Federal and state agencies
        (FEMA, the Army Corps of Engineers, Cal OES) often coordinate mass demolition programs
        that are partially or fully funded by public disaster assistance. After the 2018 Camp Fire,
        the 2025 Palisades Fire, and similar events, the government provided free lot clearing for
        properties enrolled in the program.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If government-funded demolition is available, the insurance carrier may argue that the
        policyholder has no demolition expense to claim. However, the government programs often
        come with conditions: the property owner must grant a right of entry, the government
        controls the timeline and scope, and the property owner waives certain claims against
        the government. A policyholder who opts for private demolition outside the government
        program may have a faster timeline and more control, but must fund the demolition through
        insurance proceeds. The decision has trade-offs, and coverage implications should be
        carefully evaluated before opting in or out of a government demolition program.
      </p>

      <hr className="my-8 border-gray-200" />

      <p className="text-sm text-gray-500 leading-relaxed mb-4">
        This article is for educational purposes only and does not constitute legal or insurance
        advice. Every claim is different, and your recovery depends on your specific policy
        language, the facts of your loss, and applicable state law. For guidance on your particular
        situation, consult a licensed Public Adjuster and/or an attorney experienced in insurance
        coverage.
      </p>
      <p className="text-sm text-gray-500 leading-relaxed">
        Written by Leland Coontz III, Licensed Public Adjuster, CA License #2B53445.
      </p>
    </>
  )
}
