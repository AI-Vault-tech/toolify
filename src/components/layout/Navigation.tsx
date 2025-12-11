'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900/80 backdrop-blur-xl border-b border-gray-800/50 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
              <span className="font-bold text-white text-xl">AI</span>
            </div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-400 group-hover:from-blue-200 group-hover:to-purple-300 transition-colors">
              AI Nexus
            </span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-1">
              {[
                { name: 'Home', href: '/', 
                  className: 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-500 hover:to-blue-600 border-0 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30'
                },
                { name: 'Dashboard', href: '/dashboard', 
                  className: 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-500 hover:to-blue-600 border-0 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30'
                },
                { name: 'Tools', href: '/tools',
                  className: 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-500 hover:to-blue-600 border-0 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30'
                },
                { name: 'Collections', href: '/collections',
                  className: 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-500 hover:to-blue-600 border-0 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30'
                },
                { name: 'Playbooks', href: '/playbooks',
                  className: 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-500 hover:to-blue-600 border-0 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30'
                },
                { 
                  name: 'Research & News', 
                  href: '/research-news',
                  className: 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-500 hover:to-blue-600 border-0 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30'
                },
                { name: 'Compare', href: '/compare',
                  className: 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-500 hover:to-blue-600 border-0 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30'
                },
                { name: 'Best', href: '/best',
                  className: 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-500 hover:to-blue-600 border-0 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30'
                },
                { name: 'Pricing', href: '/pro',
                  className: 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-500 hover:to-blue-600 border-0 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30'
                }
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-5 py-3 transition-colors rounded-xl relative group ${item.className || 'text-gray-300 hover:text-white hover:bg-gray-800/50'}`}
                >
                  {item.name}
                  {!item.className && (
                    <span className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Removed Auth & CTA section */}

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-400 hover:text-white focus:outline-none p-2 rounded-xl hover:bg-gray-800/50"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden py-6 border-t border-gray-800 overflow-hidden"
            >
              <div className="flex flex-col space-y-2">
                {[
                  { name: 'Home', href: '/',
                    className: 'text-white bg-gradient-to-r from-blue-600 to-blue-700 border-0 font-medium'
                  },
                  { name: 'Dashboard', href: '/dashboard', 
                    className: 'text-white bg-gradient-to-r from-blue-600 to-blue-700 border-0 font-medium'
                  },
                  { name: 'Tools', href: '/tools',
                    className: 'text-white bg-gradient-to-r from-blue-600 to-blue-700 border-0 font-medium'
                  },
                  { name: 'Collections', href: '/collections',
                    className: 'text-white bg-gradient-to-r from-blue-600 to-blue-700 border-0 font-medium'
                  },
                  { name: 'Playbooks', href: '/playbooks',
                    className: 'text-white bg-gradient-to-r from-blue-600 to-blue-700 border-0 font-medium'
                  },
                  { 
                    name: 'Research & News', 
                    href: '/research-news',
                    className: 'text-white bg-gradient-to-r from-blue-600 to-blue-700 border-0 font-medium'
                  },
                  { name: 'Compare', href: '/compare',
                    className: 'text-white bg-gradient-to-r from-blue-600 to-blue-700 border-0 font-medium'
                  },
                  { name: 'Best', href: '/best',
                    className: 'text-white bg-gradient-to-r from-blue-600 to-blue-700 border-0 font-medium'
                  },
                  { name: 'Pricing', href: '/pro',
                    className: 'text-white bg-gradient-to-r from-blue-600 to-blue-700 border-0 font-medium'
                  }
                ].map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-4 py-4 transition-colors rounded-xl hover:bg-gray-800/50 ${item.className || 'text-gray-300 hover:text-white'}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                {/* Removed mobile auth buttons */}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}