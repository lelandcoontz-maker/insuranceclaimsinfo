import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Underinsured After a Wildfire: What to Do When Your Policy Isn\'t Enough',
  description:
    'Why so many California homeowners are underinsured after a wildfire — and strategies to maximize recovery when your policy limits fall short of actual rebuild costs.',
  summary:
    'Many California homeowners discover after a wildfire that their limits fall short of soaring rebuild costs. Maximize recovery by claiming extended replacement cost, code upgrades, ALE, and every applicable coverage, and consider a claim against the broker who under-insured you.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational in nature and reflects the author&rsquo;s practical
          experience handling underinsured wildfire claims as a Licensed California Public
          Adjuster. It is not legal advice. Claims against agents or brokers for negligence in
          setting coverage limits, allegations against insurers for bad-faith underinsurance,
          and analysis of the available statutory protections after a declared disaster are
          all legal questions that depend on the specific facts of the claim and the actual
          policy language. For legal questions, consult a licensed California attorney
          experienced in insurance coverage disputes.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        One of the most devastating discoveries after a wildfire is learning that your insurance
        is not enough to rebuild. Your home is gone, and the insurer tells you the policy limit
        is $500,000 — but contractors are quoting $800,000 to rebuild. This gap, sometimes hundreds
        of thousands of dollars, is the underinsurance crisis. Insurance claim underpayment is a
        well-documented problem — congressional testimony, regulatory investigations, and
        policyholder advocacy groups have consistently shown that insurers routinely reduce field
        adjusters&apos; damage estimates through desk reviews, sometimes cutting payments
        dramatically. After the 2025 Los Angeles wildfires, according to a January 2026 survey of
        2,443 adults in fire-impacted Los Angeles communities, commissioned by the Department of
        Angels, nearly 80% of victims reported serious insurance claim issues. This is not an
        isolated problem — it is systemic.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why Are So Many Homeowners Underinsured?
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Insurers&apos; automated valuation tools underestimate rebuild costs.</strong>{' '}
          Most insurers set dwelling coverage limits using automated tools like CoreLogic, Marshall
          &amp; Swift, or Xactware&apos;s 360Value. These tools use national databases and
          algorithms that frequently underestimate actual California construction costs —
          particularly in high-demand post-disaster markets where labor and materials are scarce.
        </li>
        <li>
          <strong>Construction costs have surged.</strong> According to NAHB data, the average
          cost of constructing a single-family home increased roughly 37% between 2019 and 2024,
          with construction cost inflation reaching record highs. In disaster-affected areas, the
          increases can be substantially higher due to demand surge and supply chain disruptions.
          Your policy limit, set years ago, has not kept pace.
        </li>
        <li>
          <strong>Inflation guard is not enough.</strong> Many policies include an &ldquo;
          inflation guard&rdquo; that automatically increases Coverage A by 2–4% annually. But
          actual construction cost increases have far outpaced this adjustment.
        </li>
        <li>
          <strong>Demand surge after a disaster.</strong> After a major wildfire, thousands of homes
          need to be rebuilt simultaneously. Contractor availability plummets and prices spike.
          After a major disaster, demand surge — the spike in labor and material costs caused by
          overwhelming demand — can significantly increase rebuild costs. Industry catastrophe
          models typically apply a 15–20% demand surge factor, though actual cost increases have
          reached 30–50% for specific materials and labor categories in past disasters. This is
          not reflected in your pre-loss policy limit.
        </li>
        <li>
          <strong>Policyholders choose lower limits to save on premiums.</strong> With California
          premiums rising dramatically, some homeowners deliberately accepted lower coverage limits
          to keep their insurance affordable. This is an understandable but dangerous trade-off.
        </li>
        <li>
          <strong>Code upgrade costs.</strong> When you rebuild, you must comply with current
          building codes — which may be significantly more stringent than when your home was
          originally built. These{' '}
          <Link href="/resources/ordinance-law" className="text-[#2E74B5] hover:underline">ordinance or law</Link>{' '}
          costs can add $50,000–$200,000+ to a rebuild but are covered under a separate,
          often inadequate, sublimit.
        </li>
      </ul>

      <CalloutBox variant="warning" title="The Insurer Set Your Limit — Not You">
        <p>
          In many cases, the insurer recommended or set the Coverage A limit based on their own
          valuation tool. If that tool underestimated rebuild costs, there is an argument that the
          insurer bears responsibility for the gap. This does not automatically mean you&apos;ll
          recover more than your policy limit, but it is an important factor in potential bad
          faith or negligence claims against the insurer or agent.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Your Policy Provisions That Can Help
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Extended Replacement Cost</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many California homeowner policies include an extended (or &ldquo;enhanced&rdquo;)
        replacement cost endorsement that pays an additional 25&ndash;50% above your Coverage A
        limit. Check your{' '}
        <Link href="/resources/declarations-page" className="text-[#2E74B5] hover:underline">declarations page</Link>.
        If your Coverage A limit is $500,000 and you have a 50% extended replacement cost
        endorsement, your effective dwelling coverage is $750,000. However:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>You typically must <strong>actually rebuild</strong> to access the extended amount &mdash; you cannot take a cash settlement and pocket the extended coverage</li>
        <li>Under California Insurance Code &sect; 2051.5(c), after a total loss, you may use replacement-cost coverage to rebuild on the same lot, build on a different lot, or purchase an already-built home elsewhere &mdash; the insurer cannot reduce your payment because you relocate. Older policy language requiring same-premises rebuilding does not control over &sect; 2051.5(c).</li>
        <li>Under California Insurance Code &sect; 2051.5(b)(1) (as amended by AB 1800), after a state-of-emergency declaration you have <strong>at least 36 months</strong> from the date of your first ACV payment to collect the full replacement cost. Additional six-month extensions are available for good cause. (The pre-2019 minimum of 24 months has been superseded; older policy language and some adjusters still reference the obsolete figure.)</li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Ordinance or Law Coverage</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is a separate coverage (not part of your dwelling limit) that pays for the additional
        cost of complying with current building codes. It typically covers:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>The increased cost of construction to meet current codes</li>
        <li>Demolition of undamaged portions that do not meet code</li>
        <li>The value of the undamaged portion that must be demolished</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        O&amp;L limits are often 10–25% of Coverage A. If your O&amp;L is 10% on a $500,000
        policy, that is only $50,000 for code upgrades — which may not be enough. Review your{' '}
        <Link href="/resources/ordinance-law" className="text-[#2E74B5] hover:underline">O&amp;L coverage guide</Link>{' '}
        for details.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Debris Removal</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        <Link href="/resources/debris-removal" className="text-[#2E74B5] hover:underline">Debris removal</Link>{' '}
        is a separate coverage that pays for clearing the lot before rebuilding. After a wildfire,
        debris removal can cost $50,000–$200,000+ due to hazardous material (asbestos, lead, ash)
        requirements. If debris removal costs exhaust the sublimit, additional coverage may be
        available under your dwelling limit.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Actually Determine Your Coverage Limit
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The most reliable way to set your dwelling coverage limit is not to rely on the insurer&rsquo;s
        estimating tool. It is to ask a qualified general contractor what it would cost to rebuild your
        home from the ground up.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Get a Contractor&rsquo;s Estimate</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Find a reputable, licensed general contractor &mdash; ideally one who has experience with
        insurance-related rebuilds &mdash; and ask a straightforward question: what would it cost to
        rebuild this house from the ground up? Make sure the estimate is comprehensive. A good contractor
        will price the structure itself &mdash; but may not automatically include every category of cost.
        When you review the estimate, confirm it includes:
      </p>

      <p className="text-gray-700 leading-relaxed mb-2"><strong>Soft costs</strong> that square footage calculators miss:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Building permits and plan check fees</strong> &mdash; permit fees in California can
          run from several thousand to tens of thousands of dollars depending on the jurisdiction.
        </li>
        <li>
          <strong>Architectural and engineering plans</strong> &mdash; a total loss rebuild requires
          full architectural drawings and structural engineering. These fees typically run 8% to 15% of
          construction costs.
        </li>
        <li>
          <strong>Demolition and site preparation</strong> &mdash; the cost of scraping a lot to remove
          the debris from a damaged or destroyed structure, including potential asbestos abatement, lead
          remediation, and contaminated soil disposal.
        </li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-2"><strong>Site improvements</strong> your contractor may not automatically include:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Plants, trees, and shrubs</li>
        <li>Walkways, patios, driveways, and retaining walls</li>
        <li>Landscape lighting (path lights, Malibu lighting, security lighting)</li>
        <li>Sprinkler and irrigation systems</li>
        <li>Fencing and gates</li>
        <li>Pergolas, outdoor kitchens, fire pits, and other exterior features</li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        The contractor&rsquo;s number, with all of these categories included, is your starting point for
        how much dwelling coverage you need. Not your home&rsquo;s market value. Not the square footage
        calculator. Not the number your insurer suggested when you bought the policy five years ago.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Understand the Land vs. Structure Distinction
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your property sells for $1,000,000, it is very likely the land is worth about $500,000 and
        the structures are worth about $500,000 (very rough numbers). Your dwelling coverage limit
        should be based on the <strong>cost to rebuild the structures</strong> &mdash; not the market
        value of the property. The land does not burn. You are only insuring what sits on it.
      </p>

      <CalloutBox variant="warning" title="Don't Trust Square Footage Calculators">
        <p>
          Automated square footage calculators do not factor in demolition costs, asbestos abatement,
          architectural fees, engineering plans, building permits, landscaping, walkways, lighting,
          sprinklers, fences, or any of the other costs that are part of every real-world rebuild. You
          can easily come up short by $100,000 or more using a calculator that only considers the cost
          per square foot of the structure itself.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Strategies to Maximize Recovery When Underinsured
      </h2>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Get an independent rebuild estimate.</strong> Do not accept the insurer&apos;s
          estimate of rebuild cost. Hire a licensed contractor or professional estimator who
          understands current local costs. This is your baseline for negotiation.
        </li>
        <li>
          <strong>Claim every applicable coverage separately.</strong> Ensure that debris removal,
          O&amp;L, other structures, landscaping, and{' '}
          <Link href="/resources/ale-frv" className="text-[#2E74B5] hover:underline">ALE</Link>{' '}
          are all claimed and paid from their own sublimits — not from Coverage A. Every dollar
          that comes from a sublimit rather than Coverage A preserves your dwelling limit for
          actual construction.
        </li>
        <li>
          <strong>Maximize your contents claim.</strong> Use our free{' '}
          <Link href="/inventory" className="text-[#2E74B5] hover:underline">Personal Property Inventory Tool</Link>{' '}
          to document every item you owned. Be thorough — many policyholders significantly
          underutilize their contents coverage by not inventorying completely.
        </li>
        <li>
          <strong>Invoke the extended replacement cost endorsement.</strong> If you have one,
          commit to rebuilding and trigger the additional coverage. The math often works out
          heavily in your favor.
        </li>
        <li>
          <strong>Challenge the insurer&apos;s valuation.</strong> If the insurer is undervaluing
          the rebuild cost within your policy limits, fight the{' '}
          <Link href="/resources/scope-of-loss" className="text-[#2E74B5] hover:underline">scope</Link> and{' '}
          <Link href="/resources/xactimate" className="text-[#2E74B5] hover:underline">Xactimate pricing</Link>.
          Even within an underinsured claim, the insurer must pay your full limit — they cannot
          lowball you below that.
        </li>
        <li>
          <strong>Investigate agent or insurer liability.</strong> If the insurer or agent set your
          Coverage A limit based on their valuation tool and that tool was materially wrong, consult
          an attorney about a potential negligence claim. This is separate from your insurance claim
          and can potentially recover the gap.
        </li>
        <li>
          <strong>Explore government assistance.</strong> FEMA grants (up to $43,600 as of the 2025 fiscal year, adjusted annually),
          SBA disaster loans (low-interest), and state programs may help fill the gap. These are not
          substitutes for insurance but can supplement it.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Rebuilding vs. Cashing Out When Underinsured
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you are significantly underinsured, you face a difficult choice: rebuild with a
        large out-of-pocket cost, or take a cash settlement and use it toward a different
        property. Key considerations:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Rebuilding triggers extended replacement cost.</strong> If you have an extended
          replacement cost endorsement, rebuilding triggers the additional 25–50%. Cashing out
          forfeits this.
        </li>
        <li>
          <strong>Cash settlement is limited to ACV.</strong> If you do not rebuild, the insurer
          pays the actual cash value (depreciated value) of your home — not the replacement cost.
          This is a significant reduction.
        </li>
        <li>
          <strong>Contents holdback requires replacement.</strong> Under a replacement cost policy,
          you receive the depreciation holdback on contents only when you actually replace items.
          If you do not replace, you receive only ACV.
        </li>
        <li>
          <strong>Tax implications differ.</strong> Insurance proceeds for rebuilding are generally
          not taxable. Cash settlements above your cost basis may have tax implications. Consult a
          tax professional.
        </li>
      </ul>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Underinsured After a Loss?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          A Public Adjuster can help you maximize every available coverage and ensure no dollar
          is left on the table — even when policy limits are tight.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Request a Free Claim Review →
        </Link>
      </div>

      <hr className="my-8 border-gray-300" />
      <p className="text-sm text-gray-500 italic">
        This article is for informational purposes only and does not constitute legal advice. Insurance
        policies and applicable law vary by state and by policy form. Consult with a licensed
        professional regarding your specific situation.
      </p>
      <p className="text-sm text-gray-500 mt-4 italic">
        Written by Leland Coontz III, Licensed Public Adjuster, CA License #2B53445.
      </p>
    </>
  )
}
