'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function DocsPage() {
  const sections = [
    {
      title: 'Getting Started',
      description: 'Learn the basics of AI Nexus and how to navigate the platform',
      icon: '🚀',
      items: [
        { name: 'Introduction', href: '#' },
        { name: 'Quick Start Guide', href: '#' },
        { name: 'Platform Overview', href: '#' },
        { name: 'Account Setup', href: '#' }
      ]
    },
    {
      title: 'API Documentation',
      description: 'Integrate AI Nexus into your applications with our powerful APIs',
      icon: '⚙️',
      items: [
        { name: 'Authentication', href: '#' },
        { name: 'Tools API', href: '#' },
        { name: 'Collections API', href: '#' },
        { name: 'Search API', href: '#' },
        { name: 'Rate Limits', href: '#' }
      ]
    },
    {
      title: 'Developer Guides',
      description: 'Detailed tutorials and best practices for developers',
      icon: '💻',
      items: [
        { name: 'Building Integrations', href: '#' },
        { name: 'Webhooks', href: '#' },
        { name: 'Data Models', href: '#' },
        { name: 'Error Handling', href: '#' }
      ]
    },
    {
      title: 'Reference',
      description: 'Technical specifications and detailed reference materials',
      icon: '📚',
      items: [
        { name: 'API Endpoints', href: '#' },
        { name: 'Response Codes', href: '#' },
        { name: 'Data Formats', href: '#' },
        { name: 'Changelog', href: '#' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-purple-400 to-pink-400">
              API Documentation
            </span>
          </h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Integrate the world's ultimate AI ecosystem into your applications with our powerful APIs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-2xl rounded-3xl border border-gray-700/50 p-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
            >
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">{section.icon}</span>
                <h2 className="text-3xl font-bold">{section.title}</h2>
              </div>
              <p className="text-gray-400 mb-8 text-xl">{section.description}</p>
              <ul className="space-y-4">
                {section.items.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href}
                      className="flex items-center text-xl text-gray-300 hover:text-white transition-colors group"
                    >
                      <span className="w-2 h-2 rounded-full bg-purple-500 mr-4 group-hover:bg-pink-500 transition-colors"></span>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-2xl rounded-3xl border border-gray-700/50 p-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-6">Need Help?</h2>
          <p className="text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Our developer support team is here to help you integrate AI Nexus into your applications
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              href="#"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl font-bold text-xl hover:from-purple-500 hover:to-pink-500 transition-all"
            >
              Contact Support
            </Link>
            <Link 
              href="#"
              className="px-8 py-4 bg-gray-800 rounded-2xl font-bold text-xl hover:bg-gray-700 transition-all border border-gray-700"
            >
              Developer Community
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}