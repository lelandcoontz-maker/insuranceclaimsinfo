import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Xactimate Labor Minimums: The Line Items Carriers Quietly Remove',
  description:
    'What a labor minimum is in Xactimate, why the software adds them automatically, how they get removed during review, and what a policyholder can do about it.',
  summary:
    'Xactimate automatically adds labor-minimum line items when calculated labor for a trade falls below its minimum service charge, because no tradesperson shows up for twenty minutes of work. Those auto-generated items are frequently deleted during estimate review, and on small claims their removal can be the difference between a payable claim and nothing.',
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
        <em>A detailed guide for policyholders, Public Adjusters, and attorneys on one of
        the least understood pieces of an Xactimate estimate &mdash; the labor minimum &mdash;
        why the software adds these line items automatically, and why they so often
        disappear between the initial estimate and the one the policyholder actually
        receives.</em>
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        There is a category of line item in Xactimate that most policyholders have never
        heard of, that the software adds on its own without anyone typing it in, and that
        has a habit of vanishing from carrier estimates before the policyholder ever sees
        them. It is called a labor minimum, and on small claims it can represent a
        substantial share of the entire estimate.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The concept is simple, and it comes straight from how the trades actually work.
        No plumber drives across town, parks the truck, unloads tools, and does twenty
        minutes of work for twenty minutes of pay. No electrician bills in six-minute
        increments the way a lawyer does. Every trade has a minimum charge for showing up
        at all &mdash; a service-call floor that covers travel, mobilization, and the
        opportunity cost of a job too small to fill the day. Xactimate knows this. Its
        pricing database is built around it. And when the carrier&apos;s estimate quietly
        strips that reality out, the estimate stops describing what the repair will
        actually cost.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This article explains what a labor minimum is, how Xactimate generates one, where
        labor minimums legitimately belong, how they get removed during estimate review,
        when removal is actually defensible, and what an insured can do when the minimums
        that should be in the estimate are not.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What a Labor Minimum Is
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Every trade in the Xactimate pricing database &mdash; plumber, electrician,
        drywall installer, painter, carpenter, roofer, flooring installer, and dozens of
        others &mdash; carries a minimum service charge. The price list defines that
        minimum per trade, per region. A plumber&apos;s minimum in the Los Angeles pricing
        region is not the same as a plumber&apos;s minimum in rural Northern California,
        and neither is the same as an electrician&apos;s minimum in either place. The
        minimum represents the smallest amount for which that trade will realistically
        take a job in that market.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Here is how the mechanism works inside the software. As an estimator adds{' '}
        <Link href="/resources/xactimate-line-items" className="text-[#2E74B5] hover:underline">
          line items
        </Link>
        , Xactimate tracks the total labor assigned to each trade across the entire
        estimate. When the estimate is complete, the software compares each trade&apos;s
        calculated labor total against that trade&apos;s minimum service charge from the
        price list. If the calculated labor falls below the minimum, Xactimate
        automatically adds a labor-minimum line item to make up the difference &mdash;
        an item with a description like &ldquo;Plumber &mdash; labor minimum&rdquo; or
        &ldquo;Electrician &mdash; labor minimum.&rdquo;
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The key point: nobody types these items in. They are generated by the software
        itself, applying the pricing rules in the carrier&apos;s own selected price list.
        When a labor minimum appears in an Xactimate estimate, it is there because the
        estimating platform &mdash; the same platform the carrier chose, configured, and
        relies on for every other number in the estimate &mdash; determined that the
        calculated labor for that trade was less than what that trade charges to show up.
      </p>

      <CalloutBox variant="info" title="A Concrete Example">
        <p>
          Suppose an estimate calls for an electrician to disconnect and reconnect one
          light fixture &mdash; perhaps forty-five minutes of calculated labor, worth
          maybe $90 at the price list&apos;s hourly rate. If the electrician&apos;s
          regional minimum service charge is $250, Xactimate adds an
          &ldquo;Electrician &mdash; labor minimum&rdquo; line item for the difference,
          bringing the electrical trade total to $250. That is not padding. That is what
          it costs to get a licensed electrician to the property for a small task,
          because no electrician accepts a $90 service call.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        Which price list the estimate uses matters here, just as it matters for every
        other price in the file. The minimums are defined per region and per month, so an
        estimate written on the wrong region or a stale{' '}
        <Link href="/resources/xactimate-price-list-dates" className="text-[#2E74B5] hover:underline">
          price list date
        </Link>{' '}
        can understate the minimums even when they are present. But the more common
        problem &mdash; and the subject of this article &mdash; is not that the minimums
        are underpriced. It is that they are gone.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Where Labor Minimums Appear: The Anatomy of a Small Scope
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Labor minimums live in small scopes. On a large fire rebuild where the plumber
        has three days of work, the plumber&apos;s calculated labor dwarfs the minimum
        and no minimum line item is generated &mdash; correctly so. The minimum only
        triggers when a trade&apos;s footprint in the estimate is small. Typical
        examples:
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>One light fixture</strong> &mdash; a ceiling fixture that must be
          detached before drywall repair and reset afterward. Total calculated
          electrician time: well under an hour
        </li>
        <li>
          <strong>Three feet of baseboard</strong> &mdash; a finish carpenter&apos;s
          entire involvement in the claim is replacing a short run of trim
        </li>
        <li>
          <strong>A single supply line or angle stop</strong> &mdash; the plumber&apos;s
          only task is disconnecting and reconnecting one fixture during floor work
        </li>
        <li>
          <strong>Rehanging one door</strong> &mdash; a door that swelled or was removed
          during mitigation and needs to be rehung and adjusted
        </li>
        <li>
          <strong>One HVAC register</strong> &mdash; a mechanical trade whose entire
          scope is resetting a grille and checking a duct connection
        </li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        Now consider what a modest residential water loss actually looks like. A supply
        line fails under a kitchen sink. The mitigation contractor dries the structure.
        The repair scope ends up touching lower cabinets, a small area of flooring, a
        few feet of drywall, paint, a section of baseboard, one plugmold strip, and the
        sink&apos;s plumbing connections. That is a small claim &mdash; but it involves a
        plumber, an electrician, a finish carpenter, a drywall installer, a painter, and
        a flooring installer, each for a fraction of a day. A scope like that can
        legitimately carry four or five separate labor minimums, and Xactimate, left to
        its own rules, will generate every one of them. The{' '}
        <Link href="/resources/scope-of-loss" className="text-[#2E74B5] hover:underline">
          scope of loss
        </Link>{' '}
        is small; the trade count is not.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This is not a quirk. It is the software accurately modeling a real-world truth:
        small multi-trade repairs are expensive per unit of work precisely because each
        trade must mobilize for a small task. Anyone who has ever paid a plumber&apos;s
        service-call fee for a ten-minute fix understands this instinctively. The
        estimate is supposed to reflect it.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Labor Minimums Vanish
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Here is the pattern, stated the way it actually operates: estimating platforms
        generate labor minimums automatically; review processes remove them. The software
        applies the pricing rules; human review layers &mdash; desk reviewers, quality
        assurance audits, third-party estimate-review vendors, and in some cases the
        field adjuster responding to those layers &mdash; take the auto-generated items
        back out. Nobody has to intend an unfair outcome for the outcome to be unfair.
        The incentives of the review process point one direction, and the labor minimums
        are among the easiest items to point at.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The removal typically happens in one of a few ways:
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Direct deletion</strong> &mdash; a reviewer deletes the labor-minimum
          line items from the estimate before it is issued. The estimate the policyholder
          receives shows forty-five minutes of electrician time priced as forty-five
          minutes of electrician time, as though electricians billed like attorneys
        </li>
        <li>
          <strong>Trade merging</strong> &mdash; small tasks are reassigned from their
          proper trade to a general laborer or handyman category, or several trades&apos;
          tasks are consolidated under one trade, so that no individual trade&apos;s
          labor falls below its minimum and the software never generates the items in the
          first place
        </li>
        <li>
          <strong>One-minimum guidelines</strong> &mdash; some carriers instruct their
          estimate writers or reviewers that only a single labor minimum may apply per
          estimate, regardless of how many distinct trades the repair requires. The
          guideline treats the minimum as a courtesy to be rationed rather than a pricing
          rule the platform applies per trade
        </li>
        <li>
          <strong>Review-vendor flagging</strong> &mdash; automated and semi-automated
          estimate-review systems flag labor minimums as cost-reduction opportunities,
          and the flagged items are removed unless someone pushes back
        </li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        Whatever the mechanism, the result is the same. The carrier selected the
        estimating platform. The carrier selected the price list. The platform, applying
        that price list, said the electrical work in this claim costs $250 because that
        is the electrician&apos;s minimum in this market. And the estimate that went out
        the door says $90. The deviation is not between the policyholder&apos;s opinion
        and the carrier&apos;s opinion &mdash; it is between the carrier&apos;s own
        tool&apos;s output and the carrier&apos;s final number.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        It is worth being precise about what this article is and is not saying. This is
        not an accusation that any individual adjuster or reviewer is acting in bad
        faith. Most are applying guidelines they did not write, inside a review system
        designed to catch overstatement and structurally indifferent to understatement.
        The commentary here is about system design and incentives, not personal intent.
        For the same reason, an Xactimate output is not sacred either &mdash; the
        software&apos;s numbers are a starting point, not a legal entitlement, a point
        developed at length in{' '}
        <Link href="/resources/xactimate-not-the-law" className="text-[#2E74B5] hover:underline">
          Xactimate Is Not the Law
        </Link>
        . But when a carrier holds the software out as the authoritative basis for its
        estimate and then silently deletes the parts of the output that favor the
        policyholder, the inconsistency is fair to point out.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When Removing a Labor Minimum Is Arguably Legitimate
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Not every deleted labor minimum is an underpayment. There are situations where
        removal is defensible, and recognizing them matters &mdash; both because fairness
        requires it and because a challenge that ignores the legitimate cases is easy for
        a carrier to dismiss.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        The Trade Is Already On Site for Substantial Work
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The clearest case: if the plumber is already at the property for a day and a half
        of repiping, the additional twenty minutes to reset one more angle stop does not
        trigger a separate service call. The minimum exists to cover mobilization, and
        the mobilization is already paid for inside the larger labor total. In Xactimate
        terms, this usually resolves itself &mdash; when a trade&apos;s calculated labor
        across the whole estimate exceeds the minimum, the software does not generate a
        minimum line item at all. But where an estimate has been split into phases or
        separate files, a minimum can appear in one file for a trade that has substantial
        work in another, and consolidating is reasonable.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Genuinely Combinable Tasks
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Some small tasks really can be performed by one trade in one visit. If the scope
        includes rehanging a door, reinstalling three feet of baseboard, and resetting a
        closet shelf, those are plausibly all finish-carpentry tasks for a single
        carpenter on a single trip &mdash; one minimum, not three. An estimate that
        stacked a separate minimum on each of those tasks would overstate the cost, and a
        reviewer who consolidates them is doing the job correctly.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The honest dividing line is licensing and reality. A finish carpenter cannot
        legally rewire a fixture, and a drywall installer does not sweat copper. Tasks
        can be combined within a trade; they cannot be combined across trades that
        require different licenses, different tools, and different people. When a
        reviewer merges an electrician&apos;s task and a plumber&apos;s task under a
        general-labor line to suppress two minimums, that is not consolidation &mdash;
        that is pricing work that two licensed trades must perform as though one
        unlicensed person could do it.
      </p>

      <CalloutBox variant="tip" title="A Fair Test">
        <p>
          For each deleted labor minimum, ask one question: will a separate, licensed
          tradesperson actually have to travel to this property to perform this task? If
          yes, someone is paying that trade&apos;s minimum &mdash; the only question is
          whether it is the carrier or the policyholder. If no, because the trade is
          already there for other substantial work or the task belongs to a trade already
          being paid, the removal may be defensible.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why It Matters: The Math on Small Claims
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        On a large loss, labor minimums are a rounding error. On a small loss, they can
        be the claim. Return to the modest kitchen water loss described above. Suppose
        the calculated labor and materials come to $4,800, and the scope requires five
        trades whose calculated labor falls below their minimums &mdash; generating,
        say, $1,400 in labor-minimum line items across the plumber, electrician, finish
        carpenter, painter, and flooring installer. The complete estimate is $6,200. The
        minimums are more than 20% of it. On smaller scopes with more trades, the share
        climbs higher &mdash; on the smallest multi-trade claims, minimums can approach
        30&ndash;40% of the total.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Now apply a deductible. If the policy carries a $5,000 deductible, the difference
        between the $6,200 estimate with minimums and the $4,800 estimate without them is
        the difference between a $1,200 payment and a letter explaining that the damage
        falls below the deductible and no payment is owed. The deleted line items did not
        just reduce the claim &mdash; they extinguished it. The policyholder receives a
        below-deductible closure letter, never learns that the estimating platform itself
        priced the loss above the deductible, and pays a repair bill that the carrier&apos;s
        own software said was covered.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This is why the labor minimum deserves more attention than its modest line-item
        appearance suggests. Missing minimums belong on the same checklist as the{' '}
        <Link href="/resources/common-xactimate-errors" className="text-[#2E74B5] hover:underline">
          other common Xactimate errors
        </Link>{' '}
        &mdash; missing detach-and-reset items, omitted overhead and profit, wrong waste
        factors &mdash; but with one distinction: on small claims, no other single error
        category moves the total by a comparable percentage.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What an Insured Can Do
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        A policyholder who suspects labor minimums were stripped from an estimate has
        several practical avenues. None of them require Xactimate expertise, and all of
        them work better in writing.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Compare the Estimate to a Real Contractor Bid
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The simplest reality check is a bid from a licensed local contractor for the same
        scope. Real bids include real service-call charges, because real contractors pay
        real subcontractors who charge real minimums. When the carrier&apos;s estimate
        prices the electrical work at $90 and every actual electrician who will answer
        the phone quotes $250 to show up, the gap documents itself. An insured might
        obtain two or three such bids and submit them with a written request that the
        carrier reconcile the difference.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Ask the Carrier, in Writing, to Explain the Deviation from Its Own Platform
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        California&apos;s Fair Claims Settlement Practices Regulations speak to this
        situation. 10 CCR &sect;2695.9(d) requires that an estimate prepared by or for
        the insurer be of an amount that will restore the damaged property to no less
        than its pre-loss condition, in accordance with accepted trade standards for good
        and workmanlike construction, at costs that are accurate for the local market area. An estimate
        that prices a licensed trade&apos;s mobilization below what any tradesperson in
        the local market actually charges to mobilize sits uneasily next to that
        requirement &mdash; particularly when the insurer&apos;s own estimating platform,
        applying the insurer&apos;s own selected price list, generated the very line
        items the review process removed.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The regulation has teeth in a second place. Under &sect;2695.9(d)(2), if the
        insured asks, the insurer must provide the name of a contractor who will actually
        perform the repairs for the amount of the insurer&apos;s estimate. An insured
        might consider making exactly that request in writing: identify the trades whose
        minimums appear to be missing, and ask the carrier to name a licensed contractor
        who will complete the full scope &mdash; including getting a plumber and an
        electrician to the property &mdash; for the estimate&apos;s figure. If no such
        contractor exists at that price, the request tends to surface that fact quickly.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        One more provision closes a common escape hatch. Some carriers respond to
        estimate challenges by pointing at the software &mdash; the number is what the
        platform produced, take it up with the vendor. Under &sect;2695.1(g), an insurer
        cannot deflect its claims-handling obligations onto the third parties it hires or
        the tools it uses; responsibility for compliance stays with the insurer. That cuts
        with particular force here, because in the labor-minimum scenario the software
        is usually not even the source of the problem &mdash; the software put the items
        in, and the insurer&apos;s review process took them out.
      </p>

      <CalloutBox variant="warning" title="A Realistic Expectation">
        <p>
          A written challenge citing these provisions does not produce an instant check,
          and no one should expect it to. What it realistically produces is a second
          look: a re-review of the estimate, a corrected estimate with the minimums
          restored, or a written explanation of why the carrier believes each removal was
          proper &mdash; which itself becomes useful documentation. Getting the carrier
          to look again, on the record, is the achievable win. Everything after that
          builds on it.
        </p>
      </CalloutBox>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Frame the Request Around the Carrier&apos;s Own Output
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The strongest version of the written request does not argue about what repairs
        should cost in the abstract. It asks a narrower question: the estimating platform
        the carrier uses generates labor-minimum line items automatically when a
        trade&apos;s labor falls below the regional minimum; this scope includes small
        tasks for a plumber, an electrician, and a finish carpenter; would the carrier
        please confirm whether labor minimums were generated for those trades, and if
        they were removed, explain the basis for each removal. That framing is polite,
        specific, hard to ignore, and directed at a discrepancy inside the carrier&apos;s
        own file rather than a difference of opinion between the parties.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Get Professional Review on Larger or Contested Claims
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        A licensed Public Adjuster or an independent Xactimate estimator can re-create
        the scope in the same software with the same price list and let the platform
        generate the minimums it generates &mdash; producing a like-for-like comparison
        that shows exactly which auto-generated items are absent from the carrier&apos;s
        version. On a claim where the missing minimums are the difference between payment
        and a below-deductible closure, that comparison is usually worth obtaining.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Frequently Asked Questions
      </h2>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        What is a labor minimum in Xactimate?
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        A labor minimum is an automatically generated line item that Xactimate adds when
        the calculated labor for a trade falls below that trade&apos;s minimum service
        charge in the applicable regional price list. It reflects the smallest amount a
        tradesperson realistically charges to take a job &mdash; the service-call floor
        that covers travel and mobilization. The price list defines the minimum per
        trade, per region, and the software applies it without anyone typing it in.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Why was the labor minimum removed from my estimate?
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        There are legitimate and illegitimate possibilities, and the estimate itself
        rarely says which applies. Legitimate: the trade already has substantial labor
        elsewhere in the estimate, so the minimum is subsumed; or several tasks were
        properly consolidated within a single trade. Illegitimate: a desk reviewer or
        review vendor deleted the auto-generated items, tasks for separately licensed
        trades were merged to suppress the minimums, or a carrier guideline capped the
        estimate at one minimum regardless of trade count. An insured is entitled to ask,
        in writing, which of these happened and why.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        How many labor minimums can one estimate have?
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        As many as there are trades whose calculated labor falls below their respective
        minimums. There is no rule in the software limiting an estimate to one. A small
        multi-trade loss &mdash; a kitchen water claim touching plumbing, electrical,
        drywall, paint, trim, and flooring &mdash; can legitimately carry four or five.
        A carrier guideline that allows only one minimum per estimate is a carrier
        guideline, not an Xactimate rule and not a market reality.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Can an insurer blame Xactimate for a missing labor minimum?
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        In California, deflecting to the software vendor is not a defense &mdash; under
        10 CCR &sect;2695.1(g), responsibility for claims-handling compliance stays with
        the insurer regardless of what tools or vendors it uses. And in the labor-minimum
        context the deflection is usually backwards anyway: the software generates the
        minimums automatically. When they are missing, it is generally because someone in
        the review chain removed them, not because the platform failed to produce them.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        What is the realistic outcome of challenging removed labor minimums?
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        A re-review. A specific written request &mdash; identifying the trades, citing
        the contractor bids, asking under 10 CCR &sect;2695.9(d)(2) for the name of a
        contractor who will do the work at the estimate&apos;s price &mdash; typically
        results in the carrier taking a second look and, where the removals cannot be
        justified, issuing a corrected estimate. It is not an instant payment mechanism,
        and anyone promising otherwise is overselling. But on small claims, restoring the
        minimums frequently moves the claim from below the deductible to payable, which
        is the outcome that matters.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Bottom Line
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Labor minimums exist because tradespeople do not work for free travel and
        twenty-minute paychecks. Xactimate builds that reality into every regional price
        list and adds the line items automatically. When those items are missing from a
        carrier&apos;s estimate, someone took them out &mdash; and on a small claim, what
        they took out may be the difference between a repair the policy pays for and a
        repair the policyholder funds alone. The estimate is worth reading closely, the
        question is worth asking in writing, and the carrier&apos;s answer &mdash;
        whatever it is &mdash; is worth having in the file.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        A policyholder facing a contested estimate on a significant claim might consider
        consulting a licensed Public Adjuster to review the estimate line by line, or a
        licensed California attorney for legal questions about the carrier&apos;s
        obligations. For more on how carrier estimates go wrong and what the underlying
        settings control, see{' '}
        <Link href="/resources/common-xactimate-errors" className="text-[#2E74B5] hover:underline">
          Common Xactimate Errors
        </Link>
        ,{' '}
        <Link href="/resources/xactimate-price-list-dates" className="text-[#2E74B5] hover:underline">
          Xactimate Price List Dates
        </Link>
        ,{' '}
        <Link href="/resources/xactimate-line-items" className="text-[#2E74B5] hover:underline">
          Xactimate Line Items
        </Link>
        ,{' '}
        <Link href="/resources/xactimate-not-the-law" className="text-[#2E74B5] hover:underline">
          Xactimate Is Not the Law
        </Link>
        , and{' '}
        <Link href="/resources/scope-of-loss" className="text-[#2E74B5] hover:underline">
          Scope of Loss
        </Link>
        .
      </p>
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
