import React from 'react';
import { motion } from 'framer-motion';
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
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  mousePosition: { x: number; y: number };
}

export default function ProcessCard3D({
  process,
  isActive,
  onClick,
  onMouseEnter,
  onMouseLeave,
  mousePosition
}: ProcessCardProps) {
  const Icon = process.icon;

  return (
    <motion.div
      className="relative preserve-3d cursor-pointer"
      onClick={onClick}
      onHoverStart={onMouseEnter}
      onHoverEnd={onMouseLeave}
      animate={{
        rotateX: mousePosition.y * 20,
        rotateY: mousePosition.x * 20,
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <motion.div
        className={`relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300
          ${isActive ? 'ring-2' : 'hover:shadow-xl'}`}
        style={{ 
          transformStyle: 'preserve-3d',
          ringColor: process.color
        }}
      >
        {/* Floating Orbs */}
        <motion.div
          className="absolute -right-8 -top-8 w-24 h-24 rounded-full blur-2xl"
          style={{ background: process.color }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        <motion.div
          className="absolute -left-8 -bottom-8 w-24 h-24 rounded-full blur-2xl"
          style={{ background: process.color }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
        />

        {/* Content */}
        <div className="relative p-6">
          <motion.div
            className="w-16 h-16 rounded-xl flex items-center justify-center"
            style={{ background: process.color }}
            animate={isActive ? {
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            } : {}}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Icon className="h-8 w-8 text-white" />
            
            {/* Glowing ring */}
            <motion.div
              className="absolute inset-0 rounded-xl"
              style={{ border: `2px solid ${process.color}` }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          <motion.h3
            className="mt-4 text-xl font-bold"
            style={{ color: process.color }}
          >
            {process.title}
          </motion.h3>

          <motion.p
            className="mt-2 text-gray-600"
            style={{ transform: 'translateZ(20px)' }}
          >
            {process.description}
          </motion.p>

          {/* Interactive border */}
          <motion.div
            className="absolute bottom-0 left-0 h-1 rounded-full"
            style={{ background: process.color }}
            initial={{ width: "0%" }}
            animate={{ width: isActive ? "100%" : "0%" }}
            transition={{ duration: 0.5 }}
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
                  opacity: [0.3, 0.6, 0.3],
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
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}