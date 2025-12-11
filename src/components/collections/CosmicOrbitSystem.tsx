'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface CosmicBody {
  id: string;
  name: string;
  icon: string;
  category: string;
  tools: number;
  position: { x: number; y: number; z: number };
  velocity: { x: number; y: number; z: number };
  mass: number;
  color: string;
  trail: { x: number; y: number; z: number }[];
  connections: string[];
}

export default function CosmicOrbitSystem() {
  const [selectedBody, setSelectedBody] = useState<string | null>(null);
  const [time, setTime] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Cosmic bodies with gravitational properties
  const cosmicBodies: CosmicBody[] = [
    {
      id: 'startup',
      name: 'Startup AI Stack',
      icon: '🚀',
      category: 'Business',
      tools: 24,
      position: { x: 200, y: 0, z: 0 },
      velocity: { x: 0, y: 0.02, z: 0 },
      mass: 100,
      color: 'from-blue-500 to-cyan-500',
      trail: [],
      connections: ['enterprise', 'marketing']
    },
    {
      id: 'enterprise',
      name: 'Enterprise AI Suite',
      icon: '🏢',
      category: 'Business',
      tools: 42,
      position: { x: -200, y: 0, z: 0 },
      velocity: { x: 0, y: -0.015, z: 0 },
      mass: 150,
      color: 'from-purple-500 to-indigo-500',
      trail: [],
      connections: ['startup', 'finance']
    },
    {
      id: 'creative',
      name: 'Content Creator Toolkit',
      icon: '🎨',
      category: 'Creative',
      tools: 38,
      position: { x: 0, y: 200, z: 0 },
      velocity: { x: -0.01, y: 0, z: 0 },
      mass: 80,
      color: 'from-pink-500 to-rose-500',
      trail: [],
      connections: ['gaming', 'media']
    },
    {
      id: 'developer',
      name: 'Developer AI Arsenal',
      icon: '💻',
      category: 'Technology',
      tools: 31,
      position: { x: 0, y: -200, z: 0 },
      velocity: { x: 0.015, y: 0, z: 0 },
      mass: 90,
      color: 'from-green-500 to-emerald-500',
      trail: [],
      connections: ['cybersecurity', 'devops']
    },
    {
      id: 'marketing',
      name: 'Marketing AI Hub',
      icon: '📈',
      category: 'Marketing',
      tools: 29,
      position: { x: 0, y: 0, z: 200 },
      velocity: { x: 0, y: 0.01, z: 0 },
      mass: 70,
      color: 'from-amber-500 to-orange-500',
      trail: [],
      connections: ['startup', 'ecommerce']
    },
    {
      id: 'healthcare',
      name: 'Healthcare AI Revolution',
      icon: '🏥',
      category: 'Healthcare',
      tools: 35,
      position: { x: 0, y: 0, z: -200 },
      velocity: { x: 0, y: -0.02, z: 0 },
      mass: 120,
      color: 'from-teal-500 to-cyan-500',
      trail: [],
      connections: ['research', 'legal']
    },
    {
      id: 'finance',
      name: 'Financial Intelligence Suite',
      icon: '💰',
      category: 'Finance',
      tools: 28,
      position: { x: 150, y: 150, z: 150 },
      velocity: { x: -0.01, y: 0, z: 0.01 },
      mass: 110,
      color: 'from-yellow-500 to-amber-500',
      trail: [],
      connections: ['enterprise', 'ecommerce']
    },
    {
      id: 'research',
      name: 'Research & Academia',
      icon: '🔬',
      category: 'Education',
      tools: 22,
      position: { x: -150, y: -150, z: -150 },
      velocity: { x: 0.01, y: 0, z: -0.01 },
      mass: 95,
      color: 'from-violet-500 to-purple-500',
      trail: [],
      connections: ['healthcare', 'legal']
    }
  ];

  const [bodies, setBodies] = useState<CosmicBody[]>(cosmicBodies);

  // Animation loop
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => prev + 0.1);
      
      setBodies(prev => 
        prev.map(body => {
          // Apply gravitational forces from other bodies
          let fx = 0, fy = 0, fz = 0;
          
          prev.forEach(otherBody => {
            if (body.id !== otherBody.id) {
              // Calculate distance
              const dx = otherBody.position.x - body.position.x;
              const dy = otherBody.position.y - body.position.y;
              const dz = otherBody.position.z - body.position.z;
              const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
              
              // Avoid division by zero
              if (distance > 5) {
                // Gravitational force (simplified)
                const force = (body.mass * otherBody.mass) / (distance * distance) * 0.0001;
                fx += (dx / distance) * force;
                fy += (dy / distance) * force;
                fz += (dz / distance) * force;
              }
            }
          });
          
          // Update velocity
          const newVx = body.velocity.x + fx;
          const newVy = body.velocity.y + fy;
          const newVz = body.velocity.z + fz;
          
          // Update position
          const newX = body.position.x + newVx;
          const newY = body.position.y + newVy;
          const newZ = body.position.z + newVz;
          
          // Update trail (keep last 20 positions)
          const newTrail = [...body.trail, { x: body.position.x, y: body.position.y, z: body.position.z }];
          if (newTrail.length > 20) {
            newTrail.shift();
          }
          
          return {
            ...body,
            position: { x: newX, y: newY, z: newZ },
            velocity: { x: newVx, y: newVy, z: newVz },
            trail: newTrail
          };
        })
      );
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

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
      className="relative w-full h-[500px] flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/30 to-black/30"
    >
      {/* Cosmic background */}
      <div className="absolute inset-0">
        {/* Starfield */}
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              opacity: Math.random() * 0.8 + 0.2,
              animationDuration: `${Math.random() * 3 + 1}s`
            }}
          />
        ))}
        
        {/* Particle field */}
        {[...Array(50)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute rounded-full bg-purple-400/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              opacity: Math.random() * 0.3 + 0.1
            }}
          />
        ))}
      </div>
      
      {/* Gravitational field lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }}>
        {bodies.map(body => {
          const proj1 = project3D(body.position.x, body.position.y, body.position.z);
          
          return body.connections.map(connectionId => {
            const connectedBody = bodies.find(b => b.id === connectionId);
            if (!connectedBody) return null;
            
            const proj2 = project3D(connectedBody.position.x, connectedBody.position.y, connectedBody.position.z);
            
            return (
              <line
                key={`${body.id}-${connectionId}`}
                x1={proj1.x + 250}
                y1={proj1.y + 250}
                x2={proj2.x + 250}
                y2={proj2.y + 250}
                stroke={`rgba(139, 92, 246, ${0.3 * proj1.scale})`}
                strokeWidth="1"
                strokeDasharray="5,5"
              />
            );
          });
        })}
      </svg>
      
      {/* Cosmic Bodies */}
      {bodies.map((body) => {
        const projected = project3D(body.position.x, body.position.y, body.position.z);
        
        // Calculate size and opacity based on depth
        const size = Math.max(40, 80 * projected.scale);
        const opacity = Math.min(1, 0.4 + projected.scale * 0.6);
        
        return (
          <motion.div
            key={body.id}
            className={`absolute rounded-2xl flex flex-col items-center justify-center cursor-pointer transform -translate-x-1/2 -translate-y-1/2 ${
              selectedBody === body.id 
                ? 'ring-4 ring-purple-500 scale-110 z-40' 
                : 'hover:scale-105'
            }`}
            style={{
              left: `${projected.x + 250}px`,
              top: `${projected.y + 250}px`,
              width: `${size}px`,
              height: `${size}px`,
              opacity: opacity,
              zIndex: Math.floor(projected.scale * 30) + 10,
              background: `linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(139, 92, 246, 0.3))`,
              border: `2px solid rgba(139, 92, 246, 0.5)`,
              backdropFilter: 'blur(10px)',
              boxShadow: `0 0 ${20 * projected.scale}px rgba(139, 92, 246, ${0.3 * projected.scale})`
            }}
            whileHover={{ scale: 1.1 }}
            onClick={() => setSelectedBody(selectedBody === body.id ? null : body.id)}
            layout
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="text-center">
              <div className="text-2xl mb-1">{body.icon}</div>
              <div className="text-xs font-bold truncate px-1">{body.name}</div>
              <div className="text-[8px] text-gray-300">{body.tools} tools</div>
            </div>
            
            {/* Gravitational aura */}
            <div 
              className="absolute inset-0 rounded-2xl animate-ping"
              style={{
                background: `radial-gradient(circle, transparent, rgba(139, 92, 246, ${0.2 * projected.scale}))`,
                zIndex: -1,
                animationDuration: '2s'
              }}
            />
          </motion.div>
        );
      })}
      
      {/* Trails */}
      {bodies.map(body => (
        <svg key={`trail-${body.id}`} className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 8 }}>
          {body.trail.map((point, index) => {
            const projected = project3D(point.x, point.y, point.z);
            const opacity = (index / body.trail.length) * 0.5;
            
            return (
              <circle
                key={index}
                cx={projected.x + 250}
                cy={projected.y + 250}
                r="2"
                fill={`rgba(139, 92, 246, ${opacity})`}
              />
            );
          })}
        </svg>
      ))}
      
      {/* Central Black Hole */}
      <div 
        className="absolute w-16 h-16 rounded-full bg-gradient-to-r from-purple-900 to-black flex items-center justify-center shadow-2xl shadow-purple-500/30 z-30"
        style={{
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      >
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse"></div>
      </div>
      
      {/* Info Panel */}
      <div className="absolute bottom-4 left-4 bg-gray-800/80 backdrop-blur-lg rounded-xl p-4 border border-gray-700 max-w-md z-50">
        <h3 className="text-white font-bold text-lg mb-2">Cosmic Orbit System</h3>
        <p className="text-gray-300 text-sm">
          Experience AI collections as celestial bodies in a dynamic orbit system. 
          Bodies move according to gravitational physics and form cosmic connections.
        </p>
        {selectedBody && (
          <div className="mt-3 p-2 bg-gray-700/50 rounded-lg">
            <div className="text-white font-bold">
              {bodies.find(b => b.id === selectedBody)?.name}
            </div>
            <div className="text-gray-300 text-xs">
              {bodies.find(b => b.id === selectedBody)?.tools} tools • {bodies.find(b => b.id === selectedBody)?.category}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}