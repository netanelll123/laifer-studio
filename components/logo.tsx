import { cn } from "@/lib/utils";

/**
 * Header brand lockup: the crown mark (off-white, transparent) beside the
 * localized wordmark. On hover the wordmark warms to the accent gold.
 * Assets are derived from the real logo art (`public/logo-mark.png`).
 */
export function Logo({
  brand,
  className,
}: {
  brand: string;
  className?: string;
}) {
  return (
    <span className={cn("group/logo inline-flex items-center gap-2.5", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo-mark.png"
        alt=""
        aria-hidden
        className="h-8 w-auto transition-opacity duration-300 group-hover/logo:opacity-80 sm:h-9"
      />
      <span className="font-display text-xl font-medium tracking-tight transition-colors duration-300 group-hover/logo:text-accent sm:text-2xl">
        {brand}
      </span>
    </span>
  );
}

/**
 * Full stacked lockup (crown + wordmark + "Creative Video") for the footer,
 * used as a cinematic brand sign-off. Text is baked into the artwork.
 */
export function LogoFull({
  brand,
  className,
}: {
  brand: string;
  className?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo-full.png"
      alt={brand}
      className={cn("h-24 w-auto sm:h-28", className)}
    />
  );
}
