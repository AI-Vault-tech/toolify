"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  authorTitle: string;
  date: string;
  readTime: string;
  engagement: number;
  relevance: number;
  freshness: number;
  tags: string[];
  featuredImage: string;
}

interface QuantumArticleCardProps {
  article: Article;
}

export function QuantumArticleCard({ article }: QuantumArticleCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  // Calculate dynamic values based on article metrics
  const engagementColor = `hsl(${120 + article.engagement * 1.2}, 100%, 60%)`;
  const relevanceColor = `hsl(${240 - article.relevance * 1.2}, 100%, 60%)`;
  const freshnessColor = `hsl(${60 + article.freshness * 1.2}, 100%, 60%)`;

  return (
    <Link href={`/blog/${article.slug}`} passHref>
      <motion.article
        className={`relative bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 transition-all duration-300 ${
          isFocused ? 'ring-2 ring-blue-500 scale-105' : ''
        } cursor-pointer`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          boxShadow: isHovered 
            ? `0 0 30px rgba(100, 255, 218, 0.3)`
            : '0 4px 6px rgba(0, 0, 0, 0.1)',
          transform: isHovered ? 'translateY(-5px)' : 'translateY(0)'
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={(e) => {
          e.preventDefault();
          window.location.href = `/blog/${article.slug}`;
        }}
        aria-label={`Read article: ${article.title}`}
      >
      {/* Neural glow effect */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at center, 
            rgba(100, 255, 218, 0.1) 0%, 
            rgba(100, 255, 218, 0) 70%)`
        }}
      />

      <div className="p-6">
        <div className="flex items-center gap-2 mb-4">
          {/* Engagement indicator */}
          <div className="flex items-center">
            <div 
              className="w-2 h-2 rounded-full mr-1"
              style={{ backgroundColor: engagementColor }}
            />
            <span className="text-xs text-gray-400">
              {Math.round(article.engagement * 100)}%
            </span>
          </div>

          {/* Relevance indicator */}
          <div className="flex items-center">
            <div 
              className="w-2 h-2 rounded-full mr-1"
              style={{ backgroundColor: relevanceColor }}
            />
            <span className="text-xs text-gray-400">
              {Math.round(article.relevance * 100)}%
            </span>
          </div>

          {/* Freshness indicator */}
          <div className="flex items-center">
            <div 
              className="w-2 h-2 rounded-full mr-1"
              style={{ backgroundColor: freshnessColor }}
            />
            <span className="text-xs text-gray-400">
              {Math.round(article.freshness * 100)}%
            </span>
          </div>
        </div>

        <h2 className="text-xl font-bold text-white mb-2">
          {article.title}
        </h2>
        
        <p className="text-gray-300 text-sm mb-4">
          {article.excerpt}
        </p>

        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>{article.author}</span>
          <span>{article.date} · {article.readTime} read</span>
        </div>
      </div>

      {/* Neural connections */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
            style={{
              width: '1px',
              height: '1px',
              left: `${10 + i * 30}%`,
              top: '100%',
              boxShadow: '0 0 10px 2px rgba(100, 255, 218, 0.8)'
            }}
            animate={{
              y: [0, -100],
              opacity: [0.2, 0.8, 0],
              scale: [1, 1.5, 2]
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.5,
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>
    </motion.article>
    </Link>
  );
}
