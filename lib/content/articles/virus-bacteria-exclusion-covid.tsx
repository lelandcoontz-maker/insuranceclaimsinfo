import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title:
    'The Virus and Bacteria Exclusion: How ISO CP 01 40 Killed Most COVID Business Interruption Claims',
  description:
    'History and analysis of the ISO CP 01 40 virus and bacteria exclusion, its role in COVID-19 business interruption claim denials, key court decisions, the direct physical loss debate, and lessons for future pandemic planning.',
  summary:
    'The ISO CP 01 40 virus and bacteria exclusion, present in many policies, defeated most COVID business-interruption claims, and courts largely held there was no \'direct physical loss.\' It is a key lesson for pandemic and contamination coverage planning.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational in nature and reflects the author&rsquo;s interpretation of
          California insurance law as a Licensed Public Adjuster. It is not legal advice. COVID-19
          business interruption coverage disputes involve complex and evolving legal questions that
          vary by jurisdiction, policy form, and the specific facts of each claim. If you have a
          disputed claim involving the virus exclusion or pandemic-related business interruption,
          consult with a licensed California attorney who specializes in insurance coverage disputes.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        When COVID-19 forced businesses across the country to shut their doors in March 2020,
        business owners turned to their commercial property insurance for relief. They had been
        paying premiums for{' '}
        <Link
          href="/resources/business-interruption"
          className="text-blue-700 underline hover:text-blue-900"
        >
          business interruption
        </Link>{' '}
        coverage &mdash; insurance designed to replace lost income when a covered event forces a
        business to suspend operations. A global pandemic that shuttered entire industries seemed
        like exactly the kind of catastrophe that insurance was supposed to cover.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For the vast majority of policyholders, the answer was no. A single endorsement &mdash;
        ISO form CP 01 40, the &ldquo;Exclusion of Loss Due to Virus or Bacteria&rdquo; &mdash;
        stood between millions of business owners and their insurance coverage. This endorsement,
        quietly added to most commercial property policies beginning in 2006, was specifically
        designed to eliminate coverage for losses caused by viruses and bacteria. When the pandemic
        arrived fourteen years later, it worked exactly as the insurance industry intended.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Origins of ISO CP 01 40: A Post-SARS Maneuver
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The virus and bacteria exclusion did not exist before 2006. Its development was a direct
        response to the 2002&ndash;2003 SARS epidemic, which raised the specter of pandemic-related
        insurance claims. The Insurance Services Office (ISO) &mdash; the industry organization
        that drafts standard policy forms used by most commercial insurers &mdash; filed the new
        exclusion with state regulators in 2006.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In its filing, ISO explicitly stated the purpose: to address &ldquo;the threat of
        loss&rdquo; from disease-causing agents and to clarify that commercial property policies
        were not intended to cover virus or bacteria-related losses. The filing acknowledged that
        the standard commercial property form did not contain a specific exclusion for such losses,
        creating potential coverage under open-peril policies. ISO&rsquo;s solution was not to test
        the question in court but to eliminate it prospectively by adding an exclusion so broad
        that virtually no virus or bacteria-related claim could survive it.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        State regulators across the country approved the filing with little opposition. By the
        time COVID-19 emerged in late 2019, the exclusion had been a standard feature of
        commercial property policies for over a decade. Most business owners had no idea it was
        there.
      </p>

      <CalloutBox variant="important" title="The Industry Knew the Risk Existed">
        <p>
          The very existence of ISO CP 01 40 demonstrates that the insurance industry recognized
          pandemic-related losses as a foreseeable risk &mdash; and chose to exclude them rather
          than price them. The filing memo stated that the exclusion was needed because &ldquo;the
          universe of possible exposures is not clearly determinable.&rdquo; In other words, the
          industry concluded it could not profitably underwrite the risk, so it eliminated
          coverage entirely. This is important context for policyholders evaluating whether their
          business interruption coverage truly protects them against catastrophic events.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What ISO CP 01 40 Actually Says
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The exclusion language is broad and deliberately comprehensive. The key operative provision
        states:
      </p>
      <blockquote className="border-l-4 border-[#C9A84C] bg-amber-50 p-4 my-6 text-gray-700 text-sm leading-relaxed italic">
        &ldquo;We will not pay for loss or damage caused by or resulting from any virus, bacterium
        or other microorganism that induces or is capable of inducing physical distress, illness
        or disease.&rdquo;
      </blockquote>
      <p className="text-gray-700 leading-relaxed mb-4">
        The exclusion is not limited to specific viruses or bacteria. It covers <em>any</em> virus,
        bacterium, or microorganism capable of causing illness. It does not require that the virus
        actually caused illness &mdash; merely that the virus is &ldquo;capable of inducing&rdquo;
        illness. And it applies to both &ldquo;loss or damage&rdquo; &mdash; which insurers argue
        encompasses both direct physical damage to property and loss of use.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The endorsement further provides that this exclusion applies regardless of any other cause
        or event that contributes concurrently or in any sequence to the loss. This anti-concurrent
        causation language is designed to prevent policyholders from arguing that a government
        shutdown order &mdash; rather than the virus itself &mdash; caused the business
        interruption loss. Under the exclusion&rsquo;s terms, if a virus is anywhere in the causal
        chain, the loss is excluded.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The &ldquo;Direct Physical Loss or Damage&rdquo; Debate
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Even for policies that did not contain ISO CP 01 40, COVID-19 claims faced a second,
        equally formidable barrier: the requirement that business interruption coverage be triggered
        by &ldquo;direct physical loss of or damage to&rdquo; property at the insured premises. The
        standard commercial property policy conditions business income coverage on this trigger
        &mdash; lost income is covered only when the business suspension results from direct
        physical loss or damage caused by a covered peril.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This language became the central battleground in COVID-19 coverage litigation. The core
        question: does the presence of a virus on surfaces, or a government order closing a
        business due to a virus, constitute &ldquo;direct physical loss of or damage to&rdquo;
        property?
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>The insurer position:</strong> &ldquo;Direct physical loss or damage&rdquo;
          requires a tangible, physical alteration to the property itself. A virus that can be
          cleaned from surfaces does not physically alter or damage the building. Government
          orders restricting business operations are not physical events. Without physical damage
          to the premises, the business income coverage trigger is never satisfied.
        </li>
        <li>
          <strong>The policyholder position:</strong> &ldquo;Loss of&rdquo; is distinct from
          &ldquo;damage to.&rdquo; The policy says &ldquo;direct physical loss of <em>or</em>{' '}
          damage to&rdquo; property &mdash; two separate concepts connected by &ldquo;or.&rdquo;
          A business that cannot use its property due to viral contamination or government orders
          has suffered a &ldquo;loss of&rdquo; the property, even if no tangible structural damage
          occurred. Rendering property unusable for its intended purpose is a physical loss.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The COVID Business Interruption Litigation Wave
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The scale of COVID-19 business interruption litigation was unprecedented. Thousands of
        lawsuits were filed across the country, generating an enormous body of case law in a
        remarkably short period. The results were overwhelmingly &mdash; but not universally
        &mdash; unfavorable to policyholders.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Decisions Favoring Insurers
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The majority of courts held that COVID-19 did not cause &ldquo;direct physical loss of or
        damage to&rdquo; property, and that the virus exclusion, where present, barred coverage.
        Key decisions include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong><em>Inns-by-the-Sea v. California Mutual Ins. Co.</em></strong> (2021) 71
          Cal.App.5th 688 &mdash; The California Court of Appeal held that government closure
          orders did not constitute &ldquo;direct physical loss of or damage to&rdquo; property.
          The court found that the policyholders did not allege any physical alteration to their
          property and that loss of use alone did not satisfy the coverage trigger.
        </li>
        <li>
          <strong><em>United Talent Agency v. Vigilant Ins. Co.</em></strong> (2022) 77
          Cal.App.5th 821 &mdash; Another California appellate decision reinforcing that COVID-19
          and related government orders did not cause direct physical loss or damage.
        </li>
        <li>
          <strong><em>Santo&rsquo;s Italian Caf&eacute; LLC v. Acuity Ins. Co.</em></strong>
          (2021, 6th Cir.) &mdash; The Sixth Circuit held that the virus did not cause direct
          physical loss and that the virus exclusion independently barred coverage.
        </li>
        <li>
          <strong><em>Oral Surgeons, P.C. v. Cincinnati Ins. Co.</em></strong> (2021, 8th Cir.)
          &mdash; The Eighth Circuit held that government orders restricting dental practices did
          not cause direct physical loss or damage to the insured premises.
        </li>
      </ul>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Decisions Favoring Policyholders
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A smaller number of courts found for policyholders, often on specific facts or policy
        language:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong><em>Erik&rsquo;s DeliCaf&eacute; v. Zurich American Ins. Co.</em></strong>
          (N.D. Cal. 2020) &mdash; An early decision where the court found that the policyholder
          had adequately alleged that COVID-19 caused direct physical loss, allowing the case to
          survive a motion to dismiss. However, this was a procedural holding that did not resolve
          the coverage question on the merits.
        </li>
        <li>
          <strong><em>North State Deli, LLC v. Cincinnati Ins. Co.</em></strong> (N.C. Business
          Ct. 2020) &mdash; The North Carolina court found that the presence of COVID-19 caused
          &ldquo;direct physical loss&rdquo; because the virus rendered the premises unsafe and
          unusable for normal business operations.
        </li>
        <li>
          <strong><em>Cherokee Nation v. Lexington Insurance Co.</em></strong> (E.D. Okla. 2021)
          &mdash; The court found that the Cherokee Nation sufficiently alleged direct physical
          loss where COVID-19 particles physically attached to and altered surfaces.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Despite these favorable decisions, the overall trend was decidedly against policyholders.
        By 2023, the University of Pennsylvania Carey Law School&rsquo;s COVID Coverage Litigation
        Tracker showed that insurers had prevailed in the substantial majority of decided cases
        nationwide.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Civil Authority Coverage Arguments
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many policyholders pursued claims under the{' '}
        <Link
          href="/resources/civil-authority-utility-services"
          className="text-blue-700 underline hover:text-blue-900"
        >
          civil authority coverage
        </Link>{' '}
        provision found in most commercial property policies. This provision covers lost business
        income when a civil authority (government) prohibits access to the insured premises due
        to direct physical loss of or damage to property in the vicinity of the insured location.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The argument was that government shutdown orders &mdash; stay-at-home orders, capacity
        restrictions, mandatory closures &mdash; constituted action by a civil authority that
        prohibited access to the insured premises. But this argument faced the same fundamental
        barrier: the civil authority provision requires that the government action result from
        &ldquo;direct physical loss of or damage to&rdquo; property in the area. If the virus
        did not cause physical loss or damage, the civil authority trigger was never satisfied.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most courts rejected civil authority arguments on this basis. The government orders were
        issued due to a public health emergency, not due to physical damage to property near the
        insured premises. While the orders prohibited or restricted access, they did not arise
        from the type of physical loss or damage contemplated by the civil authority provision.
      </p>

      <CalloutBox variant="warning" title="The Virus Exclusion Reaches Civil Authority Claims Too">
        <p>
          Even where the civil authority coverage trigger might arguably be satisfied, ISO CP 01 40
          presents an independent barrier. The exclusion applies to &ldquo;loss or damage caused
          by or resulting from any virus&rdquo; &mdash; and its anti-concurrent causation language
          bars coverage whenever a virus contributes to the loss &ldquo;in any sequence.&rdquo;
          Because the government orders were issued in response to the virus, insurers argued that
          the virus was an inextricable part of the causal chain, triggering the exclusion even
          under the civil authority provision.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        California-Specific Legal Landscape
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California&rsquo;s courts were largely aligned with the national trend, though California
        law does provide some unique frameworks that policyholders attempted to invoke:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Efficient proximate cause doctrine</strong> &mdash; Under California Insurance
          Code Section 530 and the{' '}
          <Link
            href="/resources/efficient-proximate-cause"
            className="text-blue-700 underline hover:text-blue-900"
          >
            efficient proximate cause
          </Link>{' '}
          doctrine, when a covered peril and an excluded peril combine to cause a loss, coverage
          depends on which peril was the &ldquo;efficient proximate cause&rdquo; &mdash; the
          predominating cause that set the others in motion. Policyholders argued that government
          orders (not the virus itself) were the efficient proximate cause of their business
          losses. Courts generally rejected this argument, finding that the virus was the
          predominating cause of the entire chain of events.
        </li>
        <li>
          <strong>Reasonable expectations doctrine</strong> &mdash; Some policyholders argued that
          they reasonably expected their business interruption coverage to cover pandemic-related
          losses. While California does consider the reasonable expectations of the insured in
          interpreting ambiguous policy language, courts found the virus exclusion to be
          unambiguous.
        </li>
        <li>
          <strong>Regulatory estoppel</strong> &mdash; A creative argument that the California
          Department of Insurance approved the virus exclusion based on ISO&rsquo;s representation
          that it was merely a clarification, not a reduction in coverage. If the exclusion
          actually removed coverage that previously existed, the regulatory approval may have been
          based on a misrepresentation. This argument was raised in some cases but did not gain
          significant traction in the courts.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Policies Without the Virus Exclusion
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Not every commercial property policy contains ISO CP 01 40. Some carriers use proprietary
        policy forms that may not include a virus exclusion. Some older policies issued before 2006
        predate the endorsement entirely. And some specialty or manuscript policies negotiated by
        sophisticated commercial insureds may have specifically excluded the endorsement or
        negotiated alternative language.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For policyholders whose policies lacked the virus exclusion, the &ldquo;direct physical
        loss or damage&rdquo; requirement was the primary barrier. A few such policyholders
        obtained favorable rulings &mdash; particularly where the policy language used
        &ldquo;loss&rdquo; without &ldquo;physical&rdquo; as a modifier, or where the court
        accepted the argument that viral contamination constituted a physical alteration of
        property.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Going forward, business owners should specifically check whether their policy contains a
        virus or bacteria exclusion. The absence of the exclusion does not guarantee coverage for
        future pandemic events, but it removes the most significant barrier and shifts the
        analysis to the &ldquo;direct physical loss&rdquo; question &mdash; which at least some
        courts have resolved in favor of policyholders.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Regulatory and Legislative Responses
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The mass denial of COVID-19 business interruption claims prompted legislative action at
        both the state and federal levels, though no broadly effective solution was enacted:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>State legislative proposals</strong> &mdash; Several states, including
          California, New Jersey, and New York, introduced bills that would have retroactively
          required insurers to cover COVID-19 business interruption losses regardless of policy
          exclusions. These bills faced intense industry opposition on constitutional grounds
          (impairment of contracts) and concerns about insurer solvency. None was enacted into
          law.
        </li>
        <li>
          <strong>Federal pandemic risk proposals</strong> &mdash; Members of Congress introduced
          the Pandemic Risk Insurance Act (PRIA), modeled after the Terrorism Risk Insurance Act
          (TRIA), which would have created a federal backstop for pandemic-related insurance
          losses. The legislation did not advance beyond committee.
        </li>
        <li>
          <strong>California Department of Insurance actions</strong> &mdash; The CDI issued a
          notice reminding insurers that claim denials must be based on thorough, good-faith
          investigation and that blanket denials based solely on the virus exclusion &mdash;
          without analyzing the specific policy language and facts of each claim &mdash; could
          violate the{' '}
          <Link
            href="/resources/california-fair-claims"
            className="text-blue-700 underline hover:text-blue-900"
          >
            Fair Claims Settlement Practices Regulations
          </Link>
          .
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Lessons for Future Pandemic Planning
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        COVID-19 exposed a fundamental gap in the commercial insurance market: businesses believed
        they had coverage for catastrophic events that forced them to close, and they did not.
        Whether or not one believes insurers were justified in excluding pandemic risk, the
        practical lesson is clear &mdash; business owners must understand exactly what their
        policies cover and what they do not.
      </p>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Read your policy for the virus exclusion.</strong> Search for ISO CP 01 40 or
          equivalent language in your policy&rsquo;s endorsement schedule. If it is there,
          understand what it excludes. If it is not, understand that you may have broader coverage
          than competitors whose policies contain it &mdash; but coverage is still not guaranteed
          due to the &ldquo;direct physical loss&rdquo; requirement.
        </li>
        <li>
          <strong>Ask about parametric or pandemic-specific insurance.</strong> In the aftermath
          of COVID-19, some specialty insurers have developed parametric products that pay a
          predetermined amount when a triggering event occurs (such as a government shutdown order
          in the insured&rsquo;s geographic area). These products bypass the &ldquo;direct
          physical loss&rdquo; and virus exclusion issues because they are not indemnity policies
          &mdash; they pay on the occurrence of a defined event, not on proof of physical damage.
        </li>
        <li>
          <strong>Review{' '}
          <Link
            href="/resources/cp-cause-of-loss-forms"
            className="text-blue-700 underline hover:text-blue-900"
          >
            cause of loss forms
          </Link>{' '}
          carefully.</strong> The standard ISO cause of loss forms (Basic, Broad, and Special)
          differ in their scope of coverage. Understanding which perils are covered and which are
          excluded &mdash; and how cause of loss forms interact with endorsements like
          CP 01 40 &mdash; is essential for evaluating your total exposure.
        </li>
        <li>
          <strong>Maintain robust business continuity plans.</strong> Insurance is one component
          of business resilience. Businesses that had contingency plans &mdash; remote work
          capabilities, alternative revenue streams, cash reserves &mdash; survived the pandemic
          better than those that relied solely on insurance recovery.
        </li>
        <li>
          <strong>Document everything.</strong> If a future pandemic or epidemic occurs, document
          the specific impact on your business from day one: government orders, dates of closure,
          revenue loss, extra expenses, remediation costs, and any physical evidence of viral
          contamination. The policyholders who fared best in COVID-19 litigation were those who
          could point to specific, well-documented physical impacts on their premises.
        </li>
      </ol>

      <CalloutBox variant="tip" title="Check Your Policy Today">
        <p>
          Pull your commercial property policy and look for ISO CP 01 40 in the endorsement
          schedule. If it is present, discuss alternatives with your broker. Ask whether
          carrier-specific or manuscript forms are available that omit the virus exclusion. Ask
          about parametric pandemic products. And review your{' '}
          <Link
            href="/resources/business-interruption"
            className="text-blue-700 underline hover:text-blue-900"
          >
            business income coverage
          </Link>{' '}
          limits and{' '}
          <Link
            href="/resources/period-of-restoration-disputes"
            className="text-blue-700 underline hover:text-blue-900"
          >
            period of restoration
          </Link>{' '}
          provisions to understand exactly what triggers your coverage and what does not.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Key Takeaway
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        ISO CP 01 40 accomplished exactly what the insurance industry designed it to do: it
        eliminated coverage for virus and bacteria-related losses across the vast majority of
        commercial property policies in the country. When COVID-19 arrived, the exclusion &mdash;
        combined with the &ldquo;direct physical loss or damage&rdquo; requirement &mdash;
        blocked recovery for millions of businesses. The courts largely upheld these barriers,
        and legislative efforts to override them were unsuccessful.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The lesson is not that insurance is worthless &mdash; it is that policyholders must
        understand the specific language in their policies and the specific exclusions that limit
        their coverage. A business owner who knows the virus exclusion is in their policy can
        make informed decisions about supplemental coverage, risk mitigation, and business
        continuity planning. A business owner who discovers the exclusion only after filing a
        claim has no options left.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For related reading, see our articles on{' '}
        <Link
          href="/resources/business-interruption"
          className="text-blue-700 underline hover:text-blue-900"
        >
          business interruption coverage
        </Link>
        ,{' '}
        <Link
          href="/resources/civil-authority-utility-services"
          className="text-blue-700 underline hover:text-blue-900"
        >
          civil authority and utility services coverage
        </Link>
        ,{' '}
        <Link
          href="/resources/commercial-endorsements"
          className="text-blue-700 underline hover:text-blue-900"
        >
          commercial endorsements
        </Link>
        ,{' '}
        <Link
          href="/resources/period-of-restoration-disputes"
          className="text-blue-700 underline hover:text-blue-900"
        >
          period of restoration disputes
        </Link>
        , and{' '}
        <Link
          href="/resources/cp-cause-of-loss-forms"
          className="text-blue-700 underline hover:text-blue-900"
        >
          commercial cause of loss forms
        </Link>
        .
      </p>

      <CalloutBox variant="legal" title="Consult a Professional">
        <p>
          This article provides general educational information about the virus and bacteria
          exclusion and COVID-19 business interruption claims. It does not constitute legal or
          insurance advice. The legal landscape for pandemic-related claims continues to evolve
          as appellate decisions are issued and new policy forms are introduced. Consult your
          insurance professional, a licensed public adjuster, or an attorney for guidance
          specific to your situation.
        </p>
      </CalloutBox>
    </>
  )
}
