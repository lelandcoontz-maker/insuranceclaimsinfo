import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/guides/success'],
      },
    ],
    sitemap: 'https://insuranceclaimsinfo.com/sitemap.xml',
  }
}
