'use client'

import { getProjects } from "@/lib/api/project";
import ProjectsGrid from "./components/ProjectsGrid";
import { useEffect, useState } from "react";
import { IProject } from "@/types/types";
import { YandexBannerMock } from "@/components/YandexBannerMock";

export default function CatalogProgectsPage() {

  const [projects, setProjects] = useState<IProject[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  // ====== FETCH ======
  useEffect(() => {

    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const data = await getProjects();
        setProjects(data);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // ====== СОСТОЯНИЯ ======
  if (isLoading) {
    return (
      <div className="py-32 text-center text-stone-500">
        Загрузка проекта…
      </div>
    );
  }

  if (isError || !projects) {
    return (
      <div className="py-32 text-center text-red-500">
        Проект не найден
      </div>
    );
  }


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