'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface ToolCardProps {
  id: string;
  name: string;
  description: string;
  category: string;
  rating: number;
  reviewCount: number;
  price: string;
  isFeatured?: boolean;
  isNew?: boolean;
  isTrending?: boolean;
  website?: string; // Add website property
}

export default function ToolCard({ 
  id, 
  name, 
  description, 
  category, 
  rating, 
  reviewCount,
  price,
  isFeatured = false,
  isNew = false,
  isTrending = false,
  website // Destructure website property
}: ToolCardProps) {
  // Render star ratings
  const renderStars = () => {
    return [...Array(5)].map((_, i) => (
      <span 
        key={i} 
        className={`text-xl ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-600'}`}
      >
        ★
      </span>
    ));
  };

  return (
    <motion.div
      whileHover={{ y: -12, scale: 1.02 }}
      className={`relative overflow-hidden rounded-3xl transition-all duration-500 cursor-pointer group
        ${isFeatured 
          ? 'bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-2xl border-2 border-purple-500/50 shadow-2xl shadow-purple-500/20' 
          : 'bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl border border-gray-700/50'}
      `}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Glowing effect on hover */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className={`absolute inset-0 rounded-3xl ${
          isFeatured 
            ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-2xl' 
            : 'bg-gradient-to-r from-gray-700/10 to-gray-800/10 blur-2xl'
        }`}></div>
      </div>
      
      <div className="relative z-10 p-8">
        {/* Header with badges */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center">
            <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0
              ${isFeatured 
                ? 'bg-gradient-to-r from-purple-600 to-pink-600' 
                : 'bg-gradient-to-r from-blue-600 to-cyan-600'}
            `}>
              <span className="font-bold text-white text-2xl">{name.charAt(0)}</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300 mb-2">
                {name}
              </h3>
              <span className="text-gray-500 text-lg">{category}</span>
            </div>
          </div>
          <div className="flex flex-col items-end space-y-2">
            {isFeatured && (
              <span className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-bold rounded-full">
                FEATURED
              </span>
            )}
            {isNew && (
              <span className="px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white text-sm font-bold rounded-full">
                NEW
              </span>
            )}
            {isTrending && (
              <span className="px-4 py-2 bg-gradient-to-r from-orange-600 to-red-600 text-white text-sm font-bold rounded-full">
                TRENDING
              </span>
            )}
          </div>
        </div>
        
        {/* Description */}
        <p className="text-gray-400 mb-8 text-lg leading-relaxed">
          {description}
        </p>
        
        {/* Ratings and price */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <div className="flex mr-4">
              {renderStars()}
            </div>
            <span className="text-gray-500 text-lg">
              ({reviewCount.toLocaleString()} reviews)
            </span>
          </div>
          <div className="text-right">
            <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400">
              {price}
            </span>
          </div>
        </div>
        
        {/* Action buttons */}
        <div className="flex justify-between">
          {website ? (
            <Link 
              href={website} 
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent hover:from-purple-500 hover:to-pink-500 transition-all duration-300 flex items-center group"
            >
              Visit Website
              <svg 
                className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </Link>
          ) : (
            <Link 
              href={`/tools/${id}`} 
              className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent hover:from-purple-500 hover:to-pink-500 transition-all duration-300 flex items-center group"
            >
              View Details
              <svg 
                className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </Link>
          )}
          <button className="px-6 py-3 bg-gradient-to-r from-gray-700/50 to-gray-800/50 hover:from-gray-600/50 hover:to-gray-700/50 rounded-xl text-lg font-bold transition-all duration-300 border border-gray-600">
            Add to Collection
          </button>
        </div>
      </div>
    </motion.div>
  );
}