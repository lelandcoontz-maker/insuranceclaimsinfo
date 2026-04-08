import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'
import { LeadCaptureForm } from '@/components/content/LeadCaptureForm'

export const meta = {
  title: 'Cargo Claims: Damage or Loss to Goods in Transit',
  description:
    'California cargo claims for goods damaged or lost during transit. Learn about carrier liability, bills of lading, and how a Public Adjuster can help recover your losses.',
}

export default function Content() {
  return (
    <>
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Are Cargo Claims?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Cargo claims arise when goods are damaged, lost, or destroyed during transit &mdash; whether
        by truck, rail, sea, or air. For businesses that ship or receive goods, cargo losses can
        represent significant financial exposure. Cargo insurance and carrier liability coverage
        protect against these losses, but the claims process involves unique rules, documentation
        requirements, and legal frameworks that differ from standard property insurance.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Bills of Lading and Carrier Liability
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The <strong>bill of lading</strong> is the most important document in any cargo claim. It
        serves as a receipt for the goods, a contract of carriage, and a document of title. When goods
        are damaged or lost in transit, the bill of lading establishes what was shipped, its condition
        at the time of shipment, and the carrier&apos;s obligations. Any notations on the bill of
        lading about pre-existing damage or discrepancies in quantity are critical &mdash; these can
        affect your ability to recover.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Carrier liability is governed by different rules depending on the mode of transport. For
        domestic trucking, the Carmack Amendment provides a federal framework for carrier liability.
        For international ocean shipping, the Carriage of Goods by Sea Act (COGSA) applies. Each
        framework has different limitation periods, liability caps, and requirements for filing
        claims.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Types of Cargo Insurance Coverage
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>All-risk coverage:</strong> The broadest form of cargo insurance, covering all
          physical loss or damage to goods in transit unless specifically excluded. This is the most
          common and recommended coverage for high-value shipments.
        </li>
        <li>
          <strong>Named peril coverage:</strong> Covers only losses caused by specifically listed
          perils (e.g., fire, collision, sinking, theft). Less expensive but leaves gaps for losses
          caused by perils not named in the policy.
        </li>
        <li>
          <strong>Warehouse-to-warehouse coverage:</strong> Protects goods from the point of origin
          to the final destination, including any intermediate storage. Without this, gaps in
          coverage can exist during loading, unloading, or temporary storage.
        </li>
      </ul>

      <CalloutBox variant="tip" title="Inspect Goods Immediately Upon Delivery">
        <p>
          Always inspect shipments at the time of delivery and note any visible damage on the
          delivery receipt before signing. If you accept goods without noting damage, it becomes much
          harder to prove the damage occurred during transit. For concealed damage discovered after
          delivery, most policies and carrier liability rules require you to notify the carrier
          within a specific timeframe &mdash; often as short as 5 days for concealed damage claims.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Common Cargo Claim Challenges
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Cargo claims can be complicated by multiple parties involved in the shipment (shipper,
        carrier, broker, consignee), disputes over when and where the damage occurred, valuation
        disagreements, and strict filing deadlines. Carriers and their insurers often deny or
        undervalue claims by arguing the goods were improperly packed, the damage was pre-existing,
        or the claim was not filed within the required timeframe.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How a Public Adjuster Helps With California Cargo Claims
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        For California cargo claims, a licensed Public Adjuster can review your cargo insurance
        policy and carrier contracts, document the damage thoroughly, calculate the full value of the
        loss, file the claim within all applicable deadlines, and negotiate with the insurer or
        carrier on your behalf. Whether the loss involves a single damaged pallet or a full container
        of destroyed goods, professional representation helps ensure your claim is handled correctly
        and you receive fair compensation.
      </p>

      <CalloutBox variant="tip" title="In-Depth Guide: Marine Cargo Claims">
        <p>
          For a comprehensive analysis of marine cargo claims &mdash; including the legal
          framework for public adjuster authority, the role of marine surveyors, General Average,
          COGSA carrier liability limits, Incoterms, and why trade expertise changes outcomes
          &mdash; read our full guide:{' '}
          <Link href="/resources/marine-cargo-claims" className="text-[#2E74B5] hover:underline font-semibold">
            Marine Cargo Insurance Claims: Why Importers and Exporters Need a Public Adjuster &rarr;
          </Link>
        </p>
      </CalloutBox>

      <LeadCaptureForm
        claimType="cargo"
        heading="Get Help With Your Cargo Claim"
        description="We handle California cargo claims. Tell us about your loss and we'll review your options. Free consultation."
      />
    </>
  )
}
