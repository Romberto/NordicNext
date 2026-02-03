"use client"

import BlogCard from "@/components/BlogCard/BlogCard";
import { IBlogPost } from "@/types/types";

interface Props {
  blogs: IBlogPost[];
}

export default function BlogsGrid({ blogs }: Props) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogs.map((project) => (
        <BlogCard key={project.id} blog={project} />
      ))}
    </section>
  );
}