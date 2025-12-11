'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

// Define types for our data
type Tool = {
  id: string;
  name: string;
  description: string;
  category: string;
  rating: number;
  reviews: number;
  price: string;
  tags: string[];
  url: string;
};

type TrendingCollection = {
  id: string;
  name: string;
  tools: number;
  change: string;
  description: string;
  toolsList: Tool[];
};

// Mock data for trending collections
const trendingCollectionData: Record<string, TrendingCollection> = {
  'trend1': {
    id: 'trend1',
    name: 'AI Image Generation',
    tools: 18,
    change: '+12%',
    description: 'The hottest AI image generation tools that are revolutionizing creative industries. From photorealistic rendering to artistic style transfer, these tools are pushing the boundaries of digital art.',
    toolsList: [
      {
        id: 'tool1',
        name: 'ImageGen Pro',
        description: 'State-of-the-art AI image generation with unprecedented quality',
        category: 'Image Generation',
        rating: 4.9,
        reviews: 234,
        price: '$29/month',
        tags: ['image-generation', 'art'],
        url: 'https://example.com/imagegen-pro'
      },
      {
        id: 'tool2',
        name: 'Style Transfer Master',
        description: 'Transform your images into masterpieces with artistic styles',
        category: 'Artistic Rendering',
        rating: 4.7,
        reviews: 156,
        price: '$19/month',
        tags: ['style-transfer', 'art'],
        url: 'https://example.com/style-transfer'
      }
    ]
  },
  'trend2': {
    id: 'trend2',
    name: 'Voice Assistants',
    tools: 15,
    change: '+8%',
    description: 'Cutting-edge voice assistant technologies that are transforming human-computer interaction. These tools offer natural language processing, voice synthesis, and smart home integration.',
    toolsList: [
      {
        id: 'tool1',
        name: 'VoiceSynth Elite',
        description: 'Natural sounding voice synthesis with emotional intelligence',
        category: 'Voice Synthesis',
        rating: 4.8,
        reviews: 189,
        price: '$39/month',
        tags: ['voice-synthesis', 'nlp'],
        url: 'https://example.com/voicesynth'
      }
    ]
  },
  'trend3': {
    id: 'trend3',
    name: 'Code Automation',
    tools: 22,
    change: '+15%',
    description: 'Automate your coding workflow with AI-powered tools that generate, refactor, and optimize code. These solutions are boosting developer productivity across the industry.',
    toolsList: [
      {
        id: 'tool1',
        name: 'AutoCode Wizard',
        description: 'AI-powered code generation and refactoring',
        category: 'Code Generation',
        rating: 4.9,
        reviews: 312,
        price: '$49/month',
        tags: ['code-generation', 'automation'],
        url: 'https://example.com/autocode'
      }
    ]
  },
  'trend4': {
    id: 'trend4',
    name: 'Data Analytics',
    tools: 19,
    change: '+11%',
    description: 'Advanced data analytics platforms powered by AI that uncover insights, predict trends, and visualize complex datasets for better decision-making.',
    toolsList: [
      {
        id: 'tool1',
        name: 'Insight Miner Pro',
        description: 'Discover hidden patterns in your data with AI',
        category: 'Data Mining',
        rating: 4.8,
        reviews: 245,
        price: '$59/month',
        tags: ['data-mining', 'analytics'],
        url: 'https://example.com/insight-miner'
      }
    ]
  }
};

export default function TrendingCollectionDetail({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [collection, setCollection] = useState<TrendingCollection | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      const collectionId = params.id;
      const foundCollection = trendingCollectionData[collectionId];
      
      if (foundCollection) {
        setCollection(foundCollection);
      } else {
        // Handle 404 case
        router.push('/404');
      }
      
      setLoading(false);
    }, 500);
  }, [params.id, router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-xl">Loading trending collection...</p>
        </div>
      </div>
    );
  }

  if (!collection) {
    return null; // Will redirect to 404
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <main className="container mx-auto px-6 py-12">
        {/* Back Button */}
        <button 
          onClick={() => router.back()}
          className="flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Collections
        </button>

        {/* Collection Header */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="w-24 h-24 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-4xl">
              🔥
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
                  {collection.name}
                </h1>
                <span className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-black font-bold rounded-full">
                  Trending
                </span>
                <span className="px-4 py-2 bg-gray-800 rounded-full text-gray-300">
                  {collection.change}
                </span>
              </div>
              <p className="text-2xl text-gray-300 max-w-4xl mb-6">
                {collection.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-gray-300">{collection.tools} AI Tools</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-cyan-500 mr-2"></div>
                  <span className="text-gray-300">Rapidly Growing</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                  <span className="text-gray-300">Industry Leaders</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Overview */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-6 border border-gray-700/50 backdrop-blur-sm">
              <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 mb-2">
                {collection.tools}
              </div>
              <div className="text-gray-400">AI Tools in Collection</div>
            </div>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-6 border border-gray-700/50 backdrop-blur-sm">
              <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400 mb-2">
                {collection.change}
              </div>
              <div className="text-gray-400">Growth Rate</div>
            </div>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-6 border border-gray-700/50 backdrop-blur-sm">
              <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                #1
              </div>
              <div className="text-gray-400">Trending Category</div>
            </div>
          </div>
        </section>

        {/* Tools Grid */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
            Trending AI Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collection.toolsList.map((tool, index) => (
              <motion.div
                key={tool.id}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-6 border border-gray-700/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold group-hover:text-cyan-300 transition-colors">
                    {tool.name}
                  </h3>
                  <div className="flex items-center bg-gray-700/50 px-2 py-1 rounded-lg">
                    <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm">{tool.rating}</span>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{tool.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300">
                    {tool.category}
                  </span>
                  {tool.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 bg-gray-700/30 rounded-full text-sm text-gray-400">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="text-gray-400 mr-3">{tool.reviews} reviews</span>
                    <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
                      {tool.price}
                    </span>
                  </div>
                  <a 
                    href={tool.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl font-bold hover:from-cyan-500 hover:to-blue-500 transition-all"
                  >
                    Visit Tool
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-3xl p-12 border border-gray-700/50 backdrop-blur-sm text-center">
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
              Stay Ahead of the Curve
            </h2>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
              Get early access to emerging AI tools in {collection.name} and be among the first to leverage these cutting-edge technologies.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/pro" className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl font-bold text-xl hover:from-cyan-500 hover:to-blue-500 transition-all shadow-2xl shadow-cyan-500/20">
                Join Trending List
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl font-bold text-xl hover:from-purple-500 hover:to-pink-500 transition-all shadow-2xl shadow-purple-500/20">
                Get Alerts
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}