import type { Metadata } from 'next'
import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

/* ── SEO Metadata ───────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'Games Insurance Companies Play: How to Identify and Defeat Them',
  description:
    'Learn the most common tactics insurance companies use to underpay property claims in California — lowball offers, adjuster shuffling, excessive depreciation, and more. A Licensed Public Adjuster explains how to fight back.',
  keywords: [
    'insurance company tactics',
    'lowball insurance offer',
    'insurance claim denial',
    'insurance bad faith California',
    'Public Adjuster',
    'insurance depreciation',
    'mold sub-limit',
    'overhead and profit insurance',
    'insurance adjuster tactics',
    'California insurance claim help',
  ],
}

/* ── Tactic Data ────────────────────────────────────────────────────────────── */

interface Tactic {
  number: number
  name: string
  howTheyDoIt: React.ReactNode
  howToFightBack: React.ReactNode
  regulations?: string[]
  featured?: boolean
}

const TACTICS: Tactic[] = [
  {
    number: 1,
    name: 'The Lowball First Offer',
    howTheyDoIt: (
      <>
        <p>
          The most common tactic in insurance claims is the lowball first offer. The insurer sends
          an adjuster who writes a quick estimate that significantly undervalues the damage, often
          missing entire rooms, ignoring code upgrades, and using the cheapest possible materials and
          labor rates. They then present this number as a "final" settlement and pressure you to sign
          a release before you have time to get your own estimate. The goal is simple: most
          policyholders don't know what their claim is actually worth, so if the insurer offers
          $40,000 on a $120,000 loss, a significant percentage of people will accept it rather than
          fight. They are counting on your exhaustion and your lack of information.
        </p>
      </>
    ),
    howToFightBack: (
      <>
        <p>
          Never accept the first offer without getting an independent estimate from a licensed
          contractor or a Public Adjuster. Do not sign a release or settlement agreement under
          pressure. You have the right to dispute the amount, and California law (Insurance Code
          Section 790.03(h)(5)) requires the insurer to attempt a good-faith settlement. If the gap
          between your estimate and theirs is significant, you can invoke the appraisal clause in
          your policy, which is a binding process where an independent umpire determines the
          actual cost of loss.
        </p>
      </>
    ),
    regulations: ['Insurance Code §790.03(h)(5)', 'Insurance Code §790.03(h)(6)'],
  },
  {
    number: 2,
    name: 'The "Three Bids" Requirement',
    howTheyDoIt: (
      <>
        <p>
          After you dispute their low estimate, many adjusters will tell you that you need to "go
          get three bids" from licensed contractors before they will consider paying more. This
          sounds reasonable, but it is almost never a policy requirement. Your insurance policy
          typically requires you to submit a proof of loss — a sworn statement of the amount of
          your claim — not a stack of contractor bids. The "three bids" demand serves two purposes
          for the insurer: it shifts the burden of proof onto you (making you do their job), and it
          delays the claim by weeks or months while you schedule walk-throughs and wait for
          estimates. Meanwhile, your damaged property sits unrepaired.
        </p>
      </>
    ),
    howToFightBack: (
      <>
        <p>
          Read your policy carefully. If there is no "three bids" requirement — and there almost
          certainly is not — tell the adjuster in writing that you are not required to obtain three
          bids and cite the specific proof-of-loss provision in your policy. A single estimate from
          a qualified contractor or Public Adjuster, supported by industry-standard pricing (such as
          Xactimate), is sufficient to challenge their number. If the insurer insists their estimate
          is correct, invoke 10 CCR 2695.7(g) and ask them to provide the name of a contractor
          who will do the work for their amount.
        </p>
      </>
    ),
    regulations: ['10 CCR 2695.7(g)'],
  },
  {
    number: 3,
    name: 'Sending Their Own Contractor',
    howTheyDoIt: (
      <>
        <p>
          Insurers often send a "preferred vendor" or "managed repair" contractor to inspect your
          property and write an estimate. These contractors have a financial relationship with the
          insurer — they get a steady stream of referrals in exchange for writing estimates that
          align with the insurer's budget. The contractor who walks through your house may
          privately acknowledge that the real cost of repairs is significantly higher than what they
          are going to write. Some will even tell you: "I know this isn't enough, but this is what
          they want me to put down." The estimate is designed to support the insurer's number, not
          to reflect the actual cost of restoring your property.
        </p>
      </>
    ),
    howToFightBack: (
      <>
        <p>
          You are not required to use the insurer's preferred contractor. You have the absolute
          right to choose your own licensed contractor. Get your own estimate from an independent
          contractor who has no financial relationship with your insurance company. If the insurer's
          contractor gave you a verbal acknowledgment that the real cost is higher, document that
          conversation immediately — date, time, what was said — and send it to the adjuster in
          writing. The gap between the insurer's contractor estimate and independent contractor
          estimates is powerful evidence in appraisal or litigation.
        </p>
      </>
    ),
  },
  {
    number: 4,
    name: 'The Adjuster Carousel',
    howTheyDoIt: (
      <>
        <p>
          Your claim gets assigned to an adjuster. You spend weeks bringing them up to speed,
          sending documents, and scheduling inspections. Then, without warning, you get a letter
          saying your claim has been reassigned to a new adjuster. The new adjuster needs time to
          "review the file." Weeks pass. Then it happens again. Some policyholders go through three,
          four, or five adjusters in a single claim. Each reassignment resets the clock, loses
          institutional knowledge, and exhausts the policyholder. This is not random bad luck — it
          is a systemic delay tactic. The more adjusters your claim passes through, the less likely
          any single adjuster will be held accountable for the delay.
        </p>
      </>
    ),
    howToFightBack: (
      <>
        <p>
          California has a specific regulation for this. Under 10 CCR 2695.7(c)(1), if three or
          more adjusters are assigned to your claim within a six-month period, the insurer must
          provide you with a written status report within 10 business days of the most recent
          assignment. The report must summarize the current status of the claim and outline the
          next steps. Demand this report in writing, cite the regulation by number, and keep copies
          of every reassignment letter. If they fail to provide the report, file a complaint with
          the California Department of Insurance.
        </p>
      </>
    ),
    regulations: ['10 CCR 2695.7(c)(1)'],
  },
  {
    number: 5,
    name: 'The "Long-Term Damage" Denial',
    howTheyDoIt: (
      <>
        <p>
          After a water loss, the insurer sends an inspector who finds mold, staining, or minor
          pre-existing wear. They then use this evidence to claim that the damage is "long-term" or
          "gradual" — a condition typically excluded under most homeowner policies. They may point
          to a previous water loss from years ago and argue that the current damage is actually the
          result of that old event, even when the two are completely unrelated. In some cases,
          insurers hire engineers or industrial hygienists who write reports designed to support the
          "long-term" narrative, selectively interpreting data to make acute damage appear chronic.
          The presence of any mold becomes the insurer's justification to deny the entire claim.
        </p>
      </>
    ),
    howToFightBack: (
      <>
        <p>
          Get independent testing from a certified industrial hygienist or environmental consultant
          who has no relationship with the insurer. Document the timeline meticulously: when the
          water event occurred, when you discovered the damage, and what steps you took immediately
          afterward. It is critical to separate mold damage from water damage — mold that develops
          after a covered sudden water event is a consequence of the covered loss, not a separate
          "long-term" condition. Demand the insurer cite the specific policy exclusion they are
          relying on, and challenge any engineering report that makes unsupported conclusions about
          the timeline.
        </p>
      </>
    ),
    regulations: ['Insurance Code §790.03(h)(3)', 'Insurance Code §790.03(h)(4)'],
  },
  {
    number: 6,
    name: 'Excessive Depreciation',
    howTheyDoIt: (
      <>
        <p>
          Depreciation is the reduction in value of building components based on age, condition,
          and expected useful life. Legitimate depreciation is a normal part of claims adjusting.
          But many insurers depreciate aggressively and apply depreciation to items that should not
          be depreciated at all — including labor, non-physical items, and long-life building
          components like concrete slabs, structural framing, and copper plumbing. They may
          depreciate a 5-year-old roof at 50%, or depreciate the labor required to install new
          drywall, even though labor does not "wear out" over time. The effect is that your actual
          cash value (ACV) payment is drastically reduced, and you may not have enough to begin
          repairs.
        </p>
      </>
    ),
    howToFightBack: (
      <>
        <p>
          In California, labor should not be depreciated. The landmark case{' '}
          <em>Truong v. Allstate Insurance Company</em> established that depreciation of labor costs
          is improper because labor does not lose value over time. Challenge every line item in the
          insurer's depreciation schedule. Request their depreciation methodology in writing. Items
          like concrete foundations, structural steel, copper pipes, and certain roofing underlayments
          have useful lives that far exceed the depreciation percentages insurers commonly apply.
          If your policy provides replacement cost coverage, remember that you are entitled to
          recover the depreciation holdback once repairs are completed.
        </p>
      </>
    ),
    regulations: ['Truong v. Allstate Insurance Company (labor depreciation)'],
  },
  {
    number: 7,
    name: 'Refusing to Provide Documents',
    howTheyDoIt: (
      <>
        <p>
          You ask the adjuster for a copy of their estimate, the photos they took, or even your
          own policy — and they stall, redirect, or flat-out refuse. Some adjusters claim they "can't
          share" their internal estimate. Others tell you the photos "belong to the company." Some
          will tell you to request the documents through a formal process that takes weeks. The goal
          is to keep you in the dark. If you don't know what the insurer wrote in their estimate,
          you can't effectively challenge it. If you can't see their photos, you can't compare them
          to the actual damage. Information asymmetry is one of the insurer's most powerful
          advantages, and withholding documents is how they maintain it.
        </p>
      </>
    ),
    howToFightBack: (
      <>
        <p>
          California law is unambiguous on this. Under 10 CCR 2695.7(d), upon your written request,
          the insurer must provide copies of all documents that relate to the evaluation of your
          claim within 15 calendar days. This includes adjuster reports, estimates, photographs,
          engineering reports, and correspondence. Send your request in writing (email is fine),
          cite the regulation by number, and note the 15-day deadline. If they fail to comply, file
          a complaint with the California Department of Insurance. The insurer's own documents are
          often the strongest evidence that their estimate is insufficient.
        </p>
      </>
    ),
    regulations: ['10 CCR 2695.7(d)'],
  },
  {
    number: 8,
    name: 'Denying General Contractor Overhead & Profit',
    howTheyDoIt: (
      <>
        <p>
          When repairs require multiple trades — demolition, framing, electrical, plumbing, drywall,
          paint, flooring — a general contractor is needed to coordinate the work. General contractors
          charge overhead and profit (O&P), typically 10% each (20% combined), on top of the
          subcontractor costs. Insurers routinely deny O&P, claiming it is "only payable if you
          actually hire a general contractor" or that the repairs are "simple enough" to not require
          one. Some insurers write their estimates with O&P excluded by default and only add it if
          you specifically demand it. This can reduce your settlement by 20% or more on a single
          line item decision.
        </p>
      </>
    ),
    howToFightBack: (
      <>
        <p>
          When three or more trades are involved, O&P is a legitimate and necessary cost — whether
          or not you have already hired a general contractor. California regulation 10 CCR 2695.9
          requires insurers to include overhead and profit when a general contractor is reasonably
          likely to be involved in the repairs. The industry standard, supported by Xactimate (the
          estimating software insurers themselves use), is 10% overhead and 10% profit. Document
          the number of trades required and demand O&P be included. If the insurer refuses, this
          is a common appraisal issue and often resolved quickly once the umpire reviews the scope.
        </p>
      </>
    ),
    regulations: ['10 CCR 2695.9'],
  },
  {
    number: 9,
    name: 'Misapplying the Mold Sub-Limit',
    howTheyDoIt: (
      <>
        <p>
          Most homeowner policies include a sub-limit for mold remediation, typically between $5,000
          and $10,000. Insurers exploit this sub-limit by categorizing as much of the water damage
          remediation as possible under the mold limit. They will apply the mold cap to the removal
          of wet drywall, waterlogged insulation, and saturated flooring — all of which is water
          damage work, not mold work. By reclassifying water damage remediation as "mold
          remediation," they can cap the entire restoration at the mold sub-limit and deny tens of
          thousands of dollars in legitimate water damage repairs. The effect is that a $50,000
          water loss gets reduced to a $5,000 mold payment.
        </p>
      </>
    ),
    howToFightBack: (
      <>
        <p>
          Only work that is specifically related to mold should count against the mold sub-limit.
          This includes anti-microbial treatment, mold containment barriers, HEPA air scrubbing,
          and mold-specific testing. It does not include the removal of wet drywall, extraction of
          standing water, removal of saturated insulation, or drying of the structure — all of which
          are water damage remediation activities covered under the water damage provisions of your
          policy. Get a detailed remediation estimate that separates water damage work from
          mold-specific work line by line. If the insurer lumps everything together under the mold
          cap, challenge it in writing and demand they identify which specific line items constitute
          mold remediation versus water damage restoration.
        </p>
      </>
    ),
  },
  {
    number: 10,
    name: 'The Communication Blackout',
    howTheyDoIt: (
      <>
        <p>
          Your adjuster stops returning calls. Emails go unanswered for weeks. You leave voicemails
          that disappear into a void. When you finally reach someone, they promise a callback that
          never comes. This is not mere incompetence — it is a deliberate strategy to exhaust you
          into giving up or accepting a low offer. The longer the silence stretches, the more
          desperate you become, especially if you are displaced from your home and burning through
          savings. Some policyholders spend months chasing their own insurance company for basic
          updates on their claim. The insurer's inaction becomes a form of leverage: the longer
          they wait, the more likely you are to settle for less just to end the ordeal.
        </p>
      </>
    ),
    howToFightBack: (
      <>
        <p>
          Document every single communication attempt — date, time, method, and what you said or
          asked. Under 10 CCR 2695.5(e), the insurer must respond to communications from a claimant
          that reasonably suggest a response is expected, within 15 calendar days. After 15 days
          without a response, send a follow-up email that says: "This is my second request for
          [specific information]. I sent my first request on [date]. Under 10 CCR 2695.5(e), you
          are required to respond. Please respond within 5 business days." If the silence continues,
          file a complaint with the California Department of Insurance and consider engaging a
          Public Adjuster or attorney.
        </p>
      </>
    ),
    regulations: ['10 CCR 2695.5(e)', '10 CCR 2695.5(b)'],
  },
  {
    number: 11,
    name: '"Use Our Contractor or Your Claim Is Denied"',
    howTheyDoIt: (
      <>
        <p>
          Some insurers or their adjusters threaten — either directly or through strong implication —
          that if you do not use their recommended or "preferred" contractor, your claim will be
          denied or your payment will be reduced. This creates a false sense of urgency and coerces
          you into using a contractor who has a financial incentive to keep costs low for the
          insurer. The threat is particularly effective on policyholders who are unfamiliar with
          their rights, especially those dealing with their first major claim. In reality, this
          threat has absolutely no basis in your policy language or California law. It is a pressure
          tactic designed to keep control of the repair process — and the costs — in the insurer's
          hands.
        </p>
      </>
    ),
    howToFightBack: (
      <>
        <p>
          You have the absolute right to choose your own contractor. No standard homeowner policy
          in California requires you to use the insurer's preferred vendor, and no provision allows
          the insurer to deny your claim for choosing an independent contractor. If an adjuster
          makes this threat, ask them to cite the specific policy provision that requires you to use
          their contractor. They will not be able to, because it does not exist. Document the threat
          in writing and send a letter to the insurer stating that you are exercising your right to
          choose your own contractor and that you consider the threat a violation of fair claims
          practices.
        </p>
      </>
    ),
    regulations: ['Insurance Code §790.03(h)(1)'],
  },
  {
    number: 12,
    name: 'Demanding Unnecessary Examinations Under Oath',
    howTheyDoIt: (
      <>
        <p>
          An Examination Under Oath (EUO) is a formal, recorded, sworn examination — essentially a
          deposition conducted by the insurer's attorney. While EUOs are a legitimate policy
          condition, some insurers abuse the process to intimidate, delay, or fish for reasons to
          deny the claim. They may demand EUOs from people with no connection to the claim, require
          multiple EUOs from the same person on the same topics, or schedule them at unreasonable
          times and locations. The EUO is then used as a gauntlet: if you fail to appear, the
          insurer claims you violated the cooperation clause and denies the claim. If you do appear,
          they use hours of questioning to find inconsistencies they can use against you.
        </p>
      </>
    ),
    howToFightBack: (
      <>
        <p>
          Cooperate with reasonable EUO requests — refusing entirely can jeopardize your claim. But
          know your rights: an EUO must be reasonable in scope, duration, and frequency. You have
          the right to have an attorney present (and you should). The insurer must provide reasonable
          notice and scheduling. If the EUO request seems abusive — targeting uninvolved people,
          demanding repeat examinations on the same topics, or requiring travel to distant locations —
          respond in writing that you are willing to cooperate with a reasonable examination and
          propose alternative terms. An attorney experienced in insurance claims can help you
          navigate EUOs effectively.
        </p>
      </>
    ),
  },
  {
    number: 13,
    name: 'Running Out the Clock',
    howTheyDoIt: (
      <>
        <p>
          Some insurers deliberately delay the adjustment of your claim for months — sometimes more
          than a year — and then inform you that your time to file a lawsuit has expired. They may
          take 14 or more months to issue a final determination, then claim you only had 12 months
          from the date of loss to file suit. Other insurers delay the replacement cost payment
          process until the deadline for recovering depreciation has passed, leaving you with only
          the reduced actual cash value. The delays are always cloaked in reasonable-sounding
          excuses: "we need more documentation," "the engineer report is pending," "your file is
          being reviewed by management." Each delay pushes you closer to a deadline you may not
          even know exists.
        </p>
      </>
    ),
    howToFightBack: (
      <>
        <p>
          Know your deadlines. The statute of limitations for breach of contract (suing your insurer)
          is typically one year from the date of loss, but this period is generally tolled (paused)
          while the insurer is actively adjusting the claim. The deadline to recover depreciation
          holdback is often 12 or 24 months after the initial payment, depending on your policy.
          Read your policy carefully for all time-sensitive provisions. If the insurer is dragging
          their feet and deadlines are approaching, consult an attorney immediately. Send written
          demands for timely adjustment citing 10 CCR 2695.7(b), which requires the insurer to
          accept or deny the claim within 40 days of receiving proof of claim.
        </p>
      </>
    ),
    regulations: ['10 CCR 2695.7(b)'],
  },
  {
    number: 14,
    name: 'Calling Vandalism "Wear and Tear"',
    howTheyDoIt: (
      <>
        <p>
          When a property suffers vandalism damage — broken windows, holes punched in walls, graffiti,
          destruction of fixtures, or damage from illegal activity like marijuana grow operations —
          some insurers will relabel the damage as "wear and tear" or "lack of maintenance," both
          of which are typically excluded under homeowner policies. They may point to general
          deferred maintenance on the property and argue that the vandalism damage is
          indistinguishable from pre-existing neglect. This is especially common with tenant-caused
          damage and properties that have been unoccupied. By reclassifying an act of vandalism
          (a covered peril) as wear and tear (an excluded condition), the insurer avoids paying the
          claim entirely.
        </p>
      </>
    ),
    howToFightBack: (
      <>
        <p>
          Documentation is everything. File a police report immediately — it creates an official
          record that the damage was caused by a criminal act, not gradual deterioration. Take
          extensive photographs and video of all damage before any cleanup. If you have photos of
          the property's condition before the vandalism (move-in photos, prior inspection reports,
          previous listing photos), gather them to establish baseline condition. Create a detailed
          timeline showing when the property was last inspected and when the damage was discovered.
          Get a written opinion from a contractor distinguishing vandalism damage from any
          pre-existing conditions.
        </p>
      </>
    ),
  },
  {
    number: 15,
    name: 'Demanding the Contractor Name Under §2695.7(g)',
    howTheyDoIt: (
      <>
        <p>
          This tactic is different from the others on this page — it is not something the insurer
          does to you. It is something <strong>you can do to the insurer</strong>. Under California
          regulation 10 CCR 2695.7(g), if the insurer's claim payment or estimate is based on the
          cost of repairs, and you request it, the insurer is <strong>required</strong> to provide
          the name, address, and telephone number of a contractor who will perform the repairs for
          the amount stated in their estimate. This is one of the most powerful and underutilized
          tools available to California policyholders. If the insurer says your roof costs $30,000
          to repair but every contractor you call says $55,000, you can force the insurer to put
          their money where their estimate is.
        </p>
      </>
    ),
    howToFightBack: (
      <>
        <p>
          Send a written request to the insurer that says: "Pursuant to 10 CCR 2695.7(g), I am
          requesting the name, address, and telephone number of a licensed contractor who will
          perform the repairs described in your estimate, dated [date], for the amount of [dollar
          amount] stated therein." They are required to respond. In most cases, they cannot produce
          a contractor willing to do the work for their low number, because the estimate was never
          meant to reflect actual market costs. Once they fail to provide a contractor name, their
          estimate loses credibility and you have powerful leverage to demand a revised payment. If
          they ignore the request entirely, that is a separate violation under 10 CCR 2695.5(e).
        </p>
      </>
    ),
    regulations: ['10 CCR 2695.7(g)', '10 CCR 2695.5(e)'],
    featured: true,
  },
]

