import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/api/test/'],
    },
    sitemap: 'https://toolify-theta.vercel.app/sitemap.xml',
  };
}