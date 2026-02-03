import { API_URL } from "@/config/constants";
import { IBlogPost } from "@/types/types";

// получить список блогов

export async function getBlogs(
  { limit, skip }: { limit?: number; skip?: number } = {}
): Promise<IBlogPost[]> {
  const res = await fetch(
    `${API_URL}/blog/?skip=${skip ?? 0}&limit=${limit ?? 100}&only_published=false`,
    {     
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Ошибка загрузки блогов");
  }
  return res.json();
}

// получить блог по slug

export async function getBlogBySlug(
    { slug }: { slug: string }
  ): Promise<IBlogPost> {
    const res = await fetch(
      `${API_URL}/blog/${slug}`
    );
  
    if (!res.ok) {
      throw new Error("Ошибка загрузки проекта");
    }
  
    return res.json();
  }