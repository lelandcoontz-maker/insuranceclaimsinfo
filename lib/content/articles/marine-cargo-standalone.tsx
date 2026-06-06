import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Marine Cargo Insurance: Why Importers Should Purchase Their Own Coverage',
  description:
    'Practical purchasing and claims advice for marine cargo insurance. Learn why importers should buy their own policy, how trade terms affect risk, warehouse coverage duration, and how Public Adjusters handle cargo claims.',
  summary:
    'Importers should buy their own marine cargo policy rather than rely on a seller\'s or carrier\'s coverage, because trade terms shift risk and gaps appear in transit and storage. Knowing the trade terms is key to being protected.',
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
        If you import goods into the United States, you are exposed to cargo loss from the
        moment your supplier loads merchandise onto a truck or vessel until it arrives at your
        warehouse. Most importers rely on their exporter&apos;s insurance or assume the ocean
        carrier will cover losses. Both assumptions create dangerous gaps. This article covers
        the practical side of marine cargo insurance &mdash; who should buy it, what type to
        buy, how long coverage lasts after delivery, and how to handle claims when something
        goes wrong.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a deeper look at the legal framework, marine surveyor dynamics, and how a public
        adjuster fits into the claims process, see our companion article on{' '}
        <Link href="/resources/marine-cargo-claims" className="text-[#2E74B5] hover:underline">
          marine cargo insurance claims
        </Link>.
      </p>

      {/* ───────── Section: Why Importers Should Buy Their Own Coverage ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Why the Importer &mdash; Not the Exporter &mdash; Should Purchase the Insurance
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the single most important piece of practical advice in marine cargo insurance:
        if you are importing goods, you should be the one purchasing and controlling the cargo
        insurance policy. Do not rely on your supplier&apos;s coverage, even if the trade terms
        say they will provide it. Here is why.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        You Control the Claim
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When you own the policy, you file the claim directly with an insurer you chose. You do
        not have to ask your exporter to file on your behalf, wait for them to follow up, or
        wonder whether they reported the loss accurately. You pick up the phone, call your
        insurer, and manage the process yourself. When the exporter owns the policy, you are a
        third party trying to recover through someone else&apos;s contract &mdash; someone who
        has no financial incentive to fight for your full recovery because the goods already
        left their hands.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        You Choose the Insurer and Jurisdiction
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When an exporter in China, Vietnam, or India arranges cargo insurance, they typically
        place it with a local insurer in their own country. If a loss occurs and you need to
        make a claim, you may find yourself dealing with an insurance company thousands of
        miles away, operating under a different legal system, in a different language, in a
        time zone that makes communication nearly impossible. By purchasing your own policy
        through a US-based or European-based carrier, you ensure that:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          The insurer is subject to your state&apos;s insurance regulations and department of
          insurance oversight
        </li>
        <li>
          Claims handling occurs in your time zone with adjusters who speak your language
        </li>
        <li>
          You have access to regulatory complaint processes if the insurer acts in bad faith
        </li>
        <li>
          Legal disputes, if they arise, can be resolved in courts accessible to you
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        You Set the Coverage Limits and Terms
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Exporters who provide insurance as part of CIF (Cost, Insurance, and Freight) terms
        are only required under Incoterms rules to provide minimum coverage &mdash; typically
        Institute Cargo Clause C, with coverage at 110% of invoice value. This is the
        narrowest coverage available, protecting against only a short list of catastrophic
        perils. If your goods are damaged by rain, theft, rough handling, or contamination,
        Clause C will not pay. When you buy your own policy, you choose the coverage level,
        the deductible, and the insured value &mdash; and you are not stuck with whatever
        minimum your supplier thought was acceptable.
      </p>

      <CalloutBox variant="warning" title="CIF Insurance Is Almost Always Inadequate">
        <p>
          When a seller quotes CIF terms, their insurance obligation under Incoterms 2020 is
          only Institute Cargo Clause C at 110% of invoice value. This excludes theft,
          pilferage, water damage from rain, and many other common losses. If your goods are
          worth protecting, CIF insurance is not enough.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        You Avoid the &ldquo;Black Hole&rdquo; Problem
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        One of the most common complaints from importers who relied on their exporter&apos;s
        insurance: the claim disappears into a black hole. The exporter files the claim with
        their local insurer, then stops responding to your emails about the status. The
        foreign insurer has no obligation to communicate with you because you are not their
        policyholder. Weeks turn into months. The claim may have been denied without your
        knowledge. You have no access to the denial letter, no ability to dispute it, and no
        regulatory body to complain to. This scenario is entirely avoidable if you own the
        policy.
      </p>

      {/* ───────── Section: US and European Carriers ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Why US or European Carriers Work Better for Importers
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When selecting a marine cargo insurer, US-based importers should strongly prefer
        carriers domiciled in the United States or in well-regulated European markets (UK,
        Germany, France, Scandinavia). This is not about specific company names &mdash; it is
        about structural advantages that matter enormously at claim time.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Regulatory Protections
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurers licensed in US states are subject to state insurance department oversight,
        including fair claims settlement practices regulations. In California, for example,
        an insurer that unreasonably delays or denies a cargo claim faces potential penalties
        under the Unfair Practices Act and the Fair Claims Settlement Practices Regulations.
        These regulatory teeth do not exist when your policy is written by an insurer in a
        country with weak or nonexistent consumer protection laws.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Claims Handling Accessibility
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A US or European carrier will have claims offices, surveyors, and adjusters available
        in the same hemisphere and often the same country as the destination. When damage is
        discovered at your warehouse in Los Angeles, you need an inspection within days
        &mdash; not a two-week wait for an insurer in a distant time zone to assign a
        surveyor. Domestically regulated carriers maintain networks of approved surveyors and
        can mobilize quickly.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Communication and Documentation
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Claims correspondence, policy interpretation disputes, and settlement negotiations
        are immeasurably easier when conducted in English with professionals who understand
        US commercial expectations. When your insurer operates in a different language and
        legal tradition, even basic communications become burdensome, and nuanced coverage
        arguments become nearly impossible to make effectively.
      </p>

      <CalloutBox variant="tip" title="What to Look For in a Marine Cargo Insurer">
        <p>
          Prioritize carriers that are admitted in your state, have a dedicated marine cargo
          claims team (not just a general property claims desk), issue policies using
          Institute Cargo Clauses, and provide a certificate of insurance for each shipment
          or an open cargo policy for ongoing trade. Ask about their survey network and
          average claim processing time.
        </p>
      </CalloutBox>

      {/* ───────── Section: Trade Terms and Risk ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        CIF vs. FOB: How Trade Terms Affect Who Bears the Risk
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        International trade terms &mdash; known as Incoterms &mdash; define when risk of loss
        transfers from seller to buyer during transit. Understanding these terms is essential
        because they determine who has an insurable interest at each point in the journey.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        FOB (Free on Board)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under FOB terms, risk passes to the buyer once the goods are loaded on the vessel at
        the port of origin. From that point forward, the buyer bears all risk of loss or
        damage during ocean transit and inland delivery. This is the most common arrangement
        for US importers from Asia. Because risk transfers at the origin port, the importer
        has clear insurable interest for the entire ocean and inland leg &mdash; making it
        straightforward to purchase their own cargo insurance.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        CIF (Cost, Insurance, and Freight)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under CIF terms, the seller arranges and pays for insurance during ocean transit.
        However &mdash; and this is the critical point many importers miss &mdash; risk still
        passes to the buyer at the port of origin, the same as FOB. The seller provides
        insurance as a contractual obligation, but the buyer bears the risk. This means that
        even under CIF terms, the buyer is the one who suffers the loss if cargo is damaged.
        The seller&apos;s insurance obligation is a convenience, not a substitute for the
        buyer having control over their own coverage.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Practical Implication
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Regardless of whether you buy FOB or CIF, you &mdash; the importer &mdash; bear the
        risk of loss during ocean transit. The difference is only whether the seller arranges
        minimal insurance on your behalf. In either case, purchasing your own comprehensive
        cargo policy gives you better coverage, direct claim access, and peace of mind. Many
        experienced importers negotiate FOB pricing specifically so they can control their own
        insurance without paying the seller a markup for inferior coverage.
      </p>

      <CalloutBox variant="info" title="Other Incoterms to Know">
        <p>
          EXW (Ex Works) places all risk on the buyer from the seller&apos;s door. DDP
          (Delivered Duty Paid) places all risk on the seller until goods arrive at the
          buyer&apos;s location. FCA (Free Carrier) transfers risk when goods are handed to
          the first carrier. Each term creates different insurable-interest windows. Consult
          the ICC Incoterms 2020 rules for the full framework.
        </p>
      </CalloutBox>

      {/* ───────── Section: Institute Cargo Clauses ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Institute Cargo Clauses: Understanding A, B, and C Coverage
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Marine cargo insurance policies worldwide are typically written using the Institute
        Cargo Clauses, published by the Institute of London Underwriters (now part of the
        International Underwriting Association). These clauses come in three tiers &mdash; A,
        B, and C &mdash; representing decreasing breadth of coverage.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Institute Cargo Clause A &mdash; All Risks
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Clause A is &ldquo;all risks&rdquo; coverage, meaning it covers loss or damage from
        any external cause unless specifically excluded. Standard exclusions include willful
        misconduct of the assured, ordinary leakage or loss in weight, inherent vice,
        insufficiency of packing, delay, insolvency of the carrier, and war or strikes (which
        can be added back by endorsement). For most importers, Clause A is the appropriate
        choice because it provides the broadest protection without requiring the insured to
        prove the loss falls within a named peril.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Institute Cargo Clause B &mdash; Named Perils (Broad)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Clause B covers a specified list of perils including fire, explosion, vessel sinking
        or capsizing, collision, discharge at a port of distress, earthquake, lightning,
        washing overboard, entry of sea water into the vessel or container, and total loss of
        any package lost overboard or dropped during loading or unloading. Clause B does not
        cover theft, pilferage, or non-delivery &mdash; significant gaps for many shippers.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Institute Cargo Clause C &mdash; Named Perils (Narrow)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Clause C is the most restrictive tier, covering only catastrophic events: fire,
        explosion, vessel sinking, capsizing, or stranding, collision, discharge at a port of
        distress, and General Average sacrifice. It does not cover theft, water damage,
        earthquake, lightning, or washing overboard. This is the minimum level that CIF
        sellers are obligated to provide. It is rarely adequate for goods with any meaningful
        value or susceptibility to damage.
      </p>

      <CalloutBox variant="warning" title="Always Request Clause A">
        <p>
          Unless your goods are virtually indestructible commodities (raw steel, bulk ore),
          Institute Cargo Clause A should be your default. The premium difference between
          Clause A and Clause C is modest relative to the coverage gap. Clause C leaves you
          uninsured for theft, rough handling, rain damage, and dozens of other common loss
          causes that affect containerized goods.
        </p>
      </CalloutBox>

      {/* ───────── Section: Warehouse-to-Warehouse Coverage ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Warehouse-to-Warehouse Coverage and the Post-Arrival Period
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Marine cargo insurance policies typically provide &ldquo;warehouse-to-warehouse&rdquo;
        coverage, meaning the goods are insured from the moment they leave the seller&apos;s
        warehouse at origin until they arrive at the buyer&apos;s warehouse at destination.
        This includes all intermediate handling, transshipment, and inland transit. But what
        many importers do not realize is that this coverage does not terminate the instant
        goods arrive at your warehouse.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The 30-Day (or 60-Day) Post-Arrival Window
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under standard Institute Cargo Clause wording, coverage continues for a specified
        period after the goods arrive at the final warehouse. The standard duration is 60 days
        from discharge of the goods from the ocean vessel at the final port of discharge.
        Some policies provide 30 days from arrival at the insured&apos;s warehouse. The exact
        wording varies by policy, so checking your specific terms is essential.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This post-arrival window exists because damage sustained during transit may not be
        immediately apparent. Containers may sit at port for days before being trucked to your
        warehouse. Once at the warehouse, it may take additional time to devan (unload) the
        container and inspect all goods. Water damage, mold growth from moisture exposure, or
        concealed mechanical damage may only become visible during unpacking or quality
        inspection.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Why This Matters for Claims
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you discover damage during unpacking &mdash; say, two weeks after the container
        arrived &mdash; you are still within the coverage period. Many importers mistakenly
        believe they missed their window and never file a claim. Others file late because they
        did not know the clock was ticking. The key rules:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Document everything immediately upon discovery, regardless of how long the goods
          have been in your warehouse
        </li>
        <li>
          Notify your insurer as soon as damage is found &mdash; do not wait to quantify the
          full extent
        </li>
        <li>
          Preserve all packaging, containers, and shipping materials as evidence of how
          damage occurred in transit
        </li>
        <li>
          Check your specific policy for the exact post-arrival duration and whether it runs
          from vessel discharge or warehouse arrival
        </li>
      </ul>

      <CalloutBox variant="tip" title="Inspect Immediately, Even if Covered Later">
        <p>
          Even though coverage extends 30 to 60 days after arrival, best practice is to
          inspect goods as soon as possible after devanning. Early inspection strengthens your
          claim by establishing a clear link between transit exposure and damage. The longer
          goods sit uninspected, the more opportunity the insurer has to argue damage occurred
          post-arrival from your own storage conditions.
        </p>
      </CalloutBox>

      {/* ───────── Section: General Average ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        General Average: The Hidden Exposure
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        General Average is one of the oldest principles in maritime law and one of the least
        understood exposures in international trade. When a vessel encounters a peril that
        threatens the entire voyage &mdash; a fire, structural failure, or grounding &mdash;
        and the ship&apos;s master takes deliberate action to save the vessel and remaining
        cargo (such as jettisoning containers overboard, flooding a cargo hold, or incurring
        extraordinary expenses for salvage), the resulting loss is shared proportionally among
        all cargo interests on the vessel.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This means that even if your cargo was completely unaffected by the emergency, you can
        be assessed a General Average contribution &mdash; a percentage of your cargo&apos;s
        value &mdash; to compensate cargo owners whose goods were sacrificed or to reimburse
        the vessel owner for extraordinary expenses. The assessment can be 10%, 20%, or even
        higher depending on the severity of the incident.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        What Happens Without Insurance
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you do not have marine cargo insurance, the shipping line will not release your
        containers until you post a cash deposit or bank guarantee equal to your estimated
        General Average contribution. This can take months to resolve while your goods sit at
        port accruing demurrage and storage charges. With a cargo insurance policy in place,
        your insurer posts the General Average bond on your behalf, your goods are released
        promptly, and the insurer handles the adjustment process &mdash; which can take years
        to finalize &mdash; without tying up your capital.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        General Average Is More Common Than You Think
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Major container vessel fires, groundings, and structural failures occur multiple
        times per year. High-profile incidents like the Maersk Honam fire (2018), the ONE
        Apus container collapse (2020), and the Ever Given Suez Canal grounding (2021) each
        triggered General Average declarations affecting thousands of cargo interests. Without
        insurance, each affected importer faced potential financial paralysis waiting for
        their goods. For more on recovery from third-party liability situations like these,
        see our article on{' '}
        <Link href="/resources/subrogation" className="text-[#2E74B5] hover:underline">
          subrogation
        </Link>.
      </p>

      <CalloutBox variant="info" title="General Average and Subrogation">
        <p>
          After your insurer pays a General Average claim or posts a bond on your behalf, they
          acquire subrogation rights against the party whose negligence caused the maritime
          emergency. This is one more reason to have your own policy &mdash; the insurer has
          financial motivation to pursue recovery, which ultimately keeps premiums lower for
          all policyholders.
        </p>
      </CalloutBox>

      {/* ───────── Section: Public Adjusters and Cargo Claims ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Public Adjusters Can Adjust Marine Cargo Claims
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many importers and freight professionals are surprised to learn that a licensed public
        adjuster can represent cargo owners on marine insurance claims. The traditional model
        has always involved marine surveyors working for the insurer, with the cargo owner
        navigating the process alone. But there is nothing in insurance law that limits public
        adjusters to homeowner or commercial property claims. Cargo is personal property, and
        a Public Adjuster is licensed to represent insureds on any personal property insurance
        claim.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        What a Public Adjuster Brings to a Cargo Claim
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A Public Adjuster with experience in trade and logistics offers cargo owners something
        no marine surveyor provides &mdash; advocacy. The surveyor works for the insurer. The
        Public Adjuster works for you. Specifically, a PA on a cargo claim will:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Review the cargo policy to identify all applicable coverages, extensions, and
          favorable provisions the insurer may not volunteer
        </li>
        <li>
          Document the loss comprehensively, including consequential damages like spoilage,
          re-order costs, lost sales, and expediting expenses that cargo owners often forget
          to claim
        </li>
        <li>
          Challenge the marine surveyor&apos;s findings when they undervalue the loss or
          misattribute the cause of damage
        </li>
        <li>
          Ensure compliance with policy conditions (timely notice, mitigation, preservation
          of evidence) so the insurer cannot deny coverage on technicalities
        </li>
        <li>
          Negotiate the settlement directly with the insurer&apos;s marine claims adjuster,
          pushing for full indemnification rather than a discounted offer
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        PA vs. Marine Surveyor: Understanding the Difference
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A marine surveyor inspects and reports. They measure the physical damage, identify
        probable cause, and estimate loss. They do not interpret policy language, negotiate
        coverage, or advocate for the insured. A Public Adjuster does all of those things.
        The surveyor&apos;s report becomes one piece of evidence in the claim file &mdash; the
        PA uses that report (and challenges it when needed) as part of a comprehensive claim
        strategy aimed at maximizing recovery.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For context on the broader role of Public Adjusters across all property claim types,
        see our overview on{' '}
        <Link href="/resources/inland-marine" className="text-[#2E74B5] hover:underline">
          inland marine insurance claims
        </Link>
        , which also discusses how PAs handle non-standard property exposures.
      </p>

      <CalloutBox variant="tip" title="When to Engage a Public Adjuster on a Cargo Claim">
        <p>
          Consider a PA when: the loss exceeds $50,000; the insurer&apos;s surveyor
          undervalued the damage; the insurer denied coverage or cited an exclusion you
          believe does not apply; General Average was declared and you need someone managing
          the process; or the claim involves complex documentation (multiple shipments,
          partial losses, contamination affecting an entire container).
        </p>
      </CalloutBox>

      {/* ───────── Section: Practical Tips ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Practical Tips for Purchasing Marine Cargo Insurance
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Whether you are a first-time importer or an experienced trader looking to improve your
        coverage, these practical guidelines will help you make better purchasing decisions.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Open Cargo Policy vs. Single Shipment Certificates
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you import regularly, an open cargo policy (also called a blanket policy or
        floating policy) covers all shipments automatically as they occur. You report
        shipments periodically and pay premiums based on declared values. This eliminates the
        risk of forgetting to insure a shipment and typically provides lower rates than
        individual certificates. Single shipment coverage makes sense only for one-time or
        very infrequent imports.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Insured Value: Always Add a Margin
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Standard practice is to insure cargo at 110% of CIF value (cost of goods + insurance
        + freight). The extra 10% accounts for anticipated profit and incidental expenses you
        would incur if the goods were lost and you had to re-order. Some policies allow up to
        120% or higher if you can demonstrate additional costs like lost sales, expediting
        charges, or duty on goods that cleared customs before damage was discovered. Insuring
        at invoice value alone leaves you under-indemnified.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        War and Strikes Clauses
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Standard Institute Cargo Clauses exclude war, civil war, revolution, and strikes.
        These are available as separate endorsements (Institute War Clauses and Institute
        Strikes Clauses) and should be added to every policy. The premiums are typically
        modest except for cargo transiting active conflict zones, where they spike
        dramatically.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Duty and Increased Value Coverage
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Customs duties paid on imported goods can represent a substantial additional cost.
        If cargo is damaged after clearing customs, you have already paid duty on goods you
        cannot sell. Some marine cargo policies cover duty as part of the insured value;
        others require a separate &ldquo;increased value&rdquo; endorsement. Verify how your
        policy handles this, especially with current tariff rates driving duties higher.
      </p>

      {/* ───────── Section: Claims Process Steps ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Steps to Take When You Discover Cargo Damage
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The actions you take in the first 24 to 48 hours after discovering cargo damage
        determine the strength of your claim. Marine cargo insurers are sophisticated and
        will scrutinize whether you met all policy conditions. Follow these steps:
      </p>

      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Photograph everything before disturbing it.</strong> Document the container
          seal number, external container condition, stacking damage, water intrusion marks,
          and the state of goods as found upon opening.
        </li>
        <li>
          <strong>Note the container condition on the delivery receipt.</strong> When the
          trucker delivers the container, inspect it externally and note any damage, broken
          seals, or signs of water intrusion on the delivery receipt before signing.
        </li>
        <li>
          <strong>Notify your insurer immediately.</strong> Do not wait to quantify the full
          loss. A brief initial notice preserving your rights is far better than a detailed
          notice filed late.
        </li>
        <li>
          <strong>Preserve all packaging and evidence.</strong> Do not dispose of damaged
          goods, packaging materials, dunnage, or the container itself until the surveyor has
          inspected and the insurer has authorized disposal.
        </li>
        <li>
          <strong>Segregate damaged from undamaged goods.</strong> Keep damaged goods separate
          and clearly marked. Do not commingle with other inventory.
        </li>
        <li>
          <strong>Mitigate further damage.</strong> If goods are wet, move them to a dry area.
          If refrigerated goods lost temperature, take steps to prevent further spoilage. You
          have a duty to mitigate, and failure to do so can reduce your recovery.
        </li>
        <li>
          <strong>Gather shipping documents.</strong> Assemble the bill of lading, commercial
          invoice, packing list, certificate of insurance, survey report (if already issued),
          and any correspondence with the carrier about the damage.
        </li>
        <li>
          <strong>File a claim with the ocean carrier as well.</strong> Even if your cargo
          insurance will pay the claim, file a notice of claim with the ocean carrier within
          their required timeframe (typically 3 days for apparent damage, 3 days after
          delivery for concealed damage). This preserves{' '}
          <Link href="/resources/subrogation" className="text-[#2E74B5] hover:underline">
            subrogation
          </Link>{' '}
          rights for your insurer to recover from the carrier later.
        </li>
      </ol>

      <CalloutBox variant="info" title="The 3-Day Rule for Carrier Claims">
        <p>
          Under COGSA (Carriage of Goods by Sea Act), written notice of damage must be given
          to the ocean carrier within 3 days of delivery for concealed damage, or at the time
          of delivery for apparent damage. Missing this deadline does not bar the claim
          entirely but creates a presumption that goods were delivered in good condition. Your
          cargo insurer will want this notice filed because it protects their subrogation
          recovery against the carrier.
        </p>
      </CalloutBox>

      {/* ───────── Section: Common Mistakes ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Common Mistakes Importers Make With Cargo Insurance
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Based on years of handling these claims, the following mistakes cost importers money
        over and over:
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Relying on the exporter&apos;s insurance</strong> &mdash; As discussed
          above, this leaves you without direct access to the claim process and often with
          inadequate coverage.
        </li>
        <li>
          <strong>Assuming the carrier is liable for full value</strong> &mdash; Ocean
          carrier liability under COGSA is limited to $500 per package unless higher value
          is declared on the bill of lading. A 40-foot container of electronics worth
          $200,000 may yield only $500 per carton from the carrier.
        </li>
        <li>
          <strong>Not inspecting promptly</strong> &mdash; The longer you wait to open the
          container and inspect goods, the weaker your claim becomes. Insurers will argue
          that damage occurred during your storage, not during transit.
        </li>
        <li>
          <strong>Disposing of damaged goods before inspection</strong> &mdash; Never throw
          away damaged goods, packaging, or dunnage before the surveyor has examined them.
          This eliminates physical evidence of transit damage.
        </li>
        <li>
          <strong>Under-insuring to save premium</strong> &mdash; Insuring at FOB value
          instead of CIF + 10% leaves you with a recovery that does not cover freight,
          insurance cost, duty, or lost profit on the damaged goods.
        </li>
        <li>
          <strong>Not reading the policy exclusions</strong> &mdash; Inherent vice (goods
          that damage themselves due to their own nature), insufficient packing, and delay
          are standard exclusions. If you ship perishables, ensure your policy includes
          temperature variation coverage. If your goods are fragile, ensure packing
          specifications meet the policy&apos;s requirements.
        </li>
        <li>
          <strong>Missing the carrier notice deadline</strong> &mdash; Filing a claim with
          your insurer but forgetting to file notice with the ocean carrier within 3 days
          can undermine your insurer&apos;s subrogation rights and create policy compliance
          issues.
        </li>
      </ul>

      {/* ───────── Section: Summary ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Summary: Taking Control of Your Cargo Insurance
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Marine cargo insurance is not an area where cost-cutting serves you well. The
        difference between a claim that pays in full and a claim that pays 40 cents on the
        dollar &mdash; or gets denied entirely &mdash; often comes down to decisions made
        long before the loss occurs. Buy your own policy. Choose a US or European carrier.
        Insist on Institute Cargo Clause A. Understand your post-arrival coverage window. And
        when a significant loss occurs, recognize that you do not have to navigate the process
        alone.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A Public Adjuster with trade and logistics expertise represents you in exactly the
        same way an attorney represents you in court &mdash; except in the insurance claim
        arena rather than the legal arena. The insurer has trained professionals working their
        side. You should have trained professionals working yours.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For related guidance, explore our articles on{' '}
        <Link href="/resources/marine-cargo-claims" className="text-[#2E74B5] hover:underline">
          marine cargo insurance claims
        </Link>
        ,{' '}
        <Link href="/resources/inland-marine" className="text-[#2E74B5] hover:underline">
          inland marine insurance
        </Link>
        , and{' '}
        <Link href="/resources/subrogation" className="text-[#2E74B5] hover:underline">
          subrogation in insurance claims
        </Link>.
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
