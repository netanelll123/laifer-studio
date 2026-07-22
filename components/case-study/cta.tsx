import { Reveal } from "@/components/reveal";
import { fadeUp, stagger } from "@/lib/motion";
import { Button } from "@/components/ui/button";
import type { CaseStudy } from "@/content/types";

/** Closing call-to-action — mirrors the homepage Contact section's intro
 *  copy treatment, linking back to it rather than duplicating the form. */
export function CaseStudyCta({
  cta,
  href,
}: {
  cta: CaseStudy["cta"];
  href: string;
}) {
  return (
    <div className="mx-auto max-w-2xl px-5 text-center sm:px-8">
      <Reveal variants={stagger(0.12)} className="flex flex-col items-center gap-6">
        <Reveal variants={fadeUp}>
          <h2 className="font-display text-4xl font-medium leading-[1.1] text-balance sm:text-5xl">
            {cta.title}
          </h2>
        </Reveal>
        <Reveal variants={fadeUp}>
          <p className="max-w-md text-base text-muted-foreground sm:text-lg">
            {cta.text}
          </p>
        </Reveal>
        <Reveal variants={fadeUp}>
          <Button asChild size="lg">
            <a href={href}>{cta.buttonLabel}</a>
          </Button>
        </Reveal>
      </Reveal>
    </div>
  );
}
