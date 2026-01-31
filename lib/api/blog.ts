import { IBlogPost } from "@/types/types";


// получить список блогов

export async function getBlogs(
  { limit, skip }: { limit?: number; skip?: number } = {}
): Promise<IBlogPost[]> {
  const res = await fetch(
    `https://projhouse.ru/api/v1/blog/?skip=${skip ?? 0}&limit=${limit ?? 100}&only_published=false`,
    {
      next: { revalidate: 60 },
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
      `https://projhouse.ru/api/v1/blog/${slug}`
    );
  
    if (!res.ok) {
      throw new Error("Ошибка загрузки проекта");
    }
  
    return res.json();
  }