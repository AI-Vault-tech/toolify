'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface CollectionNode {
  id: string;
  name: string;
  icon: string;
  category: string;
  tools: number;
  position: { x: number; y: number; z: number };
  velocity: { x: number; y: number; z: number };
  connections: string[];
}

export default function ThreeDOrbitVisualization() {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Collection nodes with 3D positions
  const collectionNodes: CollectionNode[] = [
    {
      id: 'startup',
      name: 'Startup AI Stack',
      icon: '🚀',
      category: 'Business',
      tools: 24,
      position: { x: 150, y: 0, z: 0 },
      velocity: { x: 0, y: 0.02, z: 0 },
      connections: ['enterprise', 'marketing']
    },
    {
      id: 'enterprise',
      name: 'Enterprise AI Suite',
      icon: '🏢',
      category: 'Business',
      tools: 42,
      position: { x: -150, y: 0, z: 0 },
      velocity: { x: 0, y: -0.015, z: 0 },
      connections: ['startup', 'finance']
    },
    {
      id: 'creative',
      name: 'Content Creator Toolkit',
      icon: '🎨',
      category: 'Creative',
      tools: 38,
      position: { x: 0, y: 150, z: 0 },
      velocity: { x: -0.01, y: 0, z: 0 },
      connections: ['gaming', 'media']
    },
    {
      id: 'developer',
      name: 'Developer AI Arsenal',
      icon: '💻',
      category: 'Technology',
      tools: 31,
      position: { x: 0, y: -150, z: 0 },
      velocity: { x: 0.015, y: 0, z: 0 },
      connections: ['cybersecurity', 'devops']
    },
    {
      id: 'marketing',
      name: 'Marketing AI Hub',
      icon: '📈',
      category: 'Marketing',
      tools: 29,
      position: { x: 0, y: 0, z: 150 },
      velocity: { x: 0, y: 0.01, z: 0 },
      connections: ['startup', 'ecommerce']
    },
    {
      id: 'healthcare',
      name: 'Healthcare AI Revolution',
      icon: '🏥',
      category: 'Healthcare',
      tools: 35,
      position: { x: 0, y: 0, z: -150 },
      velocity: { x: 0, y: -0.02, z: 0 },
      connections: ['research', 'legal']
    },
    {
      id: 'finance',
      name: 'Financial Intelligence Suite',
      icon: '💰',
      category: 'Finance',
      tools: 28,
      position: { x: 100, y: 100, z: 100 },
      velocity: { x: -0.01, y: 0, z: 0.01 },
      connections: ['enterprise', 'ecommerce']
    },
    {
      id: 'research',
      name: 'Research & Academia',
      icon: '🔬',
      category: 'Education',
      tools: 22,
      position: { x: -100, y: -100, z: -100 },
      velocity: { x: 0.01, y: 0, z: -0.01 },
      connections: ['healthcare', 'legal']
    }
  ];

  const [nodes, setNodes] = useState<CollectionNode[]>(collectionNodes);

  // Auto-rotation effect
  useEffect(() => {
    if (!isAutoRotating) return;

    const interval = setInterval(() => {
      setRotation(prev => ({
        x: prev.x + 0.005,
        y: prev.y + 0.01
      }));
    }, 50);

    return () => clearInterval(interval);
  }, [isAutoRotating]);

  // Node animation
  useEffect(() => {
    const interval = setInterval(() => {
      setNodes(prev => 
        prev.map(node => {
          // Simple orbital movement
          const newX = node.position.x * Math.cos(node.velocity.x) - node.position.z * Math.sin(node.velocity.x);
          const newZ = node.position.x * Math.sin(node.velocity.x) + node.position.z * Math.cos(node.velocity.x);
          
          return {
            ...node,
            position: {
              ...node.position,
              x: newX,
              z: newZ
            }
          };
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Handle mouse move for manual rotation
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !isAutoRotating) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    setRotation({
      x: mouseY * 0.001,
      y: mouseX * 0.001
    });
  };

  const toggleAutoRotation = () => {
    setIsAutoRotating(!isAutoRotating);
  };

  // Project 3D coordinates to 2D for rendering
  const project3D = (x: number, y: number, z: number) => {
    // Simple perspective projection
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
      className="relative w-full h-[500px] flex items-center justify-center overflow-hidden rounded-2xl"
      onMouseMove={handleMouseMove}
    >
      {/* Control Panel */}
      <div className="absolute top-4 right-4 z-50 flex gap-2">
        <button
          onClick={toggleAutoRotation}
          className="px-4 py-2 bg-gray-800/80 backdrop-blur-lg rounded-xl border border-gray-700 text-white hover:bg-gray-700/80 transition-all text-sm"
        >
          {isAutoRotating ? '⏸️ Auto' : '▶️ Manual'}
        </button>
      </div>

      {/* 3D Space Container */}
      <div 
        className="relative w-full h-full"
        style={{
          transform: `rotateX(${rotation.x}rad) rotateY(${rotation.y}rad)`,
          transformStyle: 'preserve-3d',
          transition: isAutoRotating ? 'none' : 'transform 0.1s ease-out'
        }}
      >
        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
          {nodes.map(node => {
            const proj1 = project3D(node.position.x, node.position.y, node.position.z);
            
            return node.connections.map(connectionId => {
              const connectedNode = nodes.find(n => n.id === connectionId);
              if (!connectedNode) return null;
              
              const proj2 = project3D(connectedNode.position.x, connectedNode.position.y, connectedNode.position.z);
              
              return (
                <line
                  key={`${node.id}-${connectionId}`}
                  x1={proj1.x + 250}
                  y1={proj1.y + 250}
                  x2={proj2.x + 250}
                  y2={proj2.y + 250}
                  stroke="rgba(139, 92, 246, 0.3)"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />
              );
            });
          })}
        </svg>

        {/* Collection Nodes */}
        {nodes.map((node) => {
          const projected = project3D(node.position.x, node.position.y, node.position.z);
          
          // Calculate size based on depth
          const size = Math.max(40, 80 * projected.scale);
          const opacity = Math.min(1, 0.5 + projected.scale * 0.5);
          
          return (
            <motion.div
              key={node.id}
              className={`absolute rounded-2xl flex items-center justify-center cursor-pointer transform -translate-x-1/2 -translate-y-1/2 ${
                selectedNode === node.id 
                  ? 'ring-4 ring-purple-500 scale-110' 
                  : 'hover:scale-105'
              }`}
              style={{
                left: `${projected.x + 250}px`,
                top: `${projected.y + 250}px`,
                width: `${size}px`,
                height: `${size}px`,
                opacity: opacity,
                zIndex: Math.floor(projected.scale * 100),
                background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.2))',
                border: '1px solid rgba(139, 92, 246, 0.3)',
                backdropFilter: 'blur(10px)',
              }}
              whileHover={{ scale: 1.1 }}
              onClick={() => setSelectedNode(selectedNode === node.id ? null : node.id)}
              layout
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="text-center">
                <div className="text-2xl mb-1">{node.icon}</div>
                <div className="text-xs font-bold truncate px-1">{node.name}</div>
                <div className="text-[8px] text-gray-300">{node.tools} tools</div>
              </div>
            </motion.div>
          );
        })}

        {/* Central Core */}
        <div 
          className="absolute w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center shadow-2xl shadow-cyan-500/30 transform -translate-x-1/2 -translate-y-1/2"
          style={{
            left: '50%',
            top: '50%',
            zIndex: 50
          }}
        >
          <span className="text-2xl">⚛️</span>
        </div>
      </div>

      {/* Info Panel */}
      <div className="absolute bottom-4 left-4 bg-gray-800/80 backdrop-blur-lg rounded-xl p-4 border border-gray-700 max-w-md z-50">
        <h3 className="text-white font-bold text-lg mb-2">3D Interactive Visualization</h3>
        <p className="text-gray-300 text-sm">
          Explore AI collections in 3D space. Collections orbit around the central core, with connections showing relationships.
          {isAutoRotating ? ' Auto-rotation enabled.' : ' Move your mouse to rotate the view.'}
        </p>
        {selectedNode && (
          <div className="mt-3 p-2 bg-gray-700/50 rounded-lg">
            <div className="text-white font-bold">
              {nodes.find(n => n.id === selectedNode)?.name}
            </div>
            <div className="text-gray-300 text-xs">
              {nodes.find(n => n.id === selectedNode)?.tools} tools • {nodes.find(n => n.id === selectedNode)?.category}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}