import type { QuizQuestion } from '../types';
import {
  cover0Blitz, cover1Blitz, bracket, patternMatch, cover6, tampa2, cover2Man, cover0,
} from '../coverages';

const advancedQuestions: QuizQuestion[] = [
  {
    id: 'a-001',
    type: 'identify-coverage',
    coverageId: 'cover-0-blitz',
    diagramData: cover0Blitz.diagram,
    formation: 'standard',
    choices: ['cover-0-blitz', 'cover-1-blitz', 'cover-0', 'cover-2-man'],
    explanation:
      'Cover 0 Blitz. The dashed red borders on the outside linebackers indicate blitzing players. Both safeties are shallow (no one deep). This is distinct from Cover 0 base — the base version has a standard 4-man rush, while the blitz sends 6+ rushers. Count the rushers and check safety depth.',
    difficulty: 'advanced',
    hint: 'Look for the dashed red borders (blitz indicators). How many are there?',
  },
  {
    id: 'a-002',
    type: 'identify-coverage',
    coverageId: 'cover-1-blitz',
    diagramData: cover1Blitz.diagram,
    formation: 'trips-left',
    choices: ['cover-1-blitz', 'cover-0-blitz', 'cover-1', 'cover-0'],
    explanation:
      'Cover 1 Blitz. This looks similar to Cover 0 Blitz, but there IS one safety deep (FS in the center). The other safety (SS) is blitzing. Extra rushers from the LBs + SS are attacking the QB, but one safety hangs back as a safety net. That single deep safety distinguishes this from Cover 0 Blitz.',
    difficulty: 'advanced',
    hint: 'This is a blitz — but is there any deep safety? Compare to Cover 0 Blitz.',
  },
  {
    id: 'a-003',
    type: 'identify-coverage',
    coverageId: 'bracket',
    diagramData: bracket.diagram,
    formation: 'tight',
    choices: ['bracket', 'cover-1', 'cover-2-man', 'cover-0'],
    explanation:
      'Bracket coverage. Notice two defenders are assigned to the left receiver: the LCB is underneath (CB★) and the SS is over the top (shaded toward that side). The FS must cover the entire right side alone. This asymmetric double-coverage look — two on one receiver — is the bracket signature.',
    difficulty: 'advanced',
    hint: 'Look for a receiver with TWO defenders assigned to him — one under, one over.',
  },
  {
    id: 'a-004',
    type: 'identify-coverage',
    coverageId: 'pattern-match',
    diagramData: patternMatch.diagram,
    formation: 'trips-right',
    choices: ['pattern-match', 'cover-4', 'cover-6', 'cover-3'],
    explanation:
      'Pattern-Match (Cover 4). Pre-snap this looks identical to Cover 4. The annotation is the tell — pattern-match converts to man on vertical routes. If you see four defenders deep in a zone shell and the note says "converts to man," that is pattern-match. In a real game, you would need to watch post-snap conversion.',
    difficulty: 'advanced',
    hint: 'This looks like Cover 4 — but read the annotation. What does this coverage do post-snap?',
  },
  {
    id: 'a-005',
    type: 'identify-coverage',
    coverageId: 'cover-6',
    diagramData: cover6.diagram,
    formation: 'standard',
    choices: ['cover-6', 'cover-4', 'cover-2', 'pattern-match'],
    explanation:
      'Cover 6. The left side has two defenders in deep zones (CB + FS = quarters structure), while the right side has one deep safety (SS) covering a half. This asymmetric structure — quarters left, half right — is Cover 6. Symmetric four-deep would be Cover 4. A pure half-and-half would be Cover 2.',
    difficulty: 'advanced',
    hint: 'Cover 6 = Cover 4 on one side + Cover 2 on the other. Which side has more deep defenders?',
  },
  {
    id: 'a-006',
    type: 'identify-coverage',
    coverageId: 'tampa-2',
    diagramData: tampa2.diagram,
    formation: 'trips-right',
    choices: ['tampa-2', 'cover-2', 'cover-3', 'cover-2-man'],
    explanation:
      'Tampa 2. The two-high shell looks like Cover 2. The MLB seam-drop arrow pointing deep is the distinguishing feature. Standard Cover 2 has no deep MLB — he stays in the hook zone. Tampa 2 has the MLB driving into the deep middle. This plugs the seam gap that Cover 2 leaves open.',
    difficulty: 'advanced',
    hint: 'This is a two-high coverage. What does the middle linebacker do that is unusual?',
  },
  {
    id: 'a-007',
    type: 'identify-coverage',
    coverageId: 'cover-2-man',
    diagramData: cover2Man.diagram,
    formation: 'empty',
    choices: ['cover-2-man', 'cover-2', 'cover-0', 'cover-1'],
    explanation:
      'Cover 2 Man. The two-high safety shell makes it look like zone Cover 2. The difference: the CBs are in man coverage (note the man targets), and the warning annotation confirms the seam is still open. Unlike zone Cover 2, the CBs follow their receivers — there are no zone drops to the flats.',
    difficulty: 'advanced',
    hint: 'Two safeties deep. Now check the CB assignments. Are the CBs in zone or man?',
  },
  {
    id: 'a-008',
    type: 'identify-coverage',
    coverageId: 'cover-0',
    diagramData: cover0.diagram,
    formation: 'standard',
    choices: ['cover-0', 'cover-1', 'cover-0-blitz', 'cover-2-man'],
    explanation:
      'Base Cover 0 (no blitz). All defenders are shallow — no safeties deep. Both safeties are on specific man assignments (not deep). This differs from Cover 0 Blitz: there is no dashed border on any player (no extra rushers). Standard four-man rush, everyone else in man, zero deep safety help.',
    difficulty: 'advanced',
    hint: 'No deep safeties — but is this a blitz? Check for dashed-border (blitzing) defenders.',
  },
];

export default advancedQuestions;
