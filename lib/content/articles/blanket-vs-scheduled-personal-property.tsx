import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'
import { QABlock } from '@/components/content/QABlock'

export const meta = {
  title: 'Blanket vs. Scheduled Personal Property Coverage: When to Schedule and What You Risk If You Do Not',
  description:
    'How blanket personal property coverage works under Coverage C, when scheduling individual items is necessary, the valuation differences between each approach, and California-specific strategies for adequate contents coverage.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most homeowners think of their insurance as covering two things: the house and
        everything inside it. The house is covered under Coverage A (Dwelling). Everything
        inside is covered under Coverage C (Personal Property), sometimes called contents
        coverage. But what many policyholders do not realize is that Coverage C is not a
        single, unlimited pool of money that pays for every item in the home up to the policy
        limit. It is a complex coverage with internal restrictions, sub-limits, and valuation
        rules that can leave significant categories of personal property dramatically
        underinsured &mdash; even when the overall Coverage C limit appears adequate.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The distinction between blanket (unscheduled) personal property coverage and scheduled
        personal property coverage is one of the most important &mdash; and most frequently
        misunderstood &mdash; aspects of homeowners insurance. Getting it wrong can mean the
        difference between full recovery and a devastating shortfall for the very items that
        matter most.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Blanket Personal Property Coverage Works
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Blanket personal property coverage &mdash; the standard Coverage C that comes with
        every homeowners policy &mdash; provides a single aggregate limit that applies to all
        of the policyholder&rsquo;s personal property, subject to the policy&rsquo;s terms,
        conditions, and exclusions. On most HO-3 policies, the Coverage C limit is set at a
        percentage of the Coverage A (Dwelling) limit, typically 50 to 75 percent. A home
        insured for $500,000 under Coverage A might carry $250,000 to $375,000 in Coverage C.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        At first glance, these figures may appear generous. But blanket Coverage C operates
        under constraints that significantly reduce the amount actually available for many
        categories of property:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Special Limits of Liability (Sub-Limits)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Every homeowners policy contains{' '}
        <Link href="/resources/special-limits-of-liability" className="text-[#2E74B5] underline hover:text-blue-900">
          special limits of liability
        </Link>{' '}
        that cap the amount the policy will pay for specific categories of personal property,
        regardless of the overall Coverage C limit. These sub-limits are often shockingly low
        relative to the value of the items they restrict. Common sub-limits on a standard ISO
        HO-3 policy include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>$1,500 for jewelry, watches, furs, and precious stones.</strong> This is a
          combined limit for all items in the category &mdash; not per item. A single
          engagement ring can easily exceed this limit.
        </li>
        <li>
          <strong>$2,500 for firearms and related equipment.</strong> For households with
          even a modest collection, this limit is immediately inadequate.
        </li>
        <li>
          <strong>$2,500 for silverware, goldware, and pewterware.</strong> Applies to
          flatware sets, serving pieces, and decorative silver.
        </li>
        <li>
          <strong>$1,500 for theft of cash, bank notes, and coins.</strong> Includes
          collector coins.
        </li>
        <li>
          <strong>$2,500 for business property on the residence premises</strong> (and
          $500 away from the premises). Anyone who works from home with computer equipment,
          inventory, or tools faces this limitation.
        </li>
        <li>
          <strong>$1,000 for watercraft and related equipment.</strong> Includes trailers
          and motors.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        These sub-limits vary by carrier. Some carriers offer slightly higher sub-limits as a
        competitive feature, while others adhere to the ISO minimums. Regardless, the pattern
        is consistent: the categories of personal property that tend to be most valuable
        &mdash; jewelry, art, electronics used for business, collections &mdash; are the
        categories most tightly restricted under blanket coverage.
      </p>

      <CalloutBox variant="warning" title="Sub-Limits Apply Regardless of Your Coverage C Limit">
        <p>
          A policyholder with $300,000 in blanket personal property coverage is still limited
          to $1,500 for jewelry under the standard sub-limit. The $300,000 limit is
          irrelevant for items subject to sub-limits. This is the single most common source
          of contents coverage surprises after a loss.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Valuation Under Blanket Coverage
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        How blanket personal property is valued after a loss depends on the policy&rsquo;s
        loss settlement provisions. Most modern homeowners policies provide replacement cost
        coverage for personal property, meaning the carrier will pay the cost to replace the
        item with a new item of like kind and quality, without deduction for depreciation. But
        there are critical nuances:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Initial payment is typically actual cash value (ACV).</strong> Even on
          replacement cost policies, the carrier&rsquo;s initial payment is usually the{' '}
          <Link href="/resources/acv-rcv" className="text-[#2E74B5] underline hover:text-blue-900">
            actual cash value
          </Link>{' '}
          &mdash; replacement cost minus depreciation. The policyholder receives the
          recoverable depreciation only after actually replacing the item and submitting
          proof of purchase.
        </li>
        <li>
          <strong>Some items are only covered at ACV.</strong> Certain categories &mdash;
          electronics past a certain age, clothing, used items without receipts &mdash; may
          be valued at ACV even under a replacement cost policy, depending on the
          carrier&rsquo;s application of depreciation schedules.
        </li>
        <li>
          <strong>Unique, antique, or collectible items are problematic.</strong> Blanket
          coverage replaces items with &ldquo;like kind and quality.&rdquo; For a mass-produced
          television, that is straightforward. For a vintage guitar, an antique armoire, or a
          piece of original artwork, determining &ldquo;like kind and quality&rdquo; replacement
          cost is far more complex &mdash; and the carrier&rsquo;s interpretation will almost
          always favor the lower figure.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Scheduled Personal Property Coverage Works
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Scheduled personal property coverage, also called a personal articles floater or inland
        marine endorsement, provides coverage for specifically listed items at individually
        stated values. Each item is identified on the{' '}
        <Link href="/resources/scheduled-personal-property" className="text-[#2E74B5] underline hover:text-blue-900">
          schedule
        </Link>{' '}
        by description and value, and coverage applies to that specific item for that specific
        amount.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Scheduling personal property provides several significant advantages over blanket
        coverage:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>No sub-limits.</strong> A scheduled item is covered for its scheduled value,
          period. The $1,500 jewelry sub-limit that applies under blanket coverage is
          irrelevant for a ring that is individually scheduled at $15,000.
        </li>
        <li>
          <strong>Agreed value coverage.</strong> Most scheduled property endorsements provide
          &ldquo;agreed value&rdquo; coverage, meaning the carrier and the policyholder agree
          at the time of scheduling on the item&rsquo;s value. If a loss occurs, the carrier
          pays the agreed value without further negotiation over depreciation, replacement
          cost, or market value. This eliminates the most contentious valuation disputes that
          arise in contents claims.
        </li>
        <li>
          <strong>Broader perils.</strong> Scheduled personal property endorsements typically
          provide &ldquo;open perils&rdquo; (all risk) coverage, meaning the item is covered
          for any cause of loss unless specifically excluded. Standard blanket Coverage C on
          an HO-3 policy only covers named perils for personal property. This means accidental
          breakage, mysterious disappearance, and other losses that would not be covered under
          blanket coverage may be covered when the item is scheduled.
        </li>
        <li>
          <strong>Often no deductible.</strong> Many scheduled personal property endorsements
          carry no deductible, meaning the full agreed value is paid in the event of a loss.
          Under blanket coverage, the policy deductible applies to contents claims just as it
          does to dwelling claims.
        </li>
        <li>
          <strong>Worldwide coverage.</strong> Scheduled items are typically covered anywhere
          in the world, not just on the residence premises. A scheduled piece of jewelry lost
          during travel is covered; the same item under blanket coverage may face coverage
          limitations for off-premises losses.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When Scheduling Is Necessary
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The decision of whether to schedule an item should be based on three factors: whether
        the item&rsquo;s value exceeds the applicable sub-limit, whether the item requires
        broader peril coverage than blanket Coverage C provides, and whether the certainty
        of agreed value coverage justifies the additional premium. As a general rule,
        scheduling is advisable for:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Jewelry and watches</strong> valued above $1,500 (or the carrier&rsquo;s
          sub-limit) individually or in aggregate.
        </li>
        <li>
          <strong>Fine art and collectibles</strong> &mdash; paintings, sculptures, limited
          edition prints, and other items whose value cannot be determined by a simple retail
          replacement cost calculation.
        </li>
        <li>
          <strong>Musical instruments</strong> &mdash; particularly vintage, handmade, or
          professional-grade instruments whose replacement cost may far exceed what a carrier
          would pay under blanket coverage.
        </li>
        <li>
          <strong>Firearms</strong> valued above the $2,500 sub-limit, especially collections
          that include antique or historically significant pieces.
        </li>
        <li>
          <strong>Wine and spirits collections</strong> that have appreciated in value beyond
          their original purchase price.
        </li>
        <li>
          <strong>Camera and photography equipment</strong> used professionally or valued
          significantly above consumer-grade levels.
        </li>
        <li>
          <strong>High-value electronics and computer equipment</strong> used for business
          purposes, which face both the business property sub-limit and potential
          depreciation issues.
        </li>
        <li>
          <strong>Furs, designer goods, and luxury items</strong> whose replacement cost is
          not self-evident from a standard contents inventory.
        </li>
      </ul>

      <CalloutBox variant="tip" title="The Appraisal Requirement">
        <p>
          Most carriers require a professional appraisal for items being scheduled above a
          certain value threshold (commonly $5,000 to $10,000). Have high-value items
          appraised by a qualified appraiser before contacting the carrier to add them to
          the schedule. Update appraisals every three to five years, as values for jewelry,
          art, and collectibles fluctuate.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Common Mistakes That Lead to Underinsurance
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Even policyholders who understand the distinction between blanket and scheduled
        coverage often make errors that leave them underinsured:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Failing to update scheduled values.</strong> An engagement ring appraised
          at $8,000 ten years ago may now be worth $14,000 due to increases in precious metal
          and gemstone prices. If the scheduled value has not been updated, the policyholder
          will receive only the original $8,000 &mdash; even under agreed value coverage.
          Appraisals should be updated regularly.
        </li>
        <li>
          <strong>Scheduling the ring but not the collection.</strong> Policyholders often
          schedule their most valuable single item but forget that the sub-limit applies to
          the entire category in aggregate. If a homeowner schedules a $12,000 engagement
          ring but owns $6,000 in additional jewelry that remains under blanket coverage,
          that $6,000 is still subject to the $1,500 sub-limit.
        </li>
        <li>
          <strong>Underestimating blanket Coverage C needs.</strong> The standard Coverage C
          percentage (50 to 75 percent of Coverage A) may be adequate for a minimally
          furnished home, but many households contain far more personal property than they
          realize. A family with decades of accumulated belongings, holiday decorations, tools
          in the garage, clothing for four family members, and a well-stocked kitchen can
          easily exceed 75 percent of their dwelling coverage in actual contents value.
        </li>
        <li>
          <strong>Assuming the carrier tracks scheduled items.</strong> The carrier does not
          monitor whether scheduled items are still owned, have been sold, or have changed
          in value. The policyholder is responsible for notifying the carrier when items are
          acquired, sold, or significantly change in value. Many policyholders pay premium
          for years on items they no longer own while failing to add new acquisitions.
        </li>
        <li>
          <strong>Not scheduling items kept off-premises.</strong> Items stored in a safety
          deposit box, a vacation home, or a storage unit may have limited or no coverage
          under blanket Coverage C. Scheduling ensures those items are covered wherever they
          are located.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Documentation Burden
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The documentation requirements differ significantly between blanket and scheduled
        coverage, and this difference becomes acute after a loss:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Under blanket coverage,</strong> the policyholder bears the burden of
          proving both the existence and the value of every claimed item. After a total loss,
          this means reconstructing an{' '}
          <Link href="/resources/contents-inventory-guide" className="text-[#2E74B5] underline hover:text-blue-900">
            inventory from memory
          </Link>
          , gathering receipts, photographs, bank statements, and any other evidence that
          establishes what was owned and what it was worth. This process is exhausting,
          emotionally draining, and frequently results in policyholders leaving significant
          value on the table simply because they cannot recall or document what they owned.
        </li>
        <li>
          <strong>Under scheduled coverage,</strong> the existence and value of each item is
          already established on the policy. The policyholder does not need to prove what the
          item was worth &mdash; the agreed value on the schedule is the recovery amount. The
          only question is whether the item was lost or damaged. This dramatically simplifies
          the claims process for high-value items.
        </li>
      </ul>

      <CalloutBox variant="important" title="Document Everything Before a Loss">
        <p>
          Whether items are covered under blanket or scheduled coverage, every policyholder
          should maintain a comprehensive{' '}
          <Link href="/resources/contents-claims" className="text-[#2E74B5] underline hover:text-blue-900">
            home inventory
          </Link>{' '}
          with photographs, videos, receipts, and appraisals stored off-site or in the cloud.
          This is the single most important step a policyholder can take to protect their
          contents claim.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        California-Specific Considerations
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California law provides several protections that are particularly relevant to personal
        property coverage:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Senate Bill 49 (the contents without inventory rule).</strong> Under
          California Insurance Code Section 2051.5(c), as implemented through SB 49, when
          a total loss occurs to the dwelling, the carrier must offer the policyholder the
          option to receive a lump sum payment for personal property without requiring a
          room-by-room inventory. This provision, which applies to policies issued or renewed
          after January 1, 2020, was designed to reduce the documentation burden on wildfire
          survivors. However, the lump sum amount may not equal the full Coverage C limit,
          and policyholders should carefully evaluate whether the lump sum or a full inventory
          would result in a higher recovery. See the{' '}
          <Link href="/resources/sb49-contents-rule" className="text-[#2E74B5] underline hover:text-blue-900">
            SB 49 contents rule article
          </Link>{' '}
          for a detailed analysis.
        </li>
        <li>
          <strong>California Fair Claims Settlement Practices Regulations.</strong> Under 10
          CCR 2695.9, carriers must provide a written explanation of any coverage limitation,
          including sub-limits, that affects the payment of a personal property claim. If a
          carrier applies a sub-limit to reduce a claim payment, the carrier must identify
          the specific policy provision and explain how it applies.
        </li>
        <li>
          <strong>Replacement cost recovery timelines.</strong> California law provides
          specific timeframes for policyholders to replace items and collect recoverable
          depreciation. Under California Insurance Code Section 2051.5, policyholders have at
          least 180 days after the initial payment to collect the replacement cost holdback,
          and this period may be extended. Policyholders should be aware of these{' '}
          <Link href="/resources/recoverable-depreciation-deadline" className="text-[#2E74B5] underline hover:text-blue-900">
            depreciation recovery deadlines
          </Link>.
        </li>
        <li>
          <strong>Post-wildfire consumer protections.</strong> Following California&rsquo;s
          catastrophic wildfire seasons, additional regulations have been enacted to protect
          policyholders during the contents claim process, including requirements for extended
          replacement periods and prohibitions on certain claim handling practices that
          previously disadvantaged wildfire survivors.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Practical Strategies for Adequate Contents Coverage
      </h2>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Conduct a personal property audit.</strong> Walk through every room in the
          home &mdash; including the garage, attic, basement, and storage areas &mdash; and
          estimate the total replacement cost of the contents. Compare that figure to the
          Coverage C limit. If the actual value exceeds the limit, increase the Coverage C
          amount.
        </li>
        <li>
          <strong>Identify items that exceed sub-limits.</strong> Review the policy&rsquo;s
          special limits of liability and determine whether any owned items or categories
          exceed those limits. Schedule any items or categories that do.
        </li>
        <li>
          <strong>Request increased sub-limits if scheduling is not feasible.</strong> Some
          carriers offer endorsements that increase specific sub-limits without requiring
          individual scheduling. For example, a jewelry sub-limit increase from $1,500 to
          $10,000 may be available for a modest premium.
        </li>
        <li>
          <strong>Review the policy&rsquo;s valuation method.</strong> Confirm that the
          policy provides replacement cost coverage for personal property, not actual cash
          value. If the policy is ACV-only for contents, consider switching carriers or
          purchasing a replacement cost endorsement.
        </li>
        <li>
          <strong>Update the schedule annually.</strong> At each renewal, review the scheduled
          items list and update values, add new acquisitions, and remove items that have been
          sold or given away. Treat the scheduled items list as a living document.
        </li>
        <li>
          <strong>Store documentation off-site.</strong> Receipts, appraisals, photographs,
          and videos of personal property should be stored in a cloud-based service, a safety
          deposit box, or another location that will survive the same event that damages the
          home. Documentation stored only in the home is worthless after a total loss.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Frequently Asked Questions
      </h2>
      <QABlock pairs={[
        {
          question: 'What is the difference between blanket and scheduled personal property coverage?',
          answer: 'Blanket (unscheduled) Coverage C is the standard contents coverage that comes with every homeowners policy — a single aggregate limit (typically 50–75% of Coverage A) that applies to all your personal property, subject to special sub-limits for certain categories and to depreciation. Scheduled personal property is a separate endorsement (also called a personal articles floater) that lists specific items individually at agreed values. Scheduled items get agreed-value coverage, no sub-limits, broader "open perils" rather than named-perils, often no deductible, and worldwide coverage — at the cost of additional premium.',
        },
        {
          question: 'What are the standard sub-limits I should know about?',
          answer: 'Common ISO HO-3 sub-limits: $1,500 for jewelry, watches, furs, and precious stones (combined, not per item — a single engagement ring can blow through this); $2,500 for firearms and related equipment; $2,500 for silverware/goldware/pewterware; $1,500 for theft of cash and coins (including collector coins); $2,500 for business property on the residence premises ($500 away from premises); $1,000 for watercraft and equipment. These sub-limits vary by carrier but the pattern is consistent: the categories that tend to be most valuable are the ones most tightly restricted under blanket coverage. The $300,000 Coverage C limit on the declarations page is irrelevant for items subject to sub-limits.',
        },
        {
          question: 'When should I schedule an item rather than relying on blanket coverage?',
          answer: "When the item's value exceeds the applicable sub-limit (individually or in aggregate across the category), when you need broader peril coverage than named-perils blanket Coverage C provides, or when the certainty of agreed-value coverage justifies the additional premium. Typical candidates: jewelry and watches above $1,500; fine art and collectibles whose value can't be determined by simple retail replacement; musical instruments (especially vintage or professional-grade); firearms collections above $2,500; appreciated wine and spirits; professional camera and photography equipment; business-use electronics; furs and luxury items.",
        },
        {
          question: 'What are common mistakes that leave policyholders underinsured even with scheduling?',
          answer: 'Failing to update scheduled values (an engagement ring appraised at $8,000 ten years ago may be worth $14,000 today — under agreed value, you still only collect the original $8,000). Scheduling the ring but not the collection (the sub-limit still applies in aggregate to any unscheduled jewelry, no matter how much your one scheduled item is worth). Underestimating blanket Coverage C needs across the whole home (decades of accumulated belongings can easily exceed 75% of dwelling coverage). Assuming the carrier tracks your scheduled items (you must notify them of acquisitions, sales, and value changes). Not scheduling items kept off-premises.',
        },
        {
          question: "How does California's SB 49 affect contents claims?",
          answer: 'Under Insurance Code §2051.5(c), as implemented through SB 49, when a total loss occurs to the dwelling, the carrier must offer the policyholder the option to receive a lump sum payment for personal property without requiring a room-by-room inventory. The provision applies to policies issued or renewed after January 1, 2020 and was designed to reduce the documentation burden on wildfire survivors. The lump sum may not equal the full Coverage C limit, so carefully evaluate whether the lump-sum option or a full inventory would result in higher recovery for your specific loss.',
        },
        {
          question: 'Why does the documentation burden differ between blanket and scheduled coverage?',
          answer: "Under blanket coverage you bear the burden of proving both the existence and value of every claimed item — after a total loss, reconstructing an inventory from memory, gathering receipts and photographs, and any other evidence of what was owned and what it was worth. The process is exhausting and frequently leaves significant value on the table simply because people can't recall or document what they owned. Under scheduled coverage, existence and value are already established on the policy — the only question is whether the item was lost or damaged. This dramatically simplifies the claims process for high-value items and is often the strongest practical argument for scheduling.",
        },
      ]} />

      {/* ── Related Reading ── */}
      <CalloutBox variant="tip" title="Related Reading">
        <ul className="list-disc pl-4 space-y-1">
          <li>
            <Link href="/resources/special-limits-of-liability" className="text-[#2E74B5] underline hover:text-blue-900">
              Special Limits of Liability
            </Link>{' '}
            &mdash; The sub-limits that cap recovery for specific property categories
          </li>
          <li>
            <Link href="/resources/contents-inventory-guide" className="text-[#2E74B5] underline hover:text-blue-900">
              Contents Inventory Guide
            </Link>{' '}
            &mdash; How to build and maintain a complete home inventory
          </li>
          <li>
            <Link href="/resources/acv-rcv" className="text-[#2E74B5] underline hover:text-blue-900">
              ACV vs. Replacement Cost
            </Link>{' '}
            &mdash; Understanding the two valuation methods for personal property
          </li>
          <li>
            <Link href="/resources/sb49-contents-rule" className="text-[#2E74B5] underline hover:text-blue-900">
              SB 49: Contents Without Inventory
            </Link>{' '}
            &mdash; California&rsquo;s lump sum contents option after a total loss
          </li>
        </ul>
      </CalloutBox>

      {/* ── Sources & Further Reading ── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Sources &amp; Further Reading
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>United Policyholders</strong> &mdash; Provides extensive consumer-facing
          resources on personal property claims, including guidance on scheduled versus
          unscheduled coverage decisions and documentation strategies for contents claims.
          As United Policyholders has noted, &ldquo;most people have no idea how little their
          standard policy will pay for jewelry, silverware, and other high-value items until
          they file a claim and discover the sub-limits.&rdquo; Search for their contents claim
          resources at uphelp.org.
        </li>
        <li>
          <strong>International Risk Management Institute (IRMI)</strong> &mdash; Publishes
          detailed analysis of homeowners policy forms, including special limits of liability
          and personal articles floater endorsements. Their materials provide technical
          guidance on the differences between blanket and scheduled property coverage
          structures.
        </li>
        <li>
          <strong>Merlin Law Group</strong> &mdash; Has published extensively on personal
          property claims, contents valuation disputes, and the documentation challenges
          policyholders face after catastrophic losses. Search for their blog posts on
          contents claims at propertyinsurancecoveragelaw.com.
        </li>
        <li>
          <strong>California Department of Insurance</strong> &mdash; Provides consumer
          guidance on homeowners insurance coverage, including information about special
          limits, scheduled property, and post-loss rights under California law. The CDI&rsquo;s
          consumer resources are available at insurance.ca.gov.
        </li>
        <li>
          <strong>National Association of Public Insurance Adjusters (NAPIA)</strong> &mdash;
          Public adjuster trade organization that has published educational materials on
          personal property claims, including the advantages of scheduling high-value items
          and strategies for maximizing contents recovery.
        </li>
      </ul>

      {/* ── Disclaimer ── */}
      <CalloutBox variant="legal" title="Disclaimer">
        <p>
          This article is for general educational purposes only and does not constitute legal
          or insurance advice. Policy language, endorsements, sub-limits, and valuation methods
          vary by carrier and by policy form. California-specific provisions may not apply to
          policies issued outside California or to surplus lines carriers. Consult with a
          licensed professional regarding your specific coverage.
        </p>
        <p className="mt-2">
          <strong>Author:</strong> Leland Coontz III, Licensed Public Adjuster, CA License #2B53445
        </p>
      </CalloutBox>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Need Help With a Contents Claim?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          A Licensed Public Adjuster can review your personal property coverage, identify items
          that should be scheduled, and help you maximize recovery after a loss &mdash; including
          challenging improperly applied sub-limits and depreciation.
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
