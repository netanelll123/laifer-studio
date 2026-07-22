import { CaseStudySectionText } from "@/components/case-study/section-text";
import { CaseStudySectionImage } from "@/components/case-study/section-image";
import { CaseStudySectionGallery } from "@/components/case-study/section-gallery";
import { CaseStudyQuote } from "@/components/case-study/quote";
import type { CaseStudyBlock } from "@/content/types";

/**
 * Renders the article body: an ordered list of content blocks, each free to
 * be text, image, gallery or a quote moment. This is the reusable part of
 * the template — a future case study just supplies a different `blocks`
 * array; no component changes needed.
 */
export function CaseStudyBody({ blocks }: { blocks: CaseStudyBlock[] }) {
  return (
    <div className="flex flex-col gap-20 sm:gap-28">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "text":
            return (
              <CaseStudySectionText
                key={i}
                title={block.title}
                paragraphs={block.paragraphs}
              />
            );
          case "image":
            return (
              <CaseStudySectionImage
                key={i}
                src={block.src}
                alt={block.alt}
                caption={block.caption}
              />
            );
          case "gallery":
            return <CaseStudySectionGallery key={i} items={block.items} />;
          case "quote":
            // Full-bleed band, so it isn't constrained by the flow's own gap.
            return (
              <div key={i} className="-my-10 sm:-my-14">
                <CaseStudyQuote lines={block.lines} />
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
