import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Wear and Tear Is a Cause of Loss Exclusion — Not a Condition of Property Exclusion',
  description:
    'The most misunderstood exclusion in property insurance. Your policy excludes wear and tear as a CAUSE OF LOSS — it does not exclude damage to property that happens to be worn. If wind blew the shingles off, wear and tear didn\'t cause the loss. Wind did.',
  summary:
    'Wear and tear is excluded as a cause of loss, not as a condition of property. If wind blew off worn shingles, wind caused the loss, not wear, so the claim is covered. Frame the cause of the loss, not the age of the item.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you have filed a property insurance claim — especially a roof claim — there is a
        good chance the insurance company told you that your damage is &ldquo;wear and tear&rdquo;
        and therefore not covered. This is the single most common basis for denying or reducing
        property claims in California, and it is based on a fundamental misreading of the policy.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here is what the insurance company does not want you to understand: <strong>your policy
        excludes wear and tear as a <em>cause of loss</em>. It does not exclude coverage for
        property that happens to be in a worn condition.</strong> These are two completely different
        things, and the distinction is the key to defeating most &ldquo;wear and tear&rdquo;
        denials.
      </p>

      <CalloutBox variant="legal" title="Read the Exclusion — It Says &ldquo;Caused By&rdquo;">
        <p>
          Standard homeowner policies (HO-3, HO-5) exclude loss &ldquo;<strong>caused
          by</strong>&rdquo; wear and tear, deterioration, or inherent vice. The operative words
          are &ldquo;caused by.&rdquo; The exclusion applies when wear and tear is the <em>cause</em>{' '}
          of the loss — not when wear and tear is merely a <em>condition</em> of the property at the
          time a covered peril (wind, hail, falling objects) causes the damage.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Distinction That Changes Everything
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Consider a simple example. You have a 15-year-old roof. The shingles are aged — some granule
        loss, some minor curling at the edges. Then a windstorm with 60 mph gusts hits your area.
        Shingles are torn off. The roof is leaking.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurance company sends an engineer who writes: &ldquo;The shingles were in a
        deteriorated condition consistent with their age. The damage observed is consistent with
        wear and tear.&rdquo; Claim denied.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        But ask the right question: <strong>What was the cause of the loss?</strong>
      </p>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          Did the shingles spontaneously fall off because they were old? <strong>No.</strong> They
          were on the roof the day before the storm. They were functioning — keeping water out. They
          were not pretty, but they were doing their job.
        </li>
        <li>
          Did the wind blow them off? <strong>Yes.</strong> The shingles were on the roof before the
          wind. After the wind, they were gone. The wind caused the loss.
        </li>
        <li>
          Were the shingles more vulnerable to wind because of their age? <strong>Probably.</strong>{' '}
          A brand-new shingle might have survived the same gusts. But that does not change the
          cause. The shingles did not fail on their own. They failed because of wind.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the &ldquo;but for&rdquo; test: <strong>But for the wind, would the shingles have
        been damaged at that time?</strong> If the answer is no — the shingles would still be on the
        roof if the wind had not blown — then wind is the cause of loss, not wear and tear. The
        condition of the shingles may have made them more susceptible to wind, but susceptibility is
        not causation.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What the Policy Actually Says
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Let us look at the actual exclusion language. A standard HO-3 policy (ISO form) reads:
      </p>
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-6 text-gray-800 text-sm italic">
        <p className="mb-2">We do not insure for loss caused directly or indirectly by any of the following. Such loss is excluded regardless of any other cause or event contributing concurrently or in any sequence to the loss:</p>
        <p className="pl-4">Wear and tear, marring, deterioration</p>
      </div>
      <p className="text-gray-700 leading-relaxed mb-4">
        Notice the structure: &ldquo;We do not insure for <strong>loss caused</strong> ... by ...
        wear and tear.&rdquo; The exclusion is about what <em>caused</em> the loss. It is not about
        the condition of the property. The policy does not say &ldquo;We do not insure property
        that has experienced wear and tear.&rdquo; It does not say &ldquo;We do not insure
        property that is old.&rdquo; It does not say &ldquo;We do not insure property that is
        in less than perfect condition.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If it did say those things, no one would buy insurance — because every property experiences
        some degree of wear from the moment it is built. The exclusion would swallow the entire
        policy.
      </p>

      <CalloutBox variant="important" title="If Wear and Tear Excluded All Worn Property, No Claim Would Ever Be Paid">
        <p>
          Every roof ages. Every pipe corrodes. Every floor wears. If the mere presence of wear and
          tear were enough to deny a claim, the exclusion would eliminate coverage for every property
          that is not brand new. That is not what the exclusion means, and that is not how it
          operates. It excludes losses <em>caused by</em> deterioration — a shingle that
          crumbles and falls off on a calm day because it has reached the end of its useful life.
          It does not exclude storm damage to a shingle that happened to be old.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Wear and Tear as a Cause vs. Wear and Tear as a Condition
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The distinction is straightforward once you see it:
      </p>
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full bg-white border border-gray-200 text-sm">
          <thead>
            <tr className="bg-[#1F3964] text-white">
              <th className="px-4 py-3 text-left">Scenario</th>
              <th className="px-4 py-3 text-left">Cause of Loss</th>
              <th className="px-4 py-3 text-left">Covered?</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr className="border-b">
              <td className="px-4 py-3">Shingle crumbles and falls off on a calm day because it has deteriorated beyond function</td>
              <td className="px-4 py-3 font-medium">Wear and tear</td>
              <td className="px-4 py-3 text-red-700 font-semibold">No — excluded</td>
            </tr>
            <tr className="border-b bg-gray-50">
              <td className="px-4 py-3">Old, worn shingle is torn off by 60 mph wind</td>
              <td className="px-4 py-3 font-medium">Wind</td>
              <td className="px-4 py-3 text-green-700 font-semibold">Yes — covered</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-3">Pipe fitting slowly weeps and drips for weeks, gradually staining the ceiling — no sudden event, just ongoing seepage</td>
              <td className="px-4 py-3 font-medium">Deterioration (gradual, ongoing)</td>
              <td className="px-4 py-3 text-red-700 font-semibold">No — excluded</td>
            </tr>
            <tr className="border-b bg-gray-50">
              <td className="px-4 py-3">Corroded pipe inside a wall suddenly springs a leak — pipe was holding water the day before with no prior signs of failure</td>
              <td className="px-4 py-3 font-medium">Sudden and accidental discharge (corrosion is a condition, not a cause)</td>
              <td className="px-4 py-3 text-green-700 font-semibold">Yes — covered</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-3">15-year-old roof with granule loss sustains hail impacts</td>
              <td className="px-4 py-3 font-medium">Hail</td>
              <td className="px-4 py-3 text-green-700 font-semibold">Yes — covered</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-4 py-3">Aged sealant strip on shingles fails in high wind, shingles lift</td>
              <td className="px-4 py-3 font-medium">Wind (acting on weakened material)</td>
              <td className="px-4 py-3 text-green-700 font-semibold">Yes — covered</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-gray-700 leading-relaxed mb-4">
        In every &ldquo;covered&rdquo; scenario above, the property was in a worn condition — but
        wear and tear was not the cause of the loss. Something else — wind, hail, a sudden
        discharge of water — was the event that caused the damage. The worn condition may have
        made the property more <em>vulnerable</em> to the peril, but vulnerability is not causation.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The &ldquo;But For&rdquo; Test
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The simplest way to identify the cause of loss is the &ldquo;but for&rdquo; test:
      </p>
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
        <p className="text-[#1F3964] font-semibold text-lg mb-2">
          &ldquo;But for [the event], would the damage have occurred at that time?&rdquo;
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            <strong>But for the windstorm,</strong> would the shingles have blown off that day?
            No &rarr; Wind is the cause.
          </li>
          <li>
            <strong>But for the hailstorm,</strong> would the shingles have sustained those impacts?
            No &rarr; Hail is the cause.
          </li>
          <li>
            <strong>But for the fallen tree,</strong> would the roof have collapsed?
            No &rarr; The tree (windstorm) is the cause.
          </li>
        </ul>
      </div>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the answer is &ldquo;no — the damage would not have happened without the covered
        event&rdquo; — then the covered event is the cause of loss, regardless of the condition of
        the property. The wear and tear exclusion does not apply.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        California Law Supports This Reading
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California&apos;s efficient proximate cause doctrine reinforces this analysis. Under
        California law, when a loss involves both a covered cause and an excluded cause, the court
        looks to the <strong>efficient proximate cause</strong> — the predominant cause that set the
        loss in motion.
      </p>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          In <strong><em>Garvey v. State Farm</em></strong> (1989) 48 Cal.3d 395, the California
          Supreme Court held that coverage cannot be denied when a covered peril is the efficient
          proximate cause, even if an excluded condition contributed.
        </li>
        <li>
          In <strong><em>Julian v. Hartford Underwriters Ins. Co.</em></strong> (2005) 35 Cal.4th 747,
          the Court reaffirmed that the efficient proximate cause doctrine applies even when the
          policy contains anti-concurrent causation language, where a covered peril is the predominant
          cause.
        </li>
        <li>
          <strong>California Insurance Code &sect; 530</strong> establishes the proximate-cause
          rule for insurance: &ldquo;An insurer is liable for a loss of which a peril insured
          against was the proximate cause, although a peril not contemplated by the contract may
          have been a remote cause of the loss; but he is not liable for a loss of which the peril
          insured against was only a remote cause.&rdquo; The classic common-law definition of
          proximate cause &mdash; widely cited in California courts and reflected in CACI 2306
          (the standard jury instruction on efficient proximate cause) &mdash; is &ldquo;the cause
          which, in a natural and continuous sequence, unbroken by any new independent cause,
          produces the event, and without which that event would not have occurred.&rdquo; Read
          together, &sect; 530 codifies the rule (the insurer is liable if a covered peril was the
          proximate cause), and the common-law / CACI formulation supplies the test for what
          &ldquo;proximate cause&rdquo; means in practice.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under this framework, a windstorm that blows off aged shingles is straightforward: wind is
        the efficient proximate cause. The age of the shingles is a pre-existing condition, not a
        competing cause. The carrier cannot use the wear and tear exclusion to deny a wind loss
        simply because the wind happened to damage old materials.
      </p>

      <CalloutBox variant="legal" title="Anti-Concurrent Causation Clauses Do not Save the Carrier Here">
        <p>
          Many policies include anti-concurrent causation (ACC) language that attempts to deny
          coverage when an excluded cause contributes &ldquo;in any sequence&rdquo; to the loss.
          But California courts have limited the reach of ACC clauses. More importantly, ACC clauses
          address situations where two independent <em>causes</em> are at work — they do not apply
          when wear and tear is merely a <em>condition</em> of the property, not an independent
          cause operating alongside the covered peril. A worn shingle being blown off by wind is
          one cause (wind), not two competing causes.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Carriers Misapply the Exclusion
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance companies and their engineers routinely conflate the condition of the property with
        the cause of the loss. Here are the most common misapplications:
      </p>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>&ldquo;The shingles were in a deteriorated condition.&rdquo;</strong> — This
          describes the condition of the property, not the cause of the loss. The question is not
          whether the shingles were deteriorated. The question is what caused them to fail <em>now</em>.
        </li>
        <li>
          <strong>&ldquo;The damage is consistent with age-related wear.&rdquo;</strong> — Even if
          some damage on the roof is attributable to age, that does not mean the specific damage
          being claimed was caused by age. Storm damage can exist on the same roof as pre-existing
          wear. See our guide on{' '}
          <Link href="/resources/pre-existing-vs-storm-damage" className="text-[#2E74B5] hover:underline">
            distinguishing pre-existing damage from storm damage
          </Link>.
        </li>
        <li>
          <strong>&ldquo;The shingles had reached the end of their useful life.&rdquo;</strong> —
          An opinion about remaining useful life is not a finding about the cause of the current
          loss. A shingle at the end of its useful life can still be damaged by a storm, and that
          storm damage is still covered.
        </li>
        <li>
          <strong>&ldquo;The sealant strip had failed due to aging.&rdquo;</strong> — Sealant strip
          adhesion weakens over time on all shingles. But a shingle with weak sealant does not
          blow off in calm conditions — it blows off when wind acts on it. The cause of loss is
          still wind.
        </li>
        <li>
          <strong>&ldquo;A new roof would have withstood this wind event.&rdquo;</strong> — This is
          irrelevant. Your policy insures <em>your</em> roof, not a hypothetical new roof. The
          carrier collected premiums to cover your actual property in its actual condition.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Depreciation Is the Right Tool — Not Denial
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the carrier wants to account for the age and condition of the roof, the appropriate
        mechanism is <strong>depreciation</strong> — not denial. Depreciation reduces the initial
        payment (ACV) to reflect the age and condition of the materials, while still acknowledging
        that a covered loss occurred and paying for it.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Under an RCV policy, the carrier pays ACV first (replacement cost minus depreciation), then
          pays the withheld depreciation when you complete repairs.
        </li>
        <li>
          Under an ACV policy, the carrier pays the depreciated value — which accounts for the age
          of the materials.
        </li>
        <li>
          Either way, the claim is <em>paid</em>. Depreciation is the policy&apos;s built-in method
          for handling age. Denial is not.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a carrier denies a claim entirely as &ldquo;wear and tear&rdquo; — rather than paying
        the claim with appropriate depreciation — they are substituting denial for depreciation. They
        are using the exclusion to do something it was never designed to do: avoid paying a legitimate
        storm loss on property that happens to be old. See our guide on{' '}
        <Link href="/resources/acv-rcv" className="text-[#2E74B5] hover:underline">
          ACV vs. RCV
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Fight a &ldquo;Wear and Tear&rdquo; Denial
      </h2>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Reframe the question.</strong> The issue is not whether wear and tear exists on
          the property. It always does. The issue is: what <em>caused</em> the damage you are
          claiming? If a covered peril (wind, hail, falling object) caused the damage, the wear
          and tear exclusion does not apply.
        </li>
        <li>
          <strong>Apply the &ldquo;but for&rdquo; test.</strong> But for the storm event, would the
          damage have occurred at that time? If the answer is no, the storm — not wear and tear —
          is the cause of loss.
        </li>
        <li>
          <strong>Cite the policy language.</strong> Quote the exclusion back to the carrier. Point
          out that it excludes loss &ldquo;caused by&rdquo; wear and tear — and that the loss was
          caused by wind/hail/the covered peril, not by deterioration.
        </li>
        <li>
          <strong>Get an independent expert.</strong> A qualified roofing consultant or independent
          engineer can inspect the roof and opine on the cause of loss — distinguishing storm
          damage from age-related deterioration. See our guides on{' '}
          <Link href="/resources/defeating-carrier-engineers" className="text-[#2E74B5] hover:underline">
            defeating carrier engineer reports
          </Link>{' '}
          and{' '}
          <Link href="/resources/hail-damage-science" className="text-[#2E74B5] hover:underline">
            the science of hail damage
          </Link>.
        </li>
        <li>
          <strong>Document the storm event.</strong> Weather data (NOAA reports, hail verification,
          wind speed records) objectively confirms that a covered peril occurred. If 60 mph winds
          hit your area and your shingles are gone, the cause is apparent.
        </li>
        <li>
          <strong>Point out that the property was functioning before the storm.</strong> The single
          most powerful fact: the roof was keeping water out before the storm. After the storm, it
          was not. Something changed — and that something was the storm.
        </li>
        <li>
          <strong>Argue depreciation, not denial.</strong> If the carrier insists on accounting for
          age, demand that they do so through depreciation (paying ACV) rather than denial (paying
          nothing). The policy provides a mechanism for accounting for age. That mechanism is
          depreciation, not the wear and tear exclusion.
        </li>
        <li>
          <strong>Cite California law.</strong> The efficient proximate cause doctrine, Insurance
          Code &sect; 530, and the burden-of-proof requirements all support coverage when a covered
          peril is the cause of loss.
        </li>
      </ol>

      <CalloutBox variant="warning" title="The Carrier Collected Premiums on This Roof">
        <p>
          The insurance company knew the age of your roof when they underwrote the policy. They
          inspected it (or could have). They set the premium based on the property&apos;s actual
          condition. They collected those premiums year after year. They do not get to accept
          premium payments on a 15-year-old roof and then deny claims on that same roof because it
          is 15 years old. The time to refuse coverage was at underwriting — not at claim time.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When Wear and Tear Actually <em>Is</em> the Cause of Loss
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        To be clear, the wear and tear exclusion does have legitimate applications. It correctly
        applies when:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          A roof fails gradually over time with no storm event — shingles curling, cracking, and
          eventually allowing water intrusion as a natural progression of aging
        </li>
        <li>
          A pipe connection under a sink slowly seeps over months, leaving visible mineral
          deposits and staining — the failure is gradual and ongoing, not sudden
        </li>
        <li>
          Siding deteriorates and warps from prolonged sun exposure, not from any specific weather
          event
        </li>
        <li>
          A water heater rusts through and leaks as a result of age and mineral buildup
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        In all of these cases, there is no covered event. The deterioration itself is the cause of
        the loss. The exclusion correctly applies. But the moment a covered peril — wind, hail,
        fire, a falling tree — enters the picture and causes the damage, the analysis changes
        entirely. The exclusion is about what caused the damage, not what condition the property
        was in when the damage occurred.
      </p>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Claim Denied as &ldquo;Wear and Tear&rdquo;?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          If your insurer denied your claim by calling storm damage &ldquo;wear and tear,&rdquo;
          they may be misapplying the exclusion. A Public Adjuster can analyze your policy language,
          identify the actual cause of loss, and build the case to overturn the denial.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Request a Free Claim Review →
        </Link>
      </div>

      <hr className="my-8 border-gray-300" />
      <p className="text-sm text-gray-500 italic">
        This article is for informational purposes only and does not constitute legal advice. Insurance
        policies and applicable law vary by state and by policy form. Consult with a licensed
        professional regarding your specific situation.
      </p>
    </>
  )
}
