import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'The Commercial Vacancy Clause: How Empty Space Can Gut Your Property Coverage',
  description:
    'Commercial vacancy clauses impose severe coverage penalties when buildings fall below 31% occupancy for 60+ days. Learn the rules, exceptions, and how to protect your claim.',
  summary:
    'Commercial property coverage is sharply cut when a building falls below about 31% occupancy for 60 days or more, often barring vandalism, water, and glass losses. Know the vacancy rules and exceptions to protect coverage on empty space.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you own commercial property, there is a clause buried in your insurance policy that
        can eliminate coverage for some of your most serious risks &mdash; and reduce payment
        on the rest &mdash; simply because your building doesn&rsquo;t have enough tenants.
        It&rsquo;s called the <strong>vacancy clause</strong>, and it operates with a mechanical
        cruelty that catches commercial property owners off guard at exactly the moment they
        need their insurance the most.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The commercial vacancy clause is substantially more complex than its{' '}
        <Link href="/resources/vacancy-unoccupancy" className="text-blue-700 underline hover:text-blue-900">
          residential counterpart
        </Link>. Where homeowner policies draw a relatively simple line between &ldquo;vacant&rdquo;
        and &ldquo;unoccupied,&rdquo; commercial policies impose a precise mathematical threshold
        based on square footage utilization. Fall below that threshold for more than 60 consecutive
        days, and your policy transforms into something far less protective than what you thought
        you purchased.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This article walks through the commercial vacancy clause in detail &mdash; the occupancy
        threshold, the two-tier penalty system, the complications that arise in multi-tenant
        buildings, the construction exception and its limits, and the endorsements available to
        mitigate the risk. If you own commercial property with any vacancy exposure, this is
        information you cannot afford to learn after a loss.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The 31% Threshold: How Commercial Vacancy Is Defined
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under the standard ISO Commercial Property (CP) forms used by the vast majority of
        commercial insurers, a building is considered <strong>vacant</strong> unless at least
        31% of its total square footage meets one of two conditions:
      </p>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Rented to a lessee or sublessee</strong> who is actively conducting
          customary operations in the space; or
        </li>
        <li>
          <strong>Used by the building owner</strong> to conduct customary operations.
        </li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        Two critical details in this definition trip up property owners regularly:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Total square footage means total.</strong> The 31% threshold is calculated
          against the entire building &mdash; including common areas, hallways, lobbies,
          restrooms, mechanical rooms, and any other space that is part of the structure. It
          is not calculated against &ldquo;rentable&rdquo; or &ldquo;usable&rdquo; square footage
          as a commercial real estate broker might define it. This means that a building with
          large common areas has a structurally harder time meeting the threshold.
        </li>
        <li>
          <strong>Having a lease is not enough.</strong> Both conditions require that someone
          is actually <em>conducting customary operations</em> in the space. A signed lease
          with a tenant who has not yet moved in, a tenant who has ceased operations but
          hasn&rsquo;t formally surrendered the space, or a tenant using the space only for
          dead storage &mdash; none of these satisfy the requirement. The space must be
          actively used for the kind of business it was designed to house.
        </li>
      </ul>

      <CalloutBox variant="important" title="The Math Matters">
        <p>
          Consider a 20,000 square foot commercial building. To avoid the vacancy designation,
          at least 6,200 square feet (31%) must be rented to tenants actively conducting
          customary operations &mdash; or used by the owner for the same purpose. If you have
          a single tenant occupying a 5,000 square foot suite, your building is only 25%
          occupied. It is vacant under the policy, even though a functioning business is
          operating inside it every day.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The 60-Day Trigger: When the Penalties Activate
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The vacancy clause does not take effect the instant a building falls below 31% occupancy.
        The building must have been vacant for more than <strong>60 consecutive days</strong> before
        the date of loss. This 60-day window functions as a grace period &mdash; but it is a grace
        period that can expire without the property owner ever realizing the clock was running.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Importantly, the 60 days must be <strong>consecutive</strong>. If a tenant moves out and a
        new tenant moves in and begins operations on day 55, the clock resets. But if the new
        tenant signs a lease on day 55 and doesn&rsquo;t begin actual operations until day 65,
        the building was still vacant for more than 60 consecutive days &mdash; and the penalties
        apply to any loss occurring after day 60.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Once the 60-day threshold is crossed, the policy imposes a <strong>two-tier penalty
        system</strong> that distinguishes between perils that are completely excluded and perils
        that remain covered but at a reduced payment.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Tier One: Perils Completely Excluded After 60 Days of Vacancy
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The following causes of loss are <strong>entirely excluded</strong> once a commercial
        building has been vacant for more than 60 consecutive days. The insurer owes nothing
        for these losses &mdash; zero:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Vandalism</strong> &mdash; including graffiti, intentional destruction, and
          malicious mischief
        </li>
        <li>
          <strong>Sprinkler leakage</strong> &mdash; unless you have protected the system
          against freezing (which itself requires ongoing maintenance in a vacant building)
        </li>
        <li>
          <strong>Building glass breakage</strong> &mdash; broken windows, shattered storefronts,
          damaged skylights
        </li>
        <li>
          <strong>Water damage</strong> &mdash; burst pipes, plumbing failures, appliance leaks,
          and other water-related losses
        </li>
        <li>
          <strong>Theft</strong> &mdash; including copper wire theft, fixture theft, and
          stripping of building components
        </li>
        <li>
          <strong>Attempted theft</strong> &mdash; even unsuccessful break-in attempts that
          cause damage
        </li>
      </ul>

      <CalloutBox variant="warning" title="These Are the Most Common Losses at Vacant Buildings">
        <p>
          Look at that list carefully. Vandalism, water damage, theft, and sprinkler leakage are
          precisely the perils that vacant buildings face most frequently. The vacancy clause does
          not just exclude obscure risks &mdash; it excludes the risks that are most likely to
          actually occur. A vacant commercial building is a magnet for copper thieves, vandals,
          and pipe bursts &mdash; and the policy covers none of it once the 60-day clock
          has run.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Tier Two: The 15% Payment Reduction on Everything Else
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        For all other covered causes of loss &mdash; fire, windstorm, hail, explosion, lightning,
        riot, aircraft impact, vehicle impact, volcanic action, sinkhole, and similar perils &mdash;
        the insurer does not exclude coverage entirely. Instead, it imposes a <strong>15%
        reduction</strong> in the amount otherwise payable.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This may sound modest, but on a large commercial loss it is devastating. If a fire causes
        $500,000 in damage to a vacant commercial building, the insurer reduces payment by $75,000.
        On a $2 million loss, the reduction is $300,000. This is money that simply disappears from
        the claim &mdash; the property owner bears the 15% reduction in addition to the deductible
        and any coinsurance penalty that may also apply.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Note that the 15% reduction can stack with other policy penalties. If a building is both
        vacant (triggering the 15% vacancy reduction) and underinsured (triggering a{' '}
        <Link href="/resources/coinsurance-penalty" className="text-blue-700 underline hover:text-blue-900">
          coinsurance penalty
        </Link>), the combined reductions can consume a staggering percentage of the claim.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Strip Malls and Multi-Tenant Buildings: Where It Gets Complicated
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The vacancy clause creates particularly complex problems for owners of multi-tenant
        commercial properties &mdash; strip malls, small shopping centers, office buildings with
        multiple suites, and mixed-use properties. The 31% threshold applies to the{' '}
        <em>entire building</em>, not to individual units. This means a building can have active,
        thriving businesses operating inside it and still be considered vacant under the policy.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        A Worked Example: The Strip Mall
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Imagine you own a strip mall with six commercial units and a total square footage of
        10,000 square feet (including common areas). The occupancy picture looks like this:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Unit 1 (2,000 sq ft): Occupied &mdash; an operating hair salon</li>
        <li>Unit 2 (1,800 sq ft): Vacant</li>
        <li>Unit 3 (1,500 sq ft): Vacant</li>
        <li>Unit 4 (1,700 sq ft): Leased but tenant has not yet opened for business</li>
        <li>Unit 5 (1,500 sq ft): Vacant</li>
        <li>Unit 6 (1,500 sq ft): Vacant</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Total occupied space conducting customary operations: 2,000 sq ft (Unit 1 only &mdash; Unit
        4 has a lease but no active operations). That is 20% of the building. The building is
        <strong> vacant</strong> under the policy, even though a hair salon with customers is
        operating there every business day.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If someone vandalizes the building 65 days after it dropped below 31% occupancy,
        the building owner&rsquo;s policy pays nothing for the vandalism damage. If a pipe
        bursts in one of the vacant units and water migrates through the walls into the occupied
        salon, the building owner&rsquo;s policy pays nothing for the water damage &mdash; even
        to the portions of the building where an active business is operating.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Building Owner vs. Tenant: Two Different Standards
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The vacancy analysis works differently depending on whose policy is at issue:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Building owner&rsquo;s policy:</strong> The 31% building-wide threshold
          applies. The entire building&rsquo;s occupancy rate determines vacancy status,
          regardless of whether individual units are actively operating businesses. This is
          the standard described throughout this article.
        </li>
        <li>
          <strong>Tenant&rsquo;s policy:</strong> The vacancy analysis focuses on the individual
          tenant&rsquo;s unit. Under a tenant&rsquo;s commercial property policy, the unit is
          considered vacant when it does not contain enough{' '}
          <strong>business personal property</strong> to conduct customary operations. A
          tenant&rsquo;s unit can be vacant even if the rest of the building is fully occupied.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        This creates a situation where a building owner and a tenant can have different vacancy
        statuses under their respective policies for the same building at the same time. The
        tenant&rsquo;s unit might be fully operational (not vacant under the tenant&rsquo;s
        policy), while the building itself is below 31% occupancy (vacant under the owner&rsquo;s
        policy). If a fire occurs, the tenant&rsquo;s claim proceeds normally under the
        tenant&rsquo;s policy, but the building owner faces a 15% reduction on the building
        damage claim.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a deeper discussion of the interplay between{' '}
        <Link href="/resources/landlord-vs-tenant-claims" className="text-blue-700 underline hover:text-blue-900">
          landlord and tenant insurance claims
        </Link>, see our dedicated article on that topic.
      </p>

      <CalloutBox variant="tip" title="Why Tenants Should Care Too">
        <p>
          Even though the vacancy clause on the building owner&rsquo;s policy doesn&rsquo;t
          directly affect the tenant&rsquo;s coverage, tenants are not insulated from its
          consequences. If the building owner&rsquo;s policy excludes sprinkler leakage and
          vandalism due to vacancy, building-level damage may go unrepaired. A sprinkler
          system failure that floods common areas, a vandalized roof that allows water
          intrusion, or theft of building mechanical systems can all affect tenants &mdash;
          and if the building owner cannot recover insurance proceeds to make those repairs,
          the tenants suffer. Tenants in partially vacant buildings should understand their
          landlord&rsquo;s vacancy exposure and factor it into their lease negotiations.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Construction and Renovation Exception
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The standard ISO commercial property form provides one significant exception to the
        vacancy clause: <strong>buildings under construction or renovation are not considered
        vacant</strong>. This exception exists because construction projects inherently involve
        periods where a building is empty of tenants and normal operations, and the drafters
        recognized that subjecting construction projects to vacancy penalties would be
        commercially unreasonable.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        However, courts have been far from consistent about what qualifies as
        &ldquo;renovation&rdquo; sufficient to invoke the exception. The case law reveals a
        spectrum of judicial interpretation that property owners must understand.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        What Courts Have Accepted as Renovation
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        In <strong>Farbman Group v. Travelers Indemnity Co.</strong>, the court held that
        demolishing an enclosed walkway connecting two buildings constituted
        &ldquo;renovation&rdquo; sufficient to avoid the vacancy exclusion. The court reasoned
        that active demolition work was part of a larger plan to repurpose the property, and
        that physical alteration of the structure satisfied the renovation exception.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        What Courts Have Rejected as Renovation
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Suder-Benore Co. v. Motorists Mutual Insurance Co.</strong> &mdash; Simply
          reactivating a sprinkler system in an otherwise idle building did not constitute
          renovation. The court distinguished between routine maintenance or system activation
          and the kind of substantive physical work that &ldquo;renovation&rdquo; implies.
        </li>
        <li>
          <strong>Martin Belich v. Westfield Insurance</strong> &mdash; Planning or preparing
          to renovate is insufficient. The insured had concrete plans to renovate the property
          and had taken preliminary steps, but actual physical renovation work had not yet
          commenced at the time of loss. The court held that the exception requires renovation
          to be <em>underway</em>, not merely intended.
        </li>
      </ul>

      <CalloutBox variant="legal" title="The Renovation Exception Requires Active Work">
        <p>
          The lesson from the case law is clear: to invoke the construction or renovation
          exception, <strong>actual physical work must be underway</strong> at the time of loss.
          Having architectural plans, signed contractor agreements, building permits, or even
          materials staged on site is likely insufficient if no one has broken ground or picked
          up a hammer. The exception protects buildings that are empty because they are being
          physically transformed &mdash; not buildings that are empty while their owners think
          about transforming them.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Arson Question: Is It Vandalism or Fire?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Vacant commercial buildings are disproportionately targeted by arsonists &mdash; squatters,
        vandals, disgruntled individuals, and others who view unoccupied structures as easy
        targets. This creates a critical coverage question under the vacancy clause: is arson
        classified as <strong>vandalism</strong> (completely excluded after 60 days of vacancy)
        or as <strong>fire</strong> (subject only to the 15% payment reduction)?
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The answer depends on your jurisdiction, and courts are genuinely split on the issue.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Abudayya v. Country Mutual Insurance Co. (Illinois)</strong> &mdash; The court
          found that the term &ldquo;vandalism&rdquo; in the vacancy clause was ambiguous as
          applied to arson. Applying the standard rule of construction that ambiguities in
          insurance policies are resolved in favor of the insured, the court treated the arson
          fire as &ldquo;fire&rdquo; rather than &ldquo;vandalism,&rdquo; meaning the insured
          was subject only to the 15% reduction rather than a complete exclusion.
        </li>
        <li>
          <strong>Botee v. Southern Fidelity Insurance Co. (Florida)</strong> &mdash; The court
          reached the opposite conclusion, holding that arson falls within the plain meaning of
          &ldquo;vandalism&rdquo; &mdash; the intentional destruction of property. Under this
          reasoning, an arson fire at a vacant building is excluded entirely, and the insured
          recovers nothing.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The stakes could hardly be higher. A $1 million arson fire at a vacant commercial
        building is either a total exclusion (the insured gets zero) or a covered fire loss
        with a 15% reduction (the insured recovers $850,000 before the deductible). This
        single classification question can be worth the entire value of the claim. If your
        vacant building suffers a fire of suspicious or incendiary origin, the
        vandalism-versus-fire distinction must be addressed head-on with case law from your
        jurisdiction.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For more on how insurers handle{' '}
        <Link href="/resources/coverage-disputes" className="text-blue-700 underline hover:text-blue-900">
          coverage disputes
        </Link>{' '}
        involving ambiguous policy language, see our coverage disputes guide.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Seasonal Businesses: The Off-Season Trap
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Seasonal commercial operations face a particular vulnerability under the vacancy clause
        that is both predictable and easily overlooked. Consider the following businesses:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>A beachside restaurant that closes from November through March</li>
        <li>A ski lodge gift shop that operates only during winter months</li>
        <li>A summer camp with buildings that sit empty from September through May</li>
        <li>A holiday-themed retail store that operates October through December</li>
        <li>A saltwater taffy shop in a shore town that closes after Labor Day</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Each of these businesses will be vacant for more than 60 consecutive days during their
        off-season. The fact that the owner fully intends to reopen is irrelevant to the vacancy
        analysis. A saltwater taffy shop that closes in October, retaining only its fixtures and
        equipment but removing perishable inventory, is <strong>vacant</strong> under the policy
        &mdash; even though it reopens every May like clockwork. If a pipe bursts in January or
        vandals break in during February, the vacancy clause exclusions apply in full.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The cruelty of this outcome is that seasonal businesses know they will be vacant every
        year. The risk is entirely foreseeable, which means the coverage gap is entirely
        preventable &mdash; if the business owner secures the right endorsements before the
        off-season begins.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Endorsements and Workarounds
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The standard vacancy clause is not the last word. Several endorsements and alternative
        coverage structures exist to modify or eliminate the vacancy penalties:
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Vacancy Permit &mdash; CP 04 50
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Vacancy Permit endorsement suspends the vacancy loss condition for a specified
        period &mdash; typically 60, 90, 120, or 180 days beyond the standard 60-day grace
        period. With this endorsement, the building can be vacant for the endorsed period
        without triggering the exclusions or the 15% reduction.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Important caveat: some versions of the Vacancy Permit still exclude vandalism and
        sprinkler leakage even during the permitted vacancy period. Read the endorsement
        language carefully &mdash; a Vacancy Permit that excludes vandalism and sprinkler
        leakage provides far less protection than one that suspends all vacancy restrictions.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Vacancy Changes &mdash; CP 04 60
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Vacancy Changes endorsement replaces the standard 31% occupancy threshold with a
        lower negotiated percentage. If you can negotiate a 15% or 20% threshold, a building
        with even modest occupancy avoids the vacancy designation entirely. This endorsement
        is particularly valuable for multi-tenant properties where maintaining 31% occupancy
        is not always feasible due to market conditions.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Specialized Vacant Building Policies
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a building is going to be vacant for an extended period &mdash; during a prolonged
        renovation, while marketing for new tenants, or while awaiting sale &mdash; a standard
        commercial property policy with vacancy endorsements may not be sufficient. In these
        situations, specialized vacant building policies are available through{' '}
        <strong>nonadmitted (surplus lines) markets</strong>. These policies are designed
        specifically for unoccupied or vacant commercial properties and provide coverage without
        the standard vacancy restrictions.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Surplus lines coverage typically costs more and may come with higher deductibles, limited
        perils, and inspection requirements. But it provides actual coverage &mdash; which is
        infinitely more valuable than a standard policy that excludes the very losses most likely
        to occur.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Impact on Loss of Rents Coverage
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Commercial property owners who carry{' '}
        <Link href="/resources/commercial-loss-of-rents" className="text-blue-700 underline hover:text-blue-900">
          loss of rents coverage
        </Link>{' '}
        face an additional complication when the vacancy clause is in play. If a covered loss
        damages a building that is already below 31% occupancy, the insurer will argue that
        the building was not generating the rental income it claims to have lost. A building
        that was 80% vacant before a fire has limited grounds to claim lost rental income
        for the vacant units.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The 15% vacancy reduction also applies to the loss of rents payment, further reducing
        the building owner&rsquo;s recovery. This creates a compounding financial hit: the
        building suffers physical damage (reduced by 15%), the owner loses rental income from
        remaining tenants (also reduced by 15%), and the insurer excludes certain perils
        entirely from both the building damage and loss of rents calculations.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        ISO Policy Language: What the Clause Actually Says
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The standard ISO vacancy condition language reads substantially as follows:
      </p>
      <blockquote className="border-l-4 border-[#C9A84C] bg-amber-50 p-4 my-6 text-gray-700 text-sm leading-relaxed italic">
        &ldquo;A building is vacant unless at least 31% of its total square footage is: (i)
        Rented to a lessee or sub-lessee and used by the lessee or sub-lessee to conduct its
        customary operations; and/or (ii) Used by the building owner to conduct customary
        operations.&rdquo;
      </blockquote>
      <blockquote className="border-l-4 border-[#C9A84C] bg-amber-50 p-4 my-6 text-gray-700 text-sm leading-relaxed italic">
        &ldquo;If the building where loss or damage occurs has been vacant for more than 60
        consecutive days before that loss or damage, we will: (1) Not pay for any loss or damage
        caused by any of the following even if they are Covered Causes of Loss: (a) Vandalism;
        (b) Sprinkler leakage, unless you have protected the system against freezing; (c) Building
        glass breakage; (d) Water damage; (e) Theft; or (f) Attempted theft. (2) Reduce the amount
        we would otherwise pay for the loss or damage by 15%.&rdquo;
      </blockquote>
      <p className="text-gray-700 leading-relaxed mb-4">
        Note the precision of this language. There is no discretion, no judgment call for the
        adjuster. If the building is below 31% and has been for more than 60 days, the penalties
        apply mechanically. The only questions are factual: what is the total square footage,
        what percentage is actively occupied, and how long has it been below the threshold?
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Practical Guidance for Commercial Property Owners
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The vacancy clause is a risk that can be managed &mdash; but only if you manage it
        proactively. Once a loss has occurred at a vacant building, your options narrow
        dramatically. The following steps should be part of every commercial property
        owner&rsquo;s risk management practice:
      </p>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Monitor your occupancy rate continuously.</strong> Know your building&rsquo;s
          total square footage (not just rentable space) and track occupied space as a percentage
          of the total. When occupancy drops below 40%, you are approaching dangerous territory.
          Below 31%, the 60-day clock is running.
        </li>
        <li>
          <strong>Notify your insurer immediately when occupancy changes.</strong> Failing to
          disclose a significant decrease in occupancy could give the insurer additional grounds
          to dispute coverage. Proactive disclosure also opens the conversation about
          endorsements before a loss occurs.
        </li>
        <li>
          <strong>Secure endorsements before the 60-day clock expires.</strong> If vacancy is
          anticipated &mdash; a major tenant is leaving, a seasonal closure is approaching, or
          occupancy is trending downward &mdash; explore the Vacancy Permit (CP 04 50) or
          Vacancy Changes (CP 04 60) endorsements immediately. These endorsements cannot be
          added retroactively after a loss.
        </li>
        <li>
          <strong>If renovation is planned, begin physical work promptly.</strong> Do not let a
          building sit vacant for months while you finalize renovation plans. If you intend to
          rely on the construction/renovation exception, get crews on site and make sure actual
          physical work is underway &mdash; not just planning, permitting, or material
          procurement.
        </li>
        <li>
          <strong>Document everything.</strong> Maintain contemporaneous records of occupancy
          rates, tenant move-in and move-out dates, renovation activities, and communications
          with your insurer about vacancy status. In a{' '}
          <Link href="/resources/coverage-disputes" className="text-blue-700 underline hover:text-blue-900">
            coverage dispute
          </Link>, the insurer will scrutinize the timeline. Your documentation should be
          detailed enough to establish exactly when occupancy dropped, when it recovered, and
          what steps you took in between.
        </li>
        <li>
          <strong>For multi-tenant buildings, actively market vacant units.</strong> The clock is
          always running. Every day a unit sits vacant without active leasing efforts is a day
          closer to the 60-day threshold. Document your marketing efforts &mdash; listings,
          broker agreements, showing records &mdash; as evidence that vacancy was not voluntary
          or neglected.
        </li>
        <li>
          <strong>Consider specialized vacant building coverage</strong> when extended vacancy
          is unavoidable. A surplus lines vacant building policy may be more expensive, but it
          provides real coverage for the risks that vacant buildings actually face.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When the Insurer Raises the Vacancy Clause: Fighting Back
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your insurer has denied or reduced your claim based on the vacancy clause, the
        fight is not over. Several avenues of challenge exist:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Challenge the occupancy calculation.</strong> How is the insurer calculating
          total square footage? Are they including outdoor areas, parking structures, or
          detached buildings that should not be part of the calculation? Is the 31% threshold
          being measured correctly?
        </li>
        <li>
          <strong>Challenge the 60-day timeline.</strong> Can you establish that the building
          dropped below 31% less than 60 days before the loss? Were there brief periods of
          occupancy that reset the consecutive-day count?
        </li>
        <li>
          <strong>Invoke the renovation exception.</strong> If any physical renovation or
          construction work was underway at the time of loss &mdash; even if it was not the
          primary purpose of the building&rsquo;s vacancy &mdash; the exception may apply.
        </li>
        <li>
          <strong>Argue ambiguity in peril classification.</strong> If the loss involves arson,
          argue that it should be classified as &ldquo;fire&rdquo; (15% reduction) rather than
          &ldquo;vandalism&rdquo; (complete exclusion). In jurisdictions that have not ruled on
          this issue, the general rule that ambiguities are construed against the insurer
          supports the &ldquo;fire&rdquo; classification.
        </li>
        <li>
          <strong>Examine whether the clause was properly disclosed.</strong> In some
          jurisdictions, an insurer that fails to adequately call the policyholder&rsquo;s
          attention to unusual or particularly burdensome policy provisions may be estopped
          from enforcing them.
        </li>
        <li>
          <strong>Engage a{' '}
          <Link href="/resources/public-adjuster" className="text-blue-700 underline hover:text-blue-900">
            licensed Public Adjuster
          </Link>.</strong> Vacancy clause disputes involve complex factual and policy
          interpretation issues. A Public Adjuster experienced in commercial property claims
          can evaluate the insurer&rsquo;s vacancy determination, identify weaknesses in the
          insurer&rsquo;s position, and negotiate for maximum recovery.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Key Takeaways
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          A commercial building is vacant unless at least 31% of its <em>total</em> square
          footage is actively used for customary operations &mdash; having a signed lease
          is not enough.
        </li>
        <li>
          After 60 consecutive days of vacancy, vandalism, sprinkler leakage, glass breakage,
          water damage, theft, and attempted theft are completely excluded.
        </li>
        <li>
          All other covered perils &mdash; including fire &mdash; are subject to a 15%
          payment reduction that applies on top of the deductible and any coinsurance penalty.
        </li>
        <li>
          Multi-tenant buildings are measured as a whole, meaning a building with active
          tenants can still be &ldquo;vacant&rdquo; if occupied space is below 31%.
        </li>
        <li>
          The construction/renovation exception requires actual physical work to be underway
          &mdash; not just planned, permitted, or contracted.
        </li>
        <li>
          Seasonal businesses should secure Vacancy Permit endorsements before each off-season.
        </li>
        <li>
          The arson classification question (vandalism vs. fire) can determine whether a claim
          is worth nothing or hundreds of thousands of dollars.
        </li>
        <li>
          Endorsements like CP 04 50 and CP 04 60 can modify or suspend the vacancy
          penalties, but they must be arranged before a loss occurs.
        </li>
      </ul>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Is the Vacancy Clause Threatening Your Commercial Claim?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          Vacancy clause disputes in commercial property insurance involve high dollar amounts
          and complex factual questions about occupancy rates, renovation activity, and peril
          classification. If your insurer is denying or reducing your claim based on the
          vacancy clause, a licensed Public Adjuster can review the policy, challenge the
          insurer&rsquo;s occupancy calculations, and fight for the coverage you paid for.
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
          legal advice. The case law discussed reflects the holdings of courts in specific
          jurisdictions applying specific policy language and facts. Your policy language, state
          law, and factual circumstances may differ. Every claim involves unique considerations.
          If you believe a vacancy clause has been improperly applied to your commercial property
          claim, consult with a licensed Public Adjuster or an attorney who specializes in
          insurance coverage disputes.
        </p>
      </CalloutBox>
    </>
  )
}
