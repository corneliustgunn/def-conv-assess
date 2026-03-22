import type { CoverageData } from '../types';

const cover0: CoverageData = {
  id: 'cover-0',
  name: 'Cover 0',
  shortName: 'C0',
  family: 'man',
  safetyDepth: 0,
  description:
    'Cover 0 is all-out man coverage with no deep safety help. Every defender is assigned a specific receiver, and the defense commits fully to pressure or tight man. It is the most aggressive coverage in football and leaves no room for error — if a receiver beats his man, it is a big gain.',
  strengths: [
    'Leaves maximum blockers free for the pass rush',
    'Receiver has no open space to run after catch — defender is always in his hip pocket',
    'Extremely effective against quick, short routes (flat, bubble, slant) when CBs press',
    'Disguises blitz pressure well — offense cannot tell how many are rushing',
  ],
  weaknesses: [
    'Any receiver who beats his man has a wide-open field — no safety net',
    'Vulnerable to deep routes: Go, Post, Corner, Fade',
    'Crossing routes can pick and rub off man defenders',
    'Tight ends and running backs in the flat can exploit if linebacker assignment is slow',
  ],
  indicators: [
    {
      category: 'pre-snap',
      title: 'Safety Alignment',
      tips: [
        'No safety is deep — both safeties are within 8 yards of the line of scrimmage',
        'Safeties may be aligned in the box or over a slot receiver, not centered deep',
        'The entire secondary is at roughly the same depth — no one is dropping to center field',
      ],
    },
    {
      category: 'pre-snap',
      title: 'Cornerback Alignment',
      tips: [
        'CBs are typically in press or tight coverage (within 1–2 yards of receiver)',
        'CBs are facing the receiver, not playing off coverage',
      ],
    },
    {
      category: 'post-snap',
      title: 'Post-Snap Keys',
      tips: [
        'All defenders turn and run with their assigned receivers',
        'No defender rotates to a deep zone — everyone is in trail man',
        'If there is a blitz, extra rushers will come from unexpected positions',
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
      // Linebackers (in man on TEs/RBs)
      { id: 'LOLB', label: 'LB', role: 'linebacker', x: 28, y: 48, manTarget: 'TE' },
      { id: 'MLB', label: 'LB', role: 'linebacker', x: 50, y: 48, manTarget: 'RB' },
      { id: 'ROLB', label: 'LB', role: 'linebacker', x: 72, y: 48, manTarget: 'slot' },
      // Safeties (in man on slot/TE, NOT deep)
      { id: 'SS', label: 'SS', role: 'safety', x: 22, y: 44, manTarget: 'TE' },
      { id: 'FS', label: 'FS', role: 'safety', x: 78, y: 44, manTarget: 'slot' },
      // Corners (press man on WRs)
      { id: 'LCB', label: 'CB', role: 'cornerback', x: 8, y: 51, manTarget: 'WR' },
      { id: 'RCB', label: 'CB', role: 'cornerback', x: 92, y: 51, manTarget: 'WR' },
    ],
    annotations: [
      { x: 50, y: 10, text: 'NO DEEP HELP', style: 'warning' },
      { x: 50, y: 5, text: 'All man — every defender has an assignment', style: 'zone-label' },
    ],
  },
  formation: 'empty',
  relatedCoverages: ['cover-1', 'cover-0-blitz', 'cover-2-man'],
  tags: ['man', 'no-safety', 'aggressive', 'press'],
  offensiveCounters: [
    {
      id: 'c0-verticals',
      name: 'Verticals',
      description: 'No safety help means every vertical route is 1-on-1 deep. Your fastest receiver wins a go route for a big play. The defender has no help over the top — throw it up.',
      formation: 'empty',
      routes: [
        { receiverKey: 'wr1', routeType: 'go', isPrimary: true },
        { receiverKey: 'wr2', routeType: 'go', isPrimary: false },
        { receiverKey: 'te', routeType: 'seam', isPrimary: false },
      ],
      requiredAssets: ['Fast WR1 with speed advantage over CB'],
      auditeTrigger: 'Both safeties are shallow or in the box — no one is deep. Go route is open.',
      difficulty: 'easy',
    },
    {
      id: 'c0-bubble',
      name: 'Bubble Screen',
      description: 'With everyone in tight press man, the bubble screen hits before anyone can react. The slot catches it lateral and turns upfield before the CB can disengage.',
      formation: 'standard',
      routes: [
        { receiverKey: 'slot', routeType: 'bubble', isPrimary: true },
        { receiverKey: 'wr1', routeType: 'go', isPrimary: false },
      ],
      requiredAssets: ['Shifty slot receiver', 'WR1 as vertical decoy'],
      auditeTrigger: 'Slot CB is pressed inside — the bubble to the slot has space outside.',
      difficulty: 'easy',
    },
    {
      id: 'c0-mesh',
      name: 'Mesh / Rub Routes',
      description: 'Crossing routes force man defenders to navigate traffic. The TE and slot cross at different depths, rubbing off their assigned defenders and creating separation.',
      formation: 'standard',
      routes: [
        { receiverKey: 'slot', routeType: 'mesh', isPrimary: true },
        { receiverKey: 'te', routeType: 'crossing', isPrimary: false },
      ],
      requiredAssets: ['Slot with quick feet', 'TE who can release off the line'],
      auditeTrigger: 'Man coverage all around — cross two receivers to create a natural pick.',
      difficulty: 'intermediate',
    },
  ],
};

export default cover0;
