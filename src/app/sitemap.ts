import { MetadataRoute } from 'next';
import { AITool } from '@/types/aiTool';

type ChangeFrequency = 'daily' | 'weekly' | 'monthly' | 'yearly' | 'always' | 'hourly' | 'never';

interface SitemapEntry {
  url: string;
  lastModified?: Date | string;
  changeFrequency?: ChangeFrequency;
  priority?: number;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://toolify-theta.vercel.app';
  const currentDate = new Date();
  
  // Static pages with priority and change frequency
  const staticPages: SitemapEntry[] = [
    { url: '/', lastModified: currentDate, changeFrequency: 'daily', priority: 1.0 },
    { url: '/ai-tools', lastModified: currentDate, changeFrequency: 'daily', priority: 0.9 },
    { url: '/blog', lastModified: currentDate, changeFrequency: 'daily', priority: 0.9 },
    { url: '/collections', lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: '/research-news', lastModified: currentDate, changeFrequency: 'daily', priority: 0.8 },
    { url: '/about', lastModified: currentDate, changeFrequency: 'monthly', priority: 0.7 },
    { url: '/pro', lastModified: currentDate, changeFrequency: 'monthly', priority: 0.7 },
    { url: '/partners', lastModified: currentDate, changeFrequency: 'monthly', priority: 0.6 },
    { url: '/careers', lastModified: currentDate, changeFrequency: 'monthly', priority: 0.5 },
    { url: '/contact', lastModified: currentDate, changeFrequency: 'monthly', priority: 0.5 },
    { url: '/press', lastModified: currentDate, changeFrequency: 'monthly', priority: 0.5 },
    { url: '/privacy', lastModified: currentDate, changeFrequency: 'yearly', priority: 0.3 },
    { url: '/terms', lastModified: currentDate, changeFrequency: 'yearly', priority: 0.3 },
    { url: '/cookies', lastModified: currentDate, changeFrequency: 'yearly', priority: 0.3 },
    { url: '/security', lastModified: currentDate, changeFrequency: 'yearly', priority: 0.3 },
    { url: '/compliance', lastModified: currentDate, changeFrequency: 'yearly', priority: 0.3 },
    { url: '/dashboard', lastModified: currentDate, changeFrequency: 'weekly', priority: 0.3 },
  ];

  // Get blog posts dynamically
  const { blogPosts } = await import('@/data/blogPosts');
  const blogUrls: SitemapEntry[] = blogPosts.map(post => ({
    url: `/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Get AI tools dynamically - using empty array if module not found
  let toolUrls: SitemapEntry[] = [];
  try {
    const module = await import('@/data/aiTools');
    const aiTools = module.aiTools as AITool[] | undefined;
    if (aiTools && Array.isArray(aiTools)) {
      toolUrls = aiTools.map(tool => ({
        url: `/ai-tools/${tool.id}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      }));
    }
  } catch (error) {
    console.warn('Failed to load AI tools for sitemap:', error);
  }

  // Generate sitemap entries with proper URLs
  const generateEntries = (items: SitemapEntry[]): MetadataRoute.Sitemap => {
    return items.map(({ url, lastModified, changeFrequency, priority }) => ({
      url: `${baseUrl}${url}`,
      lastModified: lastModified,
      changeFrequency,
      priority,
    }));
  };

  // Combine all URLs
  const allUrls = [
    ...staticPages,
    ...blogUrls,
    ...toolUrls,
  ];

  return generateEntries(allUrls);

  return allUrls;
}