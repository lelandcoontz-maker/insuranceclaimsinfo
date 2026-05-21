import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'
import { QABlock } from '@/components/content/QABlock'

export const meta = {
  title: "When Your Insurance Company Goes Insolvent: CIGA and What California Policyholders Need to Know",
  description:
    "What happens when your California insurance company is declared insolvent. How the California Insurance Guarantee Association (CIGA) works, coverage caps, surplus lines gaps, the claims process, and how to protect yourself in today’s volatile insurance market.",
  summary:
    'If your California insurer becomes insolvent, the California Insurance Guarantee Association (CIGA) pays covered claims, subject to caps and excluding surplus lines carriers. Confirm your carrier is admitted, and know the limits before relying on this safety net.',
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
        Most policyholders assume their insurance company will be there when they need it. You
        pay your premiums, you file a claim, and the insurer pays. That is how it is supposed
        to work. But what happens when the insurance company itself fails &mdash; when it runs
        out of money, is seized by regulators, and can no longer pay claims?
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        It happens more often than most people realize. And in California&rsquo;s current
        insurance market &mdash; where carriers are fleeing the state, non-renewals are surging,
        and wildfire exposure is reshaping the entire industry &mdash; the risk of insurer
        insolvency is not theoretical. It is a real and growing concern.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This article explains what happens when a California property and casualty insurer goes
        insolvent, how the California Insurance Guarantee Association (CIGA) steps in, what CIGA
        covers and what it does not, and what you should do to protect yourself &mdash; both
        before and after an insolvency occurs.
      </p>

      <CalloutBox variant="tip" title="The Short Version">
        <p>
          If your admitted insurance company is declared insolvent and ordered into liquidation,
          the California Insurance Guarantee Association (CIGA) will generally step in to pay
          your covered claim &mdash; but subject to significant limitations. The general cap is
          $500,000 per claim (with a $1,000,000 cap for dwelling claims under residential
          property insurance). Claims under $100 are excluded. Punitive damages are not covered.
          And critically, if your policy was issued by a surplus lines or non-admitted carrier,
          CIGA does not apply at all. You should verify that your insurer is admitted and
          financially sound before you need to file a claim.
        </p>
      </CalloutBox>

      {/* ── What Insolvency Means ──────────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        What It Means When an Insurance Company Goes Insolvent
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        An insurance company becomes &ldquo;insolvent&rdquo; when it can no longer meet its
        financial obligations &mdash; when its liabilities exceed its assets and it cannot pay
        the claims it owes. Unlike most businesses, insurance companies do not simply file for
        bankruptcy under federal law. Instead, they are subject to a state-regulated process
        overseen by the California Department of Insurance (CDI) and the courts.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The process typically unfolds in two stages:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        Conservation
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Conservation is the first step. When the Insurance Commissioner determines that a
        company&rsquo;s continued operation would be &ldquo;hazardous to its policyholders,
        creditors, or the public,&rdquo; the Commissioner obtains a court order to take control
        of the company. During conservation, the Commissioner&rsquo;s Conservation and
        Liquidation Office (CLO) conducts a thorough examination of the company&rsquo;s books
        and records to determine whether the company can be rehabilitated.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        During the conservation phase, existing policies generally remain in force. The company
        continues to honor policy coverage and benefits and continues to adjust and pay claims
        &mdash; provided the policy was in force at the time of the loss, the loss is covered
        under the policy terms, and no applicable statute of limitations has expired. However,
        no new policies are written, and the company&rsquo;s operations are under the
        Commissioner&rsquo;s direct control.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        Liquidation
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If rehabilitation is not feasible, the Commissioner petitions the Superior Court to
        order the company into liquidation. A liquidation order terminates the company&rsquo;s
        insurance business: all policies are canceled, no new or renewal policies are issued,
        and the company&rsquo;s assets are marshaled to pay claims to the extent possible.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The court-appointed liquidator publishes a notice informing anyone who might have a
        claim against the company to file a proof of claim before a specified deadline. This
        deadline is critical &mdash; missing it can mean losing your right to recover.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Once the liquidation order is entered, CIGA&rsquo;s obligations are triggered. The
        liquidator forwards open California claims to CIGA, typically within 30 days of the
        liquidation date. CIGA then steps in as the entity responsible for paying covered claims.
      </p>

      {/* ── What Is CIGA ──────────────────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        What Is the California Insurance Guarantee Association (CIGA)?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        CIGA is a not-for-profit, unincorporated, statutorily created association established
        under California Insurance Code Sections 1063 through 1063.16. Its purpose is to pay
        certain covered claims of insolvent property and casualty insurers&rsquo; policyholders
        and claimants. Every admitted property and casualty insurer licensed to do business in
        California is required to be a member of CIGA.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        CIGA is not a government agency. It is not funded by tax dollars. It is funded by
        assessments levied on its member insurers &mdash; the admitted insurance companies
        doing business in California. When an insolvency occurs and claims need to be paid,
        CIGA assesses its members to raise the necessary funds.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Think of CIGA as a safety net &mdash; but one with holes. It exists to prevent
        policyholders of insolvent admitted carriers from being left with nothing. But its
        coverage is not unlimited, and it is not a substitute for having a financially sound
        insurer in the first place.
      </p>

      {/* ── What CIGA Covers ──────────────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        What CIGA Covers: The &ldquo;Covered Claim&rdquo; Definition
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        CIGA does not simply assume all obligations of the insolvent insurer. It is authorized
        to pay only &ldquo;covered claims&rdquo; as defined in California Insurance Code
        Section 1063.1. The definition is detailed and contains several important limitations.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        To qualify as a covered claim, the obligation must:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          Be imposed by law and within the coverage of an insurance policy issued by the
          insolvent insurer
        </li>
        <li>
          Arise from a policy issued by an insurer that was admitted to transact insurance in
          California at the time the policy was issued
        </li>
        <li>
          Be presented to the liquidator or CIGA on or before the last date fixed for filing
          claims in the domiciliary liquidation proceeding
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        Coverage Caps
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        CIGA&rsquo;s obligations are subject to per-claim caps that can significantly limit
        recovery:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>General cap:</strong> $500,000 per claim for auto, general liability,
          property, and casualty claims (Insurance Code &sect; 1063.1(c)(1)(A)(vii))
        </li>
        <li>
          <strong>Dwelling structure claims:</strong> For residential property insurance, a claim
          for damage to or loss of a dwelling structure shall not exceed $1,000,000 or the
          amount recoverable under the policy, whichever is less
        </li>
        <li>
          <strong>Separate coverage categories:</strong> Under residential property insurance,
          each claim for a loss under a different coverage category (dwelling, personal property,
          additional living expenses, other structures) is treated as a separate covered claim,
          each subject to its own cap
        </li>
        <li>
          <strong>Cybersecurity claims:</strong> Obligations under cybersecurity policies are
          capped at $1,000,000 or the policy limits, whichever is less
        </li>
        <li>
          <strong>Workers&rsquo; compensation:</strong> No cap applies to workers&rsquo;
          compensation benefits
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The practical impact of these caps depends on the size of your claim. For a homeowner
        with $800,000 in dwelling damage from a wildfire, the $1,000,000 dwelling cap provides
        adequate coverage. But for a homeowner with a $2,000,000 policy limit who suffers a
        total loss, the cap means CIGA will pay only half of what the policy would have covered.
        The policyholder would have to pursue the remaining balance as a general creditor of
        the insolvent estate &mdash; a process that often yields pennies on the dollar, if
        anything at all.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        Minimum Claim Threshold
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        CIGA does not cover claims of $100 or less. This is a minor exclusion for most claims,
        but it exists in the statute (Insurance Code &sect; 1063.1(c)(1)(A)).
      </p>

      {/* ── What CIGA Does Not Cover ─────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        What CIGA Does Not Cover
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The exclusions from CIGA coverage are just as important as the inclusions. Understanding
        what falls outside CIGA&rsquo;s scope is essential for every policyholder.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        Surplus Lines and Non-Admitted Carriers: The Critical Gap
      </h3>

      <CalloutBox variant="warning" title="Non-Admitted Carriers Are Not Covered by CIGA">
        <p>
          If your insurance policy was issued by a surplus lines (non-admitted) carrier, you have
          no CIGA protection whatsoever. If that carrier becomes insolvent, you are on your own.
          This is one of the most important things any California policyholder can understand
          about their coverage.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        CIGA applies only to <strong>admitted</strong> insurers &mdash; companies that are
        licensed by the California Department of Insurance to transact business in the state
        and are subject to California&rsquo;s rate and form regulations. Surplus lines carriers
        (also called non-admitted carriers or excess and surplus lines carriers) operate outside
        the admitted market. They are not members of CIGA, and their policyholders are not
        protected by the guarantee association.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        California Insurance Code Section 1765 requires that policyholders of non-admitted
        carriers receive written disclosure stating: (1) the insurer is not admitted in
        California; (2) the policy is not covered by CIGA; and (3) the policyholder may file
        complaints with the California Department of Insurance. But in practice, many
        policyholders sign these disclosures without understanding what they mean &mdash;
        or forget about them entirely by the time they need to file a claim.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This matters now more than ever. As admitted carriers exit the California homeowners
        market or restrict new business, more policyholders are being pushed into the surplus
        lines market. Non-admitted carriers are increasingly writing homeowners coverage in
        high-risk areas where admitted carriers will not. While many surplus lines carriers are
        financially strong &mdash; foreign (U.S.-domiciled) surplus lines carriers must
        maintain at least $45 million in capital and surplus &mdash; their policyholders bear
        the risk of insolvency without the CIGA safety net.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        Other Exclusions
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Beyond the surplus lines exclusion, CIGA does not cover:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Punitive or exemplary damages:</strong> Any amount awarded as punitive or
          exemplary damages is excluded from the covered claim definition
        </li>
        <li>
          <strong>Mortgage guaranty, financial guaranty, fidelity/surety, credit, title, and
          ocean marine insurance:</strong> These lines of business are carved out entirely
        </li>
        <li>
          <strong>Claims arising from policies issued before the insurer was admitted in
          California:</strong> If the policy was issued or renewed before the company was
          admitted to transact insurance in California, the obligations under that policy are
          not covered
        </li>
        <li>
          <strong>Amounts in excess of policy limits:</strong> CIGA&rsquo;s obligation does not
          exceed the coverage provided under the insolvent insurer&rsquo;s policy, regardless of
          the statutory caps
        </li>
      </ul>

      {/* ── Other Insurance Interaction ───────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        How CIGA Interacts with Other Insurance and Government Programs
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        CIGA is designed as a payer of last resort. Several provisions in the statute reduce
        CIGA&rsquo;s obligations when other sources of recovery are available:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Government insurance or guaranty programs:</strong> If you have a claim or
          legal right of recovery under any governmental insurance or guaranty program that also
          qualifies as a covered claim, you must first exhaust your rights under that program.
          Any amount payable on a covered claim is reduced by the amount recovered under the
          government program (Insurance Code &sect; 1063.2)
        </li>
        <li>
          <strong>Other insurance guaranty associations:</strong> If your claim may be recovered
          under more than one state&rsquo;s insurance guaranty association, you must generally
          seek recovery first from the association of your state of residence (for first-party
          property claims, from the association of the state where the property is permanently
          located). Any CIGA recovery is reduced by amounts recovered from other guarantee
          associations
        </li>
        <li>
          <strong>Other applicable insurance:</strong> If you have other insurance coverage that
          applies to the same loss, CIGA&rsquo;s obligation may be reduced accordingly. CIGA is
          not intended to provide duplicate recovery
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The practical effect: if you have any other source of coverage for the same loss, CIGA
        expects you to pursue that coverage first. CIGA steps in only for the gap that remains.
      </p>

      {/* ── The Claims Process with CIGA ──────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        The Claims Process with CIGA: What to Expect
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your insurance company is ordered into liquidation, here is what the claims process
        with CIGA typically looks like:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        Step 1: CIGA Receives Your Claim from the Liquidator
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you already had an open claim with the insolvent insurer, you generally do not need
        to re-file it. The court-appointed liquidator transfers open claim files to CIGA.
        However, some delays are inevitable &mdash; CIGA must first obtain the files from the
        liquidator, and this process does not happen overnight.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        Step 2: CIGA Contacts You
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        As soon as possible after receiving the claim files, CIGA will mail letters detailing
        your rights under the California Insurance Guarantee Association Act and identifying who
        will be handling your claim. If you do not hear from CIGA within approximately one month
        from the date the company was declared insolvent, CIGA advises contacting them directly.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        Step 3: Claim Investigation and Adjustment
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        CIGA has the right to investigate, adjust, compromise, settle, and pay covered claims.
        It also has the right to investigate, handle, and deny claims that do not qualify as
        covered claims. CIGA is a party in interest in all proceedings involving a covered claim
        and has the right to appear, defend, and appeal.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Be prepared for the reality that CIGA&rsquo;s claim handling may differ from what you
        experienced with the original insurer. CIGA is processing claims from a failed company,
        often with incomplete records, and subject to statutory constraints that the original
        insurer was not. The process can be slower and more limited.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        Step 4: Payment (Subject to Caps and Limitations)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your claim qualifies as a covered claim, CIGA will pay it &mdash; subject to the
        statutory caps, exclusions, and reductions described above. Payment is not instantaneous.
        CIGA must verify coverage, determine the amount owed, and apply all statutory
        limitations before issuing payment.
      </p>

      {/* ── Timely Filing Requirement ─────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        The Timely Filing Requirement: Do Not Miss the Deadline
      </h2>

      <CalloutBox variant="warning" title="Filing Deadlines Are Strictly Enforced">
        <p>
          To qualify as a covered claim, your claim must be presented to the liquidator or CIGA
          on or before the last date fixed for filing claims in the domiciliary liquidation
          proceeding. If you miss this deadline, you may lose your right to recover from CIGA
          entirely. Deadlines vary by insolvency and are set by the court. Monitor them closely.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        Each liquidation proceeding has its own deadline for filing a proof of claim (POC).
        The deadline is established by the court in the liquidation order and is published in
        the notice sent to potential claimants. These deadlines vary from case to case. For
        example, Transport Insurance Company was ordered into liquidation on October 21, 2025,
        with a proof of claim deadline of May 21, 2026, for non-workers&rsquo; compensation
        claims.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Even if CIGA already has notice of your claim through the liquidator&rsquo;s records,
        you should confirm that a proof of claim has been filed on your behalf before the
        deadline. Do not assume that someone else is tracking this for you. The consequence
        of missing the deadline is the loss of your right to payment &mdash; regardless of how
        meritorious your claim may be.
      </p>

      {/* ── Recent Insolvencies ──────────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Recent California Insolvencies: Real-World Impact
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurer insolvencies are not hypothetical. The California Conservation and Liquidation
        Office currently has multiple open estates, and several recent insolvencies have directly
        affected California policyholders:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Merced Property &amp; Casualty Company (liquidated December 3, 2018):</strong>{' '}
          This small California insurer was overwhelmed by claims from the devastating 2018 Camp
          Fire &mdash; the deadliest and most destructive wildfire in California history at that
          time. Facing approximately $64 million in potential liabilities from Paradise alone,
          the company could not meet its obligations. The California Insurance Commissioner took
          expedited legal action to seize the company&rsquo;s assets and protect policyholders.
          Homeowners who had trusted Merced P&amp;C with their coverage found themselves filing
          claims with CIGA instead of the carrier they had chosen.
        </li>
        <li>
          <strong>Bedivere Insurance Company (liquidated March 11, 2021):</strong> Bedivere was
          ordered into liquidation, affecting policyholders and claimants across multiple states,
          including California. Claimants were required to file proofs of claim by specified
          deadlines or risk losing coverage.
        </li>
        <li>
          <strong>Americas Insurance Company (liquidated June 23, 2022):</strong> Another
          carrier placed into liquidation, with CIGA assuming responsibility for covered claims
          in California.
        </li>
        <li>
          <strong>Arrowood Indemnity Company (liquidated November 8, 2023):</strong> This
          insolvency generated significant attention due to decades of valuable insurance
          coverage being subject to upcoming claim-bar dates.
        </li>
        <li>
          <strong>Transport Insurance Company (liquidated October 21, 2025):</strong> One of the
          most recent insolvencies, with a proof of claim deadline for non-workers&rsquo;
          compensation claims set for May 21, 2026.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Merced P&amp;C case is particularly instructive. It demonstrates what can happen
        when a small carrier is exposed to catastrophic wildfire losses that exceed its
        financial capacity. The policyholders who purchased coverage from Merced P&amp;C did
        nothing wrong &mdash; they bought coverage from a licensed, admitted carrier. But when
        the Camp Fire struck, the company simply did not have the resources to pay. CIGA
        stepped in, but the process was slower, more limited, and more uncertain than what
        those policyholders had expected when they paid their premiums.
      </p>

      {/* ── The Insurance Crisis Connection ───────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        The California Insurance Crisis and Insolvency Risk
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California&rsquo;s insurance market is in crisis, and the conditions driving that crisis
        are directly relevant to insolvency risk. Understanding the connection is important for
        every policyholder.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        The Non-Renewal Wave
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Seven of the top twelve homeowners insurance carriers in California have halted new
        policies, restricted coverage areas, or refused renewals &mdash; cutting options by
        approximately 20 percent statewide. In 46 of 58 California counties, nonrenewals
        outnumbered new policies written in 2023, meaning the private homeowners insurance
        market contracted across most of the state. Los Angeles County alone recorded 56,558
        nonrenewed residential policies from 2020 to 2023, representing about 22 percent of
        the state total.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        The FAIR Plan&rsquo;s Explosive Growth
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        As admitted carriers exit, policyholders are flooding into the California FAIR Plan
        &mdash; the insurer of last resort. The FAIR Plan&rsquo;s total exposure reached $724
        billion by December 2025, up 230 percent since September 2022. Policies in force rose
        to 668,609, with dwelling policies doubling in four years from 202,897 to 451,799.
        Written premium reached $1.98 billion in December 2025, up 202 percent since 2022.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The FAIR Plan itself faces enormous financial strain. After the January 2025 Palisades
        and Eaton fires, the FAIR Plan reported approximately $4 billion in estimated losses.
        To cover those losses, it assessed its member insurers $1 billion &mdash; half of which
        insurers may pass back to their customers in the form of premium increases &mdash; and
        sought a 36 percent rate increase to remain solvent. Assembly Bill 226 (AB 226) was
        enacted to allow the FAIR Plan to borrow funds, issue bonds, and impose additional
        assessments to manage catastrophic losses without becoming insolvent.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        Why This Increases Insolvency Risk
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The current market dynamics create several pathways to increased insolvency risk:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Concentration of risk in smaller carriers:</strong> As major carriers exit
          high-risk areas, smaller and less-capitalized carriers inherit that risk. A single
          catastrophic event can overwhelm a small carrier &mdash; as happened with Merced
          P&amp;C after the Camp Fire.
        </li>
        <li>
          <strong>Surplus lines growth:</strong> Policyholders pushed out of the admitted market
          are purchasing coverage from surplus lines carriers that are not backed by CIGA. If
          those carriers struggle, policyholders have no safety net.
        </li>
        <li>
          <strong>FAIR Plan assessments:</strong> When the FAIR Plan suffers catastrophic losses,
          it assesses its member insurers. Those assessments increase costs for admitted carriers,
          which can strain the finances of companies already operating on thin margins.
        </li>
        <li>
          <strong>Reinsurance costs:</strong> Rising reinsurance costs make it more expensive for
          carriers to transfer catastrophic risk, increasing the exposure they retain on their
          own balance sheets.
        </li>
      </ul>

      {/* ── Warning Signs ─────────────────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Warning Signs: How to Check Your Insurer&rsquo;s Financial Health
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        You do not have to wait until your insurer is placed in conservation to worry about its
        financial strength. There are tools available to evaluate your carrier&rsquo;s financial
        health before problems arise.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        AM Best Financial Strength Ratings
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        AM Best is the only global credit rating agency focused exclusively on insurance. Its
        Financial Strength Ratings (FSRs) assess an insurer&rsquo;s ability to meet its ongoing
        insurance obligations. Ratings range from &ldquo;A++&rdquo; (Superior) to &ldquo;F&rdquo;
        (In Liquidation), with &ldquo;B+&rdquo; and above considered &ldquo;Secure&rdquo; and
        ratings below &ldquo;B+&rdquo; considered &ldquo;Vulnerable.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        AM Best evaluates insurers through the lens of balance sheet strength, operating
        performance, business profile, and enterprise risk management. You can look up your
        insurer&rsquo;s rating for free at{' '}
        <a
          href="https://ratings.ambest.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 underline hover:text-blue-900"
        >
          ratings.ambest.com
        </a>{' '}
        (account creation required).
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        What to watch for:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          A rating below &ldquo;A-&rdquo; warrants scrutiny. Most large, established carriers
          carry ratings of &ldquo;A&rdquo; or higher.
        </li>
        <li>
          A recent downgrade is a red flag, even if the current rating is still technically
          &ldquo;Secure.&rdquo; The direction of the rating matters.
        </li>
        <li>
          A &ldquo;Negative Outlook&rdquo; attached to the rating signals that AM Best expects
          conditions to worsen.
        </li>
        <li>
          An &ldquo;Under Review&rdquo; status means AM Best is actively reassessing the
          company &mdash; often a precursor to a downgrade.
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        NAIC Complaint Index
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The National Association of Insurance Commissioners (NAIC) compiles complaint data from
        state insurance departments. The California Department of Insurance publishes a
        complaint index that measures each insurer&rsquo;s share of justified complaints
        relative to the amount of business it writes in California.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        An index of 1.00 means the insurer&rsquo;s complaint share equals its market share.
        An index of 2.00 means the insurer generates twice as many complaints as its market
        share would predict. While a high complaint index does not necessarily indicate
        financial trouble, it can signal operational problems that may eventually affect
        financial stability &mdash; and it tells you something about how the company treats
        its policyholders.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        You can access complaint data through the{' '}
        <a
          href="https://www.insurance.ca.gov/01-consumers/120-company/03-concmplt/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 underline hover:text-blue-900"
        >
          California Department of Insurance Consumer Complaint Study
        </a>{' '}
        and through the{' '}
        <a
          href="https://content.naic.org/consumer"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 underline hover:text-blue-900"
        >
          NAIC Consumer Information Source
        </a>.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        Other Warning Signs
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Non-renewal notices:</strong> If your carrier is non-renewing large blocks of
          policies &mdash; especially in specific geographic areas &mdash; it may be reducing
          exposure because it cannot afford the risk.
        </li>
        <li>
          <strong>Significant rate increases:</strong> While rate increases alone do not signal
          insolvency, dramatic increases can indicate that the carrier has been underpricing
          risk and needs to correct course quickly.
        </li>
        <li>
          <strong>Claims handling delays:</strong> An insurer that is suddenly taking much longer
          to process and pay claims may be experiencing cash flow problems.
        </li>
        <li>
          <strong>News coverage:</strong> Regulatory actions, lawsuits, and financial reporting
          often signal trouble before formal insolvency proceedings begin. Pay attention to
          industry news about your carrier.
        </li>
        <li>
          <strong>CDI actions:</strong> The California Department of Insurance publishes press
          releases about enforcement actions, conservation orders, and other regulatory
          interventions. Monitor the CDI website for news about your insurer.
        </li>
      </ul>

      {/* ── What to Do: Non-Renewal from Weak Carrier ────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        What to Do If You Receive a Non-Renewal from a Financially Weak Carrier
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you receive a non-renewal or cancellation notice from a carrier whose financial
        health concerns you, take these steps:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Do not panic, but do not delay.</strong> You have time to find replacement
          coverage before the non-renewal takes effect, but you need to start immediately.
          California law requires advance notice for non-renewals (typically 45 to 75 days
          depending on the circumstances).
        </li>
        <li>
          <strong>Verify your current carrier&rsquo;s status.</strong> Check the CDI&rsquo;s
          website and CIGA&rsquo;s liquidation directory to confirm whether any regulatory
          action has been taken against your insurer. Check AM Best for the current financial
          strength rating.
        </li>
        <li>
          <strong>Prioritize admitted carriers for replacement coverage.</strong> When shopping
          for a new policy, confirm that the replacement carrier is admitted in California and
          therefore backed by CIGA. Ask your broker or agent directly.
        </li>
        <li>
          <strong>If surplus lines is your only option, evaluate the carrier carefully.</strong>{' '}
          Check the carrier&rsquo;s AM Best rating, its capital and surplus levels, and its
          claims-paying history. Understand that you will not have CIGA protection if the
          carrier fails.
        </li>
        <li>
          <strong>Document any open claims.</strong> If you have any open claims with the
          non-renewing carrier, make sure they are fully documented. Obtain copies of all
          correspondence, estimates, and payments. If the carrier is subsequently placed in
          conservation or liquidation, having your own records will be essential.
        </li>
        <li>
          <strong>Consider consulting a public adjuster or attorney.</strong> If you have an
          open claim with a carrier you suspect may be heading toward insolvency, professional
          assistance can help ensure your claim is properly documented and positioned before
          the transition to CIGA.
        </li>
      </ul>

      {/* ── Practical Guidance ────────────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Practical Guidance for Policyholders
      </h2>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
        <h3 className="text-lg font-bold text-blue-900 mb-3">Before a Loss: Protect Yourself Now</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            <strong>Verify your carrier is admitted.</strong> Check with the California
            Department of Insurance to confirm your insurer is an admitted carrier, backed by
            CIGA. If it is not, understand the risk you are accepting.
          </li>
          <li>
            <strong>Check your carrier&rsquo;s financial strength.</strong> Look up the AM Best
            rating annually. If the rating falls below &ldquo;A-&rdquo; or carries a negative
            outlook, consider shopping for a stronger carrier.
          </li>
          <li>
            <strong>Understand your policy limits relative to CIGA caps.</strong> If your
            dwelling coverage exceeds $1,000,000, understand that CIGA will not cover the
            excess. This does not mean you should reduce your limits &mdash; it means you should
            ensure your carrier is strong enough not to need CIGA.
          </li>
          <li>
            <strong>Maintain your own records.</strong> Keep copies of your policy, declarations
            page, premium payment receipts, and any claim correspondence. If your carrier fails,
            these records may be critical.
          </li>
        </ul>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
        <h3 className="text-lg font-bold text-amber-900 mb-3">If Your Carrier Is Declared Insolvent</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            <strong>Do not assume CIGA knows about your claim.</strong> Even if you had an open
            claim, verify that it has been transferred to CIGA. Contact CIGA if you do not hear
            from them within 30 days of the liquidation order.
          </li>
          <li>
            <strong>File a proof of claim before the deadline.</strong> Identify the proof of
            claim deadline for your specific insolvency and file well before it expires. Do not
            wait until the last day.
          </li>
          <li>
            <strong>Obtain replacement coverage immediately.</strong> The liquidation order
            cancels your policy. You are uninsured as of the effective date of cancellation.
            Secure new coverage without delay.
          </li>
          <li>
            <strong>Understand the caps.</strong> Know the applicable CIGA caps for your type of
            claim. If your claim exceeds the cap, consult an attorney about filing as a general
            creditor of the insolvent estate for the excess.
          </li>
          <li>
            <strong>Be patient but persistent.</strong> CIGA is processing claims from a failed
            company, often with incomplete records. The process is slower than a normal claim.
            Follow up regularly, keep detailed notes of all communications, and escalate if
            you encounter unreasonable delays.
          </li>
        </ul>
      </div>

      <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
        <h3 className="text-lg font-bold text-red-900 mb-3">If You Have a Surplus Lines Policy</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            <strong>Accept that CIGA does not apply to you.</strong> If your carrier fails, your
            recovery depends entirely on the carrier&rsquo;s remaining assets and any
            reinsurance it carries. There is no guaranty fund safety net.
          </li>
          <li>
            <strong>Evaluate your carrier&rsquo;s strength carefully.</strong> Because you lack
            CIGA protection, the financial strength of your surplus lines carrier is even more
            critical. Insist on a carrier with an AM Best rating of &ldquo;A&rdquo; or higher.
          </li>
          <li>
            <strong>If your carrier fails, consult an attorney immediately.</strong> You may
            need to file claims in the carrier&rsquo;s domiciliary state, pursue reinsurance
            assets, or take other legal action that requires professional guidance.
          </li>
        </ul>
      </div>

      {/* ── Key Authorities ───────────────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Key Authorities
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-bold text-[#1F3964] mb-2">Statutes</h4>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
            <li>California Insurance Code &sect;&sect; 1063&ndash;1063.16 (California Insurance Guarantee Association Act)</li>
            <li>California Insurance Code &sect; 1063.1 (covered claim definition and caps)</li>
            <li>California Insurance Code &sect; 1063.2 (additional covered claim requirements; other insurance reduction)</li>
            <li>California Insurance Code &sect; 1765 (surplus lines disclosure requirements)</li>
            <li>California Insurance Code &sect; 790.03(h) (unfair claims settlement practices)</li>
          </ul>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-bold text-[#1F3964] mb-2">Key Resources</h4>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
            <li>
              <a
                href="https://www.ciga.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline hover:text-blue-900"
              >
                CIGA official website (ciga.org)
              </a>
            </li>
            <li>
              <a
                href="https://www.ciga.org/resources/liquidation-directory"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline hover:text-blue-900"
              >
                CIGA Liquidation Directory
              </a>
            </li>
            <li>
              <a
                href="https://www.caclo.org/perl/insolvent.pl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline hover:text-blue-900"
              >
                California Conservation &amp; Liquidation Office
              </a>
            </li>
            <li>
              <a
                href="https://ratings.ambest.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline hover:text-blue-900"
              >
                AM Best Ratings Lookup
              </a>
            </li>
            <li>
              <a
                href="https://www.insurance.ca.gov/01-consumers/120-company/03-concmplt/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline hover:text-blue-900"
              >
                CDI Consumer Complaint Study
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* ── Summary ───────────────────────────────────────────────── */}

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 mt-10">
        <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
          The Bottom Line
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The California Insurance Guarantee Association exists because insurance companies
          sometimes fail. CIGA provides a meaningful safety net for policyholders of admitted
          carriers &mdash; but it is not unlimited, it is not immediate, and it does not apply
          to everyone.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          In today&rsquo;s California insurance market, where carriers are exiting, the FAIR
          Plan is strained to its limits, and more policyholders are being pushed into the
          surplus lines market, the risk of insurer insolvency is not a distant concern. It is
          a factor that should inform how you choose your insurance carrier, how you evaluate
          your coverage, and how you prepare for the possibility that the company you are
          counting on might not be there when you need it most.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Verify that your carrier is admitted. Check its financial strength. Understand CIGA&rsquo;s
          caps and limitations. Maintain your own records. And if your carrier fails, act quickly
          to file your claim, meet every deadline, and secure replacement coverage. The safety
          net exists &mdash; but only if you know how to use it.
        </p>
      </div>

      {/* ── Disclaimer ────────────────────────────────────────────── */}

      <div className="mt-10 pt-6 border-t border-gray-200">
        <p className="text-sm text-gray-500 leading-relaxed">
          <strong>Disclaimer:</strong> This article is for general educational purposes and does
          not constitute legal or professional advice. Insurance law is complex and
          fact-specific. If your insurance company has been placed in conservation or
          liquidation, or if you have concerns about your carrier&rsquo;s financial health,
          consult a licensed attorney or public adjuster who can evaluate your specific
          circumstances. Nothing in this article creates an attorney-client or
          professional-client relationship.
        </p>
      </div>

      {/* ── References ────────────────────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        References &amp; Sources
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8 text-sm">
        <li>
          California Insurance Code &sect;&sect; 1063&ndash;1063.16 (California Insurance
          Guarantee Association Act), available at{' '}
          <a
            href="https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?lawCode=INS&division=1.&title=&part=2.&chapter=1.&article=14.2."
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 underline hover:text-blue-900"
          >
            California Legislative Information
          </a>
        </li>
        <li>
          California Insurance Guarantee Association (CIGA), &ldquo;FAQs,&rdquo;{' '}
          <a
            href="https://www.ciga.org/resources/faqs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 underline hover:text-blue-900"
          >
            ciga.org/resources/faqs
          </a>
        </li>
        <li>
          California Insurance Guarantee Association (CIGA), &ldquo;How We Work,&rdquo;{' '}
          <a
            href="https://www.ciga.org/consumers_claims.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 underline hover:text-blue-900"
          >
            ciga.org/consumers_claims.html
          </a>
        </li>
        <li>
          California Department of Insurance, Conservation and Liquidation Office,{' '}
          <a
            href="https://www.insurance.ca.gov/0500-about-us/02-department/025-clo/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 underline hover:text-blue-900"
          >
            insurance.ca.gov/0500-about-us/02-department/025-clo
          </a>
        </li>
        <li>
          California Department of Insurance, &ldquo;Regulator takes control of small failing
          insurer&rdquo; (Merced P&amp;C), Press Release, December 2, 2018,{' '}
          <a
            href="https://www.insurance.ca.gov/0400-news/0100-press-releases/2018/release141-18.cfm"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 underline hover:text-blue-900"
          >
            insurance.ca.gov/0400-news/0100-press-releases/2018/release141-18.cfm
          </a>
        </li>
        <li>
          California FAIR Plan, Key Statistics &amp; Data,{' '}
          <a
            href="https://www.cfpnet.com/key-statistics-data/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 underline hover:text-blue-900"
          >
            cfpnet.com/key-statistics-data
          </a>
        </li>
        <li>
          AM Best, Company and Rating Search,{' '}
          <a
            href="https://ratings.ambest.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 underline hover:text-blue-900"
          >
            ratings.ambest.com
          </a>
        </li>
        <li>
          NAIC Consumer Information Source,{' '}
          <a
            href="https://content.naic.org/consumer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 underline hover:text-blue-900"
          >
            content.naic.org/consumer
          </a>
        </li>
        <li>
          Insurance Information Institute, &ldquo;How to assess the financial strength of an
          insurance company,&rdquo;{' '}
          <a
            href="https://www.iii.org/article/how-to-assess-the-financial-strength-of-an-insurance-company"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 underline hover:text-blue-900"
          >
            iii.org
          </a>
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Frequently Asked Questions
      </h2>
      <QABlock pairs={[
        {
          question: 'What does it mean when an insurance company goes "insolvent"?',
          answer: "The company can no longer meet its financial obligations — liabilities exceed assets and it cannot pay the claims it owes. Insurance companies don't file federal bankruptcy; they go through a state-regulated process overseen by the California Department of Insurance and the courts. Conservation is the first stage — the Commissioner takes control and attempts rehabilitation. If rehabilitation isn't feasible, the court orders liquidation, all policies are cancelled, and the assets are marshalled to pay claims.",
        },
        {
          question: 'What are the CIGA coverage caps?',
          answer: "$500,000 per claim for auto, general liability, property, and casualty under Insurance Code §1063.1(c)(1)(A)(vii). For residential property insurance, dwelling-structure claims are capped at $1,000,000 or the amount recoverable under the policy, whichever is less. Each separate coverage category (dwelling, personal property, additional living expenses, other structures) is treated as a separate covered claim, each subject to its own cap. Cybersecurity claims are capped at $1,000,000 or policy limits. Workers' compensation has no cap. Claims of $100 or less are excluded entirely.",
        },
        {
          question: 'Why are surplus lines (non-admitted) carriers a critical gap?',
          answer: "CIGA applies only to admitted insurers — companies licensed by the CDI and subject to California's rate and form regulations. Surplus lines carriers operate outside the admitted market, are not CIGA members, and their policyholders have no guaranty fund protection. As admitted carriers exit the California homeowners market or restrict new business in high-risk areas, more policyholders are being pushed into surplus lines. Insurance Code §1765 requires a written disclosure that the policy is not covered by CIGA, but in practice many policyholders sign it without grasping what it means until they need to file a claim.",
        },
        {
          question: 'What is the claims process with CIGA?',
          answer: "If you had an open claim with the insolvent insurer, you generally don't re-file — the court-appointed liquidator transfers open files to CIGA, though delays are inevitable. CIGA will mail letters identifying who handles your claim; if you don't hear from CIGA within roughly a month of the insolvency, contact them directly. CIGA then investigates, adjusts, and pays covered claims (or denies claims that don't qualify), subject to the statutory caps, exclusions, and reductions. Expect the process to be slower and more limited than dealing with a functioning carrier — CIGA is processing claims from a failed company, often with incomplete records, and under statutory constraints the original insurer didn't have.",
        },
        {
          question: 'Do I have to meet a filing deadline?',
          answer: "Yes, and it is strictly enforced. Each liquidation proceeding has its own court-set proof-of-claim (POC) deadline, established in the liquidation order and published in the notice sent to potential claimants. Deadlines vary from case to case but are typically set several months out from the liquidation order. To qualify as a covered claim, your claim must be presented to the liquidator or CIGA on or before that deadline. Even if CIGA has notice of your claim through the liquidator's records, confirm in writing that a POC has been filed on your behalf before the deadline — do not assume someone else is tracking it for you. Missing the deadline forfeits your right to payment regardless of how meritorious the claim is.",
        },
        {
          question: 'How does CIGA interact with other insurance I might have?',
          answer: "CIGA is a payer of last resort. If you have a claim under any governmental insurance or guaranty program covering the same loss, you must exhaust that first; CIGA reduces its payment by what you recover (Insurance Code §1063.2). If your claim could be recovered under more than one state's guaranty association, you generally seek recovery first from your state of residence (or, for first-party property, from the state where the property is located). If you have other insurance covering the same loss, CIGA's obligation may be reduced — CIGA is not designed to provide duplicate recovery.",
        },
        {
          question: "Why are insurers' financial-strength ratings worth checking?",
          answer: 'AM Best is the only global credit rating agency focused exclusively on insurance. Financial Strength Ratings range from A++ (Superior) to F (In Liquidation); B+ and above are "Secure," below B+ are "Vulnerable." You can look up your insurer\'s rating at ratings.ambest.com. Watch for: a rating below A- (most large established carriers are A or higher), a recent downgrade even within the Secure range (direction matters), a "Negative Outlook" attached to the rating, or "Under Review" status which often precedes a downgrade. Also check the California Department of Insurance complaint index at insurance.ca.gov — an index above 1.00 means the insurer generates more justified complaints than its market share would predict.',
        },
      ]} />

      {/* ── Related Reading ───────────────────────────────────────── */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Related Reading
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
        <li>
          <Link href="/resources/bad-faith" className="text-blue-700 underline hover:text-blue-900">
            Bad Faith Insurance Practices in California
          </Link>
        </li>
        <li>
          <Link href="/resources/california-fair-plan" className="text-blue-700 underline hover:text-blue-900">
            The California FAIR Plan: What You Need to Know
          </Link>
        </li>
        <li>
          <Link href="/resources/public-adjuster" className="text-blue-700 underline hover:text-blue-900">
            When to Hire a Public Adjuster
          </Link>
        </li>
        <li>
          <Link href="/resources/supplemental-claims" className="text-blue-700 underline hover:text-blue-900">
            Filing Supplemental Claims: Getting Paid for What They Missed
          </Link>
        </li>
        <li>
          <Link href="/resources/insurance-myths-debunked" className="text-blue-700 underline hover:text-blue-900">
            Insurance Myths Exposed: What Your Adjuster Won&apos;t Correct
          </Link>
        </li>
      </ul>
    </>
  )
}
