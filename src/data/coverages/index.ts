import cover0 from './cover-0';
import cover1 from './cover-1';
import cover2 from './cover-2';
import cover2Man from './cover-2-man';
import cover3 from './cover-3';
import cover4 from './cover-4';
import tampa2 from './tampa-2';
import cover6 from './cover-6';
import cover0Blitz from './cover-0-blitz';
import cover1Blitz from './cover-1-blitz';
import bracket from './bracket';
import patternMatch from './pattern-match';
import type { CoverageData } from '../types';

export const allCoverages: CoverageData[] = [
  cover0,
  cover1,
  cover2,
  cover2Man,
  cover3,
  cover4,
  tampa2,
  cover6,
  cover0Blitz,
  cover1Blitz,
  bracket,
  patternMatch,
];

export const coverageById: Record<string, CoverageData> = Object.fromEntries(
  allCoverages.map((c) => [c.id, c])
);

export {
  cover0,
  cover1,
  cover2,
  cover2Man,
  cover3,
  cover4,
  tampa2,
  cover6,
  cover0Blitz,
  cover1Blitz,
  bracket,
  patternMatch,
};
