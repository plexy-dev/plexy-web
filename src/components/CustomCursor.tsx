import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [magneticElement, setMagneticElement] = useState<Element | null>(null);
  const [magneticPos, setMagneticPos] = useState({ x: 0, y: 0 });

  const handleMagneticMove = useCallback((e: MouseEvent) => {
    if (magneticElement) {
      const rect = (magneticElement as HTMLElement).getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distance = Math.sqrt(
        Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)
      );

      if (distance < 100) {
        const magnetStrength = 0.4;
        const moveX = (centerX - e.clientX) * magnetStrength;
        const moveY = (centerY - e.clientY) * magnetStrength;
        setMagneticPos({ x: moveX, y: moveY });
      } else {
        setMagneticPos({ x: 0, y: 0 });
      }
    }
  }, [magneticElement]);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      const isInteractive = window.getComputedStyle(target).cursor === 'pointer';
      setIsPointer(isInteractive);
      
      if (isInteractive) {
        setMagneticElement(target);
      } else {
        setMagneticElement(null);
        setMagneticPos({ x: 0, y: 0 });
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', updateCursor);
    window.addEventListener('mousemove', handleMagneticMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('mousemove', handleMagneticMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMagneticMove]);

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Main cursor ring */}
          <motion.div
            className="fixed pointer-events-none z-50"
            animate={{
              x: position.x - (isPointer ? 24 : 12),
              y: position.y - (isPointer ? 24 : 12),
              scale: isClicking ? 0.8 : isPointer ? 1.5 : 1,
            }}
            transition={{
              type: "spring",
              damping: 15,
              mass: 0.25,
              stiffness: 800
            }}
          >
            <motion.div 
              className="relative"
              animate={{
                x: magneticPos.x,
                y: magneticPos.y,
              }}
              transition={{
                type: "spring",
                damping: 15,
                stiffness: 800
              }}
            >
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 opacity-30 blur-sm" 
                style={{ 
                  width: isPointer ? '48px' : '24px', 
                  height: isPointer ? '48px' : '24px',
                  transition: 'width 0.1s, height 0.1s'
                }} 
              />
              
              {/* Inner dot */}
              <div className="absolute rounded-full bg-white"
                style={{ 
                  width: isPointer ? '8px' : '4px', 
                  height: isPointer ? '8px' : '4px',
                  left: isPointer ? '20px' : '10px',
                  top: isPointer ? '20px' : '10px',
                  transition: 'width 0.1s, height 0.1s, left 0.1s, top 0.1s'
                }} 
              />
            </motion.div>
          </motion.div>

          {/* Interactive element highlight */}
          {isPointer && (
            <motion.div
              className="fixed pointer-events-none z-40"
              animate={{
                x: position.x - 32,
                y: position.y - 32,
                scale: isClicking ? 0.9 : 1,
              }}
              transition={{ type: "spring", damping: 15 }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-600/20 to-purple-600/20 blur-md" />
            </motion.div>
          )}

          {/* Trailing particles */}
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={i}
              className="fixed pointer-events-none z-30"
              animate={{
                x: position.x - 2,
                y: position.y - 2,
                opacity: 0.5 - i * 0.15,
              }}
              transition={{
                duration: 0.25,
                delay: i * 0.04,
              }}
            >
              <motion.div
                className="w-1 h-1 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600"
                animate={{
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            </motion.div>
          ))}
        </>
      )}
    </AnimatePresence>
  );
}