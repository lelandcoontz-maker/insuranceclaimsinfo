import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Pre-Existing Damage vs. Storm Damage: Fighting the "Wear and Tear" Denial',
  description:
    'Insurance companies routinely attribute storm damage to pre-existing conditions. Learn how to distinguish legitimate storm damage from wear and tear, build your evidence, and defeat the most common denial tactic in property insurance.',
  summary:
    'Insurers routinely blame storm damage on pre-existing wear and tear to deny claims. Counter it by documenting the storm event, the condition before and after, and the mechanism of damage, distinguishing sudden storm harm from gradual deterioration.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational in nature and reflects the author&rsquo;s interpretation
          of California insurance law as a Licensed Public Adjuster. It is not legal advice. If
          your insurer has denied a storm-damage claim on pre-existing-condition or wear-and-tear
          grounds, consult a licensed California attorney who specializes in insurance coverage
          disputes.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        &ldquo;The damage to your roof is consistent with normal wear and tear, not the reported
        storm event.&rdquo; If you have filed a roof claim, there is a good chance
        you have heard some version of this sentence. The &ldquo;pre-existing damage&rdquo; or
        &ldquo;wear and tear&rdquo; denial is the single most common basis for denying or reducing
        property insurance claims — and it is wrong far more often than carriers would like you to
        believe.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Every roof ages. Every roof shows some level of weathering. But an aging roof can absolutely
        sustain new storm damage — and the presence of pre-existing wear does not eliminate or reduce
        the carrier&apos;s obligation to pay for damage caused by a covered peril. The carrier must
        pay for the storm damage. Period.
      </p>

      <CalloutBox variant="legal" title="The Efficient Proximate Cause Doctrine">
        <p>
          In California, when a loss involves both covered and excluded causes, the &ldquo;efficient
          proximate cause&rdquo; doctrine applies. If the storm was the dominant cause of the damage,
          the entire loss is covered — even if pre-existing conditions made the property more
          vulnerable. The carrier cannot deny a storm claim simply because the roof was old.
          (<em>Garvey v. State Farm</em>, 48 Cal.3d 395 (1989))
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why Carriers Love the &ldquo;Wear and Tear&rdquo; Argument
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Standard homeowner policies exclude damage from wear and tear, gradual deterioration, and
        maintenance failures. Carriers know this — and they use it to their advantage by reclassifying storm damage
        as pre-existing. The strategy works because:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Every older roof has some wear.</strong> This gives the carrier a plausible-sounding
          basis for the argument — &ldquo;Look, the roof was already in poor condition.&rdquo;
        </li>
        <li>
          <strong>Most policyholders cannot distinguish the two.</strong> Unless you are a
          trained roofing professional, you may not know whether granule loss is from hail or aging.
        </li>
        <li>
          <strong>The carrier controls the narrative.</strong> The carrier&apos;s adjuster and
          engineer inspect first, set the framing, and write the report. By the time you see the
          denial letter, the &ldquo;pre-existing&rdquo; label is already attached.
        </li>
        <li>
          <strong>It shifts the burden.</strong> Once the carrier says &ldquo;wear and tear,&rdquo;
          the policyholder must prove otherwise — which requires hiring an expert and fighting back.
          Many people do not.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Distinguish Storm Damage From Pre-Existing Conditions
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        1. Directional Patterns
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Storm damage follows the storm. Wind-driven hail and wind damage concentrate on the
        windward-facing slopes of the roof. If the north and west slopes show heavy damage while the
        south and east slopes show little, that is a directional pattern consistent with a
        storm — not aging. Normal wear and tear, by contrast, is roughly uniform across the roof
        (or worse on south-facing slopes due to UV exposure). A carrier engineer who claims
        &ldquo;wear and tear&rdquo; but cannot explain the directional pattern is ignoring the
        evidence.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        2. Timeline Evidence
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Wear and tear is gradual. Storm damage happens on a specific date. Key timeline evidence
        includes:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Prior inspection reports:</strong> If the roof was inspected before the storm
          (during purchase, refinancing, or a prior claim) and no damage was noted, that establishes
          a baseline.
        </li>
        <li>
          <strong>Real estate disclosures:</strong> If you bought the home recently and the seller
          disclosed no roof damage, that is evidence the damage is post-purchase.
        </li>
        <li>
          <strong>Prior claim history:</strong> If the property had no roof claims before this storm,
          that undermines the &ldquo;pre-existing&rdquo; argument.
        </li>
        <li>
          <strong>Maintenance records:</strong> Receipts for gutter cleaning, roof maintenance, or
          minor repairs show the roof was being maintained — countering the &ldquo;neglect&rdquo;
          implication.
        </li>
        <li>
          <strong>Interior damage timing:</strong> If interior leaks or staining appeared only after
          the storm, that establishes causation.
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        3. Collateral Evidence
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the storm was severe enough to damage your roof, it likely damaged other components too.
        Dented gutters, damaged vents, cracked window screens, and hail-marked HVAC units all
        corroborate that a damaging storm event occurred. Wear and tear does not dent your
        gutters or crack your window screens. For a full list of what to inspect, see our guide on{' '}
        <Link href="/resources/hail-damage-science" className="text-[#2E74B5] hover:underline">
          the science of hail damage
        </Link>.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        4. Neighboring Properties
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Hail and windstorms do not hit one house and skip the next. If your neighbors filed
        claims for the same storm and received payment — especially neighbors with the same carrier
        — that is powerful evidence. The carrier cannot credibly argue that the storm damaged
        the houses on either side of yours but somehow skipped your property.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Obtaining this information can be challenging, but local roofing contractors working in the
        area often know which streets had claims paid. Your Public Adjuster can also research this
        through industry channels.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        5. Weather Data
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Objective weather records confirm whether a damaging storm occurred at your location. NOAA
        storm reports, commercial hail verification services (HailTrace, CoreLogic), and local
        weather station data can establish hail size, wind speed, storm duration, and direction.
        If the data confirms 1.5-inch hail at your address and the engineer says &ldquo;no storm
        damage,&rdquo; the data contradicts the opinion.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        6. Damage Characteristics
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        At the physical level, storm damage and wear have different characteristics:
      </p>
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full bg-white border border-gray-200 text-sm">
          <thead>
            <tr className="bg-[#1F3964] text-white">
              <th className="px-4 py-2 text-left">Feature</th>
              <th className="px-4 py-2 text-left">Storm Damage</th>
              <th className="px-4 py-2 text-left">Wear and Tear</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr className="border-b">
              <td className="px-4 py-2 font-medium">Granule loss pattern</td>
              <td className="px-4 py-2">Localized, circular impacts</td>
              <td className="px-4 py-2">Uniform, widespread thinning</td>
            </tr>
            <tr className="border-b bg-gray-50">
              <td className="px-4 py-2 font-medium">Distribution across roof</td>
              <td className="px-4 py-2">Directional (windward slopes worse)</td>
              <td className="px-4 py-2">Roughly uniform (or south-side worse)</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2 font-medium">Mat condition</td>
              <td className="px-4 py-2">Bruised/fractured at impact points</td>
              <td className="px-4 py-2">Dried out, brittle throughout</td>
            </tr>
            <tr className="border-b bg-gray-50">
              <td className="px-4 py-2 font-medium">Cracking pattern</td>
              <td className="px-4 py-2">Radiating from impact point</td>
              <td className="px-4 py-2">Linear, along grain direction</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2 font-medium">Collateral damage</td>
              <td className="px-4 py-2">Dents on soft metals, screens, HVAC</td>
              <td className="px-4 py-2">None — wear does not dent metal</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-4 py-2 font-medium">Onset</td>
              <td className="px-4 py-2">Sudden, tied to specific date</td>
              <td className="px-4 py-2">Gradual, no specific trigger</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The &ldquo;Old Roof&rdquo; Trap
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Carriers love to point out roof age as if it were a defense: &ldquo;This roof is 18 years
        old — the damage is due to age, not the storm.&rdquo; This argument conflates two separate
        issues:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Age is not, by itself, a coverage defense.</strong> Storm damage to a roof
          is generally covered without regard to roof age, absent specific age-related
          endorsements in the policy. A 20-year-old roof remains insured property. The carrier
          collected premiums to cover it.
        </li>
        <li>
          <strong>Old roofs are more vulnerable, not immune.</strong> An aged roof is actually
          <em> more</em> susceptible to storm damage, not less. Hardened asphalt, weakened granule
          adhesion, and brittle fiberglass mat mean that hail and wind that might not damage a new
          roof <em>will</em> damage an older one.
        </li>
        <li>
          <strong>Depreciation is the correct remedy, not denial.</strong> If the carrier wants to
          account for age, the appropriate tool is depreciation (paying ACV instead of RCV until
          repairs are complete) — not outright denial. See our guide on{' '}
          <Link href="/resources/acv-rcv" className="text-[#2E74B5] hover:underline">
            ACV vs. RCV
          </Link>.
        </li>
      </ul>

      <CalloutBox variant="warning" title="Do not Let Roof Age Intimidate You">
        <p>
          Carriers count on policyholders feeling embarrassed about an older roof and accepting the
          denial. Do not. Your premiums covered this roof. The storm damaged this roof. The
          policy pays for storm damage. Roof age is relevant to depreciation — it is not a basis
          for denial.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Concurrent Causation and California Law
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many claims involve both a covered cause (the storm) and an excluded cause (wear and tear).
        The roof was aging <em>and</em> the storm hit it. In California, the efficient proximate
        cause doctrine applies:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          If the <strong>covered peril (storm)</strong> is the <strong>predominant cause</strong> of
          the loss, the entire loss is covered, even if an excluded condition (age) contributed.
        </li>
        <li>
          The carrier bears the burden of proving that the excluded cause was the predominant cause.
          The policyholder does not have to prove the roof was in perfect condition before the
          storm.
        </li>
        <li>
          &ldquo;Anti-concurrent causation&rdquo; clauses (which some carriers include to
          override this doctrine) are unenforceable in California to the extent they conflict
          with the efficient proximate cause doctrine. The doctrinal lineage runs from
          <em> Sabella v. Wisler</em> (1963) 59 Cal.2d 21 (foundational EPC case in the
          first-party context) through <em>Garvey v. State Farm</em> (1989) 48 Cal.3d 395
          (modern restatement). The Court of Appeal directly held in <em>Howell v. State
          Farm</em> (1990) 218 Cal.App.3d 1446 that ACC language cannot be used to deny
          coverage when a covered peril is the efficient proximate cause. The California
          Supreme Court has restated the general rule (in <em>Julian v. Hartford
          Underwriters</em> (2005) 35 Cal.4th 747, although on <em>Julian</em>&rsquo;s facts
          the Court enforced a carrier&rsquo;s narrow distinct-peril exclusion).
        </li>
        <li>
          <strong>The carrier&apos;s burden on exclusions.</strong> The California Supreme
          Court held in <em>Aydin Corp. v. First State Insurance Co.</em> (1998) 18 Cal.4th
          1183 that the insurer bears the burden of proving the applicability of a coverage
          exclusion. In a storm-damage denial premised on wear-and-tear or pre-existing
          conditions, that means the carrier &mdash; not the insured &mdash; has to prove the
          excluded cause, rather than the covered peril, was the efficient proximate cause of
          the loss.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        This means even if the roof had pre-existing wear, if the storm caused the damage you are
        claiming, the carrier owes payment. The existence of prior wear does not create an
        exclusion.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Fight the &ldquo;Wear and Tear&rdquo; Denial
      </h2>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Get the denial in writing.</strong> 10 CCR &sect; 2695.7(b)(1) requires the
          carrier&apos;s denial to state, in writing, the factual and legal bases for the
          denial &mdash; including the specific policy provisions relied on. The insured can
          ask in writing for the supporting documentation behind that statement of bases
          (engineer reports, photographs, field notes), though pre-litigation production of
          underlying expert work product is not literally compelled by &sect; 2695.7(b)(1)
          itself.
        </li>
        <li>
          <strong>Hire an independent expert.</strong> A qualified roofing consultant or independent
          forensic engineer should inspect the roof and prepare a competing report that documents
          storm damage patterns, distinguishes them from pre-existing wear, and explains why the
          carrier&apos;s engineer&apos;s conclusions are wrong. See our guide on{' '}
          <Link href="/resources/biased-insurance-experts" className="text-[#2E74B5] hover:underline">
            biased insurance experts and carrier engineer reports
          </Link>.
        </li>
        <li>
          <strong>Assemble your timeline.</strong> Gather any prior inspection reports, real estate
          disclosures, maintenance records, and photographs showing the roof&apos;s condition before
          the storm.
        </li>
        <li>
          <strong>Obtain weather data.</strong> NOAA storm reports, commercial hail verification, and
          local weather records confirm the storm event and its severity at your location.
        </li>
        <li>
          <strong>Document collateral damage.</strong> Photograph every dented gutter, vent, pipe
          boot, HVAC unit, and window screen. These items do not suffer from &ldquo;wear and
          tear&rdquo; — their damage corroborates the storm event.
        </li>
        <li>
          <strong>Research neighboring claims.</strong> If neighbors received payment for the same
          storm, document this.
        </li>
        <li>
          <strong>Submit a written rebuttal.</strong> Address the carrier&apos;s engineer report
          point by point, attach your expert&apos;s findings, weather data, and collateral evidence,
          and demand the claim be reconsidered. See our guide on{' '}
          <Link href="/resources/claim-negotiation-letters" className="text-[#2E74B5] hover:underline">
            writing effective claim letters
          </Link>.
        </li>
        <li>
          <strong>Invoke appraisal or file a complaint.</strong> If the carrier refuses to reconsider,
          the{' '}
          <Link href="/resources/appraisal" className="text-[#2E74B5] hover:underline">
            appraisal process
          </Link>{' '}
          or a{' '}
          <Link href="/resources/cdi-complaint" className="text-[#2E74B5] hover:underline">
            CDI complaint
          </Link>{' '}
          may be your next step. For claims involving clear{' '}
          <Link href="/resources/bad-faith" className="text-[#2E74B5] hover:underline">
            bad faith
          </Link>{' '}
          — where the carrier knew the denial was unfounded — an attorney may be appropriate.
        </li>
      </ol>

      <CalloutBox variant="tip" title="The Burden Is on the Carrier">
        <p>
          Remember: you do not have to prove your roof was in perfect condition before the storm.
          You only have to show that the storm caused damage. The carrier bears the burden of proving
          that the damage was pre-existing. If their engineer&apos;s report does not adequately
          distinguish storm damage from wear — or ignores directional patterns, collateral evidence,
          and weather data — the denial is on weak ground.
        </p>
      </CalloutBox>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Claim Denied as &ldquo;Wear and Tear&rdquo;?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          A Public Adjuster can challenge the carrier&apos;s pre-existing damage argument with
          independent inspection, weather data, collateral evidence, and a detailed rebuttal.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Request a Free Claim Review →
        </Link>
      </div>

      <hr className="my-8 border-gray-300" />
      <p className="text-sm text-gray-500 italic">
        This article is for informational purposes only and does not constitute legal advice. Insurance
        policies and applicable law vary by state and by policy form. Consult with a licensed
        professional regarding your specific situation.
      </p>
      <p className="text-sm text-gray-500 mt-4 italic">
        Written by Leland Coontz III, Licensed Public Adjuster, CA License #2B53445.
      </p>
    </>
  )
}
