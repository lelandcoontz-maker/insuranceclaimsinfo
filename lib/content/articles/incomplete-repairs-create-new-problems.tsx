import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'When the Carrier&apos;s Fix Creates a New Problem: Incomplete Repairs and the Duty to Restore',
  description:
    'When an insurance carrier&apos;s approved repair fixes one problem but creates another, the claim is not complete. Learn about the duty to restore to pre-loss condition, California regulations, and what to do when the carrier&apos;s repair leaves your property worse off.',
  summary:
    'If the carrier\'s approved repair fixes one issue but creates another, the claim is not finished. You are owed restoration to pre-loss condition under California regulations, so document the new damage and demand it be made right.',
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
        Your kitchen island had a functioning sink with hot and cold water. It was there when you
        bought the house. It was there when you renewed your insurance policy. It was there on the
        morning the pipe burst under your slab foundation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Then the carrier&apos;s preferred plumber arrived. The covered loss was a failed copper
        supply line running beneath the concrete slab to the island. The repair the carrier approved
        was a re-route: instead of tunneling under the slab to replace the damaged line, the plumber
        ran new supply lines along the perimeter walls to the wet areas on the exterior walls &mdash;
        the main kitchen sink, the dishwasher, the bathrooms. Efficient. Cost-effective. And the
        re-route completely bypassed the kitchen island.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When the plumber packed up, the leak was fixed. The carrier closed the claim. But the
        kitchen island sink &mdash; the one you used every day, the one that added value and
        functionality to your home &mdash; no longer had water. No hot. No cold. Nothing. The
        faucet was decorative now.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        You call the carrier. You explain that the repair eliminated a functioning fixture. The
        adjuster tells you the covered damage was the broken pipe, and the broken pipe has been
        repaired. Claim closed.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is where a significant number of policyholders find themselves: staring at a
        &quot;completed&quot; repair that solved one problem by creating another. The carrier fixed
        Problem A and walked away from Problem B &mdash; the problem it created.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The carrier cannot do this. Here is why, and here is what to do about it.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Promise the Carrier Made
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Every standard homeowners policy contains language obligating the carrier to restore damaged
        property to its pre-loss condition. The specific phrasing varies by policy form, but the
        principle does not. Whether the policy uses the phrase &quot;repair or replace,&quot;
        &quot;restore,&quot; or &quot;return to its condition immediately before the loss,&quot; the
        commitment is the same: after the carrier has fulfilled its obligations, the property should
        function the way it did before the loss occurred.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is not an aspirational goal. It is a contractual obligation &mdash; the core promise
        of the insurance contract. The policyholder paid premiums for years in exchange for this
        specific guarantee. When the carrier accepts the premium and issues the policy, it is
        agreeing that if a covered loss occurs, the policyholder will be made whole.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Pre-loss condition does not mean fixing the specific component that failed. It means
        restoring the entire property to the functional state it occupied before the loss. If the
        property had a working kitchen island sink before the loss, pre-loss condition includes a
        working kitchen island sink after the repair. If the property had adequate electrical
        capacity before a fire, pre-loss condition includes adequate electrical capacity after the
        repair. If the roof drained properly before a storm, pre-loss condition includes proper
        drainage after the repair.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The measure is holistic, not component-by-component. A repair that eliminates or degrades
        functionality that existed before the loss has not achieved pre-loss condition &mdash;
        regardless of whether the specific damaged component has been addressed.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        California&apos;s Regulatory Framework: The Standard Is Not Optional
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California has codified this principle with unusual specificity. The Fair Claims Settlement
        Practices Regulations, found at Title 10, California Code of Regulations, Section 2695.9,
        establish the baseline standard for every first-party residential and commercial property
        insurance claim in the state.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Repair Estimate Standard
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Section 2695.9(b) provides:
      </p>
      <blockquote className="border-l-4 border-[#2E74B5] pl-4 italic text-gray-600 mb-6">
        When a claim is submitted for repairs to a home, the estimate prepared by or for the
        insurer shall be in accordance with applicable policy provisions and shall be of an amount
        which will restore the damaged property to no less than its condition prior to the loss and
        which will allow for repairs to be made in a manner which meets accepted trade standards for
        good and workmanlike construction.
      </blockquote>
      <p className="text-gray-700 leading-relaxed mb-4">
        Two phrases carry the weight here. First, &quot;no less than its condition prior to the
        loss.&quot; Not &quot;the damaged component&quot; &mdash; the &quot;damaged property.&quot;
        The regulation contemplates the condition of the property as a whole, not merely the
        isolated element that broke. Second, &quot;accepted trade standards for good and workmanlike
        construction.&quot; A repair that eliminates existing functionality does not meet accepted
        trade standards. No licensed contractor would consider a plumbing re-route that orphans a
        functioning fixture to be good and workmanlike construction. No electrician would consider a
        panel replacement that leaves circuits underpowered to be compliant with trade standards.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Preferred Vendor Standard
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Section 2695.9(b)(1) tightens the standard further when the carrier recommends or suggests
        a contractor:
      </p>
      <blockquote className="border-l-4 border-[#2E74B5] pl-4 italic text-gray-600 mb-6">
        If the claimant accepts such recommendation or suggestion and the repairs are not completed
        to the claimant&apos;s satisfaction, or the repairs do not restore the damaged property to
        no less than its condition prior to the loss and which will allow for repairs in a manner
        which meets accepted trade standards for good and workmanlike construction at no additional
        cost to the claimant...
      </blockquote>
      <p className="text-gray-700 leading-relaxed mb-4">
        When the carrier sends its own vendor, the carrier is on the hook for the result. If the
        vendor&apos;s repair does not restore the property to pre-loss condition &mdash; and
        creating a new deficiency where none existed before is the clearest possible failure to
        restore &mdash; the carrier must correct it at no cost to the policyholder. The regulation
        does not say &quot;at no additional cost except for the new problems we created.&quot; It
        says &quot;no additional cost.&quot;
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Fair Settlement Standard
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Section 2695.7(g) provides that no insurer shall attempt to settle a claim by making a
        settlement offer that is unreasonably low. A settlement that accounts for the cost of
        fixing Problem A but ignores the cost of fixing Problem B &mdash; a problem the
        carrier&apos;s own repair created &mdash; is unreasonably low by definition. The carrier
        cannot close the claim and call the policyholder whole while the property remains in a
        condition worse than its pre-loss state.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Legal Principles: Making the Insured Whole
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Contractual Measure of Damages
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        California Civil Code Section 3300 provides the foundational standard for breach of
        contract damages:
      </p>
      <blockquote className="border-l-4 border-[#2E74B5] pl-4 italic text-gray-600 mb-6">
        For the breach of an obligation arising from contract, the measure of damages...is the
        amount which will compensate the party aggrieved for all the detriment proximately caused
        thereby, or which, in the ordinary course of things, would be likely to result therefrom.
      </blockquote>
      <p className="text-gray-700 leading-relaxed mb-4">
        The goal is to place the policyholder in the position they would have occupied had the
        contract been performed. When an insurance contract promises restoration to pre-loss
        condition, full performance means the property functions as it did before the loss.
        Anything less is a breach, and the measure of damages is the cost of completing the
        restoration &mdash; including correcting whatever new deficiency the carrier&apos;s repair
        introduced.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Implied Covenant of Good Faith and Fair Dealing
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        In <em>Gruenberg v. Aetna Insurance Co.</em>, 9 Cal.3d 566 (1973), the California Supreme
        Court established that every insurance contract contains an implied covenant of good faith
        and fair dealing. The insurer has a duty &mdash; implied by law &mdash; not to do anything
        that will injure the insured&apos;s right to receive the benefits of the policy.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A carrier that closes a claim while its own repair has left the property in a degraded
        condition is doing precisely what <em>Gruenberg</em> prohibits. The policyholder&apos;s
        right under the policy is to have the property restored to pre-loss condition. When the
        carrier&apos;s repair creates a new deficiency and the carrier refuses to address it, the
        carrier has injured that right.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The <em>Gruenberg</em> court characterized the implied covenant as a duty that &quot;neither
        party will do anything which will injure the right of the other to receive the benefits of
        the agreement.&quot; The benefit the insured purchased is restoration. A repair that trades
        one problem for another does not deliver that benefit.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Duty to Investigate
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        In <em>Egan v. Mutual of Omaha Insurance Co.</em>, 24 Cal.3d 809 (1979), the California
        Supreme Court held that insurance companies have an obligation to conduct a thorough,
        unbiased investigation. When a policyholder reports that the carrier&apos;s approved repair
        has created a new deficiency, the carrier cannot simply point to its file note that says
        the original damage was fixed. It must investigate the reported problem. It must assess
        whether its repair actually achieved pre-loss condition. A carrier that reflexively denies
        a supplemental claim without investigating the reported deficiency is failing its duty
        under <em>Egan</em>.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Attorney Fees for Bad Faith
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under <em>Brandt v. Superior Court</em>, 37 Cal.3d 813 (1985), a policyholder forced to
        hire an attorney to obtain policy benefits that the carrier wrongfully withheld can recover
        attorney fees as damages. When a carrier refuses to address a repair deficiency it
        created &mdash; forcing the policyholder to litigate to obtain the restoration the policy
        promises &mdash; the fees incurred in that fight are recoverable as damages caused by the
        carrier&apos;s bad faith.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is not a theoretical concern. When a carrier closes a claim while its own repair left
        the property worse off than before, and the policyholder has to retain counsel to force the
        carrier to honor its policy obligations, the carrier is not just paying for the repair. It
        is paying for the attorney who had to make the carrier pay for the repair.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Insurer&apos;s Option to Repair: A Contract Within a Contract
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many homeowners policies give the carrier the option to repair damaged property rather than
        pay the policyholder directly. When a carrier exercises this option, the legal consequences
        are significant.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The exercise of the repair option creates what courts have described as a new contract
        &mdash; a contract to repair. The carrier is no longer simply obligated to pay money. It is
        obligated to deliver a result: property restored to pre-loss condition within a reasonable
        time, in a manner consistent with good and workmanlike construction standards.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When the carrier breaches this repair obligation &mdash; and delivering a repair that
        creates a new deficiency is a breach &mdash; it becomes liable for all damages proximately
        caused by the breach. This can include the cost of correcting the deficiency, loss of use
        during the period the deficiency existed, and consequential damages flowing from the
        incomplete repair.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The carrier cannot exercise the repair option, deliver defective work, and then retreat
        behind the policy&apos;s coverage language to argue that the new deficiency is a
        &quot;separate issue.&quot; The carrier chose to repair. Having made that choice, it owns
        the result.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Common Scenarios: How Repairs Create New Problems
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The kitchen island scenario is not unusual. Incomplete repairs that create new deficiencies
        appear across every category of residential property claim. Here are the patterns that
        recur most frequently.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Plumbing Re-Routes That Eliminate Fixtures
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A re-route that bypasses a fixture rather than restoring supply to it is the most common
        version of this problem. The carrier&apos;s plumber fixes the leak by running new lines
        along the path of least resistance &mdash; and least cost &mdash; rather than the path that
        restores all pre-loss functionality. Kitchen islands, outdoor faucets, wet bars, utility
        sinks, and secondary bathroom fixtures are the most common casualties. The carrier pays for
        the re-route but not for the additional runs needed to restore water to every fixture that
        had it before the loss.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Electrical Work That Leaves Circuits Compromised
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A house fire damages the electrical panel and wiring in one section of the home. The
        carrier&apos;s electrician replaces the damaged wiring and panel, but the new configuration
        leaves certain circuits underpowered or eliminates circuits entirely. A room that had four
        outlets now has two. A kitchen that had a dedicated 20-amp circuit for the refrigerator now
        shares that circuit with the microwave and the garbage disposal. The code-required GFCI
        protection that existed in the bathroom before the fire is absent after the repair. The
        fire damage is repaired. The electrical system is worse than it was before.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Roof Repairs That Create Drainage or Ventilation Problems
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Storm damage to a section of roofing is repaired, but the new configuration alters the
        roof&apos;s drainage pattern. Water that previously flowed to a gutter now pools behind a
        flashing transition. Or the repair eliminates a ridge vent or soffit vent, reducing attic
        ventilation below the level that existed before the storm. The leak is fixed. The roof now
        has a moisture problem it did not have before.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Foundation Work That Shifts Structural Stress
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A slab foundation cracks due to a covered peril. The carrier&apos;s repair stabilizes the
        cracked section with piers or mudjacking, but the repair changes the load distribution
        across the foundation. Areas that were stable before the repair now bear additional stress.
        Cracks appear in walls or floors in sections of the home that were undamaged before the
        original loss. The carrier says those cracks are unrelated. They are not unrelated &mdash;
        they are a direct consequence of the repair method chosen.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        HVAC Repairs That Sacrifice Efficiency
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A covered loss damages the HVAC system. The carrier replaces the damaged component &mdash;
        a compressor, a heat exchanger, a section of ductwork &mdash; but the replacement does not
        match the specifications of the original system. The repaired system heats adequately but
        cools poorly, or vice versa. Airflow to certain rooms is reduced. The system runs longer
        cycles and consumes more energy. The carrier fixed the broken part. The system no longer
        performs the way it did before the loss.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Repairs That Eliminate Custom or Built-In Features
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Water damage destroys cabinetry in a kitchen that included a built-in wine rack, a custom
        spice drawer, or an appliance garage designed to house a specific mixer. The carrier
        replaces the cabinetry with standard units that fit the space but do not include the custom
        features. The kitchen is repaired. It is not restored. Pre-loss condition includes the
        features that made the kitchen what it was &mdash; not a generic version of a kitchen that
        fits the same footprint.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What the Carrier Will Argue &mdash; and Why It Falls Short
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a policyholder raises the issue of a repair that created a new deficiency, the
        carrier&apos;s response follows a predictable pattern. Understanding these arguments in
        advance helps the policyholder &mdash; and the policyholder&apos;s advocate &mdash; respond
        effectively.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        &quot;The Repair Addresses the Covered Damage&quot;
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the most common response, and it fundamentally misframes the issue. The question is
        not whether the repair addressed the covered damage. The question is whether the repair
        restored the property to pre-loss condition. Those are two different things. A repair can
        address the covered damage and still fail to achieve pre-loss condition if it created a new
        deficiency in the process.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The policy does not promise &quot;repair of the damaged component.&quot; It promises
        restoration of the property. When the carrier&apos;s repair eliminated functionality that
        existed before the loss, the property has not been restored, and the claim is not complete.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        &quot;This Is the Most Cost-Effective Repair Method&quot;
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Cost-effectiveness is not the standard. Pre-loss condition is the standard. The carrier is
        entitled to choose a reasonable repair method, but &quot;reasonable&quot; does not mean
        &quot;cheapest.&quot; A repair method that saves money by sacrificing functionality is not
        reasonable &mdash; it is a method that shifts the cost of the loss from the carrier to the
        policyholder.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If a full restoration costs more than the shortcut the carrier approved, the answer is that
        the carrier owes the full restoration cost. The policyholder did not agree to accept a
        diminished property in exchange for premium payments. The policyholder agreed to pay
        premiums in exchange for restoration to pre-loss condition. The carrier does not get to
        unilaterally renegotiate that deal after the loss occurs.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        &quot;The Pre-Loss Condition Wasn&apos;t Code-Compliant&quot;
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some carriers argue that the pre-loss configuration had its own deficiencies &mdash; the
        plumbing was grandfathered, the wiring was outdated, the ventilation did not meet current
        code &mdash; and therefore the carrier has no obligation to replicate it. This argument has
        a surface logic that dissolves on examination.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Even if the pre-loss condition included grandfathered or non-compliant elements, the
        carrier&apos;s repair cannot make things worse. A plumbing configuration that was
        grandfathered but functional is still a plumbing configuration that delivered water to
        every fixture. The carrier does not get to eliminate a fixture and call it an improvement
        because the new configuration is &quot;more compliant.&quot; The policyholder had a working
        island sink. The carrier&apos;s repair eliminated it. Whether the supply line to that sink
        met current code is a separate question from whether the sink had water &mdash; and it did.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Moreover, many policies include ordinance or law coverage that specifically addresses the
        cost of bringing the property into compliance with current building codes during a covered
        repair. If the carrier&apos;s repair must comply with current code, and current code
        requires a different routing, the carrier owes the cost of code-compliant routing that also
        restores all pre-loss functionality.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        &quot;You Should Have Raised This Before the Repair Was Completed&quot;
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This argument attempts to create a waiver where none exists. Policyholders are not
        construction professionals. They are not expected to review repair plans, identify potential
        deficiencies, and raise objections before work begins. The carrier and its vendors are the
        professionals. The carrier chose the repair method. The carrier&apos;s vendor executed it.
        The policyholder is entitled to evaluate the result &mdash; and the result is a property
        that no longer functions the way it did before the loss.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Nothing in the policy requires the policyholder to pre-approve repair methods or waive
        claims for deficiencies they did not anticipate. The carrier&apos;s obligation is to
        deliver a result &mdash; pre-loss condition &mdash; not to obtain advance approval for
        shortcuts.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What to Do When the Carrier&apos;s Repair Creates a New Problem
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you find yourself in this situation, the path forward requires documentation,
        communication, and persistence. Here is a step-by-step approach.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step One: Document the Pre-Loss Condition
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you have not yet experienced this problem but have an open claim with repairs pending,
        document everything now. Photograph every room, every fixture, every feature. Take video
        walkthroughs. Save floor plans if you have them. Note which fixtures have water, which
        outlets work, which HVAC vents deliver air, which custom features exist. This documentation
        establishes the baseline that the carrier is obligated to restore.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the repair has already occurred and you are realizing something is missing, gather
        whatever evidence you can of the pre-loss condition. Photographs from before the loss
        &mdash; even casual family photos that happen to show the kitchen island in use &mdash; are
        valuable. Real estate listing photos from when you purchased the home. Home inspection
        reports. Permit records showing original construction. Contractor invoices from past
        remodels. Any documentation that establishes that the feature or functionality existed
        before the loss.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step Two: Document the Deficiency
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Photograph and describe exactly what changed. The island sink that no longer has water. The
        room that lost electrical outlets. The section of roof where water now pools. Be specific
        and factual. Take photographs that clearly show the before-and-after difference. If you
        can, get a brief written statement from a licensed contractor or tradesperson confirming
        what functionality was lost and what would be required to restore it.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step Three: Get an Independent Assessment
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Do not rely on the carrier&apos;s vendor to identify the deficiency. The vendor has every
        incentive to characterize its own work as complete. Hire your own licensed contractor to
        inspect the property, compare the current condition to the pre-loss condition, and prepare
        an estimate for the work needed to restore full functionality.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This estimate serves two purposes. First, it quantifies the deficiency &mdash; it tells the
        carrier exactly what needs to be done and what it costs. Second, it provides expert support
        for your position that the repair did not achieve pre-loss condition. A licensed contractor
        saying &quot;the re-route eliminated water supply to the island and it will cost $4,200 to
        extend the lines&quot; is far more difficult for the carrier to dismiss than the
        policyholder saying &quot;my island sink doesn&apos;t work.&quot;
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step Four: File a Supplemental Claim
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Put your claim in writing. Send a letter &mdash; not just a phone call &mdash; to the
        carrier, identifying the deficiency, explaining that the carrier&apos;s approved repair
        created the problem, attaching your contractor&apos;s assessment and estimate, and
        requesting that the carrier pay the cost of restoring the property to its actual pre-loss
        condition.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Use the regulatory language. In California, cite 10 CCR 2695.9 and the carrier&apos;s
        obligation to restore the property to &quot;no less than its condition prior to the
        loss.&quot; If the carrier recommended or selected the contractor, cite the carrier&apos;s
        heightened obligation under Section 2695.9(b)(1) to ensure the repair meets this standard
        at no additional cost to the policyholder.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Frame the letter around what the policy promises and what the repair failed to deliver. Be
        factual. Be specific. Attach the documentation.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step Five: Escalate If Necessary
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the carrier denies the supplemental claim, you have several avenues. You can file a
        complaint with the California Department of Insurance, which has authority to investigate
        violations of the Fair Claims Settlement Practices Regulations. You can invoke the
        appraisal clause in your policy if the dispute is over the amount of loss. And you can
        consult with an attorney experienced in insurance coverage disputes.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A carrier that refuses to address a deficiency its own repair created &mdash; particularly
        when its own preferred vendor performed the work &mdash; faces exposure beyond the cost of
        the repair itself. The carrier&apos;s refusal may constitute a violation of Insurance Code
        Section 790.03(h), which prohibits unfair claims settlement practices including failing to
        effectuate prompt, fair, and equitable settlements of claims in which liability has become
        reasonably clear. The refusal may also support a claim for breach of the implied covenant
        of good faith and fair dealing, with attendant exposure to emotional distress damages and,
        in egregious cases, punitive damages.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Bigger Picture: Why This Matters
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The carrier&apos;s approach in these situations reflects a broader pattern in claims
        handling. The carrier defines the scope of the covered loss as narrowly as possible,
        approves the cheapest repair that addresses that narrow scope, and closes the claim before
        accounting for the full impact of the repair on the property.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This approach treats the claim as a transaction &mdash; a discrete problem to be resolved
        at the lowest possible cost. But the insurance contract does not contemplate a transaction.
        It contemplates restoration. The policyholder did not buy a promise that the carrier would
        fix the broken pipe. The policyholder bought a promise that the carrier would make the
        property whole.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a carrier closes a claim while the property remains in a condition worse than its
        pre-loss state &mdash; when the carrier&apos;s own repair created the degradation &mdash;
        the claim is not resolved. It is underpaid. And underpaying a claim is not a cost-saving
        measure. It is a breach of the contract the carrier wrote, sold, and collected premiums on
        for years.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The policyholder&apos;s response to this situation should be calm, documented, and
        persistent. The law is clear. The regulations are specific. The carrier&apos;s obligation
        is to restore. When the carrier&apos;s repair falls short of that obligation, the carrier
        owes the difference &mdash; however inconvenient that may be for the carrier&apos;s loss
        ratio.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4 italic">
        This article is for informational purposes only and does not constitute legal advice.
        Insurance claims involve fact-specific analysis, and policyholders facing disputes with
        their carriers should consult with a licensed public adjuster or an attorney experienced in
        insurance coverage litigation.
      </p>
      <p className="text-sm text-gray-500 mt-4 italic">
        Written by Leland Coontz III, Licensed Public Adjuster, CA License #2B53445.
      </p>
    </>
  )
}
