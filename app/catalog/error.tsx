"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="py-20 text-center">
      <p className="mb-4 text-red-600">{error.message}</p>
      <button
        onClick={reset}
        className="border px-4 py-2"
      >
        Повторить
      </button>
    </div>
  );
}
