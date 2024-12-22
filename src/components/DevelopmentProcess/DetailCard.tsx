import React from 'react';
import { motion } from 'framer-motion';
import { StageDetail } from './types';

interface DetailCardProps {
  detail: StageDetail;
  color: string;
  index: number;
}

export default function DetailCard({ detail, color, index }: DetailCardProps) {
  const Icon = detail.icon;

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
    >
      <motion.div
        className="h-full bg-white rounded-xl p-6 shadow-lg"
        whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <motion.div
          className="w-16 h-16 rounded-lg flex items-center justify-center mb-4"
          style={{ background: color }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <Icon className="h-8 w-8 text-white" />
        </motion.div>

        <h3 className="text-xl font-bold mb-4" style={{ color }}>
          {detail.title}
        </h3>

        <div className="space-y-3">
          {[1, 2, 3].map((_, i) => (
            <motion.div
              key={i}
              className="h-2 rounded-full"
              style={{ background: `${color}20` }}
              whileHover={{ scaleX: 1.1 }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{ background: color }}
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

        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{ background: color }}
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
}