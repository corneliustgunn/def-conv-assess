import { useParams, Link, useNavigate } from 'react-router-dom';
import { coverageById, allCoverages } from '../data/coverages';
import CoverageDiagram from '../components/coverage/CoverageDiagram';
import IndicatorList from '../components/coverage/IndicatorList';
import CounterCard from '../components/coverage/CounterCard';
import Badge from '../components/ui/Badge';
import './CoverageDetailPage.css';

export default function CoverageDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const coverage = id ? coverageById[id] : null;

  if (!coverage) {
    return (
      <div className="detail-error">
        <p>Coverage not found.</p>
        <Link to="/learn">← Back to coverages</Link>
      </div>
    );
  }

  const related = coverage.relatedCoverages
    .map((rid) => coverageById[rid])
    .filter(Boolean);

  const allIds = allCoverages.map((c) => c.id);
  const currentIdx = allIds.indexOf(coverage.id);
  const prevId = currentIdx > 0 ? allIds[currentIdx - 1] : null;
  const nextId = currentIdx < allIds.length - 1 ? allIds[currentIdx + 1] : null;

  return (
    <div className="detail">
      <div className="detail__nav">
        <Link to="/learn" className="detail__back">← All Coverages</Link>
        <div className="detail__nav-arrows">
          {prevId && (
            <button className="nav-arrow" onClick={() => navigate(`/learn/${prevId}`)}>← Prev</button>
          )}
          {nextId && (
            <button className="nav-arrow" onClick={() => navigate(`/learn/${nextId}`)}>Next →</button>
          )}
        </div>
      </div>

      <div className="detail__header">
        <div className="detail__title-row">
          <span className="detail__short">{coverage.shortName}</span>
          <h1 className="detail__title">{coverage.name}</h1>
          <Badge family={coverage.family} />
          {coverage.tags.includes('blitz') && (
            <span className="badge badge--blitz">Blitz</span>
          )}
        </div>
        <p className="detail__description">{coverage.description}</p>
      </div>

      <div className="detail__body">
        <div className="detail__diagram-col">
          <h2 className="detail__section-title">Formation Diagram</h2>
          <CoverageDiagram
            diagram={coverage.diagram}
            formation={coverage.formation}
            size="large"
            showZones={true}
            showArrows={true}
            showAnnotations={true}
            showLabels={true}
          />
        </div>

        <div className="detail__content-col">
          <div className="detail__sw">
            <div className="detail__sw-col">
              <h2 className="detail__section-title detail__section-title--green">Strengths</h2>
              <ul className="detail__list detail__list--strengths">
                {coverage.strengths.map((s, i) => <li key={i}>{s}</li>)}
              </ul>
            </div>
            <div className="detail__sw-col">
              <h2 className="detail__section-title detail__section-title--red">Weaknesses</h2>
              <ul className="detail__list detail__list--weaknesses">
                {coverage.weaknesses.map((w, i) => <li key={i}>{w}</li>)}
              </ul>
            </div>
          </div>

          <div>
            <h2 className="detail__section-title">How to Identify It</h2>
            <IndicatorList indicators={coverage.indicators} />
          </div>

          {related.length > 0 && (
            <div>
              <h2 className="detail__section-title">Compare With</h2>
              <div className="detail__related">
                {related.map((r) => (
                  <Link key={r.id} to={`/learn/${r.id}`} className="detail__related-link">
                    <span className="detail__related-short">{r.shortName}</span>
                    {r.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {coverage.offensiveCounters.length > 0 && (
        <div className="detail__attack">
          <div className="detail__attack-header">
            <h2 className="detail__attack-title">
              <span className="detail__attack-icon">⚔</span>
              How to Attack It
            </h2>
            <p className="detail__attack-subtitle">
              Offensive concepts that exploit {coverage.name}'s vulnerabilities.
              Gold route = primary read.
            </p>
          </div>
          <div className="detail__attack-cards">
            {coverage.offensiveCounters.map((counter) => (
              <CounterCard
                key={counter.id}
                counter={counter}
                diagram={coverage.diagram}
                size="full"
              />
            ))}
          </div>
        </div>
      )}

      <div className="detail__quiz-cta">
        <Link to="/quiz" className="btn btn--primary">Test Your Knowledge →</Link>
        <Link to="/audible" className="btn btn--secondary">Quick Audible Reference →</Link>
      </div>
    </div>
  );
}
