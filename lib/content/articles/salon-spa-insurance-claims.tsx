import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title:
    'Salon and Spa Insurance Claims: Chemical Exposure, Professional Liability, and Equipment Worth More Than the Buildout',
  description:
    'Salons and spas face insurance exposures most business owners never anticipate: the pollution exclusion applied to everyday chemicals, professional liability for treatments gone wrong, laser equipment worth $150K each, and the booth rental insurance gap. Learn how to navigate these claims.',
  summary:
    'Salons and spas face unexpected exposures: the pollution exclusion applied to everyday chemicals, professional liability for treatments, costly laser equipment, and the booth-rental insurance gap. Confirm coverage addresses these before a loss.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational in nature and reflects the author&rsquo;s interpretation of
          California insurance law as a Licensed Public Adjuster. It is not legal advice. Salon
          and spa insurance claims involve complex interactions between property coverage,
          professional liability, product liability, and California licensing requirements. If you
          have a disputed claim involving a salon, spa, or medical spa, consult with a licensed
          California attorney who specializes in insurance coverage disputes.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        Walk into a modern salon or spa and you are looking at a business with an extraordinary
        concentration of insurance risk. A high-end hair salon has thousands of dollars in chemical
        products that can trigger the pollution exclusion if they contaminate the building. A
        medical spa has individual laser machines that cost $50,000 to $150,000 each. A nail salon
        exposes its workers to chemical fumes that OSHA regulates as occupational hazards. A day
        spa performs treatments on clients&rsquo; bodies that can cause burns, allergic reactions,
        or permanent disfigurement if something goes wrong. And underlying all of it is a business
        model &mdash; booth rental &mdash; that creates one of the most confusing insurance
        arrangements in any industry.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This article covers the insurance exposures unique to salons and spas, the coverage gaps
        that create serious problems during a claim, and the practical steps salon and spa owners
        can take to protect themselves and their businesses.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Chemical Exposure and the Pollution Exclusion
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The{' '}
        <Link href="/resources/pollution-exclusion-claims" className="text-blue-700 underline hover:text-blue-900">
          pollution exclusion
        </Link>{' '}
        is the coverage issue that blindsides salon and spa owners most often. The standard ISO CGL
        form (CG 00 01) contains an absolute pollution exclusion that eliminates coverage for bodily
        injury or property damage arising out of the actual, alleged, or threatened discharge,
        dispersal, seepage, migration, release, or escape of &ldquo;pollutants.&rdquo; The policy
        defines &ldquo;pollutants&rdquo; as &ldquo;any solid, liquid, gaseous or thermal irritant
        or contaminant, including smoke, vapor, soot, fumes, acids, alkalis, chemicals, and waste.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Read that definition again. <strong>Chemicals. Fumes. Vapors. Acids. Alkalis.</strong> Those
        words describe the daily operations of virtually every salon in America. Hair color contains
        ammonia and peroxide. Chemical straightening treatments (keratin treatments, relaxers) release
        formaldehyde and other volatile organic compounds. Nail salons use acetone, toluene,
        dibutyl phthalate, and methacrylate monomers. Chemical peels use glycolic acid, salicylic
        acid, and trichloroacetic acid. All of these are &ldquo;chemicals&rdquo; under the pollution
        exclusion&rsquo;s plain language.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The question is whether the pollution exclusion applies to chemicals used in the normal
        course of salon operations, or whether it was intended to apply only to traditional
        environmental pollution (industrial waste, toxic spills, contaminated groundwater). California
        courts have grappled with this distinction. In <em>MacKinnon v. Truck Ins. Exchange</em>,
        31 Cal.4th 635 (2003), the California Supreme Court held that the pollution exclusion must
        be interpreted in context and does not apply to every situation involving a substance that
        could technically be called a &ldquo;pollutant.&rdquo; However, the boundaries of this
        holding are contested, and carriers continue to invoke the pollution exclusion in salon
        chemical exposure claims.
      </p>

      <CalloutBox variant="warning" title="The Pollution Exclusion May Apply to Normal Salon Chemicals">
        <p>
          Do not assume that the pollution exclusion only applies to &ldquo;real&rdquo; pollution
          like oil spills and toxic waste. Carriers have invoked this exclusion for hair color
          fumes, nail salon chemical vapors, and chemical peel reactions. If your salon uses any
          chemicals (and they all do), discuss the pollution exclusion with your broker and consider
          purchasing a pollution liability endorsement or standalone environmental liability policy
          that specifically covers chemical exposures arising from normal salon operations.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        Specific chemical exposure scenarios in salons and spas include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Hair color and bleach reactions:</strong> A client has an allergic reaction to
          hair dye (paraphenylenediamine is a known allergen). The CGL pollution exclusion may
          apply because the dye is a &ldquo;chemical.&rdquo; Professional liability coverage may
          be needed instead.
        </li>
        <li>
          <strong>Keratin treatment formaldehyde exposure:</strong> Some keratin smoothing
          treatments release formaldehyde when heated. Both stylists and clients can be exposed.
          OSHA has issued hazard alerts about formaldehyde in salon products. A bodily injury
          claim from a stylist would be a workers&rsquo; comp claim; a claim from a client
          may trigger the pollution exclusion on the CGL.
        </li>
        <li>
          <strong>Nail salon fume accumulation:</strong> Chronic exposure to nail salon chemicals
          is a documented occupational health hazard. The New York Times&rsquo;s 2015 investigation
          brought national attention to nail salon worker health. Claims from workers go through
          workers&rsquo; comp, but claims from clients or neighboring tenants may encounter the
          pollution exclusion.
        </li>
        <li>
          <strong>Chemical spill property damage:</strong> A gallon of hair color developer spills
          and damages flooring, equipment, or a neighboring tenant&rsquo;s space. The property
          damage from the spill may be excluded under the CGL&rsquo;s pollution exclusion. The
          salon&rsquo;s own property policy may also exclude pollution-related damage to the
          salon&rsquo;s own property.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Professional Liability for Treatments Gone Wrong
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Salons and spas perform services <em>on people&rsquo;s bodies</em>. When something goes
        wrong, the resulting claim is a professional liability claim &mdash; not a general liability
        claim. The distinction matters because a CGL policy covers bodily injury caused by
        <em> negligence in the maintenance of premises or operations</em>, while professional
        liability covers injury caused by <em>errors or omissions in professional services</em>.
        Many CGL policies contain a professional services exclusion that eliminates coverage for
        injury arising out of the rendering of professional services.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Common professional liability scenarios include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Burns from styling tools:</strong> Flat irons, curling irons, and blow dryers
          can cause serious burns. While this might seem like a straightforward negligence claim,
          it arose from the rendering of a professional service and may be excluded from the CGL.
        </li>
        <li>
          <strong>Allergic reactions to products:</strong> A client has a severe allergic reaction
          to a hair product, wax, dye, or skincare product used during a service. The salon may
          be liable for failing to perform a patch test, failing to ask about allergies, or
          using a product known to cause reactions.
        </li>
        <li>
          <strong>Laser treatment injuries:</strong> In medical spas, laser hair removal, IPL
          treatments, and laser skin resurfacing can cause burns, hyperpigmentation,
          hypopigmentation, and scarring. These are professional liability claims that require
          medical professional liability (malpractice) coverage, not just a CGL.
        </li>
        <li>
          <strong>Injection injuries:</strong> Medical spas that administer Botox, dermal fillers,
          or other injectable treatments are performing medical procedures. Complications including
          vascular occlusion, tissue necrosis, and blindness (from filler injected near the
          retinal artery) are documented risks that require medical malpractice coverage.
        </li>
        <li>
          <strong>Waxing injuries:</strong> Burns from overheated wax, skin tears, and infections
          from unsanitary equipment. These are professional liability claims arising from the
          rendering of an esthetic service.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Expensive Specialized Equipment: Lasers, Machines, and Technology
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The equipment in a modern salon or spa &mdash; particularly a medical spa &mdash; can be
        worth more than the entire buildout of the space. Equipment values include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Laser hair removal machines:</strong> $50,000&ndash;$150,000 each. A medical spa
          may have multiple laser platforms for different skin types and treatment areas.
        </li>
        <li>
          <strong>IPL (Intense Pulsed Light) devices:</strong> $30,000&ndash;$80,000 each. Used
          for photofacials, rosacea treatment, and pigmentation correction.
        </li>
        <li>
          <strong>Hydrafacial and microdermabrasion machines:</strong> $20,000&ndash;$40,000 each.
          The hydrafacial machine alone has become a cornerstone revenue generator for many spas.
        </li>
        <li>
          <strong>Cryotherapy chambers:</strong> $40,000&ndash;$300,000 for whole-body cryo
          chambers. These use liquid nitrogen and present both equipment value and liability risk.
        </li>
        <li>
          <strong>Infrared saunas and light therapy panels:</strong> $5,000&ndash;$30,000 per
          unit, with multiple units in a facility.
        </li>
        <li>
          <strong>Body sculpting devices:</strong> CoolSculpting, radiofrequency devices, and
          electromagnetic muscle stimulation machines cost $50,000&ndash;$200,000 each.
        </li>
        <li>
          <strong>Salon chairs and stations:</strong> A high-end styling chair costs $1,000&ndash;$3,000.
          A salon with 20 stations has $20,000&ndash;$60,000 in chairs alone, plus mirrors,
          lighting, and built-in storage at each station.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        A medical spa with a full range of treatment devices can easily have $500,000 to $1 million
        in equipment. This equipment is vulnerable to water damage (electronics are destroyed by
        even minor water exposure), power surges (which can damage sensitive laser optics and
        calibration), fire and smoke damage, and theft. Standard property coverage may be inadequate
        &mdash;{' '}
        <Link href="/resources/equipment-breakdown-coverage" className="text-blue-700 underline hover:text-blue-900">
          equipment breakdown coverage
        </Link>{' '}
        is essential for mechanical and electrical failures, and scheduled coverage with agreed
        values may be needed for the most expensive devices.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Medical Spa Distinction: Where Beauty Meets Medicine
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A medical spa (medspa) occupies a regulatory and insurance no-man&rsquo;s-land between a
        traditional day spa and a medical clinic. In California, medical spas must operate under
        the supervision of a licensed physician (Business &amp; Professions Code &sect;2052 prohibits
        the practice of medicine without a license). The physician may be an owner, medical
        director, or supervising physician, but medical procedures &mdash; including laser
        treatments, injectables, prescription-strength chemical peels, and any procedure that
        penetrates the skin &mdash; must be performed by or under the supervision of a licensed
        medical professional.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This creates a <strong>professional liability gap</strong>. A standard salon professional
        liability policy (sometimes called a &ldquo;beauty professional&rdquo; policy) covers
        esthetic services &mdash; hair, nails, skin care, waxing, and non-medical treatments. It
        does <em>not</em> cover medical procedures. A medical spa needs <strong>medical professional
        liability (malpractice) coverage</strong> in addition to its salon professional liability
        policy. The malpractice coverage must extend to all practitioners performing medical
        procedures &mdash; the supervising physician, nurse practitioners, physician assistants,
        and registered nurses performing treatments under physician supervision.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many medical spas operate with only a standard salon policy, believing it covers everything
        they do. It does not. If a laser treatment causes a burn, if a filler injection causes
        tissue necrosis, or if a prescription-strength peel causes permanent scarring, the standard
        salon professional liability policy will likely exclude the claim because it involved a
        medical procedure.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Product Liability for Retail Sales
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most salons and spas sell retail products &mdash; shampoo, conditioner, styling products,
        skincare, supplements, and beauty tools. When a product sold by the salon causes injury to
        a customer (allergic reaction, chemical burn, contamination), the question becomes: is the
        salon liable as a retailer?
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under California&rsquo;s strict product liability doctrine (<em>Greenman v. Yuba Power
        Products, Inc.</em>, 59 Cal.2d 57 (1963)), any entity in the chain of distribution &mdash;
        manufacturer, distributor, or retailer &mdash; can be held strictly liable for a defective
        product that causes injury. A salon that sells a hair product to a client is a retailer in
        the chain of distribution. If the product is defective (contaminated, mislabeled, or
        containing undisclosed allergens), the salon can be held liable even without negligence.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The CGL policy&rsquo;s products-completed operations coverage (Coverage B in the ISO CGL
        form) is designed to cover product liability claims. However, the pollution exclusion can
        again become an issue if the product causes injury through chemical exposure. And if the
        salon creates its own branded products (private-label shampoos, house-brand skincare), the
        liability exposure increases because the salon is both manufacturer and retailer.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Water Damage in Salons: A Plumbing-Intensive Environment
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Salons are among the most plumbing-intensive commercial spaces outside of restaurants and
        medical facilities. A typical hair salon has a{' '}
        <Link href="/resources/water-damage-claims" className="text-blue-700 underline hover:text-blue-900">
          water supply and drain
        </Link>{' '}
        connection at every shampoo station, a water heater (often a high-capacity commercial unit),
        and in many cases, a washer/dryer for towels. Spas add hydrotherapy tubs, Vichy showers,
        steam rooms, and foot baths. Each water connection is a potential failure point.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Water damage claims in salons are common and expensive because:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Shampoo bowl connections:</strong> The flexible hoses connecting shampoo bowls
          to the water supply are under constant stress from daily use and can fail without
          warning, flooding the salon.
        </li>
        <li>
          <strong>Water heater failures:</strong> A commercial water heater serving 10&ndash;20
          shampoo stations processes an enormous volume of water daily. Failure can result in
          flooding and potential contamination if the tank corrodes.
        </li>
        <li>
          <strong>Damage to neighboring tenants:</strong> Salons in multi-tenant buildings
          frequently cause water damage to tenants below them. The salon&rsquo;s CGL covers
          third-party property damage, but the deductible and the impact on future premiums
          can be significant.
        </li>
        <li>
          <strong>Equipment sensitivity:</strong> Laser machines, IPL devices, electronic styling
          tools, and computer systems are all destroyed by water contact. Even minor flooding can
          cause hundreds of thousands of dollars in equipment damage.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Business Income and Client Retention
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The{' '}
        <Link href="/resources/business-interruption" className="text-blue-700 underline hover:text-blue-900">
          business income
        </Link>{' '}
        challenge for salons and spas shares a critical feature with gyms: <strong>clients do not
        wait</strong>. When a salon closes for repairs, stylists take their clients to other salons.
        Clients who cannot see their regular stylist book with someone else. Spa clients reschedule
        at competing spas. The longer the closure, the more clients are permanently lost.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The business income calculation for salons is complicated by the booth rental model. In a
        salon where stylists rent booths, the salon&rsquo;s revenue is primarily booth rent &mdash;
        not service revenue. The salon owner&rsquo;s business income claim covers lost booth rent
        and any house-performed services, while each booth renter has their own separate income loss.
        If booth renters do not carry their own business income coverage (and most do not), they
        have no insurance recovery for their lost income during the closure.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        An <strong>extended{' '}
        <Link href="/resources/period-of-restoration-disputes" className="text-blue-700 underline hover:text-blue-900">
          period of indemnity
        </Link></strong>{' '}
        endorsement is essential for salons and spas. After reconstruction is complete, the salon
        must recruit stylists, rebuild its client base, and reestablish its reputation. This ramp-up
        period can take 6 to 18 months, and without extended indemnity coverage, the salon bears
        this loss alone.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Booth Rental vs. Employee: The Insurance Implications
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The salon industry is built on two fundamentally different business models, and the
        insurance implications of each are significant:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Commission/employee model:</strong> Stylists are W-2 employees. The salon
          owner&rsquo;s CGL covers liability from the stylist&rsquo;s services. The salon&rsquo;s
          workers&rsquo; comp covers the stylist&rsquo;s injuries. Professional liability coverage
          under the salon&rsquo;s policy covers errors in service. The salon owner controls
          scheduling, pricing, products used, and methods &mdash; and bears all the insurance cost.
        </li>
        <li>
          <strong>Booth rental/independent contractor model:</strong> Stylists are 1099
          independent contractors who rent a chair or room from the salon. Each booth renter
          is theoretically responsible for their own insurance &mdash; their own professional
          liability, their own general liability, their own business personal property coverage.
          The salon owner&rsquo;s policy covers the premises and the salon&rsquo;s own operations,
          but may not cover the booth renter&rsquo;s professional services.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The problem is California&rsquo;s <strong>ABC test</strong> (Labor Code &sect;2775), which
        presumes all workers are employees unless the hiring entity demonstrates all three prongs:
        (A) the worker is free from the control and direction of the hiring entity, (B) the worker
        performs work outside the usual course of the hiring entity&rsquo;s business, and (C) the
        worker is customarily engaged in an independently established trade. Prong B is the killer
        for salons &mdash; a hair stylist renting a booth in a hair salon is performing work that
        is squarely within the usual course of the salon&rsquo;s business.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        California AB 5 (2019) codified the ABC test but subsequently AB 2257 (2020) created
        specific exemptions. Licensed barbers and cosmetologists who meet certain conditions
        (set their own rates, maintain a clientele, control their schedule, provide their own
        tools) may qualify for an exemption. However, this exemption is narrow, and
        misclassification remains a significant risk. If a booth renter is reclassified as an
        employee, the salon owner faces retroactive liability for workers&rsquo; comp, payroll
        taxes, and potentially uninsured professional liability claims.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        OSHA and Chemical Safety Compliance
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Nail salons in particular face significant OSHA chemical safety requirements. Cal/OSHA
        regulates workplace chemical exposure under Title 8, California Code of Regulations,
        &sect;5155 (Airborne Contaminants) and the Hazard Communication Standard (&sect;5194).
        Salon owners are required to:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Maintain Safety Data Sheets (SDS) for all chemical products used in the salon</li>
        <li>Provide employee training on chemical hazards and safe handling procedures</li>
        <li>Ensure adequate ventilation (local exhaust ventilation at each nail station is recommended by Cal/OSHA)</li>
        <li>Provide personal protective equipment (gloves, masks) as appropriate</li>
        <li>Monitor airborne chemical concentrations if there is reason to believe permissible exposure limits may be exceeded</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        A Cal/OSHA citation after a worker illness or injury complaint can trigger a cascade of
        consequences: fines, mandatory abatement (installing ventilation systems, modifying
        workstations), and increased scrutiny of the salon&rsquo;s operations. The cost of
        retrofitting a nail salon with proper ventilation can be $20,000&ndash;$50,000 or more.
        If this retrofit is required as part of a claim-related rebuild, it becomes an ordinance
        or law issue &mdash; the increased cost of complying with current regulations.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        California Board of Barbering and Cosmetology Licensing
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California Business &amp; Professions Code &sect;7316 et seq. establishes licensing
        requirements for barbers, cosmetologists, estheticians, manicurists, and establishments.
        The California Board of Barbering and Cosmetology (BBC) inspects salons for health and
        safety compliance. Insurance implications of BBC requirements include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Establishment license:</strong> A salon cannot operate without a current
          establishment license. If a loss destroys the salon and it is rebuilt, the salon
          must obtain a new inspection and potentially a new establishment license before
          reopening. This can add days or weeks to the period of restoration.
        </li>
        <li>
          <strong>Practitioner licensing:</strong> Stylists, estheticians, and manicurists
          must hold current California licenses. If a booth renter is performing services
          without a valid license, the salon owner may face administrative action, and the
          salon&rsquo;s insurance carrier may deny coverage for claims arising from unlicensed
          practice.
        </li>
        <li>
          <strong>Sanitation requirements:</strong> BBC regulations (Title 16, CCR &sect;977
          et seq.) require specific sanitation procedures for tools, equipment, and workstations.
          Failure to comply can result in citations, fines, and temporary closure. A
          contamination event (such as a client contracting a fungal or bacterial infection from
          unsanitary equipment) may trigger both a BBC investigation and an insurance claim.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Practical Coverage Checklist for Salons and Spas
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The following checklist addresses the coverage components that salon and spa owners most
        commonly overlook:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Property coverage at full replacement cost:</strong> Include all equipment
          (styling stations, shampoo bowls, dryers, laser machines, treatment tables, retail
          inventory), plus{' '}
          <Link href="/resources/tenant-improvements-betterments" className="text-blue-700 underline hover:text-blue-900">
            tenant improvements and betterments
          </Link>{' '}
          (plumbing, electrical, flooring, cabinetry, treatment room buildouts).
        </li>
        <li>
          <strong>
            <Link href="/resources/equipment-breakdown-coverage" className="text-blue-700 underline hover:text-blue-900">
              Equipment breakdown coverage
            </Link>:
          </strong>{' '}
          Essential for laser machines, IPL devices, HVAC systems, water heaters, and any
          equipment with mechanical or electrical components.
        </li>
        <li>
          <strong>Professional liability (salon services):</strong> Covering hair services,
          esthetics, nail services, waxing, and non-medical spa treatments. This is separate
          from the CGL and must be specifically purchased.
        </li>
        <li>
          <strong>Medical professional liability (medical spas only):</strong> If the spa
          performs any medical procedures &mdash; lasers, injectables, prescription chemical
          peels, IV therapy &mdash; a medical malpractice policy is required in addition to
          the salon professional liability policy.
        </li>
        <li>
          <strong>Product liability:</strong> Confirm the CGL&rsquo;s products-completed
          operations coverage applies to retail product sales. If the salon sells house-brand
          or private-label products, ensure manufacturer liability is addressed.
        </li>
        <li>
          <strong>Pollution liability:</strong> Either an endorsement to the CGL or a standalone
          environmental liability policy that covers chemical exposure claims arising from normal
          salon operations.
        </li>
        <li>
          <strong>
            <Link href="/resources/business-interruption" className="text-blue-700 underline hover:text-blue-900">
              Business income
            </Link>{' '}
            with extended{' '}
            <Link href="/resources/period-of-restoration-disputes" className="text-blue-700 underline hover:text-blue-900">
              period of indemnity
            </Link>:
          </strong>{' '}
          Calculate based on all revenue streams (service revenue, booth rent, retail sales,
          ancillary services). Include at least 12 months of extended indemnity for client
          base rebuilding.
        </li>
        <li>
          <strong>
            <Link href="/resources/water-damage-claims" className="text-blue-700 underline hover:text-blue-900">
              Water damage
            </Link>{' '}
            awareness:
          </strong>{' '}
          Given the number of plumbing connections in a salon, water damage is among the most
          likely loss types. Ensure property limits are adequate and understand your policy&rsquo;s
          mold sublimit.
        </li>
        <li>
          <strong>Cyber liability:</strong> Salons collect client payment information, contact
          details, and (in medical spas) health information. A data breach triggers notification
          requirements under California Civil Code &sect;1798.82 and potential HIPAA implications
          for medical spas.
        </li>
        <li>
          <strong>Booth renter insurance requirements:</strong> If the salon uses a booth rental
          model, require each booth renter to carry their own professional liability and general
          liability insurance, naming the salon as an additional insured. Collect certificates
          of insurance and verify coverage annually.
        </li>
        <li>
          <strong>Workers&rsquo; compensation:</strong> Required for all W-2 employees in
          California. If the salon uses booth renters, the classification question (employee
          vs. independent contractor) directly affects workers&rsquo; comp obligations.
        </li>
      </ul>

      <CalloutBox variant="warning" title="The Booth Rental Insurance Gap Is Real">
        <p>
          If you operate a booth rental salon, understand that your salon&rsquo;s insurance
          policy likely does not cover the booth renter&rsquo;s professional services, the
          booth renter&rsquo;s personal property, or the booth renter&rsquo;s business income.
          If a booth renter causes injury to a client and the booth renter has no insurance,
          the client will sue the salon owner. Require proof of insurance from every booth
          renter, enforce it, and verify it. The cost of a renter&rsquo;s professional liability
          policy is typically $200&ndash;$500 per year &mdash; far less than the cost of one
          uninsured claim.
        </p>
      </CalloutBox>
    </>
  )
}
