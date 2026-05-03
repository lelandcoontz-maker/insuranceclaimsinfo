import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Insurance Deductibles: Types, Calculations, and When They\'re Misapplied',
  description:
    'A complete guide to insurance deductibles — flat dollar, percentage-based, earthquake, wind/hurricane, how they interact with ACV and depreciation, and how to spot when your carrier has misapplied yours.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational in nature and reflects the author&rsquo;s interpretation of
          insurance policy provisions and California insurance law as a Licensed Public Adjuster.
          It is not legal advice. Every policy is different, and the deductible provisions in your
          policy control how your deductible is applied. If you believe your deductible has been
          misapplied, consult your policy language and consider seeking professional assistance.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        The deductible is the single most familiar concept in insurance &mdash; the amount you pay
        out of pocket before your insurance kicks in. But that simple definition hides a surprising
        amount of complexity. There are different types of deductibles, different ways they are
        calculated, and different ways carriers misapply them. Understanding how your deductible
        actually works can mean the difference between a straightforward claim and one where you
        leave thousands of dollars on the table.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Flat Dollar Deductibles
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The most common type of deductible on a standard homeowner policy is a flat dollar
        deductible &mdash; a fixed amount stated on your{' '}
        <Link href="/resources/declarations-page" className="text-blue-700 underline hover:text-blue-900">
          declarations page
        </Link>. If your deductible is $2,500, you pay the first $2,500 of every covered loss, and
        the insurer pays the rest up to your policy limits.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Flat dollar deductibles are straightforward in concept but raise questions in practice. The
        most common question is whether the deductible applies per occurrence or per policy period.
        On most homeowner policies, the deductible applies <strong>per occurrence</strong> &mdash;
        meaning each separate loss event triggers its own deductible. If a windstorm damages your
        roof in January and a pipe bursts in March, you pay the deductible twice.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Percentage-Based Deductibles
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A percentage-based deductible is calculated as a percentage of your Coverage A dwelling
        limit rather than a fixed dollar amount. If your dwelling is insured for $800,000 and your
        deductible is 5%, your deductible is $40,000 &mdash; not $2,500. This distinction matters
        enormously, and many policyholders do not realize they have a percentage deductible until
        they file a claim.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Percentage deductibles are most commonly associated with specific perils rather than all
        losses. You may have a $2,500 flat deductible for most covered perils but a 10% or 15%
        deductible for earthquake, wind, or other catastrophic events. The declarations page
        should clearly identify which deductible applies to which perils.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Earthquake Deductibles in California
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Earthquake deductibles are the most significant percentage deductibles California
        policyholders encounter. The California Earthquake Authority (CEA) offers deductible
        options of 5%, 10%, 15%, 20%, or 25% of the Coverage A dwelling limit. At a 15%
        deductible on a home insured for $700,000, you are responsible for the first $105,000 of
        earthquake damage out of your own pocket.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is not a mistake or an oversight &mdash; it is by design. Earthquake risk in
        California is catastrophic in nature, and the high deductibles keep CEA premiums
        affordable. But it means that moderate earthquake damage &mdash; cracked foundations,
        broken chimneys, damaged retaining walls &mdash; often falls entirely within the
        deductible. Many homeowners who paid premiums for years discover after a quake that their
        damage does not exceed the deductible and they receive nothing from the policy.
      </p>

      <CalloutBox variant="tip" title="CEA Deductible Applies to Dwelling Only">
        <p>
          The CEA percentage deductible applies to Coverage A (Dwelling) only. If you purchased
          optional Coverage C (Personal Property), it has its own separate deductible &mdash;
          typically a flat dollar amount between $2,500 and $25,000. Coverage D (Loss of Use) has
          <strong> no deductible</strong> at all.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        Private earthquake carriers like Palomar and GeoVera also use percentage deductibles but
        may offer lower options (some as low as 2.5%) at higher premium levels. If you are
        shopping for earthquake coverage, the deductible is one of the most important variables to
        compare. For a detailed comparison, see our{' '}
        <Link href="/resources/earthquake-insurance" className="text-blue-700 underline hover:text-blue-900">
          earthquake insurance guide
        </Link>.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Wind and Hurricane Percentage Deductibles
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        In coastal and hurricane-prone states &mdash; Florida, Texas, Louisiana, the Carolinas,
        and others &mdash; wind or hurricane deductibles of 2% to 10% of the dwelling value are
        common. These function the same way as earthquake percentage deductibles: the deductible
        is calculated as a percentage of Coverage A, and the policyholder absorbs that amount
        before the carrier pays anything.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        California does not typically use wind or hurricane percentage deductibles. Standard
        California homeowner policies cover wind damage under the flat dollar deductible that
        applies to all non-excluded perils. However, if you own property in a hurricane-prone
        state, pay close attention to the deductible structure. A 5% wind deductible on a
        $500,000 home means $25,000 out of pocket before the carrier pays a dollar &mdash; and
        that amount can be surprising to policyholders who are accustomed to a $1,000 or $2,500
        flat deductible for other losses.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When the Deductible Exceeds the Damage
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        With percentage-based deductibles &mdash; especially earthquake deductibles &mdash; the
        deductible is a percentage of your <strong>coverage limit</strong>, not a percentage of
        the loss. This creates a situation that surprises many policyholders: the deductible can
        exceed the actual damage. If your home is insured for $800,000 with a 15% earthquake
        deductible, your deductible is $120,000. If the earthquake causes $90,000 in damage
        &mdash; cracked foundation, broken chimney, cracked stucco &mdash; the entire loss falls
        within the deductible. You pay for everything. The carrier pays nothing.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is not a misapplication &mdash; it is how percentage deductibles work by design.
        The deductible is set at a percentage of Coverage A to keep premiums affordable for
        catastrophic peril coverage. But it means that anything less than catastrophic damage
        to a well-insured home may produce zero recovery. Before filing an earthquake claim,
        calculate whether the damage exceeds your deductible. If it does not, filing the claim
        creates a claims history entry with no financial benefit &mdash; and that entry follows
        you in the{' '}
        <Link href="/resources/clue-database" className="text-blue-700 underline hover:text-blue-900">
          CLUE database
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Scope the Whole Loss, Subtract the Deductible at the End
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Adjusting textbooks and proper claims practice teach a concept sometimes called{' '}
        <strong>deductible absorption</strong>: the adjuster scopes and prices the{' '}
        <em>entire</em> loss &mdash; every item of damage, every repair needed &mdash; and
        the deductible is subtracted at the end from the total. The deductible does not change
        what work needs to be done. It only changes how much the insurer pays versus how much
        the policyholder pays.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This concept appears in adjusting textbooks and is standard practice among properly
        trained adjusters, though it is not always referred to by the term &ldquo;absorption.&rdquo;
        The principle is indirectly reflected in case law &mdash; particularly in Florida, where
        courts have addressed how deductibles interact with repair values and policy limits &mdash;
        but it is primarily a matter of proper adjusting methodology rather than a named legal
        doctrine.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The improper counterpart is when a carrier reduces the <em>scope</em> of the loss to
        match or approach the deductible. Instead of writing for all the damage and subtracting
        the deductible, the adjuster writes a scope that barely exceeds the deductible &mdash;
        conveniently resulting in a minimal payment. This is not a legitimate application of the
        deductible. It is scope manipulation disguised as a deductible issue. If the damage
        exists, it belongs in the estimate regardless of the deductible amount.
      </p>

      <CalloutBox variant="important" title="Subtract From the Loss, Not From the Limit">
        <p>
          The deductible comes off the <strong>repair or replacement value</strong> &mdash; not
          the policy limit. On a $500,000 policy with a $5,000 deductible and a $300,000 loss,
          the carrier owes $295,000. Some carriers incorrectly subtract the deductible from the
          policy limit instead of the loss, which changes the math on how much coverage remains.
          The deductible is the policyholder&rsquo;s share of the <em>loss</em>, not a reduction
          of available coverage.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Contractors and Deductibles: Not as Simple as &ldquo;It&rsquo;s the Law&rdquo;
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        After storms, contractors sometimes offer to &ldquo;take care of your deductible&rdquo;
        as an incentive. Several states have statutes addressing this practice. But the
        confident declarations you hear from contractors, adjusters, and internet commentators
        &mdash; that deductible waivers are flatly &ldquo;illegal&rdquo; &mdash; often collapse
        under scrutiny when you read the actual statutory language and apply it to common
        real-world situations. This is a topic with strongly held opinions, significant
        ambiguity, and very little published case law resolving the hard questions.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Texas: What the Statutes Actually Say
      </h3>
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

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Who Wrote This Law, and Why
      </h3>
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

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        No Court Has Interpreted This Law
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        In the nearly seven years since Chapter 707 took effect, <strong>no Texas appellate court
        has published a decision interpreting it</strong>. The questions raised throughout this
        section &mdash; whether the deductible obligation is satisfied when paid to a prior
        contractor, whether it is absorbed into over-limit losses, whether partial repairs
        constitute &ldquo;assisting&rdquo; avoidance &mdash; are genuinely unresolved. They are
        not unresolved because the answers are obvious. They are unresolved because nobody has
        litigated them to a published decision. Criminal enforcement (Class B misdemeanor) would
        produce trial-level cases that are rarely published, and civil litigation citing these
        sections does not appear in any public database.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        The &sect;707.004 Enforcement Gap
      </h3>
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

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Where the Texas Language Gets Complicated
      </h3>
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

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        The Insurance Fraud Question &mdash; Separate from Any Statute
      </h3>
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

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        California: Penal Code &sect;551(b)
      </h3>
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
      <p className="text-gray-700 leading-relaxed mb-4">
        The exception at the beginning of &sect;551(b) is significant and arguably swallows much
        of the rule. If the insurer has already determined the claim amount and the contractor
        performs the work in accordance with that determination, the prohibition does not apply.
        On a typical insurance claim where the carrier has issued an estimate and the contractor
        performs the approved scope, the exception would seem to apply &mdash; but the statute
        does not define what &ldquo;in accordance with that determination&rdquo; means in
        practice, and there is very little published case law interpreting it.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Violations under $950 are a misdemeanor. Over $950, the offense is a wobbler &mdash;
        prosecutable as a misdemeanor or a felony carrying up to three years.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Other States
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Florida (Fla. Stat. &sect;489.147) prohibits contractors from advertising or promising
        to pay or waive deductibles as an inducement, with a particular focus on roof claims.
        Colorado (C.R.S. &sect;6-22-105) has a similar prohibition specific to roofing
        contractors. Most other states address the issue through general insurance fraud statutes
        rather than contractor-specific deductible laws.
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

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When Carriers Misapply Deductibles
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Deductible misapplication is more common than most policyholders realize. It often goes
        unnoticed because policyholders assume the carrier applied the deductible correctly. Here
        are the most frequent ways deductibles are misapplied:
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Applying Per-Occurrence When It Should Be Per-Policy
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some commercial policies and certain endorsements apply the deductible on a per-policy-period
        basis rather than per-occurrence. If you have already paid your deductible on a previous loss
        during the same policy period, a second loss may not trigger another deductible &mdash; or
        may trigger only the difference. If the carrier applies a full per-occurrence deductible to
        every loss without checking whether your policy uses a per-policy or aggregate deductible,
        you are overpaying.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Applying the Deductible to the Wrong Coverage
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your homeowner policy has multiple coverage parts: Coverage A (Dwelling), Coverage B
        (Other Structures), Coverage C (Personal Property), and Coverage D (Loss of Use). The
        standard deductible typically applies to property damage coverages (A, B, and C) but
        does <strong>not</strong> apply to Coverage D &mdash; Loss of Use / Additional Living
        Expenses. If a carrier subtracts the deductible from your ALE payment, that is an error.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Similarly, some carriers incorrectly apply the property deductible to a liability claim
        under Coverage E, or apply a dwelling deductible to a Contents-only claim where a
        separate contents deductible should apply. Always check which coverage part the deductible
        is being applied to and whether that matches your policy language.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Double-Dipping: Applying the Deductible Twice
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a single occurrence causes damage to multiple coverage parts &mdash; say, the
        dwelling and personal property &mdash; the deductible should be applied once, not once
        per coverage part. If the carrier subtracts $2,500 from your dwelling payment and another
        $2,500 from your contents payment, they have effectively charged you a $5,000 deductible
        on a single occurrence. Check the policy language carefully &mdash; most homeowner
        policies apply one deductible per occurrence regardless of how many coverage parts are
        involved.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The ACV-Before-Deductible vs. Deductible-Before-Depreciation Issue
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is one of the most consequential and least understood deductible issues in property
        insurance. The question is simple: when calculating the initial payment on a replacement
        cost policy, does the carrier (1) calculate ACV first, then subtract the deductible, or
        (2) calculate the replacement cost, subtract the deductible, and then apply depreciation?
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The standard approach &mdash; and the one most policies contemplate &mdash; is to
        calculate ACV first and then subtract the deductible. On a $50,000 loss with 20%
        depreciation and a $2,500 deductible, the math looks like this:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Replacement Cost Value (RCV): $50,000</li>
        <li>Less depreciation (20%): &minus;$10,000</li>
        <li>Actual Cash Value (ACV): $40,000</li>
        <li>Less deductible: &minus;$2,500</li>
        <li><strong>Initial ACV payment: $37,500</strong></li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        When the policyholder completes repairs and claims the recoverable depreciation, the
        carrier releases the $10,000 holdback. Total recovery: $47,500 ($50,000 minus the
        $2,500 deductible). The deductible is borne once and only once.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The problem arises when carriers apply the deductible in a way that effectively reduces
        the recoverable depreciation. If the carrier subtracts the deductible from the RCV before
        calculating depreciation, or refuses to release the full depreciation holdback because
        &ldquo;the deductible already covered part of it,&rdquo; the policyholder ends up paying
        more than the stated deductible. This is a form of improper deductible application that
        is worth challenging. For a deeper discussion of depreciation issues, see our article on{' '}
        <Link href="/resources/loss-settlement-provisions" className="text-blue-700 underline hover:text-blue-900">
          loss settlement provisions
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Deductibles Interact with Coverage Limits
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        An important and often misunderstood point: the deductible does <strong>not</strong>{' '}
        reduce your Coverage A limit. If your dwelling is insured for $500,000 with a $5,000
        deductible, the maximum the carrier will pay on a dwelling claim is $495,000 &mdash; but
        your home is still insured &ldquo;up to&rdquo; $500,000. The deductible is your share of
        the loss, not a reduction in available coverage.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This distinction matters most on total loss claims where the damage equals or exceeds the
        Coverage A limit. On a total loss, the carrier pays the full limit minus the deductible.
        On a partial loss, the carrier pays the cost to repair minus the deductible (up to the
        limit). In either case, the deductible represents the policyholder&rsquo;s retained risk
        &mdash; the amount you agreed to absorb when you selected that deductible level.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Deductible Disclosure Requirements in California
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California law requires insurers to clearly disclose deductible information to
        policyholders. The{' '}
        <Link href="/resources/declarations-page" className="text-blue-700 underline hover:text-blue-900">
          declarations page
        </Link>{' '}
        must identify the applicable deductible for each coverage part. California Insurance Code
        &sect;10101 requires that the deductible provisions be prominently displayed on the
        policy&rsquo;s face page or declarations page.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For percentage-based deductibles, the insurer must disclose not just the percentage but
        also provide clear language explaining how the dollar amount is calculated. This is
        particularly important for earthquake policies, where the percentage deductible can result
        in a deductible amount that far exceeds what most homeowners expect. The CDI has
        emphasized that policyholders must be given a clear, understandable explanation of how
        percentage deductibles work before the policy is bound.
      </p>

      <CalloutBox variant="important" title="Check Your Dec Page Now">
        <p>
          If you are not sure what type of deductible you have &mdash; flat dollar or percentage
          &mdash; check your declarations page before you have a loss. Discovering a 10%
          earthquake deductible after an earthquake is a $70,000 surprise on a $700,000 home.
          Understanding your deductible structure now allows you to plan accordingly, adjust your
          coverage if needed, or set aside reserves for the deductible amount.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Disappearing Deductibles and Vanishing Deductible Endorsements
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some carriers offer endorsements that reduce or eliminate the deductible over time if no
        claims are filed. These &ldquo;vanishing deductible&rdquo; or &ldquo;disappearing
        deductible&rdquo; programs typically reduce the deductible by a fixed amount for each
        claim-free year. For example, a $2,500 deductible might decrease by $250 per year, reaching
        $0 after ten claim-free years.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        These endorsements can be valuable, but they reset if you file a claim. And they only
        apply to the specific deductible referenced in the endorsement &mdash; a vanishing
        deductible on your all-perils deductible does not affect a separate earthquake percentage
        deductible. Read the endorsement carefully to understand which deductible it modifies and
        under what circumstances the reduction resets.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Practical Tips for Deductible Issues
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Always verify the deductible amount shown on the carrier&rsquo;s estimate or payment
          summary against your declarations page. Errors happen.
        </li>
        <li>
          On claims involving multiple coverage parts, confirm that only one deductible has been
          applied per occurrence unless the policy clearly states otherwise.
        </li>
        <li>
          If you have a percentage deductible for a specific peril, do the math before filing a
          claim. If the damage is below the deductible, filing the claim creates a claims history
          with no benefit.
        </li>
        <li>
          When a third party caused the damage, your carrier may recover the deductible through{' '}
          <Link href="/resources/subrogation" className="text-blue-700 underline hover:text-blue-900">
            subrogation
          </Link>. Ask about deductible recovery whenever another party is responsible.
        </li>
        <li>
          On supplemental claims, the deductible should not be applied again. If the carrier
          subtracts the deductible from a supplement payment on a claim where the deductible was
          already taken, push back immediately.
        </li>
      </ul>

      <CalloutBox variant="legal" title="Disclaimer">
        <p>
          This article is provided for general educational purposes only and does not constitute
          legal advice. Insurance policies, regulations, and deductible structures vary
          significantly. Consult your policy language and a licensed professional for advice about
          your specific situation.
        </p>
      </CalloutBox>
    </>
  )
}
