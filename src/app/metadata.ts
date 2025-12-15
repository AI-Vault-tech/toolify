import { Metadata } from 'next';

const siteUrl = 'https://toolify-theta.vercel.app';
const siteName = 'Toolify - AI Tools Directory';
const siteDescription = 'Discover the best AI tools and resources. Find, compare, and evaluate 35,000+ AI tools for your business and personal needs.';
const siteKeywords = [
  'AI tools',
  'artificial intelligence',
  'machine learning',
  'AI directory',
  'AI resources',
  'best AI tools',
  'AI software',
  'AI platforms',
  'AI tools comparison',
  'AI tools for business',
  'AI tools for developers',
  'AI tools for marketing',
  'AI tools for content creation',
  'AI tools for productivity',
  'AI tools 2025',
  'top AI tools',
  'free AI tools',
  'AI tools review',
  'AI tools list',
  'AI tools directory'
];

export const metadata: Metadata = {
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: siteKeywords,
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      // Add more languages as needed
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName,
    title: siteName,
    description: siteDescription,
    images: [
      {
        url: `${siteUrl}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description: siteDescription,
    images: [`${siteUrl}/images/twitter-card.jpg`],
    site: '@ToolifyAI',
    creator: '@ToolifyAI',
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
  verification: {
    // Add verification codes here
    google: 'YOUR_GOOGLE_VERIFICATION_CODE',
    yandex: 'YANDEX_VERIFICATION_CODE',
    // other: {
    //   me: ['your-email@example.com', 'your-other-email@example.com'],
    // },
  },
  // Additional metadata
  applicationName: siteName,
  referrer: 'origin-when-cross-origin',
  authors: [{ name: 'Toolify Team' }],
  creator: 'Toolify',
  publisher: 'Toolify',
  formatDetection: {
    email: true,
    address: false,
    telephone: false,
  },
  // Viewport is handled in layout.tsx
  // themeColor: [
  //   { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  //   { media: '(prefers-color-scheme: dark)', color: '#000000' },
  // ],
  // icons: {
  //   icon: '/favicon.ico',
  //   shortcut: '/favicon-16x16.png',
  //   apple: '/apple-touch-icon.png',
  // },
  // manifest: '/site.webmanifest',
  // other: {
  //   'msapplication-TileColor': '#ffffff',
  //   'msapplication-config': '/browserconfig.xml',
  // },
};