/* ── Page Component ─────────────────────────────────────────────────────────── */

export default function InsurerTacticsPage() {
  return (
    <>
      {/* ── Navy Header ─────────────────────────────────────────────────────── */}
      <section className="bg-[#1F3964] text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-[#C9A84C] text-white text-xs font-bold px-3 py-1 rounded-full mb-5 tracking-wider uppercase">
            Policyholder Defense
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">
            Games Insurance Companies Play: How to Identify and Defeat Them
          </h1>
          <p className="text-blue-200 max-w-2xl leading-relaxed">
            Insurance companies have teams of adjusters, attorneys, and consultants working to
            minimize what they pay you. Here are the most common tactics they use on property
            claims — and how to fight back.
          </p>
        </div>
      </section>

      {/* ── Main Content ────────────────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-10">

        {/* ── Legal Disclaimer ──────────────────────────────────────────────── */}
        <CalloutBox variant="legal" title="Important Notice">
          <p>
            This page is educational content about common insurance company practices in property
            claims. It is not legal advice. Every claim and every policy is different. If you believe
            your insurer is acting in bad faith or violating California insurance regulations, consult
            a licensed Public Adjuster or an attorney who specializes in insurance coverage disputes.
          </p>
        </CalloutBox>

        {/* ── Tactic Cards ──────────────────────────────────────────────────── */}
        {TACTICS.map((tactic, index) => (
          <div key={tactic.number}>
            {/* Featured callout BEFORE the card for Tactic 15 */}
            {tactic.featured && (
              <CalloutBox variant="tip" title="Your Most Powerful Weapon: The Contractor Name Requirement">
                <p className="mb-2">
                  Unlike every other item on this page, Tactic 15 is not something the insurer does
                  to you — it is something <strong>you</strong> do to <strong>them</strong>. Section
                  2695.7(g) is arguably the single most effective regulation available to California
                  policyholders who are being underpaid on structural repairs.
                </p>
                <p>
                  If you only remember one thing from this page, remember this: when the insurer's
                  estimate is too low, demand the name of a contractor who will do the work for that
                  amount. The regulation requires them to provide one. When they cannot, their
                  estimate falls apart.
                </p>
              </CalloutBox>
            )}

            <article
              id={`tactic-${tactic.number}`}
              className={`rounded-2xl border border-gray-200 overflow-hidden scroll-mt-8 ${
                index % 2 === 0 ? 'bg-white' : 'bg-[#EFF4FB]'
              }`}
            >
              {/* Card Header */}
              <div className="flex items-center gap-4 px-6 pt-6 pb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F3964] text-white flex items-center justify-center font-bold text-lg">
                  {tactic.number}
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1F3964]">
                  {tactic.name}
                </h2>
              </div>

              {/* Card Body */}
              <div className="px-6 pb-6 space-y-5">
                {/* How They Do It */}
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#C9A84C] mb-2">
                    How They Do It
                  </h3>
                  <div className="text-gray-700 leading-relaxed text-[15px]">
                    {tactic.howTheyDoIt}
                  </div>
                </div>

                {/* How to Fight Back */}
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#1F3964] mb-2">
                    How to Fight Back
                  </h3>
                  <div className="text-gray-700 leading-relaxed text-[15px]">
                    {tactic.howToFightBack}
                  </div>
                </div>

                {/* Regulations / Citations */}
                {tactic.regulations && tactic.regulations.length > 0 && (
                  <div className="pt-3 border-t border-gray-200">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
                      Relevant Law / Regulation
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {tactic.regulations.map((reg) => (
                        <span
                          key={reg}
                          className="inline-block bg-[#1F3964]/10 text-[#1F3964] text-xs font-medium px-3 py-1 rounded-full"
                        >
                          {reg}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </article>
          </div>
        ))}

        {/* ── Case Studies Note ──────────────────────────────────────────────── */}
        <section className="bg-white rounded-2xl border border-gray-200 p-8 text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-[#C9A84C] mb-2">
            Coming Soon
          </p>
          <h2 className="text-xl font-bold text-[#1F3964] mb-3">
            Real-World Case Studies
          </h2>
          <p className="text-gray-600 max-w-lg mx-auto leading-relaxed">
            This page will be updated with real-world case studies showing how these tactics played
            out in actual California insurance claims. Have a story about insurer tactics you
            experienced firsthand?{' '}
            <Link href="/contact" className="text-[#2E74B5] font-medium underline hover:text-[#1F3964] transition-colors">
              Contact us
            </Link>{' '}
            — your experience can help other policyholders.
          </p>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────────── */}
        <section className="bg-[#EFF4FB] rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-[#1F3964] mb-3">
            Dealing With These Tactics Right Now?
          </h2>
          <p className="text-gray-600 mb-6 max-w-lg mx-auto leading-relaxed">
            A California Licensed Public Adjuster can review your claim, identify the tactics being
            used against you, and fight for the full amount your policy owes. The consultation is
            free and there is no obligation.
          </p>
          <Link href="/contact" className="btn-gold">
            Request a Free Claim Review &rarr;
          </Link>
          <p className="text-gray-500 text-sm mt-4">
            Leland Coontz III &middot; CA Public Adjuster License #2B53445
          </p>
        </section>

        {/* ── Related Links ─────────────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-[#1F3964] mb-5">Related Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <Link
              href="/regulations"
              className="block bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <span className="text-2xl mb-3 block">⚖️</span>
              <h3 className="font-bold text-[#1F3964] text-sm mb-2">
                California Insurance Regulations
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                The full list of California laws and regulations that govern how your insurer must
                handle your claim — the rules they are required to follow.
              </p>
              <p className="text-[#2E74B5] text-sm font-medium mt-3">Read guide &rarr;</p>
            </Link>

            <Link
              href="/resources/bad-faith"
              className="block bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <span className="text-2xl mb-3 block">🚨</span>
              <h3 className="font-bold text-[#1F3964] text-sm mb-2">
                Bad Faith Insurance Practices
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                When insurer tactics cross the line into actionable bad faith — your remedies and
                when to involve an attorney.
              </p>
              <p className="text-[#2E74B5] text-sm font-medium mt-3">Read guide &rarr;</p>
            </Link>

            <Link
              href="/faq"
              className="block bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <span className="text-2xl mb-3 block">❓</span>
              <h3 className="font-bold text-[#1F3964] text-sm mb-2">
                Frequently Asked Questions
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Answers to the most common insurance claim questions from a California Licensed
                Public Adjuster.
              </p>
              <p className="text-[#2E74B5] text-sm font-medium mt-3">View FAQ &rarr;</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}
