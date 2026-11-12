import { Fragment } from 'react';
import type { Link } from '../content';

export function SlashLinks({ links, className }: { links: Link[]; className?: string }) {
  return (
    <div className={className}>
      {links.map((link, i) => (
        <Fragment key={link.href}>
          {i > 0 && <span className="mx-2">/</span>}
          <a href={link.href}>{link.label}</a>
        </Fragment>
      ))}
    </div>
  );
}
