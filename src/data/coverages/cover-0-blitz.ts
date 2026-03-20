import type { CoverageData } from '../types';

const cover0Blitz: CoverageData = {
  id: 'cover-0-blitz',
  name: 'Cover 0 Blitz',
  shortName: 'C0B',
  family: 'man',
  safetyDepth: 0,
  description:
    'Cover 0 Blitz sends five or more pass rushers at the quarterback with zero deep safety help. Every eligible receiver is matched man-to-man with a defender, but with extra rushers, there may not be enough defenders to cover all receivers. The philosophy is to create pressure before the QB can find the open man.',
  strengths: [
    'Maximum pressure — 5, 6, or even 7 rushers can overwhelm any offensive line',
    'Forces the QB to get rid of the ball immediately or take a sack',
    'Very effective against slow-developing routes and teams that like to hold the ball',
    'Unexpected looks can cause protection breakdowns and misassignments',
  ],
  weaknesses: [
    'If the QB identifies the blitz pre-snap, a hot route can burn it immediately',
    'No deep safety help — any receiver who beats man coverage scores',
    'Crossing routes can rub off man defenders in the chaos of the blitz',
    'Protection schemes with a "max protect" can neutralize the extra rushers',
    'Bubble screens and quick outs can turn into touchdowns pre-snap if the CB is blitzing',
  ],
  indicators: [
    {
      category: 'pre-snap',
      title: 'Stacked Box and Extra Rushers',
      tips: [
        'More defenders near the LOS than the offense can block (6+ men near the box)',
        'Linebackers, safeties, or DBs are creeping toward the LOS pre-snap',
        'No safety depth — even the safeties appear to be in attack mode',
      ],
    },
    {
      category: 'safety-alignment',
      title: 'No Deep Safety',
      tips: [
        'Both safeties are shallow — aligned within 8 yards of the LOS',
        'One or both safeties may be directly in the box, disguising as a run blitz',
        'Zero depth in the secondary — this is the "all in" tell',
      ],
    },
    {
      category: 'post-snap',
      title: 'Post-Snap Chaos',
      tips: [
        'Multiple defenders rush immediately — the QB has 1-2 seconds maximum',
        'Remaining defenders lock up in tight man with no help over the top',
        'Quick throws to hot routes (slant, bubble, quick out) are the answer',
      ],
    },
  ],
  diagram: {
    players: [
      // D-line — base 4
      { id: 'LE', label: 'DE', role: 'dline', x: 34, y: 53 },
      { id: 'DT1', label: 'DT', role: 'dline', x: 43, y: 53 },
      { id: 'DT2', label: 'DT', role: 'dline', x: 57, y: 53 },
      { id: 'RE', label: 'DE', role: 'dline', x: 66, y: 53 },
      // Extra rushers (blitzing LBs)
      { id: 'LOLB', label: 'LB', role: 'blitzer', x: 28, y: 50, isBlitzing: true },
      { id: 'ROLB', label: 'LB', role: 'blitzer', x: 72, y: 50, isBlitzing: true },
      // MLB in man on RB
      { id: 'MLB', label: 'LB', role: 'linebacker', x: 50, y: 47, manTarget: 'RB' },
      // Safeties shallow in man (NOT deep)
      { id: 'SS', label: 'SS', role: 'safety', x: 35, y: 45, manTarget: 'slot' },
      { id: 'FS', label: 'FS', role: 'safety', x: 65, y: 45, manTarget: 'slot' },
      // Corners in press man
      { id: 'LCB', label: 'CB', role: 'cornerback', x: 8, y: 51, manTarget: 'WR' },
      { id: 'RCB', label: 'CB', role: 'cornerback', x: 92, y: 51, manTarget: 'WR' },
    ],
    annotations: [
      { x: 50, y: 10, text: '⚠ NO DEEP HELP — BLITZ ALL OUT', style: 'warning' },
      { x: 50, y: 4, text: '6+ rushers — QB has < 2 seconds', style: 'zone-label' },
    ],
  },
  relatedCoverages: ['cover-0', 'cover-1-blitz'],
  tags: ['man', 'blitz', 'no-safety', 'aggressive', 'pressure'],
  offensiveCounters: [
    {
      id: 'c0b-bubble',
      name: 'Bubble Screen',
      description: 'Against a blitz, the fastest answer is the pre-snap bubble. Throw it immediately to the slot — the ball is out before the pressure arrives and your receiver has space to work.',
      routes: [
        { receiverKey: 'slot', routeType: 'bubble', isPrimary: true },
        { receiverKey: 'wr1', routeType: 'go', isPrimary: false },
      ],
      requiredAssets: ['Shifty slot receiver', 'WR1 as vertical decoy to clear space'],
      auditeTrigger: '6+ defenders near the LOS — throw the bubble immediately at the snap.',
      difficulty: 'easy',
    },
    {
      id: 'c0b-rb-flat',
      name: 'RB Flare / Checkdown',
      description: 'The RB releases into the flat as the first read. With all rushers attacking, the RB will be open in space before the blitz reaches the QB.',
      routes: [
        { receiverKey: 'rb', routeType: 'flat', isPrimary: true },
        { receiverKey: 'wr1', routeType: 'go', isPrimary: false },
      ],
      requiredAssets: ['Pass-catching RB', 'Quick release from the QB'],
      auditeTrigger: 'Blitz alignment — identify the RB as your hot route before the snap.',
      difficulty: 'easy',
    },
    {
      id: 'c0b-hot-slant',
      name: 'Hot Route Slant',
      description: 'Change WR1 to a slant pre-snap. The slant hits at 3–4 yards in 1 second — faster than any blitzer can reach the QB. High percentage gain every time.',
      routes: [
        { receiverKey: 'wr1', routeType: 'slant', isPrimary: true },
        { receiverKey: 'rb', routeType: 'flat', isPrimary: false },
      ],
      requiredAssets: ['WR1 with good hands on the slant'],
      auditeTrigger: 'Blitz on WR1\'s side — slant to him immediately on the snap.',
      difficulty: 'intermediate',
    },
  ],
};

export default cover0Blitz;
