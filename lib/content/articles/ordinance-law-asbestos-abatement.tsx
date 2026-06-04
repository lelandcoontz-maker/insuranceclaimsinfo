import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title:
    'Ordinance or Law and Asbestos Abatement: Who Pays When a Covered Loss Triggers ACM Removal?',
  description:
    'When a covered loss triggers demolition of a building containing asbestos-containing materials (ACM), who pays for the abatement? This article analyzes the intersection of ordinance or law coverage, the pollution exclusion, and the efficient proximate cause doctrine in California commercial property claims.',
  summary:
    'When a covered loss forces demolition of a building with asbestos materials, ordinance or law coverage should pay the required abatement, despite carrier attempts to invoke the pollution exclusion. California\'s efficient proximate cause doctrine supports coverage.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational in nature and reflects the author&rsquo;s interpretation
          of California insurance law as a Licensed Public Adjuster. It is not legal advice.
          Asbestos abatement involves complex regulatory, environmental, and insurance coverage
          issues that vary by jurisdiction, policy form, and specific facts. If you have a
          disputed claim involving asbestos abatement costs triggered by a covered property
          loss, consult with a licensed California attorney who specializes in insurance
          coverage disputes.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        A fire damages 40 percent of a commercial building. The local building department
        determines that the structure must be demolished entirely because a municipal ordinance
        requires full demolition when damage exceeds a threshold percentage of the building&rsquo;s
        value. The building owner has{' '}
        <Link href="/resources/commercial-ordinance-law" className="text-blue-700 underline hover:text-blue-900">
          ordinance or law coverage
        </Link>{' '}
        &mdash; specifically, Coverage B (demolition cost) under ISO form CP 04 05 &mdash; which
        pays for the cost of demolishing the undamaged portion of the building. But here is the
        problem: the building was constructed in the 1960s and contains asbestos-containing
        materials (ACM) throughout its walls, floor tiles, pipe insulation, and ceiling texture.
        Before anyone can demolish anything, the asbestos must be professionally abated &mdash;
        tested, contained, removed, transported, and disposed of according to federal, state, and
        local regulations.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The abatement cost is $380,000. The fire damage itself totaled $600,000. The carrier
        pays the fire damage without dispute but refuses to pay the abatement cost, citing the
        pollution exclusion. The building owner is left holding a six-figure bill for a
        regulatory requirement triggered entirely by a covered loss.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This scenario plays out repeatedly in commercial property claims involving older
        buildings. It sits at the intersection of three powerful coverage provisions: ordinance
        or law coverage (which should pay), the pollution exclusion (which the carrier argues
        should block payment), and the efficient proximate cause doctrine (which California law
        uses to resolve such conflicts). Understanding how these three provisions interact is
        essential for any building owner whose property contains ACM.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Scenario: How a Covered Fire Becomes an Asbestos Problem
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        To understand the coverage dispute, you must understand the chain of events that creates it:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>A covered loss occurs.</strong> Fire, windstorm, explosion, or another covered
          peril damages the building. The damage is significant but does not destroy the entire
          structure.
        </li>
        <li>
          <strong>A building code or ordinance is triggered.</strong> The local jurisdiction
          determines that the damage exceeds a threshold &mdash; often 50 percent of the
          building&rsquo;s value &mdash; that requires demolition of the entire building under
          a local{' '}
          <Link href="/resources/ordinance-law" className="text-blue-700 underline hover:text-blue-900">
            ordinance or law
          </Link>
          . Or the building code requires that repairs to the damaged portion include code
          upgrades that make it more practical to demolish and rebuild entirely.
        </li>
        <li>
          <strong>ACM is present in the building.</strong> The building was constructed during
          an era when asbestos-containing materials were standard &mdash; roughly the 1920s
          through the late 1970s. ACM is found in ceiling texture, floor tiles, pipe insulation,
          joint compound, fireproofing, roofing materials, or building cladding.
        </li>
        <li>
          <strong>Regulations require abatement before demolition.</strong> Federal law (NESHAP
          &mdash; the National Emission Standards for Hazardous Air Pollutants, 40 CFR Part 61,
          Subpart M), California regulations (Cal/OSHA Title 8, Section 1529), and local air
          quality management district (AQMD) rules all require that ACM be identified, contained,
          and removed by licensed abatement contractors before any demolition activity begins.
          This is not optional. It is legally mandatory.
        </li>
        <li>
          <strong>The abatement cost is substantial.</strong> Depending on the type, quantity,
          and location of ACM, abatement costs can range from tens of thousands to hundreds of
          thousands of dollars &mdash; and in large commercial buildings, they can exceed
          the cost of the original fire damage.
        </li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        The policyholder&rsquo;s position is straightforward: the fire caused the demolition
        requirement, the demolition requirement caused the abatement requirement, and the
        abatement cost is therefore a direct consequence of the covered fire loss. The
        carrier&rsquo;s position is equally direct: asbestos is a pollutant, the pollution
        exclusion bars coverage for pollutant-related costs, and the abatement cost is a
        pollutant cleanup cost. Both positions have surface logic. The question is which
        one prevails.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Coverage B Argument: Demolition Cost Should Include Abatement
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        ISO form CP 04 05 provides three coverages under the Ordinance or Law endorsement.
        Coverage B &mdash; Demolition Cost &mdash; pays for the cost of demolishing the
        undamaged portion of the building when an ordinance or law requires it after a covered
        loss. For a detailed breakdown of all three coverages, see our{' '}
        <Link href="/resources/commercial-ordinance-law" className="text-blue-700 underline hover:text-blue-900">
          commercial ordinance or law coverage article
        </Link>
        .
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The policyholder&rsquo;s argument for coverage is built on several reinforcing pillars:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Abatement is a necessary component of demolition.</strong> You cannot legally
          demolish a building containing ACM without first removing the asbestos. NESHAP, Cal/OSHA,
          and local AQMD rules are unequivocal on this point. Abatement is not a separate,
          voluntary activity &mdash; it is an integral step in the demolition process required by
          law. If Coverage B pays for the cost of demolition, and demolition legally cannot occur
          without abatement, then abatement is part of the demolition cost.
        </li>
        <li>
          <strong>Coverage B exists specifically to cover law-triggered costs.</strong> The entire
          purpose of the Ordinance or Law endorsement is to cover costs imposed by legal
          requirements. NESHAP and Cal/OSHA are laws. The abatement requirement is imposed by
          those laws. Excluding a legally mandated cost from a coverage designed to cover legally
          mandated costs defeats the endorsement&rsquo;s purpose.
        </li>
        <li>
          <strong>The asbestos was not the cause of loss.</strong> The asbestos did not cause the
          fire. The asbestos did not damage the building. The asbestos was inert and would have
          remained inert indefinitely if the fire had not occurred. The fire &mdash; a covered
          peril &mdash; is the event that set the entire chain of consequences in motion,
          including the demolition requirement, which in turn triggered the abatement
          requirement.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Carrier&rsquo;s Counterargument: The Pollution Exclusion
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The standard ISO pollution exclusion (found in most commercial property policies) bars
        coverage for loss or damage caused by &ldquo;the discharge, dispersal, seepage,
        migration, release or escape of &lsquo;pollutants&rsquo;&rdquo; &mdash; and the
        definition of &ldquo;pollutants&rdquo; is broad enough to encompass asbestos fibers.
        Carriers rely on this exclusion to deny abatement costs, arguing:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Asbestos is a pollutant under the policy definition
        </li>
        <li>
          The abatement cost is a cost of cleaning up, removing, or remediating a pollutant
        </li>
        <li>
          The pollution exclusion applies regardless of how the need for cleanup arose
        </li>
        <li>
          The endorsement does not override the exclusion because the exclusion applies to the
          policy as a whole
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a broader analysis of how the pollution exclusion operates in property claims, see
        our{' '}
        <Link href="/resources/pollution-exclusion-claims" className="text-blue-700 underline hover:text-blue-900">
          pollution exclusion article
        </Link>{' '}
        and our{' '}
        <Link href="/resources/asbestos-lead-claims" className="text-blue-700 underline hover:text-blue-900">
          asbestos and lead paint in insurance claims article
        </Link>
        .
      </p>

      <CalloutBox variant="warning" title="The Pollution Exclusion Is Not Absolute in California">
        <p>
          California courts have repeatedly held that the standard pollution exclusion was
          designed to address traditional environmental contamination &mdash; industrial
          discharge, toxic waste, chemical spills &mdash; not incidental consequences of
          otherwise-covered property losses. When a covered peril (fire) triggers a chain of
          events that incidentally involves a substance defined as a pollutant (asbestos), the
          pollution exclusion does not necessarily bar coverage. This is a critical distinction
          that many carriers ignore when issuing denials.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        California Case Law: The Pollution Exclusion and ACM
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California courts have developed a substantial body of law limiting the pollution
        exclusion&rsquo;s reach. Several principles from this case law directly support
        coverage for ACM abatement triggered by a covered loss:
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>The &ldquo;traditional environmental contamination&rdquo; limitation.</strong>{' '}
        In <em>MacKinnon v. Truck Insurance Exchange</em> (2003) 31 Cal.4th 635, the California
        Supreme Court held that the pollution exclusion must be interpreted in context and was
        intended to address traditional environmental pollution &mdash; not every situation
        involving a substance that could technically be called a &ldquo;pollutant.&rdquo; The
        court recognized that an overbroad reading of the pollution exclusion would eliminate
        coverage for a vast range of common claims that have nothing to do with environmental
        contamination.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>The reasonable expectations doctrine.</strong> California applies the reasonable
        expectations doctrine to insurance policy interpretation: ambiguous provisions are
        construed in favor of the policyholder, and exclusions are interpreted narrowly. A
        building owner who purchases Ordinance or Law Coverage B reasonably expects that the
        cost of complying with laws governing demolition &mdash; including NESHAP and Cal/OSHA
        asbestos regulations &mdash; is part of the covered demolition cost. Using the
        pollution exclusion to gut Coverage B contradicts those reasonable expectations.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>The concurrent causation framework.</strong> When a covered peril (fire) and an
        excluded peril (pollution) combine to cause a loss, California uses the{' '}
        <Link href="/resources/efficient-proximate-cause" className="text-blue-700 underline hover:text-blue-900">
          efficient proximate cause doctrine
        </Link>{' '}
        to determine coverage. If the covered peril is the efficient proximate cause &mdash;
        the predominant cause that sets the chain of events in motion &mdash; coverage applies
        despite the involvement of an excluded peril.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Efficient Proximate Cause Doctrine Applied to ACM Abatement
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California&rsquo;s efficient proximate cause doctrine, codified in California Insurance
        Code Section 530.5 and developed through case law including <em>Garvey v. State Farm
        Fire &amp; Casualty Co.</em> (1989) 48 Cal.3d 395 and <em>State Farm Fire &amp;
        Casualty Co. v. Von Der Lieth</em> (1991) 54 Cal.3d 1123, provides the analytical
        framework for resolving the conflict between Coverage B and the pollution exclusion.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The doctrine holds that when a loss results from a chain of causation involving both
        covered and excluded perils, coverage is determined by identifying the
        <strong> efficient proximate cause</strong> &mdash; the predominant cause that sets the
        chain in motion. If the efficient proximate cause is a covered peril, the loss is
        covered despite the involvement of excluded perils along the chain.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Applied to the ACM abatement scenario, the analysis is clear:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>The fire is a covered peril.</strong> Fire is covered under the policy. The
          fire damaged the building.
        </li>
        <li>
          <strong>The fire triggered the ordinance.</strong> The fire damage exceeded the
          demolition threshold, triggering the local ordinance that requires full demolition.
        </li>
        <li>
          <strong>The ordinance triggered the demolition requirement.</strong> The local
          ordinance requires that the undamaged portion of the building be demolished.
        </li>
        <li>
          <strong>The demolition triggered the abatement requirement.</strong> Federal and
          state law require that ACM be removed before demolition. This is a non-discretionary
          legal requirement imposed by NESHAP, Cal/OSHA, and local AQMD rules.
        </li>
        <li>
          <strong>The fire is the efficient proximate cause.</strong> Without the fire, there
          is no demolition requirement. Without the demolition requirement, there is no
          abatement requirement. The fire set the entire chain in motion. The asbestos was
          inert and would have remained so indefinitely. The fire &mdash; not the asbestos
          &mdash; is the efficient proximate cause of the abatement cost.
        </li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under this analysis, the pollution exclusion should not bar coverage because the
        efficient proximate cause of the entire chain &mdash; including the abatement cost
        &mdash; is a covered peril: fire. The asbestos is merely a condition of the property
        that increased the cost of complying with the demolition requirement. It did not cause
        the loss. It did not trigger the chain. It simply existed as a building component that
        had to be dealt with because the fire made demolition necessary.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        NESHAP and Cal/OSHA: Why Abatement Is Non-Negotiable
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Carriers sometimes attempt to characterize ACM abatement as voluntary or discretionary
        &mdash; implying that the building owner chose to incur the cost. This characterization
        is factually and legally wrong. Multiple layers of federal, state, and local regulation
        make abatement mandatory whenever demolition or renovation will disturb ACM.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>NESHAP (40 CFR Part 61, Subpart M).</strong> The EPA&rsquo;s National Emission
          Standards for Hazardous Air Pollutants for asbestos require that all regulated
          asbestos-containing material (RACM) be removed before demolition or renovation that
          would disturb it. The building owner must provide written notice to the EPA or
          delegated agency at least 10 working days before demolition begins. Failure to comply
          is a federal violation carrying penalties of up to $37,500 per day.
        </li>
        <li>
          <strong>Cal/OSHA (Title 8, Section 1529).</strong> California&rsquo;s asbestos
          regulations impose additional requirements on any work that may disturb ACM, including
          mandatory pre-demolition surveys, licensed contractor requirements, air monitoring,
          worker protection protocols, and specific disposal procedures. These requirements apply
          independently of NESHAP and are enforced by Cal/OSHA.
        </li>
        <li>
          <strong>Local AQMD rules.</strong> In Southern California, the South Coast Air Quality
          Management District (SCAQMD) Rule 1403 imposes notification, survey, removal, and
          disposal requirements that in some respects exceed federal standards. The Bay Area Air
          Quality Management District (BAAQMD) Regulation 11, Rule 2 imposes similar
          requirements in the San Francisco Bay Area. Other AQMDs throughout California have
          their own asbestos regulations.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The building owner has no choice. If the ordinance requires demolition, and the building
        contains ACM, abatement must occur before demolition can begin. The cost is as mandatory
        as the demolition itself.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Cost Magnitude: Why This Fight Matters
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The amounts at stake in ACM abatement disputes are often substantial enough to
        fundamentally alter the economics of a property claim. Abatement costs vary widely
        depending on the type, quantity, and accessibility of ACM, but representative ranges
        for commercial buildings include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Pipe and duct insulation abatement:</strong> $15 to $65 per linear foot,
          depending on accessibility and containment requirements
        </li>
        <li>
          <strong>Floor tile and mastic removal:</strong> $5 to $15 per square foot
        </li>
        <li>
          <strong>Ceiling texture removal:</strong> $8 to $25 per square foot
        </li>
        <li>
          <strong>Fireproofing and spray-applied insulation:</strong> $15 to $50 per square foot
        </li>
        <li>
          <strong>Full-building abatement:</strong> For a 20,000-square-foot commercial building
          with ACM throughout, total abatement costs can range from $150,000 to $500,000 or more
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        In many cases, the abatement cost exceeds the fire damage that triggered the entire
        chain of events. A $600,000 fire loss can generate a $400,000 abatement bill. If the
        carrier denies the abatement cost, the building owner faces a financial catastrophe
        that dwarfs the original loss.
      </p>

      <CalloutBox variant="info" title="Abatement Costs Are Increasing">
        <p>
          The pool of licensed asbestos abatement contractors is shrinking as regulatory
          requirements become more stringent and experienced workers retire. In California&rsquo;s
          major metropolitan areas, abatement costs have increased 20 to 40 percent over the past
          decade. The cost disparity between the original fire damage and the triggered abatement
          requirement is growing, making this coverage dispute increasingly consequential.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Coverage C Backup Argument: Increased Cost of Construction
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the Coverage B (demolition cost) argument faces resistance, policyholders have a
        secondary argument under Coverage C &mdash; Increased Cost of Construction. Coverage C
        under ISO CP 04 05 pays for the increased cost of rebuilding the damaged or demolished
        building to comply with current codes and ordinances.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The argument operates as follows: current building codes, environmental regulations, and
        workplace safety laws prohibit the use of asbestos-containing materials in new
        construction. When the building is rebuilt after the demolition, it will be constructed
        without ACM &mdash; using modern, code-compliant materials. The cost difference between
        rebuilding with the asbestos-containing materials that were in the original building
        (which is illegal) and rebuilding with compliant materials (which is required by
        current codes) is an &ldquo;increased cost of construction&rdquo; attributable to
        compliance with current ordinances and laws.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This argument is more attenuated than the Coverage B argument, but it provides a
        secondary path to coverage if the carrier&rsquo;s pollution exclusion argument gains
        traction on the demolition cost claim. Practically, the Coverage C argument is stronger
        for the cost of substitute materials (modern insulation replacing asbestos insulation,
        non-ACM floor tile replacing asbestos floor tile) than for the abatement cost itself.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Document and Present the Claim
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The way you present an ACM abatement claim can significantly affect whether the carrier
        covers it, disputes it, or outright denies it. The following approach positions the
        claim for the strongest possible outcome.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Frame the abatement as a demolition cost from day one.</strong> Do not present
          the abatement as a separate, standalone claim. Present it as a component of the
          demolition cost under Coverage B. The abatement is not a pollution cleanup &mdash; it
          is a legally mandated step in the demolition process. Your language matters. In every
          communication with the carrier, refer to the abatement as &ldquo;the pre-demolition
          asbestos removal required by NESHAP and Cal/OSHA before demolition can commence.&rdquo;
        </li>
        <li>
          <strong>Obtain the building department&rsquo;s written determination.</strong> Get a
          written notice from the local building department confirming that the ordinance or
          code requires demolition of the undamaged portion. This establishes the triggering
          event for Coverage B.
        </li>
        <li>
          <strong>Commission a pre-demolition asbestos survey.</strong> Hire a certified
          asbestos consultant to conduct a thorough survey of the building, identifying all
          ACM by type, location, quantity, and condition. This survey is required by NESHAP
          anyway, and it creates the factual foundation for the abatement cost estimate.
        </li>
        <li>
          <strong>Obtain competitive abatement bids.</strong> Get at least two or three bids
          from licensed asbestos abatement contractors. Detailed, itemized bids demonstrate that
          the abatement cost is real, reasonable, and verifiable &mdash; not speculative.
        </li>
        <li>
          <strong>Cite the regulatory requirements explicitly.</strong> In your claim
          presentation, cite NESHAP (40 CFR Part 61, Subpart M), Cal/OSHA (Title 8, Section
          1529), and the applicable local AQMD rule by number. Attach copies of the regulations.
          Make it clear that the building owner has no discretion &mdash; abatement is legally
          required before demolition can begin.
        </li>
        <li>
          <strong>Preempt the pollution exclusion argument.</strong> Address the pollution
          exclusion head-on in your claim presentation. Cite the efficient proximate cause
          doctrine, <em>MacKinnon v. Truck Insurance Exchange</em>, and the &ldquo;traditional
          environmental contamination&rdquo; limitation. Do not wait for the carrier to raise
          the exclusion &mdash; address it before they do.
        </li>
        <li>
          <strong>Separate the abatement cost from any contamination cleanup.</strong> If the
          fire itself caused asbestos fiber release (through heat damage to ACM, collapse of
          insulated components, etc.), distinguish between the cost of cleaning up the
          fire-caused contamination and the cost of removing intact ACM before demolition. The
          pre-demolition removal of intact ACM is the stronger claim because it is entirely
          driven by the demolition requirement, not by any release or dispersal of asbestos.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Practical Guidance for Building Owners with ACM
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you own a commercial building constructed before 1980, the probability that it
        contains some form of ACM is high. The following steps will help you prepare for the
        possibility that a covered loss triggers an abatement requirement.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Know what is in your building.</strong> Commission an asbestos survey now
          &mdash; before a loss occurs. An Operations &amp; Maintenance (O&amp;M) survey
          identifies all ACM in accessible areas. This baseline survey serves double duty: it
          satisfies Cal/OSHA&rsquo;s building owner notification requirements and gives you
          the information needed to purchase appropriate ordinance or law limits.
        </li>
        <li>
          <strong>Purchase adequate Ordinance or Law limits.</strong> Coverage B limits should
          account for potential abatement costs in addition to demolition costs. If your
          building contains significant ACM, the abatement cost could equal or exceed the
          demolition cost. Your broker should factor both into the Coverage B limit
          calculation. For a comprehensive discussion, see our{' '}
          <Link href="/resources/commercial-ordinance-law" className="text-blue-700 underline hover:text-blue-900">
            commercial ordinance or law coverage article
          </Link>
          .
        </li>
        <li>
          <strong>Review your policy&rsquo;s pollution exclusion language.</strong> Not all
          pollution exclusions are identical. Some include carve-backs or exceptions for
          substances that are building components (as opposed to industrial discharge). Some
          manuscript policies have negotiated modifications. Know what your specific policy
          says. See our{' '}
          <Link href="/resources/pollution-exclusion-claims" className="text-blue-700 underline hover:text-blue-900">
            pollution exclusion article
          </Link>{' '}
          for a detailed analysis.
        </li>
        <li>
          <strong>Consider requesting a pollution exclusion carve-back.</strong> Some carriers
          will negotiate an endorsement that expressly excludes ACM from the pollution exclusion
          when the abatement is triggered by a covered loss. This is the cleanest solution
          because it eliminates the coverage dispute entirely. It may increase your premium, but
          it removes ambiguity.
        </li>
        <li>
          <strong>Review your{' '}
          <Link href="/resources/commercial-endorsements" className="text-blue-700 underline hover:text-blue-900">
            commercial endorsements
          </Link>{' '}
          as a package.</strong> Ordinance or law coverage, the pollution exclusion, the{' '}
          <Link href="/resources/efficient-proximate-cause" className="text-blue-700 underline hover:text-blue-900">
            efficient proximate cause doctrine
          </Link>
          , and your specific policy&rsquo;s manuscript modifications all interact. Review them
          together, not in isolation.
        </li>
        <li>
          <strong>If a loss occurs, hire experienced professionals immediately.</strong> Retain
          a public adjuster experienced in commercial property claims, a certified asbestos
          consultant, and &mdash; if the carrier disputes coverage &mdash; an attorney who
          handles insurance coverage litigation. The intersection of ordinance or law coverage
          and the pollution exclusion is a specialized area where general knowledge is not
          sufficient.
        </li>
      </ul>

      <CalloutBox variant="warning" title="Do Not Accept a Pollution Exclusion Denial at Face Value">
        <p>
          When a carrier denies ACM abatement costs by citing the pollution exclusion, that
          denial is a coverage position &mdash; not a final determination. The efficient
          proximate cause doctrine, the &ldquo;traditional environmental contamination&rdquo;
          limitation, and the reasonable expectations doctrine all provide strong grounds for
          challenging the denial. Many carriers issue pollution exclusion denials knowing that
          a significant percentage of policyholders will accept them without dispute. Do not
          be one of those policyholders. The stakes are too high and the law is on your side.
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
