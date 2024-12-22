import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Cloud, Cpu, Braces, GitBranch, Rocket, Database, Lock, Settings } from 'lucide-react';
import ProcessCarousel from './ProcessCarousel';
import StageIndicator from './StageIndicator';
import FloatingIcons from './FloatingIcons';

const processes = [
  {
    id: 'planning',
    title: 'Strategic Planning',
    icon: Rocket,
    color: '#818cf8',
    description: 'We begin with thorough analysis and planning',
    stages: [
      { title: 'Requirements Analysis', icon: Database },
      { title: 'Architecture Design', icon: Cloud },
      { title: 'Technology Selection', icon: Settings }
    ]
  },
  {
    id: 'development',
    title: 'Agile Development',
    icon: Code2,
    color: '#0ea5e9',
    description: 'Iterative development with continuous feedback',
    stages: [
      { title: 'Sprint Planning', icon: GitBranch },
      { title: 'Development Cycles', icon: Code2 },
      { title: 'Code Reviews', icon: Braces }
    ]
  },
  {
    id: 'deployment',
    title: 'Deployment & Scale',
    icon: Cloud,
    color: '#10b981',
    description: 'Seamless deployment and scaling solutions',
    stages: [
      { title: 'CI/CD Pipeline', icon: Rocket },
      { title: 'Security Checks', icon: Lock },
      { title: 'Performance Testing', icon: Settings }
    ]
  }
];

export default function DesktopView() {
  const [activeProcess, setActiveProcess] = useState(0);
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    const stageInterval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % processes[activeProcess].stages.length);
    }, 3000);

    return () => clearInterval(stageInterval);
  }, [activeProcess]);

  const handleProcessChange = (index: number) => {
    setActiveProcess(index);
    setActiveStage(0);
  };

  return (
    <div className="mt-20 relative min-h-[600px]">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingIcons />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <ProcessCarousel
          processes={processes}
          activeProcess={activeProcess}
          onProcessChange={handleProcessChange}
        />

        {/* Stage Indicator */}
        <div className="mt-12">
          <StageIndicator
            stages={processes[activeProcess].stages}
            activeStage={activeStage}
            color={processes[activeProcess].color}
          />
        </div>

        {/* Process Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeProcess}-${activeStage}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-8 text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900">
              {processes[activeProcess].stages[activeStage].title}
            </h3>
            <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
              {processes[activeProcess].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}