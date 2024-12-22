import React from 'react';
import { motion } from 'framer-motion';
import { Stage, MousePosition } from './types';
import DetailCard from './DetailCard';

interface StageCardProps {
  stage: Stage;
  mousePosition: MousePosition;
}

export default function StageCard({ stage, mousePosition }: StageCardProps) {
  return (
    <motion.div
      className="relative h-[600px]"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="absolute inset-0 bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{
          rotateX: (mousePosition.y - 0.5) * 20,
          rotateY: (mousePosition.x - 0.5) * 20,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
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

        <div className="relative p-8 grid grid-cols-3 gap-8 h-full">
          {stage.details.map((detail, index) => (
            <DetailCard
              key={detail.title}
              detail={detail}
              color={stage.color}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}