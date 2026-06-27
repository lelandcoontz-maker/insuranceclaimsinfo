import Link from 'next/link'
import { QABlock } from '@/components/content/QABlock'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'What Is Homeowners Insurance?',
  description:
    'A plain-language explanation of what homeowners insurance covers, how it works, what it costs, and what happens when you need to use it.',
  summary:
    'Homeowners insurance covers your dwelling, other structures, personal property, loss of use, and liability, in exchange for a premium. It pays to repair or replace after covered losses, subject to limits, deductibles, and exclusions. This is the plain-language basics.',
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
        Homeowners insurance is a contract between you and an insurance company. You pay
        a premium every year. In return, the insurance company promises to pay you if
        certain things damage or destroy your property. That is the entire deal.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The contract itself is your policy. It is a legal document — usually 40 to 80 pages
        of dense language that defines exactly what is covered, what is excluded, how much
        the company will pay, and what you are required to do after a loss. Most people never
        read it until something goes wrong. By then, it matters a great deal.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What It Covers
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A standard homeowners policy covers four main categories (HO-3 forms label these
        Coverages A through D, for reader recognition):
      </p>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Dwelling.</strong> The structure of the home: walls, roof, floors, built-in
          appliances, attached garage. When fire, wind, or a burst pipe damages the building
          itself, the Dwelling coverage pays to repair or rebuild.
        </li>
        <li>
          <strong>Other Structures.</strong> Detached garages, fences, sheds, retaining walls.
          Anything on the property that is not attached to the main house. The HO-3 default is
          10% of the Dwelling limit; some California carrier forms default higher.
        </li>
        <li>
          <strong>Personal Property.</strong> The insured&apos;s belongings: furniture,
          clothing, electronics, dishes, tools. Everything owned that is not part of the
          building itself.
        </li>
        <li>
          <strong>Loss of Use.</strong> When the home is uninhabitable after a covered loss,
          Loss of Use pays Additional Living Expenses (ALE) for owner-occupants or Fair Rental
          Value (FRV) for landlords &mdash; hotel, meals, rental housing, storage, pet
          boarding, and similar increased costs above what the insured normally spent.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most policies also include Personal Liability (defense and indemnity when someone is
        injured on the property or the insured accidentally damages others&apos; property,
        subject to limits and exclusions) and Medical Payments to Others (small medical bills
        for guests regardless of fault). Those are important but separate from property
        claims, which is what this site focuses on.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What It Does Not Cover
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Every policy has exclusions — specific things the insurance company will not pay for.
        The most common exclusions on a standard California homeowners policy:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Flood.</strong> Water rising from outside your home requires separate flood insurance.</li>
        <li><strong>Earthquake.</strong> Requires a separate policy, usually through the California Earthquake Authority (CEA).</li>
        <li><strong>Wear and tear.</strong> Gradual deterioration is maintenance, not a covered loss.</li>
        <li><strong>Mold.</strong> Usually limited to $5,000 or $10,000 unless caused by a covered peril.</li>
        <li><strong>Intentional damage.</strong> You cannot burn down your house and collect.</li>
        <li><strong>Earth movement.</strong> Landslides, sinkholes, settling (with limited exceptions).</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Exclusions are not absolute. Many have exceptions, and California law limits how
        broadly insurers can apply them. For a deeper look, see{' '}
        <Link href="/resources/exclusions" className="text-[#1F3964] underline font-medium">
          Policy Exclusions: When They Apply and When They Don&apos;t
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Much You Get Paid
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Two numbers determine your payout:
      </p>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Your policy limits.</strong> The maximum the insurer will pay for each
          coverage. These are printed on your{' '}
          <Link href="/resources/declarations-page" className="text-[#1F3964] underline font-medium">
            declarations page
          </Link>.
        </li>
        <li>
          <strong>Your deductible.</strong> The amount you pay first before the insurer pays
          anything. A $2,500 deductible means the first $2,500 of every claim comes out of
          your pocket.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Within those limits, your payout depends on whether your policy pays{' '}
        <strong>replacement cost</strong> or <strong>actual cash value</strong>. Replacement
        cost pays what it costs to repair or replace today. Actual cash value deducts
        depreciation — what the damaged item was worth given its age and condition.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most California homeowners policies are replacement cost policies, but the insurer
        typically pays actual cash value first and withholds the depreciation until you
        complete repairs. This is the most common source of confusion — and underpayment —
        in residential claims. See{' '}
        <Link href="/resources/acv-rcv" className="text-[#1F3964] underline font-medium">
          ACV vs. RCV: Understanding Depreciation
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How a Claim Works
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When something damages your home, you report it to your insurance company. They
        assign an adjuster to inspect the damage, determine if it is covered, and calculate
        how much to pay you. You receive a payment — or a denial letter.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        That sounds simple. In practice, the adjuster works for the insurance company; the
        adjuster&apos;s role is to investigate, evaluate, and pay the claim consistent with
        the policy. That does not make the adjuster the insured&apos;s enemy, but it does
        mean the insured cannot rely on the adjuster alone to identify every dollar the
        policy is owed. Policyholders who understand their own policy and document their own
        loss tend to recover more of what the policy contemplates.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a full walkthrough, see{' '}
        <Link href="/resources/claims-process" className="text-[#1F3964] underline font-medium">
          The Insurance Claims Process Step by Step
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Types of Policies
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The most common policy for homeowners is the <strong>HO-3</strong>, sometimes called
        a &ldquo;special form.&rdquo; It covers your dwelling against all perils except those
        specifically excluded (this is called &ldquo;open perils&rdquo; or &ldquo;all risk&rdquo;).
        Your personal property is typically covered only for perils specifically listed in the
        policy (&ldquo;named perils&rdquo;).
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Other common forms:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>HO-4</strong> — Renters insurance (personal property and liability, no dwelling).</li>
        <li><strong>HO-5</strong> &mdash; Comprehensive policy with open-perils coverage on both dwelling AND personal property (broader than HO-3 on personal property).</li>
        <li><strong>HO-6</strong> — Condo policy (covers interior walls-in, personal property, and loss assessment).</li>
        <li><strong>HO-8</strong> — Older homes where replacement cost exceeds market value.</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        For more detail, see{' '}
        <Link href="/resources/policy-types-overview" className="text-[#1F3964] underline font-medium">
          Types of Insurance Policies
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        California-Specific Context
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Several California-specific frameworks shape how a homeowners policy actually works in
        practice in this state:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>California Residential Property Insurance Disclosure (Cal. Ins. Code
          &sect;&sect; 10101&ndash;10103).</strong> At policy issuance and renewal, the
          carrier must provide a residential property-coverage disclosure explaining replacement
          cost, extended replacement cost, and guaranteed replacement cost framings.
        </li>
        <li>
          <strong>Mandatory earthquake offer (Cal. Ins. Code &sect; 10089.7).</strong>
          Residential carriers must offer earthquake coverage at issuance and renewal;
          earthquake coverage in California is typically written through the California
          Earthquake Authority (CEA, &sect; 10089 et seq.) or a private carrier.
        </li>
        <li>
          <strong>California FAIR Plan (Cal. Ins. Code &sect; 10094.4 et seq.).</strong>
          The insurer of last resort for properties unable to obtain admitted-market
          coverage. Increasingly relevant in California&apos;s current non-renewal environment.
        </li>
        <li>
          <strong>Proposition 103 / prior approval rating (Cal. Ins. Code
          &sect; 1861.05).</strong> California requires CDI prior approval of homeowner rate
          changes and prohibits rates that are excessive, inadequate, or unfairly
          discriminatory. Credit-based homeowner insurance scoring is not permitted in CA rate
          filings.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Key Terms You Will See
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Premium</strong> — what you pay the insurer each year for coverage.</li>
        <li><strong>Deductible</strong> — what you pay out of pocket before the insurer pays.</li>
        <li><strong>Peril</strong> — the cause of loss (fire, wind, theft, burst pipe).</li>
        <li><strong>Exclusion</strong> — a peril or situation the policy will not cover.</li>
        <li><strong>Endorsement</strong> — an add-on that changes your policy (adds or removes coverage).</li>
        <li><strong>Claim</strong> — your formal request for payment after a loss.</li>
        <li><strong>Adjuster</strong> — the person who inspects and evaluates your claim.</li>
        <li><strong>ACV</strong> — Actual Cash Value (replacement cost minus depreciation).</li>
        <li><strong>RCV</strong> — Replacement Cost Value (what it costs to repair or replace today).</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The One Thing to Remember
      </h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Your insurance policy is not a warranty. It does not cover everything that can go
        wrong with a house. It covers sudden, accidental losses caused by specific events.
        Understanding that distinction — and knowing exactly which events your specific
        policy covers — is the single most important thing you can do to protect yourself.
        The articles on this site exist to help you do exactly that.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Frequently Asked Questions
      </h2>
      <QABlock pairs={[
        {
          question: 'What does homeowners insurance actually cover?',
          answer: 'A standard policy has four main coverages: Dwelling (walls, roof, floors, attached structures), Other Structures (detached garages and fences, typically 10% of the Dwelling limit), Personal Property (the insured\'s belongings), and Loss of Use (Additional Living Expenses or Fair Rental Value if the home is uninhabitable). Most policies also include Personal Liability and Medical Payments to Others for guest injuries, separate from property claims.',
        },
        {
          question: 'What does it NOT cover?',
          answer: 'Common exclusions on a standard California homeowners policy: flood (requires separate NFIP or private flood policy), earthquake (requires separate CEA or private coverage), wear and tear (gradual deterioration is maintenance), mold (typically capped at $5,000–$10,000 unless caused by a covered peril), intentional damage, and earth movement. Exclusions are not absolute — many have exceptions, and California law limits how broadly insurers can apply them.',
        },
        {
          question: 'How much will the insurance company actually pay?',
          answer: 'Two numbers determine the payout. First, your policy limits (on your declarations page) — the maximum for each coverage. Second, your deductible — what you pay before the insurer pays anything. Within those limits, payout depends on whether your policy is replacement cost (what it costs to repair or replace today) or actual cash value (replacement cost minus depreciation). Most California homeowners policies are replacement-cost, but the insurer typically pays actual cash value first and withholds depreciation until repairs are complete.',
          displayAnswer: (
            <>
              Two numbers determine the payout. First, your policy limits (on your{' '}
              <Link href="/resources/declarations-page" className="text-[#2E74B5] underline">
                declarations page
              </Link>
              ) — the maximum for each coverage. Second, your deductible — what you pay before the
              insurer pays anything. Within those limits, payout depends on whether your policy is{' '}
              <Link href="/resources/acv-rcv" className="text-[#2E74B5] underline">
                replacement cost or actual cash value
              </Link>
              . Most California homeowners policies are replacement-cost, but the insurer typically
              pays actual cash value first and withholds depreciation until repairs are complete.
            </>
          ),
        },
        {
          question: 'How does a claim actually work?',
          answer: 'You report the loss to the insurer. They assign an adjuster who inspects the damage, determines coverage, and calculates a payment. You receive either payment or a denial letter. The adjuster works for the insurance company; their job is to settle the claim for as little as possible while staying within the law. That does not make them your enemy, but it means you cannot rely on them to find every dollar you are owed. Policyholders who understand their own policy and document their own loss always do better than those who wait passively.',
        },
        {
          question: 'What is the most important thing to know about homeowners insurance?',
          answer: 'Your insurance policy is not a warranty. It does not cover everything that can go wrong with a house. It covers sudden, accidental losses caused by specific events. Understanding that distinction — and knowing exactly which events your specific policy covers — is the single most important step in protecting yourself.',
        },
      ]} />
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
