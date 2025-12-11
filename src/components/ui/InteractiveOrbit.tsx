'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function InteractiveOrbit() {
  const [isHovered, setIsHovered] = useState(false);
  const orbitRef = useRef<HTMLDivElement>(null);
  
  // Rotate animation
  const rotateAnimation = {
    rotate: [0, 360],
    transition: {
      repeat: Infinity,
      duration: 20,
      ease: "linear"
    }
  };
  
  // Counter-rotate animation for inner elements
  const counterRotateAnimation = {
    rotate: [0, -360],
    transition: {
      repeat: Infinity,
      duration: 20,
      ease: "linear"
    }
  };

  return (
    <div 
      className="relative w-full h-96 flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Outer orbit ring */}
      <motion.div
        className="absolute w-80 h-80 rounded-full border-2 border-purple-500/30"
        animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      
      {/* Middle orbit ring */}
      <motion.div
        className="absolute w-64 h-64 rounded-full border-2 border-pink-500/30"
        animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      
      {/* Inner orbit ring */}
      <motion.div
        className="absolute w-48 h-48 rounded-full border-2 border-blue-500/30"
        animate={isHovered ? { scale: 1.02 } : { scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      
      {/* Rotating outer circle */}
      <motion.div
        className="absolute"
        animate={rotateAnimation}
      >
        <div className="w-80 h-80 rounded-full flex items-center justify-center">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-2xl shadow-2xl"
              style={{
                transform: `rotate(${i * 45}deg) translate(160px) rotate(-${i * 45}deg)`
              }}
            >
              🔮
            </div>
          ))}
        </div>
      </motion.div>
      
      {/* Counter-rotating middle circle */}
      <motion.div
        className="absolute"
        animate={counterRotateAnimation}
      >
        <div className="w-64 h-64 rounded-full flex items-center justify-center">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center text-xl shadow-2xl"
              style={{
                transform: `rotate(${i * 60}deg) translate(120px) rotate(-${i * 60}deg)`
              }}
            >
              🤖
            </div>
          ))}
        </div>
      </motion.div>
      
      {/* Counter-rotating inner circle */}
      <motion.div
        className="absolute"
        animate={rotateAnimation}
      >
        <div className="w-48 h-48 rounded-full flex items-center justify-center">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute w-12 h-12 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-600 flex items-center justify-center text-lg shadow-2xl"
              style={{
                transform: `rotate(${i * 90}deg) translate(80px) rotate(-${i * 90}deg)`
              }}
            >
              🧠
            </div>
          ))}
        </div>
      </motion.div>
      
      {/* Center core */}
      <motion.div
        className="w-24 h-24 rounded-3xl bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center text-3xl shadow-2xl"
        animate={isHovered ? { scale: 1.2, rotate: 360 } : { scale: 1, rotate: 0 }}
        transition={{ duration: 0.5 }}
      >
        ⚡
      </motion.div>
      
      {/* Interactive glow effect */}
      <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl opacity-0 ${isHovered ? 'opacity-100' : ''} transition-opacity duration-500`}></div>
    </div>
  );
}