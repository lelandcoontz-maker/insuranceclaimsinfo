import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
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
  openGraph: {
    siteName: 'InsuranceClaimsInfo.com',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
