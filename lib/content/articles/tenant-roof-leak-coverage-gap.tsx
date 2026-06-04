import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Roof Leaks in Leased Commercial Space: The Coverage Gap That Destroys Businesses',
  description:
    'When rain enters a leased commercial space through a neglected roof, neither the tenant\'s nor the landlord\'s policy may cover the damage. Learn why this gap exists, what triggers coverage, and how to protect yourself before a loss.',
  summary:
    'When rain enters leased commercial space through a neglected roof, neither the tenant\'s nor the landlord\'s policy may cover it, a gap that can destroy a business. Understand the lease and coverage triggers, and address roof responsibility before a loss.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational in nature and reflects the author&rsquo;s interpretation
          of commercial property insurance policy language and California law as a Licensed
          Public Adjuster. It is not legal advice. Every claim involves unique facts, policy
          language, and lease provisions. If you have a dispute involving a roof leak in a
          leased space, consult with a licensed California attorney who specializes in
          insurance or commercial lease law.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        You lease a commercial space for your business. You stock it with inventory, install
        equipment, build it out with fixtures. Then one morning you arrive to find water
        pouring through the ceiling. The roof has been leaking &mdash; maybe for the first
        time, maybe it has been getting worse for months &mdash; and your business personal
        property is soaked. You file a claim under your commercial property policy, expecting
        to be made whole. The adjuster inspects, reviews the cause, and denies the claim.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The reason: rain entered through a roof that was poorly maintained, deteriorated, or
        simply old &mdash; and no covered peril created the opening. There was no windstorm
        that ripped off shingles. No vandal who punctured the membrane. No fallen tree that
        cracked the decking. The roof just failed, and rain came in. Under most commercial
        property policies, that is not a covered loss.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is one of the most devastating coverage gaps in commercial insurance, and it
        catches business tenants completely off guard. They assumed their policy covered water
        damage. It does &mdash; but only when the water enters through an opening created by
        a covered peril.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why Rain Through a Neglected Roof Is Not Covered
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The standard ISO commercial property form (CP 00 10) and the Business Owners Policy
        (BOP) both exclude damage caused by rain, snow, sleet, ice, or dust &mdash; but only
        when these elements enter the building through an opening that was not caused by a
        covered peril. The typical exclusion language reads something like:
      </p>
      <blockquote className="border-l-4 border-[#C9A84C] bg-amber-50 p-4 my-6 text-gray-700 text-sm leading-relaxed italic">
        &ldquo;We will not pay for loss or damage caused by or resulting from rain, snow,
        sleet, ice, sand or dust, whether driven by wind or not, to the interior of any
        building or structure, or to personal property inside the building or structure,
        unless the building or structure first sustains damage by a Covered Cause of Loss
        to its roof or walls through which the rain, snow, sleet, ice, sand or dust enters.&rdquo;
      </blockquote>
      <p className="text-gray-700 leading-relaxed mb-4">
        Read that carefully. Rain damage to your interior property is covered &mdash; but
        only if the building first sustains damage from a covered cause of loss that creates
        the opening. A roof that simply deteriorates, develops cracks in the membrane, loses
        flashing integrity, or has failed sealant around penetrations has not been damaged by
        a covered peril. The opening exists because of wear, age, or deferred maintenance. The
        rain exploited an existing deficiency &mdash; it did not enter through a storm-created
        breach.
      </p>

      <CalloutBox variant="warning" title="This Exclusion Applies Even During a Rainstorm">
        <p>
          The fact that it was raining hard &mdash; even historically hard &mdash; does not
          change the analysis. Heavy rain is not a covered peril under most commercial
          property forms. What matters is whether a covered peril (wind, hail, vandalism,
          a vehicle impact, a fallen object) damaged the roof or wall <em>first</em>, creating
          the opening through which rain then entered. Rain volume alone, no matter how
          extreme, does not satisfy the requirement. If the roof was intact enough to keep
          water out when it was new but no longer is, the cause is deterioration, not the
          rainstorm.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Creates a Covered Opening
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        For rain damage to be covered, you must be able to show that a covered cause of loss
        damaged the roof or wall before the rain entered. The most common covered causes that
        create roof openings include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Windstorm.</strong> Wind that lifts, displaces, or tears roofing material,
          creating a gap through which rain enters. But wind by itself may not be enough
          &mdash; you may need to show a <em>wind-created opening</em>: evidence that wind
          physically damaged the roof assembly and created a breach that was not there before.
          Wind-driven rain that pushes water through an existing gap or seam that was already
          compromised is a much harder argument to make.
        </li>
        <li>
          <strong>Hail.</strong> Hail that punctures or cracks the roof membrane, creating
          holes through which rain subsequently enters.
        </li>
        <li>
          <strong>Falling objects.</strong> Trees, branches, construction debris, or other
          objects that strike the roof and create an opening.
        </li>
        <li>
          <strong>Vandalism.</strong> Intentional damage to the roof by a third party &mdash;
          punctures, removed equipment, displaced panels. If it can be shown that someone
          damaged the roof, the rain entry through that damage point would be covered.
        </li>
        <li>
          <strong>Vehicle or aircraft impact.</strong> A vehicle, aircraft, or their parts
          striking the building and breaching the roof.
        </li>
        <li>
          <strong>Weight of ice, snow, or sleet.</strong> Collapse or structural failure of
          the roof caused by accumulated weight, creating an opening.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The critical distinction: was the opening there before the rain, or did a covered
        peril create it? If the roof had been in perfect condition and wind tore off a section
        of membrane or displaced flashing, that is a wind-created opening and the resulting
        rain damage is covered. If the roof was already deteriorated and wind simply pushed
        rain through existing gaps, the analysis gets far more difficult.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Wind Alone May Not Be Enough
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is where many claims fall apart. A business tenant files a claim after a storm
        and says, &ldquo;the wind blew rain through the roof.&rdquo; But wind-driven rain
        entering through pre-existing openings, gaps, seams, or deteriorated areas is not the
        same as wind creating a new opening. Many carriers will investigate whether the roof
        had visible deterioration before the storm event. If it did &mdash; and in leased
        commercial spaces with deferred maintenance, it often does &mdash; the carrier will
        argue that the wind did not create the opening. The opening was already there. The
        wind just happened to be blowing when the rain came in.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        To argue successfully that wind caused the damage, you typically need evidence of a
        <strong> wind-created opening</strong>: displaced or missing roofing material, torn
        membrane, lifted flashing, or other physical evidence that the wind event breached
        the roof assembly. A roofer or engineer who can inspect the roof promptly after the
        event and document the wind damage &mdash; separate from the pre-existing
        deterioration &mdash; is essential. Waiting days or weeks to inspect allows the
        carrier to argue that any damage observed could have been pre-existing.
      </p>

      <CalloutBox variant="tip" title="Document Immediately After a Storm">
        <p>
          If you experience water intrusion after a wind event, get someone on the roof as
          quickly as possible to photograph and document what happened. You need evidence that
          wind physically damaged the roof &mdash; not just that it was raining during wind.
          Photos showing displaced shingles or tiles, torn membrane, lifted flashing, missing
          cap sheet, or debris impact marks all support the argument that a covered peril
          created the opening. Time-stamped photos taken the day of the storm are far more
          persuasive than an inspection done a week later.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Other Causes Worth Investigating
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a claim for roof-leak water damage is denied, it is worth investigating whether
        a covered peril other than wind may have created the opening:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Vandalism.</strong> In some commercial areas, roofs are accessible and
          vulnerable to vandalism. If someone has been on the roof and damaged the membrane
          &mdash; whether stealing copper, tampering with HVAC units, or deliberately
          puncturing the surface &mdash; the resulting water entry would be through a
          vandalism-created opening, which is a covered peril. Inspect for signs of
          unauthorized access: footprints, tool marks, displaced equipment, cut membrane,
          or stolen flashing.
        </li>
        <li>
          <strong>Falling objects.</strong> Branches, debris from nearby construction, or
          materials blown from other buildings can damage a roof without the building owner
          being aware. A careful roof inspection may reveal impact damage that preceded the
          rain entry.
        </li>
        <li>
          <strong>Prior storm damage.</strong> A previous wind or hail event may have damaged
          the roof before the rain event that caused the interior loss. If the roof was
          compromised by a covered peril at some earlier point, the resulting rain entry may
          still be traceable to that covered event &mdash; especially if the building owner
          failed to make repairs after the earlier damage.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Policies Involved: Tenant and Landlord
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Understanding which policies are in play &mdash; and what each one does and does not
        cover in this scenario &mdash; is critical to knowing where the gap sits.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        The Tenant&rsquo;s Commercial Property Policy (CP 00 10 or BOP)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A business tenant typically carries either a standalone commercial property policy
        (ISO form CP 00 10, the Building and Personal Property Coverage Form) or a Business
        Owners Policy (BOP), which bundles property and liability coverage together. Under
        either form, the tenant insures:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Business Personal Property (BPP)</strong> &mdash; inventory, equipment,
          furniture, fixtures, machinery, supplies, and all other personal property the
          tenant owns or uses in the business. This is typically the largest exposure in a
          roof leak loss. See our guide to{' '}
          <Link href="/resources/business-personal-property-claims" className="text-blue-700 underline hover:text-blue-900">
            Business Personal Property Claims
          </Link>.
        </li>
        <li>
          <strong>Tenant&rsquo;s Improvements and Betterments</strong> &mdash; buildout,
          fixtures, flooring, walls, and other improvements the tenant made to the leased
          space at their own expense. These are covered as a separate category with unique
          valuation rules. See our detailed article on{' '}
          <Link href="/resources/tenant-improvements-betterments" className="text-blue-700 underline hover:text-blue-900">
            Tenant Improvements and Betterments
          </Link>.
        </li>
        <li>
          <strong>Business Income / Extra Expense</strong> &mdash; lost income and additional
          operating costs if the business must close or relocate during repairs. If a roof
          leak shuts down operations, this coverage is critical &mdash; but it is only
          triggered by a covered cause of loss. If the underlying property damage is excluded,
          business income coverage is excluded too.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The tenant&rsquo;s policy does <strong>not</strong> cover the building itself. The
        tenant does not own the roof and does not insure it. The tenant&rsquo;s policy covers
        the tenant&rsquo;s property <em>inside</em> the building &mdash; but only when
        damaged by a covered cause of loss. And here is the problem: if rain entered through
        an opening that was not caused by a covered peril, the damage to the tenant&rsquo;s
        BPP, improvements, and business income is excluded under the same rain/snow/sleet
        exclusion described above.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        The Landlord&rsquo;s Commercial Property Policy
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The building owner &mdash; the landlord &mdash; carries a commercial property policy
        that covers the building, including the roof. This may be a standalone CP 00 10 form
        or a commercial package policy. For smaller properties, the landlord may carry a
        Dwelling Fire policy (DP-1 or DP-3) instead. The landlord&rsquo;s policy covers:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>The building structure</strong> &mdash; walls, roof, foundation, and
          permanently installed building systems (HVAC, plumbing, electrical)
        </li>
        <li>
          <strong>Building owner&rsquo;s personal property</strong> &mdash; landlord-owned
          fixtures, equipment, or appliances on the premises
        </li>
        <li>
          <strong>Loss of Rents</strong> &mdash; rental income lost while the property
          cannot be occupied due to a covered loss. See{' '}
          <Link href="/resources/commercial-loss-of-rents" className="text-blue-700 underline hover:text-blue-900">
            Commercial Loss of Rents
          </Link>
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        What the landlord&rsquo;s policy does <strong>not</strong> cover is the tenant&rsquo;s
        property. The tenant&rsquo;s inventory, equipment, and improvements are not the
        landlord&rsquo;s insurable interest. And in most roof leak scenarios, the
        landlord&rsquo;s policy will not cover the interior water damage to the
        tenant&rsquo;s space either &mdash; for the same reason the tenant&rsquo;s policy
        will not: the rain exclusion applies unless a covered peril created the opening.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        There is an additional wrinkle for landlords. The roof deterioration itself &mdash;
        the failed membrane, the cracked flashing, the worn-out sealant &mdash; is a
        maintenance issue, not a covered loss. The landlord&rsquo;s policy will not pay to
        replace or repair the roof when it fails from age or neglect. It will pay for roof
        damage caused by a covered peril (wind, hail, fire, falling objects), but not for
        the gradual failure that caused the leak.
      </p>

      <CalloutBox variant="important" title="The Double Gap">
        <p>
          This creates a scenario where no policy covers the loss. The tenant&rsquo;s policy
          excludes the rain damage because there was no covered-peril opening. The
          landlord&rsquo;s policy excludes the interior damage for the same reason &mdash;
          and does not cover the tenant&rsquo;s property in any event. The landlord&rsquo;s
          policy also will not pay to fix the roof because the roof failure was a maintenance
          issue. The tenant loses their property. The landlord has an uninsured repair bill.
          Nobody&rsquo;s insurance pays for anything.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What About the Landlord&rsquo;s Liability?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When rain damages a tenant&rsquo;s property because the landlord failed to maintain
        the roof, the tenant may have a negligence claim against the landlord. This is
        separate from the insurance coverage question. The landlord has a duty &mdash; both
        under the lease and under California Civil Code &sect;1941 &mdash; to maintain the
        property in a habitable and tenantable condition. A leaking roof that damages a
        commercial tenant&rsquo;s property may give rise to a claim for breach of the lease,
        negligence, or both.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The landlord&rsquo;s <strong>commercial general liability (CGL) policy</strong> may
        respond to such a claim &mdash; but CGL coverage for property damage caused by a
        landlord&rsquo;s failure to maintain is often limited, disputed, or excluded under
        various provisions. The &ldquo;your work&rdquo; and &ldquo;your product&rdquo;
        exclusions, the &ldquo;expected or intended&rdquo; injury exclusion, and various
        maintenance-related exclusions can all come into play. A landlord who knew the roof
        was leaking and failed to repair it may face an argument that the resulting damage
        was &ldquo;expected&rdquo; rather than &ldquo;accidental.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The practical result: even when the landlord is clearly at fault, recovering from
        the landlord or the landlord&rsquo;s insurer is neither quick nor certain. A
        tenant whose property is destroyed by a roof leak may face months or years of
        litigation to recover from the landlord &mdash; all while the tenant&rsquo;s own
        insurance has declined the claim.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Commercial Tenants Can Protect Themselves
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The best time to address this risk is before you sign the lease &mdash; or at
        least before you have a loss. Here are practical steps that can make the difference
        between a devastating uninsured loss and a manageable situation:
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        1. Demand a Roof Inspection Before Signing the Lease
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Before you move your business into a leased space, insist that the landlord provide
        a current roof inspection report from a licensed roofing contractor. You want to know
        the age of the roof, its condition, the type of membrane or roofing system, whether
        there are any existing leaks or areas of concern, and the estimated remaining useful
        life. If the landlord refuses or cannot produce one, that itself tells you something
        about how the roof has been maintained.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you are already in the space and did not get an inspection before signing, request
        one now. You cannot go back in time, but you can establish a baseline for the current
        condition.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        2. Negotiate Lease Provisions for Roof Maintenance
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your lease should include clear language about who is responsible for roof maintenance
        and repair, how quickly the landlord must respond to reported leaks, and what happens
        if the landlord fails to act. In a triple-net (NNN) lease, the tenant may be
        responsible for roof maintenance &mdash; which at least gives the tenant control over
        the condition of the roof. In a gross or modified gross lease, roof maintenance is
        typically the landlord&rsquo;s obligation, but the lease should spell out response
        times and remedies.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        3. Inspect the Roof Yourself If Possible
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many commercial tenants assume they are not allowed on the roof. Some leases
        prohibit it; others are silent on the subject. If your lease does not prohibit roof
        access, consider having a roofing contractor inspect the roof annually on your behalf.
        Even if you are not responsible for roof maintenance, knowing the condition of the
        roof above your property is valuable intelligence. If the roof is deteriorating,
        you want to know before it fails &mdash; not after your inventory is soaked.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some tenants do get on the roof regardless of lease restrictions, because the cost
        of an inspection is trivial compared to the cost of an uninsured inventory loss. If
        you choose to do this, understand the liability implications and consult your
        attorney.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        4. Document and Report Every Leak Immediately
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you notice any water intrusion &mdash; ceiling stains, dripping, damp walls,
        musty odors &mdash; report it to the landlord immediately and <strong>in
        writing</strong>. Email creates a contemporaneous record. Follow up in writing if
        the landlord does not respond. Keep copies of everything.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This documentation serves multiple purposes. It establishes the landlord&rsquo;s
        knowledge of the problem and when they were put on notice. It creates a record of
        the landlord&rsquo;s failure to act if they do not make repairs. And it supports
        a negligence claim against the landlord if the roof eventually fails and damages
        your property. A landlord who was notified repeatedly about a leaking roof and
        failed to repair it is in a much weaker position to defend against a damage claim
        than one who had no knowledge of the problem.
      </p>

      <CalloutBox variant="tip" title="Paper Trail Is Everything">
        <p>
          Every written notice you send to the landlord about a roof leak or water intrusion
          is a building block for a negligence claim if the landlord fails to act. Date your
          communications, attach photos, and keep copies in a location separate from the
          leased premises. If the roof eventually fails catastrophically and your insurance
          denies the claim, your documented history of reporting may be your only path to
          recovery &mdash; through a claim against the landlord.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        5. Move Vulnerable Property Away from Known Problem Areas
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you know the roof has issues &mdash; even if the landlord has promised to fix
        them &mdash; do not store your most valuable inventory or equipment directly below
        the problem area. Tarp what you can. Move what you can. This is not a long-term
        solution, but it is basic loss mitigation while you press the landlord for repairs.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        6. Review Your Policy for Endorsements or Broader Coverage
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some commercial property policies can be endorsed to provide broader water damage
        coverage, or may include coverage grants that modify the standard rain exclusion.
        Ask your insurance broker whether your policy has any endorsements that expand
        coverage for water damage, and whether broader coverage is available for purchase.
        Also review whether your policy covers damage caused by &ldquo;defective
        maintenance&rdquo; performed by others &mdash; some forms may provide limited
        coverage when the building owner&rsquo;s negligent maintenance causes damage to
        the tenant&rsquo;s property, though this is uncommon in standard ISO forms.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When a Claim Is Denied: Next Steps
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your commercial property claim for roof-leak water damage is denied, do not
        accept the denial without investigating further:
      </p>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Read the denial letter carefully.</strong> Identify the specific exclusion
          the carrier is relying on. Is it the rain/snow/sleet exclusion? Is it the
          maintenance or wear-and-tear exclusion? The specific exclusion cited determines
          what arguments are available to you. See our guide to{' '}
          <Link href="/resources/coverage-disputes" className="text-blue-700 underline hover:text-blue-900">
            Coverage Disputes
          </Link>.
        </li>
        <li>
          <strong>Get the roof inspected immediately.</strong> Hire a licensed roofing
          contractor or engineer to inspect the roof and document its condition. You are
          looking for evidence that a covered peril &mdash; wind, hail, vandalism, a fallen
          object &mdash; created or contributed to the opening through which rain entered.
          A qualified inspector may find wind damage, impact marks, or signs of vandalism
          that the carrier&rsquo;s adjuster missed or did not look for.
        </li>
        <li>
          <strong>Investigate all possible causes.</strong> Do not limit your analysis to
          wind. Consider vandalism, falling objects, prior storm damage, weight of snow or
          equipment on the roof, and any other covered peril that may have compromised the
          roof before the rain event.
        </li>
        <li>
          <strong>Pursue the landlord.</strong> If the roof failed due to the landlord&rsquo;s
          failure to maintain, you may have a negligence claim, a breach-of-lease claim, or
          both. Your documented history of reporting leaks to the landlord becomes critical
          evidence in this context.
        </li>
        <li>
          <strong>Consult a Public Adjuster or attorney.</strong> A{' '}
          <Link href="/resources/public-adjuster" className="text-blue-700 underline hover:text-blue-900">
            Licensed Public Adjuster
          </Link>{' '}
          can review your policy, evaluate the cause of loss, and present arguments the
          carrier may not have considered. If the claim involves significant value, an
          attorney experienced in insurance coverage litigation may be able to identify
          policy language or legal theories that support coverage.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Bigger Picture: A Preventable Problem
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The tragedy of roof-leak losses in leased commercial spaces is that they are largely
        preventable. A landlord who maintains the roof prevents the leak from happening in the
        first place. A tenant who inspects the roof, negotiates protective lease provisions,
        and documents problems creates both a deterrent to landlord neglect and a path to
        recovery when things go wrong. An insurance agent who explains the rain exclusion to a
        commercial tenant before a loss &mdash; and explores whether broader coverage is
        available &mdash; prevents the shock of an unexpected denial.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        But none of this happens often enough. Landlords defer maintenance. Tenants assume
        they are covered. Agents do not explain exclusions. And when the roof finally fails,
        a business that may have invested hundreds of thousands of dollars in inventory,
        equipment, and improvements discovers that nobody&rsquo;s insurance will pay for the
        damage.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you are a commercial tenant, do not wait for a loss to learn about this gap. Ask
        your agent about the rain exclusion in your policy today. Ask your landlord about the
        condition of the roof. Get it in writing. And if you have already experienced a loss
        and received a denial, investigate every possible covered cause of loss before
        accepting the carrier&rsquo;s conclusion that you are not covered.
      </p>

      <CalloutBox variant="info" title="Related Articles">
        <ul className="list-disc pl-4 space-y-1 text-sm">
          <li>
            <Link href="/resources/landlord-vs-tenant-claims" className="text-blue-700 underline hover:text-blue-900">
              Landlord vs. Tenant Insurance Claims
            </Link>{' '}
            &mdash; who files which claim and the coverage gap between DP-3 and HO-4
          </li>
          <li>
            <Link href="/resources/tenant-improvements-betterments" className="text-blue-700 underline hover:text-blue-900">
              Tenant Improvements and Betterments
            </Link>{' '}
            &mdash; coverage for your buildout across commercial and residential policies
          </li>
          <li>
            <Link href="/resources/roof-damage" className="text-blue-700 underline hover:text-blue-900">
              Roof Damage Insurance Claims
            </Link>{' '}
            &mdash; causes, coverage, and settlement strategies for roof claims
          </li>
          <li>
            <Link href="/resources/coverage-disputes" className="text-blue-700 underline hover:text-blue-900">
              Coverage Disputes
            </Link>{' '}
            &mdash; how to respond when the insurer says the loss is not covered
          </li>
          <li>
            <Link href="/resources/business-personal-property-claims" className="text-blue-700 underline hover:text-blue-900">
              Business Personal Property Claims
            </Link>{' '}
            &mdash; documenting and recovering the value of your business contents
          </li>
        </ul>
      </CalloutBox>

      <CalloutBox variant="legal" title="Important Notice">
        <p>
          The information provided in this article is for educational purposes only and does
          not constitute legal or professional advice. Insurance policies, lease agreements,
          and applicable law vary by state and by insurer. Always consult with a licensed
          insurance professional, Public Adjuster, or attorney for guidance specific to your
          situation.
        </p>
      </CalloutBox>

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
