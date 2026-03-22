import type { CoverageData } from '../types';

const cover2Man: CoverageData = {
  id: 'cover-2-man',
  name: 'Cover 2 Man',
  shortName: 'C2M',
  family: 'man',
  safetyDepth: 2,
  description:
    'Cover 2 Man combines the two-high safety shell of Cover 2 with man coverage underneath. Two safeties each guard one deep half of the field, while cornerbacks and linebackers play man coverage underneath. Unlike zone Cover 2, CBs follow their receivers vertically rather than dropping to zones.',
  strengths: [
    'Two-high shell disguises man coverage — looks like zone pre-snap',
    'Man coverage underneath eliminates open zones in the short/intermediate game',
    'Deep half coverage handles outside verticals and back-shoulder throws',
    'Very difficult to pick up in pre-snap reads',
  ],
  weaknesses: [
    'The deep middle seam is unguarded — safeties are split wide',
    'Post and dig routes attacking the middle between the safeties can be wide open',
    'Rub routes and crossing patterns can pick off man defenders',
    'Running backs and TEs releasing into the seam stress linebacker assignments',
  ],
  indicators: [
    {
      category: 'safety-alignment',
      title: 'Two Deep Safeties (Same Look as Zone Cover 2)',
      tips: [
        'TWO safeties split wide, 12–15 yards deep — identical pre-snap look to zone Cover 2',
        'This is intentional: Cover 2 Man disguises as zone',
        'You cannot tell Cover 2 from Cover 2 Man pre-snap by safeties alone',
      ],
    },
    {
      category: 'cornerback-alignment',
      title: 'CB Press vs. Off Coverage',
      tips: [
        'CBs may press OR play off — this is the harder tell vs. zone Cover 2',
        'In zone Cover 2, CBs are almost always pressing to jam before dropping to flat',
        'In Cover 2 Man, CBs may be slightly off but will follow receivers vertically',
      ],
    },
    {
      category: 'post-snap',
      title: 'The Man Coverage Tell',
      tips: [
        'POST-SNAP: CBs follow their receiver wherever they go — they do NOT drop to flats',
        'In zone Cover 2, CBs stop and settle into the flat zone; Cover 2 Man CBs run with WRs',
        'This is the clearest in-game tell: watch what CBs do after the snap',
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
      // Linebackers in man
      { id: 'LOLB', label: 'LB', role: 'linebacker', x: 28, y: 46, manTarget: 'TE' },
      { id: 'MLB', label: 'LB', role: 'linebacker', x: 50, y: 46, manTarget: 'RB' },
      { id: 'ROLB', label: 'LB', role: 'linebacker', x: 72, y: 46, manTarget: 'slot' },
      // Two safeties deep split wide
      { id: 'FS', label: 'FS', role: 'safety', x: 28, y: 20,
        coverageZone: { type: 'deep-half', rect: { x: 0, y: 5, width: 50, height: 35 } } },
      { id: 'SS', label: 'SS', role: 'safety', x: 72, y: 20,
        coverageZone: { type: 'deep-half', rect: { x: 50, y: 5, width: 50, height: 35 } } },
      // Corners in man (slightly off or press)
      { id: 'LCB', label: 'CB', role: 'cornerback', x: 8, y: 49, manTarget: 'WR' },
      { id: 'RCB', label: 'CB', role: 'cornerback', x: 92, y: 49, manTarget: 'WR' },
    ],
    annotations: [
      { x: 25, y: 26, text: 'Deep Half', style: 'zone-label' },
      { x: 75, y: 26, text: 'Deep Half', style: 'zone-label' },
      { x: 50, y: 42, text: '⚠ Seam vulnerable', style: 'warning' },
      { x: 50, y: 5, text: 'CBs follow receivers — NOT zone drops', style: 'zone-label' },
    ],
  },
  formation: 'trips-right',
  relatedCoverages: ['cover-2', 'cover-0', 'cover-1'],
  tags: ['man', 'two-high', 'disguise', 'seam-weakness'],
  offensiveCounters: [
    {
      id: 'c2m-crossing',
      formation: 'standard',
      name: 'Crossing Mesh',
      description: 'Man CBs must follow receivers wherever they go. Cross two receivers in front of each other — the defenders collide or have to navigate around each other, breaking coverage.',
      routes: [
        { receiverKey: 'slot', routeType: 'mesh', isPrimary: true },
        { receiverKey: 'te', routeType: 'crossing', isPrimary: false },
        { receiverKey: 'wr1', routeType: 'go', isPrimary: false },
      ],
      requiredAssets: ['Quick slot', 'TE with short-area quickness'],
      auditeTrigger: 'Two safeties deep but CBs are in man — cross receivers to create picks.',
      difficulty: 'intermediate',
    },
    {
      id: 'c2m-seam',
      formation: 'tight',
      name: 'Seam Route',
      description: 'Even with man coverage underneath, the deep middle between the two safeties is unguarded. The TE on a seam route has a clear lane if he wins the release.',
      routes: [
        { receiverKey: 'te', routeType: 'seam', isPrimary: true },
        { receiverKey: 'wr2', routeType: 'go', isPrimary: false },
      ],
      requiredAssets: ['Athletic TE who can win a release vs. a linebacker'],
      auditeTrigger: 'Two safeties split wide — even in man, the seam between them is open.',
      difficulty: 'easy',
    },
    {
      id: 'c2m-hilo',
      formation: 'standard',
      name: 'Hi-Lo (Shallow Cross + Post)',
      description: 'WR1 runs a deep post while the slot runs a shallow crossing route. The post pulls safety attention deep while the shallow cross sits in the vacated middle zone.',
      routes: [
        { receiverKey: 'wr1', routeType: 'post', isPrimary: false },
        { receiverKey: 'slot', routeType: 'crossing', isPrimary: true },
      ],
      requiredAssets: ['WR1 who can sell the deep route', 'Quick slot receiver'],
      auditeTrigger: 'Man coverage with safeties split — hi-lo stresses the middle.',
      difficulty: 'intermediate',
    },
  ],
};

export default cover2Man;
