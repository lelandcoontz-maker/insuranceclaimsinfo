import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Insurance Non-Renewal and Cancellation in California: Your Rights When Your Carrier Drops You',
  description:
    'California law gives homeowners significant protections when an insurer cancels or non-renews their policy. Learn the notice requirements, moratorium rules, and your options when your carrier drops you.',
  summary:
    'California gives homeowners real protections when an insurer cancels or non-renews, including advance notice requirements and post-disaster moratoriums. Know the notice rules and your options when a carrier drops you.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="Disclaimer">
        <p>
          This article is for educational purposes only and does not constitute legal or insurance
          advice. Insurance law changes frequently, especially after declared disasters. For
          guidance on your specific situation, consult a licensed insurance professional or an
          attorney experienced in California insurance regulation.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        Receiving a notice that your insurance company is dropping you is alarming &mdash;
        especially when you have a mortgage, live in a fire-prone area, or have just been through
        a loss. But California has some of the strongest policyholder protections in the country
        on cancellation and non-renewal. Understanding those protections &mdash; and
        the critical difference between cancellation and non-renewal &mdash; is the first step
        toward protecting yourself.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Cancellation vs. Non-Renewal: Two Different Things
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        These terms are often used interchangeably, but they are legally distinct, and the rules
        governing each are different.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Cancellation</strong> is when the insurer terminates your policy in the middle
          of its term &mdash; before the expiration date. This is harder for the insurer to do
          and is subject to strict limitations.
        </li>
        <li>
          <strong>Non-renewal</strong> is when the insurer decides not to offer you a new policy
          when your current term expires. This is more common and, while subject to notice
          requirements, gives the insurer broader discretion.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Cancellation Rules: Insurance Code &sect; 676
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California <strong>Insurance Code &sect; 676</strong> governs mid-term cancellation of
        property insurance policies. After a policy has been in effect for a specified period, the
        insurer&rsquo;s ability to cancel is severely limited. Key provisions include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Written notice required:</strong> The insurer must provide written notice of
          cancellation, mailed to the policyholder&rsquo;s last known address. The notice must
          state the reason for cancellation.
        </li>
        <li>
          <strong>Minimum notice period:</strong> The insurer must give at least 30 days&rsquo;
          notice for most cancellations (10 days for non-payment of premium).
        </li>
        <li>
          <strong>Limited grounds after 60 days:</strong> After the policy has been in effect for
          60 days (or from inception if it is a renewal), the insurer can only cancel for specific
          reasons &mdash; primarily non-payment of premium, fraud or material misrepresentation,
          or a substantial increase in the hazard insured against that the policyholder controls.
        </li>
      </ul>

      <CalloutBox variant="important" title="Cancellation for Filing a Claim Is Restricted">
        <p>
          California law significantly limits an insurer&rsquo;s ability to cancel your policy
          simply because you filed a claim. Under <strong>Insurance Code &sect; 676</strong>,
          after the first 60 days, the insurer cannot cancel merely because you used the
          coverage you paid for. If your insurer cancels your policy mid-term shortly after
          you file a claim, contact the California Department of Insurance (CDI) immediately.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Non-Renewal Rules: Insurance Code &sect; 678
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Non-renewal is more common than cancellation and is governed by <strong>Insurance Code
        &sect; 678</strong>. The insurer has broader discretion to non-renew, but must follow
        specific notice requirements:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>75 days&rsquo; written notice:</strong> The insurer must provide written notice
          of non-renewal at least 75 days before the policy&rsquo;s expiration date. If the
          insurer fails to provide this notice, the policy automatically renews on the same terms
          and conditions for the next policy period.
        </li>
        <li>
          <strong>One-year moratorium after declared wildfire emergency:</strong> Under Cal. Ins.
          Code &sect; 675.1(b) (added by SB 824, 2018), an insurer cannot cancel or refuse to
          renew residential property policies in ZIP codes within or adjacent to the fire
          perimeter for one year after a state-of-emergency declaration, based solely on the
          property&rsquo;s location. The 75-day pre-expiration notice rule remains; the moratorium
          stacks on top of it, so a notice cannot validly be sent until the one-year window has
          passed.
        </li>
        <li>
          <strong>Reason must be stated:</strong> The non-renewal notice must include the actual
          reason for the non-renewal. Vague or boilerplate language does not satisfy this
          requirement.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Moratorium Rules After Declared Disasters
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        One of California&rsquo;s most important policyholder protections is the Commissioner&rsquo;s
        authority to impose moratoriums on cancellations and non-renewals after a declared disaster.
        When the Governor declares a state of emergency, the California Department of Insurance (CDI)
        can &mdash; and routinely does &mdash; issue a moratorium that prohibits insurers from
        non-renewing or cancelling policies in the affected area for a specified period, typically
        one year from the date of the disaster declaration.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        After the January 2025 Palisades and Eaton fires, CDI imposed a moratorium on non-renewals
        and cancellations for policyholders in the affected ZIP codes. This moratorium applied not
        only to homeowners whose properties were damaged but also to homeowners in the broader
        affected area whose properties were not directly damaged &mdash; recognizing that a
        wave of non-renewals in a disaster zone would compound the harm.
      </p>

      <CalloutBox variant="warning" title="Moratoriums Are Temporary">
        <p>
          A moratorium delays non-renewal &mdash; it does not prevent it permanently. When the
          moratorium expires, the insurer can non-renew your policy with proper notice. Use the
          moratorium period to actively shop for replacement coverage. Do not wait until the
          moratorium lifts to start looking.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        AB 2700 and Expanded Non-Renewal Protections
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        In response to the accelerating insurance crisis, the California Legislature has passed
        several bills expanding protections for policyholders facing non-renewal. <strong>AB
        2700</strong> and related legislation have broadened the scope of non-renewal moratoriums,
        extended the time periods during which insurers are restricted from non-renewing after a
        disaster, and imposed additional requirements on insurers to demonstrate that their
        underwriting decisions are not based solely on geographic wildfire risk without
        consideration of mitigation efforts by the homeowner.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        These legislative efforts reflect California&rsquo;s evolving approach to balancing
        insurer solvency concerns with the reality that hundreds of thousands of homeowners are
        losing access to the private insurance market. The specifics of each bill&rsquo;s
        protections change with each legislative session, so check the current status of any
        legislation before relying on it.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Can They Drop You for Filing a Claim?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is one of the most common questions homeowners ask, and the answer under California
        law is nuanced. While an insurer generally cannot cancel your policy mid-term solely
        because you filed a claim (per the restrictions in &sect; 676), non-renewal at the end of
        the term is a different matter. Insurers have broader discretion to non-renew, and a claims
        history &mdash; even a single large claim &mdash; can be a factor in that decision.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        However, California has imposed some limits here as well. Insurers cannot non-renew based
        solely on a single claim for a loss that was not the policyholder&rsquo;s fault &mdash;
        such as a wildfire or other natural disaster. The insurer must have a legitimate
        underwriting reason beyond the mere fact that a claim was filed. If you believe you were
        non-renewed in retaliation for filing a claim, file a complaint with CDI.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Pending Claims: What Happens When They Drop You Mid-Claim?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        One of the most anxiety-inducing scenarios for policyholders is receiving a non-renewal
        notice while a claim is still open and unpaid. The question is immediate and visceral:
        if they are dropping me, do they still have to pay my claim?
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The answer is <strong>yes</strong> &mdash; unequivocally. Non-renewal or cancellation
        does <strong>not</strong> extinguish the insurer&rsquo;s obligation on a claim that
        arose during the policy period. Your loss occurred while coverage was in force. The
        claim vested at the moment of the loss. The insurer owes on that claim regardless of
        what happens to the policy afterward. This is basic contract law: the insurer&rsquo;s
        obligation to indemnify is fixed at the time of the covered loss, not at the time of
        payment.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>California Insurance Code &sect; 663.5(b)</strong> adds a specific protection:
        no insurer shall fail to renew a policy <em>solely</em> on the grounds that a claim is
        pending under the policy. The word &ldquo;solely&rdquo; is the operative qualifier
        &mdash; the carrier can non-renew for other legitimate underwriting reasons (overall
        loss history, geographic risk changes, market withdrawal) even while a claim is pending.
        But it cannot make the pending claim the sole reason for non-renewal.
      </p>

      <CalloutBox variant="important" title="Your Claim Survives Non-Renewal">
        <p>
          If your insurer non-renews your policy while you have an open claim, the non-renewal
          does not affect the claim. The carrier must still investigate, adjust, and pay the
          claim according to the policy terms and{' '}
          <Link href="/resources/california-fair-claims" className="text-blue-700 underline hover:text-blue-900">
            Fair Claims Settlement Practices Regulations
          </Link>. If the carrier suggests otherwise &mdash; that the non-renewal affects your
          claim or that you need to &ldquo;hurry up&rdquo; to settle before the policy expires
          &mdash; that is a misrepresentation of your rights and potentially{' '}
          <Link href="/resources/bad-faith" className="text-blue-700 underline hover:text-blue-900">
            bad faith
          </Link>.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        In practice, however, this situation creates real problems. The carrier that is dropping
        you has little incentive to handle your claim generously. It has no future relationship
        to preserve with you. And some carriers use the non-renewal as implicit leverage &mdash;
        never saying outright that the claim and the non-renewal are connected, but creating a
        climate where the policyholder feels pressured to accept a quick, low settlement before
        losing coverage entirely. If you find yourself in this position, document every
        communication carefully. If you believe the non-renewal is retaliatory &mdash; a
        consequence of filing the claim &mdash; file a complaint with CDI citing &sect; 663.5(b).
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Unrepaired Property Catch-22
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        One of the cruelest scenarios in California insurance is when a policyholder with an
        open claim receives a non-renewal notice while their home is still damaged and
        unrepaired. The carrier has not yet paid enough &mdash; or anything at all &mdash; to
        fund the repairs, so the property sits in its damaged condition. When the policyholder
        tries to find replacement coverage from a new carrier, they discover that no insurer
        will write a policy on a damaged, unrepaired home. The policyholder is trapped:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          They cannot repair the home because the insurer has not paid the claim
        </li>
        <li>
          They cannot get new insurance because the home is unrepaired
        </li>
        <li>
          Without insurance, they may be in default on their mortgage
        </li>
        <li>
          The lender may force-place an expensive, limited policy that does not cover the
          existing damage
        </li>
      </ul>

      <CalloutBox variant="warning" title="The Unrepaired Home Trap">
        <p>
          If your insurer non-renews you while your home is damaged and unpaid, you face a
          coverage gap that no amount of shopping can fix. The{' '}
          <Link href="/resources/california-fair-plan" className="text-blue-700 underline hover:text-blue-900">
            California FAIR Plan
          </Link>{' '}
          may be your only option, but even the FAIR Plan may impose conditions or limitations
          on unrepaired properties. Document the carrier&apos;s failure to pay &mdash; this
          timeline becomes powerful evidence of{' '}
          <Link href="/resources/bad-faith" className="text-blue-700 underline hover:text-blue-900">
            bad faith
          </Link>{' '}
          if the carrier&apos;s own delay in paying the claim is what created the insurability
          problem.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        This situation is not theoretical. After the 2025 Palisades and Eaton fires, thousands
        of policyholders found themselves in exactly this position &mdash; homes partially
        damaged, claims underpaid or delayed, and carriers issuing non-renewal notices. The
        combination of the carrier&apos;s delay in paying and the non-renewal notice creates
        a cascading failure that leaves the policyholder worse off at every step. If the
        carrier&apos;s own conduct &mdash; failing to promptly investigate, adjust, and pay
        the claim under the{' '}
        <Link href="/resources/california-fair-claims" className="text-blue-700 underline hover:text-blue-900">
          Fair Claims Settlement Practices Regulations
        </Link>{' '}
        &mdash; is what prevented the policyholder from repairing the home before the
        non-renewal took effect, that is a strong indicator of bad faith. The carrier
        cannot create the problem and then walk away from it.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What to Do When You Receive a Non-Renewal Notice
      </h2>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Verify the notice period.</strong> Count the days from when the notice was
          mailed (not received) to your policy expiration. If the insurer did not provide at
          least 75 days&rsquo; notice under Cal. Ins. Code &sect; 678(c)(1), the non-renewal may
          be invalid and the policy may automatically renew. If a one-year wildfire-emergency
          moratorium under &sect; 675.1(b) is in effect for the property&rsquo;s ZIP code, the
          notice may also be prohibited entirely until the moratorium passes.
        </li>
        <li>
          <strong>Check for active moratoriums.</strong> Visit the CDI website to determine
          whether a moratorium is in effect for your area. If it is, the non-renewal may be
          prohibited during the moratorium period.
        </li>
        <li>
          <strong>Start shopping immediately.</strong> Contact multiple brokers &mdash; not just
          your current agent. Independent brokers have access to a wider range of carriers and
          can access surplus lines markets. Do not wait until the last week.
        </li>
        <li>
          <strong>Apply to the California FAIR Plan.</strong> If you cannot find coverage in the
          private market, the{' '}
          <Link href="/resources/california-fair-plan" className="text-blue-700 underline hover:text-blue-900">
            California FAIR Plan
          </Link>{' '}
          is your safety net. Apply early &mdash; processing times can be long, especially after
          major disasters. You will likely also need a DIC (Difference in Conditions) policy to
          fill the gaps in FAIR Plan coverage.
        </li>
        <li>
          <strong>Consider surplus lines.</strong> Surplus lines (non-admitted) carriers are not
          subject to the same rate regulations as admitted carriers, which means they can price
          risk individually and may write policies that admitted carriers will not. The premiums
          are higher, but coverage is available. Your broker must specifically access the surplus
          lines market for you.
        </li>
        <li>
          <strong>Do not let your coverage lapse.</strong> A gap in insurance coverage can trigger
          your mortgage lender to{' '}
          <Link href="/resources/force-placed-insurance" className="text-blue-700 underline hover:text-blue-900">
            force-place insurance
          </Link>{' '}
          on your property. Force-placed insurance is extremely expensive, covers only the
          lender&rsquo;s interest, and provides no protection for your personal property,
          liability, or living expenses.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Bigger Picture: California&rsquo;s Insurance Crisis
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Non-renewals are not isolated incidents &mdash; they are part of a systemic contraction in
        California&rsquo;s property insurance market. Major carriers have pulled back from the
        state, FAIR Plan enrollment has surged past 450,000 policies, and premiums for those who
        can find coverage have skyrocketed. Understanding the broader context of{' '}
        <Link href="/resources/california-insurance-crisis" className="text-blue-700 underline hover:text-blue-900">
          California&rsquo;s insurance crisis
        </Link>{' '}
        helps you make better decisions about your own coverage strategy.
      </p>

      <CalloutBox variant="tip" title="File a CDI Complaint If Your Rights Are Violated">
        <p>
          The California Department of Insurance accepts complaints online. If your insurer
          failed to provide proper notice, non-renewed during a moratorium, or cancelled in
          violation of Insurance Code restrictions, file a complaint at{' '}
          <strong>www.insurance.ca.gov</strong>. CDI has enforcement authority and can order an
          insurer to reinstate a policy that was improperly cancelled or non-renewed.
        </p>
      </CalloutBox>

      <hr className="my-8 border-gray-200" />

      <p className="text-sm text-gray-500 leading-relaxed mb-4">
        This article is for educational purposes only and does not constitute legal or insurance
        advice. Insurance regulations and legislative protections change frequently, especially
        in the current California market. For guidance on your specific situation, consult a
        licensed insurance professional or an attorney experienced in California insurance law.
      </p>
      <p className="text-sm text-gray-500 leading-relaxed">
        Written by Leland Coontz III, Licensed Public Adjuster, CA License #2B53445.
      </p>
    </>
  )
}
