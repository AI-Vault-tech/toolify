'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function BlogPostFooter({ post }: { post: any }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this to your email service
    console.log('Subscribing email:', email);
    setSubscribed(true);
    setEmail('');
  };

  // Mock related posts
  const relatedPosts = [
    {
      id: '1',
      slug: 'the-future-of-ai-content-creation',
      title: 'The Future of AI Content Creation',
      category: 'AI Trends'
    },
    {
      id: '2',
      slug: 'top-10-ai-tools-for-developers',
      title: 'Top 10 AI Tools for Developers',
      category: 'Development'
    },
    {
      id: '3',
      slug: 'ethical-considerations-in-ai',
      title: 'Ethical Considerations in AI',
      category: 'AI Ethics'
    }
  ].filter(relatedPost => relatedPost.slug !== post.slug).slice(0, 2);

  return (
    <div>
      {/* Newsletter Signup */}
      <motion.div 
        className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700 rounded-2xl p-8 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
        <p className="text-gray-400 mb-6">Get the latest AI insights delivered to your inbox.</p>
        
        {subscribed ? (
          <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-4 text-green-400">
            Thank you for subscribing! Check your email to confirm your subscription.
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-purple-500/20 transition-all"
            >
              Subscribe
            </button>
          </form>
        )}
      </motion.div>

      {/* Related Posts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <h3 className="text-2xl font-bold text-white mb-6">Related Articles</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {relatedPosts.map((relatedPost) => (
            <Link 
              key={relatedPost.id}
              href={`/blog/${relatedPost.slug}`}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 block"
            >
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium mb-3 inline-block">
                {relatedPost.category}
              </span>
              <h4 className="text-lg font-bold text-white mb-2">{relatedPost.title}</h4>
              <div className="text-purple-400 text-sm flex items-center">
                Read Article
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Social Sharing */}
      <motion.div 
        className="flex flex-wrap gap-4 mt-12 pt-6 border-t border-gray-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <span className="text-gray-400">Share this article:</span>
        {['Twitter', 'LinkedIn', 'Facebook', 'Reddit'].map((platform) => (
          <button
            key={platform}
            className="px-4 py-2 bg-gray-800/50 text-gray-300 rounded-xl hover:bg-purple-500/20 hover:text-purple-300 transition-colors"
          >
            {platform}
          </button>
        ))}
      </motion.div>
    </div>
  );
}