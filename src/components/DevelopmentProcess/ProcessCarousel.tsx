import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface Process {
  id: string;
  title: string;
  icon: LucideIcon;
  color: string;
  description: string;
  stages: Array<{ title: string; icon: LucideIcon }>;
}

interface ProcessCarouselProps {
  processes: Process[];
  activeProcess: number;
  onProcessChange: (index: number) => void;
}

export default function ProcessCarousel({ processes, activeProcess, onProcessChange }: ProcessCarouselProps) {
  return (
    <div className="relative">
      <div className="flex justify-center items-center gap-8">
        {processes.map((process, index) => {
          const Icon = process.icon;
          const offset = index - activeProcess;
          
          return (
            <motion.div
              key={process.id}
              className="relative cursor-pointer"
              style={{
                zIndex: index === activeProcess ? 10 : 5,
              }}
              animate={{
                scale: index === activeProcess ? 1.1 : 0.8,
                x: `${offset * 120}%`,
                rotateY: offset * -35,
                opacity: Math.abs(offset) > 1 ? 0 : 1,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              onClick={() => onProcessChange(index)}
            >
              <div 
                className={`w-64 h-80 rounded-2xl p-6 bg-white shadow-xl
                  ${index === activeProcess ? 'ring-2' : ''}`}
                style={{
                  background: `linear-gradient(135deg, white, ${process.color}15)`,
                  ringColor: process.color,
                  transform: `perspective(1000px) rotateY(${offset * 5}deg)`,
                }}
              >
                {/* Card Content */}
                <div className="h-full flex flex-col items-center justify-center space-y-6">
                  <motion.div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: process.color }}
                    animate={{
                      rotate: index === activeProcess ? [0, 360] : 0,
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <div className="text-center">
                    <h3 className="text-xl font-bold" style={{ color: process.color }}>
                      {process.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">
                      {process.description}
                    </p>
                  </div>

                  {/* Stage Indicators */}
                  <div className="flex space-x-2">
                    {process.stages.map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-2 h-2 rounded-full"
                        style={{ background: process.color }}
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}