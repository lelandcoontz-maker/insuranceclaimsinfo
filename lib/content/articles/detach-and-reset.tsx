import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: "Detach & Reset vs. Remove & Replace: A Costly Xactimate Substitution",
  description:
    "Detach & Reset (D&R) pays labor only; Remove & Replace (R&R) pays for a new item. When a carrier estimate writes D&R for damaged items, the material cost vanishes. How to spot and correct the substitution.",
  summary:
    'Detach & Reset pays only the labor to take an item down and reinstall the same item. Remove & Replace pays for a new one. When an Xactimate estimate codes damaged items as D&R, the entire material cost silently disappears. Reading the operation code on each line — and asking whether the exact item is truly going back in undamaged — is how the substitution gets caught.',
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
        <em>A detailed guide for policyholders, Public Adjusters, and attorneys on the difference between two Xactimate operations that sound similar and price very differently &mdash; and on how substituting one for the other silently removes the cost of new materials from an estimate.</em>
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Two of the most common operations in any Xactimate estimate are Detach &amp; Reset and Remove &amp; Replace. On the printed estimate they can look nearly identical: the same component name, similar quantities, a line for the toilet, a line for the baseboard, a line for the light fixture. The difference is buried in the operation code &mdash; and in the price. One of these operations pays for a new item. The other does not.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Because the same component often exists in the Xactimate database as both a Detach &amp; Reset line and a Remove &amp; Replace line, an estimate can be written either way for almost any fixture, trim piece, or appliance in the building. When the operation chosen matches the actual condition of the item, the estimate is accurate. When it does not &mdash; when a damaged item is written as Detach &amp; Reset &mdash; the estimate drops the entire cost of the replacement material, plus disposal, without any visible omission. The line item is still there. The description still names the component. Only the money is missing.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This article explains what each operation covers, where Detach &amp; Reset legitimately belongs, how the substitution works, which items rarely survive detachment in the first place, and how a policyholder or reviewer can catch the problem line by line. It is a companion to the broader discussions in{' '}
        <Link href="/resources/xactimate-line-items" className="text-[#2E74B5] underline">Xactimate Line Items</Link> and{' '}
        <Link href="/resources/xactimate-line-item-manipulation" className="text-[#2E74B5] underline">Xactimate Line Item Manipulation Tactics</Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Two Operations, Two Very Different Prices
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Detach &amp; Reset (D&amp;R): Labor Only
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Detach &amp; Reset means exactly what it says: the tradesperson takes the item down or disconnects it, sets it aside safely, and then reinstalls <em>the same item</em> after the surrounding work is complete. The classic examples are a toilet lifted so that flooring can be replaced underneath it, or a light fixture taken down so that the ceiling drywall behind it can be repaired. The item itself is not damaged. It is simply in the way.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Because no new item is purchased, the Detach &amp; Reset price is essentially a labor price. It covers the disconnection, the handling, and the reinstallation &mdash; along with minor incidentals such as a new wax ring for a reset toilet or fresh caulk at a reset fixture. What it does not include is the cost of the component itself. There is no toilet in a toilet D&amp;R line. There is no fixture in a fixture D&amp;R line.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Remove &amp; Replace (R&amp;R): Demolition, Disposal, and a New Item
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Remove &amp; Replace is a fundamentally different operation. The damaged item is torn out, hauled away and disposed of, and a brand-new item is purchased and installed in its place. The R&amp;R price accordingly carries components that D&amp;R does not: the removal labor for an item that does not need to be preserved, debris removal (and, depending on the line item, haul-off and dump fees &mdash; sometimes priced separately), and &mdash; most significantly &mdash; the material cost of the new item.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        For inexpensive components, the gap between the two operations is modest. For others it is enormous. The D&amp;R line for a plumbing fixture, an appliance, a run of cabinetry, or a specialty light fixture is a fraction of the corresponding R&amp;R line, because the R&amp;R line contains the purchase price of the new unit. Multiply that gap across every fixture and trim line in a whole-house water or smoke loss and the difference between an estimate written in D&amp;R and one written in R&amp;R can reach tens of thousands of dollars &mdash; with both estimates listing the same components, the same rooms, and the same quantities.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Same Component, Two Database Entries
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The reason this substitution is even possible is a feature of the Xactimate database itself. For most detachable components, the database offers both operations on the same component &mdash; the estimator selects the activity, Detach &amp; Reset or Remove &amp; Replace, with a single choice, and the printed descriptions read nearly identically. Nothing in the software flags the choice, questions it, or asks whether the item is actually damaged. The operation code is simply one of the estimator&apos;s judgment calls &mdash; and it is one of the least visible judgment calls on the printed page, because the descriptions read so similarly.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This is commentary on how the platform&apos;s output should be read, not an accusation directed at any individual estimator. Operation codes get chosen quickly, in volume, often from photographs rather than from a hands-on inspection. Some substitutions are deliberate economies; many are ordinary haste. Either way, the arithmetic is identical &mdash; and it is the arithmetic, not the intent, that the policyholder has to live with. For the broader family of estimate-shrinking patterns, see{' '}
        <Link href="/resources/common-xactimate-errors" className="text-[#2E74B5] underline">Common Xactimate Errors</Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Where Detach &amp; Reset Legitimately Belongs
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        None of this means Detach &amp; Reset is a suspect operation. It is an essential one, and an estimate that omitted it would be understating the work in a different direction. D&amp;R belongs on undamaged items that sit in the path of other work.
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>A pristine toilet over damaged flooring.</strong> The water loss ruined the vinyl or tile beneath the toilet, but the toilet itself is unharmed. It must be pulled so the flooring can be replaced, then reset on a new wax ring. That is a textbook D&amp;R.</li>
        <li><strong>An undamaged light fixture below a ceiling repair.</strong> If the drywall above is being replaced but the fixture is clean and functional, taking it down and rehanging it is D&amp;R work.</li>
        <li><strong>Appliances in a kitchen where only the flooring is affected.</strong> A refrigerator or range that must be moved &mdash; or disconnected and reconnected &mdash; so flooring can run beneath it, then put back in place.</li>
        <li><strong>Wall-mounted items ahead of paint or drywall work.</strong> Towel bars, mirrors, window coverings, and similar hardware that are unaffected by the loss but attached to surfaces being repaired.</li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        In each of these cases the item genuinely is going back in, and paying for a new one would overstate the loss. An accurate estimate uses D&amp;R here, and a reviewer who reflexively demanded R&amp;R on every line would be as wrong as an estimator who reflexively writes D&amp;R on every line. The operation code is supposed to follow the condition of the item. The problem addressed in this article begins when it stops doing so.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Substitution: D&amp;R Written for Damaged Items
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        How the Material Cost Disappears
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The substitution problem arises when an estimate applies the Detach &amp; Reset operation to items that are actually damaged. Consider what each of these lines does when it appears on a carrier estimate:
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>&ldquo;Detach &amp; reset baseboard&rdquo; on water-wicked baseboard.</strong> Baseboard that has absorbed water swells, delaminates, and loses its paint bond. It is not going back on the wall in acceptable condition &mdash; and much of it will not come off the wall in one piece to begin with. Coding it D&amp;R pays a labor charge and buys no new baseboard.</li>
        <li><strong>&ldquo;Reset&rdquo; on cracked tile.</strong> Tile does not reset. A cracked tile is replaced, and set tile generally cannot be salvaged from the substrate intact even when it is unbroken. A reset or D&amp;R operation on tile pays for handling material that will not exist after demolition.</li>
        <li><strong>&ldquo;Detach &amp; reset cabinetry&rdquo; on smoke-permeated cabinets.</strong> Cabinet boxes that have absorbed smoke odor into raw interior surfaces and particle-board cores frequently cannot be cleaned to pre-loss condition. Writing D&amp;R treats them as clean components temporarily in the way, and the price of new cabinetry &mdash; often one of the largest material numbers in a kitchen loss &mdash; drops out of the estimate entirely.</li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        In every one of these examples, the line item is present. The room is not missing. The component is named. A policyholder scanning the estimate sees their baseboard, their tile, their cabinets, each with a dollar figure attached, and reasonably concludes the estimate addresses them. What the policyholder cannot see without reading the operation code is that the dollar figure is a labor-only number &mdash; that the estimate has quietly assumed the damaged item will be reused, and has therefore paid for no replacement material and no debris removal for it.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This is what makes the D&amp;R substitution one of the quieter reductions in the Xactimate toolbox. A missing room is conspicuous. A denied item generates a letter. A D&amp;R line on a damaged item generates nothing at all &mdash; just a smaller number that looks like a complete one. The same structural quality drives the other patterns catalogued in{' '}
        <Link href="/resources/xactimate-line-item-manipulation" className="text-[#2E74B5] underline">Xactimate Line Item Manipulation Tactics</Link>: the reduction hides inside a line that appears to pay for the work.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Reverse Trap: Scope Reviews That Inherit the Substitution
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        There is a second-order version of the same problem, and it catches contractors as often as policyholders. When a contractor is asked to review or work from the carrier&apos;s estimate, the natural approach is to check whether every room and every component is represented &mdash; a presence check. D&amp;R lines pass a presence check. The baseboard is &ldquo;in the estimate.&rdquo; The cabinets are &ldquo;in the estimate.&rdquo; Unless the reviewer specifically compares operations, the review confirms the scope while inheriting the substitution: nobody notices that those items were never priced for replacement.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The consequence surfaces months later, mid-project, when the baseboard shatters on removal or the cabinets fail an odor test after cleaning, and the contractor discovers there is no material money in the approved figure. At that point the correction must be pursued as additional scope on a claim the carrier considers settled &mdash; a far weaker posture than catching the operation codes during the initial review. A careful comparison of the carrier&apos;s estimate against an independent{' '}
        <Link href="/resources/scope-of-loss" className="text-[#2E74B5] underline">scope of loss</Link> is the reliable defense, because a true scope comparison matches operations, not just component names.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Catch the Substitution
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Read the Operation, Not Just the Description
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The first step is mechanical: go through the estimate line by line and read each line&apos;s operation. Xactimate estimates identify the operation in the line item description and in the underlying selector code &mdash; abbreviations such as &ldquo;Detach &amp; reset,&rdquo; &ldquo;R&amp;R,&rdquo; &ldquo;Remove,&rdquo; and &ldquo;Replace&rdquo; appear at the start of the description, and the activity is encoded in the line item data itself. A reviewer who reads only the component names will miss the substitution every time. A reviewer who reads the operations will see immediately which items the estimate expects to reuse.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Walk the Loss and Ask One Question Per Item
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The second step is physical. For every D&amp;R line in the estimate, the reviewer stands in front of the actual item and asks a single compound question: <em>Is this exact item going back in, undamaged &mdash; and will it survive being removed?</em> Both halves matter. An item can be undamaged by the loss and still fail the second half of the question, because detachment itself destroys it. If the honest answer to either half is no, the D&amp;R operation is wrong for that line, and the correct operation is Remove &amp; Replace.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Items That Routinely Do Not Survive Detachment
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Experienced estimators know that certain components have a poor survival rate coming off the wall or out of the assembly, regardless of their pre-removal condition:
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Baseboard and casing.</strong> Painted trim that has been caulked and nailed for years tends to split at the nails, tear its paint film, and break at scarf joints during removal. Some percentage of any detached trim run will not be reusable.</li>
        <li><strong>Crown molding.</strong> Coped inside corners and long mitered runs are even less forgiving than baseboard. Crown frequently cracks at the copes on detachment.</li>
        <li><strong>Set tile.</strong> Tile bonded with thinset or mastic essentially never releases intact. &ldquo;Detaching&rdquo; tile is demolition by another name.</li>
        <li><strong>Shower doors and enclosures.</strong> Framed and semi-framed units rely on aged gaskets, set silicone, and fasteners in tile; disassembly commonly cracks glass, bends frames, or destroys seals that cannot be re-established.</li>
        <li><strong>Older fixtures with corroded connections.</strong> An angle stop that has not turned in twenty years, a corroded closet flange bolt, a galvanized union frozen with rust &mdash; older plumbing and lighting connections frequently shear, strip, or crumble, converting a planned reset into a forced replacement.</li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        An experienced estimator prices breakage-prone detachments accordingly &mdash; writing R&amp;R outright where survival is unrealistic, or documenting the judgment where it is genuinely uncertain. Xactimate accommodates that judgment: the database offers the alternative operations, and the platform&apos;s notes conventions allow the estimator to record the condition observed and the reason an operation was chosen. An estimate that writes bare D&amp;R across every trim, tile, and fixture line, with no notes and no allowance for breakage, is describing a demolition-and-reconstruction project in which nothing breaks. Anyone who has watched trim come off a wall knows what that assumption is worth.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Honest Gray Zone
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Fairness requires acknowledging that not every line falls cleanly on one side. Some items legitimately go either way. A solid-wood vanity in a room with limited water exposure might clean up and reset perfectly &mdash; or might reveal swollen end panels once pulled from the wall. A quality light fixture with light smoke film might respond fully to cleaning, or might not. Interior doors, wood shelving, newer plumbing fixtures with serviceable connections &mdash; these are judgment calls, and reasonable estimators can land differently on them.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        What decides the gray zone is condition documentation, not assertion. Photographs of the item before detachment, photographs after detachment showing whether it survived, moisture readings on wicking-prone materials, and cleaning-test results on smoke-affected surfaces convert a difference of opinion into a record. When the item comes off the wall broken, the post-detachment photograph is the whole argument: the D&amp;R line has been overtaken by physical fact, and the line should be converted to R&amp;R. Policyholders and contractors who photograph each stage of detachment protect themselves in both directions &mdash; the record supports replacement when items fail, and it just as honestly supports reset when items survive. Where a &ldquo;reset&rdquo; item cannot be matched to surviving adjacent material, the related problem of{' '}
        <Link href="/resources/matching" className="text-[#2E74B5] underline">matching</Link> enters the analysis as well.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What a Policyholder Can Do About It
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        The realistic goal here is a corrected scope on re-review &mdash; getting the operation codes changed to match the documented condition of each item before the claim settles, rather than fighting about broken baseboard after the fact. Several steps serve that goal.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Compare Operations Line by Line Against the Contractor&apos;s Bid
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        A policyholder might place the carrier&apos;s estimate next to the contractor&apos;s bid and compare not the totals but the operations. Every item the contractor prices as a replacement that the carrier prices as a reset is a specific, nameable discrepancy: the component, the room, the two operation codes, and the dollar difference between them. A list of such discrepancies &mdash; each tied to photographs of the item&apos;s condition &mdash; is a scope correction request the carrier can act on, which is far more productive than a general complaint that the estimate is low.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Ask the Carrier, in Writing, to Justify D&amp;R on Documented Damage
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        For items the policyholder has documented as damaged &mdash; the swollen baseboard, the cracked tile, the odor-retaining cabinets &mdash; an insured might consider requesting in writing that the carrier explain the basis for the Detach &amp; Reset designation on each one. The question is straightforward: the estimate assumes this item will be reused; here is the documentation showing its condition; what supports the assumption? A written request creates a record, and it obliges the carrier to either defend the reuse assumption on the evidence or correct the operation.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The California Regulatory Backdrop
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        In California, the Fair Claims Settlement Practices Regulations speak to this situation. 10 CCR &sect;2695.9(d) requires that when an insurer prepares the repair estimate, that estimate be one that restores the property to its pre-loss condition, in accordance with accepted trade standards for good and workmanlike construction &mdash; and the same subsection separately requires the insurer to take reasonable steps to verify that the repair costs it uses are accurate and representative of the local market. An estimate that pays labor-only reset charges on items that are damaged &mdash; or on items that accepted trade practice says will not survive detachment &mdash; is difficult to square with that standard, because following it as written would not return the property to pre-loss condition.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The same regulation supplies a practical test. Once the insured submits a competing written estimate &mdash; a contractor&apos;s bid pricing the damaged items for replacement &mdash; &sect;2695.9(d) requires the insurer to do one of three things: pay the difference, name a contractor who will perform the repairs at the carrier&apos;s estimated price if the insured requests one (&sect;2695.9(d)(2)), or reasonably adjust the insured&apos;s contractor estimate. A policyholder facing an estimate full of D&amp;R lines on damaged trim, tile, and cabinetry might consider submitting exactly that bid with the name-a-contractor request: if no contractor will reset broken baseboard or &ldquo;reset&rdquo; cracked tile at the estimated figure, the menu leaves the carrier with paying the difference or adjusting the bid.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Document Detachment as It Happens
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Finally, for gray-zone items where reset is genuinely plausible, the policyholder&apos;s protection is the before-and-after record described earlier. Photographing each item before detachment and again immediately after &mdash; and noting which items broke, split, or failed cleaning &mdash; builds the file that converts D&amp;R lines to R&amp;R lines when the physical facts demand it. Carriers respond to that record because it is not an argument; it is a photograph of a baseboard in three pieces.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Frequently Asked Questions
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        What is the difference between detach and reset and remove and replace?
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Detach &amp; Reset (D&amp;R) pays only the labor to take an item down, set it aside, and reinstall the <em>same</em> item after surrounding work is done &mdash; no new material. Remove &amp; Replace (R&amp;R) pays to tear out the damaged item, dispose of it, and purchase and install a new one, so the R&amp;R price includes the material cost. The correct operation depends on whether the exact item is going back in, undamaged, after surviving removal.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        What does detach and reset mean in an Xactimate estimate?
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        In Xactimate, a Detach &amp; Reset line signals that the estimate assumes the existing item will be reused. The price covers disconnection, handling, and reinstallation, plus minor incidentals such as a wax ring or caulk &mdash; but no replacement item and no debris removal for it. If the item is actually damaged, or is a type that rarely survives detachment, a D&amp;R line means the estimate has not funded its replacement.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        How much cheaper is D&amp;R than R&amp;R in Xactimate?
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        It varies with the component, because the difference is essentially the material price plus removal and debris costs. On inexpensive hardware the gap is small; on plumbing fixtures, appliances, specialty lighting, and cabinetry, the D&amp;R line can be a small fraction of the R&amp;R line. Across a whole-house loss with dozens of fixture and trim lines, the cumulative difference between an estimate written in D&amp;R and one correctly written in R&amp;R can reach tens of thousands of dollars.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Which items usually cannot be detached and reset?
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Set tile essentially never releases intact. Painted baseboard, casing, and crown molding split at nails and joints at a high rate. Shower doors and enclosures commonly lose glass, frames, or seals in disassembly. Older fixtures with corroded connections &mdash; frozen angle stops, rusted flange bolts &mdash; frequently break during disconnection. An estimate that writes bare D&amp;R across these categories with no breakage allowance is assuming a demolition in which nothing breaks.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        What can a policyholder do when a carrier estimate uses D&amp;R on damaged items?
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The productive path is a documented scope correction: compare operations line by line against the contractor&apos;s bid, photograph the condition of each disputed item, and request in writing that the carrier justify the reset assumption on items documented as damaged. In California, 10 CCR &sect;2695.9(d) requires an insurer-prepared estimate to restore pre-loss condition per accepted trade standards, with verified local-market costs &mdash; and once the insured submits a competing written bid, the insurer must pay the difference, name a contractor who will do the work at its estimated price on request (&sect;2695.9(d)(2)), or reasonably adjust the bid. Reset pricing that no contractor will honor rarely survives that menu.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Bottom Line
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Detach &amp; Reset and Remove &amp; Replace are both legitimate, necessary operations, and a well-written estimate uses both &mdash; D&amp;R for the pristine toilet over the ruined floor, R&amp;R for the baseboard the water destroyed. The costly problem is substitution: a labor-only operation standing in for a replacement, on a line that looks complete to anyone reading component names instead of operation codes.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The defense is unglamorous and reliable. Read every line&apos;s operation. Walk the loss and ask, item by item, whether this exact piece is going back in undamaged and whether it will survive coming out. Photograph the gray-zone items before and after detachment. And where the operation code contradicts the documented condition of the property, put the discrepancy to the carrier in writing, line by line, and ask for the corrected scope. Estimates get fixed one operation code at a time &mdash; and the codes only get fixed when someone reads them.
      </p>
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
