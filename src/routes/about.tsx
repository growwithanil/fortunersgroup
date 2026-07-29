import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/site/About";
import { Principles } from "@/components/site/Principles";
import { Leadership } from "@/components/site/Leadership";
import { Team } from "@/components/site/Team";
import { Standard } from "@/components/site/Standard";
import heroVideo from "@/assets/about-hero.mp4.asset.json";

function AboutHeader() {
  return (
    <section className="relative h-[60svh] min-h-[420px] w-full overflow-hidden bg-black">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={heroVideo.url}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,185,154,0.22)_0%,_rgba(0,0,0,0)_60%)]" />
      <div className="absolute inset-0 bg-black/55" />
      {/* pt clears the fixed nav (96px mobile / 120px desktop) so the centred content
          can't slide under it when the section falls back to its min-height. */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 pt-28 md:pt-36 text-center">
        <p
          className="font-sans uppercase tracking-[0.5em] text-[0.7rem] md:text-sm mb-4"
          style={{ color: "#d9b877" }}
        >
          About Us
        </p>
        <h1
          className="font-serif tracking-[0.06em] leading-none text-transparent bg-clip-text"
          style={{
            fontSize: "clamp(2.5rem, 7vw, 6rem)",
            backgroundImage:
              "linear-gradient(180deg, #f6e6c1 0%, #d9b877 35%, #8b6a2f 62%, #f0d497 85%, #6b4a1f 100%)",
            filter: "drop-shadow(0 6px 30px rgba(201,155,80,0.35))",
          }}
        >
          FORTUNERS GROUP
        </h1>
        <div
          className="mt-5 h-px w-40 md:w-60"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(217,184,119,0.85), transparent)",
          }}
        />
        <p
          className="mt-5 font-serif italic text-lg md:text-xl"
          style={{ color: "#e6d3a3" }}
        >
          Foundation of Legacies
        </p>
      </div>
    </section>
  );
}

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Fortuners Group" },
      { name: "description", content: "Two decades of building homes with honesty and craft. The Fortuners story and the standards behind every address." },
      { property: "og:title", content: "About — Fortuners Group" },
      { property: "og:description", content: "The story and standards behind Fortuners Group." },
    ],
  }),
  component: () => (
    <>
      <AboutHeader />
      <About />
      <Principles />
      <Leadership />
      <Team />
      <Standard />
    </>
  ),
});
