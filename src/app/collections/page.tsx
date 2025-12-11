'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import RevolutionaryOrbit from '@/components/collections/RevolutionaryOrbit';
import ThreeDOrbitVisualization from '@/components/collections/ThreeDOrbitVisualization';
import HolographicCollectionSphere from '@/components/collections/HolographicCollectionSphere';
import QuantumCollectionNetwork from '@/components/collections/QuantumCollectionNetwork';
import CosmicOrbitSystem from '@/components/collections/CosmicOrbitSystem';

// Define types for our data
type Collection = {
  id: string;
  title: string;
  description: string;
  toolCount: number;
  category: string;
  gradient: string;
  icon: string;
  color: string;
};

type NeuralNode = {
  id: string;
  type: 'input' | 'hidden' | 'output';
  x: number;
  y: number;
  label: string;
};

type NeuralConnection = {
  from: string;
  to: string;
  strength: number;
};

const collections: Collection[] = [
  {
    id: 'startup',
    title: 'Startup AI Stack',
    description: 'Essential AI tools for startups to accelerate growth and productivity. Includes customer insights, automation workflows, financial forecasting, and market analysis to help new businesses scale efficiently.',
    toolCount: 24,
    category: 'Business',
    gradient: 'from-blue-500 to-cyan-500',
    icon: '🚀',
    color: 'blue'
  },
  {
    id: 'enterprise',
    title: 'Enterprise AI Suite',
    description: 'Comprehensive AI solutions for large organizations and enterprises. Features enterprise-grade security, scalable infrastructure, advanced analytics, and integration capabilities for complex business operations.',
    toolCount: 42,
    category: 'Business',
    gradient: 'from-purple-500 to-indigo-500',
    icon: '🏢',
    color: 'purple'
  },
  {
    id: 'creative',
    title: 'Content Creator Toolkit',
    description: 'AI-powered tools for writers, designers, and digital creators. Offers content generation, image editing, video production, and multimedia enhancement to boost creative output and streamline workflows.',
    toolCount: 38,
    category: 'Creative',
    gradient: 'from-pink-500 to-rose-500',
    icon: '🎨',
    color: 'pink'
  },
  {
    id: 'developer',
    title: 'Developer AI Arsenal',
    description: 'Cutting-edge AI tools for software engineers and developers. Provides code generation, bug detection, performance optimization, automated testing, and deployment assistance for modern development teams.',
    toolCount: 31,
    category: 'Technology',
    gradient: 'from-green-500 to-emerald-500',
    icon: '💻',
    color: 'green'
  },
  {
    id: 'marketing',
    title: 'Marketing AI Hub',
    description: 'Advanced AI tools for marketers and growth professionals. Delivers audience segmentation, campaign optimization, content personalization, conversion tracking, and ROI analytics for data-driven marketing.',
    toolCount: 29,
    category: 'Marketing',
    gradient: 'from-orange-500 to-red-500',
    icon: '📈',
    color: 'orange'
  },
  {
    id: 'research',
    title: 'Research & Academia',
    description: 'Specialized AI tools for researchers and academic institutions. Enables literature review, data analysis, hypothesis testing, peer collaboration, and publication support for scientific advancement.',
    toolCount: 22,
    category: 'Education',
    gradient: 'from-indigo-500 to-purple-500',
    icon: '🔬',
    color: 'indigo'
  },
  {
    id: 'healthcare',
    title: 'Healthcare AI Solutions',
    description: 'Revolutionary AI tools transforming patient care and medical research. Features diagnostic assistance, treatment planning, drug discovery, patient monitoring, and healthcare administration optimization.',
    toolCount: 35,
    category: 'Healthcare',
    gradient: 'from-teal-500 to-cyan-500',
    icon: '🏥',
    color: 'teal'
  },
  {
    id: 'finance',
    title: 'Financial Intelligence Suite',
    description: 'AI-powered tools for financial analysis, trading, and risk management. Provides algorithmic trading, fraud detection, credit scoring, portfolio optimization, and regulatory compliance for financial institutions.',
    toolCount: 28,
    category: 'Finance',
    gradient: 'from-yellow-500 to-amber-500',
    icon: '💰',
    color: 'yellow'
  },
  {
    id: 'education',
    title: 'Educational AI Platform',
    description: 'Transformative AI tools for personalized learning and educational content. Offers adaptive learning paths, student assessment, curriculum development, and virtual tutoring for enhanced educational outcomes.',
    toolCount: 33,
    category: 'Education',
    gradient: 'from-emerald-500 to-green-500',
    icon: '📚',
    color: 'emerald'
  },
  {
    id: 'legal',
    title: 'Legal AI Assistant',
    description: 'Advanced AI tools for legal research, document review, and case analysis. Features contract analysis, precedent identification, legal research, compliance monitoring, and litigation strategy support.',
    toolCount: 19,
    category: 'Legal',
    gradient: 'from-slate-500 to-gray-500',
    icon: '⚖️',
    color: 'slate'
  },
  {
    id: 'design',
    title: 'Design & Architecture',
    description: 'AI tools for architects, interior designers, and creative professionals. Provides generative design, space planning, material selection, rendering, and project visualization for creative industries.',
    toolCount: 26,
    category: 'Creative',
    gradient: 'from-violet-500 to-purple-500',
    icon: '🏛️',
    color: 'violet'
  },
  {
    id: 'media',
    title: 'Media & Entertainment',
    description: 'AI solutions for content production, editing, and distribution. Features automated editing, content recommendation, audience analytics, copyright protection, and multi-platform distribution tools.',
    toolCount: 31,
    category: 'Entertainment',
    gradient: 'from-fuchsia-500 to-pink-500',
    icon: '🎬',
    color: 'fuchsia'
  },
  {
    id: 'ecommerce',
    title: 'E-commerce AI',
    description: 'AI tools for inventory management, customer service, and sales optimization. Includes demand forecasting, personalized recommendations, chatbots, pricing optimization, and supply chain automation.',
    toolCount: 27,
    category: 'Retail',
    gradient: 'from-rose-500 to-red-500',
    icon: '🛒',
    color: 'rose'
  },
  {
    id: 'manufacturing',
    title: 'Industrial AI',
    description: 'Smart manufacturing and supply chain optimization tools. Provides quality control, predictive maintenance, process optimization, inventory management, and logistics coordination for industrial operations.',
    toolCount: 23,
    category: 'Industry',
    gradient: 'from-cyan-500 to-blue-500',
    icon: '🏭',
    color: 'cyan'
  },
  {
    id: 'travel',
    title: 'Travel & Hospitality',
    description: 'AI solutions for travel planning, hospitality management, and customer experience. Includes personalized recommendations, dynamic pricing, smart booking systems, and predictive analytics for the travel industry.',
    toolCount: 21,
    category: 'Travel',
    gradient: 'from-sky-500 to-cyan-500',
    icon: '✈️',
    color: 'sky'
  },
  {
    id: 'gaming',
    title: 'Game Development AI',
    description: 'AI tools for game design, NPC behavior, and procedural content generation. Features intelligent character AI, automated level design, player behavior analytics, and real-time content adaptation.',
    toolCount: 25,
    category: 'Entertainment',
    gradient: 'from-amber-500 to-yellow-500',
    icon: '🎮',
    color: 'amber'
  },
  {
    id: 'real-estate',
    title: 'Real Estate Intelligence',
    description: 'AI-powered property valuation, market analysis, virtual tours, and investment insights. Leverage predictive modeling and computer vision for smarter real estate decisions.',
    toolCount: 18,
    category: 'Real Estate',
    gradient: 'from-stone-500 to-gray-500',
    icon: '🏠',
    color: 'stone'
  },
  {
    id: 'agriculture',
    title: 'Precision Agriculture AI',
    description: 'Smart farming solutions with crop monitoring, yield prediction, pest detection, and automated irrigation. Harness satellite imagery and IoT sensors for sustainable agriculture.',
    toolCount: 22,
    category: 'Agriculture',
    gradient: 'from-lime-500 to-green-500',
    icon: '🌾',
    color: 'lime'
  },
  {
    id: 'energy',
    title: 'Energy & Utilities AI',
    description: 'Smart grid optimization, predictive maintenance, energy consumption forecasting, and renewable energy management. Drive sustainability and efficiency in energy sectors.',
    toolCount: 19,
    category: 'Energy',
    gradient: 'from-amber-600 to-orange-600',
    icon: '⚡',
    color: 'amber'
  }
];

