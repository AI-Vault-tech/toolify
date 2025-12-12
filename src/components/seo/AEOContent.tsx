'use client';

import { ReactNode } from 'react';

interface AEOContentProps {
  question: string;
  answer: string;
  children: ReactNode;
  faqItems?: { question: string; answer: string }[];
}

export default function AEOContent({ 
  question, 
  answer, 
  children,
  faqItems = []
}: AEOContentProps) {
  return (
    <>
      {/* Structured data for AEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": answer
                }
              },
              ...faqItems.map(item => ({
                "@type": "Question",
                "name": item.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": item.answer
                }
              }))
            ]
          })
        }}
      />
      
      {/* AEO-enhanced content wrapper */}
      <div className="aeo-content-wrapper">
        {/* Main question and answer */}
        <section className="aeo-main-qna mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">{question}</h2>
          <div className="text-gray-300 leading-relaxed">
            {children}
          </div>
        </section>
        
        {/* Additional FAQ items */}
        {faqItems.length > 0 && (
          <section className="aeo-faq-section mt-16">
            <h3 className="text-xl font-bold text-white mb-6">Frequently Asked Questions</h3>
            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <div key={index} className="bg-gray-800/30 p-6 rounded-2xl border border-gray-700/50">
                  <h4 className="font-bold text-lg text-white mb-3">{item.question}</h4>
                  <p className="text-gray-300">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}