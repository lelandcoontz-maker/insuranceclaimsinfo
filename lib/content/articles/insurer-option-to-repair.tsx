import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: "The Insurer's Option to Repair: When the Carrier Wants to Fix It Instead of Pay You",
  description:
    "Understanding the insurance carrier's contractual option to repair, rebuild, or replace damaged property instead of paying cash — what it means for policyholders, how carriers use it strategically, and how California law limits its abuse.",
  summary:
    'Many policies give the insurer the option to repair rather than pay cash. If your carrier elects to repair, it takes on responsibility for a proper, complete restoration, and remains liable if its chosen repair falls short.',
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
        You have filed a claim. The damage has been inspected. You are expecting a check. Instead,
        the insurance company tells you it has decided to repair the property itself. Not through a
        contractor you selected &mdash; through a contractor the carrier will select, manage, and
        pay directly. The carrier will control the scope. The carrier will control the timeline. The
        carrier will decide what gets fixed, how it gets fixed, and when the job is done.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        You did not ask for this. You wanted the money so you could hire your own contractor, someone
        you trust, someone who works for you. But the carrier has informed you that it is exercising
        its &quot;option to repair&quot; under the policy, and that this is its right.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Is it? The answer is more complicated than the carrier would like you to believe. Most
        standard homeowners policies do contain language giving the carrier the option to repair or
        replace damaged property instead of paying cash. But the option is not unlimited. It does not
        strip the policyholder of all rights. It does not relieve the carrier of its obligation to
        restore the property to pre-loss condition. And in many cases, the way carriers exercise this
        option &mdash; or threaten to exercise it &mdash; raises serious questions about good faith
        and fair dealing.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This article examines the option to repair from the policyholder&apos;s perspective: what the
        clause actually says, why carriers invoke it, what happens when they do, and what rights you
        retain when your insurance company decides it would rather fix your house than pay you to fix
        it yourself.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What the Option to Repair Clause Says
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        The standard ISO homeowners policy &mdash; the template from which most residential property
        policies are derived &mdash; contains language in the loss settlement provisions that gives
        the carrier a choice in how it resolves a covered loss. In California, this option has its
        roots in the California Standard Fire Policy, codified at California Insurance Code &sect;&sect;
        2070&ndash;2071, which includes language giving the insurer the right to &quot;repair, rebuild,
        or replace the property destroyed or damaged with other of like kind and quality within a
        reasonable time.&quot; The typical modern policy language reads something like: &quot;We may
        repair or replace any part of the damaged property with material or property of like kind and
        quality.&quot; Some policies use the phrase &quot;at our option,&quot; making the carrier&apos;s
        discretion explicit. Others use &quot;may,&quot; which accomplishes the same thing.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The clause is permissive, not mandatory. It gives the carrier the right to elect repair
        instead of cash payment, but it does not require the carrier to do so. In the vast majority
        of claims, carriers pay cash &mdash; either actual cash value or replacement cost value
        &mdash; and the policyholder arranges their own repairs. The option to repair is an
        alternative method of settlement that exists in the policy but is exercised relatively
        infrequently.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The language matters because policyholders often assume they have an absolute right to receive
        cash and hire their own contractor. In most situations, that is what happens as a practical
        matter. But it is not a contractual guarantee. The policy gives the carrier the right to
        choose the method of settlement, and if the carrier elects to repair, the policyholder
        generally cannot demand cash instead &mdash; at least not based on the policy language alone.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        That said, the option to repair is not a blank check for the carrier to do whatever it wants.
        When the carrier elects to repair, it assumes obligations that go beyond simply writing a
        check. It takes on the responsibility of actually restoring the property to its pre-loss
        condition, and if it fails to do so, the carrier has not discharged its duty under the
        policy. The option to repair does not reduce the carrier&apos;s obligation. If anything, it
        increases the carrier&apos;s exposure, because the carrier is now directly responsible for the
        quality and completeness of the work.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why Carriers Exercise the Option to Repair
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        If the option to repair increases the carrier&apos;s exposure and creates additional
        obligations, why would a carrier choose to exercise it? The answer lies in cost control. When
        the carrier pays cash, the policyholder controls the repair process. The policyholder selects
        a contractor, obtains estimates, and makes decisions about materials, methods, and scope. If
        the policyholder&apos;s contractor determines that the scope of work exceeds what the carrier
        has estimated, a dispute ensues &mdash; and the carrier may end up paying more than it
        initially offered.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        When the carrier elects to repair, it controls all of those variables. The carrier selects a
        contractor &mdash; often one from its preferred vendor network &mdash; who has agreed to
        pricing and scope parameters established by the carrier. The carrier defines the scope of
        work. The carrier approves or denies change orders. The carrier decides when the job is
        complete. Every decision that might increase the cost of the claim is now in the carrier&apos;s
        hands rather than the policyholder&apos;s.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        There is nothing inherently improper about wanting to control costs. Insurance is a business,
        and carriers have a legitimate interest in ensuring that claims are paid at fair and
        reasonable amounts. But the incentive structure is worth understanding. The carrier&apos;s
        financial interest is to minimize the cost of every claim. When the carrier controls the
        repair process, every decision about scope, materials, and methods is being made by the party
        whose financial interest is served by spending less. The policyholder&apos;s interest &mdash;
        a complete, high-quality restoration of their home &mdash; is not necessarily aligned with
        the carrier&apos;s interest in cost minimization. This tension is at the heart of every
        carrier-managed repair.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Carriers also exercise the option to repair in situations where the claim is disputed. If the
        carrier believes the policyholder&apos;s damage estimate is inflated, or if the carrier wants
        to limit the{' '}
        <Link href="/resources/scope-of-loss" className="text-[#2E74B5] underline">
          scope of loss
        </Link>{' '}
        to specific items, controlling the repair process allows the carrier to define the scope
        through action rather than through negotiation. Instead of arguing about whether certain
        items need to be replaced, the carrier simply directs its contractor to repair them &mdash;
        and the question of scope becomes a fait accompli rather than a subject of dispute.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Happens When the Carrier Elects to Repair
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        When the carrier invokes its option to repair, the dynamic of the claim changes fundamentally.
        The policyholder is no longer dealing with an insurance claim in the traditional sense &mdash;
        receiving money and managing their own restoration. Instead, the policyholder is living inside
        a construction project managed by the party on the other side of the claim. The implications
        of this shift are significant and deserve careful attention.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Loss of Contractor Choice
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The most immediate consequence is that the policyholder may lose the practical ability to
        select their own contractor. When the carrier pays cash, the policyholder is free to hire
        anyone &mdash; a trusted general contractor, a specialist recommended by a friend, a company
        with expertise in the specific type of damage. That freedom is one of the most valuable
        aspects of a cash settlement.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        When the carrier elects to repair, it selects the contractor. The contractor the carrier
        chooses is almost always one from its{' '}
        <Link href="/resources/preferred-contractor-conflict-of-interest" className="text-[#2E74B5] underline">
          preferred vendor network
        </Link>{' '}
        &mdash; a company that has an existing business relationship with the carrier and depends on
        the carrier for a steady stream of referrals. The policyholder did not vet this contractor.
        The policyholder did not check references. The policyholder did not compare estimates from
        multiple companies. A contractor the policyholder has never met shows up at the door, and the
        carrier says this is the person who will be working on the house.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The policyholder&apos;s right to{' '}
        <Link href="/resources/choosing-your-contractor" className="text-[#2E74B5] underline">
          choose their own contractor
        </Link>{' '}
        is well established in California when the carrier pays cash. But when the carrier elects to
        repair, that right is complicated by the carrier&apos;s contractual option. The policyholder
        may argue that they should still be able to choose the contractor, but the carrier&apos;s
        position is that the option to repair includes the right to select the contractor who will
        perform the work. This creates a practical power imbalance that is difficult to overcome
        without legal assistance.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Carrier Controls the Scope
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        When the carrier manages the repair, it defines the scope of work. This is where the
        potential for inadequate restoration becomes most acute. The carrier&apos;s scope may not
        include everything the policyholder believes needs to be addressed. Items the policyholder
        considers damaged may be classified by the carrier as pre-existing. Areas the policyholder
        wants replaced may be designated for repair. Materials the policyholder wants matched may be
        substituted with cheaper alternatives that the carrier deems &quot;of like kind and quality.&quot;
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        In a cash settlement, these disputes are resolved through negotiation, appraisal, or
        litigation. The policyholder obtains their own estimate, the carrier obtains its estimate, and
        the parties work toward a resolution. But when the carrier is managing the repair, the scope
        dispute becomes one-sided. The carrier decides what gets fixed. If the policyholder disagrees,
        their options are limited to objecting &mdash; which may or may not result in changes &mdash;
        or pursuing formal dispute resolution after the fact.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The result is a process in which the party paying for the work is also the party deciding
        what work needs to be done. There is no independent check on the carrier&apos;s scope
        determination. The contractor the carrier has selected is unlikely to challenge the
        carrier&apos;s scope, because that contractor&apos;s continued participation in the
        preferred vendor program depends on cooperating with the carrier&apos;s process. The
        policyholder may feel that the scope is inadequate, but the work is proceeding according
        to the carrier&apos;s plan regardless.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Quality Disputes Become Harder to Resolve
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        When a policyholder hires their own contractor, quality disputes are between the policyholder
        and the contractor. The policyholder has leverage: they are paying the contractor, they can
        withhold final payment, they can file a complaint with the Contractors State License Board,
        and they can pursue a breach of contract claim. The contractor&apos;s reputation and license
        are at stake.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        When the carrier manages the repair, quality disputes are between the policyholder and the
        carrier &mdash; with the contractor caught in the middle. If the policyholder believes the
        repair work is substandard, the policyholder must raise the complaint with the carrier, which
        then decides whether to address it. The carrier may send the same contractor back to fix the
        problem. The carrier may send a different contractor. Or the carrier may disagree that there
        is a problem at all.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The policyholder&apos;s leverage is diminished. They are not the one paying the contractor,
        so they cannot withhold payment. The contractor&apos;s primary business relationship is with
        the carrier, not the policyholder, so the policyholder&apos;s satisfaction may be a secondary
        concern. And if the carrier declares the repair complete, the policyholder is left with two
        choices: accept the result or pursue litigation. This is not a position any homeowner wants to
        be in while living in a damaged or partially repaired house.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Living in a Construction Project Managed by the Other Side
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        There is a human dimension to carrier-managed repairs that deserves emphasis. When the
        carrier is managing the repair, the policyholder is living in &mdash; or displaced from
        &mdash; their home while strangers selected by the insurance company work on their property.
        The policyholder has limited control over the schedule, the workers, the materials, or the
        methods. Decisions about their home are being made by people who work for, or at the
        direction of, the insurance company.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        For many policyholders, this is deeply uncomfortable. It is their home. They live there. They
        have opinions about how it should be restored. But in a carrier-managed repair, those
        opinions may or may not be solicited, and even when they are, they may or may not influence
        the outcome. The carrier has taken control of the process, and the policyholder is a
        bystander in the restoration of their own property.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Carrier&apos;s Obligation When It Elects to Repair
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Here is the critical point that carriers exercising the option to repair sometimes lose sight
        of: electing to repair does not lower the standard. The carrier&apos;s obligation remains the
        same regardless of the settlement method it chooses. The property must be restored to its
        pre-loss condition. If the carrier elects to repair and the repair does not achieve pre-loss
        condition, the carrier has not fulfilled its obligation under the policy.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This principle is well established in California law. California Insurance Code
        &sect; 2051(b)(2) provides that the measure of recovery for a partial loss is
        &ldquo;the amount it would cost the insured to repair, rebuild, or replace the damaged
        or destroyed property, less a fair and reasonable deduction for physical depreciation
        based upon its condition at the time of the injury or the policy limit, whichever is
        less.&rdquo; (The phrase &ldquo;damaged or destroyed property&rdquo; replaced the prior
        &ldquo;thing lost or injured&rdquo; via AB 188, Stats. 2019, ch. 59, effective January 1,
        2020.) For losses settled on a replacement cost basis, California Insurance Code
        &sect; 2051.5 reinforces that the measure of indemnity is the amount it would cost to
        repair, rebuild, or replace the damaged property without deduction for depreciation. The seminal case <em>Raisin Growers of
        California v. Hartford Accident &amp; Indemnity Co.</em> (1922) 188 Cal. 524 confirmed that
        the measure of damages is the amount necessary to restore the property to its condition
        immediately before the loss. When the carrier elects to repair, it is choosing to discharge
        its obligation through performance rather than payment. But the obligation is the same:
        pre-loss condition. Not &quot;close enough.&quot; Not &quot;functionally equivalent.&quot;
        Not &quot;the best we could do within our preferred vendor&apos;s pricing structure.&quot;
        Pre-loss condition.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This means that if the carrier&apos;s repair uses inferior materials, the obligation is not
        met. If the repair leaves visible differences between damaged and undamaged areas, the
        obligation may not be met. If the repair addresses only part of the damage, the obligation is
        not met. And if the repair creates new problems &mdash; water intrusion from improperly
        installed roofing, cosmetic defects from mismatched finishes, structural issues from
        inadequate framing &mdash; the carrier has not only failed to meet its obligation, it may
        have created additional liability.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The carrier does not get to grade its own work. The question of whether the repair achieved
        pre-loss condition is not answered by the carrier&apos;s claims adjuster or by the
        carrier&apos;s preferred vendor. It is answered by objective evaluation &mdash; an
        independent contractor, an expert, or ultimately a jury.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When the Carrier&apos;s Repair Fails
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        One of the most important things policyholders need to understand about the option to repair
        is this: the carrier cannot walk away from a botched job. When the carrier elects to repair
        and the repair is inadequate, the carrier&apos;s obligation under the policy continues. The
        claim is not closed. The carrier has not discharged its duty. The policyholder is entitled to
        demand that the carrier complete the restoration to pre-loss condition, even if that means
        tearing out the initial repair and starting over.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This is a point where the carrier&apos;s decision to exercise the option to repair can
        backfire significantly. Had the carrier simply paid cash, its obligation would have been
        limited to the reasonable cost of repair. The policyholder would have managed the
        construction, and any deficiencies in the work would have been between the policyholder and
        their contractor. But when the carrier elects to repair, the carrier is the one who selected
        the contractor, defined the scope, and managed the project. If the work is deficient, the
        carrier owns the failure.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The consequences of a failed carrier-managed repair extend beyond the original damage. When
        the carrier&apos;s contractor performs{' '}
        <Link href="/resources/incomplete-repairs-create-new-problems" className="text-[#2E74B5] underline">
          incomplete or defective repairs that create new problems
        </Link>
        , the carrier may be responsible for those new problems as well. A roof repair that leaks
        causes interior water damage. A flooring repair that does not properly address moisture
        leads to mold growth. A cosmetic patch that peels within months leaves the home in worse
        condition than if no repair had been attempted at all.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        In these situations, the carrier&apos;s liability is not limited to the cost of the original
        covered loss. Under California Civil Code &sect; 3300, contract damages include all amounts
        proximately caused by the breach. The carrier may be liable for consequential damages flowing
        from the inadequate repair &mdash; damages that would not have occurred had the carrier either
        paid cash or performed the repair competently. This is particularly true in California, where
        the implied covenant of good faith and fair dealing imposes obligations that go beyond the
        mere payment of benefits. <em>Egan v. Mutual of Omaha Ins. Co.</em> (1979) 24 Cal.3d 809.
        In <em>Samson v. Transamerica Ins. Co.</em> (1981) 30 Cal.3d 220, the California Supreme
        Court recognized that an insurer who undertakes to manage repairs assumes obligations beyond
        simply paying a claim, and the insurer&apos;s duty of good faith extends to the manner in
        which those repairs are performed.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        When a carrier elects to repair, takes control of the process, selects the contractor,
        defines the scope, and the result is a repair that fails to restore the property &mdash; or
        worse, creates new damage &mdash; the carrier has not acted in good faith. It has exercised
        its contractual option in a manner that left the policyholder worse off than a simple cash
        payment would have. This is the kind of conduct that exposes carriers to extracontractual
        damages, including emotional distress (<em>Crisci v. Security Insurance Co.</em> (1967) 66
        Cal.2d 425) and, in egregious cases, punitive damages. If the policyholder must retain an
        attorney to force the carrier to correct defective carrier-directed repairs, those attorney
        fees may be recoverable as contract damages under <em>Brandt v. Superior Court</em> (1985)
        37 Cal.3d 813.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Reasonable Time Requirement: &sect; 2071 Standard Fire Policy and the Fair Claims Regulations
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        California Insurance Code &sect; 2071 &mdash; the standard fire policy provisions
        &mdash; gives the insurer the option to &ldquo;repair, rebuild, or replace the property
        destroyed or damaged with other of like kind and quality within a reasonable time.&rdquo;
        This is the statutory anchor for the reasonable-time requirement when the carrier elects
        to repair. It is not a vague aspiration; it is statutory text that carries consequences
        if violated.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        What constitutes a &ldquo;reasonable time&rdquo; depends on the circumstances: the extent
        of the damage, the availability of materials and labor, and the complexity of the repair.
        But a carrier that elects to repair and then allows months to pass before beginning work
        &mdash; or allows the repair to drag on without justification &mdash; is exposing itself
        to claims of breach and potentially bad faith. The Fair Claims Settlement Practices
        Regulations (10 CCR &sect; 2695.7) also impose timing requirements on claims handling
        generally. When the carrier has elected to repair, these regulatory timing obligations
        apply to the repair process itself, not just to the initial claim determination.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Unreasonable delays in carrier-directed repairs compound the policyholder&apos;s losses. Every
        additional week of delay increases the carrier&apos;s{' '}
        <Link href="/resources/ale-frv" className="text-[#2E74B5] underline">
          additional living expense
        </Link>{' '}
        exposure if the policyholder is displaced, and may support a finding that the carrier failed
        to exercise its option in good faith. If the carrier&apos;s delay is unreasonable, the
        policyholder may have grounds to argue that the carrier has effectively forfeited its option
        and should be required to pay a cash settlement at the cost of a complete, competent repair.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Electing to Repair Can Increase the Carrier&apos;s Exposure
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        There is a certain irony in the carrier&apos;s decision to invoke the option to repair. The
        decision is typically motivated by a desire to reduce costs, but it can have the opposite
        effect. When a carrier elects to repair, it creates several categories of potential
        additional exposure:
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Consequential damages from defective work.</strong> If the repair causes
          additional damage, the carrier is liable under Civil Code &sect; 3300 for both the
          original loss and the new damage. A $50,000 roof claim can become a $200,000 claim if
          the carrier&apos;s contractor installs the roof improperly and water infiltration
          damages the interior.
        </li>
        <li>
          <strong>Extended loss of use.</strong> If the repair takes longer than it should because
          of the carrier&apos;s contractor&apos;s delays or need to redo defective work, the
          carrier&apos;s{' '}
          <Link href="/resources/loss-of-use-maximizing" className="text-[#2E74B5] underline">
            loss of use exposure
          </Link>{' '}
          increases accordingly.
        </li>
        <li>
          <strong>Bad faith exposure.</strong> A carrier that elects to repair and then performs
          substandard work &mdash; or fails to correct known deficiencies &mdash; may face{' '}
          <Link href="/resources/bad-faith" className="text-[#2E74B5] underline">
            bad faith liability
          </Link>
          . The carrier&apos;s election to repair is an affirmative choice that heightens its duty
          of care.
        </li>
        <li>
          <strong>Warranty and latent defect liability.</strong> When the carrier directs the
          repair, it may be held responsible for latent defects that emerge months or years later
          &mdash; defects the policyholder would not have been responsible for had they selected
          their own contractor.
        </li>
        <li>
          <strong>Attorney fee exposure.</strong> Under <em>Brandt</em>, attorney fees incurred to
          recover policy benefits are recoverable in bad faith actions. A carrier-managed repair
          that fails and forces the policyholder into litigation adds attorney fees to the
          carrier&apos;s exposure.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Policyholder&apos;s Rights During Carrier-Managed Repair
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        The carrier&apos;s exercise of the option to repair does not eliminate the policyholder&apos;s
        rights. Even when the carrier is managing the repair, the policyholder retains important
        protections that should be exercised actively and documented thoroughly.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Right to Document Everything
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The policyholder has every right to document the repair process from start to finish. This
        includes photographing and videotaping the work in progress, documenting the materials being
        used, recording conversations with the contractor (in California, with appropriate consent
        under Penal Code &sect; 632, or in person where all parties can observe the recording),
        maintaining a written log of daily activities, and preserving all communications with the
        carrier and the contractor.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Documentation is critical because carrier-managed repairs often unfold over weeks or months,
        and memories fade. If the repair proves inadequate, the policyholder will need to demonstrate
        what was done, when it was done, what materials were used, and what the result looked like
        at each stage. Contemporaneous documentation &mdash; notes and photos taken at the time,
        rather than reconstructed later &mdash; carries far more weight in any subsequent dispute.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Right to Object
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The policyholder is not required to accept substandard work in silence. If the policyholder
        observes deficiencies during the repair process &mdash; improper materials, sloppy
        workmanship, scope items being skipped, areas of damage being ignored &mdash; the
        policyholder should raise objections promptly and in writing. A written objection creates a
        record that the policyholder identified the problem before the carrier declared the repair
        complete.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Objections should be specific. Rather than writing &quot;I am not satisfied with the work,&quot;
        the policyholder should identify the specific deficiency: &quot;The replacement flooring in
        the hallway does not match the existing flooring in the living room in color, grain pattern,
        or finish. The policy requires restoration to pre-loss condition, which means matching the
        existing materials. I am requesting that this be corrected before the repair is considered
        complete.&quot; Specific objections are harder for the carrier to dismiss and more useful in
        any later proceeding.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Right to Demand Correction
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        If the repair does not achieve pre-loss condition, the policyholder has the right to demand
        correction. This demand should be made in writing and should reference the policy&apos;s
        loss settlement provisions and the carrier&apos;s obligation to restore the property to its
        pre-loss condition. The policyholder should describe the specific ways in which the repair
        falls short of pre-loss condition and should request that the carrier take corrective action.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The policyholder should also consider obtaining an independent assessment of the repair from
        a contractor or expert who is not affiliated with the carrier. An independent expert can
        evaluate whether the repair meets industry standards, whether the materials used are truly
        of like kind and quality, and whether the work was performed in a workmanlike manner. This
        independent assessment becomes evidence if the dispute proceeds to appraisal or litigation.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Right Not to Sign Off
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        At the conclusion of a carrier-managed repair, the carrier or its contractor may present a
        completion document &mdash; a sign-off sheet, a satisfaction form, or a certificate of
        completion. The policyholder should read this document carefully before signing. If the
        policyholder is not satisfied that the repair has achieved pre-loss condition, the
        policyholder should not sign. A signed completion form can be used by the carrier as evidence
        that the policyholder accepted the repair, making it harder to challenge the adequacy of the
        work later.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        If the carrier pressures the policyholder to sign off on incomplete or substandard work, that
        pressure itself may constitute a violation of the{' '}
        <Link href="/resources/california-fair-claims" className="text-[#2E74B5] underline">
          California Fair Claims Settlement Practices Regulations
        </Link>
        , which prohibit carriers from engaging in unfair practices in the resolution of claims.
        Cal. Code Regs., tit. 10, &sect; 2695.7.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        California-Specific Rules on the Option to Repair
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        California has addressed the option to repair through both statutory and case law, providing
        policyholders with protections that go beyond what the policy language alone might suggest.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Fair Claims Settlement Practices Regulations
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        California Code of Regulations, title 10, section 2695.9, addresses property claim
        settlements directly. Subdivision (a) prohibits insurers from attempting to settle a claim
        by making a settlement offer that is unreasonably low. When the carrier elects to repair, the
        &quot;settlement offer&quot; is the repair itself &mdash; and a substandard repair is
        effectively an unreasonably low offer in the form of deficient performance. Subdivision (b)
        provides that when a carrier elects to repair or replace damaged property, the carrier must
        restore the property to no less than its condition at the time of the loss. The regulation
        makes clear that the carrier&apos;s election to repair does not diminish its obligation to
        provide a complete restoration.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Section 2695.9 also addresses the issue of obsolete or discontinued materials. When damaged
        materials are no longer available, the carrier may not simply install a cheaper substitute
        and declare the repair complete. The regulation requires that replacement materials be of
        &quot;like kind and quality,&quot; which in many cases means that if an exact match is not
        available, the carrier must use materials of equivalent or better quality &mdash; not lesser
        quality at lower cost.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Additionally, section 2695.9(a)(2) provides that when a loss requires replacement of
        items and the replaced items do not match in quality, color, or size, the carrier must
        replace all items in the damaged area so as to conform to a reasonably uniform
        appearance. This is the &quot;matching&quot; requirement, and it has significant
        implications for carrier-managed repairs where the carrier&apos;s contractor may attempt
        to patch rather than replace, resulting in a visible difference between repaired and
        unrepaired areas.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Right to Choose Your Own Contractor Under Cash Settlement
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        California Insurance Code section 2071 sets forth the standard form of fire insurance policy,
        and the loss settlement provisions therein give the carrier the option to repair. However,
        California courts have recognized that this option is not without limits. The carrier must
        exercise the option in good faith and may not use it as a mechanism to deprive the
        policyholder of a fair settlement.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        If a carrier exercises the option to repair and the repair fails, courts have held that the
        policyholder is entitled to recover the cost of completing the repair through a contractor of
        the policyholder&apos;s choosing. The carrier&apos;s right to control the repair process is
        not unlimited, and a carrier that exercises the option and then fails to perform adequately
        has forfeited the benefit of the bargain it sought when invoking the option.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Implied Covenant and Good Faith Limits
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Every insurance contract in California carries an implied covenant of good faith and fair
        dealing. <em>Gruenberg v. Aetna Ins. Co.</em> (1973) 9 Cal.3d 566. This covenant applies to
        every aspect of the carrier&apos;s claims handling, including the decision to exercise or
        threaten to exercise the option to repair. A carrier that exercises the option to repair for
        the purpose of pressuring the policyholder into accepting a lower settlement, or for the
        purpose of controlling the scope in a manner that excludes legitimate damage, may be acting
        in bad faith.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The key question in any good faith analysis is whether the carrier&apos;s conduct was
        reasonable under the circumstances. A carrier that genuinely believes it can provide a
        superior and more efficient repair through its own contractor may be acting in good faith.
        But a carrier that invokes the option to repair primarily to avoid paying a fair cash
        settlement, or to pressure the policyholder into accepting inadequate scope, is using a
        contractual right for an improper purpose.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        In <em>Betts v. Allstate Ins. Co.</em> (1984) 154 Cal.App.3d 688, the Court of Appeal
        recognized that the manner in which a carrier processes a claim may give rise to tort
        liability if the carrier acts unreasonably. While <em>Betts</em> did not address the option
        to repair specifically, its holding that claims handling conduct must be evaluated for
        reasonableness applies directly to situations where the carrier exercises the option to repair
        in a manner that prejudices the policyholder.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Managed Repair Program Connection
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        The carrier&apos;s option to repair does not exist in a vacuum. In practice, it is closely
        related to &mdash; and in many cases indistinguishable from &mdash; the carrier&apos;s{' '}
        <Link href="/resources/managed-repair-program-drp" className="text-[#2E74B5] underline">
          managed repair program or direct repair program (DRP)
        </Link>
        . Understanding this connection is essential for policyholders evaluating a carrier&apos;s
        offer to &quot;take care of the repairs.&quot;
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        A managed repair program is an arrangement in which the carrier maintains a network of
        preferred contractors who have agreed to perform repairs at pricing and scope levels
        established by the carrier. When a policyholder files a claim, the carrier offers to send
        one of these preferred contractors to assess the damage and perform the repairs. The
        policyholder is told that using the carrier&apos;s contractor will make the process easier,
        faster, and less stressful.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        What is often not explained is that the carrier&apos;s managed repair program is essentially
        the carrier exercising its option to repair on a systematic, institutional basis. Instead of
        invoking the option to repair on a case-by-case basis, the carrier has built an entire
        infrastructure around it &mdash; a network of contractors, a set of pricing agreements, a
        process for managing scope &mdash; that allows it to exercise the option efficiently and at
        scale.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The{' '}
        <Link href="/resources/preferred-contractor-conflict-of-interest" className="text-[#2E74B5] underline">
          structural conflicts of interest
        </Link>{' '}
        inherent in preferred vendor programs apply with full force when the carrier exercises the
        option to repair. The contractor selected by the carrier depends on the carrier for future
        work. The contractor&apos;s continued participation in the program depends on keeping the
        carrier satisfied &mdash; which in practice means completing repairs within the carrier&apos;s
        budget. The contractor who challenges the carrier&apos;s scope or insists on more expensive
        materials is the contractor who does not get the next referral.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This dynamic means that when the carrier exercises the option to repair through its preferred
        vendor network, the contractor performing the work is not truly independent. The contractor
        may be licensed, insured, and competent, but the contractor&apos;s economic incentives are
        aligned with the carrier, not the policyholder. This is not a criticism of any individual
        contractor &mdash; it is a structural reality of how these programs operate.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        When the carrier&apos;s preferred contractor arrives at a policyholder&apos;s home, the
        policyholder should understand that this contractor is not an independent professional
        providing an unbiased assessment. This contractor is an extension of the carrier&apos;s
        claims operation, and the work product will reflect the carrier&apos;s priorities. Policyholders
        who understand this dynamic are better positioned to evaluate the repair, identify
        deficiencies, and advocate for a complete restoration.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When the Carrier Threatens to Exercise the Option
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Sometimes the carrier does not actually want to repair the property. Sometimes the threat to
        exercise the option to repair is itself a negotiation tactic &mdash; a way to pressure the
        policyholder into accepting a lower cash settlement.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This plays out in a predictable pattern. The policyholder submits a repair estimate from their
        own contractor. The carrier&apos;s estimate is lower &mdash; sometimes significantly lower.
        The policyholder pushes back, arguing that the carrier&apos;s estimate is inadequate. And then
        the carrier says something like: &quot;If you don&apos;t accept our cash settlement, we will
        exercise our option to repair and send our own contractor.&quot;
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The implicit message is clear: accept our number, or lose control of the repair process
        entirely. For many policyholders, this threat is alarming. They do not want strangers selected
        by the insurance company working on their home. They do not want to lose the ability to
        choose their own contractor. They do not want to live through a construction project managed
        by the other side of their claim. And so they accept the carrier&apos;s lower cash offer,
        even though it may not be enough to complete the repairs properly.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This use of the option to repair as a threat rather than a genuine election raises significant
        questions. If the carrier is threatening to exercise the option to repair not because it
        believes it can provide a better or more efficient repair, but because it wants to coerce
        the policyholder into accepting a lower cash settlement, the carrier may be using a
        contractual right for an improper purpose. The implied covenant of good faith and fair
        dealing requires that contractual rights be exercised fairly and in good faith, not as
        leverage to force an inadequate settlement.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Policyholders who encounter this tactic should recognize it for what it is. The carrier&apos;s
        threat to exercise the option to repair should not, by itself, cause the policyholder to
        accept an inadequate cash offer. If the carrier exercises the option and the repair is
        inadequate, the carrier&apos;s obligation continues. The policyholder is not worse off legally
        &mdash; though they may face practical inconvenience. And if the carrier threatens the option
        but never follows through, the threat may itself be evidence that the carrier was not acting
        in good faith.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When the Carrier&apos;s Own Contractor Admits the Problem
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        One of the most powerful moments in a carrier-managed repair occurs when the{' '}
        <Link href="/resources/carrier-contractor-admits-failure" className="text-[#2E74B5] underline">
          carrier&apos;s own contractor admits that the approved scope is insufficient
        </Link>
        . This happens more often than carriers would like. The contractor arrives, surveys the
        damage, reviews the carrier&apos;s approved scope, and tells the homeowner &mdash; sometimes
        candidly, sometimes reluctantly &mdash; that the scope will not achieve pre-loss condition.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This admission is enormously significant. The carrier can maintain that it has a genuine
        dispute with the policyholder about the scope of repairs. But when the carrier&apos;s own
        contractor &mdash; the contractor the carrier selected and dispatched &mdash; says the
        scope is inadequate, the &quot;genuine dispute&quot; defense begins to crumble. The carrier
        is no longer disagreeing with the policyholder. The carrier is disagreeing with its own
        representative.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        If the carrier&apos;s contractor makes any admission about the inadequacy of the scope,
        the materials, or the quality of the repair, the policyholder should document it immediately.
        Get it in writing if possible. If the contractor says it verbally, memorialize the
        conversation in a follow-up email or letter that same day: &quot;I am writing to confirm
        our conversation today in which you stated that the approved scope would not allow you to
        match the existing flooring / restore the roof to pre-loss condition / complete the repair
        to industry standards.&quot; This contemporaneous documentation can be decisive evidence in
        any subsequent dispute.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Respond When the Carrier Wants to Repair Instead of Pay
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        If your carrier informs you that it intends to exercise the option to repair, here is a
        framework for protecting yourself throughout the process.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 1: Read the Policy Language
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Start by reading the actual policy language governing the carrier&apos;s option to repair.
        Not every policy is the same. Some policies give the carrier broad discretion. Others include
        conditions or limitations on the option. Some policies require the carrier to provide notice
        within a certain timeframe. Others require the carrier to guarantee the repair for a
        specified period. Know what your policy says before responding.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 2: Request the Scope in Writing
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Before any work begins, request a complete written scope of work from the carrier. The scope
        should detail every item to be repaired or replaced, the materials to be used, the methods of
        repair, and the timeline for completion. Review this scope carefully and compare it to your
        own assessment of the damage. If items are missing, raise the issue in writing before work
        begins. It is much easier to dispute the scope before construction starts than after the
        contractor has already completed work that the policyholder believes is inadequate.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 3: Get Your Own Estimate
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Even though the carrier is managing the repair, the policyholder should obtain an independent
        estimate from a contractor of their choosing. This estimate serves as a benchmark against
        which to evaluate the carrier&apos;s scope. If the independent estimate identifies items that
        the carrier&apos;s scope does not include, the policyholder has objective evidence that the
        carrier&apos;s scope may be inadequate. This estimate also establishes the cost of a complete
        repair, which is relevant if the carrier-managed repair proves insufficient and the
        policyholder needs to pursue additional compensation.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 4: Document the Entire Process
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        From the moment the carrier announces its intention to repair through the final walkthrough,
        document everything. Photograph the property before work begins. Photograph the work in
        progress daily. Note the materials being used. Record the names of every worker and
        supervisor on site. Save every email, letter, text message, and voicemail related to the
        repair. Keep a daily log noting what work was done, what conversations occurred, and any
        concerns you observed. This documentation is your evidence if the repair proves inadequate.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 5: Object Promptly and in Writing
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        If you observe deficiencies during the repair &mdash; wrong materials, skipped scope items,
        sloppy workmanship, areas of damage being ignored &mdash; raise the issue immediately and in
        writing. Send an email to the carrier&apos;s adjuster and to the contractor&apos;s supervisor
        identifying the specific deficiency and requesting correction. Do not wait until the repair
        is complete to raise objections. Contemporaneous objections carry more weight than complaints
        raised after the fact, and they give the carrier an opportunity to correct the problem before
        it becomes a larger dispute.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 6: Do Not Sign Off Until You Are Satisfied
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        When the carrier declares the repair complete, inspect the work thoroughly before signing any
        completion or satisfaction documents. If the repair does not restore the property to pre-loss
        condition, do not sign. You are not required to accept substandard work. A signed completion
        form makes it significantly harder to challenge the adequacy of the repair later, so do not
        sign under pressure, out of fatigue, or because the carrier is insisting the work is done.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 7: Seek Professional Help
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        If the carrier&apos;s repair is inadequate and the carrier will not correct the deficiencies,
        the policyholder should seek professional assistance. A licensed public adjuster can evaluate
        the repair, identify deficiencies, and advocate on the policyholder&apos;s behalf. An
        attorney experienced in insurance coverage disputes can advise on the policyholder&apos;s
        legal rights and remedies, including bad faith claims. The sooner professional help is
        obtained, the more effectively the policyholder&apos;s interests can be protected.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Bigger Picture: Who Benefits from the Option to Repair?
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        The option to repair exists in insurance policies because it serves a legitimate purpose.
        There are situations where the carrier can genuinely provide a faster, more efficient repair
        than the policyholder could arrange independently. In catastrophic events where contractors
        are scarce and prices are inflated, a carrier with an established contractor network may be
        able to mobilize resources more quickly than an individual homeowner.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        But policyholders should approach the option to repair with clear eyes. The carrier&apos;s
        primary incentive is cost control, not customer satisfaction. The contractor the carrier
        selects will be accountable to the carrier before the policyholder. The scope of work will
        reflect the carrier&apos;s assessment, not the policyholder&apos;s. And if the repair proves
        inadequate, the policyholder will need to fight the same carrier that managed the repair
        to obtain a remedy.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The option to repair shifts the balance of power in a claim from the policyholder to the
        carrier. When the carrier pays cash, the policyholder controls the repair process and makes
        decisions about their own home. When the carrier elects to repair, the carrier controls
        the process and the policyholder becomes a spectator. This shift is not inherently improper
        &mdash; the carrier has a contractual right to exercise the option &mdash; but it does
        change the dynamic of the claim in ways that disproportionately benefit the carrier.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Policyholders who find themselves in a carrier-managed repair should not assume the carrier
        will act against its own financial interest to ensure a perfect restoration. They should
        document, object, demand, and if necessary, escalate. The carrier has exercised its option.
        The policyholder must exercise their rights.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Key Takeaways
      </h2>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Most standard homeowners policies give the carrier the option to repair, rebuild, or replace
          the damaged property instead of paying cash. The carrier&apos;s election to repair is a
          contractual right, but it is not unlimited.
        </li>
        <li>
          When the carrier exercises the option to repair, it controls the contractor, the scope, the
          materials, and the timeline. The policyholder loses practical control over the restoration
          of their own home.
        </li>
        <li>
          The carrier&apos;s obligation does not change because it elected to repair instead of pay
          cash. The property must be restored to pre-loss condition under Insurance Code &sect;&sect;
          2051 and 2051.5 regardless of the settlement method.
        </li>
        <li>
          A carrier that elects to repair and delivers a substandard result has not discharged its
          obligation. The carrier cannot walk away from a botched repair, and under Insurance Code
          &sect; 2071, the repair must be completed within a reasonable time.
        </li>
        <li>
          California&apos;s Fair Claims Settlement Practices Regulations (10 CCR &sect; 2695.9)
          require carriers to restore property to pre-loss condition and to match materials in
          quality, color, and appearance.
        </li>
        <li>
          The carrier&apos;s preferred vendor network and managed repair programs are the
          institutional expression of the option to repair, and the same{' '}
          <Link href="/resources/preferred-contractor-conflict-of-interest" className="text-[#2E74B5] underline">
            conflict-of-interest
          </Link>{' '}
          concerns apply.
        </li>
        <li>
          The threat to exercise the option to repair is sometimes a negotiation tactic designed to
          pressure the policyholder into accepting a lower cash settlement. Recognize it and do not
          be coerced.
        </li>
        <li>
          Document everything, object in writing, obtain independent estimates, and do not sign off
          on incomplete work. If the carrier-managed repair fails, seek professional help promptly.
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
