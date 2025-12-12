import { notFound } from 'next/navigation';
import { blogPosts, BlogPost } from '@/data/blogPosts';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Metadata } from 'next';

// Add type for the params
type PageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post: BlogPost | undefined = blogPosts.find((item: BlogPost) => item.slug === params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found | AI Nexus Blog',
    };
  }
  
  const excerpt = post.excerpt.length > 160 ? `${post.excerpt.substring(0, 157)}...` : post.excerpt;
  
  return {
    title: `${post.title} | AI Nexus Blog`,
    description: excerpt,
    keywords: [
      ...post.tags,
      'AI',
      'artificial intelligence',
      'machine learning',
      post.category
    ],
    authors: [{ name: post.author.name }],
    openGraph: {
      title: `${post.title} | AI Nexus Blog`,
      description: excerpt,
      url: `https://toolify-theta.vercel.app/blog/${post.slug}`,
      siteName: 'AI Nexus',
      images: [
        {
          url: post.image 
            ? `https://toolify-theta.vercel.app/images/blog/${post.image}.jpg`
            : 'https://toolify-theta.vercel.app/images/blog-default.jpg',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: 'en_US',
      type: 'article',
      publishedTime: post.date,
      authors: [post.author.name],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | AI Nexus Blog`,
      description: excerpt,
      images: [
        post.image 
          ? `https://toolify-theta.vercel.app/images/blog/${post.image}.jpg`
          : 'https://toolify-theta.vercel.app/images/blog-default.jpg'
      ],
    },
    alternates: {
      canonical: `https://toolify-theta.vercel.app/blog/${post.slug}`,
    },
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const post: BlogPost | undefined = blogPosts.find((item: BlogPost) => item.slug === params.slug);

  if (!post) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <Link 
          href="/blog" 
          className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        <article className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50">
          <div className="p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-300">
                  {post.category}
                </span>
                <span className="mx-3 text-gray-500">•</span>
                <span className="text-sm text-gray-400">{formatDate(post.date)}</span>
                <span className="mx-3 text-gray-500">•</span>
                <span className="text-sm text-gray-400">{post.readTime}</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-6">{post.title}</h1>
            
            <div className="flex items-center mb-8">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold mr-3">
                {post.author.avatar}
              </div>
              <div>
                <p className="text-sm font-medium text-white">{post.author.name}</p>
                {post.author.bio && (
                  <p className="text-xs text-gray-400">{post.author.bio}</p>
                )}
              </div>
            </div>

            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag: string, index: number) => (
                  <span 
                    key={index} 
                    className="inline-block px-3 py-1 text-xs rounded-full bg-gray-700/50 text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div 
              className="prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </article>
      </div>
    </div>
  );
}