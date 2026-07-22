import { useTranslations } from "next-intl";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { scaleIn, stagger } from "@/lib/motion";
import { services } from "@/content/collections/services";
import { sectionIds } from "@/content/site";

/** Services grid: six offerings, each an icon + title + short description. */
export function Services() {
  const t = useTranslations("services");

  return (
    <section id={sectionIds.services} className="section-padding bg-muted/40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <Reveal
          variants={stagger(0.08)}
          className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map(({ slug, icon: Icon }) => (
            <Reveal key={slug} variants={scaleIn}>
              <article className="group h-full rounded-2xl border border-border bg-card/60 p-7 transition-colors duration-500 hover:border-accent/40 hover:bg-card">
                <span className="inline-flex size-12 items-center justify-center rounded-xl bg-accent-muted text-accent transition-transform duration-500 group-hover:scale-110">
                  <Icon className="size-6" aria-hidden />
                </span>
                <h3 className="mt-6 font-display text-xl font-medium">
                  {t(`items.${slug}.title`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {t(`items.${slug}.description`)}
                </p>
              </article>
            </Reveal>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
