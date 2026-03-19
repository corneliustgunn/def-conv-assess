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
      { id: 'LE', label: 'DE', role: 'dline', x: 36, y: 48 },
      { id: 'DT1', label: 'DT', role: 'dline', x: 44, y: 48 },
      { id: 'DT2', label: 'DT', role: 'dline', x: 56, y: 48 },
      { id: 'RE', label: 'DE', role: 'dline', x: 64, y: 48 },
      // Linebackers in underneath zones
      { id: 'LOLB', label: 'LB', role: 'linebacker', x: 22, y: 58,
        coverageZone: { type: 'curl-flat', rect: { x: 5, y: 52, width: 25, height: 18 } } },
      { id: 'LILB', label: 'LB', role: 'linebacker', x: 40, y: 57,
        coverageZone: { type: 'hook', rect: { x: 30, y: 52, width: 20, height: 15 } } },
      { id: 'RILB', label: 'LB', role: 'linebacker', x: 60, y: 57,
        coverageZone: { type: 'hook', rect: { x: 50, y: 52, width: 20, height: 15 } } },
      { id: 'ROLB', label: 'LB', role: 'linebacker', x: 78, y: 58,
        coverageZone: { type: 'curl-flat', rect: { x: 70, y: 52, width: 25, height: 18 } } },
      // Two safeties deep — split wide
      { id: 'FS', label: 'FS', role: 'safety', x: 28, y: 80,
        coverageZone: { type: 'deep-half', rect: { x: 0, y: 60, width: 50, height: 35 } } },
      { id: 'SS', label: 'SS', role: 'safety', x: 72, y: 80,
        coverageZone: { type: 'deep-half', rect: { x: 50, y: 60, width: 50, height: 35 } } },
      // Corners press at LOS
      { id: 'LCB', label: 'CB', role: 'cornerback', x: 8, y: 49,
        coverageZone: { type: 'flat', rect: { x: 0, y: 48, width: 15, height: 10 } } },
      { id: 'RCB', label: 'CB', role: 'cornerback', x: 92, y: 49,
        coverageZone: { type: 'flat', rect: { x: 85, y: 48, width: 15, height: 10 } } },
    ],
    annotations: [
      { x: 25, y: 74, text: 'Deep Half', style: 'zone-label' },
      { x: 75, y: 74, text: 'Deep Half', style: 'zone-label' },
      { x: 50, y: 57, text: '⚠ Seam Gap', style: 'warning' },
    ],
  },
  relatedCoverages: ['cover-2-man', 'tampa-2', 'cover-4'],
  tags: ['zone', 'two-high', 'press-corners', 'seam-weakness'],
};

export default cover2;
