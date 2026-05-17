import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'What Does My Homeowner Policy Actually Cover?',
  description:
    'A plain-language walkthrough of what your homeowners insurance covers — dwelling, other structures, personal property, loss of use, and liability — plus common misconceptions about what is and is not included.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most people buy homeowners insurance, file it away, and never read it until something goes
        wrong. Then they pull it out of a drawer and discover that the document is 40 pages of dense
        language written by lawyers for lawyers. This guide breaks down the standard homeowners
        policy structure so you know what you actually bought.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The most common homeowners policy in the United States is the HO-3, sometimes called the
        &ldquo;special form.&rdquo; If you own a single-family home, this is almost certainly what
        you have. The HO-3 divides your coverage into distinct sections, each with its own dollar
        limit and its own rules. Understanding those sections is the foundation of understanding
        your claim.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Coverage A &mdash; Dwelling
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Coverage A pays to repair or replace the physical structure you live in. This includes the
        walls, roof, floors, built-in appliances, plumbing, electrical systems, HVAC, and anything
        permanently attached to the building. An attached garage is part of Coverage A. So is a
        built-in dishwasher, hardwired light fixtures, and built-in cabinetry.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The dollar limit on your{' '}
        <Link href="/resources/declarations-page" className="text-blue-700 underline hover:text-blue-900">
          declarations page
        </Link>{' '}
        next to Coverage A is supposed to represent the full cost to rebuild your home from the
        ground up. Not the market value. Not what you paid for the house. The cost to rebuild it
        today, with current labor rates and material prices. If that number is too low, you could
        face a shortfall when you need it most.
      </p>

      <CalloutBox variant="tip" title="Check Your Coverage A Limit">
        <p>
          Construction costs have risen dramatically in recent years. If your Coverage A limit has
          not been updated to reflect current rebuilding costs, you may be significantly
          underinsured. Ask your agent for a replacement cost estimate, not a market value
          estimate. The two numbers are different.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Coverage B &mdash; Other Structures
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Coverage B covers structures on your property that are not attached to the main dwelling.
        Detached garages, sheds, fences, retaining walls, driveways, swimming pools, gazebos, and
        detached guest houses all fall under Coverage B.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The default limit is usually 10 percent of your Coverage A amount. If your dwelling limit
        is $500,000, you have $50,000 for other structures. That sounds like a lot until you price
        out replacing a detached garage, a pool, 200 feet of fencing, and a concrete driveway. If
        you have significant detached structures, check whether that 10 percent is enough.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Coverage C &mdash; Personal Property (Contents)
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Coverage C pays to repair or replace your belongings &mdash; furniture, clothing,
        electronics, kitchen items, tools, books, art, and everything else you own that is not
        permanently attached to the building. If you can pick it up and carry it out of the house,
        it is probably personal property.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The default limit is typically 50 to 75 percent of Coverage A. But there is a critical
        catch: certain categories of personal property have sublimits &mdash; caps within the cap.
        For example, your policy might limit jewelry to $1,500 total, firearms to $2,500, cash to
        $200, and business property on premises to $2,500. These sublimits are listed in the policy
        form (not always on the dec page), and they are frequently far below what people actually
        own. If you have a $10,000 engagement ring and a $1,500 jewelry sublimit, you are
        underinsured by $8,500 unless you purchased a scheduled personal property endorsement.
      </p>

      <CalloutBox variant="warning" title="Contents Are Named-Perils Only">
        <p>
          On a standard HO-3, your personal property is covered only for specific listed perils
          (fire, theft, windstorm, etc.) while your dwelling is covered for all risks unless
          specifically excluded. This is a major difference. See our guide on{' '}
          <Link href="/resources/named-perils-vs-open-perils" className="text-blue-700 underline hover:text-blue-900">
            named perils vs. open perils
          </Link>{' '}
          for details on why this matters.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Coverage D &mdash; Loss of Use
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Coverage D pays for the additional costs you incur when you cannot live in your home
        because of a covered loss. This is commonly called Additional Living Expenses (ALE). It
        covers hotel bills, temporary rentals, increased food costs, storage fees, pet boarding,
        and more &mdash; anything beyond what you would normally spend to maintain your standard of
        living.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The limit is typically 20 to 30 percent of Coverage A. After a major loss, these expenses
        add up fast. A family displaced for 18 months while their home is rebuilt can easily burn
        through $100,000 or more in additional living expenses. For a detailed breakdown of what
        qualifies, see our{' '}
        <Link href="/resources/ale-frv" className="text-blue-700 underline hover:text-blue-900">
          ALE coverage guide
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Coverage E and F &mdash; Liability and Medical Payments
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Coverage E is personal liability. If someone is injured on your property and sues you, or
        if you accidentally damage someone else&rsquo;s property, Coverage E pays for your legal
        defense and any settlement or judgment. The standard limit is $100,000, though many people
        carry $300,000 or $500,000.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Coverage F is medical payments to others. It pays small medical bills (typically up to
        $1,000 or $5,000 per person) for guests injured on your property, regardless of fault. It
        exists to resolve minor injuries without a lawsuit.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        These liability coverages are important, but they rarely come into play during a property
        damage claim. The rest of this guide focuses on Coverages A through D because those are
        what matter when your house is damaged.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Is NOT Covered &mdash; Common Misconceptions
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Every homeowners policy contains exclusions &mdash; categories of damage that are not
        covered regardless of how much premium you pay. Understanding what is excluded is just as
        important as understanding what is included. Here are the most common surprises:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Flood:</strong> Standard homeowners policies do not cover flooding. Not river
          flooding, not storm surge, not rising water of any kind. You need a separate flood policy
          through the National Flood Insurance Program (NFIP) or a private flood insurer.
        </li>
        <li>
          <strong>Earthquake:</strong> Not covered under standard policies in California. You need a
          separate earthquake policy, typically through the California Earthquake Authority (CEA) or
          a private carrier.
        </li>
        <li>
          <strong>Maintenance and wear:</strong> Insurance covers sudden, accidental damage &mdash;
          not gradual deterioration. A roof that leaks because it is 30 years old and worn out is
          not a covered loss. But a roof that leaks because a tree fell on it is covered, even if
          the roof was 30 years old.
        </li>
        <li>
          <strong>Mold (often):</strong> Many policies exclude mold or cap coverage at $5,000 or
          $10,000. However, if the mold results from a covered water loss, there may be coverage
          for remediation as part of the original claim.
        </li>
        <li>
          <strong>Sewer backup:</strong> Not covered unless you purchased a specific endorsement.
          Many homeowners discover this too late.
        </li>
        <li>
          <strong>Ordinance or law costs:</strong> If your damaged home must be brought up to
          current building codes during repair, the additional cost is not covered unless you have
          an Ordinance or Law endorsement.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a full discussion of what is excluded and how California law limits the reach of
        exclusions, see our{' '}
        <Link href="/resources/exclusions" className="text-blue-700 underline hover:text-blue-900">
          guide to policy exclusions
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Your Policy Pays &mdash; Replacement Cost vs. Actual Cash Value
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your policy does not simply write you a check for the full repair cost on day one. How it
        pays depends on whether you have replacement cost or actual cash value coverage. Most
        modern HO-3 policies provide replacement cost on the dwelling (Coverage A) and either
        replacement cost or ACV on contents (Coverage C), depending on the policy and any
        endorsements.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you have replacement cost coverage, the insurer first pays the actual cash value
        (replacement cost minus depreciation), then pays the remaining depreciation after you
        complete repairs. This two-step process is explained in detail in our{' '}
        <Link href="/resources/acv-rcv" className="text-blue-700 underline hover:text-blue-900">
          ACV vs. RCV guide
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Where Surprises Hide
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The biggest surprises in homeowners policies are not in the coverages themselves. They are
        in the details:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Sublimits:</strong> Caps within caps that limit payment for specific items far
          below what you might expect.
        </li>
        <li>
          <strong>Percentage deductibles:</strong> Some policies have percentage-based deductibles
          for wind or hurricane damage that can be five to ten times larger than a standard flat
          deductible.
        </li>
        <li>
          <strong>Endorsements that remove coverage:</strong> Not all endorsements add coverage.
          Some take it away. Read every endorsement listed on your dec page.
        </li>
        <li>
          <strong>The named-perils split:</strong> Your dwelling is covered differently than your
          contents. A loss that is covered for your house may not be covered for your belongings.
        </li>
        <li>
          <strong>Matching requirements:</strong> If your kitchen has custom tile and only half is
          damaged, will the insurer pay to replace all of it so it matches? The answer depends on
          your policy language and your state&rsquo;s law.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Read Your Policy
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your complete policy is three things stapled together: the declarations page, the policy
        form (the HO-3 or whatever form number you have), and the endorsements. The declarations
        page is your personalized summary &mdash; your limits, your deductible, your named insured.
        The policy form is the standardized language that defines what is covered and what is not.
        The endorsements are modifications that add, remove, or change specific coverages.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Start with the{' '}
        <Link href="/resources/declarations-page" className="text-blue-700 underline hover:text-blue-900">
          declarations page
        </Link>. It tells you your limits, your deductible, and which endorsements are attached.
        Then read the endorsements &mdash; they override the base policy form wherever they
        conflict. Finally, read the relevant sections of the policy form itself for the specific
        coverage you need.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Most Important Takeaway
      </h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Your policy is a contract. It means what it says, and the insurer owes you everything it
        promises. When the insurer denies or underpays a claim, they are not doing you a favor by
        paying anything &mdash; they are fulfilling a contractual obligation. If the policy says
        it covers something, the insurer must pay. If there is ambiguity in the language, California
        law resolves it in your favor. For more on how courts interpret policy language, see our{' '}
        <Link href="/resources/policy-interpretation" className="text-blue-700 underline hover:text-blue-900">
          policy interpretation guide
        </Link>.
      </p>
    </>
  )
}
