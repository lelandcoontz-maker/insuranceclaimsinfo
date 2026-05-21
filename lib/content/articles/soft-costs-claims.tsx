import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Soft Costs in Insurance Claims: The Hidden Expenses Carriers Strip From Your Estimate',
  description:
    'Soft costs like engineering fees, permits, supervision, and design services can add 15-25% to a claim. Learn what they are, why carriers fight them, and how to recover every dollar you are owed.',
  summary:
    'Soft costs, engineering fees, permits, supervision, and design services, can add 15 to 25% to a claim, yet carriers routinely strip them out. They are legitimate parts of the cost to rebuild, so itemize and demand them.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        When an insurance company writes an estimate to repair or rebuild your home, the
        estimate typically focuses on the &ldquo;hard costs&rdquo; &mdash; the physical
        materials and labor required to put the building back together. Lumber, drywall,
        roofing, plumbing fixtures, paint. These are the line items everyone sees and
        understands.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        But repairing or rebuilding a home involves far more than materials and labor. There
        are engineering fees, permit costs, project supervision, design services, environmental
        testing, temporary utilities, and dozens of other expenses that are essential to the
        construction process but do not correspond to a physical piece of the building. These
        are called <strong>soft costs</strong>, and they are a legitimate, necessary part of
        the cost to restore your property after a covered loss.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Carriers routinely strip soft costs from their estimates because they can add
        15&ndash;25% to the total claim value. Understanding what soft costs are, why they are
        owed, and how to fight for them is one of the most important things a policyholder can
        do to protect their recovery.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Are Soft Costs?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Soft costs are the non-physical expenses essential to a construction project. They do
        not produce a tangible piece of the finished building, but without them the building
        cannot be legally, safely, or properly repaired. In insurance claims, soft costs
        typically include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Structural engineering assessments and reports</li>
        <li>Architectural and design plans for reconstruction</li>
        <li>Interior design services for replacing custom finishes</li>
        <li>Building permit fees and permit expediting services</li>
        <li>General contractor supervision and project management</li>
        <li>Environmental testing (asbestos, lead paint, mold)</li>
        <li>Surveying and site assessment costs</li>
        <li>Temporary utilities during construction</li>
        <li>Storage costs for contents during repairs</li>
        <li>Temporary fencing and site security</li>
        <li>Debris removal beyond the policy&apos;s standard provision</li>
        <li>Code upgrade costs including plans review and additional materials</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Every one of these is a real expense that must be paid to complete a repair or rebuild.
        They are the cost of doing construction in the real world.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Structural Engineering Fees
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Structural engineering assessments are one of the most common &mdash; and most
        important &mdash; soft costs in a property claim. After a fire, earthquake, vehicle
        impact, or other significant event, a structural engineer must evaluate the building to
        determine the full extent of damage and design proper repairs.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In California, you cannot rebuild or make structural repairs without an engineer&apos;s
        stamp on the plans. This is not a suggestion &mdash; it is a legal requirement. The
        building department will not issue a permit for structural work without
        engineer-stamped drawings. That means the cost of the structural engineer is not
        discretionary. It is a mandatory cost of the repair, and the carrier owes for it.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Engineering fees serve two critical purposes in a claim:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Determining the scope of damage.</strong> The engineer identifies structural
          damage that may not be visible to the naked eye &mdash; compromised load-bearing
          members, shifted foundations, weakened connections, and other conditions that affect
          the safety and integrity of the building.
        </li>
        <li>
          <strong>Designing the repair.</strong> The engineer creates the stamped drawings and
          specifications that tell the contractor exactly how to make the structural repairs to
          code. Without these drawings, the contractor cannot pull a permit and the work cannot
          begin.
        </li>
      </ol>

      <CalloutBox variant="info" title="Engineering Fees Are Not Part of the Contractor&apos;s Bid">
        <p>
          Carriers sometimes argue that engineering costs are &ldquo;included&rdquo; in the
          contractor&apos;s estimate. They are not. A general contractor hires a structural
          engineer as a separate consultant, and that engineer bills separately. The
          engineering fee is an independent soft cost that sits outside the contractor&apos;s
          direct construction costs. It must be listed and paid as its own line item.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Interior Design Services
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        An interior designer is not always part of an insurance claim, but there are
        situations where professional design services are a legitimate &mdash; and necessary
        &mdash; claim expense.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a loss destroys custom finishes, built-in cabinetry, specialty tile layouts, or
        coordinated design schemes, replacing them to &ldquo;like kind and quality&rdquo;
        may require professional design services. The policy obligates the carrier to restore
        the property to its pre-loss condition. If the pre-loss condition included
        professionally designed interiors, the cost of the designer to recreate that level of
        finish is part of the claim.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This applies particularly to high-end homes. If the policyholder hired an interior
        designer to select cabinetry, specify tile patterns, and coordinate finishes &mdash;
        and the loss destroyed all of that work &mdash; a general contractor cannot simply
        replace it by picking items from a catalog. Common scenarios include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Custom kitchen or bathroom designs with coordinated cabinetry, countertops, tile,
          and hardware selections
        </li>
        <li>
          Built-in furniture, bookshelves, entertainment centers, or closet systems that were
          designed as part of the room
        </li>
        <li>
          Specialty wall treatments, decorative finishes, or multi-room color and material
          coordination
        </li>
        <li>
          Historically accurate restoration work requiring period-appropriate material
          selection and layout
        </li>
        <li>
          Any home where the original construction involved a professional designer whose
          work was destroyed by the covered loss
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Building Permit Fees and Permit Expediting Services
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        In California, building permits are required for virtually all structural repairs.
        Roofing, framing, electrical, plumbing, HVAC, fire damage repairs, demolition &mdash;
        all of these require permits before work can legally begin. The cost of the building
        permit itself is a direct cost of the repair, and the carrier owes for it. For more
        detail on building permits, see our article on{' '}
        <Link href="/resources/building-permits-claims" className="text-[#2E74B5] underline">
          building permits and insurance claims
        </Link>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        But permit fees are only part of the story. In many California jurisdictions &mdash;
        especially after major disasters &mdash; building departments are overwhelmed. Plan
        review can take weeks or months. Someone has to manage this process, and that someone
        is often a professional permit expediting service that handles:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Preparing and submitting permit applications</li>
        <li>Coordinating with the building department on plan review</li>
        <li>Addressing plan check corrections and resubmissions</li>
        <li>Tracking application status and following up on delays</li>
        <li>Managing the documentation required for complex permits</li>
        <li>Coordinating between the architect, engineer, and building department</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Both the permit fee itself <strong>and</strong> the cost of the permit expediting
        service are legitimate claim expenses. The permit is a legal requirement, and the
        service to manage it is a real cost of construction.
      </p>

      <CalloutBox variant="warning" title="Post-Disaster Permitting Delays">
        <p>
          After major California wildfires and other catastrophic events, building departments
          in affected jurisdictions can be overwhelmed with permit applications. Wait times of
          three to six months or longer are not uncommon. In these situations, a professional
          permit expediting service is not a luxury &mdash; it is a practical necessity that
          directly impacts how quickly the policyholder can begin rebuilding.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Supervision Costs &mdash; The Line Item Carriers Love to Remove
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Supervision is one of the most important soft costs in a construction project, and it
        is one of the line items insurance carriers most aggressively try to strip from
        estimates. Within the Xactimate estimating software &mdash; the same software carriers
        use to write their own estimates &mdash; there is a specific line item for GC
        supervision and project management. It exists because supervision is a real,
        recognized cost of construction.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The supervision line item covers the general contractor&apos;s time and expense for
        managing the repair or rebuild project. This includes:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Ordering building materials.</strong> Someone has to identify, source, price,
          and order every material needed for the project. This takes time, especially when
          specialty or matching materials are involved.
        </li>
        <li>
          <strong>Pulling building permits.</strong> The GC or their team must prepare permit
          applications, submit plans, and manage the approval process with the local building
          department.
        </li>
        <li>
          <strong>Meeting with building inspectors.</strong> Throughout the project, the
          building department conducts inspections at various stages &mdash; foundation,
          framing, rough electrical, rough plumbing, insulation, drywall, and final. Someone
          from the GC&apos;s team must be present for every inspection. Missed inspections
          delay the project.
        </li>
        <li>
          <strong>General project oversight and coordination.</strong> Scheduling
          subcontractors, managing the construction sequence, resolving conflicts between
          trades, handling change orders, maintaining quality control, and keeping the project
          on schedule. This is full-time work on any significant repair project.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The supervision percentage in{' '}
        <Link href="/resources/xactimate" className="text-[#2E74B5] underline">
          Xactimate
        </Link>{' '}
        is typically calculated as a percentage of the total job cost. This is standard
        industry practice. Supervision is not the same as{' '}
        <Link href="/resources/overhead-and-profit" className="text-[#2E74B5] underline">
          overhead and profit
        </Link>{' '}
        &mdash; it is a separate cost. Overhead covers the GC&apos;s general business
        expenses (office, insurance, vehicles, staff). Profit is the contractor&apos;s margin.
        Supervision is the actual time spent managing the specific project. All three are
        legitimate, separate costs.
      </p>

      <CalloutBox variant="tip" title="Supervision Is Not Overhead and Profit">
        <p>
          Carriers frequently argue that supervision is &ldquo;included in overhead and
          profit.&rdquo; It is not. Overhead and profit cover the contractor&apos;s general
          business costs and margin. Supervision is the cost of a project manager or
          superintendent physically managing your specific job &mdash; ordering your
          materials, attending your inspections, coordinating your subcontractors. These are
          distinct costs, and Xactimate treats them as separate line items for exactly this
          reason.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Why Carriers Strip Supervision From Estimates
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        On a $300,000 repair, supervision might add $15,000&ndash;$30,000. Across thousands of
        claims, the incentive to remove it is clear. The carrier&apos;s typical arguments:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>&ldquo;It is included in overhead and profit.&rdquo;</strong> It is not.
          O&amp;P and supervision are separate line items in the carrier&apos;s own
          estimating software.
        </li>
        <li>
          <strong>&ldquo;It is included in the labor rates.&rdquo;</strong> Xactimate labor
          rates cover the tradesperson&apos;s time performing the work, not the GC&apos;s
          time managing the project.
        </li>
        <li>
          <strong>&ldquo;You have not demonstrated the need for supervision.&rdquo;</strong>
          Every multi-trade construction project requires supervision. The need is inherent in
          the scope of work. You do not need to separately &ldquo;demonstrate&rdquo; why a
          project involving framing, electrical, plumbing, HVAC, drywall, paint, and flooring
          requires someone to manage it.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Architectural and Design Plans
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        For any rebuild or major structural repair, architectural plans are required. These
        drawings must comply with current building codes, zoning, and local regulations. Even
        on a partial-loss repair, architectural drawings may be needed to obtain a building
        permit. On a total loss, full architectural plans are a substantial expense entirely
        separate from the cost of construction.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Architectural fees include site assessment and measurement, preparation of construction
        drawings and specifications, coordination with structural and mechanical engineers,
        plan check corrections, and construction administration during the build.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Environmental Testing
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Before any demolition or significant repair work can begin on an older building in
        California, environmental testing is required by law. This is not optional &mdash; it
        is a regulatory mandate. Contractors who demolish or disturb building materials without
        proper testing face fines, work stoppages, and legal liability.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Environmental testing typically covers three categories:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Asbestos.</strong> Any building constructed before 1980 may contain
          asbestos-containing materials (ACMs) in floor tiles, insulation, roofing, siding,
          popcorn ceilings, pipe wrap, and joint compound. California law requires asbestos
          testing before demolition or renovation. If ACMs are found, they must be abated by a
          licensed asbestos contractor before any other work can proceed.
        </li>
        <li>
          <strong>Lead paint.</strong> Homes built before 1978 may contain lead-based paint.
          Federal EPA regulations (the RRP Rule) and California DTSC requirements mandate
          testing and proper handling of lead-containing materials during renovation and
          repair.
        </li>
        <li>
          <strong>Mold.</strong> After water damage or prolonged exposure during the claims
          process, mold testing may be needed to determine the extent of contamination and
          guide the remediation plan. Air and surface sampling by a qualified industrial
          hygienist establishes baseline conditions and post-remediation clearance levels.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The carrier cannot legally begin demolition or repair without this testing. The
        policyholder should not bear a regulatory expense triggered by a covered loss.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Other Commonly Overlooked Soft Costs
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Beyond the major categories above, several other soft costs are routinely left out of
        carrier estimates:
      </p>
      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Temporary Utilities
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        During a rebuild, temporary electrical service, water connections, portable sanitation,
        and generator rental are standard construction expenses. Permanent utilities may have
        been damaged or disconnected, but the crew still needs power and water to work.
      </p>
      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Contents Storage
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a home is being repaired, personal property often needs to be packed out and
        stored. The cost of professional movers, packing materials, climate-controlled storage
        units, and the return trip are legitimate claim expenses that can run thousands of
        dollars over a multi-month repair.
      </p>
      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Temporary Fencing and Site Security
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A damaged or partially demolished building is a safety hazard and a target for theft.
        Temporary chain-link fencing, lockable gates, and in some cases security patrols are
        standard expenses on total losses and large partial losses.
      </p>
      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Surveying
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A property survey may be required before reconstruction, particularly on total losses.
        The survey establishes property boundaries, setback requirements, and topographic
        conditions. Staking the building footprint before foundation work is a precision task
        performed by a licensed surveyor.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Debris Removal and Code Upgrade Costs
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        On large losses &mdash; particularly total losses involving hazardous materials or
        government-mandated cleanup &mdash; debris removal costs can far exceed the standard
        policy provision. See our article on{' '}
        <Link href="/resources/debris-removal" className="text-[#2E74B5] underline">
          debris removal coverage
        </Link>{' '}
        for how this works across coverage categories.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Similarly, when a building must comply with current codes rather than the codes in
        effect when it was built, the difference generates its own soft costs: additional plans
        review, engineering analysis, upgraded materials, and extra inspections. These are
        typically covered under the{' '}
        <Link href="/resources/ordinance-law" className="text-[#2E74B5] underline">
          Ordinance or Law
        </Link>{' '}
        provision, separate from Coverage A.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why Insurance Carriers Fight Soft Costs
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        On a $400,000 repair, soft costs can add $60,000 to $100,000 to the claim. Across
        thousands of claims, stripping them saves the carrier millions. The tactics are
        predictable:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Omitting them entirely.</strong> The estimate simply does not include
          engineering, permits, supervision, or other soft costs &mdash; leaving tens of
          thousands of dollars off the claim.
        </li>
        <li>
          <strong>Claiming they are &ldquo;included.&rdquo;</strong> The carrier argues soft
          costs are built into labor rates or O&amp;P. They are not. Xactimate labor rates
          cover the tradesperson. O&amp;P covers the GC&apos;s business costs and margin. Soft
          costs are separate, identifiable expenses.
        </li>
        <li>
          <strong>Demanding proof of incurred cost.</strong> The carrier insists on receipts
          before paying, forcing the policyholder to front money out of pocket for engineering,
          permits, and testing.
        </li>
        <li>
          <strong>Characterizing them as unnecessary.</strong> The carrier claims the repair
          does not need engineering, that the homeowner can pull their own permits, or that
          supervision is not required. These arguments ignore how construction works.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Legal Basis for Soft Cost Recovery
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California Insurance Code &sect;2051 establishes that the measure of recovery is the
        cost to repair, rebuild, or replace the thing lost or injured. Soft costs are part of
        that cost &mdash; you cannot complete a repair without them. The Fair Claims Settlement
        Practices Regulations (10 CCR &sect;2695.7) further require carriers to conduct a
        thorough, fair, and objective investigation and to not deny or reduce claims without a
        reasonable basis.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a carrier removes soft costs from an estimate, the policyholder should ask one
        question: <strong>How does the carrier expect the repair to be completed without these
        costs being paid?</strong> If the building department requires a permit, someone has
        to pay for it. If the structural plans require an engineer&apos;s stamp, someone has
        to pay the engineer. The carrier cannot pretend these costs do not exist.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Document and Recover Soft Costs
      </h2>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Review the carrier&apos;s estimate line by line.</strong> Identify every
          soft cost that is missing.
        </li>
        <li>
          <strong>Get a contractor&apos;s estimate that includes soft costs.</strong> A
          licensed GC&apos;s estimate with engineering, permits, supervision, and other soft
          costs as separate line items proves these are real costs that real contractors charge.
        </li>
        <li>
          <strong>Obtain quotes.</strong> Get written quotes from structural engineers, permit
          expediting services, and environmental testing firms. These establish actual costs in
          your market.
        </li>
        <li>
          <strong>Document regulatory requirements.</strong> If a permit, engineer&apos;s
          stamp, or environmental testing is legally required, document that requirement. Make
          it clear these are not optional.
        </li>
        <li>
          <strong>Submit a formal supplement.</strong> Present the missing soft costs in
          writing with supporting documentation and specific dollar amounts.
        </li>
        <li>
          <strong>Challenge every denial.</strong> Demand a written explanation with specific
          policy language. Under California&apos;s Fair Claims Settlement Practices
          Regulations, the carrier must provide a reasonable basis for any denial.
        </li>
      </ol>

      <CalloutBox variant="tip" title="Soft Costs Checklist">
        <p>
          Review your claim for each of these: structural engineering fees, architectural
          plans, interior design services, building permit fees, permit expediting fees, GC
          supervision, environmental testing (asbestos, lead, mold), property survey,
          temporary utilities, contents storage, temporary fencing and security, debris
          removal beyond the standard provision (see{' '}
          <Link href="/resources/debris-removal" className="text-[#2E74B5] underline">
            debris removal
          </Link>
          ), code upgrade costs (see{' '}
          <Link href="/resources/ordinance-law" className="text-[#2E74B5] underline">
            Ordinance or Law
          </Link>
          ), and{' '}
          <Link href="/resources/overhead-and-profit" className="text-[#2E74B5] underline">
            overhead and profit
          </Link>{' '}
          (separate from supervision). Not every cost applies to every claim, but each should
          be evaluated.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Bottom Line
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Soft costs are real costs. They are not extras, add-ons, or padding. They are the
        engineering fees, permit costs, supervision expenses, design services, and regulatory
        compliance costs that every construction project requires. The carrier&apos;s own
        estimating software includes line items for these costs because the software was
        designed to reflect how construction actually works.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a carrier strips soft costs from an estimate, they are not making a legitimate
        coverage determination. They are reducing the cost of the claim by pretending that
        real, necessary construction expenses do not exist. Policyholders who understand what
        soft costs are and why they are owed are in a far stronger position to recover the
        full amount they are entitled to under their policy.
      </p>

      <blockquote className="border-l-4 border-[#C9A84C] pl-4 italic text-gray-600 mb-6">
        The insurance company&apos;s obligation is to pay the cost to repair or rebuild the
        property. That cost includes every expense necessary to actually complete the work
        &mdash; not just the lumber and the labor, but the engineering, the permits, the
        supervision, and every other soft cost that makes the project possible.
      </blockquote>
    </>
  )
}
