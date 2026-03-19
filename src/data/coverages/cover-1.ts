import type { CoverageData } from '../types';

const cover1: CoverageData = {
  id: 'cover-1',
  name: 'Cover 1',
  shortName: 'C1',
  family: 'man',
  safetyDepth: 1,
  description:
    'Cover 1 is man coverage with a single free safety playing deep in the center of the field. Every other defender has a specific man assignment, but the FS acts as a "centerfielder" with no individual assignment — he reads the quarterback and reacts to the deepest threat. This gives man coverage a safety valve over the top.',
  strengths: [
    'Combines aggressive man coverage with a deep center-field safety',
    'FS can help on post routes, deep crosses, and double moves',
    'Very effective against vertical routes up the seam when FS reads correctly',
    'Forces the QB to be accurate — every short route has a defender in-phase',
  ],
  weaknesses: [
    'Corner routes and back-shoulder fades can beat CBs to the boundary without FS help',
    'Deep crosses and dig routes can pull the FS away from center field',
    'Rub/pick routes stress man assignments at the line',
    'Only one safety help — two verticals to the same side can overwhelm',
  ],
  indicators: [
    {
      category: 'safety-alignment',
      title: 'The Single High Key',
      tips: [
        'ONE safety is aligned deep in the center of the field, typically 12–15 yards off the LOS',
        'The other safety (SS) is down near the box, often over a slot or TE',
        'This is the most important pre-snap tell: single high = Cover 1 or Cover 3',
      ],
    },
    {
      category: 'pre-snap',
      title: 'Underneath Coverage',
      tips: [
        'CBs are in press or tight off-man on outside receivers',
        'The second safety (SS) and linebackers all have man assignments',
        'No one is dropping to a zone — everyone except the free safety has a man',
      ],
    },
    {
      category: 'post-snap',
      title: 'Distinguishing Cover 1 from Cover 3',
      tips: [
        'Post-snap: CBs stay with receivers man-to-man (Cover 3 CBs sink into deep zones)',
        'The FS stays centered — in Cover 3 he also stays centered, so watch the CBs',
        'If CBs do NOT rotate to deep zones post-snap, it is Cover 1',
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
      { id: 'LOLB', label: 'LB', role: 'linebacker', x: 28, y: 54, manTarget: 'TE' },
      { id: 'MLB', label: 'LB', role: 'linebacker', x: 50, y: 54, manTarget: 'RB' },
      { id: 'ROLB', label: 'LB', role: 'linebacker', x: 72, y: 54, manTarget: 'slot' },
      // SS in the box (man on slot or TE)
      { id: 'SS', label: 'SS', role: 'safety', x: 30, y: 57, manTarget: 'slot' },
      // FS single high center
      { id: 'FS', label: 'FS', role: 'safety', x: 50, y: 82 },
      // Corners in press man
      { id: 'LCB', label: 'CB', role: 'cornerback', x: 8, y: 49, manTarget: 'WR' },
      { id: 'RCB', label: 'CB', role: 'cornerback', x: 92, y: 49, manTarget: 'WR' },
    ],
    annotations: [
      { x: 50, y: 89, text: 'Single High Safety', style: 'zone-label' },
      { x: 50, y: 94, text: 'All other defenders in man', style: 'zone-label' },
    ],
  },
  relatedCoverages: ['cover-0', 'cover-3', 'cover-1-blitz'],
  tags: ['man', 'single-high', 'one-safety-deep'],
};

export default cover1;
