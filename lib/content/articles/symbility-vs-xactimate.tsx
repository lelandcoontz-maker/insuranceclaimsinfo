import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Symbility vs. Xactimate: Reading a Claim Estimate on the Other Platform',
  description:
    "Xactimate is not the only estimating platform. A guide to recognizing a Symbility estimate, finding the price-list date, sketch, and operations, and applying the same disputes that apply to Xactimate.",
  summary:
    "Most property-claim estimates are written in Xactimate, but a minority of carriers use Symbility, a CoreLogic platform. Both do the same job with a regional price database, sketch-driven quantities, depreciation, and overhead and profit, so every substantive estimate dispute applies to both. Only the layout, terminology, and where to find each setting differ.",
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational commentary by a Licensed California Public
          Adjuster and estimator. It is not legal advice. Xactimate is a product of
          Verisk; Symbility is a platform associated with CoreLogic. For legal
          questions about a specific situation, a policyholder should consult a
          licensed California attorney.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        <em>A guide for policyholders, Public Adjusters, and attorneys who have learned
        to read an Xactimate estimate and then received one that does not look like any
        of the examples &mdash; because it was written on a different platform. The
        disputes are the same. Only the dashboard is different.</em>
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        A policyholder who has done some homework on property claims will almost always
        have read about Xactimate. It is the dominant estimating platform in the
        property-claims industry, and most of the guidance available online &mdash;
        including much of this site &mdash; is written around it. So a common and
        disorienting moment arrives when the estimate lands and it does not match any of
        the examples. The header looks different. The line items are laid out in an
        unfamiliar way. The word &ldquo;Xactimate&rdquo; appears nowhere. A reader who
        was expecting one thing and received another can be forgiven for wondering
        whether the estimate is even legitimate.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        It usually is. A meaningful minority of carriers do not use Xactimate at all.
        They use Symbility, an estimating platform associated with CoreLogic. Both
        pieces of software do the same core job in the same way: a regional price
        database, line items with unit costs, a sketch that drives quantities,
        depreciation, overhead and profit, and waste factors. The estimate is
        structured differently on the page, and the terminology differs in places, but
        the underlying machinery is the same &mdash; and so are the ways it can
        underpay a claim.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This article explains how to tell which platform produced an estimate, why the
        platform choice does not change any of the substantive disputes, where the two
        platforms differ for someone trying to read the printout, and why an estimate
        written in unfamiliar software deserves exactly the same scrutiny as one written
        in Xactimate.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        &ldquo;My Estimate Doesn&rsquo;t Look Like the Xactimate Examples&rdquo;
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        The first thing to understand is that there is nothing wrong with the estimate
        simply because it does not look like the Xactimate examples. Carriers are not
        required to use any particular software. Xactimate happens to dominate the
        market, so it dominates the how-to material, but it is not the only tool. When
        an estimate does not fit the familiar Xactimate mold, the most likely
        explanation is that a different platform produced it &mdash; and in property
        claims, the other platform a reader is most likely to encounter is Symbility.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        How to Tell Which Platform Produced the Estimate
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The fastest way to identify the platform is to read the header and the footer.
        Estimating software brands its output. An Xactimate estimate typically carries
        Xactimate or Verisk branding in the header or footer of the printout, along with
        the familiar price-list code near the top. A Symbility estimate typically carries
        its own branding &mdash; a platform or company name in the header, footer, or on
        the cover page &mdash; and lays the document out in its own format. One wrinkle
        worth knowing: CoreLogic, the company behind Symbility, rebranded to{' '}
        <strong>Cotality</strong> in 2025, and the Symbility estimating products were
        renamed under that banner. A recent estimate may therefore carry
        &ldquo;Cotality&rdquo; branding rather than &ldquo;Symbility&rdquo; or
        &ldquo;CoreLogic&rdquo; &mdash; it is the same platform lineage under a new name.
        If the printout says none of the three, the branding may have been suppressed in
        the print settings, in which case the layout itself becomes the clue.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The layouts differ in ways that are hard to describe precisely because they can
        be configured, but the general impression is distinct. An Xactimate estimate
        tends to be organized room by room, with a dense grid of line items showing
        selector codes, descriptions, quantities, unit prices, and value columns,
        followed by a summary page. A Symbility estimate presents the same information
        &mdash; grouped work, quantities, unit costs, depreciation, and totals &mdash;
        but arranges it differently on the page and labels some columns with different
        terms. A reader who has memorized where a particular number sits on an Xactimate
        printout will not find it in the same place on a Symbility printout. The number
        is there; it is just somewhere else.
      </p>

      <CalloutBox variant="info" title="The Same Numbers, a Different Page">
        <p>
          Everything a policyholder was taught to look for on an Xactimate estimate
          exists on a Symbility estimate too: a pricing region, a price-list date, line
          items with unit costs, a depreciation figure, an overhead-and-profit section,
          and a sketch with dimensions. The task is not to learn a new set of concepts.
          It is to find the same concepts in a different layout. A reader who understands{' '}
          <Link href="/resources/xactimate-line-items" className="text-[#2E74B5] hover:underline">
            how to read an Xactimate estimate line by line
          </Link>{' '}
          already understands most of what a Symbility estimate contains.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Same Job, Different Dashboard
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        The central point of this article can be stated in one sentence: the platform is
        not the problem. Both Xactimate and Symbility are built on the same foundation
        &mdash; a regional price database that is queried by line item, a sketch that
        generates the quantities, depreciation applied against those line items,
        overhead and profit calculated on the total, and waste factors added to
        material quantities. Because the machinery is the same, every substantive
        dispute that arises on an Xactimate estimate arises in exactly the same form on
        a Symbility estimate. What follows is a map of those disputes, each pointing to
        the fuller treatment on this site, with a note on where the concept lives on a
        Symbility printout.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Price-List Date
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Both platforms price an estimate against a regional database tied to a specific
        month, and on both, a stale price list quietly understates every line item. The
        concept, and why the correct date is generally the time of repair rather than
        the date of loss, is covered in full in{' '}
        <Link href="/resources/xactimate-price-list-dates" className="text-[#2E74B5] hover:underline">
          Xactimate Price List Dates and Why They Matter
        </Link>
        . On a Symbility estimate, the same principle applies &mdash; the reader simply
        looks for the database or price-list date in Symbility&rsquo;s header or
        parameters rather than in the Xactimate price-list code. The date may be labeled
        differently, but a database month that predates the repairs understates costs on
        either platform.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Labor Minimums
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Every trade carries a minimum service charge, because no tradesperson mobilizes
        for twenty minutes of pay, and a small multi-trade repair can legitimately carry
        several such minimums. How those minimums are generated and how they get stripped
        out during review is the subject of{' '}
        <Link href="/resources/xactimate-labor-minimums" className="text-[#2E74B5] hover:underline">
          Xactimate Labor Minimums: The Line Items Carriers Quietly Remove
        </Link>
        . The market reality the minimum reflects does not change with the software. A
        Symbility estimate that prices a licensed trade&rsquo;s small task below the
        trade&rsquo;s real service-call floor understates the cost for the same reason an
        Xactimate estimate would &mdash; the reader just confirms whether the minimum is
        present in Symbility&rsquo;s line-item detail.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Detach and Reset vs. Remove and Replace
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The choice of operation on a line item &mdash; whether an item is fully removed
        and replaced, reinstalled, or merely detached and reset &mdash; can move the
        price substantially, and the cheaper operation is sometimes used where the more
        expensive one applies. That distinction is explained in{' '}
        <Link href="/resources/detach-and-reset" className="text-[#2E74B5] hover:underline">
          Detach and Reset
        </Link>
        . Both platforms carry all of these operations. On a Symbility estimate, the
        operation may be described in words within the line-item text rather than by an
        Xactimate-style code, so the reader checks the operation each line describes
        against what the repair actually requires.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Sketch Dimensions
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        On both platforms, a sketch of the rooms generates the quantities &mdash; floor
        areas, wall areas, and perimeters &mdash; that drive the line items, so an
        undersized sketch quietly reduces every quantity derived from it. The mechanics
        of how sketch errors flow into an estimate are covered in{' '}
        <Link href="/resources/xactimate-sketch-errors" className="text-[#2E74B5] hover:underline">
          Xactimate Sketch Errors
        </Link>
        . A Symbility estimate is also sketch-driven; the reader measures the actual
        rooms and compares them against the dimensions shown in the Symbility sketch,
        exactly as they would with an Xactimate sketch. A room sketched smaller than it
        is understates drywall, paint, and flooring regardless of which program drew it.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Depreciation and Overhead and Profit
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Both platforms depreciate line items to arrive at actual cash value and both add
        an overhead-and-profit section for the general contractor&rsquo;s management of
        the repair. The recurring problems are the same on either platform: a single flat
        depreciation rate applied to every item regardless of age and condition, or
        overhead and profit stripped out on the argument that no general contractor is
        needed. A reader who has learned to check whether depreciation varies by item and
        whether overhead and profit appears in the summary, as described in the{' '}
        <Link href="/resources/xactimate-line-items" className="text-[#2E74B5] hover:underline">
          line-by-line reading guide
        </Link>
        , applies the identical check to a Symbility summary.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Where the Two Platforms Differ for a Reader
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Having established that the disputes are identical, it helps to be specific about
        the ways the two platforms genuinely differ for someone reading a printout. These
        differences do not change what the estimate means; they change where a reader has
        to look, and a contractor or even a Public Adjuster fluent in one platform can
        miss things on the other simply out of habit.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Terminology and Labels
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The two platforms do not always use the same words for the same thing. Column
        headings, the label for the pricing database, the way an operation is named, and
        the headings on the summary page can all read differently. A reader accustomed to
        Xactimate&rsquo;s selector codes and abbreviations will find Symbility describing
        the same work in its own vocabulary. The safest approach is to read for the
        underlying concept &mdash; what work is described, in what quantity, at what unit
        cost, with what depreciation &mdash; rather than searching for a specific label
        that may not appear.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Where the Price-List or Database Date Appears
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        On an Xactimate estimate, the price-list code sits near the header and encodes the
        region, version, and month. On a Symbility estimate, the equivalent information
        &mdash; which regional pricing database and which time period the estimate was
        priced against &mdash; may appear in a different place on the document and under a
        different label. It is worth locating this before anything else, because on both
        platforms it silently controls every price in the file. If it is not obvious on
        the printout, it is a reasonable thing to ask the carrier to identify in writing.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        How Operations and Line-Item Detail Are Presented
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Xactimate leans on short selector codes paired with a description; the operation
        (remove and replace, reinstall, detach and reset) is often carried in the code
        and abbreviation. Symbility tends to present the work with the operation stated in
        the line-item description itself. Neither is more or less complete &mdash; but a
        reader scanning a Symbility estimate for an Xactimate-style code will not find it,
        and may need to read the description text more carefully to see which operation
        was actually selected. The same is true for the granularity of the line items:
        the two platforms can group and subtotal work differently, so totals that a reader
        expects to find in one location may be aggregated somewhere else.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Reading the Sketch and Dimensions
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Both platforms produce a sketch, but they render it differently, and the way
        dimensions and derived areas are labeled and displayed is not identical. The task
        for the reader is unchanged: confirm that each room&rsquo;s length, width, and
        ceiling height match reality, and confirm that the areas and perimeters the
        estimate used were derived from correct dimensions. A reader should not assume the
        Symbility sketch is right simply because it looks polished, any more than they
        would assume it of an Xactimate sketch.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Underlying File
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        On the Xactimate side, the native project file is the ESX file, and there is a
        strong practical case for requesting it, because it carries every underlying
        setting the printout may not show &mdash; the price-list date, the sketch data,
        and the pricing parameters. That case is developed in{' '}
        <Link href="/resources/esx-file-rights-xactimate" className="text-[#2E74B5] hover:underline">
          Your Right to the ESX File
        </Link>
        . Symbility uses its own native file format rather than an ESX file, but the
        underlying principle does not depend on the software: the printout is a
        presentation of the estimate, and the native file (whatever the platform calls
        it) contains the full underlying data. Whether the estimate is written in
        Xactimate or Symbility, a policyholder can reasonably ask the carrier for the
        complete underlying estimate file, not merely the printed summary, so that the
        settings behind the numbers can be examined.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why It Still Matters the Same Amount
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        None of the underpayment mechanisms this site documents are unique to Xactimate.
        A stale price list understates every line on either platform. Stripped labor
        minimums leave a small multi-trade repair underpriced on either platform. A
        detach-and-reset operation substituted for a remove-and-replace saves the carrier
        the same money on either platform. An undersized sketch reduces quantities on
        either platform. The software did not create any of these problems, and switching
        software does not solve them &mdash; they are functions of how an estimate is
        built and reviewed, not of which brand of estimating tool was used to build it.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The point worth holding onto is that the platform choice does not change the
        carrier&rsquo;s obligations in the slightest. The carrier&rsquo;s duty is to pay
        the cost of restoring the property, measured by accepted trade standards and local
        market costs. That duty attaches to the estimate, whatever software produced it.
        A policyholder who is thrown off by unfamiliar software may hesitate to question a
        Symbility estimate that they would have questioned in Xactimate &mdash; and that
        hesitation is the only advantage the different layout offers. Removing it is the
        entire purpose of this article.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What California&rsquo;s Regulations Say &mdash; Regardless of Platform
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Two features of California&rsquo;s Fair Claims Settlement Practices Regulations,
        and one provision of the Insurance Code, apply to a claim estimate without regard
        to which software generated it.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Estimate Standard: 10 CCR &sect;2695.9(d)
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Under 10 CCR &sect;2695.9(d), an estimate prepared by or for the insurer must be
        of an amount that will restore the damaged property to no less than its condition
        before the loss, in accordance with accepted trade standards for good and
        workmanlike construction. That is one requirement. Separately, the same subsection
        requires the insurer to take reasonable steps to verify that the repair or
        replacement costs it relies on are accurate and representative of the costs in the
        local market area. These are two distinct duties: one about the completeness and
        quality of the scope, the other about the accuracy of the underlying costs.
        Neither duty is satisfied or excused by the choice of estimating platform. A
        regional pricing database is a starting point on either Symbility or Xactimate;
        the obligation to verify that the costs reflect the local market rests with the
        insurer either way.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The same subsection also provides a specific pathway when the policyholder holds a
        competing figure. If an insured submits a written estimate of their own showing
        that necessary repairs will exceed the insurer&rsquo;s estimate, &sect;2695.9(d)
        obligates the insurer to do one of three things: pay the difference between the two
        estimates; if requested, identify a repair contractor who will make the repairs
        for the amount of the insurer&rsquo;s estimate; or reasonably adjust the estimate
        prepared by the insured&rsquo;s contractor. That three-option pathway is triggered
        by the insured&rsquo;s competing written estimate, not by a bare demand, and it
        operates the same way whether the insurer&rsquo;s estimate was written in
        Symbility or Xactimate.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        No Deflecting to the Software: 10 CCR &sect;2695.1(g)
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Carriers sometimes respond to an estimate challenge by pointing at the software
        &mdash; the number is what the platform produced. Under 10 CCR &sect;2695.1(g),
        an insurer&rsquo;s reliance on the tools it uses and the third parties it hires
        does not absolve the insurer of responsibility for compliance with the
        regulations. That principle is platform-neutral by design. Whether the estimate
        came out of Symbility or Xactimate, responsibility for the estimate stays with the
        insurer, not with the vendor whose software generated the numbers.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Underlying File as a Claim Document: Insurance Code &sect;2071
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        California Insurance Code &sect;2071 sets out the standard-form fire policy, which
        provides that the insurer must, on a request of the insured, deliver copies of the
        claim-related documents within 15 calendar days. The estimate is such a document,
        and where a native underlying estimate file exists, the practical view is that it
        is part of the same claim-related record. This is the same principle discussed for
        the ESX file, and it does not turn on the software: whether the file is an
        Xactimate ESX file or a Symbility native file, it is a document generated in the
        handling of the claim. As a matter of practice advice rather than legal advice, a
        request for it &mdash; and indeed any request under this provision &mdash; is best
        made in writing, so that the date of the request and the scope of what was asked
        for are documented in the claim file.
      </p>

      <CalloutBox variant="warning" title="A Realistic Expectation">
        <p>
          Citing these provisions in a written request does not produce an instant check,
          and no reader should expect it to. What a specific, documented challenge
          realistically produces is a second look &mdash; a re-review of the estimate, a
          corrected estimate on re-review, or a written explanation the policyholder can
          keep in the file. On either platform, getting the carrier to look again, on the
          record, is the achievable outcome, and a corrected estimate is the version of
          &ldquo;winning&rdquo; that actually shows up in practice.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Practical Takeaway: Don&rsquo;t Let the Software Throw You
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        A reader who spent time learning to read an Xactimate estimate and then received a
        Symbility estimate has not wasted that time. The concepts transfer almost
        entirely; only the map of where to find them changes. The realistic goal is the
        same one it always is: not to win an argument about software, but to get a
        corrected estimate on re-review when the numbers do not reflect the real cost of
        the repair. A stale database date, a stripped labor minimum, a downgraded
        operation, an undersized sketch &mdash; each of these is worth the same written
        question on a Symbility estimate that it would be worth on an Xactimate estimate,
        because the carrier&rsquo;s obligation to pay the cost of restoring the property
        does not depend on which program it used to add up the numbers.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The estimate is worth reading closely no matter what software produced it. The
        unfamiliar layout is not a reason to trust the numbers more &mdash; and it is
        certainly not a reason to trust them less than one would trust an Xactimate
        estimate. It is simply a different presentation of the same work, priced against
        the same kind of database, subject to the same disputes and the same regulations.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Frequently Asked Questions
      </h2>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        What is the difference between Symbility and Xactimate?
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Both are property-claim estimating platforms that do the same core job: they price
        a repair against a regional cost database using line items, a sketch that drives
        quantities, depreciation, and overhead and profit. Xactimate, a Verisk product,
        is the dominant platform in the industry; Symbility, associated with CoreLogic, is
        used by a minority of carriers. The substantive difference for a policyholder is
        small &mdash; the layout, the terminology, and where each setting appears on the
        printout differ, but the underlying method, and the ways an estimate can underpay,
        are the same on both.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        My estimate says Symbility &mdash; is that a problem?
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        No. A carrier is not required to use Xactimate, and a Symbility estimate is a
        normal, legitimate estimate. The reason it does not match the Xactimate examples a
        reader may have studied is simply that it was written on a different platform. The
        same review steps apply: check the pricing database and its date, verify the sketch
        dimensions against the actual rooms, confirm labor minimums and overhead and profit
        are present, and check that each operation matches what the repair requires.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Does a Symbility estimate get reviewed differently than an Xactimate estimate?
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The review approach is the same because the disputes are the same. A stale price
        list, stripped labor minimums, a substituted operation, or an undersized sketch can
        occur on either platform, and each is challenged the same way &mdash; by
        identifying the specific issue and asking the carrier, in writing, to explain or
        correct it. The only adjustment is practical: a reviewer has to locate the same
        information in Symbility&rsquo;s layout rather than Xactimate&rsquo;s.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Can I get the underlying file for a Symbility estimate?
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The same request-the-underlying-file principle that applies to an Xactimate ESX
        file applies to a Symbility estimate, which has its own native file format. The
        printout is a presentation; the native file carries the full underlying data,
        including the pricing parameters and the sketch. A policyholder can reasonably
        request the complete underlying estimate file from the carrier, ideally in writing.
        Under California Insurance Code &sect;2071, claim-related documents are to be
        provided on a request within 15 calendar days.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Which platform produces a more accurate estimate?
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Neither platform is inherently more or less accurate. Accuracy depends on the
        inputs &mdash; the scope the estimator entered, the pricing database and date
        selected, the sketch dimensions, and what the review process did or did not remove.
        A carefully built estimate is accurate on either platform, and a thin one is
        inaccurate on either platform. The software is a tool; the accuracy comes from how
        it is used and reviewed, which is exactly why the carrier&rsquo;s obligations do
        not change with the platform.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Bottom Line
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Xactimate dominates the property-claims industry, but it is not the only
        estimating platform, and a policyholder who receives a Symbility estimate has not
        received anything defective &mdash; only something unfamiliar. Both platforms
        price a repair against a regional database using line items, a sketch, depreciation,
        overhead and profit, and waste factors, so every substantive dispute that applies
        to an Xactimate estimate applies equally to a Symbility estimate. Only the layout
        and the labels differ. A reader who knows what to look for, and does not let a
        different dashboard shake their confidence, is in the same position on either
        platform.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        A policyholder facing a contested estimate on a significant claim &mdash; on either
        platform &mdash; might consider consulting a licensed Public Adjuster to review the
        estimate line by line, or a licensed California attorney for legal questions about
        the carrier&rsquo;s obligations. For the underlying concepts that apply regardless
        of software, see{' '}
        <Link href="/resources/xactimate-line-items" className="text-[#2E74B5] hover:underline">
          How to Read an Xactimate Estimate Line by Line
        </Link>
        ,{' '}
        <Link href="/resources/xactimate-price-list-dates" className="text-[#2E74B5] hover:underline">
          Xactimate Price List Dates
        </Link>
        ,{' '}
        <Link href="/resources/xactimate-labor-minimums" className="text-[#2E74B5] hover:underline">
          Xactimate Labor Minimums
        </Link>
        ,{' '}
        <Link href="/resources/detach-and-reset" className="text-[#2E74B5] hover:underline">
          Detach and Reset
        </Link>
        , and{' '}
        <Link href="/resources/xactimate-sketch-errors" className="text-[#2E74B5] hover:underline">
          Xactimate Sketch Errors
        </Link>
        .
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
