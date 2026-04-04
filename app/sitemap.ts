import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://insuranceclaimsinfo.com'

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/inventory`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/resources`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/regulations`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/insurer-tactics`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/faq`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/types-of-claims`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/other-claims`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/free-guides`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/guides`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/books`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/cdi-notices`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ]

  const resourceSlugs = [
    'california-fair-claims',
    'policy-interpretation',
    'claims-process',
    'contents-claims',
    'ale-frv',
    'appraisal',
    'negotiation',
    'bad-faith',
    'xactimate',
    'public-adjuster',
    'cdi-complaint',
    'exclusions',
    'acv-rcv',
    'proof-of-loss',
    'specialty-items',
    'mold-losses',
    'duties-after-loss',
    'ordinance-law',
    'matching',
    'coverage-disputes',
    'declarations-page',
    'vandalism-claims',
    'wildfire-guide',
    'scope-of-loss',
    'equitable-tolling',
    'debris-removal',
    'dealing-with-adjuster',
    'examination-under-oath',
    'roof-damage',
    'public-adjuster-fees',
    'total-loss',
    'california-insurance-crisis',
    'california-fair-plan',
    'smoke-damage-claims',
    'fire-claim-denied',
    'force-placed-insurance',
    'first-offer-lowball',
    'sb49-contents-rule',
    'underinsured-after-wildfire',
  ]

  const resourceRoutes: MetadataRoute.Sitemap = resourceSlugs.map((slug) => ({
    url: `${baseUrl}/resources/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  const typesOfClaimsSlugs = [
    'fire',
    'smoke',
    'water',
    'vandalism',
    'vehicle-impact',
    'sewage',
    'flood',
    'mold',
  ]

  const typesOfClaimsRoutes: MetadataRoute.Sitemap = typesOfClaimsSlugs.map((slug) => ({
    url: `${baseUrl}/types-of-claims/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  const otherClaimsSlugs = [
    'business-interruption',
    'cyber-theft',
    'employee-theft',
    'cargo',
    'auto-damage',
    'personal-injury',
    'workers-comp',
    'medical',
  ]

  const otherClaimsRoutes: MetadataRoute.Sitemap = otherClaimsSlugs.map((slug) => ({
    url: `${baseUrl}/other-claims/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.5,
  }))

  return [...staticRoutes, ...resourceRoutes, ...typesOfClaimsRoutes, ...otherClaimsRoutes]
}
