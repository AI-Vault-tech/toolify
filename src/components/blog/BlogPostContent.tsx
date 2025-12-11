'use client';

import { motion } from 'framer-motion';

export default function BlogPostContent({ content }: { content: string }) {
  return (
    <motion.div 
      className="prose prose-invert max-w-none mb-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <div 
        dangerouslySetInnerHTML={{ __html: content }} 
        className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700 rounded-2xl p-8"
      />
    </motion.div>
  );
}