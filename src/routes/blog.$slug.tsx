import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { findPost, posts } from "@/lib/blog-data";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const post = findPost(params.slug);
    const title = post ? `${post.title} — Fortuners Blog` : "Article — Fortuners Blog";
    const desc = post?.excerpt ?? "Perspectives from Fortuners Group.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  loader: ({ params }) => {
    const post = findPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const { post } = Route.useLoaderData();
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <article>
      {/* Hero */}
      <header className={`relative bg-gradient-to-br ${post.hero} text-white pt-40 pb-24`}>
        <div className="container-x">
          <Link to="/blog" className="text-xs uppercase tracking-[0.4em] text-[#e9d9b8] hover:text-white transition-colors">
            ← Back to Journal
          </Link>
          <div className="mt-8 flex items-center gap-4 text-xs uppercase tracking-[0.35em] text-[#e9d9b8]">
            <span>{post.date}</span>
            <span className="h-px w-8 bg-[#e9d9b8]/50" />
            <span>{post.readTime}</span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl leading-tight mt-6 max-w-4xl">{post.title}</h1>
          <p className="mt-6 max-w-2xl text-white/80 text-lg leading-relaxed">{post.excerpt}</p>
        </div>
      </header>

      {/* Body */}
      <div className="container-x py-20 max-w-3xl">
        {post.sections.map((s: { heading: string; paragraphs: string[] }, i: number) => (
          <section key={i} className="mb-14">
            <h2 className="font-serif text-3xl md:text-4xl mb-6 text-foreground">{s.heading}</h2>
            {s.paragraphs.map((para: string, j: number) => (
              <p key={j} className="text-foreground/75 leading-[1.9] text-[1.05rem] mb-5">
                {para}
              </p>
            ))}
            {post.pullquote && i === 1 && (
              <blockquote className="my-10 border-l-2 border-[#b89968] pl-6 py-2 font-serif italic text-2xl md:text-3xl text-foreground/80 leading-snug">
                “{post.pullquote}”
              </blockquote>
            )}
          </section>
        ))}

        <div className="mt-16 pt-10 border-t border-foreground/10 flex items-center justify-between">
          <Link to="/blog" className="text-sm text-[#b89968] hover:underline">
            ← All articles
          </Link>
          <Link to="/contact" className="text-sm text-[#b89968] hover:underline">
            Speak with us →
          </Link>
        </div>
      </div>

      {/* Related */}
      <section className="bg-[#faf8f5] py-20">
        <div className="container-x">
          <p className="text-xs uppercase tracking-[0.4em] text-[#b89968] mb-3">Continue reading</p>
          <h3 className="font-serif text-3xl md:text-4xl mb-10">More from the Journal</h3>
          <div className="grid gap-8 md:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                to="/blog/$slug"
                params={{ slug: r.slug }}
                className="group rounded-3xl border border-foreground/10 bg-white p-7 hover:border-[#b89968]/60 transition-colors block"
              >
                <div className="text-[11px] uppercase tracking-[0.3em] text-[#b89968]">{r.date}</div>
                <h4 className="font-serif text-xl mt-3 mb-3 group-hover:text-[#b89968] transition-colors">{r.title}</h4>
                <p className="text-foreground/70 text-sm leading-relaxed">{r.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
