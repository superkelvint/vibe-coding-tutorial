export const COURSE_STATE_KEY = 'vibe-coding-course-state:v1';
export const COURSE_STATE_VERSION = 1 as const;

export type CourseState = {
  version: typeof COURSE_STATE_VERSION;
  responses: Record<string, string>;
  checkpoints: Record<string, boolean>;
};

const emptyState = (): CourseState => ({
  version: COURSE_STATE_VERSION,
  responses: {},
  checkpoints: {},
});

export function readCourseState(): CourseState {
  if (typeof window === 'undefined') return emptyState();

  try {
    const raw = window.localStorage.getItem(COURSE_STATE_KEY);
    if (!raw) return emptyState();
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object' || (parsed as { version?: unknown }).version !== COURSE_STATE_VERSION) {
      return emptyState();
    }
    const candidate = parsed as Partial<CourseState>;
    return {
      version: COURSE_STATE_VERSION,
      responses: isStringRecord(candidate.responses) ? candidate.responses : {},
      checkpoints: isBooleanRecord(candidate.checkpoints) ? candidate.checkpoints : {},
    };
  } catch {
    return emptyState();
  }
}

export function writeCourseState(state: CourseState): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(COURSE_STATE_KEY, JSON.stringify(state));
  } catch {
    // Storage can be unavailable or full. The lesson remains usable in-memory.
  }
}

function isStringRecord(value: unknown): value is Record<string, string> {
  return isPlainObject(value) && Object.values(value).every((entry) => typeof entry === 'string');
}

function isBooleanRecord(value: unknown): value is Record<string, boolean> {
  return isPlainObject(value) && Object.values(value).every((entry) => typeof entry === 'boolean');
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return !!value && typeof value === 'object' && !Array.isArray(value);
}
