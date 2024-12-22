import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Cloud, Cpu, Braces, GitBranch, Rocket, Database, Lock, Settings, Palette, LineChart, Shield } from 'lucide-react';
import FadeIn from '../animations/FadeIn';

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

export default function MobileView() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  return (
    <div className="mt-8 space-y-6">
      {developmentSteps.map((step, stepIndex) => (
        <FadeIn key={stepIndex} delay={0.1 * stepIndex}>
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: stepIndex * 0.2 }}
          >
            <div className={`bg-white rounded-xl shadow-lg overflow-hidden`}>
              {/* Header */}
              <div className={`p-4 bg-gradient-to-r ${step.color}`}>
                <div className="flex items-center space-x-4">
                  <step.icon className="h-8 w-8 text-white" />
                  <h3 className="text-xl font-semibold text-white">
                    {step.title}
                  </h3>
                </div>
              </div>

              {/* Features Grid */}
              <div className="p-4">
                <div className="grid grid-cols-2 gap-3">
                  {step.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      className="flex items-center p-2 rounded-lg bg-gray-50"
                      whileTap={{ scale: 0.95 }}
                    >
                      <feature.icon className="h-4 w-4 text-indigo-600 flex-shrink-0" />
                      <span className="ml-2 text-sm text-gray-600 line-clamp-2">
                        {feature.text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </FadeIn>
      ))}
    </div>
  );
}