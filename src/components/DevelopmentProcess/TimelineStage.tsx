import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface StageDetail {
  title: string;
  icon: LucideIcon;
}

interface Stage {
  id: string;
  title: string;
  description: string;
  color: string;
  details: StageDetail[];
}

interface TimelineStageProps {
  stage: Stage;
  mousePosition: { x: number; y: number };
}

export default function TimelineStage({ stage, mousePosition }: TimelineStageProps) {
  return (
    <motion.div
      className="relative h-[600px]"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
    >
      {/* Main Content Card */}
      <motion.div
        className="absolute inset-0 bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden"
        style={{ 
          transformStyle: 'preserve-3d',
          perspective: 1000,
        }}
        animate={{
          rotateX: mousePosition.y * 10,
          rotateY: mousePosition.x * 10,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        {/* Background Gradient */}
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            background: `linear-gradient(120deg, ${stage.color}, transparent)`,
          }}
          animate={{
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* Content */}
        <div className="relative p-8 h-full">
          <div className="grid grid-cols-3 gap-8 h-full">
            {stage.details.map((detail, index) => {
              const Icon = detail.icon;
              return (
                <motion.div
                  key={detail.title}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  {/* Card */}
                  <motion.div
                    className="h-full bg-white rounded-xl p-6 shadow-lg"
                    whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Icon */}
                    <motion.div
                      className="w-16 h-16 rounded-lg flex items-center justify-center mb-4"
                      style={{ background: stage.color }}
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-2" style={{ color: stage.color }}>
                      {detail.title}
                    </h3>

                    {/* Interactive Elements */}
                    <div className="space-y-3">
                      {[1, 2, 3].map((_, i) => (
                        <motion.div
                          key={i}
                          className="h-2 rounded-full"
                          style={{ background: `${stage.color}20` }}
                          whileHover={{ scaleX: 1.1 }}
                        >
                          <motion.div
                            className="h-full rounded-full"
                            style={{ background: stage.color }}
                            initial={{ width: '0%' }}
                            animate={{ width: ['0%', '100%', '0%'] }}
                            transition={{
                              duration: 2,
                              delay: i * 0.3,
                              repeat: Infinity,
                            }}
                          />
                        </motion.div>
                      ))}
                    </div>

                    {/* Floating Particles */}
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 rounded-full"
                        style={{ background: stage.color }}
                        animate={{
                          x: [0, Math.random() * 100 - 50],
                          y: [0, Math.random() * 100 - 50],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          delay: i * 0.2,
                          repeat: Infinity,
                        }}
                      />
                    ))}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}