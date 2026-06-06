import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Xactimate Labor Efficiency Settings: How Restoration vs. Rebuild Changes Every Line Item on Your Estimate',
  description:
    "A guide on how Xactimate's labor efficiency settings affect every labor line item in an insurance estimate and how the wrong setting can systematically underpay an entire claim by thousands of dollars.",
  summary:
    'Xactimate\'s labor efficiency setting, restoration versus new construction (rebuild), changes the labor price on every line item. Carriers often use the cheaper \'new construction\' setting on repair work; the correct setting can substantially raise a fair estimate.',
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
        Your insurance company just sent you an estimate for storm damage repairs to your home. The estimate is forty-three pages of codes, quantities, and prices that you have no way to independently verify. But buried inside that estimate &mdash; not in the line items themselves, but in the global settings that control how every line item is priced &mdash; is a single selection that may have reduced the entire estimate by fifteen to thirty percent before a single line item was ever entered.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        That setting is the labor efficiency setting. It is one of the most consequential variables in the Xactimate estimating platform, and it is one of the least understood by policyholders, many attorneys, and even some adjusters. It is a global parameter that affects every labor calculation in the estimate. When it is set incorrectly, it does not just underprice one line item. It underprices all of them.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        And in a growing number of class action lawsuits filed across the country, policyholders are alleging that major carriers have been applying the wrong labor efficiency setting &mdash; not as an occasional mistake, but as a systematic practice that reduces claim payments on every partial-loss estimate they write.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">What Labor Efficiency Settings Are</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Every line item in an Xactimate estimate has a labor component. When the software prices a line item &mdash; say, removing and replacing drywall, or installing new flooring &mdash; it calculates the cost based on the time a tradesperson is expected to need to complete the task. That time is not a fixed number. It varies depending on the conditions under which the work is performed.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is a fundamental reality of construction. A drywall installer working in a brand-new, open-framed house with no furniture, no flooring to protect, no adjacent finishes to work around, and no homeowner asking questions can hang sheets faster and more efficiently than the same installer working in an occupied home where the living room furniture has been moved to the center of the room, the hardwood floors are covered with protective paper, and the family is eating dinner twenty feet away.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The time difference between those two scenarios is significant. It is not five percent. It is not trivial. It is the difference between a smooth production workflow and the stop-start, protect-everything, work-around-obstacles reality of restoration and remodeling work.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Xactimate accounts for this difference through labor efficiency settings. These settings apply a labor productivity factor to every line item in the estimate through what Verisk calls &quot;supporting events&quot; &mdash; additional time assumptions built into each line item for each trade that account for planning time, drive time, breaks, setup, cleanup, material handling, and the overall loss of productivity that comes from working in a restoration environment.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">The Three Labor Efficiency Categories</h2>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">1. Restoration/Service/Remodel</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the default setting for most insurance repair work. Verisk&apos;s own documentation describes this option as being &quot;for jobs other than total losses or new construction.&quot;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Restoration/Service/Remodel setting accounts for all the real-world inefficiencies of working in an existing, typically occupied structure:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Drive time and mobilization:</strong> Repair crews on restoration jobs often handle smaller scopes, meaning the fixed cost of mobilizing represents a larger proportion of total labor time.</li>
        <li><strong>Material delivery to an occupied structure:</strong> Materials must be brought through doorways and hallways while protecting existing finishes.</li>
        <li><strong>Protection of existing surfaces:</strong> Floors, walls, countertops, and other surfaces must be protected before work begins.</li>
        <li><strong>Working around contents:</strong> Furniture and personal belongings must be moved, covered, or worked around.</li>
        <li><strong>Demolition and removal:</strong> Damaged materials must be carefully removed while preserving adjacent finishes.</li>
        <li><strong>Matching to existing conditions:</strong> Repairs must match existing materials, textures, and finishes.</li>
        <li><strong>Work interruptions:</strong> Work may be interrupted by occupant needs in occupied structures.</li>
        <li><strong>Limited access and tight spaces:</strong> Restoration work often takes place in finished spaces with limited room to maneuver.</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        This setting produces the highest labor costs because it reflects the highest labor time per unit of work. It is the appropriate setting for the overwhelming majority of insurance repair claims.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">2. Large Restoration/Remodel</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the newer, middle-tier setting introduced by Verisk in response to industry feedback. It is designed for large-scale restoration or remodeling projects that share some characteristics of new construction &mdash; greater accessibility, larger work areas, the ability to schedule work more freely &mdash; while still involving the core complexities of working in an existing structure.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This setting reduces labor pricing by approximately 5 to 10 percent compared to the standard Restoration/Service/Remodel setting. It may be appropriate for large restoration projects where an entire floor is being gutted and rebuilt, but the structure itself is not a total loss.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">3. Total Rebuild or Similar</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This setting applies the most efficient labor productivity assumptions available. Verisk describes this setting as &quot;typical of work being performed on very large restoration/remodel jobs that are easily accessible for workers and are separated from adjacent finished areas.&quot;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Verisk&apos;s documentation states that this option &quot;should be used for ground-up rebuilds and new construction applications.&quot; The key phrase is &quot;ground-up rebuilds&quot; &mdash; meaning the structure has been demolished or destroyed and is being built from scratch. This setting produces the lowest labor costs because it reflects the most efficient possible working conditions: no existing finishes to protect, no occupants to work around, unrestricted access, and no demolition of existing materials.
      </p>

      <CalloutBox variant="warning" title="The Dollar Impact">
        <p>
          A single click changing the labor efficiency setting can reduce the entire estimate by thousands of dollars without changing a single measurement, material specification, or scope item. On an $80,000 repair where half the cost is labor, switching from Restoration to Total Rebuild can drop the total by $8,000 or more &mdash; and that difference did not come from removing any scope of work.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Why the Setting Matters So Much</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The labor efficiency setting is not a line-item adjustment. It is a global setting that applies to every labor line item in the entire estimate. When an estimator changes the setting from Restoration/Service/Remodel to Total Rebuild, they are reducing every line item that has a labor component &mdash; which is virtually every line item in the estimate.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The gap between Restoration/Service/Remodel and Total Rebuild pricing can range from 15 to 30 percent of the labor component of the estimate. Now multiply that across thousands of claims. If a carrier processes 50,000 partial-loss claims per year and each claim is underpriced by an average of $5,000 due to an incorrect labor efficiency setting, the aggregate underpayment is $250 million annually &mdash; from a single software setting.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">What Verisk&apos;s Own Documentation Says</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Verisk has published several white papers that explain how labor efficiency settings work and when each should be applied. The key documents include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>&quot;Labor Productivity in Xactimate Pricing&quot;</strong> &mdash; Explains that labor productivity is &quot;often the largest variable in construction or repair jobs&quot; and can be &quot;affected by many factors including accessibility, location, and quantity of work being performed.&quot;</li>
        <li><strong>&quot;Labor Efficiencies Design&quot;</strong> &mdash; Provides the technical architecture of the labor efficiency system and describes the Restoration/Service/Remodel option as being &quot;for jobs other than total losses or new construction.&quot;</li>
        <li><strong>&quot;Pricing Methodology Summary&quot;</strong> &mdash; Confirms that estimators must use &quot;their experience, skill, and knowledge to determine appropriate items, labor efficiency, and pricing.&quot;</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Several principles emerge from Verisk&apos;s own documentation: (1) the Restoration/Service/Remodel setting is the default for repair work; (2) the Total Rebuild setting is for ground-up rebuilds only; (3) the choice of setting is a judgment call that can be evaluated and challenged; and (4) labor is the largest variable in repair costs, meaning the labor efficiency setting has a disproportionate impact on the total estimate.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">How Carriers Get the Setting Wrong</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Policyholders across the country have reported &mdash; and class action lawsuits have alleged &mdash; that certain carriers systematically apply the New Construction or Total Rebuild labor efficiency setting to partial-loss repair estimates. The result is that every line item is priced at new construction labor rates, even though the actual work involves all the inefficiencies and complications of restoration work in an occupied home.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This pattern has drawn particular scrutiny in litigation against State Farm. Multiple lawsuits have alleged that State Farm &quot;discarded the industry practice&quot; of using the Restoration/Service/Remodel setting and instead used the New Construction setting to generate lower estimates for repair work that, by definition, is not new construction.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">The Litigation Landscape</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong><em>Mitchell v. State Farm Fire and Casualty Co.</em> (6th Cir.)</strong> &mdash; Involved State Farm&apos;s calculation of labor costs in Xactimate that led to the underpayment of 65,575 policyholders in Kentucky. The U.S. Court of Appeals for the Sixth Circuit approved class certification. The plaintiffs&apos; attorneys demonstrated that the error could have been corrected by simply changing a setting &mdash; State Farm needed only to &quot;unclick&quot; one box to generate correct values.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong><em>Young v. State Farm Fire and Casualty Co.</em> (S.D. Miss. 2024)</strong> &mdash; Directly challenged State Farm&apos;s use of the &quot;New Construction Labor Efficiency&quot; setting on partial-loss claims. The court ultimately ruled in favor of State Farm, concluding that the insurance policies did not impose an obligation to use a specific Xactimate setting. The judge found that the question was whether the payout was sufficient to cover repairs, not which methodology produced the figure.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong><em>Muenzenmay v. State Farm Fire and Casualty Co.</em> (S.D. Miss. 2026)</strong> &mdash; Filed in February 2026, this is among the most recent class actions challenging State Farm&apos;s use of the New Construction labor efficiency setting. The case is in its early stages.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        As policyholder attorney Chip Merlin has observed, lawsuits challenging the use of the New Construction Xactimate setting &quot;are starting to be filed on a more regular basis.&quot; The legal landscape is still developing.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">How to Identify the Wrong Setting on Your Estimate</h2>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Get the ESX file.</strong> Request the native Xactimate file from the carrier in writing. The PDF output may not display the labor efficiency setting. The ESX file contains the full estimate data including all settings and parameters.</li>
        <li><strong>Locate the labor efficiency setting.</strong> In Xactimate, it is found in the Pricing tab. Look for a dropdown labeled &quot;Labor Efficiency.&quot; The selected option will be one of the three categories.</li>
        <li><strong>Compare the setting to the actual project.</strong> Is this a partial-loss repair? Is the structure occupied? Are existing finishes being protected? Is there demolition work? If the answer to any of these is yes, the Total Rebuild setting is inappropriate.</li>
        <li><strong>Run the estimate both ways.</strong> Import the carrier&apos;s ESX file and change only the labor efficiency setting to Restoration/Service/Remodel. Compare the two totals. The difference is the amount attributable solely to the labor efficiency setting.</li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">What to Do About It</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Document the error in writing.</strong> Your written challenge should identify the labor efficiency setting used, state what setting should have been used and why, reference Verisk&apos;s own documentation, show the dollar impact based on your side-by-side comparison, and request that the carrier re-run the estimate with the correct setting.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Cite Verisk&apos;s own documentation.</strong> When you challenge a labor efficiency setting, you are pointing to the manufacturer&apos;s own documentation, which states clearly that the Restoration/Service/Remodel setting is for &quot;jobs other than total losses or new construction.&quot; Reference the specific white papers: <em>Labor Productivity in Xactimate Pricing</em>, <em>Labor Efficiencies Design</em>, and <em>Pricing Methodology Summary</em>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Present the side-by-side comparison.</strong> Running the estimate with both settings and presenting the comparison is one of the most effective tools available. The carrier cannot argue that the scope is different or the measurements are wrong. Everything is the same except the labor efficiency setting. The difference is pure underpayment.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Request the carrier&apos;s justification.</strong> Ask the carrier to explain why the Total Rebuild setting was selected for a partial-loss repair in an occupied home. Force the carrier to articulate a justification. In many cases, there is none &mdash; the setting was applied as a default without any analysis of actual project conditions.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Engage a public adjuster or attorney.</strong> If the carrier refuses to correct the setting, a licensed public adjuster can prepare a properly configured Xactimate estimate. An attorney can evaluate whether the carrier&apos;s conduct supports claims for breach of contract, bad faith, or unfair claims practices.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">The Bigger Picture</h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        The labor efficiency setting issue is part of a broader pattern in modern property insurance claims handling. As carriers have increasingly relied on estimating software to standardize and automate their processes, the settings and defaults within that software have become de facto claims handling practices. When a carrier selects a labor efficiency default that systematically reduces every estimate it writes, that is not a software configuration. It is a business decision about how much to pay on claims. Policyholders, public adjusters, and attorneys should treat the labor efficiency setting as a standard item to check on every Xactimate estimate they review. It takes minutes to identify. It can be worth thousands of dollars. And it is supported by the software manufacturer&apos;s own documentation.
      </p>

      <CalloutBox variant="warning" title="Sources and References">
        <p>
          Verisk, <em>Labor Productivity in Xactimate Pricing</em>; Verisk, <em>Labor Efficiencies Design</em>; Verisk, <em>Pricing Methodology Summary</em>; <em>Young v. State Farm Fire and Casualty Co.</em>, No. 2:23-cv-00175 (S.D. Miss. 2024); <em>Muenzenmay v. State Farm Fire &amp; Casualty Co.</em>, No. 3:26-cv-00119 (S.D. Miss. 2026); <em>Mitchell v. State Farm Fire and Casualty Co.</em> (6th Cir.).
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Sources &amp; Further Reading
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Property Insurance Coverage Law Blog (Merlin Law Group)</strong> &mdash; Chip Merlin has observed that lawsuits challenging the New Construction Xactimate labor-efficiency setting are being filed with increasing frequency. Search the blog for &ldquo;labor efficiency&rdquo; and &ldquo;Xactimate.&rdquo;
        </li>
        <li>
          <strong>Verisk / Xactimate documentation</strong> &mdash; Verisk is the publisher of Xactimate; its published materials describe the labor-efficiency settings and their intended use.
        </li>
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
