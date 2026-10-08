import { useTranslations } from "next-intl";
import { Plus } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { scaleIn, stagger } from "@/lib/motion";
import { sectionIds } from "@/content/site";

/** FAQ accordion — native <details>/<summary> rather than a JS-driven
 *  disclosure, so it's keyboard/screen-reader accessible by default and
 *  the section stays a Server Component (no client state needed to toggle). */
export function FAQ() {
  const t = useTranslations("faq");
  const items = t.raw("items") as { question: string; answer: string }[];

  return (
    <section id={sectionIds.faq} className="section-padding">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />

        <Reveal variants={stagger(0.06)} className="mt-16 flex flex-col gap-4">
          {items.map((item, i) => (
            <Reveal key={i} variants={scaleIn}>
              <details className="group rounded-2xl border border-border bg-card/60 p-6 transition-colors duration-500 ease-cinematic open:border-accent/40 open:bg-card">
                {/* The summary itself stays display:list-item (marker hidden via
                    ::marker) — flex on <summary> strips its disclosure role in
                    WebKit, so screen readers stop announcing it as an
                    expandable control. The flex layout lives on an inner span. */}
                <summary className="cursor-pointer rounded-lg font-display text-lg font-medium marker:content-none [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center justify-between gap-4">
                    {item.question}
                    <Plus
                      className="size-5 shrink-0 text-accent transition-transform duration-300 ease-cinematic group-open:rotate-45"
                      aria-hidden
                    />
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {item.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
