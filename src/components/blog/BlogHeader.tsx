'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function BlogHeader() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'AI Trends',
    'Development',
    'AI Ethics',
    'Healthcare',
    'AI Research',
    'Business'
  ];

  return (
    <div className="mb-16">
      {/* Header */}
      <div className="text-center mb-12">
        <motion.h1 
          className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          AI Nexus Blog
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-400 max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Insights, trends, and expert analysis on the ever-evolving world of artificial intelligence
        </motion.p>
      </div>

      {/* Search and Filter */}
      <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700 rounded-2xl p-6 mb-12">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search Bar */}
          <div className="flex-grow relative">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg className="absolute right-3 top-3.5 w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>

          {/* Category Filter */}
          <select
            className="bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        {/* Featured Tags */}
        <div className="flex flex-wrap gap-2 mt-6">
          {['AI', 'Machine Learning', 'Ethics', 'Tools', '2025 Trends', 'Healthcare', 'Development'].map(tag => (
            <span 
              key={tag}
              className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm hover:bg-purple-500/20 hover:text-purple-300 cursor-pointer transition-colors"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700 rounded-2xl p-4 text-center">
          <div className="text-2xl font-bold text-purple-400">50+</div>
          <div className="text-gray-400 text-sm">Articles</div>
        </div>
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700 rounded-2xl p-4 text-center">
          <div className="text-2xl font-bold text-pink-400">12</div>
          <div className="text-gray-400 text-sm">Categories</div>
        </div>
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700 rounded-2xl p-4 text-center">
          <div className="text-2xl font-bold text-cyan-400">25</div>
          <div className="text-gray-400 text-sm">Experts</div>
        </div>
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700 rounded-2xl p-4 text-center">
          <div className="text-2xl font-bold text-blue-400">100K+</div>
          <div className="text-gray-400 text-sm">Readers</div>
        </div>
      </div>
    </div>
  );
}