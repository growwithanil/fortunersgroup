import { createFileRoute, Link } from "@tanstack/react-router";
import { posts } from "@/lib/blog-data";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Fortuners Group" },
      { name: "description", content: "Stories, insights, and updates from Fortuners Group on real estate, design, and sustainable living." },
      { property: "og:title", content: "Blog — Fortuners Group" },
      { property: "og:description", content: "Stories and insights from Fortuners Group." },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <section className="pt-32 pb-24 container-x">
      <p className="text-xs uppercase tracking-[0.4em] text-[#b89968] mb-4">Journal</p>
      <h1 className="font-serif text-5xl md:text-6xl mb-6">The Fortuners Blog</h1>
      <p className="text-foreground/70 max-w-2xl mb-14">Perspectives on design, craft, sustainability, and the practice of building homes that endure.</p>

      <div className="grid gap-10 md:grid-cols-2">
        {posts.map((p) => (
          <Link
            key={p.slug}
            to="/blog/$slug"
            params={{ slug: p.slug }}
            className="group rounded-3xl border border-foreground/10 p-8 hover:border-[#b89968]/60 transition-colors block"
          >
            <div className="text-xs uppercase tracking-[0.3em] text-[#b89968]">{p.date}</div>
            <h2 className="font-serif text-2xl md:text-3xl mt-3 mb-4 group-hover:text-[#b89968] transition-colors">{p.title}</h2>
            <p className="text-foreground/70 leading-relaxed">{p.excerpt}</p>
            <span className="mt-6 inline-block text-sm text-[#b89968]">Read more →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
