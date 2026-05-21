import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'When Xactimate Estimates Are Low, Blame the User — Not the Software',
  description:
    'Xactimate pricing is a starting point, not a final answer. Verisk\'s own EULA, white papers, and training materials say so explicitly. When an estimate comes in low, the fault lies with the estimator who failed to verify pricing, adjust yield factors, add labor for site conditions, and include all applicable line items.',
  summary:
    'When an Xactimate estimate comes in low, the fault is the estimator\'s, not the software\'s. Verisk\'s own EULA and training say pricing must be verified, yields adjusted, site labor added, and all line items included. A low estimate means the user cut corners.',
}

export default function Content() {
  return (
    <>
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Myth: &ldquo;Xactimate Is Wrong&rdquo;
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        It is common in the insurance claims world to hear someone say &ldquo;Xactimate is wrong&rdquo;
        or &ldquo;Xactimate&apos;s pricing is too low.&rdquo; This criticism &mdash; while
        understandable from the perspective of a policyholder or contractor holding an underpaid
        estimate &mdash; fundamentally misidentifies the problem.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Xactimate is a tool. Like any tool, it produces results that depend on how it is used. A
        tape measure is not &ldquo;wrong&rdquo; if the person using it reads the wrong end. Xactimate
        is not wrong when an estimator fails to adjust pricing, ignores site conditions, omits line
        items, or uses inappropriate labor efficiency settings. That is user error &mdash; and
        Verisk, the company that makes Xactimate, says so explicitly in their own documentation.
      </p>

      <CalloutBox variant="tip" title="The Real Question Is Not Whether Xactimate Is Wrong">
        <p>
          The real question is: did the estimator use the software correctly? Did they verify pricing
          against the local market? Did they add additional labor for site conditions? Did they
          include every applicable line item? Did they set the correct yield factor? If the answer
          to any of these is no, the estimate is low because the <em>user</em> failed &mdash; not
          because the software failed.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Verisk&apos;s Own EULA Says
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Section 12.3 of Verisk&apos;s End User License Agreement contains extraordinary language
        that most people in the insurance industry have never read. Here is what Verisk tells every
        user of their software:
      </p>
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-6">
        <ul className="space-y-3 text-gray-700">
          <li>
            <strong>&ldquo;We do not warrant the accuracy of pricing information in the
            Price Data.&rdquo;</strong>
          </li>
          <li>
            <strong>&ldquo;Price Data is intended to represent historical information and should be
            used as a baseline or place to begin creation of an estimate.&rdquo;</strong>
          </li>
          <li>
            <strong>&ldquo;We provide Price Data for informational purposes only.&rdquo;</strong>
          </li>
          <li>
            <strong>&ldquo;You must ensure that estimates include pricing consistent with actual
            materials, equipment, labor pricing, etc.&rdquo;</strong>
          </li>
          <li>
            <strong>&ldquo;You agree not to prohibit or preclude deviations from the Price Data
            where contractor requirements, market conditions, demand, or any other factors warrant
            the use of a different line item price in a specific situation.&rdquo;</strong>
          </li>
        </ul>
      </div>
      <p className="text-gray-700 leading-relaxed mb-4">
        Read those statements again. The company that makes the software:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>Disclaims any warranty that the pricing is accurate</li>
        <li>Calls it a &ldquo;baseline&rdquo; and &ldquo;place to begin&rdquo; &mdash; not a
          final answer</li>
        <li>Says pricing is &ldquo;for informational purposes only&rdquo;</li>
        <li>Places the responsibility on the <em>user</em> to verify pricing matches actual costs</li>
        <li>Contractually requires users not to treat Xactimate pricing as a ceiling that cannot
          be exceeded</li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        That last point is critical. Verisk&apos;s own license agreement says users must{' '}
        <em>not prohibit deviations</em> from the published pricing when market conditions warrant
        it. An insurance adjuster who refuses to pay above Xactimate pricing &mdash; regardless of
        what the work actually costs &mdash; is violating the terms of the software they are using.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Verisk&apos;s Pricing Methodology Says
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Verisk publishes white papers explaining exactly how their pricing is developed. The Pricing
        Research Methodology document states:
      </p>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          The goal is to provide &ldquo;cost information to the estimator that is reflective of
          the most common price recently submitted.&rdquo;
        </li>
        <li>
          That cost information is &ldquo;an extremely valuable tool in creating appropriate repair
          estimates, providing a basis from which the estimator can then decide whether the price
          should be accepted or adjusted.&rdquo;
        </li>
        <li>
          &ldquo;Having this single representative price per line item, computed from all valid
          price points researched within the market, means that some market price data are higher,
          and some market price data are lower than that which are reported.&rdquo;
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        In plain English: Xactimate reports a midpoint. Half the actual prices in the market are
        higher than what Xactimate shows. The software is telling the user: this is what we found
        as a common price &mdash; now <em>you</em> decide whether that price applies to your
        specific job.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The 50-100% Variation Acknowledgment
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Xactimate has published a bulletin on roofing prices acknowledging that they frequently see
        a 50% variation in price from low to high within a single market &mdash; and that 100%
        variations are &ldquo;not uncommon.&rdquo; Their published price sits somewhere in that
        range. It is categorically not a maximum, not a ceiling, and not a number that represents
        what the work actually costs on every job.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If Xactimate itself acknowledges that actual prices may be double what they publish, the
        software is not &ldquo;wrong&rdquo; when a contractor charges more. The software reported
        a reference point. The user&apos;s job is to determine whether that reference point applies
        to the specific job in front of them.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The RIA/Xactware Joint Position Statement
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Verisk and the Restoration Industry Association (RIA) issued a joint position statement on
        deviation from standardized price lists. The key points:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>&ldquo;Standardized prices may not accurately represent the usual and customary
          price.&rdquo;</li>
        <li>&ldquo;Software providers are &lsquo;reporters&rsquo; of price information at a
          specific moment in time.&rdquo;</li>
        <li>&ldquo;Insurers and their partners must not prohibit or preclude deviations from
          standardized price data.&rdquo;</li>
        <li>&ldquo;The usual and customary cost of work is determined between buyers and sellers
          in the marketplace.&rdquo;</li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        Xactware itself &mdash; the company that makes the software &mdash; is saying publicly: our
        prices may not be accurate for your specific situation, we are just reporters of data, and
        insurers must not treat our data as a cap.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Where Users Fail: The Most Common Errors
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When an Xactimate estimate comes in low, it is almost always because the user made one or
        more of the following errors:
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        1. Failing to Adjust the Yield Factor
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Every labor-intensive line item in Xactimate has a built-in production rate &mdash; how much
        of the work can be completed per hour under typical conditions. But &ldquo;typical
        conditions&rdquo; rarely exist in real-world restoration. The yield factor (or production
        rate) should be adjusted for:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Height and access</strong> &mdash; hanging drywall on a third-floor ceiling takes
          far more labor than hanging it on a first-floor wall. Materials must be carried upstairs,
          scaffolding must be set up, and the work is slower at height.
        </li>
        <li>
          <strong>Occupied structures</strong> &mdash; working around the homeowner&apos;s
          furniture, protecting finishes, managing dust, and limiting noise during certain hours
          all reduce productivity.
        </li>
        <li>
          <strong>Small and complex areas</strong> &mdash; a 4x4 closet takes more time per
          square foot than a 20x20 room because of constant stops, starts, cuts, and maneuvering.
        </li>
        <li>
          <strong>Matching existing conditions</strong> &mdash; replicating existing textures,
          matching paint colors to aged surfaces, and blending new work with old is slower than
          new construction.
        </li>
        <li>
          <strong>Limited access</strong> &mdash; narrow hallways, low clearances, limited staging
          areas, and the inability to use efficient equipment all reduce output.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        When an estimator uses the default yield factor on a job with difficult site conditions,
        the labor comes in too low. This is not the software being wrong &mdash; it is the user
        ignoring a feature the software provides specifically for this purpose.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        2. Omitting Necessary Line Items
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Xactimate line items have specific inclusions and exclusions. Each line item covers only
        what its description says it covers. Related work must be added separately. Common omissions:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Masking, taping, and protection of adjacent surfaces before painting</li>
        <li>Moving furniture and contents to access work areas</li>
        <li>Hauling materials to upper floors (the line item price assumes ground-level delivery)</li>
        <li>Sealing and priming before finish application</li>
        <li>Final cleaning after construction</li>
        <li>Temporary protection of flooring during work in adjacent rooms</li>
        <li>Removal and re-installation of hardware, fixtures, and covers</li>
        <li>Matching existing textures (separate line item from standard texture application)</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Each of these is a separate, billable operation that the software can capture. When the
        estimator leaves them out, the estimate is incomplete &mdash; not because the software
        lacks the line items, but because the user did not include them.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        3. Using the Wrong Labor Efficiency Setting
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Xactimate provides multiple labor efficiency categories because it recognizes that the same
        physical task takes different amounts of time depending on conditions:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Restoration/Service/Remodel</strong> &mdash; accounts for reduced productivity
          from matching textures, working in occupied homes, protecting finishes, and handling
          the complexity of repair work
        </li>
        <li>
          <strong>Total Rebuild or Similar</strong> &mdash; assumes large-scale work with easy
          access, unoccupied structures, and separation from finished areas
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        An estimator who uses the more efficient labor setting on a job that involves working in
        an occupied home with matching requirements will produce a number that is too low. Verisk&apos;s
        own Labor Efficiencies Design paper states: &ldquo;Factors such as job size, complexity,
        accessibility, and whether the structure is occupied all have a significant effect on the
        time needed to complete the work.&rdquo;
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        4. Not Adding Labor Minimums
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Standard Xactimate line item pricing does not account for mobilization, drive time, or
        setup. For small repair jobs &mdash; which is what most insurance claims are &mdash; a trade
        worker will charge a minimum regardless of how small the task is. A plumber does not drive
        across town, set up tools, and complete a 20-minute repair for the per-unit price of the
        line item alone. Xactimate provides labor minimums specifically to address this, but many
        estimators do not apply them.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        5. Failing to Verify Pricing Against the Local Market
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Xactimate&apos;s EULA says the user &ldquo;must ensure that estimates include pricing
        consistent with actual materials, equipment, labor pricing.&rdquo; If a licensed plumber in
        your area charges $150/hour and Xactimate shows $95/hour, the user is supposed to change the
        rate. The software gives them full capability to do this. Failing to verify is user error.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        6. Excluding Overhead and Profit
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Verisk&apos;s Overhead and Profit white paper states that &ldquo;general overhead expenses
        aren&apos;t included in Verisk&apos;s unit pricing.&rdquo; The unit prices are deliberately
        incomplete &mdash; they represent trade-level costs without a general contractor&apos;s
        overhead or profit margin. When a general contractor manages a job involving multiple trades,{' '}
        <Link href="/resources/overhead-and-profit" className="text-blue-700 underline hover:text-blue-900">
          overhead and profit
        </Link>{' '}
        must be added. An estimate without O&amp;P on a multi-trade job is not what Xactimate
        intended &mdash; it is what the user failed to include.
      </p>

      <CalloutBox variant="warning" title="The Adjuster Who Refuses to Deviate Is Violating the EULA">
        <p>
          When a carrier adjuster says &ldquo;I can only pay what Xactimate says&rdquo; and refuses
          to adjust pricing regardless of actual market costs, they are contradicting the terms of
          the very software they are citing as authority. Verisk&apos;s EULA and the RIA/Xactware
          joint position statement both say explicitly that users must not prohibit deviations when
          market conditions warrant them. The adjuster is not following Xactimate &mdash; they are
          misusing it as a justification for underpayment.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        A Real-World Example: Drywall on a Third-Floor Ceiling
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Consider hanging drywall on the ceiling of a third-floor unit in a multi-story building.
        Compared to hanging drywall on a first-floor wall:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Materials must be carried up three flights of stairs (no elevator access in most
          residential buildings under construction or restoration)</li>
        <li>Scaffolding or stilts are required for ceiling work</li>
        <li>Ceiling installation is physically more demanding and slower than wall work</li>
        <li>Waste increases because ceiling sheets are more likely to break during handling at
          height</li>
        <li>Fewer workers can operate in the space simultaneously due to scaffolding setup</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The correct approach in Xactimate is either to reduce the yield factor (because less
        drywall can be hung per hour under these conditions) or to add additional labor hours for
        the hauling, scaffold setup, and reduced productivity. Either method produces a realistic
        price. Using the default line item price without any modification produces a number that
        has nothing to do with what the work actually costs.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Is that Xactimate&apos;s fault? Xactimate provides a default price for typical drywall
        installation. It also provides the tools to modify that price for atypical conditions. The
        software was never designed to automatically know that your specific job involves third-floor
        ceiling work. The user is supposed to know that and adjust accordingly.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Where Verisk Does Share Some Responsibility
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is not an absolute defense of Verisk&apos;s pricing research. There are legitimate
        critiques:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Survey methodology bias</strong> &mdash; Verisk collects pricing data from
          submitted estimates. If a disproportionate number of those estimates come from insurance
          company adjusters (who have incentives to estimate low), the database may drift downward
          over time.
        </li>
        <li>
          <strong>Lag in volatile markets</strong> &mdash; during periods of rapid price increases
          (post-disaster demand surge, supply chain disruptions, inflation), the database may not
          update quickly enough to reflect current market conditions.
        </li>
        <li>
          <strong>Cluster analysis methodology</strong> &mdash; Verisk uses cluster analysis to
          identify the &ldquo;largest group of prices&rdquo; and pick a point within that range.
          This methodology could systematically underweight high-cost markets or specialty
          contractors.
        </li>
        <li>
          <strong>Market concentration</strong> &mdash; in markets where insurance work dominates,
          contractors may submit prices that are already suppressed by carrier pressure &mdash;
          creating a circular problem where low carrier expectations produce low submitted data
          that Verisk then reports as &ldquo;market pricing.&rdquo;
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        These are valid concerns about the pricing data itself. But even if every single price in
        Verisk&apos;s database were perfectly representative of the typical case, the estimate would
        <em>still</em> be wrong if the user failed to account for the specific conditions of the
        job in front of them. The base data and the user&apos;s application of it are separate
        issues.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What This Means for Your Claim
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When you receive an Xactimate estimate from your insurance company that seems too low, the
        question to ask is not &ldquo;Is Xactimate wrong?&rdquo; The questions to ask are:
      </p>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Did the estimator include all necessary line items?</strong> Check the{' '}
          <Link href="/resources/xactimate-line-items" className="text-blue-700 underline hover:text-blue-900">
            line item descriptions
          </Link>{' '}
          &mdash; are there steps and operations that should have separate line items but don&apos;t?
        </li>
        <li>
          <strong>Did the estimator adjust for site conditions?</strong> Is the work on an upper
          floor, in a tight space, in an occupied home, or otherwise more difficult than standard?
          Was the yield factor or additional labor adjusted?
        </li>
        <li>
          <strong>Is the labor efficiency setting appropriate?</strong> Restoration work in an
          occupied home should not use new-construction efficiency rates.
        </li>
        <li>
          <strong>Does the pricing reflect the actual local market?</strong> If your contractor
          charges more than the Xactimate default, does the estimator&apos;s own EULA require them
          to adjust?
        </li>
        <li>
          <strong>Are overhead and profit included?</strong> Multi-trade jobs require{' '}
          <Link href="/resources/overhead-and-profit" className="text-blue-700 underline hover:text-blue-900">
            O&amp;P
          </Link>. If it is missing, the estimate is incomplete by design.
        </li>
        <li>
          <strong>Are labor minimums applied?</strong> Small jobs and trade call-outs require
          minimum charges that standard line items do not include.
        </li>
      </ol>

      <CalloutBox variant="tip" title="Cite Verisk's Own Documents in Your Dispute">
        <p>
          When disputing a low Xactimate estimate, cite Verisk&apos;s own EULA and white papers.
          The carrier cannot claim Xactimate is the final authority on pricing when the company
          that makes the software explicitly says it is not. Quote the EULA directly: the pricing
          is a &ldquo;baseline or place to begin,&rdquo; the user &ldquo;must ensure&rdquo;
          pricing is consistent with actual costs, and deviations must not be &ldquo;prohibited
          or precluded.&rdquo;
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Bottom Line
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Xactimate is a powerful estimating tool that provides a researched starting point for
        pricing construction work. It is not a final answer. It is not gospel. It is not a ceiling.
        Its own maker says so in their EULA, their white papers, their training materials, and their
        joint industry position statements.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When an estimate comes in low, the responsibility lies primarily with the person who used
        the software without verifying pricing, without adjusting for site conditions, without
        including all line items, and without applying appropriate yield factors. The software
        provided every tool needed to produce an accurate estimate. The user chose not to use them.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Is it possible that Verisk&apos;s base pricing is itself below market in some areas or for
        some trades? Yes &mdash; and Verisk shares some responsibility for that. But even perfect
        base data cannot save an estimate where the user ignored site conditions, omitted line items,
        and refused to deviate from defaults. The blame belongs where the decisions were made &mdash;
        or not made.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Sources and References
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Verisk End User License Agreement, Section 12.3 &mdash; &ldquo;Price Data&rdquo;</li>
        <li>Verisk Pricing Research Methodology white paper</li>
        <li>Verisk Pricing Methodology Summary white paper</li>
        <li>Verisk Labor Efficiencies Design white paper</li>
        <li>Verisk Overhead and Profit white paper</li>
        <li>Verisk How to Calculate Labor Minimums documentation</li>
        <li>RIA/Xactware Joint Position Statement on Deviation from Standardized Price Lists</li>
        <li>Xactimate &ldquo;Roofing Prices in Xactimate&rdquo; bulletin</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        A Note on This Information
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This article is based on publicly available Verisk/Xactware documentation and industry
        position statements. It is educational and does not constitute legal advice. If you are
        disputing an Xactimate estimate on a claim, a licensed{' '}
        <Link href="/resources/public-adjuster" className="text-blue-700 underline hover:text-blue-900">
          Public Adjuster
        </Link>{' '}
        can prepare a properly documented counter-estimate using the same software with appropriate
        adjustments for your specific conditions.
      </p>
    </>
  )
}
