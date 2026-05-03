import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Contractors and Deductibles: Not as Simple as "It\'s the Law"',
  description:
    'An in-depth analysis of contractor deductible waiver laws in Texas, California, Florida, and other states — what the statutes actually say, where they break down on real claims, and why the confident declarations about deductible law often collapse under scrutiny.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational in nature and reflects the author&rsquo;s interpretation of
          insurance statutes and property insurance claims practice as a California Licensed Public
          Adjuster. It is not legal advice. Deductible waiver laws vary by state and the specific
          facts of each claim. If you are a homeowner or contractor dealing with a deductible
          dispute, consult a licensed attorney in your state.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        After storms, contractors sometimes offer to &ldquo;take care of your deductible&rdquo;
        as an incentive. Several states have statutes addressing this practice. But the
        confident declarations you hear from contractors, adjusters, and internet commentators
        &mdash; that deductible waivers are flatly &ldquo;illegal&rdquo; &mdash; often collapse
        under scrutiny when you read the actual statutory language and apply it to common
        real-world situations. This is a topic with strongly held opinions, significant
        ambiguity, and very little published case law resolving the hard questions.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For background on deductible types, how they are calculated, and how carriers misapply
        them, see our{' '}
        <Link href="/resources/deductibles-guide" className="text-blue-700 underline hover:text-blue-900">
          insurance deductibles guide
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Texas: What the Statutes Actually Say
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Texas has two statutes that work together. <strong>Insurance Code &sect;707.002</strong>{' '}
        is one sentence: <em>&ldquo;A person insured under a property insurance policy shall pay
        any deductible applicable to a first-party claim made under the policy.&rdquo;</em>{' '}
        That is the insured&rsquo;s obligation &mdash; applicable to the <em>claim</em>, not to
        each contractor or each line item.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The contractor-facing prohibition is in <strong>Business &amp; Commerce Code
        &sect;27.02(c)</strong>, which makes it an offense for a seller of goods or services to,{' '}
        <em>without the insurer&rsquo;s consent</em>: (1) pay, waive, absorb, or decline to
        collect the deductible; (2) provide a rebate or credit that offsets the deductible; or
        (3) &ldquo;in any other manner assist the insured person&rsquo;s failure to pay&rdquo;
        the deductible. Violation is a Class B misdemeanor &mdash; up to 180 days and a $2,000
        fine.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Insurance Code &sect;707.004</strong> gives carriers an enforcement mechanism:{' '}
        <em>&ldquo;An insurer that issues a property insurance policy with replacement cost
        coverage may refuse to pay a claim for withheld recoverable depreciation or a
        replacement cost holdback under the policy until the insurer receives reasonable proof of
        payment by the policyholder of any deductible applicable to the claim.&rdquo;</em>{' '}
        Reasonable proof includes a canceled check, money order receipt, credit card statement, or
        executed installment plan.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        &sect;27.02(b) also requires contracts over $1,000 for goods or services expected to be
        paid from insurance proceeds to include a disclosure in 12-point bold type: <em>&ldquo;Texas
        law requires a person insured under a property insurance policy to pay any deductible
        applicable to a claim made under the policy. It is a violation of Texas law for a seller
        of goods or services who reasonably expects to be paid wholly or partly from the proceeds
        of a property insurance claim to knowingly allow the insured person to fail to pay, or
        assist the insured person&rsquo;s failure to pay, the applicable insurance
        deductible.&rdquo;</em>
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Who Wrote This Law, and Why
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Chapter 707 was enacted as HB 2102 by the 86th Texas Legislature in 2019, sponsored by
        Rep. Giovanni Capriglione (R) and Sen. Judith Zaffirini (D). The bill was framed as
        consumer protection against fraudulent roofing contractors who offered &ldquo;free
        roofs&rdquo; and then inflated claims to absorb the deductible. The grassroots campaign
        behind it came from a coalition of Texas roofing contractor associations under the banner
        &ldquo;Don&rsquo;t Fraud My Texas&rdquo; &mdash; including the North Texas Roofing
        Contractors Association, the Roofing Contractors Association of Texas, and several
        regional groups. Insurance companies lobbied hard for it as well. The National Insurance
        Crime Bureau praised the bill as closing a &ldquo;fraud loophole.&rdquo; Texas Insurance
        Commissioner Kent Sullivan endorsed it.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The political dynamic explains both the law&rsquo;s strengths and its blind spots:
        legitimate roofing contractors wanted to eliminate competitors who used deductible waivers
        to undercut them, and insurance companies wanted to reduce inflated claims. Those
        interests aligned perfectly around the simplest scenario &mdash; a single roofing
        contractor waiving a hail deductible on a straightforward claim under the policy limit.
        The bill was drafted with that scenario in mind. The more complicated situations that
        arise on real claims &mdash; multiple contractors, over-limit losses, ACV-only policies,
        partial repairs &mdash; do not appear to have been considered.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This was not actually new law. A deductible waiver prohibition had existed in Texas since
        1989 in Business &amp; Commerce Code &sect;27.02. But the original statute only prohibited
        &ldquo;paying&rdquo; the deductible &mdash; and contractors argued that &ldquo;waiving&rdquo;
        or &ldquo;absorbing&rdquo; a deductible was not the same as &ldquo;paying&rdquo; it. Attorney
        General Jim Mattox issued Opinion JM-1154 in 1990 trying to clarify, but the narrow
        wording made the law essentially unenforceable for 30 years. HB 2102 broadened the
        prohibited conduct to include waiving, absorbing, rebating, crediting, offsetting, and
        the catch-all &ldquo;in any other manner assist.&rdquo; It also added the
        depreciation-withholding enforcement mechanism in &sect;707.004 and the mandatory
        contract disclosures.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        No Court Has Interpreted This Law
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        In the nearly seven years since Chapter 707 took effect, <strong>no Texas appellate court
        has published a decision interpreting it</strong>. The questions raised throughout this
        article &mdash; whether the deductible obligation is satisfied when paid to a prior
        contractor, whether it is absorbed into over-limit losses, whether partial repairs
        constitute &ldquo;assisting&rdquo; avoidance &mdash; are genuinely unresolved. They are
        not unresolved because the answers are obvious. They are unresolved because nobody has
        litigated them to a published decision. Criminal enforcement (Class B misdemeanor) would
        produce trial-level cases that are rarely published, and civil litigation citing these
        sections does not appear in any public database.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The &sect;707.004 Enforcement Gap
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Read &sect;707.004 again carefully. It says an insurer that issues a policy{' '}
        <em>&ldquo;with replacement cost coverage&rdquo;</em> may withhold{' '}
        <em>&ldquo;recoverable depreciation or a replacement cost holdback.&rdquo;</em> This
        enforcement mechanism only works when all of the following are true: the policy has
        replacement cost coverage, the carrier is holding back depreciation, and the claim is
        below the policy limit. When any of those conditions is missing, the tool does not apply:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>ACV-only policies:</strong> No replacement cost coverage means no depreciation
          holdback to withhold. The statute&rsquo;s enforcement mechanism simply does not exist
          for these policies.
        </li>
        <li>
          <strong>Over-limit losses:</strong> When the loss exceeds the policy limit, the
          carrier pays the full limit. There is no holdback. There is nothing to withhold as
          leverage.
        </li>
        <li>
          <strong>Full replacement cost paid up front:</strong> Some carriers pay the full
          replacement cost without a holdback. Again, no withholding mechanism.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The 88th Texas Legislature (2023) partially acknowledged this problem. SB 1268 amended
        &sect;707.004 to make the depreciation withholding <em>mandatory</em> rather than
        optional &mdash; recognizing that insurers were not consistently using the tool. But
        SB 1268 did not fix the structural gap: the enforcement mechanism still only works on
        replacement cost policies with claims below the limit. Nobody in the published legal
        literature appears to have addressed this gap.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In the simplest scenario &mdash; one contractor, one scope, one deductible, replacement
        cost policy, claim under the limit &mdash; the statute is straightforward. But that is
        not how most claims work.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Where the Texas Language Gets Complicated
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Read &sect;707.002 again: the insured must pay the deductible &ldquo;applicable to a
        first-party claim.&rdquo; Singular claim, singular deductible. Now apply that language to
        common situations:
      </p>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>The deductible was already paid to another contractor.</strong> A mitigation
          company does $6,000 of emergency work. The carrier pays $5,000 after the $1,000
          deductible. The homeowner pays the $1,000 difference to the mitigation contractor
          &mdash; they have a canceled check to prove it. Months later, the roofer arrives and
          demands the homeowner pay the deductible again. But the statute says the insured must
          pay the deductible applicable to the <em>claim</em>. They already did. The roofer is
          not &ldquo;waiving&rdquo; anything by not collecting money the insured already paid to
          someone else on the same claim. Nothing in the statute requires the deductible to be
          collected twice.
        </li>
        <li>
          <strong>The loss exceeds the policy limit.</strong> The insured has $120,000 in damage
          on a $100,000 policy with a $1,000 deductible. When the loss exceeds the limit plus
          the deductible combined, the carrier pays the full policy limit &mdash; $100,000
          &mdash; and the deductible is absorbed into the $20,000 the insured is already paying
          out of pocket. The insured&rsquo;s out-of-pocket cost is twenty times the deductible.
          Who, exactly, would the insured pay the deductible to? The carrier already paid its
          maximum. The contractor is owed $120,000. The insured is covering the $20,000
          shortfall. There is no separate &ldquo;deductible payment&rdquo; to make &mdash; it
          has been absorbed into the overage. And if the insured has signed an assignment or
          direction of payment so the carrier issues the $100,000 check jointly to the
          homeowner and the contractor, is the homeowner supposed to write a separate $1,000
          &ldquo;deductible&rdquo; check on top of the $20,000 they already owe for the
          overage? The $1,000 is already inside the $20,000. Under &sect;707.004, the
          carrier&rsquo;s enforcement mechanism is withholding recoverable depreciation &mdash;
          but in an over-limit loss, the carrier has already paid the full limit. There is no
          depreciation holdback to withhold. The enforcement tool does not even apply.
        </li>
        <li>
          <strong>The insured is not doing all the approved work.</strong> A hail claim approves
          the roof, fence, landscaping, and mailbox. The homeowner hires a roofer for the roof
          only. They are not repairing the fence or replacing the mailbox &mdash; so the carrier
          does not owe for that work, and the contractor is not performing it. The money the
          insured is not spending on those unapproved items naturally exceeds the deductible
          amount. No one is &ldquo;waiving&rdquo; anything. The insured is simply not doing
          all the approved work.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The statute was clearly written for the simplest scenario: one contractor, one scope,
        loss below the policy limit, and a straightforward deductible. It does not account for
        the complexity of real claims with multiple contractors, over-limit losses, partial
        repairs, or assignments of benefits. And to the extent the statute creates ambiguity in
        those situations, the people most aggressively citing it are often the ones with the most
        to gain from the broadest possible interpretation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Note also the phrase <em>&ldquo;without the insurer&rsquo;s consent&rdquo;</em> in
        &sect;27.02(c). If the insurer consents to a deductible arrangement, there is no
        violation at all. And the catch-all language &mdash; &ldquo;in any other manner assist
        the insured person&rsquo;s failure to pay&rdquo; &mdash; is vague enough that it could
        theoretically sweep in a contractor who simply charges less than the estimate amount,
        even if the lower price reflects actual costs rather than any intent to absorb the
        deductible. Merlin Law Group has described the statute as &ldquo;a clarification and
        more carefully worded version&rdquo; of a prohibition that existed since 1989 but was
        routinely ignored, and has questioned what consumer benefit it actually provides.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        None of this means the statute has no teeth. It does. A contractor who openly advertises
        &ldquo;free roof &mdash; we eat your deductible&rdquo; and then inflates the claim to
        cover it is doing exactly what the law targets. But the confident insistence from many
        roofing contractors that &ldquo;the law requires you to pay me the deductible&rdquo; in
        every situation &mdash; including situations where the deductible was already paid to
        someone else or absorbed into an over-limit loss &mdash; reflects a self-serving reading
        of a statute that does not say what they claim it says. Contractors collect more money
        when the homeowner pays the deductible on top of insurance proceeds. That is a financial
        interest, not a legal analysis.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Insurance Fraud Question &mdash; Separate from Any Statute
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Even in states without a specific deductible waiver statute, there is a separate issue:
        potential insurance fraud. If a contractor&rsquo;s estimate says the job costs $100,000
        and the contractor is not collecting the $1,000 deductible, the true cost of the work
        to the homeowner is $99,000, not $100,000. If the insured represents $100,000 as the
        actual cost to the insurance company &mdash; or if the contractor submits an estimate at
        $100,000 knowing they do not intend to collect the full amount &mdash; that could be a
        misrepresentation of the actual cost of repairs regardless of whether a deductible waiver
        statute exists. This is a fraud analysis, not a statutory deductible analysis, and it
        applies in every state.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        That said, even the fraud analysis has nuances. If the contractor legitimately performs
        the work for $99,000 because that is their actual cost and the estimate was the
        carrier&rsquo;s number (not the contractor&rsquo;s), the fact that the contractor did
        not collect the last $1,000 may simply mean the job was done for less than estimated.
        Contractors are not required to charge the exact amount on the insurance estimate.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        California: Penal Code &sect;551(b)
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California has its own statute, less well-known than the Texas law. <strong>Penal Code
        &sect;551(b)</strong> provides, in relevant part: <em>&ldquo;Except in cases in which
        the amount of the repair or replacement claim has been determined by the insurer and the
        repair or replacement services are performed in accordance with that determination or in
        accordance with provided estimates that are accepted by the insurer, it is unlawful for
        any &hellip; contractor &hellip; to knowingly offer or give any discount intended to
        offset a deductible required by a policy of insurance covering repairs to or replacement
        of a &hellip; residential or commercial structure.&rdquo;</em>
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        The Exception That May Swallow the Rule
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The exception at the beginning of &sect;551(b) is significant and arguably swallows much
        of the rule. Read it again: the prohibition does not apply when &ldquo;the amount of the
        repair or replacement claim has been determined by the insurer and the repair or
        replacement services are performed in accordance with that determination or in accordance
        with provided estimates that are accepted by the insurer.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        On a typical insurance claim, the carrier issues an estimate determining the amount of
        the repair. The contractor performs the work in accordance with that determination. Under
        a plain reading of the exception, the prohibition would not apply to the vast majority of
        insurance-funded repair work &mdash; which is exactly the scenario the statute purports
        to regulate.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The legislative intent appears to be targeting contractors who approach homeowners before
        or outside of the insurance process &mdash; offering discounts to attract business and
        then inflating claims to cover the waived deductible. But the statutory language does not
        draw that distinction cleanly. The exception is broad enough to cover most post-estimate
        repair scenarios, and the prohibition is narrow enough that it arguably only reaches
        pre-estimate solicitation.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        What &ldquo;In Accordance With That Determination&rdquo; Means in Practice
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The statute does not define what &ldquo;in accordance with that determination&rdquo;
        means. Consider these common scenarios on California claims:
      </p>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>The contractor completes the approved scope for less than the estimate.</strong>{' '}
          The carrier&rsquo;s estimate is $45,000. The contractor performs the identical scope of
          work for $42,000 because their actual labor costs are lower. The homeowner pockets the
          $3,000 difference. No one inflated anything. Is the contractor &ldquo;offering a
          discount intended to offset a deductible&rdquo;? Or did they simply do the work for
          less than estimated? The statute does not address this distinction. And carriers
          routinely tell policyholders they are not entitled to the difference when a contractor
          completes work for less &mdash; so the carrier cannot simultaneously argue that
          completing work for less constitutes an illegal deductible offset.
        </li>
        <li>
          <strong>The carrier&rsquo;s estimate is disputed and a supplement is pending.</strong>{' '}
          The carrier approved $30,000. The contractor and the policyholder&rsquo;s public
          adjuster believe the loss is $50,000 and have filed a supplement. If the contractor
          begins work &ldquo;in accordance with&rdquo; the carrier&rsquo;s $30,000 determination,
          the exception applies. But what if the contractor performs $50,000 of work based on the
          disputed scope? Is that &ldquo;in accordance with&rdquo; the determination or not? The
          statute provides no guidance.
        </li>
        <li>
          <strong>Multiple contractors on a single claim.</strong> The same scenario as in Texas:
          the mitigation company collects the deductible, and the general contractor performing
          later repairs does not. The statute says &ldquo;a discount intended to offset a
          deductible.&rdquo; If the deductible has already been collected by another contractor,
          the GC is not &ldquo;offsetting&rdquo; anything &mdash; there is nothing left to
          offset. But the statute does not explicitly address multi-contractor claims.
        </li>
      </ul>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Penalties and Enforcement
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Violations under $950 are a misdemeanor. Over $950, the offense is a wobbler &mdash;
        prosecutable as a misdemeanor or a felony carrying up to three years. The fact that the
        statute is in the <em>Penal Code</em> rather than the Insurance Code or Business and
        Professions Code makes it a criminal statute &mdash; enforceable by district attorneys,
        not the California Department of Insurance.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In practice, criminal prosecution of contractors under &sect;551(b) appears to be
        exceedingly rare. There are no published appellate decisions interpreting the statute in
        the property insurance context. This means the ambiguities in the exception clause, the
        meaning of &ldquo;in accordance with that determination,&rdquo; and the application to
        multi-contractor claims are all unresolved &mdash; just as in Texas, but with even less
        enforcement history.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For California policyholders and contractors, the practical takeaway is that the statute
        exists and creates theoretical criminal exposure, but its scope is genuinely unclear.
        The safest course is to document everything: if the deductible was paid to a prior
        contractor, keep the canceled check or receipt. If the contractor is performing work for
        less than the estimate, document that the lower price reflects actual costs, not a
        deductible waiver. The distinction between &ldquo;doing the work for less&rdquo; and
        &ldquo;waiving the deductible&rdquo; may look identical on paper but carries very
        different legal implications &mdash; and nobody has litigated where the line falls.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Florida
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Florida (Fla. Stat. &sect;489.147) prohibits contractors from advertising or promising
        to pay or waive deductibles as an inducement, with a particular focus on roof claims.
        Florida&rsquo;s statute is narrower in some respects than the Texas law &mdash; it
        targets the <em>advertising</em> and <em>promising</em> rather than the act of
        ultimately not collecting the money &mdash; but Florida also has robust insurance fraud
        statutes that can sweep in deductible-related conduct. The Florida legislature has been
        particularly active in this area following the{' '}
        <Link href="/resources/assignment-of-benefits" className="text-blue-700 underline hover:text-blue-900">
          assignment of benefits
        </Link>{' '}
        reform wave.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Colorado and Other States
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Colorado (C.R.S. &sect;6-22-105) has a similar prohibition specific to roofing
        contractors. Most other states address the issue through general insurance fraud statutes
        rather than contractor-specific deductible laws. The absence of a specific deductible
        waiver statute does not mean the practice is legal &mdash; it may still constitute
        insurance fraud depending on the facts &mdash; but it does mean there is no bright-line
        statutory prohibition to point to.
      </p>

      <CalloutBox variant="legal" title="An Open Question With No Easy Answers">
        <p>
          Whether a contractor deductible arrangement is unlawful depends on the specific facts,
          the specific state, and the specific statutory language &mdash; which is often
          ambiguous on the situations that arise most frequently in practice. The edge cases
          &mdash; deductibles already satisfied by a prior contractor, losses exceeding policy
          limits, partial scopes of work, the fraud implications of misrepresenting actual costs
          &mdash; are not clearly resolved by any of these statutes. Even attorneys may not agree
          on the answers. If you are a homeowner or contractor dealing with a deductible dispute,
          consult a licensed attorney in your state. Do not rely on what a contractor, an
          adjuster, or an article on the internet tells you the law requires &mdash; including
          this one.
        </p>
      </CalloutBox>

      <CalloutBox variant="legal" title="Disclaimer">
        <p>
          This article is provided for general educational purposes only and does not constitute
          legal advice. Insurance policies, regulations, and deductible waiver laws vary
          significantly by state. Consult a licensed attorney in your state for advice about
          your specific situation.
        </p>
      </CalloutBox>
    </>
  )
}
