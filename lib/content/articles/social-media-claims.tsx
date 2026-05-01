import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Social Media and Insurance Claims: What Policyholders Need to Know',
  description:
    'How insurance companies use social media, satellite imagery, and digital evidence to investigate property claims — and what policyholders should know to protect themselves.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most people associate social media surveillance with personal injury claims &mdash; the
        classic scenario of someone claiming a back injury while posting ski trip photos. But
        insurance companies also monitor social media during property damage claims, and their
        digital investigation tools now extend far beyond Facebook and Instagram. Satellite
        imagery, aerial photography, and street-view databases give insurers the ability to
        examine your property&rsquo;s condition at multiple points in time &mdash; sometimes
        going back years before your loss.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        While social media issues arise less frequently in property claims than in injury claims,
        they do come up &mdash; and when they do, the consequences can be serious. Understanding
        how insurers use digital evidence can help you avoid innocent mistakes that complicate
        an otherwise legitimate claim.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Insurance Companies Monitor Social Media
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance companies routinely review publicly available social media content as part of
        their claims investigation process. Industry surveys indicate that roughly 65% of
        insurers now incorporate social media research into their investigations, and the
        practice is growing. This monitoring is generally limited to publicly accessible
        content &mdash; adjusters and investigators are not supposed to send friend requests,
        create fake profiles, or access private accounts.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        What they look at includes:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Public posts, photos, and videos</strong> on Facebook, Instagram, TikTok,
          X (formerly Twitter), YouTube, and other platforms
        </li>
        <li>
          <strong>Location tags and check-ins</strong> that show where you were and when
        </li>
        <li>
          <strong>Stories and temporary posts</strong> &mdash; even content that disappears
          can be captured and preserved before it expires
        </li>
        <li>
          <strong>Comments and replies</strong> on your own posts and on other people&rsquo;s posts
        </li>
        <li>
          <strong>Marketplace listings</strong> &mdash; if you list items for sale that were
          claimed as damaged or destroyed
        </li>
        <li>
          <strong>Public profiles on contractor or renovation sites</strong> like Houzz,
          Nextdoor, or local community groups
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Role of the Special Investigations Unit (SIU)
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When an insurance company suspects fraud or identifies inconsistencies in a claim, it
        may refer the file to its{' '}
        <Link href="/resources/recorded-statements-siu" className="text-[#2E74B5] hover:underline">
          Special Investigations Unit (SIU)
        </Link>
        . SIU teams are dedicated fraud investigation departments staffed by former law
        enforcement officers, licensed private investigators, and experienced claims
        professionals. Social media research is one of their primary tools.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        SIU investigators use specialized software to conduct comprehensive searches across
        multiple platforms simultaneously. These tools can aggregate publicly available content,
        identify connections between parties to a claim, and flag inconsistencies between what
        a claimant reported and what their online activity suggests. Some SIU teams also use
        geo-fencing techniques &mdash; creating a virtual perimeter around a loss location and
        collecting any public social media posts, photos, or videos that were geotagged within
        that area during a relevant time frame.
      </p>

      <CalloutBox variant="tip" title="What Triggers an SIU Referral?">
        <p>
          Not every claim gets SIU attention. Common triggers include inconsistencies between
          reported facts and physical evidence, claims filed shortly after a policy is purchased
          or increased, a history of prior claims, and &mdash; increasingly &mdash; social media
          content that contradicts the claim narrative. Learn more about what happens when your
          claim is referred in our guide to{' '}
          <Link href="/resources/recorded-statements-siu" className="text-[#2E74B5] hover:underline">
            recorded statements and SIU investigations
          </Link>.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Satellite Imagery and Aerial Photography
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Social media is only part of the picture. Insurance companies now have access to
        powerful aerial and satellite imaging tools that allow them to examine your
        property&rsquo;s condition over time &mdash; often without ever setting foot on your
        property. The most commonly used platforms include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>EagleView.</strong> The dominant aerial measurement platform in the insurance
          industry. EagleView combines high-resolution aerial imagery with AI-driven
          measurements and is used by most major carriers. Adjusters can pull up detailed roof
          measurements, identify material types, and compare current images to historical
          captures.
        </li>
        <li>
          <strong>Nearmap.</strong> Provides ultra-high-resolution aerial imagery &mdash;
          detailed enough to count individual roof tiles (5.5&ndash;7.5 cm resolution, compared
          to satellite imagery at 20&ndash;50 cm). Nearmap captures imagery of urban areas
          multiple times per year, creating a timeline of your property&rsquo;s condition.
        </li>
        <li>
          <strong>Google Earth and Google Street View.</strong> Freely available historical
          satellite and street-level imagery. Adjusters routinely check Google Earth&rsquo;s
          historical imagery slider to see what your{' '}
          <Link href="/resources/roof-damage" className="text-[#2E74B5] hover:underline">
            roof
          </Link>{' '}
          or property looked like months or years before the reported loss.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        These tools are particularly relevant in{' '}
        <Link href="/resources/pre-existing-vs-storm-damage" className="text-[#2E74B5] hover:underline">
          pre-existing vs. storm damage disputes
        </Link>
        . If an insurer can pull up satellite imagery from before the reported date of loss
        showing that your roof already had missing shingles, tarps, or visible deterioration,
        they will argue that the damage was pre-existing and not caused by the claimed event.
      </p>

      <CalloutBox variant="tip" title="Know What They Can See">
        <p>
          You can check historical satellite imagery of your own property for free using Google
          Earth&rsquo;s timeline feature. This lets you see the same images your insurance
          company may be reviewing. If you know what&rsquo;s visible, you can address it
          proactively in your claim documentation rather than being caught off guard.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Social Media Can Hurt a Property Claim
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        In property claims, social media problems tend to fall into a few specific categories.
        Some involve genuinely fraudulent behavior. Others involve innocent posts that create
        the appearance of a problem where none actually exists. Either way, the result is the
        same: your claim gets delayed, scrutinized, or denied.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Vacation Photos During an ALE Claim
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your home is uninhabitable and you&rsquo;re receiving{' '}
        <Link href="/resources/loss-of-use-maximizing" className="text-[#2E74B5] hover:underline">
          additional living expense (ALE) benefits
        </Link>
        , posting vacation photos from a resort or exotic destination can raise red flags &mdash;
        even if the trip is perfectly legitimate. The insurer may question whether your ALE
        expenses are reasonable and necessary, or whether you&rsquo;re truly displaced. A
        two-week beach vacation during a period when you&rsquo;re claiming you need temporary
        housing creates an optics problem that can trigger additional scrutiny of every receipt
        and expense you&rsquo;ve submitted.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Renovation or Repair Posts That Contradict the Claim
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Posting progress photos of a home renovation project can create problems if the work
        overlaps with items you&rsquo;ve claimed as storm damage or fire damage. For example,
        if you post about remodeling your kitchen in March and then file a claim for kitchen
        damage from a storm in April, the insurer will scrutinize whether the claimed damage
        was actually caused by the storm or was part of a planned renovation. The same applies
        to posting about DIY projects that involve removing or altering components that are
        later claimed as damaged.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Photos Showing Pre-Existing Damage
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Background details in social media photos can be revealing. A birthday party photo that
        happens to show a cracked window, water stains on a ceiling, or a damaged fence &mdash;
        posted months before the reported date of loss &mdash; gives the insurer evidence that
        the damage existed before the claimed event. You may not have even noticed the detail
        in the photo, but an SIU investigator reviewing your feed will.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Posts About Damage Before the Reported Date of Loss
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you post about a leak, a fallen tree, or storm damage before the date you reported
        the loss to your insurance company, it creates a timeline problem. Late reporting is
        not automatically grounds for denial in most states, but it does raise questions about
        whether additional damage occurred due to the delay &mdash; and whether the insurer was
        prejudiced by not being able to inspect the property promptly.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Listing Claimed Items for Sale
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Posting items on Facebook Marketplace, OfferUp, or Craigslist that were reported as
        damaged or destroyed in a claim is one of the most common ways SIU investigators
        catch fraud. If you claimed a television was destroyed in a fire but then list a
        television of the same make and model for sale two weeks later, that will be flagged
        immediately.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What&rsquo;s Discoverable in Litigation
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your claim dispute reaches litigation &mdash; whether through a lawsuit or an{' '}
        <Link href="/resources/examination-under-oath" className="text-[#2E74B5] hover:underline">
          examination under oath
        </Link>
        {' '}&mdash; the scope of what the insurance company can access expands significantly.
        During the discovery phase of litigation, courts have consistently held that social
        media content is discoverable, even content on private or restricted accounts.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Key points about discoverability:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Privacy settings do not protect you.</strong> Courts have routinely ordered
          parties to produce social media content from private accounts when the opposing side
          can show that the content is likely relevant to the claims or defenses in the case.
          The fact that you set a post to &ldquo;Friends Only&rdquo; does not make it
          privileged or protected from discovery.
        </li>
        <li>
          <strong>Metadata matters.</strong> It is not just the content of your posts &mdash;
          timestamps, location data, device information, and edit history can all be relevant
          and discoverable.
        </li>
        <li>
          <strong>Deleted content can be recovered.</strong> Social media platforms retain data
          even after users delete it. Courts can order platforms to produce this data, and
          forensic tools can often recover content that a user believed was permanently removed.
        </li>
        <li>
          <strong>Direct messages may be discoverable.</strong> Private messages on social
          media platforms can also be subject to discovery if they are relevant to the
          dispute &mdash; for example, messages discussing the damage, the claim, or your
          intentions.
        </li>
      </ul>

      <CalloutBox variant="tip" title="Do Not Delete Posts">
        <p>
          If you are involved in an insurance dispute or anticipate litigation, do not delete
          social media posts, photos, or messages. Once you are aware of a potential legal
          proceeding, you have a duty to preserve evidence. Deleting content after that point
          can constitute <strong>spoliation of evidence</strong> &mdash; the intentional
          destruction of relevant evidence. Courts take spoliation seriously and may impose
          sanctions including adverse inference instructions (telling the jury to assume the
          deleted content was unfavorable to you), monetary penalties, or even dismissal of
          your claims.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Practical Guidance for Policyholders
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The best approach to social media during an active insurance claim is simple: assume
        everything you post will be seen by the insurance company. With that in mind, here are
        practical steps to protect yourself:
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        What to Avoid Posting
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Photos or commentary about the damage, the repairs, or the claim process &mdash;
          anything you say can be taken out of context
        </li>
        <li>
          Vacation photos, expensive purchases, or lifestyle content that could be used to
          question the severity of your loss or the reasonableness of your ALE expenses
        </li>
        <li>
          Complaints about your insurance company &mdash; while emotionally satisfying, these
          posts provide the insurer with insight into your state of mind and strategy
        </li>
        <li>
          Details about conversations with your{' '}
          <Link href="/resources/dealing-with-adjuster" className="text-[#2E74B5] hover:underline">
            adjuster
          </Link>
          , your attorney, or your public adjuster
        </li>
        <li>
          Before-and-after renovation or repair photos that could be misinterpreted as
          evidence of pre-existing conditions or unrelated work
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        What You Can Do
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Review your privacy settings</strong> &mdash; while they will not protect
          you from litigation discovery, they do limit what adjusters and SIU investigators
          can access during the pre-litigation investigation phase
        </li>
        <li>
          <strong>Audit your existing posts</strong> &mdash; review your social media history
          for anything that could be misinterpreted in the context of your claim, but do not
          delete anything
        </li>
        <li>
          <strong>Ask family members to be careful</strong> &mdash; a spouse or family member
          posting photos from your property, tagging your location, or commenting about the
          claim can create the same problems
        </li>
        <li>
          <strong>Document damage through proper channels</strong> &mdash; take photos and
          videos of the damage for your claim file, but share them with your adjuster or
          public adjuster directly rather than posting them on social media
        </li>
        <li>
          <strong>Check your own satellite imagery</strong> &mdash; use Google Earth to review
          historical images of your property so you know what the insurer will see
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Difference Between Property and Injury Claims
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Social media surveillance is far more common in bodily injury and disability claims,
        where insurers are looking for evidence that a claimant&rsquo;s physical limitations
        are exaggerated. In property claims, the damage to the building is objective and
        verifiable through inspection &mdash; a burned house is a burned house regardless of
        what the homeowner posts online.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        That said, property claims do have specific social media vulnerabilities. ALE and
        contents claims involve subjective elements (what were you spending? what did you own?
        what was the condition of items before the loss?) that social media can speak to. And
        the timeline of damage &mdash; when it occurred and whether it was pre-existing &mdash;
        is precisely the kind of question that satellite imagery and geotagged social media
        posts can help answer.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What to Do If You Think Social Media Is Being Used Against You
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your insurer raises social media content or satellite imagery during your claim,
        do not panic. There are several important things to keep in mind:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Context matters.</strong> A single photo taken out of context does not tell
          the full story. Your adjuster or public adjuster can provide the context that the
          insurer is ignoring.
        </li>
        <li>
          <strong>Satellite imagery has limitations.</strong> Aerial and satellite images
          showing roof discoloration or streaking are not, by themselves, sufficient to prove
          pre-existing damage. Regulatory guidance in multiple states has clarified that
          low-resolution, blurry, or outdated aerial images cannot be the sole basis for
          denying a claim.
        </li>
        <li>
          <strong>The insurer still has the burden of proof for fraud.</strong> If the insurer
          is alleging fraud, they bear the burden of proving it. A suspicious social media post
          is not proof of fraud &mdash; it is a starting point for further investigation.
        </li>
        <li>
          <strong>Get professional help.</strong> If your claim is being investigated based on
          social media or satellite evidence, this is a situation where having a{' '}
          <Link href="/resources/dealing-with-adjuster" className="text-[#2E74B5] hover:underline">
            public adjuster
          </Link>
          {' '}or attorney involved can make a significant difference.
        </li>
      </ul>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Concerned About Your Claim?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          If your insurance company is using social media content, satellite imagery, or other
          digital evidence to delay or deny your property claim, a public adjuster can help you
          respond effectively and protect your rights.
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
          legal advice. Social media discovery rules and spoliation standards vary by state and
          jurisdiction. Consult with a licensed attorney for guidance specific to your situation.
        </p>
      </CalloutBox>
    </>
  )
}
