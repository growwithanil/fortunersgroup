import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import builders from "@/assets/builders-developers.jpg";
import commercial from "@/assets/commercial.jpg";
import interior from "@/assets/interior.jpg";

const items = [
  {
    company: "Fortuners Infraa",
    type: "Builders & Developers",
    img: builders,
    desc: "Premium residences and landmark developments defined by exceptional build quality.",
    href: "/services/builders",
  },
  {
    company: "Fortuners BuildEdge",
    type: "Turnkey Construction",
    img: commercial,
    desc: "End-to-end turnkey construction delivered with precision, safety and scale.",
    href: "/services/construction",
  },
  {
    company: "Fortuners Decor",
    type: "Interior & Decor",
    img: interior,
    desc: "Bespoke interiors that turn every residence into a signature statement.",
    href: "/services/interior",
  },
];

function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function AnimatedHeading({ inView }: { inView: boolean }) {
  const lines: Array<{ words: string[]; italic?: boolean }> = [
    { words: ["Crafted", "with", "distinction."] },
    { words: ["Delivered", "across", "every", "vertical."], italic: true },
  ];
  let idx = 0;
  return (
    <h2 className="text-2xl md:text-3xl leading-[1.15]">
      {lines.map((line, li) => (
        <span key={li} className="block overflow-hidden">
          {line.words.map((w, wi) => {
            const delay = 120 + idx * 90;
            idx++;
            return (
              <span key={wi} className="inline-block overflow-hidden align-baseline">
                <span
                  style={{ transitionDelay: `${delay}ms` }}
                  className={
                    "inline-block transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform " +
                    (line.italic ? "italic text-primary " : "") +
                    (inView ? "translate-y-0 opacity-100" : "translate-y-[110%] opacity-0")
                  }
                >
                  {w}
                  {wi < line.words.length - 1 && "\u00A0"}
                </span>
              </span>
            );
          })}
        </span>
      ))}
    </h2>
  );
}

export function Verticals() {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);

  return (
    <section id="verticals" className="py-24 md:py-36 bg-secondary/50 overflow-hidden">
      <div ref={ref} className="container-x">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <p
            className={
              "eyebrow mb-6 text-xl md:text-2xl tracking-[0.3em] transition-all duration-[900ms] ease-out " +
              (inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3")
            }
          >
            Fortuners Group
          </p>
          <AnimatedHeading inView={inView} />
          <p
            style={{ transitionDelay: "600ms" }}
            className={
              "mt-6 text-foreground/70 leading-relaxed transition-all duration-[900ms] ease-out " +
              (inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")
            }
          >
            Every vertical carries the same promise —
            excellence without compromise.

          </p>
        </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <Link
              key={it.company}
              to={it.href}
              style={{ transitionDelay: `${700 + i * 140}ms` }}
              className={
                "group block bg-card overflow-hidden rounded-3xl border border-primary/15 transition-all duration-[1000ms] ease-out hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10 " +
                (inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")
              }
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={it.img}
                  alt={`${it.company} — ${it.type}`}
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif">{it.company}</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-primary">{it.type}</p>
                <p className="mt-3 text-sm text-foreground/65 leading-relaxed">{it.desc}</p>
                <div className="mt-5 text-xs uppercase tracking-widest text-primary flex items-center gap-2 group-hover:gap-3 transition-all">
                  Discover <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
