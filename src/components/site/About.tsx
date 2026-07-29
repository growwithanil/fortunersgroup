import { useEffect, useRef, useState } from "react";
import residential from "@/assets/residential.jpg";

const stats = [
  { value: "25+", label: "Years of Legacy" },
  { value: "40+", label: "Landmark Delivered" },
  { value: "12", label: "Million Sq. Ft. Delivered" },
  { value: "10K+", label: "Happy Families" },
];

function useInView<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function reveal(inView: boolean, delay = 0) {
  return {
    style: {
      transitionDelay: `${delay}ms`,
    } as React.CSSProperties,
    className:
      "transition-all duration-[900ms] ease-out will-change-transform " +
      (inView
        ? "opacity-100 translate-y-0 blur-0"
        : "opacity-0 translate-y-6 blur-[6px]"),
  };
}

// Word-by-word reveal for the headline
function AnimatedHeadline({ inView }: { inView: boolean }) {
  const lines = [
    ["We", "Don't", "Just", "Construct"],
    ["We", "Craft", "Enduring", "Legacies"],
  ];
  let counter = 0;
  return (
    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.05] text-primary">
      {lines.map((line, li) => (
        <span key={li} className="block overflow-hidden">
          <span className="inline-block">
            {line.map((word, wi) => {
              const delay = 120 + counter * 90;
              counter++;
              return (
                <span
                  key={wi}
                  className="inline-block overflow-hidden align-baseline"
                >
                  <span
                    style={{
                      transitionDelay: `${delay}ms`,
                    }}
                    className={
                      "inline-block transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform " +
                      (inView
                        ? "translate-y-0 opacity-100"
                        : "translate-y-[110%] opacity-0")
                    }
                  >
                    {word}
                    {wi < line.length - 1 && "\u00A0"}
                  </span>
                </span>
              );
            })}
          </span>
        </span>
      ))}
    </h2>
  );
}

export function About() {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);

  return (
    <section id="about" className="py-16 md:py-20 bg-background overflow-hidden">
      <div
        ref={ref}
        className="container-x grid md:grid-cols-2 gap-10 md:gap-14 items-center"
      >
        {/* Left: copy */}
        <div>
          <div
            style={{ transitionDelay: "200ms" }}
            className={
              "mb-6 font-serif text-4xl md:text-6xl gold-title transition-all duration-[900ms] ease-out " +
              (inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")
            }
          >
            Fortuners Group
          </div>
          <AnimatedHeadline inView={inView} />




          <div
            style={{ transitionDelay: "700ms" }}
            className={
              "mt-8 space-y-5 text-foreground/75 leading-relaxed max-w-xl transition-all duration-[900ms] ease-out " +
              (inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4")
            }
          >
            <p>
              Established in 2019, Fortuner’s Group is a trusted partnership firm
              delivering integrated solutions across real estate development,
              turnkey construction, and premium interior design in Bangalore and
              Hyderabad. Built on the principles of quality, transparency,
              innovation, and customer satisfaction, the group has earned a strong
              reputation for creating exceptional residential and commercial spaces.
            </p>
            <p>
              At Fortuners Group, every project is driven by thoughtful planning.
              Whether you’re investing in real estate, constructing your dream
              property, or designing elegant interiors, Fortuners Group is your
              trusted partner in building inspiring spaces and creating a better
              future—where every vision is transformed into reality with confidence,
              precision, and excellence.
            </p>
          </div>

          <a
            href="/projects"
            style={{ transitionDelay: "900ms" }}
            className={
              "mt-10 inline-flex items-center gap-2 rounded-full border border-primary/60 px-6 py-3 text-sm tracking-wide text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-[900ms] ease-out " +
              (inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4")
            }
          >
            <span className="inline-flex items-center gap-2 group">
              Explore Now
              <span
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              >
                ↗
              </span>
            </span>
          </a>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div
                key={s.label}
                style={{ transitionDelay: `${1000 + i * 120}ms` }}
                className={
                  "pl-4 border-l border-primary/20 transition-all duration-[900ms] ease-out " +
                  (inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6")
                }
              >
                <div className="font-serif text-3xl md:text-4xl text-primary leading-none">
                  {s.value}
                  <span className="align-top text-xl md:text-2xl">+</span>
                </div>
                <div className="mt-2 text-xs text-foreground/70 leading-snug">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: image with decorative arc */}
        <div
          style={{ transitionDelay: "200ms" }}
          className={
            // Width is capped on md+ so the 3/4 portrait height stays inside the
            // viewport instead of overflowing it (54vh wide => 72vh tall).
            "relative mx-auto w-full max-w-md md:max-w-[min(54vh,480px)] transition-all duration-[1200ms] ease-out " +
            (inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10")
          }
        >
          {/* Decorative arc */}
          <svg
            className="pointer-events-none absolute -top-8 -left-8 -right-8 -bottom-8 w-[calc(100%+4rem)] h-[calc(100%+4rem)]"
            viewBox="0 0 400 500"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              d="M 20 500 A 200 260 0 0 1 380 500"
              stroke="hsl(var(--primary) / 0.35)"
              strokeWidth="1"
              pathLength={1}
              strokeDasharray={1}
              strokeDashoffset={inView ? 0 : 1}
              style={{ transition: "stroke-dashoffset 1600ms ease-out 400ms" }}
            />
          </svg>
          <div className="relative aspect-[3/4] overflow-hidden rounded-[2.5rem] group">
            <img
              src={residential}
              alt="Fortuners luxury tower at dusk"
              className={
                "h-full w-full object-cover transition-transform duration-[1600ms] ease-out " +
                (inView ? "scale-100" : "scale-110")
              }
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            <div
              style={{ transitionDelay: "800ms" }}
              className={
                "absolute top-8 left-8 right-8 text-white/90 tracking-[0.35em] text-sm md:text-base font-light transition-all duration-[900ms] ease-out " +
                (inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-3")
              }
            >
              IT'S JUST<br />FOR YOU
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
