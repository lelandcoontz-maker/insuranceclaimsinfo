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
    {
      source: '/resources/white-waiver-insurance-settlement-confidentiality',
      destination: '/resources/white-waiver-settlement-confidentiality',
      permanent: true,
    },
    {
      source: '/resources/three-trade-rule-overhead-profit',
      destination: '/resources/overhead-and-profit',
      permanent: true,
    },
    // Tier 1 cannibalization cleanup (2026-06-24): 13 near-duplicate merges
    {
      source: '/resources/efficient-proximate-cause',
      destination: '/resources/efficient-proximate-cause-doctrine',
      permanent: true,
    },
    {
      source: '/resources/tenant-landlord-claims',
      destination: '/resources/landlord-vs-tenant-claims',
      permanent: true,
    },
    {
      source: '/resources/virtual-inspections-remote-adjusting',
      destination: '/resources/desk-adjusting-remote-estimates',
      permanent: true,
    },
    {
      source: '/resources/ai-claims-handling-policyholder-rights',
      destination: '/resources/insurance-ai-automated-claims',
      permanent: true,
    },
    {
      source: '/resources/white-waiver',
      destination: '/resources/white-waiver-settlement-confidentiality',
      permanent: true,
    },
    {
      source: '/resources/landlord-drug-contamination-claims',
      destination: '/resources/drug-contamination-landlord-claims',
      permanent: true,
    },
    {
      source: '/resources/pool-spa-claims',
      destination: '/resources/swimming-pool-damage',
      permanent: true,
    },
    {
      source: '/resources/labor-depreciation',
      destination: '/resources/labor-depreciation-debate',
      permanent: true,
    },
    {
      source: '/resources/subrogation-insurance-claims',
      destination: '/resources/subrogation',
      permanent: true,
    },
    {
      source: '/resources/reservation-of-rights',
      destination: '/resources/reservation-of-rights-letter',
      permanent: true,
    },
    {
      source: '/resources/cdi-complaint',
      destination: '/resources/file-cdi-complaint-guide',
      permanent: true,
    },
    {
      source: '/resources/tax-consequences-insurance-settlements',
      destination: '/resources/tax-implications-insurance-settlements',
      permanent: true,
    },
    {
      source: '/resources/social-media-claims',
      destination: '/resources/social-media-insurance-claims',
      permanent: true,
    },
    // 2026-06-26: rename state-farm-appraisal-trap to generic appraisal-trap-tactics
    // to remove implied factual assertion against a named carrier
    {
      source: '/resources/state-farm-appraisal-trap',
      destination: '/resources/appraisal-trap-tactics',
      permanent: true,
    },
    // 2026-06-28: defeating-carrier-engineers consolidated into biased-insurance-experts
    // (audit honorable-mention straight-duplicate pair; stub already self-identified as consolidated)
    {
      source: '/resources/defeating-carrier-engineers',
      destination: '/resources/biased-insurance-experts',
      permanent: true,
    },
    // 2026-06-29: adjuster-compensation consolidated into how-insurance-adjusters-are-paid
    // (Tier 3 audit honorable-mention; how-paid was a superset covering training + pay
    // + authority + metrics; unique CA § 15027/§ 15027.5 disclosure section folded in)
    {
      source: '/resources/adjuster-compensation',
      destination: '/resources/how-insurance-adjusters-are-paid',
      permanent: true,
    },
    // 2026-06-29: how-to-read-insurance-estimate consolidated into how-to-read-xactimate-estimate
    // (Tier 3 audit honorable-mention; 320-line generic-titled article was a thinner duplicate
    // of the 1075-line Xactimate-named comprehensive guide)
    {
      source: '/resources/how-to-read-insurance-estimate',
      destination: '/resources/how-to-read-xactimate-estimate',
      permanent: true,
    },
    // 2026-06-29: your-rights-short-version consolidated into policyholder-rights
    // (Tier 3; the 'Short Version' was actually longer than the destination article;
    // unique sections — Prejudice Requirement, What-to-Do-When-Violated, Quick Reference —
    // folded into the destination before deletion)
    {
      source: '/resources/your-rights-short-version',
      destination: '/resources/policyholder-rights',
      permanent: true,
    },
    // 2026-06-29: insurance-checks consolidated into cashing-insurance-checks
    // (Tier 3; both general 'what to do with the check' articles; unique mortgage-co-payee,
    // ACV-vs-RCV, supplemental, wrong-amount, and 3-option restrictive-language sections
    // folded into the destination before deletion)
    {
      source: '/resources/insurance-checks',
      destination: '/resources/cashing-insurance-checks',
      permanent: true,
    },
    // 2026-06-29: insurer-reformation-policy consolidated into policy-reformation
    // (Tier 3 FINAL cluster; defensive 'carrier tries to rewrite after loss' content
    // folded into the general reformation article as a 'When the Carrier Uses
    // Reformation Against You' section preserving the 4 common scenarios, heightened
    // burden, agent-file approach, defense arguments, and practical steps)
    {
      source: '/resources/insurer-reformation-policy',
      destination: '/resources/policy-reformation',
      permanent: true,
    },
    // 2026-06-27: Tier 2 cannibalization cleanup
    // Cluster 1 — Appraisal triple-merge
    {
      source: '/resources/appraisal-practitioner-guide',
      destination: '/resources/appraisal',
      permanent: true,
    },
    {
      source: '/resources/california-appraisal-case-law',
      destination: '/resources/appraisal',
      permanent: true,
    },
    // Cluster 4 — FAIR Plan merge
    {
      source: '/resources/fair-plan-claims-limitations',
      destination: '/resources/california-fair-plan',
      permanent: true,
    },
    // Cluster 8 — Mold merge
    {
      source: '/resources/mold-coverage-paradox',
      destination: '/resources/mold-losses',
      permanent: true,
    },
    // Cluster 9 — Bad faith merge
    {
      source: '/resources/bad-faith-explained',
      destination: '/resources/bad-faith',
      permanent: true,
    },
    // Cluster 11 — Equitable tolling merge
    {
      source: '/resources/equitable-tolling-nuances',
      destination: '/resources/equitable-tolling',
      permanent: true,
    },
    // Cluster 14 — Open-vs-named perils merge (contents-coverage-gaps kept distinct)
    {
      source: '/resources/named-perils-vs-open-perils',
      destination: '/resources/open-perils-vs-named-perils',
      permanent: true,
    },
    // Cluster 15 — O&P triple-merge
    {
      source: '/resources/xactimate-overhead-profit',
      destination: '/resources/overhead-and-profit',
      permanent: true,
    },
    {
      source: '/resources/three-trade-rule',
      destination: '/resources/overhead-and-profit',
      permanent: true,
    },
    // Cluster 7 — CIGA triple-merge
    {
      source: '/resources/insurer-insolvency-guaranty-fund',
      destination: '/resources/insurer-insolvency-ciga',
      permanent: true,
    },
    {
      source: '/resources/insurer-goes-out-of-business',
      destination: '/resources/insurer-insolvency-ciga',
      permanent: true,
    },
    // Cluster 2 — ACV/depreciation triple-merge
    {
      source: '/resources/broad-evidence-rule-acv',
      destination: '/resources/acv-rcv',
      permanent: true,
    },
    {
      source: '/resources/depreciation-schedules-useful-life',
      destination: '/resources/acv-rcv',
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
