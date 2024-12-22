import React from 'react';
import { motion } from 'framer-motion';
import { ProcessStage, MousePosition } from './types';

interface StageCardsProps {
  stage: ProcessStage;
  mousePosition: MousePosition;
}

export default function StageCards({ stage, mousePosition }: StageCardsProps) {
  return (
    <motion.div
      className="grid grid-cols-2 gap-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      {stage.steps.map((step, index) => (
        <motion.div
          key={step.id}
          className="relative preserve-3d"
          animate={{
            rotateX: mousePosition.y * 10,
            rotateY: mousePosition.x * 10,
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden">
            {/* Header */}
            <div className="p-6" style={{ background: step.color }}>
              <div className="flex items-center space-x-4">
                <motion.div
                  className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-2xl"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                >
                  {step.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-white">
                  {step.title}
                </h3>
              </div>
              <p className="mt-2 text-white/80">
                {step.description}
              </p>
            </div>

            {/* Tools */}
            <div className="p-6">
              <h4 className="text-sm font-medium text-gray-500 mb-4">Tools & Technologies</h4>
              <div className="grid grid-cols-1 gap-3">
                {step.tools.map((tool, toolIndex) => (
                  <motion.div
                    key={toolIndex}
                    className="flex items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-gray-900">{tool}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}