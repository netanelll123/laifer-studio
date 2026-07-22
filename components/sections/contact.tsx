import { useTranslations } from "next-intl";
import { Mail } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/sections/contact-form";
import { sectionIds, siteConfig } from "@/lib/site";

/** Contact section: minimal intro + the form. */
export function Contact() {
  const t = useTranslations("contact");

  return (
    <section id={sectionIds.contact} className="section-padding">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal className="flex flex-col gap-6">
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-accent">
            <span className="h-px w-6 bg-accent/60" aria-hidden />
            {t("eyebrow")}
          </span>
          <h2 className="font-display text-4xl font-medium leading-[1.1] text-balance sm:text-5xl">
            {t("title")}
          </h2>
          <p className="max-w-md text-base text-muted-foreground sm:text-lg">
            {t("subtitle")}
          </p>
          <a
            href={`mailto:${siteConfig.person.email}`}
            className="inline-flex items-center gap-3 text-sm text-foreground/80 transition-colors hover:text-accent"
          >
            <span className="inline-flex size-10 items-center justify-center rounded-full border border-border">
              <Mail className="size-4" aria-hidden />
            </span>
            {siteConfig.person.email}
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
