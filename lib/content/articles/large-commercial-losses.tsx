import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Large and Complex Commercial Property Insurance Losses',
  description:
    "How large commercial property claims differ from residential: coverage parts triggered, carrier staffing, and why representation matters over $500,000.",
  summary:
    'Large commercial losses (over about $500,000) trigger multiple coverage parts, are staffed differently by carriers, and move slowly. Their complexity, business income, code upgrades, and multiple experts, makes professional representation especially valuable.',
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
        A large commercial property loss &mdash; generally $500,000 or more in property damage,
        and often reaching into the millions &mdash; is a fundamentally different kind of
        insurance claim. The stakes are higher for both the policyholder and the carrier. The
        coverage is more complex. The carrier&rsquo;s response is more aggressive. And the
        financial consequences of mistakes &mdash; on either side &mdash; are enormous.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you own a restaurant, hotel, warehouse, manufacturing facility, apartment
        complex, or shopping center and suffer a major property loss, you are dealing
        with a team of professionals the carrier has assembled specifically to limit
        its exposure. Understanding how that process works is the first step toward a
        fair recovery.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Constitutes a Large Commercial Loss
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        There is no universal dollar threshold, but in practice, carriers treat claims
        differently once the exposure exceeds approximately $500,000 in property damage. At
        that level, the claim moves from a single field adjuster&rsquo;s authority to a large
        loss team, often managed out of a regional or home office. Multi-million dollar losses
        receive even more attention &mdash; and more scrutiny. Common large loss scenarios
        include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Commercial building fires</strong> &mdash; restaurant kitchen fires,
          electrical fires in older buildings, fires involving flammable materials in
          warehouses or manufacturing facilities
        </li>
        <li>
          <strong>Multi-building complexes</strong> &mdash; apartment buildings, shopping
          centers, and industrial parks where a single event damages multiple structures
          and displaces multiple tenants
        </li>
        <li>
          <strong>Hotels and hospitality properties</strong> &mdash; where building damage
          is compounded by massive business income losses from lost room revenue
        </li>
        <li>
          <strong>Major water events</strong> &mdash; pipe failures or sprinkler
          malfunctions in multi-story commercial buildings, often impacting multiple
          tenants on multiple floors
        </li>
        <li>
          <strong>Natural disasters</strong> &mdash; wildfires destroying commercial
          properties in the wildland-urban interface, earthquakes, and catastrophic storms
        </li>
        <li>
          <strong>Explosions</strong> &mdash; gas line failures, industrial accidents, or
          boiler failures causing catastrophic structural damage
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why Large Losses Are Different
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        On a typical residential claim, the carrier assigns one adjuster who handles the
        entire file. On a large commercial loss, the carrier sends a team:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>A lead adjuster or examiner</strong> &mdash; usually a senior adjuster
          with large loss experience, often working from the home office
        </li>
        <li>
          <strong>Forensic accountants</strong> &mdash; hired to analyze the business
          income claim and argue that loss projections are inflated
        </li>
        <li>
          <strong>Engineers</strong> &mdash; structural, mechanical, or electrical
          engineers retained to evaluate the damage, often minimizing the scope of
          covered repairs
        </li>
        <li>
          <strong>Origin and cause investigators</strong> &mdash; particularly on fire
          losses, to determine the cause and potentially develop a coverage defense
        </li>
        <li>
          <strong>Building consultants</strong> &mdash; who prepare cost estimates
          frequently using assumptions that favor the carrier
        </li>
        <li>
          <strong>Coverage counsel</strong> &mdash; attorneys advising the claims team
          on coverage positions and crafting reservation of rights letters
        </li>
      </ul>

      <CalloutBox variant="warning" title="The Team Is Not There to Help You">
        <p>
          Every professional the carrier sends to your property is working for the carrier.
          Their forensic accountant is not there to maximize your business income recovery.
          Their engineer is not there to identify every element of structural damage. Their
          origin and cause investigator is not there to clear your claim &mdash; they are
          looking for reasons to deny or reduce it. You need your own team.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Multiple Coverage Parts Triggered Simultaneously
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A large commercial loss almost always involves multiple coverage parts, each with
        its own limits, sublimits, and valuation methods. On a single fire loss, the
        following coverages may all be in play simultaneously:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Building coverage</strong> &mdash; the structure itself</li>
        <li><strong>Business personal property</strong> &mdash; inventory, equipment, furniture, fixtures</li>
        <li><strong>Business income</strong> &mdash; lost revenue during the period of restoration</li>
        <li><strong>Extra expense</strong> &mdash; costs to continue operations during repairs</li>
        <li><strong>Ordinance or law</strong> &mdash; complying with current codes during reconstruction</li>
        <li><strong>Debris removal</strong> &mdash; clearing damaged materials from the site</li>
        <li><strong>Soft costs</strong> &mdash; architecture, engineering, permits, project management</li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        Each coverage part requires separate documentation, valuation, and negotiation. The
        complexity is multiplicative &mdash; a dispute over the scope of building repairs
        directly impacts the period of restoration, which in turn affects the business
        income calculation.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Higher Scrutiny and SIU Involvement
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Large fire losses frequently trigger the carrier&rsquo;s Special Investigations
        Unit (SIU). This does not necessarily mean the carrier suspects fraud &mdash; it
        means internal procedures require additional investigation above a certain dollar
        threshold. But SIU involvement changes the claim dramatically. You may be asked
        for a{' '}
        <Link href="/resources/recorded-statements-siu" className="text-[#2E74B5] underline">
          recorded statement
        </Link>{' '}
        or examination under oath. Financial records, tax returns, and corporate documents
        may be demanded. The entire claim slows down while the investigation proceeds.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Multiple Carriers and Layered Insurance
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Large commercial properties are often insured through layered programs &mdash; a
        primary carrier providing the first $5 million, an excess carrier providing the
        next $10 million, and possibly additional layers above that. Each carrier has its
        own adjuster, coverage counsel, and settlement authority. The excess carrier will
        not engage until the primary layer is exhausted but will monitor the claim from
        the beginning and may challenge how the primary layer was settled.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Business Income and Business Interruption
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        On many large commercial losses, the business income claim exceeds the property
        damage claim. A hotel that takes eighteen months to rebuild loses eighteen months
        of room revenue. A manufacturing facility that shuts down loses production output
        and may lose customers permanently. A restaurant that closes may never recapture
        its market position. For a comprehensive discussion of how business income coverage
        works, see our article on{' '}
        <Link href="/resources/business-interruption" className="text-[#2E74B5] underline">
          Business Interruption Insurance Claims
        </Link>.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Period of Restoration on Large Losses
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The <strong>period of restoration</strong> defines how long the carrier will pay
        business income losses. It ends when the property &ldquo;should be&rdquo; repaired
        with reasonable speed. On a large commercial loss, the actual restoration may take
        twelve to thirty-six months. Carriers routinely argue it should be shorter &mdash;
        hiring construction consultants who opine the building &ldquo;should have been&rdquo;
        rebuilt in nine months, ignoring that permitting took four months, the carrier took
        three months to approve the scope, and material procurement added two more.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Extended Business Income and Extra Expense
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Even after rebuilding, the business does not immediately return to pre-loss
        revenue. Customers have found alternatives. Extended business income coverage
        covers this ramp-up period, typically for 60 to 365 days after reopening.
        Extra expense coverage pays costs the business incurs to continue operating
        during repairs &mdash; temporary space, replacement equipment, overtime,
        expedited shipping. Both can represent hundreds of thousands of dollars.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Dependent Property and Contingent Business Income
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some policies include contingent business income coverage for losses resulting
        from damage to a supplier&rsquo;s or customer&rsquo;s property on which your
        business depends. This coverage is frequently overlooked even on large losses.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Commercial Property Valuation Issues
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Replacement Cost vs. Actual Cash Value
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most commercial property policies are written on a replacement cost basis, but
        many require the insured to complete repairs before the holdback is released.
        On a $3 million building loss, the gap between the initial ACV payment and full
        replacement cost can exceed $500,000 &mdash; a cash flow challenge that can
        threaten the entire rebuild.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Coinsurance Penalties
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Coinsurance is far more common and far more severe on commercial policies than
        residential ones. An 80% coinsurance clause requires coverage equal to at least
        80% of the building&rsquo;s replacement cost. If the building is underinsured, the
        carrier reduces every partial loss payment proportionally &mdash; potentially
        costing the policyholder hundreds of thousands of dollars. The penalty applies
        independently to building, business personal property, and business income
        coverages. See our article on{' '}
        <Link href="/resources/coinsurance-penalty" className="text-[#2E74B5] underline">
          Coinsurance Penalties
        </Link>{' '}
        for the formula and response strategies.
      </p>

      <CalloutBox variant="tip" title="Agreed Value Endorsements">
        <p>
          An agreed value endorsement suspends the coinsurance clause for the policy
          period. If the policyholder and carrier agreed on the property value at
          inception, the coinsurance penalty cannot apply. This endorsement is critical
          for commercial properties with unique construction or hard-to-estimate values.
          If you have one and the carrier attempts a coinsurance penalty, push back
          immediately. See our article on{' '}
          <Link href="/resources/agreed-value-policies" className="text-[#2E74B5] underline">
            Agreed Value Policies
          </Link>.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Blanket vs. Specific Coverage
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Policies covering multiple locations may use blanket or specific coverage. With
        specific coverage, each building has its own limit. With blanket coverage, a single
        limit applies across all locations &mdash; if one building suffers a total loss,
        the full blanket limit is available even if the scheduled value for that building
        was lower. On multi-building complex losses, this distinction can mean the
        difference between full coverage and a significant shortfall.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Margin Clauses and Inflation Guard
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some policies include a margin clause providing 10% to 25% additional coverage
        above the stated limit, or an inflation guard endorsement that automatically
        increases limits during the policy period. Both are valuable when construction
        costs escalate between policy inception and the date of loss.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Soft Costs on Large Losses
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Soft costs are the non-construction expenses required to complete a rebuild. On
        a residential claim, soft costs are relatively modest. On a large commercial loss,
        they can add 20% to 30% to the total claim value:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Architectural and engineering fees</strong> &mdash; designing the rebuild and preparing construction documents</li>
        <li><strong>Permits and plan check fees</strong> &mdash; substantial on large commercial projects, particularly in California</li>
        <li><strong>Construction management and supervision</strong> &mdash; professional project management on a multi-million dollar rebuild is not optional</li>
        <li><strong>Environmental testing and remediation</strong> &mdash; asbestos surveys, lead paint testing, soil contamination assessments</li>
        <li><strong>Geotechnical and soils engineering</strong> &mdash; particularly relevant on hillside sites</li>
        <li><strong>Surveys, title work, and legal/accounting fees</strong> &mdash; directly related to the property restoration</li>
      </ul>

      <CalloutBox variant="info" title="Soft Costs Are Frequently Underclaimed">
        <p>
          Many policyholders &mdash; and even some adjusters &mdash; do not realize that
          soft costs are covered under a commercial property policy. The carrier will not
          volunteer to pay architectural fees, permit costs, or environmental testing.
          On a $2 million building loss, soft costs of $400,000 to $600,000 are not
          unusual. Failing to claim them leaves significant money on the table. See our
          article on{' '}
          <Link href="/resources/soft-costs-claims" className="text-[#2E74B5] underline">
            Soft Costs in Insurance Claims
          </Link>.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Ordinance or Law on Commercial Properties
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Ordinance or law coverage pays for the increased cost of complying with current
        building codes when rebuilding after a covered loss. On commercial properties,
        this coverage frequently makes the difference between a claim that falls short
        and one that fully restores the property. California commercial properties face
        particularly significant code upgrade requirements:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>ADA compliance</strong> &mdash; accessibility upgrades required during
          major renovation, including restrooms, ramps, doorway widths, parking, and
          path-of-travel improvements. California&rsquo;s Title 24 accessibility
          standards are more stringent than the federal ADA.
        </li>
        <li>
          <strong>Fire sprinkler systems</strong> &mdash; older buildings not originally
          required to have sprinklers may need full installation during a major rebuild
        </li>
        <li>
          <strong>Seismic upgrades</strong> &mdash; a building constructed in the 1960s
          must be rebuilt to current seismic standards, which may require entirely
          different structural systems
        </li>
        <li>
          <strong>Energy efficiency</strong> &mdash; California&rsquo;s Title 24 energy
          code requires modern insulation, HVAC efficiency, lighting controls, and in
          some cases solar readiness
        </li>
        <li>
          <strong>Fire-resistive construction</strong> &mdash; current codes may require
          different wall assemblies, fire-rated corridors, additional exits, and upgraded
          alarm systems
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        On a large commercial loss, ordinance or law costs can add 25% to 50% to the
        claim. A $3 million building loss may generate an additional $750,000 to $1.5
        million in code upgrade costs. This coverage has its own limit, separate from
        the building limit, and many commercial policies carry inadequate ordinance or
        law limits. See our article on{' '}
        <Link href="/resources/ordinance-law" className="text-[#2E74B5] underline">
          Ordinance or Law Coverage
        </Link>{' '}
        for a detailed breakdown of the three coverage parts.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Common Large Loss Scenarios in California
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Commercial Building Fires
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Fire is the most common cause of large commercial losses. Restaurant kitchen
        fires spread rapidly through grease-laden ductwork. Electrical fires in older
        buildings can involve the entire structure before detection. In each case, the
        fire damage is only the beginning &mdash; smoke contamination extends throughout,
        business personal property is destroyed, and the business income loss begins
        immediately.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Wildfire in the Wildland-Urban Interface
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Hotels, wineries, retail centers, and commercial buildings in fire-prone areas
        face catastrophic wildfire exposure compounded by commercial coverage complexity,
        business income losses, and ordinance or law implications. After a major wildfire,
        demand-surge construction costs, contractor scarcity, and overwhelmed permitting
        further extend the period of restoration.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Water Damage to Multi-Story Buildings
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A pipe failure on an upper floor can affect every floor below it. Multiple
        tenants are impacted, each with their own lease provisions regarding insurance
        responsibility. The building owner claims structural repairs and common areas
        while each tenant may have a separate claim for business personal property
        and improvements. A single water event can easily generate a multi-million
        dollar claim.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Earthquake Damage
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Earthquake damage requires a separate policy with high deductibles &mdash; often
        10% to 15% of the building limit. On a $10 million building, the first $1 million
        comes out of the policyholder&rsquo;s pocket.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Public Adjuster&rsquo;s Role on Large Commercial Losses
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A large commercial loss is not a do-it-yourself claim. The carrier has adjusters,
        forensic accountants, engineers, and attorneys all working to manage its exposure.
        The policyholder needs equivalent representation. A licensed Public Adjuster on a
        large commercial loss serves several critical functions:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Managing the building loss scope</strong> &mdash; preparing a
          comprehensive estimate using the same tools and methodology the carrier uses,
          accounting for commercial construction methods, fire-rated assemblies, ADA
          requirements, and code upgrades that the carrier&rsquo;s estimator may minimize
        </li>
        <li>
          <strong>Coordinating business income documentation</strong> &mdash; working with
          the policyholder&rsquo;s accountant and, when appropriate, a forensic accountant
          to prepare financial projections that support the full value of the claim before
          the carrier&rsquo;s forensic accountant defines the narrative
        </li>
        <li>
          <strong>Claiming soft costs and ordinance or law</strong> &mdash; the two
          coverage areas most frequently underclaimed on large losses, requiring
          coordination with architects and engineers to identify every applicable cost
        </li>
        <li>
          <strong>Serving as the single point of contact</strong> &mdash; handling all
          communications with the carrier&rsquo;s team so the business owner is not
          fielding calls from the lead adjuster, forensic accountant, engineer, SIU
          investigator, and coverage counsel while trying to keep the business alive
        </li>
      </ul>

      <CalloutBox variant="info" title="The Fee Pays for Itself">
        <p>
          Public adjuster fees on large commercial losses typically range from 5% to 10%
          of the recovery. The additional recovery achieved through proper scoping, soft
          cost documentation, ordinance or law claims, and business income analysis
          routinely exceeds the fee by a substantial margin. A Public Adjuster who
          recovers an additional $800,000 in soft costs and ordinance or law on a $3
          million claim has more than justified a $200,000 fee. The policyholder nets
          more money with representation than without it.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        California Regulatory Protections
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California&rsquo;s Fair Claims Settlement Practices Regulations (Cal. Code Regs.,
        tit. 10, &sect; 2695.1 et seq.) apply to commercial claims with the same force as
        residential claims. Carriers handling large commercial losses must still:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Acknowledge and begin investigating within 15 days of notice (&sect; 2695.5(e))</li>
        <li>Accept or deny within 40 days after receiving proof of claim (&sect; 2695.7(b))</li>
        <li>Provide a written explanation for any denial or reduction (&sect; 2695.7(b)(1))</li>
        <li>Not require documentation that is not reasonably necessary (&sect; 2695.7(d))</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Despite these requirements, large commercial claims are frequently delayed and
        underpaid. The carrier knows a business owner under financial pressure is more
        likely to accept a low settlement.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Practical Steps After a Large Commercial Loss
      </h2>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Secure the property and prevent further damage.</strong> Board up
          openings, tarp damaged roofs, shut off utilities. Document everything with
          photographs and video before any cleanup begins.
        </li>
        <li>
          <strong>Notify your carrier immediately.</strong> Note the date, time, and
          the name of every person you speak with.
        </li>
        <li>
          <strong>Engage a licensed Public Adjuster before the carrier&rsquo;s team
          arrives.</strong> The earlier you have representation, the better positioned
          you are to control the claim narrative.
        </li>
        <li>
          <strong>Preserve all financial records.</strong> Tax returns, profit and loss
          statements, bank statements, accounts receivable, contracts. If records were
          destroyed, notify your accountant immediately and begin reconstructing them.
        </li>
        <li>
          <strong>Do not give recorded statements without preparation.</strong> Review
          the scope of any statement request with your Public Adjuster or attorney first.
        </li>
        <li>
          <strong>Document every communication with the carrier.</strong> Keep a log of
          calls, emails, promises made, deadlines given, and delays attributable to the
          carrier&rsquo;s handling.
        </li>
        <li>
          <strong>Begin planning the rebuild early.</strong> Engage an architect and
          general contractor to develop the scope and timeline. The sooner you can
          demonstrate actual costs, the harder it is for the carrier to substitute
          lowball projections.
        </li>
      </ol>

      <blockquote className="border-l-4 border-[#C9A84C] pl-4 italic text-gray-600 mb-6">
        A large commercial property loss is a financial crisis. The insurance policy
        exists to resolve that crisis, but the carrier&rsquo;s interests and yours are
        not aligned. The carrier wants to close the claim for as little as possible.
        You need every dollar the policy provides. Professional representation is not
        a luxury on a large loss &mdash; it is a necessity.
      </blockquote>

      <CalloutBox variant="tip" title="Related Reading">
        <p>
          For detailed discussions of specific coverage areas in large commercial losses,
          see our articles on{' '}
          <Link href="/resources/business-interruption" className="text-[#2E74B5] underline">
            Business Interruption Claims
          </Link>,{' '}
          <Link href="/resources/coinsurance-penalty" className="text-[#2E74B5] underline">
            Coinsurance Penalties
          </Link>,{' '}
          <Link href="/resources/ordinance-law" className="text-[#2E74B5] underline">
            Ordinance or Law Coverage
          </Link>,{' '}
          <Link href="/resources/soft-costs-claims" className="text-[#2E74B5] underline">
            Soft Costs in Insurance Claims
          </Link>,{' '}
          <Link href="/resources/recorded-statements-siu" className="text-[#2E74B5] underline">
            Recorded Statements and SIU
          </Link>, and{' '}
          <Link href="/resources/debris-removal" className="text-[#2E74B5] underline">
            Debris Removal Coverage
          </Link>.
        </p>
      </CalloutBox>
      <p className="text-sm text-gray-500 mt-4 italic">
        Written by Leland Coontz III, Licensed Public Adjuster, CA License #2B53445.
      </p>
    </>
  )
}
