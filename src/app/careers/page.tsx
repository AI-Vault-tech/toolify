'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CareersPage() {
  const benefits = [
    {
      title: 'Competitive Compensation',
      description: 'Market-leading salary and equity packages',
      icon: '💰'
    },
    {
      title: 'Remote Flexibility',
      description: 'Work from anywhere in the world',
      icon: '🌍'
    },
    {
      title: 'Learning Budget',
      description: '$5,000 annual budget for courses and conferences',
      icon: '📚'
    },
    {
      title: 'Health & Wellness',
      description: 'Comprehensive medical, dental, and mental health coverage',
      icon: '❤️'
    },
    {
      title: 'Unlimited PTO',
      description: 'Take time off when you need it',
      icon: '🏖️'
    },
    {
      title: ' cutting-edge Tech',
      description: 'Latest hardware and software for your work',
      icon: '💻'
    }
  ];

  const teams = [
    {
      name: 'Engineering',
      description: 'Build the future of AI platforms and infrastructure',
      positions: 8,
      icon: '⚙️'
    },
    {
      name: 'AI Research',
      description: 'Push the boundaries of what\'s possible with AI',
      positions: 5,
      icon: '🔬'
    },
    {
      name: 'Product',
      description: 'Design exceptional experiences for our users',
      positions: 3,
      icon: '🎯'
    },
    {
      name: 'Design',
      description: 'Create beautiful and intuitive interfaces',
      positions: 2,
      icon: '🎨'
    },
    {
      name: 'Marketing',
      description: 'Tell the world about our innovations',
      positions: 4,
      icon: '📢'
    },
    {
      name: 'Operations',
      description: 'Keep our organization running smoothly',
      positions: 3,
      icon: '📊'
    }
  ];

  const cultureValues = [
    {
      title: 'Innovation First',
      description: 'We encourage experimentation and calculated risk-taking',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Radical Transparency',
      description: 'Open communication and honest feedback are valued',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Continuous Learning',
      description: 'We invest in our team\'s growth and development',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Diversity & Inclusion',
      description: 'We believe diverse perspectives drive better outcomes',
      color: 'from-amber-500 to-orange-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-purple-400 to-pink-400">
              Join Our Team
            </span>
          </h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Help us build the world's ultimate AI ecosystem and shape the future of artificial intelligence
          </p>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-2xl rounded-3xl border border-gray-700/50 p-12 mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold mb-6">Why AI Nexus?</h2>
          <p className="text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
            We're not just another tech company - we're pioneers shaping the future of AI. 
            Join a team of world-class researchers, engineers, and visionaries who are transforming how humans and machines collaborate.
          </p>
          <div className="flex justify-center">
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
          </div>
        </motion.div>

        {/* Culture Values */}
        <div className="mb-20">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-300">
              Our Culture
            </span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cultureValues.map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-2xl rounded-3xl border border-gray-700/50 p-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center text-2xl mb-6`}>
                  {value.title.charAt(0)}
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-400 text-lg">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-20">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-emerald-300">
              Benefits & Perks
            </span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-2xl rounded-3xl border border-gray-700/50 p-8 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
              >
                <div className="text-5xl mb-6">{benefit.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-400 text-lg">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-20">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-orange-300">
              Open Positions
            </span>
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {teams.map((team, index) => (
              <motion.div
                key={team.name}
                className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-2xl rounded-3xl border border-gray-700/50 p-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center">
                    <span className="text-4xl mr-4">{team.icon}</span>
                    <div>
                      <h3 className="text-2xl font-bold">{team.name}</h3>
                      <p className="text-gray-400">{team.description}</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-bold">
                    {team.positions} open
                  </span>
                </div>
                <Link 
                  href="#"
                  className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl font-bold hover:from-purple-500 hover:to-pink-500 transition-all text-center block"
                >
                  View Positions
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-2xl rounded-3xl border border-gray-700/50 p-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Join Us?</h2>
          <p className="text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
            We're always looking for talented individuals who share our passion for AI innovation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              href="#"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl font-bold text-xl hover:from-purple-500 hover:to-pink-500 transition-all"
            >
              View All Positions
            </Link>
            <Link 
              href="#"
              className="px-8 py-4 bg-gray-800 rounded-2xl font-bold text-xl hover:bg-gray-700 transition-all border border-gray-700"
            >
              Internship Program
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}