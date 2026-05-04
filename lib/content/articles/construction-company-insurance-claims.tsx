import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title:
    'Construction Company Insurance Claims: Builder’s Risk, Tools on the Job Site, and the CGL Boundary',
  description:
    'Construction companies face overlapping and often conflicting insurance coverages. Learn how builder’s risk, CGL, inland marine, and business income coverage interact—and where the gaps hide that leave contractors exposed.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational in nature and reflects the author&rsquo;s interpretation of California insurance law as a Licensed Public Adjuster. It is not legal advice. Every construction insurance claim involves unique facts, policy language, contract terms, and endorsements that may affect coverage. If you have a disputed claim involving construction losses, consult with a licensed California attorney who specializes in insurance coverage disputes.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        Construction companies operate in one of the most insurance-intensive environments in commercial business. A single project can involve a builder&rsquo;s risk policy covering the structure under construction, a commercial general liability (CGL) policy covering third-party claims, an inland marine or contractor&rsquo;s equipment floater covering tools and machinery on the job site, a commercial auto policy for vehicles, workers&rsquo; compensation for employees, and often an umbrella or excess policy sitting above all of them. Each of these policies covers different things, uses different definitions, and excludes different perils &mdash; and the gaps between them are precisely where construction companies get hurt.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The fundamental challenge for construction companies is that insurance was not designed as a single, unified system. It is a collection of separate products, each written by different underwriting departments, each with its own coverage territory. When a loss occurs on a job site &mdash; a fire during framing, theft of tools from a trailer, water damage to completed work, a subcontractor&rsquo;s faulty installation &mdash; the contractor must navigate multiple policies simultaneously, and the answer to &ldquo;who pays?&rdquo; is often not obvious. Carriers exploit this complexity, pointing contractors from one policy to another, each insurer claiming the loss belongs under someone else&rsquo;s coverage.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This guide covers the major insurance exposures that construction companies face, where the standard policies fall short, and what every contractor needs to understand before the next job site loss occurs.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Builder&rsquo;s Risk: The Foundation of Construction Insurance
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A{' '}
        <Link href="/resources/builders-risk" className="text-[#2E74B5] hover:underline">builder&rsquo;s risk policy</Link>{' '}
        covers a building while it is under construction, renovation, or remodeling. It is a first-party property policy that protects the structure itself, the materials on site, and in some cases materials in transit or stored at off-site locations. Builder&rsquo;s risk is typically written as an all-risk (special form) policy, meaning it covers all causes of loss unless specifically excluded.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The standard ISO builder&rsquo;s risk form (CP 00 20) covers the building or structure during the course of construction, including foundations, fixtures, machinery, and equipment that will become a permanent part of the structure. It also covers building materials and supplies on the described premises or within 100 feet of the premises, and temporary structures like scaffolding and construction forms used in the building process.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        What builder&rsquo;s risk does <strong>not</strong> cover is equally important. The standard form excludes the contractor&rsquo;s own tools and equipment that are not permanently installed in the building. A framing crew&rsquo;s nail guns, a plumber&rsquo;s pipe threading machine, and an electrician&rsquo;s wire pulling equipment are all personal property of the contractor or subcontractor &mdash; they are not building materials, and they are not covered under the builder&rsquo;s risk policy. This is where the{' '}
        <Link href="/resources/inland-marine" className="text-[#2E74B5] hover:underline">inland marine / contractor&rsquo;s equipment floater</Link>{' '}
        becomes essential.
      </p>

      <CalloutBox variant="warning" title="Builder&rsquo;s Risk Expires When Construction Ends">
        <p>
          Builder&rsquo;s risk policies have a defined expiration date tied to the estimated completion of construction. If construction runs long &mdash; and it almost always does &mdash; the policy may expire before the project is finished. The transition from builder&rsquo;s risk to a permanent property policy is one of the most dangerous gaps in construction insurance. If the builder&rsquo;s risk policy expires and no permanent policy is in place, the completed or nearly completed structure is uninsured. Monitor expiration dates and arrange extensions or permanent coverage well before the deadline.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The CGL vs. Property Coverage Boundary
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        One of the most misunderstood areas of construction insurance is the boundary between the CGL policy and property coverage. The CGL policy (ISO CG 00 01) covers third-party claims for bodily injury and property damage. The builder&rsquo;s risk and commercial property policies cover first-party losses to the insured&rsquo;s own property. In theory, these are clean, separate categories. In practice, on a construction site, the line between them blurs constantly.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Consider a common scenario: a plumbing subcontractor installs a water supply line during rough-in. After the drywall is hung and the finish work is partially complete, the supply line fails and floods the building. The water damages drywall, flooring, cabinets, and electrical work installed by other trades. Who pays?
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The builder&rsquo;s risk policy should cover the damage to the building and installed materials, because water damage is a covered peril under the all-risk form. The plumbing subcontractor&rsquo;s CGL policy should cover the property damage the subcontractor caused to the work of <em>other</em> trades. But the plumbing subcontractor&rsquo;s CGL will <strong>not</strong> cover the cost to repair or replace the defective plumbing work itself &mdash; that is the contractor&rsquo;s own work, and it falls under the &ldquo;your work&rdquo; exclusion.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The <strong>&ldquo;your work&rdquo; exclusion</strong> (CGL Exclusion l) is one of the most consequential provisions in construction insurance. It excludes property damage to &ldquo;your work&rdquo; arising out of it or any part of it, including materials, parts, or equipment furnished in connection with that work. This means the CGL does not pay to redo defective work &mdash; only to repair damage that defective work caused to <em>other</em> property. For general contractors, this creates a critical gap: the cost to tear out and redo defective construction work is excluded under the CGL, and it may or may not be covered under the builder&rsquo;s risk policy depending on the cause of the failure.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The <strong>subcontractor exception</strong> to the &ldquo;your work&rdquo; exclusion (CGL Exclusion l, exception) provides partial relief. Under this exception, the exclusion does not apply to work performed by a subcontractor on behalf of the named insured. This means that if a general contractor&rsquo;s CGL policy includes this exception, and the defective work was performed by a subcontractor rather than the GC&rsquo;s own crews, the resulting property damage to the GC&rsquo;s project may be covered under the GC&rsquo;s CGL. This exception is critical for general contractors who subcontract most of their work.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Tools and Equipment on the Job Site: The Inland Marine Gap
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A contractor&rsquo;s tools and equipment are the lifeblood of the operation. Compressors, generators, scaffolding, laser levels, power saws, excavation equipment, concrete pumps &mdash; these items travel from job site to job site, are exposed to theft, weather, vandalism, and accidental damage, and are often left on sites overnight or over weekends in areas with minimal security. The standard commercial property policy does not adequately cover this exposure because it is designed for property at a fixed location, not property that moves.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The{' '}
        <Link href="/resources/inland-marine" className="text-[#2E74B5] hover:underline">contractor&rsquo;s equipment floater</Link>{' '}
        (a type of inland marine policy) is specifically designed to cover tools, equipment, and machinery that contractors use on job sites. It covers owned equipment, and can be extended to cover leased or rented equipment. The policy follows the equipment wherever it goes &mdash; on the job site, in transit, in a storage yard, or in the contractor&rsquo;s shop.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Key coverage issues with contractor&rsquo;s equipment floaters include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Valuation.</strong> Is equipment covered at replacement cost, actual cash value, or agreed value? Older equipment may be fully depreciated on the contractor&rsquo;s books but still cost thousands to replace. Replacement cost coverage is essential.</li>
        <li><strong>Rental equipment.</strong> Many contractors rent specialized equipment (excavators, cranes, boom lifts) for specific projects. The rental agreement typically requires the contractor to insure the equipment and hold the rental company harmless. If the floater does not extend to rented equipment, the contractor bears the full replacement cost if the rented equipment is damaged or stolen.</li>
        <li><strong>Employee tools.</strong> Many skilled tradespeople bring their own tools to the job site. These personal tools are not covered under the contractor&rsquo;s equipment floater unless specifically scheduled. A loss that destroys an electrician&rsquo;s personal tool kit can cost $5,000 to $15,000 to replace.</li>
        <li><strong>Theft prevention requirements.</strong> Many floater policies include conditions requiring specific security measures &mdash; locked job boxes, fenced storage areas, GPS tracking on high-value equipment. Failure to comply with these conditions can void coverage for theft claims.</li>
        <li><strong>Off-site storage.</strong> Equipment stored at the contractor&rsquo;s yard, warehouse, or home is covered under the floater, but verify that the policy does not impose sublimits for off-site locations.</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Course of Construction Losses: Fire, Theft, Weather, and Vandalism
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Construction sites are inherently vulnerable to loss. The building is open, unfinished, and unoccupied. Electrical systems are partially installed and energized. Combustible materials &mdash; lumber, adhesives, insulation, solvents &mdash; are everywhere. Access is difficult to control, especially after hours. Weather protection is incomplete until the building is enclosed. The result is an elevated frequency of fire, theft, water damage, weather damage, and vandalism.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Fire</strong> is the most devastating course-of-construction loss. A fire during framing can destroy weeks or months of work in minutes. Common causes include cutting and welding operations (hot work), electrical shorts in partially installed systems, careless disposal of smoking materials, and arson. The builder&rsquo;s risk policy covers fire, but look for exclusions or conditions related to hot work permits, fire watch requirements, and smoking prohibitions. Failure to comply with these conditions can result in coverage disputes.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Theft</strong> is endemic on construction sites. Copper wire, HVAC equipment, appliances, power tools, and even lumber are frequent targets. Organized theft rings specifically target construction sites because materials are accessible, valuable, and difficult to trace after they leave the site. Builder&rsquo;s risk policies cover theft, but may impose sublimits for materials stored in the open or require evidence of security measures. Contractor&rsquo;s equipment floaters similarly cover theft of tools and equipment, subject to security conditions.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Weather damage</strong> before the building is enclosed is a major exposure. Rain entering an unfinished structure can damage framing, subfloor, insulation, and stored materials. Wind can destroy partially framed structures. Builder&rsquo;s risk policies cover weather-related damage, but some policies exclude damage from rain, snow, or sleet to property in the open. If materials are stored outside or the building is not yet weather-tight, verify that the policy does not exclude this exposure.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Vandalism</strong> is common on sites that are accessible after hours. Broken windows, spray paint, damaged equipment, and deliberate destruction of installed work all fall under vandalism coverage. Builder&rsquo;s risk policies cover vandalism, but some forms impose conditions related to site security or vacancy that can affect coverage.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Subcontractor Insurance Requirements and Certificates of Insurance
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Every general contractor knows &mdash; or should know &mdash; that subcontractors must carry their own insurance. The standard subcontract requires the subcontractor to maintain CGL coverage, workers&rsquo; compensation, commercial auto, and often an umbrella policy, with the general contractor named as an{' '}
        <Link href="/resources/named-vs-additional-insured" className="text-[#2E74B5] hover:underline">additional insured</Link>{' '}
        on the subcontractor&rsquo;s CGL and umbrella policies. A certificate of insurance (ACORD 25 or ACORD 28) is collected before the subcontractor is allowed on site.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The problem is that certificates of insurance are <strong>informational only</strong>. A certificate does not amend, extend, or alter the coverage provided by the underlying policy. The certificate holder (the GC) has no contractual right to the subcontractor&rsquo;s policy based on the certificate alone. If the subcontractor&rsquo;s policy lapses, if the additional insured endorsement was never actually added, or if the policy contains exclusions that negate the coverage described on the certificate, the GC has no recourse against the subcontractor&rsquo;s insurer &mdash; only against the subcontractor, who may be judgment-proof.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Verify the additional insured endorsement.</strong> Do not rely on the certificate. Request a copy of the actual additional insured endorsement from the subcontractor&rsquo;s insurer. The ISO CG 20 10 (Ongoing Operations) and CG 20 37 (Completed Operations) endorsements are the standard forms. Some carriers issue blanket additional insured endorsements; others require specific scheduling.</li>
        <li><strong>Require primary and noncontributory language.</strong> The additional insured endorsement should provide that coverage is primary to, and noncontributory with, the GC&rsquo;s own CGL policy. Without this language, the GC&rsquo;s insurer and the subcontractor&rsquo;s insurer may argue over who pays first, delaying claim resolution.</li>
        <li><strong>Require waiver of subrogation.</strong> The subcontract should require the subcontractor to obtain a waiver of subrogation endorsement from its insurer in favor of the GC. This prevents the subcontractor&rsquo;s insurer from paying a claim and then suing the GC to recover the payment.</li>
        <li><strong>Monitor mid-project.</strong> Policies renew, lapse, and change during the course of a project. A certificate collected at the start of a 12-month project may reflect a policy that expired six months later. Implement a system to track subcontractor insurance expirations and require updated certificates before expiration.</li>
      </ul>

      <CalloutBox variant="warning" title="A Certificate of Insurance Is Not a Guarantee of Coverage">
        <p>
          General contractors who rely solely on certificates of insurance are exposed to a dangerous gap. The certificate is a snapshot of coverage at the time it was issued. It does not guarantee that the policy remains in force, that the additional insured endorsement was actually added, or that the policy does not contain exclusions that negate coverage. Request copies of the actual endorsements, require notice of cancellation provisions, and verify coverage status throughout the project.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Business Income During Construction Delays
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a covered loss interrupts a construction project, the financial damage extends far beyond the cost to repair or replace the damaged work.{' '}
        <Link href="/resources/business-interruption" className="text-[#2E74B5] hover:underline">Business income coverage</Link>{' '}
        on a construction project takes different forms depending on who is insured and what the policy is designed to protect.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For <strong>property owners and developers</strong>, the exposure is delayed rental income or delayed occupancy. If a fire during construction pushes the completion date back four months, the owner loses four months of rental income (for investment properties) or must pay four additional months of construction loan interest, temporary housing, and other carrying costs. The builder&rsquo;s risk policy may include a <strong>delay in completion</strong> or <strong>loss of use</strong> provision that covers these losses, but the limits and coverage triggers vary significantly between policies.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For <strong>general contractors</strong>, the exposure is the cost of extended general conditions &mdash; the superintendent&rsquo;s salary, temporary facilities, equipment rentals, and overhead that continue during the delay. The contractor may also face liquidated damages or penalties under the construction contract for late completion. These costs are generally <strong>not</strong> covered under the standard builder&rsquo;s risk policy unless a specific endorsement is purchased.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Soft Costs Coverage: The Hidden Expenses of Construction Delays
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        <Link href="/resources/soft-costs-claims" className="text-[#2E74B5] hover:underline">Soft costs</Link>{' '}
        are the indirect expenses that continue or increase when a construction project is delayed by a covered loss. They include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Architect and engineering fees</strong> for redesign, plan revisions, and additional construction administration during the extended construction period.</li>
        <li><strong>Permit re-application costs</strong> when building permits expire during the delay and must be renewed, often at current fee schedules that are higher than the original permits.</li>
        <li><strong>Construction loan interest</strong> that continues to accrue during the delay. On a large project, four months of additional construction loan interest can represent hundreds of thousands of dollars.</li>
        <li><strong>Real estate taxes and assessments</strong> that accrue on the property during the extended construction period.</li>
        <li><strong>Legal and accounting fees</strong> related to contract disputes, lender negotiations, and regulatory compliance triggered by the delay.</li>
        <li><strong>Marketing and advertising costs</strong> for projects with pre-leasing or pre-sale commitments that are disrupted by the delay.</li>
        <li><strong>Insurance premiums</strong> for policies that must be extended due to the longer construction period, including the builder&rsquo;s risk policy itself.</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The standard builder&rsquo;s risk policy does <strong>not</strong> cover soft costs unless a soft costs endorsement is purchased. This endorsement is available from most markets and can be tailored to the specific project. For any project with significant carrying costs &mdash; particularly those with construction financing &mdash; soft costs coverage is essential.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Contractor&rsquo;s Pollution Liability Gap
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Construction activities create pollution exposures that are excluded under both the CGL policy and the builder&rsquo;s risk policy. Diesel fuel spills from equipment, lead paint and asbestos disturbance during renovation, silica dust generation, concrete washout contamination, and soil erosion carrying sediment into waterways are all potential pollution events that occur routinely on construction sites.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The CGL{' '}
        <Link href="/resources/pollution-exclusion-claims" className="text-[#2E74B5] hover:underline">pollution exclusion</Link>{' '}
        (CG 00 01, Section I, Exclusion f) is one of the broadest exclusions in the policy. It excludes bodily injury and property damage arising out of the actual, alleged, or threatened discharge, dispersal, seepage, migration, release, or escape of &ldquo;pollutants&rdquo; &mdash; defined broadly enough to encompass virtually any substance that could contaminate the environment. For construction contractors, this exclusion eliminates CGL coverage for most pollution-related claims.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A <strong>Contractor&rsquo;s Pollution Liability (CPL)</strong> policy fills this gap. CPL coverage is specifically designed for construction operations and covers third-party claims for bodily injury and property damage from pollution events arising out of the contractor&rsquo;s operations. It also covers cleanup costs that the contractor is legally obligated to incur. CPL policies can be written on a project-specific or annual basis.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Renovation contractors face particular pollution exposure. Any renovation of a structure built before 1978 may involve lead-based paint. Structures built before 1980 may contain asbestos in insulation, floor tiles, roofing, and joint compounds. California regulations (Cal/OSHA Title 8, Sections 1529 and 1532.1) impose strict requirements for lead and asbestos handling during renovation. A CPL policy is essential for any contractor performing renovation work on older structures.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        California CSLB Licensing and Insurance Requirements
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California contractors are licensed and regulated by the Contractors State License Board (CSLB). The CSLB imposes specific insurance requirements that vary by license classification and project type. All licensed contractors must carry workers&rsquo; compensation insurance (or file a certificate of exemption if they have no employees). General liability insurance is not technically required by the CSLB for all classifications, but it is a practical necessity for any contractor who wants to bid on projects, comply with subcontract requirements, or obtain building permits in many jurisdictions.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        California Business and Professions Code &sect;7125 requires all contractors with employees to maintain workers&rsquo; compensation insurance and provides that failure to do so is grounds for automatic license suspension. The contractor&rsquo;s license number, bond information, and workers&rsquo; compensation status are publicly searchable on the CSLB website &mdash; and project owners, general contractors, and lenders regularly verify this information before allowing a contractor on a project.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Beyond the CSLB minimum requirements, most construction contracts and project specifications impose insurance requirements that far exceed the statutory minimums. A typical commercial construction subcontract requires:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>CGL with limits of $1,000,000 per occurrence / $2,000,000 general aggregate</li>
        <li>Commercial auto liability with limits of $1,000,000 combined single limit</li>
        <li>Workers&rsquo; compensation with statutory limits and employer&rsquo;s liability of $1,000,000</li>
        <li>Umbrella or excess liability of $2,000,000 to $5,000,000 (higher for large projects)</li>
        <li>Additional insured status for the owner, GC, and sometimes the architect and lender</li>
        <li>Primary and noncontributory endorsement</li>
        <li>Waiver of subrogation in favor of the GC and owner</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Contractors who cannot meet these requirements are effectively locked out of the project. Understanding the insurance specifications in the construction contract is as important as understanding the scope of work.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Commercial Coinsurance and Reporting Requirements
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Builder&rsquo;s risk policies often include a{' '}
        <Link href="/resources/commercial-coinsurance" className="text-[#2E74B5] hover:underline">coinsurance</Link>{' '}
        provision that requires the insured to maintain a limit of insurance equal to a specified percentage (typically 80%, 90%, or 100%) of the completed value of the building at the time of loss. If the limit is inadequate at the time of loss, the coinsurance penalty reduces the claim payment proportionally.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This creates a particular challenge for construction projects because the value of the building increases as construction progresses. A builder&rsquo;s risk policy written at the project&rsquo;s inception may have a limit equal to the estimated completed value, but if construction costs increase due to material price escalation, change orders, or scope changes, the limit may be inadequate by the time a loss occurs. Some builder&rsquo;s risk policies address this through a <strong>reporting form</strong> that requires the insured to report the current value of the project at regular intervals (monthly or quarterly), with the premium adjusted based on reported values.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Contractors and owners who fail to report accurately or who underestimate the completed value of the project risk a coinsurance penalty that can reduce a claim payment by tens or hundreds of thousands of dollars. Accurate, timely reporting is a coverage obligation that many contractors treat as an administrative afterthought &mdash; until a loss occurs and the carrier applies the coinsurance formula.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        A Practical Coverage Checklist for Construction Companies
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Every construction company should review its insurance program with its broker at least annually &mdash; and before the start of any project that involves new exposures, higher values, or unusual risks. The following checklist covers the core coverages that every contractor should evaluate:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Builder&rsquo;s Risk (CP 00 20 or equivalent):</strong> Project-specific or annual? Limit set at completed value with adequate escalation? All-risk form? Theft included? Verify coverage for materials in transit and materials stored off-site. Confirm the policy period extends beyond the estimated completion date.</li>
        <li><strong>Commercial General Liability (CG 00 01):</strong> Confirm the subcontractor exception to the &ldquo;your work&rdquo; exclusion is included. Verify products-completed operations coverage is maintained for at least three to five years after project completion. Ensure per-project aggregate endorsement is in place for multi-project operations.</li>
        <li><strong>Contractor&rsquo;s Equipment Floater:</strong> Covers owned, leased, and rented equipment? Replacement cost valuation? Worldwide or limited territory? Theft coverage with reasonable security conditions? Adequate blanket limit for all equipment at any one job site?</li>
        <li><strong>Business Income / Delay in Completion:</strong> Does the builder&rsquo;s risk policy include delay-in-completion coverage? Is the limit adequate for the carrying costs during a realistic delay period? Is{' '}
          <Link href="/resources/soft-costs-claims" className="text-[#2E74B5] hover:underline">soft costs coverage</Link>{' '}
          included or available by endorsement?</li>
        <li><strong>Contractor&rsquo;s Pollution Liability:</strong> Essential for renovation contractors, excavation contractors, and any project involving older structures. Project-specific or annual? Adequate limits for cleanup and third-party claims?</li>
        <li><strong>Subcontractor Insurance Compliance:</strong> System in place to collect, verify, and monitor subcontractor insurance? Copies of actual additional insured endorsements (not just certificates)? Primary and noncontributory language? Waiver of subrogation?</li>
        <li><strong>Workers&rsquo; Compensation:</strong> Adequate classification codes for all work being performed? Experience modification factor monitored and managed? Return-to-work program in place?</li>
        <li><strong>Commercial Auto:</strong> Hired and non-owned auto coverage included? Adequate limits for the project type?</li>
        <li><strong>Umbrella / Excess Liability:</strong> Follows form over CGL, auto, and employer&rsquo;s liability? Limits meet contractual requirements? No undisclosed exclusions that gap the umbrella from the underlying coverage?</li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        Construction insurance is not a single policy &mdash; it is a system of interlocking coverages, each designed to address a specific slice of the risk. The gaps between those slices are where contractors lose money, lose projects, and lose businesses. Understanding how builder&rsquo;s risk, CGL, inland marine, pollution liability, and business income coverages interact &mdash; and where they don&rsquo;t &mdash; is the difference between a construction company that survives a major loss and one that doesn&rsquo;t. Review your program, close the gaps, and make sure your insurance is built as carefully as the structures you build.
      </p>
    </>
  )
}
