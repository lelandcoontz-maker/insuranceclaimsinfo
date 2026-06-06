import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Overhead and Profit: When Your Insurance Company Owes It and Why They Refuse',
  description:
    'Insurance carriers routinely deny overhead and profit on repair estimates. The \'three-trade rule\' they cite has no legal basis. Here is what O&P actually is, when it\'s owed, and how to fight the denial.',
  summary:
    'Carriers routinely deny overhead and profit, citing a \'three-trade rule\' with no real legal basis as a bar. O&P is owed whenever a general contractor is reasonably needed; know what it is and how to fight the denial.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="Legal Disclaimer">
        <p>
          This article is for general educational purposes only. It is not legal advice. Insurance
          policies, state regulations, and case outcomes vary based on jurisdiction and individual
          facts. Consult a licensed attorney for guidance on your specific situation.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        Overhead and Profit &mdash; O&amp;P &mdash; typically adds 20% to the cost of your repair
        estimate. It is the fee a general contractor charges to manage your project: 10% for
        overhead (their business costs) and 10% for profit (their margin). Without it, your
        insurance estimate assumes you are going to manage the entire rebuild yourself.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance carriers deny O&amp;P on claims constantly. It is one of the most common
        ways they reduce payouts, and most policyholders never realize money is missing from
        their settlement. The carrier strips it off the estimate quietly, buries the reasoning
        in jargon, and hopes you will not ask questions.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        On a $60,000 repair, the difference is $12,000. On a $150,000 fire loss, it is $30,000.
        This is not a rounding error. It is a substantial portion of your claim, and you are
        entitled to it whenever a general contractor is reasonably likely to be involved in
        your repairs.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This article explains what O&amp;P actually is, where the numbers come from, why the
        carrier&apos;s favorite excuse for denying it has no legal basis, and what you can do
        about it.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">What Is Overhead and Profit?</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When you hire a general contractor to manage a repair project, they do not work for
        free. They coordinate subcontractors, pull permits, schedule inspections, order
        materials, handle callbacks, and keep the project on track. For that work, they charge
        overhead and profit on top of the direct costs of labor and materials.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The industry standard is 10% overhead plus 10% profit. This is not some inflated
        number that contractors invented. It is what the market bears for general contracting
        services on residential repair work. Xactimate &mdash; the estimating software used
        by virtually every insurance company in the country &mdash; treats 10 and 10 as the
        default when O&amp;P is applied.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here is the critical point that most people miss: Xactimate&apos;s unit pricing does
        NOT include overhead and profit. The line item prices in Xactimate reflect the cost of
        a subcontractor performing the work &mdash; the painter, the plumber, the drywall
        finisher. They do not include any fee for a general contractor to manage those subs.
        O&amp;P must be added on top of the line item totals.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When the insurance company gives you an estimate without O&amp;P, they are telling you
        that you should act as your own general contractor. They are assuming you will
        personally hire each trade, schedule them in the right sequence, verify code compliance,
        manage quality control, and deal with the inevitable problems. That is not a reasonable
        assumption for most homeowners dealing with a significant loss.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">The Three Overhead Categories</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Xactimate&apos;s own documentation breaks overhead into three distinct categories.
        Understanding these matters because carriers frequently confuse them &mdash; sometimes
        deliberately &mdash; to justify removing legitimate costs from your estimate.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">General Overhead</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        General overhead is the cost of running a contracting business that cannot be attributed
        to any single project. This includes office rent, administrative staff salaries,
        licensing fees, advertising, general liability insurance, vehicle costs, accounting,
        and all the other expenses a contractor pays whether they have one job or twenty.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the &ldquo;10% overhead&rdquo; that gets applied as a percentage on the
        estimate. It compensates the general contractor for the share of their fixed business
        expenses that each project must carry. Every legitimate contracting business has these
        costs, and they are real.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Job-Related Overhead</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Job-related overhead consists of costs that are specific to a particular project but
        not attributable to any single task within that project. Examples include project
        managers and supervisors assigned to the job, portable sanitation facilities, temporary
        power, site security, perimeter fencing, dumpster rental, and temporary weather
        protection.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is an important distinction: job-related overhead should appear as separate line
        items on the estimate, not as a percentage. These are real, measurable costs that vary
        by project. A large fire repair that runs six months will have significant supervision
        and site costs. A smaller water loss might have none. Each project gets priced based on
        what it actually requires.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Job-Personnel Overhead</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Job-personnel overhead covers the employer&apos;s cost of having workers on the job
        &mdash; payroll taxes, workers&apos; compensation insurance, health benefits, and
        similar labor burden items. This category is already built into Xactimate&apos;s labor
        rates. No separate charge is needed, and no one is suggesting one should be added.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The reason this category matters is that carriers sometimes argue &ldquo;overhead is
        already in the line items.&rdquo; They are confusing job-personnel overhead (which is
        included) with general overhead (which is not). These are fundamentally different costs,
        and Xactimate&apos;s documentation makes this clear.
      </p>

      <CalloutBox variant="important" title="Key Distinction">
        <p>
          Direct job supervision &mdash; a project manager or superintendent physically
          overseeing the work &mdash; is explicitly categorized as job-related overhead in
          Xactimate&apos;s documentation. It is NOT part of general O&amp;P. It should be its
          own line item when the scope warrants it. Carriers routinely strip supervision claiming
          it is &ldquo;included in O&amp;P.&rdquo; Their own estimating software says otherwise.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The &ldquo;Three-Trade Rule&rdquo; &mdash; And Why It&apos;s Fiction
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Ask an insurance adjuster why O&amp;P was excluded from your estimate and you will
        almost certainly hear some version of the &ldquo;three-trade rule.&rdquo; The claim
        goes like this: O&amp;P is only owed when three or more trades are involved in the
        repair. Fewer than three trades means the homeowner can manage it themselves, so no
        general contractor is needed, so no O&amp;P is owed.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This rule has no statutory basis. It has no regulatory basis. There is no binding case
        law that establishes three trades as the threshold. It does not appear in any state
        insurance code. It does not appear in California&apos;s Fair Claims Settlement Practices
        Regulations. It does not appear in the NAIC model acts.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The three-trade rule appears to have originated as an internal insurance industry
        guideline &mdash; a rule of thumb that carriers adopted among themselves and then
        began presenting to policyholders as though it were law. It is not law. It never was.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The actual legal standard is straightforward: O&amp;P is owed when the services of a
        general contractor are reasonably likely to be needed. That determination depends on the
        complexity of the project, the need for coordination between trades, permitting
        requirements, code compliance, and whether it is reasonable to expect a homeowner to
        self-manage the work.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Even a two-trade job can warrant O&amp;P. If your bathroom flood requires plumbing
        repairs and a full tile rebuild, that project involves sequencing, waterproofing
        inspections, and material coordination. A homeowner should not be expected to manage
        that themselves just because only two trades are technically involved.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">What the Courts Have Said</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Several courts have addressed the O&amp;P issue directly, and their reasoning
        consistently rejects the carrier position:
      </p>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Mee v. Safeco (Pennsylvania, 2006):</strong> A toilet overflow required six
          different trades to repair. The carrier excluded O&amp;P from its estimate. The court
          held that O&amp;P must be included in the replacement cost estimate regardless of
          whether the homeowner actually hired a general contractor. The cost of repair includes
          what it would cost to have the work managed professionally.
        </li>
        <li>
          <strong>Tritschler v. Allstate (Arizona, 2006):</strong> The carrier took the position
          that it would only pay O&amp;P if the insured actually hired a general contractor and
          provided proof. The court rejected this. Replacement cost means the cost to replace or
          repair using methods and materials of like kind and quality &mdash; and that cost
          includes a GC&apos;s fee when one would reasonably be needed, whether or not the
          homeowner actually engages one.
        </li>
        <li>
          <strong>Ghoman v. New Hampshire Insurance (Texas, federal court):</strong> The court
          held that replacement costs must include any cost an insured is reasonably likely to
          incur in making the repairs. This is the &ldquo;reasonably likely&rdquo; standard that
          several jurisdictions have adopted. It asks what costs a reasonable homeowner would
          face, not what the particular homeowner actually spent.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The pattern across these cases is consistent. Courts look at whether a general
        contractor&apos;s involvement is reasonably likely given the scope of work. They do
        not count trades and apply an arbitrary threshold. They do not require the homeowner
        to prove they actually hired a GC. They ask a simple question: would a reasonable
        person hire a general contractor for this project?
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Note that even in states where some version of the three-trade guideline
        is informally referenced, it is treated as a floor, not a ceiling. If three or more
        trades are involved, O&amp;P should always be included. But fewer than three trades
        does not automatically exclude it. The analysis is always whether a GC is reasonably
        needed &mdash; and that depends on the specific facts of the repair, not an arbitrary
        number.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Supervision as a Separate Line Item</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is one of the most misunderstood aspects of O&amp;P disputes, and carriers exploit
        the confusion aggressively.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Xactimate&apos;s own documentation classifies direct job supervision &mdash; a project
        manager or superintendent on site managing the work &mdash; as job-related overhead.
        It is not part of general O&amp;P. It is a separate cost category that should appear
        as its own line item when the project warrants it.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Carriers routinely remove supervision line items with the explanation that supervision
        is &ldquo;already included in overhead and profit.&rdquo; This is incorrect based on
        the carrier&apos;s own estimating software documentation. General O&amp;P compensates
        for fixed business expenses and the contractor&apos;s profit margin. Supervision is a
        variable, project-specific cost for having a qualified person physically present to
        manage the work.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Think of it this way: general overhead pays for the contractor&apos;s office, their
        bookkeeper, and their truck. Supervision pays for the person who shows up at your
        house every day to make sure the drywall crew does not cover up the plumbing before
        inspection. These are obviously different things.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">When to Include Supervision</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Multi-phase projects where trades must be carefully sequenced (demolition before
          rough-in, rough-in before inspection, inspection before close-up)
        </li>
        <li>
          Projects requiring code compliance verification at multiple stages
        </li>
        <li>
          Work involving coordination across three or more subcontractor crews
        </li>
        <li>
          Projects where material deliveries must be staged and protected
        </li>
        <li>
          Any scope where the GC would reasonably assign a project manager or superintendent
          to the job rather than checking in periodically
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        On a typical fire loss or major water damage claim, supervision is not optional. It is
        how construction works. The carrier knows this. Their own field adjusters see
        supervised projects every day. When they strip the line item, they are counting on you
        not knowing the difference.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When O&amp;P Is Owed &mdash; The Real Standard
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Forget the three-trade rule. The actual standard for when O&amp;P belongs on an
        estimate comes down to one question: is it reasonably likely that a general contractor
        will be involved in these repairs? Here are the factors that answer that question:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Multiple trades are required.</strong> If the repair involves more than one
          specialty &mdash; plumbing and drywall, roofing and painting, electrical and framing
          &mdash; someone has to coordinate them.
        </li>
        <li>
          <strong>The project requires scheduling and sequencing.</strong> Trades cannot all
          show up on the same day. Demo comes before framing. Framing comes before electrical.
          Electrical comes before drywall. Someone has to manage this timeline.
        </li>
        <li>
          <strong>Inspections are required.</strong> Building permits mean inspections, and
          inspections mean someone has to be available to meet the inspector, address any
          corrections, and schedule the next phase.
        </li>
        <li>
          <strong>The homeowner cannot reasonably self-manage.</strong> Most homeowners do not
          know how to coordinate construction. They do not know the sequence of trades, the
          inspection requirements, the material lead times, or how to manage quality. The
          policy is supposed to put them back where they were &mdash; not force them to become
          project managers.
        </li>
        <li>
          <strong>The scope is complex enough that self-management is impractical.</strong> A
          single coat of paint on one wall? Maybe no GC needed. A kitchen rebuild with
          plumbing, electrical, cabinets, countertops, flooring, drywall, and paint? No
          reasonable person would manage that without professional help.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The key principle running through all of this: O&amp;P is based on what is
        &ldquo;reasonably likely,&rdquo; not what actually happened. The carrier cannot deny
        O&amp;P because you have not yet hired a GC. The carrier cannot deny it because you
        chose to manage part of the project yourself. The estimate reflects what the repairs
        would cost if done properly through normal channels &mdash; and normal channels
        include a general contractor on any project of meaningful complexity.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Common Carrier Arguments and How to Respond
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here are the arguments you will hear from the insurance company, and why each one
        fails:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        &ldquo;Less than three trades are involved.&rdquo;
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        There is no legal basis for a three-trade rule. It is an industry-created guideline
        with no statutory, regulatory, or judicial authority behind it. The standard is whether
        a GC is reasonably likely to be needed &mdash; and that can be true with two trades or
        even one trade if the scope is complex enough to warrant professional management.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        &ldquo;You have not hired a general contractor yet.&rdquo;
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        O&amp;P is based on reasonable likelihood, not actual hiring. The insurance company
        owes the cost of repair regardless of whether you have already engaged a contractor.
        You are not required to hire someone before the carrier will acknowledge what the
        repairs actually cost. Multiple courts have rejected this argument directly.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        &ldquo;We will add it when you show us a GC invoice.&rdquo;
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Replacement cost means what it would cost to repair the property, not what you actually
        spent. The carrier cannot condition payment on proof of expenditure for purposes of
        determining the scope and cost of covered repairs. You are entitled to know what the
        repairs cost so you can make informed decisions &mdash; including whether to hire a GC,
        which GC to hire, and how to budget the project.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        &ldquo;It is included in our line item pricing.&rdquo;
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is factually wrong. Xactimate&apos;s documentation explicitly states that general
        contractor overhead and profit are not included in line item pricing. Line items reflect
        subcontractor costs &mdash; labor and materials for the trade performing the work. The
        GC&apos;s markup is separate. If the carrier disagrees, ask them to cite the specific
        Xactimate documentation that supports their position. They will not be able to.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        &ldquo;The scope is too small for a general contractor.&rdquo;
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Small scope does not automatically mean no GC is needed. A &ldquo;small&rdquo; water
        loss that involves demolition, drying, plumbing repair, drywall replacement, texture
        matching, painting, and baseboard installation involves seven separate operations.
        Most homeowners are not equipped to manage that, regardless of the dollar amount.
        The question is not how big the claim is &mdash; it is whether the work requires
        professional coordination.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        &ldquo;We only pay O&amp;P on large losses.&rdquo;
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        There is no dollar threshold in any state&apos;s insurance code or regulations that
        limits O&amp;P to large claims. A $15,000 repair that involves four trades needs a
        general contractor just as much as a $150,000 repair. The complexity of coordination
        does not correlate neatly with the total dollar amount. Carriers use this argument to
        suppress O&amp;P on the medium-sized claims where most homeowners will not push back.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">What You Can Do</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your insurance company has denied or excluded O&amp;P from your estimate, here are
        concrete steps to fight it:
      </p>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Request the carrier&apos;s basis in writing.</strong> Ask them to provide a
          written explanation of why O&amp;P was excluded, including any regulation, statute, or
          policy language they are relying on. Most of the time, they will cite the three-trade
          rule &mdash; which gives you an easy rebuttal because it has no legal authority.
        </li>
        <li>
          <strong>Reference Xactimate&apos;s own documentation.</strong> The software the
          carrier used to write your estimate explicitly states that line item pricing does not
          include general contractor O&amp;P. Their tool contradicts their position.
        </li>
        <li>
          <strong>Get a contractor&apos;s bid.</strong> Ask a licensed general contractor to
          provide a bid for the repairs. It will include O&amp;P because that is how contracting
          works. This demonstrates that the market price for your repairs includes a GC fee.
          Virtually every legitimate contractor will include it.
        </li>
        <li>
          <strong>Count the trades in the carrier&apos;s own estimate.</strong> Even if the
          three-trade rule were valid (it is not), carriers often strip O&amp;P from estimates
          that contain four, five, or six trades. Point out the inconsistency. If they list
          plumbing, drywall, paint, flooring, and electrical in their own scope but exclude
          O&amp;P, their position contradicts itself.
        </li>
        <li>
          <strong>File a complaint with the California Department of Insurance.</strong> Under
          10 CCR 2695.7, the carrier must pay claims based on the reasonable cost of repair.
          If they are systematically excluding a legitimate component of repair cost without
          legal justification, that is an unfair claims practice. A{' '}
          <Link href="/resources/cdi-right-to-claim-documents" className="text-[#2E74B5] hover:underline">
            CDI complaint
          </Link>{' '}
          puts it on the record.
        </li>
        <li>
          <strong>Hire a Public Adjuster or appraiser.</strong> A{' '}
          <Link href="/resources/public-adjuster" className="text-[#2E74B5] hover:underline">
            licensed Public Adjuster
          </Link>{' '}
          can write a proper Xactimate estimate that includes O&amp;P with documentation
          supporting why it is owed. If the dispute cannot be resolved through negotiation, it
          can be taken to{' '}
          <Link href="/resources/appraisal" className="text-[#2E74B5] hover:underline">
            appraisal
          </Link>{' '}
          where an independent appraiser and umpire make the final determination.
        </li>
        <li>
          <strong>Do not accept &ldquo;we will supplement later.&rdquo;</strong> Carriers
          sometimes say they will add O&amp;P once you start repairs or once you prove you
          hired a GC. This is a delay tactic. You are entitled to a complete estimate up
          front so you can make informed decisions about your repairs.
        </li>
      </ol>

      <CalloutBox variant="tip" title="The Bottom Line on O&amp;P">
        <p>
          Overhead and Profit is owed whenever a general contractor is reasonably likely to be
          involved in your repairs. The three-trade rule that carriers cite has no legal basis
          &mdash; it is an industry invention. Supervision is a separate line item, not part of
          general O&amp;P. If your estimate excludes O&amp;P on a multi-trade repair, you are
          being underpaid, and you have every right to push back.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">The Math Matters</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        To understand why carriers fight so hard on O&amp;P, consider the scale. If a carrier
        handles 10,000 property claims per year in California and denies O&amp;P on half of
        them, and the average suppressed O&amp;P amount is $8,000, that is $40 million in
        claims costs they have avoided paying. Per year. For one carrier.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is not about whether your specific roof repair &ldquo;really needs&rdquo; a
        general contractor. It is a business decision by the carrier to systematically exclude
        a legitimate cost component from estimates and bet that most policyholders will not
        fight it. The ones who do fight get paid. The ones who do not save the carrier money.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Do not be the one who does not fight.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">How O&amp;P Is Calculated</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The math is simple but often misunderstood. O&amp;P is applied to the net direct costs
        of repair &mdash; the total of all line items before tax and O&amp;P. Here is how it
        works on a $50,000 estimate:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Direct repair costs (all line items): $50,000</li>
        <li>10% Overhead: $5,000</li>
        <li>10% Profit (applied to direct costs + overhead): $5,500</li>
        <li>Total with O&amp;P: $60,500</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Note that in Xactimate, profit is calculated on the base plus overhead &mdash; so
        the combined effect is slightly more than a flat 20%. On a $50,000 estimate, O&amp;P
        adds $10,500, not $10,000. This is the mathematically correct application and it is
        how the software calculates it by default.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some carriers will argue for a flat 20% (profit on base only, not on base plus
        overhead). While the difference is small, it is still an underpayment. The standard
        Xactimate methodology applies profit after overhead has been added. If the carrier is
        using Xactimate to write the estimate, they should follow the software&apos;s own
        calculation method.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        O&amp;P on Supplements
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When additional damage is discovered during repairs and a{' '}
        <Link href="/resources/supplemental-claims" className="text-[#2E74B5] hover:underline">
          supplement
        </Link>{' '}
        is filed, O&amp;P should be included on the supplemental amount as well. The same
        logic applies: if a GC is managing the overall project, their overhead and profit
        apply to the entire scope of work, including anything discovered after demolition
        begins.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Carriers sometimes agree to O&amp;P on the initial estimate but refuse it on
        supplements. This makes no sense. If the project warrants a GC, it warrants a GC for
        the whole project &mdash; not just the first phase. The GC does not stop charging
        overhead because additional work was discovered mid-project.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Watch for this tactic: the carrier approves O&amp;P on the original $40,000 estimate,
        then a $25,000 supplement is filed for hidden damage found behind walls. The carrier
        pays the supplement amount but strips O&amp;P from it. The homeowner does not notice
        because the check is still substantial. But $5,000 in O&amp;P just disappeared from
        the claim. The GC still charges it &mdash; the homeowner is just expected to eat the
        difference.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        O&amp;P and Emergency Services
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A question that comes up frequently: does O&amp;P apply to mitigation and emergency
        services? The answer depends on who is performing the work. If the general contractor
        is coordinating the emergency response as part of the overall project &mdash; which is
        common on larger losses where the GC is brought in early &mdash; then yes, their
        O&amp;P applies to the full scope including emergency work.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If a separate mitigation company handles the emergency work independently (water
        extraction, board-up, tarping), that work is typically billed directly by the
        mitigation company at their own rates and does not have GC O&amp;P added on top.
        However, the repair work that follows the mitigation &mdash; even if it is directly
        related to the same loss event &mdash; is a separate scope that does warrant O&amp;P
        when a GC manages it.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Carriers occasionally try to lump mitigation and repair together and argue that
        because the mitigation company &ldquo;already handled&rdquo; part of the work, fewer
        trades remain for the repair phase, so no GC is needed. This is flawed logic.
        Mitigation and repair are different scopes performed at different times for different
        purposes. The repair scope stands on its own.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        California-Specific Considerations
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California&apos;s{' '}
        <Link href="/resources/california-fair-claims" className="text-[#2E74B5] hover:underline">
          Fair Claims Settlement Practices Regulations
        </Link>{' '}
        (10 CCR 2695) require insurers to pay claims based on the actual cost of repair.
        The underlying statutory measure comes from Cal. Ins. Code &sect; 2051(b), which
        defines the measure of recovery for either a total or partial loss as &ldquo;the
        amount it would cost the insured to repair, rebuild, or replace the thing lost or
        injured less a fair and reasonable deduction for physical depreciation.&rdquo;
      </p>
      <p className="text-sm text-gray-500 italic">
        Cal. Ins. Code &sect; 2051(b), as amended by AB 188 (Stats. 2019, ch. 59), effective
        January 1, 2020. AB 188 (2019) eliminated the prior &sect; 2051(b)(1)/(b)(2)
        bifurcation between total and partial losses.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        That phrase &mdash; &ldquo;the amount which it would cost the insured&rdquo; &mdash;
        is the key. It does not say the amount the insured actually spent. It does not say
        the amount the insured could save by acting as their own GC. It says what it would
        cost. And for most repairs of any complexity, what it would cost includes overhead
        and profit for a general contractor.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Additionally, 10 CCR 2695.7(g) prohibits insurers from recommending or suggesting
        that the claimant &ldquo;not submit a claim or not pursue a claim based upon
        insufficient information.&rdquo; When a carrier tells you O&amp;P is not owed without
        providing a legitimate basis, they are discouraging you from pursuing money you are
        entitled to.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        California also requires insurers under 10 CCR 2695.9(b) to provide a written estimate
        that is &ldquo;reasonable in amount and scope.&rdquo; An estimate that systematically
        excludes a legitimate cost component &mdash; one that the carrier&apos;s own software
        recognizes as separate from line item pricing &mdash; is not reasonable. It is an
        estimate designed to underpay.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When O&amp;P Disputes Go to Appraisal
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you cannot resolve the O&amp;P dispute through negotiation, it becomes a dispute
        over the &ldquo;amount of loss&rdquo; &mdash; which means it can be submitted to the{' '}
        <Link href="/resources/appraisal" className="text-[#2E74B5] hover:underline">
          appraisal process
        </Link>{' '}
        under most California property policies. In appraisal, your appraiser and the
        carrier&apos;s appraiser each prepare their own estimate. If they disagree, an umpire
        breaks the tie.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        O&amp;P disputes are excellent candidates for appraisal because they are straightforward
        factual questions: does this scope require a general contractor? The answer is almost
        always yes on multi-trade claims. Appraisers and umpires who work in the construction
        industry understand this. They include O&amp;P routinely because that is how
        construction pricing actually works.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        One caveat: some carriers argue that O&amp;P is a &ldquo;coverage&rdquo; question
        rather than an &ldquo;amount&rdquo; question, and therefore outside the scope of
        appraisal. This argument is weak. O&amp;P is not a separate coverage &mdash; it is a
        component of the cost to repair, which is exactly what appraisal is designed to
        determine. Most umpires reject this objection.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Related Resources</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <Link href="/resources/xactimate" className="text-[#2E74B5] hover:underline">
            Xactimate Estimates: What You Need to Know
          </Link>{' '}
          &mdash; how the estimating software works and where carrier estimates go wrong
        </li>
        <li>
          <Link href="/resources/supplemental-claims" className="text-[#2E74B5] hover:underline">
            Supplemental Claims
          </Link>{' '}
          &mdash; filing for additional damage discovered during repairs
        </li>
        <li>
          <Link href="/resources/california-fair-claims" className="text-[#2E74B5] hover:underline">
            California Fair Claims Settlement Practices Regulations
          </Link>{' '}
          &mdash; every rule your insurer must follow on a property claim
        </li>
        <li>
          <Link href="/resources/cdi-right-to-claim-documents" className="text-[#2E74B5] hover:underline">
            Your Right to Claim Documents
          </Link>{' '}
          &mdash; what the carrier must provide when you ask
        </li>
        <li>
          <Link href="/resources/public-adjuster" className="text-[#2E74B5] hover:underline">
            Hiring a Public Adjuster
          </Link>{' '}
          &mdash; when it makes sense and how the process works
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
