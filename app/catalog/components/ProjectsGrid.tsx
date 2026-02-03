"use client"

import { IProject } from "@/types/types";
import { ProjectCard } from "@/components/ProjectCard/ProjectCard";
import { YandexBannerMock } from "@/components/YandexBannerMock";

interface Props {
  projects: IProject[];
}

export default function ProjectsGrid({ projects }: Props) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <YandexBannerMock/>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
}
