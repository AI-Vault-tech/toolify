import { blogPosts, BlogPost } from '@/data/blogPosts';

export async function getArticles(): Promise<BlogPost[]> {
  // Simulate async operation
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(blogPosts);
    }, 100);
  });
}

export async function getArticleBySlug(slug: string): Promise<BlogPost | undefined> {
  // Simulate async operation
  return new Promise(resolve => {
    setTimeout(() => {
      const article = blogPosts.find(post => post.slug === slug);
      resolve(article);
    }, 100);
  });
}