import { useState, useCallback } from 'react';
import type { QuizQuestion, QuizResult } from '../data/types';
import { useUserProgress } from './useUserProgress';

interface SessionState {
  questions: QuizQuestion[];
  currentIndex: number;
  selected: string | null;
  locked: boolean;
  results: QuizResult[];
  finished: boolean;
}

export function useQuizSession(questions: QuizQuestion[]) {
  const { recordResult } = useUserProgress();

  const [state, setState] = useState<SessionState>({
    questions,
    currentIndex: 0,
    selected: null,
    locked: false,
    results: [],
    finished: false,
  });

  const currentQuestion = state.questions[state.currentIndex] ?? null;

  const selectAnswer = useCallback((chosenId: string) => {
    setState((prev) => {
      if (prev.locked || !currentQuestion) return prev;
      const correct = currentQuestion.coverageId === chosenId;
      const result: QuizResult = {
        questionId: currentQuestion.id,
        correct,
        chosenId,
        correctId: currentQuestion.coverageId,
      };
      recordResult(currentQuestion.coverageId, correct);
      return { ...prev, selected: chosenId, locked: true, results: [...prev.results, result] };
    });
  }, [currentQuestion, recordResult]);

  const advance = useCallback(() => {
    setState((prev) => {
      const nextIndex = prev.currentIndex + 1;
      if (nextIndex >= prev.questions.length) {
        return { ...prev, finished: true };
      }
      return { ...prev, currentIndex: nextIndex, selected: null, locked: false };
    });
  }, []);

  const score = state.results.filter((r) => r.correct).length;

  return {
    currentQuestion,
    currentIndex: state.currentIndex,
    total: state.questions.length,
    selected: state.selected,
    locked: state.locked,
    results: state.results,
    finished: state.finished,
    score,
    selectAnswer,
    advance,
  };
}
