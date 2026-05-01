import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Inverse Condemnation: Suing Utilities After a California Wildfire',
  description:
    'When a utility causes a wildfire, you may have a claim beyond your insurance policy. Learn how inverse condemnation works in California — strict liability, damages, and how it differs from negligence.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a wildfire is caused by utility infrastructure — a downed power line, a malfunctioning
        transformer, inadequate vegetation clearance — you have a potential claim against the utility
        company that goes far beyond what your insurance policy pays. In California, one of the most
        powerful legal tools for wildfire victims is <strong>inverse condemnation</strong>: a
        strict-liability cause of action that does not require you to prove the utility was
        negligent.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This article explains how inverse condemnation works, how it differs from a negligence
        lawsuit, what damages you can recover, and why it matters even if you have insurance.
      </p>

      <CalloutBox variant="tip" title="Why This Matters Even If You Have Insurance">
        <p>
          Your insurance policy has limits. If you are underinsured — and the majority of
          wildfire victims are — an inverse condemnation claim against the responsible utility can
          recover the gap between your insurance proceeds and your actual losses. It can also
          recover damages that insurance does not cover at all, such as emotional distress
          and diminished property value.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Is Inverse Condemnation?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The government (and entities acting under government authority, like investor-owned utilities)
        has the power of &ldquo;eminent domain&rdquo; — the right to take private property for
        public use, with just compensation. When the government takes your property through formal
        proceedings, that is <em>condemnation</em>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Inverse condemnation</strong> is the reverse: the property owner sues the government
        entity (or utility) claiming that the entity&apos;s actions or infrastructure effectively
        damaged or destroyed their private property without compensation. Under the California
        Constitution, Article I, Section 19, private property may not be taken or damaged for
        public use without just compensation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In the wildfire context, the theory is: the utility operates its electrical infrastructure
        for public benefit (delivering power). When that infrastructure causes a fire that destroys
        your property, the utility has effectively &ldquo;taken&rdquo; or &ldquo;damaged&rdquo;
        your property for public use — and must compensate you.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Strict Liability: No Need to Prove Negligence
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the critical legal advantage. Under California inverse condemnation law, the cause
        of action is based on <strong>strict liability</strong>. You do not need to prove that the
        utility was negligent — you do not need to show they failed to maintain their equipment,
        violated safety standards, or did anything &ldquo;wrong.&rdquo; You only need to prove:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>The utility&apos;s infrastructure or operations were a <strong>substantial cause</strong> of the fire</li>
        <li>The fire caused <strong>damage to your property</strong></li>
        <li>The utility operates its infrastructure for <strong>public use</strong></li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        Neither foreseeability nor fault need be shown. The utility does not escape liability
        by showing it followed all safety regulations or used reasonable care. If their equipment
        started the fire, they pay.
      </p>

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
          three major IOUs in California. They operate electrical infrastructure for public use
          and are subject to inverse condemnation.
        </li>
        <li>
          <strong>Municipal utilities.</strong> Publicly-owned utilities (e.g., LADWP) are also
          subject to inverse condemnation under the California Constitution.
        </li>
        <li>
          <strong>Water districts and other public entities.</strong> If a public entity&apos;s
          infrastructure contributes to property damage (e.g., failed water systems that could not
          fight the fire), inverse condemnation may apply.
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
        When combined with a negligence claim, additional damages may be available, including
        emotional distress and (in cases of extreme conduct) punitive damages — though punitive
        damages against a public utility are rare.
      </p>

      <CalloutBox variant="warning" title="Insurance Subrogation">
        <p>
          If your insurance company pays your claim, they have a &ldquo;subrogation&rdquo; right
          — the right to recover what they paid from the responsible party (the utility). Your
          insurer may pursue this on their own. However, your personal damages <em>above</em> what
          insurance paid (the underinsurance gap, ALE shortfalls, emotional distress, etc.) remain
          your claim. An attorney can help coordinate between your direct claim and the insurer&apos;s
          subrogation.
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
          Camp Fire, which destroyed Paradise. The company filed for bankruptcy, established a
          $13.5 billion fire victim trust, and ultimately pled guilty to 84 counts of involuntary
          manslaughter. Inverse condemnation was a core theory.
        </li>
        <li>
          <strong>SCE / Thomas Fire, Woolsey Fire:</strong> Southern California Edison faced
          thousands of inverse condemnation and negligence claims from the 2017 Thomas Fire and
          2018 Woolsey Fire.
        </li>
        <li>
          <strong>2025 Palisades and Eaton Fires:</strong> Multiple lawsuits have been filed
          against utilities and LADWP alleging inverse condemnation and negligence. Litigation
          is ongoing.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How Inverse Condemnation Interacts With Your Insurance Claim
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your insurance claim and your inverse condemnation/negligence claim against the utility are
        separate proceedings that run in parallel:
      </p>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>File your insurance claim immediately.</strong> Do not wait for the utility
          litigation. Your policy has deadlines and your insurer owes you money now.
        </li>
        <li>
          <strong>Retain an attorney for the utility claim.</strong> Inverse condemnation litigation
          is complex and typically handled by attorneys on contingency. Many plaintiffs&apos; firms
          specialize in wildfire litigation.
        </li>
        <li>
          <strong>Document everything.</strong> The documentation you create for your insurance
          claim (damage photos, inventory, contractor estimates, ALE records) also supports your
          utility claim.
        </li>
        <li>
          <strong>Understand the offset.</strong> You cannot recover the same damages twice. If
          insurance pays $500,000 for your dwelling and the utility settlement also addresses
          dwelling damage, those amounts offset. But damages your insurance did not cover
          (underinsurance gap, uncovered losses, emotional distress) are additive.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Do You Need a Public Adjuster AND an Attorney?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Often, yes. They handle different claims:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          A <Link href="/resources/public-adjuster" className="text-[#2E74B5] hover:underline">Public Adjuster</Link>{' '}
          handles your <em>insurance claim</em> — documenting the loss, negotiating with the
          insurer, and maximizing your policy recovery. This is a contract dispute with your
          insurer.
        </li>
        <li>
          An <strong>attorney</strong> handles your <em>utility claim</em> — the inverse
          condemnation and negligence lawsuit against the entity that caused the fire. This is
          a tort/constitutional claim.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-6">
        Having both ensures you recover the maximum from your insurance policy <em>and</em> pursue
        the responsible party for damages beyond your policy limits.
      </p>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">
          Wildfire Damage? Start With Your Insurance Claim.
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          While utility litigation can take years, your insurance claim should be pursued now. A
          Public Adjuster can maximize your policy recovery while your attorney handles the
          utility lawsuit.
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
    </>
  )
}
