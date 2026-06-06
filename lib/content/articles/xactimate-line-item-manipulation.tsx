import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Xactimate Line Item Manipulation: How "Included" Makes Covered Items Disappear',
  description:
    'A detailed guide for policyholders, Public Adjusters, and attorneys on how insurance carriers manipulate Xactimate line items — from the "included" designation and wrong codes to minimum charge suppression and missing items — and how to identify and challenge every tactic using Verisk\'s own documentation.',
  summary:
    'Carriers manipulate Xactimate estimates by omitting line items, using low waste factors, wrong labor settings, and stale pricing to shrink the total. Knowing these tactics lets you spot and correct a manipulated estimate line by line.',
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
        <em>A detailed guide for policyholders, Public Adjusters, and attorneys on how Xactimate line items can be manipulated to reduce claim payments &mdash; and how to use Verisk&apos;s own documentation to identify and challenge every variation of this practice.</em>
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        If you have ever reviewed an insurance company&apos;s Xactimate estimate and felt like something was missing but could not quite identify what, you are not imagining things. The estimate may look complete. It may have pages of line items and detailed descriptions. It may even include the correct room-by-room layout and measurements. And yet the total at the bottom may be thousands &mdash; or tens of thousands &mdash; of dollars short of what the actual repair will cost.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The reason is not usually a single dramatic error. It is not that someone forgot to include the kitchen. The shortfall is typically the product of dozens of small decisions embedded in the estimate &mdash; decisions about which line item code to use, which items to mark as &quot;included,&quot; which operations to combine, and which items to omit entirely. Each individual decision might reduce the estimate by $50 or $200. But when you add them up across a twenty-room house, the cumulative effect is devastating.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        These are not random errors. They are patterns. And they are possible because Xactimate is an highly flexible estimating tool that gives the user enormous discretion over how to structure an estimate. The same damage can be estimated at wildly different totals depending on the choices the estimator makes &mdash; and most policyholders will never know what choices were made or whether those choices were defensible.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This article explains the most common forms of line item manipulation in Xactimate estimates, how each one works, why it reduces your payment, and how to challenge it using <Link href="/resources/how-to-read-verisk-white-paper" className="text-[#2E74B5] underline">Verisk&apos;s own documentation</Link>. If you are a policyholder trying to understand your estimate, a Public Adjuster building a supplement, or an attorney evaluating an underpayment claim, this is the reference you need.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">The &quot;Included&quot; Designation: When Items Disappear Without a Denial</h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">What &quot;Included&quot; Means in Xactimate</h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Every Xactimate line item has a price that is designed to cover a specific scope of work. That price is not just the cost of the material and the labor to install it &mdash; it also accounts for certain ancillary tasks that Verisk considers part of the same operation. When Verisk decides that a particular ancillary task is already accounted for within the price of another line item, it designates that task as &quot;included.&quot;
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        For example, the line item price for hanging and finishing drywall includes the cost of the drywall itself, the screws or nails, the joint compound, the paper tape, and the labor to hang, tape, mud, and sand the drywall to a smooth finish. You do not need to add a separate line item for drywall screws. They are &quot;included&quot; in the drywall installation line item.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This makes sense for genuinely incidental components &mdash; items that are always part of the same operation, always consumed in predictable quantities, and never priced separately in the real world. No contractor bids drywall screws as a separate line item. Verisk&apos;s treatment of screws as &quot;included&quot; reflects reality.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The problem is not the concept of inclusion. The problem is when the label &quot;included&quot; is applied to items that are not, in fact, included in the price of another line item &mdash; or when it is used to avoid paying for legitimate, separately priced operations.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">&quot;Included&quot; Is Not the Same as &quot;Free&quot;</h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        This is a critical distinction that is frequently lost in the claims process. When Verisk says an item is &quot;included,&quot; it means the cost of that item is already built into the price of a parent line item. It does not mean the item has no cost. It does not mean the work does not need to happen. It does not mean the contractor is expected to perform the task for nothing. It means someone has already been paid for it through the parent item&apos;s price.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        But when a carrier&apos;s adjuster marks an item as &quot;included&quot; in a situation where the parent line item&apos;s price does not actually account for that work, the practical effect is that no one is paying for it. The contractor is not being compensated for the task. The policyholder is not receiving indemnity for the cost. The item has effectively been removed from the estimate without a formal denial &mdash; and without triggering any of the regulatory obligations that come with issuing a coverage denial.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This is the essential mechanism. A denial requires the carrier to cite a policy provision and, in California, to comply with specific notice requirements under the <Link href="/resources/california-fair-claims" className="text-[#2E74B5] underline">Fair Claims Settlement Practices Regulations</Link>. Marking an item as &quot;included&quot; requires nothing. The item simply does not appear as a separately priced line &mdash; and unless someone knows to look for it, nobody asks why.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">When &quot;Included&quot; Is Applied to Items That Are Not Included</h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Verisk publishes documentation &mdash; sometimes referred to as the &quot;included items list&quot; or the Xactimate &quot;white papers&quot; &mdash; that spells out exactly what is and is not included in each line item&apos;s price. This documentation is available to anyone with an Xactimate subscription, and it is the authoritative reference for resolving &quot;included&quot; disputes.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Despite this documentation existing, it is common to see carrier estimates that mark items as &quot;included&quot; when Verisk&apos;s own published materials say they are not. Some frequently disputed examples:
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Paint masking and protection.</strong> Masking windows, trim, and floors before painting is a separate operation in Xactimate with its own line items. It is not included in the price of the paint line item. Yet it is routinely omitted from carrier estimates on the theory that the painter &quot;just does that&quot; as part of painting.</li>
        <li><strong>Texture matching on drywall.</strong> Standard drywall line items include finishing to a smooth surface. If the existing walls have a skip-trowel, knockdown, orange peel, or other texture, matching that texture is a separate line item with a separate price. The smooth finish line item does not include it. But carrier estimates frequently treat texture as &quot;included&quot; in the drywall installation.</li>
        <li><strong>Baseboard and trim removal for flooring.</strong> When flooring is replaced, baseboards must often be removed and reinstalled. This is a detach-and-reset operation that is not included in the flooring line item. It is a separate line item. Many carrier estimates simply leave it out.</li>
        <li><strong>Furniture moving.</strong> Xactimate has line items for content manipulation &mdash; moving furniture within a room or to another room to allow work to proceed. These operations are not included in the price of the repair work itself. Repair line items assume a clear workspace. But furniture-moving line items are among the most commonly omitted items in carrier estimates.</li>
        <li><strong>Extended overhead on large projects.</strong> General contractor overhead items such as on-site supervision, job-site management, temporary facilities, and permit acquisition are not included in individual trade line items. Yet carriers frequently argue that these items are &quot;included&quot; in the general overhead already reflected in the line item prices.</li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        In each of these cases, the question is not subjective. Verisk&apos;s documentation either lists the item as included or it does not. When the carrier marks something as &quot;included&quot; and Verisk says it is not, the carrier is not applying a judgment call &mdash; it is contradicting the very pricing database it chose to use.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Wrong Line Item Codes: Paying for the Wrong Work</h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">How Line Item Codes Work</h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Xactimate&apos;s pricing database contains thousands of individual line items, each identified by a unique alphanumeric code called a selector code. The selector code tells you the category (such as drywall, roofing, plumbing, or electrical), the specific operation (remove, replace, repair, detach and reset), and the material specification (grade, thickness, type). Similar-sounding operations can have dramatically different prices depending on the selector code used.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        For example, the code for removing and replacing a standard interior hollow-core door is different from the code for removing and replacing a solid-core door, which is different from the code for a fire-rated door. The material costs are different. The weight-handling labor is different. The prices reflect these differences. If your fire-damaged home had solid-core doors throughout and the adjuster used the hollow-core door code, every single door replacement is underpriced.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Common Code Substitutions</h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Wrong line item codes are one of the most effective ways to reduce an estimate without obviously omitting anything. The estimate still shows &quot;door replacement&quot; &mdash; it just shows the cheaper version. A policyholder who sees &quot;Remove &amp; replace door&quot; on the estimate has no reason to question it unless they know enough to check which door code was used. Here are common patterns:
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Patch vs. replace.</strong> Xactimate has separate line items for patching drywall (repairing a small area) and replacing drywall (removing the entire sheet or section and installing new). Patching is significantly cheaper per square foot because it involves less material and less labor. When an entire wall needs to be replaced due to water damage or fire, using the patch code instead of the replacement code can reduce the drywall portion of the estimate substantially.</li>
        <li><strong>Standard grade vs. actual grade.</strong> Flooring, cabinetry, countertops, roofing, and many other categories have multiple line items reflecting different quality levels. Builder-grade laminate countertops are not the same as quartz or granite. Three-tab asphalt shingles are not the same as architectural or designer shingles. If the adjuster selects a lower grade than what was actually installed, every square foot of that material is underpriced.</li>
        <li><strong>Repair vs. replace.</strong> Some items have separate codes for repair and replacement. A repair code assumes the item stays in place and is fixed. A replacement code assumes the item is removed and a new one is installed. When an item is damaged beyond repair but the estimate uses a repair code, the policyholder receives compensation for a repair that cannot actually be performed.</li>
        <li><strong>Smaller size specifications.</strong> Plumbing pipes, electrical conduit, lumber dimensions, and many other items come in different sizes with different price points. Using the code for a 1/2-inch pipe when the actual pipe is 3/4-inch, or using a 2x4 lumber code when the actual framing is 2x6, produces a systematically lower estimate.</li>
        <li><strong>Remove and replace vs. remove only.</strong> A &quot;remove and replace&quot; (R&amp;R) line item pays for both taking out the old and installing the new. A &quot;remove only&quot; line item pays for demolition but not installation. If the estimate shows &quot;remove&quot; but not &quot;replace&quot; for an item that must be restored, half the work is unpaid.</li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        These are not hypothetical examples. They appear in carrier estimates with remarkable regularity. The only way to catch them is to review the actual selector codes &mdash; not just the descriptions &mdash; and compare them against the materials and conditions documented at the property. This is one of the many reasons that obtaining the <Link href="/resources/esx-file-rights-xactimate" className="text-[#2E74B5] underline">native ESX file</Link> is so important: the PDF printout often truncates or obscures selector codes that are fully visible in the electronic file.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Combined vs. Separate Line Items: The Bundling Problem</h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">How Operations Get Combined</h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        In the real world, construction and restoration work involves many discrete operations. Replacing a section of drywall, for example, involves removing the damaged drywall, disposing of the debris, installing new drywall, taping the seams, applying joint compound in multiple coats with sanding between coats, priming, and painting. Each of these is a separate task requiring separate skills, separate materials, and in many cases separate tradespeople.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Xactimate recognizes this by offering both &quot;combined&quot; line items (which bundle multiple operations into a single price) and separate line items for each individual operation. The combined items are convenient for simple, small-scale work. But they are not always appropriate, and they are not always cheaper than the sum of the separate items &mdash; in fact, they often are cheaper, which is precisely why they appear in carrier estimates for work that should be separately priced.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">When Bundling Becomes a Problem</h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The issue arises when a combined line item is used for work that is more complex, more labor-intensive, or involves more steps than the combined item accounts for. Consider a scenario where water damage requires removing and replacing drywall on a ceiling. The combined &quot;remove and replace drywall&quot; line item may assume straightforward access, standard ceiling height, and simple geometry. But if the actual ceiling is twelve feet high, requires scaffolding, has irregular angles from a vaulted design, and involves working around a chandelier that must be temporarily removed and reinstalled, the combined line item does not capture the true cost.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        In those situations, the estimate should use separate line items for each component: the drywall removal, the drywall installation at the appropriate height, the scaffolding, the detach-and-reset for the chandelier, the taping and mudding, and the painting. Each separate line item has its own price that reflects the actual labor and material involved. Using the combined item instead effectively absorbs all of those separate costs into a single, lower number.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Another common example involves flooring transitions. When flooring is replaced in one room but not an adjacent room, the transition between the two flooring surfaces requires its own line item &mdash; a T-molding, reducer strip, or threshold. This is a separate operation with a separate material and separate labor. But if the adjuster uses a single combined flooring line item and treats the transition as &quot;included,&quot; the transition disappears from the estimate.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The key question is always whether the combined line item&apos;s price actually covers all the work that will be performed. If it does, there is no problem. If it does not, the policyholder is subsidizing the difference.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Minimum Charge Suppression</h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">What Minimum Charges Are</h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Xactimate includes minimum charge thresholds for many line items. A minimum charge reflects the reality that certain types of work have a fixed mobilization cost regardless of the quantity of work performed. A plumber who drives to a property, sets up, replaces a single section of pipe, and cleans up does not charge proportionally to the linear footage replaced. The trip, the setup, the permitting, and the cleanup cost the same whether the job is two feet of pipe or twenty.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Xactimate addresses this by building minimum charges into certain line items. If the quantity entered is below the minimum threshold, the software applies the minimum charge instead of the per-unit price multiplied by the small quantity. This prevents the estimate from generating absurdly low prices for small but necessary tasks.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">How Minimums Get Suppressed</h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Minimum charge suppression takes several forms. In some cases, an adjuster manually overrides the minimum charge in the <Link href="/resources/esx-file-rights-xactimate" className="text-[#2E74B5] underline">ESX file</Link>, entering a quantity-based price that falls below the minimum threshold. Xactimate allows this &mdash; it is a user-overridable setting &mdash; but the fact that the software allows it does not mean it reflects the actual cost of the work.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        In other cases, the manipulation is more subtle. An adjuster may combine small quantities of similar work from different rooms into a single aggregated line item, which pushes the total quantity above the minimum threshold and avoids triggering the minimum charge for each location. This might sound efficient, but it ignores the reality that the tradesperson must actually visit each room, set up in each room, and perform the work in each room separately. The mobilization cost exists for each location, not once for the entire property.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        A third variation involves splitting a single operation into multiple sub-operations, each priced individually at quantities that avoid triggering any minimum. By breaking the work into smaller pieces, the estimate generates a total that is less than the minimum charge the whole operation would have triggered.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Regardless of the method, the result is the same: the estimate produces a price that no contractor in the market would accept for the work described. The minimum charge exists because Verisk&apos;s market research determined that below a certain quantity, the cost of performing the work does not scale linearly with quantity. Overriding that determination without a documented reason is not estimating &mdash; it is just paying less.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Category Manipulation: Putting Items in the Wrong Place</h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">How Categories Affect Pricing</h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Xactimate organizes line items into categories &mdash; roofing, drywall, flooring, plumbing, electrical, painting, and so on. These categories are not just organizational labels. They can affect pricing, overhead and profit calculations, and the way trades are counted for purposes of <Link href="/resources/overhead-and-profit" className="text-[#2E74B5] underline">overhead and profit</Link> and the <Link href="/resources/xactimate-labor-efficiency-settings" className="text-[#2E74B5] underline">labor efficiency factor</Link>.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        In particular, the number of distinct trade categories in an estimate is directly relevant to the question of whether overhead and profit should be included. The industry-standard threshold &mdash; often called the <Link href="/resources/overhead-and-profit" className="text-[#2E74B5] underline">&quot;three-trade rule&quot;</Link> &mdash; holds that when a claim involves three or more distinct trades, a general contractor is needed to coordinate the work, and the estimate should include overhead and profit to compensate that general contractor.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This creates a perverse incentive for category assignment. If an estimate can be structured so that items fall into fewer categories, it becomes easier to argue that overhead and profit are not warranted. The actual work has not changed. The number of tradespeople needed has not changed. But the estimate has been organized to minimize the apparent number of trades involved.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Common Category Issues</h3>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Placing specialty items in general categories.</strong> HVAC duct cleaning, for example, might be placed in a general &quot;cleaning&quot; category rather than in the HVAC category. This avoids counting HVAC as a separate trade. The pricing may or may not be affected, but the trade count &mdash; and therefore the overhead-and-profit analysis &mdash; is.</li>
        <li><strong>Combining electrical and plumbing under &quot;general.&quot;</strong> Some estimates place small electrical and plumbing items in a general category rather than in their trade-specific categories. Again, this can reduce the visible number of trades.</li>
        <li><strong>Miscategorizing exterior work.</strong> Exterior painting might be lumped with interior painting, or soffit repair might be placed in a siding category rather than a separate carpentry or trim category. The choice of category can also affect the applicable labor rate, since exterior work may have different labor pricing than interior work for the same material.</li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        Category manipulation is harder to detect than other forms of line item manipulation because it does not necessarily change the price of any individual item. Its effect is structural &mdash; it reshapes the architecture of the estimate in ways that affect downstream calculations, particularly overhead and profit. The only way to catch it is to review the estimate with an understanding of how Xactimate&apos;s categories interact with its pricing logic.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Missing Line Items: What Should Be There but Isn&apos;t</h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">The Difference Between &quot;Included&quot; and &quot;Missing&quot;</h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        An item marked as &quot;included&quot; at least acknowledges the item&apos;s existence, even if the designation is wrong. A missing line item is worse &mdash; it is an item that should appear in the estimate but simply does not. The work needs to happen. The cost is real. But no one has accounted for it. This is the most straightforward form of estimate manipulation, and it is also the most common.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Missing items fall into several recurring categories. Understanding these categories is the key to conducting a meaningful review of any <Link href="/resources/how-to-challenge-xactimate-estimate" className="text-[#2E74B5] underline">carrier estimate</Link>.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">R&amp;R vs. R&amp;I (Remove and Replace vs. Remove and Install)</h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        One of the most subtle omission patterns involves the distinction between &quot;remove and replace&quot; (R&amp;R) and &quot;remove and install&quot; or &quot;detach and reset&quot; (D&amp;R, also written R&amp;I for &quot;remove and install&quot;). These are fundamentally different operations.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        R&amp;R means the existing item is removed and discarded, and a brand-new item is installed. The line item price includes the cost of the new material. D&amp;R (or R&amp;I) means the existing item is carefully removed intact, stored or set aside during the repair work, and then reinstalled in its original location. The line item price includes only the labor to remove and reinstall &mdash; no new material.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The problem arises in two directions. First, items that need to be replaced (R&amp;R) are sometimes coded as detach-and-reset (D&amp;R), eliminating the cost of the replacement material. A smoke-damaged light fixture that cannot be cleaned and must be replaced should be coded as R&amp;R. If it is coded as D&amp;R, the estimate pays only for removal and reinstallation of the damaged fixture &mdash; not for a new one.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Second &mdash; and more commonly &mdash; items that need to be detached and reset are simply not in the estimate at all. When drywall is being replaced, everything attached to that drywall &mdash; outlet covers, switch plates, towel bars, shelving brackets, picture rail, crown molding, base shoe &mdash; must be removed before the drywall comes out and reinstalled after the new drywall goes up. Each of those items is a separate D&amp;R line item. In many carrier estimates, these items are simply absent.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Content Manipulation</h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Contents &mdash; your personal belongings &mdash; are sometimes addressed on a separate contents estimate, but the structural estimate should still include line items for content-related operations. These include:
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Content manipulation (move-out).</strong> Moving furniture and belongings out of a room so that repair work can proceed. Xactimate has specific line items for this, typically priced per room.</li>
        <li><strong>Content manipulation (move-back).</strong> Moving items back into the room after repairs are complete. This is a separate operation from the move-out.</li>
        <li><strong>Content protection.</strong> Covering and protecting belongings that remain in the home during construction. Plastic sheeting, drop cloths, and the labor to install them are separate line items.</li>
        <li><strong>Pack-out and pack-back.</strong> For larger losses, contents may need to be professionally packed, inventoried, transported to a storage facility, stored, and returned after repairs. Each step in this process has its own <Link href="/resources/contents-claims" className="text-[#2E74B5] underline">Xactimate line items</Link>.</li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        These items are frequently omitted from carrier estimates because they are easy to overlook and because they represent significant cost. A whole-house content manipulation for a four-bedroom home &mdash; moving furniture in and out of every affected room &mdash; can cost thousands of dollars. Omitting it from the estimate does not mean the furniture will magically relocate itself.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Protection and Setup Items</h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Before construction work begins, the unaffected portions of the property must be protected from construction dust, debris, paint overspray, and foot traffic. These protection measures have their own Xactimate line items:
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Floor protection.</strong> Ram board, builder&apos;s paper, or plastic sheeting to protect finished floors in work areas and pathways.</li>
        <li><strong>Dust barriers.</strong> Poly sheeting hung to create containment between work areas and living spaces, including the frames and tape to secure them.</li>
        <li><strong>HVAC protection.</strong> Covering supply and return registers to prevent construction dust from entering the ductwork system.</li>
        <li><strong>Fixture protection.</strong> Covering or wrapping cabinets, countertops, appliances, and fixtures that remain in place during adjacent work.</li>
        <li><strong>Equipment setup and teardown.</strong> The labor and materials for establishing a safe, contained work area &mdash; and for removing all protection materials when the job is complete.</li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        These items are not optional extras. They are standard construction practice, they are separately priced in Xactimate because they are not included in the price of the repair work, and they are essential to preventing secondary damage to the property during repairs. Omitting them from the estimate creates a false choice: either the contractor does not protect the home (and the policyholder suffers additional damage), or the contractor absorbs the cost (and the policyholder&apos;s <Link href="/resources/estimate-bid-invoice-xactimate" className="text-[#2E74B5] underline">estimate does not reflect the actual cost of restoration</Link>).
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Cleaning Items</h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        After construction work is complete, the property must be cleaned. This is not a quick sweep with a broom. Post-construction cleaning involves removing drywall dust from every surface, cleaning HVAC registers and returns, washing windows and glass that were exposed to construction debris, cleaning light fixtures, and performing a final detail cleaning of the entire affected area. These are separately priced line items in Xactimate, and they are commonly omitted.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        For fire and smoke losses, cleaning is even more extensive. Smoke residue must be removed from walls, ceilings, contents, ductwork, and structural cavities. Different types of smoke (protein, synthetic, wood) require different cleaning methods, each with its own line item and price point. Using the wrong cleaning code &mdash; or omitting cleaning entirely &mdash; can eliminate thousands of dollars from a fire claim estimate.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">The Included Items List: Your Reference Document</h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">What Verisk Publishes</h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Verisk &mdash; the company that develops and maintains Xactimate &mdash; publishes documentation on what each line item includes in its price. This documentation is sometimes referred to as the &quot;included items list,&quot; the &quot;line item inclusions,&quot; or the Xactimate &quot;white papers.&quot; These documents are the authoritative source for resolving any dispute about whether a particular operation is included in another line item&apos;s price or should be priced separately.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The included items list is available within the Xactimate software itself. When you click on a line item, you can access its detail view, which shows what the item&apos;s price covers &mdash; materials, labor components, equipment &mdash; and, critically, what it does <em>not</em> cover. Verisk also publishes broader reference documents, including the <Link href="/resources/how-to-read-verisk-white-paper" className="text-[#2E74B5] underline">Verisk white papers</Link>, that discuss pricing methodology, inclusions, and how line items are constructed.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">How to Use It</h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        When you encounter an item that you believe should be separately priced but the carrier claims is &quot;included,&quot; the first step is to check Verisk&apos;s documentation. Open the parent line item &mdash; the one the carrier says includes the disputed item &mdash; and review its published inclusions. If the disputed item appears on the included list, the carrier&apos;s position may be correct (though you should verify that the specific conditions match). If the disputed item does not appear on the included list, you have Verisk&apos;s own documentation supporting your position that it should be separately priced.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This is a powerful advocacy tool because it removes the argument from the realm of opinion. You are not asking the carrier to take your word for it. You are not relying on a contractor&apos;s assertion. You are pointing to the documentation published by the company whose pricing database the carrier chose to use. The carrier selected Xactimate as its estimating platform. The carrier relies on Xactimate&apos;s prices. The carrier cannot selectively accept Xactimate&apos;s prices while rejecting the very documentation that defines what those prices include.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">How to Identify Line Item Manipulation</h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Start with the ESX File</h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The most important first step is to <Link href="/resources/esx-file-rights-xactimate" className="text-[#2E74B5] underline">obtain the native ESX file</Link>, not just the PDF printout. The ESX file contains data that the PDF does not show, including user-modified pricing, suppressed minimum charges, labor efficiency settings, and the complete line item detail that may be summarized or truncated in the PDF. Without the ESX file, you are reviewing a curated summary of the estimate rather than the estimate itself.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Compare Against Verisk&apos;s Documentation</h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        For every item in the estimate that seems underpriced or that you expected to see separately but cannot find, check Verisk&apos;s included items documentation. The question is simple: does Verisk say this item is included in another line item&apos;s price, or does Verisk say it should be separately priced? If Verisk says separate, and the estimate either omits the item or claims it is included, you have identified a discrepancy.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Verify Selector Codes Against Actual Conditions</h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Go through the estimate line by line and compare every selector code against the actual materials and conditions documented at the property. This requires documentation &mdash; photographs, material samples, manufacturer labels, contractor assessments &mdash; that establishes what was actually present before the loss. If the estimate uses a code for builder-grade materials and your documentation shows premium-grade materials, you have identified a wrong code.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Check for Missing Categories of Work</h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Walk through the repair process mentally and ask whether every category of work is represented. Demolition. Debris removal. Protection. Content manipulation. The actual repair work by trade. Painting. Cleaning. Temporary repairs. Permits. Each of these categories should have its own line items in the estimate. If any category is absent, those line items are missing.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Look for Price Overrides</h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        In the ESX file, check whether any line item prices have been manually overridden by the adjuster. Xactimate flags user-modified prices with an indicator that is visible in the ESX file but may not appear on the PDF. A price override means the adjuster deliberately changed the Xactimate database price &mdash; either up or down &mdash; for a specific item. Every override should be examined and justified. An override that reduces the price below the database level without an explanation is a red flag.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Review the Labor Efficiency Setting</h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The <Link href="/resources/xactimate-labor-efficiency-settings" className="text-[#2E74B5] underline">labor efficiency setting</Link> is a global multiplier that adjusts every labor-based line item in the estimate. It can dramatically affect the total. Review this setting to ensure it reflects the actual conditions of the project. Restoration work in an occupied, partially damaged home is not the same as new construction in an empty building. The labor efficiency setting should reflect that reality.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">How to Challenge Line Item Manipulation</h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Reference Verisk&apos;s Own Documentation</h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The most effective challenge to any form of line item manipulation is Verisk&apos;s own published documentation. When you write a supplement or a dispute letter, cite the specific Verisk reference that supports your position. If Verisk says texture is not included in the drywall line item, quote or reference the Verisk document. If Verisk says content manipulation is a separate line item, cite the selector code and the documentation that shows it is not included in any repair line item.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This approach is effective for a simple reason: the carrier cannot credibly argue that Xactimate&apos;s prices are reliable while simultaneously arguing that Xactimate&apos;s own documentation about what those prices include is wrong. The carrier chose this tool. The carrier relies on this pricing database. The carrier must accept the database&apos;s definitions of what each line item covers.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Provide the Correct Line Item Codes</h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Do not just point out what is wrong. Provide the correct answer. If the carrier used a patch code when replacement is needed, identify the correct replacement code, include its selector number, its description, and the price from the applicable Xactimate price list. If the carrier used a builder-grade material code when premium is required, provide the correct premium code. Making the correction as specific and easy to verify as possible eliminates the carrier&apos;s ability to claim the dispute is vague or unsupported.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This is one of the advantages of understanding <Link href="/resources/how-to-challenge-xactimate-estimate" className="text-[#2E74B5] underline">how to challenge an Xactimate estimate</Link> at the code level. You are not having an abstract conversation about whether the repair cost is fair. You are identifying a specific code that is wrong, providing the specific code that is right, and showing the price difference. The dispute becomes about facts, not opinions.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Explain Why Separate Pricing Is Required</h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        When the dispute involves combined vs. separate line items, explain why the combined item does not capture the full scope of work. Document the specific conditions that make the combined item inadequate: the ceiling height, the limited access, the need for scaffolding, the specialty finish. Each condition should reference either a separate Xactimate line item that addresses it or a documented construction standard that requires it.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The distinction between <Link href="/resources/scope-vs-price-disputes" className="text-[#2E74B5] underline">scope disputes and price disputes</Link> is important here. If the carrier agrees the work needs to be done but disputes the price, you may be in appraisal territory. If the carrier denies that the work needs to be done at all, you have a coverage or scope dispute that requires a different resolution path.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Build a Line-by-Line Comparison</h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The most powerful supplement is a line-by-line comparison that shows the carrier&apos;s estimate next to your corrected estimate. For each discrepancy, show: (1) the carrier&apos;s line item code and price, (2) the correct line item code and price, (3) the reason for the correction, and (4) the Verisk reference that supports the correction. This format makes it extremely difficult for the carrier to dismiss your supplement as a generalized complaint about the total.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        When you present a supplement that identifies thirty specific line item errors, each one supported by Verisk&apos;s documentation, the carrier must address each one individually. They cannot wave away thirty documented corrections with a single sentence. Each correction requires a response. And for corrections that are clearly supported by Verisk&apos;s own publications, the carrier&apos;s options for refusal narrow considerably.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Support Your Position with Contractor Documentation</h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        While Verisk&apos;s documentation is the primary tool for challenging line item manipulation within the Xactimate framework, independent contractor documentation strengthens the argument further. A contractor&apos;s <Link href="/resources/estimate-bid-invoice-xactimate" className="text-[#2E74B5] underline">written estimate or detailed bid</Link> that itemizes each operation separately &mdash; and that matches or exceeds the Xactimate pricing you are proposing &mdash; demonstrates that your corrected estimate reflects real-world costs.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The contractor does not need to use Xactimate to be useful in this context. In fact, a non-Xactimate estimate can be particularly valuable because it shows what the work actually costs in the open market, independent of any estimating platform&apos;s database. If a licensed general contractor prices the job at $85,000 using traditional takeoff methods, and your corrected Xactimate estimate arrives at $82,000, and the carrier&apos;s manipulated Xactimate estimate shows $54,000, the story tells itself.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">The Cumulative Effect: Why Small Manipulations Matter</h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        No single line item manipulation is likely to be the difference between a fair settlement and an unfair one. The power of these techniques lies in their cumulative effect. Consider a moderately complex residential fire claim &mdash; say, a kitchen fire with smoke damage extending to adjacent rooms. The legitimate repair cost might be $95,000. Here is how line item manipulation can erode that number:
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Missing content manipulation for six affected rooms: -$3,200</li>
        <li>Missing protection and setup items: -$1,800</li>
        <li>Using patch codes instead of replacement codes for drywall in three rooms: -$2,400</li>
        <li>Treating texture matching as &quot;included&quot; when it is separately priced: -$1,600</li>
        <li>Omitting baseboard and trim D&amp;R for flooring replacement: -$1,100</li>
        <li>Using builder-grade material codes for premium-grade cabinets: -$4,500</li>
        <li>Combining separate trades into fewer categories to avoid O&amp;P: -$8,000</li>
        <li>Missing post-construction cleaning: -$1,400</li>
        <li>Suppressed minimum charges on small plumbing and electrical items: -$900</li>
        <li>Missing paint masking and preparation: -$800</li>
        <li>Omitting smoke cleaning line items for affected but non-demolished areas: -$2,100</li>
        <li>Using wrong cleaning codes (light clean vs. heavy clean) for smoke residue: -$1,200</li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        Total reduction: approximately $29,000 &mdash; more than 30% of the actual repair cost. And not a single one of these items involved a coverage denial. Not one required the carrier to cite a policy exclusion or issue a declination letter. Every one of these reductions was accomplished through the technical structure of the Xactimate estimate itself.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This is what makes line item manipulation so effective and so difficult to combat without expertise. The estimate looks complete. It has line items for every room. It has measurements and quantities. It produces a total that might seem reasonable to someone who does not know what the repairs actually cost. The only way to identify the shortfall is to examine the estimate at the code level, compare it against Verisk&apos;s documentation, and verify every line item against the actual conditions of the loss.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">When to Seek Professional Help</h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Identifying and challenging line item manipulation requires a working knowledge of Xactimate, access to the software and its documentation, and the experience to know what should be in an estimate based on the type and extent of damage. Some policyholders with construction backgrounds can do this effectively on their own. Most cannot.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        If your claim involves significant damage &mdash; and especially if the gap between the carrier&apos;s estimate and your contractor&apos;s estimate is large &mdash; consider engaging a <Link href="/resources/public-adjuster" className="text-[#2E74B5] underline">licensed Public Adjuster</Link> who can conduct a forensic review of the carrier&apos;s ESX file, identify every instance of line item manipulation, and prepare a properly documented supplement. Public adjusters who specialize in Xactimate work will have their own subscriptions to the software, access to Verisk&apos;s documentation, and the ability to produce a corrected estimate that stands up to scrutiny.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        For claims where the underpayment is substantial and the carrier will not negotiate in good faith, an <Link href="/resources/scope-vs-price-disputes" className="text-[#2E74B5] underline">attorney experienced in first-party insurance disputes</Link> can evaluate whether the pattern of manipulation rises to the level of bad faith or violates the state&apos;s fair claims settlement practices regulations. Systematic use of wrong codes, unsupported &quot;included&quot; designations, and suppressed minimums &mdash; particularly when applied as a pattern across many claims &mdash; may support claims beyond simple breach of contract.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Key Takeaways</h2>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>&quot;Included&quot; in Xactimate means the cost is built into another line item&apos;s price. It does not mean the work is free or unnecessary. When a carrier marks an item as &quot;included&quot; without Verisk&apos;s documentation supporting that designation, the item has been effectively removed from the estimate without a formal denial.</li>
        <li>Wrong line item codes &mdash; using cheaper materials, lower grades, or patch codes instead of replacement codes &mdash; systematically reduce the estimate without obviously omitting any category of work.</li>
        <li>Combining separate operations into a single cheaper line item eliminates the individual pricing of each component task, producing a total that does not reflect the actual labor and material costs.</li>
        <li>Minimum charge suppression overrides Verisk&apos;s market-based determination that small jobs have a floor cost regardless of quantity.</li>
        <li>Category manipulation restructures the estimate to reduce the apparent number of trades, undermining the basis for <Link href="/resources/overhead-and-profit" className="text-[#2E74B5] underline">overhead and profit</Link>.</li>
        <li>Missing line items &mdash; including D&amp;R items, content manipulation, protection, setup, and cleaning &mdash; represent real costs that the policyholder will bear but that the estimate does not fund.</li>
        <li>Verisk&apos;s own documentation &mdash; the included items list and the <Link href="/resources/how-to-read-verisk-white-paper" className="text-[#2E74B5] underline">white papers</Link> &mdash; is the authoritative reference for resolving disputes about what is and is not included in each line item&apos;s price.</li>
        <li>The <Link href="/resources/esx-file-rights-xactimate" className="text-[#2E74B5] underline">ESX file</Link> is essential for identifying manipulation that is hidden in the PDF printout, including price overrides, suppressed minimums, and labor efficiency settings.</li>
        <li>Effective challenges provide the correct line item codes, cite Verisk&apos;s documentation, and present a line-by-line comparison between the carrier&apos;s estimate and the corrected estimate.</li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        Line item manipulation is not a single tactic. It is a spectrum of estimating choices &mdash; each one defensible in isolation, each one reducing the payout by a modest amount, and all of them compounding into an estimate that falls far short of the actual cost of repairs. The only defense is knowledge: understanding how the estimate was built, what it should contain, and what the authoritative documentation says about each disputed item.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Your insurance policy promises to make you whole. That promise is fulfilled &mdash; or broken &mdash; one line item at a time.
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
