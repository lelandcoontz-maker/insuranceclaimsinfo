import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Civil Authority Coverage, Ingress/Egress, and Utility Services in Commercial Insurance',
  description:
    'Civil authority coverage, ingress/egress endorsements, and utility service endorsements protect businesses when government orders, physical barriers, or utility failures cause income loss — even without damage to your own property. Learn the coverage triggers, ISO form numbers, and how to negotiate broader protection before the next disaster.',
  summary:
    'Civil authority, ingress/egress, and utility service endorsements can pay a business\'s lost income when a government order, blocked access, or utility failure halts operations, even without damage to your own property. Know the triggers and negotiate broader limits in advance.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational in nature and reflects the author&rsquo;s interpretation of
          California insurance law and ISO commercial property forms as a Licensed Public Adjuster.
          It is not legal advice. Civil authority, ingress/egress, and utility service claims involve
          complex coverage triggers, specific policy language, and fact-intensive circumstances. If
          you have a disputed commercial claim involving government orders, access restrictions, or
          utility failures, consult with a licensed California attorney who specializes in commercial
          insurance coverage disputes.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        Your building is undamaged. Your equipment works. Your inventory is intact. But your
        business is shut down anyway &mdash; because a government evacuation order prohibits you
        from entering your premises, because a mudslide has buried the only road to your building,
        or because the power company shut off electricity to your entire region and your refrigerated
        inventory is spoiling by the hour.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        These are not hypothetical scenarios for California businesses. They happen every wildfire
        season, every PSPS (Public Safety Power Shutoff) event, and every time a winter storm
        triggers a mudslide across a coastal highway. The financial losses are real and devastating.
        Whether your commercial property policy covers them depends on three distinct but related
        coverages: <strong>civil authority coverage</strong>, <strong>ingress/egress
        coverage</strong>, and <strong>utility services coverage</strong>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Each of these coverages addresses a different scenario, has different triggering requirements,
        and lives in a different part of your commercial policy. Getting them confused &mdash; or
        failing to purchase them before the disaster &mdash; can mean the difference between a fully
        covered claim and a denial letter.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Civil Authority Coverage: When the Government Shuts You Down
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Civil authority coverage is built into the standard ISO Business Income Coverage Form
        (CP 00 30) as an &ldquo;Additional Coverage.&rdquo; You do not need an endorsement to have
        it &mdash; if you have business income coverage under CP 00 30, you have civil authority
        coverage. But the coverage has strict triggering requirements that most business owners do
        not understand until their claim is denied.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        The Four Requirements
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        To trigger civil authority coverage, all four of the following conditions must be met:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>A civil authority &mdash; a governmental entity &mdash; issues an order or takes
          an action.</strong> This means an official government order: a mandatory evacuation,
          a curfew, a road closure by a government agency. A voluntary advisory or a
          recommendation to stay home does not qualify.
        </li>
        <li>
          <strong>The order must <em>prohibit</em> access to the insured premises.</strong> This is
          the word that generates more claim denials than any other in the civil authority provision.
          The standard ISO language requires that access be &ldquo;prohibited&rdquo; &mdash; not
          reduced, not restricted, not impaired. Prohibited. We will return to this critical
          distinction below.
        </li>
        <li>
          <strong>The order must be due to direct physical loss of or damage to property other than
          the insured premises.</strong> There must be actual physical damage to nearby property.
          In current ISO editions, &ldquo;nearby&rdquo; is defined as within one mile of the
          insured premises. The damage does not need to be at the insured&rsquo;s own property
          &mdash; in fact, the entire point of civil authority coverage is that it applies when the
          insured&rsquo;s own property is undamaged.
        </li>
        <li>
          <strong>The damage to the nearby property must be caused by a covered cause of loss.</strong>
          {' '}If the cause of loss form attached to your policy would not cover the type of damage
          that occurred to the nearby property, civil authority coverage does not apply. For example,
          if the nearby damage was caused by flood and your policy does not cover flood, the civil
          authority provision is not triggered. See our article on{' '}
          <Link href="/resources/cp-cause-of-loss-forms" className="text-[#2E74B5] underline hover:text-blue-900">
            commercial cause of loss forms
          </Link>{' '}
          for an explanation of which perils each form covers.
        </li>
      </ol>

      <CalloutBox variant="important" title="No Damage to Your Own Property Required">
        <p>
          This is one of the most commonly misunderstood aspects of civil authority coverage. The
          coverage specifically applies when <em>nearby</em> property &mdash; not the insured&rsquo;s
          own property &mdash; is damaged, and a government order closes access to the insured&rsquo;s
          premises as a result. If your own property is damaged, you have a standard business
          interruption claim. Civil authority coverage exists precisely for the situation where your
          building is fine but you cannot get to it.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        The 72-Hour Waiting Period
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Civil authority coverage does not begin immediately when the government order is issued. The
        standard ISO form imposes a <strong>72-hour waiting period</strong> after the first
        prohibitory action by a civil authority. Business income losses during those first 72 hours
        are not covered under the civil authority provision.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a three-day wildfire evacuation order, this waiting period can effectively eliminate the
        entire claim. The evacuation starts, 72 hours pass, and by the time coverage would begin,
        the order is lifted. This is why the duration of the government order matters so much and
        why the waiting period should be a negotiation point when purchasing or renewing commercial
        coverage.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Duration: Four Consecutive Weeks
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Once the 72-hour waiting period expires, civil authority coverage extends for up to{' '}
        <strong>four consecutive weeks</strong> in current ISO editions. Some older policy editions
        limit the duration to three consecutive weeks. Check your specific form edition date.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The four-week cap is absolute under the standard form. If a wildfire evacuation lasts six
        weeks, you are covered for weeks one through four (minus the initial 72 hours) and uncovered
        for weeks five and six. Manuscript endorsements can extend this period, and for businesses in
        high-risk wildfire zones, negotiating a longer civil authority period is essential.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        &ldquo;Prohibited&rdquo; vs. &ldquo;Impaired&rdquo;: The Word That Decides Your Claim
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The standard ISO civil authority language requires that the government action{' '}
        <strong>&ldquo;prohibit access&rdquo;</strong> to the insured premises. Courts have
        overwhelmingly interpreted this to mean <strong>complete prohibition</strong> &mdash; a
        total bar on entry. If you can still get to your building, even with difficulty, even with
        restrictions, most courts will hold that access is not &ldquo;prohibited&rdquo; within the
        meaning of the policy.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        What Does NOT Constitute Prohibited Access
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Reduced business hours.</strong> A government order requiring businesses to close
          by 8:00 PM does not prohibit access &mdash; it restricts access during certain hours.
        </li>
        <li>
          <strong>Capacity limitations.</strong> An order limiting a restaurant to 25 percent
          capacity does not prohibit access. Customers can still enter.
        </li>
        <li>
          <strong>Voluntary advisories.</strong> A government recommendation to avoid an area is
          not a prohibitory order.
        </li>
        <li>
          <strong>Partial closures.</strong> An order closing dine-in service but permitting
          takeout does not fully prohibit access to the premises.
        </li>
        <li>
          <strong>Supply chain disruptions.</strong> Inability to obtain goods or materials is not
          a prohibition on access to the insured&rsquo;s building. That is a contingent business
          interruption issue, not a civil authority issue.
        </li>
      </ul>

      <CalloutBox variant="warning" title="COVID-19 and the Prohibited Access Standard">
        <p>
          The COVID-19 pandemic generated thousands of civil authority coverage disputes. Business
          owners across the country argued that government stay-at-home orders and mandatory
          closures triggered their civil authority coverage. Most of these claims were
          denied, and courts overwhelmingly sided with carriers on two grounds: (1) there was no
          &ldquo;direct physical loss of or damage to&rdquo; nearby property, since the virus did
          not constitute physical damage under most policy language, and (2) even where some form of
          access restriction existed, many orders allowed essential activities, delivery, or pickup,
          meaning access was not completely &ldquo;prohibited.&rdquo; The pandemic exposed the
          coverage gap created by the word &ldquo;prohibited&rdquo; in ways that affected millions
          of businesses.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        The Critical Endorsement Opportunity: &ldquo;Impaired&rdquo; Access
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The single most valuable modification you can make to the civil authority provision is to
        amend the language from &ldquo;prohibited&rdquo; to &ldquo;impaired.&rdquo; Some insurers
        offer manuscript endorsements that broaden civil authority coverage to apply when a
        government action <strong>impairs</strong> access to the insured premises &mdash; not just
        when it completely prohibits access.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        With impaired-access language, partial restrictions, reduced hours, and capacity limitations
        can all trigger coverage. The business would recover for the <em>portion</em> of income lost
        due to the government restriction, even if the restriction does not amount to a complete ban.
        This is broader, more practical coverage that reflects how government orders actually work in
        the real world.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Not all carriers will offer this modification, and it may come with an additional premium.
        But for any California business in a wildfire zone, earthquake zone, or flood-prone area,
        the cost of this endorsement is trivial compared to the cost of discovering that your civil
        authority coverage does not apply because the evacuation order allowed limited access for
        property protection.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        California Wildfire Mandatory Evacuations
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Mandatory wildfire evacuation orders in California are where civil authority coverage becomes
        most critical &mdash; and most contentious. When the Sheriff or Cal Fire issues a mandatory
        evacuation order, access to the evacuation zone is generally prohibited for everyone except
        authorized emergency personnel. This typically satisfies the &ldquo;prohibited access&rdquo;
        standard.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        However, complications arise when:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          The initial order is a <strong>warning</strong> (voluntary) rather than a mandatory
          evacuation &mdash; the warning period may not trigger coverage even though most
          businesses effectively shut down.
        </li>
        <li>
          The evacuation order is lifted in stages, with some zones reopening before others &mdash;
          the carrier may argue coverage ends when <em>any</em> access is restored, even if the
          business cannot fully operate.
        </li>
        <li>
          Authorities allow business owners brief escorted access to retrieve essential items &mdash;
          the carrier may argue this means access was not truly &ldquo;prohibited.&rdquo;
        </li>
        <li>
          The property is within the one-mile radius but the actual fire damage occurred more than a
          mile away at the time the order was issued.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Document the exact wording and effective dates of every government order. Obtain copies of
        the official orders from the county sheriff, Cal Fire, or the Office of Emergency Services.
        These documents are the foundation of your civil authority claim.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Ingress/Egress Coverage: When You Cannot Physically Reach Your Building
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Ingress/egress coverage addresses a fundamentally different scenario from civil authority:
        not a government order, but a <strong>physical impediment</strong> that prevents access to
        or from the insured premises. Your building is undamaged, no government has issued any
        order, but you literally cannot get there because the road is flooded, a mudslide has
        blocked the only access route, a bridge has collapsed, or a fallen tree has barricaded the
        entrance to your property.
      </p>

      <CalloutBox variant="important" title="Ingress/Egress Is NOT Standard Coverage">
        <p>
          Unlike civil authority coverage, which is built into the standard ISO Business Income
          Coverage Form (CP 00 30), ingress/egress coverage is <strong>not</strong> included in any
          standard ISO commercial property form. It must be added by endorsement, included in a
          Time Element Extensions package, or written into a manuscript policy. If you do not have
          it, you do not have it &mdash; no matter how obvious it seems that a mudslide blocking
          the only road to your business should be a covered loss.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        How Ingress/Egress Differs from Civil Authority
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The key distinction is what causes the access problem:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Civil authority coverage</strong> requires a <em>government order</em>
          prohibiting access due to physical damage to nearby property caused by a covered peril.
        </li>
        <li>
          <strong>Ingress/egress coverage</strong> requires a <em>physical condition</em> that
          prevents or impairs access. No government order is needed. The physical barrier itself
          is the trigger.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        This distinction matters because many access-disruption scenarios involve physical
        impediments without any government order. A mudslide buries the access road to your
        business at 3:00 AM. No government order is issued &mdash; the road is simply impassable.
        Civil authority coverage does not apply because there is no government action. Without
        ingress/egress coverage, you have no claim for the business income you lose while the road
        is being cleared.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        &ldquo;Complete Prevention&rdquo; vs. &ldquo;Impairment&rdquo;
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Just as the word &ldquo;prohibited&rdquo; controls civil authority coverage, the scope of
        ingress/egress coverage depends on whether the endorsement requires{' '}
        <strong>complete prevention</strong> of access or merely <strong>impairment</strong> of
        access. Some endorsements require that ingress or egress be &ldquo;completely prevented.&rdquo;
        Others &mdash; better-negotiated forms &mdash; apply when access is &ldquo;prevented or
        impaired.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The difference is enormous in practice. If the main road to your business is closed but an
        alternate route exists that adds 45 minutes to the drive, is access &ldquo;completely
        prevented&rdquo;? Most courts would say no. But is it &ldquo;impaired&rdquo;? Absolutely
        &mdash; and if your customers cannot find you or will not make the detour, you are losing
        business income that an impairment-based endorsement would cover.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Common Ingress/Egress Triggers
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Mudslide or landslide blocking access roads (extremely common in coastal California after wildfires)</li>
        <li>Flooding of streets or parking areas that makes the premises physically unreachable</li>
        <li>Road collapse, sinkhole, or bridge failure cutting off the only access route</li>
        <li>Fallen trees, power lines, or debris blocking entrances and driveways</li>
        <li>Storm damage to a shared parking structure that serves as the only customer entry point</li>
        <li>Ice storms making access roads impassable (less common in California, but relevant for mountain communities)</li>
      </ul>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Where to Find Ingress/Egress Coverage
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Look for ingress/egress coverage in these locations:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Time Element Extensions endorsement packages.</strong> Some carriers bundle
          ingress/egress coverage with other time element enhancements (extended period of
          indemnity, extended business income, civil authority extensions) into a single package
          endorsement.
        </li>
        <li>
          <strong>Standalone ingress/egress endorsements.</strong> Available from some carriers as a
          separate endorsement added to the commercial property policy.
        </li>
        <li>
          <strong>Manuscript policy language.</strong> Larger commercial accounts with
          broker-negotiated manuscript forms may include ingress/egress coverage built into the base
          policy language.
        </li>
        <li>
          <strong>Difference-in-conditions (DIC) policies.</strong> Some DIC policies include
          ingress/egress provisions. See our article on{' '}
          <Link href="/resources/dic-policies" className="text-[#2E74B5] underline hover:text-blue-900">
            difference-in-conditions policies
          </Link>{' '}
          for more information.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Utility Services &mdash; Direct Damage (CP 04 17)
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The standard ISO Special Form (CP 10 30) <strong>excludes</strong> loss caused by utility
        service failure originating away from the insured premises. This means that if a power
        failure originates at the utility company&rsquo;s facility or on a transmission line miles
        from your building, and that failure causes physical damage to your property, the base
        policy does not cover it. The{' '}
        <strong>Utility Services &mdash; Direct Damage endorsement (CP 04 17)</strong> buys back
        this excluded coverage.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        What CP 04 17 Covers
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        CP 04 17 covers <strong>direct physical damage</strong> to the insured&rsquo;s property
        resulting from the interruption of utility services that originate off-premises. The key
        word is <em>direct damage</em> &mdash; actual physical harm to insured property caused by
        the utility interruption, not lost income.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Classic examples:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          A power failure causes the refrigeration system to shut down, and $200,000 in perishable
          food inventory spoils. The spoiled food is direct physical damage caused by the utility
          interruption.
        </li>
        <li>
          A power failure causes a sump pump to stop operating, and the resulting water backup
          damages equipment and inventory in a basement warehouse.
        </li>
        <li>
          An interruption in water service prevents a manufacturing facility&rsquo;s cooling system
          from operating, causing equipment to overheat and suffer physical damage.
        </li>
      </ul>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Selecting Your Utility Services
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        CP 04 17 is not a blanket endorsement. You must <strong>specifically elect</strong> which
        utility services you want covered. The endorsement schedule requires you to select from:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Water supply services</strong> &mdash; the utility that provides water to the
          insured premises
        </li>
        <li>
          <strong>Communication supply services</strong> &mdash; including telephone, internet,
          cellular, and satellite communication services
        </li>
        <li>
          <strong>Power supply services</strong> &mdash; including electricity, natural gas, steam,
          and other forms of energy
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you did not elect a particular service, the endorsement does not cover it. A restaurant
        that elected only power supply services but not water supply services would have no
        coverage for inventory losses caused by a water service interruption that prevented proper
        food preparation and storage.
      </p>

      <CalloutBox variant="warning" title="Overhead Transmission Lines: The Hidden Exclusion">
        <p>
          Even when you elect power supply services under CP 04 17, the endorsement{' '}
          <strong>excludes overhead transmission lines by default</strong> unless you specifically
          elect coverage for them. This is a separate election on the endorsement schedule. If a
          windstorm knocks down overhead power lines serving your building and the resulting power
          failure damages your property, you have no coverage unless you checked the box for
          overhead transmission lines. Given that overhead lines are by far the most common point of
          failure in the electrical grid, failing to elect this coverage renders the endorsement
          significantly less valuable.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Utility Services &mdash; Time Element (CP 15 45)
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        While CP 04 17 covers direct physical damage from utility interruptions, the{' '}
        <strong>Utility Services &mdash; Time Element endorsement (CP 15 45)</strong> covers the
        business income and extra expenses you incur during the interruption. Where CP 04 17 pays
        for the spoiled inventory, CP 15 45 pays for the revenue you lose while the power is out
        and you cannot operate.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        What CP 15 45 Covers
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        CP 15 45 covers <strong>lost business income</strong> and{' '}
        <strong>extra expenses</strong> resulting from the interruption of utility services
        originating off-premises. The structure mirrors CP 04 17 &mdash; you must select which
        utility services you want covered (water, communication, power) and must separately elect
        coverage for overhead transmission lines.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Practical example: A wildfire damages a PG&amp;E substation five miles from your business.
        Power is lost to the entire commercial district for five days. Your business cannot operate.
        Under CP 15 45 with power supply services and overhead lines elected, you can recover for
        five days of lost business income plus any extra expenses you incur &mdash; such as renting
        a generator &mdash; to continue or resume operations. For more on the extra expense
        component, see our article on{' '}
        <Link href="/resources/extra-expense-coverage" className="text-[#2E74B5] underline hover:text-blue-900">
          extra expense coverage
        </Link>.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Why You Need Both Endorsements
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        CP 04 17 and CP 15 45 cover different types of losses from the same event. Using the
        refrigeration example:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>CP 04 17 (Direct Damage)</strong> covers the value of the spoiled food inventory
          &mdash; the physical property that was destroyed because the power went out.
        </li>
        <li>
          <strong>CP 15 45 (Time Element)</strong> covers the revenue the business lost during the
          power outage while it could not serve customers, plus any extra expenses incurred to
          mitigate the shutdown.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Without CP 04 17, the spoiled inventory is uninsured. Without CP 15 45, the lost revenue
        during the outage is uninsured. A complete utility services protection strategy requires
        both endorsements with all relevant services elected, including overhead transmission
        lines.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        The Off-Premises Power Failure Exclusion in the Special Form
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        To understand why utility service endorsements are necessary, you must understand what the
        base policy excludes. The ISO Special Cause of Loss Form (CP 10 30) contains an exclusion
        for utility service failures that originate off-premises. Specifically, the base form
        excludes:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>The failure of power, communication, water, or other utility service</strong>{' '}
          supplied to the insured premises, when the failure originates away from the insured
          premises. If the power goes out because of a problem at the utility company&rsquo;s plant,
          a downed line three miles away, or a substation failure across town, the base policy
          excludes the resulting loss.
        </li>
        <li>
          <strong>Overhead transmission lines.</strong> Even if you purchase utility service
          endorsements, coverage for overhead transmission lines must be separately elected. The
          default position under both the base form and the endorsements is to exclude overhead
          lines.
        </li>
        <li>
          <strong>On-premises equipment receiving power from off-premises sources.</strong> If a
          piece of equipment on your premises is connected to the power grid and the grid fails,
          any damage to that equipment from the power interruption falls within the exclusion.
        </li>
        <li>
          <strong>Power surges.</strong> The base form specifically excludes damage caused by power
          surges, even if the surge originates from the utility provider&rsquo;s equipment. A
          lightning strike on a power line that sends a surge through your building&rsquo;s
          electrical system, frying computers and equipment, is excluded under the base Special
          Form. Equipment breakdown coverage (also known as boiler and machinery coverage) may
          address power surge damage &mdash; see our article on{' '}
          <Link href="/resources/equipment-breakdown-coverage" className="text-[#2E74B5] underline hover:text-blue-900">
            equipment breakdown coverage
          </Link>{' '}
          for details.
        </li>
      </ul>

      <CalloutBox variant="info" title="What the Endorsements Buy Back">
        <p>
          CP 04 17 and CP 15 45 do not create new coverage out of thin air. They{' '}
          <strong>buy back</strong> coverage that the base Special Form (CP 10 30) specifically
          excludes. Think of them as removing the off-premises utility exclusion for the services
          you elect. Without the endorsements, any utility failure that does not originate inside
          your building is excluded. With them, the coverage extends to failures originating at the
          utility provider&rsquo;s facilities, on transmission and distribution lines (if elected),
          and at any point between the utility source and your premises.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Real-World Scenarios: How These Coverages Apply
      </h2>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Scenario 1: California Wildfire Mandatory Evacuation
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A wildfire ignites in the hills above a commercial district. The county sheriff issues a
        mandatory evacuation order covering all properties within two miles of the fire line. Your
        restaurant is within the evacuation zone. Your building is undamaged &mdash; the fire never
        reaches your block &mdash; but the evacuation order remains in effect for twelve days.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Civil authority coverage applies.</strong> There is a government order (mandatory
        evacuation) that prohibits access to your premises. The nearby property damage (structures
        burned by the wildfire within one mile) was caused by a covered cause of loss (fire). After
        the 72-hour waiting period, you are covered for up to four consecutive weeks of lost
        business income. For a twelve-day evacuation, that means nine days of covered losses.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For more on how wildfires create cascading insurance issues, see our article on{' '}
        <Link href="/resources/wildfire-mudslide-coverage" className="text-[#2E74B5] underline hover:text-blue-900">
          wildfire and mudslide coverage
        </Link>.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Scenario 2: PSPS (Public Safety Power Shutoff) Event
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        PG&amp;E initiates a Public Safety Power Shutoff affecting your commercial district. Power
        is cut for four days to reduce wildfire risk during high-wind conditions. Your business
        cannot operate. Your refrigerated inventory spoils.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Civil authority coverage does NOT apply.</strong> A PSPS event is a utility
        company&rsquo;s operational decision, not a civil authority order prohibiting access to your
        premises. You can still physically access your building &mdash; you just have no power.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Utility service endorsements (CP 04 17 and CP 15 45) are your coverage.</strong>
        {' '}If you have both endorsements with power supply services elected, CP 04 17 covers the
        spoiled inventory (direct damage) and CP 15 45 covers the four days of lost business income
        (time element). But only if you also elected coverage for overhead transmission lines, since
        the shutoff is implemented by de-energizing the transmission and distribution system.
      </p>

      <CalloutBox variant="tip" title="PSPS Events and the Covered Cause of Loss Question">
        <p>
          A PSPS shutoff raises a subtle coverage question: is the utility interruption caused by a
          &ldquo;covered cause of loss&rdquo;? The utility is deliberately shutting off power as a
          preventive measure. Some carriers may argue that a deliberate shutoff is not a &ldquo;direct
          physical loss.&rdquo; Push back. The endorsement covers the interruption of utility
          services &mdash; it does not require that the interruption be caused by physical damage to
          the utility&rsquo;s equipment. Document the PSPS notification, the duration, and all
          resulting losses.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Scenario 3: Post-Wildfire Mudslide Blocking Access
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Three months after a major wildfire, winter rains trigger a massive mudslide across the
        only road leading to your business. No government evacuation order is issued &mdash; the
        road is simply buried under fifteen feet of mud and debris. Caltrans estimates it will take
        three weeks to clear. Your business is undamaged, but no customers or employees can reach
        it.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Civil authority coverage does NOT apply.</strong> There is no government order
        prohibiting access. The road is simply impassable.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Ingress/egress coverage is your only option.</strong> If you have an ingress/egress
        endorsement that covers situations where physical conditions prevent or impair access to
        the insured premises, the mudslide blocking the only access road is a covered event. The
        endorsement pays for the business income lost during the three weeks it takes to clear the
        road.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Without ingress/egress coverage, you have no claim.</strong> The base ISO forms do
        not cover this scenario. Civil authority does not apply. Standard business interruption does
        not apply because your property is undamaged. The only coverage that addresses this specific
        situation is an ingress/egress endorsement &mdash; and if you did not purchase it before the
        mudslide, it is too late.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        What to Demand from Your Broker Before the Next Disaster
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you are a California business owner &mdash; particularly in any area subject to wildfire,
        mudslide, flooding, or utility shutoffs &mdash; the following items should be on your
        renewal checklist:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Confirm civil authority coverage exists in your business income form.</strong>
          {' '}It should be included as an Additional Coverage under CP 00 30. Verify the waiting
          period (72 hours is standard) and the duration limit (four consecutive weeks in current
          editions).
        </li>
        <li>
          <strong>Request impaired-access language for civil authority.</strong> Ask your broker to
          obtain a manuscript endorsement that amends the civil authority provision to trigger when
          access is &ldquo;impaired,&rdquo; not just &ldquo;prohibited.&rdquo; Get the quote even
          if you decide not to buy it &mdash; at least you will know the cost.
        </li>
        <li>
          <strong>Add ingress/egress coverage.</strong> Verify whether your policy includes
          ingress/egress coverage by endorsement or manuscript language. If it does not, request it.
          Insist on language that covers &ldquo;prevention or impairment&rdquo; of access, not
          just &ldquo;complete prevention.&rdquo;
        </li>
        <li>
          <strong>Purchase both utility service endorsements.</strong> Add CP 04 17 (Direct Damage)
          and CP 15 45 (Time Element). These are not expensive relative to the coverage they
          provide.
        </li>
        <li>
          <strong>Elect ALL utility services.</strong> Do not skip water supply or communication
          services to save a few dollars. Elect power, water, and communication services on both
          endorsements.
        </li>
        <li>
          <strong>Elect overhead transmission lines.</strong> This is the election most often missed.
          Without it, the most common form of utility failure &mdash; downed or de-energized
          overhead lines &mdash; is excluded from both endorsements.
        </li>
        <li>
          <strong>Negotiate the civil authority duration.</strong> If your business is in a
          high-risk wildfire area where evacuations routinely last weeks, four consecutive weeks may
          not be enough. Ask your broker to negotiate an extension to eight or twelve weeks.
        </li>
        <li>
          <strong>Document your coverage in writing.</strong> Get written confirmation from your
          broker that all of these coverages are in place. If your broker tells you the carrier
          does not offer a particular endorsement, get that in writing too &mdash; it may become
          relevant in a broker negligence claim if you suffer an uninsured loss.
        </li>
      </ol>

      <CalloutBox variant="warning" title="Your Broker&rsquo;s Duty to Advise">
        <p>
          In California, an insurance broker who holds themselves out as having expertise in
          commercial property coverage may have a duty to advise you about available coverages
          &mdash; including civil authority enhancements, ingress/egress endorsements, and utility
          service endorsements. If your broker never mentioned these coverages and you suffer an
          uninsured loss that could have been covered, you may have a{' '}
          <Link href="/resources/broker-agent-liability" className="text-[#2E74B5] underline hover:text-blue-900">
            broker liability claim
          </Link>. This is especially true for businesses in high-risk California locations where
          these losses are foreseeable.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Summary: Matching the Coverage to the Scenario
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The three coverages discussed in this article address three distinct scenarios. Using the
        wrong coverage argument &mdash; or not having the right coverage at all &mdash; is the most
        common reason these claims fail.
      </p>
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border border-gray-300 text-sm text-gray-700">
          <thead>
            <tr className="bg-[#1F3964] text-white">
              <th className="border border-gray-300 px-4 py-2 text-left">Scenario</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Coverage</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Standard or Endorsement?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Government order closes access to your premises due to nearby damage</td>
              <td className="border border-gray-300 px-4 py-2">Civil Authority (CP 00 30)</td>
              <td className="border border-gray-300 px-4 py-2">Built-in Additional Coverage</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">Physical barrier prevents access &mdash; no government order</td>
              <td className="border border-gray-300 px-4 py-2">Ingress/Egress</td>
              <td className="border border-gray-300 px-4 py-2">Endorsement required</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Off-premises utility failure damages your property</td>
              <td className="border border-gray-300 px-4 py-2">Utility Services &mdash; Direct Damage (CP 04 17)</td>
              <td className="border border-gray-300 px-4 py-2">Endorsement required</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">Off-premises utility failure causes business income loss</td>
              <td className="border border-gray-300 px-4 py-2">Utility Services &mdash; Time Element (CP 15 45)</td>
              <td className="border border-gray-300 px-4 py-2">Endorsement required</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">PSPS power shutoff spoils inventory and shuts down operations</td>
              <td className="border border-gray-300 px-4 py-2">CP 04 17 + CP 15 45 (both needed)</td>
              <td className="border border-gray-300 px-4 py-2">Both endorsements required</td>
            </tr>
          </tbody>
        </table>
      </div>

      <CalloutBox variant="tip" title="Related Reading">
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>
            <Link href="/resources/business-interruption" className="text-[#2E74B5] underline hover:text-blue-900">
              Business Interruption Insurance Claims
            </Link>{' '}
            &mdash; the foundational coverage that civil authority, ingress/egress, and utility
            services extend
          </li>
          <li>
            <Link href="/resources/wildfire-mudslide-coverage" className="text-[#2E74B5] underline hover:text-blue-900">
              Wildfire and Mudslide Coverage
            </Link>{' '}
            &mdash; how the efficient proximate cause doctrine applies when wildfire triggers
            secondary losses
          </li>
          <li>
            <Link href="/resources/commercial-endorsements" className="text-[#2E74B5] underline hover:text-blue-900">
              Commercial Policy Endorsements
            </Link>{' '}
            &mdash; a complete guide to the endorsements that expand or restrict commercial
            property coverage
          </li>
          <li>
            <Link href="/resources/cp-cause-of-loss-forms" className="text-[#2E74B5] underline hover:text-blue-900">
              Commercial Cause of Loss Forms
            </Link>{' '}
            &mdash; understanding the Basic, Broad, and Special forms and how they determine
            whether your claim is covered
          </li>
          <li>
            <Link href="/resources/extra-expense-coverage" className="text-[#2E74B5] underline hover:text-blue-900">
              Extra Expense Coverage
            </Link>{' '}
            &mdash; the companion coverage that pays costs to keep operating during a shutdown
          </li>
        </ul>
      </CalloutBox>

      <div className="mt-12 p-6 bg-[#1F3964] rounded-lg text-center">
        <p className="text-white text-lg font-semibold mb-2">
          Business Closed by Government Order or Utility Failure?
        </p>
        <p className="text-blue-100 text-sm mb-4">
          Civil authority, ingress/egress, and utility service claims are frequently denied on technicalities. A Licensed Public Adjuster can evaluate your coverage and fight for the benefits your policy provides.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#C9A84C] text-white font-bold py-3 px-8 rounded hover:bg-yellow-600 transition"
        >
          Request a Free Consultation
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
