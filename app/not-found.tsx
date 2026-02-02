// app/not-found.tsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function NotFoundPage() {
  const router = useRouter();

  useEffect(() => {
    // можно редирект на главную или оставить статичную 404
    router.push('/');
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">404 — Страница не найдена</h1>
    </div>
  );
}
