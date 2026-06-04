import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Who Owns Xactimate — And Why It Matters for Your Claim',
  description:
    'The software that prices your insurance claim is owned by the same industry that pays your claim. Here is the ownership chain, what it means, and why you should never accept an Xactimate estimate at face value.',
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
        That does not mean the software is rigged. It means you should understand the ownership
        structure, think critically about the incentives at play, and never accept an
        Xactimate-generated number without independent verification. Here is how the ownership
        chain works and what it means for your property damage claim.
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
        Over the years, those standardized forms have been revised repeatedly. The revisions have
        followed a consistent pattern: narrowing coverages, adding exclusions, tightening conditions,
        and introducing endorsements that limit what policyholders can recover. This is not a secret
        or a conspiracy theory. It is documented industry history that has been the subject of
        criticism from consumer advocates, regulators, and even industry commentators since at least
        the 1990s. Each new ISO form revision tends to reduce carrier exposure in some way.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Verisk went public in 2009, but its origin as an insurance industry cooperative is
        important context. Before the IPO, ISO was owned by and operated for the benefit of
        insurance carriers. After the IPO, Verisk became a publicly traded company — but its
        principal shareholders and largest revenue sources remain insurance carriers. The insurance
        industry does not merely use Verisk&apos;s products. It built the company, funded it for
        decades before it went public, and continues to be its overwhelmingly dominant customer
        base.
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
        property and casualty insurers in the United States. When you buy a homeowners policy, there
        is a strong chance the core form was written by ISO and licensed to your carrier. The HO-3
        (the most common homeowners form), the HO-5 (open perils on contents), the commercial
        property forms, the inland marine forms, the umbrella forms — these are ISO products. Your
        carrier may add endorsements or modify certain provisions, but the skeleton of your policy
        likely came from ISO.
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
        What it does mean is this: you should treat an Xactimate estimate from your insurance
        company as a starting point, not a final answer. You should verify the numbers
        independently. You should get opinions from people who do not have a financial interest in
        the number being low. And you should understand that the tool producing that number was
        built within an ecosystem where the paying customers benefit from lower outputs. Healthy
        skepticism is appropriate. Blind trust is not.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What You Should Do
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Understanding the ownership conflict is useful background, but only if it changes how you
        handle your claim in practice. Here are the concrete steps you should take.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Never Accept the Carrier&apos;s Estimate as the Final Word
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The estimate your insurance company gives you is their opening position. It is the number
        they would like to pay — not necessarily the number they owe. Your policy does not say they
        owe you whatever Xactimate says. It says they owe you what it actually costs to repair or
        replace your property. Those are different things, and the gap between them can be tens of
        thousands of dollars.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a carrier presents their Xactimate estimate with an air of finality — as if the
        software has spoken and the matter is settled — remember that the software was paid for by
        the entity handing you that number. Of course they are satisfied with what it produced. The
        question is whether you should be.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Get Independent Contractor Bids
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Get two or three written bids from licensed contractors who are not affiliated with your
        insurance company. Do not use the carrier&apos;s &quot;preferred vendor&quot; or
        &quot;managed repair&quot; list — those contractors have a financial relationship with the
        carrier, receive referrals in exchange for keeping prices within carrier guidelines, and
        face real pressure to keep their numbers in line with what the carrier wants to pay.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Go find your own contractors. Describe the full scope of work — not just the rooms listed
        in the carrier&apos;s estimate, but the full scope of what was damaged. Get real-world
        pricing from people who will actually do the work for the number they quote. Those bids are
        evidence of actual repair cost that your carrier must consider.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Request the ESX File
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The ESX file is the native Xactimate file — the actual electronic estimate, not the PDF
        printout your adjuster hands you. When you have the ESX file, a qualified professional can
        open it in Xactimate and see exactly what line items were included, what was left out, what
        pricing was used, what waste factors were applied, and whether any manual overrides were
        imposed. The PDF alone does not give you this level of detail.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Ask your carrier for the ESX file. Under California&apos;s Fair Claims Settlement Practices
        Regulations, the carrier must provide you with documentation supporting their coverage
        decisions. The ESX file is the foundation of their estimate and you are entitled to receive
        it. If they refuse or claim they cannot provide it, that refusal itself may be a regulatory
        violation worth reporting to the California Department of Insurance.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Hire Someone Who Works for You
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A{' '}
        <Link href="/resources/public-adjuster" className="text-[#2E74B5] hover:underline">
          Public Adjuster
        </Link>{' '}
        or a certified estimator who works for you — not the carrier — can review the estimate with
        your interests in mind. They are looking for missing line items, incorrect measurements,
        wrong material specifications, underpriced labor, omitted trades, and scope that was never
        documented. They have no incentive to keep the number low. Their incentive runs in the
        opposite direction: to make sure the estimate reflects what the repairs will actually cost
        so that you recover what your policy entitles you to.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A Public Adjuster licensed by the state works exclusively for policyholders. They cannot
        work for carriers. Their license prohibits it. When they review your Xactimate estimate,
        they are looking at it from your side of the table — not the carrier&apos;s.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Remember What Your Policy Actually Says
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your insurance policy obligates the carrier to pay what it costs to repair or replace your
        damaged property (subject to your limits, deductible, and applicable depreciation). It does
        not say they owe whatever a software program calculates. It does not say they owe whatever
        their adjuster writes down. It does not reference Xactimate by name or incorporate its
        pricing by reference.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Xactimate is a tool. It is not your policy. It is not the law. It is not a binding
        arbitration. If the actual cost to repair your home exceeds what Xactimate says — and it
        frequently does — your carrier still owes the actual cost. The software is not a cap on
        your recovery. Do not let anyone tell you otherwise.
      </p>

      <CalloutBox variant="info" title="Xactimate's Own Disclaimer">
        <p>
          Xactimate itself disclaims pricing accuracy in its end-user license agreement. The
          software company states that its prices represent a &quot;baseline&quot; and should not be
          relied upon as the definitive cost of repairs in any particular market or for any
          particular project. In other words, even the company that makes the tool tells you not to
          treat its output as gospel. If Verisk itself does not guarantee the accuracy of its own
          pricing — if the manufacturer disclaims the precision of its own product — your carrier
          has no basis to insist that Xactimate&apos;s number is the final word on what your
          repairs cost.
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
        When you receive an Xactimate estimate from your carrier, read it carefully. Ask questions.
        Get independent verification. And never forget that the entity handing you that number has
        a direct financial interest in making it as small as possible — and so does the company
        that built, owns, and maintains the software that produced it.
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
          <Link href="/resources/xactimate-overhead-profit" className="text-[#2E74B5] hover:underline">
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
