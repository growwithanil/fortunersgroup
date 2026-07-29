import { createFileRoute } from "@tanstack/react-router";
import { Projects } from "@/components/site/Projects";

function ProjectsHeader() {
  return (
    <section className="relative h-[52svh] min-h-[380px] w-full overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,185,154,0.28)_0%,_rgba(0,0,0,0)_60%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#1a1408] to-black" />
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 text-center">
        <p
          className="font-sans uppercase tracking-[0.5em] text-[0.7rem] md:text-sm mb-4"
          style={{ color: "#d9b877" }}
        >
          Signature Portfolio
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
          PROJECTS
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
          Landmarks Crafted with Intent
        </p>
      </div>
    </section>
  );
}

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Fortuners Group" },
      { name: "description", content: "Signature landmarks by Fortuners Group — luxury residences, plotted developments and commercial spaces." },
      { property: "og:title", content: "Projects — Fortuners Group" },
      { property: "og:description", content: "Explore the signature portfolio of Fortuners Group." },
    ],
  }),
  component: () => (
    <>
      <ProjectsHeader />
      <Projects />
    </>
  ),
});
