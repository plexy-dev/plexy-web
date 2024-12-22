export interface Step {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  tools: string[];
}

export interface ProcessStage {
  id: string;
  title: string;
  description: string;
  steps: Step[];
  color: string;
}

export interface MousePosition {
  x: number;
  y: number;
}