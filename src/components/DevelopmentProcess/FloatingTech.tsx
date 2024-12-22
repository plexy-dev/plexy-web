import React from 'react';
import { motion } from 'framer-motion';

interface FloatingTechProps {
  techs: string[];
}

export default function FloatingTech({ techs }: FloatingTechProps) {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {techs.map((tech, index) => (
        <motion.div
          key={tech}
          className="absolute"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1, 0.8],
            x: [
              `${Math.cos(index * (Math.PI * 2 / techs.length)) * 30}%`,
              `${Math.cos((index + 1) * (Math.PI * 2 / techs.length)) * 30}%`,
            ],
            y: [
              `${Math.sin(index * (Math.PI * 2 / techs.length)) * 30}%`,
              `${Math.sin((index + 1) * (Math.PI * 2 / techs.length)) * 30}%`,
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            left: '50%',
            top: '50%',
          }}
        >
          <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
            <span className="text-sm font-medium bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {tech}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}