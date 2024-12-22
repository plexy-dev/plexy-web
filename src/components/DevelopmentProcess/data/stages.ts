import { Code2, Cloud, Cpu, Braces, GitBranch, Rocket, Database, Lock, Settings } from 'lucide-react';
import { Stage } from '../types';

export const stages: Stage[] = [
  {
    id: 'planning',
    title: 'Strategic Planning',
    description: 'We begin with thorough analysis and planning to ensure project success',
    icon: Rocket,
    color: '#8B5CF6',
    techs: ['Requirements', 'Architecture', 'Timeline'],
    details: [
      { title: 'Requirements Analysis', icon: Database },
      { title: 'System Architecture', icon: Cloud },
      { title: 'Resource Planning', icon: Settings }
    ]
  },
  {
    id: 'development',
    title: 'Agile Development',
    description: 'Iterative development with continuous feedback and improvements',
    icon: Code2,
    color: '#3B82F6',
    techs: ['Frontend', 'Backend', 'Testing'],
    details: [
      { title: 'Sprint Planning', icon: GitBranch },
      { title: 'Code Reviews', icon: Braces },
      { title: 'CI/CD Pipeline', icon: Rocket }
    ]
  },
  {
    id: 'deployment',
    title: 'Deployment & Scale',
    description: 'Seamless deployment and scaling of your solutions',
    icon: Cloud,
    color: '#10B981',
    techs: ['DevOps', 'Security', 'Monitoring'],
    details: [
      { title: 'Infrastructure Setup', icon: Settings },
      { title: 'Security Checks', icon: Lock },
      { title: 'Performance Testing', icon: Database }
    ]
  }
];