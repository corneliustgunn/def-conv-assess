export type CoverageFamily = 'zone' | 'man' | 'hybrid';
export type PlayerRole = 'cornerback' | 'safety' | 'linebacker' | 'nickel' | 'dline' | 'blitzer';
export type Difficulty = 'beginner' | 'intermediate' | 'advanced';
export type QuestionType = 'identify-coverage' | 'identify-weakness' | 'spot-the-difference';
export type IndicatorCategory = 'pre-snap' | 'post-snap' | 'safety-alignment' | 'cornerback-alignment';

export interface ZoneShape {
  type: string;
  rect?: { x: number; y: number; width: number; height: number };
  pathData?: string;
}

export interface PlayerDot {
  id: string;
  label: string;
  role: PlayerRole;
  x: number; // 0-100 % of SVG width
  y: number; // 0-100 % of SVG height (LOS ≈ 45%)
  coverageZone?: ZoneShape;
  manTarget?: string;
  isBlitzing?: boolean;
}

export interface MovementArrow {
  fromPlayerId: string;
  toX: number;
  toY: number;
  style: 'zone-drop' | 'man-follow' | 'blitz' | 'spy';
}

export interface DiagramAnnotation {
  x: number;
  y: number;
  text: string;
  style?: 'zone-label' | 'gap-label' | 'warning';
}

export interface DiagramData {
  players: PlayerDot[];
  movementArrows?: MovementArrow[];
  annotations?: DiagramAnnotation[];
}

export interface IndicatorGroup {
  category: IndicatorCategory;
  title: string;
  tips: string[];
}

export type ReceiverKey = 'wr1' | 'wr2' | 'slot' | 'te' | 'rb';

export type RouteType =
  | 'go' | 'post' | 'corner' | 'dig' | 'slant'
  | 'crossing' | 'seam' | 'flat' | 'bubble' | 'curl' | 'wheel' | 'mesh';

export interface OffensiveRoute {
  receiverKey: ReceiverKey;
  routeType: RouteType;
  isPrimary: boolean;
  label?: string;
}

export interface OffensiveCounter {
  id: string;
  name: string;
  description: string;
  routes: OffensiveRoute[];
  requiredAssets: string[];
  auditeTrigger: string;
  difficulty: 'easy' | 'intermediate' | 'advanced';
}

export interface CoverageData {
  id: string;
  name: string;
  shortName: string;
  family: CoverageFamily;
  safetyDepth: 0 | 1 | 2 | 3 | 4;
  description: string;
  strengths: string[];
  weaknesses: string[];
  indicators: IndicatorGroup[];
  diagram: DiagramData;
  relatedCoverages: string[];
  tags: string[];
  offensiveCounters: OffensiveCounter[];
}

export interface QuizQuestion {
  id: string;
  type: QuestionType;
  coverageId: string;
  diagramData: DiagramData;
  choices: string[]; // 4 coverage IDs
  explanation: string;
  difficulty: Difficulty;
  hint?: string;
}

export interface QuizResult {
  questionId: string;
  correct: boolean;
  chosenId: string;
  correctId: string;
}

export interface UserProgress {
  coverageAccuracy: Record<string, { correct: number; attempts: number }>;
  quizHistory: {
    date: string;
    score: number;
    total: number;
  }[];
}
