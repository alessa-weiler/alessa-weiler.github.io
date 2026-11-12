import type { TimelineEntry } from '../content';

export function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <ul className="space-y-3">
      {entries.map((entry) => (
        <li key={`${entry.title}-${entry.org}`} className="flex flex-col sm:flex-row sm:gap-6">
          <span className="shrink-0 text-[var(--color-ink-soft)] sm:w-24">{entry.period}</span>
          <span>
            <strong>{entry.title}</strong>, {entry.org}. {entry.detail}
          </span>
        </li>
      ))}
    </ul>
  );
}
