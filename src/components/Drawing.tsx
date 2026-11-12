import type { ReactNode } from 'react';
import type { DrawingKind } from '../content';

// Small line drawings for technical projects that have no paper or page to show.
const INK = 'var(--color-ink-soft)';
const A = 'var(--color-link)';
const B = 'var(--color-hover)';

function Warehouse() {
  return (
    <>
      <ellipse cx="80" cy="30" rx="34" ry="10" fill="none" stroke={A} strokeWidth="3" />
      <path d="M46 30 V62 a34 10 0 0 0 68 0 V30" fill="none" stroke={A} strokeWidth="3" />
      <path d="M80 72 V92 M35 92 H125 M35 92 V104 M80 92 V104 M125 92 V104" fill="none" stroke={INK} strokeWidth="2" />
      {[20, 65, 110].map((x) => (
        <g key={x}>
          <rect x={x} y="104" width="30" height="30" fill={B} />
          <path d={`M${x} 119 H${x + 30} M${x + 15} 104 V119`} stroke="var(--color-paper)" strokeWidth="2" />
        </g>
      ))}
    </>
  );
}

function Matching() {
  return (
    <>
      {[40, 80, 120].map((y) => (
        <circle key={`l${y}`} cx="35" cy={y} r="12" fill={A} />
      ))}
      {[40, 80, 120].map((y) => (
        <circle key={`r${y}`} cx="125" cy={y} r="12" fill={B} />
      ))}
      <path d="M47 40 C80 40 80 120 113 120 M47 80 C80 80 80 40 113 40 M47 120 C80 120 80 80 113 80" fill="none" stroke={INK} strokeWidth="2" />
    </>
  );
}

function Apps() {
  return (
    <>
      <rect x="28" y="20" width="60" height="115" rx="10" fill="none" stroke={A} strokeWidth="3" />
      <rect x="72" y="40" width="60" height="105" rx="10" fill="var(--color-paper)" stroke={B} strokeWidth="3" />
      <path d="M84 62 H120 M84 76 H112 M84 90 H120 M84 104 H104" stroke={INK} strokeWidth="3" strokeLinecap="round" />
    </>
  );
}

const DRAWINGS: Record<DrawingKind, () => ReactNode> = {
  warehouse: Warehouse,
  matching: Matching,
  apps: Apps,
};

export function Drawing({ kind }: { kind: DrawingKind }) {
  const Shapes = DRAWINGS[kind];
  return (
    <svg viewBox="0 0 160 160" className="h-full w-full" aria-hidden="true">
      <Shapes />
    </svg>
  );
}
