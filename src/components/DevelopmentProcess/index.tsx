import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import ProcessTimeline from './ProcessTimeline';
import StageCards from './StageCards';
import InteractiveCanvas from './InteractiveCanvas';
import { ProcessStage } from './types';

const stages: ProcessStage[] = [
  {
    id: 'discovery',
    title: 'Discovery & Planning',
    description: 'Understanding your vision and crafting the perfect strategy',
    color: '#8B5CF6',
    steps: [
      {
        id: 'research',
        title: 'Research',
        description: 'Deep dive into requirements',
        icon: '🔍',
        color: '#818CF8',
        tools: ['User Research', 'Market Analysis', 'Competitor Study']
      },
      {
        id: 'planning',
        title: 'Planning',
        description: 'Strategic roadmap creation',
        icon: '📋',
        color: '#818CF8',
        tools: ['Project Planning', 'Resource Allocation', 'Timeline Creation']
      }
    ]
  },
  {
    id: 'design',
    title: 'Design & Architecture',
    description: 'Creating the blueprint for your success',
    color: '#3B82F6',
    steps: [
      {
        id: 'ux',
        title: 'UX Design',
        description: 'Crafting user experiences',
        icon: '🎨',
        color: '#60A5FA',
        tools: ['Wireframing', 'Prototyping', 'User Testing']
      },
      {
        id: 'architecture',
        title: 'Architecture',
        description: 'System design and planning',
        icon: '🏗️',
        color: '#60A5FA',
        tools: ['System Design', 'Database Design', 'API Planning']
      }
    ]
  },
  {
    id: 'development',
    title: 'Development & Testing',
    description: 'Bringing your vision to life with precision',
    color: '#10B981',
    steps: [
      {
        id: 'coding',
        title: 'Development',
        description: 'Building the solution',
        icon: '💻',
        color: '#34D399',
        tools: ['Frontend', 'Backend', 'Database']
      },
      {
        id: 'testing',
        title: 'Testing',
        description: 'Ensuring quality',
        icon: '🔧',
        color: '#34D399',
        tools: ['Unit Testing', 'Integration Testing', 'User Testing']
      }
    ]
  }
];

export default function DevelopmentProcess() {
  const [activeStage, setActiveStage] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height
      });
    }
  };

  return (
    <section 
      className="relative min-h-screen py-24 overflow-hidden bg-gradient-to-b from-gray-50 to-white"
      onMouseMove={handleMouseMove}
      ref={containerRef}
    >
      <InteractiveCanvas />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.h2 
          className="text-5xl md:text-6xl font-bold text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-blue-600 to-emerald-600">
            How We Build Solutions
          </span>
        </motion.h2>

        <motion.p
          className="mt-6 text-xl text-center text-gray-600 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Our development process combines cutting-edge technologies with industry
          best practices to deliver exceptional results
        </motion.p>

        <div className="mt-20 relative">
          <ProcessTimeline 
            stages={stages}
            activeStage={activeStage}
            onStageChange={setActiveStage}
          />

          <div className="mt-12">
            <StageCards
              stage={stages[activeStage]}
              mousePosition={mousePosition}
            />
          </div>
        </div>
      </div>
    </section>
  );
}