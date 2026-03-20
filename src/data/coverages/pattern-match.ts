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
      { id: 'LE', label: 'DE', role: 'dline', x: 36, y: 52 },
      { id: 'DT1', label: 'DT', role: 'dline', x: 44, y: 52 },
      { id: 'DT2', label: 'DT', role: 'dline', x: 56, y: 52 },
      { id: 'RE', label: 'DE', role: 'dline', x: 64, y: 52 },
      // Linebackers
      { id: 'LOLB', label: 'LB', role: 'linebacker', x: 28, y: 44,
        coverageZone: { type: 'hook', rect: { x: 10, y: 34, width: 28, height: 16 } } },
      { id: 'MLB', label: 'LB', role: 'linebacker', x: 50, y: 44,
        coverageZone: { type: 'hook', rect: { x: 36, y: 34, width: 28, height: 16 } } },
      { id: 'ROLB', label: 'LB', role: 'linebacker', x: 72, y: 44,
        coverageZone: { type: 'hook', rect: { x: 62, y: 34, width: 28, height: 16 } } },
      // Four deep defenders (Cover 4 shell)
      { id: 'LCB', label: 'CB', role: 'cornerback', x: 7, y: 47,
        coverageZone: { type: 'deep-quarter', rect: { x: 0, y: 5, width: 25, height: 33 } } },
      { id: 'FS', label: 'FS', role: 'safety', x: 30, y: 25,
        coverageZone: { type: 'deep-quarter', rect: { x: 25, y: 5, width: 25, height: 33 } } },
      { id: 'SS', label: 'SS', role: 'safety', x: 70, y: 25,
        coverageZone: { type: 'deep-quarter', rect: { x: 50, y: 5, width: 25, height: 33 } } },
      { id: 'RCB', label: 'CB', role: 'cornerback', x: 93, y: 47,
        coverageZone: { type: 'deep-quarter', rect: { x: 75, y: 5, width: 25, height: 33 } } },
    ],
    annotations: [
      { x: 50, y: 10, text: 'Zone shell → converts to man on verticals', style: 'zone-label' },
      { x: 50, y: 4, text: 'Looks like Cover 4 pre-snap', style: 'zone-label' },
    ],
  },
  relatedCoverages: ['cover-4', 'cover-6', 'bracket'],
  tags: ['hybrid', 'pattern-match', 'advanced', 'zone-to-man', 'quarters'],
  offensiveCounters: [
    {
      id: 'pm-mesh',
      name: 'Mesh Concept',
      description: 'Mesh forces pattern-match defenders to decide who converts to man on whom. As two receivers cross, the defense must \'trade\' assignments — and one always gets lost in the confusion.',
      routes: [
        { receiverKey: 'slot', routeType: 'mesh', isPrimary: true },
        { receiverKey: 'te', routeType: 'crossing', isPrimary: false },
        { receiverKey: 'wr1', routeType: 'go', isPrimary: false },
      ],
      requiredAssets: ['Quick slot and TE who read the crossing exchange'],
      auditeTrigger: 'Cover 4 shell — run mesh to exploit the conversion delay.',
      difficulty: 'intermediate',
    },
    {
      id: 'pm-post-wheel',
      name: 'Post-Wheel Combo',
      description: 'The TE runs a post (triggers a man conversion) while the RB wheels to the flat (too short to trigger conversion, defender stays in zone). One defender is always in the wrong coverage.',
      routes: [
        { receiverKey: 'te', routeType: 'post', isPrimary: false },
        { receiverKey: 'rb', routeType: 'wheel', isPrimary: true },
        { receiverKey: 'wr1', routeType: 'go', isPrimary: false },
      ],
      requiredAssets: ['TE with speed on the post', 'RB who can run the wheel cleanly'],
      auditeTrigger: 'Pattern-match — stress the zone-to-man conversion with different route depths.',
      difficulty: 'intermediate',
    },
    {
      id: 'pm-boundary-corner',
      name: 'Boundary Corner (Force the Conversion)',
      description: 'WR1 runs a deep vertical to force the CB to convert to man. Then WR1 breaks on a corner route. If the CB doesn\'t convert cleanly or is late, the corner route is wide open.',
      routes: [
        { receiverKey: 'wr1', routeType: 'corner', isPrimary: true },
        { receiverKey: 'slot', routeType: 'dig', isPrimary: false },
      ],
      requiredAssets: ['WR1 who can sell the vertical before breaking on the corner'],
      auditeTrigger: 'Pattern-match CB in zone shell — force the conversion with a vertical then corner.',
      difficulty: 'advanced',
    },
  ],
};

export default patternMatch;
