import { PROFILE } from '../content';
import { SlashLinks } from './SlashLinks';

export function Intro() {
  return (
    <header className="px-5 pt-5">
      <h1 className="pt-5 text-center text-[32px]">{PROFILE.name}</h1>
      {PROFILE.bio.map((paragraph) => (
        <p key={paragraph} className="mt-4">
          {paragraph}
        </p>
      ))}
      <SlashLinks links={PROFILE.links} className="mt-4 text-center" />
    </header>
  );
}
