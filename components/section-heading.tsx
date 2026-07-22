import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";
import { stagger } from "@/lib/motion";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "start" | "center";
  className?: string;
}

/** Shared eyebrow + title + subtitle block used to open each section. */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      variants={stagger(0.1)}
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start",
        className
      )}
    >
      <Reveal>
        <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-accent">
          <span className="h-px w-6 bg-accent/60" aria-hidden />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal>
        <h2 className="font-display text-4xl font-medium leading-[1.1] text-balance sm:text-5xl">
          {title}
        </h2>
      </Reveal>
      {subtitle ? (
        <Reveal>
          <p
            className={cn(
              "max-w-xl text-base text-muted-foreground sm:text-lg",
              align === "center" && "mx-auto"
            )}
          >
            {subtitle}
          </p>
        </Reveal>
      ) : null}
    </Reveal>
  );
}
