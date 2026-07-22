/**
 * WhatsApp glyph — not in lucide-react (a generic icon set, no brand marks).
 * Rendered in `currentColor` to match the site's monochrome icon treatment
 * (no icon anywhere uses a brand color; this one shouldn't either).
 */
export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.81L2 22l5.42-1.35a9.85 9.85 0 0 0 4.62 1.15h.01c5.46 0 9.9-4.45 9.9-9.91C21.95 6.45 17.5 2 12.04 2Zm5.8 14.03c-.24.68-1.4 1.31-1.93 1.36-.5.05-1.03.24-3.42-.79-2.9-1.25-4.77-4.14-4.92-4.33-.14-.19-1.18-1.57-1.18-2.99 0-1.42.75-2.12 1.02-2.41.27-.29.58-.36.78-.36h.55c.18 0 .42-.02.64.5.24.58.82 2 .89 2.14.07.15.11.32.02.51-.09.19-.14.31-.28.48-.14.16-.29.36-.42.48-.14.14-.28.28-.12.56.16.28.72 1.19 1.55 1.93 1.06.95 1.96 1.24 2.24 1.38.28.14.44.12.6-.07.16-.19.69-.8.87-1.08.18-.28.36-.23.61-.14.25.09 1.6.75 1.87.89.27.14.45.21.52.32.07.12.07.68-.17 1.36Z" />
    </svg>
  );
}
