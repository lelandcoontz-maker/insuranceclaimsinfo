import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Roofing Systems and Materials: A Deep Dive for Insurance Claims',
  description:
    'Technical guide to roofing types — TPO, EPDM, metal, asphalt shingles, and wood shake — and the claim issues each creates. California Title 24 cool roof requirements, multiple layers, space decking conversions, and solar panel complications.',
  summary:
    'Different roof systems, TPO, EPDM, metal, asphalt, wood shake, each raise distinct claim issues, plus California Title 24 cool-roof rules, layer removal, decking, and solar complications. Knowing your roof type sharpens the scope and the dispute.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational commentary by a Licensed California Public
          Adjuster. It is not legal advice. For legal questions about your specific
          situation, consult a licensed California attorney.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        Our{' '}
        <Link href="/resources/roof-damage" className="text-[#2E74B5] hover:underline">
          general roof damage article
        </Link>{' '}
        covers the basics of filing and fighting a roof claim. This companion article goes deeper
        into the roofing systems themselves &mdash; what they are, how they fail, and the specific
        claim issues each one creates. Understanding the technical differences between roofing
        materials is critical because insurers exploit policyholder ignorance of these details
        every day.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Roofing is an enormously broad subject with many rabbit holes. One article cannot cover
        everything, and this one does not try to. What it does cover are the roofing types you
        are most likely to encounter on a California property claim, the code issues that
        complicate replacement, and the specific disputes that arise when the roofing system
        itself becomes the battleground.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        I. Residential Roofing Systems
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Asphalt Composition Shingles
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Asphalt composition shingles are the most common residential roofing material in the
        United States. They consist of a fiberglass mat coated with asphalt and surfaced with
        ceramic granules that provide UV protection and color. Standard architectural (dimensional)
        shingles carry manufacturer warranties of 25&ndash;50 years, though actual lifespan in
        California&rsquo;s sun-intensive climate is often shorter.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Common claim issues:</strong>
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Granule loss.</strong> Wind and hail dislodge the protective granules, exposing the
          asphalt mat to UV degradation. Insurers frequently argue that granule loss is &ldquo;cosmetic&rdquo;
          and does not affect performance. This is often wrong &mdash; once the granules are gone, the
          exposed asphalt deteriorates rapidly, shortening the roof&rsquo;s remaining life.
        </li>
        <li>
          <strong>Wind creasing and lifting.</strong> High winds can crease, lift, or tear shingle
          tabs. Insurers sometimes limit repairs to the visibly damaged shingles while ignoring
          adjacent shingles whose seal strips have been broken by the same wind event. A broken seal
          strip means the shingle will lift in the next windstorm, even if it looks fine today.
        </li>
        <li>
          <strong>Matching.</strong> Asphalt shingles change color lots, profiles, and product lines
          frequently. If half your roof is damaged and the replacement shingles do not match the
          undamaged half in color, profile, or weathered appearance, you may be entitled to a full
          roof replacement. See our{' '}
          <Link href="/resources/matching" className="text-[#2E74B5] hover:underline">
            matching guide
          </Link>{' '}
          for the legal standards.
        </li>
        <li>
          <strong>Cosmetic damage exclusions.</strong> Some policies contain endorsements that exclude
          &ldquo;cosmetic&rdquo; hail or wind damage to roofing. These endorsements are becoming more
          common and more aggressively applied. If your policy has one, read it carefully &mdash; the
          insurer must still pay for <em>functional</em> damage, and the line between cosmetic and
          functional is frequently disputed. See our{' '}
          <Link href="/resources/hail-damage-science" className="text-[#2E74B5] hover:underline">
            hail damage science article
          </Link>{' '}
          for more on this distinction.
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Wood Shake
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Wood shake roofing &mdash; typically western red cedar &mdash; was extremely popular in
        California for decades. It provides a distinctive natural appearance and good insulation
        value. However, many California jurisdictions now restrict or prohibit new wood shake
        installations in wildfire-prone areas due to fire risk, and this creates a significant
        claim complication: when a wood shake roof is damaged, you often cannot replace it with
        the same material.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Common claim issues:</strong>
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Fire code restrictions.</strong> If your jurisdiction no longer allows wood shake
          and you must switch to a different roofing material, that triggers a code upgrade issue.
          This is where your{' '}
          <Link href="/resources/ordinance-law" className="text-[#2E74B5] hover:underline">
            ordinance and law coverage
          </Link>{' '}
          and{' '}
          <Link href="/resources/code-upgrade-coverage" className="text-[#2E74B5] hover:underline">
            code upgrade coverage
          </Link>{' '}
          become essential.
        </li>
        <li>
          <strong>Splitting, curling, and moss.</strong> Aged wood shakes split, curl, and develop
          moss growth. Insurers use this to argue that the roof was already at the end of its life
          and that the covered peril (wind, fallen tree) caused minimal additional damage. The
          reality is more nuanced &mdash; a properly maintained shake roof can last 30&ndash;50 years,
          and the age of the material does not eliminate the insurer&rsquo;s obligation to pay for
          the damage caused by the covered peril.
        </li>
        <li>
          <strong>Matching.</strong> Replacing individual shakes to match weathered, decades-old
          cedar is essentially impossible. New cedar is a completely different color and texture
          than 20-year-old cedar. This is one of the strongest matching arguments in roofing.
        </li>
      </ul>

      <CalloutBox variant="warning" title="Wood Shake Over Space Decking: The Hidden Cost">
        <p>
          This is a critical issue that many adjusters and even some contractors miss. Wood shake
          is traditionally installed over <strong>space decking</strong> (also called skip sheathing
          or spaced sheathing) &mdash; boards with deliberate gaps between them that allow air
          circulation beneath the shakes, helping them dry evenly and resist rot.
        </p>
        <p className="mt-2">
          If the jurisdiction no longer allows wood shake and the homeowner must switch to asphalt
          composition shingles, you cannot simply nail asphalt shingles to spaced decking. The gaps
          between the boards mean there is nothing to nail to in those areas. Asphalt shingles
          require solidly sheathed decks per IRC &sect;R905.2.1 and manufacturer installation
          instructions &mdash; any gap greater than 1/8&Prime; between planks is unacceptable.
        </p>
        <p className="mt-2">
          The solution is to install new plywood (minimum 1/2&Prime; CDX) or OSB (minimum 7/16&Prime;)
          sheathing over the existing spaced decking before installing the new shingles. This is not
          optional &mdash; it is physically and structurally necessary for the new roof system to
          function.
        </p>
        <p className="mt-2">
          <strong>The insurance argument:</strong> This additional sheathing cost should be covered
          even if the policy does not include code upgrade coverage, because the sheathing is not
          a &ldquo;code upgrade&rdquo; in the traditional sense &mdash; it is a physical necessity.
          You cannot install asphalt shingles on spaced decking. Period. If the insurer owes for a
          new roof and wood shake is no longer permitted, the insurer owes for whatever is necessary
          to make the replacement material work, and that includes solid sheathing. With{' '}
          <Link href="/resources/code-upgrade-coverage" className="text-[#2E74B5] hover:underline">
            code upgrade coverage
          </Link>, there is absolutely no excuse not to pay for it.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        II. Commercial and Flat Roofing Systems
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        TPO (Thermoplastic Polyolefin)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        TPO is one of the most widely used commercial roofing membranes. It is a single-ply,
        heat-welded membrane available in thicknesses of 45 mil, 60 mil, and 80 mil (a mil is
        one-thousandth of an inch). TPO is popular because it is relatively inexpensive, reflective
        (white TPO easily meets cool roof requirements), and straightforward to install. A properly
        installed TPO system has a useful life of 20&ndash;30 years, with thicker membranes lasting
        longer.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Common claim issues:</strong>
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Seam failure.</strong> TPO panels are joined by hot-air welding. If the seams are
          not welded properly during installation, they can separate over time and leak. Insurers
          will argue this is a workmanship or maintenance issue, not a covered loss. However, if a
          covered peril (wind, hail, impact) damages a seam that was previously intact, the cause
          of the failure matters.
        </li>
        <li>
          <strong>Punctures and tears.</strong> TPO membranes are relatively thin. Foot traffic from
          HVAC technicians, dropped tools, and debris impacts can puncture the membrane. The insurer
          may argue that punctures are from maintenance activity (not covered) rather than storm
          debris (covered). Documentation of the timeline is critical.
        </li>
        <li>
          <strong>Membrane thickness disputes.</strong> When replacing a damaged TPO roof, the insurer
          may price the cheapest available thickness (45 mil) when the existing roof was 60 mil or
          80 mil. The replacement should match what was there, or the insurer is under-scoping
          the claim.
        </li>
        <li>
          <strong>Accelerated weathering.</strong> Early generations of TPO (pre-2010) had formulation
          issues that caused premature cracking and shrinkage. Insurers will point to this as wear
          and tear. If a covered peril damaged a roof that was already experiencing accelerated
          weathering, the claim becomes a dispute over what portion of the damage is attributable
          to each cause.
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        EPDM (Ethylene Propylene Diene Monomer)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        EPDM is a synthetic rubber membrane that has been used on commercial flat roofs for
        decades. It is a thermoset material &mdash; meaning its molecular structure cross-links
        during manufacturing, giving it excellent dimensional stability and the ability to recover
        its shape after temperature fluctuations. EPDM membranes are highly resistant to UV
        radiation and ozone, and a properly installed, fully adhered EPDM system can last 25&ndash;40
        years or more.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Common claim issues:</strong>
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Shrinkage.</strong> EPDM membranes can shrink over time, pulling away from
          flashings, parapets, and penetrations. Insurers classify this as wear and tear. However,
          if a wind event tears a membrane that was already under tension from shrinkage, the wind
          is still a covered peril &mdash; the pre-existing condition may affect depreciation but
          does not eliminate coverage.
        </li>
        <li>
          <strong>Adhesive failure.</strong> Fully adhered EPDM systems rely on adhesive bonding the
          membrane to the substrate. If the adhesive fails, the membrane can billow and lift in wind,
          making it vulnerable to tearing. Mechanically fastened systems avoid this problem but have
          their own vulnerabilities at fastener points.
        </li>
        <li>
          <strong>Black vs. white.</strong> Traditional EPDM is black, which absorbs heat. White
          EPDM is available but less common and more expensive. California&rsquo;s Title 24 cool
          roof requirements (discussed below) may require a white or coated membrane on replacement,
          adding cost that falls under code upgrade coverage.
        </li>
        <li>
          <strong>Seam tape vs. adhesive.</strong> Older EPDM systems used seam tape rather than
          liquid adhesive for joining panels. Taped seams have a shorter service life and are more
          prone to failure. If a storm exploits an aging taped seam, expect the insurer to blame
          the seam condition rather than the storm.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        III. Metal Roofing Systems
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Corrugated Metal
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Corrugated metal roofing uses wavy or ribbed panels fastened to the roof structure with
        exposed screws or nails. It is common on agricultural buildings, warehouses, and some
        residential properties. Corrugated metal is durable against fire and rot but has specific
        vulnerabilities that create claim disputes.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Exposed fasteners.</strong> The defining weakness of corrugated metal is its
          reliance on exposed fasteners &mdash; screws with rubber washers that penetrate the panel
          surface. Over time, the rubber washers degrade, the screws loosen or back out, and water
          infiltrates at every penetration point. In a wind event, panels with compromised fasteners
          are far more likely to lift and tear away. Insurers will argue the fastener deterioration
          is maintenance neglect; you will argue the wind caused the panel to fail.
        </li>
        <li>
          <strong>Hail denting.</strong> Corrugated metal dents visibly in hail events. Whether denting
          is &ldquo;cosmetic&rdquo; or &ldquo;functional&rdquo; depends on the severity. Severe dents
          can compromise the panel profile, creating ponding areas and reducing structural rigidity.
          Even shallow dents can crack paint coatings, leading to rust formation. If your policy has
          a cosmetic damage exclusion, this becomes a significant battleground.
        </li>
        <li>
          <strong>Rust and corrosion.</strong> Once the protective coating on corrugated metal is
          compromised &mdash; whether by hail impact, scratches from debris, or UV degradation &mdash;
          rust spreads rapidly. The insurer owes for the damage caused by the covered peril,
          including the accelerated corrosion that results from storm-inflicted coating damage.
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Standing Seam Metal
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Standing seam metal roofing uses interlocking panels with raised seams and concealed
        fasteners. It is a premium residential and light commercial system that is significantly
        more expensive than corrugated metal but dramatically more durable. Standing seam panels
        are typically lightweight steel or aluminum, and the concealed fastener design eliminates
        the penetration-point vulnerability that plagues corrugated systems. Standing seam systems
        are rated for winds of 140&ndash;180 mph, compared to 110&ndash;140 mph for corrugated
        panels.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Higher replacement cost.</strong> Standing seam roofing costs significantly more
          than corrugated metal or asphalt shingles. If a standing seam roof is damaged, the insurer
          owes for a standing seam replacement &mdash; not a cheaper material. Watch for adjusters
          who price the replacement at corrugated metal rates or who try to substitute a lower-grade
          panel profile.
        </li>
        <li>
          <strong>Panel oil canning.</strong> Standing seam panels can exhibit &ldquo;oil canning&rdquo;
          &mdash; a wavy distortion in the flat area of the panel. This is generally a manufacturing
          or installation characteristic, not damage. Insurers sometimes cite pre-existing oil
          canning to argue that storm-caused panel distortion was already present.
        </li>
        <li>
          <strong>Matching and finish.</strong> Standing seam panels come in specific colors with
          factory-applied finishes (often Kynar/PVDF coatings). These finishes weather over time,
          and matching new panels to existing weathered panels can be difficult or impossible &mdash;
          creating a strong{' '}
          <Link href="/resources/matching" className="text-[#2E74B5] hover:underline">
            matching argument
          </Link>{' '}
          for broader replacement.
        </li>
        <li>
          <strong>Insurance premium benefits.</strong> Standing seam metal roofs often qualify for
          insurance premium discounts of 15&ndash;35% due to their superior wind and fire
          resistance. If an insurer tries to replace your standing seam roof with a lesser material,
          point out that doing so would also affect your future insurability and premium costs.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        IV. California Title 24 Cool Roof Requirements
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California&rsquo;s Building Energy Efficiency Standards (Title 24, Part 6) require that
        roofing materials meet minimum solar reflectance and thermal emittance standards. The
        current standards &mdash; effective January 1, 2026 &mdash; are the most rigorous the
        industry has ever seen. These requirements apply to new construction and to re-roofing
        projects where 50% or more of the existing roof surface is being replaced.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The specific requirements vary by roof slope:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Low-slope roofs (&le; 2:12 pitch):</strong> Aged solar reflectance of at least
          0.63 and thermal emittance of at least 0.75.
        </li>
        <li>
          <strong>Steep-slope roofs (&gt; 2:12 pitch):</strong> Aged solar reflectance of at least
          0.20 and thermal emittance of at least 0.75.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Alternative compliance paths exist &mdash; for example, a home with at least R-38 ceiling
        insulation, a radiant barrier in the attic, or additional roof deck insulation of at least
        R-2 may be exempt. But the default requirement is a cool roof, and this has a direct impact
        on insurance claims.
      </p>

      <CalloutBox variant="important" title="Cool Roofs and Your Insurance Claim">
        <p>
          Here is the problem: if your existing roof was installed years ago with materials that
          do not meet current Title 24 cool roof standards, you cannot simply replace it with the
          same non-compliant material. The building department will require compliant materials on
          a re-roof. That means the replacement roof may cost more than the insurer&rsquo;s estimate
          based on like-kind-and-quality of the old material.
        </p>
        <p className="mt-2">
          This is a textbook{' '}
          <Link href="/resources/ordinance-law" className="text-[#2E74B5] hover:underline">
            ordinance and law
          </Link>{' '}
          issue. The increased cost of complying with current codes should be covered under your
          policy&rsquo;s{' '}
          <Link href="/resources/code-upgrade-coverage" className="text-[#2E74B5] hover:underline">
            code upgrade coverage
          </Link>
          . If your policy does not include code upgrade coverage, you may be stuck paying the
          difference yourself &mdash; one of many reasons adequate L&amp;O coverage is critical.
        </p>
        <p className="mt-2">
          Common scenarios: a dark asphalt shingle roof that must be replaced with a cool-rated
          shingle (lighter color, reflective granules, or a different product entirely); a black
          EPDM membrane that must be replaced with white TPO or white EPDM to meet reflectance
          standards; or a corrugated metal roof that needs a reflective coating or different
          finish to comply.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        V. Multiple Roof Layers
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California building code limits the total number of roof covering layers to two. Building
        departments will allow a second layer of roofing to be installed over an existing layer,
        but will not allow a third layer. If your roof already has two layers and it needs to be
        re-roofed, all existing layers must be stripped down to the roof deck before new roofing
        can be installed.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This matters for your claim in several ways:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Tear-off cost.</strong> Stripping two layers of roofing to the deck is significantly
          more labor-intensive and expensive than a simple overlay. The insurer must include the full
          tear-off cost in the estimate if a third layer is not permitted. If the adjuster prices a
          simple overlay when a full tear-off is required, the estimate is wrong and you should
          dispute it immediately.
        </li>
        <li>
          <strong>Deck inspection and repair.</strong> Once the existing roofing is stripped, the
          condition of the roof deck is exposed. Damaged, rotted, or deteriorated sheathing that was
          hidden under two layers of roofing will need to be replaced. This is additional cost that
          the insurer owes if the deck damage is related to the covered loss or was concealed by the
          roofing that had to be removed because of the covered loss. See our{' '}
          <Link href="/resources/scope-of-loss" className="text-[#2E74B5] hover:underline">
            scope of loss guide
          </Link>{' '}
          for strategies on capturing these costs.
        </li>
        <li>
          <strong>Weight considerations.</strong> Two layers of asphalt shingles weigh approximately
          5&ndash;7 pounds per square foot. Some older roof structures were not designed for this
          load. If the building department requires a structural evaluation after a tear-off reveals
          concerns, that additional engineering cost is part of the claim.
        </li>
        <li>
          <strong>Disposal costs.</strong> Removing two layers generates significantly more waste
          than one. The insurer&rsquo;s estimate should reflect the actual volume of material being
          removed and disposed of, not a generic single-layer tear-off figure.
        </li>
      </ul>

      <CalloutBox variant="tip" title="Check the Layer Count Before the Adjuster Arrives">
        <p>
          If you know or suspect your roof has multiple layers, document this before the
          insurer&rsquo;s inspection. Look at the roof edge where layers are visible, check
          any areas where previous repairs exposed the cross-section, and ask your roofing
          contractor to confirm the layer count. If the adjuster writes an estimate for an
          overlay when a tear-off is required, you will need this documentation to dispute it.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        VI. Solar Panels and Roof Claims
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Solar panels on a damaged roof create a unique set of complications that can significantly
        increase both the cost and the complexity of a roof claim. Here are the issues you need
        to understand:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Ownership and Coverage
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many residential solar systems are leased from a solar company rather than owned by the
        homeowner. When a storm damages the roof and the solar panels, the insurance company will
        often refuse to pay for the solar panel damage because the panels are owned by a third
        party &mdash; the solar leasing company. The insurer&rsquo;s position is that the
        homeowner has no insurable interest in equipment they do not own.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This same principle applies in commercial settings. Restaurants, for example, often lease
        soda machines, ice makers, and other kitchen equipment. When a covered loss damages this
        leased equipment, the insurer may deny coverage for the same reason &mdash; the
        policyholder does not own it.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Detach and Reset: The Cost the Insurer Does Owe
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Even when the insurer will not pay for damage to leased solar panels themselves, the cost
        of <strong>detaching and reattaching</strong> the panels to access the roof for covered
        repairs is typically a covered expense. The logic is straightforward: the insurer owes
        for roof repairs, and the panels must be removed to perform those repairs. The removal
        and reinstallation of the panels is part of the cost of repairing the roof, not a
        separate claim for the panels. Detach-and-reset costs typically range from $2,500 to
        $6,000 or more depending on the system size and complexity.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the insurer refuses to include detach-and-reset costs in the roof repair estimate,
        push back. They cannot authorize a roof repair that is physically impossible to perform
        without removing the panels and then refuse to pay for removing the panels.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Additional Solar Panel Complications
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Matching under panels.</strong> Solar panels shade the roofing material beneath
          them, causing the covered and uncovered portions of the roof to weather differently. When
          the panels are removed for roof work, the color difference between the shaded and sun-exposed
          areas can create a{' '}
          <Link href="/resources/matching" className="text-[#2E74B5] hover:underline">
            matching dispute
          </Link>{' '}
          &mdash; the area under the panels may look significantly different from the rest of the
          roof.
        </li>
        <li>
          <strong>Ventilation.</strong> Solar panels affect roof ventilation by covering large areas
          of the roof surface and altering airflow patterns. After a roof replacement, the
          ventilation system may need to be reconfigured to account for the panels.
        </li>
        <li>
          <strong>Warranty issues.</strong> Both the roofing manufacturer and the solar panel
          installer may have warranties that are affected by the other&rsquo;s work. A roofing
          contractor who reinstalls solar panels may void the solar warranty, and solar panel
          installation may void the roofing warranty. Coordinating these warranties adds
          complexity and cost to the project.
        </li>
        <li>
          <strong>Roof penetrations.</strong> Solar panel mounting systems require penetrations
          through the roofing material into the structural members below. These penetrations are
          potential leak points. When re-roofing, the penetrations from the old mounting system must
          be properly sealed or the deck repaired, and new penetrations made for the reinstallation.
          Insurers sometimes omit these costs from their estimates.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        VII. Carrier Engineer Reports on Roofing
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurers frequently retain forensic engineers to inspect damaged roofs and issue reports
        on the cause and extent of damage. These reports carry significant weight in the claims
        process, and unfortunately, many of them are written with the goal of minimizing the
        insurer&rsquo;s exposure. Our{' '}
        <Link href="/resources/defeating-carrier-engineers" className="text-[#2E74B5] hover:underline">
          guide to defeating carrier engineer reports
        </Link>{' '}
        covers this in depth.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Common problems with insurer-retained engineering reports on roofing:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Attributing storm damage to &ldquo;pre-existing wear and tear&rdquo; or
          &ldquo;manufacturing defects&rdquo; without adequate testing or analysis to support
          the conclusion.
        </li>
        <li>
          Inspecting only a limited area of the roof and extrapolating conclusions about the
          entire surface.
        </li>
        <li>
          Using test methods or standards that are not appropriate for the roofing material in
          question.
        </li>
        <li>
          Minimizing the significance of damage &mdash; for example, characterizing functional
          damage as &ldquo;cosmetic&rdquo; or describing significant granule loss as
          &ldquo;within normal parameters.&rdquo;
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        VIII. Educational Resources
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Roofing is a field where technical knowledge directly translates to claim outcomes. Two
        resources worth knowing about:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Mathew Mulholland and the Building Experts Institute.</strong> Mulholland is a
          former roofing contractor turned Public Adjuster turned educator. He has purposely placed
          himself in the path of seven hurricanes with cameras and sensors to study how roofing
          systems fail, and he has designed and built his own hail cannon apparatus used in peer-reviewed
          research on hail damage to roofing and siding materials. His training programs through
          the Building Experts Institute are among the most technically rigorous available for
          understanding storm damage to roofing systems.
        </li>
        <li>
          <strong>Haag Engineering and Haag Education.</strong> Haag is a forensic engineering firm
          founded in 1924 that specializes in failure analysis of roofing and building materials.
          Haag&rsquo;s education arm offers the Haag Certified Inspector (HCI) designation, which
          is widely recognized in the industry. A word of caution: Haag&rsquo;s engineering reports
          and educational materials tend to favor insurance company positions. Their inspectors are
          well-trained, but the conclusions in Haag-affiliated reports often lean toward minimizing
          damage findings. Understanding Haag&rsquo;s methodology is valuable precisely because
          you are likely to encounter their reports on the other side of your claim.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        IX. Key Takeaways
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Every roofing system has specific vulnerabilities, and insurers exploit the technical
          details of each one. Know what type of roof you have and how it fails.
        </li>
        <li>
          California&rsquo;s Title 24 cool roof requirements can force a material upgrade on
          re-roofing. This is an ordinance and law issue, and the increased cost should be covered
          under your code upgrade coverage.
        </li>
        <li>
          If your roof already has two layers, a full tear-off to deck is required before
          re-roofing. The insurer must pay for the full tear-off, not just an overlay.
        </li>
        <li>
          Wood shake over space decking requires new solid sheathing when converting to asphalt
          shingles &mdash; this cost is owed even without code upgrade coverage because it is
          physically necessary.
        </li>
        <li>
          Solar panel detach-and-reset costs are typically covered as part of the roof repair, even
          if the panels themselves are leased and not covered.
        </li>
        <li>
          Get your own roofing contractor&rsquo;s inspection and estimate. Do not rely solely on
          the insurer&rsquo;s adjuster or engineer, especially when the roofing system involves
          technical complexities they may not understand &mdash; or may choose to ignore.
        </li>
      </ul>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Need Help With a Roof Claim?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          Roofing claims are technically complex, and the difference between what the insurer offers
          and what you are actually owed can be tens of thousands of dollars. If your roof claim
          has been underpaid, denied, or complicated by code issues, solar panels, or multiple
          layers, a free claim review can identify what you are missing.
        </p>
        <Link href="/contact" className="inline-block bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-6 py-3 rounded-lg transition-colors">
          Request a Free Claim Review &rarr;
        </Link>
      </div>

      <CalloutBox variant="legal" title="Important Notice">
        <p>
          This article is provided for general educational purposes only and does not constitute
          legal advice.
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
