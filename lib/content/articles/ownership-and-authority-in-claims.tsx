import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: "Ownership and Authority in Non-Standard Claim Situations",
  description:
    "When title is non-standard - Medi-Cal, life estate, probate, inherited - the claim gets harder. Insurance-side rules and estate questions to route to counsel.",
  summary:
    'When ownership is non-standard (Medi-Cal recipient on title, life estate, probate-pending, inherited property), insurable interest splits, authority over the claim shifts, and coverage defenses multiply. This article covers the insurance-side rules and points out where elder-law and probate questions belong to an attorney.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most insurance claims follow a familiar template. The owner of the home is the same
        person whose name is on the policy. That person is alive, mentally competent, and
        physically present at the property. When a covered loss occurs, the named insured calls
        the carrier, files the claim, signs the proof of loss, negotiates the settlement, and
        deposits the check. The questions of who owns the property, who has authority to act,
        and who is entitled to receive the proceeds are all answered the same way: the named
        insured.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Real life is rarely this tidy. The homeowner may be elderly and in a nursing home, with
        long-term care paid by Medi-Cal. The property may be held through a life estate, with
        the homeowner retaining the right to live there while remainder beneficiaries hold the
        future interest. The owner may have died, leaving the property in probate while the
        executor tries to settle a pending claim. Or the property may have been inherited
        recently, with the new owner inheriting an existing policy, an in-progress claim, and a
        web of disclosure obligations they did not create.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Each of these situations layers extra coverage defenses on top of the standard claim.
        This article walks through them one situation at a time, focused on what the insurance
        carrier will do, what authority the family needs to deal with the carrier, and who is
        entitled to receive the proceeds.
      </p>

      <CalloutBox variant="legal" title="Scope of This Article">
        <p>
          This article covers the <strong>insurance-claim side</strong> of non-standard
          ownership situations. The author is a California Licensed Public Adjuster, not an
          attorney. Where these situations cross into Medi-Cal estate recovery, asset
          protection planning, life-tenant-versus-remainderman disputes, executor fiduciary
          duties, or trust administration, this article flags the issue and tells you what
          kind of attorney handles it &mdash; without giving a legal opinion on the substantive
          law in those areas.
        </p>
        <p className="mt-2">
          If your situation involves any of those adjacent legal issues, retain a California
          attorney in the relevant field <em>before</em> any insurance proceeds are disbursed.
          Insurance money that lands in the wrong account or pays the wrong party at the wrong
          time can create problems that are difficult or impossible to reverse.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Two Questions That Run Through Every Non-Standard Claim
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Before working through the individual situations, it helps to understand the two
        questions that run through all of them, because the answers govern almost every
        coverage dispute that arises out of non-standard ownership.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Question 1: Who Has Insurable Interest, and How Much?
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under California Insurance Code &sect; 281, a person has an insurable interest in
        property if they would suffer a pecuniary (financial) loss from its destruction.
        Insurable interest is not the same as legal title. A surviving spouse who inherited the
        home has an insurable interest. A successor trustee managing trust property has an
        insurable interest. A life tenant who has the right to live in the property for life
        has an insurable interest &mdash; though it may be limited to the actuarial value of
        their life estate, not the full value of the property.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For more on the doctrine, see our article on{' '}
        <Link href="/resources/insurable-interest" className="text-[#2E74B5] hover:underline">
          insurable interest
        </Link>
        . The recurring theme: insurers in non-standard claims often argue that the named
        insured&rsquo;s insurable interest is something <em>less</em> than the full property
        value, and use that argument to pay less than the actual loss.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Question 2: Who Has Authority to File, Adjust, and Settle?
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When the named insured is unavailable &mdash; in a nursing home, deceased, mentally
        incapacitated, or simply not the actual owner anymore &mdash; the question of who has
        legal authority to interact with the insurance company becomes critical. The answer
        depends on the document trail: a power of attorney, a trust, Letters Testamentary, a
        small estate affidavit, a court-appointed conservator, or some combination. Authority
        is not interchangeable; each source has its own scope and limits, and the insurer is
        entitled to verify it before treating the claimant as someone who can speak for the
        named insured.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For situations where the policyholder dies before or during a claim, see our article on{' '}
        <Link href="/resources/policyholder-death-coverage" className="text-[#2E74B5] hover:underline">
          what happens to insurance when the policyholder dies
        </Link>
        . For situations where the homeowner is alive but cannot manage their own affairs, see{' '}
        <Link href="/resources/power-of-attorney-insurance-claims" className="text-[#2E74B5] hover:underline">
          power of attorney in insurance claims
        </Link>
        .
      </p>

      {/* ═══════════════════════════════════════════════════════════════════════ */}
      {/* PART 1: MEDI-CAL ESTATE RECOVERY */}
      {/* ═══════════════════════════════════════════════════════════════════════ */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Part 1: When the Policyholder Has Received Medi-Cal
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the named insured received Medi-Cal during their lifetime &mdash; typically for
        long-term nursing-home care &mdash; the California Department of Health Care Services
        (DHCS) may have a claim against the estate after death. That claim can sometimes reach
        insurance proceeds that flow into the estate. The rules around what assets DHCS can
        reach are technical, have changed materially in recent years (most notably with SB 833
        in 2017 and the asset-test reinstatement effective January 1, 2026), and depend on
        facts unique to the policyholder&rsquo;s Medi-Cal history.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Those questions are elder-law questions, not insurance questions. They get answered by
        a California elder-law attorney working with the family, the executor, and DHCS &mdash;
        not by the insurance carrier or by the Public Adjuster.
      </p>

      <CalloutBox variant="warning" title="Talk to an Elder-Law Attorney Before Disbursing Proceeds">
        <p>
          Before any insurance check payable to the estate of a deceased Medi-Cal recipient is
          deposited or distributed, the executor or successor trustee should speak with a
          California elder-law attorney. The rules for what DHCS can recover from an estate
          changed under SB 833 (effective for deaths on or after January 1, 2017) and have
          continued to evolve. Disbursing proceeds without addressing any DHCS claim first can
          create personal liability for the executor and complications that are difficult to
          undo.
        </p>
        <p className="mt-2">
          <strong>How to find one:</strong> the California chapter of the National Academy of
          Elder Law Attorneys (NAELA-CA), or a State Bar Certified Specialist in Estate
          Planning, Trust &amp; Probate Law.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        What Matters on the Insurance Side
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurance carrier is not in a position to advise on Medi-Cal estate recovery and
        will not pause a claim for it. The insurance-side questions are mechanical and need to
        be sorted regardless of what the elder-law attorney advises about the estate claim:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Who is the named insured at the time of loss?</strong> A Medi-Cal recipient
          who transferred the property into a trust or to a child years before the loss may no
          longer match the named insured on the policy. That mismatch is a coverage defense
          the carrier will raise. See{' '}
          <Link href="/resources/named-insured-vs-an-insured" className="text-[#2E74B5] hover:underline">
            named insured vs. an insured
          </Link>
          .
        </li>
        <li>
          <strong>Did the loss occur before or after the policyholder&rsquo;s death?</strong>
          {' '}This determines whether the claim belongs to the living named insured, to the
          surviving spouse (in community-property scenarios), or to the estate. The 30-day
          death clause in most policies starts running at death; coverage on probate-pending
          property is not automatic. See{' '}
          <Link href="/resources/policyholder-death-coverage" className="text-[#2E74B5] hover:underline">
            policyholder death coverage
          </Link>
          .
        </li>
        <li>
          <strong>Who is entitled to receive the check?</strong> The insurer will issue payment
          to the named insured, the named insured&rsquo;s estate, any joint payees (spouse,
          mortgagee), and any other parties with a documented interest. If the elder-law
          attorney has a hold on disbursement pending DHCS resolution, the check should be
          deposited into a trust or attorney-controlled account rather than distributed to
          heirs.
        </li>
        <li>
          <strong>Is there a mortgage with a force-placed insurance policy in effect?</strong>
          {' '}Many elderly policyholders let their own policy lapse during a long nursing-home
          stay and end up under the lender&rsquo;s force-placed policy, which typically covers
          the lender&rsquo;s interest only &mdash; not the homeowner&rsquo;s equity. See{' '}
          <Link href="/resources/mortgage-company-insurance-claims" className="text-[#2E74B5] hover:underline">
            mortgage company insurance claims
          </Link>
          .
        </li>
        <li>
          <strong>Are the standard coverage defenses (vacancy, occupancy, residence-premises)
            triggered by the nursing-home placement?</strong> They often are. Most homeowner
          policies require the named insured to use the property as a residence. A long-term
          nursing-home stay can trigger the vacancy exclusion or undermine the residence-
          premises definition. See{' '}
          <Link href="/resources/where-you-reside-exclusion" className="text-[#2E74B5] hover:underline">
            the &ldquo;where you reside&rdquo; exclusion
          </Link>
          {' '}and{' '}
          <Link href="/resources/vacancy-unoccupancy" className="text-[#2E74B5] hover:underline">
            vacancy and unoccupancy
          </Link>
          .
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-6">
        Those are the questions an insurance claim handler and a Public Adjuster work through.
        The DHCS estate-recovery question runs in parallel and gets resolved by the elder-law
        attorney. Both pieces have to be coordinated; neither one waits on the other.
      </p>

      {/* ═══════════════════════════════════════════════════════════════════════ */}
      {/* PART 2: LIFE ESTATES AND REMAINDER INTERESTS */}
      {/* ═══════════════════════════════════════════════════════════════════════ */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Part 2: Life Estates and Remainder Interests
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A life estate is a property arrangement where one person (the life tenant) has the
        right to live in or use the property for the duration of their life, and other people
        (the remaindermen) hold the future ownership interest that vests when the life tenant
        dies. Life estates are common in California families &mdash; an elderly parent
        transfers the home to a child but retains the right to live there for life, or a will
        leaves the home to one child for life and to the grandchildren afterward.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The mechanics of creating, valuing, and litigating life estates &mdash; including the
        life tenant&rsquo;s common-law duties to remaindermen (waste, ordinary repairs,
        property taxes) and the remaindermen&rsquo;s rights against the life tenant &mdash;
        are real property law and trust/estate law questions. Those are handled by an estate
        planning or real property attorney. The insurance side is where this article focuses.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Split Insurable Interest
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When property is held in a life estate, two parties have an insurable interest at the
        same time: the life tenant (who has the present right to use the property) and the
        remaindermen (who have the future interest that becomes possessory at the life
        tenant&rsquo;s death). Either can insure the property; either has a recoverable
        interest in a loss. The amount each can recover, however, may be limited to the value
        of their respective interest unless both are named on the policy.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the core insurance problem: when only the life tenant is on the policy and the
        carrier limits the recovery to the actuarial value of the life estate, the payment can
        come in dramatically lower than the actual cost of repair or replacement. The same
        problem cuts the other way when only the remaindermen are named; the life
        tenant&rsquo;s loss of use and personal property exposure may not be covered.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Who Should Be the Named Insured
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The defensive structure for a life-estate property is to name <em>both</em> the life
        tenant and the remaindermen on the policy &mdash; either as co-named insureds or with
        the life tenant as named insured and the remaindermen as additional named insureds.
        That structure ensures both interests are insured to the full value of the property,
        not split actuarially. If your elderly parent has a life estate on the family home and
        the policy still names only the parent, talk to the insurance broker about restating
        the policy. Carriers handle this routinely once asked.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Whether your particular family situation supports adding remaindermen, how the
        remaindermen should be identified, and how to handle changes in the remainder class
        over time (births, deaths, divorces) are estate-planning questions for a California
        estate planning attorney. The insurance broker can implement whatever the attorney
        confirms is appropriate.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        When a Loss Occurs and Only One Party Is on the Policy
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the policy names only the life tenant and a loss occurs, expect the carrier to
        argue that recovery is limited to the actuarial value of the life estate, computed
        using IRS or carrier life-expectancy tables. A 75-year-old life tenant&rsquo;s
        actuarial interest in a $500,000 home may be quoted at $100,000 or less. The
        remaindermen, who hold the future interest worth the difference, are not on the policy
        and have no contractual right against the carrier &mdash; even though their interest is
        very real.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Two responses are typical. First, if the policy language actually supports full
        recovery on the life tenant&rsquo;s named-insured status (some policies do), push back
        on the actuarial argument. Second, even if it does not, the life tenant and the
        remaindermen may agree to coordinate the recovery &mdash; the life tenant collects, the
        proceeds are used to rebuild, and the rebuilt property continues subject to the
        original life estate. That is a family agreement, not an insurance entitlement, but
        when it works it solves the underpayment problem.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Disputes Between Life Tenant and Remaindermen Over Proceeds
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a loss is paid and there are competing demands for the money &mdash; the life
        tenant wants cash, the remaindermen want the property rebuilt &mdash; the carrier
        typically issues payment to both jointly or files an interpleader action and lets the
        court sort it out. The substantive question (what each party is entitled to) is a real
        property and trust/estate law question for a California attorney. The insurance
        carrier&rsquo;s role ends at issuing the check correctly.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Mortgage Considerations
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A mortgage on life-estate property adds a third interested party: the lender. The
        lender&rsquo;s mortgagee clause typically makes the lender a co-payee on any insurance
        loss, and the lender will control disbursement of proceeds for the repair. None of
        that changes because of the life estate, but the family should be aware that proceeds
        paid jointly to the lender, the life tenant, and the remaindermen require all three
        signatures to disburse. See{' '}
        <Link href="/resources/mortgage-company-insurance-claims" className="text-[#2E74B5] hover:underline">
          mortgage company insurance claims
        </Link>
        {' '}for the disbursement mechanics.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        How to Properly Insure Property with a Life Estate
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The defensive structure most California carriers will accept:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Name the life tenant as the primary named insured (the person residing at the
          property).
        </li>
        <li>
          Add the remaindermen as additional named insureds, identified by name.
        </li>
        <li>
          Insure the dwelling to full replacement cost &mdash; not to the actuarial value of
          the life estate.
        </li>
        <li>
          Keep the policy in the name of whichever party actually pays premiums and gets the
          renewal notices; do not let it lapse when the life tenant goes into a nursing home.
        </li>
        <li>
          If the loss involves multiple coverages (dwelling, personal property, loss of use,
          liability), confirm with the broker that each coverage runs in favor of the party who
          actually owns or uses the affected asset (the life tenant typically owns the personal
          property and has the loss-of-use exposure; the remaindermen own the dwelling
          interest).
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        If You Already Have a Claim
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If a loss has already occurred on life-estate property and the policy names only one
        party, do these things before negotiating with the carrier:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Pull the recorded life-estate deed (or the will or trust that created the life
          estate). The exact terms of the life estate matter.
        </li>
        <li>
          Identify every remainderman. Get them aligned on whether the goal is rebuild,
          cash-out, or sale.
        </li>
        <li>
          Talk to an estate planning or real property attorney about the
          life-tenant-vs.-remainderman issue before the carrier issues the check. Once the
          check is cashed, options narrow quickly.
        </li>
        <li>
          On the insurance negotiation side, document the full replacement cost and resist any
          carrier attempt to limit recovery to actuarial value without policy language clearly
          supporting that limit.
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Life Estate Takeaways
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Both the life tenant and the remaindermen have an insurable interest. Both should be
          on the policy.
        </li>
        <li>
          A policy that names only the life tenant invites the carrier to limit recovery to
          actuarial value &mdash; often a fraction of the actual loss.
        </li>
        <li>
          Disputes over proceeds are real property and trust/estate law disputes, not
          insurance disputes. The insurance carrier issues the check; the family and their
          attorneys resolve who is entitled to what.
        </li>
        <li>
          Get the insurance structure right while the policyholder is alive and competent. A
          family conversation with a broker and an estate attorney now is cheaper than an
          interpleader action later.
        </li>
      </ul>

      {/* ═══════════════════════════════════════════════════════════════════════ */}
      {/* PART 3: PROPERTIES IN PROBATE AND INSURING INHERITED REAL ESTATE */}
      {/* ═══════════════════════════════════════════════════════════════════════ */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Part 3: Properties in Probate and Insuring Inherited Real Estate
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a homeowner dies, the insurance situation can deteriorate quickly. Most
        homeowner policies contain a clause that limits or ends coverage a fixed number of
        days after the named insured&rsquo;s death (commonly 30 days). At the same time, the
        property usually sits empty for weeks or months while the estate is opened, the will
        is admitted to probate, and the executor takes control. That combination &mdash; the
        coverage clock running and the property unoccupied &mdash; is the most common source
        of catastrophic uninsured losses for grieving families.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The mechanics of probate &mdash; appointing a personal representative, posting bond,
        publishing notice to creditors, inventorying the estate, distributing assets &mdash;
        are governed by the California Probate Code and handled by a California probate
        attorney. The insurance-side mechanics covered below are what the family and the
        executor need to do regardless of where probate stands.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The 30-Day Death Clause: Coverage Is Already Disappearing
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Pull the policy and find the death-of-named-insured provision. Most California
        homeowner policies extend coverage for a period (commonly 30 days, sometimes longer)
        after the death of the named insured, then end coverage unless something is done to
        replace or restructure it. Some policies extend coverage on a limited basis (typically
        to the legal representative of the deceased) until the policy expires or is replaced.
        The exact language matters; do not assume what your policy says without reading it.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a deeper walk-through of the death-clause variations and what to do when the clock
        is running, see{' '}
        <Link href="/resources/policyholder-death-coverage" className="text-[#2E74B5] hover:underline">
          what happens to insurance when the policyholder dies
        </Link>
        .
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Why the Parent&rsquo;s Policy Does Not Automatically Transfer
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Children who inherit property frequently assume that the parent&rsquo;s existing
        homeowner policy carries over to them. It does not. An insurance policy is a personal
        contract between the named insured and the carrier; it does not transfer with the
        property the way a deed does. Even when the death clause extends coverage briefly,
        that extension typically runs to the legal representative of the estate &mdash; not to
        the heir who actually moves in or takes title.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The practical consequence: someone needs to own and pay for a policy that names the
        right party as insured, on a form suited to the actual use of the property, before the
        death clause runs out. That party is usually the executor (while the estate is open)
        and then the heir (once title transfers).
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Insurance Options for Property in Probate
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        While the estate is open, the executor has several options for keeping the property
        insured. Each has tradeoffs:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Continue the existing policy under the death clause</strong>, paying
          premiums from estate funds, until the policy expires or coverage ends by its terms.
          Cheapest in the short term; only works if the policy actually extends coverage to
          the executor and if the property is being used in a way the policy still covers
          (occupancy, residence-premises).
        </li>
        <li>
          <strong>Add the estate or executor as an additional named insured</strong> on the
          existing policy if the carrier will allow it. Some carriers do; some do not. The
          executor&rsquo;s broker can ask.
        </li>
        <li>
          <strong>Move to a dwelling-fire policy (DP-1, DP-2, or DP-3)</strong> designed for
          non-owner-occupied dwellings. This is the most common solution when the property
          will be vacant or rented during probate. The named insured becomes the estate or the
          executor in their representative capacity.
        </li>
        <li>
          <strong>Buy a vacant-dwelling policy</strong> if no one is living at the property
          and standard occupancy-based policies will not write the risk. These are typically
          more expensive and have narrower coverage, but they fill the gap when nothing else
          will write.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Whichever route the executor chooses, get the new policy bound <em>before</em> the
        death clause on the old policy runs out. A gap in coverage during probate is a common,
        avoidable, and frequently catastrophic mistake.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Vacancy and Unoccupancy Problem
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Even when coverage is technically in place, the policy&rsquo;s vacancy and occupancy
        conditions usually trigger after the home has been empty for 60 days. Some perils
        (vandalism, glass breakage) get excluded; some policies impose a flat percentage
        reduction on otherwise-covered losses. Many probate properties sit empty long enough
        to cross that threshold while the estate is still working through the will and the
        heirs are still figuring out what to do with the home.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        See{' '}
        <Link href="/resources/vacancy-unoccupancy" className="text-[#2E74B5] hover:underline">
          vacancy and unoccupancy
        </Link>
        {' '}for the form-by-form breakdown and the defensive moves (occupancy log,
        caretaker arrangements, vacant-property endorsements). The takeaway: if the property
        will be empty for more than a few weeks, address vacancy explicitly with the carrier
        or broker rather than hoping the standard policy holds.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Claims During Probate: Who Files and Who Gets the Proceeds
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a loss occurs on property in probate, the personal representative (executor or
        administrator) files and adjusts the claim on behalf of the estate. The insurer is
        entitled to verify that authority &mdash; usually with a copy of Letters Testamentary
        or Letters of Administration issued by the probate court. Until those letters issue,
        the family typically lacks formal authority to settle the claim; informal arrangements
        between heirs do not bind the carrier.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance proceeds become an asset of the estate, deposited into the estate&rsquo;s
        account and disbursed according to the will (or by intestate succession if there is
        no will). The executor controls disbursement; the heirs do not have direct rights
        against the carrier. Disputes over distribution are probate matters for the probate
        court, not insurance matters for the carrier.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Liability Exposure During Probate
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Liability coverage on probate property is the often-overlooked exposure. If a
        delivery driver slips on the front walk, a neighbor&rsquo;s child wanders into the
        unsecured backyard pool, or a contractor doing estate-ordered work is injured on the
        property, the resulting claim runs against whoever holds title and whoever controls
        the property &mdash; typically the estate and the executor in their representative
        capacity. Confirm that liability coverage is included on whatever policy is in force
        during probate, and that the limits are adequate for the property&rsquo;s risk
        profile.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Multiple Heirs: The Joint Ownership Problem
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When property passes to multiple heirs (three siblings inherit the family home, for
        example), each heir holds a partial ownership interest. From an insurance standpoint,
        the policy needs to name all heirs (or the LLC or trust they form to hold the
        property), and any claim settlement requires all heirs&rsquo; participation. From a
        practical standpoint, this is where families fight; the heir who wants to rebuild and
        the heir who wants to sell often cannot both have their way with the same insurance
        check.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        How the heirs hold title (tenants in common, joint tenants, through an LLC, through a
        trust) is a real property and estate planning question for an attorney. The insurance
        side just needs to name whatever entity actually holds the property and ensure all
        decision-makers are on the policy.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Pending Claims When the Policyholder Dies Mid-Process
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the policyholder dies in the middle of an open claim &mdash; after the loss but
        before settlement &mdash; the claim does not die with them. It becomes an asset of
        the estate and is pursued by the executor. The carrier should be notified of the
        death, the executor&rsquo;s authority should be documented, and the negotiation
        continues. Statute-of-limitations clocks generally keep running, though equitable
        tolling may apply in some probate-delay scenarios. See{' '}
        <Link href="/resources/equitable-tolling" className="text-[#2E74B5] hover:underline">
          equitable tolling
        </Link>
        {' '}for the framework.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Mortgage Complication: Force-Placed Insurance
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the deceased owner&rsquo;s policy lapses during probate and the property still has
        a mortgage, the lender will typically force-place its own insurance. Force-placed
        policies cover the lender&rsquo;s interest only &mdash; not the equity the heirs are
        about to inherit. The premiums are added to the mortgage balance and are typically
        much higher than the homeowner&rsquo;s own policy would cost. Avoid this outcome by
        keeping the executor&rsquo;s policy active and notifying the lender so they do not
        force-place. See{' '}
        <Link href="/resources/mortgage-company-insurance-claims" className="text-[#2E74B5] hover:underline">
          mortgage company insurance claims
        </Link>
        .
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Probate Property Insurance Checklist
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Within the first week of the policyholder&rsquo;s death, locate the existing
          homeowner policy and read the death-of-named-insured provision.
        </li>
        <li>
          Notify the carrier of the death in writing. Ask in writing how long coverage
          continues, who it covers, and what changes need to be made to keep the policy in
          force.
        </li>
        <li>
          Get a copy of the recorded deed and confirm how title is held.
        </li>
        <li>
          Identify the executor (or proposed executor) and start the process of obtaining
          Letters Testamentary if not already in hand.
        </li>
        <li>
          Decide who will pay premiums during probate &mdash; estate funds, an heir&rsquo;s
          personal funds, or a different arrangement &mdash; and document that decision.
        </li>
        <li>
          Address vacancy <em>before</em> the 60-day clock runs. Install a caretaker, have a
          relative occupy the property, hire a property-watch service, or get a vacancy
          endorsement.
        </li>
        <li>
          Notify the mortgage lender of the death and confirm that the existing policy will
          continue to satisfy the loan&rsquo;s insurance requirement; otherwise, force-placed
          insurance will appear on the next mortgage statement.
        </li>
        <li>
          If a loss has already occurred and a claim is open, get the executor formally
          authorized to act on the claim before negotiating further with the carrier.
        </li>
        <li>
          Coordinate with the probate attorney throughout. The probate attorney handles the
          estate; the broker and the Public Adjuster handle the insurance; the two have to
          talk to each other.
        </li>
      </ul>

      <CalloutBox variant="warning" title="Move Fast on Probate Property">
        <p>
          The first month after a homeowner&rsquo;s death is when most probate-property
          insurance disasters are created. The death clause is running, the property is
          empty, the executor doesn&rsquo;t have Letters yet, and no one wants to focus on
          insurance while grieving. Insurers know this and rely on it. Move on the insurance
          questions during the first week, not the first month.
        </p>
      </CalloutBox>

      {/* ═══════════════════════════════════════════════════════════════════════ */}
      {/* CLOSING */}
      {/* ═══════════════════════════════════════════════════════════════════════ */}

      <hr className="my-8 border-gray-300" />

      <CalloutBox variant="legal" title="Disclaimer">
        <p>
          This article is for general educational purposes only and does not constitute legal
          advice, tax advice, or financial planning advice. The author is a California
          Licensed Public Adjuster, not an attorney. The adjacent legal areas this article
          flags &mdash; Medi-Cal estate recovery, life estates and remainder interests,
          probate procedure, executor duties, trust administration &mdash; are handled by
          California-licensed elder-law, estate-planning, probate, and real-property
          attorneys. Always consult an appropriate attorney about your specific situation
          before disbursing insurance proceeds in any non-standard ownership scenario.
        </p>
        <p className="mt-2">
          <strong>Author:</strong> Leland Coontz III, Licensed Public Adjuster, CA License #2B53445
        </p>
      </CalloutBox>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Insurance Claim on a Property With Non-Standard Ownership?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          If you are dealing with an insurance claim on property where the owner received
          Medi-Cal, holds only a life estate, has passed away, or where the property has been
          inherited, a licensed California Public Adjuster can help you maximize the insurance
          recovery while you coordinate with the elder-law or estate attorney handling the
          rest.
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
