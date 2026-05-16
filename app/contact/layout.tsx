import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us — Free Claim Review',
  description:
    'Request a free insurance claim review from a California Licensed Public Adjuster. Tell us about your claim and we\'ll reach out within one business day.',
  alternates: { canonical: '/contact' },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
