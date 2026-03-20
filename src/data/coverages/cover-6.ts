import type { CoverageData } from '../types';

const cover6: CoverageData = {
  id: 'cover-6',
  name: 'Cover 6',
  shortName: 'C6',
  family: 'hybrid',
  safetyDepth: 2,
  description:
    'Cover 6 is a hybrid coverage that combines Cover 4 (quarters) on one side with Cover 2 (half) on the other side. This asymmetrical look allows the defense to adjust to the offensive formation — typically playing quarters to the strong or trips side while playing a half to the weak side. The result is four deep defenders on a modified split.',
  strengths: [
    'Versatile — can adjust to offensive formations and alignments',
    'Quarters side provides excellent pattern-match coverage against trips or bunch sets',
    'Can roll to one side to counter the offense\'s strength',
    'Difficult to exploit because the coverage structure is asymmetrical',
  ],
  weaknesses: [
    'Complex — requires disciplined communication and alignment',
    'The two-deep half side can be vulnerable to the same weaknesses as Cover 2',
    'If the offense identifies the Cover 6 split, they can attack the known structure',
    'Crossing routes can stress the transition between the two coverage styles',
  ],
  indicators: [
    {
      category: 'safety-alignment',
      title: 'Asymmetric Safety Alignment',
      tips: [
        'Safeties are NOT evenly split — one is wider, one is shaded inside',
        'The FS may align over a tackle (quarters alignment) on one side',
        'The SS aligns deeper toward the middle for the half-field side',
        'This uneven safety look is the key pre-snap tell for Cover 6',
      ],
    },
    {
      category: 'cornerback-alignment',
      title: 'Different CB Depths',
      tips: [
        'The CB on the quarters side may be shallower (more press-like for quarters)',
        'The CB on the half side may be playing off at 5–7 yards',
        'Look for mismatched CB alignments — one pressed, one off',
      ],
    },
    {
      category: 'post-snap',
      title: 'Asymmetric Zone Structure',
      tips: [
        'One side rotates to quarters coverage — CB + safety each cover a quarter',
        'Other side plays a deep half — one safety, CB in flat',
        'Watch which side has more deep defenders and which has more underneath',
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
      { id: 'LOLB', label: 'LB', role: 'linebacker', x: 25, y: 43,
        coverageZone: { type: 'hook', rect: { x: 10, y: 34, width: 25, height: 16 } } },
      { id: 'MLB', label: 'LB', role: 'linebacker', x: 50, y: 43,
        coverageZone: { type: 'hook', rect: { x: 35, y: 34, width: 30, height: 16 } } },
      { id: 'ROLB', label: 'LB', role: 'linebacker', x: 75, y: 43,
        coverageZone: { type: 'flat', rect: { x: 65, y: 34, width: 20, height: 16 } } },
      // LEFT SIDE: Cover 4 (Quarters) — CB and FS each take a quarter
      { id: 'LCB', label: 'CB', role: 'cornerback', x: 7, y: 47,
        coverageZone: { type: 'deep-quarter', rect: { x: 0, y: 5, width: 25, height: 33 } } },
      { id: 'FS', label: 'FS', role: 'safety', x: 27, y: 27,
        coverageZone: { type: 'deep-quarter', rect: { x: 25, y: 5, width: 25, height: 33 } } },
      // RIGHT SIDE: Cover 2 (Half) — SS takes deep half
      { id: 'SS', label: 'SS', role: 'safety', x: 73, y: 22,
        coverageZone: { type: 'deep-half', rect: { x: 50, y: 5, width: 50, height: 33 } } },
      { id: 'RCB', label: 'CB', role: 'cornerback', x: 92, y: 51,
        coverageZone: { type: 'flat', rect: { x: 82, y: 38, width: 18, height: 14 } } },
    ],
    annotations: [
      { x: 18, y: 28, text: 'QUARTERS (C4)', style: 'zone-label' },
      { x: 75, y: 28, text: 'HALF (C2)', style: 'zone-label' },
      { x: 50, y: 4, text: 'Asymmetric: Cover 4 left + Cover 2 right', style: 'zone-label' },
    ],
  },
  relatedCoverages: ['cover-4', 'cover-2', 'pattern-match'],
  tags: ['zone', 'hybrid', 'asymmetric', 'advanced', 'quarters'],
  offensiveCounters: [
    {
      id: 'c6-seam-c2side',
      name: 'Seam — Attack the Cover 2 Half',
      description: 'Cover 6 is asymmetric: one side plays Cover 2, the other Cover 4. The Cover 2 half has a seam gap between the two deep defenders. Send the TE up the seam on that side.',
      routes: [
        { receiverKey: 'te', routeType: 'seam', isPrimary: true },
        { receiverKey: 'wr1', routeType: 'corner', isPrimary: false },
      ],
      requiredAssets: ['Athletic TE to exploit the split safety coverage'],
      auditeTrigger: 'Identify which side is running Cover 2 (one safety deep) — seam that side.',
      difficulty: 'intermediate',
    },
    {
      id: 'c6-crossing-c4side',
      name: 'Crossing Route — Attack the Cover 4 Side',
      description: 'The Cover 4 side has only a linebacker underneath. A crossing route from the slot finds easy grass between the deep quarters and the soft LB zone.',
      routes: [
        { receiverKey: 'slot', routeType: 'crossing', isPrimary: true },
        { receiverKey: 'te', routeType: 'dig', isPrimary: false },
        { receiverKey: 'wr2', routeType: 'go', isPrimary: false },
      ],
      requiredAssets: ['Slot receiver who can run after the catch'],
      auditeTrigger: 'Cover 4 side (two defenders deep) — crosser into the soft LB zone.',
      difficulty: 'intermediate',
    },
    {
      id: 'c6-post-wheel',
      name: 'Post-Wheel Combo',
      description: 'WR1 runs a post on the Cover 2 side while the RB wheels to the flat on the Cover 4 side. Forces a split defensive decision — one is always open.',
      routes: [
        { receiverKey: 'wr1', routeType: 'post', isPrimary: false },
        { receiverKey: 'rb', routeType: 'wheel', isPrimary: true },
        { receiverKey: 'wr2', routeType: 'go', isPrimary: false },
      ],
      requiredAssets: ['WR1 for the post', 'RB with wheel route quickness'],
      auditeTrigger: 'Cover 6 split is clear — attack both sides simultaneously.',
      difficulty: 'intermediate',
    },
  ],
};

export default cover6;
