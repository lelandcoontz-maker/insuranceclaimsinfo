import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Closing Ratios: The Hidden Metric That May Be Driving Your Claim Outcome',
  description:
    'How insurance company "closing ratios" create perverse incentives for adjusters to underpay claims, what California policyholders should watch for, and how to document potential adjuster bias.',
  summary:
    'A closing ratio measures how quickly and cheaply an adjuster resolves claims, and incentives tied to it can quietly pressure your settlement downward. Understanding this hidden metric explains why some adjusters push fast, low resolutions.',
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
        When a policyholder files a property damage claim, the expectation is straightforward:
        a trained adjuster will inspect the damage, evaluate the loss, and make a fair payment
        based on the policy terms. The adjuster is supposed to be an impartial investigator
        &mdash; not an advocate for the insurance company, but a professional whose job is to
        determine what the policy covers and what the damage is worth.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        But what if the adjuster&rsquo;s performance is being measured &mdash; and their
        career advancement determined &mdash; not by the accuracy of their assessments,
        but by how many claims they close below a certain dollar threshold? What if the
        internal metrics that drive promotions, bonuses, and continued employment have
        nothing to do with fairness and everything to do with keeping payments low?
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The concept is known in the industry as the &ldquo;closing ratio,&rdquo; and
        understanding how it works can help policyholders recognize when their claim may
        not be receiving the objective evaluation they deserve.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Is a Closing Ratio?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A closing ratio, in the insurance claims context, refers to the percentage of an
        adjuster&rsquo;s claims that are resolved below a particular dollar amount or within
        a specific range. For example, if a carrier tracks what percentage of an adjuster&rsquo;s
        claims are closed for less than $10,000, that percentage is the adjuster&rsquo;s closing
        ratio for that threshold.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        As the policyholder advocacy firm Pillsbury &amp; Coleman, LLP has explained in
        their analysis of insurer claims practices, closing ratios function as internal
        performance benchmarks that measure adjusters not on the quality or accuracy of
        their work, but on how effectively they minimize claim payouts. Pillsbury &amp;
        Coleman has noted that &ldquo;these metrics create an inherent conflict of interest
        between the adjuster&rsquo;s duty to the policyholder under the insurance contract
        and the adjuster&rsquo;s economic interest in maintaining favorable performance
        numbers with the carrier.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The metric itself is not complicated. What makes it consequential is how it is used
        &mdash; and what it incentivizes.
      </p>

      <CalloutBox variant="info" title="The Core Concept">
        <p>
          A closing ratio tracks what percentage of an adjuster&rsquo;s claims are resolved
          below a set dollar figure. When this metric is tied to performance evaluations,
          the adjuster has a financial incentive to keep claim payments low &mdash; regardless
          of what the damage actually warrants.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Closing Ratios Create Perverse Incentives
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Consider an adjuster who knows that their annual performance review will include
        a metric showing what percentage of their claims were closed below $15,000. The
        adjuster also knows that colleagues with higher closing ratios &mdash; meaning
        more claims closed below the threshold &mdash; tend to receive better evaluations,
        better assignments, and better career prospects.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Now imagine that adjuster inspecting a roof with $18,000 in legitimate storm damage.
        The adjuster has a choice: write an accurate estimate that reflects the full scope
        of damage, or find ways to bring the number under the threshold. Perhaps the adjuster
        does not include the damaged ridge cap. Perhaps the adjuster classifies a full
        replacement as a repair. Perhaps the adjuster uses pricing that does not reflect
        actual local labor and material costs. Perhaps the adjuster excludes{' '}
        <Link href="/resources/overhead-and-profit" className="text-[#2E74B5] underline">
          overhead and profit
        </Link>{' '}
        on the theory that the homeowner has not yet hired a general contractor.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Each of these decisions, individually, might appear to have a technical justification.
        But when they consistently push estimates below a predetermined threshold, a pattern
        emerges &mdash; one that has nothing to do with accurate damage assessment and
        everything to do with satisfying an internal performance metric.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Adjusting Process Becomes Outcome-Driven
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        In a fair claims environment, the process determines the outcome: the adjuster
        inspects the damage, documents what is found, applies the policy terms, and the
        resulting number is whatever it is. The outcome follows the process.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When closing ratios drive performance evaluations, this relationship inverts. The
        desired outcome &mdash; a claim closed below a certain number &mdash; drives the
        process. The adjuster works backward from the target figure, finding ways to
        justify the number rather than discovering what the damage actually costs to repair.
        The{' '}
        <Link href="/resources/scope-of-loss" className="text-[#2E74B5] underline">
          scope of loss
        </Link>{' '}
        gets trimmed. The unit pricing gets adjusted. The line items get consolidated or
        eliminated. The estimate becomes a document engineered to hit a target, not a
        document designed to capture the actual loss.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Who Benefits and Who Loses
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The carrier benefits from lower aggregate claim payouts. Adjusters who maintain
        favorable closing ratios benefit through career advancement. The policyholder, who
        paid premiums in exchange for a promise of fair indemnification, is the one who
        absorbs the shortfall &mdash; often without realizing it.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many policyholders accept the adjuster&rsquo;s estimate at face value, trusting
        that the number reflects an honest evaluation. They may never discover that the
        estimate was shaped not by the facts of their loss, but by an internal metric they
        were never told about.
      </p>

      <CalloutBox variant="warning" title="The Policyholder Is Rarely Told">
        <p>
          Insurance companies do not disclose their internal performance metrics to
          policyholders. A homeowner reviewing an adjuster&rsquo;s estimate has no way to
          know whether the adjuster was evaluating damage objectively or working to keep
          the number below a performance threshold. The only indication may be an estimate
          that seems too low for the visible damage.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Conflict with Fair Claims Handling Obligations
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California imposes specific obligations on insurers to handle claims fairly. The{' '}
        <Link href="/resources/california-fair-claims" className="text-[#2E74B5] underline">
          Fair Claims Settlement Practices Regulations
        </Link>{' '}
        (10 CCR &sect; 2695 et seq.) require insurers to conduct reasonable investigations
        and to attempt in good faith to effectuate prompt, fair, and equitable settlements
        of claims in which liability has become reasonably clear (10 CCR &sect; 2695.7(b)).
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        California Insurance Code &sect; 790.03(h) prohibits a range of unfair claims
        practices, including:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Misrepresenting pertinent facts or insurance policy provisions relating to
          coverages at issue (&sect; 790.03(h)(1))
        </li>
        <li>
          Failing to adopt and implement reasonable standards for the prompt investigation
          of claims arising under insurance policies (&sect; 790.03(h)(3))
        </li>
        <li>
          Not attempting in good faith to effectuate prompt, fair, and equitable settlements
          of claims in which liability has become reasonably clear (&sect; 790.03(h)(5))
        </li>
        <li>
          Compelling insureds to institute litigation to recover amounts due under an insurance
          policy by offering substantially less than the amounts ultimately recovered
          (&sect; 790.03(h)(6))
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        A system that incentivizes adjusters to close claims below predetermined dollar
        thresholds &mdash; rather than at the amount the damage actually warrants &mdash;
        raises questions about whether the carrier is meeting these statutory obligations.
        An adjuster who is working backward from a closing ratio target is not conducting
        a reasonable investigation focused on the policyholder&rsquo;s actual loss. The
        adjuster is conducting an investigation focused on reaching a predetermined outcome.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The &ldquo;Good Faith&rdquo; Question
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        California&rsquo;s implied covenant of good faith and fair dealing requires insurers
        to give at least as much consideration to the policyholder&rsquo;s interests as to
        their own. In <em>Egan v. Mutual of Omaha Insurance Co.</em> (1979) 24 Cal.3d 809,
        the California Supreme Court held that it is essential for an insurer to fully
        inquire into possible bases that might support the insured&rsquo;s claim. When an
        adjuster&rsquo;s investigation is shaped by an incentive to close claims below a
        specific dollar figure, the question becomes whether the insurer is truly giving
        the policyholder&rsquo;s interests equal weight &mdash; or whether the internal
        metric has tilted the scale before the inspection even begins.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Patterns That May Suggest Closing Ratio Influence
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Policyholders cannot access an adjuster&rsquo;s internal performance metrics
        directly. But certain patterns in the claims process can suggest that something
        other than objective damage assessment is driving the estimate:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        1. The Estimate Falls Just Below a Round Number
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When an estimate comes in at $9,800, $14,700, or $24,500 &mdash; suspiciously
        close to, but just under, common threshold amounts &mdash; it is worth examining
        whether the numbers were shaped to fit a target rather than to reflect the damage.
        This is not proof of manipulation, but it is a data point worth noting.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        2. Obvious Damage Is Missing from the Estimate
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the adjuster inspected damage that is clearly visible &mdash; and that damage
        does not appear in the estimate at all &mdash; the omission requires an explanation.
        Sometimes damage is genuinely excluded by the policy. But sometimes the omission
        is what brings the total below a threshold number.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        3. Overhead and Profit Are Excluded Without Explanation
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Excluding{' '}
        <Link href="/resources/overhead-and-profit" className="text-[#2E74B5] underline">
          overhead and profit
        </Link>{' '}
        from a claim estimate can reduce the total by 20 percent or more. When O&amp;P is
        excluded from a claim that clearly involves the type of work requiring a general
        contractor, policyholders should ask whether the exclusion reflects a legitimate
        assessment or a tool for reaching a lower number.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        4. The Adjuster Resists Re-Inspection
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a policyholder or their representative identifies damage that was missed during
        the initial inspection and requests a re-inspection, an adjuster working under
        closing ratio pressure has a disincentive to return. Additional inspection often
        means additional damage, which means a higher claim &mdash; which may push the
        number past the threshold.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        5. The Estimate Uses Below-Market Pricing
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the adjuster&rsquo;s{' '}
        <Link href="/resources/xactimate" className="text-[#2E74B5] underline">
          Xactimate
        </Link>{' '}
        estimate uses labor rates, material costs, or line items that do not reflect actual
        local market conditions, the result is an artificially low number. When the pricing
        is systematically below market &mdash; not just on one line item but across the
        entire estimate &mdash; it suggests the pricing may have been selected to reach
        an outcome rather than to reflect reality.
      </p>

      <CalloutBox variant="tip" title="Get an Independent Estimate">
        <p>
          The single most effective way to identify whether an adjuster&rsquo;s estimate
          is accurate is to obtain an independent estimate from a licensed contractor or a{' '}
          <Link href="/resources/public-adjuster" className="text-[#2E74B5] underline">
            licensed Public Adjuster
          </Link>
          . When there is a significant gap between the insurer&rsquo;s estimate and an
          independent assessment, that gap demands an explanation.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Documenting Potential Bias in Your Claim
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If a policyholder suspects that their claim estimate was influenced by internal
        performance metrics rather than objective damage assessment, documentation is
        critical. The following steps can help build a record:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Photograph everything</strong> &mdash; Document all visible damage
          before, during, and after the adjuster&rsquo;s inspection. If the adjuster
          walked past visible damage without noting it, the photographs will tell
          the story.
        </li>
        <li>
          <strong>Obtain a detailed copy of the estimate</strong> &mdash; Request the
          full Xactimate estimate, not just a summary. Review every line item for
          accuracy, completeness, and pricing.
        </li>
        <li>
          <strong>Compare the estimate to independent assessments</strong> &mdash;
          Get a contractor&rsquo;s estimate or hire a Public Adjuster to prepare an
          independent scope and estimate. Document any discrepancies line by line.
        </li>
        <li>
          <strong>Note the adjuster&rsquo;s inspection time</strong> &mdash; Record
          when the adjuster arrived and departed. A thorough inspection of significant
          damage takes time. A 15-minute walk-through of a home with extensive storm
          damage is not a reasonable investigation.
        </li>
        <li>
          <strong>Put disputes in writing</strong> &mdash; When challenging the
          estimate, do so in writing and request written responses. This creates a
          record that may be valuable later.
        </li>
        <li>
          <strong>Request the adjuster&rsquo;s notes and photographs</strong> &mdash;
          Under California law, you are entitled to copies of all information in your
          claim file that pertains to the claim (10 CCR &sect; 2695.7(d)). This includes
          the adjuster&rsquo;s notes and photographs.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Broader Context: Industry Claims Practices
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Closing ratios do not exist in isolation. They are part of a broader set of{' '}
        <Link href="/resources/carrier-claims-tactics" className="text-[#2E74B5] underline">
          carrier claims practices
        </Link>{' '}
        that have evolved over decades. The insurance industry has long used consulting firms
        to design claims-handling systems that prioritize speed and cost containment. Desk
        reviews that override field adjusters&rsquo; assessments, preferred vendor programs
        that control repair costs, and estimating software settings that systematically reduce
        line item pricing are all part of the same ecosystem.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Closing ratios are one metric within this system &mdash; but they are a particularly
        revealing one, because they make the incentive structure explicit. When an adjuster
        is measured by how many claims close below a dollar threshold, the connection between
        the adjuster&rsquo;s economic self-interest and the policyholder&rsquo;s underpayment
        is direct and undeniable.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        What Policyholders Can Do
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Understanding that internal performance metrics may be influencing claim outcomes
        does not, by itself, change the outcome. But awareness changes how a policyholder
        approaches the process:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Do not accept the first offer at face value</strong> &mdash; The{' '}
          <Link href="/resources/first-offer-lowball" className="text-[#2E74B5] underline">
            first offer
          </Link>{' '}
          is a starting point. Challenge it with independent evidence.
        </li>
        <li>
          <strong>Hire professionals to represent your interests</strong> &mdash; A{' '}
          <Link href="/resources/public-adjuster" className="text-[#2E74B5] underline">
            Public Adjuster
          </Link>{' '}
          works exclusively for the policyholder, not the carrier. Their estimate is not
          influenced by closing ratios or internal performance metrics.
        </li>
        <li>
          <strong>Know your policy</strong> &mdash; Read the{' '}
          <Link href="/resources/declarations-page" className="text-[#2E74B5] underline">
            declarations page
          </Link>{' '}
          and understand your coverages. When the adjuster&rsquo;s estimate excludes items
          that appear to be covered, ask for a written explanation citing the specific
          policy language.
        </li>
        <li>
          <strong>Use the appraisal process</strong> &mdash; If you cannot resolve a
          dispute over the amount of loss, most policies include an{' '}
          <Link href="/resources/appraisal" className="text-[#2E74B5] underline">
            appraisal
          </Link>{' '}
          provision that allows for independent resolution.
        </li>
        <li>
          <strong>File a complaint if necessary</strong> &mdash; If the insurer&rsquo;s
          conduct violates the Fair Claims Settlement Practices Regulations, filing a
          complaint with the{' '}
          <Link href="/resources/file-cdi-complaint-guide" className="text-[#2E74B5] underline">
            California Department of Insurance
          </Link>{' '}
          creates a regulatory record.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        A Note on What This Article Does Not Claim
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This article describes the concept of closing ratios and the incentive structures
        they create. It does not allege that every adjuster who uses one is acting in bad
        faith, and it does not allege that every low estimate is the product of metric
        manipulation. Many adjusters work conscientiously within the systems their employers
        design. The issue is the system itself &mdash; the structure of incentives that
        can push even well-intentioned adjusters toward outcomes that favor the carrier at
        the policyholder&rsquo;s expense.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Policyholders should focus on the facts of their own claims: Is the estimate
        accurate? Does it reflect the full scope of damage? Does it use fair pricing?
        Are all covered items included? If the answer to any of these questions is no,
        the reason matters less than the remedy &mdash; which is to challenge the estimate
        with independent evidence and, if necessary, professional representation.
      </p>

      {/* ── Sources ──────────────────────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Sources &amp; Further Reading
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Pillsbury &amp; Coleman, LLP</strong> &mdash; Policyholder advocacy
          analysis of insurer claims practices and adjuster performance metrics. Pillsbury
          &amp; Coleman&rsquo;s published materials on closing ratios and carrier incentive
          structures informed the core analysis in this article. Search for Pillsbury &amp;
          Coleman publications on insurance claims handling practices for their detailed
          discussion of these issues.
        </li>
        <li>
          <strong>California Insurance Code &sect; 790.03</strong> &mdash; The statutory
          framework for unfair claims settlement practices in California, available through
          the California Legislative Information website (leginfo.legislature.ca.gov).
        </li>
        <li>
          <strong>California Code of Regulations, Title 10, &sect; 2695 et seq.</strong>
          &mdash; The Fair Claims Settlement Practices Regulations, available through the
          California Department of Insurance website (insurance.ca.gov).
        </li>
      </ul>

      {/* ── Disclaimer ──────────────────────────────────────────── */}

      <CalloutBox variant="legal" title="Disclaimer">
        <p>
          This article is for general educational purposes only and does not constitute
          legal advice. Nothing in this article should be construed as a legal opinion or
          as a substitute for consultation with a qualified attorney. The statutes, regulations,
          and case law discussed reflect California law as of the date of publication. Insurance
          claims are fact-specific &mdash; consult a licensed attorney or a licensed Public
          Adjuster for guidance on your specific situation.
        </p>
        <p className="mt-2">
          <strong>Author:</strong> Leland Coontz III, Licensed Public Adjuster, CA License #2B53445
        </p>
      </CalloutBox>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Is Your Claim Estimate Too Low?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          A Licensed Public Adjuster can prepare an independent damage assessment based
          solely on the facts of your loss &mdash; not on internal carrier metrics or
          performance targets. Get a professional evaluation of what your claim is actually
          worth.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Request a Free Claim Review &rarr;
        </Link>
      </div>
    </>
  )
}
