import { WebPage, WithContext } from 'schema-dts';

export const StructuredData = () => {
  const structuredData: WithContext<WebPage> = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "AI Nexus | The World's Ultimate AI Ecosystem",
    "description": "Discover 35,000+ cutting-edge AI tools, resources, and innovations in the world's most comprehensive AI directory.",
    "url": "https://toolify-theta.vercel.app",
    "publisher": {
      "@type": "Organization",
      "name": "AI Nexus",
      "logo": {
        "@type": "ImageObject",
        "url": "https://toolify-theta.vercel.app/logo.png"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};
