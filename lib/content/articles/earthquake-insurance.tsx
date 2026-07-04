import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: "California Earthquake Insurance: CEA and Private Carriers",
  description:
    "Earthquake insurance in California: CEA coverage and limits, private alternatives from Palomar and GeoVera, deductibles, and the efficient proximate cause rule.",
  summary:
    'California earthquake coverage comes from the CEA or private carriers like Palomar and GeoVera, each with high deductibles and different claims handling. The efficient proximate cause doctrine can affect related losses, so understand your structure before a quake.',
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
        Most California homeowners know that their standard homeowner policy does not cover earthquake damage. What most do not know is that they have a real choice in how they buy earthquake coverage &mdash; and that choice can dramatically affect what happens when they file a claim.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The California Earthquake Authority (CEA) is the most widely recognized option, but it is not the only one. Private carriers like Palomar, GeoVera, and others offer standalone earthquake policies with different coverage terms, lower deductibles, and &mdash; critically &mdash; a different claims handling experience. This article covers both options, explains the significant limitations of CEA policies, and walks through the legal doctrines that affect earthquake-related claims in California.
      </p>

      <CalloutBox variant="warning" title="Earthquake Damage Is Excluded from Standard Homeowner Policies">
        <p>
          Your HO-3, HO-5, or <Link href="/resources/california-fair-plan" className="text-[#2E74B5] hover:underline">FAIR Plan</Link> dwelling fire policy does <strong>not</strong> cover earthquake damage. Earth movement is a standard exclusion. If you want coverage for structural damage caused by an earthquake, you need a separate earthquake policy &mdash; either through the CEA or a private carrier.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The California Earthquake Authority (CEA): How It Works
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The CEA is a publicly managed, privately funded, not-for-profit organization created by the California legislature in 1996. It is not a state agency and receives no taxpayer money. Instead, it is funded entirely by policyholder premiums, reinsurance, and revenue bonds, and maintains substantial claim-paying capacity that is updated annually in CEA&rsquo;s public financial reports. Its five-member Governing Board includes the Governor, the Insurance Commissioner, and the State Treasurer as voting members.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The CEA does not sell policies directly. Instead, it works through roughly two dozen &ldquo;participating insurers&rdquo; &mdash; companies like State Farm, Allstate, CSAA, Farmers, and others &mdash; that sell and service CEA earthquake policies alongside their own homeowner products. The <Link href="/resources/california-fair-plan" className="text-[#2E74B5] hover:underline">California FAIR Plan</Link> is also a CEA participating insurer, meaning FAIR Plan policyholders can purchase CEA earthquake coverage as a companion policy.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        CEA Coverage: Three Parts
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A CEA homeowner policy has three coverage components:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Dwelling:</strong> Covers structural damage to the home and attached structures (such as an attached garage). The limit matches the dwelling limit on your homeowner policy. This is the only coverage included by default &mdash; the other two must be selected and added.
        </li>
        <li>
          <strong>Personal Property:</strong> Covers damage to personal belongings like furniture, electronics, and clothing. CEA&rsquo;s current personal property options are <strong>$5,000 or $25,000</strong> (maximum). Historically CEA offered higher personal property limits; the program has been significantly tightened in recent years and the current $25,000 cap is materially lower than many policyholders expect. This coverage has its own separate deductible.
        </li>
        <li>
          <strong>Loss of Use:</strong> Covers additional living expenses if you cannot live in your home during repairs. The maximum is $100,000, and this coverage has <strong>no deductible</strong>.
        </li>
      </ul>

      <CalloutBox variant="important" title="CEA Personal Property Limits Are Capped at $25,000">
        <p>
          CEA&rsquo;s current homeowners, condo, and renters policies all offer personal property coverage at only two options: <strong>$5,000 or $25,000</strong>. Historically CEA offered higher personal property limits, but the current $25,000 cap is materially lower than many policyholders assume. If you have a CEA policy, check your <Link href="/resources/declarations-page" className="text-[#2E74B5] hover:underline">declarations page</Link> to confirm your current contents limit &mdash; it may be far lower than you expect.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        CEA Deductibles: Much Higher Than You Think
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        CEA deductibles are a percentage of the dwelling coverage limit &mdash; not a flat dollar amount like the $1,000 or $2,500 deductible on a standard homeowner policy. The standard available deductible options are <strong>5%, 10%, 15%, 20%, and 25%</strong>. Higher-value homes and older homes on raised foundations that have not been seismically retrofitted may be restricted to higher deductible options under the participating insurer&rsquo;s underwriting rules &mdash; confirm the specific options your insurer makes available for your home.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        To put the percentage deductible in perspective: on a home insured for $800,000, a 15% deductible means you pay the first <strong>$120,000</strong> out of pocket before CEA pays a dime. On a $1.2 million home, a 15% deductible is <strong>$180,000</strong>. Many homeowners who buy CEA coverage do not fully appreciate the size of this deductible until they file a claim.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        What CEA Does NOT Cover
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        CEA policies have significant exclusions that go beyond what most homeowners expect:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Swimming pools</strong> &mdash; not covered at all</li>
        <li><strong>Masonry fences and block walls</strong> &mdash; unless integral to the dwelling structure</li>
        <li><strong>Exterior masonry veneer</strong> &mdash; not covered unless you add a specific endorsement</li>
        <li><strong>Detached structures</strong> &mdash; separate garages, guesthouses, sheds</li>
        <li><strong>Landscaping</strong> &mdash; trees, shrubs, lawns</li>
        <li><strong>Land stabilization</strong> &mdash; if the ground under your home shifts, CEA does not pay to stabilize it</li>
        <li><strong>Walkways, driveways, decks, and patios</strong> &mdash; only covered if they are necessary for regular ingress and egress to the dwelling</li>
        <li><strong>Fire following earthquake</strong> &mdash; this is covered by your homeowner policy, not the earthquake policy</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How CEA Claims Are Handled
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The CEA does not handle claims itself. Instead, each participating insurer is responsible for investigating and adjusting CEA claims on behalf of the CEA, following the CEA&rsquo;s own Claim Manual. Claim representatives must complete CEA-specific training on earthquake damage evaluation and the California Fair Claims Settlement Practices Act before they are authorized to handle CEA claims.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In practice, this means your claims experience depends heavily on which participating insurer sold you the policy. If you bought your CEA policy through a major carrier like State Farm or CSAA, their adjusting staff handles the earthquake claim. If you bought your CEA policy through the <Link href="/resources/california-fair-plan" className="text-[#2E74B5] hover:underline">California FAIR Plan</Link>, then the FAIR Plan handles the earthquake claim administration on CEA&rsquo;s behalf.
      </p>

      <CalloutBox variant="tip" title="A Consideration About Claims Handling">
        <p>
          The FAIR Plan exists as a last-resort insurer, and its claims handling culture reflects that role. Private carriers that compete for your business may have more resources, better-trained adjusters, and stronger incentives to provide a reasonable claims experience. This is not a blanket statement &mdash; outcomes vary &mdash; but it is worth considering when you choose where to buy your earthquake coverage.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Private Earthquake Insurance: The Alternative Most People Don&rsquo;t Know About
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The CEA dominates the California earthquake insurance market, but several private carriers offer standalone earthquake policies that are worth serious consideration. These are not CEA policies &mdash; they are independent products issued by private insurance companies and regulated under standard California insurance law.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Major Private Earthquake Carriers
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Palomar Specialty:</strong> Offers an &agrave; la carte product where you select exact coverage amounts for other structures, contents, loss of use, and loss assessments. Palomar covers pools, patios, fences, and retaining walls under the Other Structures limit with no sub-limit. Available limits go up to $15 million total insured value. Accepts a wider range of construction types, including unreinforced masonry (subject to underwriting review).
        </li>
        <li>
          <strong>GeoVera:</strong> One of the oldest standalone earthquake insurers in California. Rated A (Excellent) by AM Best. Offers deductibles as low as 2.5% and a comprehensive single-limit product. Covers other structures and offers flexible contents and loss-of-use limits.
        </li>
        <li>
          <strong>Arrowhead General Insurance Agency:</strong> Markets earthquake coverage through programs with Palomar and other carriers. Offers standalone policies not tied to your property insurer.
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        How Private Policies Differ from CEA
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The differences are substantial and favor the policyholder in several important ways:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Lower deductibles:</strong> Private carriers may offer deductibles as low as 2.5%, compared to CEA&rsquo;s minimum of 5% (or 15% for high-value and pre-1980 homes). On an $800,000 home, the difference between a 2.5% deductible ($20,000) and a 15% deductible ($120,000) is $100,000 in out-of-pocket exposure.
        </li>
        <li>
          <strong>Broader coverage:</strong> Private policies may cover swimming pools, detached structures, masonry fences, retaining walls, and landscaping &mdash; items CEA excludes entirely.
        </li>
        <li>
          <strong>Higher contents limits:</strong> CEA caps personal property at $25,000. Private carriers can offer significantly higher limits.
        </li>
        <li>
          <strong>More flexible loss-of-use coverage:</strong> CEA caps loss of use at $100,000. Private policies may offer higher limits and broader definitions of covered expenses.
        </li>
        <li>
          <strong>Standard regulatory protections:</strong> Private earthquake policies are regulated under the California Insurance Code and the <Link href="/resources/california-fair-claims" className="text-[#2E74B5] hover:underline">Fair Claims Settlement Practices Regulations</Link> (10 CCR &sect; 2695 et seq.), just like any other insurance product. CEA policies are also subject to fair claims practices, but the CEA operates under its own statutory framework (Insurance Code &sect; 10089 et seq.) with its own claims manual and procedures.
        </li>
      </ul>

      <CalloutBox variant="tip" title="Get Quotes from Both CEA and Private Carriers">
        <p>
          Most insurance agents default to offering only the CEA policy. Ask your agent specifically about private earthquake insurance options from carriers like Palomar and GeoVera. Compare the deductibles, coverage breadth, contents limits, and loss-of-use limits side by side. In many cases, a private policy offers meaningfully better protection at a competitive premium.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Claims Handling: CEA vs. Private Carriers
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is where the rubber meets the road. When you file a CEA claim, the participating insurer that sold you the policy handles the investigation and adjustment according to the CEA Claim Manual. The insurer acts as the CEA&rsquo;s agent &mdash; not as your advocate. CEA has specific procedures its participating insurers must follow, including mandatory training requirements and claim documentation standards.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When you file a claim on a private earthquake policy, the carrier handles it the same way it handles any other property insurance claim &mdash; under standard California insurance law and the Fair Claims Settlement Practices Regulations. There is no separate claims manual. The same regulatory framework that governs your homeowner claim governs your private earthquake claim.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For policyholders whose CEA coverage was purchased through the <Link href="/resources/california-fair-plan" className="text-[#2E74B5] hover:underline">California FAIR Plan</Link>, the FAIR Plan handles the earthquake claim administration. The FAIR Plan is a last-resort insurer &mdash; it exists for properties that cannot obtain coverage in the private market. Its claims handling infrastructure and culture are built around that limited role. A private earthquake carrier that competes for your business in the open market may provide a different level of service, responsiveness, and adjuster quality. This is a consideration worth weighing when you choose your earthquake coverage.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Earthquake, Fire, and the Efficient Proximate Cause Doctrine
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        One of the most important things to understand about earthquake damage is how it intersects with your homeowner policy when a fire follows the earthquake. This is where the <Link href="/resources/efficient-proximate-cause-doctrine" className="text-[#2E74B5] hover:underline">efficient proximate cause doctrine</Link> becomes critical.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here is the scenario: an earthquake strikes, ruptures a gas line in your home, and the escaping gas ignites. The resulting fire destroys your home. You have a standard homeowner policy (which covers fire) but no earthquake policy (which would cover earthquake damage). Is the loss covered?
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under California law, the answer depends on which peril is the <em>efficient proximate cause</em> &mdash; the predominant cause that set the chain of events in motion. California Insurance Code &sect;&sect; 530 and 532 establish that when a covered peril (fire) is the proximate cause of the loss, the insurer is liable regardless of whether an excluded peril (earthquake/earth movement) contributed to the chain. If the fire is what destroyed the home, fire is the cause that matters for coverage purposes.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This means that even without earthquake insurance, fire damage caused by an earthquake-triggered gas line break may be covered by your standard homeowner policy. The key is which peril directly caused the destruction. The earthquake broke the pipe, but the fire burned the house.
      </p>

      <CalloutBox variant="important" title="Anti-Concurrent Causation Clauses and California Law">
        <p>
          Some policies contain <Link href="/resources/anti-concurrent-causation" className="text-[#2E74B5] hover:underline">anti-concurrent causation (ACC) clauses</Link> that attempt to exclude coverage whenever an excluded peril contributes to a loss &ldquo;in any sequence.&rdquo; In California, these clauses are generally unenforceable when they conflict with the efficient proximate cause doctrine. However, the analysis is fact-specific and depends on the precise causal chain. If you are in this situation, consult with a licensed Public Adjuster or an insurance coverage attorney.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Who Needs Earthquake Insurance?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California sits on some of the most active fault lines in North America. While certain areas face higher risk than others, earthquakes can cause damage far from the epicenter. Consider the following:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Homeowners with limited savings:</strong> If you could not afford to rebuild or make major structural repairs out of pocket, earthquake insurance provides a financial backstop &mdash; even with the high deductible.
        </li>
        <li>
          <strong>Owners of older homes:</strong> Pre-1980 homes on raised foundations are particularly vulnerable to earthquake damage. CEA promotes seismic retrofitting through the Earthquake Brace + Bolt program for pre-1980 raised-foundation homes, and some participating insurers may restrict deductible options for unretrofitted older homes &mdash; check with your insurer for the specific underwriting rules.
        </li>
        <li>
          <strong>Homes with masonry, chimneys, or hillside construction:</strong> Brick, stone veneer, unreinforced chimneys, and hillside homes are disproportionately affected by seismic shaking.
        </li>
        <li>
          <strong>Homeowners near active faults:</strong> Proximity to the San Andreas, Hayward, Newport-Inglewood, and other major faults increases both the probability and intensity of damage.
        </li>
        <li>
          <strong>Homeowners with significant equity:</strong> If your home is worth substantially more than your mortgage, you have more to lose.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Common Misconceptions About Earthquake Insurance
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>&ldquo;My homeowner policy covers earthquake damage.&rdquo;</strong> It does not. Earth movement is a standard exclusion in every HO-3 and HO-5 policy.
        </li>
        <li>
          <strong>&ldquo;The CEA is a government insurance program.&rdquo;</strong> It is not. The CEA is a publicly managed, privately funded organization. It receives no taxpayer money and is not backed by the state of California.
        </li>
        <li>
          <strong>&ldquo;The CEA is my only option.&rdquo;</strong> It is not. Private carriers offer standalone earthquake policies that may provide broader coverage and lower deductibles.
        </li>
        <li>
          <strong>&ldquo;Earthquake insurance covers everything.&rdquo;</strong> CEA policies exclude pools, detached structures, masonry fences, landscaping, and land stabilization. Personal property coverage is capped at $25,000. Private policies may cover more, but every policy has exclusions.
        </li>
        <li>
          <strong>&ldquo;The deductible works like my homeowner deductible.&rdquo;</strong> It does not. Earthquake deductibles are a percentage of the dwelling limit &mdash; typically 5% to 25% &mdash; resulting in deductibles that can be $50,000, $100,000, or more.
        </li>
        <li>
          <strong>&ldquo;If an earthquake causes a fire, I need earthquake insurance for the fire damage.&rdquo;</strong> Not necessarily. Under California&rsquo;s <Link href="/resources/efficient-proximate-cause-doctrine" className="text-[#2E74B5] hover:underline">efficient proximate cause doctrine</Link>, fire damage &mdash; even fire caused by an earthquake &mdash; may be covered by your standard homeowner policy.
        </li>
        <li>
          <strong>&ldquo;FEMA will cover earthquake damage.&rdquo;</strong> FEMA disaster assistance, when available, typically provides loans (not grants) and covers only a fraction of actual losses. It is not a substitute for insurance.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Evaluate Earthquake Coverage
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When shopping for earthquake insurance, compare policies on these factors:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Deductible percentage:</strong> What is the lowest deductible available for your home? Calculate the dollar amount. Can you afford it?
        </li>
        <li>
          <strong>Personal property limits:</strong> CEA caps at $25,000. Is that enough to replace your belongings? Private carriers may offer higher limits.
        </li>
        <li>
          <strong>Loss-of-use limits:</strong> If your home is uninhabitable for months, will the coverage pay enough to house your family? CEA caps at $100,000.
        </li>
        <li>
          <strong>Other structures:</strong> Do you have a detached garage, guesthouse, pool, or retaining walls? CEA does not cover most of these. Private policies may.
        </li>
        <li>
          <strong>Masonry coverage:</strong> Does your home have brick veneer, stone, or a masonry chimney? CEA requires a separate endorsement for exterior masonry veneer.
        </li>
        <li>
          <strong>Claims handling:</strong> Who will actually handle your claim? A major carrier, the FAIR Plan, or a private earthquake insurer?
        </li>
        <li>
          <strong>Financial stability:</strong> Check the carrier&rsquo;s AM Best rating. CEA publishes annual financial statements and claim-paying capacity figures on its website. GeoVera is rated A (Excellent) by AM Best.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Subrogation and Earthquake Claims
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If earthquake damage to your property was caused or worsened by a third party &mdash; for example, a utility company whose infrastructure failure caused additional damage, or a contractor whose work left your foundation vulnerable &mdash; your insurer may have <Link href="/resources/subrogation" className="text-[#2E74B5] hover:underline">subrogation</Link> rights against that party. You may also have an independent right to pursue the third party directly for damage your earthquake policy did not cover, including the deductible amount.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Bottom Line
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Earthquake insurance in California is expensive and comes with high deductibles &mdash; there is no way around that. But for homeowners who cannot self-insure hundreds of thousands of dollars in potential structural damage, it provides essential financial protection. The most important thing you can do is understand your options:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Get quotes from both the CEA (through your homeowner insurer) <em>and</em> private carriers like Palomar and GeoVera.</li>
        <li>Compare deductibles, coverage breadth, personal property limits, and loss-of-use limits.</li>
        <li>Understand the <Link href="/resources/coinsurance-penalty" className="text-[#2E74B5] hover:underline">coinsurance</Link> implications of your dwelling limit and make sure you are not underinsured.</li>
        <li>Know that fire following an earthquake may be covered by your homeowner policy under the <Link href="/resources/efficient-proximate-cause-doctrine" className="text-[#2E74B5] hover:underline">efficient proximate cause doctrine</Link>.</li>
        <li>Read your <Link href="/resources/declarations-page" className="text-[#2E74B5] hover:underline">declarations page</Link> carefully &mdash; confirm your deductible percentage, contents limit, and loss-of-use limit.</li>
      </ul>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">Need Help With an Earthquake Insurance Claim?</h3>
        <p className="text-gray-600 text-sm mb-4">If you have suffered earthquake damage and need help understanding your coverage, documenting your loss, or disputing an underpayment, a licensed Public Adjuster can review your claim at no upfront cost.</p>
        <Link href="/contact" className="inline-block bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-6 py-3 rounded-lg transition-colors">Request a Free Claim Review &rarr;</Link>
      </div>

      <CalloutBox variant="legal" title="Important Notice">
        <p>This article is provided for general educational purposes only and does not constitute legal advice. Every earthquake insurance policy has unique terms, conditions, and exclusions. Consult your policy documents, your insurance agent, and if necessary a licensed Public Adjuster or insurance coverage attorney for advice specific to your situation.</p>
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
