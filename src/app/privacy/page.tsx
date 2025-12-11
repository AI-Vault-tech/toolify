'use client';

import { motion } from 'framer-motion';

export default function PrivacyPolicyPage() {
  const lastUpdated = 'December 6, 2025';
  
  const sections = [
    {
      title: 'Information We Collect',
      content: `
        <p>We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact customer support. This may include your name, email address, payment information, and any other information you choose to provide.</p>
        
        <p>We also collect information automatically when you use our services, including:</p>
        
        <ul class="list-disc pl-8 mt-4 space-y-2">
          <li>Log information such as your IP address, browser type, and usage statistics</li>
          <li>Device information including device model, operating system, and unique device identifiers</li>
          <li>Location information derived from your IP address</li>
          <li>Cookies and similar tracking technologies</li>
        </ul>
        
        <p>Additionally, we may collect information from third-party sources, such as analytics providers and publicly available sources.</p>
      `
    },
    {
      title: 'How We Use Your Information',
      content: `
        <p>We use the information we collect to:</p>
        
        <ul class="list-disc pl-8 mt-4 space-y-2">
          <li>Provide, maintain, and improve our services</li>
          <li>Process transactions and send transactional notifications</li>
          <li>Send you technical notices, updates, and security alerts</li>
          <li>Respond to your comments, questions, and requests</li>
          <li>Communicate with you about products, services, and events</li>
          <li>Monitor and analyze trends, usage, and activities</li>
          <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
          <li>Personalize and improve our services based on your preferences</li>
        </ul>
      `
    },
    {
      title: 'Sharing of Information',
      content: `
        <p>We may share your information with:</p>
        
        <ul class="list-disc pl-8 mt-4 space-y-2">
          <li>Service providers who perform services on our behalf</li>
          <li>Third-party partners with whom we offer joint services</li>
          <li>Analytics and advertising partners to understand usage patterns</li>
          <li>Professional advisors such as lawyers, auditors, and insurers</li>
          <li>Law enforcement, government agencies, or courts when required by law</li>
          <li>Other parties in connection with a corporate transaction such as a merger or sale of assets</li>
        </ul>
        
        <p class="mt-4">We do not sell your personal information to third parties.</p>
      `
    },
    {
      title: 'Data Security',
      content: `
        <p>We implement appropriate technical and organizational measures to protect your personal information against accidental or unlawful destruction, loss, alteration, unauthorized disclosure, or access. These measures include encryption, secure server infrastructure, and regular security assessments.</p>
        
        <p class="mt-4">However, no method of transmission over the Internet or electronic storage is completely secure, so we cannot guarantee absolute security.</p>
      `
    },
    {
      title: 'Your Rights',
      content: `
        <p>You have the right to:</p>
        
        <ul class="list-disc pl-8 mt-4 space-y-2">
          <li>Access and receive a copy of your personal information</li>
          <li>Correct inaccurate personal information</li>
          <li>Request deletion of your personal information</li>
          <li>Object to or restrict the processing of your personal information</li>
          <li>Data portability - receive your data in a structured, machine-readable format</li>
          <li>Withdraw consent where processing is based on consent</li>
        </ul>
        
        <p class="mt-4">To exercise these rights, please contact us at privacy@ainexus.ai.</p>
      `
    },
    {
      title: 'International Data Transfers',
      content: `
        <p>Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those in your jurisdiction.</p>
        
        <p class="mt-4">We will take appropriate steps to ensure that your personal information receives an adequate level of protection in the jurisdictions where we process it.</p>
      `
    },
    {
      title: 'Children\'s Privacy',
      content: `
        <p>Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.</p>
      `
    },
    {
      title: 'Changes to This Policy',
      content: `
        <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.</p>
        
        <p class="mt-4">We encourage you to review this Privacy Policy periodically for any changes.</p>
      `
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
              Privacy Policy
            </span>
          </h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <div className="mt-6 text-gray-400 text-xl">
            Last Updated: {lastUpdated}
          </div>
        </motion.div>

        <motion.div
          className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-2xl rounded-3xl border border-gray-700/50 p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-gray-300 mb-12">
              This Privacy Policy describes how AI Nexus ("we", "us", or "our") collects, uses, and shares your personal information when you use our website, mobile applications, and related services (collectively, the "Services").
            </p>
            
            <div className="space-y-16">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <h2 className="text-3xl font-bold mb-6 text-purple-300">{section.title}</h2>
                  <div 
                    className="text-gray-300 text-lg leading-relaxed space-y-4"
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />
                </motion.div>
              ))}
            </div>
            
            <motion.div
              className="mt-16 pt-8 border-t border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-purple-300">Contact Us</h2>
              <p className="text-gray-300 text-lg mb-6">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="bg-gray-800/50 rounded-2xl p-6">
                <p className="text-xl font-bold">AI Nexus Privacy Team</p>
                <p className="text-purple-400 text-lg mt-2">privacy@ainexus.ai</p>
                <p className="text-gray-400 mt-4">
                  565 Howard Street, Suite 450<br />
                  San Francisco, CA 94105<br />
                  United States
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}