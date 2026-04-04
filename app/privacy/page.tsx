import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy policy for InsuranceClaimsInfo.com. Learn how we collect, use, and protect your personal information when you use our California insurance claim resources and tools.',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Navy Header */}
      <section className="bg-[#1F3964] text-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-blue-200 text-sm">Last updated: April 2026</p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-12">
        <p className="text-gray-700 leading-relaxed text-sm mb-8">
          InsuranceClaimsInfo.com (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is operated by
          Leland Coontz III, a California Licensed Public Adjuster (License #2B53445). This Privacy
          Policy explains how we collect, use, disclose, and safeguard your information when you
          visit our website and use our services.
        </p>

        {/* 1. Information We Collect */}
        <h2 className="text-xl font-bold text-[#1F3964] mt-8 mb-3">1. Information We Collect</h2>
        <p className="text-gray-700 leading-relaxed text-sm mb-3">
          We collect information that you voluntarily provide to us, including:
        </p>
        <ul className="list-disc list-inside text-gray-700 text-sm leading-relaxed space-y-1 mb-3">
          <li><strong>Contact form data:</strong> name, email address, phone number, state, claim type, and message content submitted through our lead/contact form.</li>
          <li><strong>Inventory tool usage data:</strong> information you enter into our interactive personal property inventory tool, which is stored locally in your browser.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed text-sm">
          We also automatically collect certain technical information when you visit our site,
          including your IP address, browser type, device information, pages visited, and
          referring URLs through our analytics services.
        </p>

        {/* 2. How We Use Your Information */}
        <h2 className="text-xl font-bold text-[#1F3964] mt-8 mb-3">2. How We Use Your Information</h2>
        <p className="text-gray-700 leading-relaxed text-sm mb-3">
          We use the information we collect to:
        </p>
        <ul className="list-disc list-inside text-gray-700 text-sm leading-relaxed space-y-1">
          <li>Respond to your inquiries and consultation requests</li>
          <li>Provide insurance claim assistance and Public Adjuster services</li>
          <li>Improve our website, tools, and educational content</li>
          <li>Communicate with you about your claim or our services</li>
          <li>Comply with legal obligations</li>
        </ul>

        {/* 3. Information Sharing */}
        <h2 className="text-xl font-bold text-[#1F3964] mt-8 mb-3">3. Information Sharing</h2>
        <p className="text-gray-700 leading-relaxed text-sm mb-3">
          <strong>We do not sell your personal information.</strong> We will never sell, rent, or
          trade your personal data to third parties for marketing purposes.
        </p>
        <p className="text-gray-700 leading-relaxed text-sm">
          If your claim is located outside of California, we may — with your consent — share your
          contact information with a vetted, licensed Public Adjuster in your state through our
          referral network to ensure you receive appropriate assistance. We will always inform you
          before making any such referral.
        </p>

        {/* 4. Cookies & Analytics */}
        <h2 className="text-xl font-bold text-[#1F3964] mt-8 mb-3">4. Cookies & Analytics</h2>
        <p className="text-gray-700 leading-relaxed text-sm mb-3">
          We use Google Analytics to understand how visitors interact with our website. This helps
          us improve our content and user experience. Google Analytics uses cookies to collect
          anonymous usage data such as pages visited, time on site, and general geographic location.
        </p>
        <p className="text-gray-700 leading-relaxed text-sm">
          We do not use advertising tracking cookies or retargeting pixels. We do not run third-party
          ads on this site.
        </p>

        {/* 5. Third-Party Services */}
        <h2 className="text-xl font-bold text-[#1F3964] mt-8 mb-3">5. Third-Party Services</h2>
        <p className="text-gray-700 leading-relaxed text-sm mb-3">
          Our website integrates with the following third-party services:
        </p>
        <ul className="list-disc list-inside text-gray-700 text-sm leading-relaxed space-y-1">
          <li><strong>Stripe:</strong> We use Stripe to process payments for digital guides and products. Your payment information is handled directly by Stripe and is never stored on our servers. Stripe&apos;s privacy policy governs their use of your data.</li>
          <li><strong>Amazon Associates:</strong> We participate in the Amazon Associates affiliate program. Links to books and products on Amazon may earn us a commission from qualifying purchases. Amazon&apos;s privacy policy governs their handling of your data when you visit their site.</li>
        </ul>

        {/* 6. Data Security */}
        <h2 className="text-xl font-bold text-[#1F3964] mt-8 mb-3">6. Data Security</h2>
        <p className="text-gray-700 leading-relaxed text-sm">
          We implement reasonable administrative, technical, and physical security measures to
          protect your personal information from unauthorized access, disclosure, alteration, and
          destruction. Our website uses HTTPS encryption for all data transmission. However, no
          method of transmission over the internet or electronic storage is 100% secure, and we
          cannot guarantee absolute security.
        </p>

        {/* 7. Your Rights */}
        <h2 className="text-xl font-bold text-[#1F3964] mt-8 mb-3">7. Your Rights</h2>
        <p className="text-gray-700 leading-relaxed text-sm mb-3">
          If you are a California resident, you have the following rights under the California
          Consumer Privacy Act (CCPA):
        </p>
        <ul className="list-disc list-inside text-gray-700 text-sm leading-relaxed space-y-1">
          <li><strong>Right to Know:</strong> You may request details about the personal information we have collected about you and how it has been used.</li>
          <li><strong>Right to Delete:</strong> You may request that we delete the personal information we have collected from you, subject to certain exceptions.</li>
          <li><strong>Right to Opt-Out:</strong> You have the right to opt out of the sale of your personal information. As noted above, we do not sell personal information.</li>
          <li><strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising any of your CCPA rights.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed text-sm mt-3">
          To exercise any of these rights, please contact us through our{' '}
          <Link href="/contact" className="text-[#2E74B5] underline hover:text-[#1F3964]">
            contact page
          </Link>.
        </p>

        {/* 8. Children's Privacy */}
        <h2 className="text-xl font-bold text-[#1F3964] mt-8 mb-3">8. Children&apos;s Privacy</h2>
        <p className="text-gray-700 leading-relaxed text-sm">
          Our website and services are not directed at children under the age of 13. We do not
          knowingly collect personal information from children under 13. If we become aware that
          we have inadvertently collected personal information from a child under 13, we will take
          steps to delete that information promptly.
        </p>

        {/* 9. Changes to This Policy */}
        <h2 className="text-xl font-bold text-[#1F3964] mt-8 mb-3">9. Changes to This Policy</h2>
        <p className="text-gray-700 leading-relaxed text-sm">
          We may update this Privacy Policy from time to time to reflect changes in our practices
          or for legal, operational, or regulatory reasons. When we make changes, we will update
          the &quot;Last updated&quot; date at the top of this page. We encourage you to review this
          policy periodically.
        </p>

        {/* 10. Contact Us */}
        <h2 className="text-xl font-bold text-[#1F3964] mt-8 mb-3">10. Contact Us</h2>
        <p className="text-gray-700 leading-relaxed text-sm">
          If you have any questions about this Privacy Policy or wish to exercise your privacy
          rights, please reach out through our{' '}
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
