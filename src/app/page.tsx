'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Link from 'next/link';
import InteractiveOrbit from '@/components/ui/InteractiveOrbit';
import NeuralBackground from '@/components/effects/NeuralBackground';

export default function Home() {
  const [toolCount, setToolCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeOrb, setActiveOrb] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Simulate tool count loading
    const timer = setTimeout(() => {
      setToolCount(35420);
    }, 1000);
    
    // Trigger animations after component mount
    setIsVisible(true);
    
    // Mouse move listener for interactive effects
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Orb rotation effect
    const orbInterval = setInterval(() => {
      setActiveOrb(prev => (prev + 1) % 6);
    }, 3000);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(orbInterval);
    };
  }, []);

  // Interactive mouse-following effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 300 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);
  
  useEffect(() => {
    mouseX.set(mousePosition.x);
    mouseY.set(mousePosition.y);
  }, [mousePosition]);

  // Parallax effect for background elements
  const backgroundX = useTransform(smoothMouseX, [0, typeof window !== 'undefined' ? window.innerWidth : 1920], [-50, 50]);
  const backgroundY = useTransform(smoothMouseY, [0, typeof window !== 'undefined' ? window.innerHeight : 1080], [-50, 50]);

  // Floating particle component with enhanced effects
  const FloatingParticle = ({ 
    delay = 0, 
    duration = 5, 
    size = 8,
    color = 'purple'
  }: { 
    delay?: number; 
    duration?: number; 
    size?: number;
    color?: 'purple' | 'blue' | 'pink' | 'gold' | 'cyan' | 'green';
  }) => {
    const colors = {
      purple: 'from-purple-500/30 to-indigo-500/30',
      blue: 'from-blue-500/30 to-cyan-500/30',
      pink: 'from-pink-500/30 to-rose-500/30',
      gold: 'from-yellow-500/30 to-orange-500/30',
      cyan: 'from-cyan-500/30 to-blue-500/30',
      green: 'from-green-500/30 to-emerald-500/30'
    };
    
    return (
      <motion.div
        className={`absolute rounded-full bg-gradient-to-r ${colors[color]} blur-md`}
        style={{
          width: size,
          height: size,
          left: backgroundX,
          top: backgroundY,
        }}
        initial={{ 
          x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920), 
          y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
          opacity: 0 
        }}
        animate={{ 
          y: [null, -150, 0],
          x: [null, Math.random() * 100 - 50, Math.random() * 100 - 50],
          opacity: [0, 0.4, 0],
        }}
        transition={{ 
          duration: duration,
          delay: delay,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    );
  };

  // Futuristic holographic card component
  const HolographicCard = ({ 
    icon, 
    title, 
    description,
    gradient,
    delay = 0
  }: { 
    icon: string; 
    title: string; 
    description: string;
    gradient: string;
    delay?: number;
  }) => (
    <motion.div 
      className="relative group"
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
    >
      {/* Holographic glow effect */}
      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500 -z-10`}></div>
      
      {/* Card content */}
      <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-2xl border border-gray-700/40 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-500 group relative overflow-hidden h-full">
        {/* Animated border */}
        <div className="absolute inset-0 rounded-3xl pointer-events-none">
          <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-20 animate-pulse`}></div>
        </div>
        
        <div className="relative z-10">
          <div className={`text-5xl mb-6 bg-gradient-to-r ${gradient} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
            {icon}
          </div>
          <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
            {title}
          </h3>
          <p className="text-gray-400 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );

  // Stat card component with enhanced styling
  const StatCard = ({ value, label, suffix = "" }: { value: string; label: string; suffix?: string; }) => (
    <motion.div 
      className="text-center group relative"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.7 }}
      whileHover={{ y: -10 }}
    >
      {/* Glowing halo effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"></div>
      
      <div className="relative z-10">
        <div className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 mb-3 group-hover:scale-110 transition-transform duration-300">
          {value}{suffix}
        </div>
        <div className="text-xl text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
          {label}
        </div>
      </div>
    </motion.div>
  );

  // Category card component with futuristic design
  const CategoryCard = ({ 
    icon, 
    title, 
    description,
    toolCount,
    delay = 0
  }: { 
    icon: string; 
    title: string; 
    description: string;
    toolCount: number;
    delay?: number;
  }) => (
    <motion.div 
      className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-2xl border border-gray-700/40 rounded-3xl p-8 hover:border-cyan-500/50 transition-all duration-500 group relative overflow-hidden"
      whileHover={{ 
        y: -10, 
        boxShadow: "0 25px 35px -15px rgba(0, 150, 200, 0.3)",
        scale: 1.02
      }}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
    >
      <div className="relative z-10">
        <div className="text-5xl mb-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-300 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-400 mb-4 leading-relaxed">
          {description}
        </p>
        <div className="flex items-center justify-between mt-6">
          <span className="text-cyan-400 font-bold">{toolCount} tools</span>
          <svg className="w-6 h-6 text-cyan-400 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </div>
      </div>
    </motion.div>
  );

  // Testimonial card component with enhanced design
  const TestimonialCard = ({ 
    name, 
    role, 
    company,
    content,
    avatarColor,
    delay = 0
  }: { 
    name: string; 
    role: string; 
    company: string;
    content: string;
    avatarColor: string;
    delay?: number;
  }) => (
    <motion.div 
      className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-2xl border border-gray-700/40 rounded-3xl p-8 transition-all duration-500 group relative overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
    >
      <div className="relative z-10">
        <div className="flex items-start mb-6">
          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mr-5 flex-shrink-0 ${avatarColor}`}>
            <span className="font-bold text-white text-xl">{name.charAt(0)}</span>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-1 text-white">
              {name}
            </h3>
            <p className="text-gray-400">
              {role}, {company}
            </p>
          </div>
        </div>
        <div className="text-3xl text-purple-500 mb-4">❝</div>
        <p className="text-gray-300 text-lg leading-relaxed italic">
          {content}
        </p>
      </div>
    </motion.div>
  );

  // Futuristic progress bar component
  const FuturisticProgressBar = ({ value, max, label }: { value: number; max: number; label: string }) => {
    const percentage = (value / max) * 100;
    
    return (
      <div className="mb-6">
        <div className="flex justify-between mb-3">
          <span className="text-gray-300 font-medium">{label}</span>
          <span className="text-purple-400 font-bold">{value.toLocaleString()}+</span>
        </div>
        <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
            initial={{ width: 0 }}
            animate={isVisible ? { width: `${percentage}%` } : {}}
            transition={{ duration: 2, delay: 0.5 }}
          ></motion.div>
        </div>
      </div>
    );
  };

  // Futuristic orb indicator
  const OrbIndicator = ({ active }: { active: boolean }) => (
    <div className={`w-4 h-4 rounded-full mx-2 transition-all duration-500 ${
      active 
        ? 'bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg shadow-purple-500/50 scale-125' 
        : 'bg-gray-700'
    }`}></div>
  );

  return (
    <div 
      ref={containerRef}
      className="min-h-screen text-white overflow-hidden relative"
    >
      <NeuralBackground />
      {/* Enhanced animated background with interactive elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Multiple layers of particles for depth */}
        {[...Array(100)].map((_, i) => (
          <FloatingParticle 
            key={i} 
            delay={i * 0.1} 
            duration={Math.random() * 20 + 15}
            size={Math.random() * 20 + 8}
            color={['purple', 'blue', 'pink', 'gold', 'cyan', 'green'][Math.floor(Math.random() * 6)] as 'purple' | 'blue' | 'pink' | 'gold' | 'cyan' | 'green'}
          />
        ))}
        
        {/* Central glowing orbs for ambiance */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-purple-500/10 blur-3xl"
          style={{ x: backgroundX, y: backgroundY }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-3xl"
          style={{ x: useTransform(backgroundX, value => value * -0.8), y: useTransform(backgroundY, value => value * -0.8) }}
          animate={{
            scale: [1.4, 1, 1.4],
            opacity: [0.25, 0.2, 0.25],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-pink-500/10 blur-3xl"
          style={{ x: useTransform(backgroundX, value => value * 0.6), y: useTransform(backgroundY, value => value * 0.6) }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/3 w-[350px] h-[350px] rounded-full bg-cyan-500/10 blur-3xl"
          style={{ x: useTransform(backgroundX, value => value * -0.5), y: useTransform(backgroundY, value => value * -0.5) }}
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.2, 0.15, 0.2],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-16 sm:py-24">
        {/* Hero section with enhanced typography and layout */}
        <div className="text-center max-w-7xl mx-auto mb-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center justify-center px-8 py-4 bg-gray-800/50 backdrop-blur-xl rounded-full border border-gray-700/50 mb-12 shadow-2xl">
              <span className="w-4 h-4 bg-green-500 rounded-full mr-4 animate-pulse"></span>
              <span className="text-xl text-gray-300 font-bold">WORLD'S LARGEST AI TOOLS DIRECTORY JUST LAUNCHED v4.0</span>
            </div>
            
            {/* Main headline */}
            <h1 className="text-7xl sm:text-9xl font-extrabold mb-12 leading-tight tracking-tight">
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-purple-400 to-pink-400">
                The World's Ultimate
              </span>
              <span className="block mt-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">
                AI Ecosystem
              </span>
            </h1>
          </motion.div>
          
          {/* Subheadline */}
          <motion.p 
            className="text-4xl text-gray-300 mb-20 max-w-6xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Where every AI tool, resource, and innovation converges in one exquisite digital experience. 
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 font-bold">
              Discover, explore, and master the future of artificial intelligence with 35,000+ cutting-edge tools.
            </span>
          </motion.p>
          
          {/* Monetag Direct Link Zone - Talented tag */}
          <div className="mb-16 text-center">
            <a href="https://otieu.com/4/10465890" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full shadow-2xl hover:from-amber-600 hover:to-orange-600 transition-all font-bold text-2xl transform hover:scale-105">
              💰 Earn More with Monetag - Click Here!
            </a>
          </div>
          
          {/* Live counter with enhanced styling */}
          <motion.div 
            className="mb-24"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="inline-block bg-gradient-to-r from-gray-800/40 to-gray-900/40 backdrop-blur-2xl rounded-3xl px-14 py-9 border border-gray-700/50 shadow-2xl">
              <div className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full mr-5 animate-pulse"></div>
                <span className="text-gray-400 mr-5 text-2xl font-medium">AI tools indexed and counting:</span>
                <span className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
                  {toolCount.toLocaleString()}+
                </span>
              </div>
            </div>
          </motion.div>
          
          {/* Enhanced CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-10 mb-36"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Link href="/tools" className="px-16 py-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl font-extrabold text-3xl hover:from-purple-500 hover:to-pink-500 transition-all transform hover:scale-105 shadow-2xl shadow-purple-500/30 flex items-center justify-center group">
              <span>Explore 35,000+ AI Tools</span>
              <svg className="ml-6 w-10 h-10 group-hover:translate-x-3 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
            <Link href="/pro" className="px-16 py-8 bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl font-extrabold text-3xl hover:from-gray-700/80 hover:to-gray-800/80 transition-all border-2 border-gray-700 flex items-center justify-center group shadow-2xl">
              <span>Join Nexus Pro Elite</span>
              <svg className="ml-6 w-10 h-10 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path>
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* Enhanced Stats section with more impressive metrics */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-14 mb-40 max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <StatCard value="35K+" label="AI Tools Indexed" />
          <StatCard value="150K+" label="Monthly Active Users" />
          <StatCard value="99.4%" label="Satisfaction Rate" />
          <StatCard value="24/7" label="Expert Support" />
        </motion.div>

        {/* Features section with enhanced cards */}
        <motion.div 
          className="mb-44"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.0 }}
        >
          <div className="text-center mb-24">
            <h2 className="text-6xl font-extrabold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-purple-400 to-pink-400">
              Why AI Nexus is the World's Premier AI Destination
            </h2>
            <p className="text-3xl text-gray-400 max-w-5xl mx-auto font-light">
              Our platform offers unparalleled features designed for AI enthusiasts, professionals, and innovators worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <HolographicCard 
              icon="🔍" 
              title="Advanced Discovery Engine" 
              description="Find the perfect AI tools with our intelligent search and recommendation engine powered by machine learning algorithms. Our proprietary neural network analyzes millions of data points to suggest the most relevant tools for your specific needs." 
              gradient="from-blue-500 to-cyan-500"
              delay={0.1}
            />
            <HolographicCard 
              icon="⭐" 
              title="Verified Expert Reviews" 
              description="Trusted ratings and in-depth reviews from industry experts and users in the global AI community. Every tool undergoes rigorous evaluation by our team of AI specialists to ensure quality and reliability." 
              gradient="from-purple-500 to-pink-500"
              delay={0.2}
            />
            <HolographicCard 
              icon="📊" 
              title="Performance Analytics Dashboard" 
              description="Track tool performance metrics, compare benchmarks, and visualize data with our comprehensive analytics suite. Monitor usage patterns, cost-effectiveness, and ROI to make informed decisions about your AI investments." 
              gradient="from-green-500 to-emerald-500"
              delay={0.3}
            />
            <HolographicCard 
              icon="🤝" 
              title="Global Community Network" 
              description="Connect with AI professionals worldwide, share insights, and collaborate in our vibrant international community. Access exclusive forums, networking events, and knowledge-sharing opportunities with industry leaders." 
              gradient="from-orange-500 to-red-500"
              delay={0.4}
            />
          </div>
        </motion.div>

        {/* Futuristic progress bars section */}
        <motion.div 
          className="mb-44 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className="text-center mb-20">
            <h2 className="text-6xl font-extrabold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400">
              Platform Growth Metrics
            </h2>
            <p className="text-3xl text-gray-400 max-w-4xl mx-auto font-light">
              Real-time insights into our expanding ecosystem and community engagement.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-2xl rounded-3xl border border-gray-700/40 p-12">
            <FuturisticProgressBar value={35420} max={50000} label="AI Tools Catalogued" />
            <FuturisticProgressBar value={150000} max={200000} label="Active Users Monthly" />
            <FuturisticProgressBar value={994} max={1000} label="User Satisfaction Score" />
            <FuturisticProgressBar value={24} max={24} label="Support Availability" />
          </div>
        </motion.div>

        {/* Categories section */}
        <motion.div 
          className="mb-44"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.4 }}
        >
          <div className="text-center mb-24">
            <h2 className="text-6xl font-extrabold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400">
              Explore AI Tools by Category
            </h2>
            <p className="text-3xl text-gray-400 max-w-5xl mx-auto font-light">
              Discover thousands of AI tools organized into specialized categories for easy navigation and discovery.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <CategoryCard 
              icon="💬" 
              title="Natural Language Processing" 
              description="Transform text into insights with advanced NLP tools for content creation, translation, and sentiment analysis."
              toolCount={4200}
              delay={0.1}
            />
            <CategoryCard 
              icon="🎨" 
              title="Image Generation" 
              description="Create stunning visuals from text prompts with cutting-edge image generation and editing AI tools."
              toolCount={3800}
              delay={0.2}
            />
            <CategoryCard 
              icon="🎥" 
              title="Video Editing" 
              description="Revolutionize your video production workflow with AI-powered editing, enhancement, and creation tools."
              toolCount={2900}
              delay={0.3}
            />
            <CategoryCard 
              icon="💻" 
              title="Code Assistance" 
              description="Accelerate development with AI pair programmers, code generators, and debugging assistants."
              toolCount={3500}
              delay={0.4}
            />
            <CategoryCard 
              icon="🎵" 
              title="Audio Processing" 
              description="Enhance, transcribe, and generate audio content with sophisticated AI audio tools."
              toolCount={2100}
              delay={0.5}
            />
            <CategoryCard 
              icon="📈" 
              title="Data Analysis" 
              description="Unlock insights from complex datasets with powerful AI analytics and visualization platforms."
              toolCount={3200}
              delay={0.6}
            />
          </div>
        </motion.div>

        {/* Interactive showcase section */}
        <motion.div 
          className="mb-44"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.6 }}
        >
          <div className="text-center mb-24">
            <h2 className="text-6xl font-extrabold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-purple-400 to-pink-400">
              Experience the Future of AI Discovery
            </h2>
            <p className="text-3xl text-gray-400 max-w-5xl mx-auto font-light">
              Our revolutionary interface transforms how you interact with AI tools through immersive technology.
            </p>
          </div>
          
          {/* Interactive showcase card */}
          <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-2xl rounded-3xl border border-gray-700/40 p-14 shadow-2xl">
            <div className="flex flex-col lg:flex-row items-center gap-14">
              <div className="lg:w-2/5">
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl border border-gray-700/50 flex items-center justify-center">
                    <InteractiveOrbit />
                  </div>
                  <div className="absolute -top-6 -right-6 w-28 h-28 rounded-3xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-4xl shadow-2xl">
                    NEW
                  </div>
                </div>
                
                {/* Orb indicators */}
                <div className="flex justify-center mt-8">
                  {[...Array(6)].map((_, i) => (
                    <OrbIndicator key={i} active={activeOrb === i} />
                  ))}
                </div>
              </div>
              <div className="lg:w-3/5">
                <h3 className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                  Next-Generation Discovery
                </h3>
                <p className="text-2xl text-gray-300 mb-10 leading-relaxed">
                  Our proprietary AI discovery engine uses neural networks to predict which tools will best suit your needs, 
                  learning from millions of user interactions to provide hyper-personalized recommendations.
                </p>
                <ul className="space-y-5 mb-10">
                  {[
                    "Real-time AI tool compatibility analysis with predictive scoring",
                    "Cross-platform integration suggestions based on your tech stack",
                    "Personalized learning pathways tailored to your skill level",
                    "Performance benchmarking against industry standards",
                    "Cost optimization recommendations for maximum ROI"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mr-5 flex-shrink-0 mt-1">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="text-2xl text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/discovery" className="inline-flex items-center px-8 py-5 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl font-bold text-2xl hover:from-cyan-500 hover:to-blue-500 transition-all group">
                  <span>Experience Discovery Engine</span>
                  <svg className="ml-4 w-7 h-7 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Premium testimonial section */}
        <motion.div 
          className="mb-44 max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.8 }}
        >
          <div className="text-center mb-24">
            <h2 className="text-6xl font-extrabold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-purple-400 to-pink-400">
              Trusted by Global AI Leaders
            </h2>
            <p className="text-3xl text-gray-400 max-w-5xl mx-auto font-light">
              Hear from industry professionals who have transformed their workflows with AI Nexus.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <TestimonialCard 
              name="Dr. Sarah Chen"
              role="Chief AI Officer"
              company="TechVision Inc."
              content="AI Nexus has revolutionized how our R&D team discovers and evaluates cutting-edge AI tools. The personalized recommendations alone have saved us hundreds of hours in research."
              avatarColor="bg-gradient-to-r from-purple-600 to-pink-600"
              delay={0.1}
            />
            <TestimonialCard 
              name="Michael Rodriguez"
              role="Head of Innovation"
              company="Global Solutions Ltd."
              content="The depth of AI tool coverage and expert insights provided by AI Nexus is unparalleled. It's become our go-to resource for staying ahead in the rapidly evolving AI landscape."
              avatarColor="bg-gradient-to-r from-blue-600 to-cyan-600"
              delay={0.2}
            />
            <TestimonialCard 
              name="Emma Thompson"
              role="Director of AI Strategy"
              company="FutureTech Enterprises"
              content="As an AI strategist, I rely on AI Nexus daily for competitive intelligence and trend analysis. The platform's analytics dashboard provides invaluable insights for our decision-making process."
              avatarColor="bg-gradient-to-r from-green-600 to-emerald-600"
              delay={0.3}
            />
          </div>
        </motion.div>

        {/* Industry recognition section */}
        <motion.div 
          className="mb-44"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 2.0 }}
        >
          <div className="text-center mb-20">
            <h2 className="text-6xl font-extrabold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400">
              Industry Recognition & Awards
            </h2>
            <p className="text-3xl text-gray-400 max-w-5xl mx-auto font-light">
              Honored by leading technology publications and industry organizations for innovation and excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { name: "Best AI Platform 2025", org: "Tech Innovator Awards" },
              { name: "Editor's Choice", org: "AI Magazine" },
              { name: "Top 10 AI Tools", org: "Digital Trends" },
              { name: "Innovation Excellence", org: "Future of Work Summit" }
            ].map((award, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-2xl rounded-3xl p-8 border border-gray-700/40 text-center"
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 2.0 + index * 0.1 }}
              >
                <div className="text-6xl mb-6 text-yellow-400">🏆</div>
                <h3 className="text-2xl font-bold mb-3 text-white">{award.name}</h3>
                <p className="text-gray-400">{award.org}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Newsletter signup */}
        <motion.div 
          className="mb-44 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 2.2 }}
        >
          <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-2xl rounded-3xl border border-gray-700/50 p-14 text-center shadow-2xl">
            <h2 className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-purple-400 to-pink-400">
              Stay Ahead of the AI Curve
            </h2>
            <p className="text-2xl text-gray-400 mb-10 max-w-3xl mx-auto">
              Get weekly insights, tool recommendations, and industry analysis delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-8 py-6 bg-gray-800/60 backdrop-blur-xl border-2 border-gray-700 rounded-2xl focus:outline-none focus:ring-4 focus:ring-purple-500/30 focus:border-purple-500 text-2xl placeholder-gray-500"
              />
              <button className="px-10 py-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl font-bold text-2xl hover:from-purple-500 hover:to-pink-500 transition-all whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
            <p className="text-gray-500 mt-6 text-xl">Join 50,000+ AI professionals already subscribed</p>
          </div>
        </motion.div>

        {/* Final CTA section with enhanced design */}
        <motion.div 
          className="text-center mb-28"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 2.4 }}
        >
          <h2 className="text-6xl font-extrabold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-purple-400 to-pink-400">
            Ready to Transform Your AI Journey?
          </h2>
          <p className="text-3xl text-gray-400 max-w-5xl mx-auto mb-20 font-light">
            Join 150,000+ professionals who are already leveraging AI Nexus to stay ahead in the AI landscape.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-10">
            <Link href="/signup" className="px-16 py-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl font-extrabold text-3xl hover:from-purple-500 hover:to-pink-500 transition-all transform hover:scale-105 shadow-2xl shadow-purple-500/30">
              Start Your Free 14-Day Trial
            </Link>
            <Link href="/demo" className="px-16 py-8 bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl font-extrabold text-3xl hover:from-gray-700/80 hover:to-gray-800/80 transition-all border-2 border-gray-700 shadow-2xl">
              Request Personalized Demo
            </Link>
          </div>
          <p className="text-gray-500 mt-10 text-2xl">No credit card required. Cancel anytime.</p>
        </motion.div>
      </div>
    </div>
  );
}