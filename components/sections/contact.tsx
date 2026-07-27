import { useTranslations } from "next-intl";
import { Mail } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/sections/contact-form";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { sectionIds, siteConfig } from "@/content/site";

/** Contact section: minimal intro + the form. */
export function Contact() {
  const t = useTranslations("contact");
  const tCommon = useTranslations("common");
  const whatsappHref = `https://wa.me/${siteConfig.person.whatsapp}?text=${encodeURIComponent(t("whatsappMessage"))}`;

  return (
    <section id={sectionIds.contact} className="relative section-padding">
      <div aria-hidden className="pointer-events-none absolute inset-0 cinematic-light-soft" />
      <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal className="flex flex-col gap-6">
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-accent">
            <span className="h-px w-6 bg-accent/60" aria-hidden />
            {t("eyebrow")}
          </span>
          <h2 className="font-display text-4xl font-medium leading-[1.1] text-balance sm:text-5xl">
            {t("title")}
          </h2>
          <div className="flex flex-col items-start gap-5">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="size-5" />
                {t("whatsappCta")}
                <span className="sr-only"> — {tCommon("opensInNewTab")}</span>
              </a>
            </Button>
            <a
              href={`mailto:${siteConfig.person.email}`}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-300 ease-cinematic hover:text-accent"
            >
              <Mail className="size-4" aria-hidden />
              {siteConfig.person.email}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
