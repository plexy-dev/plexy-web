import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cloud, Cpu, Braces, GitBranch, Rocket, Database, Lock, Settings } from 'lucide-react';

const icons = [Code2, Cloud, Cpu, Braces, GitBranch, Rocket, Database, Lock, Settings];

export default function FloatingIcons() {
  return (
    <div className="absolute inset-0">
      {icons.map((Icon, index) => (
        <motion.div
          key={index}
          className="absolute"
          initial={{
            x: Math.random() * 100 - 50 + '%',
            y: Math.random() * 100 - 50 + '%',
            opacity: 0.1,
          }}
          animate={{
            x: [
              Math.random() * 100 - 50 + '%',
              Math.random() * 100 - 50 + '%',
              Math.random() * 100 - 50 + '%',
            ],
            y: [
              Math.random() * 100 - 50 + '%',
              Math.random() * 100 - 50 + '%',
              Math.random() * 100 - 50 + '%',
            ],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <Icon className="w-8 h-8 text-indigo-100" />
        </motion.div>
      ))}
    </div>
  );
}