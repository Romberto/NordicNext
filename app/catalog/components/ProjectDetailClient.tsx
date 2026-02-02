"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Check, Home, Layers, Ruler } from "lucide-react";
import { Button } from "../../../components/Button/Button";
import { TELEGRAM } from "@/config/constants";
import { IProject } from "@/types/types";
import { getProjectsBySlug } from "@/lib/api/project";




export default function ProjectDetailClient() {
  const params = useParams();
  const slug = params.slug as string;
  const router = useRouter();

  const [project, setProject] = useState<IProject | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [activeImage, setActiveImage] = useState<string | null>(null);

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
        const data = await getProjectsBySlug({ slug });
        setProject(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, [slug]);
  

  // ====== АДАПТАЦИЯ ДАННЫХ ======
  const previewImage = useMemo(
    () =>
      project?.images.find((img) => img.is_preview)?.public_url ?? null,
    [project]
  );

  const galleryImages = useMemo(
    () =>
      project?.images
        .filter((img) => img.is_gallery)
        .map((img) => img.public_url) ?? [],
    [project]
  );

  const plans = useMemo(
    () =>
      project?.images
        .filter((img) => img.is_plan)
        .map((img) => img.public_url) ?? [],
    [project]
  );

  // ====== СОСТОЯНИЯ ======
  if (loading) {
    return (
      <div className="py-32 text-center text-stone-500">
        Загрузка проекта…
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="py-32 text-center text-red-500">
        Проект не найден
      </div>
    );
  }

  return (
    <div className="animate-fade-in pb-20">
      {/* Header Image */}
      <div className="relative h-[60vh] w-full bg-stone-900">
        {previewImage && (
          <img
            src={previewImage}
            alt={project.title}
            className="w-full h-full object-cover opacity-90"
          />
        )}

        <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-8 md:p-16">
          <div className="max-w-7xl mx-auto text-white">
            <h1 className="text-4xl md:text-6xl font-serif mb-4">
              {project.title}
            </h1>

            <div className="flex flex-wrap gap-6 text-sm font-medium tracking-wide uppercase">
              <div className="flex items-center gap-2">
                <Ruler className="w-4 h-4" /> {project.quadrature} м²
              </div>
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4" /> {project.floors} этаж(а)
              </div>
              <div className="flex items-center gap-2">
                <Home className="w-4 h-4" /> {project.bedrooms} спальни
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-12!">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main */}
          <div className="lg:col-span-2 space-y-12">

            <div>
              <h2 className="text-2xl font-serif mb-4">О проекте</h2>
              <p className="text-lg text-stone-600 font-light leading-relaxed">
                {project.shot_description}
              </p>
            </div>

            {galleryImages.length > 0 && (
              <div>
                <h3 className="text-xl font-serif mb-6 border-b pb-2">
                  Галерея
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  {galleryImages.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      className="h-48 md:h-64 object-cover cursor-pointer"
                      onClick={() => setActiveImage(img)}
                    />
                  ))}
                </div>
              </div>
            )}

            {plans.length > 0 && (
              <div>
                <h3 className="text-xl font-serif mb-6 border-b pb-2">
                  Планировки
                </h3>

                <div className="space-y-8">
                  {plans.map((plan, idx) => (
                    <img
                      key={idx}
                      src={plan}
                      className="cursor-pointer"
                      onClick={() => setActiveImage(plan)}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="sticky top-24">
            <div className="bg-white p-8 shadow-xl">
              {["Теплый контур", "Окна Rehau", "Монтаж"].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm">
                  <Check className="w-4 h-4" /> {item}
                </div>
              ))}

              <Button
                className="w-full mt-6"
                onClick={() =>
                  window.open(`https://t.me/${TELEGRAM}`, "_blank")
                }
              >
                Оставить заявку
              </Button>
            </div>
          </div>
        </div>
      </section>

      {activeImage && (
        <div
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
        >
          <img
            src={activeImage}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </div>
  );
}
