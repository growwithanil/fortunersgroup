import { useEffect, useRef, useState } from "react";
import elixirCover from "@/assets/elixir-cover.jpg";
import elixirExterior from "@/assets/elixir-exterior.jpg";
import elixirDream from "@/assets/elixir-dream.jpg";

const projects = [
  { img: elixirCover, location: "Chandapura, Anekal Taluk · Bangalore", name: "Fortuners Infra Elixir", type: "RERA Approved Residential", config: "1, 2 & 3 BHK", desc: "A signature address by Fortuners Infra — 60 elegantly crafted homes on Lakshmi Sagar Village Road, moments from Mega International School and the Chandapura junction.", href: "/projects/elixir" },
  { img: elixirExterior, location: "Fortuners Infra Elixir · Bangalore", name: "Urban Sophistication, Elevated", type: "Contemporary Facade", config: "4 Floors · 60 Units · 2 Lifts", desc: "Step into a premier residential development where contemporary design meets everyday functionality — elegantly proportioned facades, wide balconies and thoughtfully planned homes.", href: "/projects/elixir" },
  { img: elixirDream, location: "Fortuners Infra Elixir · Bangalore", name: "Crafting the Home of Your Dreams", type: "Signature Residences", config: "Basement Parking · Vaastu Compliant", desc: "Layouts that maximise space and natural light, world-class amenities inside a landscaped community, and specifications engineered for a lifetime of comfort.", href: "/projects/elixir" },
];


export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // Before layout settles the section can measure no taller than the viewport, making
      // `total` 0 — the division below then yields NaN, which survives Math.min and indexes
      // the array out of bounds. Stay on the first slide until there is scroll range.
      const total = el.offsetHeight - vh;
      if (total <= 0) {
        setActive(0);
        return;
      }
      const progressed = Math.min(Math.max(-rect.top, 0), total);
      const idx = Math.min(
        projects.length - 1,
        Math.max(0, Math.floor((progressed / total) * projects.length)),
      );
      setActive(idx);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative"
      style={{ height: `${projects.length * 100}svh` }}
    >
      <div className="sticky top-0 h-svh w-full overflow-hidden bg-black">
        {/* Background images — new image drops in from the top */}
        {projects.map((p, i) => {
          const pos = i === active ? 0 : i < active ? 100 : -100;
          return (
            <div
              key={p.name}
              className="absolute inset-0 will-change-transform"
              style={{
                transform: `translate3d(0, ${pos}%, 0)`,
                transition: "transform 900ms cubic-bezier(0.77, 0, 0.175, 1)",
                zIndex: i === active ? 2 : 1,
              }}
              aria-hidden={i !== active}
            >
              <img
                src={p.img}
                alt={`${p.name}, ${p.location}`}
                className="h-full w-full object-contain object-center bg-black"
                loading={i === 0 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-black/55" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
            </div>
          );
        })}

        {/* Section eyebrow */}
        <div className="absolute top-10 left-0 right-0 z-10">
          <div className="container-x">
            <p className="eyebrow text-white/80">Signature Portfolio</p>
          </div>
        </div>

        {/* Content overlay */}
        <div className="relative z-10 h-full">
          <div className="container-x h-full flex items-center">
            <div key={active} className="max-w-xl text-white animate-fade-in">
              <div className="text-sm uppercase tracking-[0.3em] text-white/80">
                Signature ·{" "}
                <span className="text-primary">
                  {String(active + 1).padStart(2, "0")}
                </span>{" "}
                / {String(projects.length).padStart(2, "0")}
              </div>

              <div className="mt-8 text-sm uppercase tracking-widest text-white/80">
                {projects[active].location}
              </div>
              <h3 className="mt-4 font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05]">
                {projects[active].name}
              </h3>

              <div className="my-6 h-px w-56 bg-white/30" />

              <div className="text-sm text-white/90">
                {projects[active].type} &nbsp;|&nbsp; {projects[active].config}
              </div>

              <div className="my-6 h-px w-56 bg-white/30" />

              <p className="max-w-md text-white/85 leading-relaxed">
                {projects[active].desc}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={(projects[active] as { href?: string }).href ?? "/projects"}
                  className="rounded-full bg-primary px-7 py-3 text-sm tracking-wide text-primary-foreground hover:opacity-90 transition"
                >
                  View Project
                </a>
                <a
                  href="/contact"
                  className="rounded-full bg-white px-7 py-3 text-sm tracking-wide text-primary hover:bg-white/90 transition"
                >
                  Download Brochure ↓
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Vertical progress indicator */}
        <div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 z-10 hidden sm:flex flex-col items-center gap-3">
          {projects.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to project ${i + 1}`}
              onClick={() => {
                const el = containerRef.current;
                if (!el) return;
                const total = el.offsetHeight - window.innerHeight;
                const y = el.offsetTop + (total * i) / projects.length + 4;
                window.scrollTo({ top: y, behavior: "smooth" });
              }}
              className={`w-px transition-all duration-500 ${
                i === active ? "h-10 bg-primary" : "h-6 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
