import { MetadataRoute } from 'next';
import { AITool } from '@/types/aiTool';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://toolify-theta.vercel.app';
  const currentDate = new Date();
  
  // Static pages with priority and change frequency
  const staticPages = [
    { url: '', priority: 1.0, changeFreq: 'daily' },
    { url: '/ai-tools', priority: 0.9, changeFreq: 'daily' },
    { url: '/blog', priority: 0.9, changeFreq: 'daily' },
    { url: '/collections', priority: 0.8, changeFreq: 'weekly' },
    { url: '/research-news', priority: 0.8, changeFreq: 'daily' },
    { url: '/about', priority: 0.7, changeFreq: 'monthly' },
    { url: '/pro', priority: 0.7, changeFreq: 'monthly' },
    { url: '/partners', priority: 0.6, changeFreq: 'monthly' },
    { url: '/careers', priority: 0.5, changeFreq: 'monthly' },
    { url: '/contact', priority: 0.5, changeFreq: 'monthly' },
    { url: '/press', priority: 0.5, changeFreq: 'monthly' },
    { url: '/privacy', priority: 0.3, changeFreq: 'yearly' },
    { url: '/terms', priority: 0.3, changeFreq: 'yearly' },
    { url: '/cookies', priority: 0.3, changeFreq: 'yearly' },
    { url: '/security', priority: 0.3, changeFreq: 'yearly' },
    { url: '/compliance', priority: 0.3, changeFreq: 'yearly' },
    { url: '/dashboard', priority: 0.3, changeFreq: 'weekly' },
  ];

  // Get blog posts dynamically
  const { blogPosts } = await import('@/data/blogPosts');
  const blogUrls = blogPosts.map(post => ({
    url: `/blog/${post.slug}`,
    lastModified: post.updatedDate ? new Date(post.updatedDate) : new Date(post.date),
    priority: 0.8,
    changeFreq: 'weekly' as const,
  }));

  // Get AI tools dynamically - using empty array if module not found
  let toolUrls = [];
  try {
    const module = await import('@/data/aiTools');
    const aiTools = module.aiTools as AITool[] | undefined;
    if (aiTools && Array.isArray(aiTools)) {
      toolUrls = aiTools.map(tool => ({
        url: `/ai-tools/${tool.id}`,
        lastModified: tool.updatedAt ? new Date(tool.updatedAt) : currentDate,
        priority: 0.7,
        changeFreq: 'weekly' as const,
      }));
    }
  } catch (error) {
    console.warn('Could not load aiTools for sitemap, using empty array');
  }

  // Generate sitemap entries
  const generateEntries = (items: Array<{
    url: string;
    lastModified?: Date;
    priority: number;
    changeFreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  }>) => {
    return items.map(({ url, lastModified, priority, changeFreq }) => ({
      url: `${baseUrl}${url}`,
      lastModified: lastModified || currentDate,
      priority,
      changeFrequency: changeFreq,
      alternates: {
        languages: {
          en: `${baseUrl}/en${url}`,
          // Add more languages as needed
        },
      },
    }));
  };

  // Combine all URLs
  const allUrls = [
    ...generateEntries(staticPages.map(p => ({
      ...p,
      lastModified: currentDate,
    }))),
    ...generateEntries(blogUrls),
    ...generateEntries(toolUrls),
  ];

  return allUrls;
}