import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: "Commercial vs. Residential Insurance Claims",
  description:
    "Commercial claims run on different structures and valuation rules than residential. Here is how BOP and CPP work, plus coinsurance and CA carrier duties.",
  summary:
    'Commercial claims differ fundamentally from residential ones in policy structure (BOP vs. CPP), valuation, coinsurance exposure, and business income calculation. Business owners should understand these mechanics, and what California requires of commercial carriers, before a loss.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational and reflects the author&rsquo;s interpretation of California
          insurance law as a Licensed Public Adjuster. It is not legal advice. If you have a
          disputed commercial claim, consult with a licensed California attorney who specializes
          in commercial insurance disputes.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        If you own a business and have only dealt with homeowner&rsquo;s insurance claims before,
        you are in for a rude awakening when you file a commercial property claim. The policy
        structure, valuation methods, regulatory protections, and claims handling dynamics are
        fundamentally different. Understanding those differences before you need to file is the
        difference between recovering what you are owed and leaving tens or hundreds of thousands
        of dollars on the table.
      </p>

      {/* ───────── 1. Policy Structure Differences ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Policy Structure: Package vs. Modular
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The most fundamental difference between residential and commercial insurance is how the
        policies are built.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Homeowner&rsquo;s Policies Are Package Deals
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A standard HO-3 bundles everything into one package: dwelling, other
        structures (B), personal property (C), loss of use (D), personal liability (E), and
        medical payments (F). The coverages are linked &mdash; personal property is automatically
        set at a percentage of the dwelling limit, and loss of use is included without a separate
        election. You buy one policy and get all of it.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Commercial Policies Are Modular
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Commercial property insurance is built from separate, independently elected coverage parts.
        Building coverage, Business Personal Property (BPP), Business Income, and Extra Expense
        each have their own limits, conditions, deductibles, and valuation methods. You do not get
        business income coverage just because you insured the building &mdash; each coverage part
        must be specifically included and separately rated.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The primary ISO commercial property forms include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>CP 00 10 &mdash; Building and Personal Property Coverage Form:</strong> Covers
          the building itself, BPP (your business equipment, furniture, inventory, and supplies),
          and property of others in your care
        </li>
        <li>
          <strong>CP 00 30 &mdash; Business Income (and Extra Expense) Coverage Form:</strong>{' '}
          Covers income lost and extra costs incurred during the period the business is shut down
          or operating at reduced capacity due to covered property damage
        </li>
        <li>
          <strong>CP 00 32 &mdash; Business Income (Without Extra Expense):</strong> A stripped-down
          version that covers lost income but not the extra costs of maintaining operations during
          repairs
        </li>
      </ul>

      <CalloutBox variant="warning" title="Coverage You Don&rsquo;t Have Is Coverage You Can&rsquo;t Claim">
        <p>
          If your agent did not include Business Income coverage, you have no claim for lost
          income &mdash; even if your business is shut down for six months. If Extra Expense was
          not elected, the carrier will not pay for your temporary location. Review your policy
          <em> before</em> a loss occurs and confirm every needed coverage part is on the
          declarations page.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        BOP vs. CPP: Two Ways to Buy Commercial Coverage
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A <strong>Business Owners Policy (BOP)</strong> is a simplified, pre-packaged policy for
        small businesses that bundles building, BPP, business income, and general liability &mdash;
        similar in concept to an HO-3 for businesses, but with capped limits and limited
        endorsement options. A <strong>Commercial Package Policy (CPP)</strong> is fully
        customizable, combining multiple coverage forms each with its own limits and conditions.
        CPPs offer more flexibility but more opportunities for coverage gaps.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most small business owners have a BOP and assume it works like their homeowner&rsquo;s
        policy. It does not &mdash; even a BOP has separate coverage parts with separate limits
        and exclusions that have no equivalent in residential insurance.
      </p>

      {/* ───────── 2. Legal and Regulatory Differences ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Legal and Regulatory Differences
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Business owners often assume that commercial claims operate under different rules. Some of
        that is true. Much of it is not.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        California Fair Claims Regulations Apply to Both
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The{' '}
        <Link href="/resources/california-fair-claims" className="text-blue-700 underline hover:text-blue-900">
          California Fair Claims Settlement Practices Regulations
        </Link>{' '}
        (10 CCR &sect; 2695.1 et seq.) apply to <em>all</em> insurance claims in California &mdash;
        residential and commercial. Carriers must acknowledge claims within 15 days, begin
        investigation within 15 days of receiving proof of claim, accept or deny within 40 days,
        and pay undisputed amounts promptly. Despite this, some commercial carriers handle claims
        as if these regulations do not apply to business policyholders &mdash; delaying for months,
        demanding excessive documentation before making any payment, and ignoring regulatory
        timelines. The regulations protect you, and a{' '}
        <Link href="/resources/file-cdi-complaint-guide" className="text-blue-700 underline hover:text-blue-900">
          complaint to the California Department of Insurance
        </Link>{' '}
        is just as available to a commercial policyholder as to a homeowner.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The &ldquo;Sophisticated Policyholder&rdquo; Problem
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Courts generally hold commercial policyholders to a higher standard of understanding their
        own policies. When a homeowner says &ldquo;I did not read my policy,&rdquo; courts are
        often sympathetic. When a business owner makes the same argument, courts are less forgiving
        &mdash; the legal presumption is that business owners are more sophisticated buyers who
        should understand the contracts they sign. This matters most in coverage disputes: if
        ambiguous language could be read two ways, the homeowner is more likely to get the benefit
        of the doubt, while the business owner may face an argument that they should have bargained
        for different terms.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        No SB 495 Equivalent for Commercial
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        California&rsquo;s{' '}
        <Link href="/resources/sb495-contents-rule" className="text-blue-700 underline hover:text-blue-900">
          SB 495
        </Link>{' '}
        requires residential insurers to advance at least 60% of the personal property coverage
        limit to disaster victims without requiring a detailed inventory. There is no equivalent
        for commercial policyholders. A business that loses all its inventory, equipment, and
        records in a disaster will still be required to document every item before seeing a payment
        &mdash; even when the records needed to document the loss were destroyed in the same event.
      </p>

      <CalloutBox variant="important" title="Proof of Loss and Examination Under Oath">
        <p>
          Commercial policies often have stricter{' '}
          <Link href="/resources/proof-of-loss" className="text-blue-700 underline hover:text-blue-900">
            proof of loss
          </Link>{' '}
          requirements and more aggressive{' '}
          <Link href="/resources/examination-under-oath" className="text-blue-700 underline hover:text-blue-900">
            examination under oath
          </Link>{' '}
          provisions. Failure to comply can result in denial of the entire claim. Consult an
          attorney before submitting a sworn proof of loss in a large commercial claim.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Statute of Limitations
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The suit limitation period for both commercial and residential policies is governed by the
        policy&rsquo;s suit limitation provision &mdash; typically one year from the date of loss.
        Equitable tolling may extend this period if the carrier&rsquo;s conduct prevented the
        policyholder from filing suit, but the same principles apply regardless of whether the
        policy is commercial or residential.
      </p>

      {/* ───────── 3. Valuation Differences ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Valuation: How Losses Are Measured
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Building Valuation
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Commercial building coverage can be written on replacement cost, actual cash value, or
        functional replacement cost. (See our article on{' '}
        <Link href="/resources/loss-settlement-provisions" className="text-blue-700 underline hover:text-blue-900">
          loss settlement provisions
        </Link>
        .) The key commercial difference is that functional replacement cost &mdash; paying to
        replace the building with something functionally equivalent rather than identical &mdash;
        is more common and can result in significantly lower payments for older or specialty-use
        buildings.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Coinsurance Is Far More Punitive in Commercial
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        <Link href="/resources/coinsurance-penalty" className="text-blue-700 underline hover:text-blue-900">
          Coinsurance
        </Link>{' '}
        is the most dangerous clause in commercial property insurance. While coinsurance exists in
        some residential policies, it is far more common and more aggressively enforced in
        commercial &mdash; with 80%, 90%, or even 100% coinsurance requirements. If you carry
        $600,000 on a building worth $1,000,000 with an 80% clause (requiring $800,000), the
        carrier will only pay 75% ($600,000 &divide; $800,000) of any partial loss. A $200,000
        loss becomes a $150,000 payment &mdash; a $50,000 penalty on top of the deductible,
        simply for being underinsured.
      </p>

      <CalloutBox variant="warning" title="Coinsurance Catches Business Owners Off Guard">
        <p>
          Construction costs increase every year, and the replacement cost of a commercial building
          can outpace the policy limit quickly. Review your limits annually and consider an agreed
          value endorsement, which suspends the coinsurance clause for the policy period.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Business Personal Property and Inventory
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A residential{' '}
        <Link href="/resources/contents-claims" className="text-blue-700 underline hover:text-blue-900">
          contents claim
        </Link>{' '}
        involves listing furniture, clothing, and household goods. A commercial BPP claim requires
        documenting equipment, fixtures, machinery, raw materials, work in process, and finished
        goods. Depreciation is calculated using useful life schedules, IRS tables, and the
        business&rsquo;s own asset registers. Stock valuation adds further complexity &mdash; was
        inventory valued at replacement cost, selling price, or finished goods value (raw materials
        plus labor and overhead)? The answer depends on the policy language and can mean a 30% to
        50% difference in the claim value.
      </p>

      {/* ───────── 4. Business Income / Loss of Income ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Business Income and Loss of Income
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        <Link href="/resources/business-interruption" className="text-blue-700 underline hover:text-blue-900">
          Business income coverage
        </Link>{' '}
        is the commercial equivalent of a homeowner&rsquo;s loss of use &mdash; but
        orders of magnitude more complex and more aggressively contested. If building damage is the
        visible wound, business income loss is the hemorrhage happening underneath.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Period of Restoration
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under most commercial policies, the <strong>period of restoration</strong> begins 72 hours
        after the direct physical loss &mdash; unlike residential ALE, which typically begins
        immediately when the home becomes uninhabitable. The period ends when the property
        <em> should be</em> repaired with reasonable speed &mdash; not when repairs actually finish.
        That &ldquo;should be&rdquo; language is where most disputes live. The carrier hires a
        consultant who says repairs should have taken four months. In reality, they took ten because
        the carrier took three months to approve scope, materials were backordered, and permits were
        delayed. The carrier caps the payment at four months and tells you the rest is not covered.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Extended Business Income
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Even after repairs are complete, a business does not snap back to full revenue overnight.
        Customers went elsewhere, staff may have found other jobs, and marketing needs to restart.
        Extended business income coverage covers this ramp-up period &mdash; typically 30 days
        after the restoration period ends, though some policies extend to 60 or 90 days. Without
        it, the carrier stops paying the moment repairs finish, even if you are operating at 40%
        of pre-loss revenue.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Extra Expense Coverage
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Extra expense coverage pays for costs the business incurs to continue operating during
        repairs &mdash; temporary locations, replacement equipment, overtime, and expedited
        shipments. It is often a separate coverage part: CP 00 30 includes it, CP 00 32 does not.
        If you elected the cheaper form without extra expense, you cannot claim the cost of your
        temporary location.
      </p>

      <CalloutBox variant="info" title="Business Income Is the Most Underpaid Coverage">
        <p>
          Business income, extended business income, and extra expense are consistently the most
          complex and most underpaid components of commercial property claims. Carriers know that
          most business owners do not have the financial expertise to calculate these losses
          properly, and they exploit that asymmetry. If your business income claim exceeds $50,000,
          engaging a forensic accountant is not optional &mdash; it is essential.
        </p>
      </CalloutBox>

      {/* ───────── 5. Unique Commercial Coverage Issues ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Unique Commercial Coverage Issues
      </h2>
      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Tenant Improvements and Betterments
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a business tenant installs custom flooring, upgraded lighting, commercial kitchen
        equipment, or HVAC modifications, those are <strong>tenant improvements and
        betterments</strong> (TIBs). The landlord&rsquo;s policy typically does not cover them.
        The tenant&rsquo;s BPP coverage should, but only if the limit is sufficient.
        Underinsuring tenant improvements is one of the most common coverage gaps in commercial
        insurance.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Ordinance or Law
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        <Link href="/resources/ordinance-law" className="text-blue-700 underline hover:text-blue-900">
          Ordinance or Law coverage
        </Link>{' '}
        matters in both residential and commercial, but commercial buildings face stricter codes
        &mdash; ADA accessibility, fire suppression, seismic retrofit, and energy efficiency. When
        a commercial building is significantly damaged, the cost of bringing the undamaged portion
        into code compliance can exceed the cost of repairing the actual damage.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Equipment Breakdown and Spoilage
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Standard commercial property policies exclude mechanical and electrical breakdown.
        <strong> Equipment breakdown coverage</strong> (formerly boiler and machinery) covers
        boilers, HVAC systems, electrical panels, compressors, and motors when they fail
        internally. <strong>Spoilage coverage</strong> protects businesses that store
        temperature-sensitive products &mdash; restaurants, grocers, pharmacies &mdash; when a
        power outage or equipment failure causes refrigerated inventory to spoil. Without these
        endorsements, the standard policy may not cover either type of loss.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Accounts Receivable and Valuable Papers
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Accounts receivable coverage</strong> pays for debts owed to the business that
        cannot be collected because the records were destroyed. <strong>Valuable papers
        coverage</strong> pays to reconstruct contracts, blueprints, customer records, and legal
        documents. Many businesses still rely on paper records, and even digital records can be
        lost if on-premises servers are damaged and backups are inadequate.
      </p>

      {/* ───────── 6. Claims Handling Differences ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Claims Handling: A Different Game
      </h2>
      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Forensic Accountants and Multiple Experts
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        On a residential claim, one adjuster typically handles everything. On a commercial claim,
        the carrier may hire separate experts for each coverage part: a building estimator, a
        contents specialist for BPP, and a forensic accountant for business income. Each produces
        an independent report, creating three simultaneous negotiations with three sets of disputes.
        The carrier&rsquo;s forensic accountant will review your tax returns, P&amp;L statements,
        and financial projections to minimize the business income loss. If you do not have your own
        forensic accountant, you are relying on the carrier&rsquo;s hired expert to calculate your
        loss fairly &mdash; like asking the opposing team&rsquo;s scorekeeper to keep your score.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        More Experienced Adjusters
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Carriers assign their most experienced adjusters to commercial claims. These are not the
        same adjusters who handle residential water damage. Commercial adjusters understand ISO
        forms, know which coverage parts are commonly missed, and know exactly how much
        documentation to demand to slow a claim without triggering a regulatory complaint.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Adversarial Handling from Day One
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Residential claims often start with a veneer of cooperation. Commercial claims &mdash;
        especially{' '}
        <Link href="/resources/large-commercial-losses" className="text-blue-700 underline hover:text-blue-900">
          large commercial losses
        </Link>{' '}
        &mdash; are more likely to be adversarial from the outset. The carrier may assign the claim
        to their Special Investigations Unit or hire coverage counsel before the first inspection.
        The policyholder who approaches a commercial claim informally is already at a disadvantage.
      </p>

      <CalloutBox variant="tip" title="Level the Playing Field">
        <p>
          If your commercial loss exceeds $100,000, do not handle it yourself. Engage a Public
          Adjuster for the property claim, a forensic accountant for business income, and an
          attorney if coverage is disputed. The carrier has a team working to minimize your
          payment &mdash; you need your own team working to maximize your recovery.
        </p>
      </CalloutBox>

      {/* ───────── 7. Commercial Policy Conditions (CP 00 90) ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Commercial Policy Conditions (CP 00 90): The Fine Print That Differs from Residential
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The <strong>Commercial Property Conditions form (CP 00 90)</strong> governs procedural and
        contractual rules for every commercial property policy. Many of these conditions have no
        residential equivalent or work differently than homeowners expect. The provisions that
        matter most:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Abandonment: You Cannot Walk Away
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        CP 00 90 states: <em>&ldquo;There can be no abandonment of any property to us.&rdquo;</em>{' '}
        This means you cannot hand damaged property over to the insurer and demand a total loss
        payment. Even if a building is severely damaged, the carrier has no obligation to take
        ownership of it. Conversely, the carrier cannot force you to abandon your property. This
        is a two-way street, but it most often affects policyholders who assume that heavily
        damaged property is automatically a total loss &mdash; under the abandonment clause, you
        still own it, and the carrier will only pay for the cost to repair it unless it truly
        meets the total loss threshold.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Liberalization: Free Coverage Upgrades
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The <strong>liberalization clause</strong> provides that if ISO adopts a revision to a form
        or endorsement that broadens coverage <em>without additional premium</em>, the broader
        coverage automatically applies to existing policies within 45 days of the revision&rsquo;s
        adoption. This means your policy can get better during its term without you doing anything.
      </p>

      <CalloutBox variant="tip" title="Check for Liberalization Upgrades">
        <p>
          When ISO revises a commercial property form to broaden coverage (for example, increasing
          a sub-limit or adding a covered peril), existing policyholders automatically benefit under
          the liberalization clause &mdash; but only if the change does not require additional
          premium. Your broker should be tracking these changes. If a coverage dispute arises, check
          whether any form revisions during the policy period broadened the coverage at issue.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Loss Payment Timing
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under CP 00 90, the carrier must pay for a covered loss <strong>within 30 days</strong>{' '}
        after receiving a satisfactory proof of loss and reaching agreement on the amount. This is
        a contractual deadline that supplements the regulatory timelines under{' '}
        <Link href="/resources/california-fair-claims" className="text-blue-700 underline hover:text-blue-900">
          California&rsquo;s Fair Claims Regulations
        </Link>.
        If the carrier delays beyond 30 days after agreement, it may be in breach of the policy
        conditions. In practice, carriers rarely pay in 30 days &mdash; but the provision creates
        a contractual obligation you can enforce.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Concealment, Misrepresentation, or Fraud
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        CP 00 90 voids the entire policy if the insured &ldquo;intentionally concealed or
        misrepresented a material fact or circumstance&rdquo; relating to the insurance, the
        covered property, or a claim. Unlike California residential claims where the carrier must
        show the misrepresentation was <em>material</em> and relied upon, commercial carriers
        often invoke this condition more aggressively &mdash; particularly in large losses where
        the insured&rsquo;s financial records are scrutinized. An innocent mistake on a proof of
        loss or application can become a voiding defense if the carrier frames it as a
        &ldquo;misrepresentation.&rdquo;
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Recovered Property
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the carrier pays a claim for stolen or lost property and the property is later recovered,
        the insured must notify the carrier promptly. Either party can then elect to take the
        recovered property. In commercial settings, this most commonly applies to stolen equipment,
        inventory, or valuable papers that are recovered after a claim has been paid.
      </p>

      {/* ───────── Summary Comparison ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Side-by-Side Comparison
      </h2>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm text-gray-700 border border-gray-200">
          <thead>
            <tr className="bg-[#1F3964] text-white">
              <th className="px-4 py-3 text-left font-semibold">Issue</th>
              <th className="px-4 py-3 text-left font-semibold">Residential (HO-3)</th>
              <th className="px-4 py-3 text-left font-semibold">Commercial (CPP/BOP)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="px-4 py-3 font-medium">Policy structure</td>
              <td className="px-4 py-3">Package &mdash; all coverages bundled</td>
              <td className="px-4 py-3">Modular &mdash; each coverage part elected separately</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50">
              <td className="px-4 py-3 font-medium">Coinsurance</td>
              <td className="px-4 py-3">Rare, usually waived</td>
              <td className="px-4 py-3">Common: 80%, 90%, or 100% clauses</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="px-4 py-3 font-medium">Loss of income</td>
              <td className="px-4 py-3">ALE (Loss of Use) &mdash; additional living expenses</td>
              <td className="px-4 py-3">Business Income + Extra Expense &mdash; separate forms</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50">
              <td className="px-4 py-3 font-medium">Contents valuation</td>
              <td className="px-4 py-3">Household goods, standard depreciation</td>
              <td className="px-4 py-3">Equipment, inventory, stock &mdash; complex depreciation</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="px-4 py-3 font-medium">Disaster advance</td>
              <td className="px-4 py-3">SB 495: 60% advance without inventory</td>
              <td className="px-4 py-3">No equivalent &mdash; full documentation required</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50">
              <td className="px-4 py-3 font-medium">Fair Claims regs</td>
              <td className="px-4 py-3">Apply in full</td>
              <td className="px-4 py-3">Apply in full (but carriers may act otherwise)</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="px-4 py-3 font-medium">Carrier approach</td>
              <td className="px-4 py-3">Generally cooperative on small claims</td>
              <td className="px-4 py-3">Often adversarial, multiple experts retained</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ───────── Related Reading ───────── */}
      <CalloutBox variant="tip" title="Related Reading">
        <ul className="list-disc pl-4 space-y-1">
          <li>
            <Link href="/resources/cp-cause-of-loss-forms" className="text-blue-700 underline hover:text-blue-900">
              CP Cause of Loss Forms: Basic, Broad &amp; Special
            </Link>{' '}
            &mdash; the form that determines whether your commercial claim is covered
          </li>
          <li>
            <Link href="/resources/cp-vs-bop-policies" className="text-blue-700 underline hover:text-blue-900">
              CP vs. BOP Policies
            </Link>{' '}
            &mdash; structural differences between monoline commercial property and businessowners policies
          </li>
          <li>
            <Link href="/resources/business-interruption" className="text-blue-700 underline hover:text-blue-900">
              Business Interruption Insurance Claims
            </Link>{' '}
            &mdash; period of restoration, BI coinsurance, and carrier tactics
          </li>
          <li>
            <Link href="/resources/commercial-coinsurance" className="text-blue-700 underline hover:text-blue-900">
              Commercial Coinsurance
            </Link>{' '}
            &mdash; the penalty formula, agreed value, and coinsurance alternatives
          </li>
          <li>
            <Link href="/resources/commercial-endorsements" className="text-blue-700 underline hover:text-blue-900">
              Critical Commercial Endorsements
            </Link>{' '}
            &mdash; the endorsements that expand or restrict commercial coverage
          </li>
          <li>
            <Link href="/resources/large-commercial-losses" className="text-blue-700 underline hover:text-blue-900">
              Handling Large Commercial Losses
            </Link>{' '}
            &mdash; strategies for claims exceeding $500,000
          </li>
          <li>
            <Link href="/resources/california-fair-claims" className="text-blue-700 underline hover:text-blue-900">
              California Fair Claims Settlement Practices
            </Link>{' '}
            &mdash; the regulations that apply to all California claims, including commercial
          </li>
        </ul>
      </CalloutBox>

      {/* ───────── CTA ───────── */}
      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Dealing with a Commercial Property Claim?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          A licensed Public Adjuster can review your policy, document your losses across all
          coverage parts, coordinate with forensic accountants, and negotiate with the carrier
          on your behalf.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Request a Free Claim Review &rarr;
        </Link>
      </div>

      {/* ───────── Disclaimer & Author ───────── */}
      <div className="border-t border-gray-200 mt-10 pt-6">
        <p className="text-sm text-gray-500 leading-relaxed mb-3">
          <strong>Disclaimer:</strong> This article is provided for educational and informational
          purposes only and does not constitute legal, financial, or professional advice. Every
          commercial claim involves unique facts and circumstances. Consult a licensed Public
          Adjuster or attorney in your jurisdiction for guidance specific to your situation.
        </p>
        <p className="text-sm text-gray-500 leading-relaxed">
          Written by Leland Coontz III, Licensed Public Adjuster, CA License #2B53445.
        </p>
      </div>

      <hr className="my-8 border-gray-300" />
      <p className="text-sm text-gray-500 italic">
        This article is for informational purposes only and does not constitute legal advice.
        Insurance policies and applicable law vary by state and by policy form. Consult with a
        licensed professional regarding your specific situation.
      </p>
    </>
  )
}
