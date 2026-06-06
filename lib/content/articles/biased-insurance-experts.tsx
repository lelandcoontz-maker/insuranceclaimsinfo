import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Biased Insurance Experts: How to Identify, Challenge, and Defeat the Insurer’s Hired Professionals',
  description:
    'Insurance companies hire engineers, hygienists, and estimators who consistently minimize claims. Learn how the repeat-player system works, how limited assignments pre-load the outcome, the confirmation bias feedback loop, and how to fight back — including licensing board complaints.',
  summary:
    'Insurers often hire engineers, hygienists, and estimators who repeatedly minimize claims, helped by narrow assignments that pre-shape the conclusion. Recognize the repeat-player bias, get your own qualified expert, and consider a licensing-board complaint when a report is indefensible.',
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
        When your insurance company sends an engineer to inspect your roof, a hygienist to test for
        smoke contamination, or an estimator to scope your damage &mdash; those professionals are selected
        and paid by the insurer. They are not independent. And in far too many cases, they
        consistently produce findings that minimize the claim. This is not coincidence; it is
        a systemic problem in the insurance industry, and understanding how it works is the first
        step toward defeating it.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Repeat-Player Expert Problem
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance companies do not randomly select experts. They maintain rosters of
        &ldquo;preferred&rdquo; professionals &mdash; engineers, industrial hygienists, contractors,
        appraisers &mdash; who are used repeatedly across thousands of claims. These experts depend on
        the insurer for a significant portion of their income. The incentive structure is obvious:
        experts who consistently produce findings favorable to the insurer keep getting hired.
        Those who do not, get dropped from the roster.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This creates a <strong>selection-bias dynamic</strong>. Over time, the insurer&apos;s
        expert roster tends to be populated by professionals whose work product the carrier finds
        useful. Many of these professionals are not engineers or hygienists who take insurance
        assignments occasionally as part of a broader practice. Some have built their professional
        practice largely around insurance work and may derive most or all of their income from
        carrier-side assignments. That posture, by its nature, tends to produce opinions that
        support denial or reduction of claims.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The scale of the problem is documented. In testimony before the Florida House of Representatives
        in December 2022, whistleblower adjusters provided devastating numbers: Jordan Lee stated that
        44 of his 46 field reports &mdash; 96% &mdash; were altered by the insurer, with some estimates
        reduced by as much as 98%. Ben Mandell testified that 18 of 20 reports (90%) were changed,
        and that he was fired for refusing to omit documented damage. In May 2025, the{' '}
        <a href="https://www.hsgac.senate.gov/subcommittees/dmdcc/hearings/examining-the-insurance-industrys-claims-practices-following-recent-natural-disasters/" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] hover:underline">
          U.S. Senate Subcommittee on Disaster Management
        </a>{' '}
        held further hearings on insurer claims practices following recent natural disasters.
        According to the testimony presented, witnesses from Pilot Catastrophe Services alleged
        that field estimates on Allstate-handled claims were modified after submission. A forensic
        engineer testified that over 90% of his causation reports had been altered through a
        so-called &ldquo;peer review&rdquo; process at the home office that, in his account,
        reversed his field findings.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Limited Assignment: Pre-Loading the Investigation
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The bias does not always originate with the expert. In many cases, the insurance company
        pre-loads the investigation by giving the expert a <strong>limited assignment</strong> that
        constrains what they are allowed to examine, test, or consider.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For example, an insurer may instruct a hygienist to test only for certain contaminants
        while ignoring others that are plainly present. An engineer may be told to evaluate only
        the roof and not the interior water damage that resulted from the roof failure. A cause-and-origin
        expert may be asked to determine whether the damage is &ldquo;consistent with&rdquo; a
        specific excluded cause &mdash; framing the question in a way that points toward the
        conclusion the insurer wants.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The effect is to create a report that appears objective &mdash; it was written by a
        licensed professional using recognized methods &mdash; but that was designed from the
        outset to reach a particular conclusion. The expert may have performed competent work
        within the scope they were given, but the scope itself was drawn to exclude evidence that
        would support the claim.
      </p>

      <CalloutBox variant="warning" title="Ask What the Expert Was Told to Do">
        <p>
          Always request the expert&apos;s assignment letter or scope of work from the insurer.
          Under California&apos;s{' '}
          <Link href="/resources/california-fair-claims" className="text-[#2E74B5] hover:underline">
            Fair Claims Settlement Practices
          </Link>{' '}
          (10 CCR &sect;2695.7(d)), the insurer must provide the basis for its coverage
          decision, including expert reports and the documents relied upon. If the assignment
          letter limited the scope of the investigation, that limitation is itself evidence of
          a biased process.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Confirmation Bias Feedback Loop
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The systemic bias problem extends beyond the individual expert and the individual claim.
        Over time, it creates a <strong>feedback loop</strong> that distorts the judgment of the
        adjusters who read these reports.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here is how it works: an engineer inspects a roof and concludes that the damage is
        &ldquo;long-term pre-existing deterioration&rdquo; rather than storm damage, or that the
        missing shingles were torn off by a roofer trying to manufacture a claim rather than by
        wind. The adjuster &mdash; who may be relatively new to the industry and relies on the
        engineer&apos;s expertise &mdash; reads this report and accepts it as the professional
        opinion of a licensed engineer. The next time a similar claim comes in, the adjuster
        is already primed to believe that the damage is pre-existing. After reading dozens of
        these reports, the adjuster begins to internalize the conclusions as general truths:
        that roofers routinely tear shingles off to manufacture claims, that cracks are always
        from long-term settlement and never from a recent event, that water damage is always
        the result of deferred maintenance.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The adjusters develop a worldview shaped by a biased data set. They start to believe that
        legitimate storm damage almost never happens, that personal property claims are routinely
        inflated, that policyholders are generally dishonest. This confirmation bias then
        reinforces the demand for experts who will validate the adjuster&apos;s suspicions,
        which produces more biased reports, which further entrenches the adjuster&apos;s
        assumptions. The result is a self-reinforcing cycle of skepticism that has no external
        correction mechanism &mdash; because the only &ldquo;evidence&rdquo; the adjusters see
        is the evidence produced by the experts the insurer selects.
      </p>

      <CalloutBox variant="important" title="The Circular Logic Problem">
        <p>
          The engineer says the damage is pre-existing. The adjuster believes the engineer
          because they have a license and a report. The adjuster then handles future claims
          with the assumption that damage is usually pre-existing. The insurer hires the same
          engineer, who produces the same conclusion. The cycle has no natural exit &mdash; it
          can only be broken by independent evidence from outside the insurer&apos;s ecosystem.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Case Study: Eaton Fire &ldquo;Sham Inspections&rdquo; Class Action
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The repeat-player expert problem is not theoretical. In the aftermath of the Eaton fire, a
        class action lawsuit was filed alleging that insurance company-assigned inspectors conducted
        &ldquo;sham inspections&rdquo; &mdash; inspections that were pre-determined to find minimal
        damage regardless of the actual conditions on the ground. According to the complaint, these
        inspectors spent inadequate time on-site, used improper methods, and reached conclusions
        that were wildly inconsistent with the actual extent of fire damage to the properties.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The lawsuit highlights the core structural problem: these inspectors were selected and paid
        by the carriers, depended on the carriers for repeat business, and understood &mdash; whether
        explicitly told or not &mdash; that finding extensive damage would mean losing future
        assignments. The economic incentive structure made the outcome predictable before the
        inspector ever set foot on the property.
      </p>

      <CalloutBox variant="important" title="Not Limited to Fire Claims">
        <p>
          The pattern alleged in the Eaton fire lawsuit &mdash; pre-determined outcomes from
          carrier-dependent experts &mdash; exists across every type of claim. The same structural
          incentives apply to engineers assessing structural damage, environmental consultants
          testing for smoke or mold contamination, contents estimators valuing personal property
          losses, roofing consultants evaluating wind and hail damage, and appraisers determining
          the value of a loss.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Types of Experts Insurers Use
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Engineers</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        After a fire, wind event, earthquake, or water loss, the insurer may send a structural or
        forensic engineer to determine the cause and extent of damage. A biased engineer may attribute
        fire damage to &ldquo;pre-existing settlement,&rdquo; classify wind damage as &ldquo;long-term
        wear,&rdquo; or limit the scope of structural damage to minimize the insurer&apos;s exposure.
        For more on how engineering reports affect coverage decisions, see our guide on{' '}
        <Link href="/resources/engineering-reports-vs-coverage" className="text-[#2E74B5] hover:underline">
          engineering reports and coverage
        </Link>.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Industrial Hygienists</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        For{' '}
        <Link href="/resources/smoke-damage-claims" className="text-[#2E74B5] hover:underline">smoke damage claims</Link>,
        the insurer hires a Certified Industrial Hygienist (CIH) to test for contamination. A
        biased hygienist may test only a few surfaces, use testing thresholds that are higher than
        health-based standards, or compare results to &ldquo;background&rdquo; levels that are
        themselves elevated from the same event. The sampling methodology matters enormously &mdash;
        an expert who uses less sensitive methods or samples fewer locations will inevitably find less
        contamination. For a deeper understanding of how sampling methods can be manipulated, see
        our guide on{' '}
        <Link href="/resources/environmental-sampling-methods" className="text-[#2E74B5] hover:underline">
          environmental sampling methods
        </Link>.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Estimators and Adjusters</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurer&apos;s adjuster or estimator produces the{' '}
        <Link href="/resources/xactimate" className="text-[#2E74B5] hover:underline">Xactimate estimate</Link>{' '}
        that determines your payout. Biased estimating includes using lower-grade materials than what
        was in the home, omitting line items for damage that is clearly present, applying the
        wrong labor rates, and excluding overhead and profit for general contractors.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Appraisers</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        In the{' '}
        <Link href="/resources/appraisal" className="text-[#2E74B5] hover:underline">appraisal process</Link>,
        each side selects an appraiser. The insurer&apos;s appraiser is supposed to independently
        determine the value of the loss. In practice, insurers frequently select appraisers from the
        same pool of repeat-player experts who consistently value losses on the low end.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why Carriers Send Engineers
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance companies do not send forensic engineers to help you. They send them to
        create a documented basis for denying or reducing your claim. The typical sequence:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>You file a claim after a covered event</li>
        <li>The carrier&apos;s field adjuster inspects and finds damage</li>
        <li>The claim amount is significant &mdash; full replacement, not a small repair</li>
        <li>The carrier assigns a &ldquo;forensic engineer&rdquo; or &ldquo;cause and origin expert&rdquo; for a second look</li>
        <li>The expert produces a report attributing the damage to something other than the covered event</li>
        <li>The carrier uses the report to deny or drastically reduce the claim</li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        The decision to send an engineer is almost always triggered by the dollar amount of the
        claim, not by a genuine question about causation. If the repair estimate is $8,000, you
        probably will not see an engineer. If it is $25,000+, expect one.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Common Flaws in Expert Reports
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        1. Attributing Covered Damage to &ldquo;Wear and Tear&rdquo;
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The most common tactic. The expert acknowledges that damage exists but attributes
        it to aging, weathering, or normal deterioration rather than the specific covered event.
        The problem: storm damage and aging are not mutually exclusive. A 15-year-old roof can
        absolutely sustain hail damage. The age of the roof does not make it immune to hail, and
        it does not mean all damage on an older roof is pre-existing. See our guide on{' '}
        <Link href="/resources/pre-existing-vs-storm-damage" className="text-[#2E74B5] hover:underline">
          pre-existing vs. storm damage
        </Link>{' '}
        and our explanation of why{' '}
        <Link href="/resources/wear-and-tear-cause-of-loss" className="text-[#2E74B5] hover:underline">
          wear and tear is a cause-of-loss exclusion, not a condition-of-property exclusion
        </Link>.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        2. Inadequate or Selective Inspection
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many carrier engineers spend 30&ndash;60 minutes on a property that warrants hours.
        On roof claims, they may inspect only one or two slopes, use a single test square,
        photograph only areas that support their conclusion, and ignore areas with obvious
        damage. A proper hail inspection requires test squares on every directional face of the
        roof (hail is wind-driven and affects different slopes differently), examination of soft
        metals (vents, flashing, gutters) for collateral evidence, and documentation of the full
        roof &mdash; not just cherry-picked sections.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        3. Misidentifying Damage
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Carrier engineers frequently misidentify or reclassify damage to support a denial.
        On roof claims, common mischaracterizations include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Calling hail strikes &ldquo;blistering&rdquo; (a manufacturing defect)</li>
        <li>Labeling granule loss from hail impact as &ldquo;normal granule erosion&rdquo;</li>
        <li>Attributing fractures in the shingle mat to &ldquo;thermal cycling&rdquo; instead of impact</li>
        <li>Calling bruised shingles &ldquo;foot traffic damage&rdquo; or blaming roofers for &ldquo;manufacturing&rdquo; the damage</li>
        <li>Claiming the impacts are &ldquo;cosmetic only&rdquo; and do not affect function</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Each of these has distinct physical characteristics that a qualified expert can distinguish.
        Hail impacts leave random-pattern, circular or oval marks with sharp edges. Blistering
        creates raised, bubbled areas from trapped moisture. Foot traffic creates scuff marks in
        consistent patterns. The difference is visible under magnification and with proper training.
        For more on hail damage identification, see our guide on{' '}
        <Link href="/resources/hail-damage-science" className="text-[#2E74B5] hover:underline">
          the science of hail damage
        </Link>.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        4. Ignoring Collateral Evidence
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Hail and wind do not only hit your roof. They hit everything: aluminum gutters, exhaust
        vents, pipe boots, HVAC units, fence rails, patio furniture, vehicles, window screens.
        If these soft metals show fresh dent patterns consistent with hail, that is powerful
        corroborating evidence. Many carrier engineers either do not inspect collateral items
        or do not mention them in their report. Similarly, on water claims, a carrier engineer
        may focus on the immediate area of the leak and ignore the downstream damage path.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        5. Relying on Outdated or Incorrect Standards
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some carrier engineers apply manufacturer testing standards (like UL 2218 impact resistance
        ratings) as if they define the threshold for &ldquo;real&rdquo; damage in the field. These
        lab standards test new materials under controlled conditions &mdash; they do not account for
        aged, weathered materials that are more vulnerable to impact. A shingle that passes a Class
        4 impact rating when new can absolutely sustain functional hail damage after 10 years of UV
        exposure and thermal cycling.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        6. Form-Letter Reports
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some expert reports are essentially templates with the address changed. The same boilerplate
        language, the same conclusions, applied to every property. If the report reads like it could
        apply to any building in any city, it probably was not written based on a careful inspection
        of your specific property. Copy-and-paste reports are a hallmark of volume-driven
        expert firms that process hundreds of carrier assignments per year.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        7. &ldquo;Peer Review&rdquo; That Reverses Field Findings
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        One of the most insidious practices &mdash; now documented in federal investigations and
        Senate hearings &mdash; is the insurer&apos;s use of &ldquo;peer review&rdquo; to alter
        expert reports after the field inspection. The engineer inspects your property and writes
        a preliminary report. That report goes back to the engineering firm&apos;s home office,
        where a reviewer &mdash; who never visited your property &mdash; rewrites the conclusions
        to align with the insurer&apos;s desired outcome. The final report may bear little
        resemblance to what the field engineer actually observed. In Sandy-era litigation, over
        500 altered engineering reports were identified, and one engineering firm received a
        50-count criminal indictment including felony fraud charges.
      </p>

      <CalloutBox variant="important" title="Demand Both Versions of the Report">
        <p>
          Request both the engineer&apos;s preliminary field report and the final
          post-&ldquo;peer review&rdquo; report. If the conclusions changed significantly between
          versions &mdash; particularly if damage findings were reduced or eliminated &mdash; that is
          powerful evidence of manipulation. The American Policyholder Association has developed
          a free engineering report scoring tool (AEREP) that helps policyholders evaluate whether
          an engineering report follows proper methodology or shows signs of bias.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Demer Framework for Assessing Expert Bias
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        In <em>Demer v. IBM Corp. LTD Plan</em> (9th Circuit, 2016), the court established a
        framework for evaluating whether an insurer&apos;s expert is biased. While the case arose
        in the ERISA context, California state courts have begun applying similar principles to
        property insurance disputes. The <em>Bagramyan v. Government Employees Insurance Co.</em>
        decision was one of the first California appellate cases to recognize an &ldquo;inference of
        bias&rdquo; standard.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Demer framework looks at four factors:
      </p>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Prior business dealings and compensation.</strong> How much business does the
          expert receive from this insurer? If an engineering firm gets 80% of its revenue from one
          insurance company, its independence is questionable.
        </li>
        <li>
          <strong>Patterns across other claim files.</strong> Does this expert consistently produce
          findings that favor the insurer? If the same engineer attributes damage to &ldquo;pre-existing
          conditions&rdquo; in 90% of cases, that pattern is evidence of bias.
        </li>
        <li>
          <strong>Reliability of principles and methodologies.</strong> Does the expert use
          accepted, scientifically sound methods? Or do they use unconventional approaches that
          happen to produce insurer-favorable results?
        </li>
        <li>
          <strong>Insurer&apos;s safeguards for ensuring impartiality.</strong> Does the insurer
          have any process to verify that its experts are providing unbiased assessments? Or does
          it simply hire whoever produces the lowest numbers?
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Challenge Expert Reports
      </h2>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Get the full report.</strong> The insurer must provide you a copy of the expert&apos;s
          report. Under California&apos;s Fair Claims Settlement Practices (10 CCR &sect;2695.7(d)),
          the insurer must provide the basis for any denial, including expert reports relied upon.
          Request all photos, measurements, field notes, the assignment letter, and any
          pre-inspection communications &mdash; not just the summary letter.
        </li>
        <li>
          <strong>Hire your own independent expert.</strong> This is the most important step. Get
          your own engineer, hygienist, or contractor to inspect the same damage and produce an
          independent report. When the two reports conflict, the insurer can no longer rely solely
          on their expert. Your expert should document everything the carrier&apos;s expert missed.
        </li>
        <li>
          <strong>Request the expert&apos;s qualifications and relationship with the insurer.</strong>{' '}
          Ask for: the expert&apos;s CV, how many assignments they have received from this
          insurer in the past 3 years, their total compensation from this insurer, and the
          percentage of their work that comes from insurance company assignments.
        </li>
        <li>
          <strong>Challenge the methodology.</strong> If the engineer attributed damage to
          &ldquo;pre-existing conditions,&rdquo; ask what evidence supports that conclusion. If the
          hygienist tested only one room, ask why the entire building was not tested. If the
          estimator used economy-grade materials, ask what the basis was for departing from what
          was actually installed.
        </li>
        <li>
          <strong>Check weather records.</strong> On storm claims, obtain official weather data
          (NOAA storm reports, hail databases, local weather station records) confirming the
          event &mdash; hail size, wind speed, direction, and duration. If the data shows 1.5&Prime;
          hail hit your area and the engineer says there is no hail damage, the weather data
          undermines the report.
        </li>
        <li>
          <strong>Look for neighboring claims.</strong> If your neighbors filed claims and received
          payment for the same event, that is evidence that the event caused damage in your
          area. The carrier cannot credibly argue your property was untouched when properties on
          either side were damaged.
        </li>
        <li>
          <strong>Document the pattern.</strong> If the same expert appears in multiple claims in
          your area (common after a wildfire or storm), document the pattern. Other policyholders,
          Public Adjusters, and attorneys in the area may have information about the expert&apos;s
          track record.
        </li>
        <li>
          <strong>Write a detailed rebuttal letter.</strong> Submit a written response to the
          insurer that addresses the expert&apos;s report point by point, attaches your
          independent expert&apos;s findings, includes weather data and collateral evidence, and
          demands the claim be reconsidered. See our guide on{' '}
          <Link href="/resources/responding-to-insurer-in-writing" className="text-[#2E74B5] hover:underline">
            writing effective claim correspondence
          </Link>.
        </li>
        <li>
          <strong>Invoke appraisal.</strong> If the dispute is about the amount or extent of damage,
          the{' '}
          <Link href="/resources/appraisal" className="text-[#2E74B5] hover:underline">appraisal process</Link>{' '}
          removes the carrier&apos;s expert from the equation entirely. Each side selects an
          appraiser, they select an umpire, and the umpire&apos;s determination is binding.
        </li>
        <li>
          <strong>File a CDI complaint.</strong> If the insurer is relying on a clearly biased
          expert to underpay your claim, that may violate California&apos;s{' '}
          <Link href="/resources/california-fair-claims" className="text-[#2E74B5] hover:underline">
            Fair Claims Settlement Practices
          </Link>{' '}
          regulations. See our guide on{' '}
          <Link href="/resources/cdi-complaint" className="text-[#2E74B5] hover:underline">filing a CDI complaint</Link>.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What to Do Before the Expert Inspects
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the carrier tells you they are sending an expert, do not panic &mdash; prepare:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Be present during the inspection</strong> (or have your representative there).
          Note which areas the expert inspects, how long they spend, and whether they examine
          collateral items.
        </li>
        <li>
          <strong>Video record the entire inspection.</strong> Inform the expert in advance that
          you will be recording. Document which areas they inspect, how long they spend on each
          section, and what they say aloud. If the final report later claims areas were undamaged
          that you observed the expert spending minimal time on, the video is your evidence. See
          our guide on{' '}
          <Link href="/resources/recording-insurance-inspections" className="text-[#2E74B5] hover:underline">
            recording insurance inspections
          </Link>.
        </li>
        <li>
          <strong>Point out damage</strong> that the expert may overlook &mdash; collateral dents
          on soft metals, specific areas of concern, damage that is not immediately visible.
        </li>
        <li>
          <strong>Do not sign anything</strong> at the inspection. The expert may ask you to
          sign an access agreement or questionnaire. Read everything before signing &mdash; or
          decline.
        </li>
        <li>
          <strong>Have your own expert inspect first</strong> if possible. Having a documented
          independent inspection before the carrier&apos;s expert arrives creates a baseline that
          the expert cannot retroactively explain away.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Demanding Transparency from Carrier-Assigned Experts
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        You have the right to scrutinize every expert the insurer relies on. The following
        information requests can expose whether the expert is truly independent or is a repeat
        player producing predictable results:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
        <li>
          <strong>Full professional qualifications.</strong> Request the expert&apos;s CV, licenses,
          certifications, and any disciplinary history. Verify that their credentials are relevant
          to the specific type of damage they were hired to evaluate.
        </li>
        <li>
          <strong>Methodology disclosure.</strong> Demand a detailed explanation of the methods used,
          including what standards or protocols they followed, what areas they inspected (and what
          areas they did not), how long they spent on-site, and what equipment they used.
        </li>
        <li>
          <strong>Prior carrier work history.</strong> Ask how many assignments the expert (or their
          firm) has received from this insurer in the past three to five years, the total
          compensation received, and what percentage of their total revenue comes from insurance
          company assignments. This information goes directly to the Demer bias factors.
        </li>
        <li>
          <strong>Outcome history.</strong> If discoverable (often in litigation), request data on
          the expert&apos;s track record: in what percentage of assignments did they find damage
          below the policyholder&apos;s claimed amount? A 95% rate of insurer-favorable findings
          is not evidence of expertise &mdash; it is evidence of bias.
        </li>
        <li>
          <strong>Communication with the carrier.</strong> Were there pre-inspection communications
          from the insurer that framed the assignment, suggested conclusions, or limited the
          scope of the inspection? Any such communications can be powerful evidence that the
          outcome was directed, not independently determined.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Filing Complaints with Professional Licensing Boards
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When an expert&apos;s conclusions are not merely unfavorable but are objectively wrong,
        unsupported by proper methodology, or inconsistent with the physical evidence, there is
        a remedy that many policyholders overlook: filing a complaint with the expert&apos;s
        professional licensing board.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Licensed engineers in California are regulated by the Board for Professional Engineers,
        Land Surveyors, and Geologists (BPELSG). Industrial hygienists, while not state-licensed
        in California, hold certifications through the American Board of Industrial Hygiene (ABIH)
        that are subject to ethical standards and complaint processes. Licensed contractors are
        regulated by the Contractors State License Board (CSLB).
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Licensing boards have sustained complaints against experts who:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Reached conclusions that were contradicted by the physical evidence</li>
        <li>Failed to follow accepted engineering standards or protocols</li>
        <li>Produced reports that were materially identical across different properties (boilerplate)</li>
        <li>Opined outside their area of expertise</li>
        <li>Committed outright fraud &mdash; fabricating findings or signing reports for
          inspections they did not conduct</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Consequences have included license suspensions, revocations, fines, and public
        disciplinary records. Even when the board does not sustain the complaint, the complaint
        itself becomes part of the expert&apos;s file and can be referenced if the expert is
        later challenged in litigation or deposition. More importantly, board complaints signal
        to the insurer that policyholders are scrutinizing its experts &mdash; which can change
        the calculus on future claims.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6">
        <h3 className="text-lg font-bold text-[#1F3964] mb-3">
          State Engineering License Boards &mdash; File a Complaint
        </h3>
        <ul className="space-y-3 text-gray-700">
          <li>
            <strong>California</strong> &mdash; Board for Professional Engineers, Land Surveyors,
            and Geologists (BPELSG):{' '}
            <a href="https://www.bpelsg.ca.gov/consumers/complaint_licensee.shtml" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] hover:underline">
              File a Complaint
            </a>{' '}
            | <a href="https://www.bpelsg.ca.gov/consumers/lic_lookup.shtml" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] hover:underline">
              License Lookup
            </a>
            <br />
            <span className="text-sm text-gray-500">
              Grounds: Bus. &amp; Prof. Code &sect; 6775 &mdash; fraud, deceit, misrepresentation,
              negligence, or incompetence in practice.
            </span>
          </li>
          <li>
            <strong>Texas</strong> &mdash; Board of Professional Engineers and Land Surveyors
            (TBPELS):{' '}
            <a href="https://pels.texas.gov/complaint.htm" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] hover:underline">
              File a Complaint
            </a>
            <br />
            <span className="text-sm text-gray-500">
              Grounds: Tex. Occ. Code &sect; 1001.452 &mdash; fraud, deceit, gross negligence,
              incompetency, or misconduct.
            </span>
          </li>
          <li>
            <strong>Florida</strong> &mdash; Board of Professional Engineers (FBPE):{' '}
            <a href="https://fbpe.org/legal/complaints/" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] hover:underline">
              File a Complaint
            </a>
            <br />
            <span className="text-sm text-gray-500">
              Grounds: Ch. 471, Fla. Stat. &mdash; fraud, negligence, incompetence, misconduct.
            </span>
          </li>
          <li>
            <strong>Other states:</strong> Every state has its own professional engineering board.
            Search &ldquo;[your state] board of professional engineers complaint&rdquo; to find
            the filing page. File in the state where the engineer is licensed &mdash; and if the
            engineer is licensed in a different state from where the work was performed, consider
            filing with both boards.
          </li>
        </ul>
      </div>

      <CalloutBox variant="tip" title="Your Expert Doesn't Have to Be Expensive">
        <p>
          A licensed contractor&apos;s repair estimate is often the most powerful evidence you can
          produce. It does not require hiring a forensic engineer &mdash; a detailed, honest estimate
          from a qualified local contractor showing what the repairs actually cost is hard for the
          insurer to dismiss.
        </p>
      </CalloutBox>

      <CalloutBox variant="tip" title="Score the Engineer Report Yourself">
        <p>
          The{' '}
          <a href="https://apassociation.org/" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] hover:underline">
            American Policyholder Association
          </a>{' '}
          (APA) developed a tool called{' '}
          <a href="https://apassociation.org/product/aerep-apa-engineer-report-evaluation-program-literature/" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] hover:underline">
            AEREP
          </a>{' '}
          (APA Engineer Report Evaluation Program) that helps policyholders and their
          representatives evaluate whether an engineering report follows proper methodology or
          shows signs of bias. When the evaluation identifies violations, it facilitates referral
          to state licensing boards or criminal fraud reporting through the{' '}
          <a href="https://apassociation.org/apa-engineer-research-complaint-portal/" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] hover:underline">
            APA Engineer Research &amp; Complaint Portal
          </a>.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The American Policyholder Association: Fighting Engineering Fraud
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The APA is a 501(c)(4) nonprofit founded by Doug Quinn &mdash; a Marine Corps veteran and
        former financial advisor whose home on the Jersey Shore was destroyed by Superstorm Sandy
        in 2012. Despite carrying the maximum legal amount of flood insurance, Quinn&apos;s insurer
        offered him 37 cents on the dollar. The carrier had hired U.S. Forensics, an engineering
        firm later investigated by the New York Attorney General, to inspect his property. The
        resulting report attributed his damage to pre-existing earth movement rather than the flood
        &mdash; a conclusion an independent engineer later determined was false. It took Quinn
        seven years to get back into his home.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Quinn&apos;s experience was not isolated. It was part of what became known as the Sandy
        engineering fraud scandal, documented by CBS News, 60 Minutes (&ldquo;The Storm After the
        Storm&rdquo;), and PBS Frontline (&ldquo;The Business of Disaster&rdquo;). The New York
        Attorney General announced a{' '}
        <a href="https://ag.ny.gov/press-release/2016/ag-schneiderman-announces-50-count-indictment-over-alleged-forgery-damage-reports" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] hover:underline">
          50-count criminal indictment
        </a>{' '}
        against engineering firm HiRise for forging damage reports. FEMA reopened 144,000 closed
        claims. Homeowners had been wrongfully denied approximately $400 million in payouts. The
        same executives involved in Katrina-era engineering fraud were later implicated in the
        Sandy scandal, demonstrating that the problem is not isolated incidents but a recurring
        business model.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Quinn has testified before Congress multiple times, including before the{' '}
        <a href="https://www.banking.senate.gov/download/quinn-testimony-6-16-22" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] hover:underline">
          Senate Banking Committee in 2022
        </a>{' '}
        and the{' '}
        <a href="https://www.hsgac.senate.gov/subcommittees/dmdcc/hearings/examining-the-insurance-industrys-claims-practices-following-recent-natural-disasters/" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] hover:underline">
          Senate Subcommittee on Disaster Management in May 2025
        </a>,
        where he stated that &ldquo;state regulators are asleep at the wheel&rdquo; and urged
        federal enforcement against insurer-driven engineering fraud. The APA operates a
        whistleblower program, maintains investigators with law enforcement backgrounds, and
        focuses on four objectives: lobbying for prosecution of insurer fraud, identifying
        fraudulent engineering and adjusting practices, facilitating prosecution through law
        enforcement and media, and publicizing cases to increase accountability.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Re-Inspection Game
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some carriers do not stop at one expert. When the first inspection does not produce the
        result the insurer wants &mdash; or when the policyholder pushes back with strong evidence
        &mdash; the carrier sends a second inspector, then a third. Each new inspection resets the
        clock, generates another report, and forces the policyholder to respond again. The strategy
        is attrition: most policyholders eventually give up, accept a lowball, or let their deadline
        lapse while waiting for yet another &ldquo;review.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Recognize this pattern for what it is. Your policy requires you to cooperate with
        reasonable inspections &mdash; it does not require you to submit to an unlimited number of
        them. If the carrier has already inspected the property, received your contractor&apos;s
        estimate, and obtained an expert report, a demand for a fourth or fifth inspection is no
        longer investigation &mdash; it is delay. Document every inspection request in writing, note
        how many have already occurred, and ask the carrier to explain in writing what new
        information they expect to obtain that was not available from prior inspections. If the
        pattern continues, it may support a{' '}
        <Link href="/resources/bad-faith" className="text-[#2E74B5] hover:underline">bad faith</Link>{' '}
        claim or a complaint to your state&apos;s Department of Insurance.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When Biased Expert Reliance Becomes Bad Faith
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under California law, an insurer acts in{' '}
        <Link href="/resources/bad-faith" className="text-[#2E74B5] hover:underline">bad faith</Link>{' '}
        when it fails to conduct a thorough, fair, and objective investigation. Relying on a biased
        expert to support a predetermined outcome can cross this line. Key indicators:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>The insurer ignores your independent expert&apos;s report without explanation</li>
        <li>The insurer&apos;s expert is known to consistently favor insurers across many claims</li>
        <li>The expert&apos;s methodology is unreliable or inconsistent with industry standards</li>
        <li>The insurer uses the expert&apos;s report as a shield to avoid paying undisputed amounts</li>
        <li>The expert&apos;s conclusions are contradicted by the physical evidence</li>
        <li>The insurer gave the expert a limited assignment that excluded evidence supporting coverage</li>
      </ul>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          The Insurer&apos;s Expert Does Not Have the Last Word
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          A Public Adjuster can identify bias in the insurer&apos;s expert reports, hire qualified
          independent professionals, and fight for an assessment that reflects your actual damage.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Request a Free Claim Review &rarr;
        </Link>
      </div>

      <CalloutBox variant="legal" title="Important Notice">
        <p>
          This article is provided for general educational purposes only and does not constitute
          legal advice. Insurance policies, regulations, and case law can vary significantly based
          on individual circumstances. Consult a licensed attorney for advice about your specific
          situation. If you need a referral to an attorney experienced in insurance coverage disputes,
          a licensed Public Adjuster may be able to assist.
        </p>
      </CalloutBox>
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
