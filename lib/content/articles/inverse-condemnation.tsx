import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Inverse Condemnation: Suing Utilities After a California Wildfire',
  description:
    'When a utility causes a wildfire, an insured may have a claim beyond the insurance policy. How inverse condemnation works in California — strict liability, the substantial-cause / inherent-risk test under City of Oroville, damages, and how it differs from negligence.',
  summary:
    'When a utility causes a wildfire, inverse condemnation can let a property owner recover from the utility on a strict-liability basis, without proving negligence, for damage beyond what insurance pays. California Supreme Court doctrine (Holtz, Belair, Oroville) limits the cause of action to damage substantially caused by an inherent risk of the public improvement&apos;s deliberate design, construction, or maintenance.',
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
        When a wildfire is caused by utility infrastructure &mdash; a downed power line, a
        malfunctioning transformer, inadequate vegetation clearance &mdash; an affected property
        owner may have a potential claim against the utility that goes beyond what the insurance
        policy pays. In California, one of the most powerful legal tools for wildfire victims is
        <strong> inverse condemnation</strong>: a cause of action grounded in the California
        Constitution that does not require proof of negligence, but does require proof that the
        damage was substantially caused by an inherent risk of the public improvement&apos;s
        deliberate design, construction, or maintenance.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This article describes how inverse condemnation works in California, how the California
        Supreme Court&apos;s decision in <em>City of Oroville v. Superior Court</em> (2019) shapes
        the causation requirement, how the doctrine differs from negligence, what damages may be
        recoverable, and why the claim matters even when insurance is in place.
      </p>

      <CalloutBox variant="tip" title="Why This May Matter Even With Insurance">
        <p>
          Insurance policies have limits. Where an insured is underinsured &mdash; and many
          wildfire victims are &mdash; an inverse condemnation claim against the responsible
          utility may recover the gap between insurance proceeds and the actual loss. It may also
          reach categories of damage that insurance does not cover at all, such as emotional
          distress in some circumstances and diminution in market value.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Is Inverse Condemnation?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The government (and entities operating public improvements, including investor-owned
        utilities under California law) has the power of eminent domain &mdash; the right to take
        private property for public use, with just compensation. A formal taking is
        <em> condemnation</em>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Inverse condemnation</strong> is the reverse: the property owner sues the public
        entity (or, in California, an investor-owned utility) claiming that the entity&apos;s
        public improvement effectively damaged or destroyed private property without just
        compensation. The constitutional source is California Constitution, Article I, Section
        19, which provides that private property may not be taken <em>or damaged</em> for public
        use without just compensation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In the wildfire context, the theory is that the utility operates its electrical
        infrastructure for public benefit. When that infrastructure substantially causes a fire
        that destroys private property, the utility has effectively damaged that property for
        public use, and just compensation may be owed.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Strict Liability &mdash; With a Substantial-Cause / Inherent-Risk Requirement
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Inverse condemnation in California is often described as a <strong>strict-liability</strong>
        cause of action, meaning the plaintiff does not have to prove the public entity or utility
        was negligent or violated a duty of care. <em>Barham v. Southern California Edison Co.</em>
        (1999) 74 Cal.App.4th 744 and <em>Pacific Bell Tel. Co. v. Southern California Edison Co.</em>
        (2012) 208 Cal.App.4th 1400 are the foundational authorities applying inverse condemnation to
        investor-owned utilities; the Court of Appeal reaffirmed the doctrine&apos;s continued
        application to IOUs in <em>Simple Avo Paradise Ranch, LLC v. Southern California Edison Co.</em>
        (2024).
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        California Supreme Court decisions tightening the causation requirement remain controlling.
        Under <em>Holtz v. Superior Court</em> (1970) 3 Cal.3d 296 and <em>Belair v. Riverside County
        Flood Control District</em> (1988) 47 Cal.3d 550, the damage must be <strong>substantially
        caused</strong> by the public improvement. The Court refined that standard in
        <em> City of Oroville v. Superior Court</em> (2019) 7 Cal.5th 1091, framing the holding
        this way:
      </p>
      <blockquote className="border-l-4 border-gray-300 pl-4 my-3 italic text-gray-700">
        What we hold is that the damage to private property must be substantially caused by an
        inherent risk presented by the deliberate design, construction, or maintenance of the
        public improvement.
      </blockquote>
      <p className="text-gray-700 leading-relaxed mb-4">
        Practically, a plaintiff in an inverse-condemnation wildfire case must show:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          The defendant operates a <strong>public improvement</strong> (or, for an IOU, electrical
          infrastructure operating under the same doctrinal framework).
        </li>
        <li>
          The damage to private property was <strong>substantially caused</strong> by that
          improvement, in the sense described above &mdash; an inherent risk of its deliberate
          design, construction, or maintenance.
        </li>
        <li>
          The plaintiff suffered <strong>damage</strong> to private property.
        </li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        Negligence is not an element. But after <em>Oroville</em>, a plaintiff can no longer
        rely on the bare fact that a public improvement was involved in the loss; the causal
        connection has to run to an inherent risk of how that improvement was deliberately
        designed, built, or maintained.
      </p>

      <CalloutBox variant="info" title="Plain English (general interpretation)">
        <p>
          Many plaintiff attorneys read <em>Oroville</em> to mean that inverse condemnation in
          California is still a powerful tool against utilities and public entities, but that
          courts will look carefully at whether the damage flowed from a risk built into the
          public improvement&apos;s design or maintenance &mdash; rather than from a
          property owner&apos;s own omissions or some other intervening cause. How the standard
          applies to a particular wildfire claim is a question for an attorney with experience
          in this area.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Inverse Condemnation vs. Negligence
      </h2>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#EFF4FB]">
              <th className="border border-gray-200 px-4 py-2 text-left text-[#1F3964]">Factor</th>
              <th className="border border-gray-200 px-4 py-2 text-left text-[#1F3964]">Inverse Condemnation</th>
              <th className="border border-gray-200 px-4 py-2 text-left text-[#1F3964]">Negligence</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr>
              <td className="border border-gray-200 px-4 py-2 font-medium">Standard</td>
              <td className="border border-gray-200 px-4 py-2">Strict liability</td>
              <td className="border border-gray-200 px-4 py-2">Must prove breach of duty of care</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-4 py-2 font-medium">Must prove fault?</td>
              <td className="border border-gray-200 px-4 py-2">No</td>
              <td className="border border-gray-200 px-4 py-2">Yes</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-4 py-2 font-medium">Damages</td>
              <td className="border border-gray-200 px-4 py-2">&ldquo;Just compensation&rdquo; (property value, repair costs)</td>
              <td className="border border-gray-200 px-4 py-2">Full tort damages (emotional distress, punitive damages possible)</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-4 py-2 font-medium">Against whom?</td>
              <td className="border border-gray-200 px-4 py-2">Government entities, public utilities</td>
              <td className="border border-gray-200 px-4 py-2">Anyone who breached a duty of care</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-4 py-2 font-medium">Comparative fault defense?</td>
              <td className="border border-gray-200 px-4 py-2">Generally not available</td>
              <td className="border border-gray-200 px-4 py-2">Yes — damages can be reduced by plaintiff&apos;s own negligence</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many wildfire lawsuits include <em>both</em> claims — inverse condemnation (strict
        liability for the infrastructure failure) and negligence (for failing to maintain equipment,
        clear vegetation, or de-energize during high-wind events). This maximizes available damages.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Which Utilities Can Be Sued?
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Investor-owned utilities (IOUs).</strong> Pacific Gas &amp; Electric (PG&amp;E),
          Southern California Edison (SCE), and San Diego Gas &amp; Electric (SDG&amp;E) are the
          three major IOUs in California. Under <em>Barham</em>, <em>Pacific Bell</em>, and
          <em> Simple Avo Paradise Ranch</em>, they operate electrical infrastructure as a public
          improvement and remain subject to inverse condemnation.
        </li>
        <li>
          <strong>Municipal and other public entities.</strong> Publicly-owned utilities (e.g.,
          LADWP) and other public entities are subject to inverse condemnation under California
          Constitution Article I, Section 19. These are typically the cleaner inverse-condemnation
          defendants because the constitutional source is direct; IOU liability is the more
          contested doctrinal frontier and has been the subject of repeated industry challenges.
        </li>
        <li>
          <strong>Water districts and water-system failure theories.</strong> If a public
          entity&apos;s infrastructure substantially contributes to property damage &mdash; e.g.,
          a failed water system that prevented fire suppression &mdash; an inverse-condemnation
          theory may apply, but the cases addressing water-system-failure theories in the
          wildfire context are unsettled and the public entity may raise governmental-immunity
          defenses.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Damages Can You Recover?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The measure of damages in inverse condemnation is &ldquo;just compensation&rdquo; — the
        amount necessary to make the property owner whole. This can include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Cost to repair or rebuild</strong> the damaged property</li>
        <li><strong>Diminution in property value</strong> (for damage that cannot be fully repaired)</li>
        <li><strong>Loss of use</strong> (temporary housing, lost rental income)</li>
        <li><strong>Personal property</strong> destroyed in the fire</li>
        <li><strong>Business losses</strong> (lost income, extra expenses)</li>
        <li><strong>Landscaping and trees</strong></li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        When combined with a negligence or other tort claim, additional damages may be available,
        including emotional distress and, in cases of qualifying conduct, punitive damages.
        Important distinction: Government Code &sect; 818 bars punitive damages against
        <em> public entities</em> (e.g., LADWP, water districts) entirely. Punitive damages may
        be sought against private investor-owned utilities, although recovery in IOU wildfire
        cases is uncommon.
      </p>

      <CalloutBox variant="warning" title="Timing matters — claim presentation and statute of limitations">
        <p>
          A claim against a public entity in California generally requires presenting a written
          claim under the Government Tort Claims Act (Gov. Code &sect; 905 et seq.) within six
          months for personal injury and one year for property damage. The inverse-condemnation
          cause of action itself carries its own statute of limitations (Code Civ. Proc.
          &sect; 338(j) is commonly cited as the three-year limit). Different rules apply to
          investor-owned utilities, which are not public entities and do not require claim
          presentation. The timing is fact-specific and unforgiving; an insured should consult
          an attorney as early as possible after a utility-caused fire.
        </p>
      </CalloutBox>

      <CalloutBox variant="warning" title="Insurance Subrogation">
        <p>
          If an insurer pays the insured&apos;s claim, the insurer typically has a subrogation
          right &mdash; the right to recover what it paid from the responsible party (the
          utility). Insurers often pursue subrogation on their own. However, the insured&apos;s
          personal damages <em>above</em> what insurance paid (the underinsurance gap, ALE
          shortfalls, emotional distress, and similar categories) typically remain the
          insured&apos;s own claim. An attorney can help coordinate between the insured&apos;s
          direct claim and the insurer&apos;s subrogation.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Recent California Wildfire Litigation
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Inverse condemnation has been central to nearly every major California wildfire case in
        recent years:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>PG&amp;E / Camp Fire (2018):</strong> PG&amp;E was found responsible for the
          Camp Fire, which destroyed Paradise. The company filed for bankruptcy in January 2019,
          established a $13.5 billion Fire Victim Trust through its Plan of Reorganization, and
          pled guilty in Butte County Superior Court (June 16, 2020) to 84 counts of involuntary
          manslaughter and one felony count of unlawfully starting a fire (Pen. Code &sect; 452).
          Inverse condemnation was a core theory.
        </li>
        <li>
          <strong>SCE / Thomas Fire, Woolsey Fire:</strong> Southern California Edison faced
          thousands of inverse condemnation and negligence claims from the 2017 Thomas Fire and
          2018 Woolsey Fire.
        </li>
        <li>
          <strong>2025 Eaton Fire (SCE):</strong> SCE has been named as the principal alleged
          ignition defendant in multiple complaints arising from the 2025 Eaton Fire, including
          actions by Los Angeles County and private plaintiffs.
        </li>
        <li>
          <strong>2025 Palisades Fire (LADWP):</strong> Lawsuits against the Los Angeles
          Department of Water and Power focus principally on alleged water-system failure
          (including the Santa Ynez Reservoir and dry hydrants) rather than ignition. The
          alleged ignition cause has been described in some pleadings as arson/rekindling,
          not utility equipment.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Inverse Condemnation Interacts With the Insurance Claim
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurance claim and the inverse-condemnation/negligence claim against the utility are
        separate proceedings that typically run in parallel:
      </p>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>The insurance claim runs on its own clock.</strong> Insurance policies have
          deadlines that run independently of any utility litigation; most insureds cannot afford
          to wait on the utility case before opening the insurance claim.
        </li>
        <li>
          <strong>The utility claim is typically attorney-driven.</strong> Inverse-condemnation
          litigation is complex and is typically handled by plaintiffs&apos; firms on contingency.
          Many of those firms specialize in wildfire litigation.
        </li>
        <li>
          <strong>Documentation does double duty.</strong> The documentation an insured builds for
          the insurance claim (damage photos, inventory, contractor estimates, ALE records) also
          supports the utility claim.
        </li>
        <li>
          <strong>Damages do not double-count.</strong> Generally, the same damages cannot be
          recovered twice. If an insurer pays $500,000 for dwelling damage and the utility
          settlement also addresses dwelling damage, those amounts offset. But categories that
          insurance did not cover (the underinsurance gap, uncovered losses, emotional distress)
          are typically additive.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Does an Insured Need a Public Adjuster AND an Attorney?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Often, both roles end up involved. They handle different claims:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          A <Link href="/resources/public-adjuster" className="text-[#2E74B5] hover:underline">Public Adjuster</Link>{' '}
          handles the <em>insurance claim</em> &mdash; documenting the loss, negotiating with the
          insurer, and working to maximize policy recovery. This is a contract matter with the
          insurer.
        </li>
        <li>
          An <strong>attorney</strong> handles the <em>utility claim</em> &mdash; the inverse
          condemnation and negligence lawsuit against the entity whose infrastructure substantially
          caused the fire. This is a tort/constitutional matter.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-6">
        Having both can help an insured pursue the maximum from the insurance policy <em>and</em>
        the responsible party for damages beyond policy limits.
      </p>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Wildfire Damage? The Insurance Claim Runs on Its Own Clock.
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          Utility litigation can take years; the insurance claim runs on its own deadlines. A
          licensed public adjuster can review an insurance claim file to identify underpaid items
          and may identify issues that warrant consultation with an attorney. Most public
          adjusters and attorneys will provide a free consultation.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Request a Free Claim Review &rarr;
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
