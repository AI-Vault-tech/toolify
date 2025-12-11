'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const blogPosts = [
  {
    id: '1',
    title: 'The Convergence of Quantum Computing and Artificial Intelligence: A Paradigm Shift',
    excerpt: 'Exploring how quantum computing will revolutionize AI capabilities and unlock unprecedented computational possibilities for machine learning algorithms.',
    date: 'Dec 5, 2025',
    author: 'Dr. Elena Rodriguez',
    readTime: '12 min read',
    category: 'Quantum AI',
    avatar: 'ER',
    tags: ['Quantum Computing', 'Machine Learning', 'Future Tech'],
    image: 'quantum-ai'
  },
  {
    id: '2',
    title: 'Ethical Frameworks for Autonomous AI Systems: Navigating the Moral Landscape',
    excerpt: 'A comprehensive examination of ethical considerations in AI development, focusing on bias mitigation, transparency, and accountability mechanisms.',
    date: 'Dec 1, 2025',
    author: 'Prof. Michael Chen',
    readTime: '15 min read',
    category: 'AI Ethics',
    avatar: 'MC',
    tags: ['Ethics', 'Bias', 'Transparency', 'Governance'],
    image: 'ai-ethics'
  },
  {
    id: '3',
    title: 'Transforming Healthcare Through Predictive AI: Clinical Decision Support Evolution',
    excerpt: 'How machine learning algorithms are revolutionizing diagnostic accuracy and personalized treatment plans in modern healthcare systems.',
    date: 'Nov 28, 2025',
    author: 'Dr. Sarah Johnson',
    readTime: '18 min read',
    category: 'Healthcare AI',
    avatar: 'SJ',
    tags: ['Healthcare', 'Diagnostics', 'Personalized Medicine'],
    image: 'healthcare-ai'
  },
  {
    id: '4',
    title: 'The Economic Impact of Generative AI on Global Markets: Disruption and Opportunity',
    excerpt: 'Analyzing the macroeconomic implications of generative AI adoption across industries and its effect on employment, productivity, and innovation.',
    date: 'Nov 25, 2025',
    author: 'Dr. Robert Kim',
    readTime: '14 min read',
    category: 'AI Economics',
    avatar: 'RK',
    tags: ['Economics', 'Productivity', 'Market Analysis'],
    image: 'ai-economics'
  },
  {
    id: '5',
    title: 'Neurosymbolic AI: Bridging the Gap Between Reasoning and Perception',
    excerpt: 'Exploring hybrid AI architectures that combine symbolic reasoning with neural networks to achieve more human-like cognitive capabilities.',
    date: 'Nov 22, 2025',
    author: 'Dr. Amanda Patel',
    readTime: '16 min read',
    category: 'Cognitive AI',
    avatar: 'AP',
    tags: ['Neurosymbolic', 'Cognition', 'Hybrid Models'],
    image: 'cognitive-ai'
  },
  {
    id: '6',
    title: 'AI-Powered Cybersecurity: Defending Against Next-Generation Threats',
    excerpt: 'How artificial intelligence is transforming cybersecurity through predictive threat detection, automated response systems, and adaptive defense mechanisms.',
    date: 'Nov 18, 2025',
    author: 'Col. James Wilson',
    readTime: '13 min read',
    category: 'Security AI',
    avatar: 'JW',
    tags: ['Cybersecurity', 'Threat Detection', 'Defense'],
    image: 'security-ai'
  },
  {
    id: '7',
    title: 'The Evolution of Natural Language Understanding: From Syntax to Semantics',
    excerpt: 'Advances in NLP that enable machines to comprehend context, nuance, and implied meaning in human language with unprecedented accuracy.',
    date: 'Nov 15, 2025',
    author: 'Dr. Lisa Thompson',
    readTime: '11 min read',
    category: 'NLP',
    avatar: 'LT',
    tags: ['NLP', 'Language Models', 'Semantics'],
    image: 'nlp'
  },
  {
    id: '8',
    title: 'Sustainable AI: Green Computing for Intelligent Systems',
    excerpt: 'Strategies for reducing the environmental footprint of AI systems through efficient algorithms, hardware optimization, and renewable energy integration.',
    date: 'Nov 12, 2025',
    author: 'Dr. Marcus Green',
    readTime: '10 min read',
    category: 'Green AI',
    avatar: 'MG',
    tags: ['Sustainability', 'Efficiency', 'Green Tech'],
    image: 'green-ai'
  },
  {
    id: '9',
    title: 'AI in Creative Industries: Augmenting Human Imagination',
    excerpt: 'How artificial intelligence tools are empowering creatives while preserving the irreplaceable value of human artistic vision and emotional intelligence.',
    date: 'Nov 9, 2025',
    author: 'Alexandra Dubois',
    readTime: '14 min read',
    category: 'Creative AI',
    avatar: 'AD',
    tags: ['Creativity', 'Art', 'Design'],
    image: 'creative-ai'
  }
];

