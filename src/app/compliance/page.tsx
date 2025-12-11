'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CompliancePage() {
  const lastUpdated = 'December 6, 2025';
  
  const regulations = [
    {
      name: 'General Data Protection Regulation (GDPR)',
      region: 'European Union',
      status: 'Compliant',
      description: 'Regulation on data protection and privacy for individuals within the European Union',
      icon: '🇪🇺'
    },
    {
      name: 'California Consumer Privacy Act (CCPA)',
      region: 'California, USA',
      status: 'Compliant',
      description: 'State statute intended to enhance privacy rights and consumer protection for residents of California',
      icon: '🇺🇸'
    },
    {
      name: 'Health Insurance Portability and Accountability Act (HIPAA)',
      region: 'United States',
      status: 'Compliant',
      description: 'Federal law that provides data privacy and security provisions for safeguarding medical information',
      icon: '🏥'
    },
    {
      name: 'Payment Card Industry Data Security Standard (PCI DSS)',
      region: 'Global',
      status: 'Compliant',
      description: 'Security standard for organizations that handle branded credit cards from major card schemes',
      icon: '💳'
    },
    {
      name: 'Sarbanes-Oxley Act (SOX)',
      region: 'United States',
      status: 'Compliant',
      description: 'Federal law that established new or enhanced standards for all U.S. public company boards',
      icon: '📊'
    },
    {
      name: 'Children\'s Online Privacy Protection Act (COPPA)',
      region: 'United States',
      status: 'Compliant',
      description: 'Federal law that applies to the online collection of personal information from children under 13',
      icon: '🧒'
    }
  ];

  const complianceFrameworks = [
    {
      name: 'SOC 2 Type II',
      description: 'Security, availability, processing integrity, confidentiality, and privacy trust services criteria',
      status: 'Certified',
      renewal: 'Annual',
      logo: '📜'
    },
    {
      name: 'ISO 27001',
      description: 'International standard for information security management systems',
      status: 'Certified',
      renewal: 'Annual',
      logo: '_ISO'
    },
    {
      name: 'NIST Cybersecurity Framework',
      description: 'Framework for improving critical infrastructure cybersecurity',
      status: 'Aligned',
      renewal: 'Continuous',
      logo: '🖥️'
    },
    {
      name: 'FedRAMP',
      description: 'Federal Risk and Authorization Management Program for cloud services',
      status: 'In Progress',
      renewal: 'Ongoing',
      logo: '🏛️'
    }
  ];

  const dataHandlingPractices = [
    {
      practice: 'Data Minimization',
      description: 'We only collect data that is necessary for the specified purposes'
    },
    {
      practice: 'Purpose Limitation',
      description: 'Data is collected for specified, explicit, and legitimate purposes'
    },
    {
      practice: 'Data Retention',
      description: 'We retain data only for as long as necessary for the purposes it was collected'
    },
    {
      practice: 'Data Portability',
      description: 'Users can request copies of their data in a structured, machine-readable format'
    },
    {
      practice: 'Right to Erasure',
      description: 'Users can request deletion of their personal data under certain conditions'
    },
    {
      practice: 'Breach Notification',
      description: 'We notify affected individuals and authorities of data breaches within 72 hours'
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
              Compliance Center
            </span>
          </h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Our commitment to regulatory compliance and industry standards.
          </p>
          <div className="mt-6 text-gray-400 text-xl">
            Last Updated: {lastUpdated}
          </div>
        </motion.div>

        {/* Compliance Overview */}
        <motion.div
          className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-2xl rounded-3xl border border-gray-700/50 p-12 mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold mb-8">Regulatory Compliance Framework</h2>
          <p className="text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
            We maintain strict adherence to global regulatory requirements and industry standards 
            to ensure the protection of your data and privacy.
          </p>
          <div className="flex justify-center">
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
          </div>
        </motion.div>

        {/* Regulations */}
        <div className="mb-20">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-300">
              Regulatory Compliance
            </span>
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {regulations.map((regulation, index) => (
              <motion.div
                key={regulation.name}
                className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-2xl rounded-3xl border border-gray-700/50 p-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center">
                    <span className="text-4xl mr-4">{regulation.icon}</span>
                    <div>
                      <h3 className="text-2xl font-bold">{regulation.name}</h3>
                      <p className="text-gray-400">{regulation.region}</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm font-bold">
                    {regulation.status}
                  </span>
                </div>
                <p className="text-gray-400 text-lg">{regulation.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Compliance Frameworks */}
        <div className="mb-20">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-emerald-300">
              Compliance Frameworks
            </span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {complianceFrameworks.map((framework, index) => (
              <motion.div
                key={framework.name}
                className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-2xl rounded-3xl border border-gray-700/50 p-8 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
              >
                <div className="text-5xl mb-6">{framework.logo}</div>
                <h3 className="text-2xl font-bold mb-2">{framework.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{framework.description}</p>
                <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-700/50">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-bold">
                    {framework.status}
                  </span>
                  <span className="text-gray-500 text-xs">{framework.renewal}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Data Handling Practices */}
        <div className="mb-20">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-orange-300">
              Data Handling Practices
            </span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dataHandlingPractices.map((practice, index) => (
              <motion.div
                key={practice.practice}
                className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-2xl rounded-3xl border border-gray-700/50 p-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
              >
                <h3 className="text-xl font-bold mb-4 text-amber-300">{practice.practice}</h3>
                <p className="text-gray-400">{practice.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Audit Reports */}
        <motion.div
          className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-2xl rounded-3xl border border-gray-700/50 p-12 mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-center">Audit Reports & Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'SOC 2 Type II Report',
                date: 'Q3 2025',
                status: 'Available',
                link: '#'
              },
              {
                title: 'ISO 27001 Certificate',
                date: 'Q2 2025',
                status: 'Available',
                link: '#'
              },
              {
                title: 'Penetration Test Results',
                date: 'Q4 2025',
                status: 'Scheduled',
                link: '#'
              }
            ].map((report, index) => (
              <div key={report.title} className="bg-gray-800/50 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-2">{report.title}</h3>
                <p className="text-gray-400 mb-4">{report.date}</p>
                <div className="flex justify-between items-center">
                  <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                    report.status === 'Available' 
                      ? 'bg-green-500/20 text-green-300' 
                      : 'bg-amber-500/20 text-amber-300'
                  }`}>
                    {report.status}
                  </span>
                  <Link 
                    href={report.link}
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    {report.status === 'Available' ? 'Download' : 'Learn More'}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div
          className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-2xl rounded-3xl border border-gray-700/50 p-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <h2 className="text-4xl font-bold mb-6">Compliance Questions?</h2>
          <p className="text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
            For questions about our compliance practices or to request audit reports, contact our compliance team.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              href="mailto:compliance@ainexus.ai"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl font-bold text-xl hover:from-purple-500 hover:to-pink-500 transition-all"
            >
              compliance@ainexus.ai
            </Link>
            <Link 
              href="/docs/compliance"
              className="px-8 py-4 bg-gray-800 rounded-2xl font-bold text-xl hover:bg-gray-700 transition-all border border-gray-700"
            >
              Compliance Documentation
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}