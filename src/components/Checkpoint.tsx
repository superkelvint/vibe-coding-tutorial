import { useEffect, useId, useState } from 'react';
import { readCourseState, writeCourseState } from '../lib/course-state';

type CheckpointProps = { id: string; children: React.ReactNode };

export default function Checkpoint({ id, children }: CheckpointProps) {
  const inputId = `${id}-${useId().replaceAll(':', '')}`;
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(readCourseState().checkpoints[id] ?? false);
  }, [id]);

  function updateChecked(next: boolean) {
    setChecked(next);
    const state = readCourseState();
    writeCourseState({ ...state, checkpoints: { ...state.checkpoints, [id]: next } });
  }

  return (
    <div className="checkpoint">
      <input id={inputId} type="checkbox" checked={checked} onChange={(event) => updateChecked(event.target.checked)} />
      <label htmlFor={inputId}>{children}</label>
      <p className="checkpoint-note">Learner confirmation only—not automated proof.</p>
    </div>
  );
}
