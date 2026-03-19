import { Link } from 'react-router-dom';
import type { QuizQuestion } from '../../data/types';
import { coverageById } from '../../data/coverages';
import CoverageDiagram from '../coverage/CoverageDiagram';
import './FeedbackPanel.css';

interface Props {
  question: QuizQuestion;
  chosenId: string;
  isCorrect: boolean;
}

export default function FeedbackPanel({ question, chosenId, isCorrect }: Props) {
  const correct = coverageById[question.coverageId];
  const chosen = coverageById[chosenId];

  return (
    <div className={`feedback-panel feedback-panel--${isCorrect ? 'correct' : 'incorrect'}`}>
      <div className="feedback-panel__header">
        <span className="feedback-panel__icon">{isCorrect ? '✓' : '✗'}</span>
        <div>
          <div className="feedback-panel__verdict">
            {isCorrect ? 'Correct!' : 'Not quite.'}
          </div>
          {!isCorrect && (
            <div className="feedback-panel__answer">
              You chose <strong>{chosen?.name ?? chosenId}</strong>. The answer is <strong>{correct?.name}</strong>.
            </div>
          )}
        </div>
      </div>

      <p className="feedback-panel__explanation">{question.explanation}</p>

      <div className="feedback-panel__diagram">
        <div className="feedback-panel__diagram-label">Annotated diagram:</div>
        <CoverageDiagram
          diagram={question.diagramData}
          showZones={true}
          showArrows={true}
          showAnnotations={true}
          size="medium"
        />
      </div>

      <Link to={`/learn/${question.coverageId}`} className="feedback-panel__study-link">
        Study {correct?.name} in detail →
      </Link>
    </div>
  );
}
