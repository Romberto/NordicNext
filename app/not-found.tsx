// app/not-found.tsx
'use client'; // Важно! Делает компонент клиентским

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function NotFoundPage() {
  const searchParams = useSearchParams();
  const ref = searchParams.get('ref'); // пример: ?ref=google

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-5xl font-bold mb-4 text-red-600">404</h1>
      <p className="text-xl mb-2">Страница не найдена</p>
      {ref && <p className="text-sm text-gray-500">Вы пришли с: {ref}</p>}
      <Link
        href="/"
        className="mt-4 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        На главную
      </Link>
    </div>
  );
}
