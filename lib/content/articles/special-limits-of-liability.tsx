import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Special Limits of Liability: The Silent Traps in Every Homeowner Policy',
  description:
    'Your homeowner policy has hidden dollar caps on jewelry, firearms, coins, collectibles, and more. Learn about the sub-limits that silently reduce your claim — and how scheduling overcomes them.',
  summary:
    'Your homeowner policy quietly caps payment for categories like jewelry, firearms, coins, and collectibles, often far below their value. Scheduling these items overcomes the sub-limits, so review the special limits before you have a loss.',
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
        Somewhere in your homeowner&rsquo;s policy &mdash; buried in the personal property section that almost nobody reads &mdash; is a list of dollar caps that could reduce your claim by tens of thousands of dollars. They are called <strong>Special Limits of Liability</strong>, and they apply regardless of how much Coverage C (personal property) you carry. You could have $150,000 in contents coverage and still be limited to $200 for your entire coin collection. These are not obscure technicalities. They are policy conditions that affect real claims every single day, and most policyholders never discover them until it is too late.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Understanding Sub-Limits of Liability
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The ISO HO-3 &mdash; the most widely used homeowner policy form in the United States &mdash; contains a section under Coverage C titled &ldquo;Special Limits of Liability.&rdquo; These are internal caps that apply to specific categories of personal property on a per-occurrence basis, regardless of the total Coverage C limit shown on your declarations page.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is an important distinction: <strong>sub-limits are conditions within the insuring agreement, not exclusions.</strong> The property is covered. It is not excluded. But the amount the insurer will pay for that category is capped at the sub-limit amount, no matter what the items are actually worth. The insurer does not need to deny coverage to invoke a sub-limit &mdash; the limit is built into the coverage grant itself.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Consider what this means in practice: you carry $150,000 in Coverage C, believing your personal property is well-protected. You suffer a theft, and your coin collection &mdash; appraised at $12,000 &mdash; is taken. You file a claim. The insurer pays you $200. Not because coins are excluded, but because $200 is the special limit for money, coins, and bank notes. Your $150,000 Coverage C limit is irrelevant for that category.
      </p>

      <CalloutBox variant="important" title="$150,000 in Coverage C — $200 for Your Coins">
        <p>
          Special Limits of Liability are not exclusions. Your coins, jewelry, firearms, and collectibles are <em>covered</em> under your policy &mdash; but the amount you can recover is capped at shockingly low figures that have not kept pace with inflation or market values. A $200 limit on coins was written when gold was $35 an ounce.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Common Sub-Limits Under the ISO HO-3 Form
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The following sub-limits are standard under the unendorsed ISO HO-3 form. Your specific policy may use different amounts &mdash; always check your own policy language &mdash; but these are the baseline figures that most policies either adopt directly or modify only slightly:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-gray-200 rounded-lg overflow-hidden mb-6">
        <div className="bg-[#1F3964] text-white font-bold px-4 py-3 md:col-span-2 grid grid-cols-1 md:grid-cols-2">
          <span>Property Category</span>
          <span className="hidden md:block text-right">Sub-Limit (Per Occurrence)</span>
        </div>
        <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
          <span className="font-semibold text-gray-800">Money, bank notes, coins, bullion</span>
        </div>
        <div className="px-4 py-3 bg-gray-50 border-b border-gray-200 text-right font-bold text-red-700">
          $200
        </div>
        <div className="px-4 py-3 border-b border-gray-200">
          <span className="font-semibold text-gray-800">Securities, manuscripts, stamps, tickets</span>
        </div>
        <div className="px-4 py-3 border-b border-gray-200 text-right font-bold text-red-700">
          $1,500
        </div>
        <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
          <span className="font-semibold text-gray-800">Watercraft and trailers (including furnishings &amp; equipment)</span>
        </div>
        <div className="px-4 py-3 bg-gray-50 border-b border-gray-200 text-right font-bold text-red-700">
          $1,500
        </div>
        <div className="px-4 py-3 border-b border-gray-200">
          <span className="font-semibold text-gray-800">Jewelry, watches, furs, precious/semi-precious stones (theft)</span>
        </div>
        <div className="px-4 py-3 border-b border-gray-200 text-right font-bold text-red-700">
          $1,500
        </div>
        <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
          <span className="font-semibold text-gray-800">Firearms and related equipment (theft)</span>
        </div>
        <div className="px-4 py-3 bg-gray-50 border-b border-gray-200 text-right font-bold text-red-700">
          $2,500
        </div>
        <div className="px-4 py-3 border-b border-gray-200">
          <span className="font-semibold text-gray-800">Silverware, goldware, platinumware</span>
        </div>
        <div className="px-4 py-3 border-b border-gray-200 text-right font-bold text-red-700">
          $2,500
        </div>
        <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
          <span className="font-semibold text-gray-800">Business property on the insured premises</span>
        </div>
        <div className="px-4 py-3 bg-gray-50 border-b border-gray-200 text-right font-bold text-red-700">
          $2,500
        </div>
        <div className="px-4 py-3 border-b border-gray-200">
          <span className="font-semibold text-gray-800">Business property away from the insured premises</span>
        </div>
        <div className="px-4 py-3 border-b border-gray-200 text-right font-bold text-red-700">
          $500
        </div>
        <div className="px-4 py-3 bg-gray-50">
          <span className="font-semibold text-gray-800">Electronic data processing equipment (away from premises)</span>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right font-bold text-red-700">
          $1,500
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">
        Notice what these limits have in common: they are aggregate per-occurrence caps for the <em>entire category</em>, not per-item limits. The $1,500 theft limit for jewelry applies to all jewelry, watches, and furs combined. If a burglar takes your engagement ring, your watch, and a fur coat, the total recovery for all three is $1,500 &mdash; not $1,500 each.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Category-Specific Discussion
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Furs: The Asymmetry Between Theft and Fire
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The $1,500 sub-limit on furs applies specifically to <strong>theft losses</strong>. This creates an asymmetry that catches many policyholders off guard. If your fur coat is stolen, the sub-limit caps your recovery at $1,500 regardless of the coat&rsquo;s value. But if the same fur coat is destroyed in a house fire, the theft sub-limit does not apply &mdash; the loss is covered up to your full Coverage C limit (subject to depreciation and other policy conditions).
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This distinction matters because the cause of loss determines which sub-limit, if any, applies. Policyholders who own expensive furs &mdash; and a quality mink or sable coat can easily run $10,000 to $50,000 &mdash; should understand that their exposure is primarily on the theft side. If theft is a realistic concern, scheduling is essential. If the primary risk is fire, the standard Coverage C may provide adequate protection, though scheduling still offers broader coverage and eliminates the deductible.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Coins, Gold, and Bullion: The $200 Trap
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The $200 sub-limit for money, bank notes, coins, and bullion is arguably the most punishing sub-limit in the entire policy. It was established when gold traded at a fraction of today&rsquo;s price, and it has not been meaningfully updated since. Consider what $200 buys you in today&rsquo;s market:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>A single Morgan silver dollar in high-grade condition can be worth $5,000 or more. Key-date Morgans in MS-65 or higher grade routinely sell for $20,000 to $100,000+.</li>
        <li>Gold bullion trades above $3,000 per ounce. A single one-ounce American Gold Eagle exceeds the sub-limit by more than fifteen times.</li>
        <li>A modest collection of pre-1964 U.S. silver coins &mdash; the kind many families inherit &mdash; can easily total $5,000 to $15,000 based on silver content alone, before any numismatic premium.</li>
        <li>Rare coins at auction regularly sell for six and seven figures. The 1794 Flowing Hair dollar sold for over $10 million.</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The $200 limit does not care what your coins are worth. It does not distinguish between a jar of pocket change and a carefully curated numismatic portfolio. The entire category &mdash; money, coins, bullion, bank notes &mdash; is capped at $200 per occurrence. For anyone who holds physical precious metals, collects coins, or even keeps meaningful cash at home, this sub-limit is a financial trap waiting to be sprung.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Firearms: $2,500 for a Serious Collection
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The $2,500 theft sub-limit on firearms sounds more reasonable than the $200 coin limit until you consider what firearms actually cost. A single custom bolt-action rifle can run $5,000 to $15,000. Quality over/under shotguns from makers like Beretta, Browning, or Caesar Guerini range from $2,000 to $20,000. Collectible firearms &mdash; military surplus, antique Colts, pre-war Winchesters &mdash; can be worth $10,000 to $100,000 or more individually.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A serious firearm collection can easily represent $50,000 to $500,000 in value. The $2,500 sub-limit makes the standard homeowner policy almost meaningless for theft protection of firearms. And theft is the primary risk: firearms are high-value, portable, and specifically targeted by burglars. The combination of high theft risk and a low theft sub-limit makes firearms one of the most important categories to schedule.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Like furs, the $2,500 limit applies to <strong>theft</strong> specifically. Firearms destroyed in a fire are covered up to the full Coverage C limit. But theft &mdash; the scenario most gun owners worry about &mdash; triggers the sub-limit.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Collectibles: Baseball Cards, Pokemon Cards, and Sports Memorabilia
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Collectibles occupy an uncomfortable space in homeowner policies. They are personal property, so they are covered as such. But depending on their nature, they may fall under one or more sub-limits &mdash; or they may not have a specific sub-limit but still face inadequate coverage due to depreciation and valuation challenges.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The collectibles market has exploded in value, and the numbers are staggering:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Baseball cards:</strong> The 1952 Topps Mickey Mantle #311 sold for $12.6 million. A PSA 10 Mike Trout 2011 Update sold for $3.93 million. Even &ldquo;common&rdquo; vintage cards in high grade can be worth $500 to $5,000.</li>
        <li><strong>Pokemon cards:</strong> A PSA 10 1st Edition Base Set Holographic Charizard has sold for over $300,000. Sealed 1st Edition booster boxes have topped $400,000 at auction. Even modern chase cards can be worth $500 to $5,000.</li>
        <li><strong>Sports memorabilia:</strong> Game-used jerseys, autographed items, and championship memorabilia routinely sell for $10,000 to $1,000,000+. A Babe Ruth game-used jersey sold for $5.64 million.</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most collectibles do not have a dedicated sub-limit under the standard HO-3 (unless they are classified as &ldquo;stamps&rdquo; under the $1,500 securities/manuscripts/stamps sub-limit). However, without scheduling, collectibles face serious coverage problems: the insurer will likely dispute the claimed value, apply depreciation in ways that make no sense for appreciating assets, and argue about condition and authenticity after the items are destroyed. Without a pre-loss appraisal and a scheduled amount, recovery for collectibles typically ranges from $500 to $2,000 &mdash; a fraction of their market value &mdash; because the policyholder cannot prove what the items were worth.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Overcoming Sub-Limits: Scheduling and Floaters
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Sub-limits are not a dead end. They are a problem with a solution, and the solution has been available for decades: <strong>scheduling your high-value items</strong> or purchasing a <strong>Personal Articles Floater</strong>. Either approach removes the sub-limit entirely and replaces it with agreed-upon coverage at the item&rsquo;s actual value.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Scheduled Personal Property Endorsement (HO 04 61)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Scheduled Personal Property Endorsement (ISO form HO 04 61) is an endorsement added to your existing homeowner policy. When you schedule an item, you are individually listing it on the policy with its appraised value. Scheduled items receive significantly broader protection than unscheduled personal property:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Open perils coverage:</strong> Scheduled items are covered for all risks of direct physical loss unless specifically excluded. This is broader than the named-perils coverage that applies to unscheduled personal property under many policies.</li>
        <li><strong>Mysterious disappearance:</strong> If the item simply vanishes &mdash; you cannot find it and do not know what happened &mdash; a scheduled item is covered. Unscheduled items are not.</li>
        <li><strong>No deductible:</strong> The homeowner policy deductible does not apply to scheduled items. If your $8,000 scheduled ring is stolen, you receive $8,000 &mdash; not $8,000 minus a $2,500 deductible.</li>
        <li><strong>Replacement cost based on scheduled amount:</strong> The scheduled value establishes the coverage amount. There is no depreciation argument, no dispute about what the item was worth. The value was agreed upon when the item was scheduled.</li>
        <li><strong>Sub-limit bypass:</strong> Scheduled items are not subject to the Special Limits of Liability. The entire point of scheduling is to replace the sub-limit with an adequate coverage amount.</li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Personal Articles Floater (PAF)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A Personal Articles Floater is a standalone policy (not an endorsement to your homeowner policy) that provides the broadest available protection for high-value personal property. A PAF offers everything the scheduled endorsement provides, plus several additional advantages:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Worldwide coverage:</strong> The item is covered anywhere in the world, not just at the insured premises.</li>
        <li><strong>May cover earthquake and flood:</strong> Some floaters cover perils that are excluded under the homeowner policy, including earthquake and flood damage to the scheduled items.</li>
        <li><strong>No impact on homeowner loss history:</strong> A claim on a PAF is filed against the floater policy, not the homeowner policy. This means a jewelry theft claim does not appear as a loss on your homeowner&rsquo;s CLUE report, potentially protecting your homeowner premium and insurability. See our guide on the{' '}
          <Link href="/resources/clue-database" className="text-[#2E74B5] hover:underline">CLUE database</Link>{' '}
          for more on how claims history follows you.
        </li>
        <li><strong>Standalone coverage:</strong> If your homeowner policy is cancelled or non-renewed, your PAF continues independently.</li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Appraisals: The Foundation of Scheduling
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Whether you choose the HO 04 61 endorsement or a standalone PAF, both require professional appraisals for the items being scheduled. The appraisal establishes the scheduled value and becomes the basis for any future claim. Several critical points about appraisals:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Use a qualified appraiser:</strong> For jewelry, use a Graduate Gemologist (GG) or Fellow of the Gemmological Association (FGA). For firearms, use an appraiser certified by the American Society of Appraisers or a recognized firearms authority. For collectibles, use an appraiser with specific expertise in that category.</li>
        <li><strong>Update appraisals every 3&ndash;5 years:</strong> Values change. Gold prices, gem prices, numismatic markets, and collectible markets fluctuate significantly. An appraisal from 2015 does not reflect 2026 values. If your items have appreciated significantly and your scheduled value has not kept pace, you are effectively self-insuring the difference.</li>
        <li><strong>Photograph everything:</strong> Pair appraisals with detailed photographs showing the item from multiple angles, including any serial numbers, hallmarks, maker&rsquo;s marks, or condition details. Store photographs and appraisals in a location that would survive the loss of your home &mdash; cloud storage, a safe deposit box, or with your insurance agent.</li>
      </ul>

      <CalloutBox variant="tip" title="Scheduling Is Inexpensive Compared to the Alternative">
        <p>
          The premium for scheduling personal property is surprisingly affordable. Jewelry scheduling typically costs $1 to $2 per $100 of value annually. A $10,000 engagement ring might cost $100 to $200 per year to schedule &mdash; a fraction of the ring&rsquo;s value, and far less than the $8,500 gap between the $1,500 sub-limit and the ring&rsquo;s actual value. Firearms, coins, and collectibles are similarly affordable to schedule.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Wildfires and Sub-Limits: A Special Concern
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Sub-limits are problematic on any claim, but they become devastating in a total loss &mdash; and no peril creates more total losses than wildfire. When a home burns to the ground, <strong>every sub-limit in the policy activates simultaneously</strong>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Consider a typical household in a total loss fire:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Jewelry collection worth $25,000 &mdash; sub-limit does not apply to fire (theft only), but valuation disputes will still arise without scheduling</li>
        <li>Coin collection worth $8,000 &mdash; recovery capped at $200</li>
        <li>Firearms collection worth $15,000 &mdash; sub-limit does not apply to fire (theft only), but again, proving value post-loss is extremely difficult</li>
        <li>Silverware worth $6,000 &mdash; recovery capped at $2,500</li>
        <li>Home office equipment worth $5,000 &mdash; recovery capped at $2,500</li>
        <li>Stamps and collectible currency worth $4,000 &mdash; recovery capped at $1,500</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        While some sub-limits (jewelry, firearms) apply only to theft, the valuation problem persists for all categories in a total loss. When every item you own is destroyed, proving what you had and what it was worth becomes the central challenge of the claim. Scheduled items have pre-loss documentation and agreed-upon values. Unscheduled items require the policyholder to reconstruct values from memory, receipts (which were also destroyed), and whatever other evidence can be assembled. The difference in recovery can be tens of thousands of dollars. For more on this challenge, see our guide on{' '}
        <Link href="/resources/contents-claims" className="text-[#2E74B5] hover:underline">personal property and contents claims</Link>.
      </p>

      <CalloutBox variant="warning" title="Wildfire Total Loss: All Sub-Limits Activate at Once">
        <p>
          In a total loss, the aggregate impact of sub-limits can reduce a contents claim by $10,000 to $50,000 or more. And even for categories where the sub-limit technically does not apply (because fire, not theft, caused the loss), the absence of pre-loss documentation creates an equally devastating valuation gap. Scheduling before a loss is the single most cost-effective mitigation strategy available to any homeowner. See our{' '}
          <Link href="/resources/specialty-items" className="text-[#2E74B5] hover:underline font-semibold">specialty items guide</Link>{' '}
          and our{' '}
          <Link href="/resources/acv-rcv" className="text-[#2E74B5] hover:underline font-semibold">ACV vs. RCV guide</Link>{' '}
          for more on how valuation works in a contents claim.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Conclusion
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Special Limits of Liability are among the least understood and most consequential provisions in a homeowner policy. They operate silently, reducing coverage for specific categories of property to amounts that were inadequate when they were written and are absurd today. The $200 limit on coins predates gold at $3,000 per ounce. The $1,500 limit on jewelry predates the average engagement ring costing $6,000. The $2,500 limit on firearms predates the modern firearms market where a single quality rifle can cost $5,000.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The solution is straightforward: identify the sub-limits in your policy, inventory the items that fall into each category, obtain professional appraisals for anything of significant value, and schedule those items &mdash; either through the HO 04 61 endorsement or a standalone Personal Articles Floater. The annual cost of scheduling is a fraction of the coverage gap it closes.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Do this before a loss, not after. After a loss, the sub-limits are locked in. Before a loss, they can be eliminated for pennies on the dollar.
      </p>

      <CalloutBox variant="legal" title="Disclaimer">
        <p>
          This article provides general educational information about homeowner insurance policy provisions and is not legal advice, financial advice, or a substitute for reading your own policy. Sub-limit amounts vary by insurer, state, and policy edition. Always review your specific policy language and consult with a licensed insurance professional about your coverage needs.
        </p>
        <p className="mt-2">
          <strong>Author:</strong> Leland Coontz III, Licensed Public Adjuster, CA License #2B53445
        </p>
      </CalloutBox>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Worried About Sub-Limits on Your Claim?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          A Public Adjuster can review your policy&rsquo;s special limits, identify gaps in your coverage, and ensure your claim recovers every dollar the policy provides &mdash; including proper valuation of high-value items.
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
