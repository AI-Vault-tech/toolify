import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/', '/dashboard/'], // Adjust based on your needs
    },
    sitemap: 'https://toolify-theta.vercel.app/sitemap.xml',
  };
}