'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useNeural } from '@/contexts/NeuralContext';

const navItems = [
  {
    id: 'dashboard',
    icon: '🌀',
    label: 'Cortex',
    path: '/dashboard',
    color: 'from-blue-500 to-cyan-400',
  },
  {
    id: 'tools',
    icon: '🤖',
    label: 'AI Matrix',
    path: '/tools',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 'submit',
    icon: '⚡',
    label: 'Inject Tool',
    path: '/tools/submit',
    color: 'from-yellow-400 to-orange-500',
  },
  {
    id: 'research',
    icon: '🧠',
    label: 'Knowledge Nexus',
    path: '/research-news',
    color: 'from-indigo-500 to-purple-600',
  },
  {
    id: 'analytics',
    icon: '📊',
    label: 'Neural Analytics',
    path: '/analytics',
    color: 'from-green-400 to-emerald-500',
  },
  {
    id: 'community',
    icon: '🌐',
    label: 'Collective',
    path: '/community',
    color: 'from-rose-500 to-pink-600',
  },
];

export function NeuralNavigation() {
  const pathname = usePathname();
  const { activeModule, setActiveModule, neuralActivity } = useNeural();

  return (
    <div className="fixed left-0 top-0 h-full w-24 bg-gray-900/80 backdrop-blur-xl border-r border-gray-800/50 flex flex-col items-center py-8 z-50">
      <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-12">
        <span className="text-xl font-bold text-white">AI</span>
        <div 
          className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-green-400 animate-pulse"
          style={{
            boxShadow: '0 0 10px 2px rgba(74, 222, 128, 0.7)',
            animationDuration: '2s',
          }}
        />
      </div>

      <div className="flex-1 flex flex-col items-center space-y-8 w-full">
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.path);
          return (
            <Link
              key={item.id}
              href={item.path}
              onClick={() => setActiveModule(item.id)}
              className={`relative flex flex-col items-center justify-center w-16 h-16 rounded-2xl transition-all duration-300 group ${
                isActive 
                  ? `bg-gradient-to-br ${item.color} text-white scale-110 shadow-lg`
                  : 'bg-gray-800/50 text-gray-400 hover:bg-gray-800/80 hover:text-white hover:scale-105'
              }`}
            >
              <span className="text-2xl mb-1">{item.icon}</span>
              <span className="text-xs font-medium mt-1">{item.label}</span>
              
              {isActive && (
                <div className="absolute -right-2 w-1 h-6 bg-gradient-to-b from-blue-400 to-purple-400 rounded-l-full" />
              )}
              
              {item.id === 'tools' && (
                <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-rose-500 text-white text-xs flex items-center justify-center">
                  {Math.floor(neuralActivity)}
                </div>
              )}
            </Link>
          );
        })}
      </div>

      <div className="mt-auto">
        <button className="w-12 h-12 rounded-2xl bg-gray-800/50 hover:bg-gray-800/80 text-gray-400 hover:text-white flex items-center justify-center transition-colors">
          <span className="text-2xl">⚙️</span>
        </button>
      </div>
    </div>
  );
}
