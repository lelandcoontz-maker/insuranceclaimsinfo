import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Can You Record Insurance Company Inspectors? A California Guide',
  description:
    'California is a two-party consent state — but that doesn\'t mean you can\'t record the insurer\'s adjusters, engineers, and hygienists during a property inspection. Learn the law, the case law, and how to do it right.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        When your insurance company sends an adjuster, engineer, or industrial hygienist to inspect
        your property after a loss, you want a record of exactly what they see, what they say, and
        what they do. Insurers routinely send &ldquo;preferred&rdquo; experts whose reports minimize
        damage. Without your own recording, it becomes your word against theirs. The question every
        policyholder asks is: <strong>Can I legally record the inspection?</strong>
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The short answer in California: <strong>yes &mdash; and there are multiple ways to put
        yourself on solid legal ground</strong>. This article explains the governing statutes, the
        relevant case law, the difference between legality and admissibility, and practical
        strategies to ensure your recording is both defensible and useful. We also cover how the
        rules differ across states, because many insurance claims involve out-of-state adjusters
        and carriers.
      </p>

      <CalloutBox variant="legal" title="This Is Not Legal Advice">
        <p>
          Recording laws vary significantly from state to state and are subject to ongoing
          development in the courts. This article is for educational purposes only and should not
          be relied upon as legal advice. The law in this area is not fully settled, particularly
          regarding property inspections (as opposed to EUOs, where California law is clear).
          Consult a qualified attorney in your jurisdiction before recording any conversation if
          you are uncertain about the applicable rules.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        I. Two-Party Consent vs. One-Party Consent States
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Before diving into California&rsquo;s specific rules, it is important to understand the
        national landscape, because insurance claims frequently involve adjusters, engineers, and
        experts from other states.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        One-Party Consent States (The Majority)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        In most states &mdash; and under federal law (18 U.S.C. &sect; 2511) &mdash; only{' '}
        <strong>one party</strong> to a conversation needs to consent to the recording. That one
        party can be you. If you are a participant in the conversation, you may legally record it
        without telling anyone. This is the law in approximately 38 states, including Texas,
        New York, Ohio, Georgia, Colorado, Arizona, and many others.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In a one-party consent state, a homeowner can simply turn on a recording device during an
        insurance inspection without any announcement, signage, or consent from the inspector.
        The recording is legal as long as the homeowner is a party to or present during the
        conversation.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Two-Party (All-Party) Consent States
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A smaller number of states require the consent of <strong>all parties</strong> to a
        conversation before it can be recorded. These include California, Florida, Illinois,
        Maryland, Massachusetts, Montana, New Hampshire, Oregon, Pennsylvania, and Washington,
        among others. In these states, recording without the knowledge and consent of all parties
        can result in civil liability and, in some jurisdictions, criminal penalties.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        California is a two-party consent state &mdash; but as explained below, that does not mean
        you cannot record an insurance inspection. It means you need to understand the legal
        framework and take the right steps.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        II. California&rsquo;s Recording Law: Penal Code &sect; 632
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California&rsquo;s recording law is governed by the California Invasion of Privacy Act
        (CIPA), specifically Penal Code &sect; 632. The statute makes it illegal to intentionally
        record a <strong>&ldquo;confidential communication&rdquo;</strong> without the consent of
        all parties. Violations can result in civil liability of $5,000 per violation or treble
        actual damages (&sect; 637.2), and an illegally obtained recording may be excluded as
        evidence in court (&sect; 632(d)).
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The entire statute turns on one phrase: <strong>&ldquo;confidential
        communication.&rdquo;</strong> Under &sect; 632(c), a communication is confidential only
        if it is &ldquo;carried on in circumstances as may reasonably indicate that any party to
        the communication desires it to be confined to the parties thereto.&rdquo; Critically, a
        communication is <em>not</em> confidential if the parties &ldquo;may reasonably expect
        that the communication may be overheard or recorded.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The California Supreme Court clarified this in <em>Flanagan v. Flanagan</em>, 27 Cal.4th
        766 (2002): the test is <strong>objective</strong>. The question is not whether the speaker
        subjectively wanted privacy, but whether a reasonable person in the speaker&rsquo;s
        position would have expected the conversation to be private under the circumstances.
      </p>

      <CalloutBox variant="legal" title="The Key Insight">
        <p>
          California law does not prohibit all recording &mdash; it prohibits recording{' '}
          <strong>confidential communications</strong>. If the circumstances make it clear that
          the conversation may be recorded, it is not confidential, and &sect; 632 does not apply.
          The policyholder&rsquo;s goal is to create circumstances where no reasonable person
          could claim they expected privacy.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        III. Reasonable Expectation of Privacy: Why Inspectors Have a Weak Claim
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The &ldquo;reasonable expectation of privacy&rdquo; concept is central to recording law.
        A person speaking in a public park has no expectation of privacy. A person in a private
        therapy session has a strong one. Insurance inspections fall somewhere in between &mdash;
        but several factors push strongly in the policyholder&rsquo;s favor:
      </p>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>It is the policyholder&rsquo;s property.</strong> The adjuster, engineer, or
          hygienist is a visitor in someone else&rsquo;s home. The property owner controls the
          conditions of access. An inspector&rsquo;s expectation of privacy in a building they
          do not own, where the owner is present, is inherently limited.
        </li>
        <li>
          <strong>It is a business activity, not a private conversation.</strong> The inspector
          is present in a professional capacity, performing duties on behalf of the insurance
          carrier. Their observations, measurements, and opinions are work product that will be
          reported back to the insurer. These are not personal confidences.
        </li>
        <li>
          <strong>The policyholder or their representative is present.</strong> If you or your
          public adjuster is present during the inspection, the carrier&rsquo;s experts are
          making observations and statements in front of an adversarial party. There is no
          reasonable basis to expect those statements will remain private.
        </li>
        <li>
          <strong>Documentation is foreseeable.</strong> In the modern insurance claims
          environment, it is entirely foreseeable that a policyholder would document an
          inspection. The insurer documents everything &mdash; photographs, measurements, notes.
          The policyholder has every reason to do the same.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Whether these factors alone &mdash; without posted signs or a verbal announcement &mdash;
        are sufficient to defeat a &sect; 632 claim in California is not fully settled by case
        law. The Florida courts (discussed below) have held that they are. California courts have
        not squarely addressed recording of property inspections, though the trend in California
        law favors transparency in the claims process. The prudent approach is to layer multiple
        forms of notice rather than relying on any single factor.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        IV. Building a Layered Defense: Multiple Forms of Notice
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The strongest position is not to rely on any single legal theory. Instead, create multiple,
        overlapping layers of notice so that no reasonable person could claim they did not know
        they were being recorded. Each layer independently supports the legality of the
        recording, and together they create a defense that is extremely difficult to challenge.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Layer 1: Posted Signs &mdash; &ldquo;Audio and Video Recording in Progress&rdquo;
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Post clear, visible signs at every entry point to the property &mdash; the front gate,
        the front door, and any other access point. The sign should state:{' '}
        <strong>&ldquo;Audio and video recording in progress on these premises.&rdquo;</strong>
      </p>

      <CalloutBox variant="warning" title="The Sign Must Say &ldquo;Audio AND Video&rdquo;">
        <p>
          Many commercially available security signs &mdash; including those commonly sold online
          &mdash; mention only &ldquo;video surveillance.&rdquo; A video-only sign may not
          provide adequate notice of <em>audio</em> recording, which is what &sect; 632
          actually regulates. California law does not generally prohibit non-concealed video
          recording in your own home; it is the <em>audio</em> capture of confidential
          communications that triggers &sect; 632. Make sure your sign explicitly says{' '}
          <strong>&ldquo;audio and video.&rdquo;</strong> If you cannot find a commercial sign
          with this language, have one printed. This detail matters.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        A posted sign operates as constructive notice. The question of whether the inspector
        must actually read the sign is not definitively resolved in California case law, but
        the general principle in notice law is that a publicly posted, reasonably visible sign
        puts all entrants on notice of its contents regardless of whether they actually read it.
        This is the same principle that governs &ldquo;No Trespassing&rdquo; signs, parking lot
        disclaimers, and security camera notices. The sign does not need to be read &mdash; it
        needs to be posted where a reasonable person would see it.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Layer 2: Ring Cameras and Visible Security Systems
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Ring doorbells, Nest cameras, and similar visible home security devices are now
        ubiquitous. When an adjuster walks up to a front door with a Ring doorbell, there is a
        strong argument that they are on notice that they are being recorded. These devices are
        widely understood to record both audio and video. The presence of a visible doorbell
        camera, particularly when combined with a posted sign, further diminishes any claim of
        privacy.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Years ago, the argument that a visitor should &ldquo;expect&rdquo; to be recorded at
        someone&rsquo;s front door was novel. Today, with tens of millions of Ring and similar
        devices installed in American homes, the expectation has shifted. A reasonable person
        standing at a door with a visible camera lens should know they are being recorded.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Layer 3: Verbal Announcement on Camera
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the most important layer. When you greet the inspector at the door, turn on your
        smartphone video recording and say clearly:
      </p>
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 my-6">
        <p className="text-gray-700 text-sm italic leading-relaxed">
          &ldquo;Just so you know, I&rsquo;m going to be audio and video recording this entire
          inspection for my records. If you have any objection, please let me know now.&rdquo;
        </p>
      </div>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the inspector says nothing and proceeds with the inspection, that silence in the face
        of a clear announcement is strong evidence of implied consent. If they affirmatively say
        &ldquo;that&rsquo;s fine&rdquo; or &ldquo;no problem,&rdquo; you have express consent
        on video.
      </p>

      <CalloutBox variant="important" title="Do Not Narrow the Scope">
        <p>
          This is a critical point. Do not say &ldquo;I want to video the recessed lights in the
          ceiling&rdquo; or &ldquo;I&rsquo;m going to record for a minute to capture the water
          stains.&rdquo; If you narrow the stated scope, the inspector may later argue that
          consent was limited to that specific subject or duration. You need to state that you
          are recording <strong>the entire inspection &mdash; audio and video</strong>. Keep the
          recording running continuously from that point forward.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Layer 4: Getting Express Consent on Camera
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The gold standard is capturing the inspector&rsquo;s affirmative agreement on the
        recording itself. If the inspector responds &ldquo;sure, no problem&rdquo; to your
        announcement, you have express consent documented on video. This eliminates virtually
        all legal risk.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In practice, many adjusters will agree without hesitation. People in 2026 are
        accustomed to being recorded. The ones who resist are often carrier-hired engineers and
        experts who have been trained to avoid creating evidence that might contradict their
        written reports &mdash; which, frankly, is exactly why you want the recording.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        The Layered Defense in Action
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Consider this scenario: an adjuster walks up to a home where a sign on the fence reads
        &ldquo;Audio and video recording in progress.&rdquo; They approach the front door and can
        see a Ring doorbell camera. The homeowner opens the door and says, &ldquo;I&rsquo;m going
        to audio and video record this inspection &mdash; is that okay?&rdquo; The adjuster
        nods and proceeds.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        That homeowner now has <strong>four independent bases</strong> for the legality of the
        recording: (1) the posted sign providing constructive notice, (2) the Ring camera
        providing additional notice, (3) the verbal announcement eliminating any claim of
        ignorance, and (4) the affirmative consent. Any one of these might be sufficient. All
        four together make the recording essentially bulletproof.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        V. Implied Consent: When the Inspector Doesn&rsquo;t Object
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California courts have recognized that consent under &sect; 632 can be{' '}
        <strong>implied by conduct</strong>. If a person is aware that they are being recorded
        and continues the conversation without objection, their continued participation may
        constitute implied consent. This principle is supported by <em>People v.
        Amsbaugh</em>, 246 Cal.App.2d 742 (1966), and is consistent with the objective test
        established in <em>Flanagan</em>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Applied to insurance inspections: if you are openly holding a smartphone in an obviously
        recording position &mdash; screen facing you, camera lens pointing at the inspector &mdash;
        and the inspector continues speaking and inspecting without objection, there is a strong
        argument that they have impliedly consented. The argument is even stronger if you made a
        verbal announcement and they said nothing.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        However, implied consent has limits. Relying on a phone in your hand alone is riskier
        than an explicit announcement, because people handle phones constantly without recording.
        The inspector might argue they assumed you were texting, checking email, or taking photos
        rather than recording audio. This is why the verbal announcement matters &mdash; it
        removes any ambiguity about what the phone is doing.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        VI. Legality of Recording vs. Admissibility in Court
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        These are two separate questions, and they are frequently confused.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Legality
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A recording is <strong>legal</strong> if it does not violate &sect; 632 or its equivalent
        in your state. If you properly announced the recording, posted signs, and obtained consent
        (express or implied), the act of making the recording is lawful. You will not face civil
        or criminal penalties for making it.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Admissibility
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Admissibility</strong> is whether a court will allow the recording to be used as
        evidence. Under Penal Code &sect; 632(d), a recording obtained in violation of &sect; 632
        &ldquo;is not admissible in evidence in any judicial, administrative, legislative, or
        other proceeding.&rdquo; This means an illegally obtained recording is excluded &mdash;
        you cannot use it in court or in a CDI complaint.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        However, even a recording that is technically legal may face admissibility challenges on
        other grounds &mdash; authentication, relevance, hearsay objections, or foundation. The
        takeaway: making the recording legal is the first step, but admissibility requires
        additional care in how the recording is preserved, authenticated, and presented.
      </p>

      <CalloutBox variant="tip" title="Even If You Can&rsquo;t Use It in Court, It&rsquo;s Still Valuable">
        <p>
          A recording does not need to be admissible in court to be useful. A recording of an
          inspection can be used to refresh your own memory, to identify damage the adjuster
          missed, to prepare a rebuttal to the carrier&rsquo;s report, and to support a
          supplemental claim. It can also be shared with your public adjuster or attorney to
          inform their strategy, even if it is never introduced as a formal exhibit.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        VII. The Alternative: Contemporaneous Notes
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you are unable to record &mdash; because the inspector objects, because you are
        uncertain about the law, or for any other reason &mdash; there is a powerful alternative:
        <strong> contemporaneous notes</strong>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Contemporaneous notes are written records made at or near the time an event occurred.
        Courts have long recognized contemporaneous notes as reliable evidence under the
        &ldquo;present recollection recorded&rdquo; and &ldquo;past recollection recorded&rdquo;
        doctrines (California Evidence Code &sect;&sect; 768, 1237). Notes taken during or
        immediately after a conversation, while memory is fresh, carry significantly more weight
        than recollections offered weeks or months later.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        How to Create Effective Contemporaneous Notes
      </h3>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Take notes during the inspection if possible.</strong> Use a notebook or your
          phone&rsquo;s notes app. Write down what the inspector says, what they examine, what
          they skip, and any opinions they express. Include direct quotes where possible.
        </li>
        <li>
          <strong>Immediately after the inspection, write a detailed summary.</strong> As soon as
          the inspector leaves, sit down and write everything you remember &mdash; who was
          present, what was said, what was examined, what was not examined, any admissions or
          opinions expressed, and the time the inspection started and ended.
        </li>
        <li>
          <strong>Create a timestamp.</strong> Email your notes to yourself, to your public
          adjuster, or to your attorney immediately. The email timestamp creates an independent
          record proving the notes were created contemporaneously with the inspection. This is
          critical for admissibility &mdash; the timestamp proves the notes were not fabricated
          after the fact.
        </li>
        <li>
          <strong>Be specific and factual.</strong> Record exact words where you can. &ldquo;The
          adjuster said &lsquo;I don&rsquo;t see any smoke damage in this room&rsquo;&rdquo; is
          more valuable than &ldquo;the adjuster minimized the smoke damage.&rdquo;
        </li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        Contemporaneous notes and recordings are not mutually exclusive. The best practice is to
        do both: record the inspection (with proper notice) <em>and</em> take notes or write a
        summary immediately afterward. If the recording is later challenged on admissibility
        grounds, the timestamped notes serve as an independent record of the same events.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        VIII. California Case Law
      </h2>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        <em>Myasnyankin v. Nationwide</em> (2024) &mdash; EUO Recording Rights
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The most important recent California authority is <em>Myasnyankin v. Nationwide Mutual
        Insurance Co.</em>, 99 Cal.App.5th 283 (2024). In this case, the insurer demanded an{' '}
        <Link href="/resources/examination-under-oath" className="text-blue-700 underline hover:text-blue-900">
          Examination Under Oath (EUO)
        </Link>{' '}
        and then objected when the insured sought to video record the proceedings, including the
        insurer&rsquo;s representatives.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Court of Appeal held that under Insurance Code &sect; 2071.1(a)(4), the insured has
        the right to record the &ldquo;examination proceedings in their entirety&rdquo; &mdash;
        including the insurer&rsquo;s representatives, not just the insured&rsquo;s own testimony.
        The court analogized EUOs to depositions under Code of Civil Procedure &sect; 2025.330(c).
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <em>Myasnyankin</em> directly governs EUOs, not property inspections. The opinion
        explicitly noted that the interplay between &sect; 632 and non-EUO claim activities
        remains an open question. However, the decision is significant because it establishes
        that California courts accept insured-side recording of carrier representatives in the
        claims process and view transparency as serving the policyholder&rsquo;s legitimate
        interests.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Florida Inspection Cases &mdash; Persuasive Authority
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Florida, like California, is a two-party consent state (Fla. Stat. &sect; 934.03).
        Florida appellate courts have directly addressed recording of insurance inspections in
        the policyholder&rsquo;s home and have consistently ruled in favor of the policyholder:
      </p>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong><em>State Farm v. Chirino</em> (Fla. 3d DCA, 2020):</strong> The court held
          that an insurer&rsquo;s appraiser has no legitimate expectation of privacy when
          conducting an inspection inside the insured&rsquo;s home. The court rejected the
          insurer&rsquo;s argument that the policy&rsquo;s cooperation clause prohibited
          recording.
        </li>
        <li>
          <strong><em>Silversmith v. State Farm</em> (Fla. 4th DCA, 2021):</strong> The court
          affirmed the right to record the insurer&rsquo;s inspector, holding that silence in
          the policy regarding recording should be construed against the insurer.
        </li>
        <li>
          <strong><em>Gesten v. American Strategic Ins. Corp.</em> (Fla. 4th DCA, 2022):</strong>{' '}
          The court again upheld recording rights, finding no policy prohibition and no privacy
          expectation for the carrier&rsquo;s representatives inside the insured&rsquo;s home.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        While Florida cases are not binding in California, they are persuasive because Florida
        operates under a substantially similar two-party consent framework. Three appellate
        decisions from two different districts, all reaching the same conclusion, represent a
        strong consensus that insurance inspectors lack a reasonable expectation of privacy in
        the policyholder&rsquo;s home.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        IX. When the Inspector Refuses to Be Recorded
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This happens. Carrier-hired engineers, in particular, sometimes refuse to proceed if
        they are being recorded. Some will announce that they do not consent to being recorded
        and will threaten to leave or cancel the inspection.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This creates a conflict. The policy requires you to cooperate with the insurer&rsquo;s
        investigation, which typically includes making the property available for inspection.
        At the same time, you have legitimate rights to document what happens on your property.
        Here is how to handle it:
      </p>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Do not escalate.</strong> If the inspector insists on no audio recording,
          offer to switch to video-only (which is generally permissible in your own home under
          California law). Video without audio still captures what the inspector looked at,
          how long they spent in each room, and what they may have skipped.
        </li>
        <li>
          <strong>Document the refusal.</strong> If the inspector refuses to proceed unless
          all recording stops, note the refusal in writing immediately. Email the carrier:
          &ldquo;Your inspector refused to perform the inspection unless we stopped
          recording. We are documenting this refusal. Please send another inspector who will
          allow reasonable documentation.&rdquo;
        </li>
        <li>
          <strong>Take detailed contemporaneous notes.</strong> If you cannot record, shift to
          the contemporaneous notes strategy described above. Write down everything as it
          happens. Email the notes to yourself and your representative immediately after.
        </li>
        <li>
          <strong>Consider the implications.</strong> An inspector who refuses to be recorded
          is an inspector who does not want a record of what they say and do. That itself is
          worth noting. An insurer whose expert refuses documentation may be on weaker ground
          if the expert&rsquo;s report is later challenged as biased or incomplete.
        </li>
      </ul>

      <CalloutBox variant="tip" title="The Cooperation Clause Does Not Prohibit Recording">
        <p>
          Every court that has considered whether the policy cooperation clause prohibits
          recording has rejected that argument. In <em>Chirino</em>, the Florida court
          expressly held that the cooperation clause does not prevent the insured from recording
          the inspection. If an insurer threatens to deny your claim because you recorded their
          inspector, that threat may itself constitute{' '}
          <Link href="/resources/bad-faith" className="text-sky-700 underline hover:text-sky-900">
            bad faith
          </Link>. Document the threat.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        X. EUOs: Your Right to Record Is Settled Law
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your insurer demands an{' '}
        <Link href="/resources/examination-under-oath" className="text-blue-700 underline hover:text-blue-900">
          Examination Under Oath
        </Link>, your right to record the entire proceeding &mdash; including the insurer&rsquo;s
        representatives &mdash; is established by <em>Myasnyankin v. Nationwide</em> (2024) and
        Insurance Code &sect; 2071.1(a)(4). Unlike property inspections, this is not a gray area.
        If the insurer objects to recording your EUO, cite both authorities. This is settled
        California law.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        XI. Why Recording Matters for Your Claim
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The practical value of recording an inspection cannot be overstated:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Accountability.</strong> When the carrier&rsquo;s engineer writes a report
          saying they found &ldquo;no evidence of impact damage,&rdquo; your recording may show
          them standing in front of cracked drywall and saying nothing about it.
        </li>
        <li>
          <strong>Impeachment.</strong> If the insurer&rsquo;s expert later testifies
          inconsistently with what they said during the inspection, the recording is powerful
          impeachment evidence.
        </li>
        <li>
          <strong>Completeness.</strong> Adjusters often rush through inspections, missing rooms,
          missing damage, and spending as little time as possible. A recording documents exactly
          what was and was not inspected.
        </li>
        <li>
          <strong>Bad faith evidence.</strong> If the carrier&rsquo;s expert makes admissions
          during the inspection that are omitted from their report, the recording is evidence
          that the insurer&rsquo;s investigation was not thorough and fair &mdash; a potential{' '}
          <Link href="/resources/bad-faith" className="text-blue-700 underline hover:text-blue-900">
            bad faith
          </Link>{' '}
          violation under California law.
        </li>
        <li>
          <strong>Claim support.</strong> Even if the recording is never introduced in court, it
          helps your public adjuster or attorney understand exactly what happened during the
          inspection and prepare a more effective challenge to the carrier&rsquo;s position.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        XII. Summary: A Practical Checklist
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Before the insurer&rsquo;s inspector arrives:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Post signs at every entry point: <strong>&ldquo;Audio and video recording in
          progress.&rdquo;</strong> Make sure the sign says <em>audio</em>, not just video.
        </li>
        <li>
          Ensure Ring cameras or other visible security devices are active.
        </li>
        <li>
          When the inspector arrives, start your smartphone recording and make a clear verbal
          announcement: <strong>&ldquo;I&rsquo;m going to audio and video record this entire
          inspection. Do you have any objection?&rdquo;</strong>
        </li>
        <li>
          Capture their response on video. If they say &ldquo;that&rsquo;s fine,&rdquo; you
          have express consent on the record.
        </li>
        <li>
          Keep the device visible and running throughout the entire inspection. Do not stop and
          restart.
        </li>
        <li>
          After the inspection, email a summary to the carrier and inspection firm confirming
          that the inspection was recorded, the device was visible throughout, and no objections
          were raised.
        </li>
        <li>
          Even with a recording, take contemporaneous notes and email them to yourself or your
          representative immediately for a timestamped backup.
        </li>
      </ol>

      <CalloutBox variant="legal" title="Consult an Attorney">
        <p>
          Recording laws vary by state and are subject to evolving case law. The information in
          this article reflects general legal principles and publicly available case law as of
          the date of publication. It is not legal advice and should not be relied upon as a
          substitute for consultation with a qualified attorney. If you are uncertain about the
          recording laws in your state, or if you face a specific situation involving a recording
          dispute, consult an attorney experienced in privacy law or insurance coverage law.
        </p>
      </CalloutBox>
    </>
  )
}
