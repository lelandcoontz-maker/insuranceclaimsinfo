import Link from 'next/link'

export const meta = {
  title: 'What Is Homeowners Insurance?',
  description:
    'A plain-language explanation of what homeowners insurance covers, how it works, what it costs, and what happens when you need to use it.',
}

export default function Content() {
  return (
    <>
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
        A standard homeowners policy covers four main things. The industry labels them
        Coverage A through Coverage D:
      </p>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Coverage A — Dwelling.</strong> The structure of your home: walls, roof,
          floors, built-in appliances, attached garage. If fire, wind, or a burst pipe
          damages the building itself, this is the coverage that pays to repair or rebuild it.
        </li>
        <li>
          <strong>Coverage B — Other Structures.</strong> Detached garages, fences, sheds,
          retaining walls. Anything on your property that is not attached to the main house.
          Usually set at 10% of your Coverage A limit.
        </li>
        <li>
          <strong>Coverage C — Personal Property.</strong> Your belongings: furniture,
          clothing, electronics, dishes, tools. Everything you own that is not part of the
          building itself. If it burns, is stolen, or is destroyed, this coverage pays to
          replace it.
        </li>
        <li>
          <strong>Coverage D — Loss of Use.</strong> If your home is uninhabitable after a
          covered loss, this pays your additional living expenses — hotel, meals, rental
          housing — while repairs are completed. In California, this is often called ALE
          (Additional Living Expenses).
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most policies also include liability coverage (someone gets hurt on your property)
        and medical payments to others. Those are important but separate from property
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
        That sounds simple. In practice, the adjuster works for the insurance company. Their
        job is to settle the claim for as little as possible while staying within the law.
        That does not make them your enemy, but it means you cannot rely on them to find
        every dollar you are owed. The policyholder who understands their own policy and
        documents their own loss always does better than the one who waits passively for a
        check.
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
        <li><strong>HO-5</strong> — Premium policy with open-perils coverage on both dwelling and contents.</li>
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
    </>
  )
}
