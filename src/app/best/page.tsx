'use client';

import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Link from 'next/link';

// Revolutionary 3D Badge Component
const PremiumBadge = ({ text, variant = 'featured' }: { text: string; variant?: string }) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'featured':
        return 'from-purple-600 to-pink-600';
      case 'trending':
        return 'from-amber-500 to-orange-500';
      case 'new':
        return 'from-emerald-500 to-teal-500';
      case 'exclusive':
        return 'from-cyan-500 to-blue-500';
      case 'verified':
        return 'from-green-500 to-emerald-500';
      case 'revolutionary':
        return 'from-fuchsia-500 to-purple-500';
      case 'pinnacle':
        return 'from-rose-500 to-pink-500';
      default:
        return 'from-purple-600 to-pink-600';
    }
  };

  return (
    <div className={`relative inline-block px-4 py-2 bg-gradient-to-r ${getVariantStyles()} text-white text-sm font-bold rounded-full transform transition-all duration-500 hover:scale-110`}>
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-transparent"></div>
      <div className="relative z-10 flex items-center">
        {variant === 'verified' && (
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        )}
        {text}
      </div>
      <div className="absolute inset-0 rounded-full shadow-lg shadow-current/30"></div>
    </div>
  );
};

// Revolutionary 3D Card Component
const FuturisticCard = ({ 
  children, 
  className = '',
  glowColor = 'purple'
}: { 
  children: React.ReactNode; 
  className?: string;
  glowColor?: string;
}) => {
  const glowColors: Record<string, string> = {
    purple: 'shadow-purple-500/30',
    blue: 'shadow-blue-500/30',
    green: 'shadow-emerald-500/30',
    amber: 'shadow-amber-500/30',
    cyan: 'shadow-cyan-500/30',
    rose: 'shadow-rose-500/30',
    fuchsia: 'shadow-fuchsia-500/30'
  };

  return (
    <motion.div
      className={`relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-2xl border border-gray-700/50 rounded-2xl p-6 hover:border-purple-500/60 transition-all duration-300 group overflow-hidden ${className}`}
      whileHover={{ 
        y: -10, 
        boxShadow: `0 25px 50px -12px rgba(139, 92, 246, 0.25)`,
        scale: 1.02
      }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse"></div>
      </div>
      
      {/* Shimmer Effect */}
      <div className="absolute inset-0 rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-full animate-shimmer"></div>
      </div>
      
      {/* Glow Border */}
      <div className={`absolute inset-0 rounded-2xl shadow-inner shadow-${glowColors[glowColor] || 'purple-500/30'} pointer-events-none`}></div>
      
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

// Revolutionary Particle Background Component
const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {/* Floating Particles */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Central Orb */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-purple-600/20 to-transparent rounded-full"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

// Revolutionary Orbit Visualization Component
const RevolutionaryOrbit = () => {
  return (
    <div className="relative w-64 h-64 mx-auto mb-12">
      {/* Central Core */}
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-2xl shadow-purple-500/50"
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: 360
        }}
        transition={{ 
          scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 20, repeat: Infinity, ease: "linear" }
        }}
      />
      
      {/* Orbiting Elements */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full shadow-lg"
          animate={{
            rotate: 360,
            x: Math.cos((i * 45 * Math.PI) / 180) * 100,
            y: Math.sin((i * 45 * Math.PI) / 180) * 100,
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            x: { duration: 20, repeat: Infinity, ease: "linear" },
            y: { duration: 20, repeat: Infinity, ease: "linear" },
          }}
        />
      ))}
      
      {/* Outer Ring */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-purple-500/30"></div>
    </div>
  );
};

