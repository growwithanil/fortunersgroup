import { useEffect, useRef, useState } from "react";
import sus from "@/assets/sustainability.jpg";

const stats = [
  { n: "30", suffix: "%", l: "Lower Water Consumption" },
  { n: "100", suffix: "%", l: "Eco-Conscious Planning" },
  { n: "100", suffix: "%", l: "Natural Light Optimization" },
];

export function Sustainability() {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const reveal = (delay = 0) =>
    ({
      transitionDelay: `${delay}ms`,
    }) as React.CSSProperties;

  const base =
    "transition-all duration-1000 ease-out will-change-transform";
  const hidden = "opacity-0 translate-y-8";
  const shown = "opacity-100 translate-y-0";

  return (
    <section
      id="sustainability"
      ref={ref}
      className="relative pt-16 md:pt-20 pb-8 md:pb-10 bg-background overflow-hidden"
    >
      <div className="container-x grid md:grid-cols-2 gap-12 md:gap-16 items-center relative">
        {/* Left: copy */}
        <div>
          <p
            className={`eyebrow mb-6 text-primary/80 ${base} ${visible ? shown : hidden}`}
            style={reveal(0)}
          >
            Sustainability
          </p>
          <h2
            className={`font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-primary ${base} ${visible ? shown : hidden}`}
            style={reveal(120)}
          >
            Lighter on Earth<br />Richer in Living
          </h2>
          <p
            className={`mt-8 text-foreground/75 leading-relaxed max-w-xl ${base} ${visible ? shown : hidden}`}
            style={reveal(260)}
          >
            Guided by IGBC green building principles, we design spaces that consume
            less, conserve more, and create healthier environments for generations to
            come. Our commitment is to create homes and communities that are
            environmentally responsible, energy-efficient, and built for lasting
            value. Because we believe true luxury isn't measured by what a building
            takes from the earth, but by what it gives back to the people who live in
            it.
          </p>

          <div className="mt-14 grid grid-cols-3 gap-6 max-w-xl">
            {stats.map((s, i) => (
              <div
                key={s.l}
                className={`pl-5 border-l border-primary/20 ${base} ${visible ? shown : hidden}`}
                style={reveal(420 + i * 140)}
              >
                <div className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary leading-none">
                  <CountUp target={parseInt(s.n, 10)} start={visible} delay={420 + i * 140} />
                  <span className="align-top text-xl md:text-2xl lg:text-3xl">
                    {s.suffix}
                  </span>
                </div>
                <div className="mt-4 text-sm text-foreground/70 leading-snug">
                  {s.l}
                </div>
              </div>
            ))}
          </div>

          <a
            href="/about"
            className={`group mt-12 inline-flex items-center gap-3 rounded-full border border-primary/60 pl-6 pr-2 py-2 text-sm tracking-wide text-primary hover:text-primary-foreground relative overflow-hidden ${base} ${visible ? shown : hidden}`}
            style={reveal(900)}
          >
            <span
              aria-hidden
              className="absolute inset-0 bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"
            />
            <span className="relative z-10">Explore More</span>
            <span
              aria-hidden
              className="relative z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform duration-500 group-hover:rotate-45"
            >
              ↗
            </span>
          </a>
        </div>

        {/* Right: image with decorative arc */}
        <div
          className={`relative mx-auto w-full max-w-md md:max-w-none ${base} ${visible ? shown : hidden}`}
          style={reveal(200)}
        >
          <svg
            className={`pointer-events-none absolute -top-10 -left-10 -right-10 -bottom-10 w-[calc(100%+5rem)] h-[calc(100%+5rem)] transition-all duration-[1600ms] ease-out ${
              visible ? "opacity-100" : "opacity-0"
            }`}
            viewBox="0 0 400 500"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              d="M 10 500 A 220 300 0 0 1 390 500"
              stroke="hsl(var(--primary) / 0.35)"
              strokeWidth="1"
              strokeDasharray="1200"
              strokeDashoffset={visible ? 0 : 1200}
              style={{ transition: "stroke-dashoffset 1800ms ease-out 300ms" }}
            />
          </svg>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] md:rounded-[2.5rem] border border-primary/15 shadow-lg group">
            <img
              src={sus}
              alt="Sustainable landscaped Fortuners community with lush green pathways"
              className={`h-full w-full object-cover transition-transform duration-[2000ms] ease-out ${
                visible ? "scale-100" : "scale-110"
              } group-hover:scale-105`}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function CountUp({ target, start, delay }: { target: number; start: boolean; delay: number }) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const startAt = performance.now() + delay;
    const duration = 1200;
    const tick = (now: number) => {
      const t = Math.max(0, Math.min(1, (now - startAt) / duration));
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(eased * target));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, delay]);
  return <>{value}</>;
}
