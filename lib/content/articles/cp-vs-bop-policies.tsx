import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Commercial Property (CP) vs. Businessowners Policy (BOP): Which One Do You Have and Why It Matters',
  description:
    'A BOP bundles coverage for convenience but hides limitations a monoline CP policy does not have. Learn the structural differences, eligibility restrictions, coverage gaps, and why business owners need to understand which policy they have before a loss occurs.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Small and mid-sized businesses in the United States generally insure their property
        through one of two policy structures: a <strong>monoline Commercial Property (CP)
        policy</strong> or a <strong>Businessowners Policy (BOP)</strong>. The BOP is designed
        as a simplified, bundled package &mdash; commercial property and general liability in
        one form, with built-in coverages that the CP program requires separate endorsements
        to add. The CP policy is modular &mdash; you assemble the coverage parts, cause of loss
        forms, and endorsements to build a policy tailored to the specific risk.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many business owners do not know which structure they have. They see &ldquo;commercial
        property insurance&rdquo; on their declarations page and assume the coverage is the same
        regardless of the form. It is not. The differences between a BOP and a monoline CP policy
        affect what is covered, how claims are adjusted, what endorsements are available, and how
        much flexibility you have to customize coverage.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        What Is a Monoline Commercial Property Policy?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A monoline commercial property policy is built from separate, interchangeable ISO forms.
        The core components are:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Commercial Property Coverage Form (CP 00 10)</strong> &mdash; The Building and
          Personal Property Coverage Form. Covers the building, business personal property (BPP),
          and personal property of others in the insured&apos;s care.
        </li>
        <li>
          <strong>Cause of Loss Form</strong> &mdash;{' '}
          <Link href="/resources/cp-cause-of-loss-forms" className="text-[#2E74B5] underline hover:text-blue-900">
            Basic (CP 10 10), Broad (CP 10 20), or Special (CP 10 30)
          </Link>. This determines which perils are covered.
        </li>
        <li>
          <strong>Commercial Property Conditions (CP 00 90)</strong> &mdash; The rules governing
          loss payment, duties after loss, vacancy limitations, and other conditions.
        </li>
        <li>
          <strong>Business Income Form</strong> &mdash; Either CP 00 30 (Business Income with
          Extra Expense) or CP 00 32 (Business Income without Extra Expense), purchased
          separately.
        </li>
        <li>
          <strong>Endorsements</strong> &mdash; Added individually to customize coverage:
          ordinance or law, equipment breakdown, utility services, spoilage, peak season,
          protective safeguards, and dozens more.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The advantage of the CP program is flexibility. You choose each component, set separate
        limits for building and BPP, select the cause of loss form that fits the risk, and add
        endorsements as needed. The disadvantage is complexity &mdash; if an endorsement is not
        added, the coverage does not exist.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        What Is a Businessowners Policy (BOP)?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The ISO Businessowners Policy (BP 00 03, the Special Property Coverage Form) is a
        pre-packaged policy that bundles commercial property and commercial general liability
        into a single form. It is designed for small to mid-sized businesses that fit within
        specific eligibility criteria. The BOP includes many coverages that the CP program
        requires separate endorsements for, making it simpler and often less expensive for
        qualifying businesses.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The BOP uses <strong>Special form (open peril) coverage</strong> as the default for
        both building and business personal property. This is a significant advantage over a
        CP policy where the agent might place the business on a Basic or Broad cause of loss
        form to save on premium.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        BOP Eligibility Restrictions
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Not every business qualifies for a BOP. The ISO eligibility rules generally require:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Building size:</strong> Typically limited to buildings under 25,000 square feet
          for office occupancies and 7,500 square feet for retail and service occupancies,
          though carrier-specific rules vary.
        </li>
        <li>
          <strong>Revenue:</strong> Annual revenue limits vary by carrier but typically cap at
          $3 million to $10 million depending on the business class.
        </li>
        <li>
          <strong>Business type:</strong> Certain business classes are excluded entirely.
          Manufacturers, contractors, auto-related businesses, bars and nightclubs, banks,
          and businesses with significant product liability exposure generally cannot get a BOP.
        </li>
        <li>
          <strong>Number of employees:</strong> Some carriers limit BOPs to businesses with
          fewer than 100 employees.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Businesses that do not fit within these restrictions must use the monoline CP program.
        Large commercial properties, manufacturers, construction firms, and high-risk occupancies
        are almost always on monoline policies.
      </p>

      <CalloutBox variant="info" title="Carrier Variations Matter">
        <p>
          These are the general ISO eligibility guidelines. Individual carriers have wide latitude
          to modify eligibility criteria. Some carriers offer BOPs with much higher revenue limits
          or larger building sizes. Others restrict eligibility more narrowly. Always check with
          your broker about the specific carrier&apos;s rules.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        What the BOP Includes That the CP Policy Does Not (Without Endorsements)
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The BOP&apos;s main selling point is that it includes many coverages &ldquo;built in&rdquo;
        that the CP program requires separate endorsements to add. Key built-in BOP coverages
        include:
      </p>

      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border border-gray-200 rounded-lg text-sm">
          <thead>
            <tr className="bg-[#1F3964] text-white">
              <th className="px-4 py-3 text-left font-semibold">Coverage</th>
              <th className="px-4 py-3 text-center font-semibold">BOP<br/>(BP 00 03)</th>
              <th className="px-4 py-3 text-center font-semibold">CP Policy<br/>(CP 00 10)</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr className="border-t border-gray-200 bg-white">
              <td className="px-4 py-2">Business Income &amp; Extra Expense</td>
              <td className="px-4 py-2 text-center text-green-700">Built in (12 months)</td>
              <td className="px-4 py-2 text-center text-amber-700">Requires CP 00 30 or CP 00 32</td>
            </tr>
            <tr className="border-t border-gray-200 bg-gray-50">
              <td className="px-4 py-2">Civil Authority Coverage</td>
              <td className="px-4 py-2 text-center text-green-700">Built in (30 days)</td>
              <td className="px-4 py-2 text-center text-amber-700">Part of BI form if purchased</td>
            </tr>
            <tr className="border-t border-gray-200 bg-white">
              <td className="px-4 py-2">Extended Business Income</td>
              <td className="px-4 py-2 text-center text-green-700">Built in (60 days)</td>
              <td className="px-4 py-2 text-center text-amber-700">Part of BI form if purchased</td>
            </tr>
            <tr className="border-t border-gray-200 bg-gray-50">
              <td className="px-4 py-2">Newly Acquired Property</td>
              <td className="px-4 py-2 text-center text-green-700">Built in ($250K/180 days)</td>
              <td className="px-4 py-2 text-center text-amber-700">Requires CP 14 20</td>
            </tr>
            <tr className="border-t border-gray-200 bg-white">
              <td className="px-4 py-2">Outdoor Signs</td>
              <td className="px-4 py-2 text-center text-green-700">Built in ($2,500)</td>
              <td className="px-4 py-2 text-center text-red-600">Not included</td>
            </tr>
            <tr className="border-t border-gray-200 bg-gray-50">
              <td className="px-4 py-2">Personal Property Off-Premises</td>
              <td className="px-4 py-2 text-center text-green-700">Built in ($10,000)</td>
              <td className="px-4 py-2 text-center text-red-600">Not included</td>
            </tr>
            <tr className="border-t border-gray-200 bg-white">
              <td className="px-4 py-2">Valuable Papers &amp; Records</td>
              <td className="px-4 py-2 text-center text-green-700">Built in ($25,000)</td>
              <td className="px-4 py-2 text-center text-amber-700">Requires endorsement</td>
            </tr>
            <tr className="border-t border-gray-200 bg-gray-50">
              <td className="px-4 py-2">Employee Dishonesty</td>
              <td className="px-4 py-2 text-center text-green-700">Built in ($10,000)</td>
              <td className="px-4 py-2 text-center text-red-600">Requires crime policy</td>
            </tr>
            <tr className="border-t border-gray-200 bg-white">
              <td className="px-4 py-2">Accounts Receivable</td>
              <td className="px-4 py-2 text-center text-green-700">Built in ($25,000)</td>
              <td className="px-4 py-2 text-center text-amber-700">Requires endorsement</td>
            </tr>
            <tr className="border-t border-gray-200 bg-gray-50">
              <td className="px-4 py-2">Debris Removal</td>
              <td className="px-4 py-2 text-center text-green-700">Built in ($25,000 add&apos;l)</td>
              <td className="px-4 py-2 text-center text-green-700">Included in CP 00 10</td>
            </tr>
            <tr className="border-t border-gray-200 bg-white">
              <td className="px-4 py-2">Collapse (Additional Coverage)</td>
              <td className="px-4 py-2 text-center text-green-700">Built in</td>
              <td className="px-4 py-2 text-center text-green-700">In Broad/Special COL form</td>
            </tr>
            <tr className="border-t border-gray-200 bg-gray-50">
              <td className="px-4 py-2">Spoilage Coverage</td>
              <td className="px-4 py-2 text-center text-red-600">Optional endorsement</td>
              <td className="px-4 py-2 text-center text-red-600">Optional endorsement</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">
        The built-in limits in the BOP are modest &mdash; $10,000 for employee dishonesty,
        $25,000 for valuable papers, $2,500 for outdoor signs. They provide a baseline. Many
        businesses need higher limits, which require endorsements even within the BOP.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Where the CP Policy Has Advantages Over the BOP
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The BOP&apos;s simplicity comes at a cost: less flexibility and certain hidden
        limitations.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Separate Limits and Coinsurance Options
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A CP policy allows you to set separate limits for the building and business personal
        property, choose different{' '}
        <Link href="/resources/commercial-coinsurance" className="text-[#2E74B5] underline hover:text-blue-900">
          coinsurance percentages
        </Link>{' '}
        for each, and select an agreed value endorsement to eliminate the coinsurance penalty
        entirely. BOPs generally use a single property limit structure with less flexibility
        in coinsurance options. For businesses with valuable BPP or complex property
        arrangements, the CP policy&apos;s granularity matters.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Cause of Loss Form Selection
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The BOP defaults to Special form coverage, which is good. But a CP policy gives you the
        choice. For most businesses, the Special form is the right answer. But there are edge
        cases where a business might need the Special form for the building but a different
        approach for certain personal property categories, or where a carrier offers the Special
        form only on the CP program with a more competitive rate.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Endorsement Availability
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The full range of ISO commercial property endorsements is available for CP policies.
        BOPs have their own, more limited set of endorsements. Some specialized endorsements
        &mdash; utility services direct damage and time element, brands and labels, transit
        coverage, manufacturer&apos;s selling price &mdash; may not be available on the BOP
        form. If you need highly customized coverage, the CP program offers more options.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Business Income Flexibility
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The BOP includes business income coverage built in, typically with a 12-month maximum
        period of indemnity. A CP policy with a separate{' '}
        <Link href="/resources/business-interruption" className="text-[#2E74B5] underline hover:text-blue-900">
          business income form
        </Link>{' '}
        allows you to choose between coinsurance (which has no hard time limit but creates a
        penalty risk), monthly limitation of indemnity, maximum period of indemnity, or agreed
        value. Each option works differently. The BOP&apos;s built-in BI coverage is simpler
        but less adaptable to businesses with complex income streams or long restoration
        timelines.
      </p>

      <CalloutBox variant="warning" title="The BOP Business Income Cap">
        <p>
          The BOP&apos;s built-in business income coverage typically limits the period of
          indemnity to 12 months. For a small office that can relocate quickly, 12 months is
          probably adequate. For a restaurant that needs a full buildout of a commercial kitchen,
          or a medical practice that requires specialized construction and equipment, 12 months
          may not be enough. If your restoration could take longer than 12 months, the BOP&apos;s
          built-in limit could leave you with months of uncovered business income losses.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        The BOP Trap: Assuming Everything Is Covered
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The BOP&apos;s biggest risk is the false sense of comprehensiveness it creates. Because
        the BOP includes so many coverages automatically, business owners often assume it covers
        everything they need. This leads to several common problems:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Inadequate built-in limits.</strong> The $10,000 employee dishonesty limit is
          laughably insufficient for most businesses. The $25,000 valuable papers limit would
          not replace the blueprints, contracts, and records of a professional firm. The $2,500
          sign limit would not cover a custom LED sign. Business owners see these coverages
          listed and assume the limits are adequate without checking.
        </li>
        <li>
          <strong>Missing endorsements.</strong> Even a BOP does not cover everything.{' '}
          <Link href="/resources/equipment-breakdown-coverage" className="text-[#2E74B5] underline hover:text-blue-900">
            Equipment breakdown
          </Link>,{' '}
          <Link href="/resources/protective-safeguards" className="text-[#2E74B5] underline hover:text-blue-900">
            protective safeguards
          </Link>{' '}
          conditions, cyber liability, professional liability, and many other coverages require
          separate endorsements or standalone policies even with a BOP.
        </li>
        <li>
          <strong>The &ldquo;BOP exclusion&rdquo; problem.</strong> Some losses that would be
          covered under a carefully endorsed CP policy are not covered under a BOP because the
          BOP form lacks the specific endorsement needed. Business owners discover this only
          after a claim.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Which Is Better for Your Business?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        There is no universal answer. The right choice depends on the size, complexity, and risk
        profile of the business:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Small professional offices</strong> (accountants, attorneys, consultants):
          A BOP is often ideal. The built-in coverages address most needs, the Special form
          coverage is automatic, and the bundled pricing is competitive.
        </li>
        <li>
          <strong>Retail stores and restaurants</strong>: A BOP can work, but watch the business
          income limits, spoilage coverage (which is not built in), and the employee dishonesty
          limit.
        </li>
        <li>
          <strong>Contractors and manufacturers</strong>: Usually ineligible for a BOP. A
          monoline CP policy with targeted endorsements is necessary.
        </li>
        <li>
          <strong>Larger commercial properties</strong> ($5M+ TIV): A monoline CP policy
          provides the flexibility needed for complex property schedules, multiple locations,
          and customized coverage structures.
        </li>
        <li>
          <strong>Properties with unique risks</strong> (cold storage, data centers, historic
          buildings): Monoline CP with specialized endorsements. The BOP&apos;s standardized
          approach cannot accommodate unusual risk profiles.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        What to Ask Your Broker
      </h2>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Do I have a BOP or a monoline CP policy?</strong> Many business owners do not
          know the answer.
        </li>
        <li>
          <strong>If I have a BOP, what are the built-in limits for business income, employee
          dishonesty, valuable papers, and accounts receivable?</strong> Are they adequate for
          my business?
        </li>
        <li>
          <strong>If I have a CP policy, what cause of loss form is attached?</strong> If it is
          Basic or Broad, ask for a quote on the Special form.
        </li>
        <li>
          <strong>What endorsements are on the policy?</strong> Specifically ask about equipment
          breakdown, ordinance or law, utility services, and business income agreed value.
        </li>
        <li>
          <strong>Would I be better served by the other structure?</strong> If you have a BOP
          and are outgrowing it, switching to a CP policy may give you better coverage. If you
          have a CP policy and the business is simple enough for a BOP, switching may save money
          while adding built-in coverages you currently lack.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Key Takeaways
      </h2>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          A BOP bundles property and liability coverage with many built-in coverages. A monoline
          CP policy is modular and requires endorsements to add most coverages.
        </li>
        <li>
          BOPs default to Special form (open peril) coverage, which is a significant advantage
          over a CP policy placed on a Basic or Broad form.
        </li>
        <li>
          BOP eligibility is limited by building size, revenue, employee count, and business type.
          Manufacturers, contractors, and large operations generally cannot get a BOP.
        </li>
        <li>
          The BOP&apos;s built-in limits (employee dishonesty, valuable papers, outdoor signs)
          are baseline amounts that many businesses will need to increase.
        </li>
        <li>
          The CP program offers more flexibility in coinsurance options, business income
          structures, and endorsement availability.
        </li>
        <li>
          Neither structure is inherently better. The right choice depends on the business&apos;s
          size, risk profile, and coverage needs.
        </li>
      </ul>

      <CalloutBox variant="legal" title="Disclaimer">
        <p>
          This article is for general educational purposes only and does not constitute legal
          or insurance advice. BOP eligibility criteria and coverage provisions vary significantly
          between carriers. Some carriers use proprietary BOP forms that differ from the ISO
          BP 00 03. Always review your specific policy and consult with your broker or a licensed
          public adjuster for questions about your coverage.
        </p>
        <p className="mt-2">
          <strong>Author:</strong> Leland Coontz III, Licensed Public Adjuster, CA License #2B53445
        </p>
      </CalloutBox>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Commercial Property Claim?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          Whether you have a BOP or a monoline CP policy, a licensed public adjuster can review
          your coverage, identify missed endorsements, and make sure your claim captures
          everything you are owed.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Request a Free Claim Review &rarr;
        </Link>
      </div>
    </>
  )
}
