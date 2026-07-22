import { Reveal } from "@/components/reveal";
import { stagger, fadeUp } from "@/lib/motion";
import type { CaseStudy } from "@/content/types";

/** Editorial credits block — role / name pairs, film-style. */
export function CaseStudyCredits({
  credits,
}: {
  credits: CaseStudy["credits"];
}) {
  return (
    <div className="mx-auto max-w-2xl px-5 sm:px-8">
      <Reveal
        variants={stagger(0.1)}
        className="flex flex-col divide-y divide-border border-y border-border"
      >
        {credits.map((credit) => (
          <Reveal key={credit.name + credit.role} variants={fadeUp}>
            <div className="flex flex-col gap-1 py-6 text-center">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                {credit.role}
              </span>
              <span className="font-display text-xl">{credit.name}</span>
            </div>
          </Reveal>
        ))}
      </Reveal>
    </div>
  );
}
