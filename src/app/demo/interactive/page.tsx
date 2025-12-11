'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function InteractiveDemo() {
  const router = useRouter();
  const [activeDemo, setActiveDemo] = useState('orbit');
  const [isLoading, setIsLoading] = useState(false);

  // Simulate loading for demo transitions
  const handleDemoChange = (demo: string) => {
    setIsLoading(true);
    setTimeout(() => {
      setActiveDemo(demo);
      setIsLoading(false);
    }, 300);
  };

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

        {/* Demo Header */}
        <section className="mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400">
            Interactive AI Experience
          </h1>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
            Explore our revolutionary AI tools through hands-on interactive demos. Experience the future of artificial intelligence today.
          </p>
          
          {/* Demo Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <button
              className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 flex items-center ${
                activeDemo === 'orbit'
                  ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => handleDemoChange('orbit')}
            >
              <span className="mr-2">궤</span>
              Orbit Visualization
            </button>
            <button
              className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 flex items-center ${
                activeDemo === 'neural'
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => handleDemoChange('neural')}
            >
              <span className="mr-2">뇌</span>
              Neural Network
            </button>
            <button
              className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 flex items-center ${
                activeDemo === 'holographic'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => handleDemoChange('holographic')}
            >
              <span className="mr-2">🔮</span>
              Holographic Display
            </button>
          </div>
        </section>

        {/* Demo Container */}
        <section className="mb-20">
          <div className="relative h-[500px] rounded-3xl bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-700/50 flex items-center justify-center mb-16 overflow-hidden">
            {isLoading ? (
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                <p>Loading demo...</p>
              </div>
            ) : (
              <>
                {/* Background Effects */}
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5 animate-pulse"></div>
                  <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:40px_40px]"></div>
                </div>
                
                {/* Demo Content Based on Selection */}
                {activeDemo === 'orbit' && (
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-80 h-80 rounded-full border border-green-500/30 animate-spin-slow"></div>
                      <div className="w-60 h-60 rounded-full border border-emerald-500/30 animate-spin-slow animation-delay-1000"></div>
                      <div className="w-40 h-40 rounded-full border border-cyan-500/30 animate-spin-slow animation-delay-2000"></div>
                    </div>
                    <div className="absolute w-6 h-6 rounded-full bg-green-500 shadow-lg shadow-green-500/50 animate-pulse"></div>
                    <div className="absolute w-4 h-4 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/50 animate-pulse" style={{ top: '30%', left: '70%' }}></div>
                    <div className="absolute w-4 h-4 rounded-full bg-cyan-500 shadow-lg shadow-cyan-500/50 animate-pulse" style={{ bottom: '30%', right: '70%' }}></div>
                    
                    {/* Interactive Elements */}
                    <div className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center cursor-pointer hover:bg-white/30 transition-all">
                      <span className="text-lg">+</span>
                    </div>
                    <div className="absolute bottom-1/4 right-1/4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center cursor-pointer hover:bg-white/30 transition-all">
                      <span className="text-lg">-</span>
                    </div>
                  </div>
                )}
                
                {activeDemo === 'neural' && (
                  <div className="relative w-full h-full">
                    {/* Neural Network Visualization */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      {/* Input Layer */}
                      <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mb-8">I1</div>
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mb-8">I2</div>
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">I3</div>
                      </div>
                      
                      {/* Hidden Layer */}
                      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center mb-8">H1</div>
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center mb-8">H2</div>
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center">H3</div>
                      </div>
                      
                      {/* Output Layer */}
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mb-8">O1</div>
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">O2</div>
                      </div>
                      
                      {/* Connections */}
                      <div className="absolute inset-0">
                        {/* I1 to H1, H2, H3 */}
                        <div className="absolute h-0.5 bg-gradient-to-r from-green-400 to-purple-400 origin-left" style={{ width: '40%', left: '12%', top: '20%', transform: 'rotate(15deg)' }}></div>
                        <div className="absolute h-0.5 bg-gradient-to-r from-green-400 to-purple-400 origin-left" style={{ width: '40%', left: '12%', top: '20%', transform: 'rotate(5deg)' }}></div>
                        <div className="absolute h-0.5 bg-gradient-to-r from-green-400 to-purple-400 origin-left" style={{ width: '40%', left: '12%', top: '20%', transform: 'rotate(-5deg)' }}></div>
                        
                        {/* I2 to H1, H2, H3 */}
                        <div className="absolute h-0.5 bg-gradient-to-r from-green-400 to-purple-400 origin-left" style={{ width: '40%', left: '12%', top: '50%', transform: 'rotate(0deg)' }}></div>
                        <div className="absolute h-0.5 bg-gradient-to-r from-green-400 to-purple-400 origin-left" style={{ width: '40%', left: '12%', top: '50%', transform: 'rotate(-5deg)' }}></div>
                        <div className="absolute h-0.5 bg-gradient-to-r from-green-400 to-purple-400 origin-left" style={{ width: '40%', left: '12%', top: '50%', transform: 'rotate(5deg)' }}></div>
                        
                        {/* I3 to H1, H2, H3 */}
                        <div className="absolute h-0.5 bg-gradient-to-r from-green-400 to-purple-400 origin-left" style={{ width: '40%', left: '12%', top: '80%', transform: 'rotate(-15deg)' }}></div>
                        <div className="absolute h-0.5 bg-gradient-to-r from-green-400 to-purple-400 origin-left" style={{ width: '40%', left: '12%', top: '80%', transform: 'rotate(-5deg)' }}></div>
                        <div className="absolute h-0.5 bg-gradient-to-r from-green-400 to-purple-400 origin-left" style={{ width: '40%', left: '12%', top: '80%', transform: 'rotate(5deg)' }}></div>
                        
                        {/* H1, H2, H3 to O1, O2 */}
                        <div className="absolute h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 origin-left" style={{ width: '40%', left: '60%', top: '35%', transform: 'rotate(-10deg)' }}></div>
                        <div className="absolute h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 origin-left" style={{ width: '40%', left: '60%', top: '35%', transform: 'rotate(0deg)' }}></div>
                        <div className="absolute h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 origin-left" style={{ width: '40%', left: '60%', top: '35%', transform: 'rotate(10deg)' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeDemo === 'holographic' && (
                  <div className="relative w-full h-full flex items-center justify-center">
                    {/* Holographic Sphere */}
                    <div className="relative">
                      <div className="w-64 h-64 rounded-full border border-cyan-500/30 animate-pulse"></div>
                      <div className="absolute inset-0 w-64 h-64 rounded-full border border-purple-500/30 animate-pulse animation-delay-500"></div>
                      <div className="absolute inset-4 w-56 h-56 rounded-full border border-pink-500/30 animate-pulse animation-delay-1000"></div>
                      
                      {/* Holographic Points */}
                      {[...Array(20)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-3 h-3 rounded-full bg-cyan-400 animate-pulse"
                          style={{
                            top: `${50 + 40 * Math.sin((i * 360 / 20) * Math.PI / 180)}%`,
                            left: `${50 + 40 * Math.cos((i * 360 / 20) * Math.PI / 180)}%`,
                            animationDelay: `${i * 0.1}s`
                          }}
                        ></div>
                      ))}
                      
                      {/* Center Core */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 animate-pulse"></div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
          
          {/* Demo Description */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400">
              {activeDemo === 'orbit' && 'Orbit Visualization Demo'}
              {activeDemo === 'neural' && 'Neural Network Demo'}
              {activeDemo === 'holographic' && 'Holographic Display Demo'}
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              {activeDemo === 'orbit' && 'Experience our revolutionary 3D orbit visualization system that showcases AI collections in an immersive environment. Drag to rotate, scroll to zoom, and click on elements to explore collections in detail.'}
              {activeDemo === 'neural' && 'Interact with our neural network visualization to understand how AI models process information. Watch data flow through layers and see how connections strengthen with training.'}
              {activeDemo === 'holographic' && 'Step into the future with our holographic display technology. Visualize complex data sets in three dimensions with real-time interaction capabilities.'}
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl font-bold text-xl hover:from-green-500 hover:to-emerald-500 transition-all shadow-2xl shadow-green-500/20">
              Full Screen Mode
            </button>
          </div>
        </section>

        {/* Features Grid */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
            Interactive Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-8 border border-gray-700/50 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-2xl mb-6">
                🖱️
              </div>
              <h3 className="text-2xl font-bold mb-4">Drag & Rotate</h3>
              <p className="text-gray-300">
                Interact with 3D visualizations by dragging to rotate and explore from every angle.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-8 border border-gray-700/50 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-2xl mb-6">
                🔍
              </div>
              <h3 className="text-2xl font-bold mb-4">Zoom Controls</h3>
              <p className="text-gray-300">
                Zoom in to examine details or zoom out for an overview of complex data structures.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-8 border border-gray-700/50 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-2xl mb-6">
                ⚡
              </div>
              <h3 className="text-2xl font-bold mb-4">Real-time Updates</h3>
              <p className="text-gray-300">
                Experience live data updates and see how changes affect the visualization instantly.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-3xl p-12 border border-gray-700/50 backdrop-blur-sm text-center">
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400">
              Ready to Transform Your Workflow?
            </h2>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
              Experience the full power of our AI tools with our comprehensive platform designed to boost your productivity and innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl font-bold text-xl hover:from-green-500 hover:to-emerald-500 transition-all shadow-2xl shadow-green-500/20">
                Get Started Today
              </button>
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl font-bold text-xl hover:from-purple-500 hover:to-pink-500 transition-all shadow-2xl shadow-purple-500/20">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}