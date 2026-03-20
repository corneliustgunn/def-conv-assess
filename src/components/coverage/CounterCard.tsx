import type { OffensiveCounter, DiagramData } from '../../data/types';
import CoverageDiagram from './CoverageDiagram';
import './CounterCard.css';

interface Props {
  counter: OffensiveCounter;
  diagram: DiagramData;
  size?: 'compact' | 'full';
}

const DIFFICULTY_LABELS = { easy: 'Easy', intermediate: 'Intermediate', advanced: 'Advanced' };

export default function CounterCard({ counter, diagram, size = 'full' }: Props) {
  const isCompact = size === 'compact';

  return (
    <div className={`counter-card counter-card--${size}`}>
      <div className="counter-card__diagram">
        <CoverageDiagram
          diagram={diagram}
          offensiveRoutes={counter.routes}
          showZones={true}
          showArrows={false}
          showLabels={true}
          showAnnotations={false}
          size="small"
        />
      </div>

      <div className="counter-card__body">
        <div className="counter-card__header">
          <h3 className="counter-card__name">{counter.name}</h3>
          <span className={`counter-card__difficulty counter-card__difficulty--${counter.difficulty}`}>
            {DIFFICULTY_LABELS[counter.difficulty]}
          </span>
        </div>

        <p className="counter-card__description">{counter.description}</p>

        <div className="counter-card__trigger">
          <span className="counter-card__trigger-icon">⚡</span>
          <span className="counter-card__trigger-text">{counter.auditeTrigger}</span>
        </div>

        {!isCompact && counter.requiredAssets.length > 0 && (
          <div className="counter-card__assets">
            <span className="counter-card__assets-label">Needs:</span>
            {counter.requiredAssets.map((asset, i) => (
              <span key={i} className="counter-card__asset-chip">{asset}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
