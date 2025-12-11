'use client';

import { motion } from 'framer-motion';

export default function CookiesPolicyPage() {
  const lastUpdated = 'December 6, 2025';
  
  const sections = [
    {
      title: 'What Are Cookies?',
      content: `
        <p>Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the owners of the site.</p>
        
        <p class="mt-4">Cookies help us recognize your device and remember your preferences when you return to our website. They also help us understand how you use our website so we can improve your experience.</p>
      `
    },
    {
      title: 'How We Use Cookies',
      content: `
        <p>We use cookies to:</p>
        
        <ul class="list-disc pl-8 mt-4 space-y-2">
          <li>Remember your preferences and settings</li>
          <li>Analyze how you use our website to improve our services</li>
          <li>Recognize you when you return to our website</li>
          <li>Provide personalized content and advertisements</li>
          <li>Ensure the security of our website</li>
          <li>Enable certain website features and functionalities</li>
        </ul>
        
        <p class="mt-4">We do not use cookies to collect personal information that directly identifies you without your consent.</p>
      `
    },
    {
      title: 'Types of Cookies We Use',
      content: `
        <h3 class="text-xl font-bold mt-6 mb-3">Essential Cookies</h3>
        <p>These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in, or filling in forms.</p>
        
        <h3 class="text-xl font-bold mt-6 mb-3">Performance Cookies</h3>
        <p>These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.</p>
        
        <h3 class="text-xl font-bold mt-6 mb-3">Functional Cookies</h3>
        <p>These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third party providers whose services we have added to our pages.</p>
        
        <h3 class="text-xl font-bold mt-6 mb-3">Targeting Cookies</h3>
        <p>These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites. They do not store personal information directly, but are based on uniquely identifying your browser and internet device.</p>
      `
    },
    {
      title: 'Third-Party Cookies',
      content: `
        <p>We work with trusted third parties who may set cookies when you visit our website. These third parties may include:</p>
        
        <ul class="list-disc pl-8 mt-4 space-y-2">
          <li>Analytics providers such as Google Analytics</li>
          <li>Advertising networks such as Google AdSense</li>
          <li>Social media platforms such as Facebook, Twitter, and LinkedIn</li>
          <li>Payment processors such as Stripe or PayPal</li>
        </ul>
        
        <p class="mt-4">These third parties may use cookies to recognize your device when you visit their services and when you return to our website. We do not control these third-party cookies and recommend reviewing their respective privacy policies.</p>
      `
    },
    {
      title: 'Managing Cookies',
      content: `
        <p>You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. If you do this, however, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.</p>
        
        <h3 class="text-xl font-bold mt-6 mb-3">Browser Settings</h3>
        <p>Most web browsers automatically accept cookies, but you can modify your browser settings to decline cookies if you prefer. If you choose to decline cookies, you may not be able to fully experience the interactive features of our website.</p>
        
        <h3 class="text-xl font-bold mt-6 mb-3">Opt-Out Options</h3>
        <p>You can opt out of interest-based advertising by visiting:</p>
        <ul class="list-disc pl-8 mt-2 space-y-2">
          <li>Network Advertising Initiative Consumer Opt-Out Page: http://www.networkadvertising.org/choices/</li>
          <li>Digital Advertising Alliance Opt-Out Page: http://www.aboutads.info/choices/</li>
          <li>European Interactive Digital Advertising Alliance: http://www.youronlinechoices.eu/</li>
        </ul>
      `
    },
    {
      title: 'Changes to This Cookie Policy',
      content: `
        <p>We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our practices. We encourage you to review this Cookie Policy regularly to stay informed about how we use cookies.</p>
        
        <p class="mt-4">We will notify you of any material changes by posting the new Cookie Policy on this page and updating the "Last Updated" date.</p>
      `
    }
  ];

  const cookieTable = [
    {
      name: '_ga',
      provider: 'Google Analytics',
      purpose: 'Distinguish users',
      expiry: '2 years'
    },
    {
      name: '_gid',
      provider: 'Google Analytics',
      purpose: 'Distinguish users',
      expiry: '24 hours'
    },
    {
      name: '_gat',
      provider: 'Google Analytics',
      purpose: 'Throttle request rate',
      expiry: '1 minute'
    },
    {
      name: 'ai_nexus_session',
      provider: 'AI Nexus',
      purpose: 'Maintain user session',
      expiry: 'Session'
    },
    {
      name: 'ai_nexus_preferences',
      provider: 'AI Nexus',
      purpose: 'Store user preferences',
      expiry: '1 year'
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
              Cookie Policy
            </span>
          </h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Learn how we use cookies to enhance your browsing experience.
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
              This Cookie Policy explains what cookies are, how we use them, the types of cookies we use, and how you can manage your cookie preferences.
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
              className="mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-purple-300">Cookie Table</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-gray-800/50 rounded-2xl overflow-hidden">
                  <thead>
                    <tr className="bg-gray-700/50">
                      <th className="py-4 px-6 text-left">Cookie Name</th>
                      <th className="py-4 px-6 text-left">Provider</th>
                      <th className="py-4 px-6 text-left">Purpose</th>
                      <th className="py-4 px-6 text-left">Expiry</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cookieTable.map((cookie, index) => (
                      <tr key={cookie.name} className={index % 2 === 0 ? 'bg-gray-800/30' : 'bg-gray-800/50'}>
                        <td className="py-4 px-6 font-medium">{cookie.name}</td>
                        <td className="py-4 px-6">{cookie.provider}</td>
                        <td className="py-4 px-6">{cookie.purpose}</td>
                        <td className="py-4 px-6">{cookie.expiry}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
            
            <motion.div
              className="mt-16 pt-8 border-t border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-purple-300">Contact Us</h2>
              <p className="text-gray-300 text-lg mb-6">
                If you have any questions about this Cookie Policy, please contact us at:
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