import { useTranslations } from "next-intl";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { fadeUp, stagger } from "@/lib/motion";
import { processSteps } from "@/lib/data/process";
import { sectionIds } from "@/lib/site";

/** Creative process as a vertical timeline of six ordered steps. */
export function CreativeProcess() {
  const t = useTranslations("process");

  return (
    <section id={sectionIds.process} className="section-padding">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <Reveal variants={stagger(0.1)} className="relative mt-16">
          {/* Vertical spine */}
          <span
            className="absolute inset-y-0 start-[19px] w-px bg-gradient-to-b from-accent/50 via-border to-transparent sm:start-1/2"
            aria-hidden
          />

          <ol className="flex flex-col gap-8">
            {processSteps.map(({ slug, icon: Icon }, index) => (
              <Reveal key={slug} variants={fadeUp} as="li">
                <div
                  className={`relative flex items-start gap-6 sm:w-1/2 ${
                    index % 2 === 1 ? "sm:ms-auto sm:ps-12" : "sm:pe-12 sm:text-end"
                  }`}
                >
                  <span
                    className={`relative z-10 inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-background text-accent ${
                      index % 2 === 1
                        ? "sm:order-first"
                        : "sm:order-last sm:-me-[60px]"
                    }`}
                  >
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <div className={index % 2 === 0 ? "sm:me-auto" : ""}>
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-xs text-accent">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-display text-xl font-medium">
                        {t(`steps.${slug}.title`)}
                      </h3>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {t(`steps.${slug}.description`)}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
