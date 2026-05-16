import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Terms of service for InsuranceClaimsInfo.com. Understand the terms governing your use of our California insurance claim resources, tools, and digital products.',
  alternates: { canonical: '/terms' },
}

export default function TermsOfServicePage() {
  return (
    <>
      {/* Navy Header */}
      <section className="bg-[#1F3964] text-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">Terms of Service</h1>
          <p className="text-blue-200 text-sm">Last updated: April 2026</p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-12">
        <p className="text-gray-700 leading-relaxed text-sm mb-8">
          These Terms of Service (&quot;Terms&quot;) govern your use of InsuranceClaimsInfo.com
          (&quot;the Site&quot;), operated by Leland Coontz III, a California Licensed Public
          Adjuster (License #2B53445). By accessing or using this website, you agree to be bound
          by these Terms. If you do not agree, please do not use the Site.
        </p>

        {/* 1. Acceptance of Terms */}
        <h2 className="text-xl font-bold text-[#1F3964] mt-8 mb-3">1. Acceptance of Terms</h2>
        <p className="text-gray-700 leading-relaxed text-sm">
          By accessing or using InsuranceClaimsInfo.com, you acknowledge that you have read,
          understood, and agree to be bound by these Terms of Service and our{' '}
          <Link href="/privacy" className="text-[#2E74B5] underline hover:text-[#1F3964]">
            Privacy Policy
          </Link>. We reserve the right to update these Terms at any time. Continued use of the
          Site after changes constitutes acceptance of the revised Terms.
        </p>

        {/* 2. Educational Content Disclaimer */}
        <h2 className="text-xl font-bold text-[#1F3964] mt-8 mb-3">2. Educational Content Disclaimer</h2>
        <p className="text-gray-700 leading-relaxed text-sm mb-3">
          The information provided on this website — including articles, guides, FAQs, and tool
          outputs — is for <strong>educational and informational purposes only</strong>. It does
          not constitute legal advice, financial advice, or professional counsel of any kind.
        </p>
        <p className="text-gray-700 leading-relaxed text-sm">
          While we strive for accuracy, insurance policies, laws, and regulations vary by state
          and change over time. Nothing on this site should be used as a substitute for consulting
          with a licensed attorney, Public Adjuster, or other qualified professional regarding
          your specific claim or legal situation.
        </p>

        {/* 3. Public Adjuster Services */}
        <h2 className="text-xl font-bold text-[#1F3964] mt-8 mb-3">3. Public Adjuster Services</h2>
        <p className="text-gray-700 leading-relaxed text-sm mb-3">
          Leland Coontz III is licensed as a Public Adjuster in the State of California
          (License #2B53445). Any engagement for Public Adjuster services requires a separate,
          written engagement agreement between you and Leland Coontz III.
        </p>
        <ul className="list-disc list-inside text-gray-700 text-sm leading-relaxed space-y-1">
          <li>Public Adjuster fees are on a contingency basis — a percentage of the claim settlement — as specified in the engagement agreement.</li>
          <li>Direct Public Adjuster services are available only for claims in California.</li>
          <li>For claims in other states, we may refer you to a vetted, licensed Public Adjuster in your jurisdiction at no additional cost to you.</li>
          <li>Use of this website does not create a Public Adjuster-client relationship.</li>
        </ul>

        {/* 4. Interactive Tools */}
        <h2 className="text-xl font-bold text-[#1F3964] mt-8 mb-3">4. Interactive Tools</h2>
        <p className="text-gray-700 leading-relaxed text-sm mb-3">
          Our interactive tools, including the personal property inventory tool, are provided
          <strong> &quot;as is&quot;</strong> for your convenience.
        </p>
        <ul className="list-disc list-inside text-gray-700 text-sm leading-relaxed space-y-1">
          <li>Data entered into the inventory tool is stored locally in your browser (localStorage) and is not transmitted to our servers.</li>
          <li>We are not responsible for data loss due to browser cache clearing, device changes, or other technical issues.</li>
          <li>We recommend exporting and saving your inventory data regularly using the export features provided.</li>
          <li>The tools are intended as organizational aids and do not guarantee any specific claim outcome.</li>
        </ul>

        {/* 5. Paid Guides & Digital Products */}
        <h2 className="text-xl font-bold text-[#1F3964] mt-8 mb-3">5. Paid Guides & Digital Products</h2>
        <p className="text-gray-700 leading-relaxed text-sm mb-3">
          We offer digital guides and educational products for purchase through our website.
        </p>
        <ul className="list-disc list-inside text-gray-700 text-sm leading-relaxed space-y-1">
          <li><strong>Refund Policy:</strong> We offer a 30-day refund policy on all digital guide purchases. If you are not satisfied, contact us within 30 days of purchase for a full refund.</li>
          <li><strong>Delivery:</strong> All digital products are delivered electronically. You will receive access immediately upon successful payment.</li>
          <li><strong>License:</strong> Digital products are licensed for personal, non-commercial use only. You may not redistribute, resell, or share purchased content without written permission.</li>
        </ul>

        {/* 6. Amazon Affiliate Disclosure */}
        <h2 className="text-xl font-bold text-[#1F3964] mt-8 mb-3">6. Amazon Affiliate Disclosure</h2>
        <p className="text-gray-700 leading-relaxed text-sm">
          InsuranceClaimsInfo.com is a participant in the Amazon Services LLC Associates Program,
          an affiliate advertising program designed to provide a means for sites to earn
          advertising fees by advertising and linking to Amazon.com. When you click on Amazon
          product links on our site and make a qualifying purchase, we may earn a small commission
          at no additional cost to you. Our recommendations are based on our genuine assessment
          of the products&apos; usefulness to insurance claimants.
        </p>

        {/* 7. Intellectual Property */}
        <h2 className="text-xl font-bold text-[#1F3964] mt-8 mb-3">7. Intellectual Property</h2>
        <p className="text-gray-700 leading-relaxed text-sm">
          All content on this website — including text, graphics, logos, images, guides, tools,
          and software — is the property of InsuranceClaimsInfo.com and Leland Coontz III and is
          protected by United States copyright law. You may not reproduce, distribute, modify, or
          create derivative works from any content on this site without prior written permission,
          except for personal, non-commercial use such as printing a page for your own reference.
        </p>

        {/* 8. Limitation of Liability */}
        <h2 className="text-xl font-bold text-[#1F3964] mt-8 mb-3">8. Limitation of Liability</h2>
        <p className="text-gray-700 leading-relaxed text-sm">
          To the fullest extent permitted by law, InsuranceClaimsInfo.com, Leland Coontz III,
          and any affiliated parties shall not be liable for any indirect, incidental, special,
          consequential, or punitive damages arising out of or related to your use of the Site,
          its content, tools, or services. This includes, without limitation, damages for loss of
          data, loss of profits, or business interruption, even if we have been advised of the
          possibility of such damages. Our total liability for any claim arising from your use of
          the Site shall not exceed the amount you paid us, if any, in the twelve months preceding
          the claim.
        </p>

        {/* 9. Governing Law */}
        <h2 className="text-xl font-bold text-[#1F3964] mt-8 mb-3">9. Governing Law</h2>
        <p className="text-gray-700 leading-relaxed text-sm">
          These Terms shall be governed by and construed in accordance with the laws of the State
          of California, without regard to its conflict of law provisions. Any disputes arising
          from these Terms or your use of the Site shall be resolved in the state or federal courts
          located in California.
        </p>

        {/* 10. Contact */}
        <h2 className="text-xl font-bold text-[#1F3964] mt-8 mb-3">10. Contact</h2>
        <p className="text-gray-700 leading-relaxed text-sm">
          If you have any questions about these Terms of Service, please reach out through our{' '}
          <Link href="/contact" className="text-[#2E74B5] underline hover:text-[#1F3964]">
            contact page
          </Link>.
        </p>

        {/* Back to Home */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/"
            className="text-[#2E74B5] underline hover:text-[#1F3964] text-sm font-medium"
          >
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </>
  )
}
