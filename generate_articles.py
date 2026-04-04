"""
Generate 20 new blog articles for insuranceclaimsinfo.com from Facebook content database.
Each article follows the existing TSX pattern in lib/content/articles/.
"""
import os

ARTICLES_DIR = "C:/Users/lelan/Desktop/Claude Projects/insuranceclaimsinfo/lib/content/articles"

articles = [
    {
        "slug": "overhead-and-profit",
        "title": "Overhead & Profit: When Your Claim Should Include O&P",
        "description": "Insurance companies routinely refuse to include overhead and profit in their estimates. Learn what O&P is, when you're entitled to it, and how to fight for it.",
        "content": """
      <p className="text-gray-700 leading-relaxed mb-4">
        Overhead and Profit &mdash; commonly called O&amp;P &mdash; is one of the most
        frequently disputed line items in property insurance claims. It refers to the general
        contractor&apos;s fee for managing a repair project: typically 10% overhead (business
        expenses) and 10% profit, for a combined 20% on top of the direct repair costs.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance companies routinely refuse to include O&amp;P in their estimates, claiming
        the homeowner &quot;doesn&apos;t need a general contractor.&quot; This argument falls
        apart when you look at what the repairs actually require.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">When Is O&amp;P Owed?</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        O&amp;P is owed whenever the repair requires the coordination of multiple trades. If
        your claim involves plumbing, electrical, drywall, painting, and flooring &mdash; which
        most water damage claims do &mdash; someone has to manage those trades. That&apos;s what
        a general contractor does, and their overhead and profit are legitimate costs of repair.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurance company&apos;s own estimating software, Xactimate, includes O&amp;P as
        a standard feature. When the carrier&apos;s adjuster removes it, they&apos;re making a
        judgment call that often contradicts how construction actually works.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">The &quot;Three Trade&quot; Rule</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many in the industry reference a &quot;three trade rule&quot; &mdash; the idea that if
        a repair requires three or more trades (e.g., plumbing, drywall, paint), O&amp;P should
        be included. While this isn&apos;t a formal regulation in most states, it&apos;s widely
        accepted as a reasonable standard. Even Xactimate&apos;s own documentation references
        the complexity of multi-trade coordination as justification for O&amp;P.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The reality is that even repairs involving two trades often need a general contractor.
        Someone needs to schedule, coordinate, pull permits, ensure code compliance, and manage
        quality. A homeowner shouldn&apos;t be expected to serve as their own GC.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Common Carrier Arguments Against O&amp;P</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>&quot;The homeowner can coordinate the trades themselves.&quot;</strong> The
          policy pays for what it costs to repair the property, not for the homeowner to become
          a project manager. The insured is entitled to have the work done professionally.
        </li>
        <li>
          <strong>&quot;It&apos;s a simple repair.&quot;</strong> If the estimate has multiple
          trades, it&apos;s not simple. Even &quot;small&quot; water losses often involve demo,
          drying, plumbing, drywall, texture, paint, flooring, and baseboard.
        </li>
        <li>
          <strong>&quot;We&apos;ll add it if you provide a signed GC contract.&quot;</strong>
          You shouldn&apos;t need to hire and sign with a contractor before the insurance company
          pays what the repair actually costs. The estimate should reflect the cost of repair
          regardless of whether the homeowner has already hired someone.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">How to Fight for O&amp;P</h2>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Get a written estimate from a licensed general contractor that includes O&amp;P
          &mdash; this demonstrates that real-world contractors charge it.
        </li>
        <li>
          Count the trades in the insurance company&apos;s own estimate. If they have three or
          more trades listed but no O&amp;P, point out the inconsistency.
        </li>
        <li>
          Cite your state&apos;s fair claims regulations. In California, the insurer must pay
          the reasonable cost of repair &mdash; and O&amp;P is a reasonable cost when a GC is needed.
        </li>
        <li>
          Put your demand in writing. Explain why O&amp;P is appropriate and ask the carrier
          to add it or provide a written explanation for why they believe it&apos;s not owed.
        </li>
        <li>
          If the carrier refuses, this becomes an amount dispute that can be resolved through{' '}
          <Link href="/resources/appraisal" className="text-blue-700 underline hover:text-blue-900">
            appraisal
          </Link>.
        </li>
      </ol>

      <CalloutBox title="The Dollar Impact">
        <p>
          On a $50,000 repair, O&amp;P adds $10,000 to the claim. On a $100,000 repair,
          it&apos;s $20,000. This is real money that insurance companies are stripping from
          claims every day. Don&apos;t accept an estimate that omits O&amp;P without a fight.
        </p>
      </CalloutBox>
"""
    },
    {
        "slug": "water-damage-claims",
        "title": "Water Damage Insurance Claims: A Complete Guide",
        "description": "How to handle water damage insurance claims — from emergency response to final settlement. Covers sudden vs. gradual leaks, slab leaks, and common carrier disputes.",
        "content": """
      <p className="text-gray-700 leading-relaxed mb-4">
        Water damage is the most common type of homeowner&apos;s insurance claim &mdash; and one
        of the most frequently disputed. Whether it&apos;s a burst pipe, a failed water heater,
        a slab leak, or an appliance malfunction, the key question is always the same: is this
        a sudden and accidental loss, or a gradual leak?
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        That distinction determines whether your claim gets paid or denied. And insurance
        companies have become very aggressive about characterizing losses as &quot;gradual&quot;
        to avoid payment.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">What&apos;s Covered</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most homeowner&apos;s policies cover water damage that is &quot;sudden and accidental.&quot;
        This includes:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Burst or frozen pipes</li>
        <li>Water heater failures</li>
        <li>Appliance malfunctions (dishwasher, washing machine, refrigerator)</li>
        <li>Sudden plumbing failures</li>
        <li>Accidental overflow from a sink or bathtub</li>
        <li>Toilet overflow or supply line failure</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">What&apos;s Typically Excluded</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Flood damage (requires separate flood insurance)</li>
        <li>Gradual leaks and seepage</li>
        <li>Maintenance-related failures</li>
        <li>Sewer backup (unless you have a sewer backup endorsement)</li>
        <li>Water intrusion through the foundation (in many policies)</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">The &quot;Sudden vs. Gradual&quot; Battle</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here&apos;s where most water damage disputes begin. A pipe fails in your wall. The
        insurance company sends an adjuster who looks at the damage and says, &quot;This has
        been leaking for a long time &mdash; this is a gradual leak, not a covered loss.&quot;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The reality is more nuanced. A pipe can corrode gradually but fail suddenly. The
        corrosion is the condition, but the failure &mdash; the moment the pipe actually
        starts leaking water into your home &mdash; is the event. Many adjusters confuse
        the condition of the pipe with the onset of the damage.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Courts in many states have held that if the policyholder didn&apos;t know about the
        leak and the resulting damage was not reasonably discoverable, the loss can still be
        considered &quot;sudden&quot; from the policyholder&apos;s perspective.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Slab Leaks</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Slab leaks deserve special attention because they&apos;re extremely common in certain
        regions and are frequently disputed. A slab leak occurs when a pipe running under or
        through the concrete slab foundation develops a leak.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most policies cover the resulting damage &mdash; the water damage to flooring, cabinets,
        walls, etc. &mdash; but may not cover the cost of accessing the pipe itself (jackhammering
        the slab). However, some policies do cover &quot;tearing out and replacing&quot; parts of
        the building necessary to access the source of the leak. Read your policy carefully on
        this point, and if in doubt, consult a{' '}
        <Link href="/resources/public-adjuster" className="text-blue-700 underline hover:text-blue-900">
          public adjuster
        </Link>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insured may be entitled to at least the cost of direct repair to the slab &mdash; leak
        detection, opening the slab, excavation, back-filling, and pouring new concrete &mdash; even
        if they chose the more expensive option of rerouting the plumbing.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Immediate Steps After Water Damage</h2>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Stop the source</strong> &mdash; shut off the water supply if possible.
        </li>
        <li>
          <strong>Document everything</strong> &mdash; take photos and video of the damage
          before any cleanup or mitigation.
        </li>
        <li>
          <strong>Call your insurance company</strong> &mdash; report the loss promptly.
        </li>
        <li>
          <strong>Start mitigation</strong> &mdash; call a water damage mitigation company
          to begin extraction and drying. Do not wait for the adjuster. Your policy requires
          you to prevent further damage.
        </li>
        <li>
          <strong>Keep the failed component</strong> &mdash; if a pipe, hose, or fitting
          failed, save it. The insurance company may want to inspect it.
        </li>
        <li>
          <strong>Do not make permanent repairs</strong> until the insurance company has
          inspected and documented the damage.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Common Carrier Tactics on Water Claims</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Calling it &quot;gradual&quot;</strong> &mdash; even when the damage appeared suddenly to the homeowner
        </li>
        <li>
          <strong>Limiting the scope</strong> &mdash; only covering the immediately visible room
          when water migrated to adjacent areas
        </li>
        <li>
          <strong>Refusing to pay for mold testing</strong> &mdash; when water sat for any period before mitigation
        </li>
        <li>
          <strong>Excluding the source repair</strong> &mdash; paying for the water damage but
          not the plumbing repair, even when the policy covers &quot;tear out and replace&quot;
        </li>
        <li>
          <strong>Using their own mitigation company</strong> &mdash; who may dry the area
          but write a limited damage report favorable to the carrier
        </li>
      </ul>

      <CalloutBox title="Don't Let Them Rush You">
        <p>
          Insurance companies sometimes pressure homeowners to sign off on mitigation work
          as the full extent of the damage before hidden damage is properly assessed.
          Water travels behind walls, under floors, and into adjacent rooms. A thorough
          moisture survey with proper equipment is essential before anyone signs off on
          the scope of damage.
        </p>
      </CalloutBox>
"""
    },
    {
        "slug": "right-to-repair",
        "title": "Right to Repair Clauses: Your Rights When the Carrier Sends Their Contractor",
        "description": "Insurance companies increasingly use 'right to repair' clauses to control repairs. Learn your rights, how to manage the carrier's contractor, and when to push back.",
        "content": """
      <p className="text-gray-700 leading-relaxed mb-4">
        &quot;Right to Repair&quot; clauses are becoming more common in insurance policies. These
        provisions give the insurance company the option to repair your property directly using
        their own chosen contractor, instead of paying you the cash value of the loss.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        On the surface, this might sound convenient &mdash; the insurance company handles
        everything. In practice, it gives the carrier enormous control over the quality, scope,
        and cost of repairs to your home.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">How Right to Repair Works</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a carrier invokes their right to repair, they select and pay a contractor
        directly to perform the repairs. The homeowner doesn&apos;t receive a check &mdash;
        the money goes straight to the carrier&apos;s chosen contractor.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The problem is that this contractor works for the insurance company, not for you.
        Their incentive is to keep the insurance company happy &mdash; which means keeping
        costs down, not maximizing the quality of your repairs.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Managing the Carrier&apos;s Contractor</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the insurance company sends their contractor, treat them exactly the way consumer
        protection agencies recommend you treat any contractor working on your home. In
        California, the Contractors State License Board has extensive guidance on homeowner
        rights:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Verify the contractor&apos;s license.</strong> Call the CSLB at (800) 321-2752
          or check their website. Licensed contractors must post a $12,500 bond.
        </li>
        <li>
          <strong>Ask for references.</strong> Visit homes where they&apos;ve done work and
          review the quality.
        </li>
        <li>
          <strong>Get a written contract</strong> that states the work, the price, completion
          timeline, and materials to be used.
        </li>
        <li>
          <strong>Don&apos;t allow excessive down payments.</strong> In California, contractors
          can only collect $1,000 or 10% of the total cost, whichever is less.
        </li>
        <li>
          <strong>Schedule payments based on completed work.</strong> Don&apos;t let payments
          get ahead of the work actually done.
        </li>
        <li>
          <strong>Document everything</strong> with photos before, during, and after repairs.
        </li>
      </ol>

      <CalloutBox title="Your Right to Choose">
        <p>
          In most states, even if the policy has a right-to-repair clause, you have legal
          protections. If the carrier&apos;s contractor does substandard work, you have
          recourse. And if you cancel the carrier&apos;s contractor, make sure you have a
          legitimate reason and consult with an attorney first &mdash; cancelling without
          cause could put you in breach of your policy.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Common Problems with Carrier Contractors</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Substandard work quality</strong> &mdash; preferred vendors are often
          selected for price, not quality
        </li>
        <li>
          <strong>Skipping scope items</strong> &mdash; doing only what the carrier authorized,
          not what the home actually needs
        </li>
        <li>
          <strong>Using cheaper materials</strong> &mdash; substituting lower-grade materials
          for what was originally in the home
        </li>
        <li>
          <strong>Rushing the timeline</strong> &mdash; completing work quickly at the expense
          of thoroughness
        </li>
        <li>
          <strong>Not pulling permits</strong> &mdash; skipping required building permits to
          save time and cost
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Protecting Yourself</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Even if you accept the carrier&apos;s contractor, you have every right to monitor
        the work, demand quality, and raise concerns. Keep a detailed log of the work being
        done, take daily photos, and don&apos;t sign off on completed work until you&apos;re
        satisfied it meets professional standards.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you encounter problems with the carrier&apos;s contractor, document everything in
        writing and notify both the contractor and the insurance company. If the issues aren&apos;t
        resolved, consult with a{' '}
        <Link href="/resources/public-adjuster" className="text-blue-700 underline hover:text-blue-900">
          public adjuster
        </Link>{' '}
        or attorney about your options.
      </p>
"""
    },
    {
        "slug": "insurance-delay-tactics",
        "title": "Insurance Company Delay Tactics and Your Rights",
        "description": "How insurance companies use delay to pressure you into accepting less. Learn the regulatory deadlines, how to document delays, and when to take action.",
        "content": """
      <p className="text-gray-700 leading-relaxed mb-4">
        If the lowball offer is the insurance industry&apos;s most common tactic, delay is its
        most effective. Time is always on the insurance company&apos;s side. The longer a claim
        drags on, the more desperate the homeowner becomes. Bills accumulate. The damage worsens.
        Eventually, many people accept whatever the carrier offers just to make it stop.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">California Regulatory Deadlines</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California has some of the strongest claim handling regulations in the country. Under
        the Fair Claims Settlement Practices Regulations (10 CCR 2695), insurance companies must:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Acknowledge your claim within 15 days</strong> of receiving notice</li>
        <li><strong>Begin investigation within 15 days</strong> of receiving notice</li>
        <li><strong>Accept or deny the claim within 40 days</strong> of receiving proof of claim</li>
        <li><strong>Pay accepted claims within 30 days</strong> of reaching agreement</li>
        <li>
          <strong>Provide written status updates every 30 days</strong> if the claim remains open
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">The Multiple Adjuster Problem</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        One of the most frustrating delay tactics is the adjuster carousel. The insurance company
        assigns an adjuster to your claim. You spend weeks bringing them up to speed. Then they
        reassign your claim to a new adjuster. The process starts over. Some claims go through
        three, four, or five adjusters &mdash; each handoff adding weeks or months.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In California, when a claim has had three or more adjusters within a six-month period,
        the policyholder can request a special written status report from the insurance company.
        This is a separate requirement from the regular monthly status reports.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">What &quot;Proof of Claim&quot; Really Means</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        An important concept many people don&apos;t understand: &quot;proof of claim&quot; is
        defined broadly in California regulations. It&apos;s not the same as a &quot;proof of
        loss&quot; (a formal sworn statement). Any estimate, bid, or invoice &mdash; whether
        submitted by the insured, generated by the adjuster, or even submitted by a contractor
        the insured isn&apos;t interested in working with &mdash; can constitute a proof of claim.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Once a proof of claim exists, it becomes a &quot;claim-related document,&quot; and the
        insurance company&apos;s 40-day clock starts. Many adjusters don&apos;t realize this
        &mdash; or pretend they don&apos;t.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">How to Fight Delay</h2>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Keep a detailed communication log</strong> &mdash; dates, names, what was
          discussed, promises made
        </li>
        <li>
          <strong>Follow every call with a confirming email</strong> &mdash; &quot;Per our
          conversation today, you stated that...&quot;
        </li>
        <li>
          <strong>Cite specific regulatory deadlines</strong> in your written communications
        </li>
        <li>
          <strong>Request written status reports</strong> monthly, as required by regulation
        </li>
        <li>
          <strong>File a complaint with the California Department of Insurance</strong> if
          deadlines are violated &mdash;{' '}
          <Link href="/resources/cdi-complaint" className="text-blue-700 underline hover:text-blue-900">
            learn how here
          </Link>
        </li>
        <li>
          <strong>Consider hiring a public adjuster or attorney</strong> &mdash; carriers often
          move faster when a professional is involved
        </li>
      </ol>

      <CalloutBox title="Document Everything">
        <p>
          Every unreturned phone call, every missed deadline, every broken promise is
          potential evidence of{' '}
          <Link href="/resources/bad-faith" className="text-blue-700 underline hover:text-blue-900">
            bad faith
          </Link>. The paper trail you build during the delay is what makes
          a bad faith case possible later. Don&apos;t rely on verbal communication &mdash;
          get everything in writing.
        </p>
      </CalloutBox>
"""
    },
    {
        "slug": "labor-depreciation",
        "title": "Labor Depreciation: Why Your Insurance Company Can't Depreciate Work Costs",
        "description": "A growing number of states have ruled that insurance companies cannot depreciate labor. Learn what labor depreciation is, which states prohibit it, and how to fight it.",
        "content": """
      <p className="text-gray-700 leading-relaxed mb-4">
        Of all the ways insurance companies shortchange claim payouts, depreciating labor may
        be the most indefensible. The concept is simple: you cannot buy &quot;used labor.&quot;
        A roofer charges the same rate whether they&apos;re installing shingles on a new home
        or replacing 20-year-old shingles on yours. There is no &quot;depreciated&quot; version
        of a plumber&apos;s hourly rate.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">What Is Labor Depreciation?</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When an insurance company calculates your{' '}
        <Link href="/resources/acv-rcv" className="text-blue-700 underline hover:text-blue-900">
          actual cash value (ACV)
        </Link>{' '}
        payment, they subtract depreciation from the replacement cost. Properly done, depreciation
        should only apply to materials that have actually lost value due to age and wear. A
        20-year-old asphalt shingle has less useful life remaining than a new one &mdash; that
        depreciation makes sense.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        But many carriers apply depreciation to the labor portion of the estimate as well. They
        calculate a blanket percentage &mdash; say 25% or 40% &mdash; and apply it to the
        entire estimate, including all labor costs. This can represent thousands of dollars
        on a typical claim.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">The Legal Landscape</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A growing number of state courts have ruled that depreciating labor is improper.
        Notable decisions have come from:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Arkansas</strong> &mdash; <em>Shelter Mut. Ins. Co. v. Goodner</em></li>
        <li><strong>Georgia</strong> &mdash; multiple rulings</li>
        <li><strong>Kentucky</strong> &mdash; <em>Hicks v. State Farm</em></li>
        <li><strong>Oklahoma</strong> &mdash; <em>Redlin v. Grinnell Mut.</em></li>
        <li><strong>Illinois, Hawaii, and others</strong></li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        In California, the regulations require that depreciation be based on the &quot;condition&quot;
        of the damaged property. Labor doesn&apos;t have a &quot;condition&quot; &mdash; it&apos;s
        a service, not a physical object that wears out. This creates a strong argument against
        labor depreciation in California, though the issue hasn&apos;t been definitively resolved
        by the state&apos;s highest court.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">How to Challenge Labor Depreciation</h2>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Ask the carrier for an itemized depreciation schedule that separates materials
          from labor.
        </li>
        <li>
          If they applied a blanket percentage, demand they recalculate with labor excluded
          from depreciation.
        </li>
        <li>
          Research your state&apos;s case law on labor depreciation &mdash; this is an
          evolving area.
        </li>
        <li>
          Put your challenge in writing, citing the relevant case law or regulatory language.
        </li>
        <li>
          If the carrier refuses, consider{' '}
          <Link href="/resources/appraisal" className="text-blue-700 underline hover:text-blue-900">
            invoking appraisal
          </Link>{' '}
          or consulting an attorney.
        </li>
      </ol>

      <CalloutBox title="Do the Math">
        <p>
          On a $30,000 repair estimate where labor represents 40% of the cost ($12,000),
          applying 25% depreciation to labor improperly reduces your ACV payment by $3,000.
          On larger claims, improper labor depreciation can cost you $10,000 or more.
          It&apos;s worth fighting.
        </p>
      </CalloutBox>
"""
    },
    {
        "slug": "supplemental-claims",
        "title": "Filing Supplemental Claims: Getting Paid for What They Missed",
        "description": "How to file a supplement when the insurance company's estimate missed damage, and how to maximize your recovery through the supplement process.",
        "content": """
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurance company&apos;s first estimate is rarely the last word. As repairs proceed,
        additional damage is often discovered that wasn&apos;t visible during the initial inspection.
        A supplemental claim &mdash; or &quot;supplement&quot; &mdash; is your request for additional
        payment to cover damage or repair costs that weren&apos;t included in the original estimate.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Filing supplements is a normal and expected part of the claims process. Experienced
        adjusters know that complex claims often require multiple supplements. Don&apos;t feel
        like you&apos;re asking for a favor &mdash; you&apos;re exercising your right to full
        indemnification under your policy.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">When to File a Supplement</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Hidden damage discovered during demolition (water behind walls, mold under flooring)</li>
        <li>Items the adjuster missed during the initial inspection</li>
        <li>Price increases for materials since the original estimate</li>
        <li>Code upgrades required by the building department</li>
        <li>Additional trades needed that weren&apos;t in the original scope</li>
        <li>
          <Link href="/resources/overhead-and-profit" className="text-blue-700 underline hover:text-blue-900">
            Overhead and profit
          </Link>{' '}
          that was excluded from the original estimate
        </li>
        <li>Matching requirements (new materials don&apos;t match existing)</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">How to File a Supplement</h2>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Document the additional damage</strong> with photos and video before any
          repairs are made to those areas
        </li>
        <li>
          <strong>Get a written estimate</strong> for the additional work from your contractor
          or public adjuster
        </li>
        <li>
          <strong>Submit in writing</strong> to the adjuster handling your claim, with photos
          and a detailed explanation of why the additional work is needed
        </li>
        <li>
          <strong>Reference the original estimate</strong> and explain what was missed or
          what has changed
        </li>
        <li>
          <strong>Follow up</strong> if you don&apos;t receive a response within a reasonable
          time (check your state&apos;s regulations for specific deadlines)
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Multiple Supplements Are Normal</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        On complex claims, it&apos;s not unusual to file three, four, or even five supplements.
        Each time new damage is discovered or additional costs arise, you have the right to
        submit for additional payment. I&apos;ve handled claims where the final settlement was
        double or triple the carrier&apos;s initial estimate &mdash; all through legitimate
        supplements documenting real damage.
      </p>

      <CalloutBox title="Keep the Adjuster in the Loop">
        <p>
          The best approach is to notify the adjuster as soon as additional damage is discovered.
          Invite them to re-inspect if possible. The more they see with their own eyes, the
          harder it is to deny the supplement. If the carrier is telling you that the delays
          are your fault for filing supplements, remember: the supplement exists because they
          missed the damage in the first place.
        </p>
      </CalloutBox>
"""
    },
    {
        "slug": "adjuster-types",
        "title": "Types of Insurance Adjusters: Who You're Really Dealing With",
        "description": "Staff adjusters, independent adjusters, desk adjusters, field adjusters, public adjusters — learn who each one works for and how it affects your claim.",
        "content": """
      <p className="text-gray-700 leading-relaxed mb-4">
        Not all adjusters are the same. Understanding who the adjuster works for and what
        motivates them is critical to navigating your claim effectively.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Staff Adjusters</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Staff adjusters are employees of the insurance company. They receive a salary, benefits,
        and job security from the carrier. Their loyalty is to their employer. While many staff
        adjusters are honest professionals, the reality is that adjusters who consistently write
        generous estimates don&apos;t last long at insurance companies.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Independent Adjusters (IAs)</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Independent adjusters work for IA firms that contract with insurance companies. They&apos;re
        not direct employees of the carrier, but the carrier is their client. During catastrophes
        (hurricanes, wildfires, large storms), carriers bring in hundreds of independent adjusters
        to handle the surge of claims.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        IAs are paid per claim or per inspection. This creates an incentive to close claims
        quickly. In California, adjusters must be individually licensed and are required to include
        their license number or their supervising adjuster&apos;s license number on all written
        communications.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Desk Adjusters</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Desk adjusters handle claims remotely &mdash; they never visit your property. They
        review photos, estimates, and documentation from their office. The obvious limitation
        is that they can&apos;t see damage that isn&apos;t in the photos, can&apos;t smell mold,
        and can&apos;t feel soft drywall. Remote adjusting has become more common since COVID
        and has led to more disputes.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Field Adjusters</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Field adjusters physically inspect the property. They may be staff adjusters or
        independent adjusters. Having a field adjuster inspect your property is almost always
        better than a desk review, because they can observe damage that photos miss.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Public Adjusters</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A{' '}
        <Link href="/resources/public-adjuster" className="text-blue-700 underline hover:text-blue-900">
          public adjuster
        </Link>{' '}
        is the only type of adjuster who works exclusively for the policyholder. Public adjusters
        are licensed by the state and are legally prohibited from working for insurance companies.
        They document damage, prepare estimates, negotiate with the carrier, and handle the
        entire claims process on your behalf.
      </p>

      <CalloutBox title="Who Works for Whom">
        <p>
          Staff adjusters and independent adjusters work for the insurance company. Desk adjusters
          work for the insurance company. The only adjuster who works for YOU is a public adjuster.
          Understanding this distinction is the first step to protecting yourself.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">SIU Investigators</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Special Investigation Unit (SIU) investigators are not adjusters in the traditional
        sense. They investigate claims the carrier suspects may involve fraud or misrepresentation.
        If your claim is referred to SIU, take it seriously &mdash; but don&apos;t panic. Many
        SIU referrals are routine, triggered by dollar thresholds rather than actual suspicion
        of fraud. If SIU contacts you, consider consulting an attorney before providing a{' '}
        <Link href="/resources/examination-under-oath" className="text-blue-700 underline hover:text-blue-900">
          recorded statement or EUO
        </Link>.
      </p>
"""
    },
    {
        "slug": "policyholder-rights",
        "title": "Know Your Rights as a Policyholder",
        "description": "Your insurance company has obligations to you under the policy, state law, and regulations. Here are the rights most policyholders don't know they have.",
        "content": """
      <p className="text-gray-700 leading-relaxed mb-4">
        As an insurance policyholder, you have far more rights than most people realize. Your
        insurance policy is a contract, and the insurance company has specific obligations under
        that contract, under state regulations, and under common law. When they fail to meet
        those obligations, you have remedies.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Your Right to Choose Your Own Contractor</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        In most states, you have the right to hire your own contractor to perform repairs. The
        insurance company cannot force you to use their preferred vendor, and they cannot reduce
        your payment simply because you chose a different contractor. They owe you the reasonable
        cost of repair, regardless of who performs it.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Your Right to a Timely Response</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Every state has regulations requiring insurance companies to handle claims within specific
        timeframes. In California, the carrier must acknowledge, investigate, and accept or deny
        within prescribed periods. If they miss these deadlines, they may be in violation of
        state regulations &mdash; and you can{' '}
        <Link href="/resources/cdi-complaint" className="text-blue-700 underline hover:text-blue-900">
          file a complaint with the Department of Insurance
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Your Right to a Written Explanation</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the insurance company denies any part of your claim, they must provide a written
        explanation. This isn&apos;t optional &mdash; it&apos;s required by regulation. The denial
        must cite the specific policy provision, statute, or other basis for the denial.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Your Right to Dispute the Amount</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurance company&apos;s estimate is not the final word. You have the right to submit
        your own estimate, contractor bids, or other documentation to support a higher amount.
        If you can&apos;t agree on the amount, most policies include an{' '}
        <Link href="/resources/appraisal" className="text-blue-700 underline hover:text-blue-900">
          appraisal clause
        </Link>{' '}
        that provides a mechanism to resolve the dispute.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Your Right to Representation</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        You have the right to hire a{' '}
        <Link href="/resources/public-adjuster" className="text-blue-700 underline hover:text-blue-900">
          public adjuster
        </Link>{' '}
        or attorney to represent you in your claim. The insurance company cannot retaliate
        against you for hiring a representative, and they must communicate with your
        representative once you&apos;ve authorized them.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Your Right to Sue for Bad Faith</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the insurance company handles your claim in bad faith &mdash; unreasonably delaying,
        denying without basis, lowballing, or otherwise failing to act in good faith &mdash; you
        may have a cause of action for{' '}
        <Link href="/resources/bad-faith" className="text-blue-700 underline hover:text-blue-900">
          bad faith
        </Link>. In some states, bad faith damages can include emotional distress
        and even punitive damages.
      </p>

      <CalloutBox title="Knowledge Is Power">
        <p>
          Insurance companies count on the fact that most policyholders don&apos;t know their
          rights. When you demonstrate knowledge of your rights &mdash; by citing regulations,
          requesting written denials, and holding the carrier to deadlines &mdash; the dynamic
          changes. Claims move faster and settlements increase when the carrier knows they&apos;re
          dealing with an informed policyholder.
        </p>
      </CalloutBox>
"""
    },
    {
        "slug": "clue-database",
        "title": "The CLUE Database: How Your Claims History Follows You",
        "description": "What the CLUE database is, how insurance companies use it against you, and what to do if it contains errors about your claims history.",
        "content": """
      <p className="text-gray-700 leading-relaxed mb-4">
        Every time you file an insurance claim, it gets reported to a database called CLUE &mdash;
        the Comprehensive Loss Underwriting Exchange, operated by LexisNexis. This database
        follows you and your property, and it affects your ability to get insurance and what
        you pay for it.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">What CLUE Contains</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        CLUE reports include up to seven years of claims history associated with you personally
        and with any property you&apos;ve insured. This includes claims you filed, claims filed
        against your property by previous owners, and even inquiries that didn&apos;t result in
        a claim.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">How Carriers Use CLUE Against You</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance companies use CLUE during underwriting to decide whether to offer you a policy
        and at what price. A history of claims &mdash; even legitimate ones &mdash; can result in
        higher premiums, policy non-renewal, or outright denial of coverage.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        There have been documented cases of carriers reporting inaccurate information to CLUE.
        In one lawsuit, Farmers Insurance was accused of reporting litigation expenses, settlement
        costs, and other carrier expenses as payments made to the policyholder &mdash; making it
        appear that the homeowner received millions when they actually received a fraction of that
        amount. This inflated CLUE report made it nearly impossible for those policyholders to
        obtain new insurance.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Check Your CLUE Report</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        You have the right to request a free copy of your CLUE report once per year from
        LexisNexis. Review it carefully for errors. If you find inaccurate information, you
        can dispute it directly with LexisNexis, similar to disputing errors on a credit report.
      </p>

      <CalloutBox title="Before You File a Small Claim">
        <p>
          Think carefully before filing small claims. A $1,500 claim might cost you far more
          in increased premiums and CLUE history than the payout is worth. This doesn&apos;t
          mean you shouldn&apos;t file legitimate claims &mdash; but be aware that every claim
          leaves a record that follows you for seven years.
        </p>
      </CalloutBox>
"""
    },
    {
        "slug": "coinsurance-penalty",
        "title": "Coinsurance Penalties: When Being Underinsured Costs You Extra",
        "description": "What coinsurance is, how the penalty works, and why it usually doesn't apply to total losses — even though some adjusters apply it anyway.",
        "content": """
      <p className="text-gray-700 leading-relaxed mb-4">
        Coinsurance is a provision in some insurance policies &mdash; particularly commercial
        policies &mdash; that penalizes you if your coverage limits are too low relative to
        the value of your property. If a coinsurance penalty applies, you won&apos;t receive
        full payment even for a covered loss.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">How the Coinsurance Penalty Works</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A typical coinsurance clause requires you to insure your property for at least 80% of
        its replacement cost. If you don&apos;t, the penalty kicks in proportionally. The formula
        is: (Amount of Insurance Carried &divide; Amount Required) &times; Loss = Payment.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For example, if your building is worth $1,000,000, the 80% coinsurance requirement is
        $800,000. If you only carry $600,000 in coverage and have a $200,000 loss, you&apos;d
        receive: ($600,000 &divide; $800,000) &times; $200,000 = $150,000 &mdash; a $50,000
        penalty for being underinsured.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Total Losses and Coinsurance</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here&apos;s something important that even some adjusters get wrong: if the property is a
        true total loss, there is no coinsurance penalty. It&apos;s simply how the math works.
        If the loss equals or exceeds the coverage limit, the formula always produces the
        full policy limit &mdash; the penalty disappears.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        I&apos;ve seen carriers order real estate appraisals on total-loss commercial properties
        specifically to check for coinsurance penalties. This is a waste of time and money &mdash;
        if it&apos;s truly a total loss, the math makes the penalty irrelevant.
      </p>

      <CalloutBox title="Check Your Coverage Limits">
        <p>
          If you own commercial property, review your coverage limits annually to make sure they
          keep pace with rising construction costs. Being 10% underinsured might not seem like
          a big deal until a partial loss triggers a coinsurance penalty that costs you tens of
          thousands of dollars.
        </p>
      </CalloutBox>
"""
    },
    {
        "slug": "temporary-emergency-repairs",
        "title": "Emergency Repairs: Your Duty to Protect Your Property",
        "description": "Your policy requires you to prevent further damage after a loss. Learn what emergency repairs are covered, how to document them, and what mistakes to avoid.",
        "content": """
      <p className="text-gray-700 leading-relaxed mb-4">
        After a loss, your policy requires you to take reasonable steps to protect your property
        from further damage. This is your &quot;duty to mitigate.&quot; The good news: your
        policy also pays for these emergency repairs.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">What&apos;s Covered</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Board-up and tarping after fire, wind, or break-in</li>
        <li>Water extraction and emergency drying after a water loss</li>
        <li>Emergency plumbing to stop active leaks</li>
        <li>Tree removal if a fallen tree is causing ongoing damage</li>
        <li>Temporary fencing for security</li>
        <li>Emergency electrical work to prevent fire hazards</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Critical Rules</h2>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Document before you mitigate.</strong> Take photos and video of the damage
          before any cleanup or temporary repairs begin.
        </li>
        <li>
          <strong>Keep all receipts.</strong> Every dollar you spend on emergency repairs
          should be documented and submitted to the carrier.
        </li>
        <li>
          <strong>Don&apos;t make permanent repairs</strong> until the adjuster has inspected.
          Emergency repairs protect the property; permanent repairs wait for the claim process.
        </li>
        <li>
          <strong>Don&apos;t throw away damaged materials</strong> until the adjuster has seen
          them or you have thorough documentation.
        </li>
      </ol>

      <CalloutBox title="Don't Wait for the Adjuster">
        <p>
          You do not need to wait for the insurance company&apos;s adjuster before making
          emergency repairs. In fact, waiting could be used against you &mdash; if additional
          damage occurs because you didn&apos;t act, the carrier may deny coverage for that
          additional damage. Act promptly, document thoroughly, and submit your receipts.
        </p>
      </CalloutBox>
"""
    },
    {
        "slug": "loss-of-use-maximizing",
        "title": "Maximizing Your Loss of Use (ALE) Claim",
        "description": "Coverage D pays your additional living expenses when you can't live in your home. Most policyholders leave thousands on the table. Here's how to claim what you're owed.",
        "content": """
      <p className="text-gray-700 leading-relaxed mb-4">
        Coverage D &mdash; Loss of Use or Additional Living Expenses (ALE) &mdash; is one
        of the most underutilized coverages in a homeowner&apos;s policy. When a covered loss
        makes your home uninhabitable, the insurance company pays for your additional living
        expenses until repairs are complete.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The key word is &quot;additional.&quot; ALE covers the difference between your normal
        living expenses and what you&apos;re spending because you&apos;re displaced. If you
        normally spend $500 per month on groceries and you&apos;re now spending $800 because
        you&apos;re eating at restaurants, the carrier owes you the $300 difference.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">What ALE Covers</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Hotel or temporary rental housing</li>
        <li>Restaurant meals (above your normal food budget)</li>
        <li>Laundry and dry cleaning (if you don&apos;t have access to your washer/dryer)</li>
        <li>Storage for your belongings</li>
        <li>Pet boarding if your temporary housing doesn&apos;t allow pets</li>
        <li>Extra mileage and gas from a longer commute</li>
        <li>Temporary kitchen setup or appliance rental</li>
        <li>Moving costs to and from temporary housing</li>
        <li>Utility connections at temporary housing</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Common Mistakes</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Not claiming ALE at all</strong> &mdash; many homeowners stay with family or
          squeeze into part of a damaged home without claiming any expenses
        </li>
        <li>
          <strong>Minimizing expenses</strong> &mdash; you&apos;re entitled to maintain your
          normal standard of living, not live like a monk to save the carrier money
        </li>
        <li>
          <strong>Not keeping receipts</strong> &mdash; save every receipt for meals, gas,
          laundry, and incidentals
        </li>
        <li>
          <strong>Accepting the carrier&apos;s ALE timeline</strong> &mdash; ALE should last
          until repairs are actually complete, not until the carrier decides they should be
        </li>
      </ul>

      <CalloutBox title="You Deserve Normal Living">
        <p>
          The purpose of ALE is to make you whole &mdash; to put you back in the position
          you were in before the loss. If you were living in a four-bedroom house, you&apos;re
          entitled to comparable temporary housing. Don&apos;t let the carrier put you in a
          cramped studio apartment and call it adequate.
        </p>
      </CalloutBox>
"""
    },
    {
        "slug": "when-to-hire-attorney",
        "title": "When to Hire an Insurance Claim Attorney",
        "description": "Not every claim needs a lawyer — but some absolutely do. Learn when legal help is essential, how to find the right attorney, and how attorney fees work.",
        "content": """
      <p className="text-gray-700 leading-relaxed mb-4">
        Not every insurance claim needs an attorney. Many disputes can be resolved through
        negotiation, supplementation, or the{' '}
        <Link href="/resources/appraisal" className="text-blue-700 underline hover:text-blue-900">
          appraisal process
        </Link>. But some situations absolutely
        require legal help. Knowing the difference can save you time, money, and a lot of
        frustration.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">When You Need an Attorney</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>The carrier denied your claim entirely</strong> and you believe it should
          be covered
        </li>
        <li>
          <strong>The carrier is acting in bad faith</strong> &mdash; unreasonable delays,
          lowball offers with no basis, refusing to communicate
        </li>
        <li>
          <strong>The carrier requested an Examination Under Oath (EUO)</strong> &mdash; you
          should have legal representation for this
        </li>
        <li>
          <strong>The statute of limitations is approaching</strong> and the claim isn&apos;t resolved
        </li>
        <li>
          <strong>The claim involves serious bodily injury</strong> or liability issues
        </li>
        <li>
          <strong>The dollar amount is large</strong> and the carrier refuses to negotiate
          reasonably
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Attorney vs. Public Adjuster</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Public adjusters and attorneys serve different but complementary roles. A{' '}
        <Link href="/resources/public-adjuster" className="text-blue-700 underline hover:text-blue-900">
          public adjuster
        </Link>{' '}
        handles the claim process itself &mdash; documenting damage, preparing estimates,
        negotiating with the carrier. An attorney handles the legal dimension &mdash; coverage
        disputes, bad faith claims, and litigation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many claims are best served by a PA first. If the PA can&apos;t resolve the dispute,
        an attorney steps in. Some situations need both from the start. A good PA will tell
        you when it&apos;s time to bring in an attorney.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Understanding Bad Faith vs. Breach of Contract</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        People throw around the term &quot;bad faith&quot; loosely, but it has a specific legal
        meaning. Most cases where the insured wins against the carrier are actually breach of
        contract cases &mdash; the carrier simply didn&apos;t pay what the policy required. Bad
        faith is a separate, harder claim that requires showing the carrier acted unreasonably
        and without proper cause.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Having an appraisal award that is significantly higher than the carrier&apos;s last
        offer can strengthen both claims &mdash; it proves the carrier was underpaying and
        provides a clear damage amount.
      </p>

      <CalloutBox title="How Attorney Fees Work">
        <p>
          Most insurance claim attorneys work on contingency &mdash; they only get paid if you
          recover money. Typical contingency fees range from 33% to 40%. Some attorneys will
          reduce their fee if a public adjuster is already involved and has done significant
          work on the claim. Always discuss fees upfront and get the agreement in writing.
        </p>
      </CalloutBox>
"""
    },
    {
        "slug": "california-claim-deadlines",
        "title": "California Insurance Claim Deadlines and Timeframes",
        "description": "Every deadline your California insurance company must meet — from acknowledging your claim to paying it. Know the rules so you can hold them accountable.",
        "content": """
      <p className="text-gray-700 leading-relaxed mb-4">
        California has among the most detailed claim handling regulations in the nation. The
        Fair Claims Settlement Practices Regulations (Title 10, California Code of Regulations,
        Section 2695) establish specific deadlines that insurance companies must follow. Knowing
        these deadlines gives you the power to hold your carrier accountable.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">The Key Deadlines</h2>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>15 days</strong> &mdash; The carrier must acknowledge receipt of your claim
          and begin investigation
        </li>
        <li>
          <strong>40 days</strong> &mdash; After receiving a proof of claim, the carrier must
          accept or deny the claim (or inform you of the need for additional time and the
          reasons why)
        </li>
        <li>
          <strong>30 days</strong> &mdash; After reaching agreement on the amount, the carrier
          must issue payment
        </li>
        <li>
          <strong>30 days</strong> &mdash; The carrier must provide written status updates at
          least every 30 days while the claim is open
        </li>
        <li>
          <strong>15 days</strong> &mdash; The carrier must respond to communications from the
          insured that reasonably suggest a response is expected
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Statute of Limitations</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California is unusual in several ways when it comes to the statute of limitations on
        insurance claims. The standard policy requires suit to be filed within one year of the
        loss. However, in California the statute of limitations is tolled (paused) during the
        period the insurance company is investigating. This means the clock is paused while
        the carrier is actively handling your claim.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The carrier is required to inform an insured who is not represented by an attorney of
        their applicable statute of limitations. This is an additional protection unique to
        California that many adjusters forget about. For more on this topic, see our guide on{' '}
        <Link href="/resources/equitable-tolling" className="text-blue-700 underline hover:text-blue-900">
          equitable tolling
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">What Happens When They Miss Deadlines</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Violating the Fair Claims Settlement Practices Regulations can result in:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Department of Insurance complaints and potential fines</li>
        <li>Evidence of bad faith if litigation follows</li>
        <li>Potential penalty damages in a bad faith lawsuit</li>
      </ul>

      <CalloutBox title="Track Every Deadline">
        <p>
          Start a spreadsheet or log from day one. Record when you filed the claim, when the
          carrier acknowledged it, when proof of claim was submitted, and when every
          communication occurred. If a deadline passes without action, send a written reminder
          citing the specific regulation. This paper trail is invaluable if the claim goes to
          litigation.
        </p>
      </CalloutBox>
"""
    },
    {
        "slug": "hail-damage-claims",
        "title": "Hail Damage Insurance Claims",
        "description": "How to handle a hail damage claim — from documenting the damage to fighting for matching and full replacement when the carrier wants to patch.",
        "content": """
      <p className="text-gray-700 leading-relaxed mb-4">
        Hail damage is one of the most common property insurance claims in the United States,
        particularly for roofing. A single hailstorm can damage thousands of properties in a
        region, and insurance companies handle these claims with an assembly-line efficiency
        that often shortchanges individual homeowners.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Documenting Hail Damage</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Hail damage to roofing can be subtle. It may not cause an obvious leak immediately,
        but it compromises the shingle&apos;s integrity and dramatically shortens its useful
        life. Documentation is critical:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Get a professional roof inspection from a qualified roofer &mdash; not just a visual from the ground</li>
        <li>Document damage to soft metals (gutters, vents, flashing) which confirm hail impact</li>
        <li>Check all exterior surfaces: siding, window screens, AC units, fences</li>
        <li>Photograph damage to vehicles or outdoor furniture as corroborating evidence</li>
        <li>Note the date of the storm and check weather records for hail size reports</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">The Matching Fight</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        One of the biggest disputes in hail claims is{' '}
        <Link href="/resources/matching" className="text-blue-700 underline hover:text-blue-900">
          matching
        </Link>. If hail damages one slope of your roof, the carrier may only want to replace
        that slope. But the new shingles won&apos;t match the weathered existing shingles on
        the other slopes. You end up with a two-tone roof.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Before the loss, you had a uniform roof. After the loss, you deserve a uniform roof.
        Many states and fair claims regulations support the requirement to achieve a
        &quot;reasonably uniform appearance&quot; after repairs.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Don&apos;t Forget Other Structures</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Hail doesn&apos;t just hit roofs. Check and document damage to{' '}
        <Link href="/resources/debris-removal" className="text-blue-700 underline hover:text-blue-900">
          other structures
        </Link>: fences, sheds, detached garages, outdoor lighting, garden features,
        and landscaping. These are covered under Coverage B.
      </p>

      <CalloutBox title="Beware the Quick Settlement">
        <p>
          After major hailstorms, some carriers deploy adjusters en masse with instructions
          to close claims quickly. A fast inspection and a quick check may seem helpful, but
          it often means damage is missed. Don&apos;t sign a &quot;full and final&quot;
          settlement until you&apos;ve had the damage independently assessed.
        </p>
      </CalloutBox>
"""
    },
    {
        "slug": "wind-damage-claims",
        "title": "Wind Damage Insurance Claims",
        "description": "How wind damage claims work, what's covered, disputes over wind vs. wear-and-tear, and how to document and fight for your full settlement.",
        "content": """
      <p className="text-gray-700 leading-relaxed mb-4">
        Wind damage claims present unique challenges because wind damage can be difficult to
        distinguish from wear and tear, and insurance companies exploit that ambiguity. A roof
        that loses shingles in a storm may have been perfectly functional before the event, but
        the carrier may argue the shingles were old, worn, and &quot;ready to go.&quot;
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">What Wind Damage Looks Like</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Missing or lifted shingles and tiles</li>
        <li>Damaged or detached ridge caps</li>
        <li>Torn or displaced flashing</li>
        <li>Broken or cracked siding</li>
        <li>Damaged soffit and fascia</li>
        <li>Fallen trees and branches impacting structures</li>
        <li>Blown-off gutters and downspouts</li>
        <li>Broken windows from wind-driven debris</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Wind vs. Wear and Tear</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The most common dispute in wind damage claims is whether the damage was caused by wind
        (covered) or pre-existing wear and tear (excluded). Carriers frequently use the age of
        the roof to argue that any damage is wear-related, even when a documented windstorm
        clearly caused the failure.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The key is causation: did the wind cause the damage? If a 15-year-old roof was
        functioning perfectly before the storm and is now missing shingles, the wind caused
        the damage. The age of the roof is relevant to depreciation, not to causation.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Documenting Wind Damage</h2>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>Photograph all visible damage immediately after the storm</li>
        <li>Check weather records for official wind speed reports in your area</li>
        <li>Note damage to neighboring properties as corroborating evidence</li>
        <li>Get a professional inspection from a licensed roofing contractor</li>
        <li>Document any interior water damage that resulted from the wind damage</li>
        <li>Check Coverage B structures: fences, sheds, detached garages</li>
      </ol>

      <CalloutBox title="The Concurrent Causation Issue">
        <p>
          Some carriers argue that wind damage combined with pre-existing wear creates a
          &quot;concurrent causation&quot; situation and use anti-concurrent causation clauses
          to limit or deny the claim. This is an area of active litigation in many states.
          If your carrier raises this argument, consult with a public adjuster or attorney
          who understands the case law in your state.
        </p>
      </CalloutBox>
"""
    },
    {
        "slug": "choosing-your-contractor",
        "title": "Choosing Your Own Contractor vs. the Insurance Company's",
        "description": "You have the right to choose your own contractor in most states. Here's why it matters, what to look for, and how to handle the carrier's pushback.",
        "content": """
      <p className="text-gray-700 leading-relaxed mb-4">
        One of the most important rights you have as a policyholder is the right to choose
        your own contractor. Insurance companies will often try to steer you toward their
        preferred vendor or managed repair program. Understanding why they do this &mdash; and
        why your own choice usually serves you better &mdash; is critical.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Why Carriers Push Their Contractors</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Volume discounts</strong> &mdash; carrier contractors often buy materials
          through special accounts at reduced prices
        </li>
        <li>
          <strong>Lower labor rates</strong> &mdash; these contractors accept lower rates in
          exchange for steady volume from the carrier
        </li>
        <li>
          <strong>Scope control</strong> &mdash; the carrier controls what work gets done and
          what doesn&apos;t
        </li>
        <li>
          <strong>Faster closures</strong> &mdash; preferred vendors are incentivized to close
          claims quickly
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">What to Look for in Your Contractor</h2>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>Valid state contractor&apos;s license for the type of work needed</li>
        <li>Workers&apos; compensation and liability insurance</li>
        <li>References from recent similar projects</li>
        <li>A detailed written estimate and contract</li>
        <li>Willingness to work with the insurance claim process</li>
        <li>Experience with insurance restoration work</li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">When the Carrier Pushes Back</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the insurance company says your contractor&apos;s estimate is too high, they owe
        you a specific explanation of which line items they disagree with and why. A blanket
        &quot;your estimate is too high&quot; is not an adequate response. Demand a line-by-line
        comparison of their estimate against your contractor&apos;s, and dispute each item
        individually.
      </p>

      <CalloutBox title="Your Contractor Works for You">
        <p>
          The fundamental difference: your contractor&apos;s loyalty is to you. The carrier&apos;s
          contractor&apos;s loyalty is to the company that sends them work. When there&apos;s a
          question about whether something needs to be replaced or can be patched, guess which
          direction each contractor leans. Choose someone whose incentives align with yours.
        </p>
      </CalloutBox>
"""
    },
    {
        "slug": "recorded-statements-siu",
        "title": "Recorded Statements and SIU Investigations",
        "description": "What to expect when your insurance company requests a recorded statement or refers your claim to their Special Investigation Unit — and how to protect yourself.",
        "content": """
      <p className="text-gray-700 leading-relaxed mb-4">
        If your insurance company requests a recorded statement or your claim is referred to
        the Special Investigation Unit (SIU), it&apos;s natural to feel alarmed. But
        understanding the process and your rights can make a significant difference in the
        outcome.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Recorded Statements</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A recorded statement is exactly what it sounds like &mdash; the insurance company asks
        you questions about your claim while recording your answers. While you generally have
        a duty to cooperate with the carrier&apos;s investigation, the scope of that cooperation
        varies by state.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Be careful with recorded statements. Adjusters are trained to ask questions that can
        be used against you later. Seemingly innocent questions about your daily routine, your
        maintenance history, or when you first noticed damage can become ammunition for a denial.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">SIU Referrals</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        SIU is the carrier&apos;s fraud investigation unit. Not every SIU referral means they
        suspect fraud. Many are triggered automatically by dollar thresholds, claim patterns,
        or simply because the adjuster flagged something they didn&apos;t understand.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your claim is referred to SIU, the investigation will typically involve a more
        detailed review of your claim, your claims history, and potentially a recorded statement
        or{' '}
        <Link href="/resources/examination-under-oath" className="text-blue-700 underline hover:text-blue-900">
          Examination Under Oath
        </Link>{' '}
        (EUO). The carrier may also conduct surveillance or background checks.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Protecting Yourself</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Cooperate, but know your limits</strong> &mdash; you must cooperate with
          reasonable investigation requests, but you have rights
        </li>
        <li>
          <strong>Consider hiring an attorney</strong> before any recorded statement or EUO
        </li>
        <li>
          <strong>Don&apos;t volunteer information</strong> beyond what&apos;s asked
        </li>
        <li>
          <strong>Be truthful</strong> &mdash; any misstatement can be used as grounds
          for denial
        </li>
        <li>
          <strong>Ask for questions in advance</strong> when possible, so you can prepare
          thoughtful, accurate answers
        </li>
      </ul>

      <CalloutBox title="SIU vs. Cooperating with Your PA">
        <p>
          As a public adjuster, if the carrier wants to do a recorded interview with my client
          through SIU, I cooperate &mdash; because the alternative of an Examination Under Oath
          is worse. An EUO takes longer, is more adversarial, involves defense attorneys, and
          costs the insured time and stress. A cooperative SIU interview often resolves the
          carrier&apos;s concerns and keeps the claim moving.
        </p>
      </CalloutBox>
"""
    },
    {
        "slug": "claim-negotiation-letters",
        "title": "How to Write an Effective Insurance Claim Letter",
        "description": "Your written communications with the insurance company become the record of your claim. Learn how to write letters that protect your rights and move your claim forward.",
        "content": """
      <p className="text-gray-700 leading-relaxed mb-4">
        Written communication is the backbone of any insurance claim. Phone calls are easily
        denied or misremembered. Emails and letters create a permanent record. Every important
        communication with your insurance company should be in writing or followed up in writing.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Types of Letters You May Need</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Initial claim notification</strong> &mdash; reporting the loss in writing</li>
        <li><strong>Follow-up confirmation</strong> &mdash; &quot;Per our phone call today...&quot;</li>
        <li><strong>Supplement request</strong> &mdash; documenting additional damage found</li>
        <li><strong>Demand for payment</strong> &mdash; when the carrier has agreed but hasn&apos;t paid</li>
        <li><strong>Regulatory deadline reminder</strong> &mdash; citing specific timeframes</li>
        <li><strong>Response to denial</strong> &mdash; challenging a coverage or amount determination</li>
        <li><strong>Appraisal demand</strong> &mdash; invoking the appraisal clause</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Key Principles</h2>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Be specific.</strong> Reference claim numbers, dates, adjuster names, and
          specific dollar amounts.
        </li>
        <li>
          <strong>Be factual.</strong> State what happened, what was said, and what the
          regulation requires. Avoid emotional language.
        </li>
        <li>
          <strong>Cite authority.</strong> Reference specific policy provisions, state
          regulations, or case law when applicable.
        </li>
        <li>
          <strong>Request specific action.</strong> Don&apos;t just complain &mdash; state
          exactly what you want the carrier to do and by when.
        </li>
        <li>
          <strong>Send via traceable method.</strong> Email with read receipt, certified mail,
          or both.
        </li>
      </ol>

      <CalloutBox title="The Paper Trail Is Everything">
        <p>
          If your claim eventually goes to{' '}
          <Link href="/resources/appraisal" className="text-blue-700 underline hover:text-blue-900">
            appraisal
          </Link>{' '}
          or litigation, the paper trail you built becomes your evidence. Every letter
          documenting a missed deadline, every email confirming what the adjuster said, every
          written request that went unanswered &mdash; these build the case for{' '}
          <Link href="/resources/bad-faith" className="text-blue-700 underline hover:text-blue-900">
            bad faith
          </Link>{' '}
          if it comes to that. Write as if a judge will read it someday.
        </p>
      </CalloutBox>
"""
    },
]

# Generate each article file
for article in articles:
    slug = article["slug"]
    title = article["title"]
    desc = article["description"]
    content = article["content"]

    tsx = f"""import Link from 'next/link'
import {{ CalloutBox }} from '@/components/content/CalloutBox'

export const meta = {{
  title: '{title.replace("'", "\\'")}',
  description:
    '{desc.replace("'", "\\'")}',
}}

export default function Content() {{
  return (
    <>{content}
    </>
  )
}}
"""
    filepath = os.path.join(ARTICLES_DIR, f"{slug}.tsx")
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(tsx)
    print(f"Created: {slug}.tsx")

print(f"\nDone! Created {len(articles)} article files.")
