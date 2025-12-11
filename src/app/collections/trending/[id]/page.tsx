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
        name: 'ArtFlow Pro',
        description: 'Professional AI art generation with advanced style controls.',
        category: 'Image Generation',
        rating: 4.9,
        reviews: 542,
        price: '$19/mo',
        tags: ['Art', 'Design', 'Creative'],
        url: 'https://artflowpro.com'
      },
      {
        id: 'tool2',
        name: 'PhotoReal AI',
        description: 'Transform photos into stunning artworks with AI.',
        category: 'Photo Editing',
        rating: 4.7,
        reviews: 387,
        price: 'Free Trial',
        tags: ['Photo', 'Editing', 'Enhancement'],
        url: 'https://photorealai.com'
      }
    ]
  },
  'trend2': {
    id: 'trend2',
    name: 'Code Assistant AI',
    tools: 15,
    change: '+8%',
    description: 'AI-powered coding assistants that boost developer productivity. These tools help with code generation, debugging, and optimization.',
    toolsList: [
      {
        id: 'tool3',
        name: 'CodeGenius',
        description: 'Intelligent code completion and generation.',
        category: 'Development',
        rating: 4.8,
        reviews: 721,
        price: '$24/mo',
        tags: ['Coding', 'IDE', 'Productivity'],
        url: 'https://codegenius.com'
      }
    ]
  }
};

export default function TrendingCollectionDetail({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [collection, setCollection] = useState<TrendingCollection | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Simulate API call to fetch collection data
    const fetchCollection = () => {
      setTimeout(() => {
        const collectionId = params.id;
        const foundCollection = trendingCollectionData[collectionId];
        
        if (foundCollection) {
          setCollection(foundCollection);
        } else {
          setError(true);
        }
        setLoading(false);
      }, 500);
    };

    fetchCollection();
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500 mx-auto"></div>
          <p className="mt-4 text-gray-400">Loading trending collection...</p>
        </div>
      </div>
    );
  }

  if (error || !collection) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
        <div className="text-center max-w-md">
          <h1 className="text-4xl font-bold text-white mb-4">Trending Collection Not Found</h1>
          <p className="text-gray-400 mb-8">Sorry, we couldn't find the trending collection you're looking for.</p>
          <button 
            onClick={() => router.push('/collections')}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl font-bold hover:from-purple-500 hover:to-indigo-500 transition-all"
          >
            Browse All Collections
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <main className="container mx-auto px-6 py-12">
        {/* Back Button */}
        <button 
          onClick={() => router.push('/collections')}
          className="flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Collections
        </button>

        {/* Collection Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white mb-6">
            <span className="text-2xl mr-2">🔥</span>
            <span className="font-semibold">Trending</span>
          </div>
          
          <h1 className="text-5xl font-bold mb-4">{collection.name}</h1>
          <p className="text-xl text-gray-300 max-w-3xl">{collection.description}</p>
          
          <div className="flex items-center mt-6">
            <span className="text-gray-400 mr-4">{collection.tools} tools</span>
            <span className="text-green-400 font-bold">{collection.change} this week</span>
          </div>
        </motion.div>

        {/* Tools Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Trending Tools</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collection.toolsList.map((tool, index) => (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6 hover:border-gray-600/50 transition-all"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{tool.name}</h3>
                  <span className="text-sm text-gray-400 bg-gray-700/50 px-2 py-1 rounded">{tool.category}</span>
                </div>
                
                <p className="text-gray-300 mb-4">{tool.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {tool.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-gray-700/50 px-2 py-1 rounded">{tag}</span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm">{tool.rating}</span>
                    <span className="text-gray-500 text-sm ml-2">({tool.reviews})</span>
                  </div>
                  <span className="font-semibold">{tool.price}</span>
                </div>
                
                <Link 
                  href={tool.url} 
                  target="_blank"
                  className="block w-full py-3 text-center bg-gray-700/50 hover:bg-gray-600/50 rounded-xl transition-colors"
                >
                  Visit Tool
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Related Collections */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Other Trending Collections</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6 hover:border-gray-600/50 transition-all cursor-pointer">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">🔥</span>
                <h3 className="text-xl font-bold">AI Video Editing</h3>
              </div>
              <p className="text-gray-300 mb-4">Automated video editing and enhancement tools.</p>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">12 tools</span>
                <span className="text-green-400 font-bold">+9%</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6 hover:border-gray-600/50 transition-all cursor-pointer">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">🔥</span>
                <h3 className="text-xl font-bold">Voice Synthesis</h3>
              </div>
              <p className="text-gray-300 mb-4">Realistic voice generation and cloning technologies.</p>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">9 tools</span>
                <span className="text-green-400 font-bold">+15%</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6 hover:border-gray-600/50 transition-all cursor-pointer">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">🔥</span>
                <h3 className="text-xl font-bold">Data Analysis</h3>
              </div>
              <p className="text-gray-300 mb-4">Advanced analytics and visualization platforms.</p>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">14 tools</span>
                <span className="text-green-400 font-bold">+7%</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}