import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Hotel and Hospitality Insurance Claims: When Every Room Lost Is Revenue Gone',
  description:
    'Hotels and hospitality businesses face unique insurance vulnerabilities from business income losses during renovation to bedbug closures, franchise requirements, and seasonal revenue challenges. Learn how to protect your claim.',
  summary:
    'Hotels face unique exposures: business income lost per unrentable room, renovation and bedbug closures, franchise-brand requirements, and seasonality. These claims hinge on documenting lost revenue accurately and meeting franchise obligations.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational in nature and reflects the author&rsquo;s interpretation of
          California insurance law as a Licensed Public Adjuster. It is not legal advice. Insurance
          policies, franchise agreements, and liquor liability statutes vary significantly across
          jurisdictions and individual circumstances. If you have a disputed claim involving a hotel
          or hospitality property, consult with a licensed California attorney who specializes in
          insurance coverage disputes.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        Hotels are not like other commercial properties. When a retail store suffers fire damage, the
        owner might be able to reopen a portion of the building, set up a temporary sales area, or
        redirect customers to another location. When a hotel suffers damage &mdash; even damage
        confined to a single floor or wing &mdash; the entire operation can grind to a halt. Guests
        cancel reservations. Online travel agencies pull your listing. Your franchise flag comes
        down. Conference bookings evaporate. The revenue loss begins immediately and compounds
        daily, and it does not stop when the physical repairs are complete. It stops when the
        guests come back &mdash; and that can take months or years after the last contractor leaves.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This article addresses the unique insurance vulnerabilities that hotels and hospitality
        businesses face in California. From the period of restoration problem to franchise
        agreement requirements, from bedbug closures to seasonal revenue documentation, these
        properties present claim challenges that require specialized knowledge to navigate. Whether
        you own a boutique hotel, a franchise-flagged property, a resort, a bed-and-breakfast, or
        a conference center, the coverage issues discussed here are ones your insurer is unlikely
        to explain &mdash; and ones that can mean the difference between a full recovery and
        financial ruin.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Period of Restoration Problem: Why Hotels Cannot Partially Reopen
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The single most devastating coverage issue for hotels is the{' '}
        <Link href="/resources/period-of-restoration-disputes" className="text-blue-700 underline hover:text-blue-900">
          period of restoration
        </Link>{' '}
        &mdash; the window during which{' '}
        <Link href="/resources/business-interruption" className="text-blue-700 underline hover:text-blue-900">
          business income coverage
        </Link>{' '}
        pays for lost revenue. Under the standard ISO CP 00 30 form, the period of restoration
        begins 72 hours after the direct physical loss and ends when the property &ldquo;should be&rdquo;
        repaired, rebuilt, or replaced with reasonable speed and similar quality. Insurers routinely
        argue that this period ends the moment the last nail is driven &mdash; when the physical
        structure is restored. For a hotel, that interpretation is catastrophic.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here is why. A hotel with 150 rooms suffers a fire that damages 40 rooms and the main
        lobby. The insurer&rsquo;s position may be that the hotel should have &ldquo;partially
        reopened&rdquo; the undamaged 110 rooms while repairs were ongoing. This ignores reality.
        A hotel with no functional lobby, with construction crews in the hallways, with dust and
        noise and blocked corridors, is not a hotel that guests will book. Online travel agencies
        will not list a property under active construction. Meeting planners will not send
        corporate groups to a hotel with jackhammers running at 7 AM. Even if the undamaged rooms
        are technically habitable, the revenue from those rooms is a fraction of what it would
        normally be &mdash; and the operational costs of running a partial hotel (front desk staff,
        housekeeping, utilities, maintenance) often exceed the revenue generated.
      </p>

      <CalloutBox variant="warning" title="The Partial Reopening Trap">
        <p>
          Insurers frequently pressure hotels to partially reopen during construction to reduce
          the business income claim. Before agreeing, calculate the actual economics. Running
          a 150-room hotel at 25% occupancy during active construction often costs more than
          it generates &mdash; and the insurer may then argue that the revenue shortfall is due
          to your &ldquo;decision to reopen&rdquo; rather than the loss. Document everything
          and get professional advice before partial reopening.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        The policyholder&rsquo;s argument is that the period of restoration should encompass the
        time necessary to restore the property to the condition where it can operate as a
        functioning hotel &mdash; not merely the time to complete physical repairs. California
        courts have been receptive to this broader interpretation. In <em>Amerigraphics, Inc. v.
        Mercury Casualty Co.</em> (2010) 182 Cal.App.4th 1538, the court held that the period of
        restoration should include the time reasonably required to resume operations, not merely
        to complete physical construction. For hotels, this means the period should include the
        time needed to: complete all physical repairs; pass all inspections; obtain all regulatory
        approvals; restore the online booking infrastructure; ramp up staffing; and achieve a
        reasonable occupancy rate. The argument is strong, but it must be documented and presented
        correctly.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Extended Period of Indemnity: Brand Reputation and Revenue Ramp-Up
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Even if the insurer agrees on the period of restoration, there is a second problem:
        what happens after physical repairs are complete but revenue has not returned to
        pre-loss levels? Hotels depend on reputation, online reviews, search engine ranking,
        and brand momentum. A hotel that was closed for six months does not reopen at 90%
        occupancy on day one. It reopens at 20&ndash;30% and slowly rebuilds. This ramp-up
        period can last 12 to 24 months for a full-service hotel.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The standard business income coverage form does not automatically cover this ramp-up
        period. What does cover it is the <strong>Extended Period of Indemnity</strong>
        endorsement (ISO CP 15 56 or equivalent). This endorsement extends business income
        coverage beyond the period of restoration for a specified number of days &mdash;
        typically 30, 60, 90, 180, or 365 days &mdash; to allow the business to return to
        pre-loss revenue levels.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For hotels, the standard 30-day extended period is almost never adequate. A hotel
        that was closed for six months may need 12 months after reopening to rebuild its
        online presence, restore its star rating on travel platforms, rebook cancelled
        weddings and conferences, and regain the trust of corporate travel managers. If the
        extended period of indemnity is only 30 or 60 days, the hotel absorbs the revenue
        gap for the remaining ramp-up period out of pocket. This is one of the most
        commonly underpurchased coverages in the hospitality industry, and one of the
        costliest gaps after a major loss.
      </p>

      <CalloutBox variant="tip" title="Coverage Tip">
        <p>
          When purchasing or reviewing a hotel policy, always check the extended period of
          indemnity. For any hotel that depends on reputation, online reviews, or repeat
          bookings &mdash; which is virtually every hotel &mdash; the minimum recommended
          extended period is 365 days. The premium difference between 30 days and 365 days
          is minimal compared to the potential gap in coverage.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Franchise Agreement Insurance Requirements and Franchisor Demands
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The majority of hotels in the United States operate under franchise agreements with
        major brands &mdash; Marriott, Hilton, IHG, Wyndham, Choice, Best Western, and others.
        These franchise agreements impose specific insurance requirements that go beyond what a
        standard commercial property policy provides. Understanding these requirements is critical
        because failure to maintain the required coverage can trigger a franchise termination
        &mdash; and losing your flag can be more financially devastating than the physical damage
        itself.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Typical franchise agreement insurance requirements include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Property insurance</strong> at full replacement cost, including business
          income coverage for a minimum of 12 months (some brands require 18 or 24 months).
        </li>
        <li>
          <strong>Commercial general liability</strong> with minimum limits of $1 million per
          occurrence and $2 million aggregate, often with an umbrella requirement of $5 million
          to $25 million depending on the brand and property size.
        </li>
        <li>
          <strong>Liquor liability</strong> coverage if the hotel serves alcohol (discussed in
          detail below).
        </li>
        <li>
          <strong>Workers&rsquo; compensation</strong> at statutory limits.
        </li>
        <li>
          <strong>Automobile liability</strong> if the hotel operates shuttle vehicles or valet
          parking.
        </li>
        <li>
          <strong>The franchisor named as additional insured</strong> on all liability policies
          and as loss payee on property policies.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The claim complication arises when a loss triggers the franchise agreement&rsquo;s
        renovation and reopening requirements. Many franchise agreements require that after
        a major loss, the property must be rebuilt to <em>current</em> brand standards &mdash;
        not the standards that existed when the hotel was originally constructed. This is
        analogous to the{' '}
        <Link href="/resources/ordinance-law" className="text-blue-700 underline hover:text-blue-900">
          ordinance or law
        </Link>{' '}
        issue in municipal building codes, but franchise standards can be even more demanding.
        A hotel that was built 15 years ago under an older brand standard may now be required
        to install new lobby finishes, upgrade room configurations, replace all FF&amp;E
        (furniture, fixtures, and equipment), and redesign common areas to meet the
        current &ldquo;prototype&rdquo; &mdash; all at the owner&rsquo;s expense.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurer&rsquo;s position is that it owes replacement cost for like kind and quality
        &mdash; meaning it pays to rebuild the hotel as it existed before the loss. The franchisor
        demands that the hotel be rebuilt to current standards. The gap between these two numbers
        can be millions of dollars. While the insurer is not responsible for franchise upgrade
        requirements (unless the policy specifically endorses them), the policyholder must
        understand this exposure and plan for it, either through policy endorsements or through
        negotiation with both the insurer and the franchisor after a loss.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Guest Property Claims and Innkeeper&rsquo;s Liability
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Hotels have a unique legal relationship with their guests that creates specific insurance
        implications. Under California Civil Code &sect; 1859 et seq. (the innkeeper&rsquo;s
        liability statutes), a hotel or inn has a duty of care with respect to guest property.
        California Civil Code &sect; 1860 provides that an innkeeper has a lien on the baggage
        and property of guests, and &sect; 1859 establishes that the innkeeper is liable for loss
        of or injury to personal property of guests.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        However, California Civil Code &sect; 1860 also provides for <strong>limited
        liability</strong>. If the hotel maintains a fireproof safe or vault and posts the
        required notice (California Civil Code &sect; 1860), the hotel&rsquo;s liability for
        property not deposited in the safe is limited to $500 per guest (or the actual value,
        whichever is less, for certain categories of property). This limited liability statute
        is a critical protection, but it only applies if the hotel strictly complies with the
        posting and safe availability requirements.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        From an insurance perspective, guest property claims typically fall under the hotel&rsquo;s
        commercial general liability (CGL) policy or a specific innkeeper&rsquo;s liability
        endorsement. The standard CGL policy covers legal liability for damage to property of
        others &mdash; but it contains exclusions for property in the insured&rsquo;s care,
        custody, or control. Guest property in hotel rooms is arguably in the hotel&rsquo;s care,
        which means the CGL exclusion could apply. An innkeeper&rsquo;s liability endorsement
        fills this gap, and any hotel operating without one has a significant coverage hole.
      </p>

      <CalloutBox variant="important" title="The Safe Deposit Notice Requirement">
        <p>
          California&rsquo;s limited liability protection for hotels under Civil Code &sect; 1860
          requires strict compliance with notice requirements. The hotel must post a copy of
          &sect;&sect; 1859&ndash;1860 in a conspicuous place in the office or check-in area
          and in every guest room. Failure to post the required notice can eliminate the liability
          cap entirely, exposing the hotel to full value claims for all guest property. After a
          major loss, verify that your pre-loss compliance with these posting requirements is
          documented.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Bedbug and Contamination Closures: The Pollution Exclusion Question
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Few events can shut down a hotel faster than a bedbug infestation, a legionella outbreak
        in the water system, or a mold contamination event. These closures are devastating
        because they combine direct remediation costs with massive business income losses and
        lasting reputational damage. The insurance question is whether any of these events are
        covered &mdash; and the answer depends heavily on the specific policy language and the
        nature of the contamination.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The standard commercial property policy contains a{' '}
        <Link href="/resources/pollution-exclusion-claims" className="text-blue-700 underline hover:text-blue-900">
          pollution exclusion
        </Link>{' '}
        that eliminates coverage for loss or damage caused by the discharge, dispersal, seepage,
        migration, release, or escape of &ldquo;pollutants.&rdquo; The policy defines pollutants
        broadly to include any solid, liquid, gaseous, or thermal irritant or contaminant,
        including smoke, vapor, soot, fumes, acids, alkalis, chemicals, and waste. Insurers
        have attempted to apply this exclusion to bedbug infestations, mold contamination, and
        even bacterial outbreaks.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The policyholder&rsquo;s response depends on the specific contaminant. For bedbugs,
        the argument is strong that insects are not &ldquo;pollutants&rdquo; within the
        reasonable meaning of that term. The pollution exclusion was designed to address
        environmental contamination &mdash; toxic chemicals, industrial waste, hazardous
        substances &mdash; not biological pests. Several courts nationwide have held that the
        pollution exclusion does not apply to conditions that are not traditionally thought
        of as &ldquo;pollution.&rdquo; California courts apply the pollution exclusion narrowly
        when the alleged pollutant is not a traditional environmental contaminant. In{' '}
        <em>MacKinnon v. Truck Insurance Exchange</em> (2003) 31 Cal.4th 635, the California
        Supreme Court held that the pollution exclusion must be interpreted in context and
        does not automatically apply to every substance that could theoretically be called
        a contaminant.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For mold, the analysis is more complex. Many commercial property policies now contain
        specific mold exclusions or mold sublimits that are separate from the pollution
        exclusion. If the policy has a mold exclusion, the pollution exclusion argument becomes
        secondary. If the mold resulted from a covered cause of loss (such as a pipe burst),
        the policyholder can argue that the mold is consequential damage from a covered peril
        and should be covered under the ensuing loss provision.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For legionella and waterborne pathogens, the coverage analysis involves both the
        property policy (for remediation and business income) and the liability policy (for
        guest illness claims). Hotels should carry specific communicable disease or
        contamination event coverage, which is available as an endorsement and covers both
        remediation costs and business income during the closure period.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Liquor Liability: Serving Alcohol Means Serving Risk
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Hotels that serve alcohol &mdash; through restaurants, bars, room service, banquet
        events, or minibars &mdash; face liquor liability exposure. Under California Business
        and Professions Code &sect; 25602, a person who sells, furnishes, gives, or causes to
        be sold, furnished, or given away any alcoholic beverage to a habitually intoxicated
        person or to an obviously intoxicated person is not civilly liable for injuries caused
        by that person (California adopted a general rule of non-liability through Civil Code
        &sect; 1714(c)). However, this protection has exceptions, and the practical reality is
        that hotels are routinely sued when intoxicated guests cause injuries.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The standard CGL policy excludes coverage for liquor liability if the insured is in the
        business of manufacturing, distributing, selling, serving, or furnishing alcoholic
        beverages. Hotels that serve alcohol are clearly &ldquo;in the business&rdquo; of
        serving alcoholic beverages. This means the CGL policy&rsquo;s liquor liability
        exclusion applies, and the hotel needs a separate liquor liability policy or endorsement.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The claim complication arises because liquor liability events often occur during
        large events &mdash; weddings, corporate parties, holiday galas &mdash; where the
        hotel is serving hundreds of guests and the ability to monitor individual consumption
        is limited. A single event can generate multiple claims, and the aggregate exposure
        can be substantial. Hotels should ensure their liquor liability limits are adequate
        for their largest anticipated event, not merely for routine bar operations.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Seasonal Revenue and Documentation Challenges
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Hotel revenue is inherently seasonal, and this seasonality creates both opportunity
        and risk in the claims process. A ski resort that suffers a fire in October &mdash;
        right before peak season &mdash; will have a dramatically different business income
        claim than one that suffers the same fire in April after the season has ended. A
        beachfront hotel damaged in May loses its entire summer revenue. A conference hotel
        damaged in January loses its spring convention season.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The standard business income calculation uses the 12 months immediately preceding
        the loss (or a representative period) to establish the baseline revenue. For seasonal
        properties, this methodology can either help or hurt the policyholder depending on
        when the loss occurs and what the comparison period captures. Insurers frequently
        attempt to use annual averages rather than seasonal projections, which dramatically
        understates the loss for a property damaged during its peak season.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Documentation is the key to overcoming this problem. Hotels generate enormous
        amounts of revenue data &mdash; daily revenue reports (the &ldquo;night audit&rdquo;
        or &ldquo;daily flash report&rdquo;), monthly STR (Smith Travel Research) reports
        comparing performance to competitive sets, revenue management system projections,
        group booking pace reports, and historical occupancy and ADR (average daily rate)
        data. All of this data should be preserved, organized, and presented to the insurer
        to demonstrate the actual seasonal revenue pattern and project what the hotel would
        have earned during the loss period.
      </p>

      <CalloutBox variant="info" title="Key Hotel Revenue Metrics">
        <p>
          When documenting a hotel business income claim, focus on these metrics:{' '}
          <strong>RevPAR</strong> (revenue per available room), <strong>ADR</strong> (average
          daily rate), <strong>occupancy percentage</strong>, <strong>group pace</strong>{' '}
          (forward bookings for events and conferences), and <strong>ancillary revenue</strong>{' '}
          (food and beverage, spa, parking, resort fees). The insurer will likely focus on
          room revenue alone &mdash; your job is to document every revenue stream that was
          interrupted by the loss.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        ADA Compliance, Code Upgrades, and Ordinance or Law Coverage
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a hotel sustains substantial damage and must rebuild, the reconstruction triggers
        compliance with the current version of the Americans with Disabilities Act (ADA)
        Accessibility Guidelines, the California Building Code (which often exceeds federal
        ADA requirements through the California Building Standards Code, Title 24), and all
        applicable local building codes. For hotels, this compliance burden can be enormous.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        ADA requirements for hotels include accessible rooms (a minimum percentage of total
        rooms must be accessible, with specific requirements for roll-in showers, hearing
        impairment features, and mobility accessibility), accessible public areas (lobby,
        restaurant, pool, fitness center, meeting rooms), accessible parking, accessible
        signage, and accessible paths of travel throughout the property. If the hotel was
        built before the current ADA standards, the reconstruction may require significant
        modifications to meet current requirements &mdash; wider doorways, reconfigured
        bathrooms, new elevators, modified pool access, and redesigned guest room layouts.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is precisely where{' '}
        <Link href="/resources/ordinance-law" className="text-blue-700 underline hover:text-blue-900">
          ordinance or law coverage
        </Link>{' '}
        becomes critical. Standard property insurance pays to rebuild the property as it
        existed before the loss. It does not pay for the additional cost of complying with
        building codes or accessibility requirements that did not apply when the building
        was originally constructed. Without ordinance or law coverage, the hotel owner
        absorbs the full cost of code-required upgrades.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Ordinance or law coverage typically has three components: Coverage A (loss in value
        of the undamaged portion of the building if code requires demolition), Coverage B
        (cost of demolishing the undamaged portion), and Coverage C (increased cost of
        construction to comply with current codes). For hotels, Coverage C is the most
        important component, and it should be purchased in an amount that reflects the
        potential cost of bringing the entire property into compliance with current ADA
        and building code requirements.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Fire Suppression, Sprinkler Systems, and Event Cancellation
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Hotels are subject to stringent fire suppression requirements under both California
        law and franchise agreements. The California Fire Code requires automatic sprinkler
        systems in hotels and motels, and the{' '}
        <Link href="/resources/protective-safeguards" className="text-blue-700 underline hover:text-blue-900">
          protective safeguards endorsement
        </Link>{' '}
        (ISO CP 04 11 or equivalent) in the hotel&rsquo;s property policy requires that
        these systems be maintained in working order. If the sprinkler system was not
        functioning at the time of a fire loss, the insurer may deny the claim entirely
        under the protective safeguards endorsement.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The protective safeguards issue is particularly acute for hotels undergoing
        renovation. During construction, sprinkler systems are sometimes taken offline in
        sections being renovated. If a fire occurs during this window, the insurer may
        argue that the protective safeguards condition was violated. Hotels should ensure
        that any sprinkler system shutdown is: (1) communicated to the insurer in advance,
        (2) limited in duration and scope, (3) accompanied by fire watch procedures as
        required by the fire marshal, and (4) documented with written authorization from
        the appropriate authority.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Hotels that host events &mdash; weddings, corporate meetings, conventions, trade
        shows &mdash; also face event cancellation exposure. When a covered loss prevents
        the hotel from hosting a booked event, the lost revenue from that event is part of
        the business income claim. But the exposure goes further: the hotel may face
        contractual liability to the event organizer for the costs of relocating the event,
        and the hotel&rsquo;s reputation in the events market may suffer. Event cancellation
        coverage, either as a standalone policy or as part of the business income calculation,
        should address these costs.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Extra Expense Coverage: Keeping Guests and Revenue During Repairs
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        <Link href="/resources/extra-expense-coverage" className="text-blue-700 underline hover:text-blue-900">
          Extra expense coverage
        </Link>{' '}
        pays for costs above and beyond normal operating expenses that the business incurs to
        continue operations during the period of restoration. For hotels, extra expense coverage
        is important because there are often steps the hotel can take to maintain
        revenue during repairs &mdash; but those steps cost money.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Examples of covered extra expenses for hotels include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Renting temporary modular units or tents for event space while the ballroom is
          being repaired.
        </li>
        <li>
          Arranging &ldquo;walk&rdquo; accommodations at nearby hotels for guests with
          existing reservations, preserving the customer relationship.
        </li>
        <li>
          Accelerating repairs through overtime labor, expedited materials, or additional
          contractors to reduce the period of restoration.
        </li>
        <li>
          Enhanced marketing and advertising to rebuild bookings after the loss.
        </li>
        <li>
          Temporary relocation of restaurant or bar operations to an alternative space
          on the property.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The key to extra expense recovery is demonstrating that the expense was incurred to
        reduce the business income loss. Under the standard form, extra expenses are covered
        to the extent they reduce the business income loss &mdash; not to the extent they
        simply make the owner&rsquo;s life easier. Every extra expense should be documented
        with a clear explanation of how it reduced or avoided business income losses that
        would otherwise have been borne by the insurer.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Practical Coverage Checklist for Hotel Owners
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The following checklist highlights the coverage elements that every hotel should
        review with their broker or risk manager. These are the gaps that create the most
        significant financial exposure after a loss:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Business income coverage</strong> with a limit sufficient for at least
          12 months of gross revenue (18&ndash;24 months for larger properties). See{' '}
          <Link href="/resources/business-interruption" className="text-blue-700 underline hover:text-blue-900">
            Business Interruption
          </Link>.
        </li>
        <li>
          <strong>Extended period of indemnity</strong> of at least 365 days to cover the
          revenue ramp-up after reopening.
        </li>
        <li>
          <strong>Ordinance or law coverage</strong> (all three components) sufficient to
          cover ADA and building code upgrades. See{' '}
          <Link href="/resources/ordinance-law" className="text-blue-700 underline hover:text-blue-900">
            Ordinance or Law Coverage
          </Link>.
        </li>
        <li>
          <strong>Extra expense coverage</strong> with limits adequate for temporary
          relocation, accelerated repairs, and enhanced marketing. See{' '}
          <Link href="/resources/extra-expense-coverage" className="text-blue-700 underline hover:text-blue-900">
            Extra Expense Coverage
          </Link>.
        </li>
        <li>
          <strong>Equipment breakdown coverage</strong> for HVAC, elevators, kitchen
          equipment, laundry systems, and fire suppression systems. See{' '}
          <Link href="/resources/equipment-breakdown-coverage" className="text-blue-700 underline hover:text-blue-900">
            Equipment Breakdown Coverage
          </Link>.
        </li>
        <li>
          <strong>Liquor liability</strong> with limits appropriate for the hotel&rsquo;s
          largest anticipated event.
        </li>
        <li>
          <strong>Innkeeper&rsquo;s liability</strong> endorsement covering guest property
          in the hotel&rsquo;s care, custody, or control.
        </li>
        <li>
          <strong>Contamination/communicable disease</strong> coverage for bedbug, mold,
          legionella, and similar events. See{' '}
          <Link href="/resources/pollution-exclusion-claims" className="text-blue-700 underline hover:text-blue-900">
            Pollution Exclusion Claims
          </Link>.
        </li>
        <li>
          <strong>Business personal property coverage</strong> adequate for FF&amp;E
          (furniture, fixtures, and equipment), kitchen equipment, linens, and inventory. See{' '}
          <Link href="/resources/business-personal-property-claims" className="text-blue-700 underline hover:text-blue-900">
            Business Personal Property Claims
          </Link>.
        </li>
        <li>
          <strong>Franchise agreement compliance</strong> &mdash; verify that all coverage
          limits and endorsements satisfy the franchise agreement requirements, and that the
          franchisor is named as additional insured/loss payee as required.
        </li>
        <li>
          <strong>Protective safeguards compliance</strong> &mdash; ensure the policy&rsquo;s
          protective safeguards endorsement accurately reflects the systems in place and that
          maintenance records are current. See{' '}
          <Link href="/resources/protective-safeguards" className="text-blue-700 underline hover:text-blue-900">
            Protective Safeguards
          </Link>.
        </li>
        <li>
          <strong>Seasonal revenue documentation</strong> &mdash; maintain STR reports,
          daily flash reports, group pace reports, and historical revenue data so that
          the business income claim reflects actual seasonal revenue patterns.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Bottom Line: Hotels Are Not Standard Commercial Properties
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Every hotel loss is a race against time. Rooms not sold tonight are revenue lost
        forever &mdash; you cannot sell last Tuesday&rsquo;s room on Wednesday. The
        perishable nature of hotel revenue, combined with the operational complexity of
        running a hospitality property, means that the standard commercial property policy
        &mdash; designed for businesses that sell widgets from a warehouse &mdash; is
        fundamentally inadequate for hotels without significant modification.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your hotel has suffered a loss, do not accept the insurer&rsquo;s initial
        valuation without scrutiny. Challenge the period of restoration calculation.
        Document every revenue stream. Present the seasonal data. Invoke the extended
        period of indemnity. Ensure the franchise agreement requirements are factored
        into the reconstruction cost. And above all, get professional help early &mdash;
        hotel claims are too complex and too valuable to navigate alone.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Related Resources
      </h2>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          <Link href="/resources/business-interruption" className="text-blue-700 underline hover:text-blue-900">
            Business Interruption Coverage
          </Link>{' '}
          &mdash; A guide to business income claims, including calculation
          methodology and common insurer tactics.
        </li>
        <li>
          <Link href="/resources/period-of-restoration-disputes" className="text-blue-700 underline hover:text-blue-900">
            Period of Restoration Disputes
          </Link>{' '}
          &mdash; How insurers manipulate the period of restoration and the legal arguments
          available to policyholders.
        </li>
        <li>
          <Link href="/resources/pollution-exclusion-claims" className="text-blue-700 underline hover:text-blue-900">
            Pollution Exclusion Claims
          </Link>{' '}
          &mdash; When the pollution exclusion applies and when it does not, including
          contamination events in commercial properties.
        </li>
        <li>
          <Link href="/resources/ordinance-law" className="text-blue-700 underline hover:text-blue-900">
            Ordinance or Law Coverage
          </Link>{' '}
          &mdash; Understanding the three components of ordinance or law coverage and
          why it is essential for hotels facing code upgrades after a loss.
        </li>
        <li>
          <Link href="/resources/extra-expense-coverage" className="text-blue-700 underline hover:text-blue-900">
            Extra Expense Coverage
          </Link>{' '}
          &mdash; How to document and maximize extra expense claims when continuing
          operations during restoration.
        </li>
        <li>
          <Link href="/resources/business-personal-property-claims" className="text-blue-700 underline hover:text-blue-900">
            Business Personal Property Claims
          </Link>{' '}
          &mdash; Valuing and documenting business personal property losses, including
          FF&amp;E, equipment, and inventory.
        </li>
      </ul>
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
