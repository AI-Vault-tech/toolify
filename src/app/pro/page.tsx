'use client';

import { motion } from 'framer-motion';

export default function ProPage() {
  const features = [
    {
      name: "Early Access",
      description: "Get early access to new AI tools before they're publicly released"
    },
    {
      name: "Advanced Analytics",
      description: "Detailed insights and analytics dashboard for your AI tool usage"
    },
    {
      name: "Custom Watchlists",
      description: "Create personalized watchlists to track your favorite tools"
    },
    {
      name: "API Access",
      description: "Full API access to our entire directory of AI tools data"
    },
    {
      name: "Team Collaboration",
      description: "Share tools and insights with your team members"
    },
    {
      name: "Quarterly Reports",
      description: "Exclusive industry reports with market analysis and trends"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
              Nexus Pro
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Unlock the full potential of AI Nexus with our premium membership
          </motion.p>
          
          <motion.div 
            className="inline-block bg-gradient-to-r from-yellow-600/20 to-orange-600/20 backdrop-blur-sm border border-yellow-500/30 rounded-2xl p-1 mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-gray-900/80 rounded-xl py-6 px-10">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-4 md:mb-0">
                  <h2 className="text-3xl font-bold">$99<span className="text-xl text-gray-400">/month</span></h2>
                  <p className="text-gray-400">Billed annually</p>
                </div>
                <button className="px-8 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-full font-semibold text-lg hover:from-yellow-500 hover:to-orange-500 transition-all transform hover:scale-105 shadow-lg shadow-yellow-500/20">
                  Get Nexus Pro
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features */}
        <div className="mb-20">
          <motion.h2 
            className="text-3xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Everything you need to master AI
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700 p-6 hover:border-orange-500/50 transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-3 text-orange-300">{feature.name}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <motion.div 
          className="max-w-4xl mx-auto bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl border border-gray-700 p-8 md:p-12 mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="flex items-start">
            <div className="mr-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
                <span className="font-bold text-white text-xl">JD</span>
              </div>
            </div>
            <div>
              <p className="text-xl italic mb-4">
                "Nexus Pro has completely transformed how our team discovers and evaluates AI tools. 
                The early access feature alone has given us a competitive edge in adopting cutting-edge 
                technologies before our competitors."
              </p>
              <div>
                <p className="font-semibold">Jane Doe</p>
                <p className="text-gray-400">CTO, Tech Innovations Inc.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <h2 className="text-3xl font-bold mb-6">Ready to unlock the future of AI?</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Join thousands of professionals who are already leveraging Nexus Pro to stay ahead in the AI landscape.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-full font-semibold text-lg hover:from-yellow-500 hover:to-orange-500 transition-all transform hover:scale-105 shadow-lg shadow-yellow-500/20">
            Start Your Free 7-Day Trial
          </button>
          <p className="text-gray-500 mt-4">No credit card required. Cancel anytime.</p>
        </motion.div>
      </div>
    </div>
  );
}