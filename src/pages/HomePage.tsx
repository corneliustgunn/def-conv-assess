import { Link } from 'react-router-dom';
import './HomePage.css';

export default function HomePage() {
  return (
    <div className="home">
      <div className="home__hero">
        <div className="home__hero-badge">EA Sports College Football 25 / 26</div>
        <h1 className="home__title">
          Read the Defense.<br />
          <span className="home__title--accent">Win the Game.</span>
        </h1>
        <p className="home__subtitle">
          Master every defensive coverage — from Cover 0 Blitz to Pattern-Match —
          with interactive diagrams and a quiz system that tracks your progress.
        </p>
        <div className="home__cta">
          <Link to="/learn" className="btn btn--primary">Start Learning</Link>
          <Link to="/quiz" className="btn btn--secondary">Take a Quiz</Link>
        </div>
      </div>

      <div className="home__features">
        <div className="home__feature">
          <div className="home__feature-icon">📐</div>
          <h3>12 Defensive Coverages</h3>
          <p>Every coverage from Cover 0 to Pattern-Match, with SVG diagrams showing exact player positioning and zone assignments.</p>
        </div>
        <div className="home__feature">
          <div className="home__feature-icon">👁</div>
          <h3>Pre & Post-Snap Reads</h3>
          <p>Learn the exact pre-snap indicators to identify each coverage before the ball is snapped — the same keys used by real QBs.</p>
        </div>
        <div className="home__feature">
          <div className="home__feature-icon">🧠</div>
          <h3>Progressive Quizzes</h3>
          <p>Test your recognition from beginner to advanced. Track your accuracy per coverage and focus on your weak spots.</p>
        </div>
        <div className="home__feature">
          <div className="home__feature-icon">📊</div>
          <h3>Progress Tracking</h3>
          <p>Your quiz history and per-coverage accuracy are saved locally so you can see improvement over time.</p>
        </div>
      </div>

      <div className="home__coverages-preview">
        <h2>Coverages Covered</h2>
        <div className="home__coverage-list">
          {[
            { label: 'Cover 0', type: 'man' },
            { label: 'Cover 1', type: 'man' },
            { label: 'Cover 2', type: 'zone' },
            { label: 'Cover 2 Man', type: 'man' },
            { label: 'Cover 3', type: 'zone' },
            { label: 'Cover 4', type: 'zone' },
            { label: 'Tampa 2', type: 'zone' },
            { label: 'Cover 6', type: 'hybrid' },
            { label: 'Cover 0 Blitz', type: 'man' },
            { label: 'Cover 1 Blitz', type: 'man' },
            { label: 'Bracket', type: 'hybrid' },
            { label: 'Pattern-Match', type: 'hybrid' },
          ].map((c) => (
            <span key={c.label} className={`home__coverage-chip home__coverage-chip--${c.type}`}>
              {c.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
