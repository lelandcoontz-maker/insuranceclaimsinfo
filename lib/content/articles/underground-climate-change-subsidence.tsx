import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Underground Climate Change and Subsidence: The Coverage Gap Beneath Your Foundation',
  description:
    'How underground climate change is causing soil shrinkage and foundation damage across the country — and why the earth movement exclusion may leave policyholders without coverage for an emerging threat.',
  summary:
    'Shifting groundwater and drying soils (\'underground climate change\') are causing foundation-damaging subsidence, but the earth-movement exclusion may leave this emerging threat uncovered. Coverage often turns on the cause and any covered triggering peril.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="info" title="About This Article">
        <p>
          This article discusses an emerging area at the intersection of climate science and
          insurance coverage law. The scientific research is evolving rapidly, and the
          insurance industry has not yet fully grappled with the implications. This is
          educational information, not legal advice. Policyholders facing foundation damage
          should consult both a structural engineer and a licensed attorney regarding their
          specific situation.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        When most people think about climate change, they think about what is happening above
        ground &mdash; rising temperatures, intensifying storms, rising sea levels, worsening
        wildfires. But there is another dimension of climate change that is happening
        silently, invisibly, and directly beneath the foundations of millions of homes across
        the country. Scientists call it &ldquo;underground climate change,&rdquo; and its
        implications for homeowners and their insurance coverage are profound.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Underground climate change refers to the gradual warming of subsurface soils and
        rock formations as heat from the surface &mdash; amplified by rising air temperatures,
        urban heat islands, and changing precipitation patterns &mdash; penetrates downward
        into the ground. This warming changes the physical properties of the soil beneath
        buildings, causing it to shrink, shift, and settle in ways that can damage foundations,
        crack walls, and compromise the structural integrity of homes.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The insurance implications are significant. Foundation damage from soil movement is
        typically excluded under standard homeowner policies through the earth movement
        exclusion. But underground climate change raises questions that the insurance
        industry has not yet answered &mdash; questions about causation, foreseeability, and
        whether exclusions drafted decades ago should apply to a phenomenon that did not
        exist when those exclusions were written.
      </p>

      {/* ── What Is Underground Climate Change ────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        What Is Underground Climate Change?
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        The concept is straightforward but its consequences are not. As surface temperatures
        rise &mdash; particularly in urban areas where buildings, pavement, and infrastructure
        absorb and radiate heat &mdash; that thermal energy does not stop at ground level. It
        conducts downward into the soil, gradually raising subsurface temperatures. Research
        published by Northwestern University engineer Alessandro Rotta Loria and his
        colleagues has documented this phenomenon extensively, measuring significant
        temperature increases in the soil beneath urban areas.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The key insight from this research is that warming soil behaves differently than
        stable-temperature soil. When certain soil types &mdash; particularly clay-rich soils
        &mdash; warm and dry out, they shrink. When they cool and absorb moisture, they
        expand. This cycle of expansion and contraction creates differential movement beneath
        foundations: some areas of soil shift more than others, creating uneven support for
        the structure above.
      </p>

      <CalloutBox variant="important" title="The Scale of the Problem">
        <p>
          Attorneys at Anderson Kill, one of the nation&rsquo;s leading policyholder-side
          insurance coverage firms, have identified underground climate change as a
          significant emerging issue for property owners and their insurers. As Anderson Kill
          has observed in their analysis of this topic: &ldquo;The risk of subsidence and
          foundation damage from changing subsurface conditions is not theoretical &mdash;
          it is already manifesting in measurable structural damage to buildings across the
          country, and the insurance industry&rsquo;s response has been to point to exclusions
          that were never designed to address this kind of loss.&rdquo;
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        Unlike a sudden earthquake or landslide, underground climate change operates
        gradually. The soil shifts millimeters at a time. Cracks in foundations develop over
        months or years. By the time a homeowner notices the damage &mdash; doors that no
        longer close properly, cracks in drywall, uneven floors, gaps around window frames
        &mdash; the underlying soil movement may have been progressing for a long time.
      </p>

      {/* ── How It Differs from Traditional Subsidence ────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        How Underground Climate Change Differs from Traditional Subsidence
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Traditional subsidence &mdash; the sinking or settling of ground &mdash; has been
        understood for centuries. It typically results from identifiable causes: mining
        activity that removes underground support, withdrawal of groundwater that allows soil
        to compact, natural dissolution of limestone that creates sinkholes, or poor
        compaction of fill soil during construction.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Underground climate change is fundamentally different in several important respects:
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>It is not localized.</strong> Traditional subsidence tends to affect
          specific areas with identifiable geological or human-caused vulnerabilities.
          Underground climate change affects any area where subsurface temperatures are
          rising and soil conditions are susceptible to thermal changes &mdash; which
          includes most urban and suburban environments.
        </li>
        <li>
          <strong>It is gradual and cumulative.</strong> A sinkhole appears suddenly. A
          landslide happens in minutes. Underground climate change operates over years and
          decades, making it difficult to identify the precise onset of damage &mdash; a
          fact that creates enormous complications for insurance coverage triggers.
        </li>
        <li>
          <strong>It is driven by atmospheric change, not geological activity.</strong>
          Traditional earth movement exclusions in insurance policies were drafted to
          address geological events &mdash; earthquakes, landslides, mudflows, volcanic
          eruptions, sinkholes. Underground climate change is an atmospheric and thermal
          phenomenon that manifests in the soil. Whether it fits neatly within existing
          exclusion language is an open question.
        </li>
        <li>
          <strong>It interacts with existing soil vulnerabilities.</strong> Expansive clay
          soils that have coexisted with foundations for decades may begin behaving
          differently as subsurface temperatures change. A foundation built on soil that
          was stable at historic temperature ranges may become vulnerable as those
          temperature ranges shift. The cause is not the soil type &mdash; it is the
          change in conditions affecting that soil.
        </li>
      </ul>

      {/* ── The Earth Movement Exclusion ──────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        The Earth Movement Exclusion Problem
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Standard homeowner insurance policies contain an earth movement exclusion that
        eliminates coverage for damage caused by &ldquo;earthquake including land shock
        waves or tremors before, during, or after a volcanic eruption; landslide; mudflow;
        mudslide; subsidence; sinking, rising, or shifting of earth; and earth sinking,
        rising, or shifting including the land on which the dwelling or other structures
        are located.&rdquo;
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This exclusion is broad, and insurers have historically applied it aggressively to
        deny claims involving any form of ground movement or settlement. When a foundation
        cracks because the soil beneath it has shifted, most carriers will point to the earth
        movement exclusion regardless of the cause of the soil movement.
      </p>

      <CalloutBox variant="warning" title="The Exclusion Was Not Written for This">
        <p>
          The earth movement exclusion in standard homeowner policies was developed primarily
          in response to earthquake risk. Its application to thermally-induced soil changes
          from underground climate change raises questions that the drafters of that
          exclusion language could not have anticipated. Whether courts will extend the
          exclusion to cover this novel phenomenon &mdash; or find that it does not apply
          &mdash; remains to be litigated.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        The legal question is whether &ldquo;subsidence&rdquo; and &ldquo;sinking, rising,
        or shifting of earth&rdquo; encompass soil changes caused by atmospheric warming
        &mdash; a phenomenon entirely distinct from the geological events the exclusion was
        designed to address. Under the principle that ambiguous policy language must be
        construed in favor of the insured, there is an argument that the earth movement
        exclusion should not apply to damage caused by underground climate change. The
        exclusion was intended to address natural geological hazards and catastrophic earth
        events, not gradual thermal degradation of soil caused by human-driven climate change.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        In California, the contra proferentem rule requires ambiguous insurance policy
        language to be interpreted in the way the insured would reasonably understand it.
        A reasonable policyholder purchasing a homeowner policy would not understand the
        &ldquo;earth movement&rdquo; exclusion to encompass damage caused by global
        temperature changes affecting subsurface soil conditions. The exclusion evokes
        earthquakes and landslides &mdash; not the gradual warming of the ground beneath
        a suburban home.
      </p>

      {/* ── The Emerging Science ──────────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        The Emerging Science
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        The scientific research underpinning the concept of underground climate change is
        still developing, but several key findings have emerged:
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Subsurface temperatures are rising measurably.</strong> Research teams
          have installed temperature sensors at various depths beneath urban areas and
          documented temperature increases of several degrees Celsius compared to
          historical baselines. The warming is not uniform &mdash; it is concentrated
          beneath buildings, paved surfaces, and infrastructure that generate or absorb
          heat.
        </li>
        <li>
          <strong>Soil deformation is measurable.</strong> The same research teams have
          documented measurable soil deformation &mdash; both expansion and contraction
          &mdash; correlated with subsurface temperature changes. The deformations are
          small in absolute terms but significant relative to the tolerances of building
          foundations.
        </li>
        <li>
          <strong>Clay-rich soils are most vulnerable.</strong> Soils with high clay content
          are particularly susceptible to thermal changes because clay minerals expand when
          they absorb water and contract when they dry out. Temperature changes affect
          moisture dynamics in the soil, amplifying the expansion-contraction cycle that
          damages foundations.
        </li>
        <li>
          <strong>The problem will intensify.</strong> As surface temperatures continue to
          rise, subsurface warming will continue and accelerate. The research suggests that
          the structural impacts observed to date represent the early stages of a long-term
          trend, not a one-time adjustment.
        </li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        Northwestern University&rsquo;s research, published in the journal
        <em> Communications Engineering</em>, represents some of the most detailed work on
        this subject to date. The findings have significant implications for urban
        infrastructure, residential construction, and &mdash; inevitably &mdash; insurance
        coverage.
      </p>

      {/* ── Potential Coverage Arguments ──────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Potential Coverage Arguments for Policyholders
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        While no court has yet squarely addressed the coverage implications of underground
        climate change, several established principles of insurance coverage law may provide
        a framework for policyholder arguments:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        The Efficient Proximate Cause Doctrine
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        In California, the{' '}
        <Link href="/resources/efficient-proximate-cause" className="text-[#2E74B5] underline">
          efficient proximate cause doctrine
        </Link>{' '}
        provides that when a loss results from a chain of causation involving both covered
        and excluded perils, coverage depends on the nature of the efficient proximate
        cause &mdash; the predominant cause that set the chain in motion. If the efficient
        proximate cause of foundation damage is atmospheric warming (not excluded) that
        causes soil changes (potentially excluded), the analysis turns on which peril is
        the predominant cause. This is a fact-intensive inquiry that favors the
        policyholder in many scenarios.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        Ambiguity in the Exclusion Language
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        As noted above, the earth movement exclusion was drafted to address specific
        geological hazards. If the exclusion language is ambiguous as applied to
        thermally-induced soil changes, California law requires that ambiguity to be
        resolved in the policyholder&rsquo;s favor. The insurer bears the burden of
        proving that an exclusion applies, and any doubt about the scope of the exclusion
        runs against the insurer.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        The Reasonable Expectations Doctrine
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under California law, insurance policies must be interpreted according to the
        reasonable expectations of the insured. A homeowner purchasing a standard policy
        would reasonably expect the earth movement exclusion to apply to earthquakes,
        landslides, and sinkholes &mdash; not to gradual thermal changes in soil caused
        by global warming. If the insurer intended to exclude this type of loss, it had
        the opportunity to draft specific exclusion language addressing it. The absence
        of such language supports coverage.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        Ensuing Loss Provisions
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many homeowner policies contain an &ldquo;ensuing loss&rdquo; provision within
        the earth movement exclusion, which provides that if earth movement causes a
        subsequent, otherwise-covered loss &mdash; such as a water leak from a cracked
        pipe &mdash; the ensuing loss is covered even though the earth movement itself is
        not. This provision can be significant in underground climate change scenarios
        where foundation movement causes secondary damage to plumbing, HVAC systems, or
        other building components.
      </p>

      {/* ── What Policyholders Should Know ────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        What Policyholders Should Know
      </h2>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Do not assume foundation damage is uninsured.</strong> The earth movement
          exclusion is not absolute. Depending on the cause of the soil movement, the
          specific policy language, and the jurisdiction, coverage arguments may be
          available. Policyholders should file a claim and let the insurer make its
          coverage determination &mdash; then challenge that determination if it is
          incorrect.
        </li>
        <li>
          <strong>Get a geotechnical assessment.</strong> Understanding the cause of
          foundation damage requires expert analysis. A geotechnical engineer can evaluate
          soil conditions, identify the cause of movement, and provide an opinion on
          whether the damage results from traditional geological activity or from changing
          thermal and moisture conditions in the soil. This assessment is critical for any
          coverage dispute.
        </li>
        <li>
          <strong>Document the damage thoroughly.</strong> Photograph and video all visible
          damage. Measure and record cracks, floor slopes, and door/window misalignment
          over time. This documentation establishes the timeline and progression of damage,
          which is important for causation arguments.
        </li>
        <li>
          <strong>Review the policy carefully.</strong> Not all earth movement exclusions
          are identical. Some are broader, some are narrower, and the presence or absence
          of an ensuing loss provision can be decisive. Policyholders should review their
          specific policy language &mdash; or have an attorney or public adjuster review
          it &mdash; before accepting a coverage denial.
        </li>
        <li>
          <strong>Consider separate earthquake insurance.</strong> In California, the
          California Earthquake Authority (CEA) offers earthquake insurance as a separate
          policy. While earthquake insurance addresses seismic events rather than
          climate-related subsidence, policyholders in high-risk areas should evaluate
          whether supplemental coverage is available for foundation damage from any cause.
        </li>
      </ul>

      <CalloutBox variant="tip" title="The Coverage Landscape Is Evolving">
        <p>
          Underground climate change is a new frontier in insurance coverage disputes. As
          scientific understanding deepens and structural damage from subsurface warming
          becomes more widespread, courts and regulators will inevitably be forced to
          address whether existing policy exclusions apply to this novel peril. Policyholders
          who experience foundation damage should not accept a coverage denial at face
          value &mdash; the law in this area has not been settled, and the arguments for
          coverage are substantial.
        </p>
      </CalloutBox>

      {/* ── Sources and Further Reading ───────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Sources &amp; Further Reading
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          Anderson Kill P.C. &mdash; analysis of underground climate change as an
          emerging insurance coverage issue, including the application of earth movement
          exclusions to climate-related subsidence (search for Anderson Kill&rsquo;s
          published articles on underground climate change and insurance coverage)
        </li>
        <li>
          Alessandro Rotta Loria et al., Northwestern University &mdash; research on
          subsurface temperature changes beneath urban areas and their effects on soil
          deformation and building foundations, published in <em>Communications
          Engineering</em> (2023)
        </li>
        <li>
          California Insurance Code &sect; 530 <em>et seq.</em> (general provisions
          regarding property insurance and the duty to indemnify)
        </li>
        <li>
          California Civil Code &sect; 1636 <em>et seq.</em> (rules of contract
          interpretation applicable to insurance policies, including contra proferentem)
        </li>
        <li>
          California Earthquake Authority &mdash; information on earthquake insurance
          and supplemental coverage options (earthquakeauthority.com)
        </li>
      </ul>

      {/* ── Related Reading ───────────────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Related Reading
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
        <li>
          <Link href="/resources/exclusions" className="text-[#2E74B5] underline">
            Understanding Insurance Policy Exclusions
          </Link>
        </li>
        <li>
          <Link href="/resources/efficient-proximate-cause" className="text-[#2E74B5] underline">
            The Efficient Proximate Cause Doctrine
          </Link>
        </li>
        <li>
          <Link href="/resources/foundation-damage" className="text-[#2E74B5] underline">
            Foundation Damage Insurance Claims
          </Link>
        </li>
        <li>
          <Link href="/resources/earthquake-insurance" className="text-[#2E74B5] underline">
            Earthquake Insurance in California
          </Link>
        </li>
        <li>
          <Link href="/resources/coverage-disputes" className="text-[#2E74B5] underline">
            Insurance Coverage Disputes
          </Link>
        </li>
        <li>
          <Link href="/resources/policy-interpretation" className="text-[#2E74B5] underline">
            How Insurance Policies Are Interpreted
          </Link>
        </li>
      </ul>

      {/* ── Disclaimer ────────────────────────────────────────────── */}

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 mt-10">
        <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
          Disclaimer
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          This article is for informational and educational purposes only and does not
          constitute legal advice. The scientific understanding of underground climate change
          and its structural implications is evolving. The coverage arguments discussed in
          this article have not been adjudicated by California courts as of the date of
          publication. Policyholders experiencing foundation damage should consult a licensed
          structural engineer for an assessment of the cause and a licensed attorney for
          advice on insurance coverage.
        </p>
      </div>
    </>
  )
}
