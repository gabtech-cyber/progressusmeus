import Link from "next/link";

export default function HomePage() {
  return (
    <main className="max-w-xl mx-auto px-6 py-16 font-sans">
      {/* 1. HEADER */}
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-white mb-2">
          My Computing Notes
        </h1>
        <p className="text-zinc-400 text-sm">
          My personal learning log from HTML basics to full-stack.
        </p>

        {/* Big simple button to open the notes */}
        <div className="mt-6">
          <Link
            href="/docs"
            className="inline-block bg-blue text-white font-semibold text-sm px-5 py-2.5 rounded hover:bg-blue-200 transition"
          >
            Go To Notes
          </Link>
        </div>

        <div className="mt-7">
          <Link
            href="/docs/progresstracker/progress-tracker.tsx"
            className="inline-block bg-blue text-white font-semibold text-sm px-5 py-2.5 rounded hover:bg-blue-200 transition"
          >
            Go To Progress
          </Link>
        </div>

      </header>

      {/* 3. FOOTER */}
      <footer className="mt-12 text-center text-xs text-zinc-600">
        <p>Progressus Meus</p>
        <legend>2026</legend>
      </footer>
    </main>
  );
}