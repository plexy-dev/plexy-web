import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface Process {
  id: string;
  title: string;
  icon: LucideIcon;
  color: string;
  description: string;
}

interface HexagonGridProps {
  processes: Process[];
  activeProcess: number;
  setActiveProcess: (index: number) => void;
  hoveredHex: number | null;
  setHoveredHex: (index: number | null) => void;
}

export default function HexagonGrid({
  processes,
  activeProcess,
  setActiveProcess,
  hoveredHex,
  setHoveredHex
}: HexagonGridProps) {
  const hexSize = 120;
  const hexHeight = hexSize * Math.sqrt(3);
  
  const hexPoints = `${hexSize},0 ${hexSize * 0.75},${hexHeight * 0.5} ${hexSize * 0.25},${hexHeight * 0.5} 0,0 ${hexSize * 0.25},-${hexHeight * 0.5} ${hexSize * 0.75},-${hexHeight * 0.5}`;

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative" style={{ width: hexSize * 4, height: hexHeight * 3 }}>
        {processes.map((process, index) => {
          const Icon = process.icon;
          const angle = (index * 2 * Math.PI) / processes.length;
          const radius = hexSize * 1.5;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          const isActive = activeProcess === index;
          const isHovered = hoveredHex === index;

          return (
            <motion.div
              key={process.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
              style={{ left: '50%', top: '50%' }}
              animate={{
                x: x,
                y: y,
                scale: isActive ? 1.1 : 1,
                z: isActive ? 20 : 0,
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <motion.div
                className="relative cursor-pointer"
                onClick={() => setActiveProcess(index)}
                onHoverStart={() => setHoveredHex(index)}
                onHoverEnd={() => setHoveredHex(null)}
                whileHover={{ scale: 1.1, rotate: 30 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Hexagon SVG */}
                <svg
                  width={hexSize}
                  height={hexHeight}
                  viewBox={`0 -${hexHeight/2} ${hexSize} ${hexHeight}`}
                  className="transform rotate-90"
                >
                  <motion.polygon
                    points={hexPoints}
                    fill="white"
                    stroke={process.color}
                    strokeWidth="2"
                    animate={{
                      fill: isActive ? `${process.color}10` : 'white',
                      strokeWidth: isActive ? 3 : 2,
                    }}
                  />
                </svg>

                {/* Content */}
                <motion.div
                  className="absolute inset-0 flex flex-col items-center justify-center"
                  animate={{
                    scale: isHovered ? 1.1 : 1,
                    rotate: isHovered ? -30 : 0,
                  }}
                >
                  <motion.div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: process.color }}
                    animate={isActive ? {
                      rotate: [0, 360],
                      scale: [1, 1.1, 1],
                    } : {}}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </motion.div>
                  
                  {/* Glowing effect */}
                  {(isActive || isHovered) && (
                    <motion.div
                      className="absolute inset-0 rounded-full blur-xl"
                      style={{ background: process.color }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.3 }}
                      exit={{ opacity: 0 }}
                    />
                  )}

                  {/* Connecting lines */}
                  {isActive && (
                    <motion.div
                      className="absolute w-40 h-0.5"
                      style={{
                        background: `linear-gradient(90deg, ${process.color}00, ${process.color}, ${process.color}00)`,
                        transform: `rotate(${angle * (180/Math.PI)}deg)`,
                      }}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  )}
                </motion.div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}