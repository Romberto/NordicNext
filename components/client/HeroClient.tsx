"use client";

import { useRouter } from "next/navigation";
import { Button } from "../Button/Button";

export default function HeroClient() {
  const router = useRouter();

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
      <Button
        onClick={() => router.push("/catalog")}
        className="min-w-[200px]"
      >
        Смотреть проекты
      </Button>

      <Button
        variant="outline"
        onClick={() => router.push("/contacts")}
        className="min-w-[200px] text-white border-white/30 hover:bg-white hover:text-stone-900 hover:border-white"
      >
        контакты
      </Button>
    </div>
  );
}
