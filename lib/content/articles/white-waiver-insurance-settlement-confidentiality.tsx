import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'The White Waiver: When Your Insurance Company Asks You to Keep Settlement Talks Secret',
  description:
    'What a White waiver is, why insurers ask you to sign one, what rights you surrender, and how to protect yourself. California law on settlement confidentiality in insurance bad faith disputes.',
  summary:
    'A White waiver asks you to keep settlement communications confidential, surrendering the right to use them as evidence of bad faith. Understand what you give up before signing, and how California settlement-privilege law applies.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your insurance company has denied your claim or offered you far less than what you believe
        you&rsquo;re owed. Maybe you&rsquo;ve hired an attorney. Maybe you&rsquo;ve filed suit. Now
        the insurance company contacts your side and says it&rsquo;s willing to talk about settling
        the case &mdash; but only if you first sign an agreement. The agreement says that whatever
        the insurer offers you during settlement discussions cannot be used against the insurer later
        in court as evidence of bad faith.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This agreement is known as a <strong>White waiver</strong>, and it is one of the most
        consequential &mdash; and least understood &mdash; documents that an insured can be asked to
        sign. Named after a 1985 California Supreme Court decision, the White waiver has become a
        routine fixture in first-party insurance disputes. Whether you should sign one, and what
        happens if you do, are questions that every policyholder and every policyholder&rsquo;s
        attorney should understand before the document ever lands on the table.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Case That Started It All: <em>White v. Western Title Insurance Co.</em>
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The White waiver takes its name from <em>White v. Western Title Insurance Co.</em> (1985) 40
        Cal.3d 870, a landmark California Supreme Court decision that fundamentally changed the
        landscape of insurance bad faith litigation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Brian and Helen White purchased a property in Mendocino County and obtained a title insurance
        policy from Western Title Insurance Company. What the insurer failed to disclose &mdash;
        despite the information being plainly available in the public record &mdash; was a recorded
        water easement held by River Estates Mutual Water Corporation. When the water company later
        asserted its rights, the Whites found themselves stuck with an encumbrance their title
        insurer should have caught.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Whites sued for breach of contract, negligence, and breach of the implied covenant of
        good faith and fair dealing. The case went to a jury, which awarded $8,400 in contract and
        negligence damages and an additional $20,000 for breach of the good faith covenant.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        What made this case a landmark was not the relatively modest dollar amounts. It was the
        California Supreme Court&rsquo;s ruling on two critical issues.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>First</strong>, the court held that <strong>the duty of good faith and fair dealing
        does not terminate when the insured files a lawsuit</strong>. Western Title had argued that
        once litigation began, the parties were adversaries and the insurer was free to litigate as
        aggressively as it chose, with no continuing obligation of good faith toward its own insured.
        The Supreme Court disagreed. The contractual relationship between an insurer and its insured,
        the court said, &ldquo;does not end when litigation begins.&rdquo; Creating a bright-line
        rule that good faith obligations evaporate upon the filing of suit, the court warned, would
        &ldquo;encourage insurers to induce the early filing of suits, and to delay serious
        investigation&rdquo; of claims.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Second</strong>, the court held that <strong>settlement offers made during litigation
        are admissible as evidence of bad faith</strong> &mdash; not to prove liability on the
        underlying claim, but to demonstrate how the insurer handled the claim. Evidence Code section
        1152 generally bars the admission of settlement offers to prove liability for the loss being
        compromised. But the court distinguished between using a settlement offer to prove you owe a
        debt (which is prohibited) and using it to prove that the insurer acted in bad faith in how
        it handled the claim (which is permitted).
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The facts of <em>White</em> illustrated exactly the kind of insurer behavior this rule was
        designed to expose. Western Title denied coverage for a recorded easement without reasonable
        basis. It offered paltry settlement amounts &mdash; $3,000 and then $5,000 &mdash; without
        ever conducting an appraisal of the plaintiff&rsquo;s loss. Even after the court found in
        the Whites&rsquo; favor on the liability question, the insurer made no serious attempt to
        settle. The &ldquo;entire pattern of conduct,&rdquo; the court found, demonstrated an
        attempt to avoid responsibility for obvious coverage failures.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What the Insurance Industry Did Next
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurance industry&rsquo;s response to <em>White</em> was swift and predictable. If
        settlement offers could be used as evidence of bad faith, then insurers would simply
        condition settlement talks on the insured&rsquo;s agreement not to use them that way. The
        <strong> White waiver</strong> was born.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A typical White waiver asks the insured (or the insured&rsquo;s attorney) to agree that:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          All settlement discussions, offers, and counteroffers will remain confidential.
        </li>
        <li>
          Neither party will introduce settlement communications as evidence in any subsequent
          proceeding.
        </li>
        <li>
          The waiver specifically extends to any claim for breach of the implied covenant of good
          faith and fair dealing.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        In other words, the insured is being asked to voluntarily surrender the very right that the
        California Supreme Court recognized in <em>White</em>: the right to show a jury what the
        insurer offered, and to argue that the offer was so unreasonable that it constituted bad
        faith.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Should an Insured Sign a White Waiver?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The answer is: it depends &mdash; but the default position should be caution, not compliance.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        When It Might Make Sense
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If negotiations have been amicable and productive, if the adjuster has demonstrated a
        reasonable attitude toward the claim, and if there are genuine signals that the insurer is
        prepared to make a meaningful offer, a carefully limited White waiver can facilitate a
        resolution. Sometimes the insurer&rsquo;s claims department genuinely wants to settle but
        needs the institutional cover of knowing that a settlement number that doesn&rsquo;t
        ultimately work out won&rsquo;t be used to punish them later. In these situations, a White
        waiver can actually lubricate negotiations that might otherwise stall.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        When It Doesn&rsquo;t
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the insurer refuses to discuss settlement at all unless a White waiver is signed, that
        refusal itself should raise concerns. An insurer that conditions all communication on secrecy
        may be signaling that it intends to make an offer it knows is unreasonable &mdash; and it
        wants to ensure that the unreasonableness of that offer can never see the inside of a
        courtroom.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the relationship between the insured and the insurer is already acrimonious &mdash; if
        there is a history of delays, lowball offers, or outright denials &mdash; then signing away
        the right to use settlement conduct as evidence is signing away one of the most powerful
        tools available in a bad faith case.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        There is also a broader strategic concern. The White waiver effectively allows the insurer to
        make an unreasonably low offer and then walk away from the table, knowing the insured can
        never point to that offer as evidence of bad faith. It can be used as a mechanism to create a
        paper trail that looks like the insurer tried to settle &mdash; &ldquo;We made an
        offer!&rdquo; &mdash; while the substance of that offer is shielded from scrutiny.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Time Limits: A Critical Safeguard
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        One of the most important &mdash; and most frequently overlooked &mdash; issues with White
        waivers is duration. Many waivers, as drafted by defense counsel, contain no expiration date.
        If the insured signs an open-ended White waiver, the insurer&rsquo;s settlement conduct may
        be shielded from scrutiny indefinitely &mdash; not just for the current round of
        negotiations, but for all future settlement discussions in the case.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        An insured who agrees to a White waiver should insist on a <strong>defined time
        period</strong>. The waiver should cover a specific settlement conference, a specific
        mediation session, or a specific window of days. When that period expires, the insured&rsquo;s
        rights under <em>White</em> should fully restore. If the insurer wants another round of
        protected discussions, it can request a new waiver &mdash; and the insured can decide at that
        point whether the insurer&rsquo;s conduct warrants continued trust.
      </p>

      <CalloutBox variant="warning" title="Beware Perpetual Waivers">
        <p>
          A White waiver that carries on in perpetuity can trap an insured in a cycle of lowball
          offers with no accountability. The insured remains locked in what appears to be a
          negotiation but is in reality a delay tactic, and the waiver prevents the insured from
          ever telling a jury what the insurer was actually willing to put on the table.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Can an Insured Revoke a White Waiver?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is a more complex question than it might appear, and the answer depends on how the
        waiver is structured and what consideration, if any, supported it.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Consideration Problem
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under basic contract law, a waiver is a form of agreement, and agreements generally require
        consideration &mdash; something of value exchanged by both parties. If the insurer&rsquo;s
        only &ldquo;consideration&rdquo; for the White waiver is its willingness to talk about
        settlement, a court could question whether that constitutes adequate consideration. The
        insurer already has a duty of good faith that extends through litigation, as <em>White</em>
        {' '}itself established. Conditioning the performance of an existing duty on the
        insured&rsquo;s surrender of rights raises questions about whether the agreement was truly
        bargained for or was simply extracted under the threat of silence.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Rescission Under California Civil Code Section 1689
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        California Civil Code section 1689 provides several grounds on which a party may rescind a
        contract:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Duress or undue influence:</strong> If the insured was pressured into signing
          without adequate time to consider the waiver&rsquo;s implications, the agreement may be
          voidable.
        </li>
        <li>
          <strong>Failure of consideration:</strong> If the insurer obtained the waiver by promising
          to engage in good-faith negotiations and then proceeded to make only token or unreasonable
          offers, the consideration underlying the waiver has arguably failed.
        </li>
        <li>
          <strong>Mutual consent:</strong> Both parties can agree to rescind the waiver at any time.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The practical difficulty is that rescission typically requires prompt action. An insured who
        signs a White waiver, participates in months of settlement discussions, and then attempts to
        rescind the waiver after learning the offers were inadequate may face arguments that the
        right to rescind was waived by continued participation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is another reason why time limits are critical. A waiver with a built-in expiration is
        far easier to manage than one that requires affirmative revocation.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Breaking the Confidentiality: When the White Waiver May Not Hold
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The White waiver is not an impenetrable shield. There are several circumstances under which
        the confidentiality it provides can be pierced or circumvented.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Third-Party Witnesses
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A White waiver is a contract between two parties: the insurer and the insured (or their
        respective counsel). It binds the signatories. It does not &mdash; and cannot &mdash; bind
        third parties who are not parties to the agreement.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If a settlement discussion takes place in the presence of a third party &mdash; a public
        adjuster, a contractor, a family member, an appraiser &mdash; that third party is not bound
        by the White waiver. The insured may be contractually barred from testifying about what was
        said, but the third party is not. A subpoena directed to the third party could potentially
        elicit the very testimony the waiver was designed to suppress.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Communications Outside the Scope of the Waiver
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A White waiver typically covers &ldquo;settlement discussions&rdquo; or &ldquo;settlement
        communications.&rdquo; But not every communication between an insurer and an insured during
        a dispute qualifies as a settlement discussion. If the insurer makes statements about the
        claim, the coverage, or the investigation that are not framed as settlement offers, those
        statements may fall outside the waiver&rsquo;s protection.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The distinction drawn in <em>Wimsatt v. Superior Court</em> (2007) 152 Cal.App.4th 137 is
        instructive. The court held that a settlement conversation that occurred during a phone call
        to schedule depositions was not protected by mediation confidentiality because it was
        &ldquo;routine discussion, unassociated with mediation that routinely occurs in civil
        litigation.&rdquo; The principle translates: conversations that happen to occur around the
        time of settlement discussions but are not themselves settlement communications may not be
        covered by the waiver.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Fraud, Duress, and Illegality Exception
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Even in the context of formal mediation &mdash; where confidentiality protections are
        statutory rather than contractual &mdash; California Evidence Code section 1123(d) provides
        that a mediation agreement is admissible if used &ldquo;to show fraud, duress, or illegality
        that is relevant to an issue in dispute.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the insurer engaged in fraud or duress in connection with the White waiver itself &mdash;
        for example, by making affirmative misrepresentations about its intentions to induce the
        insured to sign &mdash; the waiver may be challenged on those grounds. An insurer that tells
        the insured &ldquo;we&rsquo;re prepared to make a very substantial offer&rdquo; to induce
        execution of the waiver, and then tables an offer that is clearly inadequate, may have
        created grounds for the insured to argue that the waiver was procured by fraud and should be
        set aside.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Insurer&rsquo;s Own Conduct
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        There is an argument &mdash; not yet definitively resolved by the courts &mdash; that an
        insurer cannot use a White waiver both as a shield and as a sword. If the insurer introduces
        evidence of its settlement efforts to demonstrate good faith (for example, by telling the
        jury &ldquo;we tried to settle this case&rdquo;), the insured should be entitled to rebut
        that evidence by showing what the settlement efforts actually looked like. The waiver was
        designed to keep settlement discussions out of the courtroom. If the insurer selectively
        introduces settlement-related evidence, it may open the door to the insured doing the same.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Last-Minute White Waiver: Pressure Without Time to Think
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        One of the more troubling scenarios occurs when the insurer presents the White waiver at the
        last possible moment &mdash; at the start of a mediation session, at a settlement
        conference, or during a phone call where the insured is told that an offer is waiting but
        cannot be disclosed until the waiver is signed. The insured is placed in a position of having
        to make a consequential legal decision on the spot, without the opportunity to consult with
        counsel or to consider the implications.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This kind of pressure implicates the doctrine of <strong>undue influence</strong>, which
        California courts have addressed extensively. In <em>Odorizzi v. Bloomfield School
        District</em> (1966) 246 Cal.App.2d 123, the California Court of Appeal identified several
        hallmarks of undue influence, including:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Discussion of the transaction at an unusual or inappropriate time</li>
        <li>Insistent demand that the business be finished at once</li>
        <li>Extreme emphasis on the untoward consequences of delay</li>
        <li>Statements that there is no time to consult an attorney</li>
        <li>The absence of third-party advisors to the party being asked to sign</li>
        <li>Use of multiple persuaders against a single party</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        If an insurer presents a White waiver under circumstances that check several of these boxes
        &mdash; demanding immediate signature, discouraging consultation with counsel, suggesting
        that the offer will disappear if the waiver isn&rsquo;t signed right now &mdash; the insured
        may have grounds to challenge the waiver as the product of undue influence, rendering it
        voidable under California Civil Code section 1689.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Promises Made Alongside the White Waiver
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Sometimes the White waiver does not arrive alone. It arrives with assurances. The adjuster or
        defense counsel tells the insured or the insured&rsquo;s attorney: &ldquo;Sign this, and
        we&rsquo;re going to make you a very fair offer.&rdquo; &ldquo;We&rsquo;ve gotten authority
        to move significantly from our previous position.&rdquo; &ldquo;This is just a formality
        &mdash; we&rsquo;re very close to resolving this.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        These representations matter, and they can change the legal calculus in two ways.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Promissory Estoppel
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under California law, promissory estoppel requires: (1) a clear and unambiguous promise; (2)
        reliance by the party to whom the promise was made; (3) the reliance was both reasonable and
        foreseeable; and (4) the party asserting estoppel was injured by the reliance. (<em>See
        Tomerlin v. Canadian Indem. Co.</em> (1964) 61 Cal.2d 638, 649, applying promissory estoppel
        in the insurance context.)
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the insurer makes specific representations about the offer it intends to make &mdash; and
        those representations induce the insured to sign the White waiver &mdash; the insured may
        argue that the insurer should be estopped from enforcing the waiver when the actual offer
        bore no resemblance to what was promised.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Failure of Consideration
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the insurer&rsquo;s implicit promise is &ldquo;sign this waiver and we will negotiate in
        good faith,&rdquo; and the insurer then proceeds to table a patently unreasonable offer with
        no intention of meaningful negotiation, the consideration for the waiver has arguably failed.
        The insured did not sign the waiver in exchange for nothing &mdash; the insured signed it in
        exchange for a genuine settlement effort. When that effort never materializes, the basis for
        the agreement collapses.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Statutory Framework
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Understanding the White waiver requires understanding the statutory provisions it interacts
        with.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Evidence Code Section 1152(a)</strong> establishes the general rule: evidence that a
        person has offered to compromise a claim is inadmissible to prove liability for the loss or
        damage at issue.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Evidence Code Section 1152(b)</strong> carves out the insurance bad faith exception.
        It expressly permits evidence of settlement offers in actions for breach of the covenant of
        good faith and fair dealing or for violations of Insurance Code section 790.03(h) &mdash;
        the Unfair Claims Settlement Practices Act. This is the codification of the principle the
        <em> White</em> court recognized: that settlement conduct is relevant to how the insurer
        handled the claim, distinct from whether the insurer is liable on the underlying policy.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a settlement offer is admitted under the bad faith exception, section 1152(b) also
        provides that &mdash; at the request of either party &mdash; evidence of any other offer or
        counteroffer to compromise the same claim shall also be admissible. This prevents
        cherry-picking: if one offer comes in, all offers come in, giving the jury the complete
        picture.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Evidence Code Sections 1115&ndash;1128</strong> govern mediation confidentiality.
        Section 1119 provides broad protection for communications made &ldquo;for the purpose of, in
        the course of, or pursuant to, a mediation.&rdquo; This is a statutory protection, not a
        contractual one, and it is in some respects more robust than a White waiver.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Insurance Code Section 790.03(h)</strong> defines unfair claims settlement practices,
        including failing to attempt in good faith to effectuate prompt, fair, and equitable
        settlements of claims in which liability has become reasonably clear. This statute provides
        an independent basis for admitting evidence of settlement conduct, regardless of any White
        waiver.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Practical Guidance for Policyholders
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you are presented with a White waiver &mdash; whether you are represented by counsel or
        not &mdash; consider the following:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Do not sign it on the spot.</strong> Take the document home. Review it carefully.
          If you have an attorney, have them review it. If you don&rsquo;t have an attorney, this
          may be the moment to consult one. The insurer&rsquo;s willingness to wait for your review
          is itself informative.
        </li>
        <li>
          <strong>Negotiate the terms.</strong> A White waiver is a contract, and like any contract,
          its terms are negotiable. Consider insisting on: a defined time period (e.g., 30 days or a
          specific settlement conference); a minimum offer threshold; a mutual obligation; a
          carve-out for bad faith.
        </li>
        <li>
          <strong>Document everything around the waiver.</strong> Even if settlement discussions are
          shielded, the circumstances surrounding the waiver&rsquo;s execution are not. Note who
          presented it, when, under what conditions, what was said about it, and whether you were
          given adequate time to review it.
        </li>
        <li>
          <strong>Understand what you&rsquo;re giving up.</strong> The right to introduce settlement
          offers as evidence of bad faith is not a minor procedural right. It can be the difference
          between a case that settles for policy limits and a case that the insurer fights to
          verdict.
        </li>
        <li>
          <strong>Consider who else is in the room.</strong> If your public adjuster, contractor, or
          other professional is present during settlement discussions, they are not bound by a White
          waiver they did not sign. Their observations may remain available as evidence regardless of
          the waiver.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Conclusion
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The White waiver occupies an uncomfortable space in California insurance law. It is a private
        contractual mechanism designed to override a public judicial holding &mdash; a workaround
        that allows insurers to negotiate without the accountability that the California Supreme
        Court said they owe their policyholders.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        That does not mean a White waiver is always inappropriate. There are circumstances where it
        can facilitate genuine, good-faith settlement discussions. But those circumstances require an
        insurer that is actually committed to resolving the claim fairly, and an insured who is
        making an informed, uncoerced decision to participate on those terms.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Too often, the White waiver is used as something else entirely: a tool to extract concessions
        from policyholders who don&rsquo;t fully understand what they&rsquo;re signing, a shield
        that allows the insurer to make offers it knows are inadequate without fear of
        accountability, and a mechanism that converts the appearance of settlement activity into a
        defense against the very bad faith claims that the settlement activity should have prevented.
      </p>
      <p className="text-gray-700 leading-relaxed mb-6">
        Policyholders and their counsel should approach the White waiver with the same scrutiny they
        would apply to any other term the insurer proposes. Read it. Negotiate it. Limit it. And if
        the circumstances don&rsquo;t warrant it, decline it.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Key Cases Cited
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><em>White v. Western Title Insurance Co.</em> (1985) 40 Cal.3d 870, 710 P.2d 309</li>
        <li><em>Fletcher v. Western National Life Ins. Co.</em> (1970) 10 Cal.App.3d 376</li>
        <li><em>Comunale v. Traders &amp; General Ins. Co.</em> (1958) 50 Cal.2d 654</li>
        <li><em>Wimsatt v. Superior Court</em> (2007) 152 Cal.App.4th 137</li>
        <li><em>Cassel v. Superior Court</em> (2011) 51 Cal.4th 113</li>
        <li><em>Odorizzi v. Bloomfield School District</em> (1966) 246 Cal.App.2d 123</li>
        <li><em>Tomerlin v. Canadian Indem. Co.</em> (1964) 61 Cal.2d 638</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Key Statutes
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>California Evidence Code section 1152</li>
        <li>California Evidence Code sections 1115&ndash;1128</li>
        <li>California Civil Code section 1689</li>
        <li>California Insurance Code section 790.03(h)</li>
      </ul>
    </>
  )
}
