import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'How to Document Damage for Your Insurance Claim',
  description:
    'A step-by-step guide to photographing, videoing, and recording property damage so your insurance company cannot minimize or deny your claim.',
  summary:
    'Document damage with date-stamped photos and video of everything before you clean up or repair, capturing both wide shots and close-ups, plus a written inventory with receipts. Thorough documentation is your strongest defense against an insurer minimizing or denying the claim.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        The evidence you gather in the first hours and days after a loss determines what you get paid.
        Insurance companies deny and underpay claims every day because policyholders failed to
        document damage before cleanup began. This guide gives you a system for capturing proof that
        holds up against adjuster pushback, engineering reports, and even litigation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your phone is your most powerful claims tool. Use it deliberately. Every photo, video, and
        note you take creates evidence that the insurer must contend with when they write their
        estimate.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why Documentation Matters More Than You Think
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under California Insurance Code Section 790.03(h), insurers must conduct a reasonable
        investigation before denying or underpaying a claim. But &ldquo;reasonable&rdquo; often means
        they look for reasons to pay less. Your documentation takes that option away. When you hand
        the adjuster 200 time-stamped photos and a narrated walkthrough video, they cannot claim the
        damage was pre-existing or less severe than you reported.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The adjuster who inspects your property may spend 30 minutes to two hours on site. They will
        miss things. Your documentation fills the gaps they leave behind, whether intentionally or
        through haste.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Two-Layer Photo System: Wide and Close
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Every damaged area needs two types of photos:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Wide-angle (context) shots:</strong> Stand in the doorway of each room and take a
          photo that shows the entire space. This establishes where damage is located relative to the
          room. Shoot from multiple corners if possible.
        </li>
        <li>
          <strong>Close-up (detail) shots:</strong> Move in to 12 to 18 inches from the damage. Show
          cracks, stains, char marks, water lines, mold growth, or whatever the specific damage is.
          Include a ruler, coin, or your hand for scale.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The wide shot proves location. The close-up proves severity. You need both. An insurer can
        dismiss a close-up of a crack if they cannot tell where in the house it is. They can dismiss
        a wide shot if they cannot see the damage clearly.
      </p>

      <CalloutBox variant="tip" title="Time-Stamp Everything">
        <p>
          Turn on your phone&rsquo;s location services and make sure the date/time stamp in your
          photo metadata (EXIF data) is accurate. If you want visible proof, hold a newspaper or
          display the date on a tablet in the first photo of each session. This prevents any argument
          that your photos were taken at a different time.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Narrated Video Walkthrough
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Photos capture moments. Video captures the full picture. Record a slow, narrated walkthrough
        of your entire property. Here is the technique:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Start outside at the front of the property. State your name, the date, and your address
          out loud.
        </li>
        <li>
          Walk slowly through the exterior, pausing at each area of visible damage. Describe what
          you see: &ldquo;This is the north side of the roof. You can see three rows of missing
          shingles starting at the ridge.&rdquo;
        </li>
        <li>
          Enter the home and move room by room. At each doorway, state which room you are in.
        </li>
        <li>
          Pan slowly. Do not jerk the camera. Pause on damage for at least five seconds.
        </li>
        <li>
          Point out things the camera might miss: smells, moisture, soft spots in flooring,
          discoloration that is hard to capture on video.
        </li>
        <li>
          Open cabinets, closets, and drawers to show contents damage.
        </li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        This video becomes your baseline. If the insurer later claims certain damage was not
        present at the time of loss, your dated video proves otherwise.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Room-by-Room Walkthrough Checklist
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Work systematically. Do not skip rooms because they &ldquo;look fine.&rdquo; Damage hides.
        Water travels through walls. Smoke penetrates everything. For each room, document:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Ceiling: stains, cracks, sagging, discoloration, peeling paint</li>
        <li>Walls: water marks, smoke staining, cracks, bulging, bubbling paint</li>
        <li>Flooring: warping, buckling, staining, soft spots, moisture readings if you have a meter</li>
        <li>Windows and doors: broken glass, warped frames, failure to seal</li>
        <li>Electrical: non-functioning outlets, flickering lights, visible damage to panels</li>
        <li>Cabinets and built-ins: water damage, warping, smoke residue, discoloration</li>
        <li>Contents: damaged furniture, electronics, clothing, personal items</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Before-and-After Evidence
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        &ldquo;Before&rdquo; photos are gold. If you have them, find them now. Check:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Google Photos or iCloud photo libraries (search by room or address)</li>
        <li>Real estate listing photos from when you bought the home (Zillow, Redfin archives)</li>
        <li>Holiday photos that show rooms in the background</li>
        <li>Video calls where your home is visible</li>
        <li>Home improvement project photos</li>
        <li>Social media posts showing your home interior</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Before photos defeat the &ldquo;pre-existing damage&rdquo; argument. If your realtor took
        photos showing a perfect roof three years ago, and your roof is destroyed now, the cause is
        obvious.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Documenting Receipts and Costs
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Keep every receipt from the moment of loss forward. This includes:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Emergency repairs (tarps, board-ups, water extraction)</li>
        <li>Hotel and temporary housing costs</li>
        <li>Meals when you cannot cook at home</li>
        <li>Replacement clothing and essentials</li>
        <li>Storage unit fees</li>
        <li>Gas for extra driving due to displacement</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Photograph each receipt immediately. Paper receipts fade. Store digital copies in a
        dedicated folder (cloud storage is best). These expenses may be reimbursable under your{' '}
        <Link href="/resources/ale-frv" className="text-blue-700 underline hover:text-blue-900">
          additional living expenses
        </Link>{' '}
        coverage or as part of your emergency repair obligations.
      </p>

      <CalloutBox variant="warning" title="Do Not Discard Damaged Items">
        <p>
          Under California law, the insurer has a right to inspect damaged property. If you throw
          things away before they inspect, they may use that against you. Photograph everything
          first, then keep items in a safe place until the adjuster confirms they have been
          documented. If something is a health hazard (mold, sewage-soaked materials), photograph
          extensively and note the reason for disposal.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What the Adjuster Needs vs. What Protects You
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The adjuster needs enough to write their estimate: photos of damage, measurements, and
        access to the property. But what protects you is everything that captures the full extent of
        the loss, including damage the adjuster might minimize or overlook.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Document more than you think necessary. Take 300 photos, not 30. It costs nothing and the
        one photo you did not take is always the one you need six months later when the insurer
        disputes a line item.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Organizing Your Documentation
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Create a simple folder system:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Exterior photos</strong> &mdash; organized by side of house (north, south, east,
          west) and roof
        </li>
        <li>
          <strong>Interior photos</strong> &mdash; one subfolder per room
        </li>
        <li>
          <strong>Contents damage</strong> &mdash; photos of each damaged personal item
        </li>
        <li>
          <strong>Videos</strong> &mdash; full walkthrough and any detail clips
        </li>
        <li>
          <strong>Receipts and invoices</strong> &mdash; emergency repairs, temporary housing,
          expenses
        </li>
        <li>
          <strong>Correspondence</strong> &mdash; every email, letter, and text with the insurer
        </li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        Upload everything to cloud storage immediately. Hard drives fail. Phones get lost. A Google
        Drive or Dropbox folder with automatic sync protects your evidence.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Special Documentation Situations
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Water damage:</strong> Water travels. Check ceilings below bathrooms, walls adjacent
        to plumbing, and flooring at the base of exterior walls. Document water stains at their
        widest point. If stains are growing, photograph them daily with a dated reference.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Fire and smoke:</strong> Smoke damage is often invisible to photos. Document by
        wiping a white cloth across surfaces and photographing the residue. Note odors in your
        narration. Photograph soot patterns on walls and ceilings.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Wind and hail:</strong> Get on the roof if safe (or hire someone with a drone).
        Ground-level photos do not capture roof damage. Document fallen debris where it landed.
        Photograph neighbor damage for context of the storm&rsquo;s severity.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Theft and vandalism:</strong> Do not touch or clean anything until police have
        responded and you have documented the scene. Photograph forced entry points, rifled drawers,
        and the absence of stolen items (empty spaces where things were).
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        After You Document: Next Steps
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Once you have thorough documentation, you are ready to move forward with your claim. Your
        immediate priorities:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Report the claim to your insurer if you have not already (see our{' '}
          <Link href="/resources/first-72-hours-after-loss" className="text-blue-700 underline hover:text-blue-900">
            first 72 hours guide
          </Link>)
        </li>
        <li>
          Begin your{' '}
          <Link href="/resources/contents-claims" className="text-blue-700 underline hover:text-blue-900">
            personal property inventory
          </Link>
        </li>
        <li>
          Prepare for the adjuster&rsquo;s inspection (see our{' '}
          <Link href="/resources/first-week-of-claim" className="text-blue-700 underline hover:text-blue-900">
            first week guide
          </Link>)
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-6">
        The effort you put into documentation now pays dividends throughout your entire claim.
        Adjusters take well-documented claims more seriously. Disputes are easier to win when you
        have photographic proof. And if you ever need to escalate to appraisal or litigation, your
        evidence file becomes the foundation of your case.
      </p>
    </>
  )
}
