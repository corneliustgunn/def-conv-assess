import type { CoverageData } from '../types';

const tampa2: CoverageData = {
  id: 'tampa-2',
  name: 'Tampa 2',
  shortName: 'T2',
  family: 'zone',
  safetyDepth: 2,
  description:
    'Tampa 2 is a variant of Cover 2 where the middle linebacker drops into a deep seam zone down the middle of the field. The two safeties still cover their deep halves, but the MLB "splits" the coverage by driving toward the deep middle on his drop. This plugs the main weakness of standard Cover 2 — the seam between the safeties.',
  strengths: [
    'Seam route coverage is significantly improved — the MLB takes the deep middle',
    'Maintains two-high safety shell, protecting the deep outside',
    'More defenders in the passing lanes than a standard Cover 2',
    'Excellent against four-vertical and seam-based passing concepts',
  ],
  weaknesses: [
    'MLB must be fast and athletic to drop deep — a slow MLB cannot cover the seam',
    'With the MLB deep, the hook-curl zones have fewer defenders',
    'Dig routes and crossing routes at 10–15 yards can find open windows',
    'Still vulnerable to corner routes attacking the gap between CB flat and safety half',
  ],
  indicators: [
    {
      category: 'safety-alignment',
      title: 'Two-High Shell — Same as Cover 2',
      tips: [
        'Pre-snap: TWO safeties split wide, 12–15 yards deep — identical to zone Cover 2',
        'CBs are pressed or at the LOS, just like Cover 2',
        'Tampa 2 is virtually indistinguishable from Cover 2 pre-snap',
      ],
    },
    {
      category: 'post-snap',
      title: 'Watch the Middle Linebacker',
      tips: [
        'POST-SNAP: The MLB immediately drops deep up the seam — he runs backward hard',
        'In standard Cover 2, the MLB stays relatively shallow in his hook zone',
        'If the MLB drives deep down the middle post-snap, it is Tampa 2',
      ],
    },
    {
      category: 'pre-snap',
      title: 'MLB Alignment Hint',
      tips: [
        'The MLB may tip Tampa 2 by a slightly deeper pre-snap alignment',
        'Some defenses give away Tampa 2 when the MLB shades toward the center',
        'However, good defenses disguise this — watch post-snap to confirm',
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
      // Linebackers — LOLB and ROLB in underneath zones, MLB drops DEEP
      { id: 'LOLB', label: 'LB', role: 'linebacker', x: 22, y: 42,
        coverageZone: { type: 'curl-flat', rect: { x: 5, y: 32, width: 25, height: 16 } } },
      { id: 'MLB', label: 'MLB', role: 'linebacker', x: 50, y: 42,
        coverageZone: { type: 'deep-seam', rect: { x: 35, y: 15, width: 30, height: 30 } } },
      { id: 'ROLB', label: 'LB', role: 'linebacker', x: 78, y: 42,
        coverageZone: { type: 'curl-flat', rect: { x: 70, y: 32, width: 25, height: 16 } } },
      // Two safeties deep split wide
      { id: 'FS', label: 'FS', role: 'safety', x: 28, y: 20,
        coverageZone: { type: 'deep-half', rect: { x: 0, y: 5, width: 50, height: 33 } } },
      { id: 'SS', label: 'SS', role: 'safety', x: 72, y: 20,
        coverageZone: { type: 'deep-half', rect: { x: 50, y: 5, width: 50, height: 33 } } },
      // CBs press at LOS
      { id: 'LCB', label: 'CB', role: 'cornerback', x: 8, y: 51,
        coverageZone: { type: 'flat', rect: { x: 0, y: 42, width: 15, height: 10 } } },
      { id: 'RCB', label: 'CB', role: 'cornerback', x: 92, y: 51,
        coverageZone: { type: 'flat', rect: { x: 85, y: 42, width: 15, height: 10 } } },
    ],
    movementArrows: [
      { fromPlayerId: 'MLB', toX: 50, toY: 20, style: 'zone-drop' },
    ],
    annotations: [
      { x: 25, y: 26, text: 'Deep Half', style: 'zone-label' },
      { x: 75, y: 26, text: 'Deep Half', style: 'zone-label' },
      { x: 50, y: 28, text: 'MLB Seam Drop', style: 'zone-label' },
    ],
  },
  relatedCoverages: ['cover-2', 'cover-3', 'cover-4'],
  tags: ['zone', 'two-high', 'mlb-seam', 'cover-2-variant'],
  offensiveCounters: [
    {
      id: 't2-corner',
      name: 'Corner Route',
      description: 'The MLB plugs the seam, but that creates a gap on the boundary. WR1 runs vertical then breaks toward the corner of the end zone — the CB/safety gap is wide open.',
      routes: [
        { receiverKey: 'wr1', routeType: 'corner', isPrimary: true },
        { receiverKey: 'te', routeType: 'dig', isPrimary: false },
      ],
      requiredAssets: ['WR1 with a sharp break at the top of the route'],
      auditeTrigger: 'MLB dropping deep into the seam — attack the corner away from his drop.',
      difficulty: 'easy',
    },
    {
      id: 't2-dig',
      name: 'Dig Route (Intermediate Void)',
      description: 'Tampa 2 leaves a window at 10–15 yards in the intermediate zone — the MLB dropped too deep and the safeties are wide. A sharp dig route hits right in this void.',
      routes: [
        { receiverKey: 'wr1', routeType: 'dig', isPrimary: true },
        { receiverKey: 'slot', routeType: 'flat', isPrimary: false },
        { receiverKey: 'wr2', routeType: 'go', isPrimary: false },
      ],
      requiredAssets: ['WR1 with a crisp 15-yard dig break'],
      auditeTrigger: 'Two safeties split wide with MLB deep — the 12-yard dig sits in the open window.',
      difficulty: 'easy',
    },
    {
      id: 't2-mesh',
      name: 'Mesh / Rub Routes',
      description: 'With the MLB committed deep, short crossing traffic underneath goes uncontested. Slot and TE run mesh routes through the vacated middle zone.',
      routes: [
        { receiverKey: 'slot', routeType: 'mesh', isPrimary: true },
        { receiverKey: 'te', routeType: 'crossing', isPrimary: false },
        { receiverKey: 'wr1', routeType: 'corner', isPrimary: false },
      ],
      requiredAssets: ['Quick slot', 'TE with hands in the middle of the field'],
      auditeTrigger: 'MLB deep = no one defending short crossing traffic underneath.',
      difficulty: 'intermediate',
    },
  ],
};

export default tampa2;
