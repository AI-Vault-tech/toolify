'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function SecurityPage() {
  const lastUpdated = 'December 6, 2025';
  
  const securityMeasures = [
    {
      title: 'End-to-End Encryption',
      description: 'All data transmitted between your device and our servers is encrypted using industry-standard TLS protocols',
      icon: '🔒'
    },
    {
      title: 'Multi-Factor Authentication',
      description: 'Protect your account with additional authentication factors beyond passwords',
      icon: '📱'
    },
    {
      title: 'Regular Security Audits',
      description: 'Independent third-party security assessments to identify and address vulnerabilities',
      icon: '🔍'
    },
    {
      title: 'SOC 2 Type II Compliance',
      description: 'Certified adherence to rigorous security, availability, and confidentiality standards',
      icon: '📜'
    },
    {
      title: 'Zero Trust Architecture',
      description: 'Continuous verification of all users and devices accessing our systems',
      icon: '🛡️'
    },
    {
      title: 'Incident Response',
      description: '24/7 monitoring and rapid response to security incidents',
      icon: '🚨'
    }
  ];

  const certifications = [
    {
      name: 'SOC 2 Type II',
      issuer: 'American Institute of CPAs',
      description: 'Security, availability, and confidentiality trust services criteria',
      logo: '📜'
    },
    {
      name: 'ISO 27001',
      issuer: 'International Organization for Standardization',
      description: 'Information security management systems',
      logo: '_ISO'
    },
    {
      name: 'GDPR Compliant',
      issuer: 'European Union',
      description: 'Data protection and privacy for EU citizens',
      logo: '🇪🇺'
    },
    {
      name: 'HIPAA Compliant',
      issuer: 'U.S. Department of Health and Human Services',
      description: 'Protection of sensitive patient health information',
      logo: '🏥'
    }
  ];

  const incidentResponse = [
    {
      step: 'Detection',
      description: 'Advanced monitoring systems detect potential security incidents in real-time'
    },
    {
      step: 'Analysis',
      description: 'Security team analyzes the incident to determine scope and impact'
    },
    {
      step: 'Containment',
      description: 'Immediate actions taken to limit the spread of the incident'
    },
    {
      step: 'Eradication',
      description: 'Root cause identified and eliminated to prevent recurrence'
    },
    {
      step: 'Recovery',
      description: 'Systems restored and verified for normal operation'
    },
    {
      step: 'Lessons Learned',
      description: 'Post-incident review to improve future response efforts'
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
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-purple-400 to-pink-400">
              Security Center
            </span>
          </h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Your security is our highest priority. Learn about the measures we take to protect your data.
          </p>
          <div className="mt-6 text-gray-400 text-xl">
            Last Updated: {lastUpdated}
          </div>
        </motion.div>

        {/* Security Overview */}
        <motion.div
          className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-2xl rounded-3xl border border-gray-700/50 p-12 mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold mb-8">Our Security Commitment</h2>
          <p className="text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
            We implement comprehensive security measures to protect your data and privacy. 
            Our security program is designed to meet the highest industry standards and regulatory requirements.
          </p>
          <div className="flex justify-center">
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
          </div>
        </motion.div>

        {/* Security Measures */}
        <div className="mb-20">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-300">
              Security Measures
            </span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityMeasures.map((measure, index) => (
              <motion.div
                key={measure.title}
                className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-2xl rounded-3xl border border-gray-700/50 p-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              >
                <div className="text-5xl mb-6">{measure.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{measure.title}</h3>
                <p className="text-gray-400 text-lg">{measure.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-20">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-emerald-300">
              Industry Certifications
            </span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-2xl rounded-3xl border border-gray-700/50 p-8 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
              >
                <div className="text-5xl mb-6">{cert.logo}</div>
                <h3 className="text-2xl font-bold mb-2">{cert.name}</h3>
                <p className="text-purple-400 font-medium mb-4">{cert.issuer}</p>
                <p className="text-gray-400 text-sm">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Incident Response */}
        <div className="mb-20">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-orange-300">
              Incident Response Process
            </span>
          </motion.h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
            
            <div className="space-y-12">
              {incidentResponse.map((step, index) => (
                <motion.div
                  key={step.step}
                  className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'}`}>
                    <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-2xl rounded-3xl border border-gray-700/50 p-8">
                      <div className="inline-block px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-bold mb-4">
                        Step {index + 1}
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{step.step}</h3>
                      <p className="text-gray-400 text-lg">{step.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-white"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Security Contact */}
        <motion.div
          className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-2xl rounded-3xl border border-gray-700/50 p-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <h2 className="text-4xl font-bold mb-6">Report a Security Concern</h2>
          <p className="text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
            If you believe you've found a security vulnerability, please report it to our team responsibly.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              href="mailto:security@ainexus.ai"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl font-bold text-xl hover:from-purple-500 hover:to-pink-500 transition-all"
            >
              security@ainexus.ai
            </Link>
            <Link 
              href="/docs/security"
              className="px-8 py-4 bg-gray-800 rounded-2xl font-bold text-xl hover:bg-gray-700 transition-all border border-gray-700"
            >
              Security Documentation
            </Link>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-700">
            <h3 className="text-2xl font-bold mb-6">Bug Bounty Program</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              We reward security researchers who help us identify and fix vulnerabilities in our systems.
            </p>
            <Link 
              href="#"
              className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl font-bold hover:from-green-500 hover:to-emerald-500 transition-all inline-block"
            >
              Learn More About Our Bug Bounty Program
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}