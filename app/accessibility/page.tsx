import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Accessibility Statement',
  description: 'InsuranceClaimsInfo.com is committed to making our website accessible to all visitors, including those with disabilities.',
  alternates: { canonical: '/accessibility' },
}

export default function AccessibilityPage() {
  return (
    <>
      <div className="bg-[#1F3964] text-white py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-3">Accessibility Statement</h1>
          <p className="text-blue-100 max-w-xl leading-relaxed">
            Our commitment to making this website usable for everyone.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12 prose prose-gray">
        <h2 className="text-xl font-bold text-[#1F3964] mb-4">Our Commitment</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          InsuranceClaimsInfo.com is committed to ensuring digital accessibility for people
          with disabilities. We continually work to improve the user experience for everyone
          and apply the relevant accessibility standards.
        </p>

        <h2 className="text-xl font-bold text-[#1F3964] mb-4">Standards We Follow</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.2 at Level AA.
          These guidelines explain how to make web content more accessible to people with a wide
          range of disabilities, including:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
          <li>Visual impairments, including blindness and low vision</li>
          <li>Hearing impairments</li>
          <li>Motor impairments that affect the ability to use a mouse or keyboard</li>
          <li>Cognitive and learning disabilities</li>
        </ul>

        <h2 className="text-xl font-bold text-[#1F3964] mb-4">What We Do</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
          <li>Provide text alternatives for non-text content</li>
          <li>Ensure sufficient color contrast between text and backgrounds</li>
          <li>Make all functionality available from a keyboard</li>
          <li>Provide visible focus indicators for interactive elements</li>
          <li>Use proper heading hierarchy and semantic HTML structure</li>
          <li>Associate form labels with their inputs</li>
          <li>Include ARIA attributes where needed for assistive technology</li>
          <li>Provide a skip navigation link to bypass repeated content</li>
          <li>Respect user preferences for reduced motion</li>
          <li>Ensure the site is usable at different zoom levels and screen sizes</li>
          <li>Prevent sticky headers from obscuring focused elements during keyboard navigation</li>
          <li>Maintain adequate touch target sizes for interactive elements</li>
        </ul>

        <h2 className="text-xl font-bold text-[#1F3964] mb-4">Feedback</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          We welcome feedback on the accessibility of this website. If you encounter any
          accessibility barriers or have suggestions for improvement, please contact us:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
          <li>Use our <a href="/contact" className="text-[#2E74B5] hover:text-[#1F3964] underline">contact form</a></li>
          <li>Email: accessibility concerns can be submitted through the contact form above</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-6">
          We try to respond to accessibility feedback within 2 business days.
        </p>

        <h2 className="text-xl font-bold text-[#1F3964] mb-4">Ongoing Efforts</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          We regularly review our website against WCAG 2.2 AA standards using both automated
          testing tools and manual evaluation. As we add new content and features, we incorporate
          accessibility into our development process.
        </p>

        <p className="text-gray-500 text-sm italic">
          This statement was last updated on April 26, 2026.
        </p>
      </div>
    </>
  )
}
