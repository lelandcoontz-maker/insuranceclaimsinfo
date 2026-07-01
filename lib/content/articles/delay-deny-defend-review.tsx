import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: "Book Review: Delay, Deny, Defend by Jay Feinman",
  description: "A review of Jay Feinman's book on how insurers systematically deny legitimate claims, what it gets right, and why every policyholder should read it.",
  summary:
    'Jay Feinman\'s Delay, Deny, Defend documents how insurers shifted from paying claims to systematically delaying, denying, and defending against them to boost profit. The book explains the industry mindset every policyholder is up against.',
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
        Jay M. Feinman&apos;s <em>Delay, Deny, Defend: Why Insurance Companies Don&apos;t Pay Claims and What You Can Do About It</em> (Portfolio/Penguin, 2010) is the single most important book a policyholder can read before dealing with their insurance company after a loss. It is not a self-help manual. It is not a collection of tips for speeding up your claim. It is an explanation of <em>why</em> the process feels the way it does &mdash; why the adjuster seems helpful but nothing moves forward, why the estimate comes in impossibly low, why the company asks for documentation you already provided, why the whole thing takes months when it should take weeks.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The answer, Feinman argues, is not incompetence. It is strategy.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">What the Book Documents</h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Feinman is a Distinguished Professor of Law at Rutgers University who has studied insurance law for decades. His central thesis is straightforward: beginning in the 1990s, major insurance companies transformed their claims operations from service organizations into profit centers. The catalyst was management consulting &mdash; specifically, McKinsey &amp; Company&apos;s engagement with Allstate and similar consulting relationships at other major carriers.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The old model treated claims as obligations to be fulfilled. The new model treated claims as negotiations to be won. The difference is not subtle. Under the old model, an adjuster&apos;s job was to determine what was owed and pay it. Under the new model, an adjuster&apos;s job is to resolve the claim for the lowest amount the policyholder will accept.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Feinman documents this transformation across multiple insurance lines &mdash; auto, property, health, disability, and life insurance. He names specific companies, describes specific internal programs, and cites specific court documents and regulatory filings. This is not speculation or conspiracy theory. It is documented corporate strategy.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">The Three-Word Strategy</h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        The title itself captures the methodology. <strong>Delay</strong>: extend the claims process until the policyholder is financially desperate or emotionally exhausted. <strong>Deny</strong>: reject claims or portions of claims using technical policy language, biased experts, or manufactured disputes. <strong>Defend</strong>: when the policyholder pushes back, litigate aggressively, making the cost of fighting exceed the value of the claim for all but the most determined.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This is not a universal description of every claim at every company. Feinman is careful to acknowledge that many claims are paid without incident. The strategy is most visible &mdash; and most profitable &mdash; on larger claims where the difference between what is owed and what is offered runs into tens or hundreds of thousands of dollars. It is also most visible after catastrophes, when the volume of claims creates pressure to close files quickly and cheaply.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        What makes the book valuable is not the revelation that insurance companies sometimes underpay. Most policyholders figure that out on their own. What makes the book valuable is the documentation of how the underpayment is <em>systematized</em> &mdash; how it is built into software, training programs, performance metrics, and corporate compensation structures so that individual adjusters execute the strategy without necessarily understanding the larger design.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">What Property Claims Policyholders Should Take From This</h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Feinman&apos;s book is strongest on auto insurance claims (particularly Allstate&apos;s Colossus system) and health insurance denials. The property insurance sections are less detailed, but the principles translate directly. In my experience handling California property claims, the patterns Feinman describes are visible every day:
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Delay through repeated requests:</strong> The insurer asks for documents, receives them, then asks for the same documents again weeks later. Or requests documentation in sequences rather than all at once, resetting timelines with each new request.</li>
        <li><strong>Denial through scope manipulation:</strong> The adjuster acknowledges the damage but writes an estimate that excludes half of the affected areas, uses incorrect line items, or applies depreciation that has no basis in the actual condition of the materials.</li>
        <li><strong>Defense through the genuine dispute doctrine:</strong> When challenged, the insurer hires a biased expert to produce a report supporting the lowball number, then argues in court that any disagreement was a &quot;genuine dispute&quot; rather than bad faith.</li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        The book helps policyholders understand that these are not isolated incidents or individual mistakes. They are the predictable output of a system designed to minimize payments. That understanding changes how you approach your claim. You stop assuming good faith and start documenting everything from day one &mdash; not because you are paranoid, but because you understand the incentive structure you are operating within.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">The McKinsey Connection</h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Feinman&apos;s most important contribution is documenting the role of McKinsey &amp; Company in transforming insurance claims handling. McKinsey is the world&apos;s most prestigious management consulting firm. Its engagement with Allstate in the early 1990s produced what Allstate internally called the Claims Core Process Redesign (CCPR). The details of that engagement are the subject of a separate book &mdash; David Berardinelli&apos;s <Link href="/resources/good-hands-boxing-gloves-review" className="text-blue-700 underline hover:text-blue-900"><em>From Good Hands to Boxing Gloves</em></Link> &mdash; but Feinman places the McKinsey engagement in the broader context of an industry-wide shift.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        What McKinsey brought was not cruelty. It was optimization. The consultants analyzed claims data and identified where the most &quot;leakage&quot; occurred &mdash; where policyholders were receiving more than the minimum the company could defend. They then designed systems to close those gaps. The language was corporate and antiseptic: &quot;claim resolution,&quot; &quot;severity reduction,&quot; &quot;litigation management.&quot; The effect on individual families was anything but.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Feinman draws a direct line from McKinsey&apos;s engagement to measurable changes in how claims were handled: lower initial offers, more frequent denials, longer processing times, and more aggressive litigation postures when policyholders pushed back. He supports this with court documents, regulatory filings, and testimony from former employees.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">What the Book Does Not Cover</h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        No book can cover everything, and there are areas where property claims practitioners will want to look elsewhere:
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Xactimate-specific manipulation:</strong> Feinman wrote before the current era of <Link href="/resources/xactimate-line-item-manipulation" className="text-blue-700 underline hover:text-blue-900">Xactimate line item manipulation</Link>, where carriers suppress minimum charges, override labor rates, and use the &quot;included&quot; designation to make covered items disappear from estimates.</li>
        <li><strong>California-specific regulatory tools:</strong> The book is national in scope and does not cover California&apos;s specific protections under the <Link href="/resources/california-fair-claims" className="text-blue-700 underline hover:text-blue-900">Fair Claims Settlement Practices Act</Link>, the <Link href="/resources/insurance-code-790" className="text-blue-700 underline hover:text-blue-900">Insurance Code 790.03</Link> framework, or the CDI complaint process.</li>
        <li><strong>The appraisal alternative:</strong> Feinman focuses primarily on litigation as the remedy. He does not explore <Link href="/resources/appraisal-mediation-litigation-decision" className="text-blue-700 underline hover:text-blue-900">insurance appraisal</Link> as a faster, cheaper alternative for resolving property claim disputes.</li>
        <li><strong>Post-2010 developments:</strong> AI-driven claims processing, desk adjusting from satellite imagery, and the catastrophe insurance crisis in California have all intensified the patterns Feinman described. The book captures the origin of the problem, not its current state.</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Why It Still Matters</h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        <em>Delay, Deny, Defend</em> was published in 2010. The systems it describes have not been dismantled. They have been refined. The Colossus software that Feinman described for auto claims has evolved into more sophisticated AI-driven systems. The McKinsey principles that transformed Allstate have spread through the industry via executive migration and consulting engagements. The claims environment in 2026 is, if anything, more systematically adversarial than what Feinman documented.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The book&apos;s most enduring value is psychological. It answers the question that every underpaid policyholder asks: &quot;Am I crazy, or is this wrong?&quot; You are not crazy. The system is working as designed. Your adjuster may be pleasant and professional. The delays may seem reasonable in isolation. The estimate may look official and precise. But the outcome &mdash; a payment that does not cover your actual repair costs &mdash; is not an accident. It is the intended result of a corporate strategy that prioritizes shareholder returns over contractual obligations.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Understanding this does not make the process less frustrating. But it changes what you do about it. You document. You put things in writing. You track deadlines. You hire professionals &mdash; Public Adjusters, attorneys &mdash; who understand the system and can navigate it on your behalf. You stop treating the insurance company as a partner in your recovery and start treating it as what the system has made it: an adversary with a financial incentive to pay you less than what you are owed.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Who Should Read This Book</h2>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Every homeowner filing a claim over $25,000.</strong> The patterns Feinman describes become more pronounced as claim values increase.</li>
        <li><strong>Anyone who has been told their claim is &quot;under review&quot; for more than 30 days</strong> without a clear explanation of what is being reviewed.</li>
        <li><strong>Policyholders whose estimates seem impossibly low</strong> and who have been told the discrepancy is just a &quot;difference of opinion.&quot;</li>
        <li><strong>Attorneys new to insurance bad faith litigation</strong> who need to understand the business context behind the legal claims.</li>
        <li><strong>Public adjusters</strong> who want to explain to their clients why the process works the way it does.</li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        Read this book early in your claim. Do not wait until you are already underpaid and frustrated. The information Feinman provides is most valuable when you use it to prepare &mdash; to document from day one, to set realistic expectations, and to recognize the patterns as they unfold rather than after the fact.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">The Bottom Line</h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        <em>Delay, Deny, Defend</em> is not a pleasant book. It will make you angry. But it will also make you effective. The policyholder who understands the system is harder to manipulate than the one who assumes good faith where none exists. Feinman provides the understanding. What you do with it &mdash; that is up to you.
      </p>

      <CalloutBox variant="important" title="Related Resources">
        <ul className="list-disc pl-6 space-y-1">
          <li><Link href="/resources/good-hands-boxing-gloves-review" className="text-blue-700 underline hover:text-blue-900">Book Review: From Good Hands to Boxing Gloves — The Allstate Story in Detail</Link></li>
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
