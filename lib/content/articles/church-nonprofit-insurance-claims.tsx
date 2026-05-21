import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title:
    'Church, Nonprofit, and Religious Institution Insurance Claims: Irreplaceable Property, Volunteer Liability, and the Abuse Exclusion',
  description:
    'Churches and nonprofits face insurance challenges that no other policyholder encounters: irreplaceable stained glass, the abuse exclusion, volunteer injury gaps, historic code compliance nightmares, and donated property valuation. Learn how to navigate these unique claims.',
  summary:
    'Churches and nonprofits face unique claim issues: irreplaceable items like stained glass, the abuse exclusion, volunteer injury gaps, historic code-compliance costs, and valuing donated property. These claims need special handling that standard approaches miss.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational in nature and reflects the author&rsquo;s interpretation of
          California insurance law as a Licensed Public Adjuster. It is not legal advice. Church and
          nonprofit insurance claims involve specialized policy forms, tax-exempt property valuation
          issues, and coverage questions that vary significantly by denomination and organizational
          structure. If you have a disputed claim involving a church, religious institution, or
          nonprofit organization, consult with a licensed California attorney who specializes in
          insurance coverage disputes.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        Churches, synagogues, mosques, temples, and nonprofit organizations occupy a category of
        insurance risk that is genuinely unlike anything else in the property insurance world. A
        church may contain stained glass windows that took a master artisan two years to fabricate
        and cannot be replaced at any price. A food bank may serve 500 families a week from a
        commercial kitchen that was built entirely with donated labor. A historic sanctuary may be
        subject to building codes that would require $3 million in upgrades to repair $500,000 in
        fire damage. And all of this sits on top of the reality that most churches and nonprofits
        are underinsured, because the people buying the insurance are volunteer board members who
        have no training in commercial coverage.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This article covers the insurance exposures that are unique to religious institutions and
        nonprofits, the coverage gaps that catch them by surprise after a loss, and the practical
        steps they can take to protect themselves before and during a claim.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Irreplaceable Property: Stained Glass, Pipe Organs, and the Agreed Value Problem
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The single most distinctive insurance challenge for churches is <strong>irreplaceable
        property</strong>. A standard commercial property policy promises to pay the cost to
        &ldquo;repair or replace&rdquo; damaged property with materials of &ldquo;like kind and
        quality.&rdquo; But what does &ldquo;like kind and quality&rdquo; mean for a stained glass
        window that was hand-crafted in 1920 by a studio that no longer exists? What does it mean
        for a pipe organ built in Germany in 1955 by an organ builder who has retired? What about
        hand-carved woodwork, religious murals, or Torah scrolls that are centuries old?
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The answer, under a standard replacement cost policy, is usually inadequate. The carrier
        will pay to replace the item with something &ldquo;functionally equivalent&rdquo; &mdash;
        which might mean a modern machine-made window instead of hand-blown glass, or a digital
        organ instead of a pipe organ. The difference in cost between functional equivalence and
        true like-kind-and-quality replacement can be staggering. A single large stained glass
        window, authentically restored, can cost $150,000 to $500,000. A full pipe organ
        replacement from a qualified builder can exceed $1 million.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The solution is an{' '}
        <Link href="/resources/agreed-value-policies" className="text-blue-700 underline hover:text-blue-900">
          agreed value endorsement
        </Link>{' '}
        or a scheduled property endorsement that lists each irreplaceable item with a pre-agreed
        value. Under an agreed value arrangement, the carrier and the policyholder agree in advance
        on the value of specific items. If a loss occurs, the carrier pays the agreed amount without
        a dispute over replacement cost. This eliminates the &ldquo;like kind and quality&rdquo;
        argument entirely.
      </p>

      <CalloutBox variant="warning" title="Get Appraisals Before the Loss">
        <p>
          The time to establish the value of irreplaceable church property is <em>before</em> a loss
          occurs. Commission professional appraisals for stained glass, pipe organs, religious
          artifacts, historic woodwork, murals, and any other items that cannot be purchased off a
          shelf. Provide these appraisals to your insurance carrier and request that they be scheduled
          on the policy with agreed values. If the carrier refuses to schedule them, that refusal is
          itself important documentation.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        Common irreplaceable items in religious institutions include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Stained glass windows:</strong> Hand-blown, painted, and fired glass panels,
          often with lead came construction. Authentic restoration requires specialty studios with
          multi-year lead times. Machine-made &ldquo;replacement&rdquo; glass is not like kind and
          quality.
        </li>
        <li>
          <strong>Pipe organs:</strong> Custom-built instruments with thousands of individual pipes,
          mechanical or electro-pneumatic action, and hand-voiced ranks. Replacement timelines of
          3&ndash;7 years from qualified builders are common.
        </li>
        <li>
          <strong>Religious artifacts:</strong> Torah scrolls, chalices, crosses, altar pieces,
          vestments, historic Bibles, and liturgical items that may be centuries old and cannot be
          replaced at any price.
        </li>
        <li>
          <strong>Historic woodwork:</strong> Hand-carved pews, altar rails, rood screens, pulpits,
          and architectural trim made from species and by craftspeople no longer available.
        </li>
        <li>
          <strong>Murals and frescoes:</strong> Wall and ceiling paintings that require art
          conservators &mdash; not painters &mdash; to restore.
        </li>
        <li>
          <strong>Bells and bell towers:</strong> Cast bronze bells, often with historic
          significance, that require specialty foundries to replace or restore.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Historic Building and Ordinance or Law Nightmare
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many churches and religious institutions occupy buildings that are 50, 100, or even 200 years
        old. Some are designated historic landmarks. When these buildings suffer significant damage,
        the insurance claim becomes vastly more complicated than a modern building claim &mdash;
        because of{' '}
        <Link href="/resources/ordinance-law" className="text-blue-700 underline hover:text-blue-900">
          ordinance or law requirements
        </Link>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Building codes have changed enormously over the past century. A church built in 1925 was
        not designed to meet current seismic standards, ADA accessibility requirements, fire
        suppression requirements, energy codes, or structural loading standards. When a covered
        loss triggers a repair that requires a building permit, the local building authority will
        require that the damaged portion &mdash; and often the entire building &mdash; be brought
        up to current code. The cost of code compliance can exceed the cost of repairing the actual
        damage by a factor of two, three, or even five.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Standard commercial property policies exclude the increased cost of construction due to
        ordinance or law. Coverage is available through the <strong>ordinance or law
        endorsement</strong>, which typically provides three coverages:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Coverage A &mdash; Loss to the Undamaged Portion:</strong> If code requires
          demolition of undamaged portions of the building, this coverage pays for that loss.
        </li>
        <li>
          <strong>Coverage B &mdash; Demolition Cost:</strong> Pays the actual cost to demolish the
          undamaged portion that must be torn down to comply with code.
        </li>
        <li>
          <strong>Coverage C &mdash; Increased Cost of Construction:</strong> Pays the additional
          cost to rebuild in compliance with current building codes, beyond what the standard policy
          covers.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a historic church, the ordinance or law exposure is enormous. ADA compliance alone can
        require elevator installation, ramp construction, restroom renovation, and widened doorways.
        Seismic retrofitting in California (required under California Building Code Chapter 34 for
        unreinforced masonry buildings) can cost millions. Fire sprinkler installation in a historic
        nave with a 60-foot ceiling and irreplaceable woodwork requires extraordinary engineering.
        Many churches carry no ordinance or law coverage at all, or carry limits that are a fraction
        of their actual exposure.
      </p>

      <CalloutBox variant="warning" title="Historic Designation Adds Complexity">
        <p>
          If the building is on the National Register of Historic Places or a local historic
          register, repairs must comply with the Secretary of the Interior&rsquo;s Standards for
          Rehabilitation. This means you cannot simply replace historic materials with modern
          equivalents &mdash; the replacement must match the original in material, design, color,
          texture, and workmanship. This requirement dramatically increases repair costs and extends
          timelines, and carriers routinely argue that historic preservation requirements are not
          covered under the policy.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Volunteer Injury Liability: The Workers&rsquo; Comp Gap
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Churches and nonprofits rely heavily on volunteers &mdash; for construction projects, food
        banks, community events, mission trips, childcare, and daily operations. When a volunteer is
        injured, the organization faces a liability exposure that falls into a coverage gap between
        workers&rsquo; compensation and general liability.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Workers&rsquo; compensation does not cover volunteers.</strong> Workers&rsquo; comp
        is an employer-employee system. Volunteers are not employees. In California, Labor Code
        &sect;3351 defines &ldquo;employee&rdquo; for workers&rsquo; comp purposes, and unpaid
        volunteers generally do not qualify unless the organization has specifically elected to
        include them (which is permitted under Labor Code &sect;3363.6 for certain nonprofit
        corporations). Most churches and nonprofits have not made this election because it increases
        their workers&rsquo; comp premium.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>General liability may not cover it either.</strong> A commercial general liability
        (CGL) policy covers bodily injury to <em>third parties</em> caused by the
        organization&rsquo;s negligence. But a volunteer who is injured while working for the
        organization may be characterized as performing work on behalf of the named insured,
        creating an argument that they are more akin to an employee than a third party. The CGL
        policy&rsquo;s employer&rsquo;s liability exclusion (ISO CGL form CG 00 01, Section I,
        Exclusion e) may apply, leaving the volunteer&rsquo;s injury claim without coverage under
        either workers&rsquo; comp or general liability.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The solution is a <strong>volunteer accident policy</strong> or a <strong>participant
        accident policy</strong>, which provides medical expense coverage for volunteers
        injured while performing duties for the organization, regardless of fault. These are
        relatively inexpensive and fill the gap that workers&rsquo; comp and CGL leave open.
        Some church-specific insurance programs (such as those offered by Brotherhood Mutual,
        Church Mutual, or GuideOne) include volunteer accident coverage as part of their
        package policies.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Sexual Abuse and Molestation Exclusion
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the coverage issue that every church board needs to understand but almost none
        want to discuss. Most commercial general liability policies &mdash; including most
        church-specific policies &mdash; contain a <strong>sexual abuse and molestation
        exclusion</strong> that eliminates coverage for any claim arising out of sexual abuse,
        sexual molestation, sexual harassment, or sexual misconduct by any person. The exclusion
        applies regardless of whether the organization knew about or authorized the conduct.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The practical impact is severe. If a church employee, volunteer, or clergy member commits
        an act of sexual abuse against a minor or any other person, the church&rsquo;s general
        liability policy will not respond to the resulting lawsuit. The church will bear the full
        cost of defense and any settlement or judgment. Given that verdicts in clergy abuse cases
        routinely reach seven and eight figures, this is an existential risk.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Standalone sexual abuse and molestation (SAM) coverage</strong> is available, but
        it is expensive, difficult to obtain, and comes with significant conditions. Carriers that
        write SAM coverage typically require the organization to demonstrate:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Written policies for screening employees and volunteers who work with minors</li>
        <li>Background check procedures for all staff and volunteers</li>
        <li>A &ldquo;two-adult rule&rdquo; requiring that no adult is ever alone with a minor</li>
        <li>Mandatory abuse awareness and prevention training for all staff and volunteers</li>
        <li>A designated reporting protocol for suspected abuse</li>
        <li>Window and visibility requirements for classrooms and meeting spaces</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Even with these safeguards in place, SAM coverage limits are often modest &mdash;
        $500,000 to $2 million per occurrence is common &mdash; and the policy may contain
        per-claim deductibles of $25,000 to $100,000. California Code of Civil Procedure
        &sect;340.1 provides a lengthy statute of limitations for childhood sexual abuse claims
        (action may be commenced within 22 years of the age of majority, or within 5 years of
        discovering that an injury was caused by childhood sexual abuse), meaning claims can
        surface decades after the abuse occurred.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Donated Property Valuation
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Churches and nonprofits receive donated property constantly &mdash; furniture, electronics,
        vehicles, building materials, food inventory, clothing, and occasionally valuable items like
        artwork, antiques, or musical instruments. When a loss damages or destroys donated property,
        the question becomes: <em>what was it worth?</em>
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Proving the value of donated items is fundamentally different from proving the value of
        purchased items. There are no purchase receipts. There may be donation receipts, but those
        often list only a description and not a value (or list a value that was assigned by the
        donor for tax purposes, which may or may not reflect actual fair market value). The
        organization may have no{' '}
        <Link href="/resources/contents-claims" className="text-blue-700 underline hover:text-blue-900">
          inventory
        </Link>{' '}
        of donated items at all.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under a replacement cost policy, the measure of loss is what it would cost to replace the
        item today, regardless of what the donor paid or what the donation receipt says. Under an
        actual cash value policy, it is the replacement cost minus depreciation. Either way, the
        policyholder bears the burden of proving the value. For a food bank that loses $200,000 in
        donated food inventory, or a thrift store operated by a church that loses its entire stock,
        the documentation challenge is substantial.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Best practices for donated property documentation include maintaining a rolling inventory
        with photographs, keeping donation receipts that include item descriptions and donor-assigned
        values, photographing high-value donations at the time of receipt, and conducting periodic
        inventory counts. For high-value items (artwork, antiques, instruments), obtain independent
        appraisals and schedule them on the policy.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Business Income for Churches: When the Congregation Scatters
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Churches and nonprofits do not earn &ldquo;business income&rdquo; in the traditional sense,
        but they absolutely suffer financial losses when a covered event forces them to close. The
        standard commercial property form provides{' '}
        <Link href="/resources/business-interruption" className="text-blue-700 underline hover:text-blue-900">
          business income coverage
        </Link>{' '}
        for the reduction in net income plus continuing normal operating expenses during the{' '}
        <Link href="/resources/period-of-restoration-disputes" className="text-blue-700 underline hover:text-blue-900">
          period of restoration
        </Link>. For a church, &ldquo;income&rdquo; means tithes, offerings, donations, event fees,
        rental income from facility use, and revenue from any auxiliary operations like bookstores,
        cafes, or schools.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The problem is that <strong>donations drop when the congregation scatters</strong>. When a
        church cannot hold services for six months, twelve months, or two years during reconstruction,
        members find other churches. Some never come back. Tithing drops not just during the closure
        but for years afterward as the congregation slowly rebuilds. This extended loss of income is
        difficult to quantify and even more difficult to recover under a standard business income
        form, which typically limits coverage to the &ldquo;period of restoration&rdquo; &mdash; the
        time reasonably required to repair or replace the damaged property.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        An <strong>extended period of indemnity endorsement</strong> can extend business income
        coverage beyond the completion of repairs, providing additional months of coverage while
        the organization rebuilds its membership and revenue. This endorsement is critical for any
        church or nonprofit where revenue depends on a congregation or donor base that may not
        return immediately after repairs are complete.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Tax-Exempt Status and Insurance Implications
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Churches and qualifying nonprofits are exempt from federal income tax under IRC &sect;501(c)(3)
        and typically exempt from state and local property taxes. This tax-exempt status creates
        several unique insurance implications:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Property valuation:</strong> Tax-exempt properties do not have a tax-assessed
          value that reflects market reality. Carriers and policyholders cannot rely on property tax
          assessments to estimate replacement cost. Instead, a{' '}
          <Link href="/resources/commercial-coinsurance" className="text-blue-700 underline hover:text-blue-900">
            coinsurance
          </Link>{' '}
          analysis requires an independent replacement cost appraisal, which many churches skip
          because of the expense.
        </li>
        <li>
          <strong>Coinsurance penalties:</strong> Because tax-exempt organizations often
          underestimate their replacement cost, they are vulnerable to coinsurance penalties on
          partial losses. A church that insures a $10 million building for $4 million will face
          a devastating coinsurance penalty on any claim.
        </li>
        <li>
          <strong>No sales tax on construction:</strong> In some states, tax-exempt organizations
          do not pay sales tax on construction materials. This can slightly reduce the replacement
          cost calculation, but carriers sometimes overstate this benefit.
        </li>
        <li>
          <strong>Unrelated business income:</strong> If the church earns income from activities
          unrelated to its religious mission (rental of facilities for commercial events, parking
          lot fees, etc.), that income may be subject to UBIT (Unrelated Business Income Tax)
          and should be separately accounted for in business income claims.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Food Bank and Community Kitchen Liability
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many churches and nonprofits operate food banks, community kitchens, soup kitchens, or
        meal programs. These operations create liability exposures that are distinct from the
        organization&rsquo;s general activities:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Foodborne illness:</strong> If someone becomes ill from food served or
          distributed by the organization, a bodily injury claim follows. California&rsquo;s
          Good Samaritan Food Donation Act (Health &amp; Safety Code &sect;114432) provides some
          liability protection for good-faith food donations, but it does not provide blanket
          immunity, particularly if the organization was negligent in food handling or storage.
        </li>
        <li>
          <strong>Commercial kitchen equipment:</strong> Walk-in coolers, commercial ovens, deep
          fryers, and industrial dishwashers are expensive to replace and subject to mechanical
          breakdown. Standard property forms may exclude mechanical breakdown &mdash;{' '}
          <Link href="/resources/equipment-breakdown-coverage" className="text-blue-700 underline hover:text-blue-900">
            equipment breakdown coverage
          </Link>{' '}
          is needed.
        </li>
        <li>
          <strong>Health department compliance:</strong> Commercial food operations must comply
          with California Retail Food Code (Health &amp; Safety Code &sect;113700 et seq.). A
          health department closure after a loss (contamination, flood, fire) triggers a business
          income loss for the food program and may prevent the organization from serving the
          community even if the rest of the building is operational.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        ADA Compliance for Historic Religious Buildings
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Americans with Disabilities Act provides a limited exemption for religious organizations
        (42 U.S.C. &sect;12187 exempts religious organizations from Title III public accommodation
        requirements). However, this exemption is narrower than most churches realize. If the
        church operates a daycare, school, or community program that is open to the general public,
        those programs may be subject to ADA requirements even if the church itself is exempt.
        And critically, when a loss triggers a building permit for repairs, the local building
        authority may impose ADA compliance requirements as a condition of the permit &mdash;
        regardless of the federal religious exemption.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In California, the California Building Code (CBC) requires ADA-equivalent accessibility
        upgrades when the cost of alterations exceeds a threshold percentage of the building&rsquo;s
        replacement cost (typically 20% under CBC Chapter 11B for path-of-travel requirements).
        For a major fire or water loss in a historic church, crossing that threshold is almost
        inevitable, triggering requirements for ramps, accessible restrooms, elevator access,
        and accessible routes that can add hundreds of thousands of dollars to the project. This
        cost is an{' '}
        <Link href="/resources/ordinance-law" className="text-blue-700 underline hover:text-blue-900">
          ordinance or law exposure
        </Link>{' '}
        that must be covered by endorsement.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Nonprofit D&amp;O and Its Interaction with Property Claims
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Directors and officers (D&amp;O) liability insurance protects the board members and officers
        of a nonprofit from personal liability for decisions they make on behalf of the organization.
        This coverage intersects with property claims in several ways:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Failure to maintain adequate insurance:</strong> If the board allowed the
          organization to be underinsured and a major loss occurs, board members could face personal
          liability from the congregation or membership for the shortfall. D&amp;O coverage may
          respond to this claim.
        </li>
        <li>
          <strong>Decisions during the claim:</strong> Board decisions about hiring contractors,
          accepting settlements, or authorizing repairs during a claim can expose directors to
          allegations of mismanagement. D&amp;O coverage provides defense costs.
        </li>
        <li>
          <strong>Misuse of insurance proceeds:</strong> If insurance proceeds are not applied to
          repairs or are used for unauthorized purposes, board members may face personal exposure.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        California Corporations Code &sect;5047.5 provides qualified immunity for volunteer
        directors and officers of nonprofit corporations, but this immunity has exceptions for
        fraud, self-dealing, and acts outside the scope of the director&rsquo;s duties. D&amp;O
        insurance fills the gap that statutory immunity leaves open.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Practical Coverage Checklist for Churches and Nonprofits
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The following checklist addresses the coverage components that churches and nonprofits
        most commonly overlook. This is not a substitute for working with a knowledgeable
        insurance broker, but it provides a framework for evaluating whether your current
        coverage addresses your actual exposures.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Property coverage at full replacement cost:</strong> Obtain an independent
          replacement cost appraisal. Do not rely on tax assessments, original construction cost,
          or guesswork. Include all buildings, structures, and site improvements.
        </li>
        <li>
          <strong>
            <Link href="/resources/agreed-value-policies" className="text-blue-700 underline hover:text-blue-900">
              Agreed value
            </Link>{' '}
            for irreplaceable items:
          </strong>{' '}
          Schedule stained glass, pipe organs, religious artifacts, historic woodwork, murals,
          bells, and any other irreplaceable items with professional appraisals and agreed values.
        </li>
        <li>
          <strong>
            <Link href="/resources/ordinance-law" className="text-blue-700 underline hover:text-blue-900">
              Ordinance or law coverage
            </Link>{' '}
            (all three coverages):
          </strong>{' '}
          Ensure Coverage A, B, and C are included, with limits adequate for historic code
          compliance, seismic retrofitting, ADA upgrades, and fire suppression requirements.
        </li>
        <li>
          <strong>
            <Link href="/resources/business-interruption" className="text-blue-700 underline hover:text-blue-900">
              Business income
            </Link>{' '}
            with extended period of indemnity:
          </strong>{' '}
          Cover tithes, offerings, donations, event revenue, rental income, and auxiliary operations.
          Include at least 12 months of extended indemnity beyond the period of restoration.
        </li>
        <li>
          <strong>Sexual abuse and molestation coverage:</strong> Either as an endorsement to
          the CGL or as a standalone policy. Implement the required safeguards.
        </li>
        <li>
          <strong>Volunteer accident coverage:</strong> Medical expense coverage for volunteers
          injured while performing duties for the organization.
        </li>
        <li>
          <strong>Equipment breakdown:</strong> For commercial kitchen equipment, HVAC systems,
          boilers, and any other mechanical or electrical equipment.
        </li>
        <li>
          <strong>
            <Link href="/resources/contents-claims" className="text-blue-700 underline hover:text-blue-900">
              Contents coverage
            </Link>{' '}
            with donated property documentation:
          </strong>{' '}
          Maintain a rolling inventory of all property on premises, including donated items, with
          photographs and descriptions.
        </li>
        <li>
          <strong>D&amp;O liability:</strong> Protect board members and officers from personal
          liability for organizational decisions.
        </li>
        <li>
          <strong>Umbrella or excess liability:</strong> To extend the limits of the CGL, auto
          liability, and employer&rsquo;s liability beyond their primary limits.
        </li>
        <li>
          <strong>
            <Link href="/resources/historic-heritage-home-claims" className="text-blue-700 underline hover:text-blue-900">
              Historic building endorsements
            </Link>:
          </strong>{' '}
          If the building is listed on any historic register, ensure the policy addresses the
          additional cost of compliance with historic preservation standards.
        </li>
      </ul>

      <CalloutBox variant="warning" title="Review Coverage Annually">
        <p>
          Churches and nonprofits grow, add programs, acquire property, and change their operations
          over time. Insurance coverage that was adequate five years ago may leave critical gaps
          today. Conduct an annual coverage review with a broker who understands religious institution
          and nonprofit exposures. Bring your board treasurer, facilities manager, and program
          directors to the meeting &mdash; they know where the risks are.
        </p>
      </CalloutBox>
    </>
  )
}
