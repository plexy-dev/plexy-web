import React from 'react';
import { motion } from 'framer-motion';

interface Step {
  title: string;
  description: string;
}

interface Process {
  id: string;
  title: string;
  color: string;
  steps: Step[];
}

interface ProcessDetailsProps {
  process: Process;
  isHovered: boolean;
}

export default function ProcessDetails({ process, isHovered }: ProcessDetailsProps) {
  return (
    <motion.div
      className="mt-12 perspective"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="bg-white rounded-2xl shadow-xl overflow-hidden"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{
          rotateX: isHovered ? -5 : 0,
        }}
      >
        {/* Background Pattern */}
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, ${process.color} 1px, transparent 0)`,
            backgroundSize: '20px 20px',
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        <div className="relative p-8 z-10">
          <div className="grid grid-cols-3 gap-8">
            {process.steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Connected Lines */}
                {index < process.steps.length - 1 && (
                  <motion.div
                    className="absolute top-4 left-full w-8 h-0.5"
                    style={{ background: process.color }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                  />
                )}

                {/* Step Number with Pulse Effect */}
                <motion.div
                  className="absolute -top-4 -left-4 w-8 h-8"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{ background: process.color }}
                    animate={{ opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute inset-0 rounded-full flex items-center justify-center text-white font-bold"
                    style={{ background: process.color }}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                  >
                    {index + 1}
                  </motion.div>
                </motion.div>

                {/* Content Card with 3D Effect */}
                <motion.div
                  className="relative p-6 rounded-xl bg-gray-50 group-hover:bg-white"
                  whileHover={{ 
                    scale: 1.05,
                    rotateX: 10,
                    rotateY: 5,
                    boxShadow: `0 20px 30px -10px ${process.color}33`
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Animated Border */}
                  <motion.div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100"
                    style={{ 
                      border: `2px solid ${process.color}`,
                      filter: 'blur(1px)'
                    }}
                    animate={{
                      scale: [1, 1.02, 1],
                      opacity: [0, 0.2, 0],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />

                  <h4 className="text-lg font-semibold text-gray-900 relative z-10">
                    {step.title}
                  </h4>
                  <p className="mt-2 text-sm text-gray-600 relative z-10">
                    {step.description}
                  </p>

                  {/* Interactive Progress Line */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 rounded-full"
                    style={{ background: process.color }}
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Corner Decorations */}
                  <motion.div
                    className="absolute top-0 right-0 w-6 h-6"
                    style={{
                      borderTop: `2px solid ${process.color}20`,
                      borderRight: `2px solid ${process.color}20`,
                    }}
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}