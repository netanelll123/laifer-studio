import { Reveal } from "@/components/reveal";
import { scaleIn, stagger } from "@/lib/motion";

/** A responsive grid of images with optional captions — used for location
 *  sets, character sheets and portrait galleries throughout the article. */
export function CaseStudySectionGallery({
  items,
}: {
  items: { src: string; alt: string; caption?: string }[];
}) {
  return (
    <div className="mx-auto max-w-6xl px-5 sm:px-8">
      <Reveal
        variants={stagger(0.08)}
        className="grid grid-cols-2 gap-4 sm:grid-cols-3"
      >
        {items.map((item, i) => (
          <Reveal key={i} variants={scaleIn}>
            <figure>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="aspect-square w-full rounded-2xl border border-border object-cover"
              />
              {item.caption ? (
                <figcaption className="mt-2 text-center text-sm text-muted-foreground">
                  {item.caption}
                </figcaption>
              ) : null}
            </figure>
          </Reveal>
        ))}
      </Reveal>
    </div>
  );
}
