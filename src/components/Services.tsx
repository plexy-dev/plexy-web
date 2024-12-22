import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Cloud, Cpu, Database, Layout, Lock, MessageSquare, Rocket, Settings, Palette, LineChart, Shield } from 'lucide-react';
import FadeIn from './animations/FadeIn';

const services = [
  {
    icon: <Cloud className="h-5 w-5 sm:h-6 sm:w-6" />,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services',
    details: [
      { icon: <Database className="h-4 w-4" />, text: 'Cloud Migration' },
      { icon: <Lock className="h-4 w-4" />, text: 'Security' },
      { icon: <Settings className="h-4 w-4" />, text: 'DevOps' },
      { icon: <Rocket className="h-4 w-4" />, text: 'Scaling' },
    ],
  },
  {
    icon: <Code2 className="h-5 w-5 sm:h-6 sm:w-6" />,
    title: 'Full Stack Development',
    description: 'End-to-end web and mobile application development',
    details: [
      { icon: <Layout className="h-4 w-4" />, text: 'Frontend' },
      { icon: <Database className="h-4 w-4" />, text: 'Backend' },
      { icon: <Settings className="h-4 w-4" />, text: 'API Design' },
      { icon: <Lock className="h-4 w-4" />, text: 'Security' },
    ],
  },
  {
    icon: <Cpu className="h-5 w-5 sm:h-6 sm:w-6" />,
    title: 'AI Solutions',
    description: 'Custom AI and machine learning solutions',
    details: [
      { icon: <MessageSquare className="h-4 w-4" />, text: 'NLP' },
      { icon: <Settings className="h-4 w-4" />, text: 'ML Models' },
      { icon: <Database className="h-4 w-4" />, text: 'Data Science' },
      { icon: <Rocket className="h-4 w-4" />, text: 'AI Integration' },
    ],
  },
  {
    icon: <Palette className="h-5 w-5 sm:h-6 sm:w-6" />,
    title: 'UI/UX Design',
    description: 'Creating beautiful and intuitive user experiences',
    details: [
      { icon: <Layout className="h-4 w-4" />, text: 'Interface Design' },
      { icon: <Settings className="h-4 w-4" />, text: 'User Research' },
      { icon: <Rocket className="h-4 w-4" />, text: 'Prototyping' },
      { icon: <MessageSquare className="h-4 w-4" />, text: 'User Testing' },
    ],
  },
  {
    icon: <LineChart className="h-5 w-5 sm:h-6 sm:w-6" />,
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies and analytics',
    details: [
      { icon: <Settings className="h-4 w-4" />, text: 'SEO' },
      { icon: <Database className="h-4 w-4" />, text: 'Analytics' },
      { icon: <MessageSquare className="h-4 w-4" />, text: 'Social Media' },
      { icon: <Rocket className="h-4 w-4" />, text: 'Growth Hacking' },
    ],
  },
  {
    icon: <Lock className="h-5 w-5 sm:h-6 sm:w-6" />,
    title: 'Cybersecurity',
    description: 'Enterprise-grade security solutions and consulting',
    details: [
      { icon: <Shield className="h-4 w-4" />, text: 'Security Audit' },
      { icon: <Lock className="h-4 w-4" />, text: 'Penetration Testing' },
      { icon: <Settings className="h-4 w-4" />, text: 'Compliance' },
      { icon: <Database className="h-4 w-4" />, text: 'Data Protection' },
    ],
  },
];

export default function Services() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-12 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">Our Services</h2>
            <p className="mt-4 text-base sm:text-lg text-gray-600 px-4 sm:px-0">
              Comprehensive solutions for your digital transformation journey
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 sm:mt-20 grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
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
                <motion.div
                  className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 blur"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                />

                <div className="relative bg-white p-4 sm:p-6 rounded-xl">
                  <motion.div
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600"
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
                    {service.icon}
                  </motion.div>

                  <motion.h3 
                    className="mt-4 text-lg sm:text-xl font-semibold text-gray-900"
                    layout
                  >
                    {service.title}
                  </motion.h3>

                  <motion.p 
                    className="mt-2 text-sm sm:text-base text-gray-600"
                    layout
                  >
                    {service.description}
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
                        <div className="grid grid-cols-2 gap-2 sm:gap-3">
                          {service.details.map((detail, idx) => (
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
                                {detail.icon}
                              </motion.div>
                              <span className="ml-2 text-xs sm:text-sm text-gray-600">{detail.text}</span>
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