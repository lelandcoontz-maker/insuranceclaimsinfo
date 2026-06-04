import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title:
    'Landlord\'s Duty to Disclose Building Conditions to Commercial Tenants',
  description:
    'Asbestos, lead paint, mold history, prior water damage, roof age — what California landlords must disclose to commercial tenants, and how failure to disclose affects insurance claims and negligence actions.',
  summary:
    'California landlords must disclose known hazards to commercial tenants, including asbestos, lead, mold history, prior water damage, and roof age. Failure to disclose can affect insurance claims and expose the landlord to negligence liability.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational in nature and reflects the author&rsquo;s interpretation
          of California insurance law and landlord-tenant disclosure obligations as a Licensed
          Public Adjuster. It is not legal advice. Disclosure requirements depend on property
          type, lease terms, and specific regulatory frameworks. If you have a disputed claim
          involving non-disclosure of building conditions, consult with a licensed California
          attorney who specializes in insurance coverage disputes.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        You sign a commercial lease, invest $200,000 in a tenant build-out, open for business
        &mdash; and three months later discover asbestos in the ceiling tiles, mold behind
        the walls from a water damage event the landlord never mentioned, and a roof that was
        patched rather than replaced after failing five years ago. Your insurance claim is
        complicated by pre-existing conditions. Your remediation costs are multiplied by
        hazardous material handling requirements. And the landlord never said a word.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The question commercial tenants ask at this point is always the same: was the landlord
        required to tell me about these conditions before I signed the lease? In California,
        the answer depends on what the condition is, what the landlord knew, and which
        regulatory framework applies. For some conditions, the disclosure duty is explicit and
        statutory. For others, it emerges from common law principles of fraud and negligent
        misrepresentation. And for a few, the obligation falls into a gray area that has been
        the subject of considerable litigation.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        California Disclosure Requirements for Commercial Properties
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California law treats residential and commercial disclosure requirements differently.
        Residential landlords face extensive statutory disclosure obligations under Civil Code
        &sect;1102 et seq., which requires a Transfer Disclosure Statement covering a long
        list of property conditions. Commercial landlords are not subject to &sect;1102. But
        the absence of a comprehensive commercial disclosure statute does not mean commercial
        landlords have no disclosure duties.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Several sources of disclosure obligations apply to commercial properties:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>California Civil Code &sect;1938 (Disability Access):</strong> Requires
          commercial property owners to disclose whether the property has undergone inspection
          by a Certified Access Specialist (CASp) and, if so, whether the property meets
          applicable construction-related accessibility standards. This is a narrow but
          mandatory disclosure requirement.
        </li>
        <li>
          <strong>Common law fraud and concealment:</strong> Under California common law, a
          party to a transaction has a duty to disclose known material facts that are not
          readily observable and that the other party could not reasonably discover through
          due diligence. <em>Lingsch v. Savage</em> (1963) 213 Cal.App.2d 729 established
          that a seller (or landlord) who knows of defects not visible to the buyer (or
          tenant) has an affirmative duty to disclose them. Silence in the face of a duty
          to speak constitutes fraud.
        </li>
        <li>
          <strong>Environmental regulations:</strong> Federal and state environmental laws
          impose specific disclosure requirements for asbestos, lead paint, and contamination,
          discussed in detail below.
        </li>
        <li>
          <strong>Negligent misrepresentation:</strong> Under <em>B.L.M. v. Sabo &amp;
          Deitsch</em> (1997) 55 Cal.App.4th 823, a landlord who makes affirmative
          representations about the condition of the property &mdash; even without intent to
          deceive &mdash; can be liable if the representations are false and the tenant
          reasonably relies on them.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Asbestos and ACM Disclosure
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Asbestos-containing materials (ACM) are present in a significant percentage of
        commercial buildings constructed before 1980. Ceiling tiles, floor tiles, pipe
        insulation, fireproofing material, roofing, and even some drywall compounds can
        contain asbestos. When these materials are disturbed &mdash; during renovation,
        demolition, or even routine maintenance &mdash; they release airborne fibers that
        pose severe health risks.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Disclosure requirements for asbestos in commercial buildings arise from multiple
        regulatory frameworks:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>AHERA (Asbestos Hazard Emergency Response Act):</strong> While AHERA
          primarily targets schools, its requirements influenced Cal/OSHA regulations that
          apply to all workplaces. Building owners who have knowledge of ACM must communicate
          that information to tenants and employers whose employees may be exposed.
        </li>
        <li>
          <strong>Cal/OSHA (8 CCR &sect;1529):</strong> California&rsquo;s asbestos standard
          for construction and general industry requires building and facility owners to
          inform employers and employees about the presence, location, and quantity of ACM
          and presumed asbestos-containing materials (PACM) in buildings. This regulation
          effectively creates a disclosure obligation from the building owner to any tenant
          whose employees will work in the building.
        </li>
        <li>
          <strong>California Health &amp; Safety Code &sect;25915 et seq.:</strong> Requires
          building owners to notify tenants and employees when asbestos-related work
          (including surveys) has been performed, and to maintain records of known ACM
          locations. Notice must be provided within the scope specified by the statute.
        </li>
        <li>
          <strong>EPA NESHAP (40 CFR Part 61, Subpart M):</strong> Before any demolition or
          renovation of a commercial building, the owner or operator must conduct an asbestos
          inspection and follow notification and work practice requirements. While this is
          primarily a demolition/renovation regulation, it establishes the baseline expectation
          that building owners know whether ACM is present.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a detailed discussion of how asbestos and lead paint affect insurance claims, see
        our article on{' '}
        <Link href="/resources/asbestos-lead-claims" className="text-blue-700 underline hover:text-blue-900">
          asbestos and lead paint insurance claims
        </Link>.
      </p>

      <CalloutBox variant="warning" title="Asbestos Multiplies Every Claim">
        <p>
          When a covered loss (fire, water damage, storm) occurs at a building containing
          undisclosed asbestos, the remediation costs can increase by orders of magnitude.
          Standard water damage restoration might cost $50,000. The same restoration in a
          building with ACM &mdash; requiring licensed asbestos abatement contractors, air
          monitoring, proper disposal, and regulatory compliance &mdash; can cost $250,000
          or more. If the landlord failed to disclose known ACM, the tenant may have a
          negligence claim for the additional cost.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Lead Paint Disclosure
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The federal Residential Lead-Based Paint Hazard Reduction Act (42 U.S.C. &sect;4852d),
        commonly known as Title X, requires disclosure of known lead-based paint and lead-based
        paint hazards in housing built before 1978. This federal requirement applies to{' '}
        <em>residential</em> properties and does not directly apply to commercial-only
        buildings. However, several important nuances exist:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Mixed-use buildings:</strong> Properties that contain both commercial and
          residential units are subject to Title X disclosure requirements for the
          residential portions. If a commercial tenant leases space in a mixed-use building,
          the disclosure may not be required for the commercial unit itself &mdash; but the
          presence of lead paint in the building should inform the tenant&rsquo;s risk
          assessment.
        </li>
        <li>
          <strong>California Proposition 65:</strong> Cal. Health &amp; Safety Code
          &sect;25249.6 requires businesses to provide warnings when people may be exposed to
          chemicals known to cause cancer or reproductive harm. Lead is a listed chemical. A
          commercial building owner who knows lead paint is present may have Proposition 65
          obligations to employees and visitors.
        </li>
        <li>
          <strong>Cal/OSHA lead standards (8 CCR &sect;1532.1):</strong> Applies to any
          construction or maintenance work that may disturb lead-containing materials. If the
          landlord knows lead paint is present in a pre-1978 commercial building, Cal/OSHA
          regulations effectively require that information be communicated to any employer
          (including a tenant-employer) whose employees may be exposed during renovation or
          maintenance activities.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Mold and Water Damage History
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California does not have a specific statute requiring commercial landlords to disclose
        mold contamination or prior water damage history. Senate Bill 655 (2001) directed the
        California Department of Health Services (now CDPH) to develop mold standards, resulting
        in Health &amp; Safety Code &sect;26100 et seq. These provisions address mold assessment
        and remediation standards but do not create an explicit commercial lease disclosure
        mandate.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        However, the common law duty to disclose material facts applies. A landlord who knows
        that the building has a history of water intrusion, prior mold remediation, ongoing
        moisture problems, or chronic{' '}
        <Link href="/resources/tenant-roof-leak-coverage-gap" className="text-blue-700 underline hover:text-blue-900">
          roof leak issues
        </Link>{' '}
        has a duty to disclose those conditions under <em>Lingsch v. Savage</em> principles.
        These are material facts that would affect a reasonable tenant&rsquo;s decision to
        lease the property and the terms under which they would do so.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Mold history is particularly significant because:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Insurance implications:</strong> Many commercial property policies exclude
          or severely sublimit mold coverage. If a new water intrusion event leads to mold
          growth in a building with a prior mold history, the insurer may argue that the mold
          is a pre-existing condition, not a consequence of the current loss. Non-disclosure
          by the landlord leaves the tenant unable to anticipate or address this risk. For more
          on mold coverage, see our article on{' '}
          <Link href="/resources/mold-losses" className="text-blue-700 underline hover:text-blue-900">
            mold losses and insurance claims
          </Link>.
        </li>
        <li>
          <strong>Remediation costs:</strong> Mold that grows on surfaces previously
          contaminated with mold may be more aggressive and require more extensive
          remediation. Prior mold history also raises the question of whether the original
          remediation was adequate.
        </li>
        <li>
          <strong>Health liability:</strong> Tenants and their employees who are exposed to
          mold in a building where the landlord knew about prior contamination may have
          personal injury claims against the landlord.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Structural Deficiencies and Roof Condition
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The roof is the most common source of water intrusion claims in commercial properties.
        A landlord who knows that the roof is near or past its useful life, has been repeatedly
        patched rather than replaced, or has a history of leaks has a duty to disclose this
        information to prospective commercial tenants &mdash; particularly when the lease
        assigns maintenance or insurance obligations to the tenant.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Other structural conditions that may trigger a disclosure obligation include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Foundation issues:</strong> Settlement, cracking, water intrusion through
          the slab or basement walls, prior foundation repairs.
        </li>
        <li>
          <strong>HVAC deficiencies:</strong> Known inadequacies in the HVAC system,
          particularly problems with condensation management that could lead to moisture
          buildup and mold growth.
        </li>
        <li>
          <strong>Plumbing age and condition:</strong> Cast iron pipes approaching the end
          of their useful life, known galvanic corrosion issues, polybutylene piping, or
          prior sewer backups.
        </li>
        <li>
          <strong>Electrical system hazards:</strong> Aluminum wiring, Federal Pacific
          Electric panels, knob-and-tube wiring in older buildings, or other known electrical
          hazards that increase fire risk.
        </li>
        <li>
          <strong>Prior losses and claims:</strong> A history of insurance claims on the
          property may indicate recurring problems. While California does not require
          landlords to disclose prior claims as a statutory matter, a pattern of claims (such
          as multiple water damage losses) constitutes a material fact about the building
          condition.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Non-Disclosure Affects Insurance Claims
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a loss occurs at a commercial property and the tenant discovers undisclosed
        conditions, the insurance claim becomes more complex in several ways:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Pre-existing damage vs. new damage:</strong> The insurer will attempt to
          distinguish between damage caused by the current covered loss and damage that
          pre-existed the loss. If the landlord failed to disclose prior water damage, and
          the tenant&rsquo;s claim includes water-damaged materials that were damaged before
          the lease commenced, the insurer has a legitimate basis to exclude the pre-existing
          damage from coverage. The tenant is caught between the insurer (who will not pay for
          pre-existing damage) and the landlord (who concealed the pre-existing damage).
        </li>
        <li>
          <strong>Pollution exclusion complications:</strong> Asbestos, lead, and mold are
          frequently classified as pollutants under the standard{' '}
          <Link href="/resources/pollution-exclusion-claims" className="text-blue-700 underline hover:text-blue-900">
            pollution exclusion
          </Link>{' '}
          found in commercial property policies. When a covered peril (fire, water) damages
          a building containing undisclosed ACM or lead paint, the insurer may invoke the
          pollution exclusion to deny coverage for the hazardous material abatement costs
          &mdash; costs that may far exceed the direct physical damage from the covered peril.
        </li>
        <li>
          <strong>Increased cost of remediation:</strong> A routine water damage claim in a
          building with undisclosed asbestos becomes an asbestos abatement project governed
          by Cal/OSHA, NESHAP, and EPA regulations. The cost differential is not incremental
          &mdash; it can be tenfold or more. The insurer may pay for the water damage
          restoration but exclude the asbestos-related costs. The tenant is left with a
          massive bill for hazardous material handling that would not exist if the building
          did not contain ACM.
        </li>
        <li>
          <strong>Causation disputes:</strong> When multiple pre-existing conditions interact
          with a new peril, the insurer may argue that the resulting damage is not solely or
          even primarily caused by the covered peril. A roof leak in a building with existing
          moisture problems and mold history becomes a battleground over what the current
          event caused versus what was already there.
        </li>
      </ul>

      <CalloutBox variant="important" title="Non-Disclosure Creates a Three-Way Dispute">
        <p>
          When a landlord fails to disclose a material building condition and a loss occurs,
          the tenant faces a three-way dispute: (1) the insurer denies or limits coverage
          based on pre-existing conditions, exclusions, or causation arguments; (2) the
          landlord denies knowledge or responsibility; and (3) the tenant is left holding
          costs that neither the insurer nor the landlord wants to pay. The tenant&rsquo;s
          strongest position requires both an aggressive insurance claim <em>and</em> a
          separate negligence or fraud claim against the landlord.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Negligence Actions Against Non-Disclosing Landlords
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A commercial tenant who suffers losses due to undisclosed building conditions may have
        several causes of action against the landlord:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Fraud and intentional concealment (Cal. Civ. Code &sect;1572, &sect;1710):</strong>
          {' '}If the landlord knew about a defect, had a duty to disclose it, and intentionally
          concealed it to induce the tenant to enter the lease, the tenant may recover actual
          damages plus, in appropriate cases, punitive damages. Fraud requires proof of
          knowledge, intent, and reliance.
        </li>
        <li>
          <strong>Negligent misrepresentation:</strong> If the landlord made affirmative
          statements about the building&rsquo;s condition that were false (e.g., &ldquo;the
          roof was replaced in 2018&rdquo; when it was only patched), the tenant may recover
          damages under a negligent misrepresentation theory, even without proof of intent to
          deceive.
        </li>
        <li>
          <strong>Breach of the implied covenant of good faith and fair dealing:</strong>
          Every California contract includes an implied covenant of good faith and fair
          dealing &mdash; a long-standing common-law doctrine (it is not codified at Civil
          Code &sect;1654, which addresses contract ambiguity construction). A landlord who
          conceals known defects that undermine the tenant&rsquo;s ability to benefit from the
          lease may breach this covenant.
        </li>
        <li>
          <strong>Negligent maintenance:</strong> Independent of disclosure, a landlord who
          retains maintenance obligations under the lease (or who is responsible for
          conditions that pre-date the lease) can be liable for negligently maintaining the
          property in a condition that causes damage to the tenant&rsquo;s property or
          business.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Damages in a non-disclosure action may include the cost of remediation, business
        interruption losses, lost profits, relocation costs, and &mdash; in cases of
        intentional fraud &mdash; punitive damages. The tenant should also consider whether
        the landlord&rsquo;s non-disclosure constitutes a material breach of the lease,
        potentially excusing the tenant&rsquo;s ongoing performance.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Tenant&rsquo;s Right to Inspect
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Landlords who fail to disclose building conditions frequently assert that the tenant
        should have discovered the problems through their own due diligence. This defense has
        limits in California:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Concealed defects are not discoverable by inspection.</strong> Asbestos in
          ceiling tiles above a drop ceiling, mold behind sealed walls, deteriorated pipes
          inside walls, and roof membrane deficiencies visible only from above are not
          conditions a tenant can reasonably discover through a walkthrough inspection. The
          landlord&rsquo;s disclosure duty exists precisely because these conditions are
          hidden.
        </li>
        <li>
          <strong>Commercial tenants are not required to hire experts before leasing.</strong>
          While commercial tenants are generally assumed to be more sophisticated than
          residential tenants, California courts have not imposed a blanket requirement that
          commercial tenants hire environmental consultants, structural engineers, or
          roofing inspectors before signing a lease. The landlord&rsquo;s knowledge of known
          defects creates an independent duty to disclose, regardless of the tenant&rsquo;s
          inspection efforts.
        </li>
        <li>
          <strong>The &ldquo;as is&rdquo; clause is not absolute.</strong> Many commercial
          leases include an &ldquo;as is&rdquo; acceptance clause. While this may limit the
          tenant&rsquo;s claims for patent (visible) defects, California courts have held
          that an &ldquo;as is&rdquo; clause does not shield a landlord who actively conceals
          or fails to disclose known latent defects. <em>Loughrin v. Superior Court</em>
          (1993) 15 Cal.App.4th 1188 established that an &ldquo;as is&rdquo; clause does not
          protect against fraud.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        That said, tenants can and should conduct reasonable inspections before signing a
        commercial lease. A prudent tenant will:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Request documentation of the building&rsquo;s maintenance history, including any
          environmental reports, roof inspection reports, and prior insurance claims.</li>
        <li>Ask specific questions about asbestos, lead paint, prior water damage, mold
          remediation, and roof condition &mdash; in writing.</li>
        <li>Include a lease contingency allowing the tenant to conduct environmental testing
          and a physical inspection before the lease becomes binding.</li>
        <li>For pre-1980 buildings, consider commissioning an asbestos survey (Phase I
          assessment) before investing in a build-out that might disturb ACM.</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Building Conditions Affect Insurance Coverage
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Building conditions &mdash; whether disclosed or not &mdash; directly affect the scope
        and cost of insurance coverage:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Underwriting:</strong> When applying for commercial property insurance,
          carriers ask about building construction, age, condition, and known hazards.
          Asbestos, prior water damage, and roof age affect underwriting decisions. If the
          tenant is required to insure the building under a{' '}
          <Link href="/resources/commercial-lease-insurance" className="text-blue-700 underline hover:text-blue-900">
            NNN lease
          </Link>, the tenant needs accurate information about the building to obtain
          appropriate coverage. Undisclosed conditions can lead to inadequate coverage or
          material misrepresentation on the application.
        </li>
        <li>
          <strong>Exclusions:</strong> Commercial property policies commonly exclude or
          sublimit coverage for mold, asbestos, lead, pollution, and wear and tear. If the
          building contains these conditions and the tenant&rsquo;s policy excludes them, a
          loss that intersects with the excluded conditions can result in a partial or
          complete denial.
        </li>
        <li>
          <strong>Maintenance and neglect provisions:</strong> Most commercial property
          policies exclude damage caused by neglect or failure to maintain the property.
          If the landlord failed to maintain the roof and a roof leak causes interior
          damage, the insurer may invoke the neglect exclusion. The tenant is caught between
          a landlord who did not maintain the property and an insurer who will not pay for
          damage caused by deferred maintenance.
        </li>
        <li>
          <strong>Increased remediation costs:</strong> Even when the basic property damage
          is covered, the presence of hazardous materials can increase remediation costs
          beyond what the policy covers. The pollution exclusion may apply to the
          hazardous material handling, even though the triggering peril (fire, water) is
          covered.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Practical Steps for Tenants to Protect Themselves
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Every commercial tenant &mdash; whether entering a new lease or already occupying a
        space &mdash; should take these steps to minimize the risk of being blindsided by
        undisclosed building conditions:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Ask in writing.</strong> Before signing the lease, send the landlord a
          written questionnaire asking about asbestos, lead paint, prior water damage, mold
          history, roof age and condition, prior insurance claims, environmental contamination,
          and any pending code violations. Written questions create a record. If the landlord
          provides false answers, the written record supports a fraud claim.
        </li>
        <li>
          <strong>Request maintenance and inspection records.</strong> Ask for copies of roof
          inspection reports, environmental surveys, plumbing inspections, and any prior
          remediation documentation. A landlord who refuses to provide records is telling you
          something.
        </li>
        <li>
          <strong>Negotiate a disclosure warranty in the lease.</strong> Include a lease
          provision requiring the landlord to represent and warrant that, to the landlord&rsquo;s
          knowledge, the building does not contain asbestos, lead paint, mold, or other
          hazardous materials &mdash; or, if it does, that the landlord has disclosed those
          conditions. This gives the tenant a contractual remedy in addition to common law
          claims.
        </li>
        <li>
          <strong>Conduct your own inspection.</strong> For any significant lease commitment,
          invest in a pre-lease building inspection. A Phase I Environmental Site Assessment
          addresses soil and groundwater contamination. An asbestos survey addresses ACM.
          A roof inspection addresses remaining useful life. These inspections cost money but
          pale in comparison to the cost of discovering problems after move-in.
        </li>
        <li>
          <strong>Review your insurance policy with disclosure in mind.</strong> Make sure
          your commercial property policy does not exclude conditions that may exist in the
          building. If the building is pre-1980, discuss asbestos coverage with your agent.
          If the building has a flat roof, discuss water intrusion coverage. If the building
          has any history of moisture problems, discuss mold coverage and sublimits.
        </li>
        <li>
          <strong>Document the building condition at lease commencement.</strong> Photograph
          and video the entire premises at move-in. Note the condition of ceilings, walls,
          floors, roof access areas, plumbing fixtures, and HVAC systems. This baseline
          documentation is critical for distinguishing new damage from pre-existing conditions
          if a loss occurs later.
        </li>
      </ol>

      <CalloutBox variant="tip" title="Related Reading">
        <ul className="list-disc pl-4 space-y-1">
          <li>
            <Link href="/resources/pollution-exclusion-claims" className="text-blue-700 underline hover:text-blue-900">
              Pollution Exclusion Claims
            </Link>{' '}
            &mdash; how the pollution exclusion affects asbestos, lead, and mold claims
          </li>
          <li>
            <Link href="/resources/asbestos-lead-claims" className="text-blue-700 underline hover:text-blue-900">
              Asbestos and Lead Paint Insurance Claims
            </Link>{' '}
            &mdash; navigating hazardous material claims in property insurance
          </li>
          <li>
            <Link href="/resources/mold-losses" className="text-blue-700 underline hover:text-blue-900">
              Mold Losses and Insurance Claims
            </Link>{' '}
            &mdash; how mold affects your property claim
          </li>
          <li>
            <Link href="/resources/tenant-roof-leak-coverage-gap" className="text-blue-700 underline hover:text-blue-900">
              Tenant Roof Leak Coverage Gap
            </Link>{' '}
            &mdash; the coverage gap when the roof leaks and nobody pays
          </li>
          <li>
            <Link href="/resources/commercial-lease-insurance" className="text-blue-700 underline hover:text-blue-900">
              Commercial Lease Insurance Requirements
            </Link>{' '}
            &mdash; understanding what your lease requires you to insure
          </li>
        </ul>
      </CalloutBox>
      <p className="text-sm text-gray-500 mt-4 italic">
        Written by Leland Coontz III, Licensed Public Adjuster, CA License #2B53445.
      </p>
    </>
  )
}
