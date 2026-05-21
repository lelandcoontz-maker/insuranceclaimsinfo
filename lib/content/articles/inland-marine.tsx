import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Inland Marine Insurance Claims: What It Covers and Why the Name Is Misleading',
  description:
    'Inland marine insurance has nothing to do with water. Learn what it actually covers, how it differs from ocean marine, the major policy types, and how a public adjuster handles these specialized claims.',
  summary:
    'Inland marine insurance has nothing to do with water; it covers movable or specialized property like tools, equipment, and goods in transit. Knowing what it covers and how it differs from standard property coverage matters on specialized claims.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you hear &ldquo;inland marine insurance&rdquo; and picture boats on a lake, you are not
        alone &mdash; and you are completely wrong. Inland marine is one of the most misunderstood
        lines of insurance, and the confusion starts with the name itself. Despite the word
        &ldquo;marine,&rdquo; inland marine insurance has virtually nothing to do with water. It
        covers property that moves, property that is unusual or specialized, and property at fixed
        locations that does not fit neatly into standard property policies.
      </p>

      <CalloutBox variant="warning" title="Inland Marine Is Not Marine Cargo">
        <p>
          This site has a separate article on{' '}
          <Link href="/resources/marine-cargo-claims" className="text-[#2E74B5] underline">
            marine cargo insurance claims
          </Link>
          , which covers goods transported over water, shipping containers, General Average, and
          international trade losses. If your claim involves goods shipped by ocean vessel or
          international freight, that article is the one you need. This article covers an entirely
          different line of insurance.
        </p>
      </CalloutBox>

      {/* ───────── Section: History and Disambiguation ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Why Is It Called &ldquo;Marine&rdquo; If It Has Nothing to Do With Water?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Ocean marine insurance is the oldest form of insurance in the world, dating back to
        maritime merchants in 14th-century Italy who needed protection for cargo carried by ship.
        As commerce expanded inland &mdash; first by railroad, then by truck &mdash; the marine
        underwriters who already understood transit risk extended their expertise to cover
        land-based exposures. The coverage kept the &ldquo;marine&rdquo; label because it grew
        out of the marine insurance tradition, even though the goods never touched water.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Over time, inland marine evolved far beyond transit coverage. Insurers recognized that
        many types of property &mdash; mobile equipment, specialized instruments, valuable
        collections, telecommunications infrastructure &mdash; did not fit neatly into standard
        fire or property policies. Inland marine became the catch-all line for insuring property
        that is movable, in transit, or simply unusual enough to require its own tailored form.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Inland Marine vs. Ocean Marine: Two Completely Different Lines
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Ocean Marine / Marine Cargo</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Covers goods transported by ocean vessel, including shipping containers and bulk cargo</li>
        <li>Covers the vessels themselves (hull insurance) and liability for vessel operators</li>
        <li>Governed by admiralty law and statutes like the Carriage of Goods by Sea Act (COGSA)</li>
        <li>Claims involve marine surveyors, bills of lading, and General Average declarations</li>
        <li>
          See our{' '}
          <Link href="/resources/marine-cargo-claims" className="text-[#2E74B5] underline">
            marine cargo claims guide
          </Link>{' '}
          for full details
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Inland Marine</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Covers property in transit over land, mobile or movable property, and specialized property at fixed locations</li>
        <li>Has nothing to do with water, ships, or international shipping</li>
        <li>Governed by state insurance law and standard property insurance regulations</li>
        <li>Claims are handled like property claims &mdash; with inventories, appraisals, and proof of value</li>
      </ul>

      <blockquote className="border-l-4 border-[#C9A84C] pl-4 italic text-gray-600 mb-6">
        Think of it this way: ocean marine insures cargo on a container ship crossing the Pacific.
        Inland marine insures the bulldozer on a construction site, the cell phone tower on a
        hillside, the Stradivarius in a musician&apos;s case, and the commercial sign on the front
        of a building. Same insurance family &mdash; entirely different coverage.
      </blockquote>

      {/* ───────── Section: Types of Inland Marine Policies ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Types of Inland Marine Policies and What They Cover
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Inland marine is not a single policy form. It encompasses a wide variety of specialized
        forms, each designed for a specific type of property. The Nationwide Marine Definition,
        maintained by the NAIC, defines the categories eligible for inland marine coverage.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Contractor&apos;s Equipment Floater
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Covers heavy equipment and tools owned by contractors &mdash; bulldozers, excavators,
        cranes, compressors, generators, and specialized hand tools. The policy follows the
        equipment wherever it goes: on the job site, in transit between sites, or stored at a
        yard. Standard commercial property policies are designed for property at a fixed location
        and do not adequately cover equipment that is constantly in motion.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Installation Floater
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Covers materials and equipment during the process of installation &mdash; for example, a
        commercial HVAC system from the time the components leave the supplier until installation
        is complete and accepted. This fills the gap between the supplier&apos;s coverage, the
        transit coverage, and the building owner&apos;s property policy.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Builder&apos;s Risk
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Builder&apos;s risk is technically a form of inland marine coverage, though many people
        think of it as a standalone product. It covers buildings during construction, including
        materials, fixtures, and equipment that will become part of the completed structure.
        Coverage typically runs from the start of construction until project completion or
        occupancy, whichever comes first.
      </p>

      <CalloutBox variant="info" title="Builder&apos;s Risk and Inland Marine">
        <p>
          Because builder&apos;s risk is classified as inland marine, it shares the same
          characteristics: open-perils coverage, negotiated limits, and the need for detailed
          documentation of materials and values. The same principles discussed in this article
          apply directly to builder&apos;s risk claims.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Bailee&apos;s Customer Coverage
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A bailee is someone who holds another person&apos;s property temporarily &mdash; a dry
        cleaner, a jeweler doing repairs, a warehouse storing inventory. This inland marine form
        protects the bailee against claims from customers whose property is damaged, lost, or
        stolen while in the bailee&apos;s care.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Transit Coverage
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Covers goods during land transportation by truck, rail, or air. This is the form of
        inland marine that most directly traces its lineage to ocean marine. Manufacturers,
        distributors, and retailers use transit policies to protect goods moving between
        facilities. Coverage can be written per-shipment or as an annual blanket policy.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Scheduled Property Floaters
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Personal articles floaters, fine arts floaters, and musical instrument floaters are all
        inland marine forms. When a homeowner &ldquo;schedules&rdquo; a piece of jewelry, a fur,
        or a fine art piece on their policy &mdash; listing it individually with an appraised
        value &mdash; the coverage is technically an inland marine endorsement. These items
        typically receive agreed-value coverage with no deductible, which is significantly more
        favorable than the sublimits applied to unscheduled items. For more on sublimits, see
        our article on{' '}
        <Link href="/resources/specialty-items" className="text-[#2E74B5] underline">
          electronics, jewelry, and specialty item claims
        </Link>
        .
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Electronic Data Processing (EDP) Policies
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        EDP policies cover computer hardware, software, and data &mdash; including the cost of
        recreating lost data. For businesses with significant technology infrastructure, an EDP
        inland marine policy provides broader coverage than a standard commercial property form.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Valuable Papers and Records Coverage
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Covers the cost of recreating or replacing valuable documents &mdash; blueprints,
        manuscripts, legal records, medical records, and maps. Important for law firms,
        engineering companies, and medical practices with irreplaceable physical records.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Telecommunications and Infrastructure
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Cell phone towers, fiber optic networks, satellite equipment, bridges, tunnels, and
        pipelines can all be insured under inland marine forms. These are fixed structures, but
        their specialized nature makes standard property forms a poor fit. Commercial signage
        &mdash; illuminated signs, electronic marquees, monument signs &mdash; is also frequently
        written as inland marine.
      </p>

      {/* ───────── Section: Why Coverage Is Better ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Why Inland Marine Coverage Is Often Better Than Standard Property Coverage
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Open-Perils Coverage</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most inland marine policies are written on an open-perils (also called &ldquo;all
        risk&rdquo;) basis, covering any cause of loss unless specifically excluded. This shifts
        the burden of proof: the insurer must prove an exclusion applies, rather than the
        policyholder having to prove the cause of loss is listed.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Fewer Exclusions</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Because inland marine forms are tailored to specific property types, they tend to have
        fewer exclusions than standard property forms. The insurer knows exactly what it is
        covering and prices accordingly.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Agreed Value / No Coinsurance</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many inland marine policies use agreed-value coverage, where the insurer and policyholder
        agree on the value when the policy is written. This eliminates{' '}
        <Link href="/resources/coinsurance-penalty" className="text-[#2E74B5] underline">
          coinsurance penalties
        </Link>
        &mdash; a common problem in standard commercial property policies.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Broad Territory</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Because inland marine covers property that moves, many policies provide coverage
        anywhere in the United States and Canada, and some extend worldwide. A scheduled jewelry
        floater typically covers the piece whether it is at home, at a restaurant, or overseas.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Negotiated Terms</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Inland marine policies are often manuscript or semi-manuscript forms with terms negotiated
        between insurer and insured, giving policyholders more flexibility to tailor deductibles,
        limits, and coverage extensions.
      </p>

      {/* ───────── Section: Valuation ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        How Inland Marine Claims Are Valued
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Valuation is one of the most frequently disputed aspects of inland marine claims. The
        method depends on the policy form:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Agreed Value:</strong> Insurer and policyholder agree on the value at inception.
          In a total loss, the insurer pays the agreed amount. Common for fine art, jewelry, and
          scheduled items.
        </li>
        <li>
          <strong>Replacement Cost:</strong> The cost to replace with new property of like kind
          and quality, without deduction for depreciation. Common for equipment and EDP policies.
        </li>
        <li>
          <strong>Actual Cash Value (ACV):</strong> Replacement cost minus depreciation. Less
          favorable and more common in older policy forms. See our article on{' '}
          <Link href="/resources/acv-rcv" className="text-[#2E74B5] underline">
            actual cash value vs. replacement cost
          </Link>
          .
        </li>
        <li>
          <strong>Functional Replacement Cost:</strong> The cost to replace with a functionally
          equivalent item, even if not identical &mdash; for example, replacing a 10-year-old
          server with a current-model equivalent.
        </li>
      </ul>

      <CalloutBox variant="tip" title="Check Your Valuation Clause">
        <p>
          Review the valuation clause in your inland marine policy before a loss occurs. If the
          policy provides ACV coverage, ask your broker about upgrading to replacement cost or
          agreed value. The premium difference is often modest relative to the difference in
          claim recovery.
        </p>
      </CalloutBox>

      {/* ───────── Section: Documentation ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Documentation Requirements for Inland Marine Claims
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Inland marine claims require detailed documentation. The insurer will expect you to prove
        three things: that the property existed, that it was damaged or lost due to a covered
        cause, and what it was worth.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Scheduled property (jewelry, fine art, instruments):</strong> Recent appraisals
          from qualified appraisers, photographs with scale references, purchase receipts or
          provenance, serial numbers and maker identification, and the insurance schedule showing
          the agreed value
        </li>
        <li>
          <strong>Contractor&apos;s equipment:</strong> Equipment schedules with make, model,
          year, serial number, and insured value; maintenance records; purchase invoices or lease
          agreements; photographs of damage; police reports for theft; rental invoices for
          replacement equipment if the policy includes rental reimbursement
        </li>
        <li>
          <strong>Transit losses:</strong> Bills of lading, shipping receipts, packing lists,
          photographs of damaged goods and packaging, carrier inspection reports, and commercial
          invoices
        </li>
        <li>
          <strong>EDP and technology losses:</strong> Asset inventories with serial numbers,
          purchase invoices, software license documentation, data restoration estimates from
          qualified IT professionals
        </li>
      </ul>

      {/* ───────── Section: Common Disputes ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Common Disputes in Inland Marine Claims
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Valuation Disagreements</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurer and policyholder frequently disagree on value. This is especially common with
        fine art (where market values fluctuate) and contractor&apos;s equipment (where the
        insurer may argue more depreciation than the policyholder believes). Even with agreed-value
        policies, disputes can arise if the insurer claims the agreed value was based on
        misrepresentation.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Mysterious Disappearance</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some inland marine policies exclude &ldquo;mysterious disappearance&rdquo; &mdash;
        situations where property vanishes without evidence of a specific cause of loss. If
        equipment goes missing from a job site with no evidence of theft, the insurer may deny.
        Scheduled personal property floaters, by contrast, often do cover mysterious
        disappearance, making them particularly valuable for jewelry and small valuables.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Wear and Tear vs. Covered Damage</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurers on equipment claims frequently argue that damage was caused by normal wear and
        tear or mechanical breakdown rather than a covered peril. The policyholder must demonstrate
        that the damage resulted from a sudden, accidental event rather than gradual degradation.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Failure to Update Schedules</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If a policyholder acquires new equipment or valuables but fails to add them to the policy
        schedule, coverage may not apply. This is a particular risk for contractors who regularly
        buy and sell equipment and for collectors who acquire new pieces.
      </p>

      <CalloutBox variant="warning" title="Update Your Schedules">
        <p>
          If you carry a scheduled inland marine policy &mdash; whether for equipment, fine art,
          jewelry, or any other category &mdash; review your schedule at least annually. Property
          not listed may not be covered, or may be covered only up to a blanket sublimit far less
          than the item&apos;s actual value.
        </p>
      </CalloutBox>

      {/* ───────── Section: California Regulations ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        California Fair Claims Settlement Practices Apply
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Inland marine claims in California are subject to the same Fair Claims Settlement
        Practices Regulations (California Code of Regulations, Title 10, &sect;2695.1 et seq.)
        that govern all property insurance claims:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          The insurer must acknowledge your claim within 15 days and begin its investigation
          immediately (Cal. Code Regs., tit. 10, &sect;2695.5(e))
        </li>
        <li>
          The insurer must accept or deny the claim within 40 days of receiving proof of claim
          (&sect;2695.7(b))
        </li>
        <li>
          The insurer cannot lowball the valuation without a reasonable basis (&sect;2695.7(g))
        </li>
        <li>
          A denial must include a written explanation referencing specific policy language
          (&sect;2695.7(b)(1))
        </li>
        <li>
          You can file a complaint with the California Department of Insurance &mdash; see our
          guide to{' '}
          <Link href="/resources/cdi-complaint" className="text-[#2E74B5] underline">
            filing a CDI complaint
          </Link>
        </li>
      </ul>

      {/* ───────── Section: Public Adjuster ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Why a Public Adjuster Is Valuable on Inland Marine Claims
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Inland marine claims are property claims &mdash; they fall squarely within the scope of
        what a California-licensed public adjuster is authorized to handle under California
        Insurance Code &sect;15007. A public adjuster represents the policyholder, not the
        insurance company, in preparing, presenting, and negotiating the claim.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Specialized valuation:</strong> Construction equipment, fine art, musical
          instruments, and technology systems require specialized knowledge to value accurately.
          A public adjuster knows how to obtain and present the right appraisals, market
          comparables, and replacement cost data.
        </li>
        <li>
          <strong>Policy interpretation:</strong> Unlike standard homeowner policies that use ISO
          bureau forms, many inland marine policies are manuscript forms with unique terms. A
          public adjuster reads the actual policy language to identify all available coverage.
        </li>
        <li>
          <strong>Documentation assembly:</strong> Equipment schedules, appraisals, transit
          records, and data restoration estimates can be overwhelming. A public adjuster manages
          this process and ensures the claim package is complete and persuasive.
        </li>
        <li>
          <strong>Negotiation leverage:</strong> Insurance companies assign experienced adjusters
          to inland marine claims. Having a licensed professional on the policyholder&apos;s side
          levels the playing field.
        </li>
        <li>
          <strong>Appraisal and dispute resolution:</strong> Most inland marine policies contain
          an appraisal clause. A public adjuster can guide the policyholder through the{' '}
          <Link href="/resources/appraisal" className="text-[#2E74B5] underline">
            appraisal process
          </Link>{' '}
          to resolve valuation disputes without litigation.
        </li>
      </ul>

      {/* ───────── Section: Key Takeaways ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Key Takeaways
      </h2>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Inland marine has nothing to do with water.</strong> The name is historical. It
          covers property in transit over land, mobile property, and specialized property at
          fixed locations.
        </li>
        <li>
          <strong>It is not marine cargo insurance.</strong> Ocean marine covers goods on ships.
          Inland marine covers bulldozers, cell towers, fine art, and jewelry floaters.
        </li>
        <li>
          <strong>Coverage is often broader</strong> than standard property insurance &mdash;
          open-perils, fewer exclusions, agreed-value options, and worldwide territory.
        </li>
        <li>
          <strong>Documentation is everything.</strong> Appraisals, equipment schedules,
          photographs, and receipts are not optional.
        </li>
        <li>
          <strong>Keep your schedules current.</strong> Unscheduled items may not be covered.
        </li>
        <li>
          <strong>California fair claims regulations apply</strong> to inland marine claims just
          as they do to any other property claim.
        </li>
        <li>
          <strong>A public adjuster can handle these claims.</strong> Inland marine claims are
          property claims, and a licensed public adjuster has full authority to represent you.
        </li>
      </ol>

      <p className="text-gray-700 leading-relaxed mb-4">
        If you have an inland marine claim &mdash; whether it involves construction equipment
        damaged on a job site, a valuable piece of art destroyed in a fire, or a shipment of
        goods lost in transit &mdash; understanding your policy and documenting your loss are the
        two most important steps you can take. And if the stakes are significant, working with a
        public adjuster who understands these specialized policies can make the difference between
        an adequate settlement and a full recovery.
      </p>
    </>
  )
}
