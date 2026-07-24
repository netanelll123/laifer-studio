import { Loader2 } from "lucide-react";

/** Route-transition loading state — same spinner treatment already used by
 *  the contact form's submit button, so it doesn't introduce a new motion. */
export default function Loading() {
  return (
    <div
      className="flex min-h-[100svh] items-center justify-center"
      role="status"
      aria-label="Loading"
    >
      <Loader2 className="size-8 animate-spin text-accent" aria-hidden />
    </div>
  );
}
