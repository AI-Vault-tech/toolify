'use client';

import { usePathname } from 'next/navigation';
import Head from 'next/head';
import React from 'react';
import StructuredData, { BreadcrumbItem, FAQItem } from './StructuredData';

export interface SEOProps {
  pageType?: 'home' | 'tool' | 'blog' | 'category';
  pageTitle?: string;
  pageDescription?: string;
  pageUrl?: string;
  publishedTime?: string;
  modifiedTime?: string;
  breadcrumbs?: BreadcrumbItem[];
  faqs?: FAQItem[];
  imageUrl?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
  noFollow?: boolean;
  ogType?: 'website' | 'article' | 'profile' | 'book';
  ogImage?: {
    url: string;
    width?: number;
    height?: number;
    alt?: string;
  };
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  twitterSite?: string;
  twitterCreator?: string;
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
  children?: React.ReactNode;
}

const SEO: React.FC<SEOProps> = ({
  pageType = 'home',
  pageTitle = "Toolify - AI Tools Directory",
  pageDescription = "Discover the best AI tools and resources. Find, compare, and evaluate 35,000+ AI tools for your business and personal needs.",
  pageUrl,
  publishedTime,
  modifiedTime,
  breadcrumbs = [],
  faqs = [],
  imageUrl,
  canonicalUrl,
  noIndex = false,
  noFollow = false,
  ogType = 'website',
  ogImage,
  twitterCard = 'summary_large_image',
  twitterSite = '@ToolifyAI',
  twitterCreator,
  article,
  children
}) => {
  const pathname = usePathname();
  const siteUrl = 'https://toolify-theta.vercel.app';
  const currentPath = pathname || '';
  const fullUrl = pageUrl || `${siteUrl}${currentPath}`;
  const fullCanonicalUrl = canonicalUrl || fullUrl.split('?')[0]; // Remove query params for canonical
  const fullImageUrl = ogImage?.url 
    ? `${siteUrl}${ogImage.url.startsWith('/') ? '' : '/'}${ogImage.url}` 
    : `${siteUrl}${imageUrl?.startsWith('/') ? '' : '/'}${imageUrl || '/images/og-image.jpg'}`;
  const title = pageTitle || 'Toolify - AI Tools Directory';

  // Generate metadata
  const metadata = {
    title,
    description: pageDescription,
    openGraph: {
      type: ogType,
      locale: 'en_US',
      url: fullUrl,
      title,
      description: pageDescription,
      site_name: 'Toolify',
      images: [
        {
          url: fullImageUrl,
          width: ogImage?.width || 1200,
          height: ogImage?.height || 630,
          alt: ogImage?.alt || title,
        },
      ],
      ...(article?.publishedTime && { publishedTime: article.publishedTime }),
      ...(article?.modifiedTime && { modifiedTime: article.modifiedTime }),
      ...(article?.author && { authors: [article.author] }),
      ...(article?.section && { section: article.section }),
      ...(article?.tags && article.tags.length > 0 && { tags: article.tags }),
    },
    twitter: {
      card: twitterCard,
      site: twitterSite,
      creator: twitterCreator,
      title,
      description: pageDescription,
      images: [fullImageUrl],
    },
    robots: {
      index: !noIndex,
      follow: !noFollow,
      googleBot: {
        index: !noIndex,
        follow: !noFollow,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };

  // Prepare structured data props
  const structuredDataProps = {
    pageType,
    pageTitle: title,
    pageDescription,
    pageUrl: fullUrl,
    publishedTime,
    modifiedTime,
    breadcrumbs,
    faqs,
    imageUrl: fullImageUrl
  };

  return (
    <>
      <Head>
        {/* Basic Meta Tags */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="robots" content={`${metadata.robots.index ? 'index' : 'noindex'},${metadata.robots.follow ? 'follow' : 'nofollow'}`} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={fullCanonicalUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:site_name" content={metadata.openGraph.site_name} />
        {metadata.openGraph.images.map((image, index) => (
          <React.Fragment key={`og-${index}`}>
            <meta property="og:image" content={image.url} />
            <meta property="og:image:width" content={String(image.width)} />
            <meta property="og:image:height" content={String(image.height)} />
            {image.alt && <meta property="og:image:alt" content={image.alt} />}
          </React.Fragment>
        ))}

        {/* Twitter */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        {twitterCreator && <meta name="twitter:creator" content={metadata.twitter.creator} />}
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        {metadata.twitter.images[0] && (
          <meta name="twitter:image" content={metadata.twitter.images[0]} />
        )}

        {/* Article specific */}
        {article && (
          <>
            {article.publishedTime && (
              <meta property="article:published_time" content={article.publishedTime} />
            )}
            {article.modifiedTime && (
              <meta property="article:modified_time" content={article.modifiedTime} />
            )}
            {article.section && (
              <meta property="article:section" content={article.section} />
            )}
            {article.author && (
              <meta property="article:author" content={article.author} />
            )}
            {article.tags?.map((tag, index) => (
              <meta key={`tag-${index}`} property="article:tag" content={tag} />
            ))}
          </>
        )}

        {/* Additional meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      </Head>
      
      {/* Structured Data */}
      <StructuredData {...structuredDataProps} />
      
      {children}
    </>
  );
};

export default SEO;