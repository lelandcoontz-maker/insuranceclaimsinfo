import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Insurance Claim Glossary: 50 Terms in Plain English',
  description:
    'Every insurance term you will encounter during a property claim, defined in one sentence each. No jargon, no legalese — just clear definitions.',
  summary:
    'A plain-English glossary defining the fifty insurance terms you will meet during a property claim, from ACV and depreciation to endorsements, sub-limits, and proof of loss, each explained in a single clear sentence.',
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
        Insurance has its own language. Adjusters, attorneys, and contractors use these
        terms daily. You should not have to guess what they mean. Here are the 50 terms you
        are most likely to encounter during a property insurance claim, defined in plain
        English.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">A</h2>
      <dl className="space-y-4 mb-6">
        <div>
          <dt className="font-bold text-gray-900">ACV (Actual Cash Value)</dt>
          <dd className="text-gray-700">
            The cost to replace something today minus depreciation for age and wear. If a
            10-year-old roof costs $20,000 to replace and has lost 40% of its life, the ACV
            is $12,000.{' '}
            <Link href="/resources/acv-rcv" className="text-[#1F3964] underline text-sm">Read more</Link>
          </dd>
        </div>
        <div>
          <dt className="font-bold text-gray-900">Additional Living Expenses (ALE)</dt>
          <dd className="text-gray-700">
            Money your insurer pays when you cannot live in your home after a covered loss.
            Covers the difference between your normal expenses and what you spend while
            displaced — hotel, meals, storage, extra gas.{' '}
            <Link href="/resources/ale-frv" className="text-[#1F3964] underline text-sm">Read more</Link>
          </dd>
        </div>
        <div>
          <dt className="font-bold text-gray-900">Adjuster</dt>
          <dd className="text-gray-700">
            The person who inspects your damage and calculates what the insurer will pay.
            There are three kinds: company adjusters (work for the insurer), independent
            adjusters (contractors hired by the insurer), and Public Adjusters (work for you).{' '}
            <Link href="/resources/adjuster-types" className="text-[#1F3964] underline text-sm">Read more</Link>
          </dd>
        </div>
        <div>
          <dt className="font-bold text-gray-900">Appraisal</dt>
          <dd className="text-gray-700">
            A process in your policy for resolving dollar disputes. Each side picks an
            appraiser, the two appraisers pick an umpire, and they determine the fair
            amount. Binding on both parties.{' '}
            <Link href="/resources/appraisal" className="text-[#1F3964] underline text-sm">Read more</Link>
          </dd>
        </div>
      </dl>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">B</h2>
      <dl className="space-y-4 mb-6">
        <div>
          <dt className="font-bold text-gray-900">Bad Faith</dt>
          <dd className="text-gray-700">
            When an insurer unreasonably delays, underpays, or denies a claim. In California,
            bad faith is recognized as a tort, and an insured may be able to recover damages
            beyond policy limits — potentially including emotional distress and, where the
            conduct meets the statutory standard, punitive damages. Whether a particular
            claim supports a bad-faith action is a question for a California-licensed attorney.{' '}
            <Link href="/resources/bad-faith" className="text-[#1F3964] underline text-sm">Read more</Link>
          </dd>
        </div>
        <div>
          <dt className="font-bold text-gray-900">Brandt Fees</dt>
          <dd className="text-gray-700">
            Attorney fees you can recover from the insurer in a bad faith case. Named after
            the California case that established the rule.
          </dd>
        </div>
      </dl>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">C</h2>
      <dl className="space-y-4 mb-6">
        <div>
          <dt className="font-bold text-gray-900">CDI (California Department of Insurance)</dt>
          <dd className="text-gray-700">
            The state agency that regulates insurance companies. You can file a complaint
            when your insurer violates regulations.{' '}
            <Link href="/resources/cdi-complaint" className="text-[#1F3964] underline text-sm">Read more</Link>
          </dd>
        </div>
        <div>
          <dt className="font-bold text-gray-900">Claim</dt>
          <dd className="text-gray-700">
            Your formal request to the insurer to pay for a covered loss. Once filed, it
            appears on your CLUE report for 7 years.
          </dd>
        </div>
        <div>
          <dt className="font-bold text-gray-900">CLUE Report</dt>
          <dd className="text-gray-700">
            Comprehensive Loss Underwriting Exchange — a database that records every
            insurance claim you file. Future insurers can see it when you apply for coverage.
            Entries stay for 7 years.
          </dd>
        </div>
        <div>
          <dt className="font-bold text-gray-900">Coinsurance</dt>
          <dd className="text-gray-700">
            A penalty on commercial policies if you insure your property for less than the
            required percentage of its value. If you are underinsured, the insurer reduces
            every payment proportionally.
          </dd>
        </div>
        <div>
          <dt className="font-bold text-gray-900">Contents (Coverage C)</dt>
          <dd className="text-gray-700">
            Your personal property — furniture, clothing, electronics, everything you own
            that is not part of the building itself.{' '}
            <Link href="/resources/contents-claims" className="text-[#1F3964] underline text-sm">Read more</Link>
          </dd>
        </div>
        <div>
          <dt className="font-bold text-gray-900">Coverage A / B / C / D</dt>
          <dd className="text-gray-700">
            The four main sections of a homeowner policy. A = dwelling (the building).
            B = other structures (detached garage, fence). C = personal property (your stuff).
            D = loss of use (living expenses while displaced).
          </dd>
        </div>
      </dl>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">D</h2>
      <dl className="space-y-4 mb-6">
        <div>
          <dt className="font-bold text-gray-900">Declarations Page (Dec Page)</dt>
          <dd className="text-gray-700">
            The summary page of your policy showing your name, address, coverage limits,
            deductible, premium, and policy period. The first page you should read.{' '}
            <Link href="/resources/declarations-page" className="text-[#1F3964] underline text-sm">Read more</Link>
          </dd>
        </div>
        <div>
          <dt className="font-bold text-gray-900">Deductible</dt>
          <dd className="text-gray-700">
            The amount you pay out of pocket before the insurer pays anything. A $2,500
            deductible means the first $2,500 of every claim comes from you.
          </dd>
        </div>
        <div>
          <dt className="font-bold text-gray-900">Depreciation</dt>
          <dd className="text-gray-700">
            The reduction in value due to age and wear. Applied to your payment on
            replacement cost policies — the insurer withholds it until you complete repairs.{' '}
            <Link href="/resources/acv-rcv" className="text-[#1F3964] underline text-sm">Read more</Link>
          </dd>
        </div>
        <div>
          <dt className="font-bold text-gray-900">Dwelling (Coverage A)</dt>
          <dd className="text-gray-700">
            The physical structure of your home — walls, roof, floors, built-in appliances,
            attached garage. The largest coverage on your policy.
          </dd>
        </div>
      </dl>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">E–F</h2>
      <dl className="space-y-4 mb-6">
        <div>
          <dt className="font-bold text-gray-900">Endorsement</dt>
          <dd className="text-gray-700">
            An add-on to your policy that changes the coverage — adds something, removes
            something, or modifies limits. Also called a rider.
          </dd>
        </div>
        <div>
          <dt className="font-bold text-gray-900">EUO (Examination Under Oath)</dt>
          <dd className="text-gray-700">
            A formal interview conducted under oath by the insurer&apos;s attorney, with a
            court reporter. More serious than a recorded statement. Usually signals the
            insurer suspects fraud or is looking for a reason to deny.
          </dd>
        </div>
        <div>
          <dt className="font-bold text-gray-900">Exclusion</dt>
          <dd className="text-gray-700">
            A peril, condition, or situation your policy specifically will not cover. Common
            exclusions: flood, earthquake, wear and tear, mold, intentional damage.{' '}
            <Link href="/resources/exclusions" className="text-[#1F3964] underline text-sm">Read more</Link>
          </dd>
        </div>
        <div>
          <dt className="font-bold text-gray-900">FNOL (First Notice of Loss)</dt>
          <dd className="text-gray-700">
            Your initial report to the insurance company that a loss occurred. The moment
            you call to report damage, regulatory deadlines begin.
          </dd>
        </div>
        <div>
          <dt className="font-bold text-gray-900">FRV (Fair Rental Value)</dt>
          <dd className="text-gray-700">
            The rental income a landlord loses when a rental property is uninhabitable after
            a covered loss. The landlord equivalent of ALE.
          </dd>
        </div>
      </dl>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">H–L</h2>
      <dl className="space-y-4 mb-6">
        <div>
          <dt className="font-bold text-gray-900">Holdback</dt>
          <dd className="text-gray-700">
            The depreciation amount the insurer withholds from your first payment. Released
            after you complete repairs and submit documentation.
          </dd>
        </div>
        <div>
          <dt className="font-bold text-gray-900">Independent Adjuster</dt>
          <dd className="text-gray-700">
            A contractor hired by the insurance company to inspect claims. They work for the
            insurer, not for you — despite the word &ldquo;independent.&rdquo;{' '}
            <Link href="/resources/adjuster-types" className="text-[#1F3964] underline text-sm">Read more</Link>
          </dd>
        </div>
        <div>
          <dt className="font-bold text-gray-900">Loss of Use (Coverage D)</dt>
          <dd className="text-gray-700">
            Same as ALE. Pays your additional living expenses when you cannot live in your
            home due to a covered loss.
          </dd>
        </div>
      </dl>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">M–O</h2>
      <dl className="space-y-4 mb-6">
        <div>
          <dt className="font-bold text-gray-900">Mitigation</dt>
          <dd className="text-gray-700">
            Steps you take to prevent further damage after a loss. Board-up, tarp, water
            extraction, emergency repairs. Your policy requires it and pays for it.
          </dd>
        </div>
        <div>
          <dt className="font-bold text-gray-900">Named Perils</dt>
          <dd className="text-gray-700">
            A policy that covers only the specific causes of loss listed (named) in the
            policy. If the cause is not on the list, it is not covered. Contrast with open
            perils.
          </dd>
        </div>
        <div>
          <dt className="font-bold text-gray-900">Open Perils (All Risk)</dt>
          <dd className="text-gray-700">
            A policy that covers all causes of loss unless specifically excluded. Better
            coverage than named perils. Your dwelling is usually open-perils; your contents
            may be named-perils only.
          </dd>
        </div>
        <div>
          <dt className="font-bold text-gray-900">O&amp;P (Overhead and Profit)</dt>
          <dd className="text-gray-700">
            The general contractor&apos;s markup — typically 10% overhead + 10% profit —
            that covers project management. Owed when the job requires a general contractor
            to coordinate multiple trades.{' '}
            <Link href="/resources/overhead-and-profit" className="text-[#1F3964] underline text-sm">Read more</Link>
          </dd>
        </div>
      </dl>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">P–R</h2>
      <dl className="space-y-4 mb-6">
        <div>
          <dt className="font-bold text-gray-900">Peril</dt>
          <dd className="text-gray-700">
            The cause of loss — fire, wind, theft, burst pipe, vandalism. What actually
            caused the damage to your property.
          </dd>
        </div>
        <div>
          <dt className="font-bold text-gray-900">Proof of Loss</dt>
          <dd className="text-gray-700">
            A sworn statement you sign affirming the details and dollar amount of your loss.
            Signing it locks in the amount — do not sign until you are sure.{' '}
            <Link href="/resources/proof-of-loss" className="text-[#1F3964] underline text-sm">Read more</Link>
          </dd>
        </div>
        <div>
          <dt className="font-bold text-gray-900">Public Adjuster</dt>
          <dd className="text-gray-700">
            A licensed professional who works for you in an insurance claim. Handles
            documentation, estimating, and negotiation. Paid on contingency from the claim
            proceeds.{' '}
            <Link href="/resources/public-adjuster" className="text-[#1F3964] underline text-sm">Read more</Link>
          </dd>
        </div>
        <div>
          <dt className="font-bold text-gray-900">RCV (Replacement Cost Value)</dt>
          <dd className="text-gray-700">
            The cost to repair or replace something today at current prices, without
            deducting for age or wear. What your policy ultimately owes you if you complete
            repairs.{' '}
            <Link href="/resources/acv-rcv" className="text-[#1F3964] underline text-sm">Read more</Link>
          </dd>
        </div>
        <div>
          <dt className="font-bold text-gray-900">Reservation of Rights</dt>
          <dd className="text-gray-700">
            A letter from the insurer saying they are investigating your claim but have not
            yet decided if it is covered. They &ldquo;reserve the right&rdquo; to deny later.
            Not a denial — but a warning sign.
          </dd>
        </div>
      </dl>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">S–X</h2>
      <dl className="space-y-4 mb-6">
        <div>
          <dt className="font-bold text-gray-900">Scope</dt>
          <dd className="text-gray-700">
            The list of what needs to be repaired. The scope determines which items appear
            on the estimate. Scope disputes (what should be repaired) are different from
            price disputes (how much it costs).
          </dd>
        </div>
        <div>
          <dt className="font-bold text-gray-900">SIU (Special Investigations Unit)</dt>
          <dd className="text-gray-700">
            The insurer&apos;s internal fraud investigation team. If your claim is referred
            to SIU, the insurer suspects misrepresentation or fraud. Take it seriously.{' '}
            <Link href="/resources/recorded-statements-siu" className="text-[#1F3964] underline text-sm">Read more</Link>
          </dd>
        </div>
        <div>
          <dt className="font-bold text-gray-900">Subrogation</dt>
          <dd className="text-gray-700">
            After the insurer pays your claim, they may pursue the responsible third party
            to recover what they paid. If someone else caused the damage, the insurer steps
            into your shoes to collect from them.
          </dd>
        </div>
        <div>
          <dt className="font-bold text-gray-900">Supplement</dt>
          <dd className="text-gray-700">
            A request for additional payment when damage beyond the original estimate is
            discovered during repairs. Normal and expected on most claims.{' '}
            <Link href="/resources/supplemental-claims" className="text-[#1F3964] underline text-sm">Read more</Link>
          </dd>
        </div>
        <div>
          <dt className="font-bold text-gray-900">Xactimate</dt>
          <dd className="text-gray-700">
            The software most insurance companies use to write repair estimates. It prices
            every line item using a database of local labor and material costs.{' '}
            <Link href="/resources/xactimate" className="text-[#1F3964] underline text-sm">Read more</Link>
          </dd>
        </div>
      </dl>

      <p className="text-gray-700 leading-relaxed mb-6">
        This glossary covers the most common terms. As you read deeper articles on this
        site, unfamiliar terms will be defined in context. If you encounter a term that is
        not here and not explained in the article where it appears, use the{' '}
        <Link href="/contact" className="text-[#1F3964] underline font-medium">
          contact page
        </Link>{' '}
        to ask — and it will be added.
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
