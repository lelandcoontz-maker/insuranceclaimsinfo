import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Conservatorship and Insurance Claims: Managing a Claim When There Is No Power of Attorney',
  description:
    'When a policyholder becomes incapacitated without a power of attorney, a conservatorship may be the only legal path to manage their insurance claim. Learn about the California conservatorship process, the conservator\'s authority over insurance matters, court approval requirements, and how to protect the claim while the court process is pending.',
}

export default function Content() {
  return (
    <>
      {/* ───────── Introduction ───────── */}
      <p className="text-gray-700 leading-relaxed mb-4">
        When a policyholder suffers a stroke, a traumatic brain injury, advanced dementia, or any
        other condition that renders them unable to manage their own affairs, the insurance claim
        does not pause. The damage still needs to be documented. The insurer&rsquo;s deadlines
        still run. Contractors still need direction. And the carrier&rsquo;s adjuster is still
        calling &mdash; except now, no one has legal authority to answer.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the policyholder had the foresight to execute a{' '}
        <Link href="/resources/power-of-attorney-insurance-claims" className="text-[#2E74B5] hover:underline">
          durable power of attorney
        </Link>{' '}
        before becoming incapacitated, an agent can step into the policyholder&rsquo;s shoes and
        manage the claim. But when no power of attorney exists &mdash; and this is far more common
        than people realize &mdash; the family is left in a legal gap. The policyholder cannot act,
        and no one else has been authorized to act on their behalf.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The solution, in most cases, is a <strong>conservatorship</strong>. It is a court-supervised
        arrangement in which a judge appoints a responsible person (the &ldquo;conservator&rdquo;)
        to manage the incapacitated person&rsquo;s (the &ldquo;conservatee&rsquo;s&rdquo;)
        financial affairs, personal care, or both. In the insurance context, the conservator
        becomes the person who files the claim, provides documentation, negotiates with the
        adjuster, and &mdash; with appropriate court approval &mdash; settles.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This article explains how the conservatorship process works in California, what authority
        the conservator has over insurance matters, what court approvals are required, and
        &mdash; critically &mdash; how to protect the claim during the weeks or months it takes
        to get a conservator appointed.
      </p>

      <CalloutBox variant="important" title="The Claim Does Not Wait for the Court">
        <p>
          Insurance deadlines, mitigation obligations, and statute of limitations periods do not
          pause just because the policyholder is incapacitated and no conservator has been appointed
          yet. One of the most common and costly mistakes families make is assuming that
          &ldquo;the insurance company will understand&rdquo; and waiting to take action until the
          conservatorship is finalized. They will not understand &mdash; they will use the delay
          against the policyholder. Protective measures must begin immediately, even before the
          conservatorship petition is filed.
        </p>
      </CalloutBox>

      {/* ───────── When Conservatorship Is Needed ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When Conservatorship Becomes Necessary
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A conservatorship is needed when <strong>all three</strong> of the following conditions
        exist:
      </p>
      <ol className="list-decimal pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          The policyholder lacks the mental capacity to manage their own financial and legal
          affairs &mdash; they cannot understand the nature of their insurance claim, cannot
          provide informed consent to a settlement, and cannot direct their own representatives.
        </li>
        <li>
          No valid, pre-existing{' '}
          <Link href="/resources/power-of-attorney-insurance-claims" className="text-[#2E74B5] hover:underline">
            durable power of attorney
          </Link>{' '}
          exists that grants someone the authority to manage insurance and financial matters on
          the policyholder&rsquo;s behalf.
        </li>
        <li>
          There is no other legal mechanism &mdash; such as a fully funded revocable living trust
          with an active successor trustee &mdash; that already grants someone the necessary
          authority.
        </li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        The scenarios that give rise to this situation include:
      </p>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          An elderly policyholder with advancing dementia or Alzheimer&rsquo;s disease who never
          executed estate planning documents
        </li>
        <li>
          A policyholder who suffered a stroke or traumatic brain injury and is now in a long-term
          care facility
        </li>
        <li>
          A policyholder in a medically induced coma after an accident or medical emergency
        </li>
        <li>
          A younger adult with a severe mental health crisis that has rendered them unable to
          manage their affairs
        </li>
        <li>
          A policyholder with a developmental disability who has reached adulthood but cannot
          independently manage financial and legal matters
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        In each of these situations, the policyholder may have a valid insurance claim &mdash;
        the house was damaged by fire, a pipe burst while they were in the hospital, a wildfire
        destroyed the property &mdash; but no one has the legal authority to prosecute the claim.
        The family member who is physically present, who is dealing with the contractors and
        fielding the adjuster&rsquo;s calls, may have no legal standing whatsoever. And the
        insurer knows it.
      </p>

      <CalloutBox variant="warning" title="A Common Trap: Signing Documents Without Authority">
        <p>
          Family members who do not have legal authority sometimes sign claim forms, proofs of loss,
          or settlement releases on behalf of the incapacitated policyholder. This creates serious
          problems. The insurer may later argue that the settlement is void because the person who
          signed had no authority, or &mdash; worse &mdash; the insurer may accept the signature
          when it benefits them (such as on a lowball settlement release) and then argue it was
          unauthorized when the policyholder&rsquo;s representative tries to reopen the claim.
          Never sign insurance documents on behalf of an incapacitated person unless you have
          proper legal authority to do so.
        </p>
      </CalloutBox>

      {/* ───────── Types of Conservatorship ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Types of Conservatorship in California
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California law provides several types of conservatorship, each designed for different
        circumstances. Understanding which type applies is essential because the conservator&rsquo;s
        authority &mdash; including authority over insurance claims &mdash; depends on the type
        of conservatorship and the specific powers granted by the court.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Probate Conservatorship (Probate Code &sect;1800 et seq.)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the most common type and the one most relevant to insurance claims. A probate
        conservatorship is established when an adult cannot properly provide for their personal
        needs (food, clothing, shelter, health care) or cannot manage their own financial affairs.
        The petition is filed in the Superior Court under California Probate Code Section 1800
        et seq., and the court appoints a conservator after a hearing.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A probate conservatorship can be:
      </p>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          <strong>Conservatorship of the Person:</strong> Grants authority over the
          conservatee&rsquo;s personal care &mdash; where they live, what medical treatment they
          receive, their daily care. This type alone does <strong>not</strong> grant authority
          to manage insurance claims.
        </li>
        <li>
          <strong>Conservatorship of the Estate:</strong> Grants authority over the
          conservatee&rsquo;s financial and property matters &mdash; including managing real
          property, paying bills, collecting debts owed to the conservatee, and{' '}
          <strong>managing insurance claims</strong>. This is the type that gives authority
          over insurance matters.
        </li>
        <li>
          <strong>Conservatorship of Both Person and Estate:</strong> Grants the conservator
          authority over both personal care and financial matters. This is the most common
          appointment when the conservatee is significantly incapacitated.
        </li>
      </ul>

      <CalloutBox variant="legal" title="Estate Conservator Has Claim Authority">
        <p>
          For insurance claim purposes, the critical appointment is the{' '}
          <strong>conservator of the estate</strong>. Under Probate Code Section 2400, the
          conservator of the estate has the duty to &ldquo;take possession of all of the
          real and personal property of the conservatee&rdquo; and to manage it according
          to law. This includes filing insurance claims, providing documentation to the insurer,
          negotiating claim amounts, and &mdash; with court approval where required &mdash;
          settling claims and receiving payment. A conservator of the person only, without estate
          authority, does not have the legal standing to manage insurance claims.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        LPS Conservatorship (Lanterman-Petris-Short Act)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        An LPS conservatorship is established under Welfare and Institutions Code Section 5350
        et seq. for individuals who are &ldquo;gravely disabled&rdquo; as a result of a mental
        health disorder. LPS conservatorships are initiated by the county public guardian or a
        treatment facility, not by family members. They are primarily concerned with involuntary
        mental health treatment, not financial management.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        An LPS conservatorship, by itself, generally does not grant authority over the
        conservatee&rsquo;s financial affairs or insurance claims. If a person under an LPS
        conservatorship also needs someone to manage their financial matters, a separate probate
        conservatorship of the estate must be established. The LPS conservator and the estate
        conservator may or may not be the same person.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Limited Conservatorship for Developmental Disabilities
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A limited conservatorship (Probate Code &sect;1801(d)) is designed for adults with
        developmental disabilities &mdash; intellectual disability, cerebral palsy, epilepsy,
        autism, and certain related conditions as defined by Welfare and Institutions Code
        Section 4512. Unlike a general conservatorship, a limited conservatorship removes only
        those specific rights that the conservatee cannot exercise, preserving as much autonomy
        as possible.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Whether a limited conservator has authority over insurance claims depends entirely on the
        specific powers granted in the court order. The court may grant the limited conservator
        authority to manage the conservatee&rsquo;s financial affairs (including insurance claims),
        or it may not. The <strong>Letters of Conservatorship</strong> issued by the court will
        specify exactly which powers have been granted. When dealing with an insurer on behalf of
        a person under a limited conservatorship, the conservator must be prepared to show that
        the court order specifically grants authority over financial and insurance matters.
      </p>

      {/* ───────── The Petition Process ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Court Petition Process: Probate Code 1800 et seq.
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Establishing a probate conservatorship is a formal legal proceeding that requires filing
        a petition with the Superior Court, providing notice to specified parties, and appearing
        at a hearing. The process is governed by California Probate Code Sections 1800 through
        1898. Here is how it works in practice:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 1: Filing the Petition
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Any interested person &mdash; typically a spouse, adult child, sibling, or other family
        member &mdash; may file a petition for conservatorship under Probate Code Section 1820.
        The petition must include:
      </p>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          The proposed conservatee&rsquo;s name, age, address, and a description of their
          incapacity
        </li>
        <li>
          The name and relationship of the proposed conservator
        </li>
        <li>
          Whether conservatorship of the person, the estate, or both is requested
        </li>
        <li>
          A description of the conservatee&rsquo;s assets, including real property and insurance
          policies
        </li>
        <li>
          The names and addresses of the conservatee&rsquo;s nearest relatives (Probate Code
          &sect;1821)
        </li>
        <li>
          A capacity declaration from a licensed physician or psychologist (Probate Code
          &sect;1823), or a declaration explaining why one cannot yet be obtained
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 2: Notice and Investigation
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        After the petition is filed, the proposed conservatee must be personally served with a
        citation and a copy of the petition at least 15 days before the hearing (Probate Code
        &sect;1824). Notice must also be mailed to the proposed conservatee&rsquo;s spouse or
        domestic partner, relatives within the second degree, and any person who has requested
        special notice.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The court will appoint a <strong>court investigator</strong> to interview the proposed
        conservatee, explain the nature of the proceeding, determine whether the proposed
        conservatee objects, and evaluate the need for a conservatorship (Probate Code &sect;1826).
        The investigator files a report with the court before the hearing.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 3: The Hearing
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        At the hearing, the court determines whether the proposed conservatee lacks capacity and
        whether a conservatorship is the least restrictive alternative available. The proposed
        conservatee has the right to be present, to be represented by an attorney (the court will
        appoint one if necessary under Probate Code &sect;1471), and to object.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the court grants the petition, it issues <strong>Letters of Conservatorship</strong>
        &mdash; the official document that proves the conservator&rsquo;s authority. These Letters
        are what the conservator will present to the insurance company, banks, and other
        institutions to establish their right to act on the conservatee&rsquo;s behalf.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 4: Bond and Inventory
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Before Letters of Conservatorship are issued, the court typically requires the conservator
        to post a <strong>surety bond</strong> (Probate Code &sect;2320). The bond protects the
        conservatee&rsquo;s assets by ensuring that a bonding company will cover any losses caused
        by the conservator&rsquo;s mismanagement or malfeasance. Within 90 days of appointment,
        the conservator must also file an inventory and appraisal of the conservatee&rsquo;s
        estate (Probate Code &sect;2610).
      </p>

      <CalloutBox variant="info" title="Timeline: How Long Does It Take?">
        <p>
          From filing the petition to obtaining Letters of Conservatorship, the standard process
          typically takes <strong>six to eight weeks</strong> in California. This timeline assumes
          no objections are filed and the court&rsquo;s calendar is not significantly backed up.
          In busy jurisdictions (Los Angeles, for example), the timeline can stretch to 10&ndash;12
          weeks. If a family member or the proposed conservatee objects, contested proceedings can
          take several months or longer. During this entire period, the insurance claim remains
          unresolved &mdash; and the insurer&rsquo;s deadlines continue to run.
        </p>
      </CalloutBox>

      {/* ───────── Conservator's Authority Over Claims ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Conservator&rsquo;s Authority to Manage Insurance Claims
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Once a conservator of the estate is appointed and Letters of Conservatorship are issued,
        the conservator steps into the conservatee&rsquo;s shoes for purposes of managing their
        financial and property affairs. Under Probate Code Section 2400, the conservator of the
        estate has the duty to take possession of, manage, and protect the conservatee&rsquo;s
        assets. This authority specifically includes:
      </p>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          <strong>Filing insurance claims</strong> on the conservatee&rsquo;s behalf for damage
          to the conservatee&rsquo;s property
        </li>
        <li>
          <strong>Providing sworn proof of loss</strong> and other documentation required by the
          insurance policy
        </li>
        <li>
          <strong>Granting access for inspections</strong> &mdash; permitting the insurer&rsquo;s
          adjusters, engineers, and other experts to inspect the conservatee&rsquo;s property
        </li>
        <li>
          <strong>Hiring professionals</strong> &mdash; retaining public adjusters, attorneys,
          contractors, engineers, and other experts to assist with the claim
        </li>
        <li>
          <strong>Negotiating with the insurer</strong> over coverage, scope of loss, and
          valuation
        </li>
        <li>
          <strong>Receiving insurance proceeds</strong> &mdash; collecting checks and directing
          payments into the conservatorship estate account
        </li>
        <li>
          <strong>Directing emergency repairs</strong> to mitigate further damage to the insured
          property (Probate Code &sect;2401)
        </li>
        <li>
          <strong>Settling the claim</strong> &mdash; with court approval where required (see
          below)
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The conservator&rsquo;s authority is documented in the Letters of Conservatorship. When
        dealing with the insurance company, the conservator should present a <strong>certified
        copy</strong> of the Letters (not a photocopy) along with a certified copy of the court
        order granting conservatorship. Most insurers will also require a copy of the court order
        and may have their own internal process for &ldquo;recognizing&rdquo; the conservator
        on the claim file.
      </p>

      <CalloutBox variant="tip" title="Get Multiple Certified Copies">
        <p>
          When Letters of Conservatorship are issued, request at least five or six certified copies
          from the court clerk. You will need to provide certified copies to the insurance company,
          the mortgagee (if there is a mortgage), banks, utility companies, and potentially
          contractors. Each institution typically requires its own original certified copy. The
          cost is nominal (usually $25&ndash;$30 per certified copy), and having them on hand
          avoids delays later when the insurer or bank requests documentation of your authority.
        </p>
      </CalloutBox>

      {/* ───────── Court Approval for Settlements ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Court Approval Requirements for Settlements
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        One of the most significant differences between managing a claim as a conservator versus
        managing it under a power of attorney is the requirement for <strong>court approval of
        settlements</strong>. A conservator does not have unlimited authority to settle claims on
        behalf of the conservatee. California law imposes oversight requirements designed to
        protect the incapacitated person from having their claims settled for less than fair value.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        When Court Approval Is Required
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under Probate Code Section 2505, a conservator must obtain court approval before
        compromising or settling any claim belonging to the conservatee&rsquo;s estate. This
        includes insurance claims. The conservator files a petition for approval of the compromise,
        and the court evaluates whether the proposed settlement is reasonable and in the
        conservatee&rsquo;s best interest.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The requirement applies to:
      </p>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          Any settlement of a disputed insurance claim &mdash; where the insurer is paying less
          than the full amount demanded
        </li>
        <li>
          Any release or waiver of claims against the insurer
        </li>
        <li>
          Any settlement that includes a release of future claims or a waiver of additional
          policy benefits
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        In practice, this means that when the insurer makes a settlement offer, the conservator
        cannot simply accept it. The conservator must file a petition with the court, provide
        the court with enough information to evaluate the reasonableness of the settlement
        (including the nature of the claim, the insurer&rsquo;s position, any expert opinions
        on value, and the conservator&rsquo;s recommendation), and wait for the court to approve
        the compromise at a hearing.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        When Court Approval May Not Be Required
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Court approval is generally not required for:
      </p>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          <strong>Undisputed payments:</strong> Receiving insurance proceeds that are not the
          product of a compromise or settlement &mdash; for example, an advance payment, a partial
          payment on an undisputed portion of the claim, or a payment that reflects the full
          amount owed for a particular coverage category
        </li>
        <li>
          <strong>Routine claim management:</strong> Filing the claim, providing documentation,
          granting access for inspections, and negotiating with the insurer are all within the
          conservator&rsquo;s ordinary authority and do not require separate court approval
        </li>
        <li>
          <strong>Emergency repairs:</strong> Under Probate Code Section 2401, the conservator
          may take reasonable steps to preserve and protect the conservatee&rsquo;s property
          without prior court approval, including authorizing emergency repairs to prevent
          further damage
        </li>
      </ul>

      <CalloutBox variant="important" title="This Protects the Policyholder">
        <p>
          The court approval requirement is not an obstacle &mdash; it is a safeguard. It prevents
          a conservator from accepting a lowball settlement that does not fully compensate the
          policyholder. In practice, the court&rsquo;s involvement can actually strengthen the
          policyholder&rsquo;s bargaining position: the conservator can truthfully tell the
          insurer, &ldquo;I cannot accept this offer &mdash; I have a fiduciary duty to the
          conservatee, and the court will not approve a settlement that is not in the
          conservatee&rsquo;s best interest.&rdquo; This takes the pressure off the conservator
          and puts the spotlight on the insurer to make a fair offer.
        </p>
      </CalloutBox>

      {/* ───────── Surety Bond Requirements ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Surety Bond Requirements and Insurance Proceeds
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a conservator of the estate is appointed, the court requires the conservator to
        post a <strong>surety bond</strong> in an amount determined by the court (Probate Code
        &sect;2320). The bond is designed to protect the conservatee&rsquo;s assets. If the
        conservator mismanages or misappropriates the conservatee&rsquo;s assets, the bonding
        company pays for the loss, up to the amount of the bond.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        How the Bond Amount Is Calculated
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The bond amount is typically set at the total value of the conservatee&rsquo;s personal
        property (including anticipated income for one year) plus the value of any real property
        that the conservator has the power to sell, convey, or encumber (Probate Code &sect;2320(a)).
        When large insurance proceeds are received into the conservatorship estate, the total
        assets under the conservator&rsquo;s control increase &mdash; and the bond may need to
        be <strong>increased</strong> to reflect the new, higher value.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For example, if the conservatorship estate initially consisted of a home valued at
        $600,000 and personal property worth $50,000, the bond might be set at $50,000 (covering
        the personal property and anticipated income). But if the insurer pays a $300,000 claim
        into the conservatorship account, the conservator now controls $350,000 in liquid assets.
        The conservator has an affirmative duty to petition the court to increase the bond, and
        the court may increase it on its own motion.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Bond Costs and Alternatives
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The conservator does not pay the full bond amount out of pocket. Instead, the conservator
        pays an <strong>annual premium</strong> to a surety company, typically ranging from 0.5%
        to 1.5% of the bond amount. This premium is paid from the conservatorship estate (it is
        a legitimate expense of administration). However, for large estates, the premium can be
        significant.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In some cases, the court may waive or reduce the bond requirement if the conservator
        deposits the conservatee&rsquo;s funds into a <strong>blocked account</strong> &mdash;
        a bank account that cannot be accessed without a court order (Probate Code &sect;2328).
        This is a practical alternative when the conservatorship estate consists primarily of
        liquid assets, such as insurance proceeds, because the blocked account provides the
        same asset protection as the bond without the annual premium cost.
      </p>

      <CalloutBox variant="tip" title="Blocked Accounts Can Reduce Bond Costs">
        <p>
          If a large insurance settlement is expected, discuss the possibility of a blocked account
          with the conservatorship attorney before the funds arrive. Having the court order a
          blocked account in advance can avoid the need to increase the bond and save the estate
          significant premium costs over the life of the conservatorship. The trade-off is that
          accessing funds in a blocked account requires a court order, which takes time &mdash; so
          it is important to keep sufficient unblocked funds available for ongoing expenses,
          including repairs to the insured property.
        </p>
      </CalloutBox>

      {/* ───────── Insurer's Duty to the Conservator ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Insurer&rsquo;s Duty to Deal with a Properly Appointed Conservator
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Once a conservator of the estate has been appointed and presents valid Letters of
        Conservatorship, the insurer has a legal obligation to recognize and deal with the
        conservator as the authorized representative of the policyholder. The conservator
        <strong> is</strong> the policyholder for purposes of the claim. The insurer cannot:
      </p>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          Refuse to communicate with the conservator about the claim
        </li>
        <li>
          Refuse to provide claim documents, estimates, or coverage information to the conservator
        </li>
        <li>
          Insist on dealing directly with the incapacitated conservatee instead of the conservator
        </li>
        <li>
          Deny the claim solely on the basis that the &ldquo;insured&rdquo; is not the person
          presenting the claim
        </li>
        <li>
          Impose additional requirements or delays on the claim because a conservator is involved
          rather than the policyholder directly
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under the California Fair Claims Settlement Practices Regulations (California Code of
        Regulations, Title 10, Section 2695.1 et seq.), an insurer must deal fairly and in good
        faith with any claimant, which includes a conservator acting on behalf of the policyholder.
        The insurer must respond to communications, process the claim in accordance with statutory
        deadlines, and not use the conservatorship as a pretext for delay.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the insurer delays or denies the claim because a conservator is managing it rather than
        the policyholder personally, this may constitute{' '}
        <Link href="/resources/bad-faith" className="text-[#2E74B5] hover:underline">
          bad faith
        </Link>{' '}
        and a violation of the{' '}
        <Link href="/resources/california-fair-claims" className="text-[#2E74B5] hover:underline">
          Fair Claims Settlement Practices Regulations
        </Link>. Where the policyholder is an{' '}
        <Link href="/resources/elder-abuse-insurance" className="text-[#2E74B5] hover:underline">
          elder or dependent adult
        </Link>, such conduct may also give rise to claims under the Elder Abuse Act.
      </p>

      <CalloutBox variant="warning" title="Document Everything from the Start">
        <p>
          From the moment the conservator begins dealing with the insurer, every communication
          should be documented. Send correspondence by email with a request for written
          confirmation, or by certified mail. Keep a log of every phone call, including the date,
          time, the name of the adjuster or representative, and what was discussed. If the insurer
          causes unnecessary delays or refuses to deal with the conservator, this documentation
          becomes critical evidence for a{' '}
          <Link href="/resources/bad-faith" className="text-[#2E74B5] hover:underline">
            bad faith
          </Link>{' '}
          claim.
        </p>
      </CalloutBox>

      {/* ───────── Temporary Conservatorship ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Temporary Conservatorship: Emergency Situations When Property Is at Risk
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Because the standard conservatorship process takes six to twelve weeks &mdash; and sometimes
        longer &mdash; California law provides a mechanism for emergency situations: the{' '}
        <strong>temporary conservatorship</strong> (Probate Code &sect;2250). A temporary
        conservatorship can be granted on an expedited basis, typically within days of filing,
        when the court finds that the proposed conservatee&rsquo;s person or estate will suffer
        immediate and irreparable harm without the appointment of a temporary conservator.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In the insurance claim context, a temporary conservatorship may be appropriate when:
      </p>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          The insured property has been damaged and emergency repairs are needed to prevent
          further damage, but no one has authority to authorize the work
        </li>
        <li>
          The insurer&rsquo;s proof-of-loss deadline or other policy deadline is approaching and
          the incapacitated policyholder cannot submit the required documentation
        </li>
        <li>
          The insurer is making a time-limited settlement offer that will expire before a
          permanent conservatorship can be established
        </li>
        <li>
          The insured property is at risk of further damage (for example, a roof is compromised
          and rain is forecast) and someone needs legal authority to contract for repairs
        </li>
        <li>
          The insurer is threatening to close the claim file due to lack of communication
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        How Temporary Conservatorship Works
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The petition for temporary conservatorship is typically filed at the same time as the
        petition for permanent conservatorship. The petitioner must demonstrate to the court that
        there is an emergency &mdash; that waiting for the permanent hearing will result in harm
        to the conservatee or their estate. The court can hear the temporary petition on shortened
        notice (as little as five days under Probate Code &sect;2250(e)) and can grant temporary
        Letters of Conservatorship that give the temporary conservator authority to act immediately.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        However, the temporary conservator&rsquo;s powers are more limited than those of a
        permanent conservator. The court will specify exactly what the temporary conservator is
        authorized to do, and those powers are typically restricted to what is necessary to
        address the emergency. For an insurance claim, the court might authorize the temporary
        conservator to:
      </p>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>File the insurance claim and submit documentation to the insurer</li>
        <li>Authorize emergency repairs to protect the property from further damage</li>
        <li>Receive insurance advance payments for emergency expenses</li>
        <li>Communicate with the insurer regarding the claim</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        A temporary conservatorship expires when the permanent conservatorship is established or
        when the court orders it terminated, whichever occurs first. The temporary conservator
        should not expect to negotiate or settle the claim &mdash; those decisions will typically
        wait for the permanent conservator unless the court specifically grants that authority.
      </p>

      {/* ───────── Practical Issues: Protecting the Claim ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Practical Issues: Protecting the Claim While the Court Process Is Pending
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The gap between when the policyholder becomes incapacitated and when the conservator is
        officially appointed is the most dangerous period for the insurance claim. The damage has
        occurred. The insurer&rsquo;s clock is running. And no one yet has formal legal authority.
        Here is what families and their counsel should know about protecting the claim during
        this window.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Notify the Insurer Immediately
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Even without a conservator in place, someone should notify the insurance company that a
        loss has occurred. This is not the same as filing a formal claim &mdash; it is putting the
        insurer on notice. The notification should be in writing and should state:
      </p>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          The policyholder&rsquo;s name and policy number
        </li>
        <li>
          The date and nature of the loss
        </li>
        <li>
          That the policyholder is incapacitated and unable to manage the claim personally
        </li>
        <li>
          That a conservatorship proceeding is being initiated and the family member anticipates
          being appointed conservator
        </li>
        <li>
          A request that the insurer preserve its right to accept the claim and not take any
          adverse action pending the conservatorship appointment
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        This notification does not bind the insurer or create legal obligations the way a formal
        claim would, but it creates a record that the insurer was informed of the loss promptly.
        If the insurer later tries to argue that the claim was untimely because the formal filing
        did not occur until after the conservator was appointed, this notification undermines
        that argument.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Mitigate the Damage
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Every insurance policy requires the policyholder to take reasonable steps to prevent
        further damage to the property after a loss. This obligation does not pause because the
        policyholder is incapacitated. While the legal nuances of who has authority to authorize
        repairs can be complex, the practical reality is that someone needs to board up broken
        windows, tarp the roof, stop the water leak, and take the other emergency measures that
        prevent the damage from getting worse.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Family members who take these emergency actions are doing what any reasonable person
        would do to protect the property. They should document everything: take photographs
        before and after, keep receipts, and get written descriptions of the emergency work
        performed. These costs are generally recoverable under the policy&rsquo;s emergency
        repair or mitigation provisions, and the conservator can submit them for reimbursement
        once appointed.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Document the Damage Thoroughly
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Photographs, video, and written descriptions of the damage should be created as soon
        as possible after the loss, regardless of whether a conservator has been appointed.
        Evidence degrades over time. Repairs may obscure the original damage. Weather may
        make conditions worse. The person documenting the damage does not need to be the
        conservator &mdash; anyone can take photographs. What matters is that the documentation
        is thorough and is preserved for the conservator to use later.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Consult an Attorney Early
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The family should consult both a <strong>conservatorship attorney</strong> (probate/estate
        planning law) and, separately, an attorney experienced in{' '}
        <Link href="/resources/bad-faith" className="text-[#2E74B5] hover:underline">
          insurance bad faith
        </Link>{' '}
        litigation or a{' '}
        <Link href="/resources/public-adjuster" className="text-[#2E74B5] hover:underline">
          licensed Public Adjuster
        </Link>{' '}
        as early as possible. The conservatorship attorney handles the court proceeding. The
        insurance professional advises on how to protect the claim and positions the conservator
        to maximize the recovery once authority is established. These are two different skill
        sets, and both are needed.
      </p>

      <CalloutBox variant="tip" title="Consider Equitable Tolling">
        <p>
          If the policyholder becomes incapacitated and no one has authority to act, certain
          deadlines &mdash; including the statute of limitations &mdash; may be subject to{' '}
          <Link href="/resources/equitable-tolling" className="text-[#2E74B5] hover:underline">
            equitable tolling
          </Link>. California courts have recognized that when a party is prevented from taking
          legal action by circumstances beyond their control, including legal incapacity, the
          running of the limitations period may be suspended. This is not automatic &mdash; it
          requires the party to demonstrate diligence in pursuing their rights once the disability
          was removed (i.e., once the conservator was appointed). But it can provide critical
          protection for claims that might otherwise expire during the conservatorship process.
        </p>
      </CalloutBox>

      {/* ───────── Cognitive Decline Overlap ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When Conservatorship Intersects with Cognitive Decline
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many conservatorship cases in the insurance context involve elderly policyholders with{' '}
        <Link href="/resources/cognitive-decline-insurance" className="text-[#2E74B5] hover:underline">
          progressive cognitive decline
        </Link>{' '}
        &mdash; dementia, Alzheimer&rsquo;s disease, or other conditions that gradually erode the
        policyholder&rsquo;s ability to manage their affairs. These cases present unique challenges:
      </p>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          <strong>The loss may have been caused or worsened by the cognitive decline itself</strong>
          &mdash; a policyholder with dementia may have forgotten to turn off the stove, left a
          faucet running, or failed to maintain the property, leading to damage that might
          otherwise have been prevented.
        </li>
        <li>
          <strong>The insurer may argue the policyholder failed to mitigate</strong> &mdash;
          claiming that the policyholder should have taken steps to prevent further damage after
          the initial loss. This argument is particularly offensive when directed at someone
          who lacks the cognitive capacity to understand the loss has occurred.
        </li>
        <li>
          <strong>The policyholder may have signed documents they did not understand</strong>
          &mdash; if the insurer obtained a recorded statement, a proof of loss, or a settlement
          release from a policyholder whose cognitive capacity was impaired, the validity of
          those documents is subject to challenge.
        </li>
        <li>
          <strong>The timeline of incapacity becomes critical</strong> &mdash; the conservator
          and the insurer may disagree about when the policyholder lost capacity, which affects
          whether prior claim activity (including any prior settlements or releases) is valid.
        </li>
      </ul>

      <CalloutBox variant="warning" title="Recorded Statements from Impaired Policyholders">
        <p>
          If the insurer obtained a{' '}
          <Link href="/resources/recorded-statements-siu" className="text-[#2E74B5] hover:underline">
            recorded statement
          </Link>{' '}
          from the policyholder before the conservatorship was established, the conservator
          should immediately obtain a copy and have it reviewed. If the policyholder lacked
          capacity at the time the statement was taken, the statement may be unreliable, and any
          admissions or inconsistencies in the statement should not be held against the
          conservatee. The conservator may need to address this directly with the insurer, and
          in some cases, the insurer&rsquo;s conduct in taking a statement from an impaired
          person may itself be evidence of bad faith.
        </p>
      </CalloutBox>

      {/* ───────── Conservatorship and Probate Overlap ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When the Policyholder Dies During the Conservatorship
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the conservatee dies while the conservatorship is active and the insurance claim is
        still pending, the conservatorship terminates by operation of law (Probate Code &sect;1860).
        The conservator&rsquo;s authority ends, and the claim transfers to the{' '}
        <Link href="/resources/insurance-properties-probate" className="text-[#2E74B5] hover:underline">
          probate estate
        </Link>. The executor or administrator of the decedent&rsquo;s estate then takes over
        management of the insurance claim.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This transition requires prompt action:
      </p>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          The former conservator should notify the insurer of the conservatee&rsquo;s death and
          inform them that authority will be transitioning to the estate representative
        </li>
        <li>
          A probate proceeding must be initiated (if not already in progress) to appoint an
          executor or administrator
        </li>
        <li>
          The new estate representative should present their Letters Testamentary or Letters of
          Administration to the insurer as soon as they are issued
        </li>
        <li>
          Any pending court approval for settlement in the conservatorship case will need to be
          refiled in the probate proceeding
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        For more on how insurance claims are handled when the policyholder dies, see our article
        on{' '}
        <Link href="/resources/policyholder-death-coverage" className="text-[#2E74B5] hover:underline">
          what happens to insurance when the policyholder dies
        </Link>.
      </p>

      {/* ───────── Special Considerations for Attorneys ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Special Considerations for Attorneys
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Attorneys involved in conservatorship cases that include insurance claims should be aware
        of several issues that arise at the intersection of probate law and insurance law:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Conflict of Interest Screening
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The conservator has a fiduciary duty to act in the conservatee&rsquo;s best interest. If
        the conservator is also a beneficiary of the conservatee&rsquo;s estate (for example, an
        adult child who stands to inherit the insured property), there is an inherent tension
        between the conservator&rsquo;s duty to the conservatee and their personal financial
        interest. The court is aware of this tension, and it is one reason why court approval is
        required for settlements. Attorneys should ensure that any potential conflicts are
        disclosed to the court and that the settlement truly serves the conservatee&rsquo;s
        interest, not just the conservator&rsquo;s.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Fee Arrangements and Court Oversight
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Attorney fees in a conservatorship case are subject to court approval (Probate Code
        &sect;2640 et seq.). Similarly, public adjuster fees are an expense of the
        conservatorship estate and should be disclosed to the court. If the insurance claim is
        large and the professional fees are significant, the conservator should include fee
        arrangements in the petition for approval of the settlement so that the court can evaluate
        the net recovery to the conservatee&rsquo;s estate.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Coordination Between Probate Counsel and Insurance Counsel
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        In complex cases, the conservatorship attorney and the insurance attorney (or bad faith
        litigation attorney) may be different people. Coordination between them is essential.
        The probate attorney ensures the conservator has proper legal authority and that all court
        requirements are met. The insurance attorney or public adjuster handles the substance of
        the claim. When settlements are reached, both need to coordinate on the petition for
        court approval to ensure the court has sufficient information to evaluate the
        reasonableness of the settlement.
      </p>

      {/* ───────── Alternatives to Conservatorship ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Alternatives to Conservatorship
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Conservatorship is a significant legal proceeding &mdash; it is expensive (attorney fees,
        court costs, bond premiums, and ongoing reporting requirements), time-consuming, and
        involves a judicial finding that the conservatee lacks capacity. Before pursuing a
        conservatorship solely to manage an insurance claim, consider whether any of the following
        alternatives might apply:
      </p>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          <strong>Existing Durable Power of Attorney:</strong> Check whether the policyholder
          executed a{' '}
          <Link href="/resources/power-of-attorney-insurance-claims" className="text-[#2E74B5] hover:underline">
            durable power of attorney
          </Link>{' '}
          that grants authority over financial and insurance matters. If one exists, it may
          already provide the necessary authority without a conservatorship.
        </li>
        <li>
          <strong>Trust with Successor Trustee:</strong> If the insured property is held in a
          revocable living trust, the successor trustee may have authority to manage insurance
          claims on the trust&rsquo;s property without a conservatorship. However, the
          successor trustee&rsquo;s authority extends only to trust assets &mdash; if the claim
          involves personal property not in the trust, or if the policyholder individually (not
          the trust) is the named insured, additional authority may be needed.
        </li>
        <li>
          <strong>Community Property with Right of Survivorship:</strong> In some cases, a
          spouse may have independent authority over community property assets, depending on
          the nature of the claim and the specific insurance policy provisions. This does not
          eliminate the need for a conservatorship in all cases, but it may reduce the scope
          of authority needed.
        </li>
        <li>
          <strong>VA Fiduciary (for Veterans):</strong> If the policyholder is a veteran
          receiving VA benefits, a VA-appointed fiduciary may have limited authority over
          certain financial matters. This is a narrow exception and generally does not extend
          to managing property insurance claims.
        </li>
      </ul>

      <CalloutBox variant="info" title="Prevention Is Always Better">
        <p>
          The best way to avoid the cost, delay, and complexity of a conservatorship is to execute
          a{' '}
          <Link href="/resources/power-of-attorney-insurance-claims" className="text-[#2E74B5] hover:underline">
            durable power of attorney
          </Link>{' '}
          while the policyholder still has capacity. A properly drafted durable power of attorney
          that specifically grants authority over insurance matters costs a fraction of what a
          conservatorship costs, takes effect immediately when needed, and does not require court
          involvement. If you are reading this article because a family member is becoming
          increasingly impaired but has not yet lost capacity, the time to act is now &mdash; not
          after capacity is gone.
        </p>
      </CalloutBox>

      {/* ───────── Checklist ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Conservatorship and Insurance Claim Checklist
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        For families and attorneys navigating a conservatorship that involves an insurance claim,
        the following checklist summarizes the key steps:
      </p>
      <ol className="list-decimal pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          <strong>Secure the property and mitigate further damage immediately</strong> &mdash;
          do not wait for the conservatorship to be established
        </li>
        <li>
          <strong>Document all damage</strong> with photographs, video, and written descriptions
          as soon as possible after the loss
        </li>
        <li>
          <strong>Notify the insurer in writing</strong> that a loss has occurred and that the
          policyholder is incapacitated
        </li>
        <li>
          <strong>Check for existing estate planning documents</strong> &mdash; durable power of
          attorney, trust, or other instruments that might provide authority without a
          conservatorship
        </li>
        <li>
          <strong>Consult a conservatorship attorney</strong> and begin the petition process
          immediately
        </li>
        <li>
          <strong>File for temporary conservatorship</strong> if there is an emergency &mdash;
          property at risk, approaching deadlines, or the insurer threatening adverse action
        </li>
        <li>
          <strong>Consult an insurance professional</strong> &mdash; a public adjuster or
          insurance attorney &mdash; to begin building the claim file in parallel with the
          conservatorship proceeding
        </li>
        <li>
          <strong>Once Letters of Conservatorship are issued,</strong> provide certified copies
          to the insurer and formally file or take over the claim
        </li>
        <li>
          <strong>Post the required surety bond</strong> and file the inventory and appraisal
          within 90 days
        </li>
        <li>
          <strong>Manage the claim</strong> &mdash; file documentation, negotiate with the
          insurer, authorize repairs, and collect payments
        </li>
        <li>
          <strong>Before settling any disputed claim,</strong> petition the court for approval
          of the compromise under Probate Code Section 2505
        </li>
        <li>
          <strong>If the bond needs to be increased</strong> after receiving insurance proceeds,
          petition the court or arrange for a blocked account
        </li>
        <li>
          <strong>File annual accountings</strong> with the court showing how insurance proceeds
          and all other estate funds have been managed (Probate Code &sect;2620)
        </li>
      </ol>

      {/* ───────── Related Resources ───────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Related Resources
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The topics covered in this article intersect with several other areas of insurance claim
        management. For additional information, see:
      </p>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          <Link href="/resources/power-of-attorney-insurance-claims" className="text-[#2E74B5] hover:underline">
            Power of Attorney and Insurance Claims
          </Link>{' '}
          &mdash; How a durable power of attorney works in the insurance context, and why every
          policyholder should have one
        </li>
        <li>
          <Link href="/resources/cognitive-decline-insurance" className="text-[#2E74B5] hover:underline">
            Cognitive Decline and Insurance Claims
          </Link>{' '}
          &mdash; The challenges that arise when a policyholder&rsquo;s cognitive capacity is
          declining, including protecting the claim and the policyholder&rsquo;s rights
        </li>
        <li>
          <Link href="/resources/insurance-properties-probate" className="text-[#2E74B5] hover:underline">
            Insurance Claims and Probate
          </Link>{' '}
          &mdash; What happens to insurance claims when property passes through probate, and how
          the estate representative manages the claim
        </li>
        <li>
          <Link href="/resources/elder-abuse-insurance" className="text-[#2E74B5] hover:underline">
            Elder Abuse in Insurance Claims
          </Link>{' '}
          &mdash; Enhanced remedies available when an insurer engages in bad faith against an
          elderly or dependent adult policyholder
        </li>
        <li>
          <Link href="/resources/equitable-tolling" className="text-[#2E74B5] hover:underline">
            Equitable Tolling of Insurance Deadlines
          </Link>{' '}
          &mdash; When the statute of limitations and other deadlines may be paused due to
          circumstances beyond the policyholder&rsquo;s control
        </li>
        <li>
          <Link href="/resources/policyholder-death-coverage" className="text-[#2E74B5] hover:underline">
            What Happens to Insurance When the Policyholder Dies
          </Link>{' '}
          &mdash; Coverage issues that arise when the named insured passes away before or during
          a claim
        </li>
      </ul>

      {/* ───────── Disclaimer ───────── */}
      <CalloutBox variant="legal" title="Disclaimer">
        <p>
          This article is for general educational purposes only and does not constitute legal
          advice. Nothing in this article should be construed as a legal opinion or as a
          substitute for consultation with a qualified attorney. The California Probate Code
          provisions, regulations, and legal principles discussed reflect California law as
          of the date of publication. Conservatorship law is complex and fact-specific &mdash;
          the procedures, timelines, and requirements described here may vary depending on the
          county, the specific circumstances of the case, and any changes in the law. Always
          consult with a licensed attorney experienced in California conservatorship and estate
          law before pursuing a conservatorship, and with an attorney or licensed public adjuster
          experienced in insurance claims before making decisions about the claim.
        </p>
        <p className="mt-2">
          <strong>Author:</strong> Leland Coontz III, Licensed Public Adjuster, CA License #2B53445
        </p>
      </CalloutBox>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Need Help Managing an Insurance Claim for an Incapacitated Family Member?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          When a policyholder cannot manage their own insurance claim and no power of attorney
          exists, the claim becomes vulnerable to delay, underpayment, and denial. A Licensed
          Public Adjuster can work with the conservator &mdash; or with the family before the
          conservatorship is established &mdash; to protect the claim, document the damage, and
          position the case for a fair recovery.
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
