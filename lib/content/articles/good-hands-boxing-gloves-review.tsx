import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Book Review: From Good Hands to Boxing Gloves by David Berardinelli',
  description: 'A review of David Berardinelli\'s From Good Hands to Boxing Gloves, which Berardinelli built from internal Allstate and McKinsey documents he obtained in litigation and published after California courts denied Allstate\'s motions to seal the record. What Berardinelli documents about CCPR, and what it means for property claims today.',
  summary:
    'David Berardinelli\'s From Good Hands to Boxing Gloves analyzes internal Allstate / McKinsey documents Berardinelli obtained in litigation and published after courts denied Allstate\'s motions to seal them. Berardinelli argues that the Claims Core Process Redesign was, by design, a system to reduce claim payments; the patterns he documents are visible in property claims handling today.',
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

      <CalloutBox variant="info" title="Disclaimer">
        <p>This article is an independent review provided for educational purposes. We have no relationship with the author or publisher. The opinions expressed are based on our experience as a licensed Public Adjuster handling property insurance claims in California.</p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        David J. Berardinelli&apos;s <em>From Good Hands to Boxing Gloves: The Dark Side of Insurance</em> (Trial Guides, 2008) exists because of how a discovery dispute played out in court. Berardinelli, a trial attorney based in Santa Fe, New Mexico, obtained a batch of internal Allstate and McKinsey documents in discovery in a case against Allstate. The documents were produced under a protective order, but Berardinelli then filed summary analyses of them with the court in connection with motions in the case. Allstate moved to seal the record and to enjoin Berardinelli from publishing further material about the documents. The trial court denied both motions, and the analyses entered the public record. Florida&apos;s Office of Insurance Regulation later ordered Allstate to produce the underlying McKinsey PowerPoint slides; Allstate&apos;s refusal led to a 2008 suspension of its authority to write new auto policies in Florida, and the slides were ultimately released publicly.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The book Berardinelli built from those documents is not a polemic. It reads as a document-by-document reconstruction of a corporate transformation &mdash; told largely in Allstate&apos;s own words, from its own internal presentations, memos, and training materials. That is what makes it powerful as a primary-source critique.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Two Editions, Two Audiences</h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        There are two versions of this book, and the distinction matters.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The <strong>consumer edition</strong> (<em>From Good Hands to Boxing Gloves: The Dark Side of Insurance</em>, 2008, ASIN: 1934833010) is written for a general audience. It explains the McKinsey engagement in accessible language and focuses on what policyholders need to understand about how modern claims operations work.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The <strong>legal practitioner edition</strong> (<em>From Good Hands to Boxing Gloves: How Allstate Changed Casualty Insurance in America</em>, ASIN: 0974324841) is the substantially longer companion volume, with chapters by Dr. Michael A. Freeman covering the Minor Impact Soft Tissue (MIST) methodology Allstate applied to low-speed collision injury claims. The practitioner edition is cited in the discussion of Allstate&apos;s claims-handling practices on the Allstate Wikipedia article.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        For property claims practitioners, the consumer edition provides the essential education. The practitioner edition is for attorneys preparing bad faith litigation against Allstate or carriers that adopted similar programs.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">What the McKinsey Documents Reveal</h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        In the early 1990s, Allstate was already profitable. But McKinsey &amp; Company identified an opportunity to extract significantly more profit from the claims operation. The result was the Claims Core Process Redesign (CCPR) &mdash; a comprehensive transformation of how Allstate handled every claim from first notice of loss through resolution.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Berardinelli documents the core elements:
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Lower initial offers as the default:</strong> Berardinelli argues, drawing on the McKinsey slides, that the consultants&apos; analysis identified policyholder acceptance of first offers as a major lever. The book documents internal materials directing lower initial offers as a systematic practice, with the savings coming from the gap between what the insured was owed and what the insured would accept without fighting.</li>
        <li><strong>The &ldquo;boxing gloves&rdquo; framing:</strong> For policyholders who did push back, the McKinsey materials Berardinelli reproduces describe an aggressively adversarial litigation posture &mdash; make the cost of fighting exceed the value of the dispute. The &ldquo;good hands&rdquo; / &ldquo;boxing gloves&rdquo; metaphor traces to Allstate&apos;s own internal slides, as reported in Bloomberg&apos;s coverage and reproduced in the book.</li>
        <li><strong>Technology-driven claim valuation:</strong> McKinsey helped Allstate implement Colossus, the third-party claims-valuation software that generated injury-claim valuations from coded inputs. Berardinelli argues that the system narrowed individual adjuster discretion, channeling decisions into software-driven ranges set by parameters the carrier controlled.</li>
        <li><strong>Adjuster performance metrics tied to savings:</strong> Berardinelli reproduces materials describing performance metrics where adjusters who consistently paid higher amounts were flagged for &ldquo;severity leakage,&rdquo; and adjusters who consistently underpaid were credited with &ldquo;claims savings.&rdquo; Both terms are Allstate / McKinsey-engagement terminology of record.</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">CCPR Is Not Just an Allstate Problem</h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        The most important thing Berardinelli&apos;s book demonstrates &mdash; and the reason it belongs on every policyholder&apos;s shelf regardless of their carrier &mdash; is that the CCPR model did not stay at Allstate.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        McKinsey consulting engagements at other carriers produced similar programs. Executives trained in the CCPR methodology moved to other companies. The consulting industry studied Allstate&apos;s results and recommended comparable approaches to competitors. By the time Feinman wrote <Link href="/resources/delay-deny-defend-review" className="text-blue-700 underline hover:text-blue-900"><em>Delay, Deny, Defend</em></Link> in 2010, the patterns Berardinelli documented at Allstate were visible across the industry.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        In my experience handling property claims against the major carriers, the CCPR playbook is visible in various forms at most of them. The specific software varies. The internal branding changes. But the core principles Berardinelli documents &mdash; lower initial offers, delay tactics, aggressive resistance to disputes, performance metrics that reward closing claims for less &mdash; are visible across the industry as practitioners experience it.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">What Property Claims Professionals Should Notice</h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        While Berardinelli focuses primarily on auto and bodily injury claims (where Colossus had its most direct impact), property claims practitioners will recognize the structural patterns:
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Xactimate as the property claims equivalent of Colossus:</strong> Just as Colossus generated injury valuations that adjusters were expected to stay within, <Link href="/resources/xactimate-not-the-law" className="text-blue-700 underline hover:text-blue-900">Xactimate generates repair estimates</Link> that carriers treat as authoritative. Adjusters who consistently write estimates above certain thresholds are flagged. The software constrains the adjuster, not the other way around.</li>
        <li><strong>Preferred vendor networks as cost control:</strong> <Link href="/resources/managed-repair-program-drp" className="text-blue-700 underline hover:text-blue-900">Managed repair programs</Link> score contractors on &quot;supplement ratios&quot; and &quot;claim costs&quot; &mdash; rewarding vendors who keep costs low and penalizing those who accurately scope the work. This is the property claims version of Colossus: technology and vendor management replacing adjuster judgment.</li>
        <li><strong>Authority levels as payment caps:</strong> When a field adjuster has $50,000 authority on a $120,000 claim, the claim must go to a supervisor or examiner who has never seen the property. Each escalation adds delay and introduces decision-makers with no first-hand knowledge of the damage. The structure itself produces underpayment.</li>
        <li><strong>Desk adjusting as systematic detachment:</strong> When an adjuster writes an estimate from photos or satellite imagery without ever visiting the property, they are operating within a system designed to minimize the human connection that might lead to fair payment. <Link href="/resources/desk-adjusting-remote-estimates" className="text-blue-700 underline hover:text-blue-900">Desk adjusting</Link> is the logical extension of CCPR principles.</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">The MIST Defense and Its Property Claims Equivalent</h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        The practitioner edition devotes substantial chapters to Allstate&apos;s MIST (Minor Impact Soft Tissue) program &mdash; a systematic approach to denying or minimizing injury claims from low-speed vehicle collisions. The logic was: if the impact was minor, the injuries must be minor, regardless of what the claimant or their doctor reported.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Property claims have a parallel. When a carrier sends an engineer to write a report concluding that water staining is &quot;cosmetic,&quot; that a roof has &quot;wear and tear&quot; rather than storm damage, or that structural cracking is from &quot;settlement&quot; rather than an insured event &mdash; that is the MIST defense applied to property. The company hires an expert whose job is to provide a basis for denial, then cites that expert&apos;s opinion as evidence that any disagreement is a &quot;<Link href="/resources/genuine-dispute-doctrine" className="text-blue-700 underline hover:text-blue-900">genuine dispute</Link>&quot; rather than bad faith.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Dr. Freeman&apos;s demolition of MIST in the practitioner edition provides a template for how to challenge this methodology: by exposing the financial incentives behind the expert opinions, by documenting the disconnect between the expert&apos;s conclusions and the physical evidence, and by showing the jury that the &quot;expert opinion&quot; was purchased, not discovered.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">What Changed After the Documents Went Public</h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        The honest answer is: not enough.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Berardinelli&apos;s book generated significant attention in legal circles. The McKinsey documents have been cited in bad faith lawsuits against Allstate across the country. Some states &mdash; particularly those with strong consumer protection statutes &mdash; have used the documents to support regulatory scrutiny of claims practices.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        But the fundamental economics have not changed. The <Link href="/resources/victim-becomes-villain-tort-reform" className="text-blue-700 underline hover:text-blue-900">tort reform movement</Link> has made it harder to hold carriers accountable through litigation. Damage caps limit the cost of getting caught. The &quot;genuine dispute doctrine&quot; provides cover for underpayment. And the CCPR model continues to generate billions in additional profit for carriers that adopt it.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        What the book did accomplish was something perhaps more important in the long run: it removed plausible deniability. Before Berardinelli, carriers could claim that underpayment was the result of honest disagreements, individual adjuster errors, or legitimate differences of professional opinion. After Berardinelli, anyone who reads the documents knows that underpayment is architectural. It is designed into the system at every level.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Reading Order</h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        If you are going to read both books, read <em>Delay, Deny, Defend</em> first. Feinman provides the industry-wide context &mdash; the broad patterns across all carriers and all insurance lines. Then read <em>From Good Hands to Boxing Gloves</em> for the deep case study &mdash; the specific company, the specific documents, the specific transformation that proved the concept and spread through the industry.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Together, the two books provide what no single volume can: both the breadth (Feinman) and the depth (Berardinelli) needed to understand why your insurance claim feels the way it does.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Who Should Read This Book</h2>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Policyholders fighting an Allstate claim:</strong> The book provides specific language, internal program names, and documented practices that your attorney can use in bad faith demand letters and litigation.</li>
        <li><strong>Attorneys handling bad faith against any carrier:</strong> The CCPR model is the template. Understanding how it works at Allstate helps identify the same patterns at other companies, even when the internal branding is different.</li>
        <li><strong>Public adjusters explaining the process to clients:</strong> Clients need to understand that they are not dealing with a neutral claims process. This book provides the evidence to support that explanation.</li>
        <li><strong>Anyone who has been told their claim is worth less than they know it costs to repair:</strong> The gap between what you are offered and what it actually costs is not a mistake. It is the intended output of the system Berardinelli documents.</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">The Bottom Line</h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Berardinelli&apos;s thesis, drawing on Allstate&apos;s own internal materials, is that the CCPR transformation prioritized shareholder economics over policyholder claim payments &mdash; and that the documents themselves, not the author&apos;s framing, are what carry the argument. Whether the reader agrees with every characterization or not, the documentary base for the book is unusually well-anchored for a book in this genre.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        That proof matters. Not because it will change how insurance companies operate &mdash; the profit motive is too strong. But because it changes how policyholders respond. When you understand that the system is designed to underpay you, you stop being surprised when it does. And you start preparing to fight back from the first phone call.
      </p>

      <CalloutBox variant="important" title="Related Resources">
        <ul className="list-disc pl-6 space-y-1">
          <li><Link href="/resources/delay-deny-defend-review" className="text-blue-700 underline hover:text-blue-900">Book Review: Delay, Deny, Defend — Why Your Insurance Company Treats You Like an Adversary</Link></li>
          <li><Link href="/resources/history-of-bad-faith" className="text-blue-700 underline hover:text-blue-900">How the Tort of Bad Faith Was Invented</Link></li>
          <li><Link href="/resources/victim-becomes-villain-tort-reform" className="text-blue-700 underline hover:text-blue-900">When the Victim Becomes the Villain: The Tort Reform Narrative</Link></li>
          <li><Link href="/books" className="text-blue-700 underline hover:text-blue-900">Full Recommended Books &amp; Films List</Link></li>
        </ul>
      </CalloutBox>
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
