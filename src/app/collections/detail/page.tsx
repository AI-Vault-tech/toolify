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

type Collection = {
  id: string;
  title: string;
  description: string;
  toolCount: number;
  category: string;
  gradient: string;
  icon: string;
  color: string;
  tools: Tool[];
};

// Mock data for collections and tools
const collectionData: Record<string, Collection> = {
  'startup': {
    id: 'startup',
    title: 'Startup AI Stack',
    description: 'Essential AI tools for startups to accelerate growth and productivity. Includes customer insights, automation workflows, financial forecasting, and market analysis to help new businesses scale efficiently.',
    toolCount: 24,
    category: 'Business',
    gradient: 'from-blue-500 to-cyan-500',
    icon: '🚀',
    color: 'blue',
    tools: [
      {
        id: 'tool1',
        name: 'Idea Validator Pro',
        description: 'Validate your startup ideas with AI-powered market analysis',
        category: 'Market Research',
        rating: 4.8,
        reviews: 124,
        price: 'Free',
        tags: ['market-analysis', 'validation'],
        url: 'https://example.com/idea-validator'
      },
      {
        id: 'tool2',
        name: 'Pitch Deck Generator',
        description: 'Create compelling pitch decks with AI assistance',
        category: 'Presentation',
        rating: 4.6,
        reviews: 89,
        price: '$29/month',
        tags: ['pitch-deck', 'presentation'],
        url: 'https://example.com/pitch-deck'
      },
      {
        id: 'tool3',
        name: 'Customer Persona Builder',
        description: 'Build detailed customer personas with AI insights',
        category: 'Market Research',
        rating: 4.7,
        reviews: 156,
        price: '$19/month',
        tags: ['customer-research', 'personas'],
        url: 'https://example.com/persona-builder'
      }
    ]
  },
  'enterprise': {
    id: 'enterprise',
    title: 'Enterprise AI Suite',
    description: 'Comprehensive AI solutions for large organizations and enterprises. Features enterprise-grade security, scalable infrastructure, advanced analytics, and integration capabilities for complex business operations.',
    toolCount: 42,
    category: 'Business',
    gradient: 'from-purple-500 to-indigo-500',
    icon: '🏢',
    color: 'purple',
    tools: [
      {
        id: 'tool1',
        name: 'Enterprise Data Lake',
        description: 'Secure and scalable data storage solution',
        category: 'Data Management',
        rating: 4.9,
        reviews: 210,
        price: 'Custom',
        tags: ['data-storage', 'security'],
        url: 'https://example.com/data-lake'
      },
      {
        id: 'tool2',
        name: 'Workflow Automation Suite',
        description: 'Automate complex business processes',
        category: 'Process Automation',
        rating: 4.7,
        reviews: 178,
        price: '$99/month',
        tags: ['automation', 'workflow'],
        url: 'https://example.com/workflow-suite'
      }
    ]
  },
  'creative': {
    id: 'creative',
    title: 'Content Creator Toolkit',
    description: 'AI-powered tools for writers, designers, and digital creators. Offers content generation, image editing, video production, and multimedia enhancement to boost creative output and streamline workflows.',
    toolCount: 38,
    category: 'Creative',
    gradient: 'from-pink-500 to-rose-500',
    icon: '🎨',
    color: 'pink',
    tools: [
      {
        id: 'tool1',
        name: 'AI Copywriter',
        description: 'Generate compelling copy for marketing materials',
        category: 'Writing',
        rating: 4.8,
        reviews: 342,
        price: '$49/month',
        tags: ['writing', 'copy'],
        url: 'https://example.com/ai-copywriter'
      }
    ]
  },
  'developer': {
    id: 'developer',
    title: 'Developer AI Arsenal',
    description: 'Cutting-edge AI tools for software engineers and developers. Provides code generation, bug detection, performance optimization, automated testing, and deployment assistance for modern development teams.',
    toolCount: 31,
    category: 'Technology',
    gradient: 'from-green-500 to-emerald-500',
    icon: '💻',
    color: 'green',
    tools: [
      {
        id: 'tool1',
        name: 'Code Assistant Pro',
        description: 'AI-powered coding assistant with autocomplete',
        category: 'Development',
        rating: 4.9,
        reviews: 512,
        price: '$29/month',
        tags: ['coding', 'autocomplete'],
        url: 'https://example.com/code-assistant'
      }
    ]
  },
  'marketing': {
    id: 'marketing',
    title: 'Marketing AI Hub',
    description: 'Advanced AI tools for marketers and growth professionals. Delivers audience segmentation, campaign optimization, content personalization, conversion tracking, and ROI analytics for data-driven marketing.',
    toolCount: 29,
    category: 'Marketing',
    gradient: 'from-orange-500 to-red-500',
    icon: '📈',
    color: 'orange',
    tools: [
      {
        id: 'tool1',
        name: 'Campaign Optimizer',
        description: 'Optimize marketing campaigns with AI insights',
        category: 'Advertising',
        rating: 4.7,
        reviews: 234,
        price: '$79/month',
        tags: ['campaigns', 'optimization'],
        url: 'https://example.com/campaign-optimizer'
      }
    ]
  },
  'research': {
    id: 'research',
    title: 'Research & Academia',
    description: 'Specialized AI tools for researchers and academic institutions. Enables literature review, data analysis, hypothesis testing, peer collaboration, and publication support for scientific advancement.',
    toolCount: 22,
    category: 'Education',
    gradient: 'from-indigo-500 to-purple-500',
    icon: '🔬',
    color: 'indigo',
    tools: [
      {
        id: 'tool1',
        name: 'Literature Review Assistant',
        description: 'AI-powered literature review tool',
        category: 'Research',
        rating: 4.8,
        reviews: 142,
        price: '$59/month',
        tags: ['research', 'literature'],
        url: 'https://example.com/literature-review'
      }
    ]
  },
  'healthcare': {
    id: 'healthcare',
    title: 'Healthcare AI Solutions',
    description: 'Revolutionary AI tools transforming patient care and medical research. Features diagnostic assistance, treatment planning, drug discovery, patient monitoring, and healthcare administration optimization.',
    toolCount: 35,
    category: 'Healthcare',
    gradient: 'from-teal-500 to-cyan-500',
    icon: '🏥',
    color: 'teal',
    tools: [
      {
        id: 'tool1',
        name: 'Diagnostic Assistant',
        description: 'AI-powered diagnostic support tool',
        category: 'Healthcare',
        rating: 4.9,
        reviews: 89,
        price: 'Custom',
        tags: ['diagnostics', 'healthcare'],
        url: 'https://example.com/diagnostic-assistant'
      }
    ]
  },
  'finance': {
    id: 'finance',
    title: 'Financial Intelligence Suite',
    description: 'AI-powered tools for financial analysis, trading, and risk management. Provides algorithmic trading, fraud detection, credit scoring, portfolio optimization, and regulatory compliance for financial institutions.',
    toolCount: 28,
    category: 'Finance',
    gradient: 'from-yellow-500 to-amber-500',
    icon: '💰',
    color: 'yellow',
    tools: [
      {
        id: 'tool1',
        name: 'Risk Analyzer Pro',
        description: 'Advanced financial risk analysis',
        category: 'Risk Management',
        rating: 4.8,
        reviews: 178,
        price: '$149/month',
        tags: ['risk', 'finance'],
        url: 'https://example.com/risk-analyzer'
      }
    ]
  },
  'education': {
    id: 'education',
    title: 'Educational AI Platform',
    description: 'Transformative AI tools for personalized learning and educational content. Offers adaptive learning paths, student assessment, curriculum development, and virtual tutoring for enhanced educational outcomes.',
    toolCount: 33,
    category: 'Education',
    gradient: 'from-emerald-500 to-green-500',
    icon: '📚',
    color: 'emerald',
    tools: [
      {
        id: 'tool1',
        name: 'Personalized Learning Path',
        description: 'Adaptive learning paths for students',
        category: 'Education',
        rating: 4.7,
        reviews: 267,
        price: '$39/month',
        tags: ['learning', 'education'],
        url: 'https://example.com/learning-path'
      }
    ]
  },
  'legal': {
    id: 'legal',
    title: 'Legal AI Assistant',
    description: 'Advanced AI tools for legal research, document review, and case analysis. Features contract analysis, precedent identification, legal research, compliance monitoring, and litigation strategy support.',
    toolCount: 19,
    category: 'Legal',
    gradient: 'from-slate-500 to-gray-500',
    icon: '⚖️',
    color: 'slate',
    tools: [
      {
        id: 'tool1',
        name: 'Contract Analyzer',
        description: 'AI-powered contract analysis tool',
        category: 'Legal',
        rating: 4.8,
        reviews: 123,
        price: '$89/month',
        tags: ['contracts', 'legal'],
        url: 'https://example.com/contract-analyzer'
      }
    ]
  },
  'design': {
    id: 'design',
    title: 'Design & Architecture',
    description: 'AI tools for architects, interior designers, and creative professionals. Provides generative design, space planning, material selection, rendering, and project visualization for creative industries.',
    toolCount: 26,
    category: 'Creative',
    gradient: 'from-violet-500 to-purple-500',
    icon: '🏛️',
    color: 'violet',
    tools: [
      {
        id: 'tool1',
        name: 'Generative Design Studio',
        description: 'AI-powered generative design tool',
        category: 'Design',
        rating: 4.9,
        reviews: 210,
        price: '$69/month',
        tags: ['design', 'architecture'],
        url: 'https://example.com/generative-design'
      }
    ]
  },
  'media': {
    id: 'media',
    title: 'Media & Entertainment',
    description: 'AI solutions for content production, editing, and distribution. Features automated editing, content recommendation, audience analytics, copyright protection, and multi-platform distribution tools.',
    toolCount: 31,
    category: 'Entertainment',
    gradient: 'from-fuchsia-500 to-pink-500',
    icon: '🎬',
    color: 'fuchsia',
    tools: [
      {
        id: 'tool1',
        name: 'Content Recommendation Engine',
        description: 'AI-powered content recommendation',
        category: 'Media',
        rating: 4.7,
        reviews: 189,
        price: '$59/month',
        tags: ['content', 'recommendation'],
        url: 'https://example.com/recommendation-engine'
      }
    ]
  },
  'ecommerce': {
    id: 'ecommerce',
    title: 'E-commerce AI',
    description: 'AI tools for inventory management, customer service, and sales optimization. Includes demand forecasting, personalized recommendations, chatbots, pricing optimization, and supply chain automation.',
    toolCount: 27,
    category: 'Retail',
    gradient: 'from-rose-500 to-red-500',
    icon: '🛒',
    color: 'rose',
    tools: [
      {
        id: 'tool1',
        name: 'Demand Forecaster',
        description: 'Predict product demand with AI',
        category: 'E-commerce',
        rating: 4.8,
        reviews: 156,
        price: '$49/month',
        tags: ['demand', 'forecasting'],
        url: 'https://example.com/demand-forecaster'
      }
    ]
  },
  'manufacturing': {
    id: 'manufacturing',
    title: 'Industrial AI',
    description: 'Smart manufacturing and supply chain optimization tools. Provides quality control, predictive maintenance, process optimization, inventory management, and logistics coordination for industrial operations.',
    toolCount: 23,
    category: 'Industry',
    gradient: 'from-cyan-500 to-blue-500',
    icon: '🏭',
    color: 'cyan',
    tools: [
      {
        id: 'tool1',
        name: 'Predictive Maintenance Pro',
        description: 'AI-powered equipment maintenance',
        category: 'Manufacturing',
        rating: 4.9,
        reviews: 98,
        price: '$129/month',
        tags: ['maintenance', 'manufacturing'],
        url: 'https://example.com/predictive-maintenance'
      }
    ]
  },
  'travel': {
    id: 'travel',
    title: 'Travel & Hospitality',
    description: 'AI solutions for travel planning, hospitality management, and customer experience. Includes personalized recommendations, dynamic pricing, smart booking systems, and predictive analytics for the travel industry.',
    toolCount: 21,
    category: 'Travel',
    gradient: 'from-sky-500 to-cyan-500',
    icon: '✈️',
    color: 'sky',
    tools: [
      {
        id: 'tool1',
        name: 'Dynamic Pricing Engine',
        description: 'Optimize pricing with AI algorithms',
        category: 'Travel',
        rating: 4.7,
        reviews: 134,
        price: '$79/month',
        tags: ['pricing', 'travel'],
        url: 'https://example.com/pricing-engine'
      }
    ]
  },
  'gaming': {
    id: 'gaming',
    title: 'Game Development AI',
    description: 'AI tools for game design, NPC behavior, and procedural content generation. Features intelligent character AI, automated level design, player behavior analytics, and real-time content adaptation.',
    toolCount: 25,
    category: 'Entertainment',
    gradient: 'from-amber-500 to-yellow-500',
    icon: '🎮',
    color: 'amber',
    tools: [
      {
        id: 'tool1',
        name: 'NPC Behavior Engine',
        description: 'Intelligent non-player character AI',
        category: 'Gaming',
        rating: 4.8,
        reviews: 210,
        price: '$69/month',
        tags: ['npc', 'gaming'],
        url: 'https://example.com/npc-engine'
      }
    ]
  },
  'real-estate': {
    id: 'real-estate',
    title: 'Real Estate Intelligence',
    description: 'AI-powered property valuation, market analysis, virtual tours, and investment insights. Leverage predictive modeling and computer vision for smarter real estate decisions.',
    toolCount: 18,
    category: 'Real Estate',
    gradient: 'from-stone-500 to-gray-500',
    icon: '🏠',
    color: 'stone',
    tools: [
      {
        id: 'tool1',
        name: 'Property Valuation AI',
        description: 'Accurate property valuation with AI',
        category: 'Real Estate',
        rating: 4.9,
        reviews: 145,
        price: '$59/month',
        tags: ['valuation', 'real-estate'],
        url: 'https://example.com/property-valuation'
      }
    ]
  },
  'agriculture': {
    id: 'agriculture',
    title: 'Precision Agriculture AI',
    description: 'Smart farming solutions with crop monitoring, yield prediction, pest detection, and automated irrigation. Harness satellite imagery and IoT sensors for sustainable agriculture.',
    toolCount: 22,
    category: 'Agriculture',
    gradient: 'from-lime-500 to-green-500',
    icon: '🌾',
    color: 'lime',
    tools: [
      {
        id: 'tool1',
        name: 'Crop Monitoring System',
        description: 'Satellite-based crop health monitoring',
        category: 'Agriculture',
        rating: 4.8,
        reviews: 123,
        price: '$89/month',
        tags: ['monitoring', 'agriculture'],
        url: 'https://example.com/crop-monitoring'
      }
    ]
  },
  'energy': {
    id: 'energy',
    title: 'Energy & Utilities AI',
    description: 'Smart grid optimization, predictive maintenance, energy consumption forecasting, and renewable energy management. Drive sustainability and efficiency in energy sectors.',
    toolCount: 19,
    category: 'Energy',
    gradient: 'from-amber-600 to-orange-600',
    icon: '⚡',
    color: 'amber',
    tools: [
      {
        id: 'tool1',
        name: 'Energy Consumption Forecast',
        description: 'Predict energy usage with AI',
        category: 'Energy',
        rating: 4.7,
        reviews: 98,
        price: '$99/month',
        tags: ['energy', 'forecasting'],
        url: 'https://example.com/energy-forecast'
      }
    ]
  }
};

