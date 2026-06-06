import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title:
    "The Managed Repair Program from the Inside: How DRP Scoring Works",
  description:
    "How Direct Repair Programs score contractors on supplement ratios, claim costs, and cycle time — and why those metrics create incentives that work against policyholders. Know your right to opt out.",
  summary:
    'Direct Repair Programs score contractors on supplement ratios, claim cost, and cycle time, creating incentives to keep your repair cheap and fast rather than complete. You generally have the right to opt out and choose your own contractor.',
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
        After a loss, many policyholders receive a call from their insurance company with a
        recommendation. The carrier has a contractor already lined up &mdash; someone who knows the
        process, can start quickly, and will make the whole experience easier. The contractor is part
        of the carrier&apos;s &quot;managed repair program&quot; or &quot;direct repair
        program,&quot; and the carrier presents the referral as a convenience. Some policyholders
        accept without asking any questions, grateful that someone is taking charge during a
        stressful time.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        What the policyholder is rarely told is that this contractor has agreed to a set of terms
        that go far beyond licensing and quality standards. The contractor has agreed to pricing
        constraints, process requirements, and performance benchmarks &mdash; all of which are
        designed around the carrier&apos;s financial objectives. The contractor is scored on metrics
        that directly reward keeping claim costs low, minimizing supplemental estimates, and closing
        files quickly. These scores determine whether the contractor continues to receive referrals
        &mdash; referrals that may represent the majority of the contractor&apos;s revenue.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Understanding how these programs actually work &mdash; not how they are marketed, but how
        they are structured &mdash; is essential for any policyholder deciding whether to accept a
        carrier&apos;s contractor recommendation. It is equally essential for attorneys evaluating
        whether a repair was performed to the standard the policy requires.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What a Direct Repair Program Is
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        A Direct Repair Program (DRP) &mdash; also called a managed repair program, preferred
        vendor program, or contractor referral network &mdash; is an arrangement between an
        insurance carrier and a group of pre-approved contractors. The carrier maintains a network
        of contractors who have agreed to work within the carrier&apos;s pricing structure,
        processes, and performance expectations. In exchange, the carrier provides these contractors
        with a steady stream of referrals from its claims operation.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The concept is straightforward on its face. The carrier vets contractors for licensing,
        insurance, and workmanship. The contractor agrees to follow the carrier&apos;s protocols and
        pricing guidelines. When a policyholder files a claim, the carrier recommends a contractor
        from its approved list. The policyholder agrees, the contractor performs the work, and the
        carrier pays the contractor directly or reimburses the policyholder based on the
        contractor&apos;s invoice &mdash; which was prepared according to the carrier&apos;s pricing
        terms.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Carriers present DRP programs as a benefit to policyholders. The marketing typically
        emphasizes convenience, speed, and quality assurance. The carrier has already vetted the
        contractor, the carrier will guarantee the work, and the policyholder does not have to go
        through the process of finding a contractor, obtaining bids, and coordinating with the
        adjuster. For a policyholder who has just experienced a fire, a water loss, or storm damage,
        this pitch can be compelling.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        But a DRP is not a quality assurance program. It is a cost containment program with quality
        assurance features bolted on. Understanding the difference requires looking at the mechanics
        &mdash; how contractors enter the program, how they are evaluated, and what happens when
        their performance does not meet the carrier&apos;s expectations.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Contractors Get Into a DRP
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Becoming a DRP contractor is not simply a matter of being a good contractor. The application
        process typically involves several layers of vetting, each of which serves the carrier&apos;s
        interests in different ways.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Licensing and Insurance Requirements
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The contractor must hold appropriate state contractor&apos;s licenses. In California, this
        means a valid CSLB license in the relevant classification &mdash; typically a B (General
        Building), C-33 (Painting and Decorating), C-36 (Plumbing), or other specialty licenses
        depending on the type of work the DRP covers. The contractor must carry general liability
        insurance, workers&apos; compensation insurance, and often an additional umbrella policy. The
        carrier will typically require the contractor to name the carrier as an additional insured on
        their general liability policy.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Background Checks and Financial Review
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Carriers conduct background checks on the contractor&apos;s principals. They review the
        contractor&apos;s financial stability, looking for liens, judgments, and bankruptcy history.
        Some carriers require audited financial statements. The carrier wants to ensure the
        contractor can complete jobs without financial distress causing delays or abandonment.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Agreement to Pricing Terms
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        This is where the arrangement departs from a simple vetting process. The contractor agrees
        to the carrier&apos;s pricing structure. In many DRP programs, this means using the
        carrier&apos;s estimating platform &mdash; typically Xactimate &mdash; with the carrier&apos;s
        pricing database rather than the contractor&apos;s own pricing. The carrier sets the unit
        prices, the overhead and profit allowances, and the rules for what line items can and cannot
        be included.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        In practice, this often means the DRP contractor agrees to work at rates that are lower than
        what the contractor would charge on the open market. The contractor accepts below-market
        pricing in exchange for the volume of referrals the carrier provides. This is not
        inherently improper &mdash; volume discounting exists in many industries. But it creates a
        dynamic that matters enormously when the question is whether the policyholder&apos;s property
        is being restored to its pre-loss condition, as the policy requires.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Performance Benchmarks
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Before being admitted to the program, the contractor agrees to meet specific performance
        benchmarks. These are not merely aspirational goals. They are measurable metrics that the
        carrier tracks continuously and uses to determine whether the contractor remains in the
        program. The benchmarks typically include cycle time, customer satisfaction scores,
        supplement ratios, average claim cost, quality complaints, and compliance with the
        carrier&apos;s processes.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        It is these performance benchmarks &mdash; and the scoring system built around them &mdash;
        that reveal how DRP programs actually function on a day-to-day basis.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The DRP Scoring System
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Carriers do not simply admit contractors to a DRP and then passively wait for complaints.
        They actively monitor and score every contractor in the program, often on a monthly or
        quarterly basis. The scoring system determines how many referrals the contractor receives,
        whether the contractor is placed on probation, and ultimately whether the contractor is
        removed from the program entirely.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The specific metrics and weightings vary by carrier, but the categories are remarkably
        consistent across the industry. Understanding each metric &mdash; and the behavior it
        incentivizes &mdash; is critical.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Cycle Time
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Cycle time measures how quickly the contractor completes the repair and closes the claim
        file. It is typically measured from the date of assignment to the date the job is marked
        complete and the final invoice is submitted. Carriers set target cycle times based on the
        type of loss and the estimated severity. A water mitigation job might have a target cycle
        time of five to seven days. A fire restoration might have a target of sixty to ninety days.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Contractors who consistently close files within the target cycle time score well on this
        metric. Contractors whose jobs take longer than the target are scored lower. The scoring is
        often tiered &mdash; completing a job well under the target earns a higher score than
        completing it at the target, and exceeding the target reduces the score progressively.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        From the carrier&apos;s perspective, faster cycle times mean faster claim closures, lower
        additional living expense payments, and reduced administrative overhead. From the
        policyholder&apos;s perspective, faster is not always better. Some repairs require time to
        be done properly. Moisture readings need to stabilize before walls are closed. Structural
        engineers may need to evaluate framing before it is covered with drywall. Custom materials
        may need to be ordered. A contractor who is being scored on speed has a financial incentive
        to prioritize pace over thoroughness &mdash; and the policyholder may never know the
        difference until problems emerge months or years later.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Customer Satisfaction Scores
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Carriers survey policyholders after the repair is complete and use the results to score the
        contractor. This is the one metric that appears to align with the policyholder&apos;s
        interests, and in some ways it does. A contractor who is rude, unresponsive, or does visibly
        poor work will receive low satisfaction scores.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        But customer satisfaction surveys in this context have significant limitations. The
        policyholder is evaluating the contractor&apos;s courtesy, communication, and the visible
        quality of the finished product. The policyholder is almost never in a position to evaluate
        whether the scope of work was complete &mdash; whether all the damage was actually repaired,
        whether hidden damage was addressed, whether materials matched the pre-loss condition of the
        property. A policyholder whose kitchen was repainted after a fire may give the contractor
        high marks for professionalism and clean work, never knowing that the contractor did not
        address smoke contamination in the wall cavities because the carrier&apos;s scope did not
        include it and the contractor did not push back.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Satisfaction scores also tend to be gathered shortly after the job is complete, before latent
        defects have had time to manifest. A roof repair that looks fine at the completion
        walkthrough may leak six months later. A water damage restoration that appears dry may
        develop mold within a year. The satisfaction survey does not capture these outcomes.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Supplement Ratio
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        This is one of the most consequential metrics in the DRP scoring system. The supplement
        ratio measures how frequently the contractor submits supplemental estimates &mdash;
        requests for additional payment beyond the original scope and estimate &mdash; relative to
        the total number of jobs the contractor handles.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        A contractor who submits supplements on 80 percent of jobs will have a high supplement
        ratio. A contractor who submits supplements on 20 percent of jobs will have a low supplement
        ratio. In the DRP scoring system, a lower supplement ratio is better. The contractor who
        submits fewer supplements scores higher.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        On its face, this might seem like a reasonable quality metric. Perhaps a contractor who
        submits supplements frequently is doing a poor job of initial assessment, or is padding
        estimates after the fact. But consider what a supplement actually represents. A supplement is
        a request for additional funds to address damage that was not apparent during the initial
        inspection. Hidden damage is not an anomaly in property insurance claims &mdash; it is the
        norm. Water damage behind walls, fire damage above ceilings, structural deterioration
        beneath flooring, mold growth inside wall cavities &mdash; this damage is discovered during
        the repair process, not before it.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        A contractor who opens a wall after a water loss and discovers saturated insulation, damaged
        electrical wiring, and corroded plumbing is supposed to report that damage and request a
        supplement to address it. That is what a conscientious contractor does. That is what a
        contractor working in the policyholder&apos;s interest would do. But in the DRP scoring
        system, that contractor is penalized. Every supplement submission increases the supplement
        ratio and lowers the contractor&apos;s score.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The contractor who opens the same wall, sees the same damage, and closes the wall without
        reporting it &mdash; that contractor has a lower supplement ratio. That contractor scores
        higher. That contractor receives more referrals.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        It is worth pausing on this point. The scoring system does not distinguish between a
        supplement that reflects legitimate hidden damage and a supplement that reflects poor initial
        estimating. It treats all supplements as negative. The structural incentive is clear: the
        contractor who finds less damage &mdash; or at least reports less damage &mdash; is rewarded.
        The contractor who finds and reports all the damage is penalized.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Average Claim Cost
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Carriers track the average cost of claims handled by each DRP contractor and compare it to
        benchmarks &mdash; typically the average cost across all DRP contractors handling similar
        types of losses in the same geographic area. A contractor whose average claim cost is below
        the benchmark scores well. A contractor whose average claim cost is above the benchmark
        scores poorly.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This metric rewards the contractor whose repairs cost the carrier less money. It does not
        distinguish between a contractor whose repairs cost less because the contractor is efficient
        and a contractor whose repairs cost less because the contractor is cutting corners, using
        inferior materials, or ignoring damage. The metric measures cost, not quality. The metric
        measures what the carrier pays, not what the policyholder receives.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Consider two contractors handling identical water losses in similar homes. Contractor A
        performs a thorough assessment, identifies all affected areas including secondary damage,
        uses commercial-grade drying equipment for the appropriate duration, removes and replaces
        all affected materials, and restores the property to its pre-loss condition. The claim costs
        $45,000. Contractor B performs a surface-level assessment, dries only the obviously wet
        areas, patches rather than replaces affected drywall, and closes the job. The claim costs
        $28,000.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        In the DRP scoring system, Contractor B has a lower average claim cost. Contractor B scores
        higher on this metric. Contractor B gets more referrals. The scoring system does not ask
        whether the policyholder&apos;s home was actually restored to pre-loss condition. It asks
        what the carrier paid.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Quality Complaints
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        DRP programs track complaints filed by policyholders about the quality of repairs. This
        metric, like customer satisfaction, appears to serve the policyholder&apos;s interest. And
        to some extent it does &mdash; a contractor who receives a high volume of complaints will
        eventually face consequences.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        But quality complaints in this context are reactive, not proactive. They capture problems
        that the policyholder noticed, reported, and escalated. They do not capture problems the
        policyholder never discovered. The policyholder who does not realize that their contractor
        failed to address smoke damage in the HVAC system, or left moisture in a wall cavity, or
        used materials that do not match the pre-loss condition of the home, will not file a
        complaint. The absence of a complaint is not evidence of quality &mdash; it may simply be
        evidence that the policyholder does not know what to look for.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Compliance with Carrier Processes
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        DRP contractors are scored on how well they follow the carrier&apos;s administrative
        processes &mdash; submitting documentation on time, using the carrier&apos;s estimating
        platform correctly, communicating through the carrier&apos;s preferred channels, and
        following the carrier&apos;s protocols for each phase of the repair. This is primarily an
        administrative metric, but it reinforces the fundamental dynamic of the relationship: the
        contractor works within the carrier&apos;s system, follows the carrier&apos;s rules, and is
        scored by the carrier on how well they comply.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Perverse Incentives These Metrics Create
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Each of the DRP scoring metrics, taken individually, might appear reasonable. Carriers
        want contractors who work efficiently, keep customers happy, provide accurate initial
        estimates, control costs, deliver quality work, and follow processes. Those sound like the
        hallmarks of a well-run program.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        But when these metrics are combined into a scoring system that determines the contractor&apos;s
        livelihood, the aggregate effect is a set of incentives that systematically favor the
        carrier&apos;s financial interests over the policyholder&apos;s contractual rights. The
        contractor who scores highest in the DRP system is not necessarily the contractor who does
        the best work. The contractor who scores highest is the one who costs the carrier the least
        money while generating the fewest complaints.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Consider the contractor who approaches every job with the goal of restoring the property to
        its pre-loss condition, as the policy requires. That contractor will find hidden damage and
        submit supplements &mdash; raising their supplement ratio. That contractor will use
        appropriate materials and proper techniques &mdash; raising their average claim cost. That
        contractor will take the time needed to do the job right &mdash; increasing their cycle
        time. On the DRP scorecard, this contractor is underperforming on three of the most heavily
        weighted metrics.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Now consider the contractor who approaches every job with the goal of completing it as
        quickly and cheaply as possible while keeping the policyholder satisfied enough to avoid a
        complaint. That contractor does not look too hard for hidden damage. That contractor
        accepts the carrier&apos;s initial scope without pushback. That contractor closes jobs fast.
        On the DRP scorecard, this contractor is a top performer. This contractor gets more
        referrals. This contractor stays in the program.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The scoring system does not require contractors to cut corners. It does not instruct
        contractors to ignore damage. But it creates a structural incentive to do both. The
        contractor who wants to remain in the program and continue receiving referrals &mdash;
        referrals that may represent 60, 70, or 80 percent of their revenue &mdash; understands
        what the metrics reward and what they penalize. The scoring system communicates the
        carrier&apos;s priorities without the carrier ever having to say them explicitly.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Volume-for-Discount Tradeoff
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        The financial model underlying every DRP is a volume-for-discount exchange. The contractor
        accepts lower per-job pricing in exchange for a higher volume of jobs. This is the same
        model that operates in many industries &mdash; wholesale pricing in exchange for bulk
        purchasing. But in the construction and restoration industry, this tradeoff has consequences
        that directly affect the quality of the finished product.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        A contractor working on the open market bids each job at a price that allows for appropriate
        materials, skilled labor, adequate supervision, and a reasonable profit margin. If the
        contractor bids too high, they lose the job to a competitor. If they bid too low, they
        cannot deliver quality work at the price they quoted. The market establishes a pricing
        equilibrium.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        A DRP contractor operates outside this market equilibrium. The contractor has already agreed
        to the carrier&apos;s pricing, which is typically 10 to 30 percent below what the same
        contractor would charge on the open market. The contractor makes up the difference on
        volume. But &quot;making it up on volume&quot; means something specific: it means the
        contractor must handle more jobs with the same overhead, which means less time per job,
        less supervision per project, and more pressure to use lower-cost labor and materials.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This is not a theoretical concern. It is the basic arithmetic of running a construction
        business at below-market rates. If a contractor&apos;s normal profit margin on a $50,000
        job is 15 percent ($7,500), and the DRP pricing reduces the job to $40,000, the profit
        margin drops to $2,500 unless the contractor finds ways to reduce costs. Those cost
        reductions come from somewhere &mdash; less experienced labor, fewer supervision hours,
        faster timelines, or less thorough work.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The policyholder whose property is being repaired by a DRP contractor is receiving work
        priced at a discount that was negotiated between the carrier and the contractor without
        the policyholder&apos;s input. The policyholder did not ask for a discount. The
        policyholder&apos;s policy entitles them to have their property restored to its pre-loss
        condition. Whether that can be accomplished at the DRP&apos;s discounted pricing is a
        question the scoring system is not designed to answer.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Who the DRP Contractor Actually Works For
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        This is the question at the heart of every DRP arrangement, and it is a question that
        policyholders rarely think to ask. Legally, the policyholder is the contractor&apos;s
        client. The policyholder signs the contract. The contractor owes a duty to the policyholder
        to perform the work in a workmanlike manner. In California, the contractor is bound by
        Business and Professions Code &sect; 7159 and its related provisions regarding home
        improvement contracts.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        But economically, the carrier is the contractor&apos;s most important business
        relationship. The carrier provides the referrals. The carrier sets the pricing. The carrier
        scores the contractor&apos;s performance. The carrier decides whether the contractor stays
        in the program. If the contractor loses the DRP, the contractor loses a significant
        portion of their revenue overnight.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        When the contractor discovers hidden damage during a repair and must decide whether to
        submit a supplement, the contractor faces a choice between two clients with conflicting
        interests. The policyholder&apos;s interest is in having all the damage repaired. The
        carrier&apos;s interest is in keeping the claim cost low. Submitting the supplement serves
        the policyholder but penalizes the contractor on the carrier&apos;s scorecard. Not
        submitting the supplement serves the carrier but leaves the policyholder with unrepaired
        damage.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        A contractor who consistently chooses the policyholder&apos;s interest over the
        carrier&apos;s interest will see their scores decline. Their referral volume will decrease.
        They may be placed on probation. They may be removed from the program entirely. The
        contractor knows this. The carrier knows the contractor knows this. The dynamic is
        understood by everyone involved &mdash; except, typically, the policyholder.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        For a deeper analysis of this structural conflict, see{' '}
        <Link
          href="/resources/preferred-contractor-conflict-of-interest"
          className="text-[#2E74B5] underline"
        >
          The Carrier&apos;s Preferred Contractor: Who They Really Work For
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Warranty Angle
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        One of the primary marketing points of DRP programs is the warranty or guarantee on the
        work. Carriers promote this as a benefit to the policyholder &mdash; if anything goes wrong
        with the repairs, the carrier will make sure it gets fixed. Some carriers offer three-year
        warranties, some offer five-year warranties, and some offer warranties for the &quot;life
        of the home.&quot; The warranty is presented as a form of accountability, proof that the
        carrier stands behind the quality of its DRP contractors.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        But a warranty is only as valuable as the willingness and ability of the party offering it
        to honor it. When a policyholder attempts to invoke a DRP warranty, the process typically
        involves contacting the carrier, who then contacts the contractor, who then evaluates
        whether the complaint falls within the scope of the warranty. The contractor who performed
        the original work is the one evaluating whether their own work was defective. If the
        contractor determines the issue is not covered by the warranty &mdash; perhaps characterizing
        it as normal wear and tear, homeowner maintenance, or a new and separate event &mdash; the
        policyholder has little recourse through the warranty process.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The carrier, for its part, has no direct financial stake in enforcing the warranty. The
        carrier is not paying for the warranty repairs &mdash; the contractor is. The carrier is
        acting as a facilitator, directing the policyholder back to the contractor. If the
        contractor refuses to honor the warranty or disputes the policyholder&apos;s characterization
        of the problem, the carrier is not in a position of financial loss. The carrier can
        sympathize with the policyholder without spending money to resolve the issue.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        There is also a practical limitation on DRP warranties that is rarely disclosed at the time
        of referral. DRP contractors go in and out of the program. They merge, close, change
        ownership, or simply cease operations. If the contractor who performed the original work is
        no longer in business or no longer part of the DRP program when the policyholder needs
        warranty service, the warranty may be effectively worthless. The carrier will point to the
        fact that the warranty was provided by the contractor, not by the carrier, and that the
        carrier cannot be held responsible for a third party&apos;s obligations.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Carrier Influence Over the Scope of Repairs
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        In a DRP arrangement, the{' '}
        <Link href="/resources/scope-of-loss" className="text-[#2E74B5] underline">
          scope of repairs
        </Link>{' '}
        is not determined by the contractor&apos;s professional assessment of what needs to be
        done. It is determined by the carrier&apos;s adjuster, often before the contractor even
        visits the property. The adjuster inspects the loss, writes an estimate, and defines the
        scope. The DRP contractor receives the assignment with the scope already established. The
        contractor&apos;s job is to execute that scope, not to independently evaluate whether the
        scope is complete.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This is a fundamental departure from how construction and restoration work should function.
        In a normal contractor-client relationship, the contractor inspects the property,
        identifies all the work that needs to be done, prepares an estimate, and presents it to
        the client for approval. The contractor&apos;s professional judgment drives the scope. The
        client relies on the contractor&apos;s expertise.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        In a DRP arrangement, the carrier drives the scope. The contractor follows it. If the
        carrier&apos;s adjuster missed damage &mdash; which happens frequently, particularly with
        hidden damage that requires destructive testing to identify &mdash; the DRP contractor is
        in the awkward position of having discovered damage that is not on the scope. The
        contractor can submit a supplement, but doing so hurts their supplement ratio score. The
        contractor can flag the issue informally, but if the adjuster pushes back, the contractor
        must decide whether to push harder &mdash; and risk their standing in the program &mdash;
        or accept the adjuster&apos;s position and move on.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The policyholder, meanwhile, has no visibility into this dynamic. The policyholder does not
        know what the original scope included. The policyholder does not know what the contractor
        found during repairs. The policyholder does not know whether the contractor submitted a
        supplement, whether the supplement was approved or denied, or whether the contractor
        decided not to submit a supplement at all. The policyholder sees the finished product and
        assumes it represents a complete repair. Whether it actually does is a question the
        policyholder is not equipped to answer without independent expertise.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        When a carrier exerts this level of control over a contractor&apos;s work in ways that
        harm the policyholder, the legal implications can extend beyond the claims process. See{' '}
        <Link
          href="/resources/tortious-interference-insurance-claims"
          className="text-[#2E74B5] underline"
        >
          Tortious Interference in Insurance Claims
        </Link>{' '}
        for more on how carrier conduct toward third parties can give rise to independent causes
        of action.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When DRP Contractors Acknowledge the Problem
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        It is not uncommon for DRP contractors &mdash; particularly those who have left a DRP
        program or who are speaking candidly about their experience &mdash; to acknowledge the
        structural problems these programs create. Some have publicly described the pressure to
        keep costs down, the penalty for submitting supplements, and the difficulty of serving two
        masters with conflicting interests. These admissions are significant because they come from
        inside the system, from participants who experienced the incentive structure firsthand.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        For documented examples of contractors describing these dynamics, see{' '}
        <Link
          href="/resources/carrier-contractor-admits-failure"
          className="text-[#2E74B5] underline"
        >
          When the Carrier&apos;s Own Contractor Admits Failure
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Your Right to Opt Out
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        This may be the single most important thing a policyholder can know about DRP programs:
        you are never required to use the carrier&apos;s contractor. In California, the law is
        clear on this point. You have the right to choose your own contractor, and the carrier
        cannot require you to use its preferred vendor as a condition of paying the claim.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        California Insurance Code &sect; 2071 establishes the standard fire insurance policy form,
        which requires the insurer to pay the amount necessary to repair or replace the damaged
        property. It does not require the insured to use a specific contractor. The California
        Code of Regulations, Title 10, &sect; 2695.9(b) is even more explicit &mdash; it provides
        that the insurer may not require the claimant to have repairs made by a specific contractor.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Despite these protections, carriers sometimes create the impression that using the DRP
        contractor is required, or that choosing a different contractor will create problems. A
        policyholder may be told that the claim will take longer if they use their own contractor,
        that the carrier cannot guarantee the work if a non-DRP contractor performs it, or that
        the carrier will only pay based on its own estimate rather than the contractor&apos;s
        invoice. These statements may be technically accurate in some respects, but they are
        designed to steer the policyholder toward the DRP contractor.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The carrier&apos;s obligation under the policy is to pay the reasonable cost of repairing
        the damage, regardless of which contractor performs the work. If the carrier&apos;s
        estimate is lower than what it actually costs to restore the property to its pre-loss
        condition using a qualified independent contractor, the carrier&apos;s estimate is the
        problem &mdash; not the policyholder&apos;s choice of contractor.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        For more on the myth that you need to obtain multiple bids before the carrier will pay
        your claim, see{' '}
        <Link href="/resources/three-bids-myth" className="text-[#2E74B5] underline">
          The Three Bids Myth
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Choosing Your Own Contractor
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        If you decline the DRP contractor, you will need to find your own. This can feel daunting,
        especially in the aftermath of a loss, but it places you in the position of having a
        contractor who works for you &mdash; not for the carrier that is paying the claim. Your
        contractor&apos;s financial incentives are aligned with yours: they want to do the job
        right because you are the one who will hire them again, refer them to neighbors, or leave
        them a review. They are not being scored on how cheaply they can complete the work.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        For a detailed guide on selecting an independent contractor for an insurance claim repair,
        see{' '}
        <Link href="/resources/choosing-your-contractor" className="text-[#2E74B5] underline">
          Choosing Your Contractor
        </Link>.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        When dealing with emergency situations immediately after a loss, the choice of vendor is
        equally important. Emergency mitigation contractors who arrive through the carrier&apos;s
        referral network may be subject to the same DRP dynamics described above. See{' '}
        <Link href="/resources/emergency-mitigation-vendors" className="text-[#2E74B5] underline">
          Emergency Mitigation Vendors
        </Link>{' '}
        for more on how to handle the critical first days of a loss.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What to Ask Before Accepting a DRP Contractor
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        If you are considering accepting the carrier&apos;s recommended contractor, or if you want
        to evaluate whether a DRP contractor has already performed work on your property, the
        following questions can help you assess the situation.
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Is the contractor part of the carrier&apos;s DRP or managed repair
          program?</strong> The carrier may use different names for the program, but the question is
          whether this contractor has a referral agreement with the carrier. If the answer is yes,
          every dynamic described in this article applies.
        </li>
        <li>
          <strong>Who prepared the scope of work?</strong> If the carrier&apos;s adjuster prepared
          the scope and the contractor is simply executing it, the scope reflects the carrier&apos;s
          assessment of the damage, not the contractor&apos;s independent professional judgment.
          Ask whether the contractor has independently inspected the property and whether they
          agree that the carrier&apos;s scope is complete.
        </li>
        <li>
          <strong>What happens if the contractor discovers hidden damage during repairs?</strong>{' '}
          The answer should be that the contractor will document the damage, notify you and the
          carrier, and submit a supplement. If the contractor is evasive about this or suggests
          that supplements are unlikely, that may indicate the contractor is incentivized to
          minimize supplemental claims.
        </li>
        <li>
          <strong>Has the contractor agreed to pricing terms with the carrier?</strong> If so, the
          contractor is working at rates the carrier has dictated, not rates the contractor has
          independently determined are sufficient to restore your property to its pre-loss
          condition.
        </li>
        <li>
          <strong>What warranty is being offered, and who stands behind it?</strong> Is the
          warranty backed by the carrier, the contractor, or both? What happens if the contractor
          goes out of business? What recourse do you have if the contractor disputes whether a
          problem falls within the warranty?
        </li>
        <li>
          <strong>Am I required to use this contractor?</strong> The answer is always no. If the
          carrier suggests otherwise &mdash; directly or indirectly &mdash; that is a red flag.
          California law protects your right to choose your own contractor.
        </li>
        <li>
          <strong>Can I get an independent assessment of the damage?</strong> You have the right to
          retain your own contractor, Public Adjuster, or other expert to evaluate the damage and
          prepare a competing estimate. The carrier may not refuse to consider this estimate or
          penalize you for obtaining one.
        </li>
        <li>
          <strong>Will the carrier pay based on the actual cost of repairs, or only based on the
          DRP pricing?</strong> If the carrier insists on paying only what the DRP contractor
          would have charged, this is worth challenging. Your policy obligates the carrier to pay
          the reasonable cost of restoring your property, not the discounted rate the carrier
          negotiated with its preferred vendor.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Broader Pattern
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        DRP programs are not isolated practices. They are part of a broader pattern in which
        carriers seek to control every aspect of the claims process &mdash; who inspects the
        damage, who estimates the cost, who performs the repairs, and what scope of work is
        considered sufficient. Each point of control is a point at which the carrier can influence
        the outcome in its favor.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        When the carrier selects the contractor, sets the pricing, defines the scope, and scores
        the contractor&apos;s performance based on cost and speed metrics, the carrier has
        effectively positioned itself as the decision-maker on all the variables that determine
        what the policyholder receives. The policyholder, who is paying premiums for the right to
        have their property restored after a loss, becomes a passive participant in a process
        controlled by the entity that benefits from paying less.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Understanding this structure does not mean that every DRP repair is deficient or that every
        DRP contractor is acting in bad faith. Many DRP contractors do good work despite the
        incentive structure they operate within. But the system itself is not designed to produce
        the best outcome for the policyholder. It is designed to produce the most cost-effective
        outcome for the carrier. When those two objectives align, the DRP works fine. When they
        diverge &mdash; when restoring the property properly costs more than the carrier wants to
        pay &mdash; the scoring system tells the contractor exactly which master to serve.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        For Attorneys: Evaluating DRP-Related Claims
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        When representing a policyholder whose property was repaired by a DRP contractor, the DRP
        scoring system and its incentive structure can be powerful evidence in bad faith and breach
        of contract litigation. Several areas of inquiry are particularly productive.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Discovery of Scoring Metrics
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        In discovery, request the carrier&apos;s DRP program documentation, including the
        contractor agreement, the scorecard criteria and weightings, and the specific contractor&apos;s
        scores for the period covering the policyholder&apos;s claim. Request the contractor&apos;s
        supplement ratio, average claim cost, and cycle time metrics, and compare them to program
        benchmarks. If the contractor&apos;s scores were declining before the policyholder&apos;s
        claim, that context may illuminate the contractor&apos;s motivation to keep costs down on
        the subject claim.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Supplement History
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Request the contractor&apos;s supplement submission history and any communications between
        the contractor and the carrier regarding supplements on the subject claim. Did the
        contractor discover damage that was not on the original scope? Did the contractor submit a
        supplement? If so, was it approved, reduced, or denied? If the contractor did not submit a
        supplement despite discovering additional damage, this is evidence that the DRP incentive
        structure influenced the contractor&apos;s behavior to the policyholder&apos;s detriment.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Scope Control
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Examine who controlled the scope of work. If the carrier&apos;s adjuster defined the scope
        and the DRP contractor simply executed it, the carrier is responsible for any deficiencies
        in that scope. If the contractor identified deficiencies in the scope but was discouraged
        from submitting supplements, the carrier&apos;s DRP structure is a proximate cause of the
        policyholder&apos;s incomplete repairs.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Pricing Below Market
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        If the carrier uses the DRP contractor&apos;s pricing to justify its estimate, challenge
        whether those prices reflect the reasonable cost of repairs or whether they reflect the
        discounted rates the carrier negotiated as part of the DRP arrangement. Retain an
        independent contractor or estimator to provide a competing estimate at market rates. The
        difference between the DRP pricing and the market pricing is the spread the carrier is
        extracting from the policyholder&apos;s claim through its volume purchasing arrangement.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Deposition Testimony
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        DRP contractors can be powerful witnesses when deposed. Many will acknowledge the scoring
        system when confronted with their own program agreement. Questions about how referral
        volume correlates with scores, what happens when a contractor&apos;s supplement ratio
        rises, and whether the contractor has ever declined to submit a supplement due to concerns
        about their scorecard can produce testimony that is devastating to the carrier&apos;s
        position that the DRP serves the policyholder&apos;s interest.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Bottom Line
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Direct Repair Programs are marketed as a convenience and a quality assurance measure. In
        practice, they are a cost containment mechanism that allows the carrier to influence every
        aspect of the repair process &mdash; who does the work, how much it costs, how long it
        takes, and how thoroughly it is done &mdash; while maintaining the appearance of arm&apos;s
        length between the carrier and the contractor.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The scoring system is the engine of this influence. By measuring and rewarding contractors
        based on metrics that align with the carrier&apos;s financial interests &mdash; low
        supplement ratios, low average claim costs, fast cycle times &mdash; the carrier creates
        an incentive structure that rewards contractors for minimizing claims, not for restoring
        properties. The contractor who finds all the damage, reports it honestly, and insists on
        adequate payment is penalized. The contractor who goes along, keeps costs down, and closes
        files quickly is rewarded.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        You have the right to opt out. California law protects your right to choose your own
        contractor. Exercise it. Your contractor should work for you, be paid a fair price for their
        work, and have no financial incentive to minimize the scope of your repairs. That is not
        what a DRP is designed to deliver.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Related Resources
      </h2>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <Link
            href="/resources/preferred-contractor-conflict-of-interest"
            className="text-[#2E74B5] underline"
          >
            The Carrier&apos;s Preferred Contractor: Who They Really Work For
          </Link>
        </li>
        <li>
          <Link
            href="/resources/choosing-your-contractor"
            className="text-[#2E74B5] underline"
          >
            Choosing Your Contractor
          </Link>
        </li>
        <li>
          <Link
            href="/resources/tortious-interference-insurance-claims"
            className="text-[#2E74B5] underline"
          >
            Tortious Interference in Insurance Claims
          </Link>
        </li>
        <li>
          <Link
            href="/resources/carrier-contractor-admits-failure"
            className="text-[#2E74B5] underline"
          >
            When the Carrier&apos;s Own Contractor Admits Failure
          </Link>
        </li>
        <li>
          <Link
            href="/resources/three-bids-myth"
            className="text-[#2E74B5] underline"
          >
            The Three Bids Myth
          </Link>
        </li>
        <li>
          <Link
            href="/resources/emergency-mitigation-vendors"
            className="text-[#2E74B5] underline"
          >
            Emergency Mitigation Vendors
          </Link>
        </li>
        <li>
          <Link
            href="/resources/scope-of-loss"
            className="text-[#2E74B5] underline"
          >
            Scope of Loss
          </Link>
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Legal References
      </h2>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          California Insurance Code &sect; 2071 &mdash; Standard fire insurance policy form.{' '}
          <a
            href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=2071.&lawCode=INS"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2E74B5] underline"
          >
            Link
          </a>
        </li>
        <li>
          California Code of Regulations, Title 10, &sect; 2695.9 &mdash; Fair Claims Settlement
          Practices Regulations, including provision that the insurer may not require the claimant
          to have repairs made by a specific contractor.{' '}
          <a
            href="https://www.law.cornell.edu/regulations/california/10-CCR-2695.9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2E74B5] underline"
          >
            Link
          </a>
        </li>
        <li>
          California Insurance Code &sect; 790.03 &mdash; Unfair and deceptive practices in the
          business of insurance.{' '}
          <a
            href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=790.03.&lawCode=INS"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2E74B5] underline"
          >
            Link
          </a>
        </li>
        <li>
          California Business and Professions Code &sect; 7159 &mdash; Home improvement contracts.{' '}
          <a
            href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=7159.&lawCode=BPC"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2E74B5] underline"
          >
            Link
          </a>
        </li>
        <li>
          California Code of Regulations, Title 10, &sect; 2695.7 &mdash; Standards for prompt,
          fair, and equitable settlements.{' '}
          <a
            href="https://www.law.cornell.edu/regulations/california/10-CCR-2695.7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2E74B5] underline"
          >
            Link
          </a>
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
