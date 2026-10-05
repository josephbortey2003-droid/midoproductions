import React, { useEffect, useState } from 'react';

export default function AmbientStageLight() {
  const [pos, setPos] = useState({ x: 50, y: 30 });

  useEffect(() => {
    let targetX = 50;
    let targetY = 30;
    let currentX = 50;
    let currentY = 30;
    let animationFrame;

    const handleMouseMove = (e) => {
      targetX = (e.clientX / window.innerWidth) * 100;
      targetY = (e.clientY / window.innerHeight) * 100;
    };

    const updatePosition = () => {
      // Smooth interpolation (lerp)
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;
      setPos({ x: currentX, y: currentY });
      animationFrame = requestAnimationFrame(updatePosition);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    animationFrame = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      <div
        className="w-[700px] h-[700px] rounded-full absolute -translate-x-1/2 -translate-y-1/2 blur-[140px] opacity-40 transition-transform duration-75"
        style={{
          left: `${pos.x}%`,
          top: `${pos.y}%`,
          background: 'radial-gradient(circle, rgba(14, 165, 233, 0.12) 0%, rgba(10, 24, 143, 0.04) 50%, transparent 70%)',
        }}
      />
    </div>
  );
}