export default function CollectionDetail({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [collection, setCollection] = useState<Collection | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      const collectionId = params.id;
      const foundCollection = collectionData[collectionId];
      
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
          <p className="text-xl">Loading collection...</p>
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
            <div className={`w-24 h-24 rounded-3xl bg-gradient-to-r ${collection.gradient} flex items-center justify-center text-4xl`}>
              {collection.icon}
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
                  {collection.title}
                </h1>
                <span className="px-4 py-2 bg-gray-800 rounded-full text-gray-300">
                  {collection.category}
                </span>
              </div>
              <p className="text-2xl text-gray-300 max-w-4xl mb-6">
                {collection.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-gray-300">{collection.toolCount} AI Tools</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-cyan-500 mr-2"></div>
                  <span className="text-gray-300">Curated Collection</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                  <span className="text-gray-300">Regularly Updated</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Overview */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-6 border border-gray-700/50 backdrop-blur-sm">
              <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
                {collection.toolCount}
              </div>
              <div className="text-gray-400">AI Tools</div>
            </div>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-6 border border-gray-700/50 backdrop-blur-sm">
              <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                4.8/5
              </div>
              <div className="text-gray-400">Avg. Rating</div>
            </div>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-6 border border-gray-700/50 backdrop-blur-sm">
              <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400 mb-2">
                98%
              </div>
              <div className="text-gray-400">User Satisfaction</div>
            </div>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-6 border border-gray-700/50 backdrop-blur-sm">
              <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-400 mb-2">
                24/7
              </div>
              <div className="text-gray-400">Support Available</div>
            </div>
          </div>
        </section>

        {/* Tools Grid */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Featured AI Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collection.tools.map((tool, index) => (
              <motion.div
                key={tool.id}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-6 border border-gray-700/50 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold group-hover:text-purple-300 transition-colors">
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
                    className="px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl font-bold hover:from-purple-500 hover:to-cyan-500 transition-all"
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
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400">
              Ready to Transform Your Workflow?
            </h2>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
              Unlock the full potential of {collection.title} with our comprehensive suite of AI tools designed to boost your productivity and innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/pro" className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl font-bold text-xl hover:from-green-500 hover:to-emerald-500 transition-all shadow-2xl shadow-green-500/20">
                Get Started Today
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl font-bold text-xl hover:from-purple-500 hover:to-cyan-500 transition-all shadow-2xl shadow-purple-500/20">
                Schedule a Demo
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}