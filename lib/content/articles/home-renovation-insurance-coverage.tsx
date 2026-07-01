import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: "Home Insurance During Renovation: Coverage Gaps",
  description:
    "Renovating your home can create serious coverage gaps: increase in hazard, vacancy triggers, contractor liability exposure, and permit issues during work.",
  summary:
    'Renovating can open serious coverage gaps: an increase-in-hazard condition, vacancy triggers if you move out, contractor liability exposure, and permit issues. Tell your insurer before major work and confirm coverage continues during construction.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        A homeowner decides to renovate the kitchen. Or add a second story. Or gut the house down to
        the studs and rebuild. In every case, the homeowner assumes that the existing homeowner
        insurance policy will continue to protect the property during construction. That assumption
        is frequently wrong &mdash; and the consequences of being wrong can be devastating.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The standard HO-3 homeowner policy was designed to insure an occupied, maintained residence.
        It was not designed to insure a home under active construction. Renovations introduce risks
        that the policy either does not contemplate or actively excludes: open walls exposing the
        structure to weather, electrical and plumbing work creating new hazards, heavy equipment on
        site, unfamiliar workers entering the premises daily, and sometimes the homeowner moving out
        entirely while the work is completed. Each of these conditions can trigger policy provisions
        that reduce, restrict, or eliminate coverage at the exact moment the property is most
        vulnerable.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This article explains why renovations create coverage problems, identifies the specific gaps
        that catch homeowners mid-project, and provides practical guidance on how to maintain
        continuous protection throughout the construction process.
      </p>

      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational and reflects general principles of property insurance as they
          apply to home renovations. Every policy is different, and every renovation project presents
          unique facts. Homeowners should review their specific policy language and consult with a
          licensed insurance professional or attorney before beginning any renovation project.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why Renovations Create Coverage Problems
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The fundamental issue is that a home under renovation is not the same risk that the insurer
        agreed to cover when it wrote the policy. Insurance pricing is based on a risk profile that
        assumes the home is in a certain condition, occupied by the named insured, and maintained in
        a manner consistent with normal residential use. A renovation changes all of those
        assumptions, sometimes dramatically.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The &ldquo;Increase in Hazard&rdquo; Condition
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most homeowner policies contain a condition requiring the insured to notify the insurer of
        any change that materially increases the hazard insured against. This is sometimes called the
        &ldquo;increase in hazard&rdquo; or &ldquo;change in risk&rdquo; provision. A renovation
        project can trigger this condition in multiple ways:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Open walls and exposed framing</strong> increase vulnerability to weather damage,
          fire spread, and pest intrusion
        </li>
        <li>
          <strong>Electrical work in progress</strong> creates fire risk from temporary wiring,
          exposed connections, and circuits under load testing
        </li>
        <li>
          <strong>Plumbing modifications</strong> create water damage risk from temporarily capped
          lines, new connections under pressure testing, and open drain systems
        </li>
        <li>
          <strong>Demolition debris</strong> on site creates fire, trip-and-fall, and environmental
          hazards
        </li>
        <li>
          <strong>Heavy construction equipment</strong> on the property increases the risk of
          accidental damage to the structure and to neighboring properties
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        If an insurer determines that a renovation materially increased the hazard and the
        policyholder failed to provide notice, the insurer may argue that coverage is voided or
        limited for any loss that occurs during the construction period. Whether this argument
        succeeds depends on the specific policy language, the nature of the renovation, and the
        applicable state law. In California, insurers must demonstrate actual prejudice from the
        failure to notify &mdash; but that is a defense the policyholder must raise after a denial
        has already occurred. The better approach is to notify the insurer before work begins and
        avoid the dispute entirely.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Vacancy and Unoccupancy Triggers
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a renovation is extensive enough to require the homeowner to move out during
        construction, the property may become &ldquo;vacant&rdquo; or &ldquo;unoccupied&rdquo; under
        the policy&rsquo;s definitions. These are not the same thing, and the distinction matters.
        Most HO-3 policies define a property as vacant when it lacks both occupants and a
        substantial amount of personal property. A property is unoccupied when the residents are
        temporarily absent but their belongings remain. For a detailed explanation of these
        definitions and their implications, see{' '}
        <Link href="/resources/vacancy-unoccupancy" className="text-[#2E74B5] underline">
          Vacancy vs. Unoccupancy: Why the Distinction Matters
        </Link>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many policies contain a vacancy exclusion or limitation that activates after the property has
        been vacant for a specified period &mdash; commonly 60 days. After that threshold is reached,
        certain coverages may be suspended entirely (vandalism and malicious mischief are typically
        the first to go), and other coverages may be reduced by a percentage (often 15 percent). A
        major renovation that displaces the homeowner for three or four months can easily trigger
        these provisions.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The critical question is whether a home under active renovation qualifies as
        &ldquo;vacant.&rdquo; Contractors and workers may be present on the property daily, tools
        and materials may fill the rooms, and the property may be actively maintained. But workers
        and construction materials are not &ldquo;occupants&rdquo; and are not &ldquo;personal
        property&rdquo; in the policy&rsquo;s sense. An insurer may argue that despite daily
        construction activity, the home is vacant because no one is living there and no household
        furnishings are present. This is exactly the type of coverage dispute that can be avoided
        with advance planning and insurer notification.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Liability Exposure from Contractors on Premises
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A renovation brings multiple people onto the property who are not members of the
        household &mdash; contractors, subcontractors, delivery drivers, inspectors, and laborers.
        Each person on the property creates potential liability exposure. If a worker is injured on
        the job site, if a subcontractor damages a neighbor&rsquo;s property, or if a delivery
        driver trips on debris left in the driveway, the question of who is liable and whose
        insurance responds becomes complicated quickly.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The homeowner&rsquo;s policy provides personal liability coverage (personal liability) and medical
        payments to others (Medical Payments), but these coverages were designed for typical residential
        liability scenarios &mdash; a guest slipping on a wet floor, a child injured on a
        trampoline, a dog bite. Whether these coverages extend to construction-related injuries
        depends on the specific facts and policy language. Some policies contain exclusions for
        injuries to employees of the insured, and an insurer may argue that construction workers
        operating under the homeowner&rsquo;s direction fall into a gray area.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Specific Coverage Gaps During Renovation
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Building Materials Stored on Site Before Installation
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A common scenario: the contractor delivers $30,000 worth of custom cabinets, hardwood
        flooring, and granite countertops to the job site two weeks before installation begins. A
        storm damages the materials. Or they are stolen overnight. Whose insurance covers this loss?
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The answer depends on the contractual arrangement and the specific policy language. Under the
        homeowner&rsquo;s policy, building materials that have not yet been installed are generally
        not part of the &ldquo;dwelling&rdquo; (dwelling). They may be considered personal
        property (personal property), but personal property coverage under an HO-3 is named-peril, not
        open-peril, and there may be questions about whether materials purchased for installation
        qualify as the insured&rsquo;s &ldquo;personal property.&rdquo; If the contractor purchased
        the materials and has not yet been paid, title may still rest with the contractor, meaning
        the homeowner&rsquo;s policy has no insurable interest in them at all.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under a{' '}
        <Link href="/resources/builders-risk" className="text-[#2E74B5] underline">
          builder&rsquo;s risk policy
        </Link>, materials stored on site and in transit are typically covered. This is one of the
        most important reasons to consider builder&rsquo;s risk coverage for any significant
        renovation.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Theft of Building Materials
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Theft from construction sites is a pervasive problem. Copper wiring, appliances, lumber,
        fixtures, and tools are frequent targets. Whether theft of building materials is covered
        depends on several factors: whether the materials had been installed (making them part of the
        dwelling), whether the vacancy exclusion has been triggered (many policies exclude theft from
        vacant properties), and whether the theft occurred during a period when the policy was in
        full effect without any construction-related limitations.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the property qualifies as vacant under the policy, theft coverage is likely excluded. Even
        if the property is not vacant, the insurer may argue that materials not yet installed are not
        covered property. Again, a builder&rsquo;s risk policy addresses this gap directly.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Contractor Damage During Construction
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A plumber accidentally cuts through a water line behind a wall. A roofer drops a bundle of
        shingles through an unsupported section of decking. An electrician starts a small fire with a
        soldering torch. These are not hypothetical scenarios &mdash; they happen on construction
        sites regularly. The homeowner&rsquo;s first instinct is to file a claim on the
        homeowner&rsquo;s policy. But the insurer may deny the claim on the grounds that the
        contractor&rsquo;s negligence is the contractor&rsquo;s problem, and the contractor&rsquo;s
        commercial general liability (CGL) policy should respond.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In theory, this is correct &mdash; a properly insured contractor should carry CGL coverage
        that responds to damage caused by the contractor&rsquo;s operations. In practice, gaps exist.
        The contractor may be underinsured or uninsured. The CGL policy may have a deductible that
        the contractor cannot afford. The contractor may dispute responsibility for the damage. The
        CGL insurer may take the position that the damage was to the contractor&rsquo;s own work
        product, which is excluded under most CGL policies. And the homeowner is left in the middle,
        trying to get someone to pay for the damage.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Permit Issues and Their Impact on Coverage
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Work performed without required{' '}
        <Link href="/resources/building-permits-claims" className="text-[#2E74B5] underline">
          building permits
        </Link>{' '}
        creates a potential coverage problem that extends well beyond the renovation period. If
        unpermitted work causes or contributes to a loss &mdash; for example, unpermitted electrical
        work causes a fire &mdash; the insurer may deny the claim on the grounds that the
        unpermitted work constituted a material increase in hazard, a violation of law, or an act of
        negligence by the insured. Whether the insurer can successfully invoke these defenses depends
        on the policy language and the causal relationship between the unpermitted work and the loss,
        but the existence of unpermitted work gives the insurer a basis for investigation and
        potential denial that would not exist if proper permits had been obtained.
      </p>

      <CalloutBox variant="warning" title="Unpermitted Work Can Haunt Future Claims">
        <p>
          Unpermitted renovation work does not just create problems during construction. If a claim
          arises years later and the insurer discovers that prior unpermitted work contributed to
          the loss, the existence of that unpermitted work can become a basis for denial or
          reduced payment. Always obtain the required permits for any work that requires them.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Builder&rsquo;s Risk Policy vs. Renovation Endorsement
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The two primary insurance solutions for renovation coverage gaps are a standalone{' '}
        <Link href="/resources/builders-risk" className="text-[#2E74B5] underline">
          builder&rsquo;s risk policy
        </Link>{' '}
        and a renovation endorsement added to the existing homeowner policy. Understanding when each
        is appropriate is critical.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        When a Builder&rsquo;s Risk Policy Is Necessary
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A builder&rsquo;s risk policy is a specialized construction insurance product designed to
        cover buildings during construction or major renovation. It typically covers the existing
        structure, materials in transit and stored on site, and the completed value of the
        renovation. Builder&rsquo;s risk policies are generally appropriate when:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>The renovation involves major structural work (additions, second stories, gut renovations)</li>
        <li>The homeowner will vacate the property during construction</li>
        <li>The project value exceeds $50,000 to $100,000</li>
        <li>The construction timeline exceeds 60 days (the typical vacancy trigger)</li>
        <li>The project involves demolition of substantial portions of the existing structure</li>
        <li>Expensive materials will be stored on site before installation</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Builder&rsquo;s risk policies are written for a specific project, with a defined coverage
        period matching the expected construction timeline. They can be purchased by the homeowner or
        by the general contractor, and the cost is typically a percentage of the total project value.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        When a Renovation Endorsement May Be Sufficient
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        For smaller renovations where the homeowner will remain in the home &mdash; a kitchen
        remodel, a bathroom renovation, replacing windows, or upgrading HVAC systems &mdash; a
        renovation endorsement added to the existing homeowner policy may provide adequate
        protection. These endorsements vary by insurer, but they generally acknowledge that
        construction is taking place, maintain coverage during the renovation period, and may
        increase the dwelling coverage limit to reflect the enhanced value of the home after
        renovation. They are less expensive than a standalone builder&rsquo;s risk policy and
        simpler to obtain.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The key limitation of a renovation endorsement is that it modifies the homeowner policy
        rather than replacing it with a construction-specific product. The homeowner policy&rsquo;s
        underlying exclusions, conditions, and limitations still apply unless the endorsement
        specifically overrides them. A renovation endorsement will not typically cover materials in
        transit, provide the same breadth of construction-related coverage as a builder&rsquo;s risk
        policy, or address the vacancy issue if the homeowner moves out.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Contractor Insurance Requirements
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The homeowner&rsquo;s own insurance is only part of the equation. The contractor&rsquo;s
        insurance is equally important, and verifying it before work begins is one of the most
        important protective steps a homeowner can take.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Commercial General Liability (CGL)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Every contractor working on a residential property should carry CGL insurance. This coverage
        responds to bodily injury and property damage caused by the contractor&rsquo;s operations.
        Homeowners should request a certificate of insurance showing current CGL coverage with limits
        of at least $1,000,000 per occurrence and should be named as an additional insured on the
        contractor&rsquo;s policy. Being named as an additional insured means the contractor&rsquo;s
        CGL policy will also defend and indemnify the homeowner for claims arising from the
        contractor&rsquo;s work.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Workers&rsquo; Compensation
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        In California, any contractor with employees is required to carry workers&rsquo; compensation
        insurance. If a worker is injured on the homeowner&rsquo;s property and the contractor does
        not carry workers&rsquo; compensation, the injured worker may pursue a claim directly against
        the homeowner. This is a significant liability exposure that the homeowner&rsquo;s policy may
        not fully address. Homeowners should verify workers&rsquo; compensation coverage before any
        work begins and should not accept a contractor&rsquo;s verbal assurance &mdash; request the
        certificate of insurance.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Contractor&rsquo;s Builder&rsquo;s Risk
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some general contractors carry their own builder&rsquo;s risk policies that cover projects
        they are working on. If the contractor carries builder&rsquo;s risk, the homeowner should
        verify that the policy covers the full project value, names the homeowner as an insured or
        loss payee, and does not contain exclusions that would leave the homeowner unprotected. A
        contractor&rsquo;s builder&rsquo;s risk policy may not cover the existing structure &mdash;
        only the new construction work &mdash; which would leave a gap that the homeowner&rsquo;s
        policy needs to fill.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        California CSLB Licensing and Its Impact on Coverage
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        In California, contractors performing work valued at $500 or more must hold an active license
        issued by the Contractors State License Board (CSLB). Using an unlicensed contractor creates
        multiple problems, including insurance implications. For a comprehensive discussion of CSLB
        licensing requirements and their intersection with insurance claims, see{' '}
        <Link href="/resources/cslb-licensing-requirements" className="text-[#2E74B5] underline">
          CSLB Licensing Requirements and Insurance Claims
        </Link>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        From an insurance perspective, work performed by an unlicensed contractor may be considered
        unpermitted (since permits typically require a licensed contractor), which triggers the
        permit-related coverage concerns discussed above. Also, if the unlicensed contractor
        causes damage, the contractor is unlikely to carry proper insurance, leaving the homeowner
        with no viable source of recovery other than the homeowner&rsquo;s own policy &mdash; which
        may deny the claim based on the homeowner&rsquo;s negligence in hiring an unlicensed
        contractor. California law also limits an unlicensed contractor&rsquo;s ability to enforce a
        contract or sue for payment, which further incentivizes homeowners to verify licensing before
        work begins.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Notifying the Insurer Before Starting Work
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The single most important step a homeowner can take to protect insurance coverage during a
        renovation is to notify the insurer before construction begins. This notification
        accomplishes several critical objectives:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Eliminates the &ldquo;increase in hazard&rdquo; defense:</strong> If the insurer
          is notified and does not cancel or modify the policy, it cannot later claim that it was
          unaware of the increased risk
        </li>
        <li>
          <strong>Creates a record of disclosure:</strong> Written notification creates documented
          evidence that the homeowner acted in good faith and complied with policy conditions
        </li>
        <li>
          <strong>Allows the insurer to offer appropriate coverage:</strong> The insurer may
          recommend a renovation endorsement, a builder&rsquo;s risk policy, or an increase in
          coverage limits to account for the enhanced value of the property after renovation
        </li>
        <li>
          <strong>Addresses the vacancy issue proactively:</strong> If the homeowner will need to
          move out, the insurer can issue a vacancy permit or modify the policy to maintain coverage
          during the unoccupied period
        </li>
        <li>
          <strong>Updates the dwelling coverage amount:</strong> After a renovation, the cost to
          rebuild the home is higher. If the dwelling coverage limit is not increased, the homeowner
          may be underinsured
        </li>
      </ul>

      <CalloutBox variant="tip" title="What to Include in the Notification">
        <p>
          When notifying the insurer, provide the scope of the renovation, the estimated project
          cost, the expected start and completion dates, whether the homeowner will vacate during
          construction, the general contractor&rsquo;s name and license number, and a copy of the
          contractor&rsquo;s certificate of insurance. Send the notification in writing and keep a
          copy. Verbal notification is better than nothing, but written notification is
          significantly more protective.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Protecting Yourself During the Project
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Beyond insurer notification, homeowners can take several practical steps to protect
        themselves and their insurance coverage throughout the renovation process:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Verify contractor licensing and insurance before signing a contract.</strong> Check
          the contractor&rsquo;s CSLB license status online and request certificates of insurance
          for CGL, workers&rsquo; compensation, and any builder&rsquo;s risk coverage. See{' '}
          <Link href="/resources/choosing-your-contractor" className="text-[#2E74B5] underline">
            Choosing Your Contractor
          </Link>{' '}
          for detailed guidance.
        </li>
        <li>
          <strong>Obtain all required building permits.</strong> Ensure the contractor pulls all
          necessary permits before work begins and that inspections are completed at each required
          stage.
        </li>
        <li>
          <strong>Document the pre-renovation condition of the home.</strong> Take detailed
          photographs and video of every room, every surface, and every system before demolition
          begins. This documentation is invaluable if a claim arises during or after the renovation.
        </li>
        <li>
          <strong>Review the construction contract for insurance provisions.</strong> The contract
          should specify which party is responsible for obtaining builder&rsquo;s risk coverage,
          require the contractor to maintain CGL and workers&rsquo; compensation insurance
          throughout the project, and include an indemnification clause requiring the contractor to
          hold the homeowner harmless for damage caused by the contractor&rsquo;s operations.
        </li>
        <li>
          <strong>Maintain security at the job site.</strong> Secure the property when workers are
          not present. Lock gates, secure openings, and consider temporary fencing if the renovation
          creates access points that did not previously exist. Theft from unattended construction
          sites is common, and demonstrating reasonable security measures strengthens any theft claim.
        </li>
        <li>
          <strong>Update the dwelling coverage limit after the renovation is complete.</strong> The
          cost to replace the home has increased. If the dwelling limit is not updated, the
          homeowner may face a{' '}
          <Link href="/resources/replacement-cost-vs-guaranteed" className="text-[#2E74B5] underline">
            replacement cost shortfall
          </Link>{' '}
          on a future claim.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What to Do If a Loss Occurs During Renovation
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If a covered peril damages the property during a renovation, the claims process becomes more
        complex than a typical homeowner claim. Multiple insurance policies may be involved &mdash;
        the homeowner&rsquo;s policy, the contractor&rsquo;s CGL, a builder&rsquo;s risk policy if
        one exists, and possibly the contractor&rsquo;s own property coverage for tools and
        equipment. Determining which policy responds to which portion of the loss requires a careful
        analysis of each policy&rsquo;s terms, the cause of the loss, and the ownership of the
        damaged property.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The homeowner should report the loss to all potentially applicable insurers &mdash; not just
        one. Report to the homeowner&rsquo;s insurer, notify the contractor, and if a builder&rsquo;s
        risk policy exists, file a claim under that policy as well. Failing to notify a potentially
        applicable insurer can result in a late notice defense that bars recovery under that policy.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Document the loss thoroughly. Photograph everything before any cleanup or temporary repairs
        begin. Preserve damaged materials when possible. Keep detailed records of all costs incurred
        as a result of the loss, including any delay costs, additional living expenses if the
        renovation delay extends the period of displacement, and the cost of re-ordering damaged
        materials.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Bottom Line
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Home renovations are exciting, but they create real insurance coverage gaps that can leave
        homeowners financially exposed at the worst possible time. The standard homeowner policy was
        not designed to cover a home under construction, and the gaps it leaves &mdash; materials in
        transit and on site, vacancy exclusions, contractor liability, permit issues &mdash; can
        result in denied or significantly reduced claims.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The solution is straightforward but requires advance planning: notify the insurer before work
        begins, verify contractor licensing and insurance, obtain all required permits, consider
        builder&rsquo;s risk coverage for major projects, and document everything. Homeowners who
        take these steps before construction begins will be far better positioned if something goes
        wrong during the project.
      </p>
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
