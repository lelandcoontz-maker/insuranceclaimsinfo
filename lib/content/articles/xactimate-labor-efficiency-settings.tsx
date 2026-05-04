import Link from 'next/link'

export const meta = {
  title: "Xactimate Labor Efficiency Settings: How Restoration vs. Rebuild Changes Every Line Item on Your Estimate",
  description: "A comprehensive guide on how Xactimate's labor efficiency settings affect every labor line item in an insurance estimate and how the wrong setting can systematically underpay an entire claim by thousands of dollars.",
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        <em>A comprehensive guide for policyholders, public adjusters, and attorneys on how Xactimate&apos;s labor efficiency settings affect every labor line item in an insurance estimate &mdash; and how the wrong setting can systematically underpay an entire claim by thousands of dollars.</em>
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Your insurance company just sent you an estimate for storm damage repairs to your home. The estimate is forty-three pages of codes, quantities, and prices that you have no way to independently verify. But buried inside that estimate &mdash; not in the line items themselves, but in the global settings that control how every line item is priced &mdash; is a single selection that may have reduced the entire estimate by fifteen to thirty percent before a single line item was ever entered.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        That setting is the labor efficiency setting. It is one of the most consequential variables in the Xactimate estimating platform, and it is one of the least understood by policyholders, many attorneys, and even some adjusters. It is a global parameter that affects every labor calculation in the estimate. When it is set incorrectly, it does not just underprice one line item. It underprices all of them.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        And in a growing number of class action lawsuits filed across the country, policyholders are alleging that major carriers have been applying the wrong labor efficiency setting &mdash; not as an occasional mistake, but as a systematic practice that reduces claim payments on every partial-loss estimate they write.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This article explains what the labor efficiency settings are, why they matter, when each setting is appropriate, what Verisk&apos;s own documentation says about them, and what you can do when the wrong setting has been applied to your claim.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">What Labor Efficiency Settings Are</h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">The Core Concept: Not All Work Is Created Equal</h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Every line item in an Xactimate estimate has a labor component. When the software prices a line item &mdash; say, removing and replacing drywall, or installing new flooring &mdash; it calculates the cost based on the time a tradesperson is expected to need to complete the task. That time is not a fixed number. It varies depending on the conditions under which the work is performed.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This is not a software quirk. It is a fundamental reality of construction. A drywall installer working in a brand-new, open-framed house with no furniture, no flooring to protect, no adjacent finishes to work around, and no homeowner asking questions can hang sheets faster and more efficiently than the same installer working in an occupied home where the living room furniture has been moved to the center of the room, the hardwood floors are covered with protective paper, the adjacent walls have trim that must not be damaged, and the family is eating dinner twenty feet away.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The time difference between those two scenarios is significant. It is not five percent. It is not trivial. It is the difference between a smooth production workflow and the stop-start, protect-everything, work-around-obstacles reality of restoration and remodeling work.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Xactimate accounts for this difference through labor efficiency settings. These settings apply a labor productivity factor to every line item in the estimate. The factor adjusts the labor time &mdash; and therefore the labor cost &mdash; based on the type of project being estimated.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">How the Settings Work</h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Xactimate&apos;s labor efficiency system works through what Verisk calls &quot;supporting events.&quot; These are additional time assumptions built into each line item for each trade. The supporting events account for the real-world conditions that affect labor productivity, including planning time, drive time, breaks, setup, cleanup, material handling, and &mdash; critically &mdash; the overall loss of productivity that comes from working in a restoration environment.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The supporting events are expressed as percentages. For example, if a supporting event assumption adds 33% for &quot;labor based on an 8-hour day with planning, drive time, breaks, setup/clean up, and overall loss of productivity from working in a restoration environment,&quot; the system adds 2.64 hours for every 8 hours of base labor time. These percentages vary by trade and by the labor efficiency category selected.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        When the estimator selects a labor efficiency setting, they are telling the software: &quot;This is the type of project I am estimating. Apply the appropriate productivity assumptions for this type of work.&quot; That single selection cascades through every labor line item in the entire estimate.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">The Three Labor Efficiency Categories</h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Xactimate&apos;s labor efficiency architecture has evolved over time. Originally, the software offered two options: Restoration/Remodel/Service and New Construction. In response to industry feedback &mdash; including advocacy from the Restoration Industry Association (RIA) &mdash; Verisk expanded the system to include a third category. The current three-tier system provides more granularity, but also creates more opportunities for misapplication.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">1. Restoration/Service/Remodel</h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        This is the default setting for the vast majority of insurance repair work. Verisk&apos;s own documentation describes this option as being &quot;for jobs other than total losses or new construction.&quot;
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The Restoration/Service/Remodel setting accounts for all the real-world inefficiencies of working in an existing, typically occupied structure:
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Drive time and mobilization</strong>: Repair crews on restoration jobs often handle smaller scopes of work, which means the fixed cost of mobilizing to the jobsite represents a larger proportion of total labor time compared to a large new construction project.</li>
        <li><strong>Material delivery to an occupied structure</strong>: Materials cannot simply be dumped in the front yard and accessed freely. They must be brought into specific rooms, often through doorways and hallways, while protecting existing finishes.</li>
        <li><strong>Protection of existing surfaces</strong>: Before work begins, the crew must protect floors, walls, countertops, and other surfaces that are not being repaired. This takes time and adds labor that does not exist in new construction.</li>
        <li><strong>Working around contents</strong>: Furniture, personal belongings, and household items must be moved, covered, or worked around. In new construction, there is nothing in the way.</li>
        <li><strong>Demolition and removal</strong>: Before new materials can be installed, damaged materials must be carefully removed. In many cases, this removal requires more precision than new installation because adjacent finishes must be preserved.</li>
        <li><strong>Matching to existing conditions</strong>: Repairs in an existing structure must match existing materials, textures, and finishes. This requires additional time for material selection, blending, and adjustment that does not exist when everything is being installed fresh.</li>
        <li><strong>Work interruptions</strong>: In occupied structures, work may be interrupted by occupant needs, and crews must accommodate the daily life of the people living in the home.</li>
        <li><strong>Limited access and tight spaces</strong>: Restoration work often takes place in finished spaces with limited room to maneuver, stage materials, and use equipment.</li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        This setting produces the highest labor costs because it reflects the highest labor time per unit of work. It is the appropriate setting for the overwhelming majority of insurance repair claims.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">2. Large Restoration/Remodel</h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        This is the newer, middle-tier setting introduced by Verisk in response to industry feedback. It is designed for large-scale restoration or remodeling projects that share some characteristics of new construction &mdash; greater accessibility, larger work areas, the ability to schedule work more freely &mdash; while still involving the core complexities of working in an existing structure.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        According to Verisk&apos;s documentation and the RIA&apos;s analysis, this setting reduces labor pricing by approximately 5 to 10 percent compared to the standard Restoration/Service/Remodel setting. It is positioned as a bridge between service-level work and total rebuild scenarios.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This setting may be appropriate for large restoration projects where the scope of work is extensive enough that crews can work more efficiently &mdash; for example, a major fire loss where an entire floor of the home is being gutted and rebuilt, but the structure itself is not a total loss.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The important distinction is that this setting still accounts for the fundamental realities of restoration work. It simply assumes that the larger project scale allows for somewhat greater efficiency.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">3. Total Rebuild or Similar (Formerly &quot;New Construction&quot;)</h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        This setting &mdash; which Verisk has relabeled from &quot;New Construction&quot; to &quot;Total Rebuild or Similar&quot; in its expanded architecture &mdash; applies the most efficient labor productivity assumptions available. Verisk describes this setting as &quot;typical of work being performed on very large restoration/remodel jobs that are easily accessible for workers and are separated from adjacent finished areas.&quot;
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Under this setting, the site is typically not occupied, deliveries and work can be scheduled freely by the contractor, and workers have unrestricted access. It reflects the productivity of ground-up construction where:
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>The structure is open-framed with no existing finishes to protect</li>
        <li>There are no occupants to work around</li>
        <li>Materials can be staged and accessed freely</li>
        <li>Crews can work in an unobstructed production sequence</li>
        <li>There is no demolition or removal of existing materials</li>
        <li>There is no need to match existing conditions</li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        This setting produces the lowest labor costs because it reflects the most efficient possible working conditions.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Verisk&apos;s own documentation states that this option &quot;should be used for ground-up rebuilds and new construction applications.&quot; The key phrase is &quot;ground-up rebuilds&quot; &mdash; meaning the structure has been demolished or destroyed and is being built from scratch.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Why the Setting Matters So Much</h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">A Global Multiplier</h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The labor efficiency setting is not a line-item adjustment. It is a global setting that applies to every labor line item in the entire estimate. When an estimator changes the labor efficiency setting from Restoration/Service/Remodel to Total Rebuild, they are not reducing one line item. They are reducing every line item that has a labor component &mdash; which is virtually every line item in the estimate.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This makes it one of the single most impactful variables in the software. A single click can reduce the entire estimate by thousands of dollars without changing a single measurement, material specification, or scope item.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">The Dollar Impact</h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The magnitude of the difference depends on the size and scope of the estimate, but industry analysis consistently shows that the gap between Restoration/Service/Remodel and Total Rebuild pricing can range from 15 to 30 percent of the labor component of the estimate. On labor-intensive repairs &mdash; which most insurance claims are &mdash; labor represents a substantial portion of the total cost.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Consider a straightforward example. A fire damage repair to a home is estimated at $80,000 using the Restoration/Service/Remodel setting. Approximately half of that cost &mdash; $40,000 &mdash; is labor. If the estimator switches the labor efficiency setting to Total Rebuild, the labor component might drop by 20 percent, reducing it to $32,000. The total estimate drops from $80,000 to $72,000.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        That $8,000 difference did not come from removing any scope of work. No line items were deleted. No measurements were changed. No materials were downgraded. The difference is entirely attributable to a single setting change that tells the software to price every hour of labor as if the work is being performed in ideal, unobstructed new construction conditions &mdash; even though the work is actually being done in an occupied home where crews must protect floors, work around furniture, match existing finishes, and deal with every other inefficiency that characterizes restoration work.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Now multiply that across thousands of claims. If a carrier processes 50,000 partial-loss claims per year and each claim is underpriced by an average of $5,000 due to an incorrect labor efficiency setting, the aggregate underpayment is $250 million annually &mdash; from a single software setting.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">The Verisk Documentation: What the Software Maker Says</h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">The White Papers</h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Verisk has published several white papers and technical documents that explain how labor efficiency settings work and when each should be applied. These documents are significant because they come from the company that created and maintains the software. When a carrier misapplies a labor efficiency setting, Verisk&apos;s own documentation can be used to demonstrate the error.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The key documents include:
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong><a href="https://www.verisk.com/491069/siteassets/media/downloads/property-estimating/labor-productivity-in-xactimate-pricing.pdf" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">&quot;Labor Productivity in Xactimate Pricing&quot;</a></strong> &mdash; This white paper explains that labor productivity is &quot;often the largest variable in construction or repair jobs&quot; and defines it as &quot;the time needed to complete a task.&quot; It acknowledges that productivity &quot;can be affected by many factors including accessibility, location, and quantity of work being performed.&quot; This document establishes that Verisk itself recognizes labor productivity as a variable &mdash; not a constant &mdash; that depends on job conditions.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong><a href="https://www.verisk.com/4974ed/siteassets/media/downloads/property-estimating/labor-efficiencies-design.pdf" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">&quot;Labor Efficiencies Design&quot;</a></strong> &mdash; This white paper provides the technical architecture of the labor efficiency system. It explains the three-tier model, the supporting events framework, and the intended application of each setting. Critically, it describes the Restoration/Service/Remodel option as being &quot;for jobs other than total losses or new construction&quot; &mdash; which encompasses nearly all insurance repair claims.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong><a href="https://www.propertyinsurancecoveragelaw.com/wp-content/uploads/2024/10/Xactimate-Pricing-Methodology-Summary.pdf" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">&quot;Pricing Methodology Summary&quot;</a></strong> &mdash; This broader document places labor efficiency within the context of Xactimate&apos;s overall pricing methodology and confirms that estimators must use &quot;their experience, skill, and knowledge to determine appropriate items, labor efficiency, and pricing.&quot;
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        These documents are available from Verisk&apos;s website and through industry resources such as <a href="https://getinsights.org" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Actionable Insights</a>. They should be part of every public adjuster&apos;s and policyholder attorney&apos;s reference library.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">What the Documentation Makes Clear</h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Several principles emerge from Verisk&apos;s own documentation:
      </p>

      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>The Restoration/Service/Remodel setting is the default for repair work.</strong> Verisk describes it as the option for &quot;jobs other than total losses or new construction.&quot; Since the vast majority of insurance claims involve repair work &mdash; not total losses or new construction &mdash; this is the appropriate setting for the vast majority of claims.</li>
        <li><strong>The Total Rebuild setting is for ground-up rebuilds.</strong> Verisk states that this option &quot;should be used for ground-up rebuilds and new construction applications.&quot; A partial-loss claim where the home is being repaired &mdash; not demolished and rebuilt &mdash; is not a ground-up rebuild.</li>
        <li><strong>The choice of setting is a judgment call, but it is not arbitrary.</strong> Verisk instructs estimators to use their experience and knowledge to select the appropriate setting. This means the choice can be evaluated, challenged, and shown to be wrong when the selected setting does not match the actual conditions of the project.</li>
        <li><strong>Labor is the largest variable.</strong> Verisk acknowledges that labor is &quot;often the largest variable&quot; in repair costs. This means that the labor efficiency setting &mdash; which directly controls how labor is priced &mdash; has a disproportionate impact on the total estimate.</li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">How Carriers Get the Setting Wrong</h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">The Pattern</h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Policyholders across the country have reported &mdash; and class action lawsuits have alleged &mdash; that certain carriers systematically apply the New Construction or Total Rebuild labor efficiency setting to partial-loss repair estimates. The result is that every line item in the estimate is priced at new construction labor rates, even though the actual work involves all the inefficiencies and complications of restoration work in an occupied home.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This pattern has drawn particular scrutiny in litigation against State Farm. Multiple lawsuits have alleged that State Farm &quot;discarded the industry practice&quot; of using the Restoration/Service/Remodel setting and instead used the New Construction setting to generate lower estimates for repair work that, by definition, is not new construction.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        As one commentator described it: the effect of this practice is that costs generated for &quot;new construction&quot; have yielded lower estimates for policyholders engaged in reconstruction &mdash; and have netted the carrier potentially millions in underpaid claims.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Intentional or Ignorant?</h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Whether the wrong setting is applied intentionally or through ignorance, the result is the same: the policyholder receives an estimate that does not reflect the actual cost of the repair work.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        In some cases, the misapplication may reflect a corporate-level decision to use a particular setting as the default across all estimates, regardless of the actual project conditions. In other cases, it may reflect an individual adjuster&apos;s lack of understanding of what the settings mean and when each applies.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        From the policyholder&apos;s perspective, the distinction between intentional underpayment and ignorant underpayment is largely academic. The estimate is wrong either way. But from a legal perspective, the distinction matters. Intentional misapplication of a software setting to reduce claim payments may support claims of bad faith. Ignorant misapplication may establish that the carrier failed to properly train its adjusters or implement adequate quality controls.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">The Litigation Landscape</h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">The Class Action Wave</h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The misapplication of Xactimate labor efficiency settings has generated significant litigation, including several class action lawsuits that have brought national attention to the issue.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong><em>Mitchell v. State Farm Fire and Casualty Co.</em> (N.D. Miss.)</strong> &mdash; This case involved State Farm&apos;s calculation of labor costs in Xactimate that led to the underpayment of 65,575 policyholders in Kentucky. From 2004 to 2017, State Farm improperly calculated labor costs in the software, and the U.S. Court of Appeals for the Sixth Circuit approved class certification. The court found that the amount owed may &quot;far surpass the amount that was underpaid because of the Xactimate calculations.&quot; The plaintiffs&apos; attorneys demonstrated that the error could have been corrected by simply changing a setting in the software &mdash; State Farm needed only to &quot;unclick&quot; one box to generate correct values.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong><em>Young v. State Farm Fire and Casualty Co.</em> (S.D. Miss. 2024)</strong> &mdash; This case directly challenged State Farm&apos;s use of the &quot;New Construction Labor Efficiency&quot; setting on partial-loss claims. The proposed class included all persons insured under a State Farm homeowner or property policy who submitted claims for partial structural damage (not designated a total loss) and whose payments were calculated using the New Construction labor efficiency setting from November 2020 forward. The court ultimately ruled in favor of State Farm, concluding that the insurance policies did not impose an obligation to use a specific Xactimate setting. The judge found that the question was whether the payout was sufficient to cover repairs, not which methodology produced the figure.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong><em>Muenzenmay v. State Farm Fire and Casualty Co.</em> (S.D. Miss. 2026)</strong> &mdash; Filed in February 2026, this is among the most recent class actions challenging State Farm&apos;s use of the New Construction labor efficiency setting. The complaint alleges the same core pattern: that State Farm intentionally used the New Construction setting rather than the Restoration/Service/Remodel setting, resulting in lower estimates for repair work. The case is in its early stages.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">The Legal Landscape: Methodology vs. Result</h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The courts have taken varying approaches to this issue. Some courts have focused on the methodology &mdash; asking whether the carrier&apos;s choice of labor efficiency setting was appropriate for the type of work being estimated. Other courts have focused on the result &mdash; asking whether the carrier ultimately paid the amount owed under the policy, regardless of the methodology used to calculate it.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The <em>Young</em> decision reflects the latter approach. The court held that because the insurance policies did not mandate a particular Xactimate setting, and because State Farm had provided payment in line with the final appraisal award, the plaintiffs&apos; claims for breach of contract and bad faith were dismissed.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This distinction is important for policyholders and their advocates to understand. A court that focuses on methodology is more likely to find that the wrong labor efficiency setting constitutes a breach. A court that focuses on results may be more receptive to arguments about actual repair costs, contractor bids, and the real-world gap between the carrier&apos;s estimate and what the work actually costs.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        As policyholder attorney Chip Merlin has observed, lawsuits challenging the use of the New Construction Xactimate setting &quot;are starting to be filed on a more regular basis.&quot; The legal landscape is still developing, and the outcomes of pending cases &mdash; including <em>Muenzenmay</em> &mdash; will continue to shape this area of law.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">How to Identify the Wrong Setting on Your Estimate</h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Step 1: Get the Estimate File</h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Before you can check the labor efficiency setting, you need access to the actual Xactimate estimate &mdash; not just the PDF summary. The PDF output may not display the labor efficiency setting. You need the underlying ESX file (the native Xactimate file format) or, at minimum, the complete estimate parameters.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Request the ESX file from the carrier in writing. The ESX file contains the full estimate data, including all settings, parameters, and pricing profiles. When you import the ESX file into Xactimate, you can see exactly what settings the estimator used.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        If the carrier refuses to provide the ESX file, request a copy of the estimate that includes all parameter settings, including the labor efficiency selection. Document the refusal if they decline &mdash; it may be relevant in later proceedings.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Step 2: Locate the Labor Efficiency Setting</h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        In Xactimate, the labor efficiency setting is found in the Pricing tab of the estimate. Look for a dropdown list labeled &quot;Labor Efficiency.&quot; The selected option will be one of the three categories: Restoration/Service/Remodel, Large Restoration/Remodel, or Total Rebuild or Similar.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        In XactAnalysis &mdash; Xactimate&apos;s cloud-based claims management platform &mdash; when an estimate allows separate labor efficiency settings by trade, a &quot;View Labor Efficiencies by Trade&quot; link appears above the document list. This allows you to see whether different labor efficiency settings have been applied to different trades within the same estimate.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Step 3: Compare the Setting to the Actual Project</h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Once you have identified the labor efficiency setting, compare it to the actual conditions of the project:
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Is this a partial-loss repair?</strong> If yes, the setting should almost certainly be Restoration/Service/Remodel. A partial-loss repair in an occupied home involves all the inefficiencies that the Restoration setting is designed to account for.</li>
        <li><strong>Is the structure occupied?</strong> If yes, the Total Rebuild setting is inappropriate. The Total Rebuild setting assumes an unoccupied site where work can be scheduled freely.</li>
        <li><strong>Are existing finishes being protected?</strong> If yes, the Total Rebuild setting is inappropriate. New construction efficiency assumes no existing finishes to work around.</li>
        <li><strong>Is there demolition and removal work?</strong> If yes, the Total Rebuild setting is inappropriate. Ground-up construction does not involve demolition of existing materials.</li>
        <li><strong>Is the scope limited enough that crews will face access constraints?</strong> If yes, the Total Rebuild setting is inappropriate. The Total Rebuild setting assumes unrestricted access.</li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Step 4: Run the Estimate Both Ways</h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        If you have access to Xactimate, import the carrier&apos;s ESX file and change the labor efficiency setting from whatever the carrier selected to Restoration/Service/Remodel. Do not change anything else &mdash; same measurements, same line items, same materials, same scope. Simply toggle the labor efficiency setting.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Then compare the two totals. The difference is the amount attributable solely to the labor efficiency setting. This comparison is one of the most powerful tools available for demonstrating the impact of the wrong setting, because it isolates the variable. The scope of work is identical. The only thing that changed is the labor efficiency assumption.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Present the comparison in a side-by-side format showing the carrier&apos;s estimate total and the corrected estimate total. The difference speaks for itself.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">What to Do About It</h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">1. Document the Error in Writing</h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        When you identify an incorrect labor efficiency setting, challenge it in writing. A phone call may resolve the issue, but it creates no record. A written communication &mdash; whether a letter, email, or formal supplement request &mdash; creates a documented record of the challenge, the basis for the challenge, and the carrier&apos;s response.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Your written challenge should include:
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Identification of the labor efficiency setting used in the carrier&apos;s estimate</li>
        <li>A statement of what setting should have been used and why</li>
        <li>Reference to Verisk&apos;s own documentation explaining when each setting applies</li>
        <li>The dollar impact of the incorrect setting, based on your side-by-side comparison</li>
        <li>A request that the carrier re-run the estimate with the correct setting</li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">2. Cite Verisk&apos;s Own Documentation</h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        This is critical. When you challenge a labor efficiency setting, you are not asking the carrier to accept your opinion about how their software should be used. You are pointing to the manufacturer&apos;s own documentation, which states clearly that the Restoration/Service/Remodel setting is for &quot;jobs other than total losses or new construction&quot; and that the Total Rebuild setting &quot;should be used for ground-up rebuilds and new construction applications.&quot;
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Reference the specific Verisk white papers by title:
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><em><a href="https://www.verisk.com/491069/siteassets/media/downloads/property-estimating/labor-productivity-in-xactimate-pricing.pdf" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Labor Productivity in Xactimate Pricing</a></em> (Verisk)</li>
        <li><em><a href="https://www.verisk.com/4974ed/siteassets/media/downloads/property-estimating/labor-efficiencies-design.pdf" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Labor Efficiencies Design</a></em> (Verisk)</li>
        <li><em><a href="https://www.propertyinsurancecoveragelaw.com/wp-content/uploads/2024/10/Xactimate-Pricing-Methodology-Summary.pdf" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Pricing Methodology Summary</a></em> (Verisk)</li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        When the carrier&apos;s own estimating tool comes with documentation that contradicts how they used it, the carrier is in the position of arguing against the software manufacturer&apos;s guidance. That is not an enviable position.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">3. Present the Side-by-Side Comparison</h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        As discussed above, running the estimate with both settings and presenting the comparison is one of the most effective tools available. It is concrete, specific, and difficult to dismiss. The carrier cannot argue that the scope is different, that the measurements are wrong, or that the materials are overstated. Everything is the same except the labor efficiency setting. The difference is pure underpayment.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">4. Request the Carrier&apos;s Justification</h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Ask the carrier &mdash; in writing &mdash; to explain why the Total Rebuild or Large Restoration/Remodel setting was selected for a partial-loss repair in an occupied home. Ask them to identify which of the conditions described by Verisk for the Total Rebuild setting are present on this project. Ask whether the structure is unoccupied, whether deliveries can be scheduled freely, whether there are no existing finishes to protect, and whether the work is a ground-up rebuild.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Force the carrier to articulate a justification for the setting it chose. In many cases, there is no good justification &mdash; the setting was applied as a default, without any analysis of the actual project conditions.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">5. Engage a Public Adjuster or Attorney</h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        If the carrier refuses to correct the labor efficiency setting, consider engaging a licensed public adjuster or an attorney experienced in insurance coverage disputes. The labor efficiency setting is a technical issue that benefits from professional expertise. A public adjuster can prepare a properly scoped and properly configured Xactimate estimate. An attorney can evaluate whether the carrier&apos;s conduct supports claims for breach of contract, bad faith, or unfair claims practices.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        For claims of sufficient size, the labor efficiency issue may also intersect with other estimating errors &mdash; missing line items, incorrect measurements, excluded overhead and profit, improper depreciation &mdash; compounding the total underpayment.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">The Bigger Picture: Software Settings as Claims Handling Practices</h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        The labor efficiency setting issue is part of a broader pattern in modern property insurance claims handling. As carriers have increasingly relied on estimating software to standardize and automate their claims processes, the settings and defaults within that software have become de facto claims handling practices. When a carrier selects a labor efficiency default that systematically reduces every estimate it writes, that is not a software configuration. It is a business decision about how much to pay on claims.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Verisk itself has recognized this dynamic. Its documentation makes clear that the labor efficiency setting is a choice &mdash; one that must be made based on the actual conditions of the specific project. The software provides the options. The estimator must select the right one.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        When the wrong option is selected consistently, across thousands of claims, the aggregate impact is enormous. And when the wrong option just happens to be the one that produces lower estimates, the pattern is difficult to attribute to coincidence.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Policyholders, public adjusters, and attorneys should treat the labor efficiency setting as a standard item to check on every Xactimate estimate they review. It takes minutes to identify. It can be worth thousands of dollars. And it is supported by the software manufacturer&apos;s own documentation.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Summary: Key Takeaways</h2>

      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Xactimate&apos;s labor efficiency setting is a global parameter</strong> that affects every labor line item in the entire estimate. It is one of the most impactful variables in the software.</li>
        <li><strong>The Restoration/Service/Remodel setting</strong> is appropriate for the vast majority of insurance repair claims. It accounts for the real-world inefficiencies of working in an occupied, existing structure.</li>
        <li><strong>The Total Rebuild setting</strong> is appropriate only for ground-up rebuilds and new construction. It should not be used for partial-loss repairs in occupied homes.</li>
        <li><strong>Using the wrong setting can reduce the entire estimate by 15-30%</strong> of the labor component without changing a single line item, measurement, or material.</li>
        <li><strong>Verisk&apos;s own documentation</strong> explains when each setting applies and supports the use of Restoration/Service/Remodel for repair work.</li>
        <li><strong>Multiple class action lawsuits</strong> have been filed challenging carriers&apos; use of the New Construction setting on partial-loss claims, with cases pending as recently as February 2026.</li>
        <li><strong>To challenge the setting</strong>, request the ESX file, identify the labor efficiency selection, run the estimate both ways, cite Verisk&apos;s documentation, and present the challenge in writing.</li>
      </ol>

      <p className="text-gray-700 leading-relaxed mb-4">
        The labor efficiency setting is not an obscure technical detail. It is a foundational assumption that shapes the entire estimate. When it is wrong, everything built on top of it is wrong. And the policyholder is the one who pays the difference.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Sources and References</h2>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Verisk, <em><a href="https://www.verisk.com/491069/siteassets/media/downloads/property-estimating/labor-productivity-in-xactimate-pricing.pdf" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Labor Productivity in Xactimate Pricing</a></em></li>
        <li>Verisk, <em><a href="https://www.verisk.com/4974ed/siteassets/media/downloads/property-estimating/labor-efficiencies-design.pdf" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Labor Efficiencies Design</a></em></li>
        <li>Verisk, <em><a href="https://www.propertyinsurancecoveragelaw.com/wp-content/uploads/2024/10/Xactimate-Pricing-Methodology-Summary.pdf" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Pricing Methodology Summary</a></em></li>
        <li>Verisk, <em><a href="https://www.verisk.com/resources/webinars/on-demand/2026/estimating-with-confidence-understanding-updated-labor-efficiencies-in-xactimate/" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Estimating with Confidence: Understanding Updated Labor Efficiencies in Xactimate</a></em> (On-demand webinar, 2026)</li>
        <li>Xactimate Help Documentation, <em><a href="https://xactprm.xactware.help/Dashboard_files/Labor_Efficiency.htm" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Labor Efficiency</a></em></li>
        <li>Xactimate Help Documentation, <em><a href="http://xactimate.xactware.help/Supporting_Events.htm" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Supporting Events</a></em></li>
        <li>Xactware Help, <em><a href="https://xactware.helpdocs.io/l/enUS/article/F9bxGK22pm-adjust-supporting-events-percentages" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Adjust Supporting Events Percentages</a></em></li>
        <li>C&amp;R Magazine, <em><a href="https://www.candrmagazine.com/ria-releases-new-white-paper-on-verisks-new-large-restoration-remodel-labor-efficiency-setting/" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">RIA Releases New White Paper on Verisk&apos;s New &quot;Large Restoration/Remodel Labor Efficiency Setting&quot;</a></em></li>
        <li>Actionable Insights, <em><a href="https://getinsights.org/resources/insighter-report/xactware-labor-efficiencies-design" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Xactware Labor Efficiencies Design</a></em></li>
        <li>Chip Merlin, <em><a href="https://www.propertyinsurancecoveragelaw.com/blog/xactimate-new-construction-setting/" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Xactimate &quot;New Construction&quot; Setting</a></em></li>
        <li>Chip Merlin, <em><a href="https://www.propertyinsurancecoveragelaw.com/blog/are-insurers-using-new-construction-xactimate-settings-wrongfully-underpaying-claims/" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Are Insurers Using &quot;New Construction&quot; Xactimate Settings Wrongfully Underpaying Claims?</a></em></li>
        <li><em>Young v. State Farm Fire and Casualty Co.</em>, No. 2:23-cv-00175 (S.D. Miss. 2024) &mdash; <a href="https://caselaw.findlaw.com/court/us-dis-crt-s-d-mis-eas-div/116533731.html" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">FindLaw</a></li>
        <li><em>Muenzenmay v. State Farm Fire &amp; Casualty Co.</em>, No. 3:26-cv-00119 (S.D. Miss. 2026) &mdash; <a href="https://dockets.justia.com/docket/mississippi/mssdce/3:2026cv00119/132670" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Justia</a></li>
        <li><em>Mitchell v. State Farm Fire and Casualty Co.</em> (6th Cir.) &mdash; <a href="https://www.claimsjournal.com/news/southeast/2020/07/14/298171.htm" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Claims Journal</a></li>
        <li>Insurance Journal, <em><a href="https://www.insurancejournal.com/news/east/2025/03/27/817434.htm" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">State Farm Wins Dismissal of Homeowners&apos; Class Action Over Use of Xactimate Software</a></em> (March 2025)</li>
        <li>ClassAction.org, <em><a href="https://www.classaction.org/news/lawsuit-claims-state-farm-uses-new-construction-numbers-to-generate-lower-cost-estimates-for-property-remodeling-jobs" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Lawsuit Claims State Farm Uses &apos;New Construction&apos; Numbers to Generate Lower Cost Estimates</a></em></li>
        <li>Daily Journal, <em><a href="https://www.dailyjournal.com/mcle/1834-xactimate-is-not-the-law-how-insurers-use-one-software-program-to-underpay-wildfire-claims" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Xactimate is Not the Law: How Insurers Use One Software Program to Underpay Wildfire Claims</a></em></li>
      </ul>
    </>
  )
}
