import type { QuizQuestion } from '../types';
import { cover2, cover2Man, tampa2, cover3, cover1, cover6, cover4 } from '../coverages';

const intermediateQuestions: QuizQuestion[] = [
  {
    id: 'i-001',
    type: 'identify-coverage',
    coverageId: 'tampa-2',
    diagramData: tampa2.diagram,
    formation: 'standard',
    choices: ['tampa-2', 'cover-2', 'cover-3', 'cover-4'],
    explanation:
      'Tampa 2. This looks almost identical to Cover 2 at first glance — two safeties deep and wide. The key difference is the MLB: in Tampa 2, the MLB drops deep into the middle seam (shown with the arrow). In standard Cover 2, the MLB stays in a shallow hook zone. Watch the middle linebacker post-snap.',
    difficulty: 'intermediate',
    hint: 'This looks like Cover 2, but something is different about the middle linebacker.',
  },
  {
    id: 'i-002',
    type: 'identify-coverage',
    coverageId: 'cover-2-man',
    diagramData: cover2Man.diagram,
    formation: 'trips-right',
    choices: ['cover-2-man', 'cover-2', 'cover-1', 'cover-0'],
    explanation:
      'Cover 2 Man. Pre-snap it is nearly identical to zone Cover 2 — two safeties split deep. The tell is the CBs: in Cover 2 Man, CBs play in man coverage and follow their receiver. In zone Cover 2, CBs jam and drop to flat zones. Since the CB assignments are man-to-man with no zone drop, this is Cover 2 Man.',
    difficulty: 'intermediate',
    hint: 'Two safeties deep — now look at the cornerbacks. Are they in man or zone?',
  },
  {
    id: 'i-003',
    type: 'identify-coverage',
    coverageId: 'cover-6',
    diagramData: cover6.diagram,
    formation: 'trips-left',
    choices: ['cover-6', 'cover-2', 'cover-4', 'cover-3'],
    explanation:
      'Cover 6. Notice the asymmetry: the left side has TWO defenders in deep zone coverage (CB + FS each in a quarter), while the right side has ONE defender deep (SS in a half). This split structure — quarters on one side, half on the other — is the Cover 6 signature.',
    difficulty: 'intermediate',
    hint: 'Look at both sides of the field separately. Are they using the same coverage?',
  },
  {
    id: 'i-004',
    type: 'identify-coverage',
    coverageId: 'cover-3',
    diagramData: cover3.diagram,
    formation: 'tight',
    choices: ['cover-3', 'cover-1', 'cover-2', 'tampa-2'],
    explanation:
      'Cover 3. This is the critical Cover 3 vs. Cover 1 distinction. Both have a single safety deep. The difference: in Cover 3, the CBs rotate to deep thirds (notice the arrows). In Cover 1, CBs stay in man and do not rotate. Three total defenders in the deep zones = Cover 3.',
    difficulty: 'intermediate',
    hint: 'Single high safety — but what are the cornerbacks doing?',
  },
  {
    id: 'i-005',
    type: 'identify-coverage',
    coverageId: 'cover-2',
    diagramData: cover2.diagram,
    formation: 'tight',
    choices: ['cover-2', 'cover-2-man', 'tampa-2', 'cover-6'],
    explanation:
      'Cover 2 zone. Two safeties split wide and deep — the two-high shell. The CBs are pressing at the LOS and will drop to flat zones after the jam. No movement arrow on the MLB (that would be Tampa 2). The CBs are not in man (that would be Cover 2 Man). Clean two-deep zone.',
    difficulty: 'intermediate',
    hint: 'Two safeties deep. Now distinguish: zone or man? Watch the CBs and MLB.',
  },
  {
    id: 'i-006',
    type: 'identify-coverage',
    coverageId: 'cover-4',
    diagramData: cover4.diagram,
    formation: 'trips-left',
    choices: ['cover-4', 'cover-6', 'cover-3', 'cover-2'],
    explanation:
      'Cover 4 (Quarters). Four defenders are playing deep — both CBs and both safeties. Each covers a quarter. Unlike Cover 3 (one safety + two CBs = three deep), Cover 4 has FOUR deep defenders. And unlike Cover 6, Cover 4 is symmetric — same structure on both sides.',
    difficulty: 'intermediate',
    hint: 'Count deep defenders on EACH side. Is it symmetric?',
  },
  {
    id: 'i-007',
    type: 'identify-weakness',
    coverageId: 'cover-2',
    diagramData: cover2.diagram,
    formation: 'empty',
    choices: ['cover-2', 'cover-4', 'cover-1', 'cover-3'],
    explanation:
      'The diagram shows a significant gap between the two safeties over the middle — this is the Cover 2 seam weakness. A receiver running a post route or seam route can split the safeties for a big gain. The warning annotation highlights this vulnerability.',
    difficulty: 'intermediate',
    hint: 'Look at the annotation on the diagram. What gap is highlighted?',
  },
  {
    id: 'i-008',
    type: 'identify-coverage',
    coverageId: 'cover-1',
    diagramData: cover1.diagram,
    formation: 'trips-right',
    choices: ['cover-1', 'cover-3', 'cover-1-blitz', 'bracket'],
    explanation:
      'Base Cover 1. Single high, everything else man. The SS is in the box in man on a slot/TE. No blitzing players (no dashed-border defenders). This is standard Cover 1 — not a blitz, not Cover 3. The single high safety and man coverage underneath with four normal rushers.',
    difficulty: 'intermediate',
  },
];

export default intermediateQuestions;
