import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Rocket, Users, Zap, Check, Star, Clock, Trophy } from 'lucide-react';
import FadeIn from './animations/FadeIn';

const features = [
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade security measures ensuring your data and applications are protected 24/7.',
    details: [
      { icon: Check, text: 'End-to-end encryption' },
      { icon: Check, text: 'Regular security audits' },
      { icon: Check, text: 'Compliance standards' },
      { icon: Check, text: 'Data protection' },
    ],
    gradient: 'from-blue-600 to-cyan-500',
  },
  {
    icon: Rocket,
    title: 'Rapid Development',
    description: 'Agile methodology combined with cutting-edge tools for faster time-to-market.',
    details: [
      { icon: Clock, text: 'Quick iterations' },
      { icon: Clock, text: 'Continuous delivery' },
      { icon: Clock, text: 'Agile sprints' },
      { icon: Clock, text: 'Fast deployment' },
    ],
    gradient: 'from-purple-600 to-pink-500',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Seasoned professionals with deep expertise across multiple technologies and domains.',
    details: [
      { icon: Star, text: 'Senior developers' },
      { icon: Star, text: 'Solution architects' },
      { icon: Star, text: 'UX specialists' },
      { icon: Star, text: 'Project managers' },
    ],
    gradient: 'from-green-600 to-teal-500',
  },
  {
    icon: Zap,
    title: 'Innovation First',
    description: 'Staying ahead of the curve with emerging technologies and innovative solutions.',
    details: [
      { icon: Trophy, text: 'AI integration' },
      { icon: Trophy, text: 'Blockchain ready' },
      { icon: Trophy, text: 'IoT solutions' },
      { icon: Trophy, text: 'Edge computing' },
    ],
    gradient: 'from-orange-600 to-yellow-500',
  },
];

export default function Features() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 animate-gradient">
                  Why Choose Plexy?
                </span>
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-3xl mx-auto space-y-4"
            >
              <p className="text-xl text-gray-600 leading-relaxed">
                Pushing the boundaries of what's possible in tech. We don't just follow trends —
                <span className="font-semibold text-indigo-600"> we set them</span>.
              </p>
              <p className="text-lg text-gray-500">
                From concept to execution, we transform visionary ideas into groundbreaking digital solutions.
              </p>
            </motion.div>
          </div>
        </FadeIn>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {features.map((feature, index) => (
            <FadeIn key={index} delay={0.1 * index}>
              <motion.div
                className={`relative group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow ${
                  expandedIndex === index ? 'ring-2 ring-indigo-600' : ''
                }`}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.02 }}
                onHoverStart={() => {
                  setHoveredIndex(index);
                  setExpandedIndex(index);
                }}
                onHoverEnd={() => {
                  setHoveredIndex(null);
                  setExpandedIndex(null);
                }}
              >
                {/* Gradient Border Animation */}
                <motion.div
                  className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 blur"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                />

                <div className="relative bg-white p-6 rounded-xl">
                  <motion.div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} flex items-center justify-center text-white`}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    animate={{ 
                      rotate: hoveredIndex === index ? 360 : 0,
                      y: hoveredIndex === index ? [-5, 0, -5] : 0
                    }}
                    transition={{ 
                      rotate: { duration: 0.5 },
                      y: { repeat: Infinity, duration: 1.5 }
                    }}
                  >
                    <feature.icon className="h-6 w-6" />
                  </motion.div>

                  <motion.h3 
                    className="mt-4 text-xl font-semibold text-gray-900"
                    layout
                  >
                    {feature.title}
                  </motion.h3>

                  <motion.p 
                    className="mt-2 text-gray-600"
                    layout
                  >
                    {feature.description}
                  </motion.p>

                  <AnimatePresence>
                    {expandedIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="mt-4"
                      >
                        <div className="grid grid-cols-2 gap-3">
                          {feature.details.map((detail, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: idx * 0.1 }}
                              className="flex items-center p-2 rounded-lg bg-gray-50 hover:bg-indigo-50 transition-colors"
                            >
                              <motion.div
                                className="text-indigo-600"
                                whileHover={{ scale: 1.2, rotate: 360 }}
                                animate={{ 
                                  rotate: hoveredIndex === index ? 360 : 0,
                                  scale: hoveredIndex === index ? [1, 1.1, 1] : 1
                                }}
                                transition={{ 
                                  rotate: { duration: 0.5 },
                                  scale: { duration: 1, repeat: Infinity }
                                }}
                              >
                                <detail.icon className="h-4 w-4" />
                              </motion.div>
                              <span className="ml-2 text-sm text-gray-600">{detail.text}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}