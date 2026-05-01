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

        <div className="bg-gray-50 border border-gray-200 rounded-lg px-5 py-4 text-sm text-gray-600">
          <p>
            The descriptions below are plain-language summaries intended for educational purposes.
            They are not verbatim regulatory text. For the exact statutory or regulatory language,
            consult the California Insurance Code and California Code of Regulations directly.
          </p>
        </div>

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
              title="Requiring Duplicative Proof of Loss Submissions"
              requirement="Insurers cannot delay the investigation or payment of claims by requiring a preliminary claim report and then subsequently requiring formal proof of loss forms that contain substantially the same information."
              whyItMatters="Some carriers ask for the same documentation in multiple formats — first a preliminary report, then a formal sworn proof of loss with identical information. This is a delay tactic, and it is a statutory violation."
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
              title="Appealing Arbitration Awards to Coerce Lower Settlements"
              requirement="Insurers cannot make known to insureds or claimants a practice of appealing from arbitration awards in favor of the insured for the purpose of compelling them to accept settlements or compromises less than the amount awarded in arbitration."
              whyItMatters="If a carrier routinely appeals appraisal or arbitration awards as a pressure tactic — hoping you will settle for less rather than endure more delays — that practice itself is a statutory violation."
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
              you file a CDI complaint, the investigator may check your insurer's conduct against
              these specific sections. Knowing these rules lets you cite the exact regulation your
              insurer violated — which is far more powerful than a general complaint that they were
              "unfair."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <RegulationCard
              section="§2695.4"
              title="Representation of Policy Provisions and Benefits"
              requirement="Every insurer must disclose to the claimant all benefits, coverage, time limits, or other provisions of the policy that may apply to the claim. When additional benefits might reasonably be payable upon receipt of additional proofs of claim, the insurer must immediately communicate that fact and assist the insured."
              whyItMatters="If your policy has coverage you don't know about — additional living expenses, ordinance or law, debris removal — the insurer is required to tell you. They cannot sit on benefits you are entitled to and hope you never ask."
            />

            <RegulationCard
              section="§2695.5(e)"
              title="15-Day Acknowledgment Deadline"
              requirement="Upon receiving notice of claim, every insurer must immediately — but in no event more than 15 calendar days later — acknowledge receipt of the claim. The acknowledgment must include the name of the person handling the claim and how to contact them."
              whyItMatters="If you file a claim and hear nothing back within 15 days, the insurer has already violated the regulations. Start your documentation clock from day one."
            />

            <RegulationCard
              section="§2695.5(b)"
              title="Responding to Policyholder Communications"
              requirement="Upon receiving any communication from a claimant regarding a claim that reasonably suggests a response is expected, the insurer must immediately — but in no event more than 15 calendar days later — furnish a complete response based on the facts then known."
              whyItMatters="This goes beyond just acknowledging receipt. If you ask a question, send documentation, or request an update — and a reasonable person would expect a reply — the insurer must respond within 15 days. Silence is a violation."
            />

            <RegulationCard
              section="§2695.7(d)"
              title="Thorough Investigation Required"
              requirement="Every insurer shall conduct and diligently pursue a thorough, fair, and objective investigation and shall not persist in seeking information not reasonably required for or material to the resolution of a claim dispute."
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
              title="30-Day Written Extension Notice"
              requirement="If more time is needed than the 40-day decision period, the insurer must provide written notice every 30 calendar days specifying the reasons additional time is required and the additional information needed to make a decision. This notice must continue until the claim is accepted or denied."
              whyItMatters="Insurers cannot simply let a claim sit in limbo. If they need more time, they must tell you why in writing every 30 days. If you are not receiving these notices, the insurer is in violation — and the silence itself is evidence of unreasonable delay."
            />

            <RegulationCard
              section="§2695.7(f)"
              title="Statute of Limitations Notice"
              requirement="Except where a claim has been settled by payment, every insurer shall provide written notice of any statute of limitation or other time period requirement upon which the insurer may rely to deny a claim."
              whyItMatters="If the insurer intends to rely on a deadline to deny your claim, they must tell you about that deadline in advance. An insurer that silently lets a limitation period expire — without ever notifying you — has violated this regulation."
            />

            <RegulationCard
              section="§2695.7(g)"
              title="Unreasonably Low Settlement Offers"
              requirement="No insurer shall attempt to settle a claim by making a settlement offer that is unreasonably low. The Commissioner may consider factors including the evidence available, applicable legal authority, and the probable liability of the insured."
              whyItMatters="When the insurer offers you a fraction of what the claim is worth, that offer itself is a regulatory violation. This is separate from bad faith — even a single unreasonably low offer violates this regulation and can form the basis of a CDI complaint."
            />

            <RegulationCard
              section="§2695.9(a)(1)"
              title="Consequential Damage and No Out-of-Pocket Costs"
              requirement="When a loss requires repair or replacement of an item or part, any consequential physical damage incurred in making the repair or replacement not otherwise excluded by the policy shall be included in the loss. The insured shall not have to pay for depreciation nor any other cost except for the applicable deductible."
              whyItMatters="If the contractor has to remove undamaged cabinets to access a water-damaged wall, the cost of removing and replacing those cabinets is part of the loss. The insured should not bear any cost beyond the deductible — including overhead, profit, and any damage caused by the repair process itself."
            />

            <RegulationCard
              section="§2695.9(a)(2)"
              title="Matching — Uniform Reasonable Appearance"
              requirement="When a loss requires replacement of items and the replaced items do not match in quality, color, or size, the insurer shall replace all items in the damaged area so as to conform to a reasonably uniform appearance."
              whyItMatters="If the insurer replaces one slope of your roof and the new shingles do not match the weathered existing shingles, the insurer must pay to replace the remaining slopes to achieve a uniform appearance. This applies to roofing, siding, flooring, cabinetry, and any other visible component where a partial replacement creates a noticeable mismatch."
            />

            <RegulationCard
              section="§2695.9(d)"
              title="Written Estimates and Contractor Name Requirement"
              requirement="If losses are settled on the basis of a written estimate, the insurer must supply the claimant with a copy. The estimate must restore property to no less than its pre-loss condition. If requested by the claimant, the insurer must promptly provide the name of at least one repair individual or entity that will make the repairs for the amount of the written estimate."
              whyItMatters="This is one of the most powerful regulations for policyholders. If the insurer says repairs cost $50,000 but every contractor you call says $90,000, you can demand they name a contractor who will actually do the work for their number. If they cannot produce one, their estimate is indefensible."
            />

            <RegulationCard
              section="§2695.9(f)"
              title="Depreciation Must Be Itemized and Justified"
              requirement="When the amount claimed is adjusted because of betterment, depreciation, or salvage, all justification for the adjustment shall be contained in the claim file. Any adjustments shall be discernible, measurable, itemized, and specified as to dollar amount."
              whyItMatters="Blanket depreciation — the same flat percentage applied across every line item — violates this regulation. The insurer must justify each depreciation figure individually. If they cannot explain why a specific item was depreciated by a specific amount, the depreciation is unsupported."
            />
          </div>
        </section>

        {/* ───────── Tip callout: Contractor Name Requirement ───────── */}
        <CalloutBox variant="tip" title="The Contractor Name Requirement — Your Most Effective Tool">
          <p className="mb-2">
            Of all the regulations on this page, <strong>Section 2695.9(d)</strong> is arguably the
            most effective tool available to policyholders who are being underpaid on structural
            repairs.
          </p>
          <p className="mb-2">
            Here is how it works: <strong>you do not need to obtain your own bids.</strong> Even
            without any competing estimates, you can send a written request demanding the insurer
            provide the name, address, and phone number of a licensed, reputable contractor who
            will actually perform the repairs for the amount of the insurer's estimate. The
            insurer's own number triggers the requirement.
          </p>
          <p className="mb-2">
            In most cases, <strong>they cannot</strong> produce a contractor who will do the work
            for their number. And once they admit they cannot, their own estimate collapses. This
            shifts the burden of proof and is one of the fastest ways to force an insurer to
            increase their settlement.
          </p>
          <p className="mb-2">
            Insurance companies frequently try to satisfy this requirement by pointing you to a
            <strong> contractor referral service</strong> or managed repair network. That does{' '}
            <strong>not</strong> meet the letter of the regulation. The rule requires the name of
            an <em>actual licensed contractor</em> who will perform the repairs for the insurer's
            estimated amount — not a referral service, not a list of vendors, not a program. If
            they give you anything other than a real contractor who will stand behind the price,
            that is not compliance.
          </p>
          <p>
            Put the request in writing, cite the regulation by number, and keep the response (or
            lack of response) in your file. If they ignore the request, that is a separate
            regulatory violation under §2695.5(b).
          </p>
        </CalloutBox>

        {/* ───────── Alif v. FAIR Plan callout ───────── */}
        <CalloutBox variant="legal" title="Aliff v. California FAIR Plan (2025) — Smoke-Damage Limitations Struck Down">
          <p className="mb-2">
            In <em>Aliff v. California FAIR Plan Association</em> (2025), the Los Angeles Superior
            Court invalidated FAIR Plan policy language that limited smoke-damage coverage to damage
            involving a &ldquo;permanent physical change&rdquo; visible to the unaided eye. The
            court held that the restrictive language was narrower than the coverage required by{' '}
            <strong>California Insurance Code &sect; 2071</strong>, the Standard Fire Policy
            statute that sets the minimum coverage floor for fire insurance in this state.
          </p>
          <p className="mb-2">
            Following <em>Aliff</em>, the FAIR Plan agreed to strike much of the offending language.
            The ruling is not limited to the FAIR Plan — any admitted California carrier that uses
            similar narrowing language on smoke claims is exposed to the same challenge, because
            &sect; 2071 applies to all fire policies sold in California.
          </p>
          <p className="text-sm italic">
            This is general information, not legal advice. Only a licensed California attorney can
            advise you on whether <em>Alif</em> applies to your specific policy and claim.
          </p>
        </CalloutBox>

        {/* ───────── Related Articles ───────── */}
        <section>
          <h2 className="text-2xl font-bold text-[#1F3964] mb-5">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <Link
              href="/resources/bad-faith"
              aria-label="Read Bad Faith Insurance Practices guide"
              className="block bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <span className="text-2xl mb-3 block" aria-hidden="true">🚨</span>
              <h3 className="font-bold text-[#1F3964] text-sm mb-2">Bad Faith Insurance Practices</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                When regulatory violations become actionable bad faith — your remedies, how to
                document violations, and when to involve an attorney.
              </p>
              <p className="text-[#2E74B5] text-sm font-medium mt-3" aria-hidden="true">Read guide &rarr;</p>
            </Link>

            <Link
              href="/resources/cdi-complaint"
              aria-label="Read Filing a CDI Complaint guide"
              className="block bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <span className="text-2xl mb-3 block" aria-hidden="true">📁</span>
              <h3 className="font-bold text-[#1F3964] text-sm mb-2">Filing a CDI Complaint</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                How to file a complaint with the California Department of Insurance, what to
                include, and how to cite the specific regulations your insurer violated.
              </p>
              <p className="text-[#2E74B5] text-sm font-medium mt-3" aria-hidden="true">Read guide &rarr;</p>
            </Link>

            <Link
              href="/resources/california-fair-claims"
              aria-label="Read Fair Claims Settlement Practices Act guide"
              className="block bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <span className="text-2xl mb-3 block" aria-hidden="true">⚖️</span>
              <h3 className="font-bold text-[#1F3964] text-sm mb-2">Fair Claims Settlement Practices Act</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                A detailed walkthrough of 10 CCR 2695 — every deadline, every required disclosure,
                and how to use the regulations to negotiate a fair settlement.
              </p>
              <p className="text-[#2E74B5] text-sm font-medium mt-3" aria-hidden="true">Read guide &rarr;</p>
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
