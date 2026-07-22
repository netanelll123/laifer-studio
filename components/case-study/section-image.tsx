import { Reveal } from "@/components/reveal";
import { scaleIn } from "@/lib/motion";

/** A large single image beat, with an optional caption. */
export function CaseStudySectionImage({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <div className="mx-auto max-w-5xl px-5 sm:px-8">
      <Reveal variants={scaleIn}>
        <figure>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className="aspect-[16/10] w-full rounded-2xl border border-border object-cover"
          />
          {caption ? (
            <figcaption className="mt-3 text-center text-sm text-muted-foreground">
              {caption}
            </figcaption>
          ) : null}
        </figure>
      </Reveal>
    </div>
  );
}
