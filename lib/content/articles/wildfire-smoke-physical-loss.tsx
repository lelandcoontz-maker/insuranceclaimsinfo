import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Wildfire Smoke and "Direct Physical Loss": The Coverage Debate in California',
  description:
    'When wildfire smoke infiltrates a home without flames ever reaching it, does the contamination constitute direct physical loss under a homeowner policy? California courts are split, but the science and the law favor policyholders.',
  summary:
    'When wildfire smoke contaminates a home without flames reaching it, the question is whether that contamination is \'direct physical loss.\' California courts are split, but the science of pervasive toxic residue and the law favor coverage for policyholders.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational in nature and reflects the author&rsquo;s interpretation
          of California physical-loss doctrine as a Licensed California Public Adjuster. It is
          not legal advice. The case law in this area is evolving and the application of any
          decision to a specific smoke-damage claim depends on the policy language, the
          jurisdiction, and the documented facts of contamination. For legal questions about a
          specific wildfire-smoke claim, consult a licensed California attorney who
          specializes in insurance coverage disputes. For the broader practical framework on
          smoke-damage claims handling, see our umbrella article on{' '}
          <Link href="/resources/smoke-damage-claims" className="text-[#2E74B5] hover:underline">
            smoke damage insurance claims in California
          </Link>
          .
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        A wildfire burns miles away. The flames never reach the property. But the smoke does. It
        penetrates the building envelope, saturates soft furnishings, embeds in HVAC ductwork,
        deposits carcinogenic particulate matter on every surface, and leaves behind volatile organic
        compounds that linger for months. The home is not charred. It is not structurally compromised
        by flame. But it is contaminated &mdash; and depending on the severity of the infiltration,
        it may be uninhabitable until professional remediation is completed.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The policyholder files a claim. The insurer responds with a now-familiar argument: smoke
        odor and particulate contamination do not constitute &ldquo;direct physical loss of or
        damage to&rdquo; property. The home still stands. The structure is intact. Therefore,
        the insurer argues, there is no covered loss.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This argument has become one of the most consequential coverage disputes in California
        property insurance. It sits at the intersection of environmental science, policy
        interpretation, and a body of case law that developed rapidly during the COVID-19 pandemic
        and is now being applied &mdash; with very different results &mdash; to wildfire smoke
        contamination.
      </p>

      <CalloutBox variant="important" title="Smoke Damage Is Not the Same as COVID Closure">
        <p>
          Insurers frequently cite COVID-era court decisions to deny wildfire smoke claims. But there
          is a fundamental difference: COVID cases involved the theoretical <em>presence</em> of a
          virus on surfaces, while wildfire smoke involves measurable, testable particulate
          contamination that physically alters the property. Courts that rejected COVID business
          interruption claims did so largely because claimants could not demonstrate tangible physical
          change to their property. Wildfire smoke contamination is a different factual universe.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The &ldquo;Direct Physical Loss&rdquo; Requirement
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Nearly every property insurance policy conditions coverage on &ldquo;direct physical loss of
        or damage to&rdquo; the insured property. This phrase does two things: it limits coverage to
        physical (as opposed to purely economic) harm, and it requires a direct connection between
        the peril and the loss. What the phrase does <em>not</em> do &mdash; despite what many
        insurers argue &mdash; is require structural destruction. The word &ldquo;loss&rdquo; is
        separate from &ldquo;damage,&rdquo; and California courts have recognized that
        distinction.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The phrase &ldquo;direct physical loss <em>of</em>&rdquo; property refers to situations
        where the property is rendered unusable or inaccessible &mdash; a loss of the property&rsquo;s
        functionality &mdash; even without visible structural damage. The phrase &ldquo;damage
        <em>to</em>&rdquo; property refers to a tangible alteration of the property&rsquo;s physical
        condition. Wildfire smoke contamination can satisfy both prongs, depending on the
        circumstances.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The COVID Split: What the Courts Actually Said
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The COVID-19 pandemic generated hundreds of insurance coverage decisions across the country,
        and many of them addressed the meaning of &ldquo;direct physical loss.&rdquo; Businesses
        that were forced to close due to government orders filed claims under their property
        policies, arguing that the loss of use of their premises constituted direct physical loss.
        The overwhelming majority of courts rejected these claims. But the reasoning matters as
        much as the outcome &mdash; because the reasoning actually supports wildfire smoke
        policyholders.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        The California Supreme Court: <em>Another Planet Entertainment</em>
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The most significant California decision came in <em>Another Planet Entertainment, LLC v.
        Vigilant Insurance Co.</em> (2024) 15 Cal.5th 1106 (parallel cite 548 P.3d 303). The
        California Supreme Court held that &ldquo;direct physical loss of&rdquo; property requires
        a &ldquo;distinct, demonstrable, physical alteration of property.&rdquo; The court
        rejected the pure &ldquo;loss of use&rdquo; theory &mdash; meaning that the mere
        inability to use property due to a government order, without any physical change to the
        property itself, does not trigger coverage.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Two features of the opinion matter for wildfire smoke claims. First, the court was
        careful to define what it meant. The &ldquo;physical alteration&rdquo; requirement is
        not the same as requiring structural damage. The court acknowledged that contamination
        can constitute a physical alteration, and the opinion specifically distinguished
        situations involving actual physical substances &mdash; toxic gases, hazardous
        particles, and environmental contaminants &mdash; from the mere theoretical presence of
        a virus. Second, the court was explicit that its holding was narrow:{' '}
        <em>&ldquo;[W]e cannot and do not decide whether the COVID-19 virus can ever constitute
        direct physical loss or damage to property.&rdquo;</em> The opinion is therefore a
        holding that <em>these particular allegations</em> failed to plead physical alteration,
        not a categorical rule that contamination cannot satisfy the standard. Attorneys at
        Hunton Andrews Kurth and Anderson Kill have both analyzed this distinction extensively,
        noting that <em>Another Planet</em> preserved the contamination-based theory of physical
        loss while rejecting the government-order-only theory. Opposing counsel will sometimes
        invoke the court&rsquo;s reservation against COVID virus claims as if it sweeps more
        broadly; it does not.
      </p>

      <CalloutBox variant="legal" title="Key Legal Distinction">
        <p>
          The California Supreme Court in <em>Another Planet</em> required a &ldquo;distinct,
          demonstrable, physical alteration&rdquo; &mdash; but it did not require structural
          destruction. Contamination that physically changes the condition of property satisfies
          this standard. Wildfire smoke deposits particulate matter, embeds carcinogens in porous
          materials, and alters indoor air quality in measurable ways. This is physical alteration,
          not mere loss of use.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        <em>Gharibian v. Wawanesa</em>: What It Does and Does Not Hold
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurers have seized on <em>Gharibian v. Wawanesa General Insurance Co.</em> (2025)
        108 Cal.App.5th 730 as authority for blanket smoke damage denials. In{' '}
        <em>Gharibian</em>, the California Court of Appeal (Second District, Division 2) ruled
        against the policyholder &mdash; but on very specific factual grounds. The Granada
        Hills home suffered soot, ash, and fire debris contamination from the 2019 Saddle
        Ridge Fire. Critically, the plaintiffs&rsquo; own industrial hygienist (L.Y.
        Environmental) testified that soot by itself does not physically damage a structure
        and that the home could be fully cleaned by wiping surfaces, HEPA vacuuming, and
        power-washing the outside. The insurer had paid over $20,000 for professional
        cleaning services that the plaintiffs never used. Applying <em>Another Planet</em>,
        the court held that this debris did not alter the property in a lasting and
        persistent manner and was easily cleaned or removed. The court did not hold that
        smoke damage can never constitute direct physical loss. It held that <em>this
        particular claimant</em> failed to demonstrate lasting and persistent physical
        alteration on the record before the court.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The precedential weight of <em>Gharibian</em> has itself been contested. The
        California policyholder bar &mdash; through United Policyholders, in partnership with
        the Consumer Federation of America &mdash; petitioned the California Supreme Court
        for depublication of the opinion (case no. S289700) on the grounds that the Court of
        Appeal misconstrued long-settled California law that a peril causes &ldquo;direct
        physical loss or damage&rdquo; when it changes the surface of the property and
        renders the property hazardous or unusable, and that the Court of Appeal improperly
        analogized wildfire smoke to the COVID-19 virus at issue in <em>Another Planet</em>.
        The depublication request was effectively denied; the opinion remains published and
        citable as 108 Cal.App.5th 730. But denial of a depublication request is not an
        expression of the California Supreme Court&rsquo;s agreement with the result or the
        reasoning of the underlying opinion (Cal. Rules of Court 8.1125(d)), and modern
        depublication denials cannot be read as merits endorsement because the Court denies
        essentially all such requests as a matter of routine practice. The depublication
        record is itself useful evidence that the consumer-side bar views <em>Gharibian</em>
        as wrongly decided, even if the case remains citable. Insurer counsel relying on{' '}
        <em>Gharibian</em> as if it were a settled doctrinal anchor for denying smoke claims
        is overreading both the opinion and its precedential reception.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The California Department of Insurance recognized the danger of carriers misreading
        <em> Gharibian</em> and issued Bulletin 2025-7 specifically to address the problem. The
        CDI made clear that smoke damage <em>can</em> constitute covered direct physical loss,
        that insurers have a duty to investigate smoke damage claims rather than issue blanket
        denials, and that reliance on <em>Gharibian</em> as a basis for categorical denial is
        improper. For detailed analysis of the CDI&rsquo;s position, see{' '}
        <Link href="/resources/cdi-smoke-damage-coverage" className="text-blue-700 underline hover:text-blue-900">
          CDI Bulletin 2025-7 and Your Rights
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why Wildfire Smoke Is Different from COVID
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The critical distinction between COVID business interruption claims and wildfire smoke
        property claims lies in the nature of the physical alteration. COVID claimants struggled
        to demonstrate physical change to their property because the virus &mdash; to the extent
        it was present on surfaces at all &mdash; could be eliminated through routine cleaning
        and did not leave lasting physical traces. Courts found that this did not rise to the level
        of a &ldquo;distinct, demonstrable, physical alteration.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Wildfire smoke contamination is categorically different:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Measurable particulate deposits.</strong> Wildfire smoke contains PM2.5 and PM10
          particles, polycyclic aromatic hydrocarbons (PAHs), volatile organic compounds (VOCs),
          and heavy metals. These substances physically deposit on and embed within building
          materials. They can be detected, measured, and quantified through environmental testing.
        </li>
        <li>
          <strong>Penetration of porous materials.</strong> Smoke particles penetrate drywall,
          insulation, carpeting, upholstered furniture, clothing, and soft goods in ways that
          cannot be reversed through surface cleaning alone. In severe cases, building materials
          must be removed and replaced because the contamination has penetrated beyond what
          cleaning can reach.
        </li>
        <li>
          <strong>HVAC system contamination.</strong> Smoke infiltrates ductwork, filters, and
          mechanical systems. Even after the exterior air quality improves, contaminated HVAC
          systems continue to recirculate particulate matter throughout the structure. For detailed
          information on smoke remediation requirements, see{' '}
          <Link href="/resources/smoke-cleanup-protocols" className="text-blue-700 underline hover:text-blue-900">
            smoke cleanup protocols
          </Link>.
        </li>
        <li>
          <strong>Documented health hazards.</strong> The health effects of wildfire smoke
          contamination are well-documented. Unlike the speculative surface presence of a virus,
          the carcinogenic compounds in wildfire smoke create genuine, measurable health risks for
          occupants of contaminated structures.
        </li>
        <li>
          <strong>Persistent alteration.</strong> Without professional remediation &mdash; often
          including removal and replacement of contaminated materials &mdash; the physical
          contamination remains. It does not dissipate on its own. The property&rsquo;s physical
          condition has been altered in a way that requires affirmative restoration.
        </li>
      </ul>

      <CalloutBox variant="tip" title="Environmental Testing Is Critical">
        <p>
          The single most important step for policyholders with smoke-contaminated property is
          obtaining professional environmental testing. An industrial hygienist or environmental
          consultant can document the type and concentration of particulate contamination, the
          depth of penetration into building materials, the contamination of HVAC systems, and
          the health risks to occupants. This evidence directly addresses the &ldquo;distinct,
          demonstrable, physical alteration&rdquo; standard established in <em>Another
          Planet</em>.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        Federal courts in California have begun to treat the wildfire-smoke distinction
        expressly. In <em>Bottega, LLC v. National Surety Corp.</em>, No. 21-cv-03614-JSC,
        2025 U.S. Dist. LEXIS 5666 (N.D. Cal. Jan. 10, 2025), Judge Jacqueline Scott Corley
        denied an insurer&rsquo;s motion for summary judgment in a business-income dispute
        arising from the 2017 North Bay Fires. The defendant insurer had made admissions
        during discovery &mdash; including that the fires caused smoke, soot, and ash damage
        and direct physical loss and damage to the insured locations &mdash; which the court
        held conclusively established physical loss or damage. <em>Bottega</em> is the
        strongest federal-court authority in California for the proposition that documented
        smoke contamination meets the direct-physical-loss requirement under a property
        policy with COVID-era language. Judge Corley distinguished the COVID line of cases by
        analogizing smoke to asbestos and other contaminants that physically alter property,
        rather than to a virus that can be removed through cleaning, and cited{' '}
        <em>Inns-by-the-Sea v. California Mutual Insurance Co.</em> (2021) 71 Cal.App.5th 688
        for the proposition that contamination of a structure that seriously impairs or
        destroys its function may qualify as direct physical loss.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A wildfire-smoke claim built on documented soot deposition, embedded volatile organic
        compounds, and HVAC contamination is structurally the kind of fact pattern{' '}
        <em>Another Planet</em> preserves coverage for &mdash; and <em>Bottega</em> is the
        case that operationalizes that distinction at the trial-court level. The only issue
        Judge Corley sent to the jury was causation: whether the policyholder&rsquo;s closure
        on October 9, 2017 was caused by the smoke damage or by other factors (lack of
        customers, staffing shortages, general post-fire disorder). Even with documented
        physical damage, the policyholder still bears the burden of proving the
        loss-of-business-income causation chain.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Pre-COVID Foundation: Contamination as Physical Loss
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Long before COVID, California and federal courts applying California law recognized that
        contamination could constitute direct physical loss. These decisions remain good law and
        provide important support for wildfire smoke claims:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong><em>Hughes v. Potomac Insurance Co.</em> (1962) 199 Cal.App.2d 511:</strong>{' '}
          A foundational California case establishing that &ldquo;physical loss&rdquo; includes
          loss of use and habitability, not just structural destruction. The court held that a home
          rendered uninhabitable by a landslide had suffered a &ldquo;direct physical loss&rdquo;
          even though the structure itself was relatively intact.
        </li>
        <li>
          <strong><em>Western Fire Insurance Co. v. First Presbyterian Church</em> (Colo. 1968)
          437 P.2d 52:</strong> Although a Colorado decision, this case is widely cited for the
          principle that gasoline fumes permeating a building constituted physical loss &mdash;
          even though the structure was not visibly damaged &mdash; because the contamination
          rendered the building unusable and required remediation.
        </li>
        <li>
          <strong><em>Farmers Insurance Co. of Oregon v. Trutanich</em> (Or. Ct. App. 1993)
          858 P.2d 1332:</strong> Held that methamphetamine contamination constituted direct
          physical loss because the chemical residue required remediation before the property
          could be safely occupied.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The through-line in these decisions is clear: when a substance physically contaminates a
        property in a way that renders it unfit for its intended use and requires remediation to
        restore, the property has suffered a direct physical loss. Wildfire smoke contamination
        fits squarely within this established framework. Attorneys at Shernoff Bidart Echeverria
        have consistently advocated this position in representing California wildfire claimants,
        emphasizing that the science of particulate contamination makes smoke damage claims
        fundamentally stronger than the COVID claims that courts rejected.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        California&rsquo;s Regulatory Position
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The California Department of Insurance has taken an unequivocal position on wildfire smoke
        damage. CDI Bulletin 2025-7 states that smoke damage to residential and commercial
        properties can constitute covered loss under standard property policies. The bulletin
        specifically addresses the pattern of insurers issuing blanket denials based on a
        misreading of <em>Another Planet</em> and <em>Gharibian</em>, and directs carriers to
        investigate each smoke damage claim individually rather than applying categorical
        exclusions.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The CDI&rsquo;s position carries significant weight in California. While CDI bulletins
        are not binding law in the same way that court decisions are, they represent the
        regulatory body&rsquo;s interpretation of the insurance code and establish the standard
        against which the Department will evaluate carrier conduct. An insurer that issues blanket
        smoke damage denials in contravention of Bulletin 2025-7 risks regulatory action, and
        the denial pattern itself may constitute evidence of{' '}
        <Link href="/resources/bad-faith" className="text-blue-700 underline hover:text-blue-900">
          bad faith
        </Link>{' '}
        claims handling.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Policyholders Should Do
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Policyholders whose homes have been contaminated by wildfire smoke &mdash; even if the
        flames never reached their property &mdash; should take the following steps to protect
        their rights and build their claims:
      </p>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Document the contamination immediately.</strong> Photograph visible soot and
          residue. Record odors. Preserve samples of contaminated materials. Do not begin cleaning
          until the contamination has been professionally documented. Premature cleaning can
          destroy the evidence needed to prove the claim.
        </li>
        <li>
          <strong>Obtain professional environmental testing.</strong> Hire a certified industrial
          hygienist or environmental consultant to conduct air quality testing, surface sampling,
          and material analysis. The testing should document the types and concentrations of
          contaminants, compare them to established health and safety standards, and identify
          which building materials require remediation or replacement.
        </li>
        <li>
          <strong>File the claim promptly.</strong> Report the loss to the insurer as soon as the
          contamination is identified. Under California Insurance Code section 2071, policyholders
          must provide prompt notice of a loss. Do not wait for environmental test results before
          filing &mdash; file immediately and supplement with test results when available.
        </li>
        <li>
          <strong>Demand a proper investigation.</strong> If the insurer denies the claim without
          inspecting the property or without ordering its own environmental testing, that failure
          to investigate may itself constitute a violation of California&rsquo;s fair claims
          settlement practices. Under California Insurance Code section 790.03(h), insurers must
          conduct reasonable investigations before denying claims.
        </li>
        <li>
          <strong>Respond to blanket denials in writing.</strong> If the insurer cites <em>Another
          Planet</em> or <em>Gharibian</em> to deny the claim, respond in writing pointing out
          that those decisions do not support blanket denials of smoke contamination claims, that
          CDI Bulletin 2025-7 specifically addresses this issue, and that the policyholder has
          documentation of actual physical contamination that was not present in the cases the
          insurer is citing.
        </li>
        <li>
          <strong>Preserve all contaminated materials.</strong> Do not discard contaminated
          carpeting, insulation, drywall, or other materials until the insurer has had a
          reasonable opportunity to inspect and test them. If the insurer fails to inspect within
          a reasonable time after notice, document that failure and proceed with necessary
          remediation &mdash; but preserve representative samples.
        </li>
        <li>
          <strong>Engage a licensed Public Adjuster or attorney.</strong> Smoke damage claims
          require the intersection of environmental science, policy interpretation, and regulatory
          knowledge. A licensed{' '}
          <Link href="/resources/public-adjuster" className="text-blue-700 underline hover:text-blue-900">
            Public Adjuster
          </Link>{' '}
          can manage the documentation and negotiation process. If the claim is denied or
          significantly underpaid, an attorney experienced in insurance coverage disputes can
          evaluate the bad faith implications.
        </li>
      </ol>

      <CalloutBox variant="warning" title="Do Not Accept a Blanket Denial">
        <p>
          If an insurer denies a wildfire smoke damage claim by stating that smoke does not
          constitute direct physical loss &mdash; without inspecting the property, without ordering
          environmental testing, and without evaluating the specific contamination at issue &mdash;
          that denial may violate California&rsquo;s fair claims settlement practices and CDI
          Bulletin 2025-7. A blanket denial is not a proper coverage determination. It is a failure
          to investigate.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Smoke Exclusion Question
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some policies contain specific smoke-related exclusions or limitations. The most common
        is the exclusion for &ldquo;smog, rust, or other corrosion, or dry rot&rdquo; found in
        some HO-3 policy forms. Insurers sometimes argue that this language excludes wildfire
        smoke damage. This argument fails for several reasons.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        First, &ldquo;smog&rdquo; is not synonymous with wildfire smoke. Smog is a persistent
        atmospheric condition caused by industrial and vehicular pollution. Wildfire smoke is an
        acute contamination event caused by a specific fire. The ejusdem generis canon of
        construction &mdash; which limits general terms to the class of specific terms surrounding
        them &mdash; supports the reading that &ldquo;smog&rdquo; refers to ambient air quality
        conditions, not wildfire events.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Second, fire and the resulting smoke are standard covered perils under homeowner policies.
        The standard HO-3 policy covers fire as a named peril under Coverage A (dwelling) and as
        an open-peril risk under the policy&rsquo;s general structure. Smoke from a hostile fire
        is a natural and expected consequence of the fire peril. An exclusion for &ldquo;smog&rdquo;
        cannot be read to override the express coverage grant for fire and its consequences.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Third, under the doctrine of{' '}
        <Link href="/resources/contra-proferentem" className="text-blue-700 underline hover:text-blue-900">
          contra proferentem
        </Link>,
        ambiguous policy language is construed against the insurer that drafted it. If there is
        any ambiguity about whether &ldquo;smog&rdquo; encompasses wildfire smoke, that ambiguity
        must be resolved in the policyholder&rsquo;s favor.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Loss of Use and Additional Living Expenses
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Even in situations where the smoke contamination is being investigated and the coverage
        determination is pending, policyholders may be entitled to{' '}
        <Link href="/resources/ale-frv" className="text-blue-700 underline hover:text-blue-900">
          additional living expenses (ALE)
        </Link>{' '}
        if the home is not safe to occupy. ALE is a coverage provided by the policy itself
        (Coverage D in standard HO-3 forms). California Insurance Code &sect; 2051.5 builds on
        that by setting minimum ALE durations for losses arising from a state of emergency
        (24 months, extendable to 36 months under specified circumstances). If environmental
        testing demonstrates that the indoor air quality exceeds safe exposure levels, or that
        the contamination presents a health risk to occupants, the policyholder should not
        remain in the home &mdash; and the insurer should be covering the cost of temporary
        housing during remediation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurers sometimes refuse ALE on the theory that the underlying smoke damage claim has not
        yet been accepted. But the duty to provide ALE does not depend on final resolution of the
        coverage dispute. If the home is demonstrably unsafe to occupy due to contamination from a
        covered peril, the insurer&rsquo;s obligation to provide reasonable temporary housing
        accrues immediately. Forcing a policyholder to live in a contaminated home while the
        coverage dispute plays out is itself a potential fair claims violation.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Building the Evidentiary Record
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The lesson of <em>Gharibian</em> is not that smoke damage is uncoverable. The lesson
        is that evidence matters. The policyholder in that case did not present adequate evidence
        of actual physical contamination. Policyholders who invest in proper documentation and
        testing avoid that pitfall entirely. The evidentiary record for a strong wildfire smoke
        claim should include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Certified industrial hygienist report documenting contaminant types, concentrations,
          and locations within the structure
        </li>
        <li>
          Air quality test results from inside the structure, compared to applicable health
          and safety standards (EPA, Cal/OSHA, ASHRAE)
        </li>
        <li>
          Surface wipe samples showing particulate deposits on building materials and contents
        </li>
        <li>
          Photographic documentation of visible soot, discoloration, and residue
        </li>
        <li>
          HVAC inspection report documenting contamination of ductwork, filters, and
          mechanical components
        </li>
        <li>
          Remediation scope of work from a qualified contractor, identifying which materials
          can be cleaned and which must be removed and replaced
        </li>
        <li>
          Medical documentation if occupants have experienced symptoms consistent with smoke
          exposure (respiratory issues, headaches, eye irritation)
        </li>
      </ul>

      {/* ── Sources and Further Reading ─────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Sources &amp; Further Reading
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Hunton Andrews Kurth LLP</strong> &mdash; The firm&rsquo;s insurance recovery
          practice has published extensive analysis of the &ldquo;direct physical loss&rdquo;
          debate following COVID and its implications for contamination-based claims, including
          wildfire smoke. Search for their coverage analysis on the <em>Another Planet</em>
          decision and its impact on property contamination claims.
        </li>
        <li>
          <strong>Anderson Kill P.C.</strong> &mdash; Anderson Kill&rsquo;s policyholder-side
          insurance recovery group has analyzed the split in court decisions on physical loss,
          with particular attention to how contamination claims differ from government-order
          claims. Their publications on the post-COVID physical loss landscape are instructive
          for wildfire smoke claimants.
        </li>
        <li>
          <strong>Shernoff Bidart Echeverria LLP</strong> &mdash; As one of California&rsquo;s
          leading policyholder-side insurance firms, Shernoff Bidart Echeverria has represented
          numerous wildfire claimants and analyzed the intersection of smoke contamination,
          environmental testing, and the direct physical loss standard under California law.
        </li>
        <li>
          <strong>California Department of Insurance, Bulletin 2025-7</strong> &mdash; The CDI&rsquo;s
          formal guidance on smoke damage coverage, establishing that smoke damage can constitute
          covered loss and that insurers must investigate each claim individually.
        </li>
        <li>
          <strong><em>Another Planet Entertainment, LLC v. Vigilant Insurance Co.</em></strong>{' '}
          (2024) 15 Cal.5th 1106 &mdash; California Supreme Court decision establishing the
          &ldquo;distinct, demonstrable, physical alteration&rdquo; standard for direct physical
          loss claims.
        </li>
      </ul>

      <CalloutBox variant="legal" title="Disclaimer">
        <p>
          This article is for general educational purposes only and does not constitute legal advice.
          Insurance policies, regulations, and case law vary based on individual circumstances.
          The case law and statutory provisions discussed here reflect California law as of the date
          of publication and may not apply in other jurisdictions. Consult a licensed attorney for
          advice about your specific situation.
        </p>
        <p className="mt-2">
          <strong>Author:</strong> Leland Coontz III, Licensed Public Adjuster, CA License #2B53445
        </p>
      </CalloutBox>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Wildfire Smoke Damage to Your Home?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          If your home was contaminated by wildfire smoke &mdash; even if the flames never reached
          your property &mdash; you may have a valid insurance claim. A licensed Public Adjuster
          can coordinate environmental testing, document the contamination, and present the claim
          under the correct legal framework.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Request a Free Claim Review &rarr;
        </Link>
      </div>
    </>
  )
}
