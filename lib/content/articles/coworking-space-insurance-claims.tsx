import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title:
    'Co-Working Space Insurance Claims: When 50 Businesses Share One Building and Nobody Knows Who’s Covered',
  description:
    'Who insures what when dozens of businesses share a co-working space? Understanding the three-layer insurance problem between building owners, co-working operators, and individual members — and how to avoid devastating coverage gaps.',
  summary:
    'In a co-working space, the building owner, operator, and individual members each carry different coverage, creating a three-layer problem where losses can fall through the cracks. Clarify who insures what to avoid a devastating gap after damage.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational in nature and reflects the author&rsquo;s
          interpretation of California insurance law as a Licensed Public
          Adjuster. It is not legal advice. Co-working insurance arrangements
          involve overlapping policies, complex lease and license agreements, and
          unique liability exposures that vary by operator and location. If you
          have a disputed claim involving co-working space coverage, consult with
          a licensed California attorney who specializes in insurance coverage
          disputes.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        A pipe bursts on the third floor of a co-working space. Water cascades
        through the open floor plan, soaking desks, laptops, inventory samples,
        and client files belonging to 30 different businesses. The building
        owner&rsquo;s property manager says it&rsquo;s the co-working
        operator&rsquo;s problem. The operator points to the membership
        agreement and says each member is responsible for their own property. The
        members call their insurance agents and discover that half of them
        don&rsquo;t have the right coverage &mdash; and the other half have
        policies that exclude losses at &ldquo;shared&rdquo; or
        &ldquo;non-owned&rdquo; premises.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Welcome to the co-working insurance gap &mdash; a three-layer coverage
        problem that leaves businesses exposed precisely because nobody in the
        chain understands where one policy ends and the next begins. The
        explosive growth of co-working spaces over the past decade has outpaced
        the insurance industry&rsquo;s ability to design products for them. The
        result is a coverage landscape full of assumptions, exclusions, and
        finger-pointing that only becomes visible after a loss occurs.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Three-Layer Insurance Problem
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        In a traditional commercial lease arrangement, insurance responsibilities
        are relatively clear: the landlord insures the building, the tenant
        insures their contents and liability, and the lease spells out who
        carries what. Co-working spaces shatter this model by inserting a third
        party &mdash; the co-working operator &mdash; between the building owner
        and the businesses that actually use the space. This creates three
        distinct layers of insurance:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Layer 1: The Building Owner / Landlord.</strong> The property
          owner carries a commercial property policy (typically ISO CP 00 10 or
          equivalent) that covers the building structure, common areas, and
          building systems (HVAC, plumbing, electrical). The landlord&rsquo;s
          policy also typically includes general liability (CGL) and may carry
          loss of rents coverage. This policy does <strong>not</strong> cover the
          co-working operator&rsquo;s business personal property, the
          operator&rsquo;s improvements and betterments, or any member&rsquo;s
          property.
        </li>
        <li>
          <strong>Layer 2: The Co-Working Operator.</strong> The operator leases
          the space from the building owner and then sublicenses it to members.
          The operator should carry a commercial package policy including
          commercial property coverage for the furniture, fixtures, and equipment
          (FF&amp;E) the operator owns &mdash; desks, chairs, printers,
          conference room technology, kitchen appliances, phone booths, and
          tenant improvements. The operator also needs commercial general
          liability, business income coverage, and often a commercial umbrella.
        </li>
        <li>
          <strong>Layer 3: Individual Members.</strong> Each member business
          should carry its own business owner&rsquo;s policy (BOP) or a
          standalone commercial property and general liability program covering
          its own equipment, inventory, and liability. The member&rsquo;s policy
          is supposed to cover the member&rsquo;s laptop, monitors, product
          samples, documents, and any property they bring into the space.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The problem is that all three layers are designed for a world where the
        boundaries between one insured&rsquo;s property and another&rsquo;s are
        clear. In a co-working environment, those boundaries barely exist. A
        shared printer belongs to the operator. The laptop on the desk next to
        it belongs to Member A. The external hard drive plugged into the printer
        belongs to Member B. The desk itself might be operator-owned or it might
        be a &ldquo;dedicated desk&rdquo; that the member is renting with
        additional personal property on it. When water damage hits, separating
        these ownership layers becomes an adjuster&rsquo;s nightmare.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a deeper understanding of how commercial lease insurance provisions
        interact with property coverage, see our article on{' '}
        <Link
          href="/resources/commercial-lease-insurance"
          className="text-blue-700 underline hover:text-blue-900"
        >
          Waiver of Subrogation, Additional Insured, and Commercial Lease
          Insurance Requirements
        </Link>
        .
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        License vs. Lease: Why the Legal Structure Matters for Insurance
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most co-working membership agreements are structured as{' '}
        <strong>licenses</strong>, not leases. This distinction has profound
        insurance implications that most members never consider.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A <strong>lease</strong> conveys an exclusive possessory interest in a
        defined space. A <strong>license</strong> grants permission to use a
        space without conveying any possessory interest. When you sign a
        co-working membership agreement for a hot desk or even a dedicated desk,
        you are typically receiving a license &mdash; the right to use a space
        that the operator controls. You do not have exclusive possession of the
        premises the way a traditional tenant does.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Why does this matter for insurance? Because many commercial property and
        BOP policies define covered premises by reference to a{' '}
        <strong>leased location</strong>. If your policy lists a &ldquo;premises
        address&rdquo; and you are operating under a license rather than a
        lease, the carrier may argue that the co-working address is not a
        &ldquo;covered location&rdquo; under your policy. This is especially
        dangerous for members who list their home address as the insured
        premises and use the co-working space as a secondary location.
      </p>

      <CalloutBox variant="warning" title="The Premises Definition Trap">
        <p>
          If your BOP or commercial property policy lists a specific premises
          address, and that address is your home office, your carrier may deny
          coverage for personal property losses at the co-working space on the
          grounds that it is an &ldquo;undisclosed location.&rdquo; Some BOPs
          provide limited off-premises coverage (typically 10% of the business
          personal property limit), but many members&rsquo; most valuable
          equipment &mdash; laptops, displays, sample inventory &mdash; lives at
          the co-working space daily. Make sure your policy either lists the
          co-working address or has adequate off-premises coverage.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        Under California law, the distinction between a lease and a license also
        affects the parties&rsquo; insurance obligations. A residential tenant under a lease
        has habitability and repair <em>remedies</em> against the landlord under California
        Civil Code &sect;&sect; 1941&ndash;1942.5 (landlord&rsquo;s implied duty to maintain
        the premises, tenant&rsquo;s repair-and-deduct right, and anti-retaliation protection).
        Those statutory protections do not apply to commercial leases at all, and they
        certainly do not apply to a licensee under a co-working membership agreement, who
        typically has only the contractual rights spelled out in the membership agreement
        itself &mdash; an agreement drafted by the operator, not negotiated like a commercial
        lease.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Who Covers Shared Equipment?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Co-working spaces are filled with shared equipment: printers,
        conference room screens and cameras, kitchen appliances, phone booth
        ventilation systems, shared monitors, networking equipment, and
        furniture. All of this is typically owned by the operator and should be
        insured under the operator&rsquo;s commercial property policy as
        business personal property (BPP) or as tenant improvements and
        betterments.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The coverage gap arises when the operator is underinsured or when the
        operator&rsquo;s policy has a{' '}
        <Link
          href="/resources/commercial-coinsurance"
          className="text-blue-700 underline hover:text-blue-900"
        >
          coinsurance penalty
        </Link>{' '}
        because the total value of shared equipment has grown beyond the insured
        amount. Co-working operators frequently add equipment &mdash; new desks,
        upgraded conference room technology, additional printers &mdash; without
        updating their property limits. When a loss occurs, the operator
        discovers that the coinsurance clause reduces the payout, and there is
        not enough recovery to replace the shared equipment that members depend
        on for daily operations.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Members should understand that the operator&rsquo;s insurance does{' '}
        <strong>not</strong> cover member-owned equipment, even if that equipment
        is connected to or used alongside operator-owned systems. Your laptop
        plugged into the operator&rsquo;s monitor is still your property. Your
        inventory samples stored in the operator&rsquo;s storage closet are
        still your property. You need your own{' '}
        <Link
          href="/resources/business-personal-property-claims"
          className="text-blue-700 underline hover:text-blue-900"
        >
          business personal property coverage
        </Link>{' '}
        for these items.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Liability for Member-to-Member Property Damage
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        In a traditional office building, tenants are separated by walls, doors,
        and demised spaces. In a co-working environment, dozens of businesses
        operate in an open floor plan where one member&rsquo;s actions can
        easily damage another member&rsquo;s property. A member spills coffee
        across the shared desk and destroys the neighboring member&rsquo;s
        laptop. A member&rsquo;s space heater causes a fire that damages
        equipment belonging to six other members. A member&rsquo;s overloaded
        power strip trips a breaker that takes down the server rack.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The liability chain in these scenarios is genuinely complicated.
        The damaged member&rsquo;s property coverage should respond for the
        property loss (subject to the member having adequate coverage). But who
        is liable for the damage? The member who caused it has potential general
        liability exposure. The operator may have liability for failing to
        maintain safe premises or for inadequate rules about space heaters and
        power strips. The building owner may have liability if a building system
        (electrical, plumbing) contributed to the loss.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most co-working membership agreements contain broad liability waivers
        and indemnification clauses that attempt to shift all risk to the
        member. These clauses vary in enforceability under California law.
        California Civil Code &sect; 1668 voids contracts that exempt a party
        from responsibility for fraud, willful injury, or violation of law.
        Courts have also limited the enforceability of indemnification clauses
        in adhesion contracts &mdash; and most co-working membership agreements
        are take-it-or-leave-it adhesion contracts.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Data Breach and Cyber Liability on Shared Networks
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Co-working spaces create a unique cyber liability exposure that most
        members never consider. Dozens of businesses share the same Wi-Fi
        network, the same printers, and often the same network-attached storage.
        A data breach originating from one member&rsquo;s infected device can
        compromise every other member connected to the same network.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Standard BOP policies and commercial general liability policies
        typically <strong>exclude</strong> cyber liability entirely.
        The ISO CGL policy excludes coverage for &ldquo;electronic data&rdquo;
        damage under the standard property damage definition, and most BOPs
        follow suit. Members who handle sensitive client data &mdash;
        accountants, attorneys, financial advisors, healthcare consultants
        &mdash; need standalone{' '}
        <Link
          href="/resources/business-cyber-liability-insurance"
          className="text-blue-700 underline hover:text-blue-900"
        >
          cyber liability coverage
        </Link>{' '}
        that responds regardless of where the breach originated.
      </p>

      <CalloutBox variant="warning" title="The Shared Network Problem">
        <p>
          If a co-working member&rsquo;s compromised device leads to a data
          breach that exposes your clients&rsquo; data, your cyber liability
          policy is the one that needs to respond. You cannot rely on the
          operator&rsquo;s policy or the other member&rsquo;s policy to cover
          your notification costs, regulatory fines, or third-party liability.
          California&rsquo;s data breach notification statute (Civil Code
          &sect; 1798.82) imposes obligations on the entity that{' '}
          <strong>owns or licenses</strong> the data &mdash; that is you, not
          the operator.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Business Income When the Co-Working Space Closes
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is one of the most significant coverage gaps in the co-working
        model. A fire damages the co-working building. The space is closed for
        four months while repairs are completed. Every member business is
        displaced. The question is: does each member&rsquo;s{' '}
        <Link
          href="/resources/business-interruption"
          className="text-blue-700 underline hover:text-blue-900"
        >
          business income coverage
        </Link>{' '}
        respond?
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The answer depends on the policy language. Standard business income
        coverage (ISO CP 00 30) pays for income lost during the &ldquo;period
        of restoration&rdquo; when the <strong>described premises</strong> is
        damaged by a covered cause of loss. If the member&rsquo;s policy lists
        the co-working address as the insured premises, the coverage should
        respond &mdash; but the carrier may argue that the member does not have
        an insurable interest in the building itself. If the member&rsquo;s
        policy lists a home office as the premises, the carrier will almost
        certainly deny the business income claim because the
        &ldquo;described premises&rdquo; (the home) was not damaged.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some BOPs include &ldquo;dependent properties&rdquo; or
        &ldquo;contingent business income&rdquo; coverage, but these
        endorsements are typically designed for supply chain disruptions (a
        key supplier or customer is shut down), not for the loss of the
        insured&rsquo;s own workspace. The gap is real and is rarely addressed
        until a loss exposes it.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Personal Property Documentation Problem
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        After a loss in a co-working space, every affected member must
        document their property losses. This is where the open floor plan
        creates chaos. In a traditional office, you can photograph the
        damaged space and reasonably inventory what was there. In a co-working
        environment, member property is intermingled with operator property and
        other members&rsquo; property. Hot desk users may not even have the
        same desk from day to day.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Carriers will demand proof of ownership and proof that the claimed
        property was at the co-working location at the time of loss. If you
        use a hot desk, your carrier may argue that you cannot prove your
        laptop was at the co-working space rather than at home when the loss
        occurred. If you store inventory in a shared storage area, you need
        receipts, photos, and a clear inventory system that distinguishes your
        property from every other member&rsquo;s.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        California Insurance Code &sect; 2071 requires that the insured
        provide a sworn proof of loss, but the insured only needs to provide
        proof &ldquo;to the best of the insured&rsquo;s knowledge and
        belief.&rdquo; Carriers cannot demand a level of documentation that
        is impossible given the co-working environment. However, the better
        your records are before a loss, the stronger your claim will be after
        one.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Water Damage in Open Floor Plans
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Water damage is the most common and most destructive peril in co-working
        spaces. Unlike traditional offices with individual suites, co-working
        spaces feature vast open floor plans where water from a burst pipe,
        roof leak, or overflowed restroom can travel hundreds of feet across
        the floor before anyone notices. A single water event can damage
        property belonging to dozens of separate businesses simultaneously.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The building owner&rsquo;s policy covers the building structure and
        building systems. The operator&rsquo;s policy covers the
        operator&rsquo;s FF&amp;E and improvements. Each member&rsquo;s policy
        covers that member&rsquo;s personal property. But the emergency
        mitigation &mdash; extracting water, setting up drying equipment,
        removing wet materials &mdash; is a single unified effort that benefits
        all three layers. Who pays for it?
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Typically, the building owner&rsquo;s insurer should cover the
        structural mitigation (drying walls, replacing ceiling tiles,
        addressing the plumbing failure). The operator&rsquo;s insurer should
        cover mitigation of operator-owned property. And each member&rsquo;s
        insurer should cover that member&rsquo;s property mitigation. In
        practice, this means multiple adjusters from multiple carriers
        descending on the same open floor plan, each trying to segregate
        &ldquo;their&rdquo; damages from everyone else&rsquo;s. The process
        is slow, contentious, and frequently results in coverage gaps where
        each carrier points to the other.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Operator&rsquo;s Duty to Maintain and Insure Common Areas
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        As the party that controls the premises, the co-working operator has
        a duty under California law to maintain the space in a reasonably safe
        condition. California Civil Code &sect; 1714 establishes the general
        duty of care, and premises liability case law holds that the party in
        control of the premises &mdash; not necessarily the owner &mdash; owes
        a duty to invitees. Co-working members are invitees (or licensees,
        depending on the legal analysis), and the operator owes them a duty to
        maintain the shared areas safely.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This duty extends to the operator&rsquo;s insurance obligations. A
        responsible operator should carry:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Commercial general liability (CGL)</strong> with adequate
          limits &mdash; at least $1 million per occurrence and $2 million
          aggregate for a multi-member space.
        </li>
        <li>
          <strong>Commercial property coverage</strong> for all operator-owned
          FF&amp;E, including{' '}
          <Link
            href="/resources/tenant-improvements-betterments"
            className="text-blue-700 underline hover:text-blue-900"
          >
            tenant improvements and betterments
          </Link>
          .
        </li>
        <li>
          <strong>Business income coverage</strong> for the operator&rsquo;s own
          lost revenue during a closure.
        </li>
        <li>
          <strong>Hired and non-owned auto coverage</strong> if the operator
          provides pickup or delivery services.
        </li>
        <li>
          <strong>Workers&rsquo; compensation</strong> for the operator&rsquo;s
          employees (front desk staff, maintenance, management).
        </li>
        <li>
          <strong>Cyber liability coverage</strong> for the shared network the
          operator provides and manages.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Members should request a certificate of insurance from the operator
        before signing a membership agreement. If the operator refuses to
        provide proof of insurance, that is a significant red flag about the
        operational professionalism of the space.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        California-Specific Considerations for Co-Working Insurance
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California&rsquo;s regulatory environment adds several layers of
        complexity to co-working insurance:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Earthquake exposure.</strong> Most commercial property policies
          exclude earthquake damage. If the co-working space is in a seismically
          active area (which is most of California), members should consider
          whether their business personal property is covered for earthquake
          losses. The California Earthquake Authority (CEA) provides residential
          coverage but does not write commercial earthquake policies.
          Stand-alone commercial earthquake coverage is available through the
          surplus lines market but is expensive and often has high deductibles.
        </li>
        <li>
          <strong>Wildfire smoke damage.</strong> In Northern and Southern
          California, wildfire smoke can infiltrate co-working spaces even when
          the building itself is not in the fire zone. Smoke damage to
          electronics, documents, and inventory is a covered peril under most
          commercial property policies, but proving that smoke from an external
          wildfire caused internal damage requires immediate documentation and
          air quality testing.
        </li>
        <li>
          <strong>ADA compliance and liability.</strong> Co-working operators in
          California face exposure under both federal ADA requirements and
          California&rsquo;s Unruh Civil Rights Act (Civil Code &sect; 51) and
          the California Disabled Persons Act (Civil Code &sect; 54). ADA
          compliance failures can generate both first-party repair costs and
          third-party liability claims.
        </li>
        <li>
          <strong>Local building codes.</strong> San Francisco, Los Angeles, and
          other California cities have adopted co-working-specific building and
          fire codes that affect the operator&rsquo;s obligations and insurance
          requirements. Operators should verify that their insurance program
          reflects current local code requirements.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Practical Checklist: For Co-Working Operators
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Carry a commercial package policy with adequate property limits that
          reflect the <strong>current replacement cost</strong> of all
          operator-owned FF&amp;E, improvements, and betterments. Review limits
          annually.
        </li>
        <li>
          Carry commercial general liability with at least $1M/$2M limits and
          consider a commercial umbrella for catastrophic exposures.
        </li>
        <li>
          Carry business income coverage with an adequate limit and an extended
          period of indemnity endorsement.
        </li>
        <li>
          Carry cyber liability coverage that addresses the shared network
          exposure.
        </li>
        <li>
          Require members to carry their own insurance and provide proof of
          coverage as a condition of membership.
        </li>
        <li>
          Maintain a current inventory of all operator-owned equipment with
          photographs, serial numbers, and replacement cost estimates.
        </li>
        <li>
          Review the lease with the building owner to confirm that insurance
          obligations, additional insured requirements, and waiver of
          subrogation provisions are properly addressed.
        </li>
        <li>
          Ensure the membership agreement clearly allocates insurance
          responsibilities and is reviewed by an attorney familiar with
          California contract and insurance law.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Practical Checklist: For Co-Working Members
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Carry a BOP or standalone commercial property and GL policy that
          lists the co-working address as a covered location &mdash; or confirm
          that your policy provides adequate off-premises coverage.
        </li>
        <li>
          Review your policy&rsquo;s business personal property limit to
          confirm it covers the full replacement cost of everything you bring to
          the co-working space.
        </li>
        <li>
          Verify that your business income coverage will respond if the
          co-working space is shut down due to property damage.
        </li>
        <li>
          If you handle sensitive client data, carry standalone{' '}
          <Link
            href="/resources/business-cyber-liability-insurance"
            className="text-blue-700 underline hover:text-blue-900"
          >
            cyber liability insurance
          </Link>{' '}
          that covers breaches originating from shared networks.
        </li>
        <li>
          Maintain a detailed, photographed inventory of all equipment and
          property you keep at the co-working space, updated regularly.
        </li>
        <li>
          Request a certificate of insurance from the operator and verify that
          the operator carries adequate property and liability coverage.
        </li>
        <li>
          Read the membership agreement carefully &mdash; understand the
          liability waivers, indemnification clauses, and insurance
          requirements before you sign.
        </li>
        <li>
          Consider whether the co-working membership agreement&rsquo;s
          liability waiver would be enforceable under California law if the
          operator&rsquo;s negligence causes a loss to your property.
        </li>
      </ul>

      <CalloutBox variant="info" title="The Bottom Line">
        <p>
          Co-working spaces are a fantastic business model for flexibility and
          cost savings. But the insurance framework has not caught up. The
          three-layer coverage structure &mdash; building owner, operator,
          member &mdash; creates gaps that are invisible until a loss occurs.
          Whether you are an operator or a member, the time to understand your
          coverage is before a pipe bursts, a fire starts, or a data breach
          hits your shared network. Review your policy, review the membership
          agreement, and close the gaps now.
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
