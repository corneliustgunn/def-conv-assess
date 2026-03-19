import type { CoverageFamily } from '../../data/types';
import './Badge.css';

interface Props {
  family: CoverageFamily;
}

const FAMILY_LABELS: Record<CoverageFamily, string> = {
  zone: 'Zone',
  man: 'Man',
  hybrid: 'Hybrid',
};

export default function Badge({ family }: Props) {
  return (
    <span className={`badge badge--${family}`}>
      {FAMILY_LABELS[family]}
    </span>
  );
}
