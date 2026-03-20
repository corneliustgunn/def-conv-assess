import type { CoverageData } from '../types';

const bracket: CoverageData = {
  id: 'bracket',
  name: 'Bracket Coverage',
  shortName: 'BKT',
  family: 'hybrid',
  safetyDepth: 1,
  description:
    'Bracket coverage assigns two defenders to one elite receiver — one underneath and one over the top. The underneath defender takes away short routes and forces the receiver deep, while the safety or deep defender takes away deep routes. The receiver is "bracketed" with no good option in either direction. This is typically used on an opponent\'s top weapon.',
  strengths: [
    'Effectively takes one top receiver out of the game',
    'The bracketed receiver has nowhere to go — inside route is covered, deep is covered',
    'Can be used on the tight end over the middle as well',
    'Forces the QB to go to his second or third option every play',
  ],
  weaknesses: [
    'Using two defenders on one receiver leaves others in single coverage',
    'The rest of the field is effectively in Cover 1 or less — other receivers may be open',
    'Trips or bunch formations can force the bracket to break',
    'A QB who ignores the bracketed receiver and attacks elsewhere wins',
  ],
  indicators: [
    {
      category: 'pre-snap',
      title: 'Double Coverage Look',
      tips: [
        'Two defenders are aligned around one specific receiver — one inside, one outside/deep',
        'The CB is pressed on the receiver, and a safety is shaded over the top',
        'The safety is closer to one side of the field, not centered — he is committed to this receiver',
      ],
    },
    {
      category: 'post-snap',
      title: 'The Over-Under Coverage',
      tips: [
        'CB takes the short-to-intermediate route — he fights through routes at 0–10 yards',
        'Safety drives on any route going deep — he has this receiver over the top',
        'The receiver truly has no route that is open unless he creates after the catch',
      ],
    },
    {
      category: 'safety-alignment',
      title: 'Safety Shaded to One Receiver',
      tips: [
        'One safety is offset — shaded toward the elite receiver rather than centered',
        'This safety is NOT a centerfielder — he has a specific assignment',
        'The other safety (if present) must cover the remaining deep territory alone',
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
      // FS centerfield-ish (must cover right side alone)
      { id: 'FS', label: 'FS', role: 'safety', x: 65, y: 22 },
      // SS bracketing the left WR over the top
      { id: 'SS', label: 'SS', role: 'safety', x: 12, y: 30, manTarget: 'WR★' },
      // LCB brackets the elite WR underneath
      { id: 'LCB', label: 'CB★', role: 'cornerback', x: 8, y: 50, manTarget: 'WR★' },
      // RCB in normal man on right WR
      { id: 'RCB', label: 'CB', role: 'cornerback', x: 92, y: 51, manTarget: 'WR' },
    ],
    annotations: [
      { x: 12, y: 38, text: '★ BRACKET', style: 'zone-label' },
      { x: 12, y: 32, text: 'CB under + S over', style: 'zone-label' },
      { x: 65, y: 6, text: '⚠ Right side: single coverage', style: 'warning' },
    ],
  },
  relatedCoverages: ['cover-1', 'cover-2-man', 'pattern-match'],
  tags: ['hybrid', 'man', 'double-coverage', 'advanced', 'single-high'],
  offensiveCounters: [
    {
      id: 'bkt-unbracketed-go',
      name: 'Attack the Unbracketed WR',
      description: 'Two defenders on one receiver means everyone else is in single coverage. Ignore the bracketed receiver entirely. Find who is unbracketed and throw them the go route.',
      routes: [
        { receiverKey: 'wr2', routeType: 'go', isPrimary: true },
        { receiverKey: 'wr1', routeType: 'go', isPrimary: false, label: 'Bracketed (decoy)' },
      ],
      requiredAssets: ['Identify your unbracketed receiver pre-snap'],
      auditeTrigger: 'See CB underneath + safety over one WR — that WR is bracketed. Attack everyone else.',
      difficulty: 'easy',
    },
    {
      id: 'bkt-iso-hilo',
      name: 'Iso Hi-Lo on Unbracketed Side',
      description: 'Put your unbracketed receivers in a hi-lo combination — one deep, one short on the same side. The single defender guarding that side cannot cover both levels.',
      routes: [
        { receiverKey: 'wr2', routeType: 'post', isPrimary: true },
        { receiverKey: 'slot', routeType: 'flat', isPrimary: false },
        { receiverKey: 'wr1', routeType: 'go', isPrimary: false, label: 'Bracketed (decoy)' },
      ],
      requiredAssets: ['WR2 on a post or go route', 'Slot to work the flat'],
      auditeTrigger: 'Bracket on WR1 — set up hi-lo on the other side with single coverage.',
      difficulty: 'intermediate',
    },
    {
      id: 'bkt-flood-unbracketed',
      name: 'Flood the Unbracketed Side',
      description: 'Stack multiple receivers on the unbracketed side — the single coverage CB cannot guard all of them. Overload that side while the bracketed WR keeps two defenders occupied.',
      routes: [
        { receiverKey: 'wr2', routeType: 'corner', isPrimary: true },
        { receiverKey: 'rb', routeType: 'wheel', isPrimary: false },
        { receiverKey: 'wr1', routeType: 'go', isPrimary: false, label: 'Bracketed (decoy)' },
      ],
      requiredAssets: ['Multiple weapons on the unbracketed side'],
      auditeTrigger: 'Bracket takes away your best WR — concentrate routes on the other side.',
      difficulty: 'intermediate',
    },
  ],
};

export default bracket;
