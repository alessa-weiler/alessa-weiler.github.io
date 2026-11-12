import type { Visual as VisualSpec } from '../content';
import { Drawing } from './Drawing';

export function Visual({ visual, href }: { visual: VisualSpec; href?: string }) {
  if ('drawing' in visual) {
    return (
      <div className="h-32 w-32 sm:h-40 sm:w-40">
        <Drawing kind={visual.drawing} />
      </div>
    );
  }

  const image = (
    <img
      src={visual.snapshot}
      alt={visual.alt}
      loading="lazy"
      className="h-32 w-32 border border-[var(--color-rule)] object-cover object-top shadow-sm sm:h-40 sm:w-40"
    />
  );
  return href ? <a href={href}>{image}</a> : image;
}
