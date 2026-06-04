import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'How to Read Your Insurance Declarations Page',
  description:
    'A section-by-section walkthrough of your homeowners insurance declarations page — what each coverage means, what the numbers represent, and the hidden coverages most people miss.',
  summary:
    'Your declarations page summarizes your coverage: the dwelling (A), other structures (B), personal property (C), and loss of use (D) limits, your deductible, and endorsements. Reading it carefully reveals limits and hidden coverages most people miss.',
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
        Your insurance declarations page — commonly called the &quot;dec page&quot; — is the single
        most important document in your insurance file. It is the page that makes your policy
        specific to you. While the policy form contains the general terms, conditions, and
        exclusions that apply to everyone with that type of policy, the dec page contains your
        name, your address, your coverage amounts, your deductible, and the list of endorsements
        that modify your specific coverage. Understanding how to read it is essential to knowing
        what you are actually covered for.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Named Insured and Property Address
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The top of the dec page identifies who is insured and what property is covered. The
        &quot;named insured&quot; is the person (or people) listed on the policy. This matters
        because certain coverage benefits — such as loss of use — are tied to the named insured.
        The property address is the physical location that the policy covers. Make sure both are
        correct. Errors here can create problems during a claim.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Policy Period
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The policy period shows the start and end dates of your coverage. Most homeowners policies
        run for one year. If a loss occurs outside this period, coverage does not apply. Keep track
        of your renewal dates and make sure there are no gaps in coverage.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Coverage Sections
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The core of the dec page lists your coverage limits. Each coverage has a specific purpose
        and a specific dollar limit:
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Coverage A — Dwelling
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the limit for the physical structure of your home — the building itself, attached
        structures like a garage, and permanently installed fixtures. This is the foundation of
        your policy and the number that most other coverages are calculated from.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Coverage B — Other Structures
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Coverage B covers detached structures on your property — fences, sheds, detached garages,
        gazebos, and similar buildings. This is typically set at 10 percent of your Coverage A
        limit. If your Coverage A is $500,000, your Coverage B is usually $50,000 unless you have
        purchased additional coverage.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Coverage C — Personal Property (Contents)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This covers your belongings — furniture, clothing, electronics, appliances, and everything
        else inside your home. Coverage C is typically set at 50 to 75 percent of Coverage A. For
        a $500,000 dwelling limit, your contents coverage might be $250,000 to $375,000. For more
        on contents claims, see our guide to{' '}
        <Link href="/resources/contents-claims" className="text-blue-700 underline hover:text-blue-900">
          contents claims
        </Link>.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Coverage D — Loss of Use / Additional Living Expenses (ALE)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your home is uninhabitable due to a covered loss, Coverage D pays for the additional
        costs you incur to maintain your normal standard of living — temporary housing, restaurant
        meals above your normal food budget, storage, laundry, and other necessary expenses. For a
        detailed explanation, see our guide to{' '}
        <Link href="/resources/ale-frv" className="text-blue-700 underline hover:text-blue-900">
          ALE and fair rental value
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Deductibles
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your dec page lists your deductible — the amount you pay out of pocket before insurance
        coverage kicks in. Many homeowners do not realize they may have multiple deductibles:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Standard deductible:</strong> Applies to most covered losses (typically $1,000 to
          $5,000)
        </li>
        <li>
          <strong>Wind/hail deductible:</strong> Some policies have a separate, higher deductible
          for wind and hail damage, often expressed as a percentage of Coverage A
        </li>
        <li>
          <strong>Earthquake deductible:</strong> If you have earthquake coverage, the deductible
          is usually 10 to 15 percent of Coverage A — far higher than a standard deductible
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Special Limits of Liability
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your policy imposes special sub-limits on certain categories of personal property. These
        limits cap the amount the insurer will pay for specific types of items, regardless of your
        overall Coverage C limit:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Cash and currency:</strong> Typically limited to $200
        </li>
        <li>
          <strong>Jewelry, watches, and furs:</strong> Typically limited to $1,500 for theft losses
        </li>
        <li>
          <strong>Firearms:</strong> Typically limited to $2,500
        </li>
        <li>
          <strong>Silverware and goldware:</strong> Typically limited to $2,500
        </li>
        <li>
          <strong>Business property:</strong> Typically limited to $2,500
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you own high-value items in any of these categories, you likely need a scheduled
        personal property endorsement (a &quot;rider&quot;) to insure them for their full value.
        For more detail, see our guide to{' '}
        <Link href="/resources/specialty-items" className="text-blue-700 underline hover:text-blue-900">
          specialty items
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Hidden Coverages Most People Miss
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Beyond the main coverage sections, your policy likely includes additional coverages that
        many homeowners never realize they have until a loss occurs:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Debris removal:</strong> Often provides an additional 5 percent of Coverage A
          specifically for the cost of removing debris after a loss — this is above and beyond your
          dwelling limit
        </li>
        <li>
          <strong>Plants, trees, and shrubs:</strong> Coverage for landscaping damaged by covered
          perils, typically capped at 5 percent of Coverage A with a per-item limit
        </li>
        <li>
          <strong>Ordinance or Law / building code upgrades:</strong> Covers the increased cost of
          rebuilding to current codes — see our detailed guide to{' '}
          <Link href="/resources/ordinance-law" className="text-blue-700 underline hover:text-blue-900">
            Ordinance or Law coverage
          </Link>
        </li>
        <li>
          <strong>Extended replacement cost:</strong> Many policies include an extension of 25 to
          50 percent above your Coverage A limit if reconstruction costs exceed the stated amount —
          this can add $125,000 to $250,000 on a $500,000 policy
        </li>
        <li>
          <strong>Loss assessment:</strong> If you live in a community with a homeowners
          association, this coverage pays for special assessments levied against you after a
          covered loss to common areas
        </li>
      </ul>

      <CalloutBox variant="tip" title="Request Your Complete Policy">
        <p>
          The declarations page is a summary. It tells you what coverages you have and their
          limits, but it does not contain the full terms, conditions, and exclusions. If you do
          not have a complete copy of your policy — including all endorsements — request one from
          your insurer immediately. Under California law, your insurer must provide it. You cannot
          fully understand your coverage from the dec page alone.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Endorsement List: Where Coverage Gets Added or Removed
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        At the bottom of your dec page (or on an attached page), you will find a list of
        endorsement form numbers. This list is critical. Endorsements modify the base policy — they
        can add coverage, remove coverage, change limits, or alter conditions. Without reading the
        actual endorsements referenced in this list, you do not fully understand your coverage.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Common endorsements include scheduled personal property riders, water backup coverage,
        identity theft coverage, equipment breakdown coverage, and various exclusion modifications.
        Each endorsement is identified by a form number. Request copies of every endorsement listed
        on your dec page and read them carefully.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you need help interpreting your dec page or understanding how your coverages work
        together, a licensed{' '}
        <Link href="/resources/public-adjuster" className="text-blue-700 underline hover:text-blue-900">
          Public Adjuster
        </Link>{' '}
        can review your policy and explain exactly what you are covered for — before or after a
        loss occurs.
      </p>

      <hr className="my-8 border-gray-300" />
      <p className="text-sm text-gray-500 italic">
        This article is for informational purposes only and does not constitute legal advice. Insurance
        policies and applicable law vary by state and by policy form. Consult with a licensed
        professional regarding your specific situation.
      </p>
      <p className="text-sm text-gray-500 mt-4 italic">
        Written by Leland Coontz III, Licensed Public Adjuster, CA License #2B53445.
      </p>
    </>
  )
}
