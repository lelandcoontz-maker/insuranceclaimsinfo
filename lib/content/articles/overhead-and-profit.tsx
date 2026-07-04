import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Overhead & Profit: When Your Claim Should Include O&P',
  description:
    "O&P is owed whenever a GC is reasonably likely to be needed - typically three or more trades. Where the numbers come from and how to fight a carrier denial.",
  summary:
    'General contractor overhead and profit are owed whenever a GC is reasonably likely to be needed for the repair, which usually means three or more trades. Carriers routinely strip O&P from estimates by citing an industry guideline they treat as law. The legal standard, the case law from PA, FL, AZ, OK, NY, TX, and the Seventh Circuit, the regulatory authority, and the practical steps for getting it back.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational commentary by a Licensed California Public
          Adjuster. It is not legal advice. Insurance policies, state regulations,
          and case outcomes vary by jurisdiction and individual facts. For legal
          questions about your specific situation, consult a licensed attorney.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        Overhead and Profit &mdash; commonly called O&amp;P &mdash; is one of the
        most frequently disputed line items in property insurance claims. It
        refers to the general contractor&apos;s fee for managing a repair
        project: typically 10% overhead (business expenses) and 10% profit, for
        a combined 20% on top of the direct repair costs.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance carriers deny O&amp;P on claims constantly. It is one of the
        most common ways they reduce payouts, and most policyholders never
        realize money is missing from their settlement. The carrier strips it
        off the estimate quietly, buries the reasoning in jargon, and hopes you
        will not ask questions.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        On a $50,000 repair, O&amp;P adds roughly $10,000 to the claim. On a
        $60,000 repair, the difference is $12,000. On a $150,000 fire loss, it
        is $30,000. This is not a rounding error. It is a substantial portion of
        your claim, and the case law says it is owed whenever a general contractor is
        reasonably likely to be involved in your repairs.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This article explains what O&amp;P actually is, where the numbers come
        from, why the carrier&apos;s favorite excuse for denying it has no legal
        basis, the case law from seven jurisdictions that supports the
        policyholder&apos;s position, and what you might consider doing if your
        own claim is being shorted.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">What Is Overhead and Profit?</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When you hire a general contractor to manage a repair project, they do
        not work for free. They coordinate subcontractors, pull permits,
        schedule inspections, order materials, handle callbacks, and keep the
        project on track. For that work, they charge overhead and profit on top
        of the direct costs of labor and materials.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The industry standard is 10% overhead plus 10% profit. This is not some
        inflated number that contractors invented. It is what the market bears
        for general contracting services on residential repair work.{' '}
        <Link href="/resources/xactimate" className="text-[#2E74B5] hover:underline">
          Xactimate
        </Link>{' '}
        &mdash; the estimating software used by virtually every insurance
        company in the country &mdash; treats 10 and 10 as the default when
        O&amp;P is applied.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here is the critical point that most people miss: Xactimate&apos;s unit
        pricing does NOT include general contractor overhead and profit. The
        line item prices in Xactimate reflect the cost of a subcontractor
        performing the work &mdash; the painter, the plumber, the drywall
        finisher. They do not include any fee for a general contractor to
        manage those subs. O&amp;P must be added on top of the line item
        totals.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When the insurance company gives you an estimate without O&amp;P, they
        are telling you that you should act as your own general contractor.
        They are assuming you will personally hire each trade, schedule them in
        the right sequence, verify code compliance, manage quality control, and
        deal with the inevitable problems. That is not a reasonable assumption
        for most homeowners dealing with a significant loss.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">The Three Overhead Categories</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Xactimate&apos;s own documentation breaks overhead into three distinct
        categories. Understanding these matters because carriers frequently
        confuse them &mdash; sometimes deliberately &mdash; to justify removing
        legitimate costs from your estimate.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">General Overhead</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        General overhead is the cost of running a contracting business that
        cannot be attributed to any single project. This includes office rent,
        administrative staff salaries, licensing fees, advertising, general
        liability insurance, vehicle costs, accounting, and all the other
        expenses a contractor pays whether they have one job or twenty.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the &ldquo;10% overhead&rdquo; that gets applied as a
        percentage on the estimate. It compensates the general contractor for
        the share of their fixed business expenses that each project must
        carry. Every legitimate contracting business has these costs, and they
        are real.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Job-Related Overhead</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Job-related overhead consists of costs that are specific to a
        particular project but not attributable to any single task within that
        project. Examples include project managers and supervisors assigned to
        the job, portable sanitation facilities, temporary power, site
        security, perimeter fencing, dumpster rental, and temporary weather
        protection.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is an important distinction: job-related overhead should appear as
        separate line items on the estimate, not as a percentage. These are
        real, measurable costs that vary by project. A large fire repair that
        runs six months will have significant supervision and site costs. A
        smaller water loss might have none. Each project gets priced based on
        what it actually requires.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">Job-Personnel Overhead</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Job-personnel overhead covers the employer&apos;s cost of having
        workers on the job &mdash; payroll taxes, workers&apos; compensation
        insurance, health benefits, and similar labor burden items. This
        category is already built into Xactimate&apos;s labor rates. No
        separate charge is needed, and no one is suggesting one should be
        added.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The reason this category matters is that carriers sometimes argue
        &ldquo;overhead is already in the line items.&rdquo; They are confusing
        job-personnel overhead (which is included) with general overhead (which
        is not). These are fundamentally different costs, and Xactimate&apos;s
        documentation makes this clear.
      </p>

      <CalloutBox variant="important" title="Key Distinction">
        <p>
          Direct job supervision &mdash; a project manager or superintendent
          physically overseeing the work &mdash; is explicitly categorized as
          job-related overhead in Xactimate&apos;s documentation. It is NOT
          part of general O&amp;P. It should be its own line item when the
          scope warrants it. Carriers routinely strip supervision claiming it
          is &ldquo;included in O&amp;P.&rdquo; Their own estimating software
          says otherwise.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Three-Trade Rule: Industry Shorthand &mdash; Not a Legal Standard
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Ask an insurance adjuster why O&amp;P was excluded from your estimate
        and you will almost certainly hear some version of the
        &ldquo;three-trade rule.&rdquo; The claim goes like this: O&amp;P is
        only owed when three or more trades are involved in the repair. Fewer
        than three trades means the homeowner can manage it themselves, so no
        general contractor is needed, so no O&amp;P is owed.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        That framing gets the rule exactly backward. The three-trade
        threshold, as understood in the adjusting industry, is a floor for when
        a general contractor is presumptively needed &mdash; not a ceiling. And
        the rule is industry shorthand loosely tracking a legal principle that
        appellate courts across the country have adopted and enforced for
        decades. The principle is straightforward: overhead and profit are owed
        whenever a general contractor is <strong>reasonably likely</strong> to
        be needed.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        It is true that no state legislature has enacted a statute that says
        &ldquo;when three trades are required, overhead and profit shall be
        paid.&rdquo; The phrase &ldquo;three-trade rule&rdquo; does not appear
        in any insurance code, in California&apos;s Fair Claims Settlement
        Practices Regulations, or in the NAIC model acts. Adjusters who tell
        policyholders that &ldquo;the three-trade rule doesn&rsquo;t
        exist&rdquo; are technically correct about its statutory codification.
        They are wrong about everything else.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The substance of the rule &mdash; that when multiple trades are
        required, a general contractor is reasonably likely to be needed, and
        therefore O&amp;P must be paid &mdash; is not an industry invention. It
        is the holding of appellate decisions from Pennsylvania, Florida,
        Arizona, Oklahoma, New York, the Seventh Circuit, and federal courts
        applying Texas law. Each of those decisions examined the specific facts
        before it, and each concluded that the need for multiple trades is
        strong evidence that general contractor services are reasonably
        necessary.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        What the Three-Trade Rule Actually Means in Practice
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The three-trade rule, as understood in the insurance adjusting
        industry, holds that when a property repair requires three or more
        distinct trades &mdash; such as roofing, plumbing, electrical, drywall,
        painting, or flooring &mdash; the scope of work is complex enough that
        a general contractor would reasonably be needed to coordinate and
        oversee it. When a general contractor is needed, the insurer owes
        overhead and profit as part of the claim payment.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The rule originated not from a court decision or a statute, but from
        the practical reality of construction. A homeowner can reasonably
        manage a single-trade repair &mdash; calling a plumber to fix a burst
        pipe, for example. But when the burst pipe also damages drywall,
        flooring, electrical outlets, and cabinetry, the homeowner is no
        longer managing a plumbing repair. They are managing a construction
        project. That project requires someone to schedule the trades in the
        correct sequence, ensure the work of one trade does not conflict with
        another, handle permitting and inspections, and take responsibility for
        the finished result.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        That someone is a general contractor. And general contractors do not
        work for free.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Even a two-trade job can warrant O&amp;P. If your bathroom flood
        requires plumbing repairs and a full tile rebuild, that project
        involves sequencing, waterproofing inspections, and material
        coordination. A homeowner should not be expected to manage that
        themselves just because only two trades are technically involved.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Legal Standard: &ldquo;Reasonably Likely&rdquo;
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        While the three-trade rule itself is an industry guideline, the legal
        principle it represents has been established by courts across the
        country. The standard is this: overhead and profit must be included in
        the insurer&apos;s payment whenever the use of a general contractor is{' '}
        <strong>reasonably likely</strong> &mdash; regardless of whether the
        policyholder has actually hired one.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This standard reflects a basic principle of insurance law. A
        replacement cost policy promises to pay the cost to repair or replace
        damaged property. That cost includes all expenses the policyholder is
        reasonably likely to incur &mdash; materials, labor, permits, sales
        tax, and general contractor overhead and profit when the scope of work
        warrants it.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurer does not get to strip out a component of the repair cost
        simply because the policyholder has not yet spent the money. Insurance
        is supposed to put the policyholder in a position to make the repair.
        It is not supposed to underpay and then argue that the policyholder
        failed to prove they spent money they were never given.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Case Law: Seven Jurisdictions, One Principle
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The principle that O&amp;P is owed when a general contractor is
        reasonably likely to be needed has been adopted by appellate courts in
        Pennsylvania, Florida, Arizona, Oklahoma, and New York, the Seventh
        Circuit Court of Appeals, and federal courts applying Texas law. Each
        of these decisions reinforces the same core holding: the entitlement
        to overhead and profit does not depend on whether the policyholder
        actually hired a general contractor.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Pennsylvania: The Foundation
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Pennsylvania&apos;s courts built the framework that most other
        jurisdictions have followed.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In <em>Gilderman v. State Farm Insurance Co.</em> (1994), the
        Pennsylvania Superior Court established that when multiple trades are
        required for repairs, it is &ldquo;reasonably likely&rdquo; that
        general contractor services will be needed. The court held that repair
        or replacement costs include &ldquo;any cost that an insured is
        reasonably likely to incur,&rdquo; and that this includes general
        contractor overhead and profit. The insurer may not automatically
        deduct O&amp;P from advance actual cash value payments.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4 text-sm italic">
        649 A.2d 941 (Pa. Super. 1994).{' '}
        <a href="https://law.justia.com/cases/pennsylvania/superior-court/1994/437-pa-super-217-0.html" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">
          Read the opinion on Justia.
        </a>
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Twelve years later, <em>Mee v. Safeco Insurance Company of America</em>{' '}
        (2006) reinforced <em>Gilderman</em> and added a structured framework
        for determining when O&amp;P is owed. The Mees&apos; home sustained
        damage from a toilet overflow that ultimately required six different
        trades to repair. Safeco denied overhead and profit because the Mees
        did not hire a general contractor.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Superior Court reversed, establishing a three-factor test:
      </p>
      <ol className="list-decimal pl-6 space-y-2 mb-6 text-gray-700 leading-relaxed">
        <li><strong>The extent of the property damage.</strong> More extensive damage is more likely to require professional coordination.</li>
        <li><strong>The number of trades required.</strong> When multiple trades are needed &mdash; in the Mees&apos; case, as many as six &mdash; professional oversight becomes reasonably necessary.</li>
        <li><strong>Expert evidence regarding building industry standards.</strong> Industry practice connecting the number of trades to the need for a general contractor is relevant evidence.</li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        The court held that O&amp;P must be included as part of the actual cash
        value payment, not merely as part of replacement cost. And critically,
        the insured need not actually hire a general contractor to be entitled
        to O&amp;P &mdash; the standard is whether a general contractor is{' '}
        <strong>reasonably likely</strong> to be needed, not whether one was
        actually used.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4 text-sm italic">
        908 A.2d 344 (Pa. Super. 2006).{' '}
        <a href="https://www.courtlistener.com/opinion/1551164/mee-v-safeco-insurance-company-of-america/" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">
          Read the opinion on CourtListener.
        </a>
        {' '}Also available on{' '}
        <a href="https://caselaw.findlaw.com/court/pa-superior-court/1164464.html" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">FindLaw</a>
        {' '}and{' '}
        <a href="https://law.justia.com/cases/pennsylvania/superior-court/2006/a14003-06.html" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Justia</a>.
        Mee is Pennsylvania authority &mdash; persuasive in California, not
        binding.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Florida: The Supreme Court Weighs In
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Florida&apos;s highest court addressed the question directly in{' '}
        <em>Trinidad v. Florida Peninsula Insurance Co.</em> (2013), producing
        what is now the leading authority in the state.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Trinidad&apos;s home sustained fire damage. Florida Peninsula refused
        to include overhead and profit in its payment. The case reached the
        Florida Supreme Court on a certified question from the Fifth District
        Court of Appeal.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Court&apos;s holding was unambiguous: overhead and profit must be
        included in the insurer&apos;s payment under a replacement cost policy
        when the policyholder is{' '}
        <strong>&ldquo;reasonably likely to need a general contractor for the repairs.&rdquo;</strong>{' '}
        The Court explained that O&amp;P is &ldquo;like all other costs of a
        repair&rdquo; &mdash; it is no different from the cost of labor or
        materials. Eliminating O&amp;P from the replacement cost payment would
        provide the policyholder with less coverage than an actual cash value
        policy, which would contradict the entire purpose of replacement cost
        coverage.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Court rejected any rigid numerical threshold. Whether a general
        contractor is reasonably likely to be needed is a factual determination
        that depends on the specific circumstances of the loss &mdash; not a
        mechanical count of trades.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4 text-sm italic">
        121 So. 3d 433 (Fla. 2013).{' '}
        <a href="https://caselaw.findlaw.com/court/fl-supreme-court/1637393.html" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">
          Read the opinion on FindLaw.
        </a>
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Arizona: Following Pennsylvania&apos;s Lead
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        In <em>Tritschler v. Allstate Insurance Co.</em> (2006), the Arizona
        Court of Appeals adopted Pennsylvania&apos;s reasoning and applied it
        to a case where the absurdity of the carrier&apos;s position was on
        full display.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Allstate sent its own preferred vendor &mdash; Better Way &mdash; to
        inspect and estimate the damage to Jules Tritschler&apos;s home after
        rain damage. Better Way prepared a $44,471 estimate that included 10%
        overhead and 10% profit. Allstate then refused to pay the O&amp;P
        portion of its own vendor&apos;s estimate.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The court held that actual cash value is an estimate of needed
        repairs, and that the determination of whether O&amp;P is owed does not
        depend on what the insured actually pays. The question is whether a
        general contractor is reasonably necessary for the scope of work
        &mdash; and Allstate&apos;s own vendor had already answered that
        question by including O&amp;P in the estimate.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Tritschler also addressed proof-of-hire arguments directly: the carrier
        took the position that it would only pay O&amp;P if the insured
        actually hired a general contractor and provided proof. The court
        rejected this. Replacement cost means the cost to replace or repair
        using methods and materials of like kind and quality &mdash; and that
        cost includes a GC&apos;s fee when one would reasonably be needed,
        whether or not the homeowner actually engages one.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4 text-sm italic">
        213 Ariz. 505, 144 P.3d 519 (Ariz. Ct. App. 2006).{' '}
        <a href="https://caselaw.findlaw.com/court/az-court-of-appeals/1285810.html" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">
          Read the opinion on FindLaw.
        </a>
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Texas: Federal Court and the Insurance Commissioner
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        In <em>Ghoman v. New Hampshire Insurance Co.</em> (2001), the federal
        court for the Northern District of Texas granted the policyholder&apos;s
        motion for partial summary judgment on breach of contract. Ghoman owned
        a Howard Johnson hotel that sustained wind and hail damage. The
        appraisal valued replacement cost at $299,907, but New Hampshire
        Insurance tendered only $190,414, withholding $48,083 in contractor
        overhead and profit and $22,856 in sales tax.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The court held that replacement costs &ldquo;should include any cost
        that an insured is &lsquo;reasonably likely to incur&rsquo; in
        repairing or replacing a covered loss.&rdquo; O&amp;P and sales tax
        &ldquo;clearly fit into this definition and should be included in both
        the replacement cost and actual cash value amounts.&rdquo; This is the
        &ldquo;reasonably likely&rdquo; standard that several jurisdictions
        have adopted. It asks what costs a reasonable homeowner would face,
        not what the particular homeowner actually spent.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4 text-sm italic">
        159 F. Supp. 2d 928 (N.D. Tex. 2001).{' '}
        <a href="https://law.justia.com/cases/federal/district-courts/FSupp2/159/928/2384313/" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">
          Read the opinion on Justia.
        </a>
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Texas Department of Insurance weighed in even earlier. In
        Commissioner&apos;s Bulletin B-0045-98, issued June 12, 1998, the
        Department declared that &ldquo;the deduction of a prospective
        contractor&apos;s overhead and profit and sales tax, in determining the
        actual cash value under a replacement cost policy, is improper.&rdquo;
        The bulletin characterized the withholding of O&amp;P as an{' '}
        <strong>&ldquo;illegal windfall&rdquo;</strong> for the insurer &mdash;
        language that reflects how seriously Texas regulators view the
        practice.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4 text-sm italic">
        <a href="https://www.tdi.texas.gov/bulletins/1998/b-0045-8.html" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">
          Read Bulletin B-0045-98 on the Texas Department of Insurance website.
        </a>
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Oklahoma: The Three-Trade Rule as Class Boundary
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        <em>Burgess v. Farmers Insurance Co.</em> (2006) is particularly
        significant because the Oklahoma Supreme Court explicitly used the
        three-trade threshold as the defining boundary for a class action.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The class was defined as claimants whose claim files reflected that{' '}
        <strong>three or more trades</strong> were anticipated in the property
        repair. General contractor overhead and profit was defined as 20% of
        ACV (10% overhead plus 10% profit). Class members received the 20%
        O&amp;P payment plus 8% interest, less any amounts previously paid.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is notable because the court did not merely acknowledge the
        three-trade rule as an industry guideline &mdash; it used three trades
        as the operative threshold for determining class membership. The
        practical effect was to establish, in the context of that litigation,
        that claims involving three or more trades presumptively warrant
        O&amp;P.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4 text-sm italic">
        151 P.3d 92, 2006 OK 66 (Okla. 2006).{' '}
        <a href="https://law.justia.com/cases/oklahoma/supreme-court/2006/448123.html" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">
          Read the opinion on Justia.
        </a>
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        New York: Replacement Cost Is Inherently Hypothetical
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        In <em>Mazzocki v. State Farm</em> (2003), the New York Appellate
        Division, Third Department addressed the carrier&apos;s argument that
        O&amp;P should not be paid because the policyholder had not yet hired
        a general contractor. The court rejected that argument, holding that
        State Farm was obligated to include general contractor overhead and
        profit in replacement cost calculations &mdash; and therefore in
        actual cash value &mdash; whenever a contractor was reasonably likely
        to be needed for the repair or replacement.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The reasoning is straightforward. Every component of a replacement
        cost estimate is prospective &mdash; the materials have not been
        purchased, the labor has not been performed, the contractors have not
        been hired. If the hypothetical nature of the cost were grounds for
        exclusion, the insurer would owe nothing at all. The need for a
        general contractor is no more or less hypothetical than the need for
        shingles, drywall, or paint.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4 text-sm italic">
        1 A.D.3d 9, 766 N.Y.S.2d 719 (N.Y. App. Div., 3d Dept. 2003). See
        discussion in Merlin Law Group,{' '}
        <a href="https://www.propertyinsurancecoveragelaw.com/blog/entitlement-to-overhead-and-profit-on-an-actual-cash-value-estimate/" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">
          &ldquo;Entitlement to Overhead and Profit on an Actual Cash Value Estimate&rdquo;
        </a>.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Seventh Circuit (Applying Illinois Law)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        In{' '}
        <em>Windridge of Naperville Condominium Association v. Philadelphia Indemnity Insurance Co.</em>{' '}
        (2019), the Seventh Circuit Court of Appeals held that if a general
        contractor is required to repair damaged property, the insurer must pay
        overhead and profit regardless of whether one was actually hired. The
        court applied the industry-standard &ldquo;10 and 10&rdquo; &mdash; 10%
        overhead and 10% profit.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4 text-sm italic">
        932 F.3d 1035 (7th Cir. 2019).{' '}
        <a href="https://law.justia.com/cases/federal/appellate-courts/ca7/18-2103/18-2103-2019-08-07.html" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">
          Read the opinion on Justia.
        </a>
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The pattern across these cases is consistent. Courts look at whether a
        general contractor&apos;s involvement is reasonably likely given the
        scope of work. They do not count trades and apply an arbitrary
        threshold. They do not require the homeowner to prove they actually
        hired a GC. They ask a simple question: would a reasonable person hire
        a general contractor for this project?
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Caveat: When Policy Language Explicitly Restricts O&amp;P
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Not all of this case law cuts uniformly in favor of policyholders. In{' '}
        <em>Kurach v. Truck Insurance Exchange</em> (2020), the Pennsylvania
        Supreme Court held in a 4-3 decision that the insurer could withhold
        general contractor overhead and profit from ACV payments.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The holding was narrow and fact-specific. The policy in{' '}
        <em>Kurach</em> contained explicit language conditioning O&amp;P
        payment on the insured actually incurring and paying those costs. The
        policy stated:
      </p>
      <p className="text-gray-700 leading-relaxed mb-4 italic border-l-4 border-gray-300 pl-4">
        &ldquo;actual cash value settlements will not include estimated general
        contractor fees or charges for general contractor&rsquo;s services
        unless and until you actually incur and pay such fees and charges.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Court <strong>distinguished rather than overruled</strong>{' '}
        <em>Gilderman</em> and <em>Mee</em>. It held that those earlier
        decisions involved policies that were silent on O&amp;P, making them
        factually distinguishable. Where a policy does not contain explicit
        GCOP-withholding language &mdash; which covers most standard
        homeowner&apos;s policies &mdash; the <em>Mee</em> and{' '}
        <em>Gilderman</em> framework remains controlling law in Pennsylvania.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The lesson of <em>Kurach</em> is not that O&amp;P can be freely
        withheld. The lesson is that policy language matters, and
        policyholders and their representatives should review the specific
        policy at issue before asserting an O&amp;P claim.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4 text-sm italic">
        235 A.3d 1106 (Pa. 2020).{' '}
        <a href="https://law.justia.com/cases/pennsylvania/supreme-court/2020/12-eap-2019-0.html" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">
          Read the opinion on Justia.
        </a>
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        State Regulatory Authority
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Beyond case law, state insurance regulators have independently
        addressed the O&amp;P question.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Texas</strong> &mdash; Commissioner&apos;s Bulletin B-0045-98
        (1998) states that withholding O&amp;P from ACV under a replacement
        cost policy is &ldquo;improper&rdquo; and constitutes an &ldquo;illegal
        windfall&rdquo; for the insurer.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Colorado</strong> &mdash; DORA Bulletin B-5.1 (1998) prohibits
        insurers from deducting contractors&apos; overhead and profit in
        addition to depreciation when policyholders do not repair or replace
        the structure. No dollar threshold or complexity requirement.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>California</strong> &mdash; California presents a different
        picture from the states surveyed above. There is{' '}
        <strong>no published California appellate or Supreme Court decision</strong>{' '}
        that directly adopts the &ldquo;reasonably likely&rdquo; standard or
        the three-trade rule, and the California Department of Insurance has
        not issued a bulletin specifically naming O&amp;P. That gap is worth
        acknowledging honestly.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        What California does provide is the{' '}
        <Link href="/resources/california-fair-claims" className="text-[#2E74B5] hover:underline">
          Fair Claims Settlement Practices regulations
        </Link>
        {' '}(10 CCR &sect; 2695.9), which require that insurer estimates
        reflect costs that will &ldquo;restore the damaged property to no less
        than its condition prior to the loss&rdquo; using &ldquo;accepted
        trade standards for good and workmanlike construction&rdquo; at costs
        &ldquo;accurate and representative of costs in the local market
        area.&rdquo; When repairs of that scope require a general contractor,
        the regulation supports the position that the estimate must include
        the cost of one. The out-of-state authority above is persuasive, not
        binding, in California courts.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4 text-sm italic">
        <a href="https://www.law.cornell.edu/regulations/california/10-CCR-2695.9" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">
          Read California&rsquo;s regulation at Cornell LII.
        </a>
      </p>

      <CalloutBox variant="info" title="California vs. Texas: Where the Authority Comes From">
        <p>
          California and Texas land in similar places on O&amp;P, but for very
          different reasons.
        </p>
        <p className="mt-3">
          <strong>Texas:</strong> No Texas Supreme Court or Texas state
          appellate decision has adopted the &ldquo;reasonably likely&rdquo;
          standard. The authority comes from (1) the Texas Department of
          Insurance Commissioner&apos;s Bulletin B-0045-98, which characterized
          withholding O&amp;P as an &ldquo;illegal windfall,&rdquo; and (2)
          federal district court decisions applying Texas law, principally{' '}
          <em>Ghoman v. New Hampshire Insurance Co.</em> A defense attorney
          could argue the federal cases are persuasive only and that the
          bulletin is not binding law &mdash; but the practical effect is that
          Texas insurers generally pay O&amp;P or face exposure.
        </p>
        <p className="mt-3">
          <strong>California:</strong> No comparable bulletin and no appellate
          case law directly on point. The leverage comes from 10 CCR &sect;
          2695.9&apos;s requirement that estimates reflect &ldquo;accepted
          trade standards&rdquo; and &ldquo;local market&rdquo; costs,
          combined with the persuasive weight of <em>Gilderman</em>,{' '}
          <em>Mee</em>, <em>Trinidad</em>, and the other authorities above.
          The argument is sound; it just has not been tested in a California
          appellate court.
        </p>
        <p className="mt-3">
          The practical takeaway for California insureds: O&amp;P should be
          claimed on multi-trade losses, the regulation supports the claim,
          and out-of-state authority is persuasive &mdash; but no one should
          represent that a California appellate court has ruled on the issue,
          because none has.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Tennessee</strong> &mdash; Tenn. Code Ann. &sect;
        62-6-102(3)(A) defines a &ldquo;contractor&rdquo; as a person who
        undertakes construction work when the total cost of the project is
        $25,000 or more. Subcontractors performing electrical, mechanical,
        plumbing, or HVAC work must hold their own licenses at the same
        threshold. The dollar threshold &mdash; not a count of trades &mdash;
        is what triggers Tennessee&apos;s licensing requirement, but on most
        multi-trade losses involving structural repair, the project will
        exceed $25,000 and a licensed general contractor will be required.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A comprehensive state-by-state chart of O&amp;P requirements, compiled
        by Matthiesen, Wickert &amp; Lehrer, is available as a reference
        document.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4 text-sm italic">
        <a href="https://www.mwl-law.com/wp-content/uploads/2019/09/GENERAL-CONTRACTOR-OVERHEAD-AND-PROFIT-PAYMENTS-CHART-00215699x9EBBF.pdf" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">
          Download the 50-state GC O&amp;P chart (PDF).
        </a>
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why &ldquo;The Three-Trade Rule Doesn&rsquo;t Exist&rdquo; Is the Wrong Argument
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When someone tells you that the three-trade rule doesn&rsquo;t exist,
        they are making a statement about statutory codification. No
        legislature has enacted a statute using that phrase. That much is true.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        But the argument confuses the name of the rule with the substance of
        the rule. The three-trade rule is not a statute. It is an industry
        shorthand for a legal standard that has been adopted by appellate
        courts in at least seven states and the Seventh Circuit, applied by
        federal courts in multiple others, and endorsed by state insurance
        regulators in Texas, Colorado, and elsewhere.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The substance of the rule &mdash; that when multiple trades are
        required, a general contractor is reasonably likely to be needed, and
        therefore O&amp;P must be paid &mdash; is not an industry invention.
        But the courts did not adopt a trade-count threshold. <em>Gilderman</em>, <em>Mee</em>,{' '}
        <em>Trinidad</em>, <em>Tritschler</em>, <em>Ghoman</em>,{' '}
        <em>Burgess</em>, <em>Mazzocki</em>, and <em>Windridge</em> each applied the{' '}
        <em>reasonably likely</em> standard to its own facts, and each treated the need for
        multiple trades as strong <em>evidence</em> that
        general contractor services are reasonably necessary &mdash; evidence, not a threshold.
        <em>Trinidad</em> said so expressly: no mechanical count of trades decides the question.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Consider how many foundational insurance law concepts exist without
        statutory codification. The implied covenant of{' '}
        <Link href="/resources/bad-faith" className="text-[#2E74B5] hover:underline">good faith and fair dealing</Link>
        {' '}is not defined in most insurance codes &mdash; courts created it.
        The{' '}
        <Link href="/resources/reasonable-expectations-doctrine" className="text-[#2E74B5] hover:underline">reasonable expectations doctrine</Link>
        {' '}is not a statute &mdash; it is a judicial construct. The concept
        of &ldquo;bad faith&rdquo; itself has no universal statutory
        definition &mdash; it was developed through decades of case law. No
        one argues that these principles &ldquo;don&rsquo;t exist&rdquo;
        simply because a legislature never used those exact words. The
        three-trade rule is no different. The name is shorthand. The law is
        real.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Attorney Kelly Kubiak, then of the Merlin Law Group,{' '}
        <a href="https://www.youtube.com/watch?v=5Px2tBYFWQ0" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">
          addressed this directly in a video on overhead and profit
        </a>, explaining the &ldquo;reasonably likely&rdquo; standard that
        underlies the three-trade shorthand. One commenter&apos;s reaction
        captured the problem precisely: &ldquo;I always thought you either had
        to have a contract or three trade or more, I never heard of reasonably
        likely.&rdquo; That gap between what adjusters think the rule is and
        what the law actually requires is where policyholders lose money.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Supervision as a Separate Line Item</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is one of the most misunderstood aspects of O&amp;P disputes, and
        carriers exploit the confusion aggressively.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Xactimate&apos;s own documentation classifies direct job supervision
        &mdash; a project manager or superintendent on site managing the work
        &mdash; as job-related overhead. It is not part of general O&amp;P. It
        is a separate cost category that should appear as its own line item
        when the project warrants it.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Carriers routinely remove supervision line items with the explanation
        that supervision is &ldquo;already included in overhead and
        profit.&rdquo; This is incorrect based on the carrier&apos;s own
        estimating software documentation. General O&amp;P compensates for
        fixed business expenses and the contractor&apos;s profit margin.
        Supervision is a variable, project-specific cost for having a
        qualified person physically present to manage the work.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Think of it this way: general overhead pays for the contractor&apos;s
        office, their bookkeeper, and their truck. Supervision pays for the
        person who shows up at your house every day to make sure the drywall
        crew does not cover up the plumbing before inspection. These are
        obviously different things.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">When Supervision Belongs as a Separate Line Item</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Multi-phase projects where trades must be carefully sequenced
          (demolition before rough-in, rough-in before inspection, inspection
          before close-up)
        </li>
        <li>
          Projects requiring code compliance verification at multiple stages
        </li>
        <li>
          Work involving coordination across three or more subcontractor crews
        </li>
        <li>
          Projects where material deliveries must be staged and protected
        </li>
        <li>
          Any scope where the GC would reasonably assign a project manager or
          superintendent to the job rather than checking in periodically
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        On a typical fire loss or major water damage claim, supervision is not
        optional. It is how construction works. The carrier knows this. Their
        own field adjusters see supervised projects every day. When they strip
        the line item, they are counting on you not knowing the difference.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When O&amp;P Is Owed &mdash; The Real Standard
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Forget the three-trade rule as a ceiling. The actual standard for when
        O&amp;P belongs on an estimate comes down to one question: is it
        reasonably likely that a general contractor will be involved in these
        repairs? Here are the factors that answer that question:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Multiple trades are required.</strong> If the repair involves
          more than one specialty &mdash; plumbing and drywall, roofing and
          painting, electrical and framing &mdash; someone has to coordinate
          them.
        </li>
        <li>
          <strong>The project requires scheduling and sequencing.</strong>{' '}
          Trades cannot all show up on the same day. Demo comes before
          framing. Framing comes before electrical. Electrical comes before
          drywall. Someone has to manage this timeline.
        </li>
        <li>
          <strong>Inspections are required.</strong> Building permits mean
          inspections, and inspections mean someone has to be available to
          meet the inspector, address any corrections, and schedule the next
          phase.
        </li>
        <li>
          <strong>The homeowner cannot reasonably self-manage.</strong> Most
          homeowners do not know how to coordinate construction. They do not
          know the sequence of trades, the inspection requirements, the
          material lead times, or how to manage quality. The policy is
          supposed to put them back where they were &mdash; not force them to
          become project managers.
        </li>
        <li>
          <strong>The scope is complex enough that self-management is impractical.</strong>{' '}
          A single coat of paint on one wall? Maybe no GC needed. A kitchen
          rebuild with plumbing, electrical, cabinets, countertops, flooring,
          drywall, and paint? No reasonable person would manage that without
          professional help.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The key principle running through all of this: O&amp;P is based on
        what is &ldquo;reasonably likely,&rdquo; not what actually happened.
        Under the reasonably-likely standard, not hiring a GC yet is no basis to deny O&amp;P.
        The carrier cannot deny it because you chose to manage part of the
        project yourself. The estimate reflects what the repairs would cost if
        done properly through normal channels &mdash; and normal channels
        include a general contractor on any project of meaningful complexity.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Common Carrier Arguments and How to Respond
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here are the arguments you will hear from the insurance company, and
        why each one fails:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        &ldquo;Less than three trades are involved.&rdquo;
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        There is no legal basis for a three-trade rule as a ceiling. The
        industry guideline treats three trades as a floor for when a GC is
        presumptively needed, not a cap. The actual standard is whether a GC
        is reasonably likely to be needed &mdash; and that can be true with
        two trades or even one trade if the scope is complex enough to warrant
        professional management.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        &ldquo;You have not hired a general contractor yet.&rdquo;
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        O&amp;P is based on reasonable likelihood, not actual hiring. The
        insurance company owes the cost of repair regardless of whether you
        have already engaged a contractor. You are not required to hire
        someone before the carrier will acknowledge what the repairs actually
        cost. Multiple courts &mdash; <em>Mee</em>, <em>Tritschler</em>,{' '}
        <em>Mazzocki</em>, <em>Windridge</em> &mdash; have rejected this
        argument directly.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        &ldquo;We will add it when you show us a GC invoice.&rdquo;
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Replacement cost means what it would cost to repair the property, not
        what you actually spent. The carrier cannot condition payment on proof
        of expenditure for purposes of determining the scope and cost of
        covered repairs. You are entitled to know what the repairs cost so you
        can make informed decisions &mdash; including whether to hire a GC,
        which GC to hire, and how to budget the project. You should not need
        to hire and sign with a contractor before the insurance company pays
        what the repair actually costs.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        &ldquo;The homeowner can coordinate the trades themselves.&rdquo;
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The policy pays for what it costs to repair the property, not for the
        homeowner to become a project manager. The insured is entitled to have
        the work done professionally. That is what replacement cost means.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        &ldquo;It is included in our line item pricing.&rdquo;
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is factually wrong. Xactimate&apos;s documentation explicitly
        states that general contractor overhead and profit are not included in
        line item pricing. Line items reflect subcontractor costs &mdash;
        labor and materials for the trade performing the work. The GC&apos;s
        markup is separate. If the carrier disagrees, ask them to cite the
        specific Xactimate documentation that supports their position. They
        will not be able to.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        &ldquo;The scope is too small for a general contractor.&rdquo;
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Small scope does not automatically mean no GC is needed. A
        &ldquo;small&rdquo; water loss that involves demolition, drying,
        plumbing repair, drywall replacement, texture matching, painting, and
        baseboard installation involves seven separate operations. Even
        &ldquo;small&rdquo; water losses often involve demo, drying, plumbing,
        drywall, texture, paint, flooring, and baseboard. Most homeowners are
        not equipped to manage that, regardless of the dollar amount. The
        question is not how big the claim is &mdash; it is whether the work
        requires professional coordination.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        &ldquo;We only pay O&amp;P on large losses.&rdquo;
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        There is no dollar threshold in any state&apos;s insurance code or
        regulations that limits O&amp;P to large claims. A $15,000 repair that
        involves four trades needs a general contractor just as much as a
        $150,000 repair. The complexity of coordination does not correlate
        neatly with the total dollar amount. Carriers use this argument to
        suppress O&amp;P on the medium-sized claims where most homeowners will
        not push back.
      </p>

      <CalloutBox variant="tip" title="The Bottom Line on O&amp;P">
        <p>
          Overhead and Profit is owed whenever a general contractor is
          reasonably likely to be involved in your repairs. The three-trade
          rule that carriers cite as a ceiling has no legal basis as a ceiling
          &mdash; it is industry shorthand for a legal standard, not a cap on
          recovery. Supervision is a separate line item, not part of general
          O&amp;P. If your estimate excludes O&amp;P on a multi-trade repair,
          the estimate is short, and pushing back is well grounded.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">How O&amp;P Is Calculated</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The math is simple but often misunderstood. O&amp;P is applied to the
        net direct costs of repair &mdash; the total of all line items before
        tax and O&amp;P. Here is how it works on a $50,000 estimate:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Direct repair costs (all line items): $50,000</li>
        <li>10% Overhead: $5,000</li>
        <li>10% Profit (applied to direct costs + overhead): $5,500</li>
        <li>Total with O&amp;P: $60,500</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Note that in Xactimate, profit is calculated on the base plus overhead
        &mdash; so the combined effect is slightly more than a flat 20%. On a
        $50,000 estimate, O&amp;P adds $10,500, not $10,000. This is the
        mathematically correct application and it is how the software
        calculates it by default.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some carriers will argue for a flat 20% (profit on base only, not on
        base plus overhead). While the difference is small, it is still an
        underpayment. The standard Xactimate methodology applies profit after
        overhead has been added. If the carrier is using Xactimate to write
        the estimate, they should follow the software&apos;s own calculation
        method.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        O&amp;P on Supplements
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When additional damage is discovered during repairs and a{' '}
        <Link href="/resources/supplemental-claims" className="text-[#2E74B5] hover:underline">
          supplement
        </Link>{' '}
        is filed, O&amp;P should be included on the supplemental amount as
        well. The same logic applies: if a GC is managing the overall project,
        their overhead and profit apply to the entire scope of work, including
        anything discovered after demolition begins.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Carriers sometimes agree to O&amp;P on the initial estimate but refuse
        it on supplements. This makes no sense. If the project warrants a GC,
        it warrants a GC for the whole project &mdash; not just the first
        phase. The GC does not stop charging overhead because additional work
        was discovered mid-project.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Watch for this tactic: the carrier approves O&amp;P on the original
        $40,000 estimate, then a $25,000 supplement is filed for hidden damage
        found behind walls. The carrier pays the supplement amount but strips
        O&amp;P from it. The homeowner does not notice because the check is
        still substantial. But $5,000 in O&amp;P just disappeared from the
        claim. The GC still charges it &mdash; the homeowner is just expected
        to eat the difference.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        O&amp;P and Emergency Services
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A question that comes up frequently: does O&amp;P apply to mitigation
        and emergency services? The answer depends on who is performing the
        work. If the general contractor is coordinating the emergency response
        as part of the overall project &mdash; which is common on larger
        losses where the GC is brought in early &mdash; then yes, their
        O&amp;P applies to the full scope including emergency work.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If a separate mitigation company handles the emergency work
        independently (water extraction, board-up, tarping), that work is
        typically billed directly by the mitigation company at their own rates
        and does not have GC O&amp;P added on top. However, the repair work
        that follows the mitigation &mdash; even if it is directly related to
        the same loss event &mdash; is a separate scope that does warrant
        O&amp;P when a GC manages it.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Carriers occasionally try to lump mitigation and repair together and
        argue that because the mitigation company &ldquo;already
        handled&rdquo; part of the work, fewer trades remain for the repair
        phase, so no GC is needed. This is flawed logic. Mitigation and
        repair are different scopes performed at different times for
        different purposes. The repair scope stands on its own.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        California-Specific Considerations
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California&apos;s{' '}
        <Link href="/resources/california-fair-claims" className="text-[#2E74B5] hover:underline">
          Fair Claims Settlement Practices Regulations
        </Link>{' '}
        (10 CCR 2695) require insurers to pay claims based on the actual cost
        of repair. The underlying statutory measure comes from Cal. Ins. Code
        &sect; 2051(b), which defines the measure of recovery for either a
        total or partial loss as:
      </p>
      <p className="text-gray-700 leading-relaxed mb-4 italic border-l-4 border-gray-300 pl-4">
        &ldquo;the amount it would cost the insured to repair, rebuild, or
        replace the thing lost or injured less a fair and reasonable deduction
        for physical depreciation.&rdquo;
      </p>
      <p className="text-sm text-gray-500 italic mb-4">
        Cal. Ins. Code &sect; 2051(b), as amended by AB 188 (Stats. 2019, ch.
        59), effective January 1, 2020. AB 188 (2019) eliminated the prior
        &sect; 2051(b)(1)/(b)(2) bifurcation between total and partial losses.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        That phrase &mdash; &ldquo;the amount which it would cost the
        insured&rdquo; &mdash; is the key. It does not say the amount the
        insured actually spent. It does not say the amount the insured could
        save by acting as their own GC. It says what it would cost. And for
        most repairs of any complexity, what it would cost includes overhead
        and profit for a general contractor.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Separately, 10 CCR 2695.7(d) requires an insurer&apos;s claim
        investigation to be thorough, fair, and objective. When a carrier
        asserts that O&amp;P is not owed without providing a documented,
        fact-specific basis, that conclusory position is difficult to square
        with a thorough, fair, and objective investigation under (d).
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        California also requires insurers under 10 CCR 2695.9(d) to supply a
        written scope of loss and/or written estimate to the claimant. The
        regulation contemplates that the insurer&apos;s estimate will reflect
        what is reasonably necessary to restore the property to its pre-loss
        condition consistent with accepted trade standards. An estimate that
        systematically excludes a legitimate cost component &mdash; one that
        the carrier&apos;s own software treats as separate from line-item
        pricing &mdash; is difficult to reconcile with that obligation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        No California appellate court has yet ruled directly on the
        three-trade rule or the &ldquo;reasonably likely&rdquo; O&amp;P
        standard. The argument in a California claim anchors in the
        regulation plus persuasive out-of-state authority from Pennsylvania,
        Florida, Arizona, Oklahoma, New York, the Seventh Circuit, and the
        federal courts applying Texas law.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Xactimate&apos;s Own Documentation Says
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        <Link href="/resources/xactimate" className="text-[#2E74B5] hover:underline">
          Xactimate
        </Link>{' '}
        &mdash; the software that insurance companies use to generate the very
        estimates on which they base their payments &mdash; explicitly
        distinguishes between subcontractor overhead and profit (which is
        embedded in line-item pricing) and general contractor overhead and
        profit (which is not).
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        General contractor O&amp;P must be added separately through
        Xactimate&apos;s &ldquo;Add-Ons&rdquo; parameters. Xactware&apos;s own
        white paper on overhead and profit states that:
      </p>
      <p className="text-gray-700 leading-relaxed mb-4 italic border-l-4 border-gray-300 pl-4">
        &ldquo;the decision to use general O&amp;P &mdash; and the percentages
        applied &mdash; are the responsibility of those directly involved in
        the estimating process.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In other words, even the insurer&apos;s own estimating software
        recognizes that general contractor overhead and profit is a
        legitimate, separate cost component that should be evaluated and
        included when the scope of work warrants it. When an insurance company
        generates an Xactimate estimate with the O&amp;P field left at zero on
        a multi-trade loss, it is not following its own tool&apos;s
        documentation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4 text-sm italic">
        <a href="https://getinsights2-data.s3.amazonaws.com/WhitepaperOverheadandProfit.pdf" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">
          Download Xactware&rsquo;s Overhead and Profit White Paper (PDF).
        </a>
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When O&amp;P Disputes Go to Appraisal
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you cannot resolve the O&amp;P dispute through negotiation, it
        becomes a dispute over the &ldquo;amount of loss&rdquo; &mdash; which
        means it can be submitted to the{' '}
        <Link href="/resources/appraisal" className="text-[#2E74B5] hover:underline">
          appraisal process
        </Link>{' '}
        under most California property policies. In appraisal, your appraiser
        and the carrier&apos;s appraiser each prepare their own estimate. If
        they disagree, an umpire breaks the tie.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        O&amp;P disputes are excellent candidates for appraisal because they
        are straightforward factual questions: does this scope require a
        general contractor? The answer is almost always yes on multi-trade
        claims. Appraisers and umpires who work in the construction industry
        understand this. They include O&amp;P routinely because that is how
        construction pricing actually works.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        One caveat: some carriers argue that O&amp;P is a
        &ldquo;coverage&rdquo; question rather than an &ldquo;amount&rdquo;
        question, and therefore outside the scope of appraisal. This argument
        is weak. O&amp;P is not a separate coverage &mdash; it is a component
        of the cost to repair, which is exactly what appraisal is designed to
        determine. Most umpires reject this objection.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What to Do If Your Insurer Denies Overhead and Profit
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your insurance company has denied or withheld overhead and profit
        on a claim involving multiple trades, here are concrete steps you
        might consider:
      </p>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Review your policy language.</strong> The first question is
          whether your policy contains explicit language restricting O&amp;P
          &mdash; the type of provision at issue in <em>Kurach</em>. Most
          standard homeowner&apos;s policies do not. If your policy is silent
          on O&amp;P, the majority-rule framework applies: O&amp;P is owed
          when a general contractor is reasonably likely to be needed.
        </li>
        <li>
          <strong>Request the carrier&apos;s basis in writing.</strong> Ask
          them to provide a written explanation of why O&amp;P was excluded,
          including any regulation, statute, or policy language they are
          relying on. Most of the time, they will cite the three-trade rule
          &mdash; which gives you an easy rebuttal because it has no legal
          authority as a ceiling on recovery.
        </li>
        <li>
          <strong>Reference Xactimate&apos;s own documentation.</strong> The
          software the carrier used to write your estimate explicitly states
          that line item pricing does not include general contractor O&amp;P.
          Their tool contradicts their position.
        </li>
        <li>
          <strong>Document the trades required.</strong> List every distinct
          trade that the repair requires. If the list includes three or more
          &mdash; roofing, electrical, plumbing, drywall, painting, flooring,
          HVAC, cabinetry, tile work &mdash; that is strong evidence under
          the <em>Mee</em> framework that a general contractor is reasonably
          necessary.
        </li>
        <li>
          <strong>Request the Xactimate file.</strong> Ask your insurer for
          the native .ESX file of its estimate. This file will show whether
          the adjuster included O&amp;P in the parameters. If the adjuster
          set O&amp;P to zero on a multi-trade loss, that is a fact worth
          documenting.
        </li>
        <li>
          <strong>Get a contractor&apos;s estimate.</strong> Obtain one or
          more written estimates from licensed general contractors. If every
          contractor who bids the job includes overhead and profit, that is
          powerful evidence that O&amp;P is a real cost of the repair.
          Virtually every legitimate contractor will include it.
        </li>
        <li>
          <strong>Count the trades in the carrier&apos;s own estimate.</strong>{' '}
          Carriers often strip O&amp;P from estimates that contain four,
          five, or six trades in their own scope. Point out the
          inconsistency. If they list plumbing, drywall, paint, flooring, and
          electrical in their own scope but exclude O&amp;P, their position
          contradicts itself.
        </li>
        <li>
          <strong>File a complaint with the California Department of Insurance.</strong>{' '}
          Under 10 CCR 2695.7, the carrier must pay claims based on the
          reasonable cost of repair. If they are systematically excluding a
          legitimate component of repair cost without legal justification,
          that is an unfair claims practice. A{' '}
          <Link href="/resources/cdi-right-to-claim-documents" className="text-[#2E74B5] hover:underline">
            CDI complaint
          </Link>{' '}
          puts it on the record.
        </li>
        <li>
          <strong>Consult a{' '}
          <Link href="/resources/public-adjuster" className="text-[#2E74B5] hover:underline">
            Public Adjuster
          </Link>
          {' '}or attorney.</strong> A licensed Public Adjuster can write a
          proper Xactimate estimate that includes O&amp;P with documentation
          supporting why it is owed. If the dispute cannot be resolved
          through negotiation, it can be taken to{' '}
          <Link href="/resources/appraisal" className="text-[#2E74B5] hover:underline">
            appraisal
          </Link>{' '}
          where an independent appraiser and umpire make the final
          determination. O&amp;P disputes can involve significant amounts of
          money &mdash; 20% of the entire repair estimate. A qualified
          professional can evaluate your specific situation, review your
          policy language, and determine the best path forward.
        </li>
        <li>
          <strong>Do not accept &ldquo;we will supplement later.&rdquo;</strong>{' '}
          Carriers sometimes say they will add O&amp;P once you start repairs
          or once you prove you hired a GC. This is a delay tactic. You are
          entitled to a complete estimate up front so you can make informed
          decisions about your repairs.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">The Math Matters &mdash; And So Does the Scale</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        To understand why carriers fight so hard on O&amp;P, consider the
        scale. If a carrier handles 10,000 property claims per year in
        California and denies O&amp;P on half of them, and the average
        suppressed O&amp;P amount is $8,000, that is $40 million in claims
        costs they have avoided paying. Per year. For one carrier.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is not about whether your specific roof repair &ldquo;really
        needs&rdquo; a general contractor. It is a business decision by the
        carrier to systematically exclude a legitimate cost component from
        estimates and bet that most policyholders will not fight it. The ones
        who do fight get paid. The ones who do not save the carrier money.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Do not be the one who does not fight.
      </p>

      <CalloutBox variant="tip" title="The Dollar Impact">
        <p>
          On a $50,000 repair, O&amp;P adds roughly $10,000 to the claim. On a
          $100,000 repair, it is $20,000. On a $150,000 fire loss, it is
          $30,000. This is real money that insurance companies are stripping
          from claims every day. You might consider not accepting an estimate
          that omits O&amp;P without a fight.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Related Resources</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <Link href="/resources/xactimate" className="text-[#2E74B5] hover:underline">
            Xactimate Estimates: What You Need to Know
          </Link>{' '}
          &mdash; how the estimating software works and where carrier
          estimates go wrong
        </li>
        <li>
          <Link href="/resources/supplemental-claims" className="text-[#2E74B5] hover:underline">
            Supplemental Claims
          </Link>{' '}
          &mdash; filing for additional damage discovered during repairs
        </li>
        <li>
          <Link href="/resources/california-fair-claims" className="text-[#2E74B5] hover:underline">
            California Fair Claims Settlement Practices Regulations
          </Link>{' '}
          &mdash; every rule your insurer must follow on a property claim
        </li>
        <li>
          <Link href="/resources/cdi-right-to-claim-documents" className="text-[#2E74B5] hover:underline">
            Your Right to Claim Documents
          </Link>{' '}
          &mdash; what the carrier must provide when you ask
        </li>
        <li>
          <Link href="/resources/public-adjuster" className="text-[#2E74B5] hover:underline">
            Hiring a Public Adjuster
          </Link>{' '}
          &mdash; when it makes sense and how the process works
        </li>
        <li>
          <Link href="/resources/appraisal" className="text-[#2E74B5] hover:underline">
            The Appraisal Process
          </Link>{' '}
          &mdash; the contractual mechanism for resolving amount-of-loss
          disputes
        </li>
        <li>
          <Link href="/resources/bad-faith" className="text-[#2E74B5] hover:underline">
            Insurance Bad Faith
          </Link>{' '}
          &mdash; the implied covenant of good faith and fair dealing in
          California insurance law
        </li>
        <li>
          <Link href="/resources/reasonable-expectations-doctrine" className="text-[#2E74B5] hover:underline">
            The Reasonable Expectations Doctrine
          </Link>{' '}
          &mdash; judicial construct for interpreting ambiguous policy
          language in favor of the insured
        </li>
      </ul>

      <hr className="my-8 border-gray-300" />

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Cases Cited
      </h2>
      <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700 text-sm leading-relaxed">
        <li><em>Gilderman v. State Farm Insurance Co.</em>, 649 A.2d 941 (Pa. Super. 1994). <a href="https://law.justia.com/cases/pennsylvania/superior-court/1994/437-pa-super-217-0.html" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Justia</a></li>
        <li><em>Mee v. Safeco Insurance Co. of America</em>, 908 A.2d 344 (Pa. Super. 2006). <a href="https://www.courtlistener.com/opinion/1551164/mee-v-safeco-insurance-company-of-america/" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">CourtListener</a> | <a href="https://caselaw.findlaw.com/court/pa-superior-court/1164464.html" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">FindLaw</a> | <a href="https://law.justia.com/cases/pennsylvania/superior-court/2006/a14003-06.html" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Justia</a></li>
        <li><em>Trinidad v. Florida Peninsula Insurance Co.</em>, 121 So. 3d 433 (Fla. 2013). <a href="https://caselaw.findlaw.com/court/fl-supreme-court/1637393.html" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">FindLaw</a></li>
        <li><em>Tritschler v. Allstate Insurance Co.</em>, 213 Ariz. 505, 144 P.3d 519 (Ariz. Ct. App. 2006). <a href="https://caselaw.findlaw.com/court/az-court-of-appeals/1285810.html" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">FindLaw</a></li>
        <li><em>Ghoman v. New Hampshire Insurance Co.</em>, 159 F. Supp. 2d 928 (N.D. Tex. 2001). <a href="https://law.justia.com/cases/federal/district-courts/FSupp2/159/928/2384313/" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Justia</a></li>
        <li><em>Burgess v. Farmers Insurance Co.</em>, 151 P.3d 92, 2006 OK 66 (Okla. 2006). <a href="https://law.justia.com/cases/oklahoma/supreme-court/2006/448123.html" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Justia</a></li>
        <li><em>Mazzocki v. State Farm Fire &amp; Cas. Corp.</em>, 1 A.D.3d 9, 766 N.Y.S.2d 719 (N.Y. App. Div., 3d Dept. 2003). <a href="https://www.propertyinsurancecoveragelaw.com/blog/entitlement-to-overhead-and-profit-on-an-actual-cash-value-estimate/" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Merlin Law Group analysis</a></li>
        <li><em>Windridge of Naperville Condo. Ass&rsquo;n v. Philadelphia Indemnity Ins. Co.</em>, 932 F.3d 1035 (7th Cir. 2019). <a href="https://law.justia.com/cases/federal/appellate-courts/ca7/18-2103/18-2103-2019-08-07.html" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Justia</a></li>
        <li><em>Kurach v. Truck Insurance Exchange</em>, 235 A.3d 1106 (Pa. 2020). <a href="https://law.justia.com/cases/pennsylvania/supreme-court/2020/12-eap-2019-0.html" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Justia</a></li>
      </ul>

      <hr className="my-8 border-gray-300" />

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Statutory and Regulatory Authority
      </h2>
      <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700 text-sm leading-relaxed">
        <li>Cal. Ins. Code &sect; 2051(b), as amended by AB 188 (Stats. 2019, ch. 59), eff. Jan. 1, 2020 (measure of recovery for total or partial loss).</li>
        <li>10 CCR &sect; 2695.7(d) (thorough, fair, and objective investigation).</li>
        <li>10 CCR &sect; 2695.9(d) (written scope of loss and/or written estimate). <a href="https://www.law.cornell.edu/regulations/california/10-CCR-2695.9" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Cornell LII</a></li>
        <li>Texas Department of Insurance, Commissioner&rsquo;s Bulletin B-0045-98 (June 12, 1998). <a href="https://www.tdi.texas.gov/bulletins/1998/b-0045-8.html" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">TDI</a></li>
        <li>Colorado Division of Insurance, DORA Bulletin B-5.1 (1998).</li>
        <li>Tenn. Code Ann. &sect; 62-6-102(3)(A) (contractor licensing threshold at $25,000).</li>
        <li>Matthiesen, Wickert &amp; Lehrer, General Contractor Overhead and Profit Payments Chart (50-state survey). <a href="https://www.mwl-law.com/wp-content/uploads/2019/09/GENERAL-CONTRACTOR-OVERHEAD-AND-PROFIT-PAYMENTS-CHART-00215699x9EBBF.pdf" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">PDF</a></li>
      </ul>

      <hr className="my-8 border-gray-300" />

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Additional Resources
      </h2>
      <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700 text-sm leading-relaxed">
        <li>Xactware Solutions, Inc., Overhead and Profit White Paper. <a href="https://getinsights2-data.s3.amazonaws.com/WhitepaperOverheadandProfit.pdf" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">PDF</a></li>
        <li>Larry Bache, &ldquo;When Is a Policyholder Entitled to Overhead and Profit?&rdquo; Property Insurance Coverage Law Blog (Oct. 2012). <a href="https://www.propertyinsurancecoveragelaw.com/blog/when-is-a-policyholder-entitled-to-overhead-and-profit/" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Link</a></li>
        <li>Daniel Ballard, &ldquo;A Refresher on Overhead and Profit in Pennsylvania: Mee v. Safeco,&rdquo; Property Insurance Coverage Law Blog (Mar. 2021). <a href="https://www.propertyinsurancecoveragelaw.com/blog/a-refresher-on-overhead-and-profit-in-pennsylvania-mee-v-safeco/" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Link</a></li>
        <li>Corey Harris, &ldquo;Payment of Overhead and Profit,&rdquo; Property Insurance Coverage Law Blog (Mar. 2014). <a href="https://www.propertyinsurancecoveragelaw.com/blog/payment-of-overhead-and-profit/" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Link</a></li>
        <li>Merlin Law Group, &ldquo;Withholding Overhead and Profit&rdquo; (white paper). <a href="https://www.propertyinsurancecoveragelaw.com/wp-content/uploads/2019/01/Withholding-Overhead-and-Profit-1-1.pdf" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">PDF</a></li>
        <li>Kelly Kubiak, &ldquo;Overhead and Profit&rdquo; (video), Merlin Law Group (Jan. 2014). <a href="https://www.youtube.com/watch?v=5Px2tBYFWQ0" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">YouTube</a></li>
        <li>Wheeler, DiUlio &amp; Barnabei, &ldquo;When To Pay Overhead and Profit&rdquo; (July 2018). <a href="https://wdblegal.com/2018/07/when-to-pay-overhead-and-profit/" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Link</a></li>
        <li>Adjusters International, &ldquo;Overhead and Profit: Its Place in a Property Insurance Claim.&rdquo; <a href="https://www.adjustersinternational.com/pubs/adjusting-today/overhead-and-profit/" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Link</a></li>
        <li>United Policyholders, &ldquo;Payment of Overhead and Profit.&rdquo; <a href="https://uphelp.org/claim-guidance-publications/payment-of-overhead-and-profit/" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Link</a></li>
        <li>MWL Law, &ldquo;General Contractor Overhead and Profit in First-Party Claims.&rdquo; <a href="https://www.mwl-law.com/general-contractor-overhead-and-profit-first-party-claims/" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Link</a></li>
        <li>Carlton Fields, &ldquo;In Overhead and Profit Class Actions, The Third Trade&rsquo;s No Longer The Charm.&rdquo; <a href="https://propertycasualtyfocus.com/overhead-profit-class-actions-third-trades-no-longer-charm/" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">Link</a></li>
      </ul>

      <CalloutBox variant="legal" title="Important Notice">
        <p>
          This article is provided for general educational purposes only and
          does not constitute legal advice. Insurance policies, regulations,
          and case law can vary significantly based on individual
          circumstances. Consult a licensed attorney for advice about your
          specific situation. If you need a referral to an attorney
          experienced in insurance coverage disputes, a licensed Public
          Adjuster may be able to assist.
        </p>
      </CalloutBox>

      <hr className="my-8 border-gray-300" />
      <p className="text-sm text-gray-500 italic">
        This article is for informational purposes only and does not
        constitute legal advice. Insurance policies and applicable law vary by
        state and by policy form. Consult with a licensed professional
        regarding your specific situation.
      </p>
      <p className="text-sm text-gray-500 mt-4 italic">
        Written by Leland Coontz III, Licensed Public Adjuster, CA License #2B53445.
      </p>
    </>
  )
}
