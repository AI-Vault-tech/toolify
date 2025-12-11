'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface OrbitingElement {
  id: string;
  name: string;
  icon: string;
  color: string;
  size: number;
  orbitRadius: number;
  speed: number;
  angle: number;
  zIndex: number;
}

export default function RevolutionaryOrbit() {
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const animationRef = useRef<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Create orbiting elements
  const orbitingElements: OrbitingElement[] = [
    {
      id: 'creative',
      name: 'Creative Tools',
      icon: '🎨',
      color: 'from-purple-500 to-pink-500',
      size: 60,
      orbitRadius: 200,
      speed: 0.01,
      angle: 0,
      zIndex: 10
    },
    {
      id: 'dev',
      name: 'Developer Tools',
      icon: '💻',
      color: 'from-green-500 to-emerald-500',
      size: 50,
      orbitRadius: 150,
      speed: 0.015,
      angle: Math.PI / 3,
      zIndex: 20
    },
    {
      id: 'business',
      name: 'Business Tools',
      icon: '📊',
      color: 'from-blue-500 to-cyan-500',
      size: 45,
      orbitRadius: 120,
      speed: 0.02,
      angle: Math.PI / 1.5,
      zIndex: 30
    },
    {
      id: 'marketing',
      name: 'Marketing Tools',
      icon: '📈',
      color: 'from-amber-500 to-orange-500',
      size: 40,
      orbitRadius: 100,
      speed: 0.025,
      angle: Math.PI,
      zIndex: 40
    },
    {
      id: 'health',
      name: 'Healthcare Tools',
      icon: '🏥',
      color: 'from-teal-500 to-cyan-500',
      size: 35,
      orbitRadius: 80,
      speed: 0.03,
      angle: Math.PI * 1.5,
      zIndex: 50
    },
    {
      id: 'education',
      name: 'Education Tools',
      icon: '🎓',
      color: 'from-indigo-500 to-purple-500',
      size: 30,
      orbitRadius: 60,
      speed: 0.035,
      angle: Math.PI * 1.8,
      zIndex: 60
    }
  ];

  const [elements, setElements] = useState<OrbitingElement[]>(orbitingElements);

  // Animation loop
  useEffect(() => {
    if (!isPlaying) return;

    const animate = () => {
      setElements(prev => 
        prev.map(element => ({
          ...element,
          angle: element.angle + element.speed
        }))
      );
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPlaying]);

  const toggleAnimation = () => {
    setIsPlaying(!isPlaying);
  };

  const resetAnimation = () => {
    setElements(orbitingElements);
  };

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center">
      {/* Control Panel */}
      <div className="absolute top-4 right-4 z-50 flex gap-2">
        <button
          onClick={toggleAnimation}
          className="px-4 py-2 bg-gray-800/80 backdrop-blur-lg rounded-xl border border-gray-700 text-white hover:bg-gray-700/80 transition-all"
        >
          {isPlaying ? '⏸️ Pause' : '▶️ Play'}
        </button>
        <button
          onClick={resetAnimation}
          className="px-4 py-2 bg-gray-800/80 backdrop-blur-lg rounded-xl border border-gray-700 text-white hover:bg-gray-700/80 transition-all"
        >
          🔄 Reset
        </button>
      </div>

      {/* Central Core */}
      <div className="absolute w-24 h-24 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center shadow-2xl shadow-cyan-500/30 z-40">
        <span className="text-3xl">⚛️</span>
      </div>

      {/* Orbit Rings */}
      {[200, 150, 120, 100, 80, 60].map((radius, index) => (
        <div
          key={radius}
          className="absolute rounded-full border border-cyan-500/20"
          style={{
            width: `${radius * 2}px`,
            height: `${radius * 2}px`,
          }}
        />
      ))}

      {/* Orbiting Elements */}
      {elements.map((element) => {
        const x = Math.cos(element.angle) * element.orbitRadius;
        const y = Math.sin(element.angle) * element.orbitRadius;
        
        return (
          <motion.div
            key={element.id}
            className={`absolute rounded-full bg-gradient-to-r ${element.color} flex items-center justify-center shadow-lg cursor-pointer transform -translate-x-1/2 -translate-y-1/2 ${
              hoveredElement === element.id ? 'scale-110 shadow-xl' : ''
            }`}
            style={{
              width: `${element.size}px`,
              height: `${element.size}px`,
              left: '50%',
              top: '50%',
              zIndex: element.zIndex,
              x: x,
              y: y,
            }}
            whileHover={{ scale: 1.2 }}
            onHoverStart={() => setHoveredElement(element.id)}
            onHoverEnd={() => setHoveredElement(null)}
          >
            <span className="text-2xl">{element.icon}</span>
          </motion.div>
        );
      })}

      {/* Element Labels */}
      {hoveredElement && (
        <motion.div
          className="absolute bg-gray-800/90 backdrop-blur-xl rounded-xl p-4 border border-gray-700 shadow-2xl z-50"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="text-white font-bold text-lg">
            {elements.find(el => el.id === hoveredElement)?.name}
          </div>
          <div className="text-gray-300 text-sm mt-1">
            Click to explore this collection
          </div>
        </motion.div>
      )}

      {/* Info Panel */}
      <div className="absolute bottom-4 left-4 bg-gray-800/80 backdrop-blur-lg rounded-xl p-4 border border-gray-700 max-w-md">
        <h3 className="text-white font-bold text-lg mb-2">Revolutionary Orbit Visualization</h3>
        <p className="text-gray-300 text-sm">
          Experience how AI collections orbit around core principles. Each ring represents a different 
          level of specialization, with elements moving at varying speeds to demonstrate relationships.
        </p>
      </div>
    </div>
  );
}