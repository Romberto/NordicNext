// components/YandexMetrika.tsx
"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";

declare global {
    interface Window {
      ym: (...args: any[]) => void;
    }
  }

interface YandexMetrikaProps {
  counterId: number;
}

export const YandexMetrika = ({ counterId }: YandexMetrikaProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Отслеживаем изменения маршрута
  useEffect(() => {
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "");
    if (typeof window.ym === "function") {
      window.ym(counterId, "hit", url);
    }
  }, [pathname, searchParams, counterId]);

  return (
    <>
      {/* Подключаем скрипт Яндекс.Метрики */}
      <Script
        id={`yandex-metrika-${counterId}`}
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {
                  if (document.scripts[j].src === r) { return; }
              }
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=${counterId}', 'ym');

            ym(${counterId}, 'init', {
              ssr:true,
              webvisor:true,
              clickmap:true,
              ecommerce:"dataLayer",
              referrer: document.referrer,
              url: location.href,
              accurateTrackBounce:true,
              trackLinks:true
            });
          `,
        }}
      />
      {/* fallback для отключенного JS */}
      <noscript>
        <div>
          <img
            src={`https://mc.yandex.ru/watch/${counterId}`}
            style={{ position: "absolute", left: "-9999px" }}
            alt=""
          />
        </div>
      </noscript>
    </>
  );
};
