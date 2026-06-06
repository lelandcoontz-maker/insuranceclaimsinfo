import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: "Games Insurers Play: The ‘Preferred Vendor’ Steering Game",
  description:
    "How insurance companies steer policyholders toward preferred contractors who serve the carrier’s interests — and what happens when you exercise your right to choose your own.",
  summary:
    'Insurers steer policyholders toward preferred contractors who serve the carrier\'s interests, often through lowball-friendly pricing. You have the right to choose your own contractor; understand the pressure and resist steering that costs you scope.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="Important Notice">
        <p>
          This article is provided for general educational purposes only and does not constitute
          legal advice. Insurance policies, regulations, and case law can vary significantly based
          on individual circumstances. Consult a licensed attorney for advice about your specific
          situation.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        You file a claim. The adjuster shows up. And before they&rsquo;ve even finished inspecting
        your damage, they hand you a business card for a contractor you&rsquo;ve never heard of.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        &ldquo;We work with these guys all the time. It&rsquo;ll go a lot smoother if you use
        them.&rdquo;
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        It sounds helpful. Sounds like the adjuster is just trying to make your life easier during a
        stressful time. But the &ldquo;preferred vendor&rdquo; game is one of the most persistent
        problems in the insurance claims industry &mdash; and understanding how it works is essential
        to protecting your claim.
      </p>

      {/* ── How the Game Works ─────────────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">How the Game Works</h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        When you file a property damage claim, the adjuster inspects the damage and writes an
        estimate. Simple enough. But in practice, the adjuster also tends to have a &ldquo;go-to&rdquo;
        contractor &mdash; a restoration company or general contractor whose name comes up on every
        single claim.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The adjuster recommends them. Sometimes strongly recommends them. Sometimes implies &mdash;
        directly or indirectly &mdash; that using a different contractor will create problems.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Now, ask yourself a question: <strong>why would an insurance company adjuster care which
        contractor you use?</strong>
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Their job is to evaluate the damage and determine the payment. Who does the repairs
        shouldn&rsquo;t matter to them at all. Yet time after time, adjusters go out of their way to
        steer homeowners toward specific vendors. And when a homeowner chooses their own contractor
        instead, suddenly the claim gets harder to process. The adjuster nitpicks the estimate.
        Disputes the pricing. Demands revisions. Questions the scope.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Meanwhile, the preferred vendor&rsquo;s estimate &mdash; which is almost always lower &mdash;
        sails through approval without a single objection.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        It&rsquo;s worth sitting with that pattern for a moment and asking: <strong>what would make
        an adjuster work this hard to control who gets the repair job?</strong>
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        I&rsquo;ll let you draw your own conclusions.
      </p>

      {/* ── What Happens to Your Claim ─────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">What Happens to Your Claim</h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Whatever the reasons behind the steering, the consequences for homeowners are concrete and
        measurable:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        Your Contractor Gets Sabotaged
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Let&rsquo;s say you have a contractor you trust. Maybe they did a great remodel for you.
        Maybe your neighbor recommended them. You tell the adjuster: &ldquo;I&rsquo;m using my own
        contractor.&rdquo;
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        And suddenly the adjuster becomes a different person. Your contractor&rsquo;s estimate gets
        torn apart line by line. The adjuster finds fault with everything &mdash; the pricing is too
        high, the scope is too broad, this line item isn&rsquo;t justified, that material is
        unnecessary. They demand competitive bids. They want revised estimates. They hold up payment.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        But here&rsquo;s the interesting part: if you&rsquo;d just used the preferred vendor, none of
        that scrutiny would have happened. The preferred vendor&rsquo;s estimate would have been
        accepted quickly and without pushback &mdash; even though it&rsquo;s typically lower and less
        thorough than your contractor&rsquo;s estimate.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        The Preferred Vendor Writes a Skinny Estimate
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The preferred vendor knows the dynamic they&rsquo;re operating in. They know the adjuster
        wants to keep the claim payout low. So they write accordingly &mdash; lean estimates that
        leave out line items, use cheaper materials, scope repairs when replacements are warranted.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Why would a contractor deliberately underbid? Because they&rsquo;re getting volume. The
        adjuster is funneling them a steady stream of jobs. A contractor who gets 30 jobs a year
        from one adjuster can afford thin margins on each one. Meanwhile, the homeowner gets a
        bare-minimum repair.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        Legitimate Claims Get Punished
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        This is the part that really matters. I&rsquo;ve seen cases where perfectly straightforward
        claims &mdash; obvious damage, clear coverage &mdash; get denied or drastically underpaid.
        And the timing is always suspicious: the homeowner chose their own contractor instead of the
        adjuster&rsquo;s recommendation, and suddenly the claim develops &ldquo;issues.&rdquo;
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The claim was never evaluated purely on its merits. Something else was driving the outcome.
      </p>

      {/* ── A Real-World Example ───────────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">A Real-World Example</h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        I was working a fire claim on a multi-unit building. My client had already hired a licensed
        general contractor &mdash; good contractor, licensed, insured, already on-site doing the work.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Then the insurance adjuster showed up and started pushing a restoration company he
        &ldquo;recommended.&rdquo; He kept trying to wedge this preferred vendor into the project,
        even though my client&rsquo;s contractor was already under contract and had started repairs.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The preferred vendor submitted an estimate that was dramatically lower than the actual scope
        of work. They hadn&rsquo;t even accounted for the double drywall in the affected areas &mdash;
        a basic detail that anyone doing a site inspection should have caught.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        When my client&rsquo;s contractor submitted a proper estimate reflecting the real conditions,
        the adjuster went silent. Wouldn&rsquo;t respond to emails. Wouldn&rsquo;t acknowledge the
        additional scope.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        So I played a little chess. I had the contractor email the preferred vendor directly:
        &ldquo;Hey, the drywall is doubled in all these areas. Is that going to increase your
        price?&rdquo; Of course the preferred vendor said yes &mdash; because it&rsquo;s double the
        work. Now the adjuster couldn&rsquo;t argue that our scope was inflated, because his own
        preferred vendor confirmed the additional cost.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        That&rsquo;s the kind of maneuvering homeowners shouldn&rsquo;t have to do. But when an
        adjuster is more invested in which contractor gets the job than in accurately evaluating
        your claim, you need to be strategic.
      </p>

      {/* ── Why This Keeps Happening ───────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">Why This Keeps Happening</h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        This is an open secret in the industry. Contractors talk about it on job sites. Public
        adjusters discuss it at conferences. Adjusters who&rsquo;ve left the industry will tell you
        stories off the record.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        I&rsquo;ve heard from contractors who say: &ldquo;I had the homeowner signed up. I had a
        contract. And then the adjuster told the homeowner not to use me, and someone else got the
        job.&rdquo; It happens over and over, with the same adjusters and the same preferred vendors.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        So why doesn&rsquo;t anything change?
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Because the honest contractors who keep losing work don&rsquo;t want to make accusations
        publicly. The insurance industry is small, and people have long memories. A contractor who
        raises a stink might get blacklisted from future claims work. A public adjuster who points
        fingers might find their clients&rsquo; claims getting extra scrutiny.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        And when an adjuster develops a &ldquo;reputation&rdquo; for aggressively steering work? In
        most cases, they&rsquo;re quietly moved to a different territory or invited to resign. They
        don&rsquo;t get prosecuted. They don&rsquo;t lose their license. They show up at a different
        carrier the next month. The problem moves &mdash; it doesn&rsquo;t get solved.
      </p>

      {/* ── When the Adjuster Sends People ─────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        When the Adjuster Just Sends People to Your House
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        There&rsquo;s another version of this game that&rsquo;s even more brazen, and it doesn&rsquo;t
        even require dishonesty &mdash; just arrogance.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        On many claims, the adjuster doesn&rsquo;t just recommend a contractor. They <em>send</em>{' '}
        one. The homeowner comes home to find an electrician on their property doing
        &ldquo;emergency&rdquo; work. Or a structural engineer shows up, walks through the house, and
        starts drawing up building plans. Or someone pulls permits at the city building department
        &mdash; in the homeowner&rsquo;s name &mdash; without the homeowner ever signing a contract,
        authorizing the work, or even meeting the person.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This happens constantly, especially on larger losses. The adjuster has relationships with
        service providers &mdash; emergency restoration companies, engineers, electricians, permit
        expediters &mdash; and they just dispatch them to the property as if the adjuster owns the
        house. The contractor shows up, does the work, and bills the insurance company directly. The
        homeowner never hired anyone. Never signed anything. Never agreed to the scope.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Think about how wrong that is. An engineer is pulling building permits and applying for them
        on your property &mdash; your property &mdash; without having a signed contract with you, the
        property owner. A contractor is doing electrical work in your home without your authorization.
        These are people who work for the adjuster&rsquo;s network, not for you.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        And here&rsquo;s the problem: once these people are on your property doing work you
        didn&rsquo;t authorize, they&rsquo;re creating a paper trail that the insurance company
        controls. The engineer&rsquo;s report says what the adjuster wants it to say. The emergency
        contractor&rsquo;s scope conveniently aligns with the adjuster&rsquo;s estimate. The permits
        are pulled for the scope the adjuster approved &mdash; not necessarily the scope your property
        actually needs.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        It&rsquo;s a conflict of interest, plain and simple. These contractors and engineers
        aren&rsquo;t acting as your fiduciary. They weren&rsquo;t hired by you. They have no
        contractual obligation to protect your interests. They&rsquo;re working on behalf of the
        party that&rsquo;s supposed to be paying your claim &mdash; and that party has every incentive
        to minimize the payout.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Is it necessarily dishonest? Not always. Some adjusters genuinely think they&rsquo;re being
        helpful by &ldquo;taking care of things&rdquo; for the homeowner. But helpful or not,
        it&rsquo;s unethical. No contractor or engineer should be working on your property without
        your written authorization. No one should be pulling permits in your name without your
        consent. And no one whose paycheck depends on the insurance company&rsquo;s goodwill should
        be making decisions about the scope of your repairs.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        If someone shows up at your property claiming the adjuster sent them, ask one question:{' '}
        <strong>&ldquo;Do you have a signed contract with me?&rdquo;</strong> If the answer is no,
        they shouldn&rsquo;t be there.
      </p>

      {/* ── The No-Change-Order Bluff ──────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        The No-Change-Order Bluff: How to Call the Preferred Vendor&rsquo;s Hand
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Here is a tactical move most policyholders never think of, and one that exposes the
        preferred vendor game faster than anything else. When the carrier&rsquo;s preferred
        vendor has written a suspiciously low estimate and the carrier is leaning on it as
        the basis for the claim payment, <strong>offer to hire the preferred vendor to
        actually do the work &mdash; on a fixed-price, no-change-order contract at their
        estimated number</strong>. Then watch what happens.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        In our experience, the preferred vendor almost never accepts. They will say they are
        too busy. They will say they cannot get to it for months. They will say the project is
        not really their specialty. They will say their team is committed elsewhere. They
        will go quiet and stop returning calls. Almost any answer except: &ldquo;Yes, we will
        do the job for the number we wrote.&rdquo;
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Why? Because they cannot actually do the job for the number they wrote. They wrote a
        number designed to make the insurance company happy. The estimate was never a
        commitment to perform &mdash; it was a paper exercise. Some preferred vendors, when
        pressed in plain conversation, will admit this directly: they will say they wrote it
        low for the carrier who sends them work, or they will say that of course the price
        would need to come up if they were actually hired, because no real contractor could
        complete the scope at that number.
      </p>

      <CalloutBox variant="important" title="The Refusal Is Evidence">
        <p>
          When the preferred vendor refuses to actually do the job at their own estimated
          price, that refusal is evidence the estimate was not a good-faith assessment of
          the cost of repair. Document the refusal in writing. Send an email to the
          adjuster summarizing the conversation: &ldquo;I offered to hire [Vendor Name] to
          perform the repairs at the price set out in their estimate dated [date]. Their
          response was [their response]. Please advise how the carrier intends to proceed
          given that the vendor whose estimate you are relying on will not perform the
          work at that price.&rdquo; The carrier&rsquo;s estimate is now resting on an
          estimate the estimator will not stand behind.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        What the adjusters know that they will not say on the record: this game is happening
        with their blessing. Adjusters know perfectly well that preferred vendors write
        deliberately low estimates as a courtesy to the carrier who sends them work, and that
        the vendors do not expect to perform the work at those numbers. The arrangement is
        widely understood inside the industry. When confronted, however, adjusters generally
        feign ignorance &mdash; as if the preferred vendor&rsquo;s number was a clean
        third-party estimate produced by an independent professional with no relationship to
        the carrier and no incentive to write low. The pretense is part of how the game
        works.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The no-change-order bluff strips away that pretense in the cleanest possible way.
        It does not require the policyholder to argue about industry norms or carrier
        incentive structures or backroom arrangements. It just requires the policyholder to
        say: <em>I want to hire your guy. At his price. Let&rsquo;s sign the contract.</em>
        The vendor backs out, and the estimate that was supposed to define the loss now has
        nobody standing behind it.
      </p>

      {/* ── How to Protect Yourself ────────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">How to Protect Yourself</h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">1. Know Your Right to Choose</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        In California &mdash; and in most states &mdash; you have the absolute right to use any
        licensed contractor you choose. The insurance company cannot require you to use their
        preferred vendor. Period. 10 CCR &sect; 2695.9 specifically prohibits insurers from
        recommending repair contractors without informing you that you have the right to choose
        your own.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If an adjuster pushes back on your contractor choice, quote this regulation. It tends to end
        the conversation quickly.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">2. Document the Steering</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Every time the adjuster recommends their vendor, note the date, time, and what was said. If
        they tell you it&rsquo;ll &ldquo;go smoother&rdquo; with their contractor, document that
        exact language. If they suddenly find problems with your contractor&rsquo;s estimate after you
        declined their recommendation, document the timeline. This paper trail matters if you ever
        file a DOI complaint.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        3. Submit Estimates Through the Homeowner
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here&rsquo;s a tactical point most people miss. When the homeowner &mdash; not just the
        contractor &mdash; submits an estimate to the adjuster, it triggers regulatory obligations.
        Under California regulations (10 CCR 2695.7), the insured&rsquo;s proof of claim starts a
        40-day clock. An estimate submitted only by the contractor doesn&rsquo;t carry the same
        weight. Make sure the homeowner sends it.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">4. Get Independent Estimates</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Don&rsquo;t rely solely on the adjuster&rsquo;s scope. Get your own estimate from a
        contractor who works for you, not the insurance company. If the adjuster&rsquo;s preferred
        vendor comes in at $30,000 and your independent contractor comes in at $55,000, that
        disparity tells a story.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        5. Consider Professional Representation
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A licensed public adjuster represents you, not the carrier. When a PA is on the claim, the
        dynamic changes. Adjusters tend to be more careful about their recommendations when they
        know a licensed professional is watching and documenting everything. The steering becomes a
        lot harder to do when someone&rsquo;s taking notes.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">6. File a DOI Complaint</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you believe your claim was handled unfairly because you didn&rsquo;t use the
        adjuster&rsquo;s preferred vendor, file a complaint with the California Department of
        Insurance at insurance.ca.gov. A single complaint may not change the industry, but a pattern
        of complaints against a specific adjuster or carrier can trigger an investigation.
      </p>

      {/* ── The Bottom Line ────────────────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">The Bottom Line</h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        You paid your premiums. You did everything right. You deserve an honest evaluation of your
        claim based on the actual damage to your property &mdash; not based on which contractor the
        adjuster wants you to hire.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        When an adjuster steers you toward a preferred vendor, be polite but firm: &ldquo;Thank you
        for the recommendation. I&rsquo;ll be using my own licensed contractor.&rdquo; Then document
        everything.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The question of <em>why</em> adjusters push so hard on contractor selection is one the
        industry doesn&rsquo;t want to answer publicly. But as a homeowner, you don&rsquo;t need to
        answer that question. You just need to know your rights, choose your own contractor, and
        make sure your claim is evaluated on its merits.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        What&rsquo;s really going on behind the scenes? Well &mdash; you&rsquo;re a smart person.
        You can read between the lines.
      </p>

      <p className="text-sm text-gray-500 italic">
        Leland Coontz is a California Licensed Public Adjuster and the founder of
        InsuranceClaimsInfo.com. He has decades of experience advocating for policyholders on both
        sides of the insurance claims process. This article is for informational purposes and does
        not constitute legal advice. Policyholders facing claim disputes should consult with a
        qualified attorney in their jurisdiction.
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
