'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PressPage() {
  const pressReleases = [
    {
      title: 'AI Nexus Raises $100M Series C to Accelerate Global Expansion',
      date: 'Dec 1, 2025',
      summary: 'New funding will fuel international growth and product development initiatives',
      category: 'Funding'
    },
    {
      title: 'AI Nexus Partners with Major Healthcare Provider to Deploy Diagnostic AI',
      date: 'Nov 15, 2025',
      summary: 'Strategic partnership brings life-saving AI diagnostics to millions of patients',
      category: 'Partnership'
    },
    {
      title: 'AI Nexus Named "Most Innovative AI Platform" at Tech Awards 2025',
      date: 'Oct 28, 2025',
      summary: 'Industry recognition for groundbreaking contributions to artificial intelligence',
      category: 'Recognition'
    },
    {
      title: 'AI Nexus Launches Revolutionary 3D AI Visualization Tool',
      date: 'Oct 10, 2025',
      summary: 'New interface technology transforms how users interact with AI systems',
      category: 'Product'
    },
    {
      title: 'AI Nexus Expands Leadership Team with Industry Veterans',
      date: 'Sep 22, 2025',
      summary: 'Strategic hires strengthen executive team ahead of major product launches',
      category: 'People'
    },
    {
      title: 'AI Nexus Achieves SOC 2 Type II Compliance for Enterprise Security',
      date: 'Aug 30, 2025',
      summary: 'Independent validation confirms platform meets rigorous security standards',
      category: 'Security'
    }
  ];

  const mediaAssets = [
    {
      title: 'Company Logo',
      format: 'SVG, PNG, EPS',
      download: '#'
    },
    {
      title: 'Product Screenshots',
      format: 'High-res JPG',
      download: '#'
    },
    {
      title: 'Executive Headshots',
      format: 'Professional portraits',
      download: '#'
    },
    {
      title: 'Brand Guidelines',
      format: 'PDF Style Guide',
      download: '#'
    }
  ];

  const stats = [
    {
      value: '2.5M+',
      label: 'Active Users'
    },
    {
      value: '500K+',
      label: 'AI Tools Catalogued'
    },
    {
      value: '120+',
      label: 'Countries Served'
    },
    {
      value: '99.9%',
      label: 'Uptime Guarantee'
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
              Press Center
            </span>
          </h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Latest news, announcements, and media resources from AI Nexus
          </p>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-2xl rounded-3xl border border-gray-700/50 p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
            >
              <div className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-300">
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Press Releases */}
          <div className="lg:col-span-2">
            <motion.h2 
              className="text-4xl font-bold mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-300">
                Latest News
              </span>
            </motion.h2>
            
            <div className="space-y-8">
              {pressReleases.map((release, index) => (
                <motion.div
                  key={release.title}
                  className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-2xl rounded-3xl border border-gray-700/50 p-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                >
                  <div className="flex flex-wrap justify-between items-start mb-4">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-bold mb-2">
                      {release.category}
                    </span>
                    <span className="text-gray-500">{release.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{release.title}</h3>
                  <p className="text-gray-400 mb-6 text-lg">{release.summary}</p>
                  <Link 
                    href="#"
                    className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl font-bold hover:from-cyan-500 hover:to-blue-500 transition-all inline-block"
                  >
                    Read Full Release
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Media Resources */}
          <div>
            <motion.div
              className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-2xl rounded-3xl border border-gray-700/50 p-8 mb-8"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-8">Media Resources</h2>
              <div className="space-y-6">
                {mediaAssets.map((asset, index) => (
                  <div key={asset.title} className="flex justify-between items-center pb-4 border-b border-gray-700/50">
                    <div>
                      <h3 className="font-bold text-lg mb-1">{asset.title}</h3>
                      <p className="text-gray-500 text-sm">{asset.format}</p>
                    </div>
                    <Link 
                      href={asset.download}
                      className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-xl transition-colors"
                    >
                      Download
                    </Link>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-2xl rounded-3xl border border-gray-700/50 p-8"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold mb-6">Press Contact</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-lg">Sarah Mitchell</h3>
                  <p className="text-gray-400">Head of Communications</p>
                </div>
                <div>
                  <p className="text-purple-400">press@ainexus.ai</p>
                  <p className="text-gray-500">+1 (415) 555-0123</p>
                </div>
                <div className="pt-4">
                  <Link 
                    href="#"
                    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl font-bold hover:from-purple-500 hover:to-pink-500 transition-all w-full text-center block"
                  >
                    Send Inquiry
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Upcoming Events */}
        <motion.div
          className="mt-20 bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-2xl rounded-3xl border border-gray-700/50 p-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-emerald-300">
              Upcoming Events
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'AI Nexus at TechCrunch Disrupt',
                date: 'Jan 15-17, 2026',
                location: 'San Francisco, CA',
                description: 'Join our team at the world\'s premier startup conference'
              },
              {
                title: 'AI Innovation Summit Europe',
                date: 'Feb 22-24, 2026',
                location: 'London, UK',
                description: 'Presenting our latest research findings and platform updates'
              },
              {
                title: 'AI for Good Global Forum',
                date: 'Mar 10-12, 2026',
                location: 'Geneva, Switzerland',
                description: 'Discussing ethical AI development and social impact'
              }
            ].map((event, index) => (
              <div key={event.title} className="bg-gray-800/50 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-purple-400 mb-2">{event.date}</p>
                <p className="text-gray-400 mb-4">{event.location}</p>
                <p className="text-gray-300">{event.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}