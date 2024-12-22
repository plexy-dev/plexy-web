import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface Stage {
  title: string;
  icon: LucideIcon;
}

interface StageIndicatorProps {
  stages: Stage[];
  activeStage: number;
  color: string;
}

export default function StageIndicator({ stages, activeStage, color }: StageIndicatorProps) {
  return (
    <div className="flex justify-center items-center space-x-12">
      {stages.map((stage, index) => {
        const Icon = stage.icon;
        const isActive = index === activeStage;
        const isPast = index < activeStage;

        return (
          <div key={stage.title} className="relative">
            {/* Connection Line */}
            {index < stages.length - 1 && (
              <div 
                className="absolute top-1/2 left-full w-12 h-0.5 -translate-y-1/2"
                style={{ background: `${color}40` }}
              >
                <motion.div
                  className="h-full"
                  style={{ background: color }}
                  initial={{ width: '0%' }}
                  animate={{ width: isPast ? '100%' : '0%' }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            )}

            {/* Stage Icon */}
            <motion.div
              className="relative"
              animate={{
                scale: isActive ? 1.2 : 1,
                y: isActive ? -5 : 0,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{
                  background: isActive || isPast ? color : `${color}20`,
                }}
                animate={isActive ? {
                  boxShadow: [
                    `0 0 0 0px ${color}20`,
                    `0 0 0 10px ${color}00`
                  ],
                } : {}}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                }}
              >
                <Icon className={`w-6 h-6 ${isActive || isPast ? 'text-white' : 'text-gray-400'}`} />
              </motion.div>

              {/* Stage Title */}
              <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <motion.span
                  className="text-sm font-medium"
                  style={{ color: isActive ? color : 'gray' }}
                  animate={{ opacity: isActive ? 1 : 0.6 }}
                >
                  {stage.title}
                </motion.span>
              </div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}