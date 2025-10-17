"use client";

import React, { useEffect, useRef } from 'react';

interface ThreadsProps {
  amplitude?: number;
  distance?: number;
  enableMouseInteraction?: boolean;
  className?: string;
}

const Threads: React.FC<ThreadsProps> = ({
  amplitude = 1,
  distance = 0,
  enableMouseInteraction = true,
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    if (enableMouseInteraction) {
      canvas.addEventListener('mousemove', handleMouseMove);
    }

    const threads: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      connections: number[];
    }> = [];

    const numThreads = 50;
    const connectionDistance = 150 + distance;

    for (let i = 0; i < numThreads; i++) {
      threads.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5 * amplitude,
        vy: (Math.random() - 0.5) * 0.5 * amplitude,
        connections: [],
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      threads.forEach((thread, i) => {
        thread.x += thread.vx;
        thread.y += thread.vy;

        if (thread.x < 0 || thread.x > canvas.width) thread.vx *= -1;
        if (thread.y < 0 || thread.y > canvas.height) thread.vy *= -1;

        if (enableMouseInteraction) {
          const dx = mouseRef.current.x - thread.x;
          const dy = mouseRef.current.y - thread.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 100) {
            thread.x -= dx * 0.01;
            thread.y -= dy * 0.01;
          }
        }

        thread.connections = [];
        threads.forEach((other, j) => {
          if (i !== j) {
            const dx = thread.x - other.x;
            const dy = thread.y - other.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < connectionDistance) {
              thread.connections.push(j);
              const opacity = 1 - distance / connectionDistance;
              ctx.beginPath();
              ctx.strokeStyle = `rgba(16, 185, 129, ${opacity * 0.15})`;
              ctx.lineWidth = 1;
              ctx.moveTo(thread.x, thread.y);
              ctx.lineTo(other.x, other.y);
              ctx.stroke();
            }
          }
        });

        ctx.beginPath();
        ctx.arc(thread.x, thread.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(16, 185, 129, 0.4)';
        ctx.fill();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      if (enableMouseInteraction) {
        canvas.removeEventListener('mousemove', handleMouseMove);
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [amplitude, distance, enableMouseInteraction]);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full ${className}`}
      style={{ display: 'block' }}
    />
  );
};

export default Threads;

