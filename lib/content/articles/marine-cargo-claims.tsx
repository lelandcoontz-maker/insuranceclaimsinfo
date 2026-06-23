import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'
import { LeadCaptureForm } from '@/components/content/LeadCaptureForm'

export const meta = {
  title: 'Marine Cargo Insurance Claims: Why Importers and Exporters Need a Public Adjuster',
  description:
    'Marine cargo claims are among the most complex in property insurance. Learn about carrier liability, marine surveyors, General Average, COGSA, and why a Public Adjuster with trade expertise changes outcomes.',
  summary:
    'Marine cargo claims are highly complex, involving carrier liability, marine surveyors, General Average, and COGSA. A Public Adjuster with trade expertise can materially change the outcome on a significant cargo loss.',
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
        International trade moves trillions of dollars of goods annually, and cargo losses &mdash;
        from physical damage and theft to shortage, contamination, and General Average &mdash; are
        an ever-present risk. When those losses occur, most importers and exporters face the
        insurance claim process entirely alone, armed only with documents they may not fully
        understand, against an insurance company whose adjusters and marine surveyors are trained
        to protect the carrier&apos;s bottom line.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This guide establishes three key propositions: a California-licensed Public Adjuster has
        full legal authority to represent importers and exporters on marine cargo claims; the
        marine surveyor hired by the insurer is <strong>not</strong> your advocate; and a public
        adjuster with a working background in international trade brings unmatched subject matter
        expertise that translates directly into stronger, better-documented, more fully realized
        cargo claim recoveries.
      </p>

      {/* ───────── Section I: Legal Framework ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        The Legal Framework: Public Adjuster Authority Over Cargo Claims
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        What Is a Public Adjuster?
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under California Insurance Code &sect; 15007, a public insurance adjuster is defined as a
        person who, for compensation, acts on behalf of or aids in any manner an insured in
        negotiating for or effecting the settlement of a claim or claims for loss or damage under{' '}
        <strong>any policy of insurance covering real or personal property</strong>. The operative
        phrase is &ldquo;any policy of insurance covering real or personal property.&rdquo;
        Cargo &mdash; goods, merchandise, and freight in transit &mdash; is unambiguously personal
        property. This gives a California-licensed Public Adjuster clear statutory authority to
        represent importers and exporters in the adjustment of marine cargo insurance claims where
        the claim arises within California. For more on what a Public Adjuster does, see our{' '}
        <Link href="/resources/public-adjuster" className="text-[#2E74B5] hover:underline">
          guide to working with a PA
        </Link>.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        How California Law Classifies Marine Cargo Insurance
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        California Insurance Code &sect; 101 provides the state&apos;s controlling definition of
        marine insurance, which encompasses:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>All goods, freights, cargoes, merchandise, effects, disbursements, and profits</li>
        <li>Property in connection with any and all risks or perils of navigation, transit, or transportation</li>
        <li>Property while being assembled, packed, crated, baled, or prepared for shipment</li>
        <li>Property during delays, storage, transshipment, or reshipment incident to the voyage</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Critically, California&apos;s insurance regulatory framework &mdash; including the{' '}
        <Link href="/resources/california-fair-claims" className="text-[#2E74B5] hover:underline">
          Fair Claims Settlement Practices Regulations
        </Link>{' '}
        (10 CCR &sect; 2695 et seq.) and the California Department of Insurance&apos;s oversight
        authority &mdash; applies to marine cargo policies issued to California-based
        policyholders or covering cargo that transits through California. The CDI&apos;s adjuster
        licensing examination itself covers ocean marine and cargo coverage as a tested line of
        insurance.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Regulatory Boundary: Where California Law Governs
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Marine cargo insurance has a unique dual character: many policies are governed in part by
        federal admiralty and maritime law, and internationally by conventions such as the
        Hague-Visby Rules or COGSA (Carriage of Goods by Sea Act). However, the insurance policy
        itself &mdash; the contract between the cargo owner and the insurer &mdash; is a
        first-party property insurance contract subject to California insurance regulations when
        the policyholder is California-based or the claim arises from cargo entering, leaving, or
        moving through California.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Public Adjuster&apos;s role is not to litigate admiralty law &mdash; it is to
        represent the insured in the adjustment of the insurance claim. That function falls
        squarely within the scope of a California Public Adjuster license.
      </p>

      {/* ───────── Section II: The Advocacy Gap ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        The Advocacy Gap: Who Speaks for the Cargo Owner?
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Marine Surveyor&apos;s Limited Role
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a cargo claim occurs, the insurer typically deploys a marine surveyor to inspect and
        assess the loss. Most importers and exporters assume the surveyor is there to help them.
        That assumption is wrong. A marine surveyor engaged by the insurer is tasked with:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Physically inspecting damaged cargo and documenting condition</li>
        <li>Investigating the probable cause of loss</li>
        <li>Estimating the monetary extent of the damage</li>
        <li>Reporting findings back to the insurance company adjuster</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Critically, a surveyor hired by the insurer is expressly instructed: <strong>do not
        address policy coverage or exclusions</strong>. Even a casual comment about coverage
        could prejudice the claim. The surveyor works for the insurer &mdash; not for the cargo
        owner. There is no one at the inspection table representing you. For a deeper look at how
        this dynamic works across all claim types, see{' '}
        <Link href="/resources/dealing-with-adjuster" className="text-[#2E74B5] hover:underline">
          dealing with the insurance company&apos;s adjuster
        </Link>.
      </p>

      <CalloutBox variant="warning" title="The Surveyor Is Not Your Advocate">
        <p>
          The marine surveyor hired by the insurer has no obligation to identify coverages you
          may be missing, to suggest you file for Sue and Labor costs, or to tell you about
          General Average coverage. Their job is to inspect and report &mdash; to the insurer.
          Without independent representation, you have no one at the table working for you.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Insurer&apos;s Adjuster: A Different Set of Interests
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Once the surveyor&apos;s report is submitted, an insurance adjuster employed by or
        retained for the insurer makes coverage and valuation decisions. That adjuster&apos;s
        professional obligation runs to the insurance company, not to the insured. Their
        financial incentive is to accurately but efficiently close claims &mdash; which in
        practice can mean missing or minimizing coverages available under the policy.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The policyholder-side coverage bar has documented that importers and exporters
        routinely fail to recover under policy provisions they are entitled to, including:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Sue and Labor coverage</strong> for out-of-pocket costs incurred to protect
          and preserve damaged cargo
        </li>
        <li>
          <strong>Warehousing and Forwarding charges</strong> arising from transit disruptions
        </li>
        <li>
          <strong>Marine Extension Clause coverage</strong> for deviations, transshipment,
          forced discharge, and reshipment
        </li>
        <li>
          <strong>General Average contributions</strong>, which can constitute a substantial
          hidden obligation
        </li>
        <li>
          <strong>Suit limitation clauses</strong> &mdash; often as short as 12 months &mdash;
          that the insurer may use to bar late claims
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Without independent expert representation, cargo owners frequently leave significant
        money on the table &mdash; not because their claims are invalid, but because they
        do not know to ask for it. This is the same dynamic we see in{' '}
        <Link href="/resources/first-offer-lowball" className="text-[#2E74B5] hover:underline">
          residential claims where policyholders accept the first offer
        </Link>.
      </p>

      {/* ───────── Comparison Table ───────── */}
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-[#1F3964] text-white">
              <th className="px-4 py-3 text-left font-semibold">&nbsp;</th>
              <th className="px-4 py-3 text-left font-semibold">Marine Surveyor</th>
              <th className="px-4 py-3 text-left font-semibold">Insurer&apos;s Adjuster</th>
              <th className="px-4 py-3 text-left font-semibold">Public Adjuster</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr className="border-t border-gray-200">
              <td className="px-4 py-3 font-semibold">Hired by</td>
              <td className="px-4 py-3">The insurance company</td>
              <td className="px-4 py-3">The insurance company</td>
              <td className="px-4 py-3 font-semibold text-green-700">The policyholder (you)</td>
            </tr>
            <tr className="border-t border-gray-200 bg-gray-50">
              <td className="px-4 py-3 font-semibold">Obligation runs to</td>
              <td className="px-4 py-3">The insurer</td>
              <td className="px-4 py-3">The insurer</td>
              <td className="px-4 py-3 font-semibold text-green-700">The policyholder</td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="px-4 py-3 font-semibold">Addresses coverage?</td>
              <td className="px-4 py-3">No &mdash; expressly prohibited</td>
              <td className="px-4 py-3">Yes &mdash; for the insurer&apos;s benefit</td>
              <td className="px-4 py-3 font-semibold text-green-700">Yes &mdash; for your benefit</td>
            </tr>
            <tr className="border-t border-gray-200 bg-gray-50">
              <td className="px-4 py-3 font-semibold">Identifies missed coverages?</td>
              <td className="px-4 py-3">No</td>
              <td className="px-4 py-3">Not their incentive</td>
              <td className="px-4 py-3 font-semibold text-green-700">Yes &mdash; primary function</td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="px-4 py-3 font-semibold">Negotiates settlement?</td>
              <td className="px-4 py-3">No</td>
              <td className="px-4 py-3">Yes &mdash; to minimize payout</td>
              <td className="px-4 py-3 font-semibold text-green-700">Yes &mdash; to maximize recovery</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ───────── Section III: Complexity ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Why Marine Cargo Claims Are So Complex
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Marine cargo claims are among the most documentation-intensive and procedurally complex
        claims in the property insurance world. Unlike a residential fire where the damage is
        physically apparent and locally contained, a cargo claim involves:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Multiple jurisdictions:</strong> Cargo may originate in Asia, transit through
          a European port, and arrive damaged at Los Angeles or Long Beach
        </li>
        <li>
          <strong>Multiple responsible parties:</strong> Ocean carriers, inland carriers, freight
          forwarders, stevedores, warehouses, and customs brokers may each bear some portion of
          liability
        </li>
        <li>
          <strong>Specialized documentation:</strong> Bills of lading, commercial invoices,
          packing lists, customs entry documents, survey reports, shortage certificates, and
          carrier exception notices must all be timely assembled
        </li>
        <li>
          <strong>Strict notice deadlines:</strong> Failure to notify ocean carriers of damage
          within the required window (as short as three days for visible damage under some bills
          of lading) can permanently extinguish the right of recovery
        </li>
        <li>
          <strong>Subrogation complexity:</strong> Once the insurer pays the policyholder, it
          acquires the right to sue the responsible carrier &mdash; how that is handled directly
          affects the insured&apos;s ultimate net recovery
        </li>
        <li>
          <strong>Incoterms and risk transfer:</strong> The point at which risk of loss shifts
          from seller to buyer under international commercial terms (FOB, CIF, DAP, etc.)
          determines who has an insurable interest and who can file the claim
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Common Types of Marine Cargo Claims
      </h3>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-3 text-left font-semibold text-[#1F3964]">Loss Type</th>
              <th className="px-4 py-3 text-left font-semibold text-[#1F3964]">Examples</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr className="border-t border-gray-200">
              <td className="px-4 py-3 font-semibold">Physical Damage</td>
              <td className="px-4 py-3">Water intrusion, crushing, breakage, rough handling during loading/discharge</td>
            </tr>
            <tr className="border-t border-gray-200 bg-gray-50">
              <td className="px-4 py-3 font-semibold">Theft &amp; Pilferage</td>
              <td className="px-4 py-3">Stolen containers, missing cartons, pilferage at port or warehouse</td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="px-4 py-3 font-semibold">Shortage</td>
              <td className="px-4 py-3">Quantity received is less than quantity shipped per the bill of lading</td>
            </tr>
            <tr className="border-t border-gray-200 bg-gray-50">
              <td className="px-4 py-3 font-semibold">Contamination</td>
              <td className="px-4 py-3">Chemical contamination, mold, odor absorption, cross-contamination from adjacent cargo</td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="px-4 py-3 font-semibold">Temperature Damage</td>
              <td className="px-4 py-3">Reefer container malfunction, spoiled perishables, pharmaceutical degradation</td>
            </tr>
            <tr className="border-t border-gray-200 bg-gray-50">
              <td className="px-4 py-3 font-semibold">General Average</td>
              <td className="px-4 py-3">Cargo jettisoned to save the vessel, or extraordinary expenses incurred for common safety</td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="px-4 py-3 font-semibold">Total Loss</td>
              <td className="px-4 py-3">Vessel sinking, fire at sea, cargo declared a constructive total loss</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The General Average Trap
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        One of the most misunderstood obligations in international trade is General Average.
        Under this ancient maritime law doctrine, when a ship&apos;s master must sacrifice part
        of the cargo or incur extraordinary expenses to save the vessel and the remainder of the
        voyage, <strong>all cargo owners must contribute proportionally to the loss</strong> &mdash;
        regardless of whether their specific goods were damaged.
      </p>

      <CalloutBox variant="important" title="General Average Can Freeze Your Goods">
        <p>
          General Average proceedings can take two years or more to finalize. A cargo owner
          without insurance &mdash; or with inadequate insurance &mdash; may be required to post
          a cash security deposit before their goods are even released from the vessel. Navigating
          this process requires someone who understands both the maritime framework and the
          insurance policy&apos;s coverage for General Average and salvage charges.
        </p>
      </CalloutBox>

      {/* ───────── Section IV: What a PA Brings ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        What a Public Adjuster Brings to a Cargo Claim
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A licensed Public Adjuster engaged by an importer or exporter functions as the
        policyholder&apos;s dedicated claims professional from the moment of loss through final
        settlement:
      </p>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Policy review and coverage analysis:</strong> Expert interpretation of all
          policy provisions, extensions, endorsements, exclusions, and conditions to identify the
          full scope of coverage available &mdash; not just the obvious loss
        </li>
        <li>
          <strong>Documentation assembly:</strong> Coordinating the complete claim package:
          bills of lading, commercial invoices, packing lists, surveys, photos, shortage
          certificates, carrier notices, customs documents, and correspondence
        </li>
        <li>
          <strong>Timely carrier notification:</strong> Ensuring all required notices are sent to
          ocean carriers, inland carriers, and other responsible parties within the mandatory
          timeframes to preserve subrogation rights
        </li>
        <li>
          <strong>Damage quantification:</strong> Working with independent experts where needed
          to establish the true commercial value of the loss at the applicable valuation standard
          under the policy
        </li>
        <li>
          <strong>Settlement negotiation:</strong> Directly negotiating with the insurer&apos;s
          adjuster from a position of policy knowledge and documented claim strength &mdash; not
          as a lay policyholder unfamiliar with the process
        </li>
        <li>
          <strong>Regulatory compliance monitoring:</strong> Identifying and documenting any
          violations of California&apos;s{' '}
          <Link href="/resources/california-fair-claims" className="text-[#2E74B5] hover:underline">
            Fair Claims Settlement Practices Regulations
          </Link>{' '}
          and Insurance Code &sect; 790.03(h) if the insurer delays, denies, or underpays without
          adequate justification
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Contingency Advantage: Aligned Incentives
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Unlike insurance company adjusters who are paid regardless of outcome, a Public Adjuster
        working on contingency earns nothing unless additional recovery is achieved for the
        policyholder. This creates a powerful alignment of interests:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>No upfront cost to the importer or exporter</li>
        <li>No fee unless the Public Adjuster recovers more than the insurer&apos;s initial position</li>
        <li>Maximum motivation to identify every recoverable dollar under the policy</li>
        <li>No risk of over-paying for services that produce no result</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        For more on how Public Adjuster fees work, see our{' '}
        <Link href="/resources/public-adjuster-fees" className="text-[#2E74B5] hover:underline">
          guide to PA fees and when they are worth it
        </Link>.
      </p>

      {/* ───────── Section V: Trade Expertise ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Why Trade Expertise Changes Everything
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most Public Adjusters come from a background in residential or commercial property
        damage &mdash; fires, floods, and storm losses. Very few have first-hand operational
        experience in international trade. A Public Adjuster who has worked as a
        licensed customs broker and freight forwarder brings capabilities that most adjusters
        simply cannot offer:
      </p>

      <div className="space-y-4 mb-8">
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="font-bold text-[#1F3964] mb-1">Customs and Import Valuation</h3>
          <p className="text-sm text-gray-700">
            Understanding how goods are valued for customs purposes &mdash; transaction value,
            computed value, deductive value &mdash; is critical to establishing the correct basis
            for a cargo insurance claim. Most adjusters have no idea how Customs and Border
            Protection (CBP) valuation methods work.
          </p>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="font-bold text-[#1F3964] mb-1">Bill of Lading Literacy</h3>
          <p className="text-sm text-gray-700">
            The bill of lading is simultaneously the cargo receipt, the title document, and the
            contract of carriage. An adjuster who can read, interpret, and use a bill of lading
            as the legal document it is can identify carrier limitations, notations, and
            exceptions that directly affect the claim.
          </p>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="font-bold text-[#1F3964] mb-1">Carrier Liability Limits Under COGSA</h3>
          <p className="text-sm text-gray-700">
            The Carriage of Goods by Sea Act limits ocean carrier liability to $500 per package
            unless a higher value was declared &mdash; meaning the carrier may owe far less than
            the actual loss. An adjuster who does not understand this will misframe the
            entire claim. The right adjuster knows where to look for value and how to bridge the
            gap through the cargo insurance policy.
          </p>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="font-bold text-[#1F3964] mb-1">Incoterms and Risk Transfer</h3>
          <p className="text-sm text-gray-700">
            Whether a shipment moves on FOB, CIF, DAP, or other terms determines at exactly what
            point the risk of loss shifted from seller to buyer. This affects who has insurable
            interest, who files the claim, and which insurer is on the hook. An adjuster who can
            read a sale contract or letter of credit and immediately identify the correct claimant
            and the correct policy saves critical time.
          </p>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="font-bold text-[#1F3964] mb-1">Supply Chain Knowledge</h3>
          <p className="text-sm text-gray-700">
            Understanding how cargo moves from factory floor to final destination &mdash; through
            export packing, inland trucking, port handling, vessel loading, ocean transit, port
            discharge, customs clearance, and final delivery &mdash; allows the adjuster to
            trace where in the supply chain damage most likely occurred and who the responsible
            party is.
          </p>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="font-bold text-[#1F3964] mb-1">General Average and Salvage Navigation</h3>
          <p className="text-sm text-gray-700">
            A combined marine and trade background positions the adjuster to guide cargo owners
            through General Average declarations, security deposits, and the eventual General
            Average adjustment &mdash; a process that is opaque and intimidating to most
            business owners.
          </p>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="font-bold text-[#1F3964] mb-1">Documentation Standards</h3>
          <p className="text-sm text-gray-700">
            An adjuster who understands what a commercial invoice, packing list, certificate of
            origin, fumigation certificate, phytosanitary certificate, and customs entry look
            like can quickly identify the documentation gaps that cause cargo claims to stall or
            fail.
          </p>
        </div>
      </div>

      <CalloutBox variant="tip" title="Inspect Goods Immediately Upon Delivery">
        <p>
          Always inspect shipments at the time of delivery and note any visible damage on the
          delivery receipt before signing. If you accept goods without noting damage, it becomes
          much harder to prove the damage occurred during transit. For concealed damage
          discovered after delivery, most policies and carrier liability rules require
          notification within a specific timeframe &mdash; often as short as three days for
          visible damage and five days for concealed damage.
        </p>
      </CalloutBox>

      {/* ───────── Section VI: An Underserved Market ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        An Underserved Market With Real Stakes
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The international cargo insurance market represents billions of dollars in claims
        annually. Yet the policyholder advocacy infrastructure that serves homeowners and
        commercial property owners &mdash; the Public Adjuster industry &mdash; has largely not
        extended its reach into cargo claims. Most importers and exporters do not know they
        have the right to hire their own adjuster. They do not know the surveyor on site
        works for the insurance company, not for them. And they do not know how much they are
        leaving on the table.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Whether the loss involves a container of electronics arriving at the Port of Long Beach
        with concealed damage, a shipment of agricultural products spoiled in a refrigerated
        container, a General Average declaration on a trans-Pacific voyage, or a theft of goods
        from a bonded warehouse, professional Public Adjuster representation can provide the
        expert advocacy that cargo owners have historically had to go without.
      </p>

      <CalloutBox variant="important" title="California Regulations Apply to Cargo Claims">
        <p>
          California&apos;s{' '}
          <Link href="/resources/california-fair-claims" className="text-[#2E74B5] hover:underline">
            Fair Claims Settlement Practices Regulations
          </Link>{' '}
          apply to marine cargo insurance claims involving California policyholders or
          California-transiting cargo. That means the same 15-day response requirements, 40-day
          decision deadlines, and{' '}
          <Link href="/resources/bad-faith" className="text-[#2E74B5] hover:underline">
            bad faith protections
          </Link>{' '}
          that protect homeowners also protect importers and exporters. If your cargo insurer
          is delaying or lowballing, you have regulatory tools available. See our{' '}
          <Link href="/letters" className="text-[#2E74B5] hover:underline">
            template demand letters
          </Link>{' '}
          for ready-to-use correspondence.
        </p>
      </CalloutBox>

      {/* ───────── Sources ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Sources and Legal References
      </h2>
      <ul className="list-disc pl-6 space-y-1 text-gray-600 text-sm mb-8">
        <li>California Insurance Code &sect; 15007 &mdash; Definition of Public Insurance Adjuster</li>
        <li>California Insurance Code &sect; 101 &mdash; Definition of Marine Insurance</li>
        <li>10 CCR &sect; 2695 &mdash; California Fair Claims Settlement Practices Regulations</li>
        <li>Policyholder-side coverage commentary &mdash; published analyses on marine cargo insurance policies</li>
        <li>Roanoke Group, &ldquo;Marine Cargo Claims and Procedures&rdquo; &mdash; industry guidance on cargo claim process and documentation</li>
        <li>Marine Surveyor Marketplace, &ldquo;Are You a Marine Surveyor or an Adjuster?&rdquo; (2023)</li>
        <li>Flexport Insurance Solutions, &ldquo;How Do Ocean Cargo Claims Processes Work?&rdquo; (2023)</li>
        <li>Setliff Law, &ldquo;Understanding Cargo Claims&rdquo; &mdash; COGSA, Carmack Amendment, and legal frameworks (2025)</li>
        <li>Carriage of Goods by Sea Act (COGSA), 46 U.S.C. &sect;&sect; 30701&ndash;30707</li>
        <li>California Department of Insurance &mdash; Adjuster Examination Objectives (ocean marine and cargo coverage)</li>
      </ul>

      {/* ───────── CTA ───────── */}
      <LeadCaptureForm
        claimType="cargo"
        heading="Have a Cargo Claim? Let's Talk."
        description="We handle California marine cargo insurance claims — with real trade industry expertise. Free consultation, no obligation. Tell us about your loss."
      />
      <hr className="my-8 border-gray-300" />
      <p className="text-sm text-gray-500 italic">
        This article is for informational purposes only and does not constitute legal advice. Insurance
        policies and applicable law vary by state and by policy form. Consult with a licensed
        professional regarding your specific situation.
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
