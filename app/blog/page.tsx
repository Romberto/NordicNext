import BlogsGrid from "./components/BlogsGrid";
import { getBlogs } from "@/lib/api/blog";

export default async function CatalogProgectsPage(){
    const blogs = await getBlogs()

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