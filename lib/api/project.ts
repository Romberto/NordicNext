import { IProject } from "@/types/types";


// получить список проектов
export async function getProjects(
  { limit, skip }: { limit?: number; skip?: number } = {}
): Promise<IProject[]> {
  const res = await fetch(
    `https://projhouse.ru/api/v1/projects/?skip=${skip ?? 0}&limit=${limit ?? 100}&only_published=true`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error("Ошибка загрузки проектов");
  }
  return res.json();
}


// получить проект по slug
export async function getProjectsBySlug(
  { slug }: { slug: string }
): Promise<IProject> {
  const res = await fetch(
    `https://projhouse.ru/api/v1/projects/${slug}`
  );

  if (!res.ok) {
    throw new Error("Ошибка загрузки проекта");
  }

  return res.json();
}



