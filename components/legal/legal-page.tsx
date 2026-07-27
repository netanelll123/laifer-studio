/** Shared building blocks for the site's static legal pages (accessibility,
 *  privacy, terms) — same eyebrow/title/intro header and section/list
 *  treatment on all three, so only the content differs per page. */

export function LegalIntro({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <>
      <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-accent">
        <span className="h-px w-6 bg-accent/60" aria-hidden />
        {eyebrow}
      </span>
      <h1 className="mt-4 font-display text-4xl font-medium leading-[1.1] text-balance sm:text-5xl">
        {title}
      </h1>
      <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
        {intro}
      </p>
    </>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="mt-12 font-display text-2xl font-medium">{title}</h2>
      <div className="mt-4 text-muted-foreground">{children}</div>
    </section>
  );
}

export function LegalList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span
            className="mt-2.5 size-1 shrink-0 rounded-full bg-accent"
            aria-hidden
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

export type LegalSectionContent = {
  title: string;
  paragraph?: string;
  list?: string[];
};
