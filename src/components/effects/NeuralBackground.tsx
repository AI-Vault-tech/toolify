'use client';

import { useEffect, useRef } from 'react';

const NeuralBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Nodes and connections
    const nodes: { x: number; y: number; vx: number; vy: number }[] = [];
    const connections: { a: number; b: number }[] = [];
    const NODE_COUNT = 30;
    const CONNECTION_DISTANCE = 200;
    
    // Create nodes
    for (let i = 0; i < NODE_COUNT; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: Math.random() * 2 - 1,
        vy: Math.random() * 2 - 1
      });
    }
    
    // Create connections
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (Math.random() > 0.8) {
          connections.push({ a: i, b: j });
        }
      }
    }
    
    // Animation loop
    let animationFrameId: number;
    
    const animate = () => {
      if (!ctx) return;
      
      // Clear with semi-transparent black for trail effect
      ctx.fillStyle = 'rgba(3, 7, 18, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw nodes
      nodes.forEach((node, i) => {
        // Update position
        node.x += node.vx;
        node.y += node.vy;
        
        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
        
        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(99, 102, 241, 0.8)';
        ctx.fill();
      });
      
      // Draw connections
      connections.forEach(conn => {
        const nodeA = nodes[conn.a];
        const nodeB = nodes[conn.b];
        
        const dx = nodeA.x - nodeB.x;
        const dy = nodeA.y - nodeB.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < CONNECTION_DISTANCE) {
          const opacity = 1 - (dist / CONNECTION_DISTANCE);
          ctx.strokeStyle = `rgba(99, 102, 241, ${opacity * 0.3})`;
          ctx.lineWidth = 1;
          
          ctx.beginPath();
          ctx.moveTo(nodeA.x, nodeA.y);
          ctx.lineTo(nodeB.x, nodeB.y);
          ctx.stroke();
        }
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-900/20 to-gray-900" />
      
      {/* Neural network canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full opacity-20"
      />
      
      {/* Animated gradient lights */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent animate-[spin_30s_linear_infinite]" />
        <div className="absolute -top-1/2 -right-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent animate-[spin_25s_linear_infinite_reverse]" />
        <div className="absolute -bottom-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent animate-[spin_35s_linear_infinite]" />
      </div>
    </div>
  );
};

export default NeuralBackground;
