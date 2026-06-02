import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'
import { DocumentEmbed } from '@/components/content/DocumentEmbed'

export const meta = {
  title: 'Flood and Mudslide After Wildfire: Why Your Homeowner Policy Covers It',
  description:
    'When wildfire causes subsequent flooding, mudslides, or earth movement, your homeowner policy covers the damage under California\'s efficient proximate cause doctrine. CDI Bulletin 2025-3 explains why.',
  summary:
    'When a wildfire causes later flooding, mudslides, or earth movement, your homeowner policy covers the damage under California\'s efficient proximate cause doctrine, because the fire was the predominant cause. CDI Bulletin 2025-3 confirms this.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="Important Notice">
        <p>
          This article is provided for general educational purposes only and does not constitute
          legal advice. Insurance policies, regulations, and case law can vary significantly based
          on individual circumstances. Consult a licensed attorney for advice about your specific
          situation.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Short Version
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your homeowner policy excludes flood. It excludes earth movement. It excludes mudslide.
        But it covers fire. And when a wildfire is the reason the flood happened, or the reason
        the hillside collapsed, California law says your loss is covered. The excluded peril did
        not act on its own &mdash; the fire set the entire chain in motion. Under the efficient
        proximate cause doctrine, the dominant cause controls, and the dominant cause was a
        covered peril.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is not a gray area. The California Insurance Code establishes it. The California
        Supreme Court has confirmed it repeatedly. And in February 2025, the Department of
        Insurance issued Bulletin 2025-3 reminding carriers &mdash; again &mdash; that they
        cannot deny these claims by pointing at an exclusion while ignoring the fire that caused
        the loss.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The legal framework is straightforward: Insurance Code section 530 says the insurer is
        liable when a covered peril was the proximate cause, even if an uncovered peril was a
        remote cause. Section 530.5, enacted in 2018 after the Montecito mudslides killed 23
        people, reinforces the point. The California Supreme Court in{' '}
        <em>Julian v. Hartford Underwriters Ins. Co.</em> (2005) called efficient proximate
        cause the &ldquo;preferred method&rdquo; for resolving first-party disputes involving
        multiple perils. <em>Garvey v. State Farm</em> (1989) held that coverage exists when
        the covered peril is the predominant cause, even if an excluded peril contributed.{' '}
        <em>Howell v. State Farm</em> (1990) applied this directly to post-fire mudslides and
        held the earth movement exclusion unenforceable when fire was the efficient proximate
        cause.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Despite all of this, carriers still deny these claims. They point to the exclusion,
        hope you do not know the law, and move on. The CDI issued Bulletin 2025-3 because this
        is still happening after the January 2025 Palisades and Eaton fires. Below is the full
        text.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Full Text: CDI Bulletin 2025-3
      </h2>

      <DocumentEmbed
        title="Coverage of Flood, Mudslide, and Earth Movement Claims Relating to Recent Wildfires"
        source="California Department of Insurance"
        date="February 4, 2025"
        type="bulletin"
        sourceUrl="https://insurance.ca.gov/0250-insurers/0300-insurers/0200-bulletins/bulletin-notices-commiss-opinion/upload/Bulletin-2025-3-Coverage-of-Flood-Mudslide-and-Earth-Movement-Claims-Relating-to-Recent-Wildfires.pdf"
      >
        <p><strong>BULLETIN 2025-3</strong></p>
        <p>
          <strong>TO:</strong> All Property and Casualty Insurance Companies Providing Homeowners
          and Commercial Property Insurance in the California Wildfire Areas and Other Interested
          Persons
        </p>
        <p><strong>FROM:</strong> Insurance Commissioner Ricardo Lara</p>
        <p><strong>DATE:</strong> February 4, 2025</p>
        <p>
          <strong>RE:</strong> Coverage of Flood, Mudslide, and Earth Movement Claims Relating to
          Recent Wildfires
        </p>
        <p>
          This Bulletin is to remind insurers of their obligation to comply with existing law
          regarding the &ldquo;efficient proximate cause&rdquo; doctrine. Under the &ldquo;efficient
          proximate cause&rdquo; doctrine established in the California Insurance Code and
          articulated by California courts, insurers may not exclude losses caused by flooding,
          mudflow, debris flow, mudslide, landslide, or other similar events if the facts establish
          that a wildfire (a covered peril) was the efficient proximate cause of the event.
        </p>
        <p>
          California Insurance Code section 530 states: An insurer is liable for a loss of which a
          peril insured against was the proximate cause, although a peril not contemplated by the
          contract may have been a remote cause of the loss; but he is not liable for a loss of
          which the peril insured against was only a remote cause.
        </p>
        <p>
          Insurance Code section 530 sets forth the efficient proximate cause doctrine, an
          interpretive rule for first party insurance disputes. The California Supreme Court and
          other California Appellate Courts have stated that efficient proximate cause doctrine is
          the &ldquo;preferred method for resolving first party insurance disputes involving losses
          caused by multiple risks or perils, at least one of which is covered by insurance and one
          of which is not.&rdquo; <em>Julian v. Hartford Underwriters Ins. Co.</em>, 35 Cal.4th 747,
          753 (2005).
        </p>
        <p>
          Under the efficient proximate cause doctrine, &ldquo;[W]hen a loss is caused by a
          combination of a covered and specifically excluded risks, the loss is covered if the
          covered risk was the efficient proximate cause of the loss, but the loss is not covered if
          the covered risk was only a remote cause of the loss, or the excluded risk was the
          efficient proximate, or predominate cause.&rdquo; <em>Julian v. Hartford Underwriters Ins.
          Co.</em>, at 750 (citing <em>State Farm Fire &amp; Casualty Co. v. Von Der Lieth</em>, 54
          Cal.3d 1123, 1131-1132 (1991).)
        </p>
        <p>
          In the case of <em>Garvey v. State Farm Fire &amp; Casualty Co.</em>, 48 Cal.3d 395, 406
          (1989), the California Supreme Court held that there is coverage only if the covered
          concurrent cause is the efficient proximate cause or predominant cause for the loss. The
          mere fact that a cause is concurrent does not, in itself, provide coverage if the other
          concurrent cause is excluded. &ldquo;Frequently property losses occur which involve more
          than one peril that might be considered legally significant. The task becomes one of
          identifying the most important cause of the loss and attributing the loss to that
          cause.&rdquo; Id. at 406.
        </p>
        <p>
          In <em>Howell v. State Farm Fire &amp; Casualty Co.</em>, 218 Cal.App.3d 1446 (1990), the
          property owner made a claim for landslide damage to her property following heavy rains.
          The insurance company denied the claim because the policy excluded coverage for earth
          movement and water damage. The property owner presented expert testimony that the landslide
          occurred due to a fire, which was covered under the policy and which destroyed vegetation
          on the slope the summer before the landslide. The Court of Appeal concluded that an
          insurance company providing coverage under a property insurance policy may not
          contractually exclude coverage when an insured peril (such as fire) is the efficient
          proximate cause of a loss, regardless of other contributing causes. Id. at 1448. The Court
          found that because fire was the efficient proximate cause of the mudslide, the policy
          exclusion for damage caused by mudslide was not enforceable. Id. at 1452.
        </p>
        <p>
          If it is established that a recent wildfire or another peril covered by the applicable
          policy was the efficient proximate cause of the damage resulting from subsequent mudslides
          and other similar events following the fire, such damage is covered by the policy
          regardless of any exclusion in the applicable policy. Indeed, in 2018 following the
          Montecito mudslides, the California State Legislature approved and the Governor enacted
          Insurance Code section 530.5 to reinforce this point. As the Senate Floor Analysis for the
          bill provides, the author drafted Senate Bill 917 (Jackson, Chapter 620, Statutes of
          2018), which ultimately became section 530.5, to &ldquo;help prevent the confusion in
          situations such as Montecito where homeowners are left to wonder whether the loss of their
          largest single asset &ndash; their home &ndash; will be covered by insurance.&rdquo;
        </p>
        <p>
          Once the insured shows that an event falls within the scope of basic coverage under the
          applicable policy, the burden is on the insurance company to prove a claim is specifically
          excluded. <em>Garvey v. State Farm Fire &amp; Casualty</em>, supra, 406.
        </p>
        <p>
          Based on the foregoing, insurance companies should not deny such claims before diligently
          investigating the cause of loss and carefully considering the facts.
        </p>
      </DocumentEmbed>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What This Means for Policyholders
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Bulletin is short because the law is clear. The CDI is not announcing a new rule.
        It is reminding carriers of an existing one that some of them continue to ignore. Here
        is what it means in practice:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        If your home was damaged by flooding, mudslide, debris flow, or earth movement after a
        wildfire:
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Your homeowner policy likely covers it if the wildfire was the dominant cause of the
          subsequent event. The fire destroyed vegetation and destabilized the hillside. Rain
          mobilized the unstable material. The flood or mudslide was the result. That is a single
          causal chain with fire as the efficient proximate cause.
        </li>
        <li>
          The exclusion for flood, earth movement, or mudslide does not override this analysis.
          Under California law, an exclusion cannot be used to deny a loss when the efficient
          proximate cause was a covered peril.
        </li>
        <li>
          Anti-concurrent causation (ACC) language in your policy does not change this result.
          California does not enforce ACC clauses when they conflict with the efficient proximate
          cause doctrine.
        </li>
        <li>
          The burden shifts to the insurer once you show the loss falls within basic coverage.
          As the Bulletin notes, citing <em>Garvey</em>, it is the carrier&apos;s job to prove
          the exclusion applies &mdash; not your job to prove it does not.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What to Do If Your Claim Is Denied
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your insurer denies a post-wildfire flood or mudslide claim by citing the earth
        movement or flood exclusion without addressing the efficient proximate cause doctrine,
        they are not following the law. Take these steps:
      </p>

      <CalloutBox variant="important" title="Professional Guidance Recommended">
        <p>
          The legal strategies discussed below should be pursued with the guidance of a licensed
          attorney experienced in insurance coverage disputes. A Public Adjuster can assist with
          documentation, claims handling, and negotiation. If you need help finding a qualified
          professional,{' '}
          <Link href="/contact" className="text-[#2E74B5] hover:underline">
            contact us
          </Link>{' '}
          for a referral.
        </p>
      </CalloutBox>

      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Get the denial in writing.</strong> Under California&apos;s{' '}
          <Link href="/resources/california-fair-claims" className="text-blue-700 underline hover:text-blue-900">
            Fair Claims Settlement Practices Regulations
          </Link>, the insurer must cite the specific policy provision it is relying on. A denial
          that says &ldquo;flood exclusion&rdquo; or &ldquo;earth movement exclusion&rdquo; without
          discussing whether fire was the efficient proximate cause is legally insufficient.
        </li>
        <li>
          <strong>Document the fire-to-loss causal chain.</strong> Cal Fire burn perimeter maps,
          USGS debris flow hazard assessments, National Weather Service post-fire flash flood
          warnings, and county geological surveys all establish that the wildfire created the
          conditions for the subsequent flood or mudslide.
        </li>
        <li>
          <strong>Cite the Bulletin and the law.</strong> With attorney guidance, respond to the
          denial citing CDI Bulletin 2025-3, Insurance Code sections 530 and 530.5, and the
          applicable case law (<em>Julian</em>, <em>Garvey</em>, <em>Howell</em>). Make clear
          that the carrier must evaluate the predominant cause, not simply identify an excluded
          peril in the chain.
        </li>
        <li>
          <strong>File a CDI complaint if necessary.</strong> If the insurer maintains its denial
          after you have put them on notice of the law, file a complaint with the California
          Department of Insurance. See our guide on{' '}
          <Link href="/resources/cdi-complaint" className="text-blue-700 underline hover:text-blue-900">
            filing a CDI complaint
          </Link>. The CDI has been particularly attentive to post-wildfire denials that ignore
          the efficient proximate cause doctrine.
        </li>
        <li>
          <strong>Engage a licensed Public Adjuster or coverage attorney.</strong> These claims
          involve causation analysis, policy interpretation, and regulatory requirements. A
          professional who handles these disputes regularly can build the case needed to overturn
          an improper denial.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Related Articles
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <Link href="/resources/wildfire-mudslide-coverage" className="text-blue-700 underline hover:text-blue-900">
            Mudslide After Wildfire: Why Earth Movement Is Covered When Fire Is the Cause
          </Link>{' '}
          &mdash; Our comprehensive guide to the efficient proximate cause doctrine in post-wildfire
          earth movement claims, including the full causal chain analysis, anti-concurrent causation
          clauses, and the Montecito example.
        </li>
        <li>
          <Link href="/resources/wildfire-guide" className="text-blue-700 underline hover:text-blue-900">
            California Wildfire Claims Guide
          </Link>{' '}
          &mdash; Complete overview of wildfire insurance claims, including smoke damage, coverage
          breakdowns, and insurer tactics.
        </li>
        <li>
          <Link href="/resources/anti-concurrent-causation" className="text-blue-700 underline hover:text-blue-900">
            Anti-Concurrent Causation Clauses
          </Link>{' '}
          &mdash; Why California does not enforce ACC language and what that means for your claim.
        </li>
        <li>
          <Link href="/resources/california-fair-claims" className="text-blue-700 underline hover:text-blue-900">
            California Fair Claims Settlement Practices
          </Link>{' '}
          &mdash; Your rights under California&apos;s claims handling regulations.
        </li>
        <li>
          <Link href="/resources/cdi-complaint" className="text-blue-700 underline hover:text-blue-900">
            How to File a CDI Complaint
          </Link>{' '}
          &mdash; Step-by-step guide to filing a complaint with the California Department of
          Insurance.
        </li>
      </ul>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Post-Wildfire Flood or Mudslide Damage?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          If your home was damaged by flooding, mudslide, debris flow, or earth movement after a
          wildfire, you likely have coverage under your homeowner policy. A licensed Public Adjuster
          can document the causal chain, present the efficient proximate cause argument, and ensure
          your claim is handled under the correct legal framework.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Request a Free Claim Review &rarr;
        </Link>
      </div>

      <p className="text-sm text-gray-500 mt-8 italic">
        Written by Leland Coontz III, Licensed Public Adjuster, CA License #2B53445.
      </p>
    </>
  )
}
