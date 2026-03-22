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
      { id: 'LE', label: 'DE', role: 'dline', x: 36, y: 52 },
      { id: 'DT1', label: 'DT', role: 'dline', x: 44, y: 52 },
      { id: 'DT2', label: 'DT', role: 'dline', x: 56, y: 52 },
      { id: 'RE', label: 'DE', role: 'dline', x: 64, y: 52 },
      // Linebackers
      { id: 'LOLB', label: 'LB', role: 'linebacker', x: 28, y: 46, manTarget: 'TE' },
      { id: 'MLB', label: 'LB', role: 'linebacker', x: 50, y: 46, manTarget: 'RB' },
      { id: 'ROLB', label: 'LB', role: 'linebacker', x: 72, y: 46, manTarget: 'slot' },
      // SS in the box (man on slot or TE)
      { id: 'SS', label: 'SS', role: 'safety', x: 30, y: 43, manTarget: 'slot' },
      // FS single high center
      { id: 'FS', label: 'FS', role: 'safety', x: 50, y: 18 },
      // Corners in press man
      { id: 'LCB', label: 'CB', role: 'cornerback', x: 8, y: 51, manTarget: 'WR' },
      { id: 'RCB', label: 'CB', role: 'cornerback', x: 92, y: 51, manTarget: 'WR' },
    ],
    annotations: [
      { x: 50, y: 11, text: 'Single High Safety', style: 'zone-label' },
      { x: 50, y: 6, text: 'All other defenders in man', style: 'zone-label' },
    ],
  },
  formation: 'standard',
  relatedCoverages: ['cover-0', 'cover-3', 'cover-1-blitz'],
  tags: ['man', 'single-high', 'one-safety-deep'],
  offensiveCounters: [
    {
      id: 'c1-four-verts',
      name: 'Four Verticals',
      description: 'One safety cannot cover four vertical routes. Run all four eligible receivers deep — the FS must choose one side, leaving the other side open.',
      formation: 'empty',
      routes: [
        { receiverKey: 'wr1', routeType: 'go', isPrimary: false },
        { receiverKey: 'wr2', routeType: 'go', isPrimary: false },
        { receiverKey: 'te', routeType: 'seam', isPrimary: true },
        { receiverKey: 'slot', routeType: 'seam', isPrimary: false },
      ],
      requiredAssets: ['Athletic TE to stress the seam', 'Fast WRs to stress the boundary'],
      auditeTrigger: 'Single safety deep center — run four verticals and read which side the safety leaves.',
      difficulty: 'easy',
    },
    {
      id: 'c1-boundary-corner',
      name: 'Boundary Corner Route',
      description: 'The lone free safety is centered. A corner route to the boundary forces the CB to defend 1-on-1 far from safety help. No one can rotate over in time.',
      formation: 'standard',
      routes: [
        { receiverKey: 'wr1', routeType: 'corner', isPrimary: true },
        { receiverKey: 'te', routeType: 'dig', isPrimary: false },
      ],
      requiredAssets: ['WR1 with good size or separation', 'TE as secondary dig read'],
      auditeTrigger: 'FS is centered — throw the corner route to the boundary away from him.',
      difficulty: 'intermediate',
    },
    {
      id: 'c1-mesh',
      name: 'Mesh Concept',
      description: 'Two receivers cross at different depths. Man defenders must navigate each other, creating a natural pick. One receiver always finds separation in the confusion.',
      formation: 'standard',
      routes: [
        { receiverKey: 'slot', routeType: 'mesh', isPrimary: true },
        { receiverKey: 'te', routeType: 'crossing', isPrimary: false },
        { receiverKey: 'wr1', routeType: 'go', isPrimary: false },
      ],
      requiredAssets: ['Quick slot receiver', 'TE with reliable hands'],
      auditeTrigger: 'Man coverage underneath with single high — mesh creates picks on the defenders.',
      difficulty: 'intermediate',
    },
  ],
};

export default cover1;
