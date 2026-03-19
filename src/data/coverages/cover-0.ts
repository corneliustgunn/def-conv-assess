import type { CoverageData } from '../types';

const cover0: CoverageData = {
  id: 'cover-0',
  name: 'Cover 0',
  shortName: 'C0',
  family: 'man',
  safetyDepth: 0,
  description:
    'Cover 0 is all-out man coverage with no deep safety help. Every defender is assigned a specific receiver, and the defense commits fully to pressure or tight man. It is the most aggressive coverage in football and leaves no room for error — if a receiver beats his man, it is a big gain.',
  strengths: [
    'Leaves maximum blockers free for the pass rush',
    'Receiver has no open space to run after catch — defender is always in his hip pocket',
    'Extremely effective against quick, short routes (flat, bubble, slant) when CBs press',
    'Disguises blitz pressure well — offense cannot tell how many are rushing',
  ],
  weaknesses: [
    'Any receiver who beats his man has a wide-open field — no safety net',
    'Vulnerable to deep routes: Go, Post, Corner, Fade',
    'Crossing routes can pick and rub off man defenders',
    'Tight ends and running backs in the flat can exploit if linebacker assignment is slow',
  ],
  indicators: [
    {
      category: 'pre-snap',
      title: 'Safety Alignment',
      tips: [
        'No safety is deep — both safeties are within 8 yards of the line of scrimmage',
        'Safeties may be aligned in the box or over a slot receiver, not centered deep',
        'The entire secondary is at roughly the same depth — no one is dropping to center field',
      ],
    },
    {
      category: 'pre-snap',
      title: 'Cornerback Alignment',
      tips: [
        'CBs are typically in press or tight coverage (within 1–2 yards of receiver)',
        'CBs are facing the receiver, not playing off coverage',
      ],
    },
    {
      category: 'post-snap',
      title: 'Post-Snap Keys',
      tips: [
        'All defenders turn and run with their assigned receivers',
        'No defender rotates to a deep zone — everyone is in trail man',
        'If there is a blitz, extra rushers will come from unexpected positions',
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
      // Linebackers (in man on TEs/RBs)
      { id: 'LOLB', label: 'LB', role: 'linebacker', x: 28, y: 52, manTarget: 'TE' },
      { id: 'MLB', label: 'LB', role: 'linebacker', x: 50, y: 52, manTarget: 'RB' },
      { id: 'ROLB', label: 'LB', role: 'linebacker', x: 72, y: 52, manTarget: 'slot' },
      // Safeties (in man on slot/TE, NOT deep)
      { id: 'SS', label: 'SS', role: 'safety', x: 22, y: 56, manTarget: 'TE' },
      { id: 'FS', label: 'FS', role: 'safety', x: 78, y: 56, manTarget: 'slot' },
      // Corners (press man on WRs)
      { id: 'LCB', label: 'CB', role: 'cornerback', x: 8, y: 49, manTarget: 'WR' },
      { id: 'RCB', label: 'CB', role: 'cornerback', x: 92, y: 49, manTarget: 'WR' },
    ],
    annotations: [
      { x: 50, y: 90, text: 'NO DEEP HELP', style: 'warning' },
      { x: 50, y: 95, text: 'All man — every defender has an assignment', style: 'zone-label' },
    ],
  },
  relatedCoverages: ['cover-1', 'cover-0-blitz', 'cover-2-man'],
  tags: ['man', 'no-safety', 'aggressive', 'press'],
};

export default cover0;
