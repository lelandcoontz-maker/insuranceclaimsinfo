import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Functional Replacement Cost: When Your Insurer Pays for "Function" Instead of Quality',
  description:
    'Functional replacement cost policies let insurers substitute cheaper materials that serve the same "function" as the original. Learn why plaster-to-drywall is not a true functional equivalent, which states use these policies, and how to fight back.',
  summary:
    'A functional replacement cost policy lets the insurer pay to restore function using cheaper, modern materials rather than matching the original, which can shortchange you on older or custom homes. Know if you have this instead of true replacement cost.',
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
        Most homeowners expect their insurance to restore their property to the condition it was in
        before the loss. Standard{' '}
        <Link href="/resources/acv-rcv" className="text-[#2E74B5] hover:underline">
          replacement cost
        </Link>{' '}
        policies promise exactly that &mdash; repair or replacement with materials of &ldquo;like
        kind and quality.&rdquo; But there is a lesser-known valuation method called{' '}
        <strong>functional replacement cost</strong> that works differently. Under a functional
        replacement cost policy, the insurer does not pay to match what was there. Instead, it pays
        to restore the <em>function</em> of the damaged component using modern, typically cheaper,
        materials. The difference can cost policyholders tens of thousands of dollars.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        What Is Functional Replacement Cost?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Functional replacement cost is a valuation method found in some property insurance policies,
        most commonly applied to older homes with construction materials or methods that are no
        longer standard. Instead of paying the cost to repair or replace damaged components with
        identical materials, the insurer pays the cost to replace the damaged item with a modern
        equivalent that serves the same basic <em>function</em>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For example, if your home has original plaster walls and a covered loss destroys them, a
        standard replacement cost policy would pay to restore those walls with plaster. A functional
        replacement cost policy would pay to install drywall instead &mdash; because drywall
        &ldquo;functions&rdquo; as a wall surface, just like plaster does. The insurer pockets the
        difference between the plaster cost and the drywall cost.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        How It Differs from Standard Replacement Cost
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under a standard replacement cost policy, the insurer must pay to restore the property with
        materials of &ldquo;like kind and quality&rdquo; &mdash; that is, materials that match the
        original in type, grade, and quality. This is the standard described in most{' '}
        <Link href="/resources/loss-settlement-provisions" className="text-[#2E74B5] hover:underline">
          loss settlement provisions
        </Link>
        . If your home had plaster walls, the insurer pays for plaster. If it had slate roofing,
        the insurer pays for slate.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Functional replacement cost throws out the &ldquo;like kind and quality&rdquo; standard and
        replaces it with a &ldquo;functionally equivalent&rdquo; standard. The carrier argues: the
        purpose of a wall is to be a wall, so drywall does the job. The purpose of a roof is to
        keep water out, so asphalt shingles do the job. The purpose of plumbing is to carry water,
        so PEX does the job. Never mind that the original materials were superior in multiple
        measurable ways.
      </p>

      <CalloutBox variant="important" title="Key Distinction">
        <p>
          Standard replacement cost = &ldquo;like kind and quality&rdquo; (match what was there).
          Functional replacement cost = &ldquo;functionally equivalent&rdquo; (cheaper modern
          substitute that performs the same basic role). The difference between these two standards
          can be worth tens of thousands of dollars on a single claim.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        The Plaster vs. Drywall Problem
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The most common example used to explain functional replacement cost is replacing plaster
        with drywall. Carriers treat this as the textbook case of a legitimate functional
        substitution. But is drywall actually the &ldquo;functional equivalent&rdquo; of plaster?
        A close examination of the two materials reveals that it is not &mdash; not even close.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Sound Deadening
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Plaster walls provide significantly greater sound insulation than drywall. Traditional
        three-coat plaster over wood lath achieves a Sound Transmission Class (STC) rating
        substantially higher than standard half-inch drywall. The density and mass of plaster
        naturally absorb and block sound transmission between rooms and from outside. Homeowners
        who have lived in both plaster and drywall homes notice the difference immediately &mdash;
        plaster homes are noticeably quieter. If &ldquo;function&rdquo; includes acoustic
        performance, drywall is objectively inferior.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Durability and Lifespan
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Plaster walls are extraordinarily durable. Properly applied lime-based plaster can last
        100 years or more &mdash; there are plaster walls in homes built in the 1800s that remain
        in excellent condition today. Drywall, by contrast, has a practical lifespan of roughly
        30 to 50 years before it begins to deteriorate, develop cracks, or suffer moisture damage
        that plaster would have resisted. Replacing a material with a 100-year lifespan with one
        that lasts 30 to 50 years is not a &ldquo;functional equivalent&rdquo; &mdash; it is a
        downgrade. For more on how insurers handle material lifespan in claims, see our article on{' '}
        <Link href="/resources/betterment-and-improvement" className="text-[#2E74B5] hover:underline">
          betterment and improvement
        </Link>
        .
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Fire Resistance
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Plaster is noncombustible. It does not burn, it does not produce toxic smoke, and it does
        not contribute fuel to a fire. Traditional lime plaster actually performs better under fire
        conditions than drywall &mdash; it holds together longer and does not fail as quickly at
        high temperatures. Standard drywall, while classified as fire-resistant, is significantly
        less fire-resistant than plaster. The paper facing on drywall can ignite, and the gypsum
        core loses its structural integrity at lower temperatures than plaster. Replacing a
        noncombustible wall system with a less fire-resistant one is a meaningful reduction in
        the building&apos;s passive fire protection.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Passive Climate Control (Thermal Mass)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Plaster has substantial thermal mass. It absorbs heat during warm periods and releases it
        during cool periods, helping to regulate indoor temperatures naturally. Homes with plaster
        walls tend to stay cooler in summer and warmer in winter without relying as heavily on
        mechanical HVAC systems. Drywall has very little thermal mass and provides essentially no
        passive climate regulation. In an era where energy efficiency is increasingly valued, this
        is a functional difference that matters &mdash; both for comfort and for utility costs.
      </p>

      <CalloutBox variant="warning" title="The &ldquo;Function&rdquo; Argument Cuts Both Ways">
        <p>
          If the insurer defines &ldquo;function&rdquo; narrowly as &ldquo;it is a wall surface,&rdquo;
          then virtually any wall material is functionally equivalent to any other. But if
          &ldquo;function&rdquo; is read on its face to include all of the functions that the
          material actually performs &mdash; sound deadening, fire resistance, durability, and
          climate control &mdash; then drywall does not meet the standard. The policy language
          says &ldquo;functional equivalent,&rdquo; not &ldquo;vaguely similar purpose.&rdquo;
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Other Common Functional Substitutions Carriers Attempt
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The plaster-to-drywall swap is just one example. Carriers applying functional replacement
        cost language routinely attempt these substitutions:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Slate roofing &rarr; asphalt shingles.</strong> Slate roofs can last 75 to 200
          years, are noncombustible, and resist wind, hail, and rot. Asphalt shingles last 15 to
          30 years, are combustible, and degrade under UV exposure. The cost difference can be
          $15,000 to $50,000 or more on a typical home.
        </li>
        <li>
          <strong>Hardwood flooring &rarr; laminate.</strong> Genuine hardwood can be refinished
          multiple times over its lifespan and can last the life of the home. Laminate cannot be
          refinished, is susceptible to moisture damage, and typically lasts 15 to 25 years. For
          how insurers handle flooring disputes, see our article on{' '}
          <Link href="/resources/matching" className="text-[#2E74B5] hover:underline">
            matching
          </Link>
          .
        </li>
        <li>
          <strong>Copper plumbing &rarr; PEX.</strong> Copper pipes have a proven lifespan of 50
          to 70 years and are recyclable. PEX is newer, less expensive, and easier to install,
          but has a shorter track record and is susceptible to degradation from UV exposure and
          chlorine.
        </li>
        <li>
          <strong>Solid wood cabinetry &rarr; particleboard/MDF.</strong> Solid wood cabinets are
          more durable, more resistant to moisture, and can be refinished. Particleboard and MDF
          cabinets swell when exposed to moisture and cannot be meaningfully repaired.
        </li>
        <li>
          <strong>Clay tile roofing &rarr; concrete tile or asphalt.</strong> Clay tile is
          extremely durable (50 to 100+ years), noncombustible, and provides superior thermal
          performance. Concrete tile is heavier and less durable; asphalt is not comparable at all.
        </li>
        <li>
          <strong>Lath-and-plaster ceilings &rarr; drywall ceilings.</strong> The same arguments
          about walls apply to ceilings, with the addition that ornamental plaster ceilings
          (medallions, crown details, decorative textures) are impossible to replicate with
          drywall.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Why Functional Replacement Cost Is Rare in California
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you are a California homeowner, you may have never seen a functional replacement cost
        provision in your policy. There are several reasons these policies are uncommon in
        California, all connected to the state&apos;s unusually strong consumer protection
        framework for insurance.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Proposition 103 and Rate/Form Regulation
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        California&apos;s Proposition 103, passed by voters in 1988, requires that all insurance
        rates and policy forms be approved by the California Department of Insurance (CDI) before
        they can be used. This prior-approval system gives CDI the authority to reject policy forms
        that are unfair, deceptive, or inadequate. A functional replacement cost provision &mdash;
        which effectively allows the insurer to substitute inferior materials while calling them
        &ldquo;equivalent&rdquo; &mdash; faces significant scrutiny under this standard. CDI has
        historically been skeptical of policy provisions that reduce coverage in ways that may not
        be apparent to the average consumer at the time of purchase.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        California&apos;s Fair Claims Settlement Practices Regulations
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        California&apos;s Fair Claims Settlement Practices Regulations (10 CCR &sect; 2695.1 et seq.)
        impose detailed requirements on how insurers handle claims. These regulations require
        insurers to fairly and thoroughly investigate claims, to not misrepresent policy provisions,
        and to pay what is owed under the policy. The regulations complement Insurance Code
        &sect; 790.03, which prohibits unfair claims practices. A carrier attempting to use
        functional replacement cost language to substitute inferior materials could face regulatory
        action for unfair settlement practices, particularly under the &ldquo;like kind and
        quality&rdquo; standard that California regulators expect. For more on these protections,
        see our article on{' '}
        <Link href="/resources/california-fair-claims" className="text-[#2E74B5] hover:underline">
          California&apos;s Fair Claims Settlement Practices
        </Link>
        .
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The California Standard Fire Policy
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        California Insurance Code &sect; 2070 establishes the standard fire policy, which sets
        minimum coverage terms that all fire insurance policies in the state must include. While
        this statute allows for endorsements that broaden coverage, it limits the ability of insurers
        to narrow the base coverage below certain thresholds. Functional replacement cost language
        that effectively reduces the insurer&apos;s obligation below the &ldquo;like kind and
        quality&rdquo; standard may conflict with the statutory minimums.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Consumer Protection Culture
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        California has a well-established consumer protection culture in insurance regulation.
        The state&apos;s{' '}
        <Link href="/resources/bad-faith" className="text-[#2E74B5] hover:underline">
          bad faith
        </Link>{' '}
        laws are among the strongest in the nation, and the CDI actively monitors carrier practices.
        Insurers operating in California are aware that using policy language that could be
        characterized as deceptive or misleading invites regulatory complaints, CDI market conduct
        examinations, and bad faith litigation. The combination of regulatory scrutiny, an engaged
        policyholder advocacy community, and strong consumer protection case law creates an
        environment where functional replacement cost provisions simply are not worth the risk for
        most carriers.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Where Functional Replacement Cost Is More Common
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Functional replacement cost provisions are more prevalent in states with less stringent
        insurance regulation and in specific market segments:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Midwestern and Southern states.</strong> States with large inventories of older
          homes and less restrictive insurance regulation &mdash; including parts of the Midwest,
          the South, and the Mid-Atlantic &mdash; see functional replacement cost policies more
          frequently. States like Ohio, Indiana, Illinois, Pennsylvania, and the Carolinas have
          significant numbers of pre-war homes where plaster walls, slate roofs, and other
          traditional materials are common, making these provisions particularly impactful.
        </li>
        <li>
          <strong>Surplus lines and non-admitted carriers.</strong> Non-admitted insurers (surplus
          lines carriers) that operate outside the standard regulatory framework are more likely
          to offer functional replacement cost policies because they face less form-filing
          scrutiny.
        </li>
        <li>
          <strong>Older and historic homes.</strong> Carriers specifically writing coverage for
          older homes &mdash; those built before 1950 &mdash; are the most frequent users of
          functional replacement cost provisions. These policies are sometimes marketed as
          &ldquo;affordable&rdquo; coverage for older homes, with the lower premium reflecting the
          reduced coverage.
        </li>
        <li>
          <strong>File-and-use states.</strong> States where insurers can file policy forms and
          begin using them without waiting for regulatory approval give carriers more flexibility
          to introduce functional replacement cost language.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        The Policy Language Argument: &ldquo;Functional Equivalent&rdquo; on Its Face
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here is the central argument that policyholders and their advocates should be making: even
        if a policy contains a functional replacement cost provision, the substitution must actually
        be a <em>functional equivalent</em>. That term has meaning, and it does not mean &ldquo;a
        cheaper thing that serves a broadly similar purpose.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under basic principles of{' '}
        <Link href="/resources/policy-interpretation" className="text-[#2E74B5] hover:underline">
          insurance policy interpretation
        </Link>
        , policy language is read according to its plain, ordinary meaning. A &ldquo;functional
        equivalent&rdquo; should mean a replacement that performs all of the same functions as the
        original, not just one of them. Plaster does not just function as a wall surface. It also
        functions as a sound barrier, a fire barrier, a moisture buffer, and a thermal mass. Drywall
        does none of those things as well as plaster. It is not functionally equivalent on the face
        of the language &mdash; it is functionally inferior.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The same analysis applies to every substitution on the list above. Asphalt shingles do not
        perform all the functions of slate. Laminate does not perform all the functions of hardwood.
        PEX does not perform all the functions of copper. If the policy says &ldquo;functional
        equivalent,&rdquo; the policyholder is entitled to a replacement that actually performs all
        of the functions of the original material &mdash; not a stripped-down version that performs
        only the most basic one.
      </p>

      <CalloutBox variant="tip" title="Ambiguity Favors the Policyholder">
        <p>
          In most states, ambiguous insurance policy language is construed against the insurer that
          drafted it (the doctrine of <em>contra proferentem</em>). If &ldquo;functional
          equivalent&rdquo; is ambiguous &mdash; and it is, because reasonable people disagree about
          what functions count &mdash; then the policyholder&apos;s interpretation controls. The
          insurer wrote the policy; if it wanted to specify that only one narrow function (e.g.,
          &ldquo;serves as a wall surface&rdquo;) was required, it could have said so. It did not.
          Learn more in our article on{' '}
          <Link href="/resources/policy-interpretation" className="text-[#2E74B5] hover:underline">
            how insurance policies are interpreted
          </Link>
          .
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        How to Fight Functional Replacement Cost Valuations
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your policy contains a functional replacement cost provision and your insurer is
        substituting inferior materials, you are not without options. Here is how to push back:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        1. Read the Exact Policy Language
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Start by reading the actual functional replacement cost provision in your policy. Does it
        say &ldquo;functional equivalent&rdquo;? &ldquo;Functionally similar&rdquo;?
        &ldquo;Serves the same purpose&rdquo;? The specific wording matters. If it says
        &ldquo;functional equivalent,&rdquo; you have a strong argument that the replacement
        must match all functions, not just one.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        2. Document the Functional Differences
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Create a detailed comparison of the original material and the proposed substitute.
        Document every measurable difference: fire rating, STC rating, lifespan, thermal
        performance, moisture resistance, and any other relevant characteristic. Get this
        information from manufacturer specifications, building science resources, and industry
        standards. The more specific and quantifiable your comparison, the harder it is for the
        carrier to dismiss.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        3. Argue the Plain Language of the Policy
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Put it in writing: the proposed substitution is not a functional equivalent because the
        original material performs functions X, Y, and Z that the proposed substitute does not.
        The policy says &ldquo;functional equivalent,&rdquo; not &ldquo;cheapest available
        alternative.&rdquo; Cite the specific functions the substitute fails to match. If the
        insurer&apos;s interpretation creates an ambiguity, invoke the contra proferentem doctrine.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        4. Check for Ordinance or Law Implications
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        In some cases, building codes may actually require the original material or something
        equivalent. For example, fire codes in certain jurisdictions may require noncombustible wall
        materials in specific locations. If the original plaster was there partly because of a code
        requirement, replacing it with drywall may trigger an{' '}
        <Link href="/resources/ordinance-law" className="text-[#2E74B5] hover:underline">
          ordinance or law
        </Link>{' '}
        issue &mdash; the carrier may be required to pay for the code-compliant material regardless
        of the functional replacement cost provision.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        5. Request Appraisal or File a Complaint
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the carrier will not budge, you may have the right to invoke the{' '}
        <Link href="/resources/appraisal" className="text-[#2E74B5] hover:underline">
          appraisal
        </Link>{' '}
        provision in your policy. Appraisal resolves disputes over the amount of loss. Alternatively
        &mdash; or in addition &mdash; file a complaint with your state department of insurance. In
        California, a complaint to the CDI can trigger an investigation into whether the carrier&apos;s
        settlement practices comply with the Fair Claims regulations.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        6. Hire a Public Adjuster
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A licensed Public Adjuster can review your policy language, document the functional
        differences between the original and proposed materials, and negotiate with the carrier
        on your behalf. This is especially valuable when the carrier is relying on a policy
        provision that the policyholder does not fully understand. Having a professional who
        handles these disputes regularly can make the difference between accepting an inadequate
        settlement and receiving what you are actually owed.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        The Bottom Line
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Functional replacement cost provisions allow insurers to substitute cheaper modern
        materials for original construction components, and they are marketed as a way to make
        coverage more &ldquo;affordable&rdquo; for older homes. But the savings come at the
        policyholder&apos;s expense &mdash; literally. When a loss occurs, the policyholder
        discovers that their slate roof will be replaced with asphalt, their plaster walls with
        drywall, and their hardwood floors with laminate.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The strongest defense against functional replacement cost is the policy language itself.
        If the policy promises a &ldquo;functional equivalent,&rdquo; then hold the carrier to
        that standard. A replacement that is less durable, less fire-resistant, less sound-deadening,
        and less thermally efficient is not functionally equivalent &mdash; it is functionally
        inferior. The words on the face of the policy matter, and policyholders should not accept
        substitutions that do not meet the standard the insurer itself wrote.
      </p>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Dealing with a Functional Replacement Cost Dispute?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          A Public Adjuster can review your policy language, document the functional differences
          between original and proposed materials, and fight for the settlement you are owed.
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
          This article is provided for general educational purposes only and does not constitute
          legal advice. Insurance policies, regulations, and case law can vary significantly based
          on individual circumstances. Consult a licensed attorney for advice about your specific
          situation. If you need a referral to an attorney experienced in insurance coverage disputes,
          a licensed Public Adjuster may be able to assist.
        </p>
      </CalloutBox>

      <hr className="my-8 border-gray-300" />
      <p className="text-sm text-gray-500 italic">
        Written by Leland Coontz, licensed California Public Adjuster. For more information about
        how your policy&apos;s valuation method affects your claim, see our guides on{' '}
        <Link href="/resources/loss-settlement-provisions" className="text-[#2E74B5] hover:underline">
          loss settlement provisions
        </Link>{' '}
        and{' '}
        <Link href="/resources/replacement-cost-vs-guaranteed" className="text-[#2E74B5] hover:underline">
          replacement cost vs. guaranteed replacement cost
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
