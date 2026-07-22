import { Reveal } from "@/components/reveal";
import { fadeUp, stagger } from "@/lib/motion";

/** Full-width dark pull-quote moment. Each line is its own reveal so a
 *  multi-line quote lands beat by beat, matching the source copy's
 *  deliberately short, separately-paced statements. */
export function CaseStudyQuote({ lines }: { lines: string[] }) {
  return (
    <div className="bg-muted/40 py-24 sm:py-32">
      <Reveal
        variants={stagger(0.15)}
        className="mx-auto flex max-w-3xl flex-col gap-3 px-5 text-center sm:px-8"
      >
        {lines.map((line, i) => (
          <Reveal key={i} variants={fadeUp}>
            <p className="font-display text-2xl font-medium leading-snug text-balance sm:text-4xl">
              {line}
            </p>
          </Reveal>
        ))}
      </Reveal>
    </div>
  );
}
