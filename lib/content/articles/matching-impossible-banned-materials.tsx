import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'When Matching Is Impossible: Banned Materials, Discontinued Products, and Custom Finishes',
  description:
    'What happens when your insurance company cannot restore your home to pre-loss condition because the original materials are banned by California law, discontinued by the manufacturer, or too custom to replicate — and what the carrier owes you.',
  summary:
    'When original materials are banned, discontinued, or too custom to replicate, the insurer still owes a reasonably uniform appearance, which may mean replacing larger undamaged areas or paying for a comparable alternative. Impossibility of an exact match does not excuse underpayment.',
}

export default function Content() {
  return (
    <>
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When the Original Cannot Be Replicated
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your insurance policy promises to restore your property to its pre-loss condition. But what
        happens when that is physically or legally impossible? What if the stain used on your cabinets
        in 1985 is now banned by the California Air Resources Board? What if the tile manufacturer
        went out of business a decade ago? What if your hand-carved woodwork was done by a craftsman
        who retired and no one can replicate it?
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        These are not hypothetical questions. They come up on claims constantly &mdash; especially in
        California homes built before modern environmental and building regulations. And insurers
        routinely try to use the impossibility as an excuse to do less, when the legal result is
        actually the opposite: they owe <em>more</em>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Legal Principle: Impossibility Expands the Scope, Not Reduces It
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California&apos;s Fair Claims regulations require the insurer to restore your property to a
        &ldquo;reasonable uniform appearance&rdquo; under 10 CCR &sect;2695.9(a)(2). When partial
        repair cannot achieve that appearance because the existing materials cannot be matched, the
        scope expands to include whatever additional work is necessary to create uniformity. The
        regulation does not say &ldquo;get as close as you can and walk away.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the only way to achieve a uniform appearance is to replace undamaged areas that won&apos;t
        match the new materials, the insurer owes for that replacement. If an entire set of cabinets
        must be replaced because one section was damaged and the rest cannot be matched, the insurer
        owes for the set. This is the{' '}
        <Link href="/resources/matching" className="text-blue-700 underline hover:text-blue-900">
          matching
        </Link>{' '}
        obligation at its most powerful.
      </p>

      <CalloutBox variant="tip" title="The Carrier's Contractor Admitting Failure Is Your Best Evidence">
        <p>
          When the insurer&apos;s own preferred contractor or vendor states in writing that they
          cannot match the existing materials, that admission is powerful evidence. It eliminates the
          &ldquo;genuine dispute&rdquo; defense because the insurer&apos;s own expert has confirmed
          the impossibility. Save every email, text, and written communication where a contractor
          acknowledges the match cannot be achieved.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Scenario 1: Materials Banned by California Law
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California has some of the strictest environmental regulations in the country. Many materials
        and chemicals that were standard when your home was built are now illegal:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>VOC-exceeding stains and finishes</strong> &mdash; California Air Resources Board
          regulations (17 CCR &sect;94500 et seq.) limit volatile organic compounds in architectural
          coatings. Stains and lacquers commonly used on pre-1990s woodwork exceeded current limits.
          The original finish cannot be legally replicated.
        </li>
        <li>
          <strong>Lead-based paint</strong> &mdash; homes built before 1978 often have lead-based
          paint. You cannot restore with lead paint, and removing existing lead paint during repairs
          triggers Cal/OSHA and EPA RRP Rule requirements that add cost.
        </li>
        <li>
          <strong>Asbestos-containing materials</strong> &mdash; pre-1980 textures, flooring, and
          roofing often contain asbestos. Matching these materials is illegal without licensed
          abatement (see our{' '}
          <Link href="/resources/asbestos-lead-claims" className="text-blue-700 underline hover:text-blue-900">
            asbestos and lead article
          </Link>).
        </li>
        <li>
          <strong>Certain wood preservatives</strong> &mdash; CCA (chromated copper arsenate) and
          other treatments used on decking and outdoor structures are now restricted or banned.
        </li>
        <li>
          <strong>Formaldehyde-exceeding products</strong> &mdash; California&apos;s CARB Phase 2
          standards (ATCM 93120) limit formaldehyde in composite wood products. Many older cabinets
          used materials that exceed current limits.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a carrier suggests using a banned material to achieve a match &mdash; or implies that
        you should accept a non-match because the legal alternative looks different &mdash; they are
        trying to make their problem your problem. The carrier cannot use illegality as an excuse to
        underpay. The cost to achieve a uniform appearance using legal materials is what they owe,
        even if that means replacing more than what was directly damaged.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Scenario 2: Discontinued Products
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Manufacturers discontinue products constantly. The specific tile, flooring, siding, roofing
        material, or fixture in your home may no longer be made. Common examples:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Ceramic and porcelain tile</strong> &mdash; specific patterns, colors, and sizes are
          discontinued every few years. A partial tile repair with non-matching replacements leaves a
          visible patchwork.
        </li>
        <li>
          <strong>Hardwood flooring species and grades</strong> &mdash; specific mill runs, plank widths,
          and finish treatments may not be reproducible. Even the same species changes color significantly
          with age.
        </li>
        <li>
          <strong>Siding profiles</strong> &mdash; Masonite, T1-11, and specific lap siding profiles
          from the 1970s-1990s are no longer manufactured. Partial replacement leaves visible
          differences in profile, texture, and weathering.
        </li>
        <li>
          <strong>Roofing materials</strong> &mdash; specific shingle lines, colors, and profiles are
          discontinued regularly. Even current shingles won&apos;t match weathered existing ones.
        </li>
        <li>
          <strong>Fixtures and hardware</strong> &mdash; matching cabinet handles, light fixtures, or
          plumbing fixtures from a discontinued line requires replacing the entire set.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Scenario 3: Custom and Artisan Work
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many California homes &mdash; especially those built in the 1960s through 1990s &mdash;
        feature custom finishes that were produced by specific craftsmen using techniques that are
        difficult or impossible to replicate at scale:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Hand-carved cabinets and millwork</strong> &mdash; custom-carved wood details cannot
          be reproduced by machine. Even finding a craftsman willing and able to replicate the work
          takes weeks or months and costs far more than &ldquo;book price&rdquo; in estimating
          software.
        </li>
        <li>
          <strong>Custom-matched stain and grain patterns</strong> &mdash; when wood throughout a home
          was stained from the same batch and has aged uniformly, introducing new wood creates an
          obvious mismatch regardless of stain choice.
        </li>
        <li>
          <strong>Plaster textures and decorative finishes</strong> &mdash; hand-applied plaster,
          Venetian plaster, and skip-trowel textures are unique to the craftsman who applied them.
          Partial repair always looks different.
        </li>
        <li>
          <strong>Custom countertops and stone</strong> &mdash; specific stone slabs from a particular
          quarry lot cannot be replicated. Even the same quarry produces visibly different material
          from different blocks.
        </li>
      </ul>

      <CalloutBox variant="warning" title="Xactimate Does Not Price Custom Work Accurately">
        <p>
          Xactimate&apos;s pricing database is built for standard, mass-produced materials and typical
          installation methods. When your claim involves hand-carved woodwork, custom fabrication, or
          artisan finishes, the Xactimate line items will grossly underestimate actual costs. The
          California Department of Insurance has specifically admonished carriers not to rely blindly
          on computer database pricing when actual market costs are higher. Your contractor&apos;s
          actual bid for the custom work &mdash; or a sub-bid from the specialty craftsman &mdash;
          is the proper basis for pricing.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What the Carrier Owes When Matching Is Impossible
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a match cannot be achieved through partial repair, the carrier&apos;s obligation does not
        disappear. It expands. Here is the hierarchy:
      </p>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Replace the entire system or set to achieve uniformity.</strong> If partial kitchen
          cabinets cannot match the family room and hallway cabinets, and the home was designed with
          matching woodwork throughout, the carrier may owe for replacement of all connected cabinetry
          to restore the home&apos;s character.
        </li>
        <li>
          <strong>Pay the actual cost of custom replication.</strong> If a craftsman can replicate the
          work but at a price far above Xactimate, the carrier owes the actual cost &mdash; not the
          software price.
        </li>
        <li>
          <strong>Pay for the closest achievable alternative.</strong> If exact replication is
          impossible, the carrier owes for the closest reasonable alternative that achieves a
          uniform appearance &mdash; which may be more expensive than the original.
        </li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        What the carrier does <em>not</em> get to do is pay for a partial, non-matching repair and
        call it done. A patchwork result that leaves your home looking obviously repaired is not
        &ldquo;pre-loss condition.&rdquo;
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Carriers Try to Minimize These Claims
      </h2>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>&ldquo;We&apos;ll pay for the damaged area only.&rdquo;</strong> They limit the
          scope to the directly damaged room or section, ignoring that the damage creates a matching
          problem with adjacent areas.
        </li>
        <li>
          <strong>&ldquo;The Xactimate price is fair.&rdquo;</strong> They insist on software pricing
          for work that requires specialty craftsmen charging 3-5x the database rate.
        </li>
        <li>
          <strong>&ldquo;Just stain it to match.&rdquo;</strong> They suggest refinishing undamaged
          areas to match new materials &mdash; which often damages the undamaged areas (sanding carved
          details destroys them) or produces a result that still doesn&apos;t match.
        </li>
        <li>
          <strong>&ldquo;The regulations only require a reasonable match.&rdquo;</strong> They
          misquote the regulation. It says &ldquo;reasonable uniform appearance&rdquo; &mdash; meaning
          the appearance must actually be uniform, and the methods to achieve it must be reasonable.
          A visible mismatch is not uniform regardless of what was attempted.
        </li>
        <li>
          <strong>&ldquo;That&apos;s betterment.&rdquo;</strong> They call the expanded scope an
          upgrade or betterment. But replacing undamaged cabinets to match new ones is not an upgrade
          &mdash; it is restoration to pre-loss condition. The home had matching cabinets before;
          matching cabinets after is not improvement.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Building Your Case
      </h2>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Document the original materials thoroughly.</strong> Photos from every angle, in
          consistent lighting. Close-ups showing grain patterns, textures, and finish details.
          Marketing materials from the original developer if available (brochures often describe
          custom features as selling points).
        </li>
        <li>
          <strong>Get the carrier&apos;s contractor on record.</strong> Ask them in writing whether
          they can achieve an exact match. If they say no, that admission is evidence. If they say
          yes and then fail after attempting samples, document the failed samples.
        </li>
        <li>
          <strong>Obtain specialty sub-bids.</strong> Get pricing from the actual craftsman or
          specialty subcontractor who would do the custom work. A cabinet maker&apos;s quote for
          hand-carved doors is the real price &mdash; not a line item in Xactimate.
        </li>
        <li>
          <strong>Research the regulatory prohibition.</strong> If the original material or method is
          now illegal, identify the specific California regulation (CARB, Cal/OSHA, SCAQMD, etc.)
          that prohibits its use. The carrier cannot legally instruct you to violate the law.
        </li>
        <li>
          <strong>Cite the matching regulation.</strong> Reference 10 CCR &sect;2695.9(a)(2) and the
          requirement for &ldquo;reasonable uniform appearance.&rdquo; Frame your demand around the
          regulation, not around preference.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The &ldquo;Pair and Set&rdquo; Connection
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many matching-impossibility claims also trigger the{' '}
        <Link href="/resources/pair-and-set" className="text-blue-700 underline hover:text-blue-900">
          pair and set clause
        </Link>{' '}
        in your policy. When cabinets throughout a home are part of a unified design &mdash; same
        wood species, same carving, same stain, installed at the same time as part of a cohesive
        aesthetic &mdash; they are a set. Damage to one portion of the set that cannot be repaired
        without affecting the value or functionality of the whole triggers set valuation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The pair-and-set framework comes from the policy itself, not from the Fair Claims
        regulations. Standard ISO HO-3 policy language addressing loss to a pair or set generally
        gives the carrier two options: (1) repair or replace any part to restore the pair or set
        to its value before the loss, or (2) pay the difference between the actual cash value of
        the property before the loss and after the loss. When replacement of one component reduces
        the value of the whole, the policy itself recognizes the reduction-in-value problem. The
        general fair-claims principle in 10 CCR &sect;2695.9(a)(2) reinforces this with the
        broader requirement of restoration to a reasonably uniform appearance. A home whose
        selling point was uniform custom woodwork loses value when one room has obviously
        different cabinets.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        A Note on This Information
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This article is based on real claim scenarios involving matching disputes on California
        properties with custom and legacy materials. It is educational and does not constitute legal
        advice. Every claim has unique facts. If your insurer is refusing to address a matching
        impossibility on your claim, consult a licensed{' '}
        <Link href="/resources/public-adjuster" className="text-blue-700 underline hover:text-blue-900">
          Public Adjuster
        </Link>{' '}
        or attorney in your jurisdiction.
      </p>
    </>
  )
}
