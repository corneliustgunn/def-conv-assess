import type { CoverageData } from '../types';

const cover4: CoverageData = {
  id: 'cover-4',
  name: 'Cover 4 (Quarters)',
  shortName: 'C4',
  family: 'zone',
  safetyDepth: 4,
  description:
    'Cover 4, also called Quarters coverage, splits the deep field into four equal quarters — each covered by a cornerback or safety. With four defenders deep, it is the most conservative deep coverage in football. All four defensive backs play deep, leaving linebackers to handle the underneath game.',
  strengths: [
    'Virtually eliminates the deep passing game — four deep defenders',
    'Excellent against vertical concepts (four verticals) and deep crossing routes',
    'Safeties can read the QB and break on routes within their quarter',
    'Very effective in prevent situations or protecting a lead late in games',
  ],
  weaknesses: [
    'Short and intermediate routes are wide open — only linebackers underneath',
    'Run defense suffers — all four DBs are deep and slow to trigger on the run',
    'Crossing routes and drags exploit the large underneath windows',
    'A quick screen or bubble pass can gain significant yards against this coverage',
  ],
  indicators: [
    {
      category: 'safety-alignment',
      title: 'Four Deep Defenders',
      tips: [
        'BOTH safeties are deep — typically 10–12 yards off LOS, positioned over the tackles',
        'CBs are also playing off (5–7 yards), prepared to retreat to their deep quarter',
        'The entire secondary is at roughly the same deep depth pre-snap',
      ],
    },
    {
      category: 'cornerback-alignment',
      title: 'Off Coverage with Outside Leverage',
      tips: [
        'CBs play off coverage with outside leverage on their receivers',
        'They are NOT pressing — they need room to drop into their deep quarter',
        'Look for CBs aligned 6–8 yards off with an outside shade',
      ],
    },
    {
      category: 'post-snap',
      title: 'All Four Retreat Deep',
      tips: [
        'Post-snap: all four DBs immediately retreat to their quarter of the deep field',
        'Linebackers are left alone to handle all short and intermediate routes',
        'The coverage creates massive voids at 5–15 yards — exploit with quick routes',
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
      // Linebackers underneath (only ones short)
      { id: 'LOLB', label: 'LB', role: 'linebacker', x: 30, y: 44,
        coverageZone: { type: 'hook', rect: { x: 10, y: 34, width: 30, height: 16 } } },
      { id: 'MLB', label: 'LB', role: 'linebacker', x: 50, y: 44,
        coverageZone: { type: 'hook', rect: { x: 35, y: 34, width: 30, height: 16 } } },
      { id: 'ROLB', label: 'LB', role: 'linebacker', x: 70, y: 44,
        coverageZone: { type: 'hook', rect: { x: 60, y: 34, width: 30, height: 16 } } },
      // Four deep defenders — each in a quarter
      { id: 'LCB', label: 'CB', role: 'cornerback', x: 7, y: 47,
        coverageZone: { type: 'deep-quarter', rect: { x: 0, y: 5, width: 25, height: 33 } } },
      { id: 'FS', label: 'FS', role: 'safety', x: 30, y: 25,
        coverageZone: { type: 'deep-quarter', rect: { x: 25, y: 5, width: 25, height: 33 } } },
      { id: 'SS', label: 'SS', role: 'safety', x: 70, y: 25,
        coverageZone: { type: 'deep-quarter', rect: { x: 50, y: 5, width: 25, height: 33 } } },
      { id: 'RCB', label: 'CB', role: 'cornerback', x: 93, y: 47,
        coverageZone: { type: 'deep-quarter', rect: { x: 75, y: 5, width: 25, height: 33 } } },
    ],
    annotations: [
      { x: 12, y: 22, text: 'Q1', style: 'zone-label' },
      { x: 37, y: 22, text: 'Q2', style: 'zone-label' },
      { x: 62, y: 22, text: 'Q3', style: 'zone-label' },
      { x: 87, y: 22, text: 'Q4', style: 'zone-label' },
      { x: 50, y: 6, text: '⚠ Short & intermediate routes are WIDE OPEN', style: 'warning' },
    ],
  },
  formation: 'empty',
  relatedCoverages: ['cover-2', 'cover-3', 'cover-6', 'pattern-match'],
  tags: ['zone', 'four-deep', 'prevent', 'conservative', 'quarters'],
  offensiveCounters: [
    {
      id: 'c4-slant-wheel',
      formation: 'tight',
      name: 'Slant + Wheel',
      description: 'Cover 4 puts all DBs deep, leaving only linebackers underneath. A WR slant and an RB wheel route both find wide-open grass. Get the ball out quickly before safeties can recover.',
      routes: [
        { receiverKey: 'wr1', routeType: 'slant', isPrimary: true },
        { receiverKey: 'rb', routeType: 'wheel', isPrimary: false },
        { receiverKey: 'wr2', routeType: 'go', isPrimary: false },
      ],
      requiredAssets: ['Quick WR on the slant', 'Pass-catching RB'],
      auditeTrigger: 'Four DBs deep, only linebackers underneath — short routes are wide open.',
      difficulty: 'easy',
    },
    {
      id: 'c4-crossing',
      formation: 'trips-left',
      name: 'Crossing Routes',
      description: 'With all four DBs playing deep zones, the intermediate level (8–15 yards) is completely undefended by anyone with pass coverage ability. Run crossing routes for easy completions.',
      routes: [
        { receiverKey: 'slot', routeType: 'crossing', isPrimary: true },
        { receiverKey: 'te', routeType: 'dig', isPrimary: false },
        { receiverKey: 'wr1', routeType: 'go', isPrimary: false },
      ],
      requiredAssets: ['Slot receiver with YAC ability after the catch'],
      auditeTrigger: 'Cover 4 shell — attack the linebacker level with crossers and dig routes.',
      difficulty: 'intermediate',
    },
    {
      id: 'c4-curl-flat',
      formation: 'standard',
      name: 'Quick Screen / Bubble',
      description: 'The bubble screen is the fastest kill shot against Cover 4. Throw it to the slot immediately at the snap — by the time the safety triggers down, your receiver already has a 5-yard gain.',
      routes: [
        { receiverKey: 'slot', routeType: 'bubble', isPrimary: true },
        { receiverKey: 'wr1', routeType: 'go', isPrimary: false },
      ],
      requiredAssets: ['Slot with speed and agility in space'],
      auditeTrigger: 'Four deep, slot CB is 10+ yards away — bubble is open immediately.',
      difficulty: 'easy',
    },
  ],
};

export default cover4;