const featuredPost = {
  id: 'featured',
  title: 'The Singularity Horizon: When Artificial General Intelligence Transforms Humanity',
  excerpt: 'An in-depth exploration of the theoretical and practical implications of achieving AGI, examining timelines, potential scenarios, and preparation strategies for the post-human era.',
  date: 'Dec 5, 2025',
  author: 'Dr. Katherine Morrison',
  readTime: '22 min read',
  category: 'AGI',
  avatar: 'KM',
  tags: ['AGI', 'Singularity', 'Future of Humanity', 'Transhumanism'],
  image: 'agi'
};

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-purple-400 to-pink-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            AI Insights
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Stay informed with the latest trends, analysis, and expert perspectives in the world of AI
          </motion.p>
        </div>

        {/* Featured Post */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl border border-gray-700 overflow-hidden">
            <div className="md:flex">
              <div className="md:w-2/5">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 h-64 md:h-full flex items-center justify-center">
                  <span className="text-5xl">🔬</span>
                </div>
              </div>
              <div className="md:w-3/5 p-8 md:p-12">
                <div className="flex items-center mb-4">
                  <span className="px-3 py-1 bg-purple-900/50 text-purple-300 text-sm rounded-full mr-3">
                    Featured
                  </span>
                  <span className="text-gray-500 text-sm">{featuredPost.date} • {featuredPost.readTime}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{featuredPost.title}</h2>
                <p className="text-gray-400 mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">{featuredPost.category}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mr-3">
                    <span className="font-bold text-white text-sm">{featuredPost.avatar}</span>
                  </div>
                  <div>
                    <p className="font-medium">{featuredPost.author}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Link href={`/insights/${post.id}`} key={post.id} className="block">
              <motion.div
                className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden hover:border-cyan-500/50 transition-all cursor-pointer group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="h-48 bg-gradient-to-r from-cyan-700/30 to-blue-700/30 flex items-center justify-center">
                  <span className="text-3xl">
                    {post.image === 'quantum-ai' && '⚛️'}
                    {post.image === 'ai-ethics' && '⚖️'}
                    {post.image === 'healthcare-ai' && '🏥'}
                    {post.image === 'ai-economics' && '📊'}
                    {post.image === 'cognitive-ai' && '🧠'}
                    {post.image === 'security-ai' && '🛡️'}
                    {post.image === 'nlp' && '🗣️'}
                    {post.image === 'green-ai' && '🌱'}
                    {post.image === 'creative-ai' && '🎨'}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan-300 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mr-2">
                        <span className="font-bold text-white text-xs">{post.avatar}</span>
                      </div>
                      <span className="text-xs text-gray-500">{post.author}</span>
                    </div>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div 
          className="mt-24 max-w-2xl mx-auto bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl border border-gray-700 p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <h2 className="text-2xl font-bold mb-4">Stay Ahead of the AI Curve</h2>
          <p className="text-gray-400 mb-6">
            Get weekly insights, tool recommendations, and industry analysis delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full font-medium hover:from-cyan-500 hover:to-blue-500 transition-all whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}