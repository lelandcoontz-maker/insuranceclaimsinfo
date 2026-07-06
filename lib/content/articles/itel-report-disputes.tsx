import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: "ITEL Reports: When a Lab Sample Decides Your Flooring or Siding Claim",
  description:
    "How carriers use ITEL lab reports to price flooring and siding claims, where the reports get misused, and how policyholders can challenge a bad comparable.",
  summary:
    'ITEL analyzes a physical sample and names a comparable product. Carriers then treat that report as the last word on pricing and matching. It is not — the report identifies a product; it does not apply California\'s matching standard. A specific written challenge with physical evidence often changes the outcome.',
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
        <em>A guide for policyholders, Public Adjusters, and attorneys on the lab report
        that quietly controls flooring and siding claims &mdash; what an ITEL report
        actually determines, what carriers use it for instead, and how to challenge a
        &quot;comparable&quot; that does not hold up next to the real material.</em>
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Somewhere in the file of many flooring and siding claims sits a document the
        policyholder has usually never seen: a laboratory report from ITEL Laboratories.
        An adjuster cut a small piece of carpet, vinyl, laminate, hardwood, or siding
        during the inspection, mailed it to the lab, and received back a report
        identifying the product and stating whether a matching or comparable product is
        available &mdash; and at what price. From that point forward, the carrier&apos;s
        estimate is anchored to that report. The flooring allowance is the report&apos;s
        price. The answer to &quot;does a match exist?&quot; is the report&apos;s answer.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        For many claims, that process works fine. The lab identifies the product
        correctly, a genuine equivalent exists, and the estimate prices it fairly. But
        when the process goes wrong &mdash; when the named &quot;comparable&quot; is a
        visibly different product, when the original material is discontinued and the
        report reaches into a different manufacturer&apos;s line, when the sample came
        from the wrong room &mdash; the error propagates into every square foot of the
        estimate. And because the report carries the authority of a laboratory, adjusters
        tend to treat it as unchallengeable.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        It is not unchallengeable. This article explains what the report is, what it
        actually determines, where disputes arise, and how a policyholder can put the
        real materials back at the center of the conversation.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What an ITEL Report Is and How It Enters a Claim
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        ITEL Laboratories is an independent testing lab used widely across the insurance
        industry to identify building materials from physical samples. It is worth
        saying plainly at the outset: ITEL is a lab. It analyzes what it is sent and
        reports what it finds. The problems described in this article are almost never
        problems with the laboratory analysis itself &mdash; they are problems with what
        gets sent, what gets asked, and what the report gets used for afterward.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step One: The Sample Is Cut
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        During the inspection, the field adjuster cuts a physical sample of the damaged
        material &mdash; a square of carpet and pad, a piece of vinyl or laminate plank,
        a section of hardwood, a panel of siding. The sample is packaged with a
        submission form describing the loss and the material, and mailed to the lab.
        Policyholders are frequently unaware this has happened. The cut is often taken
        from a closet, under an appliance, or from an already-damaged section, and the
        adjuster may not mention that a piece of the home is leaving the property to be
        analyzed.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step Two: The Lab Identifies the Product
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The lab examines the sample&apos;s physical characteristics &mdash; fiber type
        and face weight for carpet, wear layer and construction for vinyl and laminate,
        species and dimensions for hardwood, profile and material for siding &mdash; and
        identifies the product as closely as the sample allows. The report typically
        states what the material is, whether the same or a comparable product is
        available in the market, and a unit price for replacement.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step Three: The Report Becomes the Estimate
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The desk adjuster receives the report and prices the flooring or siding line
        items in the estimate to the report&apos;s stated comparable and unit price.
        From the carrier&apos;s perspective, the question is now closed. If the
        policyholder&apos;s contractor quotes a higher price, the response is &quot;the
        ITEL report says the comparable is available at this price.&quot; If the
        policyholder says nothing matches the existing floor, the response is &quot;the
        ITEL report identified a match.&quot; The lab report, produced from a small
        physical sample by someone who never saw the property, has become the last word
        on both pricing and matching.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        That is the moment the report gets stretched beyond what it actually is &mdash;
        and understanding the gap between what the report determines and what it gets
        used for is the key to every ITEL dispute.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What the Report Determines vs. What It Gets Used For
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        An ITEL report answers a narrow question well: <em>what is this material, and
        what products in the current market are physically similar to it?</em> That is a
        product-identification question, and a laboratory with a physical sample is a
        reasonable way to answer it.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        But carriers routinely use the report to answer two much larger questions that
        the lab was never asked and is in no position to answer:
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Whether the proposed replacement satisfies the policy&apos;s
          like-kind-and-quality obligation</strong> &mdash; a judgment about the specific
          policy language and the specific installed material, in context.
        </li>
        <li>
          <strong>Whether a &quot;match&quot; exists for purposes of California&apos;s
          matching regulation</strong> &mdash; a legal and regulatory judgment about
          uniform appearance in the damaged area, not a laboratory finding.
        </li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        The lab never inspects the loss. It never sees the rooms. It does not know
        whether the flooring runs continuously through four rooms or stops at a
        doorway. It does not see how the existing material has aged and weathered in
        place, or how the proposed comparable will look installed next to it. It
        analyzes a cut sample under controlled conditions and reports physical
        similarity. Everything beyond that &mdash; whether the replacement produces an
        acceptable result in the actual home &mdash; is a judgment someone else is
        making and attributing to the lab.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        In California, that judgment has a regulatory standard attached to it.
        Under <strong>10 CCR &sect;&nbsp;2695.9(a)(2)</strong>, when replaced items do
        not match what remains, the insurer is required to replace items in the damaged
        area so as to achieve a reasonably uniform appearance:
      </p>

      <CalloutBox variant="legal" title="10 CCR §2695.9(a)(2)">
        <p className="italic">
          When a loss requires replacement of items and the replaced items do not match in
          quality, color or size, the insurer shall replace all items in the damaged area so
          as to conform to a reasonably uniform appearance.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        Notice what the regulation asks: whether the replacement conforms to a
        reasonably uniform appearance in the damaged area. That is a question about the
        installed result in the home &mdash; the thing the lab, by definition, cannot
        see. A report stating that a &quot;comparable&quot; product exists is an input
        to the matching analysis, not the analysis itself. An adjuster who treats the
        ITEL report as having resolved the matching question has substituted a
        product-identification finding for a regulatory standard the lab was never
        asked to apply. For the full framework &mdash; what the regulation requires, how
        the &quot;damaged area&quot; language gets contested, and how depreciation
        interacts with compelled matching replacements &mdash; see the companion
        article on{' '}
        <Link href="/resources/matching" className="text-[#2E74B5] underline">
          California&apos;s matching requirement
        </Link>
        .
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Where ITEL Disputes Arise
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        ITEL disputes follow recognizable patterns. Four of them account for most of
        the contested claims.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        1. The &quot;Comparable&quot; That Is Not Comparable
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The report names a replacement product described as comparable to the sampled
        material. On paper, the specifications look close. In hand, the products are
        visibly and functionally different:
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Wear layer:</strong> A luxury vinyl plank with a thinner wear layer
          than the original is not the same product &mdash; wear layer is the single
          biggest driver of vinyl flooring durability and price, and a lower-wear-layer
          &quot;comparable&quot; is a downgrade even if the color is similar.
        </li>
        <li>
          <strong>Thickness and construction:</strong> Laminate and engineered hardwood
          vary in core thickness, plank dimension, and construction quality. A thinner
          product may not even install flush against existing flooring at transitions.
        </li>
        <li>
          <strong>Texture and finish:</strong> Hand-scraped versus smooth, embossed-in-register
          versus flat printing, high-gloss versus matte &mdash; texture differences
          that specifications do not capture are immediately visible on an installed
          floor.
        </li>
        <li>
          <strong>Grade and line:</strong> A builder-grade product from a
          manufacturer&apos;s entry line is not comparable to a premium line simply
          because both are &quot;oak-look laminate.&quot; Grade differences show up in
          appearance, durability, and warranty.
        </li>
        <li>
          <strong>Carpet construction:</strong> Face weight, fiber type, twist level,
          and pile height all affect how carpet looks and wears. Two carpets with the
          same color name can be very different products.
        </li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        When the comparable is genuinely inferior, the estimate underprices every unit
        of the flooring or siding scope. On a whole-house flooring replacement or a
        full siding elevation, the gap between a builder-grade comparable and the
        actual installed product can be a five-figure difference.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        2. Discontinued Products and the Cross-Line &quot;Match&quot;
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        This is the highest-stakes pattern, and it appears constantly in siding claims.
        The original product &mdash; a specific vinyl siding profile, a discontinued
        laminate line, a carpet style the mill stopped running &mdash; no longer
        exists. Rather than reporting that no match is available, the report names a
        product from a different manufacturer or a different line as the closest
        available comparable.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        For pure product identification, that is a reasonable answer: the lab was asked
        what is closest, and it answered. But watch what happens next. The carrier
        reads &quot;closest available comparable&quot; as &quot;a match exists,&quot;
        prices the damaged section only, and closes the file. The policyholder installs
        the comparable next to the existing siding and the two products do not match
        &mdash; different profile depth, different sheen, different weathered color. The
        discontinuation question that should have triggered the matching analysis under
        10 CCR &sect;&nbsp;2695.9(a)(2) was silently answered by a lab report that
        never claimed to be answering it.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The distinction that matters: <em>closest available</em> is not the same
        as <em>reasonably uniform in appearance when installed next to what remains</em>.
        The first is a lab finding. The second is the California standard. A
        discontinued product with a cross-line &quot;comparable&quot; is often exactly
        the situation where the matching regulation requires replacement beyond the
        directly damaged section &mdash; and the aging of the existing material makes
        this worse, not better, because even a physically identical new product will
        not match material that has weathered in place for a decade. That aging
        problem has its own treatment in{' '}
        <Link href="/resources/color-matching-material-aging" className="text-[#2E74B5] underline">
          Why New Materials Never Match
        </Link>
        .
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        3. Sample Problems: Wrong Area, Wrong Layer, Too Small
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The lab can only analyze what it receives. If the sample itself is flawed, the
        report inherits the flaw:
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Cut from the wrong area.</strong> Homes frequently have more than one
          flooring product &mdash; a different carpet in the bedrooms than the hallway,
          an upgraded plank in the main living area, an older product in a closet. A
          sample cut from a closet remnant or a secondary room may identify a product
          the damaged rooms do not actually contain.
        </li>
        <li>
          <strong>Cut from a degraded section.</strong> A sample taken from a
          water-damaged, sun-bleached, or heavily worn section may read as a lower-grade
          product than what was actually installed.
        </li>
        <li>
          <strong>Too small or incomplete.</strong> Product identification depends on
          the sample capturing the material&apos;s full construction &mdash; carpet
          without its pad, a plank fragment without a full-width profile, siding without
          an intact edge can all limit what the lab can determine, and reports commonly
          note those limitations.
        </li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        A policyholder who knows what was actually installed &mdash; from purchase
        records, leftover attic stock, or the room the sample supposedly came from
        &mdash; is in a strong position to challenge a report built on a bad sample.
        But that requires seeing the report and the submission form, which leads to the
        next pattern.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        4. The Insured Never Sees the Report
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        In a large share of disputed claims, the policyholder was never told a sample
        was taken and never shown the report. The estimate simply arrives with a
        flooring allowance, and only when the policyholder&apos;s contractor asks how
        the number was derived does the adjuster mention that &quot;ITEL priced
        it.&quot; The report itself &mdash; what was sampled, what the lab actually
        said, what caveats it stated &mdash; stays in the carrier&apos;s file.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        A dispute cannot be evaluated, let alone won, against a document nobody has
        seen. Getting the actual report is the first move in every ITEL dispute, and
        California gives policyholders a specific tool for it.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The ITEL Report Is a Claim Document &mdash; and the Insured Can Ask for It
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        The ITEL report and the sample submission form are documents the carrier
        obtained in the course of adjusting the claim. The carrier ordered the
        analysis, received the report, and relied on it to value the loss &mdash; so
        the carrier holds it, and it is fairly characterized as a claim-related
        document.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        California&apos;s standard form fire policy, codified at{' '}
        <strong>Insurance Code &sect;&nbsp;2071</strong>, contains a production duty
        that reaches documents like this: upon request, the insurer is required to
        provide the insured with copies of claim-related documents within 15 calendar
        days. The
        provision has contours &mdash; it appears in the standard form policy and
        addresses documents relating to the claim evaluation &mdash; but a lab report
        the carrier commissioned and used to price the estimate sits comfortably within
        any reasonable reading of it. A written request that specifically names
        &quot;the ITEL report, the sample submission form, and any related
        correspondence&quot; is difficult for a carrier to refuse. For the broader
        framework on obtaining the carrier&apos;s claim file materials, see{' '}
        <Link href="/resources/cdi-right-to-claim-documents" className="text-[#2E74B5] underline">
          the right to claim documents
        </Link>
        .
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Reading the actual report is frequently revealing, for a reason that has
        nothing to do with the lab and everything to do with the game of telephone
        between the report and the estimate. Lab reports tend to be carefully worded.
        They may describe a product as the <em>closest available</em> comparable, note
        that the sample limited the analysis, identify the product only to a category
        or grade rather than an exact line, or state availability in qualified terms.
        By the time that language reaches the policyholder through the adjuster, it has
        often hardened into &quot;ITEL found an exact match.&quot; Comparing what the
        report actually says against how the adjuster characterized it is one of the
        most reliable sources of leverage in these disputes &mdash; and it requires
        nothing more than the document the insured is entitled to request.
      </p>

      <CalloutBox variant="important" title="Request the Report Before Arguing About It">
        <p>
          An insured disputing a flooring or siding allowance without having seen the
          ITEL report is arguing blind. The report, the submission form, and any photos
          of the sample are claim-related documents the insured may request in writing
          under Insurance Code &sect;&nbsp;2071. What the report actually says is often
          more hedged &mdash; and more useful &mdash; than the adjuster&apos;s summary
          of it.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Challenging the Comparable
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Once the report is in hand, a challenge to a bad comparable is an evidence
        exercise. The goal is to move the dispute off the page &mdash; where two
        product names and two unit prices look interchangeable &mdash; and onto
        physical reality, where the differences are visible.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Side-by-Side Physical Samples
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The single most effective piece of evidence is a physical sample of the
        proposed comparable placed next to the existing material. Flooring retailers
        provide samples of current products routinely; the report names the comparable,
        so obtaining a sample of it is straightforward. Photographed together in the
        same lighting &mdash; and better yet, presented together at a re-inspection
        &mdash; the two products either look alike or they do not. Specification-sheet
        arguments about wear layer and face weight matter, but nothing settles a
        &quot;comparable&quot; dispute like the two materials sitting next to each
        other.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Flooring Vendor&apos;s Written Opinion
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        A written statement from the insured&apos;s flooring vendor or installer
        carries real weight: identification of the existing product (vendors often
        recognize products the lab could only categorize), an itemized comparison of
        the proposed comparable&apos;s specifications against the existing material,
        and a price for what an actual equivalent product costs installed in that
        market. This converts the dispute from &quot;the homeowner disagrees with a
        lab&quot; into &quot;two knowledgeable sources disagree about a product
        comparison&quot; &mdash; a very different posture.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Photographs in Installed Context
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Photographs of the existing material as installed &mdash; the continuous
        flooring run through connected rooms, the full siding elevation, the transition
        points where any mismatch will be visible &mdash; document what the lab never
        saw: the context in which the replacement has to perform. These photographs are
        the bridge between the product-identification question the report answered and
        the uniform-appearance question California law actually asks.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Regulation Behind the Challenge: &sect;&nbsp;2695.1(g)
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Carriers sometimes respond to a comparable challenge with a shrug: <em>ITEL is
        an independent lab; take it up with them.</em> California&apos;s fair claims
        regulations foreclose that move. Under <strong>10 CCR
        &sect;&nbsp;2695.1(g)</strong>, an insurer&apos;s reliance on a third-party
        source does not absolve the insurer of responsibility for the claim valuation.
        The carrier chose to commission the analysis, chose to adopt its comparable,
        and remains responsible for whether the resulting valuation is right. The lab
        answered the question it was asked; the insurer owns what it did with the
        answer. A written challenge might reasonably cite this provision when a carrier
        attempts to position the report as someone else&apos;s problem.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Independent-Sample Option
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Nothing prevents an insured from obtaining their own product identification.
        The insured owns the damaged material; a retained sample can be identified by a
        flooring vendor, an installer, a manufacturer&apos;s representative, or an
        independent lab of the insured&apos;s choosing. An insured who anticipates a
        dispute might reasonably retain their own cut of the damaged material &mdash;
        clearly labeled by room and photographed in place before removal &mdash;
        especially before mitigation contractors haul the flooring away.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        When the insured&apos;s identification disagrees with the carrier&apos;s
        report, that is not a stalemate &mdash; it is a genuine valuation dispute
        between qualified sources, which is exactly what the policy&apos;s dispute
        mechanisms exist to resolve. Whether the disagreement is about what the product
        is, whether a match exists, or only about the unit price affects which path
        fits: a dispute about the identity or scope of replacement is framed
        differently from a dispute about price alone, a distinction covered in{' '}
        <Link href="/resources/scope-vs-price-disputes" className="text-[#2E74B5] underline">
          scope versus price disputes
        </Link>
        . Where the disagreement reduces to the amount of the loss,{' '}
        <Link href="/resources/appraisal" className="text-[#2E74B5] underline">
          appraisal
        </Link>{' '}
        provides a structured process in which each side&apos;s product evidence is
        weighed by appraisers and, if necessary, an umpire &mdash; rather than by the
        adjuster who commissioned the original report.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What a Successful Challenge Looks Like
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Realistic expectations matter here. The win in an ITEL dispute is rarely a
        carrier admitting error in writing. The win is a <strong>re-evaluation with the
        actual materials in front of everyone</strong> &mdash; a re-inspection or desk
        review where the existing material, the proposed comparable, the vendor&apos;s
        letter, and the installed-context photographs are all in the file and cannot be
        answered by pointing back at the original report.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Faced with a specific written challenge supported by physical evidence,
        carriers commonly respond in one of several ways, all of which move the claim:
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>A corrected comparable</strong> &mdash; the estimate is re-priced to a
          product that actually corresponds to the existing material&apos;s grade and
          construction.
        </li>
        <li>
          <strong>An allowance adjustment</strong> &mdash; the unit price is raised to
          the vendor&apos;s documented installed cost without relitigating the product
          identification.
        </li>
        <li>
          <strong>A resample</strong> &mdash; a new sample is cut from the correct area,
          with the insured present and photographing the process.
        </li>
        <li>
          <strong>A matching-scope concession</strong> &mdash; where the product is
          discontinued, the scope expands to the continuous area or elevation so the
          result conforms to a reasonably uniform appearance.
        </li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        None of these outcomes tends to happen in response to a phone call saying the
        flooring number is too low. They happen when the challenge is written, specific
        &mdash; naming the report, quoting its actual language, identifying the
        specification differences line by line &mdash; and accompanied by evidence the
        reviewing adjuster can see. The pattern is systemic rather than personal: an
        estimate anchored to a document will stay anchored to that document until a
        better-documented position displaces it.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Frequently Asked Questions
      </h2>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Is the insured required to accept the product the ITEL report names?
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        No policy provision makes a lab report binding on the insured. The report is
        evidence the carrier relies on for its valuation &mdash; and evidence can be
        met with better evidence. An insured who can show the named comparable differs
        from the existing material in wear layer, thickness, texture, or grade, or that
        it will not produce a reasonably uniform appearance installed next to what
        remains, has grounds to challenge the valuation. Under 10 CCR
        &sect;&nbsp;2695.1(g), the insurer&apos;s reliance on a third-party source does
        not absolve it of responsibility for that valuation.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Can the insured get a copy of the ITEL report?
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Yes &mdash; the report and the sample submission form are claim-related
        documents in the carrier&apos;s possession, and Insurance Code
        &sect;&nbsp;2071&apos;s standard form language requires the insurer to provide
        copies of claim-related documents within 15 calendar days of a request. The request
        should be in writing and should name the documents specifically. What the
        report actually says is often more qualified than the adjuster&apos;s
        description of it.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        What if the original flooring or siding is discontinued?
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Discontinuation is where ITEL reports and California&apos;s matching regulation
        collide. A report naming the &quot;closest available&quot; product from a
        different manufacturer line has answered a product-identification question
        &mdash; it has not established that the replacement will conform to a
        reasonably uniform appearance in the damaged area, which is what 10 CCR
        &sect;&nbsp;2695.9(a)(2) requires. Where no true match exists, the regulation
        may require replacing beyond the directly damaged section. The full analysis is
        in the{' '}
        <Link href="/resources/matching" className="text-[#2E74B5] underline">
          matching article
        </Link>
        .
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The adjuster cut a sample without telling anyone. Is that a problem?
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        It is common, and by itself it is usually a transparency problem rather than a
        fatal one. What matters is what follows: the insured can request the report and
        submission form, verify the sample came from the correct room and the correct
        product, and retain their own sample of the damaged material for independent
        identification. If the sample was cut from a room with a different product than
        the damaged areas, that is a concrete, documentable basis to reject the
        report&apos;s conclusions and request a resample.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Does a disagreement with the ITEL comparable go to appraisal?
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Often, yes &mdash; if the dispute reduces to the amount of the loss, such as
        the unit price of a genuinely equivalent product or the cost of the scope
        needed to achieve uniformity, it fits the{' '}
        <Link href="/resources/appraisal" className="text-[#2E74B5] underline">
          appraisal
        </Link>{' '}
        process, where each side&apos;s product evidence is evaluated by the panel.
        Disputes that are really about what the policy covers or what the regulation
        requires are framed differently; the distinction is covered in{' '}
        <Link href="/resources/scope-vs-price-disputes" className="text-[#2E74B5] underline">
          scope versus price disputes
        </Link>
        . In practice, many ITEL disputes resolve before appraisal once the physical
        evidence is in the file.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Bigger Picture
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        An ITEL report is a useful tool doing a narrow job: identifying a material from
        a physical sample. The systemic problem is altitude &mdash; a
        product-identification finding gets promoted, somewhere between the lab and the
        estimate, into the final answer on like-kind-and-quality pricing and on whether
        California&apos;s matching standard is satisfied. The lab never claimed either
        of those authorities. The report never saw the house.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Policyholders who understand that gap hold the advantage. The report can be
        requested and read against the adjuster&apos;s characterization of it. The
        comparable can be obtained as a physical sample and set next to the real
        material. The vendor who actually sells and installs these products can put a
        contrary opinion in writing. And where the disagreement survives all of that,
        the dispute-resolution machinery of the policy exists precisely to weigh one
        qualified source against another. A small square of carpet in a lab does not
        have to be the last word on a claim &mdash; it is the first word, and the
        insured is allowed to answer it.
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
