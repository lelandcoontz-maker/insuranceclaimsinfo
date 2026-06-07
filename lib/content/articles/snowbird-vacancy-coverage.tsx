import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Seasonal and Snowbird Properties: The Six-Month Vacancy Problem',
  description:
    'Retirees who split time between two homes face unique insurance traps: vacancy exclusions, the "where you reside" definition, frozen pipe denials, and mismatched policy types. Learn how the six-month vacancy problem works, what endorsements exist, and how to protect your seasonal property.',
  summary:
    'Owners who split time between two homes risk vacancy and unoccupancy exclusions that can gut coverage when a home sits empty for months. Know your policy\'s vacancy rules and consider an endorsement to protect a seasonal or snowbird property.',
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
        Every winter, millions of Americans leave their primary homes and migrate to warmer
        climates. They are called &ldquo;snowbirds&rdquo; &mdash; retirees and seasonal residents
        who spend four to six months in Arizona, Florida, Texas, or another sun-belt state, then
        return to their northern homes when the weather breaks. It is a lifestyle that makes
        perfect sense. It also creates an insurance nightmare that most snowbirds discover only
        after a loss.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The problem is structural. A standard homeowner&rsquo;s insurance policy was designed for
        a home where someone lives year-round. When you leave a home empty for half the year, you
        may be triggering <strong>vacancy exclusions</strong>, violating the{' '}
        <strong>&ldquo;where you reside&rdquo; definition</strong>, or breaching protective
        safeguard conditions &mdash; any one of which can eliminate your coverage when you need it
        most. The fact that you faithfully paid premiums on that property every month you were
        away will not matter if the insurer decides the policy&rsquo;s conditions were not met at
        the time of the loss.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This article examines the specific insurance risks facing snowbird and seasonal property
        owners, the policy language that creates those risks, what courts have said about them,
        and the concrete steps you can take to protect yourself. If you own two homes and split
        your time between them, this article is written for you.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Three Coverage Traps Snowbirds Face
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A snowbird who leaves a home empty for an extended period faces not one but three distinct
        policy provisions that can independently destroy coverage:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>The vacancy exclusion:</strong> If the home has been &ldquo;vacant&rdquo; for
          more than 60 consecutive days before a loss, the policy suspends coverage for certain
          perils entirely and reduces coverage for others by 15 percent.
        </li>
        <li>
          <strong>The &ldquo;where you reside&rdquo; definition:</strong> The ISO HO-3 policy
          defines &ldquo;residence premises&rdquo; as the dwelling &ldquo;where you reside.&rdquo;
          If you are residing in Arizona for six months, your Michigan home may no longer qualify
          as a &ldquo;residence premises&rdquo; &mdash; and without that designation, virtually
          all coverage under the policy evaporates.
        </li>
        <li>
          <strong>Protective safeguard and maintenance conditions:</strong> Many policies require
          the homeowner to maintain heat during winter months, have the property checked
          periodically, or maintain functioning alarm systems. A snowbird who shuts down the
          house and leaves for half a year may be violating these conditions without realizing it.
        </li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        Each of these traps operates independently. An insurer does not need all three to deny
        your claim &mdash; it only needs one. And when a loss occurs at a property that has been
        empty for months, the insurer&rsquo;s claims department will examine all three.
      </p>

      <CalloutBox variant="warning" title="The Compounding Problem">
        <p>
          These three coverage traps do not merely exist side by side &mdash; they reinforce each
          other. When an insurer investigates a loss at a snowbird property, the extended absence
          that triggers the vacancy clause also supports the argument that you were not
          &ldquo;residing&rdquo; at the property. And the fact that you were not present to
          maintain the home supports the argument that protective safeguard conditions were
          breached. A single period of seasonal absence can give the insurer three independent
          bases to deny your claim.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Vacant vs. Unoccupied: The Critical Distinction for Seasonal Homes
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The most important distinction in this area of insurance law is the difference between
        &ldquo;vacant&rdquo; and &ldquo;unoccupied.&rdquo; These words are not interchangeable.
        Courts across the country have consistently held that they mean fundamentally different
        things, and the difference is almost always dispositive for a snowbird&rsquo;s claim.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Vacant</strong> means the property is stripped of its contents &mdash; empty of
        both people and personal property. A vacant building contains no furnishings, no
        belongings, no indication that anyone lives there or intends to return.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Unoccupied</strong> means nobody is currently present, but the home is still
        furnished and set up for habitation. The owner&rsquo;s belongings are inside. The
        furniture is in place. The kitchen is stocked. The closets have clothes. The owner is
        simply away.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This distinction is the snowbird&rsquo;s best friend, because a properly maintained
        seasonal home is <em>unoccupied</em>, not <em>vacant</em>. The{' '}
        <Link href="/resources/vacancy-unoccupancy" className="text-[#2E74B5] hover:underline">
          vacancy exclusion
        </Link>{' '}
        applies only to <strong>vacant</strong> properties. If your seasonal home has furniture,
        personal effects, kitchen supplies, linens, and the normal contents of a functioning
        household, it is unoccupied &mdash; and the vacancy clause should not apply regardless
        of how many months you have been away.
      </p>

      <CalloutBox variant="important" title="The Sufficient Furnishings Test">
        <p>
          Courts evaluate whether a property is &ldquo;vacant&rdquo; or &ldquo;unoccupied&rdquo;
          by examining whether the contents inside suggest the property is set up for habitation.
          This is sometimes called the &ldquo;sufficient furnishings&rdquo; test. A home with
          bedroom furniture, a functioning kitchen, a living room with seating, personal items in
          closets and drawers, and family photographs on the walls is unoccupied, not vacant. A
          home with a single mattress, a folding chair, and a microwave may not pass the test. For
          snowbirds, the key is this: <strong>do not strip your seasonal home before you
          leave</strong>. Keep it furnished. Keep personal belongings in it. Keep it looking like
          a home where someone lives &mdash; because that is exactly what it is.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The ISO HO-3 Vacancy Conditions and the 60-Day Rule
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The standard ISO HO-3 homeowner&rsquo;s policy &mdash; the most widely sold form in the
        United States &mdash; contains a vacancy provision that suspends or reduces coverage when
        the dwelling has been &ldquo;vacant&rdquo; for more than 60 consecutive days before a
        loss. The specific consequences are:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Complete exclusion</strong> of coverage for vandalism, malicious mischief,
          building glass breakage, water damage (including burst pipes and leaking appliances),
          and theft.
        </li>
        <li>
          <strong>15 percent reduction</strong> in the amount payable for all other covered
          perils, including fire from natural causes and windstorm.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Note what the vacancy clause does <em>not</em> do: it does not eliminate all coverage.
        It eliminates coverage for specific perils and reduces it for others. A fire caused by
        lightning at a vacant home is still a covered loss &mdash; just reduced by 15 percent.
        Policyholders and adjusters sometimes treat the vacancy clause as a blanket exclusion,
        but that misreads the standard policy form.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some policies use a 30-day threshold instead of 60 days, and non-standard policy forms
        &mdash; particularly{' '}
        <Link href="/resources/california-fair-plan" className="text-[#2E74B5] hover:underline">
          FAIR Plan policies
        </Link>{' '}
        and certain dwelling fire policies &mdash; may define vacancy differently or impose
        harsher penalties. Always read the specific vacancy language in your policy.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Why the 60-Day Rule Usually Does Not Apply to Snowbirds
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here is the critical point that many snowbirds &mdash; and many insurance adjusters
        &mdash; miss: <strong>the 60-day rule applies to vacancy, not to unoccupancy</strong>.
        A snowbird who leaves a fully furnished home and flies to Arizona for five months has
        left an <em>unoccupied</em> home, not a <em>vacant</em> one. The furniture is there.
        The personal belongings are there. The home is set up for habitation. The owner intends
        to return.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Courts have been remarkably consistent on this point. In <em>Langill v. Vermont Mutual
        Insurance Co.</em>, 268 F.3d 46 (1st Cir. 2001), the First Circuit noted that the
        &ldquo;sparse inventory of chairs, mattress, and step ladder did not advance the
        approximation to an inhabited abode.&rdquo; But a fully furnished vacation home is the
        polar opposite of the <em>Langill</em> scenario. A seasonal home with complete household
        furnishings throughout is precisely the kind of property that courts classify as
        unoccupied rather than vacant.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The &ldquo;Where You Reside&rdquo; Problem for Snowbirds
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Even if the vacancy clause does not apply to a furnished seasonal home, the snowbird
        faces a second and potentially more dangerous coverage trap: the{' '}
        <Link href="/resources/where-you-reside-exclusion" className="text-[#2E74B5] hover:underline">
          &ldquo;where you reside&rdquo; definition
        </Link>{' '}
        in the HO-3 policy. The standard ISO homeowner&rsquo;s policy defines &ldquo;residence
        premises&rdquo; as the one-family dwelling <strong>&ldquo;where you
        reside&rdquo;</strong> and which is shown as the described location on the declarations
        page.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a snowbird, the question becomes: which home do you &ldquo;reside&rdquo; at? If you
        spend October through April in Scottsdale and May through September in Minneapolis, the
        insurer on your Minneapolis policy may argue that you do not &ldquo;reside&rdquo; at the
        Minneapolis home during the winter months. Under a proscriptive reading of the policy
        language, this would mean the Minneapolis home is not a &ldquo;residence premises&rdquo;
        during the period you are away &mdash; and without that designation, Coverage A through
        Coverage F all fail.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Multiple-Residence Argument
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The strongest argument available to snowbirds is that a person can &ldquo;reside&rdquo;
        at more than one location. Multiple courts have endorsed this principle. In{' '}
        <em>Craft v. New York Central Mutual Fire Insurance Co.</em>, 164 A.D.3d 1120 (N.Y.
        App. Div. 3d Dep&rsquo;t 2018), the court held that the term &ldquo;reside&rdquo; was
        not defined in the policy and that an insured <strong>may have more than one
        &ldquo;residence&rdquo; for insurance purposes</strong>, with the property at issue
        still qualifying as a residence even if not the exclusive or primary home. The
        Illinois Court of Appeals reached a similar conclusion in <em>Lundquist v. Allstate
        Insurance Co.</em>, 314 Ill. App. 3d 240 (2000), one of the leading
        residence-premises cases. The principle is broadly recognized in the case law on
        residence-premises language for homeowner policies.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For snowbirds, this principle is directly applicable. You reside in Minneapolis in the
        summer and in Scottsdale in the winter. Both are your residences. The fact that you are
        not physically present at one of them at any given moment does not mean you have stopped
        residing there &mdash; it means you are temporarily at your other residence. You
        maintain belongings at both homes. You intend to return to both. You have not abandoned
        either one.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Contra Proferentem Argument
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The term &ldquo;reside&rdquo; is almost never defined in the policy itself. This
        omission creates ambiguity, and under the doctrine of <em>contra proferentem</em>,
        ambiguous policy language must be construed against the insurer who drafted it. If
        &ldquo;reside&rdquo; can reasonably mean &ldquo;maintain as one of your homes&rdquo;
        rather than &ldquo;physically sleep there every night,&rdquo; the pro-coverage
        interpretation prevails. In <em>Dean v. Tower Insurance Co. of New York</em>, 19
        N.Y.3d 704 (N.Y. 2012), the New York Court of Appeals reversed summary judgment for
        the insurer because the insured&rsquo;s alleged misrepresentation about residing at
        the premises could not be deemed material as a matter of law on the record, with the
        meaning and application of &ldquo;reside&rdquo; presenting fact-intensive issues.
      </p>

      <CalloutBox variant="tip" title="The Estoppel Argument">
        <p>
          If your insurer knows you are a snowbird &mdash; because you told your agent, because
          you have two policies with the same company, or because they have been insuring both
          properties for years &mdash; and they continue to accept your premiums without
          disclaiming coverage, a powerful estoppel argument exists. An insurer that accepts
          premiums with knowledge of an insured&rsquo;s living arrangement may be precluded from
          later denying coverage on the basis of that same arrangement. Estoppel arguments are
          fact-intensive and depend on what the insurer actually knew and how it acted on that
          knowledge.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        ISO Endorsements HO 06 48 and HO 06 49: The Industry&rsquo;s Fix
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurance industry itself has acknowledged that the &ldquo;where you reside&rdquo;
        language creates an unfair coverage gap. In 2015, the Insurance Services Office (ISO)
        issued a countrywide revision to address the problem through two endorsements.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        HO 06 48: Residence Premises Definition Endorsement
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This <strong>mandatory</strong> endorsement, effective October 1, 2015 in most states,
        modifies the definition of &ldquo;residence premises&rdquo; so that the &ldquo;where you
        reside&rdquo; requirement is evaluated only <strong>&ldquo;on the inception date of the
        policy period shown in the Declarations.&rdquo;</strong> Once the policy incepts, the
        insured can leave &mdash; to another home, to another state, anywhere &mdash; and the
        property remains a &ldquo;residence premises&rdquo; for the remainder of that policy
        period.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For snowbirds, this is enormously helpful. If you are at your northern home when the
        policy renews in July, the residency requirement is satisfied. You can then leave for
        Arizona in October and the Minneapolis home remains a &ldquo;residence premises&rdquo;
        through the following July. As long as you are present at the home on the policy
        inception date, coverage is locked in for the full policy period.
      </p>

      <CalloutBox variant="warning" title="The HO 06 48 Timing Trap">
        <p>
          The HO 06 48 endorsement requires residency <strong>at the inception of each policy
          period</strong>. If your policy renews while you are away &mdash; say, your
          Minneapolis policy renews in February while you are in Scottsdale &mdash; the
          endorsement may not protect you. You were not &ldquo;residing&rdquo; at the
          Minneapolis home on the inception date. This makes the <strong>policy renewal
          date</strong> important for snowbirds. Work with your agent to ensure
          your northern home&rsquo;s policy renews during the months you are actually present
          at that home.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        HO 06 49: Broadened Residence Premises Definition Endorsement
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This <strong>optional</strong> endorsement goes further. It allows the insurer and
        policyholder to designate specific starting and termination dates during which the
        residency requirement is suspended entirely. It was designed for situations where the
        owner does not reside at the home at policy inception &mdash; homes being remodeled,
        transitional periods, and extended absences including seasonal migration.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The availability of HO 06 49 varies by carrier and by state. Not all insurers offer it,
        and not all agents know to ask for it. But for a snowbird whose policy renewal date falls
        during the months they are away, this endorsement can bridge the gap that HO 06 48
        leaves open.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Water Damage Time Bomb: Frozen Pipes in an Empty Home
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Of all the perils that threaten a snowbird&rsquo;s empty home, none is more common or
        more devastating than{' '}
        <Link href="/resources/water-damage-claims" className="text-[#2E74B5] hover:underline">
          water damage from frozen pipes
        </Link>
        . The scenario is painfully familiar: a snowbird leaves their northern home in October,
        reduces the thermostat setting to save energy, and flies south. In January, a furnace
        malfunction or an unusually severe cold snap drops the interior temperature below
        freezing. Pipes burst. Water flows &mdash; sometimes for days or weeks before anyone
        discovers it. By the time the damage is found, the loss can be catastrophic: saturated
        drywall, buckled flooring, destroyed personal property, and extensive{' '}
        <Link href="/resources/mold-losses" className="text-[#2E74B5] hover:underline">
          mold growth
        </Link>{' '}
        throughout the structure.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When the snowbird files a claim, the insurer has multiple avenues of attack:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Vacancy exclusion:</strong> The insurer argues the home was &ldquo;vacant&rdquo;
          for more than 60 days, and water damage is one of the specifically excluded perils during
          vacancy. If the home was truly vacant (stripped of contents), this argument has teeth. If
          the home was merely unoccupied (furnished and maintained), the vacancy clause should not
          apply.
        </li>
        <li>
          <strong>Failure to maintain heat:</strong> Many policies contain a provision requiring the
          insured to &ldquo;use reasonable means to protect the property from further damage at and
          after the time of the loss&rdquo; and, more specifically, to &ldquo;maintain heat in the
          building&rdquo; or &ldquo;shut off the water supply and drain all systems and
          appliances of water&rdquo; if the building will be unattended during the heating season.
          If the snowbird neither maintained adequate heat nor drained the plumbing system, the
          insurer will argue that this condition was breached.
        </li>
        <li>
          <strong>&ldquo;Where you reside&rdquo; defense:</strong> The insurer argues that the
          home is not a &ldquo;residence premises&rdquo; because you were residing in Arizona at
          the time of the loss.
        </li>
      </ul>

      <CalloutBox variant="important" title="The Frozen Pipe Policy Condition">
        <p>
          The standard ISO HO-3 policy contains a condition that reads substantially as follows:
          &ldquo;If the building or structure will be unattended for a period of time, you will
          use reasonable care to: (a) maintain heat in the building; or (b) shut off the water
          supply and drain all systems and appliances of water.&rdquo; This is an either/or
          requirement. You must do <strong>one or the other</strong>. If you maintain heat at a
          level sufficient to prevent freezing (most experts recommend no lower than 55&deg;F),
          you have satisfied the condition even if you did not drain the plumbing. If you drain
          the plumbing system completely, you have satisfied the condition even if you turn off the
          heat entirely. But if you do neither &mdash; setting the thermostat to 45&deg;F without
          draining the pipes &mdash; and the pipes freeze, the insurer has a legitimate argument
          that the condition was not met.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Protecting Against Frozen Pipe Claims
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The frozen pipe scenario is largely preventable, and taking preventive steps also
        strengthens your coverage position if a loss occurs despite your best efforts:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Maintain adequate heat.</strong> Set the thermostat to at least 55&deg;F. Some
          policies and some insurers recommend 65&deg;F. Higher is safer, and the additional
          heating cost is trivial compared to the potential loss.
        </li>
        <li>
          <strong>Install a water leak detection system with remote monitoring.</strong> Modern
          smart home devices can monitor temperature and water flow, and alert you via smartphone
          if the temperature drops or a leak is detected. Some insurers offer premium discounts
          for these devices. More importantly, they demonstrate that you took &ldquo;reasonable
          care&rdquo; to protect the property.
        </li>
        <li>
          <strong>Have someone check the property regularly.</strong> A neighbor, a property
          management company, or a trusted friend should physically inspect the home at least
          weekly during winter months. Document every visit with a written log or photographs.
        </li>
        <li>
          <strong>Alternatively, drain the plumbing system entirely.</strong> If you prefer not
          to maintain heat, have a plumber drain all pipes, water heaters, and appliances of
          water and apply antifreeze to drain traps. This fully satisfies the policy condition
          and eliminates the frozen pipe risk. Keep the plumber&rsquo;s invoice as proof.
        </li>
        <li>
          <strong>Do not shut off the water supply without draining the system.</strong> Shutting
          off the main water valve without draining the pipes does not prevent freezing &mdash;
          the water already in the pipes will still freeze and expand. The supply must be shut
          off <em>and</em> the system must be drained.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Seasonal Dwelling Endorsements: What They Cover and What They Do Not
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some insurers offer <strong>seasonal dwelling endorsements</strong> or{' '}
        <strong>seasonal occupancy endorsements</strong> specifically designed for homes that are
        occupied only part of the year. These endorsements acknowledge the seasonal nature of
        the occupancy and modify the policy accordingly. However, their availability and terms
        vary significantly by insurer and by state.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A typical seasonal dwelling endorsement may:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Suspend the vacancy clause for the policy period, recognizing that the home will be
          unoccupied during certain months.
        </li>
        <li>
          Impose specific maintenance requirements during the unoccupied period, such as
          maintaining heat, having the property inspected periodically, or shutting off and
          draining the water supply.
        </li>
        <li>
          Limit or exclude certain perils during the unoccupied season &mdash; for example,
          excluding theft coverage during the months the home is empty, while maintaining fire
          and windstorm coverage.
        </li>
        <li>
          Require the insured to notify the insurer of the dates the home will be unoccupied.
        </li>
      </ul>

      <CalloutBox variant="info" title="What Seasonal Endorsements Typically Do Not Do">
        <p>
          A seasonal dwelling endorsement does not solve the &ldquo;where you reside&rdquo;
          problem. It modifies the vacancy provisions, but the policy&rsquo;s definition of
          &ldquo;residence premises&rdquo; &mdash; with its residency requirement &mdash; is a
          separate issue. A seasonal endorsement addresses one coverage trap but leaves the other
          intact. You need to address <em>both</em>. The HO 06 48 or HO 06 49 endorsement
          addresses the residency definition; the seasonal endorsement addresses the vacancy
          conditions. Both may be needed.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Dwelling Fire Policy Conversion: When the Snowbird Should Switch from HO-3 to DP-3
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When the endorsement solutions are insufficient or unavailable, the snowbird should
        consider converting the seasonal home from a homeowner&rsquo;s policy (HO-3) to a{' '}
        <strong>dwelling fire policy (DP-3)</strong>. This is not a downgrade &mdash; it is a
        different product designed for a different situation, and in many cases it provides
        more appropriate coverage for a seasonal property.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        What the DP-3 Policy Offers
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The DP-3 (Dwelling Property &mdash; Special Form) is an open-perils policy that covers
        the dwelling structure against all risks of direct physical loss unless specifically
        excluded. It does <strong>not</strong> require the named insured to reside at the
        property. This eliminates the &ldquo;where you reside&rdquo; problem entirely.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The DP-3 is the standard product for:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Rental properties where the owner does not reside</li>
        <li>Seasonal and vacation homes occupied only part of the year</li>
        <li>Properties held in trust or by estates where the named insured cannot reside</li>
        <li>Homes being prepared for sale after the owner has moved out</li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Key Differences Between HO-3 and DP-3 for Snowbirds
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Before switching from an HO-3 to a DP-3, snowbirds should understand what they gain
        and what they lose:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>No residency requirement (gain):</strong> The DP-3 does not define coverage
          through a &ldquo;residence premises&rdquo; concept. The property is insured as a
          dwelling, period. You do not need to reside there.
        </li>
        <li>
          <strong>Personal property coverage is named-perils (potential limitation):</strong> While
          the DP-3 provides open-perils coverage on the dwelling itself, personal property coverage
          (if included) is typically on a named-perils basis. This is narrower than the HO-3, which
          provides named-perils personal property coverage but covers the dwelling on an open-perils
          basis.
        </li>
        <li>
          <strong>No personal liability coverage (potential gap):</strong> The DP-3 does not
          include personal liability (Coverage E) or medical payments (Coverage F) coverage. If
          someone is injured at the seasonal property, you would need a separate{' '}
          <strong>personal liability policy</strong> or an <strong>umbrella policy</strong> to
          be covered. Your primary home&rsquo;s HO-3 policy may extend some liability coverage
          to other properties you own, but this varies by insurer and by policy form.
        </li>
        <li>
          <strong>Loss of use may be limited (potential gap):</strong> Loss of use coverage
          (Coverage D) on a DP-3 may be more limited than on an HO-3, or may not be available at
          all for a property where you do not reside.
        </li>
        <li>
          <strong>The vacancy clause still exists (no complete escape):</strong> The DP-3
          typically contains its own vacancy clause, though the threshold and consequences may
          differ from the HO-3. Converting to a DP-3 eliminates the residency problem but does
          not automatically eliminate the vacancy problem. The furnished-vs.-vacant distinction
          still matters.
        </li>
      </ul>

      <CalloutBox variant="tip" title="The Hybrid Approach">
        <p>
          Some snowbirds maintain an HO-3 on their primary residence (the home where they spend
          the majority of the year) and a DP-3 on their seasonal home. This ensures that the
          primary residence has full homeowner coverage including liability, while the seasonal
          home has appropriate dwelling coverage without the residency requirement. An umbrella
          policy that covers both properties provides the liability layer for the seasonal home.
          This hybrid approach is often the most cost-effective and coverage-appropriate solution.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Insurance for Second Homes vs. Primary Residences
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance carriers rate and underwrite second homes differently from primary residences.
        Understanding these differences is essential for snowbirds, because the way you
        <em> describe</em> the property to your insurer determines the policy you receive, the
        premium you pay, and the coverage you get.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        How Carriers Classify Properties
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most insurers classify residential properties into one of three categories:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Primary residence:</strong> The home where you live most of the year. This
          receives the most favorable underwriting treatment and the broadest coverage. The
          standard HO-3 is designed for this category.
        </li>
        <li>
          <strong>Secondary or seasonal residence:</strong> A home you own and use periodically
          but do not live in full-time. This typically receives different underwriting treatment
          &mdash; higher premiums, different deductibles, and potentially more restrictive
          coverage. Some carriers will write an HO-3 for a seasonal home; others will only
          offer a DP-3 or a specialized seasonal home policy.
        </li>
        <li>
          <strong>Rental or investment property:</strong> A home you own but do not occupy, which
          is rented to tenants. This is written on a DP-3 or landlord policy and receives the
          most restrictive underwriting treatment.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        A snowbird&rsquo;s seasonal home falls into the second category. The problem arises when
        the snowbird obtains or maintains an HO-3 (primary residence policy) on a property that
        the insurer has classified &mdash; or should have classified &mdash; as a secondary
        residence. If the insurer later determines that the property was not the insured&rsquo;s
        primary residence, it may argue material misrepresentation in the application as an
        additional basis for denying a claim &mdash; or even rescinding the policy.
      </p>

      <CalloutBox variant="warning" title="Be Honest About Occupancy Status">
        <p>
          When applying for insurance or renewing a policy, be truthful about how you use the
          property. If you use it seasonally, say so. If you split your time between two homes,
          disclose that. An insurer that knows you are a seasonal occupant and still issues an
          HO-3 policy has accepted the risk and will have difficulty denying coverage later based
          on your living arrangement. But if you told the insurer you live there year-round and
          you do not, you have given the insurer a misrepresentation defense that can destroy your
          coverage &mdash; even for losses that have nothing to do with the misrepresentation
          itself.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Premium Differences
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Second home and seasonal home policies generally carry higher premiums than primary
        residence policies for the same coverage amount. This is because insurers recognize that
        unoccupied homes present higher risks: undetected water leaks, delayed discovery of
        damage, increased vulnerability to vandalism and theft, and the absence of daily
        maintenance and supervision. The premium difference can be 20 to 50 percent or more,
        depending on the location, the duration of seasonal absence, and the insurer.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some snowbirds balk at the higher premium and attempt to insure a seasonal home as a
        primary residence to save money. This is a false economy. The savings on premium are
        meaningless if the insurer denies a $300,000 claim because you misrepresented the
        occupancy status.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When the Snowbird Is a California Resident with a Second Home in Another State
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The interstate snowbird &mdash; a California resident with a second home in Arizona,
        Nevada, Oregon, or another state &mdash; faces additional complexities beyond the basic
        vacancy and residency issues. Insurance is regulated at the state level, and the rules
        that apply to your California home may be very different from the rules that apply to
        your Arizona home.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Different State, Different Rules
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        California has some of the strongest policyholder protections in the nation. The{' '}
        <Link href="/resources/california-fair-claims" className="text-[#2E74B5] hover:underline">
          Fair Claims Settlement Practices regulations
        </Link>{' '}
        (Cal. Code Regs. tit. 10, &sect; 2695.1 et seq.) impose detailed requirements on how
        insurers investigate and handle claims. The insurer bears the burden of proving that an
        exclusion applies. Ambiguous policy language must be construed in favor of coverage. Bad
        faith claims handling can result in significant extra-contractual damages.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        But these protections apply to your California policy on your California home. Your
        Arizona second home is insured under an Arizona policy, governed by Arizona law. Arizona
        may have different rules about how vacancy is defined, whether the &ldquo;where you
        reside&rdquo; language is proscriptive or descriptive, and what remedies are available
        if the insurer acts in bad faith. The protections you take for granted as a California
        policyholder may not exist in the state where your second home is located.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Cross-State Coverage Issues
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Several specific issues arise when a snowbird has homes in different states:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Which state&rsquo;s law applies?</strong> Generally, the law of the state where
          the insured property is located governs the insurance policy for that property. Your
          California home is governed by California law; your Arizona home is governed by Arizona
          law. However, choice-of-law disputes can arise, particularly when the policy is issued
          in one state but covers property in another.
        </li>
        <li>
          <strong>Personal property coverage at the other home:</strong> Your California
          HO-3 policy may provide some coverage for personal property &ldquo;anywhere in the
          world,&rdquo; but this coverage is typically limited to 10 percent of the Coverage C
          limit. If you keep $100,000 worth of personal property at your Arizona home, and your
          California policy has a $200,000 personal property limit, you may have only $20,000 of coverage
          for that Arizona personal property under the California policy. The Arizona DP-3 may
          provide its own personal property coverage, but you need to verify this.
        </li>
        <li>
          <strong>Liability coverage:</strong> Your California HO-3&rsquo;s personal liability
          coverage (Coverage E) generally follows you and applies regardless of where the
          incident occurs. If someone is injured at your Arizona home, your California
          policy&rsquo;s liability coverage may respond. But if you have a DP-3 on the Arizona
          home instead of an HO-3, the Arizona policy does not include liability coverage, and
          you are relying entirely on the California policy&rsquo;s coverage &mdash; or on an
          umbrella policy &mdash; for liability at the Arizona location.
        </li>
        <li>
          <strong>Domicile for regulatory purposes:</strong> Your legal domicile &mdash; the state
          you consider your permanent home &mdash; affects everything from which state&rsquo;s
          insurance department has jurisdiction over your complaint to which state&rsquo;s consumer
          protection laws you can invoke. Maintain clear documentation of your domicile: voter
          registration, driver&rsquo;s license, tax filing, and mailing address should all
          consistently point to one state.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        State-by-State Differences in How Seasonal Properties Are Treated
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Because insurance law is primarily state law, how courts and regulators treat seasonal
        properties varies significantly across jurisdictions. Several key differences are worth
        noting:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Florida
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Florida is one of the most common destinations for snowbirds, and Florida courts have
        addressed seasonal occupancy issues in multiple contexts. In <em>Epstein v. Hartford
        Casualty Insurance Co.</em>, 566 So. 2d 331 (Fla. 1st DCA 1990), the court held that
        &ldquo;residence&rdquo; is ambiguous and does not require the property to be the
        insured&rsquo;s sole or primary residence. However, in <em>Arguelles v. Citizens
        Property Insurance Corp.</em>, 278 So. 3d 108 (Fla. 3d DCA 2019), the court denied
        coverage where the insured had clearly relocated to another state <em>and</em> rented
        the insured property to tenants. The distinction: seasonal absence while maintaining
        the home is different from permanent relocation and rental conversion.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Florida also has unique hurricane-related considerations. Citizens Property Insurance
        &mdash; the state&rsquo;s insurer of last resort &mdash; has specific underwriting
        guidelines for seasonal and vacant properties that may be more restrictive than the
        private market.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Arizona
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Arizona is the other primary snowbird destination. Arizona courts generally follow the
        rule that ambiguous insurance policy terms must be construed in favor of the insured.
        Arizona also has valued policy provisions that require the
        insurer to pay the full face amount of the policy in the event of a total loss of a
        dwelling &mdash; a provision that can benefit snowbirds whose Arizona home is totally
        destroyed.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Michigan and Upper Midwest States
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        States like Michigan, Minnesota, Wisconsin, and the Dakotas have large snowbird
        populations &mdash; homeowners who flee the severe winters for warmer climates. These
        states also have the highest incidence of frozen pipe claims. Michigan courts have been
        notably strict in interpreting vacancy and residency requirements. In{' '}
        <em>Heniser v. Frankenmuth Mutual Ins. Co.</em>, 534 N.W.2d 502 (Mich. 1995), the
        Michigan Supreme Court found the policy language unambiguous and denied coverage for a
        vacation home where the insured did not live. Snowbirds in these states face a less
        favorable legal landscape and should be especially diligent about obtaining appropriate
        endorsements or converting to a DP-3.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        New York and the Northeast
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        New York has been more favorable to policyholders. In <em>Dean v. Tower Insurance Co.
        of New York</em>, 19 N.Y.3d 1 (N.Y. 2012), the Court of Appeals held that
        &ldquo;reside&rdquo; was ambiguous where not defined in the policy. In <em>Craft v.
        New York Central Mutual Fire Insurance Co.</em> (N.Y. App. Div. 3d Dep&rsquo;t, 2017),
        the court affirmed that a person can have more than one residence. Snowbirds with
        properties in New York have stronger precedent to rely on if coverage is disputed.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Texas
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Texas presents a mixed picture. The Texas Supreme Court in <em>Greene v. Farmers
        Insurance Exchange</em>, 446 S.W.3d 761 (Tex. 2014), treated the vacancy clause as a
        hard deadline with no causation requirement &mdash; once the 60 days pass, coverage for
        excluded perils simply ends. This strict interpretation is less favorable for snowbirds.
        However, the vacancy clause applies to <em>vacancy</em>, not
        unoccupancy, and a furnished seasonal home should not trigger it regardless of the
        jurisdiction.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Case Law Directly Addressing Seasonal and Snowbird Properties
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Durkheimer v. Safeco (D. Or. 2025)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the most directly relevant recent case for snowbirds. The Durkheimers owned homes
        in Portland, on the Oregon coast, and in Carmel, California &mdash; all insured by Safeco.
        During the January 2024 freeze, their Portland home suffered hundreds of thousands of
        dollars in water damage from burst pipes. Safeco raised the &ldquo;where you
        reside&rdquo; defense, arguing the Durkheimers did not reside at the Portland home.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Magistrate Judge Stacie Beckerman recommended striking Safeco&rsquo;s affirmative defense,
        finding the &ldquo;residence premises&rdquo; language was <strong>intended to identify the
        property, not to create a coverage condition</strong>. Judge Michael Simon adopted the
        recommendation and struck the defense as insufficient as a matter of law. This case is a
        powerful precedent for any snowbird with multiple properties insured by the same carrier.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Shank v. Safeco Insurance Co. of America (S.D. W. Va. 2016)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        <em>Shank v. Safeco Ins. Co. of Am.</em>, 2016 WL 4534028 (S.D.W. Va. Aug. 30, 2016).
        A married couple owned their primary home and a second home inherited from a relative;
        they used the second home weekly. After a fire, Safeco denied the claim under the
        &ldquo;residence premises&rdquo; definition. The insureds argued that the
        residence-premises restriction was impermissibly more restrictive than West
        Virginia&rsquo;s Standard Fire Policy statute. The district court <strong>agreed and
        held that Safeco&rsquo;s &ldquo;residence premises&rdquo; provision was unlawfully more
        restrictive</strong> than permitted under West Virginia law. West Virginia requires
        fire policies to conform to the 1943 New York Standard Fire Policy, which suspends
        coverage only when a building has been &ldquo;vacant or unoccupied beyond a period of
        sixty consecutive days.&rdquo; Reading a residence-premises requirement into the policy
        would, in the court&rsquo;s view, render the 60-day vacancy prong meaningless. Safeco
        was found to have breached the policy. <em>Shank</em> is a useful authority for
        snowbirds with multiple properties in Standard-Fire-Policy-conformity states.
      </p>

      <CalloutBox variant="legal" title="Standard Fire Policy Conformity">
        <p>
          Approximately half the states require property insurance policies to conform to a
          statutory Standard Fire Policy. In those states, courts have held that a homeowner
          policy cannot impose conditions or exclusions more restrictive than what the Standard
          Fire Policy allows. The Standard Fire Policy typically addresses vacancy and
          unoccupancy but does <em>not</em> contain a &ldquo;where you reside&rdquo;
          requirement. <em>Shank</em> is one of several federal-court decisions holding that a
          carrier&rsquo;s residence-premises restriction is unenforceable in a conformity state
          when it goes beyond what the Standard Fire Policy allows. The conformity argument is
          jurisdiction-specific &mdash; whether it will succeed depends on the specific state&apos;s
          conformity statute and how its courts have interpreted it. Discuss with a coverage
          attorney before relying on it.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Practical Recommendations for Snowbirds and Seasonal Property Owners
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The coverage risks facing snowbirds are real, but they are also largely manageable with
        proper planning. The following recommendations are listed in order of priority:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        1. Disclose Your Seasonal Occupancy to Your Insurer
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the single most important step. Notify your insurance agent <strong>in
        writing</strong> that the property is used seasonally and will be unoccupied for a
        specified period each year. Provide the approximate dates of your absence. Ask the agent
        to confirm in writing that the policy provides coverage during the unoccupied period.
        This disclosure serves two purposes: it eliminates any future misrepresentation defense,
        and it creates an estoppel argument if the insurer later attempts to deny coverage based
        on your absence.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        2. Verify That HO 06 48 Is on Your Policy
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The HO 06 48 endorsement has been mandatory since 2015 in most states, but
        &ldquo;mandatory&rdquo; means it should be on the policy &mdash; not that it always is.
        Pull your policy and check the endorsements list on the declarations page. If HO 06 48
        is not listed, ask your agent why and request it immediately.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        3. Align Your Policy Renewal Date with Your Occupancy Schedule
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Because HO 06 48 evaluates the residency requirement only at policy inception, the
        renewal date matters enormously. If your seasonal home&rsquo;s policy renews during
        the months you are away, you may not satisfy the inception-date residency requirement.
        Work with your agent to adjust the policy period so that the renewal falls during the
        months you are actually at the property.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        4. Request the HO 06 49 Endorsement If Needed
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you cannot align the renewal date with your occupancy, or if there is any risk that
        you will not be at the property on the renewal date, request the HO 06 49 (Broadened
        Residence Premises Definition) endorsement. This endorsement allows designated dates
        during which the residency requirement is suspended entirely. Not all carriers offer
        it, and not all agents know about it. Ask specifically by endorsement number.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        5. Consider the DP-3 for the Seasonal Home
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the endorsement approach is too complicated, unavailable, or you want the simplest
        possible solution, convert the seasonal home to a DP-3 dwelling fire policy. The DP-3
        does not require you to reside at the property. It eliminates the &ldquo;where you
        reside&rdquo; problem in its entirety. Supplement with an umbrella policy for liability
        coverage at the seasonal home.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        6. Keep the Seasonal Home Fully Furnished
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A furnished home is unoccupied, not vacant. As long as the home contains household
        furnishings, personal property, and the normal contents of a functioning household, the
        vacancy exclusion should not apply. Do not strip the home when you leave. Keep it looking
        like a home someone lives in &mdash; because legally, that is the argument you need to
        make.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        7. Maintain Heat or Drain the Plumbing
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you are leaving a home in a cold climate, you must either maintain heat at a level
        sufficient to prevent pipe freezing (at least 55&deg;F, preferably 65&deg;F) or have
        the plumbing system professionally drained. Do one or the other &mdash; but do not do
        neither. Document what you did: keep the thermostat setting photograph, the plumber&rsquo;s
        invoice, or the winterization records.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        8. Arrange Regular Property Checks
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Have someone physically check the property at least weekly during the months you are
        away. This person should walk through the home, check for leaks, verify that the heating
        system is functioning, inspect the roof and exterior, and document each visit. A property
        management company, a trusted neighbor, or a house-sitting service can fill this role.
        Maintain a log of every visit with dates and notes. This documentation demonstrates
        &ldquo;reasonable care&rdquo; and undercuts any insurer argument that the home was
        abandoned or neglected.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        9. Install Smart Home Monitoring
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Modern technology provides an additional layer of protection. Install:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Temperature sensors</strong> that alert you if the interior temperature drops
          below a safe threshold.
        </li>
        <li>
          <strong>Water leak detectors</strong> placed near water heaters, washing machines,
          dishwashers, and under sinks.
        </li>
        <li>
          <strong>Automatic water shutoff valves</strong> that close the main water supply if a
          leak is detected.
        </li>
        <li>
          <strong>Security cameras or motion sensors</strong> that alert you to unauthorized entry.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        These devices are relatively inexpensive, and some insurers offer premium discounts for
        them. More importantly, they show that you took reasonable precautions to protect the
        property &mdash; which is exactly what the policy requires.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        10. Maintain Evidence of Continuing Ties
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Keep documentation that demonstrates your continuing connection to both homes:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Keep the home address on legal and financial documents</li>
        <li>Maintain voter registration and driver&rsquo;s license at your domicile state</li>
        <li>Keep utility accounts active at both homes</li>
        <li>Maintain mail delivery (or forwarding that returns to the home address seasonally)</li>
        <li>Keep personal belongings, clothing, and family items at both properties</li>
        <li>Document your pattern of seasonal migration: travel dates, utility usage patterns, and regular returns</li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        11. Do Not Rent the Seasonal Home Without Converting the Policy
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some snowbirds attempt to offset costs by renting their seasonal home during the months
        they are not using it. This is perfectly legitimate from a business perspective, but it
        is fatal to a claim under a homeowner&rsquo;s policy. Renting the property to tenants
        is inconsistent with any claim that you &ldquo;reside&rdquo; there. In <em>Arguelles
        v. Citizens Property Insurance Corp.</em>, the Florida court denied coverage specifically
        because the insured had rented the property. If you rent, convert to a landlord or
        dwelling fire policy <em>first</em>.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        12. Review Both Policies Annually
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Sit down with your insurance agent at least once a year and review both home policies.
        Verify that the coverage limits are adequate. Confirm that the appropriate endorsements
        are in place. Make sure the insurer is aware of your seasonal occupancy pattern. Policy
        forms change, endorsements expire, and coverage gaps can develop without anyone noticing
        until a loss occurs.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When the Insurer Denies a Claim on a Seasonal Property
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your insurer denies a claim on your seasonal or second home, the denial should be
        challenged. The arguments available to you depend on the basis of the denial, but
        common arguments include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>The property was unoccupied, not vacant.</strong> If the home was furnished and
          maintained, the vacancy clause does not apply. Provide photographs showing the
          interior of the home with furnishings in place, utility bills showing active service,
          and testimony from anyone who visited the property.
        </li>
        <li>
          <strong>You reside at more than one home.</strong> A person can have multiple
          residences for insurance purposes. Your seasonal home is one of them. Cite{' '}
          <em>Craft v. New York Central Mutual</em> (164 A.D.3d 1120 (3d Dep&rsquo;t 2018)),{' '}
          <em>Lundquist v. Allstate</em> (314 Ill. App. 3d 240 (2000)), <em>Dean v. Tower</em>{' '}
          (19 N.Y.3d 704 (2012)), and <em>Durkheimer v. Safeco</em> (D. Or. 2025) for the
          principle that a property need not be the insured&rsquo;s sole or primary residence
          to qualify as a &ldquo;residence premises.&rdquo;
        </li>
        <li>
          <strong>&ldquo;Reside&rdquo; is ambiguous.</strong> The policy does not define
          &ldquo;reside,&rdquo; creating ambiguity that must be construed against the insurer
          under <em>contra proferentem</em>. <em>Dean v. Tower</em> and <em>Lundquist v.
          Allstate</em> are the leading authorities on this point.
        </li>
        <li>
          <strong>HO 06 48 locks in coverage.</strong> If you were at the property on the
          policy inception date, the HO 06 48 endorsement means you satisfied the residency
          requirement for the entire policy period.
        </li>
        <li>
          <strong>The insurer knew about your living arrangement.</strong> Estoppel bars the
          denial when the insurer accepted premiums with knowledge of the seasonal occupancy
          pattern.
        </li>
        <li>
          <strong>You complied with all policy conditions.</strong> You maintained heat, arranged
          property checks, and kept the home furnished. The loss did not result from any failure
          on your part.
        </li>
      </ul>

      <CalloutBox variant="important" title="Get Professional Help Early">
        <p>
          Claims involving seasonal properties and the &ldquo;where you reside&rdquo; exclusion
          are among the most legally complex coverage disputes in residential insurance. The
          interplay between the vacancy clause, the residency definition, policy endorsements,
          state-specific law, and the specific facts of the loss creates multiple layers of
          analysis. A licensed Public Adjuster can handle the claims documentation, damage
          assessment, and negotiation aspects of the dispute. An attorney experienced in insurance
          coverage law should be consulted if the insurer maintains its denial after the initial
          challenge.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Emerging Trend: Smart Home Requirements for Seasonal Properties
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A growing number of insurers are beginning to require or incentivize smart home
        technology for seasonal and second-home policies. Some carriers now condition coverage
        &mdash; or offer premium discounts &mdash; based on whether the property has:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Wi-Fi-connected water leak sensors with automatic shutoff valves</li>
        <li>Connected temperature monitoring systems</li>
        <li>Connected smoke and CO detectors</li>
        <li>Remote-accessible security systems</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        This trend reflects the insurance industry&rsquo;s recognition that the primary risks
        associated with seasonal homes &mdash; undetected water leaks, temperature-related
        damage, and delayed loss discovery &mdash; can be substantially mitigated by technology.
        For snowbirds, the cost of installing these systems is modest compared to the coverage
        benefits: both the premium savings and the practical protection against catastrophic
        losses that go undetected for weeks or months.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        A Note on Related Coverage Issues
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The seasonal property coverage problem intersects with several other insurance topics
        discussed in detail elsewhere on this site:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>
            <Link href="/resources/where-you-reside-exclusion" className="text-[#2E74B5] hover:underline">
              The &ldquo;Where You Reside&rdquo; Exclusion
            </Link>
          </strong>{' '}
          &mdash; A comprehensive analysis of the residency definition, the case law split, the
          nursing home problem, and the ISO endorsements designed to address it. Essential reading
          for any snowbird.
        </li>
        <li>
          <strong>
            <Link href="/resources/vacancy-unoccupancy" className="text-[#2E74B5] hover:underline">
              Vacancy and Unoccupancy Clauses
            </Link>
          </strong>{' '}
          &mdash; The full analysis of how the vacancy clause works, how courts distinguish vacant
          from unoccupied properties, and how to protect yourself. This article covers the vacancy
          issue in depth; the present article applies it specifically to the snowbird scenario.
        </li>
        <li>
          <strong>
            <Link href="/resources/water-damage-claims" className="text-[#2E74B5] hover:underline">
              Water Damage Claims
            </Link>
          </strong>{' '}
          &mdash; Frozen pipe damage is the single most common loss at seasonal properties. This
          article covers water damage claims comprehensively, including the insurer&rsquo;s duty
          to investigate, the policyholder&rsquo;s duty to mitigate, and how to maximize your
          recovery.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Conclusion
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The snowbird lifestyle is not an obscure edge case. Millions of Americans do it.
        Insurance carriers know their policyholders do it. And yet the standard homeowner&rsquo;s
        policy &mdash; as written &mdash; can be interpreted to deny coverage to a snowbird who
        leaves a fully furnished, well-maintained home for the winter. The vacancy clause, the
        &ldquo;where you reside&rdquo; definition, and the protective safeguard conditions
        create a web of potential coverage traps that most snowbirds walk into without any
        warning from their insurer or their agent.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The law is catching up. The <em>Durkheimer</em> decision in Oregon and the New York
        line of cases (<em>Dean v. Tower</em>, <em>Craft</em>) recognize that a person can
        reside at more than one home and that the &ldquo;where you reside&rdquo; language
        should not be weaponized against seasonal occupants. ISO&rsquo;s
        HO 06 48 and HO 06 49 endorsements represent the industry&rsquo;s acknowledgment that
        the problem exists. But until the standard policy form is rewritten &mdash; or until
        state legislatures mandate clearer disclosure &mdash; the burden falls on the
        policyholder to understand the risks and take affirmative steps to protect their
        coverage.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The good news is that those steps work. Disclose your seasonal occupancy. Verify your
        endorsements. Align your renewal dates. Keep the home furnished. Maintain heat or drain
        the pipes. Arrange regular property checks. And if the worst happens and the insurer
        denies your claim, know that the law in most states favors a policyholder who took
        reasonable precautions and maintained genuine ties to their seasonal home.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you are a snowbird, read your policy now &mdash; before the loss, not after it.
        The time to discover a coverage gap is while you can still close it.
      </p>

      <hr className="my-8 border-gray-300" />

      <CalloutBox variant="legal" title="Disclaimer">
        <p>
          This article is for general educational purposes only and does not constitute legal
          advice. Insurance policies and applicable law vary by state and by policy form. The
          case law discussed in this article reflects reported court decisions as of the date of
          publication, but outcomes in any individual case will depend on the specific policy
          language, the facts, and the applicable state law. Always consult with a licensed
          attorney in your jurisdiction about your specific situation.
        </p>
        <p className="mt-2">
          <strong>Author:</strong> Leland Coontz III, Licensed Public Adjuster, CA License #2B53445
        </p>
      </CalloutBox>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Snowbird or Seasonal Homeowner Facing a Coverage Denial?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          If your insurer has denied a property claim because you were not physically present
          at your seasonal home when the loss occurred, you may still have coverage. The vacancy
          clause, the &ldquo;where you reside&rdquo; definition, and the applicable endorsements
          all require careful analysis. A licensed Public Adjuster can review your policy,
          document the facts that support coverage, and help you fight the denial.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Request a Free Claim Review &rarr;
        </Link>
      </div>
    </>
  )
}
