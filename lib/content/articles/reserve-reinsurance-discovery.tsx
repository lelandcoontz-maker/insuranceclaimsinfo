import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Discovering Claim Reserves and Reinsurance Arrangements in Insurance Litigation',
  description:
    'How to obtain an insurer\'s internal claim reserves and reinsurance treaty information through discovery in California insurance litigation. Covers why reserves matter, privilege objections, case law on discoverability, and practical strategies for litigators.',
  summary:
    'An insurer\'s internal claim reserves and reinsurance arrangements can be discoverable in litigation and reveal what the carrier really thought a claim was worth. Expect privilege objections, but case law supports obtaining this telling evidence.',
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
        Every insurance claim has a number that the policyholder never sees: the{' '}
        <Link href="/resources/reserves-and-authority" className="text-[#2E74B5] underline">
          reserve
        </Link>. This is the amount the carrier has set aside internally to cover the anticipated
        cost of the claim. It is the carrier&rsquo;s own assessment &mdash; prepared by its own
        adjusters, reviewed by its own supervisors, audited by its own actuaries &mdash; of what
        the claim is actually worth. When the carrier offers a policyholder $85,000 to settle a
        claim on which it has internally reserved $220,000, the reserve tells a story that the
        settlement offer does not.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Behind the reserve sits another layer of information that carriers guard even more
        closely: the reinsurance arrangement. Reinsurance is insurance that the carrier purchases
        to protect itself against large losses. The structure of the carrier&rsquo;s reinsurance
        treaties can reveal how the carrier&rsquo;s economic incentives are shaped &mdash; at
        what point the carrier stops paying out of its own pocket and starts collecting from
        its reinsurer, and how that threshold may influence the carrier&rsquo;s willingness to
        settle.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In litigation, both reserves and reinsurance information can be obtained through the{' '}
        <Link href="/resources/discovery-insurance-litigation" className="text-[#2E74B5] underline">
          discovery process
        </Link>. But carriers fight disclosure of both categories of information aggressively,
        invoking privilege, work product, and relevance objections. Understanding why this
        information matters and how to overcome the objections is a critical skill for any
        attorney litigating against an insurer.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Claim Reserves Are and Why They Matter
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A claim reserve is an accounting entry that represents the carrier&rsquo;s estimate of
        the total amount it expects to pay on a particular claim. When a loss is reported, the
        adjuster establishes an initial reserve based on preliminary information. As the claim
        develops &mdash; as damage assessments are completed, as additional coverages are
        triggered, as the full scope of the loss becomes apparent &mdash; the reserve is
        adjusted upward or downward to reflect the current expected payout.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Reserves serve a regulatory purpose: state insurance departments require carriers to
        maintain adequate reserves so they have sufficient funds to pay claims. But reserves
        also serve an evidentiary purpose in litigation that carriers would prefer to keep
        hidden: the reserve is the carrier&rsquo;s own contemporaneous valuation of the claim.
        It is established and updated by the same adjusters and supervisors who handle the
        claim, and it reflects the carrier&rsquo;s internal judgment about what the claim is
        actually worth.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Reserve as Evidence of Claim Value
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A reserve carries enormous evidentiary weight. When a carrier sets a
        reserve of $300,000 on a claim but offers the policyholder $120,000 to settle, the gap
        between the reserve and the offer is powerful evidence that the carrier knows the claim
        is worth more than it is willing to pay voluntarily. This gap is directly relevant to
        both the underlying coverage dispute (what is the claim actually worth?) and to any{' '}
        <Link href="/resources/bad-faith" className="text-[#2E74B5] underline">
          bad faith claim
        </Link>{' '}
        (did the carrier fail to offer a fair settlement when the value of the claim was
        reasonably clear?).
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Reserve history is equally important. Tracking how the reserve changed over time
        reveals the carrier&rsquo;s evolving assessment of the claim. A reserve that was
        initially set at $250,000, then reduced to $100,000 after the policyholder hired a{' '}
        <Link href="/resources/public-adjuster" className="text-[#2E74B5] underline">
          Public Adjuster
        </Link>{' '}
        or attorney, suggests that the reduction was retaliatory rather than based on new
        information about the claim&rsquo;s value. Conversely, a reserve that was always low
        despite documentation supporting a higher value suggests the carrier was managing the
        reserve to keep settlement authority artificially constrained.
      </p>

      <CalloutBox variant="important" title="Reserves Reflect the Carrier&rsquo;s Own Assessment">
        <p>
          The reserve is not the policyholder&rsquo;s number or an independent appraisal. It
          is the carrier&rsquo;s own judgment about claim value, prepared by the carrier&rsquo;s
          own employees using the carrier&rsquo;s own information. This makes it uniquely
          powerful evidence: the carrier cannot easily dismiss its own internal valuation as
          unreliable or inflated without undermining its own claims-handling process.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Reserve as Evidence of Bad Faith
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        In a bad faith lawsuit, the reserve history is often the single most damaging piece of
        evidence against the carrier. California bad faith law, rooted in the implied covenant
        of good faith and fair dealing, requires the insurer to make a good faith effort to
        settle a claim when the value becomes reasonably clear. If the carrier&rsquo;s own
        reserve indicates that it valued the claim at a figure substantially higher than what
        it offered, this creates a compelling inference that the carrier was not making a good
        faith settlement effort.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Additionally, reserve manipulation &mdash; artificially lowering the reserve to
        constrain settlement authority or to make the claims file look better during internal
        audits &mdash; is itself evidence of bad faith claims handling. When reserve reductions
        coincide with events unrelated to claim value (the policyholder hiring representation,
        the claim approaching a litigation deadline, a change in adjuster personnel), the
        manipulation becomes transparent.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Reinsurance: The Hidden Economic Layer
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Reinsurance is the mechanism by which insurance companies transfer portions of their
        own risk to other insurers (reinsurers). The primary carrier pays a premium to the
        reinsurer, and in exchange, the reinsurer agrees to cover a portion of the carrier&rsquo;s
        losses above specified thresholds. Reinsurance arrangements are complex, varied, and
        highly confidential &mdash; carriers treat their reinsurance treaties as proprietary
        business information.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        How Reinsurance Structures Affect Claim Handling
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Reinsurance arrangements can create perverse incentives in claim handling. The most
        common reinsurance structure is &ldquo;excess of loss&rdquo; reinsurance, where the
        reinsurer covers losses above a specified retention level (sometimes called the
        &ldquo;attachment point&rdquo;). For example, a carrier might retain the first $500,000
        of any single claim and have reinsurance covering amounts above that threshold.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This structure creates a powerful economic incentive for the carrier to keep individual
        claim payments below the reinsurance attachment point. Every dollar the carrier pays
        below the retention comes directly from its own reserves. Every dollar above the
        retention is partially or fully covered by the reinsurer. A carrier with a $500,000
        retention has a strong financial incentive to settle a $700,000 claim for $450,000
        &mdash; the $250,000 savings comes entirely out of the reinsurer&rsquo;s pocket, not
        the carrier&rsquo;s.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In catastrophe situations, reinsurance dynamics become even more significant. Carriers
        typically have catastrophe reinsurance that covers aggregate losses above a threshold
        for a single event (such as a wildfire or hurricane). The carrier has an incentive to
        minimize individual claim payments to reduce its aggregate exposure and potentially
        stay below the catastrophe reinsurance attachment point &mdash; or, alternatively,
        to push aggregate losses above the attachment point so the reinsurer bears the cost.
        Either way, the reinsurance structure influences how claims are handled, and
        policyholders are entitled to understand that influence.
      </p>

      <CalloutBox variant="info" title="Reinsurance Does Not Reduce the Carrier&rsquo;s Obligation">
        <p>
          Reinsurance is an arrangement between the carrier and its reinsurer. The policyholder
          is not a party to the reinsurance contract and is not affected by it &mdash; in theory.
          The carrier&rsquo;s obligation to pay the full amount owed under the policy exists
          regardless of whether the carrier can recover from its reinsurer. But in practice,
          reinsurance arrangements shape the economic incentives that drive claim handling
          decisions, which is why they are relevant in bad faith litigation.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Reinsurance Reporting and the Claims File
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many reinsurance treaties require the primary carrier to notify the reinsurer of claims
        above certain thresholds and to provide periodic reports on claim status, reserves, and
        settlement negotiations. These communications between the carrier and its reinsurer can
        contain valuable information for the policyholder: the carrier&rsquo;s candid assessment
        of claim value, the reinsurer&rsquo;s views on coverage and settlement, and evidence of
        the reinsurer&rsquo;s involvement in claim handling decisions. If the reinsurer has been
        directing the carrier to deny or reduce a claim, that fact is highly relevant to a bad
        faith analysis.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        California Discovery Rules for Reserves
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California has a liberal discovery standard. Code of Civil Procedure section 2017.010
        permits discovery of any matter &ldquo;not privileged, that is relevant to the subject
        matter involved in the pending action,&rdquo; including information that &ldquo;appears
        reasonably calculated to lead to the discovery of admissible evidence.&rdquo; Under this
        standard, claim reserves are clearly discoverable in insurance litigation &mdash; they
        are relevant to both claim value and bad faith, and they are not privileged.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Privilege Arguments Carriers Make
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Despite the clear relevance of reserves, carriers routinely object to reserve discovery
        on multiple grounds. Understanding these objections &mdash; and why they generally fail
        &mdash; is essential for practitioners.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Attorney-client privilege.</strong> Carriers argue that reserves were set or
          adjusted based on legal advice and therefore reflect privileged communications. This
          argument fails because the reserve itself is a business record, not a legal
          communication. The fact that an attorney may have been consulted in setting the reserve
          does not transform the reserve amount into a privileged communication. The reserve is
          an accounting entry required by regulators, and it exists independently of any legal
          advice.
        </li>
        <li>
          <strong>Work product protection.</strong> Carriers argue that the reserve reflects
          the carrier&rsquo;s mental impressions, conclusions, and litigation strategy. This
          argument has more traction than the privilege argument but still generally fails in
          California insurance litigation. The reserve is set in the ordinary course of claims
          handling, typically before litigation commences. Even when the reserve is adjusted
          after litigation begins, California courts have held that the reserve amount &mdash;
          as distinct from the analysis underlying it &mdash; is discoverable.
        </li>
        <li>
          <strong>Irrelevance.</strong> Carriers argue that the reserve is merely an internal
          accounting figure that does not reflect the actual value of the claim. This argument
          is circular: the carrier maintains that its own internal valuation of the claim is
          irrelevant to determining what the claim is worth. Courts routinely reject this
          position.
        </li>
        <li>
          <strong>Undue prejudice.</strong> Carriers argue that disclosing the reserve will
          prejudice them because the jury will treat the reserve as an admission of value. This
          argument goes to admissibility at trial, not discoverability. Even if a court
          ultimately limits the use of reserve evidence at trial, the information is discoverable
          in the pretrial phase.
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Key California Authority on Reserve Discovery
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        California courts have consistently upheld the discoverability of claim reserves in
        insurance bad faith litigation. The rationale is straightforward: the reserve reflects
        the carrier&rsquo;s contemporaneous evaluation of the claim, and that evaluation is
        directly relevant to whether the carrier acted in good faith in its handling and
        settlement of the claim. Practitioners seeking reserve discovery should emphasize the
        connection between the reserve and the bad faith claim &mdash; the reserve is not sought
        to determine policy coverage in the abstract, but to demonstrate whether the carrier&rsquo;s
        settlement conduct was consistent with its own internal assessment of claim value.
      </p>

      <CalloutBox variant="legal" title="Bifurcation Can Complicate Reserve Discovery">
        <p>
          In some cases, courts bifurcate insurance bad faith litigation into a coverage phase
          and a bad faith phase. When bifurcation occurs, the carrier may argue that reserve
          discovery is premature during the coverage phase because the bad faith claim has not
          yet been reached. Practitioners should argue against bifurcation where possible, or
          alternatively, seek discovery of reserves during the coverage phase on the ground that
          they are relevant to the coverage determination itself &mdash; the carrier&rsquo;s own
          valuation of the claim is relevant evidence of what the claim is worth.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Discovering Reinsurance Information
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Reinsurance discovery is more contested than reserve discovery, but it is obtainable in
        California under the right circumstances. The key is demonstrating relevance to the
        claims at issue.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        When Reinsurance Is Relevant
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Reinsurance information is most clearly relevant when the policyholder can articulate a
        specific theory about how the reinsurance arrangement influenced the carrier&rsquo;s
        claim handling. Examples include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          The reinsurer participated in or directed claim handling decisions, such as approving
          or rejecting settlement offers, directing additional investigation, or requiring
          specific coverage positions
        </li>
        <li>
          The carrier&rsquo;s settlement behavior appears designed to keep claim payments below
          the reinsurance attachment point, suggesting that the carrier is managing its
          reinsurance exposure at the policyholder&rsquo;s expense
        </li>
        <li>
          Communications between the carrier and the reinsurer contain candid assessments of
          claim value or coverage that differ from the positions taken with the policyholder
        </li>
        <li>
          The reinsurance treaty contains provisions that penalize the carrier for exceeding
          loss ratios, creating a structural incentive to suppress claim payments
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Overcoming Confidentiality Objections
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Carriers typically object to reinsurance discovery on grounds of commercial
        confidentiality, arguing that reinsurance treaties contain proprietary business terms
        that could harm the carrier competitively if disclosed. This objection can be addressed
        through a protective order that limits the use and dissemination of the reinsurance
        information to the pending litigation. California courts regularly enter such orders
        to balance discovery rights against legitimate confidentiality concerns. The existence
        of confidentiality concerns does not eliminate the right to discovery &mdash; it simply
        shapes the terms under which discovery is produced.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Practical Litigation Strategies
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Obtaining reserve and reinsurance discovery requires a proactive and strategic approach.
        Carriers will not produce this information voluntarily. The following strategies can
        increase the likelihood of successful disclosure.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Tailored, Specific Discovery Requests
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Overly broad requests for &ldquo;all documents relating to reserves&rdquo; invite
        objections and provide the carrier with ammunition to argue that the request is unduly
        burdensome. Instead, target specific information: the initial reserve amount, every
        subsequent change to the reserve with the date and stated reason for the change, the
        identity of the person who authorized each change, and any correspondence or internal
        memoranda discussing the reserve. For reinsurance, request the specific treaty or
        treaties applicable to the claim, any notices sent to the reinsurer regarding the
        claim, and any communications between the carrier and reinsurer regarding claim
        handling, coverage, or settlement.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Deposition Testimony on Reserves
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Deposing the adjuster and the adjuster&rsquo;s supervisor about the reserve-setting
        process can yield critical evidence even before the reserve documents themselves are
        produced. Questions about how reserves are established, who approves reserve changes,
        what factors are considered, and whether the reserve was ever reduced &mdash; and if
        so, why &mdash; can reveal the carrier&rsquo;s internal processes and set up the
        document demands that follow.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Motion Practice When the Carrier Refuses
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When the carrier refuses to produce reserve or reinsurance information, a motion to
        compel is necessary. The motion should articulate the specific relevance of the
        information to the claims at issue, address the carrier&rsquo;s privilege and work
        product objections with applicable authority, and propose a protective order to
        address any legitimate confidentiality concerns. California courts have broad
        discretion to compel discovery, and the standard favors disclosure.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Using Reserve Evidence Effectively
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Once obtained, reserve evidence must be deployed strategically. The most effective
        use is typically in the bad faith phase of litigation, where the gap between the
        reserve and the settlement offer demonstrates that the carrier knew the claim was
        worth more than it was willing to pay. Reserve evidence is also valuable in
        settlement negotiations &mdash; presenting the carrier with its own internal
        valuation can prompt a more realistic settlement discussion, particularly when
        the carrier realizes that a jury will see the reserve at trial.
      </p>

      <CalloutBox variant="tip" title="Demand the Complete Reserve History">
        <p>
          Do not settle for only the current reserve amount. The complete reserve history
          &mdash; every change, with dates and reasons &mdash; tells the story of the
          carrier&rsquo;s evolving view of the claim. A reserve that was reduced after the
          policyholder hired representation, or after the carrier decided to deny, can be
          more powerful evidence of bad faith than a single reserve figure.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Intersection with Pattern and Practice Discovery
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Reserve and reinsurance discovery becomes even more powerful when combined with{' '}
        <Link href="/resources/discovery-insurance-litigation" className="text-[#2E74B5] underline">
          pattern and practice discovery
        </Link>{' '}
        &mdash; discovery into the carrier&rsquo;s handling of similar claims. If the carrier
        systematically under-reserves claims of a particular type, or if its reinsurance
        structure creates consistent incentives to underpay, that pattern is relevant to
        proving that the carrier&rsquo;s conduct on the policyholder&rsquo;s claim was not an
        isolated error but part of a systemic practice. California courts, following the
        reasoning of <em>Colonial Life &amp; Accident Insurance Co. v. Superior Court</em>
        (1982) 31 Cal.3d 785, have permitted broad discovery into an insurer&rsquo;s
        claims-handling practices in bad faith litigation.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        For Policyholders Not Yet in Litigation
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The discovery tools discussed in this article are available only to policyholders who
        have filed a lawsuit. During the pre-litigation claims process, the policyholder has no
        legal right to demand the carrier&rsquo;s reserves or reinsurance information. However,
        understanding that these tools exist &mdash; and that the carrier knows they exist &mdash;
        can inform the policyholder&rsquo;s claims strategy.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A carrier that is underpaying a claim knows that if the policyholder litigates, the
        reserve will be discoverable. The gap between the reserve and the offer will be laid
        bare. A policyholder or Public Adjuster who communicates, directly or implicitly, that
        they are prepared to litigate and obtain this information is sending a powerful message:
        the carrier&rsquo;s internal numbers will eventually become evidence. This awareness
        can, in some cases, produce a more reasonable settlement without the need for formal
        litigation.
      </p>

      {/* ── Sources and Further Reading ─────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Sources &amp; Further Reading
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Shernoff Bidart Echeverria LLP</strong> &mdash; Attorneys at Shernoff
          Bidart Echeverria and at other plaintiff-side insurance litigation firms have
          published extensively on discovery strategies in insurance bad faith cases,
          including the discoverability of claim reserves and the evidentiary significance
          of reserve manipulation. Search for their publications on insurance bad faith
          discovery and reserve evidence.
        </li>
        <li>
          <strong>Pillsbury Winthrop Shaw Pittman LLP</strong> &mdash; Pillsbury&rsquo;s
          insurance recovery practice has analyzed the discoverability of reinsurance
          information in coverage and bad faith disputes, including the circumstances under
          which courts have compelled production of reinsurance treaties and carrier-reinsurer
          communications.
        </li>
        <li>
          <strong>Policyholder-side coverage commentary</strong> &mdash; The
          policyholder-side coverage bar has written extensively on the use of reserve
          evidence in bad-faith litigation. The argument frequently advanced is that the
          claims reserve is the insurer&rsquo;s own contemporaneous assessment of what the
          claim is worth, prepared by its own people for its own purposes &mdash; so when
          that number vastly exceeds the settlement offer, the inference of bad faith is
          difficult to escape.
        </li>
        <li>
          <strong><em>Colonial Life &amp; Accident Insurance Co. v. Superior Court</em></strong>{' '}
          (1982) 31 Cal.3d 785 &mdash; This California Supreme Court decision established
          the right to pattern and practice discovery in insurance bad faith litigation,
          which forms the foundation for broader reserve and claims-handling discovery.
        </li>
        <li>
          <strong>California Code of Civil Procedure section 2017.010</strong> &mdash; The
          statutory basis for California&rsquo;s liberal discovery standard, which permits
          discovery of any nonprivileged matter relevant to the subject matter of the
          pending action.
        </li>
      </ul>

      <CalloutBox variant="legal" title="Disclaimer">
        <p>
          This article is for general educational purposes only and does not constitute legal
          advice. The discovery strategies discussed here require the involvement of a licensed
          attorney and are available only in the context of pending litigation. Insurance
          policies, regulations, and case law vary based on individual circumstances. The legal
          principles discussed reflect California law as of the date of publication and may not
          apply in other jurisdictions. Consult a licensed attorney experienced in insurance
          coverage and bad faith litigation for advice about your specific situation.
        </p>
        <p className="mt-2">
          <strong>Author:</strong> Leland Coontz III, Licensed Public Adjuster, CA License #2B53445
        </p>
      </CalloutBox>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Suspect Your Insurer Is Undervaluing Your Claim?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          If your carrier&rsquo;s settlement offer does not match the true value of your loss,
          a licensed Public Adjuster can document the claim properly and, when needed,
          coordinate with litigation counsel who can obtain the carrier&rsquo;s internal
          reserve and reinsurance information through discovery.
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
