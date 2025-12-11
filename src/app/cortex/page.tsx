'use client';

import React, { useEffect, useRef } from 'react';
import { useNeural } from '@/contexts/NeuralContext';

// Mock data for the dashboard
const metrics = [
  {
    id: 'ai-tools',
    title: 'AI Tools Network',
    value: '1,234',
    change: '+12%',
    description: 'Active nodes in the neural network',
    icon: '🤖',
    color: 'from-blue-500 to-cyan-400',
  },
  {
    id: 'users',
    title: 'Conscious Users',
    value: '8,542',
    change: '+24%',
    description: 'Connected minds in the collective',
    icon: '👥',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 'research',
    title: 'Knowledge Base',
    value: '5,678',
    change: '+8%',
    description: 'Research papers indexed',
    icon: '📚',
    color: 'from-indigo-500 to-purple-600',
  },
  {
    id: 'activity',
    title: 'Platform Activity',
    value: '124K',
    change: '+32%',
    description: 'Monthly neural interactions',
    icon: '⚡',
    color: 'from-yellow-400 to-orange-500',
  },
];

const recentActivity = [
  {
    id: 1,
    type: 'new_tool',
    title: 'New AI Tool Added',
    description: 'GPT-5 was integrated into the neural network',
    time: '5 min ago',
    icon: '🤖',
  },
  {
    id: 2,
    type: 'update',
    title: 'System Update',
    description: 'Neural search filters enhanced',
    time: '2 hours ago',
    icon: '🔄',
  },
  {
    id: 3,
    type: 'featured',
    title: 'Featured Cluster',
    description: 'Creative AI tools now trending',
    time: '1 day ago',
    icon: '⭐',
  },
  {
    id: 4,
    type: 'research',
    title: 'Breakthrough Published',
    description: 'New paper on quantum neural networks',
    time: '2 days ago',
    icon: '📄',
  },
];

export default function CortexPage() {
  const { neuralActivity } = useNeural();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Simple neural network visualization
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * 2;
      canvas.height = canvas.offsetHeight * 2;
      canvas.style.width = '100%';
      canvas.style.height = '100%';
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Draw neural network
    const drawNeuralNetwork = () => {
      if (!ctx) return;
      
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);
      
      // Draw connections
      ctx.strokeStyle = `rgba(96, 165, 250, ${0.1 + neuralActivity / 200})`;
      ctx.lineWidth = 1;
      
      for (let i = 0; i < 50; i++) {
        const x1 = Math.random() * width;
        const y1 = Math.random() * height;
        const x2 = Math.random() * width;
        const y2 = Math.random() * height;
        
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.quadraticCurveTo(
          (x1 + x2) / 2 + (Math.random() - 0.5) * 100,
          (y1 + y2) / 2 + (Math.random() - 0.5) * 100,
          x2,
          y2
        );
        ctx.stroke();
      }
      
      // Draw nodes
      for (let i = 0; i < 20; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const size = 2 + Math.random() * 3;
        
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, size * 2);
        gradient.addColorStop(0, `rgba(96, 165, 250, ${0.5 + neuralActivity / 200})`);
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, size * 2, 0, Math.PI * 2);
        ctx.fill();
      }
      
      requestAnimationFrame(drawNeuralNetwork);
    };
    
    const animationId = requestAnimationFrame(drawNeuralNetwork);
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [neuralActivity]);

  return (
    <div className="min-h-screen">
      {/* Neural Network Background */}
      <div className="fixed inset-0 -z-10 opacity-20 pointer-events-none">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>
      
      {/* Header */}
      <header className="border-b border-gray-800/50 bg-gradient-to-b from-gray-900/80 to-transparent backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                Nexus Cortex
              </h1>
              <p className="text-sm text-gray-400 mt-1">
                Neural Command Center • Last updated: Just now
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="px-4 py-2 rounded-full bg-gray-800/50 text-sm text-gray-300 flex items-center">
                <span className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse" />
                Neural Network: {Math.floor(neuralActivity)}% Active
              </div>
              <button className="p-2 rounded-full bg-gray-800/50 hover:bg-gray-800/80 text-gray-400 hover:text-white transition-colors">
                <span className="text-xl">⚡</span>
              </button>
            </div>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-8 py-8">
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric) => (
            <div 
              key={metric.id}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${metric.color} flex items-center justify-center text-2xl`}>
                  {metric.icon}
                </div>
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-900/30 text-green-400">
                  {metric.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">{metric.value}</h3>
              <p className="text-sm text-gray-400">{metric.title}</p>
              <p className="text-xs text-gray-500 mt-2">{metric.description}</p>
            </div>
          ))}
        </div>
        
        {/* Activity Feed */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-white">Neural Activity Feed</h2>
            <button className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
              View All Activity
            </button>
          </div>
          
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div 
                key={activity.id}
                className="flex items-start p-4 rounded-xl bg-gray-800/30 hover:bg-gray-800/50 transition-colors border border-gray-800/50"
              >
                <div className="w-10 h-10 rounded-lg bg-gray-700/50 flex items-center justify-center text-xl mr-4 flex-shrink-0">
                  {activity.icon}
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-white">{activity.title}</h4>
                  <p className="text-sm text-gray-400">{activity.description}</p>
                </div>
                <span className="text-xs text-gray-500 ml-4 whitespace-nowrap">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8">
        <button className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white flex items-center justify-center text-2xl shadow-lg hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300">
          <span className="transform transition-transform group-hover:rotate-90">+</span>
        </button>
      </div>
    </div>
  );
}
