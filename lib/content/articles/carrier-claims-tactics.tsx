import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'How Insurance Carriers Systematically Underpay Claims: The Consulting Industry Behind It',
  description:
    'The documented history of how McKinsey & Company and other consulting firms redesigned insurance claims handling to maximize carrier profits at the expense of policyholders.',
  summary:
    'Insurers\' systematic underpayment is not accidental. Consulting firms like McKinsey redesigned claims handling decades ago to boost carrier profits by squeezing payouts. Understanding that history explains why lowball offers feel routine and why documentation matters.',
}

export default function Content() {
  return (
    <>
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        This Is Not a Conspiracy Theory &mdash; It Is Documented History
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you have ever filed an insurance claim and felt like the process was designed to
        exhaust you into accepting less than you deserve, you are not imagining things. Beginning
        in the early 1990s, major insurance carriers hired elite management consulting firms to
        redesign their entire claims-handling operations. The objective was not to improve
        service to policyholders. It was to reduce the amount of money paid on claims &mdash;
        systematically, across every line of business, on every claim.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The strategies that emerged from these consulting engagements have been documented in
        court proceedings, exposed through litigation discovery, examined in regulatory hearings,
        and analyzed in detail by two essential books that every policyholder should read. What
        those documents reveal is not a collection of isolated bad actors. It is an
        industry-wide transformation in how insurance companies approach their fundamental
        obligation to pay covered claims.
      </p>

      <CalloutBox variant="warning" title="Why This Matters to Every Policyholder">
        <p>
          The tactics described in this article are not historical curiosities. They are the
          operating model of the modern insurance industry. When your field adjuster&rsquo;s
          estimate gets cut by a desk reviewer you never meet, when your claim drags on for
          months without resolution, when you receive an offer that would not cover half the
          actual repair cost &mdash; these are not mistakes. They are features of a system
          designed to produce exactly these outcomes.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Two Books That Exposed It All
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        &ldquo;From Good Hands to Boxing Gloves&rdquo; by David Berardinelli (2008)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        David Berardinelli is a bad faith attorney who became the first person to obtain the
        internal McKinsey & Company consulting documents that Allstate had fought for years
        to keep sealed. His book, <em>From Good Hands to Boxing Gloves: The Dark Side of
        Insurance</em>, documents Allstate&rsquo;s transformation from the &ldquo;You&rsquo;re
        in Good Hands&rdquo; company into one that systematically underpaid claims as a
        core business strategy.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The book details how Allstate retained McKinsey & Company in the early 1990s to
        redesign its claims operations. McKinsey produced approximately 13,000 pages of
        documents &mdash; including PowerPoint slides, strategy memos, and implementation
        plans &mdash; that laid out a comprehensive blueprint for reducing claim payouts
        while increasing profitability. These documents were created for Allstate&rsquo;s
        headquarters in Northbrook, Illinois, and were initially kept under seal as
        &ldquo;trade secrets.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Berardinelli&rsquo;s central finding is stark: McKinsey recommended that Allstate
        settle 90 percent of claims in less than 180 days &mdash; the &ldquo;Good
        Hands&rdquo; segment &mdash; using low, quickly calculated offers. The remaining
        10 percent of claimants who protested or hired attorneys would receive the
        &ldquo;Boxing Gloves&rdquo; &mdash; years of deliberate delay and aggressive
        litigation tactics designed to make fighting for fair payment more painful than
        accepting the lowball offer. Since the book&rsquo;s publication, an estimated
        50 percent of the insurance industry has adopted similar techniques.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        &ldquo;Delay, Deny, Defend&rdquo; by Jay Feinman (2010)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Rutgers Law professor Jay M. Feinman expanded the analysis beyond Allstate in his
        book <em>Delay, Deny, Defend: Why Insurance Companies Don&rsquo;t Pay Claims and
        What You Can Do About It</em>. Where Berardinelli focused on one carrier, Feinman
        documented how the entire industry adopted the McKinsey-style approach to claims
        handling.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Feinman&rsquo;s thesis is that the insurance industry underwent a fundamental shift
        in how it views the claims process. Instead of treating claims as the fulfillment
        of a contractual promise &mdash; the very reason policyholders pay premiums &mdash;
        carriers began treating every claim as a negotiation to be won. The title itself
        captures the three-part strategy: <strong>Delay</strong> the claim until the
        policyholder is desperate. <strong>Deny</strong> all or part of the claim, forcing
        the policyholder to fight. <strong>Defend</strong> the denial aggressively, making
        the cost of challenging the carrier prohibitive for most people.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Feinman specifically identifies the role of McKinsey & Company and other large
        consulting firms in designing these systems, noting that the strategies
        &ldquo;involve sophisticated techniques to avoid the prompt and fair payment of
        claims and to reward company employees for underpaying valid claims.&rdquo;
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The McKinsey Documents: What the Slides Actually Said
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The McKinsey documents became public just once at a regulatory hearing &mdash; in
        May 2005, before the Kentucky Department of Insurance in Lexington. Additional
        documents were later forced into public view through litigation in Florida, where
        the state insurance commissioner suspended Allstate from selling new policies in
        2008 after the company refused to produce the documents. What those materials
        revealed was an explicit, deliberate strategy to reduce claim payouts as a profit
        center.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        &ldquo;Zero Sum Economic Game&rdquo;
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        One McKinsey PowerPoint slide from a 1994 presentation to Allstate executives
        declared the claims process a &ldquo;Zero Sum Economic Game.&rdquo; The slide
        stated explicitly: &ldquo;Allstate gains &hellip; others must lose.&rdquo; Another
        slide elaborated: &ldquo;Improving Allstate&rsquo;s casualty economics will have a
        negative economic impact on some medical providers, plaintiff attorneys, and
        claimants.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This framing is significant because it treats the policyholder not as a customer
        fulfilling a contractual right, but as an adversary competing for the same pool of
        money. Every dollar paid on a legitimate claim was characterized as a dollar
        &ldquo;lost&rdquo; to the company. This is the philosophical foundation upon which
        the modern claims-handling apparatus was built.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        &ldquo;Good Hands or Boxing Gloves&rdquo;
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Perhaps the most infamous slide McKinsey prepared for Allstate was entitled
        &ldquo;Good Hands or Boxing Gloves.&rdquo; The strategy co-opted Allstate&rsquo;s
        own marketing slogan. When a policyholder files a claim, McKinsey advised, first
        make a low offer. If the policyholder accepts the low amount, treat the person with
        &ldquo;good hands.&rdquo; If the policyholder protests or hires a lawyer, fight
        back with &ldquo;boxing gloves.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The strategy was designed to create a rational choice for the policyholder: accept
        the lowball offer quickly and get paid something, or challenge the offer and face
        years of delay, legal costs, and aggressive defense tactics. McKinsey calculated
        that most policyholders would choose the path of least resistance. They were right.
        Allstate would pay claims fairly, or promptly &mdash; but not both.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The &ldquo;Alligator&rdquo; &mdash; Sit and Wait
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        One slide displayed at the Kentucky hearing featured an image of an alligator with
        the caption &ldquo;Sit and Wait.&rdquo; The slide instructed Allstate to take an
        &ldquo;alligator approach&rdquo; to claim payments and settlement offers &mdash;
        delay, wait, and allow the passage of time to frustrate policyholders into
        accepting less or simply walking away. For someone who has suffered a fire or a
        serious injury, time is not on their side. Medical bills accumulate. Temporary
        housing costs mount. The mortgage on a destroyed home still needs to be paid. The
        carrier, by contrast, faces no such pressure. It can afford to wait indefinitely.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Segmenting Claimants for Strategic Advantage
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        McKinsey advised Allstate to segment claims into three categories: unrepresented
        claimants, represented claimants likely to settle, and represented claimants likely
        to go to trial. Each category received different treatment. McKinsey described this
        segmentation as a &ldquo;critical step&rdquo; in taking advantage of opportunities
        in claims processing. For the represented-try segment, the documents noted that
        &ldquo;market values can be shaped through strategic selection of cases to
        proactively try&rdquo; &mdash; meaning Allstate should deliberately take certain
        cases to trial to drive down settlement values across the board.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        &ldquo;Exploiting the Economics of the Practice of Law&rdquo;
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        McKinsey presentations characterized the &ldquo;boxing gloves&rdquo; approach as
        &ldquo;exploiting the economics of the practice of law.&rdquo; The insight was
        cynical but effective: most plaintiffs&rsquo; attorneys work on contingency, meaning
        they advance all costs of litigation. If the carrier can make litigation expensive
        enough and drawn out enough, many attorneys will either decline the case or pressure
        their own clients to settle for less. The carrier does not need to win every case.
        It only needs to make fighting uneconomical.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Claim Core Process Redesign (CCPR)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Allstate implemented the McKinsey recommendations through a program called
        <strong> Claim Core Process Redesign (CCPR)</strong>, rolled out in 1995. The
        stated objective, according to one slide, was to &ldquo;radically alter our whole
        approach to the business of claims.&rdquo; The results were dramatic. In the decade
        after CCPR implementation, the amount Allstate paid out per premium dollar in auto
        casualty claims dropped from approximately 63 cents to 47 cents, according to A.M.
        Best data. That 16-cent reduction across Allstate&rsquo;s massive book of business
        represented billions of dollars in reduced payments to policyholders &mdash; and
        corresponding increases in company profits.
      </p>

      <CalloutBox variant="info" title="The Financial Impact Was Staggering">
        <p>
          Allstate launched its McKinsey pilot project in 1992 and implemented CCPR
          industry-wide in 1995. The company&rsquo;s payout ratio dropped from 63 cents
          per premium dollar to 47 cents within a decade. For policyholders, this meant
          that the company was paying roughly 25 percent less on claims than it had before
          &mdash; not because claims had gotten smaller, but because the process had been
          engineered to produce lower payments.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Colossus: The Software That Replaced Adjuster Judgment
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A central component of the McKinsey strategy was the adoption of computer software
        to remove individual adjuster discretion from the claims valuation process. The
        program was called <strong>Colossus</strong>, developed by Computer Services
        Corporation (CSC). McKinsey recommended Colossus specifically for its ability to
        &ldquo;establish a new fair market value&rdquo; for claims &mdash; which in
        practice meant generating artificially low valuations that would replace the
        judgment of experienced adjusters.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        How Colossus Works
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Colossus converts medical data into numerical scores. An adjuster inputs diagnosis
        codes, treatment information, and other claim data, and the software generates a
        settlement value based on up to 10,720 internal rules and approximately 750
        recognized injury categories. Each insurance company is free to adjust the
        software&rsquo;s &ldquo;value drivers&rdquo; to raise or lower the settlement
        values the program produces.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is where the system becomes problematic. Carriers can &mdash; and do &mdash;
        &ldquo;tune&rdquo; Colossus to produce lower valuations. Some insurers deliberately
        exclude high-value settlements and jury verdicts from the benchmark data that feeds
        the algorithm. When the large awards are stripped out, every remaining valuation
        skews lower. A 15-year-old internal memo that surfaced in litigation showed that
        Colossus had been set to produce awards that were, across the board, 20 percent
        below the prior average.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The manufacturer of Colossus was not shy about this feature. Sales literature
        published by CSC boasted that &ldquo;the program will immediately reduce the size
        of bodily injury claims by up to 20 percent.&rdquo; This was not presented as a
        flaw. It was the selling point.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Property Claims Equivalent: Xactimate and Desk Reviews
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        While Colossus was designed for bodily injury claims, property claims have their
        own version of this dynamic. Estimating software like{' '}
        <Link href="/resources/xactimate" className="text-[#2E74B5] underline">
          Xactimate
        </Link>{' '}
        is used industry-wide to price property damage repairs. The software itself is a
        legitimate tool &mdash; the problem is how carriers use it. Field adjusters inspect
        the property, document the damage, and prepare an estimate. That estimate is then
        submitted to a desk reviewer &mdash; someone who has never visited the property
        &mdash; who cuts line items, reduces quantities, eliminates entire categories of
        damage, and overrides the field adjuster&rsquo;s professional judgment.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The result is a payment that bears little resemblance to what the field adjuster
        found. The policyholder never sees the original estimate. They only see the
        reduced version, and they are told this is what the damage is worth. This is not a
        failure of the claims process. It is the claims process working exactly as it was
        designed to work after the consulting firms got involved.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How the Rest of the Industry Followed
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Allstate was the pioneer, but it did not remain alone. Once the financial results
        of the McKinsey strategy became visible &mdash; higher profits, lower payout
        ratios, and no meaningful regulatory consequence &mdash; competitors rushed to
        adopt similar approaches. Each carrier implemented its own version of the playbook,
        tailored to its market and organizational structure, but the underlying philosophy
        is the same across the industry: treat claims as a cost to be minimized rather
        than a promise to be fulfilled.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Allstate: The McKinsey Blueprint
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Allstate remains the most thoroughly documented example of consulting-driven
        claims suppression. The CCPR program institutionalized the &ldquo;boxing
        gloves&rdquo; approach across every claims office. Adjusters were trained to find
        reasons to deny rather than reasons to pay. Initial offers were calculated at
        approximately 80 percent of comparable past claims &mdash; an automatic 20 percent
        haircut before negotiation even began. Policyholders who accepted were processed
        quickly. Those who fought were subjected to years of delay and aggressive
        litigation.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        State Farm: The Manager Override System
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        State Farm developed its own approach to achieving similar results. The company
        uses a system where team managers and centralized review teams override field
        adjusters&rsquo; assessments. A field adjuster inspects a roof, documents the
        damage, and recommends replacement. The estimate goes up the chain, and a manager
        &mdash; who has never set foot on the property &mdash; revises the assessment
        downward based on the company&rsquo;s internal damage definitions.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        These internal definitions are not found in the policy language. State Farm
        restricts its adjusters from independently deciding when a roof should be replaced,
        requiring manager approval that applies the company&rsquo;s own criteria rather
        than industry standards or the plain language of the policy. Communication with
        policyholders is increasingly done remotely, with explanations attributed to
        unnamed managers &mdash; &ldquo;the manager said&rdquo; with no name provided and
        no substantive explanation offered.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        State Farm has also centralized its audit teams for both auto and homeowners
        claims. These teams review estimates prepared by independent shops, contractors,
        and even the company&rsquo;s own field adjusters &mdash; cutting line items and
        reducing payments before the policyholder ever sees a number.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Farmers Insurance: Controlling the Appraisal Process
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Farmers Insurance takes a different but equally effective approach to claims
        suppression. The company relies heavily on in-house appraisers and preferred
        vendors whose continued relationship with Farmers depends on producing results
        that align with the company&rsquo;s interests. When an independent contractor
        produces an estimate that exceeds the company&rsquo;s figure, Farmers can point
        to its own appraiser&rsquo;s lower number as justification for the reduced
        payment.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Perhaps more significantly, Farmers has modified its policy language to restrict
        the appraisal process &mdash; the policyholder&rsquo;s primary contractual remedy
        for disputing the amount of a claim. Farmers&rsquo; &ldquo;Next Generation&rdquo;
        homeowner&rsquo;s policy restricts what the appraisal panel can determine
        regarding overhead and profit and building ordinance coverage, effectively
        writing the appraisal remedy out of their policies for precisely the categories
        where the largest disputes arise. When the appraisal process itself is controlled
        by the carrier, the policyholder&rsquo;s last contractual safeguard becomes
        meaningless.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        CSAA/AAA: California Wildfire Claims
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        CSAA Insurance Group, which operates under the AAA brand, has drawn particular
        scrutiny for its handling of California wildfire claims. In{' '}
        <Link href="/resources/wildfire-guide" className="text-[#2E74B5] underline">
          wildfire losses
        </Link>
        , where entire homes are destroyed, the primary disputes involve replacement cost
        valuations. CSAA has faced bad faith litigation alleging intentional lowballing of
        replacement values &mdash; with policyholders documenting differences of several
        hundred thousand dollars between CSAA&rsquo;s covered replacement values and
        actual contractor quotes to rebuild.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Investigations have shown that CSAA failed to account for differences in local
        construction costs when estimating replacement values, failed to regularly update
        replacement cost estimates as required, and placed the burden on policyholders
        and their agents to obtain replacement cost information &mdash; rather than
        fulfilling its own obligation to accurately assess and communicate coverage
        limits. For wildfire survivors already dealing with the loss of everything they
        own, these practices compound the devastation.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Preferred Vendor and Managed Repair Programs: Suppressing Claim Values by Design
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        One of the most effective modern tools for suppressing claim values is the
        &ldquo;preferred vendor&rdquo; or &ldquo;managed repair&rdquo; program. Under
        these programs, the insurance company maintains a network of contractors who have
        agreed to perform repairs at rates set by the carrier. The policyholder is steered
        &mdash; sometimes pressured, sometimes contractually required &mdash; to use
        these contractors rather than selecting their own.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The economics are straightforward. The carrier negotiates discounted rates with
        its preferred vendors. These vendors accept lower margins because the carrier
        provides a steady stream of work. The policyholder receives repairs performed at
        below-market rates, often by contractors whose primary obligation is to the
        carrier that sends them business, not the homeowner whose property they are
        repairing. Cost savings for the carrier can come at the expense of repair
        quality, as contractors cut corners to meet the insurer&rsquo;s budget
        constraints.
      </p>

      <CalloutBox variant="tip" title="You Have the Right to Choose Your Own Contractor">
        <p>
          In California, no insurer shall require that the insured have the property
          repaired by a specific individual or entity (10 CCR &sect;2695.9(b)). Your
          carrier may recommend its preferred vendors, but it cannot force you to use
          them. Read more about{' '}
          <Link href="/resources/choosing-your-contractor" className="text-[#2E74B5] underline">
            choosing your own contractor
          </Link>{' '}
          and your{' '}
          <Link href="/resources/right-to-repair" className="text-[#2E74B5] underline">
            right to repair
          </Link>
          .
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        The managed repair model also creates a baseline that the carrier uses against
        policyholders who choose their own contractor. When your independent contractor
        bids $80,000 and the carrier&rsquo;s preferred vendor would do the same work for
        $50,000, the carrier points to its vendor&rsquo;s lower price as the &ldquo;market
        rate&rdquo; and refuses to pay the difference. The fact that the preferred
        vendor&rsquo;s price reflects a negotiated discount &mdash; not the actual market
        cost of the repair &mdash; is conveniently ignored.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Biased Expert Pipeline
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The consulting-driven claims model relies heavily on a network of{' '}
        <Link href="/resources/biased-insurance-experts" className="text-[#2E74B5] underline">
          carrier-retained experts
        </Link>{' '}
        &mdash; engineers, hygienists, appraisers, and other professionals whose
        continued engagement depends on producing reports that support the carrier&rsquo;s
        position. These are not independent experts conducting objective investigations.
        They are vendors in a repeat-business relationship where the conclusions are
        expected before the inspection begins.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A carrier-retained engineer who consistently recommends roof replacement will
        stop receiving assignments. An industrial hygienist who finds extensive
        contamination requiring costly remediation will not be called back. The
        financial incentive is structural and self-reinforcing: produce reports that
        minimize the carrier&rsquo;s exposure, or be replaced by someone who will. This
        pipeline of biased expertise is essential to the claims-suppression model
        because it provides the carrier with &ldquo;expert&rdquo; cover for
        underpayment decisions.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Common Tactics in Practice
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The consulting-driven claims model manifests in predictable, repeatable tactics
        that policyholders encounter on virtually every significant claim. Understanding
        these tactics is the first step toward defeating them.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        1. The Lowball First Offer
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The initial settlement offer is almost always calculated to be significantly less
        than the actual value of the claim. This is not an accident or a good-faith
        disagreement. It is the opening move in a negotiation designed to anchor the
        policyholder&rsquo;s expectations at a number far below what the claim is worth.
        The carrier knows the offer is low. It counts on a significant percentage of
        policyholders accepting it anyway &mdash; out of exhaustion, financial desperation,
        or simple ignorance of what their claim is actually worth. Learn more about{' '}
        <Link href="/resources/first-offer-lowball" className="text-[#2E74B5] underline">
          why you should never accept the insurer&rsquo;s first offer
        </Link>
        .
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        2. Delay as a Weapon
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Deliberate delay is the single most effective claims-handling tactic because it
        costs the carrier nothing and costs the policyholder everything. A carrier that
        takes four months to respond to a supplement request, six months to approve
        additional work, or a year to resolve a dispute over coverage is not being
        thorough. It is executing the &ldquo;sit and wait&rdquo; strategy that McKinsey
        recommended on a slide with an alligator. California law imposes specific
        deadlines on claim handling &mdash; 15 days to acknowledge receipt, 40 days to
        accept or deny after proof of claim &mdash; but carriers routinely push these
        boundaries and face minimal consequences. Read more about{' '}
        <Link href="/resources/insurance-delay-tactics" className="text-[#2E74B5] underline">
          insurance company delay tactics
        </Link>
        .
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        3. The Desk Review Override
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The field adjuster inspects the property, documents the damage, and prepares an
        estimate. Then a desk adjuster &mdash; who has never seen the property and has no
        firsthand knowledge of the damage &mdash; reviews the estimate and cuts it. Line
        items are removed. Labor times are reduced. Material quantities are decreased.
        Entire categories of damage are eliminated. The field adjuster&rsquo;s professional
        judgment is overridden by someone whose job performance is measured, in part, by
        how much they reduce claim payments.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        4. Scope Limitation
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Carriers routinely narrow the scope of covered damage. Water damage is limited to
        the room where the leak occurred, ignoring migration through walls and subfloors.
        Fire damage is scoped to the area of direct flame contact, ignoring smoke and soot
        contamination throughout the structure. Wind damage is addressed shingle by
        shingle rather than evaluating the roof system as a whole. Each limitation reduces
        the carrier&rsquo;s payout and transfers the unaddressed damage to the
        policyholder.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        5. Depreciation Manipulation
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance carriers depreciate virtually everything they can &mdash; and many
        things they cannot legally depreciate, such as labor costs in many states. Items
        with decades of useful life remaining are depreciated to near-zero value. New
        categories of depreciable items are invented. The depreciation holdback on an
        initial payment can be so large that the policyholder cannot afford to begin
        repairs &mdash; which the carrier then uses as evidence that the repairs are not
        being made, justifying further delay or denial.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        6. Denial of Overhead and Profit
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        No licensed general contractor performs work at net cost. The standard in the
        construction industry &mdash; and in the estimating software carriers use &mdash;
        is 10 percent overhead and 10 percent profit. Yet carriers routinely strip O&amp;P
        from their estimates, claiming it is only owed when the policyholder hires a
        general contractor to manage multiple trades. This argument ignores the reality
        that any significant property loss involves coordination across multiple trades,
        and that no competent contractor will agree to work at cost. Learn more about{' '}
        <Link href="/resources/overhead-and-profit" className="text-[#2E74B5] underline">
          overhead and profit
        </Link>
        .
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        7. Recorded Statements and Examinations Under Oath
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Carriers request recorded statements and examinations under oath not to
        investigate the claim, but to build a file that can be used against the
        policyholder. Questions are designed to elicit statements that can later be
        characterized as inconsistencies. The process itself serves as a delay tactic,
        adding weeks or months to the claim timeline while the policyholder waits for the
        carrier to &ldquo;complete its investigation.&rdquo;
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        California&rsquo;s Response: The Fair Claims Settlement Practices Regulations
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California&rsquo;s Fair Claims Settlement Practices Regulations (10 CCR
        &sect;2695.1 through &sect;2695.12) exist precisely because of the tactics
        described in this article. These regulations establish minimum standards for
        claims handling that directly address the consulting-driven playbook. They are
        enforced by the California Department of Insurance under the authority of
        Insurance Code &sect;790.03(h), which identifies sixteen unfair claims settlement
        practices.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Key Regulatory Protections
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Timely communication</strong> &mdash; Insurers must acknowledge receipt
          of a claim within 15 calendar days and begin investigation immediately (10 CCR
          &sect;2695.5(e)).
        </li>
        <li>
          <strong>Prompt acceptance or denial</strong> &mdash; Upon receiving proof of
          claim, the insurer must accept or deny the claim within 40 calendar days (10 CCR
          &sect;2695.7(b)).
        </li>
        <li>
          <strong>Prompt payment</strong> &mdash; Upon acceptance, the insurer must tender
          payment within 30 calendar days (10 CCR &sect;2695.7(b)).
        </li>
        <li>
          <strong>No forced vendor selection</strong> &mdash; No insurer shall require the
          insured to have property repaired by a specific individual or entity (10 CCR
          &sect;2695.9(b)).
        </li>
        <li>
          <strong>Fair investigation</strong> &mdash; The insurer must conduct a thorough,
          fair, and objective investigation sufficient to determine coverage (10 CCR
          &sect;2695.7(d)).
        </li>
        <li>
          <strong>Written explanation required</strong> &mdash; Any denial or partial
          denial must include a written explanation of every basis for the decision, with
          reference to the specific policy provisions (10 CCR &sect;2695.7(b)(1)).
        </li>
        <li>
          <strong>No misrepresentation of policy provisions</strong> &mdash; The insurer
          shall not misrepresent pertinent facts or policy provisions relating to coverage
          at issue (10 CCR &sect;2695.4).
        </li>
        <li>
          <strong>Measurement and scope standards</strong> &mdash; For first-party
          residential property claims, the insurer must provide accurate measurements
          and a detailed scope of damage (10 CCR &sect;2695.9(d)).
        </li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        These regulations provide the framework for holding carriers accountable. Learn
        more about{' '}
        <Link href="/resources/california-fair-claims" className="text-[#2E74B5] underline">
          California&rsquo;s Fair Claims Settlement Practices Regulations
        </Link>{' '}
        and how to use them to protect your claim. When a carrier violates these
        regulations, it may constitute evidence of{' '}
        <Link href="/resources/bad-faith" className="text-[#2E74B5] underline">
          bad faith
        </Link>
        .
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why the Consulting Model Persists
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The obvious question is: if these tactics are documented, exposed, and regulated
        against, why do they continue? The answer is economics. The consulting-driven
        claims model is extraordinarily profitable. For every policyholder who fights back,
        hires a public adjuster, or files a bad faith lawsuit, there are dozens who accept
        the lowball offer, give up on the supplement, or walk away from money they are
        owed.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Regulatory penalties, when they are imposed, are a fraction of the savings
        generated by underpayment. A carrier that saves billions by systematically
        underpaying claims and pays millions in fines has made a profitable trade. The
        system will continue as long as the cost of compliance exceeds the cost of
        violation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is also why the consulting firms themselves face no accountability. McKinsey
        & Company designed and recommended the strategy, but it was implemented by
        Allstate and adopted by competitors. The consultants move on to the next
        engagement. The carriers implement the recommendations. The policyholders bear
        the consequences.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What You Can Do About It
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Understanding how the system works is the most important step toward defeating it.
        These tactics are designed to work on policyholders who do not know their rights,
        do not understand the claims process, and do not have the resources or knowledge
        to fight back. When you know what the carrier is doing and why, you can respond
        strategically.
      </p>

      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Never accept the first offer</strong> &mdash; The initial offer is the
          &ldquo;good hands&rdquo; number &mdash; calculated to close the claim quickly
          at a fraction of its value. Request a detailed breakdown and compare it to
          actual repair costs from licensed contractors. See{' '}
          <Link href="/resources/first-offer-lowball" className="text-[#2E74B5] underline">
            why the first offer is almost always too low
          </Link>
          .
        </li>
        <li>
          <strong>Document everything in writing</strong> &mdash; The carrier&rsquo;s
          claims file is built to support the carrier&rsquo;s position. Build your own.
          Confirm every phone conversation in a follow-up email. Request every denial and
          every decision in writing. Create a paper trail that documents delay, bad faith,
          and procedural violations.
        </li>
        <li>
          <strong>Know the regulations</strong> &mdash; California&rsquo;s{' '}
          <Link href="/resources/california-fair-claims" className="text-[#2E74B5] underline">
            Fair Claims Settlement Practices Regulations
          </Link>{' '}
          impose specific obligations on the carrier. Cite them. When the carrier misses
          the 40-day acceptance deadline, say so in writing. When the carrier fails to
          provide a written explanation for a denial, demand one with a citation to 10 CCR
          &sect;2695.7(b)(1).
        </li>
        <li>
          <strong>Get your own estimate</strong> &mdash; Do not rely on the
          carrier&rsquo;s estimate as the measure of your loss. Hire a licensed contractor
          to prepare an independent repair estimate. The difference between the
          carrier&rsquo;s number and the actual cost of repair is the measure of
          underpayment.
        </li>
        <li>
          <strong>Consider hiring a public adjuster</strong> &mdash; The
          carrier has an entire team of adjusters, engineers, and consultants working to
          minimize your claim. A{' '}
          <Link href="/resources/dealing-with-adjuster" className="text-[#2E74B5] underline">
            licensed public adjuster
          </Link>{' '}
          works exclusively for you, knows the same estimating tools and regulations the
          carrier uses, and can level the playing field.
        </li>
        <li>
          <strong>Invoke the appraisal clause</strong> &mdash; Most homeowner&rsquo;s
          policies contain an appraisal clause that provides a binding process for
          resolving disputes over the amount of loss. This is often faster and less
          expensive than litigation, and it removes the carrier&rsquo;s ability to
          stall indefinitely.
        </li>
        <li>
          <strong>File a complaint with the California Department of Insurance</strong>
          &mdash; Regulatory complaints create a record and can trigger market conduct
          examinations. One complaint may not change a carrier&rsquo;s behavior, but a
          pattern of complaints absolutely will.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Adjuster on the Other Side Is Not Your Enemy
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        One final point that is often lost in discussions of carrier tactics: the
        individual field adjuster who inspects your property is not the architect of these
        strategies. Most field adjusters entered the profession wanting to help people
        after disasters. Many are frustrated by the very system described in this article
        &mdash; a system that overrides their professional judgment, restricts their
        authority to pay claims fairly, and evaluates their performance based on how low
        they can keep payouts rather than how accurately they can assess damage.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The problem is not the adjuster at your kitchen table. The problem is the system
        above that adjuster &mdash; the desk reviewers, the team managers, the corporate
        claims departments, and ultimately the management consulting firms that designed a
        process where &ldquo;Allstate gains &hellip; others must lose.&rdquo; Your
        frustration is legitimate. Direct it at the system, not the individual.
      </p>

      <CalloutBox variant="info" title="Further Reading">
        <p>
          This article is part of a comprehensive library of resources for policyholders.
          For specific tactics and how to counter them, see{' '}
          <Link href="/resources/bad-faith" className="text-[#2E74B5] underline">
            Bad Faith Insurance Practices
          </Link>
          ,{' '}
          <Link href="/resources/insurance-delay-tactics" className="text-[#2E74B5] underline">
            Insurance Company Delay Tactics
          </Link>
          ,{' '}
          <Link href="/resources/first-offer-lowball" className="text-[#2E74B5] underline">
            Never Accept the Insurer&rsquo;s First Offer
          </Link>
          ,{' '}
          <Link href="/resources/biased-insurance-experts" className="text-[#2E74B5] underline">
            Biased Insurance Experts
          </Link>
          , and{' '}
          <Link href="/resources/dealing-with-adjuster" className="text-[#2E74B5] underline">
            Dealing with the Insurance Adjuster
          </Link>
          . For California-specific protections, read{' '}
          <Link href="/resources/california-fair-claims" className="text-[#2E74B5] underline">
            California Fair Claims Settlement Practices Regulations
          </Link>
          .
        </p>
      </CalloutBox>

      <blockquote className="border-l-4 border-[#C9A84C] pl-4 italic text-gray-600 mb-6">
        &ldquo;Improving Allstate&rsquo;s casualty economics will have a negative
        economic impact on some medical providers, plaintiff attorneys, and
        claimants. &hellip; Allstate gains &mdash; others must lose.&rdquo;
        &mdash; McKinsey & Company PowerPoint presentation to Allstate executives,
        1994
      </blockquote>
    </>
  )
}
