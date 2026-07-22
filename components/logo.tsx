import { cn } from "@/lib/utils";

/**
 * Header brand lockup: the crown stacked above the wordmark, matching the
 * footer's full lockup treatment. Text is baked into the artwork (the fixed
 * brand mark, unchanged per locale — only the accessible name localizes).
 * Derived from the real logo art (`public/logo-header.png`).
 */
export function Logo({
  brand,
  className,
}: {
  brand: string;
  className?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo-header.png"
      alt={brand}
      className={cn(
        "h-14 w-auto transition-opacity duration-300 hover:opacity-80 sm:h-16",
        className
      )}
    />
  );
}

/**
 * Full stacked lockup (crown + wordmark + "Creative Video") for the footer,
 * used as a cinematic brand sign-off. Same artwork, larger size.
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
