// SEO Helper Functions

// Generate canonical URL
export function generateCanonicalUrl(path: string): string {
  return `https://toolify-theta.vercel.app${path}`;
}

// Generate meta title with optimal length
export function generateMetaTitle(title: string, maxLength: number = 60): string {
  return title.length > maxLength ? `${title.substring(0, maxLength - 3)}...` : title;
}

// Generate meta description with optimal length
export function generateMetaDescription(description: string, maxLength: number = 160): string {
  return description.length > maxLength ? `${description.substring(0, maxLength - 3)}...` : description;
}

// Generate structured data for tools
export function generateToolStructuredData(tool: any) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": tool.title,
    "description": tool.description,
    "applicationCategory": "AI Tool",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": tool.pricing === "Free" ? "0" : "Varies",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": tool.rating || 4.5,
      "reviewCount": tool.reviewCount || 100
    }
  };
}

// Generate structured data for blog posts
export function generateBlogStructuredData(post: any) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "author": {
      "@type": "Person",
      "name": post.author.name
    },
    "publisher": {
      "@type": "Organization",
      "name": "AI Nexus",
      "logo": {
        "@type": "ImageObject",
        "url": "https://toolify-theta.vercel.app/images/logo.png"
      }
    },
    "datePublished": post.date,
    "dateModified": post.updatedDate || post.date,
    "image": post.image ? `https://toolify-theta.vercel.app/images/blog/${post.image}.jpg` : undefined,
    "articleBody": post.content
  };
}

// Generate breadcrumb structured data
export function generateBreadcrumbStructuredData(breadcrumbs: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((breadcrumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": breadcrumb.name,
      "item": breadcrumb.url
    }))
  };
}

// Generate keywords from content
export function generateKeywords(content: string, baseKeywords: string[] = []): string[] {
  // Simple keyword extraction (in a real app, you might use NLP libraries)
  const words = content.toLowerCase().match(/\b(\w+)\b/g) || [];
  const wordFreq: { [key: string]: number } = {};
  
  words.forEach(word => {
    if (word.length > 3 && !['this', 'that', 'with', 'have', 'from', 'will', 'which', 'what', 'when', 'where', 'how', 'why'].includes(word)) {
      wordFreq[word] = (wordFreq[word] || 0) + 1;
    }
  });
  
  const sortedWords = Object.entries(wordFreq)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([word]) => word);
  
  return [...baseKeywords, ...sortedWords];
}

// Generate social media meta tags
export function generateSocialMetaTags(title: string, description: string, image: string, url: string) {
  return {
    // Open Graph
    ogTitle: title,
    ogDescription: description,
    ogImage: image,
    ogUrl: url,
    ogType: 'website',
    ogSiteName: 'AI Nexus',
    
    // Twitter
    twitterCard: 'summary_large_image',
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: image,
    twitterSite: '@AINexus',
    twitterCreator: '@AINexus'
  };
}