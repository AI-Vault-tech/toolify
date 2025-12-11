'use client';

import { useState } from 'react';
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

type StaffPick = {
  id: string;
  title: string;
  description: string;
  collections: string[];
  updatedAt: string;
  tools: Tool[];
};

// Mock data for staff picks
const staffPickData: StaffPick = {
  id: 'staff1',
  title: 'The Ultimate Creative Workflow',
  description: 'This collection represents our editorial team\'s selection of the most powerful creative AI tools that work seamlessly together to transform your creative process. From ideation to execution, these tools will elevate your creative output.',
  collections: ['Design', 'Writing', 'Video', 'Audio'],
  updatedAt: 'Dec 2025',
  tools: [
    {
      id: 'tool1',
      name: 'InspireAI',
      description: 'Generate creative ideas and overcome writer\'s block with AI-powered brainstorming.',
      category: 'Ideation',
      rating: 4.9,
      reviews: 421,
      price: '$19/mo',
      tags: ['Brainstorming', 'Creativity', 'Ideation'],
      url: 'https://inspireai.com'
    },
    {
      id: 'tool2',
      name: 'DesignMaster Pro',
      description: 'Professional graphic design tool with AI-assisted layout and color suggestions.',
      category: 'Design',
      rating: 4.8,
      reviews: 387,
      price: 'Free Trial',
      tags: ['Graphic Design', 'Layout', 'Color'],
      url: 'https://designmasterpro.com'
    },
    {
      id: 'tool3',
      name: 'ScriptWriter AI',
      description: 'AI-powered scriptwriting assistant for screenplays, videos, and storytelling.',
      category: 'Writing',
      rating: 4.7,
      reviews: 298,
      price: '$29/mo',
      tags: ['Screenwriting', 'Storytelling', 'Narrative'],
      url: 'https://scriptwriterai.com'
    },
    {
      id: 'tool4',
      name: 'AudioCraft Studio',
      description: 'Professional audio editing with AI noise reduction and mastering.',
      category: 'Audio',
      rating: 4.9,
      reviews: 512,
      price: '$39/mo',
      tags: ['Audio Editing', 'Mastering', 'Noise Reduction'],
      url: 'https://audiocraftstudio.com'
    }
  ]
};

export default function StaffPicks() {
  const router = useRouter();

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

        {/* Staff Pick Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white mb-6">
            <span className="text-2xl mr-2">⭐</span>
            <span className="font-semibold">Staff Pick</span>
          </div>
          
          <h1 className="text-5xl font-bold mb-6">{staffPickData.title}</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">{staffPickData.description}</p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {staffPickData.collections.map((collection, index) => (
              <span key={index} className="px-4 py-2 bg-gray-700/50 rounded-full">
                {collection}
              </span>
            ))}
          </div>
          
          <p className="text-gray-400">Updated {staffPickData.updatedAt}</p>
        </motion.div>

        {/* Curator Note */}
        <section className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-3xl p-8 mb-16">
          <div className="flex items-start">
            <div className="bg-gradient-to-br from-purple-600 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl mr-6">
              👤
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Curator's Note</h3>
              <p className="text-gray-300 mb-4">
                "As our lead curator, I've personally tested hundreds of AI tools. This collection represents 
                the absolute best in creative technology. Each tool complements the others perfectly, creating 
                a seamless workflow that will transform how you create."
              </p>
              <p className="text-gray-400">— Sarah Chen, Lead Curator</p>
            </div>
          </div>
        </section>

        {/* Tools Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Handpicked Tools</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {staffPickData.tools.map((tool, index) => (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6 hover:border-yellow-500/50 transition-all"
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
                  className="block w-full py-3 text-center bg-yellow-700/50 hover:bg-yellow-600/50 rounded-xl transition-colors"
                >
                  Visit Tool
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Workflow Visualization */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Complete Creative Workflow</h2>
          
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-3xl p-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-center mb-8 md:mb-0">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                  💡
                </div>
                <h3 className="text-xl font-bold mb-2">Ideation</h3>
                <p className="text-gray-400">InspireAI</p>
              </div>
              
              <div className="hidden md:block text-3xl text-gray-500">→</div>
              
              <div className="text-center mb-8 md:mb-0">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                  🎨
                </div>
                <h3 className="text-xl font-bold mb-2">Design</h3>
                <p className="text-gray-400">DesignMaster Pro</p>
              </div>
              
              <div className="hidden md:block text-3xl text-gray-500">→</div>
              
              <div className="text-center mb-8 md:mb-0">
                <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                  ✍️
                </div>
                <h3 className="text-xl font-bold mb-2">Writing</h3>
                <p className="text-gray-400">ScriptWriter AI</p>
              </div>
              
              <div className="hidden md:block text-3xl text-gray-500">→</div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                  🔊
                </div>
                <h3 className="text-xl font-bold mb-2">Production</h3>
                <p className="text-gray-400">AudioCraft Studio</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-16">
          <h2 className="text-4xl font-bold mb-6">Start Your Creative Journey</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Get instant access to all 4 handpicked tools with our special staff pick bundle.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl font-bold text-xl hover:from-yellow-500 hover:to-orange-500 transition-all shadow-2xl shadow-yellow-500/20">
            Get Bundle - $79/mo
          </button>
          <p className="text-gray-400 mt-4">Save 35% vs buying individually</p>
        </section>
      </main>
    </div>
  );
}