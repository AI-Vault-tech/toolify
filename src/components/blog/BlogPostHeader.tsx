'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function BlogPostHeader({ post }: { post: any }) {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="mb-12">
      {/* Breadcrumb */}
      <div className="mb-6">
        <Link href="/blog" className="text-purple-400 hover:text-purple-300 flex items-center text-sm">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          Back to Blog
        </Link>
      </div>

      {/* Category and Date */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium">
          {post.category}
        </span>
        <span className="text-gray-400">{formatDate(post.date)}</span>
        <span className="text-gray-400">•</span>
        <span className="text-gray-400">{post.readTime}</span>
      </div>

      {/* Title */}
      <motion.h1 
        className="text-4xl md:text-5xl font-bold text-white mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {post.title}
      </motion.h1>

      {/* Excerpt */}
      <motion.p 
        className="text-xl text-gray-400 max-w-3xl mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {post.excerpt}
      </motion.p>

      {/* Author */}
      <motion.div 
        className="flex items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg mr-4">
          {post.author.avatar}
        </div>
        <div>
          <div className="text-white font-medium">{post.author.name}</div>
          <div className="text-gray-400 text-sm">{post.author.bio}</div>
        </div>
      </motion.div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-8">
        {post.tags.map((tag: string) => (
          <span 
            key={tag}
            className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm hover:bg-purple-500/20 hover:text-purple-300 cursor-pointer transition-colors"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}