import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ProcessCardProps {
  process: {
    id: string;
    title: string;
    icon: LucideIcon;
    color: string;
    description: string;
  };
  isActive: boolean;
  onClick: () => void;
  isHovered: boolean;
}

export default function ProcessCard({ process, isActive, onClick, isHovered }: ProcessCardProps) {
  const Icon = process.icon;
  const controls = useAnimation();
  const [localHover, setLocalHover] = useState(false);

  const handleHoverStart = () => {
    setLocalHover(true);
    controls.start({
      rotateY: [0, 5, -5, 0],
      transition: { duration: 0.5 }
    });
  };

  return (
    <motion.div
      className="relative group cursor-pointer perspective"
      onClick={onClick}
      onHoverStart={handleHoverStart}
      onHoverEnd={() => setLocalHover(false)}
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div
        className={`relative rounded-2xl transition-all duration-300
          ${isActive ? 'bg-white shadow-2xl ring-2' : 'bg-white/80 shadow-lg hover:shadow-xl'}
        `}
        style={{ 
          transformStyle: 'preserve-3d',
          ringColor: process.color
        }}
        animate={controls}
      >
        {/* Floating Orbs */}
        {isActive && (
          <>
            <motion.div
              className="absolute -right-4 -top-4 w-20 h-20 rounded-full blur-2xl"
              style={{ background: process.color }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="absolute -left-4 -bottom-4 w-16 h-16 rounded-full blur-xl"
              style={{ background: process.color }}
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
          </>
        )}

        {/* Content Container */}
        <motion.div 
          className="relative p-6 z-10"
          animate={{
            rotateX: isHovered ? 10 : 0,
            rotateY: localHover ? 5 : 0,
          }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Icon Container */}
          <motion.div
            className="w-16 h-16 rounded-xl flex items-center justify-center relative"
            style={{ background: process.color }}
            animate={isActive ? {
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            } : {}}
            transition={{
              rotate: { duration: 2, repeat: Infinity, ease: "linear" },
              scale: { duration: 1, repeat: Infinity }
            }}
          >
            <Icon className="h-8 w-8 text-white" />
            
            {/* Glowing ring */}
            {isActive && (
              <motion.div
                className="absolute inset-0 rounded-xl"
                style={{ border: `2px solid ${process.color}` }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [1, 0, 1],
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            )}
          </motion.div>

          {/* Title with gradient effect */}
          <motion.h3
            className="mt-4 text-xl font-bold"
            animate={{
              background: isActive ? [
                `linear-gradient(45deg, ${process.color}, #fff)`,
                `linear-gradient(225deg, ${process.color}, #fff)`,
                `linear-gradient(45deg, ${process.color}, #fff)`,
              ] : '',
            }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{ 
              color: process.color,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: isActive ? 'transparent' : process.color,
            }}
          >
            {process.title}
          </motion.h3>

          <motion.p
            className="mt-2 text-gray-600"
            animate={{
              opacity: isActive ? 1 : 0.7,
              y: isActive ? 0 : 5,
            }}
            transition={{ duration: 0.3 }}
          >
            {process.description}
          </motion.p>

          {/* Interactive border */}
          <motion.div
            className="absolute bottom-0 left-0 h-1 rounded-full"
            style={{ background: process.color }}
            initial={{ width: "0%" }}
            animate={{ 
              width: isActive ? "100%" : localHover ? "50%" : "0%",
              x: localHover && !isActive ? [0, 10, 0] : 0,
            }}
            transition={{ 
              width: { duration: 0.5 },
              x: { duration: 1, repeat: Infinity }
            }}
          />

          {/* Corner accents */}
          {isActive && (
            <>
              <motion.div
                className="absolute top-0 right-0 w-8 h-8"
                style={{
                  borderTop: `2px solid ${process.color}`,
                  borderRight: `2px solid ${process.color}`,
                }}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-0 left-0 w-8 h-8"
                style={{
                  borderBottom: `2px solid ${process.color}`,
                  borderLeft: `2px solid ${process.color}`,
                }}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />
            </>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}