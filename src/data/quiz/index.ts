import beginnerQuestions from './beginner';
import intermediateQuestions from './intermediate';
import advancedQuestions from './advanced';
import type { QuizQuestion, Difficulty, CoverageFamily } from '../types';
import { allCoverages } from '../coverages';

export const allQuestions: QuizQuestion[] = [
  ...beginnerQuestions,
  ...intermediateQuestions,
  ...advancedQuestions,
];

export function filterQuestions(
  difficulty: Difficulty | 'all',
  coverageFilter: 'all' | CoverageFamily,
  count: number
): QuizQuestion[] {
  let pool = allQuestions;

  if (difficulty !== 'all') {
    pool = pool.filter((q) => q.difficulty === difficulty);
  }

  if (coverageFilter !== 'all') {
    const validIds = allCoverages
      .filter((c) => c.family === coverageFilter)
      .map((c) => c.id);
    pool = pool.filter((q) => validIds.includes(q.coverageId));
  }

  // Shuffle
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

export { beginnerQuestions, intermediateQuestions, advancedQuestions };
