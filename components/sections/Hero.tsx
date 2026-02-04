import Image from "next/image";
import HeroClient from "../client/HeroClient";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[90vh] min-h-[400px] w-full bg-stone-900 overflow-hidden">
        <Image
          src="/images/hero.webp"
          alt="Modern SIP House"
          fill
          className="object-cover opacity-95 w-[320px] sm:w-full"
          priority
        />

        <div className="absolute inset-0" />

        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-4xl space-y-8 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight">
              Эстетика северной <br />
              <span className="italic font-light text-stone-200">
                архитектуры
              </span>
            </h1>

            <p className="text-lg md:text-xl text-stone-300 font-medium max-w-2xl mx-auto tracking-wide">
              Проектируем и строим энергоэффективные дома из SIP-панелей.
              Премиальное качество, скандинавский минимализм и надежность.
            </p>

            {/* 👇 клиентская часть */}
            <HeroClient />
          </div>
        </div>
      </div>
    </section>
  );
}