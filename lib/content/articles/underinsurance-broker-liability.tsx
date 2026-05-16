import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Underinsured After a Loss? When Your Insurance Agent or Broker May Be Liable',
  description:
    'When a policyholder discovers they are underinsured after a major loss, the insurance agent or broker who placed the coverage may bear liability for professional negligence. Learn about broker duties, the special relationship doctrine, statutes of limitations, and how to pursue an E&O claim in California.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational in nature and reflects the author&rsquo;s interpretation of California insurance law as a Licensed Public Adjuster. It is not legal advice. Claims against insurance agents and brokers involve complex issues of professional liability, statute of limitations, and damages calculation. If you believe your insurance agent or broker failed to secure adequate coverage, consult with a licensed California attorney who handles insurance agent and broker errors and omissions claims.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        A homeowner suffers a total loss in a wildfire. The home was insured for $450,000. The cost to rebuild is $850,000. The policyholder is underinsured by $400,000 &mdash; a gap that can mean the difference between rebuilding and losing the home entirely. The carrier pays the policy limits. The claim is closed. And the homeowner is left asking a devastating question: <em>how did this happen?</em>
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In many cases, the answer lies not with the insurance company but with the insurance agent or broker who placed the coverage. The agent who set the dwelling limit at $450,000, who failed to recommend adequate coverage updates as construction costs rose, who did not explain the difference between replacement cost and guaranteed replacement cost, or who simply never asked the right questions about the property&rsquo;s characteristics. When an insurance professional&rsquo;s errors leave a policyholder significantly underinsured after a catastrophic loss, that professional may bear legal liability for the coverage gap.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This article explains the duties of insurance agents and brokers in California, when those duties rise to a heightened standard under the &ldquo;special relationship&rdquo; doctrine, how to evaluate whether an agent or broker committed professional negligence, and the practical steps required to pursue an errors and omissions claim.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Agent vs. Broker: The Distinction in California
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California Insurance Code distinguishes between insurance agents and insurance brokers, and the distinction matters because their legal duties differ:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Insurance agent (California Insurance Code &sect;31):</strong> An insurance agent is appointed by and represents the insurance company. The agent acts as the carrier&rsquo;s representative in soliciting, negotiating, and selling policies. The agent&rsquo;s primary loyalty is to the carrier, though the agent also owes duties to the policyholder.
        </li>
        <li>
          <strong>Insurance broker (California Insurance Code &sect;33):</strong> An insurance broker acts on behalf of the policyholder, not the carrier. The broker&rsquo;s role is to find appropriate coverage for the client by shopping among multiple carriers. Because the broker represents the policyholder&rsquo;s interests, the broker&rsquo;s duty of care is generally considered higher than that of a captive agent.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        In practice, many insurance professionals hold both an agent license and a broker license, and the functional distinction between the two roles has blurred significantly. California courts have recognized that regardless of the technical license classification, the nature of the relationship between the insurance professional and the policyholder determines the scope of the duty owed.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Baseline Duty of Care
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under California law, every insurance agent and broker owes a baseline duty to use reasonable care, diligence, and judgment in procuring the insurance requested by the client. This baseline duty was established in <em>Westrick v. State Farm Insurance</em> (1982) 137 Cal.App.3d 685, and has been affirmed and refined in subsequent decisions.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The baseline duty includes the following obligations:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Procure the coverage requested:</strong> If the client asks for a specific type or amount of coverage, the agent or broker must use reasonable efforts to obtain it. If the requested coverage is unavailable, the professional must notify the client.
        </li>
        <li>
          <strong>Deliver the correct policy:</strong> The agent or broker must ensure that the policy actually issued matches what was discussed and agreed upon. If the policy contains terms, limits, or exclusions that differ from what the client requested, the professional has a duty to identify the discrepancy and inform the client.
        </li>
        <li>
          <strong>Exercise competence:</strong> The agent or broker must possess and apply a reasonable level of professional knowledge about the insurance products being sold, including an understanding of coverage limits, endorsements, exclusions, and policy structure.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Importantly, the baseline duty does <em>not</em> require the agent or broker to volunteer advice about the adequacy of coverage limits, recommend additional coverages the client did not request, or proactively monitor changes in the client&rsquo;s circumstances that might affect their insurance needs. Under the baseline standard, the agent is essentially an order-taker &mdash; procure what is requested, deliver it correctly, and nothing more.
      </p>

      <CalloutBox variant="important" title="The Baseline Duty Is a Floor, Not a Ceiling">
        <p>
          The baseline &ldquo;order-taker&rdquo; duty applies when the relationship between the agent/broker and the policyholder is purely transactional. But many insurance relationships go well beyond that. When the agent holds themselves out as an advisor, when the client relies on the agent&rsquo;s expertise, or when the agent has assumed responsibility for keeping the coverage adequate over time, a much higher standard of care applies. This is the <strong>special relationship doctrine</strong>, discussed below, and it is the key to most underinsurance claims against agents and brokers.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Special Relationship Doctrine: <em>Jones v. Grewe</em>
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The landmark California case on enhanced agent/broker duties is <em>Jones v. Grewe</em> (1987) 189 Cal.App.3d 950. In <em>Jones</em>, the Court of Appeal held that when a &ldquo;special relationship&rdquo; exists between the insurance professional and the client, the professional owes a <strong>heightened duty</strong> that goes beyond merely procuring requested coverage. Under a special relationship, the agent or broker has an affirmative duty to advise the client about the adequacy of their coverage, to recommend changes as circumstances evolve, and to proactively ensure that the client is properly protected.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The court in <em>Jones v. Grewe</em> identified several factors that can establish a special relationship:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Long-standing relationship:</strong> A multi-year relationship where the same agent has handled the client&rsquo;s insurance needs over time suggests that the agent has assumed an advisory role, not merely a transactional one.
        </li>
        <li>
          <strong>Agent holding out as advisor:</strong> If the agent has presented themselves as an insurance counselor, risk management advisor, or coverage specialist &mdash; rather than simply a salesperson &mdash; the client is entitled to rely on that representation.
        </li>
        <li>
          <strong>Client reliance:</strong> Evidence that the client relied on the agent&rsquo;s expertise to determine appropriate coverage levels, select endorsements, or evaluate risks &mdash; rather than making independent decisions about coverage.
        </li>
        <li>
          <strong>Agent exercising discretion:</strong> If the agent made coverage decisions for the client (such as setting dwelling limits, selecting deductibles, or choosing policy forms) without meaningful client input, the agent has effectively assumed responsibility for the adequacy of those choices.
        </li>
        <li>
          <strong>Payment of fees beyond commissions:</strong> If the client paid consulting or advisory fees (as opposed to commissions built into the premium), this supports the existence of a professional advisory relationship.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The special relationship doctrine was further developed in <em>Fitzpatrick v. Hayes</em> (1997) 57 Cal.App.4th 916, where the Court of Appeal held that the existence of a special relationship is a question of fact for the jury. This means that the question of whether a heightened duty exists cannot typically be resolved on summary judgment &mdash; it must go to trial unless the evidence is entirely one-sided.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Constitutes Negligence in the Underinsurance Context
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a special relationship exists and the policyholder is underinsured after a loss, the following agent or broker failures may constitute professional negligence:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Setting the dwelling limit too low:</strong> The agent relied on an outdated or inaccurate cost estimator, failed to account for the property&rsquo;s unique construction features (custom finishes, hillside access, historical architecture), or simply used a number that the agent knew or should have known was insufficient to rebuild the home.
        </li>
        <li>
          <strong>Failing to update limits over time:</strong> Construction costs escalate every year. An agent in a long-term advisory relationship who never recommends coverage increases &mdash; or who allows inflation guard endorsements to lapse &mdash; may be negligent if the client is underinsured at the time of loss.
        </li>
        <li>
          <strong>Not recommending guaranteed replacement cost coverage:</strong> In California, guaranteed replacement cost coverage (or extended replacement cost coverage at 125% to 200% of the dwelling limit) provides a critical buffer against underinsurance. An agent who places a standard replacement cost policy without discussing the guaranteed replacement cost option &mdash; particularly in areas with high and volatile construction costs &mdash; may have failed to meet the standard of care. For more on the distinction, see our article on{' '}
          <Link href="/resources/replacement-cost-vs-guaranteed" className="text-[#2E74B5] underline">replacement cost vs. guaranteed replacement cost</Link>.
        </li>
        <li>
          <strong>Failing to account for code upgrades:</strong> Building codes change over time, and rebuilding after a total loss requires compliance with current codes. The cost of code-required upgrades can add 15% to 30% to reconstruction costs. An agent who does not recommend{' '}
          <Link href="/resources/ordinance-law" className="text-[#2E74B5] underline">ordinance or law coverage</Link>{' '}
          may leave the client exposed to a significant coverage gap.
        </li>
        <li>
          <strong>Misunderstanding the property:</strong> The agent set limits based on a standard tract home when the property was a custom-built home with features that significantly affect reconstruction costs &mdash; such as hillside construction, post-and-beam framing, extensive hardscape, or detached structures.
        </li>
        <li>
          <strong>Failing to disclose limitations:</strong> The agent did not explain material policy limitations, such as the difference between actual cash value and replacement cost, the impact of the coinsurance clause, or sublimits that would reduce the effective coverage.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Proving Damages in an Agent/Broker Negligence Claim
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The measure of damages in an insurance agent or broker negligence claim is typically the <strong>coverage gap</strong> &mdash; the difference between what the policyholder actually recovered from the insurer and what the policyholder would have recovered if the agent or broker had performed competently. This requires the policyholder to establish two things:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>The actual loss:</strong> The full cost of rebuilding the home, replacing personal property, and covering additional living expenses &mdash; the total amount the policyholder needed to be made whole.
        </li>
        <li>
          <strong>The coverage that should have been in place:</strong> What policy limits, endorsements, and coverages a competent agent or broker would have recommended and obtained, given the client&rsquo;s circumstances, the available products, and the standard of care in the industry.
        </li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        The damages are the difference between these two numbers &mdash; less the deductible and any other amounts the policyholder was responsible for. Expert testimony from an insurance industry professional is typically required to establish what a reasonably competent agent would have done and what coverage would have been available.
      </p>

      <CalloutBox variant="warning" title="Do Not Wait to Investigate the Coverage Gap">
        <p>
          After a major loss, policyholders understandably focus all their energy on the insurance claim itself. But if there is a significant coverage gap, the policyholder should simultaneously evaluate whether the agent or broker bears responsibility. The statute of limitations on a broker negligence claim begins running when the policyholder discovers (or reasonably should have discovered) the underinsurance &mdash; which is often at the time of the loss or shortly thereafter. Waiting until the insurance claim is fully resolved before investigating the agent&rsquo;s conduct can jeopardize the ability to pursue the separate claim.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Statute of Limitations
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        In California, the statute of limitations for a professional negligence claim against an insurance agent or broker is governed by California Code of Civil Procedure &sect;339, which provides a <strong>two-year</strong> limitations period for actions based on a liability &ldquo;not founded upon an instrument in writing.&rdquo; Most courts have applied the two-year statute to agent and broker negligence claims.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The critical question is when the limitations period begins to run. Under the &ldquo;discovery rule,&rdquo; the statute does not begin until the policyholder discovers, or through reasonable diligence should have discovered, the facts constituting the wrongful act. In underinsurance cases, this typically means the limitations period starts when the policyholder learns that their coverage is inadequate &mdash; usually when the claim is filed and the coverage gap becomes apparent.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        However, there are important nuances:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>The loss itself may trigger discovery.</strong> Once a total loss occurs and the policyholder learns their dwelling limit is far below the rebuild cost, the limitations clock may start immediately &mdash; even if the insurance claim itself is still being processed.
        </li>
        <li>
          <strong>Prior notice of underinsurance.</strong> If the policyholder received information before the loss suggesting the coverage was inadequate &mdash; such as a coverage review letter, a renewal notice showing unchanged limits, or a conversation with the agent about coverage amounts &mdash; the carrier or the agent&rsquo;s E&amp;O insurer may argue that the discovery occurred earlier.
        </li>
        <li>
          <strong>Continuous representation.</strong> In some professional negligence contexts, the statute of limitations is tolled during the period of continuous representation. Whether this doctrine applies to insurance agent relationships is not firmly settled in California, but some courts have recognized the argument.
        </li>
      </ul>

      <CalloutBox variant="legal" title="Two Years Is a Short Window">
        <p>
          Two years may seem like a reasonable amount of time, but after a catastrophic loss, that window passes quickly. Policyholders are managing temporary housing, dealing with the insurance company, coordinating with contractors, and trying to rebuild their lives. By the time the insurance claim settles and the full scope of the underinsurance becomes clear, a significant portion of the limitations period may have already elapsed. Any policyholder who suspects agent or broker negligence should consult an attorney promptly to preserve their rights. For more on how California handles insurance-related deadlines, see our article on{' '}
          <Link href="/resources/california-claim-deadlines" className="text-[#2E74B5] underline">California claim deadlines</Link>.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Relationship Between the Insurance Claim and the Broker Claim
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A critical strategic issue for underinsured policyholders is how to manage two simultaneous proceedings: the first-party insurance claim against the carrier and the professional negligence claim against the agent or broker. These are separate legal actions with different parties, different legal theories, and different deadlines. But they are factually intertwined, and how the policyholder handles one can affect the other.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Key considerations include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Maximize the insurance recovery first.</strong> Before pursuing the agent or broker, the policyholder should exhaust every avenue to recover the maximum amount from the insurance carrier. The broker&rsquo;s liability is measured by the <em>gap</em> between the insurance recovery and the actual loss. If the insurance claim is underpaid due to the policyholder&rsquo;s own failure to document or negotiate, that additional shortfall may not be recoverable from the broker.
        </li>
        <li>
          <strong>The broker claim does not delay the insurance claim.</strong> The policyholder should prosecute the insurance claim with full vigor regardless of whether a broker claim exists. The two proceedings run on independent tracks. Settling the insurance claim does not waive the broker claim, and pursuing the broker claim does not delay the insurance recovery.
        </li>
        <li>
          <strong>Documentation serves both claims.</strong> The evidence gathered to support the insurance claim &mdash; rebuild estimates, personal property inventories, contractor bids, expert reports &mdash; also supports the broker negligence claim by establishing the actual loss amount. Meticulous documentation of the full loss pays dividends in both proceedings.
        </li>
        <li>
          <strong>The agent&rsquo;s E&amp;O carrier will defend aggressively.</strong> Insurance agents and brokers carry their own errors and omissions (E&amp;O) insurance. When a negligence claim is filed, the E&amp;O carrier provides defense counsel. These defense firms are experienced and well-resourced. They will scrutinize every aspect of the relationship between the agent and the policyholder, looking for evidence that the policyholder made their own coverage decisions, refused recommended coverage, or was otherwise responsible for the underinsurance.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        California Insurance Code Requirements for Agents and Brokers
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California imposes specific regulatory requirements on licensed insurance agents and brokers that may be relevant to an underinsurance claim:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Licensing requirements (Insurance Code &sect;1631 et seq.):</strong> All persons soliciting, negotiating, or selling insurance in California must hold the appropriate license. An unlicensed individual who places insurance and the client is later underinsured faces additional liability exposure.
        </li>
        <li>
          <strong>Continuing education (Insurance Code &sect;1749):</strong> California requires licensed agents and brokers to complete continuing education requirements as a condition of license renewal. Failure to maintain competency through continuing education may be evidence of negligence.
        </li>
        <li>
          <strong>Record keeping (California Code of Regulations, Title 10, &sect;2190 et seq.):</strong> Agents and brokers are required to maintain records of insurance transactions. These records may be critical evidence in establishing what the agent recommended, what the client requested, and what coverage was ultimately procured.
        </li>
        <li>
          <strong>Disclosure obligations:</strong> California Insurance Code &sect;1724.5 requires insurance agents and brokers to disclose their role (agent vs. broker) and who they represent. This disclosure is relevant to determining whether the heightened duty associated with a broker&rsquo;s fiduciary-like role applies.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Practical Steps for Underinsured Policyholders
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you discover after a loss that you are significantly underinsured, the following steps can help preserve a potential claim against the agent or broker:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Gather all agent communications.</strong> Collect every email, letter, coverage proposal, renewal notice, and marketing material from the agent or broker. These documents may contain representations about coverage adequacy, recommendations (or the lack thereof), and evidence of the relationship&rsquo;s nature.
        </li>
        <li>
          <strong>Obtain the complete policy file from the agent.</strong> Request a copy of the agent&rsquo;s complete file for your account, including internal notes, coverage worksheets, replacement cost estimator outputs, and any correspondence between the agent and the carrier.
        </li>
        <li>
          <strong>Document the coverage gap precisely.</strong> Obtain detailed rebuild estimates from licensed contractors to establish the actual replacement cost of the home. Compare this to the dwelling limit on the policy. The difference is the starting point for damages calculation. For guidance on documenting rebuild costs, see our article on{' '}
          <Link href="/resources/underinsured-after-wildfire" className="text-[#2E74B5] underline">being underinsured after a wildfire</Link>.
        </li>
        <li>
          <strong>Consult an attorney experienced in agent/broker E&amp;O claims.</strong> These claims require specialized legal knowledge. Not every plaintiff&rsquo;s attorney handles insurance agent negligence cases. Look for a firm with specific experience in insurance professional liability.
        </li>
        <li>
          <strong>Do not confront the agent before consulting an attorney.</strong> It is natural to want to call the agent and ask how this happened. But any statements the agent makes &mdash; or any statements the policyholder makes to the agent &mdash; may be used in subsequent litigation. It is better to consult an attorney first and let the attorney guide the investigation.
        </li>
        <li>
          <strong>Watch the statute of limitations.</strong> The two-year limitations period runs from discovery of the underinsurance. Mark the date you first learned that your coverage was inadequate and ensure that any legal action is filed well before the deadline expires.
        </li>
      </ol>

      <CalloutBox variant="tip" title="The Agent&rsquo;s File Is Key Evidence">
        <p>
          The agent or broker&rsquo;s internal file often contains the most important evidence in an underinsurance claim. Replacement cost estimator printouts showing what tool the agent used and what inputs they entered, notes from annual review conversations (or the absence of any notes, suggesting reviews never happened), and coverage proposals that were sent but never followed up on &mdash; all of these documents can establish whether the agent met or breached the applicable standard of care. An attorney can subpoena these records if the agent does not voluntarily produce them.
        </p>
      </CalloutBox>

      {/* ── Sources ──────────────────────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Sources &amp; Further Reading
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Shernoff Bidart Echeverria LLP</strong> &mdash; A leading California insurance bad faith and policyholder advocacy firm that has written extensively on agent and broker liability for underinsurance, including the application of the special relationship doctrine in catastrophic loss cases.
        </li>
        <li>
          <strong>Pillsbury &amp; Coleman, LLP</strong> &mdash; A California policyholder-side firm whose publications address the intersection of first-party coverage disputes and agent/broker negligence, including practical strategies for pursuing both claims simultaneously.
        </li>
        <li>
          <strong>United Policyholders</strong> &mdash; A nonprofit consumer advocacy organization whose Roadmap to Recovery publications include guidance for underinsured disaster survivors, including information on evaluating potential claims against insurance agents and brokers. As United Policyholders advises: &ldquo;If you are significantly underinsured, explore every avenue for recovery &mdash; including whether your agent or broker failed to properly advise you about the amount of coverage you needed.&rdquo;
        </li>
        <li>
          <strong>Ehrlich Law Firm</strong> &mdash; A California insurance coverage firm that has published analysis of <em>Jones v. Grewe</em> and subsequent special relationship cases, including discussion of the evidentiary factors that establish a heightened duty of care.
        </li>
        <li>
          <strong>California Department of Insurance</strong> &mdash; The CDI website provides information on agent and broker licensing requirements, continuing education obligations, and the complaint process for insurance professional misconduct. The CDI can investigate potential violations of the Insurance Code by licensed agents and brokers.
        </li>
        <li>
          <strong>Witkin, Summary of California Law (Insurance)</strong> &mdash; The insurance chapters of Witkin&rsquo;s treatise provide comprehensive analysis of agent and broker duties, the special relationship doctrine, and the measure of damages in professional negligence claims against insurance intermediaries.
        </li>
      </ul>

      {/* ── Disclaimer ──────────────────────────────────────────── */}

      <CalloutBox variant="legal" title="Disclaimer">
        <p>
          This article is for general educational purposes only and does not constitute legal advice. Nothing in this article should be construed as a legal opinion or as a substitute for consultation with a qualified attorney. Claims against insurance agents and brokers involve professional liability issues, statute of limitations considerations, and damages calculations that require legal expertise. Consult a licensed attorney for advice regarding your specific situation.
        </p>
        <p className="mt-2">
          <strong>Author:</strong> Leland Coontz III, Licensed Public Adjuster, CA License #2B53445
        </p>
      </CalloutBox>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Underinsured After a Major Loss?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          If you are underinsured and believe your agent or broker failed to recommend adequate coverage, a Licensed Public Adjuster can help document the full scope of your loss, maximize your recovery from the insurance carrier, and provide documentation that supports a potential claim against the insurance professional who placed your coverage.
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
