import { useEffect, useState } from "react";
import { useInView, revealCls } from "@/hooks/use-in-view";
import g1 from "@/assets/gallery-1.jpg.asset.json";
import g2 from "@/assets/gallery-2.jpg.asset.json";
import g3 from "@/assets/gallery-3.jpg.asset.json";
import g4 from "@/assets/gallery-4.jpg.asset.json";
import g5 from "@/assets/gallery-5.jpg.asset.json";
import g6 from "@/assets/gallery-6.jpg.asset.json";

const shots = [
  { src: g1.url, caption: "Aerial View — Fortuners Enclave", span: "md:col-span-2 md:row-span-2" },
  { src: g2.url, caption: "Front Elevation" },
  { src: g3.url, caption: "Landscape & Surrounds" },
  { src: g4.url, caption: "Skyline Perspective", span: "md:col-span-2" },
];

export function Gallery() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const close = () => setOpenIdx(null);
  const prev = () => setOpenIdx((i) => (i === null ? i : (i - 1 + shots.length) % shots.length));
  const next = () => setOpenIdx((i) => (i === null ? i : (i + 1) % shots.length));

  useEffect(() => {
    if (openIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [openIdx]);

  return (
    <section id="gallery" className="bg-[#faf8f5] pt-20 md:pt-28 pb-0">
      <div className="container-x">
        <div ref={ref} className="mb-12 text-center">
          <p {...revealCls(inView, 0)} className={`eyebrow ${revealCls(inView, 0).className}`}>
            Site Gallery
          </p>
          <h2
            {...revealCls(inView, 120)}
            className={`mt-3 font-serif text-4xl md:text-5xl lg:text-6xl text-[#3a2f22] ${revealCls(inView, 120).className}`}
          >
            Milestones of Legacy
          </h2>
          <div
            {...revealCls(inView, 240)}
            className={`mx-auto mt-5 h-px w-40 bg-[#c9b99a] ${revealCls(inView, 240).className}`}
          />
          <p
            {...revealCls(inView, 320)}
            className={`mx-auto mt-6 max-w-none whitespace-nowrap text-[#5b4a34] leading-relaxed ${revealCls(inView, 320).className}`}
          >
            A closer look at the addresses we've delivered — architecture, landscape and community, captured on site.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[220px] md:auto-rows-[260px] gap-4 md:gap-5">
          {shots.map((s, i) => (
            <figure
              key={s.src}
              onClick={() => setOpenIdx(i)}
              className={`group relative cursor-zoom-in overflow-hidden rounded-3xl shadow-sm ring-1 ring-[#e8dfce] ${s.span ?? ""}`}
              style={{
                transitionDelay: `${i * 90}ms`,
                transform: inView ? "translateY(0)" : "translateY(24px)",
                opacity: inView ? 1 : 0,
                transition: "opacity 900ms ease-out, transform 900ms ease-out",
              }}
            >
              <img
                src={s.src}
                alt={s.caption}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <figcaption className="absolute bottom-0 left-0 right-0 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 p-4 md:p-5 text-white font-serif text-lg md:text-xl tracking-wide">
                {s.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {openIdx !== null && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={close}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fade-in p-4"
        >
          <button
            aria-label="Close"
            onClick={close}
            className="absolute top-5 right-5 h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 text-white text-2xl leading-none flex items-center justify-center transition"
          >
            ×
          </button>
          <button
            aria-label="Previous"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 md:left-8 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 text-white text-2xl flex items-center justify-center transition"
          >
            ‹
          </button>
          <button
            aria-label="Next"
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 md:right-8 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 text-white text-2xl flex items-center justify-center transition"
          >
            ›
          </button>
          <figure
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[88vh] max-w-[92vw] md:max-w-[80vw]"
          >
            <img
              src={shots[openIdx].src}
              alt={shots[openIdx].caption}
              className="max-h-[82vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
            />
            <figcaption className="mt-4 text-center font-serif text-lg md:text-xl text-white/90 tracking-wide">
              {shots[openIdx].caption}
              <span className="ml-3 text-white/50 text-sm">
                {openIdx + 1} / {shots.length}
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
