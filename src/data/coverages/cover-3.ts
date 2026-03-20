import type { CoverageData } from '../types';

const cover3: CoverageData = {
  id: 'cover-3',
  name: 'Cover 3',
  shortName: 'C3',
  family: 'zone',
  safetyDepth: 1,
  description:
    'Cover 3 divides the deep field into three zones: one-third for each cornerback and the center-third for the free safety. Four defenders cover underneath zones. It appears to be a single-high coverage pre-snap, but the key difference from Cover 1 is that CBs rotate off their receivers to cover deep thirds after the snap.',
  strengths: [
    'Excellent deep coverage — three deep defenders make Hail Mary plays nearly impossible',
    'Four underneath defenders handle the short and intermediate game well',
    'Disguises as Cover 1 (single high) — offense cannot always tell pre-snap',
    'Very effective against vertical passing concepts',
    'Common coverage behind a Cover 3 Buzz — can add an extra underneath defender',
  ],
  weaknesses: [
    'The deep sideline (corner route) can be open — CBs rotate inside, leaving the edge',
    'The flat zones can be exploited with a flood concept (overloading one side with 3 receivers)',
    'Hi-lo combinations (post/flat) stress the underneath defenders',
    'Spacing routes and mesh concepts can find holes between zones',
  ],
  indicators: [
    {
      category: 'safety-alignment',
      title: 'Single High — The Cover 3 Indicator',
      tips: [
        'ONE safety is deep and centered, 12–15 yards off the LOS',
        'This single-high look is shared with Cover 1 — the difference is in the CBs',
        'Pre-snap: look at whether CBs are in press (Cover 1) or playing off (Cover 3)',
      ],
    },
    {
      category: 'cornerback-alignment',
      title: 'CBs Play Off Coverage',
      tips: [
        'CBs are typically 5–8 yards off the receiver, NOT in press',
        'This "off coverage" gives CBs room to rotate to their deep third post-snap',
        'Press CBs who sink deep are a Cover 3 variant — still watch for the rotation',
      ],
    },
    {
      category: 'post-snap',
      title: 'CBs Rotate to Deep Thirds',
      tips: [
        'POST-SNAP: CBs immediately sink and rotate toward the sideline deep third',
        'They do NOT follow receivers across the field — they defend their zone',
        'The FS stays centered and deep — if both CBs and FS are all deep, it is Cover 3',
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
      // Four underneath zone defenders
      { id: 'LOLB', label: 'LB', role: 'linebacker', x: 16, y: 58,
        coverageZone: { type: 'flat', rect: { x: 0, y: 50, width: 22, height: 18 } } },
      { id: 'LILB', label: 'LB', role: 'linebacker', x: 38, y: 57,
        coverageZone: { type: 'hook-curl', rect: { x: 22, y: 50, width: 28, height: 18 } } },
      { id: 'RILB', label: 'LB', role: 'linebacker', x: 62, y: 57,
        coverageZone: { type: 'hook-curl', rect: { x: 50, y: 50, width: 28, height: 18 } } },
      { id: 'ROLB', label: 'LB', role: 'linebacker', x: 84, y: 58,
        coverageZone: { type: 'flat', rect: { x: 78, y: 50, width: 22, height: 18 } } },
      // FS single high center
      { id: 'FS', label: 'FS', role: 'safety', x: 50, y: 83,
        coverageZone: { type: 'deep-middle-third', rect: { x: 33, y: 62, width: 34, height: 33 } } },
      // CBs off coverage — rotate to deep thirds
      { id: 'LCB', label: 'CB', role: 'cornerback', x: 8, y: 53,
        coverageZone: { type: 'deep-third', rect: { x: 0, y: 62, width: 33, height: 33 } } },
      { id: 'RCB', label: 'CB', role: 'cornerback', x: 92, y: 53,
        coverageZone: { type: 'deep-third', rect: { x: 67, y: 62, width: 33, height: 33 } } },
    ],
    movementArrows: [
      { fromPlayerId: 'LCB', toX: 10, toY: 77, style: 'zone-drop' },
      { fromPlayerId: 'RCB', toX: 90, toY: 77, style: 'zone-drop' },
    ],
    annotations: [
      { x: 10, y: 78, text: 'Deep 1/3', style: 'zone-label' },
      { x: 50, y: 78, text: 'Deep 1/3', style: 'zone-label' },
      { x: 90, y: 78, text: 'Deep 1/3', style: 'zone-label' },
      { x: 18, y: 94, text: '⚠ Corner route gap', style: 'warning' },
      { x: 82, y: 94, text: '⚠ Corner route gap', style: 'warning' },
    ],
  },
  relatedCoverages: ['cover-1', 'cover-4', 'tampa-2'],
  tags: ['zone', 'single-high', 'three-deep', 'corner-route-weakness'],
  offensiveCounters: [
    {
      id: 'c3-corner',
      name: 'Corner Route',
      description: 'The CB rotates inside to his deep third, vacating the sideline corner. Run WR1 on a corner route — vertical then breaking to the boundary. The CB and safety both have too far to travel.',
      routes: [
        { receiverKey: 'wr1', routeType: 'corner', isPrimary: true },
        { receiverKey: 'te', routeType: 'dig', isPrimary: false },
      ],
      requiredAssets: ['WR1 with a clean release at the top of the route'],
      auditeTrigger: 'CB rotating inside to deep third — corner route attacks the gap he left.',
      difficulty: 'easy',
    },
    {
      id: 'c3-flood',
      name: 'Flood Concept',
      description: 'Overload one side with three routes: a deep post, a mid-depth curl, and a flat route. Three receivers, one deep zone — the FS or CB must pick one to cover.',
      routes: [
        { receiverKey: 'slot', routeType: 'post', isPrimary: false },
        { receiverKey: 'wr1', routeType: 'curl', isPrimary: true },
        { receiverKey: 'rb', routeType: 'flat', isPrimary: false },
      ],
      requiredAssets: ['Slot on the post', 'RB in the flat as outlet'],
      auditeTrigger: 'Three-deep zone — overload one side and force a coverage breakdown.',
      difficulty: 'intermediate',
    },
    {
      id: 'c3-dig-vert',
      name: 'Dig + Vertical Stretch',
      description: 'WR1 runs a dig route across the middle while the TE goes vertical on the opposite seam. Cover 3 can only have one safety deep — one of these routes will come open.',
      routes: [
        { receiverKey: 'wr1', routeType: 'dig', isPrimary: true },
        { receiverKey: 'te', routeType: 'seam', isPrimary: false },
        { receiverKey: 'wr2', routeType: 'go', isPrimary: false },
      ],
      requiredAssets: ['WR1 with a crisp dig break', 'TE speed to stretch vertically'],
      auditeTrigger: 'Single high safety — stretch him vertically with seam while hitting the dig.',
      difficulty: 'intermediate',
    },
  ],
};

export default cover3;
