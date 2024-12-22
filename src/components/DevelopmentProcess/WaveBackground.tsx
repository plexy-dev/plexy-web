import React, { useEffect, useRef } from 'react';

export default function WaveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawWave = (
      y: number,
      amplitude: number,
      frequency: number,
      speed: number,
      color: string
    ) => {
      ctx.beginPath();
      ctx.moveTo(0, canvas.height);

      for (let x = 0; x < canvas.width; x++) {
        const waveY = y + Math.sin(x * frequency + time * speed) * amplitude;
        ctx.lineTo(x, waveY);
      }

      ctx.lineTo(canvas.width, canvas.height);
      ctx.lineTo(0, canvas.height);
      ctx.fillStyle = color;
      ctx.fill();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Multiple waves with different properties
      drawWave(
        canvas.height * 0.8,
        20,
        0.02,
        2,
        'rgba(139, 92, 246, 0.05)'
      );
      drawWave(
        canvas.height * 0.85,
        15,
        0.03,
        1.5,
        'rgba(59, 130, 246, 0.05)'
      );
      drawWave(
        canvas.height * 0.9,
        10,
        0.04,
        1,
        'rgba(16, 185, 129, 0.05)'
      );

      time += 0.01;
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
    />
  );
}