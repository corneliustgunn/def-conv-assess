import { useState } from 'react';
import { allCoverages } from '../data/coverages';
import type { CoverageFamily } from '../data/types';
import CoverageCard from '../components/coverage/CoverageCard';
import './LearnIndexPage.css';

const FILTERS: { label: string; value: CoverageFamily | 'all' }[] = [
  { label: 'All', value: 'all' },
  { label: 'Zone', value: 'zone' },
  { label: 'Man', value: 'man' },
  { label: 'Hybrid', value: 'hybrid' },
];

export default function LearnIndexPage() {
  const [filter, setFilter] = useState<CoverageFamily | 'all'>('all');

  const filtered = filter === 'all'
    ? allCoverages
    : allCoverages.filter((c) => c.family === filter);

  return (
    <div className="learn-index">
      <div className="learn-index__header">
        <h1 className="learn-index__title">Defensive Coverages</h1>
        <p className="learn-index__subtitle">
          Select a coverage to learn how to identify it pre-snap and post-snap.
        </p>
        <div className="learn-index__filters">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              className={`filter-btn${filter === f.value ? ' filter-btn--active' : ''}`}
              onClick={() => setFilter(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="learn-index__grid">
        {filtered.map((coverage) => (
          <CoverageCard key={coverage.id} coverage={coverage} />
        ))}
      </div>
    </div>
  );
}
