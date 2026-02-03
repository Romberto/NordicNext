
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import { getProjects } from "@/lib/api/project";



export default async function ProjectsHero() {
    const projects = await getProjects({ limit: 3, skip: 0 });

    return (
        <section id="projects" className="py-10">
            <div className="max-w-7xl mx-auto px-4 md:px-8">

                {/* Header */}
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-4">
                            Популярные проекты
                        </h2>
                        <p className="text-stone-500 font-light max-w-md">
                            Функциональные планировки и выверенная архитектура,
                            которую выбирают наши клиенты.
                        </p>
                    </div>

                    <Link
                        href="/catalog"
                        className="hidden md:flex items-center gap-2 text-stone-900 hover:text-wood-500 transition-colors font-medium border-b border-stone-200 hover:border-wood-500 pb-1"
                    >
                        Весь каталог <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project} />
                    ))}
                </div>

                {/* Mobile button */}
                <div className="mt-8 md:hidden text-center">
                    <Link
                        href="/catalog"
                        className="inline-flex items-center justify-center border border-stone-300 px-6 py-3 text-sm font-medium hover:bg-stone-50 transition"
                    >
                        Смотреть все
                    </Link>
                </div>

            </div>
        </section>
    );
}
