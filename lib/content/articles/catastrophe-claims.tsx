import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Catastrophe Claims: Why Disaster Claims Are Handled Differently and What It Means for You',
  description:
    'Catastrophe claims are processed faster, by less experienced adjusters, under enormous volume pressure. Learn why CAT claims are chronically underpaid and what you can do about it.',
  summary:
    'After a disaster, claims are processed at high volume by traveling CAT adjusters under speed pressure, which makes them chronically underpaid. Expect errors, document thoroughly, and be ready to challenge a rushed estimate.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="Disclaimer">
        <p>
          This article is for educational purposes only and does not constitute legal or insurance
          advice. Every claim is different. For guidance on your specific situation, consult a
          licensed Public Adjuster or an attorney experienced in insurance coverage disputes.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        When a hurricane, wildfire, tornado, or other large-scale disaster strikes, the insurance
        industry shifts into a fundamentally different mode of operation. The claims you file after
        a declared catastrophe are not handled the same way as a kitchen fire or a burst pipe on a
        Tuesday afternoon. They are processed under extreme volume pressure, by adjusters who may
        have no familiarity with your area or your type of construction, and under organizational
        structures designed for speed &mdash; not accuracy.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Understanding how catastrophe (&ldquo;CAT&rdquo;) claims work &mdash; and why they are
        chronically underpaid &mdash; is essential to protecting yourself.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Makes a &ldquo;CAT&rdquo; Claim Different
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurance industry assigns a &ldquo;CAT number&rdquo; to large-scale events through
        organizations like the Property Claim Services (PCS) division of ISO. When an event
        receives a CAT designation, it triggers a cascade of operational changes at every carrier
        affected:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Mass deployment of adjusters.</strong> Carriers activate contracts with
          independent adjusting (IA) firms and deploy hundreds or thousands of{' '}
          <Link href="/resources/adjuster-types" className="text-blue-700 underline hover:text-blue-900">
            independent adjusters
          </Link>{' '}
          to the disaster area. These adjusters may be from across the country, with little or
          no familiarity with local construction methods, materials, labor costs, or building
          codes.
        </li>
        <li>
          <strong>Volume-over-accuracy incentives.</strong> The operational goal in a CAT
          deployment is to process as many claims as possible in the shortest time. Adjusters may
          be expected to handle 4&ndash;8 inspections per day. With that kind of volume, the
          quality of each individual inspection inevitably suffers.
        </li>
        <li>
          <strong>Remote desk handling.</strong> Many CAT claims are partially or entirely handled
          by desk adjusters who never visit the property. Estimates may be written from satellite
          imagery, drone photos, or policyholder-submitted photos &mdash; none of which capture
          the full scope of damage the way an on-site inspection does.
        </li>
        <li>
          <strong>Expedited decision-making.</strong> Carriers under catastrophe pressure often
          push for rapid claim closures, partial payments, and quick settlements. The implicit
          message is: take the money now, we&rsquo;ll sort out the rest later. The &ldquo;rest
          later&rdquo; often never comes unless the policyholder pushes for it.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How CAT Adjusters Are Compensated &mdash; and Why It Matters
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Understanding how adjusters are paid helps explain why CAT claims are so often underpaid.
        The compensation model has evolved over the decades, but its history still shapes the
        industry.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        The Historical Percentage Model
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        For decades, independent adjusters deployed to catastrophes were paid a percentage of the
        claims they closed. The fee schedule was typically based on the claim value &mdash;
        commonly 2% to 6% of the settlement amount, with the percentage decreasing as the claim
        size increased. On the surface, this might seem to incentivize adjusters to write larger
        estimates (more money = higher fee). In practice, the opposite was true.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The percentage-based model created an inherent conflict: adjusters earned more by closing
        claims quickly at <em>any</em> amount, not by getting the amount right. An adjuster who
        spent four hours thoroughly documenting a $50,000 claim earned the same fee as one who
        spent 45 minutes writing a $30,000 estimate on the same property &mdash; and the fast
        adjuster could move on to the next claim and earn another fee. Volume, not accuracy, drove
        income.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Modern Compensation Models
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The industry has shifted significantly. Non-catastrophe independent adjusters today are
        typically paid hourly, on timesheets, on day rates, or sometimes salary. Even CAT adjusters
        are increasingly paid flat fees per inspection or day rates rather than a percentage of
        the claim value. But the percentage model persisted in major catastrophe deployments well
        into the 2010s, and some adjusting firms may still use percentage-based fee structures
        in certain deployments.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Even under modern compensation models, the volume pressure remains. An adjuster paid a
        flat fee per inspection still earns more by doing six inspections a day than by doing
        three thorough ones. The financial incentive to move fast and write lean is baked into the
        CAT deployment model regardless of the specific pay structure.
      </p>

      <CalloutBox variant="important" title="The Adjuster&rsquo;s Incentive Is Not Your Incentive">
        <p>
          Whether paid by percentage, flat fee, or day rate, the CAT adjuster&rsquo;s financial
          incentive is to close claims quickly. Your incentive is to have your damage fully and
          accurately documented. These incentives are in direct conflict. This is not a criticism
          of individual adjusters &mdash; many are honest professionals doing their best under
          difficult conditions. It is a structural problem with how catastrophe claims are handled.
          Understanding this dynamic helps you understand why supplements are almost always
          necessary on CAT claims.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why CAT Claims Are Chronically Underpaid
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The underpayment of catastrophe claims is not a conspiracy &mdash; it is the predictable
        result of structural factors that all push in the same direction:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Volume pressure:</strong> When a carrier has 10,000 open claims from a single
          event, the priority is triage. Adjusters are under enormous pressure to close files.
          Thoroughness is the first casualty.
        </li>
        <li>
          <strong>Inexperienced adjusters:</strong> CAT deployments pull in adjusters from all
          experience levels, including newly licensed adjusters handling their first large claims.
          An adjuster who primarily handles auto claims in Ohio may be assigned to a complex
          wildfire structural loss in California. They may not know how to identify fire-damage
          indicators in framing, may not understand California-specific construction methods, and
          may not be familiar with local code requirements.
        </li>
        <li>
          <strong>Limited time per property:</strong> When an adjuster is expected to inspect
          4&ndash;8 properties per day, each inspection gets 30&ndash;90 minutes. A thorough{' '}
          <Link href="/resources/scope-of-loss" className="text-blue-700 underline hover:text-blue-900">
            scope of loss
          </Link>{' '}
          on a complex property &mdash; involving roof access, attic inspection, crawlspace
          inspection, moisture mapping, documentation of every room &mdash; takes hours, not
          minutes.
        </li>
        <li>
          <strong>Remote desk handling:</strong> Many CAT claims are handed off to desk adjusters
          who write estimates based on photos and satellite imagery. A desk adjuster cannot feel
          that the subfloor is soft, cannot smell smoke behind the walls, cannot see the crack in
          the foundation that only appears from inside the crawlspace.
        </li>
        <li>
          <strong>Standardized scoping templates.</strong> Some carriers use pre-built scoping
          templates for CAT claims &mdash; essentially fill-in-the-blank damage assessments that
          standardize the scope of loss across thousands of properties. Your home is not standard.
          Your damage is not standard. A template-driven estimate will miss the specific damage to
          your specific property.
        </li>
        <li>
          <strong>Post-disaster price surges are ignored.</strong> After a catastrophe, demand for
          labor and materials skyrockets. Contractors are booked months out, material prices spike,
          and temporary housing costs explode. Carriers often price their estimates at
          pre-disaster or national-average rates rather than the actual post-disaster cost of
          reconstruction in the affected market.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Supplements Are Almost Always Necessary
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Given the structural pressures described above, the initial estimate on a CAT claim is
        almost never complete. Filing a{' '}
        <Link href="/resources/supplemental-claims" className="text-blue-700 underline hover:text-blue-900">
          supplemental claim
        </Link>{' '}
        is not adversarial &mdash; it is a normal and expected part of the process. Common items
        missed or underpriced in initial CAT estimates include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Hidden damage discovered during demolition or repair</li>
        <li>
          Matching requirements for roofing, siding, flooring, and paint that extend the scope
          beyond the directly damaged area
        </li>
        <li>Code upgrade costs that the initial adjuster did not identify</li>
        <li>
          Overhead and profit (O&amp;P) for the general contractor, which is frequently excluded
          from initial CAT estimates
        </li>
        <li>Contents that were damaged but not inventoried during the initial inspection</li>
        <li>Additional living expense (ALE) costs that exceed the initial estimate</li>
        <li>
          Debris removal costs, particularly in wildfire total losses where the entire structure
          must be removed
        </li>
      </ul>

      <CalloutBox variant="tip" title="Do Not Accept the First Estimate as Final">
        <p>
          The initial estimate on a CAT claim is a starting point, not a final offer. Document
          everything the adjuster missed, get your own contractor&rsquo;s estimate, and file a
          supplement. Carriers expect supplements on CAT claims. They budget for them. The
          policyholders who get paid properly are the ones who push back &mdash; those who accept
          the first number leave money on the table.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        California-Specific Protections for CAT Claims
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California has enacted several protections specifically designed for policyholders affected
        by declared disasters:
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        CDI Emergency Regulations
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        After a declared disaster, the California Department of Insurance (CDI) can issue emergency
        regulations that impose additional requirements on insurers handling claims in the disaster
        area. These emergency regulations have included:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Extended deadlines + primary point of contact:</strong> When a third or later
          adjuster is assigned to a residential disaster claim within six months, Cal. Ins. Code
          &sect; 14047 (added by SB 240, 2019) requires a written status report and a designated
          primary point of contact.
        </li>
        <li>
          <strong>Mandatory four-month ALE advance:</strong> Under Cal. Ins. Code &sect; 2061
          (added by SB 872, 2020), an insurer must offer at least four months of ALE upfront, in
          a lump sum, on request after a total loss in a declared state of emergency &mdash;
          without requiring an itemized list.
        </li>
        <li>
          <strong>Three-tier ALE timeline:</strong> Cal. Ins. Code &sect; 2060(b)(1) (SB 872,
          2020) sets a 24-month minimum ALE coverage period for declared-emergency residential
          losses, with up to 12 additional months for delays beyond the insured&rsquo;s control
          and successive six-month good-cause extensions thereafter.
        </li>
        <li>
          <strong>Combined-coverage flexibility:</strong> Under Cal. Ins. Code &sect; 10103.7(a),
          an insured may combine the dwelling and Other Structures limits to rebuild the primary
          dwelling when the dwelling limit alone is insufficient.
        </li>
        <li>
          <strong>60% / \$350,000 contents advance:</strong> Cal. Ins. Code &sect; 10103.7(b)(1)
          (as amended by SB 495, effective January 2026) requires insurers to advance at least
          60% of the personal property limit, up to \$350,000, without an itemized inventory.
        </li>
        <li>
          <strong>Non-renewal moratoriums:</strong> Cal. Ins. Code &sect; 675.1(b) (added by SB
          824, 2018) prohibits cancellation or non-renewal of residential property policies in
          ZIP codes within or adjacent to a wildfire perimeter for one year after a state-of-
          emergency declaration. After a total loss, &sect; 675.1(a)(3) requires the insurer to
          offer at least 24 months of continued coverage.
        </li>
        <li>
          <strong>Expanded replacement cost options:</strong> Cal. Ins. Code &sect; 2051.5(b)(1)(B)
          gives policyholders at least 36 months from the first ACV payment to collect full
          replacement cost on losses related to a declared state of emergency, with additional
          six-month good-cause extensions under &sect; 2051.5(b)(2). Cal. Ins. Code &sect; 2051.5(c)
          confirms the right to rebuild at a different location and still recover the full
          replacement cost (capped at what it would have cost to rebuild on the original site).
        </li>
      </ul>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Fair Claims Settlement Practices Still Apply
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A declared disaster does not suspend the California Fair Claims Settlement Practices
        Regulations (10 CCR &sect; 2695.1 et seq.). Carriers must still:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Acknowledge claims promptly</li>
        <li>Investigate thoroughly</li>
        <li>Accept or deny within the regulatory timeframe</li>
        <li>Pay undisputed amounts without delay</li>
        <li>Provide written explanations for any denial or reduction</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the carrier is violating these requirements &mdash; even in a catastrophe &mdash; you
        have the right to file a complaint with CDI and to pursue remedies under California&rsquo;s
        unfair claims practices statutes.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The FAIR Plan and Catastrophe Claims
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The{' '}
        <Link href="/resources/california-fair-plan" className="text-blue-700 underline hover:text-blue-900">
          California FAIR Plan
        </Link>{' '}
        has become increasingly central to catastrophe claims in California as private carriers
        have retreated from the market. With over 450,000 policies in force &mdash; many
        concentrated in wildfire-prone areas &mdash; the FAIR Plan faces enormous exposure in any
        major wildfire event. FAIR Plan claims are subject to the same Fair Claims Settlement
        Practices regulations as any other carrier, but policyholders should be aware of the FAIR
        Plan&rsquo;s more limited coverage (fire and named perils only, ACV on contents, limited
        or no ordinance or law coverage) and plan accordingly.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Protect Yourself on a CAT Claim
      </h2>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Document everything before, during, and after.</strong> Photograph every room,
          every surface, every item of damage. Video is even better. Do not clean up or make
          permanent repairs before the adjuster inspects, unless emergency repairs are needed to
          prevent further damage.
        </li>
        <li>
          <strong>Be present for the inspection.</strong> Walk the property with the adjuster.
          Point out damage they might miss. Take notes on what they look at and what they skip.
          If they do not go in the attic, crawlspace, or on the roof, note that in writing.
        </li>
        <li>
          <strong>Get your own estimate.</strong> Hire a licensed contractor or a{' '}
          <Link href="/resources/public-adjuster" className="text-blue-700 underline hover:text-blue-900">
            Public Adjuster
          </Link>{' '}
          to prepare an independent estimate. This gives you a basis for comparison and a
          foundation for your supplement.
        </li>
        <li>
          <strong>Do not sign a final release without understanding it.</strong> Some carriers
          will ask you to sign a &ldquo;proof of loss&rdquo; or a release in exchange for
          payment. Read it carefully. If it says &ldquo;full and final settlement,&rdquo; you
          may be waiving your right to file a supplement. You can accept partial payment without
          waiving your right to additional recovery.
        </li>
        <li>
          <strong>Track your ALE expenses.</strong> Keep every receipt for hotels, restaurants,
          rental housing, storage, pet boarding, and other displacement costs. These are
          reimbursable under your ALE coverage, but the carrier will require documentation.
        </li>
        <li>
          <strong>Keep a written log of all communications.</strong> Document every phone call
          (date, time, who you spoke with, what was said), every email, every letter. If the
          claim becomes disputed, this log is invaluable.
        </li>
      </ol>

      <CalloutBox variant="important" title="Consider Hiring a Public Adjuster Early">
        <p>
          On catastrophe claims, the gap between the initial estimate and the actual cost of
          proper restoration is often tens of thousands of dollars &mdash; sometimes hundreds of
          thousands. A licensed{' '}
          <Link href="/resources/public-adjuster" className="text-blue-700 underline hover:text-blue-900">
            Public Adjuster
          </Link>{' '}
          works for you, not the insurance company, and is experienced in identifying missed
          damage, filing supplements, and negotiating with carriers. The earlier a Public Adjuster
          is involved, the more effectively your claim can be documented from the start. Learn
          more about{' '}
          <Link href="/resources/dealing-with-adjuster" className="text-blue-700 underline hover:text-blue-900">
            dealing with adjusters
          </Link>{' '}
          on your claim.
        </p>
      </CalloutBox>

      <hr className="my-8 border-gray-200" />

      <p className="text-sm text-gray-500 leading-relaxed mb-4">
        This article is for educational purposes only and does not constitute legal or insurance
        advice. Every claim is different, and your recovery depends on your specific policy
        language, the facts of your loss, and applicable state law. For guidance on your
        particular situation, consult a licensed Public Adjuster or an attorney experienced in
        insurance coverage.
      </p>
      <p className="text-sm text-gray-500 leading-relaxed">
        Written by Leland Coontz III, Licensed Public Adjuster, CA License #2B53445.
      </p>
    </>
  )
}
