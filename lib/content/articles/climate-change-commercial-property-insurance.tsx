import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title:
    "Climate Change and Commercial Property Insurance",
  description:
    "How atmospheric rivers, extreme heat, wildfire smoke, debris flows, PSPS events, and the California availability crisis are reshaping commercial coverage.",
  summary:
    'Climate change is already reshaping commercial property coverage through wildfire smoke, debris flows, extreme heat, atmospheric rivers, and PSPS shutoffs, alongside California\'s availability crisis. Businesses should identify and fill coverage gaps before the next event.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational in nature and reflects the author&rsquo;s interpretation
          of California insurance law as a Licensed Public Adjuster. It is not legal advice.
          Climate-related coverage disputes involve rapidly evolving policy language,
          regulatory changes, and unsettled areas of law. If you have a disputed claim
          involving a climate-related loss, consult with a licensed California attorney who
          specializes in insurance coverage disputes.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        This is not a theoretical article about what might happen to commercial property
        insurance someday. It is about what is already happening &mdash; right now, to
        California businesses, in claims that are being filed, disputed, and litigated today.
        The climate has changed faster than insurance policy language, and the gap between
        what businesses expect their coverage to do and what carriers are willing to pay is
        growing wider every year.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Atmospheric rivers are flooding businesses in areas that were never considered flood
        zones. Extreme heat is destroying temperature-sensitive inventory in warehouses that
        never needed climate control. Wildfire smoke is infiltrating HVAC systems in commercial
        buildings 50 miles from the fire line. Post-wildfire debris flows are burying commercial
        properties under mud and rock that insurers call &ldquo;earth movement&rdquo; and
        refuse to cover. And behind all of it, carriers are leaving California entirely,
        non-renewing commercial policies by the thousands, and pricing the businesses that
        remain out of affordable coverage.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Atmospheric Rivers and the Flood Exclusion Gap
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California&rsquo;s commercial property policies universally exclude flood. The standard
        ISO CP 10 30 (Causes of Loss &mdash; Special Form) excludes &ldquo;flood, surface
        water, waves (including tidal wave and tsunami), tides, tidal water, overflow of any
        body of water, or spray from any of these, all whether or not driven by wind.&rdquo;
        This exclusion was written when flood was relatively predictable &mdash; rivers had
        floodplains, FEMA had maps, and businesses in low-risk zones could reasonably
        conclude they did not need flood coverage.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Atmospheric rivers have changed the calculus entirely. These massive corridors of
        moisture produce rainfall amounts that overwhelm drainage systems, create flash
        flooding in areas with no history of flooding, and turn dry creeks into raging
        torrents. The January and February 2024 atmospheric river events flooded commercial
        properties across Southern California that had never seen water intrusion in decades
        of operation. The businesses had no flood insurance because they were not in FEMA
        flood zones. Their commercial property policies excluded flood. They were left with
        nothing.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The coverage fight centers on the distinction between &ldquo;flood&rdquo; and
        &ldquo;rain.&rdquo; Rain entering through the roof or walls is typically a covered
        peril under commercial property policies. Water that accumulates on the ground and
        enters the building from below is &ldquo;flood&rdquo; and excluded. But atmospheric
        river events often involve both: water coming through the roof and water rising from
        the ground simultaneously. The carrier will attempt to attribute as much damage as
        possible to flood, while the policyholder should argue that the concurrent rain
        intrusion is independently covered. For more on the flood exclusion in commercial
        policies, see our article on{' '}
        <Link href="/resources/flood-exclusion-commercial" className="text-blue-700 underline hover:text-blue-900">
          the commercial flood exclusion
        </Link>.
      </p>

      <CalloutBox variant="warning" title="FEMA Maps Are Not Coverage Maps">
        <p>
          Being outside a FEMA-designated Special Flood Hazard Area does not mean your
          property cannot flood. FEMA maps reflect historical data and political decisions,
          not current climate reality. If your commercial property is anywhere near a
          watercourse, drainage channel, or low-lying area, you need flood coverage &mdash;
          regardless of what the FEMA map says.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Extreme Heat Events and Spoilage/Inventory Losses
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Extended heat waves are destroying commercial inventory in ways that existing policies
        were not designed to address. Warehouses without climate control &mdash; which never
        needed it before &mdash; are reaching internal temperatures that melt products, spoil
        food inventory, degrade pharmaceuticals, warp plastics, and destroy adhesives and
        chemicals. Outdoor storage yards are seeing heat damage to materials that were always
        stored outdoors without incident.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The coverage questions are significant:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Is heat damage a covered cause of loss?</strong> The Special Form covers
          &ldquo;risks of direct physical loss&rdquo; unless specifically excluded. Extreme
          heat is not specifically excluded. But carriers argue that gradual temperature
          effects are not &ldquo;direct physical loss&rdquo; &mdash; that the damage is the
          result of environmental conditions, not a sudden event. Policyholders should counter
          that a heat dome reaching 120&deg;F is as much a covered peril as a cold snap
          freezing pipes.
        </li>
        <li>
          <strong>Does the spoilage coverage endorsement respond?</strong> Many commercial
          policies include a spoilage coverage endorsement (ISO CP 04 40 or similar) that
          covers loss of perishable stock due to &ldquo;a change in temperature or humidity
          resulting from&rdquo; mechanical breakdown, contamination, or power outage. The
          key question is whether the heat event itself triggers coverage, or whether it only
          triggers coverage when it causes a secondary mechanical failure (e.g., an overwhelmed
          HVAC unit). For a detailed look, see our article on{' '}
          <Link href="/resources/spoilage-coverage" className="text-blue-700 underline hover:text-blue-900">
            spoilage coverage
          </Link>.
        </li>
        <li>
          <strong>Business interruption for heat closures.</strong> When extreme heat forces a
          business to close (either because the building is uninhabitable or because local
          authorities issue closure orders), the business interruption coverage should respond
          &mdash; but only if the closure results from &ldquo;direct physical loss of or
          damage to&rdquo; the covered property. The carrier will argue that being too hot
          to operate is not &ldquo;physical damage.&rdquo; The policyholder should argue
          that a building rendered uninhabitable by heat has suffered a loss of use that
          constitutes physical loss.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Wildfire Smoke Infiltration Miles from the Fire Line
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Wildfire smoke is an insidious peril. A commercial property can be 30, 50, or even
        100 miles from the nearest fire and still suffer significant smoke damage. Smoke
        particles infiltrate HVAC systems, contaminate inventory, permeate soft goods and
        fabrics, corrode electronics, and create indoor air quality conditions that make
        buildings uninhabitable. For restaurants, food processors, medical facilities, and
        clean-room operations, even modest smoke contamination can shut down operations.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The coverage landscape for smoke damage is surprisingly favorable to policyholders
        &mdash; if you know how to present the claim:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Smoke is a covered peril.</strong> The standard commercial property Special
          Form does not exclude smoke. Fire and its byproducts (including smoke) are covered
          causes of loss. The carrier cannot invoke a fire exclusion (there is none) and the
          pollution exclusion generally does not apply to smoke from a hostile fire.
          California reads pollution exclusions to reach only &ldquo;traditional environmental
          pollution&rdquo; rather than ordinary incidents involving harmful substances
          (<em>MacKinnon v. Truck Ins. Exch.</em> (2003) 31 Cal.4th 635), which supports the
          argument that wildfire-driven smoke infiltration is not excluded pollution. For
          more on smoke damage claims, see our article on{' '}
          <Link href="/resources/smoke-damage-claims" className="text-blue-700 underline hover:text-blue-900">
            smoke damage coverage
          </Link>.
        </li>
        <li>
          <strong>The distance from the fire does not matter.</strong> The policy covers smoke
          damage, not fire damage. The smoke does not need to come from a fire on or adjacent
          to your property. If wildfire smoke traveled 50 miles and damaged your inventory,
          the loss is covered just as it would be if the fire were next door.
        </li>
        <li>
          <strong>Business interruption for smoke-related closure.</strong> If smoke
          contamination renders your commercial property unusable &mdash; either because the
          air quality is dangerous or because the contamination requires professional
          remediation &mdash; the business interruption coverage should respond. The period
          of restoration begins when the smoke damage occurs and ends when the property is
          restored to usable condition.
        </li>
        <li>
          <strong>Civil authority coverage for evacuation zones.</strong> When authorities
          issue evacuation orders or air quality advisories that prevent access to your
          commercial property, the civil authority additional coverage in your policy may
          provide business income and extra expense coverage, even if your property itself
          was not damaged.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Post-Wildfire Flood and Debris Flow: The Exclusion Battle
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        One of the most devastating &mdash; and most contentious &mdash; climate-related
        perils is the debris flow that follows a wildfire. When fire denudes hillsides of
        vegetation, the subsequent rain events produce catastrophic mudflows and debris flows
        that can bury commercial properties under feet of mud, rock, and debris. The 2018
        Montecito debris flow, following the Thomas Fire, killed 23 people and destroyed
        or damaged hundreds of structures. Similar events following subsequent fires have
        affected commercial properties throughout fire-prone Southern California.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The coverage battle is predictable: carriers invoke both the flood exclusion and the
        earth movement exclusion. Policyholders argue that the debris flow is a direct
        consequence of a covered peril (fire) and should be covered as ensuing loss. For an
        in-depth analysis, see our article on{' '}
        <Link href="/resources/wildfire-mudslide-coverage" className="text-blue-700 underline hover:text-blue-900">
          wildfire and mudslide coverage
        </Link>{' '}
        and our article on{' '}
        <Link href="/resources/earth-movement-landslide" className="text-blue-700 underline hover:text-blue-900">
          earth movement and landslide exclusions
        </Link>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The legal arguments that favor the policyholder:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Efficient proximate cause.</strong> California&rsquo;s efficient proximate
          cause doctrine is anchored in Cal. Insurance Code &sect; 530 (with companion
          &sect;&sect; 532 and 530.5) and developed through <em>Sabella v. Wisler</em> (1963)
          59 Cal.2d 21, <em>Garvey v. State Farm</em> (1989) 48 Cal.3d 395, and <em>Howell v.
          State Farm</em> (1990) 218 Cal.App.3d 1446. When a covered peril (fire) sets in
          motion a chain of events that includes an excluded peril (earth movement or flood),
          and the covered peril is the &ldquo;efficient proximate cause&rdquo; (i.e., the
          predominant cause) of the loss, the entire loss is covered. The argument: but for
          the wildfire denuding the hillside, the debris flow would not have occurred. Fire
          is the efficient proximate cause.
        </li>
        <li>
          <strong>Ensuing loss provisions.</strong> Many commercial property policies contain
          an ensuing loss clause that states excluded perils (like earth movement) do not
          exclude coverage for &ldquo;any resulting loss&rdquo; from a covered peril. If fire
          is covered, and the debris flow is a &ldquo;resulting loss&rdquo; from the fire,
          coverage applies.
        </li>
        <li>
          <strong>Anti-concurrent causation clause limitations.</strong> Carriers rely on
          anti-concurrent causation clauses to argue that any involvement of an excluded peril
          bars coverage. Under <em>Howell</em> and <em>Julian v. Hartford Underwriters</em>
          (2005) 35 Cal.4th 747, such clauses are unenforceable in California to the extent
          they conflict with &sect; 530 and the efficient proximate cause doctrine &mdash;
          carriers can define and exclude perils, but they cannot contract around the
          statutory causation rule.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        PSPS Events and Business Interruption
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Public Safety Power Shutoff (PSPS) events &mdash; where utilities deliberately cut
        power to prevent wildfires during high-wind conditions &mdash; have become a recurring
        reality for California businesses. A PSPS event can last hours or days, and for
        businesses that depend on continuous power (restaurants, cold storage, manufacturing,
        data centers, medical facilities), the losses are immediate and significant.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The coverage questions for PSPS events:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Off-premises utility services coverage.</strong> Most commercial property
          policies include coverage for loss caused by interruption of utility services from
          an off-premises source. The standard ISO Off-Premises Services &mdash; Time Element
          endorsement (CP 15 45) covers business income loss when utility service is
          interrupted by a covered cause of loss at the utility&rsquo;s facility. A PSPS
          event is a deliberate shutoff, not a physical loss at the utility. The carrier will
          argue this is not covered. For details, see our article on{' '}
          <Link href="/resources/off-premises-utility-services" className="text-blue-700 underline hover:text-blue-900">
            off-premises utility services coverage
          </Link>.
        </li>
        <li>
          <strong>Spoilage during power shutoffs.</strong> When a PSPS event causes
          refrigeration failure, the spoilage endorsement should respond &mdash; but only if
          the endorsement covers power outage as a triggering event. Many spoilage endorsements
          are limited to mechanical breakdown of the refrigeration unit itself, not external
          power loss. Review the endorsement language carefully.
        </li>
        <li>
          <strong>Extra expense to maintain operations.</strong> Businesses that rent
          generators, relocate inventory, or take other measures to maintain operations during
          a PSPS event should look to the extra expense coverage in their policy. These costs
          are incurred to &ldquo;avoid or minimize the suspension of business&rdquo; and are
          typically covered if the underlying cause qualifies.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Insurance Availability Crisis
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Behind every coverage dispute is a more fundamental problem: the growing inability
        of California businesses to obtain commercial property insurance at all. Carriers are
        leaving the state, non-renewing policies in wildfire-prone areas, and pricing premiums
        at levels that make coverage unaffordable for small and mid-sized businesses.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The dynamics:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Carrier departures.</strong> Multiple major carriers have reduced their
          California commercial property portfolios or stopped writing new business entirely.
          The surplus lines (non-admitted) market is filling some gaps, but at significantly
          higher premiums and with fewer regulatory protections. For broader context, see our
          article on{' '}
          <Link href="/resources/california-insurance-crisis" className="text-blue-700 underline hover:text-blue-900">
            the California insurance crisis
          </Link>.
        </li>
        <li>
          <strong>Catastrophe modeling changes.</strong> Carriers have shifted from using
          historical loss data to forward-looking catastrophe models that incorporate climate
          projections. These models predict higher and more frequent losses, which drives
          premium increases, coverage restrictions, and non-renewals. The models are
          proprietary, their assumptions are opaque, and policyholders have no ability to
          challenge the inputs.
        </li>
        <li>
          <strong>Reinsurance cost pass-through.</strong> Global reinsurers have sharply
          increased the cost of catastrophe reinsurance for California-exposed portfolios.
          Primary carriers pass these costs directly to policyholders through premium increases
          and higher deductibles (including percentage-based deductibles for wildfire and
          earthquake, which can be 5&ndash;10% of the insured value).
        </li>
        <li>
          <strong>Coverage restriction.</strong> Even when policies are available, the terms
          are shrinking. Sub-limits for wildfire, higher wind/hail deductibles, expanded
          exclusions for water damage, and elimination of guaranteed replacement cost are
          all trends that reduce the effective coverage while maintaining or increasing the
          premium.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The DIC Policy as a Gap-Filler
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A Difference in Conditions (DIC) policy is specifically designed to fill gaps in
        standard commercial property coverage. DIC policies typically cover earthquake, flood,
        and other perils excluded from the base policy. In the climate-change context, a DIC
        policy can be the difference between a total uninsured loss and a covered claim. For
        a complete overview, see our article on{' '}
        <Link href="/resources/dic-policies" className="text-blue-700 underline hover:text-blue-900">
          Difference in Conditions policies
        </Link>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Key advantages of DIC policies for climate-related risks:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Flood coverage outside the NFIP.</strong> DIC policies can provide flood
          limits far exceeding the NFIP maximum and can cover properties that the NFIP will
          not insure or that have been rated out of affordability.
        </li>
        <li>
          <strong>Earthquake coverage.</strong> For businesses in earthquake-prone areas, a
          DIC policy may offer earthquake coverage at lower cost or higher limits than the
          California Earthquake Authority or the standalone earthquake market.
        </li>
        <li>
          <strong>Coverage for perils the base policy sublimits or excludes.</strong> When the
          base commercial property policy imposes a sub-limit on water damage, excludes
          certain types of earth movement, or restricts wildfire coverage, a properly
          structured DIC policy can fill those gaps.
        </li>
        <li>
          <strong>Broader &ldquo;all risk&rdquo; language.</strong> Some DIC policies use
          broader coverage language than the base policy, which can catch perils that fall
          through the gaps of the standard ISO forms.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Practical Steps for Climate-Resilient Coverage
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The gap between policy language written decades ago and current climate reality is
        not going to close on its own. Carriers are not voluntarily expanding coverage to
        address new perils &mdash; they are restricting it. Business owners must take
        affirmative steps to protect themselves:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Conduct a climate-specific coverage audit.</strong> Review your commercial
          property policy with a focus on climate-related exposures: flood, earth movement,
          smoke, extreme heat, power shutoff, and wildfire. Identify every exclusion,
          sub-limit, and deductible that applies to these perils.
        </li>
        <li>
          <strong>Obtain flood coverage even if you are not in a flood zone.</strong> FEMA
          flood zones are backward-looking. Atmospheric rivers do not respect zone boundaries.
          Private flood insurance, NFIP coverage, or a DIC policy with flood coverage should
          be part of every California commercial property program.
        </li>
        <li>
          <strong>Evaluate DIC coverage for gap-filling.</strong> A DIC policy can cover
          earthquake, flood, and other excluded perils at a fraction of the cost of a total
          loss. The premium for a DIC policy is almost always less than the cost of one
          uninsured event.
        </li>
        <li>
          <strong>Review spoilage and equipment breakdown endorsements.</strong> If your
          business has temperature-sensitive inventory or depends on continuous power, confirm
          that your spoilage endorsement covers external power failures (not just mechanical
          breakdown) and that your equipment breakdown coverage extends to HVAC systems under
          heat stress.
        </li>
        <li>
          <strong>Document your HVAC filtration and maintenance.</strong> For wildfire smoke
          claims, carriers will argue that smoke infiltration resulted from inadequate
          filtration or maintenance. Maintain records of filter changes, HVAC servicing, and
          air quality monitoring.
        </li>
        <li>
          <strong>Establish business continuity plans for PSPS events.</strong> If your
          business is in a PSPS-prone area, invest in backup power generation and document
          the cost. The extra expense of maintaining operations during a power shutoff may
          be covered under your policy, but you need to document the expense and tie it to
          the covered event.
        </li>
        <li>
          <strong>Start renewal discussions early.</strong> In the current California market,
          waiting until 30 days before renewal to address commercial property coverage is
          too late. Begin discussions with your broker 90&ndash;120 days before renewal to
          allow time to market the risk broadly and negotiate terms.
        </li>
      </ol>

      <CalloutBox variant="tip" title="Related Reading">
        <ul className="list-disc pl-4 space-y-1">
          <li>
            <Link href="/resources/flood-exclusion-commercial" className="text-blue-700 underline hover:text-blue-900">
              The Commercial Flood Exclusion
            </Link>{' '}
            &mdash; how the exclusion works and where the gaps are
          </li>
          <li>
            <Link href="/resources/spoilage-coverage" className="text-blue-700 underline hover:text-blue-900">
              Spoilage Coverage
            </Link>{' '}
            &mdash; protecting temperature-sensitive inventory
          </li>
          <li>
            <Link href="/resources/smoke-damage-claims" className="text-blue-700 underline hover:text-blue-900">
              Smoke Damage Claims
            </Link>{' '}
            &mdash; coverage for smoke infiltration from wildfires
          </li>
          <li>
            <Link href="/resources/wildfire-mudslide-coverage" className="text-blue-700 underline hover:text-blue-900">
              Wildfire and Mudslide Coverage
            </Link>{' '}
            &mdash; the efficient proximate cause argument for post-fire debris flows
          </li>
          <li>
            <Link href="/resources/earth-movement-landslide" className="text-blue-700 underline hover:text-blue-900">
              Earth Movement and Landslide Exclusions
            </Link>{' '}
            &mdash; fighting the earth movement exclusion
          </li>
          <li>
            <Link href="/resources/california-insurance-crisis" className="text-blue-700 underline hover:text-blue-900">
              The California Insurance Crisis
            </Link>{' '}
            &mdash; the broader availability and affordability problem
          </li>
          <li>
            <Link href="/resources/dic-policies" className="text-blue-700 underline hover:text-blue-900">
              Difference in Conditions Policies
            </Link>{' '}
            &mdash; the most versatile gap-filling tool available
          </li>
          <li>
            <Link href="/resources/off-premises-utility-services" className="text-blue-700 underline hover:text-blue-900">
              Off-Premises Utility Services Coverage
            </Link>{' '}
            &mdash; coverage for power shutoffs and utility failures
          </li>
        </ul>
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
