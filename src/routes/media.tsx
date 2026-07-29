import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/media")({
  head: () => ({
    meta: [
      { title: "Media & Press — Fortuners Group" },
      { name: "description", content: "Press releases, media coverage, and brand assets from Fortuners Group." },
      { property: "og:title", content: "Media & Press — Fortuners Group" },
      { property: "og:description", content: "Press and media resources from Fortuners Group." },
    ],
  }),
  component: MediaPage,
});

const press = [
  { date: "July 2026", title: "Fortuners Group unveils Palais — a new benchmark in luxury living", source: "The Hindu BusinessLine" },
  { date: "May 2026", title: "How premium developers are rethinking sustainability", source: "Economic Times Realty" },
  { date: "March 2026", title: "Fortuners Elysium launch draws record footfall in Bengaluru", source: "Deccan Chronicle" },
  { date: "January 2026", title: "Design-led development: A conversation with Fortuners Group leadership", source: "Architectural Digest India" },
];

function MediaPage() {
  return (
    <section className="pt-32 pb-24 container-x">
      <p className="text-xs uppercase tracking-[0.4em] text-[#b89968] mb-4">Media</p>
      <h1 className="font-serif text-5xl md:text-6xl mb-6">Press & Media</h1>
      <p className="text-foreground/70 max-w-2xl mb-14">Selected coverage, press mentions, and resources for the media community. For interviews and press queries, write to <a className="text-[#b89968] hover:underline" href="mailto:press@fortunersgroup.com">press@fortunersgroup.com</a>.</p>

      <div className="grid gap-4">
        {press.map((p) => (
          <article key={p.title} className="rounded-3xl border border-foreground/10 p-6 md:p-8 hover:border-[#b89968]/60 transition-colors">
            <div className="text-xs uppercase tracking-[0.3em] text-[#b89968]">{p.date} · {p.source}</div>
            <h2 className="font-serif text-2xl mt-3">{p.title}</h2>
          </article>
        ))}
      </div>
    </section>
  );
}
