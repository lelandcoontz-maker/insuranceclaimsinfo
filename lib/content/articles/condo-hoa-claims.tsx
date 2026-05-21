import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Condo and HOA Insurance Claims: Master Policy, HO-6, and the Coverage Gap Nobody Explains',
  description:
    'Two policies cover your condo — the HOA master policy and your HO-6. Learn how CC&Rs determine who pays for what, the tenant improvement trap, and what to do when the HOA refuses to act.',
  summary:
    'A condo is covered by two policies: the HOA master policy and your own HO-6. The CC&Rs decide who pays for what, and the tenant-improvement trap can leave gaps. Know the boundary, and what to do if the HOA refuses to act.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you own a condominium, there are almost always <strong>two insurance policies</strong> that
        cover your unit: the HOA&rsquo;s master policy and your individual unit owner&rsquo;s policy,
        commonly called an <strong>HO-6</strong>. Most condo owners do not understand how these two
        policies interact, where one ends and the other begins, or what happens when one of them fails
        to respond. That confusion costs unit owners real money &mdash; sometimes tens of thousands of
        dollars &mdash; when a claim arises.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This guide explains how condo insurance claims actually work: what the master policy covers,
        what the HO-6 covers, how your CC&amp;Rs control the split, the &ldquo;tenant improvement&rdquo;
        language that trips up almost everyone, and &mdash; critically &mdash; what happens when the HOA
        refuses to file a claim for damage that is clearly their responsibility.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Two-Policy System: Master Policy vs. HO-6
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Every condominium association is required to carry a <strong>master insurance policy</strong> that
        covers the building structure and common areas. This is not optional &mdash; it is a legal
        requirement in every state. In California, it is governed by the Davis-Stirling Common Interest
        Development Act (California Civil Code &sect;&sect;4000&ndash;6150). In Florida, it falls under
        Fla. Stat. &sect;718.111(11). In Texas, it is the Uniform Condominium Act, Tex. Prop. Code
        &sect;82.111.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In addition to the master policy, each unit owner should carry an <strong>HO-6 policy</strong> (ISO
        form HO 00 06), which covers the unit owner&rsquo;s personal property, liability, loss of use, and
        &mdash; most importantly for this discussion &mdash; <strong>dwelling coverage</strong> for
        alterations, appliances, fixtures, and improvements that are part of the building within the unit.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The fundamental question in every condo claim is: <em>which policy covers which component of the
        damage?</em> The answer is almost never obvious, and it is almost never determined by the
        insurance policies alone.
      </p>

      <CalloutBox variant="warning" title="You Cannot Assume What the Master Policy Covers">
        <p>
          Do not assume the master policy covers &ldquo;the building&rdquo; and your HO-6 covers
          &ldquo;what&rsquo;s inside.&rdquo; The actual split between the two policies depends on
          your community&rsquo;s governing documents &mdash; the CC&amp;Rs, bylaws, or (in some states)
          the statute itself. Getting this wrong means filing a claim with the wrong carrier, which
          delays everything.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Three Types of Master Policies
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Not all master policies are the same. The type of master policy your HOA carries determines how
        much coverage responsibility falls on you as the unit owner. There are three common configurations:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        1. Bare Walls (Studs-In)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The HOA&rsquo;s master policy covers only the structural shell of the building &mdash; the
        concrete, exterior framing, sub-floor, common pipes and wiring inside the walls, and the
        unfinished surface of the drywall. Everything you can see and touch inside the unit &mdash;
        paint, flooring, cabinets, countertops, fixtures, appliances &mdash; is <em>your</em>
        responsibility under your HO-6.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        2. Single Entity (Original Specs)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The master policy covers the building structure <em>and</em> the original interior finishes as
        installed by the developer &mdash; original flooring, original cabinets, original countertops.
        But it does <em>not</em> cover any upgrades, renovations, or improvements made after the
        original construction, whether by the current owner or a prior owner. Those fall on the
        unit owner&rsquo;s HO-6.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        3. All-In (All-Inclusive)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The broadest form. The master policy covers the building structure plus most built-in features
        inside the unit, including improvements. The unit owner&rsquo;s HO-6 covers only personal
        property, liability, and loss of use. This type is less common but exists in some newer
        developments.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you do not know which type your HOA carries, request a copy of the master policy certificate
        of insurance and the insurance provisions in your CC&amp;Rs. Your property manager should be
        able to provide both.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The CC&amp;Rs Control Everything
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here is the part that most people miss: <strong>the governing documents &mdash; not the
        insurance policies &mdash; determine which building components are covered by which
        policy</strong>. In California, the CC&amp;Rs (Covenants, Conditions, and Restrictions) are
        the controlling document. In New York, it is typically the bylaws and proprietary lease. In
        Florida, the statute itself (Fla. Stat. &sect;718.111) largely dictates the split, though
        the declaration can modify some provisions.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This means the answer to &ldquo;who is responsible for the drywall?&rdquo; or &ldquo;who
        is responsible for the flooring?&rdquo; can be completely different from one condominium
        development to the next, even in the same city, even on the same street. You cannot rely on
        general rules. You must read <em>your</em> CC&amp;Rs.
      </p>

      <CalloutBox variant="tip" title="California Default Under Civil Code 4775">
        <p>
          Unless the CC&amp;Rs say otherwise, California Civil Code &sect;4775 provides default rules:
          the interior surfaces of perimeter walls, floors, ceilings, windows, doors, and outlets
          within a unit are part of the &ldquo;separate interest&rdquo; (the unit owner&rsquo;s
          responsibility). But the sheetrock itself, the subfloor, the insulation, and the framing are
          part of the <strong>common area</strong> &mdash; meaning the HOA is responsible for repairing
          and replacing them. Many CC&amp;Rs override this default, so always check.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Flooring: Not Always on the Unit Owner
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Almost everyone assumes flooring is the unit owner&rsquo;s responsibility. In most cases, it is.
        But not always. Some CC&amp;Rs in California explicitly assign flooring &mdash; including
        finished flooring &mdash; to the HOA. This surprises unit owners who have been paying HO-6
        premiums for coverage they may not need (at least for flooring), and it surprises HOA boards
        who did not realize they were on the hook. The only way to know is to read the CC&amp;Rs
        carefully, line by line.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The &ldquo;Tenant Improvement&rdquo; Trap in HO-6 Policies
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under the standard ISO HO-6 form, Coverage A (Dwelling) covers &ldquo;alterations,
        appliances, fixtures, and improvements which are part of the building contained within the
        &lsquo;residence premises.&rsquo;&rdquo; Some policies go further and use language stating
        that coverage applies to items &ldquo;similar to items that are normally considered tenant
        improvements and betterments.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This language sounds like it was borrowed directly from commercial property insurance &mdash;
        because it was. In the commercial world, &ldquo;improvements and betterments&rdquo; has a
        specific meaning: items a tenant installs at their own expense that become part of the building.
        When this concept is shoehorned into a residential condo policy, it creates a problem that few
        people anticipate.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        What Counts as an &ldquo;Improvement&rdquo;?
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under this language, if a prior owner (or the current owner) removed the original kitchen
        cabinets and installed new ones, those new cabinets are &ldquo;improvements&rdquo; &mdash;
        they are &ldquo;similar to tenant improvements and betterments.&rdquo; They would be covered
        under the unit owner&rsquo;s HO-6.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        But what if the cabinets are <strong>original to the condo</strong> &mdash; installed by the
        developer 30 years ago, never replaced, never upgraded? Those cabinets were not
        &ldquo;improved&rdquo; by anyone. They are not &ldquo;similar to tenant improvements.&rdquo;
        Under a strict reading of this policy language, original cabinets that have never been replaced
        might <em>not</em> be covered under the HO-6 at all. They may fall under the master policy
        (especially under a single-entity or all-in arrangement) or, in a worst-case scenario, they
        could fall into a gap where neither policy clearly covers them.
      </p>

      <CalloutBox variant="warning" title="The Original vs. Upgraded Distinction Matters">
        <p>
          If your unit still has original developer-installed finishes &mdash; cabinets, countertops,
          flooring &mdash; you need to understand whether your HO-6 covers them or whether they fall
          under the master policy. If your HO-6 uses &ldquo;improvements and betterments&rdquo; or
          &ldquo;tenant improvements&rdquo; language, original items that were never replaced may not
          qualify. Read your{' '}
          <Link href="/resources/declarations-page" className="text-[#2E74B5] hover:underline">
            declarations page
          </Link>{' '}
          and the dwelling coverage section of your HO-6 policy carefully.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why Your HO-6 Coverage Might Be Lower Than You Think (and Why That Might Be Fine)
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many condo owners are surprised when they look at their HO-6 declarations page and see a
        Coverage A (Dwelling) limit of $25,000 or $50,000. That seems dangerously low compared to what
        a homeowner with an HO-3 policy carries. But for some condo owners, it may actually be adequate.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your HOA&rsquo;s master policy covers the drywall, insulation, subfloor, plumbing, and
        wiring &mdash; and if your CC&amp;Rs assign those components to the association &mdash; then
        your HO-6 dwelling coverage only needs to cover what is <em>inside</em> those walls: flooring,
        cabinetry, countertops, paint, light fixtures, and any upgrades you have made. For a unit that
        has not been renovated, that might genuinely be $25,000&ndash;$50,000 in value.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        On the other hand, if you have done a major kitchen or bathroom remodel, or if your CC&amp;Rs
        place more responsibility on the unit owner, you may need significantly higher dwelling limits
        on your HO-6. The only way to know is to compare your CC&amp;Rs against your{' '}
        <Link href="/resources/loss-settlement-provisions" className="text-[#2E74B5] hover:underline">
          loss settlement provisions
        </Link>{' '}
        and coverage amounts.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When the HOA Does Not Step Up
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is where condo claims become genuinely difficult. The HOA is responsible for the drywall,
        insulation, subfloor, and other common-area components under the CC&amp;Rs and the master
        policy. Damage occurs. And the HOA <strong>decides not to file a claim</strong>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The HOA board may decide not to file because they want to avoid a rate increase, because the
        damage is below the master policy&rsquo;s deductible, or because the management company does
        not understand how condo claims work. The HOA has the right not to file a claim with their
        insurance carrier. But &mdash; and this is critical &mdash; <strong>the HOA&rsquo;s decision
        not to file a claim does not eliminate their responsibility to repair the damage</strong>. If
        the CC&amp;Rs assign drywall and insulation to the association, the association must repair
        them, whether they use insurance proceeds or association funds.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Detachment Problem: Who Pays to Access the Damage?
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Consider this real-world scenario: A{' '}
        <Link href="/resources/water-damage-claims" className="text-[#2E74B5] hover:underline">
          water leak
        </Link>{' '}
        damages the drywall and insulation behind your kitchen
        cabinets. Under the CC&amp;Rs, the cabinets are the unit owner&rsquo;s responsibility (covered
        by the HO-6), but the drywall and insulation are the HOA&rsquo;s responsibility (covered by
        the master policy). To access and repair the damaged drywall, the cabinets must be detached
        and removed.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Who pays for detaching and reinstalling the cabinets?
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        There are strong arguments both ways. The HOA can argue: &ldquo;The cabinets are your property
        under the CC&amp;Rs and your HO-6 policy. You need to remove them so we can access our
        drywall.&rdquo; The unit owner can argue: &ldquo;The only reason my cabinets need to come off
        the wall is because <em>your</em> drywall and insulation are damaged. If it were not for the
        HOA&rsquo;s damage, my cabinets would not need to move. The cost of detach and reset is a
        direct consequence of the HOA-covered damage.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In practice, this dispute often gets resolved by filing under both policies and letting each
        carrier determine what it will pay. But when the HOA refuses to file a claim at all, the unit
        owner is stuck in a position where they may need to pay for cabinet removal out of pocket
        just to let the HOA repair (or not repair) the drywall behind them.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The HOA Bureaucracy Problem
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Even when the HOA acknowledges responsibility, the process can grind to a halt. HOA boards
        meet monthly &mdash; sometimes quarterly. Decisions about insurance claims require board votes.
        The management company may not understand how damages are divided between the master policy
        and the unit owner&rsquo;s policy. The board may want to get three bids before authorizing
        any work. Months pass.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Meanwhile, the unit owner is living in a damaged unit. The drywall has not been replaced. They
        cannot paint their walls because there is no drywall to paint. They cannot reinstall their
        cabinets because the wall behind them has not been repaired. Their{' '}
        <Link href="/resources/policyholder-rights" className="text-[#2E74B5] hover:underline">
          rights as a policyholder
        </Link>{' '}
        under their own HO-6 are meaningless without the HOA completing their portion of the repairs
        first.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This creates a dilemma that no insurance policy cleanly resolves. The unit owner should not
        have to replace drywall that is the HOA&rsquo;s responsibility. But they also cannot put their
        life on hold indefinitely while the board debates, the management company delays, and the
        contractor bids expire.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Self-Repair Option (Proceed with Caution)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some unit owners, often with the advice of an attorney, decide to replace the drywall
        themselves after giving the HOA proper legal notice and a reasonable deadline to act. The
        process typically looks like this:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Document everything.</strong> Photograph the damage. Get a written scope of work
          from a contractor. Identify exactly which components are the HOA&rsquo;s responsibility
          per the CC&amp;Rs.
        </li>
        <li>
          <strong>Send a formal written demand.</strong> Notify the HOA board and management company
          in writing that specific common-area components need repair. Cite the relevant CC&amp;R
          provisions. Give a specific deadline (30 days is common, though your CC&amp;Rs or state
          law may specify a different period).
        </li>
        <li>
          <strong>Use Internal Dispute Resolution (IDR).</strong> In California, Civil Code
          &sect;5900&ndash;5920 requires HOAs to offer an IDR process. Use it. It creates a paper
          trail showing you attempted to resolve the matter before taking action.
        </li>
        <li>
          <strong>If the HOA still does not act, proceed with repairs and seek reimbursement.</strong> Keep
          every receipt, every photo, and every communication. You may need to pursue reimbursement
          through small claims court, mediation, or a civil action.
        </li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is not an ideal outcome. No one wants to pay for repairs that are not their
        responsibility and then fight to get reimbursed. But the alternative &mdash; living in a
        damaged unit for months or years while the HOA fails to act &mdash; is often worse.
      </p>

      <CalloutBox variant="tip" title="Get Legal Advice Before Self-Repairing HOA Components">
        <p>
          Before you repair common-area components that are the HOA&rsquo;s responsibility, consult
          an attorney who specializes in HOA law. In California, the prevailing party in a lawsuit
          to enforce CC&amp;R provisions may recover attorney&rsquo;s fees and costs. An attorney can
          help you structure the demand letter, the notice, and the repair in a way that maximizes your
          chances of reimbursement.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Condo Claims Work Differently by State
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The general principles &mdash; master policy vs. HO-6, governing documents controlling the
        split &mdash; are universal. But the details vary significantly by state.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        California
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Davis-Stirling Act (Civil Code &sect;&sect;4000&ndash;6150) governs condominium
        associations. The <strong>CC&amp;Rs</strong> are the primary document controlling which
        building components are covered by which policy. Civil Code &sect;4775 provides default
        maintenance, repair, and replacement rules: the association maintains common areas, and the
        owner maintains the separate interest and exclusive use common areas. But CC&amp;Rs can
        override these defaults. California also has robust dispute resolution requirements under
        Civil Code &sect;&sect;5900&ndash;5965, including mandatory IDR before litigation in many
        cases.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Florida
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Florida is unusually specific. Fla. Stat. &sect;718.111(11) requires the association&rsquo;s
        master policy to provide primary coverage for &ldquo;all portions of the condominium property
        as originally installed or replacement of like kind and quality, in accordance with the
        original plans and specifications.&rdquo; But the statute explicitly excludes items
        &ldquo;within the boundaries of the unit&rdquo; that serve only that unit, including
        &ldquo;floor, wall, and ceiling coverings, electrical fixtures, appliances, water heaters,
        water filters, built-in cabinets and countertops, and window treatments.&rdquo; Florida
        effectively puts those items on the unit owner by statute rather than leaving it to
        the CC&amp;Rs.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        New York
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        In New York &mdash; especially New York City, where condos and cooperatives are both common
        &mdash; the <strong>bylaws and proprietary lease</strong> control the coverage split.
        Anything &ldquo;inside the walls&rdquo; typically falls to the unit owner or shareholder,
        and anything outside the walls falls to the building. But the precise details &mdash; who
        is responsible for the drywall itself, the plumbing, the wiring &mdash; vary building by
        building based on the bylaws. There is no single statute that dictates the split the way
        Florida&rsquo;s does.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Texas
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under the Uniform Condominium Act (Tex. Prop. Code &sect;82.111), the association must insure
        common elements and units for at least 80% of replacement cost (100% is standard practice).
        Unit owners are responsible for insuring &ldquo;all wall and floor coverings, appliances, and
        all parts of the unit which are not common elements.&rdquo; Texas also allows the association
        to assess the deductible to a unit owner if the damage was caused by that owner, a guest, or
        an invitee.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Massachusetts
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Massachusetts tends to follow a &ldquo;studs-in&rdquo; or &ldquo;walls-in&rdquo; model
        where the trust or association&rsquo;s master policy covers the building structure and the
        unit owner is responsible for everything from the unfinished drywall surface inward. The
        master deed and trust documents control the specifics. Unit owners are often responsible for
        improvements and betterments made by any prior owner, not just the current owner &mdash; a
        detail that catches many buyers off guard.
      </p>

      <CalloutBox variant="tip" title="Ask for Three Documents Before You File">
        <p>
          Before filing a condo claim, obtain: (1) your CC&amp;Rs, declaration, or bylaws &mdash;
          specifically the insurance and maintenance provisions; (2) a certificate of insurance for
          the HOA&rsquo;s master policy showing the policy type (bare walls, single entity, or
          all-in); and (3) your own HO-6 policy, including the Coverage A dwelling language. If
          you cannot determine the split between the two policies from these documents, a public
          adjuster or HOA attorney can help.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Filing the Claim: Which Policy Goes First?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        In most cases, when damage affects both common-area components and unit-owner components,
        <strong> both policies need to be notified</strong>. This means two separate claims: one to
        the HOA (which should file under the master policy) and one to your own HO-6 carrier.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A common mistake &mdash; one that HOA management companies make frequently &mdash; is
        requiring the unit owner to file with their HO-6 carrier first and produce a denial before
        the HOA will consider filing under the master policy. This is backwards. The association has
        an independent duty to file claims for damage to common-area components, regardless of what
        the unit owner&rsquo;s carrier does. In California, the association is typically the named
        insured on the master policy, and claims for common-area damage should be filed by the
        association without waiting for the unit owner.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Loss Assessment Coverage: When the HOA&rsquo;s Deductible Hits You
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        HOA master policies often carry large deductibles &mdash; $10,000, $25,000, sometimes
        $100,000 or more, particularly in disaster-prone areas. When the HOA files a claim and the
        deductible is assessed, it is typically passed through to unit owners as a{' '}
        <strong>special assessment</strong>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your HO-6 policy likely includes <strong>loss assessment coverage</strong> &mdash; a provision
        that helps pay your share of these special assessments. Standard HO-6 policies typically
        include $1,000 in loss assessment coverage by default, but this can be increased by
        endorsement. If your HOA&rsquo;s master policy has a high deductible, consider increasing
        your loss assessment coverage to match or exceed the per-unit assessment amount.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Common Coverage Disputes in Condo Claims
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Condo claims generate{' '}
        <Link href="/resources/coverage-disputes" className="text-[#2E74B5] hover:underline">
          coverage disputes
        </Link>{' '}
        that are unique to multi-policy situations. Here are the most common:
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Overlapping coverage:</strong> Both the master policy and the HO-6 claim to cover
          (or disclaim coverage for) the same component. This is especially common with flooring,
          built-in cabinetry, and plumbing fixtures.
        </li>
        <li>
          <strong>Gap coverage:</strong> Neither policy clearly covers a damaged component &mdash;
          often because the CC&amp;Rs are ambiguous or because the &ldquo;improvement vs.
          original&rdquo; distinction is unclear.
        </li>
        <li>
          <strong>Subrogation disputes:</strong> If a unit owner&rsquo;s negligence caused the
          damage (e.g., a{' '}
          <Link href="/resources/water-damage-claims" className="text-[#2E74B5] hover:underline">
            water overflow
          </Link>{' '}
          from their unit damages common-area components), the master policy carrier may subrogate
          against the unit owner. Most well-drafted CC&amp;Rs include a waiver of subrogation among
          unit owners and the association, but not all do.
        </li>
        <li>
          <strong>Deductible disputes:</strong> The HOA passes its master policy deductible to the
          responsible unit owner. The unit owner disputes the assessment amount or their
          responsibility.
        </li>
        <li>
          <strong>Detach and reset costs:</strong> As discussed above, who pays to remove the unit
          owner&rsquo;s property to access HOA-covered components behind it.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Practical Tips for Condo Unit Owners
      </h2>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Read your CC&amp;Rs before you need them.</strong> Do not wait until you have a
          claim to figure out which policy covers which component. Read the insurance and maintenance
          sections now. Know what is common area, what is separate interest, and what is exclusive
          use common area.
        </li>
        <li>
          <strong>Understand your HO-6 dwelling language.</strong> Does it use &ldquo;improvements
          and betterments&rdquo; or &ldquo;tenant improvements&rdquo; language? If so, know that
          original components may not be covered under your dwelling limit.
        </li>
        <li>
          <strong>Match your HO-6 limits to your actual exposure.</strong> If the master policy
          covers drywall, insulation, and subfloor, your HO-6 dwelling limit may not need to be as
          high. But if you have done a $75,000 kitchen remodel, your $25,000 dwelling limit is
          grossly inadequate.
        </li>
        <li>
          <strong>Ask about the master policy deductible.</strong> A high deductible means a potential
          special assessment. Consider increasing your loss assessment coverage accordingly.
        </li>
        <li>
          <strong>File with both carriers.</strong> When damage crosses the line between common-area
          and unit-owner components, file claims under both policies. Do not let the HOA tell you
          to file with your carrier first.
        </li>
        <li>
          <strong>Document the HOA&rsquo;s inaction in writing.</strong> If the HOA is not acting on
          damage that is their responsibility, every communication should be in writing &mdash;
          email at minimum, certified letter for formal demands.
        </li>
        <li>
          <strong>Know your dispute resolution rights.</strong> In California, use the IDR process
          (Civil Code &sect;5900) and consider filing a complaint with the Department of Real Estate
          if the HOA is failing its fiduciary duties. Other states have comparable remedies.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When to Get Help
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Condo claims are inherently more complex than single-family home claims because they involve
        two policies, two insurers, a set of governing documents, and a governing board &mdash; none
        of which are under the unit owner&rsquo;s control. If any of the following apply, consider
        hiring a{' '}
        <Link href="/resources/public-adjuster" className="text-[#2E74B5] hover:underline">
          licensed Public Adjuster
        </Link>{' '}
        or consulting with an{' '}
        <Link href="/resources/when-to-hire-attorney" className="text-[#2E74B5] hover:underline">
          attorney
        </Link>:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>You cannot determine which policy covers which components of the damage.</li>
        <li>The HOA is refusing to file a claim or repair common-area damage.</li>
        <li>Your HO-6 carrier is denying coverage for items you believe are covered.</li>
        <li>The damage is significant (more than $10,000) and involves both policies.</li>
        <li>You are considering self-repairing common-area components due to HOA inaction.</li>
        <li>The HOA is attempting to assess you for a deductible you believe you do not owe.</li>
      </ul>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">Navigating a Condo Insurance Claim?</h3>
        <p className="text-gray-600 text-sm mb-4">
          Condo claims involving two policies and an unresponsive HOA are among the most frustrating
          for unit owners. We can review your CC&amp;Rs, your HO-6 policy, and the master policy
          to help you understand who owes what &mdash; and what to do when the HOA will not act.
        </p>
        <Link href="/contact" className="inline-block bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-6 py-3 rounded-lg transition-colors">
          Request a Free Claim Review &rarr;
        </Link>
      </div>

      <CalloutBox variant="legal" title="Important Notice">
        <p>
          This article is provided for general educational purposes only and does not constitute
          legal advice. Insurance policies, regulations, and case law can vary significantly based
          on individual circumstances. Consult a licensed attorney for advice about your specific
          situation.
        </p>
      </CalloutBox>
    </>
  )
}
