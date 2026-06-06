import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title:
    'Mortgage Company Holds on Insurance Proceeds: Getting Your Money Released',
  description:
    'When your insurance company pays a dwelling claim, the check often has your mortgage lender\'s name on it. Learn how mortgage holds work, what lenders can and cannot do, and how to get your rebuild funds released.',
  summary:
    'When a dwelling check carries your lender\'s name, the mortgage company can hold the funds and release them as repairs progress. Know what lenders can and cannot do and the steps to get your rebuild money released on time.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational commentary by a Licensed California Public
          Adjuster. It is not legal advice. For legal questions about your specific
          situation, consult a licensed California attorney.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        You fought for a fair settlement on your dwelling claim. The insurance company finally issues
        a check. Then you look at the payee line &mdash; and your mortgage company&apos;s name is
        right next to yours. You cannot cash the check without the lender&apos;s endorsement, and
        the lender is not going to just sign it over. They are going to hold the money and release it
        on their schedule, not yours.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is one of the most frustrating aspects of large property claims, and it catches
        policyholders off guard every time. Understanding how mortgage holds work &mdash; and what
        your rights are &mdash; can save you months of delays and thousands of dollars in carrying
        costs.
      </p>

      {/* ────────────────── WHY THE LENDER IS ON THE CHECK ────────────────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why the Mortgage Company Is on Your Check
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your mortgage agreement (deed of trust) includes a clause requiring you to maintain property
        insurance with the lender listed as &ldquo;loss payee&rdquo; or &ldquo;mortgagee.&rdquo;
        This means the lender has a financial interest in the insurance proceeds &mdash; they want to
        make sure the property (their collateral) gets rebuilt. The insurance policy&apos;s mortgage
        clause (California Insurance Code Section 2071) then requires the insurer to name the
        mortgagee on any dwelling payment. As a result, any insurance payment for dwelling damage
        (Coverage A) or other structures (Coverage B) is typically made payable to both you and the
        lender.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurance company includes the mortgage company because the insurance contract requires
        it. The insurance contract requires it because the mortgage contract required it. Whether you
        realized you agreed to that or not when you signed the mortgage, you did.
      </p>

      <CalloutBox variant="important" title="Not All Checks Should Have the Lender&apos;s Name">
        <p>
          Personal property checks (Coverage C) and Additional Living Expense checks (Coverage D /
          ALE) should <strong>not</strong> have the mortgage company&apos;s name on them. The lender
          has no interest in your furniture, clothing, or hotel bills. If your insurer puts the
          lender&apos;s name on a contents or ALE check, contact the insurer immediately and request
          reissuance with only your name. This is a common error &mdash; and an important one,
          because those personal property funds can be a lifeline while the mortgage company holds
          your dwelling money (more on that below).
        </p>
      </CalloutBox>

      {/* ────────────────── START EARLY ────────────────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Contact Your Mortgage Company Early &mdash; Before You Need the Money
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        One of the most important things you can do is contact your mortgage company as soon as you
        know you have an insurance claim. Do not wait until you receive the check.
        Call them and say: <em>&ldquo;I had an insurance claim on my property. How do you want me to
        proceed?&rdquo;</em>
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most large mortgage servicers have a specialized <strong>loss draft department</strong> (also
        called an &ldquo;insurance loss department&rdquo; or &ldquo;claims department&rdquo;) that
        handles exactly this situation. They will set up a special escrow account for your insurance
        proceeds and walk you through their specific procedures. Getting ahead of this process
        prevents costly delays later.
      </p>
      <p className="text-gray-700 leading-relaxed mb-3">
        When you make that initial call, ask for:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>The mailing address for endorsed checks (some lenders have a specific address for loss drafts)</li>
        <li>Whether they want the check endorsed (signed on the back) or sent unendorsed &mdash; <strong>this varies by lender</strong></li>
        <li>Whether they require FedEx / overnight delivery or accept regular mail</li>
        <li>What documentation they will require before releasing funds (estimates, contracts, permits, inspections)</li>
        <li>Their draw schedule &mdash; how they stage the release of funds</li>
        <li>A direct phone number for the loss draft department</li>
        <li>Whether they have a website portal for tracking your loss draft</li>
      </ul>

      <CalloutBox variant="tip" title="Every Lender Is Different">
        <p>
          Some banks want checks endorsed before mailing. Others explicitly do <strong>not</strong>{' '}
          want checks endorsed. Some require FedEx overnight; others accept regular mail. Some have
          online portals; others operate entirely by phone and fax. There is no universal procedure.
          Getting the right instructions from your specific lender at the outset prevents rejected
          submissions and weeks of delays.
        </p>
      </CalloutBox>

      {/* ────────────────── THE ADJUSTER'S REPORT CONFUSION ────────────────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The &ldquo;Adjuster&apos;s Report&rdquo; Confusion
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Mortgage companies across the country will almost always ask for the &ldquo;adjuster&apos;s
        report.&rdquo; This causes enormous confusion. What they are actually asking for is
        the <strong>insurance company&apos;s Xactimate estimate</strong> &mdash; the detailed,
        line-by-line repair estimate that the insurance adjuster prepared using{' '}
        <Link href="/resources/xactimate" className="text-blue-700 underline">
          Xactimate software
        </Link>
        . For some reason that nobody in the industry can fully explain, mortgage companies
        universally refer to this document as the &ldquo;adjuster&apos;s report,&rdquo; even though
        it is an estimate, not a report.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The large majority of property insurance claims are settled with an Xactimate estimate. But
        not all of them are. Some claims are settled in ways that do not produce a traditional
        Xactimate estimate:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Policy limits payments</strong> &mdash; when the claim exceeds the coverage limits,
          the insurer may simply pay the policy limit without preparing a detailed Xactimate estimate
        </li>
        <li>
          <strong>Symbility estimates</strong> &mdash; some insurance companies use Symbility
          (CoreLogic Claims Connect) instead of Xactimate, and the output looks different
        </li>
        <li>
          <strong>Traditional contractor bids</strong> &mdash; sometimes the insurance company
          accepts a contractor&apos;s retail bid and pays based on that, rather than generating its
          own Xactimate scope
        </li>
        <li>
          <strong>Negotiated settlements</strong> &mdash; some claims are resolved through
          negotiation or appraisal where the final agreed amount may not correspond to a single
          Xactimate estimate
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        This creates friction with the mortgage company because their loss draft department is set up
        to process Xactimate estimates. When the settlement documentation looks different from what
        they are used to seeing, they get confused and may stall the release of funds. You (or your
        Public Adjuster) may need to explain to the loss draft department that the
        claim was settled through a different mechanism and that the documentation they have is the
        equivalent of the &ldquo;adjuster&apos;s report&rdquo; they are asking for.
      </p>

      {/* ────────────────── HOW THE HOLD WORKS ────────────────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How the Hold and Release Process Works
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Once the lender receives the endorsed check, they deposit it into an escrow or &ldquo;loss
        draft&rdquo; account and release the funds in stages as rebuilding progresses. A typical
        release schedule looks like this:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Initial release (approximately one-third)</strong> &mdash; released when the
          rebuild contract is signed and a building permit is pulled
        </li>
        <li>
          <strong>Mid-construction release (approximately one-third)</strong> &mdash; released when
          the rebuild reaches roughly 50% completion, confirmed by a lender inspection
        </li>
        <li>
          <strong>Final release (remaining balance)</strong> &mdash; released upon completion of
          construction, typically after a final inspection
        </li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        The exact schedule varies by lender. Some use a four-stage release. Some require more
        documentation at each stage. The lender will typically hire a third-party inspection company
        to verify construction progress before each release.
      </p>

      <CalloutBox variant="tip" title="Fannie Mae Guidelines: You May Be Entitled to More Up Front">
        <p>
          If your mortgage is backed by Fannie Mae and your loan is current, Fannie Mae&apos;s
          Servicing Guide (Section B-5-01) requires your servicer to release an initial disbursement
          of up to the <strong>greater of $40,000 or 33% of total proceeds</strong> &mdash; before
          any inspection is required. Many servicers fail to follow this guideline and release less.
          If your loan is a Fannie Mae loan and you are current on your payments, cite this guideline
          and demand the larger initial release. Freddie Mac has similar provisions.
        </p>
      </CalloutBox>

      {/* ────────────────── THE CATCH-22 ────────────────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Catch-22: Cannot Start Without Money, Cannot Get Money Without Progress
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        One of the most common and frustrating problems is the circular trap: the mortgage company
        will not release the money because construction has not started, but construction
        cannot start because the homeowner does not have the money to pay the
        contractor&apos;s down payment, buy materials, or pull permits.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Contractors require deposits. Material suppliers require payment. Permit fees are due up
        front. The homeowner is displaced, living in temporary housing, and every dollar of the
        insurance proceeds is locked up in the mortgage company&apos;s escrow account. This is a
        real crisis, and it happens on almost every large claim.
      </p>
      <p className="text-gray-700 leading-relaxed mb-3">
        Here are strategies that can help break the deadlock:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-6">
        Use Personal Property Money to Get Construction Moving
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you received a personal property settlement (Coverage C), those checks do <strong>not
        </strong> have the mortgage company&apos;s name on them. That money is yours to use as you
        see fit. While it was paid for your damaged belongings, nothing prevents you from using it
        strategically to get construction started:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Pay the contractor&apos;s initial deposit</li>
        <li>Purchase materials</li>
        <li>Cover permit fees and other soft costs</li>
        <li>Fund early-stage work to demonstrate progress to the mortgage company</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Once the mortgage company sees that construction has commenced, they are more likely to
        release dwelling funds &mdash; which you can then use to reimburse yourself and continue the
        project. This is a practical workaround, not a legal requirement, but it can break the
        deadlock.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-6">
        Advocate for Yourself: Demand a Reasonable Initial Release
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        You have the right to advocate for a reasonable release. If you are 50% complete, explain
        that to the mortgage company: <em>&ldquo;I am 50% through construction. Please send your
        inspector out here so I can receive the next draw.&rdquo;</em> Do not wait for the mortgage
        company to initiate &mdash; push them. Submit draw requests proactively, with documentation
        (contractor invoices, progress photos, inspection reports).
      </p>

      {/* ────────────────── WHAT LENDER CAN AND CANNOT DO ────────────────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What the Lender Can and Cannot Do
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-6">
        What the Lender Can Do
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Hold funds</strong> to ensure the property is actually rebuilt. This is their legal
          right as the mortgage holder &mdash; the property is their collateral.
        </li>
        <li>
          <strong>Require inspections</strong> before releasing staged draws. They want to verify
          that the money is being used for repairs.
        </li>
        <li>
          <strong>Request documentation</strong> such as the insurance estimate, contractor bids,
          building permits, and proof of completion.
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-6">
        What the Lender Cannot Do
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Hold more than the outstanding loan balance.</strong> The lender&apos;s interest is
          limited to the amount of the debt. If the insurance proceeds exceed what you owe, the
          excess belongs entirely to you and must be released. This is addressed in detail below.
        </li>
        <li>
          <strong>Hold funds indefinitely without paying interest.</strong> Under California Civil
          Code Section 2954.85 (AB 493, effective August 29, 2025), lenders must pay at
          least <strong>2% simple interest per annum</strong> on insurance proceeds held in loss
          draft accounts. This applies retroactively to funds already held as of the effective date.
        </li>
        <li>
          <strong>Charge fees that eat into the required interest.</strong> The same statute prohibits
          any fee or charge for &ldquo;maintenance or disbursement&rdquo; of loss draft funds that
          would result in the effective interest rate dropping below 2%.
        </li>
        <li>
          <strong>Refuse to release funds when the security is not impaired.</strong> Under{' '}
          <em>Schoolcraft v. Ross</em>, 81 Cal. App. 3d 75 (1978), a lender holding fire insurance
          proceeds must act in accordance with the implied covenant of good faith and fair dealing.
          If the estimated value of the rebuilt property exceeds the outstanding debt, the
          lender&apos;s security is not impaired and it must release the funds.
        </li>
        <li>
          <strong>Ignore a written demand for release.</strong> While no specific California
          statute imposes a 30-day release deadline on lenders holding insurance proceeds, the
          lender&rsquo;s duty of good faith and fair dealing &mdash; reinforced by{' '}
          <em>Schoolcraft v. Ross</em> &mdash; requires reasonable processing of release requests
          once the security is not impaired. A lender that ignores a documented written demand
          for release exposes itself to bad faith claims and DFPI/CFPB complaints. Thirty days
          is the customary expectation for response, not a statutory mandate.
        </li>
        <li>
          <strong>Force you to apply insurance proceeds toward the loan balance</strong> (in most
          cases). Unless your mortgage agreement specifically requires this &mdash; which is
          rare &mdash; you have the right to use the proceeds to rebuild.
        </li>
      </ul>

      {/* ────────────────── PROCEEDS EXCEEDING MORTGAGE ────────────────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When the Insurance Check Is Larger Than the Mortgage Balance
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is one of the most common fairness questions homeowners raise: what happens when the
        insurance check is for $300,000 but you only owe $100,000 on your mortgage? Can the mortgage
        company really hold all $300,000?
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>The short answer is no &mdash; or at least, it should not.</strong> The mortgage
        company&apos;s interest in the insurance proceeds is limited to the amount of the
        outstanding debt. They are named on the check because they have a security interest in the
        property &mdash; but that interest is capped at what they are owed, not at the total amount
        of the insurance payment.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Think about it this way: the insurance policy&apos;s mortgage clause says that loss payments
        are made to the mortgagee and the insured &ldquo;as interests appear.&rdquo; Those three
        words are key. The mortgage company&apos;s <em>interest</em> in a $300,000 insurance payment
        when they are owed $100,000 is exactly $100,000. The remaining $200,000 is the
        homeowner&apos;s interest &mdash; the homeowner&apos;s equity in the property. The mortgage
        company has no legal claim to it.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-6">
        Why Mortgage Companies Try to Hold the Entire Amount
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Despite this, many mortgage companies will attempt to hold the entire insurance payment
        in their loss draft escrow &mdash; even the amount above the loan balance. Their argument is
        that they need to control all the funds to ensure the property is fully repaired. If the
        homeowner takes $200,000 and does not complete the repairs, the property value could
        theoretically drop below the mortgage balance, putting the lender&apos;s collateral at risk.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This argument has a surface-level logic, but it does not hold up under scrutiny. The
        lender&apos;s security interest is in the property, not in the insurance proceeds. The
        property is still there. If the lender is owed $100,000 and the property &mdash; even
        damaged &mdash; is worth more than that (which it almost certainly is if there is $200,000
        in equity), then the lender&apos;s security is not impaired.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-6">
        What the Law Says
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        <em>Schoolcraft v. Ross</em>, 81 Cal. App. 3d 75 (1978), is the leading California case on
        this issue. The court established a &ldquo;debt equivalency&rdquo; test: if the estimated
        value of the repaired property will exceed the outstanding debt, the lender&apos;s security
        is not impaired and the lender must release the insurance proceeds in accordance with the
        implied covenant of good faith and fair dealing. The lender cannot simply sit on the money
        because it is convenient or because their internal procedures do not account for the
        difference between the loan balance and the insurance payment.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The mortgage clause itself supports this reading. Payments are made &ldquo;as interests
        appear&rdquo; &mdash; meaning each party receives what corresponds to their financial
        interest. The homeowner&apos;s equity portion of the proceeds is theirs, not the
        lender&apos;s.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-6">
        What to Do If the Lender Is Holding More Than They Are Owed
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your mortgage balance is significantly less than the insurance payment and the lender is
        holding the entire amount:
      </p>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Send a written demand</strong> requesting immediate release of the amount exceeding
          the outstanding loan balance. Point out that the mortgage clause pays proceeds &ldquo;as
          interests appear&rdquo; and that the lender&apos;s interest is limited to the outstanding
          debt. The lender has an obligation under the implied covenant of good faith and fair
          dealing to release funds when its security is not impaired (see the <em>Schoolcraft v.
          Ross</em> discussion above).
        </li>
        <li>
          <strong>Argue that the security is not impaired.</strong> If you owe $100,000 on a property
          worth $700,000 (even in its damaged condition), there is no scenario in which the
          lender&apos;s $100,000 interest is at risk. The lender&apos;s security is fully protected
          by the remaining equity, the land value, and the insurance proceeds themselves.
        </li>
        <li>
          <strong>Send a documented written demand for release.</strong> Attach documentation of
          the outstanding loan balance and the insurance payment amount. Frame the demand around
          the <em>Schoolcraft</em> principle that the lender must act in good faith and release
          proceeds when its security is not impaired. Request a response within 30 days as a
          customary expectation (no statutory deadline applies). Make it clear that you are
          requesting release of the excess &mdash; not the portion that corresponds to the
          lender&apos;s interest.
        </li>
        <li>
          <strong>Escalate if necessary.</strong> If the lender refuses, involve an attorney. A
          formal demand letter from counsel citing <em>Schoolcraft</em> and the relevant Civil Code
          sections is often enough to break the logjam. You can also file a complaint with the
          California Department of Financial Protection and Innovation (DFPI) or the CFPB.
        </li>
      </ol>

      <CalloutBox variant="important" title="The Lender&apos;s Interest Is Capped at the Debt">
        <p>
          If you owe $100,000 and the insurance check is for $300,000, the mortgage company&apos;s
          interest is $100,000. The other $200,000 is your equity. The mortgage clause says
          proceeds are paid &ldquo;as interests appear&rdquo; &mdash; and the lender&apos;s interest
          does not &ldquo;appear&rdquo; in your equity. You should not have to fight for your own
          money, but if you do, the law is on your side.
        </p>
      </CalloutBox>

      <CalloutBox variant="legal" title="AB 493: California&apos;s 2025 Interest-on-Proceeds Law">
        <p>
          Assembly Bill 493, authored by Assemblymember John Harabedian and signed as an urgency
          statute on August 29, 2025, requires financial institutions to pay at
          least <strong>2% simple interest per annum</strong> on hazard insurance proceeds held in
          loss draft accounts. The law was enacted in direct response to the January 2025
          Palisades and Eaton wildfires, where lenders were holding hundreds of millions of dollars
          in insurance proceeds in non-interest-bearing accounts while displaced homeowners waited.
          It applies retroactively to funds already held and prohibits any fee that would reduce the
          effective interest below 2%. See California Civil Code Section 2954.85.
        </p>
      </CalloutBox>

      {/* ────────────────── TOTAL LOSS: PAYOFF VS REBUILD ────────────────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Total Loss: When the Mortgage Company Wants Payoff and You Want to Rebuild
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Everything above assumes a partial loss &mdash; damage that will be repaired, with the
        mortgage company releasing funds in stages as construction progresses. A total loss
        creates a fundamentally different dynamic. When your home is destroyed, the lender&rsquo;s
        collateral is gone, and the lender&rsquo;s primary interest shifts from ensuring repairs
        to protecting its outstanding loan balance.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In a total loss, the insurance proceeds often represent the only remaining value
        associated with the property (apart from the land). The mortgage company will hold these
        proceeds with an even tighter grip than on a partial loss, because the question is no
        longer &ldquo;are repairs progressing?&rdquo; but &ldquo;will the property be rebuilt at
        all?&rdquo;
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-6">
        The Lender&rsquo;s Two Priorities
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        After a total loss, the lender has two competing priorities:
      </p>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Protect the loan balance.</strong> If there is any doubt about whether you
          will rebuild, the lender wants to apply your insurance proceeds directly to the
          mortgage. This extinguishes the debt, which is the lender&rsquo;s primary objective.
        </li>
        <li>
          <strong>Restore the collateral.</strong> If you commit to rebuilding, the lender has
          an interest in seeing the property restored &mdash; which means releasing funds for
          construction. But the lender will require extensive documentation, inspections, and
          progress milestones before releasing anything.
        </li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        The tension between these two priorities creates problems. If you tell the lender you are
        undecided about rebuilding, the lender may refuse to release any funds at all &mdash;
        because from the lender&rsquo;s perspective, releasing money for construction that may
        never happen is the worst-case scenario. But if you commit to rebuilding, you need access
        to the insurance proceeds to hire a contractor, obtain permits, and begin construction
        &mdash; and the lender will not release those funds until you demonstrate progress you
        cannot make without the funds. The Catch-22 described earlier in this article is
        amplified at total loss scale.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-6">
        When You Decide Not to Rebuild
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you decide not to rebuild, the lender will apply insurance proceeds to pay off the
        outstanding mortgage balance. The lender has a contractual right to do this under the deed
        of trust and the{' '}
        <Link href="/resources/lenders-loss-payable-endorsement" className="text-blue-700 underline hover:text-blue-900">
          loss payable endorsement
        </Link>{' '}
        on your policy. Any proceeds that exceed the mortgage balance belong to you.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the proceeds are less than the outstanding balance, whether you owe the deficiency
        depends on the type of loan. Purchase money mortgages &mdash; the original loan you took
        out to buy the home &mdash; are generally non-recourse under California Code of Civil
        Procedure &sect; 580b. Refinanced mortgages and home equity lines of credit may be recourse
        debt. For a full discussion of the financial implications of not rebuilding, see our
        article on{' '}
        <Link href="/resources/deciding-not-to-rebuild" className="text-blue-700 underline hover:text-blue-900">
          deciding not to rebuild after a total loss
        </Link>.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-6">
        Total Loss Escrow: The Scale Problem
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        On a partial loss, the draw schedule is manageable &mdash; the mortgage company releases
        funds in stages as repairs are completed. On a total loss where the homeowner is
        rebuilding from the ground up, the escrow process becomes far more complex:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>The construction timeline is 18&ndash;36 months</strong>, not weeks. That is
          18&ndash;36 months of mortgage payments on a home you cannot live in, while your
          insurance proceeds sit in the lender&rsquo;s escrow account.
        </li>
        <li>
          <strong>Contractors need deposits</strong> to begin work &mdash; often 10&ndash;20%
          of the contract price. Lenders are reluctant to release large deposits before work
          begins, but no reputable contractor will start a ground-up rebuild without one.
        </li>
        <li>
          <strong>Multiple inspections and draws</strong> stretch the timeline further. Every
          inspection requires scheduling, every draw requires processing, and every delay in
          fund release creates a cascading delay in construction.
        </li>
        <li>
          <strong>Construction costs escalate</strong> during the delay. In post-disaster
          markets, demand surge pricing means every month of delay increases the ultimate
          cost &mdash; potentially pushing the project above your policy limits. See our article
          on{' '}
          <Link href="/resources/demand-surge-pricing" className="text-blue-700 underline hover:text-blue-900">
            demand surge pricing
          </Link>.
        </li>
      </ul>

      <CalloutBox variant="tip" title="Total Loss: Negotiate the Draw Schedule Up Front">
        <p>
          Before committing to a construction contract, negotiate the draw schedule with your
          lender in writing. Get explicit agreement on the percentage released at each stage
          (foundation, framing, rough-in, drywall, finish), the inspection process, the
          turnaround time for each draw, and how the contractor&rsquo;s deposit will be handled.
          Do this <strong>before</strong> you sign the construction contract &mdash; not after.
          If the lender&rsquo;s draw schedule is incompatible with what your contractor requires,
          you need to know that before you are locked in.
        </p>
      </CalloutBox>

      {/* ────────────────── INSPECTION FEES ────────────────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Inspection Fees: When the Mortgage Company Bills You for Drive-Bys
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Mortgage companies frequently hire third-party inspection companies to drive by the property
        and verify construction progress. Some lenders then bill the homeowner for these inspections,
        typically $100 to $250 per visit.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is a practice that attorneys have pushed back on. The argument is straightforward: the
        mortgage contract does not provide for the lender to charge the borrower for property
        inspections related to insurance claims. The homeowner did not bargain for this fee when they
        signed the mortgage. Under AB 493&apos;s fee prohibition (Civil Code Section 2954.85), any
        fee that reduces the effective interest on held proceeds below 2% is now illegal.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Also, under Fannie Mae servicing guidelines, the servicer may seek reimbursement from
        Fannie Mae &mdash; not the borrower &mdash; for insured loss repair inspection costs. If
        your mortgage is a Fannie Mae loan, the servicer should not be passing inspection fees on to
        you.
      </p>

      <CalloutBox variant="warning" title="Push Back on Inspection Fees">
        <p>
          If your mortgage company charges you for property inspections during the loss draft
          process, push back in writing. Cite AB 493&apos;s fee prohibition and ask for the specific
          provision in your mortgage contract that authorizes the charge. If your loan is
          Fannie Mae or Freddie Mac backed, point out that the investor guidelines allow the
          servicer to seek reimbursement from the investor, not the borrower.
        </p>
      </CalloutBox>

      {/* ────────────────── COMMON PROBLEMS ────────────────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Common Problems and How to Handle Them
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Slow Releases Delaying Construction
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The most common complaint: the lender takes weeks to process each draw request, and the
        contractor needs to be paid now. Delays in fund release can stall construction, increase
        costs (materials prices change, contractors move on), and extend your displacement.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>What to do:</strong> Submit draw requests proactively &mdash; as soon as a milestone
        is reached, not weeks later. Include all required documentation (contractor invoices, photos,
        inspection reports) in the first submission to avoid back-and-forth. Call the lender&apos;s
        loss draft department directly and ask for the specific checklist of what they need at each
        stage. If the lender is unreasonably slow, send a <strong>written demand</strong>
        referencing the <em>Schoolcraft</em> good-faith standard and copy your loan
        servicer&apos;s compliance department. Customary practice is to request a response within
        30 days of the demand.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Lender Requiring Unreasonable Documentation
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some lenders require excessive documentation, redundant inspections, or forms that are
        difficult to obtain. This is particularly common with larger loan servicers that use
        third-party loss draft processors. Remember the &ldquo;adjuster&apos;s report&rdquo;
        confusion discussed above &mdash; the loss draft department may reject your documentation
        simply because it does not look like the Xactimate estimate they are used to seeing.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>What to do:</strong> Get the lender&apos;s requirements in writing at the
        outset &mdash; before you start construction. If a requirement seems unreasonable, push back
        in writing. If you have a federally backed mortgage (Fannie Mae, Freddie Mac, FHA, VA), the
        servicer must follow federal guidelines that limit what they can require. If your claim was
        settled without a standard Xactimate estimate, prepare a cover letter explaining how the
        claim was settled and why the documentation provided is the equivalent of the &ldquo;report&rdquo;
        they are requesting.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Lender&apos;s Name on ALE or Contents Checks
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>What to do:</strong> Contact your insurer and request reissuance. The lender has no
        insurable interest in your personal property or living expenses. If the insurer pushes back,
        cite the specific coverage (Coverage C or Coverage D) and point out that the lender is named
        as mortgagee on the dwelling, not on contents or ALE. For more on what the mortgage
        company is and is not entitled to, see our article on{' '}
        <Link
          href="/resources/mortgage-company-public-adjuster"
          className="text-blue-700 underline"
        >
          mortgage company rights and the loss payable endorsement
        </Link>
        .
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Lender Holding Money After Repairs Are Complete
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Sometimes, even after the repairs are finished, the mortgage company drags its feet on
        releasing the remaining balance. This is one of the most frustrating situations &mdash; the
        work is done, the property is restored, and the mortgage company still will not let go of the
        money.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>What to do:</strong> Send a formal written demand with documentation of completed
        repairs (final inspection, certificate of occupancy, contractor&apos;s completion
        certificate, photographs). Anchor the demand on the principle established in{' '}
        <em>Schoolcraft v. Ross</em>: the lender must release proceeds when its security is not
        impaired &mdash; if your home is fully repaired, the lender&apos;s collateral is fully
        intact. Request a 30-day response window as a customary expectation. If the lender still
        refuses, you may need an attorney to intervene.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Deciding Not to Rebuild
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you decide not to rebuild &mdash; perhaps you want to sell the lot and move
        elsewhere &mdash; the lender will typically apply the insurance proceeds to pay off the
        mortgage first. Any remaining funds go to you. This is their right under the mortgage
        agreement. If your insurance proceeds are less than what you owe, you may still be
        responsible for the remaining mortgage balance.
      </p>

      {/* ────────────────── NUCLEAR OPTIONS ────────────────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When All Else Fails: Creative Workarounds
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When the mortgage company is unreasonably holding funds and communication has broken down,
        some homeowners have found creative solutions to break the impasse. These are not for
        everyone, but they are worth considering:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-6">
        Pay Off or Refinance the Mortgage
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the mortgage is paid off, the mortgage company has no legal basis for holding insurance
        claim money. The mortgage clause gives the lender rights because it is a creditor with a
        security interest in the property. Eliminate the debt, and you eliminate their hold on the
        proceeds.
      </p>
      <p className="text-gray-700 leading-relaxed mb-3">
        There are several ways this might work:
      </p>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Use personal property funds to pay off a small mortgage.</strong> If your mortgage
          balance is relatively modest and you received a large personal property settlement, you
          could write a check from your personal property funds to pay off the mortgage entirely.
          For example, if you owed $90,000 on your mortgage and received $200,000 for your
          smoke-damaged personal property, paying off the $90,000 frees up all future insurance
          dwelling payments to come directly to you &mdash; no more joint checks, no more loss draft
          escrow, no more inspections.
        </li>
        <li>
          <strong>Refinance with a new lender.</strong> Refinancing pays off the original mortgage
          company. Your new lender will then be the mortgagee going forward &mdash; and you may find
          a new lender with a more reasonable loss draft process. The key is that the <em>old</em>{' '}
          mortgage company has no basis to hold money once their debt is paid.
        </li>
        <li>
          <strong>Borrow against retirement savings.</strong> Some homeowners have borrowed against a
          401(k) to pay off their mortgage, then used the incoming insurance proceeds to replenish
          the retirement account. This carries risk &mdash; early withdrawal penalties, tax
          consequences, and the loss of investment growth &mdash; and should only be considered with
          the guidance of a financial advisor. But for some homeowners, the math works, especially
          when the alternative is an indefinite hold on hundreds of thousands of dollars.
        </li>
      </ul>

      <CalloutBox variant="warning" title="This Does not Work for Everyone">
        <p>
          These workarounds require financial flexibility that many homeowners simply do not have. If
          your mortgage balance is $500,000, paying it off is not realistic for most people. But if
          the balance is manageable and the mortgage company is being unreasonable, eliminating the
          mortgage can be the most effective way to resolve the impasse.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-6">
        Get an Attorney Involved
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Sometimes, unfortunately, the only language a mortgage company understands is a letter from
        an attorney. An attorney may wish to send a formal demand letter citing California Civil
        Code Section 2954.85 (AB 493 interest on loss-draft accounts), the <em>Schoolcraft</em>
        decision, and the implied covenant of good faith and fair dealing. An attorney could also file a complaint with the California
        Department of Financial Protection and Innovation (DFPI), which regulates mortgage servicers,
        or with the Consumer Financial Protection Bureau (CFPB) for federal complaints under RESPA.
      </p>

      {/* ────────────────── MORTGAGE FORBEARANCE ────────────────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Mortgage Forbearance for Wildfire Survivors
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your home was damaged or destroyed in the January 2025 California wildfires, you may be
        eligible for mortgage forbearance under <strong>AB 238</strong> (the Mortgage Forbearance
        Act, signed September 22, 2025). This law requires mortgage servicers to offer forbearance of
        up to <strong>12 months</strong> (in 90-day increments) for affected borrowers. During
        forbearance:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>No late fees</li>
        <li>No default-rate interest</li>
        <li>No lump-sum or balloon payment required at the end (if you were current when you entered forbearance)</li>
        <li>No foreclosure or eviction while you are performing under the forbearance agreement</li>
        <li>No negative credit reporting</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Even though forbearance is about your mortgage payments rather than the loss draft process,
        it matters because it prevents you from being squeezed on two fronts simultaneously. You
        should not have to make mortgage payments on a home you cannot live in while the mortgage
        company also holds your insurance proceeds.
      </p>

      {/* ────────────────── FEDERALLY BACKED MORTGAGES ────────────────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Resources for Federally Backed Mortgages
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your mortgage is backed by Fannie Mae, you may be eligible for free counseling through the
        Fannie Mae Disaster Response Network (877-833-1746). They can help you navigate the loss
        draft process, communicate with your servicer, and understand your rights.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The CFPB also accepts complaints about mortgage servicers at{' '}
        <strong>consumerfinance.gov/complaint</strong>. Under 12 CFR 1024.35, your servicer must
        acknowledge your written error notice within 5 business days and resolve it within 30
        business days.
      </p>

      {/* ────────────────── APPLICABLE LAW ────────────────── */}
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Applicable California Laws and Key Legal Authority
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>California Civil Code Section 2954.85</strong> (AB 493, 2025) &mdash; 2% minimum
          interest on insurance proceeds held in loss draft accounts; no fees reducing interest below
          2%
        </li>
        <li>
          <strong>California Civil Code Section 2924.7</strong> &mdash; Confirms enforceability
          of mortgage clauses authorizing the lender to receive and control disbursement of fire/
          flood/hazard insurance proceeds. (No statutory 30-day release deadline exists at this
          section; release timing is governed by good-faith principles per <em>Schoolcraft</em>.)
        </li>
        <li>
          <strong>California Civil Code Section 2954.8</strong> &mdash; 2% interest on tax/insurance
          impound accounts (the predecessor statute that AB 493 extended to loss drafts)
        </li>
        <li>
          <strong><em>Schoolcraft v. Ross</em></strong>, 81 Cal. App. 3d 75 (1978) &mdash; Lender
          must release proceeds in good faith when security is not impaired
        </li>
        <li>
          <strong>California Insurance Code Section 2071</strong> &mdash; Standard fire policy
          mortgage clause (why checks are jointly payable)
        </li>
        <li>
          <strong>California Insurance Code Section 2051.5</strong> &mdash; Replacement cost timing:
          36 months in declared emergency; 6-month extensions for good cause
        </li>
        <li>
          <strong>AB 238</strong> (Mortgage Forbearance Act, 2025) &mdash; Up to 12 months
          forbearance for wildfire-affected borrowers
        </li>
        <li>
          <strong>Fannie Mae Servicing Guide, Section B-5-01</strong> &mdash; Initial release of up
          to $40,000 or 33% of proceeds for current borrowers
        </li>
        <li>
          <strong>12 CFR 1024.35</strong> (Regulation X / RESPA) &mdash; Error resolution
          procedures for mortgage servicer complaints
        </li>
      </ul>

      <CalloutBox variant="legal" title="Disclaimer">
        <p>
          This article is for educational purposes only and does not constitute legal advice. Laws
          and regulations change. Readers should consult with a licensed attorney or qualified
          professional for advice regarding their specific situation.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mt-6 italic">
        Written by a California Licensed Public Adjuster who has navigated the mortgage company loss
        draft process on behalf of numerous clients.
      </p>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Lender Holding Up Your Insurance Money?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          A Public Adjuster can coordinate with your mortgage company&apos;s loss draft department to
          ensure timely fund releases and prevent construction delays.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Request a Free Claim Review &rarr;
        </Link>
      </div>
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
