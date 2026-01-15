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
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: currentDate, changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/ai-tools`, lastModified: currentDate, changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: currentDate, changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/collections`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/research-news`, lastModified: currentDate, changeFrequency: 'daily', priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/pro`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/partners`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/careers`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/contact`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/press`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/privacy`, lastModified: currentDate, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: currentDate, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/cookies`, lastModified: currentDate, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/security`, lastModified: currentDate, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/compliance`, lastModified: currentDate, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/dashboard`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.3 },
  ];

  try {
    // Get blog posts dynamically
    const { blogPosts } = await import('@/data/blogPosts');
    const blogUrls: MetadataRoute.Sitemap = blogPosts.map(post => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'weekly',
      priority: 0.8,
    }));

    // Get AI tools dynamically
    const { aiTools } = await import('@/data/aiTools');
    const toolUrls: MetadataRoute.Sitemap = aiTools.map((tool: AITool) => ({
      url: `${baseUrl}/ai-tools/${tool.id}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.7,
    }));

    // Get playbooks dynamically
    const { playbooks } = await import('@/data/playbooks');
    const playbookUrls: MetadataRoute.Sitemap = playbooks.map((playbook) => ({
      url: `${baseUrl}/playbooks/${playbook.slug}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.8,
    }));

    // Combine all URLs
    return [...staticPages, ...blogUrls, ...toolUrls, ...playbookUrls];
  } catch (error) {
    console.warn('Warning: Could not load dynamic content for sitemap:', error);
    // Return static pages only if dynamic content fails
    return staticPages;
  }
}