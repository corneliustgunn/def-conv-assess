import type { CoverageData } from '../types';

const patternMatch: CoverageData = {
  id: 'pattern-match',
  name: 'Pattern-Match (Cover 4)',
  shortName: 'PM',
  family: 'hybrid',
  safetyDepth: 2,
  description:
    'Pattern-match coverage starts in a zone shell (typically Cover 4 / Quarters) but converts to man coverage based on the routes that receivers run. If a receiver runs a vertical or deep route, the defender converts to man and follows him. If a receiver runs a short route, the defender hands off and covers a different threat. It combines the deception of zone with the precision of man.',
  strengths: [
    'Extremely difficult for the QB to diagnose — zone pre-snap, man post-snap',
    'Takes away both zone beaters (flood, spacing) and man beaters (rubs, picks)',
    'Four defenders can be deployed deep with man-like coverage on individual routes',
    'Highly effective against complex route trees and combination routes',
  ],
  weaknesses: [
    'Requires elite communication and film study from defenders — one mistake creates a large open window',
    'Mesh and crossing concepts can confuse who is converting to man on whom',
    'If the defense is slow to convert, receivers can find a window in the transition',
    'Short and quick routes can outpace the defensive conversion',
  ],
  indicators: [
    {
      category: 'pre-snap',
      title: 'Looks Like Cover 4',
      tips: [
        'Pre-snap: Two safeties are deep and wide, both CBs are playing off — identical to Cover 4',
        'You cannot tell pattern-match from Cover 4 in a pure pre-snap read',
        'The quarterback must read routes post-snap to determine which route concepts work',
      ],
    },
    {
      category: 'post-snap',
      title: 'Defenders Convert to Man on Verticals',
      tips: [
        'If a receiver goes deep, his assigned defender runs with him in man coverage',
        'If a receiver runs short (flat, slant), the defender does NOT follow — he covers the vacated area',
        'Watch defenders who appear to "trade" assignments — this is the pattern-match conversion',
      ],
    },
    {
      category: 'post-snap',
      title: 'How to Beat It',
      tips: [
        'Mesh and crossing concepts force defenders to decide who follows whom',
        'A 2x2 four-vertical concept can overload it — run one receiver on a deep post to pull the safety',
        'Short dig-post combos can create confusion in the conversion',
      ],
    },
  ],
  diagram: {
    players: [
      // D-line
      { id: 'LE', label: 'DE', role: 'dline', x: 36, y: 48 },
      { id: 'DT1', label: 'DT', role: 'dline', x: 44, y: 48 },
      { id: 'DT2', label: 'DT', role: 'dline', x: 56, y: 48 },
      { id: 'RE', label: 'DE', role: 'dline', x: 64, y: 48 },
      // Linebackers
      { id: 'LOLB', label: 'LB', role: 'linebacker', x: 28, y: 56,
        coverageZone: { type: 'hook', rect: { x: 10, y: 50, width: 28, height: 16 } } },
      { id: 'MLB', label: 'LB', role: 'linebacker', x: 50, y: 56,
        coverageZone: { type: 'hook', rect: { x: 36, y: 50, width: 28, height: 16 } } },
      { id: 'ROLB', label: 'LB', role: 'linebacker', x: 72, y: 56,
        coverageZone: { type: 'hook', rect: { x: 62, y: 50, width: 28, height: 16 } } },
      // Four deep defenders (Cover 4 shell)
      { id: 'LCB', label: 'CB', role: 'cornerback', x: 7, y: 53,
        coverageZone: { type: 'deep-quarter', rect: { x: 0, y: 62, width: 25, height: 33 } } },
      { id: 'FS', label: 'FS', role: 'safety', x: 30, y: 75,
        coverageZone: { type: 'deep-quarter', rect: { x: 25, y: 62, width: 25, height: 33 } } },
      { id: 'SS', label: 'SS', role: 'safety', x: 70, y: 75,
        coverageZone: { type: 'deep-quarter', rect: { x: 50, y: 62, width: 25, height: 33 } } },
      { id: 'RCB', label: 'CB', role: 'cornerback', x: 93, y: 53,
        coverageZone: { type: 'deep-quarter', rect: { x: 75, y: 62, width: 25, height: 33 } } },
    ],
    annotations: [
      { x: 50, y: 90, text: 'Zone shell → converts to man on verticals', style: 'zone-label' },
      { x: 50, y: 96, text: 'Looks like Cover 4 pre-snap', style: 'zone-label' },
    ],
  },
  relatedCoverages: ['cover-4', 'cover-6', 'bracket'],
  tags: ['hybrid', 'pattern-match', 'advanced', 'zone-to-man', 'quarters'],
};

export default patternMatch;
