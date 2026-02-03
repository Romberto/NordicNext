"use client"

import { Button } from "@/components/Button/Button";
import { TELEGRAM } from "@/config/constants";
import { getBlogBySlug } from "@/lib/api/blog";
import { IBlogPost } from "@/types/types";
import { Send } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import NextImage from "next/image";
import { YandexBannerMock } from "@/components/YandexBannerMock";


const BlogDetailClient = () => {
  const params = useParams();
  const slug = params.slug as string;

  const [blog, setBlog] = useState<IBlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // ====== FETCH ======
  useEffect(() => {
    if (!slug) {
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      setError(false);
      try {
        const data = await getBlogBySlug({ slug });
        setBlog(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  // ====== СОСТОЯНИЯ ======
  if (loading) {
    return (
      <div className="py-32 text-center text-stone-500">Загрузка проекта…</div>
    );
  }

  if (error || !blog) {
    return (
      <div className="py-32 text-center text-red-500">Проект не найден</div>
    );
  }

  return (
    <article className="animate-fade-in pt-12 pb-24">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-serif text-stone-900 mb-6 leading-tight">
            {blog.title}
          </h1>
          <div className="mb-5"><YandexBannerMock/></div>
        </div>

        <NextImage
          src={blog.public_url}
          alt={blog.title}
          width={1280}
          height={720}
          className="w-full aspect-video object-cover mb-12 rounded-sm shadow-xl shadow-stone-200"
          priority={false}
        />

        <div
          className="prose prose-stone prose-lg max-w-none font-light text-stone-800 leading-relaxed text-justify mb-6"
          dangerouslySetInnerHTML={{ __html: blog.article }}
        />

        <div className="bg-stone-900 text-white p-8 shadow-lg hover:shadow-xl transition">
          <div className="flex items-center gap-4 mb-6">
            <Send className="w-6 h-6 text-white" />
            <h3 className="text-xl font-serif">Telegram</h3>
          </div>

          <p className="text-stone-300 mb-6">
            Напишите нам в Telegram — ответим в течение дня.
          </p>

          <a
            href={`https://t.me/${TELEGRAM}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="w-full bg-white text-stone-900 hover:bg-stone-100">
              Написать в Telegram
            </Button>
          </a>
        </div>
      </div>
    </article>
  );
};

export default BlogDetailClient;
