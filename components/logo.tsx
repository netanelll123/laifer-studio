import { cn } from "@/lib/utils";

/**
 * Brand lockup. Renders the real logo artwork when available at
 * `/logo.png` (a transparent PNG placed in `public/`); otherwise falls back to
 * a clean wordmark. `brand` comes from i18n so it localizes.
 *
 * NOTE: drop a transparent-background logo at `public/logo.png` to activate the
 * image lockup (see `withImage`).
 */
export function Logo({
  brand,
  className,
  withImage = false,
}: {
  brand: string;
  className?: string;
  withImage?: boolean;
}) {
  if (withImage) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="/logo.png"
        alt={brand}
        className={cn("h-9 w-auto sm:h-10", className)}
      />
    );
  }

  return (
    <span
      className={cn(
        "font-display text-xl font-medium tracking-tight sm:text-2xl",
        className
      )}
    >
      {brand}
    </span>
  );
}
