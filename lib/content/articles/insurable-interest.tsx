import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: "Insurable Interest, Life Estates, and Trusts",
  description:
    "When a home is transferred into a family trust with a retained life estate, the policyholder may hold only partial insurable interest, not full property value.",
  summary:
    'Transferring a home into a trust with a retained life estate can leave you with only a partial insurable interest, not the full property value, which can slash a claim payment. Value the life estate correctly and get advice before making the transfer.',
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
        Most homeowners assume that if they have an insurance policy on their house and the house
        burns down, the insurance company will pay the full value of the loss. In most cases,
        that&rsquo;s true. But there is a scenario &mdash; more common than you might think &mdash;
        where a homeowner files a claim after a total loss and discovers that the insurance company
        will only pay a fraction of the property&rsquo;s value. The reason? The policyholder
        doesn&rsquo;t actually own the house anymore. They only have an <strong>insurable
        interest</strong> &mdash; and that interest may be worth far less than the home itself.
      </p>

      <h2 id="what-is-insurable-interest" className="text-2xl font-bold text-[#1F3964] mb-4">
        What Is Insurable Interest?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        An insurable interest exists when a person would suffer a financial loss if the insured
        property were damaged or destroyed. You don&rsquo;t have to own property outright to insure
        it &mdash; you just need to have a financial stake in its preservation. A landlord, a
        mortgage lender, a business partner, a tenant who has made improvements &mdash; all of
        these parties can have an insurable interest in a property.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        California codifies the property insurable-interest concept in Cal. Ins. Code
        &sect; 281:
      </p>
      <blockquote className="border-l-4 border-gray-300 pl-4 my-3 italic text-gray-700">
        Every interest in property, or any relation thereto, or liability in respect thereof,
        of such a nature that a contemplated peril might directly damnify the insured, is an
        insurable interest.
      </blockquote>
      <p className="text-gray-700 leading-relaxed mb-4">
        Section 280 is the consequence side: <em>&ldquo;If the insured has no insurable
        interest, the contract is void.&rdquo;</em> The key question, for any insured, is not
        whether they <em>own</em> the property &mdash; it is whether they would be financially
        harmed if it were damaged or destroyed. But here is the critical point:
        <strong> the carrier&apos;s obligation is generally limited to the value of the
        insured&apos;s insurable interest, not the full value of the property.</strong>
      </p>

      <CalloutBox variant="important" title="Your Claim Is Capped at Your Interest">
        <p>
          If you have a $600,000 homeowner policy but your insurable interest in the property is
          only worth $150,000, the most the insurance company owes you on a total loss is $150,000
          &mdash; regardless of what the policy limits say. The policy limit is a ceiling, but
          your insurable interest determines the actual recovery.
        </p>
      </CalloutBox>

      <h2 id="life-estate-scenario" className="text-2xl font-bold text-[#1F3964] mb-4">
        The Life Estate Scenario
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here is a scenario that commonly plays out in practice. An elderly homeowner &mdash;
        let&rsquo;s say an 82-year-old man &mdash; transfers his home into a family trust as
        part of his estate planning. The trust is a revocable living trust or a similar family
        trust, and as part of the arrangement, the man retains a <strong>life estate</strong> in
        the property.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A life estate means exactly what it sounds like: the man has the legal right to live in the
        house for the rest of his life. He can occupy it, maintain it, and enjoy it &mdash; but on
        paper, he no longer owns the property outright. The trust owns the property. The
        man&rsquo;s interest is limited to the right to reside there until the day he dies.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        That right is valuable &mdash; no question about it. But it is not worth the same as the
        entire value of the house. It is a <em>partial interest</em>. If the insurance policy is in
        the man&rsquo;s personal name (not in the name of the trust), his insurable interest is
        limited to the value of that life estate. And if the house burns to the ground, the
        insurance company may argue &mdash; correctly &mdash; that they only owe him the value of
        his life estate, not the full replacement cost of the home.
      </p>

      <h2 id="calculating-life-estate" className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Calculate the Value of a Life Estate
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Calculating the value of a life estate is not a simple exercise. It requires multiple
        inputs, multiple experts, and at least a working knowledge of the time value of money. Here
        is how it works.
      </p>

      <h3 id="step-1-life-expectancy" className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 1: Determine the Person&rsquo;s Life Expectancy
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The starting point is: how long is this person expected to live? If the man is 82 years
        old, you might assume he doesn&rsquo;t have many years left &mdash; but life expectancy
        tables don&rsquo;t work that way. A 50-year-old man might have a life expectancy of 81,
        but if a man has <em>already</em> reached 82, his life expectancy doesn&rsquo;t drop to
        zero. He has already beaten the odds. Actuarial tables for an 82-year-old male might show
        a remaining life expectancy of 7 years &mdash; meaning he is expected to live to
        approximately age 89.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This brings up an important question: should you use generic actuarial tables, or should
        you consider this specific person&rsquo;s health? A man who is 82 and in excellent health
        may have a longer life expectancy than one who is 82 with serious medical conditions. If
        you are going to base the valuation on the individual&rsquo;s actual health status rather
        than population averages, you will need a medical opinion as well as an actuarial opinion.
      </p>

      <CalloutBox variant="tip" title="Actuarial Tables vs. Individual Health">
        <p>
          Generic actuarial tables (such as the IRS &sect; 7520 tables) provide a standardized
          life expectancy based solely on age. But in a claim dispute, either side might argue
          that the individual&rsquo;s actual health should be considered. A person with a terminal
          diagnosis has a shorter life expectancy &mdash; and a less valuable life estate &mdash;
          than a healthy person of the same age. This adds another layer of complexity and
          potentially another expert (a physician) to the valuation process.
        </p>
      </CalloutBox>

      <h3 id="step-2-rental-value" className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 2: Determine the Fair Market Rental Value
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The essence of a life estate is the right to live in the property without paying rent.
        That benefit has a dollar value, and the way to quantify it is to determine what it would
        cost to rent a comparable property in the same neighborhood.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A real estate appraiser familiar with the local rental market can determine this amount by
        analyzing comparable rental properties &mdash; similar homes in the same area, of similar
        size, condition, and quality. But there is a wrinkle: if the home is furnished, you need
        to account for the added value of furnishings. A furnished rental commands a higher rent
        than an unfurnished one. The appraiser should determine the fair market rental value of the
        property as the life estate holder actually uses it &mdash; furniture and all.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For our hypothetical, let&rsquo;s say the appraiser determines that the fair market rental
        value of this furnished home is <strong>$7,500 per month</strong>.
      </p>

      <h3 id="step-3-present-value" className="text-xl font-semibold text-[#1F3964] mb-3">
        Step 3: Calculate the Present Value of the Future Benefit
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here is where the math gets interesting &mdash; and where most non-finance people get lost.
        The man has the right to live rent-free in this house for an estimated 7 years. If the rent
        is $7,500 per month, you might be tempted to simply multiply: $7,500 &times; 12 months
        &times; 7 years = $630,000. But that would be wrong.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The reason it would be wrong is that the benefit is received over time, not all at once.
        The man will save $7,500 in rent next month, and $7,500 the month after that, and so on
        for 7 years. But a dollar received today is worth more than a dollar received 7 years from
        now. This is a fundamental principle of finance called the <strong>time value of
        money</strong>, and it leads to the concept of <strong>present value</strong>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Think of it this way: if someone offered you the right to live rent-free in this house for
        the next 7 years, how much would that be worth to you <em>today</em>, as a single lump-sum
        payment? It would be less than $630,000, because some of that benefit won&rsquo;t be
        received for years. The money you save on rent in year 7 is worth less in today&rsquo;s
        dollars than the money you save on rent in year 1 &mdash; because if you had the money
        today, you could invest it and earn a return.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Another way to think about it: the life estate holder is going to be living there
        rent-free, which means they will not be paying any increases due to inflation, either.
        The benefit of free rent in year 7 needs to be discounted back to its value in
        today&rsquo;s dollars.
      </p>

      <CalloutBox variant="legal" title="Present Value Is a Standard Finance Calculation">
        <p>
          Anyone who has taken a finance class in college will recognize this as a <strong>present
          value of an annuity</strong> calculation. What is the current value of a stream of equal
          payments received at regular intervals over a defined period? The formula requires three
          inputs: the periodic payment amount ($7,500/month), the number of periods (84 months),
          and the discount rate. Finance professors, CPAs, and economists perform these calculations
          routinely.
        </p>
      </CalloutBox>

      <h3 id="discount-rate" className="text-xl font-semibold text-[#1F3964] mb-3">
        The Discount Rate
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The discount rate is one of the most important variables in the calculation, and
        predictably, it is also one of the most contested. The discount rate represents the
        rate of return you could earn on a safe, alternative investment. In other words, if you
        had the lump-sum value of the life estate sitting in your bank account today, what rate
        of return could you earn on it with minimal risk?
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The standard benchmark for a &ldquo;risk-free&rdquo; rate of return is the yield on
        <strong> U.S. Treasury securities</strong>. A 7-year Treasury note yield at the time of
        the loss would be a reasonable starting point for the discount rate. As of this writing,
        that rate might be in the range of 4&ndash;5%, but it changes with market conditions.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A higher discount rate reduces the present value (the future benefit is worth less today),
        and a lower discount rate increases it (the future benefit is worth more today). Expect the
        insurance company to argue for a higher discount rate and the policyholder to argue for a
        lower one.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 my-6">
        <p className="font-semibold text-[#1F3964] mb-3">Hypothetical Calculation</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm">
          <li>
            <strong>Life expectancy:</strong> 7 years (82-year-old male per actuarial tables)
          </li>
          <li>
            <strong>Monthly rental value:</strong> $7,500 (furnished comparable)
          </li>
          <li>
            <strong>Discount rate:</strong> 4.5% (7-year Treasury yield)
          </li>
          <li>
            <strong>Present value of annuity:</strong> approximately $530,000&ndash;$545,000
          </li>
        </ul>
        <p className="text-gray-600 text-sm mt-3 italic">
          Compare this to the home&rsquo;s full replacement cost, which might be $800,000 or
          more. The life estate holder&rsquo;s insurable interest could be hundreds of thousands
          of dollars less than the policy limits.
        </p>
      </div>

      <h2 id="experts-needed" className="text-2xl font-bold text-[#1F3964] mb-4">
        The Experts You Need
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        To properly value a life estate for insurance purposes, you may need as many as four
        different experts:
      </p>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>An actuary</strong> &mdash; to determine the life expectancy of the individual
          based on actuarial tables. The actuary provides the number of years that the life estate
          is expected to last.
        </li>
        <li>
          <strong>A medical doctor</strong> &mdash; if the valuation is based on the specific
          individual&rsquo;s health rather than generic population averages, a physician&rsquo;s
          opinion on life expectancy is needed. The actuary&rsquo;s opinion may need to incorporate
          the doctor&rsquo;s findings about the individual&rsquo;s health conditions.
        </li>
        <li>
          <strong>A real estate appraiser</strong> &mdash; to determine the fair market rental
          value of comparable properties in the area, including an adjustment for furnishings if
          the home is furnished.
        </li>
        <li>
          <strong>A finance expert</strong> &mdash; an economist, CPA, or financial analyst who
          can calculate the present value of the future rent-free benefit using an appropriate
          discount rate. This is the person who takes the life expectancy (from the actuary) and
          the rental value (from the appraiser) and converts them into a single lump-sum value
          in today&rsquo;s dollars.
        </li>
      </ol>

      <CalloutBox variant="warning" title="Four Experts Means Four Opinions to Fight Over">
        <p>
          Each of these inputs is subject to dispute. The insurer may hire its own actuary who
          uses different mortality tables. Its appraiser may come in with a lower rental value. Its
          finance expert may use a higher discount rate. The result can be a significant gap between
          the policyholder&rsquo;s valuation and the carrier&rsquo;s valuation &mdash; and each gap
          compounds the others.
        </p>
      </CalloutBox>

      <h2 id="the-critical-mistake" className="text-2xl font-bold text-[#1F3964] mb-4">
        The Critical Estate-Planning Mistake
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here is where this scenario becomes a cautionary tale. The entire insurable interest
        problem can be avoided &mdash; or created &mdash; depending on one decision: <strong>whose
        name is on the insurance policy?</strong>
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Scenario A: The Policy Is in the Individual&rsquo;s Personal Name
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the homeowner transferred the property into a family trust but left the insurance policy
        in his personal name, the insurance company has a legitimate argument. The named insured
        &mdash; the 82-year-old man &mdash; no longer owns the property. He holds only a life
        estate. His insurable interest is limited to the value of that life estate. On a total fire
        loss, the most the insurer owes him is the present value of his remaining rent-free
        occupancy &mdash; not the full replacement cost of the home.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This means a home worth $800,000 might generate a claim payment of only $530,000 or less.
        The remaining value &mdash; the <strong>remainder interest</strong> held by the trust
        beneficiaries &mdash; is not insured under a policy that names only the life estate
        holder. The beneficiaries would need to have their own insurance coverage on their
        remainder interest, or the trust itself would need to be the named insured.
      </p>

      <CalloutBox variant="important" title="The Coverage Gap Can Be Substantial">
        <p>
          Where the property is destroyed and the policy covers only the life estate
          holder&apos;s interest, the difference between the life estate value and the full
          property value is exposed to the insurable-interest argument. In practice, California
          carriers facing a sympathetic life tenant on a total loss sometimes pay full
          replacement cost where the named insured is the only practical claimant and the
          trust/beneficiaries are joined or sign off &mdash; and counsel may have arguments
          (reasonable expectations, estoppel, agent E&amp;O) that close some or all of the gap.
          But the structural gap is real, and there is no guarantee a carrier will pay through
          it. This is one of the high-leverage moments to involve an insurance coverage
          attorney early.
        </p>
      </CalloutBox>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Scenario B: The Policy Is in the Name of the Trust
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Where the insurance agent and the estate-planning attorney handled the trust transfer
        coordinated with the policy, the insurance was updated to reflect the trust&apos;s
        relationship to the property. Carrier practice varies on how that update is structured:
        some name the trust as the insured outright, some add the trust as an additional
        insured, some treat the trust as a loss payee, and revocable-living-trust scenarios in
        particular are sometimes underwritten with the settlor remaining the named insured plus
        the trust noted on the policy. The right structure for a specific policy is a question
        for the insured&apos;s agent and broker.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        On a total loss, the claim payment goes to the trust. The trustee, with the advice of the
        trust attorney, can then distribute the proceeds to the various beneficiaries of the trust
        &mdash; which would include the life estate holder (for his interest) and the remainder
        beneficiaries (for theirs). Everyone is made whole. The full value of the property is
        insured because the entity that owns the full interest is the named insured.
      </p>

      <div className="bg-sky-50 border border-sky-200 rounded-lg p-5 my-6">
        <p className="font-semibold text-[#1F3964] mb-3">The Difference in Outcomes</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="bg-white rounded-lg p-4 border border-sky-100">
            <p className="font-semibold text-red-700 mb-2">Policy in Personal Name</p>
            <ul className="list-disc pl-4 space-y-1 text-gray-700">
              <li>Insurable interest = life estate value only</li>
              <li>Recovery capped at ~$530,000 (hypothetical)</li>
              <li>Remainder interest is uninsured</li>
              <li>Trust beneficiaries recover nothing</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-4 border border-sky-100">
            <p className="font-semibold text-green-700 mb-2">Policy in Trust&rsquo;s Name</p>
            <ul className="list-disc pl-4 space-y-1 text-gray-700">
              <li>Insurable interest = full property value</li>
              <li>Recovery up to full policy limits</li>
              <li>All interests are covered</li>
              <li>Trust distributes proceeds to all beneficiaries</li>
            </ul>
          </div>
        </div>
      </div>

      <h2 id="whose-fault" className="text-2xl font-bold text-[#1F3964] mb-4">
        Where the Coverage Gap Tends to Come From
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When this mistake surfaces in a claim, three professionals were typically in a
        position to catch it before the loss:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>The estate-planning attorney</strong> who set up the trust. Transferring
          property into a trust generally requires updating the named insured on the homeowner
          policy to reflect the new ownership. Whether the standard of care for an
          estate-planning attorney in California includes flagging this is a question for a
          legal malpractice attorney, not for a public adjuster.
        </li>
        <li>
          <strong>The insurance agent.</strong> Where an agent was aware of the ownership
          change but the policy was not updated, the insured may have remedies. The scope of
          agent E&amp;O exposure in any specific situation is a question for counsel.
        </li>
        <li>
          <strong>The homeowner.</strong> Most homeowner policies contain a duty to notify the
          insurer of material changes affecting the property &mdash; an ownership transfer
          generally qualifies. Many homeowners do not think of estate planning as affecting
          their insurance, which is part of why the professionals they hire are usually the
          first line of defense.
        </li>
      </ul>

      <CalloutBox variant="tip" title="If This Has Happened to You">
        <p>
          Where the property was transferred into a trust but the policy was never updated, the
          insured&apos;s position is not necessarily hopeless. Coverage attorneys frequently
          have arguments at the carrier and equitable arguments in litigation that can close
          some or all of the gap. The specific arguments available depend on the facts and on
          the carrier&apos;s position, and they are arguments for an insurance coverage
          attorney to develop &mdash; not for a public adjuster to draft.
        </p>
      </CalloutBox>

      <h2 id="broader-implications" className="text-2xl font-bold text-[#1F3964] mb-4">
        Other Common Scenarios Where Insurable-Interest Issues Surface
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The life-estate scenario is one example of a broader pattern. Insurable-interest
        questions can also surface in:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Divorce-related ownership changes.</strong> When a divorce decree awards the
          home to one spouse but the policy still names both (or the wrong one), the analysis
          can get complicated. Specifics belong with the family law and insurance coverage
          attorneys handling the matter.
        </li>
        <li>
          <strong>Inherited property.</strong> When a parent dies and leaves a home to multiple
          children, the analysis of each child&apos;s insurable interest is fact-specific and
          generally belongs with the probate or trust attorney handling the estate.
        </li>
        <li>
          <strong>Contract purchasers.</strong> Someone in the process of buying a home under a
          purchase agreement typically has an insurable interest; its valuation depends on the
          contract terms. The real estate and insurance professionals on the transaction
          generally address this at closing.
        </li>
        <li>
          <strong>Landlord-tenant improvements.</strong> A tenant who has made substantial
          improvements to a leased property generally has an insurable interest in those
          improvements distinct from the building itself. The lease terms drive the analysis.
        </li>
        <li>
          <strong>Business property held by partnerships or LLCs.</strong> The named insured
          structure on the policy interacts with the entity ownership structure in ways that
          should be reviewed by the entity&apos;s counsel and broker together.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Each of these is shorthand. The insurable-interest analysis in any specific scenario
        depends on the facts and on the legal documents that created the ownership structure;
        these are conversations to have with an insurance coverage attorney or, where the
        ownership structure itself is the issue, with the attorney who drafted it.
      </p>

      <h2 id="protect-yourself" className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Protect Yourself
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The single most important takeaway from this article is this: <strong>whenever you change
        how your property is titled or owned, update your insurance immediately.</strong> This
        includes:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Transferring property into any type of trust (revocable, irrevocable, family, living)
        </li>
        <li>
          Adding or removing an owner from the deed
        </li>
        <li>
          Transferring property into an LLC or partnership
        </li>
        <li>
          Retaining a life estate when transferring property
        </li>
        <li>
          Any change in ownership resulting from divorce, death, or inheritance
        </li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        In each case, contact your insurance agent and ask them to update the named insured on the
        policy to reflect the current ownership. If the property is now owned by a trust, the trust
        should be the named insured. If it is owned by an LLC, the LLC should be the named insured.
        The goal is to ensure that the entity with the <em>full</em> ownership interest in the
        property is the one insured under the policy.
      </p>

      <CalloutBox variant="warning" title="Don&rsquo;t Assume Your Attorney or Agent Will Catch This">
        <p>
          Estate-planning attorneys focus on tax planning and asset protection &mdash; they may
          not think about your insurance policy at all. Insurance agents may not know that you have
          set up a trust. It is your responsibility to make sure these professionals are
          communicating with each other and that your insurance is updated every time your
          ownership structure changes.
        </p>
      </CalloutBox>

      <h2 id="bottom-line" className="text-2xl font-bold text-[#1F3964] mb-4">
        Key Takeaway
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurable interest is not just a legal technicality &mdash; it determines the maximum
        amount your insurance company will pay on a claim. When a property is held in a trust
        and the policyholder retains only a life estate, that life estate is a <em>partial</em>{' '}
        interest whose value depends on the person&rsquo;s life expectancy, the rental value of
        the property, and the time value of money. Valuing it properly may require an actuary, a
        doctor, a real estate appraiser, and a finance expert.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        But the far better approach is to avoid the problem entirely. If you transfer your home
        into a trust, make sure the trust &mdash; not you personally &mdash; is the named insured
        on the insurance policy. This one step ensures that the full value of the property is
        insured, and that the trust can distribute the proceeds to all beneficiaries after a loss.
      </p>
      <p className="text-gray-700 leading-relaxed mb-6">
        If you are already facing a claim where insurable interest is at issue, you need
        professional help. The valuation is complex, the stakes are high, and the insurance
        company will be working hard to minimize the value of your interest. A{' '}
        <Link href="/resources/public-adjuster" className="text-[#2E74B5] underline">
          licensed Public Adjuster
        </Link>{' '}
        or an insurance coverage attorney can review your situation and fight for the maximum
        recovery. See also our article on{' '}
        <Link href="/resources/policyholder-death-coverage" className="text-[#2E74B5] underline">
          what happens to insurance when the policyholder dies
        </Link>
        , which covers related issues with trust ownership and the policy&rsquo;s death clause.
      </p>
      <hr className="my-8 border-gray-300" />
      <p className="text-sm text-gray-500 italic">
        This article is for informational purposes only and does not constitute legal advice. Insurance
        policies and applicable law vary by state and by policy form. Consult with a licensed
        professional regarding your specific situation.
      </p>
      <p className="text-sm text-gray-500 mt-4 italic">
        Written by Leland Coontz III, Licensed Public Adjuster, CA License #2B53445.
      </p>
    </>
  )
}
