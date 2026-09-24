import Link from "next/link";

export default function HomePage() {
  return (
    <main className="max-w-xl mx-auto px-6 py-16 font-sans">
      {/* 1. HEADER */}
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-white mb-2">
          Computing Notes
        </h1>
        <p className="text-zinc-400 text-sm">
          My personal learning log from HTML basics to full-stack.
        </p>

        {/* Big simple button to open the notes */}
        <div className="mt-6">
          <Link
            href="/docs"
            className="inline-block bg-blue text-white font-semibold text-sm px-5 py-2.5 rounded hover:bg-zinc-200 transition"
          >
            Open Notes →
          </Link>
        </div>
      </header>

      {/* 2. THE 5 ROADMAP STEPS */}
      <div className="space-y-3">
        {/* Step 1: Active */}
        <section className="p-4 rounded-lg border border-blue-500 bg-zinc-900/60">
          <span className="text-xs font-mono text-red-400 font-semibold uppercase">
            Current Focus
          </span>
          <h2 className="text-base font-semibold text-white mt-1">
            01. HTML & Markup Basics
          </h2>
          <p className="text-xs text-zinc-400 mt-1">
            Tags, semantic structure, DOM hierarchy, and accessibility.
          </p>
        </section>

        {/* Step 2 */}
        <section className="p-4 rounded-lg border border-zinc-800 bg-zinc-950">
          <span className="text-xs font-mono text-zinc-500 uppercase">
            Step 02
          </span>
          <h2 className="text-base font-semibold text-zinc-300 mt-1">
            Modern CSS & Layouts
          </h2>
          <p className="text-xs text-zinc-500 mt-1">
            Flexbox, Grid, spacing, and Tailwind CSS.
          </p>
        </section>

        {/* Step 3 */}
        <section className="p-4 rounded-lg border border-zinc-800 bg-zinc-950">
          <span className="text-xs font-mono text-zinc-500 uppercase">
            Step 03
          </span>
          <h2 className="text-base font-semibold text-zinc-300 mt-1">
            JavaScript Fundamentals & DOM
          </h2>
          <p className="text-xs text-zinc-500 mt-1">
            Variables, functions, click events, and DOM manipulation.
          </p>
        </section>

        {/* Step 4 */}
        <section className="p-4 rounded-lg border border-zinc-800 bg-zinc-950">
          <span className="text-xs font-mono text-zinc-500 uppercase">
            Step 04
          </span>
          <h2 className="text-base font-semibold text-zinc-300 mt-1">
            React & Next.js Architecture
          </h2>
          <p className="text-xs text-zinc-500 mt-1">
            Components, props, state, and page routing.
          </p>
        </section>

        {/* Step 5 */}
        <section className="p-4 rounded-lg border border-zinc-800 bg-zinc-950">
          <span className="text-xs font-mono text-zinc-500 uppercase">
            Step 05
          </span>
          <h2 className="text-base font-semibold text-zinc-300 mt-1">
            APIs, Databases & Deployment
          </h2>
          <p className="text-xs text-zinc-500 mt-1">
            Fetching data, storing records, and going live.
          </p>
        </section>
      </div>

      {/* 3. FOOTER */}
      <footer className="mt-12 text-center text-xs text-zinc-600">
        <p>Progressus Meus</p>
        <legend>2026</legend>
      </footer>
    </main>
  );
}