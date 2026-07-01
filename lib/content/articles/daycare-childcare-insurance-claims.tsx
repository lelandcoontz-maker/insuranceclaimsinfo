import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title:
    "Daycare and Childcare Facility Insurance Claims",
  description:
    "Licensing reinspections, abuse exclusions, parent retention during shutdown, and regulatory hurdles create coverage gaps California operators rarely anticipate.",
  summary:
    'Daycare and childcare facilities face unique exposures: licensing re-inspections that prolong closures, abuse and molestation exclusions, parent retention during shutdowns, and regulatory gaps. California operators should confirm their coverage addresses these specific risks.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational in nature and reflects the author&rsquo;s interpretation
          of California insurance law as a Licensed Public Adjuster. It is not legal advice.
          Daycare and childcare insurance involves specialized policy forms, licensing
          regulations, and liability exposures that vary by facility type and jurisdiction. If
          you have a disputed claim involving a childcare facility, consult with a licensed
          California attorney who specializes in insurance coverage disputes.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        A kitchen fire damages a daycare center. The property damage is repaired in eight weeks.
        But the program cannot reopen for five months &mdash; because the state must re-inspect
        and re-license the facility before a single child can walk through the door. During those
        five months, 80% of the enrolled families find other care. When the doors finally reopen,
        the program has lost its client base, its revenue, and in many cases its viability as a
        business.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Daycare and childcare facilities occupy a uniquely vulnerable position in the insurance
        landscape. They combine the property exposure of a commercial business with the liability
        exposure of a professional service provider, the regulatory burden of a licensed facility,
        and the reputational fragility of an enterprise built entirely on parental trust. A claim
        that would be manageable for most businesses can be existential for a childcare program,
        and the insurance products available to the industry are riddled with gaps that most
        operators do not discover until it is too late.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Why Daycare Facilities Face Unique Insurance Vulnerabilities
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The childcare industry sits at the intersection of several high-exposure insurance
        categories:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>You are responsible for the most vulnerable population.</strong> Children
          cannot protect themselves, cannot assess risk, and cannot consent to activities.
          Liability standards for childcare providers are among the highest of any industry.
        </li>
        <li>
          <strong>Your revenue depends on a license that can be suspended at any time.</strong>{' '}
          Unlike a restaurant that can operate while seeking a new health permit, a daycare
          facility cannot legally accept children without a valid license. Any event that triggers
          a licensing review shuts you down completely.
        </li>
        <li>
          <strong>Your clients have zero tolerance for disruption.</strong> Working parents
          cannot wait weeks or months for their childcare provider to reopen. They find
          alternative care within days, and most never return. The business income loss extends
          far beyond the physical repair period.
        </li>
        <li>
          <strong>Your exposure includes both premises and professional liability.</strong> A
          child who falls on the playground is a premises liability claim. A child who is injured
          because of inadequate supervision is a professional liability claim. These are covered
          by different policies with different terms, and the line between them is often disputed.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Property Damage and the Licensing Re-Inspection Problem
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a childcare facility suffers property damage from fire, water, or any other covered
        peril, the physical repairs are only the beginning. In California, the Department of
        Social Services &mdash; Community Care Licensing Division (CCLD) must inspect and
        re-license the facility before it can reopen. This process involves:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Notification to CCLD that the facility has been damaged and is temporarily closed</li>
        <li>
          A fire clearance from the local fire authority (often requiring a separate inspection
          after repairs are complete)
        </li>
        <li>A health and safety inspection by the local health department</li>
        <li>
          A CCLD re-licensing inspection covering physical plant, equipment, staffing ratios,
          emergency plans, and compliance with Title 22 regulations
        </li>
        <li>
          Resolution of any pre-existing compliance issues that CCLD identifies during the
          re-inspection (which may trigger ordinance or law exposure)
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Each of these inspections operates on its own timeline. CCLD inspectors are chronically
        understaffed. A facility that completes physical repairs in six weeks may wait an
        additional eight to twelve weeks for all required inspections and re-licensing. During
        this entire period, the facility generates zero revenue.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurance implications are significant. The standard ISO <strong>period of
        restoration</strong> ends when the property &ldquo;should be repaired, rebuilt, or
        replaced with reasonable speed and similar quality.&rdquo; Carriers will argue that the
        period of restoration ends when physical repairs are complete, not when the licensing
        process is finished. The policyholder&rsquo;s position &mdash; and the correct one
        &mdash; is that the property cannot be used for its intended purpose until it is licensed,
        and therefore the period of restoration extends until licensing is obtained. For a
        detailed analysis of period of restoration disputes, see our article on{' '}
        <Link
          href="/resources/period-of-restoration-disputes"
          className="text-blue-700 underline hover:text-blue-900"
        >
          Period of Restoration Disputes
        </Link>.
      </p>

      <CalloutBox variant="warning" title="The Ordinance or Law Trigger">
        <p>
          If CCLD identifies code violations during the re-inspection that must be corrected
          before re-licensing &mdash; even if those violations pre-date the loss &mdash; the
          cost of bringing the facility into compliance may be covered under{' '}
          <Link
            href="/resources/ordinance-law"
            className="text-blue-700 underline hover:text-blue-900"
          >
            Ordinance or Law coverage
          </Link>. This coverage pays for the increased cost of construction required to comply
          with building codes, fire codes, and other regulations that are enforced as part of the
          repair process. Many daycare operators do not carry this coverage or carry inadequate
          limits. If your facility was built or last renovated more than ten years ago, current
          code compliance costs during a rebuild can be substantial.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Abuse and Molestation Coverage: The Exclusion That Devastates Programs
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        No coverage issue in childcare insurance is more critical &mdash; or more frequently
        misunderstood &mdash; than abuse and molestation (A&amp;M) coverage. Here is the reality
        that most daycare operators do not know until they face a claim:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Most standard CGL policies exclude abuse and molestation.</strong> The
          exclusion applies to any claim arising from actual or alleged abuse, molestation, or
          sexual misconduct &mdash; whether committed by an employee, volunteer, or any person
          on the premises. The exclusion is absolute: it eliminates both the duty to defend and
          the duty to indemnify.
        </li>
        <li>
          <strong>Standalone A&amp;M coverage is available but limited.</strong> Specialized
          A&amp;M policies or endorsements can be purchased, but they typically carry low limits
          ($100,000 to $500,000 per occurrence is common), and the coverage is claims-made rather
          than occurrence-based. Given the severity of A&amp;M claims, these limits are often
          grossly inadequate.
        </li>
        <li>
          <strong>The &ldquo;arising from&rdquo; language is interpreted broadly.</strong>{' '}
          Carriers apply the A&amp;M exclusion not just to the abuse itself but to any claim that
          &ldquo;arises from&rdquo; the abuse &mdash; including claims for negligent hiring,
          negligent supervision, negligent retention, failure to report, and emotional distress
          of non-victim family members. A single allegation can eliminate coverage for an entire
          web of related claims.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        California&rsquo;s mandatory reporter laws (Penal Code &sect; 11164 et seq.) require
        childcare workers to report suspected abuse or neglect. The interaction between the
        duty to report and insurance is complex: an operator who reports suspected abuse triggers
        an investigation that may lead to claims; an operator who fails to report faces criminal
        liability and even greater civil exposure. In either scenario, the A&amp;M exclusion
        eliminates the coverage the operator needs most.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        General Liability for Child Injury vs. Professional Liability for Negligent Supervision
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Childcare claims often straddle the line between general liability and professional
        liability, and the characterization of the claim determines which policy responds:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>General liability (CGL).</strong> Covers bodily injury caused by a premises
          condition or a completed operation. A child who trips on a broken step, is injured by
          a falling shelf, or has an allergic reaction to a cleaning product used on the premises
          &mdash; these are premises liability claims covered by the CGL.
        </li>
        <li>
          <strong>Professional liability (errors and omissions).</strong> Covers claims arising
          from negligent performance of professional services. A child who wanders into a street
          because of inadequate supervision, who is injured during naptime because staff were not
          monitoring, or who suffers harm because of an undisclosed medical condition the staff
          should have managed &mdash; these are professional liability claims that the CGL may
          exclude under the &ldquo;professional services&rdquo; exclusion.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many childcare insurance programs bundle GL and professional liability into a single
        policy form, which avoids the coverage-line dispute. But operators who purchase a
        standard CGL from a general commercial carrier and do not add professional liability
        may find that the most common childcare claims &mdash; those arising from supervision
        failures &mdash; fall into a gap between the CGL and a professional liability policy
        they do not carry.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Business Income and the Parent Retention Problem
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Business income coverage for a daycare facility presents a challenge that few other
        businesses face: the <strong>permanent loss of clients during closure</strong>. When a
        restaurant closes for two months, its customers will return. When a daycare closes for
        two months, its clients will not.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Working parents cannot leave their children unsupervised while waiting for the daycare to
        reopen. Within days of a closure, families begin enrolling in competing programs. Within
        weeks, the spaces at competing programs fill, and families settle into new routines. By
        the time the original facility reopens, 60% to 80% of its enrolled families have
        permanent arrangements elsewhere. The program must essentially re-market and re-enroll
        from a near-zero base.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Standard business income coverage pays for lost income during the <strong>period of
        restoration</strong> &mdash; the time it takes to repair the physical damage. But the
        true financial impact extends far beyond the repair period. The ramp-up period &mdash;
        the time it takes to rebuild enrollment to pre-loss levels &mdash; can be six months to
        a year or more. The ISO Business Income Coverage Form (CP 00 30) includes an
        <strong> Extended Business Income</strong> additional coverage providing 60 consecutive
        days after operations resume. For a daycare, 60 days is woefully inadequate. The same
        form&rsquo;s <strong>Extended Period of Indemnity</strong> optional coverage replaces
        that 60-day period with a longer one (typical selectable options run 90, 120, 180, 365,
        540, or 730 days). For most childcare operations, 365 days should be the floor &mdash;
        and longer if your enrollment recovery realistically takes more than a year.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a guide to business income claims, see our article on{' '}
        <Link
          href="/resources/business-interruption"
          className="text-blue-700 underline hover:text-blue-900"
        >
          Business Interruption Insurance Claims
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Employee Screening and Its Insurance Implications
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California law (Health &amp; Safety Code &sect; 1596.871) requires criminal background
        checks for all childcare facility employees, volunteers, and any adults residing in a
        family childcare home. The Department of Justice and FBI fingerprint checks must be
        completed before the individual has any contact with children. Insurance policies for
        childcare facilities often include warranties or conditions related to employee screening:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Background check warranties.</strong> Some policies require the insured to
          warrant that all employees have passed criminal background checks. If a claim arises
          involving an employee who was not properly screened, the carrier may deny the claim
          based on the warranty breach.
        </li>
        <li>
          <strong>Reference check requirements.</strong> Policies may require documented reference
          checks for all staff, particularly those working directly with children. Failure to
          maintain documentation of the screening process can provide the carrier with a coverage
          defense.
        </li>
        <li>
          <strong>Ongoing monitoring obligations.</strong> Some carriers require annual
          re-screening of employees or mandate that the insured check state registries for sex
          offenders and substantiated child abuse. These ongoing conditions must be documented
          to protect coverage.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Food Preparation, Health Department Requirements, and Coverage Triggers
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most childcare facilities prepare or serve meals and snacks, which triggers additional
        regulatory and insurance requirements:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Health department permits.</strong> Food preparation facilities must comply
          with California Retail Food Code (Health &amp; Safety Code &sect; 113700 et seq.) and
          obtain the applicable health permits. After a property loss, the health department
          must re-inspect and re-permit food preparation areas before meals can be served.
        </li>
        <li>
          <strong>Allergen exposure liability.</strong> Serving food to children with known
          allergies creates professional liability exposure. If a child suffers an allergic
          reaction because staff failed to follow the child&rsquo;s documented allergy plan, the
          claim may be characterized as professional negligence rather than premises liability.
        </li>
        <li>
          <strong>Equipment breakdown.</strong> Commercial kitchen equipment &mdash;
          refrigerators, ovens, dishwashers &mdash; are essential to operations. A compressor
          failure that spoils food, a malfunctioning oven that causes a fire, or a dishwasher
          breakdown that triggers a health code violation can all create covered claims. For more
          on this coverage, see our article on{' '}
          <Link
            href="/resources/equipment-breakdown-coverage"
            className="text-blue-700 underline hover:text-blue-900"
          >
            Equipment Breakdown Coverage
          </Link>.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Playground Equipment and the Attractive Nuisance Doctrine
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Outdoor play areas are essential to a childcare program&rsquo;s operations and licensing
        compliance, but they create significant liability exposure:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>CPSC and ASTM compliance.</strong> Playground equipment must comply with
          Consumer Product Safety Commission (CPSC) guidelines and ASTM International safety
          standards. Non-compliant equipment creates both regulatory exposure and insurance
          coverage defenses. If a child is injured on equipment that does not meet current safety
          standards, the carrier may argue that the operator&rsquo;s negligence in maintaining
          non-compliant equipment constitutes a policy violation.
        </li>
        <li>
          <strong>Attractive nuisance doctrine.</strong> Under California law, property owners
          owe a heightened duty of care to children who may be attracted to dangerous conditions
          on the property &mdash; even trespassing children. For a daycare with an outdoor play
          area, the attractive nuisance doctrine means the facility may be liable for injuries
          to neighborhood children who access the playground outside of operating hours. Fencing,
          gate locks, and after-hours security become insurance considerations as well as safety
          ones.
        </li>
        <li>
          <strong>Surface material requirements.</strong> CCLD requires specific impact-absorbing
          surface materials under and around playground equipment. After property damage, the
          surface material must meet current standards &mdash; not the standards in effect when
          the playground was originally installed. This is another area where ordinance or law
          coverage becomes critical.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        ADA Compliance for Childcare Facilities
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Americans with Disabilities Act (ADA) applies to daycare and childcare facilities as
        &ldquo;places of public accommodation&rdquo; under Title III. After a significant
        property loss that triggers reconstruction, the facility may be required to bring the
        entire building into current ADA compliance &mdash; not just the damaged areas. This
        includes:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Accessible entrances, restrooms, and changing areas</li>
        <li>Accessible play areas complying with the 2010 ADA Standards for Accessible Design</li>
        <li>Accessible parking and drop-off areas</li>
        <li>Accessible communication systems (visual fire alarms, accessible signage)</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The cost of ADA upgrades during reconstruction can be substantial &mdash; particularly
        for older buildings that were grandfathered under previous standards. This is another
        exposure that{' '}
        <Link
          href="/resources/ordinance-law"
          className="text-blue-700 underline hover:text-blue-900"
        >
          Ordinance or Law coverage
        </Link>{' '}
        is designed to address.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        California Community Care Licensing Requirements and Insurance Implications
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California&rsquo;s Community Care Licensing Division (CCLD) imposes comprehensive
        regulatory requirements on childcare facilities under Title 22 of the California Code of
        Regulations. These requirements directly affect insurance claims and coverage:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Staffing ratios.</strong> CCLD mandates specific adult-to-child ratios based
          on the ages of children served (e.g., 1:4 for infants, 1:12 for school-age children).
          During a partial closure or relocation, maintaining ratios with reduced enrollment may
          not be economically viable &mdash; but the facility cannot operate without meeting them.
        </li>
        <li>
          <strong>Physical plant requirements.</strong> CCLD prescribes specific requirements
          for indoor and outdoor square footage per child, restroom facilities, napping areas,
          kitchen facilities, and storage. After property damage, the facility must meet all
          current physical plant requirements &mdash; not the requirements that applied when the
          license was originally issued.
        </li>
        <li>
          <strong>Notification requirements.</strong> CCLD requires the licensee to report
          &ldquo;unusual incidents&rdquo; within specified timeframes, including fires, injuries,
          allegations of abuse, and any event requiring emergency services. These reports become
          part of the licensing record and can affect the facility&rsquo;s licensing status.
        </li>
        <li>
          <strong>Temporary relocation complications.</strong> If the facility must relocate
          during repairs, the temporary location must be separately licensed by CCLD. The
          licensing process for a new location can take months, during which the facility cannot
          operate. This creates an extended business income loss that the carrier may not
          recognize if it views the restoration period as ending when the original facility
          repairs are complete.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Practical Coverage Checklist for Childcare Operators
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Every childcare facility should verify that its insurance program addresses the following
        exposures:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Commercial property coverage</strong> adequate to rebuild the facility to
          current code requirements, including{' '}
          <Link
            href="/resources/ordinance-law"
            className="text-blue-700 underline hover:text-blue-900"
          >
            Ordinance or Law coverage
          </Link>{' '}
          for code upgrades
        </li>
        <li>
          <strong>Business income coverage</strong> with an extended business income period of
          at least 180 days (365 days preferred) to account for re-licensing and re-enrollment
        </li>
        <li>
          <strong>General liability (CGL)</strong> covering premises liability for injuries on
          the property
        </li>
        <li>
          <strong>Professional liability</strong> covering claims arising from negligent
          supervision, curriculum decisions, and professional childcare services
        </li>
        <li>
          <strong>Abuse and molestation coverage</strong> with the highest limits available
          (recognize that even the highest available limits may be inadequate for a severe claim)
        </li>
        <li>
          <strong>
            <Link
              href="/resources/equipment-breakdown-coverage"
              className="text-blue-700 underline hover:text-blue-900"
            >
              Equipment breakdown coverage
            </Link>
          </strong>{' '}
          for kitchen equipment, HVAC systems, and other mechanical and electrical equipment
        </li>
        <li>
          <strong>Employment practices liability (EPLI)</strong> covering wrongful termination,
          discrimination, and harassment claims from employees
        </li>
        <li>
          <strong>Commercial auto liability</strong> if the facility transports children (with
          specific hired and non-owned auto coverage if staff use personal vehicles)
        </li>
        <li>
          <strong>Workers&rsquo; compensation</strong> covering employee injuries (required by
          California law for all employers)
        </li>
        <li>
          <strong>
            <Link
              href="/resources/commercial-lease-insurance"
              className="text-blue-700 underline hover:text-blue-900"
            >
              Commercial lease compliance
            </Link>
          </strong>{' '}
          if the facility is leased, including waiver of subrogation and additional insured
          endorsements as required by the landlord
        </li>
      </ul>

      <CalloutBox variant="warning" title="Do Not Assume a &ldquo;Daycare Package Policy&rdquo; Covers Everything">
        <p>
          Several carriers offer bundled &ldquo;daycare package&rdquo; or &ldquo;childcare
          business owner&rdquo; policies that appear to provide comprehensive coverage. Read the
          fine print. These packages frequently carry low sublimits on abuse and molestation
          coverage, exclude professional liability for supervision failures, impose short
          extended business income periods, and may not include ordinance or law coverage. A
          bundled policy that leaves critical gaps is worse than a carefully constructed program
          of individual policies, because the bundled format creates a false sense of complete
          protection.
        </p>
      </CalloutBox>

      <CalloutBox variant="info" title="Related Articles">
        <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700">
          <li>
            <Link
              href="/resources/business-interruption"
              className="text-blue-700 underline hover:text-blue-900"
            >
              Business Interruption Insurance Claims
            </Link>{' '}
            &mdash; guide to business income claims and carrier tactics
          </li>
          <li>
            <Link
              href="/resources/period-of-restoration-disputes"
              className="text-blue-700 underline hover:text-blue-900"
            >
              Period of Restoration Disputes
            </Link>{' '}
            &mdash; how carriers manipulate the restoration timeline to minimize BI payments
          </li>
          <li>
            <Link
              href="/resources/ordinance-law"
              className="text-blue-700 underline hover:text-blue-900"
            >
              Ordinance or Law Coverage
            </Link>{' '}
            &mdash; paying for code upgrades required during reconstruction
          </li>
          <li>
            <Link
              href="/resources/equipment-breakdown-coverage"
              className="text-blue-700 underline hover:text-blue-900"
            >
              Equipment Breakdown Coverage
            </Link>{' '}
            &mdash; mechanical and electrical equipment failure coverage
          </li>
          <li>
            <Link
              href="/resources/commercial-lease-insurance"
              className="text-blue-700 underline hover:text-blue-900"
            >
              Commercial Lease Insurance Requirements
            </Link>{' '}
            &mdash; lease compliance for facilities operating in leased spaces
          </li>
        </ul>
      </CalloutBox>

      <div className="mt-12 p-6 bg-[#1F3964] rounded-lg text-center">
        <p className="text-white text-lg font-semibold mb-2">
          Is Your Daycare or Childcare Facility Facing an Insurance Claim?
        </p>
        <p className="text-blue-100 text-sm mb-4">
          Childcare insurance claims involve licensing delays, extended business income losses,
          and coverage gaps that carriers exploit to minimize payments. A Licensed Public Adjuster
          understands the unique vulnerabilities of childcare facilities and can fight for the
          full recovery your program needs to survive and reopen.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#C9A84C] text-white font-bold py-3 px-8 rounded hover:bg-yellow-600 transition"
        >
          Request a Free Consultation
        </Link>
      </div>
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
