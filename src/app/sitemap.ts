import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static pages
  const staticPages = [
    '',
    '/about',
    '/ai-tools',
    '/blog',
    '/careers',
    '/contact',
    '/cookies',
    '/privacy',
    '/terms',
    '/security',
    '/compliance',
    '/press',
    '/partners',
    '/pro',
    '/dashboard',
    '/collections',
    '/research-news'
  ];

  // Get blog posts dynamically
  const { blogPosts } = await import('@/data/blogPosts');
  const blogUrls = blogPosts.map(post => `/blog/${post.slug}`);

  // Get AI tools dynamically
  const { aiTools } = await import('@/data/aiTools');
  const toolUrls = aiTools.map(tool => `/ai-tools/${tool.id}`);

  // Combine all URLs
  const allUrls = [...staticPages, ...blogUrls, ...toolUrls];

  const currentDate = new Date();

  return allUrls.map(url => ({
    url: `https://toolify-theta.vercel.app${url}`,
    lastModified: currentDate,
    changeFrequency: url === '' ? 'daily' : 'weekly',
    priority: url === '' ? 1 : 0.8
  }));
}