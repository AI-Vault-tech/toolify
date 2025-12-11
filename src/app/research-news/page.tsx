'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ResearchNewsPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
          Research & News
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Research Card */}
          <Link 
            href="/research-news/research"
            className="block bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
          >
            <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-6">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="text-blue-400"
              >
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4 text-blue-400">Research & Insights</h2>
            <p className="text-gray-300 mb-6">
              Explore in-depth research papers, market analysis, and strategic insights about AI advancements.
            </p>
            <div className="text-blue-400 flex items-center group">
              <span>View Research</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </div>
          </Link>

          {/* News Card */}
          <Link 
            href="/research-news/updates"
            className="block bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
          >
            <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-6">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="text-purple-400"
              >
                <path d="M4 22h16a2 2 0 0 0 2-2V7.5L17.5 2H6a2 2 0 0 0-2 2v4" />
                <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                <path d="M10 12v7" />
                <path d="m6 18-2 2 2 2" />
                <path d="m18 18 2 2-2 2" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4 text-purple-400">AI News & Updates</h2>
            <p className="text-gray-300 mb-6">
              Stay updated with the latest AI news, company announcements, and upcoming events.
            </p>
            <div className="text-purple-400 flex items-center group">
              <span>View Updates</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </div>
          </Link>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700 hover:border-blue-500/30 transition-colors">
            <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
            <div className="text-gray-400">Research Papers</div>
          </div>
          <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700 hover:border-purple-500/30 transition-colors">
            <div className="text-3xl font-bold text-purple-400 mb-2">10K+</div>
            <div className="text-gray-400">Monthly Readers</div>
          </div>
          <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700 hover:border-pink-500/30 transition-colors">
            <div className="text-3xl font-bold text-pink-400 mb-2">24/7</div>
            <div className="text-gray-400">Latest Updates</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-pink-900/30 rounded-2xl p-8 border border-gray-700/50 backdrop-blur-sm">
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-300 mb-6 max-w-2xl">
            Subscribe to our newsletter for the latest research and news updates. Get insights delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        {[...Array(10)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10"
            style={{
              width: `${Math.random() * 100 + 100}px`,
              height: `${Math.random() * 100 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(40px)',
              transform: `scale(${Math.random() * 2 + 1})`,
              opacity: Math.random() * 0.1 + 0.05,
              animation: `float ${Math.random() * 20 + 20}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Animation Keyframes */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.1;
          }
          50% {
            transform: translate(20px, -20px) scale(1.2);
            opacity: 0.2;
          }
        }
      `}</style>
    </div>
  );
}
