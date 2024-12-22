import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface Node {
  id: string;
  label: string;
  icon: LucideIcon;
}

interface Connection {
  from: string;
  to: string;
}

interface Stage {
  id: string;
  title: string;
  color: string;
  nodes: Node[];
  connections: Connection[];
}

interface ProcessStageProps {
  stage: Stage;
  onNodeHover: (nodeId: string | null) => void;
  hoveredNode: string | null;
  containerRef: React.RefObject<HTMLDivElement>;
}

export default function ProcessStage({ stage, onNodeHover, hoveredNode, containerRef }: ProcessStageProps) {
  const [positions, setPositions] = useState<Record<string, { x: number; y: number }>>({});
  const [paths, setPaths] = useState<Record<string, string>>({});

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const radius = Math.min(centerX, centerY) * 0.6;

    // Calculate node positions in a circle
    const newPositions: Record<string, { x: number; y: number }> = {};
    stage.nodes.forEach((node, index) => {
      const angle = (index * 2 * Math.PI) / stage.nodes.length - Math.PI / 2;
      newPositions[node.id] = {
        x: centerX + radius * Math.cos(angle),
        y: centerY + radius * Math.sin(angle)
      };
    });
    setPositions(newPositions);

    // Calculate connection paths
    const newPaths: Record<string, string> = {};
    stage.connections.forEach(conn => {
      const start = newPositions[conn.from];
      const end = newPositions[conn.to];
      if (start && end) {
        const path = `M ${start.x} ${start.y} Q ${centerX} ${centerY} ${end.x} ${end.y}`;
        newPaths[`${conn.from}-${conn.to}`] = path;
      }
    });
    setPaths(newPaths);
  }, [stage, containerRef]);

  return (
    <motion.div
      className="relative h-[600px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Connections */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="7"
            refX="9"
            refY="3.5"
            orient="auto"
          >
            <polygon
              points="0 0, 10 3.5, 0 7"
              fill={stage.color}
            />
          </marker>
        </defs>
        {Object.entries(paths).map(([key, path]) => (
          <motion.path
            key={key}
            d={path}
            fill="none"
            stroke={stage.color}
            strokeWidth="2"
            markerEnd="url(#arrowhead)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        ))}
      </svg>

      {/* Nodes */}
      {stage.nodes.map((node) => {
        const pos = positions[node.id];
        if (!pos) return null;

        const Icon = node.icon;
        const isHovered = hoveredNode === node.id;

        return (
          <motion.div
            key={node.id}
            className="absolute"
            style={{ left: pos.x, top: pos.y }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onHoverStart={() => onNodeHover(node.id)}
            onHoverEnd={() => onNodeHover(null)}
          >
            <motion.div
              className="relative -translate-x-1/2 -translate-y-1/2"
              whileHover={{ scale: 1.1 }}
            >
              {/* Background glow */}
              <motion.div
                className="absolute inset-0 rounded-xl blur-xl"
                style={{ background: stage.color }}
                animate={{
                  opacity: isHovered ? 0.3 : 0.1,
                  scale: isHovered ? 1.2 : 1,
                }}
              />

              {/* Node content */}
              <motion.div
                className="relative bg-white p-4 rounded-xl shadow-lg"
                animate={{
                  y: isHovered ? -5 : 0,
                  boxShadow: isHovered
                    ? `0 20px 25px -5px ${stage.color}40`
                    : '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                }}
              >
                <motion.div
                  className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ background: stage.color }}
                  animate={isHovered ? {
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                  } : {}}
                  transition={{ duration: 1 }}
                >
                  <Icon className="h-6 w-6 text-white" />
                </motion.div>
                <p className="mt-2 text-sm font-medium text-gray-900">{node.label}</p>

                {/* Animated border */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 rounded-full"
                  style={{ background: stage.color }}
                  initial={{ width: "0%" }}
                  animate={{ width: isHovered ? "100%" : "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}