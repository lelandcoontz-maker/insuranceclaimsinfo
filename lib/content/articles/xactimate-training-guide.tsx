import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Xactimate Training and Certification: What You Need to Know',
  description:
    'A guide to Xactimate training and certification — what the certification levels mean, what quality training looks like, and why understanding the \'why\' behind the software matters more than passing a test.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Xactimate is the estimating software that runs the property insurance claims industry.
        It is used by 22 of the 25 largest property carriers in the United States, and it is
        the standard tool for adjusters, contractors, Public Adjusters, and appraisers who
        prepare repair estimates for damaged properties. If you work in insurance claims, you
        will encounter Xactimate &mdash; and your ability to use it effectively will directly
        affect your results.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        But there is a significant difference between having an Xactimate login and actually
        knowing how to use the software. Most adjusters learn the basics &mdash; enough to
        create an estimate and add some line items &mdash; and stop there. They never learn
        the sketching tools, never read line item descriptions, and never understand the
        pricing methodology that determines what every number in the estimate actually means.
        This guide covers what Xactimate training involves, what the certification levels
        represent, and how to evaluate whether a training program will actually make you
        competent.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why Xactimate Training Matters
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The gap between an adjuster who knows Xactimate and one who merely uses it is the
        gap between someone who plays chess and someone who plays checkers. Both are sitting
        at the board. Both are moving pieces. But one of them is thinking several moves ahead,
        understanding why the software works the way it does, and making deliberate choices
        that produce accurate, defensible estimates. The other is clicking buttons.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This matters because Xactimate estimates are money. Every line item that is included
        or omitted, every material grade that is selected, every measurement that is entered
        &mdash; these are not abstract exercises. They determine how much a policyholder
        receives to repair their home. An adjuster who does not fully understand the tool is
        producing estimates that are either paying too little (shortchanging the policyholder)
        or too much (creating liability for the carrier).
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Formal training matters because the software is deeper than it looks. Xactimate
        contains thousands of line items, each with specific descriptions of what is and is
        not included. It has a pricing database that varies by geography and date. It has
        sketching modules that can generate quantities automatically. It has depreciation
        tools, overhead and profit calculations, and category-level settings that affect the
        entire estimate. You cannot learn all of this by trial and error &mdash; and the
        consequences of getting it wrong are measured in dollars.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Certification Levels Explained
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Verisk (the company that develops Xactimate) offers a formal certification program
        structured in three levels. Each level builds on the previous one and represents
        increasing mastery of the software.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Level 1: Fundamentals
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Level 1 covers the baseline skills needed to operate Xactimate professionally:
        navigating the interface, creating new claims, adding and editing line items,
        applying depreciation, and generating estimate reports. This is the starting point.
        If you cannot pass Level 1, you should not be producing estimates that determine
        how much money someone receives for their claim.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In real-world terms, Level 1 prepares you to create basic estimates for
        straightforward claims. It does not prepare you for complex losses, detailed
        sketching, or the kind of line-by-line analysis needed to challenge a disputed
        estimate.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Level 2: Intermediate
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Level 2 is where the software starts to open up. This level covers the interior
        and exterior sketching modules &mdash; the tools that allow you to draw floor plans,
        roof diagrams, and structural layouts that automatically calculate quantities.
        It also covers advanced line item selection, efficiency shortcuts, and integration
        with other estimating and project management tools.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is where most competent adjusters and estimators should be operating. If you
        are preparing estimates for anything more complex than a single-room repair, you
        need the sketching and advanced selection skills covered at Level 2. An estimator
        who cannot sketch a roof or a floor plan is producing estimates that lack the
        precision and documentation that a serious claim requires.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Level 3: Expert
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Level 3 addresses the most advanced capabilities of the software: complex
        sketching scenarios involving multi-story structures and irregular shapes, advanced
        variable manipulation, keyboard shortcuts that dramatically improve workflow speed,
        and expert-level pricing and scope methodology. This is the professional tier &mdash;
        the level that distinguishes an Xactimate expert from someone who simply uses the
        software.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Level 3 certification is most relevant for{' '}
        <Link href="/resources/public-adjuster" className="text-blue-700 underline hover:text-blue-900">
          Public Adjusters
        </Link>, lead estimators, appraisal professionals, and claims consultants who
        prepare complex estimates or review the work of others. It is not necessary for
        every adjuster, but for anyone whose livelihood depends on the accuracy and
        defensibility of their estimates, it is the standard to aim for.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Quality Xactimate Training Looks Like
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Not all Xactimate training is created equal. Some programs prepare you to pass a
        certification exam. Others prepare you to actually produce accurate estimates in the
        real world. The difference matters more than most people realize.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Classroom vs. Online Training
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Both formats have strengths and weaknesses:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Classroom (in-person) training</strong> provides hands-on instruction with
          an instructor who can answer questions in real time, look over your shoulder as you
          work through exercises, and adapt the teaching pace to the group. It also creates
          a focused learning environment &mdash; you are not multitasking between the training
          and your inbox
        </li>
        <li>
          <strong>Online training</strong> offers flexibility &mdash; you can learn at your own
          pace, revisit modules as needed, and participate from anywhere. However, online
          training requires more self-discipline, and it can be harder to get immediate help
          when you are stuck on a concept
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The best training programs offer both options, recognizing that different learners
        benefit from different formats. What matters most is not the delivery method but the
        substance of what is being taught.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Key Elements of Good Training
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Regardless of format, effective Xactimate training shares certain characteristics:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Hands-on practice with the live software.</strong> Watching someone use
          Xactimate is not the same as using it yourself. Quality training puts the software
          in your hands and walks you through real claim scenarios &mdash; not just test
          questions
        </li>
        <li>
          <strong>Real-world claim scenarios.</strong> The training should use actual claim
          types &mdash; water damage, fire damage, wind and hail, total losses &mdash; not
          abstract exercises. You should be building estimates for the kinds of claims you
          will actually encounter
        </li>
        <li>
          <strong>Understanding the &ldquo;why.&rdquo;</strong> This is the most important
          element and the one most programs fail at. Good training does not just teach you
          which button to click. It teaches you <em>why</em> a particular line item is the
          right choice, <em>why</em> the price list selection matters, <em>why</em> one
          sketching method produces different results than another. Understanding the
          &ldquo;why&rdquo; is what allows you to apply your knowledge to claims you have
          never seen before
        </li>
        <li>
          <strong>Post-training support.</strong> The best programs do not end when the class
          ends. They offer ongoing mentorship or support &mdash; a way to call or email when
          you are working on a real claim and you get stuck. A certificate on the wall means
          nothing if you cannot apply what you learned three months later on a complicated loss
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Hardware and Materials
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Quality training programs will also address practical requirements:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Hardware requirements:</strong> Xactimate X1 (the desktop version) runs on
          Windows. For smooth operation, a modern Windows PC with a minimum of 16 GB of RAM is
          recommended. Running the software on underpowered hardware leads to crashes, slow
          performance, and frustration that interferes with learning
        </li>
        <li>
          <strong>Training materials:</strong> Look for programs that provide workbooks,
          reference guides, and keyboard shortcut references. These materials serve as ongoing
          resources long after the training ends
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Certification Does and Does not Prove
      </h2>

      <CalloutBox variant="important" title="Passing the Test Is Not the Same as Knowing the Software">
        <p>
          Certification demonstrates that you have completed formal training and passed an
          assessment of your software skills. That is meaningful &mdash; it is better than
          no training at all. But certification does not guarantee that you can produce an
          accurate, complete estimate for a complex real-world claim. The exam tests software
          proficiency. It does not test whether you know how to identify damage, understand
          construction methods, or interpret policy language &mdash; all of which are
          essential to producing an estimate that holds up under scrutiny.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        Here is what certification does and does not prove:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>It proves formal software training.</strong> The holder has been through
          a structured program and demonstrated competence with the tool
        </li>
        <li>
          <strong>It does not prove accurate scoping.</strong> Scoping &mdash; identifying
          all the damage and all the repairs needed &mdash; is a field skill that requires
          physical inspection, construction knowledge, and experience. Xactimate does not
          identify damage; it prices what you tell it to price
        </li>
        <li>
          <strong>It does not prove construction expertise.</strong> Knowing which button
          to click in Xactimate is not the same as knowing how a roof is built, how plumbing
          runs through walls, or what code-required upgrades apply in your jurisdiction.
          Construction background and field experience matter as much as software skills
        </li>
        <li>
          <strong>It is increasingly expected.</strong> Public Adjusters, independent
          adjusters, and claims consultants are increasingly expected to hold Xactimate
          certification. In some markets and with some carriers, it is a de facto requirement
          for being taken seriously at the negotiating table
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Common Mistakes New Xactimate Users Make
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Even after training, new users frequently make the same mistakes. Being aware of
        these pitfalls can save you significant time and prevent costly errors:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Using the wrong price list or an outdated version.</strong> The price list
          determines every price in the estimate. Using one from six months ago, or from the
          wrong geographic area, means every number in your estimate is wrong. Always verify
          the price list date and geographic code before you start building the estimate.
        </li>
        <li>
          <strong>Selecting the wrong line items.</strong> Xactimate has multiple line items
          for similar work at different quality levels. A stripped-down, builder-grade drywall
          line item is not the same as one for a textured, skim-coated finish. Selecting the
          wrong item underprices the repair &mdash; and the carrier will not correct it for
          you.
        </li>
        <li>
          <strong>Not reading line item descriptions.</strong> Every line item has a
          description that specifies what is included and what is not. If you do not read it,
          you will not know that your drywall line item does not include texture, that your
          tile line item does not include the thinset, or that your cabinet line item does not
          include hardware. These are separate items that must be added individually.
        </li>
        <li>
          <strong>Confusing the estimating process.</strong> Xactimate follows a logical
          sequence: identify the damage, determine the scope of repairs, select the
          appropriate line items, enter accurate quantities, and verify the pricing. Jumping
          around in this process &mdash; or skipping steps &mdash; produces incomplete and
          inaccurate estimates.
        </li>
        <li>
          <strong>Ignoring keyboard shortcuts.</strong> This may seem minor, but it is not.
          Xactimate has extensive keyboard shortcuts that dramatically improve workflow speed.
          An estimator who relies entirely on mouse clicks will take two to three times longer
          to produce an estimate. Efficiency matters when you are managing multiple claims,
          and slow estimating leads to cutting corners.
        </li>
        <li>
          <strong>Treating Xactimate as a scope tool.</strong> This is the most fundamental
          mistake, and it persists even among experienced users. Xactimate prices what you
          tell it to price. If you did not identify the damage during the inspection, the
          software will not add it for you. The{' '}
          <Link href="/resources/scope-of-loss" className="text-blue-700 underline hover:text-blue-900">
            scope of loss
          </Link>{' '}
          must be developed through physical inspection by someone who knows what to look for.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Evaluate an Xactimate Training Program
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you are considering investing in Xactimate training, here are the questions
        to ask before you commit:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Does the instructor have real-world adjusting and construction
          experience?</strong> An instructor who has only used Xactimate in a classroom
          cannot teach you how to apply it in the field. Look for instructors who have
          worked actual claims &mdash; who have inspected properties, negotiated with
          carriers, and built estimates that had to survive scrutiny
        </li>
        <li>
          <strong>Is the training hands-on with live software, or is it just lecture?</strong>{' '}
          You cannot learn Xactimate by watching someone else use it. If the program does not
          put the software in your hands and walk you through real exercises, it is not
          adequate training
        </li>
        <li>
          <strong>Does it cover all three certification levels progressively?</strong> A
          program that only offers Level 1 gets you started but leaves significant gaps. Look
          for programs that offer a path through all three levels, so you can advance as your
          skills develop
        </li>
        <li>
          <strong>Is there post-class support?</strong> Can you call or email the instructor
          when you get stuck on a real claim three months after the class? The answer to this
          question separates programs that care about your success from programs that care
          about selling seats
        </li>
        <li>
          <strong>What do past students say about knowledge retention and practical
          application?</strong> Testimonials about a &ldquo;great class&rdquo; are less
          valuable than feedback about whether the training actually improved someone&apos;s
          estimating accuracy and efficiency on real claims
        </li>
        <li>
          <strong>Does the program teach the business context, not just button-clicking?</strong>{' '}
          Xactimate exists within a larger ecosystem of insurance claims, construction, and
          policy interpretation. Training that ignores this context produces users who can
          operate the software but do not understand what they are producing or why it matters
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Beyond the Software: The Complete Estimator
      </h2>

      <CalloutBox variant="warning" title="Xactimate Is a Pricing Tool, Not a Scope Tool">
        <p>
          This point cannot be overstated. Xactimate prices what you tell it to price. It
          does not walk through a damaged property and identify what needs to be repaired. It
          does not read your insurance policy and tell you what is covered. It does not know
          the building codes in your jurisdiction. It is a calculator &mdash; an extraordinarily
          sophisticated one, but a calculator nonetheless. The quality of its output depends
          entirely on the quality of what you put in.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        The best estimators in the property claims industry are not just Xactimate experts.
        They combine software proficiency with a broader set of skills that no software can
        replace:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Construction knowledge.</strong> Understanding how buildings are built &mdash;
          framing, roofing systems, plumbing, electrical, HVAC, finish work &mdash; is
          essential to identifying all the damage and all the repairs needed. You cannot
          estimate what you do not understand
        </li>
        <li>
          <strong>Field inspection skills.</strong> Proper{' '}
          <Link href="/resources/scope-of-loss" className="text-blue-700 underline hover:text-blue-900">
            scope development
          </Link>{' '}
          requires physically inspecting the property, often using moisture meters, thermal
          imaging, and destructive testing to identify hidden damage. This is a skill that
          develops with experience, not with software training alone
        </li>
        <li>
          <strong>Policy knowledge.</strong> Understanding insurance policy language &mdash;
          what is covered, what is excluded, how loss settlement provisions work, what
          depreciation rules apply &mdash; directly affects how an estimate should be
          structured and what line items should be included
        </li>
        <li>
          <strong>Building codes.</strong> When a repair triggers code upgrades, those
          upgrades need to be in the estimate. An estimator who does not know the current
          building codes in the jurisdiction will miss these items &mdash; and Xactimate
          will not flag them for you
        </li>
        <li>
          <strong>Negotiation and communication.</strong> An estimate is a document that will
          be reviewed, challenged, and negotiated. The ability to explain and defend your
          estimate &mdash; line by line, if necessary &mdash; is a skill that goes far beyond
          software proficiency
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Xactimate mastery is necessary but not sufficient. The complete estimator is someone
        who can walk a damaged property, identify every item that needs repair, understand
        how those repairs need to be performed, select the correct line items to price
        those repairs, and defend the estimate against a carrier adjuster who is looking
        for reasons to cut it. That requires{' '}
        <Link href="/resources/xactimate" className="text-blue-700 underline hover:text-blue-900">
          Xactimate proficiency
        </Link>{' '}
        plus construction experience, plus policy knowledge, plus field inspection skills.
        No single training program delivers all of that &mdash; but good Xactimate training
        is where the journey begins.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        For Policyholders: Why This Matters to You
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you are a homeowner reading this, you may wonder why Xactimate training matters
        to your claim. The answer is simple: the person who prepares your estimate determines
        how much money you receive. If your insurance company&apos;s adjuster has minimal
        Xactimate training, your estimate will likely be incomplete &mdash; missing line items,
        using wrong material grades, and omitting legitimate costs like{' '}
        <Link href="/resources/overhead-and-profit" className="text-blue-700 underline hover:text-blue-900">
          overhead and profit
        </Link>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is one of the key reasons why hiring a{' '}
        <Link href="/resources/public-adjuster" className="text-blue-700 underline hover:text-blue-900">
          licensed Public Adjuster
        </Link>{' '}
        who is proficient in Xactimate can make a meaningful difference in your settlement.
        A PA who truly knows the software &mdash; who understands the{' '}
        <Link href="/resources/xactimate-user-manual" className="text-blue-700 underline hover:text-blue-900">
          user manual
        </Link>, the pricing methodology, and the line item descriptions &mdash; can
        identify every dollar the carrier&apos;s adjuster left on the table and build an
        estimate that reflects what the repairs actually cost.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Disclaimer
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This article is for educational purposes and is not legal advice. Xactimate is a
        proprietary product of Verisk Analytics, and specific features, pricing, certification
        requirements, and training programs may change over time. This article does not endorse
        any specific training provider. For advice specific to your claim, consult with a
        licensed professional in your state.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <em>
          Written by Leland Coontz III, Licensed Public Adjuster, CA License #2B53445
        </em>
      </p>
    </>
  )
}