const trendingCollections = [
  { id: 'trend1', name: 'AI Image Generation', tools: 18, change: '+12%' },
  { id: 'trend2', name: 'Voice Assistants', tools: 15, change: '+8%' },
  { id: 'trend3', name: 'Code Automation', tools: 22, change: '+15%' },
  { id: 'trend4', name: 'Data Analytics', tools: 19, change: '+11%' },
];

const staffPicks = [
  {
    id: 'staff1',
    title: 'The Ultimate Creative Workflow',
    description: 'This collection represents our editorial team\'s selection of the most powerful creative AI tools that work seamlessly together to transform your creative process. From ideation to execution, these tools will elevate your creative output.',
    collections: ['Design', 'Writing', 'Video', 'Audio'],
    updatedAt: 'Dec 2025'
  }
];

const premiumCollections = [
  { id: 'premium1', name: 'Executive Decision Suite', price: '$299/mo', tools: 45 },
  { id: 'premium2', name: 'Enterprise Innovation Pack', price: '$499/mo', tools: 78 },
  { id: 'premium3', name: 'Unlimited Access Pass', price: '$999/mo', tools: '200+' },
];

const neuralNodes: NeuralNode[] = [
  { id: 'input1', type: 'input', x: 100, y: 150, label: 'Input Data' },
  { id: 'input2', type: 'input', x: 100, y: 250, label: 'User Queries' },
  { id: 'hidden1', type: 'hidden', x: 300, y: 100, label: 'Pattern Recognition' },
  { id: 'hidden2', type: 'hidden', x: 300, y: 200, label: 'Natural Language Processing' },
  { id: 'hidden3', type: 'hidden', x: 300, y: 300, label: 'Machine Learning Models' },
  { id: 'output1', type: 'output', x: 500, y: 150, label: 'Insights' },
  { id: 'output2', type: 'output', x: 500, y: 250, label: 'Recommendations' },
];

