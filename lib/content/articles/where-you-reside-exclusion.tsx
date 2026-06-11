import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Where You Reside: The Hidden Killer Exclusion in Your Homeowner Policy',
  description:
    'The three words "where you reside" in your homeowner policy definition can eliminate your coverage entirely — especially if you move to a nursing home. Learn how this hidden exclusion works, what courts in different states have ruled, and how to protect yourself.',
  summary:
    'The phrase \'where you reside\' can quietly limit coverage to your primary residence, leaving a second home, a vacated home, or a rental uncovered under a homeowner policy. Confirm your policy fits how the property is actually used.',
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
        Three words buried in the definitions section of your homeowner&rsquo;s insurance policy
        have the power to eliminate your coverage entirely: <strong>&ldquo;where you
        reside.&rdquo;</strong> This is not a standard exclusion that appears in bold type under
        the exclusions section. It is embedded in a definition &mdash; the definition of
        &ldquo;residence premises&rdquo; &mdash; and most policyholders will never read it until
        the day their insurer uses it to deny a claim. The Independent Insurance Agents &amp;
        Brokers of America (the &ldquo;Big I&rdquo;) has called this language a
        &ldquo;catastrophic homeowners policy exclusion,&rdquo; and for good reason.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Bill Wilson&rsquo;s 2009 Big I white paper &mdash; <em>&ldquo;Where You Reside &mdash;
        The &lsquo;Where&rsquo;s Waldo?&rsquo; Catastrophic Homeowners Policy &lsquo;Exclusion&rsquo;
        That Could Bankrupt Your Insureds&rdquo;</em> &mdash; brought national attention to this
        issue and documented roughly nine court decisions upholding denials and an equal number
        overturning them. The split has only deepened since.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Policy Language at Issue
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The standard ISO HO-3 homeowner&rsquo;s policy &mdash; the most widely sold homeowner
        policy form in the United States &mdash; defines &ldquo;residence premises&rdquo; as the
        one-family dwelling <strong>&ldquo;where you reside&rdquo;</strong> and which is shown as
        the &ldquo;described location&rdquo; on the declarations page. This definition is the
        gateway to virtually all coverage under the policy. Your dwelling coverage (dwelling),
        other structures coverage (Other Structures), personal property coverage (personal property), loss of
        use coverage (Loss of Use), personal liability coverage (personal liability), and medical payments
        coverage (Medical Payments) all flow through the &ldquo;residence premises&rdquo; definition.
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
      <p className="text-gray-700 leading-relaxed mb-4">
        Critically, the term &ldquo;reside&rdquo; is almost never defined in the policy itself.
        This omission is at the heart of the legal battle that has unfolded across dozens of
        jurisdictions.
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
        continuing condition that the insured must satisfy at the time of each loss. Insurers
        argue that dictionary definitions of &ldquo;reside&rdquo; uniformly require physical
        presence at a location plus an intent to treat it as one&rsquo;s home. If the
        policyholder is not actually residing at the described premises when the loss occurs,
        the property does not qualify as a &ldquo;residence premises,&rdquo; and coverage does
        not exist. Under this reading, a homeowner who moves to a nursing home, goes on an
        extended trip, or relocates for work &mdash; while continuing to pay premiums on the
        home &mdash; may find that their coverage has silently evaporated.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurers also argue risk assessment: the premium was calculated for an owner-occupied
        dwelling. An unoccupied home presents higher risks &mdash; vandalism, undetected water
        leaks, fire hazards &mdash; that were never priced into the policy.
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
        In California, that doctrine is statutory: Civil Code &sect;&sect; 1649 and 1654 supply
        the rule, and the California Supreme Court applied it to insurance policies in{' '}
        <em>AIU Insurance Co. v. Superior Court</em> (1990) 51 Cal.3d 807 and{' '}
        <em>MacKinnon v. Truck Insurance Exchange</em> (2003) 31 Cal.4th 635. If &ldquo;where
        you reside&rdquo; can reasonably be read as either a description or a condition,
        California law &mdash; and the law of most states &mdash; requires that the
        interpretation favoring coverage prevail. The insurer drafted the policy. If it
        intended &ldquo;where you reside&rdquo; to be a condition of coverage, it could have
        said so explicitly: &ldquo;Coverage applies only while you are physically residing at
        the described premises.&rdquo; It did not.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Multiple courts have also recognized that a person can &ldquo;reside&rdquo; in more than
        one location for insurance purposes &mdash; a principle that directly benefits a nursing
        home resident who maintains ties to their home, keeps belongings there, and intends to
        return.
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
        The Big I has advanced several arguments for why coverage should exist in this scenario.
        Summarized, the core argument is that the &ldquo;where you reside&rdquo; requirement is
        not set forth clearly and conspicuously as an exclusion or condition &mdash; it sits
        inside a definition &mdash; and that a policyholder has no reasonable expectation that
        an involuntary move to a care facility will void coverage on a home insured for
        decades.
      </p>
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
        The most pointed argument is the unconscionability angle. The Big I&rsquo;s analysis
        develops a hypothetical that exposes the problem: under the proscriptive reading, an
        insurer could deny coverage to the elderly homeowner whose home burns while she is in
        a nursing home, while remaining liable for the same fire if the home were being used
        as a clandestine drug operation by squatters. The named insured loses coverage in the
        nursing-home scenario because she no longer &ldquo;resides&rdquo; at the property; in
        the squatter scenario the named insured is still arguably a resident, even if she is
        unaware of the criminal use, and the property is still the &ldquo;described
        location.&rdquo; The result &mdash; insurer pays in the criminal-use scenario but
        retains decades of premiums and pays nothing in the nursing-home scenario &mdash; is
        the kind of outcome that supports unconscionability and reasonable-expectations
        arguments in court.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Case Law: A Genuine Split Across Jurisdictions
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This issue has been litigated across the country, and the results are far from
        uniform. Courts have reached conflicting conclusions about whether &ldquo;where you
        reside&rdquo; is a condition of coverage or merely a descriptive identifier. The outcome
        often turns on the specific facts &mdash; particularly whether the insured maintained
        ties to the property, whether they rented it out, and whether the insurer knew about
        the change in living circumstances.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Courts That Found Coverage for the Policyholder
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong><em>Durkheimer v. Safeco</em> (D. Or. 2025):</strong> The Durkheimers owned
        homes in Portland, on the Oregon coast, and in Carmel, California, all insured by Safeco.
        During the January 2024 freeze, their Portland home suffered hundreds of thousands of
        dollars in water damage from burst pipes. Safeco raised an affirmative defense that the
        Durkheimers did not &ldquo;reside&rdquo; at the Portland home. On February 12, 2025,
        Magistrate Judge Stacie Beckerman recommended striking Safeco&rsquo;s affirmative defense,
        finding the &ldquo;residence premises&rdquo; language was <strong>intended to identify the
        property, not to create a coverage condition</strong>. On April 1, 2025, Judge Michael
        Simon adopted the recommendation and struck the defense as insufficient as a matter of law.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong><em>Lamonica v. Hartford Insurance Co. of the Midwest</em>, No. 5:19-cv-78
        (N.D. Fla. 2020):</strong> The plaintiff inherited his mother&rsquo;s home. He did not
        live there full-time but routinely returned, stayed at the house, and regarded it as the
        family homestead. Hartford denied a property claim, arguing the home was not his
        &ldquo;residence premises.&rdquo; The court denied Hartford&rsquo;s motion for summary
        judgment, holding that the policy does not require the home to be the insured&rsquo;s sole
        or even primary residence &mdash; &ldquo;any residence will do.&rdquo; The court
        distinguished this from cases where the insured rented out the property, noting that
        Lamonica never used it inconsistently with treating it as a permanent residence. The court
        also emphasized that Hartford had accepted premiums while knowing about the
        policyholder&rsquo;s living arrangement, invoking the doctrines of estoppel and waiver.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong><em>Dean v. Tower Insurance Co. of New York</em>, 19 N.Y.3d 1
        (N.Y. 2012):</strong> In this decision from New York&rsquo;s highest court, the Deans
        purchased a home and obtained a homeowner policy but had not yet moved in when damage
        occurred during renovations. Tower denied coverage because the Deans did not
        &ldquo;reside&rdquo; at the property. The Court of Appeals held that the term
        &ldquo;reside&rdquo; was <strong>not defined in the policy</strong>, making
        &ldquo;residence premises&rdquo; ambiguous under the circumstances. It reversed summary
        judgment for the insurer, finding the insured&rsquo;s reasonable expectations were
        relevant.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong><em>Craft v. New York Central Mutual Fire Insurance Co.</em> (N.Y. App. Div.
        3d Dep&rsquo;t, 2017):</strong> The plaintiff and her husband built their home in 1967.
        When the home was damaged by fire in 2014, the plaintiff&rsquo;s daughter-in-law was
        residing in the premises, but not the named insured. The court held that because the
        policy did not define &ldquo;reside,&rdquo; the term was ambiguous, and noted that
        <strong>a person can have more than one residence for insurance purposes</strong>.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong><em>Shank v. Safeco Insurance Co. of America</em>, No. 2:15-cv-09033
        (S.D. W. Va. 2016):</strong> A married couple owned their primary home and inherited a
        second home from a relative. They used the second home weekly &mdash; cooking, watching
        TV, using the workshop, collecting mail. A fire destroyed it. Safeco denied the claim
        based on the &ldquo;residence premises&rdquo; definition. The court ruled that Safeco&rsquo;s
        &ldquo;residence premises&rdquo; provision was <strong>more restrictive than permitted</strong> under
        West Virginia law. West Virginia requires fire policies to conform to the Standard Fire
        Policy, which only suspends coverage when a building has been &ldquo;vacant or unoccupied
        beyond a period of sixty consecutive days.&rdquo; Requiring &ldquo;residence&rdquo; imposed
        a stricter standard, and the court held Safeco breached the policy.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong><em>Lundquist v. Allstate Insurance Co.</em>, No. 2-99-0863 (Ill. App. 2d
        Dist. 2000):</strong> The Lundquists moved to Oregon but had not completed the sale of
        their Rockford, Illinois, home when a loss occurred. The policy defined &ldquo;dwelling&rdquo;
        as the structure &ldquo;where you reside.&rdquo; The Illinois Appellate Court held that
        while physical presence is a component of residence, the degree of presence required was
        unclear, making the provision <strong>subject to more than one reasonable interpretation
        and therefore ambiguous</strong>. Allstate could not deny coverage based on its definition
        of &ldquo;reside.&rdquo;
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong><em>Epstein v. Hartford Casualty Insurance Co.</em>, 566 So. 2d 331
        (Fla. 1st DCA 1990):</strong> The Florida First District Court of Appeal held that
        &ldquo;residence&rdquo; is ambiguous and does not require the property to be the
        insured&rsquo;s sole or primary residence.
      </p>

      <CalloutBox variant="tip" title="The Pattern in Pro-Coverage Decisions">
        <p>
          Courts that find coverage share several common threads: (1) the policy does not define
          &ldquo;reside,&rdquo; creating ambiguity that must be construed against the insurer;
          (2) a person can have more than one residence; (3) the insured maintained meaningful ties
          to the property; and (4) the insurer accepted premiums while knowing the insured&rsquo;s
          living situation. Any one of these arguments can be enough. Together, they are formidable.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Courts That Denied Coverage
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong><em>Pour v. Liberty Mutual Personal Insurance Co.</em>, No. 24-1824 (8th Cir.
        2025):</strong> The Eighth Circuit held that the &ldquo;where you reside&rdquo; language
        was a condition of coverage. The policyholder had relocated from Minnesota to Georgia,
        establishing a new primary residence in another state while maintaining the insured
        property. The court found that &ldquo;reside&rdquo; required physical presence and an
        intent to remain, and the claim was denied.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong><em>Arguelles v. Citizens Property Insurance Corp.</em>, 278 So. 3d 108
        (Fla. 3d DCA 2019):</strong> Arguelles owned a condominium insured by Citizens. At the
        time of a plumbing leak, he was living in New York and <strong>the condo was occupied by
        two tenants</strong>. The policy defined &ldquo;residence premises&rdquo; as &ldquo;the
        unit where you reside.&rdquo; The Third District Court of Appeal affirmed summary judgment
        for Citizens, finding the policy language unambiguous. The distinguishing factor:
        Arguelles was not merely absent from the property &mdash; he had rented it out, which is
        inconsistent with any reasonable claim of &ldquo;residing&rdquo; there.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong><em>American Risk Insurance Co. v. Serpikova</em>, 522 S.W.3d 497 (Tex. App.
        &mdash; Houston [14th Dist.] 2016, pet. denied):</strong> The Texas Court of Appeals
        ruled that coverage required the insured to reside at the property or intend to reside
        there within 60 days of the policy&rsquo;s effective date. Neither condition was met.
        The Texas Supreme Court denied the petition for review.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong><em>Adkisson v. Safeco Insurance Co. of Indiana</em>, No. 6:23-cv-00146
        (E.D. Tex. 2024):</strong> Adkisson owned a home in Longview, Texas, which suffered water
        damage during a historic freeze. He primarily lived in Godley, Texas, closer to his
        workplace. The Longview home was largely unfurnished &mdash; an air mattress, a TV, and
        minimal appliances. Utility usage was minimal. The court ruled for Safeco, finding
        Adkisson did not &ldquo;reside&rdquo; at the Longview property.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong><em>Davani v. Travelers Personal Insurance Co.</em>, No. 22-1244
        (D. Kan. 2023):</strong> The insured never actually lived at the insured premises. The
        court held that &ldquo;residence&rdquo; requires physical presence at the location and an
        intent to remain for an indefinite period. Summary judgment was granted for Travelers.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong><em>Heniser v. Frankenmuth Mutual Ins. Co.</em>, 534 N.W.2d 502, 449 Mich. 155
        (Mich. 1995):</strong> The insured had purchased a Honor, Michigan vacation home with
        his wife, retained possession after a divorce, and in November 1988{' '}
        <strong>sold the property on a land contract</strong>. The home was destroyed by fire
        in January 1989, after the sale. The insured nonetheless filed a claim under the
        homeowner policy that was still in force. The Michigan Supreme Court found the policy
        unambiguous and denied coverage, holding that the insured could not satisfy a residency
        requirement at a property he had already sold. The case is frequently cited in
        Michigan insurance law, but its facts &mdash; a completed sale on land contract
        &mdash; are well outside the ordinary nursing-home or temporary-absence pattern that
        drives the modern debate.
      </p>

      <CalloutBox variant="info" title="The Pattern in Denial Decisions">
        <p>
          Courts that deny coverage share their own pattern: (1) the insured had clearly and
          voluntarily relocated to a different primary residence; (2) the insured rented the
          property to tenants; (3) the property was largely unfurnished or showed minimal use; or
          (4) the insured never lived at the property at all. Note that none of these cases
          involve the sympathetic nursing home scenario &mdash; they involve voluntary relocation
          and, in some cases, conversion to a rental property. The distinction matters enormously.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The ISO Fix: Endorsements HO 06 48 and HO 06 49
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurance industry itself has acknowledged that the &ldquo;where you reside&rdquo;
        language creates an unfair coverage gap. In 2015, the Insurance Services Office (ISO)
        &mdash; the organization that drafts the standard policy forms used by most insurers
        &mdash; issued a countrywide revision to address the problem.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        HO 06 48: Residence Premises Definition Endorsement
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This <strong>mandatory</strong> endorsement, effective October 1, 2015 in most states,
        modifies the definition of &ldquo;residence premises&rdquo; so that the &ldquo;where you
        reside&rdquo; requirement is evaluated only <strong>&ldquo;on the inception date of the
        policy period shown in the Declarations.&rdquo;</strong> Once the policy incepts, the
        insured can move out &mdash; to a nursing home, to another state, anywhere &mdash; and
        the property remains a &ldquo;residence premises&rdquo; for the remainder of that policy
        period.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the most directly helpful development for the nursing home scenario. If the
        policyholder was residing at the home when the policy last renewed, coverage continues
        through the policy period even if a nursing home placement occurs mid-term.
      </p>

      <CalloutBox variant="warning" title="The HO 06 48 Limitation">
        <p>
          The HO 06 48 endorsement still requires residency <strong>at the inception of each
          policy period</strong>. If a policyholder has already been in a nursing home when the
          policy renews, and they were not residing at the property on the renewal date, the
          endorsement may not protect them. For policyholders already in care at renewal time,
          additional steps &mdash; discussed below &mdash; are critical.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        HO 06 49: Broadened Residence Premises Definition Endorsement
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This <strong>optional</strong> endorsement goes further. It allows the insurer and
        policyholder to designate specific starting and termination dates during which the
        residency requirement is suspended entirely. It was designed for situations where the
        owner does not reside at the home at policy inception &mdash; homes being remodeled,
        transitional periods, and, critically, <strong>extended nursing home or care facility
        placements</strong>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The availability of HO 06 49 varies by carrier and by state. Not all insurers offer it,
        and not all agents know to ask for it. But it exists, and it should be requested whenever
        a policyholder&rsquo;s living situation has changed or is expected to change.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Practical Guidance: How to Protect Yourself
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Whether you are a policyholder, a family member managing an elderly parent&rsquo;s
        affairs, an insurance agent, or a practitioner, this issue requires proactive attention.
        The following steps can significantly reduce the risk of a coverage denial based on the
        &ldquo;where you reside&rdquo; language.
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

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 1: Notify Your Agent Immediately
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The moment a homeowner is admitted to a nursing home, assisted living facility, or
        similar care facility &mdash; whether voluntarily or involuntarily &mdash; their
        insurance agent should be notified <strong>in writing</strong>. This is the single most
        important step. Written notification creates a record that the insurer was aware of the
        change in circumstances and continued to accept premiums. If a claim is later denied,
        this creates a powerful estoppel argument: having accepted premiums with knowledge of
        the situation, the insurer cannot disclaim coverage when it comes time to pay. Save
        every premium notice, payment confirmation, renewal letter, and correspondence.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 2: Request the Residence Premises Endorsements
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Ask your agent specifically about ISO endorsement <strong>HO 06 48</strong> (Residence
        Premises Definition) and <strong>HO 06 49</strong> (Broadened Residence Premises
        Definition). If HO 06 48 is already on the policy &mdash; it has been mandatory since
        2015 in most states &mdash; confirm that coverage is locked in through the current
        policy period. If the policyholder will still be in care at the next renewal, request
        HO 06 49 to suspend the residency requirement for a designated period.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 3: Consider Converting to a Dwelling Fire Policy
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the insurer will not add the broadened endorsement, or if the policyholder&rsquo;s
        move to a care facility is permanent, the property can be re-insured under a{' '}
        <strong>Dwelling Fire policy</strong> (DP-1 or DP-3) rather than a homeowner policy.
        Dwelling Fire policies do not require the named insured to reside at the property. They
        are the standard product for rental properties, seasonal homes, and unoccupied dwellings.
        The coverage may differ &mdash; often more limited liability coverage, and possibly
        named-perils rather than open-perils on a DP-1 &mdash; but the property protection
        remains in place. This is the recognized fallback when the homeowner policy becomes
        untenable due to a residency issue.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 4: Determine Whether a Family Member Still Resides in the Home
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If a spouse, adult child, or other family member continues to live at the insured
        property, the &ldquo;where you reside&rdquo; problem may not arise at all. Under many
        policy forms, an &ldquo;insured&rdquo; includes family members who reside in the
        household. If any insured still resides at the property, the residence premises
        definition remains satisfied. Even if the policy defines &ldquo;you&rdquo; as only the
        named insured and spouse, having a family member occupy the home strengthens the argument
        that the property remains a &ldquo;residence premises.&rdquo;
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 5: Maintain Evidence of Continuing Ties
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the homeowner cannot return to the property, maintain as many ties as possible:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Keep the home address as the legal and mailing address</li>
        <li>Maintain voter registration at the home address</li>
        <li>Keep belongings, furniture, and personal effects in the home</li>
        <li>Continue all utilities</li>
        <li>Have family members regularly maintain the property &mdash; mowing, snow removal, checking for issues</li>
        <li>Do <strong>not</strong> change the address on legal or financial documents</li>
        <li>Document the homeowner&rsquo;s stated intent to return</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the homeowner&rsquo;s health allows it, periodic returns to the home &mdash; even
        brief stays &mdash; can help establish an ongoing connection. However, courts have found
        that &ldquo;sporadic interactions&rdquo; may be insufficient when the insured has taken
        affirmative steps to disassociate from the property. Return visits should be genuine and
        documented.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 6: If You Rent the Property, Convert the Policy First
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Families often need rental income from the property to help pay for the care facility.
        That is understandable &mdash; but <strong>renting the property while maintaining a
        homeowner policy is the single biggest factor that courts use to rule against
        coverage</strong>. In <em>Arguelles</em>, the Florida court denied coverage specifically
        because the insured had rented out the property to tenants while keeping a homeowner
        policy. Once a property is rented under a homeowner policy, the insured has unambiguously
        stopped &ldquo;residing&rdquo; there, and the proscriptive interpretation becomes nearly
        impossible to overcome.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The solution is not to avoid renting altogether &mdash; it is to <strong>convert the
        insurance before placing tenants</strong>. If the family decides to rent the property:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Contact the insurance agent and obtain a landlord or dwelling fire
          policy</strong> (DP-1 or DP-3) <em>before</em> any tenant moves in. A landlord policy
          is designed for non-owner-occupied rental properties and does not contain the
          &ldquo;where you reside&rdquo; language.
        </li>
        <li>
          <strong>Cancel or replace the existing homeowner policy.</strong> Do not maintain the
          old homeowner policy in the elderly insured&rsquo;s name while renting to tenants. If a
          loss occurs, the insurer will deny the claim under the homeowner policy because the
          named insured does not reside there, and the family will have paid premiums on a
          worthless policy. The old homeowner policy must be replaced with the appropriate
          landlord or dwelling fire form.
        </li>
        <li>
          <strong>Consider requiring tenants to carry renter&rsquo;s insurance.</strong> A
          landlord policy covers the dwelling and the owner&rsquo;s liability, but it does not
          cover the tenant&rsquo;s personal property or the tenant&rsquo;s liability to others.
          Requiring tenants to carry an HO-4 renter&rsquo;s policy protects everyone.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The key point: renting is not fatal to the property being insured. It is fatal to a
        claim under a <em>homeowner</em> policy. Get the right policy for the right situation,
        and the property stays covered.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 7: Review the Vacancy Provisions Separately
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The &ldquo;where you reside&rdquo; issue is distinct from the 60-day vacancy exclusion
        that exists in most homeowner policies. Even if you win the residency argument, the
        insurer may assert the separate{' '}
        <Link href="/resources/exclusions" className="text-[#2E74B5] hover:underline">
          vacancy exclusion
        </Link>{' '}
        if the home has been unoccupied for an extended period. Some insurers offer a{' '}
        <strong>vacancy permit</strong> endorsement that extends coverage during periods of
        vacancy. This does not address the residence premises definition directly, but it
        prevents a separate vacancy-based denial. Review both provisions and address them
        independently.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 8: Transferring the Home Into a Trust &mdash; Estate Planning Meets Insurance
      </h3>

      <CalloutBox variant="warning" title="This Is a Complex Area Requiring Attorney Guidance">
        <p>
          The intersection of estate planning trusts and property insurance involves questions of
          property law, insurance coverage, insurable interest, and tax consequences that vary
          significantly by state. The discussion below is intended to identify the issues that
          families and practitioners need to be aware of &mdash; not to provide estate planning
          or legal advice. <strong>An attorney experienced in both estate planning and insurance
          coverage should be involved any time a home is being transferred into or out of a
          trust.</strong> The insurance agent must also be part of the conversation, because the
          policy must be updated to reflect the new ownership structure. Getting the estate plan
          right but the insurance wrong can be just as devastating as having no plan at all.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        Many families place an elderly parent&rsquo;s home into a trust as part of estate
        planning &mdash; often long before a nursing home placement becomes necessary. A common
        arrangement is a <strong>family trust</strong> or <strong>revocable living trust</strong>
        where the home is transferred to the trust, the original homeowner retains a{' '}
        <strong>life estate</strong> (the right to live in the property or receive rental income
        from it during their lifetime), and the remainder interest passes to the heirs upon the
        homeowner&rsquo;s death. This is a well-established estate planning tool that can help
        avoid probate, facilitate the orderly transfer of assets, and &mdash; in certain trust
        structures &mdash; assist with Medicaid planning.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        But the estate plan and the insurance policy exist in different universes, and a trust
        that works perfectly as an inheritance vehicle can create serious insurance problems if
        the policy is not updated to match.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Insurable Interest Trap
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the issue that catches the most families off guard. When a homeowner transfers
        their property into a trust but retains a life estate, something fundamental changes:
        <strong> the original homeowner no longer owns the property outright</strong>. They own a
        life estate &mdash; the right to use or occupy the property for the remainder of their
        lifetime. The trust (and ultimately the remainder beneficiaries &mdash; typically the
        heirs) holds the remainder interest. Together, the life estate and the remainder interest
        make up full ownership. Separately, neither one represents the full value of the home.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This matters enormously for insurance, because an insurer is only obligated to pay based
        on the named insured&rsquo;s <strong>insurable interest</strong> in the property. If
        the policy still names the original homeowner as the sole named insured, and a total loss
        occurs, the insurer may argue that the named insured&rsquo;s insurable interest is
        limited to the value of the life estate &mdash; not the full replacement cost of the
        dwelling. The value of a life estate is calculated actuarially, based on the life
        expectant&rsquo;s age. For an 85-year-old in a nursing home, the value of a life estate
        can be a small fraction of the property&rsquo;s full value.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The result: the family set up a trust to preserve the home for the heirs, kept paying
        premiums on the homeowner policy, and then discovered after a fire that the policy would
        only pay the actuarial value of the life estate &mdash; potentially tens or hundreds of
        thousands of dollars less than the cost to rebuild.
      </p>

      <CalloutBox variant="important" title="The Solution: Name the Trust as the Insured">
        <p>
          When a home is transferred into a trust, the <strong>trust must be named as the insured
          on the policy</strong> &mdash; not just the individual who used to own it. The trust
          holds the full ownership interest in the property (subject to the life estate), and
          the policy must reflect that. The named insured should be listed as something like
          &ldquo;Jane Doe, Trustee of the Jane Doe Family Trust&rdquo; or the trust entity
          itself, depending on the insurer&rsquo;s requirements. Both the life estate holder
          and the trust should have coverage &mdash; the specific structuring depends on the
          carrier and the policy form, which is why the insurance agent and the estate planning
          attorney need to coordinate. If only the individual is listed, the insurer has a
          textbook argument to limit recovery to the life estate value.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Trust Types and Their Insurance Implications
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Revocable living trust:</strong> The most common estate planning trust. The
        original homeowner (as grantor) can modify or revoke the trust at any time during their
        lifetime. Because the grantor retains control, most insurers will continue the homeowner
        policy with the trustee listed as the named insured. However, the &ldquo;where you
        reside&rdquo; problem still applies &mdash; the trust does not eliminate the residency
        requirement from a homeowner policy. If the grantor enters a nursing home and no one
        resides at the property, the same coverage gap exists regardless of the trust structure.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Irrevocable trust (including trusts with a retained life estate):</strong> This
        is where the insurable interest issue is most acute. The original homeowner has
        permanently transferred ownership to the trust and cannot take it back. If they retained
        a life estate, their interest in the property is limited to the right to use it during
        their lifetime &mdash; an interest that diminishes with age. The trust holds the
        remainder. <strong>The insurance must be rewritten with the trust as the named insured</strong>,
        and the policy type should reflect the actual occupancy status. If no one resides at the
        property, a dwelling fire policy (DP-1 or DP-3) naming the trust is the appropriate
        coverage. If a family member resides at the property, a homeowner policy naming the
        trust (with the residing family member as an insured) may work. This requires
        coordination between the elder law attorney and the insurance agent.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>In either case:</strong> When a property is transferred into a trust, the
        insurance agent must be notified immediately so the policy can be updated. If the
        policy still lists the individual as the named insured after the trust becomes the
        legal owner, the insurer may deny a claim on the basis that the named insured no
        longer has an insurable interest &mdash; or has only a limited one. This is a
        separate and additional coverage trap that compounds the &ldquo;where you reside&rdquo;
        problem.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Practical Steps When a Home Is in a Trust
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Update the named insured on the policy to reflect the trust.</strong> This
          should happen at the time of the trust transfer, not after a loss.
        </li>
        <li>
          <strong>If the original homeowner enters a care facility and no one will reside at
          the property:</strong> Convert to a dwelling fire policy with the trust as the named
          insured. This eliminates both the residency problem and the insurable interest problem
          in one step.
        </li>
        <li>
          <strong>If a successor trustee or family member will reside at the property:</strong>{' '}
          The insurer may allow a homeowner policy with the trust as the named insured and the
          residing family member as an additional insured. This satisfies the residency
          requirement while preserving the trust&rsquo;s full insurable interest.
        </li>
        <li>
          <strong>If the property will be rented out:</strong> A landlord or dwelling fire
          policy naming the trust as the insured is the correct product. Do not maintain a
          homeowner policy on a trust-owned rental property.
        </li>
        <li>
          <strong>Review the policy at every change in circumstance:</strong> Trust creation,
          nursing home admission, change of trustee, decision to rent, decision to leave the
          property vacant &mdash; each of these is a trigger to review and potentially restructure
          the insurance.
        </li>
        <li>
          <strong>Expect the insurer to request a copy of the trust document.</strong> This is
          normal and routine. When an insurer learns that a property is held in a trust &mdash;
          whether at the time of policy issuance, at renewal, or after a claim is filed &mdash;
          it will typically request a complete copy of the trust instrument. The insurer needs to
          verify who holds legal title, who the trustees and beneficiaries are, whether the trust
          is revocable or irrevocable, and what interest (if any) the original homeowner retained.
          All of this affects how the policy should be written and, after a loss, how the claim
          should be paid. Families should not be alarmed by this request, but they should be
          prepared for it &mdash; and they should understand that providing the trust document
          gives the insurer the information it needs to evaluate the insurable interest question.
          If there are concerns about the trust&rsquo;s terms or how they may affect coverage,
          have the estate planning attorney review the trust document with the insurance
          implications in mind <em>before</em> it is submitted.
        </li>
      </ul>

      <CalloutBox variant="info" title="The Bottom Line on Trusts">
        <p>
          A trust is an ownership structure, not an insurance product. It determines <em>who
          owns</em> the property, but the insurance policy determines <em>how the property is
          covered</em> and <em>whose interest is protected</em>. When these two are not
          coordinated, the family can end up with an estate plan that successfully avoids probate
          but an insurance policy that pays a fraction of the loss &mdash; or nothing at all.
          Every trust transfer should trigger a conversation between the estate planning attorney
          and the insurance agent, and the policy should be reviewed and updated before the
          transfer is finalized.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Additional Arguments for Practitioners
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Attorneys handling a denied claim based on this language should consider:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong><em>Contra proferentem</em>:</strong> The ambiguity in &ldquo;reside&rdquo;
          &mdash; which is not defined in the policy &mdash; must be resolved in favor of
          coverage. <em>Dean v. Tower</em> (N.Y. 2012) and <em>Lundquist v. Allstate</em>
          (Ill. 2000) both turned on this principle.
        </li>
        <li>
          <strong>Estoppel and waiver:</strong> If the insurer or its agent knew the
          policyholder was in a care facility and continued to accept premiums without
          disclaiming coverage, estoppel may bar the denial. <em>Lamonica</em> relied on this.
        </li>
        <li>
          <strong>Reasonable expectations:</strong> No reasonable policyholder expects that a
          medical emergency will immediately terminate property coverage on the home they have
          insured for decades.
        </li>
        <li>
          <strong>Standard Fire Policy conformity:</strong> In states that require conformity
          with the Standard Fire Policy, the &ldquo;residence premises&rdquo; requirement may
          be more restrictive than the statutory framework allows. <em>Shank v. Safeco</em>
          (S.D. W. Va. 2016) is the leading authority on this argument.
        </li>
        <li>
          <strong>Review the{' '}
          <Link href="/resources/declarations-page" className="text-[#2E74B5] hover:underline">
            declarations page
          </Link>
          :</strong> In some cases, the declarations page identifies the property by address
          alone without using the phrase &ldquo;residence premises.&rdquo; If the declarations
          page description does not incorporate the &ldquo;where you reside&rdquo; language,
          that is an additional argument against the insurer&rsquo;s position.
        </li>
      </ul>

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
        The case law is mixed, but the trend favors policyholders &mdash; particularly in cases
        involving involuntary absence, maintained ties to the property, and insurer knowledge of
        the living situation. Courts are increasingly reluctant to allow insurers to deny coverage
        based on definitional language that was never clearly disclosed as a condition of coverage.
        The doctrines of <em>contra proferentem</em>, reasonable expectations, estoppel, and
        unconscionability all weigh heavily in the policyholder&rsquo;s favor.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        ISO&rsquo;s 2015 endorsements &mdash; HO 06 48 and HO 06 49 &mdash; represent the
        industry&rsquo;s own acknowledgment that the original language was unfair. But these
        endorsements are not a complete fix. They require awareness, proactive requests, and in
        many cases agent involvement that may not happen without the policyholder or their family
        taking the initiative. State legislatures should consider legislation requiring insurers
        to notify policyholders that their coverage may be affected by a change in residency
        status. And insurance agents should affirmatively counsel their clients about this risk,
        particularly when clients are aging and may be approaching the point where a transition
        to a care facility is foreseeable.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Until those changes happen, the burden falls on policyholders and their advocates to
        identify this risk early, preserve their arguments, and push back hard when an insurer
        attempts to use three words in a definition to void decades of coverage.
      </p>

      <hr className="my-8 border-gray-300" />

      <CalloutBox variant="legal" title="Disclaimer">
        <p>
          This article is for general educational purposes only and does not constitute legal
          advice. Insurance policies and applicable law vary by state and by policy form. The
          case law discussed in this article reflects reported court decisions as of the date of
          publication, but outcomes in any individual case will depend on the specific policy
          language, the facts, and the applicable state law. Always consult with a licensed
          attorney in your jurisdiction about your specific situation.
        </p>
        <p className="mt-2">
          <strong>Author:</strong> Leland Coontz III, Licensed Public Adjuster, CA License #2B53445
        </p>
      </CalloutBox>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Coverage Denied Because You Moved to a Care Facility?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          If your insurer has denied a property claim because you or a family member no longer
          &ldquo;resides&rdquo; at the insured home, you may still have coverage. A licensed
          Public Adjuster can review your policy, document the facts that support coverage, and
          help you fight the denial.
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
