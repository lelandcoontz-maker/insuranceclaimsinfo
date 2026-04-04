import type { Metadata } from 'next'
import { RegulationCard } from '@/components/content/RegulationCard'
import { CalloutBox } from '@/components/content/CalloutBox'
import { LegalDisclaimer } from '@/components/content/LegalDisclaimer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'California Insurance Rules & Regulations | Policyholder Protections',
  description:
    'Learn the California insurance laws that protect policyholders. Covers Insurance Code Section 790 (Unfair Claims Settlement Practices) and 10 CCR 2695 (Fair Claims Settlement Practices Regulations) — the rules your insurer must follow.',
}

export default function RegulationsPage() {
  return (
    <>
      {/* Header banner */}
      <div className="bg-[#1F3964] text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#C9A84C] text-xs font-bold uppercase tracking-wider mb-2">
            Know Your Rights
          </p>
          <h1 className="text-3xl font-bold mb-3">
            California Insurance Rules &amp; Regulations
          </h1>
          <p className="text-blue-200 max-w-2xl leading-relaxed">
            California has some of the strongest policyholder protections in the country. These
            statutes and regulations define exactly what your insurance company must do — and what
            they are prohibited from doing — when you file a claim. Understanding these rules is
            the single most effective way to hold your insurer accountable.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-14">
        {/* Legal Disclaimer */}
        <LegalDisclaimer />

        {/* ───────────────────── SECTION 1: Insurance Code §790 ───────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-[#1F3964] mb-5">
            California Insurance Code Section 790 — Unfair Claims Settlement Practices
          </h2>

          <div className="prose prose-blue max-w-none text-gray-700 space-y-4 mb-8">
            <p>
              Insurance Code Section 790.03(h) is the foundation of claims-handling law in
              California. It lists specific practices that are defined as <strong>unfair</strong> or{' '}
              <strong>deceptive</strong> claims settlement practices. However, it is important to
              understand the legal landscape: under <em>Moradi-Shalal v. Fireman&apos;s Fund</em>{' '}
              (1988), there is no private right of action directly under Section 790.03. A
              policyholder cannot sue an insurer solely for violating this statute. Instead,
              violations of Section 790.03 serve as powerful evidence of bad faith in a claim for
              breach of the implied covenant of good faith and fair dealing. CDI enforcement actions
              under Section 790 typically require a showing that the insurer engaged in these
              practices as a general business pattern, though individual violations can still support
              a bad faith claim and form the basis of a CDI complaint.
            </p>
            <p>
              Think of Section 790 as the "thou shalt not" list for insurance companies. The
              regulations in 10 CCR 2695 (covered below) fill in the details — specific timelines,
              documentation requirements, and procedures — but Section 790 is where the statutory
              teeth are.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <RegulationCard
              section="§790.03(h)(1)"
              title="Misrepresenting Policy Provisions"
              requirement="Insurers cannot misrepresent relevant facts or policy provisions relating to the coverage at issue. This includes telling you something isn't covered when it is, or misquoting your policy limits, deductibles, or conditions."
              whyItMatters="This is one of the most common violations. If an adjuster tells you 'your policy doesn't cover that' without pointing to a specific exclusion, or if they mischaracterize what your policy says, they are breaking the law."
            />

            <RegulationCard
              section="§790.03(h)(2)"
              title="Failing to Acknowledge Communications Promptly"
              requirement="Insurance companies must promptly acknowledge and respond to communications from policyholders about their claims. Ignoring calls, emails, or letters is a statutory violation."
              whyItMatters="When your adjuster goes silent for weeks, that is not just bad customer service — it is a violation of California law. Document every unanswered call and email. The paper trail matters."
            />

            <RegulationCard
              section="§790.03(h)(3)"
              title="Failing to Adopt Reasonable Investigation Standards"
              requirement="Insurers must adopt and implement reasonable standards for the prompt investigation and processing of claims. They cannot simply sit on your claim or conduct a superficial review."
              whyItMatters="A drive-by inspection that misses half the damage, or an adjuster who never even enters the house, is not a reasonable investigation. You have the right to a thorough, competent evaluation of your loss."
            />

            <RegulationCard
              section="§790.03(h)(4)"
              title="Refusing to Pay Claims Without Investigation"
              requirement="Insurers cannot refuse to pay claims without conducting a reasonable investigation based upon all available information."
              whyItMatters="If your claim gets denied and the insurer never sent an adjuster, never requested your documentation, or never reviewed your policy — that denial is on shaky legal ground."
            />

            <RegulationCard
              section="§790.03(h)(5)"
              title="Not Attempting Good-Faith Settlement"
              requirement="Insurers must attempt in good faith to effectuate prompt, fair, and equitable settlements of claims in which liability has become reasonably clear."
              whyItMatters="Once the insurer knows your loss is covered and has enough information to determine the amount, they must make a genuine effort to settle. Dragging their feet at this stage is a violation."
            />

            <RegulationCard
              section="§790.03(h)(6)"
              title="Compelling Litigation Through Lowball Offers"
              requirement="Insurers cannot compel policyholders to institute litigation to recover amounts due by offering substantially less than the amounts ultimately recovered."
              whyItMatters="If the insurer offers you $40,000 and you eventually recover $120,000 at trial, that original lowball offer was itself a violation. This provision protects you from being pressured into accepting unfair settlements."
            />

            <RegulationCard
              section="§790.03(h)(11)"
              title="Failing to Provide a Reasonable Explanation for Denial"
              requirement="When an insurer denies a claim or offers a compromise settlement, they must provide a reasonable explanation of the basis for the denial or offer in relation to the policy provisions."
              whyItMatters="A denial letter that just says 'claim denied' with no explanation is illegal. The insurer must tell you exactly why they denied your claim and cite the specific policy language they are relying on."
            />

            <RegulationCard
              section="§790.03(h)(7)"
              title="Attempting to Settle for Less Than a Reasonable Person Would Expect"
              requirement="Insurers cannot attempt to settle a claim by making a settlement offer for an amount that a reasonable person reading the relevant advertising material would not expect."
              whyItMatters="Your insurer's marketing promises matter. If they advertised comprehensive protection and then try to settle for a fraction of your loss, this provision gives you leverage."
            />

            <RegulationCard
              section="§790.03(h)(8)"
              title="Attempting to Settle Based on Altered Application"
              requirement="Insurers cannot attempt to settle a claim on the basis of an application that was altered without the knowledge or consent of the insured."
              whyItMatters="If the insurer tries to use information on your application that you never provided or agreed to, that's a violation. Always keep a copy of your original application."
            />

            <RegulationCard
              section="§790.03(h)(9)"
              title="Not Providing Proof of Loss Forms and Instructions"
              requirement="Insurers must provide necessary forms, instructions, and reasonable assistance to policyholders so they can comply with policy conditions, including proof of loss requirements."
              whyItMatters="Your insurer cannot demand a sworn proof of loss and then refuse to provide the form or explain how to complete it. They must help you through the process, not set traps."
            />

            <RegulationCard
              section="§790.03(h)(10)"
              title="Making Known Claims Practices That Lead to Appeals"
              requirement="Insurers cannot use claims-handling practices that lead to consistently requiring policyholders to resort to appeals, appraisals, or litigation to receive fair settlements."
              whyItMatters="If a carrier routinely lowballs every claim knowing most people won't fight back, that pattern itself is a violation — even if individual settlements are eventually corrected."
            />

            <RegulationCard
              section="§790.03(h)(13)"
              title="Failing to Provide Settlement Information"
              requirement="Insurers must promptly provide a reasonable explanation of the basis in the insurance policy, in relation to the facts or applicable law, for any denial of a claim or offer of a compromise settlement."
              whyItMatters="Transparency is required. You have the right to understand exactly how the insurer arrived at their number — what they included, what they excluded, and why."
            />
          </div>
        </section>

        {/* ───────── SECTION 2: 10 CCR 2695 — Fair Claims Settlement Practices ───────── */}
        <section>
          <h2 className="text-2xl font-bold text-[#1F3964] mb-5">
            10 CCR 2695 — California Fair Claims Settlement Practices Regulations
          </h2>

          <div className="prose prose-blue max-w-none text-gray-700 space-y-4 mb-8">
            <p>
              Title 10, California Code of Regulations, Section 2695 is the regulatory companion
              to Insurance Code Section 790. While Section 790 says what insurers <em>cannot</em>{' '}
              do, 10 CCR 2695 spells out exactly what they <em>must</em> do — specific deadlines,
              documentation requirements, and procedures for handling every step of a claim.
            </p>
            <p>
              These regulations are enforced by the California Department of Insurance (CDI). When
              you file a CDI complaint, the investigator checks your insurer's conduct against
              these specific sections. Knowing these rules lets you cite the exact regulation your
              insurer violated — which is far more powerful than a general complaint that they were
              "unfair."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <RegulationCard
              section="§2695.4"
              title="Good Faith and Fair Dealing"
              requirement="Every insurer must act in good faith and deal fairly with policyholders. This is the overarching standard that governs every claims-handling interaction. The insurer must not place its own financial interest above its duty to the policyholder."
              whyItMatters="This is the umbrella regulation. Every unreasonable delay, every ignored document request, every lowball offer can be measured against this standard. It is the regulation that gives teeth to all the others."
            />

            <RegulationCard
              section="§2695.5(b)"
              title="15-Day Acknowledgment Deadline"
              requirement="Every insurer must acknowledge receipt of every communication regarding a claim within 15 calendar days. The acknowledgment must include the name of the person handling the claim and how to contact them."
              whyItMatters="If you send a letter, email, or leave a voicemail about your claim and hear nothing back within 15 days, the insurer has already violated the regulations. Start your documentation clock from day one."
            />

            <RegulationCard
              section="§2695.5(e)"
              title="Responding to Policyholder Communications"
              requirement="Insurers must respond to all communications from a claimant which reasonably suggest a response is expected. The response must be made within 15 calendar days."
              whyItMatters="This goes beyond just acknowledging receipt. If you ask a question, send documentation, or request an update — and a reasonable person would expect a reply — the insurer must respond within 15 days. Silence is a violation."
            />

            <RegulationCard
              section="§2695.7(a)"
              title="Thorough Investigation Required"
              requirement="Insurers must conduct a thorough, fair, and objective investigation sufficient to determine liability and the extent of the loss. The investigation must be completed promptly and cannot be unreasonably delayed."
              whyItMatters="A competent investigation means the adjuster actually inspects your property, reviews your documentation, consults experts where needed, and evaluates the full scope of your loss — not just the parts that are easy or cheap to repair."
            />

            <RegulationCard
              section="§2695.7(b)"
              title="40-Day Decision Deadline"
              requirement="After receiving proof of claim, the insurer must accept or deny the claim — in whole or in part — within 40 calendar days. If more time is needed, they must notify you in writing every 30 days with the reasons for the delay."
              whyItMatters="The 40-day clock starts once you submit your proof of loss or other claim documentation. If the insurer just sits on it without a decision or written explanation, they are in violation. Track this deadline carefully."
            />

            <RegulationCard
              section="§2695.7(b)(1-4)"
              title="Written Notice of Decision Required"
              requirement="When an insurer accepts or denies a claim, the notice must be in writing and include: the specific policy provisions relied upon, a clear explanation of the reasons, and information about the claimant's right to have the decision reviewed by the Department of Insurance."
              whyItMatters="Verbal denials and vague letters are not enough. The law requires a detailed written explanation. If the denial doesn't cite specific policy language or explain the reasoning, it doesn't meet the legal standard."
            />

            <RegulationCard
              section="§2695.7(c)(1)"
              title="Status Report When Multiple Adjusters Assigned"
              requirement="If three or more adjusters are assigned to a claim within a six-month period, the insurer must provide the claimant with a written status report within 10 business days of the most recent assignment. The report must summarize the current status and outline the next steps."
              whyItMatters="Shuffling your claim between adjusters is a classic delay tactic. Each new adjuster has to 'get up to speed,' which resets the clock in practice. This regulation forces transparency when it happens."
            />

            <RegulationCard
              section="§2695.7(d)"
              title="Right to Claim-Related Documents"
              requirement="Upon request, the insurer must provide copies of all documents that relate to the evaluation of the claim, including adjuster reports, estimates, photographs, and correspondence — within 15 calendar days."
              whyItMatters="You have the right to see everything in your claim file. The adjuster's notes, their estimate, their photos, internal emails about your claim — if you ask for it, they must provide it within 15 days. This is one of the most underused tools available to policyholders."
            />

            <RegulationCard
              section="§2695.7(g)"
              title="Contractor Name Requirement for Repair Estimates"
              requirement="If an insurer's claim payment or estimate is based on the cost of repairs, and the claimant requests it, the insurer must provide the name, address, and telephone number of a contractor who will perform the repairs for the amount stated in the estimate."
              whyItMatters="This is one of the most powerful regulations for policyholders. If your insurer says the repairs cost $50,000 but every contractor you call says $90,000, you can demand they name a contractor who will actually do the work for their number. If they cannot produce one, their estimate is indefensible."
            />

            <RegulationCard
              section="§2695.9"
              title="Standards for Prompt, Fair Settlement"
              requirement="For first-party property claims, insurers must provide a fair settlement that accounts for all covered damage. They cannot require the claimant to make a claim under another policy first, and they must include overhead and profit in repair estimates when a general contractor is reasonably likely to be involved."
              whyItMatters="This regulation prevents insurers from playing games with your settlement amount. It requires overhead and profit (O&P) when a GC is needed, prohibits forcing you to use your own insurance first before subrogation, and ensures the settlement actually covers the repairs."
            />
          </div>
        </section>

        {/* ───────── Tip callout: Contractor Name Requirement ───────── */}
        <CalloutBox variant="tip" title="The Contractor Name Requirement — Your Most Effective Tool">
          <p className="mb-2">
            Of all the regulations on this page, <strong>Section 2695.7(g)</strong> is arguably the
            most effective tool available to policyholders who are being underpaid on structural
            repairs.
          </p>
          <p className="mb-2">
            Here is how it works: if your insurer writes an estimate for $60,000 and you get bids
            from three licensed contractors for $95,000 or more, you can send a written request
            demanding the insurer provide the name, address, and phone number of a licensed,
            reputable contractor who will actually perform the repairs for $60,000.
          </p>
          <p className="mb-2">
            In most cases, <strong>they cannot</strong>. And once they admit they cannot find a
            contractor to do the work for their number, their own estimate collapses. This shifts
            the burden of proof and is one of the fastest ways to force an insurer to increase their
            settlement.
          </p>
          <p>
            Put the request in writing, cite the regulation by number, and keep the response (or
            lack of response) in your file. If they ignore the request, that is a separate
            regulatory violation under §2695.5(e).
          </p>
        </CalloutBox>

        {/* ───────── Related Articles ───────── */}
        <section>
          <h2 className="text-2xl font-bold text-[#1F3964] mb-5">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <Link
              href="/resources/bad-faith"
              className="block bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <span className="text-2xl mb-3 block">🚨</span>
              <h3 className="font-bold text-[#1F3964] text-sm mb-2">Bad Faith Insurance Practices</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                When regulatory violations become actionable bad faith — your remedies, how to
                document violations, and when to involve an attorney.
              </p>
              <p className="text-[#2E74B5] text-sm font-medium mt-3">Read guide &rarr;</p>
            </Link>

            <Link
              href="/resources/cdi-complaint"
              className="block bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <span className="text-2xl mb-3 block">📁</span>
              <h3 className="font-bold text-[#1F3964] text-sm mb-2">Filing a CDI Complaint</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                How to file a complaint with the California Department of Insurance, what to
                include, and how to cite the specific regulations your insurer violated.
              </p>
              <p className="text-[#2E74B5] text-sm font-medium mt-3">Read guide &rarr;</p>
            </Link>

            <Link
              href="/resources/california-fair-claims"
              className="block bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <span className="text-2xl mb-3 block">⚖️</span>
              <h3 className="font-bold text-[#1F3964] text-sm mb-2">Fair Claims Settlement Practices Act</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                A detailed walkthrough of 10 CCR 2695 — every deadline, every required disclosure,
                and how to use the regulations to negotiate a fair settlement.
              </p>
              <p className="text-[#2E74B5] text-sm font-medium mt-3">Read guide &rarr;</p>
            </Link>
          </div>
        </section>

        {/* ───────── CTA ───────── */}
        <section className="bg-[#EFF4FB] rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-[#1F3964] mb-3">
            Think Your Insurer Is Violating These Rules?
          </h2>
          <p className="text-gray-600 mb-6 max-w-lg mx-auto">
            If your insurance company is ignoring deadlines, lowballing your claim, or refusing to
            communicate, a licensed Public Adjuster can review your file, identify the violations,
            and fight for what your policy owes you.
          </p>
          <Link href="/contact" className="btn-gold">
            Request a Free Claim Review &rarr;
          </Link>
        </section>
      </div>
    </>
  )
}
