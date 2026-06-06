import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'ADU and Garage Conversion Insurance Coverage Gaps in California',
  description:
    'California is pushing ADU construction, but homeowner insurance has not caught up. Learn how HO-3 policies treat ADUs, why Coverage B limits are often grossly inadequate, and what to do before a loss exposes the gap.',
  summary:
    'California encourages ADUs, but standard HO-3 policies often treat them as \'other structures\' with a Coverage B limit far too small to rebuild. Confirm how your ADU is insured and raise the limit before a loss exposes the gap.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="Important Notice">
        <p>
          This article is provided for general educational purposes only and does not constitute
          legal advice. Insurance policies, regulations, and case law can vary significantly based
          on individual circumstances. Consult a licensed attorney for advice about your specific
          situation.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        California has spent the last decade aggressively encouraging homeowners to build accessory
        dwelling units. The legislature has passed bill after bill &mdash; AB 68, AB 881, SB 13,
        AB 1033, and more &mdash; streamlining permitting, reducing fees, eliminating parking
        requirements, and even allowing ADUs to be sold separately from the primary residence.
        Local governments that once blocked ADU construction have been forced to approve them. The
        result is tens of thousands of new livable units across the state.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        What the legislature has <em>not</em> done is address how these units interact with
        homeowner&rsquo;s insurance. The standard HO-3 policy &mdash; the form that covers most
        California homeowners &mdash; was designed for a single-family home with
        a detached garage, maybe a shed. It was not designed for a property with a second livable
        dwelling that has its own kitchen, bathroom, electrical panel, and tenant. The coverage
        gaps are real, they are significant, and most homeowners do not discover them until after
        a loss.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How the Standard HO-3 Treats ADUs
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under the standard ISO HO-3 policy form, coverage is divided into several categories.
        The two that matter most for ADU owners are <strong>Coverage A (Dwelling)</strong> and{' '}
        <strong>Coverage B (Other Structures)</strong>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Coverage A covers the dwelling on the &ldquo;residence premises&rdquo; &mdash; the main
        house. Coverage B covers &ldquo;other structures on the &lsquo;residence premises&rsquo;
        set apart from the dwelling by clear space or connected to the dwelling by only a fence,
        utility line, or similar connection.&rdquo; By default, Coverage B is set at{' '}
        <strong>10% of the Coverage A limit</strong>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        That 10% figure was designed to cover a detached garage, a garden shed, or a fence &mdash;
        simple structures with no plumbing, no HVAC, and no kitchen. A detached ADU is none of
        those things. It is a fully habitable dwelling unit. But under the standard HO-3,
        it is still classified as an &ldquo;other structure&rdquo; and subject to that 10% limit.
      </p>

      <CalloutBox variant="warning" title="The 10% Problem">
        <p>
          If your home is insured for $500,000 under Coverage A, your Coverage B limit is $50,000
          by default. A detached ADU with a kitchen, bathroom, HVAC system, and finished interior
          can easily cost $150,000&ndash;$300,000 to rebuild. That $50,000 limit covers a fraction
          of the actual replacement cost. Check your{' '}
          <Link href="/resources/declarations-page" className="text-blue-700 underline hover:text-blue-900">
            declarations page
          </Link>{' '}
          to see exactly what your Coverage B limit is.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Attached ADUs vs. Detached ADUs: Different Coverage Treatment
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The distinction between attached and detached ADUs matters enormously for insurance
        purposes. The HO-3 policy draws a clear line between Coverage A and Coverage B based on
        whether a structure is &ldquo;set apart from the dwelling by clear space.&rdquo;
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Attached ADUs
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        An ADU that shares a wall with the main house &mdash; such as a converted portion of
        the garage, a basement conversion, or an addition built onto the side of the house &mdash;
        is generally considered part of the <strong>dwelling</strong> under Coverage A. This is
        typically better from a coverage standpoint, because Coverage A limits are much higher
        than Coverage B. However, the homeowner needs to ensure that Coverage A is high enough
        to account for the added square footage, finishes, and systems. If you converted your
        garage into a 500-square-foot apartment and never updated your Coverage A limit, the
        dwelling is now underinsured.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Detached ADUs
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A freestanding ADU in the backyard &mdash; the most common type built under
        California&rsquo;s recent legislation &mdash; falls under Coverage B. This is where the
        10% limit becomes a serious problem. A detached ADU that cost $200,000 to build will
        not be adequately covered by a $50,000 Coverage B limit. The homeowner must either
        increase the Coverage B limit (if the carrier allows it) or schedule the ADU as a
        separate structure with its own coverage amount.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some carriers will increase Coverage B by endorsement. Others will not, especially if the
        ADU is rented to a third party, because that changes the risk profile of the property
        from a single-family owner-occupied residence to something more closely resembling a{' '}
        <Link href="/resources/landlord-vs-tenant-claims" className="text-blue-700 underline hover:text-blue-900">
          landlord-tenant arrangement
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Garage Conversions: The Permit Problem
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Garage conversions are one of the most common ADU types in California, and they raise a
        question that makes both homeowners and insurance adjusters uncomfortable: was the
        conversion done with proper permits?
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the garage was converted to a living space with full permits &mdash; meaning the
        electrical, plumbing, framing, and HVAC work were all inspected and approved by the
        local building department &mdash; the insurance treatment is relatively straightforward.
        The converted space is part of the dwelling (if attached) and should be reflected in
        Coverage A. The homeowner needs to make sure the policy limit accounts for the higher
        replacement cost of a habitable space versus an unfinished garage.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the conversion was done <em>without</em> permits &mdash; and in California, a very
        large number of garage conversions fall into this category &mdash; the coverage picture
        becomes more complicated. Many homeowners assume that an unpermitted conversion means no
        coverage. That is not necessarily true, but it is not simple either.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        California Insurance Code &sect; 533 and the Illegality Defense
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        California Insurance Code &sect; 533 states that &ldquo;an insurer is not liable for a loss
        caused by the willful act of the insured.&rdquo; Some carriers have tried to use this
        provision to deny claims on unpermitted structures, arguing that building without a permit
        is an illegal act and therefore excluded.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This argument is much weaker than carriers sometimes suggest. The illegality defense under
        &sect; 533 is narrow. California courts have generally held that &sect; 533 applies to
        intentional, willful acts that <em>cause</em> the loss &mdash; not to building code
        violations that merely exist at the time of loss. Building a garage conversion without a
        permit is a code violation, but the lack of a permit does not <em>cause</em> the fire, the
        water damage, or the windstorm that destroys the structure. The cause of loss and the
        permit status are separate issues. That said, unpermitted work can still create coverage
        complications, particularly around{' '}
        <Link href="/resources/code-upgrade-coverage" className="text-blue-700 underline hover:text-blue-900">
          code upgrade coverage
        </Link>{' '}
        and rebuild requirements.
      </p>

      <CalloutBox variant="tip" title="Unpermitted Does Not Automatically Mean Uninsured">
        <p>
          If you have an unpermitted garage conversion that suffers a covered loss, do not assume
          your claim is dead. The carrier must still evaluate the loss under the terms of the
          policy. The illegality defense under Insurance Code &sect; 533 is narrow and typically
          requires the illegal act to be the <em>cause</em> of the loss. Consult a{' '}
          <Link href="/resources/public-adjuster" className="text-blue-700 underline hover:text-blue-900">
            licensed Public Adjuster
          </Link>{' '}
          or attorney before accepting a denial based on permit status alone.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Coverage Gaps: What the Policy Was Not Designed For
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The fundamental problem with insuring an ADU under a standard HO-3 is that the policy
        was written for a single-family home. ADUs introduce components and exposures that the
        standard form does not adequately address:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Separate kitchen and bathroom.</strong> A detached ADU with a full kitchen
          and bathroom has plumbing, gas lines, and appliances that significantly increase
          both the replacement cost and the risk of water or fire damage. Coverage B was
          not designed to account for this.
        </li>
        <li>
          <strong>Independent HVAC system.</strong> Many ADUs have their own heating and
          cooling systems &mdash; mini-splits, wall heaters, or separate ducted systems.
          This adds to the replacement cost and introduces additional mechanical components
          that can fail or cause damage.
        </li>
        <li>
          <strong>Separate electrical panel.</strong> A properly built ADU has its own
          electrical sub-panel or even a separate service. The cost to replace electrical
          systems in a habitable unit is substantially higher than the cost to replace
          the wiring in a simple garage.
        </li>
        <li>
          <strong>Finished interior.</strong> Drywall, insulation, flooring, interior doors,
          trim, paint, lighting fixtures &mdash; these are costs that do not exist in an
          unfinished detached garage but are significant in an ADU.
        </li>
        <li>
          <strong>ADA/accessibility features.</strong> Some ADUs are built with accessibility
          features for elderly relatives or tenants with disabilities. These features add cost
          and may require specialized replacement.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        ALE and Fair Rental Value for ADUs
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a loss makes the main dwelling uninhabitable, the HO-3 policy provides{' '}
        <Link href="/resources/ale-frv" className="text-blue-700 underline hover:text-blue-900">
          Additional Living Expense (ALE) coverage
        </Link>{' '}
        under Coverage D. ALE pays the difference between the insured&rsquo;s normal living
        expenses and the increased cost of maintaining their standard of living while displaced.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        But what about the ADU? If the ADU is rented, the relevant coverage is{' '}
        <strong>Fair Rental Value (FRV)</strong>, which reimburses the landlord for lost rental
        income while the rental unit is uninhabitable. Here is where ADU owners often discover
        a gap: the standard HO-3 may provide FRV coverage for a portion of the dwelling that
        is rented &mdash; for example, a room within the main house &mdash; but the coverage
        for a <em>detached</em> structure rented to a third party may be limited or nonexistent
        without a specific endorsement.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your ADU generates $2,000 per month in rental income and it takes 12 months to
        rebuild after a fire, you are looking at $24,000 in lost rental income. If your policy
        does not include FRV coverage for the ADU &mdash; or if the FRV limit is inadequate &mdash;
        that $24,000 comes out of your pocket.
      </p>

      <CalloutBox variant="warning" title="Rental Income Is Not Automatically Covered">
        <p>
          If you rent your ADU, do not assume your homeowner&rsquo;s policy covers the lost
          rental income during repairs. Many HO-3 policies either exclude FRV for detached
          structures entirely or include it at a limit far below the actual rental income. Ask
          your carrier specifically about Fair Rental Value coverage for your ADU and get the
          answer in writing.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Tenant&rsquo;s Personal Property: Not Your Problem, but Your Headache
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If someone is living in your ADU &mdash; whether a family member or a paying tenant &mdash;
        their personal belongings are <em>not</em> covered by your homeowner&rsquo;s policy. The
        HO-3 covers the <em>named insured&rsquo;s</em> personal property under Coverage C, not the
        property of tenants.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The tenant needs their own{' '}
        <Link href="/resources/landlord-vs-tenant-claims" className="text-blue-700 underline hover:text-blue-900">
          renter&rsquo;s insurance policy (HO-4)
        </Link>{' '}
        to cover their personal belongings and their own liability. This is true regardless of
        whether the ADU is permitted or unpermitted, attached or detached, rented at market rate
        or occupied by a relative for free.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        As a practical matter, if a fire destroys your ADU and the tenant loses everything they
        own because they had no renter&rsquo;s insurance, it may technically not be your financial
        problem &mdash; but it will certainly be your emotional and relational problem. Requiring
        tenants to carry renter&rsquo;s insurance should be a non-negotiable term of any ADU
        lease.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Total Loss and the Ordinance or Law Problem
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a total loss destroys the main dwelling and the ADU, the rebuild process triggers a
        set of complications that partial losses do not. The homeowner must rebuild in compliance
        with <em>current</em> building codes and zoning ordinances &mdash; not the codes that
        were in effect when the original structures were built.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For ADUs, this can actually be beneficial in some cases. California&rsquo;s recent ADU
        legislation has made the rules <em>more</em> permissive. Current ordinances may allow a
        larger ADU than what was originally built, may permit ADUs in locations that were
        previously restricted, or may waive setback requirements that the original ADU had to
        comply with. However, the increased cost of building to current code &mdash; energy
        efficiency requirements, seismic standards, fire-resistant materials &mdash; will almost
        certainly exceed what the original ADU cost to build.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is where{' '}
        <Link href="/resources/code-upgrade-coverage" className="text-blue-700 underline hover:text-blue-900">
          ordinance or law coverage
        </Link>{' '}
        becomes critical. Standard HO-3 policies typically exclude the increased cost of
        rebuilding to comply with current codes. You need a separate endorsement &mdash; commonly
        called &ldquo;Ordinance or Law&rdquo; coverage &mdash; to cover this gap. For properties
        with ADUs, this endorsement is not optional.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Unpermitted ADUs and California&rsquo;s Amnesty Programs
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California has recognized that a large number of existing ADUs were built without permits.
        Several jurisdictions have created amnesty or legalization programs that allow homeowners
        to bring unpermitted ADUs into compliance, often with reduced fees and relaxed code
        requirements. SB 897 (2022) and AB 1033 (2023) further streamlined the process.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        How does permit legalization interact with insurance? In several important ways:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Disclosure to the carrier.</strong> If you legalize an unpermitted ADU, your
          carrier needs to know. The property now has a permitted, habitable secondary dwelling.
          Failing to disclose this change can be grounds for rescission or denial of a future claim
          based on material misrepresentation.
        </li>
        <li>
          <strong>Coverage adjustment.</strong> A legalized ADU should be reflected in your
          Coverage B limit (if detached) or Coverage A limit (if attached). The whole point of
          legalization is that the unit is now an officially recognized habitable structure, and
          the insurance should match.
        </li>
        <li>
          <strong>Rebuild after loss.</strong> If a legalized ADU is destroyed, the homeowner
          can rebuild it with a standard building permit. If an <em>unpermitted</em> ADU is
          destroyed, the homeowner may face obstacles: the building department may not allow
          reconstruction of a structure it never approved in the first place, or may require
          the new construction to meet standards the original never did. This can create a
          situation where the replacement cost far exceeds what the carrier has agreed to pay.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Happens When the Carrier Discovers the ADU After a Loss
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many homeowners build ADUs without notifying their insurance carrier. The carrier&rsquo;s
        adjuster discovers the ADU during the claims inspection, and the carrier argues the
        homeowner failed to disclose a material change in the risk. Under California Insurance
        Code &sect; 338, a policy can be rescinded for concealment or misrepresentation of a
        material fact. Carriers regularly take the position that an unreported habitable
        structure &mdash; especially one being rented &mdash; is material. Even without
        rescission, the carrier may deny coverage for the ADU itself, limit the claim to the
        inadequate Coverage B amount, or apply a coinsurance penalty.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Practical Steps to Close the Coverage Gap
      </h2>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Notify your carrier.</strong> Before building an ADU &mdash; or as soon as
          possible after one is completed &mdash; notify your insurance carrier in writing. Tell
          them the type of ADU (attached or detached), the square footage, whether it will be
          rented, and the estimated replacement cost.
        </li>
        <li>
          <strong>Increase Coverage B.</strong> If you have a detached ADU, the default 10%
          Coverage B limit is almost certainly inadequate. Ask your carrier to increase it to
          reflect the actual replacement cost of the ADU. Some carriers will do this by
          endorsement; others may require a separate policy.
        </li>
        <li>
          <strong>Add Fair Rental Value coverage.</strong> If the ADU is rented, make sure your
          policy includes FRV coverage for the ADU specifically. Get the limit in writing and
          make sure it reflects at least 12 months of rental income.
        </li>
        <li>
          <strong>Add Ordinance or Law coverage.</strong> This endorsement covers the increased
          cost of rebuilding to current codes. It is important for any property, but essential
          for properties with ADUs, where the rebuild may need to comply with current energy,
          seismic, and accessibility standards.
        </li>
        <li>
          <strong>Require tenant renter&rsquo;s insurance.</strong> Include a lease provision
          requiring the ADU tenant to maintain an HO-4 renter&rsquo;s policy with at least
          $100,000 in liability coverage and adequate personal property limits. Ask to be named
          as an &ldquo;interested party&rdquo; on the tenant&rsquo;s policy so you receive
          notice if they cancel.
        </li>
        <li>
          <strong>Consider a separate policy.</strong> Some carriers will not adequately insure
          a detached ADU under the main HO-3 policy. In those cases, a separate dwelling fire
          policy (DP-3) for the ADU may be the better solution. This is more common when the
          ADU is rented at market rate and functions as a true rental unit.
        </li>
        <li>
          <strong>Get the ADU permitted.</strong> If you have an unpermitted ADU, take advantage
          of California&rsquo;s legalization programs. A permitted ADU is easier to insure, easier
          to rebuild after a loss, and eliminates the risk that the carrier raises a permit defense
          when you file a claim.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Bottom Line
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California wants you to build ADUs. The state has made it easier, faster, and cheaper to
        add a second dwelling unit to your property. But the insurance industry has not kept pace
        with the legislation. Standard HO-3 policies treat a $200,000 detached ADU with a kitchen,
        bathroom, and tenant the same way they treat a garden shed &mdash; as a &ldquo;Coverage B
        other structure&rdquo; subject to a limit that was never designed for a habitable dwelling.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you own an ADU or are planning to build one, treat the insurance conversation as
        seriously as the construction. Talk to your carrier before the project starts, get
        coverage confirmations in writing, and do not assume the default policy limits are
        adequate. The gap between what your policy covers and what it would actually cost to
        rebuild your ADU after a loss can be enormous &mdash; and you will not find out about
        that gap at a convenient time.
      </p>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">Own an ADU or Planning to Build One?</h3>
        <p className="text-gray-600 text-sm mb-4">
          We can review your current homeowner&rsquo;s policy and identify coverage gaps before
          a loss forces the issue. Whether your ADU is permitted or unpermitted, attached or
          detached, owner-occupied or rented, the coverage needs to match the exposure.
        </p>
        <Link href="/contact" className="inline-block bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-6 py-3 rounded-lg transition-colors">
          Request a Free Claim Review &rarr;
        </Link>
      </div>
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
