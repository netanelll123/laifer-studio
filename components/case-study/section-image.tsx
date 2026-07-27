import Image from "next/image";
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
        <figure className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(min-width: 1024px) 896px, 100vw"
            className="object-cover"
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
