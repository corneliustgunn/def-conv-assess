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
      { id: 'LE', label: 'DE', role: 'dline', x: 36, y: 48 },
      { id: 'DT1', label: 'DT', role: 'dline', x: 44, y: 48 },
      { id: 'DT2', label: 'DT', role: 'dline', x: 56, y: 48 },
      { id: 'RE', label: 'DE', role: 'dline', x: 64, y: 48 },
      // Linebackers
      { id: 'LOLB', label: 'LB', role: 'linebacker', x: 25, y: 57,
        coverageZone: { type: 'hook', rect: { x: 10, y: 50, width: 25, height: 16 } } },
      { id: 'MLB', label: 'LB', role: 'linebacker', x: 50, y: 57,
        coverageZone: { type: 'hook', rect: { x: 35, y: 50, width: 30, height: 16 } } },
      { id: 'ROLB', label: 'LB', role: 'linebacker', x: 75, y: 57,
        coverageZone: { type: 'flat', rect: { x: 65, y: 50, width: 20, height: 16 } } },
      // LEFT SIDE: Cover 4 (Quarters) — CB and FS each take a quarter
      { id: 'LCB', label: 'CB', role: 'cornerback', x: 7, y: 53,
        coverageZone: { type: 'deep-quarter', rect: { x: 0, y: 62, width: 25, height: 33 } } },
      { id: 'FS', label: 'FS', role: 'safety', x: 27, y: 73,
        coverageZone: { type: 'deep-quarter', rect: { x: 25, y: 62, width: 25, height: 33 } } },
      // RIGHT SIDE: Cover 2 (Half) — SS takes deep half
      { id: 'SS', label: 'SS', role: 'safety', x: 73, y: 78,
        coverageZone: { type: 'deep-half', rect: { x: 50, y: 62, width: 50, height: 33 } } },
      { id: 'RCB', label: 'CB', role: 'cornerback', x: 92, y: 49,
        coverageZone: { type: 'flat', rect: { x: 82, y: 48, width: 18, height: 14 } } },
    ],
    annotations: [
      { x: 18, y: 72, text: 'QUARTERS (C4)', style: 'zone-label' },
      { x: 75, y: 72, text: 'HALF (C2)', style: 'zone-label' },
      { x: 50, y: 96, text: 'Asymmetric: Cover 4 left + Cover 2 right', style: 'zone-label' },
    ],
  },
  relatedCoverages: ['cover-4', 'cover-2', 'pattern-match'],
  tags: ['zone', 'hybrid', 'asymmetric', 'advanced', 'quarters'],
};

export default cover6;
