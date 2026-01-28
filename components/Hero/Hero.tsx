"use client"
import Image from "next/image";
import { Button } from "../Button/Button";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();
  return (
    <section className="relative overflow-hidden">
    <div className="relative h-[90vh] min-h-[600px] w-full bg-stone-900 overflow-hidden">
      <Image
        src='/images/hero.webp'
        alt="Modern SIP House"
        fill
        className="object-cover opacity-95"
        priority
      />
      <div className="absolute inset-0" />
      <div className="absolute inset-0 flex items-center justify-center text-center px-4">
        <div className="max-w-4xl space-y-8 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight">
            Эстетика северной <br />
            <span className="italic font-light text-stone-200">архитектуры</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-300 font-light max-w-2xl mx-auto tracking-wide">
            Проектируем и строим энергоэффективные дома из SIP-панелей. 
            Премиальное качество, скандинавский минимализм и надежность.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button onClick={() => router.push("/catalog")} className="min-w-[200px]">
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
        </div>
      </div>
    </div>
    </section>
  );
}
