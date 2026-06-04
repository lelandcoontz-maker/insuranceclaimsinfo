import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'How to Use This Site',
  description:
    'A quick orientation to InsuranceClaimsInfo.com — how the site is organized, what you\'ll find here, and the fastest way to get to the article you need.',
  summary:
    'This site organizes hundreds of insurance-claim guides by topic and audience. Start with the Start Here hubs or search for your situation; the fastest path is to find the article matching your specific claim question.',
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
        This site has over 500 articles on California property insurance claims. That is a lot
        of material. This page explains how it is organized so you can find what you need
        without reading things that do not apply to your situation.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What This Site Is
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        InsuranceClaimsInfo.com is a free reference site written by a licensed California
        Public Adjuster. Every article is written from the policyholder&apos;s perspective.
        There are no ads, no paywalls on reference content, and no email gates on checklists.
        The goal is simple: give you the information you need to handle your insurance claim
        or to understand what a professional is doing on your behalf.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How the Articles Are Organized
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Articles are grouped into five main categories:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Understanding Your Residential Policy</strong> — How policies work, what
          coverages you have, how valuation works, and what the exclusions actually mean.
        </li>
        <li>
          <strong>Filing &amp; Managing Your Claim</strong> — The claims process from first
          notice through payment, including documentation, working with adjusters, ALE, and
          supplements.
        </li>
        <li>
          <strong>Disputes &amp; Fighting Back</strong> — Negotiation tactics, estimating
          disputes, appraisal, engineering challenges, and legal remedies when the insurer
          will not pay fairly.
        </li>
        <li>
          <strong>Types of Damage</strong> — Damage-specific guides for fire, water, wind,
          mold, environmental contamination, and specialty losses.
        </li>
        <li>
          <strong>California Law &amp; Regulations</strong> — Statutes, regulations, case
          law, coverage doctrines, and consumer protections specific to California.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Within each category, articles are further organized into subcategories. You can
        browse the full list on the{' '}
        <Link href="/resources" className="text-[#1F3964] underline font-medium">Resources page</Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Three Ways to Find What You Need
      </h2>

      <h3 className="text-xl font-bold text-gray-900 mb-3">1. Start Here</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The{' '}
        <Link href="/start-here" className="text-[#1F3964] underline font-medium">Start Here</Link>{' '}
        page asks one question — who are you? — and points you to a curated reading path.
        There are paths for newcomers, people mid-claim, claims professionals, and attorneys.
        There are also situation-specific paths for fire claims, denied claims, first-time
        filers, policy education, and commercial claims.
      </p>

      <h3 className="text-xl font-bold text-gray-900 mb-3">2. Search</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The search bar at the top of every page searches all article titles and descriptions.
        If you know what you are looking for — &ldquo;overhead and profit,&rdquo;
        &ldquo;appraisal,&rdquo; &ldquo;ALE&rdquo; — search will get you there in one step.
      </p>

      <h3 className="text-xl font-bold text-gray-900 mb-3">3. Browse by Category or Tag</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The{' '}
        <Link href="/resources" className="text-[#1F3964] underline font-medium">Resources page</Link>{' '}
        shows every article organized by category and subcategory. You can also browse by
        tag — for example, all articles about{' '}
        <Link href="/resources/tag/fire" className="text-[#1F3964] underline font-medium">fire claims</Link>,
        all articles written for{' '}
        <Link href="/resources/tag/attorney" className="text-[#1F3964] underline font-medium">attorneys</Link>,
        or all{' '}
        <Link href="/resources/tag/guide" className="text-[#1F3964] underline font-medium">step-by-step guides</Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Who Writes This
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The articles on this site are written by Leland Coontz III, a licensed California
        Public Adjuster (License #2B53445). A public adjuster works exclusively for
        policyholders — never for insurance companies. Everything here is written from that
        perspective. For more about the author and this site, see the{' '}
        <Link href="/about" className="text-[#1F3964] underline font-medium">About page</Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What You Will Not Find Here
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Advice on how to inflate a claim or misrepresent a loss.</li>
        <li>Content written for insurance companies or their adjusters.</li>
        <li>Generic content that applies to all 50 states equally. Most articles focus on California law and regulations. When an article applies more broadly, it says so.</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Free Tools
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        In addition to the articles, the site includes a free{' '}
        <Link href="/inventory" className="text-[#1F3964] underline font-medium">
          Personal Property Inventory Tool
        </Link>{' '}
        with over 3,750 items organized room by room. You can check off what you own and
        download an Excel spreadsheet to submit with your contents claim. No account required.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Questions or Suggestions
      </h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        If you cannot find what you are looking for, or you think the site should cover a
        topic it does not, use the{' '}
        <Link href="/contact" className="text-[#1F3964] underline font-medium">contact page</Link>.
        Every message is read by the author.
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
