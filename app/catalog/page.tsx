import { getProjects } from "@/lib/api/project";
import ProjectsGrid from "./components/ProjectsGrid";

export default async function CatalogProgectsPage(){
    const projects = await getProjects()

    return (
        <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-4">
              Проекты домов
            </h1>
            <p className="text-stone-500 max-w-2xl">
              Готовые архитектурные решения энергоэффективных домов
              в северной эстетике.
            </p>
          </header>
  
          <ProjectsGrid projects={projects} />
        </div>
      </main>
    )
}