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
      { id: 'LE', label: 'DE', role: 'dline', x: 36, y: 48 },
      { id: 'DT1', label: 'DT', role: 'dline', x: 44, y: 48 },
      { id: 'DT2', label: 'DT', role: 'dline', x: 56, y: 48 },
      { id: 'RE', label: 'DE', role: 'dline', x: 64, y: 48 },
      // Linebackers in man
      { id: 'LOLB', label: 'LB', role: 'linebacker', x: 28, y: 54, manTarget: 'TE' },
      { id: 'MLB', label: 'LB', role: 'linebacker', x: 50, y: 54, manTarget: 'RB' },
      { id: 'ROLB', label: 'LB', role: 'linebacker', x: 72, y: 54, manTarget: 'slot' },
      // Two safeties deep split wide
      { id: 'FS', label: 'FS', role: 'safety', x: 28, y: 80,
        coverageZone: { type: 'deep-half', rect: { x: 0, y: 60, width: 50, height: 35 } } },
      { id: 'SS', label: 'SS', role: 'safety', x: 72, y: 80,
        coverageZone: { type: 'deep-half', rect: { x: 50, y: 60, width: 50, height: 35 } } },
      // Corners in man (slightly off or press)
      { id: 'LCB', label: 'CB', role: 'cornerback', x: 8, y: 51, manTarget: 'WR' },
      { id: 'RCB', label: 'CB', role: 'cornerback', x: 92, y: 51, manTarget: 'WR' },
    ],
    annotations: [
      { x: 25, y: 74, text: 'Deep Half', style: 'zone-label' },
      { x: 75, y: 74, text: 'Deep Half', style: 'zone-label' },
      { x: 50, y: 58, text: '⚠ Seam vulnerable', style: 'warning' },
      { x: 50, y: 95, text: 'CBs follow receivers — NOT zone drops', style: 'zone-label' },
    ],
  },
  relatedCoverages: ['cover-2', 'cover-0', 'cover-1'],
  tags: ['man', 'two-high', 'disguise', 'seam-weakness'],
};

export default cover2Man;
