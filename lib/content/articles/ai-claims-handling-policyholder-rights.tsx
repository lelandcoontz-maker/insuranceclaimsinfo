import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Artificial Intelligence in Insurance Claims: What Policyholders Need to Know',
  description:
    'How insurers use AI to triage, evaluate, and deny claims — and what policyholders can do about it. Covers automated damage estimation, fraud scoring, the NAIC AI governance framework, California SB-1120, and policyholder rights to challenge AI-driven decisions.',
  summary:
    'Insurers increasingly use AI to triage, estimate, and even deny claims. You retain the right to meaningful human review and a real explanation. California SB 1120 and the NAIC framework limit pure-AI decisions, and an automated denial can be challenged.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurance industry has embraced artificial intelligence at every stage of the claims
        process. From the moment a claim is reported to the final settlement offer, algorithms now
        influence &mdash; and in some cases entirely determine &mdash; how much a policyholder
        receives. Insurers describe this transformation as faster, more consistent, and more
        efficient. What they rarely discuss is whether it is more accurate or more fair.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Policyholders need to understand how these systems work, where they fail, and what rights
        exist to challenge AI-driven decisions. The speed of AI adoption has far outpaced the
        regulatory framework governing its use, and the consequences fall disproportionately on
        the people filing claims.
      </p>

      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational in nature and reflects general information about the use of
          artificial intelligence in insurance claims handling. It is not legal advice. AI regulation
          is evolving rapidly across jurisdictions. If an AI-driven decision has affected a specific
          claim, consult with a licensed attorney who specializes in insurance coverage disputes.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Insurers Are Using AI in Claims Handling
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Artificial intelligence is not a single technology. In insurance claims, it encompasses a
        range of tools deployed at different stages of the process:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Automated Triage and Claims Routing
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a claim is first reported, AI systems now classify it by severity, complexity, and
        expected cost. Simple claims &mdash; a broken window, a minor kitchen fire, a small water
        leak &mdash; may be routed to fast-track processing with minimal human involvement. More
        complex claims are categorized and assigned to adjusters, but the AI&rsquo;s initial
        classification can set the tone for the entire handling process. A claim flagged as
        &ldquo;low severity&rdquo; by the algorithm may receive less attention, fewer resources, and
        lower initial reserves than it deserves.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Photo-Based Damage Estimation
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Several major insurers now use computer vision systems that analyze photographs of damage
        to generate repair estimates. A policyholder submits photos of a damaged roof, and within
        minutes the AI produces a scope of work and dollar figure. These systems are trained on
        historical claims data &mdash; millions of images paired with the amounts insurers
        previously paid. The problem is that the training data reflects what insurers chose to pay,
        not what repairs actually cost. If the historical data systematically undervalues claims,
        the AI learns to undervalue them as well.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Fraud Scoring
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        AI-driven fraud detection models assign risk scores to incoming claims based on dozens of
        variables: the timing of the loss, the policyholder&rsquo;s claim history, the amount
        claimed relative to the policy limits, geographic patterns, and more. A high fraud score
        can trigger a Special Investigations Unit (SIU) referral, which dramatically slows the
        claims process and subjects the policyholder to intensive scrutiny. The criteria for these
        scores are proprietary and opaque. A policyholder flagged as &ldquo;high risk&rdquo; may
        never know why, and may face{' '}
        <Link href="/resources/insurance-delay-tactics" className="text-[#2E74B5] underline">
          significant delays
        </Link>{' '}
        as a result.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Settlement Recommendations
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Perhaps the most consequential application of AI in claims is the generation of settlement
        recommendations. These systems analyze the claim data, comparable claims, policy terms, and
        sometimes even the policyholder&rsquo;s likelihood of hiring a lawyer or filing a complaint,
        to produce a recommended payout amount. The adjuster assigned to the claim may have limited
        authority to deviate from the algorithm&rsquo;s recommendation. In effect, the AI sets the{' '}
        <Link href="/resources/first-offer-lowball" className="text-[#2E74B5] underline">
          initial offer
        </Link>
        , and the human adjuster becomes the messenger.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Speed Promise &mdash; and Its Cost
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurers frequently tout the speed gains of AI-driven claims handling. Claims that once
        required ten days of adjuster investigation, contractor coordination, and desk review can
        now close in as little as 36 hours. For straightforward claims with clear coverage and
        accurate damage assessment, this speed is genuinely beneficial. No policyholder wants to
        wait weeks for a simple repair payment.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The danger is that speed and accuracy are not the same thing. A claim closed in 36 hours
        is not necessarily a claim that was handled correctly. If the AI underestimated the damage,
        misclassified the cause of loss, or applied an exclusion that does not actually apply, the
        fast closure simply means the policyholder was underpaid faster. And the speed itself
        creates pressure to accept: when an insurer presents a settlement offer within days,
        policyholders may feel compelled to take it before fully understanding the extent of their
        loss.
      </p>

      <CalloutBox variant="warning" title="Fast Does Not Mean Fair">
        <p>
          A rapid settlement offer is not inherently a good offer. If an insurer presents a payout
          within days of a claim being filed, the policyholder should carefully evaluate whether the
          amount actually covers the full cost of repairs before accepting. Speed benefits the
          insurer when it closes claims cheaply. It benefits the policyholder only when the amount
          is correct.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Accuracy Problem: AI Trained on Insurer Data
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Every machine learning system is only as good as the data it was trained on. Insurance AI
        systems are trained on historical claims data &mdash; data generated by the insurers
        themselves. This creates a fundamental problem: if insurers have historically undervalued
        claims, the AI will learn to undervalue them. If desk reviewers have routinely reduced
        field adjuster estimates, the AI will learn that reduced amounts are &ldquo;correct.&rdquo;
        If certain types of damage have been systematically excluded or minimized, the AI will
        replicate those patterns.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is not a theoretical concern. The insurance industry has a well-documented history of
        claims suppression practices. Programs that instruct adjusters to reduce estimates, deny
        certain claim types at higher rates, or apply aggressive interpretations of policy
        exclusions have been exposed repeatedly through litigation and regulatory action. When AI
        systems are trained on the output of those practices, they do not correct the bias &mdash;
        they encode it.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The result is a system that appears objective and data-driven but systematically produces
        outcomes favorable to the insurer. A policyholder{' '}
        <Link href="/resources/dealing-with-adjuster" className="text-[#2E74B5] underline">
          dealing with an adjuster
        </Link>{' '}
        who says &ldquo;the system calculated your payout&rdquo; is facing an opponent that has
        dressed up historical underpayment as algorithmic precision.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Regulatory Landscape: NAIC and State Action
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The National Association of Insurance Commissioners (NAIC) has recognized the risks of AI
        in insurance. In late 2023, the NAIC adopted a Model Bulletin on the Use of Artificial
        Intelligence Systems by Insurers, which established a governance framework for AI use across
        the industry. The bulletin requires insurers to implement AI governance programs, conduct
        risk assessments, and ensure that AI-driven decisions comply with existing unfair trade
        practice laws.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        By late 2025, more than 24 states had adopted or were in the process of adopting the NAIC
        Model Bulletin or substantially similar guidance. This represents a significant shift in
        regulatory attention, though the Model Bulletin is principles-based rather than prescriptive,
        meaning enforcement varies significantly by state.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The core requirements of the NAIC framework include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>AI governance programs.</strong> Insurers must establish internal programs to
          oversee the development, deployment, and monitoring of AI systems used in underwriting,
          rating, and claims.
        </li>
        <li>
          <strong>Risk assessment.</strong> Before deploying AI in claims handling, insurers must
          assess the risk that the system could produce unfairly discriminatory outcomes or violate
          existing consumer protection laws.
        </li>
        <li>
          <strong>Compliance with existing law.</strong> The bulletin makes clear that existing
          unfair claims settlement practices statutes apply fully to AI-driven decisions. An insurer
          cannot use an algorithm to do what it would be prohibited from doing manually.
        </li>
        <li>
          <strong>Human oversight.</strong> The framework emphasizes that AI should augment, not
          replace, human decision-making in consequential claims determinations.
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        California SB-1120: A Model for AI Accountability
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        California has been at the forefront of AI regulation in insurance. SB-1120, signed into
        law as part of the state&rsquo;s broader consumer protection framework, establishes that
        artificial intelligence cannot be the sole decision-maker in certain insurance contexts.
        The law requires meaningful human review of AI-generated decisions that adversely affect
        policyholders, including claim denials, significant coverage reductions, and policy
        non-renewals.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is a critical protection. It means that when an insurer denies a claim or offers a
        significantly reduced settlement, a human being must review the AI&rsquo;s recommendation
        before the decision is communicated to the policyholder. The human reviewer must have
        sufficient expertise and authority to override the algorithm&rsquo;s output. A rubber-stamp
        review that simply approves whatever the AI recommends does not satisfy the requirement.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Court Rulings: Discovery Into AI Use
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Courts are increasingly willing to allow discovery into how insurers use AI to make claims
        decisions. In multiple jurisdictions, judges have permitted policyholders and their attorneys
        to obtain information about the algorithms, models, and scoring systems used to evaluate
        and deny claims. This is significant because insurers have historically treated their claims
        technology as proprietary trade secrets, shielded from outside scrutiny.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The legal reasoning is straightforward: when an insurer relies on an AI system to deny or
        reduce a claim, the policyholder has a right to understand how that decision was made. In{' '}
        <Link href="/resources/bad-faith" className="text-[#2E74B5] underline">bad faith</Link>{' '}
        litigation, the reasonableness of the insurer&rsquo;s conduct is the central question. If
        the insurer delegated that conduct to an algorithm, the algorithm&rsquo;s design, training
        data, and outputs become directly relevant to whether the insurer acted reasonably.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Discovery into AI use has revealed troubling patterns in several cases: models that were
        never validated against actual repair costs, systems that flagged claims from certain
        geographic areas at higher rates, and algorithms that recommended denials based on the
        policyholder&rsquo;s estimated likelihood of pursuing litigation rather than the merits of
        the claim itself.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Policyholder Rights When AI Is Involved
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The growing use of AI in claims handling does not diminish policyholder rights. Every
        protection that applies to human-made claims decisions applies equally to AI-driven ones.
        In addition, the emerging regulatory framework creates new rights specific to algorithmic
        decision-making:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Right to Know If AI Was Used
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Policyholders should ask &mdash; in writing &mdash; whether any AI, algorithmic, or
        automated decision-making system was used in evaluating their claim. This includes
        automated damage estimation tools, fraud scoring models, and settlement recommendation
        engines. In states that have adopted the NAIC framework or similar regulations, insurers
        are expected to be transparent about the use of AI in claims decisions. Even where disclosure
        is not yet explicitly required, asking the question creates a record that can be valuable in
        any subsequent dispute.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Right to Challenge AI-Driven Denials
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        An insurer cannot deny a claim simply because an algorithm recommended denial. The insurer
        must still have a reasonable basis for the denial under the policy terms, supported by an
        adequate investigation. If the denial is based on an AI assessment that the policyholder
        believes is inaccurate &mdash; for example, a photo-based damage estimate that missed
        significant damage, or a fraud score triggered by innocent circumstances &mdash; the
        policyholder has every right to challenge it.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The challenge should be specific and documented. If the AI underestimated the damage,
        provide independent contractor estimates, photographs, and expert assessments that
        demonstrate the actual scope of loss. If the AI misclassified the cause of loss, present
        evidence of the actual cause. Treat an AI-generated denial the same way as any other
        denial: demand a written explanation, gather supporting evidence, and escalate if the
        insurer refuses to reconsider.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Right to Human Review
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        In California and an increasing number of other jurisdictions, policyholders have the right
        to request that a qualified human adjuster review any AI-generated claims decision. This
        is not a request for a second opinion from the same algorithm &mdash; it is a request for
        a human being with subject matter expertise to independently evaluate the claim. If the
        human reviewer simply defers to the AI output without conducting an independent analysis,
        the review is inadequate and may support a{' '}
        <Link href="/resources/bad-faith" className="text-[#2E74B5] underline">bad faith</Link>{' '}
        claim.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What to Do If You Suspect an AI-Driven Denial
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If a claim has been denied, underpaid, or unreasonably delayed and the policyholder
        suspects AI was involved, the following steps can help protect policyholder rights:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Request written confirmation of AI use.</strong> Ask the insurer, in writing,
          whether any automated or algorithmic tools were used in evaluating the claim, estimating
          damages, scoring for fraud, or generating the settlement offer.
        </li>
        <li>
          <strong>Request a detailed written explanation of the denial.</strong> The insurer must
          explain the specific reasons for the denial or reduced payment. If the explanation
          references software-generated estimates or system-calculated amounts, note this in
          any response.
        </li>
        <li>
          <strong>Obtain independent estimates.</strong> Do not rely solely on the insurer&rsquo;s
          damage assessment. Obtain independent contractor estimates or, for larger claims, retain
          a licensed public adjuster to prepare an independent scope and estimate.
        </li>
        <li>
          <strong>Document the discrepancy.</strong> If the insurer&rsquo;s AI-generated estimate
          is significantly lower than independent estimates, document the gap and demand an
          explanation for the difference.
        </li>
        <li>
          <strong>Request human review.</strong> Formally request that a qualified human adjuster
          independently review the claim, not simply confirm the AI output.
        </li>
        <li>
          <strong>File a complaint with the state insurance department.</strong> If the insurer
          refuses to disclose AI use, refuses human review, or maintains an AI-driven denial
          without adequate justification, a complaint to the California Department of Insurance
          (or the applicable state regulator) is appropriate.
        </li>
        <li>
          <strong>Consult an attorney.</strong> AI-driven denials may raise bad faith issues,
          particularly if the insurer relied on a flawed algorithm, failed to conduct a proper
          investigation, or refused to allow meaningful human review.
        </li>
      </ul>

      <CalloutBox variant="tip" title="Create a Paper Trail">
        <p>
          Every communication about AI use in a claim should be in writing. If a{' '}
          <Link href="/resources/dealing-with-adjuster" className="text-[#2E74B5] underline">
            claims adjuster
          </Link>{' '}
          verbally mentions that &ldquo;the system&rdquo; generated the estimate or that
          &ldquo;our software&rdquo; determined the scope, follow up with a written confirmation
          asking the adjuster to confirm what system was used and how it influenced the claims
          decision. This documentation becomes critical if the claim later moves to litigation or
          regulatory complaint.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Bigger Picture: Accountability and Transparency
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The core problem with AI in insurance claims is not the technology itself &mdash; it is
        the lack of accountability. When a human adjuster makes a bad decision, there is a person
        who can be questioned, deposed, and held accountable. When an algorithm makes a bad
        decision, insurers can hide behind the complexity of the system, claiming the output was
        objective and data-driven when it was neither.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The regulatory response is still catching up. The NAIC framework and state-level
        legislation like California&rsquo;s SB-1120 are important steps, but enforcement remains
        uneven. Policyholders cannot assume that regulators are monitoring every AI-driven claims
        decision. The most effective protection remains the same as it has always been:
        documentation, independent evidence, persistence, and a willingness to escalate when an
        insurer&rsquo;s position is unreasonable.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        AI will continue to play a growing role in insurance claims. Policyholders who understand
        how these systems work &mdash; and where they fail &mdash; are better positioned to
        identify unfair treatment and fight for the benefits they purchased. An algorithm that
        says &ldquo;no&rdquo; is not the final word. It is the beginning of the conversation.
      </p>

      <CalloutBox variant="important" title="Technology Does Not Change the Insurer&rsquo;s Obligations">
        <p>
          Regardless of what technology an insurer uses, the legal obligations remain the same.
          The insurer must conduct a thorough and objective investigation, must not unreasonably
          deny or delay claims, and must deal fairly with policyholders. Using AI does not create
          a new defense to{' '}
          <Link href="/resources/bad-faith" className="text-[#2E74B5] underline">bad faith</Link>
          . If anything, relying on a flawed algorithm without adequate human oversight makes the
          insurer&rsquo;s conduct more vulnerable to challenge, not less.
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
