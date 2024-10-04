import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://constructiv.ai',
      lastModified: new Date(),
    },
    {
      url: 'https://constructiv.ai/about',
      lastModified: new Date(),
    },
    {
      url: 'https://constructiv.ai/services',
      lastModified: new Date(),
    },
    // Add more URLs as needed
  ];
}