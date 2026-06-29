import type { Metadata } from 'next'
import { Inter, Lora } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { SiteNotice } from '@/components/layout/SiteNotice'
import { JsonLd } from '@/components/seo/JsonLd'
import { GoogleAnalytics } from '@/components/seo/GoogleAnalytics'
import { ClickAnalytics } from '@/components/analytics/ClickAnalytics'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const lora = Lora({ subsets: ['latin'], variable: '--font-lora', weight: ['400', '500', '600', '700'] })

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
    'insurance claim help', 'CA FAIR Plan', 'contents claim', 'additional living expenses',
    'fire insurance claim', 'wildfire insurance', 'insurance appraisal',
  ],
  verification: {
    google: 'OJaLyOK2b1U2q4VBGlpVDFSLSTAp9fKnZ4pRAsJLZkQ',
  },
  alternates: { canonical: '/' },
  openGraph: {
    siteName: 'InsuranceClaimsInfo.com',
    type: 'website',
    locale: 'en_US',
    url: 'https://insuranceclaimsinfo.com',
    title: 'InsuranceClaimsInfo.com — California Insurance Claim Help & Resources',
    description: 'Free tools and expert guides for California insurance claimants. Interactive personal property inventory, policy interpretation, claim negotiation strategies, and licensed Public Adjuster services.',
    images: [
      {
        url: 'https://insuranceclaimsinfo.com/images/leland-coontz-headshot.png',
        alt: 'Leland Coontz III, California Licensed Public Adjuster (#2B53445)',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'InsuranceClaimsInfo.com — California Insurance Claim Help',
    description: 'Free tools and expert guides for California insurance claimants.',
    images: ['https://insuranceclaimsinfo.com/images/leland-coontz-headshot.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <GoogleAnalytics />
      <body className="flex flex-col min-h-screen">
        <JsonLd data={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'InsuranceClaimsInfo.com',
          url: 'https://insuranceclaimsinfo.com',
          description: 'Free encyclopedia of California property insurance claims — 500+ articles covering every stage from first notice of loss to final settlement.',
          publisher: {
            '@type': 'Person',
            name: 'Leland Coontz III',
            jobTitle: 'Licensed Public Adjuster',
            url: 'https://insuranceclaimsinfo.com/about',
          },
          potentialAction: {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: 'https://insuranceclaimsinfo.com/resources?q={search_term_string}',
            },
            'query-input': 'required name=search_term_string',
          },
        }} />
        <JsonLd data={{
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Leland Coontz III',
          jobTitle: 'Licensed Public Adjuster',
          url: 'https://insuranceclaimsinfo.com/about',
          sameAs: 'https://insuranceclaimsinfo.com/about',
          hasCredential: {
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: 'Public Adjuster License',
            name: 'California Public Adjuster License #2B53445',
          },
          knowsAbout: [
            'Insurance Claims', 'Property Damage', 'California Insurance Law',
            'Xactimate Estimating', 'Insurance Appraisal', 'Bad Faith Claims',
          ],
        }} />
        <JsonLd data={{
          '@context': 'https://schema.org',
          '@type': 'ProfessionalService',
          name: 'Leland Coontz, Public Adjuster',
          alternateName: 'InsuranceClaimsInfo.com',
          url: 'https://insuranceclaimsinfo.com',
          description: 'Licensed California Public Adjuster representing policyholders, not insurance companies, in property damage claims. Services include claim filing, damage documentation, policy analysis, estimate preparation, negotiation with insurance companies, insurance appraisal and appraisal umpire services including court-appointed umpire, and insurance claim consulting. Specializing in fire, water, smoke, mold, and storm damage claims throughout Los Angeles County and Orange County. California Public Adjuster License #2B53445.',
          founder: {
            '@type': 'Person',
            name: 'Leland Coontz III',
            jobTitle: 'Licensed Public Adjuster',
          },
          areaServed: [
            { '@type': 'AdministrativeArea', name: 'Los Angeles County, California' },
            { '@type': 'AdministrativeArea', name: 'Orange County, California' },
          ],
          serviceType: [
            'Public Adjuster',
            'Insurance Claim Consulting',
            'Insurance Appraisal',
            'Appraisal Umpire Services',
            'Court-Appointed Umpire',
          ],
          hasCredential: {
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: 'Public Adjuster License',
            name: 'California Public Adjuster License #2B53445',
            recognizedBy: {
              '@type': 'GovernmentOrganization',
              name: 'California Department of Insurance',
            },
          },
          priceRange: 'No Recovery, No Fee',
          knowsAbout: [
            'Insurance Claims', 'Property Damage', 'Wildfire Claims',
            'California Insurance Law', 'Xactimate', 'Insurance Appraisal',
            'Appraisal Umpire', 'Contents Claims', 'Smoke Damage',
            'Water Damage', 'Mold Claims', 'Fire Insurance Claims',
          ],
        }} />
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-white focus:text-[#1F3964] focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold focus:shadow-lg">
          Skip to main content
        </a>
        <ClickAnalytics />
        <SiteNotice />
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
