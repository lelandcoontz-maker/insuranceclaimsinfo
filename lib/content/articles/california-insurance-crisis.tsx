import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'California\'s Insurance Crisis: What Homeowners Need to Know',
  description:
    'Why California insurers are cancelling policies, leaving the market, and raising rates — and what homeowners can do to protect themselves.',
  summary:
    'California insurers are non-renewing policies, leaving the market, and raising rates because of wildfire risk and regulatory pressure. Homeowners can protect themselves by understanding the FAIR Plan, shopping early, and confirming adequate coverage before a loss.',
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
        California is in the midst of an unprecedented property insurance crisis. Major carriers —
        State Farm, Allstate, Farmers, USAA, and others — have either stopped writing new homeowner
        policies in the state, non-renewed large blocks of existing policies, or dramatically
        increased premiums. For hundreds of thousands of California homeowners, the question is no
        longer whether insurance is getting more expensive — it is whether they can get insurance at
        all.
      </p>

      <CalloutBox variant="warning" title="If You've Received a Non-Renewal Notice">
        <p>
          Do not ignore it. You typically have 75 days to find replacement coverage before
          your current policy expires. If you cannot find a standard market policy, the{' '}
          <Link href="/resources/california-fair-plan" className="underline font-semibold">California FAIR Plan</Link>{' '}
          is your safety net — but apply early, as processing times have increased dramatically.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What is Driving the Crisis
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The crisis has no single cause. It is the result of several converging factors that have
        made California increasingly unprofitable for property insurers:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Wildfire catastrophe losses.</strong> The 2017 and 2018 wildfire seasons produced
          over $30 billion in insured losses. The 2025 Palisades and Eaton fires are projected to
          exceed $35 billion in structural losses alone. These are not one-off events — they are
          the new baseline.
        </li>
        <li>
          <strong>Proposition 103 and rate regulation.</strong> Under Prop 103 (1988), California
          insurers must get prior approval from the Department of Insurance before raising rates.
          Historically, they could not use catastrophe models to project future losses and had to
          base rates on historical loss data &mdash; a framework insurers argued prevented them
          from pricing risk accurately in an era of accelerating climate-driven losses. (Insurance
          Commissioner Lara&apos;s late-2023 Sustainable Insurance Strategy began relaxing this
          restriction, but implementation has been gradual; see below.)
        </li>
        <li>
          <strong>Rising construction costs.</strong> Rebuilding costs in California have surged due
          to labor shortages, material cost inflation, and stricter building codes. Homes that cost
          $250/sq ft to build a decade ago may now cost $400–$600/sq ft.
        </li>
        <li>
          <strong>Reinsurance cost increases.</strong> Reinsurance — the insurance that insurance
          companies buy to protect themselves — has become dramatically more expensive worldwide.
          These costs get passed through to policyholders.
        </li>
        <li>
          <strong>Regulatory reforms lagging behind.</strong> Insurance Commissioner Ricardo Lara
          announced regulatory changes in late 2023 to allow insurers to use catastrophe models and
          factor reinsurance costs into rates, but implementation has been slow. In the meantime,
          carriers continued their exits.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Which Insurers Have Left or Restricted Coverage
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A partial list of major actions:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>State Farm</strong> — Stopped accepting new homeowner applications statewide in May 2023. Followed with over 70,000 non-renewals in 2024–2025.</li>
        <li><strong>Allstate / Encompass</strong> — Stopped new homeowner policies in California in late 2022.</li>
        <li><strong>Farmers</strong> — Stopped new policies in July 2023. Later announced limited new business only through select agents.</li>
        <li><strong>USAA</strong> — Restricted new policies in certain high-risk zip codes.</li>
        <li><strong>Chubb, AIG</strong> — Reduced high-value homeowner coverage in wildfire-prone areas.</li>
        <li><strong>Multiple smaller carriers</strong> — Reduced or eliminated California homeowner lines entirely.</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Impact on Homeowners
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The practical consequences are severe:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Premiums have doubled or tripled</strong> in many areas, particularly in
          wildfire-prone foothills and canyon communities.
        </li>
        <li>
          <strong>Finding any coverage at all</strong> has become difficult in some zip codes.
          Homeowners report calling 10–15 agents and being declined by all of them.
        </li>
        <li>
          <strong>The FAIR Plan has exploded in size.</strong> The number of dwelling policies has
          more than doubled in the last four years — from roughly 200,000 to over 450,000 policies.
          The FAIR Plan was never designed to be this large.
        </li>
        <li>
          <strong>Home sales are affected.</strong> Mortgage lenders require homeowner insurance. If a
          buyer cannot get coverage, the transaction can fall apart. This depresses property values
          in affected areas.
        </li>
        <li>
          <strong>Underinsurance is rampant.</strong> Homeowners who can get coverage are often
          underinsured because they chose lower coverage limits to make premiums affordable, or
          because their insurer has not updated replacement cost estimates to reflect actual
          construction costs.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Your Rights Under California Law
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California has several protections for policyholders — though they do not solve the
        underlying market problem:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Non-renewal notice requirements.</strong> Insurers must give at least 75 days&apos;
          written notice before non-renewing a policy (Insurance Code § 678). For policies in effect
          less than one year, 20 days is sufficient.
        </li>
        <li>
          <strong>Wildfire emergency moratoriums.</strong> Under Insurance Code § 675.1, the
          Commissioner can impose a one-year moratorium on non-renewals in zip codes affected by a
          declared wildfire emergency. This has been activated after recent fires, including the
          2025 LA fires. The moratorium applies to the affected zip codes and adjacent zip codes.
        </li>
        <li>
          <strong>Renewal protections after a total loss.</strong> After a declared emergency
          causing a total loss not due to the insured&rsquo;s negligence, insurers must offer
          to renew the residential policy for at least two annual renewal periods, but no less
          than 24 months of coverage from the date of the loss (Insurance Code &sect; 675.1(a)(3)).
        </li>
        <li>
          <strong>Right to the FAIR Plan.</strong> Any California property owner who has been denied
          coverage in the private market can apply for the California FAIR Plan. The insurer denying
          coverage must provide a declination letter, which you use to apply.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What You Can Do Right Now
      </h2>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Review your current policy carefully.</strong> Do not wait for a non-renewal notice.
          Check your{' '}
          <Link href="/resources/declarations-page" className="text-[#2E74B5] hover:underline">declarations page</Link>{' '}
          to understand your limits. Are your Coverage A (dwelling) limits sufficient to rebuild at
          current construction costs? Most policies have not kept pace.
        </li>
        <li>
          <strong>Document your property&apos;s defensible space and harden your home.</strong> The CDI&apos;s{' '}
          <strong>Safer from Wildfires</strong> framework now requires insurers to offer discounts for
          wildfire mitigation — every qualifying action earns a discount, and doing more saves more.
          Key steps include: installing a Class A fire-rated roof, adding ember-resistant vents with
          1/16&rdquo; to 1/8&rdquo; mesh screening, upgrading to multi-pane windows, creating a 5-foot
          non-combustible zone around the home (stone or decomposed granite, not wood chips), replacing
          wood fencing with metal where it connects to the house, enclosing eaves with non-combustible
          materials, and maintaining defensible space per CAL FIRE standards. Community-level programs
          like <strong>Firewise USA</strong> also qualify for additional discounts. Document every
          improvement with photos and receipts — these mitigation steps can make the difference between
          getting coverage and being non-renewed.
        </li>
        <li>
          <strong>Get a replacement cost estimate.</strong> Do not rely on your insurer&apos;s automated
          estimate. Hire a contractor or appraiser to provide a realistic rebuild cost. This is
          your best defense against underinsurance.
        </li>
        <li>
          <strong>Shop early if your renewal is coming up.</strong> Start looking 90+ days before
          your renewal date. If your current carrier non-renews, you&apos;ll have the 75-day notice
          period — but do not wait until the last week.
        </li>
        <li>
          <strong>Consider a surplus lines carrier.</strong> Surplus lines insurers (non-admitted
          carriers) are not subject to Prop 103 rate regulation and can price policies based on
          their own risk models. Premiums are higher, but coverage may be available when admitted
          carriers will not write the risk. Ask your broker about options.
        </li>
        <li>
          <strong>Apply for the FAIR Plan early.</strong> Processing times have stretched from days
          to weeks as application volume has surged. The FAIR Plan provides basic fire coverage, but
          you&apos;ll need a separate policy (called a &ldquo;Difference in Conditions&rdquo; or DIC
          policy) to get comprehensive coverage including theft, liability, and water damage.
        </li>
      </ol>

      <CalloutBox variant="tip" title="FAIR Plan + DIC = Full Coverage">
        <p>
          The FAIR Plan only covers fire and a few named perils. To get something closer to a
          standard homeowner policy, you need a &ldquo;wrap-around&rdquo; or DIC (Difference in
          Conditions) policy. Several carriers offer DIC policies specifically designed to pair with
          the FAIR Plan. Ask your broker about this combination — it is becoming the standard
          solution in many high-risk areas.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What About Claims on Existing Policies?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you have a current policy and suffer a loss, your insurer must honor the policy regardless
        of whether they plan to non-renew you afterward. The crisis does not change your coverage
        rights — it changes your ability to get future coverage. However, be aware of several
        practical impacts:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Adjuster shortages.</strong> After a major event, the influx of claims overwhelms
          insurer staff. Independent adjusters are hired en masse, and quality varies wildly. Your
          claim may be assigned to an adjuster who is juggling 50+ files and has no California
          expertise.
        </li>
        <li>
          <strong>Lowball initial offers.</strong> The pressure on insurer profitability makes
          aggressive claims handling even more likely. Do not accept the first offer without
          independent analysis. See our guide on{' '}
          <Link href="/resources/negotiation" className="text-[#2E74B5] hover:underline">claim negotiation</Link>.
        </li>
        <li>
          <strong>Underinsurance discovery at claim time.</strong> Many homeowners discover they are
          underinsured only after a total loss. If your dwelling limit is $400,000 but it costs
          $700,000 to rebuild, you have a $300,000 gap. California&apos;s extended replacement cost
          endorsement (if you have it) may cover an additional 25–50% above your limit, but even
          that may not be enough.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How a Public Adjuster Can Help
      </h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        A Licensed Public Adjuster works for you — not the insurance company. In a market where
        insurers are under pressure to minimize payouts, having a professional advocate on your
        side is more important than ever. A PA can help you document the full scope of your loss,
        identify all applicable coverages (including{' '}
        <Link href="/resources/ordinance-law" className="text-[#2E74B5] hover:underline">ordinance or law</Link>,{' '}
        <Link href="/resources/ale-frv" className="text-[#2E74B5] hover:underline">ALE</Link>,{' '}
        <Link href="/resources/debris-removal" className="text-[#2E74B5] hover:underline">debris removal</Link>),
        and negotiate for the full settlement you are entitled to.
      </p>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Dealing With a Claim in This Market?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          Whether you have been non-renewed, underinsured, or just need help navigating a claim —
          we are here to help. Free consultation, no obligation.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Request a Free Claim Review →
        </Link>
      </div>

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
