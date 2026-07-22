import { useTranslations } from "next-intl";
import { Quote } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { scaleIn, stagger } from "@/lib/motion";
import { testimonials } from "@/content/collections/testimonials";
import { sectionIds } from "@/content/site";

/** Client testimonials as a responsive card grid. Ready for future video
 *  testimonials (add a source per item in the data + render conditionally). */
export function Testimonials() {
  const t = useTranslations("testimonials");

  return (
    <section id={sectionIds.testimonials} className="section-padding bg-muted/40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />

        <Reveal
          variants={stagger(0.1)}
          className="mt-16 grid gap-5 md:grid-cols-3"
        >
          {testimonials.map(({ slug }) => (
            <Reveal key={slug} variants={scaleIn}>
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-7">
                <Quote className="size-8 text-accent/60" aria-hidden />
                <blockquote className="mt-5 flex-1 text-base leading-relaxed text-foreground/90">
                  {t(`items.${slug}.quote`)}
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-5">
                  <div className="font-display text-lg">
                    {t(`items.${slug}.name`)}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {t(`items.${slug}.role`)}
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
