import { Link } from 'react-router-dom';
import type { CoverageData } from '../../data/types';
import CoverageDiagram from './CoverageDiagram';
import Badge from '../ui/Badge';
import './CoverageCard.css';

interface Props {
  coverage: CoverageData;
}

export default function CoverageCard({ coverage }: Props) {
  return (
    <Link to={`/learn/${coverage.id}`} className="coverage-card">
      <div className="coverage-card__diagram">
        <CoverageDiagram
          diagram={coverage.diagram}
          size="small"
          showZones={false}
          showArrows={false}
          showAnnotations={false}
          showLabels={true}
        />
      </div>
      <div className="coverage-card__info">
        <div className="coverage-card__header">
          <span className="coverage-card__short">{coverage.shortName}</span>
          <h3 className="coverage-card__name">{coverage.name}</h3>
        </div>
        <div className="coverage-card__tags">
          <Badge family={coverage.family} />
          {coverage.safetyDepth > 0 && (
            <span className="badge badge--neutral">{coverage.safetyDepth} deep</span>
          )}
          {coverage.safetyDepth === 0 && (
            <span className="badge badge--warning">No deep</span>
          )}
        </div>
        <p className="coverage-card__desc">{coverage.description.slice(0, 90)}…</p>
      </div>
    </Link>
  );
}
