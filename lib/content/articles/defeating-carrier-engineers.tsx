import Link from 'next/link'

export const meta = {
  title: 'Defeating Carrier Expert Reports: Engineers, Inspectors, and Hired Professionals',
  description:
    'This guide has been consolidated into our comprehensive article on biased insurance experts — covering all expert types, the feedback loop, limited assignments, and how to fight back.',
  summary:
    'This guide has been consolidated into the comprehensive article on biased insurance experts, which covers engineers and other carrier-hired professionals, the repeat-player feedback loop, limited assignments, and how to challenge their reports.',
}

export default function Content() {
  return (
    <>
      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-8 text-center my-8">
        <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
          This Guide Has Been Updated
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          The content from this article has been consolidated into our comprehensive guide on
          insurance company experts &mdash; covering all expert types, the repeat-player
          problem, limited assignments, the confirmation bias feedback loop, common report
          flaws, how to challenge expert reports, licensing board complaints, and when biased
          expert reliance becomes bad faith.
        </p>
        <Link
          href="/resources/biased-insurance-experts"
          className="inline-block bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
        >
          Read the Full Guide: Biased Insurance Experts &rarr;
        </Link>
      </div>
    </>
  )
}
