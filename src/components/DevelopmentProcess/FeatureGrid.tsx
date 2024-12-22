import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeatureGridProps {
  features: Feature[];
  color: string;
}

export default function FeatureGrid({ features, color }: FeatureGridProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          className="group relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <motion.div
            className="absolute inset-0 rounded-lg"
            style={{ background: color }}
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 0.1 }}
          />
          
          <div className="relative p-4 rounded-lg bg-white/80 backdrop-blur-sm border border-gray-100 hover:border-indigo-200 transition-colors">
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ x: 5 }}
            >
              <feature.icon className="h-5 w-5 text-indigo-600" />
              <h4 className="font-medium text-gray-900">{feature.title}</h4>
            </motion.div>
            
            <p className="mt-2 text-sm text-gray-600 line-clamp-2">
              {feature.description}
            </p>

            <motion.div
              className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600"
              initial={{ width: 0 }}
              whileHover={{ width: '100%' }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}