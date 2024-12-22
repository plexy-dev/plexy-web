import React from 'react';
import { motion } from 'framer-motion';
import { ProcessStage } from './types';

interface ProcessTimelineProps {
  stages: ProcessStage[];
  activeStage: number;
  onStageChange: (index: number) => void;
}

export default function ProcessTimeline({
  stages,
  activeStage,
  onStageChange
}: ProcessTimelineProps) {
  return (
    <div className="flex justify-center items-center space-x-8">
      {stages.map((stage, index) => (
        <motion.button
          key={stage.id}
          className="relative group"
          onClick={() => onStageChange(index)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Connection Line */}
          {index < stages.length - 1 && (
            <div className="absolute top-1/2 left-full w-8 h-0.5 bg-gray-200">
              <motion.div
                className="h-full"
                style={{ background: stage.color }}
                initial={{ width: '0%' }}
                animate={{ width: activeStage > index ? '100%' : '0%' }}
                transition={{ duration: 0.5 }}
              />
            </div>
          )}

          {/* Stage Button */}
          <motion.div
            className="relative p-4 rounded-xl bg-white shadow-lg"
            animate={{
              scale: activeStage === index ? 1.1 : 1,
              backgroundColor: activeStage === index ? stage.color : 'white',
            }}
          >
            <motion.div
              className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl"
              style={{ 
                background: activeStage === index ? 'white' : stage.color,
                color: activeStage === index ? stage.color : 'white'
              }}
              animate={activeStage === index ? {
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              } : {}}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {stage.steps[0].icon}
            </motion.div>

            <h3 className={`mt-2 font-medium text-sm ${
              activeStage === index ? 'text-white' : 'text-gray-900'
            }`}>
              {stage.title}
            </h3>
          </motion.div>
        </motion.button>
      ))}
    </div>
  );
}