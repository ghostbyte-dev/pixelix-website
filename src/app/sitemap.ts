import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://veritate.at',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://veritate.at/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://veritate.at/music',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
        url: 'https://veritate.at/music/idyllic',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.5,
      },
      {
        url: 'https://veritate.at/music/a-brand-new-day',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.5,
      },
    {
        url: 'https://veritate.at/photos',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://veritate.at/photos/rhiz-2024',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.5,
      },
      {
        url: 'https://veritate.at/photos/loop-2025',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.5,
      },
  ]
}