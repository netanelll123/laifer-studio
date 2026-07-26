import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/section-heading";
import { AdCard } from "@/components/sections/ad-card";
import { ads } from "@/content/collections/ads";
import { sectionIds } from "@/content/site";

/** Small showcase of ad/commercial spots — lighter-weight than Featured
 *  Projects, a compact grid rather than large alternating rows. Server
 *  Component — the only interactive piece (click-to-play) lives in `AdCard`. */
export function Commercials() {
  const t = useTranslations("ads");

  return (
    <section id={sectionIds.ads} className="section-padding">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />

        <div className="mt-16 grid justify-center gap-5 sm:grid-cols-2">
          {ads.map((ad) => (
            <AdCard key={ad.slug} ad={ad} />
          ))}
        </div>
      </div>
    </section>
  );
}
