import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/sections/project-card";
import { projects } from "@/content/collections/projects";
import { sectionIds } from "@/content/site";

/** Exactly three featured projects as large cinematic rows. Hover reveals a
 *  muted preview clip; layout alternates sides on desktop. Server Component —
 *  the only interactive piece (hover-to-play) lives in `ProjectCard`. */
export function FeaturedProjects() {
  const t = useTranslations("projects");

  return (
    <section id={sectionIds.work} className="section-padding">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <div className="mt-16 flex flex-col gap-16 sm:gap-24">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
              reversed={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
