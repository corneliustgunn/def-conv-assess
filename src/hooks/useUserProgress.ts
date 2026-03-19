import { useCallback } from 'react';
import type { UserProgress } from '../data/types';

const STORAGE_KEY = 'defcoviq_progress';

function loadProgress(): UserProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as UserProgress;
  } catch { /* ignore */ }
  return { coverageAccuracy: {}, quizHistory: [] };
}

function saveProgress(p: UserProgress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
  } catch { /* ignore */ }
}

export function useUserProgress() {
  const recordResult = useCallback((coverageId: string, correct: boolean) => {
    const p = loadProgress();
    if (!p.coverageAccuracy[coverageId]) {
      p.coverageAccuracy[coverageId] = { correct: 0, attempts: 0 };
    }
    p.coverageAccuracy[coverageId].attempts += 1;
    if (correct) p.coverageAccuracy[coverageId].correct += 1;
    saveProgress(p);
  }, []);

  const recordSession = useCallback((score: number, total: number) => {
    const p = loadProgress();
    p.quizHistory.push({
      date: new Date().toISOString(),
      score,
      total,
    });
    saveProgress(p);
  }, []);

  const getProgress = useCallback(() => loadProgress(), []);

  return { recordResult, recordSession, getProgress };
}
