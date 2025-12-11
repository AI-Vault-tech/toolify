'use client';

import { motion } from 'framer-motion';

export default function TermsOfServicePage() {
  const lastUpdated = 'December 6, 2025';
  
  const sections = [
    {
      title: 'Acceptance of Terms',
      content: `
        <p>By accessing or using the AI Nexus platform ("Services"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of the terms, you may not access the Services.</p>
        
        <p class="mt-4">These Terms apply to all visitors, users, and others who access or use the Services. By accessing or using the Services, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the Services.</p>
      `
    },
    {
      title: 'Description of Service',
      content: `
        <p>AI Nexus provides a platform for discovering, accessing, and utilizing artificial intelligence tools and resources. Our Services include but are not limited to:</p>
        
        <ul class="list-disc pl-8 mt-4 space-y-2">
          <li>Directory of AI tools and resources</li>
          <li>Curated collections of AI solutions</li>
          <li>Workflow playbooks and guides</li>
          <li>Marketplace for AI services</li>
          <li>Community forums and discussions</li>
          <li>Analytics and insights tools</li>
        </ul>
        
        <p class="mt-4">We reserve the right to modify or discontinue, temporarily or permanently, the Services (or any part thereof) with or without notice.</p>
      `
    },
    {
      title: 'User Accounts',
      content: `
        <p>When you create an account with us, you must provide accurate and complete information. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer or device.</p>
        
        <p class="mt-4">You agree to accept responsibility for all activities that occur under your account. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</p>
        
        <p class="mt-4">You may not use as a username the name of another person or entity or that is not lawfully available for use, a name or trademark that is subject to any rights of another person or entity other than yourself, without appropriate authorization.</p>
      `
    },
    {
      title: 'Intellectual Property',
      content: `
        <p>The Services and their original content, features, and functionality are owned by AI Nexus and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>
        
        <p class="mt-4">The AI Nexus name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of AI Nexus or its affiliates or licensors. You must not use such marks without the prior written permission of AI Nexus.</p>
        
        <p class="mt-4">Nothing in these Terms grants you a right to use any copyrighted material, trademarks, or other proprietary information without the prior written consent of the owner.</p>
      `
    },
    {
      title: 'User Content',
      content: `
        <p>Our Services may allow you to post, link, store, share, and otherwise make available certain information, text, graphics, videos, or other material ("Content"). You are responsible for the Content that you post.</p>
        
        <p class="mt-4">By posting Content, you grant us a non-exclusive, worldwide, royalty-free, sublicensable, transferable right and license to use, host, store, cache, reproduce, publish, display, perform, distribute, transmit, modify, adapt, create derivative works from, and otherwise exploit in any manner such Content.</p>
        
        <p class="mt-4">You represent and warrant that: (i) you own the Content posted by you on or through the Services or otherwise have the right to grant the license set forth in these Terms; and (ii) the posting of your Content on or through the Services does not violate the privacy rights, publicity rights, copyrights, contract rights, intellectual property rights, or any other rights of any person or entity.</p>
      `
    },
    {
      title: 'Prohibited Activities',
      content: `
        <p>You agree not to engage in any of the following prohibited activities:</p>
        
        <ul class="list-disc pl-8 mt-4 space-y-2">
          <li>Copying or adapting the Services' software, including but not limited to Flash, PHP, HTML, JavaScript, or other code</li>
          <li>Using the Services in any manner that could disable, overburden, damage, or impair the site</li>
          <li>Using any robot, spider, or other automatic device to access the Services</li>
          <li>Attempting to gain unauthorized access to the Services</li>
          <li>Interfering with or disrupting the Services or servers connected to the Services</li>
          <li>Impersonating any person or entity or falsely stating or otherwise misrepresenting your affiliation</li>
          <li>Violating any applicable law or regulation</li>
        </ul>
      `
    },
    {
      title: 'Termination',
      content: `
        <p>We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
        
        <p class="mt-4">Upon termination, your right to use the Services will immediately cease. If you wish to terminate your account, you may simply discontinue using the Services.</p>
        
        <p class="mt-4">All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.</p>
      `
    },
    {
      title: 'Disclaimer of Warranties',
      content: `
        <p>Your use of the Services is at your sole risk. The Services are provided on an "AS IS" and "AS AVAILABLE" basis. The Services are provided without warranties of any kind, whether express or implied.</p>
        
        <p class="mt-4">AI Nexus does not warrant that: (a) the Services will function uninterrupted, secure, or available at any particular time or location; (b) any errors or defects will be corrected; (c) the Services are free of viruses or other harmful components; or (d) the results of using the Services will meet your requirements.</p>
      `
    },
    {
      title: 'Limitation of Liability',
      content: `
        <p>In no event shall AI Nexus, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:</p>
        
        <ul class="list-disc pl-8 mt-4 space-y-2">
          <li>Your access to or use of or inability to access or use the Services</li>
          <li>Any conduct or content of any third party on the Services</li>
          <li>Any content obtained from the Services</li>
          <li>Unauthorized access, use, or alteration of your transmissions or content</li>
        </ul>
        
        <p class="mt-4">Our liability shall be limited to the maximum extent permitted by law.</p>
      `
    },
    {
      title: 'Governing Law',
      content: `
        <p>These Terms shall be governed and construed in accordance with the laws of California, United States, without regard to its conflict of law provisions.</p>
        
        <p class="mt-4">Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.</p>
        
        <p class="mt-4">These Terms constitute the entire agreement between us regarding our Services and supersede and replace any prior agreements we might have had between us regarding the Services.</p>
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
              Terms of Service
            </span>
          </h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Please read these Terms of Service carefully before using our services.
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
              Welcome to AI Nexus. These Terms of Service ("Terms") govern your access to and use of our website, mobile applications, and related services (collectively, the "Services").
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
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-gray-800/50 rounded-2xl p-6">
                <p className="text-xl font-bold">AI Nexus Legal Team</p>
                <p className="text-purple-400 text-lg mt-2">legal@ainexus.ai</p>
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