import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Cloud, Cpu, Braces, GitBranch, Rocket, Database, Lock, Settings, Palette, LineChart, Shield } from 'lucide-react';
import FadeIn from './animations/FadeIn';

const developmentSteps = [
  {
    title: 'AI & ML Development',
    icon: Cpu,
    color: 'from-purple-600 to-indigo-600',
    features: [
      { icon: Code2, text: 'Custom AI Solutions' },
      { icon: Database, text: 'Data-Driven Insights' },
      { icon: LineChart, text: 'Predictive Modeling' },
      { icon: Settings, text: 'AI-Powered Automation' },
      { icon: Braces, text: 'Natural Language Processing' },
      { icon: Shield, text: 'Computer Vision' }
    ]
  },
  {
    title: 'Cloud Architecture',
    icon: Cloud,
    color: 'from-blue-600 to-cyan-500',
    features: [
      { icon: Rocket, text: 'Cloud Migration' },
      { icon: GitBranch, text: 'Multi-Cloud Strategies' },
      { icon: Code2, text: 'Infrastructure as Code' },
      { icon: Settings, text: 'CI/CD Pipelines' },
      { icon: Database, text: 'Serverless Computing' },
      { icon: Lock, text: 'Security & Compliance' }
    ]
  },
  {
    title: 'Full-Stack Development',
    icon: Code2,
    color: 'from-green-600 to-teal-500',
    features: [
      { icon: Palette, text: 'Responsive Design' },
      { icon: Braces, text: 'API Development' },
      { icon: Code2, text: 'Modern Frameworks' },
      { icon: Database, text: 'Scalable Backends' },
      { icon: Settings, text: 'Performance Optimization' },
      { icon: GitBranch, text: 'Microservices' }
    ]
  }
];

export default function DevelopmentProcess() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 animate-gradient">
                How We Build Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our development process combines cutting-edge technologies with industry best practices
              to deliver exceptional results
            </p>
          </div>
        </FadeIn>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {developmentSteps.map((step, stepIndex) => (
            <FadeIn key={stepIndex} delay={0.1 * stepIndex}>
              <motion.div
                className="relative group"
                onHoverStart={() => setActiveStep(stepIndex)}
                onHoverEnd={() => setActiveStep(null)}
              >
                <motion.div
                  className={`h-full bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden
                    ${activeStep === stepIndex ? 'ring-2 ring-indigo-600' : ''}`}
                >
                  {/* Header */}
                  <div className={`p-6 bg-gradient-to-r ${step.color}`}>
                    <motion.div
                      className="flex items-center justify-center"
                      initial={{ y: 0 }}
                      animate={{ y: activeStep === stepIndex ? [-5, 0, -5] : 0 }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <step.icon className="h-12 w-12 text-white" />
                    </motion.div>
                    <h3 className="mt-4 text-xl sm:text-2xl font-semibold text-white text-center">
                      {step.title}
                    </h3>
                  </div>

                  {/* Features Grid */}
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-4">
                      {step.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          className="flex flex-col items-center p-3 rounded-lg bg-gray-50 hover:bg-indigo-50 transition-colors"
                          onHoverStart={() => setHoveredFeature(featureIndex)}
                          onHoverEnd={() => setHoveredFeature(null)}
                          whileHover={{ scale: 1.05 }}
                        >
                          <motion.div
                            animate={{
                              rotate: hoveredFeature === featureIndex ? 360 : 0,
                              scale: hoveredFeature === featureIndex ? [1, 1.2, 1] : 1,
                            }}
                            transition={{
                              duration: 0.5,
                              repeat: hoveredFeature === featureIndex ? Infinity : 0,
                            }}
                          >
                            <feature.icon className="h-6 w-6 text-indigo-600" />
                          </motion.div>
                          <span className="mt-2 text-sm text-center text-gray-600">
                            {feature.text}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}