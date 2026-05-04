import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Pending Insurance Claims When the Policyholder Dies: What Happens Next',
  description:
    'When the named insured dies with an active insurance claim, the claim does not die with them. Learn who has standing to continue the claim, what deadlines keep running, and how to prevent the insurer from using the death to undermine the recovery.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        A homeowner files an insurance claim for fire damage, water damage, or another covered
        loss. The claim is open. The insurer is investigating, or negotiations are underway, or
        the claim is in appraisal, or perhaps even litigation. Then the policyholder dies. What
        happens to the claim?
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The answer is clear, though insurers sometimes try to make it complicated: the claim
        does not die with the policyholder. An insurance claim is a chose in action &mdash; a
        legal right to recover money. It is an asset of the deceased&rsquo;s estate, and it
        passes to the estate&rsquo;s legal representative just like a bank account, a piece of
        real property, or any other asset. The insurer&rsquo;s obligation to adjust and pay the
        claim in good faith continues uninterrupted.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This article addresses the specific situation where the policyholder dies <em>during</em> an
        active claim. If you are dealing with a situation where the named insured died <em>before</em> a
        loss occurred and the insurer is now denying coverage, that is a different issue &mdash;
        see our article on{' '}
        <Link href="/resources/policyholder-death-coverage" className="text-[#2E74B5] hover:underline">
          what happens to your insurance if the policyholder dies
        </Link>.
      </p>

      <CalloutBox variant="important" title="The Claim Is an Asset of the Estate">
        <p>
          An open insurance claim is a chose in action &mdash; a legal right to receive payment.
          Under California law, it survives the death of the insured and becomes part of the
          decedent&rsquo;s estate. No insurer has the legal right to close, deny, or reduce a
          pending claim simply because the policyholder passed away.
        </p>
      </CalloutBox>

      {/* ============================================================ */}
      {/* SECTION: SURVIVAL OF CAUSES OF ACTION */}
      {/* ============================================================ */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Legal Foundation: Survival of Causes of Action
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California Code of Civil Procedure Section 377.20 provides the statutory basis:
      </p>
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 my-6">
        <p className="text-gray-700 text-sm italic leading-relaxed">
          &ldquo;(a) Except as otherwise provided by statute, a cause of action for or against a
          person is not lost by reason of the person&rsquo;s death, but survives subject to the
          applicable limitations period.&rdquo;
        </p>
        <p className="text-gray-500 text-xs mt-2">
          &mdash; Cal. Code Civ. Proc. &sect; 377.20(a)
        </p>
      </div>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is not limited to lawsuits already filed. The statute preserves the underlying
        <em> cause of action</em> &mdash; the legal right to recover. An insurance claim that
        has been submitted to the carrier, whether it is in the investigation phase, the
        negotiation phase, or any other stage, is a property right that survives the
        policyholder&rsquo;s death.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Sections 377.30 through 377.34 flesh out who may pursue the surviving cause of action:
      </p>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          <strong>Section 377.30:</strong> A cause of action that survives the death of the
          person entitled to commence the action may be commenced by the decedent&rsquo;s
          personal representative or, if none, by the decedent&rsquo;s successor in interest.
        </li>
        <li>
          <strong>Section 377.31:</strong> The person who may bring the action on behalf of the
          decedent is the decedent&rsquo;s successor in interest, as defined in Section 377.11.
        </li>
        <li>
          <strong>Section 377.32:</strong> The person who seeks to commence or continue an action
          as the decedent&rsquo;s successor in interest must file a declaration under penalty of
          perjury stating the decedent&rsquo;s name, the date and place of death, confirmation
          that no proceeding is pending in California for administration of the decedent&rsquo;s
          estate, and that the declarant is the successor in interest. A certified copy of the
          death certificate must also be provided.
        </li>
        <li>
          <strong>Section 377.34:</strong> In an action by a decedent&rsquo;s personal
          representative or successor in interest on the decedent&rsquo;s cause of action,
          damages may be recovered that the decedent would have been entitled to recover had
          the decedent lived.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The practical effect of these statutes is straightforward: the person who steps into the
        deceased policyholder&rsquo;s shoes &mdash; whether that is a personal representative
        appointed by the probate court or a successor in interest &mdash; has the full legal
        right to continue the claim and recover every dollar the policyholder would have been
        entitled to.
      </p>

      {/* ============================================================ */}
      {/* SECTION: WHO HAS STANDING */}
      {/* ============================================================ */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Who Has Standing to Continue the Claim?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The answer depends on how the deceased policyholder&rsquo;s estate is structured. In
        California, there are three primary pathways:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        1. Successor Trustee (Revocable Living Trust)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the deceased policyholder held the property in a revocable living trust, the
        successor trustee named in the trust document becomes the person with authority to
        manage trust assets &mdash; including any pending insurance claims &mdash; upon the
        trustor&rsquo;s death. No probate is required. The successor trustee should provide
        the insurer with:
      </p>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>A certified copy of the death certificate</li>
        <li>
          A certification of trust (Cal. Prob. Code &sect; 18100.5) or relevant excerpts of
          the trust document showing the successor trustee&rsquo;s appointment
        </li>
        <li>
          Written notice that the successor trustee is continuing the claim on behalf of
          the trust
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurer has no right to demand the full trust document. A certification of trust,
        which summarizes the relevant provisions without disclosing the trust&rsquo;s
        dispositive terms, is sufficient under California Probate Code Section 18100.5.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        2. Executor or Executrix (Testate Estate &mdash; Will)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the deceased policyholder left a will but did not have a trust, the person named
        in the will as executor (or executrix) must petition the probate court for appointment
        as personal representative. Once the court issues Letters Testamentary, the executor
        has full authority to manage estate assets, including continuing the insurance claim.
        The executor should provide the insurer with:
      </p>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>A certified copy of the death certificate</li>
        <li>Certified copies of Letters Testamentary issued by the probate court</li>
        <li>Written notice of the executor&rsquo;s authority to continue the claim</li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        3. Administrator (Intestate Estate &mdash; No Will)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the deceased policyholder died without a will or trust, a family member must
        petition the probate court for appointment as administrator of the estate. Once the
        court issues Letters of Administration, the administrator has the same authority as
        an executor to continue the claim. The administrator should provide the insurer with:
      </p>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>A certified copy of the death certificate</li>
        <li>Certified copies of Letters of Administration issued by the probate court</li>
        <li>Written notice of the administrator&rsquo;s authority to continue the claim</li>
      </ul>

      <CalloutBox variant="warning" title="Do Not Wait for Probate to Communicate With the Insurer">
        <p>
          Probate in California can take months. Do not remain silent with the insurer while
          waiting for the court to issue Letters. Immediately notify the insurer in writing of
          the policyholder&rsquo;s death, identify yourself, explain that you are in the process
          of establishing legal authority to act on behalf of the estate, and state that you
          expect the insurer to continue adjusting the claim in good faith. Silence creates a
          gap the insurer may try to exploit.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Small Estate Affidavit (Probate Code &sect; 13100)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        For estates where the total value of all real and personal property does not exceed the
        statutory threshold (currently $184,500 as adjusted), California Probate Code Section
        13100 allows a successor in interest to collect estate assets &mdash; including insurance
        proceeds &mdash; by filing a small estate affidavit rather than opening a full probate
        proceeding. This can significantly speed up the process of establishing authority to
        continue the claim. Note that real property worth more than $184,500 generally requires
        a separate petition under Probate Code Section 13150.
      </p>

      {/* ============================================================ */}
      {/* SECTION: PROBATE CODE 9656 */}
      {/* ============================================================ */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Probate Code Section 9656: The Personal Representative&rsquo;s Authority to Insure
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California Probate Code Section 9656 specifically authorizes the personal
        representative of an estate to insure estate property. The statute provides:
      </p>
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 my-6">
        <p className="text-gray-700 text-sm italic leading-relaxed">
          &ldquo;The personal representative may insure the property of the estate against
          damage, loss, and liability.&rdquo;
        </p>
        <p className="text-gray-500 text-xs mt-2">
          &mdash; Cal. Prob. Code &sect; 9656
        </p>
      </div>
      <p className="text-gray-700 leading-relaxed mb-4">
        This statute is relevant in two ways. First, it confirms that estate property is
        insurable property &mdash; the personal representative has the statutory authority and
        the insurable interest to maintain insurance on it. Second, it reinforces the principle
        that an existing policy covering estate property does not become void upon the
        policyholder&rsquo;s death. The personal representative steps into the decedent&rsquo;s
        position with respect to the property and its insurance.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the insurer argues that the death of the policyholder somehow voided the policy or
        extinguished the claim, Probate Code Section 9656 provides a direct statutory response:
        the Legislature has expressly recognized that estate property is insurable and that the
        personal representative has the authority to maintain and pursue insurance on it.
      </p>

      {/* ============================================================ */}
      {/* SECTION: INSURER'S GOOD FAITH OBLIGATION */}
      {/* ============================================================ */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Insurer&rsquo;s Obligation to Continue Adjusting in Good Faith
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The death of the policyholder does not relieve the insurer of any of its duties under
        the policy, the California Insurance Code, or the Fair Claims Settlement Practices
        Regulations (Cal. Code Regs. tit. 10, &sect; 2695.1 et seq.). Every obligation the
        insurer had to the living policyholder now runs to the estate&rsquo;s legal
        representative:
      </p>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          The duty to conduct a thorough and fair investigation (Cal. Ins. Code &sect; 790.03(h)(3))
        </li>
        <li>
          The duty to accept or deny the claim within 40 days of receiving proof of claim
          (Cal. Code Regs. tit. 10, &sect; 2695.7(b))
        </li>
        <li>
          The duty to provide a written explanation if the claim is denied or if less than the
          full amount claimed is offered (Cal. Code Regs. tit. 10, &sect; 2695.7(b)(1))
        </li>
        <li>
          The duty to attempt in good faith to effectuate a prompt, fair, and equitable
          settlement once liability has become reasonably clear (Cal. Ins. Code &sect; 790.03(h)(5))
        </li>
        <li>
          The prohibition against compelling policyholders to litigate by offering substantially
          less than the amount due (Cal. Ins. Code &sect; 790.03(h)(5))
        </li>
      </ul>

      <CalloutBox variant="legal" title="Good Faith Is Non-Transferable to the Grave">
        <p>
          If the insurer was acting in bad faith before the policyholder died &mdash; unreasonably
          delaying, lowballing, or denying the claim &mdash; that bad faith conduct does not get
          a fresh start because the policyholder passed away. The estate&rsquo;s legal
          representative inherits the right to pursue a bad faith claim based on the insurer&rsquo;s
          pre-death conduct, as well as any bad faith that continues after death. Under California
          Code of Civil Procedure Section 377.34, the estate can recover the same damages the
          policyholder would have recovered.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        Insurers sometimes use the policyholder&rsquo;s death as an excuse to &ldquo;pause&rdquo;
        the claim indefinitely, citing the need to verify the legal representative&rsquo;s
        authority. While the insurer is entitled to reasonable documentation &mdash; a death
        certificate, Letters Testamentary, or a certification of trust &mdash; it is not
        entitled to use the verification process as a pretext for delay. The Fair Claims
        Settlement Practices Regulations set specific timeframes, and those timeframes apply
        regardless of whether the claimant is the original insured or the estate&rsquo;s
        representative.
      </p>

      {/* ============================================================ */}
      {/* SECTION: DEADLINES THAT KEEP RUNNING */}
      {/* ============================================================ */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Deadlines That Keep Running
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is one of the most dangerous aspects of a pending claim when the policyholder
        dies. The policyholder&rsquo;s death does not automatically toll (pause) the various
        contractual and statutory deadlines built into the insurance policy. The estate&rsquo;s
        legal representative inherits the claim, but also inherits the clock.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Proof of Loss Deadline
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under the California Standard Fire Policy (Cal. Ins. Code &sect; 2071), the insured
        must submit a sworn{' '}
        <Link href="/resources/proof-of-loss" className="text-[#2E74B5] hover:underline">
          proof of loss
        </Link>{' '}
        within 60 days after the loss. If the insurer has demanded a proof of loss and the
        policyholder dies before submitting it, the estate&rsquo;s representative must complete
        and submit it. If the deadline is approaching or has passed, request an extension in
        writing immediately. California&rsquo;s notice-prejudice rule may protect the estate
        from a forfeiture based on a late proof of loss, but this protection is not automatic
        &mdash; do not rely on it when the deadline can still be met.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Suit Limitation Period
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The standard one-year suit limitation period (Cal. Ins. Code &sect; 2071) runs from the
        inception of the loss, not from the date of the policyholder&rsquo;s death. If the loss
        occurred ten months ago and the policyholder dies, the estate may have only two months
        left to file suit if the insurer denies or underpays the claim. California Code of Civil
        Procedure Section 366.2 provides that if a person entitled to bring an action dies before
        the statute of limitations expires, the action may be commenced within one year after the
        date of death &mdash; but there is a significant question about whether this general
        probate tolling applies to a contractual limitation period in an insurance policy, as
        opposed to a statute of limitations. The safest approach is to treat the original
        policy deadline as if it is still running.
      </p>

      <CalloutBox variant="warning" title="Do Not Assume the Deadline Is Tolled">
        <p>
          There is tension between the general probate tolling provision (CCP &sect; 366.2) and the
          contractual suit limitation in the insurance policy. Some insurers will argue that the
          policy&rsquo;s one-year suit limitation is a contractual deadline, not a statute of
          limitations, and therefore CCP &sect; 366.2 does not apply. The estate should treat the
          original deadline as if it is still running and consult an attorney immediately if
          the deadline is within six months.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Replacement Cost Deadline
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most homeowner policies require the insured to actually repair or replace the damaged
        property within a specified period &mdash; often 12 or 24 months from the date of the
        actual cash value payment &mdash; in order to collect the replacement cost holdback.
        The policyholder&rsquo;s death does not automatically extend this deadline. If the
        estate intends to rebuild or repair the property, the legal representative must ensure
        that work begins and is completed within the policy&rsquo;s timeframe, or request
        extensions in writing.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the estate does not intend to rebuild &mdash; for example, if the beneficiaries plan
        to sell the property &mdash; the replacement cost holdback may not be recoverable. This
        is a decision that has significant financial consequences and should be made with full
        awareness of the policy terms. For a detailed explanation of replacement cost versus
        actual cash value, see our article on{' '}
        <Link href="/resources/acv-rcv" className="text-[#2E74B5] hover:underline">
          replacement cost vs. actual cash value
        </Link>.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Additional Living Expense (ALE) / Loss of Use
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the policyholder was receiving Additional Living Expense (ALE) benefits at the time
        of death, the insurer may argue that the coverage terminates because the
        &ldquo;insured&rdquo; no longer needs housing. However, if household members who
        qualify as insureds under the policy were also displaced and are still displaced, their
        ALE coverage continues. The Death clause in the standard policy extends insured status
        to household members who were insureds at the time of death, so long as they remain
        residents of the insured premises. A surviving spouse or dependent child who was
        displaced along with the policyholder remains entitled to ALE.
      </p>

      {/* ============================================================ */}
      {/* SECTION: DEATH DURING APPRAISAL */}
      {/* ============================================================ */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What If the Policyholder Dies During an Appraisal?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the claim was in the appraisal process when the policyholder died, the appraisal
        continues. The estate&rsquo;s legal representative steps into the policyholder&rsquo;s
        position and has the authority to:
      </p>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          Maintain the appraiser the policyholder selected, or select a new one if the
          policyholder had not yet done so
        </li>
        <li>
          Participate in the selection of an umpire if the two appraisers cannot agree
        </li>
        <li>
          Approve or challenge the appraisal award
        </li>
        <li>
          Receive the appraisal award payment on behalf of the estate
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurer cannot unilaterally withdraw from the appraisal process or demand that a
        new appraisal be started from scratch because the policyholder died. The appraisal
        clause in the policy is a binding agreement to resolve the dispute over the amount of
        loss, and the obligation runs with the claim, not with the individual. If the
        policyholder&rsquo;s appraiser has already been working on the claim, that appraiser
        can continue to represent the estate&rsquo;s interests.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a comprehensive discussion of the appraisal process, see our{' '}
        <Link href="/resources/appraisal" className="text-[#2E74B5] hover:underline">
          complete guide to insurance appraisal in California
        </Link>.
      </p>

      {/* ============================================================ */}
      {/* SECTION: DEATH DURING LITIGATION */}
      {/* ============================================================ */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What If the Policyholder Dies During Litigation With the Insurer?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the policyholder had already filed a lawsuit against the insurer and dies during
        the litigation, California Code of Civil Procedure Section 377.31 governs. The
        decedent&rsquo;s personal representative or successor in interest may continue the
        action by filing a motion to substitute as the plaintiff.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under CCP Section 377.32, the successor in interest must file a sworn declaration
        establishing their status, along with a certified copy of the death certificate. The
        court will then substitute the personal representative or successor in interest as
        the plaintiff, and the lawsuit proceeds.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        There are several important considerations:
      </p>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          <strong>The lawsuit does not automatically dismiss.</strong> Under CCP Section 377.21,
          a pending action does not abate by the death of a party if the cause of action
          survives. Insurance contract claims and bad faith claims survive the insured&rsquo;s
          death.
        </li>
        <li>
          <strong>Deadlines continue to run.</strong> Discovery deadlines, motion deadlines,
          and trial dates are not automatically continued because a party dies. The estate&rsquo;s
          attorney should promptly notify the court and, if necessary, seek a continuance to
          allow time for substitution of the party.
        </li>
        <li>
          <strong>Bad faith and punitive damages.</strong> Under CCP Section 377.34, as
          amended effective January 1, 2022, the decedent&rsquo;s successor in interest may
          recover damages that are recoverable under Section 377.34, including, in certain
          circumstances, punitive damages. This is significant because insurers sometimes
          assume that punitive damages die with the policyholder. They do not, in many
          cases.
        </li>
        <li>
          <strong>The insurer cannot leverage the death.</strong> The insurer cannot use the
          disruption caused by the policyholder&rsquo;s death &mdash; new counsel, a learning
          curve for the personal representative, grief-related delays &mdash; to gain a
          tactical advantage. If the insurer accelerates litigation tactics during the
          substitution process, this may itself constitute bad faith.
        </li>
      </ul>

      <CalloutBox variant="tip" title="Notify the Attorney and Court Immediately">
        <p>
          If you are the family member or estate representative of a policyholder who dies during
          active litigation with an insurer, notify the policyholder&rsquo;s attorney immediately.
          The attorney can file the substitution motion, request any necessary continuances, and
          ensure the litigation is not disrupted. Do not assume the attorney will learn of the
          death through other channels.
        </p>
      </CalloutBox>

      {/* ============================================================ */}
      {/* SECTION: MULTIPLE BENEFICIARIES */}
      {/* ============================================================ */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Multiple Beneficiaries Who Disagree About the Claim
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        One of the most difficult practical complications arises when the deceased
        policyholder&rsquo;s estate has multiple beneficiaries who disagree about how to handle
        the pending claim. Common scenarios include:
      </p>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          One beneficiary wants to rebuild the property; another wants to sell it as-is and
          split the proceeds. This decision directly affects whether the estate can collect
          replacement cost benefits.
        </li>
        <li>
          One beneficiary wants to accept the insurer&rsquo;s settlement offer; another
          believes the claim is worth significantly more and wants to continue negotiating or
          pursue appraisal.
        </li>
        <li>
          One beneficiary wants to hire a public adjuster or attorney to represent the estate
          in the claim; another objects to the cost.
        </li>
        <li>
          The beneficiaries cannot agree on who should serve as the personal representative
          or how the estate should be administered.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The legal framework provides clarity, even when the family dynamics are complicated.
        The personal representative &mdash; executor, administrator, or successor trustee &mdash;
        has the fiduciary duty and the legal authority to manage the claim on behalf of the
        estate. This means the personal representative must act in the best interests of all
        beneficiaries, not just one faction. A personal representative who accepts a lowball
        settlement to avoid conflict with one beneficiary may be breaching their fiduciary
        duty to the others.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If beneficiaries are deadlocked, the personal representative may need to seek court
        guidance through a petition for instructions under Probate Code Section 9611. The
        court can authorize the personal representative to take specific actions regarding the
        claim &mdash; including accepting a settlement, pursuing appraisal, or retaining
        professionals &mdash; which insulates the representative from later challenges by
        disgruntled beneficiaries.
      </p>

      <CalloutBox variant="info" title="The Insurer Does Not Mediate Family Disputes">
        <p>
          The insurer deals with the estate&rsquo;s legal representative &mdash; one person.
          Disagreements among beneficiaries are an estate matter, not an insurance matter. The
          insurer has no obligation to negotiate separately with individual beneficiaries or to
          defer action while the family sorts out its differences. If a dispute among
          beneficiaries is delaying the claim, the personal representative should act in the
          estate&rsquo;s best interests while seeking legal counsel to resolve the family
          conflict.
        </p>
      </CalloutBox>

      {/* ============================================================ */}
      {/* SECTION: INSURER USING DEATH TO RE-OPEN */}
      {/* ============================================================ */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Insurer Tries to Use the Death to Re-Open or Re-Evaluate the Claim
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is one of the most troubling patterns families encounter. The insurer uses the
        transition to a new claimant as an opportunity to reassign the claim to a new adjuster,
        who then purports to &ldquo;re-evaluate&rdquo; the claim from scratch. Items that were
        previously agreed upon are suddenly back in dispute. Concessions the original adjuster
        made are retracted. The insurer may argue that since the estate representative was not
        party to prior negotiations, none of the previous agreements are binding.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is wrong on multiple levels:
      </p>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          <strong>The estate inherits the claim in its current state.</strong> The legal
          representative steps into the decedent&rsquo;s position, including the benefit of any
          prior negotiations, agreements, partial payments, and admissions by the insurer. The
          insurer cannot unilaterally reset the claim.
        </li>
        <li>
          <strong>Prior partial payments are not &ldquo;mistakes.&rdquo;</strong> If the insurer
          made payments on the claim before the policyholder died, those payments are not
          recoverable from the estate simply because the claimant has changed. A payment made
          under the policy is a payment under the policy.
        </li>
        <li>
          <strong>Admissions are binding.</strong> If the insurer acknowledged coverage, agreed
          to a scope of loss, or made representations about the amount owed, those positions
          cannot be retracted because the policyholder died. The doctrine of estoppel may apply
          if the estate relied on the insurer&rsquo;s prior representations.
        </li>
        <li>
          <strong>Re-evaluation as a delay tactic is bad faith.</strong> Using the change in
          claimant as a pretext to start the investigation over, demand duplicative
          documentation, or delay payment is a violation of the Fair Claims Settlement Practices
          Act (Cal. Ins. Code &sect; 790.03(h)) and the implementing regulations.
        </li>
      </ul>

      <CalloutBox variant="important" title="Document Everything the Insurer Agreed to Before Death">
        <p>
          If the policyholder was managing the claim before death, gather every piece of
          documentation: emails, letters, adjuster reports, partial payment checks, scope
          agreements, and any written acknowledgments of coverage. This documentation is
          critical to preventing the insurer from walking back prior concessions after the
          transition.
        </p>
      </CalloutBox>

      {/* ============================================================ */}
      {/* SECTION: PRACTICAL TIMELINE */}
      {/* ============================================================ */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Practical Timeline: Death to Claim Continuation
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The following timeline provides a practical roadmap for what should happen after the
        policyholder dies during a pending claim:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Immediately (Within Days)
      </h3>
      <ol className="list-decimal pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          <strong>Notify the insurer in writing</strong> of the policyholder&rsquo;s death. Send
          a letter or email identifying yourself, your relationship to the deceased, and your
          intent to continue the claim on behalf of the estate. Do not wait until you have
          formal legal authority &mdash; put the insurer on notice now.
        </li>
        <li>
          <strong>Secure the property.</strong> If the loss involved property damage and the
          property is unoccupied, take reasonable steps to prevent further damage. The duty to
          mitigate survives the policyholder&rsquo;s death.
        </li>
        <li>
          <strong>Gather claim documentation.</strong> Locate the insurance policy, all
          correspondence with the insurer, adjuster reports, estimates, photographs, inventories,
          and payment records. If the policyholder was working with a public adjuster or
          attorney, contact them immediately.
        </li>
        <li>
          <strong>Identify all running deadlines.</strong> Determine where the claim stands
          and what deadlines are approaching: proof of loss, suit limitation, replacement cost
          rebuild timeline, ALE documentation.
        </li>
      </ol>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Within 30 Days
      </h3>
      <ol className="list-decimal pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          <strong>Obtain the death certificate.</strong> Request multiple certified copies &mdash;
          you will need them for the insurer, the probate court, financial institutions, and
          other purposes.
        </li>
        <li>
          <strong>Determine the estate structure.</strong> Is the property held in a trust? Is
          there a will? If neither, identify the next of kin who has priority to serve as
          administrator under Probate Code Section 8461.
        </li>
        <li>
          <strong>Initiate the legal process.</strong> If the property is in a trust, the
          successor trustee should prepare a certification of trust. If probate is required,
          retain a probate attorney and begin the petition process.
        </li>
        <li>
          <strong>Send formal documentation to the insurer.</strong> Provide the death
          certificate and whatever authority documentation is available. If Letters Testamentary
          or Letters of Administration have not yet issued, provide a cover letter explaining
          the status and your anticipated timeline.
        </li>
      </ol>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Within 60&ndash;90 Days
      </h3>
      <ol className="list-decimal pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          <strong>Complete probate appointment (if applicable).</strong> Once the court issues
          Letters Testamentary or Letters of Administration, provide certified copies to the
          insurer and formally demand that the claim continue.
        </li>
        <li>
          <strong>Resume active claim management.</strong> The estate&rsquo;s representative
          should pick up exactly where the policyholder left off. If negotiations were underway,
          continue them. If an appraisal had been invoked, confirm the appraiser and proceed. If
          documentation was requested, provide it.
        </li>
        <li>
          <strong>Monitor the insurer&rsquo;s response.</strong> The insurer should resume
          processing the claim promptly. If the insurer uses the transition as an excuse for
          extended delay, document the delay and cite the applicable Fair Claims Settlement
          Practices Regulations timelines.
        </li>
      </ol>

      {/* ============================================================ */}
      {/* SECTION: CHECKS MADE OUT TO THE DECEASED */}
      {/* ============================================================ */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When the Insurer Sends a Check Made Out to the Deceased
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This happens frequently and creates practical headaches. The insurer issues a claim
        payment &mdash; either an interim payment or a final settlement check &mdash; made
        payable to the deceased policyholder. No bank will cash or deposit a check made out to
        a dead person. This is not a minor inconvenience; it can delay access to funds the
        estate needs for repairs, temporary housing, or other loss-related expenses.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If this happens:
      </p>
      <ol className="list-decimal pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          <strong>Do not attempt to forge the deceased&rsquo;s endorsement.</strong> This is
          check fraud and can result in criminal liability, regardless of your good intentions.
        </li>
        <li>
          <strong>Contact the insurer immediately</strong> and request that the check be
          reissued. The check should be made payable to &ldquo;The Estate of [Decedent&rsquo;s
          Name]&rdquo; or to the personal representative in their fiduciary capacity (e.g.,
          &ldquo;Jane Smith, as Executor of the Estate of John Smith&rdquo;).
        </li>
        <li>
          <strong>Provide the insurer with documentation</strong> of your authority: Letters
          Testamentary, Letters of Administration, or a certification of trust.
        </li>
        <li>
          <strong>Open an estate bank account</strong> if one does not already exist. The
          reissued check can then be deposited into the estate account.
        </li>
        <li>
          <strong>If the insurer is slow to reissue,</strong> some banks will deposit a check
          made payable to a deceased person into an estate account if the personal representative
          presents Letters Testamentary or Letters of Administration. Check with your bank, but
          having the insurer reissue the check is the cleaner approach.
        </li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        For more on handling insurance checks generally, see our article on{' '}
        <Link href="/resources/insurance-checks" className="text-[#2E74B5] hover:underline">
          understanding insurance claim checks
        </Link>.
      </p>

      <CalloutBox variant="tip" title="Proactively Update the Payee">
        <p>
          As soon as the legal representative&rsquo;s authority is established, send a written
          request to the insurer directing that all future payments be made payable to the
          estate or to the personal representative in their fiduciary capacity. Include the
          mailing address for all future correspondence. Do not wait for the insurer to send
          a check to the wrong name at the wrong address.
        </p>
      </CalloutBox>

      {/* ============================================================ */}
      {/* SECTION: MORTGAGE COMPLICATIONS */}
      {/* ============================================================ */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Mortgage Complications
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the property has a mortgage, the insurer will typically include the mortgagee
        (lender) as a payee on the claim check. This creates an additional layer of complexity
        when the policyholder dies because the lender may also need to update its records to
        reflect the new estate representative. The lender&rsquo;s endorsement will be required
        to deposit or cash any claim check that includes the lender as a payee.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Federal law (the Garn-St. Germain Depository Institutions Act of 1982, 12 U.S.C.
        &sect; 1701j-3) generally prohibits lenders from enforcing due-on-sale clauses when
        the property is transferred to a relative upon the borrower&rsquo;s death. This means
        the estate should not face a demand for full repayment of the mortgage simply because
        the borrower died. However, the estate must continue making mortgage payments and
        maintaining insurance to avoid default.
      </p>

      {/* ============================================================ */}
      {/* SECTION: POWER OF ATTORNEY — IT TERMINATES */}
      {/* ============================================================ */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Power of Attorney Terminates at Death
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A critical point that is often misunderstood: if someone was managing the insurance
        claim on the policyholder&rsquo;s behalf under a{' '}
        <Link href="/resources/power-of-attorney-insurance-claims" className="text-[#2E74B5] hover:underline">
          power of attorney
        </Link>, that authority
        terminates the moment the policyholder dies. A power of attorney is an agency
        relationship, and it ends at the principal&rsquo;s death. The former agent (attorney-in-fact)
        has no further authority to act on behalf of the deceased.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The person who was managing the claim under a power of attorney may well be the same
        person who becomes the executor, administrator, or successor trustee. But their
        authority now flows from a different source &mdash; the probate court or the trust
        document, not the power of attorney. Until they establish their new authority, they
        should notify the insurer of the death and explain that they are in the process of
        establishing authority to continue the claim.
      </p>

      {/* ============================================================ */}
      {/* SECTION: INSURING ESTATE PROPERTY GOING FORWARD */}
      {/* ============================================================ */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Insuring the Property Going Forward
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        While the pending claim relates to a loss that already occurred, the estate also needs
        to ensure that the property remains insured going forward. The existing policy may
        continue in force for a period &mdash; the Death clause typically extends coverage
        through the current policy period &mdash; but the estate should not assume the policy
        will automatically renew.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The personal representative should:
      </p>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          Contact the insurer or the policyholder&rsquo;s insurance agent to discuss the
          status of the existing policy
        </li>
        <li>
          Update the named insured on the policy to reflect the estate, the trust, or the
          new owner (depending on the estate plan)
        </li>
        <li>
          Ensure premium payments continue &mdash; a lapse in coverage can create a gap
          during which a new loss would be uninsured
        </li>
        <li>
          If the existing insurer will not renew the policy, obtain replacement coverage
          through another carrier
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        For more on insuring property that has been inherited, see our article on{' '}
        <Link href="/resources/insuring-inherited-property" className="text-[#2E74B5] hover:underline">
          insuring inherited property
        </Link>. For issues specific to properties in probate, see our article on{' '}
        <Link href="/resources/insurance-properties-probate" className="text-[#2E74B5] hover:underline">
          insurance for properties in probate
        </Link>.
      </p>

      {/* ============================================================ */}
      {/* SECTION: COMMON INSURER TACTICS */}
      {/* ============================================================ */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Common Insurer Tactics After the Policyholder&rsquo;s Death
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Families navigating a pending claim after the policyholder&rsquo;s death should be
        aware of several patterns:
      </p>
      <ol className="list-decimal pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          <strong>&ldquo;We need to verify your authority.&rdquo;</strong> The insurer asks
          for documentation, which is reasonable. But then it takes weeks or months to
          &ldquo;review&rdquo; the documentation, during which time the claim sits idle. Set
          a deadline in your letter: &ldquo;Please confirm acceptance of my authority within
          fifteen business days.&rdquo;
        </li>
        <li>
          <strong>&ldquo;We need to re-inspect the property.&rdquo;</strong> The insurer
          already inspected the property when the claim was filed. A second inspection may or
          may not be warranted, but it should not be used to delay payment on items already
          agreed upon.
        </li>
        <li>
          <strong>&ldquo;The claim file was reassigned.&rdquo;</strong> The insurer assigns
          a new adjuster who claims no knowledge of prior negotiations or agreements. The new
          adjuster essentially starts over. Request a copy of the entire claim file under
          California&rsquo;s Fair Claims Settlement Practices Regulations (Cal. Code Regs.
          tit. 10, &sect; 2695.7(d)).
        </li>
        <li>
          <strong>&ldquo;The new claimant has not cooperated.&rdquo;</strong> The insurer
          sends documentation requests to an old address, does not copy the estate
          representative on correspondence, or sets unreasonable deadlines for the
          representative to become fully informed about a claim they may have known nothing
          about. Challenge this in writing.
        </li>
        <li>
          <strong>Lowball settlement pressure.</strong> The insurer offers a below-value
          settlement to a grieving family, knowing the family may lack the energy or knowledge
          to fight. Never accept a settlement under time pressure or emotional duress. You have
          the right to take the time you need to understand the full value of the claim.
        </li>
      </ol>

      {/* ============================================================ */}
      {/* SECTION: PROTECTING THE CLAIM */}
      {/* ============================================================ */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Protecting the Claim: A Summary of Best Practices
      </h2>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          Notify the insurer of the death in writing immediately &mdash; do not wait for
          formal legal authority.
        </li>
        <li>
          Identify and track every running deadline: proof of loss, suit limitation,
          replacement cost, ALE.
        </li>
        <li>
          Establish legal authority as quickly as possible: certification of trust, Letters
          Testamentary, or Letters of Administration.
        </li>
        <li>
          Gather all pre-death claim documentation, including any written agreements or
          acknowledgments from the insurer.
        </li>
        <li>
          Direct the insurer to update its records: new contact person, new mailing address,
          new payee name for checks.
        </li>
        <li>
          Do not accept a settlement without understanding the full value of the claim. The
          personal representative has a fiduciary duty to all beneficiaries.
        </li>
        <li>
          Consult a public adjuster, an attorney, or both. The intersection of insurance law
          and probate law creates complexities that are difficult to navigate without
          professional guidance.
        </li>
        <li>
          Put everything in writing. Oral conversations with the insurer should be followed
          up with a written summary sent by email or certified mail.
        </li>
      </ul>

      <CalloutBox variant="legal" title="Key California Statutes">
        <p>
          The following statutes are most relevant when a policyholder dies with a pending
          insurance claim:
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>
            <strong>CCP &sect; 377.20&ndash;377.34:</strong> Survival of causes of action and
            authority of successors in interest
          </li>
          <li>
            <strong>Prob. Code &sect; 9656:</strong> Personal representative&rsquo;s authority to
            insure estate property
          </li>
          <li>
            <strong>Prob. Code &sect; 13100:</strong> Small estate affidavit (for estates below
            the statutory threshold)
          </li>
          <li>
            <strong>Prob. Code &sect; 9611:</strong> Petition for court instructions on estate
            management
          </li>
          <li>
            <strong>Prob. Code &sect; 18100.5:</strong> Certification of trust
          </li>
          <li>
            <strong>Ins. Code &sect; 790.03(h):</strong> Unfair Claims Settlement Practices Act
          </li>
          <li>
            <strong>Ins. Code &sect; 2071:</strong> Standard fire policy (proof of loss and suit
            limitation)
          </li>
          <li>
            <strong>Cal. Code Regs. tit. 10, &sect; 2695.1 et seq.:</strong> Fair Claims
            Settlement Practices Regulations
          </li>
          <li>
            <strong>CCP &sect; 366.2:</strong> Time limitation after death of person entitled to
            bring action
          </li>
        </ul>
      </CalloutBox>

      {/* ============================================================ */}
      {/* SECTION: WHEN TO GET HELP */}
      {/* ============================================================ */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When to Get Professional Help
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you are the family member or estate representative of a policyholder who died with
        a pending insurance claim, you are dealing with the intersection of two complex legal
        areas: insurance law and probate/trust law. Consider retaining professional help in the
        following situations:
      </p>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          The claim is large (over $50,000) or involves a total loss
        </li>
        <li>
          The insurer is disputing coverage, reducing the claim, or delaying unreasonably
        </li>
        <li>
          Multiple beneficiaries disagree about how to handle the claim
        </li>
        <li>
          The suit limitation deadline is approaching
        </li>
        <li>
          The insurer is attempting to re-evaluate the claim or retract prior agreements
        </li>
        <li>
          The claim involves bad faith by the insurer, either before or after the
          policyholder&rsquo;s death
        </li>
        <li>
          The property is in a trust and the insurer is raising coverage questions based on
          the trust ownership structure
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        A licensed public adjuster can manage the insurance claim on behalf of the estate,
        handle negotiations with the insurer, and ensure the claim is resolved for its full
        value. An insurance attorney can address coverage disputes, bad faith, and litigation.
        A probate attorney can handle the estate administration and ensure the personal
        representative&rsquo;s authority is properly established.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Losing a family member is devastating. Losing a family member and then having to fight
        an insurance company that is using the death to undermine a valid claim is unconscionable.
        But the law is on the policyholder&rsquo;s side &mdash; and by extension, on the
        estate&rsquo;s side. The claim survives. The deadlines are manageable with prompt
        action. The insurer&rsquo;s obligations do not diminish. With proper documentation and
        professional guidance, the estate can and should recover the full value of the claim.
      </p>
    </>
  )
}
