'use client';

import { WebPage, WithContext, Organization, BreadcrumbList, FAQPage, WebSite } from 'schema-dts';
import React from 'react';

export interface BreadcrumbItem {
  name: string;
  item: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface StructuredDataProps {
  pageType?: 'home' | 'tool' | 'blog' | 'category';
  pageTitle?: string;
  pageDescription?: string;
  pageUrl?: string;
  publishedTime?: string;
  modifiedTime?: string;
  breadcrumbs?: BreadcrumbItem[];
  faqs?: FAQItem[];
  imageUrl?: string;
}

const StructuredData: React.FC<StructuredDataProps> = ({
  pageType = 'home',
  pageTitle = "Toolify - AI Tools Directory",
  pageDescription = "Discover the best AI tools and resources. Find, compare, and evaluate 35,000+ AI tools for your business and personal needs.",
  pageUrl = "https://toolify-theta.vercel.app",
  publishedTime,
  modifiedTime,
  breadcrumbs = [],
  faqs = [],
  imageUrl = "https://toolify-theta.vercel.app/images/og-image.jpg"
}) => {
  // Organization schema
  const organizationSchema: WithContext<Organization> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Toolify",
    "url": "https://toolify-theta.vercel.app",
    "logo": {
      "@type": "ImageObject",
      "url": "https://toolify-theta.vercel.app/logo.png"
    },
    "sameAs": [
      "https://twitter.com/ToolifyAI",
      "https://www.linkedin.com/company/toolify-ai",
      "https://www.facebook.com/ToolifyAI"
    ],
    "contactPoint": [{
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "support@toolify-ai.com",
      "url": "https://toolify-theta.vercel.app/contact"
    }]
  };

  // WebPage schema
  const webPageSchema: WithContext<WebPage> = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": pageTitle,
    "description": pageDescription,
    "url": pageUrl,
    "publisher": organizationSchema,
    "inLanguage": "en-US",
    ...(publishedTime && { "datePublished": publishedTime }),
    ...(modifiedTime && { "dateModified": modifiedTime }),
    ...(imageUrl && { "image": imageUrl })
  };

  // Website schema
  const websiteSchema: WithContext<WebSite> = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Toolify",
    "url": "https://toolify-theta.vercel.app",
    "potentialAction": [{
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://toolify-theta.vercel.app/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }]
  };

  // Breadcrumb schema
  const breadcrumbSchema: WithContext<BreadcrumbList> = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://toolify-theta.vercel.app"
      },
      ...breadcrumbs.map((item, index) => ({
        "@type": "ListItem" as const,
        "position": index + 2,
        "name": item.name,
        "item": item.item.startsWith('http') ? item.item : `https://toolify-theta.vercel.app${item.item}`
      }))
    ]
  };

  // FAQ schema
  const faqSchema: WithContext<FAQPage> | null = faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  // Combine all schemas
  const schemas = [
    webPageSchema,
    websiteSchema,
    organizationSchema,
    ...(breadcrumbs.length > 0 ? [breadcrumbSchema] : []),
    ...(faqs.length > 0 && faqSchema ? [faqSchema] : [])
  ].filter(Boolean) as Array<WithContext<WebPage | WebSite | Organization | BreadcrumbList | FAQPage>>;

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={`structured-data-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema, null, 2)
          }}
        />
      ))}
    </>
  );
};

export default StructuredData;