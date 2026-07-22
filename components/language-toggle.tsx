"use client";

import { useLocale, useTranslations } from "next-intl";
import { useTransition } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

/** Compact HE / EN switch that preserves the current path and locale prefix. */
export function LanguageToggle({ className }: { className?: string }) {
  const t = useTranslations("languageToggle");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const switchTo = (next: Locale) => {
    if (next === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-white/5 p-0.5 text-xs font-medium transition-opacity duration-300 ease-cinematic",
        isPending && "opacity-60",
        className
      )}
      role="group"
      aria-label={t("label")}
    >
      {routing.locales.map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => switchTo(code)}
          aria-pressed={code === locale}
          className={cn(
            // Bigger tap target on touch/mobile (~44px) than on desktop,
            // where a mouse cursor doesn't need the extra padding.
            "rounded-full px-3.5 py-2.5 uppercase transition-colors duration-300 ease-cinematic sm:px-3 sm:py-1",
            code === locale
              ? "bg-accent text-accent-foreground"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {code}
        </button>
      ))}
    </div>
  );
}
