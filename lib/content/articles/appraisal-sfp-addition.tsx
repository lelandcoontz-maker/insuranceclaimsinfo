import Link from 'next/link'

export const meta = {
  title: 'When the Standard Fire Policy Strips Away an Insurer&apos;s Appraisal Conditions',
  description:
    'How the Standard Fire Policy sets a minimum standard for appraisal rights that insurers cannot undercut, with key case law from Hart v. State Farm and Haddock v. State Farm.',
}

export default function Content() {
  return (
    <>
      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When the Standard Fire Policy Strips Away an Insurer&apos;s Appraisal Conditions
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Your appraisal rights are not limited to what your insurer&apos;s policy says they are. In states that have adopted the Standard Fire Policy, the statutory appraisal provision sets a minimum standard that the insurer&apos;s policy cannot fall below &mdash; and the gap between what insurers write into their policies and what the law actually requires can be enormous.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The Standard Fire Policy prescribes a straightforward appraisal process: if the insured and the company cannot agree on the actual cash value or the amount of loss, either party may demand appraisal in writing. Each side selects a competent, disinterested appraiser within 20 days. The two appraisers then select an umpire. If they cannot agree on an umpire within 15 days, either party may ask a judge to appoint one. That is the process &mdash; simple, direct, and accessible.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Many insurers have added layers of conditions, prerequisites, and procedural hurdles that do not appear anywhere in the Standard Fire Policy. When these additions make appraisal more burdensome than the statute intended, courts have struck them down.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Hart v. State Farm Fire &amp; Casualty Co. (E.D. Mich. 2021)
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        The most dramatic example came from Michigan. After a fire loss, State Farm accepted liability but disputed the amount owed. The Harts had claimed losses over $286,000; State Farm had paid only $96,500. The Harts demanded appraisal.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        State Farm&apos;s policy &mdash; Form HW-2122 &mdash; had layered ten additional conditions onto the appraisal process that do not appear in the Michigan Standard Fire Policy. These included documentation requirements, procedural prerequisites, restrictions on what categories of loss could be appraised, and qualifications that effectively gave State Farm veto power over the process.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The court compared each of State Farm&apos;s ten provisions against the Michigan Standard Fire Policy&apos;s appraisal process (MCL 500.2833(1)(m)). <strong>Nine of the ten violated the statute.</strong> The court found the provisions made appraisal &quot;far more burdensome than the Michigan Legislature intended.&quot;
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        All nine provisions were declared void. The simple, statutory appraisal process controlled.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        <em>556 F. Supp. 3d 735 (E.D. Mich. 2021).</em>{' '}
        <a href="https://www.propertyinsurancecoveragelaw.com/blog/state-farms-appraisal-provision-violates-the-standard-fire-policy/" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">
          Read analysis on Property Insurance Coverage Law Blog.
        </a>
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Haddock v. State Farm Fire &amp; Casualty Co. (E.D. Mich. 2022)
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        State Farm tried again. In a similar dispute, State Farm attempted to exclude from appraisal any claimed damage where causation was disputed &mdash; essentially arguing that if State Farm disagreed about what caused certain damage, that damage could not be appraised.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The court granted the policyholder&apos;s motion for summary judgment. The Standard Fire Policy&apos;s appraisal provision contains no limitation that allows the insurer to exclude causation-disputed items from the appraisal process. Coverage-related disputes cannot be used to circumvent the statutory right to appraisal.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        <em>638 F. Supp. 3d 748 (E.D. Mich. 2022).</em>
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        What This Means for California
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        California&apos;s appraisal provision is rooted in the same statutory framework &mdash; California Insurance Code Sections 2070 and 2071, which codify the state&apos;s Standard Fire Policy. While California courts have developed their own body of appraisal law (including the Sharma waiver doctrine and the classification of appraisal as contractual arbitration under CCP Sections 1280&ndash;1294.2), the principle is the same: the statutory appraisal provision sets a floor.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        When your insurer imposes conditions on the appraisal process that are not found in the statute &mdash; documentation prerequisites, restrictions on what can be appraised, procedural hoops designed to delay or discourage the process &mdash; those conditions may be unenforceable if they reduce your appraisal rights below the statutory minimum.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The lesson from <em>Hart</em> and <em>Haddock</em> applies broadly: read your policy&apos;s appraisal provision, compare it to the statutory standard, and push back when your insurer adds conditions that the legislature never authorized.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Sources &amp; Further Reading
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Property Insurance Coverage Law Blog (Merlin Law Group)</strong> &mdash; Merlin Law Group has published analysis of the appraisal process and the standard fire policy appraisal clause. Search the blog for &ldquo;appraisal&rdquo; and &ldquo;standard fire policy.&rdquo;
        </li>
      </ul>
    </>
  )
}
