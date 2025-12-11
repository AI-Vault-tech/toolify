'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface CollectionPoint {
  id: string;
  name: string;
  category: string;
  icon: string;
  theta: number;
  phi: number;
  radius: number;
  scale: number;
  pulse: boolean;
}

export default function HolographicCollectionSphere() {
  const [hoveredPoint, setHoveredPoint] = useState<string | null>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isAnimating, setIsAnimating] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);
  
  // Generate collection points in a spherical arrangement
  const collectionPoints: CollectionPoint[] = [
    { id: 'startup', name: 'Startup AI Stack', category: 'Business', icon: '🚀', theta: 0, phi: 0, radius: 180, scale: 1, pulse: true },
    { id: 'enterprise', name: 'Enterprise AI Suite', category: 'Business', icon: '🏢', theta: Math.PI, phi: 0, radius: 180, scale: 1, pulse: false },
    { id: 'creative', name: 'Content Creator Toolkit', category: 'Creative', icon: '🎨', theta: Math.PI/2, phi: Math.PI/2, radius: 180, scale: 1, pulse: true },
    { id: 'developer', name: 'Developer AI Arsenal', category: 'Technology', icon: '💻', theta: 3*Math.PI/2, phi: Math.PI/2, radius: 180, scale: 1, pulse: false },
    { id: 'marketing', name: 'Marketing AI Hub', category: 'Marketing', icon: '📈', theta: Math.PI/2, phi: 0, radius: 180, scale: 1, pulse: true },
    { id: 'healthcare', name: 'Healthcare AI Revolution', category: 'Healthcare', icon: '🏥', theta: 3*Math.PI/2, phi: 0, radius: 180, scale: 1, pulse: false },
    { id: 'finance', name: 'Financial Intelligence Suite', category: 'Finance', icon: '💰', theta: Math.PI/4, phi: Math.PI/4, radius: 180, scale: 1, pulse: true },
    { id: 'research', name: 'Research & Academia', category: 'Education', icon: '🔬', theta: 3*Math.PI/4, phi: 3*Math.PI/4, radius: 180, scale: 1, pulse: false },
    { id: 'legal', name: 'Legal Tech Collection', category: 'Legal', icon: '⚖️', theta: 5*Math.PI/4, phi: Math.PI/3, radius: 180, scale: 1, pulse: true },
    { id: 'ecommerce', name: 'E-commerce AI Mastery', category: 'Retail', icon: '🛒', theta: 7*Math.PI/4, phi: 2*Math.PI/3, radius: 180, scale: 1, pulse: false },
    { id: 'gaming', name: 'Gaming & Entertainment', category: 'Entertainment', icon: '🎮', theta: Math.PI/3, phi: 5*Math.PI/6, radius: 180, scale: 1, pulse: true },
    { id: 'realestate', name: 'Real Estate Intelligence', category: 'Real Estate', icon: '🏠', theta: 2*Math.PI/3, phi: Math.PI/6, radius: 180, scale: 1, pulse: false }
  ];

  const [points, setPoints] = useState<CollectionPoint[]>(collectionPoints);

  // Animation loop
  useEffect(() => {
    if (!isAnimating) return;

    const animate = () => {
      setPoints(prev => 
        prev.map(point => ({
          ...point,
          theta: point.theta + 0.005,
          phi: point.phi + 0.003,
          scale: point.pulse ? 1 + Math.sin(Date.now() * 0.005 + point.theta) * 0.2 : 1
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
  }, [isAnimating]);

  // Handle mouse move for manual rotation
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    setRotation({
      x: mouseY * 0.002,
      y: mouseX * 0.002
    });
  };

  const toggleAnimation = () => {
    setIsAnimating(!isAnimating);
  };

  // Convert spherical coordinates to Cartesian
  const sphericalToCartesian = (theta: number, phi: number, radius: number) => {
    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);
    return { x, y, z };
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
      onMouseMove={handleMouseMove}
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

      {/* Holographic Sphere Container */}
      <div 
        className="relative w-full h-full flex items-center justify-center"
        style={{
          transform: `rotateX(${rotation.x}rad) rotateY(${rotation.y}rad)`,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.1s ease-out'
        }}
      >
        {/* Outer sphere wireframe */}
        <div className="absolute w-80 h-80 rounded-full border border-cyan-500/20"></div>
        <div className="absolute w-80 h-80 rounded-full border border-purple-500/20 rotate-90"></div>
        <div className="absolute w-80 h-80 rounded-full border border-pink-500/20 rotate-45"></div>
        
        {/* Inner sphere wireframe */}
        <div className="absolute w-60 h-60 rounded-full border border-blue-500/20"></div>
        <div className="absolute w-60 h-60 rounded-full border border-indigo-500/20 rotate-90"></div>
        <div className="absolute w-60 h-60 rounded-full border border-violet-500/20 rotate-45"></div>
        
        {/* Central Core */}
        <div className="absolute w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center shadow-2xl shadow-cyan-500/30 z-30 animate-pulse">
          <span className="text-xl">⚛️</span>
        </div>
        
        {/* Collection Points */}
        {points.map((point) => {
          const cartesian = sphericalToCartesian(point.theta, point.phi, point.radius);
          const projected = project3D(cartesian.x, cartesian.y, cartesian.z);
          
          // Calculate size and opacity based on depth
          const size = Math.max(30, 60 * projected.scale);
          const opacity = Math.min(1, 0.3 + projected.scale * 0.7);
          
          return (
            <motion.div
              key={point.id}
              className={`absolute rounded-2xl flex flex-col items-center justify-center cursor-pointer transform -translate-x-1/2 -translate-y-1/2 ${
                hoveredPoint === point.id 
                  ? 'ring-4 ring-purple-500 scale-110 z-40' 
                  : 'hover:scale-105'
              } ${point.pulse ? 'animate-pulse' : ''}`}
              style={{
                left: `${projected.x + 250}px`,
                top: `${projected.y + 250}px`,
                width: `${size}px`,
                height: `${size}px`,
                opacity: opacity,
                zIndex: Math.floor(projected.scale * 30) + 10,
                background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(139, 92, 246, 0.3))',
                border: '1px solid rgba(139, 92, 246, 0.5)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)'
              }}
              whileHover={{ scale: 1.2 }}
              onHoverStart={() => setHoveredPoint(point.id)}
              onHoverEnd={() => setHoveredPoint(null)}
              layout
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="text-center">
                <div className="text-xl mb-1">{point.icon}</div>
                <div className="text-xs font-bold truncate px-1">{point.name}</div>
              </div>
            </motion.div>
          );
        })}

        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }}>
          {points.map((point, i) => {
            const cartesian1 = sphericalToCartesian(point.theta, point.phi, point.radius);
            const projected1 = project3D(cartesian1.x, cartesian1.y, cartesian1.z);
            
            // Connect to next few points
            return points.slice(i+1, i+4).map((nextPoint, j) => {
              const cartesian2 = sphericalToCartesian(nextPoint.theta, nextPoint.phi, nextPoint.radius);
              const projected2 = project3D(cartesian2.x, cartesian2.y, cartesian2.z);
              
              // Calculate opacity based on average depth
              const avgScale = (projected1.scale + projected2.scale) / 2;
              const opacity = Math.min(0.5, avgScale * 0.3);
              
              return (
                <line
                  key={`${point.id}-${nextPoint.id}`}
                  x1={projected1.x + 250}
                  y1={projected1.y + 250}
                  x2={projected2.x + 250}
                  y2={projected2.y + 250}
                  stroke={`rgba(139, 92, 246, ${opacity})`}
                  strokeWidth="1"
                />
              );
            });
          })}
        </svg>
      </div>

      {/* Info Panel */}
      <div className="absolute bottom-4 left-4 bg-gray-800/80 backdrop-blur-lg rounded-xl p-4 border border-gray-700 max-w-md z-50">
        <h3 className="text-white font-bold text-lg mb-2">Holographic Collection Sphere</h3>
        <p className="text-gray-300 text-sm">
          Experience AI collections arranged in a dynamic 3D holographic sphere. 
          {isAnimating ? ' Points pulse and orbit automatically.' : ' Move your mouse to rotate the view.'}
        </p>
        {hoveredPoint && (
          <div className="mt-3 p-2 bg-gray-700/50 rounded-lg">
            <div className="text-white font-bold">
              {points.find(p => p.id === hoveredPoint)?.name}
            </div>
            <div className="text-gray-300 text-xs">
              {points.find(p => p.id === hoveredPoint)?.category}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}