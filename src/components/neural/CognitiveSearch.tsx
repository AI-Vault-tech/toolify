'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function CognitiveSearch() {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  // Mock suggestions - in a real app, these would come from an API
  const mockSuggestions = [
    'Neural networks',
    'Cognitive computing',
    'AI evolution',
    'Machine learning',
    'Deep learning',
    'Quantum computing',
    'Artificial general intelligence'
  ];

  useEffect(() => {
    if (query.length > 0) {
      // Simulate API call with debounce
      const timer = setTimeout(() => {
        const filtered = mockSuggestions.filter(suggestion =>
          suggestion.toLowerCase().includes(query.toLowerCase())
        );
        setSuggestions(filtered.length > 0 ? filtered : ['No matches found']);
      }, 300);

      return () => clearTimeout(timer);
    } else {
      setSuggestions([]);
    }
  }, [query]);

  const handleSuggestionClick = (suggestion: string) => {
    if (suggestion !== 'No matches found') {
      setQuery(suggestion);
      setSuggestions([]);
      inputRef.current?.focus();
    }
  };

  return (
    <div className="relative max-w-2xl mx-auto">
      <motion.div 
        className="relative"
        animate={{
          y: isFocused ? -5 : 0,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 200)}
            placeholder="What knowledge are you seeking today?"
            className="w-full bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-full py-4 px-6 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 pr-12"
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <motion.div
              animate={{
                scale: isFocused ? 1.2 : 1,
                rotate: isFocused ? 10 : 0,
              }}
              transition={{ type: 'spring' }}
            >
              <svg
                className="w-6 h-6 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </motion.div>
          </div>
        </div>

        {/* Neural pulse effect */}
        {isFocused && (
          <motion.div 
            className="absolute inset-0 rounded-full bg-blue-500/10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
              opacity: [0, 0.3, 0],
              scale: 1.1,
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: 'loop'
            }}
          />
        )}
      </motion.div>

      {/* Suggestions dropdown */}
      <AnimatePresence>
        {suggestions.length > 0 && (
          <motion.ul 
            className="absolute left-0 right-0 mt-2 bg-gray-900/80 backdrop-blur-md rounded-xl border border-gray-800 shadow-2xl overflow-hidden z-50"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            {suggestions.map((suggestion, index) => (
              <motion.li
                key={suggestion}
                className={`px-6 py-3 hover:bg-gray-800/50 cursor-pointer transition-colors duration-200 ${
                  suggestion === 'No matches found' ? 'text-gray-500' : 'text-gray-200'
                }`}
                onClick={() => handleSuggestionClick(suggestion)}
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="flex items-center">
                  {suggestion !== 'No matches found' && (
                    <motion.span 
                      className="inline-block w-2 h-2 rounded-full bg-blue-500 mr-3"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.1,
                      }}
                    />
                  )}
                  {suggestion}
                </div>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      {/* Neural connections */}
      <div className="absolute -bottom-4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
    </div>
  );
}
