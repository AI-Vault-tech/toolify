import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./neural-styles.module.css";
import Navigation from "@/components/layout/Navigation";
import StructuredDataWrapper from "@/components/seo/StructuredDataWrapper";
import Footer from "@/components/layout/Footer";
import { WebVitals } from "@/components/analytics/WebVitals";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#111827' },
    { media: '(prefers-color-scheme: dark)', color: '#030712' },
  ],
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AI Nexus | The World's Ultimate AI Ecosystem",
    template: '%s | AI Nexus - Ultimate AI Tools Directory'
  },
  description: "Discover 35,000+ cutting-edge AI tools, resources, and innovations in the world's most comprehensive AI directory. Stay ahead with expert reviews, tutorials, and industry insights.",
  keywords: [
    'AI tools',
    'artificial intelligence',
    'machine learning',
    'AI directory',
    'AI resources',
    'AI innovations',
    'AI tools directory',
    'best AI tools',
    'AI software',
    'AI platforms',
    'machine learning tools',
    'AI technology',
    'AI solutions',
    'AI applications',
    'AI software tools'
  ],
  applicationName: 'AI Nexus',
  referrer: 'origin-when-cross-origin',
  metadataBase: new URL('https://toolify-theta.vercel.app'),
  alternates: {
    canonical: 'https://toolify-theta.vercel.app',
    languages: {
      'en-US': '/en-US',
    },
  },
  authors: [{ name: 'AI Nexus Team' }],
  creator: 'AI Nexus',
  publisher: 'AI Nexus',
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    title: "AI Nexus | The World's Ultimate AI Ecosystem",
    description: "Discover 35,000+ cutting-edge AI tools, resources, and innovations in the world's most comprehensive AI directory. Stay ahead with expert reviews, tutorials, and industry insights.",
    url: 'https://toolify-theta.vercel.app',
    siteName: 'AI Nexus',
    images: [
      {
        url: 'https://toolify-theta.vercel.app/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "AI Nexus - The World's Ultimate AI Ecosystem",
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "AI Nexus | The World's Ultimate AI Ecosystem",
    description: "Discover 35,000+ cutting-edge AI tools, resources, and innovations in the world's most comprehensive AI directory. Stay ahead with expert reviews, tutorials, and industry insights.",
    images: ['https://toolify-theta.vercel.app/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
          <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="theme-color" content="#111827" />
            <meta name="application-name" content="AI Nexus" />
            <meta name="apple-mobile-web-app-title" content="AI Nexus" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="default" />
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="HandheldFriendly" content="True" />
            <meta name="MobileOptimized" content="320" />
            <meta name="referrer" content="no-referrer-when-downgrade" />
            {/* Google Search Console Verification */}
            <meta name="google-site-verification" content="jHraxgLIDV6_KU_3yrqz8YTK65ekU7BqBQW96eF8pzA" />
            {/* Monetag Verification */}
            <meta name="monetag" content="ef1d74dc6c48db8974df7725d690234d" />
            {/* Client-side structured data */}
            <StructuredDataWrapper />
          </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-white min-h-screen flex flex-col`}
      >
        <Navigation />
        <main className="flex-grow">
          {children}
          <Analytics 
            mode={'production'}  // or 'development' for testing
            debug={false}       // enable for debugging
          />
          <SpeedInsights />
          <WebVitals />
        </main>
        <Footer />
      </body>
    </html>
  );
}