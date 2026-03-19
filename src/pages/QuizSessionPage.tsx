import { useSearchParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import type { QuizQuestion, Difficulty, CoverageFamily } from '../data/types';
import { filterQuestions } from '../data/quiz';
import { useQuizSession } from '../hooks/useQuizSession';
import { useUserProgress } from '../hooks/useUserProgress';
import CoverageDiagram from '../components/coverage/CoverageDiagram';
import AnswerChoiceGrid from '../components/quiz/AnswerChoiceGrid';
import FeedbackPanel from '../components/quiz/FeedbackPanel';
import ProgressBar from '../components/quiz/ProgressBar';
import './QuizSessionPage.css';

export default function QuizSessionPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { recordSession } = useUserProgress();

  const count = parseInt(searchParams.get('count') ?? '10', 10);
  const difficulty = (searchParams.get('difficulty') ?? 'all') as Difficulty | 'all';
  const family = (searchParams.get('family') ?? 'all') as CoverageFamily | 'all';

  const [questions] = useState<QuizQuestion[]>(() =>
    filterQuestions(difficulty, family, count)
  );

  const {
    currentQuestion,
    currentIndex,
    total,
    selected,
    locked,
    results,
    finished,
    score,
    selectAnswer,
    advance,
  } = useQuizSession(questions);

  useEffect(() => {
    if (finished) {
      recordSession(score, total);
      navigate('/quiz/results', {
        state: { results, score, total, questions },
        replace: true,
      });
    }
  }, [finished]);

  if (questions.length === 0) {
    return (
      <div className="quiz-session__empty">
        <p>No questions available for this filter combination.</p>
        <button className="btn btn--secondary" onClick={() => navigate('/quiz')}>
          ← Back to Quiz Config
        </button>
      </div>
    );
  }

  if (!currentQuestion) return null;

  const isCorrect = selected !== null && selected === currentQuestion.coverageId;

  return (
    <div className="quiz-session">
      <div className="quiz-session__header">
        <ProgressBar current={currentIndex + 1} total={total} />
        <span className="quiz-session__score">
          {score}/{currentIndex + (locked ? 1 : 0)} correct
        </span>
      </div>

      <div className="quiz-session__question">
        <div className="quiz-session__prompt">
          <h2 className="quiz-session__prompt-text">What defensive coverage is this?</h2>
          {currentQuestion.hint && !locked && (
            <p className="quiz-session__hint">💡 Hint: {currentQuestion.hint}</p>
          )}
        </div>

        <div className="quiz-session__diagram">
          <CoverageDiagram
            diagram={currentQuestion.diagramData}
            showZones={locked}
            showArrows={locked}
            showAnnotations={false}
            showLabels={true}
            size="large"
          />
        </div>

        <div className="quiz-session__choices">
          <AnswerChoiceGrid
            choices={currentQuestion.choices}
            selected={selected}
            correctId={currentQuestion.coverageId}
            locked={locked}
            onSelect={selectAnswer}
          />
        </div>

        {locked && selected && (
          <div className="quiz-session__feedback">
            <FeedbackPanel
              question={currentQuestion}
              chosenId={selected}
              isCorrect={isCorrect}
            />
            <button className="btn btn--primary quiz-session__next" onClick={advance}>
              {currentIndex + 1 >= total ? 'See Results' : 'Next Question →'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
