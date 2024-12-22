import React from 'react';
import { motion } from 'framer-motion';

interface TechOrbitProps {
  techs: string[];
}

export default function TechOrbit({ techs }: TechOrbitProps) {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {techs.map((tech, index) => {
        const angle = (index * 2 * Math.PI) / techs.length;
        const radius = 40;
        
        return (
          <motion.div
            key={tech}
            className="absolute left-1/2 top-1/2"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [0.9, 1, 0.9],
              x: [
                Math.cos(angle) * radius + '%',
                Math.cos(angle + Math.PI * 2) * radius + '%'
              ],
              y: [
                Math.sin(angle) * radius + '%',
                Math.sin(angle + Math.PI * 2) * radius + '%'
              ],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <div className="transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                <span className="text-sm font-medium bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  {tech}
                </span>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}