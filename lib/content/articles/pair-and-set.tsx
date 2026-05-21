import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Pair and Set Clauses in Property Insurance: What Happens When Only Part of a Match Is Destroyed',
  description:
    'Understand the pair and set clause in your homeowner policy, how it applies to jewelry, furniture, cabinets, and building components, and how California matching regulations protect policyholders.',
  summary:
    'A pair-and-set clause addresses what happens when only part of a matched set, jewelry, furniture, cabinets, is destroyed. With California matching protections, you may be owed the value of restoring the whole set, not just the damaged piece.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        You own a pair of diamond earrings worth $8,000. One is stolen. You file a claim. The
        insurer writes you a check for $4,000 &mdash; half the value of the pair &mdash; and tells
        you that only one earring was lost. You are left with one earring you will never wear and
        $4,000 that will never buy a replacement pair. This is the pair and set problem, and it is
        one of the most misunderstood provisions in property insurance.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The same logic applies to building components. Fire damages one of your 31 kitchen cabinet
        doors. The insurer replaces it, but the replacement does not match the other 30 doors in
        color, grain, or finish. You now have a kitchen that looks obviously patched. The insurer
        says it only owes for one door. You say the whole set of cabinets needs to go. Who is right?
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The answer depends on your policy language, your state&rsquo;s regulations, and whether the
        damaged property falls under Coverage A (dwelling) or Coverage C (personal property). This
        article breaks down how the pair and set clause works in both contexts, what the standard
        policy language actually says, and how California&rsquo;s matching regulation changes the
        analysis for building components.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Is the Pair and Set Clause?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The pair and set clause is a standard provision in homeowner policies that governs how the
        insurer will handle a loss to one item that is part of a matched pair or coordinated set. The
        clause appears in the ISO HO-3 policy form &mdash; the most widely used homeowner policy in
        the United States &mdash; under the &ldquo;Conditions&rdquo; section. It reads:
      </p>
      <blockquote className="border-l-4 border-[#1F3964] pl-4 italic text-gray-600 mb-6">
        &ldquo;Loss To A Pair Or Set. In case of loss to a pair or set we may elect to:
        (a) Repair or replace any part to restore the pair or set to its value before the loss; or
        (b) Pay the difference between actual cash value of the property before and after the loss.&rdquo;
      </blockquote>
      <p className="text-gray-700 leading-relaxed mb-4">
        There are two important things to notice in this language. First, the clause gives the
        insurer &mdash; not the policyholder &mdash; the election. The word &ldquo;we&rdquo; refers
        to the insurance company. Second, the clause provides two options, not one: the insurer can
        either restore the pair or set to its pre-loss value, or pay the diminution in value of the
        entire pair or set. Under either option, the insurer is acknowledging that the loss of one
        item from a pair or set affects the value of the remaining items.
      </p>

      <CalloutBox variant="important" title="The Clause Recognizes the Loss Is More Than One Item">
        <p>
          The pair and set clause exists precisely because the value of a matched pair or set is
          greater than the sum of its individual parts. Losing one earring from a $8,000 pair does not
          leave you with a $4,000 earring &mdash; it leaves you with an earring that has almost no
          market value on its own. The clause is designed to address this gap, not to limit your
          recovery to the value of the single lost item.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How the Clause Works for Personal Property (Coverage C)
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The pair and set clause is most commonly invoked for personal property claims under
        Coverage C. This is where the classic examples arise:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Jewelry:</strong> One earring from a pair, one cufflink from a set, or one stone
          lost from a ring with a matched arrangement of gems
        </li>
        <li>
          <strong>Furniture:</strong> One chair from a dining set, one bookshelf from a matched pair,
          or one end table from a living room set
        </li>
        <li>
          <strong>Dinnerware and flatware:</strong> Pieces missing from a set of china, crystal, or
          silver
        </li>
        <li>
          <strong>Collectibles:</strong> One volume from a limited-edition book set, one figurine from
          a numbered collection
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Jewelry Problem in Detail
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Jewelry is the most common and most contentious pair and set situation. Consider a pair of
        custom earrings appraised at $10,000. One earring is lost. The remaining earring is
        undamaged, but it is essentially worthless as a single piece &mdash; there is no meaningful
        market for one earring from a custom pair. Under the pair and set clause, the insurer has two
        options:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Repair or replace any part to restore the pair to its pre-loss value.</strong> This
          means the insurer could pay to have a matching earring made, provided the cost is reasonable.
          If a jeweler can create a matching replacement for $5,500, the insurer might elect this
          option.
        </li>
        <li>
          <strong>Pay the difference between the ACV of the pair before and after the loss.</strong>{' '}
          If the pair was worth $10,000 before the loss and the remaining single earring is worth
          $500 after the loss, the insurer would owe $9,500 &mdash; not $5,000. This is because the
          clause measures the actual diminution in value to the pair as a whole, not just the
          proportional value of the lost item.
        </li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some policies &mdash; particularly inland marine floaters and scheduled jewelry policies
        &mdash; use a different version called a &ldquo;broad form&rdquo; pair and set clause, which
        requires the insurer to pay the full scheduled value of the pair or set if any part is lost,
        provided the insured surrenders the remaining items. Other policies contain restrictive
        language that limits recovery to &ldquo;the value of any particular part or parts which may
        be lost, without reference to any special value which such article may have as part of such
        pair or set.&rdquo; This restrictive language is far less favorable to policyholders and was
        the subject of early case law.
      </p>

      <CalloutBox variant="tip" title="Check Your Jewelry Coverage Carefully">
        <p>
          Most unendorsed homeowner policies cap jewelry theft losses at $1,500 under the{' '}
          <Link href="/resources/special-limits-of-liability" className="text-[#2E74B5] hover:underline">
            special limits of liability
          </Link>
          . If you own valuable jewelry, you likely need a scheduled personal property endorsement or
          a separate inland marine floater. When purchasing that coverage, read the pair and set
          language before you buy &mdash; a broad-form clause can make a significant difference if you
          ever lose one item from a pair.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How the Clause Applies to Building Components (Coverage A)
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The pair and set clause was originally written with personal property in mind &mdash; earrings,
        china sets, and furniture groups. But policyholders and their advocates have argued, sometimes
        successfully, that the same logic applies to building components. Consider these scenarios:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Six of eighteen decorative shutters are damaged by a tornado &mdash; the remaining twelve
          are intact but cannot be matched with available replacements
        </li>
        <li>
          One cabinet door is damaged by fire, but the replacement door does not match the other 30
          doors in the kitchen
        </li>
        <li>
          A window from a set of matching custom windows is broken, but the manufacturer no longer
          produces that style
        </li>
        <li>
          A section of tile flooring is cracked, but the tile has been discontinued and no matching
          tile exists
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Whether the pair and set clause applies to these dwelling components is debated. The clause
        uses the generic term &ldquo;property&rdquo; without limiting it to personal property. Some
        adjusters and commentators have argued that building elements like a set of shutters, a set of
        matching cabinets, or a coordinated set of windows can reasonably be treated as a
        &ldquo;set&rdquo; under the clause. Others argue the clause was intended only for Coverage C
        items and that dwelling matching is governed by separate policy language and state regulations.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Practical Difference: Pair and Set vs. Matching
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        For building components, the more powerful argument is usually not the pair and set clause at
        all &mdash; it is the{' '}
        <Link href="/resources/matching" className="text-[#2E74B5] hover:underline">
          matching doctrine
        </Link>
        . Here is why: The pair and set clause, even when applied favorably, only requires the insurer
        to restore the set to its pre-loss value or pay the diminution in value. But state matching
        regulations can require the insurer to actually replace all of the items necessary to achieve a
        uniform appearance &mdash; which often means replacing undamaged components at full replacement
        cost.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For the 31-cabinet-door example: Under the pair and set clause, the insurer might argue it
        only owes the difference in value between a kitchen with 31 matching doors and a kitchen
        with 30 original doors plus one mismatched replacement. Under a matching regulation, the
        insurer may be required to replace all 31 doors so the kitchen achieves a reasonably uniform
        appearance. The matching regulation is almost always the better path for dwelling components.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        California&rsquo;s Matching Regulation and Building Components
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California has one of the strongest matching protections in the country. California Code of
        Regulations, Title 10, &sect; 2695.9(a)(2) provides:
      </p>
      <blockquote className="border-l-4 border-[#1F3964] pl-4 italic text-gray-600 mb-6">
        &ldquo;When a loss requires replacement of items and the replaced items do not match in
        quality, color or size, the insurer shall replace all items in the damaged area so as to
        conform to a reasonably uniform appearance.&rdquo;
      </blockquote>
      <p className="text-gray-700 leading-relaxed mb-4">
        This regulation applies to building components &mdash; it is part of &sect; 2695.9,
        which governs &ldquo;Additional Standards Applicable to First Party Residential and
        Commercial Property Insurance Policies.&rdquo; For California policyholders, this means
        the insurer cannot simply replace one damaged cabinet door and walk away if the replacement
        does not match the other 30. The regulation requires the insurer to &ldquo;replace all items
        in the damaged area&rdquo; to achieve a &ldquo;reasonably uniform appearance.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Notice that California&rsquo;s regulation uses &ldquo;in the damaged area&rdquo; rather than
        the narrower &ldquo;line of sight&rdquo; standard used in some other states. This language is
        broader and more protective of policyholders. For a kitchen with mismatched cabinet doors, the
        entire kitchen is arguably &ldquo;the damaged area,&rdquo; not just the single bay where the
        damaged door was located.
      </p>

      <CalloutBox variant="tip" title="For California Policyholders: Use the Regulation, Not the Clause">
        <p>
          When dealing with mismatched building components in California, cite 10 CCR &sect; 2695.9(a)(2)
          directly. This regulation is binding on all insurers doing business in California. It requires
          replacement to achieve a &ldquo;reasonably uniform appearance&rdquo; &mdash; a standard that is
          more favorable than the pair and set clause&rsquo;s diminution-in-value measure. For more on
          how to use this regulation, see our{' '}
          <Link href="/resources/matching" className="text-[#2E74B5] hover:underline">
            matching article
          </Link>.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Case Law: How Courts Have Interpreted Pair and Set Clauses
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        There is a relatively thin body of case law directly addressing the pair and set clause, but
        the decisions that exist are instructive. Courts have addressed the clause in both personal
        property and structural contexts.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Jewelry and Personal Property Cases
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        <em>Karcher v. Philadelphia Fire and Marine Insurance Co.</em>, 19 N.J. 214 (N.J. 1955), is
        one of the earliest and most significant pair and set cases. The policyholder owned a diamond
        ring insured under a jewelry floater. The ring featured a 2.22-carat central diamond in a
        platinum setting with two baguette diamonds, insured for $2,288. When the central diamond was
        lost from the setting, the insurer argued the pair and set clause limited recovery to the
        proportional value of the one stone, &ldquo;without reference to any special value which
        such article may have as part of such pair or set.&rdquo; The New Jersey Supreme Court found
        for the policyholder, holding that the ring with its arrangement of stones constituted a
        &ldquo;set&rdquo; and that the insurer could not simply pay for the one stone in isolation.
        The court noted that &ldquo;little significant and presently essential difference exists
        between a set of pearls assembled on a cord and a set of diamonds attractively congregated
        on a finger ring.&rdquo;
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Building Components and Matching Cases
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        While the following cases deal with matching rather than the pair and set clause specifically,
        they illustrate how courts handle the same underlying problem &mdash; whether an insurer must
        pay for undamaged components when a partial repair creates a mismatch:
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <em>Holloway v. Liberty Mutual Fire Insurance Co.</em>, 290 So. 2d 791 (La. Ct. App. 1974),
        involved a homeowner whose carpet was partially damaged. The original carpet color and
        pattern had been discontinued, making a partial replacement impossible without a visible
        mismatch. An interior decorator testified that replacing only the damaged portion would result
        in unsightly seams and contrast between old and new carpet, and a realtor testified the
        mismatch would diminish the home&rsquo;s value by $1,000 to $2,000. The Louisiana Court of
        Appeal found that the insurer owed the full cost of replacing the carpet in the entire bedroom
        wing &mdash; even though only part was directly damaged &mdash; because partial replacement
        would not restore the property to its pre-loss condition.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <em>Cedar Bluff Townhome Condominium Association, Inc. v. American Family Mutual Insurance
        Co.</em>, 857 N.W.2d 290 (Minn. 2014), addressed vinyl siding that was partially damaged by
        hail. The insurer replaced the damaged sections, but the new siding did not match the
        existing siding in color due to weathering and aging. The Minnesota Supreme Court held that
        &ldquo;comparable material and quality&rdquo; requires a &ldquo;reasonable color match
        between new and existing siding&rdquo; and that the color mismatch itself could constitute
        direct physical loss to covered property.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <em>Windridge of Naperville Condominium Association v. Philadelphia Indemnity Insurance
        Co.</em>, 932 F.3d 1035 (7th Cir. 2019), involved aluminum siding damaged on some
        elevations of a condominium complex. The Seventh Circuit held that the policy required
        replacement of siding on all four elevations when matching materials were unavailable,
        rejecting the insurer&rsquo;s argument that it only owed for the directly damaged sections.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <em>National Presbyterian Church, Inc. v. GuideOne Mutual Insurance Co.</em>, 82 F. Supp. 3d
        55 (D.D.C. 2015), held that &ldquo;like kind and quality&rdquo; policy language required the
        insurer to cover matching limestone panels on a historic church, not merely the panels that
        were directly damaged.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        On the other side, <em>Greene v. United Services Automobile Association</em>, 936 A.2d 1178
        (Pa. Super. 2007), limited coverage to the damaged portion of a roof, finding that policy
        language referring to &ldquo;that part of the building damaged&rdquo; did not extend to
        undamaged sections even when matching was imperfect.
      </p>

      <CalloutBox variant="important" title="Case Law Varies by State">
        <p>
          Courts are split on matching and pair and set issues. Some states require full matching;
          others allow &ldquo;close enough.&rdquo; Your outcome depends heavily on your state&rsquo;s
          regulations, your specific policy language, and whether the items are personal property or
          building components. In California, the matching regulation at 10 CCR &sect; 2695.9(a)(2)
          provides strong protection for building components regardless of how courts in other states
          have ruled.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Coverage A vs. Coverage C: Why It Matters
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Whether the damaged property falls under Coverage A (dwelling) or Coverage C (personal
        property) significantly affects how the pair and set issue plays out:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Coverage A &mdash; Dwelling:</strong> Building components like cabinets, flooring,
          windows, siding, and roofing are part of the dwelling. For these items, the pair and set
          clause is often secondary to state matching regulations, which may require the insurer to
          replace all items in the damaged area to achieve a uniform appearance. Coverage A is
          typically written on a replacement cost basis, which means the insurer must pay what it
          actually costs to replace the damaged property with equivalent materials &mdash; and if
          the equivalent requires replacing adjacent undamaged components to match, that cost may be
          covered.
        </li>
        <li>
          <strong>Coverage C &mdash; Personal Property:</strong> Contents like furniture, jewelry,
          electronics, and collectibles fall under Coverage C. The pair and set clause applies
          directly to these items. However, Coverage C has its own complications. Many categories of
          personal property are subject to{' '}
          <Link href="/resources/special-limits-of-liability" className="text-[#2E74B5] hover:underline">
            special limits of liability
          </Link>{' '}
          that cap recovery at low dollar amounts, regardless of the pair and set calculation. Your{' '}
          <Link href="/resources/declarations-page" className="text-[#2E74B5] hover:underline">
            declarations page
          </Link>{' '}
          shows your Coverage C limit, but the sub-limits buried in the policy conditions may be far
          more restrictive.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Additionally, the valuation method matters. Under a replacement cost policy, the insurer owes
        what it costs to replace the pair or set at current prices. Under an{' '}
        <Link href="/resources/acv-rcv" className="text-[#2E74B5] hover:underline">
          actual cash value
        </Link>{' '}
        policy, the insurer pays the depreciated value of the pair or set, which can be significantly
        less. The pair and set clause in the standard HO-3 measures option (b) on an ACV basis
        (&ldquo;the difference between actual cash value of the property before and after the
        loss&rdquo;), but option (a) &mdash; repair or replace to restore pre-loss value &mdash;
        does not specify ACV, which creates an argument that restoration should be at replacement cost
        if the policy provides replacement cost coverage.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Matching Regulations in Other States
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California is not the only state with matching requirements. Approximately 30 states have
        adopted some version of the NAIC (National Association of Insurance Commissioners) Model
        Unfair Claims Settlement Practices Regulation, which requires repairs to achieve a
        &ldquo;reasonably uniform appearance.&rdquo; However, the specific language and scope vary:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Florida</strong> &mdash; &sect; 626.9744 requires insurers to make
          &ldquo;reasonable repairs&rdquo; or replace undamaged items in adjoining areas if
          replacements &ldquo;do not match in quality, color, or size,&rdquo; unless the policy
          provides otherwise. The statute allows the insurer to consider the cost, the degree of
          uniformity achievable, and the remaining useful life of undamaged portions.
        </li>
        <li>
          <strong>Kentucky</strong> &mdash; Requires replacement of &ldquo;all items in the
          area&rdquo; to achieve a &ldquo;reasonably uniform appearance&rdquo; for both interior and
          exterior losses, and specifies that the insured shall not bear any cost over the applicable
          deductible. Kentucky interprets &ldquo;in the area&rdquo; broadly &mdash; for example, the
          entire roof, not just the damaged slope.
        </li>
        <li>
          <strong>Minnesota</strong> &mdash; The Minnesota Supreme Court in{' '}
          <em>Cedar Bluff</em> (2014) interpreted &ldquo;comparable material and quality&rdquo; to
          require a reasonable color match, establishing that color mismatch is itself a form of
          property damage.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Common Insurer Tactics and How to Respond
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurers frequently try to minimize pair and set and matching claims. Here are the most common
        arguments you will encounter and how to address them:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>&ldquo;We only owe for the one damaged item.&rdquo;</strong> This ignores the pair
          and set clause entirely. The clause exists because the industry recognizes that loss to one
          item of a pair or set affects the value of the whole. Point to the clause language and note
          that even the insurer&rsquo;s own policy provides for the diminution in value to the
          entire pair or set, not just the single item.
        </li>
        <li>
          <strong>&ldquo;We found a close enough match.&rdquo;</strong> For building components,
          &ldquo;close enough&rdquo; is subjective. Document the mismatch with photographs and get a
          contractor&rsquo;s written opinion on whether the result achieves a reasonably uniform
          appearance. In California, cite 10 CCR &sect; 2695.9(a)(2) and note that the regulation
          requires replacement of &ldquo;all items in the damaged area&rdquo; when replacements do
          not match.
        </li>
        <li>
          <strong>&ldquo;The pair and set clause does not apply to building components.&rdquo;</strong>{' '}
          This may or may not be correct depending on the policy language, but it is often irrelevant
          because the matching regulation (where it exists) provides even stronger protection for
          building components than the pair and set clause does.
        </li>
        <li>
          <strong>&ldquo;You are getting a windfall &mdash; we are replacing more than was
          damaged.&rdquo;</strong> The purpose of insurance is indemnification: restoring you to the
          position you were in before the loss. A home with mismatched cabinets, mismatched siding,
          or a partial set of custom windows is not in the same condition as before the loss. Full
          replacement is not a windfall &mdash; it is the cost of actually making the policyholder
          whole.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Practical Steps for Your Claim
      </h2>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Read your policy&rsquo;s pair and set clause.</strong> Find the exact language in
          your policy. Not all policies use the ISO standard wording &mdash; some are more favorable,
          some are more restrictive.
        </li>
        <li>
          <strong>Determine whether your items are a pair, a set, or individual items.</strong> A pair
          of earrings is clearly a pair. A set of dining chairs is clearly a set. But a collection of
          unrelated items grouped in the same room may not qualify.
        </li>
        <li>
          <strong>Document the diminution in value.</strong> For personal property, get an appraisal
          showing the value of the remaining items after the loss. A single earring from a custom pair
          may be worth only its scrap metal and stone value &mdash; far less than half the value of
          the pair.
        </li>
        <li>
          <strong>For building components, photograph the mismatch.</strong> Take clear, well-lit
          photos showing the replacement next to the original. Bring a contractor to provide a written
          opinion that the result is not a uniform appearance.
        </li>
        <li>
          <strong>Know your state&rsquo;s regulations.</strong> If you are in California, Florida,
          Kentucky, Minnesota, or any other state with matching requirements, those regulations may
          give you stronger rights than the pair and set clause alone.
        </li>
        <li>
          <strong>Review your{' '}
          <Link href="/resources/contents-claims" className="text-[#2E74B5] hover:underline">
            contents claim
          </Link>{' '}
          carefully.</strong> For personal property sets, make sure the insurer is valuing the loss
          to the pair or set as a whole, not just the individual damaged item.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Bottom Line
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The pair and set clause is not a limitation on your coverage &mdash; it is a recognition that
        the loss of one item from a matched pair or set causes a loss to the whole. For personal
        property, use the clause to demand that the insurer pay the actual diminution in value to the
        entire pair or set, not just the proportional cost of one item. For building components, the
        pair and set clause may help, but state matching regulations &mdash; particularly
        California&rsquo;s 10 CCR &sect; 2695.9(a)(2) &mdash; are usually the stronger tool. Either
        way, do not accept a settlement that leaves you with a mismatched kitchen, a single earring,
        or half a dining set. That is not indemnification. That is underpayment.
      </p>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Dealing with a Pair, Set, or Matching Dispute?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          If your insurer is refusing to pay for mismatched building components or is undervaluing
          your personal property by ignoring the pair and set clause, a Public Adjuster can document
          the loss, cite the correct regulations, and negotiate the full value you are owed.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Request a Free Claim Review &rarr;
        </Link>
      </div>

      <CalloutBox variant="legal" title="Important Notice">
        <p>
          This article is provided for general educational purposes only and does not constitute legal
          advice. Insurance policies, regulations, and case law can vary significantly based on
          individual circumstances. Consult a licensed attorney for advice about your specific
          situation.
        </p>
      </CalloutBox>
    </>
  )
}
