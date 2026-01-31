import { IBlogPost } from '@/types/types';
import Link from 'next/link';
import React from 'react';

interface BlogCardProps {
    blog: IBlogPost
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
    return (
        <Link
            href={`/blog/${blog.slug}`}
            className="group block cursor-pointer"
        >
            <div className="aspect-[3/2] overflow-hidden bg-stone-100 mb-4">
                <img
                    src={blog.public_url}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
            </div>

            <div className="text-xs text-wood-500 font-bold uppercase tracking-widest mb-2">
                {blog.category}
            </div>

            <h3 className="text-xl font-serif text-stone-900 mb-2 leading-tight group-hover:text-wood-500 transition-colors">
                {blog.title}
            </h3>

            <p className="text-sm text-stone-500 font-light line-clamp-2">
                {blog.excerpt}
            </p>
        </Link>
    );
};

export default BlogCard;