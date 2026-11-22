"use client";

import type { ComponentProps } from "react";
import { trackLead } from "@/lib/track";

/** Plain `<a>` that reports a GA4 lead on click. Client-only wrapper so server
 *  sections (e.g. Contact) can stay Server Components. */
export function TrackedLink({
  lead,
  onClick,
  ...props
}: ComponentProps<"a"> & { lead: "whatsapp" | "email" }) {
  return (
    <a
      {...props}
      onClick={(e) => {
        trackLead(lead);
        onClick?.(e);
      }}
    />
  );
}
