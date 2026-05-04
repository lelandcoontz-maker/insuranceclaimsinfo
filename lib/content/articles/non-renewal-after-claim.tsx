import Link from 'next/link'

export const meta = {
  title: 'Non-Renewal After a Claim: What Happens to Your Insurance After You File',
  description:
    'How filing an insurance claim affects your future insurability, CLUE reports, rate increases, California non-renewal protections, disaster moratoriums, and why fear of non-renewal causes policyholders to accept lowball settlements.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        You pay your insurance premiums every year. You maintain your property. You do everything
        the insurer asks. Then, when something goes wrong and you file a claim &mdash; the very
        thing insurance exists for &mdash; you receive a letter telling you that your policy will
        not be renewed. Or your premium doubles. Or both. For millions of homeowners across the
        country, this is not a hypothetical scenario. It is the lived reality of what happens when
        you actually use the insurance you have been paying for.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The fear of losing coverage after filing a claim is one of the most powerful forces in the
        insurance marketplace. It shapes policyholder behavior in ways that overwhelmingly benefit
        the insurance industry: homeowners who are afraid to file absorb losses out of pocket,
        accept lowball settlement offers without challenging them, and treat their insurance policy
        as something too precious to actually use. When insurance becomes something you pay for but
        cannot use without punishment, something has gone fundamentally wrong with the system.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This article examines what actually happens after you file a claim &mdash; how your claims
        history is tracked, how insurers use that data in renewal and underwriting decisions, what
        California law says about your rights, and what practical steps you can take to protect
        yourself. Understanding the system is the first step toward refusing to be intimidated by it.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The CLUE Report: Your Insurance &ldquo;Credit Score&rdquo;
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Every claim you file is recorded in a database called the Comprehensive Loss Underwriting
        Exchange, known as{' '}
        <Link href="/resources/clue-database" className="text-[#2E74B5] underline">
          CLUE
        </Link>. Operated by LexisNexis, CLUE is the insurance industry&apos;s equivalent of a
        credit report. It tracks claims filed by individual policyholders and claims associated with
        specific properties. Nearly every major insurer in the United States contributes data to
        CLUE and checks it before issuing or renewing a policy.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A CLUE report typically contains up to seven years of claims history. It includes the date
        of each loss, the type of loss, the amount paid, and the insurer involved. Critically, CLUE
        records are tied to both the person and the property. This means that a claim filed by a
        previous owner of your home may appear when a prospective insurer pulls the property&apos;s
        CLUE report, even though you had nothing to do with it. Conversely, if you file a claim on
        one property, that claim follows you personally when you move to a new home and seek
        coverage elsewhere.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The practical effect of CLUE is straightforward: filing a claim today creates a record that
        every insurer will see for the next seven years. That record affects not just your current
        carrier&apos;s renewal decision but your ability to obtain coverage from any other carrier
        during that window. It is a powerful deterrent &mdash; and one the industry has carefully
        constructed to work exactly as it does.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        What CLUE Reports Actually Show
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A CLUE report includes the following data for each reported claim:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Date of loss:</strong> When the claimed event occurred
        </li>
        <li>
          <strong>Type of loss:</strong> The cause of the claim (fire, water, wind, theft,
          liability, etc.)
        </li>
        <li>
          <strong>Claim status:</strong> Whether the claim is open, closed, or denied
        </li>
        <li>
          <strong>Amount paid:</strong> The total indemnity payment made by the insurer
        </li>
        <li>
          <strong>Insurance company:</strong> The carrier that handled the claim
        </li>
        <li>
          <strong>Inquiries:</strong> In some cases, even inquiries &mdash; calling your carrier to
          ask about coverage before formally filing a claim &mdash; may be recorded
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        That last point deserves emphasis. Many policyholders call their insurer after an incident
        to ask whether something is covered, without intending to file a formal claim. In some
        cases, the insurer records that call as a claim or inquiry in CLUE. The policyholder
        never learns this happened until they try to obtain coverage from another carrier and are
        told they have a claims history they did not know about. Under the Fair Credit Reporting
        Act (FCRA), you have the right to request a free copy of your CLUE report once per year
        from LexisNexis. If you discover errors, you can dispute them.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The A-PLUS Database
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        In addition to CLUE, some insurers use a separate database called A-PLUS (Automated
        Property Loss Underwriting System), operated by Verisk Analytics. A-PLUS functions
        similarly to CLUE &mdash; it collects and shares claims history data among participating
        insurers. Between CLUE and A-PLUS, essentially every property insurance claim filed in the
        United States is tracked and available to any insurer that wants to check your history.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Claims History Affects Your Insurability
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurance industry uses claims history as a primary factor in underwriting decisions.
        Here is how the system works in practice:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Rate Increases After Filing
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Filing a single non-weather homeowner claim typically results in a premium increase of 7
        to 10 percent at the next renewal, with the actual figure varying by claim type and
        severity. Water damage claims &mdash; the most common type of homeowner claim &mdash;
        frequently trigger increases of 15 to 25 percent. Liability claims can produce even
        larger surcharges. These premium increases generally last 3 to 5 years, creating a
        cumulative financial penalty that can far exceed the deductible savings that prompted
        the homeowner to file in the first place.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Multiple claims within a short period compound the problem dramatically. A homeowner
        with two claims in three years may see premium increases of 20 to 40 percent or more
        &mdash; and may find that some carriers simply will not offer coverage at all. The
        insurance industry&apos;s actuarial models treat claims frequency as a stronger predictor
        of future losses than claims severity. In other words, two small claims can hurt your
        insurability more than one large claim.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Non-Renewal: The Greater Fear
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        While a premium increase is painful, non-renewal is the consequence homeowners fear most.
        When your insurer non-renews your policy, it means they will not offer you coverage when
        your current term expires. You must find replacement coverage on your own, often in a
        compressed timeframe, while every prospective insurer can see the claims history that
        prompted your current carrier to drop you.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Non-renewal is distinct from cancellation in important ways. Cancellation occurs mid-term
        &mdash; the insurer terminates your policy before its expiration date. Non-renewal occurs at
        the end of the policy term &mdash; the insurer simply declines to renew for another period.
        California law treats these differently, with stricter restrictions on mid-term cancellation
        than on non-renewal. For a detailed breakdown of the legal framework, see our guide to{' '}
        <Link href="/resources/nonrenewal-cancellation" className="text-[#2E74B5] underline">
          insurance non-renewal and cancellation
        </Link>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The practical reality is that insurers use non-renewal as their primary tool for shedding
        policyholders they consider unprofitable. Because non-renewal occurs at the end of a policy
        term, it avoids the stricter regulatory scrutiny that applies to mid-term cancellation. The
        insurer simply declines to offer a new contract, provides the required notice, and the
        policyholder is left to fend for themselves.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Claims-to-Non-Renewal Pipeline
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Although California law restricts non-renewal based solely on a single claim for a loss that
        was not the policyholder&apos;s fault, the reality is more nuanced than the statute suggests.
        Insurers rarely point to a single claim as the sole reason for non-renewal. Instead, the
        non-renewal letter cites other factors: the property&apos;s location in a high-risk area,
        changes in the carrier&apos;s underwriting guidelines, the age or condition of the roof or
        plumbing, or the policyholder&apos;s &ldquo;overall loss history.&rdquo; The claim that
        actually triggered the underwriting review often goes unmentioned, buried under layers of
        neutral-sounding justification.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This pattern is familiar to anyone who works with insurance claims regularly. A homeowner
        who has been with the same carrier for 15 years without incident files a water damage claim.
        Six months later, a non-renewal notice arrives citing &ldquo;changes in our underwriting
        criteria&rdquo; or &ldquo;property condition concerns.&rdquo; The roof that was perfectly
        acceptable to the carrier for 15 years is suddenly a problem. The plumbing that never
        warranted a policy condition is now a disqualifying risk factor. The timing is, to put it
        charitably, coincidental.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Non-Renewal Timeline Under California Law
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California has enacted significant protections governing the non-renewal process. Understanding
        the timeline and your rights at each stage is essential.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Notice Requirements: Insurance Code &sect; 678
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under California Insurance Code &sect; 678, an insurer must provide at least <strong>75
        days&apos; written notice</strong> before your policy&apos;s expiration date if it intends
        to non-renew. If the insurer fails to provide timely notice, your policy automatically
        renews on the same terms and conditions for the next policy period. This is not a
        technicality &mdash; it is an enforceable right.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The notice must include the <strong>actual reason</strong> for the non-renewal. Generic
        statements like &ldquo;underwriting decision&rdquo; or &ldquo;risk assessment change&rdquo;
        are insufficient. The insurer must explain what specifically about your risk profile has
        changed or what criteria you no longer meet. If you receive a non-renewal notice that does
        not state a specific reason, you have grounds to challenge it with the California Department
        of Insurance (CDI).
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Insurance Code &sect; 676: Mid-Term Cancellation Restrictions
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Mid-term cancellation is subject to much stricter limitations under Insurance Code &sect; 676.
        After your policy has been in effect for 60 days (or from inception on a renewal policy), the
        insurer can only cancel for limited, enumerated reasons: non-payment of premium, fraud or
        material misrepresentation, or a substantial increase in the hazard insured against within
        the policyholder&apos;s control. Filing a claim is not one of the permitted grounds for
        cancellation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurer must provide at least 30 days&apos; written notice for most cancellations (10
        days for non-payment of premium). The notice must state the reason for cancellation. If
        your insurer cancels your policy mid-term shortly after you file a claim, contact CDI
        immediately &mdash; this is likely a violation.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Insurance Code &sect; 663.5(b): Pending Claim Protections
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        California Insurance Code &sect; 663.5(b) specifically prohibits an insurer from
        non-renewing a policy <strong>solely</strong> on the grounds that a claim is pending.
        The word &ldquo;solely&rdquo; is the operative qualifier &mdash; the carrier can still
        non-renew for other legitimate underwriting reasons even while a claim is open. But the
        pending claim itself cannot be the sole basis for the non-renewal decision.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        More importantly, non-renewal does not extinguish the insurer&apos;s obligation on a claim
        that arose during the policy period. The loss occurred while coverage was in force. The
        insurer owes on that claim regardless of whether it renews the policy. If any carrier
        representative suggests that a pending non-renewal affects your claim or that you should
        settle quickly before your policy expires, that is a misrepresentation of your rights
        and potential{' '}
        <Link href="/resources/bad-faith" className="text-[#2E74B5] underline">
          bad faith
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Chilling Effect: How Fear of Non-Renewal Hurts Policyholders
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The most significant damage caused by the threat of non-renewal is not the non-renewal
        itself &mdash; it is the behavior change it produces in policyholders long before any
        non-renewal notice is ever issued. The fear of losing coverage creates a chilling effect
        that benefits the insurance industry in several measurable ways.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Under-Reporting Losses
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Policyholders routinely absorb losses out of pocket rather than file claims, even when the
        loss clearly exceeds their deductible. A homeowner with $15,000 in water damage and a
        $1,000 deductible may choose to pay the entire cost themselves because they believe &mdash;
        often correctly &mdash; that filing the claim will cost them more in future premium
        increases and potential non-renewal than the $14,000 they would recover from the insurer.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This calculus is not irrational. If a claim triggers a 20 percent premium increase lasting
        five years on a $3,000 annual premium, the cumulative cost of the rate increase alone is
        $3,000. Add the risk of non-renewal &mdash; which could force the homeowner onto the{' '}
        <Link href="/resources/california-fair-plan" className="text-[#2E74B5] underline">
          California FAIR Plan
        </Link>{' '}
        at two to three times the standard market rate &mdash; and the financial penalty for filing
        a legitimate claim can easily exceed the claim payment. The insurance industry has
        effectively created a system where using the product makes the product more expensive
        or unavailable.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Accepting Lowball Settlements
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Fear of non-renewal does not just prevent policyholders from filing claims &mdash; it also
        undermines their ability to negotiate fair settlements on claims they do file. A
        policyholder who is terrified of being dropped has a powerful incentive to resolve the
        claim quickly and quietly, even if the settlement is far below what the policy actually
        owes. Prolonging the claim through negotiation, supplemental estimates, or appraisal feels
        risky when the underlying fear is that any friction with the carrier will result in losing
        coverage entirely.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This dynamic is well understood by insurance adjusters. A policyholder who mentions being
        worried about their renewal is signaling that they will likely accept a lower number to
        make the claim go away. The adjuster does not need to threaten non-renewal &mdash; the
        policyholder&apos;s own fear does the work. For a deeper examination of how carriers
        exploit time pressure, see our article on{' '}
        <Link href="/resources/time-pressure-negotiation-weapon" className="text-[#2E74B5] underline">
          time pressure as a negotiation weapon
        </Link>.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Avoiding Supplemental Claims
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        After a claim is settled, homeowners frequently discover additional damage that was not
        included in the original scope &mdash; hidden water damage behind walls, structural issues
        revealed during repairs, or code upgrade requirements that were not anticipated. Filing a
        supplemental claim is the correct response, but many policyholders decline to do so because
        they fear it will count as a &ldquo;second claim&rdquo; or further damage their standing
        with the carrier.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In reality, a supplement on an existing claim is part of the same claim &mdash; it is not a
        new claim for CLUE purposes. But many policyholders do not know this, and the ambiguity
        works in the carrier&apos;s favor. Every dollar a policyholder absorbs rather than
        submitting a supplement is a dollar the carrier does not pay.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Not Exercising Appraisal Rights
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When there is a genuine dispute over the amount of a loss, most homeowner policies include
        an appraisal clause that allows either party to demand an independent valuation. Appraisal
        is often the most effective way to resolve a scope or price dispute without litigation. But
        policyholders who fear retaliation from their carrier may avoid invoking appraisal, worried
        that forcing the issue will guarantee non-renewal. This fear causes them to leave money on
        the table &mdash; sometimes tens of thousands of dollars &mdash; rather than exercise a
        contractual right they already paid for.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        California Moratorium Protections After Declared Disasters
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California has enacted some of the strongest post-disaster protections in the country,
        recognizing that a wave of non-renewals after a catastrophe compounds the harm to
        communities that are already devastated.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Insurance Code &sect; 675.1 and SB 824
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        California Insurance Code &sect; 675.1, enacted through SB 824, prohibits insurers from
        cancelling or non-renewing residential property insurance policies in ZIP codes affected
        by a declared state of emergency for <strong>one year</strong> from the date of the disaster
        declaration. This moratorium applies not only to policyholders whose properties were
        directly damaged but also to homeowners in the broader affected area &mdash; a critical
        distinction that prevents insurers from using a wildfire as an excuse to shed risk across
        an entire region.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        SB 824 was enacted in response to the devastating 2017 and 2018 wildfire seasons, during
        which insurers non-renewed tens of thousands of policies in fire-affected areas. The
        legislation recognized a perverse dynamic: homeowners who had just survived a wildfire
        were being punished with non-renewal for the &ldquo;sin&rdquo; of living in an area where
        a wildfire occurred &mdash; even when their property was undamaged and they had filed no
        claim.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        How Moratoriums Work in Practice
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When the Governor declares a state of emergency, CDI identifies the affected ZIP codes and
        issues a bulletin prohibiting insurers from non-renewing or cancelling policies in those
        areas. The moratorium typically lasts one year from the date of the declaration. During
        the moratorium:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Insurers cannot non-renew or cancel policies in the affected ZIP codes (with narrow
          exceptions for non-payment of premium and fraud)
        </li>
        <li>
          The moratorium applies to all residential property insurance, including homeowner,
          dwelling fire, condominium, mobilehome, and renter policies
        </li>
        <li>
          Insurers cannot circumvent the moratorium by imposing massive premium increases designed
          to force the policyholder to &ldquo;voluntarily&rdquo; leave
        </li>
        <li>
          The protection applies regardless of whether the specific property was damaged in the
          disaster
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        After the January 2025 Palisades and Eaton fires, CDI imposed a moratorium on non-renewals
        and cancellations across a wide swath of Los Angeles County ZIP codes. This moratorium was
        critical for the thousands of homeowners who were already facing a tightening insurance
        market and could not afford to lose their existing coverage while simultaneously dealing
        with fire damage claims. For more on how these events have shaped the insurance landscape,
        see our analysis of the{' '}
        <Link href="/resources/california-insurance-crisis" className="text-[#2E74B5] underline">
          California insurance crisis
        </Link>.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Moratorium&apos;s Limitation: It Delays, It Does Not Prevent
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The most important thing to understand about a non-renewal moratorium is that it is
        temporary. It delays the insurer&apos;s ability to non-renew &mdash; it does not eliminate
        it. When the moratorium expires, the insurer can issue a non-renewal notice with the
        standard 75 days of lead time. Many homeowners who were protected by the moratorium after
        the 2017&ndash;2018 fires ultimately received non-renewal notices as soon as the moratorium
        period ended.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This means the moratorium period is not a time to relax &mdash; it is a window of
        opportunity to prepare. Use the moratorium period to actively shop for replacement coverage,
        harden your home against wildfire risk (which can improve your insurability), and explore
        all available options including the FAIR Plan, surplus lines carriers, and any new programs
        the state may create.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Types of Claims That Trigger Non-Renewal
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Not all claims carry the same risk of non-renewal. Understanding which claims are most
        likely to result in adverse underwriting action can help you make informed decisions &mdash;
        though it should not deter you from filing a legitimate claim for a significant loss.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        High-Risk Claims for Non-Renewal
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Water damage claims:</strong> Insurers view water losses as among the highest-risk
          claims because they are frequent, expensive, and often indicative of deferred maintenance
          or aging infrastructure. A single water damage claim &mdash; particularly one involving
          slab leaks, failed supply lines, or sewage backup &mdash; significantly increases the
          probability of non-renewal.
        </li>
        <li>
          <strong>Liability claims:</strong> Any claim involving bodily injury on your property
          raises the risk profile substantially. Dog bite claims are a leading cause of non-renewal
          in homeowner insurance, with some carriers maintaining breed-specific underwriting
          restrictions that, once triggered by a claim, cannot be resolved.
        </li>
        <li>
          <strong>Mold claims:</strong> Claims involving mold remediation are treated as high-risk
          because of the potential for recurring problems and the significant costs associated with
          professional mold abatement.
        </li>
        <li>
          <strong>Multiple claims in a short period:</strong> The single most reliable predictor of
          non-renewal is claims frequency. Two or more claims within a three-year period &mdash;
          regardless of type or severity &mdash; dramatically increases the likelihood of
          non-renewal.
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Lower-Risk Claims
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Catastrophe claims:</strong> Claims arising from declared disasters (wildfires,
          earthquakes, major storms) are generally treated differently. Insurers recognize that
          these are not predictive of the individual policyholder&apos;s risk but rather reflect
          geographic exposure. California law also provides moratorium protections that prevent
          non-renewal based on catastrophe claims in affected areas.
        </li>
        <li>
          <strong>Weather-related claims:</strong> Wind and hail claims, particularly in areas
          where these events are common, tend to generate lower non-renewal risk than water or
          liability claims &mdash; though this varies by carrier.
        </li>
        <li>
          <strong>Theft claims:</strong> A single theft claim generally carries moderate risk.
          However, multiple theft claims will trigger the same frequency concerns as any other
          claim type.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Your Rights When You Are Non-Renewed
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you receive a non-renewal notice, you have specific rights under California law. Knowing
        these rights can protect you during what is often a stressful and confusing process.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Right to a Stated Reason
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurer must provide a written explanation of the reason for non-renewal. If the reason
        is vague or generic, request a more specific explanation. If the insurer cites your claims
        history, ask which specific claims formed the basis for the decision. Document everything in
        writing.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Right to Adequate Notice
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        You are entitled to at least 75 days&apos; notice before the policy expiration date. If the
        insurer provides less notice, the policy automatically renews for the next term. This is a
        hard deadline for the insurer &mdash; not a guideline. If you receive a non-renewal notice
        with fewer than 75 days remaining before expiration, contact CDI and assert that your
        policy has renewed by operation of law.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Right to File a CDI Complaint
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you believe the non-renewal is retaliatory, discriminatory, or violates California
        insurance law, you can file a complaint with the California Department of Insurance. CDI
        has the authority to investigate non-renewal decisions and, in some cases, order the insurer
        to reinstate or renew the policy. While CDI does not intervene in every case, a complaint
        creates a regulatory record and may prompt the insurer to reconsider.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Right to Continue Coverage on Pending Claims
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you have an open claim when you receive a non-renewal notice, the non-renewal does not
        affect the insurer&apos;s obligation to pay the claim. The loss occurred during the policy
        period, the claim vested at the moment of loss, and the carrier must continue to investigate,
        adjust, and pay the claim in accordance with the policy terms and California&apos;s{' '}
        <Link href="/resources/california-fair-claims" className="text-[#2E74B5] underline">
          Fair Claims Settlement Practices Regulations
        </Link>. Any suggestion from the carrier that you need to &ldquo;settle before your policy
        expires&rdquo; is wrong as a matter of law and potentially actionable as bad faith.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Right to Request Your CLUE Report
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under the FCRA, you have the right to a free copy of your CLUE report once per year. If
        you are non-renewed and the insurer cites your claims history, request your CLUE report
        immediately. Verify that every claim listed is accurate. If you find errors &mdash; claims
        that were never filed, amounts that are wrong, or inquiries that were improperly classified
        as claims &mdash; dispute them with LexisNexis. An inaccurate CLUE report can follow you
        for years and damage your ability to obtain coverage.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The FAIR Plan: Last Resort Coverage
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When no admitted insurer will write your policy, the{' '}
        <Link href="/resources/california-fair-plan" className="text-[#2E74B5] underline">
          California FAIR Plan
        </Link>{' '}
        (Fair Access to Insurance Requirements) serves as the insurer of last resort. Every
        admitted insurer in California is required to participate in the FAIR Plan, sharing the
        risk proportionally based on their market share. The FAIR Plan exists to ensure that every
        California property owner can obtain at least basic fire insurance coverage, regardless
        of their claims history or the property&apos;s location.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        What the FAIR Plan Covers
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The FAIR Plan provides basic fire and covered perils coverage. It does not provide the
        comprehensive coverage of a standard homeowner policy. Key limitations include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Limited perils:</strong> The standard FAIR Plan policy covers fire, lightning,
          internal explosion, and smoke damage. It does not cover theft, liability, water damage,
          or many other perils covered by a standard HO-3 policy.
        </li>
        <li>
          <strong>No liability coverage:</strong> You will need a separate &ldquo;difference in
          conditions&rdquo; (DIC) policy or a standalone liability policy to cover what the FAIR
          Plan excludes.
        </li>
        <li>
          <strong>Higher premiums:</strong> FAIR Plan premiums are typically two to four times
          higher than comparable standard market coverage.
        </li>
        <li>
          <strong>Coverage limits:</strong> The FAIR Plan has maximum coverage limits that may
          be insufficient for higher-value properties.
        </li>
        <li>
          <strong>Slower processing:</strong> Due to dramatically increased demand &mdash;
          particularly since the 2025 fires &mdash; FAIR Plan application processing times have
          lengthened significantly.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The FAIR Plan is designed to be a safety net, not a long-term solution. It provides basic
        coverage while you work to improve your insurability and re-enter the standard market.
        However, for an increasing number of California homeowners, the FAIR Plan has become their
        only option for an indefinite period. For a complete analysis, see our{' '}
        <Link href="/resources/california-fair-plan" className="text-[#2E74B5] underline">
          California FAIR Plan guide
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Surplus Lines and Non-Admitted Carriers
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Between the standard market and the FAIR Plan, there is a middle tier: surplus lines
        carriers. These are non-admitted insurers that are licensed to write policies that admitted
        carriers will not. Surplus lines carriers offer more flexibility in underwriting and may
        be willing to insure properties with claims histories that would disqualify them from
        admitted carriers.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        However, surplus lines coverage comes with trade-offs. Premiums are higher than the
        standard market (though often lower than the FAIR Plan for comparable coverage). Policies
        from non-admitted carriers are not backed by the California Insurance Guarantee Association
        (CIGA), meaning that if the surplus lines carrier becomes insolvent, you have no guaranty
        fund protection. And coverage forms may be less favorable than standard market policies,
        with broader exclusions or lower limits.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Work with a knowledgeable insurance broker &mdash; not a captive agent tied to one carrier
        &mdash; to explore surplus lines options. A broker who specializes in hard-to-place risks
        can access multiple surplus lines carriers and find the best combination of coverage and
        price for your situation.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Decision to File: Weighing the Risks
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Given everything discussed above, should you file a claim? The answer depends on the size
        and nature of the loss, your current claims history, and your tolerance for risk. But here
        is the fundamental principle: insurance exists to protect you from significant financial
        losses. If you experience a significant loss, you should file a claim. You paid for coverage.
        You are entitled to use it.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        That said, there are situations where the calculus may favor absorbing a loss:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Small losses close to your deductible:</strong> If the total damage is only
          slightly above your deductible, the net recovery after the deductible may not justify
          the claims history entry. A $3,000 loss with a $2,500 deductible produces only $500 in
          recovery but generates a CLUE report entry that lasts seven years.
        </li>
        <li>
          <strong>Recent prior claims:</strong> If you already have one or more claims on your CLUE
          report within the last three years, a second claim significantly increases the risk of
          non-renewal. In this situation, absorbing a moderate loss may be the pragmatic choice.
        </li>
        <li>
          <strong>Losses you can comfortably afford:</strong> If the loss is within your financial
          capacity to absorb without hardship, preserving a clean claims history may have greater
          long-term value than the insurance recovery.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        However, this analysis changes fundamentally for significant losses. A $50,000 fire damage
        claim, a $100,000 water damage restoration, or a six-figure liability claim &mdash; these
        are exactly the scenarios insurance is designed for. Do not let fear of non-renewal prevent
        you from using coverage you need for a serious loss. The financial consequences of not
        filing a major claim are almost always worse than the consequences of filing.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Practical Strategies for Protecting Your Insurability
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        While you cannot control how insurers use your claims history, you can take steps to
        strengthen your position.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Before You File a Claim
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Check your CLUE report:</strong> Before filing, know what is already on your
          claims history. If you already have recent claims, that context affects your
          decision-making.
        </li>
        <li>
          <strong>Understand your deductible:</strong> Know your deductible and evaluate whether
          the net recovery (claim amount minus deductible) justifies the CLUE entry.
        </li>
        <li>
          <strong>Do not call your carrier to &ldquo;just ask&rdquo;:</strong> As noted above, some
          carriers log phone inquiries as claims or claim inquiries. If you want to understand your
          coverage before filing, read your policy or consult with a public adjuster or insurance
          attorney &mdash; not your carrier&apos;s claims line.
        </li>
        <li>
          <strong>Document the damage thoroughly:</strong> If you do file, having comprehensive
          documentation from the outset strengthens your claim and reduces the chance of a
          prolonged dispute. Photographs, videos, receipts, and written estimates from licensed
          contractors establish the scope of damage and the reasonable cost of repair.
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        During an Open Claim
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Do not let fear drive settlement decisions:</strong> If you filed a claim for a
          legitimate loss, negotiate the claim based on what you are owed &mdash; not based on fear
          of carrier retaliation. An insurer that underpays you and then non-renews you has harmed
          you twice. At least if you negotiate a fair settlement, you come away with the money you
          are owed.
        </li>
        <li>
          <strong>File supplements when warranted:</strong> A supplemental claim on an existing loss
          is part of the same claim. It does not create a separate CLUE entry and should not
          independently affect your underwriting profile. Do not leave money on the table because
          of a misunderstanding about how supplements are reported.
        </li>
        <li>
          <strong>Respond to all carrier communications in writing:</strong> If the carrier is
          creating a paper trail, you should be creating one too. Written correspondence protects
          you if a dispute about the claim &mdash; or about the non-renewal &mdash; arises later.
        </li>
        <li>
          <strong>Keep the claim and non-renewal separate:</strong> If you receive a non-renewal
          notice while a claim is open, do not allow the carrier to conflate the two issues. The
          claim is a contractual obligation based on a covered loss. The non-renewal is a
          prospective underwriting decision. They are legally distinct, and you should treat them
          as such in all communications.
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        After Non-Renewal
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Start shopping immediately:</strong> Do not wait until the 75-day notice period is
          nearly expired. Begin contacting independent insurance brokers as soon as you receive the
          non-renewal notice. Independent brokers can access multiple carriers, including surplus
          lines markets that are not available through captive agents.
        </li>
        <li>
          <strong>Get quotes from multiple sources:</strong> Different carriers weight claims history
          differently. A claim that disqualifies you with one carrier may be acceptable to another.
          Cast a wide net.
        </li>
        <li>
          <strong>Consider risk mitigation improvements:</strong> Some carriers will reconsider
          an otherwise marginal risk if the homeowner has taken concrete steps to address the
          conditions that led to the claim. If a water claim led to non-renewal, documenting that
          you have re-plumbed the house or installed leak detection sensors may help.
        </li>
        <li>
          <strong>Apply to the FAIR Plan early:</strong> If you cannot find standard market
          coverage, apply to the FAIR Plan immediately. Processing times have increased
          significantly, and you do not want a gap in coverage. Remember that you will also need a
          DIC policy for the perils the FAIR Plan does not cover.
        </li>
        <li>
          <strong>Review your CLUE report for accuracy:</strong> Before shopping, pull your CLUE
          report and verify that every entry is correct. Dispute any inaccuracies. An incorrect
          claim entry could be the difference between obtaining coverage and being declined.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Special Considerations for California Policyholders
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Proposition 103 and Rate Regulation
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        California is one of the most heavily regulated insurance markets in the country, largely
        due to Proposition 103, passed by voters in 1988. Prop 103 requires insurers to obtain
        prior approval from CDI before implementing rate changes. This means that the premium
        increase you experience after a claim must have been approved as part of the carrier&apos;s
        filed rating plan &mdash; the insurer cannot impose an arbitrary surcharge.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Prop 103 also limits the rating factors insurers can use. Under the existing framework,
        insurers are required to give the greatest weight to the insured&apos;s driving record (for
        auto), claims history, and years of coverage. For homeowner insurance, the interaction
        between Prop 103 rating restrictions and claims-based surcharges creates a complex
        regulatory environment that is continuously evolving.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Insurance Commissioner&apos;s Role
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The California Insurance Commissioner is an elected official with regulatory authority
        over the insurance industry. The Commissioner has the power to issue moratoriums, approve
        or deny rate changes, investigate complaints, and take enforcement action against carriers
        that violate the Insurance Code. When you file a complaint with CDI about a non-renewal,
        it goes to the Commissioner&apos;s office for review.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Commissioner&apos;s effectiveness depends on the individual holding the office and
        the political dynamics of the moment. In recent years, the Commissioner has been
        navigating a difficult balance between pressuring insurers to continue writing policies
        in California and recognizing the financial realities that have caused carriers to restrict
        their California business. For policyholders, the important takeaway is that CDI exists,
        complaints matter, and regulatory pressure &mdash; even when it does not result in
        immediate enforcement action &mdash; creates a record that influences insurer behavior
        over time.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Recent Legislative Developments
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The California Legislature has been actively expanding protections for policyholders
        facing non-renewal, particularly in the context of the state&apos;s wildfire insurance
        crisis. Key recent developments include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Extended moratorium periods:</strong> Legislation has expanded the duration
          and geographic scope of non-renewal moratoriums following declared disasters.
        </li>
        <li>
          <strong>Mitigation credit requirements:</strong> New laws require insurers to consider
          wildfire mitigation efforts &mdash; defensible space, fire-resistant roofing, ember-resistant
          vents &mdash; in their underwriting decisions, preventing blanket non-renewals based
          solely on ZIP code or fire hazard severity zone.
        </li>
        <li>
          <strong>Disclosure obligations:</strong> Carriers must provide more detailed explanations
          of non-renewal decisions, including information about alternative coverage options.
        </li>
        <li>
          <strong>Market availability requirements:</strong> Some proposals would require carriers
          to write a minimum amount of coverage in high-risk areas as a condition of doing
          business in California, though these provisions remain politically contentious.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Broader Context: Why This System Exists
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The claims-to-non-renewal pipeline did not emerge by accident. Insurance companies are
        highly sophisticated, data-driven enterprises that have optimized every aspect of their
        operations for profitability. The CLUE database, the claims-based surcharge system, and the
        non-renewal framework all function together as a coherent mechanism that discourages
        policyholders from using the coverage they pay for.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Consider the economics from the insurer&apos;s perspective. The most profitable
        policyholder is one who pays premiums every year and never files a claim. Every claim
        filed reduces the insurer&apos;s profitability on that policyholder. If the insurer can
        create an environment where policyholders self-select out of filing &mdash; absorbing
        losses, accepting lowball settlements, avoiding supplements &mdash; the insurer captures
        premium revenue while minimizing claim payments. The threat of non-renewal is one of the
        most effective tools for creating that environment.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This does not mean that every non-renewal is improper or that insurers have no legitimate
        interest in managing their risk portfolio. Insurers do need to maintain actuarial
        soundness, and a policyholder with a genuinely adverse loss history may represent a risk
        that is not adequately priced at the current premium level. The problem is not that
        underwriting criteria exist &mdash; it is that the system operates in a way that
        systematically discourages policyholders from exercising the rights they paid for. The
        line between legitimate risk management and punitive disincentive is one the industry
        has not always been careful to observe.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When Non-Renewal Becomes Bad Faith
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        While an insurer generally has the right to non-renew a policy (subject to notice
        requirements and moratorium restrictions), certain patterns of behavior around non-renewal
        can cross the line into{' '}
        <Link href="/resources/bad-faith" className="text-[#2E74B5] underline">
          bad faith
        </Link>:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Using non-renewal as leverage during claim settlement:</strong> If the carrier
          implies or states that the non-renewal will go away if you accept a quick, low settlement,
          that is coercive and potentially actionable. The claim and the underwriting decision are
          legally separate.
        </li>
        <li>
          <strong>Non-renewing to avoid paying a claim:</strong> If the carrier non-renews you
          and then argues that the non-renewal affects your pending claim, that is a misrepresentation
          of your rights.
        </li>
        <li>
          <strong>Retaliatory non-renewal:</strong> If the carrier non-renews you specifically
          because you hired a public adjuster, retained an attorney, invoked appraisal, or filed a
          complaint with CDI, that retaliation may constitute bad faith.
        </li>
        <li>
          <strong>Failing to provide the required notice:</strong> Non-renewal without 75 days&apos;
          written notice violates the Insurance Code. If the carrier issues a late notice and then
          refuses to acknowledge that the policy renewed by operation of law, that is both a
          regulatory violation and potentially bad faith.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you believe your non-renewal is retaliatory or that the carrier is using the non-renewal
        process to pressure you during a claim, consult with an attorney who handles insurance bad
        faith cases. Document every communication, note the timeline of events (particularly the
        relationship between your claim activity and the non-renewal notice), and preserve all
        correspondence.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Mortgage Complication
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        For homeowners with a mortgage, non-renewal creates an additional layer of urgency. Your
        mortgage agreement almost certainly requires you to maintain continuous property insurance.
        A lapse in coverage &mdash; even a brief one &mdash; puts you in default on your mortgage.
        If you cannot obtain replacement coverage, the lender will force-place an insurance policy
        on your behalf.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Force-placed insurance is expensive, limited, and designed to protect the lender&apos;s
        interest &mdash; not yours. It typically covers only the structure to the extent of the
        outstanding loan balance. It does not cover your personal property, additional living
        expenses if you are displaced, or liability. And the cost is added to your mortgage
        payment, whether you can afford it or not.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The threat of force-placed insurance adds another dimension to the chilling effect. A
        homeowner who knows that non-renewal could trigger force-placed insurance &mdash; at
        potentially triple the cost of their current premium &mdash; has even more reason to
        avoid filing claims or to accept whatever settlement the carrier offers. The mortgage
        system and the insurance system interact in ways that consistently disadvantage the
        individual homeowner.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Preparing for the Worst: Building a Coverage Safety Net
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Given the reality of how the system works, every homeowner should take proactive steps
        to protect their insurability &mdash; not after receiving a non-renewal notice, but
        before one ever arrives.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Build a relationship with an independent broker:</strong> A captive agent
          represents one carrier. An independent broker represents you and can access dozens of
          carriers, including surplus lines markets. Having this relationship established before
          you need it saves critical time if you are non-renewed.
        </li>
        <li>
          <strong>Maintain your property visibly:</strong> Insurers increasingly use drone imagery,
          satellite photos, and exterior inspections in underwriting. A well-maintained property
          with a clean roof, trimmed vegetation, and no visible deferred maintenance is less likely
          to be flagged for non-renewal. Keep documentation of maintenance and improvements.
        </li>
        <li>
          <strong>Know your CLUE history:</strong> Request your CLUE report annually. Treat it
          like a credit report &mdash; monitor it, verify its accuracy, and dispute any errors.
        </li>
        <li>
          <strong>Increase your deductible:</strong> A higher deductible reduces the number of
          losses that justify filing a claim, which reduces claims frequency &mdash; the single
          most important factor in underwriting decisions. A $5,000 or $10,000 deductible means
          fewer filed claims without sacrificing protection against catastrophic losses.
        </li>
        <li>
          <strong>Invest in loss prevention:</strong> Water leak detection systems, smoke
          detectors, security systems, and wildfire-hardening improvements not only reduce your
          risk of loss but also demonstrate to insurers that you are actively managing risk.
          Some carriers offer premium discounts for specific mitigation measures.
        </li>
        <li>
          <strong>Consider umbrella coverage:</strong> An umbrella policy provides additional
          liability coverage and may make your overall risk profile more attractive to carriers
          that might otherwise be concerned about your liability exposure.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Final Thoughts: Do Not Let Fear Override Your Rights
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The threat of non-renewal is real, and the consequences are significant. But it is
        important to maintain perspective. You bought insurance to protect yourself from financial
        catastrophe. If a catastrophe occurs, the purpose of your insurance is to make you whole.
        Filing a legitimate claim for a significant loss is not an abuse of the system &mdash; it
        is the system working as intended.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurance industry has succeeded in creating a culture where policyholders feel guilty
        or afraid for using the coverage they paid for. Adjusters do not need to explicitly
        threaten non-renewal &mdash; the ambient fear does the work for them. A policyholder who
        accepts a lowball settlement because they are afraid of losing coverage has been harmed
        just as surely as one who is explicitly coerced.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Know your rights. Understand how the system works. Make informed decisions about when to
        file and how to negotiate. And when the loss is significant, do not let fear of future
        consequences prevent you from pursuing the full settlement you are owed today. If you
        need help navigating a claim or dealing with a non-renewal, consult with a{' '}
        <Link href="/resources/public-adjuster" className="text-[#2E74B5] underline">
          licensed public adjuster
        </Link>{' '}
        or an attorney experienced in insurance coverage disputes.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The system is designed to discourage you from using it. Understanding that design is the
        first step toward refusing to be controlled by it.
      </p>
    </>
  )
}
