import { MetadataRoute } from 'next';
import { AITool } from '@/types/aiTool';

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

  // Get AI tools dynamically - using empty array if module not found
  let toolUrls: string[] = [];
  try {
    // Using dynamic import with type assertion
    const module = await import('@/data/aiTools');
    const aiTools = module.aiTools as AITool[] | undefined;
    if (aiTools && Array.isArray(aiTools)) {
      toolUrls = aiTools.map(tool => `/ai-tools/${tool.id}`);
    }
  } catch (error) {
    console.warn('Could not load aiTools for sitemap, using empty array');
  }

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