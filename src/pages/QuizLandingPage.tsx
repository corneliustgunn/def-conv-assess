import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Difficulty, CoverageFamily } from '../data/types';
import './QuizLandingPage.css';

const QUESTION_COUNTS = [5, 10, 15, 20];

const DIFFICULTIES: { label: string; value: Difficulty | 'all'; desc: string }[] = [
  { label: 'Beginner', value: 'beginner', desc: 'Basic recognition — single-high vs. two-deep, man vs. zone' },
  { label: 'Mixed', value: 'all', desc: 'All difficulty levels, randomly ordered' },
  { label: 'Advanced', value: 'advanced', desc: 'Blitz recognition, Cover 6, Tampa 2, Pattern-Match' },
];

const FAMILY_FILTERS: { label: string; value: CoverageFamily | 'all'; desc: string }[] = [
  { label: 'All Coverages', value: 'all', desc: 'Every coverage in the library' },
  { label: 'Zone Only', value: 'zone', desc: 'Cover 2, Cover 3, Cover 4, Tampa 2, Cover 6' },
  { label: 'Man Only', value: 'man', desc: 'Cover 0, Cover 1, Cover 2 Man, Blitzes' },
  { label: 'Hybrid / Advanced', value: 'hybrid', desc: 'Cover 6, Bracket, Pattern-Match' },
];

export default function QuizLandingPage() {
  const navigate = useNavigate();
  const [count, setCount] = useState(10);
  const [difficulty, setDifficulty] = useState<Difficulty | 'all'>('all');
  const [family, setFamily] = useState<CoverageFamily | 'all'>('all');

  function startQuiz() {
    const params = new URLSearchParams({
      count: String(count),
      difficulty,
      family,
    });
    navigate(`/quiz/session?${params.toString()}`);
  }

  return (
    <div className="quiz-landing">
      <h1 className="quiz-landing__title">Coverage Quiz</h1>
      <p className="quiz-landing__subtitle">
        Configure your quiz and test your ability to identify defensive coverages.
      </p>

      <div className="quiz-config">
        <section className="quiz-config__section">
          <h2>Number of Questions</h2>
          <div className="quiz-config__options quiz-config__options--row">
            {QUESTION_COUNTS.map((n) => (
              <button
                key={n}
                className={`option-btn${count === n ? ' option-btn--active' : ''}`}
                onClick={() => setCount(n)}
              >
                {n}
              </button>
            ))}
          </div>
        </section>

        <section className="quiz-config__section">
          <h2>Difficulty</h2>
          <div className="quiz-config__options">
            {DIFFICULTIES.map((d) => (
              <button
                key={d.value}
                className={`option-btn option-btn--wide${difficulty === d.value ? ' option-btn--active' : ''}`}
                onClick={() => setDifficulty(d.value)}
              >
                <span className="option-btn__label">{d.label}</span>
                <span className="option-btn__desc">{d.desc}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="quiz-config__section">
          <h2>Coverage Filter</h2>
          <div className="quiz-config__options">
            {FAMILY_FILTERS.map((f) => (
              <button
                key={f.value}
                className={`option-btn option-btn--wide${family === f.value ? ' option-btn--active' : ''}`}
                onClick={() => setFamily(f.value)}
              >
                <span className="option-btn__label">{f.label}</span>
                <span className="option-btn__desc">{f.desc}</span>
              </button>
            ))}
          </div>
        </section>

        <button className="btn btn--primary btn--large" onClick={startQuiz}>
          Start Quiz →
        </button>
      </div>
    </div>
  );
}
