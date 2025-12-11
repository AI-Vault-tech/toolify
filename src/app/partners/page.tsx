'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PartnersPage() {
  const partnerPrograms = [
    {
      title: 'Technology Partners',
      description: 'Integrate your AI solutions with our platform',
      icon: '⚙️',
      benefits: [
        'API access to our tool ecosystem',
        'Co-marketing opportunities',
        'Joint solution development',
        'Priority support'
      ]
    },
    {
      title: 'Reseller Partners',
      description: 'Sell AI Nexus solutions to your customers',
      icon: '💼',
      benefits: [
        'Revenue sharing programs',
        'Sales enablement resources',
        'Training and certification',
        'Lead sharing opportunities'
      ]
    },
    {
      title: 'Research Partners',
      description: 'Collaborate on cutting-edge AI research',
      icon: '🔬',
      benefits: [
        'Access to our research datasets',
        'Joint publication opportunities',
        'Funding for collaborative projects',
        'Conference presentation slots'
      ]
    },
    {
      title: 'Community Partners',
      description: 'Connect with our global AI community',
      icon: '👥',
      benefits: [
        'Sponsorship opportunities',
        'Event participation',
        'Content collaboration',
        'Community leadership roles'
      ]
    }
  ];

  const featuredPartners = [
    {
      name: 'Google Cloud',
      logo: 'https://logo.clearbit.com/google.com',
      description: 'Cloud infrastructure and AI services partner',
      since: '2020'
    },
    {
      name: 'Microsoft Azure',
      logo: 'https://logo.clearbit.com/microsoft.com',
      description: 'Cloud computing and AI platform partner',
      since: '2019'
    },
    {
      name: 'OpenAI',
      logo: 'https://logo.clearbit.com/openai.com',
      description: 'Research and development collaboration',
      since: '2021'
    },
    {
      name: 'NVIDIA',
      logo: 'https://logo.clearbit.com/nvidia.com',
      description: 'Hardware acceleration and AI compute',
      since: '2018'
    },
    {
      name: 'AWS',
      logo: 'https://logo.clearbit.com/amazon.com',
      description: 'Cloud infrastructure and ML services',
      since: '2020'
    },
    {
      name: 'Hugging Face',
      logo: 'https://logo.clearbit.com/huggingface.co',
      description: 'Model hosting and NLP research',
      since: '2022'
    }
  ];

  const successStories = [
    {
      title: 'Transforming Healthcare Diagnostics',
      company: 'MediScan AI',
      description: 'How our partnership helped MediScan deploy diagnostic tools to 500+ hospitals',
      results: [
        '40% reduction in diagnosis time',
        '99.2% accuracy improvement',
        '500+ hospitals deployed'
      ],
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80'
    },
    {
      title: 'Accelerating Financial Fraud Detection',
      company: 'SecureFin Analytics',
      description: 'Deploying real-time fraud detection across global banking networks',
      results: [
        '75% faster detection rates',
        '$2.3B prevented fraud',
        '99.9% uptime achieved'
      ],
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80'
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
              Partner With Us
            </span>
          </h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Join the world's ultimate AI ecosystem and unlock new opportunities for growth and innovation
          </p>
        </motion.div>

        {/* Partnership Programs */}
        <div className="mb-20">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-300">
              Partnership Programs
            </span>
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {partnerPrograms.map((program, index) => (
              <motion.div
                key={program.title}
                className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-2xl rounded-3xl border border-gray-700/50 p-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              >
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">{program.icon}</span>
                  <h3 className="text-2xl font-bold">{program.title}</h3>
                </div>
                <p className="text-gray-400 mb-8 text-lg">{program.description}</p>
                <ul className="space-y-3 mb-8">
                  {program.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  href="#"
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl font-bold hover:from-purple-500 hover:to-pink-500 transition-all inline-block"
                >
                  Learn More
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Featured Partners */}
        <div className="mb-20">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-emerald-300">
              Trusted By Industry Leaders
            </span>
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {featuredPartners.map((partner, index) => (
              <motion.div
                key={partner.name}
                className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-2xl rounded-3xl border border-gray-700/50 p-8 flex flex-col items-center justify-center text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
              >
                <div className="w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center mb-4 overflow-hidden">
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="w-full h-full object-contain p-2"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{partner.name}</h3>
                <p className="text-gray-400 text-sm mb-2">{partner.description}</p>
                <span className="text-gray-500 text-xs">Partner since {partner.since}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-20">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-orange-300">
              Success Stories
            </span>
          </motion.h2>
          
          <div className="space-y-12">
            {successStories.map((story, index) => (
              <motion.div
                key={story.title}
                className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-2xl rounded-3xl border border-gray-700/50 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 + index * 0.2 }}
              >
                <div className="md:flex">
                  <div className="md:w-2/5">
                    <img 
                      src={story.image} 
                      alt={story.title} 
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-3/5 p-8">
                    <span className="px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full text-sm font-bold mb-4 inline-block">
                      Case Study
                    </span>
                    <h3 className="text-3xl font-bold mb-2">{story.title}</h3>
                    <p className="text-purple-400 font-medium mb-6">{story.company}</p>
                    <p className="text-gray-400 mb-8 text-lg">{story.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                      {story.results.map((result, idx) => (
                        <div key={idx} className="bg-gray-800/50 rounded-2xl p-4 text-center">
                          <div className="text-2xl font-bold text-white mb-1">{result.split(' ')[0]}</div>
                          <div className="text-gray-400 text-sm">{result.split(' ').slice(1).join(' ')}</div>
                        </div>
                      ))}
                    </div>
                    <Link 
                      href="#"
                      className="px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl font-bold hover:from-amber-500 hover:to-orange-500 transition-all inline-block"
                    >
                      Read Full Story
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-2xl rounded-3xl border border-gray-700/50 p-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Partner With Us?</h2>
          <p className="text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Join hundreds of companies building the future of AI with AI Nexus
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              href="#"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl font-bold text-xl hover:from-purple-500 hover:to-pink-500 transition-all"
            >
              Become a Partner
            </Link>
            <Link 
              href="#"
              className="px-8 py-4 bg-gray-800 rounded-2xl font-bold text-xl hover:bg-gray-700 transition-all border border-gray-700"
            >
              Download Partner Kit
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}