// AI Innovation Timeline Component
const InnovationTimeline = () => {
  const milestones = [
    { year: '2020', event: 'Foundation of AI Nexus', description: 'World\'s first comprehensive AI tools directory launched' },
    { year: '2022', event: '100K Tools Milestone', description: 'Reached 100,000 curated AI tools' },
    { year: '2023', event: 'Quantum AI Integration', description: 'First quantum-enhanced AI tools added' },
    { year: '2024', event: 'Global Expansion', description: 'Launched in 15 languages with regional collections' },
    { year: '2025', event: '1M Tools Achievement', description: 'World\'s largest AI tools directory with 1 million tools' },
    { year: '2026', event: 'NeuroCognitive Era', description: 'Introduction of next-gen cognitive AI systems' }
  ];

  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
      
      <div className="space-y-12">
        {milestones.map((milestone, index) => (
          <motion.div
            key={index}
            className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
              <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                {milestone.year}
              </div>
              <h3 className="text-xl font-bold text-white mt-2">{milestone.event}</h3>
              <p className="text-gray-400 mt-1">{milestone.description}</p>
            </div>
            
            <div className="relative z-10">
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 border-4 border-gray-900"></div>
            </div>
            
            <div className="w-1/2"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Expert Insights Carousel
const ExpertInsights = () => {
  const insights = [
    {
      quote: "AI Nexus has revolutionized how we discover and implement AI solutions. The curated collections save us countless hours of research.",
      author: "Dr. Elena Rodriguez",
      position: "Chief AI Officer, Quantum Innovations",
      avatar: "ER"
    },
    {
      quote: "The Best of AI Nexus page showcases the most groundbreaking tools that are shaping the future of artificial intelligence.",
      author: "Prof. Michael Chen",
      position: "Director, Cognitive Systems Lab",
      avatar: "MC"
    },
    {
      quote: "As an AI researcher, I rely on AI Nexus to stay ahead of emerging technologies. The quality and curation are unmatched.",
      author: "Dr. Sarah Johnson",
      position: "Lead Researcher, NeuroTech Institute",
      avatar: "SJ"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {insights.map((insight, index) => (
        <FuturisticCard key={index} glowColor="blue">
          <div className="text-5xl text-purple-500/20 mb-4">❝</div>
          <p className="text-gray-300 mb-6 italic">"{insight.quote}"</p>
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mr-4">
              <span className="font-bold text-white">{insight.avatar}</span>
            </div>
            <div>
              <div className="font-bold text-white">{insight.author}</div>
              <div className="text-gray-500 text-sm">{insight.position}</div>
            </div>
          </div>
        </FuturisticCard>
      ))}
    </div>
  );
};

// Category Showcase Component
const CategoryShowcase = () => {
  const categories = [
    { name: 'Quantum AI', icon: '⚛️', tools: '127K', color: 'from-purple-500 to-pink-500' },
    { name: 'NeuroCognitive', icon: '🧠', tools: '98K', color: 'from-blue-500 to-cyan-500' },
    { name: 'Generative', icon: '🎨', tools: '245K', color: 'from-emerald-500 to-teal-500' },
    { name: 'Predictive', icon: '🔮', tools: '87K', color: 'from-amber-500 to-orange-500' },
    { name: 'Robotic', icon: '🦾', tools: '64K', color: 'from-rose-500 to-red-500' },
    { name: 'Blockchain AI', icon: '🔗', tools: '42K', color: 'from-violet-500 to-purple-500' }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
      {categories.map((category, index) => (
        <motion.div
          key={index}
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 text-center hover:border-purple-500/60 transition-all duration-300 group"
          whileHover={{ y: -10 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <div className={`text-4xl mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
            {category.icon}
          </div>
          <h3 className="text-lg font-bold text-white mb-2">{category.name}</h3>
          <div className="text-gray-400 text-sm">{category.tools} tools</div>
        </motion.div>
      ))}
    </div>
  );
};

// Trending Now Section
const TrendingNow = () => {
  const trendingItems = [
    { name: 'NeuroSynthesis Studio', type: 'Tool', category: 'Cognitive AI', trend: '+42%' },
    { name: 'Quantum Intelligence Suite', type: 'Collection', category: 'Quantum AI', trend: '+38%' },
    { name: 'Temporal Prediction Guide', type: 'Playbook', category: 'Analytics', trend: '+35%' },
    { name: 'HyperDimensional Processor', type: 'Tool', category: 'Computing', trend: '+32%' }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6">
      <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
        <span className="mr-3">🔥</span> Trending Now
      </h3>
      <div className="space-y-4">
        {trendingItems.map((item, index) => (
          <div key={index} className="flex items-center justify-between p-4 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-colors">
            <div>
              <div className="font-bold text-white">{item.name}</div>
              <div className="flex items-center text-sm text-gray-400 mt-1">
                <span className="bg-gray-600 px-2 py-1 rounded mr-2">{item.type}</span>
                <span>{item.category}</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-green-400 font-bold">{item.trend}</div>
              <div className="text-gray-500 text-sm">this week</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Awards & Recognition Section
const AwardsRecognition = () => {
  const awards = [
    { name: 'Best AI Platform 2025', issuer: 'Tech Innovators Award', year: '2025' },
    { name: 'Editor\'s Choice', issuer: 'AI Today Magazine', year: '2024' },
    { name: 'Top Developer Tool', issuer: 'DevTools Conference', year: '2024' },
    { name: 'Innovation Excellence', issuer: 'Future Tech Summit', year: '2023' }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {awards.map((award, index) => (
        <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 text-center">
          <div className="text-4xl mb-4">🏆</div>
          <h3 className="text-lg font-bold text-white mb-2">{award.name}</h3>
          <div className="text-gray-400 text-sm">{award.issuer}</div>
          <div className="text-gray-500 text-sm mt-1">{award.year}</div>
        </div>
      ))}
    </div>
  );
};

// Revolutionary Interactive Showcase
const InteractiveShowcase = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  
  const showcaseItems = [
    { id: 1, title: 'Quantum Neural Engine', category: 'Computing', icon: '⚛️' },
    { id: 2, title: 'NeuroCognitive Framework', category: 'AI Systems', icon: '🧠' },
    { id: 3, title: 'Temporal Intelligence', category: 'Analytics', icon: '🔮' },
    { id: 4, title: 'Generative Synthesis', category: 'Creation', icon: '🎨' }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8">
      <h3 className="text-2xl font-bold text-white mb-8 text-center">Interactive AI Showcase</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {showcaseItems.map((item) => (
          <motion.div
            key={item.id}
            className="relative bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-xl p-6 text-center cursor-pointer border border-gray-600/50"
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
            whileHover={{ scale: 1.05 }}
            animate={{
              y: hoveredItem === item.id ? -10 : 0,
              borderColor: hoveredItem === item.id ? '#c084fc' : '#4b5563'
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h4 className="font-bold text-white mb-2">{item.title}</h4>
            <p className="text-gray-400 text-sm">{item.category}</p>
            {hoveredItem === item.id && (
              <motion.div
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// AI Impact Metrics
const ImpactMetrics = () => {
  const metrics = [
    { value: '2.3B', label: 'Hours Saved', icon: '⏱️' },
    { value: '847K', label: 'Projects Launched', icon: '🚀' },
    { value: '96%', label: 'User Satisfaction', icon: '😊' },
    { value: '42', label: 'Countries Served', icon: '🌍' }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <motion.div
          key={index}
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 text-center"
          whileHover={{ y: -5 }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="text-3xl mb-3">{metric.icon}</div>
          <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
            {metric.value}
          </div>
          <div className="text-gray-400">{metric.label}</div>
        </motion.div>
      ))}
    </div>
  );
};

// Future Vision Section
const FutureVision = () => {
  return (
    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8">
      <h3 className="text-2xl font-bold text-white mb-6 text-center">Our Vision for Tomorrow</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { 
            title: 'AGI Integration', 
            description: 'Seamless integration with artificial general intelligence systems',
            icon: '🤖'
          },
          { 
            title: 'Neural Interfaces', 
            description: 'Direct brain-computer interfaces for intuitive AI control',
            icon: '🧠'
          },
          { 
            title: 'Quantum Consciousness', 
            description: 'AI systems with quantum-enhanced awareness and creativity',
            icon: '✨'
          }
        ].map((vision, index) => (
          <div key={index} className="text-center p-6 bg-gray-700/30 rounded-xl">
            <div className="text-4xl mb-4">{vision.icon}</div>
            <h4 className="text-xl font-bold text-white mb-3">{vision.title}</h4>
            <p className="text-gray-400">{vision.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Interactive 3D Experience Preview
const ExperiencePreview = () => {
  const [rotation, setRotation] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 text-center">
      <h3 className="text-2xl font-bold text-white mb-6">Immersive 3D Experience</h3>
      <div className="relative w-64 h-64 mx-auto mb-6">
        <div 
          className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-20"
          style={{ transform: `rotate(${rotation}deg)` }}
        />
        <div 
          className="absolute inset-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 opacity-30"
          style={{ transform: `rotate(${-rotation}deg)` }}
        />
        <div className="absolute inset-8 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 opacity-40" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center">
          <span className="text-2xl">🚀</span>
        </div>
      </div>
      <p className="text-gray-400 mb-4">Experience the future of AI interaction</p>
      <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-bold hover:from-purple-500 hover:to-pink-500 transition-all">
        Preview Experience
      </button>
    </div>
  );
};

export default function BestPage() {
  const [activeTab, setActiveTab] = useState('tools');
  const [particles, setParticles] = useState<any[]>([]);

  // Mock data for best tools
  const bestTools = [
    {
      id: '1',
      name: 'Quantum Neural Engine Pro',
      description: 'Next-generation AI processing with quantum-enhanced neural networks for unparalleled computational capabilities.',
      category: 'Quantum Computing',
      rating: 4.9,
      reviewCount: 2450,
      price: 'From $199/mo',
      isFeatured: true,
      isNew: false,
      isTrending: true,
      isExclusive: true,
      isVerified: true,
      isRevolutionary: true,
      website: 'https://www.openai.com/chatgpt',
      color: 'purple'
    },
    {
      id: '2',
      name: 'NeuroSynthesis Studio',
      description: 'Advanced neuro-symbolic AI that combines deep learning with symbolic reasoning for human-like cognition.',
      category: 'Cognitive AI',
      rating: 4.9,
      reviewCount: 1890,
      price: 'From $149/mo',
      isFeatured: true,
      isNew: true,
      isTrending: true,
      isExclusive: false,
      isVerified: true,
      isRevolutionary: false,
      website: 'https://www.midjourney.com',
      color: 'blue'
    },
    {
      id: '3',
      name: 'HyperDimensional Processor',
      description: 'Multi-dimensional data processing engine that operates beyond traditional computational limits.',
      category: 'Computing',
      rating: 4.8,
      reviewCount: 3560,
      price: 'From $299/mo',
      isFeatured: true,
      isNew: false,
      isTrending: true,
      isExclusive: true,
      isVerified: true,
      isRevolutionary: true,
      website: 'https://github.com/features/copilot',
      color: 'green'
    },
    {
      id: '4',
      name: 'Temporal Intelligence Matrix',
      description: 'Predictive analytics platform with temporal awareness for unprecedented foresight capabilities.',
      category: 'Predictive Analytics',
      rating: 4.8,
      reviewCount: 2890,
      price: 'From $179/mo',
      isFeatured: true,
      isNew: false,
      isTrending: true,
      isExclusive: false,
      isVerified: true,
      isRevolutionary: false,
      website: 'https://www.notion.so',
      color: 'amber'
    },
    {
      id: '5',
      name: 'Cognitive Fusion Engine',
      description: 'Revolutionary AI that merges multiple cognitive architectures for superior problem-solving abilities.',
      category: 'Cognitive Systems',
      rating: 4.9,
      reviewCount: 3120,
      price: 'From $249/mo',
      isFeatured: true,
      isNew: true,
      isTrending: false,
      isExclusive: true,
      isVerified: true,
      isRevolutionary: true,
      website: 'https://www.anthropic.com',
      color: 'cyan'
    },
    {
      id: '6',
      name: 'Neural Quantum Bridge',
      description: 'Breakthrough technology connecting classical neural networks with quantum computing resources.',
      category: 'Quantum AI',
      rating: 4.7,
      reviewCount: 2750,
      price: 'From $349/mo',
      isFeatured: false,
      isNew: true,
      isTrending: true,
      isExclusive: true,
      isVerified: true,
      isRevolutionary: true,
      website: 'https://www.ibm.com/quantum-computing',
      color: 'purple'
    },
    {
      id: '7',
      name: 'Generative Synthesis Platform',
      description: 'Ultimate creative AI platform for generating text, images, audio, and video with unprecedented quality.',
      category: 'Generative AI',
      rating: 4.9,
      reviewCount: 4210,
      price: 'From $199/mo',
      isFeatured: true,
      isNew: true,
      isTrending: true,
      isExclusive: true,
      isVerified: true,
      isRevolutionary: true,
      website: 'https://www.runwayml.com',
      color: 'rose'
    },
    {
      id: '8',
      name: 'Autonomous Intelligence Core',
      description: 'Self-evolving AI system that continuously learns and adapts to new challenges without human intervention.',
      category: 'Autonomous Systems',
      rating: 4.8,
      reviewCount: 1980,
      price: 'From $499/mo',
      isFeatured: true,
      isNew: false,
      isTrending: true,
      isExclusive: true,
      isVerified: true,
      isRevolutionary: true,
      website: 'https://www.deepmind.com',
      color: 'fuchsia'
    }
  ];

  // Mock data for best collections
  const bestCollections = [
    {
      id: '1',
      name: 'Quantum Intelligence Suite',
      description: 'The ultimate collection of quantum-enhanced AI tools for next-level computational intelligence.',
      toolsCount: 42,
      category: 'Quantum AI',
      isFeatured: true,
      isNew: false,
      isTrending: true,
      isExclusive: true,
      isRevolutionary: true,
      color: 'purple'
    },
    {
      id: '2',
      name: 'NeuroCognitive Framework',
      description: 'Comprehensive tools for building human-like cognitive systems with advanced reasoning capabilities.',
      toolsCount: 38,
      category: 'Cognitive AI',
      isFeatured: true,
      isNew: true,
      isTrending: true,
      isExclusive: false,
      isRevolutionary: false,
      color: 'blue'
    },
    {
      id: '3',
      name: 'HyperDimensional Toolkit',
      description: 'Essential tools for working with multi-dimensional data and beyond-traditional computing paradigms.',
      toolsCount: 31,
      category: 'Computing',
      isFeatured: true,
      isNew: false,
      isTrending: false,
      isExclusive: true,
      isRevolutionary: true,
      color: 'green'
    },
    {
      id: '4',
      name: 'Temporal Prediction Arsenal',
      description: 'Advanced tools for temporal analytics and predictive modeling with unprecedented accuracy.',
      toolsCount: 29,
      category: 'Analytics',
      isFeatured: false,
      isNew: true,
      isTrending: true,
      isExclusive: false,
      isRevolutionary: false,
      color: 'amber'
    },
    {
      id: '5',
      name: 'Generative Masterclass',
      description: 'Premium collection of tools for creative AI generation across text, image, audio, and video domains.',
      toolsCount: 47,
      category: 'Generative AI',
      isFeatured: true,
      isNew: true,
      isTrending: true,
      isExclusive: true,
      isRevolutionary: true,
      color: 'cyan'
    },
    {
      id: '6',
      name: 'Enterprise AI Stack',
      description: 'Complete suite of enterprise-grade AI tools for business transformation and operational excellence.',
      toolsCount: 52,
      category: 'Business AI',
      isFeatured: true,
      isNew: false,
      isTrending: true,
      isExclusive: true,
      isRevolutionary: true,
      color: 'purple'
    },
    {
      id: '7',
      name: 'Autonomous Systems Bundle',
      description: 'Cutting-edge tools for developing self-directed AI systems that operate independently.',
      toolsCount: 35,
      category: 'Autonomous AI',
      isFeatured: true,
      isNew: true,
      isTrending: true,
      isExclusive: true,
      isRevolutionary: true,
      color: 'rose'
    },
    {
      id: '8',
      name: 'Neural Interface Collection',
      description: 'Specialized tools for creating brain-computer interfaces and neural enhancement technologies.',
      toolsCount: 28,
      category: 'Neural Tech',
      isFeatured: false,
      isNew: true,
      isTrending: true,
      isExclusive: true,
      isRevolutionary: true,
      color: 'fuchsia'
    }
  ];

  // Mock data for best playbooks
  const bestPlaybooks = [
    {
      id: '1',
      title: 'Quantum AI Implementation',
      description: 'Master the revolutionary principles of quantum-enhanced artificial intelligence systems.',
      author: 'Dr. Elena Rodriguez',
      readTime: '32 min read',
      rating: 4.9,
      students: 2140,
      category: 'Quantum AI',
      isFeatured: true,
      isNew: false,
      isTrending: true,
      isExclusive: true,
      isRevolutionary: true,
      color: 'purple'
    },
    {
      id: '2',
      title: 'NeuroCognitive Architecture',
      description: 'Design and build human-like cognitive systems with advanced neural-symbolic integration.',
      author: 'Prof. Michael Chen',
      readTime: '41 min read',
      rating: 4.8,
      students: 1880,
      category: 'Cognitive Systems',
      isFeatured: true,
      isNew: true,
      isTrending: true,
      isExclusive: false,
      isRevolutionary: false,
      color: 'blue'
    },
    {
      id: '3',
      title: 'HyperDimensional Computing',
      description: 'Unlock the potential of multi-dimensional data processing beyond traditional limits.',
      author: 'Dr. Sarah Johnson',
      readTime: '35 min read',
      rating: 4.7,
      students: 1660,
      category: 'Computing',
      isFeatured: false,
      isNew: false,
      isTrending: false,
      isExclusive: true,
      isRevolutionary: true,
      color: 'green'
    },
    {
      id: '4',
      title: 'Temporal Intelligence Systems',
      description: 'Build predictive systems with temporal awareness for unprecedented foresight capabilities.',
      author: 'Dr. Robert Kim',
      readTime: '38 min read',
      rating: 4.8,
      students: 1920,
      category: 'Predictive Systems',
      isFeatured: true,
      isNew: false,
      isTrending: true,
      isExclusive: false,
      isRevolutionary: false,
      color: 'amber'
    },
    {
      id: '5',
      title: 'Generative AI Mastery',
      description: 'Comprehensive guide to mastering all forms of generative artificial intelligence for creative applications.',
      author: 'Alexandra Dubois',
      readTime: '45 min read',
      rating: 4.9,
      students: 2450,
      category: 'Generative AI',
      isFeatured: true,
      isNew: true,
      isTrending: true,
      isExclusive: true,
      isRevolutionary: true,
      color: 'cyan'
    },
    {
      id: '6',
      title: 'Enterprise AI Transformation',
      description: 'Strategic playbook for implementing AI at scale across enterprise organizations with proven methodologies.',
      author: 'James Wilson',
      readTime: '52 min read',
      rating: 4.8,
      students: 1780,
      category: 'Business Strategy',
      isFeatured: true,
      isNew: false,
      isTrending: true,
      isExclusive: true,
      isRevolutionary: true,
      color: 'purple'
    },
    {
      id: '7',
      title: 'Autonomous AI Development',
      description: 'Create self-evolving AI systems that learn and adapt without human intervention.',
      author: 'Dr. Marcus Green',
      readTime: '48 min read',
      rating: 4.9,
      students: 1540,
      category: 'Autonomous Systems',
      isFeatured: true,
      isNew: true,
      isTrending: true,
      isExclusive: true,
      isRevolutionary: true,
      color: 'rose'
    },
    {
      id: '8',
      title: 'Neural Interface Engineering',
      description: 'Design and implement brain-computer interfaces for next-generation human-AI interaction.',
      author: 'Dr. Lisa Thompson',
      readTime: '55 min read',
      rating: 4.8,
      students: 1320,
      category: 'Neural Tech',
      isFeatured: false,
      isNew: true,
      isTrending: true,
      isExclusive: true,
      isRevolutionary: true,
      color: 'fuchsia'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <RevolutionaryOrbit />
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-purple-400 to-pink-400"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Best of AI Nexus
          </motion.h1>
          <motion.p 
            className="text-2xl text-gray-300 max-w-4xl mx-auto font-light mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover the pinnacle of artificial intelligence innovation
          </motion.p>
          
          {/* Hero Badges */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <PremiumBadge text="World's Largest AI Directory" variant="featured" />
            <PremiumBadge text="1M+ Curated Tools" variant="trending" />
            <PremiumBadge text="Expert Verified" variant="verified" />
            <PremiumBadge text="Revolutionary" variant="revolutionary" />
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            { value: '1M+', label: 'AI Tools', icon: '🤖' },
            { value: '50K+', label: 'Collections', icon: '📦' },
            { value: '2K+', label: 'Playbooks', icon: '📘' },
            { value: '99%', label: 'Satisfaction', icon: '😊' }
          ].map((stat, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 text-center hover:border-purple-500/60 transition-all">
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Category Showcase */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-400">
            Explore by Category
          </h2>
          <CategoryShowcase />
        </motion.div>

        {/* Impact Metrics */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-400">
            Global AI Impact
          </h2>
          <ImpactMetrics />
        </motion.div>

        {/* Tabs */}
        <motion.div 
          className="flex justify-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div className="inline-flex p-2 bg-gray-800/50 backdrop-blur-sm rounded-3xl border border-gray-700 shadow-2xl">
            {[
              { id: 'tools', label: 'Best Tools', icon: '🔧' },
              { id: 'collections', label: 'Best Collections', icon: '📦' },
              { id: 'playbooks', label: 'Best Playbooks', icon: '📘' }
            ].map((tab) => (
              <button
                key={tab.id}
                className={`px-8 py-4 rounded-2xl font-bold transition-all flex items-center space-x-2 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-2xl shadow-purple-500/30'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Content based on active tab */}
        {activeTab === 'tools' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-20"
          >
            {bestTools.map((tool, index) => (
              <FuturisticCard key={tool.id} glowColor={tool.color}>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300 mb-2">
                      {tool.name}
                    </h3>
                    <span className="text-sm bg-gray-700/60 text-gray-300 px-3 py-1 rounded-full">
                      {tool.category}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1 justify-end">
                    {tool.isFeatured && <PremiumBadge text="FEATURED" variant="featured" />}
                    {tool.isNew && <PremiumBadge text="NEW" variant="new" />}
                    {tool.isTrending && <PremiumBadge text="TRENDING" variant="trending" />}
                    {tool.isExclusive && <PremiumBadge text="EXCLUSIVE" variant="exclusive" />}
                    {tool.isVerified && <PremiumBadge text="VERIFIED" variant="verified" />}
                    {tool.isRevolutionary && <PremiumBadge text="REVOLUTIONARY" variant="revolutionary" />}
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                  {tool.description}
                </p>
                
                <div className="flex items-center mb-6">
                  <div className="flex items-center bg-gray-700/40 rounded-lg px-3 py-2">
                    <svg 
                      className="w-5 h-5 text-amber-400 mr-2" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-gray-200 font-bold">{tool.rating.toFixed(1)}</span>
                  </div>
                  <span className="text-gray-500 mx-3">•</span>
                  <span className="text-gray-400 text-sm">{tool.reviewCount.toLocaleString()} reviews</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                    {tool.price}
                  </span>
                  <Link 
                    href={tool.website} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-bold hover:from-purple-500 hover:to-pink-500 transition-all flex items-center shadow-2xl shadow-purple-500/30 group text-sm"
                  >
                    Visit Site
                    <svg 
                      className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </Link>
                </div>
              </FuturisticCard>
            ))}
          </motion.div>
        )}

        {activeTab === 'collections' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-20"
          >
            {bestCollections.map((collection, index) => (
              <FuturisticCard key={collection.id} glowColor={collection.color}>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300 mb-2">
                      {collection.name}
                    </h3>
                    <span className="text-sm bg-gray-700/60 text-gray-300 px-3 py-1 rounded-full">
                      {collection.category}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1 justify-end">
                    {collection.isFeatured && <PremiumBadge text="FEATURED" variant="featured" />}
                    {collection.isNew && <PremiumBadge text="NEW" variant="new" />}
                    {collection.isTrending && <PremiumBadge text="TRENDING" variant="trending" />}
                    {collection.isExclusive && <PremiumBadge text="EXCLUSIVE" variant="exclusive" />}
                    {collection.isRevolutionary && <PremiumBadge text="REVOLUTIONARY" variant="revolutionary" />}
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                  {collection.description}
                </p>
                
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                    {collection.toolsCount} tools
                  </span>
                  <Link 
                    href={`/collections/${collection.id}`}
                    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-bold hover:from-purple-500 hover:to-pink-500 transition-all flex items-center shadow-2xl shadow-purple-500/30 group text-sm"
                  >
                    Explore
                    <svg 
                      className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </Link>
                </div>
              </FuturisticCard>
            ))}
          </motion.div>
        )}

        {activeTab === 'playbooks' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-20"
          >
            {bestPlaybooks.map((playbook, index) => (
              <FuturisticCard key={playbook.id} glowColor={playbook.color}>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300 mb-2">
                      {playbook.title}
                    </h3>
                    <span className="text-sm bg-gray-700/60 text-gray-300 px-3 py-1 rounded-full">
                      {playbook.category}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1 justify-end">
                    {playbook.isFeatured && <PremiumBadge text="FEATURED" variant="featured" />}
                    {playbook.isNew && <PremiumBadge text="NEW" variant="new" />}
                    {playbook.isTrending && <PremiumBadge text="TRENDING" variant="trending" />}
                    {playbook.isExclusive && <PremiumBadge text="EXCLUSIVE" variant="exclusive" />}
                    {playbook.isRevolutionary && <PremiumBadge text="REVOLUTIONARY" variant="revolutionary" />}
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                  {playbook.description}
                </p>
                
                <div className="flex items-center mb-6">
                  <div className="flex items-center bg-gray-700/40 rounded-lg px-3 py-2">
                    <svg 
                      className="w-5 h-5 text-amber-400 mr-2" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-gray-200 font-bold">{playbook.rating.toFixed(1)}</span>
                  </div>
                  <span className="text-gray-500 mx-3">•</span>
                  <span className="text-gray-400 text-sm">{playbook.students.toLocaleString()} students</span>
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mr-2">
                      <span className="font-bold text-white text-xs">
                        {playbook.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-medium text-sm">{playbook.author}</div>
                      <div className="text-gray-500 text-xs">{playbook.readTime}</div>
                    </div>
                  </div>
                </div>
                
                <Link 
                  href={`/playbooks/${playbook.id}`}
                  className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-bold hover:from-purple-500 hover:to-pink-500 transition-all text-center shadow-2xl shadow-purple-500/30 block text-sm"
                >
                  Read Playbook
                </Link>
              </FuturisticCard>
            ))}
          </motion.div>
        )}

        {/* Two Column Layout for Additional Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Left Column - Innovation Timeline */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-400">
                Our Journey of Innovation
              </h2>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8">
                <InnovationTimeline />
              </div>
            </motion.div>
          </div>
          
          {/* Right Column - Trending Now */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <TrendingNow />
            </motion.div>
          </div>
        </div>

        {/* Interactive Showcase */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-400">
            Interactive AI Showcase
          </h2>
          <InteractiveShowcase />
        </motion.div>

        {/* Expert Insights */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-400">
            What Experts Say
          </h2>
          <ExpertInsights />
        </motion.div>

        {/* Future Vision */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-400">
            Future Vision
          </h2>
          <FutureVision />
        </motion.div>

        {/* 3D Experience Preview */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-400">
            Immersive Experience
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ExperiencePreview />
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Next-Gen Interaction</h3>
              <p className="text-gray-400 mb-6">
                Experience AI like never before with our revolutionary 3D interface that combines 
                gesture controls, voice commands, and neural feedback for unprecedented interaction.
              </p>
              <ul className="space-y-3">
                {[
                  'Gesture-based navigation',
                  'Voice-activated controls',
                  'Haptic feedback system',
                  'Neural interface compatibility',
                  'Augmented reality overlay'
                ].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Awards & Recognition */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-400">
            Awards & Recognition
          </h2>
          <AwardsRecognition />
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="mt-24 max-w-4xl mx-auto bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl border border-gray-700 p-12 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.7 }}
        >
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse"></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-4xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-purple-400 to-pink-400">
              Ready to Access the Future?
            </h2>
            <p className="text-2xl text-gray-300 mb-10 max-w-2xl mx-auto font-light">
              Join millions of innovators unlocking the full potential of artificial intelligence
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/tools" 
                className="px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl font-bold hover:from-purple-500 hover:to-pink-500 transition-all text-xl shadow-2xl shadow-purple-500/30 flex items-center justify-center group"
              >
                Browse All Tools
                <svg 
                  className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
              <Link 
                href="/pro" 
                className="px-10 py-5 bg-gray-800 hover:bg-gray-700 rounded-2xl font-bold transition-all text-xl border border-gray-700 flex items-center justify-center group"
              >
                <span>Go Pro</span>
                <svg 
                  className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Custom Styles */}
      <style jsx global>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
}