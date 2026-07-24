"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

/** Route-segment error boundary — covers the homepage and case-study pages.
 *  Renders inside the root layout, so locale, fonts and RTL/LTR direction
 *  are already correct here. */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations("common.error");

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[100svh] flex-col items-center justify-center gap-6 px-5 text-center">
      <h1 className="font-display text-3xl font-medium leading-[1.1] text-balance sm:text-4xl">
        {t("title")}
      </h1>
      <p className="max-w-md text-base text-muted-foreground sm:text-lg">
        {t("description")}
      </p>
      <Button onClick={() => reset()}>{t("retry")}</Button>
    </div>
  );
}
