import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'The White Waiver: When Your Insurance Company Asks You to Keep Settlement Talks Secret',
  description:
    'What a White waiver is, why insurers ask you to sign one, whether you should, and how to protect yourself — based on the landmark California Supreme Court decision White v. Western Title Insurance Co.',
  summary:
    'Insurers sometimes ask you to sign a White waiver to keep settlement talks secret, which can waive your ability to cite those communications in a bad-faith case. Based on White v. Western Title, weigh carefully whether to sign.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="Important Notice">
        <p>
          This article is provided for general educational purposes only and does not constitute
          legal advice. Insurance policies, regulations, and case law can vary significantly based
          on individual circumstances. Consult a licensed attorney for advice about your specific
          situation.
        </p>
      </CalloutBox>

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

      {/* ── The Case That Started It All ─────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        The Case That Started It All: <em>White v. Western Title Insurance Co.</em>
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The White waiver takes its name from{' '}
        <em>White v. Western Title Insurance Co.</em> (1985) 40 Cal.3d 870, a landmark California
        Supreme Court decision that fundamentally changed how California insurance bad faith
        litigation works.
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
        <strong>First</strong>, the court held that{' '}
        <strong>
          the duty of good faith and fair dealing does not terminate when the insured files a lawsuit
        </strong>
        . Western Title had argued that once litigation began, the parties were adversaries and the
        insurer was free to litigate as aggressively as it chose, with no continuing obligation of
        good faith toward its own insured. The Supreme Court disagreed. The contractual relationship
        between an insurer and its insured, the court said, &ldquo;does not end when litigation
        begins.&rdquo; Creating a bright-line rule that good faith obligations evaporate upon the
        filing of suit, the court warned, would &ldquo;encourage insurers to induce the early filing
        of suits, and to delay serious investigation&rdquo; of claims.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Second</strong>, the court held that{' '}
        <strong>
          settlement offers made during litigation are admissible as evidence of bad faith
        </strong>{' '}
        &mdash; not to prove liability on the underlying claim, but to demonstrate how the insurer
        handled the claim. Evidence Code section 1152 generally bars the admission of settlement
        offers to prove liability for the loss being compromised. But the court distinguished between
        using a settlement offer to prove you owe a debt (which is prohibited) and using it to prove
        that the insurer acted in bad faith in how it handled the claim (which is permitted). The
        court drew on <em>Fletcher v. Western National Life Ins. Co.</em> (1970) 10 Cal.App.3d 376,
        which had established that settlement communications may be introduced &ldquo;as an
        instrumentality of the tort&rdquo; &mdash; not as proof of the underlying obligation, but as
        proof of bad faith conduct.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The facts of <em>White</em> illustrated exactly the kind of insurer behavior this rule was
        designed to expose. Western Title denied coverage for a recorded easement without reasonable
        basis. It offered paltry settlement amounts &mdash; $3,000 and then $5,000 &mdash; without
        ever conducting an appraisal of the plaintiff&rsquo;s loss. Even after the court found in
        the Whites&rsquo; favor on the liability question, the insurer made no serious attempt to
        settle. The &ldquo;entire pattern of conduct,&rdquo; the court found, demonstrated an attempt
        to avoid responsibility for obvious coverage failures.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The dissent &mdash; Justices Lucas and Kaus &mdash; warned that this rule would chill
        insurers&rsquo; willingness to make settlement offers, because any offer could later be
        paraded before a jury as evidence of inadequacy. The majority acknowledged this concern but
        concluded that the duty of good faith was more important than the insurer&rsquo;s desire to
        negotiate in secrecy.
      </p>

      {/* ── What the Insurance Industry Did Next ─────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        What the Insurance Industry Did Next
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurance industry&rsquo;s response to <em>White</em> was swift and predictable. If
        settlement offers could be used as evidence of bad faith, then insurers would simply
        condition settlement talks on the insured&rsquo;s agreement not to use them that way. The{' '}
        <strong>White waiver</strong> was born.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A typical White waiver asks the insured (or the insured&rsquo;s attorney) to agree that:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>All settlement discussions, offers, and counteroffers will remain confidential.</li>
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

      {/* ── Should an Insured Sign a White Waiver? ───────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Should an Insured Sign a White Waiver?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The answer is: it depends &mdash; but the default position should be caution, not compliance.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
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
      <p className="text-gray-700 leading-relaxed mb-4">
        As one attorney has put it, if the insurer shows &ldquo;signs of making a significant move
        up on prior settlement offers,&rdquo; there may be reason to take the leap of faith.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
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
        tools available in a bad faith case. In these situations, as the Barnes &amp; Thornburg
        policyholder practice has noted, &ldquo;mistrust between insurer and policyholder may be at a
        level where this leap of faith is impossible.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        There is also a broader strategic concern. The White waiver effectively allows the insurer to
        make an unreasonably low offer and then walk away from the table, knowing the insured can
        never point to that offer as evidence of bad faith. It can be used as a mechanism to create a
        paper trail that looks like the insurer tried to settle &mdash; &ldquo;We made an
        offer!&rdquo; &mdash; while the substance of that offer is shielded from scrutiny. Defense
        counsel can later argue that the insurer acted reasonably by engaging in settlement
        discussions, while the plaintiff is barred from revealing what those discussions actually
        looked like.
      </p>

      {/* ── Time Limits ──────────────────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
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
        An insured who agrees to a White waiver should insist on a{' '}
        <strong>defined time period</strong>. The waiver should cover a specific settlement
        conference, a specific mediation session, or a specific window of days. When that period
        expires, the insured&rsquo;s rights under <em>White</em> should fully restore. If the
        insurer wants another round of protected discussions, it can request a new waiver &mdash; and
        the insured can decide at that point whether the insurer&rsquo;s conduct warrants continued
        trust.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A White waiver that &ldquo;carries on in perpetuity,&rdquo; as Merlin Law Group&rsquo;s Chip
        Merlin has cautioned, can trap an insured in a cycle of lowball offers with no
        accountability. The insured remains locked in what appears to be a negotiation but is in
        reality a delay tactic, and the waiver prevents the insured from ever telling a jury what the
        insurer was actually willing to put on the table.
      </p>

      {/* ── Can an Insured Revoke a White Waiver? ────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Can an Insured Revoke a White Waiver?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is a more complex question than it might appear, and the answer depends on how the
        waiver is structured and what consideration, if any, supported it.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        The Consideration Problem
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under basic contract law, a waiver is a form of agreement, and agreements generally require
        consideration &mdash; something of value exchanged by both parties. If the insurer&rsquo;s
        only &ldquo;consideration&rdquo; for the White waiver is its willingness to talk about
        settlement, a court could question whether that constitutes adequate consideration. The
        insurer already has a duty of good faith that extends through litigation, as{' '}
        <em>White</em> itself established. Conditioning the performance of an existing duty on the
        insured&rsquo;s surrender of rights raises questions about whether the agreement was truly
        bargained for or was simply extracted under the threat of silence.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        Rescission Under California Civil Code Section 1689
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        California Civil Code section 1689 provides several grounds on which a party may rescind a
        contract:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Duress or undue influence</strong>: If the insured was pressured into signing
          without adequate time to consider the waiver&rsquo;s implications, the agreement may be
          voidable.
        </li>
        <li>
          <strong>Failure of consideration</strong>: If the insurer obtained the waiver by promising
          to engage in good-faith negotiations and then proceeded to make only token or unreasonable
          offers, the consideration underlying the waiver has arguably failed.
        </li>
        <li>
          <strong>Mutual consent</strong>: Both parties can agree to rescind the waiver at any time.
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

      {/* ── Breaking the Confidentiality ─────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Breaking the Confidentiality: When the White Waiver May Not Hold
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The White waiver is not an impenetrable shield. There are several circumstances under which
        the confidentiality it provides can be pierced or circumvented.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
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
      <p className="text-gray-700 leading-relaxed mb-4">
        This creates a practical consideration for both sides. Insurers who want the protection of a
        White waiver should be aware that the presence of non-signatory witnesses can undermine it.
        Insureds and their counsel, conversely, should think carefully about who is in the room when
        settlement discussions occur. If a public adjuster or other professional is present during
        the discussion and does not sign the waiver, that person&rsquo;s observations may remain
        available as evidence.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        Communications Outside the Scope of the Waiver
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A White waiver typically covers &ldquo;settlement discussions&rdquo; or &ldquo;settlement
        communications.&rdquo; But not every communication between an insurer and an insured during a
        dispute qualifies as a settlement discussion. If the insurer makes statements about the
        claim, the coverage, or the investigation that are not framed as settlement offers, those
        statements may fall outside the waiver&rsquo;s protection.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        California law on mediation confidentiality is instructive on the broader point.{' '}
        <em>Wimsatt v. Superior Court</em> (2007) 152 Cal.App.4th 137 broadly protects writings
        and communications &ldquo;prepared for the purpose of, in the course of, or pursuant to
        a mediation&rdquo; under Evidence Code &sect; 1119. Secondary commentary applying
        <em> Wimsatt</em>&rsquo;s reasoning has drawn the line at communications that occur in
        the &ldquo;regular course of litigation&rdquo; outside the mediation process &mdash;
        ordinary Section 998 offers, reservation-of-rights letters, and routine settlement
        discussions that are not themselves part of mediation. Those routine litigation
        communications are generally <em>not</em> shielded by mediation confidentiality. The
        principle translates to White waiver analysis: conversations that happen to occur around
        the time of protected settlement discussions but are not themselves settlement
        communications may not be covered by the waiver.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
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

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
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

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        Discoverable Even If Inadmissible
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        One of the most commonly misunderstood aspects of settlement confidentiality is the
        difference between <strong>inadmissibility</strong> and <strong>privilege</strong>. Evidence
        Code section 1152 makes settlement offers inadmissible at trial to prove liability. But
        inadmissibility is not the same thing as privilege. In{' '}
        <em>Covell v. Superior Court</em> (1984) 159 Cal.App.3d 39, the California Court of Appeal
        held that &ldquo;the statutory protection afforded to offers of settlement does not elevate
        them to the status of privileged material.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This distinction matters enormously. Under Code of Civil Procedure section 2017.010,
        parties may discover any matter that is &ldquo;not privileged&rdquo; and is relevant or
        reasonably calculated to lead to admissible evidence. Because settlement communications are
        not privileged, they may be <strong>discoverable</strong> even when they are not admissible.
        The court in <em>Volkswagen of America, Inc. v. Superior Court</em> (2006) 139 Cal.App.4th
        1481 confirmed this principle, holding that &ldquo;the fact that evidence is not admissible
        does not mean that it is also not discoverable.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The practical implication for White waivers is significant. A White waiver is a contractual
        agreement about admissibility &mdash; the insured agrees not to introduce settlement offers
        as evidence at trial. But the waiver may not bar the insured from <strong>discovering</strong>{' '}
        the communications through formal discovery and using them to develop other evidence or
        inform litigation strategy. The insurer that believes its White waiver has sealed the vault
        may find that the vault has a side door.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        Factual Admissions Embedded in Settlement Discussions
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Even within settlement discussions that are covered by a White waiver, not everything the
        insurer says is necessarily protected. In <em>Truestone, Inc. v. Simi West Industrial
        Park</em> (1984) 163 Cal.App.3d 715, the court held that factual statements made within
        settlement communications may be admissible as <strong>admissions against interest</strong>,
        independent of the compromise offer itself.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Consider the distinction: if an insurer says &ldquo;we&rsquo;ll offer $80,000 to settle
        this claim,&rdquo; that is a settlement offer. But if, in the course of that discussion, the
        adjuster says &ldquo;we know the roof damage exceeds $200,000 but our position is that the
        policy limits our exposure,&rdquo; the factual acknowledgment of the damage amount may be
        extractable from the protected discussion as an admission against interest. The White waiver
        shields settlement posturing; it may not shield factual concessions that the insurer makes
        along the way.
      </p>

      {/* ── The White Waiver in Federal Court ────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        The White Waiver in Federal Court
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The White waiver is a creature of California state law, born from a California Supreme Court
        decision interpreting California&rsquo;s Evidence Code. As Kalfen Law Corp has noted, White
        waivers address only California state law issues and carry <strong>no enforceability in
        federal court proceedings</strong>. In federal court, the admissibility of settlement
        communications is governed by Federal Rule of Evidence 408, which has its own framework and
        exceptions. A White waiver drafted to address California Evidence Code section 1152 may not
        provide the protection the insurer expected if the case ends up in federal court.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This creates a forum-selection dimension to the White waiver analysis. Insurance companies
        that are incorporated outside California &mdash; which is most of them &mdash; can often
        remove cases filed in California state court to federal court based on diversity of
        citizenship under 28 U.S.C. section 1441. If the case is removed to federal court, a
        previously signed White waiver may lose its teeth.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This intersects with another significant development in California insurance law.
        In <em>Bock v. Hansen</em> (2014) 225 Cal.App.4th 215, the California Court of Appeal held
        that insurance adjusters can be <strong>personally sued</strong> for negligent
        misrepresentation when they falsely characterize coverage to a policyholder. The court found
        that &ldquo;an insurance company&rsquo;s agents and employees do have a duty to the
        policyholder and can be held personally liable&rdquo; for independent torts committed during
        claim handling.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The <em>Bock</em> decision has a direct impact on the White waiver&rsquo;s effectiveness.
        When a policyholder names a resident California adjuster as a defendant alongside the
        out-of-state insurer, complete diversity of citizenship is destroyed. The insurer can no
        longer remove the case to federal court. The case stays in California state court &mdash;
        where Evidence Code section 1152 and the <em>White</em> decision govern, where the White
        waiver was designed to operate, and where the policyholder&rsquo;s bad faith rights are most
        clearly established.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Conversely, an insured who has signed a White waiver and later discovers that the adjuster
        made negligent misrepresentations about coverage &mdash; perhaps during the very settlement
        discussions the waiver was meant to protect &mdash; may have grounds to sue the adjuster
        individually under <em>Bock</em>. The adjuster&rsquo;s misrepresentations are independent
        torts, not settlement offers, and may fall outside the scope of the White waiver entirely.
        Insurers and their counsel should recognize that the <em>Bock</em> decision adds a layer of
        complexity to the White waiver calculus that did not exist before 2014.
      </p>

      {/* ── The Last-Minute White Waiver ─────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        The Last-Minute White Waiver: Pressure Without Time to Think
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        One of the more troubling scenarios occurs when the insurer presents the White waiver at the
        last possible moment &mdash; at the start of a mediation session, at a settlement conference,
        or during a phone call where the insured is told that an offer is waiting but cannot be
        disclosed until the waiver is signed. The insured is placed in a position of having to make a
        consequential legal decision on the spot, without the opportunity to consult with counsel or
        to consider the implications.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This kind of pressure implicates the doctrine of <strong>undue influence</strong>, which
        California courts have addressed extensively. In{' '}
        <em>Odorizzi v. Bloomfield School District</em> (1966) 246 Cal.App.2d 123, the California
        Court of Appeal identified several hallmarks of undue influence, including:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
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
      <p className="text-gray-700 leading-relaxed mb-4">
        From the insurer&rsquo;s perspective, this is a risky tactic for a different reason: it looks
        terrible. An insurer that pressures a policyholder into signing a confidentiality agreement
        without adequate time for review is creating exactly the kind of evidence that fuels a bad
        faith case. Even if the waiver holds, the manner in which it was obtained &mdash; the timing,
        the pressure, the refusal to allow counsel review &mdash; may itself become evidence of the
        insurer&rsquo;s overall bad faith in handling the claim.
      </p>

      {/* ── Promises Made Alongside the White Waiver ─────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
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

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        Promissory Estoppel
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under California law, promissory estoppel requires: (1) a clear and unambiguous promise;
        (2) reliance by the party to whom the promise was made; (3) the reliance was both reasonable
        and foreseeable; and (4) the party asserting estoppel was injured by the reliance. (
        <em>See Tomerlin v. Canadian Indem. Co.</em> (1964) 61 Cal.2d 638, 649, applying promissory
        estoppel in the insurance context.)
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the insurer makes specific representations about the offer it intends to make &mdash; and
        those representations induce the insured to sign the White waiver &mdash; the insured may
        argue that the insurer should be estopped from enforcing the waiver when the actual offer
        bore no resemblance to what was promised. The insured relied on the promise, signed the
        waiver in reliance on that promise, and was injured when the promise turned out to be hollow.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
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

      {/* ── The Defense Perspective ──────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        The Defense Perspective
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        It would be incomplete to discuss White waivers without acknowledging the legitimate concerns
        that motivated their creation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        From the insurer&rsquo;s standpoint, the <em>White</em> decision created an asymmetry. An
        insurer that makes a settlement offer takes on risk: if the offer is later characterized as
        &ldquo;lowball,&rdquo; it becomes evidence of bad faith. But an insurer that refuses to
        negotiate at all &mdash; that simply digs in and fights the case to verdict &mdash; faces no
        such exposure, because there are no settlement offers to scrutinize. The perverse incentive,
        the defense bar argues, is for insurers not to negotiate, which harms policyholders who might
        otherwise receive prompt payment.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The White waiver, in this view, is a mechanism that encourages settlement by creating a safe
        space for negotiation. Without it, insurers may be reluctant to make offers at all, for fear
        that any number they put on the table will be used against them if the case doesn&rsquo;t
        resolve.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        There is some merit to this argument. Settlement discussions are generally most productive
        when both sides can speak candidly without fear that their positions will be used against
        them. Evidence Code section 1152 reflects this policy for ordinary litigation. The White
        waiver extends that protection to the specific context where <em>White</em> carved out an
        exception.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Defense counsel would also point out that the White waiver is a voluntary agreement. No one
        is forced to sign it. The insured can decline, and the insurer can decline to negotiate
        without one. The parties are free to reach whatever arrangement suits them, and the waiver is
        simply one term of the negotiation framework.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        There is, however, a less flattering dynamic within the defense bar that Merlin Law
        Group&rsquo;s Chip Merlin has identified. Defense attorneys who bill by the hour can spend
        considerable time drafting and negotiating elaborate White waiver agreements &mdash; while
        failing to advise their insurer clients that a reasonable settlement would be in the
        carrier&rsquo;s best interest. The White waiver process can become a profit center for
        defense counsel rather than a genuine path toward resolution. Some insureds, Merlin has
        observed, call to report that they have received &ldquo;lowball&rdquo; offers for months,
        certain it constitutes bad faith, only to discover that the carrier has been shielded by a
        White waiver the insured signed without fully understanding its implications. This perverse
        incentive &mdash; where the waiver facilitates billing rather than settlement &mdash;
        deserves acknowledgment even within the defense perspective.
      </p>

      {/* ── The Plaintiff Perspective ────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        The Plaintiff Perspective
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Plaintiff-side attorneys see the White waiver differently &mdash; and with good reason.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The whole point of the <em>White</em> decision was to hold insurers accountable for how they
        treat their policyholders during the claims process, including during litigation. The duty of
        good faith doesn&rsquo;t stop at the courthouse door. When an insurer offers $5,000 to
        settle a $500,000 claim, that offer tells the jury something important about how the insurer
        approached its obligations. Allowing insurers to routinely shield that information behind a
        pre-signed waiver effectively nullifies the <em>White</em> holding by private agreement.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Plaintiff attorneys also note that the &ldquo;voluntary&rdquo; nature of the White waiver is
        often illusory. When an insured has been fighting with their insurance company for months or
        years, has mounting legal bills, and is told that the insurer will only discuss settlement if
        a waiver is signed, the power imbalance is significant. The insured needs a resolution. The
        insurer can wait indefinitely. Calling this a voluntary agreement between equals ignores the
        reality of the relationship.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The concern is compounded when the White waiver is used in the pre-litigation context &mdash;
        before the insured has even filed suit. An insured who hasn&rsquo;t yet retained counsel may
        not understand what rights they&rsquo;re surrendering. They may not know what{' '}
        <em>White v. Western Title</em> held, or why the right to introduce settlement offers
        matters. They may sign the waiver thinking it&rsquo;s a routine formality, never realizing
        that they&rsquo;ve given up one of the most important pieces of evidence they could present
        in a bad faith case.
      </p>

      {/* ── The Statutory Framework ──────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
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
        good faith and fair dealing or for violations of Insurance Code section 790.03(h) &mdash; the
        Unfair Claims Settlement Practices Act. This is the codification of the principle the{' '}
        <em>White</em> court recognized: that settlement conduct is relevant to how the insurer
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
        contractual one, and it is in some respects more robust than a White waiver. However, as the
        court noted in <em>Wimsatt v. Superior Court</em> (2007) 152 Cal.App.4th 137, communications
        that occur in &ldquo;the regular course of litigation&rdquo; &mdash; even during the same
        time period as a mediation &mdash; may not qualify for mediation confidentiality. And section
        1123(d) expressly provides that mediation agreements are admissible when used to show
        &ldquo;fraud, duress, or illegality.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        One critical difference between mediation confidentiality and a White waiver: mediation
        confidentiality has <strong>no bad faith exception</strong>. In{' '}
        <em>Foxgate Homeowners&rsquo; Ass&rsquo;n v. Bramalea California, Inc.</em> (2001) 26
        Cal.4th 1, the California Supreme Court held that even bad faith conduct occurring during
        mediation cannot overcome the statutory confidentiality protections. This means that, in some
        respects, an insurer may actually obtain stronger protection through mediation than through a
        White waiver &mdash; which is contractual and subject to challenge on fraud, duress, or
        failure of consideration grounds.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Experienced plaintiff attorneys have developed a strategy to navigate this distinction.
        Evidence Code section 1125 defines mediation as concluded ten days after the last
        communication between the mediator and any party. By delivering written settlement demands{' '}
        <strong>after mediation concludes</strong>, explicitly labeled &ldquo;outside
        mediation,&rdquo; plaintiff counsel can preserve <em>White</em> admissibility for those
        communications while the insurer may have assumed everything would be covered by mediation
        confidentiality. The burden rests on the party asserting confidentiality to prove that a
        given communication falls within the statutory protection.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Insurance Code Section 790.03(h)</strong> defines unfair claims settlement practices,
        including failing to attempt in good faith to effectuate prompt, fair, and equitable
        settlements of claims in which liability has become reasonably clear. This statute provides an
        independent basis for admitting evidence of settlement conduct, regardless of any White
        waiver.
      </p>

      {/* ── Practical Guidance ───────────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Practical Guidance for Policyholders
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you are presented with a White waiver &mdash; whether you are represented by counsel or
        not &mdash; consider the following:
      </p>

      <CalloutBox variant="important" title="1. Do Not Sign It on the Spot">
        <p>
          Take the document home. Review it carefully. If you have an attorney, have them review it.
          If you don&rsquo;t have an attorney, this may be the moment to consult one. The
          insurer&rsquo;s willingness to wait for your review is itself informative: an insurer that
          insists on immediate signature may have reasons for wanting you to sign before you think
          about it.
        </p>
      </CalloutBox>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
        <h3 className="text-lg font-bold text-blue-900 mb-3">2. Negotiate the Terms</h3>
        <p className="text-gray-700 leading-relaxed mb-3">
          A White waiver is a contract, and like any contract, its terms are negotiable. Consider
          insisting on:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            A <strong>defined time period</strong> (e.g., 30 days, or a specific settlement
            conference).
          </li>
          <li>
            A <strong>minimum offer threshold</strong> &mdash; the waiver applies only if the
            insurer&rsquo;s offer meets or exceeds a specified amount.
          </li>
          <li>
            A <strong>mutual obligation</strong> &mdash; if the insurer&rsquo;s conduct is protected,
            so is the insured&rsquo;s.
          </li>
          <li>
            A <strong>carve-out for bad faith</strong> &mdash; the waiver does not apply if the
            insurer&rsquo;s conduct during the covered period constitutes bad faith.
          </li>
        </ul>
      </div>

      <CalloutBox variant="tip" title="3. Document Everything Around the Waiver">
        <p>
          Even if settlement discussions are shielded, the circumstances surrounding the
          waiver&rsquo;s execution are not. Note who presented it, when, under what conditions, what
          was said about it, and whether you were given adequate time to review it.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>4. Understand what you&rsquo;re giving up.</strong> The right to introduce settlement
        offers as evidence of bad faith is not a minor procedural right. It can be the difference
        between a case that settles for policy limits and a case that the insurer fights to verdict.
        Surrendering that right should be a deliberate, informed decision &mdash; not a formality.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>5. Consider who else is in the room.</strong> If your public adjuster, contractor, or
        other professional is present during settlement discussions, they are not bound by a White
        waiver they did not sign. Their observations may remain available as evidence regardless of
        the waiver.
      </p>

      {/* ── Conclusion ───────────────────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
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
      <p className="text-gray-700 leading-relaxed mb-4">
        Policyholders and their counsel should approach the White waiver with the same scrutiny they
        would apply to any other term the insurer proposes. Read it. Negotiate it. Limit it. And if
        the circumstances don&rsquo;t warrant it, decline it.
      </p>

      {/* ── References ───────────────────────────────────────────── */}

      <hr className="my-8 border-gray-300" />

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">Key Cases Cited</h3>
      <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-6 text-sm">
        <li><em>White v. Western Title Insurance Co.</em> (1985) 40 Cal.3d 870, 710 P.2d 309</li>
        <li><em>Fletcher v. Western National Life Ins. Co.</em> (1970) 10 Cal.App.3d 376</li>
        <li><em>Comunale v. Traders &amp; General Ins. Co.</em> (1958) 50 Cal.2d 654</li>
        <li><em>Covell v. Superior Court</em> (1984) 159 Cal.App.3d 39</li>
        <li><em>Truestone, Inc. v. Simi West Industrial Park</em> (1984) 163 Cal.App.3d 715</li>
        <li><em>Volkswagen of America, Inc. v. Superior Court</em> (2006) 139 Cal.App.4th 1481</li>
        <li><em>Wimsatt v. Superior Court</em> (2007) 152 Cal.App.4th 137</li>
        <li><em>Cassel v. Superior Court</em> (2011) 51 Cal.4th 113</li>
        <li><em>Foxgate Homeowners&rsquo; Ass&rsquo;n v. Bramalea California, Inc.</em> (2001) 26 Cal.4th 1</li>
        <li><em>Bock v. Hansen</em> (2014) 225 Cal.App.4th 215</li>
        <li><em>Odorizzi v. Bloomfield School District</em> (1966) 246 Cal.App.2d 123</li>
        <li><em>Tomerlin v. Canadian Indem. Co.</em> (1964) 61 Cal.2d 638</li>
      </ul>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">Key Statutes</h3>
      <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-6 text-sm">
        <li>California Evidence Code section 1152</li>
        <li>California Evidence Code sections 1115&ndash;1128</li>
        <li>California Code of Civil Procedure section 2017.010</li>
        <li>California Civil Code section 1689</li>
        <li>California Insurance Code section 790.03(h)</li>
        <li>Federal Rule of Evidence 408</li>
        <li>28 U.S.C. section 1441 (removal jurisdiction)</li>
      </ul>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">Sources and Further Reading</h3>
      <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-6 text-sm">
        <li>
          Chip Merlin,{' '}
          <a
            href="https://www.propertyinsurancecoveragelaw.com/blog/the-origin-of-white-waiver-in-california/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 underline hover:text-blue-900"
          >
            &ldquo;The Origin of &lsquo;White Waiver&rsquo; in California&rdquo;
          </a>{' '}
          &mdash; Property Insurance Coverage Law Blog (Merlin Law Group)
        </li>
        <li>
          Chip Merlin,{' '}
          <a
            href="https://www.propertyinsurancecoveragelaw.com/2021/04/articles/insurance/should-policyholders-sign-a-white-waiver-agreement/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 underline hover:text-blue-900"
          >
            &ldquo;Should Policyholders Sign a &lsquo;White Waiver&rsquo; Agreement?&rdquo;
          </a>{' '}
          &mdash; Property Insurance Coverage Law Blog (Merlin Law Group)
        </li>
        <li>
          Scott M. Seaman,{' '}
          <a
            href="https://btlaw.com/insights/blogs/policyholder-protection/2016/insurer-asks-for-a-white-waiver-as-a-condition-to-talking-settlement-should-you-do-it"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 underline hover:text-blue-900"
          >
            &ldquo;Insurer Asks for a White Waiver as a Condition to Talking Settlement. Should You
            Do It?&rdquo;
          </a>{' '}
          &mdash; Barnes &amp; Thornburg Policyholder Protection Blog
        </li>
        <li>
          CKB Vienna LLP,{' '}
          <a
            href="https://www.ckbvienna.com/blog/2017/2/13/waivers-in-connection-with-insurance-settlement-offers"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 underline hover:text-blue-900"
          >
            &ldquo;Waivers in Connection with Insurance Settlement Offers&rdquo;
          </a>
        </li>
        <li>
          Kalfen Law Corp,{' '}
          <a
            href="https://kalfenlawcorp.com/white-waiver-insurance-law.asp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 underline hover:text-blue-900"
          >
            &ldquo;White Waiver &mdash; Insurance Law&rdquo;
          </a>
        </li>
        <li>
          <a
            href="https://plaintiffmagazine.com/recent-issues/item/mediation-confidentiality-and-insurance-bad-faith"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 underline hover:text-blue-900"
          >
            &ldquo;Mediation Confidentiality and Insurance Bad Faith&rdquo;
          </a>{' '}
          &mdash; Plaintiff Magazine
        </li>
        <li>
          <a
            href="https://plaintiffmagazine.com/recent-issues/item/suing-insurance-adjusters-in-the-post-case-bock-v-hansen-case-world"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 underline hover:text-blue-900"
          >
            &ldquo;Suing Insurance Adjusters in the Post-Bock v. Hansen World&rdquo;
          </a>{' '}
          &mdash; Plaintiff Magazine
        </li>
        <li>
          <a
            href="https://www.evidenceattrial.com/blog/settlementcommunications"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 underline hover:text-blue-900"
          >
            &ldquo;California Evidence Code Section 1152/1154: Admissible? Discoverable?&rdquo;
          </a>{' '}
          &mdash; Evidence at Trial
        </li>
      </ul>

      <hr className="my-8 border-gray-300" />
      <p className="text-sm text-gray-500 italic">
        This article is for informational purposes only and does not constitute legal advice.
        Insurance law varies by jurisdiction, and the analysis above focuses on California law.
        Consult with a licensed attorney before making decisions about signing or declining a White
        waiver in your specific case.
      </p>
      <p className="text-sm text-gray-500 mt-4 italic">
        Written by Leland Coontz III, Licensed Public Adjuster, CA License #2B53445.
      </p>
    </>
  )
}
