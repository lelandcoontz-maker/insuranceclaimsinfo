import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'The Insurance Trap in "Subject-To" Real Estate Deals: What Buyers and Sellers Need to Know',
  description:
    'When a buyer purchases property "subject to" the seller\'s existing mortgage, the insurance consequences can be devastating. Learn why the seller\'s policy may be worthless, why the buyer has no coverage, and what the law says about insurable interest, concealment, and due-on-sale clauses.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        You find a property you want to buy. The seller has a mortgage at 3.25% &mdash; a rate that no longer exists in today&rsquo;s market. The seller is willing to walk away and let you take over the payments. You keep paying the mortgage, the lender keeps getting paid, and everyone&rsquo;s happy.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Except for the insurance. And that&rsquo;s where things can fall apart completely.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Economic Environment That Creates These Deals
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Subject-to transactions don&rsquo;t happen in a vacuum. They arise from a specific set of economic conditions &mdash; and understanding those conditions is essential to understanding why buyers and sellers enter into these arrangements, and why they so often go wrong.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The fundamental driver is a gap between old mortgage rates and new ones. When interest rates rise significantly &mdash; as they did when rates climbed from historic lows near 3% to 7% or higher &mdash; borrowers who locked in during the low-rate period hold mortgages that are far more favorable than anything available in the current market. A buyer who could step into one of those existing mortgages would enjoy monthly payments hundreds or even thousands of dollars lower than what a new mortgage at current rates would require. Over the life of a 30-year loan, the savings can be enormous.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is what makes the arrangement attractive to buyers &mdash; and not just buyers with poor credit, although that is one scenario. A buyer with less-than-ideal credit may pursue a subject-to deal because they cannot qualify for a conventional mortgage at all, or because the rate they would be offered is prohibitively high. But buyers with perfectly good credit pursue these deals too. A creditworthy buyer looking at a 7% rate on a new mortgage has a powerful incentive to take over an existing loan at 3%, even if the buyer could qualify for conventional financing. The motivation is not an inability to borrow &mdash; it is the desire to borrow on terms that the current market no longer offers.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The seller&rsquo;s motivations vary as well. A seller may be underwater on the mortgage &mdash; owing more than the property is currently worth &mdash; and unable to sell through conventional channels without bringing cash to the closing table. A seller in a slow market may have limited interest from traditional buyers and may see a subject-to offer as the best or only viable path to moving the property. A seller facing financial difficulty may need to stop making payments immediately and may be willing to transfer the property to anyone who will take over the obligation. In some cases, the buyer offering a subject-to arrangement is the only buyer offering at all, or is offering a price that makes the deal worthwhile for the seller despite the unconventional structure.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The environment in which these deals are least likely to occur is one with declining mortgage rates and strong buyer competition. When rates are falling, buyers have no reason to inherit an old mortgage &mdash; they can get a better one on their own. And when multiple buyers are competing for properties, sellers have no need to accept creative financing arrangements. Subject-to deals thrive in the opposite conditions: rising or elevated rates, limited buyer pools, and sellers with few alternatives.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What a &ldquo;Subject-To&rdquo; Transaction Actually Is
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        In a subject-to transaction, the buyer purchases the property while the seller&rsquo;s existing mortgage remains in place. The buyer takes title &mdash; sometimes through a deed, sometimes through a land contract or other arrangement &mdash; and begins making the seller&rsquo;s mortgage payments. The mortgage itself is <strong>not formally assumed</strong> by the buyer. There is no novation, no new agreement between the buyer and the lender. The lender&rsquo;s contract remains with the original borrower &mdash; the seller &mdash; and the seller remains personally liable on the note.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        What the buyer is doing, in effect, is attempting to step into a mortgage that is almost certainly not assumable. Most conventional mortgages &mdash; particularly those backed by Fannie Mae and Freddie Mac &mdash; are not assumable by a third-party buyer. FHA and VA loans have their own assumption procedures, but those require lender approval and qualification by the new borrower, which is precisely what a subject-to transaction is designed to avoid.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The entire arrangement rests on the hope that the mortgage company won&rsquo;t notice. In many cases, the payments continue to flow through the seller&rsquo;s existing escrow account. The monthly mortgage payment arrives on time, the escrow account funds the property taxes and insurance premiums, and from the lender&rsquo;s perspective, nothing appears to have changed. The name on the account is the same. The payment amount is the same. The escrow disbursements go to the same taxing authority and the same insurance company. If the buyer is making payments directly into the seller&rsquo;s account, or if the payments are routed through a servicing arrangement, the lender may have no reason to look more closely.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        But the lender has not agreed to this. The lender has not approved the buyer. The lender has not evaluated the buyer&rsquo;s creditworthiness. And the lender has not waived its right to accelerate the loan upon discovering the transfer.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Due-on-Sale Risk
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Nearly every residential mortgage written in the last four decades contains a <strong>due-on-sale clause</strong> &mdash; a provision that allows the lender to accelerate the entire loan balance upon any transfer of the property. The Garn-St. Germain Depository Institutions Act of 1982 (12 U.S.C. &sect; 1701j-3) federally preempts state laws that might otherwise restrict lenders from enforcing these clauses.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Garn-St. Germain Act does carve out exceptions &mdash; transfers to a spouse, transfers upon death, transfers into certain trusts &mdash; but it does <strong>not</strong> exempt arm&rsquo;s-length sales to unrelated third parties. A subject-to buyer who is a stranger to the original borrower has no federal protection against loan acceleration.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Why don&rsquo;t lenders enforce the due-on-sale clause more aggressively? In many cases, they simply don&rsquo;t know. The payments keep arriving through the same escrow account. The loan performs. There is no default to trigger a closer look. But lenders have every reason to accelerate a 3% loan in a 7% rate environment. The same rate gap that makes the deal attractive to the buyer is exactly what makes it unattractive to the lender &mdash; the lender is earning 3% on money it could lend at 7%. If the lender discovers the transfer, it has both the contractual right and the financial incentive to call the loan due immediately.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the mortgage risk. It is well known and widely discussed in subject-to circles. But there is another risk &mdash; the insurance risk &mdash; that receives far less attention and can be equally catastrophic.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the backdrop against which the insurance problem unfolds.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Insurance Problem: Who Is Actually Covered?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a property is purchased subject-to, the seller&rsquo;s existing homeowner&rsquo;s insurance policy typically remains in place. The premiums continue to be paid through the escrow account that&rsquo;s bundled into the monthly mortgage payment. From the outside, the policy appears to be active and current.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        But property insurance is a <strong>personal contract</strong>. It does not follow the property &mdash; it follows the person. The policy insures the named insured, not whoever happens to own the building at any given time. When the seller transfers the property to a buyer, the seller&rsquo;s insurance policy does not automatically transfer with it.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This creates a series of interlocking problems that can leave the buyer &mdash; the person who actually owns the property and has the most to lose &mdash; completely unprotected.
      </p>

      <CalloutBox variant="warning" title="The Core Problem">
        <p>
          Property insurance is a personal contract &mdash; it insures the <em>person</em>, not the <em>property</em>. When the named insured no longer owns the property, and the actual owner is not on the policy, there may be no valid coverage for anyone.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Seller Has No Insurable Interest
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under the insurable interest doctrine, a policyholder must have an insurable interest in the property both when the policy is issued <strong>and</strong> at the time of loss. California Insurance Code Section 281 defines insurable interest as any interest &ldquo;of such a nature that a contemplated peril might directly damnify the insured.&rdquo; Section 283 goes further: &ldquo;A mere contingent or expectant interest in anything, not founded on an actual right to the thing, nor upon any valid contract for it, is not insurable.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Once the seller transfers the property, the seller&rsquo;s insurable interest diminishes or disappears entirely. The seller no longer owns the property. The seller no longer occupies the property. The seller may retain some financial exposure through the underlying mortgage &mdash; if the buyer defaults, the seller is still on the hook &mdash; but this residual liability interest is far narrower than the ownership interest the policy was written to cover.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If a fire destroys the property and the seller files a claim, the insurer can deny the claim on the grounds that the named insured no longer has a sufficient insurable interest in the property. The seller is trying to collect on a policy that insures a property they no longer own.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In <strong><em>Morgan v. American Security Insurance Co.</em></strong> (Fla. 1988), Dorothy Morgan maintained a homeowner&rsquo;s policy on a property she had deeded to her ex-husband in a divorce settlement. When the home burned, the insurer denied her claim. The court agreed: the insured must have insurable interest at the time of loss, and Morgan had transferred hers before the fire. She recovered nothing.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Buyer Is Not a Named Insured
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Even though the buyer now owns the property and has the greatest financial exposure, the buyer has no standing to collect under the seller&rsquo;s policy. The buyer is not the named insured. The buyer was never underwritten by the insurer. The insurer never agreed to cover the buyer&rsquo;s risk.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In <strong><em>State Farm Fire &amp; Casualty Co. v. Dubrovsky</em></strong>, 2018 IL App (1st) 170282, a father purchased a homeowner&rsquo;s policy on a property he did not own &mdash; his son held title and the mortgage. When the property burned, the court found that the named insured (the father) had no insurable interest. The policy was void as to the named insured.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The only party that recovered? The mortgage lender. Under the standard mortgage clause &mdash; a provision in virtually every homeowner&rsquo;s policy &mdash; the lender&rsquo;s coverage is a &ldquo;separate and distinct contract&rdquo; that cannot be forfeited by any act or default of the insured. The lender gets paid. The person who actually lost their home does not.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the cruel arithmetic of a subject-to insurance failure: the lender is protected, the seller cannot collect because they don&rsquo;t own the property, and the buyer cannot collect because they&rsquo;re not on the policy.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Policy Cannot Be Assigned
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some buyers and sellers attempt to solve this problem by &ldquo;assigning&rdquo; the seller&rsquo;s policy to the buyer. This does not work. Standard property insurance policies contain anti-assignment clauses requiring the insurer&rsquo;s written consent before any transfer of policy rights.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        California Insurance Code Section 520 provides an exception for <strong>post-loss</strong> assignments &mdash; after a loss has already occurred, an agreement not to transfer the claim is void. But this exception offers no help to a buyer who needs coverage <em>before</em> a loss happens. The buyer cannot step into the seller&rsquo;s policy without the insurer&rsquo;s knowledge and consent, and obtaining that consent would alert the insurer to the ownership change &mdash; which would likely result in the policy being cancelled or rewritten.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Dual-Policy Approach: A Solution That Creates New Problems
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some buyers and sellers, aware of the coverage gap, attempt to solve it by maintaining two insurance policies on the same property. The seller&rsquo;s original policy stays in place &mdash; the premiums continue to be paid through the escrowed mortgage payment &mdash; while the buyer purchases a separate policy under the buyer&rsquo;s own name.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The logic is understandable: the seller&rsquo;s policy keeps the mortgage company satisfied and unaware of the transfer, while the buyer&rsquo;s policy provides the buyer with actual coverage in the event of a loss.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        But this arrangement introduces its own complications.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        &ldquo;Other Insurance&rdquo; Clauses
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Nearly every property insurance policy contains an <strong>&ldquo;other insurance&rdquo;</strong> clause &mdash; a provision that addresses what happens when more than one policy covers the same loss. These clauses typically state that the policy will pay only its proportionate share of a loss, or that it will be excess over any other valid and collectible insurance.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When two policies cover the same property, each insurer may point to the other policy as the primary source of coverage. At best, this creates delays and disputes. At worst, both insurers reduce their payments, and the total recovery falls short of the actual loss.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Material Misrepresentation
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Obtaining a new policy while concealing the existence of the old one &mdash; or vice versa &mdash; raises questions of material misrepresentation. Insurance applications typically ask whether there is other insurance covering the same property. Answering dishonestly is grounds for rescission. Answering honestly invites questions about why two policies exist, which leads back to the underlying subject-to transaction that neither the insurer nor the lender is supposed to know about.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Concealment of Ownership Change
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under California Insurance Code Sections 330 and 331, concealment &mdash; defined as the &ldquo;neglect to communicate that which a party knows, and ought to communicate&rdquo; &mdash; entitles the insurer to rescind the policy. This applies even to <strong>unintentional</strong> concealment. The insurer does not need to prove that the concealment caused the loss. The mere failure to disclose a material change in ownership is sufficient grounds to void the policy entirely.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The California Standard Fire Policy, codified in Insurance Code Section 2071, reinforces this by requiring the insured to disclose &ldquo;any changes in the title, use, occupation, location, possession or exposures&rdquo; of the insured property. A transfer of ownership is precisely the kind of change that must be disclosed &mdash; and that, once disclosed, unravels the entire subject-to arrangement.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Happens When a Loss Occurs
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The full scope of the problem becomes apparent only when something goes wrong. Consider what happens when a fire destroys a property that was purchased subject-to:
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>If only the seller&rsquo;s policy is in place:</strong> The seller files a claim as the named insured. The insurer investigates and discovers the seller no longer owns or occupies the property. The insurer denies the claim for lack of insurable interest, or rescinds the policy for concealment of a material change in ownership. The buyer, who actually lost the property, has no policy under which to file a claim. The mortgage lender collects under the standard mortgage clause. The buyer loses their investment, their home, and any equity they had built &mdash; and the seller remains liable on the mortgage.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>If only the buyer&rsquo;s policy is in place:</strong> The buyer files a claim. If the buyer obtained the policy honestly, disclosing their ownership and the existing mortgage, this may work &mdash; but obtaining the policy in the first place likely required naming the original lender as the loss payee, which may have triggered the lender&rsquo;s discovery of the ownership change and acceleration of the loan. The buyer may have valid insurance but face immediate foreclosure.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>If both policies are in place:</strong> Both insurers investigate. Both discover the other policy. Both discover the ownership transfer. The seller&rsquo;s insurer denies for lack of insurable interest. The buyer&rsquo;s insurer may deny or reduce payment based on other-insurance clauses, or may rescind for material misrepresentation about other coverage or the circumstances of the purchase. The lender, again, collects under the standard mortgage clause &mdash; and may also accelerate the loan upon discovering the transfer.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In every scenario, the buyer &mdash; the person with the most at stake &mdash; faces the greatest risk of being left with no coverage and no recourse.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        A Georgia Court&rsquo;s Warning
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The risks of maintaining insurance on property you no longer own &mdash; or that you own through an undisclosed arrangement &mdash; are not theoretical. Courts have addressed these situations directly.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In a Georgia case analyzed by the law firm Drew Eckl &amp; Farnham, an owner-financed sale resulted in total forfeiture of insurance coverage. The court rejected the argument that there needed to be a causal connection between the undisclosed change of interest and the loss. Under the policy&rsquo;s &ldquo;change of interest&rdquo; provision, the mere fact of an undisclosed transfer was sufficient to void the policy in its entirety &mdash; regardless of whether the transfer had anything to do with why the property burned.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Standard Fire Policy&rsquo;s own language supports this result. The concealment and change-of-interest provisions in the statutory form do not require a connection between the misrepresentation and the loss. A material change in ownership that goes undisclosed is, standing alone, grounds for the insurer to walk away from the claim.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Lender Always Gets Paid
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        One of the bitter ironies of this arrangement is that the party with the least to lose &mdash; the mortgage lender &mdash; is the most thoroughly protected.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The standard mortgage clause, which appears in virtually every homeowner&rsquo;s policy, creates what courts have described as a &ldquo;separate and distinct contract&rdquo; between the insurer and the mortgagee. Under this clause, the lender&rsquo;s right to collect insurance proceeds cannot be defeated by any act, neglect, or default of the insured &mdash; including fraud, misrepresentation, or failure to maintain insurable interest.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        As the <em>Dubrovsky</em> court held, even when the named insured has no insurable interest and the policy is void as to the insured, the mortgagee&rsquo;s coverage survives. The lender collects. The insurer pays the lender. And the buyer &mdash; who has been making the mortgage payments, maintaining the property, and bearing all the risk of ownership &mdash; receives nothing.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Separate-Policy Strategy
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some real estate advisors and subject-to educators recommend a more straightforward approach: the buyer simply purchases a new, separate insurance policy in the buyer&rsquo;s own name, listing the buyer as the named insured and the existing lender as the mortgagee or loss payee. Under this approach, the seller&rsquo;s original policy may or may not remain in place &mdash; but the buyer is not relying on it for coverage. The buyer has a policy that names the actual property owner as the insured, and if a loss occurs, the buyer files a claim under that policy.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This approach may work. A buyer who legitimately owns a property, obtains insurance in the buyer&rsquo;s own name, pays the premiums, and discloses the relevant facts to the insurer has a stronger coverage position than a buyer who is relying on someone else&rsquo;s policy. The insurable interest is clear. The named insured is the actual owner. The insurer agreed to cover this specific person and this specific risk.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        But even this strategy carries complications that should not be navigated without legal counsel. Naming the original lender as the mortgagee on a new policy may prompt the lender to investigate why a different person is insuring a property on which the lender holds a mortgage in someone else&rsquo;s name &mdash; potentially triggering discovery of the transfer and acceleration of the loan. The application process itself may require disclosures about how the property was acquired, whether there is an existing mortgage, and whether there is other insurance on the property. Each of these questions leads back to the underlying subject-to arrangement.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        There is also the question of what happens to the seller&rsquo;s original policy. If it remains in place &mdash; paid through the escrowed mortgage payment &mdash; the existence of two policies on the same property raises other-insurance issues. If it is cancelled, the sudden absence of the escrowed insurance payment may alert the lender&rsquo;s loan servicing department, which monitors escrow accounts for exactly this kind of change.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        None of this means the separate-policy approach cannot work. It may be the most practical solution available. But &ldquo;may work&rdquo; is not &ldquo;will work,&rdquo; and the difference between the two is the kind of analysis that requires an attorney who understands both the real estate and insurance dimensions of the transaction.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why This Matters
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Subject-to transactions are promoted in real estate investment circles as a creative financing strategy. And for experienced investors who understand the risks and structure the transaction properly &mdash; with competent legal counsel and appropriate insurance &mdash; they can be a legitimate tool.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        But the insurance dimension of these transactions is frequently overlooked, misunderstood, or deliberately ignored. The assumption that &ldquo;the insurance is taken care of&rdquo; because the premiums are being paid through escrow is dangerously wrong. Premiums being current does not mean coverage exists. A policy that is paid up, active, and apparently in force can still be worthless at the moment it matters most &mdash; because the named insured has no insurable interest, the actual owner is not on the policy, and the entire arrangement was never disclosed to the insurer.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Even the more deliberate approach &mdash; purchasing a separate policy in the buyer&rsquo;s name &mdash; should not be undertaken without the guidance of an attorney who is well-versed in insurance law and real estate transactions. The interplay between due-on-sale clauses, insurable interest requirements, disclosure obligations, and escrow mechanics creates a web of risks that no single strategy can eliminate on its own. What works in one state, with one lender, under one set of facts, may fail entirely under slightly different circumstances.
      </p>

      <CalloutBox variant="important" title="Consult an Attorney">
        <p>
          Anyone involved in a subject-to transaction &mdash; whether as buyer, seller, or advisor &mdash; should consult with an attorney who is knowledgeable about both real estate law and insurance coverage before proceeding. The insurance risks alone can result in a total, unrecoverable loss.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        The property may look insured. The premiums may be paid. The policy may be in force. But when the named insured doesn&rsquo;t own the property, and the property owner isn&rsquo;t on the policy, what you have is not insurance &mdash; it is an illusion of insurance. And illusions do not rebuild homes.
      </p>

      <hr className="my-8 border-gray-300" />

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Statutes Referenced
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>12 U.S.C. &sect; 1701j-3</strong> &mdash; Garn-St. Germain Depository Institutions Act (due-on-sale clause preemption)</li>
        <li><strong>Cal. Ins. Code &sect; 281</strong> &mdash; Definition of insurable interest</li>
        <li><strong>Cal. Ins. Code &sect; 282</strong> &mdash; Types of insurable interest</li>
        <li><strong>Cal. Ins. Code &sect; 283</strong> &mdash; Mere contingent interests not insurable</li>
        <li><strong>Cal. Ins. Code &sect;&sect; 330&ndash;331</strong> &mdash; Concealment: definition and effect</li>
        <li><strong>Cal. Ins. Code &sect; 520</strong> &mdash; Post-loss assignment exception</li>
        <li><strong>Cal. Ins. Code &sect; 2071</strong> &mdash; California Standard Fire Policy form</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Cases Cited
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><em>Morgan v. American Security Insurance Co.</em> (Fla. 1988)</li>
        <li><em>State Farm Fire &amp; Casualty Co. v. Dubrovsky</em>, 2018 IL App (1st) 170282</li>
        <li><em>Aetna Insurance Co. v. King</em>, 265 So.2d 716 (Fla. 1st DCA 1972)</li>
        <li><em>Fluor Corp. v. Superior Court</em>, 61 Cal.4th 1175 (2015)</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Additional Resources
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>National Real Estate Insurance Group (NREIG), &ldquo;How to Properly Insure a Subject-To Property&rdquo;</li>
        <li>Drew Eckl &amp; Farnham, &ldquo;Let The Seller Beware: Owner-Financed Mortgages As A Bar To Insurance Coverage&rdquo;</li>
        <li>Chip Merlin, Property Insurance Coverage Law Blog &mdash; articles on insurable interest and named insured requirements</li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4 text-sm italic">
        For more on how mortgage companies interact with insurance claims, see our article on{' '}
        <Link href="/resources/mortgage-company-holds" className="text-blue-700 underline hover:text-blue-900">
          Mortgage Company Holds
        </Link>. For a deeper discussion of insurable interest and named insured requirements, see{' '}
        <Link href="/resources/named-vs-additional-insured" className="text-blue-700 underline hover:text-blue-900">
          Named vs. Additional Insured
        </Link>.
      </p>
    </>
  )
}
