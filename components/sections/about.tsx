import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { fadeUp, stagger } from "@/lib/motion";
import { sectionIds, siteConfig } from "@/content/site";

/** About section: real bio, a pull-quote, credentials and a Wikipedia link. */
export function About() {
  const t = useTranslations("about");
  const paragraphs = t.raw("paragraphs") as string[];
  const stats = ["since", "research", "ai"] as const;

  return (
    <section id={sectionIds.about} className="section-padding">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        {/* Portrait + pull-quote */}
        <Reveal className="order-2 lg:order-1">
          <figure className="relative overflow-hidden rounded-3xl border border-border">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/about-portrait.jpg"
              alt={siteConfig.person.name}
              className="aspect-[4/5] w-full object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-background via-background/45 to-transparent"
              aria-hidden
            />
            <div className="absolute inset-x-0 bottom-0 p-8 sm:p-12">
              <blockquote className="font-display text-2xl font-medium leading-snug text-balance [text-shadow:0_2px_24px_rgba(0,0,0,0.6)] sm:text-3xl">
                “{t("quote")}”
              </blockquote>
              <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-white/15 pt-6">
                {stats.map((key) => (
                  <div key={key}>
                    <dt className="font-display text-2xl text-accent sm:text-3xl">
                      {t(`stats.${key}.value`)}
                    </dt>
                    <dd className="mt-1 text-xs text-foreground/75 sm:text-sm">
                      {t(`stats.${key}.label`)}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </figure>
        </Reveal>

        {/* Copy */}
        <Reveal variants={stagger(0.12)} className="order-1 flex flex-col gap-6 lg:order-2">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-accent">
              <span className="h-px w-6 bg-accent/60" aria-hidden />
              {t("eyebrow")}
            </span>
          </Reveal>
          <Reveal>
            <h2 className="font-display text-4xl font-medium leading-[1.1] text-balance sm:text-5xl">
              {t("title")}
            </h2>
          </Reveal>
          {paragraphs.map((paragraph, i) => (
            <Reveal key={i} variants={fadeUp}>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                {paragraph}
              </p>
            </Reveal>
          ))}
          <Reveal variants={fadeUp}>
            <a
              href={siteConfig.person.wikipedia}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-accent"
            >
              {t("wiki")}
              <ArrowUpRight className="size-4" />
            </a>
          </Reveal>
        </Reveal>
      </div>
    </section>
  );
}
