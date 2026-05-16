import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  // TEMPORARY: Blocking all crawlers until site is finalized.
  // When ready to launch, change disallow to ['/api/', '/guides/success']
  // and uncomment the AI crawler rules and sitemap below.
  return {
    rules: [
      {
        userAgent: '*',
        disallow: '/',
      },
    ],
    // sitemap: 'https://insuranceclaimsinfo.com/sitemap.xml',
  }
}
