"use client"
import { useEffect, useState } from "react";
import BlogsGrid from "./components/BlogsGrid";
import { getBlogs } from "@/lib/api/blog";
import { IBlogPost } from "@/types/types";

export default function CatalogProgectsPage() {
    const [blogs, setProjects] = useState<IBlogPost[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    // ====== FETCH ======
    useEffect(() => {

        const fetchData = async () => {
            setIsLoading(true);
            setIsError(false);
            try {
                const data = await getBlogs();
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
                Загрузка списка статей…
            </div>
        );
    }

    if (isError || !blogs) {
        return (
            <div className="py-32 text-center text-red-500">
                Блог не найден
            </div>
        );
    }



    return (
        <main className="py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <header className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-4">
                        Блог про стройку
                    </h1>
                    <p className="text-stone-500 max-w-2xl">
                        В этом блоге мы делимся советами, идеями и примерами реализации проектов,
                        чтобы вдохновить на создание красивого и комфортного жилья
                    </p>
                </header>
                <BlogsGrid blogs={blogs} />
            </div>
        </main>
    )
}