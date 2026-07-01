import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: "Estoppel, Waiver, and Promissory Estoppel in Claims",
  description:
    "How estoppel, waiver, and promissory estoppel can stop insurers from denying claims after their own conduct or promises led you to rely on coverage.",
  summary:
    'Equitable estoppel, waiver, and promissory estoppel can stop an insurer from denying a claim after its own conduct or promises led you to rely on coverage. They can bar a defense, though they generally cannot create coverage the policy never provided.',
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
        Insurance companies sometimes deny claims on grounds that, while technically valid
        under the policy language, contradict everything the insurer said and did during the
        claims process. An adjuster spends three months investigating a claim, requests
        documentation, hires experts, and never once mentions a coverage issue &mdash; then
        the carrier issues a denial based on a policy condition that existed from day one.
        An insurer learns that a policyholder made a misrepresentation on the application
        but continues accepting premiums for years &mdash; then tries to rescind the policy
        after a large claim is filed. A claims representative tells the policyholder that a
        particular type of damage is covered, the policyholder acts in reliance on that
        representation, and the carrier later reverses its position.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In each of these scenarios, the doctrines of estoppel and waiver may prevent the
        insurer from enforcing the denial. These are equitable doctrines rooted in a simple
        principle: an insurance company should not be permitted to benefit from its own
        inconsistent conduct at the expense of a policyholder who relied on that conduct in
        good faith.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Estoppel: When the Insurer&rsquo;s Conduct Creates Coverage
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Estoppel in the insurance context operates when an insurer&rsquo;s representations
        or conduct lead the policyholder to reasonably believe that coverage exists or that
        a particular defense will not be raised, and the policyholder relies on that belief
        to their detriment. The effect of estoppel is to prevent the insurer from asserting
        a position that contradicts its prior conduct &mdash; even if that position would
        otherwise be valid under the policy.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The elements of estoppel in insurance disputes generally require:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          The insurer made a representation or engaged in conduct that communicated a
          particular position regarding coverage or a coverage defense.
        </li>
        <li>
          The policyholder was unaware of the true facts (or unaware that the insurer
          intended to take a different position).
        </li>
        <li>
          The policyholder reasonably relied on the insurer&rsquo;s representation or
          conduct.
        </li>
        <li>
          The policyholder suffered detriment as a result of that reliance &mdash; meaning
          the policyholder changed their position in a way that would cause harm if the
          insurer were allowed to reverse course.
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Estoppel Under California Law
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        California courts recognize equitable estoppel in insurance disputes, but the
        doctrine has important limitations. The central requirement is detrimental reliance:
        the policyholder must demonstrate that they changed their position based on the
        insurer&rsquo;s representation and that they would be harmed if the insurer were
        permitted to take a contrary position. A policyholder who received an oral
        assurance of coverage and then incurred expenses in reliance on that assurance has
        a stronger estoppel argument than one who simply received a vague statement and
        took no action based on it.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        California courts have also recognized that estoppel generally cannot be used to
        create coverage that does not exist under the policy. This is an important
        distinction. If the policy unambiguously excludes a particular type of loss,
        estoppel typically cannot override that exclusion to create coverage. However, if
        the insurer&rsquo;s conduct led the policyholder to forego other options &mdash;
        such as purchasing additional coverage, pursuing alternative remedies, or taking
        steps to mitigate the loss within a time limit &mdash; estoppel may prevent the
        insurer from enforcing the exclusion because the policyholder was prejudiced by
        the insurer&rsquo;s conduct.
      </p>

      <CalloutBox variant="important" title="Estoppel Does Not Create Coverage Out of Thin Air">
        <p>
          In most jurisdictions, including California, estoppel cannot be used to create
          insurance coverage where none exists under the policy. The doctrine is more
          commonly applied to prevent an insurer from raising a defense (such as late
          notice, a policy condition, or a forfeiture provision) that the insurer&rsquo;s
          own conduct led the policyholder to believe would not be raised. The distinction
          matters: estoppel is a shield against inconsistent insurer conduct, not a sword
          to manufacture coverage.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Waiver: When the Insurer Voluntarily Gives Up a Right
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Waiver is distinct from estoppel, though the two doctrines are frequently raised
        together. Waiver is the voluntary relinquishment of a known right. In the insurance
        context, waiver occurs when an insurer knows about a defense or coverage issue and,
        through its conduct, intentionally or impliedly gives up the right to assert it.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Unlike estoppel, waiver does not require detrimental reliance by the policyholder.
        The focus is on the insurer&rsquo;s conduct, not the policyholder&rsquo;s reliance.
        If the insurer knew about a basis for denial and chose not to assert it &mdash; or
        acted in a way inconsistent with asserting it &mdash; the insurer may be deemed to
        have waived that defense.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Common examples of waiver in insurance disputes include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Accepting premiums after learning of a misrepresentation:</strong> If
          an insurer discovers that the policyholder made a material misrepresentation on
          the application but continues to accept premium payments, the insurer may have
          waived its right to rescind the policy based on that misrepresentation.
        </li>
        <li>
          <strong>Investigating a claim without reserving rights:</strong> If an insurer
          conducts a full investigation of a claim without issuing a{' '}
          <Link href="/resources/reservation-of-rights" className="text-[#2E74B5] underline">
            reservation of rights
          </Link>{' '}
          letter, and then denies the claim on a coverage ground it knew about from the
          beginning, the insurer may have waived that defense.
        </li>
        <li>
          <strong>Making partial payments:</strong> If an insurer makes partial payments
          on a claim without reserving rights to deny the remaining amount, the payments
          may constitute a waiver of coverage defenses that existed at the time the
          payments were made.
        </li>
        <li>
          <strong>Continuing coverage after a policy violation:</strong> If the insurer
          learns that the policyholder has violated a policy condition (such as a vacancy
          provision or a condition regarding use of the property) and continues the policy
          without objection, the insurer may have waived its right to deny coverage based
          on that violation.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Estoppel and Waiver Differ
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        While estoppel and waiver often arise in the same factual scenarios, they are
        legally distinct:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Focus:</strong> Estoppel focuses on the policyholder&rsquo;s reliance.
          Waiver focuses on the insurer&rsquo;s conduct.
        </li>
        <li>
          <strong>Reliance requirement:</strong> Estoppel requires the policyholder to have
          relied on the insurer&rsquo;s conduct to their detriment. Waiver does not require
          reliance &mdash; only that the insurer voluntarily relinquished a known right.
        </li>
        <li>
          <strong>Knowledge:</strong> Both doctrines generally require that the insurer had
          knowledge of the relevant facts. An insurer cannot waive a right it did not know
          it had, and estoppel does not apply if the insurer&rsquo;s conduct was based on
          ignorance of the true facts.
        </li>
        <li>
          <strong>Intent:</strong> Waiver requires some element of intent (or at least
          conduct so inconsistent with preserving the right that intent can be inferred).
          Estoppel is based on the effect of the insurer&rsquo;s conduct on the policyholder,
          regardless of the insurer&rsquo;s subjective intent.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Promissory Estoppel: When the Carrier&rsquo;s Promise Creates an Obligation
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Promissory estoppel is a distinct doctrine from equitable estoppel, and it operates
        differently in important ways. While equitable estoppel prevents a party from
        asserting a position that contradicts its prior conduct, promissory estoppel enforces
        a <em>promise</em> &mdash; even in the absence of a formal contract &mdash; when the
        promisor should have expected the promisee to rely on it, and the promisee did rely
        on it to their detriment.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under California law, the elements of promissory estoppel are:
      </p>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          A <strong>clear and unambiguous promise</strong> by the insurer (or its agent).
        </li>
        <li>
          The insurer should have <strong>reasonably expected</strong> the promise to induce
          action or forbearance by the policyholder.
        </li>
        <li>
          The policyholder <strong>actually relied</strong> on the promise.
        </li>
        <li>
          <strong>Injustice can only be avoided</strong> by enforcing the promise.
        </li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        The critical difference: promissory estoppel can create an enforceable obligation
        where none previously existed. Unlike equitable estoppel &mdash; which most courts
        say cannot &ldquo;create coverage&rdquo; &mdash; promissory estoppel is rooted in
        the law of contracts (Restatement (Second) of Contracts &sect; 90), and its remedy
        is enforcement of the promise itself or damages measured by the promisee&rsquo;s
        reliance. This makes it a potentially more useful tool for policyholders in
        situations where the carrier&rsquo;s promise goes beyond what the policy provides.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        How Carriers Create Promissory Estoppel Exposure
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance companies and their representatives make promises to policyholders
        constantly &mdash; during the application process, at the time of a claim, and
        throughout the claims handling process. When those promises are specific enough to
        be enforceable and the policyholder relies on them, the carrier may find itself
        bound to a commitment it never intended to make.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Common scenarios include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Promises of specific coverage during the sale:</strong> An agent tells
          the prospective policyholder, &ldquo;Yes, your home business is covered under
          this homeowner&rsquo;s policy,&rdquo; when in fact the policy contains a business
          use exclusion. The policyholder relies on the promise and does not purchase a
          separate commercial policy. When a loss occurs and the carrier invokes the
          exclusion, the policyholder can argue that the carrier is bound by its agent&rsquo;s
          promise under promissory estoppel.
        </li>
        <li>
          <strong>Promises regarding claim coverage:</strong> An adjuster or claims
          representative reviews the damage and tells the policyholder, &ldquo;This looks
          like it&rsquo;s covered &mdash; go ahead and start the remediation.&rdquo; The
          policyholder hires contractors and incurs significant expense. When the carrier
          later denies the claim, the policyholder has a promissory estoppel argument based
          on the adjuster&rsquo;s promise and the expenses incurred in reliance on it.
        </li>
        <li>
          <strong>Promises to extend deadlines:</strong> The carrier tells the policyholder
          not to worry about the proof of loss deadline or that the insurer will work with
          them on timing. The policyholder refrains from filing within the contractual
          deadline in reliance on the carrier&rsquo;s assurance. The carrier then denies the
          claim for late submission.
        </li>
        <li>
          <strong>Promises regarding policy renewal:</strong> The carrier assures the
          policyholder that the policy will be renewed, and the policyholder refrains from
          shopping for alternative coverage. The carrier then non-renews the policy,
          leaving the policyholder without coverage during a critical period.
        </li>
        <li>
          <strong>Promises regarding claim processing:</strong> The carrier promises to
          process and resolve the claim within a certain timeframe, inducing the
          policyholder to forego filing a lawsuit. The limitations period expires while the
          policyholder waits for the promised resolution.
        </li>
      </ul>

      <CalloutBox variant="important" title="The Promise Must Be Clear and Definite">
        <p>
          Not every statement by an insurer or its agent rises to the level of a promise
          sufficient for promissory estoppel. Vague assurances (&ldquo;we&rsquo;ll take
          care of you&rdquo; or &ldquo;don&rsquo;t worry about it&rdquo;) may be
          insufficient. The promise must be clear enough that the promisor should
          reasonably have expected it to induce reliance. This is why documenting the
          carrier&rsquo;s specific statements &mdash; in writing, immediately after they are
          made &mdash; is so critical. A confirmed-in-writing promise is far harder for the
          carrier to deny or characterize as vague after the fact.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Promissory Estoppel vs. Equitable Estoppel
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The distinction between these two doctrines is not merely academic &mdash; it
        determines what remedy the policyholder can obtain and whether the doctrine can
        effectively create coverage.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Source:</strong> Equitable estoppel arises from conduct or
          representations. Promissory estoppel arises from a specific promise.
        </li>
        <li>
          <strong>Coverage creation:</strong> Equitable estoppel generally cannot create
          coverage where none exists in the policy. Promissory estoppel can potentially
          create an enforceable obligation equivalent to coverage, because the remedy is
          enforcement of the promise or reliance damages.
        </li>
        <li>
          <strong>Remedy:</strong> Equitable estoppel prevents the insurer from asserting a
          defense. Promissory estoppel can enforce the promise as if it were a contractual
          obligation, or alternatively limit recovery to the policyholder&rsquo;s actual
          reliance damages (the out-of-pocket costs incurred based on the promise).
        </li>
        <li>
          <strong>Intent:</strong> Equitable estoppel does not require that the insurer
          intended the policyholder to rely on its conduct. Promissory estoppel requires
          that the promisor should have <em>reasonably expected</em> the promise to induce
          reliance.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Can These Doctrines Create Coverage?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is one of the most frequently debated questions in insurance law, and the
        answer is more nuanced than most carriers would like policyholders to believe. The
        standard insurer refrain is that &ldquo;estoppel cannot create coverage.&rdquo; That
        statement is only partially true, and in some situations, it is misleading.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Majority Rule: Equitable Estoppel Cannot Create Coverage
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most jurisdictions, including California, hold that equitable estoppel cannot be
        used to create coverage that does not exist under the policy terms. In{' '}
        <em>Waller v. Truck Ins. Exchange</em> (1995) 11 Cal.4th 1, the California
        Supreme Court stated that the doctrines of waiver and estoppel cannot &ldquo;be
        used to create a coverage not provided for in the insurance policy.&rdquo; This
        remains the general rule.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        But that rule is far narrower than carriers present it. Here is what the rule
        actually means &mdash; and what it does not mean:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>What the rule means:</strong> If a policy unambiguously excludes a
          particular type of loss, and the policyholder was never told otherwise, equitable
          estoppel alone cannot override the exclusion to create coverage for that loss.
        </li>
        <li>
          <strong>What the rule does not mean:</strong> It does not mean that an insurer
          can make promises about coverage, induce reliance, and then hide behind the
          policy language with impunity. It does not mean that waiver and estoppel are
          powerless in coverage disputes. And it does not mean that the insurer can engage
          in months of claims handling without a reservation of rights and then claim it
          never agreed to provide coverage.
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Thin Line Between &ldquo;Creating&rdquo; and &ldquo;Preserving&rdquo; Coverage
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        In practice, the distinction between creating coverage and preventing forfeiture of
        coverage is far thinner than the legal maxim suggests. Consider: a policy covers
        fire damage but excludes losses in &ldquo;vacant&rdquo; buildings. The insurer knew
        the building was vacant when it issued the policy and collected premiums. A fire
        occurs. The insurer invokes the vacancy exclusion.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The policyholder is not asking the insurer to cover an uninsured peril. The peril
        (fire) is covered. The policyholder is asking the court to prevent the insurer from
        enforcing an exclusion it knowingly waived by issuing the policy and accepting
        premiums in the first place. The insurer will frame this as &ldquo;creating
        coverage.&rdquo; The policyholder should frame it as preventing forfeiture of
        existing coverage based on a condition the insurer itself chose to overlook.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Promissory Estoppel: The Exception That Can Create Coverage
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Where equitable estoppel stops short, promissory estoppel can potentially go
        further. Because promissory estoppel enforces a <em>promise</em> as a substitute
        for contractual consideration, it is not limited by the rule that estoppel cannot
        create coverage. If the carrier&rsquo;s agent promised that a particular loss would
        be covered, and the policyholder relied on that promise to their detriment (by not
        purchasing other coverage, by proceeding with repairs, by foregoing other remedies),
        the court can enforce the promise regardless of what the policy says.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The remedy in promissory estoppel may be full enforcement of the promise (treating
        it as if the coverage existed) or may be limited to reliance damages (the actual
        losses the policyholder incurred because of the reliance). Courts have discretion
        to fashion the remedy that avoids injustice, which means the outcome is
        fact-specific. But the point is that promissory estoppel is not subject to the
        same categorical limitation that equitable estoppel faces.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Agent Authority and the Creation of Coverage
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A related theory that frequently overlaps with promissory estoppel involves the
        authority of the insurance agent. Under California law, an insurer is bound by the
        acts of its agents within the scope of the agent&rsquo;s actual or{' '}
        <em>ostensible</em> authority (Cal. Ins. Code &sect; 1704). If an agent with
        binding authority represents that a policy provides certain coverage, and the
        insured relies on that representation, the insurer may be bound by the
        representation under agency principles &mdash; effectively creating the coverage
        the agent described, even if the written policy does not match.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Carriers routinely attempt to disclaim their agents&rsquo; representations by
        pointing to policy language stating that only written endorsements can modify
        coverage. But California courts have held that these &ldquo;merger clauses&rdquo;
        do not necessarily defeat an estoppel or agency argument, particularly when the
        insured had no reason to know that the agent&rsquo;s representations were
        inconsistent with the policy. The policyholder is not a party to the agreement
        between the insurer and its agent regarding the agent&rsquo;s authority &mdash;
        the policyholder reasonably relied on what the agent said, and the insurer
        placed the agent in a position to make those representations.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The FAIR Plan Exception: When the &ldquo;Agent&rdquo; Is Not the Carrier&rsquo;s Agent
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The agency theory described above has an important limitation that applies to the{' '}
        <Link href="/resources/california-fair-plan" className="text-[#2E74B5] underline">
          California FAIR Plan
        </Link>. Unlike traditional insurers, the FAIR Plan does not have agents. The FAIR
        Plan itself states that it &ldquo;does not endorse or recommend any agents or
        brokers&rdquo; and has no agents or brokers of its own. Instead, it accepts
        applications from licensed brokers who &ldquo;represent applicants and insureds in
        obtaining insurance.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This distinction is legally significant. Under California Insurance Code sections 31
        and 33, an insurance <em>agent</em> acts &ldquo;by and on behalf of&rdquo; the
        insurer, while an insurance <em>broker</em> acts &ldquo;on behalf of another
        person&rdquo; (the insured) but &ldquo;not on behalf of&rdquo; the insurer. Section
        1623(c) creates a statutory presumption that a licensee is acting as a broker when
        licensed as a broker and transacting on behalf of the consumer. Section 1731
        reinforces this: a licensee is deemed an agent only in transactions &ldquo;placed
        with those insurers for whom a notice of appointment has been filed.&rdquo; Because
        the FAIR Plan does not appoint agents, brokers who write FAIR Plan policies are
        brokers of the insured &mdash; not agents of the FAIR Plan.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The practical consequence is that a broker&rsquo;s representations about FAIR Plan
        coverage generally cannot be imputed to the FAIR Plan under standard agency
        principles. In <em>Thompson v. California FAIR Plan Association</em> (1990) 221
        Cal.App.3d 760, the court recognized that the broker &ldquo;acted as agent
        for&rdquo; the insured when applying for FAIR Plan insurance &mdash; not as an
        agent of the FAIR Plan. Read alongside Insurance Code &sect;&sect; 31, 33, 1623(c),
        and 1731, the result is that brokers who write FAIR Plan policies are statutorily
        deemed the insured&rsquo;s agents, not the FAIR Plan&rsquo;s, unless the FAIR Plan
        has filed a notice of appointment for that licensee (which, as the FAIR Plan itself
        states, it does not).
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This means that if a broker tells a FAIR Plan applicant that the policy covers a
        particular type of loss, and the policy does not, the policyholder&rsquo;s
        promissory estoppel or agency argument runs against the <em>broker</em>, not the
        FAIR Plan. The FAIR Plan will argue &mdash; with statutory support &mdash; that
        the broker was the policyholder&rsquo;s own agent and that the FAIR Plan is not
        bound by what the broker said.
      </p>

      <CalloutBox variant="warning" title="FAIR Plan Policyholders: Know the Limitation">
        <p>
          If you are insured through the California FAIR Plan, understand that your broker
          is legally your agent, not the FAIR Plan&rsquo;s. If your broker made
          representations about coverage that turned out to be wrong, your remedies may lie
          against the broker (for negligence or errors and omissions) rather than against the
          FAIR Plan through estoppel. This does not leave you without recourse &mdash; but it
          changes who the responsible party is. Document your broker&rsquo;s representations
          carefully, because the broker&rsquo;s E&amp;O insurance may be the avenue for
          recovery if the FAIR Plan&rsquo;s policy does not cover the loss.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Adjuster Promises: Who Said It Matters
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        One of the most common scenarios in promissory estoppel and coverage disputes
        involves promises made by claims adjusters. An adjuster inspects the damage, reviews
        the policy, and tells the policyholder that the loss is covered. The policyholder
        relies on that statement and proceeds accordingly. When the carrier later denies
        the claim, the policyholder asks: is the carrier bound by what its adjuster said?
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The answer depends on what kind of adjuster made the statement.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Staff Adjusters: Their Statements Bind the Carrier
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Staff adjusters are employees of the insurance company. Their conduct is imputed to
        the insurer under respondeat superior &mdash; the legal principle that an employer
        is responsible for the acts of its employees performed within the scope of
        employment. When a staff adjuster tells a policyholder that a loss is covered, that
        statement carries the weight of the carrier itself.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In <em>Egan v. Mutual of Omaha Insurance Co.</em> (1979) 24 Cal.3d 809, the
        California Supreme Court held that when insurance company adjusters &ldquo;dispose
        of insureds&rsquo; claims with little if any supervision,&rdquo; they possess
        sufficient discretion for the law to treat their actions as the actions of the
        corporation itself. The court deemed the adjuster a &ldquo;managerial
        employee&rdquo; whose wrongful acts could be imputed to the carrier &mdash;
        including for purposes of punitive damages. This means that a staff adjuster who
        makes a coverage promise is not speaking only for themselves; they are speaking for
        the carrier, and the carrier bears the consequences of that promise.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Independent Adjusters: A Different Analysis
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Independent adjusters are third-party contractors hired by the insurer to
        investigate and evaluate claims. Their role is generally advisory and
        investigative &mdash; they gather facts and make recommendations, but the insurer
        retains the ultimate authority to grant or deny coverage.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In <em>Sanchez v. Lindsey Morden Claims Services, Inc.</em> (1999) 72 Cal.App.4th
        249, the court held that an independent adjuster owes no duty of care to the insured
        and cannot be held liable in tort for negligent claims handling that causes only
        economic loss. The rationale was that independent adjusters have no contract with the
        insured and no ability to define the insured&rsquo;s risks.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This means that an independent adjuster&rsquo;s statements about coverage are
        generally not imputed to the insurer in the same way a staff adjuster&rsquo;s
        statements are. The independent adjuster does not have inherent authority to bind the
        carrier on coverage questions. A policyholder relying on an independent
        adjuster&rsquo;s coverage representation has a weaker estoppel argument against the
        carrier than one relying on a staff adjuster&rsquo;s representation.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        <em>Bock v. Hansen</em>: Adjusters Can Be Personally Liable for Misrepresentation
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Regardless of whether an adjuster&rsquo;s statements bind the carrier for estoppel
        purposes, there is another avenue available to policyholders. In <em>Bock v.
        Hansen</em> (2014) 225 Cal.App.4th 215, the California Court of Appeal held for
        the first time that an insurance adjuster &mdash; including a staff adjuster &mdash;
        can be sued <em>personally</em> for negligent misrepresentation for falsely
        characterizing the scope of coverage during the adjustment of a loss.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In <em>Bock</em>, a tree fell on the insureds&rsquo; home. The adjuster removed
        debris before photographing the damage and told the insureds their policy did not
        cover cleanup costs. That was false &mdash; the policy provided additional debris
        removal coverage. The court held that the adjuster could be personally liable for
        negligent misrepresentation, which requires: (1) a misrepresentation of a past or
        existing material fact; (2) made without reasonable grounds for believing it true;
        (3) made with intent to induce reliance; (4) justifiable reliance by the insured;
        and (5) resulting damage.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The <em>Bock</em> decision is significant because it gives policyholders a cause of
        action that operates independently of whether estoppel can &ldquo;create&rdquo;
        coverage. Even if a court determines that the adjuster&rsquo;s promise cannot
        override the policy language through estoppel, the policyholder may still recover
        damages from the adjuster (and by extension, from the carrier through respondeat
        superior if the adjuster is a staff employee) for the misrepresentation itself.
        Subsequent cases have reinforced this principle, applying <em>Bock</em> to
        statements about actual cash value, appraisal rights, and other coverage
        determinations.
      </p>

      <CalloutBox variant="tip" title="Identify the Adjuster">
        <p>
          When dealing with a claims adjuster, determine whether the person is a staff
          employee of the carrier or an independent adjuster hired for the assignment. Ask
          directly: &ldquo;Are you an employee of [carrier name], or are you with an
          independent adjusting firm?&rdquo; Document the answer. This distinction affects
          what legal theories are available if the adjuster makes a representation that the
          carrier later repudiates. A staff adjuster&rsquo;s promise carries more legal
          weight against the carrier. An independent adjuster&rsquo;s promise may limit your
          remedy to a claim against the adjuster personally or their firm.
        </p>
      </CalloutBox>

      <CalloutBox variant="warning" title="The Carrier Will Argue the Promise Was Not Specific Enough">
        <p>
          When confronted with a promissory estoppel claim, the carrier&rsquo;s most
          common defense is to argue that no clear promise was made &mdash; that the
          adjuster&rsquo;s statement was a preliminary assessment, not a commitment. This
          is why the specificity of the promise and the quality of the documentation
          matter enormously. An adjuster who says &ldquo;it looks like this should be
          covered&rdquo; has given a weaker basis for promissory estoppel than one who
          says &ldquo;yes, this is covered under your policy &mdash; go ahead and start
          the repairs.&rdquo; Policyholders should confirm these statements in writing
          immediately, because the carrier will recharacterize the promise in hindsight
          if given the opportunity.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Reservation of Rights Letter: The Insurer&rsquo;s Shield
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The{' '}
        <Link href="/resources/reservation-of-rights" className="text-[#2E74B5] underline">
          reservation of rights letter
        </Link>{' '}
        exists precisely because of the doctrines of estoppel and waiver. When an insurer
        investigates a claim and wants to preserve the right to later deny coverage, it sends
        a reservation of rights letter identifying the specific coverage issues it is
        reserving. This letter is designed to prevent the insurer&rsquo;s investigation from
        being construed as an acceptance of coverage or a waiver of defenses.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A properly issued reservation of rights letter can significantly weaken a
        policyholder&rsquo;s estoppel or waiver argument. If the insurer clearly
        communicated that it was investigating the claim while reserving the right to deny
        on specific grounds, the policyholder has a much harder time arguing that the
        insurer&rsquo;s investigation led them to believe coverage would be provided.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        However, the reservation of rights letter is not a universal shield. If the letter
        is vague, untimely, or does not identify the specific defense the insurer later
        relies upon, it may not protect the insurer. A reservation of rights letter issued
        months into an investigation, after the insurer has already requested documentation
        and engaged experts without any mention of a coverage issue, may be insufficient to
        overcome an estoppel or waiver argument. The timing and specificity of the letter
        matter enormously.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Practical Examples
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Extended Investigation Followed by a Technicality Denial
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A homeowner files a claim for fire damage. The insurer assigns an adjuster who
        inspects the property, requests documentation, hires a cause-and-origin expert,
        and obtains repair estimates. The investigation takes four months. Throughout this
        period, the adjuster communicates regularly with the policyholder, requests receipts
        for damaged personal property, and discusses the scope of repairs &mdash; all
        without any mention of a coverage issue. At the end of four months, the insurer
        denies the claim based on a policy condition that the policyholder failed to
        maintain a monitored alarm system, a condition that was apparent from the beginning
        of the investigation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In this scenario, the policyholder has a strong argument that the insurer waived
        the alarm-condition defense by conducting a full investigation without reserving
        rights on that issue. The policyholder may also argue estoppel: the insurer&rsquo;s
        conduct led the policyholder to believe the claim would be paid, and the policyholder
        relied on that belief (for example, by entering into repair contracts or declining
        to pursue other remedies within the time available).
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Oral Coverage Representation
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A policyholder calls the insurer after a{' '}
        <Link href="/resources/claims-process" className="text-[#2E74B5] underline">
          loss
        </Link>{' '}
        to ask whether the damage is covered. The claims representative reviews the policy
        and tells the policyholder that the damage appears to be covered and to proceed
        with emergency repairs. The policyholder hires a contractor and incurs $15,000 in
        emergency mitigation costs. Two weeks later, the insurer sends a denial letter
        stating that the loss is excluded under the policy. The policyholder has now
        incurred $15,000 in expenses that they would not have incurred &mdash; or would
        have handled differently &mdash; absent the insurer&rsquo;s representation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is a classic estoppel scenario. The insurer made a representation (coverage
        applies), the policyholder relied on it (proceeded with repairs), and the
        policyholder was harmed by the reliance (incurred expenses). Whether the estoppel
        argument succeeds will depend on the specific facts &mdash; including whether the
        representation was specific enough, whether the policyholder&rsquo;s reliance was
        reasonable, and whether the policyholder can prove the representation was made
        (which shows the importance of documenting all communications with the
        insurer in writing).
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Continued Premium Acceptance After Knowledge of Misrepresentation
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        During an investigation, an insurer discovers that the policyholder failed to
        disclose a prior claim on the insurance application. The insurer could rescind the
        policy based on this misrepresentation, but instead it continues the policy,
        accepts the next premium payment, and says nothing. When a subsequent loss occurs,
        the insurer attempts to rescind the policy based on the original misrepresentation.
        The continued acceptance of premiums after learning of the misrepresentation is
        strong evidence of waiver &mdash; the insurer knew about the defense and chose
        not to act on it.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Agent Who Promised Flood Coverage
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A homeowner purchasing a property near a waterway asks the insurance agent whether
        the policy covers flood damage. The agent reviews the property and tells the
        homeowner, &ldquo;Yes, you&rsquo;re covered for flooding &mdash; this policy has
        you fully protected.&rdquo; In reliance on this promise, the homeowner does not
        purchase a separate National Flood Insurance Program (NFIP) policy. Three years
        later, a flood damages the home. The insurer denies the claim because the
        homeowner&rsquo;s policy contains a standard flood exclusion.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The policyholder has a strong promissory estoppel claim. The agent made a clear
        and specific promise (&ldquo;you&rsquo;re covered for flooding&rdquo;), the
        carrier should have expected the homeowner to rely on it (the homeowner asked the
        question specifically to determine whether to purchase separate coverage), the
        homeowner did rely on it (did not purchase NFIP coverage), and injustice would
        result if the promise is not enforced (the homeowner has an uninsured flood loss
        that would have been covered had the agent&rsquo;s promise not induced reliance).
        The homeowner may also assert an agency theory: the agent had ostensible authority
        to describe the policy&rsquo;s coverage, and the carrier is bound by what its
        agent represented.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Carrier That Promised to Extend the Filing Deadline
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A policyholder suffers a loss and contacts the carrier. The adjuster tells the
        policyholder that the proof of loss can be submitted &ldquo;whenever you have
        everything together &mdash; there&rsquo;s no rush.&rdquo; The policyholder, who
        is dealing with displacement and family disruption, takes the adjuster at their
        word and submits the proof of loss three months after the contractual deadline.
        The carrier denies the claim for untimely submission.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This involves both promissory estoppel and equitable estoppel. The adjuster&rsquo;s
        statement was a promise that the deadline would not be enforced, and the
        policyholder relied on it by not submitting within the contractual period. Under
        equitable estoppel, the carrier is estopped from raising the late-filing defense
        because its own conduct induced the delay. Under promissory estoppel, the
        carrier&rsquo;s promise to accept a late filing is enforceable because the
        policyholder relied on it to their detriment.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Using Estoppel Affirmatively as a Policyholder
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Policyholders can strengthen potential estoppel and waiver arguments through
        proactive documentation:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Confirm oral representations in writing:</strong> If an adjuster or
          claims representative makes a statement about coverage, follow up with an email
          or letter confirming the conversation. &ldquo;This confirms our conversation of
          [date] in which you stated that the damage to the roof appears to be covered
          under my policy and that I should proceed with emergency repairs.&rdquo;
        </li>
        <li>
          <strong>Document the timeline:</strong> Keep a detailed record of every
          communication with the insurer, including dates, names of representatives,
          and the substance of each conversation. The longer the insurer investigates
          without raising a coverage issue, the stronger the waiver argument.
        </li>
        <li>
          <strong>Track actions taken in reliance:</strong> If the policyholder incurs
          expenses, enters into contracts, or takes other actions based on the
          insurer&rsquo;s representations, those actions should be documented. Receipts,
          contracts, and correspondence showing that the policyholder acted in reliance
          on the insurer&rsquo;s position are essential evidence for estoppel.
        </li>
        <li>
          <strong>Challenge late reservations of rights:</strong> If the insurer sends a
          reservation of rights letter months into the investigation, the policyholder
          should respond noting the delay and the actions already taken in reliance on
          the insurer&rsquo;s prior conduct. This preserves the argument that the
          reservation came too late to be effective.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Statute of Limitations Implications
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Estoppel can also affect the{' '}
        <Link href="/resources/california-claim-deadlines" className="text-[#2E74B5] underline">
          statute of limitations
        </Link>{' '}
        in insurance disputes. If an insurer&rsquo;s conduct leads the policyholder to
        believe that the claim is being actively processed and will be resolved, and the
        policyholder refrains from filing a lawsuit in reliance on that belief, the
        insurer may be estopped from asserting a statute of limitations defense. This
        scenario arises when insurers engage in{' '}
        <Link href="/resources/insurance-delay-tactics" className="text-[#2E74B5] underline">
          delay tactics
        </Link>{' '}
        &mdash; stringing the claim along with requests for additional documentation,
        promises to review, and assurances that a decision is forthcoming &mdash; until
        the limitations period has run.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Courts have recognized that it is fundamentally unfair for an insurer to lull a
        policyholder into inaction through its conduct and then claim that the policyholder
        waited too long to file suit. When the insurer&rsquo;s own{' '}
        <Link href="/resources/insurance-delay-tactics" className="text-[#2E74B5] underline">
          delays
        </Link>{' '}
        caused the policyholder to miss the deadline, estoppel may toll (pause) the
        limitations period.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Relationship to{' '}
        <Link href="/resources/bad-faith" className="text-[#2E74B5] underline">
          Bad Faith
        </Link>
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Estoppel and waiver are closely related to{' '}
        <Link href="/resources/bad-faith" className="text-[#2E74B5] underline">
          bad faith
        </Link>{' '}
        but serve different functions. Estoppel and waiver address whether the insurer
        can raise a particular defense. Bad faith addresses whether the insurer&rsquo;s
        overall conduct was unreasonable. The same facts that support an estoppel or waiver
        argument &mdash; such as an insurer investigating for months without reserving
        rights and then denying on a known coverage issue &mdash; may also support a bad
        faith claim. The insurer&rsquo;s inconsistent conduct may be evidence of
        unreasonable claims handling, which is the foundation of bad faith liability.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In practice, estoppel and waiver arguments are often raised alongside bad faith
        claims. The estoppel or waiver argument addresses the threshold coverage question
        (the insurer cannot deny coverage because it waived or is estopped from raising
        the defense), and the bad faith claim addresses the insurer&rsquo;s conduct in
        handling the claim (the insurer acted unreasonably in how it processed, delayed,
        or denied the claim).
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Policy Interpretation and Estoppel
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Estoppel also intersects with{' '}
        <Link href="/resources/policy-interpretation" className="text-[#2E74B5] underline">
          policy interpretation
        </Link>{' '}
        in important ways. When an insurer interprets a policy provision in the
        policyholder&rsquo;s favor during the claims process &mdash; for example, by
        treating a particular type of damage as covered &mdash; and then reverses that
        interpretation later, estoppel may prevent the reversal. The policyholder relied
        on the insurer&rsquo;s interpretation, acted accordingly, and would be prejudiced
        by the change in position. This is particularly significant when the policy language
        is ambiguous and could reasonably be interpreted either way.
      </p>

      <CalloutBox variant="tip" title="Document Everything">
        <p>
          The effectiveness of estoppel and waiver arguments depends almost entirely on
          documentation. Oral representations that cannot be proven are worthless in
          litigation. Every conversation with an insurer should be followed up with a
          written confirmation. Every action taken in reliance on an insurer&rsquo;s
          representation should be documented with receipts, contracts, and
          correspondence. The policyholder who builds a paper trail from day one is the
          policyholder who has the strongest position if the insurer later changes course.
        </p>
      </CalloutBox>

      <CalloutBox variant="legal" title="Legal Disclaimer">
        <p>
          This article provides general educational information about the doctrines of
          equitable estoppel, promissory estoppel, and waiver in insurance disputes. It
          is not legal advice. The application of these doctrines varies by state, by the
          specific facts of each case, and by the policy language involved. Promissory
          estoppel in particular is highly fact-dependent, and whether a court will
          enforce a carrier&rsquo;s promise depends on the specificity of the promise,
          the reasonableness of the reliance, and the equities of the situation.
          Policyholders who believe they have an estoppel, promissory estoppel, or waiver
          argument should consult with an attorney experienced in insurance coverage
          disputes.
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
