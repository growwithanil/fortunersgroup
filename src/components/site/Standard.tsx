import { useEffect, useRef, useState } from "react";
import loc from "@/assets/standard-location.jpg";
import pool from "@/assets/standard-pool.jpg";
import entry from "@/assets/standard-entry.jpg";
import club from "@/assets/standard-clubhouse.jpg";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-3.jpg";
import p3 from "@/assets/project-5.jpg";
import { useInView, revealCls } from "@/hooks/use-in-view";

const items = [
  { img: loc, title: "Chosen With Vision", desc: "We secure sites ahead of the curve — where infrastructure, connectivity and lifestyle converge." },
  { img: pool, title: "Architecture With Restraint", desc: "Light, air and proportion do the talking. Design that whispers, never shouts." },
  { img: entry, title: "Uncompromised Craft", desc: "Materials and workmanship selected to outlast trends, down to the smallest detail." },
  { img: club, title: "Clubhouse As Destination", desc: "A signature clubhouse conceived as the social heart of the community." },
  { img: p1, title: "Honest By Design", desc: "Truthful renders, transparent plans, and homes that arrive exactly as promised." },
  { img: p2, title: "In-House Finish Lab", desc: "A dedicated studio where every finish, fitting and fixture is proofed before it enters your home." },
  { img: p3, title: "One Team, End To End", desc: "From groundbreaking to handover, a single team stays answerable for the promise." },
];

export function Standard() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const offsetRef = useRef(0);
  const { ref: headRef, inView } = useInView<HTMLDivElement>(0.2);
  const { ref: trackWrapRef, inView: trackIn } = useInView<HTMLDivElement>(0.1);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let raf = 0;
    let last = performance.now();
    const speed = 40;

    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      if (!paused) {
        offsetRef.current -= speed * dt;
        const halfWidth = track.scrollWidth / 2;
        if (-offsetRef.current >= halfWidth) offsetRef.current += halfWidth;
        track.style.transform = `translate3d(${offsetRef.current}px,0,0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [paused]);

  const loop = [...items, ...items];

  return (
    <section className="pt-8 md:pt-12 pb-24 md:pb-36 overflow-hidden">
      <div className="container-x" ref={headRef}>
        <div className="max-w-none mb-16">
          <p {...revealCls(inView, 0)} className={"eyebrow mb-5 " + revealCls(inView, 0).className}>The Fortuners Standard</p>
          <h2 {...revealCls(inView, 150)} className={"text-2xl md:text-3xl lg:text-4xl whitespace-nowrap " + revealCls(inView, 150).className}>
            Every address starts as a commitment, <em className="italic text-primary">and lives on as a promise honoured.</em>
          </h2>
        </div>
      </div>

      <div
        ref={trackWrapRef}
        className={
          "relative transition-all duration-[1100ms] ease-out " +
          (trackIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")
        }
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 z-10 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 z-10 bg-gradient-to-l from-background to-transparent" />

        <div
          ref={trackRef}
          className="flex gap-6 md:gap-8 will-change-transform"
          style={{ width: "max-content" }}
        >
          {loop.map((it, i) => (
            <figure
              key={i}
              className="group shrink-0 w-[78vw] sm:w-[52vw] md:w-[38vw] lg:w-[28vw] xl:w-[22vw]"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-3xl border border-primary/20">
                <img
                  src={it.img}
                  alt={it.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
              </div>
              <figcaption>
                <h3 className="mt-6 text-2xl">{it.title}</h3>
                <p className="mt-2 text-sm text-foreground/65 leading-relaxed pr-4">{it.desc}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
