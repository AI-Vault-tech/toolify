'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface QuantumNode {
  id: string;
  name: string;
  category: string;
  icon: string;
  x: number;
  y: number;
  z: number;
  connections: string[];
  energy: number;
  frequency: number;
}

export default function QuantumCollectionNetwork() {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(true);
  const [time, setTime] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Quantum nodes with dynamic properties
  const quantumNodes: QuantumNode[] = [
    { id: 'startup', name: 'Startup AI Stack', category: 'Business', icon: '🚀', x: 0, y: 0, z: 0, connections: ['enterprise', 'marketing'], energy: 0.8, frequency: 0.02 },
    { id: 'enterprise', name: 'Enterprise AI Suite', category: 'Business', icon: '🏢', x: 200, y: 50, z: 30, connections: ['startup', 'finance'], energy: 0.9, frequency: 0.015 },
    { id: 'creative', name: 'Content Creator Toolkit', category: 'Creative', icon: '🎨', x: -150, y: 100, z: -50, connections: ['gaming', 'media'], energy: 0.7, frequency: 0.025 },
    { id: 'developer', name: 'Developer AI Arsenal', category: 'Technology', icon: '💻', x: 100, y: -150, z: 80, connections: ['cybersecurity', 'devops'], energy: 0.85, frequency: 0.018 },
    { id: 'marketing', name: 'Marketing AI Hub', category: 'Marketing', icon: '📈', x: -100, y: -100, z: -100, connections: ['startup', 'ecommerce'], energy: 0.75, frequency: 0.022 },
    { id: 'healthcare', name: 'Healthcare AI Revolution', category: 'Healthcare', icon: '🏥', x: 150, y: 150, z: -80, connections: ['research', 'legal'], energy: 0.9, frequency: 0.012 },
    { id: 'finance', name: 'Financial Intelligence Suite', category: 'Finance', icon: '💰', x: -200, y: 50, z: 120, connections: ['enterprise', 'ecommerce'], energy: 0.8, frequency: 0.019 },
    { id: 'research', name: 'Research & Academia', category: 'Education', icon: '🔬', x: 50, y: 200, z: 60, connections: ['healthcare', 'legal'], energy: 0.85, frequency: 0.016 }
  ];

  const [nodes, setNodes] = useState<QuantumNode[]>(quantumNodes);

  // Animation loop
  useEffect(() => {
    if (!isAnimating) return;

    const interval = setInterval(() => {
      setTime(prev => prev + 0.05);
      
      setNodes(prev => 
        prev.map(node => ({
          ...node,
          x: node.x + Math.sin(time * node.frequency) * 2,
          y: node.y + Math.cos(time * node.frequency * 1.3) * 2,
          z: node.z + Math.sin(time * node.frequency * 0.7) * 2,
          energy: 0.7 + Math.sin(time * node.frequency * 2) * 0.3
        }))
      );
    }, 50);

    return () => clearInterval(interval);
  }, [isAnimating, time]);

  const toggleAnimation = () => {
    setIsAnimating(!isAnimating);
  };

  // Project 3D to 2D with perspective
  const project3D = (x: number, y: number, z: number) => {
    const distance = 800;
    const scale = distance / (distance + z);
    
    return {
      x: x * scale,
      y: y * scale,
      scale: scale
    };
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[500px] flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/30 to-black/30"
    >
      {/* Control Panel */}
      <div className="absolute top-4 right-4 z-50 flex gap-2">
        <button
          onClick={toggleAnimation}
          className="px-4 py-2 bg-gray-800/80 backdrop-blur-lg rounded-xl border border-gray-700 text-white hover:bg-gray-700/80 transition-all text-sm flex items-center gap-2"
        >
          {isAnimating ? '⏸️ Pause' : '▶️ Play'}
        </button>
      </div>

      {/* Quantum Field Container */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Particle field background */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-cyan-400/20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              animationDuration: `${Math.random() * 3 + 1}s`,
              opacity: Math.random() * 0.5 + 0.1
            }}
          />
        ))}
        
        {/* Connection Lines with Quantum Effects */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 10 }}>
          {nodes.map(node => {
            const projected1 = project3D(node.x, node.y, node.z);
            
            return node.connections.map(connectionId => {
              const connectedNode = nodes.find(n => n.id === connectionId);
              if (!connectedNode) return null;
              
              const projected2 = project3D(connectedNode.x, connectedNode.y, connectedNode.z);
              
              // Quantum wave effect
              const waveOffset = Math.sin(time * 2 + projected1.x * 0.01) * 5;
              
              return (
                <line
                  key={`${node.id}-${connectionId}`}
                  x1={projected1.x + 250}
                  y1={projected1.y + 250 + waveOffset}
                  x2={projected2.x + 250}
                  y2={projected2.y + 250}
                  stroke={`rgba(139, 92, 246, ${node.energy * 0.5})`}
                  strokeWidth={`${node.energy * 2}`}
                  strokeDasharray="5,5"
                />
              );
            });
          })}
        </svg>

        {/* Quantum Nodes */}
        {nodes.map((node) => {
          const projected = project3D(node.x, node.y, node.z);
          
          // Calculate size and opacity based on depth and energy
          const size = Math.max(40, 70 * projected.scale * node.energy);
          const opacity = Math.min(1, 0.4 + projected.scale * 0.6 * node.energy);
          
          return (
            <motion.div
              key={node.id}
              className={`absolute rounded-2xl flex flex-col items-center justify-center cursor-pointer transform -translate-x-1/2 -translate-y-1/2 ${
                selectedNode === node.id 
                  ? 'ring-4 ring-purple-500 scale-110 z-40' 
                  : 'hover:scale-105'
              }`}
              style={{
                left: `${projected.x + 250}px`,
                top: `${projected.y + 250}px`,
                width: `${size}px`,
                height: `${size}px`,
                opacity: opacity,
                zIndex: Math.floor(projected.scale * 20) + 20,
                background: `radial-gradient(circle, rgba(99, 102, 241, ${node.energy * 0.4}), rgba(139, 92, 246, ${node.energy * 0.2}))`,
                border: `2px solid rgba(139, 92, 246, ${node.energy * 0.7})`,
                backdropFilter: 'blur(10px)',
                boxShadow: `0 0 ${20 * node.energy}px rgba(139, 92, 246, ${node.energy * 0.5})`
              }}
              whileHover={{ scale: 1.2 }}
              onClick={() => setSelectedNode(selectedNode === node.id ? null : node.id)}
              layout
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="text-center">
                <div className="text-2xl mb-1">{node.icon}</div>
                <div className="text-xs font-bold truncate px-1">{node.name}</div>
              </div>
              
              {/* Energy aura */}
              <div 
                className="absolute inset-0 rounded-2xl animate-ping"
                style={{
                  background: `radial-gradient(circle, transparent, rgba(139, 92, 246, ${node.energy * 0.3}))`,
                  zIndex: -1,
                  animationDuration: `${3 / node.energy}s`
                }}
              />
            </motion.div>
          );
        })}

        {/* Central Quantum Core */}
        <div className="absolute w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center shadow-2xl shadow-cyan-500/30 z-30 animate-pulse">
          <span className="text-2xl">⚛️</span>
        </div>
      </div>

      {/* Info Panel */}
      <div className="absolute bottom-4 left-4 bg-gray-800/80 backdrop-blur-lg rounded-xl p-4 border border-gray-700 max-w-md z-50">
        <h3 className="text-white font-bold text-lg mb-2">Quantum Collection Network</h3>
        <p className="text-gray-300 text-sm">
          Experience AI collections as quantum entities in a dynamic network. 
          {isAnimating ? ' Nodes oscillate with quantum energy.' : ' Animation paused.'}
        </p>
        {selectedNode && (
          <div className="mt-3 p-2 bg-gray-700/50 rounded-lg">
            <div className="text-white font-bold">
              {nodes.find(n => n.id === selectedNode)?.name}
            </div>
            <div className="text-gray-300 text-xs">
              {nodes.find(n => n.id === selectedNode)?.category}
            </div>
            <div className="text-cyan-400 text-xs mt-1">
              Energy: {((nodes.find(n => n.id === selectedNode)?.energy || 0) * 100).toFixed(0)}%
            </div>
          </div>
        )}
      </div>
    </div>
  );
}