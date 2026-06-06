import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title:
    'When a Mortgage Company Tries to Hire a Public Adjuster: Understanding the Legal Boundaries',
  description:
    'The lender\'s loss payable endorsement, mortgagee rights, privacy laws, and why a mortgage company cannot hire a Public Adjuster unless it is an insured. A real-world case study.',
  summary:
    'A mortgage company generally cannot hire a Public Adjuster on your claim unless it is itself an insured, because of the limits of the loss-payable endorsement, mortgagee rights, and privacy law. Understand these boundaries if a lender tries.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        After a major wildfire destroyed or damaged thousands of homes in California, the insurance
        claims process became contentious &mdash; not just between homeowners and their insurance
        companies, but between the homeowners&apos; representatives and uninvited third parties
        trying to muscle their way into the claim.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This article explores a real situation (with names and identifying details changed) in which
        a public adjusting firm attempted to insert itself into a homeowner&apos;s fire insurance
        claim on behalf of the mortgage company. The conflict raised important questions about
        mortgagee rights under the insurance policy, the legal scope of a Public Adjuster&apos;s
        license, privacy protections for insured homeowners, and the proper boundaries between a
        lender&apos;s legitimate interests and overreach.
      </p>

      {/* ────────────────── WHAT HAPPENED ────────────────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">What Happened</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A homeowner &mdash; call him Mr. Smith &mdash; suffered significant smoke damage to his home
        in a California wildfire. He hired a licensed Public Adjuster to represent him in the
        insurance claim. The claim was progressing normally: the Public Adjuster communicated with
        the insurance company&apos;s adjusters, submitted estimates, documented damage, and
        negotiated on behalf of the insured.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Then, one day, the insurance company forwarded an email to Mr. Smith&apos;s Public Adjuster.
        A different public adjusting firm &mdash; one that nobody on the insured&apos;s side had ever
        heard of &mdash; had contacted the insurance company. This other firm presented
        a &ldquo;designee authorization&rdquo; letter from the mortgage company (a major national
        bank) and demanded the following from the insurer:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Who filed the claim and on what date</li>
        <li>The estimate of damages, including the settlement letter and full estimate, or any denial</li>
        <li>A copy of the settlement check showing the payee, date issued, and amount</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The mortgage company&apos;s public adjusting firm was essentially demanding the claim file.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Mr. Smith&apos;s Public Adjuster immediately recognized the problem. The mortgage company
        is <strong>not an insured</strong> under the homeowner&apos;s insurance policy. And in
        California, a Public Adjuster is only licensed to represent <strong>insureds</strong>.
        Something was very wrong.
      </p>

      <CalloutBox variant="important" title="The Core Issue">
        <p>
          A Public Adjuster is only licensed to represent <strong>an insured</strong>. A mortgage
          company is not an insured under a standard homeowner&apos;s policy. It is a loss payee
          with derivative contractual rights &mdash; that is not the same thing.
        </p>
      </CalloutBox>

      {/* ────────────────── MORTGAGE CLAUSE ────────────────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        The Lender&apos;s Loss Payable Endorsement and the Mortgage Clause
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        To understand this conflict, you need to understand the mortgage clause &mdash; sometimes
        called the lender&apos;s loss payable endorsement &mdash; that appears in most
        homeowner&apos;s insurance policies. This endorsement (which in standard policy forms often
        carries a designation like &ldquo;BFN&rdquo; or similar) defines the rights of the mortgage
        company in relation to the insurance policy.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here is what a typical mortgage clause provides, along with what each provision actually
        means:
      </p>

      {/* ── 1. Joint Payment ── */}
      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        1. Joint Payment for Dwelling Losses
      </h3>
      <CalloutBox variant="legal" title="Policy Language">
        <p>
          &ldquo;If a mortgagee is named in this policy, any loss payable under Coverage A or B will
          be paid to the mortgagee and you, as interests appear.&rdquo;
        </p>
      </CalloutBox>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>What this means:</strong> If the balance on the mortgage is $160,000 and the
        dwelling repair payment is $200,000, the insurance company issues a check payable to both the
        insured and the bank for the first $160,000 (up to the mortgage balance). Any amount above
        the mortgage balance goes to the insured alone.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Important limitation:</strong> This applies only to Coverage A (Dwelling) and
        Coverage B (Other Structures). The mortgage company is <strong>not</strong> entitled to be a
        payee on personal property (Coverage C) or additional living expense / temporary housing
        (Coverage D) payments. Those coverages are for the insured&apos;s personal benefit and have
        nothing to do with the lender&apos;s collateral interest.
      </p>

      {/* ── 2. Priority ── */}
      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        2. Priority of Multiple Mortgagees
      </h3>
      <CalloutBox variant="legal" title="Policy Language">
        <p>
          &ldquo;If more than one mortgagee is named, the order of payment will be the same as the
          order of precedence of the mortgages.&rdquo;
        </p>
      </CalloutBox>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>What this means:</strong> If there are two mortgages on the property, the first
        mortgage gets paid before the second. This is a straightforward reflection of lien priority.
      </p>

      {/* ── 3. Independent Protection ── */}
      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        3. Independent Protection for the Mortgagee if the Insured&apos;s Claim Is Denied
      </h3>
      <CalloutBox variant="legal" title="Policy Language">
        <p>
          &ldquo;If we deny your claim, that denial will not apply to a valid claim of the
          mortgagee, if the mortgagee: (a) Notifies us of any change in ownership, occupancy or
          substantial change in risk of which the mortgagee is aware; (b) Pays any premium due under
          this policy on demand if you have neglected to pay the premium; and (c) Submits a signed,
          sworn statement of loss within 60 days after receiving notice from us of your failure to do
          so.&rdquo;
        </p>
      </CalloutBox>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>What this means:</strong> This is the most powerful provision the mortgage clause
        gives the lender. If the homeowner&apos;s claim is denied (for example, because the
        homeowner committed fraud or violated a policy condition), the mortgage company can still
        recover &mdash; but only if the mortgage company has been transparent about changes to the
        property, has kept the premiums current, and files its own sworn proof of loss within 60 days
        of being notified.
      </p>

      <CalloutBox variant="warning" title="The Common Misconception">
        <p>
          This provision gives rise to the common misconception that the mortgage company
          is &ldquo;an insured.&rdquo; It is not. The mortgage company has <strong>derivative
          rights</strong> under the policy &mdash; rights that derive from being a named loss payee.
          These are contractual protections for the lender&apos;s collateral interest, not a grant of
          insured status. The mortgage company did not apply for the policy, did not pay the premium
          (unless they stepped in after the homeowner defaulted), and does not have the general
          rights of an insured.
        </p>
      </CalloutBox>

      {/* ── 4. Subrogation Rights ── */}
      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        4. Subrogation Rights
      </h3>
      <CalloutBox variant="legal" title="Policy Language">
        <p>
          &ldquo;If we pay the mortgagee for any loss and deny payment to you: (a) We are subrogated
          to all the rights of the mortgagee granted under the mortgage on the property; or (b) At
          our option, we may pay to the mortgagee the whole principal on the mortgage plus any
          accrued interest.&rdquo;
        </p>
      </CalloutBox>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>What this means:</strong> If the insurance company pays the bank on a claim but
        denies the homeowner&apos;s portion, the insurance company can either step into the
        bank&apos;s shoes (and potentially foreclose) or pay off the entire mortgage and take over
        the loan.
      </p>

      {/* ── 5. Protection of Recovery ── */}
      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        5. Protection of Mortgagee&apos;s Recovery
      </h3>
      <CalloutBox variant="legal" title="Policy Language">
        <p>
          &ldquo;Subrogation will not impair the right of the mortgagee to recover the full amount
          of the mortgagee&apos;s claim.&rdquo;
        </p>
      </CalloutBox>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>What this means:</strong> The bank gets its full payment regardless of any
        subrogation action. If a third party caused the fire, the insurance company&apos;s effort to
        recover from that third party does not reduce what the bank receives.
      </p>

      {/* ── 6. Cancellation Notice ── */}
      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        6. Cancellation Notice
      </h3>
      <CalloutBox variant="legal" title="Policy Language">
        <p>
          &ldquo;If we decide to cancel or not to renew this policy, the mortgagee will be notified
          at least 10 days before the date cancellation or nonrenewal takes effect.&rdquo;
        </p>
      </CalloutBox>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>What this means:</strong> The bank gets advance notice before the policy lapses,
        giving it the opportunity to force-place insurance or take other protective action.
      </p>

      {/* ────────────────── ENTITLED / NOT ENTITLED ────────────────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        What the Mortgage Company Is &mdash; and Is Not &mdash; Entitled To
      </h2>
      <p className="text-gray-700 leading-relaxed mb-3">
        Based on the mortgage clause, the mortgage company has the following{' '}
        <strong>legitimate interests</strong> in the claim:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Being included as a payee on dwelling (Coverage A) and other structures (Coverage B) checks</li>
        <li>Receiving copies of dwelling repair estimates and invoices</li>
        <li>Receiving accounting of dwelling-related payments</li>
        <li>Being notified of any denial or cancellation</li>
        <li>Filing its own proof of loss if the insured fails to do so</li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-3">
        The mortgage company is <strong>not</strong> entitled to:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>The insured&apos;s personal property claim (Coverage C)</strong> &mdash; this
          includes inventories of personal belongings, credit card statements, purchase receipts, and
          total loss reports
        </li>
        <li>
          <strong>The insured&apos;s additional living expense claim (Coverage D)</strong> &mdash;
          this includes temporary housing costs, restaurant meals, mileage, and all the intimate
          details of how a displaced family is managing to survive
        </li>
        <li>
          <strong>The complete &ldquo;claim file&rdquo;</strong> &mdash; which includes private
          correspondence, personal financial information, and claim details having nothing to do with
          the lender&apos;s collateral interest
        </li>
        <li>
          <strong>Acting as though it were an insured</strong> with full access to all claim
          information
        </li>
      </ul>

      {/* ────────────────── WHEN CAN / CANNOT HIRE PA ────────────────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        When Can a Mortgage Company Hire a Public Adjuster?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under California law (and the law of most states), a Public Adjuster is specifically defined
        as someone who represents <strong>insureds</strong>. California Insurance Code Section 15007
        reads:
      </p>
      <blockquote className="border-l-4 border-[#1F3964] pl-4 italic text-gray-600 mb-6">
        &ldquo;A Public Insurance Adjuster is a person who, for compensation, acts on behalf of or
        aids in any manner, <strong>an insured</strong> in negotiating for or effecting the
        settlement of a claim or claims for loss or damage under any policy of insurance covering
        real or personal property&hellip;&rdquo;
      </blockquote>
      <p className="text-gray-700 leading-relaxed mb-4">
        The key phrase is &ldquo;an insured.&rdquo; A Public Adjuster&apos;s entire licensing
        authority is predicated on representing an insured party. If the party is not an insured, the
        Public Adjuster has no legal basis to act in that capacity.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        When the Mortgage Company IS an Insured
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        There is one important exception:{' '}
        <strong>
          <Link href="/resources/force-placed-insurance" className="text-blue-700 underline">
            force-placed insurance
          </Link>
        </strong>{' '}
        (also called lender-placed insurance).
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a homeowner falls behind on their mortgage payments and the insurance premium was being
        paid out of escrow, the mortgage contract typically gives the lender the right to purchase an
        insurance policy on the property. This force-placed policy is purchased by and for the
        mortgage company &mdash; making the mortgage company the actual insured under that separate
        policy.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In that situation, the mortgage company absolutely has the right to hire a Public Adjuster,
        because the mortgage company is the insured on the force-placed policy.
      </p>
      <p className="text-gray-700 leading-relaxed mb-3">
        Force-placed policies can also arise in other situations:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>The homeowner lets the insurance policy lapse for any reason</li>
        <li>The homeowner&apos;s coverage is insufficient to meet the mortgage requirements</li>
        <li>The homeowner violates some other insurance-related provision of the mortgage contract</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        In each case where the mortgage company purchases its own policy, it becomes an insured and
        can engage a Public Adjuster.
      </p>

      <CalloutBox variant="tip" title="The Force-Placed Exception">
        <p>
          A mortgage company that purchases a force-placed policy <strong>is</strong> an insured under
          that policy. In that case &mdash; and only in that case &mdash; the mortgage company can
          legally hire a Public Adjuster to represent its interests.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        When the Mortgage Company Is NOT an Insured
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        In the standard scenario &mdash; where the homeowner purchased and maintains their own
        homeowner&apos;s insurance policy &mdash; the mortgage company is merely a{' '}
        <strong>named loss payee</strong> under the mortgage clause. Having derivative contractual
        rights under someone else&apos;s insurance policy does not make you an insured. Being listed
        on the declarations page as a mortgagee is not the same as being listed as an insured.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In this scenario, the mortgage company <strong>cannot</strong> legally hire a Public Adjuster
        to act as a Public Adjuster on the homeowner&apos;s insurance claim. The public
        adjuster&apos;s license simply does not authorize that representation.
      </p>

      {/* ────────────────── DESIGNEE LETTER ────────────────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        The &ldquo;Designee Letter&rdquo; Problem
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        In the real case that inspired this article, the mortgage company&apos;s public adjusting
        firm did not present a proper Public Adjuster Contract. Instead, they presented
        a &ldquo;designee authorization&rdquo; letter from the bank.
      </p>
      <p className="text-gray-700 leading-relaxed mb-3">
        This is significant for several reasons:
      </p>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>California law requires a specific contract form.</strong> Under California
          Insurance Code Section 15027, a Public Adjuster contract must contain specific elements
          including: the title &ldquo;Public Adjuster Contract,&rdquo; the licensee&apos;s name and
          license number, the insured&apos;s name and address, a description of the loss, the insurer
          and policy number, the fee structure, signatures of both the licensee and the insured, a
          surety bond disclosure, and a three-day cancellation notice.
        </li>
        <li>
          <strong>The contract must be between the licensee and the insured.</strong> A &ldquo;designee
          letter&rdquo; from a mortgage company is not a contract with an insured. It is an
          authorization from a non-insured third party.
        </li>
        <li>
          <strong>The contract must be filed with the insurance company within three days.</strong>{' '}
          Even if such a contract existed, there are strict filing requirements.
        </li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        A generic authorization letter from a bank does not meet any of these requirements because
        the fundamental prerequisite is missing: the mortgage company is not an insured, so no valid
        Public Adjuster Contract can exist in the first place.
      </p>

      {/* ────────────────── PRIVACY ────────────────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        The Privacy Issue: Why the Claim File Is Not an Open Book
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a mortgage company (or its representative) demands the &ldquo;claim file,&rdquo; this
        creates serious privacy concerns. A homeowner&apos;s insurance claim file contains deeply
        personal information that has nothing to do with the mortgage company&apos;s collateral
        interest:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Personal property inventories</strong> &mdash; detailed lists of every personal
          possession, from clothing to electronics to medications
        </li>
        <li>
          <strong>Credit card and bank statements</strong> &mdash; used to document pre-loss
          ownership of personal property
        </li>
        <li>
          <strong>Additional living expense records</strong> &mdash; hotel bills, restaurant receipts,
          mileage logs, and other records showing where the family has been living, eating, and
          traveling
        </li>
        <li>
          <strong>Personal correspondence</strong> &mdash; emails and letters between the insured,
          the insured&apos;s representative, and the insurance company about all aspects of the claim
        </li>
        <li>
          <strong>Financial information</strong> &mdash; income records, tax documents, and other
          financial information submitted in connection with loss-of-use claims
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        Federal Privacy Protections
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>The Gramm-Leach-Bliley Act (GLBA)</strong> imposes restrictions on financial
        institutions (including insurance companies) regarding the sharing of consumers&apos;
        nonpublic personal information. Insurance companies are considered financial institutions
        under the GLBA and are generally prohibited from disclosing a customer&apos;s nonpublic
        personal information to unaffiliated third parties without proper notice and opt-out
        procedures.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        An insurance company that hands over the complete claim file to a mortgage company&apos;s
        representative &mdash; including personal financial data, personal property records, and
        living expense details &mdash; without the insured&apos;s authorization may be violating the
        GLBA.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        California Privacy Protections
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>California Insurance Code Section 791.13</strong> &mdash; the Insurance Information
        and Privacy Protection Act &mdash; prohibits insurance companies from disclosing personal or
        privileged information about an individual collected or received in connection with an
        insurance transaction unless specific exceptions apply. This is a strong privacy protection
        specific to the insurance context.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>The California Financial Information Privacy Act (CFIPA, also known as SB-1)</strong>{' '}
        provides additional protections specific to the sharing of financial information by financial
        institutions in California. It goes beyond the GLBA and imposes stricter limitations on when
        financial information can be shared.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>The California Consumer Privacy Act (CCPA) and its amendment, the California Privacy
        Rights Act (CPRA)</strong> provide broad consumer privacy rights, including the right to know
        what personal information is being collected and shared, and the right to opt out of the sale
        or sharing of personal information.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-8">
        What an Attorney Advised
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        In the real claim, the insured&apos;s Public Adjuster consulted with an attorney who
        confirmed that the mortgage company&apos;s demand for the complete claim file was improper.
        The attorney explained that while the mortgage company has a legitimate interest in documents
        related to the dwelling repair &mdash; estimates, invoices, and payment records &mdash; it
        has absolutely no right to the insured&apos;s personal information.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The claim file includes credit card statements, personal property inventories, additional
        living expense receipts, and personal correspondence that have nothing whatsoever to do with
        the mortgage. Disclosing this information to a third party &mdash; even one with a financial
        interest in the property &mdash; without the insured&apos;s consent could violate both
        federal and state privacy laws.
      </p>

      <CalloutBox variant="important" title="The Privacy Key Takeaway">
        <p>
          The mortgage company is entitled to information related to its interest (dwelling repair
          documentation). It is <strong>not</strong> entitled to private information unrelated to the
          mortgage &mdash; personal property inventories, credit card statements, ALE receipts, or
          personal correspondence.
        </p>
      </CalloutBox>

      {/* ────────────────── WHAT THE INSURER SHOULD DO ────────────────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        What the Insurance Company Should Do
      </h2>
      <p className="text-gray-700 leading-relaxed mb-3">
        When an insurance company receives a demand from a third-party public adjusting firm claiming
        to represent a mortgage company, the insurance company should:
      </p>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Verify whether the mortgage company is actually an insured.</strong> In most cases
          involving a standard homeowner&apos;s policy, the answer is no.
        </li>
        <li>
          <strong>Decline to treat the third-party firm as a Public Adjuster.</strong> If the
          mortgage company is not an insured, the firm cannot legally act as a Public Adjuster. The
          insurance company can and should inform the firm that it will not recognize their authority
          to act in that capacity.
        </li>
        <li>
          <strong>Protect the insured&apos;s private information.</strong> The insurance company
          should not share the complete claim file with unauthorized third parties. Doing so could
          violate federal and state privacy laws and could constitute a breach of the insurance
          contract.
        </li>
        <li>
          <strong>Honor the mortgage company&apos;s legitimate rights.</strong> Continue to include
          the mortgage company as a payee on dwelling checks, share dwelling-related estimates and
          invoices with the mortgage company or its legally authorized representative, and otherwise
          honor the mortgage clause.
        </li>
        <li>
          <strong>Consult legal counsel.</strong> When faced with aggressive demands from a third
          party claiming to act as a Public Adjuster for a non-insured, the insurance company should
          seek legal guidance.
        </li>
      </ol>

      {/* ────────────────── WHAT THE PA SHOULD DO ────────────────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        What the Insured&apos;s Public Adjuster Should Do
      </h2>
      <p className="text-gray-700 leading-relaxed mb-3">
        If you are a Public Adjuster and discover that another public adjusting firm is trying to
        insert itself into your client&apos;s claim on behalf of the mortgage company, here is the
        recommended approach:
      </p>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Review the policy.</strong> Determine whether the policy contains a lender&apos;s
          loss payable endorsement or mortgage clause, and carefully analyze the mortgage
          company&apos;s actual rights under that clause.
        </li>
        <li>
          <strong>Determine whether the mortgage company is an insured.</strong> In most standard
          homeowner&apos;s claims, the mortgage company is a loss payee, not an insured. If there is
          no{' '}
          <Link href="/resources/force-placed-insurance" className="text-blue-700 underline">
            force-placed policy
          </Link>{' '}
          in play, the mortgage company cannot hire a Public Adjuster.
        </li>
        <li>
          <strong>Notify the insurance company.</strong> Send a written communication explaining that
          the mortgage company is not an insured, that the third-party firm cannot legally act as a
          Public Adjuster, and that the insured&apos;s private information should not be shared with
          unauthorized parties. Cite the relevant provisions of the Insurance Code.
        </li>
        <li>
          <strong>Notify the other public adjusting firm directly.</strong> Inform them clearly that
          their client (the mortgage company) is not an insured under the policy and that they cannot
          legally act as a Public Adjuster in this capacity. Cite California Insurance Code Section
          15007.
        </li>
        <li>
          <strong>Cooperate with the mortgage company&apos;s legitimate interests.</strong> Make
          clear that you have no objection to the mortgage company being included as a payee on
          dwelling checks, receiving copies of dwelling estimates and payment records, or otherwise
          exercising its rights under the mortgage clause. The goal is not to obstruct the
          lender&apos;s legitimate interests, but to prevent unauthorized access to the insured&apos;s
          private claim information.
        </li>
        <li>
          <strong>Consult an attorney if necessary.</strong> If the situation escalates, seek legal
          counsel regarding privacy violations, potential complaints to the California Department of
          Insurance, and the insured&apos;s rights.
        </li>
      </ol>

      {/* ────────────────── THE CONFRONTATION ────────────────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">The Confrontation</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        In the real case, this is exactly what happened. The insured&apos;s Public Adjuster called
        the other firm to tell them they were acting outside the scope of their license. This led to
        an escalating exchange, with the other firm&apos;s principal insisting that the public
        adjuster &ldquo;get educated&rdquo; on who is an insured under a fire insurance policy.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insured&apos;s Public Adjuster responded by citing the exact language of California
        Insurance Code Section 15007, which defines a Public Adjuster as someone who acts on behalf
        of &ldquo;an insured.&rdquo; The mortgage company, while having important contractual rights
        under the mortgage clause, is not an insured. The Public Adjuster made this point
        clearly: <em>&ldquo;The mortgage company is not an insured. You cannot represent
        them.&rdquo;</em>
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insured&apos;s Public Adjuster then prepared a comprehensive written analysis of every
        provision of the mortgage clause, explaining each one in plain English and its relevance (or
        lack of relevance) to the claim. This document was sent to the insurance company, along with
        a formal request that the insurer carefully consider its communications with the other firm
        and refrain from sharing the insured&apos;s private information.
      </p>

      {/* ────────────────── CONSULTANT QUESTION ────────────────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Can the Mortgage Company Hire a Consultant?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is a nuanced question. While the mortgage company cannot hire a Public Adjuster to act
        as a Public Adjuster (because the mortgage company is not an insured), the mortgage company
        is not prohibited from hiring professionals to advise it on matters related to its financial
        interest.
      </p>
      <p className="text-gray-700 leading-relaxed mb-3">
        A mortgage company could potentially:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Hire a general consultant to review repair estimates and ensure the property is being restored to its pre-loss condition</li>
        <li>Retain an attorney to represent its interests</li>
        <li>Hire an inspector to verify that repairs are being completed</li>
        <li>Engage a loss consultant to review whether claim payments are adequate to protect its collateral</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The key distinction is that none of these activities would involve acting{' '}
        <strong>as a Public Adjuster</strong>. A person with a Public Adjuster&apos;s license who is
        hired by a mortgage company to provide consulting services is not acting as a public
        adjuster &mdash; they are acting as a consultant. They should not present their public
        adjuster credentials, should not use a Public Adjuster Contract, and should not demand the
        claim file as though they were representing an insured.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Whether a licensed Public Adjuster can ethically serve as a &ldquo;consultant&rdquo; to a
        non-insured on an insurance claim without running afoul of licensing laws is debatable. Some
        would argue this is a distinction without a difference &mdash; that anyone who is compensated
        for helping a party negotiate or settle an insurance claim is engaging in public adjusting,
        regardless of the label. Others would argue that legitimate consulting work (such as
        reviewing repair estimates) does not cross the line into public adjusting.
      </p>

      <CalloutBox variant="warning" title="Proceed with Caution">
        <p>
          If a Public Adjuster is going to do consulting work for a non-insured party, they should be
          transparent about the nature of the engagement, avoid using their Public Adjuster
          credentials or the trappings of public adjusting, and ensure they are not effectively acting
          as a Public Adjuster by another name.
        </p>
      </CalloutBox>

      {/* ────────────────── LESSONS ────────────────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">Lessons Learned</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This situation illustrates several important principles for homeowners, Public Adjusters,
        mortgage companies, and insurance companies:
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>For homeowners:</strong> Your insurance claim file contains deeply personal
        information. You have privacy rights under both federal and state law. If a third party is
        trying to access your claim information beyond what the mortgage clause authorizes, you
        should speak up &mdash; or have your representative do so on your behalf.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>For Public Adjusters:</strong> Know the mortgage clause inside and out. Understand
        where the mortgage company&apos;s rights end and the insured&apos;s privacy rights begin. Be
        prepared to push back firmly but professionally when another firm tries to exceed its
        authority. Document everything in writing.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>For mortgage companies:</strong> You have legitimate interests in the insurance
        claim, and those interests are protected by the mortgage clause. But your rights have
        boundaries. You are not an insured (unless you have a force-placed policy), and you should
        not attempt to access the complete claim file or hire a Public Adjuster to act as your public
        adjuster on a homeowner&apos;s policy where you are merely a loss payee.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>For insurance companies:</strong> You are the gatekeeper of the insured&apos;s
        private information. When a third party demands the claim file, you have a legal obligation
        to protect the insured&apos;s privacy. Honor the mortgage clause. Include the mortgage
        company on dwelling checks. Share dwelling-related documentation. But do not turn over
        personal property inventories, additional living expense records, credit card statements, or
        other private information to unauthorized parties.
      </p>

      {/* ────────────────── APPLICABLE LAW ────────────────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Applicable Laws and Regulations
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>California Insurance Code Section 15007</strong> &mdash; Definition of Public
          Insurance Adjuster (requires representation of an insured)
        </li>
        <li>
          <strong>California Insurance Code Section 15027</strong> &mdash; Requirements for Public
          Adjuster Contracts
        </li>
        <li>
          <strong>California Insurance Code Section 791.13</strong> &mdash; Insurance Information and
          Privacy Protection Act (restrictions on disclosure of personal information by insurers)
        </li>
        <li>
          <strong>Gramm-Leach-Bliley Act (15 U.S.C. Sections 6801&ndash;6809)</strong> &mdash;
          Federal financial privacy protections
        </li>
        <li>
          <strong>California Financial Information Privacy Act (Cal. Fin. Code Section 4050 et
          seq.)</strong> &mdash; California-specific financial privacy protections
        </li>
        <li>
          <strong>California Consumer Privacy Act / California Privacy Rights Act (Cal. Civ. Code
          Section 1798.100 et seq.)</strong> &mdash; Broad consumer privacy rights
        </li>
        <li>
          <strong>Standard Homeowner&apos;s Insurance Policy Mortgage Clause</strong> &mdash;
          Contractual provisions defining mortgagee rights
        </li>
      </ul>

      <CalloutBox variant="legal" title="Disclaimer">
        <p>
          This article is for educational purposes only and does not constitute legal advice. The
          scenarios described are based on real events with names and identifying details changed to
          protect the privacy of all parties involved. Readers should consult with a licensed attorney
          for advice regarding their specific situation.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mt-6 italic">
        Written by a California Licensed Public Adjuster with firsthand experience handling the
        conflict described in this article.
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
