import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Coverage A vs. Coverage B: When Insurers Reclassify Your Dwelling to Reduce Your Claim',
  description:
    'Coverage A (dwelling) and Coverage B (other structures) carry very different limits. Learn how insurers reclassify structures to move damage from Coverage A to the much smaller Coverage B limit, and how to fight back.',
  summary:
    'Coverage A (dwelling) and Coverage B (other structures) carry very different limits. Insurers sometimes reclassify a structure into the smaller Coverage B to cut your payout. Know how each applies so you can contest an improper reclassification.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        A homeowner&rsquo;s insurance policy divides property coverage into distinct categories, each with its own sublimit. Coverage A covers the dwelling itself. Coverage B covers other structures on the property. The difference matters enormously because Coverage B is typically limited to just 10 percent of the Coverage A dwelling limit. When a carrier reclassifies a structure &mdash; moving it from Coverage A to Coverage B &mdash; the effect can be devastating. A $500,000 dwelling policy provides $500,000 for Coverage A but only $50,000 for Coverage B. If the carrier reclassifies a $120,000 attached structure as &ldquo;other structures,&rdquo; the policyholder suddenly faces a $70,000 gap that did not exist when the structure was properly classified under Coverage A.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This reclassification tactic is not hypothetical. It happens regularly in homeowner claims, particularly after large losses where the total damage approaches or exceeds policy limits. Understanding how Coverage A and Coverage B work &mdash; and how carriers manipulate the boundary between them &mdash; is essential for any policyholder pursuing a significant property claim.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Coverage A Covers
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Coverage A, commonly labeled &ldquo;Dwelling&rdquo; on the{' '}
        <Link href="/resources/declarations-page" className="text-[#2E74B5] underline hover:text-blue-900">
          declarations page
        </Link>, covers the dwelling on the residence premises, including structures attached to the dwelling. Under the standard ISO Homeowners 3 (HO-3) form, Coverage A applies to:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>The main house structure, including all rooms, floors, walls, roof, and foundation</li>
        <li>Structures <strong>attached</strong> to the dwelling, such as an attached garage, an enclosed porch, a covered patio that shares a wall or roof with the dwelling, or a breezeway connecting the dwelling to another structure</li>
        <li>Building materials and supplies located on or next to the residence premises, intended for use in construction, alteration, or repair of the dwelling or other structures</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The key operative word is <strong>attached</strong>. If a structure is physically connected to the dwelling &mdash; sharing a common wall, roof, foundation, or structural connection &mdash; it falls under Coverage A and benefits from the full dwelling coverage limit.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Coverage B Covers
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Coverage B, labeled &ldquo;Other Structures,&rdquo; covers structures on the residence premises that are separated from the dwelling by clear space or connected to the dwelling only by a fence, utility line, or similar connection. Typical Coverage B items include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Detached garages</li>
        <li>Detached guest houses or pool houses</li>
        <li>Storage sheds and workshops</li>
        <li>Fences and gates</li>
        <li>Driveways and walkways</li>
        <li>Retaining walls</li>
        <li>Pool equipment, cabanas, and detached pool structures</li>
        <li>Gazebos, pergolas, and freestanding outdoor structures</li>
        <li>Detached carports</li>
        <li>Mailboxes and lampposts</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Coverage B also specifically excludes structures used in whole or in part for business purposes unless the business use is limited to certain permitted activities. This exclusion can create additional disputes for policyholders who use a detached structure as a home office.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The 10 Percent Default Limit
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under the standard HO-3 form, Coverage B is set at 10 percent of the Coverage A dwelling limit. This is an additional amount of insurance &mdash; it does not reduce the Coverage A limit. But 10 percent is often grossly inadequate. A policyholder with a $600,000 dwelling limit has only $60,000 for all other structures combined. If that policyholder has a detached garage ($40,000 to rebuild), a fence around the property ($15,000), a pool with equipment ($25,000), a shed ($5,000), retaining walls ($20,000), and a driveway ($10,000), the total other structures damage is $115,000 &mdash; nearly double the Coverage B limit.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is why the classification of structures between Coverage A and Coverage B is so consequential. Every dollar of damage that the carrier shifts from Coverage A to Coverage B pushes the policyholder closer to the inadequate Coverage B sublimit, potentially creating an uninsured gap.
      </p>

      <CalloutBox variant="important" title="Check Your Coverage B Limit Before a Loss">
        <p>
          Many policyholders do not realize how many items fall under Coverage B until they have a claim. Walk your property and estimate the replacement cost of every detached structure, fence, driveway, walkway, retaining wall, and pool-related structure. If the total exceeds 10 percent of your dwelling coverage, consider purchasing a Coverage B increase endorsement. Some carriers offer 20 percent or higher Coverage B limits for an additional premium. The cost is modest relative to the potential gap.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Insurers Reclassify Structures to Reduce Claims
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The reclassification tactic works like this: a structure that the policyholder reasonably considers part of the dwelling &mdash; and that was likely contemplated as part of the dwelling when the Coverage A limit was set &mdash; is reclassified by the carrier as an &ldquo;other structure&rdquo; under Coverage B. This shifts the damage from the large Coverage A limit to the much smaller Coverage B limit. Common reclassification disputes include:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Attached Garages
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        An attached garage that shares a common wall with the dwelling is Coverage A. But some carriers argue that a garage connected to the house only by a breezeway or covered walkway is &ldquo;not truly attached&rdquo; and belongs under Coverage B. This argument should be challenged. Most policy forms and courts recognize that a structure connected to the dwelling by a breezeway, covered walkway, or similar structural connection is attached for Coverage A purposes. The connection does not need to be a full common wall.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Enclosed Patios and Sunrooms
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        An enclosed patio or sunroom that shares a wall or roofline with the main house is part of the dwelling under Coverage A. Carriers sometimes argue that because the patio was &ldquo;added later&rdquo; or has a different construction type (for example, a screened-in porch with a lighter roof structure), it should be classified separately. This argument fails when the structure is physically connected to the dwelling. The date of construction and the materials used do not determine whether a structure is &ldquo;attached&rdquo; &mdash; physical connection does.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Pool Houses and Cabanas
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A pool house that is connected to the main dwelling by a covered walkway or shared structure may qualify as Coverage A. If the pool house is freestanding with clear space between it and the dwelling, it falls under Coverage B. The dispute often centers on what constitutes a sufficient &ldquo;connection.&rdquo; A shared patio slab or a decorative arbor between the structures is generally insufficient. A shared roof, wall, or enclosed passageway is sufficient. For more on pool-related claim issues, see the article on{' '}
        <Link href="/resources/pool-spa-claims" className="text-[#2E74B5] underline hover:text-blue-900">
          pool and spa insurance claims
        </Link>.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        ADUs and In-Law Units
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Accessory dwelling units (ADUs) present a particularly complex classification problem. An attached ADU &mdash; one that shares a wall or is built within the existing dwelling footprint &mdash; should fall under Coverage A. A detached ADU, even one on the same property, falls under Coverage B and is subject to the 10 percent limit. Given that California ADUs can cost $150,000 to $400,000 or more to construct, a 10 percent Coverage B limit is almost certainly insufficient. Policyholders with ADUs must address this coverage gap proactively. For a detailed analysis, see the article on{' '}
        <Link href="/resources/adu-coverage-gaps" className="text-[#2E74B5] underline hover:text-blue-900">
          ADU coverage gaps
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The &ldquo;Physically Connected&rdquo; Standard
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The test for whether a structure is covered under Coverage A or Coverage B is physical connection. Courts have interpreted this standard with reasonable consistency: a structure is &ldquo;attached&rdquo; to the dwelling if it shares a common wall, roof, foundation, or enclosed passageway. Mere proximity is not enough. A structure that is one foot from the dwelling but separated by clear space is Coverage B. A structure connected by an enclosed breezeway is Coverage A.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Ambiguities in the policy language are resolved in favor of the policyholder under California&rsquo;s rules of{' '}
        <Link href="/resources/policy-interpretation" className="text-[#2E74B5] underline hover:text-blue-900">
          insurance policy interpretation
        </Link>. If a reasonable policyholder would understand a structure to be part of the dwelling &mdash; and if the structure was included in the dwelling valuation when the Coverage A limit was established &mdash; the carrier&rsquo;s attempt to reclassify it as Coverage B should be challenged vigorously.
      </p>

      <CalloutBox variant="warning" title="Check Your Appraisal or Dwelling Valuation">
        <p>
          When the policy was issued or renewed, the carrier or its agent likely performed a dwelling valuation to set the Coverage A limit. Request a copy of that valuation. If the valuation included the disputed structure in the dwelling replacement cost estimate &mdash; for example, if the attached garage square footage was included in the total dwelling square footage used to calculate Coverage A &mdash; the carrier cannot later argue that the structure belongs under Coverage B. The carrier valued it as part of the dwelling, charged a premium based on that valuation, and must cover it as part of the dwelling.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Coverage B Items That Frequently Surprise Policyholders
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many policyholders are surprised to learn how many property components fall under the limited Coverage B. These items are easy to overlook during pre-loss coverage reviews but can add up to tens of thousands of dollars after a significant loss:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Fences.</strong> A wood or wrought-iron fence around a typical residential lot can cost $15,000 to $40,000 to replace, depending on materials, length, and local labor costs.</li>
        <li><strong>Driveways.</strong> A concrete or paver driveway can cost $10,000 to $30,000 to replace, particularly if it includes decorative elements or significant grading.</li>
        <li><strong>Retaining walls.</strong> In hillside communities common throughout California, retaining walls can cost $20,000 to $100,000 or more to replace, and they are Coverage B items.</li>
        <li><strong>Detached garages.</strong> A detached two-car garage can cost $40,000 to $80,000 to rebuild.</li>
        <li><strong>Sheds and outbuildings.</strong> Even a modest storage shed can cost $5,000 to $15,000 to replace.</li>
        <li><strong>Pool equipment.</strong> Pumps, filters, heaters, and control systems for a residential pool can total $10,000 to $25,000 in replacement costs.</li>
        <li><strong>Mailboxes, lampposts, and landscape structures.</strong> These individually small items collectively consume Coverage B limits.</li>
        <li><strong>Septic systems and wells.</strong> If the home is not on municipal water or sewer, these items fall under Coverage B and can be extremely expensive to replace.</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When Coverage B Limits Are Inadequate
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        For many California properties, the default 10 percent Coverage B limit is woefully insufficient. Properties with extensive hardscaping, detached structures, pools, retaining walls, and long driveways can easily have $100,000 to $200,000 or more in Coverage B items. If the dwelling limit is $500,000, the default $50,000 Coverage B limit leaves a massive gap.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Policyholders should take two steps to address this. First, increase the Coverage B percentage. Most carriers offer endorsements that increase Coverage B to 20 percent, 30 percent, or even a scheduled dollar amount. The additional premium is typically modest. Second, ensure the Coverage A dwelling limit is adequate. When Coverage A is underinsured, Coverage B (calculated as a percentage of Coverage A) is automatically underinsured as well.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a broader discussion of how policy limits affect claim recovery, review the article on{' '}
        <Link href="/resources/loss-settlement-provisions" className="text-[#2E74B5] underline hover:text-blue-900">
          loss settlement provisions
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Practical Steps When Facing a Reclassification Dispute
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If a carrier attempts to reclassify a structure from Coverage A to Coverage B, the policyholder should take the following steps:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Review the policy language.</strong> Read the Coverage A and Coverage B definitions in the actual policy form, not the declarations page summary. Look for how &ldquo;attached&rdquo; and &ldquo;other structures&rdquo; are defined.</li>
        <li><strong>Obtain the dwelling valuation.</strong> Request the carrier&rsquo;s dwelling valuation or replacement cost estimate used to set the Coverage A limit. Determine whether the disputed structure was included in that calculation.</li>
        <li><strong>Document the physical connection.</strong> Photograph and document every point of connection between the disputed structure and the main dwelling. Obtain building plans or permits that show the structure as part of the dwelling.</li>
        <li><strong>Review the building permits.</strong> The original building permits may describe the structure as part of the dwelling or as an addition to the dwelling, supporting Coverage A classification.</li>
        <li><strong>Challenge the reclassification in writing.</strong> Send the carrier a written objection explaining why the structure is covered under Coverage A, citing the policy language, the dwelling valuation, the physical connection, and any applicable case law.</li>
        <li><strong>Engage a public adjuster or attorney.</strong> If the reclassification involves a significant dollar amount, professional representation is warranted. A public adjuster can help document and present the coverage argument. An attorney can evaluate whether the reclassification constitutes a breach of contract or bad faith.</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Related Resources
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <Link href="/resources/declarations-page" className="text-[#2E74B5] underline hover:text-blue-900">
            Understanding Your Declarations Page
          </Link>
        </li>
        <li>
          <Link href="/resources/policy-interpretation" className="text-[#2E74B5] underline hover:text-blue-900">
            Insurance Policy Interpretation
          </Link>
        </li>
        <li>
          <Link href="/resources/adu-coverage-gaps" className="text-[#2E74B5] underline hover:text-blue-900">
            ADU Coverage Gaps
          </Link>
        </li>
        <li>
          <Link href="/resources/pool-spa-claims" className="text-[#2E74B5] underline hover:text-blue-900">
            Pool and Spa Insurance Claims
          </Link>
        </li>
        <li>
          <Link href="/resources/loss-settlement-provisions" className="text-[#2E74B5] underline hover:text-blue-900">
            Loss Settlement Provisions
          </Link>
        </li>
      </ul>
    </>
  )
}
