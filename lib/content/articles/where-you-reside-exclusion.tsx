import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Where You Reside: The Hidden Killer Exclusion in Your Homeowner Policy',
  description:
    'The three words "where you reside" in your homeowner policy definition can eliminate your coverage entirely — especially if you move to a nursing home. Learn how this hidden exclusion works and how to protect yourself.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Three words buried in the definitions section of your homeowner&rsquo;s insurance policy
        have the power to eliminate your coverage entirely: <strong>&ldquo;where you
        reside.&rdquo;</strong> This is not a standard exclusion that appears in bold type under
        the exclusions section. It is embedded in a definition &mdash; the definition of
        &ldquo;residence premises&rdquo; &mdash; and most policyholders will never read it until
        the day their insurer uses it to deny a claim. The Independent Insurance Agents &amp;
        Brokers of America (the &ldquo;Big I&rdquo;) has called this language a
        &ldquo;catastrophic homeowners policy exclusion,&rdquo; and for good reason.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Policy Language at Issue
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The standard ISO HO-3 homeowner&rsquo;s policy &mdash; the most widely sold homeowner
        policy form in the United States &mdash; defines &ldquo;residence premises&rdquo; as the
        one-family dwelling <strong>&ldquo;where you reside&rdquo;</strong> and which is shown as
        the &ldquo;described location&rdquo; on the declarations page. This definition is the
        gateway to virtually all coverage under the policy. Your dwelling coverage (Coverage A),
        other structures coverage (Coverage B), personal property coverage (Coverage C), loss of
        use coverage (Coverage D), personal liability coverage (Coverage E), and medical payments
        coverage (Coverage F) all flow through the &ldquo;residence premises&rdquo; definition.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        What makes this language so dangerous is what it does <em>not</em> say. There is no
        separate exclusion that reads: &ldquo;If you stop residing at the described premises,
        all coverage is void.&rdquo; Instead, the coverage-defeating language is hidden inside a
        definition. Most policyholders &mdash; and many insurance agents &mdash; read the
        definitions section as merely describing the property being insured. They do not realize
        that the phrase &ldquo;where you reside&rdquo; can be interpreted as a <em>continuing
        condition</em> of coverage, one that must be satisfied at the time of every loss.
      </p>

      <CalloutBox variant="important" title="This Is Not a Standard Exclusion">
        <p>
          Unlike flood, earthquake, or mold exclusions, the &ldquo;where you reside&rdquo;
          language does not appear in the exclusions section of the policy. It appears in the
          definitions section. This makes it far more difficult for policyholders to identify as
          a potential coverage trap. The Big I has specifically warned that this language functions
          as an exclusion even though it is technically a definition, and that most consumers are
          completely unaware of its existence.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Descriptive vs. Proscriptive Debate
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The central legal question is whether the phrase &ldquo;where you reside&rdquo; is
        <strong> descriptive</strong> or <strong>proscriptive</strong>. This distinction determines
        whether millions of homeowners have coverage or not.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Proscriptive (Coverage-Defeating) Reading
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under the proscriptive interpretation, &ldquo;where you reside&rdquo; establishes a
        continuing condition that the insured must satisfy at the time of each loss. If the
        policyholder is not actually residing at the described premises when the loss occurs,
        the property does not qualify as a &ldquo;residence premises,&rdquo; and coverage does
        not exist. Under this reading, a homeowner who moves to a nursing home, goes on an
        extended trip, or relocates for work &mdash; while continuing to pay premiums on the
        home &mdash; may find that their coverage has silently evaporated.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Descriptive (Coverage-Preserving) Reading
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under the descriptive interpretation, &ldquo;where you reside&rdquo; merely identifies
        which property is being insured at the inception of the policy. It is a label &mdash; a
        way of pointing at the insured property &mdash; not a condition that must be continuously
        maintained. The policyholder designated this property as their residence when they
        purchased the policy, and that designation does not dissolve simply because life
        circumstances change.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This interpretation is supported by the doctrine of <em>contra proferentem</em>, which
        requires that ambiguous policy language be construed against the insurer who drafted it.
        If &ldquo;where you reside&rdquo; can reasonably be read as either a description or a
        condition, California law &mdash; and the law of most states &mdash; requires that the
        interpretation favoring coverage prevail. The insurer drafted the policy. If it intended
        &ldquo;where you reside&rdquo; to be a condition of coverage, it could have said so
        explicitly: &ldquo;Coverage applies only while you are physically residing at the
        described premises.&rdquo; It did not.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Nursing Home Problem
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        No scenario illustrates the cruelty of the proscriptive interpretation more starkly than
        the nursing home problem. Consider the following hypothetical, drawn directly from the Big
        I&rsquo;s analysis of this issue:
      </p>

      <CalloutBox variant="warning" title="The Devastating Scenario">
        <p>
          An elderly homeowner has lived in the same home for 30 years and has paid homeowner
          insurance premiums faithfully for every one of those years. She suffers a medical
          emergency and is involuntarily admitted to a nursing home or assisted living facility.
          Days later, a fire destroys her home. Under the proscriptive interpretation, she has no
          coverage &mdash; because at the time of the fire, she was no longer &ldquo;residing&rdquo;
          at the described premises. Thirty years of premiums purchased nothing.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        The Big I has made several powerful arguments for why coverage should exist in this
        scenario. Their analysis deserves to be quoted at length, because it captures the scope
        of the problem:
      </p>
      <blockquote className="border-l-4 border-[#C9A84C] pl-4 italic text-gray-600 mb-6">
        The &ldquo;where you reside&rdquo; requirement is not set forth clearly and conspicuously
        as an exclusion or condition &mdash; it is buried in a definition. The policyholder had
        no reasonable expectation that moving to a care facility would void all coverage on the
        home she had insured for decades.
      </blockquote>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Big I further argued that the &ldquo;where you reside&rdquo; language should be
        understood as establishing <em>eligibility</em> for the policy at inception, not as a
        <em> continuing condition</em> of coverage. When the insurer issued the policy, it
        verified that the applicant resided at the premises. That eligibility criterion was
        satisfied. Transforming it into an ongoing condition that the policyholder must satisfy
        at the moment of every loss is a fundamentally different interpretation &mdash; and one
        that was never disclosed to the policyholder.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Perhaps the most devastating argument is the unconscionability argument. The Big I posed
        a hypothetical that illustrates the problem clearly:
      </p>
      <blockquote className="border-l-4 border-[#C9A84C] pl-4 italic text-gray-600 mb-6">
        Under the proscriptive reading, an insurer could deny coverage to the elderly homeowner
        whose home burns while she is in a nursing home &mdash; but would be required to cover
        the identical home if it were being used as a meth lab by squatters. In the meth lab
        scenario, the property is still the &ldquo;described location&rdquo; on the declarations
        page; the only question is whether the named insured &ldquo;resides&rdquo; there. The
        meth lab operator has no coverage because he is not the named insured. But the named
        insured has no coverage either, because she is no longer residing there. The home burns
        either way. In one scenario (the nursing home), the insurer pockets 30 years of premiums
        and pays nothing. In the other (the meth lab), the insurer would be obligated to pay.
        The result is absurd, and unconscionable.
      </blockquote>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Case Law: Courts Have Gone Both Ways
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This issue has been litigated across multiple jurisdictions, and the results are far from
        uniform. Courts have reached conflicting conclusions about whether &ldquo;where you
        reside&rdquo; is a condition of coverage or merely a descriptive identifier.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Cases Upholding the Denial
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        In <em>Pour v. Liberty Mutual Personal Insurance Co.</em>, No. 24-1824 (8th Cir. 2025),
        the Eighth Circuit held that the &ldquo;where you reside&rdquo; language was a condition
        of coverage and that the policyholder &mdash; who had relocated to Georgia while
        maintaining the insured property in Minnesota &mdash; no longer resided at the premises
        within the meaning of the policy.
        The court found that &ldquo;reside&rdquo; required physical presence and an intent to
        remain, and that the policyholder had established a new primary residence in another
        state. The claim was denied.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Cases like <em>Pour</em> tend to involve situations where the policyholder had clearly
        and voluntarily relocated to another primary residence. The insured was not in a hospital,
        not in a nursing home, and not temporarily away. They had affirmatively moved to a new
        home. Courts in these cases are more comfortable finding that the &ldquo;where you
        reside&rdquo; condition was no longer satisfied, because the policyholder&rsquo;s own
        conduct demonstrated a change in primary residence.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Cases Overturning the Denial
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        At least nine reported decisions have rejected the proscriptive reading and found in
        favor of the policyholder. These courts have generally held that &ldquo;where you
        reside&rdquo; is descriptive rather than conditional, that the language is at minimum
        ambiguous and must be construed in favor of coverage, and that the insurer&rsquo;s
        interpretation would produce absurd and unconscionable results.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Florida courts have been particularly direct on this issue. In one notable decision, the
        court emphasized that the insurer had accepted premiums for years while knowing the
        policyholder&rsquo;s living situation. The court held that an insurer cannot collect
        premiums on a property for years and then, when a loss occurs, deny coverage by arguing
        that the policyholder was not &ldquo;residing&rdquo; at the property it had been insuring
        all along. This reasoning invokes the doctrines of estoppel and waiver &mdash; having
        accepted the premiums with knowledge of the circumstances, the insurer cannot disclaim
        coverage when it comes time to pay.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Several courts have also noted the absence of any clear disclosure to the policyholder
        that coverage was contingent on continuous physical residency. If the insurer intended
        &ldquo;where you reside&rdquo; as a coverage condition, it had an obligation to make
        that condition clear, conspicuous, and prominent &mdash; not bury it in a definition
        that reads like a property description. The failure to do so is itself a basis for
        finding in favor of coverage.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Practical Guidance for Policyholders and Practitioners
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Whether you are a policyholder, an insurance agent, or a public adjuster, this issue
        requires proactive attention. The following steps can significantly reduce the risk of a
        coverage denial based on the &ldquo;where you reside&rdquo; language.
      </p>

      <CalloutBox variant="important" title="Professional Guidance Recommended">
        <p>
          The legal strategies discussed in this section should be pursued with the guidance of
          a licensed attorney experienced in insurance coverage disputes. A Public Adjuster can
          assist with the claims-handling, documentation, and negotiation aspects of your claim.
          If you need help finding a qualified professional,{' '}
          <Link href="/contact" className="text-[#2E74B5] hover:underline">
            contact us
          </Link>{' '}
          for a referral.
        </p>
      </CalloutBox>

      <CalloutBox variant="tip" title="Steps to Protect Yourself">
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            <strong>Notify your agent immediately when transitioning to a care facility.</strong>{' '}
            The moment a homeowner is admitted to a nursing home, assisted living facility, or
            similar care facility &mdash; whether voluntarily or involuntarily &mdash; their
            insurance agent should be notified in writing. This creates a record that the insurer
            was aware of the change in circumstances and continued to accept premiums.
          </li>
          <li>
            <strong>Review the vacancy provisions separately.</strong> The &ldquo;where you
            reside&rdquo; issue is distinct from the 60-day vacancy exclusion that exists in most
            homeowner policies. Even if you win the residency argument, the insurer may assert the
            separate{' '}
            <Link href="/resources/exclusions" className="text-[#2E74B5] hover:underline">
              vacancy exclusion
            </Link>{' '}
            if the home has been unoccupied for an extended period. Review both provisions
            carefully and address them independently.
          </li>
          <li>
            <strong>Determine whether a family member still resides in the home.</strong> If a
            spouse, adult child, or other family member continues to live at the insured property,
            the &ldquo;where you reside&rdquo; problem may not arise. Under many policy forms, an
            &ldquo;insured&rdquo; includes family members who reside in the household. If any
            insured still resides at the property, the residence premises definition remains
            satisfied.
          </li>
          <li>
            <strong>Preserve all communications.</strong> If the insurer or its agent knew the
            policyholder was in a care facility and continued to accept premiums without
            disclaiming coverage, this creates a powerful estoppel argument. Save every premium
            notice, payment confirmation, renewal letter, and correspondence.
          </li>
          <li>
            <strong>An attorney may raise <em>contra proferentem</em> in any dispute over this language</strong>,
            arguing that the ambiguity should be resolved in favor of coverage. The
            insurer drafted the policy. If it wanted residency to be a condition of coverage, it
            could have said so in plain, conspicuous language. It did not.
          </li>
        </ul>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        Additionally, practitioners should review the{' '}
        <Link href="/resources/declarations-page" className="text-[#2E74B5] hover:underline">
          declarations page
        </Link>{' '}
        carefully to confirm how the insured property is described. In some cases, the
        declarations page identifies the property by address alone without using the phrase
        &ldquo;residence premises.&rdquo; If the declarations page description does not
        incorporate the &ldquo;where you reside&rdquo; language, that is an additional argument
        against the insurer&rsquo;s position.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Conclusion
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The &ldquo;where you reside&rdquo; language is a coverage trap embedded in the most
        widely sold homeowner policy form in America. It is not flagged as an exclusion. It is
        not explained at the point of sale. It does not appear in the policy summary or outline
        of coverage. It sits quietly in the definitions section until the day a policyholder
        &mdash; often elderly, often in a care facility, often at the most vulnerable point
        of their life &mdash; files a claim and discovers that decades of faithfully paid
        premiums may have purchased nothing.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The case law is mixed, but the trend favors policyholders. Courts are increasingly
        reluctant to allow insurers to deny coverage based on definitional language that was
        never clearly disclosed as a condition of coverage. The doctrines of <em>contra
        proferentem</em>, reasonable expectations, estoppel, and unconscionability all weigh
        heavily in the policyholder&rsquo;s favor.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        What is needed is a structural fix. ISO should revise the HO-3 form to clarify whether
        &ldquo;where you reside&rdquo; is descriptive or conditional &mdash; and if it is
        conditional, to disclose that fact conspicuously and prominently. State legislatures
        should consider legislation requiring insurers to notify policyholders that their coverage
        may be affected by a change in residency status. And insurance agents should affirmatively
        counsel their clients about this risk, particularly when clients are aging and may be
        approaching the point where a transition to a care facility is foreseeable.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Until those changes happen, the burden falls on policyholders and their advocates to
        identify this risk early, preserve their arguments, and push back hard when an insurer
        attempts to use three words in a definition to void 30 years of coverage.
      </p>

      <hr className="my-8 border-gray-300" />

      <p className="text-sm text-gray-500 italic">
        This article is for informational purposes only and does not constitute legal advice. Insurance
        policies and applicable law vary by state and by policy form. Consult with a licensed
        professional regarding your specific situation. Written by Leland Coontz III, Licensed Public
        Adjuster, CA License #2B53445.
      </p>
    </>
  )
}
