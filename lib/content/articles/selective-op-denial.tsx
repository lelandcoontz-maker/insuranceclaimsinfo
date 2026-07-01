import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: "Selective O&P Denial: Pay Some Trades, Not Others",
  description:
    "Insurers apply overhead and profit to some trades and deny it on others. The all-or-nothing case law, the Xactimate mechanics, and how to fight back.",
  summary:
    'Carriers often pay overhead and profit on some trades but deny it on others, like roofing or mitigation, an all-or-nothing issue courts have rejected. If a GC is needed for the project, O&P generally applies across the work, not selectively.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational in nature and reflects the author&rsquo;s interpretation of insurance law as a Licensed Public Adjuster. It is not legal advice. Every claim involves unique facts, policy language, and circumstances. If your insurer has selectively denied overhead and profit on portions of your claim, consult with a licensed attorney who specializes in insurance coverage disputes.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        You have a fire loss. The repair requires roofing, drywall, electrical, plumbing, painting, and flooring. Your insurer acknowledges that a general contractor is needed and includes <Link href="/resources/overhead-and-profit" className="text-[#2E74B5] underline">overhead and profit</Link> in the estimate &mdash; but only on the interior trades. The roofing line items? O&amp;P unchecked. The mitigation invoice? O&amp;P denied. The contents restoration? &ldquo;O&amp;P is not warranted for contents.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This practice of selectively applying O&amp;P to some portions of a claim while denying it on others is one of the most common &mdash; and least defensible &mdash; carrier tactics in property insurance claims. The legal principle is straightforward: if a general contractor is needed, their fee applies to the entire project. No general contractor in the marketplace charges for managing drywall and paint but waives their fee for overseeing the $45,000 roof replacement happening simultaneously on the same property.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        And yet carriers do this routinely &mdash; because it saves them 20% on the single most expensive component of most property claims.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The All-or-Nothing Principle
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The legal standard for O&amp;P is a threshold question: is a general contractor &ldquo;reasonably likely&rdquo; to be needed for the repair? (See our article on the <Link href="/resources/three-trade-rule" className="text-[#2E74B5] underline">three-trade rule</Link> for the full case law analysis.) Once that threshold is met, the GC manages the <em>entire project</em>. There is no legal authority &mdash; in any jurisdiction &mdash; for applying the &ldquo;reasonably likely&rdquo; test trade-by-trade within a single claim.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Consider what a general contractor actually does. They:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Coordinate the sequence of all trades (roof must be dried in before interior can begin)</li>
        <li>Pull permits for the entire project</li>
        <li>Manage the schedule across all subcontractors</li>
        <li>Handle inspections for all work</li>
        <li>Take responsibility for the finished result</li>
        <li>Carry insurance covering the entire scope</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        A GC hired for a fire restoration does not provide a bid that says &ldquo;I&rsquo;ll charge 10/10 on your interior work but I won&rsquo;t charge anything to manage the roofer.&rdquo; That scenario does not exist in the marketplace. Their overhead &mdash; office rent, project managers, insurance, licensing, vehicles &mdash; is a fixed cost distributed across the entire job. Their profit margin applies to the entire job. O&amp;P is a project-level cost, not a trade-level cost.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When an insurer pays O&amp;P on interior trades, it has implicitly conceded that a general contractor is reasonably likely to be needed. Having made that concession, it cannot logically exclude the most expensive component of the same project from the GC&rsquo;s scope of management.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Roof Exclusion: How Carriers Split the Baby
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The most common form of selective O&amp;P denial involves roofing. A storm damages both the roof and the interior. The carrier&rsquo;s <Link href="/resources/xactimate" className="text-[#2E74B5] underline">Xactimate</Link> estimate includes O&amp;P on drywall, paint, flooring, and trim &mdash; but excludes it from the roofing line items. Since the roof is typically 60&ndash;80% of the total repair cost, this single exclusion can reduce the O&amp;P payment from $12,000 to $3,000 on a $60,000 claim.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        The Carrier&rsquo;s Argument
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Carriers typically advance one of three justifications for excluding roofing from O&amp;P:
      </p>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li><strong>&ldquo;The roofing company acts as its own GC.&rdquo;</strong> Carriers argue that a roofing contractor handles the entire roof replacement &mdash; tear-off, installation, cleanup &mdash; without needing a general contractor to coordinate. Therefore, no GC oversight is needed for the roof portion.</li>
        <li><strong>&ldquo;Roofing is one trade.&rdquo;</strong> Carriers frame roof replacement as a single-trade operation that does not require multi-trade coordination, so O&amp;P is not &ldquo;reasonably likely&rdquo; for that portion alone.</li>
        <li><strong>&ldquo;Adding GC O&amp;P to roofing would be double-dipping.&rdquo;</strong> Some carriers argue that because roofing companies already include their own overhead and profit in their bids, adding GC O&amp;P would pay overhead twice.</li>
      </ol>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Why Each Argument Fails
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Argument 1 fails</strong> because if the claim involves both roof and interior, it is one project. A homeowner with a damaged roof, damaged ceilings, damaged walls, and damaged flooring does not hire a roofing company to manage one half of the job and a separate GC to manage the other half. They hire one general contractor who manages the entire scope &mdash; including scheduling the roofer, ensuring the roof is dried in before interior work begins, and coordinating inspections. The roof cannot be isolated as though it were a separate claim.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Argument 2 fails</strong> because the &ldquo;reasonably likely&rdquo; test is a project-level threshold, not a per-trade analysis. The question is not &ldquo;does each individual trade require a GC?&rdquo; The question is &ldquo;does the repair as a whole require a GC?&rdquo; If the answer is yes &mdash; and the carrier has already conceded it is by paying O&amp;P on interior trades &mdash; then the GC&rsquo;s fee applies to everything they manage.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Argument 3 fails</strong> because it confuses two different cost categories. Verisk&rsquo;s own white paper on Xactimate pricing distinguishes between &ldquo;job personnel overhead&rdquo; (tool depreciation, vehicle costs, mobile phone &mdash; already included in unit labor rates) and &ldquo;general overhead and profit&rdquo; (office rent, business insurance, admin staff, profit &mdash; added separately as a percentage on top of the estimate). These are different line items representing different costs. A roofer&rsquo;s unit price covers the roofer&rsquo;s own business costs. GC O&amp;P covers the general contractor&rsquo;s cost of managing the roofer as part of a larger project. There is no double-dipping.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4 text-sm italic">
        Verisk/Xactware, &ldquo;Overhead and Profit: What Is and Isn&rsquo;t Included in Verisk Property Estimating.&rdquo; <a href="https://getinsights2-data.s3.amazonaws.com/WhitepaperOverheadandProfit.pdf" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Read the white paper</a>.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        How It Works in Xactimate
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        In Xactimate, O&amp;P can be applied globally (to the entire estimate) or controlled at the individual line-item level. The carrier&rsquo;s adjuster sets O&amp;P percentages in the Estimate Parameters &mdash; typically 10% overhead and 10% profit. Each line item has a toggle that determines whether it is included in the O&amp;P calculation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        To exclude roofing from O&amp;P, the adjuster selects all roofing line items and unchecks the &ldquo;include in O&amp;P&rdquo; flag &mdash; or uses Global Estimate Changes to remove O&amp;P from the roofing category in bulk. The result: the O&amp;P percentage calculates only on the remaining interior line items, dramatically reducing the total payment.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is a manual choice by the adjuster. Xactimate&rsquo;s default behavior, when O&amp;P is enabled, is to apply it to all line items. The selective exclusion of roofing requires affirmative action &mdash; the adjuster must deliberately uncheck those items. If you <Link href="/resources/esx-file-rights-xactimate" className="text-[#2E74B5] underline">obtain the ESX file</Link>, you can see exactly which line items had O&amp;P excluded.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        O&amp;P on Mitigation and Contents: The Allstate Case
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Selective O&amp;P denial is not limited to roofing. Some carriers have adopted blanket positions denying O&amp;P on water mitigation invoices and contents restoration work &mdash; positions that have no basis in their own policy language.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Allstate Pays $335,000 Over $33,000 in O&amp;P
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        In 2023, Allstate settled a bad faith lawsuit for <strong>$335,000</strong> &mdash; ten times the disputed amount &mdash; after refusing to pay $33,321.80 in overhead and profit on a contents restoration invoice. The case illustrates both the brazenness of selective O&amp;P denial and its consequences when challenged.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The facts: A fire burned part of a garage in Aliso Viejo, California, causing approximately $250,000 in total damage. The restoration contractor billed $149,574 for the contents portion of the project, which included $24,929 for overhead and profit. Allstate&rsquo;s contents adjuster wrote in the file:
      </p>
      <blockquote className="border-l-4 border-[#C9A84C] bg-amber-50 p-4 my-6 text-gray-700 text-sm leading-relaxed italic">
        &ldquo;Remove O&amp;P. O&amp;P is not warranted for contents. It doesn&rsquo;t require a high level of coordination.&rdquo;
      </blockquote>
      <p className="text-gray-700 leading-relaxed mb-4">
        Allstate&rsquo;s official position, documented in the claim file, was even more categorical:
      </p>
      <blockquote className="border-l-4 border-[#C9A84C] bg-amber-50 p-4 my-6 text-gray-700 text-sm leading-relaxed italic">
        &ldquo;Allstate does not cover OH&amp;P for mitigation or contents.&rdquo;
      </blockquote>
      <p className="text-gray-700 leading-relaxed mb-4">
        There was one problem: <strong>the Allstate policy contained no language excluding O&amp;P for mitigation or contents</strong>. The company&rsquo;s position was a blanket internal rule with no basis in the contract it sold to the policyholder.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The contractor offered to settle for just the $33,321.80 unpaid balance, waiving attorneys&rsquo; fees and interest. Allstate refused. The contractor then filed a bad faith lawsuit using an Assignment of Insurance Rights (AOR) &mdash; a document that transferred the policyholder&rsquo;s right to sue the carrier directly.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        At deposition, a <strong>retired Allstate Property Claim Manager with 35 years of tenure</strong> testified that Allstate paid O&amp;P on most fire losses he managed throughout his career, and that Allstate&rsquo;s refusal to pay O&amp;P on this claim constituted bad faith.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Allstate settled for $335,000 before trial.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4 text-sm italic">
        Edward H. Cross, &ldquo;Allstate Pays Contractor $335,000 to Settle Dispute Over $33,000 Restoration Invoice,&rdquo; C&amp;R Magazine (June 21, 2023). <a href="https://www.candrmagazine.com/allstate-pays-contractor-335000-to-settle-dispute-over-33000-restoration-invoice/" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Read on C&amp;R Magazine</a>.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        The Lesson: Made-Up Rules Have Consequences
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Allstate&rsquo;s position &mdash; &ldquo;we don&rsquo;t cover O&amp;P for mitigation or contents&rdquo; &mdash; was not a coverage interpretation. It was an invented internal rule that had no basis in the policy language. The policy promised to pay the cost to restore the insured&rsquo;s property. A restoration company performing contents pack-out, cleaning, storage, and pack-back has overhead and is entitled to profit. Nothing in the policy excluded this cost.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The $335,000 settlement on a $33,000 dispute reflects the exposure carriers face when they deny O&amp;P without contractual basis. In California, bad faith damages are not limited to the policy amount. An insurer that withholds a legitimate claim payment based on a made-up rule exposes itself to compensatory damages, emotional distress, and potentially punitive damages. A $33,000 dispute becomes a six-figure liability.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Is This a Widespread Practice?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Yes. The Allstate case is notable because it produced a reported settlement, but the underlying practice is endemic. Carriers routinely deny O&amp;P on:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Water mitigation invoices.</strong> The carrier argues that mitigation is performed by a single company (the restoration firm), so no general contractor coordination is needed.</li>
        <li><strong>Contents restoration.</strong> The carrier argues that contents work &ldquo;doesn&rsquo;t require a high level of coordination&rdquo; and is a single-trade operation.</li>
        <li><strong>Roofing.</strong> The carrier argues the roofing company &ldquo;acts as its own GC&rdquo; for the roof portion.</li>
        <li><strong>Emergency board-up and tarping.</strong> The carrier treats emergency services as &ldquo;direct vendor&rdquo; work outside the scope of GC management.</li>
        <li><strong>Demolition.</strong> The carrier isolates demolition as a single trade not requiring coordination.</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        In each case, the carrier&rsquo;s argument rests on the same false premise: that O&amp;P is a per-trade analysis rather than a project-level cost. But a restoration project is a single integrated effort. The GC coordinates the mitigation company, the roofer, the drywall crew, the painters, and the contents team. Their fee applies to the whole job &mdash; not just the trades the insurer deems &ldquo;complex enough.&rdquo;
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The O&amp;P Argument for Mitigation Specifically
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some carriers frame the mitigation O&amp;P issue as though it were about the <Link href="/resources/three-trade-rule" className="text-[#2E74B5] underline">three-trade rule</Link>: mitigation is &ldquo;one trade,&rdquo; so no GC coordination is needed. But this fundamentally misunderstands what O&amp;P represents.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A restoration company performing water mitigation has:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Overhead:</strong> Office rent, administrative staff, vehicles, fuel, equipment (dehumidifiers, air movers, moisture meters, thermal cameras), business insurance, workers&rsquo; compensation, licensing, training, certifications (IICRC WRT, AMRT, etc.), 24/7 emergency dispatch.</li>
        <li><strong>Profit:</strong> The margin the company earns for performing the work &mdash; the reason the business exists.</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        These costs are real. They are part of what the repair actually costs. A policy that promises to pay the cost to restore property to its pre-loss condition must include the restoration company&rsquo;s actual costs of doing business. Denying O&amp;P on mitigation is denying a legitimate component of the repair cost.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Attorney Edward Cross, who represented the contractor in the Allstate case and serves as the Restoration Contractor Advocate for the Restoration Industry Association (RIA), has written extensively on this issue. His position &mdash; validated by the $335,000 settlement &mdash; is that O&amp;P applies to any restoration work where it is a legitimate cost of doing business, not just to structural repair requiring multiple subcontractors.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4 text-sm italic">
        Edward H. Cross, &ldquo;Overhead &amp; Profit: The 10 and 10 Myth,&rdquo; Parts 1 &amp; 2, Restoration &amp; Remediation Magazine. <a href="https://www.randrmagonline.com/articles/89510-overhead-and-profit-the-10-and-10-myth-part-1" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Read Part 1</a>. <a href="https://www.randrmagonline.com/articles/89518-overhead-profit-the-10-10-myth-part-2" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Read Part 2</a>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What to Do About Selective O&amp;P Denial
      </h2>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li><strong>Get the <Link href="/resources/esx-file-rights-xactimate" className="text-[#2E74B5] underline">ESX file</Link>.</strong> The native Xactimate file shows exactly which line items have O&amp;P checked and which have it excluded. This is the documentary proof of selective application.</li>
        <li><strong>Point out the contradiction.</strong> If the carrier&rsquo;s estimate includes O&amp;P on any trades, it has conceded that a GC is needed. Ask the carrier to explain &mdash; in writing &mdash; how a general contractor manages drywall, paint, and flooring but somehow does not manage the roofer working on the same project at the same time.</li>
        <li><strong>Cite the Xactware white paper.</strong> Verisk&rsquo;s own documentation distinguishes &ldquo;job personnel overhead&rdquo; (in unit prices) from &ldquo;general O&amp;P&rdquo; (added to the project). The white paper does not support selective exclusion of categories.</li>
        <li><strong>Check the policy language.</strong> Does the policy say &ldquo;O&amp;P is not covered for roofing&rdquo; or &ldquo;O&amp;P is not covered for mitigation&rdquo;? Almost certainly not. If the carrier is denying O&amp;P based on a made-up rule rather than policy language, that is a coverage misrepresentation.</li>
        <li><strong>Calculate the full O&amp;P owed.</strong> Build a competing estimate with O&amp;P applied to all line items. Show the carrier the dollar difference between their selective application and the correct project-wide application.</li>
        <li><strong>Engage a professional.</strong> A <Link href="/resources/public-adjuster" className="text-[#2E74B5] underline">Public Adjuster</Link> can build the competing estimate and negotiate. If the carrier refuses to budge, an <Link href="/resources/when-to-hire-attorney" className="text-[#2E74B5] underline">attorney</Link> can evaluate bad faith exposure &mdash; as the Allstate case demonstrates, the carrier&rsquo;s liability can far exceed the disputed amount.</li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Bottom Line
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Overhead and profit is a project-level cost. If a general contractor is needed, their fee applies to the entire project &mdash; every trade, every invoice, every component. The carrier cannot cherry-pick which portions of the repair receive O&amp;P and which do not. There is no legal authority for treating O&amp;P as a per-trade determination within a single claim.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a carrier pays O&amp;P on interior work but not the roof, or pays O&amp;P on structural repairs but not mitigation, it has already conceded the threshold question. The only remaining question is how much O&amp;P is owed &mdash; and the answer, under the case law and the basic economics of construction, is: on everything.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Related Articles
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><Link href="/resources/overhead-and-profit" className="text-[#2E74B5] underline">Overhead &amp; Profit: When Your Claim Should Include O&amp;P</Link></li>
        <li><Link href="/resources/three-trade-rule" className="text-[#2E74B5] underline">The Three-Trade Rule: Why Your Insurance Company Owes O&amp;P</Link></li>
        <li><Link href="/resources/op-depreciation-california" className="text-[#2E74B5] underline">Can California Insurers Depreciate O&amp;P? No &mdash; Here&rsquo;s Why</Link></li>
        <li><Link href="/resources/xactimate-not-the-law" className="text-[#2E74B5] underline">Xactimate Is Not the Law</Link></li>
        <li><Link href="/resources/esx-file-rights-xactimate" className="text-[#2E74B5] underline">ESX File Rights: Getting the Native Xactimate File</Link></li>
        <li><Link href="/resources/how-to-challenge-xactimate-estimate" className="text-[#2E74B5] underline">How to Challenge a Xactimate Estimate</Link></li>
      </ul>

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
