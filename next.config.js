/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  redirects: async () => [
    {
      source: '/resources/pending-claim-policyholder-dies',
      destination: '/resources/policyholder-death-coverage',
      permanent: true,
    },
    {
      source: '/resources/medicaid-estate-recovery-insurance',
      destination: '/resources/ownership-and-authority-in-claims',
      permanent: true,
    },
    {
      source: '/resources/life-estate-remainder-insurance',
      destination: '/resources/ownership-and-authority-in-claims',
      permanent: true,
    },
    {
      source: '/resources/community-property-insurance-proceeds',
      destination: '/resources/divorce-separation-insurance-claims',
      permanent: true,
    },
    {
      source: '/resources/conservatorship-insurance-claims',
      destination: '/resources/power-of-attorney-insurance-claims',
      permanent: true,
    },
    {
      source: '/resources/insurance-properties-probate',
      destination: '/resources/ownership-and-authority-in-claims',
      permanent: true,
    },
    {
      source: '/resources/insuring-inherited-property',
      destination: '/resources/ownership-and-authority-in-claims',
      permanent: true,
    },
    {
      source: '/resources/trust-owned-property-insurance',
      destination: '/resources/property-held-in-trust-coverage',
      permanent: true,
    },
  ],
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      ],
    },
    {
      source: '/data/:path*',
      headers: [
        { key: 'Cache-Control', value: 'public, max-age=3600, stale-while-revalidate=86400' },
      ],
    },
    {
      source: '/robots.txt',
      headers: [
        { key: 'Cache-Control', value: 'public, max-age=86400' },
      ],
    },
    {
      source: '/llms.txt',
      headers: [
        { key: 'Cache-Control', value: 'public, max-age=86400' },
      ],
    },
  ],
}

module.exports = nextConfig
