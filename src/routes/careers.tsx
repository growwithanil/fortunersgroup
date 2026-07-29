import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Fortuners Group" },
      { name: "description", content: "Build your career with Fortuners Group. Explore open roles across design, engineering, sales, and operations." },
      { property: "og:title", content: "Careers — Fortuners Group" },
      { property: "og:description", content: "Open roles at Fortuners Group." },
    ],
  }),
  component: CareersPage,
});

const roles = [
  { title: "Senior Architect", loc: "Hyderabad", type: "Full-time" },
  { title: "Interior Designer", loc: "Bengaluru", type: "Full-time" },
  { title: "Sales Manager — Residential", loc: "Hyderabad", type: "Full-time" },
  { title: "Site Engineer (Civil)", loc: "Hyderabad", type: "Full-time" },
  { title: "Marketing Lead", loc: "Bengaluru", type: "Full-time" },
  { title: "Client Relationship Executive", loc: "Hyderabad", type: "Full-time" },
];

function CareersPage() {
  return (
    <section className="pt-32 pb-24 container-x">
      <p className="text-xs uppercase tracking-[0.4em] text-[#b89968] mb-4">Careers</p>
      <h1 className="font-serif text-5xl md:text-6xl mb-6">Build with us</h1>
      <p className="text-foreground/70 max-w-2xl mb-14">We're looking for people who care deeply about craft, detail, and long-term thinking. If that's you, we'd love to hear from you.</p>

      <div className="grid gap-4">
        {roles.map((r) => (
          <div key={r.title} className="flex flex-col md:flex-row md:items-center justify-between gap-4 rounded-3xl border border-foreground/10 p-6 md:p-8 hover:border-[#b89968]/60 transition-colors">
            <div>
              <h3 className="font-serif text-2xl">{r.title}</h3>
              <div className="text-sm text-foreground/60 mt-1">{r.loc} · {r.type}</div>
            </div>
            <a href="mailto:careers@fortunersgroup.com" className="inline-flex items-center justify-center rounded-full border border-[#b89968] text-[#b89968] px-6 py-2.5 text-sm hover:bg-[#b89968] hover:text-background transition-colors">Apply</a>
          </div>
        ))}
      </div>

      <p className="mt-12 text-sm text-foreground/60">Don't see the right role? Write to us at <a href="mailto:careers@fortunersgroup.com" className="text-[#b89968] hover:underline">careers@fortunersgroup.com</a></p>
    </section>
  );
}
