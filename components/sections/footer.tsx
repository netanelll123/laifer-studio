import { useTranslations } from "next-intl";
import { LogoFull } from "@/components/logo";
import { navItems, sectionIds, siteConfig } from "@/content/site";

/** Footer: brand, tagline, in-page nav, social links and legal line. */
export function Footer() {
  const t = useTranslations("nav");
  const tf = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <a
              href={`#${sectionIds.hero}`}
              aria-label={t("brand")}
              className="inline-block"
            >
              <LogoFull brand={t("brand")} className="-ms-2" />
            </a>
            <p className="mt-4 max-w-xs font-display text-lg text-foreground/80">
              {tf("tagline")}
            </p>
          </div>

          <nav aria-label={tf("navTitle")}>
            <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              {tf("navTitle")}
            </h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              {navItems.map((item) => (
                <li key={item.key}>
                  <a
                    href={item.href}
                    className="text-sm text-foreground/70 transition-colors duration-300 ease-cinematic hover:text-foreground"
                  >
                    {t(item.key)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              {tf("socialTitle")}
            </h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              {siteConfig.social.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-foreground/70 transition-colors duration-300 ease-cinematic hover:text-foreground"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {year} {siteConfig.person.name}. {tf("rights")}
          </p>
          <p>{tf("madeWith")}</p>
        </div>
      </div>
    </footer>
  );
}
