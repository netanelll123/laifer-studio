"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useTranslations } from "next-intl";
import { X } from "lucide-react";

const FOCUSABLE_SELECTOR =
  'button, [href], input, select, textarea, iframe, video, [tabindex]:not([tabindex="-1"])';

/**
 * Shared in-page video lightbox, rendered via a portal to `document.body`. A
 * portal is required rather than rendering inline: callers typically sit
 * inside a `Reveal`/`motion.div` whose fade-in animation leaves a resting
 * `transform` style, which would otherwise turn this modal's
 * `position: fixed` into "fixed to that ancestor" instead of the viewport.
 *
 * Pass `youtubeId` for a click-to-load nocookie embed in a 16:9 box, or
 * `videoSrc` for a local file — sized by its own natural aspect ratio
 * (capped to the viewport) instead of forced into 16:9, since local clips
 * here are portrait/vertical.
 */
export function VideoModal({
  open,
  onClose,
  youtubeId,
  videoSrc,
  title,
}: {
  open: boolean;
  onClose: () => void;
  youtubeId?: string;
  videoSrc?: string;
  title: string;
}) {
  const tCommon = useTranslations("common");
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<Element | null>(null);

  // Dialog focus management per the ARIA APG pattern: move focus in on open,
  // trap Tab/Shift+Tab within the dialog's two focusable elements (close
  // button + media), and return focus to whatever opened it on close —
  // without this, keyboard/screen-reader users can tab straight through the
  // modal into the page behind it (WCAG 2.4.3, 2.1.2).
  useEffect(() => {
    if (!open) return;
    triggerRef.current = document.activeElement;
    closeButtonRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        FOCUSABLE_SELECTOR
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      if (triggerRef.current instanceof HTMLElement) triggerRef.current.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 p-4 backdrop-blur-sm sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        className={
          videoSrc
            ? "relative flex max-h-[80vh] w-auto items-center justify-center"
            : "relative w-full max-w-4xl"
        }
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label={tCommon("close")}
          className="absolute -top-11 end-0 inline-flex size-9 items-center justify-center rounded-full border border-border bg-white/5 text-foreground transition-colors duration-300 ease-cinematic hover:bg-white/10"
        >
          <X className="size-4" />
        </button>
        {videoSrc ? (
          <video
            src={videoSrc}
            title={title}
            controls
            autoPlay
            playsInline
            className="max-h-[80vh] w-auto max-w-full rounded-2xl border border-border"
          />
        ) : (
          <div className="aspect-video overflow-hidden rounded-2xl border border-border bg-card">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1`}
              title={title}
              className="size-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}
