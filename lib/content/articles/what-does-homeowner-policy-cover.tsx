import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'What Does My Homeowner Policy Actually Cover?',
  description:
    "A plain-language walkthrough of what your homeowners insurance covers - Dwelling, Other Structures, Personal Property, Loss of Use, and liability.",
  summary:
    'A standard homeowner policy covers four property categories — dwelling, other structures, personal property, and loss of use (living expenses) — plus liability. Limits and exclusions vary, and personal belongings are often covered more narrowly than the house itself.',
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
        Most people buy homeowners insurance, file it away, and never read it until something goes
        wrong. Then they pull it out of a drawer and discover that the document is 40 pages of dense
        language written by lawyers for lawyers. This guide breaks down the standard homeowners
        policy structure so you know what you actually bought.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The most common homeowners policy in the United States is the HO-3, sometimes called
        the &ldquo;special form.&rdquo; If the insured owns a single-family home, this is
        almost certainly the form in place. The HO-3 divides coverage into distinct sections,
        each with its own dollar limit and its own rules. Understanding those sections is the
        foundation of understanding the claim.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Higher-value California homes are increasingly written on the <strong>HO-5</strong>
        (sometimes called the comprehensive form). The HO-5 inverts the HO-3&apos;s
        named-perils split on personal property: an HO-5 covers BOTH the dwelling and
        personal property on an open-perils basis, so personal property is covered for any
        cause of loss not specifically excluded. Most of the discussion below tracks the HO-3
        baseline; if the declarations page shows HO-5 or &ldquo;comprehensive form,&rdquo;
        the personal property coverage is broader than the HO-3 description in the
        &ldquo;Personal Property&rdquo; section that follows.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Dwelling (Coverage A)
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Dwelling coverage pays to repair or replace the physical structure the insured
        lives in. This includes the walls, roof, floors, built-in appliances, plumbing,
        electrical systems, HVAC, and anything permanently attached to the building. An
        attached garage is part of Dwelling. So is a built-in dishwasher, hardwired light
        fixtures, and built-in cabinetry.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The dollar limit on the{' '}
        <Link href="/resources/declarations-page" className="text-blue-700 underline hover:text-blue-900">
          declarations page
        </Link>{' '}
        next to the Dwelling line is supposed to represent the full cost to rebuild the home
        from the ground up. Not the market value. Not the purchase price. The cost to rebuild
        the home today, with current labor rates and material prices. If that number is too
        low, the insured can face a shortfall at the worst possible moment.
      </p>

      <CalloutBox variant="tip" title="Check the Dwelling Limit">
        <p>
          Construction costs have risen materially in recent years. A Dwelling limit that has
          not been updated to reflect current rebuilding costs may leave the insured
          significantly underinsured. The right number is a replacement cost estimate, not a
          market value estimate; the two are different.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Other Structures (Coverage B)
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Other Structures covers structures on the property that are not attached to the main
        dwelling. Detached garages, sheds, fences, retaining walls, driveways, swimming pools,
        gazebos, and detached guest houses all fall under Other Structures.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The default limit on a standard HO-3 is 10 percent of the Dwelling amount. On a
        $500,000 dwelling limit, that is $50,000 for other structures. That sounds like a lot
        until the cost of replacing a detached garage, a pool, 200 feet of fencing, and a
        concrete driveway is added up. Some California carriers now default higher than 10%;
        properties with significant detached structures may need an increased limit.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Personal Property (Coverage C)
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Personal Property pays to repair or replace the insured&apos;s belongings &mdash;
        furniture, clothing, electronics, kitchen items, tools, books, art, and everything
        else owned that is not permanently attached to the building. If it can be picked up
        and carried out of the house, it is probably personal property.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The default limit on a standard HO-3 is 50 percent of Dwelling, though some carriers
        default higher or allow the insured to elect a higher percentage. Certain categories
        of personal property carry sublimits &mdash; internal caps within the overall Personal
        Property limit. For example, a policy might cap jewelry at $1,500 total, firearms at
        $2,500, cash at $200, and business property on premises at $2,500. These sublimits are
        listed in the policy form (not always on the dec page), and actual figures vary by
        form edition and carrier. A $10,000 engagement ring under a $1,500 jewelry sublimit
        leaves a substantial gap that a scheduled personal property endorsement is designed
        to close.
      </p>

      <CalloutBox variant="warning" title="Personal Property Is Named-Perils Only on the HO-3">
        <p>
          On a standard HO-3, personal property is covered only for specific listed perils
          (fire, theft, windstorm, and so on), while the dwelling is covered for all risks
          unless specifically excluded. On an HO-5 (comprehensive form), both the dwelling
          AND personal property are written on an open-perils basis. The form on the
          declarations page determines which split applies. See the guide on{' '}
          <Link href="/resources/open-perils-vs-named-perils" className="text-blue-700 underline hover:text-blue-900">
            named perils vs. open perils
          </Link>{' '}
          for why it matters.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Loss of Use (Coverage D)
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Loss of Use pays for the additional costs an insured incurs when the home is
        uninhabitable because of a covered loss. The benefit inside Loss of Use that owner-
        occupants typically claim is Additional Living Expenses (ALE) &mdash; hotel bills,
        temporary rentals, increased food costs, storage fees, pet boarding, and similar
        increased costs above what the insured normally spent maintaining the standard of
        living. Landlords claim Fair Rental Value (FRV) instead.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The default limit on a standard HO-3 is 30 percent of Dwelling, though many modern CA
        carrier forms now default higher to track the broader ALE timelines under Cal. Ins.
        Code &sect; 2060(b)(1). After a major loss, these expenses add up fast. A family
        displaced for 18 months while the home is rebuilt can burn through $100,000 or more.
        For a detailed breakdown of what qualifies, see the{' '}
        <Link href="/resources/ale-frv" className="text-blue-700 underline hover:text-blue-900">
          ALE coverage guide
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Personal Liability and Medical Payments (Coverages E and F)
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Personal Liability (Coverage E) is the liability section of the homeowners policy. If
        someone is injured on the property and sues, or if the insured accidentally damages
        someone else&apos;s property, Personal Liability provides defense and indemnity
        subject to the policy&apos;s limits and exclusions. The historic HO-3 floor was
        $100,000, but most modern California homeowner policies now default to $300,000 or
        higher.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Medical Payments to Others (Coverage F) pays small medical bills (typically up to
        $1,000 or $5,000 per person) for guests injured on the property regardless of fault.
        It is designed to resolve minor injuries without litigation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        These liability coverages are important, but they rarely come into play during a
        property damage claim. The rest of this guide focuses on Dwelling, Other Structures,
        Personal Property, and Loss of Use, because those are the coverages that matter when
        the house itself is damaged.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Is NOT Covered &mdash; Common Misconceptions
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Every homeowners policy contains exclusions &mdash; categories of damage that are not
        covered regardless of how much premium you pay. Understanding what is excluded is just as
        important as understanding what is included. Here are the most common surprises:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Flood:</strong> Standard homeowners policies do not cover flooding. Not river
          flooding, not storm surge, not rising water of any kind. You need a separate flood policy
          through the National Flood Insurance Program (NFIP) or a private flood insurer.
        </li>
        <li>
          <strong>Earthquake:</strong> Not covered under standard policies in California. You need a
          separate earthquake policy, typically through the California Earthquake Authority (CEA) or
          a private carrier.
        </li>
        <li>
          <strong>Maintenance and wear:</strong> Insurance covers sudden, accidental damage &mdash;
          not gradual deterioration. A roof that leaks because it is 30 years old and worn out is
          not a covered loss. But a roof that leaks because a tree fell on it is covered, even if
          the roof was 30 years old.
        </li>
        <li>
          <strong>Mold (often):</strong> Many policies exclude mold or cap coverage at $5,000 or
          $10,000. However, if the mold results from a covered water loss, there may be coverage
          for remediation as part of the original claim.
        </li>
        <li>
          <strong>Sewer backup:</strong> Not covered unless you purchased a specific endorsement.
          Many homeowners discover this too late.
        </li>
        <li>
          <strong>Ordinance or law costs:</strong> If your damaged home must be brought up to
          current building codes during repair, the additional cost is not covered unless you have
          an Ordinance or Law endorsement.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a full discussion of what is excluded and how California law limits the reach of
        exclusions, see our{' '}
        <Link href="/resources/exclusions" className="text-blue-700 underline hover:text-blue-900">
          guide to policy exclusions
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Your Policy Pays &mdash; Replacement Cost vs. Actual Cash Value
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The policy does not simply write a check for the full repair cost on day one. The
        timing depends on whether the policy is replacement cost or actual cash value. Most
        modern HO-3 policies provide replacement cost on the dwelling and either replacement
        cost or ACV on personal property, depending on the form and endorsements.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        California codifies the ACV measure for property insurance in Cal. Ins. Code
        &sect; 2051(b) (replacement cost less depreciation, uniform for total and partial
        losses since AB 188, effective 1/1/2020), and the replacement-cost obligation in
        &sect; 2051.5(a)(1), which caps the insurer&apos;s obligation at the lesser of the
        actual cost to repair/replace or the policy limit. Cal. Ins. Code &sect; 2051.5(b)
        provides the post-loss replacement-cost recovery clock: at least 12 months from the
        first ACV payment under (b)(1)(A), extended to 36 months for state-of-emergency
        losses under (b)(1)(B), with additional six-month good-cause extensions under (b)(2).
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under a replacement-cost policy, the carrier typically pays the actual cash value
        first (replacement cost less depreciation), then releases the remaining depreciation
        after the insured completes repairs and submits documentation. This two-step process
        is explained in detail in the{' '}
        <Link href="/resources/acv-rcv" className="text-blue-700 underline hover:text-blue-900">
          ACV vs. RCV guide
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Where Surprises Hide
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The biggest surprises in homeowners policies are not in the coverages themselves. They are
        in the details:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Sublimits:</strong> Caps within caps that limit payment for specific items far
          below what you might expect.
        </li>
        <li>
          <strong>Percentage deductibles:</strong> Some policies have percentage-based deductibles
          for wind or hurricane damage that can be five to ten times larger than a standard flat
          deductible.
        </li>
        <li>
          <strong>Endorsements that remove coverage:</strong> Not all endorsements add coverage.
          Some take it away. Read every endorsement listed on your dec page.
        </li>
        <li>
          <strong>The named-perils split:</strong> Your dwelling is covered differently than your
          contents. A loss that is covered for your house may not be covered for your belongings.
        </li>
        <li>
          <strong>Matching requirements:</strong> If your kitchen has custom tile and only half is
          damaged, will the insurer pay to replace all of it so it matches? The answer depends on
          your policy language and your state&rsquo;s law.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Read Your Policy
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your complete policy is three things stapled together: the declarations page, the policy
        form (the HO-3 or whatever form number you have), and the endorsements. The declarations
        page is your personalized summary &mdash; your limits, your deductible, your named insured.
        The policy form is the standardized language that defines what is covered and what is not.
        The endorsements are modifications that add, remove, or change specific coverages.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Start with the{' '}
        <Link href="/resources/declarations-page" className="text-blue-700 underline hover:text-blue-900">
          declarations page
        </Link>. It tells you your limits, your deductible, and which endorsements are attached.
        Then read the endorsements &mdash; they override the base policy form wherever they
        conflict. Finally, read the relevant sections of the policy form itself for the specific
        coverage you need.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Most Important Takeaway
      </h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        The policy is a contract. California courts have generally enforced the policy&apos;s
        plain language: when the policy says it covers something, the carrier&apos;s
        obligation runs to that coverage. Where the contract language is ambiguous, California
        law generally resolves the ambiguity in favor of the policyholder under the contra
        proferentem doctrine. For more on how courts interpret policy language, see the{' '}
        <Link href="/resources/policy-interpretation" className="text-blue-700 underline hover:text-blue-900">
          policy interpretation guide
        </Link>.
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
