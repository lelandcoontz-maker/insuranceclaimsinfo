import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'The Independent Adjuster: Who They Actually Work For',
  description:
    'Independent adjusters are hired by insurance companies, not policyholders. Learn how IA firms operate, how adjusters are compensated, why "independent" is misleading, and what this means for your claim.',
  summary:
    'Independent adjusters are hired and paid by the insurer, not by you, despite the \'independent\' label. They work the carrier\'s file under its instructions, so treat their findings as the insurer\'s position, not a neutral one.',
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
        After you file an insurance claim, someone shows up to inspect your property. They hand you
        a business card that says &ldquo;Independent Adjuster.&rdquo; The word <em>independent</em>{' '}
        sounds reassuring. It suggests objectivity, neutrality &mdash; maybe even someone who is
        working for <em>you</em>. That impression is wrong, and it is not accidental.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        An independent adjuster (IA) is a claims adjuster who works as a contractor rather than a
        full-time employee of the insurance company. They are hired by the insurer, paid by the
        insurer, and deployed at the insurer&apos;s direction. The word &ldquo;independent&rdquo;
        refers only to their employment status &mdash; they are not on the insurance company&apos;s
        payroll the way a staff adjuster is. It does not mean they are independent of the insurer&apos;s
        influence, independent in their judgment, or independent in any way that benefits you.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This article explains who independent adjusters really are, how their firms operate, how they
        are compensated, and why understanding these details matters when your claim is on the line.
        It also draws the critical distinctions between independent adjusters, staff adjusters, and{' '}
        <Link href="/resources/public-adjuster" className="text-[#2E74B5] underline">
          public adjusters
        </Link>{' '}
        &mdash; the only type of adjuster who actually works for the policyholder.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What &ldquo;Independent&rdquo; Actually Means
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurance industry uses three categories of adjusters, and the terminology is deliberately
        confusing to anyone outside the business. Understanding these categories is essential before
        you can evaluate who is inspecting your property and why they might reach the conclusions
        they reach.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Staff Adjusters
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A staff adjuster is a W-2 employee of the insurance company. They receive a salary, benefits,
        and a company vehicle. They work exclusively for one carrier, handle that carrier&apos;s claims
        as their daily job, and have direct access to the company&apos;s internal systems, authority
        levels, and management structure. When a staff adjuster inspects your property, there is no
        ambiguity about who they work for. Their paycheck comes from the same company that issued
        your policy.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Staff adjusters tend to know their carrier&apos;s policies, procedures, and coverage positions
        well because they work inside the organization every day. They typically handle a defined
        geographic territory and manage a caseload of claims at various stages. The advantage of dealing
        with a staff adjuster &mdash; from the policyholder&apos;s perspective &mdash; is continuity.
        They are more likely to stay on your claim from start to finish. The disadvantage is that they
        are deeply embedded in the carrier&apos;s culture and processes, which may not always align
        with your interests.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Independent Adjusters
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        An independent adjuster is a contractor. They are not employed by the insurance company, but
        they are hired by the insurance company &mdash; usually through an independent adjusting firm
        &mdash; to handle claims on the carrier&apos;s behalf. They work under the carrier&apos;s
        direction, follow the carrier&apos;s guidelines, and report their findings to the carrier.
        The carrier reviews and approves (or modifies) their work.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The &ldquo;independent&rdquo; label refers solely to their employment classification. They
        are independent contractors in the labor-law sense &mdash; 1099 workers rather than W-2
        employees. They are not independent in any sense that matters to you as a policyholder. They
        do not exercise independent judgment that overrides the carrier&apos;s interests. They do not
        serve as neutral third parties. They do not work for you.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Think of it this way: a company that hires an outside accounting firm to do its taxes is using
        &ldquo;independent&rdquo; accountants. Nobody would confuse those accountants with neutral
        arbiters of the company&apos;s tax liability. The accountants work for the company that hired
        them. Independent adjusters work for the insurance company that hired them. The label is
        accurate in a narrow technical sense, but it creates a deeply misleading impression for
        policyholders who encounter it during one of the most stressful events of their lives.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Public Adjusters
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A{' '}
        <Link href="/resources/public-adjuster" className="text-[#2E74B5] underline">
          public adjuster
        </Link>{' '}
        is the only type of adjuster who works exclusively for the policyholder. Public adjusters are
        licensed separately from company adjusters. They are retained and paid by the homeowner or
        business owner &mdash; not the insurance company. Their job is to evaluate your damage,
        prepare and document your claim, and negotiate with the insurer on your behalf. A public
        adjuster is your advocate. An independent adjuster is the carrier&apos;s contractor.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        It is worth emphasizing this point because the terminology creates genuine confusion. Many
        policyholders assume that the &ldquo;independent&rdquo; adjuster sent by their insurance
        company is somehow neutral or objective &mdash; a third party who will give a fair assessment.
        Some policyholders even confuse independent adjusters with public adjusters, assuming that
        anyone not directly employed by the insurance company must be working in their interest. This
        misunderstanding can be costly.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Independent Adjusting Firms Operate
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Independent adjusters rarely work alone. Most are affiliated with independent adjusting firms
        that contract with multiple insurance carriers. These firms range from small local operations
        with a handful of adjusters to massive national and multinational companies with thousands of
        adjusters deployed across the country.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The business model is straightforward. An insurance carrier needs claims handled &mdash; either
        because its own staff cannot keep up with volume, because a catastrophe has overwhelmed its
        resources, or because it has made a strategic decision to outsource claims handling rather than
        maintain a large permanent staff. The carrier contracts with one or more IA firms to provide
        adjusters. The IA firm recruits, deploys, and manages adjusters to handle those claims.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Shift from Local Firms to National Giants
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The independent adjusting landscape has changed dramatically over the past two decades. Small,
        local IA firms &mdash; often run by experienced adjusters who knew the local construction
        practices, building codes, and contractor market &mdash; have been steadily absorbed or pushed
        out by large national and multinational firms. This consolidation has consequences for
        policyholders.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A local IA who has spent twenty years adjusting claims in your region understands what
        materials cost locally, how long repairs actually take, which types of damage are common in
        your climate, and what local building codes require. A national firm deploying adjusters from
        across the country cannot replicate that knowledge. The adjuster who shows up at your door
        after a hurricane may have arrived from a state a thousand miles away, with no familiarity
        with local construction methods, materials pricing, or code requirements.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This shift benefits carriers in several ways. Large firms can offer lower per-claim costs
        through volume. They provide standardized processes and technology platforms that make claims
        easier to manage centrally. And &mdash; perhaps most importantly &mdash; they provide a
        workforce that is transient and replaceable. An adjuster who becomes too generous in the
        carrier&apos;s view, who consistently writes estimates that the carrier considers too high,
        can simply not receive the next deployment. The system is self-correcting in a direction that
        does not favor policyholders.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Volume, Speed, and the Per-Claim Model
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most IA firms are compensated by the carrier on a per-claim basis or through fee structures
        that reward volume. The firm receives a set fee for each claim file it handles. The firm then
        pays its adjusters from that fee. This creates a powerful incentive: the more claims an adjuster
        can close, the more profitable each claim is for the firm, and the more likely the adjuster
        is to keep getting work.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Speed is not inherently bad. Nobody wants their claim to drag on for months. But when the
        economic model rewards closing files quickly, there is an obvious tension with thoroughness.
        A detailed inspection of a fire-damaged home might take an entire day. An adjuster under
        pressure to close five files a day cannot spend that kind of time. Something gives &mdash;
        and what gives is usually the quality of the inspection, the completeness of the estimate, and
        the attention to items that require careful evaluation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is why experienced public adjusters and attorneys routinely find damage that the
        carrier&apos;s initial adjuster missed. It is not always that the adjuster was dishonest or
        incompetent. Sometimes they simply did not have the time &mdash; or the economic incentive
        &mdash; to look more carefully. When you understand the per-claim model, the pattern of
        underpayment becomes less surprising and more predictable.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Independent Adjusters Are Compensated
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        One of the biggest misunderstandings about independent adjusters involves how they are paid.
        Compensation structures vary significantly depending on the type of work the adjuster is doing,
        and each structure creates its own set of incentives. Policyholders who understand these
        incentives are better equipped to evaluate the adjuster&apos;s work product.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Catastrophe Adjusters: The Commission Model
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Catastrophe (&ldquo;CAT&rdquo;) adjusters &mdash; those deployed after hurricanes, wildfires,
        tornadoes, and other large-scale disasters &mdash; have traditionally been paid a commission
        based on a percentage of the approved estimate amount. If the adjuster writes an estimate for
        $50,000 in damage and the carrier approves it, the adjuster earns a percentage of that $50,000.
        If the estimate is $100,000, the adjuster&apos;s commission doubles.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This compensation model creates an interesting dynamic that is worth examining carefully.
        At first glance, it might seem like the commission model actually aligns the adjuster&apos;s
        interests with the policyholder&apos;s: the higher the estimate, the more the adjuster earns.
        An adjuster who writes a lower estimate earns a lower commission. An adjuster who writes a
        thorough, detailed estimate that captures all the damage earns more.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Yet carriers have tolerated this compensation model for decades. That fact alone should tell
        you something. The reason carriers accept the commission model despite the apparent misalignment
        is that they maintain control through other mechanisms. The carrier controls the scope &mdash;
        what the adjuster is authorized to include. The carrier reviews every estimate before payment
        is issued. The carrier can send the estimate back for revisions, require the adjuster to remove
        line items, or override the adjuster&apos;s findings entirely. And the carrier decides whether
        to deploy that adjuster on the next catastrophe. An adjuster whose estimates are consistently
        higher than the carrier&apos;s expectations may find themselves receiving fewer and fewer
        assignments.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Also note that the industry may be moving away from the traditional commission
        model for catastrophe adjusters. As large national firms consolidate the market, alternative
        compensation structures &mdash; flat fees per claim, hybrid models, or salary-based arrangements
        &mdash; are becoming more common. This shift removes even the theoretical alignment between
        the adjuster&apos;s compensation and the thoroughness of their estimate.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Daily Claims Adjusters: Salary, Piece Rate, and Hybrid Models
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Independent adjusters who handle everyday claims &mdash; not catastrophe deployments &mdash;
        are often compensated through salary, piece-rate arrangements, or some combination of the two.
        The specific structure varies by firm and by carrier contract, but common arrangements include
        a base salary supplemented by per-claim bonuses, or a pure piece-rate system where the adjuster
        is paid a set fee for each claim they handle.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under piece-rate models, adjusters may receive additional compensation for tasks that require
        extra effort. For example, a two-story roof inspection might pay more than a single-story
        inspection. A claim that is cancelled or closed without payment might earn the adjuster a
        minimum fee for the time spent. These incremental payments reflect the varying complexity of
        different claims, but they also create their own incentive structure: an adjuster paid per
        file has a financial reason to move through files quickly. A claim that requires extensive
        documentation, multiple site visits, or detailed scope analysis is less profitable per hour
        than a simple claim that can be inspected, estimated, and closed in a single visit.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The piece-rate model is particularly problematic for complex losses. A house with smoke damage
        throughout, water damage in multiple rooms, and structural concerns may require eight hours
        of careful inspection and documentation. If the adjuster is paid the same per-claim fee as
        they would receive for a straightforward wind-damage claim that takes two hours, the economic
        incentive is to spend less time on the complex loss &mdash; not more. The damage that gets
        missed as a result is not hypothetical. It shows up in the supplement requests, the disputes,
        and the underpayments that policyholders discover months later.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Timesheet-Based Compensation
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some independent adjusters &mdash; particularly those working for smaller, local IA firms
        &mdash; have historically been paid based on timesheets. Under this model, the adjuster
        records their activities and the approximate time spent on each, much like how many attorneys
        bill their clients. The IA firm then bills the carrier based on the hours worked.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The timesheet model, in theory, is the compensation structure most aligned with thorough
        claims handling. An adjuster who is paid for their time has an economic incentive to be
        thorough rather than fast. If a complex claim requires a full day of inspection and
        documentation, the adjuster is compensated for that full day rather than earning the same
        flat fee they would have earned for a two-hour claim.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        However, this method of compensation is disappearing from the industry. As small local
        independent adjusting firms are absorbed by or lose business to large national and
        multinational firms, the timesheet model is being replaced by per-claim fees and other
        arrangements that prioritize predictable costs over thorough handling. Carriers prefer
        compensation structures where they can predict exactly what each claim will cost to adjust.
        The timesheet model introduces variability that large carriers and large IA firms are
        increasingly unwilling to accept. The practical result is that the compensation model most
        conducive to careful, detailed work is the one being phased out.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Who Pays the Independent Adjuster &mdash; and Why It Matters
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurance company pays the independent adjuster. Whether the payment flows through
        an IA firm or comes directly from the carrier, the source of the adjuster&apos;s income
        is the same entity that has a financial interest in paying your claim
        as little as possible. The adjuster&apos;s continued employment depends on satisfying the
        carrier, not the policyholder.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This does not mean every independent adjuster is corrupt or dishonest. Many are competent,
        experienced professionals who take their responsibilities seriously. But the structural
        incentives are undeniable. An adjuster who consistently writes estimates that the carrier
        considers too high will not keep getting work from that carrier. An adjusting firm whose
        adjusters produce estimates significantly above the carrier&apos;s expectations will lose
        its contract and be replaced by a firm that produces more &ldquo;favorable&rdquo; results.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Consider the dynamic from the adjuster&apos;s perspective. They want to do a good job. They
        may genuinely want to get your claim right. But &ldquo;right&rdquo; in the carrier&apos;s
        view often means something different from &ldquo;right&rdquo; in the policyholder&apos;s view.
        The carrier wants a defensible estimate &mdash; one that can withstand scrutiny if the
        policyholder pushes back. The policyholder wants a complete estimate that captures every
        element of damage and every applicable coverage. These are not always the same thing.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When there is a gray area &mdash; an item of damage that could go either way, a coverage
        question that is debatable, a scope decision where the adjuster must choose between a more
        inclusive and a more restrictive approach &mdash; the structural incentives push toward the
        result that is better for the party that is paying the adjuster. This is not conspiracy. It
        is economics. And it is exactly why you need to understand it.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Licensing Requirement You Should Know About
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        In California, independent adjusters are required to be licensed by the California Department
        of Insurance (CDI). This licensing requirement exists to ensure a minimum level of competence
        and accountability. But there is a practical requirement that many policyholders are unaware
        of: California law requires independent adjusters to provide their license number &mdash; or
        the license number of the supervising person in their firm &mdash; in their communications.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This means that when an independent adjuster sends you an email, a letter, or any written
        communication about your claim, that communication should include an adjuster license number.
        If it does not, that is something you should note. The{' '}
        <a
          href="https://www.insurance.ca.gov/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#2E74B5] underline"
        >
          California Department of Insurance
        </a>{' '}
        has issued notices about this requirement. The same rule applies to public adjusters &mdash;
        we are required to display our license number on our emails and other written communications
        as well.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Why does this matter? Because a license number is your ability to verify that the person
        inspecting your property and making decisions about your claim is actually licensed. You can
        look up any adjuster&apos;s license on the CDI website. You can verify that their license is
        active, that it has not been revoked or suspended, and that they are in fact authorized to
        adjust claims in California. If someone shows up to inspect your property and cannot produce
        a valid license number, that is a significant red flag.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        It also provides accountability. If an adjuster handles your claim improperly, their license
        number gives you a way to file a complaint with the CDI. An adjuster who is not properly
        identified in their communications makes it harder for you to exercise that right. Pay
        attention to whether the adjuster&apos;s license number appears in their emails, inspection
        reports, and correspondence. If it does not, ask for it.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Independent Adjusters vs. Staff Adjusters: What&apos;s Different for Your Claim
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Both independent adjusters and staff adjusters work for the insurance company. The key
        differences are in how they are deployed, how they are managed, and what those differences
        mean for the quality of your claim handling.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Familiarity with the carrier.</strong> Staff adjusters know their company&apos;s
          policies, coverage positions, internal systems, and authority levels intimately. Independent
          adjusters may handle claims for multiple carriers and may be less familiar with the specific
          policy language, endorsements, and company procedures that apply to your claim. This can cut
          both ways &mdash; a staff adjuster&apos;s deep familiarity with the company may make them
          more likely to apply the company&apos;s standard positions reflexively, while an IA might
          approach your claim with fresh eyes. But it can also mean the IA misses coverage that a more
          experienced carrier-specific adjuster would have identified.
        </li>
        <li>
          <strong>Continuity.</strong> Staff adjusters are more likely to handle your claim from start
          to finish. Independent adjusters &mdash; especially CAT adjusters &mdash; may handle only
          the initial inspection before your claim is transferred to a staff adjuster, a desk adjuster,
          or a different IA entirely. This lack of continuity is a significant problem.{' '}
          <Link href="/resources/adjuster-changes-mid-claim" className="text-[#2E74B5] underline">
            Adjuster changes mid-claim
          </Link>{' '}
          force you to re-explain your situation, re-document damage that has already been inspected,
          and deal with new adjusters who may contradict the findings of their predecessors.
        </li>
        <li>
          <strong>Volume and workload.</strong> Independent adjusters, particularly during catastrophe
          deployments, often carry enormous caseloads. They may be handling dozens of claims
          simultaneously, visiting multiple properties per day, and working under extreme time pressure.
          Staff adjusters typically have more manageable caseloads &mdash; though this is not always
          the case, especially in disaster-prone regions where carriers are thinly staffed.
        </li>
        <li>
          <strong>Accountability.</strong> When a staff adjuster mishandles your claim, the insurance
          company is directly accountable. The adjuster is their employee. When an independent adjuster
          mishandles your claim, there can be an additional layer of distance. The carrier may point
          to the IA firm, the IA firm may point to the individual adjuster, and accountability becomes
          diffuse. This is particularly relevant if your claim ends up in{' '}
          <Link href="/resources/california-fair-claims" className="text-[#2E74B5] underline">
            a fair claims practices dispute
          </Link>.
        </li>
        <li>
          <strong>Local knowledge.</strong> Staff adjusters who work a defined territory develop deep
          knowledge of local construction practices, materials costs, building codes, and common types
          of damage. Independent adjusters &mdash; especially those deployed by national firms to
          catastrophe zones &mdash; may have little or no familiarity with your area. They may not know
          local code requirements, may not understand regional construction methods, and may not be
          aware of local pricing realities that affect the cost of repairs.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Catastrophe Deployment Model
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The most common scenario where policyholders encounter independent adjusters is after a
        catastrophe. When a hurricane, wildfire, or other large-scale disaster generates thousands
        of claims simultaneously, insurance companies cannot handle the volume with their existing
        staff. They contract with IA firms to provide dozens or hundreds of adjusters who are deployed
        to the disaster zone.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        These CAT adjusters often travel from out of state. They arrive in the disaster zone, receive
        a batch of claim assignments, and begin conducting inspections at a pace that would be
        unsustainable under normal circumstances. They may be expected to complete five, six, or more
        inspections per day. They are often unfamiliar with the geographic area, the local construction
        standards, and sometimes even the type of damage they are evaluating. A wind-and-hail adjuster
        from the Midwest may find themselves adjusting wildfire claims in California for the first time.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The result &mdash; documented in study after study and confirmed by the experience of public
        adjusters and attorneys who handle these claims &mdash; is that catastrophe claims are
        chronically underpaid on the initial inspection. Items are missed. Damage is underscoped.
        Estimates are incomplete. And the policyholder, who is often displaced from their home and
        dealing with the trauma of a disaster, is handed an estimate that may capture only a fraction
        of their actual loss.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is not a criticism of individual CAT adjusters, many of whom are doing the best they can
        under impossible conditions. It is a criticism of the system that deploys them in this manner
        and then treats their necessarily incomplete initial assessments as the basis for settlement
        offers. For more on this dynamic, see our article on{' '}
        <Link href="/resources/desk-adjusting-remote-estimates" className="text-[#2E74B5] underline">
          desk adjusting and remote estimates
        </Link>, which explores how initial field inspections are further filtered through remote
        review processes that can reduce estimates even further.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How the Carrier Controls the &ldquo;Independent&rdquo; Adjuster&apos;s Work
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If independent adjusters were truly independent &mdash; if they exercised their own
        professional judgment without carrier influence &mdash; the label might be less misleading.
        But the reality is that carriers exert significant control over the work product of the IAs
        they hire. Understanding these control mechanisms is critical for any policyholder whose claim
        is being handled by an independent adjuster.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Scope Control
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The carrier often defines what the adjuster is authorized to include in their estimate. This
        is sometimes done through explicit instructions (&ldquo;do not include overhead and profit
        unless three or more trades are involved&rdquo;) and sometimes through software settings
        in the estimating platform. Adjusters writing estimates in{' '}
        <Link href="/resources/xactimate" className="text-[#2E74B5] underline">
          Xactimate
        </Link>{' '}
        &mdash; the industry-standard estimating software &mdash; may find that certain line items
        are restricted, that certain pricing is preset, or that the carrier&apos;s profile has been
        configured to exclude categories of damage that the adjuster might otherwise include. The
        adjuster may see the damage, understand that it needs to be repaired, and still not be
        authorized to include it in the estimate.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Estimate Review and Override
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        After the independent adjuster completes their inspection and writes their estimate, that
        estimate typically goes to a carrier employee &mdash; often a{' '}
        <Link href="/resources/desk-adjusting-remote-estimates" className="text-[#2E74B5] underline">
          desk adjuster
        </Link>{' '}
        &mdash; for review. The reviewer can approve the estimate, send it back for revisions, or
        override individual line items. This review process means that even a thorough, well-documented
        estimate from the field adjuster may be reduced before the policyholder ever sees it.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        At a May 2025 Senate Homeland Security subcommittee hearing, testimony described how one
        major insurer had transformed field adjusters into &ldquo;picture takers and estimate
        writers&rdquo; whose work was then reviewed and modified by desk adjusters who never visited
        the property. The testimony revealed that 27% of field adjuster estimates were reduced through
        desk review, while only 9% were increased. The independent adjuster in the field may write
        an accurate estimate &mdash; but you may never see it. What you receive is the estimate after
        the carrier&apos;s internal review process has applied its own judgment.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Deployment and De-Selection
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Perhaps the most powerful control mechanism is the carrier&apos;s ability to choose which
        adjusters it deploys and which it does not. Carriers track adjuster performance metrics,
        including average estimate amounts, cycle times, and customer complaints. An adjuster whose
        estimates consistently run higher than the carrier&apos;s expectations &mdash; even if those
        estimates are more accurate &mdash; may find themselves receiving fewer assignments. An
        adjusting firm whose adjusters produce results that the carrier considers unfavorable may
        lose its contract entirely.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This creates a selection effect over time. Adjusters who survive in the independent adjusting
        market are, by necessity, adjusters whose work product falls within the range that carriers
        find acceptable. This does not mean they are all writing inadequate estimates. But it means
        that the system structurally discourages the kind of thorough, policyholder-favorable estimates
        that might cause a carrier to look elsewhere for its adjusting services.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Managed Repair Programs and Independent Adjusters
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some carriers have implemented{' '}
        <Link href="/resources/managed-repair-program-drp" className="text-[#2E74B5] underline">
          managed repair programs (also called direct repair programs or DRPs)
        </Link>{' '}
        that add another layer to the independent adjuster dynamic. Under these programs, the carrier
        steers policyholders toward its network of preferred contractors. The independent adjuster
        may be tasked with scoping the loss specifically for the carrier&apos;s preferred vendor,
        using the carrier&apos;s pricing agreements rather than local market rates.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In this context, the independent adjuster&apos;s estimate is not just influenced by the
        carrier &mdash; it may be designed to fit within a predetermined repair program where costs
        are negotiated between the carrier and its preferred vendors. The policyholder&apos;s right
        to choose their own contractor, and to receive an estimate based on actual market costs, can
        be effectively undermined before they ever see a dollar figure.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What to Watch for When an Independent Adjuster Handles Your Claim
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Knowing that the independent adjuster works for the carrier &mdash; not for you &mdash;
        should change how you approach the inspection and everything that follows. Here are specific
        things to watch for and steps you can take to protect yourself.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Be present during the inspection.</strong> Never let an adjuster inspect your
          property without you (or your representative) present. You need to see what they look at,
          what they photograph, and &mdash; just as importantly &mdash; what they do not look at.
          If they skip a room, miss damage in an area you know was affected, or spend only a few
          minutes on a loss that clearly requires hours of documentation, note it. For guidance on
          how to handle the inspection itself, see{' '}
          <Link href="/resources/dealing-with-adjuster" className="text-[#2E74B5] underline">
            how to deal with the insurance company&apos;s adjuster
          </Link>.
        </li>
        <li>
          <strong>Ask for their license number.</strong> As noted above, California law requires
          adjusters to provide their license number in their communications. Ask for it at the
          inspection. Write it down. Verify it on the CDI website. If the adjuster cannot or will
          not provide a license number, document that fact.
        </li>
        <li>
          <strong>Request a copy of their estimate.</strong> You are entitled to see the estimate the
          adjuster writes. Review it carefully. Look for items that are obviously missing, damage that
          you pointed out during the inspection but that does not appear in the estimate, and line
          items that seem inadequate for the scope of work required. Compare it to any contractor
          estimates you have obtained independently.
        </li>
        <li>
          <strong>Document everything independently.</strong> Take your own photographs and video of
          all damage before, during, and after the adjuster&apos;s inspection. Keep a written log of
          what the adjuster looked at, how much time they spent, what questions they asked, and what
          they said about your damage. This documentation becomes invaluable if you need to dispute
          the estimate later.
        </li>
        <li>
          <strong>Ask who reviewed or modified the estimate.</strong> If the estimate you receive
          seems incomplete, ask whether it was reviewed or revised by a desk adjuster or supervisor
          after the field inspection. If line items were removed or reduced, ask for an explanation.
          You have the right to understand how the estimate was developed and what changes were made
          after the field adjuster submitted their work.
        </li>
        <li>
          <strong>Watch for adjuster changes.</strong> If your claim is reassigned from the
          independent adjuster who conducted the initial inspection to a different adjuster &mdash;
          whether staff, desk, or another IA &mdash; pay close attention to whether the new adjuster
          honors the findings of the original inspection or starts from scratch with a different (and
          often more restrictive) approach.{' '}
          <Link href="/resources/adjuster-changes-mid-claim" className="text-[#2E74B5] underline">
            Mid-claim adjuster changes
          </Link>{' '}
          are a common source of frustration and underpayment.
        </li>
        <li>
          <strong>Understand that the initial estimate is a starting point, not a final offer.</strong>{' '}
          The independent adjuster&apos;s estimate is not the last word on your claim. You have the
          right to supplement, negotiate, and dispute. The{' '}
          <Link href="/resources/california-fair-claims" className="text-[#2E74B5] underline">
            California Fair Claims Settlement Practices Regulations
          </Link>{' '}
          require the insurer to conduct a reasonable investigation and provide a fair evaluation. If
          the initial estimate does not reflect the full scope of your damage, you can and should
          push back.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When You Need Someone Working for You
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The fundamental problem with independent adjusters is not that they are bad people or
        incompetent professionals. Many are skilled and experienced. The problem is structural: they
        work for the party that has a financial interest in minimizing your claim. Their continued
        employment depends on producing results that the carrier finds acceptable. The system they
        operate within is designed to prioritize speed and cost control over thoroughness and accuracy.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For small, straightforward claims &mdash; a broken window, a minor water leak with limited
        damage &mdash; this structural misalignment may not matter much. The adjuster&apos;s estimate
        may be close enough to actual costs that the difference is not worth fighting over.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        But for significant losses &mdash; fire damage, large water losses, catastrophe claims,
        claims with coverage questions, or any claim where the initial estimate seems incomplete
        &mdash; the structural incentives of the independent adjusting model create a real risk of
        underpayment. This is when having someone on your side becomes critical. A{' '}
        <Link href="/resources/public-adjuster" className="text-[#2E74B5] underline">
          public adjuster
        </Link>{' '}
        works for you, is paid by you, and has a financial interest in maximizing your recovery
        rather than minimizing the carrier&apos;s payout. An{' '}
        <Link href="/resources/dealing-with-adjuster" className="text-[#2E74B5] underline">
          experienced insurance attorney
        </Link>{' '}
        can address claims where the carrier&apos;s conduct crosses the line from aggressive claims
        handling into bad faith.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Understanding who the independent adjuster actually works for is the first step. What you do
        with that understanding is up to you. But at minimum, do not make the mistake of assuming
        that the word &ldquo;independent&rdquo; means what it sounds like. It does not.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Consolidation Problem: What Happens When a Few Firms Control Most of the Market
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The independent adjusting industry has undergone significant consolidation. A small number
        of large national and multinational firms now handle a disproportionate share of the
        independent adjusting work in the United States. This consolidation has several consequences
        that affect policyholders directly.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        First, consolidation reduces competition among adjusting firms. When carriers have fewer firms
        to choose from, those firms compete primarily on price and efficiency &mdash; not on quality
        or thoroughness. A firm that markets itself as providing the most accurate, most thorough
        claim handling will lose contracts to firms that promise faster turnaround at lower per-claim
        costs. The competitive pressure drives quality down, not up.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Second, consolidation homogenizes the adjusting workforce. Large firms recruit adjusters
        nationally and deploy them wherever demand exists, regardless of local expertise. The local
        adjuster who understood your region&apos;s building codes, construction practices, and pricing
        realities is replaced by a rotating cast of adjusters who may have never worked in your area
        before. This loss of local expertise directly affects the quality of estimates.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Third, consolidation creates a power imbalance. When a large IA firm derives a significant
        percentage of its revenue from a single carrier or a small number of carriers, the firm&apos;s
        economic survival depends on keeping those carriers happy. This dependency does not encourage
        the kind of independent, thorough claims handling that policyholders need. The firm&apos;s
        interests are structurally aligned with its client &mdash; the carrier &mdash; not with the
        policyholder whose property it is evaluating.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Experience Gap: Who Is Adjusting Your Claim?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The independent adjusting model has created an experience gap that directly affects claim
        outcomes. Because large firms constantly need adjusters &mdash; especially during catastrophe
        season &mdash; they recruit aggressively. Some of the adjusters who show up at your door
        after a disaster have years or decades of experience. Others may have completed a training
        course just weeks earlier.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        There is nothing wrong with being new to a profession. Every experienced adjuster started
        somewhere. But the stakes are high when an adjuster with limited experience is tasked with
        evaluating a complex loss &mdash; a fire claim with smoke migration issues, a water loss
        with potential mold exposure, a wind claim where the damage is difficult to distinguish from
        pre-existing wear. These claims require judgment that develops through years of practice, and
        they require the willingness to document damage thoroughly even when it increases the estimate
        beyond what the adjuster may expect the carrier to accept easily.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Newer adjusters, in particular, may default to the most conservative interpretation of what
        they observe. They may be more reluctant to include items that they think the carrier will
        question. They may lack the confidence to push back when a desk reviewer asks them to reduce
        their estimate. The result is an estimate that reflects the adjuster&apos;s caution rather
        than the actual scope of the damage.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you feel that the adjuster who inspected your property lacked the experience to evaluate
        your claim properly, you have options. You can request a reinspection by a more experienced
        adjuster. You can hire a{' '}
        <Link href="/resources/public-adjuster" className="text-[#2E74B5] underline">
          public adjuster
        </Link>{' '}
        to conduct an independent evaluation. And you can document the gaps in the adjuster&apos;s
        inspection to support a supplement or dispute.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why the Word &ldquo;Independent&rdquo; Persists
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the word &ldquo;independent&rdquo; is so misleading, why does the industry continue to use
        it? The answer is partly historical &mdash; the term has been in use for decades and is
        embedded in licensing statutes, trade associations, and industry convention. But it is also
        partly strategic. The word conveys an impression of objectivity and neutrality that benefits
        carriers.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a policyholder is told that an &ldquo;independent&rdquo; adjuster will be handling their
        claim, they are less likely to question the adjuster&apos;s objectivity than they would be
        if they were told that a &ldquo;carrier-contracted&rdquo; adjuster or a &ldquo;company
        outsourced&rdquo; adjuster would be handling it. The terminology creates trust where a more
        accurate description might create skepticism. And that trust, once established, makes the
        policyholder less likely to challenge the adjuster&apos;s findings, question the completeness
        of the estimate, or seek a second opinion.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        You do not need to approach the independent adjuster as an adversary. But you do need to
        approach them as what they are: someone who works for the insurance company, is paid by the
        insurance company, and whose continued livelihood depends on producing results that the
        insurance company finds acceptable. That understanding alone will change how you interact
        with them, what you document, and whether you accept their estimate as the final word on
        your claim.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Key Takeaways
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          An &ldquo;independent&rdquo; adjuster is independent only in the labor-law sense &mdash;
          they are a contractor rather than an employee. They work for the insurance company, are
          paid by the insurance company, and report to the insurance company.
        </li>
        <li>
          Independent adjusters are compensated through various models &mdash; commissions (for CAT
          claims), salary, piece rates, or timesheets &mdash; each of which creates incentives that
          may not align with thorough, accurate claims handling for the policyholder.
        </li>
        <li>
          The carrier controls the independent adjuster&apos;s work through scope restrictions,
          estimate review processes, and the power to deploy or de-select adjusters based on
          performance metrics.
        </li>
        <li>
          In California, independent adjusters must provide their license number in their
          communications. Ask for it, verify it, and document it.
        </li>
        <li>
          The consolidation of the IA industry into a few large national firms has reduced local
          expertise, increased volume pressure, and structurally discouraged thorough claims handling.
        </li>
        <li>
          A{' '}
          <Link href="/resources/public-adjuster" className="text-[#2E74B5] underline">
            public adjuster
          </Link>{' '}
          is the only type of adjuster who works for you. If your claim is significant, complex, or
          being underpaid, consider retaining one.
        </li>
        <li>
          The initial estimate from an independent adjuster is a starting point, not a final answer.
          You have the right to supplement, negotiate, and dispute under the{' '}
          <Link href="/resources/california-fair-claims" className="text-[#2E74B5] underline">
            California Fair Claims Settlement Practices Regulations
          </Link>.
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
