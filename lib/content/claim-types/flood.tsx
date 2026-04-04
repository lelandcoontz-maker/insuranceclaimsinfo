import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Flood Claims: NFIP, FEMA, and What Your Homeowner Policy Does Not Cover',
  description:
    'Learn why flood damage is excluded from standard homeowner policies, how the National Flood Insurance Program works, NFIP coverage limits, and the critical difference between flood damage and water damage.',
}

export default function Content() {
  return (
    <>
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Flood Damage Is Excluded From Your Homeowners Policy
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is one of the most important facts in homeowners insurance, and many people only
        learn it after a disaster: your standard homeowners insurance policy does not cover flood
        damage. It does not matter how comprehensive your policy is or how much you pay in
        premiums — flood is a specific exclusion in virtually every homeowners policy sold in the
        United States. To have coverage for flood damage, you must purchase a separate flood
        insurance policy.
      </p>

      <CalloutBox variant="important" title="Check Your Flood Coverage Before a Disaster">
        <p>
          Do not wait until floodwater is rising to find out whether you have flood insurance.
          Review your policy declarations page now. If you do not see a separate flood policy or a
          flood endorsement, you do not have coverage. Contact your insurance agent to discuss
          your options. If you are in a high-risk flood zone, your mortgage lender may require
          flood insurance — but even if you are not required to carry it, the risk may still be
          significant enough to justify the cost.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Constitutes a &quot;Flood&quot; Under Insurance Definitions
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance policies define &quot;flood&quot; very specifically, and the definition is
        broader than most people realize. Under insurance definitions, a flood is a general and
        temporary condition where normally dry land is partially or completely inundated by:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Overflow of inland or tidal waters</li>
        <li>Unusual and rapid accumulation or runoff of surface waters from any source</li>
        <li>Mudflow caused by flooding</li>
        <li>Collapse or subsidence of land along a body of water caused by erosion or undermining</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The key characteristic is that flood involves water rising or accumulating from an external
        source. Rain that enters through a damaged roof is not a flood — that is wind-driven rain
        damage and may be covered under your homeowners policy. But rainwater that pools on the
        ground and enters your home through the foundation, doors, or windows is flood damage and
        is not covered.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The National Flood Insurance Program (NFIP)
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The National Flood Insurance Program is a federal program administered by FEMA (the
        Federal Emergency Management Agency) that provides flood insurance to property owners in
        participating communities. Most flood insurance policies in the United States are written
        through the NFIP, though private flood insurance options are growing.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        NFIP policies have their own rules, claims process, and coverage limits that are different
        from your standard homeowners policy. Important limits to be aware of:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Building coverage maximum:</strong> $250,000 for residential properties
        </li>
        <li>
          <strong>Contents coverage maximum:</strong> $100,000 for residential properties
        </li>
        <li>
          <strong>No loss-of-use coverage:</strong> Unlike your homeowners policy, the NFIP does not
          provide additional living expenses if your home is uninhabitable
        </li>
        <li>
          <strong>Contents valuation:</strong> NFIP policies generally pay actual cash value (with
          depreciation) for personal property. However, Replacement Cost Value (RCV) coverage for
          contents is available for qualifying owner-occupied single-family dwellings where the
          building is the principal residence and Coverage A (building coverage) is maintained at a
          minimum of 80% of the building&apos;s replacement cost. If you do not meet these
          requirements, contents are paid at ACV
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Supplemental Flood Insurance
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Because NFIP coverage limits may not be sufficient for many homeowners — especially those
        with homes valued above $250,000 or with substantial personal property — supplemental flood
        policies are available from private insurers. These policies can provide coverage above
        the NFIP limits and may offer additional benefits such as replacement cost coverage for
        contents and loss-of-use coverage. If you live in a flood-prone area, a supplemental
        policy can be a critical layer of financial protection.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Flood Damage vs. Water Damage From a Burst Pipe
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This distinction confuses many homeowners, so it is worth stating clearly: water damage
        from a burst pipe, appliance failure, or other internal plumbing issue is <strong>not</strong> a
        flood. It is a water loss, and it is typically covered under your standard homeowners
        policy (subject to the{' '}
        <Link href="/types-of-claims/water" className="text-blue-700 underline hover:text-blue-900">
          sudden vs. gradual distinction
        </Link>
        ). Flood specifically refers to water entering your home from outside due to rising
        or accumulating surface water.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Similarly, a{' '}
        <Link href="/types-of-claims/sewage" className="text-blue-700 underline hover:text-blue-900">
          sewer backup
        </Link>{' '}
        through your drains is not the same as a flood, though it may be caused by flooding
        conditions. The coverage mechanism is different — sewer backup is covered under a sewer
        backup endorsement on your homeowners policy, while flood-related damage requires a flood
        policy. If both occur simultaneously (as often happens in major storms), you may need to
        file claims under both policies, with each covering its respective portion of the damage.
      </p>
    </>
  )
}
