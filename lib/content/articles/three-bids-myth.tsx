import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: "The “Three Bids” Myth: Why Your Insurance Company Cannot Require Multiple Contractor Estimates",
  description:
    "No California statute, regulation, or policy provision requires policyholders to obtain three contractor bids before a claim will be paid. Here is where the myth comes from, why carriers use it, and how to respond.",
  summary:
    'No California statute, regulation, or policy term requires you to get three contractor bids before your claim is paid. The \'three bids\' demand is a myth carriers use to delay and steer; you can decline and proceed with your own documented estimate.',
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
        <em>
          No California statute, regulation, or standard policy provision requires policyholders
          to obtain three contractor bids before a claim will be paid. This article explains
          where the &ldquo;three bids&rdquo; myth comes from, why carriers perpetuate it, how it
          harms policyholders, and exactly how to respond when an adjuster demands multiple
          estimates.
        </em>
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        You have filed a property insurance claim. The damage is real. Your contractor has
        inspected the property, prepared a detailed estimate, and provided you with a written
        scope of work and a price. You submit it to the insurance company. And then you hear
        something that sounds reasonable but is not: &ldquo;We need you to get three bids before
        we can move forward.&rdquo;
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Maybe the adjuster says it casually, as if it were common knowledge. Maybe they say it
        with a tone of bureaucratic inevitability &mdash; as though this is simply how the process
        works and there is nothing anyone can do about it. Maybe they put it in writing:
        &ldquo;Please obtain at least three competitive bids from licensed contractors and submit
        them for our review.&rdquo;
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        It sounds like a rule. It sounds like something written in the policy. It sounds like
        something required by California law. It is none of these things.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The &ldquo;three bids&rdquo; requirement is a myth &mdash; one of the most persistent
        and damaging myths in residential property claims handling. It is not in your insurance
        policy. It is not in the California Insurance Code. It is not in the Fair Claims
        Settlement Practices Regulations. It is an internal carrier guideline that has been
        packaged and presented to policyholders as though it were an obligation. And it serves
        one purpose: to reduce the amount the carrier pays on the claim.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Where the &ldquo;Three Bids&rdquo; Rule Actually Comes From
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Every insurance company has internal claims handling procedures &mdash; manuals, desk
        guidelines, workflow protocols, best practices documents &mdash; that tell their adjusters
        how to process claims. These internal procedures are not part of the insurance contract.
        They are not disclosed to policyholders. They exist for the carrier&apos;s operational
        benefit.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Many of these internal procedures include a directive that adjusters should request
        multiple estimates when the policyholder submits a contractor&apos;s bid that exceeds the
        carrier&apos;s own Xactimate-generated number. The logic, from the carrier&apos;s
        perspective, is straightforward: if a policyholder&apos;s contractor prices the job at
        $85,000 and the carrier&apos;s desk estimate says $52,000, requesting two additional bids
        creates the possibility that one of those bids will come in lower. If one of the three
        bids is $58,000 and another is $71,000, the carrier now has a number it can point to as
        &ldquo;market validation&rdquo; of a lower price &mdash; or simply pay the lowest of the
        three.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This is not a neutral fact-finding exercise. It is a{' '}
        <Link href="/resources/scope-vs-price-disputes" className="text-[#2E74B5] underline">
          pricing strategy
        </Link>{' '}
        designed to generate a number that supports the carrier&apos;s position. The three-bid
        request does not emerge when the policyholder&apos;s contractor comes in below the
        carrier&apos;s estimate. No carrier has ever told a policyholder, &ldquo;Your contractor
        is too cheap &mdash; please get two more bids so we can make sure you&apos;re getting
        quality work.&rdquo; The request only flows in one direction.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Over time, this internal guideline has been externalized. Adjusters say it so often, with
        such conviction, that it has migrated from the carrier&apos;s desk procedures into the
        general public consciousness. Policyholders tell each other. Contractors hear it and
        repeat it. Real estate agents believe it. Even some attorneys who do not practice
        insurance law assume it is true. The myth has taken on a life independent of its origin.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        But it remains what it has always been: an internal carrier procedure that the carrier has
        no legal authority to impose on its policyholders.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What the Policy Actually Says
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Standard homeowners insurance policies &mdash; the ISO HO-3, the HO-5, and their
        proprietary carrier equivalents &mdash; contain a &ldquo;Duties After Loss&rdquo; section
        that describes what the policyholder must do after filing a claim. These duties typically
        include:
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Prompt notice</strong> &mdash; notify the insurance company of the loss
        </li>
        <li>
          <strong>Protect the property</strong> &mdash; take reasonable steps to prevent further
          damage
        </li>
        <li>
          <strong>Cooperate with the investigation</strong> &mdash; answer questions, provide
          access to the property, submit to examination under oath if requested
        </li>
        <li>
          <strong>Provide a proof of loss</strong> &mdash; submit a sworn statement documenting
          the claim, if requested
        </li>
        <li>
          <strong>Produce records</strong> &mdash; provide books of account, receipts, and other
          documentation reasonably related to the loss
        </li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        Read those duties carefully. None of them say &ldquo;obtain three contractor bids.&rdquo;
        None of them say &ldquo;obtain two contractor bids.&rdquo; None of them require the
        policyholder to obtain any contractor estimates at all. The policyholder&apos;s duty is to
        prove the loss &mdash; to demonstrate that covered damage occurred and to document its
        extent. How the policyholder does that is left to the policyholder. A detailed contractor
        estimate is one way. A Public Adjuster&apos;s estimate is another. Photographs, expert
        reports, invoices for emergency work already performed &mdash; all of these can establish
        the scope and cost of the loss.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        More importantly, the duty to prove loss is distinct from the duty to investigate the
        claim. The policyholder proves. The carrier investigates. Those are separate obligations
        belonging to separate parties, and the three-bid demand improperly collapses one into the
        other.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Carrier&apos;s Duty to Investigate &mdash; Not the Policyholder&apos;s
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        California Insurance Code Section 790.03(h)(3) makes it an unfair claims settlement
        practice for an insurer to fail to adopt and implement reasonable standards for the prompt
        investigation of claims. Section 2695.7(d) of the{' '}
        <Link href="/resources/california-fair-claims" className="text-[#2E74B5] underline">
          Fair Claims Settlement Practices Regulations
        </Link>{' '}
        further provides that every insurer must conduct and diligently pursue a thorough,
        fair, and objective investigation. The word &ldquo;investigation&rdquo; appears repeatedly
        throughout the regulations, and it is always attached to the insurer, not the
        policyholder.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        When a carrier tells a policyholder to go get three bids, the carrier is doing something
        that deserves careful scrutiny: it is taking its own obligation &mdash; the duty to
        investigate the claim and determine what the loss costs to repair &mdash; and shifting
        that obligation onto the policyholder. The policyholder is now spending their own time,
        using their own resources, and expending their own energy to do the carrier&apos;s job.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        If the carrier believes the policyholder&apos;s contractor&apos;s estimate is unreasonable,
        the carrier has every right to investigate. The carrier can send its own adjuster or
        inspector to the property. The carrier can prepare its own{' '}
        <Link href="/resources/estimate-bid-invoice-xactimate" className="text-[#2E74B5] underline">
          Xactimate estimate
        </Link>. The carrier can retain an independent expert. The carrier can
        even obtain its own competitive bids from contractors the carrier selects. All of that is
        the carrier&apos;s right. It is also the carrier&apos;s expense and the carrier&apos;s
        responsibility.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        What the carrier cannot do is outsource that investigation to the policyholder. The
        policyholder submitted a claim and supported it with documentation. The policyholder has
        met their burden. If the carrier disagrees with the policyholder&apos;s numbers, the
        carrier must do its own work to substantiate that disagreement &mdash; not instruct the
        policyholder to go comparison shopping on the carrier&apos;s behalf.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why the Three-Bid Demand Is Harmful
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        The three-bid requirement is not merely wrong as a matter of law and policy. It causes
        real harm to policyholders in concrete, measurable ways.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        It Creates Delay
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Obtaining a detailed contractor estimate is not a quick process. A contractor must visit
        the property, assess the damage, measure the affected areas, determine the scope of work,
        research material costs, calculate labor, and prepare a written document. For a significant
        loss, this process can take days to weeks. Multiply that by three, and the carrier has
        manufactured weeks or months of delay before the claim moves forward.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        During that delay, the policyholder may be displaced from their home. They may be paying
        rent while waiting for repairs to begin. They may be watching secondary damage develop as
        temporary repairs deteriorate. The delay is not neutral &mdash; it has a cost, and the
        policyholder bears it entirely.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        For carriers, delay has a different calculus. Every week a claim remains unpaid is a week
        the carrier earns investment income on the reserves. Every month the policyholder waits is
        a month the policyholder becomes more tired, more frustrated, and more willing to accept a
        lower number just to get the process over with. The economic incentive structure of the
        three-bid demand is worth understanding clearly.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        It Wastes Contractors&apos; Time
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Preparing a detailed estimate for a property loss is not free for the contractor. It costs
        time, fuel, and labor. Many contractors invest hours in a site visit and estimate
        preparation, often at no charge to the homeowner, on the expectation that if their price
        is acceptable, they will get the job. When a policyholder tells three contractors that
        they need competing bids for an insurance claim, at least two of those contractors are
        doing work they will never be compensated for. Many experienced contractors recognize this
        dynamic and decline to participate. The ones who show up may be contractors who are
        hungry for work &mdash; which is not necessarily the same thing as contractors who are
        qualified for the specific project.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        It Generates Inconsistent Scopes, Not Comparable Prices
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Three different contractors will produce three different estimates. That is not because
        one is right and two are wrong. It is because each contractor has a different methodology,
        a different level of experience with the specific type of damage, different supplier
        relationships, different overhead structures, and different views about what work the
        project requires.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        One contractor may include demolition of the affected drywall. Another may assume the
        existing drywall can be dried and refinished. One may price the flooring replacement using
        engineered hardwood; another may specify site-finished solid hardwood. One may include
        temporary climate control during the drying phase; another may not. These are not price
        differences &mdash; they are{' '}
        <Link href="/resources/scope-vs-price-disputes" className="text-[#2E74B5] underline">
          scope differences
        </Link>. And scope differences cannot be resolved by comparing bottom-line
        numbers.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        When the carrier receives three bids of $85,000, $71,000, and $58,000, the carrier does
        not investigate why the numbers differ. The carrier does not ask what each contractor
        included or excluded. The carrier takes the lowest number &mdash; or averages the three &mdash;
        and presents that as the &ldquo;reasonable cost of repair.&rdquo; The policyholder who
        submitted the $85,000 estimate from their preferred contractor is now told that the
        &ldquo;market&rdquo; says the repair costs $58,000. But the $58,000 estimate may have
        omitted half the necessary work.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Contractors Who Know They Are Competing May Not Provide Their Best Scope
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        When a contractor knows they are one of three bidders on an insurance claim, and that the
        carrier will likely select the lowest bid, some contractors respond by trimming their
        scope. They remove items that the property needs but that might make their price look
        high compared to competitors who leave those items out. This is rational behavior from
        the contractor&apos;s perspective &mdash; a lean estimate is more likely to be selected &mdash;
        but it means the policyholder ends up with a repair plan that does not actually restore
        the property to its pre-loss condition.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The contractor the policyholder originally selected &mdash; the one who wrote the
        thorough, detailed, $85,000 estimate &mdash; may be the only one who properly accounted
        for code upgrades, permit requirements, finish matching, temporary housing coordination,
        and the other elements that a complete restoration requires. But that contractor&apos;s
        estimate is now the outlier, and the carrier is using the two lower bids to justify
        underpayment.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        It Cherry-Picks Data to Support a Predetermined Conclusion
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Consider how the three-bid process actually works from the carrier&apos;s perspective.
        The carrier already has an Xactimate estimate that it believes (or at least asserts)
        represents the reasonable cost of repair. The policyholder has submitted a higher number.
        The carrier does not request three bids because it needs information &mdash; it already
        has an estimate. The carrier requests three bids because it needs ammunition. It needs
        a lower number from a third party that it can use to justify its position. The process
        is not investigative. It is adversarial, dressed in the language of reasonableness.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Your Right to Choose Your Own Contractor
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        One of the most fundamental rights a policyholder has in the claims process is the right
        to{' '}
        <Link href="/resources/choosing-your-contractor" className="text-[#2E74B5] underline">
          choose their own contractor
        </Link>. You are not required to use a contractor the carrier selects.
        You are not required to use a contractor from the carrier&apos;s{' '}
        <Link href="/resources/preferred-contractor-conflict-of-interest" className="text-[#2E74B5] underline">
          preferred vendor list
        </Link>. You are not required to use the cheapest contractor you can find. You have the right to
        hire the contractor you trust, the contractor with the appropriate expertise for your
        specific type of damage, and the contractor who will restore your property to the standard
        the policy promises.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Your insurance policy is a contract that promises to pay the cost to repair or replace
        damaged property. It does not promise to pay the lowest possible cost. It does not promise
        to pay the cheapest contractor&apos;s price. It promises to pay the cost to repair the
        damage using the methods and materials necessary to restore the property to its pre-loss
        condition. If your contractor is the one who can do that work, and their price reflects
        the actual cost of doing it properly, that is the amount the carrier owes.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The three-bid demand is, in practice, a mechanism for undermining this right. If the
        carrier can compel you to obtain competing bids, and then select the lowest one, the
        carrier has functionally chosen your contractor for you. You still have the theoretical
        right to hire whomever you want, but the carrier will only pay based on the lowest bid.
        The difference between your contractor&apos;s price and the carrier&apos;s chosen number
        comes out of your pocket. This is not an accident. It is the intended result of the
        three-bid process.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Relationship Between &ldquo;Three Bids&rdquo; and Preferred Vendor Steering
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        The three-bid demand often intersects with carrier{' '}
        <Link href="/resources/preferred-contractor-conflict-of-interest" className="text-[#2E74B5] underline">
          preferred vendor programs
        </Link>. Here is a pattern that repeats across carriers and claim types: the policyholder
        submits their contractor&apos;s estimate. The carrier says it is too high and requests
        three bids. The policyholder struggles to find two additional contractors willing to bid
        on an insurance claim. Eventually the carrier offers a helpful suggestion: &ldquo;We have
        a contractor who is familiar with our process and can get started right away. Would you
        like us to send them out for an estimate?&rdquo;
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The carrier&apos;s preferred contractor arrives, surveys the damage, and produces an
        estimate that &mdash; perhaps unsurprisingly &mdash; closely matches the carrier&apos;s
        own Xactimate number. The policyholder now has two estimates: their contractor&apos;s at
        $85,000 and the carrier&apos;s preferred vendor&apos;s at $54,000. The carrier declares
        the lower number reasonable and issues payment at that amount.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Whether the preferred contractor&apos;s estimate accurately reflects the cost of a
        proper repair is a question worth asking. Preferred vendors maintain their position on
        the carrier&apos;s list by, among other things, providing estimates that align with the
        carrier&apos;s expectations. The dynamics of that business relationship are explored in
        detail in our article on{' '}
        <Link href="/resources/preferred-contractor-conflict-of-interest" className="text-[#2E74B5] underline">
          preferred contractor conflicts of interest
        </Link>. For present purposes, the point is that the three-bid demand can function as a
        gateway to preferred vendor steering. The policyholder is told to get three bids, finds
        it difficult, accepts the carrier&apos;s recommended contractor, and ends up with a
        repair plan that serves the carrier&apos;s financial interests more than the
        policyholder&apos;s restoration needs.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Tortious Interference: When the Carrier Goes Further
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        In some cases, the three-bid demand escalates into something more problematic. The
        carrier does not merely ask for additional bids &mdash; it actively discourages the
        policyholder from using their chosen contractor. The adjuster might say that the
        contractor&apos;s estimate is &ldquo;unreasonable&rdquo; or &ldquo;inflated.&rdquo; The
        adjuster might suggest that the contractor is taking advantage of the policyholder.
        The carrier might refuse to speak with the contractor directly or might communicate
        to the contractor that the carrier will only pay a fraction of the bid.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        When a carrier takes steps to interfere with the relationship between a policyholder
        and their chosen contractor, it raises serious legal questions. California law
        recognizes the tort of{' '}
        <Link href="/resources/tortious-interference-insurance-claims" className="text-[#2E74B5] underline">
          intentional interference with contractual relations
        </Link>, and courts have applied it in the insurance context. A carrier that uses the
        three-bid process as a tool to undermine the policyholder&apos;s contractor
        relationship may be exposing itself to liability beyond the policy limits.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The One Legitimate Scenario &mdash; and Why It Still Does Not Require Three Bids
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        There is a legitimate version of this conversation, and it is important to distinguish
        it from the illegitimate one.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        If a policyholder submits a contractor&apos;s estimate and the carrier has a good-faith,
        articulable basis for questioning specific line items &mdash; not just the total, but
        specific items &mdash; then the carrier has the right to investigate further. The carrier
        can retain its own expert. The carrier can prepare its own estimate. The carrier can
        send an inspector to the property to verify the scope. The carrier can even obtain its
        own competitive bid from a contractor of its choosing.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        But all of that is the carrier&apos;s work, performed at the carrier&apos;s expense,
        using the carrier&apos;s resources. The carrier&apos;s right to investigate does not
        create an obligation for the policyholder to do the investigating. If the carrier
        believes the policyholder&apos;s contractor is overcharging, the carrier should be able
        to demonstrate that with its own evidence &mdash; its own estimate, its own expert, its
        own market data. If the carrier cannot support its position without relying on the
        policyholder to generate competing numbers, that tells you something important about the
        strength of the carrier&apos;s position.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Even in this scenario, the carrier cannot require three bids from the policyholder. The
        carrier can request additional information. The carrier can ask the policyholder to
        explain specific line items. The carrier can ask for documentation supporting material
        costs or labor rates. These are reasonable requests that fall within the
        policyholder&apos;s duty to cooperate. But &ldquo;go get two more bids from other
        contractors&rdquo; is not a request for information &mdash; it is a demand that the
        policyholder perform the carrier&apos;s investigative function.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Demand Surge Problem
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        The three-bid demand becomes particularly harmful after a catastrophic event &mdash; a
        wildfire, an earthquake, a major storm. In these situations, the entire premise collapses
        under its own weight.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        After a catastrophe, every licensed contractor in the affected area is overwhelmed with
        work. Thousands of properties need repair simultaneously. Demand for labor, materials,
        and equipment spikes dramatically. Contractors who would normally bid on a residential
        project are booked for months. The ones who are available are often from out of the area,
        unfamiliar with local building codes and permit requirements, and charging premium rates
        because they have relocated to a disaster zone.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        In this environment, getting one qualified contractor to inspect the property and prepare
        a detailed estimate is difficult. Getting three is functionally impossible &mdash; or at
        best, a process that adds months to an already protracted claim. Requiring a policyholder
        who has just lost their home in a wildfire to obtain three competitive bids from licensed
        contractors in a market where contractors are booking jobs six months out is not a
        reasonable request. It is an obstacle.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Demand surge also affects pricing. When demand for construction services dramatically
        exceeds supply, prices rise. This is basic economics. A contractor who ordinarily
        charges $45 per hour for framing labor may charge $65 or $75 in a post-catastrophe
        market, because that is what the market commands. The carrier&apos;s Xactimate estimate,
        which may still be running on pre-catastrophe pricing data, does not reflect this reality.
        The policyholder&apos;s contractor&apos;s bid does. The three-bid demand, in a
        post-catastrophe context, is a mechanism for ignoring demand surge by cherry-picking the
        contractor who has not yet adjusted their pricing &mdash; or who is cutting scope to win
        work in a competitive environment.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        For more on how{' '}
        <Link href="/resources/sub-bids-vs-xactimate-pricing" className="text-[#2E74B5] underline">
          actual contractor pricing should control over Xactimate
        </Link>, including Verisk&apos;s own acknowledgment that its database prices may not
        reflect actual market conditions, see our detailed analysis.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Respond When the Carrier Demands Three Bids
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        When an adjuster tells you that you need to provide three bids, here is how to respond
        &mdash; calmly, professionally, and firmly.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 1: Ask for the Policy Provision
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Ask the adjuster to identify the specific policy provision that requires you to obtain
        three bids. Ask for the page number and section. Do this in writing &mdash; email is
        preferable, because it creates a record. A simple sentence is sufficient:
        &ldquo;Please identify the specific provision in my policy that requires me to obtain
        three contractor estimates before my claim can be processed.&rdquo;
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The adjuster will not be able to identify this provision because it does not exist. The
        response will typically be one of several variations: a vague reference to
        &ldquo;company procedure,&rdquo; a claim that it is &ldquo;standard practice,&rdquo; or
        silence. None of these is a policy provision.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 2: Clarify the Distinction Between Policy Duties and Carrier Preferences
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        If the adjuster responds with &ldquo;company procedure&rdquo; or &ldquo;standard
        practice,&rdquo; make the distinction clear. Your obligations as a policyholder are
        defined by the policy contract, not by the carrier&apos;s internal procedures. You can
        state this plainly: &ldquo;I understand that your company may have internal guidelines
        that suggest requesting multiple bids. However, my obligations are defined by the
        insurance contract, and I have reviewed the Duties After Loss section of my policy. No
        provision requires me to obtain multiple contractor estimates. I have submitted a detailed
        estimate from my licensed contractor. Please let me know if you need any additional
        information about the scope or pricing of that estimate.&rdquo;
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 3: Cite the Regulatory Framework
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        If the carrier persists, reference the applicable regulations. Under the{' '}
        <Link href="/resources/california-fair-claims" className="text-[#2E74B5] underline">
          California Fair Claims Settlement Practices Regulations
        </Link>{' '}
        (10 CCR &sect; 2695.7), the carrier has an affirmative duty to conduct a thorough,
        fair, and objective investigation. If the carrier disagrees with your contractor&apos;s
        estimate, the carrier should conduct its own investigation &mdash; inspect the property,
        prepare its own estimate, retain its own expert. The carrier cannot satisfy its
        investigation obligation by requiring you to do the investigating.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        You might write: &ldquo;If you believe my contractor&apos;s estimate does not accurately
        reflect the cost to repair the damage, please conduct your own investigation as required
        by 10 CCR Section 2695.7 and provide me with your own estimate identifying the specific
        line items you dispute and the basis for your disagreement. I will be happy to discuss
        any specific line-item differences between your estimate and my contractor&apos;s.&rdquo;
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 4: Document Everything
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Every time an adjuster requests three bids &mdash; whether in person, on the phone, or in
        writing &mdash; document it. Note the date, the time, the name of the person who made
        the request, and what was said. If the request was verbal, follow up with an email
        confirming: &ldquo;Per our conversation today, you indicated that I need to obtain three
        contractor bids before my claim can move forward. Please confirm this requirement in
        writing and identify the policy provision or legal authority that supports it.&rdquo;
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This documentation matters because if the claim later becomes a dispute, the carrier&apos;s
        demand for three bids &mdash; and the delay it caused &mdash; becomes evidence of
        unreasonable claims handling. A pattern of imposing requirements that do not exist in the
        policy is exactly the kind of conduct that the Fair Claims regulations are designed to
        prevent.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 5: Do Not Comply Unless You Choose To
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        You are not obligated to obtain three bids. You may choose to, if you believe it serves
        your interests &mdash; perhaps you want to compare contractors for your own reasons. But
        you should make that decision based on your own judgment, not because the carrier told
        you it was required. If you do obtain additional estimates, understand that the carrier
        will use whichever number is lowest. If you are confident in your contractor&apos;s
        scope and pricing, you may be better served by declining the request and insisting that
        the carrier conduct its own investigation.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What the Carrier Should Be Doing Instead
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        When a policyholder submits a contractor&apos;s estimate and the carrier believes the
        price is too high, the appropriate response is not &ldquo;go get three bids.&rdquo; The
        appropriate response is for the carrier to do its job.
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Inspect the property</strong> &mdash; the carrier should send a qualified
          adjuster or inspector to verify the scope of damage. If the carrier has not physically
          inspected the property, the carrier has no basis to dispute any estimate.
        </li>
        <li>
          <strong>Prepare its own estimate</strong> &mdash; the carrier should use its own
          estimating tools &mdash;{' '}
          <Link href="/resources/estimate-bid-invoice-xactimate" className="text-[#2E74B5] underline">
            Xactimate
          </Link>, or otherwise &mdash; to develop its own scope
          and pricing. That estimate should be provided to the policyholder in full, not
          summarized on a check stub.
        </li>
        <li>
          <strong>Identify specific disagreements</strong> &mdash; if the carrier&apos;s estimate
          differs from the policyholder&apos;s contractor&apos;s estimate, the carrier should
          identify the{' '}
          <Link href="/resources/scope-vs-price-disputes" className="text-[#2E74B5] underline">
            specific line items
          </Link>{' '}
          in dispute and explain the basis for each disagreement. &ldquo;Your
          contractor is too expensive&rdquo; is not a line-item disagreement. It is a conclusion
          without analysis.
        </li>
        <li>
          <strong>Engage in good-faith negotiation</strong> &mdash; the carrier should discuss
          the disputed items with the policyholder or the policyholder&apos;s representative. If
          the dispute is about pricing, the carrier should provide market data supporting its
          position. If the dispute is about scope, the carrier should explain which items it
          believes are unnecessary and why.
        </li>
        <li>
          <strong>Invoke appraisal if appropriate</strong> &mdash; if the parties cannot agree
          on the amount of loss, most policies contain an appraisal provision that allows either
          party to submit the dispute to a neutral process. That process is designed exactly for
          this situation. The carrier does not need three bids to trigger appraisal.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The &ldquo;Three Bids&rdquo; Demand and Underpayment
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        It is worth connecting the three-bid demand to its intended result. When the carrier pays
        the lowest of three bids, the policyholder receives less than the cost of the repair as
        estimated by the contractor who actually inspected the property and understands the work
        required. The gap between the lowest bid and the accurate bid comes directly from the
        policyholder&apos;s pocket &mdash; or, more commonly, the repair simply does not get
        done properly.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The policyholder hires the cheapest contractor because that is all the insurance will
        cover. The cheapest contractor cuts corners, omits necessary work, uses inferior
        materials, or produces results that do not match the pre-loss condition. The policyholder
        lives with a repair that falls short of what the policy promised. The carrier has saved
        the difference between the proper repair cost and the cheapest bid. This is not a
        theoretical concern. It is the daily reality of insurance claims handling, and the
        three-bid process is one of the mechanisms that produces it.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When a Public Adjuster or Attorney Is Involved
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        The three-bid demand is most effective against unrepresented policyholders &mdash; people
        who do not know that the requirement is fictitious and do not have anyone to advise them
        otherwise. When a policyholder is represented by a licensed Public Adjuster or an
        attorney, the dynamic changes immediately.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        A Public Adjuster will prepare their own estimate &mdash; typically using the same
        Xactimate software the carrier uses &mdash; and will negotiate the scope and pricing on
        the policyholder&apos;s behalf. The Public Adjuster has no reason to obtain three bids
        because the Public Adjuster understands that the obligation does not exist. When the
        carrier makes the demand, the Public Adjuster responds with the regulatory and
        contractual analysis described above.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        An attorney will evaluate the demand in the context of the carrier&apos;s overall claims
        handling conduct. If the carrier is using the three-bid request as a delay tactic, as a
        mechanism for paying less than what is owed, or as a way to steer the policyholder toward
        a preferred vendor, the attorney will recognize those patterns and respond accordingly.
        In litigation, the carrier&apos;s three-bid demand &mdash; and the delay and
        underpayment it facilitated &mdash; can become evidence of unreasonable claims handling
        practices.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Regulatory Framework: What California Law Actually Requires
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        California has one of the most comprehensive sets of claims handling regulations in the
        country. The{' '}
        <Link href="/resources/california-fair-claims" className="text-[#2E74B5] underline">
          Fair Claims Settlement Practices Regulations
        </Link>{' '}
        (10 CCR &sect;&sect; 2695.1&ndash;2695.14) establish detailed requirements for how
        carriers must handle claims. Several provisions are directly relevant to the three-bid
        demand.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Duty to Investigate (10 CCR &sect; 2695.7(d))
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The regulations require every insurer to conduct and diligently pursue a thorough, fair,
        and objective investigation sufficient to determine whether the claim is valid and, if
        so, the amount owed. This duty belongs to the insurer. The insurer cannot delegate it to
        the policyholder by demanding that the policyholder gather competing estimates.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Prohibition on Unreasonable Delays (10 CCR &sect; 2695.5(e))
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The regulations prohibit insurers from imposing requirements on policyholders that are
        not authorized by the policy or by law, when those requirements have the effect of
        delaying the resolution of the claim. A demand for three bids that is not supported by
        any policy provision is precisely this kind of unauthorized requirement.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Prohibition on Lowballing (Insurance Code &sect; 790.03(h)(5))
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        California Insurance Code Section 790.03(h)(5) makes it an unfair claims settlement
        practice to fail to affirm or deny coverage within a reasonable time after the claim has
        been fully investigated. If the carrier uses the three-bid process to delay
        investigation &mdash; waiting for the policyholder to produce numbers rather than
        conducting its own analysis &mdash; the carrier may be violating this provision.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Section 790.03(h)(11) prohibits the knowing misrepresentation of pertinent facts or
        policy provisions relating to coverages at issue. When an adjuster tells a policyholder
        that they are &ldquo;required&rdquo; to provide three bids, and no such requirement
        exists in the policy, the adjuster is misrepresenting the policyholder&apos;s contractual
        obligations. Whether that misrepresentation is knowing or merely negligent, it creates a
        regulatory problem for the carrier.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Policyholders Should Know
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        If you take nothing else from this article, take this:
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>You are not required to provide three bids.</strong> No California statute,
          regulation, or standard policy provision imposes this obligation. If a carrier demands
          three bids, ask them to identify the specific authority for the demand. They will not
          be able to.
        </li>
        <li>
          <strong>You have the right to choose your own contractor.</strong> The carrier may
          disagree with your contractor&apos;s pricing, but the carrier cannot force you to use
          a different contractor. Your{' '}
          <Link href="/resources/choosing-your-contractor" className="text-[#2E74B5] underline">
            right to choose
          </Link>{' '}
          is fundamental.
        </li>
        <li>
          <strong>If the carrier disagrees with your estimate, it is the carrier&apos;s job to
          investigate.</strong> The carrier must prepare its own estimate, identify specific
          line-item disagreements, and support its position with evidence. The carrier cannot
          outsource this work to you.
        </li>
        <li>
          <strong>Document every demand for three bids.</strong> The demand itself may be
          evidence of unreasonable claims handling. Record the date, the person, and what was
          said. Follow up in writing.
        </li>
        <li>
          <strong>The three-bid demand is a pricing strategy, not a claims requirement.</strong>{' '}
          It is designed to generate a lower number the carrier can use to reduce its payment.
          Understanding this purpose is the first step to countering it.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        A Final Observation
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        The persistence of the three-bid myth reveals something instructive about how insurance
        claims work in practice. The carrier has enormous informational and procedural advantages
        over the typical policyholder. The carrier knows the policy language. The carrier knows
        the regulations. The carrier knows what it is required to do and what the policyholder is
        required to do. When the carrier tells a policyholder to go get three bids, the carrier
        knows &mdash; or should know &mdash; that no such requirement exists.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The policyholder, on the other hand, has typically never filed an insurance claim before.
        The policyholder does not know what the policy says about duties after loss. The
        policyholder does not know the difference between a policy provision and an internal
        carrier guideline. The policyholder trusts that the adjuster is telling them the truth
        about what is required. When the adjuster says &ldquo;we need three bids,&rdquo; the
        policyholder hears a rule, not a request.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        That informational asymmetry is what makes the three-bid myth so effective &mdash; and
        so important to debunk. Once a policyholder understands that this is a carrier preference
        dressed as a policy requirement, the dynamic shifts. The policyholder can respond
        appropriately: by asking for the contractual basis, by insisting on the carrier&apos;s
        investigative duty, and by refusing to accept an obligation that does not exist.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Your policy is a contract. Your obligations under that contract are defined by the
        contract&apos;s terms. No adjuster, no claims examiner, and no carrier &ldquo;standard
        procedure&rdquo; can add requirements that the contract does not contain. If the carrier
        wants to know what the repair costs, the carrier should do what the law requires: conduct
        its own thorough, fair, and objective investigation. That is the carrier&apos;s job.
        Getting three bids is not yours.
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
