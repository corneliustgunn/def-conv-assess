import type { CoverageData } from '../types';

const cover2: CoverageData = {
  id: 'cover-2',
  name: 'Cover 2',
  shortName: 'C2',
  family: 'zone',
  safetyDepth: 2,
  description:
    'Cover 2 is a zone coverage with two safeties splitting the deep half of the field. Each safety covers one deep half while four or five underneath defenders cover short zones. Cornerbacks play at the line of scrimmage to jam receivers and funnel them inside toward the safeties.',
  strengths: [
    'Excellent against short and intermediate routes — lots of defenders underneath',
    'Two deep safeties make it difficult to hit deep routes on the outside',
    'CBs at the LOS can disrupt timing by jamming receivers',
    'Very effective against run — safeties can read and trigger quickly',
  ],
  weaknesses: [
    'The seam and middle of the field is vulnerable — the gap between safeties',
    'Corner routes (out-and-up) can beat the CB before the safety rotates over',
    'Curl/flat combinations stress the CB: who covers the curl? Who covers the flat?',
    'Receivers who release outside and vertical can find the corner of the end zone',
  ],
  indicators: [
    {
      category: 'safety-alignment',
      title: 'Two Deep Safeties',
      tips: [
        'TWO safeties are aligned wide apart, each responsible for one deep half',
        'Safeties are roughly 12–15 yards off the LOS, split near the hash marks',
        'This "two-high" shell is the most important pre-snap tell for Cover 2',
      ],
    },
    {
      category: 'cornerback-alignment',
      title: 'Cornerback Press',
      tips: [
        'CBs are pressed tight to receivers — within 1–3 yards at the LOS',
        'CBs are NOT playing off or giving a cushion — they are at the line to jam',
        'After jamming, CBs typically drop to the flat zone on their side',
      ],
    },
    {
      category: 'post-snap',
      title: 'Post-Snap Coverage',
      tips: [
        'CBs jam and drop to their flat zones — they do NOT follow receivers vertically',
        'Safeties rotate inward toward the deep halves, tracking deep routes',
        'Linebackers drop into hook-curl zones over the middle',
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
      // Linebackers in underneath zones
      { id: 'LOLB', label: 'LB', role: 'linebacker', x: 22, y: 42,
        coverageZone: { type: 'curl-flat', rect: { x: 5, y: 30, width: 25, height: 18 } } },
      { id: 'MLB', label: 'LB', role: 'linebacker', x: 50, y: 43,
        coverageZone: { type: 'hook', rect: { x: 30, y: 33, width: 40, height: 15 } } },
      { id: 'ROLB', label: 'LB', role: 'linebacker', x: 78, y: 42,
        coverageZone: { type: 'curl-flat', rect: { x: 70, y: 30, width: 25, height: 18 } } },
      // Two safeties deep — split wide
      { id: 'FS', label: 'FS', role: 'safety', x: 28, y: 20,
        coverageZone: { type: 'deep-half', rect: { x: 0, y: 5, width: 50, height: 35 } } },
      { id: 'SS', label: 'SS', role: 'safety', x: 72, y: 20,
        coverageZone: { type: 'deep-half', rect: { x: 50, y: 5, width: 50, height: 35 } } },
      // Corners press at LOS
      { id: 'LCB', label: 'CB', role: 'cornerback', x: 8, y: 51,
        coverageZone: { type: 'flat', rect: { x: 0, y: 42, width: 15, height: 10 } } },
      { id: 'RCB', label: 'CB', role: 'cornerback', x: 92, y: 51,
        coverageZone: { type: 'flat', rect: { x: 85, y: 42, width: 15, height: 10 } } },
    ],
    annotations: [
      { x: 25, y: 26, text: 'Deep Half', style: 'zone-label' },
      { x: 75, y: 26, text: 'Deep Half', style: 'zone-label' },
      { x: 50, y: 43, text: '⚠ Seam Gap', style: 'warning' },
    ],
  },
  formation: 'standard',
  relatedCoverages: ['cover-2-man', 'tampa-2', 'cover-4'],
  tags: ['zone', 'two-high', 'press-corners', 'seam-weakness'],
  offensiveCounters: [
    {
      id: 'c2-seam',
      formation: 'tight',
      name: 'Seam Attack',
      description: 'The gap between the two safeties is the Cover 2 kill shot. Run the TE or slot straight up the seam — neither safety can cover it without giving up their half.',
      routes: [
        { receiverKey: 'te', routeType: 'seam', isPrimary: true },
        { receiverKey: 'slot', routeType: 'seam', isPrimary: false },
        { receiverKey: 'wr1', routeType: 'go', isPrimary: false },
      ],
      requiredAssets: ['Athletic TE or fast slot receiver'],
      auditeTrigger: 'Two safeties split wide — the seam straight up the middle is undefended.',
      difficulty: 'easy',
    },
    {
      id: 'c2-corner',
      formation: 'trips-left',
      name: 'Corner Route',
      description: 'Run WR1 vertical then break toward the corner of the end zone. The CB pressed and dropped to the flat — he cannot recover. The safety is too far inside.',
      routes: [
        { receiverKey: 'wr1', routeType: 'corner', isPrimary: true },
        { receiverKey: 'te', routeType: 'curl', isPrimary: false },
      ],
      requiredAssets: ['WR1 with size or burst at the break'],
      auditeTrigger: 'CB pressed and sitting in flat zone — the corner route attacks behind him.',
      difficulty: 'intermediate',
    },
    {
      id: 'c2-flood',
      formation: 'standard',
      name: 'Curl-Flat Combo',
      description: 'Put WR1 on a curl and the slot on a flat route on the same side. The CB must choose: cover the flat or the curl. One is always open.',
      routes: [
        { receiverKey: 'wr1', routeType: 'curl', isPrimary: true },
        { receiverKey: 'slot', routeType: 'flat', isPrimary: false },
        { receiverKey: 'wr2', routeType: 'go', isPrimary: false },
      ],
      requiredAssets: ['Reliable WR1 on curl', 'Slot or RB in the flat'],
      auditeTrigger: 'CB in the flat zone — force a two-on-one with curl + flat on the same side.',
      difficulty: 'intermediate',
    },
  ],
};

export default cover2;
