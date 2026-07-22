"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { LanguageToggle } from "@/components/language-toggle";
import { navItems, sectionIds } from "@/content/site";
import { cn } from "@/lib/utils";

/** Fixed header: transparent over the hero, frosted after scroll. Includes a
 *  mobile drawer, language toggle and primary CTA. */
export function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ease-cinematic",
        scrolled
          ? "border-b border-border bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent"
      )}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 sm:h-24 sm:px-8">
        <a href={`/${locale}#${sectionIds.hero}`} aria-label={t("brand")}>
          <Logo brand={t("brand")} />
        </a>

        <ul className="hidden items-center gap-11 lg:flex">
          {navItems.map((item) => (
            <li key={item.key}>
              <a
                href={`/${locale}${item.href}`}
                className="text-[15px] text-foreground/70 transition-colors duration-300 ease-cinematic hover:text-foreground"
              >
                {t(item.key)}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <LanguageToggle />
          <Button asChild size="md">
            <a href={`/${locale}#${sectionIds.contact}`}>{t("cta")}</a>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t("closeMenu") : t("openMenu")}
            aria-expanded={open}
            className="inline-flex size-11 items-center justify-center rounded-full border border-border text-foreground"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer. `inert` when closed: the links stay in the DOM for the
          collapse transition, but must not be keyboard-tabbable or exposed to
          screen readers while visually hidden. */}
      <div
        className={cn(
          "overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl transition-[max-height,opacity] duration-500 ease-cinematic lg:hidden",
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        )}
        {...(!open ? { inert: true } : {})}
      >
        <ul className="flex flex-col gap-1 px-5 py-4">
          {navItems.map((item) => (
            <li key={item.key}>
              <a
                href={`/${locale}${item.href}`}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-base text-foreground/80 transition-colors duration-300 ease-cinematic hover:bg-white/5 hover:text-foreground"
              >
                {t(item.key)}
              </a>
            </li>
          ))}
          <li className="mt-2">
            <Button asChild size="lg" className="w-full">
              <a href={`/${locale}#${sectionIds.contact}`} onClick={() => setOpen(false)}>
                {t("cta")}
              </a>
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
