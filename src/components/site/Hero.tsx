import { useEffect, useRef, useState } from "react";
import heroPoster from "@/assets/hero.jpg";

// Served straight from /public rather than bundled — video belongs on the static path.
const HERO_VIDEO = "/hero-reel.mp4";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    // The element may already be buffered by the time React attaches the handler.
    if (v.readyState >= 3) setReady(true);
    // Safari/iOS occasionally ignore the autoplay attribute after hydration; a muted
    // play() call is always permitted and is a no-op when playback already started.
    void v.play().catch(() => {});
  }, []);

  return (
    <section
      className="relative h-[100svh] w-full overflow-hidden bg-black"
      aria-label="Fortuners Group"
    >
      {/* Live cinematic video backdrop */}
      <div className="absolute inset-0">
        {/* Still frame holds the composition until the video can play, so the hero
            never flashes black on a cold load. */}
        <img
          src={heroPoster}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover"
        />
        <video
          ref={videoRef}
          className={
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-out " +
            (ready ? "opacity-100" : "opacity-0")
          }
          src={HERO_VIDEO}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          onCanPlay={() => setReady(true)}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,185,154,0.22)_0%,_rgba(0,0,0,0)_60%)]" />
        <div className="absolute inset-0 bg-black/55" />
        {/* subtle grain */}
        <div
          className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.6'/></svg>\")",
          }}
        />
      </div>

      {/* Centered brand */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 text-center">
        <h1
          className="rise-in font-serif tracking-[0.08em] leading-none text-transparent bg-clip-text"
          style={{
            fontSize: "clamp(3rem, 11vw, 10rem)",
            backgroundImage:
              "linear-gradient(180deg, #f6e6c1 0%, #d9b877 35%, #8b6a2f 62%, #f0d497 85%, #6b4a1f 100%)",
            filter: "drop-shadow(0 6px 30px rgba(201,155,80,0.35))",
          }}
        >
          Fortuners Group
        </h1>
        <div
          className="mt-6 h-px w-40 md:w-72 rise-in"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(217,184,119,0.85), transparent)",
            animationDelay: "0.25s",
          }}
        />
        <p
          className="rise-in mt-6 font-sans uppercase tracking-[0.5em] text-[0.7rem] md:text-sm"
          style={{
            animationDelay: "0.5s",
            color: "#d9b877",
          }}
        >
          Building Trust, Creating Value
        </p>

        <div
          className="rise-in mt-14 flex flex-wrap justify-center gap-4"
          style={{ animationDelay: "0.8s" }}
        >
          <a
            href="/projects"
            className="inline-flex items-center rounded-full px-7 py-3.5 text-sm tracking-wide transition"
            style={{
              background:
                "linear-gradient(180deg, #e6c684 0%, #b8894a 100%)",
              color: "#1a1206",
            }}
          >
            Explore Projects
          </a>
          <a
            href="/about"
            className="inline-flex items-center rounded-full border px-7 py-3.5 text-sm tracking-wide transition hover:text-white"
            style={{
              borderColor: "rgba(217,184,119,0.5)",
              color: "#e6d3a3",
            }}
          >
            Our Story
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        style={{ color: "rgba(217,184,119,0.7)" }}
      >
        <span className="text-[0.65rem] tracking-[0.35em] uppercase">Scroll</span>
        <span className="block h-10 w-px overflow-hidden bg-[rgba(217,184,119,0.25)] relative">
          <span
            className="absolute inset-x-0 top-0 h-1/2 bg-[rgba(217,184,119,0.9)]"
            style={{ animation: "riseIn 1.6s ease-in-out infinite" }}
          />
        </span>
      </div>
    </section>
  );
}
