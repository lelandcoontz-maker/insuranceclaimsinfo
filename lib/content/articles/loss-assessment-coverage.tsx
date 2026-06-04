import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Loss Assessment Coverage: Why $1,000 Is Not Enough for Condo and HOA Owners',
  description:
    'Loss assessment coverage pays your share of HOA special assessments after a covered loss. Learn why the default $1,000 limit is dangerously inadequate in California.',
  summary:
    'Loss assessment coverage pays your share of an HOA special assessment after a covered loss, but the common $1,000 default limit is dangerously low in California. Raise the limit so a large assessment does not fall entirely on you.',
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
        If you own a condominium or live in a community governed by a homeowners association,
        there is a coverage on your HO-6 policy that most unit owners have never heard of &mdash;
        and it may be the single most important endorsement you can buy. It is called{' '}
        <strong>loss assessment coverage</strong>, and it protects you when the
        association&rsquo;s master policy falls short of covering a common area loss and the
        shortfall is passed on to you as a special assessment.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most HO-6 policies include a base loss assessment limit of <strong>$1,000</strong>. In
        a state like California &mdash; where wildfire, earthquake, and aging infrastructure
        create routine six- and seven-figure shortfalls on master policies &mdash; that $1,000
        is functionally meaningless. Understanding this coverage, and endorsing it to an
        adequate level, is one of the simplest and most cost-effective ways to protect yourself
        as a unit owner.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Loss Assessment Coverage Actually Is
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Every condominium and HOA community carries a{' '}
        <Link href="/resources/condo-hoa-claims" className="text-[#2E74B5] underline">
          master insurance policy
        </Link>{' '}
        that covers the building structure and common areas. When a covered loss occurs &mdash;
        a fire damages the building, a pipe bursts in a common hallway, a tree falls on the
        parking structure &mdash; the master policy responds first.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        But master policies have limits and deductibles, just like any other insurance policy.
        When the cost of the loss exceeds what the master policy pays, the association must come
        up with the difference. Under most CC&amp;Rs and under California&rsquo;s Davis-Stirling
        Common Interest Development Act (Civil Code &sect;&sect;4000&ndash;6150), the association
        has the authority to levy a <strong>special assessment</strong> against all unit owners to
        cover that shortfall.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Loss assessment coverage on your HO-6 policy pays <strong>your share</strong> of that
        special assessment &mdash; not the entire assessment, just the portion levied against
        your unit. The standard ISO HO 00 06 form includes $1,000 of loss assessment coverage
        as part of the base policy. That amount can be endorsed significantly higher, typically
        to $25,000, $50,000, or $100,000, for a relatively modest additional premium.
      </p>

      <CalloutBox variant="info" title="Loss Assessment vs. Master Policy Coverage">
        <p>
          Loss assessment coverage does not duplicate or replace the HOA&rsquo;s master policy.
          It responds only after the association has levied a special assessment against you
          personally. It pays your individual share of a common loss &mdash; not the
          association&rsquo;s total shortfall.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Loss Assessments Work in Practice
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The mechanics are straightforward, but the dollar amounts can be staggering. Here are
        three real-world scenarios that illustrate how assessments arise:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Scenario 1: Fire Loss with a Master Policy Deductible
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A fire damages the common area of a 100-unit condominium building. The HOA&rsquo;s
        master policy has a $50,000 deductible. The association must pay that deductible out of
        its own funds. If the reserve fund is insufficient &mdash; as it often is for unexpected
        losses of this size &mdash; the board levies a special assessment of $500 per unit.
        Your loss assessment coverage pays your $500 share.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Scenario 2: Earthquake with a Percentage Deductible
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is where the numbers become dangerous. An earthquake damages the common areas of
        the same 100-unit building. The HOA&rsquo;s master policy &mdash; if it even includes
        earthquake coverage &mdash; has a <strong>15 percent deductible</strong> on a $10 million
        building. That deductible is $1,500,000. Split among 100 unit owners, each owner&rsquo;s
        share is <strong>$15,000</strong>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your HO-6 policy has only $1,000 of loss assessment coverage, you are personally
        responsible for the remaining $14,000. That is not a hypothetical &mdash; earthquake
        deductibles of 10 to 15 percent are standard in California, and percentage deductibles
        on master policies routinely generate five-figure assessments per unit.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Scenario 3: Liability Judgment Against the HOA
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Loss assessments are not limited to property damage. If the association faces a
        liability judgment &mdash; someone is injured in a common area, or the association is
        sued for negligent maintenance &mdash; and the master policy&rsquo;s liability coverage
        is exhausted, the association can levy an assessment to cover the excess. Your loss
        assessment coverage can respond to this type of assessment as well, provided the
        underlying loss is of a type covered by your HO-6 policy.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Deductible Assessment Endorsement
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some HO-6 policies offer a separate endorsement specifically designed to cover your
        share of the <strong>master policy deductible</strong>. This is distinct from general
        loss assessment coverage, which applies to assessments broadly. The deductible assessment
        endorsement targets the most common source of assessments: the gap between the loss
        amount and the master policy&rsquo;s deductible.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your policy offers this endorsement, it is worth adding. In many claims, the master
        policy deductible is the sole reason for the assessment. Having a dedicated endorsement
        for this exposure simplifies the claim and reduces the likelihood of coverage disputes.
        Ask your agent or broker whether your HO-6 includes or can add a deductible assessment
        endorsement, and whether it applies in addition to or instead of the general loss
        assessment limit.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why $1,000 of Loss Assessment Coverage Is Dangerously Inadequate
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The $1,000 base limit on most HO-6 policies is a relic of an era when master policy
        deductibles were modest and catastrophic common area losses were rare. In modern
        California, $1,000 of loss assessment coverage is inadequate for virtually any condo
        or HOA community. Consider the following:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Earthquake deductibles are enormous.</strong> Master policies with earthquake
          coverage commonly carry deductibles of 10 to 15 percent of the insured value. On a
          $10 million building, that is $1 million to $1.5 million &mdash; potentially $10,000
          to $15,000 per unit in a 100-unit complex, and far more in smaller associations.
        </li>
        <li>
          <strong>Wildfire losses can exceed master policy limits.</strong> When a wildfire
          destroys or severely damages a condominium complex, reconstruction costs often exceed
          the master policy limits due to demand surge. The assessment to cover that gap can be
          tens of thousands of dollars per unit. The 2025 Palisades and Eaton fires demonstrated
          exactly this risk for affected HOA communities.
        </li>
        <li>
          <strong>Many HOAs lack earthquake coverage entirely.</strong> Some associations have
          dropped earthquake coverage from the master policy due to premium costs. If the
          building sustains earthquake damage and there is no master policy coverage at all, the
          entire reconstruction cost may be assessed to unit owners. In that scenario, individual
          assessments can reach six figures.
        </li>
        <li>
          <strong>Aging infrastructure creates large, sudden losses.</strong> Plumbing failures,
          electrical fires, and structural issues in older buildings can result in losses that
          strain master policy limits and generate assessments for the shortfall.
        </li>
      </ul>

      <CalloutBox variant="warning" title="Endorsing Loss Assessment Coverage Is Inexpensive">
        <p>
          Increasing your loss assessment limit from $1,000 to $50,000 or even $100,000
          typically costs only a few dollars per month in additional premium. There is almost
          no reason not to carry the highest available limit. Ask your agent for a quote on
          the endorsement &mdash; the cost is trivial compared to the exposure.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Triggers Loss Assessment Coverage &mdash; and What Does Not
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Loss assessment coverage does not respond to every special assessment the HOA levies.
        There are specific requirements that must be met:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Requirements for Coverage
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>The assessment must result from a direct loss.</strong> The underlying event
          must be a direct physical loss to property or a covered liability occurrence &mdash;
          not a business decision, maintenance need, or capital improvement.
        </li>
        <li>
          <strong>The loss must be caused by a peril covered under your HO-6 policy.</strong>{' '}
          This is the critical point that many unit owners miss. If the assessment is for
          earthquake damage and your HO-6 does not include earthquake coverage, your loss
          assessment coverage will likely not respond. If the assessment is for flood damage
          and you do not carry flood coverage, the same applies. The covered-peril requirement
          connects your loss assessment coverage to the perils insured under your individual
          policy.
        </li>
        <li>
          <strong>The assessment must be levied by the association.</strong> Informal requests
          for contributions, voluntary fund drives, or individual unit owner expenses do not
          qualify. There must be a formal assessment by the board of directors, typically
          pursuant to the CC&amp;Rs and applicable state law.
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        What Is Not Covered
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Assessments for <strong>routine maintenance</strong> &mdash; repainting the building,
          repaving the parking lot, replacing worn carpet in common hallways &mdash; are not
          covered. These are maintenance expenses, not insured losses.
        </li>
        <li>
          Assessments for <strong>capital improvements or upgrades</strong> &mdash; adding a
          new amenity, upgrading the HVAC system, installing solar panels &mdash; are not
          covered regardless of how they are characterized.
        </li>
        <li>
          Assessments arising from <strong>uncovered perils</strong> &mdash; as noted above,
          if the underlying loss was caused by a peril excluded from your HO-6, the assessment
          coverage does not respond.
        </li>
        <li>
          Assessments for <strong>deferred maintenance failures</strong> that the carrier
          characterizes as{' '}
          <Link href="/resources/wear-and-tear-cause-of-loss" className="text-[#2E74B5] underline">
            wear and tear
          </Link>{' '}
          rather than sudden and accidental loss.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Understanding the HOA Master Policy Gap
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        To properly evaluate your loss assessment exposure, you need to understand what the
        HOA&rsquo;s master policy actually covers &mdash; and, more importantly, where it falls
        short. The{' '}
        <Link href="/resources/condo-hoa-claims" className="text-[#2E74B5] underline">
          interaction between the master policy and your HO-6
        </Link>{' '}
        is complex, but for loss assessment purposes, the key questions are:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>What is the master policy deductible?</strong> This is the single most
          important number. A $25,000 deductible on a 50-unit building means a potential $500
          per-unit assessment just for the deductible. A $500,000 deductible &mdash; common on
          larger commercial-form master policies &mdash; means $10,000 per unit.
        </li>
        <li>
          <strong>Does the master policy include earthquake coverage?</strong> Many California
          HOA master policies exclude earthquake entirely due to premium costs. If the master
          policy has no earthquake coverage, and an earthquake damages the building, the entire
          reconstruction cost falls on the unit owners through assessments.
        </li>
        <li>
          <strong>Does the master policy include flood coverage?</strong> The same analysis
          applies to flood. If the building is in a flood zone and the master policy excludes
          flood, unit owners bear 100 percent of flood losses through assessments.
        </li>
        <li>
          <strong>What are the master policy limits?</strong> If the building is underinsured
          &mdash; particularly after construction cost increases &mdash; the gap between the
          master policy limit and the actual reconstruction cost is assessed to unit owners.
        </li>
        <li>
          <strong>Is the master policy &ldquo;bare walls&rdquo; or &ldquo;all-in&rdquo;?</strong>{' '}
          This affects not only what the master policy covers but also the potential magnitude
          of assessments. A bare-walls policy covers only the structural elements; everything
          inside the unit walls is the owner&rsquo;s responsibility. An all-in policy covers
          fixtures and improvements within units as originally built. The CC&amp;Rs determine
          which approach applies.
        </li>
      </ul>

      <CalloutBox variant="tip" title="You Have a Right to See the Master Policy">
        <p>
          Under California Civil Code &sect;5200, every member of a common interest development
          has the right to inspect and copy the association&rsquo;s records, including insurance
          policies. You do not need to give a reason. Request a complete copy of the master
          policy &mdash; not just the declarations page, but the full policy including all
          endorsements and exclusions. If the board refuses, that refusal itself is a violation
          of the Davis-Stirling Act.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        California Davis-Stirling Act Provisions on Assessments
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Davis-Stirling Common Interest Development Act governs how California HOAs and
        condo associations levy assessments. Several provisions are directly relevant to loss
        assessment claims:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Civil Code &sect;5605:</strong> The board may impose special assessments
          subject to member approval requirements. Assessments that exceed 5 percent of the
          association&rsquo;s budgeted gross expenses for the current fiscal year generally
          require a member vote, unless the board determines that an emergency exists &mdash;
          which is typically the case after a major property loss.
        </li>
        <li>
          <strong>Civil Code &sect;5610:</strong> Defines &ldquo;emergency&rdquo; assessments
          that the board can levy without a member vote, including assessments necessary to
          address an immediate threat to personal safety or structural integrity, or to comply
          with a court order.
        </li>
        <li>
          <strong>Civil Code &sect;5300:</strong> Requires the association to distribute an
          annual budget report that includes a summary of the association&rsquo;s insurance
          coverage. This report should identify the master policy limits, deductibles, and any
          excluded perils. Review this document annually to assess your loss assessment exposure.
        </li>
        <li>
          <strong>Civil Code &sect;5810:</strong> Allows the association to impose assessments
          to fund litigation, subject to member approval requirements. If the association is
          involved in construction defect litigation or other legal disputes, these assessments
          may trigger loss assessment coverage if the underlying claim involves a covered peril.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Understanding these provisions matters because the <em>form</em> of the assessment can
        affect whether your loss assessment coverage responds. A properly levied special
        assessment under Davis-Stirling is far easier to present to your HO-6 carrier than an
        informal board request or a vaguely worded dues increase.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Carrier Tactics on Loss Assessment Claims
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Loss assessment claims are frequently denied or underpaid. Carriers employ several
        recurring tactics to avoid payment:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        &ldquo;The Assessment Is Not for a Covered Peril&rdquo;
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the most common denial basis. The carrier reviews the underlying loss and argues
        that it was caused by a peril excluded from the HO-6 &mdash; typically{' '}
        <Link href="/resources/exclusions" className="text-[#2E74B5] underline">
          earth movement, flood, or wear and tear
        </Link>. Sometimes the characterization is legitimate; often it is not. A plumbing failure
        in a common area is a sudden and accidental water loss &mdash; a covered peril &mdash;
        even if the pipe was old. The age of the pipe goes to depreciation, not to whether the
        peril is covered. Challenge any denial that recharacterizes a sudden loss as maintenance
        or wear and tear.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Per-Occurrence vs. Aggregate Limits
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some carriers apply the loss assessment limit on a per-occurrence basis, while others
        treat it as an annual aggregate. The difference matters when multiple assessments arise
        in the same policy period. If your building sustains fire damage and a separate water
        loss in the same year, resulting in two assessments, a per-occurrence limit allows you
        to claim each assessment up to the full limit. An aggregate limit means both assessments
        share the same cap. Check your policy language carefully &mdash; this distinction is not
        always obvious.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Classifying the Assessment as &ldquo;Maintenance&rdquo;
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Carriers sometimes argue that the assessment is really for deferred maintenance rather
        than an insured loss. This tactic is particularly common when the underlying damage
        involves plumbing, roofing, or building envelope issues. The carrier points to the age
        of the system and argues the failure was inevitable rather than sudden and accidental.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The response to this tactic is the same as in any{' '}
        <Link href="/resources/coverage-disputes" className="text-[#2E74B5] underline">
          coverage dispute
        </Link>: the relevant question is the <em>cause</em> of the loss, not the age or
        condition of the property. A 30-year-old pipe that bursts is still a sudden and
        accidental water loss. The exclusion for wear and tear applies to losses{' '}
        <em>caused by</em> deterioration, not to losses that happen to affect deteriorated
        property.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Requiring Proof the Assessment Was Formally Levied
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Carriers will sometimes deny a claim because the unit owner cannot produce a formal
        assessment notice from the HOA board. This is why documentation matters. When you
        receive an assessment notice, keep the original document, the board minutes authorizing
        the assessment, and any correspondence from the HOA explaining the underlying loss.
        These documents are essential to your loss assessment claim.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Filing a Loss Assessment Claim: Step by Step
      </h2>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Obtain the assessment notice.</strong> Get the formal written notice from the
          HOA board, including the amount assessed per unit, the reason for the assessment, and
          the date of the board resolution authorizing it.
        </li>
        <li>
          <strong>Document the underlying loss.</strong> Request from the HOA a description of
          the loss that triggered the assessment, the master policy claim number, and &mdash;
          if available &mdash; the master policy&rsquo;s response (how much it paid and why the
          shortfall exists).
        </li>
        <li>
          <strong>Review your HO-6 policy.</strong> Confirm your loss assessment limit, identify
          any deductible assessment endorsement, and verify that the underlying peril is covered
          under your policy.
        </li>
        <li>
          <strong>File a claim with your HO-6 carrier.</strong> Report the loss assessment
          claim promptly. Provide the assessment notice, HOA documentation, and a brief
          explanation of the underlying loss and why it constitutes a covered peril.
        </li>
        <li>
          <strong>Follow up in writing.</strong> If the carrier denies or delays, respond in
          writing. Under California Insurance Code &sect;790.03(h) and California Code of
          Regulations &sect;2695.7, the carrier must acknowledge your claim within 15 days,
          accept or deny within 40 days, and provide a written explanation for any denial.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Practical Tips for Condo and HOA Owners
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The best time to address your loss assessment exposure is before a loss occurs. These
        steps take minimal effort and can save you tens of thousands of dollars:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Request and review the HOA master policy.</strong> You have a legal right to
          see it under Civil Code &sect;5200. Do not accept a summary &mdash; request the full
          policy with all endorsements and exclusions. Pay particular attention to the
          deductible, the coverage limits, and whether earthquake and flood are included.
        </li>
        <li>
          <strong>Calculate your worst-case assessment exposure.</strong> Take the master
          policy deductible and divide it by the number of units. Then consider what happens if
          the master policy limits are exhausted entirely. That gives you a range of potential
          assessments, and it tells you how much loss assessment coverage you actually need.
        </li>
        <li>
          <strong>Endorse your loss assessment coverage to an adequate level.</strong> For most
          California condo owners, $50,000 to $100,000 of loss assessment coverage is
          appropriate. The endorsement cost is typically minimal &mdash; often less than $50 per
          year for a significant increase in protection.
        </li>
        <li>
          <strong>Ask the HOA about earthquake and flood coverage specifically.</strong> These
          are the two perils most likely to generate catastrophic assessments. If the master
          policy excludes them, you need to know &mdash; and you need to ensure your individual
          HO-6 has earthquake coverage so that your loss assessment coverage will respond to an
          earthquake-related assessment.
        </li>
        <li>
          <strong>Attend board meetings and review the annual budget report.</strong> The
          association&rsquo;s annual budget report (required under Civil Code &sect;5300) includes
          an insurance summary. Review it every year. If the master policy deductible has
          increased or coverage has been dropped, adjust your individual coverage accordingly.
        </li>
        <li>
          <strong>Keep assessment documentation.</strong> If an assessment is levied, keep
          every piece of paper: the board resolution, the assessment notice, any explanation of
          the underlying loss, invoices, and correspondence. Your carrier will require this
          documentation, and having it organized from the start prevents delays.
        </li>
      </ul>

      <CalloutBox variant="tip" title="Coordinate with Your Neighbors">
        <p>
          When a loss assessment is levied, every unit owner in the association has the same
          claim against their individual HO-6 carrier. Coordinating with your neighbors &mdash;
          sharing documentation, comparing carrier responses, and identifying common denial
          patterns &mdash; strengthens everyone&rsquo;s position. If one carrier is paying
          while another is denying the same assessment for the same loss, that inconsistency
          is powerful evidence in a{' '}
          <Link href="/resources/coverage-disputes" className="text-[#2E74B5] underline">
            coverage dispute
          </Link>.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When to Involve a Public Adjuster
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Loss assessment claims can be straightforward when the assessment is small and the
        underlying peril is clearly covered. But when the assessment is large, the carrier
        disputes the covered-peril requirement, or the HOA&rsquo;s documentation is incomplete,
        professional assistance becomes valuable.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A licensed{' '}
        <Link href="/resources/public-adjuster" className="text-[#2E74B5] underline">
          Public Adjuster
        </Link>{' '}
        can review both the master policy and your HO-6, identify the correct coverage
        provisions, assemble the documentation required to support the claim, and negotiate
        with the carrier on your behalf. For assessments in the five-figure range &mdash; which
        are increasingly common in California earthquake and wildfire scenarios &mdash; the
        cost of professional assistance is well justified.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your carrier denies a loss assessment claim, the denial should be reviewed carefully
        before you accept it. Under California&rsquo;s{' '}
        <Link href="/resources/california-fair-claims" className="text-[#2E74B5] underline">
          Fair Claims Settlement Practices Regulations
        </Link>{' '}
        (Cal. Code Regs. tit. 10, &sect;2695.7), the carrier must provide a written explanation
        for any denial, including the specific policy provisions and factual basis on which the
        denial rests. A vague denial letter that simply states &ldquo;not a covered loss&rdquo;
        without identifying the specific exclusion or coverage limitation does not satisfy the
        carrier&rsquo;s obligations under California law.
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
