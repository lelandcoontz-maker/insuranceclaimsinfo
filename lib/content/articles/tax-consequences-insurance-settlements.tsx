import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Tax Consequences of Insurance Claim Settlements',
  description:
    'A guide to the tax implications of insurance claim proceeds — when payouts are taxable, when they are not, involuntary conversion rules, business income, casualty loss deductions, and California-specific considerations.',
  summary:
    'Insurance proceeds are sometimes taxable and sometimes not. Involuntary-conversion rules can defer gain on a destroyed home, business income payouts are taxable, and casualty-loss deductions may apply. Know the rules, and consult a tax professional.',
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

      <CalloutBox variant="warning" title="This Article Is Not Tax Advice">
        <p>
          This article is educational in nature and reflects the author&apos;s general understanding
          of how insurance claim proceeds may be treated for tax purposes. It is <strong>not tax
          advice</strong>. Tax law is complex, fact-specific, and changes frequently. Every
          policyholder&apos;s situation is different. Before making any decisions based on the
          information in this article, <strong>consult a qualified CPA or tax attorney</strong> who
          can evaluate your specific circumstances.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        Most policyholders assume that insurance claim proceeds are simply not taxable &mdash; you had
        a loss, the insurance company paid you, and that is the end of it. In many cases, that
        assumption is correct. But not always. Depending on the type of payment, the amount you
        receive, the tax basis of your property, and whether the loss occurred in a federally declared
        disaster area, insurance proceeds can create taxable income, trigger capital gain recognition,
        or open up deductions you did not know existed.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This article walks through the major tax issues that arise from insurance claim settlements.
        The goal is not to replace your CPA &mdash; it is to make sure you know enough to ask the
        right questions.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        The General Rule: Property Damage Proceeds Are Not Taxable
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The starting point is straightforward. When your insurance company pays you to repair or
        replace damaged property, those proceeds are generally <strong>not taxable income</strong>.
        The reason is simple: the payment is not enriching you. It is restoring you to where you were
        before the loss. You had a $500,000 house, it was damaged, and the insurance company paid to
        fix it. You are not wealthier than you were before &mdash; you are back to even.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This applies to both dwelling repairs under Coverage A and personal property replacement under
        Coverage C. If your roof is damaged in a storm and the insurer pays $25,000 to replace it,
        that $25,000 is not income. If your{' '}
        <Link href="/resources/total-loss" className="text-[#2E74B5] underline">
          home is a total loss
        </Link>{' '}
        and the insurer pays $600,000 to rebuild, that $600,000 is not income &mdash; as long as
        the payment does not exceed your tax basis in the property.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        When Insurance Proceeds Become Taxable: The Basis Problem
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here is where it gets more complicated. The tax-free treatment of insurance proceeds applies
        only up to your <strong>adjusted tax basis</strong> in the property. Your basis is generally
        what you paid for the property, plus the cost of improvements, minus any depreciation you have
        claimed (relevant for rental properties).
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the insurance payout <em>exceeds</em> your basis, the excess is a taxable gain. This
        happens more often than people realize, particularly with older homes. Suppose you bought your
        home 30 years ago for $150,000 and added $50,000 in improvements over the years, giving you a
        basis of $200,000. The home is destroyed in a wildfire and the insurer pays you $800,000 based
        on current replacement cost. You now have a $600,000 gain &mdash; and the IRS considers that
        taxable unless you take steps to defer it.
      </p>

      <CalloutBox variant="important" title="Replacement Cost Policies Can Create Taxable Gains">
        <p>
          This is counterintuitive. Your insurance policy is designed to make you whole by paying
          current replacement cost. But the tax code measures gain against your <em>original</em>{' '}
          cost basis, not current value. In areas where property values have appreciated significantly
          &mdash; which describes most of California &mdash; a full replacement cost payout on a
          total loss can easily exceed your basis and create a substantial taxable gain. This is
          exactly the kind of situation where you need a CPA involved early.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        &sect;1033 Involuntary Conversion: How to Defer the Gain
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The tax code provides relief for gains that arise from involuntary conversions &mdash;
        situations where your property is destroyed, stolen, or condemned, and you receive insurance
        proceeds or other compensation. Under Internal Revenue Code &sect;1033, you can <strong>defer
        the taxable gain</strong> if you reinvest the proceeds into &ldquo;similar or related&rdquo;
        replacement property within the required time period.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        How It Works
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you receive insurance proceeds that exceed your basis in the destroyed property, you can
        avoid recognizing the gain by purchasing replacement property that costs at least as much as
        the insurance proceeds you received. You must reinvest the <em>full amount</em> of the
        proceeds &mdash; not just the amount of the gain &mdash; into replacement property to defer
        the entire gain. If you reinvest only a portion, you are taxed on the portion you did not
        reinvest (but only up to the amount of the gain).
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Time Limits
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a personal residence destroyed in a federally declared disaster, you generally have
        <strong> four years</strong> from the end of the tax year in which the gain was realized to
        purchase replacement property. For other involuntary conversions, the standard period is
        <strong> two years</strong>. These deadlines can sometimes be extended, but do not count on
        it &mdash; plan around the standard timeframes and consult your CPA well before the deadline
        approaches.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        What Qualifies as Replacement Property
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The replacement property must be &ldquo;similar or related in service or use&rdquo; to the
        property that was destroyed. For a personal residence, this generally means purchasing another
        personal residence. You do not have to rebuild on the same lot &mdash; you can buy an
        existing home elsewhere &mdash; but the replacement must serve the same function. Converting
        insurance proceeds from a destroyed home into a commercial investment property would not
        qualify.
      </p>

      <CalloutBox variant="tip" title="Rebuilding vs. Buying">
        <p>
          Whether you rebuild on your existing lot or purchase a different home, &sect;1033 can
          apply either way. The key is that you reinvest the proceeds into property that serves the
          same use (personal residence replaces personal residence, rental replaces rental) and that
          you do so within the time limit. If you are considering cashing out rather than replacing
          the property, talk to your CPA first &mdash; the tax bill on an undeferred gain can be
          substantial.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Business Income and Loss of Rents: Often Taxable
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Not all insurance proceeds compensate you for property damage. Some payments are designed to
        replace <strong>income you lost</strong> because of the damage &mdash; and those payments are
        often taxable because they substitute for income that would have been taxable if you had
        received it normally.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Business Interruption Insurance
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you have a commercial policy with business interruption coverage, proceeds paid to replace
        lost business income are generally taxable. This makes sense when you think about it: if your
        business would have earned $200,000 in revenue during the repair period, and you would have
        reported that revenue as taxable income, then the insurance payment that replaces that revenue
        is also taxable income. The insurance company is stepping into the shoes of your customers
        &mdash; the tax treatment follows the character of what is being replaced.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Fair Rental Value / Loss of Rents
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Landlords who receive Fair Rental Value (FRV) payments for lost rental income face the same
        issue. Rental income is taxable, so the insurance payment that replaces it is also taxable.
        If your rental property normally generates $3,000 per month and the insurer pays you $3,000
        per month in FRV while the property is being repaired, that $3,000 is taxable income &mdash;
        just as the rent itself would have been. See our{' '}
        <Link href="/resources/ale-frv" className="text-[#2E74B5] underline">
          guide to ALE and Fair Rental Value
        </Link>{' '}
        for more on how these coverages work.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Additional Living Expenses (ALE): Generally Not Taxable for Homeowners
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Additional Living Expenses paid to homeowners who are displaced from their primary residence
        are generally <strong>not taxable</strong>. The reasoning is the same as property damage
        proceeds: ALE reimburses you for the <em>additional</em> costs you incur to maintain your
        normal standard of living while displaced. You are not being enriched &mdash; you are being
        made whole for extra expenses caused by the loss.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        However, there is a distinction for rental property owners. If you own a rental property and
        are receiving ALE-type payments because you had to relocate tenants or cover their expenses,
        the tax treatment may differ. Additionally, if ALE payments exceed the actual additional costs
        you incurred &mdash; which is unusual but possible &mdash; the excess could be taxable. For
        more on maximizing this coverage, see our{' '}
        <Link href="/resources/loss-of-use-maximizing" className="text-[#2E74B5] underline">
          guide to maximizing loss of use benefits
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Interest on Delayed Payments
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When an insurance company delays payment unreasonably and is eventually required to pay
        interest on the delayed amount &mdash; whether through litigation, appraisal, or regulatory
        action &mdash; that <strong>interest is taxable income</strong>. This is true regardless of
        whether the underlying insurance proceeds are taxable. Interest income is always taxable.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you receive a settlement or judgment that includes interest, make sure your CPA knows the
        breakdown. The interest component needs to be reported separately as income even if the
        principal payment is tax-free.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Punitive Damages and Bad Faith Recoveries
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your insurance claim involves{' '}
        <Link href="/resources/bad-faith-damages" className="text-[#2E74B5] underline">
          bad faith litigation
        </Link>{' '}
        and you recover damages beyond the policy benefits, the tax treatment depends on the type of
        damages:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Punitive damages</strong> are always taxable. They are designed to punish the
          insurer, not to compensate you for a loss, so the IRS treats them as income.
        </li>
        <li>
          <strong>Emotional distress damages</strong> are generally taxable unless they are
          attributable to physical injury or physical sickness (which is rare in insurance disputes).
        </li>
        <li>
          <strong>Consequential damages</strong> &mdash; such as damage to your credit, costs of
          alternative financing, or other economic harm caused by the insurer&apos;s bad faith &mdash;
          are generally taxable.
        </li>
        <li>
          <strong>Attorney fee recoveries</strong> (Brandt fees in California) may also have tax
          implications depending on how they are structured.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The original policy benefits that the insurer should have paid in the first place &mdash; the
        contract damages &mdash; retain their original tax character. If the underlying claim was for
        property damage, those proceeds are still generally not taxable even if recovered through
        litigation. But everything above and beyond the contract benefits needs careful tax analysis.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Unreimbursed Casualty Losses and the Tax Deduction Question
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is an area that many policyholders overlook entirely. When your insurance does not fully
        cover your loss, you may have an <strong>unreimbursed casualty loss</strong> that could be
        tax-deductible &mdash; but the rules changed dramatically in 2017.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Tree Example
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Consider a homeowner with $50,000 worth of mature trees and landscaping destroyed in a
        wildfire. Their homeowners policy has a $5,000 sub-limit for trees, plants, and shrubs. The
        insurer pays the $5,000 limit &mdash; and that is all the policy will pay. The homeowner has
        a $45,000 unreimbursed loss. Is that deductible? It depends on whether the loss occurred in a
        federally declared disaster area. You can review how sub-limits like these work on your{' '}
        <Link href="/resources/declarations-page" className="text-[#2E74B5] underline">
          declarations page
        </Link>.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Tax Cuts and Jobs Act Changed Everything
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Before the Tax Cuts and Jobs Act (TCJA) of 2017, individuals could deduct personal casualty
        losses that exceeded 10% of their adjusted gross income (after a $100 per-event floor). This
        allowed homeowners with significant uninsured or underinsured losses to recover some of that
        loss through a tax deduction.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The TCJA largely <strong>eliminated the personal casualty loss deduction</strong> for tax
        years 2018 through 2025. Under current law, you can only deduct a personal casualty loss if
        the loss is attributable to a <strong>federally declared disaster</strong>. If your trees were
        knocked over by a regular windstorm or damaged by a neighbor&apos;s negligence, and it was not
        a federally declared disaster, you cannot deduct the unreimbursed loss on your federal return
        &mdash; no matter how large it is.
      </p>

      <CalloutBox variant="important" title="Federally Declared Disaster Exception">
        <p>
          If your loss occurred in a federally declared disaster area &mdash; as was the case with
          major California wildfires like the Camp Fire, Woolsey Fire, and Palisades Fire &mdash; you
          <em> can</em> still claim a personal casualty loss deduction. The deduction applies to the
          unreimbursed portion of your loss (total loss minus insurance recovery), subject to the
          $100 per-event floor and the 10% of AGI threshold. For large losses, this can result in a
          significant tax benefit. You may also be able to amend the <em>prior year&apos;s</em> tax
          return to claim the deduction, which can accelerate your refund.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Calculating the Deduction
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a casualty loss deduction is available, the calculation works as follows:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Start with the <strong>lesser of</strong>: (a) the decrease in the property&apos;s fair
          market value due to the casualty, or (b) your adjusted basis in the property.
        </li>
        <li>Subtract any insurance or other reimbursement you received.</li>
        <li>Subtract $100 per casualty event.</li>
        <li>
          Subtract 10% of your adjusted gross income from the total of all casualty losses for the
          year.
        </li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        What remains, if anything, is your deductible casualty loss. For high-value losses in
        declared disaster areas, this deduction can be worth tens of thousands of dollars.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Rental and Business Property Losses
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The TCJA restriction on casualty loss deductions applies only to <em>personal</em> property
        losses. If the damaged property is a rental property or used in a trade or business,
        unreimbursed casualty losses are still deductible as business losses regardless of whether
        the event was a federally declared disaster. This is an important distinction for landlords
        and business owners.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        California State Tax Considerations
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California does not always conform to federal tax law, and this is an area where the
        differences matter. Here are the key points for California taxpayers:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Casualty loss deductions:</strong> California generally conforms to the federal
          rules on casualty losses, including the TCJA restriction limiting personal casualty loss
          deductions to federally declared disasters. However, California has in the past enacted
          specific legislation granting additional tax relief for certain state-declared disasters
          &mdash; particularly major wildfires. Check with your CPA about whether your specific loss
          qualifies for any California-specific relief.
        </li>
        <li>
          <strong>&sect;1033 involuntary conversions:</strong> California generally conforms to the
          federal &sect;1033 rules, allowing gain deferral on involuntary conversions when proceeds
          are reinvested in replacement property. However, there can be differences in the details
          &mdash; particularly regarding the definition of qualifying replacement property and
          available time extensions.
        </li>
        <li>
          <strong>Disaster-specific legislation:</strong> After major California wildfires, the state
          legislature has repeatedly passed targeted tax relief bills. These have included extended
          filing deadlines, penalty waivers, and in some cases, broader casualty loss deduction
          rules than what federal law provides. If your loss occurred in a major California wildfire,
          there may be state-specific tax provisions that your CPA should research.
        </li>
        <li>
          <strong>Basis differences:</strong> If you have different federal and state bases in your
          property (which can happen due to prior differences in depreciation rules or conformity
          issues), the gain calculation on an involuntary conversion may produce different results
          for federal and state purposes.
        </li>
      </ul>

      <CalloutBox variant="legal" title="California Tax Law Changes Frequently After Disasters">
        <p>
          After every major wildfire or disaster in California, the Franchise Tax Board (FTB) and the
          state legislature typically announce specific tax relief measures. These can include
          extended filing deadlines, special deduction rules, and conformity provisions that may not
          exist in the permanent tax code. If you experienced a loss in a California disaster,
          check the FTB website for announcements specific to your event and consult a CPA familiar
          with California disaster tax provisions.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Practical Steps: What You Should Do
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The tax consequences of an insurance settlement can involve tens or even hundreds of thousands
        of dollars. Here is what you should do to protect yourself:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Talk to a CPA early.</strong> Do not wait until you file your tax return. Consult a
          CPA as soon as you receive (or expect to receive) insurance proceeds &mdash; especially if
          the payout may exceed your basis in the property. Decisions you make during the claim
          process can affect your tax outcome.
        </li>
        <li>
          <strong>Document your basis.</strong> Gather records of what you paid for the property, the
          cost of improvements, and any depreciation you have claimed. Your CPA will need this to
          calculate whether you have a taxable gain.
        </li>
        <li>
          <strong>Track every payment by category.</strong> Keep detailed records of what you received
          from the insurer and what each payment was for: dwelling damage, personal property, ALE,
          loss of rents, debris removal, interest, and so on. The tax treatment varies by category.
        </li>
        <li>
          <strong>Understand the &sect;1033 deadlines.</strong> If you have a taxable gain, you need
          to know when the clock starts and when it expires for reinvesting proceeds. Missing the
          deadline means the gain becomes taxable in the year realized.
        </li>
        <li>
          <strong>Keep receipts for replacement property.</strong> If you are deferring gain under
          &sect;1033, you will need to prove you reinvested the proceeds into qualifying replacement
          property. Save every receipt, closing statement, and contract.
        </li>
        <li>
          <strong>Document unreimbursed losses.</strong> If you have losses that exceed your insurance
          coverage &mdash; like the tree example &mdash; document the pre-loss value, the amount of
          insurance recovery, and the difference. If the loss qualifies for a casualty loss
          deduction, your CPA will need this information.
        </li>
        <li>
          <strong>Consider amending prior-year returns.</strong> For federally declared disasters,
          you may be able to claim the casualty loss on the prior year&apos;s tax return. This can
          generate a refund when you need cash most &mdash; right after a disaster.
        </li>
      </ol>

      <CalloutBox variant="tip" title="Your Public Adjuster and Your CPA Should Communicate">
        <p>
          Your Public Adjuster handles the insurance claim. Your CPA handles the tax return. But the
          decisions made on one side affect the other. The way your settlement is structured, the
          categories of payment, and the timing of proceeds all have tax implications. Make sure your
          PA and CPA are in contact so that the claim strategy accounts for the tax consequences, and
          the tax strategy accounts for what the claim is actually paying.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Common Scenarios at a Glance
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The following summary illustrates how different types of insurance proceeds are generally
        treated for tax purposes. This is a simplified overview &mdash; your CPA should evaluate your
        specific situation:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Property damage repair/replacement (up to basis):</strong> Not taxable
        </li>
        <li>
          <strong>Property damage proceeds exceeding basis:</strong> Taxable gain, unless deferred
          under &sect;1033
        </li>
        <li>
          <strong>ALE for owner-occupied home:</strong> Generally not taxable
        </li>
        <li>
          <strong>Fair Rental Value / loss of rents:</strong> Taxable (replaces taxable income)
        </li>
        <li>
          <strong>Business interruption proceeds:</strong> Taxable (replaces taxable income)
        </li>
        <li>
          <strong>Interest on delayed payments:</strong> Taxable
        </li>
        <li>
          <strong>Punitive damages:</strong> Taxable
        </li>
        <li>
          <strong>Emotional distress damages:</strong> Generally taxable
        </li>
        <li>
          <strong>Unreimbursed personal casualty loss (declared disaster):</strong> Deductible,
          subject to thresholds
        </li>
        <li>
          <strong>Unreimbursed personal casualty loss (non-disaster):</strong> Not deductible under
          current law (through 2025)
        </li>
        <li>
          <strong>Unreimbursed business/rental casualty loss:</strong> Deductible regardless of
          disaster declaration
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        The Bottom Line
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance claim proceeds are not automatically tax-free. The tax treatment depends on the
        type of payment, the amount relative to your basis, and the nature of the loss. Property
        damage proceeds that simply restore you to your pre-loss position are generally not taxable.
        But proceeds that replace income, exceed your basis, or represent damages beyond the policy
        benefits may be taxable. And unreimbursed losses that your insurance did not cover may be
        deductible &mdash; but only in specific circumstances under current law.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The single most important thing you can do is involve a qualified CPA early in the process.
        Tax planning should happen alongside claim handling, not after the settlement check arrives.
        A CPA who understands both insurance claims and tax law can help you structure the settlement,
        preserve deductions, defer gains, and avoid surprises when you file your return.
      </p>

      <CalloutBox variant="legal" title="Disclaimer: This Is Not Tax Advice">
        <p>
          This article provides general educational information about potential tax consequences of
          insurance claim settlements. It is <strong>not tax advice, legal advice, or accounting
          advice</strong>. The author is a Licensed Public Adjuster, not a CPA, enrolled agent, or
          tax attorney. Tax law is complex, changes frequently, and depends on individual
          circumstances. Nothing in this article should be relied upon as a substitute for
          professional tax guidance. <strong>Consult a qualified CPA or tax professional</strong>{' '}
          before making any decisions about the tax treatment of your insurance claim proceeds.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4 mt-8 italic">
        Written by Leland Coontz, Licensed Public Adjuster, California Department of Insurance.
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
