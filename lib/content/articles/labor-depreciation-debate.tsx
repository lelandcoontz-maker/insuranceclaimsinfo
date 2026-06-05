import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Labor Depreciation: Can Labor "Wear Out"? California Says No — By Regulation',
  description:
    'A comprehensive analysis of labor depreciation in insurance claims. Can a service physically deteriorate? In California the question is closed: 10 CCR §2695.9(f)(1) prohibits labor depreciation in property claims. The statutory ACV framework is at Cal. Ins. Code §2051(b). Learn the California rule, the out-of-state case law, and how to challenge labor depreciation on your claim.',
  summary:
    'Can a service physically wear out? In California, the Fair Claims regulation (10 CCR §2695.9(f)(1)) prohibits depreciating labor in property claims. The only narrow exception is intrinsic labor in manufactured materials. The statutory ACV framework is at Cal. Ins. Code §2051(b). Challenge labor depreciation on every California claim where it appears.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational commentary on California labor depreciation rules by a
          Licensed California Public Adjuster. It is not legal advice. California&rsquo;s ACV
          framework is statutory (Cal. Ins. Code &sect; 2051(b)) and regulatory (10 CCR
          &sect; 2695.9(f)). For legal questions, consult a licensed California attorney.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance companies routinely apply depreciation to the labor portion of repair estimates,
        reducing policyholder payments by thousands of dollars. The practice rests on a premise
        that deserves scrutiny: that the act of installing a roof shingle, hanging drywall, or
        wiring an electrical panel somehow &ldquo;wears out&rdquo; over time, just like the
        materials themselves. A growing number of courts and regulators across the country have
        examined that premise and found it to be exactly what common sense suggests &mdash;
        a logical impossibility. In California, the question has been definitively resolved by
        the legislature: depreciating labor is prohibited by both statute and regulation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This article examines labor depreciation in depth: the fundamental question of whether
        services can depreciate, California&apos;s statutory and regulatory prohibition, the
        out-of-state case law that converged on the same answer, the industry arguments for and
        against, the real-dollar impact on policyholders, how Xactimate handles labor
        depreciation behind the scenes, and what an insured can do to challenge it.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Fundamental Question: Can a Service Physically Deteriorate?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Depreciation, in the insurance context, is supposed to reflect the loss of value that
        occurs as physical property ages, wears, and deteriorates. A 20-year-old composition
        shingle has less remaining useful life than a new one. Its granules have eroded, its
        flexibility has decreased, and its ability to shed water has diminished. Depreciating
        the shingle makes sense &mdash; you are accounting for the physical condition of a
        tangible object that has degraded over time.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        But what about the labor required to install that shingle? The roofer&apos;s work &mdash;
        climbing the ladder, positioning the shingle, driving the nails &mdash; is a service
        performed at a point in time. It does not sit on the roof aging alongside the shingle.
        It does not erode, crack, or lose flexibility. The service was performed, it was consumed
        at the moment of installation, and it ceased to exist as a distinct thing. There is no
        &ldquo;used&rdquo; version of roofing labor that a policyholder can purchase at a
        discount. When the shingle needs to be replaced 20 years later, the roofer does not
        offer a &ldquo;depreciated&rdquo; labor rate that reflects the age of the old shingle.
        The labor cost is the labor cost, period.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is not a novel or controversial observation. It is a straightforward application
        of the definition of depreciation itself. The word &ldquo;depreciation&rdquo; means
        a decrease in value due to wear and tear, decay, or decline. Services do not wear.
        Services do not decay. A plumber&apos;s hourly rate does not decline because the pipes
        they installed ten years ago have aged. An electrician does not charge less to rewire a
        circuit just because the old wiring was 30 years old. Labor is consumed at the moment
        it is performed and has no residual physical existence that can deteriorate.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The distinction matters enormously in dollar terms. On a typical property damage claim,
        labor represents 35 to 50 percent of the total repair estimate. When an insurer depreciates
        labor alongside materials, it significantly inflates the depreciation deduction and reduces
        the policyholder&apos;s{' '}
        <Link href="/resources/acv-rcv" className="text-[#2E74B5] underline">
          Actual Cash Value (ACV)
        </Link>{' '}
        payment accordingly.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Logical Argument: Same Labor, Different Shingle
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Consider two identical houses side by side, both damaged in the same hailstorm. Both
        need full roof replacements. Both have the same square footage, the same pitch, and the
        same shingle type specified. The only difference is age: House A has a five-year-old roof,
        and House B has a 25-year-old roof.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The materials will be depreciated differently &mdash; House B&apos;s older shingles have
        consumed more of their useful life, so the material depreciation will be higher. That
        makes sense. But the labor to tear off the old roof and install the new one is identical.
        The same crew, the same number of hours, the same tools, the same process, the same cost.
        The roofer does not charge House A less because the shingles were newer, and the roofer
        does not charge House B more because the shingles were older. The labor cost for both
        houses is exactly the same.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If labor depreciation were logical, the policyholder at House B should be able to walk
        into the marketplace and purchase &ldquo;depreciated labor&rdquo; &mdash; roofing
        installation services at a 50 percent discount because the old roof was 25 years old.
        No such market exists. No contractor offers discounted labor based on the age of the
        materials being replaced. The concept is a fiction that exists only on insurance company
        spreadsheets.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This thought experiment illustrates the core problem with labor depreciation. The
        policyholder&apos;s actual loss &mdash; the amount of money they must spend to hire a
        contractor and restore their property &mdash; includes the full cost of labor regardless
        of the age of the damaged materials. Depreciating labor does not reflect any real-world
        reduction in cost. It simply reduces the insurer&apos;s payment below what the repair
        actually costs.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        States That Have Prohibited Labor Depreciation
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A growing number of states have addressed the labor depreciation question directly,
        through court decisions, regulatory action, or legislation. The trend is clear and
        accelerating: jurisdiction after jurisdiction is concluding that labor cannot be
        depreciated because it does not physically deteriorate.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Arkansas: <em>Adams v. Cameron Mutual Insurance Co.</em>
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Arkansas Supreme Court addressed labor depreciation in <em>Adams v. Cameron Mutual
        Insurance Co.</em>, 430 S.W.3d 675 (Ark. 2013). The policyholder&apos;s home sustained
        hail damage, and Cameron Mutual depreciated both materials and labor when calculating
        the ACV payment. The court examined the policy language, which defined ACV as replacement
        cost less depreciation, and focused on what &ldquo;depreciation&rdquo; means.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The court concluded that depreciation accounts for the physical wear and deterioration
        of tangible property over time. Labor, the court held, is not subject to this kind of
        physical depreciation. The cost of labor does not decrease because the materials being
        replaced are old. The court ruled that Cameron Mutual improperly reduced the
        policyholder&apos;s payment by depreciating the labor component and ordered recalculation
        without labor depreciation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The <em>Adams</em> decision was significant because it was one of the earliest state
        supreme court rulings squarely addressing and prohibiting the practice. It set the stage
        for similar holdings across the country.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Kentucky: <em>Estes v. State Farm Fire &amp; Casualty Co.</em>
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        In <em>Estes v. State Farm Fire &amp; Casualty Co.</em>, the Kentucky court examined
        whether State Farm could depreciate both labor and materials when determining ACV on a
        property damage claim. The policyholder argued that labor is a cost of restoration, not
        a physical component of the damaged property, and therefore cannot depreciate.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The court agreed. It held that depreciation reflects the physical deterioration of
        tangible materials over time. Labor, as a service, does not physically deteriorate.
        The court found that State Farm&apos;s depreciation of labor was improper and that
        ACV should be calculated by depreciating only the materials, not the labor required
        to install them.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The <em>Estes</em> decision is frequently cited in labor depreciation disputes
        because it directly confronts the logical impossibility of depreciating a service.
        The court&apos;s reasoning is straightforward: you cannot wear out the act of
        installing something.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Oklahoma: <em>Redcorn v. State Farm Fire &amp; Casualty Co.</em>
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Oklahoma addressed the issue in <em>Redcorn v. State Farm Fire &amp; Casualty Co.</em>,
        a case involving hail damage where State Farm depreciated both labor and materials in
        calculating ACV. The policyholder challenged the labor depreciation component.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The court examined the ordinary meaning of &ldquo;depreciation&rdquo; and concluded
        that the term refers to a loss in value due to physical wear and deterioration.
        Because labor is a service, not a physical component of the property, it does not
        experience physical wear and deterioration. The court prohibited the practice of
        depreciating labor, holding that ACV calculations must depreciate only the materials
        that have actually lost value due to physical aging.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The <em>Redcorn</em> decision is notable for the clarity of its reasoning. The court
        did not find the question to be close or ambiguous. Labor does not wear out. The
        analysis was as simple as that.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Virginia: Bureau of Insurance Administrative Ruling
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Virginia addressed labor depreciation through its Bureau of Insurance rather than
        through litigation. The Bureau examined the practice of depreciating labor in property
        insurance claims and issued a ruling that labor costs should not be depreciated when
        calculating ACV. The Bureau&apos;s reasoning followed the same logic as the court
        decisions in other states: depreciation is intended to account for the physical wear
        and deterioration of tangible property, and labor is not tangible property that
        physically deteriorates.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Virginia approach is significant because it demonstrates that the labor depreciation
        issue can be resolved through regulatory action without the need for costly litigation.
        A state insurance department has the authority to interpret how ACV should be calculated
        and to prohibit practices that are inconsistent with sound actuarial and claims-handling
        principles.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Michigan: <em>Liss v. Homeowners Choice</em>
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Michigan courts have addressed the labor depreciation question in <em>Liss v.
        Homeowners Choice</em>, where the insurer depreciated both labor and materials on a
        property damage claim. The policyholder argued that labor cannot &ldquo;wear out&rdquo;
        and should not be subject to depreciation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The court examined the nature of labor as a service performed at a specific point in
        time. Unlike a shingle or a pipe that degrades over years of exposure to the elements,
        the service of installing that shingle or pipe does not continue to exist in a form
        that can deteriorate. The court found that depreciating labor was improper because
        labor simply does not have the physical characteristics that allow for depreciation.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Washington: Rulemaking Process
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Washington has addressed labor depreciation through a rulemaking process led by
        the Office of the Insurance Commissioner. The state undertook a regulatory examination
        of how insurers calculate ACV and whether the practice of depreciating labor is
        consistent with the proper definition of depreciation. The rulemaking process invited
        public comment from both industry participants and consumer advocates.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Washington&apos;s approach through rulemaking reflects a growing recognition that
        labor depreciation is a systemic practice affecting large numbers of policyholders,
        not merely an isolated claim-handling dispute. When a state insurance department
        addresses the issue through regulation, the resulting rule applies uniformly to all
        insurers operating in the state, rather than requiring each policyholder to litigate
        the issue individually.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Broader National Trend
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Beyond the named decisions above, plaintiff-side commentary identifies several other
        jurisdictions where courts or insurance regulators have weighed in against labor
        depreciation in various contexts. A practitioner researching the issue outside
        California should consult primary sources for each jurisdiction rather than relying
        on summaries: the holdings are fact-specific, sometimes turn on particular policy
        language, and have evolved over time.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Among states whose courts or regulators have published opinions or guidance limiting
        labor depreciation, the analytical thread is consistent: depreciation is a measure
        of physical wear on tangible property, and labor &mdash; the service of installing
        materials &mdash; does not lend itself to that measure. California&rsquo;s statutory
        prohibition (Cal. Ins. Code &sect; 2051(b)(2)) and regulatory parallel (10 CCR
        &sect; 2695.9(f)(1)) reflect that same reasoning, codified directly rather than
        left to case-by-case interpretation.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        States That Have Allowed Labor Depreciation
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        It should be acknowledged that some jurisdictions have permitted insurers to depreciate
        labor, though the reasoning in these decisions tends to be less developed and more
        focused on deference to insurance company discretion than on a careful analysis of
        what depreciation actually means.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The primary argument in states that allow labor depreciation is that the policy language
        defines ACV as replacement cost minus depreciation, and the policy does not distinguish
        between labor and materials when it refers to depreciation. Under this reasoning, the
        insurer is entitled to depreciate the entire replacement cost, including the labor
        component, because the policy does not carve out labor from the depreciation calculation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some courts have also relied on the concept that labor and materials are inseparable
        components of the finished product, and that depreciating the finished product
        necessarily includes depreciating the labor that went into creating it. Under this
        view, a 20-year-old roof is a single asset whose value has declined, and parsing
        that decline into separate labor and material components is artificial.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        These decisions, however, tend to accept the insurer&apos;s framing of the question
        without examining whether the concept of depreciation can coherently apply to something
        that does not physically exist. They treat the absence of a specific policy exclusion
        for labor as permission to depreciate it, rather than asking the more fundamental
        question: does the definition of depreciation encompass services at all? Courts that
        have examined the question more carefully &mdash; asking what depreciation actually
        means rather than what the policy fails to exclude &mdash; have consistently concluded
        that it does not.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Texas and Mississippi are among the states where courts have been more receptive to
        the insurance industry&apos;s position on labor depreciation. In Texas, the <em>Lam
        v. United Property &amp; Casualty Insurance Co.</em> line of cases allowed depreciation
        of embedded labor, though the reasoning has drawn criticism from legal commentators.
        These decisions focus heavily on the policy language and less on the nature of
        depreciation itself.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        California&apos;s Position: Prohibited by Both Statute and Regulation
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California addresses labor depreciation through a Fair Claims Settlement Practices
        regulation, against the backdrop of the statutory ACV framework. The regulation
        contains the operative labor-depreciation prohibition; the statute supplies the
        depreciation framework that the regulation implements.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Regulation: 10 CCR &sect; 2695.9(f)(1)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        California&apos;s prohibition on depreciating labor lives in the Fair Claims
        Settlement Practices Regulations &mdash; the operative regulatory provision is
        10 CCR &sect; 2695.9(f)(1):
      </p>

      <CalloutBox variant="legal" title="10 CCR § 2695.9(f)(1)">
        <p className="italic">
          &ldquo;Under a policy, subject to California Insurance Code Section 2071, where the
          insurer is required to pay the expense of repairing, rebuilding or replacing the
          property destroyed or damaged with other of like kind and quality, the measure of
          recovery is determined by the actual cash value of the damaged or destroyed property,
          as set forth in California Insurance Code Section 2051. Except for the intrinsic labor
          costs that are included in the cost of manufactured materials or goods, the expense
          of labor necessary to repair, rebuild or replace covered property is not a component
          of physical depreciation and shall not be subject to depreciation or betterment.&rdquo;
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3 mt-6">
        Statutory backdrop: Cal. Ins. Code &sect; 2051(b)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The regulation operates against the statutory ACV framework in Cal. Ins. Code
        &sect; 2051(b), as restructured by AB 188 (Stats. 2019, ch. 59), effective January
        1, 2020. AB 188 (2019) eliminated the prior &sect; 2051(b)(1)/(b)(2) bifurcation
        between total and partial losses, making the same replacement-cost-less-depreciation
        formula apply to either. The statute uses &ldquo;thing lost or injured&rdquo; and
        does not contain a labor-depreciation prohibition itself &mdash; that point is
        addressed by the regulation above.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Read together, &sect; 2695.9(f)(1) and &sect; 2051(b) establish a clear rule for
        California first-party property claims: the carrier may not depreciate the labor portion
        of a repair or replacement estimate. The only narrow exception is for &ldquo;intrinsic
        labor&rdquo; that is already embedded in the cost of a manufactured material &mdash;
        for example, the factory labor that went into producing a shingle or a window unit is
        part of the material itself. The labor an insured will pay a contractor to install or
        replace the damaged component is not subject to depreciation, period.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Why the Practice Continues Despite the Clear Rule
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Despite the clear statutory and regulatory text, some carriers and their estimating
        software still apply depreciation to combined material-plus-labor line items, which has
        the practical effect of depreciating labor. Where that happens, the carrier is in
        violation of both &sect; 2051(b)(2) and &sect; 2695.9(f)(1), and the insured has a
        direct statutory and regulatory citation for the challenge. The earlier &ldquo;physical
        depreciation&rdquo; and &ldquo;condition&rdquo; arguments under the pre-2019 version of
        &sect; 2051 are now largely superseded &mdash; the legislature simply wrote the
        prohibition directly into the statute, leaving no interpretive ambiguity. For a detailed
        overview of California&apos;s{' '}
        <Link href="/resources/california-fair-claims" className="text-[#2E74B5] underline">
          Fair Claims Settlement Practices
        </Link>
        , see our separate article.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The &ldquo;Embedded Labor&rdquo; Argument
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurance industry&apos;s primary defense of labor depreciation is what is sometimes
        called the &ldquo;embedded labor&rdquo; theory. The argument goes like this: when labor
        is used to install materials, the labor becomes &ldquo;embedded&rdquo; in the finished
        product. The finished product &mdash; the installed roof, the completed plumbing
        system, the finished drywall &mdash; is a single asset that depreciates as a whole.
        Because labor is an inseparable component of the finished product, depreciating the
        finished product necessarily includes depreciating the labor that produced it.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This argument has a superficial appeal, but it collapses under examination for several
        reasons.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Xactimate Refutes the &ldquo;Inseparable&rdquo; Claim
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The most powerful counter to the embedded labor argument comes from the insurance
        industry&apos;s own estimating tool. Xactimate, the software used by the vast majority
        of insurance carriers to generate repair estimates, separates every line item into
        distinct labor and material components. When an adjuster prices a line item for
        &ldquo;Remove and replace composition shingles,&rdquo; Xactimate breaks that price
        into a specific dollar amount for materials and a specific dollar amount for labor.
        The software does not treat them as an inseparable unit. It treats them as distinct
        cost categories with distinct prices.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If labor and materials were truly &ldquo;inseparable,&rdquo; there would be no reason
        for the industry&apos;s own estimating platform to separate them. The fact that
        Xactimate provides separate labor and material figures for every single line item
        demonstrates that the industry itself recognizes these are distinct cost components.
        Carriers cannot simultaneously rely on Xactimate&apos;s separated labor and material
        figures to build their estimates and then claim those same figures are
        &ldquo;inseparable&rdquo; when it comes time to calculate depreciation. You can
        examine how your carrier handled this by{' '}
        <Link href="/resources/esx-file-rights-xactimate" className="text-[#2E74B5] underline">
          obtaining the ESX file
        </Link>{' '}
        from your claim.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The &ldquo;Embedded&rdquo; Theory Conflates Two Different Things
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The embedded labor argument confuses the product with the process. A roof is a product
        &mdash; a tangible thing that exists on top of a house. The process of installing
        that roof is a service &mdash; an activity performed by workers over a period of time.
        The product depreciates. The process does not. Saying that the labor is &ldquo;embedded&rdquo;
        in the finished product is like saying that the act of painting is &ldquo;embedded&rdquo;
        in the painting. The paint on the canvas may fade over time, but the artist&apos;s
        act of applying it does not.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance policies cover the cost of repairing or replacing damaged property. That cost
        includes both materials and labor. The materials may have depreciated, but the labor
        to install new materials has not &mdash; because there is no old labor to depreciate.
        Each repair requires new labor performed at current rates. The &ldquo;embedded&rdquo;
        theory ignores this reality by treating a past service as though it were a physical
        component of the current structure.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Replacement Cost Reveals the Truth
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Consider what happens when the policyholder collects the replacement cost payment.
        Under a replacement cost policy, the insurer pays the full cost of repair after the
        work is completed, including full labor at current rates. The insurer does not demand
        a &ldquo;depreciated&rdquo; labor receipt. The insurer does not require the
        policyholder to find a contractor willing to perform labor at 60 percent of the going
        rate because the old materials were 40 percent depreciated. The full replacement cost
        &mdash; including full labor &mdash; is paid without depreciation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the insurer acknowledges at the replacement cost stage that labor costs the same
        regardless of the age of the materials being replaced, it is illogical to pretend
        otherwise at the ACV stage. The ACV payment is supposed to represent the value of
        the damaged property, and the policyholder cannot replace that property using
        &ldquo;depreciated&rdquo; labor. The only labor available in the marketplace is
        current-rate, full-price labor.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Dollar Impact: How Much Labor Depreciation Costs You
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The financial impact of labor depreciation is substantial and often underestimated by
        policyholders who do not examine their estimates closely. To understand the magnitude,
        consider a typical residential property damage claim.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        On a $50,000 repair estimate, the labor component typically represents 35 to 50 percent
        of the total, or roughly $17,500 to $25,000. When the insurer applies depreciation to
        the full estimate &mdash; including labor &mdash; the additional depreciation attributable
        to labor alone can range from $5,000 to $15,000 or more, depending on the depreciation
        rate and the age of the damaged components.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here is a concrete example:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Total RCV estimate:</strong> $50,000
        </li>
        <li>
          <strong>Material component:</strong> $27,500 (55% of estimate)
        </li>
        <li>
          <strong>Labor component:</strong> $22,500 (45% of estimate)
        </li>
        <li>
          <strong>Depreciation rate applied:</strong> 40% (based on a 20-year-old roof with a
          25-year useful life assigned by the carrier)
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the carrier depreciates both materials <strong>and</strong> labor:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Material depreciation: $27,500 &times; 40% = $11,000</li>
        <li>Labor depreciation: $22,500 &times; 40% = $9,000</li>
        <li>Total depreciation: $20,000</li>
        <li>ACV payment: $50,000 &minus; $20,000 = $30,000</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the carrier depreciates only materials (the correct approach):
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Material depreciation: $27,500 &times; 40% = $11,000</li>
        <li>Labor depreciation: $0</li>
        <li>Total depreciation: $11,000</li>
        <li>ACV payment: $50,000 &minus; $11,000 = $39,000</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The difference is <strong>$9,000</strong>. On a single claim. That $9,000 is money the
        policyholder needs to pay their contractor, and it is money the insurer retains by
        applying a concept &mdash; physical depreciation &mdash; to something that cannot
        physically depreciate.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        On larger commercial claims or claims involving extensive interior damage with high
        labor-to-material ratios (such as drywall, painting, and finish carpentry), the
        impact is even more dramatic. A $200,000 commercial claim with a 50 percent labor
        component and 30 percent depreciation loses $30,000 solely due to labor depreciation.
        For more on how{' '}
        <Link href="/resources/depreciation-schedules-useful-life" className="text-[#2E74B5] underline">
          depreciation schedules and useful life determinations
        </Link>{' '}
        affect your payout, see our detailed breakdown.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Xactimate Handles Labor Depreciation
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Understanding how Xactimate handles depreciation is essential because this software
        generates the vast majority of property damage estimates in the United States. If
        your claim involves Xactimate &mdash; and it almost certainly does &mdash; the
        depreciation decisions were made within this platform.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Xactimate allows the adjuster to choose how depreciation is applied on each line
        item. The software provides three distinct options:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Depreciate materials only:</strong> Depreciation is applied only to the
          material cost component of the line item. The labor portion remains at full
          replacement cost.
        </li>
        <li>
          <strong>Depreciate labor only:</strong> Depreciation is applied only to the labor
          cost component. This option is rarely used but exists in the software.
        </li>
        <li>
          <strong>Depreciate both labor and materials (L &amp; M):</strong> Depreciation is
          applied to the total line item cost, including both labor and materials. This is
          the default setting used by many carriers, and it is the setting that results in
          the highest depreciation deduction.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The fact that Xactimate provides these separate options is itself significant.
        Verisk, the company that owns and develops Xactimate, built the software to allow
        depreciation to be applied to labor and materials independently precisely because
        these are recognized as distinct cost components. If labor and materials were truly
        inseparable, there would be no need for separate depreciation options.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here is what this means for your claim: the decision to depreciate labor is not
        automatic. It is not dictated by the software. It is a choice made by the adjuster
        (or, more commonly, a directive from the carrier&apos;s claims department). The
        adjuster actively selects whether to depreciate materials only, labor only, or both.
        If the adjuster chose to depreciate both labor and materials on your claim, that was
        a deliberate decision &mdash; and it is a decision that can be challenged.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        How to Determine What Was Depreciated on Your Claim
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The depreciation settings are visible in the Xactimate estimate, but they are not
        always obvious on the summary pages that insurers typically provide to policyholders.
        To see exactly how depreciation was applied to each line item, you need access to the
        underlying estimate data.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The most effective way to examine your carrier&apos;s depreciation methodology is to
        obtain the{' '}
        <Link href="/resources/esx-file-rights-xactimate" className="text-[#2E74B5] underline">
          ESX file
        </Link>{' '}
        for your claim. The ESX file is the native Xactimate file that contains all the data,
        settings, and calculations behind the estimate. When opened in Xactimate, the ESX file
        reveals:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Whether depreciation was applied to labor, materials, or both on each line item</li>
        <li>The specific depreciation percentage applied to each item</li>
        <li>The useful life assigned to each component</li>
        <li>Whether the adjuster used Xactimate&apos;s built-in depreciation categories or entered custom values</li>
        <li>Any modifications or overrides to the standard pricing</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Reviewing the ESX file is one of the most powerful tools available for challenging
        depreciation. If the file shows that the adjuster selected &ldquo;L &amp; M&rdquo;
        (labor and materials) depreciation across the estimate, that is concrete evidence
        of labor depreciation that can be challenged using the arguments discussed in this
        article. For a guide on obtaining and using the ESX file, see our article on{' '}
        <Link href="/resources/esx-file-rights-xactimate" className="text-[#2E74B5] underline">
          your rights to the ESX file
        </Link>
        . For strategies on challenging other aspects of the carrier&apos;s estimate, see{' '}
        <Link href="/resources/how-to-challenge-xactimate-estimate" className="text-[#2E74B5] underline">
          how to challenge a Xactimate estimate
        </Link>
        .
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Challenge Labor Depreciation in California
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your insurance company has depreciated labor on your claim, you have strong grounds
        to challenge the practice. Here is a systematic approach.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 1: Request the Complete Depreciation Schedule
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Before you can challenge depreciation, you need to see exactly how it was applied.
        Send a written request to your adjuster asking for a complete{' '}
        <Link href="/resources/depreciation-schedules-useful-life" className="text-[#2E74B5] underline">
          depreciation schedule
        </Link>{' '}
        that shows, for each line item: the useful life assigned, the age used, the depreciation
        percentage, and whether depreciation was applied to labor, materials, or both. Under
        California regulations, the insurer must provide a reasonable explanation of the basis
        for the claim payment, and the depreciation schedule is part of that explanation.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 2: Identify the Labor Depreciation
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Review the depreciation schedule to determine whether labor was depreciated. Look for
        entries that show depreciation applied to &ldquo;L &amp; M&rdquo; (labor and materials)
        or entries where the depreciation is calculated on the total line item cost rather than
        just the material component. If the insurer applied a blanket depreciation percentage
        to the entire estimate without separating labor from materials, that is labor depreciation.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 3: Cite the Statute and Regulation Directly
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Put the challenge in writing and quote the statutory and regulatory prohibitions
        verbatim. Cal. Ins. Code &sect; 2051(b)(2): &ldquo;The deduction for physical
        depreciation shall not include any labor costs that would be incurred to repair,
        rebuild, or replace the damaged or destroyed property.&rdquo; 10 CCR &sect; 2695.9(f)(1):
        &ldquo;the expense of labor necessary to repair, rebuild or replace covered property is
        not a component of physical depreciation and shall not be subject to depreciation or
        betterment.&rdquo; This is not a policy argument or a request for interpretation
        &mdash; it is a direct citation to a statutory and regulatory prohibition that the
        carrier is required to follow.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 4: Make the Logical Argument
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Supplement the statutory argument with the logical one: it costs the same amount of
        labor to replace a five-year-old component as a 25-year-old component. The policyholder
        cannot purchase &ldquo;depreciated&rdquo; labor in the marketplace. No contractor
        offers a discounted labor rate based on the age of the materials being replaced. The
        labor cost is determined by current market rates, not by the age of the item being
        repaired. Depreciating labor creates a mathematical deduction that does not correspond
        to any real-world cost savings available to the policyholder.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 5: Out-of-State Authority Is Background, Not Required
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Because California has its own express statutory prohibition, out-of-state cases are
        not strictly necessary to make the challenge. They are useful as background &mdash; they
        show that courts and regulators in Arkansas (<em>Adams v. Cameron Mutual</em>), Kentucky
        (<em>Estes v. State Farm</em>), Oklahoma (<em>Redcorn v. State Farm</em>), and others
        all reached the same conclusion as the California legislature. If the carrier pushes
        back, cite the California statute and regulation first; the out-of-state authority can
        be brought in to reinforce the conclusion that the national consensus aligns with the
        California rule.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 6: Quantify the Impact
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Calculate the exact dollar amount of improper labor depreciation on your claim. Review
        each line item and determine how much depreciation was applied to labor versus materials.
        Present this number to the adjuster &mdash; it is harder to dismiss a specific dollar
        figure than a general objection. Request that the carrier recalculate the ACV payment
        with depreciation applied only to materials, and provide the revised payment amount you
        are requesting.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 7: Escalate If Necessary
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the field adjuster denies your request, escalate to a supervisor or manager. If the
        carrier continues to apply labor depreciation despite your challenge, consider filing
        a complaint with the California Department of Insurance, invoking the appraisal
        provision in your policy, or consulting with a licensed Public Adjuster or attorney.
        The{' '}
        <Link href="/resources/california-fair-claims" className="text-[#2E74B5] underline">
          California Fair Claims Settlement Practices Regulations
        </Link>{' '}
        require that the insurer&apos;s claim handling practices be reasonable, and there is a
        strong argument that depreciating something that cannot physically depreciate is not
        reasonable.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Connection to{' '}
        <Link href="/resources/recoverable-depreciation-deadline" className="text-[#2E74B5] underline">
          Recoverable Depreciation
        </Link>
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under a replacement cost policy, the depreciation deducted from the initial ACV payment
        is supposed to be &ldquo;recoverable&rdquo; after repairs are completed. The insurer
        pays ACV upfront and withholds the depreciation until the policyholder submits proof
        of completed repairs, at which point the withheld depreciation is released.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Labor depreciation complicates this process in a way that harms policyholders. When
        labor is improperly depreciated, the ACV payment is artificially reduced. This means
        the policyholder receives less money upfront to begin repairs. Many policyholders
        cannot afford to begin repairs without adequate initial funding, creating a cash-flow
        barrier that delays or prevents the very repairs the carrier will later require as
        proof before releasing the withheld depreciation. The policyholder is caught in a
        catch-22: they need the money to start repairs, but they cannot get the money until
        repairs are complete.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Even when the policyholder does complete repairs and recovers the withheld depreciation,
        labor depreciation causes harm during the interim period. The policyholder had to find
        alternative funding &mdash; personal savings, credit cards, home equity loans &mdash;
        to bridge the gap between the artificially reduced ACV payment and the actual cost
        of beginning repairs. The interest and opportunity costs of that bridge financing are
        real expenses caused by the improper depreciation of labor. For information on the
        time limits for{' '}
        <Link href="/resources/recoverable-depreciation-deadline" className="text-[#2E74B5] underline">
          recovering withheld depreciation
        </Link>
        , see our dedicated article on that topic.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Labor-Intensive Trades: Where the Impact Is Greatest
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The impact of labor depreciation varies significantly depending on the type of work
        involved. Some trades are material-heavy, while others are labor-heavy. Understanding
        where labor represents the largest share of the repair cost helps identify where
        labor depreciation does the most damage.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Painting:</strong> Paint is relatively inexpensive. The labor to prep
          surfaces, prime, and apply multiple coats represents the vast majority of the
          cost &mdash; often 70 to 85 percent. Labor depreciation on painting line items
          eliminates most of the ACV payment.
        </li>
        <li>
          <strong>Drywall finishing:</strong> The materials (joint compound, tape, sandpaper)
          cost far less than the skilled labor required to achieve a smooth, paint-ready
          surface. Labor is typically 65 to 80 percent of the total cost.
        </li>
        <li>
          <strong>Demolition and tear-off:</strong> Removing damaged materials is almost
          entirely labor. There are no new materials involved &mdash; just the labor to
          remove and dispose of the old ones. Depreciating this labor is particularly
          indefensible because the work produces no finished product at all.
        </li>
        <li>
          <strong>Electrical work:</strong> The cost of wire, outlets, and switches is a
          fraction of the electrician&apos;s labor to install them. Labor typically represents
          60 to 75 percent of electrical line items.
        </li>
        <li>
          <strong>Plumbing:</strong> Similar to electrical, plumbing labor far exceeds the
          cost of pipes and fittings on most residential repair line items.
        </li>
        <li>
          <strong>Tile installation:</strong> While tile materials can be expensive, the
          labor to prepare the substrate, set the tile, and grout is highly skilled and
          time-intensive, typically representing 55 to 70 percent of the total cost.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        On claims that involve significant painting, drywall, and demolition &mdash; which
        describes most interior damage claims from water, fire, or smoke &mdash; labor
        depreciation can consume more of the policyholder&apos;s payment than material
        depreciation. The policyholder ends up being shortchanged primarily on the component
        of the estimate that cannot logically depreciate.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Overhead and Profit: A Related Issue
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Labor depreciation is closely related to another common insurer practice: depreciating
        overhead and profit (O &amp; P). Overhead and profit represent the general contractor&apos;s
        markup for managing a multi-trade repair project. Like labor, O &amp; P is a cost of
        performing the work, not a physical component of the property. It does not age, wear,
        or deteriorate.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many of the same arguments that apply to labor depreciation also apply to O &amp; P
        depreciation. If the insurer depreciates O &amp; P alongside labor and materials,
        the policyholder faces a triple reduction: depreciation on materials (which may be
        legitimate), depreciation on labor (which is logically impossible), and depreciation
        on O &amp; P (which is equally illogical). The cumulative effect can be devastating,
        reducing the ACV payment by 40 to 60 percent on older properties.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When challenging labor depreciation, it is worth examining whether the carrier also
        depreciated O &amp; P. If so, the same arguments apply, and the additional recovery
        from eliminating O &amp; P depreciation can be substantial.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The National Trend: Where This Is Heading
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The general trend among states that have squarely addressed the issue has been
        toward prohibiting labor depreciation. Over the past decade, the list of
        jurisdictions whose courts or regulators have rejected the practice has grown.
        The recurring rationale in those decisions is that labor is a service, not a
        physical object, and depreciation is a measure of physical wear that does not
        apply to services. (Outcomes in individual cases continue to depend on policy
        language, state-specific statutory and regulatory frameworks, and the procedural
        posture of the dispute.)
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Several factors appear to be driving this trend:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Increased policyholder awareness:</strong> As information about labor
          depreciation has become more widely available, more policyholders are questioning
          the practice and bringing challenges through the courts and regulatory process.
        </li>
        <li>
          <strong>Class action litigation:</strong> Labor depreciation has been the subject
          of class action litigation against various carriers in multiple jurisdictions,
          which has drawn additional regulatory and public attention to the practice.
        </li>
        <li>
          <strong>Regulatory scrutiny:</strong> State insurance departments are increasingly
          examining labor depreciation as part of their oversight of claims handling practices.
          As more states issue guidance or rules prohibiting the practice, carriers face
          growing pressure to change their approach nationwide.
        </li>
        <li>
          <strong>The logic is simply against it:</strong> Courts that examine the question
          carefully consistently reach the same conclusion. The argument against labor
          depreciation is not a close call. It is a straightforward application of the
          definition of depreciation to a category &mdash; services &mdash; that the
          definition does not cover.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        For policyholders and their representatives in states that have not yet definitively
        addressed the question, the national trend provides powerful ammunition. When you
        challenge labor depreciation in California or any other state that has not issued a
        definitive ruling, you are not making a novel or untested argument. You are aligning
        with the clear direction of the law and asking your state to reach the same conclusion
        that a growing majority of states have already reached.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What the Policy Language Actually Says
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A careful reading of most homeowners insurance policies reinforces the argument against
        labor depreciation. The standard ISO HO-3 policy form, used by many carriers, defines
        the loss settlement condition as follows: for covered property losses, the insurer will
        pay the &ldquo;actual cash value at the time of loss&rdquo; but not more than the
        amount necessary to repair or replace the damaged property.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The policies typically do not define &ldquo;actual cash value,&rdquo; leaving the
        definition to state law and judicial interpretation. They do not state that depreciation
        should be applied to labor. They do not state that labor and materials should be treated
        as an inseparable unit. They simply refer to the ACV of the damaged property, which
        under California law means replacement cost less physical depreciation based on
        condition.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The absence of policy language specifically addressing labor depreciation cuts in favor
        of the policyholder. Insurance policies are contracts of adhesion, drafted by the insurer
        and presented to the policyholder on a take-it-or-leave-it basis. Under well-established
        rules of contract interpretation, ambiguities in insurance policies are construed against
        the insurer and in favor of coverage. If the policy does not clearly state that labor
        is subject to depreciation, the ambiguity should be resolved in the policyholder&apos;s
        favor by excluding labor from the depreciation calculation.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Common Carrier Responses and How to Address Them
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When policyholders or their representatives challenge labor depreciation, carriers
        typically respond with several predictable arguments. Here is how to address each one.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        &ldquo;Our Policy Allows Us to Depreciate the Entire Replacement Cost&rdquo;
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This response avoids the question. The issue is not whether the policy mentions labor
        depreciation. The issue is whether the concept of depreciation can logically and legally
        apply to a service. The policy allows depreciation of property. Labor is not property.
        A general authorization to apply depreciation does not mean depreciation can be applied
        to components that are not capable of depreciating.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        &ldquo;We Apply Depreciation Uniformly Across the Estimate&rdquo;
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Uniformity does not equal accuracy. Applying depreciation uniformly &mdash; as a blanket
        percentage across all line items without distinguishing between labor and materials &mdash;
        is precisely the problem. Different components depreciate at different rates (or not at
        all), and applying a single percentage to everything ignores the actual condition and
        nature of each component. California law requires that depreciation be based on the
        condition of the specific property, not applied as a one-size-fits-all formula.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        &ldquo;No California Court Has Prohibited Labor Depreciation&rdquo;
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        No court ruling is needed. The California legislature itself prohibited the practice
        when it added the labor-depreciation sentence to Insurance Code &sect; 2051(b)(2)
        through AB 188, effective January 1, 2019. The statutory text is direct: &ldquo;The
        deduction for physical depreciation shall not include any labor costs that would be
        incurred to repair, rebuild, or replace the damaged or destroyed property.&rdquo; The
        California Department of Insurance reinforced the same rule years earlier through 10
        CCR &sect; 2695.9(f)(1). When statute and regulation already prohibit the practice,
        the absence of additional appellate authority is irrelevant.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        &ldquo;The Depreciation Rate We Used Is Reasonable&rdquo;
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This response confuses the rate with the category. The challenge is not that the
        depreciation percentage is too high &mdash; though it often is, as detailed in
        our article on{' '}
        <Link href="/resources/depreciation-schedules-useful-life" className="text-[#2E74B5] underline">
          depreciation schedules and useful life
        </Link>
        . The challenge is that depreciation of any percentage should not be applied to labor
        at all. Whether the carrier depreciates labor at 10 percent or 50 percent, the
        fundamental problem is the same: you cannot depreciate something that does not
        physically deteriorate, regardless of the rate.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Putting It All Together: The Complete Challenge
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When challenging labor depreciation on a California claim, the strongest approach
        combines multiple lines of argument:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Statutory:</strong> Cal. Ins. Code &sect; 2051(b)(2) (added by AB 188, eff.
          1/1/2019) directly prohibits the practice: &ldquo;The deduction for physical
          depreciation shall not include any labor costs that would be incurred to repair,
          rebuild, or replace the damaged or destroyed property.&rdquo; This is a statutory
          prohibition, not an interpretive argument.
        </li>
        <li>
          <strong>Regulatory:</strong> 10 CCR &sect; 2695.9(f)(1) provides a parallel
          prohibition: &ldquo;the expense of labor necessary to repair, rebuild or replace
          covered property is not a component of physical depreciation and shall not be subject
          to depreciation or betterment.&rdquo; See{' '}
          <Link href="/resources/california-fair-claims" className="text-[#2E74B5] underline">
            California Fair Claims Settlement Practices Regulations
          </Link>
          .
        </li>
        <li>
          <strong>Logical:</strong> Labor costs the same regardless of the age of the
          materials being replaced. No marketplace exists for &ldquo;depreciated&rdquo;
          labor. The policyholder cannot purchase labor at a reduced rate corresponding to
          the carrier&apos;s depreciation deduction.
        </li>
        <li>
          <strong>Industry practice:</strong> Xactimate, the insurance industry&apos;s own
          estimating tool, separates labor and materials on every line item, demonstrating
          they are distinct cost categories that can be &mdash; and should be &mdash;
          depreciated independently.
        </li>
        <li>
          <strong>National authority:</strong> A growing majority of states that have
          addressed the question have prohibited labor depreciation. The national trend is
          clear and accelerating.
        </li>
        <li>
          <strong>Contract interpretation:</strong> The policy does not specifically authorize
          labor depreciation. Ambiguities in insurance contracts are construed against the
          insurer and in favor of coverage.
        </li>
        <li>
          <strong>Dollar impact:</strong> Quantify the specific amount of improper labor
          depreciation on the claim and present the corrected ACV figure.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Presenting this challenge in a clear, written format &mdash; with specific dollar
        figures, statutory citations, and reference to the national case law &mdash; makes it
        significantly harder for the carrier to dismiss. Many adjusters have never been
        challenged on labor depreciation and may not even realize the practice is prohibited
        in a growing number of states. Educating the adjuster while making the formal demand
        can be an effective strategy.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        A Note for Attorneys
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        For attorneys handling first-party property insurance disputes in California, the
        labor depreciation issue is well-defined by statute. The framework under Cal. Ins.
        Code &sect; 2051(b)(2), reinforced by 10 CCR &sect; 2695.9(f)(1), expressly
        prohibits depreciating labor on a damaged-or-destroyed-property valuation, and
        carriers have limited room to argue a contrary &ldquo;reasonable interpretation&rdquo;
        of the unambiguous statutory text (recognizing the narrow &ldquo;intrinsic labor in
        manufactured materials&rdquo; carve-out discussed earlier in this article). The
        dollar amounts at stake on a single claim often run $5,000 to $15,000 or more, and
        on a class basis the exposure can be much larger.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Labor depreciation can serve as an independent basis for a bad faith claim when the
        carrier applies it in the face of clear statutory and regulatory text. It can also be
        incorporated into broader claims involving{' '}
        <Link href="/resources/depreciation-schedules-useful-life" className="text-[#2E74B5] underline">
          excessive depreciation
        </Link>
        , unreasonable delay, or other unfair claims practices.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The class action landscape is also worth monitoring. Labor depreciation class actions
        have been filed against major carriers in multiple states, with significant settlements.
        California, with its protective statutory framework and large insurance market, is a
        natural venue for this type of action if a carrier can be shown to systematically
        depreciate labor across its book of business.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Conclusion: Labor Does Not Wear Out
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The labor depreciation debate ultimately comes down to a simple question: can a service
        physically deteriorate? The answer is no. A roofer&apos;s labor does not erode in the
        sun. A plumber&apos;s work does not corrode in the pipes. An electrician&apos;s service
        does not degrade in the walls. The materials may deteriorate, but the labor that
        installed them was consumed at the time of installation and ceased to exist as anything
        that could wear, age, or decline.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Every state that has carefully examined this question has reached the same conclusion.
        The national trend is unmistakable. And in California, the legislature did not stop at
        the analytical argument &mdash; it wrote the prohibition directly into Insurance Code
        &sect; 2051(b)(2) through AB 188, effective January 1, 2019. The California Department
        of Insurance reinforces the same rule through 10 CCR &sect; 2695.9(f)(1). Labor
        depreciation in California is not just a bad practice; it is a violation of statute and
        regulation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your insurance company has depreciated labor on your claim, do not accept it without
        challenge. Request the depreciation schedule. Examine the{' '}
        <Link href="/resources/esx-file-rights-xactimate" className="text-[#2E74B5] underline">
          ESX file
        </Link>
        . Calculate the dollar impact. And make the challenge in writing, with the verbatim
        statutory and regulatory text quoted &mdash; labor does not wear out, the California
        legislature has said so, and the carrier is required to follow that rule.
      </p>

      <hr className="my-8 border-gray-300" />
      <p className="text-sm text-gray-500 italic">
        This article is for informational purposes only and does not constitute legal advice.
        Insurance policies and applicable law vary by state and by policy form. Consult with
        a licensed professional regarding your specific situation.
      </p>
      <p className="text-sm text-gray-500 mt-4 italic">
        Written by Leland Coontz III, Licensed Public Adjuster, CA License #2B53445.
      </p>
    </>
  )
}
