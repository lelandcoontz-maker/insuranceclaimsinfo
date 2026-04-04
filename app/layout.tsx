import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { JsonLd } from '@/components/seo/JsonLd'
import { GoogleAnalytics } from '@/components/seo/GoogleAnalytics'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  metadataBase: new URL('https://insuranceclaimsinfo.com'),
  title: {
    default: 'InsuranceClaimsInfo.com — California Insurance Claim Help & Resources',
    template: '%s | InsuranceClaimsInfo.com',
  },
  description:
    'Free tools and expert guides for California insurance claimants. Interactive personal property inventory, policy interpretation, claim negotiation strategies, and licensed Public Adjuster services.',
  keywords: [
    'California insurance claim', 'Public Adjuster California', 'personal property inventory',
    'insurance claim help', 'CA Fair Plan', 'contents claim', 'additional living expenses',
    'fire insurance claim', 'wildfire insurance', 'insurance appraisal',
  ],
  verification: {
    google: 'OJaLyOK2b1U2q4VBGlpVDFSLSTAp9fKnZ4pRAsJLZkQ',
  },
  openGraph: {
    siteName: 'InsuranceClaimsInfo.com',
    type: 'website',
    locale: 'en_US',
    url: 'https://insuranceclaimsinfo.com',
    title: 'InsuranceClaimsInfo.com — California Insurance Claim Help & Resources',
    description: 'Free tools and expert guides for California insurance claimants. Interactive personal property inventory, policy interpretation, claim negotiation strategies, and licensed Public Adjuster services.',
  },
  twitter: {
    card: 'summary',
    title: 'InsuranceClaimsInfo.com — California Insurance Claim Help',
    description: 'Free tools and expert guides for California insurance claimants.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <GoogleAnalytics />
      <body className="flex flex-col min-h-screen">
        <JsonLd data={{
          '@context': 'https://schema.org',
          '@type': 'ProfessionalService',
          name: 'InsuranceClaimsInfo.com — Leland Coontz III, Public Adjuster',
          url: 'https://insuranceclaimsinfo.com',
          description: 'Licensed California Public Adjuster providing free insurance claim resources, tools, and professional claims handling services.',
          founder: {
            '@type': 'Person',
            name: 'Leland Coontz III',
            jobTitle: 'Licensed Public Adjuster',
          },
          areaServed: {
            '@type': 'State',
            name: 'California',
          },
          serviceType: ['Public Adjuster', 'Insurance Claim Consulting', 'Insurance Appraisal'],
          hasCredential: {
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: 'Public Adjuster License',
            recognizedBy: {
              '@type': 'GovernmentOrganization',
              name: 'California Department of Insurance',
            },
          },
          priceRange: 'No Recovery, No Fee',
          knowsAbout: ['Insurance Claims', 'Property Damage', 'Wildfire Claims', 'California Insurance Law', 'Xactimate', 'Insurance Appraisal'],
        }} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
