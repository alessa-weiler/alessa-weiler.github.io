import { Fragment } from 'react';
import { SELF, type WorkEntry } from '../content';
import { Visual } from './Visual';
import { SlashLinks } from './SlashLinks';

function Authors({ names }: { names: string[] }) {
  return (
    <>
      {names.map((name, i) => (
        <Fragment key={name}>
          {i > 0 && ', '}
          {name === SELF ? <strong>{name}</strong> : name}
        </Fragment>
      ))}
    </>
  );
}

export function WorkItem({ entry }: { entry: WorkEntry }) {
  const title = <span className="font-bold">{entry.title}</span>;
  return (
    <article className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:gap-8">
      <div className="flex shrink-0 justify-center sm:w-1/4">
        <Visual visual={entry.visual} href={entry.href} />
      </div>
      <div className="sm:w-3/4">
        {entry.href ? <a href={entry.href}>{title}</a> : title}
        {entry.authors.length > 0 && (
          <div>
            <Authors names={entry.authors} />
          </div>
        )}
        <div>
          <em>{entry.venue}</em>
          {entry.year && `, ${entry.year}`}
        </div>
        {entry.links.length > 0 && <SlashLinks links={entry.links} />}
        <p className="mt-2">{entry.summary}</p>
      </div>
    </article>
  );
}
