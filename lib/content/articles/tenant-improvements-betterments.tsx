import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Tenant Improvements and Betterments: Coverage Across Commercial, Condo, Flood, and Renters Policies',
  description:
    'A guide to tenant improvements and betterments coverage across commercial property policies (ISO CP 00 10), HO-6 condo policies, NFIP flood insurance, and HO-4 renters insurance &mdash; including valuation methods, common disputes, and how to protect your interest before a loss occurs.',
  summary:
    'Tenant improvements and betterments, the upgrades a tenant adds to leased space, are covered differently across commercial (ISO CP 00 10), HO-6 condo, NFIP flood, and HO-4 renters policies. Know who insures them and how they are valued before a loss.',
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
        You spend thousands of dollars turning a raw commercial space into a functioning office,
        restaurant, or retail store. You upgrade the flooring in your condo, install custom
        cabinetry, and add built-in shelving. You paint your rental apartment, install ceiling
        fans, and build out a closet system. Then a fire, a flood, or a burst pipe destroys
        everything &mdash; and you discover that figuring out who pays for those improvements
        is one of the most confusing problems in insurance claims.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The term &ldquo;tenant improvements and betterments&rdquo; has a specific meaning in
        commercial property insurance, but the underlying problem &mdash; who insures
        improvements made to a building you do not own &mdash; crosses every policy type.
        This article covers how four different kinds of insurance policies handle the same
        fundamental question.
      </p>

      {/* ═══════════════════════════════════════════════════════════════════════ */}
      {/* SECTION 1: Commercial Property Policies */}
      {/* ═══════════════════════════════════════════════════════════════════════ */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Commercial Property Policies (ISO CP 00 10): The Primary Context
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The ISO Building and Personal Property Coverage Form (CP 00 10) is where the term
        &ldquo;tenant&apos;s improvements and betterments&rdquo; originates in modern insurance
        language. It is defined as a separate category of covered property &mdash; distinct from
        both the building and from Business Personal Property (BPP) &mdash; and it carries its
        own unique valuation rules that differ from anything else in the policy.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        What Qualifies as Tenant Improvements and Betterments
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under the CP 00 10 form, tenant improvements and betterments are defined as fixtures,
        alterations, installations, or additions:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Made a part of the building or structure you occupy
        </li>
        <li>
          Acquired at your expense (the tenant&apos;s expense) or at the expense of someone on
          your behalf
        </li>
        <li>
          That you cannot legally remove
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Practical examples include: built-out interior walls and partitions, HVAC modifications,
        upgraded electrical or plumbing, custom flooring (tile, hardwood, polished concrete),
        built-in reception desks, commercial kitchen installations, bathroom buildouts, lighting
        systems permanently wired into the ceiling, and storefront modifications.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The key word is &ldquo;made a part of the building.&rdquo; Once an improvement is
        physically integrated into the structure &mdash; attached to walls, floors, ceilings,
        or permanent systems &mdash; it becomes part of the real property. The tenant cannot
        take it when the lease ends. It belongs to the landlord. But the tenant has an insurable
        interest in its continued use during the lease term.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        What Is NOT an Improvement or Betterment: Trade Fixtures and BPP
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Not everything a tenant installs in a commercial space qualifies as an improvement or
        betterment. Items that the tenant can remove at the end of the lease without damaging
        the building are classified as <strong>trade fixtures</strong> or simply Business
        Personal Property (BPP). These are covered under the personal property section of the
        policy, not under tenant improvements and betterments.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Trade fixtures:</strong> Display cases, shelving units bolted to walls but
          removable, restaurant booths, dental chairs, salon stations &mdash; items installed
          for the business that can be taken out without structural damage.
        </li>
        <li>
          <strong>Machinery and equipment:</strong> Ovens, industrial equipment, computer
          servers, specialized refrigeration &mdash; items that sit in the space or are
          connected by hoses and plugs rather than permanently integrated.
        </li>
        <li>
          <strong>Furniture and fixtures:</strong> Desks, chairs, portable lighting, rugs &mdash;
          anything not permanently attached.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The distinction matters because BPP and trade fixtures are valued at their standard
        insured value (actual cash value or replacement cost, depending on the policy). Tenant
        improvements and betterments follow an entirely different &mdash; and often less
        favorable &mdash; valuation structure.
      </p>

      <CalloutBox variant="warning" title="The Gray Area: When Is Something &ldquo;Part of the Building&rdquo;?">
        <p>
          Disputes frequently arise over items in the middle &mdash; commercial kitchen hoods
          ducted through the roof, security camera wiring running through walls, signage bolted
          to the facade. The test is usually whether removal would cause material damage to the
          building. If ripping it out leaves holes in walls, ceiling voids, or requires patching,
          it is likely an improvement or betterment. If it unplugs, unbolts, or lifts off without
          damage, it is likely BPP.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The &ldquo;Use Interest&rdquo; Concept
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here is the fundamental principle that drives everything about this coverage: the tenant
        does not own the building or the improvements that have become part of it. The landlord
        owns the physical improvements. But the tenant has a <strong>use interest</strong> in
        those improvements &mdash; the right to benefit from them for the duration of the lease.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This use interest is what the insurance policy protects. The tenant paid for a buildout
        that makes the space usable for their business. If that buildout is destroyed, the
        tenant loses the benefit of money already spent. The policy compensates for that loss
        of use &mdash; but only to the extent that remaining lease time justifies the value.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Valuation: The Three Scenarios
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The CP 00 10 form provides three different valuation outcomes for damaged tenant
        improvements and betterments, depending on who repairs them and whether the loss
        is repaired at all. This is unlike any other property valuation in a standard policy.
      </p>

      <h4 className="text-lg font-semibold text-[#1F3964] mb-2">
        Scenario 1: The Tenant Repairs or Replaces
      </h4>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the tenant pays to repair or replace the improvements, the loss is valued at the
        <strong> actual cost of repair or replacement</strong>. This is the most favorable
        outcome for the tenant &mdash; full reimbursement of what it actually costs to rebuild
        the space. The policy pays what it costs to put those improvements back, subject to
        policy limits.
      </p>

      <h4 className="text-lg font-semibold text-[#1F3964] mb-2">
        Scenario 2: The Landlord Repairs at No Cost to the Tenant
      </h4>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the landlord repairs or replaces the improvements and does not charge the tenant for
        doing so, the policy pays <strong>nothing</strong>. The reasoning is that the tenant has
        suffered no loss &mdash; the improvements are restored and the tenant did not pay for
        the restoration. There is nothing to indemnify.
      </p>

      <h4 className="text-lg font-semibold text-[#1F3964] mb-2">
        Scenario 3: Nobody Repairs (Proration)
      </h4>
      <p className="text-gray-700 leading-relaxed mb-4">
        If neither the tenant nor anyone else repairs the improvements, the loss is valued at a
        <strong> prorated amount</strong>. The policy takes the original cost of the
        improvements and prorates it over the remaining term of the lease (including renewal
        options if exercisable solely by the tenant). The formula is:
      </p>
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
        <p className="text-gray-700 font-mono text-center">
          (Original Cost) &times; (Remaining Lease Term &divide; Total Lease Term) = Payment
        </p>
      </div>
      <p className="text-gray-700 leading-relaxed mb-4">
        For example: A tenant spends $100,000 on a buildout at the start of a 10-year lease. A
        fire occurs in year 6, with 4 years remaining. If no one repairs the improvements, the
        policy pays $100,000 &times; (4 &divide; 10) = $40,000. The logic is that the tenant
        already consumed 6 years of use from the original investment, so only 4 years of value
        remain.
      </p>

      <CalloutBox variant="tip" title="Renewal Options Matter">
        <p>
          The proration calculation includes renewal options that the tenant can exercise
          unilaterally. If the original lease is 5 years with two 5-year renewal options, the
          total lease term for proration purposes is 15 years &mdash; not 5. This dramatically
          increases the payment. Always review the lease for renewal provisions before
          accepting a prorated valuation.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Why the Valuation Method Matters Practically
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The three-scenario structure creates a strong incentive for the tenant to actually
        repair the improvements. If you repair, you get full replacement cost. If you walk
        away or let the landlord handle it for free, you get nothing or a prorated fraction.
        This is analogous to the replacement cost vs. actual cash value holdback in residential
        policies &mdash; the insurer withholds until you actually do the work.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In practice, this creates problems when a tenant cannot afford to front the repair costs,
        when the landlord and tenant disagree about who should repair, or when the lease is
        expiring soon and neither party wants to invest in restoration.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Coverage Limits and Policy Structure
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Tenant improvements and betterments are typically listed on the commercial property
        declarations page with their own coverage limit &mdash; separate from the BPP limit.
        Some policies combine them with BPP under a single limit. The specific structure depends
        on how the policy was written and what the agent or broker selected at binding.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A common problem is underinsurance. A tenant who spent $250,000 on a buildout five years
        ago may have a policy with only $100,000 in tenant improvement coverage because nobody
        updated the limit when additional improvements were made. Unlike building coverage, there
        is no{' '}
        <Link href="/resources/commercial-vs-residential-claims" className="text-[#2E74B5] hover:underline">
          coinsurance penalty
        </Link>{' '}
        specific to improvements and betterments in most forms, but being underinsured still
        means the policy maxes out before the loss is fully covered.
      </p>

      {/* ═══════════════════════════════════════════════════════════════════════ */}
      {/* SECTION 2: HO-6 Condo Policies */}
      {/* ═══════════════════════════════════════════════════════════════════════ */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        HO-6 Condo Policies: Additions and Alterations (Coverage A)
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Condominium owners face a version of the same problem, but the terminology and policy
        structure are different. Under the standard HO-6 policy, Coverage A is not
        &ldquo;Dwelling&rdquo; as it is on an HO-3 &mdash; it is <strong>Dwelling /
        Additions and Alterations</strong>. This coverage protects improvements, alterations,
        and additions made to the unit that are the unit owner&apos;s responsibility under the
        CC&amp;Rs (Covenants, Conditions &amp; Restrictions) or the association&apos;s bylaws.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The concept is similar to tenant improvements in commercial property: the condo owner
        does not own the common structure of the building (the HOA does, collectively), but the
        owner has an insurable interest in the interior improvements within their unit. The
        challenge is determining exactly where the HOA&apos;s master policy responsibility
        ends and the unit owner&apos;s HO-6 responsibility begins.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        What the HO-6 Coverage A Protects
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Coverage A on an HO-6 covers real property within the unit that is the owner&apos;s
        responsibility to insure. This typically includes:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Upgrades the owner made beyond the unit&apos;s original &ldquo;as-delivered&rdquo;
          condition (upgraded countertops, custom cabinets, hardwood floors replacing original
          carpet, tile work, built-in bookshelves)
        </li>
        <li>
          Original fixtures and finishes within the unit that the CC&amp;Rs assign to the unit
          owner (this depends entirely on the association&apos;s governing documents)
        </li>
        <li>
          Structural modifications within the unit (moved walls, expanded closets, added
          bathroom fixtures)
        </li>
        <li>
          Appliances, fixtures, and mechanical systems that serve only the individual unit
          (water heater, HVAC unit, built-in dishwasher) if the CC&amp;Rs assign them to the
          owner
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The CC&amp;Rs Control Everything
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Unlike a commercial lease where the tenant&apos;s insurance obligation is negotiated
        between two parties, a condo owner&apos;s insurance responsibility is dictated by the
        association&apos;s governing documents. The CC&amp;Rs define what the master policy
        covers and what falls to the individual unit owner. These definitions vary enormously
        between associations &mdash; and they control how claims are handled regardless of what
        anyone assumes or remembers from the purchase.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        &ldquo;Studs In&rdquo; vs. &ldquo;Studs Out&rdquo; vs. &ldquo;All In&rdquo;
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The most important distinction in condo insurance is the type of coverage responsibility
        the CC&amp;Rs establish. There are three common structures:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>&ldquo;Studs out&rdquo; (bare walls):</strong> The master policy covers only
          the structural shell of the building &mdash; the exterior walls, roof, common areas,
          and structural framing. Everything from the interior surface of the drywall inward is
          the unit owner&apos;s responsibility: drywall finish, paint, flooring, cabinets,
          fixtures, appliances, plumbing fixtures, interior doors. The unit owner needs
          substantial Coverage A on their HO-6.
        </li>
        <li>
          <strong>&ldquo;Studs in&rdquo; (single entity or original spec):</strong> The master
          policy covers the building <em>including</em> all original fixtures, finishes, and
          improvements as they were when the unit was first sold. The unit owner&apos;s HO-6
          Dwelling coverage covers only upgrades and modifications made after the original purchase.
          If you never remodeled, your Coverage A exposure is minimal.
        </li>
        <li>
          <strong>&ldquo;All in&rdquo; (full coverage by master):</strong> The master policy
          covers everything including unit owner upgrades. This is rare and usually found only
          in high-end associations with correspondingly high HOA fees. Unit owners still carry
          HO-6 for personal property and liability, but Coverage A needs are minimal.
        </li>
      </ul>

      <CalloutBox variant="info" title="Read Your CC&amp;Rs Before a Loss &mdash; Not After">
        <p>
          Most condo owners have never read their CC&amp;Rs. Most learn what they say only after
          filing a claim and being told the master policy will not cover their interior damage.
          Read them now. Look for the section on insurance responsibility and maintenance
          obligations. If it says &ldquo;studs out&rdquo; or &ldquo;bare walls,&rdquo; your
          dwelling limit needs to be high enough to rebuild the entire interior of your unit
          from scratch.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Common HO-6 Disputes Over Improvements
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Even with clear CC&amp;Rs, disputes arise regularly. The most common include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Upgraded cabinets and countertops:</strong> If the CC&amp;Rs are
          &ldquo;studs in&rdquo; (original spec), the master policy covers cabinets and
          countertops as they were originally installed. But what about the $30,000 kitchen
          remodel the owner did in 2019? That upgrade is the owner&apos;s HO-6 claim. The
          master policy pays to restore the original-grade cabinets; the owner&apos;s
          Dwelling coverage pays the difference to restore the upgraded version.
        </li>
        <li>
          <strong>Flooring:</strong> Original carpet was replaced with hardwood five years ago.
          The master policy (in a studs-in association) covers carpet replacement. The
          owner&apos;s HO-6 covers the upgrade cost from carpet to hardwood.
        </li>
        <li>
          <strong>Bathroom fixtures:</strong> The owner replaced a standard builder-grade
          bathtub with a freestanding soaking tub and custom tile surround. The master policy
          covers the original-spec fixtures; the owner covers the upgrade.
        </li>
        <li>
          <strong>Wiring and plumbing within walls:</strong> This is where it gets complicated.
          In many &ldquo;studs out&rdquo; associations, the unit owner is responsible for
          plumbing and wiring from the point it enters the unit. In &ldquo;studs in&rdquo;
          associations, the master policy covers original-spec systems. Know your CC&amp;Rs.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a deeper look at condo and HOA claim coordination, see our guide on{' '}
        <Link href="/resources/condo-hoa-claims" className="text-[#2E74B5] hover:underline">
          condo and HOA claims
        </Link>
        .
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Valuation Under the HO-6
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Unlike the commercial policy&apos;s proration approach, the HO-6 values additions and
        alterations at replacement cost (if the policy includes a replacement cost endorsement,
        which most do) or actual cash value. There is no proration based on remaining
        association membership or ownership duration. The condo owner&apos;s interest is
        permanent &mdash; they own the unit indefinitely &mdash; so the time-based depreciation
        of a lease term does not apply.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This makes HO-6 improvements coverage generally more favorable to the insured than
        commercial tenant improvements coverage. If your upgraded kitchen is destroyed by a
        covered peril, the policy pays to replace it at today&apos;s cost (minus any
        depreciation holdback pending completion of repairs).
      </p>

      {/* ═══════════════════════════════════════════════════════════════════════ */}
      {/* SECTION 3: NFIP Flood Insurance */}
      {/* ═══════════════════════════════════════════════════════════════════════ */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        NFIP Flood Insurance: Tenant Improvements Under Coverage B
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        One of the most commonly overlooked sources of coverage for tenant improvements is the
        National Flood Insurance Program. Many people assume that flood insurance only covers
        the building structure for the building owner, and personal property for the occupant.
        But the NFIP specifically addresses improvements and betterments made by tenants &mdash;
        and it covers them in ways that surprise most policyholders.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        How the NFIP Handles Improvements
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under an NFIP policy, the building owner&apos;s building coverage can include
        improvements and betterments that have become part of the insured building. However,
        the NFIP treats residential and non-residential (commercial) tenant improvements very
        differently &mdash; and the rules are narrower than many policyholders expect.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Coverage Limits for Tenant Improvements Under NFIP
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The NFIP&rsquo;s framework for tenants and unit owners breaks down as follows:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Residential condominium unit owners:</strong> Up to $250,000 in building
          coverage under the NFIP Dwelling Form, which includes coverage for additions and
          alterations within the unit. The Residential Condominium Building Association Policy
          (RCBAP) provides separate master-policy coverage to the association for the building.
        </li>
        <li>
          <strong>Residential tenants:</strong> A residential renter generally cannot purchase
          NFIP <em>building</em> coverage on a property they do not own &mdash; that coverage is
          for the building owner. Renters typically purchase only NFIP contents/personal
          property coverage, up to $100,000 under the Dwelling Form. Tenant-installed
          improvements that have become part of the building are usually not separately covered
          under a renter&apos;s NFIP policy; they may be covered (or not) as part of the
          building owner&apos;s NFIP policy depending on policy terms and ownership of the
          improvements under the lease.
        </li>
        <li>
          <strong>Commercial (non-residential) tenants:</strong> Under the NFIP General Property
          Form, a non-residential tenant can purchase contents coverage (up to $500,000 for
          business personal property under Coverage B). FEMA&rsquo;s General Property Form
          (Section III.B paragraphs 7&ndash;9) and Bulletin W-14059 treat tenant improvements
          and betterments as part of the tenant&apos;s contents coverage &mdash; not as a
          separate building coverage &mdash; subject to a sublimit of <strong>up to 10% of the
          Coverage B (contents) limit</strong>. Critically, that 10% is taken <em>out of</em>
          the contents limit, not added on top of it: using the improvements sublimit reduces
          the dollars available for actual business personal property. This is materially
          narrower than the $500,000 standalone building-coverage figure sometimes assumed.
          The building owner&apos;s NFIP policy remains the primary source of NFIP building
          coverage on the structure itself.
        </li>
      </ul>

      <CalloutBox variant="tip" title="NFIP Coverage Is Often Missed After Floods">
        <p>
          Because many tenants and even insurance agents do not realize that NFIP building
          coverage can apply to tenant improvements, this coverage frequently goes unclaimed
          after flood events. If you are a tenant who suffered flood damage to improvements
          you installed in your space, check whether your flood policy includes building
          coverage &mdash; and check whether it covers improvements and betterments. This is
          real money that often gets left on the table.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        NFIP Valuation of Improvements
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The NFIP values building property at <strong>Replacement Cost Value (RCV)</strong> only
        for single-family dwellings that are the insured&apos;s principal residence. For all
        other buildings (including commercial properties and non-primary residences), the
        valuation is <strong>Actual Cash Value (ACV)</strong>, which means replacement cost
        minus depreciation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is important: a commercial tenant&apos;s flood-damaged improvements covered under
        the General Property Form will be valued at ACV under the NFIP, with depreciation
        applied. A commercial tenant who installed a $200,000 buildout five years ago will not
        receive the full replacement cost from NFIP &mdash; they will receive the depreciated
        value, and only up to the 10%-of-contents-limit sublimit described above (which itself
        reduces the contents limit available for actual business personal property). This is
        materially different from the commercial property policy&apos;s &ldquo;actual cost of
        repair&rdquo; valuation when the tenant actually makes the repairs.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For more detail on NFIP policies and how they interact with private flood coverage,
        see our article on{' '}
        <Link href="/resources/flood-insurance-nfip-vs-private" className="text-[#2E74B5] hover:underline">
          NFIP vs. private flood insurance
        </Link>
        .
      </p>

      {/* ═══════════════════════════════════════════════════════════════════════ */}
      {/* SECTION 4: Renters Insurance (HO-4) */}
      {/* ═══════════════════════════════════════════════════════════════════════ */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Renters Insurance (HO-4): Coverage C and the Improvements Gap
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Standard renters insurance &mdash; the HO-4 policy form &mdash; is primarily a personal
        property and liability policy. Coverage C protects the tenant&apos;s belongings:
        furniture, clothing, electronics, kitchenware, and all the movable items in the unit.
        Coverage E provides personal liability. Coverage D provides Additional Living Expenses
        if the tenant is displaced by a covered loss.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        But what about improvements? What if the tenant painted every room, installed new light
        fixtures, added ceiling fans, built custom shelving, or laid down new flooring with the
        landlord&apos;s permission? The answer is complicated &mdash; and often disappointing.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The General Rule: Permanent Improvements Are Not Contents
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The HO-4 Coverage C is designed to cover <strong>personal property</strong> &mdash;
        items that belong to the tenant and that the tenant can take when they leave. Once an
        improvement becomes permanently attached to the building (and therefore legally becomes
        part of the landlord&apos;s real property), it no longer fits the definition of personal
        property. Under a strict reading, those improvements are not covered as personal property.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This creates a gap. The tenant paid for the improvement. The landlord&apos;s policy
        may cover the building, but the landlord has no obligation to restore tenant-funded
        upgrades beyond the lease&apos;s original condition. The tenant&apos;s HO-4 may not
        cover it because it is no longer personal property. So who pays?
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The HO-4 Sublimit for Improvements
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Recognizing this gap, the standard ISO HO-4 form includes a <strong>limited coverage
        extension</strong> for alterations, appliances, fixtures, and improvements that are
        part of the building and that the tenant acquired or made at their own expense. Under
        Coverage C &mdash; Additional Coverages, this extension typically provides a sublimit
        of <strong>10% of the personal property limit</strong> for such improvements.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If a tenant carries $30,000 in personal property coverage, this means up to $3,000 for
        tenant-installed improvements. For a tenant who spent $500 on paint and a few light
        fixtures, this may be adequate. For a tenant who invested $15,000 in custom closets,
        flooring, and a bathroom upgrade, it is grossly insufficient.
      </p>

      <CalloutBox variant="warning" title="10% Is Almost Never Enough">
        <p>
          If you have made significant improvements to a rental unit &mdash; anything beyond
          paint and minor fixtures &mdash; do not rely on the standard HO-4 sublimit. Contact
          your insurance agent about increasing the improvements coverage or adding an
          endorsement. Some carriers offer higher sublimits or separate scheduled coverage for
          tenant improvements. If yours does not, consider a commercial inland marine floater
          or a separate improvements rider.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Removable vs. Permanent: The Critical Distinction
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The most important question for a renter is whether an installed item can be removed
        without damaging the building. This determines whether it is covered as personal
        property under the full personal property limit or falls under the improvement sublimit:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Covered as personal property (full limit):</strong> Freestanding bookshelves,
          area rugs, curtains and rods (if removable without wall damage), plug-in appliances,
          portable dishwashers, window AC units, furniture
        </li>
        <li>
          <strong>Covered as improvements (10% sublimit):</strong> Installed flooring (tile,
          hardwood, glued-down carpet), built-in shelving that leaves wall damage if removed,
          ceiling fans wired into the electrical system, custom lighting hardwired in, bathroom
          upgrades (new vanity, tile surround)
        </li>
        <li>
          <strong>Gray area items:</strong> Removable backsplash tiles (peel-and-stick vs.
          mortared), wall-mounted TV brackets, smart home wiring, closet organizer systems
          (some screw into studs, some are tension-mounted)
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a broader comparison of how landlord and tenant policies work together, see our
        article on{' '}
        <Link href="/resources/landlord-vs-tenant-claims" className="text-[#2E74B5] hover:underline">
          landlord vs. tenant claims
        </Link>
        .
      </p>

      {/* ═══════════════════════════════════════════════════════════════════════ */}
      {/* SECTION 5: Documentation */}
      {/* ═══════════════════════════════════════════════════════════════════════ */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Documenting Improvements Before a Loss
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Across all policy types, the most common reason tenant improvements claims are
        underpaid or denied is <strong>lack of documentation</strong>. After a fire or flood
        destroys a commercial buildout, a condo renovation, or rental unit improvements, the
        insurer will want proof that the improvements existed, that the tenant paid for them,
        and what they cost. If you cannot prove it, you will not be paid for it.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        What to Keep and Where
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Before and after photographs:</strong> Photograph the space in its original
          condition before you begin improvements. Then photograph the completed improvements
          from multiple angles. Store copies in cloud storage (not just on a phone that could
          be destroyed in the same loss).
        </li>
        <li>
          <strong>Receipts and invoices:</strong> Keep every invoice from contractors,
          materials suppliers, and permit fees. These prove both the cost and the existence of
          improvements. Digital copies in email or cloud storage survive a fire.
        </li>
        <li>
          <strong>Contracts and proposals:</strong> If you hired a contractor, keep the signed
          contract or proposal that describes the scope of work. This is often more detailed
          than a receipt alone.
        </li>
        <li>
          <strong>Permits:</strong> If your improvements required building permits, keep copies.
          Permits are also recorded with the local building department and can be retrieved
          after a loss.
        </li>
        <li>
          <strong>Lease provisions:</strong> Keep a copy of the lease clause that authorizes
          the improvements and describes who is responsible for insuring them.
        </li>
        <li>
          <strong>Property condition report:</strong> Many leases include a move-in condition
          checklist. Keep this &mdash; it proves what was original vs. what you added.
        </li>
      </ul>

      <CalloutBox variant="info" title="Annual Photo Documentation">
        <p>
          Set a calendar reminder to photograph your improvements once a year. Spaces change
          over time as you add more items, and annual photos create a timeline that proves what
          existed at any given point. This is especially important for commercial tenants who
          make improvements in phases over several years.
        </p>
      </CalloutBox>

      {/* ═══════════════════════════════════════════════════════════════════════ */}
      {/* SECTION 6: The Lease Provision Trap */}
      {/* ═══════════════════════════════════════════════════════════════════════ */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Lease Provision Trap: Who Is Required to Insure?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        In commercial real estate, the lease almost always includes insurance requirements for
        both parties. These requirements often create obligations that tenants fail to meet
        &mdash; and the consequences are devastating when a loss occurs.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Typical Lease Insurance Requirements
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most commercial leases include language requiring the tenant to carry insurance on their
        improvements and betterments. The typical provision reads something like:
      </p>
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6 italic">
        <p className="text-gray-700">
          &ldquo;Tenant shall, at its sole cost and expense, maintain property insurance
          covering Tenant&apos;s improvements, betterments, trade fixtures, merchandise,
          furniture, equipment, and all other items of Tenant&apos;s property on the Premises,
          in an amount not less than the full replacement cost thereof.&rdquo;
        </p>
      </div>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the lease says the tenant must insure their improvements and the tenant fails to
        obtain adequate coverage, the tenant is still on the hook for the loss. The landlord
        has no obligation to cover the tenant&apos;s buildout. The landlord&apos;s policy may
        specifically exclude tenant improvements. And the tenant signed a lease promising to
        carry the coverage.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Mutual Waiver of Subrogation
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many commercial leases also include a <strong>mutual waiver of subrogation</strong>
        clause. This means that neither the landlord nor the tenant (nor their insurers) can
        pursue the other party for damages that are covered by insurance. The intent is to keep
        the landlord/tenant relationship out of insurance litigation &mdash; each party carries
        their own coverage and absorbs their own losses without suing each other.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The trap: if the tenant failed to carry the required insurance on their improvements,
        and the waiver of subrogation prevents them from recovering from the landlord or the
        landlord&apos;s insurer, the tenant has no source of recovery at all. They are
        uninsured by their own failure and blocked from suing by the lease.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        NNN Leases and Improvement Responsibility
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Triple-net (NNN) leases complicate things further. In a NNN lease, the tenant is often
        responsible for maintaining and insuring nearly everything about the property, including
        structural components. The line between &ldquo;the building&rdquo; and &ldquo;tenant
        improvements&rdquo; blurs significantly. A tenant on a NNN lease should carry coverage
        that addresses both the building and their improvements &mdash; and should understand
        precisely what the landlord&apos;s policy does and does not cover.
      </p>

      <CalloutBox variant="warning" title="Read Your Lease&apos;s Insurance Clause NOW">
        <p>
          If you are a commercial tenant, pull out your lease and read the insurance section.
          Look for: (1) what you are required to insure, (2) whether there is a waiver of
          subrogation, (3) who is named as an additional insured, and (4) whether the landlord
          has any obligation to insure your improvements. Then compare those requirements to
          your actual policy. Any gap between what the lease requires and what the policy
          provides is a gap that will cost you money when a loss occurs.
        </p>
      </CalloutBox>

      {/* ═══════════════════════════════════════════════════════════════════════ */}
      {/* SECTION 7: Lease Expiration */}
      {/* ═══════════════════════════════════════════════════════════════════════ */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Happens at Lease Expiration
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a commercial lease ends, improvements that have become part of the building
        typically revert to the landlord. The tenant walks away, and the buildout &mdash;
        whether it cost $50,000 or $500,000 &mdash; stays with the property. This is standard
        unless the lease specifically provides otherwise (some leases require the tenant to
        restore the space to its original &ldquo;vanilla shell&rdquo; condition, which creates
        its own set of problems).
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        But the insurance interest existed during the lease. If a covered loss destroyed the
        improvements while the tenant was in occupancy and paying rent, the tenant had an
        insurable interest at the time of the loss. The fact that the lease eventually ends
        does not eliminate the coverage &mdash; it only affects the proration calculation
        under Scenario 3 (when no one repairs).
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Post-Loss Lease Decisions
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a commercial space is severely damaged, the tenant often faces a choice: stay and
        rebuild, or terminate the lease and leave. This decision has enormous insurance
        implications:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>If the tenant stays and rebuilds:</strong> The policy pays actual cost of
          repair (Scenario 1). The tenant gets full replacement of their improvements.
        </li>
        <li>
          <strong>If the tenant leaves:</strong> The policy pays the prorated amount based on
          remaining lease term (Scenario 3). If there is only 1 year left on a 10-year lease,
          the payment is 10% of the original cost.
        </li>
        <li>
          <strong>If the landlord cancels the lease after the loss:</strong> This is a more
          complex situation. If the lease includes a casualty termination clause (allowing
          either party to terminate if damage exceeds a certain percentage), the tenant may
          lose their occupancy right. The insurable interest at the time of loss still existed,
          but the remaining lease term may be calculated as zero &mdash; which results in zero
          payment under proration.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is why commercial tenants need to understand the lease&apos;s casualty provisions
        alongside their insurance. A lease that gives the landlord unilateral power to terminate
        after a loss can effectively eliminate the tenant&apos;s recovery for improvements.
      </p>

      {/* ═══════════════════════════════════════════════════════════════════════ */}
      {/* SECTION 8: Practical Advice */}
      {/* ═══════════════════════════════════════════════════════════════════════ */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Practical Advice for Tenants Across All Policy Types
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Regardless of whether you are a commercial tenant, a condo owner, or a residential
        renter, the following principles apply to protecting your investment in improvements:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        For Commercial Tenants
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Match your coverage to your buildout cost.</strong> Get a specific limit for
          tenant improvements and betterments on your policy that reflects the actual
          replacement cost of everything you have installed. Update it every time you make
          additional improvements.
        </li>
        <li>
          <strong>Understand the three valuation scenarios.</strong> Know that you get full
          replacement only if you actually repair. If you walk away, you get prorated value at
          best.
        </li>
        <li>
          <strong>Negotiate lease provisions carefully.</strong> Push for the right to assign
          your insurance proceeds to rebuilding (not the landlord). Resist casualty termination
          clauses that let the landlord cancel your lease after a loss and wipe out your
          improvement interest.
        </li>
        <li>
          <strong>Carry Business Income coverage.</strong> Even if you recover the cost of your
          improvements, rebuilding takes time. Business income (loss of income) coverage
          protects you during the rebuild period.
        </li>
        <li>
          <strong>Classify items correctly.</strong> Do not lump trade fixtures in with
          improvements. Trade fixtures valued as BPP may get better valuation treatment
          (full replacement cost rather than proration).
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        For Condo Owners
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Read your CC&amp;Rs and master policy.</strong> Determine whether your
          association is &ldquo;studs in,&rdquo; &ldquo;studs out,&rdquo; or &ldquo;all
          in.&rdquo; This determines how much Coverage A you need on your HO-6.
        </li>
        <li>
          <strong>Calculate your Coverage A need.</strong> Estimate the cost to rebuild the
          interior of your unit from the point where the master policy stops covering. If your
          association is &ldquo;studs out,&rdquo; this means drywall, paint, flooring,
          cabinets, countertops, plumbing fixtures, electrical fixtures, appliances, and every
          upgrade you have made. That number is often $100,000 to $200,000+ for a typical unit.
        </li>
        <li>
          <strong>Document every upgrade.</strong> Keep receipts and photos for every renovation.
          If you bought the unit from a previous owner who did a remodel, try to obtain the
          renovation history and costs. You are responsible for insuring it even if you did not
          personally do the work.
        </li>
        <li>
          <strong>Understand the loss assessment exposure.</strong> If the master policy has
          a high deductible and the association assesses unit owners for the shortfall, your
          HO-6 loss assessment coverage becomes critical. This is related but separate from
          your improvements coverage.
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        For Residential Renters
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Know the 10% sublimit.</strong> If your HO-4 provides 10% of the personal property limit for
          improvements, calculate whether that is enough for what you have installed. If not,
          ask your insurer about increasing it.
        </li>
        <li>
          <strong>Prefer removable over permanent.</strong> When possible, choose improvements
          that can be removed without building damage. Floating floors instead of glued-down
          hardwood. Freestanding shelving instead of built-in. Removable wallpaper instead of
          permanent paint. These items are covered as personal property at the full limit rather
          than the improvement sublimit.
        </li>
        <li>
          <strong>Get landlord permission in writing.</strong> If the lease authorizes you to
          make improvements, keep that written permission. If the lease is silent or prohibits
          improvements, understand that you are making an uninsured investment.
        </li>
        <li>
          <strong>Photograph everything.</strong> Before, during, and after installation. Store
          copies outside the unit. If a fire destroys the unit, your phone with the only copies
          may be destroyed too.
        </li>
      </ul>

      {/* ═══════════════════════════════════════════════════════════════════════ */}
      {/* SECTION 9: Cross-Policy Comparison */}
      {/* ═══════════════════════════════════════════════════════════════════════ */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Summary: How Each Policy Type Handles Improvements
      </h2>
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border-collapse border border-gray-300 text-sm text-gray-700">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-3 text-left font-semibold">Policy Type</th>
              <th className="border border-gray-300 p-3 text-left font-semibold">Coverage Name</th>
              <th className="border border-gray-300 p-3 text-left font-semibold">Valuation Method</th>
              <th className="border border-gray-300 p-3 text-left font-semibold">Key Limitation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-3">Commercial (CP 00 10)</td>
              <td className="border border-gray-300 p-3">Tenant Improvements &amp; Betterments</td>
              <td className="border border-gray-300 p-3">Actual cost if repaired; prorated if not</td>
              <td className="border border-gray-300 p-3">Proration reduces value as lease term expires</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 p-3">HO-6 (Condo)</td>
              <td className="border border-gray-300 p-3">Coverage A &mdash; Additions &amp; Alterations</td>
              <td className="border border-gray-300 p-3">Replacement cost (with RCV endorsement)</td>
              <td className="border border-gray-300 p-3">CC&amp;Rs control scope; must coordinate with master policy</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3">NFIP (Flood)</td>
              <td className="border border-gray-300 p-3">General Property Form &mdash; improvements sublimit</td>
              <td className="border border-gray-300 p-3">RCV for owner-occupied primary; ACV otherwise</td>
              <td className="border border-gray-300 p-3">Commercial tenant improvements typically capped at 10% of contents; residential renters cannot buy NFIP building coverage on a unit they do not own</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 p-3">HO-4 (Renters)</td>
              <td className="border border-gray-300 p-3">Coverage C sublimit (10%)</td>
              <td className="border border-gray-300 p-3">ACV or RCV depending on endorsement</td>
              <td className="border border-gray-300 p-3">10% sublimit is almost always insufficient</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════ */}
      {/* SECTION 10: When Multiple Policies Apply */}
      {/* ═══════════════════════════════════════════════════════════════════════ */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When Multiple Policies Might Apply
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        In some loss scenarios, more than one policy could potentially cover the same tenant
        improvements. For example, a commercial tenant who suffers both fire and flood damage
        might have claims under their commercial property policy for the fire-damaged
        improvements and under their NFIP policy for the flood-damaged improvements. A condo
        owner might have overlapping coverage between the master policy and their HO-6.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The principles of indemnity prevent double recovery &mdash; you cannot collect twice
        for the same loss from two different policies. But you can &mdash; and should &mdash;
        pursue the policy that provides the most favorable valuation and recovery for your
        specific situation. In the condo context, the master policy may cover restoration to
        original spec while the HO-6 covers the upgrade cost above that. These are not
        overlapping &mdash; they cover different layers of the same loss.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For more on how commercial and residential claims differ in handling and approach, see
        our article on{' '}
        <Link href="/resources/commercial-vs-residential-claims" className="text-[#2E74B5] hover:underline">
          commercial vs. residential claims
        </Link>
        .
      </p>

      {/* ═══════════════════════════════════════════════════════════════════════ */}
      {/* SECTION 11: Common Claim Mistakes */}
      {/* ═══════════════════════════════════════════════════════════════════════ */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Common Mistakes in Tenant Improvement Claims
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Whether you are filing a claim for destroyed improvements or helping a client with
        theirs, these are the errors that most frequently result in underpayment or denial:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Failing to classify improvements separately from BPP:</strong> Lumping
          everything together as &ldquo;contents&rdquo; means the distinct valuation rules for
          improvements are never triggered. In some cases, separate classification is more
          favorable (commercial, full repair cost); in others (proration scenarios), it may be
          less favorable. Know which applies.
        </li>
        <li>
          <strong>Accepting proration when you intend to repair:</strong> If you are going to
          rebuild the space, insist on Scenario 1 valuation (actual cost of repair). Do not
          let the insurer pay the prorated amount and close the file before you have had time
          to arrange repairs.
        </li>
        <li>
          <strong>Not carrying enough coverage:</strong> The most common error across all policy
          types. Commercial tenants underestimate buildout costs. Condo owners carry $10,000 in
          Coverage A when they need $150,000. Renters rely on a $3,000 sublimit for $15,000 in
          improvements.
        </li>
        <li>
          <strong>Ignoring NFIP coverage for flood-damaged improvements:</strong> After a flood,
          tenants file for contents damage and miss the building coverage for their improvements
          entirely.
        </li>
        <li>
          <strong>No documentation of what existed:</strong> After a total loss, proving what
          improvements existed and what they cost becomes nearly impossible without pre-loss
          documentation. Insurers are not required to take your word for it.
        </li>
        <li>
          <strong>Letting the landlord repair without coordination:</strong> If the landlord
          repairs improvements at no cost to the tenant, the tenant&apos;s policy pays nothing
          (Scenario 2). This might seem fine until you realize the landlord restored to
          original spec, not to the upgraded condition the tenant had created.
        </li>
        <li>
          <strong>Forgetting about the lease termination clause:</strong> If the lease allows
          termination after a casualty and the landlord terminates, the remaining lease term
          for proration may be zero. This needs to be evaluated immediately after a loss &mdash;
          before the landlord makes the termination decision.
        </li>
      </ul>

      <CalloutBox variant="tip" title="Act Quickly After a Commercial Loss">
        <p>
          In a commercial tenant improvement claim, timing matters more than in almost any other
          property claim. The decision about whether to repair, the landlord&apos;s decision
          about whether to terminate the lease, and the classification of the loss under the
          three scenarios all interact. Engage a Public Adjuster or coverage attorney immediately
          to preserve your options before decisions are made that lock you into a less favorable
          outcome.
        </p>
      </CalloutBox>

      {/* ═══════════════════════════════════════════════════════════════════════ */}
      {/* SECTION 12: Key Takeaways */}
      {/* ═══════════════════════════════════════════════════════════════════════ */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Key Takeaways
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Tenant improvements and betterments are fixtures, alterations, and installations
          made at the tenant&apos;s expense that become part of the building &mdash; they are
          distinct from removable trade fixtures and personal property.
        </li>
        <li>
          Under commercial policies, valuation depends entirely on what happens after the loss:
          repair gets full cost, no repair gets proration, landlord repair gets nothing.
        </li>
        <li>
          HO-6 condo policies cover additions and alterations under Coverage A, with the
          CC&amp;Rs determining the line between the master policy and the unit owner&apos;s
          policy.
        </li>
        <li>
          NFIP flood insurance covers tenant improvements under building coverage &mdash; this
          is one of the most frequently overlooked coverages in flood claims.
        </li>
        <li>
          Standard HO-4 renters policies provide only a minimal sublimit (typically 10% of
          Coverage C) for permanent improvements &mdash; inadequate for anything beyond minor
          modifications.
        </li>
        <li>
          Documentation before a loss is critical: photos, receipts, contracts, permits, and
          lease provisions stored outside the insured premises.
        </li>
        <li>
          Commercial lease provisions often require tenants to insure their own improvements,
          and failure to do so can leave the tenant completely uninsured after a loss.
        </li>
        <li>
          Lease termination clauses can eliminate the tenant&apos;s recovery entirely by
          reducing the remaining lease term (and therefore the prorated value) to zero.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The underlying lesson across all policy types is the same: if you invest money in
        improving a space you do not own outright, you need to understand exactly which policy
        covers those improvements, at what valuation, and under what conditions. The time to
        figure this out is before the loss &mdash; not when you are standing in a
        flood-damaged restaurant or a burned-out condo trying to piece together coverage from
        policies you never read.
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
