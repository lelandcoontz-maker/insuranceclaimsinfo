import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'
import { QABlock } from '@/components/content/QABlock'

export const meta = {
  title: 'When Your Insurance Company Fails: The Guaranty Fund Safety Net and Its Limits',
  description:
    'What happens when an insurance company becomes insolvent in California. How the California Insurance Guarantee Association (CIGA) works, the $500,000 cap, covered and non-covered claims, and how to protect yourself.',
  summary:
    'When a California insurer fails, CIGA acts as a safety net but caps covered claims (generally $500,000) and excludes some claims and surplus lines carriers. Understand what is and is not protected so an insolvency does not blindside you.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance is built on a promise: pay your premiums, and the company will be there
        when disaster strikes. But insurance companies are businesses, and businesses can
        fail. When an insurer becomes insolvent &mdash; when it can no longer pay its
        obligations and is placed into liquidation by the state &mdash; policyholders are
        left wondering whether their coverage means anything at all.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The answer is complicated. California has a safety net for policyholders of insolvent
        insurers, but that safety net has significant gaps, caps, and limitations that every
        policyholder should understand &mdash; preferably before a failure occurs.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Insurance Company Insolvency Works
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance companies in California are regulated by the California Department of
        Insurance (CDI). The CDI monitors insurers&rsquo; financial health, requiring them
        to maintain minimum capital and surplus levels. When an insurer&rsquo;s financial
        condition deteriorates to the point where it can no longer meet its obligations,
        the CDI initiates a formal process.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Conservation and Rehabilitation
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Before an insurer is liquidated, the Insurance Commissioner may seek a court order
        to place the company into &ldquo;conservation&rdquo; or &ldquo;rehabilitation.&rdquo;
        During conservation, the CDI takes control of the company&rsquo;s operations and
        attempts to stabilize its finances. If the company can be rehabilitated &mdash;
        restructured to resume normal operations &mdash; policyholders may never experience
        a disruption in coverage.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        But rehabilitation is not always possible. If the insurer&rsquo;s liabilities exceed
        its assets by a substantial margin, the next step is liquidation.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Liquidation
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When the Insurance Commissioner determines that an insurer cannot be rehabilitated,
        the Commissioner petitions the court for an order of liquidation under California
        Insurance Code &sect;1016. The court appoints the Commissioner as liquidator. All
        policies issued by the insolvent insurer are cancelled &mdash; typically with 30
        days&rsquo; notice &mdash; and the company&rsquo;s remaining assets are marshalled
        to pay claims in a priority order established by statute (Insurance Code &sect;1033).
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In practice, the insolvent insurer&rsquo;s remaining assets rarely cover all
        outstanding claims. Policyholders with pending claims may receive only a fraction of
        what they are owed from the insurer&rsquo;s estate &mdash; sometimes nothing at all.
        This is where the guaranty fund system becomes critical.
      </p>

      <CalloutBox variant="warning" title="Policy Cancellation Is Immediate">
        <p>
          When an insurer is placed into liquidation, all of its policies are cancelled.
          Policyholders must obtain replacement coverage immediately. The guaranty fund
          does not provide ongoing insurance &mdash; it only addresses claims that were
          already pending or losses that occurred before the cancellation date.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The California Insurance Guarantee Association (CIGA)
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The California Insurance Guarantee Association was established under the California
        Insurance Guarantee Association Act (Insurance Code &sect;1063 et seq.) to provide
        a limited safety net for policyholders when their property and casualty insurer
        becomes insolvent. CIGA is not a government agency and is not funded by taxpayer
        dollars. It is a nonprofit association funded by assessments on all admitted property
        and casualty insurers doing business in California.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When an admitted insurer is ordered into liquidation, CIGA steps in to handle
        &ldquo;covered claims&rdquo; &mdash; but only within specific limits and subject
        to numerous exclusions.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The $500,000 Cap
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        CIGA&rsquo;s maximum obligation per covered claim is $500,000 (Insurance Code
        &sect;1063.1(c)(1)). This cap applies to the total amount payable on a claim,
        including all coverages under the policy. For many homeowners, this cap is adequate.
        But for policyholders with high-value homes, significant personal property, or
        large additional living expense needs, the $500,000 cap can leave a substantial gap.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Consider a homeowner whose property was insured for $1.2 million in dwelling coverage,
        with $600,000 in personal property and $240,000 in additional living expenses. If the
        insurer becomes insolvent while that homeowner has a total loss claim pending, CIGA
        will pay a maximum of $500,000 &mdash; leaving the policyholder with potentially
        hundreds of thousands of dollars in unrecovered losses.
      </p>

      <CalloutBox variant="important" title="The Cap Is Per Claim, Not Per Coverage">
        <p>
          The $500,000 cap applies to the entire claim &mdash; dwelling, personal property,
          additional living expenses, and all other coverages combined. It is not $500,000 per
          coverage category. Policyholders with substantial losses may recover far less than
          what their policy would have paid.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        What CIGA Covers
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        CIGA covers &ldquo;covered claims&rdquo; as defined in Insurance Code &sect;1063.1.
        A covered claim must meet several requirements:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          The claim must arise under a policy issued by an &ldquo;admitted&rdquo; insurer
          &mdash; one that was licensed by the CDI to do business in California
        </li>
        <li>
          The claim must be a &ldquo;covered claim&rdquo; under the policy &mdash; meaning
          the loss must be one that the policy actually covers
        </li>
        <li>
          The loss must have occurred before the date the insurer was ordered into liquidation
          (or during the 30-day notice period for policy cancellation)
        </li>
        <li>
          The claimant must be a California resident at the time of the loss, or the
          property must be located in California
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        What CIGA Does Not Cover
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The exclusions from CIGA coverage are substantial and represent some of the most
        significant risks policyholders face:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Surplus lines policies</strong> &mdash; Policies issued by non-admitted
          (surplus lines) insurers are not covered by CIGA. This is a critical gap, because
          in California&rsquo;s current market, many policyholders &mdash; particularly those
          in wildfire-prone areas &mdash; have been pushed into surplus lines coverage after
          being non-renewed by admitted carriers. These policyholders have no guaranty fund
          protection whatsoever.
        </li>
        <li>
          <strong>Amounts exceeding the $500,000 cap</strong> &mdash; Any portion of a
          claim that exceeds $500,000 is not covered.
        </li>
        <li>
          <strong>Unearned premium refunds above $10,000</strong> &mdash; If the insurer
          goes into liquidation mid-term, the policyholder may be entitled to a refund of
          unearned premiums, but CIGA&rsquo;s obligation for premium refunds is capped at
          $10,000.
        </li>
        <li>
          <strong>Punitive or exemplary damages</strong> &mdash; Penalties and punitive
          damages are excluded.
        </li>
        <li>
          <strong>Claims by large commercial entities</strong> &mdash; Certain large
          commercial policyholders are excluded from CIGA coverage based on net worth
          thresholds.
        </li>
        <li>
          <strong>Workers&rsquo; compensation claims</strong> &mdash; These are handled
          by a separate guaranty fund, the California Insurance Guarantee Association for
          Workers&rsquo; Compensation (a separate entity despite the similar name).
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Claims Process Through CIGA
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When an insurer is ordered into liquidation and CIGA takes over covered claims,
        the process differs significantly from a normal insurance claim:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Filing and Documentation
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Policyholders with pending claims against the insolvent insurer must file a proof
        of claim with the liquidator. CIGA will then evaluate whether the claim qualifies
        as a &ldquo;covered claim&rdquo; under the statute. Documentation that was submitted
        to the insolvent insurer may or may not transfer to CIGA &mdash; policyholders should
        maintain their own complete copies of all claim documentation, correspondence, estimates,
        and supporting materials.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Time Limits
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        CIGA&rsquo;s statutory obligations are subject to specific time constraints. The
        liquidation order will establish deadlines for filing proofs of claim. Missing these
        deadlines can result in permanent forfeiture of the claim. Policyholders should treat
        any notice from the liquidator or CIGA with urgency and respond within the stated
        timeframes.
      </p>

      <CalloutBox variant="warning" title="Do Not Miss the Filing Deadline">
        <p>
          The deadline for filing a proof of claim against an insolvent insurer is strictly
          enforced. Policyholders who miss the deadline may lose their right to recover
          anything &mdash; from CIGA or from the insurer&rsquo;s remaining assets. If you
          receive a notice of insolvency, act immediately.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Delays and Reduced Service
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        CIGA handles claims for multiple insolvent insurers simultaneously, and its resources
        are limited. Policyholders should expect the claims process through CIGA to be slower
        and less responsive than dealing with an operating insurer. CIGA does not have the
        same staffing, systems, or customer service infrastructure as a functioning insurance
        company.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Additionally, CIGA has broad discretion in how it handles covered claims, including
        the ability to settle claims for amounts it deems appropriate within the statutory
        framework. The Fair Claims Settlement Practices Regulations (10 CCR &sect;2695 et seq.)
        apply to CIGA&rsquo;s claims handling, but the practical reality is that disputing
        CIGA&rsquo;s decisions can be more difficult than disputing a regular insurer&rsquo;s
        decisions.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Policyholders Lose When Their Carrier Goes Insolvent
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Even with CIGA protection, insurer insolvency imposes real costs on policyholders:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Coverage gaps</strong> &mdash; The policy is cancelled, and the
          policyholder must find replacement coverage immediately. In today&rsquo;s
          California market, finding affordable replacement coverage can be extremely
          difficult, particularly for policyholders in wildfire-prone areas.
        </li>
        <li>
          <strong>Amounts above the cap</strong> &mdash; Any claim value exceeding
          $500,000 is simply lost. For total loss claims on high-value properties, this
          can represent hundreds of thousands of dollars.
        </li>
        <li>
          <strong>Bad faith remedies</strong> &mdash; If the insolvent insurer was
          handling the claim in bad faith before it went under, the policyholder loses the
          ability to pursue{' '}
          <Link href="/resources/bad-faith" className="text-[#2E74B5] underline">
            bad faith damages
          </Link>{' '}
          against the now-defunct company. CIGA does not assume liability for the insolvent
          insurer&rsquo;s bad faith conduct.
        </li>
        <li>
          <strong>Delay and uncertainty</strong> &mdash; The liquidation process can take
          years. Policyholders who need funds to rebuild after a loss may wait far longer
          for CIGA payments than they would have waited from a functioning insurer.
        </li>
        <li>
          <strong>Negotiating leverage</strong> &mdash; With a functioning insurer,
          policyholders have tools: the{' '}
          <Link href="/resources/appraisal" className="text-[#2E74B5] underline">
            appraisal process
          </Link>
          , CDI complaints, litigation, and the threat of bad faith damages. With CIGA,
          many of these leverage points are diminished or eliminated.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Surplus Lines Gap
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Perhaps the most alarming gap in the guaranty fund system is the complete absence
        of protection for policyholders with surplus lines coverage. Surplus lines insurers
        &mdash; also called non-admitted insurers or &ldquo;excess and surplus&rdquo; carriers
        &mdash; are not members of CIGA and are not required to participate in any guaranty
        fund.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This matters enormously in the current California insurance landscape. As admitted
        carriers have pulled back from wildfire-prone areas, thousands of homeowners have been
        forced to obtain coverage through the surplus lines market. These policies typically
        carry higher premiums and fewer consumer protections than admitted policies. And if
        the surplus lines carrier becomes insolvent, the policyholder has no guaranty fund
        backstop at all.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Policyholders with surplus lines coverage should be particularly attentive to the
        financial health of their insurer, because there is no safety net if that company fails.
      </p>

      <CalloutBox variant="important" title="Surplus Lines = No Guaranty Fund">
        <p>
          If your policy is issued by a surplus lines (non-admitted) insurer, you are not
          protected by CIGA or any other guaranty fund. If that carrier becomes insolvent,
          you may recover nothing. Check your policy&rsquo;s declarations page to determine
          whether your insurer is admitted or non-admitted. Surplus lines policies typically
          include a disclosure stating that the policy is not covered by the guaranty fund.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Check Your Carrier&rsquo;s Financial Strength
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The best time to worry about insurer insolvency is before it happens. Policyholders
        can assess their carrier&rsquo;s financial health using several resources:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>A.M. Best ratings</strong> &mdash; A.M. Best is the most widely recognized
          rating agency for insurance company financial strength. Ratings range from A++ (Superior)
          to F (In Liquidation). A rating of B+ or lower warrants attention, and a rating below
          B- is a serious warning sign. A.M. Best ratings are available on their website
          (ambest.com).
        </li>
        <li>
          <strong>Standard &amp; Poor&rsquo;s (S&amp;P) and Moody&rsquo;s</strong> &mdash;
          These agencies also rate insurer financial strength, though their coverage of smaller
          carriers may be limited.
        </li>
        <li>
          <strong>NAIC data</strong> &mdash; The National Association of Insurance Commissioners
          maintains financial data on all insurance companies. The NAIC&rsquo;s Insurance
          Regulatory Information System (IRIS) tracks key financial ratios that regulators use
          to identify financially troubled companies.
        </li>
        <li>
          <strong>CDI company profile search</strong> &mdash; The California Department of
          Insurance website (insurance.ca.gov) allows policyholders to look up any insurer&rsquo;s
          licensing status, complaint history, and financial condition information.
        </li>
        <li>
          <strong>Demotech ratings</strong> &mdash; For smaller carriers not rated by A.M. Best,
          Demotech provides financial stability ratings. These are commonly used for Florida and
          other catastrophe-exposed carriers, but appear in California as well.
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Warning Signs of Financial Trouble
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Beyond formal ratings, certain patterns may indicate that an insurer is financially
        distressed:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Significant premium increases without corresponding changes in risk profile
        </li>
        <li>
          Mass non-renewals or withdrawal from specific geographic areas
        </li>
        <li>
          Delayed claim payments or unusually aggressive claims handling
        </li>
        <li>
          Rating downgrades from A.M. Best or other agencies
        </li>
        <li>
          News reports of regulatory action or financial difficulties
        </li>
        <li>
          The carrier begins offering policies only through surplus lines channels after
          previously operating as an admitted insurer
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Protecting Yourself Before Insolvency Occurs
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        While policyholders cannot prevent insurer insolvency, they can take steps to
        minimize their exposure:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Choose admitted carriers when possible</strong> &mdash; Admitted insurers
          are subject to CIGA protection. While surplus lines coverage may be the only option
          in some situations, policyholders should understand the tradeoff: surplus lines
          coverage means no guaranty fund protection.
        </li>
        <li>
          <strong>Check financial strength ratings annually</strong> &mdash; Do not wait for
          renewal to check your carrier&rsquo;s financial health. Monitor ratings at least once
          a year and consider switching carriers if the rating drops significantly.
        </li>
        <li>
          <strong>Maintain documentation independently</strong> &mdash; Keep your own complete
          records of your policy, premiums paid, property inventories, and any claim
          documentation. If your carrier goes insolvent, accessing records through the
          liquidator can be slow and incomplete.
        </li>
        <li>
          <strong>Understand your policy limits relative to the $500,000 cap</strong> &mdash;
          If your total potential claim (dwelling + personal property + ALE) significantly
          exceeds $500,000, recognize that CIGA protection will not make you whole in a
          total loss scenario.
        </li>
        <li>
          <strong>File claims promptly</strong> &mdash; If you have a pending claim and
          hear news that your carrier is in financial trouble, ensure your claim is fully
          documented and filed. A claim that is on record before the insolvency order is
          in a better position than one filed after the fact.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What to Do If Your Carrier Becomes Insolvent
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you receive notice that your insurance company has been placed into liquidation,
        take these steps immediately:
      </p>
      <ol className="list-decimal pl-6 mb-6 space-y-2 text-gray-700">
        <li>
          <strong>Obtain replacement coverage</strong> &mdash; Your policy will be cancelled.
          Contact an insurance agent or broker immediately to obtain new coverage. If you
          cannot obtain coverage in the admitted market, the{' '}
          <Link href="/resources/california-fair-plan" className="text-[#2E74B5] underline">
            California FAIR Plan
          </Link>{' '}
          is available as an insurer of last resort for fire coverage.
        </li>
        <li>
          <strong>File a proof of claim</strong> &mdash; Follow the instructions in the
          liquidation notice to file a proof of claim by the stated deadline. Include all
          documentation supporting your claim.
        </li>
        <li>
          <strong>Contact CIGA</strong> &mdash; Verify that your policy qualifies as a covered
          claim under the CIGA Act. CIGA&rsquo;s website (ciga.org) provides information on
          covered insolvencies and the claims process.
        </li>
        <li>
          <strong>Preserve all records</strong> &mdash; Gather and preserve all policy documents,
          correspondence with the insurer, claim files, estimates, photographs, and receipts. Do
          not rely on the insolvent insurer to maintain these records.
        </li>
        <li>
          <strong>Consult with a professional</strong> &mdash; If you have a significant pending
          claim, consider consulting with a{' '}
          <Link href="/resources/public-adjuster" className="text-[#2E74B5] underline">
            licensed Public Adjuster
          </Link>{' '}
          or an attorney to ensure your interests are protected through the CIGA claims process.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Bigger Picture: Market Instability and Insolvency Risk
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California&rsquo;s insurance market is under unprecedented stress. The combination of
        increasing wildfire risk, rising construction costs, regulatory constraints on premium
        increases, and carrier withdrawals has created an environment where insurer financial
        distress is a real concern. Several smaller carriers have already exited the market or
        reduced their California exposure significantly.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The policyholders most at risk are those who have been pushed to smaller, less
        financially stable carriers or into the surplus lines market after being non-renewed
        by major admitted insurers. These policyholders often pay the highest premiums while
        having the least protection if their carrier fails.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Understanding the guaranty fund system &mdash; its protections and its limits &mdash;
        is an essential part of managing insurance risk in today&rsquo;s California market.
        The safety net exists, but it is not a full replacement for a solvent insurer. Knowing
        what CIGA can and cannot do allows policyholders to make informed decisions about their
        coverage and to plan accordingly.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Frequently Asked Questions
      </h2>
      <QABlock pairs={[
        {
          question: 'What happens when my insurance company becomes insolvent?',
          answer: "The California Department of Insurance places the company into conservation first, attempting to stabilize it. If rehabilitation fails, the Insurance Commissioner petitions the court for a liquidation order under Insurance Code §1016. Once liquidation is ordered, all policies are cancelled — typically with 30 days' notice — and the company's remaining assets are marshalled to pay claims in the statutory priority order under §1033. Pending claims rarely get paid in full from the estate itself, which is why the California Insurance Guarantee Association (CIGA) safety net matters.",
        },
        {
          question: 'What is CIGA and what does it cover?',
          answer: 'CIGA is a nonprofit association established under Insurance Code §1063 et seq. and funded by assessments on admitted property and casualty insurers — not a government agency and not funded by taxpayer dollars. When an admitted insurer is ordered into liquidation, CIGA steps in to handle "covered claims" within statutory limits and exclusions. The claim must arise under a policy issued by an admitted insurer, must be a covered loss under the policy, must have occurred before liquidation (or within the 30-day notice period), and the claimant or property must be in California.',
        },
        {
          question: 'What is the cap on CIGA payments?',
          answer: 'Per Insurance Code §1063.1(c)(1), CIGA\'s maximum is $500,000 per covered claim, applied to the entire claim — dwelling, personal property, additional living expenses, and all other coverages combined. It is not $500,000 per coverage category. For a homeowner with a high-value property who suffers a total loss, the cap can leave hundreds of thousands of dollars in unrecovered losses even with the CIGA safety net in place.',
        },
        {
          question: 'What does CIGA NOT cover?',
          answer: 'Surplus lines policies (non-admitted carriers have no CIGA backstop — a critical gap as wildfire non-renewals push more California homeowners into surplus lines). Any amount exceeding the $500,000 cap. Unearned premium refunds above $10,000. Punitive or exemplary damages. Claims by certain large commercial entities. Workers\' compensation, which has its own separate guaranty fund. The surplus-lines gap is the one that catches the most people off guard.',
        },
        {
          question: 'What can I lose if my insurer goes insolvent, even with CIGA protection?',
          answer: "Coverage gaps (your policy is cancelled and you have to find replacement coverage in California's tight market). Any loss above $500,000. The ability to pursue bad faith damages against the now-defunct company — CIGA does not assume liability for the insolvent insurer's bad faith conduct. Delay and uncertainty (liquidation can take years). Negotiating leverage: appraisal, CDI complaints, and the threat of bad faith litigation all become diminished or unavailable when dealing with CIGA rather than a functioning insurer.",
        },
        {
          question: 'How do I check if my insurer is financially stable?',
          answer: "A.M. Best ratings (ambest.com) are the most widely recognized — anything B+ or lower warrants attention, below B- is a serious warning. Standard & Poor's and Moody's also rate insurer financial strength. The NAIC's IRIS system tracks regulator-watched ratios. The California Department of Insurance website (insurance.ca.gov) lets you look up any insurer's licensing status, complaint history, and financial condition. Watch also for warning signs that don't show up in ratings yet: aggressive premium hikes without risk-profile changes, mass non-renewals, delayed claim payments, rating downgrades, or a carrier that has started writing only through surplus lines after previously being admitted.",
        },
      ]} />

      {/* ── Sources ──────────────────────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Sources &amp; Further Reading
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>California Insurance Guarantee Association (CIGA)</strong> &mdash; CIGA&rsquo;s
          official website (ciga.org) provides information on covered insolvencies, the claims
          process, and frequently asked questions about guaranty fund coverage.
        </li>
        <li>
          <strong>United Policyholders</strong> &mdash; The nonprofit consumer advocacy
          organization United Policyholders has published guidance on insurer insolvency,
          guaranty fund limitations, and steps policyholders should take when their carrier
          fails. Search for their resources on insurer insolvency at uphelp.org.
        </li>
        <li>
          <strong>National Association of Insurance Commissioners (NAIC)</strong> &mdash; The
          NAIC maintains information on the guaranty fund system nationwide, including state-by-state
          coverage limits. Search for &ldquo;guaranty fund&rdquo; on naic.org.
        </li>
        <li>
          <strong>California Department of Insurance</strong> &mdash; The CDI website
          (insurance.ca.gov) provides company licensing information, financial data, and
          consumer guidance on insurer insolvency.
        </li>
        <li>
          <strong>California Insurance Code &sect;1063 et seq.</strong> &mdash; The California
          Insurance Guarantee Association Act, available through the California Legislative
          Information website (leginfo.legislature.ca.gov).
        </li>
        <li>
          <strong>Anderson Kill P.C.</strong> &mdash; The policyholder-side law firm Anderson
          Kill has published analyses of guaranty fund limitations and their implications for
          policyholders. Search for their publications on insurer insolvency and guaranty funds.
        </li>
        <li>
          <strong>A.M. Best Company</strong> &mdash; Financial strength ratings and insurer
          financial data available at ambest.com.
        </li>
      </ul>

      {/* ── Disclaimer ──────────────────────────────────────────── */}

      <CalloutBox variant="legal" title="Disclaimer">
        <p>
          This article is for general educational purposes only and does not constitute legal
          or financial advice. Nothing in this article should be construed as a legal opinion
          or as a substitute for consultation with a qualified attorney. The statutes, regulations,
          and coverage limits discussed reflect California law as of the date of publication and
          are subject to change. Insurer insolvency and guaranty fund matters are legally complex
          &mdash; consult a licensed attorney for advice on your specific situation.
        </p>
        <p className="mt-2">
          <strong>Author:</strong> Leland Coontz III, Licensed Public Adjuster, CA License #2B53445
        </p>
      </CalloutBox>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Concerned About Your Carrier&rsquo;s Financial Health?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          A Licensed Public Adjuster can help you evaluate your current coverage, ensure your
          claim documentation is complete and independently preserved, and navigate the claims
          process if your carrier is in financial distress.
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
