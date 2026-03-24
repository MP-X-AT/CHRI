import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.pichlhoefer.eu'

  return [
    {
      url: `${baseUrl}/de`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/de/publikationen`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/en/publikationen`,
      lastModified: new Date(),
    },
  ]
}