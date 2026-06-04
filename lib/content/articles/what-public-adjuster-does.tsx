import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'What a Public Adjuster Does — And When You Might Want One',
  description:
    'A plain-language explanation of what a Public Adjuster is, how they work, what they cost, and when hiring one makes sense for your insurance claim.',
  summary:
    'A public adjuster is the only licensed adjuster who works for you, not the insurer, documenting your loss, valuing the claim, and negotiating the settlement, usually for a percentage of the recovery. Hiring one makes sense for large, complex, denied, or underpaid claims.',
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
        A Public Adjuster is a licensed professional who works for you — the policyholder —
        in an insurance claim. They do not work for the insurance company. They do not sell
        insurance. Their only job is to get you paid what you are owed under your policy.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most people have never heard this term until they are in the middle of a claim.
        Here is what you need to know.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Three Types of Adjusters
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The word &ldquo;adjuster&rdquo; confuses people because there are three kinds:
      </p>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Company adjuster</strong> (also called staff adjuster or independent
          adjuster) — works for the insurance company. Their job is to settle your claim.
          They are paid by the insurer.
        </li>
        <li>
          <strong>Independent adjuster</strong> — a contractor hired by the insurance
          company when they need extra help (catastrophes, high volume). Same role as a
          staff adjuster, still paid by the insurer.
        </li>
        <li>
          <strong>Public Adjuster</strong> — works for you. Hired by the policyholder to
          represent their interests. Paid by you (from the claim proceeds).
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The company adjuster&apos;s job is to settle the claim. The Public Adjuster&apos;s
        job is to make sure the settlement is fair. These are not the same goal.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What a Public Adjuster Actually Does
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Reviews your policy to identify all coverages that apply to your loss.</li>
        <li>Documents the damage — photographs, measurements, scope of repair.</li>
        <li>Writes the estimate of repair costs (often using the same Xactimate software the insurer uses).</li>
        <li>Prepares and submits your claim — the entire package of documentation the insurer needs.</li>
        <li>Inventories your damaged personal property (contents claim).</li>
        <li>Calculates your Additional Living Expenses if you are displaced.</li>
        <li>Negotiates with the insurance company adjuster on your behalf.</li>
        <li>Handles supplements when additional damage is found.</li>
        <li>Invokes appraisal if negotiation fails.</li>
        <li>Documents the insurer&apos;s conduct for potential bad faith claims.</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        In short: they do everything you would have to do yourself, but with professional
        knowledge and experience.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How They Get Paid
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Public Adjusters work on contingency. They charge a percentage of the claim
        settlement — typically 10% on standard claims, 8-10% on large losses, and 10-15%
        on supplemental work. After a declared emergency, contracts commonly cap the fee at 10%. Insurance Code &sect;15027 governs the required form of the public adjuster contract; the 10% figure is industry convention, not a statutory cap. Pending legislation (AB 597) would impose a statutory 15% cap on catastrophic-disaster claims.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        There is no upfront cost. If the claim pays nothing, the PA earns nothing. The
        fee comes out of the settlement proceeds.
      </p>

      <CalloutBox variant="tip" title="The Math Usually Works in Your Favor">
        <p>
          Studies and industry data consistently show that claims handled by Public Adjusters
          settle for significantly more than self-handled claims — often enough to cover the
          PA&apos;s fee and still leave the policyholder ahead. The PA knows what to claim,
          how to document it, and how to negotiate for it. You pay 10% of a larger number.
          Without the PA, you often get 100% of a much smaller number.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When a Public Adjuster Helps Most
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>The loss is large or complex (fire, total loss, extensive water damage).</li>
        <li>You do not have time to manage the claim yourself (you are working, dealing with displacement, recovering).</li>
        <li>The insurer&apos;s initial estimate seems low and you do not know how to challenge it.</li>
        <li>You are overwhelmed by the documentation requirements.</li>
        <li>The claim involves multiple coverages (dwelling + contents + ALE).</li>
        <li>You suspect the adjuster missed damage or underscoped the repair.</li>
        <li>The insurer is delaying, stalling, or being unresponsive.</li>
        <li>The claim is commercial and involves business interruption or complex policy forms.</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When You Probably Don&apos;t Need One
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>The loss is small and straightforward (a broken window, a small water stain).</li>
        <li>The insurer&apos;s initial estimate seems reasonable and matches your contractor&apos;s bid.</li>
        <li>You have the time, energy, and willingness to manage the claim yourself.</li>
        <li>The claim is a simple theft with a police report and clear documentation.</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Public Adjuster vs. Attorney
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        These are different professionals with different roles:
      </p>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Public Adjuster:</strong> Handles claim documentation, estimating, and
          negotiation within the claims process. Cannot file lawsuits. Works on a percentage
          of recovery.
        </li>
        <li>
          <strong>Attorney:</strong> Handles legal disputes — bad faith claims, coverage
          denials, litigation. Can sue the insurer. Works on contingency (typically 33-40%
          of recovery above what was offered).
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many claims start with a PA and only go to an attorney if the insurer acts in bad
        faith or denies coverage entirely. The PA documents the insurer&apos;s conduct, which
        becomes the foundation for the attorney&apos;s bad faith case if one is needed. See{' '}
        <Link href="/resources/when-to-hire-attorney" className="text-[#1F3964] underline font-medium">
          When to Hire an Attorney
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Choose a Public Adjuster
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Verify their license with the California Department of Insurance.</li>
        <li>Ask about their experience with your type of loss (fire, water, commercial).</li>
        <li>Ask how many active claims they are handling (too many = less attention to yours).</li>
        <li>Understand the fee structure — percentage, when it is collected, and what expenses are included.</li>
        <li>Ask for references from recent clients with similar losses.</li>
        <li>Make sure they carry Errors &amp; Omissions insurance.</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When to Engage One
      </h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        The earlier the better. A PA involved from day one can ensure the initial claim
        submission is complete and properly documented — preventing problems that are harder
        to fix later. But a PA can be engaged at any point in the process: before filing,
        after the adjuster&apos;s inspection, after receiving a low offer, or even after a
        denial. It is never too late until you have signed a final release.
      </p>
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
