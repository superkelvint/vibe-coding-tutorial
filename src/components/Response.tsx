import { useEffect, useId, useState } from 'react';
import { readCourseState, writeCourseState } from '../lib/course-state';

type ResponseProps = { id: string; prompt: string; rows?: number };

export default function Response({ id, prompt, rows = 6 }: ResponseProps) {
  const reactId = useId();
  const labelId = `${id}-${reactId.replaceAll(':', '')}`;
  const [value, setValue] = useState('');
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setValue(readCourseState().responses[id] ?? '');
  }, [id]);

  function updateValue(next: string) {
    setValue(next);
    const state = readCourseState();
    writeCourseState({ ...state, responses: { ...state.responses, [id]: next } });
    setSaved(true);
  }

  return (
    <div className="response-card">
      <label htmlFor={labelId}>{prompt}</label>
      <textarea id={labelId} rows={rows} value={value} onChange={(event) => updateValue(event.target.value)} />
      <p className="saved-note" aria-live="polite">{saved ? 'Saved in this browser.' : 'Your response is saved in this browser.'}</p>
    </div>
  );
}
