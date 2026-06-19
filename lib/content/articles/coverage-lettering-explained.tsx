import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Coverage A, B, C, D: How Property Insurance Lettering Works (and Where Forms Differ)',
  description:
    'The Coverage A/B/C/D system most readers see on a declarations page comes from the standard ISO Homeowners form. Other policy forms — Dwelling Fire (DP), condo (HO-6), renters (HO-4), commercial — handle the letters differently. Here is what each form actually means, especially in California.',
  summary:
    'Coverage A/B/C/D is shorthand from ISO Homeowners forms. Dwelling Fire policies split Loss of Use into separate Coverage D and Coverage E. Condo, renters, and commercial policies use different schemes. Knowing which form you are on changes how a claim gets calculated.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational commentary by a Licensed California Public
          Adjuster. It is not legal advice. For legal questions about a specific
          policy or claim, an insured should consult a licensed California attorney.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        Most California homeowners and landlords see the labels &ldquo;Coverage A,&rdquo; &ldquo;Coverage B,&rdquo; &ldquo;Coverage C,&rdquo; and &ldquo;Coverage D&rdquo; on the{' '}
        <Link href="/resources/declarations-page" className="text-[#2E74B5] underline hover:text-blue-900">
          declarations page
        </Link>{' '}
        of a property policy and assume the letters mean the same thing on every policy. They do not. The letters come from the standard ISO Homeowners (HO) policy forms &mdash; the HO-3 is the most common in California &mdash; and they carry over to most personal lines property policies with one important exception: the Dwelling Fire (DP) forms used for rentals, vacant homes, and many California FAIR Plan policies split the coverages differently. The letters look the same on the dec page, but the underlying coverage agreement is not.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This article walks through what each letter typically means, where the schemes diverge, and what those differences look like in real California claims &mdash; especially for landlords, condo owners, mobile-home owners, and anyone whose property is insured under the California FAIR Plan.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Shared Core: A, B, and C
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Across nearly every ISO personal-lines property form &mdash; Homeowners (HO-2, HO-3, HO-5, HO-6, HO-7, HO-8) and Dwelling Fire (DP-1, DP-2, DP-3) &mdash; the first three letters mean the same thing:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Coverage A &mdash; Dwelling.</strong> The structure itself, including attached components.</li>
        <li><strong>Coverage B &mdash; Other Structures.</strong> Detached structures on the residence premises &mdash; sheds, detached garages, fences, retaining walls, mailboxes, lampposts.</li>
        <li><strong>Coverage C &mdash; Personal Property.</strong> Furniture, clothing, electronics, and household goods (and, in the DP forms, only when the insured elects this optional coverage).</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        These three letters are consistent enough that an insured reading a dec page can rely on the A/B/C ordering without checking the underlying form. The divergence starts at Coverage D.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Where the Forms Diverge: Coverage D
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Homeowners and Dwelling Fire forms handle living-expense coverage in fundamentally different ways. This is the most consequential difference in the lettering system and the source of most of the confusion that costs landlord and FAIR Plan policyholders money.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Homeowners (HO) Forms &mdash; Coverage D Is a Single Combined Coverage
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        On the HO-2, HO-3, HO-5, HO-6, HO-7, and HO-8 forms, <strong>Coverage D is &ldquo;Loss of Use&rdquo;</strong> &mdash; a single insuring agreement that bundles two distinct benefits:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Additional Living Expense (ALE).</strong> Pays the necessary increase in living expenses when the insured cannot live in the home due to a covered loss &mdash; hotel, rental house, meals above normal, pet boarding, and similar costs. See the{' '}
          <Link href="/resources/ale-basics-what-is-covered" className="text-[#2E74B5] underline hover:text-blue-900">
            ALE basics article
          </Link>.
        </li>
        <li><strong>Fair Rental Value (FRV).</strong> Pays the lost rental income on a portion of the home that the insured was renting out &mdash; a garage apartment, a guest room, an ADU &mdash; when that portion is unrentable due to the covered loss.</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Both ALE and FRV share a single Coverage D limit on an HO form. Section II of the homeowners policy then continues with <strong>Coverage E &mdash; Personal Liability</strong> and <strong>Coverage F &mdash; Medical Payments to Others</strong>.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Dwelling Fire (DP) Forms &mdash; Coverage D and Coverage E Are Split
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        On the DP-1, DP-2, and DP-3 forms, living-expense coverage is broken into <strong>two separate lettered coverages with separate limits</strong>:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Coverage D &mdash; Fair Rental Value.</strong> The landlord&apos;s lost rental income when a covered loss makes the property unrentable.</li>
        <li><strong>Coverage E &mdash; Additional Living Expense.</strong> The extra cost of living elsewhere if the insured was occupying part of the property.</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Below Coverage E, the base DP forms do <em>not</em> include lettered Coverage F or G. Personal liability and medical payments are not built into the base DP forms at all &mdash; an insured who wants liability coverage on a Dwelling Fire policy must add it by separate endorsement, typically called the Personal Liability Supplement.
      </p>

      <CalloutBox variant="info" title="HO vs. DP Lettering at a Glance">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-3 py-2 text-left">Letter</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Homeowners (HO)</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Dwelling Fire (DP)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2"><strong>A</strong></td>
                <td className="border border-gray-300 px-3 py-2">Dwelling</td>
                <td className="border border-gray-300 px-3 py-2">Dwelling</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2"><strong>B</strong></td>
                <td className="border border-gray-300 px-3 py-2">Other Structures</td>
                <td className="border border-gray-300 px-3 py-2">Other Structures</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2"><strong>C</strong></td>
                <td className="border border-gray-300 px-3 py-2">Personal Property</td>
                <td className="border border-gray-300 px-3 py-2">Personal Property (optional)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2"><strong>D</strong></td>
                <td className="border border-gray-300 px-3 py-2"><strong>Loss of Use (combined ALE + FRV)</strong></td>
                <td className="border border-gray-300 px-3 py-2"><strong>Fair Rental Value only</strong></td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2"><strong>E</strong></td>
                <td className="border border-gray-300 px-3 py-2">Personal Liability</td>
                <td className="border border-gray-300 px-3 py-2"><strong>Additional Living Expense</strong></td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2"><strong>F</strong></td>
                <td className="border border-gray-300 px-3 py-2">Medical Payments to Others</td>
                <td className="border border-gray-300 px-3 py-2"><em>Not used in base form</em></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm">
          Coverage D means different things on different forms. An insured who sees &ldquo;Coverage D&rdquo; on a Dwelling Fire dec page is looking at a Fair Rental Value limit only &mdash; not ALE.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Homeowners Form Family Beyond HO-3
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The HO-3 is the most common policy in California, but it is not the only one. Other HO forms keep the A/B/C/D lettering but modify what falls under each letter.
      </p>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>HO-4 (Renters).</strong> A tenant does not own the structure, so there is no Coverage A or Coverage B. The HO-4 effectively starts at Coverage C (Personal Property) and Coverage D (Loss of Use), followed by Section II liability coverages. Renters reading their dec page will not find an &ldquo;A&rdquo; line at all.
        </li>
        <li>
          <strong>HO-5 (Comprehensive).</strong> Same A/B/C/D structure as the HO-3, but Coverage C (Personal Property) is written on an open-perils basis rather than the HO-3&apos;s named-perils basis. The letters look identical on the dec page; the underlying coverage trigger is broader.
        </li>
        <li>
          <strong>HO-6 (Condo Owner).</strong> Coverage A on a condo policy is <em>not</em> the full building &mdash; the HOA&apos;s master policy covers the building shell. Instead, the HO-6 Coverage A is a limited &ldquo;dwelling&rdquo; that covers the unit&apos;s interior improvements, fixtures, and additions and alterations the owner is responsible for. Coverage B is minimal or absent. Condo owners commonly under-buy Coverage A because they assume the HOA policy covers more than it actually does &mdash; the gap is one of the most consequential coverage problems in California condo claims.
        </li>
        <li>
          <strong>HO-7 (Mobile/Manufactured Home).</strong> Same A/B/C/D framework adapted for mobile and manufactured housing. Relevant for California mobile-home parks and many ADU situations.
        </li>
        <li>
          <strong>HO-8 (Older/Modified).</strong> Same lettering as the HO-3 but with a modified loss-settlement clause &mdash; typically functional replacement cost rather than full replacement cost. Common on older California homes where replacement-cost valuation exceeds market value.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Dwelling Fire Wrinkles That Catch Landlords
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The DP forms are written for landlords, vacant properties, and other situations where a standard HO policy is unavailable or inappropriate. Within the DP family, the three forms vary on perils covered, loss settlement basis, and built-in coverages.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        ALE Is Built Into DP-2 and DP-3 but Endorsement-Only on DP-1
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        On the standard ISO Dwelling Fire program, <strong>Coverage E (Additional Living Expense) is included in the base DP-2 and DP-3 forms</strong> but is available only by separate endorsement on the DP-1. An insured on a basic DP-1 policy who assumes ALE is automatic may discover after a loss that none was purchased.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Fair Rental Value Sublimits Differ by Form
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under the standard ISO DP-1, Coverage D (Fair Rental Value) is typically limited to <strong>10% of the Coverage A dwelling limit</strong>. Under the standard ISO DP-2 (DP 00 02) and DP-3 (DP 00 03), <strong>Coverage D (Fair Rental Value) and Coverage E (Additional Living Expense) share a combined limit of 20% of Coverage A</strong> &mdash; it is one 20% pot allocated between FRV and ALE, not 20% each. The exact percentage and whether it is &ldquo;additional&rdquo; insurance or part of the dwelling limit can vary by carrier and form edition, so the policy declarations and form text should be the controlling reference.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        No Lettered Coverage F or G in the Base DP Form
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The base DP forms stop at Coverage E. There is no Coverage F or G for liability or medical payments. An insured who wants those coverages adds them by endorsement &mdash; commonly through a Personal Liability Supplement that brings Coverage L (Personal Liability) and Coverage M (Medical Payments to Others) onto the policy. On the dec page these may appear as separately captioned lines rather than as &ldquo;F&rdquo; or &ldquo;G.&rdquo;
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Forms That Do Not Use the A/B/C/D Letters
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Two categories of California property coverage do not use the homeowner lettering system at all.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The California Standard Form Fire Insurance Policy (Cal. Ins. Code &sect;2071)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The California statutory standard fire policy at{' '}
        <Link href="/resources/california-standard-fire-policy" className="text-[#2E74B5] underline hover:text-blue-900">
          Cal. Ins. Code &sect;2071
        </Link>{' '}
        is the legal baseline that property forms in California incorporate by reference for the basic fire insuring agreement. The &sect;2071 statutory text itself does not use the A/B/C/D shorthand &mdash; it uses functional language like &ldquo;the property described&rdquo; and &ldquo;the insured.&rdquo; The Coverage A/B/C/D structure is a layer built on top of &sect;2071 by the HO and DP form architecture, not by the statute itself.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For coverage disputes that turn on the statutory text &mdash; for example, the one-year suit limitation, the appraisal provision, or the proof of loss requirement &mdash; the controlling language is &sect;2071&apos;s, not the carrier&apos;s lettered coverage description.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Commercial Property (ISO CP) Forms
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        ISO commercial property policies are built on the Commercial Property (CP) program and abandon the A/B/C/D lettering entirely. A commercial property policy uses functional coverage names &mdash; <strong>Building, Business Personal Property, Personal Property of Others, Business Income, Extra Expense</strong> &mdash; rather than letters. Insureds reading a commercial dec page should expect to see those names, not Coverage A through F. For the full taxonomy of commercial property forms, see{' '}
        <Link href="/resources/commercial-policy-explained" className="text-[#2E74B5] underline hover:text-blue-900">
          Understanding Your Commercial Property Policy
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The California Angle: FAIR Plan and Landlord Claims
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Two California-specific situations require careful attention to the lettering system.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        California FAIR Plan Dwelling Policies
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The California FAIR Plan is a residual market mechanism that provides basic property coverage in high-risk fire areas where admitted carriers will not write. FAIR Plan dwelling policies are written on the FAIR Plan&apos;s own proprietary forms approved by the California Department of Insurance &mdash; they are <em>not</em> literally ISO DP-3 forms. Functionally, they parallel a dwelling-fire–style basic property policy: named perils, a structure-focused insuring agreement, and no liability coverage in the base form. Many FAIR Plan policies separate Fair Rental Value from Additional Living Expense the way the DP family does, but the exact lettering, sublimits, and form provisions are FAIR Plan–specific and should be read from the actual policy documents.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insureds on a FAIR Plan policy commonly pair it with a Difference-in-Conditions or wrap-around policy from an admitted carrier to fill the gaps the FAIR Plan does not cover &mdash; liability, theft, water damage, and similar perils.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The FAIR Plan&apos;s residential dwelling program covers 1&ndash;4 unit residential buildings (owner-occupied or rented). Larger residential buildings (5+ units, apartment complexes), mixed-use buildings, and true commercial property cross over to the FAIR Plan&apos;s separate <strong>commercial</strong> program, which uses a different proprietary Commercial Property policy. For more on the commercial side, see{' '}
        <Link href="/resources/commercial-policy-explained" className="text-[#2E74B5] underline hover:text-blue-900">
          Understanding Your Commercial Property Policy
        </Link>.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Landlord Clients on Dwelling Fire Coverage
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A landlord whose rental property is insured on a DP form has two distinct living-expense coverages that must be tracked separately after a loss:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Coverage D &mdash; Fair Rental Value.</strong> Pays the rental income the landlord would have collected if the property had remained habitable. This is the principal lost-income coverage on a DP policy.</li>
        <li><strong>Coverage E &mdash; Additional Living Expense.</strong> Applies only if the landlord was occupying part of the property at the time of the loss (for example, an owner-occupied duplex). Pays the landlord&apos;s own increased cost of living.</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Mixing these up &mdash; treating Coverage D as ALE or treating Coverage E as FRV &mdash; is one of the most common mistakes in landlord claim handling. Each has its own limit; depleting one does not draw from the other.
      </p>

      <CalloutBox variant="important" title="Edition and Carrier Variation">
        <p>
          ISO has issued multiple editions of the HO and DP forms (HO-3 editions include 1991, 2000, 2011, and 2022; the DP family has similar revisions). Many California carriers file proprietary manuscripted versions of these forms with the California Department of Insurance and may modify sublimits, coverage definitions, or the lettering. The framework in this article reflects the standard ISO baseline. For any specific claim, the controlling reference is the actual policy form, edition, and endorsements shown on the declarations page.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why This Matters in a Real Claim
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The lettering system is not academic. Three patterns appear repeatedly in California claims where the underlying form is misunderstood:
      </p>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>The condo owner whose Coverage A is too low.</strong> An HO-6 Coverage A covers only the unit interior. Owners who assume the HOA master policy covers improvements often find a multi-tens-of-thousands gap after a loss.
        </li>
        <li>
          <strong>The landlord whose adjuster only paid ALE.</strong> On a DP policy, the loss-of-rent claim runs through Coverage D (Fair Rental Value), not Coverage E (Additional Living Expense). An owner who does not occupy the property has nothing to claim under Coverage E. If the carrier&apos;s payment summary only references &ldquo;ALE&rdquo; or &ldquo;Coverage E,&rdquo; the lost rent itself may still be owed under Coverage D.
        </li>
        <li>
          <strong>The FAIR Plan insured who expected an HO-style policy.</strong> FAIR Plan policies are basic-fire policies with limited perils and limited extensions. Insureds who assume FAIR Plan coverage parallels an HO-3 are surprised to find that water damage, theft, and liability are not covered and must be sourced separately.
        </li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        For a deeper look at how carriers can manipulate the boundary between Coverage A and Coverage B on a homeowners policy, see{' '}
        <Link href="/resources/coverage-a-vs-coverage-b" className="text-[#2E74B5] underline hover:text-blue-900">
          Coverage A vs. Coverage B: When Insurers Reclassify Your Dwelling
        </Link>.
      </p>

      <CalloutBox variant="tip" title="Reading Your Own Declarations Page">
        <p>
          Before relying on what the letters mean in any general article &mdash; including this one &mdash; an insured should read the actual policy form number and edition shown on the declarations page (for example, &ldquo;HO 00 03 10 11&rdquo; for an ISO HO-3 2011 edition, or &ldquo;DP 00 03 12 02&rdquo; for an ISO DP-3 2002 edition). The form number and edition determine which coverages, sublimits, and definitions apply. The dec page lettering is a summary; the form text is the contract.
        </p>
      </CalloutBox>
    </>
  )
}
