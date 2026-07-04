import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Who Owns Xactimate — And Why It Matters for Your Claim',
  description:
    "The software that prices your claim is owned by the same industry that pays it. The ownership chain, what it means, and why not to accept it at face value.",
  summary:
    'Xactimate is owned by Verisk, deeply tied to the insurance industry that uses it to price your claim, an inherent conflict of interest. That is reason never to accept a carrier\'s Xactimate estimate at face value.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="Important Notice">
        <p>
          This article is provided for general educational purposes only and does not constitute
          legal advice. Insurance policies, regulations, and corporate structures can change.
          Nothing here should be construed as an accusation of wrongdoing by any specific company.
          Consult a licensed professional regarding your specific situation.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        When your insurance company writes an estimate for your property damage claim, they almost
        certainly use a software program called Xactimate. You will see it referenced on the
        estimate itself. Your adjuster will tell you the numbers come from Xactimate&apos;s
        database. And the implicit message is clear: this is an objective, neutral tool that
        produces fair prices.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most policyholders accept that at face value. They assume the software is some kind of
        independent arbiter — a Consumer Reports for construction pricing. They hear
        &quot;industry-standard software&quot; and think that means &quot;accurate and fair.&quot;
        It does not. The company that makes Xactimate is owned by the same industry that benefits
        from keeping your claim payment as low as possible.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        That does not mean the software is rigged. It means it is worth understanding the
        ownership structure, thinking critically about the incentives at play, and treating an
        Xactimate-generated number as a position rather than the final answer. Here is how the
        ownership chain works and what it means for a property damage claim.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Ownership Chain
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Xactimate is made by a company called Xactware Solutions. If you have never heard of
        Xactware, that is normal — they do not market to homeowners. Their customers are insurance
        companies, independent adjusting firms, and restoration contractors. Xactware is not an
        independent company. It is a wholly owned subsidiary of Verisk Analytics, a publicly traded
        data analytics corporation headquartered in New Jersey that serves the insurance industry.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Verisk is not a small company. It is a multi-billion-dollar corporation with thousands of
        employees, and virtually all of its revenue comes from selling data, analytics, and software
        products to insurance carriers. Verisk describes itself as a data analytics provider for the
        insurance industry. Its stock trades on major exchanges. Its annual reports make clear that
        insurance carriers are its primary customers and revenue source.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Verisk itself was established as the parent company for the Insurance Services Office, known
        in the industry as ISO. If you have ever read your homeowners policy and noticed forms with
        names like &quot;HO-3&quot; or &quot;HO-5,&quot; those are ISO forms. ISO has been writing
        standardized insurance policy language for decades — since the 1970s. The idea was that
        instead of every carrier drafting its own policy from scratch, they would license standardized
        forms and modify them as needed.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Over the years, those standardized forms have been revised repeatedly. Policyholder
        advocates have argued that the revisions have followed a consistent pattern: narrowing
        coverages, adding exclusions, tightening conditions, and introducing endorsements that
        limit what policyholders can recover. Consumer-advocacy organizations such as{' '}
        <a
          href="https://uphelp.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#2E74B5] underline"
        >
          United Policyholders
        </a>{' '}
        and the{' '}
        <a
          href="https://consumerfed.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#2E74B5] underline"
        >
          Consumer Federation of America
        </a>{' '}
        have made versions of this argument for decades. Whether one accepts the framing or not,
        each ISO form revision is a chance for the standardized language to move in a direction
        that affects coverage scope.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Verisk went public in 2009, but its origin as an insurance industry cooperative is
        important context. Before the IPO, ISO was owned by and operated for the benefit of
        insurance carriers. After the IPO, Verisk&apos;s shareholder base shifted to public-market
        institutional investors (Vanguard, BlackRock, T. Rowe Price, and similar holders). Its
        customer base and revenue, however, still come overwhelmingly from the insurance industry
        &mdash; especially after Verisk&apos;s 2022&ndash;2023 divestitures of its Financial
        Services and 3E business lines, which concentrated the company even further around
        insurance and insurance-adjacent products. The insurance industry built the company,
        funded it for decades before it went public, and remains its overwhelmingly dominant
        customer base today.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        So here is the chain, laid out plainly: Insurance carriers are Xactimate&apos;s largest
        customers. Those same carriers are Verisk&apos;s largest revenue source. Verisk owns
        Xactware. Xactware makes Xactimate. The tool that prices your claim was built by, funded
        by, and sold primarily to the entities that pay your claim. The company collecting your
        premium dollars and the company pricing your repair estimate are on the same team.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What ISO Does
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        To fully understand why this ownership structure matters, you need to understand ISO&apos;s
        role in the insurance ecosystem. ISO — now operating under the Verisk umbrella — performs
        several critical functions for the insurance industry that directly affect your policy and
        your claim.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        First and most importantly, ISO creates the standard policy forms used by the majority of
        property and casualty insurers in the United States. When an insured buys a homeowners
        policy, there is a strong chance the core form was written by ISO and licensed to the
        carrier. The HO-3 (the most common homeowners form, open perils on the dwelling and named
        perils on personal property), the HO-5 (comprehensive &mdash; open perils on both dwelling
        and personal property), the commercial property forms, the inland marine forms, the
        umbrella forms &mdash; these are ISO products. A carrier may add endorsements or modify
        certain provisions, but the skeleton of the policy likely came from ISO.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Second, ISO develops statistical data, actuarial tables, and risk classification systems
        that carriers use to set premiums and assess exposure. If your insurer knows how to price
        the fire risk for your zip code, or the hail risk for your county, or the theft risk for
        your neighborhood, ISO data is likely part of that calculation. ISO collects loss data from
        carriers across the country and uses it to build predictive models that the industry relies
        on.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Third, ISO provides risk assessment tools, fraud detection services, and claims analytics.
        These products help carriers evaluate claims, identify patterns, flag potential fraud, and
        make coverage decisions. When your carrier runs your claim through an algorithm to decide
        whether to investigate further or fast-track it, ISO technology may be involved.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Fourth, ISO provides claims-specific tools including ClaimSearch, a database that carriers
        use to cross-reference claims history across multiple insurers. When your carrier checks
        whether you have filed previous claims with other companies, they are likely using an ISO
        product to do it. This gives Verisk visibility into claims data from across the entire
        industry — data that informs how its other products, including Xactimate pricing, are
        developed and calibrated.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Think about what this means when you put it all together. The same corporate family that
        writes the language in your insurance policy — defining what is covered, what is excluded,
        and under what conditions — also makes the tool that calculates what your covered damage
        costs to repair. The entity that defines the scope of your coverage also defines the price
        tag on your loss. One corporate parent, both sides of the equation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In no other industry would consumers accept this arrangement without question. If the
        company that wrote your auto warranty also made the diagnostic software that determined
        what repairs were covered and how much they cost, you would immediately see the problem.
        Yet in insurance, policyholders accept this structure every day because they have never been
        told about it.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Structural Conflict
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Let me be direct about the economic reality here, because it is straightforward once you
        lay it out.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Xactimate&apos;s customers are overwhelmingly insurance carriers and the adjusting firms
        that work for carriers. These are the companies buying licenses, paying subscription fees,
        and renewing year after year. They are the ones attending Xactware conferences, providing
        feedback on product development, and driving feature requests. Policyholders do not buy
        Xactimate. Homeowners do not subscribe to the pricing database. You are not the customer.
        The carrier is.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance carriers benefit financially when claim estimates are lower. This is not opinion
        — it is arithmetic. Every dollar removed from a claim estimate is a dollar that stays in
        the carrier&apos;s reserves. Lower claim payments mean higher profits, better combined
        ratios, larger executive bonuses, and happier shareholders. The insurance business model
        depends on collecting more in premiums than it pays out in claims. Anything that reduces
        claim payments improves the bottom line.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Now consider the incentive structure from Xactimate&apos;s perspective as a product. If
        the software&apos;s pricing consistently exceeded actual repair costs — if carriers
        routinely felt they were overpaying because Xactimate&apos;s numbers were too high — they
        would look for an alternative. They would build their own estimating tool, fund a
        competitor, demand pricing overrides, or simply stop renewing their licenses. The customer
        would be unhappy with the product. No software company wants unhappy customers.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        On the other hand, if pricing consistently runs below actual market costs, carriers are
        paying less in claims. The customer is satisfied. Renewals come in. Revenue grows. There
        is no market pressure to correct the underpricing because the buyer — the carrier —
        benefits from it. The only party harmed by systematically low pricing is the policyholder,
        and the policyholder is not paying Xactware anything. The policyholder has no seat at the
        table.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The economic incentive is straightforward. The tool&apos;s largest customers want lower
        numbers. The tool&apos;s manufacturer profits from keeping those customers happy and
        renewing their subscriptions. You do not need to allege a conspiracy, a secret meeting, a
        smoking-gun memo, or any kind of intentional fraud to see the problem. Market incentives
        are sufficient explanation. A software company that depends on carrier revenue has no
        economic motivation to produce prices that would increase carrier claim payments — and
        every economic motivation to keep prices where carriers find them acceptable.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        None of this requires anyone to be evil. It does not require a conspiracy. It requires
        only that a company behaves rationally in response to market signals. Xactware&apos;s
        customers are happy when prices are low. Xactware wants happy customers. You can draw the
        rest of the line yourself.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the same dynamic that exists anytime the entity being measured gets to choose (and
        pay for) the measuring tool. Imagine if students got to choose and pay for their own
        grading service. Nobody would accuse the grading service of corruption. But you would not
        be surprised if the grades came back a little generous. The incentive structure explains
        the outcome without requiring any bad intent.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Consider also who is not at the table. Public Adjusters, contractors, and policyholders
        have no meaningful input into Xactimate&apos;s pricing methodology or database updates.
        They can submit data, but they do not drive product decisions. The feedback loop runs
        primarily between Xactware and its carrier customers. When carriers complain that pricing
        is too high in a region, that complaint gets heard. When contractors complain that pricing
        is too low, they are told to submit market data — which may or may not result in an
        adjustment, months later, if at all.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The result is a pricing tool that is more responsive to downward pressure from carriers
        than to upward pressure from the people who actually perform the work. Over time, this
        asymmetry compounds. Prices that should rise with labor and material costs may lag behind
        because the entity funding the tool benefits from that lag.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What This Does NOT Mean
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        I want to be clear about what I am not saying, because this topic generates a lot of heat
        and not enough precision. Nuance matters here.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This does not mean Xactimate is worthless. It is a sophisticated estimating platform with
        a genuinely impressive database of localized pricing. It accounts for regional labor rates,
        material costs, geographic variations, and seasonal fluctuations. Thousands of contractors,
        Public Adjusters, and independent professionals use it every day to produce legitimate
        estimates. The tool itself has real value as a framework for pricing construction work.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This does not mean every Xactimate estimate is wrong. Some estimates are fair. Some are
        even generous. The accuracy of any individual estimate depends heavily on who prepared it,
        what line items they included, whether they measured correctly, whether they specified the
        right materials, and whether they followed the software&apos;s own pricing methodology.
        A thorough, honest estimator can produce a fair result with Xactimate. A lazy or
        cost-cutting estimator can produce an inadequate one.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This does not mean there is a backroom conspiracy to underpay claims. I am not alleging
        that someone at Verisk headquarters sits in a dark room manually adjusting pricing downward
        on orders from insurance executives. That is not how structural conflicts of interest work.
        The problem is subtler and more pervasive than a conspiracy. Market incentives, customer
        feedback loops, and economic pressures can produce systematically biased outcomes without
        anyone having to make a single unethical decision.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This does not mean you should ignore Xactimate or refuse to engage with it. Xactimate is
        the language of insurance claims. If you want to negotiate effectively, you need to speak
        that language. The solution is not to dismiss the tool — it is to understand its
        limitations, verify its outputs, and use it properly rather than accepting it uncritically.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        What it does mean is this: an Xactimate estimate from an insurance company is best
        treated as a starting point, not a final answer. Many policyholders verify the numbers
        independently, get opinions from people who do not have a financial interest in the
        number being low, and bear in mind that the tool producing the number was built within an
        ecosystem where its paying customers benefit from lower outputs. Healthy skepticism is
        appropriate. Blind trust is not.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What an Insured Might Consider
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Understanding the ownership conflict is useful background, but only if it changes how a
        claim is handled in practice. The patterns below are what many policyholders, public
        adjusters, and independent contractors fall back on.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Treat the Carrier&apos;s Estimate as a Position, Not the Final Word
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The estimate the insurance company provides is its opening position. It is the number the
        carrier would like to pay &mdash; not necessarily the number it owes. A typical
        replacement-cost policy obligates the carrier to pay what it actually costs to repair or
        replace the property (subject to limits, deductible, and applicable depreciation). It does
        not obligate the carrier to pay whatever Xactimate says. Those are different things, and
        the gap between them can be tens of thousands of dollars.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a carrier presents an Xactimate estimate with an air of finality, it is worth
        remembering that the software was paid for by the entity handing over that number.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Independent Contractor Bids
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many policyholders gather two or three written bids from licensed contractors who are not
        affiliated with the insurance company. Carrier &ldquo;preferred vendor&rdquo; or
        &ldquo;managed repair&rdquo; programs typically come with their own dynamics &mdash; those
        contractors have a financial relationship with the carrier, often receive referrals tied
        to staying within carrier pricing guidelines, and face pressure to keep numbers in line
        with what the carrier wants to pay.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Independent bids that describe the full scope of work &mdash; not just the rooms listed in
        the carrier&apos;s estimate, but the full scope of what was damaged &mdash; tend to be
        the strongest evidence of actual repair cost. Real-world pricing from contractors who
        will actually perform the work for the number quoted is evidence the carrier is generally
        required to consider.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Request the ESX File
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The ESX file is the native Xactimate file &mdash; the actual electronic estimate, not the
        PDF printout an adjuster hands over. With the ESX file open in Xactimate, a qualified
        professional can see exactly what line items were included, what was left out, what
        pricing was used, what waste factors were applied, and whether any manual overrides were
        imposed. The PDF alone does not give this level of detail.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many policyholders request the ESX file in writing. Under the California Fair Claims
        Settlement Practices Regulations &mdash; specifically 10 CCR &sect; 2695.7(b)(1)
        (requiring the insurer to state the basis for any denial, reduction, or unfavorable
        decision in writing) and &sect; 2695.5 (responsiveness to communications) &mdash; the
        carrier owes the insured the reasoning behind its estimate. Many carriers will produce the
        ESX file on request. A refusal to share the supporting documentation may raise questions
        worth surfacing in a written follow-up or, if appropriate, with the California Department
        of Insurance.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        A Review by Someone Whose Side of the Table You&apos;re On
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A{' '}
        <Link href="/resources/public-adjuster" className="text-[#2E74B5] hover:underline">
          Public Adjuster
        </Link>{' '}
        or a certified estimator working for the insured &mdash; not the carrier &mdash; can
        review the estimate with the insured&apos;s interests in mind. Common findings:
        missing line items, incorrect measurements, wrong material specifications, underpriced
        labor, omitted trades, and scope that was never documented. The economic incentive runs in
        the opposite direction from the carrier&apos;s estimator: producing an estimate that
        reflects what the repairs will actually cost.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        California public adjusters are licensed under Insurance Code &sect;&sect; 15000 et seq.
        and may only represent the insured. They are statutorily barred from representing the
        carrier in the same claim.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        What the Policy Actually Says
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A typical replacement-cost policy obligates the carrier to pay what it costs to repair or
        replace damaged property (subject to limits, deductible, and applicable depreciation). It
        does not obligate the carrier to pay whatever a software program calculates. It does not
        reference Xactimate by name or incorporate its pricing by reference.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Xactimate is a tool, not the policy and not the law. If the actual cost to repair the
        property exceeds what Xactimate says &mdash; and it frequently does &mdash; the
        carrier&apos;s obligation runs to the actual cost, not the software output. The software
        is not a cap on recovery.
      </p>

      <CalloutBox variant="legal" title="Xactimate's Own Disclaimer (Verisk EULA)">
        <p>
          Xactware disclaims pricing accuracy in its end-user license agreement for Xactimate. The
          relevant passage reads:
        </p>
        <p className="italic mt-2">
          We do not warrant the accuracy of pricing information in the Price Data. Price Data is
          intended to represent historical information and should be used as a baseline or place
          to begin creation of an estimate. We provide Price Data for informational purposes only.
          We may not update every price every month. You must ensure that estimates include
          pricing consistent with actual materials, equipment, labor pricing, etc.
        </p>
        <p className="mt-2">
          Source:{' '}
          <a
            href="https://www.verisk.com/privacy-policies/xactware-eula/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2E74B5] underline"
          >
            Verisk Xactware End User License Agreement
          </a>. The manufacturer&apos;s own language describes Xactimate Price Data as a
          &ldquo;baseline,&rdquo; not a definitive current-market figure, and places responsibility
          on the user to verify pricing against actual conditions. That is a meaningful framing
          point when a carrier insists their Xactimate output is the final word on what a repair
          costs.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Bottom Line
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Xactimate is a useful tool. It provides a common language for discussing repair costs and
        a starting framework for pricing claims. Virtually everyone in the property claims world
        uses it, and that shared platform has real value for communication and negotiation. But it
        is not neutral. It was built by the insurance industry, it is owned by the insurance
        industry, and its primary customers are insurance companies that benefit financially from
        lower claim payments.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        That does not make it evil or worthless. It makes it a tool with a structural bias that you
        need to recognize and account for. It means you verify. It means you get second opinions.
        It means you treat the carrier&apos;s estimate as their position, not as objective truth.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When an insured receives an Xactimate estimate from the carrier, it is worth reading
        carefully, asking questions, and getting independent verification. The carrier handing
        over that number has a direct financial interest in making it as small as possible, and
        the software that produced it was built within an ecosystem where its paying customers
        benefit from lower outputs. That is not an allegation of intent; it is the structure.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Related Resources
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <Link href="/resources/xactimate-how-it-works" className="text-[#2E74B5] hover:underline">
            Xactimate: How It Works
          </Link>
        </li>
        <li>
          <Link href="/resources/xactimate-pricing-gap" className="text-[#2E74B5] hover:underline">
            The Xactimate Pricing Gap
          </Link>
        </li>
        <li>
          <Link href="/resources/overhead-and-profit" className="text-[#2E74B5] hover:underline">
            Xactimate Overhead and Profit
          </Link>
        </li>
        <li>
          <Link href="/resources/carrier-claims-tactics" className="text-[#2E74B5] hover:underline">
            Carrier Claims Tactics
          </Link>
        </li>
        <li>
          <Link href="/resources/public-adjuster" className="text-[#2E74B5] hover:underline">
            Why Hire a Public Adjuster
          </Link>
        </li>
      </ul>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Need Your Xactimate Estimate Reviewed?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          A Public Adjuster can open your carrier&apos;s ESX file, identify missing line items and
          underpriced work, and build a complete estimate that reflects what the repairs will
          actually cost. We work for you, not the insurance company.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Request a Free Claim Review
        </Link>
      </div>
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
