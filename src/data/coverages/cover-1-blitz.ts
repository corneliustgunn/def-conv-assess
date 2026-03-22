import type { CoverageData } from '../types';

const cover1Blitz: CoverageData = {
  id: 'cover-1-blitz',
  name: 'Cover 1 Blitz',
  shortName: 'C1B',
  family: 'man',
  safetyDepth: 1,
  description:
    'Cover 1 Blitz keeps a single free safety deep as a safety net while sending extra rushers at the quarterback. Unlike Cover 0 Blitz, there is one deep defender to help on vertical routes — but all other defenders are in tight man. The blitzing players can come from anywhere: linebackers, the strong safety, or cornerbacks.',
  strengths: [
    'One safety provides a safety valve against the go route — less risky than Cover 0 Blitz',
    'Still generates serious pressure with 5–6 rushers',
    'The single high can disguise whether it is Cover 1 base or a blitz',
    'Very effective on third-and-long when the rush overwhelms the protection',
  ],
  weaknesses: [
    'One safety cannot cover both halves of the deep field — far side vertical is exposed',
    'Quick throws still beat it if the QB recognizes the blitz pre-snap',
    'Boundary corner routes (away from the single-high safety) are very vulnerable',
    'Slot receivers on crossing routes can find open space if the blitzing LB abandons his man',
  ],
  indicators: [
    {
      category: 'safety-alignment',
      title: 'Single High with Extra Box Defenders',
      tips: [
        'ONE safety is deep center — same single-high look as base Cover 1',
        'The second safety is shallow or in the box — he is blitzing or in man close to LOS',
        'More defenders than receivers near the LOS is the blitz indicator',
      ],
    },
    {
      category: 'pre-snap',
      title: 'Identifying the Extra Rusher',
      tips: [
        'Count defenders near the LOS — if there are more than 5 within 3–4 yards, expect a blitz',
        'Look for defenders shifting toward the line pre-snap (a "creep")',
        'A LB aligned directly behind a DT (stacked) is a classic Cover 1 Blitz tell',
      ],
    },
    {
      category: 'post-snap',
      title: 'The Safety Net',
      tips: [
        'After the snap, one safety drives deep to center field',
        'All other defenders man up — the blitzers attack the pocket',
        'Attack the side away from the single-high safety with a quick vertical',
      ],
    },
  ],
  diagram: {
    players: [
      // D-line
      { id: 'LE', label: 'DE', role: 'dline', x: 35, y: 53 },
      { id: 'DT1', label: 'DT', role: 'dline', x: 44, y: 53 },
      { id: 'DT2', label: 'DT', role: 'dline', x: 56, y: 53 },
      { id: 'RE', label: 'DE', role: 'dline', x: 65, y: 53 },
      // Blitzing LBs
      { id: 'LOLB', label: 'LB', role: 'blitzer', x: 29, y: 50, isBlitzing: true },
      { id: 'ROLB', label: 'LB', role: 'blitzer', x: 71, y: 50, isBlitzing: true },
      // MLB in man on RB
      { id: 'MLB', label: 'LB', role: 'linebacker', x: 50, y: 47, manTarget: 'RB' },
      // SS blitzing or in man (shallow)
      { id: 'SS', label: 'SS', role: 'blitzer', x: 38, y: 45, isBlitzing: true },
      // FS single high center
      { id: 'FS', label: 'FS', role: 'safety', x: 50, y: 17 },
      // Corners in press man
      { id: 'LCB', label: 'CB', role: 'cornerback', x: 8, y: 51, manTarget: 'WR' },
      { id: 'RCB', label: 'CB', role: 'cornerback', x: 92, y: 51, manTarget: 'WR' },
    ],
    annotations: [
      { x: 50, y: 11, text: 'Single High Safety', style: 'zone-label' },
      { x: 50, y: 5, text: '5+ rushers — limited deep help', style: 'zone-label' },
    ],
  },
  formation: 'trips-left',
  relatedCoverages: ['cover-1', 'cover-0-blitz', 'cover-0'],
  tags: ['man', 'blitz', 'single-high', 'pressure'],
  offensiveCounters: [
    {
      id: 'c1b-slant',
      formation: 'standard',
      name: 'Quick Slant',
      description: 'A slant route beats the blitz every time — it\'s out in 1 second, before pressure arrives. The defender is crashing the QB, not in position to cover the slant.',
      routes: [
        { receiverKey: 'wr1', routeType: 'slant', isPrimary: true },
        { receiverKey: 'rb', routeType: 'flat', isPrimary: false },
      ],
      requiredAssets: ['WR1 with quick release and sure hands'],
      auditeTrigger: 'Extra defenders near the LOS — slant beats the blitz every time.',
      difficulty: 'easy',
    },
    {
      id: 'c1b-boundary-corner',
      formation: 'trips-left',
      name: 'Boundary Corner Route',
      description: 'The single FS is centered. A corner route to the boundary WR exploits the gap far from safety help. With blitzers occupying blockers, the CB may be overmatched.',
      routes: [
        { receiverKey: 'wr1', routeType: 'corner', isPrimary: true },
        { receiverKey: 'te', routeType: 'dig', isPrimary: false },
      ],
      requiredAssets: ['WR1 with speed to beat the press CB on the vertical'],
      auditeTrigger: 'Single high FS — throw the corner route away from him if you can protect long enough.',
      difficulty: 'intermediate',
    },
    {
      id: 'c1b-mesh',
      formation: 'standard',
      name: 'Mesh Underneath',
      description: 'With blitzers flying upfield, short crossing routes are left unguarded underneath. Run mesh routes — defenders are rushing, not covering the crossing lanes.',
      routes: [
        { receiverKey: 'slot', routeType: 'mesh', isPrimary: true },
        { receiverKey: 'te', routeType: 'crossing', isPrimary: false },
        { receiverKey: 'wr2', routeType: 'go', isPrimary: false },
      ],
      requiredAssets: ['Slot and TE who run crisp short routes'],
      auditeTrigger: 'Man blitz — blitzers leave crossing lanes wide open.',
      difficulty: 'intermediate',
    },
  ],
};

export default cover1Blitz;