const neuralConnections: NeuralConnection[] = [
  { from: 'input1', to: 'hidden1', strength: 0.8 },
  { from: 'input1', to: 'hidden2', strength: 0.6 },
  { from: 'input2', to: 'hidden2', strength: 0.9 },
  { from: 'input2', to: 'hidden3', strength: 0.7 },
  { from: 'hidden1', to: 'output1', strength: 0.85 },
  { from: 'hidden2', to: 'output1', strength: 0.75 },
  { from: 'hidden2', to: 'output2', strength: 0.9 },
  { from: 'hidden3', to: 'output2', strength: 0.8 },
];

export default function CollectionsPage() {
  const [activeVisualization, setActiveVisualization] = useState<'orbit' | 'neural' | 'galaxy' | 'revolutionary' | '3d' | 'holographic' | 'quantum' | 'cosmic'>('orbit');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCollections = collections.filter(collection => 
    collection.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    collection.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    collection.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <main className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="mb-20 text-center">
          <motion.h1 
            className="text-6xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Curated Collections
          </motion.h1>
          <motion.p 
            className="text-2xl text-gray-300 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Expertly curated collections of AI tools organized by use case and industry
          </motion.p>
          
          {/* Visualization Toggle */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <button
              className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 flex items-center ${
                activeVisualization === 'orbit'
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => setActiveVisualization('orbit')}
            >
              <span className="mr-2">궤</span>
              Orbit
            </button>
            <button
              className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 flex items-center ${
                activeVisualization === 'neural'
                  ? 'bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => setActiveVisualization('neural')}
            >
              <span className="mr-2">뇌</span>
              Neural
            </button>
            <button
              className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 flex items-center ${
                activeVisualization === 'galaxy'
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => setActiveVisualization('galaxy')}
            >
              <span className="mr-2">🌌</span>
              Galaxy
            </button>
            <button
              className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 flex items-center ${
                activeVisualization === 'revolutionary'
                  ? 'bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => setActiveVisualization('revolutionary')}
            >
              <span className="mr-2">🌀</span>
              Revolutionary
            </button>
            <button
              className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 flex items-center ${
                activeVisualization === '3d'
                  ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => setActiveVisualization('3d')}
            >
              <span className="mr-2">立体</span>
              3D Orbit
            </button>
            <button
              className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 flex items-center ${
                activeVisualization === 'holographic'
                  ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => setActiveVisualization('holographic')}
            >
              <span className="mr-2">🔮</span>
              Holographic
            </button>
            <button
              className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 flex items-center ${
                activeVisualization === 'quantum'
                  ? 'bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => setActiveVisualization('quantum')}
            >
              <span className="mr-2">⚛️</span>
              Quantum
            </button>
            <button
              className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 flex items-center ${
                activeVisualization === 'cosmic'
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => setActiveVisualization('cosmic')}
            >
              <span className="mr-2">🌌</span>
              Cosmic
            </button>
          </div>

          {/* Visualization Container */}
          <div className="relative h-96 rounded-3xl bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-700/50 flex items-center justify-center mb-16">
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 animate-pulse"></div>
              <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:40px_40px]"></div>
              
              {/* Floating particles */}
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full bg-white animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    width: `${Math.random() * 6 + 2}px`,
                    height: `${Math.random() * 6 + 2}px`,
                    opacity: Math.random() * 0.5 + 0.1,
                    animationDuration: `${Math.random() * 3 + 1}s`,
                    animationDelay: `${Math.random() * 2}s`
                  }}
                ></div>
              ))}
              
              {/* Central interactive element */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center shadow-2xl shadow-purple-500/30 animate-pulse">
                  <span className="text-4xl">✨</span>
                </div>
              </div>
            </div>
            
            {/* Visualization Components */}
            {activeVisualization === 'orbit' && (
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 rounded-full border border-purple-500/30 animate-spin-slow"></div>
                  <div className="w-48 h-48 rounded-full border border-cyan-500/30 animate-spin-slow animation-delay-1000"></div>
                  <div className="w-32 h-32 rounded-full border border-pink-500/30 animate-spin-slow animation-delay-2000"></div>
                </div>
                <div className="absolute w-4 h-4 rounded-full bg-purple-500 shadow-lg shadow-purple-500/50 animate-pulse"></div>
                <div className="absolute w-3 h-3 rounded-full bg-cyan-500 shadow-lg shadow-cyan-500/50 animate-pulse" style={{ top: '30%', left: '70%' }}></div>
                <div className="absolute w-3 h-3 rounded-full bg-pink-500 shadow-lg shadow-pink-500/50 animate-pulse" style={{ bottom: '30%', right: '70%' }}></div>
              </div>
            )}
            
            {activeVisualization === 'neural' && (
              <div className="relative w-full h-full">
                {neuralConnections.map((conn, index) => {
                  const fromNode = neuralNodes.find(n => n.id === conn.from);
                  const toNode = neuralNodes.find(n => n.id === conn.to);
                  if (!fromNode || !toNode) return null;
                  
                  const length = Math.sqrt(
                    Math.pow(toNode.x - fromNode.x, 2) + 
                    Math.pow(toNode.y - fromNode.y, 2)
                  );
                  
                  const angle = Math.atan2(
                    toNode.y - fromNode.y,
                    toNode.x - fromNode.x
                  ) * 180 / Math.PI;
                  
                  return (
                    <div
                      key={index}
                      className="absolute h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 origin-left"
                      style={{
                        width: `${length}px`,
                        left: `${fromNode.x}px`,
                        top: `${fromNode.y}px`,
                        transform: `rotate(${angle}deg)`,
                        opacity: conn.strength
                      }}
                    />
                  );
                })}
                
                {neuralNodes.map(node => (
                  <div
                    key={node.id}
                    className={`absolute w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transform -translate-x-1/2 -translate-y-1/2 ${
                      node.type === 'input' 
                        ? 'bg-gradient-to-r from-green-500 to-emerald-500' 
                        : node.type === 'hidden' 
                          ? 'bg-gradient-to-r from-purple-500 to-indigo-500' 
                          : 'bg-gradient-to-r from-cyan-500 to-blue-500'
                    }`}
                    style={{ left: `${node.x}px`, top: `${node.y}px` }}
                  >
                    {node.type === 'input' ? 'I' : node.type === 'hidden' ? 'H' : 'O'}
                  </div>
                ))}
              </div>
            )}
            
            {activeVisualization === 'galaxy' && (
              <div className="relative w-full h-full">
                {/* Central black hole */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-900 to-black animate-pulse"></div>
                </div>
                
                {/* Orbiting stars */}
                {[...Array(50)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 rounded-full bg-white animate-pulse"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: `rotate(${i * 12}deg) translate(100px) rotate(-${i * 12}deg)`,
                      animationDelay: `${i * 0.1}s`
                    }}
                  ></div>
                ))}
                
                {/* Spiral arms */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64">
                  <div className="absolute inset-0 rounded-full border border-purple-500/20"></div>
                  <div className="absolute inset-4 rounded-full border border-cyan-500/20"></div>
                  <div className="absolute inset-8 rounded-full border border-pink-500/20"></div>
                </div>
              </div>
            )}
            
            {activeVisualization === 'revolutionary' && <RevolutionaryOrbit />}
            {activeVisualization === '3d' && <ThreeDOrbitVisualization />}
            {activeVisualization === 'holographic' && <HolographicCollectionSphere />}
            {activeVisualization === 'quantum' && <QuantumCollectionNetwork />}
            {activeVisualization === 'cosmic' && <CosmicOrbitSystem />}
          </div>
          
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h3 className="text-3xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-emerald-300">
                Next-Gen AI Experience
              </h3>
              <p className="text-gray-300 mb-6 text-xl leading-relaxed">
                Interact with our revolutionary 3D interface that showcases AI collections in an immersive environment. 
                Drag to rotate, scroll to zoom, and click on elements to explore collections in detail.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-gray-300">Immersive 3D Interface</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 mr-2"></div>
                  <span className="text-gray-300">Real-time Interaction</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-teal-500 mr-2"></div>
                  <span className="text-gray-300">AI-Powered Navigation</span>
                </div>
              </div>
              <Link href="/demo/interactive" className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl font-bold text-xl hover:from-green-500 hover:to-emerald-500 transition-all shadow-2xl shadow-green-500/20 text-center">
                Launch Interactive Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Search Bar */}
        <div className="mb-12 max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search collections..."
              className="w-full px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg 
              className="absolute right-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Trending Collections */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
            Trending Collections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trendingCollections.map((collection, index) => (
              <motion.div
                key={collection.id}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-6 border border-gray-700/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{collection.name}</h3>
                  <span className="text-green-400 font-bold">{collection.change}</span>
                </div>
                <p className="text-gray-400 mb-4">{collection.tools} tools</p>
                <Link href={`/collections/trending/detail/${collection.id}`} className="w-full py-3 bg-gray-700/50 hover:bg-gray-600/50 rounded-xl transition-colors text-center">
                  Explore
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Staff Picks */}
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-400">
              Staff Picks
            </h2>
            <span className="ml-4 px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold rounded-full text-sm">
              ★ Editor's Choice
            </span>
            <span className="ml-auto text-gray-400">Updated {staffPicks[0].updatedAt}</span>
          </div>
          
          <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-3xl p-8 border border-gray-700/50 backdrop-blur-sm">
            <h3 className="text-3xl font-bold mb-4">{staffPicks[0].title}</h3>
            <p className="text-gray-300 text-xl mb-8 max-w-4xl">
              {staffPicks[0].description}
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              {staffPicks[0].collections.map((collection, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-gray-700/50 rounded-full text-gray-300"
                >
                  {collection}
                </span>
              ))}
            </div>
            
            <Link href="/collections/staff-picks" className="px-8 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl font-bold text-xl hover:from-yellow-500 hover:to-orange-500 transition-all text-center">
              Explore Collection
            </Link>
          </div>
        </section>

        {/* Collections Grid */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            All Collections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredCollections.map((collection, index) => (
              <motion.div
                key={collection.id}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-6 border border-gray-700/50 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start mb-4">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${collection.gradient} flex items-center justify-center text-2xl mr-4`}>
                    {collection.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-purple-300 transition-colors">
                      {collection.title}
                    </h3>
                    <span className="text-sm text-gray-400">{collection.category}</span>
                  </div>
                </div>
                <p className="text-gray-300 mb-6">{collection.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">{collection.toolCount} tools</span>
                  <Link href={`/collections/${collection.id}`} className="px-4 py-2 bg-gray-700/50 hover:bg-gray-600/50 rounded-xl transition-colors">
                    Explore
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Premium Collections */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-yellow-400">
            Premium Collections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {premiumCollections.map((collection, index) => (
              <motion.div
                key={collection.id}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-8 border border-amber-500/30 backdrop-blur-sm hover:border-amber-500/50 transition-all duration-300 relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-yellow-500/10 rounded-full translate-y-12 -translate-x-12"></div>
                
                <h3 className="text-2xl font-bold mb-4">{collection.name}</h3>
                <p className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-yellow-400">
                  {collection.price}
                </p>
                <p className="text-gray-300 mb-8">
                  Access to {collection.tools} premium AI tools with exclusive features and priority support.
                </p>
                <Link href={`/collections/premium/${collection.id}`} className="w-full py-4 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-2xl font-bold hover:from-amber-500 hover:to-yellow-500 transition-all text-center">
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}