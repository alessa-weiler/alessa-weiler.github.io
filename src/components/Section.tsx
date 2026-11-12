import type { ReactNode } from 'react';

export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="px-5 pt-8">
      <h2 className="mb-3 text-[22px]">{title}</h2>
      {children}
    </section>
  );
}

export function SubHeading({ children }: { children: ReactNode }) {
  return <h3 className="mt-6 text-lg">{children}</h3>;
}
