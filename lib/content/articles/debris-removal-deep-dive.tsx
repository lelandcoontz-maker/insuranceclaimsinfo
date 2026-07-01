import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: "Debris Removal: The Hidden Six-Figure Coverage",
  description:
    "Debris removal can add six figures to a claim: demolition, hauling, dump fees, asbestos abatement, hazmat protocols, and environmental compliance costs.",
  summary:
    'Debris removal coverage can add substantial money to a claim, covering demolition, hauling, dump fees, and any required asbestos or hazmat handling. Insurers routinely underpay it, so account for full removal and disposal costs separately.',
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
        Debris removal is the coverage nobody thinks about until they&apos;re staring at a pile of rubble where their home used to be. And by the time they do think about it, the insurance company has already written a lowball estimate that ignores the actual cost of demolition, hauling, dump fees, asbestos abatement, hazmat protocols, and environmental compliance.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        After handling hundreds of fire, water, and vandalism claims, I can tell you this: debris removal is one of the most consistently underpaid coverages in property insurance. The gap between what carriers estimate and what demolition actually costs can be tens of thousands of dollars &mdash; sometimes six figures on total loss claims. This article explains why and shows you how to close that gap.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What &ldquo;Debris Removal&rdquo; Actually Covers
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most homeowners think debris removal means &ldquo;hauling away the rubble.&rdquo; That&apos;s only the beginning. Under your insurance policy, debris removal covers the full cost of:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Demolition</strong> &mdash; Tearing down damaged or destroyed structures, which may require heavy equipment, structural engineering assessment, and specialized crews</li>
        <li><strong>Hauling</strong> &mdash; Loading debris into trucks and transporting it to disposal sites</li>
        <li><strong>Dump fees</strong> &mdash; Tipping fees at landfills, which have skyrocketed in California and vary dramatically by material type</li>
        <li><strong>Hazardous material abatement</strong> &mdash; Asbestos removal, lead paint remediation, and other hazmat protocols required by law</li>
        <li><strong>Environmental testing</strong> &mdash; Soil testing for contamination, asbestos testing before demolition, lead paint testing in pre-1978 structures</li>
        <li><strong>Permits</strong> &mdash; Demolition permits, which many municipalities require before any structure is torn down</li>
        <li><strong>Site preparation</strong> &mdash; Grading, soil remediation, and preparation of the site for rebuilding after debris is removed</li>
        <li><strong>Tree and vegetation removal</strong> &mdash; Damaged or destroyed landscaping, including stump grinding and root removal</li>
        <li><strong>Personal property disposal</strong> &mdash; Hauling away destroyed contents, furniture, and belongings that cannot be salvaged</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why Insurance Companies Underpay Debris Removal
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        1. They Estimate as if It&apos;s Simple Demolition
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance adjusters often estimate debris removal as a straightforward demolition job: knock it down, load it up, haul it away. In reality, modern demolition &mdash; especially after fire or water damage &mdash; is anything but simple.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Every demolition project requires consideration of:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>What&apos;s in the debris.</strong> A house built before 1978 likely contains asbestos in floor tiles, pipe insulation, textured ceiling material, and/or roofing. A house built before 1978 also likely contains lead paint. Both require specialized abatement before general demolition can begin.</li>
        <li><strong>How the debris is classified.</strong> Mixed construction debris, hazmat materials, and general waste go to different facilities with different tipping fees. Some materials require chain-of-custody documentation.</li>
        <li><strong>What the municipality requires.</strong> Many California cities require demolition permits, asbestos survey results before permit issuance, and post-demolition site inspection.</li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        2. They Ignore Hazardous Material Costs
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the big one. The single largest cost driver in modern demolition &mdash; and the most commonly excluded item from insurance estimates &mdash; is hazardous material abatement.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Asbestos:</strong> California law requires an asbestos survey before any demolition of a building with more than 100 square feet of disturbance. If asbestos-containing materials (ACMs) are found, they must be removed by a licensed asbestos abatement contractor following strict protocols:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Negative pressure containment</li>
        <li>HEPA filtration</li>
        <li>Worker PPE (respirators, Tyvek suits)</li>
        <li>Wet removal methods</li>
        <li>Proper packaging and labeling of waste</li>
        <li>Transport by licensed hauler to certified disposal site</li>
        <li>Air monitoring during and after removal</li>
        <li>Final clearance testing</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The cost of asbestos abatement on a single-family home can range from $5,000 for minor ACM removal to $50,000 or more for extensive contamination. Insurance adjusters routinely leave this cost out of their estimates entirely.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Lead paint:</strong> Pre-1978 homes are presumed to contain lead paint under EPA regulations. Demolition that disturbs lead paint requires contractors certified under the EPA&apos;s Renovation, Repair, and Painting (RRP) Rule. This adds cost for worker protection, containment, and proper disposal of lead-contaminated debris.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Other hazardous materials:</strong> Depending on the structure, you may encounter:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Treated lumber containing arsenic (CCA treatment, common in decks and outdoor structures)</li>
        <li>Mercury in thermostats and fluorescent lighting</li>
        <li>PCBs in older electrical equipment</li>
        <li>Refrigerants in HVAC systems (require EPA-certified recovery)</li>
        <li>Underground storage tanks (heating oil)</li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        3. Dump Fees Have Skyrocketed
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Landfill tipping fees in California have increased dramatically over the past decade. As of 2025-2026, typical tipping fees in Southern California are:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>General construction debris:</strong> $60&ndash;$100 per ton</li>
        <li><strong>Mixed waste (unsorted):</strong> $80&ndash;$150 per ton</li>
        <li><strong>Asbestos-containing materials:</strong> $150&ndash;$400 per ton (specialized disposal)</li>
        <li><strong>Contaminated soil:</strong> $100&ndash;$300 per ton</li>
        <li><strong>Electronic waste:</strong> Special handling fees apply</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance adjusters often use outdated or below-market dump fee rates in their estimates. On a total loss demolition that generates 200+ tons of debris, even a $30-per-ton underestimate adds up to $6,000 in underpayment.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        4. They Don&apos;t Account for Post-Disaster Pricing
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        After a major disaster like the Palisades Fire, the demand for demolition services overwhelms the local supply. Contractors, haulers, and disposal sites are all operating at capacity. The economic reality is that debris removal costs after a declared disaster are significantly higher than normal market rates due to:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Labor premiums for crews working extended hours</li>
        <li>Equipment rental surcharges</li>
        <li>Increased fuel costs for haul routes (detours, longer distances to available disposal sites)</li>
        <li>Premium tipping fees at the few landfills accepting disaster debris</li>
        <li>Emergency mobilization costs</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your policy pays for what it actually costs &mdash; not what it would cost in normal circumstances. If debris removal costs $80,000 because of post-disaster conditions, that&apos;s what your carrier owes, regardless of what their Xactimate estimate says the job &ldquo;should&rdquo; cost.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Two Types of Debris Removal Coverage
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your policy likely provides debris removal coverage in two separate places:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Dwelling Debris Removal
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most homeowners policies include debris removal as part of the dwelling coverage. Typically, the policy allocates a percentage &mdash; often 5% &mdash; of Coverage A for debris removal. So if your dwelling coverage limit is $500,000, you have $25,000 specifically earmarked for debris removal.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Critical point:</strong> This 5% is in ADDITION to your dwelling coverage limit, not part of it. Many adjusters fail to mention this, effectively taking $25,000 off the table. If your dwelling limit is $500,000, your total available coverage for the dwelling AND debris removal is $525,000 &mdash; not $500,000.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Coverage B / Coverage C Debris Removal
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Debris removal also applies to other structures and personal property. The cost of hauling away destroyed personal property &mdash; furniture, appliances, clothing, electronics &mdash; is a debris removal expense, not a contents valuation issue.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Think about what happens after a fire: everything that&apos;s destroyed needs to be inventoried (for the contents claim), then physically removed from the property, loaded into trucks, hauled to the dump, and disposed of. The cost of that physical removal and disposal is a debris removal expense that&apos;s separate from the value of the items themselves.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What the Adjuster&apos;s Estimate Misses: A Real-World Checklist
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here&apos;s what I routinely find missing from insurance company debris removal estimates:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Pre-Demolition Requirements
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Asbestos survey / testing ($2,000&ndash;$5,000)</li>
        <li>Lead paint assessment ($1,000&ndash;$3,000)</li>
        <li>Demolition permit fees ($500&ndash;$5,000 depending on municipality)</li>
        <li>Engineering assessment for structural stability ($1,500&ndash;$5,000)</li>
        <li>Utility disconnection and capping (gas, electric, water, sewer)</li>
        <li>Tree protection / preservation measures for trees being kept</li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Abatement Costs
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Asbestos abatement ($5,000&ndash;$50,000+)</li>
        <li>Lead paint abatement (included in demo or separate)</li>
        <li>HVAC refrigerant recovery ($500&ndash;$2,000)</li>
        <li>Underground storage tank removal ($5,000&ndash;$15,000)</li>
        <li>Soil contamination testing ($2,000&ndash;$5,000)</li>
        <li>Contaminated soil removal and disposal ($100&ndash;$300/ton)</li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Demolition Proper
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Structural demolition (mechanical or manual)</li>
        <li>Foundation removal (often excluded from estimates but necessary)</li>
        <li>Below-grade structure removal (basements, retaining walls)</li>
        <li>Flatwork removal (driveways, walkways, patios)</li>
        <li>Pool demolition (if damaged &mdash; extremely expensive)</li>
        <li>Fencing and wall removal</li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Hauling and Disposal
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Loading debris into haul trucks</li>
        <li>Transport to disposal site (mileage matters &mdash; farther = more expensive)</li>
        <li>Tipping fees at current market rates (not the adjuster&apos;s outdated rates)</li>
        <li>Separate disposal for hazmat materials</li>
        <li>Recycling sorting (some municipalities require it)</li>
        <li>Multiple trips (a total loss generates far more debris than one truck load)</li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Site Restoration
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Rough grading after debris removal</li>
        <li>Erosion control measures (required in many jurisdictions)</li>
        <li>Soil compaction testing</li>
        <li>Final site survey</li>
        <li>Temporary fencing for security</li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Landscape Debris
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Tree removal (each tree: $500&ndash;$5,000+ depending on size and access)</li>
        <li>Stump grinding ($200&ndash;$1,000 per stump)</li>
        <li>Root removal for rebuilding area</li>
        <li>Dead vegetation removal</li>
        <li>Hardscape removal (damaged concrete, pavers, stonework)</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Asbestos Problem Nobody Wants to Talk About
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here&apos;s a reality that insurance adjusters don&apos;t want to acknowledge: a significant percentage of California homes built before 1980 contain asbestos-containing materials. And California law &mdash; specifically Cal/OSHA regulations and South Coast Air Quality Management District Rule 1403 &mdash; requires that asbestos be identified and properly removed before demolition.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This isn&apos;t optional. You can&apos;t just knock down a house and hope the asbestos wasn&apos;t a problem. The regulatory framework is clear:
      </p>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li><strong>Survey first.</strong> A certified asbestos inspector must survey the structure before demolition.</li>
        <li><strong>Notify the air district.</strong> If ACMs are found, the local air quality management district must be notified before removal begins.</li>
        <li><strong>Licensed abatement.</strong> Only licensed abatement contractors can remove asbestos. There are two types of licenses in California: those who can sell abatement work and sub it out, and those who can actually perform the work. Make sure your contractor has the right license.</li>
        <li><strong>Proper disposal.</strong> Asbestos waste must be wetted, double-bagged in labeled containers, transported by licensed haulers, and disposed of at facilities permitted to accept asbestos.</li>
        <li><strong>Air monitoring.</strong> During and after abatement, air monitoring must confirm that fiber levels are below regulatory thresholds.</li>
        <li><strong>Chain of custody.</strong> Documentation must track the asbestos from removal through final disposal.</li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        The cost of full regulatory compliance for asbestos abatement is substantial &mdash; and it&apos;s a legitimate debris removal expense that your policy covers. Insurance companies that exclude asbestos abatement from their debris removal estimates are underpaying your claim.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Get Fair Payment for Debris Removal
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 1: Get Your Own Demolition Bid
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Don&apos;t rely on the adjuster&apos;s Xactimate estimate for debris removal. Get a detailed bid from a licensed demolition contractor who includes:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Itemized costs for each phase of demolition</li>
        <li>Hazmat survey and abatement costs</li>
        <li>Current dump fees (not Xactimate default prices)</li>
        <li>Permit costs</li>
        <li>Site restoration</li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 2: Demand Asbestos Testing
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your home was built before 1980, insist on an asbestos survey before any demolition estimate is finalized. The insurance company cannot accurately estimate demolition costs without knowing whether hazmat abatement is required.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 3: Document Everything
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Photograph the property before any demolition begins</li>
        <li>Keep copies of all permits, invoices, and disposal manifests</li>
        <li>Document dump fee receipts &mdash; every load, every tipping fee</li>
        <li>Keep hazardous waste manifests and chain-of-custody documentation</li>
        <li>Get itemized invoices, not lump-sum bills</li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 4: Know Your Coverage Limits
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Review your declarations page for:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Coverage A debris removal percentage (typically 5%)</li>
        <li>Whether debris removal is additional coverage or included in your dwelling limit</li>
        <li>Any separate debris removal endorsement</li>
        <li>Coverage for trees, shrubs, and other landscaping</li>
        <li>Whether your policy has an extended replacement cost endorsement (which may also extend debris removal limits)</li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 5: Challenge the Estimate
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When the adjuster&apos;s debris removal estimate is too low &mdash; and it almost always is &mdash; send a detailed supplement request that includes:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Your contractor&apos;s itemized bid</li>
        <li>Current dump fee documentation</li>
        <li>Asbestos survey results and abatement bid</li>
        <li>Permit fee documentation</li>
        <li>Any other costs the adjuster&apos;s estimate excluded</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Landscaping Cleanup That Gets Overlooked
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        After a fire, the focus is naturally on the structure. But the landscaping debris can also be a significant cost:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Mature trees.</strong> A large tree that&apos;s been killed by fire can cost $2,000&ndash;$5,000 to remove, plus stump grinding. A property with a dozen trees is looking at $25,000&ndash;$60,000 just for tree removal.</li>
        <li><strong>Plants, trees, and shrubs coverage.</strong> Most policies include a separate coverage for plants, trees, and shrubs &mdash; often $5,000&ndash;$10,000 or more. This coverage is separate from debris removal and covers the value of the lost landscaping, not just the removal cost.</li>
        <li><strong>Hardscape.</strong> Damaged driveways, walkways, patios, retaining walls, and fencing all generate debris that must be removed. The removal cost is a debris removal expense; the replacement cost falls under the dwelling or other structures coverage.</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When Carriers Try to Limit Debris Removal
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Common carrier arguments &mdash; and how to counter them:
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>&ldquo;Debris removal is included in the dwelling estimate.&rdquo;</strong> No. The policy provides debris removal as a separate, additional coverage. The dwelling estimate covers the cost of repairing or replacing the structure. Debris removal covers the cost of removing damaged materials from the property. These are two different coverages, and the carrier can&apos;t combine them to reduce your payout.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>&ldquo;We don&apos;t pay for asbestos &mdash; that&apos;s a pre-existing condition.&rdquo;</strong> Wrong. The asbestos was encapsulated and harmless before the loss. The fire or damage event made demolition necessary, and demolition requires asbestos abatement. The abatement cost is a direct consequence of the covered loss, not a pre-existing condition. You didn&apos;t need to remove the asbestos until the covered event created the need for demolition.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>&ldquo;Our estimate includes debris removal at standard rates.&rdquo;</strong> Ask for the specific line items and rates. Compare them to current market rates and actual contractor bids. &ldquo;Standard rates&rdquo; in Xactimate may not reflect post-disaster pricing, current dump fees, or the specific conditions of your property.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>&ldquo;You don&apos;t need a permit for demolition.&rdquo;</strong> Check with your local building department. Many California municipalities absolutely require demolition permits, and some require proof of asbestos clearance before they&apos;ll issue the permit. The cost of regulatory compliance is part of the debris removal expense.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Bottom Line
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Debris removal coverage is real money &mdash; often $25,000 to $100,000 or more on a total loss claim. Insurance companies systematically underestimate this coverage by:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Ignoring hazardous material requirements</li>
        <li>Using outdated dump fee rates</li>
        <li>Excluding permit and regulatory compliance costs</li>
        <li>Treating complex demolition as simple hauling</li>
        <li>Failing to account for landscaping debris</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Don&apos;t leave this money on the table. Get your own demolition bids, demand asbestos testing, document every cost, and hold your carrier accountable for paying the actual cost of debris removal &mdash; not their fantasy number.
      </p>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">Need Help With Your Claim?</h3>
        <p className="text-gray-600 text-sm mb-4">A licensed Public Adjuster can review your situation and explain your options at no cost.</p>
        <Link href="/contact" className="inline-block bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-6 py-3 rounded-lg transition-colors">Request a Free Claim Review &rarr;</Link>
      </div>
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
