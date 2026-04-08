import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'
import { LeadCaptureForm } from '@/components/content/LeadCaptureForm'

export const meta = {
  title: 'Insurance Claims on Properties in Foreclosure: Full Credit Bids and What They Mean for Your Money',
  description:
    'What happens to your insurance claim when your property is in foreclosure? How full credit bids can extinguish the lender\'s right to your insurance proceeds — and how underbids preserve it. California law explained.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your property is in foreclosure and you also have an insurance claim &mdash; whether
        from a fire, water damage, or any other covered loss &mdash; you are dealing with one of
        the most legally consequential intersections in property insurance law. The way your
        lender handles the foreclosure auction can determine whether you keep the insurance
        money, whether the lender takes it, or whether the lender accidentally gives up all
        rights to it.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        At the center of this issue is a legal doctrine called the <strong>full credit
        bid</strong>. Understanding how it works could mean the difference between losing your
        home <em>and</em> your insurance proceeds, or losing your home but keeping the money.
      </p>

      {/* ───────── Foreclosure Basics ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Non-Judicial vs. Judicial Foreclosure
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Before we get to insurance claims, you need to understand which type of foreclosure
        you&apos;re dealing with, because the consequences are very different.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Non-Judicial Foreclosure (California and Most Western States)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        California is a <strong>non-judicial foreclosure</strong> state. Under Civil Code
        &sect;2924 et seq., the lender forecloses through a trustee &mdash; no court
        involvement is required. The process follows three main steps:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Notice of Default (NOD):</strong> The trustee records a Notice of Default at
          the county recorder&apos;s office, specifying the nature and amount of the default.
        </li>
        <li>
          <strong>Three-month reinstatement period:</strong> The borrower has at least three
          months to cure the default before the property can be sold.
        </li>
        <li>
          <strong>Notice of Trustee&apos;s Sale and auction:</strong> After the reinstatement
          period, the trustee publishes a Notice of Sale and conducts a public auction. The
          property goes to the highest bidder.
        </li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        The critical protection for California borrowers is the <strong>anti-deficiency
        rule</strong>. Under Code of Civil Procedure &sect;580d, after a non-judicial
        foreclosure, the lender <strong>cannot pursue the borrower for any deficiency</strong>.
        If the property sells for less than what is owed, the borrower walks away. They lose the
        house, but they do not owe the difference. This is fundamentally different from what
        happens in judicial foreclosure states.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Judicial Foreclosure (Many Eastern and Midwestern States)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        In judicial foreclosure states, the lender must file a lawsuit and obtain a court order
        to foreclose. The critical difference: in most judicial foreclosure states, the lender
        <strong> can pursue a deficiency judgment</strong> against the borrower. If the property
        sells at auction for $200,000 but the borrower owes $300,000, the lender can pursue the
        borrower for the remaining $100,000. The borrower loses their home <em>and</em> still
        owes money.
      </p>

      <CalloutBox variant="important" title="California's Anti-Deficiency Protection">
        <p>
          Under CCP &sect;580d, after a non-judicial foreclosure in California, the lender
          cannot pursue a deficiency judgment. Under CCP &sect;580b, this protection extends
          even further for purchase money loans &mdash; loans used to buy the property that
          serves as the security. You can lose your home, but you cannot be pursued for the
          difference between what the property sold for and what you owed.
        </p>
      </CalloutBox>

      {/* ───────── The Full Credit Bid ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        What Is a Full Credit Bid?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        At a trustee&apos;s sale, the foreclosing lender typically &ldquo;bids&rdquo; on the
        property. But instead of tendering cash, the lender credits the outstanding debt against
        the purchase price. This is called a <strong>credit bid</strong>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A <strong>full credit bid</strong> occurs when the lender bids the{' '}
        <strong>full amount of the outstanding debt</strong> &mdash; principal, accrued interest,
        fees, and foreclosure costs. When this happens, the debt is extinguished entirely. The
        lender is deemed to have been paid in full. The California Supreme Court established this
        principle in <em>Cornelison v. Kornbluth</em> (1975) 15 Cal.3d 590, and it was
        significantly expanded in <em>Alliance Mortgage Co. v. Rothwell</em> (1995) 10 Cal.4th
        1226.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Why would a lender bid the full amount? In most cases, it&apos;s automatic. Lenders and
        their trustees routinely submit full credit bids as a default practice &mdash; the logic
        being that they want to acquire the property for the full value of the debt so they can
        resell it. What many lenders fail to consider is the devastating consequence this has
        when the property is damaged and there is an active insurance claim.
      </p>

      {/* ───────── Insurance Proceeds ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        How a Full Credit Bid Kills the Lender&apos;s Right to Insurance Proceeds
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the most important concept in this article. When a lender makes a full credit
        bid, the law treats the lender as having been made whole. The debt is extinguished. And
        if the debt is extinguished, the lender&apos;s <strong>insurable interest is also
        extinguished</strong>. The lender has no further claim to insurance proceeds for
        pre-foreclosure property damage.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The logic is straightforward: a lender&apos;s interest in insurance proceeds exists only
        to protect its security interest &mdash; the debt. If a full credit bid wipes out the
        debt, there is nothing left to insure. Any payment of insurance proceeds on top of the
        debt satisfaction would be an impermissible double recovery.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        As the California Supreme Court stated in <em>Alliance Mortgage Co. v. Rothwell</em>,
        the lender &ldquo;is not entitled to insurance proceeds payable for prepurchase damage
        to the property&hellip; because the lender&apos;s only interest in the property, the
        repayment of its debt, has been satisfied, and any further payment would result in a
        double recovery.&rdquo;
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The $300,000 Example
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Consider a homeowner who owes $300,000 on their mortgage. The property suffers $100,000
        in fire damage while the borrower is in default. Here is how the full credit bid changes
        everything:
      </p>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-[#1F3964] text-white">
              <th className="px-4 py-3 text-left font-semibold">Scenario</th>
              <th className="px-4 py-3 text-left font-semibold">Lender&apos;s Bid</th>
              <th className="px-4 py-3 text-left font-semibold">Effect on Insurance Proceeds</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr className="border-t border-gray-200">
              <td className="px-4 py-3 font-semibold">Full credit bid</td>
              <td className="px-4 py-3">$300,000 (full debt)</td>
              <td className="px-4 py-3">
                Debt is extinguished. Lender has <strong>no right</strong> to the $100,000
                insurance proceeds. The insured (former homeowner) may be entitled to the
                insurance money for the building damage.
              </td>
            </tr>
            <tr className="border-t border-gray-200 bg-gray-50">
              <td className="px-4 py-3 font-semibold">Underbid</td>
              <td className="px-4 py-3">$200,000</td>
              <td className="px-4 py-3">
                $100,000 deficiency remains. Lender may have a right to claim the insurance
                proceeds up to the deficiency amount to satisfy its remaining security interest.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-gray-700 leading-relaxed mb-4">
        The difference is enormous. In the first scenario, the homeowner loses the house but may
        keep the insurance money. In the second scenario, the lender preserves its claim to the
        insurance proceeds. This is why the amount of the credit bid at a trustee&apos;s sale is
        one of the most consequential decisions in any foreclosure involving a damaged property.
      </p>

      <CalloutBox variant="warning" title="The Lender's Insurable Interest Is Extinguished">
        <p>
          A full credit bid is not just an auction strategy &mdash; it is a legal admission that
          the property, in its current condition (including any damage), is worth at least the
          full amount of the outstanding debt. The lender cannot then turn around and say
          &ldquo;but the property was damaged and we need the insurance money too.&rdquo; That
          would be double recovery, and California courts will not allow it.
        </p>
      </CalloutBox>

      {/* ───────── What Courts Have Said ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        What the Courts Have Said
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The full credit bid doctrine as it applies to insurance proceeds has been litigated
        extensively in California courts. Here are the key decisions:
      </p>

      <div className="space-y-6 mb-8">
        <div className="border-l-4 border-[#1F3964] pl-4">
          <p className="font-bold text-[#1F3964] mb-1">
            Cornelison v. Kornbluth (1975) 15 Cal.3d 590
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">
            The foundational case. The California Supreme Court established the full credit bid
            rule: if the lender bids the full amount of the debt at foreclosure, it cannot
            recover damages for waste, impairment of security, or any other loss based on the
            property&apos;s condition. If the bid is less than the full amount, the lender can
            recover up to the deficiency.
          </p>
        </div>

        <div className="border-l-4 border-[#1F3964] pl-4">
          <p className="font-bold text-[#1F3964] mb-1">
            Alliance Mortgage Co. v. Rothwell (1995) 10 Cal.4th 1226
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">
            The California Supreme Court&apos;s most comprehensive treatment of the full credit
            bid doctrine. The court held that a full credit bid bars the lender from recovering
            insurance proceeds, condemnation awards, rent proceeds, and waste damages &mdash;
            because the lender&apos;s only interest (repayment of the debt) has been satisfied.
            The court carved out one narrow exception: the full credit bid rule does not bar fraud
            claims against third-party non-borrowers who fraudulently induced the loan.
          </p>
        </div>

        <div className="border-l-4 border-[#1F3964] pl-4">
          <p className="font-bold text-[#1F3964] mb-1">
            Najah v. Scottsdale Insurance Co. (2014) 230 Cal.App.4th 125
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">
            The most directly on-point modern case. A lender who held both the first and second
            deeds of trust foreclosed on the second with a full credit bid. The court held this
            extinguished the lender&apos;s right to fire insurance proceeds under the policy
            &mdash; even though the lender was named as a loss payee with a standard mortgage
            clause. The full credit bid established the property&apos;s value equaled the
            outstanding debt, leaving no insurable interest.
          </p>
        </div>

        <div className="border-l-4 border-[#1F3964] pl-4">
          <p className="font-bold text-[#1F3964] mb-1">
            Armsey v. Channel Associates (1986) 184 Cal.App.3d 833
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">
            The flip side. A seller who took back a note on a commercial building foreclosed
            after a fire destroyed the property. The seller <strong>underbid</strong> &mdash;
            bidding $456,525 against a debt of over $600,000. Because the credit bid was less
            than the full debt, the court held the seller was entitled to the fire insurance
            proceeds. This case demonstrates that an underbid preserves insurance rights.
          </p>
        </div>

        <div className="border-l-4 border-[#1F3964] pl-4">
          <p className="font-bold text-[#1F3964] mb-1">
            Track Mortgage Group v. Crusader Insurance Co. (2002) 98 Cal.App.4th 857
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">
            An important limitation. Track held a first trust deed on a Los Angeles apartment
            building with approximately $528,000 in debt. Track underbid at $472,500, creating a
            deficiency of about $55,877. Track then spent over $877,000 repairing damage covered
            by the insurance policy. The court limited Track&apos;s insurance recovery to the
            deficiency amount &mdash; $55,877 &mdash; not the full repair cost. Even with an
            underbid, recovery is capped at the deficiency.
          </p>
        </div>
      </div>

      {/* ───────── Inadvertent Full Credit Bids ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        When Lenders Make Full Credit Bids by Mistake
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here is the part that should alarm every mortgage lender and interest every borrower with
        a pending insurance claim: lenders routinely make full credit bids as an automatic
        default practice &mdash; without considering whether the property is damaged, whether
        there is an active insurance claim, or what the consequences will be. The bid is
        submitted by a trustee or servicer following standard procedure, and no one stops to
        think about the insurance implications until it is too late.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In <em>Bank of America v. Quackenbush</em> (1997) 56 Cal.App.4th 1167, Bank of America
        held 81 loans on properties that had been grossly overvalued due to originator fraud.
        When the loans defaulted, Bank of America <strong>inadvertently made full credit bids on
        every single property</strong>. The bank then sought to recover under financial guarantee
        bonds (functionally equivalent to insurance) &mdash; and was denied on all 81 claims.
        The court held that the full credit bids conclusively established value and extinguished
        the bank&apos;s claims. Bank of America sustained approximately <strong>$12 million in
        unrecoverable losses</strong> because of what was essentially an automated, unthinking
        process.
      </p>

      <CalloutBox variant="legal" title="A Real-World Cautionary Tale">
        <p className="mb-2">
          In one case, a lender made a full credit bid at a trustee&apos;s sale on a property
          with significant fire damage and an active insurance claim. When the consequences
          became apparent, the lender asked the court for permission to redo the sale. The court
          allowed it. The lender went back to auction &mdash; and inadvertently made a full
          credit bid <em>again</em>. The court gave a second do-over. At the third auction, the
          same thing happened. The court finally said: no more chances. The lender permanently
          lost any right to the insurance proceeds.
        </p>
        <p>
          This is what happens when full credit bids are an institutional reflex rather than a
          deliberate decision. The bid is irrevocable, and courts have limited patience for
          lenders who cannot stop making the same mistake.
        </p>
      </CalloutBox>

      {/* ───────── What This Means for Homeowners ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        What This Means for Homeowners in Foreclosure
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you are facing foreclosure and your property has been damaged, the full credit bid
        doctrine may work in your favor. Here is what you need to understand:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        If the Lender Makes a Full Credit Bid
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          The debt is extinguished. You owe nothing further on the mortgage.
        </li>
        <li>
          The lender&apos;s insurable interest is extinguished. The lender has no right to
          the insurance proceeds for pre-foreclosure property damage.
        </li>
        <li>
          The insurance proceeds for the building damage may belong to you as the insured under
          the policy, depending on the specific facts and policy language.
        </li>
        <li>
          You lose the property, but you may keep the insurance money.
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        If the Lender Underbids
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          A deficiency remains &mdash; the difference between the bid and the outstanding debt.
        </li>
        <li>
          The lender may assert a claim to the insurance proceeds up to the amount of the
          deficiency.
        </li>
        <li>
          However, in a non-judicial foreclosure in California, CCP &sect;580d generally
          prohibits the lender from pursuing a deficiency judgment against you personally.
        </li>
        <li>
          Per <em>Track Mortgage Group v. Crusader Insurance</em>, the lender&apos;s insurance
          recovery is limited to the deficiency amount, even if the actual damage exceeds it.
        </li>
      </ul>

      {/* ───────── Creative Solutions ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        When a Full Credit Bid Creates an Opportunity
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Sometimes a full credit bid creates a situation that is bad for the lender but
        potentially navigable for the homeowner. Consider what happens when a lender makes a full
        credit bid on a fire-damaged property: the lender now owns a severely damaged home with
        no right to the insurance proceeds. Meanwhile, the former homeowner &mdash; who may still
        be living in the property &mdash; has an insurance claim that could fund the repairs.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In one real-world situation, this is exactly what happened. The lender made a full credit
        bid and foreclosed on a fire-damaged home. The lender now owned a damaged property worth
        far less than the debt it had just extinguished, with no right to the insurance proceeds.
        The former homeowner still lived there and desperately wanted to repair and keep the
        home.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A public adjuster representing the homeowner recognized the opportunity. He contacted the
        lender and explained the situation: the lender was stuck with a damaged property and no
        insurance money to fix it, while the homeowner had an insurance claim and the motivation
        to rebuild. The public adjuster suggested that it might be in the lender&apos;s interest
        to work with the borrower &mdash; to cooperate in getting the property repaired using
        the insurance proceeds, which would result in the lender having better collateral rather
        than being stuck with a fire-damaged asset worth a fraction of the debt.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The result was a cooperative resolution: the borrower was able to stay in the home and
        use the insurance proceeds to rebuild, while the lender ended up with a fully repaired
        property as collateral &mdash; far better than owning a damaged house with no money to
        fix it.
      </p>

      <CalloutBox variant="tip" title="The Public Adjuster's Role">
        <p>
          A public adjuster cannot provide legal advice about foreclosure or negotiate the terms
          of a loan workout. But a public adjuster who understands the full credit bid doctrine
          can identify when the lender has inadvertently extinguished its insurable interest,
          advise the insured on the insurance implications, and &mdash; where appropriate &mdash;
          help facilitate communication between the parties so that the insurance claim can be
          resolved in a way that benefits everyone.
        </p>
      </CalloutBox>

      {/* ───────── Mortgage Holds ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        When You&apos;re Behind on Your Mortgage but Not in Foreclosure
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Even if your property is not yet in foreclosure, being behind on your mortgage can
        create significant complications for your insurance claim. When the insurance company
        issues a dwelling claim payment, the check is typically made payable to both the
        homeowner and the mortgage company. The lender must endorse the check before the
        homeowner can access the funds.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you are current on your mortgage, most lenders will endorse the check and release
        funds in stages as repairs are completed. But if you are behind on your payments, the
        mortgage company may{' '}
        <strong>hold the insurance proceeds and refuse to release them</strong> until the
        delinquency is cured &mdash; or worse, apply the insurance proceeds directly to the
        outstanding loan balance rather than allowing them to be used for repairs.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This creates a vicious cycle: the homeowner cannot repair the property because the
        lender is holding the money, and the lender&apos;s collateral continues to deteriorate
        because the property is not being repaired. For a detailed guide on how mortgage company
        holds work and how to navigate them, see our article on{' '}
        <Link href="/resources/mortgage-company-holds" className="text-[#2E74B5] hover:underline">
          mortgage company holds on insurance proceeds
        </Link>.
      </p>

      <CalloutBox variant="warning" title="Don't Let the Lender Apply Your Claim to the Loan Balance">
        <p>
          Some lenders will attempt to apply insurance proceeds to the outstanding mortgage
          balance rather than releasing them for repairs. This may or may not be permissible
          depending on your deed of trust language and applicable law. If your lender is
          attempting this, you need professional help immediately &mdash; from a public adjuster
          for the insurance claim side and potentially an attorney for the lending side. The
          insurance proceeds are intended to restore the property, not to pay down your loan.
        </p>
      </CalloutBox>

      {/* ───────── Practical Guidance ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Practical Guidance: What to Do If You&apos;re in This Situation
      </h2>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>File and pursue your insurance claim immediately.</strong> Do not assume that
          because you are in foreclosure, you have no right to file a claim. You are still the
          insured under the policy until the foreclosure is completed. Document everything
          thoroughly.
        </li>
        <li>
          <strong>Monitor the trustee&apos;s sale.</strong> Pay attention to what the lender bids
          at the auction. If the lender makes a full credit bid, that fact may be critically
          important to your insurance claim. Obtain a copy of the trustee&apos;s deed upon sale,
          which will reflect the bid amount.
        </li>
        <li>
          <strong>Understand your policy&apos;s loss payee clause.</strong> Most homeowner&apos;s
          policies include a standard mortgage clause that protects the lender&apos;s interest.
          But if the lender&apos;s insurable interest is extinguished by a full credit bid, the
          mortgage clause may no longer operate in the lender&apos;s favor.
        </li>
        <li>
          <strong>Get professional help early.</strong> This is not a situation to navigate
          alone. A{' '}
          <Link href="/resources/public-adjuster" className="text-[#2E74B5] hover:underline">
            public adjuster
          </Link>{' '}
          can handle the insurance claim, and an{' '}
          <Link href="/resources/when-to-hire-attorney" className="text-[#2E74B5] hover:underline">
            attorney
          </Link>{' '}
          can advise on the foreclosure and lending side. The intersection of these two areas
          requires expertise in both.
        </li>
        <li>
          <strong>Document the lender&apos;s bid amount.</strong> If the lender makes a full
          credit bid and then attempts to claim the insurance proceeds, you have a strong legal
          argument that the lender has been made whole and has no right to the insurance money.
          The case law is clear.
        </li>
        <li>
          <strong>Do not assume you have no options.</strong> Even if you are losing your home,
          you may still have rights to the insurance proceeds. And even if the lender initially
          holds the proceeds, the situation may be navigable with the right professional guidance.
        </li>
      </ol>

      {/* ───────── Key Takeaways ───────── */}
      <CalloutBox variant="important" title="Key Takeaways">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            In California, non-judicial foreclosure means the lender cannot pursue a deficiency
            judgment against you (CCP &sect;580d).
          </li>
          <li>
            A full credit bid extinguishes the debt <strong>and</strong> the lender&apos;s
            insurable interest &mdash; the lender loses any right to insurance proceeds for
            property damage.
          </li>
          <li>
            An underbid preserves the lender&apos;s right to insurance proceeds, but only up to
            the amount of the deficiency.
          </li>
          <li>
            Lenders routinely make full credit bids automatically, without considering the
            insurance consequences. This can create an opportunity for the insured.
          </li>
          <li>
            If you are behind on your mortgage but not yet in foreclosure, your lender may hold
            your insurance proceeds or attempt to apply them to your loan balance. Get
            professional help.
          </li>
          <li>
            The intersection of foreclosure and insurance claims is one of the most legally
            complex areas in property insurance. Do not try to navigate it alone.
          </li>
        </ul>
      </CalloutBox>

      {/* ───────── Sources ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Legal References
      </h2>
      <ul className="list-disc pl-6 space-y-1 text-gray-600 text-sm mb-8">
        <li>California Civil Code &sect;&sect;2924&ndash;2924k &mdash; Non-judicial foreclosure procedures</li>
        <li>California Code of Civil Procedure &sect;580b &mdash; Anti-deficiency (purchase money loans)</li>
        <li>California Code of Civil Procedure &sect;580d &mdash; Anti-deficiency (non-judicial foreclosure)</li>
        <li><em>Cornelison v. Kornbluth</em> (1975) 15 Cal.3d 590 &mdash; Full credit bid doctrine established</li>
        <li><em>Alliance Mortgage Co. v. Rothwell</em> (1995) 10 Cal.4th 1226 &mdash; Full credit bid bars insurance proceeds; fraud exception</li>
        <li><em>Najah v. Scottsdale Insurance Co.</em> (2014) 230 Cal.App.4th 125 &mdash; Full credit bid extinguishes loss payee rights</li>
        <li><em>Armsey v. Channel Associates</em> (1986) 184 Cal.App.3d 833 &mdash; Underbid preserves insurance rights</li>
        <li><em>Track Mortgage Group v. Crusader Insurance Co.</em> (2002) 98 Cal.App.4th 857 &mdash; Recovery capped at deficiency amount</li>
        <li><em>Bank of America v. Quackenbush</em> (1997) 56 Cal.App.4th 1167 &mdash; Inadvertent full credit bids on 81 properties</li>
      </ul>

      {/* ───────── CTA ───────── */}
      <LeadCaptureForm
        claimType="foreclosure-insurance"
        heading="Dealing With Foreclosure and an Insurance Claim?"
        description="This is one of the most complex intersections in property insurance. A licensed Public Adjuster can help you navigate the insurance claim side while coordinating with your legal counsel on the foreclosure. Free consultation."
      />
    </>
  )
}
