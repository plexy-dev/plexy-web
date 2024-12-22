import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface Process {
  title: string;
  icon: LucideIcon;
  color: string;
  features: Feature[];
  gradientFrom: string;
  gradientTo: string;
}

interface FeatureShowcaseProps {
  process: Process;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  mousePosition: { x: number; y: number };
}

export default function FeatureShowcase({
  process,
  onMouseEnter,
  onMouseLeave,
  mousePosition,
}: FeatureShowcaseProps) {
  const Icon = process.icon;

  return (
    <motion.div
      className="preserve-3d"
      initial={{ opacity: 0, rotateY: -20 }}
      animate={{ 
        opacity: 1, 
        rotateY: 0,
        rotateX: mousePosition.y * 5,
        rotateY: mousePosition.x * 5,
      }}
      exit={{ opacity: 0, rotateY: 20 }}
      transition={{ type: "spring", stiffness: 100, damping: 30 }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className={`p-6 bg-gradient-to-r ${process.gradientFrom} ${process.gradientTo}`}>
          <motion.div
            className="flex items-center space-x-4"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
          >
            <motion.div
              className="p-3 rounded-xl bg-white/20 backdrop-blur-sm"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <Icon className="h-8 w-8 text-white" />
            </motion.div>
            <h3 className="text-2xl font-bold text-white">
              {process.title}
            </h3>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="p-6 grid grid-cols-3 gap-4">
          {process.features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative preserve-3d"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-sm rounded-xl"
                style={{ transform: 'translateZ(-10px)' }}
              />
              
              <motion.div
                className="relative p-4 rounded-xl border border-gray-200/50 hover:border-indigo-200/50 transition-colors overflow-hidden"
                whileHover={{ scale: 1.02, rotateX: 5, rotateY: 5 }}
              >
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity"
                  style={{ background: process.color }}
                />

                <motion.div
                  className="flex items-center space-x-3"
                  whileHover={{ x: 5 }}
                >
                  <feature.icon className="h-5 w-5 text-indigo-600" />
                  <h4 className="font-medium text-gray-900">{feature.title}</h4>
                </motion.div>

                <p className="mt-2 text-sm text-gray-600">
                  {feature.description}
                </p>

                {/* Animated border */}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r"
                  style={{
                    backgroundImage: `linear-gradient(to right, ${process.color}, ${process.color}88)`,
                  }}
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}