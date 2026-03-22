import type { QuizQuestion } from '../types';
import { cover0, cover1, cover2, cover3, cover4, cover0Blitz } from '../coverages';

const beginnerQuestions: QuizQuestion[] = [
  {
    id: 'b-001',
    type: 'identify-coverage',
    coverageId: 'cover-2',
    diagramData: cover2.diagram,
    formation: 'standard',
    choices: ['cover-2', 'cover-1', 'cover-0', 'cover-3'],
    explanation:
      'This is Cover 2. The key tell is the TWO safeties split wide and deep — one covering each deep half. The cornerbacks are pressing at the line of scrimmage before dropping to flat zones. Count the safeties: two of them, widely split. That is always Cover 2.',
    difficulty: 'beginner',
    hint: 'Count how many defenders are deep. Where are the safeties?',
  },
  {
    id: 'b-002',
    type: 'identify-coverage',
    coverageId: 'cover-1',
    diagramData: cover1.diagram,
    formation: 'standard',
    choices: ['cover-1', 'cover-2', 'cover-3', 'cover-0'],
    explanation:
      'This is Cover 1. There is exactly ONE safety deep in the center of the field. Every other defender is in man coverage. The single safety plays centerfield — this is the most important pre-snap tell. Single high = Cover 1 or Cover 3. Since the CBs are in press man (not rotating to zones), this is Cover 1.',
    difficulty: 'beginner',
    hint: 'One safety is deep in the center. Everyone else has a man assignment.',
  },
  {
    id: 'b-003',
    type: 'identify-coverage',
    coverageId: 'cover-0',
    diagramData: cover0.diagram,
    formation: 'empty',
    choices: ['cover-0', 'cover-1', 'cover-2', 'cover-4'],
    explanation:
      'This is Cover 0. There are NO safeties deep — every single defender is close to the line of scrimmage or in shallow man coverage. The entire secondary is at roughly the same depth. Zero safeties deep = Cover 0. This is all-out man coverage with no safety net.',
    difficulty: 'beginner',
    hint: 'Where are the safeties? Are any of them deep?',
  },
  {
    id: 'b-004',
    type: 'identify-coverage',
    coverageId: 'cover-3',
    diagramData: cover3.diagram,
    formation: 'standard',
    choices: ['cover-3', 'cover-2', 'cover-1', 'cover-4'],
    explanation:
      'This is Cover 3. There is one safety deep in the center, BUT the two cornerbacks are also rotating to deep third zones. All three deep defenders form a triangle in the back of the field. The arrows show the CBs sinking into their deep thirds. This three-deep shell is the Cover 3 signature.',
    difficulty: 'beginner',
    hint: 'How many total defenders end up deep? Look at where the CBs are going.',
  },
  {
    id: 'b-005',
    type: 'identify-coverage',
    coverageId: 'cover-4',
    diagramData: cover4.diagram,
    formation: 'empty',
    choices: ['cover-4', 'cover-2', 'cover-3', 'cover-1'],
    explanation:
      'This is Cover 4 (Quarters). FOUR defenders are deep — both safeties and both corners are all playing deep zones. Each one covers a quarter of the deep field. The underneath area has only linebackers. This conservative look prioritizes deep coverage over everything.',
    difficulty: 'beginner',
    hint: 'Count ALL the deep defenders — not just safeties, but corners too.',
  },
  {
    id: 'b-006',
    type: 'identify-coverage',
    coverageId: 'cover-0-blitz',
    diagramData: cover0Blitz.diagram,
    formation: 'trips-right',
    choices: ['cover-0-blitz', 'cover-1', 'cover-2', 'cover-3'],
    explanation:
      'This is Cover 0 Blitz. The most obvious tell is the cluster of defenders near the line of scrimmage — extra rushers (shown in red with dashed borders) are blitzing, and there are no safeties deep. Everyone is either rushing or in tight man coverage. Maximum pressure, zero deep help.',
    difficulty: 'beginner',
    hint: 'How many defenders are rushing? Are any safeties deep?',
  },
  {
    id: 'b-007',
    type: 'identify-coverage',
    coverageId: 'cover-2',
    diagramData: cover2.diagram,
    formation: 'trips-left',
    choices: ['cover-2', 'cover-4', 'cover-3', 'cover-0'],
    explanation:
      'Cover 2. The two safeties are split wide — one near the left hash, one near the right hash — each covering a deep half. This symmetric two-safety alignment is the defining feature of Cover 2. Compare to Cover 4 where safeties are positioned over the tackles, not the hashes.',
    difficulty: 'beginner',
  },
  {
    id: 'b-008',
    type: 'identify-coverage',
    coverageId: 'cover-1',
    diagramData: cover1.diagram,
    formation: 'tight',
    choices: ['cover-1', 'cover-0', 'cover-4', 'cover-2'],
    explanation:
      'Cover 1 again — single high safety in the center of the field. The strong safety (SS) is down near the line, in man on a slot or tight end. The free safety (FS) is the lone deep defender. Six defenders close to the LOS means aggressive man coverage is being played underneath.',
    difficulty: 'beginner',
  },
];

export default beginnerQuestions;
