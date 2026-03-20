import { useState } from 'react';
import { allCoverages } from '../data/coverages';
import type { CoverageData } from '../data/types';
import CounterCard from '../components/coverage/CounterCard';
import './AudiblePage.css';

const FAMILY_COLORS: Record<string, string> = {
  zone: 'zone',
  man: 'man',
  hybrid: 'hybrid',
};

export default function AudiblePage() {
  const [selected, setSelected] = useState<CoverageData>(allCoverages[2]); // default: Cover 2

  return (
    <div className="audible">
      <div className="audible__header">
        <h1 className="audible__title">Quick Audible</h1>
        <p className="audible__subtitle">
          Tap the coverage you're seeing. Get the offensive counters instantly.
        </p>
      </div>

      <div className="audible__selector">
        {allCoverages.map((coverage) => (
          <button
            key={coverage.id}
            className={`audible__chip audible__chip--${FAMILY_COLORS[coverage.family]}${selected.id === coverage.id ? ' audible__chip--active' : ''}`}
            onClick={() => setSelected(coverage)}
          >
            <span className="audible__chip-short">{coverage.shortName}</span>
            <span className="audible__chip-name">{coverage.name}</span>
          </button>
        ))}
      </div>

      <div className="audible__result">
        <div className="audible__result-header">
          <div className="audible__result-coverage">
            <span className="audible__result-short">{selected.shortName}</span>
            <h2 className="audible__result-name">{selected.name}</h2>
          </div>
          {selected.offensiveCounters.length > 0 && (
            <div className="audible__trigger-banner">
              <span className="audible__trigger-icon">👁</span>
              <span className="audible__trigger-text">
                {selected.offensiveCounters[0].auditeTrigger}
              </span>
            </div>
          )}
        </div>

        <div className="audible__counters">
          {selected.offensiveCounters.map((counter) => (
            <CounterCard
              key={counter.id}
              counter={counter}
              diagram={selected.diagram}
              size="compact"
            />
          ))}
        </div>

        {selected.offensiveCounters.length === 0 && (
          <p className="audible__empty">No counters defined for this coverage yet.</p>
        )}
      </div>
    </div>
  );
}
