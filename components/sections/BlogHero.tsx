import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import BlogCard from '../BlogCard/BlogCard';
import { getBlogs } from '@/lib/api/blog';


export default async function BlogHero() {

  const blogs = await getBlogs({ limit: 3, skip: 0 });

  return (
    <section id='bloghero'>
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-6">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl font-serif text-stone-900 mb-10">
            Блог о строительстве
          </h2>
          <Link
            href="/blog"
            className="hidden md:flex items-center gap-2 text-stone-900 hover:text-wood-500 transition-colors font-medium border-b border-stone-200 hover:border-wood-500 pb-1"
          >
            Весь каталог <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <BlogCard blog={blog} key={blog.id} />
          ))}
        </div>
      </div>

    </section>
  );
}



