import { coverageById } from '../../data/coverages';
import './AnswerChoiceGrid.css';

interface Props {
  choices: string[];
  selected: string | null;
  correctId: string;
  locked: boolean;
  onSelect: (id: string) => void;
}

export default function AnswerChoiceGrid({ choices, selected, correctId, locked, onSelect }: Props) {
  return (
    <div className="choice-grid">
      {choices.map((id) => {
        const coverage = coverageById[id];
        const isSelected = selected === id;
        const isCorrect = id === correctId;
        let variant = '';
        if (locked) {
          if (isCorrect) variant = 'correct';
          else if (isSelected) variant = 'incorrect';
          else variant = 'dimmed';
        } else if (isSelected) {
          variant = 'selected';
        }
        return (
          <button
            key={id}
            className={`choice-btn choice-btn--${variant || 'default'}`}
            onClick={() => !locked && onSelect(id)}
            disabled={locked && !isCorrect && !isSelected}
            aria-pressed={isSelected}
          >
            <span className="choice-btn__short">{coverage?.shortName ?? id}</span>
            <span className="choice-btn__name">{coverage?.name ?? id}</span>
            {locked && isCorrect && <span className="choice-btn__icon">✓</span>}
            {locked && isSelected && !isCorrect && <span className="choice-btn__icon">✗</span>}
          </button>
        );
      })}
    </div>
  );
}
