'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactMethods = [
    {
      title: 'General Inquiries',
      email: 'hello@ainexus.ai',
      description: 'For general questions about our platform and services',
      icon: '📧'
    },
    {
      title: 'Support',
      email: 'support@ainexus.ai',
      description: 'For technical support and account assistance',
      icon: '🛠️'
    },
    {
      title: 'Partnerships',
      email: 'partners@ainexus.ai',
      description: 'For business development and partnership opportunities',
      icon: '🤝'
    },
    {
      title: 'Press',
      email: 'press@ainexus.ai',
      description: 'For media inquiries and press requests',
      icon: '📰'
    }
  ];

  const officeLocations = [
    {
      city: 'San Francisco',
      address: '565 Howard Street, Suite 450',
      country: 'United States',
      phone: '+1 (415) 555-0199',
      icon: '🇺🇸'
    },
    {
      city: 'London',
      address: '123 Buckingham Palace Road',
      country: 'United Kingdom',
      phone: '+44 20 7123 4567',
      icon: '🇬🇧'
    },
    {
      city: 'Tokyo',
      address: '1-1-1 Shibuya, Shibuya-ku',
      country: 'Japan',
      phone: '+81 3-1234-5678',
      icon: '🇯🇵'
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
              Get in Touch
            </span>
          </h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Have questions or feedback? We'd love to hear from you. Reach out to our team through any of the channels below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-2xl rounded-3xl border border-gray-700/50 p-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-gray-800/60 backdrop-blur-xl border-2 border-gray-700 rounded-2xl focus:outline-none focus:ring-4 focus:ring-purple-500/30 focus:border-purple-500 text-xl placeholder-gray-500"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-gray-800/60 backdrop-blur-xl border-2 border-gray-700 rounded-2xl focus:outline-none focus:ring-4 focus:ring-purple-500/30 focus:border-purple-500 text-xl placeholder-gray-500"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-lg font-medium mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-gray-800/60 backdrop-blur-xl border-2 border-gray-700 rounded-2xl focus:outline-none focus:ring-4 focus:ring-purple-500/30 focus:border-purple-500 text-xl placeholder-gray-500"
                  placeholder="What is this regarding?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-lg font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-6 py-4 bg-gray-800/60 backdrop-blur-xl border-2 border-gray-700 rounded-2xl focus:outline-none focus:ring-4 focus:ring-purple-500/30 focus:border-purple-500 text-xl placeholder-gray-500"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl font-bold text-xl hover:from-purple-500 hover:to-pink-500 transition-all"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <div>
            <motion.div
              className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-2xl rounded-3xl border border-gray-700/50 p-8 mb-8"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-8">Contact Methods</h2>
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <div key={method.title} className="flex items-start">
                    <span className="text-3xl mr-4">{method.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{method.title}</h3>
                      <p className="text-gray-400 mb-2">{method.description}</p>
                      <a 
                        href={`mailto:${method.email}`} 
                        className="text-purple-400 hover:text-purple-300 transition-colors font-medium"
                      >
                        {method.email}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-2xl rounded-3xl border border-gray-700/50 p-8"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold mb-8">Office Locations</h2>
              <div className="space-y-6">
                {officeLocations.map((location, index) => (
                  <div key={location.city} className="flex items-start">
                    <span className="text-3xl mr-4">{location.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{location.city}</h3>
                      <p className="text-gray-400">{location.address}</p>
                      <p className="text-gray-400">{location.country}</p>
                      <a 
                        href={`tel:${location.phone.replace(/[^0-9+]/g, '')}`} 
                        className="text-purple-400 hover:text-purple-300 transition-colors font-medium"
                      >
                        {location.phone}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Map Placeholder */}
        <motion.div
          className="mt-16 bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-2xl rounded-3xl border border-gray-700/50 p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Global Presence</h2>
          <div className="h-96 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🌎</div>
              <p className="text-2xl text-gray-400">Interactive World Map</p>
              <p className="text-gray-500 mt-2">Showing our offices and partners worldwide</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}