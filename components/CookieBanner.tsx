"use client";

import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Проверяем, не давал ли пользователь согласие
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) setIsVisible(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-3xl bg-white border border-stone-200 shadow-lg rounded-lg p-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-stone-700">
      Мы используем Cookies и Яндекс.Метрику для анализа посещаемости сайта и улучшения его работы. Персональные данные не собираются.
      .{" "}
        <a href="/privacy" className="text-blue-600 underline">
        Подробнее в Политике использования Cookies
        </a>.
      </p>
      <button
        className="bg-stone-900 text-white px-4 py-2 rounded-md hover:bg-stone-800 transition"
        onClick={acceptCookies}
      >
        Принять
      </button>
    </div>
  );
}
