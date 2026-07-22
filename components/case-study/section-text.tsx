import { Reveal } from "@/components/reveal";
import { fadeUp } from "@/lib/motion";

/**
 * A text beat in the article: optional title + a sequence of short
 * paragraphs, each revealed on its own so brief, punchy lines land with
 * their own pace (matches how the source copy is deliberately broken into
 * short standalone statements).
 */
export function CaseStudySectionText({
  title,
  paragraphs,
}: {
  title?: string;
  paragraphs: string[];
}) {
  return (
    <div className="mx-auto max-w-2xl px-5 sm:px-8">
      {title ? (
        <Reveal variants={fadeUp}>
          <h2 className="mb-6 font-display text-3xl font-medium leading-[1.15] text-balance sm:text-4xl">
            {title}
          </h2>
        </Reveal>
      ) : null}
      <div className="flex flex-col gap-4">
        {paragraphs.map((paragraph, i) => (
          <Reveal key={i} variants={fadeUp}>
            <p className="text-lg leading-relaxed text-foreground/85">
              {paragraph}
            </p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
