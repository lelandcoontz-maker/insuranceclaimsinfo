import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Duties After Loss: What Your Policy Requires You to Do',
  description:
    'Guide to policyholder obligations after an insurance claim — mitigation, notice, proof of loss, examination under oath, cooperation, and how California law limits the insurer\'s ability to deny claims for non-compliance.',
  summary:
    'Your policy requires you to mitigate damage, give prompt notice, submit a proof of loss, sit for an examination under oath if asked, and cooperate. California law limits an insurer\'s ability to deny for technical non-compliance unless it was actually prejudiced.',
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

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Your Policy Is a Two-Way Contract
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When you file an insurance claim, your policy does not just require the insurance company to
        pay for covered losses &mdash; it also requires <strong>you</strong> to fulfill certain duties.
        These obligations are typically found in a section of the policy labeled &ldquo;Duties After
        Loss,&rdquo; &ldquo;Conditions,&rdquo; or &ldquo;What You Must Do After a Loss.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Understanding these duties matters for two reasons. First, reasonable compliance moves your
        claim forward. Second, understanding what is <em>actually required</em> versus what insurers
        sometimes <em>demand</em> protects you from being bullied into doing more than the policy or
        law requires.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        California&apos;s standard fire policy form (Insurance Code &sect; 2071) sets the baseline duties
        for residential property claims, and most homeowners and commercial property policies incorporate
        these same requirements. The duties described below apply broadly across property insurance, though
        your specific policy language controls.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Key Duties Explained
      </h2>

      {/* ── DUTY TO MITIGATE ── */}
      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        1. Duty to Protect Property From Further Damage (Mitigation)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your most immediate obligation after a loss is to take <strong>reasonable steps</strong> to
        protect the property from further damage. This is often called the &ldquo;duty to mitigate&rdquo;
        or &ldquo;sue and labor&rdquo; obligation &mdash; a term that originates in marine insurance but
        applies equally to property policies.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The key word is <strong>reasonable</strong>. You are not expected to risk your safety, spend
        extravagantly, or make permanent repairs. You are expected to take the kind of temporary,
        protective measures a prudent property owner would take under the same circumstances. Examples:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Tarping a damaged roof</strong> to prevent rain from causing additional interior water
          damage
        </li>
        <li>
          <strong>Shutting off the water supply</strong> when a pipe has burst, or calling a plumber for
          emergency repair
        </li>
        <li>
          <strong>Boarding up broken windows and doors</strong> to secure the property against weather
          and unauthorized entry
        </li>
        <li>
          <strong>Extracting standing water</strong> to prevent further saturation, mold growth, and
          structural deterioration
        </li>
        <li>
          <strong>Separating damaged inventory from undamaged stock</strong> to prevent cross-contamination
          (smoke, water, debris)
        </li>
        <li>
          <strong>Turning off HVAC systems</strong> when ductwork is contaminated with smoke or asbestos
          to prevent further distribution
        </li>
      </ul>

      <CalloutBox variant="tip" title="Mitigation Expenses Are Reimbursable">
        <p>
          Reasonable expenses you incur to protect the property from further damage are reimbursable
          under your policy &mdash; typically under a &ldquo;preservation of property&rdquo; or
          &ldquo;reasonable repairs&rdquo; provision. Keep all receipts, take before-and-after photos,
          and document what you did and why. These costs are payable <em>in addition to</em> your
          policy limits, not subtracted from them. See our article on{' '}
          <Link href="/resources/sue-and-labor-clause" className="text-blue-700 underline hover:text-blue-900">
            the sue and labor clause
          </Link>{' '}
          for a deeper explanation of how this coverage works.
        </p>
      </CalloutBox>

      <h4 className="text-base font-bold text-[#1F3964] mb-2 mt-6">
        What &ldquo;Reasonable&rdquo; Actually Means
      </h4>
      <p className="text-gray-700 leading-relaxed mb-4">
        Reasonableness is judged by what a prudent person in your situation would do with the
        information available at the time &mdash; not with the benefit of hindsight. A 70-year-old
        homeowner is not expected to climb onto a damaged roof in a windstorm. A business owner
        who pays overtime rates for emergency board-up at 2:00 AM is acting reasonably even though
        a cheaper option might exist during business hours.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Conversely, doing <em>nothing</em> when a simple protective step is available can be held
        against you. If you leave a tarp sitting in your garage while rain pours through a hole in
        the roof for three weeks, the insurer may legitimately argue that the additional water damage
        is not covered because you failed to mitigate. The initial loss is still covered &mdash; but
        the <em>avoidable additional damage</em> may not be.
      </p>

      {/* ── DUTY TO REPORT ── */}
      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        2. Duty to Give Prompt Notice
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your policy requires you to notify the insurance company of a loss &ldquo;as soon as
        practicable&rdquo; or &ldquo;promptly.&rdquo; This does not mean you must call within minutes
        of discovering damage, but you should not wait weeks or months without good reason.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        What constitutes prompt notice depends on the circumstances. After a catastrophic event (wildfire,
        earthquake, hurricane), insurers understand that communication infrastructure may be down and that
        policyholders are dealing with immediate survival concerns. A few days or even a week of delay in
        a disaster scenario is rarely problematic. Outside of catastrophe, reporting within a few days of
        discovering the damage is the safest practice.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        California Insurance Code &sect; 2071 requires notice &ldquo;without unnecessary delay.&rdquo;
        Under California law, late notice alone cannot defeat a claim &mdash; the insurer must prove that
        the delay actually <strong>prejudiced</strong> their ability to investigate or adjust the loss.
        A report filed two weeks late for a fire loss where the scene is still intact causes no prejudice.
        A report filed six months late for a water loss where the property has been fully repaired and no
        documentation exists may.
      </p>

      <h4 className="text-base font-bold text-[#1F3964] mb-2 mt-6">
        How to Give Notice
      </h4>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Call the carrier&apos;s claims reporting line (the number on your declarations page)
        </li>
        <li>
          Follow up with a written confirmation by email &mdash; this creates a date-stamped record
        </li>
        <li>
          Note the claim number, the name of the person you spoke with, and the date and time
        </li>
        <li>
          If your broker or agent reports on your behalf, confirm that the report was actually transmitted
          to the carrier &mdash; agents sometimes fail to forward claims promptly
        </li>
      </ul>

      {/* ── DUTY TO EXHIBIT ── */}
      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        3. Duty to Exhibit Damages (Allow Inspection)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        You must allow the insurance company to inspect the damaged property. Under &sect; 2071, the
        insured must &ldquo;exhibit to any person designated by this company all that remains of any
        property herein described.&rdquo; In practice, this means granting their adjuster, engineer,
        or contractor reasonable access to the damaged areas.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Reasonable</strong> means during normal hours, with advance notice, and at times that
        do not unreasonably disrupt your life or business. You are not required to grant unlimited
        access at any hour. You are not required to leave the insurer&apos;s adjuster unsupervised in
        your home. You are entitled to have your own representative present during inspections &mdash;
        including a{' '}
        <Link href="/resources/public-adjuster" className="text-blue-700 underline hover:text-blue-900">
          Public Adjuster
        </Link>{' '}
        or contractor.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the insurer requests multiple inspections, you must generally cooperate, but repeated
        inspections that serve no new investigative purpose &mdash; particularly after the insurer has
        already inspected and documented the damage &mdash; may be unreasonable. If you believe
        inspection requests are being used as a delay tactic, document each request, comply, and raise
        the issue in writing.
      </p>

      {/* ── DUTY TO PROVIDE DOCUMENTATION ── */}
      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        4. Duty to Provide Documentation and Records
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your policy requires you to produce records that support your claim. This can include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Receipts, invoices, and purchase records for damaged personal property</li>
        <li>Photographs of the property and contents taken before the loss</li>
        <li>Financial records (tax returns, profit-and-loss statements) for business interruption claims</li>
        <li>Contractor estimates and invoices for emergency repairs</li>
        <li>Inventories of damaged or destroyed items with descriptions, quantities, and estimated values</li>
        <li>Maintenance records (for claims where the insurer questions the condition of the property)</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The duty to provide documentation does not require you to produce records that do not exist or
        that were destroyed in the loss. If your receipts burned in the fire, you cannot produce them.
        If you never took photos of your belongings, you cannot manufacture them. What is required is a
        good-faith effort to provide what you can. Alternative documentation &mdash; credit card statements,
        online purchase histories, warranty registrations, insurance photos from a prior claim &mdash; can
        substitute for original receipts.
      </p>

      {/* ── DUTY TO REPORT CRIME ── */}
      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        5. Duty to Report to Law Enforcement
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many policies include a duty to file a police report when the loss involves theft, vandalism,
        arson, or any other criminal act. Even when the policy does not explicitly require it, filing a
        police report for any loss involving criminal activity is strongly advisable. The insurer will
        expect to see a report number, and its absence will raise questions.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        File promptly. Some jurisdictions have reporting deadlines for certain crimes. Beyond the policy
        requirement, a police report creates an official contemporaneous record of the event &mdash;
        a timestamp, a narrative, and often a responding officer who can verify the scene. This is
        particularly important for theft claims, where the insurer&apos;s default posture is skepticism.
      </p>

      {/* ── PROOF OF LOSS ── */}
      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        6. Duty to Submit a Proof of Loss
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A proof of loss is a formal, sworn statement that documents the facts of the loss, the property
        damaged or destroyed, and the amount claimed. Under &sect; 2071, the insurer has the right to
        require a signed, sworn proof of loss within 60 days after the insurer&apos;s request.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        There are two distinct scenarios:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Insurer-requested proof of loss:</strong> The insurance company formally demands a
          signed, sworn proof of loss. When this happens, you should comply &mdash; it is a legitimate
          contractual request.
        </li>
        <li>
          <strong>Voluntary (strategic) proof of loss:</strong> An insured may submit a sworn proof
          of loss on their own initiative to trigger a coverage decision. This can be a useful tool
          for moving a stalled claim toward an accept-or-deny decision within the timeframes under
          California&rsquo;s Fair Claims regulations. Note that submitting a voluntary proof of loss
          before the insurer requests one starts the carrier&rsquo;s decision clock; an insured
          whose claim is still being developed should weigh the benefit of forcing a decision
          against the risk of a premature denial. See our article on{' '}
          <Link href="/resources/strategic-proof-of-loss" className="text-blue-700 underline hover:text-blue-900">
            the strategic proof of loss
          </Link>{' '}
          for how this works as a claims tactic.
        </li>
      </ul>

      <CalloutBox variant="warning" title="The Proof of Loss Is a Sworn Document">
        <p>
          Because a proof of loss is signed under oath, the information you provide carries legal weight.
          Inaccuracies &mdash; even innocent ones &mdash; can be used against you later. Be accurate and
          thorough. Do not guess at dollar amounts. If your claim is still being evaluated or you do not
          yet have final numbers, state that explicitly. If you are unsure how to complete the form, get
          help from a{' '}
          <Link href="/resources/public-adjuster" className="text-blue-700 underline hover:text-blue-900">
            Public Adjuster
          </Link>{' '}
          or attorney before signing.
        </p>
      </CalloutBox>

      <h4 className="text-base font-bold text-[#1F3964] mb-2 mt-6">
        California&apos;s Treatment of the Proof of Loss
      </h4>
      <p className="text-gray-700 leading-relaxed mb-4">
        California law treats the proof of loss as a procedural requirement, not a condition precedent to
        recovery. California courts have consistently held that failure to submit a proof of loss does not
        bar a claim unless the insurer can demonstrate <strong>actual prejudice</strong> from the failure.
        The rationale: the proof of loss is meant to give the insurer information about the claim, and if
        the insurer already has that information through its own investigation, the absence of the formal
        document causes no harm.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>However</strong> &mdash; just because California law does not strictly require it does not
        mean you should ignore the request. Refusing to submit a proof of loss creates unnecessary friction,
        can delay payment, and gives the insurer a procedural argument to hide behind. The practical
        reality is that submitting a properly completed proof of loss advances your claim, demonstrates
        good faith, and eliminates one excuse the insurer might use to stall.
      </p>

      {/* ── EUO ── */}
      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        7. Duty to Submit to Examination Under Oath (EUO)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under &sect; 2071, the insurer has the right to require you to submit to an examination under oath
        (EUO) &mdash; essentially a recorded, sworn interview conducted by the insurer&apos;s attorney.
        The EUO is more formal than a recorded statement but less formal than a deposition. It is not
        cross-examination in a courtroom, but it is transcribed and your answers are given under oath.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        EUOs are most commonly demanded when the insurer suspects fraud or material misrepresentation, but
        they can also be requested in large or complex claims as part of the investigation. You are
        generally required to comply. Refusal to submit to a properly requested EUO can constitute a
        breach of your policy duties.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Important:</strong> You have the right to have your own attorney present at the EUO. For
        any claim of significant value, or any EUO where fraud is even remotely suspected, having legal
        representation is essential. See our detailed article on{' '}
        <Link href="/resources/examination-under-oath" className="text-blue-700 underline hover:text-blue-900">
          examinations under oath
        </Link>{' '}
        for what to expect, how to prepare, and your rights during the process.
      </p>

      {/* ── DUTY TO COOPERATE ── */}
      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        8. Duty to Cooperate With the Investigation
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your policy contains a general cooperation clause requiring you to assist the insurer in
        investigating your claim. This is broader than any single duty &mdash; it encompasses answering
        questions, providing requested documents, making yourself available for inspections, and generally
        participating in the process in good faith.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Cooperation does <strong>not</strong> mean:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Agreeing with the insurer&apos;s valuation or coverage determination</li>
        <li>Accepting a payment you believe is inadequate</li>
        <li>Waiving your right to dispute the insurer&apos;s position</li>
        <li>Providing documents unrelated to the claim (fishing expeditions)</li>
        <li>Making yourself available on unreasonable timelines or at unreasonable hours</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Cooperation means participating in the legitimate claims process. You can cooperate fully while
        simultaneously disputing the insurer&apos;s conclusions, demanding appraisal, or retaining a
        Public Adjuster or attorney to represent your interests.
      </p>

      {/* ── THE INSURER'S DUTIES ── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Insurer Has Duties Too
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The duties-after-loss section of your policy creates obligations that run in one direction &mdash;
        from you to the insurer. But California law creates reciprocal obligations that run in the other
        direction. Under the Fair Claims Settlement Practices Regulations (10 CCR &sect;&sect; 2695.1
        et seq.), the insurance company must:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Acknowledge your claim within 15 days</li>
        <li>Begin investigation within 15 days of receiving your proof of claim</li>
        <li>Accept or deny coverage within 40 days of receiving your proof of claim</li>
        <li>Provide a written explanation if they need more time</li>
        <li>Pay undisputed amounts promptly, even if other portions remain in dispute</li>
        <li>Not condition payment on a release of other claims</li>
        <li>Not require unnecessary documentation that duplicates what they already have</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        When the insurer violates these duties &mdash; by ignoring your claim, delaying investigation,
        or demanding documents as a stall tactic &mdash; they may be in violation of the{' '}
        <Link href="/resources/california-fair-claims" className="text-blue-700 underline hover:text-blue-900">
          California Fair Claims Settlement Practices Act
        </Link>. Understanding the insurer&apos;s obligations helps you recognize when demands made of you
        are legitimate versus when they are being used as delay tactics.
      </p>

      {/* ── PREJUDICE REQUIREMENT ── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        California&apos;s Prejudice Requirement: Non-Compliance Is Not Automatic Denial
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the most important legal protection for California policyholders regarding duties after
        loss. In California, the insurance company generally <strong>cannot</strong> deny your claim based
        solely on your failure to comply with a policy duty unless they can demonstrate that your
        non-compliance actually caused <strong>material prejudice</strong> to the insurer.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Prejudice means the insurer suffered an actual, demonstrable disadvantage &mdash; not a theoretical
        one. Examples:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Prejudice found:</strong> Policyholder waited 8 months to report a water loss, then
          demolished the affected area before the insurer could inspect. The insurer could not determine
          whether the damage was from a covered sudden event or excluded long-term seepage.
        </li>
        <li>
          <strong>No prejudice:</strong> Policyholder filed proof of loss 75 days after the request
          (15 days late), but the insurer had already inspected, received contractor estimates, and had
          all material information. The late filing caused no disadvantage.
        </li>
        <li>
          <strong>No prejudice:</strong> Policyholder refused an EUO demand that was made after the
          insurer had already completed its investigation and made a coverage determination. The EUO
          would not have provided new information.
        </li>
      </ul>

      <CalloutBox variant="legal" title="The Burden Is on the Insurer">
        <p>
          In California, the burden of proving prejudice rests on the <strong>insurer</strong>, not
          the policyholder. The insurance company must demonstrate that your non-compliance actually
          caused them a material disadvantage. If they cannot make that showing, they cannot use your
          non-compliance as a basis for denial. This is the opposite of many other states, where
          policy conditions may be strictly enforced regardless of prejudice.
        </p>
      </CalloutBox>

      {/* ── OVER-COMPLIANCE VS UNDER-COMPLIANCE ── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Compliance Spectrum: Over-Compliance vs. Under-Compliance
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Neither extreme serves your interests. Understanding where to position yourself on the compliance
        spectrum is a practical skill:
      </p>

      <h4 className="text-base font-bold text-[#1F3964] mb-2">
        Under-Compliance (Risky)
      </h4>
      <p className="text-gray-700 leading-relaxed mb-4">
        Ignoring legitimate requests, refusing inspections, missing deadlines without explanation, or
        being combative with the adjuster. Even with California&apos;s prejudice requirement protecting
        you, under-compliance creates friction, delays payment, and gives the insurer arguments to hide
        behind. It also makes you look uncooperative if the dispute eventually reaches appraisal or
        litigation.
      </p>

      <h4 className="text-base font-bold text-[#1F3964] mb-2">
        Over-Compliance (Also Risky)
      </h4>
      <p className="text-gray-700 leading-relaxed mb-4">
        Providing every document the insurer requests without question, submitting to repeated EUOs,
        giving recorded statements without preparation, or signing blanket authorizations for financial
        and medical records. Over-compliance can expose you to fishing expeditions, create inconsistencies
        the insurer can exploit, and waive protections you did not know you had. Some insurer requests are
        designed to overwhelm or to create grounds for denial through inadvertent inconsistencies in sworn
        testimony.
      </p>

      <h4 className="text-base font-bold text-[#1F3964] mb-2">
        The Right Approach
      </h4>
      <p className="text-gray-700 leading-relaxed mb-4">
        Comply promptly with all legitimate requests. Respond in writing. Meet deadlines or request
        extensions before they pass. But do so with awareness &mdash; understand what you are required
        to provide versus what the insurer is <em>hoping</em> you will provide. Where a request seems
        unusually broad, invasive, or unrelated to the claim, an insured may request clarification in
        writing (for example, asking how the request relates to the loss). Outright refusal carries
        risk &mdash; carriers sometimes characterize narrowing as non-cooperation, so the question of
        whether and how to push back is best evaluated with a Public Adjuster or attorney before
        responding.
      </p>

      {/* ── PRACTICAL TIPS ── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Practical Tips for Fulfilling Your Duties
      </h2>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Report promptly.</strong> Call your insurance company as soon as you discover the loss.
          Follow up in writing (email) to create a date-stamped paper trail. Note the claim number and
          the name of every person you speak with.
        </li>
        <li>
          <strong>Document everything before cleanup.</strong> Take photos and video of all damage before
          any cleanup or emergency repairs begin. Walk through every affected area systematically. These
          photos are your evidence &mdash; you cannot recreate the scene later.
        </li>
        <li>
          <strong>Keep receipts for all mitigation expenses.</strong> Emergency tarping, board-up, water
          extraction, generator rental, temporary housing &mdash; save every receipt. These are
          reimbursable.
        </li>
        <li>
          <strong>Respond to requests in writing.</strong> When the insurer asks for documents or
          information, respond by email and keep copies of everything you send. Never rely solely on
          verbal communication.
        </li>
        <li>
          <strong>Meet deadlines or request extensions before they pass.</strong> If the policy specifies
          a timeframe for submitting a proof of loss or other documents, meet it. If you need more time,
          request an extension in writing <em>before</em> the deadline &mdash; not after.
        </li>
        <li>
          <strong>Be cautious with blanket authorizations.</strong> Carriers commonly ask for a
          release allowing access to &ldquo;any and all records.&rdquo; An insured may request
          that the authorization be narrowed to records relevant to the claim, though carriers
          sometimes treat narrowing as non-cooperation. Where the request is broad and the
          insured is unsure how to respond, this is a sensible point at which to consult an
          attorney before signing.
        </li>
        <li>
          <strong>Be cautious with recorded statements.</strong> Cooperation may require the
          insured to give a statement, but the insured can typically schedule it at a
          reasonable time and prepare beforehand. An insured may request that a representative
          (a Public Adjuster or, where appropriate, counsel) be present; a carrier may or may
          not agree. Where fraud is suspected or the loss is significant, consulting an
          attorney before giving a recorded statement is the safer course.
        </li>
        <li>
          <strong>Separate damaged from undamaged property.</strong> For contents claims, physically
          separate items that are damaged from those that are not. This prevents the insurer from arguing
          that you failed to mitigate by allowing cross-contamination.
        </li>
        <li>
          <strong>Do not dispose of damaged items until released.</strong> The insurer has the right to
          inspect damaged property and may have{' '}
          <Link href="/resources/salvage-rights" className="text-blue-700 underline hover:text-blue-900">
            salvage rights
          </Link>. Do not throw away damaged items unless the insurer has inspected them and confirmed
          they can be disposed of, or unless they constitute a health hazard that requires immediate removal.
        </li>
        <li>
          <strong>Get help if you need it.</strong> If you are unsure how to complete a proof of loss,
          respond to an EUO demand, or handle an unreasonable request, consult with a{' '}
          <Link href="/resources/public-adjuster" className="text-blue-700 underline hover:text-blue-900">
            Public Adjuster
          </Link>{' '}
          or an attorney before responding. The cost of advice is far less than the cost of a mistake.
        </li>
      </ul>

      {/* ── COMMON INSURER TACTICS ── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Common Insurer Tactics Using &ldquo;Duties After Loss&rdquo;
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance companies sometimes weaponize the duties-after-loss provision to create grounds for
        denial or to pressure policyholders into abandoning claims. Watch for these patterns:
      </p>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Demanding a proof of loss with an impossible deadline</strong> &mdash; requesting a
          fully documented, sworn proof of loss within 30 days on a complex commercial loss where the
          scope is still being determined. If the deadline is unreasonable, request an extension in
          writing immediately.
        </li>
        <li>
          <strong>Repeated inspection demands</strong> &mdash; requesting a third, fourth, or fifth
          inspection after the damage has already been thoroughly documented. Each inspection delays
          the claim and may be designed to find inconsistencies or wear you down.
        </li>
        <li>
          <strong>Broad document demands unrelated to the claim</strong> &mdash; requesting five years
          of bank statements, tax returns, or medical records for a straightforward property damage claim.
          You are required to cooperate, but you can push back on relevance.
        </li>
        <li>
          <strong>Claiming &ldquo;failure to mitigate&rdquo; after the fact</strong> &mdash; arguing
          that you should have done more to protect the property, even when the measures they describe
          were impractical or dangerous under the actual conditions at the time of loss.
        </li>
        <li>
          <strong>EUO as a delay weapon</strong> &mdash; demanding an examination under oath months into
          the claim process, then taking weeks to schedule it, then asking to reschedule, effectively
          freezing the claim indefinitely.
        </li>
      </ul>

      <CalloutBox variant="tip" title="Document the Pattern">
        <p>
          If you believe the insurer is using duty-compliance demands as a delay tactic rather than a
          legitimate investigation tool, document the pattern. Save every request, every response, and
          every timeline. This documentation becomes evidence of bad faith if the dispute is not resolved.
          See our article on{' '}
          <Link href="/resources/california-fair-claims" className="text-blue-700 underline hover:text-blue-900">
            the Fair Claims Settlement Practices Act
          </Link>{' '}
          for the regulatory framework that governs insurer conduct.
        </p>
      </CalloutBox>

      {/* ── WHAT HAPPENS IF YOU BREACH ── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Happens If You Breach a Duty?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        In California, a breach of a policy condition does not automatically forfeit your claim.
        The consequences depend on the severity of the breach and whether it caused prejudice:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Minor procedural breaches</strong> (late proof of loss, missed deadline by days):
          Generally excused if no prejudice to the insurer. Comply as soon as possible and document the
          reason for the delay.
        </li>
        <li>
          <strong>Substantive breaches</strong> (destroying evidence, refusing all inspections, refusing
          a properly requested EUO): May result in denial if the insurer can show the breach prevented
          them from evaluating the claim. Even here, the insurer must show actual prejudice.
        </li>
        <li>
          <strong>Fraud or material misrepresentation</strong> (falsifying a proof of loss, inflating
          values, concealing relevant facts): This is a different category entirely. Intentional
          misrepresentation in a sworn proof of loss can void the entire policy &mdash; not just the
          claim at issue. This is governed by Insurance Code &sect; 2071 and California&apos;s concealment
          and misrepresentation statutes.
        </li>
      </ul>

      {/* ── CLOSING ── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Bottom Line
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your duties after a loss are real obligations, and ignoring them creates problems you do not need.
        But they are not absolute &mdash; California law tempers strict policy language with the prejudice
        requirement, ensuring that technical non-compliance does not become a weapon for claim denial when
        the insurer suffered no actual harm.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The safest approach: comply promptly and thoroughly with all legitimate requests, but do so with
        your eyes open. Understand what is required, what is optional, and what is an overreach. Document
        everything. And if the process feels adversarial rather than cooperative, get professional help
        early &mdash; before a procedural misstep becomes a basis for denial.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        A Note on This Information
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This article is educational and is not legal advice. Insurance policies and the laws that
        govern them vary by state and by policy. If you are facing a specific situation involving
        your duties after a loss &mdash; especially an examination under oath or a disputed proof of
        loss &mdash; you should consult with a licensed attorney who specializes in insurance claims in
        your jurisdiction.
      </p>
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
