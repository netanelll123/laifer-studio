"use client";

import { useTranslations } from "next-intl";
import { Pause, Play } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Pause/play control for autoplaying background motion (WCAG 2.2.2 Pause,
 * Stop, Hide). Presentational — the owner holds `paused` and applies it to
 * its own video/montage. The label names the action the button will take,
 * so it flips with state; `aria-pressed` reflects the paused state.
 */
export function BackgroundVideoToggle({
  paused,
  onToggle,
  className,
}: {
  paused: boolean;
  onToggle: () => void;
  className?: string;
}) {
  const t = useTranslations("common");

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={paused}
      aria-label={paused ? t("playBackgroundVideo") : t("pauseBackgroundVideo")}
      className={cn(
        "inline-flex size-11 items-center justify-center rounded-full border border-white/20 bg-background/40 text-foreground/80 backdrop-blur-sm transition-colors duration-300 ease-cinematic hover:border-white/40 hover:text-foreground",
        className
      )}
    >
      {paused ? (
        <Play className="size-4 translate-x-px" fill="currentColor" aria-hidden />
      ) : (
        <Pause className="size-4" fill="currentColor" aria-hidden />
      )}
    </button>
  );
}
