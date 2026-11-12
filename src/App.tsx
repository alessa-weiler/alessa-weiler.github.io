import { EDUCATION, EXPERIENCE, FEATURED, MISC, PROJECTS, RESEARCH_INTRO } from './content';
import { Intro } from './components/Intro';
import { Section, SubHeading } from './components/Section';
import { Timeline } from './components/Timeline';
import { WorkItem } from './components/WorkItem';

export default function App() {
  return (
    <main className="mx-auto w-full max-w-[800px] pb-10">
      <Intro />

      <Section title="Research">
        {RESEARCH_INTRO.map((p) => (
          <p key={p} className="mb-3">
            {p}
          </p>
        ))}
        <SubHeading>Featured work</SubHeading>
        {FEATURED.map((entry) => (
          <WorkItem key={entry.title} entry={entry} />
        ))}
        <SubHeading>Other projects</SubHeading>
        {PROJECTS.map((entry) => (
          <WorkItem key={entry.title} entry={entry} />
        ))}
      </Section>

      <Section title="Experience">
        <Timeline entries={EXPERIENCE} />
      </Section>

      <Section title="Education">
        <Timeline entries={EDUCATION} />
      </Section>

      <Section title="Miscellanea">
        {MISC.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </Section>

      <footer className="px-5 pt-10 text-right text-xs">
        Design inspired by <a href="https://github.com/jonbarron/jonbarron_website">Jon Barron</a>'s site.
      </footer>
    </main>
  );
}
