import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 p-8">
      {/* 1. HEADER */}
      <header className="max-w-2xl mx-auto mb-12">
        <h1 className="text-3xl font-bold">Computing Notes</h1>
        <p className="text-neutral-400 mt-2">
          Tracking my journey from HTML to Full-Stack.
        </p>
      </header>

      {/* 2. MAIN CONTENT (THE ROADMAP) */}
      <main className="max-w-2xl mx-auto space-y-4">
        {/* Step 1 - Current Focus */}
        <section className="p-5 rounded-lg border border-amber-500 bg-neutral-900">
          <span className="text-xs font-mono text-amber-400 uppercase">
            Current Focus
          </span>
          <h2 className="text-xl font-semibold mt-1">01. HTML & Markup Basics</h2>
          <p className="text-neutral-400 text-sm mt-2">
            Learning document structure, tags, accessibility, and semantics.
          </p>
        </section>

        {/* Step 2 */}
        <section className="p-5 rounded-lg border border-neutral-800 bg-neutral-900/50">
          <span className="text-xs font-mono text-neutral-500 uppercase">
            Up Next
          </span>
          <h2 className="text-xl font-semibold text-neutral-300 mt-1">
            02. Modern CSS & Layouts
          </h2>
          <p className="text-neutral-500 text-sm mt-2">
            Flexbox, Grid, responsive design, and styling systems.
          </p>
        </section>

        {/* Step 3 */}
        <section className="p-5 rounded-lg border border-neutral-800 bg-neutral-900/50">
          <span className="text-xs font-mono text-neutral-500 uppercase">
            Upcoming
          </span>
          <h2 className="text-xl font-semibold text-neutral-300 mt-1">
            03. JavaScript Fundamentals & DOM
          </h2>
          <p className="text-neutral-500 text-sm mt-2">
            Interactivity, variables, loops, functions, and events.
          </p>
        </section>

        {/* Step 4 */}
        <section className="p-5 rounded-lg border border-neutral-800 bg-neutral-900/50">
          <span className="text-xs font-mono text-neutral-500 uppercase">
            Upcoming
          </span>
          <h2 className="text-xl font-semibold text-neutral-300 mt-1">
            04. React & Next.js Architecture
          </h2>
          <p className="text-neutral-500 text-sm mt-2">
            Components, state, props, and server rendering.
          </p>
        </section>

        {/* Step 5 */}
        <section className="p-5 rounded-lg border border-neutral-800 bg-neutral-900/50">
          <span className="text-xs font-mono text-neutral-500 uppercase">
            Upcoming
          </span>
          <h2 className="text-xl font-semibold text-neutral-300 mt-1">
            05. APIs, Databases & Deployment
          </h2>
          <p className="text-neutral-500 text-sm mt-2">
            Connecting backends, storing data, and pushing live.
          </p>
        </section>
      </main>

      {/* 3. FOOTER */}
      <footer className="max-w-2xl mx-auto mt-16 text-center text-xs text-neutral-600">
        <p>Built with Next.js & HTML fundamentals.</p>
      </footer>
    </div>
  );
}