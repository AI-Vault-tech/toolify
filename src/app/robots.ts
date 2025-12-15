import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Allow all user agents (search engines)
        userAgent: '*',
        // Allow crawling of all public pages
        allow: '/',
        // Only disallow private/admin areas
        disallow: [
          '/admin/',
          '/api/',
          '/dashboard/',
          '/_next/',
          '/_vercel/',
          '/auth/',
          '/private/'
        ],
        // Reasonable crawl delay to prevent server overload
        crawlDelay: 2,
      },
    ],
    // Sitemap locations
    sitemap: [
      'https://toolify-theta.vercel.app/sitemap.xml',
      'https://toolify-theta.vercel.app/sitemap-ai-tools.xml',
      'https://toolify-theta.vercel.app/sitemap-blog.xml',
    ],
    // Host directive (primary domain)
    host: 'https://toolify-theta.vercel.app',
  };
}