import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Landlord vs. Tenant Insurance Claims: Who Files What, Coverage Gaps, and How to Avoid Getting Caught in the Middle',
  description:
    'Understanding landlord DP-3 and tenant HO-4 policies, who files which claim, how coverage gaps leave damage unpaid, subrogation risks, and practical steps for coordinating two separate insurance claims on the same property.',
  summary:
    'A landlord\'s DP-3 policy covers the building; a tenant\'s HO-4 covers their belongings and liability. Knowing who files which claim, where coverage gaps fall, and how subrogation works prevents damage from going unpaid between the two policies.',
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
        When a rental property is damaged, one of the most confusing things for both landlords and
        tenants is figuring out which insurance policy covers what. The landlord has a policy. The
        tenant may have a policy. But those two policies were written by different companies, cover
        different things, and are handled by different adjusters on different timelines. The result
        is a gap-filled mess that leaves real damage unpaid &mdash; unless you understand how the
        pieces fit together.
      </p>

      {/* ───────── Two Policies, Two Jobs ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Two Policies, Two Jobs
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A landlord&rsquo;s policy and a tenant&rsquo;s policy are designed to protect completely
        different interests in the same building. Neither one is a substitute for the other.
      </p>
      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Landlord&rsquo;s Dwelling Policy (DP-3 or DP-1)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The standard landlord policy is a <strong>Dwelling Fire policy</strong>, most commonly the
        DP-3 form (sometimes DP-1 for basic coverage). This policy covers the building itself
        &mdash; the structure, walls, roof, built-in systems like plumbing and electrical, and
        other structures on the property such as detached garages or fences. It also covers the
        landlord&rsquo;s personal property that is kept at the rental (appliances the landlord
        provides, maintenance equipment, etc.) and{' '}
        <Link href="/resources/ale-frv" className="text-[#2E74B5] hover:underline">
          Fair Rental Value
        </Link>{' '}
        &mdash; the rental income the landlord loses while the property is uninhabitable.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        What the landlord&rsquo;s policy does <em>not</em> cover is the tenant&rsquo;s belongings.
        If a fire destroys the tenant&rsquo;s furniture, clothing, and electronics, the
        landlord&rsquo;s policy will not pay a dime for any of it.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Tenant&rsquo;s Renters Policy (HO-4)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The tenant&rsquo;s policy &mdash; formally the HO-4 &mdash; covers the tenant&rsquo;s
        personal property (furniture, clothing, electronics, kitchenware), personal liability
        (if someone is injured in the tenant&rsquo;s unit), and{' '}
        <Link href="/resources/ale-frv" className="text-[#2E74B5] hover:underline">
          Additional Living Expenses (ALE)
        </Link>{' '}
        if the tenant is displaced by a covered loss. It also provides a small but important
        coverage for <strong>improvements and alterations</strong> the tenant has made to the
        rental unit, which we will discuss in detail below.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        What the tenant&rsquo;s policy does <em>not</em> cover is the building. If the
        tenant&rsquo;s cooking fire damages the kitchen walls and cabinets, the tenant&rsquo;s
        HO-4 will not pay for those structural repairs. That is the landlord&rsquo;s claim to file
        under the DP-3.
      </p>

      <CalloutBox variant="tip" title="Both Policies Can Be Active on the Same Loss">
        <p>
          A single event &mdash; a kitchen fire, a burst pipe, a storm &mdash; can trigger claims
          under both policies simultaneously. The landlord files for building damage and lost rent.
          The tenant files for destroyed belongings and displacement expenses. Two separate claims,
          two separate insurers, two separate checks.
        </p>
      </CalloutBox>

      {/* ───────── DP-3 vs. HO-3 ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How the Landlord&rsquo;s DP-3 Differs from a Standard Homeowner&rsquo;s HO-3
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many landlords assume their dwelling policy works the same as the homeowner&rsquo;s policy
        they carry on their own residence. It does not. There are critical differences that create
        real-world coverage problems.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Open Peril vs. Named Peril on Personal Property
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Both the DP-3 and the HO-3 provide <strong>open-peril</strong> (also called
        &ldquo;special form&rdquo;) coverage on the dwelling structure itself. This means
        everything is covered unless it is specifically excluded. So far, so similar.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The difference is on <strong>personal property</strong>. Under the HO-3, your personal
        belongings are covered on a <strong>named-peril</strong> basis &mdash; the policy lists
        specific perils (fire, windstorm, theft, vandalism, etc.) and only those are covered. The
        DP-3 also covers personal property on a named-peril basis, but the list of covered perils
        may differ, and some key perils may be absent entirely.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Theft Coverage Is Often Missing
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under the standard ISO DP-3 form, <strong>theft is not automatically included</strong>.
        A landlord who wants theft coverage for personal property kept at the rental &mdash;
        appliances, tools, provided furnishings &mdash; must add it by endorsement. Many landlords
        do not realize this until after a break-in. The policy will cover damage caused by
        burglars (under vandalism and malicious mischief), but the stolen items themselves are
        not covered without the theft endorsement.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Liability Coverage May Not Be Included
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The HO-3 includes personal liability coverage by default. A standard DP-3 often does not.
        Liability coverage on a dwelling policy is typically an optional add-on. A landlord who
        does not add it has no coverage if a tenant or visitor is injured on the property due to a
        maintenance issue, and may be personally exposed to a lawsuit with no insurer to defend
        them.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Loss of Use: Fair Rental Value vs. ALE
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The HO-3 provides Additional Living Expenses (ALE), which covers the increased costs of
        living elsewhere while your owner-occupied home is repaired. The DP-3 provides{' '}
        <Link href="/resources/ale-frv" className="text-[#2E74B5] hover:underline">
          Fair Rental Value (FRV)
        </Link>
        , which reimburses the landlord for lost rental income during repairs. These are
        fundamentally different coverages serving different purposes, and both can be active on
        the same loss &mdash; the landlord collects FRV for lost rent while the tenant collects
        ALE from the HO-4 for temporary housing costs.
      </p>

      <CalloutBox variant="warning" title="Check Your Declarations Page">
        <p>
          If you are a landlord, pull out your{' '}
          <Link href="/resources/declarations-page" className="text-[#2E74B5] hover:underline">
            declarations page
          </Link>{' '}
          right now and verify whether your DP-3 includes theft coverage and liability coverage.
          These are the two most common &ldquo;missing&rdquo; coverages that landlords discover
          only after a loss.
        </p>
      </CalloutBox>

      {/* ───────── The Coverage Gap ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Coverage Gap: Items That Fall Between Both Policies
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Even when both the landlord and tenant carry proper insurance, certain items can fall into
        a gap where neither policy clearly covers them.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Landlord-Installed Appliances Damaged by Tenant Negligence
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Consider a common scenario: the landlord provides a refrigerator, dishwasher, and
        washer/dryer. The tenant&rsquo;s child leaves a toy in the dryer, causing a fire that
        destroys the unit. The landlord&rsquo;s DP-3 covers the appliance as landlord personal
        property, but the insurer may pursue{' '}
        <Link href="/resources/subrogation" className="text-[#2E74B5] hover:underline">
          subrogation
        </Link>{' '}
        against the tenant for negligence. The tenant&rsquo;s HO-4 covers the tenant&rsquo;s
        <em> liability</em> to the landlord &mdash; but only if the tenant actually has renters
        insurance. If the tenant is uninsured, the landlord recovers from the DP-3 (minus the
        deductible), and the insurer may sue the tenant directly to recover its payout.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Items the Landlord Provides but Does Not Insure
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some landlords provide furniture, window treatments, or other items in a furnished rental
        but fail to list them as covered personal property on the DP-3. The tenant&rsquo;s HO-4
        does not cover the landlord&rsquo;s property. The result is an uninsured loss for items
        that both parties assumed were covered by someone.
      </p>

      {/* ───────── Tenant Improvements ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Tenant Improvements and Alterations
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Tenants frequently invest in their rental units &mdash; installing new flooring, upgrading
        light fixtures, adding built-in shelving, remodeling a bathroom. When these improvements
        are damaged, whose policy covers them?
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The answer is almost always the <strong>tenant&rsquo;s HO-4</strong>. The standard HO-4
        includes coverage for &ldquo;improvements and alterations&rdquo; (sometimes called
        &ldquo;building additions and alterations&rdquo;) under Coverage C. The default limit is
        typically <strong>10% of the personal property coverage limit</strong>. So if a
        tenant&rsquo;s HO-4 has $40,000 in personal property coverage, there is $4,000 available
        for improvements.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For tenants who have made significant investments &mdash; a $15,000 kitchen remodel, custom
        built-ins, hardwood flooring &mdash; that 10% default is usually far too low. The ISO
        endorsement HO 04 51 allows tenants to increase this limit, but most tenants do not know
        it exists until after the loss.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The landlord&rsquo;s DP-3 generally does <em>not</em> cover tenant-installed improvements
        unless the landlord has specifically added coverage for them (which is rare). From the
        landlord&rsquo;s insurer&rsquo;s perspective, those improvements belong to the tenant.
      </p>

      <CalloutBox variant="tip" title="Tenants: Document Your Improvements">
        <p>
          If you have installed flooring, fixtures, shelving, or any other improvements in your
          rental, photograph them, keep receipts, and check whether your HO-4 improvements limit
          is adequate. If you have invested more than 10% of your Coverage C limit, contact your
          agent about increasing the coverage.
        </p>
      </CalloutBox>

      {/* ───────── FRV and ALE Together ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Fair Rental Value and ALE: Both Active on the Same Loss
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a covered loss makes a rental unit uninhabitable, two different loss-of-use coverages
        can be triggered at the same time:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>The landlord&rsquo;s Fair Rental Value (FRV)</strong> reimburses the landlord
          for the rental income lost while the property cannot be rented. The benefit is based on
          the fair market rental value of the unit, minus any expenses the landlord no longer
          incurs (such as utilities the landlord normally provides).
        </li>
        <li>
          <strong>The tenant&rsquo;s Additional Living Expenses (ALE)</strong> covers the
          tenant&rsquo;s increased costs of maintaining a normal standard of living while
          displaced &mdash; temporary housing, increased food costs, storage fees, longer
          commutes, and other expenses above what the tenant would normally spend.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        These coverages do not conflict with each other. The landlord is being compensated for
        lost income. The tenant is being compensated for increased expenses. They address
        different financial harms caused by the same event, and both are legitimately payable.
      </p>

      {/* ───────── Subrogation ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Subrogation: When the Landlord&rsquo;s Insurer Comes After the Tenant
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        One of the most unpleasant surprises in landlord-tenant claims is{' '}
        <Link href="/resources/subrogation" className="text-[#2E74B5] hover:underline">
          subrogation
        </Link>
        . After paying the landlord&rsquo;s claim for building damage, the landlord&rsquo;s
        insurer may turn around and sue the tenant to recover what it paid &mdash; if the
        tenant&rsquo;s negligence caused the loss.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Sutton Doctrine and Implied Co-Insured Status
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some states follow the <strong>Sutton doctrine</strong> (from the Oklahoma case{' '}
        <em>Sutton v. Jondahl</em>), which holds that a tenant who contributes to the
        landlord&rsquo;s insurance premiums through rent is an &ldquo;implied co-insured&rdquo;
        under the landlord&rsquo;s policy. Under this doctrine, the landlord&rsquo;s insurer
        cannot subrogate against the tenant because you cannot subrogate against your own insured.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        California takes a <strong>case-by-case approach</strong>. Courts look at the specific
        language of the lease to determine whether the parties intended the tenant to be
        responsible for negligent damage. If the lease is silent about insurance and makes the
        tenant responsible for property damage, California courts may find that the Sutton doctrine
        does not apply &mdash; and the landlord&rsquo;s insurer is free to subrogate against
        the tenant.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Waiver of Subrogation Clauses
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A <strong>waiver of subrogation</strong> clause in the lease explicitly prevents the
        landlord&rsquo;s insurer from pursuing the tenant (and vice versa) for losses covered by
        insurance. California courts have consistently enforced these waivers when they are
        properly included in the lease agreement. Commercial leases routinely include them;
        residential leases often do not.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you are a tenant and your lease does <em>not</em> contain a waiver of subrogation,
        you are potentially exposed. Your cooking fire that damages the kitchen could result in the
        landlord&rsquo;s insurer paying the landlord&rsquo;s claim and then filing a lawsuit
        against you personally to recover its costs. If you have renters insurance, your HO-4
        liability coverage would defend and pay that claim. If you do not have renters insurance,
        you are on your own.
      </p>

      <CalloutBox variant="warning" title="Tenants Without Renters Insurance Are Exposed">
        <p>
          If the landlord&rsquo;s insurer subrogates against an uninsured tenant, the tenant faces
          a direct lawsuit with no insurance company to defend them. A basic renters policy
          typically costs $15 to $30 per month and includes liability coverage that would handle
          exactly this situation.
        </p>
      </CalloutBox>

      {/* ───────── The Lease Matters ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Lease Matters More Than You Think
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The lease is not just a rental agreement &mdash; it is the document that determines how
        insurance obligations and risks are allocated between landlord and tenant. Several lease
        provisions directly affect how insurance claims play out.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Insurance requirements.</strong> Many leases require the tenant to carry renters
          insurance with a minimum coverage amount and to name the landlord as an
          &ldquo;interested party&rdquo; or &ldquo;additional insured.&rdquo; This protects the
          landlord because the tenant&rsquo;s liability coverage can respond to subrogation
          claims, and the landlord receives notice if the tenant cancels the policy.
        </li>
        <li>
          <strong>Waiver of subrogation.</strong> This clause prevents either
          party&rsquo;s insurer from suing the other party for covered losses. Without it,
          subrogation is on the table.
        </li>
        <li>
          <strong>Hold-harmless / indemnification clauses.</strong> These provisions may require
          the tenant to indemnify the landlord for damage caused by the tenant&rsquo;s negligence.
          While this does not change how insurance works, it creates a contractual obligation that
          can be enforced independently of the insurance claim.
        </li>
        <li>
          <strong>Responsibility for repairs.</strong> Some leases make the tenant responsible for
          certain types of damage. This can affect whether the landlord&rsquo;s insurer views the
          tenant as liable and pursues subrogation.
        </li>
      </ul>

      <CalloutBox variant="tip" title="Review the Lease Before Filing">
        <p>
          If you are a landlord or tenant involved in a property damage claim, read the lease
          carefully before filing. The insurance requirements, subrogation waivers, and
          hold-harmless provisions will directly affect how both claims are handled.
        </p>
      </CalloutBox>

      {/* ───────── Practical Problems ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Practical Problems: Two Claims, Two Adjusters, Two Timelines
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When both the landlord and tenant file claims on the same loss, the practical challenges
        multiply. Each party is dealing with a different insurance company, a different adjuster,
        and a different claims process &mdash; but both claims arise from the same event and
        involve the same property.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Access and scheduling.</strong> The landlord&rsquo;s adjuster needs to inspect
          the building damage. The tenant&rsquo;s adjuster needs to inspect the contents. Both
          need access to the same unit, but they are on different schedules. If the tenant has
          already moved out, coordinating access becomes even harder.
        </li>
        <li>
          <strong>Conflicting timelines.</strong> The landlord&rsquo;s structural claim may take
          months to resolve, especially if there are{' '}
          <Link href="/resources/coverage-disputes" className="text-[#2E74B5] hover:underline">
            coverage disputes
          </Link>
          . The tenant&rsquo;s contents claim may be simpler and settle faster &mdash; but the
          tenant cannot move back in until the building is repaired, so ALE continues.
        </li>
        <li>
          <strong>Blame-shifting.</strong> The landlord&rsquo;s insurer may blame the tenant for
          causing the loss (to justify subrogation). The tenant&rsquo;s insurer may argue the
          landlord&rsquo;s negligent maintenance caused the damage (to avoid paying the
          tenant&rsquo;s claim under a maintenance exclusion). Each insurer has an incentive to
          point the finger at the other party.
        </li>
        <li>
          <strong>Repair delays affect everyone.</strong> If the landlord&rsquo;s claim is delayed
          or disputed, repairs do not start. The tenant remains displaced, and ALE expenses
          continue to accrue. The landlord&rsquo;s FRV coverage is also being consumed. A dispute
          on one claim creates cascading consequences for both parties.
        </li>
        <li>
          <strong>Documentation overlap.</strong> Both adjusters need the same photos, reports,
          and cause-of-loss information. Providing every insurer with the same packet of
          photographs, damage estimates, and expert reports helps prevent adjusters from playing
          pass-the-buck and keeps both claims moving forward.
        </li>
      </ul>

      <CalloutBox variant="tip" title="Coordinate From the Start">
        <p>
          If you are a landlord or tenant in a dual-claim situation, share claim numbers,
          adjuster contact information, and key documents with the other party early. Track
          deadlines for both claims. A{' '}
          <Link href="/resources/policyholder-rights" className="text-[#2E74B5] hover:underline">
            Public Adjuster
          </Link>{' '}
          can help coordinate both sides and ensure that neither claim falls through the cracks.
        </p>
      </CalloutBox>

      {/* ───────── State Differences ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        State-by-State Differences
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Landlord-tenant insurance claims do not work the same everywhere. Several areas of law
        vary significantly from state to state:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Subrogation against tenants.</strong> States are divided on whether a
          landlord&rsquo;s insurer can subrogate against a negligent tenant. Some states follow
          the Sutton doctrine and treat the tenant as an implied co-insured, barring subrogation.
          Others, including California in many circumstances, allow subrogation unless the lease
          contains a waiver.
        </li>
        <li>
          <strong>Renters insurance requirements.</strong> Some states allow landlords to require
          renters insurance as a condition of the lease. Others limit or regulate this
          requirement. In states where landlords can mandate it, compliance rates are higher and
          the coverage gap is smaller.
        </li>
        <li>
          <strong>
            <Link href="/resources/vacancy-unoccupancy" className="text-[#2E74B5] hover:underline">
              Vacancy and unoccupancy provisions
            </Link>
            .
          </strong>{' '}
          If a tenant moves out and the unit sits empty during a dispute or between tenants, the
          landlord&rsquo;s DP-3 may impose vacancy restrictions that limit or exclude coverage
          after 30 or 60 days of vacancy. This is a critical issue for landlords with damaged
          units that take months to repair.
        </li>
        <li>
          <strong>Fair claims regulations.</strong> California&rsquo;s Fair Claims Settlement
          Practices Regulations (California Code of Regulations, Title 10, &sect;2695.1 et seq.)
          apply to both the landlord&rsquo;s and tenant&rsquo;s claims. Insurers must acknowledge
          claims promptly, investigate thoroughly, and pay undisputed amounts without delay &mdash;
          regardless of whether the policyholder is a landlord or a tenant.
        </li>
      </ul>

      {/* ───────── Practical Checklist ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Practical Checklist for Landlords and Tenants
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        For Landlords
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Review your{' '}
          <Link href="/resources/declarations-page" className="text-[#2E74B5] hover:underline">
            declarations page
          </Link>{' '}
          to confirm you have a DP-3 (not a DP-1), and that theft and liability endorsements are
          included.
        </li>
        <li>
          Require renters insurance in your lease. Require the tenant to name you as an interested
          party so you receive notice if the policy is canceled.
        </li>
        <li>
          Include a waiver of subrogation clause if you want to prevent your insurer from suing
          your tenant (and potentially poisoning the landlord-tenant relationship).
        </li>
        <li>
          Inventory and photograph all landlord-owned items in the unit &mdash; appliances,
          fixtures, provided furnishings &mdash; so they are documented for your claim.
        </li>
        <li>
          Understand your{' '}
          <Link href="/resources/vacancy-unoccupancy" className="text-[#2E74B5] hover:underline">
            vacancy clause
          </Link>
          . If the unit will be empty during repairs, know the time limit and plan accordingly.
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        For Tenants
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Get renters insurance. It is inexpensive and protects you against personal property
          loss, liability, and ALE &mdash; and it defends you if the landlord&rsquo;s insurer
          tries to subrogate against you.
        </li>
        <li>
          Check whether your lease has a waiver of subrogation clause. If it does not, your
          landlord&rsquo;s insurer can potentially sue you for damage you caused.
        </li>
        <li>
          If you have made improvements to the unit (flooring, fixtures, built-in shelving),
          verify that your HO-4 improvements coverage limit is adequate. The default 10% of
          Coverage C is often too low.
        </li>
        <li>
          Document everything you own. A home inventory with photos and receipts makes a contents
          claim dramatically easier to process and harder for the insurer to lowball.
        </li>
        <li>
          If you are displaced, keep detailed records of all additional expenses for your ALE
          claim.
        </li>
      </ul>

      {/* ───────── CTA ───────── */}
      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Dealing with a Landlord or Tenant Insurance Claim?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          Whether you are a landlord trying to recover building damage or a tenant fighting for
          your contents and living expenses, a licensed Public Adjuster can help you navigate the
          process, coordinate with both insurers, and make sure nothing falls through the cracks.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Request a Free Claim Review &rarr;
        </Link>
      </div>

      <CalloutBox variant="legal" title="Important Notice">
        <p>
          This article is provided for general educational purposes only and does not constitute
          legal advice. Insurance policies, lease agreements, and state laws vary. Consult a
          licensed insurance professional or attorney for advice specific to your situation.
        </p>
      </CalloutBox>
      <p className="text-sm text-gray-500 mt-4 italic">
        Written by Leland Coontz III, Licensed Public Adjuster, CA License #2B53445.
      </p>
    </>
  )
}
