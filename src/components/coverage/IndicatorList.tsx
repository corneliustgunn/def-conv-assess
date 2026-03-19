import type { IndicatorGroup, IndicatorCategory } from '../../data/types';
import './IndicatorList.css';

interface Props {
  indicators: IndicatorGroup[];
}

const CATEGORY_LABELS: Record<IndicatorCategory, string> = {
  'pre-snap': 'Pre-Snap Read',
  'post-snap': 'Post-Snap Keys',
  'safety-alignment': 'Safety Alignment',
  'cornerback-alignment': 'Cornerback Alignment',
};

const CATEGORY_ICONS: Record<IndicatorCategory, string> = {
  'pre-snap': '👁',
  'post-snap': '⚡',
  'safety-alignment': '🛡',
  'cornerback-alignment': '🔴',
};

export default function IndicatorList({ indicators }: Props) {
  return (
    <div className="indicator-list">
      {indicators.map((group) => (
        <div key={group.category} className="indicator-group">
          <h4 className="indicator-group__title">
            <span className="indicator-group__icon">{CATEGORY_ICONS[group.category]}</span>
            {CATEGORY_LABELS[group.category]}: {group.title}
          </h4>
          <ul className="indicator-group__tips">
            {group.tips.map((tip, i) => (
              <li key={i} className="indicator-tip">{tip}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
