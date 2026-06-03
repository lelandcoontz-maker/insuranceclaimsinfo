import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'
import { QABlock } from '@/components/content/QABlock'

export const meta = {
  title:
    'When the Building Is Covered but Your Personal Property Is Not: Understanding Contents Coverage Gaps',
  description:
    'The standard HO-3 homeowner policy covers your dwelling on an open-perils basis but limits personal property to named perils only. Learn where the Coverage A vs. Coverage C gap creates uncovered losses and how to protect yourself.',
  summary:
    'A standard HO-3 covers the dwelling on an open-perils basis but limits personal property to named perils, so some belongings losses fall through the gap. Know where Coverage A and Coverage C diverge and consider broader contents coverage.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is written by a California Licensed Public Adjuster for informational
          purposes only. Insurance policies vary by carrier, state, and endorsement. Always read
          your specific policy language and consult with a licensed professional before making
          coverage decisions.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        One of the most misunderstood features of the standard homeowner&rsquo;s policy is the
        difference in how it covers the building versus how it covers the things inside the building.
        Most policyholders assume that if their home is covered for a particular type of loss, their
        personal property is too. That assumption is wrong &mdash; and it results in denied contents
        claims that catch people completely off guard.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The gap exists because the most common homeowner&rsquo;s policy in the United States &mdash;
        the ISO HO-3 &mdash; uses two fundamentally different coverage structures for the building
        and for personal property. Understanding this gap is the first step toward protecting
        yourself.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Fundamental Coverage A vs. Coverage C Peril Difference
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The HO-3 policy form is sometimes called a &ldquo;special form&rdquo; or &ldquo;all
        risk&rdquo; policy, but that label only tells half the story. It is &ldquo;all risk&rdquo;
        for the building. It is not &ldquo;all risk&rdquo; for your personal property.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Coverage A &mdash; Dwelling (Open Perils)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Coverage A on a standard HO-3 is written on an <strong>open-perils</strong> basis. This
        means it covers <em>every</em> cause of loss <em>except</em> those specifically excluded in
        the policy. If the cause of loss is not listed in the exclusions section, the building damage
        is covered. The burden is on the insurer to prove an exclusion applies. This is the broadest
        form of property coverage available on a standard residential policy.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Coverage C &mdash; Personal Property (Named Perils Only)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Coverage C on the same HO-3 policy is written on a <strong>named-perils</strong> basis.
        This means it covers personal property <em>only</em> when the damage is caused by one of
        the 16 perils specifically listed in the policy. If the cause of loss is not one of those 16
        perils, the contents are not covered &mdash; period. The burden is on the policyholder to
        prove the loss was caused by one of the named perils.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The 16 named perils under Coverage C of the standard HO-3 are:
      </p>
      <ol className="list-decimal pl-6 space-y-1 text-gray-700 mb-6">
        <li>Fire or lightning</li>
        <li>Windstorm or hail</li>
        <li>Explosion</li>
        <li>Riot or civil commotion</li>
        <li>Aircraft</li>
        <li>Vehicles</li>
        <li>Smoke</li>
        <li>Vandalism or malicious mischief</li>
        <li>Theft</li>
        <li>Falling objects</li>
        <li>Weight of ice, snow, or sleet</li>
        <li>Accidental discharge or overflow of water or steam</li>
        <li>Sudden and accidental tearing apart, cracking, burning, or bulging of a steam or hot water heating system, air conditioning, or automatic fire protective sprinkler system, or appliance for heating water</li>
        <li>Freezing of a plumbing, heating, air conditioning, or automatic fire protective sprinkler system, or household appliance</li>
        <li>Sudden and accidental damage from artificially generated electrical current</li>
        <li>Volcanic eruption (other than earthquake, land shock waves, or tremors)</li>
      </ol>

      <CalloutBox variant="important" title="The Burden of Proof Shifts">
        <p>
          Under Coverage A (open perils), the <strong>insurer</strong> must prove an exclusion
          applies to deny the claim. Under Coverage C (named perils), the{' '}
          <strong>policyholder</strong> must prove the loss was caused by one of the 16 listed
          perils. This is a fundamental shift in who carries the burden &mdash; and it matters
          enormously in ambiguous losses.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        This dual structure means there is an entire category of losses where the building damage is
        covered but the contents damage is not. Any cause of loss that is not excluded under
        Coverage A <em>and</em> is not one of the 16 named perils under Coverage C falls into this
        gap. That is not a theoretical problem &mdash; it happens in real claims constantly.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Real-World Examples of the Gap
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Coverage A/Coverage C peril gap is not an abstract concept. Here are situations where
        policyholders discover the hard way that their building is covered but their personal
        property is not.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Water Leaks from Defective Connections
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A washing machine supply hose fails at the wall connection, and water flows across the
        laundry room floor for hours before being discovered. The water damages the flooring,
        subfloor, baseboards, and drywall. Under Coverage A (open perils), the building damage is
        covered &mdash; water damage from a defective connection is not excluded. But the personal
        property damaged by that same water &mdash; shoes in a nearby closet, boxes of clothing on
        the floor, a rug &mdash; is only covered if the water qualifies as an &ldquo;accidental
        discharge or overflow of water or steam&rdquo; under the named perils list. If the insurer
        argues the leak was gradual rather than sudden, or that the connection was not part of a
        &ldquo;plumbing system,&rdquo; the contents claim can be denied even while the building
        claim is paid.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For more on how the{' '}
        <Link href="/resources/accidental-discharge-overflow" className="text-blue-700 underline hover:text-blue-900">
          accidental discharge peril
        </Link>{' '}
        works and its limitations, see our dedicated article on that coverage.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Vehicle Impact on a Commercial Building
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A car crashes through the front wall of a liquor store. The building damage is covered under
        the commercial property policy. But what about the inventory? On a DP-1 or similar
        named-perils policy, &ldquo;vehicle impact&rdquo; may be a named peril for the building but
        the contents coverage may operate under a different or more restrictive peril list. Even on
        a BOP (Business Owner&rsquo;s Policy), the building and business personal property sections
        may not mirror each other on every peril. The shelving that collapsed is building damage.
        The bottles of liquor that shattered are contents &mdash; and whether they are covered
        depends on the specific peril list governing the contents section.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Mysterious Disappearance vs. Theft
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A homeowner discovers that a piece of jewelry is missing from a bedroom dresser. Under
        Coverage A (open perils), if there were signs of a break-in &mdash; a forced lock, a broken
        window &mdash; the structural damage to the building is covered. But under Coverage C
        (named perils), the &ldquo;theft&rdquo; peril requires evidence of theft, not just that
        something is gone. If there is no evidence of forced entry and the policyholder simply
        cannot find the item, the insurer can deny the contents portion of the claim on the grounds
        that &ldquo;mysterious disappearance&rdquo; is not the same as theft. Many policies
        explicitly exclude mysterious disappearance even within the theft peril.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Earth Movement and Settling
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A hillside home experiences soil movement that damages the foundation and shifts the
        structure. Under California&rsquo;s{' '}
        <Link href="/resources/efficient-proximate-cause" className="text-blue-700 underline hover:text-blue-900">
          efficient proximate cause
        </Link>{' '}
        doctrine, if a covered peril (such as water intrusion from a broken pipe) set the earth
        movement in motion, the building damage may be covered even though earth movement itself is
        excluded. But the personal property damaged by the settling &mdash; cracked china in a
        display cabinet, items that fell from shelves, a television knocked off a stand &mdash; may
        not be covered because earth movement is not one of the 16 named perils under Coverage C.
        The &ldquo;falling objects&rdquo; peril requires that the object fall from outside the
        building, not that items inside the home topple due to structural movement.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Vermin and Animal Damage
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Raccoons enter an attic and tear through insulation, ductwork, and drywall. Under Coverage A
        (open perils), animal damage to the building is not universally excluded &mdash; many
        policies exclude damage by birds, rodents, insects, and vermin, but raccoons may not qualify
        as &ldquo;vermin&rdquo; under the policy language. If the building damage is covered, the
        personal property destroyed by the same animals &mdash; holiday decorations stored in the
        attic, clothing, stored documents &mdash; must still fit one of the 16 named perils to be
        covered. Animal damage is not a named peril under Coverage C.
      </p>

      <CalloutBox variant="warning" title="Same Water, Same Event, Different Answers">
        <p>
          In a single water loss, you can have the building claim paid in full while the contents
          claim is denied entirely. The water that damaged your floors and drywall is the same water
          that damaged your shoes and books &mdash; but the coverage analysis is completely
          different for each.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The HO-5 Difference: Open Perils for Everything
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The HO-5 policy form &mdash; sometimes called a &ldquo;comprehensive form&rdquo; &mdash;
        solves the Coverage A/Coverage C peril gap by providing <strong>open-perils coverage for
        both the dwelling and personal property</strong>. Under an HO-5, your contents are covered
        for every cause of loss except those specifically excluded, just like your building.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is a significant upgrade. With an HO-5:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          The burden of proof stays on the insurer for both building <em>and</em> contents claims.
          The insurer must identify an exclusion &mdash; you do not have to prove the loss matches
          a named peril.
        </li>
        <li>
          Ambiguous or unusual losses that would be denied under Coverage C named perils are covered
          unless specifically excluded.
        </li>
        <li>
          The gap between building coverage and contents coverage is eliminated.
        </li>
        <li>
          Contents losses from causes like accidental water damage, power surges, or animal damage
          no longer require the policyholder to shoehorn the loss into one of 16 rigid categories.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        HO-5 policies cost more than HO-3 policies &mdash; typically 5 to 15 percent more in
        premium &mdash; but the broader contents coverage can be worth thousands of dollars in a
        single claim. If you own high-value personal property, collectibles, electronics, or
        anything that would be difficult to replace, the HO-5 form is worth the additional premium.
        Ask your agent whether an HO-5 is available for your property.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a deeper comparison of policy types and what each form covers, see our{' '}
        <Link href="/resources/declarations-page" className="text-blue-700 underline hover:text-blue-900">
          guide to reading your declarations page
        </Link>.
      </p>

      <CalloutBox variant="tip" title="Check Your Policy Form Number">
        <p>
          Look at your{' '}
          <Link href="/resources/declarations-page" className="text-blue-700 underline hover:text-blue-900">
            declarations page
          </Link>.
          The policy form number will tell you whether you have an HO-3 (special form &mdash;
          named perils on contents) or an HO-5 (comprehensive form &mdash; open perils on
          contents). If you see &ldquo;HO 00 03,&rdquo; you have the peril gap. If you see
          &ldquo;HO 00 05,&rdquo; your contents are covered on an open-perils basis.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Stale-Dated Goods and Business Personal Property
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The peril gap is not limited to residential policies. In commercial claims, the relationship
        between building coverage and business personal property (BPP) coverage creates its own
        version of the same problem &mdash; with an additional wrinkle involving perishable goods
        and business closure.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        On a BOP (Business Owner&rsquo;s Policy) or a standalone commercial property policy, the
        building and BPP sections may have different covered-peril lists, different sub-limits, and
        different conditions. Even when the building and BPP are both covered for the same peril,
        the contents loss can extend far beyond the items physically damaged by the event.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        The Stale-Dated Inventory Problem
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Consider this scenario: a vehicle crashes through the front of a convenience store. The
        building damage is obvious and covered. The items on the shelves near the point of impact
        are destroyed and covered. But what about the chips, beverages, dairy products, and
        packaged foods on the other shelves &mdash; the ones the vehicle never touched?
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the store is closed for three months while the building is repaired, those items will pass
        their sell-by dates. Chips go stale. Dairy expires. Beverages pass their best-by dates and
        can no longer be sold. The inventory is a total loss &mdash; not because the vehicle damaged
        those items, but because the building closure caused by the vehicle impact made those items
        unsaleable.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Whether this stale-dated inventory is covered depends on whether the policy includes
        &ldquo;loss of perishable stock&rdquo; coverage, &ldquo;spoilage&rdquo; provisions, or
        similar endorsements. Some commercial policies cover perishable goods that become
        unsaleable due to a covered loss to the building. Others do not. The policyholder must
        read the specific policy language and understand whether the contents coverage extends to
        consequential losses caused by the building closure.
      </p>

      <CalloutBox variant="info" title="Document Everything on the Shelves">
        <p>
          If your business suffers a covered loss that will require an extended closure,
          immediately photograph and inventory all perishable goods with their expiration dates.
          This documentation is critical to proving the stale-dated loss when you file the contents
          portion of your claim. Do not discard expired inventory until the insurer has documented
          it.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Depreciation Is Applied to Personal Property
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Even when personal property is covered, the amount the insurer pays depends on how
        depreciation is calculated. Depreciation on contents claims is one of the most frequently
        disputed aspects of the entire claims process &mdash; and one of the areas where insurers
        most commonly shortchange policyholders.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Depreciation Should Be Item-Specific
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Personal property is depreciated based on the age, condition, and useful life of each item
        at the time of loss. A 20-year-old sofa has a different useful life than a 2-year-old
        laptop. A cast iron skillet may have decades of useful life remaining. A pair of running
        shoes might have two years. Depreciation must reflect these differences.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Watch for carriers applying a <strong>blanket depreciation rate</strong> to all contents
        rather than depreciating each category appropriately. A carrier that applies 50 percent
        depreciation across the board to every item on a contents list is not performing a good
        faith evaluation of each item&rsquo;s remaining useful life. That is a red flag, and it
        should be challenged. For guidance on fighting back, see our article on{' '}
        <Link href="/resources/excessive-depreciation" className="text-blue-700 underline hover:text-blue-900">
          excessive depreciation
        </Link>.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Labor Should Not Be Depreciated
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is a critical point that many insurers get wrong: <strong>labor costs should not be
        depreciated</strong>. The cost to install, assemble, mount, or hang a replacement item is
        the same regardless of whether the item being replaced was one year old or twenty years old.
        Labor does not wear out. It does not age. It does not lose value over time. A carpenter
        charges the same hourly rate to install a new bookshelf whether the old one was brand new or
        decades old.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your insurer is depreciating the labor component of your contents claim, push back
        immediately. In California, this practice has been specifically addressed by the courts. For
        a detailed explanation, see our article on{' '}
        <Link href="/resources/labor-depreciation" className="text-blue-700 underline hover:text-blue-900">
          labor depreciation
        </Link>.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        ACV vs. RCV on Contents
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you have a replacement cost value (RCV) policy, contents are paid in two stages. First,
        the insurer pays the actual cash value (ACV), which is the replacement cost minus
        depreciation. After you actually replace the items and submit proof of purchase, the insurer
        pays the remaining recoverable depreciation (the &ldquo;holdback&rdquo;). If you have an
        ACV-only policy, you receive only the depreciated value. Our{' '}
        <Link href="/resources/acv-rcv" className="text-blue-700 underline hover:text-blue-900">
          ACV vs. RCV guide
        </Link>{' '}
        explains both payment structures in detail.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Special Limits (Sub-Limits) on Personal Property Categories
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Even after you confirm that your contents loss is covered under a named peril and calculate
        the depreciation, there is one more layer that can reduce your recovery: sub-limits. The
        standard HO-3 policy imposes internal dollar caps on certain categories of personal
        property. These caps apply per occurrence, regardless of how much total Coverage C you
        carry.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Common sub-limits on the standard ISO HO-3 include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Jewelry, watches, furs, precious and semi-precious stones:</strong> $1,500 total
          for theft losses
        </li>
        <li>
          <strong>Firearms and related equipment:</strong> $2,500 total for theft losses
        </li>
        <li>
          <strong>Silverware, silver-plated ware, goldware, gold-plated ware, platinumware,
          and pewterware:</strong> $2,500 total for theft losses
        </li>
        <li>
          <strong>Business property on the premises:</strong> $2,500 total
        </li>
        <li>
          <strong>Business property off the premises:</strong> $500 total
        </li>
        <li>
          <strong>Money, bank notes, bullion, coins:</strong> $200 total
        </li>
        <li>
          <strong>Securities, accounts, deeds, letters of credit, tickets:</strong> $1,500 total
        </li>
        <li>
          <strong>Watercraft including trailers, equipment, and motors:</strong> $1,500 total
        </li>
        <li>
          <strong>Trailers and semi-trailers not used with watercraft:</strong> $1,500 total
        </li>
        <li>
          <strong>Electronic data processing equipment and media in a home office:</strong> $5,000
          total (though this limit varies significantly by carrier)
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        These limits apply regardless of what the items are actually worth. If you own $30,000 in
        jewelry and it is stolen, your standard HO-3 pays $1,500. The remaining $28,500 is your
        loss. The only way to overcome sub-limits is to <strong>schedule</strong> individual items on
        the policy &mdash; adding them with specific descriptions and agreed values through an
        endorsement or inland marine floater.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a complete breakdown of sub-limits, how they work, and how scheduling protects you, see
        our detailed guide on{' '}
        <Link href="/resources/special-limits-of-liability" className="text-blue-700 underline hover:text-blue-900">
          special limits of liability
        </Link>.
      </p>

      <CalloutBox variant="warning" title="Sub-Limits Apply Even on Total Losses">
        <p>
          If your home is destroyed in a fire and you file a total loss contents claim, the
          sub-limits still apply to each category. You do not get more than $1,500 for stolen
          jewelry or $200 for cash just because the entire house burned down. These caps are
          absolute unless the items were individually scheduled on the policy before the loss.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The &ldquo;Like Kind and Quality&rdquo; Standard
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When personal property is covered, the policy owes for replacement with items of
        &ldquo;like kind and quality&rdquo; &mdash; not identical brand, not the same model number,
        but comparable quality and functionality. This standard applies to the replacement cost
        calculation and determines what the insurer must pay.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In practice, this means a 10-year-old 55-inch Samsung television is replaced with a
        current-model 55-inch television of comparable quality. Not the cheapest 55-inch TV on the
        market. Not the most expensive. A TV that provides the same quality of picture, the same
        features, and the same level of construction as what you had &mdash; adjusted for current
        technology.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Watch for insurers substituting with inferior-quality items to reduce the claim. A solid
        wood dining table is not replaced with a particle board table, even if both seat six people.
        A stainless steel refrigerator is not replaced with a plastic-finish model, even if both
        have the same cubic footage. The insured has the right to replacement with items of
        comparable quality, and &ldquo;like kind and quality&rdquo; means exactly that.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your carrier is substituting inferior replacements, document the original item&rsquo;s
        quality with purchase records, photos, and product specifications. Present comparable
        current-market replacements and insist on the &ldquo;like kind and quality&rdquo; standard.
        A licensed{' '}
        <Link href="/resources/public-adjuster" className="text-blue-700 underline hover:text-blue-900">
          Public Adjuster
        </Link>{' '}
        can help ensure you receive proper replacement values.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Protect Yourself
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Coverage A/Coverage C peril gap is a design feature of the HO-3, not a bug. It exists
        because insurers charge less for named-perils coverage than open-perils coverage &mdash; and
        the HO-3&rsquo;s lower premium reflects the narrower contents protection. But understanding
        the gap gives you options.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Upgrade to an HO-5.</strong> If your carrier offers the HO-5 form, the additional
          premium eliminates the peril gap entirely. This is the single most effective step you can
          take.
        </li>
        <li>
          <strong>Add an open-perils contents endorsement.</strong> Some carriers offer an
          endorsement that upgrades Coverage C from named perils to open perils without changing the
          entire policy form. Ask your agent if this is available.
        </li>
        <li>
          <strong>Schedule high-value items.</strong> Scheduling provides agreed-value, open-perils
          coverage for specific items &mdash; overcoming both the sub-limit problem and the
          named-perils limitation for those items.
        </li>
        <li>
          <strong>Read your{' '}
          <Link href="/resources/exclusions" className="text-blue-700 underline hover:text-blue-900">
            exclusions
          </Link>{' '}
          section carefully.</strong> Know what is excluded under Coverage A and what perils are
          listed under Coverage C. You cannot protect yourself from gaps you do not know exist.
        </li>
        <li>
          <strong>Document your personal property now.</strong> Use our{' '}
          <Link href="/resources/contents-inventory-guide" className="text-blue-700 underline hover:text-blue-900">
            contents inventory guide
          </Link>{' '}
          to create a pre-loss inventory. If you ever need to file a contents claim, having a
          detailed inventory with photos, receipts, and values will dramatically improve your
          recovery.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What to Do If Your Contents Claim Is Denied
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your insurer covers the building damage but denies the contents claim, do not accept the
        denial without examining the specific basis. The insurer must provide a written explanation
        identifying which peril they contend does not apply and why. Review that denial against the
        actual policy language &mdash; not a summary, not a brochure, but the policy itself.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Consider these questions:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Does the loss actually fall within one of the 16 named perils, even if the insurer
          characterizes it differently? Insurers sometimes misclassify the cause of loss to avoid
          coverage.
        </li>
        <li>
          Does your policy have an endorsement that modifies the Coverage C peril list? Some
          endorsements add perils or broaden coverage in ways the base policy does not.
        </li>
        <li>
          Is there an efficient proximate cause argument? In California, if a covered peril set in
          motion an unbroken chain of events leading to the contents loss, the{' '}
          <Link href="/resources/efficient-proximate-cause" className="text-blue-700 underline hover:text-blue-900">
            efficient proximate cause
          </Link>{' '}
          doctrine may bring the loss within coverage.
        </li>
        <li>
          Did the insurer properly investigate before denying? Under California regulations, the
          insurer must conduct a thorough investigation before denying any claim. A denial based on
          assumption rather than investigation may violate the California Fair Claims Settlement
          Practices Regulations.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a comprehensive guide to your rights when a claim is denied, see our article on{' '}
        <Link href="/resources/contents-claims" className="text-blue-700 underline hover:text-blue-900">
          personal property and contents claims
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Bottom Line
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The standard HO-3 homeowner&rsquo;s policy treats your building and your personal property
        as two fundamentally different coverage grants. Your building gets the broadest protection
        available &mdash; open perils with the burden on the insurer. Your personal property gets
        the narrower protection &mdash; named perils with the burden on you. That gap is real, it
        is common, and it catches policyholders by surprise in the middle of the most stressful
        events of their lives.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Understanding the gap before you have a loss is the best way to close it. Review your
        policy form. Ask your agent about the HO-5 or an open-perils contents endorsement. Schedule
        your high-value items. And if you are in the middle of a claim where the building is covered
        but the contents are not, do not accept the denial at face value &mdash; examine the peril
        list, the policy endorsements, and the actual cause of loss before conceding anything.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4 mt-10">
        Frequently Asked Questions
      </h2>
      <QABlock pairs={[
        {
          question: 'What is the fundamental difference between dwelling and contents coverage on a standard policy?',
          answer: 'On the standard HO-3, Coverage A (Dwelling) is open perils — it covers every cause of loss except those specifically excluded, and the insurer bears the burden of proving an exclusion applies. Coverage C (Personal Property) is named perils — it covers personal property only when the damage is caused by one of 16 specifically listed perils, and the policyholder bears the burden of proving the loss matches one of those perils. The HO-3 is sometimes called an "all risk" policy, but that\'s only half true: it\'s all-risk for the building, not for the contents.',
        },
        {
          question: 'What are the 16 named perils for personal property under an HO-3?',
          answer: "Fire or lightning; windstorm or hail; explosion; riot or civil commotion; aircraft; vehicles; smoke; vandalism or malicious mischief; theft; falling objects; weight of ice, snow, or sleet; accidental discharge or overflow of water or steam; sudden and accidental tearing apart, cracking, burning, or bulging of a heating, AC, or sprinkler system; freezing of plumbing, heating, AC, or sprinkler systems; sudden and accidental damage from artificially generated electrical current; and volcanic eruption (other than earthquake or land shock waves). Any cause of loss not on that list is not covered under Coverage C — even if the same event causes covered damage to the building.",
        },
        {
          question: "What's an example of building covered but contents not covered?",
          answer: 'Several common scenarios. A washing machine supply hose leak — building damage covered under open-perils Coverage A, but shoes and clothing damaged by the same water may be denied if the insurer argues the leak was gradual rather than "sudden" or that the hose was not part of a "plumbing system." Earth movement triggered by a covered peril — under efficient proximate cause the building damage is covered, but cracked china that fell from a shelf is not covered because earth movement isn\'t a named peril. Raccoon damage to attic — building damage often covered, but holiday decorations stored in the attic aren\'t, because animal damage isn\'t a named peril. Mysterious disappearance of jewelry without forced entry — even if the building shows damage, the contents loss isn\'t covered because "theft" requires evidence of theft, not just that something is gone.',
        },
        {
          question: 'How does the HO-5 policy form close this gap?',
          answer: "An HO-5 (sometimes called a comprehensive form) provides open-perils coverage for both the dwelling and personal property — so the burden of proof stays on the insurer for both, and ambiguous or unusual contents losses that would be denied under the HO-3's 16 named perils are covered unless specifically excluded. HO-5 typically costs 5–15% more in premium, but the broader contents coverage can be worth thousands in a single claim. Check your declarations page: \"HO 00 03\" is the standard HO-3 with the peril gap; \"HO 00 05\" is the comprehensive form without it. Some carriers also offer an endorsement that upgrades Coverage C to open perils without changing the entire policy form.",
        },
        {
          question: "Why shouldn't labor be depreciated on contents claims?",
          answer: "Labor costs don't wear out, don't age, and don't lose value over time. The cost to install, assemble, mount, or hang a replacement item is the same regardless of whether the item being replaced was one year old or twenty years old. A carpenter charges the same hourly rate to install a new bookshelf whether the old one was brand new or decades old. If your insurer is depreciating the labor component of your contents claim, push back immediately — in California this practice has been specifically addressed by the courts. Also watch for carriers applying a single blanket depreciation rate across all contents rather than depreciating each item by its specific age, condition, and useful life; that pattern is a red flag for a non–good-faith evaluation.",
        },
        {
          question: 'What should I do if my contents claim is denied but the building claim is paid?',
          answer: "Don't accept the denial without examining the specific basis. The insurer must provide a written explanation identifying which peril they contend does not apply and why. Review the denial against the actual policy language — not a summary or brochure. Ask: does the loss actually fall within one of the 16 named perils even if the insurer characterized it differently (insurers sometimes misclassify the cause to avoid coverage)? Does your policy have an endorsement that modifies the Coverage C peril list? Is there an efficient proximate cause argument — did a covered peril set in motion the chain of events leading to the contents loss? Did the insurer actually investigate before denying, or rely on assumption (a denial based on assumption may violate California's Fair Claims Settlement Practices Regulations)?",
        },
      ]} />

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
