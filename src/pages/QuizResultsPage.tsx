import { useLocation, Link, useNavigate } from 'react-router-dom';
import type { QuizResult, QuizQuestion } from '../data/types';
import { coverageById } from '../data/coverages';
import { useUserProgress } from '../hooks/useUserProgress';
import './QuizResultsPage.css';

interface LocationState {
  results: QuizResult[];
  score: number;
  total: number;
  questions: QuizQuestion[];
}

export default function QuizResultsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { getProgress } = useUserProgress();

  const state = location.state as LocationState | null;

  if (!state) {
    return (
      <div className="results-error">
        <p>No quiz results found.</p>
        <Link to="/quiz">Take a Quiz</Link>
      </div>
    );
  }

  const { results, score, total } = state;
  const pct = Math.round((score / total) * 100);

  const missed = results.filter((r) => !r.correct);
  const progress = getProgress();

  const grade =
    pct >= 90 ? { label: 'Excellent', color: '#22c55e' }
    : pct >= 70 ? { label: 'Good', color: '#4a9eff' }
    : pct >= 50 ? { label: 'Keep Practicing', color: '#f97316' }
    : { label: 'Study Up', color: '#ef4444' };

  return (
    <div className="results">
      <div className="results__header">
        <div className="results__score-ring">
          <span className="results__score-pct" style={{ color: grade.color }}>{pct}%</span>
          <span className="results__score-label">{score}/{total}</span>
        </div>
        <div>
          <div className="results__grade" style={{ color: grade.color }}>{grade.label}</div>
          <p className="results__grade-sub">
            You correctly identified {score} out of {total} coverages.
          </p>
        </div>
      </div>

      {missed.length > 0 && (
        <div className="results__missed">
          <h2 className="results__section-title">Missed Coverages</h2>
          <div className="results__missed-list">
            {missed.map((r) => {
              const correct = coverageById[r.correctId];
              const chosen = coverageById[r.chosenId];
              const acc = progress.coverageAccuracy[r.correctId];
              return (
                <div key={r.questionId} className="results__miss-item">
                  <div className="results__miss-coverage">
                    <span className="results__miss-name">{correct?.name}</span>
                    {acc && (
                      <span className="results__miss-accuracy">
                        All-time: {acc.correct}/{acc.attempts}
                      </span>
                    )}
                  </div>
                  <div className="results__miss-detail">
                    You chose <strong>{chosen?.name ?? r.chosenId}</strong>
                  </div>
                  <Link to={`/learn/${r.correctId}`} className="results__miss-link">
                    Study {correct?.name} →
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {missed.length === 0 && (
        <div className="results__perfect">
          🏆 Perfect score! You identified every coverage correctly.
        </div>
      )}

      <div className="results__actions">
        <button className="btn btn--primary" onClick={() => navigate('/quiz')}>
          New Quiz
        </button>
        <Link to="/learn" className="btn btn--secondary">
          Review Coverages
        </Link>
      </div>
    </div>
  );
}
